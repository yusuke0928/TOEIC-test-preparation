#!/usr/bin/env node
/* =============================================================
   validate.mjs — 問題データの整合性チェック
   assets/data 配下（模試・ドリル）の全ユニットを読み込み、
   CLAUDE.md に書かれた書式仕様との整合性を検査する。
   アプリ本体（index.html / assets/js / assets/css）は一切変更しない・触らない。

   使い方:
     node tools/validate.mjs          全体を検査
     node tools/validate.mjs vol3     ファイルパスに "vol3" を含む対象だけ表示
     node tools/validate.mjs grammar  同様に "grammar" を含むドリルだけ表示
   （id 重複や論点集計のような対象を横断するチェックは、絞り込み時も
    常にデータ全体に対して行う。絞り込みは「表示・集計」だけに効く。）

     node tools/validate.mjs --extra assets/data/drills/grammar3.js ...
                                       registry.js に未登録のファイルを
                                       追加で検査対象にする（読むだけ・書き換えない）。
                                       --extra 以降の引数はすべてファイルパスとして扱う。
     node tools/validate.mjs vol3 --extra drills/grammar3.js
                                       絞り込みと --extra は併用できる
                                       （--extra より前の引数だけを絞り込みとして扱う）。
                                       パスは cwd 相対 / assets/data 相対 / 絶対のいずれでもよい。

   検査項目（抜粋。詳細は各チェック直上のコメントを参照）:
     ・パート別問題数、模試の通し番号 no の連番、id 重複
     ・kind 別の構造（p1 の scene/desc 排他、set の script、doc の Part6 空所・Part7 挿入位置 等）
     ・選択肢数・answer 範囲・選択肢の重複、why の数と「正解」始まり位置
     ・意図問題の逐語引用が script に存在するか
     ・図表（graphic）— topics（ユニット・設問）に "graphic" 論点があるか、
       設問 tag に「図表」を含むのに、そのユニットが graphic オブジェクトを
       持っていなければエラー（Vol.1〜3 のヘルパーが `graphic: o.g` と誤記していて
       17 ユニット・51 問の図表が描画されなかった実際の事故に対応）。
       あわせて graphic オブジェクトの形（table の head と各 rows の列数が
       揃っているか、list/kv が空でないか）も検査する。
   ============================================================= */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'assets/data');

/* ── answer は 0 始まりか 1 始まりか ──────────────────────
   assets/js/quiz.js を読んで確定させた。
     const KEYS = ['A', 'B', 'C', 'D'];
     ...
     const correct = ci === q.answer;                 // ci は choices への 0 始まり index
     ...
     ${ok ? '正解' : `誤答 — 正解は (${KEYS[q.answer]})`}
   choices 配列への 0 始まりインデックスとして answer が使われている
   （data-pick="${i}" の i は Array.from({length:n},(_,i)=>...) の 0 始まり i）。
   よってこのツールも「answer は 0 始まり」を前提に検査する。            */
const KEYS = ['A', 'B', 'C', 'D'];

const { MOCK_META, DRILL_FILES } = await import(path.join(DATA, 'registry.js'));
const { TOPICS } = await import(path.join(DATA, 'topics.js'));
const { SCENE_KEYS } = await import(path.join(DATA, 'scenes.js'));

const TOPIC_IDS = new Set(TOPICS.map(t => t.id));
const SCENE_IDS = new Set(SCENE_KEYS);
const ROLES = new Set(['M-Am', 'W-Am', 'M-Br', 'W-Br', 'M-Au', 'W-Au', 'M-Cn', 'W-Cn', 'NARR']);

const PART_LIST = [1, 2, 3, 4, 5, 6, 7];
const PART_SIZE = { 1: 6, 2: 25, 3: 39, 4: 30, 5: 30, 6: 16, 7: 54 };

/* パート → 通し番号レンジを PART_SIZE から機械的に導出する（模試のみ意味を持つ） */
const NO_RANGE = {};
{
  let start = 1;
  for (const p of PART_LIST) { NO_RANGE[p] = [start, start + PART_SIZE[p] - 1]; start += PART_SIZE[p]; }
}

/* ── コマンドライン引数 ──────────────────────────────────
   `--extra <ファイル…>` 以降はすべて追加検査対象のファイルパスとして扱う。
   それより前の最初の引数だけを従来どおりの絞り込み（filterArg）として使う。 */
const rawArgs = process.argv.slice(2);
const extraAt = rawArgs.indexOf('--extra');
const filterArgs = extraAt === -1 ? rawArgs : rawArgs.slice(0, extraAt);
const extraArgs  = extraAt === -1 ? [] : rawArgs.slice(extraAt + 1);

const filterArg = filterArgs[0] || null;
const norm = (s) => String(s).toLowerCase();
const hit = (s) => !filterArg || norm(s).includes(norm(filterArg));

/** --extra のファイル指定を実パスに解決する（cwd 相対 → assets/data 相対 → 絶対、の順に試す） */
function resolveExtraPath(p) {
  if (path.isAbsolute(p) && fs.existsSync(p)) return p;
  const candidates = [
    path.resolve(process.cwd(), p),
    path.join(DATA, p),
    path.join(DATA, 'drills', p),
    path.join(DATA, 'mocks', p),
  ];
  for (const c of candidates) if (fs.existsSync(c)) return c;
  return candidates[0];   // 見つからなくても import 側でエラーにして報告する
}

/* ── 集計の入れ物 ─────────────────────────────────────── */
const issues = [];                        // { level:'ERROR'|'WARN'|'NOTE', key, msg }
const err  = (key, msg) => issues.push({ level: 'ERROR', key, msg });
const warn = (key, msg) => issues.push({ level: 'WARN',  key, msg });
const note = (key, msg) => issues.push({ level: 'NOTE',  key, msg });

const seenUnitIds = new Map();            // id -> 最初に見つかった場所
const seenQuestionIds = new Map();

/* ── why の「隣接参照」検出 ───────────────────────────────
   balance2.mjs は選択肢と why を対で入れ替えるため、why の文が
   「同上」「上記」のように隣の要素を指す書き方をしていると、
   入れ替え後に文意が壊れる。1問ずつ独立して読める文になっているかを見る。 */
const ADJ_REF_RE = /同上|同じく|同様に|同様の理由|前述のとおり|前述の通り|前掲|上記(?:のとおり|の通り)?|下記|後述|上と同じ|前問と同じ|上に同じ/;

/* ── Part3/4 意図問題: stem の逐語引用が script に存在するか ──
   意図問題は `What does the man mean when he says, "..."?` の形で発話を
   逐語引用する。この引用が script と一致していないと、学習者は音声で
   聞いた発話を探せなくなり設問が成立しない（過去に stem "she asked..."
   に対し script は she を欠いていた、という不一致が実際に見つかっている）。
   stem 中の "..." で囲まれた部分を抽出し（曲線引用符 “ ” も拾う）、
   引用符（ネストした引用符を含む）を取り除いて空白を正規化してから、
   script の全 text を連結した文字列に含まれるかを見る。
   引用中の "..."（3 点リーダ相当）は「途中を省略した引用」を表すため、
   断片に分割し、script 中に「この順序で」現れるかを確認する
   （断片ごとに含むかだけ見ると、順序が逆でも通ってしまう）。
   8 文字未満の短い引用は誤検知の元なので対象外にする。            */
const STEM_QUOTE_RE = /["“]([^"”]+)["”]/g;
function stripQuoteChars(s) {
  return s.replace(/["'“”‘’]/g, '');
}
function normalizeForQuoteMatch(s) {
  return stripQuoteChars(s).replace(/\s+/g, ' ').trim();
}
function checkIntentQuote(qat, stem, scriptTextNorm) {
  if (typeof stem !== 'string' || !scriptTextNorm) return;
  for (const m of stem.matchAll(STEM_QUOTE_RE)) {
    const raw = m[1];
    const quote = normalizeForQuoteMatch(raw);
    if (quote.length < 8) continue;
    const fragments = quote.split(/\.{3,}/).map(f => f.trim()).filter(Boolean);
    let from = 0, ok = fragments.length > 0;
    for (const frag of fragments) {
      const idx = scriptTextNorm.indexOf(frag, from);
      if (idx === -1) { ok = false; break; }
      from = idx + frag.length;
    }
    if (!ok) err(qat, `意図問題の引用 "${raw}" が script 中に見つからない（逐語引用が本文と不一致）`);
  }
}

/* ── 選択肢の大文字・小文字と空所位置の整合 ────────────────
   固有名詞・I（一人称代名詞）・頭字語（全部大文字）は例外として無視する。
   これは WARN のみのチェックなので、判断に迷うものは検出漏れよりは
   誤検知の少なさを優先する（誤検知が多いと WARN 自体が無視される）。 */
function firstWord(choice) {
  const m = typeof choice === 'string' ? choice.match(/^[A-Za-z]+/) : null;
  return m ? m[0] : null;
}
function isCaseExempt(word) {
  if (!word) return true;
  if (word === 'I') return true;                 // 一人称代名詞
  if (/^[A-Z]{2,}$/.test(word)) return true;      // 頭字語（NASA, ETS 等）
  return false;
}
/** 文挿入タイプ（Part6/7 の「文挿入」設問）は選択肢が完結した文なので、
   空所位置に関わらず選択肢は独立して大文字始まりになる。対象外にする。 */
function looksLikeSentenceChoices(choices) {
  return Array.isArray(choices) && choices.some(c =>
    typeof c === 'string' && /[.!?]["')\]]?$/.test(c.trim()) && c.trim().split(/\s+/).length > 4);
}
/** text 内で idx の直前が文頭相当（文字列先頭 / ". " "! " "? " / 改行の直後）かを判定 */
function isSentenceStartBefore(text, idx) {
  let before = text.slice(0, idx).replace(/[ \t]+$/, '');
  if (/\n$/.test(before)) return true;
  // 開き引用符・かっこは文頭判定の妨げにしない（例: she says. "------- needed ...）
  before = before.replace(/["'“‘(（]+$/, '').replace(/[ \t]+$/, '');
  return before.length === 0 || /[.!?]$/.test(before);
}
function checkBlankCase(qat, choices, atSentenceStart) {
  if (!Array.isArray(choices) || looksLikeSentenceChoices(choices)) return;
  choices.forEach((c, idx) => {
    const word = firstWord(c);
    if (!word || isCaseExempt(word)) return;
    const startsUpper = /^[A-Z]/.test(word);
    if (atSentenceStart && !startsUpper)
      warn(qat, `文頭の空所なのに選択肢(${KEYS[idx]}) "${c}" が小文字始まり`);
    else if (!atSentenceStart && startsUpper)
      warn(qat, `文中の空所なのに選択肢(${KEYS[idx]}) "${c}" が大文字始まり（固有名詞・頭字語なら無視可）`);
  });
}
/** doc（Part6 等）の本文木を再帰的に走査し、{{n}} の出現位置（テキストと index）を集める */
function collectBraceBlanks(node, out) {
  if (typeof node === 'string') {
    for (const m of node.matchAll(/\{\{(\d+)\}\}/g)) out.push({ n: Number(m[1]), text: node, index: m.index });
  } else if (Array.isArray(node)) {
    node.forEach(v => collectBraceBlanks(v, out));
  } else if (node && typeof node === 'object') {
    for (const v of Object.values(node)) collectBraceBlanks(v, out);
  }
}

const targetStats = new Map();            // key -> { units, questions }
const mockDist = new Map();               // mockId -> { part -> { letter -> count } }
const drillDist = new Map();              // topicId -> { letter -> count }
const drillDistN = new Map();             // topicId -> Set(選択肢数) — Part2 論点(3択)を判別するため
const mockSeq = new Map();                // mockId -> { part -> [{ no, answerIdx }] } — no昇順の並びを見る循環/連続チェック用
const extraSeq = new Map();               // --extra の key -> { part -> [{ no, answerIdx }] } — registry.js 未登録ファイル用（下記参照）
const mockGroups = new Map();             // mockId -> { part -> [bool, ...] } — Part6の1文書(4問)・Part3/4の1セット(3問)ごとに
                                           // 「正解記号が全部異なるか」を集める（検査E用）
const extraGroups = new Map();            // --extra の key -> { part -> [bool, ...] } — 上と同じ、registry.js 未登録ファイル用

/* ── 対象ファイルの読み込み ─────────────────────────────
   registry.js の MOCK_META / DRILL_FILES をそのまま使う
   （fetch に依存する mockAvailable() 等は使わない。今回は全 5 回とも実体があるが、
    念のため import 失敗はエラー 1 件に変換して続行する）。                       */
const targets = [];   // { key, mock:boolean, mockId?, units }

for (const meta of MOCK_META) {
  const key = `mocks/${meta.id}.js`;
  try {
    const mod = await meta.loader();
    targets.push({ key, mock: true, mockId: meta.id, units: mod.UNITS });
  } catch (e) {
    err(key, `読み込み失敗 — ${e.message}`);
  }
}

for (const loader of DRILL_FILES) {
  const m = loader.toString().match(/import\(['"](.+?)['"]\)/);
  const key = m ? `drills/${path.basename(m[1])}` : '(不明なドリルファイル)';
  try {
    const mod = await loader();
    targets.push({ key, mock: false, units: mod.UNITS });
  } catch (e) {
    err(key, `読み込み失敗 — ${e.message}`);
  }
}

/* ── --extra: registry.js に未登録のファイルを追加で検査対象にする ──
   まだ MOCK_META / DRILL_FILES に載っていない新規ファイルを、
   自分の成果物として単体で検証できるようにするための入口。
   読み込んで検査するだけで、データは一切書き換えない。          */
for (const p of extraArgs) {
  const resolved = resolveExtraPath(p);
  const key = `extra/${path.relative(DATA, resolved).startsWith('..') ? path.basename(resolved) : path.relative(DATA, resolved)}`;
  try {
    const mod = await import(pathToFileURL(resolved).href);
    if (!Array.isArray(mod.UNITS)) { err(key, 'UNITS が配列でエクスポートされていない（--extra）'); continue; }
    targets.push({ key, mock: false, extra: true, units: mod.UNITS });
  } catch (e) {
    err(key, `--extra 読み込み失敗（指定: "${p}"） — ${e.message}`);
  }
}

/* ══ 検査本体 ════════════════════════════════════════════ */
for (const t of targets) {
  const { key, mock, units } = t;
  if (!Array.isArray(units)) { err(key, 'UNITS が配列でエクスポートされていない'); continue; }

  const localPart = {};
  const nos = [];
  let unitCount = 0, questionCount = 0;

  for (const u of units) {
    unitCount++;
    const at = `${key} / ${u.id ?? '(id なし)'}`;

    /* ── id 重複（ユニット）── */
    if (!u.id) err(key, 'id を持たないユニットがある');
    else if (seenUnitIds.has(u.id)) err(at, `ユニット id が重複（先出: ${seenUnitIds.get(u.id)}）`);
    else seenUnitIds.set(u.id, key);

    if (!PART_LIST.includes(u.part)) err(at, `part が不正な値 (${u.part})`);
    if (!['p1', 'p2', 'set', 'single', 'doc'].includes(u.kind)) err(at, `kind が不正な値 (${u.kind})`);
    if (u.level != null && (!Number.isInteger(u.level) || u.level < 1 || u.level > 5))
      warn(at, `level が 1–5 の範囲外 (${u.level})`);

    if (!Array.isArray(u.questions) || !u.questions.length) { err(at, 'questions がない'); continue; }

    /* ── 論点 ID（ユニット単位） ── */
    for (const tp of (u.topics || [])) {
      if (!TOPIC_IDS.has(tp)) err(at, `未知の論点 ID "${tp}"（ユニット topics）`);
    }

    /* ── 図表（graphic）── Vol.1〜3 の Part3/4 ヘルパーが `graphic: o.g` と
       誤記していて（呼び出し側は `graphic:` で渡していた）、17 ユニット・51 問の
       図表が実行時に描画されない事故が実際に起きた（vol4/5 は `o.graphic` で無事）。
       topics（ユニット・設問の両方）に "graphic" 論点があるのに graphic オブジェクトを
       持たない、または設問 tag に「図表」を含むのに graphic が無ければ、
       "Look at the graphic." という設問なのに図表が表示されず原理的に解けなくなる。 */
    {
      const allTopics = new Set(u.topics || []);
      for (const q of u.questions) for (const tp of (q.topics || [])) allTopics.add(tp);
      const topicsHaveGraphic = allTopics.has('graphic');
      const graphicTags = u.questions.filter(q => typeof q.tag === 'string' && q.tag.includes('図表'));
      if ((topicsHaveGraphic || graphicTags.length) && !u.graphic) {
        err(at, `図表問題のはずだが graphic オブジェクトがない（topics に graphic 論点: ${topicsHaveGraphic ? 'あり' : 'なし'} / tag「図表」の設問: ${graphicTags.length}問）`);
      }
      /* ── graphic オブジェクトの形（head と rows の列数が揃っているか等） ── */
      if (u.graphic) {
        const g = u.graphic;
        if (g.t === 'table') {
          if (!Array.isArray(g.rows) || !g.rows.length) err(at, 'graphic(table) に rows がない');
          else {
            if (Array.isArray(g.head)) {
              g.rows.forEach((r, ri) => {
                if (!Array.isArray(r) || r.length !== g.head.length)
                  err(at, `graphic(table) の rows[${ri}] の列数（${Array.isArray(r) ? r.length : '?'}）が head の列数（${g.head.length}）と不一致`);
              });
            }
            const rowLens = new Set(g.rows.filter(Array.isArray).map(r => r.length));
            if (rowLens.size > 1) err(at, `graphic(table) の rows の列数が行ごとに揃っていない（${[...rowLens].join(',')}）`);
          }
        } else if (g.t === 'list') {
          if (!Array.isArray(g.items) || !g.items.length) err(at, 'graphic(list) に items がない');
        } else if (g.t === 'kv') {
          if (!Array.isArray(g.pairs) || !g.pairs.length) err(at, 'graphic(kv) に pairs がない');
          else if (g.pairs.some(p => !Array.isArray(p) || p.length !== 2))
            err(at, 'graphic(kv) の pairs に [key, value] の対になっていない要素がある');
        } else if (g.t && !['table', 'list', 'kv'].includes(g.t) && !g.text) {
          warn(at, `graphic.t が未知の型 "${g.t}"（table/list/kv 以外で text も無い — render.js のフォールバック表示になる）`);
        }
      }
    }

    /* ── kind 別の構造チェック ── */
    if (u.kind === 'p1') {
      if (u.questions.length !== 1) err(at, `Part1 ユニットの設問数が ${u.questions.length}（1 のはず）`);

      /* Part1 は scene（SVG 場面 ID）方式と desc（英語の場面描写テキスト）方式の
         どちらか一方だけを持つ（quiz.js の renderP1 は u.scene があれば SVG、
         なければ desc をテキスト表示する二者択一の実装）。 */
      const hasScene = u.scene != null && u.scene !== '';
      const hasDesc  = u.desc  != null;   // 空文字は「持っている」扱いにして、下で個別に空文字エラーを出す
      if (hasScene && hasDesc) err(at, 'scene と desc の両方を持っている（どちらか一方のはず）');
      else if (!hasScene && !hasDesc) err(at, 'scene も desc もない');
      else if (hasScene) {
        if (!SCENE_IDS.has(u.scene)) err(at, `scene "${u.scene}" が scenes.js に存在しない`);
      } else {
        if (typeof u.desc !== 'string' || !u.desc.trim()) err(at, 'desc が空文字');
        else {
          const wc = u.desc.trim().split(/\s+/).length;
          if (wc < 15 || wc > 40) warn(at, `desc の語数が ${wc} 語（目安 15–40 語から外れている）`);
        }
      }
      if (u.speaker && !ROLES.has(u.speaker)) err(at, `speaker "${u.speaker}" が話者ロールの規約外`);
    }

    if (u.kind === 'p2') {
      if (u.questions.length !== 1) err(at, `Part2 ユニットの設問数が ${u.questions.length}（1 のはず）`);
      const q0 = u.questions[0];
      if (!q0?.prompt) err(at, 'prompt（問いかけ）がない');
      if (q0?.speakerA && !ROLES.has(q0.speakerA)) err(at, `speakerA "${q0.speakerA}" が話者ロールの規約外`);
      if (q0?.speakerB && !ROLES.has(q0.speakerB)) err(at, `speakerB "${q0.speakerB}" が話者ロールの規約外`);
    }

    let scriptTextNorm = null;   // 意図問題の逐語引用照合に使う（下の設問ループで参照）
    if (u.kind === 'set') {
      if (!Array.isArray(u.script) || !u.script.length) err(at, 'script がない');
      else {
        u.script.forEach((line, i) => {
          if (!line.role || !line.text) err(at, `script[${i}] に role/text がない`);
          else if (!ROLES.has(line.role)) err(at, `script[${i}] の role "${line.role}" が話者ロールの規約外`);
        });
        scriptTextNorm = normalizeForQuoteMatch(u.script.map(l => l.text || '').join(' '));
      }
      if (u.questions.length !== 3) warn(at, `セットの設問数が ${u.questions.length}（通常 3）`);
      if (!u.ja) warn(at, '全体訳（ja）がない');
    }

    if (u.kind === 'doc') {
      if (!Array.isArray(u.docs) || !u.docs.length) err(at, 'docs がない');
      else {
        const text = JSON.stringify(u.docs);

        /* Part6 の空所 {{1}}〜{{n}} が設問数と連番で一致するか */
        if (u.part === 6) {
          const marks = [...text.matchAll(/\{\{(\d+)\}\}/g)].map(m => Number(m[1])).sort((a, b) => a - b);
          const want = u.questions.map((_, i) => i + 1);
          if (JSON.stringify(marks) !== JSON.stringify(want))
            err(at, `Part6 の空所番号 [${marks.join(',')}] が設問数 ${u.questions.length} と不一致`);

          /* {{n}} の直前が文頭相当かどうかで、対応する設問の選択肢の大文字・小文字を検査する */
          const blanks = [];
          collectBraceBlanks(u.docs, blanks);
          for (const b of blanks) {
            const q = u.questions[b.n - 1];
            if (!q) continue;
            const qat = `${key} / ${q.id ?? `(${at} 設問${b.n})`}`;
            checkBlankCase(qat, q.choices, isSentenceStartBefore(b.text, b.index));
          }
        }

        /* Part7 の文挿入（insertAt / sentence / [[n]]） */
        const insertQs = u.questions.filter(q => q.insertAt != null);
        if (insertQs.length) {
          const marks = new Set([...text.matchAll(/\[\[(\d)\]\]/g)].map(m => Number(m[1])));
          for (const q of insertQs) {
            const qat = `${key} / ${q.id}`;
            if (!marks.has(q.insertAt)) err(qat, `insertAt(${q.insertAt}) に対応する [[${q.insertAt}]] が本文にない`);
            if (!q.sentence) err(qat, 'insertAt はあるが sentence（挿入文）がない');
            if (Array.isArray(q.choices) && Number.isInteger(q.answer) &&
                q.choices[q.answer] !== `[${q.insertAt}]`)
              err(qat, `正解選択肢 "${q.choices[q.answer]}" が insertAt(${q.insertAt}) と対応しない`);
          }
        }

        if (u.docCount != null && u.docCount !== u.docs.length)
          err(at, `docCount(${u.docCount}) と docs 数(${u.docs.length}) が不一致`);
      }
    }

    if (u.kind === 'single' && u.part === 5) {
      const stem = u.questions[0]?.stem || '';
      const blanks = [...stem.matchAll(/-{3,}/g)];
      if (blanks.length === 0) err(at, 'Part5 の stem に空所 "-------" がない');
      else if (blanks.length > 1) err(at, `Part5 の stem に空所マーカーが ${blanks.length} 個ある（ちょうど 1 個であるべき）`);
      else {
        const qat = `${key} / ${u.questions[0]?.id ?? '(id なし)'}`;
        checkBlankCase(qat, u.questions[0]?.choices, isSentenceStartBefore(stem, blanks[0].index));
      }
    }

    /* ── 設問単位 ─────────────────────────────────────── */
    for (const q of u.questions) {
      questionCount++;
      const qat = `${key} / ${q.id ?? '(id なし)'}`;

      /* ── Part3/4 意図問題: stem の逐語引用が script と一致するか ── */
      if (u.kind === 'set') checkIntentQuote(qat, q.stem, scriptTextNorm);

      if (!q.id) err(at, '設問に id がない');
      else if (seenQuestionIds.has(q.id)) err(qat, `設問 id が重複（先出: ${seenQuestionIds.get(q.id)}）`);
      else seenQuestionIds.set(q.id, key);

      const nWant = u.part === 2 ? 3 : 4;
      const nActual = Array.isArray(q.choices) ? q.choices.length : null;
      if (nActual == null || nActual !== nWant) err(qat, `選択肢が ${nActual ?? 0} 個（${nWant} 個であるべき）`);
      else if (new Set(q.choices).size !== q.choices.length) err(qat, '選択肢に同一のものが2つ以上ある');

      const effectiveN = nActual ?? nWant;
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= effectiveN)
        err(qat, `answer が範囲外 (${q.answer})。0 始まりで 0–${effectiveN - 1} のはず`);

      if (q.why == null) warn(qat, 'why がない');
      else if (q.why.length !== effectiveN) err(qat, `why が ${q.why.length} 個（選択肢 ${effectiveN} 個と不一致）`);
      else {
        /* why[answer] だけが「正解」で始まるはず。順序がずれる（選択肢と解説が1つずれる）と
           致命的なので、answer の位置だけ厳密に検査する。 */
        if (Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.why.length) {
          q.why.forEach((w, idx) => {
            if (typeof w !== 'string') return;
            const startsCorrect = /^正解/.test(w.trim());
            if (idx === q.answer && !startsCorrect)
              err(qat, `why[${idx}]（正解選択肢 (${KEYS[idx]}) の解説）が「正解」で始まっていない — 順序ずれの疑い`);
            if (idx !== q.answer && startsCorrect)
              err(qat, `why[${idx}]（(${KEYS[idx]}) は不正解のはず）が「正解」で始まっている — 順序ずれの疑い`);
          });
        }
        /* why の要素が「同上」等で隣の要素を参照していると、balance2.mjs が
           選択肢と why を対で入れ替えたときに文意が壊れる。 */
        q.why.forEach((w, idx) => {
          if (typeof w === 'string' && ADJ_REF_RE.test(w))
            warn(qat, `why[${idx}]（(${KEYS[idx]})）が隣接する要素を参照する書き方になっている（balance2 の入れ替えで壊れる恐れ）: "${w}"`);
        });
      }

      if (!q.exp) warn(qat, 'exp がない');
      // ja は kind によって置き場所が違う（p1/p2/single は設問単位、set は u.ja、doc は仕様上そもそも持たない）
      if (['p1', 'p2', 'single'].includes(u.kind) && !q.ja) warn(qat, 'ja（訳）がない');

      /* ── 論点 ID（設問単位） ── */
      const qTopics = q.topics?.length ? q.topics : null;
      for (const tp of (qTopics || [])) {
        if (!TOPIC_IDS.has(tp)) err(qat, `未知の論点 ID "${tp}"（設問 topics）`);
      }
      const effectiveTopics = qTopics || u.topics || [];
      if (!effectiveTopics.length) warn(qat, '論点タグがどこにもない（unit/question とも空）');

      /* ── 解説中の「断定」が answer と矛盾していないか ──
         「正解は (C)」「(C) が正解」のように断定している文だけを対象にする。
         why 配列は不正解の選択肢を (A) 等で名指しして説明することが普通にあるため、
         単純に文中の (A)〜(D) をすべて拾うと誤検知だらけになる。            */
      if (Number.isInteger(q.answer) && q.answer >= 0 && q.answer < KEYS.length) {
        const correctLetter = KEYS[q.answer];
        const texts = [q.exp, ...(Array.isArray(q.why) ? q.why : [])].filter(s => typeof s === 'string');
        for (const s of texts) {
          const claims = [
            ...s.matchAll(/正解は\s*\(([A-D])\)/g),
            ...s.matchAll(/\(([A-D])\)\s*が正解/g),
          ].map(m => m[1]);
          for (const letter of claims) {
            if (letter !== correctLetter)
              err(qat, `解説が「(${letter}) が正解」と断定しているが、実際の answer は (${correctLetter})`);
          }
        }
        // p1 / p2 の ja は「正解の英文だけ」を (X) 付きで訳す慣例（実データを確認して確定）。
        if ((u.kind === 'p1' || u.kind === 'p2') && typeof q.ja === 'string') {
          const refs = [...new Set([...q.ja.matchAll(/\(([A-D])\)/g)].map(m => m[1]))];
          if (refs.length === 1 && refs[0] !== correctLetter)
            err(qat, `ja が (${refs[0]}) を訳しているが、実際の answer は (${correctLetter})`);
        }
        /* ja が配列の場合（Part1 で全選択肢の訳を持たせる形式）は、選択肢と同順・同数で、
           各要素が対応する記号 (A)〜(D) で始まっているかを見る。ズレは順序ずれの疑い。 */
        else if (Array.isArray(q.ja)) {
          if (q.ja.length !== effectiveN)
            err(qat, `ja（配列）が ${q.ja.length} 個（選択肢 ${effectiveN} 個と不一致）`);
          else {
            q.ja.forEach((j, idx) => {
              if (typeof j !== 'string' || !j.trim())
                err(qat, `ja[${idx}] が空、または文字列でない`);
              else if (!j.trim().startsWith(`(${KEYS[idx]})`))
                err(qat, `ja[${idx}] が (${KEYS[idx]}) で始まっていない — 選択肢の順序とズレている疑い: "${j}"`);
            });
          }
        }
      }

      /* ── 正解位置の分布集計（模試はパート単位、ドリルは論点単位） ── */
      if (Number.isInteger(q.answer) && q.answer >= 0 && q.answer < nWant) {
        const letter = KEYS[q.answer];
        if (mock) {
          if (!mockDist.has(t.mockId)) mockDist.set(t.mockId, {});
          const byPart = mockDist.get(t.mockId);
          byPart[u.part] = byPart[u.part] || {};
          byPart[u.part][letter] = (byPart[u.part][letter] || 0) + 1;

          /* 循環（周期性）・連続チェック用に no と正解位置の対だけ集めておく（並び替えは後段でまとめて行う） */
          if (Number.isInteger(q.no)) {
            if (!mockSeq.has(t.mockId)) mockSeq.set(t.mockId, {});
            const seqByPart = mockSeq.get(t.mockId);
            seqByPart[u.part] = seqByPart[u.part] || [];
            seqByPart[u.part].push({ no: q.no, answerIdx: q.answer });
          }
        } else {
          for (const tp of effectiveTopics) {
            if (!drillDist.has(tp)) drillDist.set(tp, {});
            const d = drillDist.get(tp);
            d[letter] = (d[letter] || 0) + 1;
            if (!drillDistN.has(tp)) drillDistN.set(tp, new Set());
            drillDistN.get(tp).add(nWant);
          }
        }

        /* --extra ファイル用の循環（周期性）・連続チェックの収集。
           registry.js に未登録のため MOCK_META 由来の mockId を持たず、下の
           「模試のみ」検査が素通りしてしまう穴を塞ぐ（no を持つユニット群を
           1つの模試とみなす）。no が無い（＝模試の分割ファイルでない）
           --extra ファイルはここで何も集まらず、検査もスキップされる。 */
        if (t.extra && Number.isInteger(q.no)) {
          if (!extraSeq.has(t.key)) extraSeq.set(t.key, {});
          const seqByPart = extraSeq.get(t.key);
          seqByPart[u.part] = seqByPart[u.part] || [];
          seqByPart[u.part].push({ no: q.no, answerIdx: q.answer });
        }
      }

      /* ── 模試の通し番号 no ── */
      if (mock) {
        if (!Number.isInteger(q.no)) err(qat, '模試の設問に no（通し番号）がない');
        else {
          nos.push(q.no);
          const range = NO_RANGE[u.part];
          if (range && (q.no < range[0] || q.no > range[1]))
            err(qat, `no=${q.no} が Part${u.part} の想定範囲 ${range[0]}–${range[1]} の外`);
        }
      }

      PART_LIST.includes(u.part) && (localPart[u.part] = (localPart[u.part] || 0) + 1);
    }

    /* ── 正解位置：文書・セット単位の記号の使い切り（検査E用の収集） ──
       Part6 の1ユニット＝1文書＝4問、Part3/4 の1ユニット＝1セット＝3問
       （p6()/set() ヘルパーの実装で確認済み。ユニット内の設問は既に no 昇順）。
       ユニットの設問数が想定どおりで、no・answer がすべて揃っているときだけ集計する。
       模試・--extra のみ対象（ドリルは no を持たないため every() の no チェックで自然に除外される）。 */
    {
      const isP6Doc = u.kind === 'doc' && u.part === 6;
      const isP34Set = u.kind === 'set' && (u.part === 3 || u.part === 4);
      if ((mock || t.extra) && (isP6Doc || isP34Set)) {
        const size = isP6Doc ? 4 : 3;
        if (u.questions.length === size &&
            u.questions.every(qq => Number.isInteger(qq.no) && Number.isInteger(qq.answer) && qq.answer >= 0 && qq.answer < 4)) {
          const letters = u.questions.map(qq => KEYS[qq.answer]);
          const allUnique = new Set(letters).size === size;
          const dest = mock ? mockGroups : extraGroups;
          const gKey = mock ? t.mockId : t.key;
          if (!dest.has(gKey)) dest.set(gKey, {});
          const g = dest.get(gKey);
          g[u.part] = g[u.part] || [];
          g[u.part].push(allUnique);
        }
      }
    }
  }

  targetStats.set(key, { units: unitCount, questions: questionCount });

  /* ── 模試 1 回分：パート別問題数と no の連番 ── */
  if (mock) {
    for (const p of PART_LIST) {
      const got = localPart[p] || 0;
      if (got !== PART_SIZE[p]) err(key, `Part${p} が ${got} 問（本番は ${PART_SIZE[p]} 問のはず）`);
    }
    const sorted = [...nos].sort((a, b) => a - b);
    const want = Array.from({ length: 200 }, (_, i) => i + 1);
    if (JSON.stringify(sorted) !== JSON.stringify(want)) {
      const missing = want.filter(n => !nos.includes(n));
      const seen = new Set(), dup = new Set();
      for (const n of nos) { if (seen.has(n)) dup.add(n); seen.add(n); }
      err(key, `no が 1–200 の連番でない（欠番: ${missing.slice(0, 10).join(',') || 'なし'} / 重複: ${[...dup].slice(0, 10).join(',') || 'なし'}）`);
    }
  }
}

/* ── doc（Part6/7）ユニットに全体訳が存在しない件は、個々の警告ではなく
   仕様（CLAUDE.md の「ja（訳）」記述）とのズレとして 1 件にまとめて記録する。 */
{
  let docTotal = 0, docNoJa = 0;
  for (const t of targets) for (const u of t.units || []) {
    if (u.kind === 'doc') { docTotal++; if (!u.ja) docNoJa++; }
  }
  if (docTotal && docNoJa === docTotal)
    note('assets/data', `doc（Part6/7）ユニット ${docTotal} 件はすべて全体訳（ja）を持たない設計。CLAUDE.md の「ja（訳）」の記述とはズレがあるが、実データは一貫しているため個別警告にはしていない（要方針確認）`);
  else if (docNoJa > 0)
    warn('assets/data', `doc（Part6/7）ユニットのうち ${docNoJa}/${docTotal} 件が全体訳（ja）を欠く（一貫していない）`);
}

/* ── 正解位置の偏り（あれば有用な追加チェック・WARN 扱い） ──
   母数が小さいうちは判定しない。数値・日付など順序に意味がある選択肢の
   並べ替え不可なケースは自動判別できないため、ここでの WARN は
   「要目視確認」の一覧であり、機械的に間違いとは断定しない。      */
for (const meta of MOCK_META) {
  const byPart = mockDist.get(meta.id);
  if (!byPart) continue;
  for (const p of PART_LIST) {
    const c = byPart[p]; if (!c) continue;
    const letters = p === 2 ? ['A', 'B', 'C'] : KEYS;
    const counts = letters.map(l => c[l] || 0);
    const total = counts.reduce((a, b) => a + b, 0);
    if (total < letters.length * 2) continue;
    if (counts.some(n => n === 0))
      warn(`mocks/${meta.id}.js`, `Part${p} の正解位置に 0 回の選択肢がある（${letters.map((l, i) => `${l}=${counts[i]}`).join(' ')}）`);
    else if (Math.max(...counts) / total > 0.5)
      warn(`mocks/${meta.id}.js`, `Part${p} の正解位置に偏りがある（${letters.map((l, i) => `${l}=${counts[i]}`).join(' ')}）`);
  }
}

/* ── 正解位置の循環（周期性）・連続（模試のみ・ERROR/WARN） ──
   件数の平準化だけでは「ABCDABCD…」のような周期的な並びや、同じ記号が
   何問も続く並びを検出できない（本文を読まなくても正解が当てられてしまう）。
   パート内で no 昇順に並べたうえで、次の4つを見る:
     A. 循環（+1）— 隣り合う設問間で「次の正解位置が +1（mod k）」になっている割合。
        Part2 は3択なので mod 3、それ以外は4択なので mod 4。
        偶然の水準はそれぞれ約33%・約25%なので、60%以上を機械的な生成パターンの
        疑いとして ERROR にする（実測: vol6-r1 の旧版は100%だった）。
     B. 同一位置の連続 — 同じ正解位置が6問以上続いたら WARN。
     C. 循環（-1・降順）— A の逆方向。「次の正解位置が -1（mod k）」になっている割合。
        A は +1 の連続しか見ておらず、D→C→B→A→D のような降順の循環を素通りさせていた
        （実測: 予想模試 Vol.6 の Part5 で52%、他5巻は10〜41%。1問確信できれば次が読めてしまう）。
        A と同じ閾値（60%以上）で ERROR。A・C は独立に判定し、|+1|と|-1|を合算しない
        （合算すると「毎回同じ位置」のような無関係なパターンまで拾ってしまう）。
     A・C 共通の下限：パートの設問数が10問未満なら判定しない。
        Part1（6問・5組）で確認したところ、ちょうど3/5組が一致するだけで60%に達し、
        vol1・vol2・vol6 の3巻が「降順循環」として誤検知された。5組は母数として小さすぎ、
        統計的に有意でない（実際 vol1・vol2 は Part1 に問題ありと報告されていない巻）。
        Part1 は本番でも6問しかなく構造的に常に対象外になるため、この下限は実質
        Part1 だけを除外する（Part6 の16問は対象内、他は全パート30問以上で影響なし）。
     D. 隣接同一率が低すぎる — 「前問と同じ正解位置」の割合。偶然の水準は4択で25%・3択で33%。
        極端に低い（＝同じ記号を意図的に避け続けている）のも、B とは別の意味で機械的な生成
        パターンの徴候になる。4択パートに限り 12%未満なら WARN。設問数が20問未満のパートは
        判定が不安定なのでとばす（Part1・Part6 はこれで自然に対象外になる）。
   graphic・p7ins のように選択肢が順序を持つ設問も、受験者から見れば同じ並びで
   目に入るため、ここでは除外しない（balance2.mjs の入れ替え対象外とは別の話）。 */
for (const meta of MOCK_META) {
  const byPart = mockSeq.get(meta.id);
  if (!byPart) continue;
  for (const p of PART_LIST) {
    const seq = byPart[p];
    if (!seq || seq.length < 2) continue;
    const sorted = [...seq].sort((a, b) => a.no - b.no);
    const k = p === 2 ? 3 : 4;
    const letters = p === 2 ? ['A', 'B', 'C'] : KEYS;

    let shiftHits = 0, shiftHitsDown = 0, sameHits = 0, pairs = 0;
    for (let i = 1; i < sorted.length; i++) {
      pairs++;
      if (sorted[i].answerIdx === (sorted[i - 1].answerIdx + 1) % k) shiftHits++;
      if (sorted[i].answerIdx === (sorted[i - 1].answerIdx - 1 + k) % k) shiftHitsDown++;
      if (sorted[i].answerIdx === sorted[i - 1].answerIdx) sameHits++;
    }
    /* A・C とも、パートの設問数が10問未満なら判定しない（Part1=6問・5組で3/5一致＝60%に
       達してしまい、母数不足で誤検知するため。上のコメント参照）。 */
    const ratio = pairs ? shiftHits / pairs : 0;
    if (sorted.length >= 10 && ratio >= 0.6) {
      err(`mocks/${meta.id}.js`,
        `Part${p} の正解位置が周期的にずれている疑い（no昇順で「次の設問の正解が+1シフト」する割合が ${(ratio * 100).toFixed(0)}%／` +
        `${pairs}組中${shiftHits}組、mod ${k}。本文を読まずに正解できてしまう）`);
    }

    /* 検査C：降順の循環（-1 mod k）。A（+1）と同じ閾値・下限・独立判定。 */
    const ratioDown = pairs ? shiftHitsDown / pairs : 0;
    if (sorted.length >= 10 && ratioDown >= 0.6) {
      err(`mocks/${meta.id}.js`,
        `Part${p} の正解位置が降順に周期的にずれている疑い（no昇順で「次の設問の正解が-1シフト」する割合が ${(ratioDown * 100).toFixed(0)}%／` +
        `${pairs}組中${shiftHitsDown}組、mod ${k}。1問確信できれば次が読めてしまう）`);
    }

    let runLetter = null, runLen = 0, runStartNo = null;
    let maxLen = 0, maxLetter = null, maxStartNo = null;
    for (const item of sorted) {
      if (item.answerIdx === runLetter) { runLen++; }
      else { runLetter = item.answerIdx; runLen = 1; runStartNo = item.no; }
      if (runLen > maxLen) { maxLen = runLen; maxLetter = runLetter; maxStartNo = runStartNo; }
    }
    if (maxLen >= 6) {
      warn(`mocks/${meta.id}.js`,
        `Part${p} の正解位置が同一選択肢(${letters[maxLetter]})で ${maxLen} 問連続している（no=${maxStartNo} から、no昇順）`);
    }

    /* 検査D：隣接同一率が低すぎる（4択パート・20問以上のみ判定）。 */
    if (k === 4 && sorted.length >= 20) {
      const sameRatio = pairs ? sameHits / pairs : 0;
      if (sameRatio < 0.12) {
        warn(`mocks/${meta.id}.js`,
          `Part${p} の正解位置が「前問と同じ」を避けすぎている疑い（no昇順で隣接一致率 ${(sameRatio * 100).toFixed(0)}%／` +
          `${pairs}組中${sameHits}組。偶然なら約25%。同じ記号を意図的に避ける生成パターンの疑い）`);
      }
    }
  }
}

/* ── 正解位置の循環（周期性）・連続（--extra・ERROR/WARN） ──
   上のチェックは MOCK_META に登録済み（mockId を持つ）模試にしか効かない。
   予想模試を新規に作る作業は registry.js に登録される前、常に --extra で
   検査されるため、そのままだと「作業中は一度もこの検査を受けない」
   穴になる。--extra で渡されたファイルのうち no を持つユニット群を
   1つの模試相当とみなし、同じ判定をかける（A〜D、内容は上のブロックの
   コメントを参照）。
   パート判定は既存と同じくユニットの part を使い、Part2 は3択なので mod 3、
   それ以外は4択なので mod 4。1パートに設問が8問未満しかない場合は
   判定が不安定（--extra は模試の分割ファイル1本だけを渡すことが多く、
   パートが欠けていることが多い）なので検査をとばす。
   A・C（循環）はさらに、母数10問未満だと5組前後でも60%に達してしまい誤検知するため
   10問以上を要求する（上のブロックのコメント参照）。D はさらに20問以上を要求する。 */
for (const [key, byPart] of extraSeq) {
  for (const p of PART_LIST) {
    const seq = byPart[p];
    if (!seq || seq.length < 8) continue;
    const sorted = [...seq].sort((a, b) => a.no - b.no);
    const k = p === 2 ? 3 : 4;
    const letters = p === 2 ? ['A', 'B', 'C'] : KEYS;

    let shiftHits = 0, shiftHitsDown = 0, sameHits = 0, pairs = 0;
    for (let i = 1; i < sorted.length; i++) {
      pairs++;
      if (sorted[i].answerIdx === (sorted[i - 1].answerIdx + 1) % k) shiftHits++;
      if (sorted[i].answerIdx === (sorted[i - 1].answerIdx - 1 + k) % k) shiftHitsDown++;
      if (sorted[i].answerIdx === sorted[i - 1].answerIdx) sameHits++;
    }
    const ratio = pairs ? shiftHits / pairs : 0;
    if (sorted.length >= 10 && ratio >= 0.6) {
      err(key,
        `Part${p} の正解位置が周期的にずれている疑い（no昇順で「次の設問の正解が+1シフト」する割合が ${(ratio * 100).toFixed(0)}%／` +
        `${pairs}組中${shiftHits}組、mod ${k}。本文を読まずに正解できてしまう）`);
    }

    /* 検査C：降順の循環（-1 mod k）。10問未満は判定しない。 */
    const ratioDown = pairs ? shiftHitsDown / pairs : 0;
    if (sorted.length >= 10 && ratioDown >= 0.6) {
      err(key,
        `Part${p} の正解位置が降順に周期的にずれている疑い（no昇順で「次の設問の正解が-1シフト」する割合が ${(ratioDown * 100).toFixed(0)}%／` +
        `${pairs}組中${shiftHitsDown}組、mod ${k}。1問確信できれば次が読めてしまう）`);
    }

    let runLetter = null, runLen = 0, runStartNo = null;
    let maxLen = 0, maxLetter = null, maxStartNo = null;
    for (const item of sorted) {
      if (item.answerIdx === runLetter) { runLen++; }
      else { runLetter = item.answerIdx; runLen = 1; runStartNo = item.no; }
      if (runLen > maxLen) { maxLen = runLen; maxLetter = runLetter; maxStartNo = runStartNo; }
    }
    if (maxLen >= 6) {
      warn(key,
        `Part${p} の正解位置が同一選択肢(${letters[maxLetter]})で ${maxLen} 問連続している（no=${maxStartNo} から、no昇順）`);
    }

    /* 検査D：隣接同一率が低すぎる（4択パート・20問以上のみ判定）。 */
    if (k === 4 && sorted.length >= 20) {
      const sameRatio = pairs ? sameHits / pairs : 0;
      if (sameRatio < 0.12) {
        warn(key,
          `Part${p} の正解位置が「前問と同じ」を避けすぎている疑い（no昇順で隣接一致率 ${(sameRatio * 100).toFixed(0)}%／` +
          `${pairs}組中${sameHits}組。偶然なら約25%。同じ記号を意図的に避ける生成パターンの疑い）`);
      }
    }
  }
}

/* ── 正解位置：文書・セット単位の記号の使い切り（検査E・模試/--extra・WARN） ──
   Part6 は1文書(4問)でA/B/C/Dが1回ずつ、Part3/4は1セット(3問)で正解が全部別文字、
   という並びは「奇麗すぎる」規則性で、3問埋めれば最後の1問が消去法でわかってしまう
   （実測: 予想模試Vol.6 で Part6 が4文書中4文書、Part3/4 が23セット中19セット。
   偶然ならそれぞれ約9.4%・約8.6セット）。
   母数が小さいと判定が不安定なので、グループ（文書/セット）が4未満のパートはとばす。 */
function checkGroupUniformity(key, byPart) {
  for (const p of [3, 4, 6]) {
    const groups = byPart[p];
    if (!groups || groups.length < 4) continue;
    const uniformCount = groups.filter(Boolean).length;
    const ratio = uniformCount / groups.length;
    const threshold = p === 6 ? 0.75 : 0.70;
    if (ratio >= threshold) {
      const unit = p === 6 ? '文書（4問）' : 'セット（3問）';
      warn(key,
        `Part${p} の正解位置が1${unit}ごとにA〜Dを1回ずつ使い切っている疑い（${groups.length}${p === 6 ? '文書' : 'セット'}中${uniformCount}件／` +
        `${(ratio * 100).toFixed(0)}%、閾値${(threshold * 100).toFixed(0)}%。3問埋めれば最後の1問が消去法でわかってしまう）`);
    }
  }
}
for (const meta of MOCK_META) {
  const byPart = mockGroups.get(meta.id);
  if (byPart) checkGroupUniformity(`mocks/${meta.id}.js`, byPart);
}
for (const [key, byPart] of extraGroups) checkGroupUniformity(key, byPart);

for (const [tp, c] of drillDist) {
  // Part2 論点（p2ind/p2wh）は選択肢が3つ（A/B/C）しかなく、D は最初から存在しない。
  // ここで KEYS（4文字）固定で判定すると D=0 が恒久的に「偏り」と誤検知されるため、
  // その論点に実際に何択の設問しかないかで比較対象の文字集合を切り替える
  // （模試側のパート別集計は元から Part2 を3文字扱いにしている。ここも合わせる）。
  const nSet = drillDistN.get(tp);
  const letters = (nSet && nSet.size === 1 && nSet.has(3)) ? ['A', 'B', 'C'] : KEYS;
  const counts = letters.map(l => c[l] || 0);
  const total = counts.reduce((a, b) => a + b, 0);
  if (total < letters.length * 2) continue;
  if (counts.some(n => n === 0))
    warn(`drills（論点:${tp}）`, `正解位置に 0 回の選択肢がある（${letters.map((l, i) => `${l}=${counts[i]}`).join(' ')}）`);
}

/* ══ 出力 ════════════════════════════════════════════════ */
const matched = filterArg ? issues.filter(i => hit(i.key)) : issues;
const errorList = matched.filter(i => i.level === 'ERROR');
const warnList  = matched.filter(i => i.level === 'WARN');
const noteList  = matched.filter(i => i.level === 'NOTE');

console.log('問題データ — 整合性チェック' + (filterArg ? `（絞り込み: "${filterArg}"）` : ''));
console.log(`検査対象: 模試 ${MOCK_META.length} 回 / ドリル ${DRILL_FILES.length} ファイル${extraArgs.length ? ` / --extra ${extraArgs.length} ファイル` : ''}\n`);

if (filterArg && !targets.some(t => hit(t.key))) {
  console.log(`※ "${filterArg}" にマッチする対象ファイルがありません（横断チェックの結果のみ表示します）\n`);
}

for (const i of errorList) console.log(`ERROR ${i.key}: ${i.msg}`);
for (const i of warnList)  console.log(`WARN  ${i.key}: ${i.msg}`);
for (const i of noteList)  console.log(`NOTE  ${i.key}: ${i.msg}`);

/* ── 正解位置の分布（模試はパート単位、ドリルは論点単位） ── */
if (!filterArg || /vol|mock/i.test(filterArg)) {
  console.log('\n── 正解位置の分布：模試（パート単位）──');
  for (const meta of MOCK_META) {
    if (filterArg && !hit(`mocks/${meta.id}.js`)) continue;
    const byPart = mockDist.get(meta.id);
    if (!byPart) continue;
    console.log(`  ${meta.id}:`);
    for (const p of PART_LIST) {
      const c = byPart[p]; if (!c) continue;
      const letters = p === 2 ? ['A', 'B', 'C'] : KEYS;
      console.log(`    Part${p}: ${letters.map(l => `${l}=${c[l] || 0}`).join(' ')}`);
    }
  }
}
if (!filterArg || /drill/i.test(filterArg)) {
  console.log('\n── 正解位置の分布：ドリル（論点単位） ──');
  for (const [tp, c] of [...drillDist.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const nSet = drillDistN.get(tp);
    const letters = (nSet && nSet.size === 1 && nSet.has(3)) ? ['A', 'B', 'C'] : KEYS;
    console.log(`  ${tp.padEnd(10)} ${letters.map(l => `${l}=${c[l] || 0}`).join(' ')}`);
  }
}

/* ── 総計 ─────────────────────────────────────────────── */
const scopeTargets = filterArg ? targets.filter(t => hit(t.key)) : targets;
const scopeQuestions = scopeTargets.reduce((a, t) => a + (targetStats.get(t.key)?.questions || 0), 0);
const scopeUnits = scopeTargets.reduce((a, t) => a + (targetStats.get(t.key)?.units || 0), 0);

console.log(`\nエラー ${errorList.length}件 / 警告 ${warnList.length}件 / 総問題数 ${scopeQuestions}問 / ユニット ${scopeUnits}件`);

if (errorList.length) process.exitCode = 1;
