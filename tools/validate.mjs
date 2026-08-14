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
    targets.push({ key, mock: false, units: mod.UNITS });
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

    if (u.kind === 'set') {
      if (!Array.isArray(u.script) || !u.script.length) err(at, 'script がない');
      else u.script.forEach((line, i) => {
        if (!line.role || !line.text) err(at, `script[${i}] に role/text がない`);
        else if (!ROLES.has(line.role)) err(at, `script[${i}] の role "${line.role}" が話者ロールの規約外`);
      });
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
      }

      /* ── 正解位置の分布集計（模試はパート単位、ドリルは論点単位） ── */
      if (Number.isInteger(q.answer) && q.answer >= 0 && q.answer < nWant) {
        const letter = KEYS[q.answer];
        if (mock) {
          if (!mockDist.has(t.mockId)) mockDist.set(t.mockId, {});
          const byPart = mockDist.get(t.mockId);
          byPart[u.part] = byPart[u.part] || {};
          byPart[u.part][letter] = (byPart[u.part][letter] || 0) + 1;
        } else {
          for (const tp of effectiveTopics) {
            if (!drillDist.has(tp)) drillDist.set(tp, {});
            const d = drillDist.get(tp);
            d[letter] = (d[letter] || 0) + 1;
            if (!drillDistN.has(tp)) drillDistN.set(tp, new Set());
            drillDistN.get(tp).add(nWant);
          }
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
