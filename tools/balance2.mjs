#!/usr/bin/env node
/* =============================================================
   balance2.mjs — 正解位置（A/B/C/D）を平準化する codemod

   1. 対象ファイル群を動的 import して「実行時の値」（part, choices, answer, why）を得る
   2. 同じファイルを acorn で構文解析し、choices/why 配列のソース上の位置（range）を得る
   3. 実行時の設問列とソース上の設問列を出現順で突き合わせる
      （件数が合わなければそのファイルは中断してエラー報告し、他のファイルは続行する）
   4. --by part（既定）: --group で束ねた範囲の中で、パートごとに正解位置の分布を数え、
      均等に近づけるよう入れ替え対象を選ぶ。模試はパート単位で本番と同じ通し受験になるため、
      このモードのまま扱う（挙動は変えない）。
      --by topic: 論点（topics）ごとに正解位置の分布を数え、均等に近づける。
      ドリルは論点ごとに連続して出題されるため、パート単位ではなく論点単位で
      均っていないと「迷ったらこの記号」という偏りを学習してしまう。
      論点の判定は registry.js の drillCounts() と同じ規則
      （q.topics?.length ? q.topics : (u.topics||[])）を用いる。
      1 問が複数の論点を持つ場合、その設問を入れ替えると複数論点の分布が同時に動く。
      --by topic では「入れ替えると別の論点をより悪化させる」候補は選ばない
      （balanceByTopic 参照）。厳密な最適化ではなく貪欲法だが、Pareto改善のみを
      許すことで「片方を直して別を悪化させる」ことを避ける。
   5. 入れ替えは「同じ設問の中で」選択肢と why を対で行う
      （choices[oldIdx] <-> choices[newIdx]、why も同様、answer を書き換える）。
      ソース文字列の該当範囲だけを置換するので、整形・コメント・エスケープは保たれる
   6. 数値・日付・曜日・時刻・通し記号（Bay 1 等）・Part 7 の文挿入位置（[1]〜[4]）は
      順序に意味があるため自動的に除外する。図表問題（論点 graphic）の選択肢は
      図表の値（時刻・料金・号数等）と対応しており、文字パターンだけでは
      順序性を検出しきれないことがあるため（例: "9:00" は AM/PM 表記がなく
      数値・時刻の正規表現に掛からない）、論点 graphic に属する設問は無条件で除外する
   7. 解説（exp）や why が (A) 等の記号で選択肢を参照している設問も除外する
      （入れ替えると解説が壊れるため）
   8. ja 訳が "(A) ..." のように正解の記号だけを一意に含む文字列の場合は、その記号も
      新しい正解位置に合わせて書き換える。記号参照が曖昧な場合は安全側で除外する。
      ja が choices/why と同じ並びの配列（各要素が "(対応する記号) 訳文" の形。
      Part 1 の模試30問と一部ドリルが該当）の場合は、choices/why と対で要素ごと
      入れ替えたうえで、各要素先頭の記号を「その位置に固定の記号」へ振り直す。
      各要素が自分の位置と同じ記号で始まっている、という前提が崩れている設問は
      安全側で除外する。

   使い方: node balance2.mjs [--write] [--by part|topic] --group <名前> <ファイル…>
   既定は dry-run、既定モードは --by part。--write を付けたときだけファイルを書き換える。
   ============================================================= */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse } from 'acorn';

const LETTERS = ['A', 'B', 'C', 'D'];
const PART_NAMES = {
  1: 'Part 1（写真）', 2: 'Part 2（応答）', 3: 'Part 3（会話）', 4: 'Part 4（トーク）',
  5: 'Part 5（単文穴埋め）', 6: 'Part 6（長文穴埋め）', 7: 'Part 7（読解）',
};

/* ── 汎用 AST 走査 ─────────────────────────────────────────
   acorn-walk は未導入のため、range 情報を持つノードを総当たりで集め、
   あとで start 位置で並べ替えることでソース上の出現順を再現する。       */
function walkAst(node, visit) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) { for (const n of node) walkAst(n, visit); return; }
  if (typeof node.type === 'string') visit(node);
  for (const key in node) {
    if (key === 'type' || key === 'start' || key === 'end' || key === 'loc' || key === 'range') continue;
    const v = node[key];
    if (v && typeof v === 'object') walkAst(v, visit);
  }
}

/** ソース中から「choices と answer を両方持つオブジェクトリテラル」を出現順に集める。
 *  ヘルパ関数呼び出し形式（c: [...], a: 0, w: [...]）と、
 *  素のオブジェクトリテラル形式（choices: [...], answer: 0, why: [...]）の両方に対応する。
 *  choices/answer の「値」の AST 種別まで見て判定するので、
 *  ヘルパ関数定義そのもの（choices: o.c のような代入）は自然に除外される。          */
function extractCandidates(ast) {
  const list = [];
  walkAst(ast, (node) => {
    if (node.type !== 'ObjectExpression') return;
    const props = {};
    for (const p of node.properties) {
      if (p.type !== 'Property' || p.computed) continue;
      const key = p.key.type === 'Identifier' ? p.key.name
        : p.key.type === 'Literal' ? String(p.key.value)
          : null;
      if (key) props[key] = p.value;
    }
    const choicesNode =
      (props.choices && props.choices.type === 'ArrayExpression') ? props.choices :
        (props.c && props.c.type === 'ArrayExpression') ? props.c : null;
    const answerNode =
      (props.answer && props.answer.type === 'Literal' && typeof props.answer.value === 'number') ? props.answer :
        (props.a && props.a.type === 'Literal' && typeof props.a.value === 'number') ? props.a : null;
    if (!choicesNode || !answerNode) return;
    const whyNode =
      (props.why && props.why.type === 'ArrayExpression') ? props.why :
        (props.w && props.w.type === 'ArrayExpression') ? props.w : null;
    const expNode =
      (props.exp && props.exp.type === 'Literal') ? props.exp :
        (props.e && props.e.type === 'Literal') ? props.e : null;
    const jaNode = (props.ja && (props.ja.type === 'Literal' || props.ja.type === 'ArrayExpression')) ? props.ja : null;
    list.push({ objNode: node, choicesNode, answerNode, whyNode, expNode, jaNode });
  });
  list.sort((a, b) => a.objNode.start - b.objNode.start);
  return list;
}

/** モジュールの exports から「設問ユニットの配列」を 1 つだけ選ぶ。
 *  ファイルごとに export 名が違う（L1 / L2A / UNITS ...）ため、
 *  配列を値に持つ export を探す。複数見つかった場合は要素数最大のものを採る。 */
function pickArrayExport(mod) {
  const entries = Object.entries(mod).filter(([, v]) => Array.isArray(v));
  if (entries.length === 0) throw new Error('配列の export が見つかりません');
  entries.sort((a, b) => b[1].length - a[1].length);
  return entries[0][1];
}

function flattenQuestions(units) {
  const out = [];
  for (const u of units) {
    for (const q of (u.questions || [])) out.push({ part: u.part, unitId: u.id, unitTopics: u.topics || [], q });
  }
  return out;
}

/** 設問の「実効論点」を決める。registry.js の drillCounts() と同じ規則：
 *  設問自身が topics を持てばそれを、なければユニットの topics を使う。 */
function effectiveTopics(q, unitTopics) {
  return q.topics?.length ? q.topics : (unitTopics || []);
}

/* ── 順序に意味がある選択肢の検出 ─────────────────────────── */
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];

function isOrderedChoices(choices) {
  const texts = choices.map(c => String(c).trim()).filter(t => t.length > 0);
  if (texts.length < 2) return false;

  // Part 7 文挿入問題の位置マーカー（[1]〜[4]）。insertAt と対応しており並べ替え不可。
  if (texts.every(t => /^\[\d+\]$/.test(t))) return true;

  // 数値・金額・パーセント
  const numRe = /^[£$€¥]?\s*\d[\d,]*(\.\d+)?\s*(%|percent|dollars?|pounds?|euros?)?$/i;
  if (texts.every(t => numRe.test(t))) return true;

  // 曜日・月（単独の語としてどれかを含む場合のみ）
  if (texts.every(t => WEEKDAYS.some(d => new RegExp(`\\b${d}\\b`).test(t)))) return true;
  if (texts.every(t => MONTHS.some(m => new RegExp(`\\b${m}\\b`).test(t)))) return true;

  // 時刻（AM/PM 付き）
  const timeRe = /^\d{1,2}(:\d{2})?\s*(A\.M\.|P\.M\.|am|pm)\.?$/i;
  if (texts.every(t => timeRe.test(t))) return true;

  // 時刻（AM/PM なし、24時間表記等。図表問題（Look at the graphic）の
  // 選択肢に多い形で、上の timeRe には掛からないため別途検出する）
  const bareTimeRe = /^\d{1,2}:\d{2}$/;
  if (texts.every(t => bareTimeRe.test(t))) return true;

  // 日付（Month Day / Day Month）
  const monthAlt = MONTHS.join('|');
  const dateRe = new RegExp(`^((${monthAlt})\\s+\\d{1,2}(st|nd|rd|th)?|\\d{1,2}(st|nd|rd|th)?\\s+(${monthAlt}))$`, 'i');
  if (texts.every(t => dateRe.test(t))) return true;

  // 通し記号（Bay 1 / Room 3 / Gate A のように「共通の接頭語 + 番号or文字」）
  const serialRe = /^([A-Za-z]+(?:\s[A-Za-z]+)?)\s+([A-Z]|\d+)$/;
  const matches = texts.map(t => t.match(serialRe));
  if (matches.every(Boolean)) {
    const prefixes = new Set(matches.map(m => m[1].toLowerCase()));
    if (prefixes.size === 1) return true;
  }

  return false;
}

/* ── 1 設問ぶんの除外判定 ─────────────────────────────────── */
function classifyEntry(entry, expectedK) {
  const reasons = [];
  const { choicesArr, whyArr, expText, jaText, jaNode, answerIdx, topics } = entry;

  if (expectedK != null && choicesArr.length !== expectedK) {
    reasons.push(`選択肢数(${choicesArr.length})がこのパートの標準(${expectedK})と異なる`);
  }
  if (Array.isArray(topics) && topics.includes('graphic')) {
    reasons.push('図表問題（論点:graphic）の選択肢は図表の値と対応するため除外');
  }
  if (!whyArr || whyArr.length !== choicesArr.length) {
    reasons.push('why の要素数が選択肢数と一致しない');
  }
  if (isOrderedChoices(choicesArr)) {
    reasons.push('選択肢が数値・日付・曜日・通し記号など順序に意味がある');
  }
  if (typeof expText === 'string' && /\([A-D]\)/.test(expText)) {
    reasons.push('解説(exp)が選択肢記号(A)〜(D)を参照している');
  }
  if (Array.isArray(whyArr) && whyArr.some(w => typeof w === 'string' && /\([A-D]\)/.test(w))) {
    reasons.push('why が他の選択肢記号(A)〜(D)を参照している');
  }

  let jaPlan = null;
  if (typeof jaText === 'string') {
    const letters = [...jaText.matchAll(/\(([A-D])\)/g)].map(m => m[1]);
    if (letters.length > 0) {
      const oldLetter = LETTERS[answerIdx];
      if (letters.every(l => l === oldLetter)) {
        jaPlan = { kind: 'scalar', oldLetter };
      } else {
        reasons.push('ja訳が現在の正解以外の選択肢記号にも言及しており安全に書き換えられない');
      }
    }
  } else if (Array.isArray(jaText)) {
    // 配列形式の ja（choices/why と同じ並びで各要素が "(対応する記号) 訳文" の形。
    // Part 1 の模試30問とドリルの一部が該当）。choices/why と対で入れ替えたうえで、
    // 各要素の先頭の記号は「その位置に固定の記号」に振り直す（内容ではなく位置の表示のため）。
    // 前提（各要素が自分の位置と同じ記号で始まる）が崩れている場合は安全側で除外する。
    if (jaText.length !== choicesArr.length) {
      reasons.push('ja訳(配列)の要素数が選択肢数と一致しない');
    } else if (!jaNode || jaNode.type !== 'ArrayExpression' ||
      jaNode.elements.length !== jaText.length ||
      jaNode.elements.some(el => !el || el.type !== 'Literal' || typeof el.value !== 'string')) {
      reasons.push('ja訳(配列)のソース表現が単純な文字列リテラルの並びではないため安全に書き換えられない');
    } else if (!jaText.every((t, i) => typeof t === 'string' && t.startsWith(`(${LETTERS[i]})`))) {
      reasons.push('ja訳(配列)の各要素の記号が対応する選択肢位置と一致しないため安全に書き換えられない');
    } else {
      jaPlan = { kind: 'array' };
    }
  }
  return { reasons, jaPlan };
}

/* ── ファイル単位の読み込み・突き合わせ ───────────────────── */
async function processFile(filePath) {
  const abs = path.resolve(filePath);
  let source;
  try {
    source = fs.readFileSync(abs, 'utf8');
  } catch (e) {
    return { file: filePath, error: `読み込みに失敗しました: ${e.message}` };
  }

  let ast;
  try {
    ast = parse(source, { ecmaVersion: 'latest', sourceType: 'module' });
  } catch (e) {
    return { file: filePath, error: `構文解析に失敗しました: ${e.message}` };
  }
  const candidates = extractCandidates(ast);

  let mod;
  try {
    mod = await import(pathToFileURL(abs).href);
  } catch (e) {
    return { file: filePath, error: `import に失敗しました: ${e.message}` };
  }

  let unitsRuntime;
  try {
    unitsRuntime = pickArrayExport(mod);
  } catch (e) {
    return { file: filePath, error: e.message };
  }

  const runtimeQs = flattenQuestions(unitsRuntime);
  if (runtimeQs.length !== candidates.length) {
    return {
      file: filePath,
      error: `設問数が一致しません（実行時 ${runtimeQs.length} 件 / AST上の設問候補 ${candidates.length} 件）。` +
        '対応していないデータ形式の可能性があるため、このファイルはスキップします。',
    };
  }

  const entries = candidates.map((c, i) => {
    const rt = runtimeQs[i];
    const q = rt.q;
    return {
      file: filePath, source,
      part: rt.part, unitId: rt.unitId,
      id: q.id, no: q.no,
      topics: effectiveTopics(q, rt.unitTopics),
      choicesArr: q.choices, whyArr: q.why, expText: q.exp, jaText: q.ja,
      answerIdx: q.answer,
      choicesNode: c.choicesNode, whyNode: c.whyNode, jaNode: c.jaNode, answerNode: c.answerNode,
      excluded: false, reasons: [], jaPlan: null, newPos: null,
    };
  });

  return { file: filePath, source, entries };
}

/* ── パート単位での平準化 ─────────────────────────────────── */
function countDist(entries, k, useNew) {
  const counts = new Array(k).fill(0);
  for (const e of entries) counts[useNew && e.newPos != null ? e.newPos : e.answerIdx]++;
  return counts;
}

function balancePart(entries, k) {
  if (!k) return [];
  const counts = new Array(k).fill(0);
  for (const e of entries) counts[e.answerIdx]++;
  const moves = [];
  let guard = entries.length * 4 + 8;
  while (guard-- > 0) {
    let maxPos = 0, minPos = 0;
    for (let i = 1; i < k; i++) {
      if (counts[i] > counts[maxPos]) maxPos = i;
      if (counts[i] < counts[minPos]) minPos = i;
    }
    if (counts[maxPos] - counts[minPos] <= 1) break; // ほぼ均等になったら終了
    const cand = entries.find(e => !e.excluded && e.newPos == null && e.answerIdx === maxPos);
    if (!cand) break; // 動かせる設問がもう残っていない（残差は「是正不可」として報告）
    cand.newPos = minPos;
    counts[maxPos]--; counts[minPos]++;
    moves.push(cand);
  }
  return moves;
}

/* ── 論点単位での平準化 ───────────────────────────────────────
   1 設問が複数の論点を持つ場合、その設問を動かすと「巻き込まれる」全ての論点の
   分布が同時に動く。そこで各候補を検討するとき、対象の論点以外の
   すべての共有論点について「動かした後の (max-min) がいまより悪化しない」
   「これまで 0 だった選択肢がなかったのに新たに 0 になる、ということが起きない」
   の両方を満たす場合だけ採用する（Pareto改善のみを許す貪欲法）。
   条件を満たす候補が 1 つも無い論点は「凍結」して次に偏りが大きい論点へ進み、
   どこかで移動が成立したら凍結を解除する（状態が変わって候補が生まれうるため）。
   厳密な最適化ではないが、「片方の論点を直して別の論点を悪化させる」ことは
   構造的に起きない。 */
function balanceByTopic(entries) {
  const byTopic = new Map(); // topic -> entries[]（1 設問が複数論点に属せば複数回登場する）
  for (const e of entries) for (const t of e.topics) {
    if (!byTopic.has(t)) byTopic.set(t, []);
    byTopic.get(t).push(e);
  }

  // 論点ごとの選択肢数（k）を多数決で決める（通常は所属パートの選択肢数と一致する）
  const kOfTopic = new Map();
  for (const [t, es] of byTopic) {
    const tally = new Map();
    for (const e of es) tally.set(e.choicesArr.length, (tally.get(e.choicesArr.length) || 0) + 1);
    let bestLen = null, bestCount = -1;
    for (const [len, cnt] of tally) if (cnt > bestCount) { bestCount = cnt; bestLen = len; }
    kOfTopic.set(t, bestLen);
  }

  const counts = new Map();
  for (const [t, es] of byTopic) {
    const k = kOfTopic.get(t);
    const c = new Array(k).fill(0);
    for (const e of es) if (e.answerIdx < k) c[e.answerIdx]++;
    counts.set(t, c);
  }
  const before = new Map();
  for (const [t, c] of counts) before.set(t, c.slice());

  const moves = [];
  const sideEffectSkips = []; // { topic, entry } 他論点の悪化を避けて見送った候補
  const frozen = new Set();
  let guard = entries.length * 8 + 64;

  while (guard-- > 0) {
    // 偏りが最大の（かつ凍結されていない）論点を選ぶ。0 回の選択肢がある論点を優先する。
    let target = null, targetScore = -1, targetHasZero = false;
    for (const [t, c] of counts) {
      if (frozen.has(t)) continue;
      const max = Math.max(...c), min = Math.min(...c);
      const score = max - min;
      if (score <= 1) continue; // ほぼ均等
      const hasZero = c.includes(0);
      const better = target == null
        || (hasZero && !targetHasZero)
        || (hasZero === targetHasZero && score > targetScore);
      if (better) { target = t; targetScore = score; targetHasZero = hasZero; }
    }
    if (target == null) break; // 残りは全論点が均等 or 凍結（＝これ以上は動かせない）

    const k = kOfTopic.get(target);
    const c = counts.get(target);
    let maxPos = 0, minPos = 0;
    for (let i = 1; i < k; i++) {
      if (c[i] > c[maxPos]) maxPos = i;
      if (c[i] < c[minPos]) minPos = i;
    }

    let chosen = null;
    for (const e of byTopic.get(target)) {
      if (e.excluded || e.newPos != null) continue;
      if (e.answerIdx !== maxPos) continue;
      if (e.choicesArr.length !== k) continue;

      let bad = false;
      for (const t2 of e.topics) {
        if (t2 === target) continue;
        const k2 = kOfTopic.get(t2);
        const c2 = counts.get(t2);
        if (e.answerIdx >= k2 || minPos >= k2) { bad = true; break; } // 選択肢数が違う論点には安全側で不採用
        const max2 = Math.max(...c2), min2 = Math.min(...c2);
        const hadZero2 = c2.includes(0);
        const sim = c2.slice();
        sim[e.answerIdx]--; sim[minPos]++;
        const newMax = Math.max(...sim), newMin = Math.min(...sim);
        const willZero2 = sim.includes(0);
        if ((newMax - newMin) > (max2 - min2)) { bad = true; break; }   // 他論点の偏りが拡大する
        if (!hadZero2 && willZero2) { bad = true; break; }              // 他論点に新たに 0 回が生まれる
      }
      if (bad) { sideEffectSkips.push({ topic: target, entry: e }); continue; }
      chosen = e;
      break;
    }

    if (!chosen) { frozen.add(target); continue; } // この論点は今は動かせない（除外規則 or 他論点への配慮のため）

    chosen.newPos = minPos;
    for (const t2 of chosen.topics) {
      const c2 = counts.get(t2);
      if (!c2) continue;
      if (chosen.answerIdx < c2.length) c2[chosen.answerIdx]--;
      if (minPos < c2.length) c2[minPos]++;
    }
    moves.push(chosen);
    frozen.clear(); // 状態が変わったので凍結していた論点も再検討する
  }

  const reports = [];
  for (const [t, es] of [...byTopic.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    reports.push({
      key: t, k: kOfTopic.get(t), entries: es,
      before: before.get(t), after: counts.get(t),
      moves: es.filter(e => e.newPos != null),
    });
  }

  // 最終的に残った偏り（是正不可）と、その理由の簡易診断
  const residual = [];
  for (const [t, c] of counts) {
    if (Math.max(...c) - Math.min(...c) <= 1) continue;
    const es = byTopic.get(t);
    const k = kOfTopic.get(t);
    let maxPos = 0; for (let i = 1; i < k; i++) if (c[i] > c[maxPos]) maxPos = i;
    const movable = es.filter(e => !e.excluded && e.newPos == null && e.answerIdx === maxPos);
    const reason = movable.length === 0
      ? '除外規則によりこれ以上動かせる設問がない（除外理由は上記の内訳を参照）'
      : '動かせる設問はあるが、動かすと他の論点をより悪化させるため見送った';
    residual.push({ topic: t, reason, movableCount: movable.length });
  }

  return { reports, sideEffectSkips, residual };
}

/* ── ソース書き換え（選択肢と why を対で入れ替え、answer と ja の記号を更新） ── */
function applyMoves(source, moves) {
  const reps = [];
  for (const e of moves) {
    const from = e.answerIdx, to = e.newPos;
    const cA = e.choicesNode.elements[from], cB = e.choicesNode.elements[to];
    reps.push({ start: cA.start, end: cA.end, text: source.slice(cB.start, cB.end) });
    reps.push({ start: cB.start, end: cB.end, text: source.slice(cA.start, cA.end) });
    if (e.whyNode) {
      const wA = e.whyNode.elements[from], wB = e.whyNode.elements[to];
      reps.push({ start: wA.start, end: wA.end, text: source.slice(wB.start, wB.end) });
      reps.push({ start: wB.start, end: wB.end, text: source.slice(wA.start, wA.end) });
    }
    reps.push({ start: e.answerNode.start, end: e.answerNode.end, text: String(to) });
    if (e.jaPlan?.kind === 'scalar' && e.jaNode) {
      const raw = source.slice(e.jaNode.start, e.jaNode.end);
      const newRaw = raw.split(`(${e.jaPlan.oldLetter})`).join(`(${LETTERS[to]})`);
      reps.push({ start: e.jaNode.start, end: e.jaNode.end, text: newRaw });
    } else if (e.jaPlan?.kind === 'array' && e.jaNode) {
      // choices/why と同じく position `from`/`to` の要素を丸ごと入れ替えたうえで、
      // 各要素先頭の記号は「移動後もその位置に固定の記号」に振り直す
      // （記号は内容ではなく位置を指すため、内容だけ動いて記号は据え置きになる）。
      const jA = e.jaNode.elements[from], jB = e.jaNode.elements[to];
      const relabel = (rawLiteral, newLetter) =>
        rawLiteral.replace(/^(['"`])\([A-D]\)/, (_m, q) => `${q}(${newLetter})`);
      reps.push({ start: jA.start, end: jA.end, text: relabel(source.slice(jB.start, jB.end), LETTERS[from]) });
      reps.push({ start: jB.start, end: jB.end, text: relabel(source.slice(jA.start, jA.end), LETTERS[to]) });
    }
  }
  // start 降順で右から左へ適用する（非重複区間なので、この順序なら他の置換のオフセットに影響しない）
  reps.sort((a, b) => b.start - a.start);
  let out = source;
  for (const r of reps) out = out.slice(0, r.start) + r.text + out.slice(r.end);
  return out;
}

/* ── レポート出力 ─────────────────────────────────────────── */
function letterDist(counts) {
  return counts.map((c, i) => `${LETTERS[i]}=${c}`).join(' ');
}

function printReport(group, groupReports, results, opts = {}) {
  const by = opts.by || 'part';
  console.log(`\n=== balance2 — グループ「${group}」 対象 ${results.length} ファイル（--by ${by}） ===`);

  const fileErrors = results.filter(r => r.error);
  const ok = results.filter(r => !r.error);
  console.log(`  読み込み成功: ${ok.length} 件 / 除外・エラー: ${fileErrors.length} 件`);

  const labelOf = (pr) => by === 'topic'
    ? `論点:${pr.key}${opts.topicName?.get(pr.key) ? `（${opts.topicName.get(pr.key)}）` : ''}`
    : (PART_NAMES[pr.key] || `Part ${pr.key}`);

  console.log(`\n--- ${by === 'topic' ? '論点別' : 'パート別'} 正解位置分布 ---`);
  for (const pr of groupReports) {
    const total = pr.entries.length;
    const excluded = pr.entries.filter(e => e.excluded).length;
    console.log(`\n[${labelOf(pr)}] 対象 ${total} 問（除外 ${excluded} 問 / 入れ替え候補 ${pr.moves.length} 件 / 選択肢数=${pr.k ?? '不明'}）`);
    console.log(`  変更前: ${letterDist(pr.before)}`);
    console.log(`  変更後: ${letterDist(pr.after)}${pr.moves.length === 0 ? '（変更なし）' : ''}`);
  }

  // 論点モードでは 1 設問が複数論点の moves リストに重複して現れうるので、
  // 「入れ替え提案」は実体（設問）で重複排除して 1 回だけ表示する。
  const seen = new Set();
  const uniqueMoves = [];
  for (const pr of groupReports) for (const e of pr.moves) {
    if (seen.has(e)) continue;
    seen.add(e);
    uniqueMoves.push(e);
  }
  if (uniqueMoves.length > 0) {
    console.log(`\n--- 入れ替え提案（実体 ${uniqueMoves.length} 件） ---`);
    for (const e of uniqueMoves) {
      const label = e.id || `${e.unitId}（AST順 不明ID）`;
      const noStr = e.no != null ? ` no.${e.no}` : '';
      const jaNote = e.jaPlan ? '（ja訳の(記号)表記も更新）' : '';
      const topicsNote = by === 'topic' && e.topics.length > 1 ? `（他論点: ${e.topics.join(',')}）` : '';
      console.log(`  [${path.basename(e.file)}] ${label}${noStr} (Part ${e.part}): ${LETTERS[e.answerIdx]} → ${LETTERS[e.newPos]}${jaNote}${topicsNote}`);
    }
  } else {
    console.log('\n入れ替えが必要な設問はありませんでした（既に均等）。');
  }

  const excludedEntries = [...new Set(groupReports.flatMap(p => p.entries))].filter(e => e.excluded);
  if (excludedEntries.length > 0) {
    const reasonCount = new Map();
    for (const e of excludedEntries) for (const r of e.reasons) reasonCount.set(r, (reasonCount.get(r) || 0) + 1);
    console.log(`\n--- 除外した設問（実体 ${excludedEntries.length} 問。理由の内訳は延べ件数） ---`);
    for (const [reason, count] of reasonCount) console.log(`  ${reason}: ${count} 件`);
  }

  if (by === 'topic') {
    const multiTopic = [...new Set(groupReports.flatMap(p => p.entries))].filter(e => e.topics.length > 1);
    const movedMulti = uniqueMoves.filter(e => e.topics.length > 1);
    console.log(`\n--- 複数論点にまたがる設問の扱い ---`);
    console.log(`  複数論点を持つ設問: ${multiTopic.length} 問（うち今回動かした: ${movedMulti.length} 問）`);
    if (opts.sideEffectSkips?.length) {
      const uniqSkipped = new Set(opts.sideEffectSkips.map(s => s.entry));
      console.log(`  「動かすと他の論点をより悪化させる」ため見送った候補: 延べ ${opts.sideEffectSkips.length} 件（実体 ${uniqSkipped.size} 問）`);
    } else {
      console.log('  「動かすと他の論点をより悪化させる」ため見送った候補: 0 件');
    }
    if (opts.residual?.length) {
      console.log(`\n--- 均せなかった論点（${opts.residual.length} 件） ---`);
      for (const r of opts.residual) {
        const label = opts.topicName?.get(r.topic) ? `${r.topic}（${opts.topicName.get(r.topic)}）` : r.topic;
        console.log(`  ${label}: ${r.reason}（動かせる候補 ${r.movableCount} 件）`);
      }
    } else {
      console.log('\n均せなかった論点: なし（全論点で max-min <= 1 を達成）');
    }
  }

  if (fileErrors.length > 0) {
    console.log(`\n--- 対応できなかったファイル（${fileErrors.length} 件） ---`);
    for (const r of fileErrors) console.log(`  ${r.file}: ${r.error}`);
  }
}

function printHelp() {
  console.log(`使い方: node balance2.mjs [--write] [--by part|topic] --group <名前> <ファイル…>

  正解位置（A/B/C/D）の偏りを平準化する codemod。
  既定は dry-run（差分と分布表を表示するだけ）。--write を付けると実際にファイルを書き換える。
  --by part（既定）はパート単位、--by topic は論点（topics）単位で分布を均す。
  模試はパート単位の通し受験なので --by part のまま使うこと。
  ドリルは論点ごとに連続出題されるため --by topic で均すこと。

  例:
    node tools/balance2.mjs --group vol1 assets/data/mocks/vol1-*.js
    node tools/balance2.mjs --by topic --group drills assets/data/drills/*.js

  注記:
    - Part 2（3択の音声応答）は、選択肢どうしに順序の制約がないため対象に含めている。
      数値・日付など個々の選択肢が順序を持つ場合は他パートと同じ除外ルールが働く。
    - 解説(exp)や why が (A)〜(D) のように選択肢記号を参照している設問、
      choices と why の件数が食い違う設問、数値・日付・曜日・時刻・通し記号・
      Part 7 文挿入位置（[1]〜[4]）は自動的に除外する。
    - 図表問題（論点 graphic）の選択肢は図表の値と対応するため無条件で除外する。
    - ja 訳に "(A)" のような記号が単独で含まれる場合は新しい正解位置に合わせて書き換える。
      記号参照が曖昧な場合は安全側で除外する。
      ja が choices/why と同じ並びの配列（各要素 "(対応する記号) 訳文"）の場合は、
      choices/why と対で要素ごと入れ替え、各要素先頭の記号は位置に合わせて振り直す。
      前提（各要素が自分の位置と同じ記号で始まる）が崩れている設問は安全側で除外する。
    - --by topic では、1 設問が複数論点を持つ場合に「動かすと他の論点をより
      悪化させる」入れ替えは行わない（Pareto改善のみを許す貪欲法）。`);
}

/** assets/data/topics.js から論点 ID→日本語名を読む（失敗しても致命的ではないので黙って諦める）。 */
async function loadTopicNames() {
  try {
    const p = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../assets/data/topics.js');
    const { TOPICS } = await import(pathToFileURL(p).href);
    return new Map(TOPICS.map(t => [t.id, t.name]));
  } catch {
    return new Map();
  }
}

async function main() {
  const argv = process.argv.slice(2);
  let write = false, group = null, by = 'part';
  const files = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--write') write = true;
    else if (a === '--group') group = argv[++i];
    else if (a === '--by') by = argv[++i];
    else if (a === '--help' || a === '-h') { printHelp(); return; }
    else files.push(a);
  }
  if (by !== 'part' && by !== 'topic') {
    console.error(`--by は "part" か "topic" のどちらかで指定してください（指定値: "${by}"）`);
    process.exitCode = 1;
    return;
  }
  if (!group || files.length === 0) {
    printHelp();
    process.exitCode = 1;
    return;
  }

  const results = [];
  for (const f of files) results.push(await processFile(f));

  const ok = results.filter(r => !r.error);
  if (ok.length === 0) {
    printReport(group, [], results, { by });
    process.exitCode = 1;
    return;
  }

  // パートごとの「標準の選択肢数」を、多数決で決める（除外判定に使う。
  // --by topic でも「このパートの標準選択肢数と違う」という判定基準は変わらない）
  const lenTally = new Map(); // part -> Map(len -> count)
  for (const r of ok) for (const e of r.entries) {
    const m = lenTally.get(e.part) || new Map();
    m.set(e.choicesArr.length, (m.get(e.choicesArr.length) || 0) + 1);
    lenTally.set(e.part, m);
  }
  const kOfPart = new Map();
  for (const [part, m] of lenTally) {
    let bestLen = null, bestCount = -1;
    for (const [len, cnt] of m) if (cnt > bestCount) { bestCount = cnt; bestLen = len; }
    kOfPart.set(part, bestLen);
  }

  const allEntries = ok.flatMap(r => r.entries);
  for (const e of allEntries) {
    const { reasons, jaPlan } = classifyEntry(e, kOfPart.get(e.part));
    e.excluded = reasons.length > 0;
    e.reasons = reasons;
    e.jaPlan = jaPlan;
  }

  let groupReports, reportOpts = { by };

  if (by === 'topic') {
    const { reports, sideEffectSkips, residual } = balanceByTopic(allEntries);
    groupReports = reports;
    reportOpts.sideEffectSkips = sideEffectSkips;
    reportOpts.residual = residual;
    reportOpts.topicName = await loadTopicNames();
  } else {
    const byPart = new Map();
    for (const e of allEntries) {
      if (!byPart.has(e.part)) byPart.set(e.part, []);
      byPart.get(e.part).push(e);
    }
    groupReports = [];
    for (const [part, entries] of [...byPart.entries()].sort((a, b) => a[0] - b[0])) {
      const k = kOfPart.get(part);
      const before = countDist(entries, k, false);
      const moves = balancePart(entries, k);
      const after = countDist(entries, k, true);
      groupReports.push({ key: part, k, entries, before, after, moves });
    }
  }

  printReport(group, groupReports, results, reportOpts);

  if (write) {
    console.log('\n--- 書き込み ---');
    for (const r of ok) {
      const moves = r.entries.filter(e => e.newPos != null);
      if (moves.length === 0) continue;
      const newSource = applyMoves(r.source, moves);
      try {
        parse(newSource, { ecmaVersion: 'latest', sourceType: 'module' }); // 書き換え後の構文を確認
      } catch (e) {
        console.log(`  [中断] ${r.file}: 書き換え後の構文解析に失敗したため書き込みを中止しました（${e.message}）`);
        continue;
      }
      fs.writeFileSync(path.resolve(r.file), newSource, 'utf8');
      console.log(`  [書き込み] ${r.file}（${moves.length} 件）`);
    }
  } else {
    console.log('\n(dry-run: --write を付けると実際にファイルを書き換えます)');
  }
}

main().catch(e => {
  console.error(e);
  process.exitCode = 1;
});
