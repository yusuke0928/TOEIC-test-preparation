/* =============================================================
   drills.js — 個別論点（一覧 / 詳細）
   ============================================================= */

import { GROUPS, TOPICS, topicById, topicsOfGroup } from '../../data/topics.js';
import { drillCounts, unitsForTopic } from '../../data/registry.js';
import { pageHead, sectionHead, esc, pct, meter, accMod, empty, toast, partLabel, relTime, mmss } from '../ui.js';
import * as A from '../analytics.js';
import { itemStat, isFlagged } from '../store.js';
import { launch } from '../runtime.js';
import { shuffle } from '../quiz.js';

/* ── 一覧 ────────────────────────────────────────────── */
export default async function drills(el) {
  const counts = await drillCounts();
  const stats = A.byTopic();
  const total = Object.values(counts).reduce((s, n) => s + n, 0);

  el.innerHTML = `
    ${pageHead({
      kicker: 'FOCUSED DRILLS',
      title: '個別論点',
      sub: '900 帯で実際に失点が集中する論点だけを並べています。正答率の低い順に潰していくのが最短です。',
      aside: `<span class="chip">${TOPICS.length} 論点 / ${total} 問</span>
              <button class="btn btn--sm" id="drill-weak">弱点だけ 20 問</button>`,
    })}
    ${GROUPS.map(g => {
      const ts = topicsOfGroup(g.id);
      if (!ts.length) return '';
      return `${sectionHead(g.kicker, `${g.name}`, `Part ${g.part}`)}
        <div class="grid grid--2">
          ${ts.map(t => topicCard(t, counts[t.id] || 0, stats[t.id])).join('')}
        </div>`;
    }).join('')}
    <p class="note mt2">
      すべての設問は本アプリ用の書き下ろしです。TOEIC® は ETS の登録商標であり、本アプリは ETS と関係ありません。
    </p>`;

  el.querySelector('#drill-weak')?.addEventListener('click', async () => {
    const weak = A.weakTopics(3, 6).map(w => w.id);
    if (!weak.length) { toast('まだ弱点を判定できません。各論点を数問こなしてください。'); return; }
    const lists = await Promise.all(weak.map(unitsForTopic));
    const units = shuffle(lists.flat()).slice(0, 20);
    if (!units.length) { toast('該当するドリルがありません'); return; }
    launch({
      mode: 'drill', label: '弱点横断ドリル', units, instant: true,
      backTo: '#/drills', sessionKey: 'weak-mix',
      restore: { kind: 'drills', unitIds: units.map(u => u.id) },
    });
  });
}

function topicCard(t, n, s) {
  const acc = s?.n ? s.acc : null;
  return `<a class="card" href="#/drills/${esc(t.id)}" style="display:block">
    <div class="inline" style="justify-content:space-between;align-items:flex-start">
      <div>
        <div style="font-family:var(--f-display);font-weight:600;font-size:1.05rem;letter-spacing:.06em">${esc(t.name)}</div>
        <div class="note" style="margin-top:.1rem">${esc(t.sub)}</div>
      </div>
      <span class="chip">${n} 問</span>
    </div>
    <div class="mt" style="margin-top:.9rem">
      ${meter(acc ?? 0, acc == null ? '' : accMod(acc))}
      <div class="inline" style="justify-content:space-between;margin-top:.35rem">
        <span class="note mono">${acc == null ? '未着手' : `正答率 ${pct(acc)}（${s.n} 問）`}</span>
        ${s?.lastTs ? `<span class="note mono">${relTime(s.lastTs)}</span>` : ''}
      </div>
    </div>
  </a>`;
}

/* ── 詳細 ────────────────────────────────────────────── */
export async function topic(el, topicId) {
  const t = topicById(topicId);
  if (!t) { el.innerHTML = empty('無', '該当する論点がありません', '<a class="btn" href="#/drills">一覧へ</a>'); return; }

  const units = await unitsForTopic(topicId);
  const qs = units.flatMap(u => u.questions.map(q => ({ q, u })));
  const s = A.byTopic()[topicId];
  const g = GROUPS.find(x => x.id === t.group);

  // 設問ごとの習熟状況
  const rows = qs.map(({ q, u }) => {
    const st = itemStat(q.id);
    return { q, u, st, acc: st.n ? st.ok / st.n : null };
  });
  const unseen = rows.filter(r => r.st.n === 0).length;
  const shaky = rows.filter(r => r.st.n > 0 && r.acc < 1).length;

  // この論点そのものが付いた設問数（一覧画面のカウントと定義をそろえる）
  const tagged = qs.filter(({ q, u }) =>
    (q.topics?.length ? q.topics : (u.topics || [])).includes(topicId)).length;

  // 表示はユニット単位にまとめる。設問文の無い形式で答えが見えないようにする
  const listRows = units.map(u => {
    const rs = rows.filter(r => r.u === u);
    const single = u.questions.length === 1 && u.questions[0].stem;
    return {
      u,
      title: single ? clip(u.questions[0].stem) : `${unitHeading(u)}（${u.questions.length}問）`,
      n: rs.length,
      done: rs.reduce((s2, r) => s2 + r.st.n, 0),
      ok: rs.reduce((s2, r) => s2 + r.st.ok, 0),
      seen: rs.filter(r => r.st.n > 0).length,
      flagged: rs.some(r => isFlagged(r.q.id)),
      nextDue: Math.min(...rs.map(r => r.st.due || Infinity)),
    };
  });

  el.innerHTML = `
    ${pageHead({
      kicker: `${g?.kicker || ''}　/　${partLabel(t.part)}`,
      title: t.name,
      sub: t.sub,
      aside: `<a class="btn btn--ghost btn--sm" href="#/drills">← 論点一覧</a>`,
    })}

    <div class="grid grid--sidebar">
      <div class="card" style="border-left:3px solid var(--shu)">
        <div class="stat__k">なぜ落とすか</div>
        <p style="margin:.4rem 0 1.1rem;line-height:1.9">${esc(t.pitfall)}</p>
        <div class="stat__k">解法の軸</div>
        <p style="margin-top:.4rem;line-height:1.9;font-weight:500">${esc(t.key)}</p>
      </div>
      <div class="card">
        <div class="grid grid--2" style="gap:.8rem">
          <div>${statBox('収録', `${tagged}`, '問')}</div>
          <div>${statBox('正答率', s?.n ? `${Math.round(s.acc * 100)}` : '—', s?.n ? `%（${s.n} 問）` : '')}</div>
          <div>${statBox('未着手', `${unseen}`, '問')}</div>
          <div>${statBox('要復習', `${shaky}`, '問')}</div>
        </div>
        <div class="stack mt2">
          <button class="btn btn--shu btn--block" data-start="all">全 ${qs.length} 問を通す</button>
          <button class="btn btn--ghost btn--block" data-start="random">ランダム 10 問</button>
          ${unseen ? `<button class="btn btn--ghost btn--block" data-start="unseen">未着手 ${unseen} 問</button>` : ''}
          ${shaky ? `<button class="btn btn--ghost btn--block" data-start="shaky">間違えた ${shaky} 問だけ</button>` : ''}
        </div>
        ${qs.length > tagged ? `<p class="note mt">この論点の設問は ${tagged} 問ですが、Part 6・7 は本文ごと解く形式のため、実際には ${qs.length} 問が出題されます。</p>` : ''}
      </div>
    </div>

    ${sectionHead('LIST', '収録内容', '解く前に答えが見えないよう、見出しだけを並べています')}
    <div class="card card--flush">
      ${listRows.length ? `<div class="rows">${listRows.map((r, i) => `
        <div class="row">
          <span class="row__no">${String(i + 1).padStart(2, '0')}</span>
          <span>
            <span class="row__t en" style="font-size:.86rem">${esc(r.title)}</span>
            <span class="row__s">${esc(partLabel(r.u.part))}${r.u.level ? `　難度 ${r.u.level}` : ''}${r.flagged ? '　★' : ''}</span>
          </span>
          <span class="row__r">${r.done
            ? `<span style="color:${r.ok === r.done ? 'var(--midori)' : 'var(--shu)'}">${r.ok}/${r.done}</span>
               <br><span class="note" style="font-size:.62rem">${Number.isFinite(r.nextDue) && r.nextDue > Date.now() ? relTime(r.nextDue) : '復習期'}</span>`
            : '<span class="note">未</span>'}</span>
        </div>`).join('')}</div>`
        : empty('準', 'この論点の設問は現在準備中です。', '<a class="btn btn--ghost" href="#/drills">他の論点へ</a>')}
    </div>
  `;

  el.querySelectorAll('[data-start]').forEach(btn => btn.addEventListener('click', () => {
    const how = btn.dataset.start;
    let pick = units;
    if (how === 'random') pick = shuffle(units).slice(0, 10);
    if (how === 'unseen') pick = units.filter(u => u.questions.some(q => itemStat(q.id).n === 0));
    if (how === 'shaky') pick = units.filter(u => u.questions.some(q => {
      const st = itemStat(q.id); return st.n > 0 && st.ok < st.n;
    }));
    if (!pick.length) { toast('該当する設問がありません'); return; }
    launch({
      mode: 'drill', label: `論点：${t.name}`, units: pick,
      instant: true, backTo: `#/drills/${topicId}`, sessionKey: `topic-${topicId}`,
      restore: { kind: 'drills', unitIds: pick.map(u => u.id) },
    });
  }));
}

function statBox(k, v, unit) {
  return `<div class="stat"><span class="stat__k">${esc(k)}</span>
    <span class="stat__v" style="font-size:1.7rem">${esc(v)}<small>${esc(unit)}</small></span></div>`;
}

/**
 * 一覧に出す見出し。
 * Part 6/7 や Part 1/2 は設問文が無いため、以前は選択肢の 1 つ目に落ちて
 * 「正解の語」や「挿入文そのもの」が一覧に出てしまっていた。
 * 解く前に答えが見えないよう、本文の見出しか形式名だけを出す。
 */
function unitHeading(u) {
  const doc = u.docs?.[0];
  if (doc) {
    const head = doc.title || (doc.head ? String(doc.head).split('\n').find(l => /^(Subject|RE|TO|SUBJECT):/i.test(l)) : '');
    const label = doc.label || '文書';
    const kind = u.docCount > 1 ? `${label}ほか ${u.docCount} 文書` : label;
    return head ? `${kind}「${String(head).replace(/^(Subject|SUBJECT|RE):\s*/i, '')}」` : kind;
  }
  if (u.kind === 'set') return u.kindLabel ? `音声（${u.kindLabel}）` : '音声セット';
  if (u.kind === 'p1') return '写真描写';
  if (u.kind === 'p2') return '応答問題';
  return '設問';
}

function clip(s, n = 76) {
  const t = String(s || '').replace(/\s+/g, ' ').trim();
  return t.length > n ? t.slice(0, n - 2) + '…' : t;
}
