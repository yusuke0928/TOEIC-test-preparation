/* =============================================================
   analytics.js — 学習分析
   「何を、どれだけ、どう間違えたか」を全方向から見る画面。
   ============================================================= */

import * as A from '../analytics.js';
import { state, attemptsDesc } from '../store.js';
import { pageHead, sectionHead, esc, pct, meter, accMod, empty, stat, partLabel, jaDateTime, hhmmss, mmss, relTime, sectionOf } from '../ui.js';
import { lineChart, barsH, barsV, heatmap, ring } from '../charts.js';
import { TARGET_900, TARGET_950, gapToTarget, band, PART_SIZE } from '../score.js';
import { TOPICS, topicName, GROUPS, topicById } from '../../data/topics.js';

const RANGES = [
  { id: 'all', label: '全期間', ms: 0 },
  { id: '90',  label: '90日',   ms: 90 * 86400000 },
  { id: '30',  label: '30日',   ms: 30 * 86400000 },
  { id: '7',   label: '7日',    ms: 7 * 86400000 },
];

let range = 'all';
let target = '900';

// 迷いの指標（正解時/誤答時の平均解答時間の比較）を断定するのに必要な最小サンプル数。
// 正解・誤答のどちらかがこれ未満だと平均が1〜2件で決まってしまい、
// 「誤答が速すぎる」「時間をかけ過ぎ」のような助言が誤って出る。
// 02 パート別到達度の「データ不足」判定（d.n >= 8）に合わせた値。
const HES_MIN_N = 8;

export default async function analytics(el) {
  draw(el);
}

function draw(el) {
  const since = range === 'all' ? 0 : Date.now() - RANGES.find(r => r.id === range).ms;
  const ov = A.overall(since);
  const bp = A.byPart(since);
  const est = A.currentEstimate(200);
  const b = band(est.total);
  const hist = A.scoreHistory();
  const trend = A.estimatedScoreTrend(120, 16);
  const weak = A.weakTopics(3, 10);
  const strong = A.strongTopics();
  const pace = A.paceByPart();
  const hes = A.hesitationIndex();
  const blanks = A.unansweredRate();
  const daily = A.dailyAccuracy(30);
  const attempts = attemptsDesc();
  const TGT = target === '900' ? TARGET_900 : TARGET_950;
  const gaps = gapToTarget(Object.fromEntries(Object.entries(bp).map(([p, v]) => [p, v])), TGT);
  const topicStats = A.byTopic(since);

  if (!ov.n) {
    el.innerHTML = `${pageHead({ kicker: 'ANALYTICS', title: '学習分析' })}
      ${empty('空', 'まだ分析するデータがありません。演習を 1 回こなすとここが埋まります。',
        '<a class="btn" href="#/drills">個別論点から始める</a>')}`;
    return;
  }

  el.innerHTML = `
    ${pageHead({
      kicker: 'ANALYTICS',
      title: '学習分析',
      sub: '正答率だけでなく、時間の使い方と忘却の進み方まで見ます。',
      aside: `<div class="seg">${RANGES.map(r =>
        `<button data-range="${r.id}" aria-pressed="${range === r.id}">${r.label}</button>`).join('')}</div>`,
    })}

    <!-- ══ 概況 ══ -->
    <div class="grid grid--4">
      <div class="card">${est.estimable
        ? stat('推定スコア', `${est.total}`, `${b.name}・${b.ja}`, 'stat__v--shu')
        : stat('推定スコア', '—', `L${est.lN}問 / R${est.rN}問（各${est.minSectionN}問で算出）`, 'stat__v--shu')}</div>
      <div class="card">${stat('通算', ov.n.toLocaleString(), `正答 ${ov.ok.toLocaleString()} 問`)}</div>
      <div class="card">${stat('正答率', pct(ov.acc), `${RANGES.find(r => r.id === range).label}の平均`)}</div>
      <div class="card">${stat('学習時間', hhmmss(ov.ms), `1 問あたり ${(ov.avgMs / 1000).toFixed(1)} 秒`)}</div>
    </div>

    <!-- ══ スコア推移 ══ -->
    ${sectionHead('01', 'スコアの推移', hist.length ? `模試 ${hist.filter(h => !h.partial).length} 回` : '演習からの推定')}
    <div class="card">
      ${hist.filter(h => !h.partial).length >= 2
        ? lineChart({
            series: [
              { label: '合計', points: hist.filter(h => !h.partial).map(h => ({ x: shortDate(h.ts), y: h.total })) },
            ],
            min: 500, max: 990, target: target === '900' ? 900 : 950, unit: '点',
          })
        : trend.length >= 2
        ? lineChart({
            series: [{ label: '推定', points: trend.map(t => ({ x: shortDate(t.ts), y: t.total })) }],
            min: 500, max: 990, target: target === '900' ? 900 : 950, unit: '点',
          })
        : '<p class="note">推移を描くにはもう少しデータが必要です（120 問以上、または模試 2 回以上）。</p>'}
      ${trend.length >= 2 ? `<div class="grid grid--2 mt2">
        <div>
          <div class="stat__k">Listening 推定</div>
          ${lineChart({ series: [{ label: 'L', points: trend.map(t => ({ x: shortDate(t.ts), y: t.L })), cls: 'line--ai' }], min: 200, max: 495, height: 130 })}
        </div>
        <div>
          <div class="stat__k">Reading 推定</div>
          ${lineChart({ series: [{ label: 'R', points: trend.map(t => ({ x: shortDate(t.ts), y: t.R })) }], min: 200, max: 495, height: 130 })}
        </div>
      </div>` : ''}
      <p class="note mt">推定スコアは直近の正答率をセクション素点に外挿し、換算表に当てた近似値です。本番は毎回等化されるため ±25 点程度の幅で見てください。</p>
    </div>

    <!-- ══ パート別 ══ -->
    ${sectionHead('02', 'パート別の到達度', `目標 ${target} 点ライン（金色の縦線）との比較`)}
    <div class="card">
      <div class="inline" style="justify-content:flex-end;margin-bottom:.6rem">
        <div class="seg">
          <button data-target="900" aria-pressed="${target === '900'}">900 狙い</button>
          <button data-target="950" aria-pressed="${target === '950'}">950 狙い</button>
        </div>
      </div>
      ${barsH([1, 2, 3, 4, 5, 6, 7].filter(p => bp[p].n > 0).map(p => ({
        label: `Part ${p}`,
        value: bp[p].acc,
        n: bp[p].n,
        target: (TGT[p].size - TGT[p].allow) / TGT[p].size,
      })))}
      <div class="tbl-wrap mt2"><table class="tbl">
        <thead><tr>
          <th>パート</th><th>セクション</th><th class="num">演習</th><th class="num">正答率</th>
          <th class="num">必要</th><th class="num">想定失点</th><th class="num">許容</th><th>判定</th>
        </tr></thead>
        <tbody>${gaps.map(g => {
          const d = bp[g.part];
          const enough = d.n >= 8;
          const verdict = !enough ? '<span class="chip">データ不足</span>'
            : g.diff >= 0 ? '<span class="chip chip--ok">到達</span>'
            : g.diff >= -0.08 ? '<span class="chip" style="color:var(--kin);border-color:var(--kin)">あと少し</span>'
            : '<span class="chip chip--shu">要対策</span>';
          return `<tr>
            <td><b>Part ${g.part}</b><br><span class="note">${esc(partLabel(g.part).split('・')[1])}</span></td>
            <td class="note">${esc(sectionOf(g.part))}</td>
            <td class="num mono">${d.n}</td>
            <td class="num mono">${d.n ? pct(g.acc) : '—'}</td>
            <td class="num mono note">${pct(g.needAcc)}</td>
            <td class="num mono" style="color:${g.projectedMiss > g.allow ? 'var(--shu)' : 'var(--midori)'}">
              ${enough ? `${g.projectedMiss}` : '—'}</td>
            <td class="num mono note">${g.allow}</td>
            <td>${verdict}</td>
          </tr>`;
        }).join('')}</tbody>
      </table></div>
      <p class="note mt">「想定失点」は現在の正答率のまま本番を受けた場合に、そのパートで落とすと予想される問題数。「許容」を超えているパートが最優先の課題です。</p>
      ${(() => {
        const worst = gaps.filter(g => bp[g.part].n >= 8 && g.diff < 0).sort((a, b) => a.diff - b.diff)[0];
        return worst ? `<div class="card mt" style="background:var(--shu-wash);border-color:color-mix(in srgb,var(--shu) 30%,transparent)">
          <div class="stat__k" style="color:var(--shu)">最優先の課題</div>
          <p style="margin-top:.4rem;line-height:1.85"><b>Part ${worst.part}（${esc(partLabel(worst.part).split('・')[1])}）</b>。
          目標ラインまで正答率で <b>${Math.round(-worst.diff * 100)} ポイント</b>不足。${esc(worst.note)}</p>
        </div>` : '';
      })()}
    </div>

    <!-- ══ 論点別 ══ -->
    ${sectionHead('03', '論点別の正答率', '3 問以上こなした論点のみ')}
    <div class="grid grid--2">
      <div class="card">
        <div class="stat__k" style="color:var(--shu)">弱点 — 優先して潰す</div>
        ${weak.length ? `<p class="note mt">取りこぼしている問題数が多い順。上から潰すのが最も得点が伸びます。</p>
          <div class="rows mt">${weak.map(w => `
          <a class="row" href="#/drills/${esc(w.id)}" style="padding-left:0;padding-right:0">
            <span class="row__no">${esc(topicById(w.id)?.part ? 'P' + topicById(w.id).part : '')}</span>
            <span><span class="row__t">${esc(topicName(w.id))}</span>
              <span class="row__s">${w.ok}/${w.n} 問正解</span>
              <div style="margin-top:.3rem">${meter(w.acc, accMod(w.acc))}</div></span>
            <span class="row__r" style="color:var(--shu)">${pct(w.acc)}</span>
          </a>`).join('')}</div>` : '<p class="note mt">3 問以上こなした論点のうち、正答率が 85% を下回るものはありません。</p>'}
      </div>
      <div class="card">
        <div class="stat__k" style="color:var(--midori)">安定している論点</div>
        ${strong.length ? `<p class="note mt">${A.STRONG_MIN_N} 問以上こなして正答率 ${Math.round(A.STRONG_MIN_ACC * 100)}% 以上の論点。</p>
          <div class="rows mt">${strong.map(w => `
          <a class="row" href="#/drills/${esc(w.id)}" style="padding-left:0;padding-right:0">
            <span class="row__no">${esc(topicById(w.id)?.part ? 'P' + topicById(w.id).part : '')}</span>
            <span><span class="row__t">${esc(topicName(w.id))}</span>
              <span class="row__s">${w.ok}/${w.n} 問正解</span></span>
            <span class="row__r" style="color:var(--midori)">${pct(w.acc)}</span>
          </a>`).join('')}</div>`
          : `<p class="note mt">まだ「安定している」と言える論点はありません（${A.STRONG_MIN_N} 問以上かつ正答率 ${Math.round(A.STRONG_MIN_ACC * 100)}% 以上が条件）。</p>`}
      </div>
    </div>

    <div class="card mt">
      <div class="stat__k">全論点マップ</div>
      <div class="mt" style="display:flex;flex-wrap:wrap;gap:.3rem">
        ${TOPICS.map(t => {
          const s = topicStats[t.id];
          const a = s?.n ? s.acc : null;
          const bg = a == null ? 'var(--rule-soft)'
            : a >= .9 ? 'var(--midori-wash)' : a >= .75 ? 'rgba(161,124,34,.14)' : 'var(--shu-wash)';
          const fg = a == null ? 'var(--ink-3)' : a >= .9 ? 'var(--midori)' : a >= .75 ? 'var(--kin)' : 'var(--shu)';
          return `<a href="#/drills/${esc(t.id)}" class="chip" style="background:${bg};color:${fg};border-color:${a == null ? 'var(--rule)' : 'transparent'};font-family:var(--f-ui);font-size:.72rem;letter-spacing:0">
            ${esc(t.name)}${a != null ? `　<b class="mono">${Math.round(a * 100)}</b>` : ''}</a>`;
        }).join('')}
      </div>
      <p class="note mt">緑＝90% 以上／金＝75–89%／朱＝75% 未満／無色＝未着手。クリックでその論点のドリルへ。</p>
    </div>

    <!-- ══ 時間 ══ -->
    ${sectionHead('04', '時間の使い方', 'リーディングは時間切れが最大の失点源')}
    <div class="grid grid--sidebar">
      <div class="card">
        <div class="stat__k">1 問あたりの平均解答時間</div>
        <div class="tbl-wrap mt"><table class="tbl">
          <thead><tr><th>パート</th><th class="num">平均</th><th class="num">本番の目安</th><th style="width:30%"></th><th>判定</th></tr></thead>
          <tbody>${pace.length ? pace.map(p => `<tr>
            <td class="mono">Part ${p.part}</td>
            <td class="num mono" style="color:${p.over ? 'var(--shu)' : 'var(--midori)'}">${p.avg.toFixed(1)} 秒</td>
            <td class="num mono note">${p.target} 秒</td>
            <td>${meter(Math.min(1, p.target / Math.max(p.avg, 1)), p.over ? 'meter__fill--shu' : 'meter__fill--ok')}</td>
            <td>${p.over ? `<span class="chip chip--shu">${Math.round(p.avg - p.target)} 秒超過</span>` : '<span class="chip chip--ok">間に合う</span>'}</td>
          </tr>`).join('') : '<tr><td colspan="5" class="note">リーディングの演習記録がまだありません。</td></tr>'}</tbody>
        </table></div>
        ${pace.length ? `<p class="note mt">${paceComment(pace)}</p>` : ''}
      </div>

      <div class="card">
        <div class="stat__k">迷いの指標</div>
        <div class="grid grid--2 mt" style="gap:.8rem">
          ${stat('正解時', `${hes.okAvg.toFixed(1)}`, `秒 / ${hes.okN} 問`)}
          ${stat('誤答時', `${hes.ngAvg.toFixed(1)}`, `秒 / ${hes.ngN} 問`, 'stat__v--shu')}
        </div>
        <p class="note mt2">${hes.okN < HES_MIN_N || hes.ngN < HES_MIN_N
          ? `まだ判定できるほどのデータがありません（正解・誤答それぞれ ${HES_MIN_N} 問以上が条件）。`
          : hes.ngAvg > hes.okAvg * 1.35
          ? '誤答時に時間をかけ過ぎています。<b>20 秒考えて決まらない問題は捨てる</b>判断が、Part 7 の残り時間を守ります。'
          : hes.ngAvg < hes.okAvg * .75
          ? '誤答が速すぎます。読み飛ばしや早合点の可能性。設問の主語と時制を確認する癖をつけてください。'
          : '正解時と誤答時の所要時間に大きな差はありません。ペース配分は安定しています。'}</p>
        ${blanks.blank ? `<p class="note mt" style="color:var(--shu)">未解答が通算 ${blanks.blank} 問（${pct(blanks.rate)}）。時間切れが起きています。</p>` : ''}
      </div>
    </div>

    <!-- ══ 学習量 ══ -->
    ${sectionHead('05', '学習量と継続', `連続 ${A.streakDays()} 日`)}
    <div class="card">
      ${heatmap(A.dailyCounts(), 26)}
      <div class="heat-legend"><span>少</span>
        ${[0, 1, 2, 3, 4].map(l => `<span class="heat__c" data-l="${l}"></span>`).join('')}
        <span>多</span>
        <span class="push">学習日数 ${Object.keys(A.dailyCounts()).length} 日 / 本日 ${A.todayCount()} 問</span></div>
    </div>

    <div class="grid grid--2 mt">
      <div class="card">
        <div class="stat__k">曜日別の学習量</div>
        ${barsV(byWeekday(), { height: 130, unit: '問' })}
      </div>
      <div class="card">
        <div class="stat__k">時間帯別の学習量</div>
        ${barsV(A.byHour().filter((_, i) => i >= 5), { height: 130, unit: '問' })}
        <p class="note mt">${bestHourComment()}</p>
      </div>
    </div>

    ${daily.length >= 3 ? `<div class="card mt">
      <div class="stat__k">日別の正答率（直近 30 日）</div>
      ${lineChart({
        series: [{ label: '正答率', points: daily.map(d => ({ x: d.date.slice(5).replace('-', '/'), y: Math.round(d.acc * 100) })) }],
        min: 0, max: 100, unit: '%', height: 160,
      })}
    </div>` : ''}

    <!-- ══ 履歴 ══ -->
    ${sectionHead('06', '演習の履歴', `${attempts.length} 件`)}
    <div class="card card--flush">
      <div class="tbl-wrap"><table class="tbl">
        <thead><tr>
          <th>日時</th><th>種別</th><th>内容</th><th class="num">問題数</th>
          <th class="num">正答率</th><th class="num">所要</th><th class="num">換算</th><th></th>
        </tr></thead>
        <tbody>${attempts.slice(0, 60).map(a => {
          const ok = a.items.filter(i => i.correct).length;
          return `<tr>
            <td class="mono note">${jaDateTime(a.ts)}</td>
            <td><span class="chip ${a.mode === 'mock' ? 'chip--shu' : a.mode === 'review' ? 'chip--ai' : ''}">${
              a.mode === 'mock' ? '模試' : a.mode === 'review' ? '復習' : '論点'}</span></td>
            <td>${esc(a.label)}</td>
            <td class="num mono">${a.items.length}</td>
            <td class="num mono" style="color:${ok / a.items.length >= .85 ? 'var(--midori)' : ok / a.items.length >= .7 ? 'var(--kin)' : 'var(--shu)'}">${pct(ok / a.items.length)}</td>
            <td class="num mono note">${hhmmss(a.durationMs)}</td>
            <td class="num mono">${a.full ? `<b>${a.scaled.total}</b>` : '—'}</td>
            <td class="num"><a class="btn btn--ghost btn--sm" href="#/result/${esc(a.id)}">詳細</a></td>
          </tr>`;
        }).join('')}</tbody>
      </table></div>
      ${attempts.length > 60 ? `<p class="note" style="padding:.8rem 1.2rem">直近 60 件を表示しています（記録は最大 500 件保持）。</p>` : ''}
    </div>

    <p class="note mt2">分析データはこの端末のブラウザ内（localStorage）にのみ保存されます。
      端末を移すときは<a href="#/settings">設定</a>から書き出してください。</p>
  `;

  el.querySelectorAll('[data-range]').forEach(b => b.addEventListener('click', () => {
    range = b.dataset.range; draw(el); window.scrollTo(0, 0);
  }));
  el.querySelectorAll('[data-target]').forEach(b => b.addEventListener('click', () => {
    target = b.dataset.target; draw(el);
  }));
}

/* ── 補助 ────────────────────────────────────────────── */
const shortDate = (ts) => {
  const d = new Date(ts);
  return `${d.getMonth() + 1}/${d.getDate()}`;
};

function byWeekday() {
  const names = ['日', '月', '火', '水', '木', '金', '土'];
  const out = names.map(n => ({ label: n, value: 0 }));
  for (const r of A.allResponses()) out[new Date(r.ts).getDay()].value++;
  const hi = Math.max(...out.map(o => o.value));
  out.forEach(o => { if (o.value === hi && hi) o.hot = true; });
  return out;
}

function bestHourComment() {
  const h = A.byHour();
  const top = [...h].sort((a, b) => b.value - a.value)[0];
  if (!top?.value) return '';
  const acc = {};
  for (const r of A.allResponses()) {
    const k = new Date(r.ts).getHours();
    acc[k] = acc[k] || { ok: 0, n: 0 };
    acc[k].n++; if (r.correct) acc[k].ok++;
  }
  const best = Object.entries(acc).filter(([, v]) => v.n >= 20)
    .sort((a, b) => (b[1].ok / b[1].n) - (a[1].ok / a[1].n))[0];
  return best
    ? `最もよく学習しているのは ${top.hour} 時台。正答率が最も高いのは <b>${best[0]} 時台（${pct(best[1].ok / best[1].n)}）</b>です。`
    : `最もよく学習しているのは ${top.hour} 時台です。`;
}

function paceComment(pace) {
  const p7 = pace.find(p => p.part === 7);
  const p5 = pace.find(p => p.part === 5);
  if (p5 && p5.avg > 26) return 'Part 5 に時間をかけ過ぎています。ここで 1 問 30 秒使うと、Part 7 の最後の 2 セットが丸ごと消えます。';
  if (p7 && p7.over) return 'Part 7 が目安を超えています。設問を先に読み、本文は該当箇所だけを拾う読み方に切り替えてください。';
  return 'リーディングのペースは本番に間に合う水準です。この速度を維持してください。';
}
