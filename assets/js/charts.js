/* =============================================================
   charts.js — 依存ゼロの SVG グラフ
   外部ライブラリを読み込まないので、オフラインでも描画できる。
   ============================================================= */

const esc = (s) => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const path = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');

/* ── 折れ線（スコア推移）────────────────────────────── */
/** series: [{label, points:[{x(ラベル), y(値)}], cls}] */
export function lineChart({ series, min, max, height = 190, yTicks = 5, target = null, unit = '' }) {
  const W = 640, H = height, P = { t: 14, r: 14, b: 26, l: 40 };
  const iw = W - P.l - P.r, ih = H - P.t - P.b;
  const all = series.flatMap(s => s.points.map(p => p.y));
  if (!all.length) return emptySvg('データがありません');
  const lo = min ?? Math.min(...all), hi = max ?? Math.max(...all);
  const span = hi - lo || 1;
  const n = Math.max(...series.map(s => s.points.length));
  const X = (i) => P.l + (n === 1 ? iw / 2 : (i / (n - 1)) * iw);
  const Y = (v) => P.t + ih - ((v - lo) / span) * ih;

  let g = '';
  for (let i = 0; i <= yTicks; i++) {
    const v = lo + (span * i) / yTicks, y = Y(v);
    g += `<line class="grid-l" x1="${P.l}" y1="${y.toFixed(1)}" x2="${W - P.r}" y2="${y.toFixed(1)}"/>`;
    g += `<text x="${P.l - 7}" y="${(y + 3).toFixed(1)}" text-anchor="end">${Math.round(v)}</text>`;
  }
  if (target != null && target >= lo && target <= hi) {
    const y = Y(target);
    g += `<line x1="${P.l}" y1="${y.toFixed(1)}" x2="${W - P.r}" y2="${y.toFixed(1)}"
           stroke="var(--kin)" stroke-width="1.5" stroke-dasharray="5 4"/>
          <text x="${W - P.r}" y="${(y - 5).toFixed(1)}" text-anchor="end" fill="var(--kin)">目標 ${target}</text>`;
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
  const step = Math.ceil(n / 8);
  series[0].points.forEach((p, i) => {
    if (i % step === 0 || i === n - 1) {
      xl += `<text x="${X(i).toFixed(1)}" y="${H - 7}" text-anchor="middle">${esc(p.x)}</text>`;
    }
  });

  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="推移グラフ">
    ${g}<line class="axis" x1="${P.l}" y1="${P.t + ih}" x2="${W - P.r}" y2="${P.t + ih}"/>${body}${xl}
  </svg>`;
}

/* ── 横棒（パート別正答率）──────────────────────────── */
/** rows: [{label, value(0..1), n, sub, target}] */
export function barsH(rows, { height = 26, showTarget = true } = {}) {
  if (!rows.length) return emptySvg('データがありません');
  const W = 640, rowH = height, P = { t: 6, l: 116, r: 54, b: 6 };
  const H = P.t + rows.length * rowH + P.b;
  const iw = W - P.l - P.r;
  let s = '';
  rows.forEach((r, i) => {
    const y = P.t + i * rowH;
    const cy = y + rowH / 2;
    const w = Math.max(0, Math.min(1, r.value || 0)) * iw;
    const good = r.target == null || r.value >= r.target;
    s += `<text x="${P.l - 10}" y="${cy + 3.5}" text-anchor="end" class="lbl">${esc(r.label)}</text>`;
    s += `<rect x="${P.l}" y="${cy - 7}" width="${iw}" height="14" fill="var(--rule-soft)" rx="2"/>`;
    s += `<rect x="${P.l}" y="${cy - 7}" width="${w.toFixed(1)}" height="14" rx="2"
            fill="${good ? 'var(--ai)' : 'var(--shu)'}"><title>${esc(r.label)}: ${Math.round((r.value || 0) * 100)}%${r.n ? ` (${r.n}問)` : ''}</title></rect>`;
    if (showTarget && r.target != null) {
      const tx = P.l + r.target * iw;
      s += `<line x1="${tx.toFixed(1)}" y1="${cy - 10}" x2="${tx.toFixed(1)}" y2="${cy + 10}" stroke="var(--kin)" stroke-width="1.5"/>`;
    }
    s += `<text x="${W - P.r + 8}" y="${cy + 3.5}" class="lbl">${Math.round((r.value || 0) * 100)}%</text>`;
  });
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="正答率グラフ">${s}</svg>`;
}

/* ── 縦棒（時間帯・曜日など）────────────────────────── */
export function barsV(rows, { height = 150, unit = '' } = {}) {
  if (!rows.length) return emptySvg('データがありません');
  const W = 640, H = height, P = { t: 12, r: 8, b: 26, l: 34 };
  const iw = W - P.l - P.r, ih = H - P.t - P.b;
  const hi = Math.max(...rows.map(r => r.value), 1);
  const bw = iw / rows.length;
  let s = '';
  [0, .5, 1].forEach(f => {
    const y = P.t + ih - f * ih;
    s += `<line class="grid-l" x1="${P.l}" y1="${y}" x2="${W - P.r}" y2="${y}"/>
          <text x="${P.l - 6}" y="${y + 3}" text-anchor="end">${Math.round(hi * f)}</text>`;
  });
  rows.forEach((r, i) => {
    const h = (r.value / hi) * ih;
    const x = P.l + i * bw + bw * .18;
    s += `<rect class="bar ${r.hot ? 'bar--shu' : ''}" x="${x.toFixed(1)}" y="${(P.t + ih - h).toFixed(1)}"
            width="${(bw * .64).toFixed(1)}" height="${Math.max(h, 1).toFixed(1)}" rx="2">
            <title>${esc(r.label)}: ${r.value}${unit}</title></rect>`;
    s += `<text x="${(P.l + i * bw + bw / 2).toFixed(1)}" y="${H - 8}" text-anchor="middle">${esc(r.label)}</text>`;
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
    <text x="50%" y="48%" text-anchor="middle" font-size="19" font-weight="600" fill="var(--ink)"
      font-family="var(--f-mono)">${label}</text>
    <text x="50%" y="63%" text-anchor="middle" font-size="8.5" fill="var(--ink-3)">${esc(sub)}</text>
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

function emptySvg(msg) {
  return `<svg class="chart" viewBox="0 0 640 120" role="img">
    <text x="320" y="62" text-anchor="middle" fill="var(--ink-3)" font-size="12">${esc(msg)}</text></svg>`;
}
