import { getRun } from '../runtime.js';

export default function exam(el) {
  const run = getRun();
  if (!run) { location.hash = '#/'; return; }
  run.mount(el);
  return () => run.destroy();
}
