/* =============================================================
   audio.js — Web Speech API による本番模擬音声
   TOEIC の 4 アクセント（米・英・豪・加）を、端末内蔵音声で再現する。
   音声ファイルを持たないので GitHub Pages に静的配置できる。
   ============================================================= */

import { state } from './store.js';

const synth = window.speechSynthesis;
export const supported = !!synth;

/* ── 話者ロール ──────────────────────────────────────── */
export const ROLES = {
  'M-Am': { lang: 'en-US', sex: 'm', label: 'アメリカ人男性' },
  'W-Am': { lang: 'en-US', sex: 'f', label: 'アメリカ人女性' },
  'M-Br': { lang: 'en-GB', sex: 'm', label: 'イギリス人男性' },
  'W-Br': { lang: 'en-GB', sex: 'f', label: 'イギリス人女性' },
  'M-Au': { lang: 'en-AU', sex: 'm', label: 'オーストラリア人男性' },
  'W-Au': { lang: 'en-AU', sex: 'f', label: 'オーストラリア人女性' },
  'M-Cn': { lang: 'en-CA', sex: 'm', label: 'カナダ人男性' },
  'W-Cn': { lang: 'en-CA', sex: 'f', label: 'カナダ人女性' },
  'NARR': { lang: 'en-US', sex: 'm', label: 'ナレーター' },
};

/* 端末音声の性別推定（多くのブラウザは gender を返さないため名前で判定）*/
const FEMALE = /(samantha|karen|moira|fiona|tessa|victoria|susan|zoe|serena|allison|ava|joanna|kendra|kimberly|salli|amy|emma|nicole|olivia|female|woman|zira|hazel|catherine|linda|aria|jenny|michelle|sonia|libby|natasha|clara|female)/i;
const MALE = /(alex|daniel|fred|tom|oliver|arthur|gordon|lee|rishi|male|man|david|mark|george|ryan|guy|william|liam|matthew|justin|joey|brian|russell|eric|christopher|roger|steffan)/i;

let voices = [];
let ready = null;

/* TOEIC で使われる 4 アクセントに対応する言語タグだけを採用する。
   en-IE / en-ZA / en-IN などは本番に出ないので候補から外す。 */
const USABLE_LANG = /^en[-_](us|gb|au|ca)$/i;
/* macOS などに同梱される演出用の音声。読み上げ教材には使えない */
const NOVELTY = /(zarvox|trinoids|bubbles|bells|boing|bahh|cellos|deranged|hysterical|pipe organ|organ|good news|bad news|jester|wobble|whisper|superstar|junior|kathy|princess|ralph|albert|zuzu|rocko|shelley|sandy|grandma|grandpa|eddy|flo|reed|rishi|道化|オルガン|震え|ささやき|うわさ|風船|鐘|よい知らせ|悪い知らせ|ゼルダ)/i;

const usableVoice = (v) => {
  const lang = String(v.lang || '').replace('_', '-');
  return USABLE_LANG.test(lang) && !NOVELTY.test(v.name || '');
};

export function loadVoices() {
  if (!supported) return Promise.resolve([]);
  if (ready) return ready;
  ready = new Promise((resolve) => {
    const grab = () => {
      const all = synth.getVoices().filter(v => /^en/i.test(v.lang));
      const usable = all.filter(usableVoice);
      // 4 アクセントが 1 つも見つからない端末では、英語音声全体から選ぶ
      voices = usable.length ? usable : all.filter(v => !NOVELTY.test(v.name || ''));
      if (voices.length) resolve(voices);
    };
    grab();
    if (!voices.length) {
      synth.addEventListener('voiceschanged', grab, { once: true });
      // Safari 等で voiceschanged が発火しない場合の保険
      setTimeout(() => { grab(); resolve(voices); }, 1200);
    }
  });
  return ready;
}

export const allVoices = () => voices;

function score(v, role) {
  const r = ROLES[role] || ROLES['NARR'];
  let s = 0;
  const lang = v.lang.replace('_', '-');
  if (lang.toLowerCase() === r.lang.toLowerCase()) s += 100;
  else if (lang.slice(0, 2) === 'en') s += 20;
  const name = v.name;
  const isF = FEMALE.test(name), isM = MALE.test(name);
  if (r.sex === 'f' && isF) s += 45;
  if (r.sex === 'm' && isM) s += 45;
  if (r.sex === 'f' && isM) s -= 35;
  if (r.sex === 'm' && isF) s -= 35;
  if (/enhanced|premium|natural|neural|siri/i.test(name)) s += 18;
  if (v.localService) s += 6;
  if (/compact|eloquence/i.test(name)) s -= 12;
  return s;
}

/** ロールに最も近い端末音声を選ぶ（設定で固定されていればそれを優先） */
export function pickVoice(role) {
  if (!voices.length) return null;
  const fixed = state.settings.voiceMap?.[role];
  if (fixed) {
    const v = voices.find(x => x.voiceURI === fixed);
    if (v) return v;
  }
  return [...voices].sort((a, b) => score(b, role) - score(a, role))[0] || voices[0];
}

/* ── 再生キュー ──────────────────────────────────────── */
let queue = [];
let idx = 0;
let playing = false;
let stopped = false;
let listeners = new Set();

export function onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }
function emit(ev) { listeners.forEach(f => { try { f(ev); } catch (e) { console.error(e); } }); }

export const isPlaying = () => playing;

/** Chrome の長文打ち切り対策で文単位に分割する */
function chunk(text, max = 190) {
  const out = [];
  const sentences = String(text).replace(/\s+/g, ' ').trim().match(/[^.!?]+[.!?]*\s*/g) || [text];
  let buf = '';
  for (const s of sentences) {
    if ((buf + s).length > max && buf) { out.push(buf.trim()); buf = s; }
    else buf += s;
  }
  if (buf.trim()) out.push(buf.trim());
  return out;
}

/**
 * lines: [{ role, text, pause }]  pause はミリ秒（その行の後の無音）
 */
export async function play(lines, opts = {}) {
  await loadVoices();
  stop();
  stopped = false;
  const rate = opts.rate ?? state.settings.rate ?? 1;

  queue = [];
  lines.forEach((ln, i) => {
    const v = pickVoice(ln.role || 'NARR');
    chunk(ln.text).forEach((piece, j, arr) => {
      queue.push({
        text: piece, voice: v, rate,
        pause: j === arr.length - 1 ? (ln.pause ?? (i < lines.length - 1 ? 420 : 0)) : 80,
        lineIndex: i,
      });
    });
  });

  idx = 0; playing = true;
  emit({ type: 'start', total: lines.length });
  step();
}

function step() {
  if (stopped || idx >= queue.length) {
    playing = false;
    emit({ type: stopped ? 'stop' : 'end' });
    return;
  }
  const item = queue[idx];
  emit({ type: 'line', index: item.lineIndex });

  const u = new SpeechSynthesisUtterance(item.text);
  if (item.voice) { u.voice = item.voice; u.lang = item.voice.lang; }
  u.rate = item.rate;
  u.pitch = 1;
  u.volume = 1;

  let advanced = false;
  const next = () => {
    if (advanced) return; advanced = true;
    idx += 1;
    if (stopped) { playing = false; emit({ type: 'stop' }); return; }
    if (item.pause) setTimeout(step, item.pause); else step();
  };
  u.onend = next;
  u.onerror = (e) => { if (e.error !== 'interrupted' && e.error !== 'canceled') console.warn('[tts]', e.error); next(); };

  try { synth.speak(u); } catch (e) { console.error(e); next(); }

  // Chrome が無音のまま固まるケースの保険（推定所要時間 + 余裕）
  const est = (item.text.length / 12) * 1000 / item.rate + 3000;
  setTimeout(() => { if (!advanced && !synth.speaking && !synth.pending) next(); }, est);
}

export function stop() {
  stopped = true; playing = false; queue = []; idx = 0;
  try { synth?.cancel(); } catch (e) { /* noop */ }
  emit({ type: 'stop' });
}

export function pause() { try { synth.pause(); emit({ type: 'pause' }); } catch (e) { } }
export function resume() { try { synth.resume(); emit({ type: 'resume' }); } catch (e) { } }

/* ── 設問読み上げの組み立て ──────────────────────────── */

/** Part1: 4 つの描写文（A〜D）を 1 人の話者が読む */
export function part1Lines(q) {
  const role = q.speaker || 'W-Am';
  const keys = ['(A)', '(B)', '(C)', '(D)'];
  return [
    { role: 'NARR', text: `Number ${q.no}. Look at the picture marked number ${q.no} in your test book.`, pause: 700 },
    ...q.choices.map((c, i) => ({ role, text: `${keys[i]} ${c}`, pause: 500 })),
  ];
}

/** Part2: 問いかけ 1 文 → 応答 3 つ */
export function part2Lines(q) {
  const a = q.speakerA || 'M-Am';
  const b = q.speakerB || 'W-Br';
  const keys = ['(A)', '(B)', '(C)'];
  return [
    { role: 'NARR', text: `Number ${q.no}.`, pause: 450 },
    { role: a, text: q.prompt, pause: 700 },
    ...q.choices.map((c, i) => ({ role: b, text: `${keys[i]} ${c}`, pause: 520 })),
  ];
}

/** Part3/4: 指示 → 会話/トーク → 設問読み上げ */
export function setLines(set, opts = {}) {
  const lines = [];
  const nos = set.questions.map(q => q.no);
  const range = `${nos[0]} through ${nos[nos.length - 1]}`;
  lines.push({
    role: 'NARR',
    text: set.part === 3
      ? `Questions ${range} refer to the following ${set.kind || 'conversation'}.`
      : `Questions ${range} refer to the following ${set.kind || 'talk'}.`,
    pause: 800,
  });
  set.script.forEach(l => lines.push({ role: l.role, text: l.text, pause: 260 }));
  if (opts.readQuestions !== false) {
    set.questions.forEach(q => {
      lines.push({ role: 'NARR', text: `Number ${q.no}. ${q.stem}`, pause: opts.gap ?? 800 });
    });
  }
  return lines;
}

/** 単語・フレーズを 1 つだけ発音（語注の発音確認用） */
export async function say(text, role = 'W-Am') {
  if (!supported) return false;
  await loadVoices();
  stop(); stopped = false;
  const u = new SpeechSynthesisUtterance(text);
  const v = pickVoice(role);
  if (v) { u.voice = v; u.lang = v.lang; }
  u.rate = state.settings.rate ?? 1;
  try { synth.speak(u); } catch (e) { console.warn('[tts]', e); return false; }
  return true;
}
