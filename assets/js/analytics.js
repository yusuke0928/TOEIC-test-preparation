/* =============================================================
   analytics.js — 学習履歴の集計
   受験記録（attempts）だけから全指標を再計算する（問題データ非依存）。
   ============================================================= */

import { state } from './store.js';
import { extrapolate, PART_SIZE, SECTION } from './score.js';
import { ymd } from './charts.js';

/** 全解答レコードを平坦化 */
export function allResponses(filter = () => true) {
  const out = [];
  for (const a of state.attempts) {
    if (!filter(a)) continue;
    for (const it of a.items || []) {
      if (it.chosen == null) continue;         // 未解答は集計から除く
      out.push({ ...it, ts: a.ts, mode: a.mode, attemptId: a.id });
    }
  }
  return out;
}

const acc = (o, n) => (n ? o / n : 0);

/* ── 全体 ────────────────────────────────────────────── */
export function overall(sinceTs = 0) {
  const rs = allResponses(a => a.ts >= sinceTs);
  const ok = rs.filter(r => r.correct).length;
  const ms = rs.reduce((s, r) => s + (r.ms || 0), 0);
  return { n: rs.length, ok, acc: acc(ok, rs.length), ms, avgMs: rs.length ? ms / rs.length : 0 };
}

/* ── パート別 ────────────────────────────────────────── */
export function byPart(sinceTs = 0, mode = null) {
  const map = {};
  for (const p of [1, 2, 3, 4, 5, 6, 7]) map[p] = { ok: 0, n: 0, ms: 0 };
  for (const r of allResponses(a => a.ts >= sinceTs && (!mode || a.mode === mode))) {
    const p = r.part;
    if (!map[p]) continue;
    map[p].n++; map[p].ms += r.ms || 0;
    if (r.correct) map[p].ok++;
  }
  for (const p of Object.keys(map)) {
    map[p].acc = acc(map[p].ok, map[p].n);
    map[p].avgMs = map[p].n ? map[p].ms / map[p].n : 0;
  }
  return map;
}

/* ── 論点別 ──────────────────────────────────────────── */
export function byTopic(sinceTs = 0) {
  const map = {};
  for (const r of allResponses(a => a.ts >= sinceTs)) {
    for (const t of r.topics || []) {
      map[t] = map[t] || { ok: 0, n: 0, lastTs: 0 };
      map[t].n++; if (r.correct) map[t].ok++;
      map[t].lastTs = Math.max(map[t].lastTs, r.ts);
    }
  }
  for (const k of Object.keys(map)) map[k].acc = acc(map[k].ok, map[k].n);
  return map;
}

/* 「弱点」「安定」と呼んでよい水準。単に昇順・降順に並べただけでは
   正答率 100% が弱点に、20% が安定に入ってしまうため閾値で切る。 */
export const WEAK_MAX_ACC = 0.85;    // これ未満なら弱点
export const STRONG_MIN_ACC = 0.85;  // これ以上なら安定
export const STRONG_MIN_N = 5;

/** 弱点論点：一定数以上こなしていて、実際に取りこぼしている論点 */
export function weakTopics(minN = 4, limit = 8, maxAcc = WEAK_MAX_ACC) {
  return Object.entries(byTopic())
    .filter(([, v]) => v.n >= minN && v.acc < maxAcc)
    .map(([id, v]) => ({ id, ...v }))
    // 期待得点の上昇幅（取りこぼし数）が大きい順。n=1 の 0% が最優先にならないようにする
    .sort((a, b) => ((1 - b.acc) * b.n) - ((1 - a.acc) * a.n) || a.acc - b.acc)
    .slice(0, limit);
}

/** 得意論点：十分な問題数をこなしたうえで高い正答率を保てている論点 */
export function strongTopics(minN = STRONG_MIN_N, limit = 5, minAcc = STRONG_MIN_ACC) {
  return Object.entries(byTopic())
    .filter(([, v]) => v.n >= minN && v.acc >= minAcc)
    .map(([id, v]) => ({ id, ...v }))
    .sort((a, b) => b.acc - a.acc || b.n - a.n)
    .slice(0, limit);
}

/* ── スコア推移 ──────────────────────────────────────── */
/** 模試（フル）の換算スコア履歴 */
export function scoreHistory() {
  return state.attempts
    .filter(a => a.mode === 'mock' && a.scaled)
    .sort((a, b) => a.ts - b.ts)
    .map(a => ({ ts: a.ts, label: a.label, ...a.scaled, partial: !!a.partial }));
}

/** すべての演習を含めた「推定スコア」の推移（直近 N 問の移動窓） */
export function estimatedScoreTrend(window = 120, points = 14) {
  const rs = allResponses().sort((a, b) => a.ts - b.ts);
  if (rs.length < window / 2) return [];
  const out = [];
  const step = Math.max(1, Math.floor((rs.length - window) / (points - 1)) || 1);
  for (let end = Math.min(window, rs.length); end <= rs.length; end += step) {
    const slice = rs.slice(Math.max(0, end - window), end);
    const per = {};
    for (const r of slice) {
      per[r.part] = per[r.part] || { ok: 0, n: 0 };
      per[r.part].n++; if (r.correct) per[r.part].ok++;
    }
    const est = extrapolate(per);
    // 片方のセクションしか解いていない窓は、外挿値が実態とかけ離れるので描かない
    if (!est.estimable) continue;
    out.push({ ts: slice.at(-1).ts, total: est.total, L: est.L, R: est.R, n: end });
  }
  return out;
}

/** 現時点の推定スコア（直近 window 問） */
export function currentEstimate(window = 200) {
  const rs = allResponses().sort((a, b) => a.ts - b.ts).slice(-window);
  const per = {};
  for (const r of rs) {
    per[r.part] = per[r.part] || { ok: 0, n: 0 };
    per[r.part].n++; if (r.correct) per[r.part].ok++;
  }
  return { ...extrapolate(per), sample: rs.length, perPart: per };
}

/* ── 学習量・継続 ────────────────────────────────────── */
export function dailyCounts() {
  const c = {};
  for (const r of allResponses()) {
    const k = ymd(new Date(r.ts));
    c[k] = (c[k] || 0) + 1;
  }
  return c;
}

export function dailyAccuracy(days = 30) {
  const map = {};
  const since = Date.now() - days * 86400000;
  for (const r of allResponses(a => a.ts >= since)) {
    const k = ymd(new Date(r.ts));
    map[k] = map[k] || { ok: 0, n: 0 };
    map[k].n++; if (r.correct) map[k].ok++;
  }
  return Object.entries(map).sort().map(([d, v]) => ({ date: d, acc: acc(v.ok, v.n), n: v.n }));
}

/** 連続学習日数（今日または昨日を起点に遡る） */
export function streakDays() {
  const c = dailyCounts();
  const today = new Date(); today.setHours(0, 0, 0, 0);
  let d = new Date(today);
  if (!c[ymd(d)]) {
    d.setDate(d.getDate() - 1);
    if (!c[ymd(d)]) return 0;
  }
  let n = 0;
  while (c[ymd(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

export function todayCount() {
  return dailyCounts()[ymd(new Date())] || 0;
}

/** 学習した時間帯の分布 */
export function byHour() {
  const h = Array.from({ length: 24 }, (_, i) => ({ label: String(i), value: 0, hour: i }));
  for (const r of allResponses()) h[new Date(r.ts).getHours()].value++;
  const hi = Math.max(...h.map(x => x.value));
  h.forEach(x => { if (x.value === hi && hi > 0) x.hot = true; });
  return h;
}

/* ── 解答時間 ────────────────────────────────────────── */
/** パート別の平均解答時間と、本番ペースとの比較 */
export const PACE_TARGET = { 5: 20, 6: 30, 7: 55 };   // 秒/問（リーディングのみ）

export function paceByPart() {
  const bp = byPart();
  return [5, 6, 7].map(p => {
    const avg = bp[p].avgMs / 1000;
    return { part: p, avg, target: PACE_TARGET[p], n: bp[p].n, over: avg > PACE_TARGET[p] };
  }).filter(x => x.n > 0);
}

/** 正解した問題／間違えた問題での所要時間の差（迷いの指標） */
export function hesitationIndex() {
  const rs = allResponses().filter(r => r.ms > 500 && r.ms < 300000);
  const ok = rs.filter(r => r.correct), ng = rs.filter(r => !r.correct);
  const avg = (a) => a.length ? a.reduce((s, r) => s + r.ms, 0) / a.length / 1000 : 0;
  return { okAvg: avg(ok), ngAvg: avg(ng), okN: ok.length, ngN: ng.length };
}

/* ── 誤答の傾向 ──────────────────────────────────────── */
/** 未解答（時間切れ）率 — Part7 の時間切れ検出に使う */
export function unansweredRate() {
  let blank = 0, total = 0;
  for (const a of state.attempts) {
    for (const it of a.items || []) { total++; if (it.chosen == null) blank++; }
  }
  return { blank, total, rate: total ? blank / total : 0 };
}

/** セクション別カバレッジ（どれだけ演習したか） */
export function coverage() {
  const bp = byPart();
  const L = [1, 2, 3, 4].reduce((s, p) => s + bp[p].n, 0);
  const R = [5, 6, 7].reduce((s, p) => s + bp[p].n, 0);
  return { L, R, total: L + R };
}

/* ── 直近との比較 ────────────────────────────────────── */
/** 直近 n 問 と その前 n 問 の正答率差 */
export function momentum(n = 100) {
  const rs = allResponses().sort((a, b) => a.ts - b.ts);
  if (rs.length < n * 1.4) return null;
  const cur = rs.slice(-n), prev = rs.slice(-n * 2, -n);
  const a1 = acc(cur.filter(r => r.correct).length, cur.length);
  const a0 = acc(prev.filter(r => r.correct).length, prev.length);
  return { cur: a1, prev: a0, delta: a1 - a0, n };
}

/* ── 模試 1 回分の詳細集計 ───────────────────────────── */
export function analyzeAttempt(attempt) {
  const per = {};
  for (const p of [1, 2, 3, 4, 5, 6, 7]) per[p] = { ok: 0, n: 0, ms: 0, blank: 0 };
  for (const it of attempt.items || []) {
    const p = it.part; if (!per[p]) continue;
    per[p].n++; per[p].ms += it.ms || 0;
    if (it.chosen == null) per[p].blank++;
    else if (it.correct) per[p].ok++;
  }
  for (const p of Object.keys(per)) {
    per[p].acc = acc(per[p].ok, per[p].n);
    per[p].avgMs = per[p].n ? per[p].ms / per[p].n : 0;
  }
  const rawL = [1, 2, 3, 4].reduce((s, p) => s + per[p].ok, 0);
  const rawR = [5, 6, 7].reduce((s, p) => s + per[p].ok, 0);
  const topics = {};
  for (const it of attempt.items || []) {
    for (const t of it.topics || []) {
      topics[t] = topics[t] || { ok: 0, n: 0 };
      topics[t].n++; if (it.correct) topics[t].ok++;
    }
  }
  for (const k of Object.keys(topics)) topics[k].acc = acc(topics[k].ok, topics[k].n);
  return { per, rawL, rawR, topics, est: extrapolate(per) };
}

export { PART_SIZE, SECTION };
