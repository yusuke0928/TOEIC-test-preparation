/* =============================================================
   app.js — ルータと起動処理
   ============================================================= */

import { state, save, dueCount } from './store.js';
import { $, $$, toast, unbindKeys } from './ui.js';
import * as audio from './audio.js';
import { getRun } from './runtime.js';

const app = document.getElementById('app');

/* ── ルート定義 ──────────────────────────────────────── */
const ROUTES = [
  { re: /^\/$/,                 view: () => import('./views/home.js'),      nav: '/' },
  { re: /^\/drills$/,           view: () => import('./views/drills.js'),    nav: '/drills' },
  { re: /^\/drills\/([\w-]+)$/, view: () => import('./views/drills.js'),    nav: '/drills', fn: 'topic' },
  { re: /^\/mocks$/,            view: () => import('./views/mocks.js'),     nav: '/mocks' },
  { re: /^\/mocks\/([\w-]+)$/,  view: () => import('./views/mocks.js'),     nav: '/mocks', fn: 'detail' },
  { re: /^\/review$/,           view: () => import('./views/review.js'),    nav: '/review' },
  { re: /^\/analytics$/,        view: () => import('./views/analytics.js'), nav: '/analytics' },
  { re: /^\/settings$/,         view: () => import('./views/settings.js'),  nav: '/settings' },
  { re: /^\/result\/([\w-]+)$/, view: () => import('./views/result.js'),    nav: '/analytics', fn: 'detail' },
  { re: /^\/exam$/,             view: () => import('./views/exam.js'),      nav: null },
];

function parse() {
  const h = location.hash.replace(/^#/, '') || '/';
  for (const r of ROUTES) {
    const m = h.match(r.re);
    if (m) return { route: r, params: m.slice(1) };
  }
  return { route: ROUTES[0], params: [] };
}

let leaving = null;

async function render() {
  const { route, params } = parse();

  // 演習中に別画面へ移動する場合は中断保存
  if (leaving) { try { leaving(); } catch (e) { console.error(e); } leaving = null; }
  unbindKeys();
  audio.stop();

  markNav(route.nav);
  app.innerHTML = `<div class="empty"><div class="empty__k">朱</div><p>読み込み中…</p></div>`;

  try {
    const mod = await route.view();
    const fn = route.fn ? mod[route.fn] : mod.default;
    app.innerHTML = '';
    app.classList.remove('page-enter');
    void app.offsetWidth;
    app.classList.add('page-enter');
    const cleanup = await fn(app, ...params);
    if (typeof cleanup === 'function') leaving = cleanup;
    app.focus({ preventScroll: true });
    if (route.nav !== null) window.scrollTo(0, 0);
  } catch (e) {
    console.error(e);
    app.innerHTML = `<div class="empty"><div class="empty__k">誤</div>
      <p>画面の読み込みに失敗しました。</p>
      <p class="note mt">${String(e.message || e)}</p>
      <div class="mt"><a class="btn" href="#/">扉に戻る</a></div></div>`;
  }
  updateBadge();
}

function markNav(path) {
  $$('#nav .nav__item, .tabbar a').forEach(a => {
    const on = a.dataset.route === path;
    if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
}

export function updateBadge() {
  const n = dueCount();
  const b = $('#nav-due');
  if (!b) return;
  b.hidden = n === 0;
  b.textContent = n > 99 ? '99+' : n;
}

/* ── テーマ ──────────────────────────────────────────── */
function applyTheme() {
  const t = state.settings.theme || 'paper';
  document.documentElement.dataset.theme = t;
  const lbl = $('.theme-toggle__label');
  if (lbl) lbl.textContent = t === 'paper' ? '夜' : '昼';
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', t === 'paper' ? '#f3eee2' : '#15191f');
}

$('#theme-toggle')?.addEventListener('click', () => {
  state.settings.theme = state.settings.theme === 'paper' ? 'sumi' : 'paper';
  save(); applyTheme();
});

/* ── 起動 ────────────────────────────────────────────── */
applyTheme();
window.addEventListener('hashchange', render);
window.addEventListener('beforeunload', () => {
  const r = getRun(); if (r && !r.finished) r.persist();
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { audio.stop(); getRun()?.persist?.(); }
});

audio.loadVoices().then(vs => {
  if (!vs.length && audio.supported) {
    console.info('[toeic900] 英語音声が見つかりません。OS に英語音声を追加してください。');
  }
});

render();

/* デバッグ用（コンソールから状態を覗けるように） */
window.toeic900 = { state, toast };
