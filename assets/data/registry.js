/* =============================================================
   registry.js — 問題データの目録と遅延読み込み
   模試 1 回分は数百 KB になるため、必要になった時点で import する。
   ============================================================= */

export const MOCK_META = [
  { id: 'vol1', no: 1, title: '予想模試 Vol.1',
    theme: '標準回 — 全パート平均的な難度',
    note: 'まず現在地を測る 1 回目。素直な出題で構成。',
    loader: () => import('./mocks/vol1.js') },
  { id: 'vol2', no: 2, title: '予想模試 Vol.2',
    theme: 'リスニング強化回 — Part 3/4 に図表・意図問題を増量',
    note: '先読みが崩れると一気に落ちる構成。',
    loader: () => import('./mocks/vol2.js') },
  { id: 'vol3', no: 3, title: '予想模試 Vol.3',
    theme: 'リーディング高負荷回 — Part 7 の総語数を上振れ',
    note: '時間切れを起こしやすい。ペース配分の検証用。',
    loader: () => import('./mocks/vol3.js') },
  { id: 'vol4', no: 4, title: '予想模試 Vol.4',
    theme: '語彙難化回 — Part 5 の語彙問題を 900 帯に寄せる',
    note: '知らない語が正解位置に来る。消去法の精度を測る。',
    loader: () => import('./mocks/vol4.js') },
  { id: 'vol5', no: 5, title: '予想模試 Vol.5',
    theme: '総仕上げ回 — 本番と同等かやや難',
    note: '直前期に。ここで 900 が出れば本番も射程。',
    loader: () => import('./mocks/vol5.js') },
];

export const DRILL_FILES = [
  () => import('./drills/grammar.js'),
  () => import('./drills/grammar2.js'),
  () => import('./drills/grammar3.js'),
  () => import('./drills/grammar4.js'),
  () => import('./drills/grammar5.js'),
  () => import('./drills/grammar6.js'),
  () => import('./drills/vocab.js'),
  () => import('./drills/vocab2.js'),
  () => import('./drills/vocab3.js'),
  () => import('./drills/vocab4.js'),
  () => import('./drills/vocab5.js'),
  () => import('./drills/context.js'),
  () => import('./drills/context2.js'),
  () => import('./drills/context3.js'),
  () => import('./drills/reading.js'),
  () => import('./drills/reading2.js'),
  () => import('./drills/reading3.js'),
  () => import('./drills/reading4.js'),
  () => import('./drills/listening.js'),
  () => import('./drills/listening2.js'),
  () => import('./drills/listening3.js'),
  () => import('./drills/listening4.js'),
  () => import('./drills/part1.js'),
];

const cache = new Map();

export async function loadMock(id) {
  if (cache.has(id)) return cache.get(id);
  const meta = MOCK_META.find(m => m.id === id);
  if (!meta) throw new Error(`模試 ${id} が見つかりません`);
  const mod = await meta.loader();
  const data = { ...meta, units: mod.UNITS };
  cache.set(id, data);
  return data;
}

/* ── 収録済みかどうかの判定 ──────────────────────────────
   目録には将来分も並べてあるが、ファイルが未作成の回がある。
   本体（数百 KB）を読み込まずに HEAD で実体だけを確かめる。
   判定できない環境では「あり」に倒し、導線を消さない。          */
const availability = new Map();

export function mockAvailable(id) {
  if (availability.has(id)) return availability.get(id);
  const p = (async () => {
    if (cache.has(id)) return true;
    try {
      const url = new URL(`./mocks/${id}.js`, import.meta.url);
      const res = await fetch(url, { method: 'HEAD', cache: 'no-store' });
      return res.ok;
    } catch (e) {
      return true;
    }
  })();
  availability.set(id, p);
  return p;
}

/** MOCK_META に available フラグを付けて返す */
export async function availableMocks() {
  const flags = await Promise.all(MOCK_META.map(m => mockAvailable(m.id)));
  return MOCK_META.map((m, i) => ({ ...m, available: flags[i] }));
}

let drillsPromise = null;
export function loadDrills() {
  if (!drillsPromise) {
    drillsPromise = Promise.all(DRILL_FILES.map(f => f().catch(e => {
      console.warn('[toeic900] ドリルの読み込みに失敗', e);
      return { UNITS: [] };
    }))).then(mods => mods.flatMap(m => m.UNITS || []));
  }
  return drillsPromise;
}

/** 指定論点のユニットだけ取り出す */
export async function unitsForTopic(topicId) {
  const all = await loadDrills();
  return all.filter(u =>
    (u.topics || []).includes(topicId) ||
    (u.questions || []).some(q => (q.topics || []).includes(topicId)));
}

/** 全ドリルの論点別問題数 */
export async function drillCounts() {
  const all = await loadDrills();
  const c = {};
  for (const u of all) {
    for (const q of u.questions) {
      const ts = q.topics?.length ? q.topics : (u.topics || []);
      for (const t of ts) c[t] = (c[t] || 0) + 1;
    }
  }
  return c;
}

/** ID から設問（と所属ユニット）を引く — 復習キュー用 */
let indexPromise = null;
export function buildIndex() {
  if (!indexPromise) {
    indexPromise = (async () => {
      const idx = new Map();
      const drills = await loadDrills();
      const register = (units, src) => {
        for (const u of units) for (const q of u.questions) idx.set(q.id, { unit: u, q, src });
      };
      register(drills, 'drill');
      for (const m of MOCK_META) {
        if (!(await mockAvailable(m.id))) continue;   // 未収録回は静かに飛ばす
        try {
          const mod = await m.loader();
          register(mod.UNITS, m.id);
        } catch (e) { console.warn(`[toeic900] ${m.id} 読み込み失敗`, e); }
      }
      return idx;
    })();
  }
  return indexPromise;
}

/**
 * 設問 ID の配列から「復習用ユニット」を組み立てる。
 * 同じ元ユニットに属する設問はまとめ、本文・音声を保ったまま出題する。
 */
export async function unitsForQuestionIds(ids) {
  const idx = await buildIndex();
  const byUnit = new Map();
  for (const id of ids) {
    const hit = idx.get(id);
    if (!hit) continue;
    if (!byUnit.has(hit.unit.id)) byUnit.set(hit.unit.id, { unit: hit.unit, qs: [] });
    byUnit.get(hit.unit.id).qs.push(hit.q);
  }
  return [...byUnit.values()].map(({ unit, qs }) => ({
    ...unit,
    id: `rev-${unit.id}`,
    questions: unit.kind === 'doc' || unit.kind === 'set' ? unit.questions : qs,
    // 本文つきユニットは全問出す（文脈が壊れるため）。単問はヒットしたものだけ。
  }));
}
