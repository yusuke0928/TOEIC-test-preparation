/* =============================================================
   home.js — 扉（ダッシュボード）
   ============================================================= */

import { state, dueCount, allSessions, clearSession, attemptsDesc } from '../store.js';
import { pageHead, sectionHead, stat, meter, accMod, esc, relTime, jaDateTime, pct, empty, partLabel, toast } from '../ui.js';
import { ring, heatmap } from '../charts.js';
import * as A from '../analytics.js';
import { band, TARGET_900 } from '../score.js';
import { TOPICS, topicName } from '../../data/topics.js';
import { availableMocks, unitsForTopic, unitsForQuestionIds } from '../../data/registry.js';
import { launchOrResume, resumeFromSession } from '../runtime.js';
import { dueItems } from '../store.js';

export default async function home(el) {
  const today = A.todayCount();
  const goal = state.settings.dailyGoal || 30;
  const streak = A.streakDays();
  const est = A.currentEstimate(200);
  const b = band(est.total);
  const due = dueCount();
  const weak = A.weakTopics(4, 3);
  const sessions = orderSessions(allSessions());
  const recent = attemptsDesc().slice(0, 6);
  const mom = A.momentum(80);
  const cov = A.coverage();
  const bp = A.byPart();
  const mockMetas = (await availableMocks()).filter(m => m.available);

  const hour = new Date().getHours();
  const greet = hour < 5 ? '夜更かしですね' : hour < 11 ? 'おはようございます' : hour < 18 ? 'こんにちは' : 'お疲れさまです';

  // 初訪問は情報を並べても空箱が並ぶだけなので、やることを 1 つに絞る
  if (!cov.total && !sessions.length) {
    el.innerHTML = `
      ${pageHead({
        kicker: `${greet}　—　${new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}`,
        title: '扉（ダッシュボード）',
        sub: '800 点台から 900 台へ。取りこぼしを潰し込む場所です。',
      })}
      <div class="card" style="border-left:3px solid var(--shu)">
        <div class="stat__k" style="color:var(--shu)">まずは力試しから</div>
        <h2 style="font-family:var(--f-display);font-size:1.5rem;font-weight:600;letter-spacing:.05em;margin:.6rem 0 .5rem">
          Part 5 を 30 問、10 分で。</h2>
        <p style="line-height:1.9;max-width:38rem">
          いまの実力がどのあたりかを測らないと、どの論点を潰すべきかが決まりません。
          解いた記録から<b>推定スコア・弱点論点・復習の期限</b>が自動で組み上がり、この画面が埋まっていきます。
        </p>
        <div class="inline mt2">
          <button class="btn btn--shu" id="first-run">Part 5 を 30 問はじめる</button>
          <a class="btn btn--ghost" href="#/mocks">模試を見る</a>
          <a class="btn btn--ghost" href="#/drills">論点を選ぶ</a>
        </div>
        <p class="note mt2">記録はこの端末のブラウザ内にだけ保存されます。サーバには何も送信しません。</p>
      </div>`;
    el.querySelector('#first-run')?.addEventListener('click', async () => {
      const { loadDrills } = await import('../../data/registry.js');
      const { shuffle } = await import('../quiz.js');
      const p5 = (await loadDrills()).filter(u => u.part === 5);
      if (!p5.length) { toast('Part 5 のドリルがまだありません'); return; }
      const units = shuffle(p5).slice(0, 30);
      await launchOrResume({
        mode: 'drill', label: '力試し：Part 5 を 30 問', units, instant: true, backTo: '#/',
        sessionKey: 'first-run', restore: { kind: 'drills', unitIds: units.map(u => u.id) },
      });
    });
    return;
  }

  el.innerHTML = `
    ${pageHead({
      kicker: `${greet}　—　${new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}`,
      title: '扉（ダッシュボード）',
      sub: '800 点台から 900 台へ。取りこぼしを潰し込む場所です。',
      aside: `<span class="chip chip--shu">連続 ${streak} 日</span>
              <span class="chip">通算 ${cov.total.toLocaleString()} 問</span>`,
    })}

    ${sessions.length ? sessionsCard(sessions) : ''}

    <div class="grid grid--sidebar ${sessions.length ? 'mt2' : ''}">
      <!-- 推定スコア -->
      <div class="scorecard">
        <div class="scorecard__label">推定スコア</div>
        <div class="scorecard__total">${est.estimable ? est.total : '—'}<sup>/ 990</sup></div>
        <div class="note" style="margin-top:.3rem">
          ${est.estimable
            ? `直近 ${est.sample} 問の正答率から換算　<b>${b.name}</b>・${esc(b.ja)}`
            : est.sample
            ? esc(shortfallNote(est))
            : '演習を始めるとここに推定スコアが出ます'}
        </div>
        <div class="scorecard__split">
          ${stat('Listening', est.estimableL ? est.L : '—',
            est.estimableL ? `素点 ${Math.round(est.rawL)}/100` : `あと ${est.minSectionN - est.lN} 問で算出`)}
          ${stat('Reading', est.estimableR ? est.R : '—',
            est.estimableR ? `素点 ${Math.round(est.rawR)}/100` : `あと ${est.minSectionN - est.rN} 問で算出`)}
        </div>
        ${est.estimable ? `<p class="note mt">${esc(b.desc)}</p>` : ''}
      </div>

      <!-- 今日 -->
      <div class="card">
        <div class="inline" style="gap:1.2rem;align-items:center">
          ${ring(Math.min(1, today / goal), { label: `${today}`, sub: `/ ${goal} 問`, color: today >= goal ? 'var(--midori)' : 'var(--shu)' })}
          <div style="flex:1">
            <div class="stat__k">本日の学習</div>
            <div style="font-size:.88rem;margin-top:.3rem;line-height:1.7">
              ${today >= goal
                ? '目標達成。今日はここまでで十分です。'
                : `目標まであと <b>${goal - today}</b> 問。<br>10 分あれば Part 5 を 20 問こなせます。`}
            </div>
            <div class="inline mt">
              <button class="btn btn--sm" id="quick-p5">Part 5 を 20 問</button>
              ${due ? `<a class="btn btn--ghost btn--sm" href="#/review">復習 ${due}</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>

    ${sectionHead('01', '今日やること', '優先度順')}
    <div class="grid grid--3">
      ${todoCard('復習キュー', due
        ? `期限が来た設問が <b>${due}</b> 問あります。忘却の直前に当てるのが最も効率的です。`
        : '今日の復習期限はありません。新しい論点に進みましょう。',
        due ? `<a class="btn btn--shu btn--block" href="#/review">復習を始める</a>` : `<a class="btn btn--ghost btn--block" href="#/drills">論点を選ぶ</a>`)}

      ${todoCard('弱点の論点', weak.length
        ? weak.map(w => `<div class="inline" style="justify-content:space-between;font-size:.84rem;margin-bottom:.3rem">
             <a href="#/drills/${esc(w.id)}">${esc(topicName(w.id))}</a>
             <span class="mono" style="color:var(--shu)">${pct(w.acc)}</span></div>`).join('')
        : '<span class="note">まだ判定に足るデータがありません。各論点を 5 問以上こなすと表示されます。</span>',
        weak.length ? `<button class="btn btn--block" id="fix-weak">最弱点を 10 問</button>` : '')}

      ${todoCard('予想模試', nextMockLine(mockMetas),
        `<a class="btn btn--ghost btn--block" href="#/mocks">模試一覧へ</a>`)}
    </div>

    ${sectionHead('02', 'パート別の現在地', '目標は 900 到達ライン')}
    <div class="card">
      <div class="tbl-wrap"><table class="tbl">
        <thead><tr><th>パート</th><th>演習数</th><th>正答率</th><th style="width:34%">900 ライン</th><th class="num">想定失点</th></tr></thead>
        <tbody>
        ${[1, 2, 3, 4, 5, 6, 7].map(p => {
          const d = bp[p], t = TARGET_900[p];
          const need = (t.size - t.allow) / t.size;
          const ok = d.n >= 5 && d.acc >= need;
          return `<tr>
            <td><a href="#/analytics">${esc(partLabel(p))}</a></td>
            <td class="num mono">${d.n}</td>
            <td class="num mono" style="color:${d.n < 5 ? 'var(--ink-3)' : ok ? 'var(--midori)' : 'var(--shu)'}">${d.n ? pct(d.acc) : '—'}</td>
            <td>${meter(d.n ? d.acc / 1 : 0, accMod(d.acc))}
                <span class="note mono" style="font-size:.65rem">必要 ${pct(need)}</span></td>
            <td class="num mono">${d.n >= 5 ? `${Math.round((1 - d.acc) * t.size * 10) / 10} 問` : '—'}</td>
          </tr>`;
        }).join('')}
        </tbody>
      </table></div>
      ${mom ? `<p class="note mt">直近 ${mom.n} 問の正答率は ${pct(mom.cur)}。その前の ${mom.n} 問（${pct(mom.prev)}）と比べて
        <b style="color:${mom.delta >= 0 ? 'var(--midori)' : 'var(--shu)'}">${mom.delta >= 0 ? '+' : ''}${Math.round(mom.delta * 100)} ポイント</b>。</p>` : ''}
    </div>

    ${sectionHead('03', '学習の記録', `直近 26 週`)}
    <div class="card">
      ${heatmap(A.dailyCounts(), 26)}
      <div class="heat-legend"><span>少</span>
        ${[0, 1, 2, 3, 4].map(l => `<span class="heat__c" data-l="${l}"></span>`).join('')}
        <span>多</span><span class="push">連続 ${streak} 日 / 通算 ${Object.keys(A.dailyCounts()).length} 日</span></div>
    </div>

    ${sectionHead('04', '直近の演習', '')}
    <div class="card card--flush">
      ${recent.length ? `<div class="rows">${recent.map(a => {
        const ok = a.items.filter(i => i.correct).length;
        return `<a class="row" href="#/result/${esc(a.id)}">
          <span class="row__no">${a.mode === 'mock' ? '模試' : a.mode === 'review' ? '復習' : '論点'}</span>
          <span><span class="row__t">${esc(a.label)}</span>
            <span class="row__s">${jaDateTime(a.ts)}　${a.items.length} 問</span></span>
          <span class="row__r">${Math.round(ok / a.items.length * 100)}%
            ${a.full ? `<br><span style="color:var(--shu)">${a.scaled.total}</span>` : ''}</span>
        </a>`;
      }).join('')}</div>` : empty('無', 'まだ演習の記録がありません。', '<a class="btn" href="#/drills">個別論点から始める</a>')}
    </div>
  `;

  /* ── 操作 ──
     中断セッションは複数件同時に残りうる（rev-wrong-… / rev-blank-… など）ため、
     querySelector 単数ではなく querySelectorAll で全件にイベントを付ける。 */
  el.querySelectorAll('[data-resume]').forEach(btn => btn.addEventListener('click', async (e) => {
    const key = e.currentTarget.dataset.resume;
    await resumeSession(key);
  }));
  el.querySelectorAll('[data-drop]').forEach(btn => btn.addEventListener('click', (e) => {
    const key = e.currentTarget.dataset.drop;
    const label = e.currentTarget.dataset.label || '演習';
    if (!confirm(`中断中の演習「${label}」を破棄しますか？`)) return;
    clearSession(key);
    location.reload();
  }));

  el.querySelector('#quick-p5')?.addEventListener('click', async () => {
    const { loadDrills } = await import('../../data/registry.js');
    const all = await loadDrills();
    const p5 = all.filter(u => u.part === 5);
    if (!p5.length) { toast('Part 5 のドリルがまだありません'); return; }
    const { shuffle } = await import('../quiz.js');
    const units = shuffle(p5).slice(0, 20);
    await launchOrResume({
      mode: 'drill', label: 'Part 5 速攻 20 問',
      units, instant: true, backTo: '#/',
      sessionKey: 'quick-p5',
      restore: { kind: 'drills', unitIds: units.map(u => u.id) },
    });
  });

  el.querySelector('#fix-weak')?.addEventListener('click', async () => {
    const t = weak[0];
    const found = await unitsForTopic(t.id);
    if (!found.length) { toast('この論点のドリルがまだありません'); return; }
    const { shuffle } = await import('../quiz.js');
    const units = shuffle(found).slice(0, 10);
    await launchOrResume({
      mode: 'drill', label: `弱点補強：${topicName(t.id)}`,
      units, instant: true, backTo: '#/',
      sessionKey: `weak-${t.id}`,
      restore: { kind: 'drills', unitIds: units.map(u => u.id) },
    });
  });
}

/**
 * 中断セッションの並び順を決める（是正1）。
 * 従来は savedAt 降順だけだったため、120分模試を残り32分で中断した直後に
 * 1問だけのドリルを何本も触ると、いちばん失うものが大きく期限が近い模試が
 * 「他 N 件を表示」の下に沈んでしまっていた。
 * 時間制限つきのセッションを常に先頭に集め、その中は savedAt 降順（新しい方が
 * 上）、時間制限なしのセッションはその後ろに savedAt 降順で続ける。
 * allSessions() が既に savedAt 降順で返すため、ここでは区分ごとに filter する
 * だけで両区分とも savedAt 降順が保たれる（安定ソート相当）。
 */
function orderSessions(sessions) {
  const timed = sessions.filter(s => s.timeLimitMs > 0);
  const untimed = sessions.filter(s => !(s.timeLimitMs > 0));
  return [...timed, ...untimed];
}

/**
 * 時間制限つきセッションの残り時間チップ（是正2）。時間制限が無いセッション
 * には何も出さない。quiz.js の警告しきい値（残り5分未満で赤く強調）と揃える。
 * 残りが0以下（再開すると即座に自動採点される状態）は「時間切れ」と出す。
 */
function remainingChip(s) {
  if (!(s.timeLimitMs > 0)) return '';
  const rem = s.timeLimitMs - (s.elapsedMs || 0);
  const urgent = rem < 5 * 60000;
  const label = rem <= 0 ? '時間切れ'
    : rem < 60000 ? `残り ${Math.ceil(rem / 1000)} 秒`
    : `残り ${Math.ceil(rem / 60000)} 分`;
  return ` <span class="chip ${urgent ? 'chip--shu' : ''}">${esc(label)}</span>`;
}

/**
 * relTime() が「たった今」を返すときに「たった今に中断」という助詞の壊れた
 * 日本語になるのを防ぐ（是正4）。「5分前」「2026/07/16」のような他の戻り値は
 * そのまま「に中断」を続けても自然なので、「たった今」だけ特別扱いする。
 * relTime() 自体は他の画面（drills.js・review.js）でも使われており、
 * そちらは「◯◯前」を単独で表示する用途のため手を入れない。
 */
function pausedLabel(ts) {
  const r = relTime(ts);
  return r === 'たった今' ? `${r}中断` : `${r}に中断`;
}

/**
 * 中断中の演習カード。1 件目（先頭）は従来どおりの大きさで、
 * 2 件目・3 件目は同じカード内に 1 行ずつ積む（rev-wrong-… / rev-blank-… のように
 * 複数のセッションキーが同時に残る場合、古い方をここに出さないと二度と
 * 到達できなくなるため）。4 件目以降は「他 N 件を表示」の下にたたむ
 * （携帯幅では6件で1画面を超え、扉の上部を占有してしまうため）。
 * 並び順は orderSessions() が決める（時間制限つきが先頭。是正1）ため、
 * 「1 件目」は単純な最新ではなく、その並びの先頭という意味になる。
 * 開閉の状態は保存しない。新しい CSS クラスは足さず、quiz.js の
 * 「解答一覧を開く」と同じ <details>/<summary> の作法を使う。
 */
function sessionsCard(sessions) {
  const [first, ...rest] = sessions;
  const shown = rest.slice(0, 2);
  const hidden = rest.slice(2);
  const row = (s) => `
    <div class="inline" style="justify-content:space-between;flex-wrap:wrap;gap:.6rem;margin-top:.8rem;padding-top:.8rem;border-top:1px dashed var(--rule)">
      <div class="note">
        <span class="stat__k">中断中</span>　${esc(s.label)}${remainingChip(s)}　${s.answered ?? 0} / ${s.total ?? '?'} 問　${pausedLabel(s.savedAt)}
      </div>
      <div class="inline">
        <button class="btn btn--ghost btn--sm" data-drop="${esc(s.key)}" data-label="${esc(s.label || '演習')}">破棄</button>
        <button class="btn btn--shu btn--sm" data-resume="${esc(s.key)}">再開する</button>
      </div>
    </div>`;
  return `<div class="card" style="border-color:var(--shu);border-left-width:3px">
    <div class="inline" style="justify-content:space-between;flex-wrap:wrap;gap:.6rem">
      <div>
        <div class="stat__k">中断中の演習</div>
        <div style="font-weight:600;margin-top:.2rem">${esc(first.label)}${remainingChip(first)}</div>
        <div class="note">${first.answered ?? 0} / ${first.total ?? '?'} 問　${pausedLabel(first.savedAt)}</div>
      </div>
      <div class="inline">
        <button class="btn btn--ghost btn--sm" data-drop="${esc(first.key)}" data-label="${esc(first.label || '演習')}">破棄</button>
        <button class="btn btn--shu" data-resume="${esc(first.key)}">再開する</button>
      </div>
    </div>
    ${shown.map(row).join('')}
    ${hidden.length ? `
      <details style="margin-top:.8rem;padding-top:.8rem;border-top:1px dashed var(--rule)">
        <summary class="note" style="cursor:pointer">他 ${hidden.length} 件を表示</summary>
        ${hidden.map(row).join('')}
      </details>` : ''}
  </div>`;
}

/** 推定スコアを出せない理由を、次に何をすればよいかの形で伝える */
function shortfallNote(est) {
  const need = [];
  if (!est.estimableL) need.push(`リスニングをあと ${est.minSectionN - est.lN} 問`);
  if (!est.estimableR) need.push(`リーディングをあと ${est.minSectionN - est.rN} 問`);
  return `スコアを出すにはデータが足りません。${need.join('、')}こなすと表示されます。`;
}

function todoCard(title, bodyHtml, action) {
  return `<div class="card">
    <div class="stat__k">${esc(title)}</div>
    <div style="font-size:.86rem;line-height:1.8;margin:.5rem 0 .9rem;min-height:4.6rem">${bodyHtml}</div>
    ${action}
  </div>`;
}

function nextMockLine(metas) {
  if (!metas.length) return '模試は現在収録作業中です。まずは<a href="#/drills">個別論点</a>で足場を固めましょう。';
  const done = new Set(attemptsDesc().filter(a => a.full).map(a => a.sourceId));
  const next = metas.find(m => !done.has(m.id));
  if (!next) return `収録済みの ${metas.length} 回分をすべて受験済みです。<b>間違えた問題だけ</b>を復習で回すのが最短です。`;
  return `次は <b>${esc(next.title)}</b>。<br><span class="note">${esc(next.theme)}</span>`;
}

/**
 * 中断セッションを再開する。
 * セッションに保存された復元素性から、中断時とまったく同じ設問集合を
 * 同じ順序で組み直す。組み直せない場合は復元せず破棄する
 * （別の設問集合で再開すると、保存済みの解答が別問に紐づいてしまうため）。
 */
async function resumeSession(key) {
  const s = state.sessions[key];
  if (!s) return;
  if (await resumeFromSession(key, s, { backTo: '#/' })) return;
  toast('この中断データは復元できないため破棄しました。もう一度始めてください。');
  clearSession(key);
  location.reload();
}
