/* =============================================================
   review.js — 復習キュー（間隔反復）
   ============================================================= */

import { state, dueItems, dueCount, dueTodayCount, missedItems, flaggedItems, itemStat } from '../store.js';
import { unitsForQuestionIds, buildIndex } from '../../data/registry.js';
import { pageHead, sectionHead, esc, pct, empty, toast, partLabel, relTime, meter } from '../ui.js';
import { launch } from '../runtime.js';
import { barsV } from '../charts.js';
import { topicName } from '../../data/topics.js';

export default async function review(el) {
  const due = dueItems();
  const missed = missedItems();
  const flagged = flaggedItems();
  const forecast = dueForecast();
  // 「期限到来 0」なのにグラフの今日に山が立つ、という食い違いを防ぐため
  // 「いま来ている数」と「本日中に来る数」を分けて数える
  const laterToday = Math.max(0, dueTodayCount() - due.length);

  el.innerHTML = `
    ${pageHead({
      kicker: 'SPACED REVIEW',
      title: '復習',
      sub: '正解するたびに次の出題間隔が 1 → 3 → 7 → 16 → 35 → 75 日と伸びます。間違えた問題は 20 分後に戻ってきます。',
      aside: `<span class="chip chip--shu">いま期限到来 ${due.length}</span>
              ${laterToday ? `<span class="chip">本日中にあと ${laterToday}</span>` : ''}`,
    })}

    <div class="grid grid--3">
      ${card('今日の復習', due.length
        ? `忘却が始まる直前の設問が <b>${due.length}</b> 問。ここを当てるのが最も効率的です。${
            laterToday ? `<br><span class="note">このあと本日中にさらに ${laterToday} 問が期限を迎えます。</span>` : ''}`
        : laterToday
        ? `いま解くべき設問はありません。直近で間違えた <b>${laterToday}</b> 問が、20 分ほど置いてから戻ってきます。`
        : '期限が来た設問はありません。よく回せています。',
        due.length ? `<button class="btn btn--shu btn--block" data-go="due">${Math.min(due.length, 30)} 問を復習</button>` : '')}

      ${card('間違えた問題', missed.length
        ? `一度でも落とした設問が <b>${missed.length}</b> 問。期限に関係なく総ざらいできます。`
        : 'まだ誤答の記録がありません。',
        missed.length ? `<button class="btn btn--ghost btn--block" data-go="missed">正答率の低い順に 20 問</button>` : '')}

      ${card('フラグ', flagged.length
        ? `後で見直す印を付けた設問が <b>${flagged.length}</b> 問あります。`
        : '演習中に <b>F</b> キー（または☆ボタン）で印を付けられます。',
        flagged.length ? `<button class="btn btn--ghost btn--block" data-go="flag">フラグ ${flagged.length} 問</button>` : '')}
    </div>

    ${sectionHead('01', '今後 14 日の復習予定', '前倒しで潰しておくと当日が楽になります')}
    <div class="card">
      ${barsV(forecast, { height: 140, unit: '問' })}
      <p class="note mt">山ができている日は、その前日までに少しずつ消化しておくと崩れません。</p>
    </div>

    ${due.length ? `
      ${sectionHead('02', '期限が来ている設問', `${due.length} 問`)}
      <div class="card card--flush" id="due-list">
        <div class="empty" style="border:0"><p class="note">読み込み中…</p></div>
      </div>` : ''}

    ${flagged.length ? `
      ${sectionHead(due.length ? '03' : '02', 'フラグを付けた設問', `${flagged.length} 問`)}
      <div class="card card--flush" id="flag-list">
        <div class="empty" style="border:0"><p class="note">読み込み中…</p></div>
      </div>` : ''}
  `;

  el.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', async () => {
    const kind = b.dataset.go;
    const ids = kind === 'due' ? due.slice(0, 30)
      : kind === 'missed' ? missed.slice(0, 20)
      : flagged.slice(0, 30);
    const units = await unitsForQuestionIds(ids);
    if (!units.length) { toast('対象の設問データを読み込めませんでした'); return; }
    launch({
      mode: 'review',
      label: kind === 'due' ? '復習キュー' : kind === 'missed' ? '誤答の総ざらい' : 'フラグ付き設問',
      units, instant: true, backTo: '#/review', sessionKey: `review-${kind}`,
      restore: { kind: 'qids', ids },
    });
  }));

  /* 一覧は索引の構築を待ってから描画 */
  if (due.length || flagged.length) {
    const idx = await buildIndex();
    const fill = (sel, ids) => {
      const box = el.querySelector(sel);
      if (!box) return;
      box.innerHTML = renderList(idx, ids);
    };
    if (due.length) fill('#due-list', due);
    if (flagged.length) fill('#flag-list', flagged);
  }
}

/**
 * 設問一覧の行。設問文の無い形式（Part 1/2/6/7）で選択肢に落として
 * 答えが見えることのないよう、本文の見出しか形式名だけを出す。
 */
function itemLabel(hit) {
  const q = hit?.q, u = hit?.unit;
  if (q?.stem) return String(q.stem);
  const doc = u?.docs?.[0];
  if (doc) return doc.title || doc.label || '文書問題';
  if (u?.kind === 'set') return u.kindLabel ? `音声（${u.kindLabel}）` : '音声セット';
  if (u?.kind === 'p1') return '写真描写';
  if (u?.kind === 'p2') return '応答問題';
  return '設問';
}

function renderList(idx, ids, limit = 40) {
  const rows = ids.slice(0, limit).map(id => {
    const hit = idx.get(id);
    const st = itemStat(id);
    const u = hit?.unit;
    const topics = hit?.q?.topics?.length ? hit.q.topics : (u?.topics || []);
    return `<div class="row">
      <span class="row__no">${u ? `P${u.part}` : '—'}</span>
      <span>
        <span class="row__t en" style="font-size:.84rem">${esc(itemLabel(hit).slice(0, 84))}</span>
        <span class="row__s">${topics.map(t => esc(topicName(t))).join('・') || (u ? esc(partLabel(u.part)) : '')}</span>
      </span>
      <span class="row__r">${st.n ? `<span style="color:var(--shu)">${st.ok}/${st.n}</span>` : '<span class="note">未</span>'}
        <br><span class="note" style="font-size:.62rem">${st.n ? relTime(st.due) : ''}</span></span>
    </div>`;
  }).join('');
  const more = ids.length > limit
    ? `<div class="row"><span class="row__no"></span><span class="note">ほか ${ids.length - limit} 問</span><span></span></div>` : '';
  return `<div class="rows">${rows}${more}</div>`;
}

function card(title, body, action) {
  return `<div class="card">
    <div class="stat__k">${esc(title)}</div>
    <p style="font-size:.86rem;line-height:1.8;margin:.5rem 0 .9rem;min-height:4.2rem">${body}</p>
    ${action}
  </div>`;
}

function dueForecast(days = 14) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const out = Array.from({ length: days }, (_, i) => {
    const d = new Date(today); d.setDate(d.getDate() + i);
    return { label: i === 0 ? '今日' : `${d.getMonth() + 1}/${d.getDate()}`, value: 0, ts: d.getTime() };
  });
  for (const v of Object.values(state.items)) {
    if (!v.n) continue;
    if (v.due <= today.getTime()) { out[0].value++; continue; }
    const i = Math.floor((v.due - today.getTime()) / 86400000);
    if (i >= 0 && i < days) out[i].value++;
  }
  if (out[0].value) out[0].hot = true;
  return out;
}
