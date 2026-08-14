/* =============================================================
   予想模試 Vol.1 — Part 7 単一文書 前半（No.147–164）
   ============================================================= */

const sp = (o) => ({
  id: `v1-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    id: `v1q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
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
      title: 'Wetherby House — Lift Maintenance',
      body: [
        'The passenger lift will be out of service on Tuesday 6 June between 07:00 and 15:00 for its annual safety inspection.',
        'During this period, the service lift at the rear of the building will be available to all residents. Please note that it opens with the same fob but travels only to floors 1 to 6; residents on floors 7 and 8 will need to use the stairs for the final flight.',
        'If you have a delivery scheduled for Tuesday, we suggest asking the driver to arrive before 07:00 or after 15:00. Reception cannot accept large items on residents\' behalf.',
        'The inspection is a legal requirement and cannot be postponed. We apologise for the inconvenience.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What is indicated about the service lift?',
        c: ['It requires a different key.', 'It will also be inspected on Tuesday.',
            'It is reserved for deliveries only.', 'It does not reach the top two floors.'],
        a: 3,
        e: '「1 階から 6 階までしか行かず、7・8 階の住民は最後の 1 フロアを階段で」とある。',
        w: ['同じフォブで開くと明記。', '点検されるのは乗用エレベーター。', '全住民が利用できる。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What are residents advised to do about deliveries?',
        c: ['Arrange them outside the maintenance window', 'Leave them with reception',
            'Cancel them for that day', 'Collect them from the rear entrance'],
        a: 0,
        e: '「7 時前か 15 時以降に来てもらうよう配達業者に頼むとよい」＝作業時間帯を避ける。',
        w: ['正解。', '受付は大型品を預かれないと明記。', '取り消しは勧めていない。', '裏口での受け取りには触れていない。'] },
    ],
  }),

  /* ── 149–150 テキストメッセージ ───────────────────── */
  sp({
    n: [149, 150], lv: 5, t: ['p7intent'],
    docs: [{
      label: 'Text message chain',
      body: [{ t: 'chat', lines: [
        { who: 'Tomás Bergström', time: '08:12', text: 'Morning — are you already at the depot?' },
        { who: 'Aisha Rahman', time: '08:14', text: 'Just pulled in. The van is loaded but the tail lift is stuck halfway down.' },
        { who: 'Tomás Bergström', time: '08:15', text: 'Can you get the pallets off without it?' },
        { who: 'Aisha Rahman', time: '08:17', text: 'Not the two heavy ones. The site has no forklift either.' },
        { who: 'Tomás Bergström', time: '08:19', text: 'Swap for the 14-tonner. It has a working lift and it is sitting idle until noon.' },
        { who: 'Aisha Rahman', time: '08:20', text: 'That is what I was hoping to hear.' },
        { who: 'Tomás Bergström', time: '08:21', text: 'Tell Marek I authorised it.' },
      ] }],
    }],
    q: [
      { tag: '意図', t: ['p7intent'],
        s: 'At 08:20, what does Ms. Rahman most likely mean when she writes, "That is what I was hoping to hear"?',
        c: ['She agrees with the solution being offered.', 'She is surprised that the lift can be repaired.',
            'She had already requested the other vehicle.', 'She wants confirmation in writing.'],
        a: 0,
        e: '直前でトマスが「14 トン車に積み替えろ」と解決策を示している。それに賛意を表す返し。引用の 1 つ前の発言が根拠。',
        w: ['正解。', '修理の話は出ていない。', '既に要請していたとは述べていない。', '書面での確認は求めていない。'] },
      { tag: '詳細', s: 'What is the problem with the original van?',
        c: ['It was loaded with the wrong pallets.', 'It cannot access the site.',
            'It is scheduled for another job.', 'Its lifting mechanism is not working.'],
        a: 3,
        e: '「テールリフトが途中で止まって動かない」が問題。',
        w: ['積み荷は正しく積まれている。', '進入の可否には触れていない。', '正午まで空いているのは 14 トン車。', '正解。'] },
    ],
  }),

  /* ── 151–152 広告 ─────────────────────────────────── */
  sp({
    n: [151, 152], lv: 4,
    docs: [{
      label: 'Advertisement',
      title: 'Sablefield Storage — Now Taking Bookings at the New Ardmore Site',
      body: [
        'Twelve thousand square metres of clean, dry, alarmed storage, four minutes from junction 11.',
        { t: 'list', items: [
          'Units from 2 m² to 250 m², with no minimum term after the first month',
          'Twenty-four-hour access at no extra charge — most operators restrict evening entry',
          'Free use of trolleys and a loading bay that takes vehicles up to 7.5 tonnes',
          'Climate-controlled units available for documents and instruments',
        ] },
        'Reserve online and your first four weeks are half price. The offer applies to units of 10 m² and above, and cannot be combined with the business rate.',
        'Not sure what size you need? Send us a photograph of what you are storing and we will tell you. We would rather quote you the right unit than the larger one.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What is offered at no additional cost?',
        c: ['Use of a delivery van', 'Climate control', 'Access at any hour', 'A business account'],
        a: 2,
        e: '「24 時間アクセスが追加料金なし。多くの事業者は夜間の入館を制限している」が根拠。',
        w: ['バンの貸し出しはない。', '空調ユニットは「利用可能」とあるだけで無料とは述べていない。', '正解。', '法人料金は割引と併用不可としか述べていない。'] },
      { tag: 'NOT', t: ['p7not'], s: 'What is NOT stated about the introductory offer?',
        c: ['It is limited to new business customers.', 'It is available for online reservations.',
            'It applies to units of a certain size or larger.', 'It covers the first four weeks.'],
        a: 0,
        e: '「法人料金とは併用できない」とあるだけで、法人の新規顧客限定とは述べていない。むしろ法人料金の利用者は対象外になる。',
        w: ['正解。', 'Reserve online とある。', '10 m² 以上が対象と明記。', 'first four weeks are half price とある。'] },
    ],
  }),

  /* ── 153–155 メール ───────────────────────────────── */
  sp({
    n: [153, 154, 155], lv: 5,
    docs: [{
      label: 'E-mail',
      head: 'To: r.okonjo@fenwickmills.com\nFrom: s.delacroix@fenwickmills.com\nDate: 21 February\nSubject: Dye lot variance — Batch 4471',
      body: [
        'Rita,',
        'I have finished checking Batch 4471 against the master swatch and I want to flag something before it goes to cutting.',
        'Sixteen of the twenty rolls are within tolerance. Four are not — all four are visibly warmer than the swatch under daylight, though they look acceptable under the shop lights. The four are consecutive roll numbers, which points at a single dye run rather than a random fault.',
        'I have set those four aside. My recommendation is that we use them for the lining, where the colour is not seen next to the master, and order a replacement four rolls for the shell. That keeps the delivery date and wastes nothing.',
        'The alternative is to send all twenty back and wait eleven days, which I do not think the schedule can absorb.',
        'I have not told the dye house yet. I would rather we agreed our position first, because once I raise it they will ask what we want them to do about it.',
        'Sofia',
      ],
    }],
    q: [
      { tag: '概要', s: 'Why did Ms. Delacroix write the e-mail?',
        c: ['To raise a quality issue before production continues', 'To request approval for additional staff',
            'To report a delay at the dye house', 'To confirm that a batch has been approved'],
        a: 0,
        e: '「裁断に回る前に指摘しておきたい」と冒頭で述べており、生産継続前の品質問題の提起。',
        w: ['正解。', '人員の話は出ていない。', '遅延の報告ではない。', '全数承認ではなく 4 本に問題がある。'] },
      { tag: '詳細', s: 'What does Ms. Delacroix say about the four rolls?',
        c: ['They are damaged along one edge.', 'They are a different weight from the swatch.',
            'They were delivered later than the others.', 'They came from the same dyeing run.'],
        a: 3,
        e: '「4 本は連番で、単一の染色ロットを示唆する」とある。ランダムな不具合ではない。',
        w: ['損傷ではなく色味の差。', '重量ではなく色。', '納期の差には触れていない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does Ms. Delacroix imply about contacting the dye house?',
        c: ['She has already sent them a complaint.', 'She wants to decide on a course of action first.',
            'She believes they will refuse to replace the rolls.', 'She thinks Rita should contact them instead.'],
        a: 1,
        e: '「まだ伝えていない。先にこちらの立場を決めたい。切り出せば向こうはどうしてほしいのか聞いてくるから」が根拠。',
        w: ['まだ伝えていないと明記。', '正解。', '拒否を予想しているとは述べていない。', '誰が連絡するかは述べていない。'] },
    ],
  }),

  /* ── 156–158 記事 ─────────────────────────────────── */
  sp({
    n: [156, 157, 158], lv: 5,
    docs: [{
      label: 'Article',
      title: 'The Quiet Return of the Repair Shop',
      head: 'By Nadia Farhi',
      body: [
        'Ten years ago there were three shops on Barrow Street that would fix a kettle. By 2019 there were none. This spring, two have opened within four hundred metres of each other.',
        'Neither owner describes the business in nostalgic terms. "People assume we are here because of sustainability," says Owen Blythe, who opened Barrow Electrical Repairs in March. "That is part of it. But the honest reason is that appliances got expensive faster than repair labour did."',
        'Mr. Blythe charges a flat forty pounds for diagnosis, refunded against the repair. He says roughly a fifth of the items brought in are not worth fixing, and that he tells customers so.',
        'The second shop, Halcyon Fix, takes a different approach: it runs classes. For twenty-five pounds, customers spend two hours learning to repair their own item under supervision. Owner Priti Anand says the classes are not the main revenue stream but bring in people who then return with harder jobs.',
        'Both owners point to the same difficulty — parts. Manufacturers increasingly supply components only to authorised service centres. "I can fix almost anything," Ms. Anand says, "if I am allowed to buy the part."',
      ],
    }],
    q: [
      { tag: '詳細', s: 'According to Mr. Blythe, what is the main reason repair shops are returning?',
        c: ['Growing environmental awareness', 'The rising cost of new appliances relative to labour',
            'Government subsidies for small businesses', 'A shortage of new products in shops'],
        a: 1,
        e: '「正直な理由は、家電の値上がりが修理の人件費より速かったこと」と本人が述べている。',
        w: ['持続可能性は「一因ではある」と限定している。', '正解。', '補助金の話はない。', '品不足には触れていない。'] },
      { tag: '詳細', s: 'What is stated about Halcyon Fix?',
        c: ['It teaches customers to carry out repairs themselves.', 'It earns most of its income from classes.',
            'It repairs only small appliances.', 'It shares premises with another shop.'],
        a: 0,
        e: '「25 ポンドで 2 時間、指導のもと自分で修理を学ぶ」とある。',
        w: ['正解。', '「主な収入源ではない」と明記。', '扱う品目の限定は述べていない。', '400 メートル離れており同居ではない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What difficulty do both owners identify?',
        c: ['Finding qualified staff', 'Obtaining replacement components',
            'Attracting younger customers', 'Meeting new safety regulations'],
        a: 1,
        e: '「両者が同じ困難を挙げる — 部品だ」「部品さえ買えれば直せる」が根拠。',
        w: ['人材の話は出ていない。', '正解。', '客層の話はない。', '規制には触れていない。'] },
    ],
  }),

  /* ── 159–160 フォーム ─────────────────────────────── */
  sp({
    n: [159, 160], lv: 4,
    docs: [{
      label: 'Form',
      title: 'Ellesmere Conference Centre — Equipment Request',
      body: [
        { t: 'kv', pairs: [
          ['Requested by', 'D. Achebe, Kestrel Analytics'],
          ['Event', 'Client briefing, Room 2B'],
          ['Date', '9 November, 13:00–16:30'],
          ['Submitted', '30 October'],
        ] },
        { t: 'table',
          head: ['Item', 'Quantity', 'Notes'],
          rows: [
            ['Wireless microphone', '2', 'One lapel, one handheld'],
            ['Flip chart with paper', '1', 'Plus four markers'],
            ['Laptop-to-screen adapter', '1', 'USB-C required'],
            ['Water carafes', '6', 'Still only'],
          ] },
        'Centre use only: Requests received fewer than five working days before the event may incur a late-arrangement fee of £45. Items not collected from the AV desk by thirty minutes after the event start time will be treated as no longer required.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What is specified about the adapter?',
        c: ['It must support a particular connector.', 'It will be supplied by the client.',
            'Two are required.', 'It is unavailable on the requested date.'],
        a: 0,
        e: '備考欄に USB-C required とある。特定の端子への対応が条件。',
        w: ['正解。', '会議場が用意する備品。', '数量は 1。', '入手可否は書かれていない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What can be inferred about this request?',
        c: ['It will incur a late-arrangement fee.', 'It was submitted with sufficient notice.',
            'It requires approval from a manager.', 'It duplicates an earlier request.'],
        a: 1,
        e: '提出は 10 月 30 日、開催は 11 月 9 日。間に 10 日あり、5 営業日は確実に確保されているので、遅延手数料の条件（5 営業日未満）に当たらない。',
        w: ['5 営業日以上あるため該当しない。', '正解。', '承認の話は書かれていない。', '重複には触れていない。'] },
    ],
  }),

  /* ── 161–164 記事（文挿入あり）───────────────────── */
  sp({
    n: [161, 162, 163, 164], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Article',
      title: 'Why the Night Bus Now Runs Every Twelve Minutes',
      head: 'Transit Review — Issue 88',
      body: [
        'When Calderport extended its N3 night service in 2022, planners expected the extra buses to be used mainly by hospitality workers finishing shifts after midnight. — [[1]] — The passenger surveys told a different story.',
        'Only about a third of night riders work in bars and restaurants. — [[2]] — The largest single group, at forty-one percent, is made up of shift workers at the two distribution centres on the eastern edge of the city, whose shifts change at 02:00 and 06:00.',
        'That finding changed the timetable. The original plan ran buses at a steady twenty-minute interval all night. — [[3]] — The revised schedule concentrates services either side of the two shift changes, dropping to thirty minutes in the quiet hours between.',
        'Passenger numbers rose thirty-one percent in the first year of the revised timetable, against four percent in the year before it. — [[4]] — The council has since applied the same method to the N7, with a review due in autumn.',
        'Not every outcome has been positive. Residents along Calder Road have complained about the concentration of buses in short bursts, and the council has agreed to trial a quieter vehicle on that section.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What did planners originally assume about night bus users?',
        c: ['That most would be hospitality staff', 'That numbers would fall in winter',
            'That most would travel westward', 'That demand would be evenly spread'],
        a: 0,
        e: '「深夜勤務明けの飲食業従事者が主な利用者になると見込んでいた」が根拠。',
        w: ['正解。', '季節の話は出ていない。', '方向の話はない。', '均等な需要は計画上の前提だが、想定した利用者層の話ではない。'] },
      { tag: '詳細', s: 'How was the timetable changed?',
        c: ['Buses run only during shift changes.', 'The route was extended eastward.',
            'Service was concentrated around two times of night.', 'The interval was fixed at twenty minutes.'],
        a: 2,
        e: '「2 回の交代時刻の前後に便を集中させ、その間の閑散時間帯は 30 分間隔に落とす」とある。',
        w: ['閑散時間帯も 30 分間隔で運行している。', '路線延長の話はない。', '正解。', '20 分間隔は改定前の設定。'] },
      { tag: '位置選択', t: ['p7ins'], insertAt: 3,
        sentence: 'That assumption produced a service that was half empty at one o\'clock and overcrowded at two.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"That assumption produced a service that was half empty at one o\'clock and overcrowded at two."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 2,
        e: '挿入文の That assumption は直前の「一晩中 20 分間隔で走らせる当初計画」を指し、直後の「改定後は交代時刻の前後に集中させた」につながる。問題 → 解決の順序が [3] で完成する。',
        w: ['[1] の時点では「その前提」が生む具体的な不都合はまだ語られていない。',
            '[2] の前後は利用者の内訳の話で、時刻表の話ではない。',
            '正解。',
            '[4] の前後は改定後の実績で、問題の指摘を挟むと流れが逆行する。'] },
      { tag: '推測', t: ['p7inf'], s: 'What is suggested about the N7 route?',
        c: ['It has been discontinued.', 'It runs only at weekends.',
            'It serves the distribution centres.', 'It is being redesigned using the same approach.'],
        a: 3,
        e: '「議会はその後、同じ手法を N7 にも適用し、秋に検証予定」とある。',
        w: ['廃止の記述はない。', '運行日の限定には触れていない。', '物流拠点を通るのは N3 の話。', '正解。'] },
    ],
  }),
];
