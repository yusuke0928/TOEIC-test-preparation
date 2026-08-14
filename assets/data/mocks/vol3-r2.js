/* =============================================================
   予想模試 Vol.3 — Part 7 単一文書 前半（No.147–164）
   リーディング高負荷回。文書をやや長めにしてある。
   ============================================================= */

const sp = (o) => ({
  id: `v3-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    id: `v3q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
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
      title: 'Hollow Bank Public Library — Ground-Floor Closure',
      body: [
        'The ground-floor reading room will close from Monday 9 to Friday 20 June for a full re-wiring of the electrical system, replacement of the ceiling lighting, and repair of storm damage sustained in April to the skylight above the periodicals section.',
        'During the closure, the reference desk and all lending services will move temporarily to the first-floor community room. Because that room is roughly half the size of the reading room, seating will be limited and quiet study cannot be guaranteed. Anyone who needs silence for exam revision is encouraged to use nearby Fenwick College Library, which has agreed to honour Hollow Bank membership cards for the duration of the works.',
        'Returns may still be made through the outside book drop at any time, and holds placed online will continue to be processed, though collection will take place from the first-floor desk rather than the usual ground-floor counter.',
        'The children\'s storytime sessions, normally held in the reading room on Wednesday mornings, will move to the outdoor courtyard, weather permitting. If it rains, the session will be cancelled rather than moved indoors, since no suitable indoor space is available during the works.',
        'We apologise for the disruption and thank members for their patience while these long-overdue repairs are carried out.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why will the reading room be closed?',
        c: ['Electrical work and storm-damage repairs are being carried out.', 'The library is changing its opening hours.',
            'A new reading room is being built.', 'The building is being sold.'],
        a: 0,
        e: '配線の全面更新、天井照明の交換、4 月の暴風で損傷した天窓の修理のためと説明されている。',
        w: ['正解。', '開館時間変更の記載はない。', '新設の話ではない。', '売却の話は出ていない。'] },
      { tag: '詳細', s: 'What is indicated about the Wednesday storytime sessions?',
        c: ['They will be held in the first-floor community room.', 'They will require advance registration.',
            'They will be shortened during the closure.', 'They will be cancelled if the weather is poor.'],
        a: 3,
        e: '屋外の中庭に移すが、雨天の場合は屋内に移さず中止すると明記されている。',
        w: ['一階の会議室ではなく屋外の中庭に移る。', '事前登録の記載はない。', '短縮の記載はない。', '正解。'] },
    ],
  }),

  /* ── 149–150 業務連絡（メモ）─────────────────────── */
  sp({
    n: [149, 150], lv: 4,
    docs: [{
      label: 'Memo',
      head: 'TO: All warehouse staff\nFROM: Health & Safety\nDATE: 11 March\nSUBJECT: Forklift inspection — schedule change',
      body: [
        'The quarterly forklift inspection originally scheduled for the morning of 14 March has been moved to the afternoon of 13 March, because the inspector, who normally travels from the Bristol depot, has a prior commitment on the fourteenth that cannot be rearranged.',
        'All five forklifts must be parked in bay 6 by 1:00 p.m. on the thirteenth, with keys left in the site office. Any forklift still in use for essential loading at that time should be flagged to the shift supervisor, who will arrange a short exemption directly with the inspector rather than have the vehicle miss the inspection entirely.',
        'Operators whose shift ends before 1:00 p.m. that day are not required to stay, but anyone who wishes to be present while their assigned vehicle is inspected is welcome to remain, unpaid, and will be given priority for feedback on that vehicle\'s condition.',
        'A vehicle that fails inspection is taken out of service immediately. Historically this affects at most one of the five each quarter, most often because of worn forks or a hydraulic leak.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why was the inspection date changed?',
        c: ['A required part was delayed in shipping.', 'Staff requested a different date.',
            'The warehouse will be closed on 14 March.', 'The inspector is unavailable on the originally planned date.'],
        a: 3,
        e: '検査員はブリストル拠点から来るが、14 日に動かせない先約があるためと説明されている。',
        w: ['部品の遅延には触れていない。', 'スタッフからの要望ではない。', '閉鎖の話はない。', '正解。'] },
      { tag: '詳細', s: 'What should a supervisor do if a forklift is still needed for loading at 1:00 p.m.?',
        c: ['Cancel that vehicle\'s inspection for the quarter.', 'Reschedule the entire inspection to another day.',
            'Arrange a short exemption directly with the inspector.', 'Report the vehicle as permanently out of service.'],
        a: 2,
        e: '「シフト監督者が検査員と直接、短い例外対応を調整する」と明記されている。',
        w: ['その四半期の検査を取りやめるわけではない。', '全体の日程変更ではない。', '正解。', '稼働停止の報告ではない。'] },
    ],
  }),

  /* ── 151–152 広告 ─────────────────────────────────── */
  sp({
    n: [151, 152], lv: 4,
    docs: [{
      label: 'Advertisement',
      title: 'Renwick & Voss — Bespoke Bookbinding, Established 1968',
      body: [
        'We rebind, repair spines and restore water-damaged pages. What we will not do is tell a customer a book is worth restoring when the cost would exceed what a replacement copy would cost — unless the book carries sentimental or historical value that a replacement copy cannot supply.',
        { t: 'list', items: [
          'Full rebind in leather from £96',
          'Cloth rebind from £58',
          'Single loose-page repair from £9 each',
          'Free condition assessment, in person or by post',
        ] },
        'Turnaround is four to six weeks depending on the binding style chosen. We do not offer an express service for leather work, because the leather must be conditioned in stages over roughly three weeks before it can be cut and fitted, and rushing that stage is the single most common cause of a binding failing within a year.',
        'Cloth rebinding, by contrast, can sometimes be completed in as little as ten days if the workshop is not at capacity, since cloth requires no comparable conditioning period.',
        'If, after assessment, we judge that restoration is not worthwhile, we return the book at no charge and, where possible, suggest a specialist better suited to the particular problem. This happens with roughly one book in fifteen.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why does the shop not offer an express option for leather rebinding?',
        c: ['Leather is difficult to obtain.', 'Customers rarely request faster service.',
            'Skilled staff are not always available.', 'The leather requires a multi-week conditioning process.'],
        a: 3,
        e: '革は約 3 週間かけて段階的に養生する必要があり、それを急ぐと 1 年以内の破損の主因になると説明されている。',
        w: ['入手性には触れていない。', '需要の話ではない。', '人員の話はない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What is suggested about cloth rebinding?',
        c: ['It is offered only to institutional customers.', 'It costs more than leather rebinding.',
            'It can sometimes be finished more quickly than leather rebinding.', 'It requires the same conditioning period as leather.'],
        a: 2,
        e: '「工房が繁忙でなければ 10 日程度で仕上がることもある」とあり、革のような養生期間が不要とも明記されている。',
        w: ['個人客も対象と読める文章。', '布（£58〜）は革（£96〜）より安価。', '正解。', '革のような養生期間は不要と明記。'] },
    ],
  }),

  /* ── 153–155 メール ───────────────────────────────── */
  sp({
    n: [153, 154, 155], lv: 5,
    docs: [{
      label: 'E-mail',
      head: 'To: h.vanderberg@aldgatemuseum.org\nFrom: r.oyelaran@luminate-design.co.uk\nDate: 12 September\nSubject: Gallery lighting — revised proposal',
      body: [
        'Dear Dr. Vanderberg,',
        'Thank you for the extra time in the Textiles Gallery last Thursday, and for talking me through how visitors actually move through the space during a typical afternoon. That visit changed my recommendation.',
        'You originally asked for a single lighting temperature throughout the gallery, matched to the temperature already used in the Ceramics wing next door for consistency. Having watched three separate visitor groups over two hours, I would like to propose two zones instead: a cooler, brighter zone for the entrance third of the room, where visitors move quickly and read wall panels, and a warmer, dimmer zone for the rear two-thirds, where the most light-sensitive textiles are displayed and where visitors tend to slow down and look closely.',
        'The two-zone approach adds roughly twelve percent to the fixture cost, because it requires two separate control circuits rather than one. I believe it is worth the difference, but I want to be honest that this is a professional judgement on my part, not something the conservation guidelines strictly require.',
        'On the question of matching the Ceramics wing: matching exactly, I now think, would be a mistake. The Ceramics wing is lit for close, sustained looking throughout, which suits ceramics but does not suit how people move through a textiles collection. A visitor walking from Ceramics into a textiles gallery lit exactly the same way is more likely to walk past the fragile pieces without slowing down at all.',
        'I have attached lux-level sketches for both zones and a revised fixture schedule. If the twelve percent increase is not acceptable within the current budget, I can design a single-zone compromise that will serve both purposes adequately, though not as well as either zone would serve its own purpose alone.',
        'With regards,\nRosalind Oyelaran',
      ],
    }],
    q: [
      { tag: '概要', s: 'Why is Ms. Oyelaran writing?',
        c: ['To report a delay in the installation', 'To decline a lighting commission',
            'To request an extension of the site visit', 'To propose a change to an agreed lighting design'],
        a: 3,
        e: '「単一の色温度」という当初の依頼に対し、2 つのゾーンに分ける提案をしている。',
        w: ['遅延の報告ではない。', '依頼を辞退してはいない。', '訪問延長の依頼ではない。', '正解。'] },
      { tag: '詳細', s: 'What did Ms. Oyelaran observe during the gallery visit?',
        c: ['The gallery was smaller than her original plan assumed.', 'The existing lighting was too dim throughout.',
            'Visitors moved through different parts of the gallery at different speeds.', 'Visitor numbers were lower than expected.'],
        a: 2,
        e: '入口付近では素早く動き、奥では立ち止まってじっくり見るという、来場者の動き方の違いを観察している。',
        w: ['広さの話は出ていない。', '照明の暗さには触れていない。', '正解。', '来場者数には触れていない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does Ms. Oyelaran imply about matching the Ceramics wing exactly?',
        c: ['It is not permitted under conservation guidelines.', 'It would exceed the museum\'s electrical capacity.',
            'It would cause visitors to overlook fragile textile pieces.', 'It would require fixtures that are no longer manufactured.'],
        a: 2,
        e: '「陶磁器と同じ照明では、繊細な織物の前でも立ち止まらずに通り過ぎやすくなる」という趣旨の指摘。',
        w: ['ガイドラインが禁じているとは述べていない。', '電力容量には触れていない。', '正解。', '製造終了の話は出ていない。'] },
    ],
  }),

  /* ── 156–158 記事 ─────────────────────────────────── */
  sp({
    n: [156, 157, 158], lv: 5,
    docs: [{
      label: 'Article',
      title: 'The Five-Minute Meeting That Cut Errors in Half',
      head: 'Operations Digest, Issue 58',
      body: [
        'In 2021, the packaging line at Drummond Foods introduced a single change to its shift handover: outgoing and incoming supervisors now stand together at the line for five minutes before the outgoing supervisor leaves, rather than exchanging a written note. No other change was made to staffing, equipment or the products packaged.',
        'The idea came from a near-miss the previous winter, in which a written note about a jammed sensor was left in a drawer and not read until the following shift had already restarted the line. Ms. Petra Vogel, the plant\'s quality manager, had read about similar handover changes in hospital wards and wondered whether the same idea would transfer to a packaging floor.',
        'The first six months produced a clear result: line stoppages caused by handover-related confusion fell by 54 percent. Full three-year tracking, unusual for a change this small, showed something else: the effect grew rather than faded. By year three, such stoppages were down 71 percent from the baseline.',
        'Ms. Vogel\'s explanation is that the five minutes gradually became a habit of asking questions rather than simply listing facts. "In year one, people were reading their notes aloud to each other," she says. "By year three, the incoming supervisor was asking \'what would you want to know if you were me,\' which is a completely different conversation."',
        'The company has since extended the five-minute handover to two other lines, though not, so far, to the warehouse, where staff work in larger teams and a five-minute pause was judged impractical.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What change did Drummond Foods make in 2021?',
        c: ['It reduced the number of supervisors per shift.', 'It replaced written safety notes with an audit system.',
            'It introduced a face-to-face handover between supervisors.', 'It automated part of the packaging line.'],
        a: 2,
        e: '「書面の引き継ぎメモの代わりに、交代前後の責任者が5分間並んで立つ」対面の引き継ぎに変えたとある。',
        w: ['人員削減には触れていない。', '監査制度の話ではない。', '正解。', '自動化の話はない。'] },
      { tag: '詳細', s: 'What was unusual about the tracking of the change?',
        c: ['It was conducted by an outside hospital consultant.', 'It measured costs rather than stoppages.',
            'It covered every line in the factory from the outset.', 'It continued for three years rather than the more typical shorter period.'],
        a: 3,
        e: '「この程度の小さな変更にしては珍しく」3 年間の追跡調査を行った点が特異だと述べている。',
        w: ['外部コンサルタントの話はない。', '測定対象は停止件数。', '当初は 1 ラインのみで開始。', '正解。'] },
      { tag: '詳細', s: 'What does Ms. Vogel say changed about the handover conversations over time?',
        c: ['They became shorter each year.', 'They came to involve more staff members.',
            'They were eventually written down again.', 'They shifted from reciting facts to asking questions.'],
        a: 3,
        e: '「1 年目はメモを読み上げ合っていたが、3 年目には『自分だったら何を知りたいか』と尋ねるようになった」と述べている。',
        w: ['所要時間の短縮には触れていない。', '参加人数の増加は述べていない。', '書面に戻したとは述べていない。', '正解。'] },
    ],
  }),

  /* ── 159–160 フォーム ─────────────────────────────── */
  sp({
    n: [159, 160], lv: 4,
    docs: [{
      label: 'Form',
      title: 'Bellhaven Print Co-operative — Guest Pass Request',
      body: [
        { t: 'kv', pairs: [
          ['Member', 'Ostrowski Bindery (studio 4)'],
          ['Requested by', 'K. Ostrowski, studio lead'],
          ['Date', '9 April'],
          ['Passes currently issued', '2 of a maximum of 4'],
        ] },
        { t: 'table',
          head: ['Name', 'Role', 'Access requested'],
          rows: [
            ['R. Ostrowski', 'Weekend technician', '24 hours'],
            ['T. Nakagawa', 'Studio assistant', '08:00–20:00'],
          ] },
        'Site use only: 24-hour access is issued only where the member confirms in writing that the named person has completed the laser-cutter safety module. Requests without this confirmation will be issued as daytime access and can be upgraded later at no charge.',
        'Passes are produced on Mondays and Thursdays and must be collected in person by the person named.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What condition applies to 24-hour access?',
        c: ['It is limited to two people per member.', 'It must be renewed every six months.',
            'It carries an additional monthly charge.', 'It requires written confirmation of a safety module.'],
        a: 3,
        e: '「レーザーカッターの安全講習を修了したことを工房会員が書面で確認した場合にのみ発行」と明記。',
        w: ['人数制限の記載はパス枚数のみ。', '更新の話はない。', '追加料金の記載はない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What can be inferred if the confirmation is missing?',
        c: ['The request will be rejected outright.', 'One person will be issued a pass with restricted hours.',
            'The membership will be suspended.', 'A fee will be charged for reissue.'],
        a: 1,
        e: '「確認がない場合は日中アクセスとして発行され、後で無料で切り替えられる」とある。24 時間を求めた R. Ostrowski の分が日中に制限される。',
        w: ['却下ではなく条件付きで発行される。', '正解。', '停止の話はない。', '切り替えは無料と明記。'] },
    ],
  }),

  /* ── 161–164 記事（文挿入あり）───────────────────── */
  sp({
    n: [161, 162, 163, 164], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Article',
      title: 'The Warranty Number That Was Hiding Two Products',
      head: 'Manufacturing Outlook Quarterly',
      body: [
        'For most manufacturers of mid-range kitchen appliances, the headline warranty claim rate sits somewhere between six and eleven percent in the first year. — [[1]] — Nearly all track it monthly against a fixed target, and a rate above ten percent is usually treated as a design or quality problem worth investigating.',
        'Harrowgate Appliances, a manufacturer of built-in ovens based in the Midlands, found that its headline figure was concealing something. — [[2]] — When the company split first-year claims by whether the oven had been installed by one of its certified fitters or by the customer or a general contractor, two quite different products appeared.',
        'Ovens installed by certified fitters had a first-year claim rate of four percent. Ovens installed by anyone else had a claim rate of twenty-nine percent — and those claims were, on average, three times more expensive to resolve, because self-installed units were more likely to have loose wiring connections that slowly damaged the control board rather than failing outright on day one.',
        'The finding changed what Harrowgate did about installation. The obvious response, refusing to honour the warranty on self-installed units, would have penalised customers in rural areas where certified fitters are scarce and appointments can run months behind. — [[3]] — Instead the company redesigned the connector housing so that a loose wire trips a visible warning light rather than slowly damaging the board, and began including a fifteen-minute instructional video with every self-install unit.',
        'Self-install claim rates fell by forty percent within eighteen months. — [[4]] — Overall warranty costs fell by a fifth, and the company did not lose a single rural customer over the change.',
        'The lesson Harrowgate draws is not about ovens. It is that a single average can quietly combine two populations that behave nothing alike.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What did Harrowgate discover about its warranty claims?',
        c: ['They were higher than the industry average.', 'They came mainly from a small group of repeat customers.',
            'They differed sharply between two installation methods.', 'They were concentrated in one region.'],
        a: 2,
        e: '認定施工業者による設置とそれ以外とで、初年度クレーム率が 4 パーセントと 29 パーセントに分かれた。',
        w: ['業界平均との比較はしていない。', 'リピート客の話ではない。', '正解。', '地域別の話は出ていない。'] },
      { tag: '詳細', s: 'Why did the company reject refusing warranty coverage for self-installed units?',
        c: ['It was prohibited by consumer regulations.', 'It had failed at a competitor before.',
            'It would have unfairly affected rural customers.', 'It would have been too costly to administer.'],
        a: 2,
        e: '「認定施工業者が少なく予約が数か月先まで埋まっている地方の顧客に、不当に不利益を与える」ため見送った。',
        w: ['規制の話はない。', '競合の事例には触れていない。', '正解。', '運用費の話も出ていない。'] },
      { tag: '位置選択', t: ['p7ins'], insertAt: 2,
        sentence: 'The figure itself was unremarkable, at eight percent.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"The figure itself was unremarkable, at eight percent."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 1,
        e: '挿入文の The figure は直前の「表面上のクレーム率が何かを隠していた」の「その数字」を指し、直後の「内訳に分けると 2 つの異なる製品が現れた」につながる。平凡な総計 → 分解すると別物、という論理が [2] で完成する。',
        w: ['[1] の前後は業界一般の話で、Harrowgate 固有の数字はまだ出ていない。',
            '正解。',
            '[3] の前後は対応策の話で、数値の提示は遅すぎる。',
            '[4] の前後は成果の数字で、前提の提示にはならない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does the final paragraph suggest?',
        c: ['Kitchen appliances differ from other product categories.', 'Customer surveys are more reliable than claim data.',
            'Warranty periods should be shortened.', 'Averages can conceal distinct groups within the data.'],
        a: 3,
        e: '「1 つの平均が、まったく異なる挙動をする 2 つの集団を静かに合わせてしまうことがある」という結びが根拠。',
        w: ['「オーブンの話ではない」と明言している。', '調査手法の比較はしていない。', '保証期間の話は出ていない。', '正解。'] },
    ],
  }),
];
