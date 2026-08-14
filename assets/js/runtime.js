/* =============================================================
   runtime.js — 画面をまたいで保持する実行中の演習
   （app.js と views の循環参照を避けるため独立モジュールにする）
   ============================================================= */

import { Run } from './quiz.js';

let current = null;

export const getRun = () => current;
export function setRun(run) { current = run; return run; }
export function clearRun() {
  try { current?.destroy?.(); } catch (e) { /* noop */ }
  current = null;
}

/** 演習を作って試験画面へ遷移する */
export function launch(cfg) {
  clearRun();
  const run = new Run({
    ...cfg,
    onExit: () => { current = null; location.hash = cfg.backTo || '#/'; },
    onFinish: (attempt) => { current = null; location.hash = `#/result/${attempt.id}`; },
  });
  if (cfg.resumeFrom) run.restore(cfg.resumeFrom);
  setRun(run);
  location.hash = '#/exam';
  return run;
}

/* ── 中断セッションの復元 ─────────────────────────────────
   セッションには restore = { kind, ... } を保存してある。
   同じユニットを同じ順序で組み直せないと、保存した page や
   answers が別の設問に対応してしまうため、必ず ID で引き直す。 */

/** restore 素性から、保存時とまったく同じ順序のユニット配列を作る */
export async function unitsFromRestore(ref) {
  if (!ref || !ref.kind) return null;
  const reg = await import('../data/registry.js');

  if (ref.kind === 'qids') {
    const ids = Array.isArray(ref.ids) ? ref.ids : [];
    if (!ids.length) return null;
    return await reg.unitsForQuestionIds(ids);
  }

  let pool = [];
  if (ref.kind === 'mock') {
    if (!ref.id) return null;
    if (!(await reg.mockAvailable(ref.id))) return null;
    const mock = await reg.loadMock(ref.id);
    pool = mock.units || [];
  } else if (ref.kind === 'drills') {
    pool = await reg.loadDrills();
  } else {
    return null;
  }

  if (!Array.isArray(ref.unitIds) || !ref.unitIds.length) return pool;
  const byId = new Map(pool.map(u => [u.id, u]));
  const picked = ref.unitIds.map(id => byId.get(id)).filter(Boolean);
  // 1 つでも欠けていたら順序が保証できないので復元しない
  return picked.length === ref.unitIds.length ? picked : null;
}

/**
 * 保存済みセッションを再開する。
 * 復元素性が無い（旧形式）／設問を組み直せない場合は false を返す。
 */
export async function resumeFromSession(key, session, { backTo } = {}) {
  if (!session) return false;
  const units = await unitsFromRestore(session.restore);
  if (!units?.length) return false;
  launch({
    mode: session.mode || 'drill',
    label: session.label || '演習',
    sourceId: session.sourceId || null,
    units,
    instant: session.instant ?? (session.mode !== 'mock'),
    full: !!session.full,
    timeLimitMs: session.timeLimitMs || 0,
    sessionKey: key,
    resumeFrom: session,
    restore: session.restore,
    backTo: backTo || session.backTo || '#/',
  });
  return true;
}
