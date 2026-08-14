/* =============================================================
   ui.js — 描画ヘルパと共通部品
   ============================================================= */

export const $  = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** 問題文の ------- を装飾つき空所に変換（英文はエスケープ済み前提） */
export const blanks = (s) =>
  esc(s).replace(/-{3,}/g, '<span class="blank">&nbsp;------&nbsp;</span>');

/* ── 時間・日付 ──────────────────────────────────────── */
export function mmss(ms) {
  const t = Math.max(0, Math.round(ms / 1000));
  return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
}
export function hhmmss(ms) {
  const t = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(t / 3600);
  return (h ? `${h}:` : '') + `${String(Math.floor(t / 60) % 60).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
}
export function jaDate(ts) {
  const d = new Date(ts);
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
}
export function jaDateTime(ts) {
  const d = new Date(ts);
  return `${jaDate(ts)} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}
export function relTime(ts) {
  const diff = Date.now() - ts;
  const day = 86400000;
  if (diff < 0) {
    const ahead = -diff;
    if (ahead < 3600000) return `あと${Math.ceil(ahead / 60000)}分`;
    if (ahead < day) return `あと${Math.ceil(ahead / 3600000)}時間`;
    return `あと${Math.ceil(ahead / day)}日`;
  }
  if (diff < 60000) return 'たった今';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分前`;
  if (diff < day) return `${Math.floor(diff / 3600000)}時間前`;
  if (diff < day * 30) return `${Math.floor(diff / day)}日前`;
  return jaDate(ts);
}
export const pct = (v) => `${Math.round((v || 0) * 100)}%`;

/* ── トースト ────────────────────────────────────────── */
export function toast(msg, ms = 2600) {
  const stack = document.getElementById('toasts');
  if (!stack) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  stack.appendChild(el);
  setTimeout(() => {
    el.style.transition = 'opacity .28s, transform .28s';
    el.style.opacity = '0'; el.style.transform = 'translateY(8px)';
    setTimeout(() => el.remove(), 300);
  }, ms);
}

/* ── 共通マークアップ ────────────────────────────────── */
export function pageHead({ kicker, title, sub, aside = '' }) {
  return `<header class="phead">
    <div>
      ${kicker ? `<div class="phead__kicker">${esc(kicker)}</div>` : ''}
      <h1 class="phead__title">${esc(title)}</h1>
      ${sub ? `<p class="phead__sub">${esc(sub)}</p>` : ''}
    </div>
    ${aside ? `<div class="phead__aside">${aside}</div>` : ''}
  </header>`;
}

export function sectionHead(no, title, note = '') {
  return `<div class="shead">
    <span class="shead__no">${esc(no)}</span>
    <h2 class="shead__t">${esc(title)}</h2>
    ${note ? `<span class="shead__note">${esc(note)}</span>` : ''}
  </div>`;
}

export function stat(k, v, d = '', mod = '') {
  return `<div class="stat">
    <span class="stat__k">${esc(k)}</span>
    <span class="stat__v ${mod}">${v}</span>
    ${d ? `<span class="stat__d">${esc(d)}</span>` : ''}
  </div>`;
}

export function meter(value, mod = '') {
  const v = Math.max(0, Math.min(1, value || 0));
  return `<div class="meter"><div class="meter__fill ${mod}" style="width:${(v * 100).toFixed(1)}%"></div></div>`;
}

export function empty(kanji, msg, action = '') {
  return `<div class="empty"><div class="empty__k">${esc(kanji)}</div><p>${esc(msg)}</p>${action ? `<div class="mt">${action}</div>` : ''}</div>`;
}

/** 正答率に応じたメーターの色 */
export const accMod = (a) => a >= .85 ? 'meter__fill--ok' : a >= .65 ? 'meter__fill--warn' : 'meter__fill--shu';

/* ── 確認ダイアログ（簡易）──────────────────────────── */
export function confirmJa(msg) { return window.confirm(msg); }

/* ── キーボード操作の登録 ───────────────────────────── */
let keyHandler = null;
const ARROWS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

export function bindKeys(map) {
  unbindKeys();
  keyHandler = (e) => {
    // ブラウザ標準のショートカット（Cmd+F / Ctrl+A など）は奪わない
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    const el = t instanceof Element ? t : null;
    if (el?.closest('input,textarea,select,[contenteditable="true"]')) return;
    // 矢印キーは選択肢群の中ではロービングフォーカスに譲る
    if (ARROWS.includes(e.key) && el?.closest('[role="radiogroup"]')) return;
    const k = typeof e.key === 'string' ? e.key.toLowerCase() : '';
    const fn = map[k] || map[e.key];
    if (!fn) return;
    // Space / Enter はフォーカス中のボタン・リンクの既定動作を優先する
    if ((e.key === ' ' || e.key === 'Enter') && el?.closest('button,a,[role="radio"],summary')) return;
    e.preventDefault();
    fn(e);
  };
  window.addEventListener('keydown', keyHandler);
}
export function unbindKeys() {
  if (keyHandler) window.removeEventListener('keydown', keyHandler);
  keyHandler = null;
}

/* ── パート表示名 ────────────────────────────────────── */
export const PART_NAME = {
  1: '写真描写', 2: '応答', 3: '会話', 4: '説明文',
  5: '短文穴埋め', 6: '長文穴埋め', 7: '文書読解',
};
export const partLabel = (p) => `Part ${p}・${PART_NAME[p] || ''}`;
export const sectionOf = (p) => (p <= 4 ? 'リスニング' : 'リーディング');
