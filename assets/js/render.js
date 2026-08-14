/* =============================================================
   render.js — 文書・図表・スクリプトの描画
   Part 6 の空所 {{131}} と Part 7 の挿入位置 [[1]] を解決する。
   ============================================================= */

import { esc } from './ui.js';

/* 本文中の特殊記法
     {{1}}    … Part 6 の空所。数字は「このユニット内で何問目か」。
                実際に表示される設問番号は blankNos から解決する。
     [[2]]    … Part 7 の文挿入位置 [2]
     *強調*   … 太字
*/
function inlineMarkup(s, { activeBlank = null, blankNos = null, insertAt = null, insertText = '' } = {}) {
  let h = esc(s);
  h = h.replace(/\*([^*]+)\*/g, '<strong>$1</strong>');
  h = h.replace(/\{\{(\d+)\}\}/g, (_, idx) => {
    const i = Number(idx);
    const label = blankNos?.[i - 1] ?? i;
    const on = Number(activeBlank) === i;
    return `<span class="blank" data-blank="${i}" ${on ? 'style="background:var(--shu-wash);outline:2px solid var(--shu);outline-offset:2px;border-radius:2px"' : ''}>&nbsp;${label}.&nbsp;------&nbsp;</span>`;
  });
  h = h.replace(/\[\[(\d)\]\]/g, (_, n) => {
    if (String(insertAt) === String(n) && insertText) {
      return `<span class="ins">${esc(insertText)}</span>`;
    }
    return `<span class="mono" style="color:var(--shu);font-weight:600">[${n}]</span>`;
  });
  return h;
}

function block(b, opts) {
  if (typeof b === 'string') return `<p>${inlineMarkup(b, opts)}</p>`;
  switch (b.t) {
    case 'list':
      return `<ul style="margin:.4rem 0 .9rem;padding-left:1.1rem;list-style:disc">
        ${b.items.map(i => `<li style="margin-bottom:.25rem">${inlineMarkup(i, opts)}</li>`).join('')}</ul>`;
    case 'ol':
      return `<ol style="margin:.4rem 0 .9rem;padding-left:1.3rem;list-style:decimal">
        ${b.items.map(i => `<li style="margin-bottom:.25rem">${inlineMarkup(i, opts)}</li>`).join('')}</ol>`;
    case 'table':
      return `<div style="overflow-x:auto"><table>
        ${b.head ? `<thead><tr>${b.head.map(h => `<th>${inlineMarkup(h, opts)}</th>`).join('')}</tr></thead>` : ''}
        <tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${inlineMarkup(String(c), opts)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div>`;
    case 'chat':
      return `<div style="display:flex;flex-direction:column;gap:.55rem;margin:.5rem 0 .9rem">
        ${b.lines.map(l => `<div style="border-left:2px solid var(--rule);padding-left:.75rem">
          <div class="mono" style="font-size:.68rem;color:var(--ink-3)">${esc(l.who)}${l.time ? `　<span style="letter-spacing:.05em">${esc(l.time)}</span>` : ''}</div>
          <div>${inlineMarkup(l.text, opts)}</div></div>`).join('')}
      </div>`;
    case 'kv':
      return `<dl style="display:grid;grid-template-columns:auto 1fr;gap:.2rem .9rem;margin:.4rem 0 .9rem;font-size:.92rem">
        ${b.pairs.map(([k, v]) => `<dt class="mono" style="color:var(--ink-3);font-size:.78rem">${esc(k)}</dt><dd>${inlineMarkup(String(v), opts)}</dd>`).join('')}</dl>`;
    case 'hr':
      return `<hr style="border:0;border-top:1px dashed var(--rule);margin:1rem 0">`;
    case 'pre':
      return `<div class="mono" style="white-space:pre-wrap;font-size:.82rem;line-height:1.7;background:var(--rule-soft);padding:.7rem .9rem;border-radius:3px;margin:.4rem 0 .9rem">${inlineMarkup(b.text, opts)}</div>`;
    default:
      return `<p>${inlineMarkup(b.text || '', opts)}</p>`;
  }
}

/** 1 つの文書（メール・記事・広告など）を描画 */
export function renderDoc(doc, opts = {}) {
  return `<article class="passage">
    ${doc.label ? `<div class="passage__label"><span>${esc(doc.label)}</span>${doc.meta ? `<span>${esc(doc.meta)}</span>` : ''}</div>` : ''}
    ${doc.head ? `<div class="hdr">${inlineMarkup(doc.head, opts)}</div>` : ''}
    ${doc.title ? `<span class="ttl">${inlineMarkup(doc.title, opts)}</span>` : ''}
    ${(doc.body || []).map(b => block(b, opts)).join('')}
    ${doc.sig ? `<div class="sig">${inlineMarkup(doc.sig, opts).replace(/\n/g, '<br>')}</div>` : ''}
  </article>`;
}

export function renderDocs(docs, opts = {}) {
  return (docs || []).map(d => renderDoc(d, opts)).join('');
}

/* ── Part 3/4 の図表 ─────────────────────────────────── */
export function renderGraphic(g) {
  if (!g) return '';
  const inner = g.t === 'table'
    ? `<table>${g.head ? `<thead><tr>${g.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>` : ''}
       <tbody>${g.rows.map(r => `<tr>${r.map(c => `<td>${esc(String(c))}</td>`).join('')}</tr>`).join('')}</tbody></table>`
    : g.t === 'list'
    ? `<ul style="padding-left:1.1rem;list-style:disc">${g.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`
    : g.t === 'kv'
    ? `<dl style="display:grid;grid-template-columns:auto 1fr;gap:.25rem 1rem">
        ${g.pairs.map(([k, v]) => `<dt style="font-weight:600">${esc(k)}</dt><dd>${esc(String(v))}</dd>`).join('')}</dl>`
    : `<pre class="mono" style="white-space:pre-wrap;margin:0">${esc(g.text || '')}</pre>`;

  return `<figure class="passage" style="margin-bottom:1rem">
    <div class="passage__label"><span>${esc(g.title || 'Graphic')}</span><span>設問で参照</span></div>
    ${inner}
    ${g.note ? `<figcaption class="note mt">${esc(g.note)}</figcaption>` : ''}
  </figure>`;
}

/* ── スクリプト（解説内） ────────────────────────────── */
import { ROLES } from './audio.js';

export function renderScript(script) {
  if (!script?.length) return '';
  return `<div class="kaisetsu__script">
    ${script.map(l => `<div><b>${esc(ROLES[l.role]?.label || l.role)}</b>${esc(l.text)}</div>`).join('')}
  </div>`;
}

/* ── 語注 ────────────────────────────────────────────── */
export function renderVocab(vocab) {
  if (!vocab?.length) return '';
  return `<ul class="vocab">${vocab.map(([w, m]) =>
    `<li><b>${esc(w)}</b> ${esc(m)}</li>`).join('')}</ul>`;
}
