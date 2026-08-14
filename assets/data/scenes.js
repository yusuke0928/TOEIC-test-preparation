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

/** 人物。pose: 'stand'|'sit'|'reach'|'walk'|'lean'|'point'|'carry'|'crouch'|'climb' */
function person(x, y, s = 1, { pose = 'stand', c = INK, skin = FILL } = {}) {
  const t = (v) => (v * s).toFixed(1);
  const g = (inner) => `<g transform="translate(${x},${y}) scale(${s})" stroke="${c}" stroke-width="${(2 / s).toFixed(2)}"
      fill="none" stroke-linecap="round" stroke-linejoin="round">${inner}</g>`;
  const head = `<circle cx="0" cy="-46" r="9" fill="${skin}"/>`;
  const torso = `<path d="M0,-37 L0,-12"/>`;
  const poses = {
    stand:  `${head}${torso}<path d="M0,-32 L-11,-18 M0,-32 L11,-18"/><path d="M0,-12 L-8,10 M0,-12 L8,10"/>`,
    walk:   `${head}${torso}<path d="M0,-32 L-12,-22 M0,-32 L11,-16"/><path d="M0,-12 L-11,10 M0,-12 L9,9"/>`,
    sit:    `${head}<path d="M0,-37 L0,-14"/><path d="M0,-31 L-10,-19 M0,-31 L12,-22"/><path d="M0,-14 L13,-12 L14,6"/><path d="M0,-14 L-2,-11 L-2,6"/>`,
    reach:  `${head}${torso}<path d="M0,-33 L-13,-45 M0,-32 L12,-20"/><path d="M0,-12 L-8,10 M0,-12 L8,10"/>`,
    point:  `${head}${torso}<path d="M0,-33 L16,-39 M0,-31 L-9,-17"/><path d="M0,-12 L-7,10 M0,-12 L8,10"/>`,
    carry:  `${head}${torso}<path d="M0,-31 L-11,-24 M0,-31 L11,-24"/><rect x="-13" y="-26" width="26" height="13" fill="${SOFT}" stroke="${c}"/><path d="M0,-12 L-8,10 M0,-12 L8,10"/>`,
    lean:   `<g transform="rotate(-9)">${head}${torso}<path d="M0,-32 L-11,-18 M0,-32 L11,-20"/><path d="M0,-12 L-7,10 M0,-12 L9,10"/></g>`,
    crouch: `<circle cx="0" cy="-30" r="9" fill="${skin}"/><path d="M0,-21 L0,-4"/><path d="M0,-17 L-12,-6 M0,-17 L12,-8"/><path d="M0,-4 L-9,4 L-9,10 M0,-4 L9,4 L9,10"/>`,
    type:   `${head}<path d="M0,-37 L0,-14"/><path d="M0,-30 L-12,-24 M0,-30 L12,-24"/><path d="M0,-14 L13,-12 L14,6"/><path d="M0,-14 L-2,-11 L-2,6"/>`,
    /* はしご・階段を昇る：両腕を上げ、片脚を高く曲げる */
    climb:  `${head}${torso}<path d="M0,-33 L-10,-50 M0,-33 L11,-47"/><path d="M0,-12 L-11,-4 L-11,8 M0,-12 L9,3 L9,12"/>`,
  };
  return g(poses[pose] || poses.stand);
}

const rect = (x, y, w, h, f = FILL, extra = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" stroke="${INK}" stroke-width="2" ${extra}/>`;

const line = (x1, y1, x2, y2, c = INK, w = 2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;

const table = (x, y, w, h = 8) =>
  `${rect(x, y, w, h)}${line(x + 6, y + h, x + 6, y + 46)}${line(x + w - 6, y + h, x + w - 6, y + 46)}`;

/* 段ボール箱。上面のフラップ（十字）を入れて「箱」だと読めるようにする */
const box = (x, y, s = 26) => {
  const h = s * .78;
  return `${rect(x, y, s, h, SOFT)}
    ${line(x + s / 2, y, x + s / 2, y + h * .34, INK, 1.2)}
    ${line(x, y + h * .34, x + s, y + h * .34, INK, 1.2)}`;
};

const laptop = (x, y, s = 1) =>
  `<g transform="translate(${x},${y}) scale(${s})">
     <path d="M-14,-16 L14,-16 L14,0 L-14,0 Z" fill="${FILL}" stroke="${INK}" stroke-width="2"/>
     <path d="M-19,0 L19,0 L21,5 L-21,5 Z" fill="${SOFT}" stroke="${INK}" stroke-width="2"/></g>`;

const plant = (x, y, s = 1) =>
  `<g transform="translate(${x},${y}) scale(${s})">
     <path d="M-9,0 L9,0 L7,16 L-7,16 Z" fill="${SOFT}" stroke="${INK}" stroke-width="2"/>
     <path d="M0,0 C-2,-14 -12,-16 -13,-24 M0,0 C2,-16 12,-14 13,-26 M0,0 L0,-22"
       stroke="${AI}" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>`;

const windowFrame = (x, y, w, h) =>
  `${rect(x, y, w, h, SOFT)}${line(x + w / 2, y, x + w / 2, y + h)}${line(x, y + h / 2, x + w, y + h / 2)}`;

const shelfUnit = (x, y, w, h, rows = 4) => {
  let s = rect(x, y, w, h, SOFT);
  for (let i = 1; i < rows; i++) s += line(x, y + (h / rows) * i, x + w, y + (h / rows) * i);
  return s;
};

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

const frame = (inner, sky = false) =>
  `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Part 1 の写真の代替イラスト">
     <rect width="${W}" height="${H}" fill="${sky ? 'var(--ai-wash)' : 'var(--card)'}"/>
     ${inner}
     <rect width="${W}" height="${H}" fill="none" stroke="${INK}" stroke-width="2"/>
   </svg>`;

/* ── 場面 ────────────────────────────────────────────── */
export const SCENES = {

  /* 1. オフィス：机で作業する男性、書類は積まれている
     人物 → 机 → ノート PC の順に描く。机の天板が腰から下を隠すので
     「机の向こう側に座っている」と読め、手はノート PC のキーボード左端に届く。 */
  'office-desk': frame(`
    ${windowFrame(300, 40, 120, 80)}
    ${person(150, 192, 1, { pose: 'type' })}
    ${table(120, 170, 210)}
    ${laptop(178, 170)}
    ${rect(258, 156, 30, 14, SOFT)}${rect(262, 148, 30, 10, SOFT)}
    ${plant(400, 218, 1.1)}
    ${ground()}`),

  /* 2. 会議：3 人がテーブルを囲み、1 人が立って画面を指す */
  'meeting-room': frame(`
    ${rect(40, 40, 130, 84, SOFT)}${line(52, 60, 158, 60)}${line(52, 76, 130, 76)}${line(52, 92, 146, 92)}
    ${person(190, 150, .95, { pose: 'point' })}
    ${table(60, 178, 230)}
    ${person(100, 178, .9, { pose: 'sit' })}
    ${person(150, 178, .9, { pose: 'sit' })}
    ${person(240, 178, .9, { pose: 'sit' })}
    ${laptop(200, 178, .8)}
    ${plant(400, 210)}
    ${ground()}`),

  /* 3. 工事現場：作業員がはしごを昇っている、資材が置かれている */
  'construction': frame(`
    ${rect(250, 60, 150, 176, SOFT)}
    ${line(250, 100, 400, 100)}${line(250, 145, 400, 145)}${line(250, 190, 400, 190)}
    <g stroke="${INK}" stroke-width="2.6" fill="none">
      <path d="M120,236 L150,90 M158,236 L188,90"/>
      ${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${126 + i * 5},${210 - i * 24} L${164 + i * 5},${210 - i * 24}"/>`).join('')}
    </g>
    ${person(152, 180, .92, { pose: 'climb', c: SHU })}
    ${box(30, 210)}${box(58, 210)}${box(44, 184)}
    ${ground()}`, true),

  /* 4. カフェ：カウンターで注文する客と店員
     内側の店員はカウンターより先に描いて腰から下を隠す（＝奥）、
     外側の客はカウンターより後に描いて全身を見せる（＝手前）。 */
  'cafe-counter': frame(`
    ${shelfUnit(280, 50, 150, 90, 3)}
    ${person(250, 226, 1, { pose: 'reach', c: AI })}
    ${rect(60, 206, 250, 30, FILL)}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="2">
      <rect x="180" y="192" width="16" height="14" rx="2"/>
      <rect x="206" y="194" width="14" height="12" rx="2"/></g>
    ${person(120, 236, 1, { pose: 'stand' })}
    ${ground()}`),

  /* 5. 倉庫：箱が積み重ねられ、作業員が台車を押している */
  'warehouse': frame(`
    ${shelfUnit(20, 50, 170, 186, 4)}
    ${[0, 1, 2].map(i => box(30 + i * 50, 60, 40)).join('')}
    ${[0, 1, 2].map(i => box(30 + i * 50, 106, 40)).join('')}
    ${[0, 1].map(i => box(30 + i * 50, 152, 40)).join('')}
    ${person(280, 236, 1, { pose: 'walk' })}
    ${rect(300, 190, 46, 46, SOFT)}${rect(300, 176, 46, 16, SOFT)}
    <circle cx="310" cy="240" r="6" fill="none" stroke="${INK}" stroke-width="2"/>
    <circle cx="338" cy="240" r="6" fill="none" stroke="${INK}" stroke-width="2"/>
    ${ground()}`),

  /* 6. 横断歩道：歩行者が道路を渡っている */
  'crosswalk': frame(`
    ${rect(0, 30, 130, 130, SOFT)}${rect(330, 20, 130, 140, SOFT)}
    ${windowFrame(20, 50, 40, 34)}${windowFrame(76, 50, 40, 34)}
    ${windowFrame(350, 44, 40, 34)}${windowFrame(406, 44, 40, 34)}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="1.6">
      ${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${140 + i * 32}" y="200" width="20" height="52"/>`).join('')}</g>
    ${person(180, 236, .95, { pose: 'walk' })}
    ${person(240, 236, .95, { pose: 'walk', c: SHU })}
    ${person(300, 236, .95, { pose: 'carry' })}
    ${ground(252)}`, true),

  /* 7. 厨房：調理人が鍋の前に立っている */
  'kitchen': frame(`
    ${shelfUnit(40, 40, 120, 70, 2)}
    ${rect(30, 160, 260, 12)}
    ${person(90, 160, 1, { pose: 'reach', c: AI })}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="2">
      <ellipse cx="180" cy="152" rx="26" ry="9"/><path d="M154,152 L158,138 L202,138 L206,152"/>
      <rect x="230" y="136" width="34" height="24" rx="3"/></g>
    ${plant(400, 190)}
    ${ground()}`),

  /* 8. 実験室：実験台に着席し、顕微鏡に手を掛けている研究者
     人物 → 実験台 → 器具の順。天板が腰を隠し、右手が顕微鏡のステージ左端に触れる。 */
  'laboratory': frame(`
    ${shelfUnit(290, 40, 140, 100, 3)}
    ${person(128, 190, 1, { pose: 'sit' })}
    ${table(50, 170, 220)}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="2">
      <path d="M150,168 L150,140 L166,132 L166,150"/><rect x="140" y="164" width="30" height="6"/>
      <path d="M200,168 L206,140 L214,140 L220,168 Z"/><path d="M236,168 L240,146 L248,146 L252,168 Z"/></g>
    ${ground()}`),

  /* 9. 空港：歩く旅行者と、床に立てられたスーツケース、ベンチ
     スーツケースは誰の手も触れていない。動作主のいない「状態」の写真。 */
  'airport': frame(`
    ${windowFrame(20, 40, 420, 90)}
    ${person(130, 236, 1, { pose: 'walk' })}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="2">
      <rect x="170" y="196" width="32" height="40" rx="4"/><path d="M186,196 L186,178 L172,178"/>
      <rect x="250" y="200" width="150" height="10" rx="3"/></g>
    ${line(262, 210, 262, 236)}${line(388, 210, 388, 236)}
    ${person(300, 213, .95, { pose: 'sit' })}
    ${ground()}`),

  /* 10. 図書館：棚の前で本を取り出す人 */
  'library': frame(`
    ${shelfUnit(30, 40, 180, 196, 5)}
    ${shelfUnit(230, 40, 180, 196, 5)}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="1.4">
      ${[0, 1, 2, 3].map(r => [0, 1, 2, 3, 4, 5].map(i =>
        `<rect x="${40 + i * 26}" y="${52 + r * 39}" width="18" height="28"/>`).join('')).join('')}</g>
    ${person(222, 236, 1, { pose: 'reach', c: SHU })}
    ${ground()}`),

  /* 11. 庭：植木に水をやっている */
  'garden': frame(`
    ${tree(70, 236, 1.4)}${tree(400, 236, 1.1)}
    ${person(200, 236, 1, { pose: 'reach' })}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="2">
      <path d="M186,192 L206,192 L204,208 L188,208 Z"/><path d="M206,196 L222,190"/></g>
    ${[0, 1, 2, 3].map(i => plant(280 + i * 34, 224, .8)).join('')}
    ${ground()}`, true),

  /* 12. 川と橋：ボートが停泊している */
  'waterfront': frame(`
    <rect x="0" y="170" width="${W}" height="110" fill="var(--ai-wash)"/>
    <path d="M0,150 L${W},150" stroke="${INK}" stroke-width="2"/>
    <g fill="none" stroke="${INK}" stroke-width="2">
      <path d="M20,150 L20,120 M140,150 L140,120 M300,150 L300,120 M440,150 L440,120"/>
      <path d="M0,120 L${W},120"/></g>
    <g fill="${FILL}" stroke="${INK}" stroke-width="2">
      <path d="M60,214 L74,196 L146,196 L158,214 Z"/><path d="M110,196 L110,160"/>
      <path d="M260,222 L274,204 L346,204 L358,222 Z"/><path d="M310,204 L310,168"/></g>
    ${line(0, 258, W, 258, AI, 1.4)}${line(0, 246, W, 246, AI, 1.4)}`, true),

  /* 13. 屋外市場：商品が並べられた露店 */
  'market-stall': frame(`
    <g fill="${SOFT}" stroke="${INK}" stroke-width="2">
      <path d="M40,90 L240,90 L226,120 L54,120 Z"/></g>
    ${line(56, 120, 56, 236)}${line(224, 120, 224, 236)}
    ${rect(50, 170, 180, 10)}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="1.6">
      ${[0, 1, 2, 3, 4].map(i => `<circle cx="${72 + i * 34}" cy="162" r="8"/>`).join('')}
      ${[0, 1, 2, 3].map(i => `<rect x="${66 + i * 40}" y="140" width="28" height="12" rx="3"/>`).join('')}</g>
    ${person(280, 236, 1, { pose: 'stand' })}
    ${person(340, 236, 1, { pose: 'carry', c: SHU })}
    ${ground()}`, true),

  /* 14. 講義：スクリーンの前で発表する人と着席した聴衆 */
  'presentation': frame(`
    ${rect(240, 40, 190, 110, SOFT)}
    ${line(256, 66, 400, 66)}${line(256, 88, 372, 88)}${line(256, 110, 390, 110)}
    ${person(215, 180, 1.05, { pose: 'point', c: SHU })}
    ${[0, 1, 2, 3].map(i => `${person(50 + i * 44, 236, .8, { pose: 'sit' })}`).join('')}
    ${[0, 1, 2, 3].map(i => rect(36 + i * 44, 214, 26, 6)).join('')}
    ${ground()}`),

  /* 15. ホテルのフロント
     係員はカウンターより先に描く（＝内側）。荷物を抱えた客は後に描く（＝外側）。 */
  'hotel-lobby': frame(`
    ${shelfUnit(300, 40, 130, 80, 3)}
    ${person(160, 226, 1, { pose: 'stand', c: AI })}
    ${rect(60, 206, 220, 30, FILL)}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="2"><rect x="200" y="190" width="30" height="16" rx="2"/></g>
    ${person(330, 236, 1, { pose: 'carry' })}
    ${plant(40, 217, 1.2)}
    ${ground()}`),

  /* 16. 駐車場：4 区画のうち 3 区画に車。左から 3 番目が空いている */
  'parking-lot': frame(`
    <g stroke="${INK}" stroke-width="1.6" opacity=".5">
      ${[0, 1, 2, 3, 4].map(i => `<path d="M${40 + i * 96},130 L${40 + i * 96},236"/>`).join('')}</g>
    ${car(91, 190, .9)}${car(187, 190, .9, SOFT)}${car(379, 190, .9)}
    ${rect(0, 40, W, 60, SOFT)}
    ${ground()}`, true),

  /* 17. 海辺：パラソルとデッキチェア（人はいない） */
  'beach': frame(`
    <rect x="0" y="150" width="${W}" height="40" fill="var(--ai-wash)"/>
    <g fill="${SOFT}" stroke="${INK}" stroke-width="2">
      <path d="M120,150 L188,150 L154,124 Z"/></g>
    ${line(154, 124, 154, 214)}
    <g fill="${FILL}" stroke="${INK}" stroke-width="2">
      <path d="M200,214 L246,214 L240,190 L206,190 Z"/>
      <path d="M290,214 L336,214 L330,190 L296,190 Z"/></g>
    ${ground(214)}`, true),

  /* 18. 演奏：ギターを弾く人 */
  'musician': frame(`
    ${rect(40, 60, 120, 80, SOFT)}
    ${person(230, 210, 1.15, { pose: 'sit' })}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="2">
      <ellipse cx="248" cy="180" rx="20" ry="16"/><circle cx="248" cy="180" r="5" fill="${INK}"/>
      <path d="M264,172 L306,150"/></g>
    ${rect(214, 210, 40, 8)}
    ${plant(400, 236)}
    ${ground()}`),

  /* 19. 自転車：壁の前の自転車。しゃがんだ人物が後輪に手を掛けている */
  'bicycle': frame(`
    ${rect(0, 40, W, 150, SOFT)}
    <g fill="none" stroke="${INK}" stroke-width="2.4">
      <circle cx="150" cy="200" r="34"/><circle cx="290" cy="200" r="34"/>
      <path d="M150,200 L196,152 L256,152 L290,200 M196,152 L214,200 L290,200 M256,152 L250,138 L236,138"/></g>
    ${person(320, 236, 1, { pose: 'crouch', c: SHU })}
    ${ground()}`),

  /* 20. 駅のホーム：列車と待つ乗客 */
  'train-platform': frame(`
    <g fill="${FILL}" stroke="${INK}" stroke-width="2">
      <rect x="30" y="70" width="400" height="96" rx="8"/></g>
    ${[0, 1, 2, 3, 4].map(i => windowFrame(52 + i * 78, 88, 52, 40)).join('')}
    ${line(0, 190, W, 190, INK, 2)}${line(0, 202, W, 202, INK, 1.4)}
    ${person(120, 236, 1, { pose: 'stand' })}
    ${person(200, 236, 1, { pose: 'stand', c: AI })}
    ${person(300, 236, 1, { pose: 'carry' })}
    ${ground()}`),

  /* 21. スーパー：買い物客がカートを押している */
  'supermarket': frame(`
    ${shelfUnit(20, 50, 180, 150, 4)}${shelfUnit(250, 50, 180, 150, 4)}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="1.4">
      ${[0, 1, 2].map(r => [0, 1, 2, 3].map(i =>
        `<rect x="${32 + i * 42}" y="${60 + r * 38}" width="30" height="24"/>`).join('')).join('')}</g>
    ${person(200, 236, 1, { pose: 'point' })}
    <g fill="none" stroke="${INK}" stroke-width="2">
      <path d="M216,196 L262,196 L256,224 L222,224 Z"/><path d="M216,196 L210,190"/>
      <circle cx="228" cy="232" r="5"/><circle cx="252" cy="232" r="5"/></g>
    ${ground()}`),

  /* 22. 受付：診療所のカウンター
     受付係はカウンターより先に描く（＝内側に立っている）。来院者と長椅子は手前。 */
  'clinic-reception': frame(`
    ${rect(40, 40, 140, 76, SOFT)}${line(110, 52, 110, 104)}${line(70, 78, 150, 78)}
    ${person(150, 226, 1, { pose: 'stand', c: AI })}
    ${rect(50, 206, 200, 30, FILL)}
    ${person(270, 236, 1, { pose: 'stand' })}
    ${rect(300, 200, 120, 8)}${line(312, 208, 312, 236)}${line(408, 208, 408, 236)}
    ${plant(430, 220)}
    ${ground()}`),

  /* 23. 屋上：太陽光パネルの点検 */
  'rooftop': frame(`
    <g fill="${SOFT}" stroke="${INK}" stroke-width="2">
      ${[0, 1, 2].map(i => `<path d="M${40 + i * 130},200 L${100 + i * 130},200 L${118 + i * 130},156 L${58 + i * 130},156 Z"/>`).join('')}</g>
    ${[0, 1, 2].map(i => line(70 + i * 130, 200, 88 + i * 130, 156, INK, 1.2)).join('')}
    ${person(370, 236, 1, { pose: 'crouch', c: SHU })}
    ${ground()}`, true),

  /* 24. 工場：ベルトコンベヤの脇に立ち、積まれた箱へ手を伸ばす作業員
     箱は 3 個＋2 個の二段積み。人物は左右反転させて、伸ばした手が箱の山に届く。 */
  'factory': frame(`
    ${rect(60, 100, 180, 100, SOFT)}${rect(96, 74, 40, 28, SOFT)}
    <g fill="none" stroke="${INK}" stroke-width="2">
      <circle cx="120" cy="150" r="24"/><circle cx="190" cy="150" r="16"/>
      <path d="M144,150 L174,150"/></g>
    ${rect(60, 200, 340, 10)}
    ${box(296, 177, 30)}${box(330, 177, 30)}${box(364, 177, 30)}
    ${box(313, 154, 30)}${box(347, 154, 30)}
    <g transform="translate(560,0) scale(-1,1)">${person(280, 236, 1, { pose: 'reach' })}</g>
    ${ground()}`),

  /* 25. 塗装：壁を塗っている作業員 */
  'painting-wall': frame(`
    ${rect(30, 40, 260, 196, SOFT)}
    <path d="M30,40 L160,40 L160,236 L30,236 Z" fill="var(--ai-wash)" stroke="${INK}" stroke-width="2"/>
    ${person(200, 236, 1.05, { pose: 'reach', c: SHU })}
    ${line(190, 178, 168, 150, INK, 3)}${rect(158, 138, 22, 14, SOFT)}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="2"><path d="M330,236 L370,236 L364,206 L336,206 Z"/></g>
    ${ground()}`),

  /* 26. 撮影：カメラを構えている人 */
  'photographer': frame(`
    ${tree(60, 236, 1.3)}${tree(410, 236, 1.1)}
    ${person(180, 236, 1.1, { pose: 'reach' })}
    <g fill="${SOFT}" stroke="${INK}" stroke-width="2">
      <rect x="160" y="176" width="34" height="22" rx="3"/><circle cx="177" cy="187" r="7" fill="${FILL}"/></g>
    ${person(320, 236, 1, { pose: 'stand', c: AI })}
    ${ground()}`, true),

  /* 27. 荷積み：トラックの脇に段ボール箱が積まれ、作業員が箱を運んでいる
     箱は荷台の中ではなく地面に積む（荷台の中に置くと窓のように見えてしまう）。 */
  'loading-dock': frame(`
    <g fill="${FILL}" stroke="${INK}" stroke-width="2">
      <rect x="264" y="110" width="186" height="96" rx="4"/>
      <path d="M264,206 L264,150 L204,150 L180,186 L180,206 Z"/></g>
    <circle cx="230" cy="220" r="16" fill="${FILL}" stroke="${INK}" stroke-width="2"/>
    <circle cx="390" cy="220" r="16" fill="${FILL}" stroke="${INK}" stroke-width="2"/>
    ${box(96, 210, 34)}${box(134, 210, 34)}${box(115, 183, 34)}
    ${person(40, 236, 1, { pose: 'carry', c: SHU })}
    ${ground()}`),

  /* 28. 銀行：窓口を挟んで書類を受け渡している
     行員はカウンターより先に描く（＝内側）。客は後に描く（＝外側）。
     書類は両者の手の間に置き、双方が触れている状態にする。 */
  'bank-teller': frame(`
    ${windowFrame(280, 44, 150, 84)}
    <g transform="translate(500,0) scale(-1,1)">${person(250, 226, 1, { pose: 'point', c: AI })}</g>
    ${rect(120, 206, 230, 30, FILL)}
    ${person(170, 236, 1, { pose: 'point' })}
    <path d="M186,193 L234,183 L236,191 L188,201 Z" fill="${SOFT}" stroke="${INK}" stroke-width="2"/>
    ${plant(400, 220)}
    ${ground()}`),

  fallback: frame(`
    ${table(120, 170, 210)}${person(160, 170, 1, { pose: 'sit' })}${laptop(230, 170)}
    ${plant(400, 210)}${ground()}`),
};

export const SCENE_KEYS = Object.keys(SCENES).filter(k => k !== 'fallback');
