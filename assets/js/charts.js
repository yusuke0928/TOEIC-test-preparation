/* =============================================================
   charts.js — 依存ゼロの SVG グラフ
   外部ライブラリを読み込まないので、オフラインでも描画できる。
   ============================================================= */

const esc = (s) => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ── 実寸フィット ──────────────────────────────────────
   viewBox を固定幅(640)にして CSS で縮めると、携帯幅では文字が実寸 5px 前後になる。
   そこで「viewBox の 1 単位 = 画面の 1px」になる幅で描く。描く時点では置き場の幅が
   分からないので、初回は画面幅からの推定、挿入後に fitCharts() が実測して
   ずれていれば同じ引数で描き直す（文字は常に CSS で 11px）。 */
const REG = new Map();
let SEQ = 0;
/* ラベルの描画幅の見積もり（等幅 7px／全角 12px） */
const tw = (t) => [...String(t)].reduce((a, c) => a + (/[\u3000-\u9fff\uff00-\uffef]/.test(c) ? 12 : 7), 0);
const guessW = () => Math.max(260, Math.min(640, (globalThis.innerWidth || 640) - 76));
function reg(build, w = guessW()) {
  const id = ++SEQ;
  REG.set(id, build);
  return build(Math.round(w)).replace('<svg class="chart"', `<svg data-cid="${id}" data-w="${Math.round(w)}" class="chart"`);
}
export function fitCharts(root = document) {
  root.querySelectorAll('svg.chart[data-cid]').forEach(svg => {
    const build = REG.get(Number(svg.dataset.cid));
    const w = Math.round(svg.getBoundingClientRect().width);
    const cur = Number(svg.dataset.w);
    if (!build || !w || !cur || Math.abs(w - cur) / cur <= 0.04) return;
    const tpl = document.createElement('template');
    tpl.innerHTML = reg(build, w);
    svg.replaceWith(tpl.content.firstElementChild);
  });
  root.querySelectorAll('.heat:not([data-sc])').forEach(h => { if (h.scrollWidth > h.clientWidth) { h.scrollLeft = h.scrollWidth; h.dataset.sc = '1'; } });
  if (REG.size > 300) REG.clear();
}
let _fitQueued = false;
if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined') {
  const queue = () => { if (_fitQueued) return; _fitQueued = true; requestAnimationFrame(() => { _fitQueued = false; fitCharts(); }); };
  const start = () => { new MutationObserver(queue).observe(document.body, { childList: true, subtree: true }); window.addEventListener('resize', queue); queue(); };
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
}

const path = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');

/* ── 折れ線（スコア推移）────────────────────────────── */
/** series: [{label, points:[{x(ラベル), y(値)}], cls}] */
export function lineChart(o) { return reg(w => lineChartW(o, w)); }
function lineChartW({ series, min, max, height = 190, yTicks = 5, target = null, unit = '' }, W) {
  const H = height, P = { t: 14, r: 14, b: 34, l: 42 };
  const iw = W - P.l - P.r, ih = H - P.t - P.b;
  yTicks = Math.max(2, Math.min(yTicks, Math.floor(ih / 24)));
  const all = series.flatMap(s => s.points.map(p => p.y));
  if (!all.length) return emptySvg('データがありません', W);
  /* 軸の下限より低い記録があるときは、点を線上に押し付けず、下限のほうを記録の最小値に合わせて下げる */
  const dmin = Math.min(...all);
  const lo = min == null ? dmin : Math.min(min, Math.floor(dmin / 50) * 50), hi = max ?? Math.max(...all);
  const span = hi - lo || 1;
  const n = Math.max(...series.map(s => s.points.length));
  const X = (i) => P.l + (n === 1 ? iw / 2 : (i / (n - 1)) * iw);
  const Y = (v) => P.t + ih - ((Math.max(lo, Math.min(hi, v)) - lo) / span) * ih;

  let g = '';
  for (let i = 0; i <= yTicks; i++) {
    const v = lo + (span * i) / yTicks, y = Y(v);
    g += `<line class="grid-l" x1="${P.l}" y1="${y.toFixed(1)}" x2="${W - P.r}" y2="${y.toFixed(1)}"/>`;
    g += `<text x="${P.l - 7}" y="${(y + 4).toFixed(1)}" text-anchor="end">${Math.round(v)}</text>`;
  }
  if (target != null && target >= lo && target <= hi) {
    const y = Y(target);
    g += `<line x1="${P.l}" y1="${y.toFixed(1)}" x2="${W - P.r}" y2="${y.toFixed(1)}"
           stroke="var(--kin)" stroke-width="1.5" stroke-dasharray="5 4"/>
          <text x="${W - P.r}" y="${(y - 6).toFixed(1)}" text-anchor="end" fill="var(--kin)">目標 ${target}</text>`;
  }

  let body = '';
  series.forEach((s) => {
    const pts = s.points.map((p, i) => [X(i), Y(p.y)]);
    if (s.area !== false && series.length === 1) {
      body += `<path class="area" d="${path(pts)} L${pts.at(-1)[0].toFixed(1)},${P.t + ih} L${pts[0][0].toFixed(1)},${P.t + ih} Z"/>`;
    }
    body += `<path class="line ${s.cls || ''}" d="${path(pts)}"/>`;
    pts.forEach((p, i) => {
      body += `<circle class="dot ${s.cls || ''}" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.6"><title>${esc(s.label)} ${esc(s.points[i].x)}: ${s.points[i].y}${unit}</title></circle>`;
    });
  });

  let xl = '';
  const lw = Math.max(...series[0].points.map(p => tw(p.x)));
  const colW = n === 1 ? iw : iw / (n - 1);
  const step = Math.max(1, Math.ceil((lw + 12) / colW));
  series[0].points.forEach((p, i) => {
    /* 右端（最新）を必ず残し、そこから step ごとに遡る（重なる側は左の目盛りを落とす） */
    if ((n - 1 - i) % step === 0) {
      xl += `<text x="${X(i).toFixed(1)}" y="${H - 8}" text-anchor="middle">${esc(p.x)}</text>`;
    }
  });

  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="推移グラフ">
    ${g}<line class="axis" x1="${P.l}" y1="${P.t + ih}" x2="${W - P.r}" y2="${P.t + ih}"/>${body}${xl}
  </svg>`;
}

/* ── 横棒（パート別正答率）──────────────────────────── */
/** rows: [{label, value(0..1), n, sub, target}] */
export function barsH(rows, o = {}) { return reg(w => barsHW(rows, o, w)); }
function barsHW(rows, { height = 28, showTarget = true } = {}, W) {
  if (!rows.length) return emptySvg('データがありません', W);
  const rowH = Math.max(height, 28), P = { t: 6, l: Math.min(150, Math.max(104, Math.round(W * .3))), r: 52, b: 6 };
  const H = P.t + rows.length * rowH + P.b;
  const iw = W - P.l - P.r;
  let s = '';
  rows.forEach((r, i) => {
    const y = P.t + i * rowH;
    const cy = y + rowH / 2;
    const w = Math.max(0, Math.min(1, r.value || 0)) * iw;
    const good = r.target == null || r.value >= r.target;
    s += `<text x="${P.l - 10}" y="${cy + 4}" text-anchor="end" class="lbl">${esc(r.label)}</text>`;
    s += `<rect x="${P.l}" y="${cy - 7}" width="${iw}" height="14" fill="var(--rule-soft)" rx="2"/>`;
    s += `<rect x="${P.l}" y="${cy - 7}" width="${w.toFixed(1)}" height="14" rx="2"
            fill="${good ? 'var(--ai)' : 'var(--shu)'}"><title>${esc(r.label)}: ${Math.round((r.value || 0) * 100)}%${r.n ? ` (${r.n}問)` : ''}</title></rect>`;
    if (showTarget && r.target != null) {
      const tx = P.l + r.target * iw;
      s += `<line x1="${tx.toFixed(1)}" y1="${cy - 10}" x2="${tx.toFixed(1)}" y2="${cy + 10}" stroke="var(--kin)" stroke-width="1.5"/>`;
    }
    s += `<text x="${W - P.r + 8}" y="${cy + 4}" class="lbl">${Math.round((r.value || 0) * 100)}%</text>`;
  });
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="正答率グラフ">${s}</svg>`;
}

/* ── 縦棒（時間帯・曜日など）────────────────────────── */
export function barsV(rows, o = {}) { return reg(w => barsVW(rows, o, w)); }
function barsVW(rows, { height = 150, unit = '' } = {}, W) {
  if (!rows.length) return emptySvg('データがありません', W);
  const H = height, P = { t: 14, r: 8, b: 34, l: 36 };
  const iw = W - P.l - P.r, ih = H - P.t - P.b;
  const hi = Math.max(...rows.map(r => r.value), 1);
  const bw = iw / rows.length;
  const vstep = Math.max(1, Math.ceil((Math.max(...rows.map(r => tw(r.label))) + 10) / bw));
  let s = '';
  [0, .5, 1].forEach(f => {
    const y = P.t + ih - f * ih;
    s += `<line class="grid-l" x1="${P.l}" y1="${y}" x2="${W - P.r}" y2="${y}"/>
          <text x="${P.l - 6}" y="${y + 4}" text-anchor="end">${Math.round(hi * f)}</text>`;
  });
  rows.forEach((r, i) => {
    const h = (r.value / hi) * ih;
    const x = P.l + i * bw + bw * .18;
    s += `<rect class="bar ${r.hot ? 'bar--shu' : ''}" x="${x.toFixed(1)}" y="${(P.t + ih - h).toFixed(1)}"
            width="${(bw * .64).toFixed(1)}" height="${Math.max(h, 1).toFixed(1)}" rx="2">
            <title>${esc(r.label)}: ${r.value}${unit}</title></rect>`;
    if ((rows.length - 1 - i) % vstep === 0) {
      s += `<text x="${(P.l + i * bw + bw / 2).toFixed(1)}" y="${H - 9}" text-anchor="middle">${esc(r.label)}</text>`;
    }
  });
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img">${s}</svg>`;
}

/* ── リング（達成率）────────────────────────────────── */
export function ring(value, { size = 108, label = '', sub = '', color = 'var(--shu)' } = {}) {
  const r = size / 2 - 9, c = 2 * Math.PI * r, v = Math.max(0, Math.min(1, value));
  return `<svg class="chart chart--fixed" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" role="img">
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--rule-soft)" stroke-width="8"/>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${color}" stroke-width="8"
      stroke-linecap="round" stroke-dasharray="${(c * v).toFixed(1)} ${c.toFixed(1)}"
      transform="rotate(-90 ${size / 2} ${size / 2})" style="transition:stroke-dasharray .9s cubic-bezier(.2,.8,.25,1)"/>
    <text x="50%" y="46%" text-anchor="middle" font-size="19" font-weight="600" fill="var(--ink)"
      font-family="var(--f-mono)">${label}</text>
    <text x="50%" y="71%" text-anchor="middle" font-size="11" fill="var(--ink-3)">${esc(sub)}</text>
  </svg>`;
}

/* ── 学習カレンダー（草）────────────────────────────── */
/** counts: { 'YYYY-MM-DD': 問題数 } */
export function heatmap(counts, weeks = 26) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const start = new Date(today);
  start.setDate(start.getDate() - (weeks * 7 - 1));
  start.setDate(start.getDate() - start.getDay());   // 日曜始まり
  const vals = Object.values(counts);
  const hi = vals.length ? Math.max(...vals) : 1;
  const lvl = (n) => !n ? 0 : n >= hi * .75 ? 4 : n >= hi * .5 ? 3 : n >= hi * .25 ? 2 : 1;

  let html = '<div class="heat">';
  const d = new Date(start);
  while (d <= today) {
    const key = ymd(d);
    const n = counts[key] || 0;
    html += `<div class="heat__c" data-l="${lvl(n)}" title="${key}　${n}問"></div>`;
    d.setDate(d.getDate() + 1);
  }
  html += '</div>';
  return html;
}

export const ymd = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

function emptySvg(msg, W = 640) {
  return `<svg class="chart" viewBox="0 0 ${W} 120" role="img">
    <text x="${W / 2}" y="62" text-anchor="middle" fill="var(--ink-3)" style="font-size:14px">${esc(msg)}</text></svg>`;
}
