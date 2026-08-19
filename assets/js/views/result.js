/* =============================================================
   result.js — 採点結果（1 回分の詳細）
   ============================================================= */

import { getAttempt, attemptsDesc, state, save } from '../store.js';
import { analyzeAttempt, scoreHistory } from '../analytics.js';
import { pageHead, sectionHead, esc, pct, meter, accMod, empty, stat, partLabel, jaDateTime, hhmmss, sectionOf, toast, blanks } from '../ui.js';
import { barsH, ring, lineChart } from '../charts.js';
import { band, TARGET_900, gapToTarget } from '../score.js';
import { topicName } from '../../data/topics.js';
import { unitsForQuestionIds, buildIndex } from '../../data/registry.js';
import { launch } from '../runtime.js';
import { renderChoices, renderKaisetsu, audioLinesFor, KEYS } from '../quiz.js';
import { renderDocs, renderGraphic } from '../render.js';
import { SCENES } from '../../data/scenes.js';
import * as audio from '../audio.js';

export async function detail(el, id) {
  const a = getAttempt(id);
  if (!a) { el.innerHTML = empty('無', '記録が見つかりません', '<a class="btn" href="#/analytics">履歴一覧へ</a>'); return; }

  const r = analyzeAttempt(a);
  const ok = a.items.filter(i => i.correct).length;
  const blankItems = a.items.filter(i => i.chosen == null);
  const blank = blankItems.length;
  const wrong = a.items.filter(i => i.chosen != null && !i.correct);
  /* 誤答・未解答一覧に出す行 = 誤答 ∪ 未解答（一覧としては両方見せる。時間切れ／未着手の
     設問は復習で一番読み返したい設問のため）。correct は chosen==null のとき常に false
     （finish() の `a.chosen != null && a.chosen === q.answer`）なので !i.correct だけで
     両方拾える。
     ただし「ここから演習を始める」ボタンは誤答と未解答で分ける。未解答は SRS に記録しない
     方針（store.js の recordItem() は chosen != null のときしか呼ばれない）に戻したため、
     「誤答を復習」ボタンに未解答まで混ぜてしまうと、まだ一度も解いていない設問の記録が
     このボタン経由でしか作られないという妙な依存が生まれる。誤答は今回の採点で既に
     間隔反復に載っているので「復習」、未解答は初めて解答することになるので「解く」と、
     ボタンの動詞も実態に合わせて分ける。 */
  const reviewRows = a.items.filter(i => !i.correct);
  // Part 3/4/6/7（kind: 'set'/'doc'）はセット単位で出題されるため、復習セッションは
  // registry.js の unitsForQuestionIds() が同じユニットの残り設問もまとめて返す
  // （文脈が壊れるため。設計どおりの既存挙動）。その結果、ボタンの「N 問」表示より
  // 実際のセッションの設問数が多くなることがある。ここでは表示件数を実際の設問数に
  // 作り替える代わりに（索引の構築を待つ必要がありボタン描画が遅れる）、対象になりうる
  // ときだけ一言添えて文言と実態のズレを埋める（expandNote 参照）。
  const groupedParts = it => it.part === 3 || it.part === 4 || it.part === 6 || it.part === 7;
  const reviewMayExpand = wrong.some(groupedParts) || blankItems.some(groupedParts);
  /* expandNote はページ上部（ヘッダの誤答/未解答ボタンの直下）と下部（ボタン列の直下）の
     両方に複製して出す。誤答一覧の展開次第でページ全長が1万px を超えることがあり、
     上のボタンだけを見て押す利用者には下部だけの注記は事実上届かない（オブザーバー実測：
     上のボタン y=97px・旧注記 y=12,208px、ページ全長 12,348px）。「上のボタン」という
     向き依存の文言だと、直下に複製した時点で文意が通らなくなるため、向きに依存しない
     言い回しにする。あわせて下部の「誤答だけもう一度」ボタンにも問題数を入れ、
     注記が指す「このボタン」がどれかを常に数字で示せるようにする。 */
  const expandNote = reviewMayExpand
    ? 'Part 3・4・6・7 の設問は文脈を保つためセット単位（同じ音声・長文の残り設問を含む）で出題されます。実際の設問数はこのボタンの数より多くなることがあります。'
    : '';
  const b = band(a.scaled?.total ?? r.est.total);
  const prev = previousOf(a);
  const gaps = gapToTarget(r.per, TARGET_900).filter(g => r.per[g.part].n > 0);
  /* 行番号のフォールバック: この回で解いた順の通し番号（1始まり）。
     模試は q.no（131 など）が乗るまでの一瞬だけ、ドリルは恒久的にこちらを使う。
     buildIndex() の完了を待たずに組み立てられるので、骨格の時点から番号を出せる。 */
  const seqOf = new Map(a.items.map((it, i) => [it.qid, i + 1]));

  el.innerHTML = `
    ${pageHead({
      kicker: `${a.mode === 'mock' ? 'MOCK RESULT' : a.mode === 'review' ? 'REVIEW RESULT' : 'DRILL RESULT'}　/　${jaDateTime(a.ts)}`,
      title: a.label,
      sub: `${a.items.length} 問・所要 ${hhmmss(a.durationMs)}${blank ? `・未解答 ${blank} 問` : ''}`,
      aside: `<div class="phead__actions">
                <div class="phead__actions-row">
                  <a class="btn btn--ghost btn--sm" href="#/analytics">履歴一覧</a>
                  ${wrong.length ? `<button class="btn btn--shu btn--sm" id="review-wrong">誤答 ${wrong.length} 問を復習</button>` : ''}
                  ${blank ? `<button class="btn btn--ghost btn--sm" id="review-blank">未解答 ${blank} 問を解く</button>` : ''}
                </div>
                ${expandNote ? `<p class="note">${expandNote}</p>` : ''}
              </div>`,
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

    ${reviewRows.length ? `
      ${sectionHead('03', '誤答・未解答一覧', `誤答 ${wrong.length} 問${blank ? `・未解答 ${blank} 問` : ''}　— 行を開くと設問・選択肢・解説を読めます`)}
      <div class="card card--flush"><div class="rows" id="wrong-list">
        ${reviewRows.map(it => wrongRowShell(it, seqOf.get(it.qid))).join('')}
      </div></div>` : `
      <div class="card mt2" style="background:var(--midori-wash);border-color:color-mix(in srgb,var(--midori) 30%,transparent)">
        <p style="color:var(--midori);font-weight:600">全問正解です。</p>
      </div>`}

    ${blank ? `<div class="card mt" style="border-left:3px solid var(--shu)">
      <div class="stat__k" style="color:var(--shu)">未解答が ${blank} 問あります</div>
      <p class="note mt">本番のマークシートは未記入でも減点はありませんが、必ず塗るべきです。
        時間切れが常態化している場合は Part 7 の読み方（設問先読み・スキャニング）を見直してください。</p>
    </div>` : ''}

    <div class="inline mt2" style="justify-content:center;gap:.6rem;flex-wrap:wrap">
      ${wrong.length ? `<button class="btn btn--shu" id="review-wrong-2">誤答 ${wrong.length} 問だけもう一度</button>` : ''}
      ${blank ? `<button class="btn btn--ghost" id="review-blank-2">未解答 ${blank} 問を解く</button>` : ''}
      <a class="btn btn--ghost" href="#/analytics">分析を見る</a>
      <a class="btn btn--ghost" href="#/">扉に戻る</a>
    </div>
    ${expandNote ? `<p class="note mt" style="text-align:center">${expandNote}</p>` : ''}
  `;

  /** ids で指定した設問だけの演習セッションを始める。誤答用・未解答用でボタンと
     セッションキーを分ける（同じキーだと、片方を中断中にもう片方を始めたときに
     中断セッションが上書きされてしまう）。 */
  const startReview = async (ids, label, keySuffix) => {
    const units = await unitsForQuestionIds(ids);
    if (!units.length) { toast('設問データを読み込めませんでした'); return; }
    launch({
      mode: 'review', label, units,
      instant: true, backTo: `#/result/${id}`, sessionKey: `rev-${keySuffix}-${id}`,
      restore: { kind: 'qids', ids },
    });
  };
  const reviewWrong = () => startReview(wrong.map(w => w.qid), `誤答復習｜${a.label}`, 'wrong');
  const reviewBlank = () => startReview(blankItems.map(w => w.qid), `未解答演習｜${a.label}`, 'blank');
  el.querySelector('#review-wrong')?.addEventListener('click', reviewWrong);
  el.querySelector('#review-wrong-2')?.addEventListener('click', reviewWrong);
  el.querySelector('#review-blank')?.addEventListener('click', reviewBlank);
  el.querySelector('#review-blank-2')?.addEventListener('click', reviewBlank);

  /* 誤答一覧は設問データ（索引）の構築を待ってから展開できるようにする。
     スコアカード等（すでに描画済み）を索引構築の完了まで待たせないよう、review.js の
     due-list / flag-list と同じ「先に骨格だけ出し、後から埋める」作法にならう。 */
  let offAudio = null;
  if (reviewRows.length) {
    const idx = await buildIndex();
    const list = el.querySelector('#wrong-list');
    if (list) {
      list.innerHTML = reviewRows.map(it => wrongRow(it, idx.get(it.qid), seqOf.get(it.qid))).join('');
      offAudio = wireWrongList(list, idx);
    }
  }
  /* ハッシュが変わって次の画面へ進むとき（app.js の render()）に呼ばれる。
     音声の onChange 購読を解いておかないと、結果画面を行き来するたびにリスナーが
     積み上がる（audio.stop() 自体は app.js が毎回のルート遷移で呼ぶので、
     ここで改めて呼ぶ必要はない）。 */
  return () => { offAudio?.(); };
}

function previousOf(a) {
  if (!a.full) return null;
  return attemptsDesc().filter(x => x.full && x.ts < a.ts).sort((x, y) => y.ts - x.ts)[0] || null;
}

/* ── 誤答一覧の行（開くと設問・選択肢・解説を読める）───────────
   演習画面（quiz.js）の renderChoices/renderKaisetsu をそのまま再利用し、
   新しい表示形式は発明しない。展開の仕組みはアプリ内で既に使われている
   <details>（quiz.js の「解答一覧を開く」）にならう。 */

/** 索引の構築を待つ間に出す骨格。行そのものは attempt の保存済み情報だけで組める。 */
function wrongRowShell(it, seq) {
  return `<details class="wrow"><summary>${wrongSummary(it, { seq })}</summary>
    <div class="wrow__body"><p class="note">読み込み中…</p></div></details>`;
}

/**
 * no は模試の通し番号（q.no）。ドリルには無いので、その場合は seq（この回で解いた順の
 * 通し番号、1始まり）で代用する（「No.」を付けず「01」のようにゼロ埋めし、本番の通し
 * 番号と混同しないようにする）。フル模試の誤答一覧では同じ論点・同じ表記の行が何行も
 * 並びうるため、行を見分ける手がかりとして先頭に出す。ドリルの結果画面も従来は
 * 「P1 状態と動作」のような行が同じ見出しで並び、どれがどれか分からなかった
 * （日々の演習はドリル中心なので、ここが効かないと復習しにくい）。
 * no は索引の構築が終わるまで分からないので、wrongRowShell からの呼び出しでは
 * seq だけになる（no が来ても優先されるのは同じロジック）。
 *
 * 未解答（chosen==null）の行は、モードを問わず正解の記号を畳んだ summary（クリックして
 * 開く前の行）には出さない。<details> を開いたときだけ wrongRow() 側で正解を見せる。
 * かつては模試だけ畳んだ状態でも正解を出していた（本番の時間切れは「採点＝正解が見える」
 * でよいという判断）が、模試には「未解答 N 問を解く」ボタンがあり、これを押すと SRS に
 * 正解として記録される。畳んだ一覧を読み下しただけで正解が見えてしまうと、押した時点で
 * 既に答えを知っている状態になり、「知らなかった設問を翌日また出す」という SRS の意図と
 * 噛み合わない。ドリル・復習と同じ扱いに揃え、模試も畳んだ状態では伏せる
 * （誤答＝一度選んで外した行は、モードを問わず従来どおり畳んだままでも正解を出す。
 * 既に一度答えを選んで外しているので伏せる意味がない）。
 */
function wrongSummary(it, { no, seq } = {}) {
  const noPart = `${no ? `No.${no}` : (seq ? String(seq).padStart(2, '0') : '')}　P${it.part}`;
  // 数字と単位の間は改行禁止スペース（U+00A0 NBSP）でつなぐ。半角スペースのままだと
  // 携帯幅（390px 実測）でこの行が2行に収まりきらず折り返す際、まさにこの空白で改行され
  // 「秒」1文字だけが3行目に孤立して落ちる（3/9/12/45/120 秒で再現、7 秒のみ収まって発生しない）。
  const answerLine = it.chosen != null
    ? `あなたの解答 (${KEYS[it.chosen]}) ／ 正解 (${KEYS[it.answer]})　${(it.ms / 1000).toFixed(0)} 秒`
    : `<b style="color:var(--kin)">未解答</b> ／ 開くと正解が見られます`;
  return `<span class="row__no">${noPart}</span>
    <span>
      <span class="row__t">${esc((it.topics || []).map(topicName).join('・') || partLabel(it.part))}</span>
      <span class="row__s"><span class="row__no">${noPart}</span>${answerLine}</span>
    </span>
    <span class="row__r note">${it.level ? `難度 ${it.level}` : ''}</span>`;
}

/**
 * hit は buildIndex() の { unit, q } | undefined。
 * kind ごとに、演習画面の該当ビューが解説の前段として出している文脈だけを足す：
 *   p1  … scene（線画）か desc（描写文）＋音声プレイヤー。exam 中の「数秒で消える」演出は
 *         再現しない（復習では読み返せることの方が目的にかなう）。
 *   p2  … 音声プレイヤーのみ（問いかけは kaisetsu 内の q.prompt で出る）。
 *   set … 図表（あれば）＋音声プレイヤー。スクリプトは kaisetsu(compact=false) 側で出す。
 *   doc … 本文（renderDocs）を折りたたみ付きで。qBlock 自体は本文を持たず、常に隣の
 *         reading__left で見せている本文なので、単独の行として自己完結させるためにここで足す。
 *         音声は無い（本番の Part 6/7 に音声はない）。
 *         既定の開閉は文書が1本かどうかで決める（docOpenDefault() 参照）。ダブル／トリプル
 *         パッセージを既定で閉じるのは、同じ文書を参照する誤答が複数行あると全文が行の数だけ
 *         繰り返し展開され、ページが極端に長くなるため（トリプルパッセージ5問で本文だけ
 *         約19,000px 実測。詳細は PROGRESS.md）。Part 6・シングルパッセージの Part 7 は
 *         文書が1本しかなくこの問題が起きない一方、解説の検算（例:「本文は10月1日からの
 *         話なので未来形」）に本文そのものを読む必要があるため、既定で開く。
 * どれも「専用の再生成ロジック」ではなく、render.js の既存の描画関数・audio.js の既存の
 * 行組み立て（quiz.js の audioLinesFor 経由）の再利用。
 */
function wrongRow(it, hit, seq) {
  const u = hit?.unit, q = hit?.q;
  if (!u || !q) {
    return `<details class="wrow"><summary>${wrongSummary(it, { seq })}</summary>
      <div class="wrow__body"><p class="note">設問データを読み込めませんでした（データ更新等で ID が変わった可能性があります）。</p></div></details>`;
  }

  const ans = { chosen: it.chosen, revealed: true };
  const parts = [];

  if (u.kind === 'p1') {
    if (u.scene) parts.push(`<div class="scene">${SCENES[u.scene] || SCENES.fallback}</div>`);
    else if (u.desc) parts.push(`<div class="scene descbox"><p class="descbox__text en">${esc(u.desc)}</p></div>`);
    parts.push(miniPlayerBox(q.id));
  } else if (u.kind === 'p2') {
    parts.push(miniPlayerBox(q.id));
  } else if (u.kind === 'doc') {
    const openDefault = docOpenDefault(u);
    parts.push(`<div class="wrow__doc${openDefault ? '' : ' is-collapsed'}">
      <button class="wrow__doc-toggle" data-act="doc" aria-expanded="${openDefault}">
        <span>本文</span><span class="wrow__doc-toggle-i">${openDefault ? '閉じる' : '開く'}</span>
      </button>
      <div class="wrow__doc-body">${renderDocs(u.docs, docOptsFor(u, q))}</div>
    </div>`);
  } else if (u.kind === 'set') {
    if (u.graphic) parts.push(renderGraphic(u.graphic));
    parts.push(miniPlayerBox(q.id));
  }

  if (q.stem) {
    parts.push(u.kind === 'single'
      ? `<p class="q__stem">${blanks(q.stem)}</p>`
      : `<p class="q__stem" style="font-size:1rem;margin-bottom:.8rem">${blanks(q.stem)}</p>`);
  }

  parts.push(renderChoices(q, ans, { keys: u.kind === 'p2' ? 3 : 4 }));
  parts.push(renderKaisetsu(u, q, ans, false));

  return `<details class="wrow" data-qid="${esc(it.qid)}">
    <summary>${wrongSummary(it, { no: q.no, seq })}</summary>
    <div class="wrow__body">${parts.join('')}</div>
  </details>`;
}

/** 文書が1本（Part 6・シングルパッセージの Part 7）なら既定で開く。ダブル／トリプルは閉じる。 */
function docOpenDefault(u) {
  const docCount = u.docCount ?? (u.docs?.length ?? 1);
  return docCount <= 1;
}

/**
 * 展開内の簡易音声プレイヤー（quiz.js の Run#playerBox() の縮小版）。
 * 再生／停止と速度切替を持ち、「読んで解くモード」切替だけ省いた。
 * 展開側では kaisetsu が既にスクリプト・訳・語注・正誤を全部開いた状態で出しており、
 * 選択肢も blind ではなく全部見えているため、演習画面のそのボタンが前提とする
 * 「まだ聞く/読む前」の状況が成立しない（読んで解くモードは事実上何も変えず、
 * 結果画面から演習全体の既定設定をいじる副作用だけが残る）。
 * 速度切替は事情が違う：800→900 の Part3/4 復習では「意味は分かった状態で
 * 1.15/1.3倍に上げて聞き直す」「落ちた箇所を0.85倍で聞き直す」がよく効くやり方で、
 * これは正誤を知った後にやる作業だからこそ結果画面に要る。演習画面の速度と同じ
 * state.settings.rate をそのまま読み書きする（同じ作法・同じ値を共有。次に演習を
 * 始めたときの既定速度にも影響するが、演習画面の速度切替も元々そういう挙動）。
 * 音声非対応端末では再生ボタン・速度ボタンを disabled にする（audio.supported の分岐。
 * playerBox() と同じ判定を使う）。
 */
function miniPlayerBox(id) {
  const forced = !audio.supported;
  return `<div class="player" data-player="${esc(id)}">
    <div class="player__top">
      <button class="player__btn" data-act="wplay" aria-label="再生 / 停止" ${forced ? 'disabled' : ''}>
        <svg viewBox="0 0 24 24"><path d="M6 3.5v17l14-8.5z"/></svg>
      </button>
      <div class="player__info">
        <div class="player__title">Audio — 端末内蔵音声で合成</div>
        <div class="player__state">${forced ? 'この端末は音声非対応' : '未再生'}</div>
      </div>
      <div class="player__opts">
        <div class="seg" role="group" aria-label="再生速度">
          ${[0.85, 1.0, 1.15, 1.3].map(r =>
            `<button data-wrate="${r}" aria-pressed="${(state.settings.rate || 1) === r}" ${forced ? 'disabled' : ''}>×${r}</button>`).join('')}
        </div>
      </div>
    </div>
    <div class="player__wave">${'<span></span>'.repeat(28)}</div>
  </div>`;
}

/**
 * 誤答一覧全体へのイベント委任。行は buildIndex() 完了後に一括で innerHTML 差し替えされるため、
 * 行ごとに addEventListener するのではなく #wrong-list に1つだけ登録する
 * （開閉のたびに増減する行に追従する必要がなく、リスナー数も一定）。
 * 返り値は購読解除関数（呼び出し元がビュー離脱時に呼ぶ）。
 */
function wireWrongList(list, idx) {
  let activeQid = null;
  const sync = () => {
    const on = audio.isPlaying();
    list.querySelectorAll('[data-player]').forEach((box) => {
      const isThis = on && box.dataset.player === activeQid;
      box.classList.toggle('is-playing', isThis);
      const st = box.querySelector('.player__state');
      if (st && audio.supported) st.textContent = isThis ? '再生中…' : '未再生';
      const ic = box.querySelector('.player__btn svg');
      if (ic) ic.innerHTML = isThis
        ? '<rect x="4" y="3" width="4.5" height="16" rx="1"/><rect x="13" y="3" width="4.5" height="16" rx="1"/>'
        : '<path d="M6 3.5v17l14-8.5z"/>';
    });
  };
  const off = audio.onChange(sync);

  const linesFor = (qid) => {
    const hit = qid && idx.get(qid);
    return hit && audioLinesFor(hit.unit);
  };

  list.addEventListener('click', (ev) => {
    const playBtn = ev.target.closest('[data-act="wplay"]');
    if (playBtn) {
      const box = playBtn.closest('[data-player]');
      const qid = box?.dataset.player;
      if (audio.isPlaying() && activeQid === qid) { audio.stop(); return; }
      const lines = linesFor(qid);
      if (!lines) { if (audio.supported) toast('この設問の音声は生成できませんでした'); return; }
      activeQid = qid;
      audio.play(lines);
      return;
    }
    const rateBtn = ev.target.closest('[data-wrate]');
    if (rateBtn) {
      const rate = Number(rateBtn.dataset.wrate);
      state.settings.rate = rate;
      save();
      // 速度は行をまたいで共有の設定（state.settings.rate 1つ）なので、一覧内の全プレイヤーの
      // 表示を同時にそろえる。クリックされたボタンとの一致ではなく「値」で比較する
      // （行ごとに別々の DOM ノードなので、同じ ×1.3 でも要素としては別物のため）。
      list.querySelectorAll('[data-wrate]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.wrate) === rate)));
      if (audio.isPlaying() && activeQid) {
        const lines = linesFor(activeQid);
        if (lines) audio.play(lines);      // 演習画面の [data-rate] と同じ作法：再生中なら新しい速度で頭から流し直す
      }
      return;
    }
    const docBtn = ev.target.closest('[data-act="doc"]');
    if (docBtn) {
      const box = docBtn.closest('.wrow__doc');
      const open = box.classList.toggle('is-collapsed') === false;
      docBtn.setAttribute('aria-expanded', String(open));
      docBtn.querySelector('.wrow__doc-toggle-i').textContent = open ? '閉じる' : '開く';
    }
  });

  /* 再生中に行を閉じたら音を止める。閉じた行を再生中のまま放置すると、停止手段（再生ボタン）が
     画面から消えて音だけが鳴り続ける（Part4のトークは1分近くある）。<details> の toggle
     イベントはバブリングの仕様が Chromium のバージョンで揺れている（新しめは bubble する）ため、
     #wrong-list に委任せず行ごとに直接登録する（行数は一覧の誤答・未解答数どまりで負担にならない）。 */
  list.querySelectorAll('.wrow').forEach((det) => {
    det.addEventListener('toggle', () => {
      if (!det.open && det.dataset.qid && det.dataset.qid === activeQid && audio.isPlaying()) audio.stop();
    });
  });

  return off;
}

/** Part 6/7 の本文オプション。この行の設問だけを「解決済み」にする（他設問の答えは明かさない）。 */
function docOptsFor(u, q) {
  const insQ = u.questions.find(x => x.insertAt != null);
  const revealIns = !!insQ && insQ.id === q.id;
  return {
    // 模試は q.no（131 のような通し番号）を本文の空所にもそのまま出す。行見出しが
    // 「No.131　P6」なのに本文側だけ「1.」のローカル番号だと、両方が同じ視界に入る
    // 展開表示では不一致が目立つ（演習・復習側は noOf() が q.no を返すのでここだけの穴だった）。
    // ドリルは q.no を持たないため、従来どおりユニット内のローカル番号（1始まり）に留める。
    blankNos: u.questions.map((qq, i) => qq.no || (i + 1)),
    activeBlank: u.part === 6 ? u.questions.indexOf(q) + 1 : null,
    insertAt: revealIns ? insQ.insertAt : null,
    insertText: revealIns ? (insQ.sentence || insQ.choices[insQ.answer]) : '',
  };
}

export default detail;
