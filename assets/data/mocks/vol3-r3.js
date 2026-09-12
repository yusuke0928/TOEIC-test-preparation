/* =============================================================
   予想模試 Vol.3 — Part 7 単一文書 後半（No.165–175）
   リーディング高負荷回。
   ============================================================= */

const sp = (o) => ({
  id: `v3-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。 */
    id: x.qid || `v3q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7detail'], tag: x.tag,
    insertAt: x.insertAt, sentence: x.sentence,
  })),
});

export const R3 = [

  /* ── 165–168 オンラインチャット（4名）─────────────── */
  sp({
    n: [165, 166, 167, 168], lv: 5, t: ['p7intent'],
    docs: [{
      label: 'Online chat discussion',
      body: [{ t: 'chat', lines: [
        { who: 'Elena Castillo', time: '09:02', text: 'Test lab confirmed it — the magnet in the RiverPlay building blocks can come loose if a child bites down hard enough. We need to pull batch 4471 from shelves.' },
        { who: 'Dov Kaplan', time: '09:04', text: 'How many units shipped in that batch?' },
        { who: 'Elena Castillo', time: '09:05', text: '6,200. About 3,900 are still with retailers; the rest have likely sold through.' },
        { who: 'Marcus Ueda', time: '09:07', text: 'Do we know if any injuries have been reported?' },
        { who: 'Elena Castillo', time: '09:08', text: 'None so far. This came from our own pre-release stress testing on a later batch, not from a complaint.' },
        { who: 'Priya Anand', time: '09:10', text: 'Then we get ahead of it. I would rather announce a voluntary recall than have a regulator announce it for us.' },
        { who: 'Dov Kaplan', time: '09:12', text: 'Agreed. Retailers can pull the 3,900 today if we send the notice by noon.' },
        { who: 'Marcus Ueda', time: '09:14', text: 'I want one more thing checked before noon — whether batch 4470, the one just before it, used the same magnet supplier.' },
        { who: 'Elena Castillo', time: '09:16', text: 'I\'ll have that answer within the hour.' },
        { who: 'Priya Anand', time: '09:18', text: 'Marcus, is there a reason you\'re asking about 4470 specifically rather than just 4471?' },
        { who: 'Marcus Ueda', time: '09:19', text: 'If it\'s the same supplier, we\'re better off recalling both at once than doing this twice.' },
        { who: 'Dov Kaplan', time: '09:21', text: 'Makes sense. I\'ll hold the notice until Elena confirms either way.' },
      ] }],
    }],
    q: [
      { tag: '概要', s: 'What are the writers discussing?',
        c: ['Whether to switch to a different magnet supplier for future batches', 'Whether to postpone a product launch until batch 4470 clears testing',
            'How to price a replacement product for major retailers', 'How to respond to a safety issue found during testing'],
        a: 3,
        e: '社内試験で見つかった安全上の問題（磁石が外れる恐れ）にどう対応するかを話し合っている。',
        w: ['供給元は、直前のバッチ 4470 が同じ供給元かを確かめる文脈で出てくるだけで、供給元を切り替えるかどうかは議論されていない。', '発売延期の話ではなく、バッチ 4470 の供給元確認は同時回収の是非を判断する材料にすぎない。', '価格設定や交換品の話は本文のどこにも出ておらず、話し合われているのは磁石の安全性と回収の進め方だけである。', '正解。'] },
      { tag: '意図', t: ['p7intent'],
        s: 'At 09:10, what does Ms. Anand most likely mean when she writes, "I would rather announce a voluntary recall than have a regulator announce it for us"?',
        c: ['She believes a regulator will not act on this issue.', 'She wants formal legal approval and a written sign-off before any announcement is made.',
            'She thinks the recall should be delayed until testing is complete.', 'She wants the company to control the timing and framing of the announcement.'],
        a: 3,
        e: '規制当局に先んじて自主的に発表したいという発言で、対応を自社主導で進め、発表の形と時期を管理したいという意図。',
        w: ['規制当局が動かないとは述べていない。', '法務承認や書面でのサインオフへの言及はない。', '延期の提案ではない。', '正解。'] },
      { tag: '詳細', s: 'How many units of batch 4471 are still with retailers?',
        c: ['2,300', '4,471', '6,200', '3,900'],
        a: 3,
        e: '出荷 6,200 個のうち、まだ小売店にあるのは約 3,900 個と述べられている。',
        w: ['本文に記載なし。', 'バッチ番号であり数量ではない。', '出荷総数。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'Why does Mr. Ueda want to know about batch 4470?',
        c: ['To check whether it reached a different overseas market', 'To determine whether a single combined recall would be more efficient',
            'To calculate a refund amount', 'To find out who approved the original design'],
        a: 1,
        e: '「同じ供給元なら、2 回に分けるより一度に回収する方がよい」と述べている。',
        w: ['販売市場の話はない。', '正解。', '返金額の話は出ていない。', '承認者には触れていない。'] },
    ],
  }),

  /* ── 169–171 手紙 ─────────────────────────────────── */
  sp({
    n: [169, 170, 171], lv: 5,
    docs: [{
      label: 'Letter',
      head: 'Fenwick & Voss Organ Conservation\nUnit 3, The Old Malthouse, Norwich\n\n22 October',
      body: [
        'The Reverend Alys Trentham\nChurchwardens\' Committee\nSt. Bartholomew\'s, Marsh Compton',
        'Dear Reverend Trentham,',
        'Further to your enquiry of 30 September, I have now completed my examination of the organ in the north transept.',
        'The condition is better than the surveyor\'s report from 2019 suggested. The leather in the bellows is worn but intact in most places, and the pipework itself — some three hundred and forty pipes across four ranks — is largely undamaged. What has failed is the wind trunk connecting the bellows to the main chest, where the wood has split along an old repair joint.',
        'I would not recommend a full restoration at this stage. What the organ needs is a replacement wind trunk and releathering of the bellows at the two points where air is visibly escaping. That is roughly sixty hours of workshop time rather than the four hundred hours a full restoration would require.',
        'I must, however, raise the condition of the case. The organ stands against an external wall that shows signs of rising damp, and whatever we repair inside the instrument will be undermined within five years unless the wall is treated and a ventilation gap is created behind the case. I can provide a written specification for a builder if that would help you raise the matter with the diocese.',
        'My estimate for the wind trunk and releathering is £4,850. I have not included the specification for the wall works, which I would provide at no charge.',
        'Yours sincerely,\nGriffin Okafor ACR',
      ],
    }],
    q: [
      { tag: '概要', s: 'Why is Mr. Okafor writing?',
        c: ['To decline a restoration commission because the damage is more extensive than expected', 'To report on an examination and recommend limited repair work',
            'To request additional historical photographs before finalising the estimate already given', 'To invoice for completed restoration work and request immediate final payment'],
        a: 1,
        e: '調査結果を報告し、全面修復ではなく限定的な修理を勧めている。',
        w: ['依頼は引き受けており、状態は 2019 年の調査報告よりも良好だったと述べている。損傷が想定より大きいという記述とは正反対。', '正解。', '調査はすでに完了し £4,850 という見積もりも確定しており、追加の写真提供を求める記述はない。', '完了した修復工事の請求ではない。今回の書面は見積もりであり、全面修復ではなく限定的な補修を提案している。'] },
      { tag: '詳細', s: 'What does the letter indicate about the pipework?',
        c: ['It is largely undamaged.', 'It has been replaced since 2019.',
            'It was removed for cleaning.', 'It no longer matches the original design.'],
        a: 0,
        e: '「パイプ自体はおおむね無傷」と述べられている。',
        w: ['正解。', '交換の話はない。', '清掃のための取り外しには触れていない。', '設計との不一致は述べていない。'] },
      { tag: '推測', t: ['p7inf'], s: 'Why does the writer mention the condition of the external wall?',
        c: ['To warn that the repair will not last without further work', 'To explain a delay in the examination',
            'To justify a higher estimate for the wind trunk', 'To suggest moving the organ to another building'],
        a: 0,
        e: '「壁を処置し、ケース裏に通気の隙間を作らない限り、内部の修理は 5 年で損なわれる」と警告している。',
        w: ['正解。', '遅延の説明ではない。', '見積もりには壁の工事は含まれていない。', '移設は提案していない。'] },
    ],
  }),

  /* ── 172–175 掲示（文挿入あり）─── 書き下ろし：採石場の切断方式変更（直前文の照応と第4段落の also で閉じる型） ── */
  sp({
    n: [172, 173, 174, 175], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Notice',
      title: 'Arrangements for the Northern Face',
      head: 'Marlstone Quarry — Notice to Neighbouring Residents, 4 March',
      body: [
        "Marlstone Quarry has produced dressed granite blockwork for regional builders since 1962, cutting stone from the rock face using controlled blasting along its natural fracture lines. — [[1]] — Blasting has always had to be scheduled around wind direction, since dust from a shot can drift for up to a kilometre in the wrong conditions.",
        "Neighbouring landowners have raised sixteen formal complaints about blasting vibration in the past three years, most concerning hairline cracks in outbuildings within four hundred metres of the quarry boundary. — [[2]] — The quarry's insurer has so far settled eleven of those claims without contesting liability.",
        "After reviewing the complaints, quarry management has decided to replace blasting with diamond-wire cutting for all future extraction on the northern face. — [[3]] — The new equipment arrives in November, and the changeover will be complete before blasting would otherwise resume in the new year.",
        "Diamond-wire cutting also produces larger, more uniform blocks, with less waste sent to the crusher for aggregate. Wire-cut block currently commands a nine percent premium over blasted block from other regional quarries, reflecting fewer hairline flaws. — [[4]] — Marlstone expects to bring wire cutting to its southern face over the following two years, once the northern face conversion has been reviewed.",
        "The change adds an estimated four percent to extraction costs on the northern face, a cost the company says is outweighed by fewer legal claims and steadier relations with neighbouring landowners.",
      ],
    }],
    q: [
      { qid: 'v3q172r3', tag: '詳細',
        s: 'What is indicated about the sixteen formal complaints?',
        c: ['They were prompted mostly by cracks in outbuildings around the quarry.', 'They were filed largely by regional builders buying quarry blockwork.',
            'They were triggered mainly by dust drifting over nearby fields.', 'They were settled by the insurer in all sixteen cases so far.'],
        a: 0,
        e: '第2段落が苦情16件について most concerning hairline cracks in outbuildings within four hundred metres of the quarry boundary と述べており、その大半は採石場の周囲にある付属屋の細かなひび割れに関するものである。',
        w: ['正解。',
            '苦情を出したのは第2段落が主語に立てている Neighbouring landowners（近隣の地権者）である。regional builders は第1段落で採石場が1962年以来その相手に御影石の加工材を納めてきたと書かれている石材の買い手であり、苦情の出し手として本文に登場しない。',
            '第2段落は苦情の中身を about blasting vibration と名指ししており、16件はいずれも発破の振動を対象としている。粉じんは第1段落が「発破の日程を風向きに合わせて組んできた」理由として挙げているだけで、粉じんを理由とする苦情は本文に1件も数えられていない。',
            '第2段落は苦情が16件、そのうち保険会社が責任を争わずに示談で解決したのは eleven of those claims だと述べている。11件は16件の一部として数えられており、全16件が解決済みという内容はこの数と合わない。'] },
      { qid: 'v3q173r', tag: '詳細',
        s: 'What is stated about wire-cut block?',
        c: ['It costs the same as blasted block elsewhere.', 'It remains in short supply across the region.',
            'It comes only in smaller block sizes so far.', 'It sells at a premium over blasted block.'],
        a: 3,
        e: 'ワイヤー切断材は、ひび割れが少ないことを反映して、他の採石場の発破材より9パーセント高い価格で取引されていると述べられている。',
        w: ['他の採石場の発破材より9パーセント高いと明記されており、同じ価格ではない。', '供給不足については本文に記載がない。', 'ワイヤー切断はむしろより大きく均一なブロックを生むと述べられており、小型化の記載と矛盾する。', '正解。'] },
      { qid: 'v3q174r3', tag: '位置選択', t: ['p7ins'], insertAt: 3,
        sentence: 'That alone is expected to cut vibration complaints from the northern face to near zero.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"That alone is expected to cut vibration complaints from the northern face to near zero."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 2,
        e: '裸の代名詞 That は直前の文が述べた事柄を受けるのが既定で、離れた先行詞を受けさせるには、その内容を記述で同定し直す定名詞句が要る。[3] の直前は「北側採石面の今後の採取をすべて発破からダイヤモンドワイヤー切断に替える」という措置そのもので、That alone がこれを指す。決め手はもう一つある。第4段落の冒頭が Diamond-wire cutting also produces larger, more uniform blocks … と also で始まっており、この also は「ワイヤー切断の利点がすでに一つ述べられている」ことを前提にする。その利点を述べている文はこの挿入文しかないので、挿入文が [3] にあるときだけ also が受ける先が生じる。',
        w: ['[1] の直前は採石場の沿革と、発破が風向きに合わせて日程を組まれてきたという説明で、苦情を減らす措置がまだ一つも述べられていない。That alone が指せる対象が本文に存在しない。',
            '[2] の直前は苦情16件と離れ屋のひび割れそのものについての記述で、That alone が受けるべき措置がまだ登場していない（保険会社が11件を示談で解決したという記述は [2] の直後にある）。',
            '正解。直前の一文が「北側採石面の今後の採取をすべて発破からワイヤー切断に替える」という措置を述べており、That alone がそれを指す。第4段落冒頭の also も、この位置に挿入文があって初めて「すでに述べられた利点」を受けられる。',
            '[4] の直前はワイヤー切断材が9パーセント高く取引されているという価格の記述で、That alone が指せる措置ではない。さらに、その第4段落の冒頭文が Diamond-wire cutting also produces … と also で始まっており、挿入文を [4] に置くと also が受ける先が本文中に無くなって宙に浮く。'] },
      { qid: 'v3q175r2', tag: '推測', t: ['p7inf'],
        s: 'What does the notice suggest about the higher extraction cost?',
        c: ['It will likely be passed on to regional builders in full.', 'It will decrease once the southern face is converted.',
            'It results from a shortage of specialised cutting equipment.', 'It is considered acceptable in view of the reduced legal risk.'],
        a: 3,
        e: '最終段落が、北側採石面の採取コストが約4パーセント増える分について、訴訟の減少と近隣地権者との関係の安定によって割に合う、という会社の見解を示している。',
        w: ['本文が価格について述べているのは、他の採石場の発破材に対してワイヤー切断材が9パーセント高い相場で取引されているという市場の価格であって、Marlstone が自社の販売価格を引き上げるとは書かれていない。4パーセントの増加分については「訴訟の減少と関係の安定によって相殺される」という会社の見解が最終段落に明示されている。',
            '南側採石面については、北側の切り替えを検証したうえで今後2年かけてワイヤー切断に移す計画だと第4段落が述べている。切り替えによって採取コストは4パーセント増えると最終段落が明記しており、南側に広げてコストが下がるという向きの記述とは逆である。',
            '最終段落が4パーセントの増加分の原因として挙げているのは切断方式そのものであり、設備については「新しい設備が11月に到着する」と第3段落が述べるだけで、不足しているという記述はない。',
            '正解。'] },
    ],
  }),
];
