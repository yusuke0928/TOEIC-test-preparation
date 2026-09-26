#!/usr/bin/env node
/* =============================================================
   stamp-version.mjs — 公開時に assets/js/version.js へ版を刻む

   git log -1 からデプロイされるコミットの日時と短縮 SHA を取り、
   assets/js/version.js を書き換える。依存パッケージは使わず
   Node 標準ライブラリのみで書いてある（tools/package.json の
   node_modules が無くても動く。CI の Upload artifact 直前に走らせるため）。

   使い方:
     node tools/stamp-version.mjs                既定の書き出し先（assets/js/version.js）へ
     node tools/stamp-version.mjs --out <パス>    別のパスへ書き出す（手元で試すとき用）

   actions/checkout@v4 は既定で fetch-depth 1（浅いクローン）だが、
   ここで使うのは `git log -1`（現在のコミット1つ）だけなので、
   履歴全体が無い状態でも動く。

   git が使えない・コミット情報が取れない等の場合は、黙って開発版のまま
   にはせず、非0で終了する（公開ワークフローが赤くなって気づけるように）。
   ============================================================= */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

/* ── 引数 ────────────────────────────────────────────── */
const argv = process.argv.slice(2);
const outIdx = argv.indexOf('--out');
if (outIdx >= 0 && !argv[outIdx + 1]) {
  console.error('[stamp-version] 失敗: --out にはパスを指定してください');
  process.exit(1);
}
const OUT = path.resolve(outIdx >= 0 ? argv[outIdx + 1] : path.join(ROOT, 'assets/js/version.js'));

/* ── git からコミット情報を取得 ──────────────────────── */
function git(args) {
  return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' }).trim();
}

function getCommitInfo() {
  let hash, iso;
  try {
    hash = git(['log', '-1', '--format=%H']);
    iso = git(['log', '-1', '--format=%cI']);
  } catch (e) {
    throw new Error(`git からコミット情報を取得できませんでした（${e.message}）`);
  }
  if (!/^[0-9a-f]{40}$/.test(hash)) {
    throw new Error(`コミットハッシュの形式が不正です: ${hash || '(空)'}`);
  }
  if (!iso) {
    throw new Error('コミット日時が空でした');
  }
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`コミット日時の解析に失敗しました: ${iso}`);
  }
  return { commit: hash.slice(0, 7), date };
}

/* ── 日本時間への換算 ────────────────────────────────── */
function toJSTParts(date) {
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit',
    hourCycle: 'h23', // hour12:false だけだと ICU 実装によって深夜0時が「24」になる事故があるため明示する
  });
  const parts = Object.fromEntries(fmt.formatToParts(date).map(p => [p.type, p.value]));
  return parts;
}

/* ── 書き出し ────────────────────────────────────────── */
function render({ label, dateLabel, commit }) {
  return `/* =============================================================
   version.js — アプリの版（バージョン）情報

   このファイルは tools/stamp-version.mjs が公開のたびに自動で書き換える。
   手元でこの内容を直接編集しないこと（次の公開で上書きされる）。
   ============================================================= */
export const VERSION = {
  label: ${JSON.stringify(label)},
  date: ${JSON.stringify(dateLabel)},
  commit: ${JSON.stringify(commit)},
};
`;
}

function main() {
  const { commit, date } = getCommitInfo();
  const p = toJSTParts(date);
  const label = `${p.year}.${p.month}.${p.day}`;
  const dateLabel = `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute} JST`;

  writeFileSync(OUT, render({ label, dateLabel, commit }), 'utf8');
  const shownPath = OUT.startsWith(ROOT) ? path.relative(ROOT, OUT) : OUT;
  console.log(`[stamp-version] ${shownPath} に版 ${label}（commit ${commit}）を書き込みました`);
}

try {
  main();
} catch (e) {
  console.error(`[stamp-version] 失敗: ${e.message}`);
  process.exit(1);
}
