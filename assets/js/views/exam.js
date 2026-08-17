import { getRun } from '../runtime.js';

export default function exam(el) {
  const run = getRun();
  if (!run) { location.hash = '#/'; return; }
  // 演習中はモバイルのタブバーを隠す（app.css の body.is-exam ルール）。
  // 誤タップで演習を離脱する事故を防ぐのと、固定バーの重なり回避の逃げ幅を
  // 減らして画面を広く使うため。離脱時（cleanup）に必ず外す。
  document.body.classList.add('is-exam');
  run.mount(el);
  return () => {
    document.body.classList.remove('is-exam');
    run.destroy();
  };
}
