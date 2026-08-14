#!/usr/bin/env node
/* =============================================================
   scenecheck.mjs — Part 1 線画の幾何検査
   design/part1/SPEC.md に書かれた「数値規則」を機械的に検査する。
   人が目視で見落としていた種類の欠陥（腕が届かない、天面に立って
   見える、箱が窓に見える、等）を、座標計算で捕まえるためのツール。
   assets/** は一切変更しない・書き換えない。読むだけ。

   使い方:
     node tools/scenecheck.mjs                 scenes.js の全場面を検査
     node tools/scenecheck.mjs warehouse        場面キーに "warehouse" を含むものだけ
     node tools/scenecheck.mjs --ref            design/part1/*.svg（見本）を検査
     node tools/scenecheck.mjs --ref warehouse  見本のうち "warehouse" を含むものだけ
     node tools/scenecheck.mjs --dir <path>     任意ディレクトリの *.svg を検査
                                                 （わざと壊したコピーでの動作確認用。--ref と同じ扱い）
     node tools/scenecheck.mjs --verbose        場面ごとの data-part 内訳も表示

   仕組み:
     SVG 文字列を正規表現で読むのではなく、実ブラウザ（Playwright/Chromium、
     tools/node_modules 既存の依存）に読み込ませ、DOM の SVGGraphicsElement.getCTM()
     で translate/scale/rotate を合成した「場面座標系（0 0 460 280）での絶対座標」を
     取得する。手書きの行列演算をしない分、入れ子の transform でも壊れない。
   ============================================================= */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'assets/data');
const REF_DIR = path.join(ROOT, 'design/part1');

/* ── コマンドライン引数 ────────────────────────────────── */
const rawArgs = process.argv.slice(2);
const useRef = rawArgs.includes('--ref');
const verbose = rawArgs.includes('--verbose');
const dirAt = rawArgs.indexOf('--dir');
const customDir = dirAt === -1 ? null : rawArgs[dirAt + 1];
const filterArg = rawArgs.find((a, i) => !a.startsWith('--') && rawArgs[i - 1] !== '--dir') || null;
const norm = (s) => String(s).toLowerCase();
const hit = (s) => !filterArg || norm(s).includes(norm(filterArg));

/* ── 集計の入れ物（validate.mjs の作法に合わせる） ───────── */
const issues = [];   // { level:'ERROR'|'WARN'|'NOTE', key, msg }
const err  = (key, msg) => issues.push({ level: 'ERROR', key, msg });
const warn = (key, msg) => issues.push({ level: 'WARN',  key, msg });
const note = (key, msg) => issues.push({ level: 'NOTE',  key, msg });

/* ══ 検査項目の一覧（実装状況を先頭に必ず表示する） ════════ */
const CHECKS = [
  { n: 1,  name: '腕の長さ（肩→肘 ≤30 / 肘→手 ≤28）',                 impl: true,  level: 'ERROR' },
  { n: 2,  name: '手と対象の距離（0〜2 か 14 以上のどちらか）',         impl: true,  level: 'ERROR（bbox 距離の近似）' },
  { n: 3,  name: '接点マーカー cue の個数（1場面 1〜2 個まで）',        impl: true,  level: 'ERROR' },
  { n: 4,  name: '複数人物の接地 y 分離（20 以上）',                    impl: true,  level: 'WARN（重なりうる場合のみ）' },
  { n: 5,  name: '姿勢の高さ（接地y基準。立126/座100/しゃがむ78/かがむ84 ±4、上限は手前1.1倍許容） ※11と統合実装', impl: true,  level: 'ERROR' },
  { n: 6,  name: '箱が三面か（data-part=box の path ≥3）',              impl: true,  level: 'ERROR' },
  { n: 7,  name: '色指定（fill/stroke は var(--…) か none のみ）',      impl: true,  level: 'ERROR' },
  { n: 8,  name: '線幅（1.5/2/2.5/3 の4値のみ）',                       impl: true,  level: 'WARN' },
  { n: 9,  name: 'viewBox 固定（0 0 460 280）',                         impl: true,  level: 'ERROR' },
  { n: 10, name: '人物の最小寸法（頭部 r≥8 / 胴の高さ≥38）',            impl: true,  level: 'ERROR' },
  { n: 11, name: '人物の全高 ※項目5と同一の測定・同一の判定に統合（別々の絶対基準で二重判定しない）', impl: true,  level: 'ERROR' },
  { n: 12, name: '手前人物と奥什器のクリアランス（8 単位以上）',        impl: true,  level: 'WARN（bbox 距離の近似）' },
];
const SKIPPED = [
  '①動作主の有無（無人版が什器を1単位も動かしていないかの差分比較） — 有人/無人のペア対応を機械的に決められないため見送り。',
  '①肩幅 ≥28 — 依頼された12項目の一覧に含まれていないため見送り（胴の高さ判定と同じ経路で拾えるので追加は容易）。',
  '⑤ 積む/並べる/散らばる の配置規則（隙間0・等間隔10〜14・回転±12°など） — 「どの箱の集合が同一グループか」を機械的に決める根拠が data-part だけでは弱く、誤検知の危険が高いため見送り。',
  'light/dark 両方で線が見える／544px で姿勢が判別できる（受け入れチェック末尾2項目） — 実際のレンダリング結果の目視評価が要るため、幾何検査の対象外。',
];

/* ── 対象 SVG の読み込み ───────────────────────────────── */
/* posture-reference.svg は「場面」ではなく姿勢の相対関係だけを示す別スケールの図
   （viewBox が "0 0 460 150" で本編の "0 0 460 280" と違う。data-part も
   "posture-*" で本編の "figure-*" と違う）。--ref の既定検査からは除外する
   （検査したい場合は明示的に --dir design/part1 で読める）。 */
const REF_EXCLUDE = new Set(['posture-reference']);
function loadDir(dir, exclude = null) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg')).sort();
  return files
    .map(f => ({ id: path.basename(f, '.svg'), svg: fs.readFileSync(path.join(dir, f), 'utf8') }))
    .filter(t => !exclude || !exclude.has(t.id));
}
async function loadTargets() {
  if (customDir) return loadDir(path.resolve(process.cwd(), customDir));
  if (useRef) return loadDir(REF_DIR, REF_EXCLUDE);
  const { SCENES, SCENE_KEYS } = await import(path.join(DATA, 'scenes.js'));
  return SCENE_KEYS.map(id => ({ id, svg: SCENES[id] }));
}

/* ══ ブラウザ内での DOM 抽出 ═════════════════════════════
   ここでは「測る」ことだけをブラウザにやらせ、規則の判定は Node 側で行う。 */
async function extractScene(page, svgString) {
  await page.setContent(`<!doctype html><html><body>${svgString}</body></html>`);
  return page.evaluate(() => {
    const svgRoot = document.querySelector('svg');
    if (!svgRoot) return null;

    /* viewBox に合わせて width/height を明示する。
       これをしないと getCTM() が「viewBox → 既定の描画サイズ」の
       余計な拡大縮小まで含んでしまい、座標が数値仕様と一致しなくなる。 */
    const vb = svgRoot.getAttribute('viewBox');
    if (vb) {
      const [, , w, h] = vb.trim().split(/[\s,]+/).map(Number);
      if (w && h) { svgRoot.setAttribute('width', String(w)); svgRoot.setAttribute('height', String(h)); }
    }

    function ctmPoint(el, x, y) {
      const pt = svgRoot.createSVGPoint();
      pt.x = x; pt.y = y;
      const m = el.getCTM();
      if (!m) return { x, y };
      const tp = pt.matrixTransform(m);
      return { x: tp.x, y: tp.y };
    }
    function ctmLength(el, len) {
      const p0 = ctmPoint(el, 0, 0);
      const p1 = ctmPoint(el, len, 0);
      return Math.hypot(p1.x - p0.x, p1.y - p0.y);
    }
    function bboxOf(pts) {
      if (!pts.length) return null;
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      for (const [x, y] of pts) { if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; }
      return { minX, minY, maxX, maxY };
    }
    /* path の d= を M/L/H/V/Z（絶対・相対）だけ厳密に解釈する軽量パーサ。
       C/S/Q/T/A（曲線・弧）が出てきたら諦めて呼び出し側で getBBox() にフォールバックする。
       このコードベースの図形パス（箱・胴体）は M/L/Z のみで構成されている。 */
    function parsePathPoints(d) {
      const tokens = d.match(/[MLHVZmlhvz]|-?\d*\.?\d+(?:e-?\d+)?/g) || [];
      let i = 0, cx = 0, cy = 0, sx = 0, sy = 0;
      const pts = [];
      let hasCurve = false;
      const num = () => parseFloat(tokens[i++]);
      while (i < tokens.length) {
        const cmd = tokens[i++];
        if (cmd === 'M') { cx = num(); cy = num(); sx = cx; sy = cy; pts.push([cx, cy]); }
        else if (cmd === 'm') { cx += num(); cy += num(); sx = cx; sy = cy; pts.push([cx, cy]); }
        else if (cmd === 'L') { cx = num(); cy = num(); pts.push([cx, cy]); }
        else if (cmd === 'l') { cx += num(); cy += num(); pts.push([cx, cy]); }
        else if (cmd === 'H') { cx = num(); pts.push([cx, cy]); }
        else if (cmd === 'h') { cx += num(); pts.push([cx, cy]); }
        else if (cmd === 'V') { cy = num(); pts.push([cx, cy]); }
        else if (cmd === 'v') { cy += num(); pts.push([cx, cy]); }
        else if (cmd === 'Z' || cmd === 'z') { cx = sx; cy = sy; pts.push([cx, cy]); }
        else { hasCurve = true; break; }
      }
      return { pts, hasCurve };
    }

    const allEls = [svgRoot, ...svgRoot.querySelectorAll('*')];
    const idxOf = new Map(allEls.map((el, i) => [el, i]));

    const elements = allEls.map((el, idx) => {
      const tag = el.tagName.toLowerCase();
      const ownFill = el.getAttribute('fill');
      const ownStroke = el.getAttribute('stroke');
      const ownStrokeWidth = el.getAttribute('stroke-width');
      const dataPartSelf = el.getAttribute('data-part');

      /* 最も近い data-part 保持祖先（自分含む）の idx */
      let p = el, groupIdx = -1;
      while (p && p !== svgRoot.parentElement) {
        if (p.hasAttribute && p.hasAttribute('data-part')) { groupIdx = idxOf.get(p); break; }
        p = p.parentElement;
      }
      if (dataPartSelf != null) groupIdx = idx; // 自分自身が data-part を持つならそれを優先

      let geom = null;
      const num = (name) => { const v = el.getAttribute(name); return v == null ? 0 : parseFloat(v); };

      if (tag === 'circle') {
        const c = ctmPoint(el, num('cx'), num('cy'));
        const r = ctmLength(el, num('r'));
        geom = { type: 'circle', cx: c.x, cy: c.y, r, bbox: { minX: c.x - r, maxX: c.x + r, minY: c.y - r, maxY: c.y + r } };
      } else if (tag === 'ellipse') {
        const c = ctmPoint(el, num('cx'), num('cy'));
        const rx = ctmLength(el, num('rx')), ry = ctmLength(el, num('ry'));
        geom = { type: 'circle', cx: c.x, cy: c.y, r: (rx + ry) / 2, bbox: { minX: c.x - rx, maxX: c.x + rx, minY: c.y - ry, maxY: c.y + ry } };
      } else if (tag === 'rect') {
        const x = num('x'), y = num('y'), w = num('width'), h = num('height');
        const corners = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]].map(([px, py]) => { const t = ctmPoint(el, px, py); return [t.x, t.y]; });
        geom = { type: 'poly', pts: corners, bbox: bboxOf(corners) };
      } else if (tag === 'line') {
        const p1 = ctmPoint(el, num('x1'), num('y1')), p2 = ctmPoint(el, num('x2'), num('y2'));
        const pts = [[p1.x, p1.y], [p2.x, p2.y]];
        geom = { type: 'poly', pts, bbox: bboxOf(pts) };
      } else if (tag === 'polyline' || tag === 'polygon') {
        const raw = (el.getAttribute('points') || '').trim();
        const nums = raw.split(/[\s,]+/).filter(Boolean).map(Number);
        const pts = [];
        for (let i = 0; i + 1 < nums.length; i += 2) { const t = ctmPoint(el, nums[i], nums[i + 1]); pts.push([t.x, t.y]); }
        geom = { type: 'poly', pts, bbox: bboxOf(pts) };
      } else if (tag === 'path') {
        const d = el.getAttribute('d') || '';
        const { pts: localPts, hasCurve } = parsePathPoints(d);
        if (!hasCurve && localPts.length) {
          const pts = localPts.map(([px, py]) => { const t = ctmPoint(el, px, py); return [t.x, t.y]; });
          geom = { type: 'poly', pts, bbox: bboxOf(pts), exact: true };
        } else {
          try {
            const bb = el.getBBox();
            const corners = [[bb.x, bb.y], [bb.x + bb.width, bb.y], [bb.x + bb.width, bb.y + bb.height], [bb.x, bb.y + bb.height]]
              .map(([px, py]) => { const t = ctmPoint(el, px, py); return [t.x, t.y]; });
            geom = { type: 'poly', pts: corners, bbox: bboxOf(corners), exact: false };
          } catch { geom = null; }
        }
      }

      return { idx, tag, ownFill, ownStroke, ownStrokeWidth, dataPartSelf, groupIdx, r: geom && geom.r, geom };
    });

    return { viewBox: svgRoot.getAttribute('viewBox'), elements };
  });
}

/* ══ 幾何ユーティリティ（Node 側） ═══════════════════════ */
const dist = (ax, ay, bx, by) => Math.hypot(ax - bx, ay - by);
function pointToBBoxDist(px, py, bbox) {
  const dx = Math.max(bbox.minX - px, 0, px - bbox.maxX);
  const dy = Math.max(bbox.minY - py, 0, py - bbox.maxY);
  return Math.hypot(dx, dy);
}
function bboxToBBoxDist(a, b) {
  const dx = Math.max(a.minX - b.maxX, b.minX - a.maxX, 0);
  const dy = Math.max(a.minY - b.maxY, b.minY - a.maxY, 0);
  return Math.hypot(dx, dy);
}
function mergeBBox(list) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const b of list) { if (!b) continue; if (b.minX < minX) minX = b.minX; if (b.maxX > maxX) maxX = b.maxX; if (b.minY < minY) minY = b.minY; if (b.maxY > maxY) maxY = b.maxY; }
  return minX === Infinity ? null : { minX, minY, maxX, maxY };
}

/* SPEC.md ④「床 y=250 を基準にした頭頂 y」（立124/座150/しゃがむ172/かがむ166）は、
   「絶対座標が124でなければならない」ではなく「床 y=250 のときに頭頂がそこに来る＝
   接地 y から頭頂までの高さがその値になる」と読む（250引く値＝その姿勢の素の全高）。
   根拠: SPEC 共通座標「人物の全高 126〜138」は 250-124=126 と一致する。SPEC③は
   「手前の人物は接地yを奥より+20以上下」＝人物ごとに接地yが違う設計を前提にしており、
   絶対座標を固定する読み方とは矛盾する。よって「そのfigure自身の接地yからの高さ」を
   測る（姿勢=footのgroundY − headTop）。 */
const POSE_HEIGHT = { stand: 126, sit: 100, crouch: 78, bend: 84 }; // = 250 − SPEC.md の頭頂y
const LINE_WIDTHS = new Set([1.5, 2, 2.5, 3]);
const CONCEALING_FIXTURES = new Set(['counter', 'bench', 'table']); // 意図的に脚を隠す前面什器

function checkScene(key, data) {
  if (!data) { err(key, 'SVG を DOM に読み込めなかった（<svg> が見つからない）'); return; }
  const { viewBox, elements } = data;

  /* 9. viewBox 固定 */
  if (viewBox !== '0 0 460 280') err(key, `viewBox が "${viewBox}"（"0 0 460 280" 固定のはず）`);

  /* 7. 色指定は var(--…) か none のみ */
  const colorOk = (v) => v === 'none' || /^var\(--[\w-]+\)$/.test(v);
  for (const e of elements) {
    if (e.ownFill != null && !colorOk(e.ownFill)) err(key, `<${e.tag}>#${e.idx} の fill="${e.ownFill}" が var(--…) でも none でもない`);
    if (e.ownStroke != null && !colorOk(e.ownStroke)) err(key, `<${e.tag}>#${e.idx} の stroke="${e.ownStroke}" が var(--…) でも none でもない`);
  }

  /* 8. 線幅は 1.5/2/2.5/3 のみ（WARN） */
  for (const e of elements) {
    if (e.ownStrokeWidth == null) continue;
    const w = Number(e.ownStrokeWidth);
    if (!Number.isFinite(w) || !LINE_WIDTHS.has(w))
      warn(key, `<${e.tag}>#${e.idx} の stroke-width="${e.ownStrokeWidth}" が 1.5/2/2.5/3 のどれでもない`);
  }

  /* data-part グループを構築 */
  const groups = new Map(); // groupIdx -> { part, members:[element,...] }
  for (const e of elements) {
    if (e.groupIdx < 0) continue;
    const partEl = elements[e.groupIdx];
    if (!groups.has(e.groupIdx)) groups.set(e.groupIdx, { part: partEl.dataPartSelf, members: [] });
    groups.get(e.groupIdx).members.push(e);
  }

  /* data-part が1つもない場面は、項目 1/2/3/4/5/6/10/11/12（9項目）の判定材料が
     そもそも存在しない。「エラー0件」は「規則を満たしている」ではなく
     「この場面はまだ data-part 記法に対応していないので判定できない」ことを意味する。
     この違いを毎回明示しないと、0件がそのまま合格に見えてしまう。 */
  if (groups.size === 0)
    warn(key, 'この場面には data-part 属性が一切ない。項目1/2/3/4/5/6/10/11/12（手・腕・人物姿勢・箱の三面など）はこのツールでは判定できない（未実装ではなく、判定対象のタグ自体が存在しないため。判定できたのは項目7/8/9のみ）');

  /* 6. 箱は三面（data-part="box" の path ≥3） */
  for (const [, g] of groups) {
    if (g.part !== 'box') continue;
    const pathCount = g.members.filter(m => m.tag === 'path').length;
    if (pathCount < 3) err(key, `data-part="box" のグループが path ${pathCount} 個（三面なら3つ以上のはず）`);
  }

  /* 1. 動作腕（stroke-width=3 の polyline）の長さ */
  const arms = elements.filter(e => e.tag === 'polyline' && Number(e.ownStrokeWidth) === 3 && e.geom && e.geom.pts.length >= 2);
  for (const a of arms) {
    const pts = a.geom.pts;
    if (pts.length === 3) {
      const seg1 = dist(pts[0][0], pts[0][1], pts[1][0], pts[1][1]);
      const seg2 = dist(pts[1][0], pts[1][1], pts[2][0], pts[2][1]);
      if (seg1 > 30.5) err(key, `動作腕 polyline#${a.idx} の肩→肘が ${seg1.toFixed(1)}（上限30）`);
      if (seg2 > 28.5) err(key, `動作腕 polyline#${a.idx} の肘→手が ${seg2.toFixed(1)}（上限28）`);
    } else {
      warn(key, `動作腕 polyline#${a.idx} の頂点数が ${pts.length}（3点=肩・肘・手 を想定。目視確認）`);
    }
  }

  /* 2. 手と対象の距離（0〜2 か 14 以上のどちらか） */
  const isHand = (e) => e.tag === 'circle' && e.ownFill === 'var(--card-2)' && Math.abs((elLocalR(e)) - 4.5) < 0.05;
  const isCue = (e) => e.tag === 'circle' && e.ownFill === 'var(--shu)' && Math.abs((elLocalR(e)) - 2.5) < 0.05;
  function elLocalR(e) {
    // circle の r は変換後の値が geom.r に入っている。局所半径の判定は「変換前の生の値」で行いたいが、
    // このコードベースは等方スケールしか使わないため、変換後の r をそのまま許容差込みで用いても実用上問題ない。
    return e.geom ? e.geom.r : NaN;
  }
  const handEls = elements.filter(isHand);
  const cueEls = elements.filter(isCue);
  const armPolylineIdx = new Set(arms.map(a => a.idx));
  for (const hand of handEls) {
    const hg = groups.get(hand.groupIdx);
    const ownPart = hg ? hg.part : null;
    let best = null;
    for (const cand of elements) {
      if (!cand.geom || !cand.geom.bbox) continue;
      if (cand.idx === hand.idx) continue;
      if (isHand(cand) || isCue(cand)) continue;                 // 他の手・cue は対象外
      if (armPolylineIdx.has(cand.idx)) continue;                // 腕そのものは対象外
      if (cand.groupIdx === hand.groupIdx) continue;              // 自分と同じ data-part グループ（自分の体）は対象外
      const d = pointToBBoxDist(hand.geom.cx, hand.geom.cy, cand.geom.bbox);
      if (best === null || d < best.d) best = { d, cand };
    }
    if (!best) continue; // 比較対象が見つからない場合は判定不能として何も言わない
    const d = best.d;
    if (d > 2 && d < 14) {
      err(key, `手(circle#${hand.idx}, group="${ownPart ?? '?'}") と最寄り図形<${best.cand.tag}>#${best.cand.idx}(group="${groups.get(best.cand.groupIdx)?.part ?? '?'}")の距離が ${d.toFixed(1)}（0〜2=接触 / 14以上=非接触 のどちらでもない中間帯。bboxベースの近似距離）`);
    }
  }

  /* 3. 接点マーカー cue は 1場面 1〜2 個まで */
  if (cueEls.length > 2) err(key, `接点マーカー cue が ${cueEls.length} 個（1場面 1〜2 個までのはず）`);

  /* figure グループの収集（姿勢別） */
  const figureGroups = [...groups.entries()]
    .filter(([, g]) => /^figure-(stand|sit|crouch|bend|lean)$/.test(g.part || ''))
    .map(([idx, g]) => ({ idx, pose: g.part.replace('figure-', ''), members: g.members }));

  for (const fig of figureGroups) {
    /* 頭部候補の抽出は r≥8 で絞り込まない（それだと「頭部が小さすぎる」違反自体を
       検出できなくなる）。手(r≈4.5)・cue(r≈2.5) のサイズだけ除外し、
       残った circle の中で最大の r を頭部とみなして、そのうえで 8 未満かを判定する。 */
    const headCandidates = fig.members.filter(m =>
      m.tag === 'circle' && m.geom &&
      Math.abs(m.geom.r - 4.5) >= 0.05 && Math.abs(m.geom.r - 2.5) >= 0.05);
    const head = headCandidates.sort((a, b) => b.geom.r - a.geom.r)[0];
    const torsoCandidates = fig.members.filter(m => m.tag === 'path' && m.ownFill === 'var(--card-2)');
    const torso = torsoCandidates[0];
    const groupBBox = mergeBBox(fig.members.map(m => m.geom && m.geom.bbox).filter(Boolean));

    /* 10. 人物の最小寸法：頭部 r≥8 */
    if (head && head.geom.r < 8 - 0.05) err(key, `figure-${fig.pose}#${fig.idx} の頭部 r=${head.geom.r.toFixed(1)}（最小8のはず）`);
    if (!head) warn(key, `figure-${fig.pose}#${fig.idx} で頭部らしき circle（r≥8）が見つからない — 未検査`);

    /* 10. 胴の高さ ≥38 */
    if (torso && torso.geom.bbox) {
      const h = torso.geom.bbox.maxY - torso.geom.bbox.minY;
      if (h < 38 - 0.5) err(key, `figure-${fig.pose}#${fig.idx} の胴の高さが ${h.toFixed(1)}（最小38のはず）`);
    } else {
      warn(key, `figure-${fig.pose}#${fig.idx} で胴らしき path（fill=var(--card-2)）が見つからない — 未検査`);
    }

    /* 5. 姿勢（頭頂と接地yの高さ）／ 11. 人物の全高 は、どちらも同じ量
       （そのfigure自身の接地y − 頭頂y）を見る規則なので、ここでは1回だけ測って
       まとめて判定する（別々の絶対値・別々の許容差で二重に測ると矛盾しうるため）。
       許容: 基準は ±4。手前の人物は SPEC③ により寸法1.1倍で描かれるため、
       上振れだけは「基準 or 基準×1.1」の大きい方まで許す（下振れには1.1倍を適用しない）。
       "lean" は SPEC④ の表に基準値がないため対象外（判定不能・未検査）。 */
    if (head && groupBBox) {
      const headTop = head.geom.cy - head.geom.r;
      const height = groupBBox.maxY - headTop;   // 接地y(=groupBBox.maxY) からの高さ
      const base = POSE_HEIGHT[fig.pose];
      if (base != null) {
        const lower = base - 4;
        const upper = Math.max(base + 4, base * 1.1);
        if (height < lower - 0.5 || height > upper + 0.5)
          err(key, `figure-${fig.pose}#${fig.idx} の高さ（接地y−頭頂y）が ${height.toFixed(1)}（規定 ${lower.toFixed(1)}〜${upper.toFixed(1)}。基準${base}＝250−SPEC.mdの頭頂y、上限は手前1.1倍を許容）`);
      }
    }

    fig.torso = torso;
    fig.groupBBox = groupBBox;
    fig.groundY = groupBBox ? groupBBox.maxY : null;
  }

  /* 4. 複数人物の接地 y 分離（20 以上）。水平方向に重なりうる組だけを対象にし、
     完全に離れた配置での誤検知を避ける（WARN — 判定の根拠がやや弱いため）。 */
  for (let i = 0; i < figureGroups.length; i++) {
    for (let j = i + 1; j < figureGroups.length; j++) {
      const a = figureGroups[i], b = figureGroups[j];
      if (a.groundY == null || b.groundY == null || !a.groupBBox || !b.groupBBox) continue;
      const overlapX = a.groupBBox.minX < b.groupBBox.maxX && b.groupBBox.minX < a.groupBBox.maxX;
      const diff = Math.abs(a.groundY - b.groundY);
      if (overlapX && diff < 20)
        warn(key, `figure-${a.pose}#${a.idx} と figure-${b.pose}#${b.idx} の接地 y の差が ${diff.toFixed(1)}（左右に重なりうる位置で20未満。前後の人物なら要修正、横並びの意図なら無視可）`);
    }
  }

  /* 12. 手前人物の胴と、奥の什器（意図的に脚を隠す counter/bench/table を除く）のクリアランス ≥8 */
  const fixtureGroups = [...groups.entries()].filter(([, g]) => g.part && !/^figure-/.test(g.part) && g.part !== 'contact' && !CONCEALING_FIXTURES.has(g.part));
  for (const fig of figureGroups) {
    if (!fig.torso || !fig.torso.geom || !fig.torso.geom.bbox) continue;
    for (const [gidx, g] of fixtureGroups) {
      if (gidx === fig.idx) continue;
      const bb = mergeBBox(g.members.map(m => m.geom && m.geom.bbox).filter(Boolean));
      if (!bb) continue;
      const d = bboxToBBoxDist(fig.torso.geom.bbox, bb);
      if (d < 8) warn(key, `figure-${fig.pose}#${fig.idx} の胴と data-part="${g.part}"#${gidx} の輪郭が ${d.toFixed(1)}（8未満。塗りが同色なので1つの塊に見える恐れ。bboxベースの近似距離）`);
    }
  }

  if (verbose) {
    const tally = new Map();
    for (const [, g] of groups) tally.set(g.part, (tally.get(g.part) || 0) + 1);
    const parts = [...tally.entries()].map(([k, v]) => `${k}x${v}`).join(', ') || '(data-part なし)';
    note(key, `data-part 内訳: ${parts}`);
  }
}

/* ══ メイン ═══════════════════════════════════════════════ */
const targets = (await loadTargets()).filter(t => hit(t.id));

console.log('Part1 線画 — 幾何検査' + (filterArg ? `（絞り込み: "${filterArg}"）` : ''));
const sourceLabel = customDir ? `${customDir}/*.svg（--dir）` : useRef ? 'design/part1/*.svg（見本）' : 'assets/data/scenes.js';
console.log(`検査対象: ${sourceLabel} ${targets.length} 点`);
if (useRef) console.log('（posture-reference.svg は姿勢の相対関係だけを示す別スケールの図のため既定では除外。検査するには --dir design/part1）');
console.log('\n── 実装済み検査項目 ──');
for (const c of CHECKS) console.log(`  [${c.impl ? 'x' : ' '}] ${c.n}. ${c.name} → ${c.level}`);
console.log('── 見送った項目 ──');
for (const s of SKIPPED) console.log(`  - ${s}`);
console.log('');

if (!targets.length) {
  console.log(filterArg ? `※ "${filterArg}" にマッチする対象がありません` : '※ 検査対象が0件です');
}

const browser = await chromium.launch();
const page = await browser.newPage();
try {
  for (const t of targets) {
    if (!t.svg) { err(t.id, 'SVG 文字列が空（scenes.js に未登録、または fallback）'); continue; }
    const data = await extractScene(page, t.svg);
    checkScene(t.id, data);
  }
} finally {
  await browser.close();
}

/* ── 出力 ─────────────────────────────────────────────── */
const errorList = issues.filter(i => i.level === 'ERROR');
const warnList = issues.filter(i => i.level === 'WARN');
const noteList = issues.filter(i => i.level === 'NOTE');

for (const i of errorList) console.log(`ERROR ${i.key}: ${i.msg}`);
for (const i of warnList) console.log(`WARN  ${i.key}: ${i.msg}`);
for (const i of noteList) console.log(`NOTE  ${i.key}: ${i.msg}`);

/* 場面ごとの件数内訳 */
console.log('\n── 場面ごとの件数 ──');
for (const t of targets) {
  const e = errorList.filter(i => i.key === t.id).length;
  const w = warnList.filter(i => i.key === t.id).length;
  if (e || w) console.log(`  ${t.id}: ERROR ${e} / WARN ${w}`);
}

console.log(`\nエラー ${errorList.length}件 / 警告 ${warnList.length}件 / 検査場面 ${targets.length}件`);
if (errorList.length) process.exitCode = 1;
