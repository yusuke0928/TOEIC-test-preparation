/* =============================================================
   scenes.js — Part 1（写真描写）用のイラスト
   写真は使えないので、描写の根拠が読み取れる線画で代替する。
   部品を組み合わせて作るので、追加も容易。
   ============================================================= */

const INK = 'var(--ink)';
const FILL = 'var(--card-2)';
const SHU = 'var(--shu)';
const AI = 'var(--ai)';
const SOFT = 'var(--rule-soft)';

const W = 460, H = 280;

/* ── 部品 ────────────────────────────────────────────── */

const rect = (x, y, w, h, f = FILL, extra = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" stroke="${INK}" stroke-width="2" ${extra}/>`;

const line = (x1, y1, x2, y2, c = INK, w = 2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;

const table = (x, y, w, h = 8) =>
  `${rect(x, y, w, h)}${line(x + 6, y + h, x + 6, y + 46)}${line(x + w - 6, y + h, x + w - 6, y + 46)}`;

const laptop = (x, y, s = 1) =>
  `<g transform="translate(${x},${y}) scale(${s})">
     <path d="M-14,-16 L14,-16 L14,0 L-14,0 Z" fill="${FILL}" stroke="${INK}" stroke-width="2"/>
     <path d="M-19,0 L19,0 L21,5 L-21,5 Z" fill="${SOFT}" stroke="${INK}" stroke-width="2"/></g>`;

const plant = (x, y, s = 1) =>
  `<g transform="translate(${x},${y}) scale(${s})">
     <path d="M-9,0 L9,0 L7,16 L-7,16 Z" fill="${SOFT}" stroke="${INK}" stroke-width="2"/>
     <path d="M0,0 C-2,-14 -12,-16 -13,-24 M0,0 C2,-16 12,-14 13,-26 M0,0 L0,-22"
       stroke="${AI}" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>`;

const windowFrame = (x, y, w, h) =>
  `${rect(x, y, w, h, SOFT)}${line(x + w / 2, y, x + w / 2, y + h)}${line(x, y + h / 2, x + w, y + h / 2)}`;

const car = (x, y, s = 1, c = FILL) =>
  `<g transform="translate(${x},${y}) scale(${s})">
     <path d="M-40,4 L-34,-10 L20,-10 L34,4 Z" fill="${c}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
     <rect x="-40" y="4" width="74" height="12" rx="3" fill="${c}" stroke="${INK}" stroke-width="2"/>
     <circle cx="-22" cy="17" r="7" fill="${FILL}" stroke="${INK}" stroke-width="2"/>
     <circle cx="18" cy="17" r="7" fill="${FILL}" stroke="${INK}" stroke-width="2"/></g>`;

const tree = (x, y, s = 1) =>
  `<g transform="translate(${x},${y}) scale(${s})">
     <path d="M0,0 L0,-22" stroke="${INK}" stroke-width="3"/>
     <circle cx="0" cy="-34" r="16" fill="${SOFT}" stroke="${INK}" stroke-width="2"/></g>`;

const ground = (y = 236) => line(0, y, W, y, INK, 2);

// root svg に fill/stroke を明示し、子要素が個別に stroke を指定しなくても
// 継承で輪郭線が出るようにする（design/part1/*.svg 見本と同じ構造）。
// これが無いと、塗り（fill）だけの要素は SVG の既定 stroke:none になり、
// 544px では「そこに何かある」こと自体が読み取れなくなる
// （figure() の頭部・胴、fixturePanel()/fixtureStool() の天面などで実際に起きていた）。
const frame = (inner, sky = false) =>
  `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Part 1 の写真の代替イラスト"
     fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
     <rect width="${W}" height="${H}" fill="${sky ? 'var(--ai-wash)' : 'var(--card)'}"/>
     ${inner}
     <rect width="${W}" height="${H}" fill="none" stroke="${INK}" stroke-width="2"/>
   </svg>`;

/* =============================================================
   新設計 部品ライブラリ（design/part1/SPEC.md 準拠）
   ------------------------------------------------------------
   figure（人物）/ fixture（什器）/ prop（小物）/ marker（接点）の4種と、
   描画順（z順）を構造として強制する composeScene()。

   このブロックは自己完結で、上の旧部品（rect / line / table / laptop /
   plant / windowFrame / car / tree / ground）には一切依存も影響もしない。
   旧部品のうち rect・line は新部品からも使われている共通ヘルパーで、
   table・laptop・plant・windowFrame・car・tree・ground は figure/fixture/prop
   系に置き換えられていない少数の場面（waterfront・parking-lot・beach・
   fallback）が今も参照している。person・旧box・shelfUnit は最後の
   呼び出し元が figure()/box3() 等へ置き換わった結果すべて未使用になった
   ため削除済み（同じ書き忘れ・二重管理を今後起こさないため、未使用の
   まま残さない）。
   ============================================================= */

const DEG = Math.PI / 180;

/* ---- 接点マーカー（marker）--------------------------------------
   cue（朱の点）は学習者に見せるかどうかを一括で切り替えられるよう、
   モジュール内の1フラグ（SHOW_CUE）で出力有無を制御する。
   hand は対象より必ず後に描く（＝呼び出し側の描画順で担保する）。 */
let SHOW_CUE = true;
export function setPart1CueVisible(v) { SHOW_CUE = !!v; }

const handMark = (x, y) => `<circle cx="${x}" cy="${y}" r="4.5" fill="${FILL}"/>`;
const cueMark = (x, y) =>
  SHOW_CUE ? `<circle cx="${x}" cy="${y}" r="2.5" fill="${SHU}" stroke="none" data-cue="true"/>` : '';

/* ---- 腕（limbArm）--------------------------------------------------
   figure() は頭・胴・脚のみを描き、腕は含まない。姿勢が同じでも
   「何に手を伸ばすか」は場面ごとに違うため、終点座標（肘・手）は
   呼び出し側が都度渡す。上限（肩→肘30・肘→手28）を超えたら、
   本番へ出す前に必ず気付けるよう console.warn する
   （「届かない距離に手を置く」を二度と起こさないための仕掛け）。 */
const ARM_LIMIT = { upper: 30, lower: 28 };

function warnIfTooLong(label, ax, ay, bx, by, max) {
  const d = Math.hypot(bx - ax, by - ay);
  if (d > max + 0.05) {
    console.warn(
      `[scenes] 腕の長さ超過: ${label} = ${d.toFixed(1)}（上限 ${max}）` +
      ` (${ax.toFixed(1)},${ay.toFixed(1)}) → (${bx.toFixed(1)},${by.toFixed(1)})`,
    );
  }
  return d;
}

function limbArm(shoulder, elbow, hand, { w = 3, c = INK } = {}) {
  warnIfTooLong('肩→肘', shoulder.x, shoulder.y, elbow.x, elbow.y, ARM_LIMIT.upper);
  warnIfTooLong('肘→手', elbow.x, elbow.y, hand.x, hand.y, ARM_LIMIT.lower);
  return `<polyline points="${shoulder.x},${shoulder.y} ${elbow.x},${elbow.y} ${hand.x},${hand.y}"
    fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
}

/** 1件の接点（動作腕＋手＋cue）を data-part="contact" でひとまとめにする。
    tools/scenecheck.mjs が「手と最寄り図形の距離」を測る際、手自身の胴体を
    誤検出しないようにするための単位でもある（design/part1/*.svg 見本と同じ規約）。 */
const contact = (...parts) => `<g data-part="contact">${parts.join('')}</g>`;

/* ---- 人物（figure）--------------------------------------------------
   頭・胴・脚の3部品を1本にまとめて描く（腕は含まない＝上のlimbArm()で
   つなぐ）。姿勢は5プリセット。頭頂差は SPEC.md ④の表のとおり、床y=250
   基準の値を「接地yからの上方距離」に一般化して使う。 */
const HEAD_RISE = { stand: 126, sit: 100, crouch: 78, bend: 84, lean: 126 };

/**
 * @param {number} gx 接地x  @param {number} gy 接地y（床）
 * @param {1|-1} dir 1=右向き／-1=左向き
 * @param {number} scale 倍率（1=基準。手前の人物は1.1などにする）
 * @param {'stand'|'sit'|'crouch'|'bend'|'lean'} pose
 * @returns {{svg:string, shoulder:{x:number,y:number}, farShoulder:{x:number,y:number}, headTop:{x:number,y:number}}}
 *   shoulder は「前に出す（アクションする）腕」の起点。farShoulder は
 *   奥側にもう1本（垂らした腕など）が要るときに使う既定点。
 */
function figure(gx, gy, dir = 1, scale = 1, pose = 'stand') {
  const s = scale;
  const P = (dx, dy) => ({ x: gx + dir * dx * s, y: gy + dy * s });
  const r = Math.max(8, 9 * s); // 頭部 r ≥ 8

  const trapezoid = (topY, topHW, botY, botHW) => {
    const tl = P(-topHW, topY), tr = P(topHW, topY), br = P(botHW, botY), bl = P(-botHW, botY);
    return `<path d="M ${tl.x} ${tl.y} L ${tr.x} ${tr.y} L ${br.x} ${br.y} L ${bl.x} ${bl.y} Z" fill="${FILL}"/>`;
  };
  // hipHW: 股関節の左右間隔／kneeHW,footHW: 膝・足の左右間隔（曲げの分だけhipHWと変える）
  // kneeForward,footForward: 接地x方向（=dir）への前方オフセット（しゃがむ・座るで使う）
  const legPair = (hipY, hipHW, kneeHW, kneeY, kneeForward, footHW, footForward, footY = 0) => {
    const hipL = P(-hipHW, hipY), hipR = P(hipHW, hipY);
    const kneeL = P(-kneeHW + kneeForward, kneeY), kneeR = P(kneeHW + kneeForward, kneeY);
    const footL = P(-footHW + footForward, footY), footR = P(footHW + footForward, footY);
    const leg = (a, b, c) =>
      `<polyline points="${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y}"
        fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    return leg(hipL, kneeL, footL) + leg(hipR, kneeR, footR)
      + line(footL.x - 7 * s, footL.y, footL.x + 7 * s, footL.y, INK, 2.5)
      + line(footR.x - 7 * s, footR.y, footR.x + 7 * s, footR.y, INK, 2.5);
  };

  let headDx = 0, headDy = -(HEAD_RISE[pose] ?? HEAD_RISE.stand) + r / s;
  let shoulderDx = 3, shoulderDy = -94;
  let axis = { ax: 0, ay: -1 }; // 頭→肩の向き（かがむ以外は真上＝(0,-1)）
  let bodySvg = '';

  if (pose === 'stand' || pose === 'lean') {
    const lean = pose === 'lean' ? 9 : 0; // 立位のまま頭側だけ傾ける簡易版
    headDx = lean; headDy = -117;
    shoulderDx = 3 + lean * 0.6; shoulderDy = -94;
    bodySvg = trapezoid(-100, 15, -60, 11)
      + legPair(-60, 6, 8, -30, 0, 6, 0); // 膝ほぼ直線（ズレ2）
  } else if (pose === 'sit') {
    headDy = -91;
    shoulderDx = 3; shoulderDy = -68;
    bodySvg = trapezoid(-74, 14, -36, 13) // 胴の高さ38（最小値）
      + legPair(-36, 6, 6, -26, 16, 6, 16); // 腿がほぼ水平（前方へ16）→支持面は別途fixtureで置く
  } else if (pose === 'crouch') {
    headDy = -69;
    shoulderDx = 3; shoulderDy = -48;
    bodySvg = trapezoid(-54, 14, -16, 14) // 腰が落ちる（股関節がy=-16まで下がる）
      + legPair(-16, 6, 6, -24, 18, 6, 14); // 膝が前・上（-24は-16より高い）
  } else if (pose === 'bend') {
    // 胴を60°前傾。股関節の高さは立位とほぼ同じ（＝膝は伸びる）
    const ang = 60 * DEG;
    axis = { ax: Math.sin(ang), ay: -Math.cos(ang) };
    const torsoLen = 38, neckLen = 6; // 胴の高さ≥38を維持したまま前傾させる
    const hipY = -58, hipHW = 6;
    shoulderDx = axis.ax * torsoLen; shoulderDy = hipY + axis.ay * torsoLen;
    headDx = axis.ax * (torsoLen + neckLen + r / s);
    headDy = hipY + axis.ay * (torsoLen + neckLen + r / s);
    const perp = { px: -axis.ay, py: axis.ax }; // 胴の厚み方向
    const corner = (baseDx, baseDy, hw) => P(baseDx + perp.px * hw, baseDy + perp.py * hw);
    const topHW = 14, botHW = 11;
    const c1 = corner(shoulderDx, shoulderDy, -topHW), c2 = corner(shoulderDx, shoulderDy, topHW);
    const c3 = corner(0, hipY, botHW), c4 = corner(0, hipY, -botHW);
    bodySvg = `<path d="M ${c1.x} ${c1.y} L ${c2.x} ${c2.y} L ${c3.x} ${c3.y} L ${c4.x} ${c4.y} Z" fill="${FILL}"/>`
      + legPair(hipY, hipHW, 8, -29, 0, 6, 0); // 膝は伸びたまま
  }

  const head = P(headDx, headDy);
  const headSvg = `<circle cx="${head.x}" cy="${head.y}" r="${r}" fill="${FILL}"/>`;
  const neckTop = P(headDx - axis.ax * (r / s), headDy - axis.ay * (r / s));
  const shoulder = P(shoulderDx, shoulderDy);
  const neckSvg = line(neckTop.x, neckTop.y, shoulder.x, shoulder.y, INK, 2);
  const farShoulder = P(-shoulderDx * 0.7, shoulderDy + 3);

  // data-part="figure-${pose}" でグループ化する（tools/scenecheck.mjs が姿勢別に
  // 頭部r・胴の高さ・頭頂差を測る手がかりにする。design/part1/*.svg 見本と同じ規約）。
  const svg = `<g data-part="figure-${pose}">${headSvg}${neckSvg}${bodySvg}</g>`;
  return { svg, shoulder, farShoulder, headTop: { x: head.x, y: head.y - r } };
}

/* ---- 什器（fixture）--------------------------------------------------
   すべて「天面線＋前面の塗り」または「線だけの骨格」のどちらかで、
   幅(w)と高さ(h)だけを差し替えれば済む構造にまとめてある。 */

/** カウンター／作業台／テーブル。天面線＋前面の塗り＋天面直下の縁線。 */
function fixturePanel(x, y, w, h, { dividers = [], topGap = 14 } = {}) {
  let out = `<path d="M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z" fill="${FILL}"/>`;
  out += line(x, y, x + w, y, INK, 2.5);
  out += line(x, y + topGap, x + w, y + topGap, SOFT, 1.5);
  for (const dxr of dividers) out += line(x + dxr, y + topGap, x + dxr, y + h, SOFT, 1.5);
  return out;
}

/** 開放型の棚。天面線を含む(tiers+1)本の水平線＋両端の縦線＋奥行きを示す斜線。 */
function fixtureShelf(x, y, w, h, tiers = 3) {
  const rowH = h / tiers;
  let out = line(x, y, x, y + h, INK, 2) + line(x + w, y, x + w, y + h, INK, 2);
  for (let i = 0; i <= tiers; i++) out += line(x - 8, y + rowH * i, x + w + 8, y + rowH * i, INK, 2.5);
  for (let i = 0; i < tiers - 1; i++) out += line(x, y + rowH * (i + 1), x + w, y + rowH * i, SOFT, 1.5);
  return out;
}

/** 荷役用パレット。上下2本の線＋内側の桟。 */
function fixturePallet(x, y, w, h = 10, slats = 3) {
  let out = line(x, y, x + w, y, INK, 2) + line(x, y + h, x + w, y + h, INK, 2);
  for (let i = 0; i < slats; i++) {
    const sx = slats === 1 ? x + w / 2 : x + 6 + ((w - 12) / (slats - 1)) * i;
    out += line(sx, y, sx, y + h, INK, 2);
  }
  return out;
}

/** 丸椅子。天面の塗り（座面）＋脚2本。 */
function fixtureStool(x, y, w, h) {
  let out = `<path d="M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h * .3} L ${x} ${y + h * .3} Z" fill="${FILL}"/>`;
  out += line(x, y, x + w, y, INK, 2.5);
  out += line(x + w * .2, y + h * .3, x + w * .2, y + h, INK, 2);
  out += line(x + w * .8, y + h * .3, x + w * .8, y + h, INK, 2);
  return out;
}

/** 出入口の枠（上と両脇の3辺。下は床に開放）。 */
function fixtureDoorway(x, y, w, h) {
  return line(x, y, x, y + h, INK, 2.5) + line(x + w, y, x + w, y + h, INK, 2.5) + line(x, y, x + w, y, INK, 2.5);
}

/** 幅(w)・高さ(h)だけ差し替えて呼べる単一の入口。
    data-part="${kind}" でグループ化する（counter/bench/table は
    tools/scenecheck.mjs の CONCEALING_FIXTURES と対応し、「人物の脚を
    意図的に隠す什器」として胴とのクリアランス検査から除外される）。 */
function fixture(kind, x, y, w, h, opts = {}) {
  let inner;
  switch (kind) {
    case 'counter': case 'bench': case 'table': inner = fixturePanel(x, y, w, h, opts); break;
    case 'shelf-3tier': inner = fixtureShelf(x, y, w, h, opts.tiers ?? 3); break;
    case 'stool': inner = fixtureStool(x, y, w, h); break;
    case 'pallet': inner = fixturePallet(x, y, w, h, opts.slats ?? 3); break;
    case 'doorway': inner = fixtureDoorway(x, y, w, h); break;
    default:
      console.warn(`[scenes] 未知の fixture kind "${kind}"`);
      inner = fixturePanel(x, y, w, h, opts);
  }
  return `<g data-part="${kind}">${inner}</g>`;
}

/* ---- 小物（prop）------------------------------------------------------ */

/** 箱＝三面描画関数を1つ持てば足りる（前面＋天面dx8/dy-8＋右側面＋折り目線1本）。
    data-part="box" でグループ化する（tools/scenecheck.mjs が「path≥3」を検査する
    単位。design/part1/*.svg 見本と同じ規約）。 */
function box3(x, y, w, h, { dx = 8, dy = 8, seam = true } = {}) {
  const x2 = x + w, y2 = y + h, cx = x + w / 2;
  const front = `M ${x} ${y} L ${x2} ${y} L ${x2} ${y2} L ${x} ${y2} Z`;
  const top = `M ${x} ${y} L ${x + dx} ${y - dy} L ${x2 + dx} ${y - dy} L ${x2} ${y} Z`;
  const side = `M ${x2} ${y} L ${x2 + dx} ${y - dy} L ${x2 + dx} ${y2 - dy} L ${x2} ${y2} Z`;
  // 三面には必ず輪郭線を入れる。塗りだけ（--card-2）だと背景 --card との差が
  // わずかしかなく、544px では「箱が三面ある」ことも「箱がある」ことすら読めない
  // （旧実装は無線で、倉庫・工場・空港の箱がほぼ消えていた）。
  const edge = `fill="${FILL}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"`;
  let out = `<path d="${front}" ${edge}/><path d="${top}" ${edge}/><path d="${side}" ${edge}/>`;
  out += line(cx, y, cx + dx, y - dy, INK, 2);
  if (seam) out += line(cx, y, cx, y2, SOFT, 1.5);
  return `<g data-part="box">${out}</g>`;
}

/* 小物も箱と同じ理由で輪郭線を入れる（塗りだけでは 544px で消える）。 */
const OUTLINE = `stroke="${INK}" stroke-width="2" stroke-linejoin="round"`;

const propCup = (x, y, w = 20, h = 14) => {
  const x2 = x + w;
  const out = `<path d="M ${x} ${y} L ${x2} ${y} L ${x2 - 3} ${y + h} L ${x + 3} ${y + h} Z" fill="${FILL}" ${OUTLINE}/>`
    + line(x - 2, y, x2 + 2, y, INK, 2.5);
  return `<g data-part="cup">${out}</g>`;
};

const propBeaker = (x, y, w = 24, h = 20) => {
  const x2 = x + w, midY = y + h * .6;
  const out = `<path d="M ${x + 2} ${y} L ${x} ${y + h} L ${x2} ${y + h} L ${x2 - 2} ${y} Z" fill="${FILL}" ${OUTLINE}/>`
    + line(x - 3, y, x2 + 3, y, INK, 2.5)
    + line(x + 2, midY, x2 - 2, midY, SOFT, 1.5);
  return `<g data-part="beaker">${out}</g>`;
};

function propTubeRack(x, y, w = 52, h = 10, tubes = 3) {
  let out = `<path d="M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z" fill="${FILL}" ${OUTLINE}/>`;
  const tw = 9, gap = tubes > 1 ? (w - tw) / (tubes - 1) : 0;
  for (let i = 0; i < tubes; i++) {
    const tx = x + gap * i;
    out += `<rect x="${tx}" y="${y - 18}" width="${tw}" height="18" rx="3" fill="${FILL}" stroke="${INK}" stroke-width="2"/>`;
  }
  return `<g data-part="tube-rack">${out}</g>`;
}

function propMachine(x, y, w, h) {
  let out = `<path d="M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z" fill="${FILL}" ${OUTLINE}/>`;
  out += line(x, y + h * .24, x + w, y + h * .24, SOFT, 1.5);
  const cx = x + w * .22;
  out += line(cx, y + h * .24, cx, y + h * .64, INK, 2);
  out += line(cx - w * .08, y + h * .64, cx + w * .08, y + h * .64, INK, 2.5);
  out += `<circle cx="${x + w * .73}" cy="${y + h * .14}" r="4" fill="none" stroke="${INK}" stroke-width="2"/>`;
  return `<g data-part="machine">${out}</g>`;
}

function propMonitor(x, y, w = 40, h = 28) {
  let out = `<path d="M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z" fill="${FILL}" ${OUTLINE}/>`;
  out += line(x, y, x + w, y, INK, 2.5);
  const cx = x + w / 2;
  out += line(cx, y + h, cx, y + h + 8, INK, 2);
  out += line(cx - 10, y + h + 8, cx + 10, y + h + 8, INK, 2.5);
  return `<g data-part="monitor">${out}</g>`;
}

function propBooks(x, y, w = 38, h1 = 10, h2 = 9) {
  // 輪郭線＋背表紙の区切り線を入れる。塗りだけだと「棚に本がある／空である」の
  // 区別が 544px でつかず、drills/listening.js p1v-06 の誤答（Shelves have been
  // emptied.）を絵から否定できなくなる。
  let out = `<path d="M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h1} L ${x} ${y + h1} Z" fill="${FILL}" ${OUTLINE}/>`
    + `<path d="M ${x + 3} ${y - h2} L ${x + w - 3} ${y - h2} L ${x + w - 3} ${y} L ${x + 3} ${y} Z" fill="${FILL}" ${OUTLINE}/>`;
  const spines = Math.max(1, Math.round(w / 24));
  for (let i = 1; i < spines; i++) out += line(x + (w / spines) * i, y, x + (w / spines) * i, y + h1, INK, 1.5);
  return `<g data-part="books">${out}</g>`;
}

function propCartonStack(x, y, cols, rows, boxW = 44, boxH = 32) {
  // box3() が自前で data-part="box" を付けるので、ここでは束ねる外枠だけ用意する。
  let out = '';
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) out += box3(x + c * boxW, y - r * boxH, boxW, boxH);
  return `<g data-part="carton-stack">${out}</g>`;
}

/** 幅(w)・高さ(h)だけ差し替えて呼べる単一の入口（箱のみ opts.dx/dy/seam を通す）。
    各 prop 関数が自分で data-part を付けるので、ここでは委譲するだけ。 */
function prop(kind, x, y, w, h, opts = {}) {
  switch (kind) {
    case 'box': return box3(x, y, w, h, opts);
    case 'cup': return propCup(x, y, w, h);
    case 'beaker': return propBeaker(x, y, w, h);
    case 'tube-rack': return propTubeRack(x, y, w, h, opts.tubes ?? 3);
    case 'machine': return propMachine(x, y, w, h);
    case 'monitor': return propMonitor(x, y, w, h);
    case 'books': return propBooks(x, y, w, opts.h1, opts.h2);
    case 'carton-stack': return propCartonStack(x, y, opts.cols ?? 2, opts.rows ?? 2, w, h);
    default:
      console.warn(`[scenes] 未知の prop kind "${kind}"`);
      return '';
  }
}

/* ---- 描画順の強制（＝ SPEC.md の5層）--------------------------------
   1 奥の床線・壁・棚（線のみ） 2 奥の什器と、その上の物 3 人物
   4 手前の面（--card-2で奥を消す） 5 前に出る腕・手・接点、手前の床線

   composeScene() は「層名→中身」のオブジェクトを受け取り、Z_LAYERS の
   順で必ず連結する。呼び出し側がオブジェクトのキーをどんな順に書いても
   出力順は変わらないので、層を書き間違えて前後関係が崩れることがない。
   frontFigure は5層に無い6つ目の枠で、cafe-counter.svg 見本自体が
   「外側の客はカウンター（nearFace）の後に描く」構成になっているため
   （でなければ客の脚が塗りで消えてしまう）用意した。対面カウンターで
   奥の人物と手前の人物の両方がいる場面だけ使う。 */
const Z_LAYERS = ['farGround', 'farFixture', 'figure', 'nearFace', 'frontFigure', 'nearAction'];

function composeScene(layers, sky = false) {
  for (const k of Object.keys(layers)) {
    if (!Z_LAYERS.includes(k)) console.warn(`[scenes] 未知の層キー "${k}"（想定: ${Z_LAYERS.join(', ')}）`);
  }
  return frame(Z_LAYERS.map(k => layers[k] || '').join(''), sky);
}

/** warehouse（有人）と warehouse-b（無人）で什器座標を共有するための関数。
    2箇所に同じ数値を書かない＝二重管理をしない。 */
function warehouseFixtures() {
  const shelf = fixture('shelf-3tier', 20, 60, 190, 150, { tiers: 3 });
  // 最下段（tier境界 y=160〜210）は意図的に空にする。
  // vol4-l1.js No.1 の正解文「The lowest shelf has been left empty.」に対応するための修正
  // （旧実装は3段とも埋めていたため、この設問と両立できなかった）。
  // drills/listening.js p1v-01「Cartons have been stacked on the shelving.」は
  // 一部の段に箱があれば真になる一般的な状態描写なので、2段のみ埋める変更でも両立する。
  const shelfBoxes = [78, 128].map(y => box3(30, y, 40, 32) + box3(80, y, 40, 32)).join('');
  const pallet = fixture('pallet', 296, 240, 84, 10);
  return { farGround: line(20, 250, 440, 250, INK, 2), farFixture: shelf + shelfBoxes + pallet };
}

/* ── 場面 ────────────────────────────────────────────── */
export const SCENES = {

  /* 1. オフィス：机に座り、ノート PC を操作する男性
     figure(sit) → nearFace で机の前面を後から重ね、腰から下を隠す。
     手はキーボード面（laptop の下半分）に届く。 */
  'office-desk': (() => {
    const worker = figure(150, 236, 1, 1, 'sit');
    // sit の胴は y162〜200（股関節=200）。天板を172あたりに置くと股関節に近すぎて
    // 胴のほとんどが天板の塗りに埋もれてしまうため、天板は股関節のすぐ上(188)まで下げ、
    // 胴の大部分（162〜188）を見せたうえで脚だけを隠す。
    return composeScene({
      farGround: line(20, 236, 440, 236, SOFT, 1.5) + windowFrame(300, 46, 116, 72),
      figure: worker.svg,
      nearFace: fixture('table', 96, 188, 220, 48, { topGap: 10 }) + laptop(190, 186),
      nearAction: contact(
        limbArm(worker.shoulder, { x: 170, y: 176 }, { x: 186, y: 188 }),
        handMark(186, 188), cueMark(188, 186),
      ),
    });
  })(),

  /* 2. 会議室：3 人が着席し、1 人がスクリーンを指しながら立っている
     （このシーンは38問のどれからも参照されない汎用場面。文言上の制約はない）。
     2026-08-15 の目視で2件の欠陥が見つかり、2026-08-16 の描き直し（天面200・
     presenter を gx=320 へ）をレビューで 544px 実描画したところ2件が残ったため、
     さらに直した。数値の意図は次のとおり。
     - 着席3人はテーブル天面(初版182)が股関節(200)より18単位も高く、胴の大半が
       隠れて頭だけ浮いて見えた。かといって天面＝股関節y(200)に揃えると、
       胴の輪郭（trapezoid は fill だけでなく root の stroke を継承するので
       下辺にも線が出る）が閉じたまま天面線と重なり、今度は**3つの台形が
       天板の上に置かれている**ように見えた（544px 実描画で確認）。
       → 天面は股関節より6単位**上**の194に置く。胴38単位のうち32単位が見え、
       胴の下辺の線は天面の塗りに飲まれて消えるので「天板の向こう側に座って
       いる」と読める。着席時にテーブルが腿より上に来るのは実物どおりでもある。
     - 立っているpresenterは、床y=176・天面y=182で「天面に立っている」ように
       見えた。テーブルの x 範囲(56〜276)の外へ出す必要があるのは初版の
       とおりだが、gx=320・スクリーン(310〜430, y40〜96)だと真下から
       スクリーンの下辺を持ち上げているように見えた（＝看板を掲げる姿勢）。
       → presenter を gx=308 に、スクリーンを右隣(344〜438, y66〜136)へ移し、
       手はスクリーンの**左辺の中ほど**に触れさせる。横に立って指す構図になる。
     - テーブル下端は 236 ではなく 238。figure() の足の線は stroke-width 2.5 で
       接地y(236)の上下に 1.25 ずつ広がるため、什器の下端を接地yに合わせると
       足先が什器の下辺からわずかにはみ出し、天板の下に黒い小片が3対並ぶ
       （544px で見える）。1〜2単位下げて完全に飲ませる。 */
  'meeting-room': (() => {
    const presenter = figure(308, 236, 1, 1, 'stand');
    const a = figure(90, 236, 1, 1, 'sit');
    const b = figure(160, 236, 1, 1, 'sit');
    const c = figure(232, 236, 1, 1, 'sit');
    return composeScene({
      farGround: line(30, 226, 440, 226, SOFT, 1.5) + rect(344, 66, 94, 70, SOFT),
      figure: a.svg + b.svg + c.svg + presenter.svg,
      nearFace: fixture('table', 56, 194, 220, 44, { topGap: 14, dividers: [70, 140] }),
      nearAction: contact(
        limbArm(presenter.shoulder, { x: 331, y: 124 }, { x: 344, y: 118 }),
        handMark(344, 118),
      ),
    });
  })(),

  /* 3. 工事現場：はしごの途中に立ち、上の段に手を掛けている作業員
     figure(stand) の接地 y をはしご途中の段（rung）に置くことで「昇っている途中」を表す。 */
  'construction': (() => {
    const worker = figure(196, 148, 1, 1, 'stand');
    const rungY = [52, 76, 100, 124, 148, 172, 196, 220];
    const rungs = rungY.map(y => line(170, y, 222, y, INK, 2.5)).join('');
    return composeScene({
      farGround: line(20, 236, 440, 236, SOFT, 1.5) + rect(280, 60, 150, 176, SOFT),
      farFixture: line(170, 40, 170, 236, INK, 2.5) + line(222, 40, 222, 236, INK, 2.5) + rungs
        + box3(60, 206, 40, 30) + box3(100, 214, 34, 22),
      figure: worker.svg,
      nearAction: contact(
        limbArm(worker.shoulder, { x: 210, y: 74 }, { x: 206, y: 100 }),
        handMark(206, 100), cueMark(208, 98),
      ),
    });
  })(),

  /* 4. カフェ：カウンターで注文する客と店員（部品版）
     内側の店員は figure（層3）→ counter（層4）の順で描き、脚を塗りに
     飲ませる。外側の客は counter より後（frontFigure）に描いて全身を
     見せる。店員の腕はカップに、客の腕はカウンター縁に軽く触れる。 */
  'cafe-counter': (() => {
    const clerk = figure(140, 236, 1, 1, 'stand');
    // 接地y=262（店員より+26）／1.1倍。machine（x226-300）と胴が重ならないよう
    // 右寄りに置く（胴のクリアランス8単位以上／全高は126×1.1=138.6ぴったりに収める）。
    const customer = figure(350, 262, 1, 1.1, 'stand');
    return composeScene({
      farGround: line(30, 236, 430, 236, SOFT, 1.5),
      farFixture: fixture('shelf-3tier', 100, 60, 260, 26, { tiers: 1 })
        + propCup(104, 74, 14, 12) + propCup(130, 74, 14, 12) + propCup(156, 74, 14, 12)
        + propMonitor(300, 48, 72, 38),
      figure: clerk.svg,
      nearFace: fixture('counter', 56, 172, 348, 66, { dividers: [124, 234], topGap: 14 })
        + propMachine(226, 122, 74, 50)
        + propCup(180, 155, 20, 14),
      frontFigure: customer.svg,
      nearAction: contact(
        limbArm(clerk.shoulder, { x: 165, y: 148 }, { x: 182, y: 157 }),
        handMark(182, 157), cueMark(184, 155),
      ) + contact(
        limbArm(customer.shoulder, { x: 345, y: 168 }, { x: 340, y: 176 }),
        handMark(340, 176),
      ),
    });
  })(),

  /* 5. 倉庫：棚に箱が積まれ、作業員がパレット上の箱に手を伸ばしている（部品版）
     什器座標は warehouseFixtures() として warehouse-b と共有する。
     有人／無人の差分が人物レイヤーだけになるようにするため。 */
  'warehouse': (() => {
    const worker = figure(362, 250, -1, 1, 'stand');
    return composeScene({
      ...warehouseFixtures(),
      figure: worker.svg,
      nearFace: box3(300, 208, 40, 32),
      nearAction: contact(
        limbArm(worker.shoulder, { x: 345, y: 182 }, { x: 341, y: 209 }),
        handMark(341, 209), cueMark(343, 206),
      ),
    });
  })(),

  /* 5b. 倉庫（無人版）：什器を1単位も動かさず人物レイヤーだけ抜いた版。
     パレット上の箱はそのまま＝「作業が終わった状態」を示す。 */
  'warehouse-b': composeScene({
    ...warehouseFixtures(),
    nearFace: box3(300, 208, 40, 32),
  }),

  /* 6. 横断歩道：3 人が横断歩道を渡っている（車・自転車は写っていない） */
  'crosswalk': (() => {
    const p1f = figure(160, 236, 1, 1, 'stand');
    const p2f = figure(230, 236, -1, 1, 'stand');
    const p3f = figure(300, 236, 1, 1, 'stand');
    const stripes = [0, 1, 2, 3, 4, 5].map(i => rect(120 + i * 34, 200, 20, 40, SOFT)).join('');
    return composeScene({
      farGround: line(20, 200, 440, 200, SOFT, 1.5)
        + rect(0, 40, 130, 130, SOFT) + rect(330, 30, 130, 140, SOFT),
      farFixture: stripes,
      figure: p1f.svg + p2f.svg + p3f.svg,
      nearAction: line(20, 240, 440, 240, INK, 2),
    });
  })(),

  /* 7. 厨房：カウンター上のコンロにかけた鍋の取っ手に手をかけている調理人
     2026-08-15 の目視で3件の欠陥（棚の線が頭部を貫通／コンロが調理器具に
     見えず鍋も無い／脚がカウンターの手前に出る）が見つかり、2026-08-16 に
     描き直したものを、レビューで 544px 実描画したうえでさらに直した。
     - 棚は幅130→110・高さ74→50に縮めて左へ寄せ(x=30〜140、最下段の線をy=96へ)、
       頭部(x161〜179 / y110〜128)との隙間を X方向13・Y方向14 単位確保する。
       空の棚だと「厨房」の手掛かりが弱いので、上段に器を2つ置く。
     - **コンロは天面が見える三面（box3 と同じ前面＋天面パラレログラム＋右側面）
       で描く。**正面のみの平面図にすると、バーナーを描く「面」が存在しないため
       輪をやむなく前面に描くことになり、544px では「箱にボタンが4つ」＝券売機か
       洗濯機にしか見えなかった（2026-08-16 のレビューで実描画を確認）。
       天面を見せると、楕円の輪＝バーナーと、その輪の内側に底が収まった鍋、
       という位置関係が絵として成立する。鍋の底(rx9)は輪(rx15)より細くして、
       輪の左右が鍋の外にはみ出して見えるようにしてある（＝乗っていることの根拠）。
     - 鍋は「下すぼまりの台形＋広い縁」だと propCup（カップ）と同一構成になり、
       しかも figure() の胴と同じ形なので、調理人の胴とそっくりに見えていた。
       → 直線の胴＋底の楕円弧＋縁の楕円、という円筒形に描き直す。
     - カウンター天面は 170（立位の股関節176より6単位**上**）。
       天面＝股関節y(176)に揃えると腿は隠れるが、胴の輪郭（trapezoid は root の
       stroke を継承するので下辺にも線が出る）が閉じたまま天面線と重なり、
       調理人が「カウンターの上に置かれた台形」に見えた。6単位上げると胴の下辺が
       塗りに飲まれ、胴38単位のうち34単位が見えたまま「向こう側に立っている」と読める。
     - カウンター下端は 236 ではなく 238（figure() の足の線は stroke-width 2.5 で
       接地y の上下に 1.25 ずつ広がるため、下端を接地yに合わせると足先がはみ出す）。 */
  'kitchen': (() => {
    const cook = figure(170, 236, 1, 1, 'stand');
    const EDGE = `fill="${FILL}" ${OUTLINE}`;
    // コンロ本体：前面(200〜286, y160〜170) ＋ 天面(dx14/dy14 のパラレログラム) ＋ 右側面。
    const hbX = 200, hbY = 160, hbW = 86, hbH = 10, hbDx = 14, hbDy = 14;
    const hbX2 = hbX + hbW, hbY2 = hbY + hbH;
    // バーナー＝天面に寝かせた同心の楕円2つ（外輪 rx15/ry5・内輪 rx6/ry2）。
    // 真円にすると天面のパラレログラムから浮いて「ボタン」に見えるため楕円にする。
    const burner = (cx, cy) =>
      `<ellipse cx="${cx}" cy="${cy}" rx="15" ry="5" fill="none" stroke="${INK}" stroke-width="2"/>`
      + `<ellipse cx="${cx}" cy="${cy}" rx="6" ry="2" fill="none" stroke="${INK}" stroke-width="2"/>`;
    const knob = (cx) => `<circle cx="${cx}" cy="165" r="3" fill="${FILL}" stroke="${INK}" stroke-width="2"/>`;
    const stove = `<g data-part="stove">
      <path d="M ${hbX} ${hbY} L ${hbX2} ${hbY} L ${hbX2} ${hbY2} L ${hbX} ${hbY2} Z" ${EDGE}/>
      <path d="M ${hbX} ${hbY} L ${hbX + hbDx} ${hbY - hbDy} L ${hbX2 + hbDx} ${hbY - hbDy} L ${hbX2} ${hbY} Z" ${EDGE}/>
      <path d="M ${hbX2} ${hbY} L ${hbX2 + hbDx} ${hbY - hbDy} L ${hbX2 + hbDx} ${hbY2 - hbDy} L ${hbX2} ${hbY2} Z" ${EDGE}/>
      ${burner(228, 153)}${burner(268, 153)}
      ${knob(224)}${knob(242)}${knob(260)}</g>`;
    // 鍋：手前左のバーナー(228,153)の輪の内側に底を落とす。縁の楕円 → 取っ手の順に
    // 描くので、取っ手は縁のすぐ下から調理人側へ水平に伸びる。
    const pot = `<g data-part="pot">
      <path d="M 219 141 L 219 153 A 9 3 0 0 0 237 153 L 237 141 Z" ${EDGE}/>
      <ellipse cx="228" cy="141" rx="11.5" ry="4" fill="${FILL}" stroke="${INK}" stroke-width="2"/>
      ${line(218, 144, 200, 142, INK, 2.5)}</g>`;
    return composeScene({
      farGround: line(20, 236, 440, 236, SOFT, 1.5)
        + fixture('shelf-3tier', 30, 46, 110, 50, { tiers: 2 })
        + propCup(50, 57) + propCup(92, 57),
      figure: cook.svg,
      nearFace: fixture('counter', 90, 170, 260, 68, { topGap: 14, dividers: [190] }) + stove + pot,
      nearAction: contact(
        limbArm(cook.shoulder, { x: 186, y: 148 }, { x: 200, y: 142 }),
        handMark(200, 142), cueMark(202, 140),
      ),
    });
  })(),

  /* 8. 実験室：作業台の奥に立つ研究者が顕微鏡の調整つまみに手を掛けている（部品版）
     垂らした腕（farShoulder）は figure 層で描いて bench の塗りに沈める。
     伸ばした腕（shoulder）は nearAction 層で bench の前に出す。
     ビーカーと本は手から十分離し、非接触の誤答用に使える距離を確保する。 */
  'laboratory': (() => {
    const researcher = figure(236, 232, 1, 1, 'stand');
    // 台の奥にある本体を271-307に置く（研究者の胴の右端251から8単位以上離す。
    // 元は249起点で置いていたが、接眼レンズの張り出し(x≈239.5)が胴と重なっていたため+22した）。
    // 台座・接眼レンズ・調節つまみにも輪郭線を入れる（塗りだけだと 544px で消え、
    // 残った線だけでは顕微鏡ではなくスタンドライトに見えていた）。
    const microscope = `<g data-part="microscope">
      <path d="M 271 182 L 307 182 L 301 168 L 277 168 Z" fill="${FILL}" ${OUTLINE}/>
      ${line(289, 168, 289, 116, INK, 2.5)}
      <polyline points="289,118 275,109 268,104" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="265" cy="101" r="3.5" fill="${FILL}" stroke="${INK}" stroke-width="2"/>
      ${line(275, 122, 273, 140, INK, 2)}
      ${line(271, 148, 299, 148, INK, 2.5)}
      <circle cx="279" cy="150" r="6" fill="${FILL}" stroke="${INK}" stroke-width="2"/>
      ${line(279, 144, 279, 156, SOFT, 1.5)}</g>`;
    return composeScene({
      farGround: line(30, 232, 430, 232, SOFT, 1.5),
      // 垂らした腕は「動作腕」ではないので線幅2.5（3は動作腕専用）。手は台の塗りに沈むので描かない。
      figure: researcher.svg
        + limbArm(researcher.farShoulder, { x: 222, y: 164 }, { x: 214, y: 190 }, { w: 2.5 }),
      nearFace: fixture('bench', 40, 182, 380, 68, { dividers: [176, 296], topGap: 14 })
        + propTubeRack(68, 172, 52, 10, 3)
        + microscope
        + propBeaker(344, 160, 24, 20)
        + propBooks(376, 172, 38, 10, 9),
      nearAction: contact(
        limbArm(researcher.shoulder, { x: 258, y: 155 }, { x: 276, y: 149 }),
        handMark(276, 149), cueMark(279, 146),
      ),
    });
  })(),

  /* 8b. 実験室（着席版）：実験台の右端に着き、座っている研究者
     vol4-l1.js No.3「A researcher is seated at a workbench.」は vol1-l1.js No.6
     「A researcher is adjusting a microscope.」（立って操作）と両立しないため、
     別 ID として分離した（第3段階の衝突解決）。

     figure() の共通 sit ポーズ（他の8場面が使用中）はここでは使わない。共通ポーズの
     腿（hip→knee が dy10/dx16 ≈32°の前傾）は前方への届きが短く、544px では膝の
     「くの字」が小さすぎて「座っている」と読み切れない（office-desk 等は前面の塗りで
     脚ごと隠しているため、この短さでも問題にならなかった）。ここでは脚全体を見せる
     ため、垂直落差は同じ10（＝はっきり折れて見える）まま、前方への届きだけを28
     （標準の16より長く）にして、design/part1/posture-reference.svg の posture-sit を
     手本にした浅い角度（hip→knee が dy10/dx28≈20°）にする。脛（knee→foot）は前方
     オフセットが同じ＝dxゼロで完全に垂直。座面（fixture('stool', …)）の天面は膝の
     高さに合わせ、腿の線と重ならないよう股関節より下にずらす（同じ高さに置くと1本の
     太い線に融合し、「腿」と「座面」が別の要素として読めなくなる）。他の sit 場面
     （office-desk・meeting-room・airport・presentation・clinic-reception・musician・
     fallback）の見た目を変えないよう figure() 側は触らない。

     座面は fixture('stool', …)（座面の水平線＋脚2本）を使う。box3() と同じ三面の塊
     （fixture('bench', …) 等）にすると荷物・クレートに見えてしまうため使わない。

     人物全体を frontFigure 層（nearFace＝ベンチ前面より後）に置く。SPEC③の既定
     「手前の面の塗りで奥の脚を隠す」を素直に適用すると座位の脚がベンチ前面に埋もれて
     立位と区別できなくなるため、ここでは逆に「ベンチより手前に人物を描く」ことで脚を
     常に見せる（design/part1/cafe-counter.svg の外側の客と同じ手筋）。膝はベンチの
     右端（x=290）のすぐ内側まで届かせ、「台の脇」ではなく「台に着いている」ことを示す。 */
  'laboratory-seated': (() => {
    const gx = 312, gy = 236, dir = -1, r = 9;
    const P = (dx, dy) => ({ x: gx + dir * dx, y: gy + dy });
    const head = P(0, -91);
    const neckTop = P(0, -91 + r);
    const shoulder = P(3, -68);
    const headSvg = `<circle cx="${head.x}" cy="${head.y}" r="${r}" fill="${FILL}"/>`;
    const neckSvg = line(neckTop.x, neckTop.y, shoulder.x, shoulder.y, INK, 2);
    const tl = P(-14, -74), tr = P(14, -74), br = P(13, -36), bl = P(-13, -36);
    const torsoSvg = `<path d="M ${tl.x} ${tl.y} L ${tr.x} ${tr.y} L ${br.x} ${br.y} L ${bl.x} ${bl.y} Z" fill="${FILL}"/>`;
    // 腿：hip(-36) → knee(-26, 前方+28) は dy10/dx28（≈20°）ではっきり折れつつ水平寄り。
    // 脛：knee → foot(0, 前方+28) は前方オフセットが同じ＝dxゼロで完全に垂直。
    const legAt = (hw) => ({ hip: P(hw, -36), knee: P(hw + 28, -26), foot: P(hw + 28, 0) });
    const legL = legAt(-6), legR = legAt(6);
    const legLine = (a, b, c) => `<polyline points="${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y}"
      fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    const legsSvg = legLine(legL.hip, legL.knee, legL.foot) + legLine(legR.hip, legR.knee, legR.foot)
      + line(legL.foot.x - 7, legL.foot.y, legL.foot.x + 7, legL.foot.y, INK, 2.5)
      + line(legR.foot.x - 7, legR.foot.y, legR.foot.x + 7, legR.foot.y, INK, 2.5);
    // 頭頂〜接地yは 136〜236 の100（SPEC④の座位の値）ちょうど。
    const researcherSvg = `<g data-part="figure-sit">${headSvg}${neckSvg}${torsoSvg}${legsSvg}</g>`;
    return composeScene({
      farGround: line(30, 236, 430, 236, SOFT, 1.5),
      // 座面の天面 y=210＝膝の高さ（hip=200 より10下）。腿の線と重ねず、腿の下に
      // 別要素として見える位置にする。
      farFixture: fixture('stool', 295, 210, 34, 26),
      nearFace: fixture('bench', 40, 182, 250, 54, { dividers: [120], topGap: 14 })
        + propTubeRack(60, 172, 52, 10, 3)
        + propBeaker(120, 162, 24, 20)
        + propBooks(180, 172, 38, 10, 9),
      frontFigure: researcherSvg,
      nearAction: contact(
        limbArm(shoulder, { x: 300, y: 175 }, { x: 288, y: 186 }),
        handMark(288, 186), cueMark(286, 184),
      ),
    });
  })(),

  /* 9. 空港：歩く旅行者と、床に自立するスーツケース、着席した人がいるベンチ
     スーツケースは誰の手も触れていない。ベンチは「無人」ではなく人が座っている状態にする。 */
  'airport': (() => {
    const traveler = figure(120, 236, 1, 1, 'stand');
    const seated = figure(300, 236, -1, 1, 'sit');
    return composeScene({
      // 座面は着席者の股関節 y=200 に合わせる（旧 214 では尻が座面の 14 単位上に浮いていた）。
      farGround: line(20, 236, 440, 236, SOFT, 1.5) + windowFrame(20, 44, 400, 86),
      farFixture: fixture('bench', 260, 200, 140, 36, { topGap: 8 }),
      figure: traveler.svg + seated.svg,
      // スーツケース＝三面の箱＋上端の引き手。床(236)に接地し、誰の手も触れていない。
      nearFace: box3(160, 194, 34, 42)
        + line(177, 186, 177, 176, INK, 2.5) + line(169, 176, 185, 176, INK, 2.5),
    });
  })(),

  /* 10. 図書館：棚から本を取り出している人物（棚は空にしない） */
  'library': (() => {
    const reader = figure(266, 236, -1, 1, 'stand');
    const shelf = fixture('shelf-3tier', 40, 50, 190, 176, { tiers: 4 });
    const books = [94, 138, 182].map(y => propBooks(50, y, 163, 10, 9)).join('');
    return composeScene({
      farGround: line(20, 236, 440, 236, SOFT, 1.5),
      farFixture: shelf + books,
      figure: reader.svg,
      nearAction: contact(
        limbArm(reader.shoulder, { x: 236, y: 130 }, { x: 211, y: 138 }),
        handMark(211, 138), cueMark(213, 136),
      ),
    });
  })(),

  /* 11. 庭：鉢植えが列状に並べられている（人物なし＝剪定している人もいない） */
  'garden': (() => {
    const row1 = [0, 1, 2, 3].map(i => plant(90 + i * 60, 236, 1)).join('');
    const row2 = [0, 1, 2, 3].map(i => plant(120 + i * 60, 200, .8)).join('');
    return composeScene({
      farGround: line(20, 200, 440, 200, SOFT, 1.5) + tree(400, 200, 1.1),
      farFixture: row2,
      nearAction: row1 + line(20, 236, 440, 236, INK, 2),
    });
  })(),

  /* 12. 川と橋：ボートが橋の近くに停泊している（人物なし）
     橋脚（y150→200）で「橋が水面をまたいでいる」ことを、岸線（y=170）で
     「ボートが岸沿いに停泊している」ことを、それぞれ絵の中に明示する
     （vol5-l1 No.1「A bridge extends across the water.」と
       drills p1v-07「Boats are docked along the shore.」の根拠）。 */
  'waterfront': frame(`
    <rect x="0" y="170" width="${W}" height="110" fill="var(--ai-wash)"/>
    ${line(0, 170, W, 170, INK, 2)}
    ${line(0, 150, W, 150, INK, 2)}
    ${line(210, 150, 210, 202, INK, 2.5)}${line(400, 150, 400, 202, INK, 2.5)}
    ${line(20, 150, 20, 118, INK, 2)}${line(140, 150, 140, 118, INK, 2)}
    ${line(300, 150, 300, 118, INK, 2)}${line(440, 150, 440, 118, INK, 2)}
    ${line(0, 118, W, 118, INK, 2)}
    <path d="M60,214 L74,196 L146,196 L158,214 Z" fill="${FILL}" stroke="${INK}" stroke-width="2"/>
    ${line(110, 196, 110, 160, INK, 2)}
    <path d="M260,222 L274,204 L346,204 L358,222 Z" fill="${FILL}" stroke="${INK}" stroke-width="2"/>
    ${line(310, 204, 310, 168, INK, 2)}
    ${line(0, 258, W, 258, AI, 1.5)}${line(0, 246, W, 246, AI, 1.5)}`, true),

  /* 13. 屋外市場：台に商品が並べられ、品物を抱えて立ち去る人物
     台の商品（state）と、立ち去る人物（action）は同一場面で両立する。 */
  'market-stall': (() => {
    const vendor = figure(130, 236, 1, 1, 'stand');
    const customer = figure(340, 236, 1, 1, 'stand');
    return composeScene({
      farGround: line(20, 236, 440, 236, SOFT, 1.5)
        + `<path d="M120,90 L280,90 L266,120 L134,120 Z" fill="${SOFT}" stroke="${INK}" stroke-width="2"/>`
        + line(136, 120, 136, 236, INK, 2) + line(264, 120, 264, 236, INK, 2),
      figure: vendor.svg + customer.svg,
      nearFace: fixture('table', 150, 172, 160, 64, { topGap: 12 })
        + [0, 1, 2, 3].map(i => propCup(160 + i * 36, 156, 20, 16)).join(''),
      // 抱えている箱は胴（x325〜355）の右へ 9 単位離して置く。
      // 旧実装は箱(x322〜364)が胴に重なり、人と箱が1つの塊に見えた。
      nearAction: box3(364, 180, 34, 28) + contact(
        limbArm(customer.shoulder, { x: 355, y: 165 }, { x: 364, y: 184 }),
        handMark(364, 184), cueMark(366, 182),
      ),
    });
  })(),

  /* 14. 講義：スクリーンの前で発表する人と、着席した聴衆 */
  'presentation': (() => {
    const speaker = figure(210, 176, 1, 1, 'stand');
    const a1 = figure(70, 236, 1, 1, 'sit');
    const a2 = figure(130, 236, 1, 1, 'sit');
    const a3 = figure(190, 236, 1, 1, 'sit');
    return composeScene({
      farGround: line(30, 176, 440, 176, SOFT, 1.5) + rect(240, 46, 180, 104, SOFT),
      // 聴衆の股関節 y=200 に座面を合わせた長椅子（支持面がないと「着席」が読めない）。
      farFixture: fixture('bench', 52, 202, 162, 34, { topGap: 10, dividers: [56, 116] }),
      figure: a1.svg + a2.svg + a3.svg + speaker.svg,
      // 腕はほぼ水平に伸ばしてスクリーン左端(x=240)へ届かせる。
      // 旧実装は肩(213,82)→肘(215,98)→手(225,108) と下向きで、垂らした腕に見えていた。
      nearAction: contact(
        limbArm(speaker.shoulder, { x: 233, y: 86 }, { x: 252, y: 88 }),
        handMark(252, 88),
      ),
    });
  })(),

  /* 15. ホテルのフロント：係員はカウンターの内側、箱を抱えた客は手前
     係員はカウンター前面（nearFace）より先（figure層）に描いて脚を隠す。
     客は frontFigure 層でカウンターより後に描き、全身を見せる。 */
  'hotel-lobby': (() => {
    // clinic-reception と同じ理由で天面を 176（＝立位の股関節 y）へ上げる。
    const clerk = figure(150, 236, 1, 1, 'stand');
    const carrier = figure(340, 236, -1, 1, 'stand');
    return composeScene({
      farGround: line(30, 226, 430, 226, SOFT, 1.5) + fixture('shelf-3tier', 300, 46, 120, 74, { tiers: 3 }),
      figure: clerk.svg,
      nearFace: fixture('counter', 70, 176, 200, 60, { topGap: 12 }),
      frontFigure: carrier.svg,
      // 抱えている箱は胴（x325〜355 / y136〜176）から 8 単位以上離す。
      // 旧実装は箱(x306〜348 / y170〜208)が胴と接していて、人と箱が1つの塊に見えた。
      nearAction: box3(272, 180, 34, 30) + contact(
        limbArm(carrier.shoulder, { x: 320, y: 165 }, { x: 312, y: 184 }),
        handMark(312, 184), cueMark(310, 182),
      ),
    });
  })(),

  /* 16. 駐車場：4 区画のうち 2 区画に車、右の 2 区画が空いている（人物なし）
     vol5-l1 No.6 の正解「Some parking spaces are unoccupied.」は複数形なので、
     空き区画は 2 つ以上必要（旧実装は 3 台＝空き 1 区画で複数形と合わなかった）。 */
  'parking-lot': frame(`
    <g stroke="${INK}" stroke-width="1.5" opacity=".5">
      ${[0, 1, 2, 3, 4].map(i => `<path d="M${40 + i * 96},130 L${40 + i * 96},236"/>`).join('')}</g>
    ${car(91, 190, .9)}${car(187, 190, .9, SOFT)}
    ${rect(0, 40, W, 60, SOFT)}
    ${line(20, 236, 440, 236, INK, 2)}`, true),

  /* 17. 海辺：パラソルとデッキチェア（人はいない） */
  'beach': frame(`
    <rect x="0" y="150" width="${W}" height="40" fill="var(--ai-wash)"/>
    <path d="M120,150 L188,150 L154,124 Z" fill="${SOFT}" stroke="${INK}" stroke-width="2"/>
    ${line(154, 124, 154, 214, INK, 2)}
    <path d="M200,214 L246,214 L240,190 L206,190 Z" fill="${FILL}" stroke="${INK}" stroke-width="2"/>
    <path d="M290,214 L336,214 L330,190 L296,190 Z" fill="${FILL}" stroke="${INK}" stroke-width="2"/>
    ${line(0, 214, W, 214, INK, 2)}`, true),

  /* 18. 演奏：楽器を持って座っている演奏者
     SPEC ④「座る＝腿が水平・支持面あり」に従い、股関節 y=200 の直下に座面を置く。
     支持面がないと 544px では「座っている」と読めない（vol2-l1 No.6 の正解
     「A performer is seated with an instrument.」の根拠）。 */
  'musician': (() => {
    const performer = figure(230, 236, 1, 1, 'sit');
    return composeScene({
      farGround: line(20, 236, 440, 236, SOFT, 1.5) + rect(40, 60, 120, 80, SOFT),
      farFixture: fixture('bench', 202, 202, 44, 34, { topGap: 8 }),
      figure: performer.svg
        + `<ellipse cx="252" cy="176" rx="20" ry="15" fill="${FILL}" stroke="${INK}" stroke-width="2"/>`
        + line(268, 168, 300, 148, INK, 2.5),
      nearAction: contact(
        limbArm(performer.shoulder, { x: 244, y: 168 }, { x: 250, y: 178 }),
        handMark(250, 178),
      ),
    });
  })(),

  /* 19. 自転車：しゃがんだ人物が後輪に手を掛けて調整している */
  'bicycle': (() => {
    const mechanic = figure(300, 236, -1, 1, 'crouch');
    return composeScene({
      farGround: line(20, 236, 440, 236, SOFT, 1.5) + rect(0, 40, W, 150, SOFT),
      farFixture: `<g fill="none" stroke="${INK}" stroke-width="2.5">
        <circle cx="150" cy="200" r="34"/><circle cx="250" cy="200" r="34"/>
        <path d="M150,200 L190,156 L236,156 L250,200 M190,156 L204,200 L250,200 M236,156 L230,144 L216,144"/></g>`,
      figure: mechanic.svg,
      nearAction: contact(
        limbArm(mechanic.shoulder, { x: 275, y: 205 }, { x: 255, y: 200 }),
        handMark(255, 200), cueMark(257, 199),
      ),
    });
  })(),

  /* 20. 駅のホーム：停車中の列車のそばで待つ乗客（改札や車掌はいない）
     旧実装は車体（y70〜166・fill=--card-2）と乗客の頭・胴（同じ --card-2）が
     重なっており、乗客が車体に溶けて見えなかった（vol4-l1 No.5 の正解
     「Passengers are waiting on a platform beside a train.」が絵から読めない）。
     車体を上段（y48〜128）へ寄せ、乗客の接地yを 262 へ下げて、頭頂(136)との
     間に 8 単位の空きを作る。 */
  'train-platform': (() => {
    const p1f = figure(120, 262, 1, 1, 'stand');
    const p2f = figure(190, 262, -1, 1, 'stand');
    const p3f = figure(260, 262, 1, 1, 'stand');
    return composeScene({
      farGround: line(20, 190, 440, 190, INK, 2) + line(20, 202, 440, 202, SOFT, 1.5),
      farFixture: `<rect x="30" y="48" width="400" height="80" rx="8" fill="${FILL}" stroke="${INK}" stroke-width="2"/>`
        + [0, 1, 2, 3, 4].map(i => windowFrame(52 + i * 78, 62, 52, 40)).join(''),
      figure: p1f.svg + p2f.svg + p3f.svg,
      nearAction: line(20, 262, 440, 262, INK, 2),
    });
  })(),

  /* 21. スーパー：買い物客が通路でカートを押している */
  'supermarket': (() => {
    const shopper = figure(224, 236, 1, 1, 'stand');
    return composeScene({
      farGround: line(20, 236, 440, 236, SOFT, 1.5)
        + fixture('shelf-3tier', 20, 56, 170, 150, { tiers: 4 })
        + fixture('shelf-3tier', 260, 56, 170, 150, { tiers: 4 }),
      figure: shopper.svg,
      nearAction: `<g fill="none" stroke="${INK}" stroke-width="2">
          <path d="M252,170 L296,170 L290,198 L256,198 Z"/>
          <path d="M256,198 L250,224 M290,198 L296,224"/>
          <circle cx="252" cy="228" r="5" fill="${FILL}"/><circle cx="294" cy="228" r="5" fill="${FILL}"/>
        </g>` + contact(
        limbArm(shopper.shoulder, { x: 238, y: 158 }, { x: 250, y: 172 }),
        handMark(250, 172), cueMark(252, 170),
      ),
    });
  })(),

  /* 22. 受付：診療所のカウンター。受付係はカウンターの内側、来院者は手前 */
  'clinic-reception': (() => {
    // 天面 y=176（SPEC「天面（腰高）172〜182」）＝立位(接地236)の股関節 y=176 と一致させる。
    // 旧実装は天面 y=194・接地 y=224 で、股関節(164)より天面が下だったため
    // 「脚が天面線の上で切れる」＝カウンターの上に立って見えていた。
    const staff = figure(150, 236, 1, 1, 'stand');
    const visitor = figure(300, 236, -1, 1, 'stand');
    const seated = figure(400, 236, 1, 1, 'sit');
    return composeScene({
      farGround: line(30, 226, 430, 226, SOFT, 1.5) + rect(40, 40, 130, 62, SOFT) + line(70, 70, 150, 70, INK, 1.5),
      figure: staff.svg,
      // 着席者の股関節 y=200 に座面を合わせる（旧 214 では尻が座面の 14 単位上に浮いていた）。
      // ベンチは frontFigure より前の層に置く＝着席者の脚が座面の塗りより手前に出る。
      nearFace: fixture('counter', 60, 176, 190, 60, { topGap: 12 })
        + fixture('bench', 360, 200, 90, 36, { topGap: 8 }),
      frontFigure: visitor.svg + seated.svg,
    });
  })(),

  /* 23. 屋上：太陽光パネルが傾斜をつけて設置され、しゃがんだ人物が点検している */
  'rooftop': (() => {
    const panels = [0, 1, 2].map(i => `<path d="M${40 + i * 130},200 L${100 + i * 130},200 L${118 + i * 130},156 L${58 + i * 130},156 Z" fill="${SOFT}" stroke="${INK}" stroke-width="2"/>${line(70 + i * 130, 200, 88 + i * 130, 156, INK, 1.5)}`).join('');
    // 3枚目のパネル（x300〜378 / y156〜200）と胴が重ならない位置まで右へ寄せる。
    // 旧実装は接地 x=360 で、頭（円）がパネルの中に埋まっていた。
    const worker = figure(408, 236, -1, 1, 'crouch');
    return composeScene({
      farGround: line(20, 236, 440, 236, SOFT, 1.5),
      farFixture: panels,
      figure: worker.svg,
      nearAction: contact(
        limbArm(worker.shoulder, { x: 382, y: 196 }, { x: 358, y: 198 }),
        handMark(358, 198),
      ),
    });
  })(),

  /* 24. 工場：ベルトコンベヤの脇に立ち、機械の近くに積まれた箱へ手を伸ばす作業員
     「手を伸ばす」は非接触（14 以上）で、箱の山には触れていない。 */
  'factory': (() => {
    const worker = figure(295, 236, 1, 1, 'stand');
    return composeScene({
      // 箱の山は床（y=236）に置き、機械は箱の最上段の天面(y=164)から 14 単位上へ逃がす。
      // 旧実装は箱が床から 28 単位浮いたうえ機械（同じ --card-2 の塗り）と重なっており、
      // 「Boxes have been stacked near a machine.」「a stack of cartons」が読めなかった。
      farGround: line(20, 236, 440, 236, SOFT, 1.5) + propMachine(326, 88, 90, 62),
      farFixture: rect(140, 204, 160, 10, SOFT)
        + [0, 1, 2, 3].map(i => `<circle cx="${156 + i * 36}" cy="209" r="5" fill="none" stroke="${INK}" stroke-width="1.5"/>`).join('')
        + box3(330, 204, 40, 32) + box3(374, 204, 40, 32) + box3(352, 172, 40, 32),
      figure: worker.svg,
      nearAction: contact(
        limbArm(worker.shoulder, { x: 305, y: 163 }, { x: 312, y: 185 }),
        handMark(312, 185),
      ),
    });
  })(),

  /* 25. 塗装：ローラーを壁に当てて塗っている作業員
     'bend' プリセットは接地y−頭頂yが93.5となり SPEC.md ④の許容上限(92.4)を
     わずかに超える（部品ライブラリ側の既知の誤差）。他場面は誰も 'bend' を
     使っていないため、ここでは 'stand' ＋ 斜め上方向への腕で代替する。 */
  'painting-wall': (() => {
    const painter = figure(200, 236, -1, 1, 'stand');
    return composeScene({
      farGround: line(20, 236, 440, 236, SOFT, 1.5)
        + rect(30, 40, 260, 196, SOFT)
        + `<path d="M30,40 L170,40 L170,236 L30,236 Z" fill="var(--ai-wash)" stroke="${INK}" stroke-width="2"/>`,
      figure: painter.svg,
      nearAction: contact(
        limbArm(painter.shoulder, { x: 178, y: 122 }, { x: 160, y: 108 }),
        handMark(160, 108), cueMark(162, 106),
      ) + line(160, 108, 182, 90, INK, 2.5) + rect(176, 82, 20, 10, SOFT)
        + `<path d="M330,236 L370,236 L364,206 L336,206 Z" fill="${SOFT}" stroke="${INK}" stroke-width="2"/>`,
    });
  })(),

  /* 26. 撮影：カメラを目の高さに構え、屋外で撮影している人
     旧実装はカメラが胸の高さ（y140〜160）にあり、腕も肩→下→上と折れていたため
     「構えている」と読めなかった。頭（中心 y=119）の右横・同じ高さへ移し、
     腕を肩から上向きに伸ばす。 */
  'photographer': (() => {
    const shooter = figure(180, 236, 1, 1, 'stand');
    const subject = figure(320, 236, -1, 1, 'stand');
    return composeScene({
      farGround: line(20, 236, 440, 236, SOFT, 1.5) + tree(60, 236, 1.3) + tree(410, 236, 1.1),
      figure: shooter.svg + subject.svg,
      nearAction: contact(
        limbArm(shooter.shoulder, { x: 200, y: 132 }, { x: 192, y: 118 }),
        handMark(192, 118), cueMark(194, 116),
      ) + `<rect x="188" y="104" width="30" height="20" rx="3" fill="${SOFT}" stroke="${INK}" stroke-width="2"/><circle cx="203" cy="114" r="6" fill="${FILL}" stroke="${INK}" stroke-width="2"/>`,
    });
  })(),

  /* 27. 荷積み：トラックの脇の地面に段ボール箱が積まれ、作業員が別の箱を運んでいる
     荷台の中ではなく地面に積む（荷台内に置くと窓のように見えるため）。 */
  'loading-dock': (() => {
    const carrier = figure(90, 236, 1, 1, 'stand');
    return composeScene({
      farGround: line(20, 236, 440, 236, SOFT, 1.5)
        + `<g fill="${FILL}" stroke="${INK}" stroke-width="2">
             <rect x="264" y="110" width="186" height="96" rx="4"/>
             <path d="M264,206 L264,150 L204,150 L180,186 L180,206 Z"/></g>`
        + `<circle cx="230" cy="220" r="16" fill="${FILL}" stroke="${INK}" stroke-width="2"/>`
        + `<circle cx="390" cy="220" r="16" fill="${FILL}" stroke="${INK}" stroke-width="2"/>`,
      farFixture: box3(140, 200, 34, 30) + box3(178, 200, 34, 30) + box3(159, 172, 34, 30),
      figure: carrier.svg,
      // 抱えている箱は胴（y136〜176）の 10 単位下へ下げる。
      // 旧実装は箱(y168〜204)が胴に接していて、人と箱が1つの塊に見えた。
      nearAction: box3(76, 194, 32, 28) + contact(
        limbArm(carrier.shoulder, { x: 105, y: 168 }, { x: 100, y: 192 }),
        handMark(100, 192),
      ),
    });
  })(),

  /* 28. 銀行：カウンターを挟んで向かい合い、書類を受け渡している */
  'bank-teller': (() => {
    const teller = figure(180, 236, -1, 1, 'stand');
    const customer = figure(300, 236, 1, 1, 'stand');
    return composeScene({
      farGround: line(30, 236, 430, 236, SOFT, 1.5) + windowFrame(280, 44, 150, 78),
      figure: teller.svg + customer.svg,
      nearFace: fixture('counter', 120, 176, 220, 60, { topGap: 14 }),
      nearAction: `<path d="M210,178 L262,178 L266,186 L214,190 Z" fill="${SOFT}" stroke="${INK}" stroke-width="2"/>`
        + contact(
          limbArm(teller.shoulder, { x: 195, y: 165 }, { x: 210, y: 182 }),
          handMark(210, 182), cueMark(208, 180),
        ) + contact(
          limbArm(customer.shoulder, { x: 285, y: 163 }, { x: 265, y: 182 }),
          handMark(265, 182),
        ),
    });
  })(),

  /* fallback: SCENES[u.scene] が見つからないとき（quiz.js）用の汎用の代替絵。
     旧部品系の person() を使っていたが、25場面を figure() へ移行したときに
     置き換え漏れとして残っていた。table/laptop/plant/ground は旧部品のまま
     でも問題なく描けるので、person() だけを figure() に差し替える。
     figure() の座標系（接地x,y／床基準の上方距離）に合わせ、頭頂が旧実装と
     近い高さになるよう足元(gy)を床線(=236)に合わせる。 */
  fallback: (() => {
    const worker = figure(170, 236, 1, 1, 'sit');
    return frame(`
      ${table(120, 170, 210)}${worker.svg}${laptop(230, 170)}
      ${plant(400, 210)}${ground()}`);
  })(),
};

export const SCENE_KEYS = Object.keys(SCENES).filter(k => k !== 'fallback');
