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
     ・正解位置の規則性 A〜F（循環・連続・使い切り・前後半ドリフト）と、
       選択肢の語数から正解が漏れていないか（検査G。最長/最短の選択肢を
       選ぶだけの的中率が偶然から統計的に外れていないかを見る）、
       選択肢の『形』から正解が浮いていないか（検査H。4本のうちちょうど1本だけ
       複合(and/or)や先頭語が他と違う形をしている設問で、その1本が正解になる
       率が偶然から統計的に外れていないかを見る）、選択肢のうち受動態(be+過去
       分詞)を含む本数 k が偶然(k/選択肢数)から外れて正解位置と相関していないか
       （検査I）、選択肢のうち定形（that節・主節の述語になれる形。原形も含む）を
       含む本数 k が偶然(k/選択肢数)から外れて正解位置と相関していないか（検査J。
       要求提案の that 節で誤答を全部非定形＝to V/V-ing/having V-en に差し替えた
       結果「定形がちょうど1本＝正解」になる事故に対応）。
       G・H・I・J は「1巻×1パート」「1ファイル×1パート」単位の判定に加え、
       「模試6巻を合算したパート別」「ドリル全ファイルを合算したパート別」の
       判定も行う（メッセージ先頭に `[合算]`。1巻・1ファイルあたりの該当数が
       少なすぎて個別には有意にならない漏れを、合算して初めて捕まえるため。
       --extra のファイルはこの合算には混ぜない）。検査Jはこれに加えて
       「模試+ドリル全体を合わせた合算」も見る（対象になる設問自体が全データで
       42問しかなく、模試側とドリル側を別々に合算すると実際の事故〈7問〉が
       どちらの母数〈8件以上〉にも届かず検出できないため）
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
const wordLenDist = new Map();            // t.key -> { part -> [{ wc:[...], answer, n }] } — 選択肢の語数と正解位置（検査G用）。
                                           // key は「模試なら1巻分（targets.push 時点で mocks/${id}.js に集約済み）、
                                           // ドリル・--extra なら1ファイル」に自然に一致するため、A〜Fのように
                                           // mock/extra を別マップに分ける必要がない（no による並び順にも依存しないため）。
const shapeDist = new Map();              // t.key -> { part -> [{ choices:[...], answer, n, label }] } — 選択肢の『形』
                                           // （複合 and/or・先頭語）と正解位置（検査H用）。粒度・理由は wordLenDist と同じ。
const finiteDist = new Map();             // t.key -> { part -> [{ choices:[...], answer, n, label }] } — 選択肢
                                           // （生データ）と正解位置（検査J用。定形/非定形への分類は checkFiniteJ
                                           // 側で classifyFiniteness() を呼んで行う）。粒度・理由は wordLenDist と
                                           // 同じだが、shapeDist と違い「全選択肢が2語以下」の除外はしない
                                           // （動詞の形を問う設問は1語の選択肢がほとんどのため）ので別マップにする。

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

      /* ── 検査G用の収集：選択肢の語数（空白区切り） ──
         文挿入問題（insertAt を持つ）は選択肢が "[1]"〜"[4]" で語数に意味が
         無いため対象外にする（既存の insertQs 判定 q.insertAt != null を再利用）。
         choices・answer の形が壊れている設問（上のエラーで既に報告済み）は
         集計に混ぜても意味がないので、ここでも自前で有効性を確認してから集める。 */
      if (q.insertAt == null && Array.isArray(q.choices) && q.choices.length >= 2 &&
          Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices.length) {
        const wc = q.choices.map(c =>
          typeof c === 'string' ? c.trim().split(/\s+/).filter(Boolean).length : 0);
        if (!wordLenDist.has(key)) wordLenDist.set(key, {});
        const byPartWc = wordLenDist.get(key);
        byPartWc[u.part] = byPartWc[u.part] || [];
        byPartWc[u.part].push({ wc, answer: q.answer, n: q.choices.length });

        /* ── 検査H用の収集：選択肢の『形』（複合 and/or・先頭語）と正解位置 ──
           検査Gと同じ絞り込みに加えて「全選択肢が2語以下」（金額・日付・ラベルの
           4択など、構造上いじれない選択肢）を除外する。CLAUDE.md の実測で
           終止符・読点・語数の3軸は偶然の範囲だったため、この2軸だけを集める。
           choices が全部文字列でない設問（他のエラーで既に報告済み）も除外する。 */
        if (q.choices.every(c => typeof c === 'string') && wc.some(w => w > 2)) {
          if (!shapeDist.has(key)) shapeDist.set(key, {});
          const byPartShape = shapeDist.get(key);
          byPartShape[u.part] = byPartShape[u.part] || [];
          byPartShape[u.part].push({
            choices: q.choices, answer: q.answer, n: q.choices.length,
            label: Number.isInteger(q.no) ? `no=${q.no}` : (q.id ?? '(id なし)'),
          });
        }

        /* ── 検査J用の収集：選択肢（生の文字列）と正解位置 ──
           検査G・Hと違い「全選択肢が2語以下」による除外はしない（動詞の形を問う
           設問は "submit" のように1語の選択肢がほとんどで、語数フィルタを掛けると
           まさに検出対象の設問が抜け落ちる）。分類（定形/非定形/判別不能/対象外）は
           ここでは行わず、選択肢の生データだけを溜めて checkFiniteJ 側で
           classifyFiniteness() を呼ぶ（検査H・Iの hasAndOr/leadWord/isPassive と
           同じ「収集は生データ、分類は判定関数側」という設計に合わせるため。
           classifyFiniteness は isPassive の IRREG 定義を再利用するので、
           isPassive より後ろに定義せざるを得ない事情もある）。 */
        if (q.choices.every(c => typeof c === 'string')) {
          if (!finiteDist.has(key)) finiteDist.set(key, {});
          const byPartFinite = finiteDist.get(key);
          byPartFinite[u.part] = byPartFinite[u.part] || [];
          byPartFinite[u.part].push({
            choices: q.choices, answer: q.answer, n: q.choices.length,
            label: Number.isInteger(q.no) ? `no=${q.no}` : (q.id ?? '(id なし)'),
          });
        }
      }

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
/* ── 正解位置の系統的な位置ドリフト（検査F・模試/--extra・WARN） ──
   A・C（循環）は「隣接ペアの規則性」しか見ないため、周期の長い・緩やかな
   ドリフト（多用した文字が前半から後半へ徐々に移っていく）は素通りする。
   実際に balance2.mjs の候補選択（balancePart / balanceByTopic）が
   Array.prototype.find 等で「ファイル内で最初に見つかった設問」を選ぶ実装に
   なっており、過剰な文字が前半から順に剥がされて末尾にだけ残り、補充された
   文字が前半に集まる——という前半・後半の系統的な偏りを生んでいた
   （2026-08-24 実測：vol3 Part3 で no昇順の前半平均2.37・後半平均0.47、差+1.89。
   件数は均等になるため balance2.mjs 自身の報告も検査A〜Eも素通りしていた）。

   no昇順に並べ、前半 floor(n/2) 問・後半 floor(n/2) 問（奇数なら中央の1問は
   前半・後半どちらにも入れず捨てる）の正解位置（A=0, B=1, …）の平均を取り、
   その差を「各半分がランダムに一様分布{0..k-1}から独立に選ばれた場合」の
   標準偏差で割った z スコアで評価する（分散 = (k^2-1)/12、差の分散は
   その2倍を半分の問題数で割ったもの。Part2は3択なのでk=3、他は4択でk=4）。
   |z| >= 2.0（両側 5% 水準の目安）を WARN にする。

   閾値の根拠（2026-08-24 実測）：健全な Vol.6 は判定対象になる全パートで
   |z| の最大が 0.82（Part4）。重症の Vol.3 は判定対象の全パート
   （Part2/3/4/5/6/7。Part1は下の下限で対象外）で |z| が 2.68〜5.22。
   0.82 と 2.68 の間に約3.3倍の開きがあり、2.0 はその間を取って
   両者をきれいに分離する。
   A・C と同じ理由で設問数10問未満（Part1の6問）は判定しない
   （n=6 では前半・後半が3問ずつしかなく統計的に不安定。実際
   n>=10 のもとで vol1〜5 の35区画中30区画が同符号のドリフトを示した）。
   ERROR ではなく WARN にする：A・C は「隣接ペアの60%以上が同じ規則」という
   ほぼ決定的な機械生成パターンを検出するのに対し、F は平均差の統計的な
   徴候であり、境界付近では偶然の変動と区別しにくいため。 */
function checkDriftF(key, p, sorted, k, letters) {
  const n = sorted.length;
  if (n < 10) return;
  const half = Math.floor(n / 2);
  const front = sorted.slice(0, half);
  const back = sorted.slice(n - half);
  const frontMean = front.reduce((a, e) => a + e.answerIdx, 0) / half;
  const backMean = back.reduce((a, e) => a + e.answerIdx, 0) / half;
  const diff = frontMean - backMean;
  const varUniform = (k * k - 1) / 12;
  const stdNull = Math.sqrt((2 * varUniform) / half);
  const z = stdNull > 0 ? diff / stdNull : 0;
  if (Math.abs(z) >= 2.0) {
    const clamp = (x) => Math.min(k - 1, Math.max(0, Math.round(x)));
    const frontHint = letters[clamp(frontMean)];
    const backHint = letters[clamp(backMean)];
    warn(key,
      `Part${p} の正解位置に前半・後半の系統的な偏りがある疑い（no昇順で前半平均${frontMean.toFixed(2)}` +
      `〈${frontHint}寄り〉・後半平均${backMean.toFixed(2)}〈${backHint}寄り〉、差${diff.toFixed(2)}、` +
      `z=${z.toFixed(2)}／目安|z|>=2.0でWARN。前半と後半で当てやすい記号が変わってしまっており、` +
      `本文を読まなくても前半/後半で狙う記号を変えれば当たりやすくなる恐れがある）`);
  }
}

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

    /* 検査F：前半・後半の系統的な位置ドリフト（上のコメント参照）。 */
    checkDriftF(`mocks/${meta.id}.js`, p, sorted, k, letters);
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

    /* 検査F：前半・後半の系統的な位置ドリフト（上のブロックのコメント参照）。 */
    checkDriftF(key, p, sorted, k, letters);
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

/* ── 検査G：選択肢の語数から正解が漏れていないか（模試・ドリル・--extra・WARN） ──
   CLAUDE.md「選択肢の『形』が正解を教えてしまう」節の実測（全1,200問で「一番長い
   選択肢を選ぶ」だけで35〜76%的中。偶然は4択25%・Part2の3択33%）を機械的に
   捕まえる検査。正解は根拠に忠実に丁寧に書き、誤答は短く済ませる書き癖が原因。

   単位は検査A〜Fと同じ「1つの巻×1つのパート」（模試）／「1ファイル×1つのパート」
   （ドリル・--extra）。wordLenDist は targets ループ中に t.key（模試は
   mocks/${id}.js に集約済み、ドリル・--extra はファイル単位）× u.part で
   自然にこの粒度になっている（A〜Fのように no の並び順に依存しないため、
   mock 用・extra 用にマップを分ける必要がない＝そのまま --extra にも効く）。

   各設問について、選択肢のうち語数が「最長」（複数選択肢が同語数で並んだら
   1/tie で按分）である選択肢を選んだときの的中率、「最短」についても同様に
   計算し、それぞれ偶然の値 p（4択0.25／Part2の3択1/3）からの乖離を
   z = (実測 - p) / sqrt(p*(1-p)/n) で正規化する（検査Fと同じ考え方。
   3択と4択を同じ閾値で扱うため）。|z| >= 2.0 で WARN、最長側・最短側の
   両方を独立に見る（最短側は、是正が行き過ぎて「正解だけ短い」という
   逆向きの指紋になっていないかを捕まえるため）。

   文挿入問題（insertAt）は収集時点で除外済み（選択肢が "[1]"〜"[4]" で
   語数に意味が無いため）。選択肢数がそのパートの想定数（Part2=3・他=4）と
   一致する設問だけを対象にする（形が壊れている設問は上で既にエラー報告済み）。
   設問数10問未満のまとまりは判定しない（検査A・Cと同じ扱い。Part1は
   模試1巻あたり6問しかなく母数不足で誤検知するため）。
   選択肢が全問同語数（＝最長も最短も毎回全選択肢に按分）のまとまりでは
   実測値がちょうど p に一致し z=0 になるので、分母（sqrt）が 0 になって
   落ちることはない（p は 0.25 か 1/3 で固定、0 や 1 にはならない）。 */
function checkWordLenG(key, byPart) {
  for (const p of PART_LIST) {
    const entries = byPart[p];
    if (!entries) continue;
    const k = p === 2 ? 3 : 4;
    const filtered = entries.filter(e => e.n === k);
    const n = filtered.length;
    if (n < 10) continue;
    const pChance = 1 / k;

    let longestSum = 0, shortestSum = 0;
    for (const e of filtered) {
      const maxWc = Math.max(...e.wc);
      const minWc = Math.min(...e.wc);
      const maxTies = e.wc.filter(x => x === maxWc).length;
      const minTies = e.wc.filter(x => x === minWc).length;
      if (e.wc[e.answer] === maxWc) longestSum += 1 / maxTies;
      if (e.wc[e.answer] === minWc) shortestSum += 1 / minTies;
    }
    const longestRate = longestSum / n;
    const shortestRate = shortestSum / n;
    const stdNull = Math.sqrt(pChance * (1 - pChance) / n);
    const zLongest = stdNull > 0 ? (longestRate - pChance) / stdNull : 0;
    const zShortest = stdNull > 0 ? (shortestRate - pChance) / stdNull : 0;

    if (Math.abs(zLongest) >= 2.0) {
      warn(key,
        `Part${p} は選択肢の語数が最長のものを選ぶだけで正解が ${(longestRate * 100).toFixed(0)}% 当たる` +
        `（偶然は${(pChance * 100).toFixed(0)}%、${n}問中期待的中${longestSum.toFixed(1)}問相当、z=${zLongest.toFixed(2)}` +
        `／目安|z|>=2.0でWARN。最長側。正解を根拠に忠実に丁寧に書き、誤答を短く済ませる書き癖の疑い）`);
    }
    if (Math.abs(zShortest) >= 2.0) {
      warn(key,
        `Part${p} は選択肢の語数が最短のものを選ぶだけで正解が ${(shortestRate * 100).toFixed(0)}% 当たる` +
        `（偶然は${(pChance * 100).toFixed(0)}%、${n}問中期待的中${shortestSum.toFixed(1)}問相当、z=${zShortest.toFixed(2)}` +
        `／目安|z|>=2.0でWARN。最短側。長い選択肢を避ける是正が行き過ぎて、` +
        `正解だけ短くなる逆向きの指紋になっている疑い）`);
    }
  }
}
for (const [key, byPart] of wordLenDist) checkWordLenG(key, byPart);

/* ── 検査H：選択肢の『形』から正解が浮いていないか（模試・ドリル・--extra・WARN） ──
   CLAUDE.md「選択肢の『形』が正解を教えてしまう」節の実測（全1,200問で
   「4本のうちちょうど1本だけが他と違う形をしている」とき、その1本が正解だった
   割合）を機械的に捕まえる検査。実測で偶然の範囲を外れて漏れが確認できたのは
   複合(and/or)軸と先頭語軸の2つだけ（終止符・読点・語数は偶然の範囲。
   語数は検査Gが最長/最短という別方式で既に見ている）なので、この2軸だけを見る。

   単位・母数の考え方は検査Gと同じ「1つの巻×1つのパート」（模試）／
   「1ファイル×1つのパート」（ドリル・--extra）。shapeDist は targets ループ中に
   t.key × u.part で自然にこの粒度に溜まる（no の並び順に依存しないため
   mock 用・extra 用にマップを分ける必要がなく、そのまま --extra にも効く）。
   収集時点で検査Gと同じ絞り込み（insertAt 除外・choices/answer の形が正常）に
   加えて「全選択肢が2語以下」（金額・日付・ラベルの4択のような、構造上いじれない
   選択肢）を除外してある。

   各設問について、選択肢を軸ごとに値化する：
     複合軸   … 選択肢が /\s(and|or)\s/i にマッチするか（真偽値）
     先頭語軸 … 選択肢の先頭語を小文字化し、英字とアポストロフィ以外を除いたもの
   「値の種類がちょうど2つで、片方の出現回数が1」＝ちょうど1本だけ他と違う形を
   している設問だけを集め（loneOutlierIndex）、その1本が正解だった率を、
   偶然の値 p（4択0.25／Part2の3択1/3）と比べ
   z = (実測 - p) / sqrt(p*(1-p)/n) で正規化する（検査F・Gと同じ考え方）。

   |z| >= 2.0 で WARN（2026-08-28 に片側から両側に変更）。当初は「浮いた1本が
   正解に**なりにくい**方向は漏れではない」として z >= 2.0 の片側検定にしていたが、
   同日の作業でそれが誤りだと実証された。「浮いた1本がほぼ正解にならない」状態は、
   その1本を消すだけで4択が実質3択になる（的中率が25%→33%に上がる）ため、
   これも同じ「選択肢の形だけで正解が漏れる」欠陥であり、実際 z=-2.14
   （先頭語 Part4、1/21=5%）という行き過ぎた是正の指紋が片側検定では
   検出できていなかった。z の符号でメッセージを書き分ける
   （z>0＝浮いた1本が正解になりやすい＝書き癖の疑い、
   z<0＝浮いた1本が正解になりにくい＝是正が行き過ぎて選択肢が実質1つ減っている疑い）。

   該当設問（＝ちょうど1本だけ他と違う形を持つ設問）が8件未満のまとまりは
   判定しない（指示どおりの閾値。母数が小さいと1件の差でzが跳ねるため。
   「値の種類が2つで片方が1」まで絞り込んだ後の母数は1パート分の設問数より
   さらに小さくなるので、検査Gの10問未満スキップより低い8を使う）。 */
function hasAndOr(choice) {
  return /\s(and|or)\s/i.test(choice);
}
function leadWord(choice) {
  const first = choice.trim().split(/\s+/)[0] || '';
  return first.toLowerCase().replace(/[^a-z']/g, '');
}
/* 値の種類がちょうど2つで、片方の出現回数が1のとき、その1本の index を返す
   （＝残り n-1 本は同じ値で揃っている＝ちょうど1本だけ他と違う形）。
   全部同じ／3種類以上に割れている／2種類だが1対1（4択で2:2等）のときは -1。 */
function loneOutlierIndex(values) {
  const counts = new Map();
  values.forEach(v => counts.set(v, (counts.get(v) || 0) + 1));
  if (counts.size !== 2) return -1;
  for (const [v, c] of counts) {
    if (c === 1) return values.indexOf(v);
  }
  return -1;
}
function formatLabels(labels, capN = 25) {
  if (labels.length <= capN) return labels.join(', ');
  return labels.slice(0, capN).join(', ') + ` …ほか${labels.length - capN}件`;
}
function checkShapeH(key, byPart) {
  const axes = [
    { name: '複合(and/or)', value: hasAndOr },
    { name: '先頭語', value: leadWord },
  ];
  for (const p of PART_LIST) {
    const entries = byPart[p];
    if (!entries) continue;
    const k = p === 2 ? 3 : 4;
    const filtered = entries.filter(e => e.n === k);
    const pChance = 1 / k;

    for (const axis of axes) {
      let n = 0, hits = 0;
      const hitLabels = [];
      for (const e of filtered) {
        const outlier = loneOutlierIndex(e.choices.map(axis.value));
        if (outlier === -1) continue;
        n++;
        if (outlier === e.answer) { hits++; hitLabels.push(`${e.label}(${KEYS[outlier]})`); }
      }
      if (n < 8) continue;
      const rate = hits / n;
      const stdNull = Math.sqrt(pChance * (1 - pChance) / n);
      const z = stdNull > 0 ? (rate - pChance) / stdNull : 0;
      if (Math.abs(z) >= 2.0) {
        const msg = z > 0
          ? `Part${p} は選択肢のうち${axis.name}だけが他と違う1本を選ぶだけで正解が ${(rate * 100).toFixed(0)}% 当たる` +
            `（偶然は${(pChance * 100).toFixed(0)}%、該当${n}問中${hits}問的中、z=${z.toFixed(2)}` +
            `／目安|z|>=2.0でWARN。浮いた1本が正解になりやすい側。該当設問: ${formatLabels(hitLabels)}）`
          : `Part${p} は選択肢のうち${axis.name}だけが他と違う1本が正解になることが ${(rate * 100).toFixed(0)}% しかない` +
            `（偶然は${(pChance * 100).toFixed(0)}%、該当${n}問中${hits}問的中、z=${z.toFixed(2)}` +
            `／目安|z|>=2.0でWARN。浮いた1本を消すだけで選択肢が1つ減る。是正が行き過ぎて` +
            `逆向きの指紋になっている疑い。該当設問: ${formatLabels(hitLabels)}）`;
        warn(key, msg);
      }
    }
  }
}
for (const [key, byPart] of shapeDist) checkShapeH(key, byPart);

/* ── 検査I：受動態の軸から正解が漏れていないか（模試・ドリル・--extra・WARN） ──
   検査G（語数）・検査Hが「複合(and/or)・先頭語」を見ているのに対し、選択肢の
   もう一つの『形』——受動態(be + 過去分詞)を含むかどうか——から正解が漏れて
   いないかを見る。模試6巻を実測（是正前、選択肢に3語以上を含む設問）すると、
   選択肢のうち受動態を含むものがちょうど k 本あるとき、正解が受動態側にある率
   が偶然(k/選択肢数)から系統的に外れていた
   （Part2 k=1: 48問中8問=17%〈偶然33%、z=-2.45〉／Part7 k=1: 74問中12問=16%
   〈z=-1.75〉、k=2: 48問中15問=31%〈偶然50%、z=-2.60〉／Part3 k=3: 13問中
   6問=46%〈偶然75%、z=-2.40〉／Part6の語句4択 k=2: 17問中17問=100%〈z=+4.12〉）。

   受動態の判定は isPassive()。be動詞(現在・過去・原形・過去分詞・進行形・
   短縮形)の直後に、任意の副詞0〜2語を挟んで過去分詞(規則変化 -ed/-en、および
   不規則変化リスト)が続く形にマッチする正規表現で、メインが実測に使った計器と
   同一定義（変えないこと）。get + 過去分詞は数えない(BEにgetを含めていない)。
   is interested のように形容詞化した分詞も、表面上の形として数える（意図どおり）。

   単位・母数の考え方は検査G・Hと同じ「1つの巻×1つのパート」（模試）／
   「1ファイル×1つのパート」（ドリル・--extra）。収集は検査Hと同じ shapeDist
   （insertAt 除外・全選択肢2語以下は除外済み）をそのまま再利用する。

   各設問について k = 選択肢のうち受動態を含む本数を数え、k が 1〜(選択肢数-1)
   の設問だけを対象にする（k=0 は受動態の選択肢が無く軸が存在せず、k=選択肢数
   は全選択肢が受動態で軸にならないため、検査Hの loneOutlierIndex が「値の
   種類がちょうど2つ」を要求するのと同じ理由で除く）。k の値ごとに別々の母数
   として集計し、p = k / 選択肢数（受動態側からランダムに1本選んだときの偶然の
   的中率）、z = (hits/n - p) / sqrt(p(1-p)/n) で正規化する（検査F・G・Hと
   同じ考え方）。n_k >= 8 かつ |z| >= 2.0 で WARN（検査Hと同じ閾値・同じ
   両側判定）。z > 0 は「受動態側を選ぶだけで正解が当たりやすい」、z < 0 は
   「受動態側を消すだけで選択肢が実質減る（是正が行き過ぎている疑い）」を表す。
   2026-09-02、誤検知2種を修正: (1) 所有格 's を be の縮約と誤認
   （"the neighbour's shed" "the client's agreed budget" 等）、(2) -ed/-en で
   終わるが過去分詞でない語（"is open" "is between" "are even" 等）を過去分詞と
   誤認。NOT_PP の否定先読みと BE からの所有格除去で対処した。 */
const IRREG = 'been|begun|bent|bitten|blown|broken|brought|built|bought|caught|chosen|come|cut|dealt|done|drawn|driven|drunk|eaten|fallen|fed|felt|fought|found|flown|forbidden|forgotten|forgiven|frozen|given|gone|grown|had|heard|held|hidden|hit|hurt|kept|known|laid|led|left|lent|let|lit|lost|made|meant|met|paid|put|read|ridden|risen|run|said|seen|sent|set|shaken|shown|shut|sold|sought|spent|spoken|split|spread|stolen|struck|stuck|sung|sworn|taken|taught|thought|thrown|told|torn|understood|undertaken|withdrawn|withheld|won|worn|written|overseen|overtaken|rebuilt|redone|reset|resold|rewritten|upheld|foreseen|misled|proven|shot|woven|hung|sunk|bound|wound|lain|shone|slid|bred|fled|sped|spun|swept|swung|trodden|forecast|broadcast|cast|cost|bid|quit|shed|spat|leapt|dreamt|learnt|spelt|burnt|smelt';
const NOT_PP = 'open|often|even|uneven|seven|eleven|ten|then|when|kitchen|garden|chicken|linen|women|children|screen|between|green|golden|wooden|sudden|need|indeed|red|bed|feed|speed|proceed|exceed|succeed|seed|hundred|kindred|sacred|naked|wicked|rugged|oxygen|citizen|token|omen|specimen|siren|heaven|haven|raven|keen|teen|queen|amen|hyphen|dozen|happen|listen|oven|warden|burden|golden|leaden|molten|rotten|silken|sullen|swollen|barren|brazen|molten';
const PP = `(?!(?:${NOT_PP})\\b)(?:[a-z]+(?:ed|en)|${IRREG})`;
const BE = `(?:am|is|are|was|were|be|been|being)`;
const ADV = `(?:\\s+(?:not|never|also|still|already|now|only|being|currently|recently|often|usually|just|all|both|then|soon|later|first|properly|fully|partly|once|again)){0,2}`;
const PASSIVE_RE = new RegExp(`\\b(?:${BE}|isn't|aren't|wasn't|weren't|it's|that's|he's|she's|they're|we're|you're|there's|what's|who's|everything's|everyone's|nothing's|mine's|i'm)${ADV}\\s+${PP}\\b`, 'i');
function isPassive(choice) {
  return typeof choice === 'string' && PASSIVE_RE.test(choice);
}
function checkPassiveI(key, byPart) {
  for (const p of PART_LIST) {
    const entries = byPart[p];
    if (!entries) continue;
    const k4 = p === 2 ? 3 : 4;
    const filtered = entries.filter(e => e.n === k4);
    if (!filtered.length) continue;

    const byK = new Map();   // 受動態を含む選択肢の本数 k -> { n, hits, hitLabels }
    for (const e of filtered) {
      const flags = e.choices.map(isPassive);
      const kPassive = flags.filter(Boolean).length;
      if (kPassive < 1 || kPassive > e.n - 1) continue;
      if (!byK.has(kPassive)) byK.set(kPassive, { n: 0, hits: 0, hitLabels: [] });
      const g = byK.get(kPassive);
      g.n++;
      if (flags[e.answer]) { g.hits++; g.hitLabels.push(`${e.label}(${KEYS[e.answer]})`); }
    }
    for (const [kPassive, g] of byK) {
      if (g.n < 8) continue;
      const pChance = kPassive / k4;
      const rate = g.hits / g.n;
      const stdNull = Math.sqrt(pChance * (1 - pChance) / g.n);
      const z = stdNull > 0 ? (rate - pChance) / stdNull : 0;
      if (Math.abs(z) >= 2.0) {
        const msg = z > 0
          ? `Part${p} は受動態の選択肢が${kPassive}/${k4}本あるとき、その受動態側を選ぶだけで正解が ${(rate * 100).toFixed(0)}% 当たる` +
            `（偶然は${(pChance * 100).toFixed(0)}%、該当${g.n}問中${g.hits}問的中、z=${z.toFixed(2)}` +
            `／目安|z|>=2.0でWARN。受動態側が正解になりやすい側。該当設問: ${formatLabels(g.hitLabels)}）`
          : `Part${p} は受動態の選択肢が${kPassive}/${k4}本あるとき、正解が受動態側になることが ${(rate * 100).toFixed(0)}% しかない` +
            `（偶然は${(pChance * 100).toFixed(0)}%、該当${g.n}問中${g.hits}問的中、z=${z.toFixed(2)}` +
            `／目安|z|>=2.0でWARN。受動態側を消すだけで実質的な選択肢が減る。是正が行き過ぎて` +
            `逆向きの指紋になっている疑い。該当設問: ${formatLabels(g.hitLabels)}）`;
        warn(key, msg);
      }
    }
  }
}
for (const [key, byPart] of shapeDist) checkPassiveI(key, byPart);

/* ── 検査J：定形/非定形の軸から正解が漏れていないか（模試・ドリル・--extra・WARN） ──
   検査I（受動態）と同じ考え方を、選択肢が「that 節・主節の述語になれる形（定形）か、
   to V・V-ing・having V-en・being V-en（非定形）か」という軸に適用する。
   要求・提案の that 節（`It is essential that every participant ------- a signed
   waiver.`）のような設問で、第二の正解（英式の直説法）を潰すために誤答を全部
   非定形に差し替えた結果、「4択のうち定形がちょうど1本だけで、それが正解」という
   設問が7問同時に発生した実際の事故（2026-09-12）に対応する。

   軸の実体は「その位置で述語（that 節・主節の動詞）になれる形かどうか」。
   分類は4値：定形(finite) / 非定形(nonfinite) / 判別不能(unknown) / 対象外(other)。
   unknown と other はどちらも「その設問ごと母数から外す」対象として同じ扱いにする。
   ・非定形（述語になれない）：to V（to be V-en 含む）／V-ing 単独／having V-en／
     being V-en／**過去形と紛れない裸の過去分詞**（`worn` `taken` `written`
     `known` のように、不規則動詞で過去分詞形が単純過去形と綴りが異なるもの。
     過去形（wore/took/wrote/knew）ではあり得ない形なので、定形の単純過去との
     混同が起きず、非定形の分詞としてのみ読める）。
   ・定形（述語になれる）：`submits` `is submitted` `will submit` `had submitted`
     のような時制・助動詞を持つ形。**原形も含む**（`submit` はもちろん、
     `be filed` `be approved` `be put` のような原形受動も）——仮定法現在・
     命令形の述語になれるため同じ側に数える。この検査が捕まえたいのは
     「述語になれる形が1本だけ浮いている」状態であり、原形（原形受動を含む）は
     まさにその1本になり得るため、非定形側に置いてはならない
     （2026-09-12、指示側の初出仕様が「be V-en は非定形」と自己矛盾していたため
     訂正された。原形受動を非定形に誤分類すると、捕まえるべき7問中 subj-07r
     `be filed`・subj-25r `be approved` を取り逃がす）。
   ・判別不能：過去形か過去分詞か決まらない語が先頭に来ているもの。
     **不規則動詞は「過去形と過去分詞が同形かどうか」で分岐する**——
     `said` `held` `put` `cut` `read` のように過去形＝過去分詞（さらに `put`
     `cut` `read` は原形とも同形）の語は、定形の単純過去（あるいは原形）と
     非定形の過去分詞のどちらとも読めるため判別不能（IRREG_SAME_PP）。一方
     `worn` `taken` `written` `known` のように過去分詞が単純過去と別形の語は、
     過去形ではあり得ないので非定形として確定できる（上記・IRREG_DISTINCT_PP）。
     規則動詞の `-ed` 語（`submitted` `checked` `suspended`）は過去形＝過去分詞
     なので常に判別不能。CLAUDE.md の指示は「単独で置かれていて」（＝選択肢が
     その1語だけ）だが、後ろに語が続いても曖昧さの性質は変わらない
     （"processed automatically" は定形の単純過去にも、非定形の分詞句の一部にも
     読める）ため、語数を問わず先頭語がこの形なら判別不能にする（指示からの
     拡張。除外が増える方向にしか効かないので安全側）。

   判定は先頭語（w0）とその次の語（w1）だけを見る、単純な表層パターンマッチ。
   明示的なパターン（to/having/being/V-ing/法助動詞/have・has・had/be動詞の時制形/
   短縮形/原形の be/3人称単数現在の -s）のどれにも掛からない「裸の語」
   （`submit` `consist` `monitor` 等）は、同じ設問の他の選択肢から「動詞の頭」
   （先頭の to/having/been/being を読み飛ばした最初の語）を取り出し、同じ語幹の
   ものが明示的パターンで分類できていれば、その語の原形とみなして定形にする
   （アンカー方式）。アンカーが無ければ、動詞の活用形パラダイムの選択肢ではない
   （語彙・品詞問題の名詞・形容詞など無関係な選択肢）と判断し対象外(other)にする。

   誤判定が無いことは、assets/data 全体（模試6巻＋ドリル23ファイル、1,814設問）に
   対して実行し、①「定形」「非定形」両方を含み unknown/other を含まない42設問
   （すべて Part5・Part6）を全件目視、②「その他」に落ちた約5,500件のうち
   Part1〜4・7 の全文・フレーズ選択肢（"It's a secure connection..." 等）が
   意図どおり定形/非定形いずれにも誤分類されず対象外になっていること、を
   確認して行った（詳細は SP/fix-final-validateJ.md）。
   当初 -ing 名詞の誤検知（"meeting" 等）を避けるための denylist を持っていたが、
   `having set up` の兄弟である `setting up` の "setting" がその denylist に
   入っていたため非定形と判定されず、裸の語アンカー経路に落ちて誤って定形と
   判定される事故が実測で見つかり、denylist を撤去した（無関係な選択肢セットは、
   他の選択肢が対象外になることで自然に母数から外れるため、denylist が無くても
   誤検知は増えない）。また当初アンカーの語幹取り出しに選択肢の先頭語
   （`sibWords[0]`）をそのまま使っていたが、`to submit` `having submitted` の
   ような選択肢では先頭語が `to`/`having` になり、実際の動詞（`submit`）を
   拾えていなかった（`submitting` のような1語の -ing 型が兄弟にあるときだけ
   たまたま機能する、という偶然に依存していた）。`finitenessVerbHead()` で
   先頭の to/having/been/being を読み飛ばすよう修正した。

   収集は finiteDist（選択肢の生データ。分類はここで行う）。各設問について
   kFinite = 選択肢のうち定形の本数を数え、kFinite が 1〜(選択肢数-1) の設問だけを
   対象にする（0 は定形が無く軸が存在せず、選択肢数は全選択肢が定形で軸にならない
   ため、検査I と同じ理由で除く）。kFinite の値ごとに別々の母数として集計し、
   p = kFinite / 選択肢数、z = (hits/n - p) / sqrt(p(1-p)/n) で正規化する
   （検査F・G・H・Iと同じ考え方）。n_k >= 8 かつ |z| >= 2.0 で WARN
   （検査Hと同じ閾値・同じ両側判定）。実際の事故（7問同時発生）は kFinite=1 に
   相当する。 */
const NONVERB_AFTER_TO = new Set([
  'the', 'a', 'an', 'this', 'that', 'these', 'those', 'his', 'her', 'its', 'our', 'their', 'my', 'your',
  'whom', 'whoever', 'someone', 'anyone', 'everyone', 'no', 'nobody', 'somebody', 'anybody', 'everybody',
  'us', 'them', 'him', 'me', 'you', 'which', 'whose',
]);
const FINITE_MODALS = new Set(['will', 'would', 'shall', 'should', 'can', 'could', 'may', 'might', 'must', 'ought']);
const FINITE_HAVE = new Set(['has', 'have', 'had']);
const FINITE_BE_TENSED = new Set(['am', 'is', 'are', 'was', 'were']);
const FINITE_BE_CONTR = new Set([
  "isn't", "aren't", "wasn't", "weren't", "it's", "that's", "he's", "she's",
  "they're", "we're", "you're", "there's", "what's", "who's",
]);
/* 検査IのIRREG（不規則動詞の過去分詞リスト）を、「過去形と同形か（IRREG_SAME_PP、
   判別不能）」「過去形と別形か（IRREG_DISTINCT_PP、過去形とは紛れない＝非定形確定）」
   に分割する。base-past-participle が3形とも異なる動詞（write-wrote-written 等）の
   participle は DISTINCT。base=participle だが past だけ別形の動詞（come-came-come、
   run-ran-run）はどちらにも入れない（過去形との混同は起きないが、原形とも同形で
   「原形＝定形」の可能性を排除できないため、特別扱いせず一般の裸の語アンカー
   経路に委ねる）。 */
const IRREG_SAME_PP = new Set('bent|brought|built|bought|caught|cut|dealt|fed|felt|fought|found|had|heard|held|hit|hurt|kept|laid|led|left|lent|lit|lost|made|meant|met|paid|put|read|said|sent|set|shot|shut|sold|sought|spent|split|spread|struck|stuck|taught|thought|told|understood|withheld|won|hung|bound|wound|shone|slid|bred|fled|sped|swept|swung|forecast|broadcast|cast|cost|bid|quit|shed|spat|leapt|dreamt|learnt|spelt|burnt|smelt|rebuilt|reset|resold|upheld|misled'.split('|'));
const IRREG_DISTINCT_PP = new Set('been|begun|bitten|blown|broken|chosen|done|drawn|driven|drunk|eaten|fallen|flown|forbidden|forgotten|forgiven|frozen|given|gone|grown|hidden|known|ridden|risen|seen|shaken|shown|sung|sworn|taken|torn|thrown|trodden|woven|withdrawn|worn|written|overseen|overtaken|undertaken|foreseen|redone|rewritten|proven|lain|sunk'.split('|'));
function finitenessStripPunct(w) {
  return (w || '').toLowerCase().replace(/[^a-z']/g, '');
}
/* 同一設問内で「同じ動詞のパラダイムか」を見るためだけの粗いステマー。
   厳密な語幹一致は要求しない（誤って一致しても、その裸の語を定形にするだけで、
   一致しないと安全側の対象外に倒れるため、緩めに倒してある）。 */
function finitenessCrudeStem(w) {
  let s = finitenessStripPunct(w);
  if (s.endsWith('ies') && s.length > 4) s = s.slice(0, -3) + 'y';
  else if (s.endsWith('ing') && s.length > 5) s = s.slice(0, -3);
  else if (s.endsWith('ied') && s.length > 4) s = s.slice(0, -3) + 'y';
  else if (s.endsWith('es') && s.length > 4) s = s.slice(0, -2);
  else if (s.endsWith('ed') && s.length > 4) s = s.slice(0, -2);
  else if (s.endsWith('s') && !s.endsWith('ss') && s.length > 3) s = s.slice(0, -1);
  if (/([a-z])\1$/.test(s) && s.length > 3) s = s.slice(0, -1);
  return s;
}
/* 選択肢の語配列から「動詞の頭」を取り出す。to/having/been/being のような
   先頭の助動詞・不定詞標識を読み飛ばし、実際の語幹を持つ語（"to submit" なら
   submit、"having submitted" なら submitted）にたどり着く。 */
const FINITENESS_SKIP_HEAD = new Set(['to', 'having', 'been', 'being', 'not']);
function finitenessVerbHead(words) {
  let i = 0;
  while (i < words.length - 1 && FINITENESS_SKIP_HEAD.has(finitenessStripPunct(words[i]))) i++;
  return words[i];
}
/* 選択肢を「明示的なパターン」だけで分類する。マッチしなければ null
   （裸の語などアンカー判定待ち）を返す。 */
function classifyFinitenessExplicit(words) {
  const w0 = finitenessStripPunct(words[0]);
  const w1 = finitenessStripPunct(words[1]);
  if (!w0) return null;

  if (w0 === 'to') {                                        // to V（to be/have Ven 含む）
    if (!w1) return 'other';
    if (NONVERB_AFTER_TO.has(w1)) return 'other';           // "to the office" 等の前置詞句は除外
    return 'nonfinite';
  }
  if (w0 === 'having') return 'nonfinite';                   // having V-en（having been V-en 含む）
  if (w0 === 'being') return 'nonfinite';                     // being V-en
  if (/^[a-z]+ing$/.test(w0)) return 'nonfinite';             // V-ing 単独
  if (IRREG_DISTINCT_PP.has(w0)) return 'nonfinite';          // 過去形とは別形の過去分詞（worn/taken/written 等）→非定形確定
  if (IRREG_SAME_PP.has(w0)) return 'unknown';                // 過去形＝過去分詞の不規則動詞（said/held/put/cut 等）→判別不能
  if (/^[a-z]+(?:ed|en)$/.test(w0)) return 'unknown';         // 規則動詞の -ed（過去形＝過去分詞）→判別不能
  if (FINITE_MODALS.has(w0)) return 'finite';                 // 法助動詞 + V
  if (FINITE_HAVE.has(w0)) {                                  // have/has/had + V-en（"have to V" は除外）
    if (w1 === 'to') return 'other';
    return 'finite';
  }
  if (FINITE_BE_TENSED.has(w0)) return 'finite';              // be動詞（時制あり）+ V-en/V-ing
  if (FINITE_BE_CONTR.has(finitenessStripPunct(words[0]))) return 'finite'; // be動詞の短縮形
  if (w0 === 'be') return 'finite';                           // 原形の be（仮定法現在。be V-en も含む）
  if (/^[a-z]+s$/.test(w0) && !w0.endsWith('ss') && w0.length > 3) return 'finite'; // 3人称単数現在
  return null;
}
function classifyFiniteness(choice, siblings) {
  if (typeof choice !== 'string') return 'unknown';
  const words = choice.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return 'unknown';

  const explicit = classifyFinitenessExplicit(words);
  if (explicit) return explicit;

  // 裸の語。同じ設問の他の選択肢の「動詞の頭」から、明示的パターンで分類できた
  // 同じ語幹のものがあれば、その語の原形（定形）とみなす。アンカーが無ければ
  // 動詞の活用形パラダイムの選択肢ではないと判断し、対象外にする。
  const stem = finitenessCrudeStem(words[0]);
  for (const sib of siblings) {
    if (sib === choice) continue;
    const sibWords = String(sib).trim().split(/\s+/).filter(Boolean);
    if (!sibWords.length) continue;
    const sibExplicit = classifyFinitenessExplicit(sibWords);
    if (!sibExplicit || sibExplicit === 'other' || sibExplicit === 'unknown') continue;
    if (finitenessCrudeStem(finitenessVerbHead(sibWords)) === stem) return 'finite';
  }
  return 'other';
}
function checkFiniteJ(key, byPart) {
  for (const p of PART_LIST) {
    const entries = byPart[p];
    if (!entries) continue;
    const k4 = p === 2 ? 3 : 4;
    const filtered = entries.filter(e => e.n === k4);
    if (!filtered.length) continue;

    const byK = new Map();   // 定形の本数 kFinite -> { n, hits, hitLabels }
    for (const e of filtered) {
      const classes = e.choices.map(c => classifyFiniteness(c, e.choices));
      if (classes.some(c => c === 'unknown' || c === 'other')) continue;
      const kFinite = classes.filter(c => c === 'finite').length;
      if (kFinite < 1 || kFinite > e.n - 1) continue;
      if (!byK.has(kFinite)) byK.set(kFinite, { n: 0, hits: 0, hitLabels: [] });
      const g = byK.get(kFinite);
      g.n++;
      if (classes[e.answer] === 'finite') { g.hits++; g.hitLabels.push(`${e.label}(${KEYS[e.answer]})`); }
    }
    for (const [kFinite, g] of byK) {
      if (g.n < 8) continue;
      const pChance = kFinite / k4;
      const rate = g.hits / g.n;
      const stdNull = Math.sqrt(pChance * (1 - pChance) / g.n);
      const z = stdNull > 0 ? (rate - pChance) / stdNull : 0;
      if (Math.abs(z) >= 2.0) {
        const msg = z > 0
          ? `Part${p} は定形（that節・主節の述語になれる形）の選択肢が${kFinite}/${k4}本あるとき、その定形側を選ぶだけで正解が ${(rate * 100).toFixed(0)}% 当たる` +
            `（偶然は${(pChance * 100).toFixed(0)}%、該当${g.n}問中${g.hits}問的中、z=${z.toFixed(2)}` +
            `／目安|z|>=2.0でWARN。定形側が正解になりやすい側。該当設問: ${formatLabels(g.hitLabels)}）`
          : `Part${p} は定形の選択肢が${kFinite}/${k4}本あるとき、正解が定形側になることが ${(rate * 100).toFixed(0)}% しかない` +
            `（偶然は${(pChance * 100).toFixed(0)}%、該当${g.n}問中${g.hits}問的中、z=${z.toFixed(2)}` +
            `／目安|z|>=2.0でWARN。定形側を消すだけで実質的な選択肢が減る。是正が行き過ぎて` +
            `逆向きの指紋になっている疑い。該当設問: ${formatLabels(g.hitLabels)}）`;
        warn(key, msg);
      }
    }
  }
}
for (const [key, byPart] of finiteDist) checkFiniteJ(key, byPart);

/* ── 検査G・H・I の合算判定（模試6巻合算／ドリル全ファイル合算、パート別・WARN） ──
   上の checkWordLenG / checkShapeH / checkPassiveI は「1巻×1パート」
   「1ファイル×1パート」単位で見ている。この単位だと、1巻・1ファイルあたりの
   該当数が少ない漏れは有意にならず永久に検出できない。実測（メインが確認済み）:
     複合(and/or)：Part3 で全6巻合算 9/10 = 90%、z=+4.75
                    （1巻あたり2〜3件しかなく検査Hの8件未満で毎回スキップ）
     先頭語　　　：Part3 で全6巻合算 17/31 = 55%、z=+3.84（同上）
                    Part4 で全6巻合算  1/21 =  5%、z=-2.14（逆向きに行き過ぎ）
   ドリルの語数（検査G）でも同型の事故が起きている（1ファイル8〜20問では
   個別に有意にならないのに、Part6 を合算すると z=+3.4 だった実例）。
   受動態（検査I）も同じ理由で合算判定が要る——1巻あたりの該当 k は数問しか
   出ないため、模試6巻を合算して初めて上のコメントに書いた実測
   （Part2 k=1 z=-2.45、Part7 k=1 z=-1.75・k=2 z=-2.60、Part3 k=3 z=-2.40、
   Part6語句 k=2 z=+4.12）が有意水準に達する。

   単位別の判定はそのまま残し、これは追加の判定として行う
   （＝重複して報告されることがあるが、key に [合算] を付けて区別できるようにする）。

   母数の下限は合算後 8 件未満なら判定しない（2026-08-28 に 12 から引き下げ。
   当初は「合算は複数ファイルを束ねるので、単位別〈検査Hは8件〉より厚い母数を
   要求すべき」として 12 を指定していたが、これは逆だった。合算は単位別より
   情報が少ないのではなく多いのだから、単位別より厳しい下限を課す理由がない。
   実際、この引き下げ前は当の動機になった実測〈複合(and/or) Part3 9/10=90%、
   z=+4.75〉が n=10<12 のため検出されなかった。単位別の下限〈検査Hが8、
   検査Gが10〉のうちより小さいほうに合わせ、合算にも 8 を採る。 */
const AGG_MIN = 8;
const mockKeySet = new Set(targets.filter(t => t.mock).map(t => t.key));
const drillKeySet = new Set(targets.filter(t => !t.mock && !t.extra).map(t => t.key));

/** dist（wordLenDist / shapeDist と同じ形: key -> {part -> entries[]}）から、
   keySet に含まれる key の分だけをパート別に束ねて1つの byPart にする。 */
function aggregateByGroup(dist, keySet) {
  const byPart = {};
  for (const [key, kp] of dist) {
    if (!keySet.has(key)) continue;
    for (const p of PART_LIST) {
      const entries = kp[p];
      if (!entries) continue;
      (byPart[p] = byPart[p] || []).push(...entries);
    }
  }
  return byPart;
}

/* checkWordLenG と同じ計算だが、母数の下限（AGG_MIN）とキー（[合算] 付き）だけが違う。
   ロジックを分岐で共用すると条件分岐が増えて可読性が落ちるため、小さい関数として複製する。 */
function checkWordLenGAggregate(label, byPart) {
  for (const p of PART_LIST) {
    const entries = byPart[p];
    if (!entries) continue;
    const k = p === 2 ? 3 : 4;
    const filtered = entries.filter(e => e.n === k);
    const n = filtered.length;
    if (n < AGG_MIN) continue;
    const pChance = 1 / k;

    let longestSum = 0, shortestSum = 0;
    for (const e of filtered) {
      const maxWc = Math.max(...e.wc);
      const minWc = Math.min(...e.wc);
      const maxTies = e.wc.filter(x => x === maxWc).length;
      const minTies = e.wc.filter(x => x === minWc).length;
      if (e.wc[e.answer] === maxWc) longestSum += 1 / maxTies;
      if (e.wc[e.answer] === minWc) shortestSum += 1 / minTies;
    }
    const longestRate = longestSum / n;
    const shortestRate = shortestSum / n;
    const stdNull = Math.sqrt(pChance * (1 - pChance) / n);
    const zLongest = stdNull > 0 ? (longestRate - pChance) / stdNull : 0;
    const zShortest = stdNull > 0 ? (shortestRate - pChance) / stdNull : 0;

    if (Math.abs(zLongest) >= 2.0) {
      warn(`[合算] ${label}`,
        `Part${p} は選択肢の語数が最長のものを選ぶだけで正解が ${(longestRate * 100).toFixed(0)}% 当たる` +
        `（偶然は${(pChance * 100).toFixed(0)}%、${n}問中期待的中${longestSum.toFixed(1)}問相当、z=${zLongest.toFixed(2)}` +
        `／目安|z|>=2.0でWARN。最長側。正解を根拠に忠実に丁寧に書き、誤答を短く済ませる書き癖の疑い）`);
    }
    if (Math.abs(zShortest) >= 2.0) {
      warn(`[合算] ${label}`,
        `Part${p} は選択肢の語数が最短のものを選ぶだけで正解が ${(shortestRate * 100).toFixed(0)}% 当たる` +
        `（偶然は${(pChance * 100).toFixed(0)}%、${n}問中期待的中${shortestSum.toFixed(1)}問相当、z=${zShortest.toFixed(2)}` +
        `／目安|z|>=2.0でWARN。最短側。長い選択肢を避ける是正が行き過ぎて、` +
        `正解だけ短くなる逆向きの指紋になっている疑い）`);
    }
  }
}

/* checkShapeH と同じ計算だが、母数の下限（AGG_MIN）とキー（[合算] 付き）だけが違う。 */
function checkShapeHAggregate(label, byPart) {
  const axes = [
    { name: '複合(and/or)', value: hasAndOr },
    { name: '先頭語', value: leadWord },
  ];
  for (const p of PART_LIST) {
    const entries = byPart[p];
    if (!entries) continue;
    const k = p === 2 ? 3 : 4;
    const filtered = entries.filter(e => e.n === k);
    const pChance = 1 / k;

    for (const axis of axes) {
      let n = 0, hits = 0;
      const hitLabels = [];
      for (const e of filtered) {
        const outlier = loneOutlierIndex(e.choices.map(axis.value));
        if (outlier === -1) continue;
        n++;
        if (outlier === e.answer) { hits++; hitLabels.push(`${e.label}(${KEYS[outlier]})`); }
      }
      if (n < AGG_MIN) continue;
      const rate = hits / n;
      const stdNull = Math.sqrt(pChance * (1 - pChance) / n);
      const z = stdNull > 0 ? (rate - pChance) / stdNull : 0;
      if (Math.abs(z) >= 2.0) {
        const msg = z > 0
          ? `Part${p} は選択肢のうち${axis.name}だけが他と違う1本を選ぶだけで正解が ${(rate * 100).toFixed(0)}% 当たる` +
            `（偶然は${(pChance * 100).toFixed(0)}%、該当${n}問中${hits}問的中、z=${z.toFixed(2)}` +
            `／目安|z|>=2.0でWARN。浮いた1本が正解になりやすい側。該当設問: ${formatLabels(hitLabels)}）`
          : `Part${p} は選択肢のうち${axis.name}だけが他と違う1本が正解になることが ${(rate * 100).toFixed(0)}% しかない` +
            `（偶然は${(pChance * 100).toFixed(0)}%、該当${n}問中${hits}問的中、z=${z.toFixed(2)}` +
            `／目安|z|>=2.0でWARN。浮いた1本を消すだけで選択肢が1つ減る。是正が行き過ぎて` +
            `逆向きの指紋になっている疑い。該当設問: ${formatLabels(hitLabels)}）`;
        warn(`[合算] ${label}`, msg);
      }
    }
  }
}

/* checkPassiveI と同じ計算だが、母数の下限（AGG_MIN）とキー（[合算] 付き）だけが違う。 */
function checkPassiveIAggregate(label, byPart) {
  for (const p of PART_LIST) {
    const entries = byPart[p];
    if (!entries) continue;
    const k4 = p === 2 ? 3 : 4;
    const filtered = entries.filter(e => e.n === k4);
    if (!filtered.length) continue;

    const byK = new Map();
    for (const e of filtered) {
      const flags = e.choices.map(isPassive);
      const kPassive = flags.filter(Boolean).length;
      if (kPassive < 1 || kPassive > e.n - 1) continue;
      if (!byK.has(kPassive)) byK.set(kPassive, { n: 0, hits: 0, hitLabels: [] });
      const g = byK.get(kPassive);
      g.n++;
      if (flags[e.answer]) { g.hits++; g.hitLabels.push(`${e.label}(${KEYS[e.answer]})`); }
    }
    for (const [kPassive, g] of byK) {
      if (g.n < AGG_MIN) continue;
      const pChance = kPassive / k4;
      const rate = g.hits / g.n;
      const stdNull = Math.sqrt(pChance * (1 - pChance) / g.n);
      const z = stdNull > 0 ? (rate - pChance) / stdNull : 0;
      if (Math.abs(z) >= 2.0) {
        const msg = z > 0
          ? `Part${p} は受動態の選択肢が${kPassive}/${k4}本あるとき、その受動態側を選ぶだけで正解が ${(rate * 100).toFixed(0)}% 当たる` +
            `（偶然は${(pChance * 100).toFixed(0)}%、該当${g.n}問中${g.hits}問的中、z=${z.toFixed(2)}` +
            `／目安|z|>=2.0でWARN。受動態側が正解になりやすい側。該当設問: ${formatLabels(g.hitLabels)}）`
          : `Part${p} は受動態の選択肢が${kPassive}/${k4}本あるとき、正解が受動態側になることが ${(rate * 100).toFixed(0)}% しかない` +
            `（偶然は${(pChance * 100).toFixed(0)}%、該当${g.n}問中${g.hits}問的中、z=${z.toFixed(2)}` +
            `／目安|z|>=2.0でWARN。受動態側を消すだけで実質的な選択肢が減る。是正が行き過ぎて` +
            `逆向きの指紋になっている疑い。該当設問: ${formatLabels(g.hitLabels)}）`;
        warn(`[合算] ${label}`, msg);
      }
    }
  }
}

/* checkFiniteJ と同じ計算だが、母数の下限（AGG_MIN）とキー（[合算] 付き）だけが違う。 */
function checkFiniteJAggregate(label, byPart) {
  for (const p of PART_LIST) {
    const entries = byPart[p];
    if (!entries) continue;
    const k4 = p === 2 ? 3 : 4;
    const filtered = entries.filter(e => e.n === k4);
    if (!filtered.length) continue;

    const byK = new Map();
    for (const e of filtered) {
      const classes = e.choices.map(c => classifyFiniteness(c, e.choices));
      if (classes.some(c => c === 'unknown' || c === 'other')) continue;
      const kFinite = classes.filter(c => c === 'finite').length;
      if (kFinite < 1 || kFinite > e.n - 1) continue;
      if (!byK.has(kFinite)) byK.set(kFinite, { n: 0, hits: 0, hitLabels: [] });
      const g = byK.get(kFinite);
      g.n++;
      if (classes[e.answer] === 'finite') { g.hits++; g.hitLabels.push(`${e.label}(${KEYS[e.answer]})`); }
    }
    for (const [kFinite, g] of byK) {
      if (g.n < AGG_MIN) continue;
      const pChance = kFinite / k4;
      const rate = g.hits / g.n;
      const stdNull = Math.sqrt(pChance * (1 - pChance) / g.n);
      const z = stdNull > 0 ? (rate - pChance) / stdNull : 0;
      if (Math.abs(z) >= 2.0) {
        const msg = z > 0
          ? `Part${p} は定形（that節・主節の述語になれる形）の選択肢が${kFinite}/${k4}本あるとき、その定形側を選ぶだけで正解が ${(rate * 100).toFixed(0)}% 当たる` +
            `（偶然は${(pChance * 100).toFixed(0)}%、該当${g.n}問中${g.hits}問的中、z=${z.toFixed(2)}` +
            `／目安|z|>=2.0でWARN。定形側が正解になりやすい側。該当設問: ${formatLabels(g.hitLabels)}）`
          : `Part${p} は定形の選択肢が${kFinite}/${k4}本あるとき、正解が定形側になることが ${(rate * 100).toFixed(0)}% しかない` +
            `（偶然は${(pChance * 100).toFixed(0)}%、該当${g.n}問中${g.hits}問的中、z=${z.toFixed(2)}` +
            `／目安|z|>=2.0でWARN。定形側を消すだけで実質的な選択肢が減る。是正が行き過ぎて` +
            `逆向きの指紋になっている疑い。該当設問: ${formatLabels(g.hitLabels)}）`;
        warn(`[合算] ${label}`, msg);
      }
    }
  }
}

checkWordLenGAggregate('模試6巻合算', aggregateByGroup(wordLenDist, mockKeySet));
checkWordLenGAggregate('ドリル全体合算', aggregateByGroup(wordLenDist, drillKeySet));
checkShapeHAggregate('模試6巻合算', aggregateByGroup(shapeDist, mockKeySet));
checkShapeHAggregate('ドリル全体合算', aggregateByGroup(shapeDist, drillKeySet));
checkPassiveIAggregate('模試6巻合算', aggregateByGroup(shapeDist, mockKeySet));
checkPassiveIAggregate('ドリル全体合算', aggregateByGroup(shapeDist, drillKeySet));
checkFiniteJAggregate('模試6巻合算', aggregateByGroup(finiteDist, mockKeySet));
checkFiniteJAggregate('ドリル全体合算', aggregateByGroup(finiteDist, drillKeySet));
/* 検査Jだけ「模試+ドリル全体」の合算も追加する（指示どおりの拡張ではない。
   理由は SP/fix-final-validateJ.md に記録：定形/非定形の軸が適用できる設問は
   動詞の活用形パラダイム（4択とも同じ動詞の形違い）に限られ、全データでも
   42問しかない。実際の事故（7問）は模試側3問・ドリル側5問に分かれており、
   検査G・Hと同じ「模試合算」「ドリル合算」を別々に見る運用のままだと、
   AGG_MIN=8 のどちらの母数にも届かず検出できない。母数を8件以上に保ったまま
   検出するには、模試とドリルを合わせた母数が要る）。 */
checkFiniteJAggregate('模試+ドリル全体合算', aggregateByGroup(finiteDist, new Set([...mockKeySet, ...drillKeySet])));

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

/* ── テスト用エクスポート（CLI実行には無関係） ──────────────
   `node tools/validate.mjs` を直接実行する通常経路では使われない
   （エントリモジュールとして実行する限り、この export は無視されるだけで
   挙動・出力を一切変えない）。検査G・H・I の「合算」ロジックは --extra が
   合算から意図的に除外される仕様のため、実データを介したテストだけでは
   「合算だけが発火するか」を確認できない。この export はそれを単体で
   検証するための入口で、スクラッチパッドの検証用スクリプトから
   `import('.../tools/validate.mjs')` して使う。 */
export const __test__ = {
  AGG_MIN, mockKeySet, drillKeySet,
  aggregateByGroup, checkWordLenGAggregate, checkShapeHAggregate, checkPassiveIAggregate,
  checkFiniteJAggregate,
  checkWordLenG, checkShapeH, checkPassiveI, checkFiniteJ,
  loneOutlierIndex, hasAndOr, leadWord, formatLabels, isPassive, classifyFiniteness,
  wordLenDist, shapeDist, finiteDist, issues, warn,
};
