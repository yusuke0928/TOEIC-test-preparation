/* =============================================================
   予想模試 Vol.4 — Part 7 単一文書 前半（No.147–164）
   語彙難化回。
   ============================================================= */

const sp = (o) => ({
  id: `v4-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。vol4-r3.js の sp() と同じパターン。 */
    id: x.qid || `v4q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
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
      title: 'Thistledown Tower — Elevator Modernisation Notice',
      body: [
        'The east bank of elevators (cars 3 and 4) will be taken out of service from Monday 6 to Friday 17 October for a full modernisation of the control system and cabling, replacing equipment that has been in continuous use since the building opened in 1998.',
        'The west bank (cars 1 and 2) will remain in operation throughout, though tenants on floors 9 and above should expect longer waits during the morning and evening peaks. Building management recommends staggering arrival times where possible and has arranged for the ground-floor café to extend its opening hours to ease congestion in the lobby.',
        'Freight deliveries requiring the service elevator should be scheduled through the building office at least one day in advance during the works, as the service elevator will be shared with the contractor for material transport between 8:00 and 10:00 each morning.',
        'Tenants with concerns about accessibility should contact the building office directly; a temporary stair-climbing chair will be available on request for the duration of the project.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why are cars 3 and 4 being taken out of service?',
        c: ['Their control system and cabling are being replaced.', 'A new tenant on floor nine requested the change.',
            'They are being removed permanently due to low ridership.', 'They failed a recent safety inspection carried out by the city.'],
        a: 0,
        e: '制御系統と配線を全面更新するためと明記されている。',
        w: ['正解。', '新テナントの要望という記述はない。9階以上への影響は待ち時間の文脈で、要望とは無関係。', '恒久的な撤去ではなく、乗車率低下という理由も述べられていない。', '検査不合格の話はない。運休の理由は制御系統と配線の全面更新だと明記されている。'] },
      { tag: '詳細', s: 'What is stated about freight deliveries during the works?',
        c: ['They must be scheduled at least a day in advance.', 'They are suspended entirely for the length of the works.',
            'They must use cars 1 and 2 during peak hours.', 'They will be handled by building staff only, free of charge.'],
        a: 0,
        e: 'サービスエレベーターは午前 8 時〜10 時は業者の資材搬入と共用のため、少なくとも前日までに事務所を通して予約が必要と明記されている。',
        w: ['正解。', '全面停止ではなく、事前予約すれば利用できる。', '共用されるのはサービスエレベーターであり、号機1・2の指定はない。', '建物スタッフ限定や無料という記述はない。'] },
    ],
  }),

  /* ── 149–150 業務連絡（メモ）─────────────────────── */
  sp({
    n: [149, 150], lv: 4,
    docs: [{
      label: 'Memo',
      head: 'TO: Warehouse floor staff\nFROM: Operations\nDATE: 8 May\nSUBJECT: New inventory scanners — rollout delay',
      body: [
        'The new handheld scanners originally due to arrive this week have been delayed at customs and are now not expected until 20 May.',
        "In the meantime, all stock movements must continue to be logged on the paper count sheets, exactly as before. Please do not attempt to use last year's scanners, which were returned to the supplier for parts and no longer hold a working inventory database.",
        "Once the new units arrive, training will be scheduled in small groups so that floor coverage is maintained; nobody will be pulled from a shift without at least two days' notice.",
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why have the scanners been delayed?',
        c: ['They failed a quality test.', 'The wrong model was ordered.',
            'The supplier went out of business.', 'They were held up in customs.'],
        a: 3,
        e: '「税関で足止めされ、5 月 20 日まで届かない見込み」と説明されている。',
        w: ['検査不合格の話はない。', '発注ミスには触れていない。', '廃業の話はない。', '正解。'] },
      { tag: '詳細', s: "Why should staff not use last year's scanners?",
        c: ['They were not returned to the supplier at all.', 'They belong to a different department in the company.',
            'They require a software update from the manufacturer.', 'They no longer hold a working inventory database.'],
        a: 3,
        e: '「部品取り用に業者へ返却され、稼働する在庫データベースをもう保持していない」と明記されている。',
        w: ['本文は旧スキャナーについて "which were returned to the supplier for parts" と述べており、業者へ返却されている。返却されていないとするこの記述は本文と正面から矛盾する。', '部署の違いには触れていない。旧スキャナーは業者へ返却済みで、社内のどこかにあるわけでもない。', 'ソフト更新ではなく、稼働するデータベースの有無が理由。', '正解。'] },
    ],
  }),

  /* ── 151–152 広告 ─────────────────────────────────── */
  sp({
    n: [151, 152], lv: 3,
    docs: [{
      label: 'Advertisement',
      title: 'Portside Walking Tours',
      body: [
        "Portside Walking Tours leads small groups through Quayfield, the city's former warehouse and harbour district, a conservation area since 2009. Guides explain how each building's brickwork and cast-iron pillars reveal what it once stored.",
        "Public walks run Tuesday to Saturday at ten and two o'clock, starting from the clock tower on Anchor Lane, and last roughly ninety minutes over cobbled streets; comfortable shoes are advised. Walks proceed in light rain but are cancelled in strong wind, when a full refund is issued.",
        "Groups of eight or more may arrange a private walk on a day and at a time of their choosing, focused on a single trade such as shipbuilding. As with public walks, we ask for at least twenty-four hours' notice.",
        'To reserve a place, e-mail tours@portsidewalks.example with your preferred date and the number of walkers.',
      ],
    }],
    q: [
      { tag: 'NOT', qid: 'v4q151r', t: ['p7not'],
        s: 'What is NOT mentioned about the walking tours?',
        c: [
          'Guides on the tours explain what each building once stored.',
          'Tours cover a district that was designated a conservation area in 2019.',
          'The tours run for about ninety minutes across cobbled streets in Quayfield.',
          'Places on the tours are reserved by e-mailing the company in advance.',
        ], a: 1,
        e: '本文は第1段落で Quayfield を "a conservation area since 2009" と述べており、保存地区になったのは2009年である。2019年に指定されたとする記述はこれと矛盾する。',
        w: [
          "第1段落 \"Guides explain how each building's brickwork and cast-iron pillars reveal what it once stored\" と一致する。",
          "正解。第1段落は Quayfield について \"the city's former warehouse and harbour district, a conservation area since 2009\" と述べており、保存地区になったのは2009年である。2019年に指定されたとするこの記述は本文と矛盾する。",
          '第2段落 "last roughly ninety minutes over cobbled streets" および第1段落の Quayfield の説明と一致する。',
          "第4段落 \"e-mail tours@portsidewalks.example with your preferred date\" と一致する。",
        ],
      },
      { tag: '推測', qid: 'v4q152r', t: ['p7inf'],
        s: 'What is suggested about private walks arranged for groups?',
        c: [
          'They require a minimum of twelve participants to book.',
          "They don't require any booking before the day of the walk.",
          'They take place in the evening rather than during the day.',
          'They are available on days outside the public schedule.',
        ], a: 3,
        e: '公開ツアーは火〜土のみだが、団体向けの貸切は「都合の良い日」に組めるとあり、公開ツアーの無い曜日にも貸切が組めると読める。',
        w: [
          '第3段落は "Groups of eight or more" とあり、必要人数は8人以上で、12人という記述は本文と矛盾する。',
          "矛盾。第3段落は貸切にも公開ツアーと同じ \"we ask for at least twenty-four hours' notice\" とあり、少なくとも24時間前までの予約が必要である。当日まで予約が不要だとするこの記述は本文と正面から矛盾する。",
          '第3段落は "on a day and at a time of their choosing" とあり、時間帯を夕方に限定する記述は本文と矛盾する。',
          '正解。第2段落の公開ツアーは火曜〜土曜のみで、第3段落の貸切は「都合の良い日」に組めるとあるので、公開ツアーの無い曜日にも組めると推測できる。',
        ],
      },
    ],
  }),

  /* ── 153–154 テキストメッセージ ───────────────────── */
  sp({
    n: [153, 154], lv: 4,
    docs: [{
      label: 'Text message chain',
      body: [{ t: 'chat', lines: [
        { who: 'Rosalind Achebe', time: '14:02', text: "The catering van says they're stuck behind an accident on the ring road." },
        { who: 'Tomasz Wysocki', time: '14:04', text: 'How stuck? We start seating at three.' },
        { who: 'Rosalind Achebe', time: '14:05', text: 'Driver says forty minutes minimum, could be more.' },
        { who: 'Tomasz Wysocki', time: '14:06', text: 'Then we lose the warm starters either way.' },
        { who: 'Rosalind Achebe', time: '14:08', text: 'Can we swap to the cold menu option they offered as a backup?' },
        { who: 'Tomasz Wysocki', time: '14:09', text: 'Yes — call them now and tell them to switch before they start heating anything.' },
        { who: 'Rosalind Achebe', time: '14:10', text: 'On it.' },
      ] }],
    }],
    q: [
      { tag: '詳細', s: 'What problem is described in the messages?',
        c: ['A caterer has been delayed by a traffic accident.', 'A caterer has cancelled the order for this afternoon.',
            'A menu item has gone out of stock at short notice.', 'A payment has not been processed by the bank.'],
        a: 0,
        e: '「環状道路で事故があり、その渋滞に巻き込まれている」というケータリング業者の遅延について。',
        w: ['正解。', '業者は取り消していない。「事故で足止めされている」と伝えてきただけで、その後も「加熱を始める前に冷製メニューへ切り替えるよう伝えて」と、配達される前提で話が進んでいる。', 'メニューの在庫切れには触れていない。', '支払い未処理の話は出ていない。'] },
      { tag: '詳細', qid: 'v4q154r', s: 'What does Mr. Wysocki ask Ms. Achebe to do?',
        c: ['Ask the caterer to switch to the cold menu.', 'Find a replacement caterer for the entire event.',
            'Delay the start of seating until the caterer arrives.', 'Tell the caterer the order is no longer needed.'],
        a: 0,
        e: '「今すぐ電話して、加熱を始める前に冷製メニューに切り替えるよう伝えて」と依頼している。',
        w: ['正解。', '代替業者の手配は依頼していない。', '開始時刻の変更は述べていない。', '切り替え先の "the cold menu option they offered as a backup" は、業者が予備として提示していた選択肢であり、依頼はそのメニューへの変更である。車は配達を続けている前提で話しており、注文自体を不要と伝える内容とは相容れない。'] },
    ],
  }),

  /* ── 155–157 メール ───────────────────────────────── */
  sp({
    n: [155, 156, 157], lv: 4,
    docs: [{
      label: 'E-mail',
      head: 'To: Marina Sorbye, Finance Director, Quenby Freight Ltd.\nFrom: Perry Dodson, Implementation Manager, Callowhill Payroll Solutions\nDate: 30 October\nSubject: Quenby Freight – Payroll Services',
      body: [
        'Dear Ms. Sorbye,',
        "I am writing to set out the plan for moving Quenby Freight's payroll processing onto Callowhill's new platform. As you know, your warehouse staff are paid weekly and your head-office staff are paid monthly, and both groups will move onto the new platform together once the steps below are complete.",
        "We will begin by running the new system alongside your current one for four weeks, from Monday 2 November to Sunday 29 November, so that we can compare a full cycle of weekly and monthly figures before anyone relies on the new system alone. Pay records from the last three tax years will also be transferred into the new system's archive, where they will remain visible but cannot be edited.",
        'Once the parallel run ends, we will send you a comparison report; please name a member of your team who can check it and let us know of any discrepancy by Friday 4 December. Please also confirm, before the parallel run begins, that the list of employee bank details we hold is accurate; a copy is attached for your review.',
        'A short session on the new system will be held for your payroll administrators on 10 November, during the parallel run; details will follow separately.',
        'If no discrepancies remain outstanding, we will complete the cutover over the weekend of 5–6 December, and all pay runs will be generated through the new system from Monday 7 December. Our support line will remain available for the first three months to answer any questions that arise.',
        'Please let me know if any of the above dates cause difficulty.',
      ],
      sig: 'Regards,\nPerry Dodson\nImplementation Manager, Callowhill Payroll Solutions',
    }],
    q: [
      { tag: '概要', qid: 'v4q155r',
        s: 'Why did Mr. Dodson write the e-mail?',
        c: [
          'To ask Ms. Sorbye when her team is free for training.',
          'To ask permission to edit the payroll records stored in the archive.',
          "To outline the process for moving the company's payroll onto the new system.",
          "To notify Ms. Sorbye that the cutover will now take place in January.",
        ], a: 2,
        e: "第1段落の \"I am writing to set out the plan for moving Quenby Freight's payroll processing onto Callowhill's new platform\" のとおり、給与処理の新システムへの移行計画を伝える内容である。",
        w: [
          '第4段落の研修は "will be held for your payroll administrators on 10 November" とあり、日程はすでに指定されている。都合を尋ねているとするこの記述は本文と矛盾する。最終段落の "Please let me know if any of the above dates cause difficulty" は、すでに示した日程に支障があれば連絡してほしいという依頼であり、いつ空いているかを尋ねる内容ではない。',
          '第2段落は過去3税年度分の記録について "they will remain visible but cannot be edited" と述べており、編集の許可を求めるという記述は本文と矛盾する。',
          "正解。第1段落の \"I am writing to set out the plan for moving Quenby Freight's payroll processing onto Callowhill's new platform\" のとおり、新システムへの移行の進め方を伝える内容である。",
          '第5段落は "If no discrepancies remain outstanding, we will complete the cutover over the weekend of 5–6 December" と本番切替を12月5–6日の週末に予定しており、1月への変更を知らせる記述は無い。延期を知らせるためのメールだとするこの記述は本文と矛盾する。',
        ],
      },
      { tag: '推測', qid: 'v4q156r', t: ['p7inf'],
        s: 'What is suggested about the parallel run of the two payroll systems?',
        c: [
          'It will not cover the pay of the weekly-paid warehouse staff.',
          'It will begin on the same weekend as the cutover.',
          "It will end with a report the client's staff check.",
          'It will run until the middle of December.',
        ], a: 2,
        e: '第3段落は比較報告について "Once the parallel run ends, we will send you a comparison report; please name a member of your team who can check it" と述べており、並行稼働の結果は Quenby Freight 側の担当者が確認すると読める。',
        w: [
          '矛盾。第2段落は並行稼働について "so that we can compare a full cycle of weekly and monthly figures" と述べており、週給制の倉庫スタッフの給与も並行稼働の対象に含まれる。給与を扱わないとするこの記述は本文と正面から矛盾する。',
          '矛盾。第2段落は並行稼働の開始を "from Monday 2 November" という月曜日と定めており、週末ではない。第5段落の本番切替の週末（"the weekend of 5–6 December"）と同じ週末に始まるという記述は本文と矛盾する。',
          '正解。第3段落の "we will send you a comparison report; please name a member of your team who can check it" のとおり、比較結果は Quenby Freight 側の担当者が確認する。',
          '矛盾。第2段落は並行稼働の期間を "from Monday 2 November to Sunday 29 November" と定めており、12月半ばまで続くという記述は本文と正面から矛盾する。',
        ],
      },
      { tag: '詳細', qid: 'v4q157r',
        s: 'What does Mr. Dodson ask Ms. Sorbye to do?',
        c: [
          'Arrange a training session for the payroll administrators.',
          'Verify the accuracy of the attached employee bank details.',
          'Choose which staff group moves to the new platform first.',
          'Check whether an earlier cutover date is possible.',
        ], a: 1,
        e: '第3段落の "Please also confirm, before the parallel run begins, that the list of employee bank details we hold is accurate" とあり、Callowhill 側が保有する名簿の正確性の確認を求めている。',
        w: [
          '第4段落の研修は "A short session on the new system will be held for your payroll administrators on 10 November, during the parallel run" とあり、研修はすでに Callowhill 側が設定して開催するものであって、Ms. Sorbye に手配を依頼する記述ではない。',
          '正解。第3段落の "Please also confirm, before the parallel run begins, that the list of employee bank details we hold is accurate" とあり、添付された名簿（"a copy is attached for your review"）の正確性の確認を求めている。',
          '第1段落は "both groups will move onto the new platform together" と述べており、どちらのグループを先に移すか選ばせるという記述は本文と矛盾する。',
          '第5段落は本番切替を "we will complete the cutover over the weekend of 5–6 December" としており、それは4週間の並行稼働（第2段落、11月2日〜29日）と食い違いの確認（第3段落、12月4日まで）を経たあとで初めて行うとしている。切替を前倒しできないか検討してほしいという記述は本文のどこにも無く、日程の組み立て自体がそれを許していない。',
        ],
      },
    ],
  }),

  /* ── 158–160 記事 ─────────────────────────────────── */
  sp({
    n: [158, 159, 160], lv: 3,
    docs: [{
      label: 'Article',
      title: 'Dunmere Smokehouse to Open Second Site',
      head: 'By Dara Quince',
      body: [
        'Dunmere Smokehouse has cured herring, mackerel and salmon over oak chippings since Peter Pallister lit its first kiln in 1958. His granddaughter, Carys Pallister, now runs the business, and this spring she will open a second smokehouse thirty miles away in the harbour town of Portrhyn.',
        '"We\'ve had more orders from restaurants along that coast than our current ovens can fill," Ms. Pallister said. "Rather than expand the building here in Dunmere, it made sense to build where the extra demand actually is."',
        "The new building will stand a short walk from Portrhyn's harbour, where the day boats land their catch each morning; the site will also include cold storage and a small retail counter for visitors.",
        "For its first six months, the Portrhyn site will be overseen by Gwen Neave, who has smoked fish at Dunmere for eleven years and will train the new staff in the family's brine and wood recipe. Not every product will move with her: the slow-cured salmon, which needs a drying room larger than the new building has room for, will continue to be made only in Dunmere and delivered to Portrhyn twice a week.",
        'The Portrhyn site will remain under the same family ownership as Dunmere; no outside company is involved. Fish for both sites will continue to come from the same day boats that have supplied the Pallister family for three generations, rather than from imported stock.',
      ],
    }],
    q: [
      { tag: '概要', qid: 'v4q158r',
        s: 'What is the article mainly about?',
        c: [
          'A family business\'s plan to open a second smokehouse funded by a bank loan.',
          'A family business\'s plan to open a second smokehouse with a newly created recipe.',
          'A family business\'s plan to open a second smokehouse as a joint venture with another company.',
          'A family business\'s plan to open a second smokehouse to meet demand from restaurants there.',
        ], a: 3,
        e: '第1段落に "this spring she will open a second smokehouse thirty miles away in the harbour town of Portrhyn" とあり、家族経営の燻製所が2か所目を開く計画が主題である。第2段落の "We\'ve had more orders from restaurants along that coast than our current ovens can fill" から、その目的が沿岸の需要に応えることだと分かる。',
        w: [
          '資金調達の方法についての記述は本文のどこにも無く、銀行融資で賄うという内容は本文から支持されない。',
          '矛盾。第4段落は "will train the new staff in the family\'s brine and wood recipe" と述べており、Portrhyn の新拠点でも家族に伝わる既存の製法が使われる。新しく考案した製法を使うとするこの記述は本文と正面から矛盾する。',
          '矛盾。第5段落は "The Portrhyn site will remain under the same family ownership as Dunmere; no outside company is involved" と述べており、他社との合弁だとするこの記述は本文と正面から矛盾する。',
          '正解。第2段落の "We\'ve had more orders from restaurants along that coast than our current ovens can fill" のとおり、沿岸の需要に応えるために新拠点を開く。',
        ],
      },
      { tag: '詳細', qid: 'v4q159r',
        s: 'Why will the slow-cured salmon continue to be made only in Dunmere?',
        c: [
          'Ms. Neave has not yet learned its recipe.',
          'Customers near Portrhyn have not requested it.',
          'The new building lacks space for the drying process.',
          'The family chose to enlarge the Dunmere premises for it.',
        ], a: 2,
        e: '第4段落に "the slow-cured salmon, which needs a drying room larger than the new building has room for" とあり、新拠点に十分な乾燥スペースが無いことが理由である。',
        w: [
          '本文が挙げる理由は乾燥室の広さ（"which needs a drying room larger than the new building has room for"）であり、Ms. Neave は Dunmere で11年燻製に携わり新スタッフに製法を教える立場とされている。レシピ未習得を理由とする記述は本文に無く、本文の理由とも合わない。',
          '第4段落は "will continue to be made only in Dunmere and delivered to Portrhyn twice a week" と述べており、週2回 Portrhyn へ届けられている以上、現地の需要が無いという記述は本文と矛盾する。',
          '正解。第4段落のとおり、新拠点には十分な乾燥スペースが無いことが理由である。',
          '矛盾。第2段落で Ms. Pallister は "Rather than expand the building here in Dunmere, it made sense to build where the extra demand actually is" と述べており、実際には Dunmere の既存拠点を拡張せず Portrhyn に新拠点を建てる判断をした。Dunmere の拠点を拡張したとするこの記述は本文と正面から矛盾する。',
        ],
      },
      { tag: '推測', qid: 'v4q160r', t: ['p7inf'],
        s: 'What is suggested about the fish used at the Portrhyn smokehouse?',
        c: [
          'It will be smoked using electric kilns instead of oak chippings.',
          'It will be prepared at first without supervision from Dunmere staff.',
          'It will be caught using different methods from the fish used in Dunmere.',
          'It will be landed at a harbour within walking distance of the smokehouse.',
        ], a: 3,
        e: '第3段落に "a short walk from Portrhyn\'s harbour, where the day boats land their catch each morning" とあり、Portrhyn の燻製所は水揚げ地のすぐ近くにあると分かる。',
        w: [
          '第4段落は "will train the new staff in the family\'s brine and wood recipe" と述べており、木材を使う伝統的な製法が引き継がれる。電気式の燻製機に替わるという記述は本文と矛盾する。',
          '矛盾。第4段落は "For its first six months, the Portrhyn site will be overseen by Gwen Neave, who has smoked fish at Dunmere for eleven years" と述べており、開設当初の6か月は Dunmere 出身の経験者が監督する。Dunmere 側の監督なしに調理されるとするこの記述は本文と正面から矛盾する。',
          '第5段落は "Fish for both sites will continue to come from the same day boats" とあり、両拠点で同じ日帰り漁船が獲った魚を使うので、獲り方が拠点によって異なるという記述は本文と矛盾する。',
          '正解。第3段落のとおり、Portrhyn の新拠点は港から徒歩圏内にあり、そこで日々水揚げされた魚を用いると分かる。',
        ],
      },
    ],
  }),

  /* ── 161–164 記事（文挿入あり）───────────────────── */
  sp({
    n: [161, 162, 163, 164], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Article',
      title: 'A Six-Year Puzzle at Furrow Hill Cider House',
      head: 'The Cellar Trade Digest',
      body: [
        'Furrow Hill Cider House, a fourth-generation producer south of Leyburn, spent six years chasing an intermittent fault: roughly one bottle in forty developed a faint vinegary taint months after bottling, regardless of the orchard block or apple blend used. Last spring the family retired the oak-and-elm press that had stood in the barn since 1931, replacing it with an enclosed stainless unit. — [[1]] —',
        'Kelleher said little when the laboratory results came back. Swabs from the retired press turned up acetic bacteria lodged in hairline splits deep inside the oak, deposits no washdown had ever reached. — [[2]] — Juice drawn through one of those splits carried a real chance of picking up enough bacteria to sour a bottle months later, long after the batch had already passed the taste test performed before release.',
        'The finding changed more than the equipment list. The cidery now runs a quarterly acid wash and an ultrasonic probe test on any wood-contacting part nearing retirement, rather than relying on visual inspection alone. — [[3]] — Bottles from the final eighteen months under the old press have also been pulled from three retailers as a precaution, though only one in five of the batches they came from has tested positive.',
        'Since the switch, the defect rate has fallen from one bottle in forty to fewer than one in six hundred, and no batch pressed on the new unit has yet tested positive. — [[4]] — The retired press itself has been donated to the regional agricultural museum, where Kelleher now gives a monthly talk on traditional pressing methods.',
        'For Furrow Hill, the episode is a reminder that a fault can hide in the one piece of equipment nobody thought to test, however carefully everything else is inspected.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v4q161r',
        s: 'What problem had Furrow Hill Cider House been trying to diagnose for six years?',
        c: ['A shortage of skilled orchard workers', 'A decline in the sweetness of finished cider',
            'A rise in complaints from three retailers', 'A recurring taint appearing months after bottling'],
        a: 3,
        e: '本文冒頭で、ブロックや配合によらず瓶詰め後数か月で現れる酢のような異味を6年間追っていたと述べられている。',
        w: ['熟練した果樹園労働者の不足には触れていない。',
            '完成したサイダーの甘みが落ちたという記述はない。',
            '苦情の増加ではなく、予防のため最終18か月分の瓶を引き上げたという話であり、6年来の課題とは別の話。',
            '正解。ブロックや配合によらず瓶詰め後数か月で現れる酢のような異味を6年間追っていたと述べられている。'] },
      { tag: '詳細', qid: 'v4q162r',
        s: 'What did tests on the retired press reveal?',
        c: ['A layer of hardened mould on the exterior', 'A colony of bacteria deep inside the oak',
            'A leak inside the stainless collection tray', 'A residue from an earlier cleaning chemical'],
        a: 1,
        e: '引退した圧搾機の検体から、木材の奥深くの割れ目に潜む酢酸菌のコロニーが見つかり、そこは洗浄でも届かない場所だったと説明されている。',
        w: ['外側の硬化したカビの層という記述はない。',
            '正解。検体調査で、木材の奥深くの割れ目に酢酸菌のコロニーが潜んでいたことが分かったと述べられている。',
            'ステンレス製の受け皿の亀裂には触れていない。',
            '洗浄剤の残留物ではなく、菌そのものが原因だと述べられている。'] },
      { tag: '位置選択', qid: 'v4q163r', t: ['p7ins'], insertAt: 1,
        sentence: 'Thora Kelleher, who had run the pressing floor for twenty-six years, had argued against the change, insisting that the old press had nothing to do with the fault.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"Thora Kelleher, who had run the pressing floor for twenty-six years, had argued against the change, insisting that the old press had nothing to do with the fault."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 0,
        e: '挿入文は Thora Kelleher という固有名を「圧搾室を26年間切り盛りしてきた」という説明つきで初めて導入している。第2段落はこの人物を姓だけの Kelleher で指しており、固有名は世界知識から推測できないため、それより前に一度は正式名で導入されていなければ読者は誰のことか分からない。それが成立するのは [1] だけである。',
        w: ['正解。挿入文がフルネームで Thora Kelleher を導入するのはこの位置だけで、直後の段落にある Kelleher という姓だけの表現が、直前で導入された相手を指す形として成立する。',
            '[2] に置くと、同じ段落の冒頭の Kelleher という姓だけの表現が、挿入文によるフルネームでの導入より前にすでに本文中に現れていることになる。固有名は文脈から推測できないため、まだ一度も名指しされていない相手を第2段落冒頭が指してしまっており、成立しない。',
            '[3] に置くと、Kelleher という姓だけの言及がすでに一度（第2段落冒頭）現れたあとになり、誰を指すか定まらないまま固有名が使われていたことになる。',
            '[4] に置くと、Kelleher という姓だけの表現からさらに離れたあとで Thora Kelleher がフルネームで「初めて」導入されることになり、すでに姓だけで扱われていた相手を今さら初出の形で導入し直す矛盾が生じる。'] },
      { tag: '推測', qid: 'v4q164r2', t: ['p7inf'],
        s: 'What is suggested about the bottles produced during the final eighteen months before the press was replaced?',
        c: ['They have been traced to one blend.', 'They have not all been cleared yet.',
            'They have been withdrawn without any public explanation.', 'They have never been removed from the three retailers.'],
        a: 1,
        e: '最終18か月分の瓶は予防的に引き上げられたが、その元になったバッチのうち検査で陽性だったのは5分の1にとどまると述べられており、全てが陰性と確認されたわけではないと分かる。',
        w: ['第1段落は、異味が「使用した果樹園の区画やりんごの配合によらず」およそ40本に1本の割合で現れたと明記している。第2段落は原因を、引退した圧搾機の樫材の割れ目に潜んでいた酢酸菌と特定している。瓶の由来を配合のひとつに絞る見方は、この2か所の記述と食い違う。',
            '正解。予防的に引き上げられた瓶について、その元になったバッチの5分の1が検査で陽性だったと述べられており、全てが不検出と確認されたわけではないと分かる。',
            '第3段落が述べているのは、最終18か月分の瓶が予防措置として3つの小売店から引き上げられたという事実だけである。引き上げにあたって事業者が公衆に向けて説明を行ったかどうかは、本文のどの段落も扱っていない。記事が理由を書いていることと、事業者が公表したかどうかは別の事柄である。',
            '第3段落は Bottles from the final eighteen months under the old press have also been pulled from three retailers as a precaution と述べており、対象の瓶は現に3つの小売店から引き上げられている。一度も引き上げられていないという内容は、この一文と正面から食い違う。'] },
    ],
  }),
];
