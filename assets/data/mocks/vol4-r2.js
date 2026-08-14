/* =============================================================
   予想模試 Vol.4 — Part 7 単一文書 前半（No.147–164）
   語彙難化回。
   ============================================================= */

const sp = (o) => ({
  id: `v4-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    id: `v4q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
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
        c: ['They failed a recent safety inspection.', 'A new tenant requested the change.',
            'They are being removed permanently.', 'Their control system and cabling are being replaced.'],
        a: 3,
        e: '制御系統と配線を全面更新するためと明記されている。',
        w: ['検査不合格の話はない。', 'テナントの要望ではない。', '恒久的な撤去ではない。', '正解。'] },
      { tag: '詳細', s: 'What is stated about freight deliveries during the works?',
        c: ['They must be scheduled at least a day in advance during certain hours.', 'They are suspended entirely.',
            'They must use cars 1 and 2 instead.', 'They will be handled by building staff only.'],
        a: 0,
        e: 'サービスエレベーターは午前 8 時〜10 時は業者の資材搬入と共用のため、少なくとも前日までに事務所を通して予約が必要と明記されている。',
        w: ['正解。', '停止するとは書かれていない。', '貨物は専用のサービスエレベーターを使う。', '建物スタッフ限定という記載はない。'] },
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
        c: ['They have been sold to another company.', 'They belong to a different department.',
            'They require a software update.', 'They no longer hold a working inventory database.'],
        a: 3,
        e: '「部品取り用に業者へ返却され、稼働する在庫データベースをもう保持していない」と明記されている。',
        w: ['売却の話はない。', '部署の違いには触れていない。', 'ソフト更新の話ではない。', '正解。'] },
    ],
  }),

  /* ── 151–152 広告 ─────────────────────────────────── */
  sp({
    n: [151, 152], lv: 4,
    docs: [{
      label: 'Advertisement',
      title: 'Fenwick & Barr — Upholstery & Furniture Restoration, Est. 1977',
      body: [
        'We reframe, respring and reupholster. What we will not do is talk a customer into recovering a chair that has a structural problem underneath, when the honest answer is that the frame itself needs attention first.',
        { t: 'list', items: [
          'Full reupholstery from £310 (fabric not included)',
          'Spring replacement from £85 per seat',
          'Frame repair from £120',
          'Free in-home assessment within 15 miles',
        ] },
        'Turnaround is five to seven weeks for a full reupholstery. We do not offer a rush service for horsehair-stuffed pieces, because horsehair must be teased and redistributed by hand over several sessions, and compressing that process is the most common cause of an uneven seat within a year.',
        'Foam-filled pieces, by contrast, can often be turned around in two to three weeks, since foam requires no comparable hand-finishing.',
        'If, after assessment, we judge that a piece is not worth restoring, we say so and charge nothing for the visit. This happens with roughly one piece in ten, usually where the frame has been affected by damp.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why does the shop not offer a rush service for horsehair-stuffed pieces?',
        c: ['Horsehair is no longer manufactured.', 'Insurance restrictions prevent it.',
            'Few customers request it.', 'The material must be hand-finished over several sessions.'],
        a: 3,
        e: '馬毛は数回に分けて手作業でほぐし配り直す必要があり、それを圧縮すると 1 年以内に座面がへたる主因になると説明されている。',
        w: ['製造中止の話はない。', '保険の話は出ていない。', '需要の話ではない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What is suggested about foam-filled pieces?',
        c: ['They require the same hand-finishing as horsehair.', 'They cost more to restore than horsehair pieces.',
            'They are not accepted by the shop.', 'They can often be completed faster than horsehair pieces.'],
        a: 3,
        e: '「フォーム詰めは同等の手作業の仕上げが不要なので、2〜3 週間で仕上がることが多い」とある。',
        w: ['同等の仕上げは不要と明記。', '費用の比較はしていない。', '受け付けないとは書かれていない。', '正解。'] },
    ],
  }),

  /* ── 153–154 テキストメッセージ ───────────────────── */
  sp({
    n: [153, 154], lv: 4,
    docs: [{
      label: 'Text message chain',
      body: [{ t: 'chat', lines: [
        { who: 'Rosalind Achebe', time: '14:02', text: "The catering van says they're stuck behind an accident on the ring road." },
        { who: 'Tomasz Wysocki', time: '14:04', text: 'How stuck? We start seating at five.' },
        { who: 'Rosalind Achebe', time: '14:05', text: 'Driver says forty minutes minimum, could be more.' },
        { who: 'Tomasz Wysocki', time: '14:06', text: 'Then we lose the warm starters either way.' },
        { who: 'Rosalind Achebe', time: '14:08', text: 'Can we swap to the cold menu option they offered as a backup?' },
        { who: 'Tomasz Wysocki', time: '14:09', text: 'Yes — call them now and tell them to switch before they load the van.' },
        { who: 'Rosalind Achebe', time: '14:10', text: 'On it.' },
      ] }],
    }],
    q: [
      { tag: '詳細', s: 'What problem is described in the messages?',
        c: ['A menu item is out of stock.', 'A venue has double-booked the event.',
            'A caterer has been delayed by a traffic accident.', 'A payment has not been processed.'],
        a: 2,
        e: '「環状道路で事故があり、その渋滞に巻き込まれている」というケータリング業者の遅延について。',
        w: ['在庫切れの話ではない。', '会場の重複予約の話はない。', '正解。', '支払いの話は出ていない。'] },
      { tag: '詳細', s: 'What does Mr. Wysocki ask Ms. Achebe to do?',
        c: ['Cancel the catering order entirely.', 'Find a replacement caterer.',
            'Delay the start of seating.', 'Ask the caterer to switch to the cold menu before loading the van.'],
        a: 3,
        e: '「今すぐ電話して、積み込む前に冷製メニューに切り替えるよう伝えて」と依頼している。',
        w: ['注文の取り消しではない。', '別業者の手配は依頼していない。', '開始時刻の変更は述べていない。', '正解。'] },
    ],
  }),

  /* ── 155–157 メール ───────────────────────────────── */
  sp({
    n: [155, 156, 157], lv: 5,
    docs: [{
      label: 'E-mail',
      head: 'To: p.okonjo@harrowbrook-textiles.com\nFrom: e.rasmussen@greenline-design.no\nDate: 9 June\nSubject: Courtyard planting — revised proposal',
      body: [
        'Dear Mr. Okonjo,',
        'Thank you for walking me through how staff actually use the courtyard at different times of day — that changed my recommendation.',
        'You originally asked for a single species of ornamental tree along both the north and south beds, to match the existing planting outside reception. Having watched the courtyard over two lunch periods, I would like to propose two species instead: a low, wide-canopied tree for the north bed, where staff eat lunch and want shade without losing sightlines to the door, and a narrower, upright tree for the south bed, which gets almost no midday use and would benefit more from height and screening of the loading bay behind it.',
        'The two-species approach adds around ten percent to the planting cost, since it requires two separate supplier orders rather than one bulk order. I think it is worth it, but I want to be clear this is my professional judgement, not something the site drainage survey requires.',
        'On matching the reception planting: matching exactly, I now think, would waste the north bed\'s potential. The reception trees are chosen for a formal, symmetrical look from the street, which does not serve people trying to eat lunch under them.',
        'I have attached sketches of both options and a revised planting schedule. If the ten percent increase is not workable within the current budget, I can specify a single compromise species that will do both jobs adequately rather than either job well.',
        'With regards,\nElin Rasmussen',
      ],
    }],
    q: [
      { tag: '概要', s: 'Why is Ms. Rasmussen writing?',
        c: ['To request payment for a site visit', 'To confirm a delivery date for the trees',
            'To propose a change to an agreed planting plan', 'To decline a landscaping commission'],
        a: 2,
        e: '「単一樹種」という当初の依頼に対し、2 樹種に分ける提案をしている。',
        w: ['費用請求ではない。', '納期の確認ではない。', '正解。', '依頼を辞退してはいない。'] },
      { tag: '詳細', s: 'What did Ms. Rasmussen observe about the courtyard?',
        c: ['The lighting is inadequate for outdoor dining.', 'Drainage in the south bed is poor.',
            'The courtyard is smaller than the site plan showed.', 'The two beds are used very differently at midday.'],
        a: 3,
        e: '北側は昼食時に利用され、南側はほぼ利用されないという使われ方の違いを観察している。',
        w: ['照明の話はない。', '排水の問題には触れていない。', '広さの話は出ていない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does Ms. Rasmussen imply about matching the reception planting exactly?',
        c: ['It is not permitted under the original design brief.', 'It would exceed the site drainage requirements.',
            'It would fail to serve people who eat lunch in the north bed.', 'It would require trees that are difficult to source.'],
        a: 2,
        e: '「受付前の植栽は左右対称の見た目重視で選ばれており、その下で昼食を取る人々には向かない」という趣旨。',
        w: ['設計指針が禁じているとは述べていない。', '排水調査の話とは無関係。', '正解。', '入手性には触れていない。'] },
    ],
  }),

  /* ── 158–160 記事 ─────────────────────────────────── */
  sp({
    n: [158, 159, 160], lv: 5,
    docs: [{
      label: 'Article',
      title: 'The Coffee Shop That Closed an Hour Earlier and Made More Money',
      head: 'Independent Retail Monthly',
      body: [
        'In 2021, Marrow & Bean, a coffee shop in a mid-sized market town, cut its closing time from seven in the evening to six. No other change was made: staffing levels, the menu and the opening time all stayed the same.',
        'The idea came from a simple observation by owner Callum Reid: the last hour of trade brought in barely enough to cover the wages of the two staff needed to run it, once you subtracted the cost of throwing away unsold pastries at closing.',
        'The first six months showed a predictable drop in evening revenue of around eight percent. Full three-year tracking, unusual for a change this small, showed something else: total annual revenue rose by six percent, driven almost entirely by the morning trade.',
        'Mr. Reid\'s explanation is that closing earlier let him move his best staff to the morning shift, when queues had been a longstanding complaint. "We were spread thin trying to cover twelve hours with the same four people," he says. "Now three of them work the four busiest hours, and the fourth handles what used to be the quiet afternoon."',
        'The shop has not extended the change to its second location, opened last year in a neighbouring town, where the evening trade follows a different pattern tied to a nearby cinema.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What change did Marrow & Bean make in 2021?',
        c: ['It replaced its pastry supplier.', 'It reduced its closing time by one hour.',
            'It reduced its staffing levels.', 'It extended its opening hours.'],
        a: 1,
        e: '「閉店時刻を19時から18時に早めた」とある。',
        w: ['仕入先変更の話はない。', '正解。', '人員は変えていないと明記。', '延長ではなく短縮。'] },
      { tag: '詳細', s: 'What was unusual about the tracking of the change?',
        c: ['It was conducted by an outside retail consultant.', 'It measured staff satisfaction rather than revenue.',
            'It covered both of the shop\'s locations from the outset.', 'It continued for three years rather than a shorter period.'],
        a: 3,
        e: '「この程度の小さな変更にしては珍しく」3 年間の追跡調査を行った点が特異だと述べている。',
        w: ['外部コンサルタントの話はない。', '測定対象は売上。', '2 号店は昨年開業した別の話。', '正解。'] },
      { tag: '詳細', s: 'What does Mr. Reid say resulted from the change?',
        c: ['He hired two additional employees.', 'His best staff moved to the morning shift.',
            'The shop reduced its menu.', 'Customer complaints increased.'],
        a: 1,
        e: '「最も優秀なスタッフを朝の忙しい時間帯に回せるようになった」と述べている。',
        w: ['増員の話はない。', '正解。', 'メニュー削減には触れていない。', 'むしろ行列の苦情が減った文脈。'] },
    ],
  }),

  /* ── 161–164 記事（文挿入あり）───────────────────── */
  sp({
    n: [161, 162, 163, 164], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Article',
      title: 'The Onboarding Number That Was Hiding Two Outcomes',
      head: 'Retail Personnel Review',
      body: [
        'For most mid-sized retail chains, first-year staff turnover sits somewhere between thirty and forty-five percent. — [[1]] — Nearly all track it quarterly against a target, and a rate above forty percent usually triggers a review of hiring practices.',
        'Corvin & Ashe, a homeware retailer with branches across three counties, found that its headline figure was hiding something. — [[2]] — When the company split first-year turnover by whether a new hire had completed the full two-week onboarding programme or a shortened three-day version used during busy periods, two quite different workforces appeared.',
        'Staff who completed the full programme left at a first-year rate of eighteen percent. Staff who completed the shortened version left at fifty-one percent — and those who stayed took, on average, twice as long to reach full productivity on the shop floor.',
        'The finding changed what Corvin & Ashe did about staffing during busy periods. The obvious response, hiring further ahead of peak season to allow time for full onboarding, ran into a recruitment market where suitable candidates simply were not available that early. — [[3]] — Instead the company redesigned the shortened programme around the three tasks most linked to early departures, rather than trying to compress the full curriculum.',
        'First-year turnover among shortened-programme staff fell to thirty-one percent within a year. — [[4]] — Overall recruitment costs fell by a sixth, since fewer replacement hires were needed mid-season.',
        'The lesson Corvin & Ashe draws is not about retail training. It is that a single average can combine two groups whose experience has almost nothing in common.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What did Corvin & Ashe discover about staff turnover?',
        c: ['It was higher than the industry average.', 'It came mainly from one branch location.',
            'It differed sharply between two onboarding methods.', 'It was concentrated among managers.'],
        a: 2,
        e: '通常の2週間研修とその短縮版とで、初年度離職率が18パーセントと51パーセントに分かれた。',
        w: ['業界平均との比較はしていない。', '拠点別の話ではない。', '正解。', '管理職に限定した話ではない。'] },
      { tag: '詳細', s: 'Why did the company reject hiring further ahead of peak season?',
        c: ['It was prohibited by employment regulations.', 'It would have exceeded the training budget.',
            'It had failed at a competitor before.', 'Suitable candidates were not available that early in the market.'],
        a: 3,
        e: '「その時期にはまだ適した候補者が市場にいなかった」ため見送られた。',
        w: ['規制の話はない。', '予算超過の話も出ていない。', '競合の事例には触れていない。', '正解。'] },
      { tag: '位置選択', t: ['p7ins'], insertAt: 2,
        sentence: 'The figure on its own was unremarkable, at thirty-six percent.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"The figure on its own was unremarkable, at thirty-six percent."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 1,
        e: '挿入文の The figure は直前の「表面上の離職率が何かを隠していた」の「その数字」を指し、直後の「研修方法で分けると 2 つの異なる集団が現れた」につながる。平凡な総計 → 分解すると別物、という論理が [2] で完成する。',
        w: ['[1] の前後は業界一般の話で、Corvin & Ashe 固有の数字はまだ出ていない。',
            '正解。',
            '[3] の前後は対応策の話で、数値の提示は遅すぎる。',
            '[4] の前後は成果の数字で、前提の提示にはならない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does the final paragraph suggest?',
        c: ['Retail training differs fundamentally from other industries.', 'Exit interviews are more reliable than turnover statistics.',
            'Turnover rates should not be published externally.', 'Averages can conceal groups whose experiences differ greatly.'],
        a: 3,
        e: '「1 つの平均が、経験がほとんど共通しない 2 つの集団を合わせてしまうことがある」という結びが根拠。',
        w: ['「小売研修の話ではない」と明言している。', '退職面談の話は出ていない。', '公表の是非には触れていない。', '正解。'] },
    ],
  }),
];
