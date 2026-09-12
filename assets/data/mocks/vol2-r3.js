/* =============================================================
   予想模試 Vol.2 — Part 7 単一文書 後半（No.165–175）
   ============================================================= */

const sp = (o) => ({
  id: `v2-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。 */
    id: x.qid || `v2q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7detail'], tag: x.tag,
    insertAt: x.insertAt, sentence: x.sentence,
  })),
});

export const R3 = [

  /* ── 165–168 オンラインチャット ───────────────────── */
  sp({
    n: [165, 166, 167, 168], lv: 5, t: ['p7intent'],
    docs: [{
      label: 'Online chat discussion',
      body: [{ t: 'chat', lines: [
        { who: 'Ivana Kraljić', time: '09:14', text: 'Morning. The hotel has come back on the January conference. They can hold sixty rooms but need a decision by Friday.' },
        { who: 'Chidi Balogun', time: '09:16', text: 'Sixty against what forecast?' },
        { who: 'Ivana Kraljić', time: '09:17', text: 'Last year we filled forty-four. The year before, fifty-one.' },
        { who: 'Tanvir Chaudhry', time: '09:19', text: 'And what is the penalty if we release rooms late?' },
        { who: 'Ivana Kraljić', time: '09:21', text: 'Free release up to thirty days out. After that we pay eighty percent on anything unsold.' },
        { who: 'Chidi Balogun', time: '09:22', text: 'Thirty days is generous. Most venues want ninety.' },
        { who: 'Tanvir Chaudhry', time: '09:24', text: 'Then take all sixty. We will know our numbers by mid-December and the release date is 22 December.' },
        { who: 'Ivana Kraljić', time: '09:25', text: 'That is my reading too. Chidi, any objection?' },
        { who: 'Chidi Balogun', time: '09:26', text: 'None. Just make sure the release date is in the contract and not in an e-mail.' },
      ] }],
    }],
    q: [
      { tag: '概要', s: 'What are the writers deciding?',
        c: ['Which hotel to use for a conference', 'How to price conference tickets',
            'Whether to postpone an event', 'How many rooms to reserve'],
        a: 3,
        e: 'ホテルが 60 室を確保できるが金曜までに決定が必要、という状況への対応。',
        w: ['会場選定はすでに済んでいる。', '価格設定には触れていない。', '延期の話はない。', '正解。'] },
      { tag: '意図', t: ['p7intent'],
        s: 'At 09:22, what does Mr. Balogun most likely mean when he writes, "Thirty days is generous"?',
        c: ['The conference should be pushed back a few months.', 'The decision deadline is too short.',
            'The penalty rate is much higher than most expect.', 'The hotel is offering unusually favourable terms.'],
        a: 3,
        e: '直前で「30 日前までは無償で返室可能」と説明され、彼自身が「多くの会場は 90 日を求める」と続けている。条件が有利だという評価。',
        w: ['日程変更の話は出ておらず、具体的な延期案もない。', '決定期限ではなく返室期限の話。', '違約率への言及ではなく、比較対象への言及もない。', '正解。'] },
      { tag: '詳細', s: 'Why does Mr. Chaudhry support taking all sixty rooms?',
        c: ['Attendance has increased every year.', 'No other venue is available.',
            'The hotel has offered a discount for early booking.', 'The rooms can be released before the deadline.'],
        a: 3,
        e: '「12 月中旬には人数がわかり、返室期限は 12 月 22 日」＝期限前に判断できるので危険が小さい。',
        w: ['44 → 51 と一定でなく、毎年増加とは言えない。', '他会場には触れていない。', '割引の話はなく、早期予約についての言及もない。', '正解。'] },
      { tag: '詳細', s: 'What does Mr. Balogun ask for?',
        c: ['A written confirmation of the final attendance numbers next month', 'A face-to-face meeting with the venue\'s own general manager next week',
            'The release date to be stated in the contract', 'Removal of the penalty rate charge two months in advance'],
        a: 2,
        e: '「返室期限はメールではなく契約書に入れておくこと」と念を押している。',
        w: ['出席確認の話ではなく、来月という時期の言及もない。', '面談の要請はなく、来週という時期の言及もない。', '正解。', '違約金の免除は要求しておらず、そのような時期の指定もない。'] },
    ],
  }),

  /* ── 169–171 手紙 ─────────────────────────────────── */
  sp({
    n: [169, 170, 171], lv: 5,
    docs: [{
      label: 'Letter',
      head: 'Aldergrove Textile Conservation\nUnit 9, The Old Bonded Store, Belfast\n\n17 November',
      body: [
        'Dr. Sinéad Muldoon\nCollections Manager\nBallynure Heritage Museum',
        'Dear Dr. Muldoon,',
        'Further to your enquiry of 2 November, I have now examined the embroidered banner in our studio.',
        'The condition is better than your photographs suggested. The silk ground is weak in three places along the lower edge, but the metal thread is sound throughout, which is unusual for a piece of this date and considerably simplifies treatment.',
        'I would not recommend full conservation at this stage. What the banner needs is a support fabric behind the weak areas and a mount that allows it to hang without stress on the silk. That is eighteen hours of work rather than the ninety hours a full treatment would require.',
        'I must, however, raise the display conditions. The banner has been hung opposite a south-facing window. Whatever we do in the studio will be undone within a decade unless the light level at the surface is brought below fifty lux. I can supply a written specification if that would help you make the case internally.',
        'My estimate for the support and mount is £1,340. I have not included the specification, which I would provide at no charge.',
        'Yours sincerely,\nMáire Ó Braonáin ACR',
      ],
    }],
    q: [
      { tag: '概要', s: 'What is the main purpose of the letter?',
        c: ['To decline a commission', 'To report on an examination and recommend limited work',
            'To request additional photographs', 'To invoice for the completed conservation work and materials'],
        a: 1,
        e: '調査結果を報告し、全面修復ではなく限定的な処置を勧めている。',
        w: ['引き受けている。', '正解。', '写真の追加要請はない。', '見積もりであり請求書ではなく、対象の作業も未着手である。'] },
      { tag: '詳細', s: 'What did the examination find?',
        c: ['The metal thread is in good condition.', 'The banner is a later copy made within recent decades.',
            'The silk has been previously repaired with thread that does not match.', 'The mount is original to the entire piece.'],
        a: 0,
        e: '「金糸は全体に健全で、この年代のものとしては珍しい」とある。',
        w: ['正解。', '複製であるという記述はなく、金糸が「この年代のものとしては珍しい」ほど健全だとあり、後年の複製という記述と矛盾する。', '過去の修理には触れておらず、これから支持布を当てる処置を提案している段階である。', 'マウントはこれから作るもので、原品ということ自体が誤り。'] },
      { tag: '推測', t: ['p7inf'], s: 'Why does the writer mention the window?',
        c: ['To warn that treatment will not last without a change', 'To explain a delay in the examination',
            'To justify a higher estimate', 'To suggest moving the banner to storage'],
        a: 0,
        e: '「表面の照度を 50 ルクス未満に下げない限り、工房での作業は 10 年で無に帰す」と述べている。',
        w: ['正解。', '遅延の説明ではない。', '見積もりの根拠ではない。', '収蔵庫への移動は提案していない。'] },
    ],
  }),

  /* ── 172–175 報告（文挿入あり）───────────────────── */
  sp({
    n: [172, 173, 174, 175], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Report',
      title: 'Bus Stop Shelters: Review of the 2024 Replacement Programme',
      head: 'Prepared for the Transport Committee',
      body: [
        'The programme replaced ninety-two shelters over fourteen months, against a plan of one hundred and four. The twelve outstanding are all on the western corridor and are covered by a separate carriageway scheme, now due to start on 1 July. — [[1]] —',
        'On cost, the programme came in 3 percent under budget. On timing, it finished five weeks late. Neither figure is unusual for work of this kind. — [[2]] —',
        'The finding that merits the committee\'s attention concerns vandalism. The new shelters use laminated glass in place of the previous acrylic. Replacement panel costs are 40 percent higher per panel. — [[3]] — Across the first year, however, total panel replacement spending fell by 67 percent, because the number of panels needing replacement fell from 310 to 74.',
        'Officers had expected a reduction but not one of this scale. Interviews with the maintenance contractor suggest the reason is not only the material but its behaviour: acrylic panels that are cracked but still standing were routinely replaced, whereas laminated panels rarely reach that intermediate state. — [[4]] —',
        'We therefore recommend that the western corridor shelters use the same specification, notwithstanding the higher unit cost, and that the committee treat unit price as a poor guide to lifetime cost in this category.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why were twelve shelters not replaced?',
        c: ['Funding was withdrawn.', 'They are part of another project.',
            'The sites were found to be unsuitable.', 'The contractor withdrew from the work.'],
        a: 1,
        e: '「残る 12 基は西回廊にあり、別の車道整備事業に含まれる」とある。',
        w: ['予算は 3 パーセント下回っている。', '正解。', '用地の話は出ていない。', '業者の撤退には触れていない。'] },
      { tag: '詳細', s: 'What is stated about the cost of replacement panels?',
        c: ['The unit price rose but total spending fell.', 'Both unit price and total spending fell in year one.',
            'The unit price was unchanged.', 'The programme showed no saving against budget.'],
        a: 0,
        e: '1 枚あたりは 40 パーセント高いが、交換枚数が 310 → 74 に減ったため総額は 67 パーセント減。',
        w: ['正解。', '単価は上がっており、初年度に両方とも下がったという記述もない。', '40 パーセント上昇と明記。', '第2段落は On cost, the programme came in 3 percent under budget と、予算を 3 パーセント下回ったことを明記している。予算に対する節減が無かったとするこの記述は本文と正面から矛盾するので偽。'] },
      { tag: '位置選択', qid: 'v2q174r', t: ['p7ins'], insertAt: 1,
        sentence: 'That start date had originally been set for 6 May, but storms in February pushed it back by eight weeks.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"That start date had originally been set for 6 May, but storms in February pushed it back by eight weeks."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 0,
        e: '挿入文の That start date は、直前の文で示された「1 July に開始予定」という期日を受ける。6 May から8週間後はちょうど1 July（6 May ＋ 56日 ＝ 1 July）で計算が一致する。scheme と1 Julyという期日がその直前で示されているのは [1] だけである。',
        w: ['正解。直前の文の「1 July 開始」を That start date で受け、6 May から8週間後という計算が過不足なく一致する。',
            '[2] の段落は費用と工期の総括で、開始日は一つも出てこない。段落が述べる遅れは five weeks で、挿入文の eight weeks と一致せず、この事業の工期の説明としては読めない。挿入文が扱うのは別事業の carriageway scheme であり、段落全体の主語（the programme / it）からも外れる。',
            '[3] は Replacement panel costs are 40 percent higher per panel と、直後の Across the first year, however, total … fell by 67 percent が however で対をなす位置にあたる。この対の間に別の話題を割り込ませられない。',
            '[4] の直前は that intermediate state という別の指示詞で終わっており、直後は勧告である。That start date が受けるべき 1 July は4段落前にあり、直近の指示対象と競合する。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does the report conclude about unit price?',
        c: ['It should be the primary criterion for future purchases.', 'It is a misleading measure in this category.',
            'It should be renegotiated with the contractor.', 'It will fall once purchase volumes increase next year.'],
        a: 1,
        e: '「この分野では単価は生涯費用の目安として不適切だと委員会が扱うよう勧告する」とある。',
        w: ['むしろ主要基準にすべきでないと述べている。', '正解。', '再交渉の勧告はない。', '数量による下落には触れておらず、時期の見込みもない。'] },
    ],
  }),
];
