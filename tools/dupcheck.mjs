/* =============================================================
   dupcheck.mjs — 設問どうしの重複を3つの軸で洗い出す（2026-09-12 追加）

   validate.mjs の検査G〜J が見ているのは「1つの設問の中で正解が浮いていないか」。
   この道具が見るのは「設問と設問のあいだ」で、次の3つを測る。

     1. 選択肢集合の重複
        全設問の4択を集合として突き合わせ、完全一致と
        「4本中3本一致かつ正解も同一」を出す。
        誤答を1本差し替えただけで別ファイルの設問と完全一致になった事故が実際にある
        （grammar5.js の pron-13 ⇔ vol1-r1.js の v1q117）。
        Part 5 の語形変化のパラダイム（is/was/were/has been 等）は構造上たくさん一致するので、
        件数そのものではなく「前回からの増減」を見ること。

     2. 巻をまたぐスロット衝突
        模試どうしで「同じ通し番号 no」の設問が選択肢を共有していないか。
        利用者は模試を複数回解くので、同じスロットで答えが同じだと記憶で得点できる。
        No.174（Part 7 文挿入）が5巻すべて正解 [3] だった欠陥はこれで見つけた。

     3. 内容語の選択肢の巻またぎ重複
        1語の語形変化ではなく、文になっている選択肢（平均4語以上）だけを対象に、
        巻をまたいだ一致を見る。1 のノイズを落として「本当に記憶で解ける組」だけを残す。

   使い方:
     node tools/dupcheck.mjs              現行の作業ツリーを検査
     node tools/dupcheck.mjs <ルート>     別のツリー（git archive で展開した HEAD 等）と比べる

   **並行して複数の役が直しているあいだは意味を持たない。**
   互いの変更が見えないので、全員の作業が終わって静止してから1回かけること。
   ============================================================= */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.argv[2] || path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

async function loadAll(root) {
  const out = [];
  for (const d of ['drills', 'mocks']) {
    const dir = path.join(root, 'assets/data', d);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.js')).sort()) {
      if (d === 'mocks' && /^vol\d\.js$/.test(f)) continue;      // 集約ファイルは中身を持たない
      const m = await import(pathToFileURL(path.join(dir, f)).href);
      for (const v of Object.values(m)) {
        if (!Array.isArray(v)) continue;
        for (const u of v) out.push({ file: `${d}/${f}`, unit: u });
      }
    }
  }
  return out;
}

const norm = (c) => String(c).toLowerCase().trim();
const all = await loadAll(ROOT);
const rows = [];
for (const { file, unit } of all) {
  for (const q of unit.questions || []) {
    if (!Array.isArray(q.choices) || q.choices.length < 3) continue;
    rows.push({
      file, id: q.id, no: q.no,
      set: q.choices.map(norm),
      ans: norm(q.choices[q.answer]),
      wc: q.choices.reduce((s, c) => s + String(c).split(/\s+/).length, 0) / q.choices.length,
    });
  }
}

/* ── 1. 選択肢集合の重複 ───────────────────────────── */
const key = (s) => [...s].sort().join('|');
const byExact = new Map();
for (const r of rows) {
  const k = key(r.set);
  if (!byExact.has(k)) byExact.set(k, []);
  byExact.get(k).push(r);
}
let exact = 0;
for (const v of byExact.values()) if (v.length > 1) exact++;

let near = 0;
const nearRows = [];
for (let i = 0; i < rows.length; i++) for (let j = i + 1; j < rows.length; j++) {
  const a = rows[i], b = rows[j];
  if (a.set.length !== b.set.length || a.set.length !== 4) continue;
  if (a.ans !== b.ans) continue;
  const sa = new Set(a.set);
  if (b.set.filter(x => sa.has(x)).length === 3) { near++; nearRows.push([a, b]); }
}
console.log(`【1】選択肢集合  完全一致 ${exact} 組 / 4本中3本一致かつ正解も同一 ${near} 組（検査した設問 ${rows.length}）`);

/* ── 2. 巻をまたぐスロット衝突 ─────────────────────── */
const byNo = new Map();
for (const r of rows) {
  if (!r.file.startsWith('mocks/') || r.no == null) continue;
  if (!byNo.has(r.no)) byNo.set(r.no, []);
  byNo.get(r.no).push(r);
}
let slotSame = 0;
const slotRows = [];
for (const [no, list] of [...byNo].sort((a, b) => a[0] - b[0])) {
  for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
    const a = list[i], b = list[j];
    if (a.set.length !== b.set.length) continue;
    const sa = new Set(a.set);
    const common = b.set.filter(x => sa.has(x)).length;
    if (common < a.set.length - 1) continue;
    if (a.ans === b.ans) { slotSame++; slotRows.push([no, common, a, b]); }
  }
}
console.log(`【2】巻をまたぐ同一スロット  選択肢が重なり正解も同一 ${slotSame} 組`);
for (const [no, common, a, b] of slotRows) {
  console.log(`      no=${no} ${common}/${a.set.length}一致  ${a.file} ${a.id} ⇔ ${b.file} ${b.id}`);
}

/* ── 3. 内容語の選択肢の巻またぎ重複 ───────────────── */
const content = rows.filter(r => r.wc >= 4);
let cont = 0;
const contRows = [];
for (let i = 0; i < content.length; i++) for (let j = i + 1; j < content.length; j++) {
  const a = content[i], b = content[j];
  if (a.set.length !== b.set.length || a.ans !== b.ans) continue;
  const sa = new Set(a.set);
  if (b.set.filter(x => sa.has(x)).length >= a.set.length - 1) { cont++; contRows.push([a, b]); }
}
console.log(`【3】内容語の選択肢（平均4語以上 ${content.length} 問）  巻をまたぐ重複 ${cont} 組`);
for (const [a, b] of contRows) {
  console.log(`      ${a.file} ${a.id}(no=${a.no ?? ''}) ⇔ ${b.file} ${b.id}(no=${b.no ?? ''})`);
  console.log(`         正解: ${a.ans.slice(0, 100)}`);
}
