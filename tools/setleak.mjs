#!/usr/bin/env node
/* =============================================================
   setleak.mjs — セット内・文書内の「相互ヒント」検出（試作を土台にした独立ツール）

   ── 何を検出するか ──────────────────────────────────────────
   Part 3・4 の1セット（script を共有する複数設問）と Part 6・7 の1文書
   （docs を共有する複数設問）で、ある設問の正解選択肢にしかない内容語が、
   同じセット／文書の別の設問の stem・選択肢（とりわけ別設問の「正解」）に
   そのまま出現していないかを、語単位で機械的に洗い出す。

   ── なぜ要るか ──────────────────────────────────────────────
   CLAUDE.md にある通り、TOEIC は設問・選択肢を先読みできるため、
   「後の設問が前の設問の答えを漏らす」型の欠陥はそのまま得点に化ける
   （例: Q66 の stem が "the discrepancy in Electronics" と書いて
   Q65 の答え〈ゾーン〉を音声なしで確定させた）。この型は
   「自然だ／不自然だ」を読む監査では見落としやすく、
   「stem 単位」の照合（文全体の類似度など）でも捕まらない
   （実例の語彙一致度は Jaccard 0.27 で n-gram 照合にもかからなかった）。
   一方で「正解選択肢だけが持つ内容語が、別設問に一語そのまま出ている」
   という条件に絞れば機械で拾える——これはレビュー役の試作で確認済みで、
   Vol.4 Part 7 の致命的3件（No.153→154 の caterer/catering、
   No.190→186 の Large、No.197→199 の live-streamed）を数秒で特定した。

   ── 精度について（重要） ────────────────────────────────────
   このツールは「読む人のための一次ふるい」であり、合否判定の道具ではない。
   試作の実績では1巻あたり25〜37件を出し、実害があるのはそのうち3件程度
   （的中率1割前後）。ほとんどは「セットの題材そのものの語彙が自然に
   繰り返されているだけ」の誤検知（例: ケータリング業者についてのセットで
   複数設問に caterer 系の語が出るのは、むしろ自然）。
   このツールにできるのは「疑わしい順に並べる」ことまでで、
   「これは欠陥だ」の最終判断は必ず人が読んで行うこと。

   ── validate.mjs に入れなかった理由 ─────────────────────────
   validate.mjs は「エラー0・警告0を確認する」運用が前提（CLAUDE.md）。
   このツールをそこに混ぜると、全巻で100件超の warning が常時出て
   その運用が成立しなくなる。的中率が低いまま強制チェックにすると
   「どうせ大半が誤検知」という理由で無視される道具になり、
   本当に危険な1件も埋もれる。だから独立ツールのまま維持する。

   ── 検出方向 A・B について（2026-08-28 追加） ─────────────────
   当初はこの型しか見ていなかった（方向A＝出所を「正解」に限定）:
     A：設問X の正解選択肢だけにある語 → 設問Y の stem／選択肢に出現
   これでは次の型を見逃す。レビュー役が vol6 Part 7 の No.167 を実際に
   人手で読んで見つけた実例:
     No.167 の【誤答】(C) に "once Grimsby confirms the figure by phone"
     と書かれており、これが No.168 の正解「もう一度電話する」を
     先読みで示唆していた。出所が正解ではなく誤答だったため方向Aでは
     ヒットせず、機械では拾えなかった。
   これを埋めるため方向Bを追加した:
     B：設問X のいずれかの選択肢（正解・誤答を問わない）に出る語
        → 設問Y の正解選択肢だけにある語
   A・B は同じ (設問X, 設問Y) の組を対象にするが、A は X 側の
   「正解限定の語」を出所条件にし、B は Y 側の「正解限定の語」を
   到達条件にする（見ている方向が逆）。同じ (X, Y, 語) の組が両方の
   条件を満たすことがあるため、その場合は A を優先し B 側では二重に
   報告しない。出力の矢印は A が「→」（X の正解語が Y に出現）、
   B が「←」（Y の正解語が X の選択肢に出現）で区別する。
   B は出所が誤答でもよい分、A より誤検知が増えやすい。既存の
   順位づけ（漏れ先が正解＞stem＞誤答／固有名詞・数値は加点／
   本文頻出語は減点）に加え、B では「出所が X の正解選択肢だった場合」
   にも加点する（正解どうしが語を共有しているほうが危険なため）。
   なお vol6 No.167→168 の実例そのものは、誤答側が "phone"、正解側が
   "Call" と語形が違うため、この語単位の一致（語幹の簡易吸収のみ）
   では検出できない。この1例のために語幹正規化を緩めると誤検知が
   爆発するため、あえて緩めていない（無理に検出しない）。

   ── 使い方 ──────────────────────────────────────────────────
     node tools/setleak.mjs                 全体（模試 + ドリル）を検査
     node tools/setleak.mjs vol4             ファイル名に "vol4" を含む対象だけに絞る
     node tools/setleak.mjs --top 20         スコア上位20件だけ表示
     node tools/setleak.mjs vol4 --top 10    絞り込みと --top は併用できる
     node tools/setleak.mjs --extra <ファイル…>
                                       registry.js に未登録のファイルも検査対象に追加する
                                       （UNITS を配列で export していること。validate.mjs と同じ流儀）
     node tools/setleak.mjs vol4 --extra a.js b.js
                                       絞り込み・--top と --extra は併用できる
                                       （--extra より前の引数だけを絞り込み・--top として扱う）

   データは一切書き換えない・読むだけ。
   ============================================================= */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'assets/data');

const { MOCK_META, DRILL_FILES } = await import(path.join(DATA, 'registry.js'));

const KEYS = ['A', 'B', 'C', 'D', 'E'];

/* ── コマンドライン引数（validate.mjs と同じ流儀） ──────────
   最初の非フラグ引数 = 絞り込み文字列（ファイルキーの部分一致）
   --top <n>          = スコア上位 n 件だけ表示
   --extra <ファイル…>  = registry.js 未登録のファイルを追加検査対象にする
                          （それ以降の引数はすべてファイルパスとして扱う）        */
const rawArgs = process.argv.slice(2);
const extraAt = rawArgs.indexOf('--extra');
const mainArgs = extraAt === -1 ? rawArgs : rawArgs.slice(0, extraAt);
const extraArgs = extraAt === -1 ? [] : rawArgs.slice(extraAt + 1);

let filterArg = null;
let topN = Infinity;
for (let i = 0; i < mainArgs.length; i++) {
  const a = mainArgs[i];
  if (a === '--top') { const v = Number(mainArgs[++i]); if (Number.isFinite(v) && v > 0) topN = Math.floor(v); }
  else if (!a.startsWith('--')) filterArg = a;
}
const norm0 = (s) => String(s).toLowerCase();
const hitKey = (s) => !filterArg || norm0(s).includes(norm0(filterArg));

/** --extra のファイル指定を実パスに解決する（validate.mjs と同じ解決順） */
function resolveExtraPath(p) {
  if (path.isAbsolute(p) && fs.existsSync(p)) return p;
  const candidates = [
    path.resolve(process.cwd(), p),
    path.join(DATA, p),
    path.join(DATA, 'drills', p),
    path.join(DATA, 'mocks', p),
  ];
  for (const c of candidates) if (fs.existsSync(c)) return c;
  return candidates[0];
}

/* ── 対象ファイルの読み込み ───────────────────────────────── */
const targets = [];   // { key, units }

for (const meta of MOCK_META) {
  const key = `mocks/${meta.id}.js`;
  try {
    const mod = await meta.loader();
    targets.push({ key, units: mod.UNITS });
  } catch (e) {
    console.error(`[setleak] ${key} 読み込み失敗 — ${e.message}`);
  }
}
for (const loader of DRILL_FILES) {
  const m = loader.toString().match(/import\(['"](.+?)['"]\)/);
  const key = m ? `drills/${path.basename(m[1])}` : '(不明なドリルファイル)';
  try {
    const mod = await loader();
    targets.push({ key, units: mod.UNITS });
  } catch (e) {
    console.error(`[setleak] ${key} 読み込み失敗 — ${e.message}`);
  }
}
for (const p of extraArgs) {
  const resolved = resolveExtraPath(p);
  const key = `extra/${path.relative(DATA, resolved).startsWith('..') ? path.basename(resolved) : path.relative(DATA, resolved)}`;
  try {
    const mod = await import(pathToFileURL(resolved).href);
    if (!Array.isArray(mod.UNITS)) { console.error(`[setleak] ${key}: UNITS が配列でエクスポートされていない（--extra）`); continue; }
    targets.push({ key, units: mod.UNITS });
  } catch (e) {
    console.error(`[setleak] ${key} --extra 読み込み失敗（指定: "${p}"） — ${e.message}`);
  }
}

/* ── 語の正規化・語幹の簡易統一 ───────────────────────────────
   厳密な形態素解析はしない（見出し語が不揃いでも「疑わしい」を拾えれば十分な
   一次ふるいのため）。ただし CLAUDE.md の実例に caterer/catering のような
   派生語の対があったため、代表的な語尾だけは吸収する:
     ches/shes/sses/xes/zes → 語幹＋子音（boxes→box, watches→watch）
     ies                    → y（companies→company）
     ing / ers / er / ed / s（ss は除く）                                  */
function stem(word) {
  const w = word, n = w.length;
  if (n >= 5 && /(ches|shes|sses|xes|zes)$/.test(w)) return w.slice(0, n - 2);
  if (n >= 5 && w.endsWith('ies')) return w.slice(0, n - 3) + 'y';
  if (n >= 5 && w.endsWith('ing')) return w.slice(0, n - 3);
  if (n >= 5 && w.endsWith('ers')) return w.slice(0, n - 3);
  if (n >= 4 && w.endsWith('er') && !w.endsWith('eer')) return w.slice(0, n - 2);
  if (n >= 4 && w.endsWith('ed')) return w.slice(0, n - 2);
  if (n >= 4 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, n - 1);
  return w;
}

const STOP = new Set(`
a an the of to in on for at by with from and or but not is are was were be been being
has have had do does did will would could should may might can must shall it its it's
he she they them his her their this that these those what which who whom when where why
how as if then than more most less least all any some no nor so such about into over under
after before during until up down out off other another each every both same own very
much many one two three four five six seven eight nine ten also just only even still yet
already because since while though although however therefore thus hence between among
within without against toward towards upon per via across around above below behind
beyond near along throughout please thank thanks you your yours we our ours i me my mine
s t don't
`.trim().split(/\s+/));

/** 文が「複数語からなる完結した文」らしいか（選択肢が単語・短い名詞句だけの
   列挙〈Small/Medium/Large/Extra-large 等〉なのか、通常の文なのかを見分ける）。
   これで「文頭だから大文字」なだけの語と、短い列挙の中の1語（型番的に扱ってよい）とを区別する。 */
function looksLikeSentenceText(text) {
  if (typeof text !== 'string') return false;
  const t = text.trim();
  if (!t) return false;
  if (/[.!?]["')\]]?$/.test(t)) return true;
  return t.split(/\s+/).length >= 4;
}

/** raw トークン列を返す（大文字小文字・出現位置の情報を保ったまま） */
function tokenizeRaw(text) {
  if (typeof text !== 'string' || !text) return [];
  const sentenceCtx = looksLikeSentenceText(text);
  const out = [];
  for (const m of text.matchAll(/[A-Za-z0-9][A-Za-z0-9'-]*/g)) {
    const raw = m[0];
    const norm = raw.toLowerCase();
    if (STOP.has(norm)) continue;
    const isNum = /^[0-9]+$/.test(norm);
    if (isNum) { if (norm.length < 2) continue; }        // 単独の1桁数字は一般的すぎるので除外
    else if (norm.length <= 2) continue;                  // 短すぎる語は除外
    // 「複数語の文」の先頭語だけは、大文字であることが文法上自動なので
    // 固有名詞判定の材料にしない（下の isProperOrNumeric に渡す）。
    const atSentenceStart = sentenceCtx && m.index === 0;
    out.push({ raw, norm, key: isNum ? norm : stem(norm), atSentenceStart });
  }
  return out;
}

/** 固有名詞・数値・型番らしさ（一致が偶然でないことの目安）。
   文頭の1語だけが根拠の大文字化は除外する（"Process a refund…" の
   Process のような、単に文頭だから大文字なだけの語を誤って加点しないため）。 */
function isProperOrNumeric(tok) {
  const raw = tok.raw;
  if (/[0-9]/.test(raw)) return true;                                  // 数値・型番
  if (raw.length >= 2 && raw === raw.toUpperCase() && /[A-Z]/.test(raw)) return true; // 全部大文字（頭字語・型番）
  if (tok.atSentenceStart) return false;
  if (raw.length > 1 && /^[A-Z]/.test(raw) && raw !== raw.toUpperCase()) return true; // 大文字始まり（Large, Electronics …）
  return false;
}

/** doc / graphic / script などの任意のネスト構造を文字列に平坦化する
   （本文中の頻出語＝題材語彙のベースラインを取るためだけに使う。
    設問の stem・choices はここに含めない＝別途 tokenizeRaw で個別に見る） */
function flattenText(node) {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(flattenText).join(' ');
  if (typeof node === 'object') return Object.values(node).map(flattenText).join(' ');
  return '';
}
function unitBodyText(u) {
  if (u.kind === 'set') return flattenText(u.script);
  if (u.kind === 'doc') return flattenText(u.docs);
  return '';
}

/* ── スコアリング ─────────────────────────────────────────
   優先度を上げる材料:
     ・漏れ先が別設問の「正解」である（最も危険。No.190→No.186 の型）      … LOC_SCORE.answer
     ・漏れ先が別設問の「stem」である（先読みで必ず目に入る）             … LOC_SCORE.stem
     ・語が固有名詞・数値・型番である（一致が偶然でない）                … PROPER_BONUS
     ・一致した語が複数ある（同じ相手に対して2語以上一致）              … MULTI_BONUS
   優先度を下げる材料:
     ・その語が同じ文書・スクリプトの本文に頻出している（題材語彙）      … FREQ_PENALTY
     ・語が短い・一般的                                                … LENGTH_BONUS が小さいだけで自然に効く
   （閾値は実データ〈CLAUDE.md 記載の Vol.4 Part 7 の3件〉で
    スコア上位に来ることを確認して調整した。厳密な理論値ではない）        */
const LOC_SCORE = { answer: 100, stem: 55, choice: 26 };
const PROPER_BONUS = 38;
/* 方向B専用：出所（設問Xの選択肢）が X 自身の「正解」選択肢だった場合の加点。
   B の到達先は定義上つねに「設問Yの正解限定語」なので、A の LOC_SCORE.answer を
   基礎点にしたうえで、出所側も正解どうしの一致であれば追加で危険度を上げる。 */
const SRC_ANSWER_BONUS = 40;
function lengthBonus(word) { return Math.min(Math.max(word.length - 3, 0), 9) * 3; }
function freqPenalty(freq) { return freq <= 1 ? 0 : Math.min(freq - 1, 6) * 15; }

function locLabel(loc) {
  if (loc === 'answer') return '別設問の正解';
  if (loc === 'stem') return '別設問の stem';
  return '別設問の選択肢（非正解）';
}
/** 方向B用：出所（設問X側）のラベル。X の正解選択肢からの一致か、誤答からの一致か。 */
function srcLabelB(loc) {
  return loc === 'answer' ? '別設問の選択肢（正解）から' : '別設問の選択肢（誤答）から';
}

/* ── 検査本体 ────────────────────────────────────────────── */
const findings = [];   // { score, key, part, unitId, qNo, qLabel, peerNo, words:[{word,loc,isProper,bodyFreq}] }

for (const t of targets) {
  const { key, units } = t;
  if (!Array.isArray(units)) continue;
  for (const u of units) {
    if (u.kind !== 'set' && u.kind !== 'doc') continue;
    const qs = Array.isArray(u.questions) ? u.questions.filter(q => Array.isArray(q.choices) && q.choices.length >= 2) : [];
    if (qs.length < 2) continue;

    const bodyToks = tokenizeRaw(unitBodyText(u));
    const bodyFreq = new Map();
    for (const tk of bodyToks) bodyFreq.set(tk.key, (bodyFreq.get(tk.key) || 0) + 1);

    // 設問ごとに「正解選択肢だけが持つ語」を求めておく
    const onlyByQ = new Map();  // q -> [{key, raw, isProper}]
    for (const q of qs) {
      if (typeof q.answer !== 'number' || !q.choices[q.answer]) continue;
      const ansToks = tokenizeRaw(q.choices[q.answer]);
      const wrongKeys = new Set();
      q.choices.forEach((c, i) => { if (i !== q.answer) tokenizeRaw(c).forEach(tk => wrongKeys.add(tk.key)); });
      const map = new Map();
      for (const tk of ansToks) {
        if (wrongKeys.has(tk.key)) continue;
        if (!map.has(tk.key)) map.set(tk.key, { key: tk.key, raw: tk.raw, isProper: false });
        if (isProperOrNumeric(tk)) map.get(tk.key).isProper = true;
      }
      onlyByQ.set(q, [...map.values()]);
    }

    // (X, Y) 順序対ごとに、方向Aが既に報告した語キーを記録しておく
    // （方向Bで同じ (X, Y, 語) の組を二重報告しないため）。
    const qIndex = new Map(qs.map((qq, i) => [qq, i]));
    const pairKey = (a, b) => `${qIndex.get(a)}>${qIndex.get(b)}`;
    const aWordsByPair = new Map();   // pairKey(X,Y) -> Set(語key)

    /* ── 方向A（既存・変更なし）：設問Xの正解限定語 → 設問Yの stem／選択肢 ── */
    for (const q of qs) {
      const only = onlyByQ.get(q) || [];
      if (!only.length) continue;
      for (const peer of qs) {
        if (peer === q) continue;
        const peerStemToks = tokenizeRaw(peer.stem);
        const peerChoiceToks = (peer.choices || []).map(c => tokenizeRaw(c));

        const matches = [];   // { word, key, loc, isProper, bodyFreq, score }
        for (const w of only) {
          let bestLoc = null;
          if (peerStemToks.some(tk => tk.key === w.key)) bestLoc = 'stem';
          peerChoiceToks.forEach((toks, i) => {
            if (!toks.some(tk => tk.key === w.key)) return;
            const loc = (i === peer.answer) ? 'answer' : 'choice';
            // answer > stem > choice の優先度で一番強い方を残す
            if (!bestLoc) bestLoc = loc;
            else if (loc === 'answer') bestLoc = 'answer';
            else if (loc === 'stem' && bestLoc !== 'answer') bestLoc = 'stem';
          });
          if (!bestLoc) continue;
          const freq = bodyFreq.get(w.key) || 0;
          const score = LOC_SCORE[bestLoc] + (w.isProper ? PROPER_BONUS : 0) + lengthBonus(w.key) - freqPenalty(freq);
          matches.push({ word: w.raw, key: w.key, loc: bestLoc, isProper: w.isProper, bodyFreq: freq, score });
        }
        if (!matches.length) continue;

        aWordsByPair.set(pairKey(q, peer), new Set(matches.map(m => m.key)));

        matches.sort((a, b) => b.score - a.score);
        const top = matches[0];
        const pairScore = Math.max(1, top.score + (matches.length - 1) * 14);

        const rationaleParts = [`漏れ先が${locLabel(top.loc)}`];
        if (top.isProper) rationaleParts.push('固有名詞/数値/型番のため加点');
        if (matches.length > 1) rationaleParts.push(`一致語${matches.length}件`);
        if (top.bodyFreq >= 2) rationaleParts.push(`本文に${top.bodyFreq}回出現のため減点`);
        else rationaleParts.push('本文では頻出していない');

        findings.push({
          dir: 'A',
          score: pairScore,
          key, part: u.part, kind: u.kind, unitId: u.id,
          qNo: q.no ?? q.id, qAns: KEYS[q.answer] || '?',
          peerNo: peer.no ?? peer.id,
          words: matches.map(m => `"${m.word}"→${locLabel(m.loc)}`),
          rationale: rationaleParts.join(' / '),
        });
      }
    }

    /* ── 方向B（新規）：設問Xのいずれかの選択肢（正解・誤答問わず）
       → 設問Yの正解限定語。CLAUDE.md の vol6 No.167(誤答)→No.168(正解) の実例に対応。 */
    for (const Y of qs) {
      const onlyY = onlyByQ.get(Y) || [];
      if (!onlyY.length) continue;
      for (const X of qs) {
        if (X === Y) continue;
        const alreadyA = aWordsByPair.get(pairKey(X, Y)); // 方向Aと同じ (X,Y,語) の重複防止
        const xChoiceToks = (X.choices || []).map(c => tokenizeRaw(c));

        const matches = [];   // { word, loc, isProper, bodyFreq, score }
        for (const w of onlyY) {
          if (alreadyA && alreadyA.has(w.key)) continue;
          let srcLoc = null;   // 'answer' | 'distractor'（Xのどこから見つかったか）
          xChoiceToks.forEach((toks, i) => {
            if (!toks.some(tk => tk.key === w.key)) return;
            const loc = (i === X.answer) ? 'answer' : 'distractor';
            if (srcLoc !== 'answer') srcLoc = loc;   // 正解からの一致を優先して残す
          });
          if (!srcLoc) continue;
          const freq = bodyFreq.get(w.key) || 0;
          const score = LOC_SCORE.answer + (w.isProper ? PROPER_BONUS : 0) + lengthBonus(w.key) - freqPenalty(freq)
            + (srcLoc === 'answer' ? SRC_ANSWER_BONUS : 0);
          matches.push({ word: w.raw, loc: srcLoc, isProper: w.isProper, bodyFreq: freq, score });
        }
        if (!matches.length) continue;

        matches.sort((a, b) => b.score - a.score);
        const top = matches[0];
        const pairScore = Math.max(1, top.score + (matches.length - 1) * 14);

        const rationaleParts = [`漏れ元が${srcLabelB(top.loc)}（Yの正解限定語を含む）`];
        if (top.loc === 'answer') rationaleParts.push('出所が別設問の正解選択肢のため加点（正解どうしの語彙一致）');
        if (top.isProper) rationaleParts.push('固有名詞/数値/型番のため加点');
        if (matches.length > 1) rationaleParts.push(`一致語${matches.length}件`);
        if (top.bodyFreq >= 2) rationaleParts.push(`本文に${top.bodyFreq}回出現のため減点`);
        else rationaleParts.push('本文では頻出していない');

        findings.push({
          dir: 'B',
          score: pairScore,
          key, part: u.part, kind: u.kind, unitId: u.id,
          qNo: X.no ?? X.id, qAns: KEYS[X.answer] || '?',
          peerNo: Y.no ?? Y.id, peerAns: KEYS[Y.answer] || '?',
          words: matches.map(m => `"${m.word}"←${srcLabelB(m.loc)}`),
          rationale: rationaleParts.join(' / '),
        });
      }
    }
  }
}

/* ── 出力 ─────────────────────────────────────────────────── */
const shown = findings
  .filter(f => hitKey(f.key))
  .sort((a, b) => b.score - a.score)
  .slice(0, topN);

console.log(`setleak: セット内・文書内の相互ヒント検出（試作を土台にした独立ツール。合否判定には使わない）`);
console.log(`検査対象: 模試 ${MOCK_META.length} 回 / ドリル ${DRILL_FILES.length} ファイル${extraArgs.length ? ` / --extra ${extraArgs.length} ファイル` : ''}${filterArg ? ` / 絞り込み: "${filterArg}"` : ''}\n`);

if (!shown.length) {
  console.log('該当なし。');
} else {
  shown.forEach((f, i) => {
    const headline = f.dir === 'B'
      ? `[B] No.${f.qNo} → No.${f.peerNo}(正解${f.peerAns}を示唆)`
      : `No.${f.qNo}(正解${f.qAns}) → No.${f.peerNo}`;
    console.log(`[${String(i + 1).padStart(3)}] score=${f.score.toFixed(1)}  ${f.key}  Part${f.part}(${f.kind})  ${headline}  ${f.words.join(', ')}`);
    console.log(`      根拠: ${f.rationale}`);
  });
}

const totalAll = findings.length;
const totalMatched = findings.filter(f => hitKey(f.key)).length;
console.log(`\n計 ${totalAll} 件中 ${totalMatched} 件が絞り込みに一致${topN < Infinity ? `、上位 ${shown.length} 件を表示` : ''}。`);
console.log('※ このツールは疑わしい順に並べる一次ふるいであり、上から順に人が読んで判断すること。誤検知（題材語彙の自然な繰り返し）が大半を占める。');
