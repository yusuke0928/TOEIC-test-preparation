/* =============================================================
   予想模試 Vol.1 — Part 7 単一文書 前半（No.147–164）
   ============================================================= */

const sp = (o) => ({
  id: `v1-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  /* 設問 id は qid で明示採番する（くじ方式で全設問を新規作成したため、
     通し番号 no からの自動生成ではなく x.qid を必須にした）。 */
  questions: o.q.map((x, i) => ({
    id: x.qid || `v1q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
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
      title: 'Notice to Our Clients',
      body: [
        'Starting next month, Sorley Hair Salon will no longer take reservations over the phone: if you want a set time with one of our stylists, you will need to reserve it on our website instead. The site shows real-time availability for every stylist, so you can pick a convenient time and see exactly who is free, rather than waiting on hold or hoping we call you back before the slot goes to someone else.',
        'If you already have an appointment booked by phone for next month, it will still be honored; the new system applies only to bookings made from next month onward. Walk-ins remain welcome whenever a chair is open, and the front desk is happy to help you set up an online account if you would rather not do it from home.',
        'We are also pleased to say the salon has taken on a fourth stylist this spring, whose focus is color treatments, so more appointment slots are now available across the week than before.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v1q147p', s: 'According to the notice, what will clients need to do starting next month?',
        c: ['Pay a deposit for color treatments', 'Book appointments through an online system',
            'Leave coats and bags in the cloakroom', 'Check in using a tablet at the entrance'],
        a: 1,
        e: '第1段落に、来月から電話での予約は受け付けず、ウェブサイトで予約する必要があると明記されている。',
        w: ['カラー施術の預かり金についての記述はない。', '正解。',
            'コートや荷物をクロークに預けるという記述はない。', '入口のタブレットでチェックインするという記述はない。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v1q148p', s: 'What is suggested about Sorley Hair Salon?',
        c: ['It has recently hired an extra stylist', 'It sells hair products to its clients',
            'It is open later on weekdays than on Saturdays', 'It moved to its current address last year'],
        a: 0,
        e: '第3段落に、この春に4人目のスタイリストを迎えたとあり、最近スタイリストが増員されたことが分かる。',
        w: ['正解。', '商品の販売については触れていない。',
            '平日と土曜の営業時間の関係については触れていない。', '移転については触れていない。'] },
    ],
  }),

  /* ── 149–150 テキストメッセージ ───────────────────── */
  sp({
    n: [149, 150], lv: 3, t: ['p7intent'],
    docs: [{
      label: 'Text Message Chain',
      body: [
        { t: 'chat', lines: [
          { who: 'Mr. Sallis', time: '2:47 P.M.', text: 'The printer rang about tomorrow\'s page proofs — they\'re going to try your desk phone again around half three.' },
          { who: 'Ms. Rafferty', time: '2:49 P.M.', text: 'I\'m in Redbarrow until four.' },
          { who: 'Mr. Sallis', time: '2:50 P.M.', text: 'No bother, I\'ll ask them to ring after four instead. Before you finish for the day, could you scan the pages from your notebook and email them over? I want to check a quote before we lay out the page.' },
          { who: 'Ms. Rafferty', time: '2:52 P.M.', text: 'Sure — as soon as I\'m back at my desk.' },
        ] },
      ],
    }],
    q: [
      { tag: '意図', t: ['p7intent'], qid: 'v1q149p', s: 'What does Ms. Rafferty mean when she writes, "I\'m in Redbarrow until four"?',
        c: ['She is offering to collect some materials', 'She is explaining why she will miss a call',
            'She is raising a concern about a deadline', 'She is suggesting where to meet a colleague'],
        a: 1,
        e: '直前で Mr. Sallis が、印刷会社が3時半頃に彼女のデスクの電話へもう一度かけると知らせており、Ms. Rafferty は自分が4時までレッドバローにいて外出中であることを伝えて、その電話に出られないことを説明している。直後で Mr. Sallis が「4時以降にかけ直すよう伝える」と応じており、電話の時刻がずれたことがこの読みを裏づける。',
        w: ['資料の受け取りはチェーンのどこにも出てこない（言及なし）。直後に Mr. Sallis は "No bother, I\'ll ask them to ring after four instead." と電話の時刻をずらしており、この発言は電話に出られない事情として受け取られている。', '正解。',
            '締め切りへの言及はない（印刷会社の用件はページ校正についてで、締め切りの変更ではない）。', '待ち合わせの話はチェーンのどこにも出てこない（言及なし）。レッドバローは彼女が4時までいる場所として述べられているだけで、Mr. Sallis の返事も電話の時刻の変更である。'] },
      { tag: '詳細', qid: 'v1q150p', s: 'What does Mr. Sallis ask Ms. Rafferty to do?',
        c: ['Shorten an article she wrote', 'Check the spelling of a name',
            'Speak to one more local resident', 'Send him a copy of her notes'],
        a: 3,
        e: 'Mr. Sallis が、掲載前に引用を確認したいので、取材ノートのページをスキャンしてメールで送ってほしいと頼んでいる。',
        w: ['記事を短くする話はしていない。', '名前のスペル確認は話題になっていない。引用を確認するのは Mr. Sallis 自身の作業であり、彼女への依頼ではない。',
            'もう一人の住民に話を聞くようにとは言っていない。', '正解。'] },
    ],
  }),

  /* ── 151–152 広告 ─────────────────────────────────── */
  sp({
    n: [151, 152], lv: 3, t: ['p7not'],
    docs: [{
      label: 'Advertisement',
      title: 'Sable & Rourke Garden Design',
      head: 'Family-Run, Fully Insured',
      body: [
        'From compact courtyard refreshes to full replanting schemes, Sable & Rourke has been designing and maintaining gardens for local homeowners for more than a decade. Our crew are fully insured, and we are happy to give a free, no-obligation quote before any work begins.',
        { t: 'list', items: [
          'Automatic watering systems, planned and fitted',
          'Felling of unwanted trees, plus crown reduction',
          'Bedding displays changed with the seasons',
          'Patio and pathway cleaning',
        ] },
        'Ask about our year-round maintenance programme: sign up and pay for the full twelve months in advance, and we will take fifteen percent off the total price. Regular visits keep hedges trimmed, borders neat, and paths swept clear all year long.',
        'Call us on 01632 960482, or drop by our yard to talk through your garden.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v1q151p', s: 'According to the advertisement, how can customers receive a discount?',
        c: ['By booking during the autumn season', 'By referring a friend to the company',
            'By paying for the full year upfront', 'By mentioning the advertisement when booking'],
        a: 2,
        e: '広告に、年間維持プログラムに申し込み12か月分を前払いすると、総額から15%引きになるとある。',
        w: ['秋の時期に予約するという条件は書かれていない。', '友人紹介の特典については書かれていない。',
            '正解。', '広告を見たと伝えるという条件は書かれていない。'] },
      { tag: 'NOT', t: ['p7not'], qid: 'v1q152p', s: 'What service is NOT mentioned in the advertisement?',
        c: ['Lawn installation', 'Irrigation system setup', 'Tree removal', 'Seasonal planting'],
        a: 0,
        e: '広告には自動散水システムの設置（irrigation の言い換え）・不要な樹木の伐採（tree removal の言い換え）・季節ごとの花壇の入れ替え（seasonal planting の言い換え）の3つは記載があるが、芝生の新設については触れられていない。',
        w: ['正解。広告のどこにも記載がない。', '「Automatic watering systems, planned and fitted」として記載がある（自動散水＝irrigation system）。',
            '「Felling of unwanted trees, plus crown reduction」として記載がある（伐採＝tree removal）。', '「Bedding displays changed with the seasons」として記載がある（季節ごとの花壇替え＝seasonal planting）。'] },
    ],
  }),

  /* ── 153–155 Eメール ──────────────────────────────── */
  sp({
    n: [153, 154, 155], lv: 4,
    docs: [{
      label: 'E-mail',
      body: [
        { t: 'kv', pairs: [
          ['From', 'Marianne Rowsell <m.rowsell@stowellvehicleleasing.co.uk>'],
          ['To', 'Dean Sutter <d.sutter@stainbycouriers.co.uk>'],
          ['Date', '14 March'],
          ['Subject', 'Account ref. SVL-2207'],
        ] },
        'Dear Mr. Sutter,',
        'Your lease on the long-wheelbase van comes to an end on 30 April, so we\'ll need to get it back from you. Our collection team can come to you, or you\'re welcome to drop the van off at our depot — whichever is easier for you.',
        'Before the handover, please look over the short handover notes we\'ve attached. They cover the condition checks our inspector will carry out, and they remind you to clear the parcel shelving from the load area and take down any magnetic door signs before we collect the van.',
        'Once you\'ve had a look, let us know your preferred collection date and we\'ll arrange a time with our driver. Do get in touch if anything is unclear.',
      ],
      sig: 'Kind regards,\nMarianne Rowsell\nFleet Returns, Stowell Vehicle Leasing',
    }],
    q: [
      { tag: '概要', qid: 'v1q153p', s: 'What is the purpose of the e-mail?',
        c: ['To arrange the return of a leased vehicle', 'To explain a change in monthly lease charges',
            'To offer a free course on safe driving', 'To announce a new breakdown assistance number'],
        a: 0,
        e: '冒頭で、リース期間が4月30日に満了するため車両を回収する必要がある、と述べている。',
        w: ['正解。', '月々のリース料金の変更については触れていない。',
            '安全運転講習の案内はしていない。', '故障時対応の新しい電話番号の案内はしていない。'] },
      { tag: '詳細', qid: 'v1q154p', s: 'What does Ms. Rowsell ask Mr. Sutter to do?',
        c: ['Sign and return a form', 'Pay an outstanding invoice this month',
            'Read a guide attached to the e-mail', 'Send copies of drivers\' licences'],
        a: 2,
        e: '第2段落で、引き渡し前に添付の引き渡し用の手引き（handover notes）に目を通してほしいと頼んでいる。',
        w: ['書式に署名して返送するようには頼んでいない（添付は記入して返す書式ではなく、目を通すための手引きである）。', '未払いの請求書の支払いについては触れていない。',
            '正解。', '運転免許証の写しの提出は求めていない。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v1q155p', s: 'What is suggested about Mr. Sutter\'s company?',
        c: ['It has been a client for several years', 'It uses its vehicles mostly for deliveries',
            'It operates offices in several cities', 'It recently moved to a new address'],
        a: 1,
        e: '宛先のメールアドレスが配送業者（couriers）のドメインであること、また第2段落で荷台のパーセル用の棚を外し、ドアのマグネット式の表示板を取り外すよう求めていることから、この会社の車両が主に配達に使われていることがうかがえる。',
        w: ['契約年数への言及はない。', '正解。',
            '複数都市に拠点があるとは書かれていない。', '住所の変更については触れていない。'] },
    ],
  }),

  /* ── 156–158 記事 ─────────────────────────────────── */
  sp({
    n: [156, 157, 158], lv: 3,
    docs: [{
      label: 'Article',
      head: 'Local Business',
      title: 'Rookery Sound Moves to New Premises',
      body: [
        'Recording studio Rookery Sound has left its long-time premises for a new building on the edge of town. Owner Rowena Selwood says the move came down to cost. "Our landlord at the old place put the price up every year until the sums no longer worked," she said. "Here, what we hand over each month is a good deal smaller."',
        'Musician Roland Rimmer, who has booked studio time at Rookery Sound for years, has already tried out the new space. "The thing that struck me walking in was the light," he said. "The old building barely had any windows, so you\'d lose track of whether it was day or night. Here you can actually see the sky while you work."',
        'Clients without their own equipment can now hire amplifiers, keyboards, and a drum kit from the studio\'s on-site collection for the length of a session, at an extra cost added to the booking.',
        'The move took place last month, and Ms. Selwood says early bookings have been strong.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v1q156p', s: 'According to the article, why did Rookery Sound move to its new building?',
        c: ['To gain space for a second recording room', 'To be closer to a railway station',
            'To pay a lower monthly rent', 'To escape noise from a nearby road'],
        a: 2,
        e: 'オーナーの Selwood 氏が、以前の建物では家主が家賃を毎年上げて採算が合わなくなった、ここなら毎月の支払いがかなり少なくて済む、と述べている。',
        w: ['2つ目の録音ルームのためのスペース確保については触れていない。', '鉄道駅への近さについては触れていない。',
            '正解。', '近くの道路の騒音を避けるためとは述べていない。'] },
      { tag: '詳細', qid: 'v1q157p', s: 'What does Mr. Rimmer say about the new building?',
        c: ['Its loading door makes moving equipment easier', 'Its lounge gives bands a place to rest',
            'Its main room has a high ceiling', 'Its windows let in natural light'],
        a: 3,
        e: 'Rimmer 氏が、新しい建物に入ってまず気づいたのは光だったと述べ、以前の建物には窓がほとんどなく、ここでは作業中に空が見えると話している。',
        w: ['搬入口については触れていない。', 'バンドがくつろげるラウンジについては触れていない。',
            'メインルームの天井の高さについては触れていない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v1q158p', s: 'What is suggested about Rookery Sound?',
        c: ['It was started by a former radio engineer', 'It records music for television programs',
            'It rents out instruments to its clients', 'It offers recording lessons to teenagers'],
        a: 2,
        e: '第3段落に、自前の機材を持たない利用客はアンプやキーボード、ドラムセットをスタジオの備品から借りることができ、予約料金に追加料金がかかるとある。',
        w: ['元ラジオ技師が創業したという記述はない。', 'テレビ番組向けの録音については触れていない。',
            '正解。', '10代向けの録音レッスンについては触れていない。'] },
    ],
  }),

  /* ── 159–160 用紙 ─────────────────────────────────── */
  sp({
    n: [159, 160], lv: 3,
    docs: [{
      label: 'Form',
      head: 'Redcourt Grand Hotel, Boston — Guest Services',
      title: 'Lost and Found Report Form',
      body: [
        { t: 'kv', pairs: [
          ['Guest name', 'Mr. Warrick Stannard'],
          ['Room number', '318'],
          ['Dates of stay', '14–17 May'],
          ['Home address', '14 Rosedale Court, Halifax, Nova Scotia, Canada'],
          ['Item(s) lost', 'A navy blue umbrella with a wooden handle'],
          ['Where you believe you left it', 'In the lobby lounge, on one of the armchairs near the fireplace'],
          ['Preferred way to have it returned', 'By mail to the home address above'],
          ['Contact e-mail', 'w.stannard@fastmail.com'],
        ] },
        'Remarks: I only realized it was missing after I had already left for the airport, so I would rather you mailed it to me than kept it at the front desk.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v1q159p', s: 'According to the form, where does Mr. Stannard believe he left the item?',
        c: ['In the hotel\'s restaurant', 'In the main conference room', 'In the fitness center', 'In the lobby lounge'],
        a: 3,
        e: 'フォームの「置き忘れたと思う場所」欄に、ロビーラウンジの、暖炉近くの肘掛け椅子の上、と記入されている。',
        w: ['レストランについては触れていない。', '会議室については触れていない。',
            'フィットネスセンターについては触れていない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v1q160p', s: 'What is suggested about Mr. Stannard?',
        c: ['He has stayed at the hotel before', 'He checked out a day earlier than planned',
            'He lives in another country', 'He will return to the hotel next month'],
        a: 2,
        e: 'ホテルは見出しにある通り米国ボストンにあるのに対し、「自宅住所」欄はカナダのノバスコシア州ハリファックスになっている。ホテルのある国と自宅の国が異なるため、海外に住んでいることがうかがえる。',
        w: ['以前にも宿泊したことがあるという記述はない。', '予定より1日早くチェックアウトしたという記述はない。',
            '正解。', '来月また戻ってくるという記述はない。'] },
    ],
  }),

  /* ── 161–164 記事（文挿入） ───────────────────────── */
  sp({
    n: [161, 162, 163, 164], lv: 4, t: ['p7ins'],
    docs: [{
      label: 'Article',
      head: 'Manufacturing',
      title: 'Fewer Accidents at Stourford Ironworks',
      body: [
        'Stourford Ironworks has cut its rate of workplace injuries by more than half over the past year, according to figures released this week. The turnaround follows a single change on the casting floor: since the spring, workers have started each shift with a five-minute walk-around of their equipment, checking guards, hoses, and emergency stops before any metal is poured. — [[1]] — It is a small step, but the effect on the plant\'s accident log has been hard to miss.',
        'The site supervisor admits the routine was slow to take hold. "For the first few weeks people forgot, or rushed through it when the pressure was on to start the line," she said. — [[2]] — "It was about half a year before nobody needed reminding any more."',
        'The idea for the change did not come from inside the plant. — [[3]] — It grew out of an assessment of near-miss reports that management had commissioned earlier in the year. — [[4]] — Ms. Saxby\'s report traced most of the near misses to the first hour of a shift, before anyone had spotted a worn hose or a loose guard left from the previous shift, and called that hour the plant\'s biggest blind spot.',
        'With injury rates down and the new checks now routine, Stourford Ironworks says it is scouting sites for a second foundry, its first expansion since opening more than thirty years ago.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v1q161p', s: 'According to the article, what change did Stourford Ironworks make to its safety procedures?',
        c: ['It began checking equipment before each shift', 'It lowered the weight limit for lifting alone',
            'It shortened the time workers spend at furnaces', 'It marked new walkways across the casting floor'],
        a: 0,
        e: '第1段落に、この春から各シフトの開始時に5分間の機械点検（ガード・ホース・非常停止装置の確認）を行うようになった、とある。第3段落の Saxby 氏の報告も、以前のシフトから見落とされたまま残っていた摩耗したホースや緩んだガードがニアミスの多くの原因だったとしており、始業時の点検が新しく始まった変更であることと整合する。',
        w: ['正解。', '一人で持ち上げる重さの上限については触れていない。',
            '炉の前で過ごす時間を短縮したという記述はない。', '鋳造フロアの通路の表示については触れていない。'] },
      { tag: '詳細', qid: 'v1q162p', s: 'According to the site supervisor, how long did it take employees to get used to the new procedure?',
        c: ['About two weeks', 'About a month', 'About three months', 'About six months'],
        a: 3,
        e: '現場責任者の発言に、なかなか定着しなかったが「およそ半年で、誰も念を押さなくてよくなった」（"It was about half a year before nobody needed reminding any more."）とある。',
        w: ['約2週間という記述はない（最初の数週間は忘れていたとあるだけで、そこで定着したわけではない）。', '約1か月という記述はない。', '約3か月という記述はない。', '正解。'] },
      { tag: '位置選択', t: ['p7ins'], insertAt: 4, qid: 'v1q163p',
        sentence: 'The assessment was carried out by an outside safety consultant, Louisa Saxby.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "The assessment was carried out by an outside safety consultant, Louisa Saxby."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 3,
        e: '挿入文は Louisa Saxby をフルネームで初めて導入し、外部の安全コンサルタントだと説明している。この文が意味をなすのは、直前に「ある査定」が話題に上っているが、誰が行ったかがまだ示されていない場合だけである。第3段落の「それは管理側が今年に入って（先に）依頼した、ニアミス報告についての査定から生まれた」（"It grew out of an assessment of near-miss reports that management had commissioned earlier in the year."）がその査定に初めて触れており、挿入文はこれを"The assessment"と定冠詞で受けて実施者を明かす。直後の文は"Ms. Saxby"と姓だけで受けており、フルネームが登場するのはこの挿入文だけである。',
        /* 文挿入の取っ手（2026-09-29 監査で追記）：
           前方の取っ手＝"The assessment" の先行詞は [4] 直前の "an assessment" が初出。
             [1][2] はこの語自体が本文にまだ無く指す先がない。[3] は直後の文が
             "The assessment" のあとに不定冠詞で査定を再導入する逆向きの初出違反で落ちる。
           後方の取っ手＝直後の "Ms. Saxby's report" は挿入文のフルネームに依存する短縮形。
             ただし [1]〜[4] のどの位置も Saxby の文より前にあるため、位置を分けているのは
             前方の取っ手（an assessment の初出位置）だけである。 */
        w: ['この位置の直前までに「査定」はまだ本文のどこにも登場しておらず、"The assessment" の指す先がない。',
            'この位置の直前までも「査定」への言及はまだなく、"The assessment" の指す先がない。',
            'この直後の文でようやく「ある査定」が初めて言及されるため、ここではまだ"The assessment"の指す先がない。',
            '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v1q164p', s: 'What is suggested about Stourford Ironworks?',
        c: ['It plans to open a second production site', 'It has kept its daily output the same',
            'It supplies parts to the car industry', 'It was previously fined for a safety violation'],
        a: 0,
        e: '最終段落に、負傷率が下がり新しい点検が定着したことを受け、Stourford Ironworks は2つ目の鋳造工場の候補地を探しており、これが開業以来初めての拡張だとある。',
        w: ['正解。', '生産量を一定に保っているという記述はない。',
            '自動車業界向けに部品を供給しているという記述はない。', '過去に安全違反で罰金を科されたという記述はない。'] },
    ],
  }),
];
