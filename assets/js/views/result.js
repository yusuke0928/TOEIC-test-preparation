/* =============================================================
   result.js — 採点結果（1 回分の詳細）
   ============================================================= */

import { getAttempt, attemptsDesc } from '../store.js';
import { analyzeAttempt, scoreHistory } from '../analytics.js';
import { pageHead, sectionHead, esc, pct, meter, accMod, empty, stat, partLabel, jaDateTime, hhmmss, sectionOf, toast } from '../ui.js';
import { barsH, ring, lineChart } from '../charts.js';
import { band, TARGET_900, gapToTarget } from '../score.js';
import { topicName } from '../../data/topics.js';
import { unitsForQuestionIds } from '../../data/registry.js';
import { launch } from '../runtime.js';

export async function detail(el, id) {
  const a = getAttempt(id);
  if (!a) { el.innerHTML = empty('無', '記録が見つかりません', '<a class="btn" href="#/analytics">履歴一覧へ</a>'); return; }

  const r = analyzeAttempt(a);
  const ok = a.items.filter(i => i.correct).length;
  const blank = a.items.filter(i => i.chosen == null).length;
  const wrong = a.items.filter(i => i.chosen != null && !i.correct);
  const b = band(a.scaled?.total ?? r.est.total);
  const prev = previousOf(a);
  const gaps = gapToTarget(r.per, TARGET_900).filter(g => r.per[g.part].n > 0);

  el.innerHTML = `
    ${pageHead({
      kicker: `${a.mode === 'mock' ? 'MOCK RESULT' : a.mode === 'review' ? 'REVIEW RESULT' : 'DRILL RESULT'}　/　${jaDateTime(a.ts)}`,
      title: a.label,
      sub: `${a.items.length} 問・所要 ${hhmmss(a.durationMs)}${blank ? `・未解答 ${blank} 問` : ''}`,
      aside: `<a class="btn btn--ghost btn--sm" href="#/analytics">履歴一覧</a>
              ${wrong.length ? `<button class="btn btn--shu btn--sm" id="review-wrong">誤答 ${wrong.length} 問を復習</button>` : ''}`,
    })}

    <div class="grid grid--sidebar">
      ${a.full ? `
        <div class="scorecard">
          <div class="scorecard__label">換算スコア</div>
          <div class="scorecard__total">${a.scaled.total}<sup>/ 990</sup></div>
          <div class="note" style="margin-top:.3rem"><b>${b.name}</b>・${esc(b.ja)}
            ${prev ? `　前回比 <b style="color:${a.scaled.total >= prev.scaled.total ? 'var(--midori)' : 'var(--shu)'}">
              ${a.scaled.total >= prev.scaled.total ? '+' : ''}${a.scaled.total - prev.scaled.total}</b>` : ''}</div>
          <div class="scorecard__split">
            ${stat('Listening', a.scaled.L, `素点 ${r.rawL} / 100`)}
            ${stat('Reading', a.scaled.R, `素点 ${r.rawR} / 100`)}
          </div>
          <p class="note mt">${esc(b.desc)}</p>
        </div>`
      : `<div class="card">
          <div class="inline" style="gap:1.4rem;align-items:center">
            ${ring(ok / a.items.length, { label: pct(ok / a.items.length), sub: `${ok}/${a.items.length}`, size: 128,
              color: ok / a.items.length >= .85 ? 'var(--midori)' : 'var(--shu)' })}
            <div style="flex:1">
              <div class="stat__k">正答率</div>
              <p style="line-height:1.85;margin-top:.4rem">
                ${a.items.length} 問中 <b>${ok}</b> 問正解。
                ${r.est.partial && r.est.estimable
                  ? `この結果をセクション全体に外挿すると、換算で <b>約 ${r.est.total} 点</b>相当です。` : ''}
              </p>
              <p class="note mt">${r.est.estimable
                ? '部分演習のため参考値です。正式なスコア推定はフル模試で。'
                : `この回だけでは換算スコアを出すには問題数が足りません（セクションごとに ${r.est.minSectionN} 問以上必要）。パート別の正答率を目安にしてください。`}</p>
            </div>
          </div>
        </div>`}

      <div class="card">
        <div class="stat__k">セクション別</div>
        ${barsH([1, 2, 3, 4, 5, 6, 7].filter(p => r.per[p].n).map(p => ({
          label: `Part ${p}`, value: r.per[p].acc, n: r.per[p].n,
          target: (TARGET_900[p].size - TARGET_900[p].allow) / TARGET_900[p].size,
        })), { height: 24 })}
        <p class="note mt">金色の縦線が 900 点到達に必要な正答率です。</p>
      </div>
    </div>

    ${sectionHead('01', 'パート別の内訳', '')}
    <div class="card card--flush">
      <div class="tbl-wrap"><table class="tbl">
        <thead><tr><th>パート</th><th>形式</th><th class="num">正答</th><th class="num">正答率</th>
          <th class="num">未解答</th><th class="num">平均時間</th><th>900 判定</th></tr></thead>
        <tbody>${gaps.map(g => {
          const d = r.per[g.part];
          return `<tr>
            <td><b>Part ${g.part}</b></td>
            <td class="note">${esc(partLabel(g.part).split('・')[1])}</td>
            <td class="num mono">${d.ok} / ${d.n}</td>
            <td class="num mono" style="color:${g.diff >= 0 ? 'var(--midori)' : 'var(--shu)'}">${pct(d.acc)}</td>
            <td class="num mono ${d.blank ? '' : 'note'}" style="${d.blank ? 'color:var(--shu)' : ''}">${d.blank || '—'}</td>
            <td class="num mono note">${(d.avgMs / 1000).toFixed(1)} 秒</td>
            <td>${g.diff >= 0 ? '<span class="chip chip--ok">到達</span>'
                : `<span class="chip chip--shu">−${Math.round(-g.diff * 100)} pt</span>`}</td>
          </tr>`;
        }).join('')}</tbody>
      </table></div>
    </div>

    ${Object.keys(r.topics).length ? `
      ${sectionHead('02', '論点別の結果', 'この回で問われた論点')}
      <div class="card">
        <div style="display:flex;flex-wrap:wrap;gap:.35rem">
          ${Object.entries(r.topics)
            // 落とした問題数が多い順＝伸びしろの大きい順。n=1 の 0/1 が先頭に来ないようにする
            .sort((x, y) => ((1 - y[1].acc) * y[1].n) - ((1 - x[1].acc) * x[1].n) || x[1].acc - y[1].acc)
            .map(([t, v]) => {
              const c = v.acc >= .9 ? 'var(--midori)' : v.acc >= .7 ? 'var(--kin)' : 'var(--shu)';
              const miss = (1 - v.acc) * v.n;
              // 1〜2 問しか出ていない論点は判断材料が薄いので控えめに出す
              const faint = v.n < 3 ? 'opacity:.5;' : '';
              return `<a href="#/drills/${esc(t)}" class="chip" title="${esc(topicName(t))}：${v.n} 問中 ${v.n - Math.round(miss)} 問正解"
                style="${faint}color:${c};border-color:${c};font-family:var(--f-ui);font-size:.74rem;letter-spacing:0">
                ${esc(topicName(t))}　<b class="mono">${v.ok}/${v.n}</b></a>`;
            }).join('')}
        </div>
        <p class="note mt">左ほど落とした問題数が多く、伸びしろが大きい論点です。薄い表示は出題が 1〜2 問だけで判断材料が少ないもの。<a href="#/drills">個別論点</a>から潰せます。</p>
      </div>` : ''}

    ${wrong.length ? `
      ${sectionHead('03', '誤答一覧', `${wrong.length} 問`)}
      <div class="card card--flush"><div class="rows">
        ${wrong.map((it, i) => `<div class="row">
          <span class="row__no">P${it.part}</span>
          <span>
            <span class="row__t">${esc((it.topics || []).map(topicName).join('・') || partLabel(it.part))}</span>
            <span class="row__s">あなたの解答 (${'ABCD'[it.chosen]}) ／ 正解 (${'ABCD'[it.answer]})　${(it.ms / 1000).toFixed(0)} 秒</span>
          </span>
          <span class="row__r note">${it.level ? `難度 ${it.level}` : ''}</span>
        </div>`).join('')}
      </div></div>` : `
      <div class="card mt2" style="background:var(--midori-wash);border-color:color-mix(in srgb,var(--midori) 30%,transparent)">
        <p style="color:var(--midori);font-weight:600">全問正解です。</p>
      </div>`}

    ${blank ? `<div class="card mt" style="border-left:3px solid var(--shu)">
      <div class="stat__k" style="color:var(--shu)">未解答が ${blank} 問あります</div>
      <p class="note mt">本番のマークシートは未記入でも減点はありませんが、必ず塗るべきです。
        時間切れが常態化している場合は Part 7 の読み方（設問先読み・スキャニング）を見直してください。</p>
    </div>` : ''}

    <div class="inline mt2" style="justify-content:center;gap:.6rem">
      ${wrong.length ? `<button class="btn btn--shu" id="review-wrong-2">誤答だけもう一度</button>` : ''}
      <a class="btn btn--ghost" href="#/analytics">分析を見る</a>
      <a class="btn btn--ghost" href="#/">扉に戻る</a>
    </div>
  `;

  const startReview = async () => {
    const ids = wrong.map(w => w.qid);
    const units = await unitsForQuestionIds(ids);
    if (!units.length) { toast('設問データを読み込めませんでした'); return; }
    launch({
      mode: 'review', label: `誤答復習｜${a.label}`, units,
      instant: true, backTo: `#/result/${id}`, sessionKey: `rev-${id}`,
      restore: { kind: 'qids', ids },
    });
  };
  el.querySelector('#review-wrong')?.addEventListener('click', startReview);
  el.querySelector('#review-wrong-2')?.addEventListener('click', startReview);
}

function previousOf(a) {
  if (!a.full) return null;
  return attemptsDesc().filter(x => x.full && x.ts < a.ts).sort((x, y) => y.ts - x.ts)[0] || null;
}

export default detail;
