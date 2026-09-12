/* =============================================================
   titleleak.mjs — 文書の title / head が設問の正解を名指ししていないかを検出する
   （2026-09-12 追加）

   きっかけ：模試3巻の Part 7 を同時に書き下ろしたところ、**3人の実装役が独立に、
   文書タイトルにその文書の第1問の答えを書いた。**
   `assets/js/render.js` の renderDoc() は doc.title / doc.head を実際に画面へ描画するので、
   受験者は見出しを読むだけで正解できてしまう。

   なぜ既存の計器で捕まらなかったか：
   - setleak.mjs は「設問と設問のあいだ」しか見ない（title/head は視野の外）
   - dupcheck.mjs は「設問と設問のあいだ」の重複を見る
   - validate.mjs の検査G〜J は「1つの設問の中で正解が浮いていないか」を見る
   → **title/head はどの計器の視野にも入っていなかった。**

   判定：ある設問の「正解だけが持つ内容語」（他の3選択肢に無い語）が title / head に出ていたら候補。

   ※ setleak.mjs と同じく**誤検知が大半の一次ふるい**である。合否判定には使わない。
      「To: All 〜 staff」のメモで正解に staff が出る、のような自明な偽陽性を多く含む。
      この精度のため validate.mjs には入れていない（入れると警告が数十件になり
      「エラー0・警告0」の運用が壊れる）。上から順に人が読むための道具。

   使い方: node tools/titleleak.mjs [ルート]
   ============================================================= */
import { readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(process.argv[2] || resolve(HERE, '..'));

/* 内容語だけを残す。3文字以下は落とす（the/of/and 等と、短すぎて偶然一致する語） */
const STOP = new Set(`a an the of to in on at for with by from as is are was were be been being
it its they them their that this these those and or but not no what which who whom whose how why
when where will would can could may might shall should must have has had do does did there here
more most less least than then about into over under after before during while all any some each
every other others one two three four such own same so very just only also both either neither
none per new`.split(/\s+/).filter(Boolean));
const words = (s) => String(s || '')
  .toLowerCase().replace(/[^a-z0-9' -]/g, ' ').split(/[\s-]+/)
  .filter(w => w.length > 3 && !STOP.has(w));

const files = [];
for (const dir of ['drills', 'mocks']) {
  let names;
  try { names = readdirSync(`${ROOT}/assets/data/${dir}`); } catch { continue; }
  for (const f of names) if (f.endsWith('.js')) files.push(`${ROOT}/assets/data/${dir}/${f}`);
}

const seen = new Set();
const hits = [];
for (const f of files) {
  let mod;
  try { mod = await import(f); } catch { continue; }
  for (const key of Object.keys(mod)) {
    const arr = mod[key];
    if (!Array.isArray(arr)) continue;
    for (const u of arr) {
      if (!u || u.kind !== 'doc' || seen.has(u.id)) continue;
      seen.add(u.id);
      for (const d of (u.docs || [])) {
        const head = typeof d.head === 'string' ? d.head : '';
        const tw = new Set([...words(d.title), ...words(head)]);
        if (!tw.size) continue;
        for (const q of (u.questions || [])) {
          if (q.insertAt) continue;                 /* 位置選択は選択肢が [1]〜[4] なので対象外 */
          const ch = q.choices || [];
          if (ch.length < 2 || typeof ch[q.answer] !== 'string') continue;
          const ansW = new Set(words(ch[q.answer]));
          const otherW = new Set();
          ch.forEach((c, i) => { if (i !== q.answer) words(c).forEach(w => otherW.add(w)); });
          const leak = [...ansW].filter(w => !otherW.has(w)).filter(w => tw.has(w));
          if (leak.length) {
            hits.push({
              file: f.split('/').slice(-2).join('/'), unit: u.id, no: q.no || q.id,
              leak, where: d.title ? 'title' : 'head',
              label: (d.title || head.split('\n')[0] || '').slice(0, 58),
            });
          }
        }
      }
    }
  }
}

console.log('titleleak: 文書見出し（title / head）から正解が漏れていないかの一次ふるい');
console.log(`検査対象: doc ユニット ${seen.size} 件\n`);
hits.sort((a, b) => b.leak.length - a.leak.length);
hits.forEach((h, i) => {
  console.log(`[${String(i + 1).padStart(3)}] ${h.file}  ${h.unit}  No.${h.no}`);
  console.log(`      正解だけが持つ語 [${h.leak.join(', ')}] が ${h.where} に出ている`);
  console.log(`      ${h.where}: "${h.label}"`);
});
console.log(`\n計 ${hits.length} 件。`);
console.log('※ 誤検知が大半の一次ふるい。合否判定には使わず、上から順に人が読むこと。');
console.log('※ 新規作問では「見出しだけを読んで4問を解く」実験を必ず行うこと。');
