#!/usr/bin/env node
/* =============================================================
   smoke.mjs — 実ブラウザ通しテスト（27項目）
   Playwright で chromium を実際に動かし、アプリを一切変更せずに検証する。

   使い方:
     node tools/smoke.mjs                起動〜全項目を実行
     node tools/smoke.mjs --headed       ブラウザを表示して実行
     node tools/smoke.mjs --only ドリル   項目名に部分一致するものだけ実行
     node tools/smoke.mjs --port 8888    アプリのサーバポートを指定

   サーバはこのツール自身が起動・停止する。指定ポートで既に何かが応答していて、
   かつそれが期待どおりの内容（index.html の中身）を返す場合に限り流用し、
   停止もしない（開発中の手動起動を邪魔しない）。応答はあるが別内容（＝他人が
   別用途で使っているポート）の場合はそのポートには触れず、空いているポートを
   探して自分のサーバをそこに立てる（どのポートを使ったかは実行時に表示する）。
   ============================================================= */

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import {
  mkdirSync, rmSync, symlinkSync, readdirSync, statSync, readFileSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');          // リポジトリ直下
const OUT_DIR = path.join(__dirname, 'out');

/* ── 引数 ────────────────────────────────────────────── */
const argv = process.argv.slice(2);
const HEADED = argv.includes('--headed');
const ONLY = (() => { const i = argv.indexOf('--only'); return i >= 0 ? argv[i + 1] : null; })();
const PORT = (() => { const i = argv.indexOf('--port'); return i >= 0 ? Number(argv[i + 1]) : 8777; })();

let BASE = '';                 // メインサーバの origin
let MAIN_PORT = PORT;          // メインサーバが実際に使ったポート（占有時はずれる）
const procs = [];              // このツールが起動したサーバ（終了時に kill する）

/* ── サーバ管理 ──────────────────────────────────────── */
async function isUp(url) {
  try {
    const res = await fetch(`${url}/`, { signal: AbortSignal.timeout(800) });
    return res.ok;
  } catch { return false; }
}

/* そのポートが「期待するファイル」を配信しているかを確認する。
   単に 200 が返るだけでは別用途のサーバ（例: 他エージェントが立てた
   別ディレクトリの http.server）を誤って流用してしまうため、
   checkPath の中身に matchText を含むかまで見る。 */
async function verifyServing(url, checkPath, matchText) {
  try {
    const res = await fetch(`${url}${checkPath}`, { signal: AbortSignal.timeout(1500) });
    if (!res.ok) return false;
    if (matchText == null) return true;
    const text = await res.text();
    return text.includes(matchText);
  } catch { return false; }
}

async function spawnServer(port, dir) {
  const url = `http://127.0.0.1:${port}`;
  const proc = spawn('python3', ['-m', 'http.server', String(port), '--directory', dir], {
    cwd: dir, stdio: 'ignore',
  });
  procs.push(proc);
  const start = Date.now();
  while (Date.now() - start < 10000) {
    if (await isUp(url)) return { url };
    await new Promise(r => setTimeout(r, 150));
  }
  try { proc.kill(); } catch { /* noop */ }
  procs.splice(procs.indexOf(proc), 1);
  throw new Error(`サーバが起動しませんでした（port ${port}）`);
}

/* dir を配信するサーバを port から確保する。
   - port で既に何かが応答しており、それが checkPath/matchText で期待どおりと
     確認できれば流用する（停止もしない＝開発中の手動起動を邪魔しない）。
   - 応答はあるが内容が違う（＝他人が別用途で使っているポート）場合は
     そのポートには一切触れず、次のポートを試す。
   - 何も応答していないポートが見つかったら、そこに自分のサーバを立てる
     （このツールが起動したサーバは procs に積み、終了時に必ず kill する）。 */
async function ensureServer(port, dir, checkPath, matchText) {
  const MAX_TRIES = 50;
  let p = port;
  for (let i = 0; i < MAX_TRIES; i++, p++) {
    const url = `http://127.0.0.1:${p}`;
    if (await isUp(url)) {
      if (await verifyServing(url, checkPath, matchText)) {
        return { url, port: p, started: false };
      }
      console.log(`[smoke] port ${p} は別サーバが使用中のためスキップします`);
      continue;
    }
    const started = await spawnServer(p, dir);
    if (!(await verifyServing(started.url, checkPath, matchText))) {
      throw new Error(`起動したサーバの内容確認に失敗しました（port ${p}）`);
    }
    return { url: started.url, port: p, started: true };
  }
  throw new Error(`空きポートが見つかりませんでした（${port}〜${p - 1}）`);
}

function prepareSubpathRoot() {
  const dir = path.join(OUT_DIR, '.subpath');
  // 前回実行の残骸（古いシンボリックリンク等）を引きずらないよう、毎回作り直す
  try { rmSync(dir, { recursive: true, force: true }); } catch { /* noop */ }
  mkdirSync(dir, { recursive: true });
  const link = path.join(dir, 'app');
  symlinkSync(ROOT, link, 'dir');
  return dir;
}

/* ── 絶対パス参照の静的走査（サブパス配信検証の一部）───── */
function scanAbsoluteRefs() {
  const exts = new Set(['.html', '.css', '.js']);
  const skipDirs = new Set(['node_modules', '.git', 'tools']);
  const files = [];
  (function walk(dir) {
    for (const name of readdirSync(dir)) {
      if (skipDirs.has(name)) continue;
      const p = path.join(dir, name);
      const st = statSync(p);
      if (st.isDirectory()) walk(p);
      else if (exts.has(path.extname(name))) files.push(p);
    }
  })(ROOT);
  const hits = [];
  const reAttr = /(?:href|src)\s*=\s*["']\/(?!\/)[^"']*/g;
  const reCss = /url\(\s*\/(?!\/)[^)'"]*/g;
  for (const f of files) {
    const text = readFileSync(f, 'utf8');
    let m;
    while ((m = reAttr.exec(text))) hits.push(`${path.relative(ROOT, f)}: ${m[0]}`);
    while ((m = reCss.exec(text))) hits.push(`${path.relative(ROOT, f)}: ${m[0]}`);
  }
  return hits;
}

/* ── アサーション ────────────────────────────────────── */
function assert(cond, msg) { if (!cond) throw new Error(msg); }

/* ── ナビゲーション補助 ──────────────────────────────── */
async function gotoHash(page, base, hash) {
  await page.goto(`${base}/#${hash}`, { waitUntil: 'load' });
}
async function waitExam(page) {
  await page.waitForFunction(() => location.hash === '#/exam', null, { timeout: 15000 });
  await page.waitForSelector('.exambar', { timeout: 15000 });
  await page.waitForTimeout(150);
}
async function openMockDetail(page, base, id) {
  await gotoHash(page, base, `/mocks/${id}`);
  await page.waitForSelector('[data-run="full"]', { timeout: 15000 });
}
async function firstTopicHref(page, base) {
  await gotoHash(page, base, '/drills');
  await page.waitForSelector('a.card[href^="#/drills/"]', { timeout: 20000 });
  return page.locator('a.card[href^="#/drills/"]').first().getAttribute('href');
}

/* drills/part1.js（描写テキスト方式）は registry.js に未登録のため、
   test07 と同じ手法でページコンテキスト内から直接 import して Run を起動する。 */
async function launchDescDrill(page, base) {
  await page.goto(`${base}/#/`, { waitUntil: 'load' });
  await page.waitForSelector('.phead__title', { timeout: 15000 });
  await page.evaluate(async () => {
    const mod = await import('/assets/data/drills/part1.js');
    const rt = await import('/assets/js/runtime.js');
    rt.launch({
      mode: 'drill', label: 'smoke: desc方式Part1', units: mod.UNITS.slice(0, 1),
      instant: true, backTo: '#/drills',
    });
  });
  await waitExam(page);
}

/* =============================================================
   テスト本体（27 項目）
   ============================================================= */

/* 01 起動 */
async function test01({ page }) {
  await page.goto(`${BASE}/index.html`, { waitUntil: 'load' });
  await page.waitForSelector('.phead__title', { timeout: 15000 });
  assert((await page.title()).includes('TOEIC'), 'タイトルが想定と違います');
  const navCount = await page.locator('#nav .nav__item').count();
  assert(navCount === 6, `ナビ項目が 6 個ではありません（${navCount}）`);
}

/* 02 ルータ
   SPA のハッシュ遷移では、旧画面の .phead__title が消えて新画面のものに
   置き換わるまでに一瞬のずれがある（render() が非同期のため）。
   単に要素の存在を待つと旧画面の見出しを誤って掴むことがあるので、
   本文の「内容」が変わるまで待つ。 */
async function waitTitleIncludes(page, word, timeout = 8000) {
  await page.waitForFunction(
    (w) => document.querySelector('.phead__title')?.textContent?.includes(w),
    word, { timeout },
  );
}
async function waitTitleNot(page, word, timeout = 8000) {
  await page.waitForFunction((w) => {
    const t = document.querySelector('.phead__title')?.textContent || '';
    return t && !t.includes(w);
  }, word, { timeout });
}

async function test02({ page }) {
  await gotoHash(page, BASE, '/');
  await waitTitleIncludes(page, '扉');

  const checks = [
    ['/drills', '個別論点'],
    ['/mocks', '予想模試'],
    ['/review', '復習'],
    ['/analytics', '学習分析'],
    ['/settings', '設定'],
  ];
  for (const [route, word] of checks) {
    await page.click(`#nav a[data-route="${route}"]`);
    await page.waitForFunction((h) => location.hash === `#${h}`, route, { timeout: 8000 });
    await waitTitleIncludes(page, word, 8000);
    const current = await page.getAttribute(`#nav a[data-route="${route}"]`, 'aria-current');
    assert(current === 'page', `${route} のナビ項目が現在地としてマークされていません`);
  }
}

/* 03 ドリル一覧 */
async function test03({ page }) {
  await gotoHash(page, BASE, '/drills');
  await page.waitForSelector('a.card[href^="#/drills/"]', { timeout: 20000 });
  const n = await page.locator('a.card[href^="#/drills/"]').count();
  assert(n >= 20, `論点カードが少なすぎます（${n} 件）`);
  const bodyText = await page.locator('#app').innerText();
  for (const g of ['文法', '語彙・語法', '文脈', '読解設問', 'リスニング']) {
    assert(bodyText.includes(g), `論点グループ「${g}」の見出しが見つかりません`);
  }
}

/* 04 ドリル演習：解答→正誤→解説 */
async function test04({ page }) {
  const href = await firstTopicHref(page, BASE);
  await page.goto(`${BASE}/${href}`, { waitUntil: 'load' });
  await page.waitForSelector('[data-start="all"]', { timeout: 15000 });
  await page.click('[data-start="all"]');
  await waitExam(page);
  await page.waitForSelector('.choices .choice', { timeout: 10000 });
  await page.click('.choices .choice[data-pick="0"]');
  await page.waitForSelector('.kaisetsu', { timeout: 8000 });
  const k = await page.locator('.kaisetsu').first().innerText();
  assert(/正解|誤答/.test(k), '正誤の判定表示（正解／誤答）が見つかりません');
  assert(k.includes('選択肢の検討'), '選択肢ごとの検討（why）が見つかりません');
  assert(k.includes('訳'), '全体訳（ja）が見つかりません');
  assert(k.length > 30, '解説本文（exp）が短すぎます');
}

/* 05 Part1: SVG場面 */
async function test05({ page }) {
  await openMockDetail(page, BASE, 'vol1');
  await page.click('[data-run="p1"]');
  await waitExam(page);
  const svg = page.locator('.scene svg');
  await svg.waitFor({ timeout: 10000 });
  const html = await page.locator('.scene').innerHTML();
  assert(html.length > 200, 'SVG 場面の描画内容が薄すぎます（フォールバック表示の疑い）');
}

/* 06 Part6: {{n}} 空所 */
async function test06({ page }) {
  await openMockDetail(page, BASE, 'vol1');
  await page.click('[data-run="p6"]');
  await waitExam(page);
  await page.waitForSelector('.reading__body .blank', { timeout: 10000 });
  const n = await page.locator('.reading__body .blank').count();
  assert(n === 4, `Part6 の空所が 4 個ではありません（${n} 個）`);
  const full = await page.locator('#app').innerText();
  assert(!full.includes('{{') && !full.includes('}}'), '未処理の {{n}} が画面に残っています');
}

/* 07 Part7: [[n]] 文挿入 */
async function test07({ page }) {
  await openMockDetail(page, BASE, 'vol1');
  await page.click('[data-run="p7"]');
  await waitExam(page);
  await page.click('summary:has-text("解答一覧を開く")');

  const info = await page.evaluate(async () => {
    const reg = await import('/assets/data/registry.js');
    const mock = await reg.loadMock('vol1');
    const p7 = mock.units.filter(u => u.part === 7);
    const idx = p7.findIndex(u => u.questions.some(q => q.insertAt != null));
    return { idx, total: p7.length };
  });
  assert(info.idx >= 0, 'Vol.1 の Part7 に insertAt を持つ設問が見つかりません（テスト前提の確認用データが崩れている可能性）');

  await page.locator(`.palette__b[data-goto="${info.idx}"]`).first().click();
  await page.waitForTimeout(200);

  const bodyText = await page.locator('.reading__body').innerText();
  assert(!bodyText.includes('[['), `未処理の [[n]] が残っています: ${bodyText.slice(0, 160)}`);
  assert(/\[[1-4]\]/.test(bodyText), '文挿入位置マーカー（[1]〜[4]）の描画を確認できません');

  const full = await page.locator('#app').innerText();
  assert(!full.includes('{{') && !full.includes('}}'), '未処理の {{n}} が画面に残っています');
}

/* 08 模試一覧 */
async function test08({ page }) {
  await gotoHash(page, BASE, '/mocks');
  await page.waitForSelector('.stack .card', { timeout: 15000 });
  const n = await page.locator('.stack .card').count();
  assert(n === 6, `模試カードが 6 件ではありません（${n} 件）`);
  const text = await page.locator('.stack').innerText();
  for (let i = 1; i <= 6; i++) assert(text.includes(`Vol.${i}`), `Vol.${i} のカードが見つかりません`);
}

/* 09 模試開始 */
async function test09({ page }) {
  await openMockDetail(page, BASE, 'vol1');
  await page.click('[data-run="p5"]');
  await waitExam(page);
  await page.waitForSelector('.choices .choice', { timeout: 10000 });
  const count = await page.locator('.exambar__count').innerText();
  assert(count.trim().startsWith('0'), `開始直後の解答数が 0 ではありません（${count}）`);
  assert((await page.locator('.q__stem .blank').count()) > 0, 'Part5 の空所表示が見つかりません');
}

/* 10 模試の中断・再開
   模試一覧／詳細の「中断中」バナーは sessionKey が `mock-<id>` のとき（＝フル受験）だけ
   参照される（mocks.js の getSession(`mock-${id}`)）。パート指定などの部分受験は
   `mock-<id>-<label>` という別キーで保存されるため、ここではフル受験で検証する。 */
async function test10({ page }) {
  await openMockDetail(page, BASE, 'vol1');
  await page.click('[data-run="full"]');
  await waitExam(page);

  await page.click('.choices .choice[data-pick="0"]');
  await page.click('[data-act="next"]');
  await page.waitForTimeout(150);
  await page.click('.choices .choice[data-pick="0"]');
  await page.waitForTimeout(150);

  await page.click('[data-act="pause"]');
  await page.waitForFunction(() => location.hash !== '#/exam', null, { timeout: 8000 });
  await page.waitForSelector('#resume', { timeout: 8000 });
  const listText = await page.locator('#app').innerText();
  assert(listText.includes('中断中'), '模試詳細に「中断中」の表示が出ません');

  await page.click('#resume');
  await waitExam(page);
  const count = await page.locator('.exambar__count').innerText();
  assert(count.trim().startsWith('2'), `再開後の解答数が 2 に復元されていません（${count}）`);
  const picked = await page.locator('.choices .choice[data-pick="0"]').first();
  assert((await picked.getAttribute('class') || '').includes('is-picked'), '再開後に選択済みの解答が復元されていません');
}

/* 11 採点：リスニング未受験時に推定値が出ない */
async function test11({ page }) {
  await openMockDetail(page, BASE, 'vol1');
  await page.click('[data-run="p5"]');
  await waitExam(page);

  // ページ遷移のたびに render() が全体を作り直し、<details> は毎回「閉」状態に戻るため
  // パレットを開く操作を毎周回やり直す
  for (let i = 0; i < 20; i++) {
    await page.click('summary:has-text("解答一覧を開く")');
    await page.locator(`.palette__b[data-goto="${i}"]`).first().click();
    await page.waitForTimeout(60);
    await page.locator('.choices .choice[data-pick="0"]').first().click();
    await page.waitForTimeout(60);
  }

  page.once('dialog', d => d.accept());
  await page.click('[data-act="finish"]');
  await page.waitForFunction(() => /^#\/result\//.test(location.hash), null, { timeout: 10000 });

  await gotoHash(page, BASE, '/');
  await page.waitForSelector('.scorecard__split', { timeout: 10000 });
  const stats = page.locator('.scorecard__split .stat');
  const listening = (await stats.nth(0).locator('.stat__v').innerText()).trim();
  const reading = (await stats.nth(1).locator('.stat__v').innerText()).trim();
  assert(listening === '—', `リスニング未受験なのに推定値が表示されています（${listening}）`);
  assert(/^\d+$/.test(reading), `リーディングは20問解答済みなので数値が出るはずです（${reading}）`);
}

/* 12 復習：誤答がキューに追加される */
async function test12({ page }) {
  const href = await firstTopicHref(page, BASE);
  const topicId = href.replace('#/drills/', '');
  const info = await page.evaluate(async (tid) => {
    const reg = await import('/assets/data/registry.js');
    const units = await reg.unitsForTopic(tid);
    const q = units[0].questions[0];
    return { answer: q.answer, n: q.choices.length };
  }, topicId);
  const wrongIdx = (info.answer + 1) % info.n;

  await page.goto(`${BASE}/${href}`, { waitUntil: 'load' });
  await page.waitForSelector('[data-start="all"]', { timeout: 15000 });
  await page.click('[data-start="all"]');
  await waitExam(page);
  await page.click(`.choices .choice[data-pick="${wrongIdx}"]`);
  await page.waitForSelector('.kaisetsu', { timeout: 8000 });
  assert((await page.locator('.kaisetsu').first().innerText()).includes('誤答'), '意図的に誤答したのに「誤答」表示になっていません');

  await gotoHash(page, BASE, '/review');
  await page.waitForSelector('.grid.grid--3', { timeout: 10000 });
  const text = await page.locator('.grid.grid--3').innerText();
  assert(/間違えた問題/.test(text), '「間違えた問題」カードが見つかりません');
  await page.waitForSelector('[data-go="missed"]', { timeout: 8000 });
  await page.click('[data-go="missed"]');
  await waitExam(page);
  const label = await page.locator('.exambar__id').innerText();
  assert(label.includes('誤答'), `復習キューから起動した演習のラベルが想定と違います（${label}）`);
}

/* 13 SRS間隔: README記載の初回間隔（1日）とコードの一致確認 */
async function test13({ page }) {
  const href = await firstTopicHref(page, BASE);
  const topicId = href.replace('#/drills/', '');
  const info = await page.evaluate(async (tid) => {
    const reg = await import('/assets/data/registry.js');
    const units = await reg.unitsForTopic(tid);
    const q = units[0].questions[0];
    return { qid: q.id, answer: q.answer };
  }, topicId);

  await page.goto(`${BASE}/${href}`, { waitUntil: 'load' });
  await page.waitForSelector('[data-start="all"]', { timeout: 15000 });
  await page.click('[data-start="all"]');
  await waitExam(page);
  await page.click(`.choices .choice[data-pick="${info.answer}"]`);
  await page.waitForSelector('.kaisetsu', { timeout: 8000 });
  assert((await page.locator('.kaisetsu').first().innerText()).includes('正解'), '正解を選んだのに「正解」表示になっていません');

  const item = await page.evaluate((qid) => {
    const it = window.toeic900.state.items[qid];
    return { due: it.due, streak: it.streak, n: it.n };
  }, info.qid);
  const deltaDays = (item.due - Date.now()) / 86400000;
  assert(item.n === 1 && item.streak === 1, `初回正解後の n/streak が想定と違います（n=${item.n}, streak=${item.streak}）`);
  assert(deltaDays > 0.85 && deltaDays < 1.15,
    `README「1 → 3 → 7 → 16 → 35 → 75 日」の初回間隔は1日のはずが、実際は約 ${deltaDays.toFixed(2)} 日でした。`
    + `store.js の recordItem() は streak を先にインクリメントしてから LADDER[streak] を引いており、`
    + `LADDER[0]=1 の段が使われず初回から LADDER[1]=3 日になっている可能性があります（アプリ側の実装調査が必要）。`);
}

/* 14 フラグ */
async function test14({ page }) {
  const href = await firstTopicHref(page, BASE);
  await page.goto(`${BASE}/${href}`, { waitUntil: 'load' });
  await page.waitForSelector('[data-start="all"]', { timeout: 15000 });
  await page.click('[data-start="all"]');
  await waitExam(page);
  const btn = page.locator('[data-act="flag"]');
  await btn.waitFor({ timeout: 8000 });
  const before = await btn.innerText();
  assert(before.includes('☆'), `初期状態のフラグ表示が想定と違います（${before}）`);
  await btn.click();
  await page.waitForTimeout(150);
  const after = await page.locator('[data-act="flag"]').innerText();
  assert(after.includes('★'), `フラグを付けた後の表示が変わりません（${after}）`);
  await page.locator('[data-act="flag"]').click();
  await page.waitForTimeout(150);
  const back = await page.locator('[data-act="flag"]').innerText();
  assert(back.includes('☆'), 'フラグを外した後の表示が戻りません');
}

/* 15 分析（データ0件） */
async function test15({ page }) {
  await gotoHash(page, BASE, '/analytics');
  await page.waitForSelector('.empty', { timeout: 10000 });
  const t = await page.locator('.empty').innerText();
  assert(t.includes('データがありません'), '空状態の案内文が見つかりません');
}

/* 16 分析（データあり）
   1ユニットに複数設問（Part3/4のセット、Part6/7の文書）が束ねられている場合があるため、
   ページ内の choice[data-pick="0"] は「最初の1つ」ではなく「すべて」クリックする必要がある。 */
async function test16({ page }) {
  const href = await firstTopicHref(page, BASE);
  await page.goto(`${BASE}/${href}`, { waitUntil: 'load' });
  await page.waitForSelector('[data-start="all"]', { timeout: 15000 });
  await page.click('[data-start="all"]');
  await waitExam(page);

  const navText = await page.locator('.examnav .mono').innerText();
  const total = Number(navText.match(/\/\s*(\d+)\s*ユニット/)?.[1] || 1);
  for (let i = 0; i < total; i++) {
    const boxes = await page.locator('.choices .choice[data-pick="0"]').all();
    for (const b of boxes) { await b.click(); await page.waitForTimeout(30); }
    if (i < total - 1) {
      await page.click('[data-act="next"]');
      await page.waitForTimeout(80);
    }
  }
  page.once('dialog', d => d.accept());
  await page.click('[data-act="finish"]');
  await page.waitForFunction(() => /^#\/(result|drills)/.test(location.hash), null, { timeout: 8000 }).catch(() => {});

  await gotoHash(page, BASE, '/analytics');
  await page.waitForSelector('.grid.grid--4', { timeout: 10000 });
  const svgCount = await page.locator('.chart').count();
  assert(svgCount > 0, 'グラフ（SVG）が描画されていません');
  const totalCardText = (await page.locator('.grid.grid--4 .card').nth(1).innerText());
  assert(/\d/.test(totalCardText), '通算問題数が数値で表示されていません');
}

/* 17 設定：テーマ切替 */
async function test17({ page }) {
  await gotoHash(page, BASE, '/settings');
  await page.waitForSelector('[data-theme-set="sumi"]', { timeout: 10000 });
  const initial = await page.evaluate(() => document.documentElement.dataset.theme);
  assert(initial === 'paper', `既定のテーマが paper ではありません（${initial}）`);

  await page.click('[data-theme-set="sumi"]');
  await page.waitForTimeout(150);
  assert((await page.evaluate(() => document.documentElement.dataset.theme)) === 'sumi', 'テーマが sumi に切り替わりません');

  await page.click('#theme-toggle');
  await page.waitForTimeout(150);
  assert((await page.evaluate(() => document.documentElement.dataset.theme)) === 'paper', '左下トグルで paper に戻りません');
}

/* 18 設定：データの書き出し・読み込み（合流） */
async function test18({ page }) {
  const href = await firstTopicHref(page, BASE);
  await page.goto(`${BASE}/${href}`, { waitUntil: 'load' });
  await page.waitForSelector('[data-start="all"]', { timeout: 15000 });
  await page.click('[data-start="all"]');
  await waitExam(page);
  await page.click('.choices .choice[data-pick="0"]');
  await page.waitForSelector('.kaisetsu', { timeout: 8000 });

  page.once('dialog', d => d.accept());
  await page.click('[data-act="finish"]');
  await page.waitForFunction(() => /^#\/result\//.test(location.hash), null, { timeout: 8000 });

  await gotoHash(page, BASE, '/settings');
  await page.waitForSelector('#export', { timeout: 10000 });
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#export'),
  ]);
  const filePath = await download.path();
  assert(filePath, 'エクスポートしたファイルのパスが取得できません');

  const before = await page.evaluate(() => window.toeic900.state.attempts.length);
  assert(before >= 1, 'エクスポート前に受験記録が存在しません');

  page.once('dialog', d => d.accept());
  await page.click('#reset-progress');
  await page.waitForTimeout(900);
  await page.waitForLoadState('load');
  await page.waitForSelector('#export', { timeout: 10000 });
  const afterReset = await page.evaluate(() => window.toeic900.state.attempts.length);
  assert(afterReset === 0, `学習記録の消去後も attempts が残っています（${afterReset} 件）`);

  await page.click('#import-merge');
  page.once('dialog', d => d.accept());
  await page.setInputFiles('#file', filePath);
  await page.waitForTimeout(2200);
  await page.waitForLoadState('load');
  const afterMerge = await page.evaluate(() => window.toeic900.state.attempts.length);
  assert(afterMerge >= 1, `「読み込んで合流」の後も attempts が復元されていません（${afterMerge} 件）`);
}

/* 19 音声非対応環境: Part3が操作できる */
async function test19({ page }) {
  const supported = await page.evaluate(() => !!window.speechSynthesis);
  assert(!supported, 'このテストコンテキストで speechSynthesis が無効化されていません');

  await openMockDetail(page, BASE, 'vol1');
  await page.click('[data-run="p3"]');
  await waitExam(page);

  // 「音声非対応」時に実際に効いていなければならない挙動：再生ボタンの無効化と、
  // 読んで解くモード（スクリプト表示）への強制フォールバック。
  // playerBox() は .player__state に「この端末は音声非対応」と描画する。
  // render() 直後に走る syncPlayer() がこの文言を「未再生」で上書きしないことも確認する
  // （quiz.js の Run.syncPlayer は audio.supported が false のときテキストを触らない）。
  assert(await page.locator('[data-act="play"]').isDisabled(), '再生ボタンが無効化されていません');
  assert(await page.locator('.kaisetsu__script').count() > 0, '読んで解くモードのスクリプト表示が出ていません');
  const playerState = (await page.locator('.player__state').innerText()).trim();
  assert(playerState === 'この端末は音声非対応', `音声非対応時の表示文言が上書きされています（実際: 「${playerState}」）`);

  // 模試形式（mock）は既定で一括採点のため、選んだ直後は is-picked になるだけで
  // 解説はまだ出ない（最後にまとめて採点する設計）。ここでは選択操作自体が
  // 音声非対応環境でも機能することを確認する。
  const firstChoice = page.locator('.reading__qs .choices .choice[data-pick="0"]').first();
  await firstChoice.click();
  await page.waitForTimeout(150);
  assert((await firstChoice.getAttribute('class') || '').includes('is-picked'), '音声非対応環境で選択操作が反映されません');
}

/* 20 サブパス配信 */
async function test20({ page }) {
  const absHits = scanAbsoluteRefs();
  assert(absHits.length === 0, `絶対パス参照が ${absHits.length} 件あります: ${absHits.slice(0, 5).join(' / ')}`);

  const dir = prepareSubpathRoot();
  const sub = await ensureServer(MAIN_PORT + 1, dir, '/app/index.html', 'TOEIC L&R 900');
  console.log(`[smoke] サブパスサーバ: ${sub.url}（port ${sub.port}）${sub.started ? '（このツールが起動）' : '（既存のものを流用）'}`);
  const url = `${sub.url}/app`;

  await page.goto(`${url}/#/`, { waitUntil: 'load' });
  await page.waitForSelector('.phead__title', { timeout: 15000 });
  assert((await page.locator('.phead__title').innerText()).includes('扉'), 'サブパス配信でホームが描画されません');

  await page.click('#nav a[data-route="/drills"]');
  await page.waitForSelector('a.card[href^="#/drills/"]', { timeout: 15000 });
  const href = await page.locator('a.card[href^="#/drills/"]').first().getAttribute('href');

  await page.goto(`${url}/${href}`, { waitUntil: 'load' });
  await page.waitForSelector('[data-start="all"]', { timeout: 15000 });
  await page.click('[data-start="all"]');
  await page.waitForFunction(() => location.hash === '#/exam', null, { timeout: 15000 });
  await page.waitForSelector('.choices .choice', { timeout: 10000 });
  await page.click('.choices .choice[data-pick="0"]');
  await page.waitForSelector('.kaisetsu', { timeout: 8000 });
}

/* 21 キーボード操作 */
async function test21({ page }) {
  const href = await firstTopicHref(page, BASE);
  await page.goto(`${BASE}/${href}`, { waitUntil: 'load' });
  await page.waitForSelector('[data-start="all"]', { timeout: 15000 });
  await page.click('[data-start="all"]');
  await waitExam(page);

  await page.click('#app', { position: { x: 5, y: 5 } }).catch(() => {});
  await page.keyboard.press('b');
  await page.waitForSelector('.kaisetsu', { timeout: 8000 });
  const picked = await page.locator('.choices .choice[data-pick="1"]').first();
  const cls = (await picked.getAttribute('class')) || '';
  assert(/is-correct|is-wrong/.test(cls), 'キーボード「B」での解答が反映されていません');

  await page.keyboard.press('f');
  await page.waitForTimeout(150);
  assert((await page.locator('[data-act="flag"]').innerText()).includes('★'), 'キーボード「F」でフラグが付きません');

  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(150);
  const nav1 = await page.locator('.examnav .mono').innerText();
  assert(nav1.trim().startsWith('2'), `矢印キーで次の設問へ進んでいません（${nav1}）`);

  await page.keyboard.press('ArrowLeft');
  await page.waitForTimeout(150);
  const nav0 = await page.locator('.examnav .mono').innerText();
  assert(nav0.trim().startsWith('1'), `矢印キーで前の設問へ戻れません（${nav0}）`);
}

/* 22 戻るボタン（history） */
async function test22({ page }) {
  await gotoHash(page, BASE, '/');
  await page.waitForSelector('.phead__title');
  await page.click('#nav a[data-route="/drills"]');
  await page.waitForFunction(() => location.hash === '#/drills', null, { timeout: 8000 });
  const href = await page.locator('a.card[href^="#/drills/"]').first().getAttribute('href');
  await page.click(`a.card[href="${href}"]`);
  await page.waitForFunction((h) => location.hash === h, href, { timeout: 8000 });
  await page.click('[data-start="all"]');
  await waitExam(page);

  await page.goBack();
  await page.waitForTimeout(300);
  const hash1 = await page.evaluate(() => location.hash);
  assert(hash1 === href, `戻るボタンで論点詳細に戻りません（実際: ${hash1}）`);
  await page.waitForSelector('.phead__title', { timeout: 8000 });

  await page.goBack();
  await page.waitForFunction(() => location.hash === '#/drills', null, { timeout: 8000 });
  await waitTitleIncludes(page, '個別論点', 8000);

  await page.goForward();
  await page.waitForFunction((h) => location.hash === h, href, { timeout: 8000 });
  await waitTitleNot(page, '個別論点', 8000);
}

/* 23 中断セッションのホーム表示 */
async function test23({ page }) {
  await gotoHash(page, BASE, '/');
  await page.waitForSelector('#first-run', { timeout: 10000 });
  await page.click('#first-run');
  await waitExam(page);
  await page.click('.choices .choice[data-pick="0"]');
  await page.waitForSelector('.kaisetsu', { timeout: 8000 });
  await page.click('[data-act="pause"]');
  await page.waitForFunction(() => location.hash === '#/', null, { timeout: 8000 });

  await page.waitForSelector('[data-resume]', { timeout: 8000 });
  const text = await page.locator('#app').innerText();
  assert(text.includes('中断中の演習'), 'ホームに中断中の演習カードが表示されません');
  assert(/1\s*\/\s*30/.test(text), `解答済み数の表示が想定と違います`);

  await page.click('[data-resume]');
  await waitExam(page);
  const count = await page.locator('.exambar__count').innerText();
  assert(count.trim().startsWith('1'), `再開後の解答数が復元されていません（${count}）`);

  await page.click('[data-act="pause"]');
  await page.waitForFunction(() => location.hash === '#/', null, { timeout: 8000 });
  await page.waitForSelector('[data-drop]', { timeout: 8000 });
  page.once('dialog', d => d.accept());
  await page.click('[data-drop]');
  await page.waitForTimeout(700);
  await page.waitForLoadState('load');
  const after = await page.locator('#app').innerText();
  assert(!after.includes('中断中の演習'), '破棄後も中断中の演習カードが残っています');
}

/* 24 未知ルートのフォールバック */
async function test24({ page }) {
  await gotoHash(page, BASE, '/no-such-route-xyz');
  await page.waitForSelector('.phead__title', { timeout: 10000 });
  assert((await page.locator('.phead__title').innerText()).includes('扉'), '未知のルートでホームにフォールバックしません');
  const current = await page.getAttribute('#nav a[data-route="/"]', 'aria-current');
  assert(current === 'page', 'ホームのナビ項目が現在地としてマークされていません');
}

/* 25 Part1描写テキスト方式: 表示 → 一定時間後に自動消去 → 「もう一度見る」で再表示
   quiz.js の DESC_VISIBLE_MS（8秒）に対して余裕を見て8.5秒待つ。 */
async function test25({ page }) {
  await launchDescDrill(page, BASE);

  await page.waitForSelector('.descbox__text', { timeout: 8000 });
  assert(await page.locator('.descbox__gone').count() === 0, '初期表示なのに「もう一度見る」ボタンが出ています');

  await page.waitForTimeout(8500);
  assert(await page.locator('.descbox__text').count() === 0, '8.5秒待っても描写テキストが自動で消えません');
  assert(await page.locator('.descbox__gone').count() === 1, '消去後に「もう一度見る」の案内が表示されません');

  await page.click('[data-act="desc-show"]');
  await page.waitForSelector('.descbox__text', { timeout: 3000 });
  assert(await page.locator('.descbox__gone').count() === 0, '「もう一度見る」を押しても描写テキストが再表示されません');
}

/* 26 音声非対応環境: 描写が消えた後も「もう一度見る」から解答〜解説まで到達できる
   （runOne が全テスト共通で speechSynthesis を無効化しているため、ここでは
   その前提を明示的に確認したうえで、詰まらず解答できることを検証する）。 */
async function test26({ page }) {
  const supported = await page.evaluate(() => !!window.speechSynthesis);
  assert(!supported, 'このテストコンテキストで speechSynthesis が無効化されていません');

  await launchDescDrill(page, BASE);
  await page.waitForSelector('.descbox__text', { timeout: 8000 });

  await page.waitForTimeout(8500);
  await page.click('[data-act="desc-show"]');
  await page.waitForSelector('.descbox__text', { timeout: 3000 });

  const choice = page.locator('.choices .choice[data-pick="0"]').first();
  const choiceText = await choice.innerText();
  assert(!choiceText.includes('音声のみ'), '音声非対応環境なのに選択肢が隠されています（読んで解くモードに落ちていない）');
  await choice.click();
  await page.waitForSelector('.kaisetsu', { timeout: 8000 });
  const k = await page.locator('.kaisetsu').first().innerText();
  assert(/正解|誤答/.test(k), '音声非対応環境で「もう一度見る」から解答しても採点結果が表示されません');
}

/* 27 回帰確認: scene方式（模試のPart1）は従来どおりSVGを描画し、
   desc方式の要素（.descbox）を一切持たない */
async function test27({ page }) {
  await openMockDetail(page, BASE, 'vol1');
  await page.click('[data-run="p1"]');
  await waitExam(page);
  await page.locator('.scene svg').waitFor({ timeout: 10000 });
  assert(await page.locator('.descbox').count() === 0, 'scene方式のユニットなのに .descbox（desc方式の表示）が描画されています');
  assert(await page.locator('[data-act="desc-show"]').count() === 0, 'scene方式のユニットなのに「もう一度見る」ボタンが出ています');
}

/* =============================================================
   実行制御
   ============================================================= */
const TESTS = [
  ['01_起動：index.htmlの読み込み・JSエラー0件・404が0件', test01],
  ['02_ルータ：ホーム／ドリル／模試／復習／分析／設定の6ルートに遷移し描画される', test02],
  ['03_ドリル一覧：論点カードが表示される', test03],
  ['04_ドリル演習：解答→正誤判定→解説(exp/why/ja/vocab)が表示される', test04],
  ['05_Part1：SVG場面が描画される', test05],
  ['06_Part6：本文の{{n}}が空所として描画され生文字列が残らない', test06],
  ['07_Part7：[[n]]の文挿入位置が処理され生文字列が残らない', test07],
  ['08_模試一覧：収録済み6回分が表示される', test08],
  ['09_模試開始：設問が表示される', test09],
  ['10_模試の中断・再開：解答状態が復元される', test10],
  ['11_採点：リスニング未受験時にリスニング推定値が出ない', test11],
  ['12_復習：誤答が「間違えた問題」キューに追加される', test12],
  ['13_SRS間隔：初回正解の次回間隔がREADME記載(1日)と一致するか', test13],
  ['14_フラグ：設問にフラグを付け外しできる', test14],
  ['15_分析（データ0件）：グラフが壊れず空状態を表示する', test15],
  ['16_分析（データあり）：グラフと集計が描画される', test16],
  ['17_設定：テーマ切替（light/dark）', test17],
  ['18_設定：データの書き出し・読み込み（読み込んで合流）', test18],
  ['19_音声非対応環境：Part3が操作できる（読んで解くモードに自動フォールバック）', test19],
  ['20_サブパス配信：/app/配下でも同一に動作し絶対パス参照が0件', test20],
  ['21_キーボード操作：A〜D・矢印・Fキーで操作できる', test21],
  ['22_戻るボタン：ブラウザのhistory操作でアプリが壊れない', test22],
  ['23_中断セッション：ホーム画面に表示され再開・破棄できる', test23],
  ['24_未知ルート：存在しないハッシュでホームにフォールバックする', test24],
  ['25_Part1描写テキスト方式：表示→自動消去→もう一度見るで再表示', test25],
  ['26_Part1描写テキスト方式：音声非対応環境でももう一度見る→解答→解説まで到達', test26],
  ['27_Part1：模試のscene方式は従来どおりSVGを描画しdescboxを持たない（退行なし）', test27],
];

function slug(name) { return name.replace(/[^\w一-龠ぁ-んァ-ヶー]+/g, '-').slice(0, 80); }

async function runOne(browser, name, fn) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  // headless 環境には音声合成が無いため、全テストで一律に無効化する（test19 はこれを明示的に確認する）
  await context.addInitScript(() => {
    try {
      Object.defineProperty(window, 'speechSynthesis', { get: () => undefined, configurable: true });
    } catch { /* noop */ }
  });
  const page = await context.newPage();
  const consoleErrors = [];
  const badResponses = [];
  page.on('console', msg => {
    if (msg.type() !== 'error') return;
    // 「リソースの読み込みに失敗しました」はブラウザが自動生成する汎用メッセージで、
    // 実体は response/requestfailed イベント側で（同一オリジンに限定して）既に検出している。
    // Google Fonts 等サードパーティの一時的な失敗をアプリの不具合として誤検知しないよう除外する。
    if (/^Failed to load resource/.test(msg.text())) return;
    consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => consoleErrors.push(String(err?.message || err)));
  page.on('requestfailed', req => {
    // Chromium は fetch(HEAD) が実際には200で成功していても requestfailed(ERR_ABORTED) を
    // 発火させることがある（mockAvailable() の HEAD 確認で頻発、fetch() 自体は正しく resolve する）。
    // アプリ側の不具合ではないためテストの誤検知を避け、HEAD は対象から除外する。
    if (req.method() === 'HEAD') return;
    if (/^http:\/\/127\.0\.0\.1/.test(req.url())) badResponses.push(`FAILED ${req.url()} (${req.failure()?.errorText || '?'})`);
  });
  page.on('response', res => {
    if (/^http:\/\/127\.0\.0\.1/.test(res.url()) && res.status() >= 400) badResponses.push(`${res.status()} ${res.url()}`);
  });

  const t0 = Date.now();
  let pass = true, message = '';
  try {
    await fn({ page, context });
    if (consoleErrors.length) { pass = false; message = `[console] ${consoleErrors.join(' / ')}`; }
    if (badResponses.length) { pass = false; message += ` [network] ${badResponses.join(' / ')}`; }
  } catch (e) {
    pass = false;
    message = e?.message || String(e);
  }

  if (!pass) {
    try {
      mkdirSync(OUT_DIR, { recursive: true });
      const file = path.join(OUT_DIR, `fail-${slug(name)}.png`);
      await page.screenshot({ path: file, fullPage: true }).catch(() => {});
    } catch { /* noop */ }
  }

  await context.close().catch(() => {});
  return { name, pass, message, ms: Date.now() - t0, consoleErrors: consoleErrors.length, badResponses: badResponses.length };
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const main = await ensureServer(PORT, ROOT, '/index.html', 'TOEIC L&R 900');
  BASE = main.url;
  MAIN_PORT = main.port;
  console.log(`[smoke] サーバ: ${BASE}（port ${main.port}）${main.started ? '（このツールが起動）' : '（既存のものを流用）'}`);

  const browser = await chromium.launch({ headless: !HEADED });
  const results = [];
  for (const [name, fn] of TESTS) {
    if (ONLY && !name.includes(ONLY)) continue;
    const r = await runOne(browser, name, fn);
    results.push(r);
    console.log(`[${r.pass ? 'PASS' : 'FAIL'}] ${r.name}${r.pass ? '' : `\n       └ ${r.message}`}`);
  }
  await browser.close();

  console.log('\n===== 結果 =====');
  const passN = results.filter(r => r.pass).length;
  const failN = results.length - passN;
  for (const r of results) console.log(`[${r.pass ? 'PASS' : 'FAIL'}] ${r.name}`);
  console.log(`\n合計 ${results.length} 件 / PASS ${passN} / FAIL ${failN}`);
  const totalConsoleErr = results.reduce((s, r) => s + r.consoleErrors, 0);
  const totalBad = results.reduce((s, r) => s + r.badResponses, 0);
  console.log(`console エラー合計: ${totalConsoleErr} 件 / 同一オリジンの通信エラー(404等)合計: ${totalBad} 件`);

  for (const p of procs) { try { p.kill(); } catch { /* noop */ } }

  if (failN > 0) process.exitCode = 1;
}

main().catch(e => {
  console.error('[smoke] 致命的エラー', e);
  for (const p of procs) { try { p.kill(); } catch { /* noop */ } }
  process.exitCode = 1;
});
