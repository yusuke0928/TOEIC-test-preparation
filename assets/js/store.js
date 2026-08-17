/* =============================================================
   store.js — 永続化 / 学習履歴 / 間隔反復（SRS）
   localStorage 単独で完結。サーバ不要 → GitHub Pages でそのまま動く。
   ============================================================= */

export const KEY = 'toeic-lr900.v1';
// 旧アプリ名だった頃の localStorage キー。利用者の端末に実際に書き込まれた値
// そのものなので変更できない。移行のためだけに参照する。
const OLD_KEY = 'shuki.v1';
const SCHEMA = 1;

/**
 * 一度きりの移行: 新キーがまだ無く、旧キー（旧アプリ名時代のキー）にデータが
 * 残っている場合はそれをそのまま新キーへコピーする。
 * 旧キーは消さない（万一この移行処理自体に不具合があっても手元にデータが残るように）。
 */
function migrateFromOldKey() {
  try {
    if (localStorage.getItem(KEY) != null) return;
    const old = localStorage.getItem(OLD_KEY);
    if (old == null) return;
    localStorage.setItem(KEY, old);
    console.info(`[toeic900] 旧キー "${OLD_KEY}" のデータを "${KEY}" へ移行しました（旧キーは残しています）。`);
  } catch (e) {
    console.warn('[toeic900] 旧データの移行に失敗しました。', e);
  }
}
migrateFromOldKey();

const DEFAULTS = {
  schema: SCHEMA,
  settings: {
    theme: 'paper',
    rate: 1.0,              // TTS 速度
    autoPlay: true,         // 設問表示時に自動再生
    autoAdvance: false,     // 解答後に自動で次へ
    voiceMap: {},           // 'M-Am' → voiceURI
    drillInstant: true,     // ドリルは即時採点
    showTimer: true,
    dailyGoal: 30,          // 1日の目標問題数
    scriptMode: false,      // 音が出せない場所用：選択肢とスクリプトを読んで解く
  },
  attempts: [],             // 受験・演習の記録
  items: {},                // 設問ごとの習熟度
  sessions: {},             // 中断中のセッション
  notes: {},                // 設問メモ
  flags: {},                // フラグ（後で見直す）
};

/* ── 読み書き ────────────────────────────────────────── */
const isPlainObject = (v) => !!v && typeof v === 'object' && !Array.isArray(v);
const asObject = (v) => (isPlainObject(v) ? v : {});
const asArray = (v) => (Array.isArray(v) ? v : []);
const asNumber = (v, fb) => (Number.isFinite(Number(v)) ? Number(v) : fb);

/**
 * 外部から来た（＝壊れている可能性のある）データを既定値の型に矯正する。
 * 型が違うだけでアプリ全体が落ちるのを防ぐ。
 */
function sanitize(raw) {
  const d = structuredClone(DEFAULTS);
  const src = asObject(raw);
  const settings = { ...d.settings, ...asObject(src.settings) };
  settings.rate = Math.min(2, Math.max(0.5, asNumber(settings.rate, d.settings.rate)));
  settings.dailyGoal = Math.max(1, Math.round(asNumber(settings.dailyGoal, d.settings.dailyGoal)));
  settings.voiceMap = asObject(settings.voiceMap);
  for (const k of ['autoPlay', 'autoAdvance', 'drillInstant', 'showTimer', 'scriptMode']) settings[k] = !!settings[k];
  if (settings.theme !== 'sumi') settings.theme = 'paper';
  return {
    schema: SCHEMA,
    settings,
    attempts: asArray(src.attempts).filter(a => isPlainObject(a) && Array.isArray(a.items)),
    items: asObject(src.items),
    sessions: asObject(src.sessions),
    notes: asObject(src.notes),
    flags: asObject(src.flags),
  };
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULTS);
    return sanitize(JSON.parse(raw));
  } catch (e) {
    console.warn('[toeic900] 保存データの読み込みに失敗。初期化します。', e);
    return structuredClone(DEFAULTS);
  }
}

export const state = load();

let saveTimer = null;
export function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      console.error('[toeic900] 保存に失敗（容量超過の可能性）', e);
    }
  }, 120);
}
export function saveNow() {
  clearTimeout(saveTimer);
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { console.error(e); }
}

/* ── 設定 ────────────────────────────────────────────── */
export function setSetting(k, v) { state.settings[k] = v; save(); }

/* ── SRS（SM-2 簡易版）────────────────────────────────── */
const DAY = 86400000;
/** 正解ストリーク → 次回までの間隔（日）*/
const LADDER = [1, 3, 7, 16, 35, 75];

export function itemStat(qid) {
  return state.items[qid] || { n: 0, ok: 0, streak: 0, due: 0, lastTs: 0, lastMs: 0, wrongPicks: {} };
}

export function recordItem(qid, correct, ms, chosen) {
  const it = state.items[qid] || { n: 0, ok: 0, streak: 0, due: 0, lastTs: 0, lastMs: 0, wrongPicks: {} };
  it.n += 1;
  it.lastTs = Date.now();
  it.lastMs = ms || 0;
  if (correct) {
    it.ok += 1;
    it.streak = Math.min(it.streak + 1, LADDER.length);
    it.due = Date.now() + LADDER[it.streak - 1] * DAY;
  } else {
    it.streak = 0;
    it.due = Date.now() + 20 * 60 * 1000;  // 20分後に再提示
    if (chosen != null) {
      it.wrongPicks = it.wrongPicks || {};
      it.wrongPicks[chosen] = (it.wrongPicks[chosen] || 0) + 1;
    }
  }
  state.items[qid] = it;
  save();
  return it;
}

// 記録は必ず recordItem() を通ってできる。recordItem() は呼ばれるたびに n を必ず 1 以上に
// し、同時に due にも必ず正の未来時刻を入れるため、「記録が存在するか」は n>0 でも due>0 でも
// 同じ結果になる（itemStat() の既定値 { n:0, due:0, ... } は state.items に書き込まれないので
// 両者がズレたエントリは生まれない）。due>0 の方を使うのは、次の dueXxx 系がどれも「期限が
// 来ているか」という due 基準の判定をしており、存在チェックも同じ列で揃えた方が読みやすいため
// （2台目端末からの mergeJSON() で外部データが混ざっても、崩れているのは古い方の due 側だけを
// 見ればよく、n との整合を別途気にしなくて済む）。
const hasRecord = (v) => v.due > 0;
/** 正答率（n=0 のとき ok/n が NaN になるのを避ける防御。通常の記録では n は必ず 1 以上）*/
const accOf = (v) => (v.n ? v.ok / v.n : 0);

/** 復習期限が来た設問 ID を、優先度順に返す */
export function dueItems(limit = 9999) {
  const now = Date.now();
  return Object.entries(state.items)
    .filter(([, v]) => hasRecord(v) && v.due <= now)
    .sort((a, b) => {
      const accA = accOf(a[1]), accB = accOf(b[1]);
      if (accA !== accB) return accA - accB;       // 正答率が低いものを先に
      return a[1].due - b[1].due;
    })
    .slice(0, limit)
    .map(([k]) => k);
}

export function dueCount() {
  const now = Date.now();
  let n = 0;
  for (const v of Object.values(state.items)) if (hasRecord(v) && v.due <= now) n++;
  return n;
}

/** 今日中（今この瞬間を含む）に期限が来る設問数。復習グラフの「今日」と定義をそろえる */
export function dueTodayCount() {
  const end = new Date(); end.setHours(23, 59, 59, 999);
  const limit = end.getTime();
  let n = 0;
  for (const v of Object.values(state.items)) if (hasRecord(v) && v.due <= limit) n++;
  return n;
}

/** 一度でも間違えた設問 */
export function missedItems() {
  return Object.entries(state.items)
    .filter(([, v]) => v.ok < v.n)
    .sort((a, b) => (a[1].ok / a[1].n) - (b[1].ok / b[1].n))
    .map(([k]) => k);
}

/* ── フラグ・メモ ────────────────────────────────────── */
export function toggleFlag(qid) {
  if (state.flags[qid]) delete state.flags[qid]; else state.flags[qid] = Date.now();
  save();
  return !!state.flags[qid];
}
export const isFlagged = (qid) => !!state.flags[qid];
export const flaggedItems = () =>
  Object.keys(state.flags).sort((a, b) => state.flags[b] - state.flags[a]);

export function setNote(qid, text) {
  if (text && text.trim()) state.notes[qid] = text.trim(); else delete state.notes[qid];
  save();
}
export const getNote = (qid) => state.notes[qid] || '';

/* ── 受験記録 ────────────────────────────────────────── */
export function pushAttempt(attempt) {
  attempt.id = attempt.id || `a${Date.now().toString(36)}${Math.floor(Math.random() * 1e4).toString(36)}`;
  attempt.ts = attempt.ts || Date.now();
  state.attempts.push(attempt);
  // 記録が肥大化しないよう直近 500 件に丸める
  if (state.attempts.length > 500) state.attempts = state.attempts.slice(-500);
  saveNow();
  return attempt;
}
export const getAttempt = (id) => state.attempts.find(a => a.id === id);
export const attemptsDesc = () => [...state.attempts].sort((a, b) => b.ts - a.ts);
export const mockAttempts = () =>
  state.attempts.filter(a => a.mode === 'mock' && a.full).sort((a, b) => a.ts - b.ts);

/* ── 中断セッション ──────────────────────────────────── */
export function saveSession(key, data) { state.sessions[key] = { ...data, savedAt: Date.now() }; save(); }
export const getSession = (key) => state.sessions[key];
/** 破棄は直後に location.reload() されることがあるため、遅延させず即時保存する */
export function clearSession(key) { delete state.sessions[key]; saveNow(); }
export const allSessions = () =>
  Object.entries(state.sessions).map(([k, v]) => ({ key: k, ...v })).sort((a, b) => b.savedAt - a.savedAt);

/* ── 入出力 ──────────────────────────────────────────── */
export function exportJSON() {
  return JSON.stringify({ ...state, exportedAt: new Date().toISOString(), app: 'toeic-lr900' }, null, 2);
}
export function importJSON(text) {
  const incoming = JSON.parse(text);
  if (!isPlainObject(incoming)) throw new Error('形式が不正です');
  Object.assign(state, sanitize(incoming));
  saveNow();
}

/**
 * 2 台目の端末で使うための取り込み。上書きせず両方の記録を合わせる。
 *  - 受験記録: ID で重複を除いて追記し、日時順に整える
 *  - 習熟度・フラグ・メモ: 最後に触った方（lastTs / 記録日時が新しい方）を採用
 *  - 設定と中断セッション: この端末のものを保つ
 * サーバを持たない構成で PC ↔ スマホを行き来するための最小限の同期。
 */
export function mergeJSON(text) {
  const incoming = sanitize(JSON.parse(text));
  const report = { attempts: 0, items: 0, flags: 0, notes: 0 };

  const byId = new Map(state.attempts.map(a => [a.id, a]));
  for (const a of incoming.attempts) {
    if (!a?.id || byId.has(a.id)) continue;
    byId.set(a.id, a);
    report.attempts++;
  }
  state.attempts = [...byId.values()].sort((x, y) => (x.ts || 0) - (y.ts || 0)).slice(-500);

  for (const [qid, inc] of Object.entries(incoming.items)) {
    const cur = state.items[qid];
    if (!cur || (inc?.lastTs || 0) > (cur.lastTs || 0)) { state.items[qid] = inc; report.items++; }
  }
  for (const [qid, ts] of Object.entries(incoming.flags)) {
    if (!state.flags[qid] || ts > state.flags[qid]) { state.flags[qid] = ts; report.flags++; }
  }
  for (const [qid, note] of Object.entries(incoming.notes)) {
    if (!state.notes[qid]) { state.notes[qid] = note; report.notes++; }
  }

  saveNow();
  return report;
}
export function resetAll() {
  Object.assign(state, structuredClone(DEFAULTS));
  saveNow();
}
export function resetProgressOnly() {
  state.attempts = []; state.items = {}; state.sessions = {}; state.flags = {}; state.notes = {};
  saveNow();
}
