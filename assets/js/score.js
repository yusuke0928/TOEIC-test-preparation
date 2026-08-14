/* =============================================================
   score.js — 素点 → 換算スコア（5〜495 / 各セクション）
   公式問題集に付属する換算表の中央値をもとにした近似。
   本番は毎回統計的に等化されるため ±25 点程度の幅で見ること。
   ============================================================= */

/* index = 正答数(0〜100) → 換算スコア */
export const L_TABLE = [
    5,   5,   5,   5,  10,  15,  20,  25,  30,  35,
   40,  45,  50,  55,  60,  65,  70,  75,  80,  85,
   90,  95, 100, 105, 110, 115, 120, 125, 130, 135,
  140, 145, 150, 155, 160, 165, 170, 175, 180, 190,
  195, 200, 205, 210, 215, 220, 225, 230, 235, 240,
  245, 250, 255, 260, 265, 270, 275, 280, 285, 290,
  295, 300, 305, 310, 315, 325, 330, 335, 340, 345,
  350, 355, 360, 365, 370, 375, 380, 385, 390, 400,
  405, 410, 415, 425, 430, 435, 440, 445, 450, 455,
  460, 465, 470, 475, 480, 485, 490, 490, 495, 495, 495,
];

export const R_TABLE = [
    5,   5,   5,   5,   5,   5,   5,  10,  10,  15,
   20,  25,  30,  35,  40,  45,  50,  55,  60,  65,
   70,  75,  80,  85,  90,  95, 100, 105, 110, 115,
  120, 125, 130, 135, 140, 145, 150, 155, 160, 165,
  170, 175, 180, 185, 190, 195, 200, 205, 210, 215,
  220, 225, 230, 235, 240, 245, 250, 260, 265, 270,
  275, 280, 285, 290, 295, 300, 305, 310, 315, 325,
  330, 335, 340, 350, 355, 360, 365, 370, 375, 380,
  385, 390, 400, 405, 410, 415, 425, 430, 435, 445,
  450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 495,
];

const clamp100 = (n) => Math.max(0, Math.min(100, Math.round(n)));

export const scaleL = (raw) => L_TABLE[clamp100(raw)];
export const scaleR = (raw) => R_TABLE[clamp100(raw)];

/** 素点（L/R）から換算スコア一式を返す */
export function estimate(rawL, rawR) {
  const L = scaleL(rawL), R = scaleR(rawR);
  return { L, R, total: L + R, rawL, rawR };
}

/**
 * 部分受験（一部のパートのみ）でも推定できるよう、
 * パートごとの正答率からセクション素点を外挿する。
 * perPart = { 1:{ok,n}, 2:{ok,n}, ... }
 */
export const PART_SIZE = { 1: 6, 2: 25, 3: 39, 4: 30, 5: 30, 6: 16, 7: 54 };
export const SECTION = { 1: 'L', 2: 'L', 3: 'L', 4: 'L', 5: 'R', 6: 'R', 7: 'R' };

/**
 * このセクションの素点を語ってよい最低演習数。
 * これを下回るセクションのスコアは推定せず「—」にする。
 * （リスニングを 1 問も解いていないのに L=5 と出る、という事故を防ぐ）
 */
export const MIN_SECTION_N = 20;

export function extrapolate(perPart, { minSectionN = MIN_SECTION_N } = {}) {
  let lRaw = 0, rRaw = 0, lCov = 0, rCov = 0, lN = 0, rN = 0;
  for (const p of [1, 2, 3, 4, 5, 6, 7]) {
    const size = PART_SIZE[p];
    const d = perPart[p];
    if (!d || !d.n) continue;
    const acc = d.ok / d.n;
    if (SECTION[p] === 'L') { lRaw += acc * size; lCov += size; lN += d.n; }
    else { rRaw += acc * size; rCov += size; rN += d.n; }
  }
  // 未受験パートはセクション内の平均正答率で補う
  const lFill = lCov ? (lRaw / lCov) * (100 - lCov) : 0;
  const rFill = rCov ? (rRaw / rCov) * (100 - rCov) : 0;
  const estimableL = lN >= minSectionN;
  const estimableR = rN >= minSectionN;
  return {
    ...estimate(lRaw + lFill, rRaw + rFill),
    coverageL: lCov / 100,
    coverageR: rCov / 100,
    lN, rN,
    estimableL, estimableR,
    estimable: estimableL && estimableR,   // 合計スコアを出してよいか
    minSectionN,
    partial: lCov < 100 || rCov < 100,
  };
}

/* ── 900 点到達の目安 ────────────────────────────────── */
/** 900（L470 / R430 前後）を取る受験者の、パート別ミス許容数 */
export const TARGET_900 = {
  1: { size: 6,  allow: 1, note: '取りこぼしは 1 問まで。写真に写っていない動作を述べた選択肢を確実に切る。' },
  2: { size: 25, allow: 2, note: '間接応答（Yes/No で答えない返し）を落とさない。' },
  3: { size: 39, allow: 4, note: '3問目の意図・図表問題が勝負どころ。' },
  4: { size: 30, allow: 3, note: '冒頭 10 秒で場面と話者の役割を確定させる。' },
  5: { size: 30, allow: 2, note: '1問20秒。語彙問題で迷ったら即マークして進む。' },
  6: { size: 16, allow: 2, note: '文挿入は前後の指示語・接続語で決める。' },
  7: { size: 54, allow: 7, note: '時間切れ＝失点。SP は 1 問 1 分以内を死守。' },
};

export const TARGET_950 = {
  1: { size: 6, allow: 0 }, 2: { size: 25, allow: 1 }, 3: { size: 39, allow: 2 },
  4: { size: 30, allow: 2 }, 5: { size: 30, allow: 1 }, 6: { size: 16, allow: 1 },
  7: { size: 54, allow: 4 },
};

/** 目標スコアに対する各パートの過不足（正答数ベース） */
export function gapToTarget(perPart, target = TARGET_900) {
  return Object.entries(target).map(([p, t]) => {
    const part = Number(p);
    const d = perPart[part] || { ok: 0, n: 0 };
    const acc = d.n ? d.ok / d.n : null;
    const needAcc = (t.size - t.allow) / t.size;
    return {
      part,
      acc,
      needAcc,
      diff: acc == null ? null : acc - needAcc,
      allow: t.allow,
      size: t.size,
      note: t.note || '',
      // 現在の正答率で本番を受けたときの想定失点数
      projectedMiss: acc == null ? null : Math.round((1 - acc) * t.size * 10) / 10,
    };
  });
}

/* ── 表示補助 ────────────────────────────────────────── */
export function band(total) {
  if (total >= 945) return { name: 'A+', ja: '最上位', desc: 'ネイティブ同等の運用力。ここから先は運用の安定性を磨く段階。' };
  if (total >= 900) return { name: 'A',  ja: '上級', desc: '目標到達。維持のため月1回の実戦を推奨。' };
  if (total >= 860) return { name: 'A-', ja: '準上級', desc: '900 が射程圏。取りこぼしの潰し込みが最短距離。' };
  if (total >= 800) return { name: 'B+', ja: '中上級', desc: '基礎は完成。速度と精度の両立が課題。' };
  if (total >= 730) return { name: 'B',  ja: '中級', desc: '文法・語彙の穴を体系的に埋める段階。' };
  if (total >= 600) return { name: 'C',  ja: '初中級', desc: '頻出構文と基本語彙の定着を優先。' };
  return { name: 'D', ja: '基礎', desc: '中学〜高校基礎文法の再確認から。' };
}

export const fmtScore = (n) => String(Math.round(n)).padStart(3, ' ');
