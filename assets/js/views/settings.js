/* =============================================================
   settings.js — 設定・データ管理
   ============================================================= */

import { state, save, setSetting, exportJSON, importJSON, mergeJSON, resetAll, resetProgressOnly, KEY } from '../store.js';
import { pageHead, sectionHead, esc, toast, empty } from '../ui.js';
import * as audio from '../audio.js';
import * as A from '../analytics.js';

export default async function settings(el) {
  await audio.loadVoices();
  const voices = audio.allVoices();
  const s = state.settings;
  const ov = A.overall();

  el.innerHTML = `
    ${pageHead({
      kicker: 'SETTINGS',
      title: '設定',
      sub: 'すべての記録はこの端末のブラウザ内にのみ保存されます。サーバには何も送信しません。',
    })}

    <div class="grid grid--2">
      <!-- 音声 -->
      <div class="card">
        <div class="stat__k">音声</div>
        <p class="note mt">端末に入っている英語音声で読み上げます。米・英・豪・加のアクセントを自動で割り当てます。</p>

        <div class="field mt2">
          <label>再生速度　<span class="mono" id="rate-v">×${s.rate.toFixed(2)}</span></label>
          <input type="range" id="rate" min="0.7" max="1.5" step="0.05" value="${s.rate}">
          <span class="note">本番の話速はおよそ ×1.0。慣れたら ×1.15 で負荷をかけると本番が遅く感じます。</span>
        </div>

        <label class="switch">
          <input type="checkbox" id="autoPlay" ${s.autoPlay ? 'checked' : ''}>
          <span><span class="switch__t">設問を開いたら自動再生</span>
          <span class="switch__d">オフにすると自分のタイミングで再生できます</span></span>
        </label>
        <label class="switch">
          <input type="checkbox" id="autoAdvance" ${s.autoAdvance ? 'checked' : ''}>
          <span><span class="switch__t">解答したら自動で次へ</span>
          <span class="switch__d">Part 5 の高速演習向け（解説は数秒表示）</span></span>
        </label>

        <label class="switch">
          <input type="checkbox" id="scriptMode" ${s.scriptMode ? 'checked' : ''}>
          <span><span class="switch__t">読んで解くモード</span>
          <span class="switch__d">音を出せない場所用。選択肢とスクリプトを最初から表示します</span></span>
        </label>

        <div class="mt2">
          <div class="stat__k">検出された英語音声（${voices.length} 種）</div>
          <p class="note mt">米・英・豪・加の 4 アクセントに割り当てますが、<b>端末に入っている音声で代用されます</b>。
            たとえば豪州の音声が無い端末では英国の音声が使われるため、実際には 2〜3 アクセントになることがあります。
            本番に近づけたい場合は、OS に各国の英語音声を追加してください。</p>
          ${voices.length ? `
            <div class="mt" style="display:flex;flex-direction:column;gap:.4rem">
              ${Object.entries(audio.ROLES).filter(([k]) => k !== 'NARR').map(([role, cfg]) => {
                const cur = audio.pickVoice(role);
                return `<div class="inline" style="gap:.5rem">
                  <span class="chip" style="min-width:4.6rem;justify-content:center">${esc(role)}</span>
                  <select data-voice="${esc(role)}" style="flex:1;background:var(--card);border:1px solid var(--rule);border-radius:3px;padding:.3rem .5rem;font-size:.78rem">
                    <option value="">自動（${esc(cur?.name || '—')}）</option>
                    ${voices.map(v => `<option value="${esc(v.voiceURI)}" ${s.voiceMap?.[role] === v.voiceURI ? 'selected' : ''}>
                      ${esc(v.name)}（${esc(v.lang)}）</option>`).join('')}
                  </select>
                  <button class="btn btn--ghost btn--sm" data-test="${esc(role)}">試聴</button>
                </div>`;
              }).join('')}
            </div>`
          : `<p class="note mt" style="color:var(--shu)">英語音声が見つかりませんでした。
              macOS なら「システム設定 → アクセシビリティ → 読み上げコンテンツ → システムの声 → 英語」から追加できます。
              Windows は「設定 → 時刻と言語 → 音声認識」。Chrome ではオンライン音声も利用されます。</p>`}
        </div>
      </div>

      <!-- 学習 -->
      <div class="card">
        <div class="stat__k">表示</div>
        <div class="field mt2">
          <label>配色</label>
          <div class="seg" role="group" aria-label="配色">
            <button data-theme-set="paper" aria-pressed="${s.theme !== 'sumi'}">昼（紙）</button>
            <button data-theme-set="sumi" aria-pressed="${s.theme === 'sumi'}">夜（墨）</button>
          </div>
          <span class="note">画面左下のボタンからも切り替えられます。</span>
        </div>

        <div class="stat__k" style="margin-top:1.6rem">学習</div>
        <div class="field mt2">
          <label>1 日の目標問題数</label>
          <input type="number" id="dailyGoal" min="5" max="300" step="5" value="${s.dailyGoal}">
          <span class="note">平日 30 問・休日に模試 1 回、が 900 到達までの現実的なペースです。</span>
        </div>
        <label class="switch">
          <input type="checkbox" id="showTimer" ${s.showTimer ? 'checked' : ''}>
          <span><span class="switch__t">タイマーを表示する</span>
          <span class="switch__d">記録は表示に関わらず取得されます</span></span>
        </label>
        <label class="switch">
          <input type="checkbox" id="drillInstant" ${s.drillInstant ? 'checked' : ''}>
          <span><span class="switch__t">ドリルは 1 問ずつ採点</span>
          <span class="switch__d">オフにすると最後にまとめて採点します</span></span>
        </label>

        <div class="stat__k" style="margin-top:1.6rem">キーボード操作</div>
        <div class="tbl-wrap mt"><table class="tbl">
          <tbody>
            <tr><td class="mono">A / B / C / D</td><td>選択肢を選ぶ</td></tr>
            <tr><td class="mono">1 / 2 / 3 / 4</td><td>同上</td></tr>
            <tr><td class="mono">← / →</td><td>前の設問 / 次の設問</td></tr>
            <tr><td class="mono">Space</td><td>音声の再生・停止</td></tr>
            <tr><td class="mono">F</td><td>フラグ（後で見直す）</td></tr>
          </tbody>
        </table></div>
      </div>
    </div>

    ${sectionHead('DATA', 'データの管理', `記録 ${ov.n.toLocaleString()} 問 / 約 ${sizeKB()} KB`)}
    <div class="grid grid--2">
      <div class="card">
        <div class="stat__k">書き出し・読み込み</div>
        <p class="note mt">別の端末へ移すとき、またはバックアップに。JSON ファイル 1 つで完結します。</p>
        <div class="inline mt2">
          <button class="btn" id="export">JSON を書き出す</button>
          <button class="btn btn--ghost" id="import-merge">読み込んで合流</button>
          <button class="btn btn--ghost" id="import">読み込んで上書き</button>
          <input type="file" id="file" accept="application/json,.json" hidden>
        </div>
        <div class="mt2" style="border-left:2px solid var(--ai);padding-left:.9rem">
          <div class="stat__k" style="color:var(--ai)">PC とスマホの両方で使う</div>
          <p class="note mt">本アプリはサーバを持たない静的サイトのため、記録は端末ごとに分かれます。
            次の手順で行き来してください。</p>
          <ol class="note mt" style="padding-left:1.2rem;list-style:decimal;line-height:1.9">
            <li>使い終わった端末で <b>「JSON を書き出す」</b></li>
            <li>そのファイルをもう一方の端末へ送る（メール・クラウド等）</li>
            <li>もう一方の端末で <b>「読み込んで合流」</b></li>
          </ol>
          <p class="note mt">合流では、受験記録は<b>両方が残り</b>、設問ごとの習熟度は<b>最後に解いた方</b>を採用します。
            設定と中断中の演習は、いま使っている端末のものを保ちます。<br>
            「読み込んで上書き」は、この端末の記録を捨ててファイルの内容に置き換えます（復元用）。</p>
        </div>
        <p class="note mt2">※ ブラウザの「サイトデータを削除」や、シークレットウィンドウの終了で記録は消えます。
          模試を受けたら書き出しておくと安全です。</p>
      </div>
      <div class="card" style="border-color:color-mix(in srgb,var(--shu) 35%,transparent)">
        <div class="stat__k" style="color:var(--shu)">リセット</div>
        <p class="note mt">取り消せません。実行前に書き出しておくことを勧めます。</p>
        <div class="stack mt2">
          <button class="btn btn--ghost btn--block" id="reset-progress">学習記録だけ消す（設定は残す）</button>
          <button class="btn btn--ghost btn--block" id="reset-all" style="color:var(--shu);border-color:var(--shu)">すべて初期化する</button>
        </div>
      </div>
    </div>

    ${sectionHead('ABOUT', 'このアプリについて', '')}
    <div class="card">
      <p style="line-height:1.9">
        <b>TOEIC® L&amp;R 900 対策</b> — 900 到達のための演習・分析アプリ。<br>
        収録している設問・文書・音声スクリプトは<b>すべて本アプリのための書き下ろし</b>です。
        TOEIC® の過去問題および公式サンプル問題は ETS が著作権を保有し公開・再配布されていないため、
        公開されている<b>出題形式の仕様のみ</b>に合わせて新規に作成しています。
      </p>
      <p class="note mt2">
        TOEIC is a registered trademark of ETS. This application is not endorsed or approved by ETS.<br>
        音声は端末の Web Speech API による合成音声です。実際の試験音声とは異なります。
      </p>
    </div>
  `;

  /* ── 配線 ── */
  const bindCheck = (id) => el.querySelector(`#${id}`)?.addEventListener('change', e => {
    setSetting(id, e.target.checked); toast('保存しました');
  });
  ['autoPlay', 'autoAdvance', 'showTimer', 'drillInstant', 'scriptMode'].forEach(bindCheck);

  el.querySelectorAll('[data-theme-set]').forEach(b => b.addEventListener('click', () => {
    setSetting('theme', b.dataset.themeSet);
    document.documentElement.dataset.theme = b.dataset.themeSet;
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', b.dataset.themeSet === 'paper' ? '#f3eee2' : '#15191f');
    const lbl = document.querySelector('.theme-toggle__label');
    if (lbl) lbl.textContent = b.dataset.themeSet === 'paper' ? '夜' : '昼';
    el.querySelectorAll('[data-theme-set]').forEach(x => x.setAttribute('aria-pressed', x === b));
    toast('配色を変更しました');
  }));

  el.querySelector('#rate')?.addEventListener('input', e => {
    const v = Number(e.target.value);
    el.querySelector('#rate-v').textContent = `×${v.toFixed(2)}`;
    setSetting('rate', v);
  });
  el.querySelector('#dailyGoal')?.addEventListener('change', e => {
    setSetting('dailyGoal', Math.max(5, Number(e.target.value) || 30)); toast('保存しました');
  });

  el.querySelectorAll('[data-voice]').forEach(sel => sel.addEventListener('change', e => {
    state.settings.voiceMap = state.settings.voiceMap || {};
    if (e.target.value) state.settings.voiceMap[sel.dataset.voice] = e.target.value;
    else delete state.settings.voiceMap[sel.dataset.voice];
    save();
  }));
  el.querySelectorAll('[data-test]').forEach(b => b.addEventListener('click', () => {
    audio.say('The quarterly sales report will be distributed at tomorrow morning’s meeting.', b.dataset.test);
  }));

  el.querySelector('#export')?.addEventListener('click', () => {
    const blob = new Blob([exportJSON()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `toeic-lr900-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast('書き出しました');
  });

  let importMode = 'merge';
  el.querySelector('#import-merge')?.addEventListener('click', () => {
    importMode = 'merge'; el.querySelector('#file').click();
  });
  el.querySelector('#import')?.addEventListener('click', () => {
    importMode = 'replace'; el.querySelector('#file').click();
  });
  el.querySelector('#file')?.addEventListener('change', async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const replacing = importMode === 'replace';
    const msg = replacing
      ? 'この端末の記録をすべて捨てて、ファイルの内容に置き換えます。続けますか？'
      : 'ファイルの記録をこの端末の記録に合流させます。続けますか？';
    if (!confirm(msg)) { e.target.value = ''; return; }
    try {
      const text = await f.text();
      if (replacing) {
        importJSON(text);
        toast('読み込みました（上書き）');
      } else {
        const r = mergeJSON(text);
        toast(`合流しました：演習 ${r.attempts} 件 / 習熟度 ${r.items} 問 / フラグ ${r.flags} 問を取り込み`, 4200);
      }
      setTimeout(() => location.reload(), replacing ? 600 : 1600);
    } catch (err) {
      toast(`読み込みに失敗しました：${err.message}`);
    } finally {
      e.target.value = '';
    }
  });

  el.querySelector('#reset-progress')?.addEventListener('click', () => {
    if (!confirm('学習記録（履歴・習熟度・フラグ）をすべて消します。よろしいですか？')) return;
    resetProgressOnly(); toast('学習記録を消去しました'); setTimeout(() => location.reload(), 500);
  });
  el.querySelector('#reset-all')?.addEventListener('click', () => {
    if (!confirm('すべての設定と記録を初期化します。よろしいですか？')) return;
    if (!confirm('本当に実行しますか？ この操作は取り消せません。')) return;
    resetAll(); setTimeout(() => location.reload(), 300);
  });
}

function sizeKB() {
  try { return Math.round((localStorage.getItem(KEY) || '').length / 1024); }
  catch { return 0; }
}
