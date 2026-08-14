#!/usr/bin/env node
/* =============================================================
   shots.mjs — 朱記 主要画面のスクリーンショット取得
   ホーム・ドリル一覧・出題中・解説表示・模試一覧・受験中・結果・分析・設定を
   light（紙）/ dark（墨）の両テーマで tools/out/shots/ に保存する。

   使い方:
     node tools/shots.mjs               全画面×両テーマを撮影
     node tools/shots.mjs --port 8888   アプリのサーバポートを指定

   アプリ本体（index.html, assets/ 配下）は一切変更しない。読むだけ。
   ============================================================= */

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SHOTS_DIR = path.join(__dirname, 'out', 'shots');

const argv = process.argv.slice(2);
const PORT = (() => { const i = argv.indexOf('--port'); return i >= 0 ? Number(argv[i + 1]) : 8777; })();

let BASE = '';
const procs = [];

async function isUp(url) {
  try { const res = await fetch(`${url}/`, { signal: AbortSignal.timeout(800) }); return res.ok; }
  catch { return false; }
}
async function ensureServer(port, dir) {
  const url = `http://127.0.0.1:${port}`;
  if (await isUp(url)) return { url, started: false };
  const proc = spawn('python3', ['-m', 'http.server', String(port), '--directory', dir], { cwd: dir, stdio: 'ignore' });
  procs.push(proc);
  const start = Date.now();
  while (Date.now() - start < 10000) {
    if (await isUp(url)) return { url, started: true };
    await new Promise(r => setTimeout(r, 150));
  }
  throw new Error(`サーバが起動しませんでした（port ${port}）`);
}

async function gotoHash(page, hash) { await page.goto(`${BASE}/#${hash}`, { waitUntil: 'load' }); }
async function waitExam(page) {
  await page.waitForFunction(() => location.hash === '#/exam', null, { timeout: 15000 });
  await page.waitForSelector('.exambar', { timeout: 15000 });
  await page.waitForTimeout(250);
}

/** シリアル番号つきファイル名で撮影する */
async function shot(page, name) {
  mkdirSync(SHOTS_DIR, { recursive: true });
  const file = path.join(SHOTS_DIR, `${name}.png`);
  await page.waitForTimeout(150); // レイアウト確定待ち（フォント適用・トランジション）
  await page.screenshot({ path: file, fullPage: true });
  console.log(`[shots] 保存: ${path.relative(ROOT, file)}`);
}

/** 一連の画面を、指定テーマ（'paper'|'sumi'）で撮影する */
async function captureAll(browser, theme, suffix) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 960 } });
  // speechSynthesis が無い環境でも自動再生タイマーが例外を出さないよう、smoke.mjs と同様に無効化
  await context.addInitScript((t) => {
    try { Object.defineProperty(window, 'speechSynthesis', { get: () => undefined, configurable: true }); } catch { /* noop */ }
    try {
      localStorage.setItem('shuki.v1', JSON.stringify({
        schema: 1,
        settings: { theme: t, rate: 1, autoPlay: true, autoAdvance: false, voiceMap: {}, drillInstant: true, showTimer: true, dailyGoal: 30, scriptMode: false },
        attempts: [], items: {}, sessions: {}, notes: {}, flags: {},
      }));
    } catch { /* noop */ }
  }, theme);
  const page = await context.newPage();
  page.on('pageerror', e => console.warn('[shots] pageerror:', e));

  /* 02 ドリル一覧 */
  await gotoHash(page, '/drills');
  await page.waitForSelector('a.card[href^="#/drills/"]', { timeout: 20000 });
  await shot(page, `02_drills-list_${suffix}`);

  /* 03 出題中 / 04 解説表示 */
  const href = await page.locator('a.card[href^="#/drills/"]').first().getAttribute('href');
  await page.goto(`${BASE}/${href}`, { waitUntil: 'load' });
  await page.waitForSelector('[data-start="all"]', { timeout: 15000 });
  await page.click('[data-start="all"]');
  await waitExam(page);
  await shot(page, `03_drill-active_${suffix}`);

  await page.click('.choices .choice[data-pick="0"]');
  await page.waitForSelector('.kaisetsu', { timeout: 8000 });
  await shot(page, `04_drill-explained_${suffix}`);

  /* 07 結果（このドリルを最後まで終える）*/
  const navText = await page.locator('.examnav .mono').innerText();
  const total = Number(navText.match(/\/\s*(\d+)\s*ユニット/)?.[1] || 1);
  for (let i = 1; i < total; i++) {
    await page.click('[data-act="next"]');
    await page.waitForTimeout(60);
    const boxes = await page.locator('.choices .choice[data-pick="0"]').all();
    for (const b of boxes) { await b.click(); await page.waitForTimeout(20); }
  }
  page.once('dialog', d => d.accept());
  await page.click('[data-act="finish"]');
  await page.waitForFunction(() => /^#\/result\//.test(location.hash), null, { timeout: 10000 });
  await page.waitForSelector('.scorecard, .ring, .card', { timeout: 10000 });
  await shot(page, `07_result_${suffix}`);

  /* 01 ホーム（演習後＝ダッシュボード表示）*/
  await gotoHash(page, '/');
  await page.waitForSelector('.phead__title', { timeout: 10000 });
  await shot(page, `01_home_${suffix}`);

  /* 08 学習分析 */
  await gotoHash(page, '/analytics');
  await page.waitForSelector('.grid.grid--4, .empty', { timeout: 10000 });
  await shot(page, `08_analytics_${suffix}`);

  /* 05 模試一覧 */
  await gotoHash(page, '/mocks');
  await page.waitForSelector('.stack .card', { timeout: 15000 });
  await shot(page, `05_mocks-list_${suffix}`);

  /* 06 受験中 */
  await gotoHash(page, '/mocks/vol1');
  await page.waitForSelector('[data-run="full"]', { timeout: 15000 });
  await page.click('[data-run="p5"]');
  await waitExam(page);
  await shot(page, `06_mock-active_${suffix}`);

  /* 09 設定 */
  await gotoHash(page, '/settings');
  await page.waitForSelector('#export', { timeout: 10000 });
  await shot(page, `09_settings_${suffix}`);

  await context.close();
}

async function main() {
  mkdirSync(SHOTS_DIR, { recursive: true });
  const main = await ensureServer(PORT, ROOT);
  BASE = main.url;
  console.log(`[shots] サーバ: ${BASE}${main.started ? '（このツールが起動）' : '（既存のものを流用）'}`);

  const browser = await chromium.launch({ headless: true });
  await captureAll(browser, 'paper', 'light');
  await captureAll(browser, 'sumi', 'dark');
  await browser.close();

  for (const p of procs) { try { p.kill(); } catch { /* noop */ } }
  console.log(`[shots] 完了。保存先: ${path.relative(ROOT, SHOTS_DIR)}`);
}

main().catch(e => {
  console.error('[shots] 致命的エラー', e);
  for (const p of procs) { try { p.kill(); } catch { /* noop */ } }
  process.exitCode = 1;
});
