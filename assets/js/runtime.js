/* =============================================================
   runtime.js — 画面をまたいで保持する実行中の演習
   （app.js と views の循環参照を避けるため独立モジュールにする）
   ============================================================= */

import { Run } from './quiz.js';
import { getSession, clearSession } from './store.js';
import { toast } from './ui.js';

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

/**
 * 演習を起動する共通入口。中断中のセッションがあれば上書きせず、利用者に
 * 再開するか確認してから振り分ける（home / drills / review / result / mocks の
 * 起動ボタンはすべてこれを通す。mocks.js の #resume ボタンだけは「続きから
 * 再開する」という明示操作のため別途 resumeFromSession() を直接使う）。
 *
 * 戻り値は「演習を起動したか」を表す（true＝起動した／false＝何もしなかった）。
 * 呼び出し側が「N 問で開始します」のようなトーストを起動後に出す場合は、
 * この戻り値で分岐してキャンセル時に出さないようにすること。
 *
 * - 保存済みセッションが無い、または 1 問も答えず・時間も経過していない残骸
 *   （answered===0 かつ elapsedMs===0）なら、確認なしで clearSession してから
 *   新規に launch する（失うものが無いため）。
 * - 1 問でも答えている、または経過時間が残っている保存済みセッションがあれば
 *   confirm() で尋ねる。模試は 1 問も答えていなくても経過時間（残り時間）と
 *   再生済み印が消えるため、answered だけでなく elapsedMs も見る。
 *   - OK なら resumeFromSession() で再開する。
 *     復元不能（false）だった場合だけ、破棄して新規に launch する
 *     （保存済みセッション自体が壊れているので、これは「起動した」扱い）。
 *   - キャンセルなら**何もしない**。破棄を伴う操作を、取り消しを意味する
 *     ボタンの裏に置かない（ホームの「破棄」には確認があるのに、こちらの
 *     キャンセルが無確認の破棄になっていた事故の是正）。保存済みセッションは
 *     そのまま残し、画面遷移もせず、次に何をすればよいかをトーストで示す。
 */
export async function launchOrResume(cfg) {
  const key = cfg.sessionKey;
  if (!key) { launch(cfg); return true; }

  // 実行中の Run をここで先に破棄する。Run.destroy() は persist() を呼ぶので、
  // clearSession() を先に済ませてから launch()（内部で clearRun()）に入ると、
  // 同じ sessionKey で走っていた古い Run が「消したはずのセッション」を
  // localStorage に書き戻してしまう（演習画面から「中断」ボタンではなくナビで
  // 離脱した場合、current は残ったままなのでこの経路に入る）。実際に、
  // confirm で「最初からやり直す」を選んだ直後に再読み込みすると、捨てたはずの
  // セッションがホームに復活することを確認した。
  clearRun();

  const saved = getSession(key);
  const hasProgress = saved && ((saved.answered || 0) > 0 || (saved.elapsedMs || 0) > 0);
  if (hasProgress) {
    const total = saved.total ?? '?';
    const ok = confirm(
      `中断していた「${saved.label || '演習'}」が ${saved.answered || 0} / ${total} 問まで残っています。続きから再開しますか？\n（キャンセル：何もしません）`
    );
    if (!ok) {
      toast('中断中の演習はそのままにしました。最初からやり直すときは、扉の「中断中の演習」から破棄してください。');
      return false;
    }
    const resumed = await resumeFromSession(key, saved, { backTo: cfg.backTo });
    if (resumed) return true;
    // 復元不能だった保存済みセッション。破棄して新規に始める。
    // 「再開する」を選んだのに黙って最初から始まると操作が効かなかったように
    // 見えるので、home.js の resumeSession() と同じ文言で理由を伝える。
    toast('この中断データは復元できないため破棄しました。最初から始めます。');
    clearSession(key);
    launch(cfg);
    return true;
  }

  // 保存済みが無い、または 1 問も答えず時間も経っていない残骸 → 確認なしで新規に始める
  clearSession(key);
  launch(cfg);
  return true;
}
