/* =============================================================
   mocks.js — 予想模試（一覧 / 詳細）
   ============================================================= */

import { MOCK_META, loadMock, availableMocks, mockAvailable } from '../../data/registry.js';
import { pageHead, sectionHead, esc, pct, meter, empty, toast, partLabel, jaDateTime, hhmmss, stat } from '../ui.js';
import { state, attemptsDesc, getSession } from '../store.js';
import { launch, resumeFromSession } from '../runtime.js';
import { PART_SIZE } from '../score.js';
import { lineChart } from '../charts.js';
import * as A from '../analytics.js';

export default async function mocks(el) {
  const attempts = attemptsDesc().filter(a => a.mode === 'mock');
  const byMock = {};
  for (const a of attempts) (byMock[a.sourceId] ||= []).push(a);
  const hist = A.scoreHistory().filter(h => !h.partial);
  const metas = await availableMocks();
  const ready = metas.filter(m => m.available);

  el.innerHTML = `
    ${pageHead({
      kicker: 'MOCK EXAMINATIONS',
      title: '予想模試',
      sub: '本番と同じ 200 問・約 2 時間の構成。すべて書き下ろしのオリジナル問題です。',
      aside: `<span class="chip">${ready.length} 回分 / ${(ready.length * 200).toLocaleString()} 問</span>`,
    })}

    <div class="card" style="background:var(--shu-wash);border-color:color-mix(in srgb,var(--shu) 30%,transparent)">
      <p class="note" style="color:var(--ink-2)">
        <b style="color:var(--shu)">収録内容について</b> — TOEIC® の過去問題は主催者（ETS／IIBC）が一切公開しておらず、
        取得・再配布はできません。本アプリの模試は公開されている<b>出題形式の仕様</b>（Part 1: 6問 / Part 2: 25問 / Part 3: 39問 /
        Part 4: 30問 / Part 5: 30問 / Part 6: 16問 / Part 7: 54問）に厳密に合わせて新規に作成した予想問題です。
      </p>
    </div>

    ${hist.length >= 2 ? `
      ${sectionHead('01', 'スコア推移', `模試 ${hist.length} 回`)}
      <div class="card">
        ${lineChart({
          series: [{ label: '合計', points: hist.map(h => ({ x: `#${h.label?.match(/\d/)?.[0] || ''}`, y: h.total })) }],
          min: 600, max: 990, target: 900, unit: '点',
        })}
      </div>` : ''}

    ${sectionHead(hist.length >= 2 ? '02' : '01', '模試一覧', '上から順に受けるのが推奨')}
    <div class="stack">
      ${metas.map(m => {
        const done = byMock[m.id] || [];
        const best = done.filter(a => a.full).sort((a, b) => b.scaled.total - a.scaled.total)[0];
        const paused = m.available ? getSession(`mock-${m.id}`) : null;
        const body = `
          <div class="inline" style="justify-content:space-between;align-items:flex-start;gap:1rem">
            <div style="flex:1;min-width:0">
              <div class="inline" style="gap:.5rem">
                <span class="chip chip--solid">Vol.${m.no}</span>
                ${!m.available ? '<span class="chip">準備中</span>' : ''}
                ${paused ? '<span class="chip chip--shu">中断中</span>' : ''}
                ${m.available
                  ? (done.length ? `<span class="chip chip--ok">受験 ${done.length} 回</span>` : '<span class="chip">未受験</span>')
                  : ''}
              </div>
              <div style="font-family:var(--f-display);font-size:1.18rem;font-weight:600;letter-spacing:.06em;margin-top:.5rem">${esc(m.title)}</div>
              <div class="note" style="margin-top:.2rem">${esc(m.theme)}</div>
              <div class="note" style="margin-top:.15rem;color:var(--ink-3)">${m.available ? esc(m.note) : '収録作業中です。公開までお待ちください。'}</div>
            </div>
            <div class="tar" style="flex:none">
              ${!m.available ? '<div class="note mono">— 準備中 —</div>'
                : best ? `<div class="stat__v" style="font-size:2rem;color:var(--shu)">${best.scaled.total}</div>
                        <div class="note mono">L${best.scaled.L} / R${best.scaled.R}</div>
                        <div class="note mono" style="font-size:.62rem">${jaDateTime(best.ts)}</div>`
                     : '<div class="note mono">— 未受験 —</div>'}
            </div>
          </div>`;
        return m.available
          ? `<a class="card" href="#/mocks/${esc(m.id)}" style="display:block">${body}</a>`
          : `<div class="card" style="display:block;opacity:.6" aria-disabled="true">${body}</div>`;
      }).join('')}
    </div>`;
}

/* ── 詳細 ────────────────────────────────────────────── */
export async function detail(el, id) {
  const meta = MOCK_META.find(m => m.id === id);
  if (!meta) { el.innerHTML = empty('無', '模試が見つかりません', '<a class="btn" href="#/mocks">一覧へ</a>'); return; }

  el.innerHTML = `<div class="empty"><div class="empty__k">朱</div><p>問題を読み込んでいます…</p></div>`;

  let mock;
  try {
    if (!(await mockAvailable(id))) throw new Error('未収録');
    mock = await loadMock(id);
  } catch (e) {
    el.innerHTML = `${pageHead({
      kicker: `MOCK EXAM Vol.${meta.no}`, title: meta.title, sub: meta.theme,
      aside: `<a class="btn btn--ghost btn--sm" href="#/mocks">← 模試一覧</a>`,
    })}${empty('準', 'この回はまだ収録されていません。', '<a class="btn" href="#/mocks">一覧へ戻る</a>')}`;
    return;
  }

  const units = mock.units || [];
  const counts = {};
  for (const u of units) for (const q of u.questions) counts[u.part] = (counts[u.part] || 0) + 1;
  const totalQ = Object.values(counts).reduce((s, n) => s + n, 0);
  const history = attemptsDesc().filter(a => a.sourceId === id);
  const paused = getSession(`mock-${id}`);

  el.innerHTML = `
    ${pageHead({
      kicker: `MOCK EXAM Vol.${meta.no}`,
      title: meta.title,
      sub: meta.theme,
      aside: `<a class="btn btn--ghost btn--sm" href="#/mocks">← 模試一覧</a>`,
    })}

    ${paused ? `<div class="card" style="border-color:var(--shu);border-left-width:3px">
      <div class="inline" style="justify-content:space-between">
        <div><div class="stat__k">中断中</div>
        <div class="note">${paused.answered ?? 0} / ${paused.total ?? totalQ} 問まで解答済み</div></div>
        <button class="btn btn--shu" id="resume">続きから再開</button>
      </div></div>` : ''}

    <div class="grid grid--sidebar ${paused ? 'mt2' : ''}">
      <div class="card">
        <div class="stat__k">構成</div>
        <div class="tbl-wrap mt"><table class="tbl">
          <thead><tr><th>パート</th><th>形式</th><th class="num">本番</th><th class="num">収録</th></tr></thead>
          <tbody>${[1, 2, 3, 4, 5, 6, 7].map(p => `<tr>
            <td class="mono">Part ${p}</td>
            <td>${esc(partLabel(p).split('・')[1])}</td>
            <td class="num mono">${PART_SIZE[p]}</td>
            <td class="num mono" style="color:${(counts[p] || 0) === PART_SIZE[p] ? 'var(--midori)' : 'var(--shu)'}">${counts[p] || 0}</td>
          </tr>`).join('')}
          <tr style="border-top:2px solid var(--ink)"><td colspan="2"><b>合計</b></td>
            <td class="num mono"><b>200</b></td><td class="num mono"><b>${totalQ}</b></td></tr>
          </tbody></table></div>
        <p class="note mt">${esc(meta.note)}</p>
      </div>

      <div class="card">
        <div class="stat__k">受験形式を選ぶ</div>
        <div class="stack mt">
          <button class="btn btn--shu btn--block" data-run="full">
            フル受験（${totalQ} 問・120 分）</button>
          <button class="btn btn--ghost btn--block" data-run="L">リスニングのみ（Part 1–4）</button>
          <button class="btn btn--ghost btn--block" data-run="R">リーディングのみ（Part 5–7・75 分）</button>
        </div>
        <div class="stat__k" style="margin-top:1.3rem">パート指定</div>
        <div class="inline mt">
          ${[1, 2, 3, 4, 5, 6, 7].map(p =>
            `<button class="btn btn--ghost btn--sm" data-run="p${p}">Part ${p}</button>`).join('')}
        </div>
        <label class="switch mt2">
          <input type="checkbox" id="opt-instant">
          <span><span class="switch__t">1 問ずつ採点する</span>
          <span class="switch__d">本番形式では最後にまとめて採点します</span></span>
        </label>
      </div>
    </div>

    ${history.length ? `
      ${sectionHead('LOG', '受験履歴', `${history.length} 回`)}
      <div class="card card--flush"><div class="rows">
        ${history.map(a => {
          const ok = a.items.filter(i => i.correct).length;
          return `<a class="row" href="#/result/${esc(a.id)}">
            <span class="row__no">${a.full ? 'FULL' : '部分'}</span>
            <span><span class="row__t">${esc(a.label)}</span>
              <span class="row__s">${jaDateTime(a.ts)}　${hhmmss(a.durationMs)}　${a.items.length} 問中 ${ok} 問正解</span></span>
            <span class="row__r">${a.full ? `<span style="color:var(--shu);font-size:1.05rem">${a.scaled.total}</span><br>` : ''}
              <span class="note">${pct(ok / a.items.length)}</span></span>
          </a>`;
        }).join('')}
      </div></div>` : ''}
  `;

  const startWith = (filter, label, opts = {}) => {
    const picked = units.filter(filter);
    if (!picked.length) { toast('該当するパートが収録されていません'); return; }
    const n = picked.reduce((s, u) => s + u.questions.length, 0);
    launch({
      mode: 'mock', label: `${meta.title}${label ? '｜' + label : ''}`,
      sourceId: id, units: picked,
      instant: el.querySelector('#opt-instant')?.checked ?? false,
      full: opts.full ?? false,
      timeLimitMs: opts.timeLimitMs ?? 0,
      sessionKey: opts.full ? `mock-${id}` : `mock-${id}-${label}`,
      backTo: `#/mocks/${id}`,
      autoPlay: true,
      restore: { kind: 'mock', id, unitIds: picked.map(u => u.id) },
    });
    toast(`${n} 問で開始します`);
  };

  el.querySelectorAll('[data-run]').forEach(b => b.addEventListener('click', () => {
    const v = b.dataset.run;
    if (v === 'full') return startWith(() => true, '', { full: true, timeLimitMs: 120 * 60000 });
    if (v === 'L') return startWith(u => u.part <= 4, 'Listening');
    if (v === 'R') return startWith(u => u.part >= 5, 'Reading', { timeLimitMs: 75 * 60000 });
    const p = Number(v.slice(1));
    return startWith(u => u.part === p, `Part ${p}`);
  }));

  el.querySelector('#resume')?.addEventListener('click', async () => {
    const key = `mock-${id}`;
    if (await resumeFromSession(key, paused, { backTo: `#/mocks/${id}` })) return;
    // 旧形式のセッション（復元素性なし）はフル模試として組み直す
    launch({
      mode: 'mock', label: meta.title, sourceId: id, units,
      instant: false, full: true, timeLimitMs: 120 * 60000,
      sessionKey: key, resumeFrom: paused, backTo: `#/mocks/${id}`,
      restore: { kind: 'mock', id, unitIds: units.map(u => u.id) },
    });
  });
}
