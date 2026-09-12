/* =============================================================
   予想模試 Vol.5 — Part 7 単一文書 後半（No.165–175）
   総仕上げ回。
   ============================================================= */

const sp = (o) => ({
  id: `v5-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。 */
    id: x.qid || `v5q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
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
        { who: 'Farah Delacroix', time: '08:02', text: 'Support flagged it at seven — the new subscription renewal job double-charged some customers overnight. We need to know the scope before I escalate.' },
        { who: 'Ravi Chandrasekaran', time: '08:04', text: 'Checking the logs now. Looks like it only hit customers who renewed between midnight and 2 a.m.' },
        { who: 'Noor Haddad', time: '08:06', text: 'I have four tickets already, all saying they were charged twice.' },
        { who: 'Farah Delacroix', time: '08:07', text: 'How many customers renewed in that window total?' },
        { who: 'Ravi Chandrasekaran', time: '08:09', text: 'Three hundred and forty. Not all of them will have been double-charged — the bug only fires if the retry job runs before the first charge confirms.' },
        { who: 'Callum Reyes', time: '08:11', text: "Whatever the number, I'd rather we refund proactively than wait for tickets to come in one by one." },
        { who: 'Farah Delacroix', time: '08:13', text: 'Agreed. Ravi, can you get me an exact list by nine?' },
        { who: 'Ravi Chandrasekaran', time: '08:15', text: "Yes. I'm also disabling the retry job until we understand why it's firing early." },
        { who: 'Noor Haddad', time: '08:16', text: 'Should I tell the four who already contacted us that a refund is coming, or wait for the full list?' },
        { who: 'Callum Reyes', time: '08:18', text: "Tell them now. No reason to make them wait just because we're being thorough about the rest." },
        { who: 'Farah Delacroix', time: '08:20', text: 'Agreed, Noor — go ahead with those four.' },
      ] }],
    }],
    q: [
      { tag: '概要', s: 'What problem are the writers discussing?',
        c: ['A drop in subscription renewals reported earlier this week', 'A delay in shipping the renewal notices to customers overnight',
            'A billing error that charged some customers twice', 'A dispute over the refund policy raised by several customers'],
        a: 2,
        e: '更新処理のジョブが一部の顧客を二重に課金したという不具合について話し合っている。',
        w: ['更新件数の減少ではなく、二重請求という個別の不具合の話。', '通知発送の遅延ではない。', '正解。', '返金方針を巡る対立ではなく、全員が速やかな返金に同意している。'] },
      { tag: '意図', t: ['p7intent'],
        s: 'At 08:18, what does Mr. Reyes most likely mean when he writes, "No reason to make them wait just because we\'re being thorough about the rest"?',
        c: ['He believes the four known cases can be addressed without waiting for the complete list.', 'He thinks the investigation should be halted.',
            'He wants Noor to stop taking new tickets.', 'He is questioning whether a refund is necessary.'],
        a: 0,
        e: '直前で「4 件にはすぐ伝えるべきか、全体のリストを待つべきか」と問われ、その返答。全体調査を待たずに既知の 4 件には先に対応してよい、という意図。',
        w: ['正解。', '調査の中止は述べていない。', '新規受付の停止は述べていない。', '返金の必要性はすでに合意済み。'] },
      { tag: '詳細', s: 'How many customers renewed during the affected window?',
        c: ['4', '96', '340', '2'],
        a: 2,
        e: '「午前 0 時から 2 時の間に更新した顧客は合計 340 名」と述べられている。',
        w: ['判明している苦情件数。', '本文に記載なし。', '正解。', '対象時間帯（0〜2 時）の数字ではない。'] },
      { tag: '推測', t: ['p7inf'], s: 'Why does Mr. Chandrasekaran disable the retry job?',
        c: ['To prevent further double-charges while the cause is unclear', 'To reduce server load while the overnight renewal batch is still running',
            'Because Mr. Reyes instructed him to do so immediately this morning', 'Because the renewal window has already closed for all affected customers'],
        a: 0,
        e: '「なぜ早く発火するのか分かるまで、再試行ジョブを無効化する」と述べており、原因不明の間に被害を広げないための措置。',
        w: ['正解。', 'サーバー負荷についての言及はなく、停止の理由は「なぜ早く発火するのか分かるまで」と本人が明言している。', 'レイズ氏の指示ではなく、原因が分かるまでという本人の判断。', '更新期間が終了したとは述べておらず、不具合はまだ調査中。'] },
    ],
  }),

  /* ── 169–171 手紙 ─────────────────────────────────── */
  sp({
    n: [169, 170, 171], lv: 5,
    docs: [{
      label: 'Letter',
      head: 'Aldous & Fenwick Horology\nThe Old Forge, Bridport\n\n5 February',
      body: [
        'Ms. Corinne Whitmarsh\nClerk to the Parish Council\nGreat Hollowbrook',
        'Dear Ms. Whitmarsh,',
        'Further to your enquiry of 14 January, I have now completed my examination of the turret clock mechanism above the market hall.',
        'The condition is better than the 2018 report suggested. The going train — the gears that keep time — is in good order and needs only cleaning and re-oiling. What has failed is the strike train, the separate set of gears that trips the hour bell; a worn pivot there has been allowing the hammer to fall out of time with the actual hour.',
        'I would not recommend replacing the strike train at this stage. What the mechanism needs is a new bushing at the worn pivot and an adjustment to the count wheel. That is roughly twenty-five hours of workshop time rather than the hundred and twenty hours a full strike-train replacement would require.',
        'I must, however, raise the condition of the clock room itself. The window nearest the mechanism no longer closes fully, and dust and damp air have been reaching the movement for some time. Whatever we do to the mechanism will be undone within a few years unless that window is properly resealed. I can supply a written specification for a glazier if that would help you raise the matter with the council.',
        'My estimate for the bushing and adjustment is £2,180. I have not included the window specification, which I would provide at no charge.',
        'Yours sincerely,\nBenedict Aldous',
      ],
    }],
    q: [
      { tag: '概要', s: 'Why is Mr. Aldous writing?',
        c: ['To request additional historical drawings', 'To decline a restoration commission',
            'To report on an examination and recommend limited repair work', 'To invoice for completed repair work'],
        a: 2,
        e: '調査結果を報告し、全面交換ではなく限定的な修理を勧めている。',
        w: ['図面の追加要請はない。', '依頼は引き受けている。', '正解。', '未実施の作業の見積もりであり請求書ではない。'] },
      { tag: '詳細', s: 'What does the letter indicate about the going train?',
        c: ['It is in good order and needs only cleaning.', 'Mr. Aldous has already replaced it.',
            'Mr. Aldous took it away for inspection.', 'It no longer keeps accurate time and needs a full replacement.'],
        a: 0,
        e: '「時を刻む歯車列は状態が良く、清掃と注油のみでよい」とある。',
        w: ['正解。', '打鐘機構の交換は『現段階では勧めない』と述べているだけで、going train を交換したという記述は無い。', '取り外しには触れていない。', '不具合があるのは打鐘機構（strike train）の方で、時を刻む歯車列（going train）は清掃と注油のみでよいとされている。大掛かりな交換は不要。'] },
      { tag: '推測', t: ['p7inf'], s: 'Why does the writer mention the condition of the window?',
        c: ['To warn that the repair will not last without further work', 'To explain a delay in the examination',
            'To justify a higher estimate for the bushing', 'To suggest moving the clock room'],
        a: 0,
        e: '「窓を適切に密閉しない限り、機構の修理は数年で損なわれる」と警告している。',
        w: ['正解。', '遅延の説明ではない。', '見積もりには窓の工事は含まれていない。', '移設は提案していない。'] },
    ],
  }),

  /* ── 172–175 報告（文挿入あり）───────────────────── */
  sp({
    n: [172, 173, 174, 175], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Report',
      title: 'Park Irrigation: Review of the 2023 Smart-Controller Rollout',
      head: 'Prepared for the Parks & Open Spaces Committee',
      body: [
        "The programme fitted smart irrigation controllers to 86 of the borough's parks, against a plan of 100. — [[1]] — The 14 outstanding are all in the eastern district and are covered by a separate drainage scheme due next year.",
        'On cost, the programme came in 4 percent under budget. On timing, it finished four weeks late. Neither figure is unusual for infrastructure work of this kind. — [[2]] —',
        'The finding that merits the committee\'s attention concerns vandalism-related faults. The new controllers use a locked, weatherproof enclosure in place of the previous open control box. Replacement enclosure costs are 45 percent higher per unit. — [[3]] — Across the first year, however, total fault-repair spending fell by 57 percent, because the number of controllers needing repair fell from 96 to 34.',
        'Officers had expected a reduction but not one of this scale. Interviews with the maintenance contractor suggest the reason is not only the enclosure design but what passers-by see: an open control box invites casual interference, whereas the locked enclosure gives no obvious point of entry and requires a key that only contractors carry. — [[4]] —',
        "We therefore recommend that the eastern district rollout use the same specification, notwithstanding the higher unit cost, and that the committee treat unit price as a poor guide to lifetime cost in this category.",
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why were 14 parks not fitted with the new controllers?',
        c: ['Their existing controllers were found to be adequate.', 'Funding for the programme was withdrawn.',
            'They are part of another scheme.', 'The contractor withdrew from the work.'],
        a: 2,
        e: '「残る 14 か所は東地区にあり、来年予定の別の排水整備事業に含まれる」とある。',
        w: ['既存機の適否には触れていない。', '予算は 4 パーセント下回っている。', '正解。', '業者の撤退には触れていない。'] },
      { tag: '詳細', s: 'What is stated about the cost of the replacement enclosures?',
        c: ['The unit price rose but total spending on repairs fell.', 'Both the unit price and total spending fell over the year.',
            'The unit price remained unchanged from the previous enclosure design.', 'Total spending on repairs rose by 57 percent in the first year.'],
        a: 0,
        e: '1 台あたりは 45 パーセント高いが、故障件数が 96 → 34 に減ったため総額は 57 パーセント減。',
        w: ['正解。', '単価は 45 パーセント上昇しており、下落ではない。', '従来の開放型制御箱に比べ 1 台あたり 45 パーセント高いと明記されている。', '総額はむしろ 57 パーセント減少している。増加ではない。'] },
      { tag: '位置選択', qid: 'v5q174r', t: ['p7ins'], insertAt: 3,
        sentence: 'That is a rise of £36 on a unit that previously cost £80.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"That is a rise of £36 on a unit that previously cost £80."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 2,
        e: '挿入文の£36は、旧単価£80に当てはめると45パーセントの上昇にあたる（80×0.45＝36）。直前の文が「1台あたり45パーセント高い」と述べているのはこの位置だけで、£36と£80から導ける45パーセントとちょうど一致する。',
        w: ['[1] の前後にはまだ割合の言及が一つも無く、£36と£80が何パーセントの変化に当たるか、直前の文と突き合わせる材料が無い。',
            '[2] の直前で示されている割合は「予算を4パーセント下回った」であり、4パーセントを£80に当てはめると£3.20で£36とは一致しない。しかも超過ではなく低減であり、上昇という内容そのものとも矛盾する。',
            '正解。直前の文「1台あたり45パーセント高い」の45パーセントを旧単価£80に当てはめるとちょうど£36の上昇になる（80×0.45＝36）。数値の対応が過不足なく一致する。',
            '[4] の直前の文は鍵の携行についての記述で、価格でも割合でもない。裸の指示代名詞Thatが受けられるのは直前の文の内容に限られるので、「それは£36の上昇である」が指す先がその位置には存在しない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does the report conclude about unit price?',
        c: ['It should be the primary criterion for future purchases.', 'It is a misleading measure in this category.',
            'It should go back to the contractor for renegotiation.', 'It will fall once volumes increase.'],
        a: 1,
        e: '「この分野では単価は生涯費用の目安として不適切だと委員会が扱うよう勧告する」とある。',
        w: ['むしろ主要基準にすべきでないと述べている。', '正解。', '再交渉の勧告はない。', '数量による下落には触れていない。'] },
    ],
  }),
];
