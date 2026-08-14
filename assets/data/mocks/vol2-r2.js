/* =============================================================
   予想模試 Vol.2 — Part 7 単一文書 前半（No.147–164）
   ============================================================= */

const sp = (o) => ({
  id: `v2-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    id: `v2q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7detail'], tag: x.tag,
    insertAt: x.insertAt, sentence: x.sentence,
  })),
});

export const R2 = [

  /* ── 147–148 掲示 ─────────────────────────────────── */
  sp({
    n: [147, 148], lv: 3,
    docs: [{
      label: 'Notice',
      title: 'Ravensworth Leisure Centre — Pool Closure',
      body: [
        'The main pool will be closed from Monday 4 to Wednesday 6 March for its annual deep clean and tile survey.',
        'The learner pool remains open throughout, and all lane-swimming sessions will be relocated there. Because the learner pool is shorter, sessions will be limited to forty-five minutes and must be booked in advance through the app — walk-ins cannot be accommodated during these three days.',
        'Members who cannot attend during the closure may freeze their membership for one week at no charge. Requests must be made at reception, not by e-mail.',
        'The sauna and steam room are unaffected.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What is stated about lane swimming during the closure?',
        c: ['It will be cancelled entirely.', 'It will cost an additional fee.',
            'It will be held at a nearby centre.', 'It will require a prior booking.'],
        a: 3,
        e: '「アプリで事前予約が必要で、当日の飛び込み利用はできない」と明記されている。',
        w: ['中止ではなく学習用プールに移す。', '追加料金の記載はない。', '別施設への移動ではない。', '正解。'] },
      { tag: 'NOT', t: ['p7not'], s: 'What is NOT mentioned in the notice?',
        c: ['The cost of a day pass', 'The way to suspend a membership',
            'The reason for the closure', 'The facilities that remain open'],
        a: 0,
        e: '1 日券の料金についての記載はない。他の 3 つはそれぞれ本文に根拠がある。',
        w: ['正解。', '受付で申し出ると明記。', '年次清掃とタイル調査と明記。', 'サウナと蒸し風呂は影響なしと明記。'] },
    ],
  }),

  /* ── 149–150 テキストメッセージ ───────────────────── */
  sp({
    n: [149, 150], lv: 5, t: ['p7intent'],
    docs: [{
      label: 'Text message chain',
      body: [{ t: 'chat', lines: [
        { who: 'Nadine Okoro', time: '15:31', text: 'Are you still at the fabrication shop?' },
        { who: 'Ewan Ferguson', time: '15:33', text: 'Just leaving. Why?' },
        { who: 'Nadine Okoro', time: '15:34', text: 'The drawing I sent this morning had the wrong hole spacing. 60 mm, not 50.' },
        { who: 'Ewan Ferguson', time: '15:35', text: 'They cut the first plate an hour ago.' },
        { who: 'Nadine Okoro', time: '15:36', text: 'Only the first?' },
        { who: 'Ewan Ferguson', time: '15:37', text: 'Yes — they were waiting on the material for the other five.' },
        { who: 'Nadine Okoro', time: '15:38', text: 'Then we got lucky.' },
        { who: 'Ewan Ferguson', time: '15:39', text: 'I will go back in and give them the corrected file now.' },
      ] }],
    }],
    q: [
      { tag: '意図', t: ['p7intent'],
        s: 'At 15:38, what does Ms. Okoro most likely mean when she writes, "Then we got lucky"?',
        c: ['The workshop agreed to absorb the cost.', 'The material arrived earlier than expected.',
            'The error was found before most of the work was done.', 'The original drawing turned out to be correct.'],
        a: 2,
        e: '直前で「他の 5 枚は材料待ちだった」＝まだ切っていないとわかったことへの反応。損失が 1 枚で済んだという意味。',
        w: ['費用負担の話は出ていない。', '材料は届いておらず、むしろ待ち状態。', '正解。', '図面は誤っていた。'] },
      { tag: '詳細', s: 'What will Mr. Ferguson do next?',
        c: ['Order replacement material', 'Inspect the first plate',
            'Cancel the remaining plates', 'Deliver the corrected drawing'],
        a: 3,
        e: '「今から戻って修正済みファイルを渡す」と述べている。',
        w: ['材料の発注は述べていない。', '検査の話はない。', '中止ではなく作り直し。', '正解。'] },
    ],
  }),

  /* ── 151–152 広告 ─────────────────────────────────── */
  sp({
    n: [151, 152], lv: 4,
    docs: [{
      label: 'Advertisement',
      title: 'Bramley & Cole — Shoe Repair, Established 1954',
      body: [
        'We resole, restitch and rebuild. What we do not do is tell you a shoe is beyond saving when it is not.',
        { t: 'list', items: [
          'Leather resoling from £48, including a new heel',
          'Stitch repair to uppers from £22',
          'Free assessment — bring the shoes in or post them to us',
          'Turnaround of ten working days; we do not offer an express service',
        ] },
        'We are often asked why we have no rush option. The answer is that the adhesives we use need seventy-two hours to cure properly at each stage, and rushing that is how a repair fails in six months.',
        'If we think a repair is not worth the money, we will say so and return the shoes at no charge. Roughly one pair in twelve falls into that category.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why does the shop not offer a faster service?',
        c: ['It has too few staff.', 'Customers rarely request it.',
            'Postal delays make it unreliable.', 'The materials require a fixed setting time.'],
        a: 3,
        e: '「接着剤は各工程で 72 時間の硬化を要し、急ぐと 6 か月で修理が失敗する」と説明されている。',
        w: ['人員の話はない。', '需要の話ではない。', '郵送の遅延には触れていない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What is suggested about the shop\'s assessments?',
        c: ['They must be booked in advance.', 'They are charged at a fixed rate.',
            'They sometimes result in no work being done.', 'They are carried out by post only.'],
        a: 2,
        e: '「修理する価値がないと判断すればそう伝え、無料で返送する。12 足に 1 足程度」とある。',
        w: ['予約の記載はない。', '無料と明記。', '正解。', '持ち込みも郵送も可。'] },
    ],
  }),

  /* ── 153–155 メール ───────────────────────────────── */
  sp({
    n: [153, 154, 155], lv: 5,
    docs: [{
      label: 'E-mail',
      head: 'To: t.andersen@nordbygruppen.no\nFrom: j.mercier@atelier-mercier.fr\nDate: 3 April\nSubject: Commission — reading room chairs',
      body: [
        'Dear Mr. Andersen,',
        'Thank you for the site visit last week and for letting me sit in the reading room for an hour. That hour changed my proposal.',
        'You asked for forty chairs in a single design. Having watched how the room is used, I would like to propose two designs instead: thirty for the long tables, where people stay for hours and need support at the lower back, and ten lighter chairs for the window bays, where nobody sat for more than about fifteen minutes.',
        'The two-design approach costs about eight percent more than a single run of forty. I think it is worth it, but I want to be clear that it is a preference of mine, not a technical necessity.',
        'On timber: you mentioned oak. The room already has a great deal of oak in the shelving, and forty oak chairs would, I think, flatten the space. Ash is close in colour, slightly lighter in weight, and would give the chairs their own presence.',
        'I have attached sketches of both designs and a revised schedule. If the eight percent is not acceptable, tell me and I will design a single chair that does both jobs adequately rather than one job well.',
        'With regards,\nJulien Mercier',
      ],
    }],
    q: [
      { tag: '概要', s: 'Why is Mr. Mercier writing?',
        c: ['To confirm a delivery date', 'To propose a change to an agreed commission',
            'To request payment for a site visit', 'To decline a project'],
        a: 1,
        e: '「1 種類 40 脚」という依頼に対し、2 種類に分ける提案をしている。',
        w: ['納期の確認ではない。', '正解。', '費用請求ではない。', '辞退していない。'] },
      { tag: '詳細', s: 'What did Mr. Mercier learn during the site visit?',
        c: ['The lighting is inadequate for reading.', 'The existing furniture is in poor condition.',
            'The room is used differently in different areas.', 'The room is smaller than the plan showed.'],
        a: 2,
        e: '長机では何時間も座り、窓際では 15 分程度しか座らないという使われ方の違いを観察している。',
        w: ['照明の話はない。', '既存家具の状態には触れていない。', '正解。', '広さの話も出ていない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does Mr. Mercier imply about using oak?',
        c: ['It is difficult to obtain in the required quantity.', 'It would make the room visually monotonous.',
            'It would exceed the client\'s budget.', 'It is unsuitable for chairs of this type.'],
        a: 1,
        e: '「棚にすでにオークが多く、オークの椅子 40 脚では空間が平板になる」＝視覚的に単調になるという趣旨。',
        w: ['入手性には触れていない。', '正解。', '費用の懸念は 8 パーセント増の話。', '素材としての適性は否定していない。'] },
    ],
  }),

  /* ── 156–158 記事 ─────────────────────────────────── */
  sp({
    n: [156, 157, 158], lv: 5,
    docs: [{
      label: 'Article',
      title: 'What Happened When One Town Removed Its Road Markings',
      head: 'Urban Notes, Issue 41',
      body: [
        'In 2021 the council of Vestmark, a town of nineteen thousand, removed the centre line from four kilometres of its main road. No other change was made: the speed limit, the surface and the signage all stayed as they were.',
        'The idea was not new. Trials elsewhere had suggested that drivers slow down when the road gives them less certainty about where they belong. What was unusual in Vestmark was the follow-up: the council measured for three full years rather than the usual one.',
        'The first-year results were striking. Mean speed fell by 6 kilometres per hour and the number of vehicles exceeding the limit fell by nearly half.',
        'By the third year, mean speed had risen again — though not all the way back. It settled about 2 kilometres per hour below the original figure. The council\'s engineer, Solveig Rask, describes this as the honest result. "Drivers adapt," she says. "Anyone who tells you a road treatment holds its first-year effect has not measured for long enough."',
        'The town has kept the arrangement. Ms. Rask notes that the residual 2 kilometres per hour is achieved at no ongoing cost, which is not true of enforcement.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What change did the council make in 2021?',
        c: ['It lowered the speed limit.', 'It resurfaced the main road.',
            'It installed additional signs.', 'It removed a road marking.'],
        a: 3,
        e: '「主要道路 4 キロの中央線を撤去した。他の変更はしていない」が根拠。',
        w: ['制限速度は変えていない。', '路面も変えていない。', '標識も変えていない。', '正解。'] },
      { tag: '詳細', s: 'What was unusual about the Vestmark trial?',
        c: ['It covered a longer stretch of road than others.', 'It measured effects over a longer period.',
            'It was funded by residents.', 'It was conducted without prior consultation.'],
        a: 1,
        e: '「通常 1 年のところ 3 年間測定した」点が特異だと述べられている。',
        w: ['距離の比較はしていない。', '正解。', '資金の話はない。', '事前協議には触れていない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does Ms. Rask imply about road treatments generally?',
        c: ['Their initial effects tend to diminish.', 'They are usually more effective than enforcement.',
            'They should be reversed after three years.', 'They work best on shorter roads.'],
        a: 0,
        e: '「運転者は順応する。初年度の効果が持続すると言う人は、測定期間が足りていない」という発言が根拠。',
        w: ['正解。', '取り締まりとの比較は費用面のみ。', '撤回は勧めていない（維持している）。', '道路の長さの話はない。'] },
    ],
  }),

  /* ── 159–160 フォーム ─────────────────────────────── */
  sp({
    n: [159, 160], lv: 4,
    docs: [{
      label: 'Form',
      title: 'Coldharbour Storage — Access Card Request',
      body: [
        { t: 'kv', pairs: [
          ['Account', 'Wren & Sons Joinery (unit 14C)'],
          ['Requested by', 'A. Whitmore, office manager'],
          ['Date', '7 May'],
          ['Cards currently held', '3 of a maximum of 5'],
        ] },
        { t: 'table',
          head: ['Name', 'Role', 'Access hours requested'],
          rows: [
            ['R. Duffy', 'Workshop supervisor', '24 hours'],
            ['M. Castellanos', 'Delivery driver', '06:00–18:00'],
          ] },
        'Site use only: 24-hour access is issued only where the account holder confirms in writing that the named person has completed the out-of-hours safety briefing. Requests without this confirmation will be issued as daytime access and can be upgraded later at no charge.',
        'Cards are produced on Tuesdays and Fridays and must be collected in person by the person named.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What condition applies to 24-hour access?',
        c: ['It requires written confirmation of a safety briefing.', 'It is limited to two people per account.',
            'It carries an additional monthly charge.', 'It must be renewed every six months.'],
        a: 0,
        e: '「時間外の安全説明を受けたことを口座名義人が書面で確認した場合にのみ発行」と明記。',
        w: ['正解。', '人数制限の記載はカード枚数のみ。', '追加料金の記載はない。', '更新の話はない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What can be inferred if the confirmation is missing?',
        c: ['The request will be rejected.', 'One card will be issued with restricted hours.',
            'The account will be suspended.', 'A fee will be charged for reissue.'],
        a: 1,
        e: '「確認がない場合は日中アクセスとして発行され、後で無料で切り替えられる」とある。24 時間を求めた R. Duffy の分が日中に制限される。',
        w: ['却下ではなく条件付きで発行される。', '正解。', '停止の話はない。', '切り替えは無料と明記。'] },
    ],
  }),

  /* ── 161–164 記事（文挿入あり）───────────────────── */
  sp({
    n: [161, 162, 163, 164], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Article',
      title: 'The Return Rate Nobody Was Measuring',
      head: 'Retail Practice Quarterly',
      body: [
        'For most online clothing retailers, the headline return rate sits somewhere between twenty and forty percent. — [[1]] — Nearly all of them track it monthly, and most set targets against it.',
        'Halloway, a mid-sized retailer in the north of England, found that the headline figure was hiding something. — [[2]] — When the company split its returns by whether the customer had ordered more than one size of the same item, two quite different businesses appeared.',
        'Customers who ordered a single size returned eleven percent of items. Customers who ordered two or three sizes of the same garment returned fifty-eight percent — but they also spent more per year and stayed as customers longer.',
        'The finding changed what Halloway did about returns. The obvious response, charging for returns, would have fallen hardest on its most valuable customers. — [[3]] — Instead the company invested in fit information: garment measurements, model heights, and a short note on each product page about how that specific item runs.',
        'Multi-size ordering fell by a third in eighteen months. — [[4]] — Total returns fell by nine percentage points, and revenue from that customer group did not fall at all.',
        'The lesson the company draws is not about clothing. It is that an average can describe a population that does not exist.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What did Halloway discover about its returns?',
        c: ['They were higher than the industry average.', 'They came mainly from a small group of new customers.',
            'They differed sharply between two ordering behaviours.', 'They were concentrated in one product category.'],
        a: 2,
        e: '同一商品を複数サイズ注文する客とそうでない客で、返品率が 11 パーセントと 58 パーセントに分かれた。',
        w: ['業界平均との比較はしていない。', '新規顧客の話ではない。', '正解。', '商品カテゴリの話は出ていない。'] },
      { tag: '詳細', s: 'Why did the company reject charging for returns?',
        c: ['It would have affected its best customers most.', 'It was prohibited by consumer regulations.',
            'It had failed at a competitor.', 'It would have been costly to administer.'],
        a: 0,
        e: '「返品有料化は最も価値の高い顧客層に最も重くのしかかる」ため見送った。',
        w: ['正解。', '規制の話はない。', '競合の事例には触れていない。', '運用費の話も出ていない。'] },
      { tag: '位置選択', t: ['p7ins'], insertAt: 2,
        sentence: 'The number itself was unremarkable, at twenty-six percent.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"The number itself was unremarkable, at twenty-six percent."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 1,
        e: '挿入文の The number は直前の「表面上の返品率が何かを隠していた」の「その数字」を指し、直後の「内訳に分けると 2 つの異なる事業が現れた」につながる。平凡な総計 → 分解すると別物、という論理が [2] で完成する。',
        w: ['[1] の前後は業界一般の話で、Halloway 固有の数字はまだ出ていない。',
            '正解。',
            '[3] の前後は対応策の話で、数値の提示は遅すぎる。',
            '[4] の前後は成果の数字で、前提の提示にはならない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does the final paragraph suggest?',
        c: ['Averages can conceal distinct groups within the data.', 'Clothing retail differs from other sectors.',
            'Return rates should not be published.', 'Customer surveys are more reliable than transaction data.'],
        a: 0,
        e: '「平均は、実在しない集団を描写することがある」という結びが根拠。',
        w: ['正解。', '「衣料の話ではない」と明言している。', '公表の是非には触れていない。', '調査手法の比較はしていない。'] },
    ],
  }),
];
