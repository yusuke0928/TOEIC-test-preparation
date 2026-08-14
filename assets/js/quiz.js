/* =============================================================
   quiz.js — 出題エンジン
   ユニット（設問のまとまり）の配列を受け取り、1 回分の演習を回す。
   mode: 'drill'（即時採点）/ 'mock'（一括採点・時間制限）/ 'review'（復習）

   ── ユニットの型 ──────────────────────────────────────
   {
     id, part, kind:'p1'|'p2'|'set'|'single'|'doc',
     topics:[], level:1..5,
     scene, speaker,                  // p1
     script:[{role,text}], graphic,   // set
     docs:[],                         // doc
     questions:[{ id, stem, choices:[], answer, exp, why:[], vocab:[], ja, topics:[] }]
   }
   ============================================================= */

import { esc, blanks, mmss, hhmmss, toast, bindKeys, unbindKeys, partLabel, meter, accMod } from './ui.js';
import { renderDocs, renderGraphic, renderScript, renderVocab } from './render.js';
import * as audio from './audio.js';
import { SCENES } from '../data/scenes.js';
import { topicName } from '../data/topics.js';
import {
  recordItem, pushAttempt, saveSession, clearSession, getSession,
  toggleFlag, isFlagged, state, save,
} from './store.js';
import { extrapolate } from './score.js';

const KEYS = ['A', 'B', 'C', 'D'];

export class Run {
  constructor(cfg) {
    this.mode = cfg.mode || 'drill';
    this.label = cfg.label || '演習';
    this.sourceId = cfg.sourceId || null;
    this.units = cfg.units || [];
    this.sessionKey = cfg.sessionKey || null;
    this.timeLimitMs = cfg.timeLimitMs || 0;      // 0 = 無制限
    this.instant = cfg.instant ?? (this.mode !== 'mock');
    this.full = !!cfg.full;                        // フル模試（換算スコアを出す）
    // 中断→再開時に同じ設問集合を組み立て直すための素性。
    // { kind:'mock', id, unitIds } / { kind:'drills', unitIds } / { kind:'qids', ids }
    this.restoreRef = cfg.restore || null;
    this.onFinish = cfg.onFinish || (() => {});
    this.onExit = cfg.onExit || (() => {});
    this.autoPlay = cfg.autoPlay ?? state.settings.autoPlay;
    this.backTo = cfg.backTo || '#/';

    this.page = 0;
    this.answers = {};                             // qid → {chosen, ms, revealed}
    this.startedAt = Date.now();
    this.elapsedBefore = 0;
    this.qStart = Date.now();
    this.finished = false;
    this.el = null;
    this._tick = null;
    this._audioOff = null;
    this._playing = false;
    this._played = new Set();

    this.qIndex = [];                              // グローバル通し番号 → {u, q}
    this.units.forEach((u, ui) => u.questions.forEach((q, qi) =>
      this.qIndex.push({ ui, qi, unit: u, q })));
  }

  /* ── セッション復元 ──────────────────────────────── */
  restore(saved) {
    if (!saved) return false;
    this.answers = saved.answers || {};
    this.page = Math.min(saved.page || 0, this.units.length - 1);
    this.elapsedBefore = saved.elapsedMs || 0;
    this._played = new Set(saved.played || []);
    return true;
  }
  persist() {
    if (!this.sessionKey || this.finished) return;
    saveSession(this.sessionKey, {
      mode: this.mode, label: this.label, sourceId: this.sourceId,
      page: this.page, answers: this.answers, elapsedMs: this.elapsed(),
      played: [...this._played], total: this.qIndex.length,
      answered: Object.values(this.answers).filter(a => a.chosen != null).length,
      // 再開時に同一条件で復元するための情報
      restore: this.restoreRef,
      instant: this.instant, full: this.full, timeLimitMs: this.timeLimitMs,
      backTo: this.backTo,
    });
  }

  elapsed() { return this.elapsedBefore + (Date.now() - this.startedAt); }
  remaining() { return this.timeLimitMs ? this.timeLimitMs - this.elapsed() : Infinity; }

  /* ── マウント ────────────────────────────────────── */
  mount(el) {
    this.el = el;
    this.startedAt = Date.now();
    this.qStart = Date.now();
    this._audioOff = audio.onChange(() => this.syncPlayer());
    this.render();
    this.bind();
    this._tick = setInterval(() => {
      this.updateBar();
      if (this.timeLimitMs && this.remaining() <= 0) {
        toast('制限時間になりました。自動採点します。');
        this.finish();
      }
      if ((Date.now() / 1000 | 0) % 10 === 0) this.persist();
    }, 1000);
  }

  destroy() {
    clearInterval(this._tick);
    unbindKeys();
    audio.stop();
    this._audioOff?.();
    this.persist();
  }

  bind() {
    bindKeys({
      a: () => this.pickByKey(0), b: () => this.pickByKey(1),
      c: () => this.pickByKey(2), d: () => this.pickByKey(3),
      1: () => this.pickByKey(0), 2: () => this.pickByKey(1),
      3: () => this.pickByKey(2), 4: () => this.pickByKey(3),
      arrowright: () => this.next(), arrowleft: () => this.prev(),
      ' ': () => this.togglePlay(),
      f: () => this.flagCurrent(),
    });
  }

  /* ── 現在ページ ──────────────────────────────────── */
  get unit() { return this.units[this.page]; }
  get isListening() { return this.unit && this.unit.part <= 4; }

  /**
   * 音を出せない場所（電車・職員室）や音声非対応端末のための読解モード。
   * 選択肢とスクリプトを解答前から表示する。
   * 音声が使えない端末では強制的に有効にする（でないと一切演習できない）。
   */
  get scriptMode() { return !audio.supported || !!state.settings.scriptMode; }

  firstUnansweredQ() {
    return this.unit.questions.find(q => this.answers[q.id]?.chosen == null) || this.unit.questions[0];
  }

  pickByKey(i) {
    const u = this.unit;
    if (!u) return;
    // 単一設問のユニットのみキーボード即答に対応
    const target = u.questions.length === 1 ? u.questions[0] : this.firstUnansweredQ();
    if (!target) return;
    if (i >= target.choices.length) return;
    this.pick(target, i);
  }

  flagCurrent() {
    const u = this.unit; if (!u) return;
    const q = this.firstUnansweredQ() || u.questions[0];
    const on = toggleFlag(q.id);
    toast(on ? 'フラグを付けました' : 'フラグを外しました');
    this.render();
  }

  /* ── 解答 ────────────────────────────────────────── */
  pick(q, ci) {
    const prev = this.answers[q.id];
    if (prev?.revealed) return;                    // 採点済みは変更不可
    const ms = Math.min(Date.now() - this.qStart, 600000);
    const correct = ci === q.answer;
    this.answers[q.id] = {
      chosen: ci, ms: prev?.ms ? prev.ms : ms, correct,
      revealed: this.instant,
    };
    if (this.instant) {
      recordItem(q.id, correct, this.answers[q.id].ms, ci);
      audio.stop();
    }
    this.qStart = Date.now();
    this.persist();
    this.render();

    if (this.instant && state.settings.autoAdvance && this.unit.questions.length === 1) {
      setTimeout(() => { if (!this.finished) this.next(); }, correct ? 900 : 2600);
    }
  }

  /* ── ページ移動 ──────────────────────────────────── */
  goto(p) {
    if (p < 0 || p >= this.units.length) return;
    audio.stop();
    this.page = p;
    this.qStart = Date.now();
    this.persist();
    this.render();
    this.el?.scrollIntoView({ block: 'start' });
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }
  next() {
    if (this.page >= this.units.length - 1) { this.confirmFinish(); return; }
    this.goto(this.page + 1);
  }
  prev() { this.goto(this.page - 1); }

  /* ── 音声 ────────────────────────────────────────── */
  audioLines() {
    const u = this.unit;
    if (!u) return null;
    if (u.kind === 'p1') return audio.part1Lines({ ...u.questions[0], no: this.noOf(u.questions[0]), choices: u.questions[0].choices, speaker: u.speaker });
    if (u.kind === 'p2') {
      const q = u.questions[0];
      return audio.part2Lines({ ...q, no: this.noOf(q) });
    }
    if (u.kind === 'set') {
      return audio.setLines({
        part: u.part, kind: u.kindLabel, script: u.script,
        questions: u.questions.map(q => ({ no: this.noOf(q), stem: q.stem })),
      }, { readQuestions: u.part === 3 || u.part === 4, gap: this.mode === 'mock' ? 8000 : 1200 });
    }
    return null;
  }

  async play() {
    const lines = this.audioLines();
    if (!lines) return;
    if (!audio.supported) { toast('この端末は音声合成に対応していません'); return; }
    this._played.add(this.unit.id);
    await audio.play(lines);
    this.syncPlayer();
  }
  togglePlay() {
    if (!this.audioLines()) return;
    if (audio.isPlaying()) audio.stop(); else this.play();
    this.syncPlayer();
  }
  syncPlayer() {
    const p = this.el?.querySelector('.player');
    if (!p) return;
    const on = audio.isPlaying();
    p.classList.toggle('is-playing', on);
    const st = p.querySelector('.player__state');
    if (st) st.textContent = on ? '再生中…' : (this._played.has(this.unit?.id) ? '再生済み' : '未再生');
    const ic = p.querySelector('.player__btn svg');
    if (ic) ic.innerHTML = on
      ? '<rect x="4" y="3" width="4.5" height="16" rx="1"/><rect x="13" y="3" width="4.5" height="16" rx="1"/>'
      : '<path d="M6 3.5v17l14-8.5z"/>';
  }

  /* ── 通し番号 ────────────────────────────────────── */
  noOf(q) {
    if (q.no) return q.no;
    const i = this.qIndex.findIndex(x => x.q.id === q.id);
    return i + 1;
  }
  globalIndex(q) { return this.qIndex.findIndex(x => x.q.id === q.id); }

  answeredCount() { return Object.values(this.answers).filter(a => a.chosen != null).length; }

  /* ══ 描画 ═══════════════════════════════════════════ */
  render() {
    if (!this.el) return;
    const u = this.unit;
    if (!u) return;
    this.el.innerHTML = `
      ${this.renderBar()}
      <div class="exam ${u.kind === 'doc' ? 'exam--wide' : ''}">
        ${this.renderUnit(u)}
        ${this.renderFooter()}
      </div>`;
    this.wire();
    this.syncPlayer();

    if (this.autoPlay && (u.kind === 'p1' || u.kind === 'p2' || u.kind === 'set') && !this._played.has(u.id)) {
      setTimeout(() => this.play(), 380);
    }
  }

  renderBar() {
    const done = this.answeredCount(), total = this.qIndex.length;
    const rem = this.remaining();
    const warn = this.timeLimitMs && rem < 5 * 60000;
    return `<div class="exambar">
      <span class="exambar__id">${esc(this.label)}</span>
      <div class="exambar__prog">
        ${meter(done / total)}
        <span class="exambar__count">${done}<span style="color:var(--ink-3)">/${total}</span></span>
      </div>
      ${state.settings.showTimer ? `<span class="exambar__timer ${warn ? 'exambar__timer--warn' : ''}" id="timer">${
        this.timeLimitMs ? hhmmss(Math.max(0, rem)) : hhmmss(this.elapsed())}</span>` : ''}
      <div class="exambar__acts">
        <button class="btn btn--ghost btn--sm" data-act="pause">中断</button>
        <button class="btn btn--sm" data-act="finish">${this.mode === 'mock' ? '採点' : '終了'}</button>
      </div>
    </div>`;
  }

  updateBar() {
    const t = this.el?.querySelector('#timer');
    if (!t) return;
    const rem = this.remaining();
    t.textContent = this.timeLimitMs ? hhmmss(Math.max(0, rem)) : hhmmss(this.elapsed());
    t.classList.toggle('exambar__timer--warn', !!(this.timeLimitMs && rem < 5 * 60000));
  }

  /* ── ユニット本体 ────────────────────────────────── */
  renderUnit(u) {
    switch (u.kind) {
      case 'p1':  return this.renderP1(u);
      case 'p2':  return this.renderP2(u);
      case 'set': return this.renderSet(u);
      case 'doc': return this.renderDocUnit(u);
      default:    return this.renderSingle(u);
    }
  }

  header(u, extra = '') {
    const nos = u.questions.map(q => this.noOf(q));
    const range = nos.length > 1 ? `No. ${nos[0]}–${nos.at(-1)}` : `No. ${nos[0]}`;
    return `<div class="q__meta">
      <span class="q__no">${range}</span>
      <span class="chip chip--ai">${esc(partLabel(u.part))}</span>
      ${u.level ? `<span class="chip">難度 ${'●'.repeat(u.level)}${'○'.repeat(5 - u.level)}</span>` : ''}
      ${extra}
      <button class="btn btn--ghost btn--sm push" data-act="flag">${isFlagged(u.questions[0].id) ? '★ フラグ中' : '☆ フラグ'}</button>
    </div>`;
  }

  playerBox(note) {
    const forced = !audio.supported;
    const on = this.scriptMode;
    return `<div class="player">
      <div class="player__top">
        <button class="player__btn" data-act="play" aria-label="再生 / 停止" ${forced ? 'disabled' : ''}>
          <svg viewBox="0 0 24 24"><path d="M6 3.5v17l14-8.5z"/></svg>
        </button>
        <div class="player__info">
          <div class="player__title">Audio — 端末内蔵音声で合成</div>
          <div class="player__state">${forced ? 'この端末は音声非対応' : '未再生'}</div>
        </div>
        <div class="player__opts">
          <div class="seg" role="group" aria-label="再生速度">
            ${[0.85, 1.0, 1.15, 1.3].map(r =>
              `<button data-rate="${r}" aria-pressed="${(state.settings.rate || 1) === r}" ${forced ? 'disabled' : ''}>×${r}</button>`).join('')}
          </div>
        </div>
      </div>
      <div class="player__wave">${'<span></span>'.repeat(28)}</div>
      <div class="player__foot">
        <button class="btn btn--ghost btn--sm" data-act="script" aria-pressed="${on}" ${forced ? 'disabled' : ''}>
          ${on ? '✓ 読んで解くモード' : '読んで解くモード'}
        </button>
        <span class="note">${forced
          ? '音声が使えないため、スクリプトを表示しています。'
          : on ? '音を出さずに、選択肢とスクリプトを読んで解けます。' : '音が出せないときはこちらへ。'}</span>
      </div>
      ${note ? `<p class="player__note">${esc(note)}</p>` : ''}
    </div>`;
  }

  /* Part 1 ─ 写真描写 */
  renderP1(u) {
    const q = u.questions[0];
    const a = this.answers[q.id];
    const revealed = a?.revealed;
    return `<div class="q">
      ${this.header(u)}
      <div class="q__directions">Look at the picture and listen to the four statements. Choose the statement that best describes what you see.</div>
      <div class="scene">${SCENES[u.scene] || SCENES.fallback}</div>
      ${this.playerBox(this.scriptMode
        ? '読んで解くモード：本番では印刷されない選択肢を表示しています。'
        : '選択肢は印刷されません（本番と同じ）。音声を聞いて (A)〜(D) から選んでください。')}
      ${this.choiceList(q, { blind: !revealed && !this.scriptMode })}
      ${revealed ? this.kaisetsu(u, q) : ''}
    </div>`;
  }

  /* Part 2 ─ 応答 */
  renderP2(u) {
    const q = u.questions[0];
    const a = this.answers[q.id];
    const revealed = a?.revealed;
    return `<div class="q">
      ${this.header(u)}
      <div class="q__directions">Listen to the question and the three responses, then choose the best response.</div>
      ${this.scriptMode && !revealed && q.prompt
        ? `<div class="kaisetsu__script mb"><div><b>問いかけ</b>${esc(q.prompt)}</div></div>` : ''}
      ${this.playerBox(this.scriptMode
        ? '読んで解くモード：問いかけと応答を文字で表示しています。'
        : '問いかけ 1 文と応答 3 つが流れます。選択肢は印刷されません。')}
      ${this.choiceList(q, { blind: !revealed && !this.scriptMode, keys: 3 })}
      ${revealed ? this.kaisetsu(u, q) : ''}
    </div>`;
  }

  /* Part 3 / 4 ─ 会話・説明文 */
  renderSet(u) {
    const anyRevealed = u.questions.some(q => this.answers[q.id]?.revealed);
    return `<div class="q">
      ${this.header(u, u.graphic ? '<span class="chip chip--shu">図表問題</span>' : '')}
      <div class="q__directions">${esc(u.part === 3
        ? 'Listen to the conversation and answer the three questions.'
        : 'Listen to the talk and answer the three questions.')}</div>
      ${u.graphic ? renderGraphic(u.graphic) : ''}
      ${this.playerBox(this.scriptMode
        ? '読んで解くモード：音声の代わりにスクリプトを表示しています。'
        : this.mode === 'mock'
        ? '本番同様、音声は一度だけ流れます。設問の読み上げ後に解答時間があります。'
        : '設問を先読みしてから再生してください。何度でも聞き直せます。')}
      ${this.scriptMode && !anyRevealed && u.script ? `<div class="kaisetsu mb">
        <div class="kaisetsu__head">スクリプト</div>
        ${renderScript(u.script)}
      </div>` : ''}
      <div class="reading__qs">
        ${u.questions.map(q => this.qBlock(u, q)).join('')}
      </div>
      ${anyRevealed && u.script ? `<div class="kaisetsu mt2">
        <div class="kaisetsu__head">スクリプト</div>
        ${renderScript(u.script)}
        ${u.ja ? `<h4>全体訳</h4><p>${esc(u.ja)}</p>` : ''}
        ${u.vocab ? `<h4>語注</h4>${renderVocab(u.vocab)}` : ''}
      </div>` : ''}
    </div>`;
  }

  /* Part 5 ─ 短文穴埋め */
  renderSingle(u) {
    const q = u.questions[0];
    const a = this.answers[q.id];
    return `<div class="q">
      ${this.header(u)}
      <p class="q__stem">${blanks(q.stem)}</p>
      ${this.choiceList(q)}
      ${a?.revealed ? this.kaisetsu(u, q) : ''}
    </div>`;
  }

  /* Part 6 / 7 ─ 文書 */
  renderDocUnit(u) {
    const activeQ = this.firstUnansweredQ();
    const insQ = u.questions.find(q => q.insertAt != null);
    const insAnswered = insQ && this.answers[insQ.id]?.revealed;
    const opts = {
      blankNos: u.questions.map(q => this.noOf(q)),
      activeBlank: u.part === 6 && activeQ ? u.questions.indexOf(activeQ) + 1 : null,
      insertAt: insAnswered ? insQ.insertAt : null,
      // 挿入される「文そのもの」。sentence が無い場合は選択肢を使う。
      insertText: insAnswered ? (insQ.sentence || insQ.choices[insQ.answer]) : '',
    };
    return `<div class="q">
      ${this.header(u, u.docCount > 1 ? `<span class="chip chip--shu">${u.docCount === 2 ? 'ダブルパッセージ' : 'トリプルパッセージ'}</span>` : '')}
      <div class="reading">
        <div class="reading__left">
          <button class="reading__toggle" data-act="doc" aria-expanded="true">
            <span>本文</span><span class="reading__toggle-i">閉じる</span>
          </button>
          <div class="reading__body">${renderDocs(u.docs, opts)}</div>
        </div>
        <div class="reading__qs">${u.questions.map(q => this.qBlock(u, q)).join('')}</div>
      </div>
    </div>`;
  }

  /* 設問 1 問分（セット内） */
  qBlock(u, q) {
    const a = this.answers[q.id];
    return `<div class="q" data-qid="${esc(q.id)}">
      <div class="q__meta">
        <span class="q__no">${this.noOf(q)}</span>
        ${q.tag ? `<span class="chip">${esc(q.tag)}</span>` : ''}
      </div>
      ${q.stem ? `<p class="q__stem" style="font-size:1rem;margin-bottom:.8rem">${blanks(q.stem)}</p>` : ''}
      ${this.choiceList(q)}
      ${a?.revealed ? this.kaisetsu(u, q, true) : ''}
    </div>`;
  }

  /* 選択肢 */
  choiceList(q, { blind = false, keys = 4 } = {}) {
    const a = this.answers[q.id];
    const revealed = a?.revealed;
    const n = Math.min(q.choices.length, keys);
    // radiogroup 内でタブ移動の起点になる 1 つだけ tabindex=0 にする（ロービングフォーカス）
    const focusIdx = revealed ? q.answer : (a?.chosen != null ? a.chosen : 0);
    return `<div class="choices" role="radiogroup" aria-label="選択肢">
      ${Array.from({ length: n }, (_, i) => {
        let cls = '';
        let mark = '';
        if (revealed) {
          if (i === q.answer) { cls = 'is-correct'; mark = '正解'; }
          else if (i === a.chosen) { cls = 'is-wrong'; mark = '誤答'; }
          cls += ' is-locked';
        } else if (a?.chosen === i) cls = 'is-picked';
        const text = blind && !revealed ? '<span style="color:var(--ink-3)">（音声のみ）</span>' : esc(q.choices[i]);
        return `<button class="choice ${cls}" data-pick="${i}" data-q="${esc(q.id)}" role="radio"
          aria-checked="${a?.chosen === i}" tabindex="${i === focusIdx ? 0 : -1}"
          ${revealed ? 'aria-disabled="true"' : ''}>
          <span class="choice__k">(${KEYS[i]})</span>
          <span>${text}</span>
          ${mark ? `<span class="choice__mark">${mark}</span>` : ''}
        </button>`;
      }).join('')}
    </div>`;
  }

  /* 解説 */
  kaisetsu(u, q, compact = false) {
    const a = this.answers[q.id];
    const ok = a.chosen === q.answer;
    const topics = [...(q.topics || u.topics || [])];
    return `<div class="kaisetsu ${ok ? 'kaisetsu--ok' : ''}">
      <div class="kaisetsu__head">朱記
        <span class="kaisetsu__verdict" style="color:${ok ? 'var(--midori)' : 'var(--shu)'}">
          ${ok ? '正解' : `誤答 — 正解は (${KEYS[q.answer]})`}</span>
      </div>
      ${q.prompt ? `<h4>問いかけ</h4><div class="kaisetsu__script"><div>${esc(q.prompt)}</div></div>` : ''}
      <p${q.prompt ? ' style="margin-top:.7rem"' : ''}>${esc(q.exp || '')}</p>
      ${q.why?.length ? `<h4>選択肢の検討</h4><ul class="kaisetsu__why">
        ${q.why.map((w, i) => `<li><span>(${KEYS[i]})</span><span>${esc(w)}</span></li>`).join('')}</ul>` : ''}
      ${q.ja ? `<h4>訳</h4><p>${esc(q.ja)}</p>` : ''}
      ${!compact && u.script ? `<h4>スクリプト</h4>${renderScript(u.script)}` : ''}
      ${q.vocab?.length ? `<h4>語注</h4>${renderVocab(q.vocab)}` : ''}
      ${topics.length ? `<h4>論点</h4><div class="inline">${topics.map(t =>
        `<a class="chip chip--shu" href="#/drills/${esc(t)}">${esc(topicNameSafe(t))}</a>`).join('')}</div>` : ''}
    </div>`;
  }

  /* フッタ（ナビ＋パレット） */
  renderFooter() {
    const total = this.units.length;
    // .exam を親にすることで、解説が伸びても sticky が画面下端に貼り付く
    return `<div class="examnav">
        <button class="btn btn--ghost" data-act="prev" ${this.page === 0 ? 'disabled' : ''}>← 前へ</button>
        <span class="mono note">${this.page + 1} / ${total} ユニット</span>
        <button class="btn" data-act="next">${this.page === total - 1 ? '採点へ →' : '次へ →'}</button>
      </div>
      <details class="mt2">
        <summary class="note" style="cursor:pointer;font-family:var(--f-mono);font-size:.7rem;letter-spacing:.14em">解答一覧を開く</summary>
        <div class="palette mt">
          ${this.qIndex.map((x, i) => {
            const a = this.answers[x.q.id];
            let cls = '';
            if (a?.revealed) cls = a.correct ? 'is-ok' : 'is-ng';
            else if (a?.chosen != null) cls = 'is-done';
            if (x.ui === this.page) cls += ' is-cur';
            if (isFlagged(x.q.id)) cls += ' is-flag';
            return `<button class="palette__b ${cls}" data-goto="${x.ui}" title="No.${i + 1}">${i + 1}</button>`;
          }).join('')}
        </div>
      </details>
      <p class="note examhint">A / B / C / D または 1〜4 で解答　←→ で移動　Space で音声　F でフラグ</p>`;
  }

  /* ── イベント配線 ────────────────────────────────── */
  wire() {
    const el = this.el;
    el.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => {
      const q = this.qIndex.find(x => x.q.id === b.dataset.q)?.q;
      if (q) this.pick(q, Number(b.dataset.pick));
    }));
    // radiogroup 内の矢印キー移動（W3C の radio group パターン）
    el.querySelectorAll('.choices').forEach(group => {
      group.addEventListener('keydown', (ev) => {
        if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(ev.key)) return;
        const items = [...group.querySelectorAll('.choice')];
        const cur = items.indexOf(document.activeElement);
        if (cur < 0) return;
        ev.preventDefault();
        ev.stopPropagation();
        const dir = (ev.key === 'ArrowRight' || ev.key === 'ArrowDown') ? 1 : -1;
        const nx = (cur + dir + items.length) % items.length;
        items.forEach((b, i) => { b.tabIndex = i === nx ? 0 : -1; });
        items[nx].focus();
      });
    });
    el.querySelector('[data-act="play"]')?.addEventListener('click', () => this.togglePlay());
    el.querySelector('[data-act="script"]')?.addEventListener('click', () => {
      state.settings.scriptMode = !state.settings.scriptMode;
      save();
      audio.stop();
      toast(state.settings.scriptMode ? '読んで解くモードにしました' : '音声モードに戻しました');
      this.render();
    });
    el.querySelectorAll('[data-rate]').forEach(b => b.addEventListener('click', () => {
      state.settings.rate = Number(b.dataset.rate);
      el.querySelectorAll('[data-rate]').forEach(x => x.setAttribute('aria-pressed', x === b));
      if (audio.isPlaying()) this.play();
    }));
    // スマホでは本文が縦に積まれるため、折りたたんで設問へ戻れるようにする
    el.querySelector('[data-act="doc"]')?.addEventListener('click', (ev) => {
      const box = ev.currentTarget.closest('.reading__left');
      const open = box.classList.toggle('is-collapsed') === false;
      ev.currentTarget.setAttribute('aria-expanded', String(open));
      ev.currentTarget.querySelector('.reading__toggle-i').textContent = open ? '閉じる' : '開く';
    });
    el.querySelector('[data-act="prev"]')?.addEventListener('click', () => this.prev());
    el.querySelector('[data-act="next"]')?.addEventListener('click', () => this.next());
    el.querySelector('[data-act="flag"]')?.addEventListener('click', () => this.flagCurrent());
    el.querySelector('[data-act="finish"]')?.addEventListener('click', () => this.confirmFinish());
    el.querySelector('[data-act="pause"]')?.addEventListener('click', () => {
      this.persist();
      toast('中断しました。ホームから再開できます。');
      this.destroy();
      this.onExit();
    });
    el.querySelectorAll('[data-goto]').forEach(b =>
      b.addEventListener('click', () => this.goto(Number(b.dataset.goto))));
  }

  /* ── 終了・採点 ──────────────────────────────────── */
  confirmFinish() {
    const un = this.qIndex.length - this.answeredCount();
    if (un > 0) {
      if (!confirm(`未解答が ${un} 問あります。採点しますか？`)) return;
    } else if (this.mode === 'mock') {
      // 時間制限のある模試では誤タップでの即終了を防ぐ
      if (!confirm('採点して終了します。よろしいですか？')) return;
    }
    this.finish();
  }

  finish() {
    if (this.finished) return;
    this.finished = true;
    clearInterval(this._tick);
    audio.stop();
    unbindKeys();

    const items = this.qIndex.map(({ unit, q }) => {
      const a = this.answers[q.id] || {};
      const correct = a.chosen != null && a.chosen === q.answer;
      if (!a.revealed && a.chosen != null) recordItem(q.id, correct, a.ms || 0, a.chosen);
      return {
        qid: q.id, part: unit.part, topics: q.topics || unit.topics || [],
        chosen: a.chosen ?? null, answer: q.answer, correct,
        ms: a.ms || 0, level: unit.level || null,
      };
    });

    const perPart = {};
    for (const it of items) {
      perPart[it.part] = perPart[it.part] || { ok: 0, n: 0 };
      perPart[it.part].n++;
      if (it.correct) perPart[it.part].ok++;
    }
    const est = extrapolate(perPart);

    const attempt = pushAttempt({
      mode: this.mode, label: this.label, sourceId: this.sourceId,
      full: this.full, partial: est.partial,
      durationMs: this.elapsed(), items,
      scaled: { L: est.L, R: est.R, total: est.total },
      raw: { L: est.rawL, R: est.rawR },
    });

    if (this.sessionKey) clearSession(this.sessionKey);
    this._audioOff?.();
    this.onFinish(attempt);
  }
}

/* 論点名（topics.js は他モジュールを import しないので静的取り込みで安全） */
const topicNameSafe = (id) => topicName(id);

/* ── ユーティリティ ──────────────────────────────────── */
export function shuffle(arr, seed = Date.now()) {
  const a = [...arr];
  let s = seed;
  const rnd = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export { getSession };
