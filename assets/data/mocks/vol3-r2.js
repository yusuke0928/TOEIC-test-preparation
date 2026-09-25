/* =============================================================
   予想模試 Vol.3 — Part 7 単一文書 前半（No.147–164）
   リーディング高負荷回。文書をやや長めにしてある。
   ============================================================= */

const sp = (o) => ({
  id: `v3-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v3q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
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
        c: ['Electrical work and storm-damage repairs are being carried out.', 'The library is permanently changing its opening hours this year.',
            'A new reading room and car park are being built.', 'The building is being sold to cover repair costs.'],
        a: 0,
        e: '配線の全面更新、天井照明の交換、4 月の暴風で損傷した天窓の修理のためと説明されている。',
        w: ['正解。', '臨時の一時移転が行われるだけで、開館時間の恒久的な変更は述べられていない。', '新設の話ではなく、駐車場の記載もない。閉鎖理由は電気工事と嵐被害の修理である。', '売却の話は出ていない。修理は直接実施されている。'] },
      { tag: '詳細', s: 'What is indicated about the Wednesday storytime sessions?',
        c: ['They will be cancelled if the weather is poor.', 'They will require advance registration through the online booking system.',
            'They will not be held on Wednesday mornings.', 'They will be held indoors in the first-floor community room instead.'],
        a: 0,
        e: '屋外の中庭に移すが、雨天の場合は屋内に移さず中止すると明記されている。',
        w: ['正解。', 'おはなし会に事前登録が要るとは書かれていない。オンラインで受け付けているのは資料の取り置き（holds）であって、おはなし会の申し込みではない。', '第4段落は The children\'s storytime sessions, normally held in the reading room on Wednesday mornings, will move to the outdoor courtyard と述べており、変わるのは場所だけで水曜午前の開催は維持される。水曜午前に開かれないとするこの記述は本文と正面から矛盾するので偽。', '一階の会議室に移るのは受付窓口と貸出業務であり、おはなし会は屋外の中庭に移る。'] },
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
        c: ['The inspector is unavailable on the originally planned date.', 'Staff requested a different date to suit their shift patterns.',
            'The whole warehouse will close for renovation on 14 March.', 'A required spare part arrived two weeks late.'],
        a: 0,
        e: '検査員はブリストル拠点から来るが、14 日に動かせない先約があるためと説明されている。',
        w: ['正解。', 'スタッフからの要望ではなく、検査員側の先約が理由と説明されている。', '改装や休業には触れていない。日程変更の理由は検査員の先約と明記されている。', '部品の遅延には触れていない。'] },
      { tag: '詳細', s: 'What should a supervisor do if a forklift is still needed for loading at 1:00 p.m.?',
        c: ['Cancel that vehicle\'s inspection for the rest of the quarter.', 'Leave no keys in the site office.',
            'Arrange a short exemption directly with the inspector.', 'Report the vehicle as permanently out of service immediately.'],
        a: 2,
        e: '「シフト監督者が検査員と直接、短い例外対応を調整する」と明記されている。',
        w: ['検査を取りやめるのではなく、監督者が検査員と直接、短い例外対応を調整すると明記されている。', '本文は "All five forklifts must be parked in bay 6 by 1:00 p.m. on the thirteenth, with keys left in the site office." と述べており、鍵は現場事務所に預けることになっている。鍵を置くなというこの指示は本文と正面から矛盾する。', '正解。', '恒久的な稼働停止の即時報告ではない。稼働停止は不合格時の話であり、使用中に時刻を過ぎた場合は例外対応の対象になる。'] },
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
        c: ['The leather requires a multi-week conditioning process.', 'Customers rarely request faster service.',
            'Skilled staff are not always available.', 'Leather costs no more than cloth.'],
        a: 0,
        e: '革は約 3 週間かけて段階的に養生する必要があり、それを急ぐと 1 年以内の破損の主因になると説明されている。',
        w: ['正解。', '需要の話ではない。', '人員の話はない。', '本文の価格表で革の全面製本は£96 から、布は£58 からとあり、革の方が高いという記述と矛盾する。'] },
      { tag: '推測', t: ['p7inf'], s: 'What is suggested about cloth rebinding?',
        c: ['It is offered only to institutional customers, not to individuals visiting in person.', 'It does not cost less than leather rebinding for similar-sized books.',
            'It can sometimes be finished more quickly than leather rebinding.', 'It must be conditioned in stages before it can be cut.'],
        a: 2,
        e: '「工房が繁忙でなければ 10 日程度で仕上がることもある」とあり、革のような養生期間が不要とも明記されている。',
        w: ['「対面でも郵送でも無料の状態診断」とあり、個人客も対象と読める文章。', '本文の価格表で布の全面製本は£58 からで、革の£96 からより安い。革より安くならないという記述はこれと矛盾する。', '正解。', '布には革のような養生期間が不要と明記されている。段階的に養生してから裁断するのは革の工程であり、布はその工程を経ない。'] },
    ],
  }),

  /* ── 153–155 メール ───────────────────────────────── */
  sp({
    n: [153, 154, 155], lv: 4,
    docs: [{
      label: 'Letter',
      head: 'Verrell Press\n14 Gorsefield Lane, Vennmoor Cross\n9 October',
      body: [
        'Dear Dr. Naylor,',
        'I am writing with an update on the photographs you shortlisted for the plates section of Coastal Kilns, which is now moving into typesetting.',
        "Of the eleven images you selected, nine have been cleared for reproduction at no additional cost, since their licences fall under our standing agreement with the regional heritage archives. The remaining two, the kiln interior taken in 1978 and the loading-dock photograph, belong to a private collection that Verrell Press has not previously licensed from. The collection's holder has quoted a one-off fee for commercial reproduction that falls well outside the illustrations budget approved for this title, and our production office is not able to cover the difference. No other image in the eleven-item shortlist is affected, since all of the rest sit within the standing archive agreement.",
        'Rather than remove the two images outright, our picture researcher has located two alternatives that were taken by the same photographer within a few months of the originals and show comparable subject matter: a kiln interior from the same brickworks, and a separate loading-dock scene from a neighbouring site that closed the same year. Both are already held under our standing licence, so no further fee applies. I have enclosed low-resolution proofs of each for your review.',
        'Could you look these over and let me know by 24 October whether each is suitable for the section, or whether you would rather supply a replacement of your own? The typesetter needs a final image list no later than 1 November to keep the December print date, so a prompt reply would be a great help.',
      ],
      sig: 'With thanks,\nNerys Vickery\nPermissions and Rights Coordinator\nVerrell Press',
    }],
    q: [
      { tag: '詳細', qid: 'v3q153r',
        s: 'According to the letter, why could two of the photographs not be reproduced without an additional cost?',
        c: [
          "The publisher's standing agreement with regional archives had expired.",
          'The photographer had asked to be paid for each print run.',
          "The collection's owner asked for a fee beyond the illustration budget.",
          'The images needed restoration before they could be reproduced.',
        ], a: 2,
        e: '本文に「a one-off fee for commercial reproduction that falls well outside the illustrations budget approved for this title」とあり、個人コレクションの所有者が承認済みの挿絵予算を超える一括使用料を求めたと分かる。',
        w: [
          '本文は9点について「their licences fall under our standing agreement with the regional heritage archives」と現在形で述べており、包括契約は今も有効である。契約が失効したとするこの記述は本文と矛盾する。',
          '本文は「a one-off fee for commercial reproduction」と一括払いだと述べており、刷るたびに支払いを求めたという記述と矛盾する。',
          '正解。「a one-off fee for commercial reproduction that falls well outside the illustrations budget approved for this title」と、予算を超える使用料が明記されている。',
          '本文は追加費用の理由を、所有者が提示した使用料（「The collection\'s holder has quoted a one-off fee for commercial reproduction」）として説明しており、修復には触れていない。',
        ] },
      { tag: '推測', qid: 'v3q154r', t: ['p7inf'],
        s: 'What is suggested about the alternative kiln interior photograph?',
        c: [
          'It was taken by someone other than the photographer of the originals.',
          'It was taken at around the same time as the original photograph.',
          'It was taken inside a kiln at another brickworks nearby.',
          'It cannot be used in the book without a new licence.',
        ], a: 1,
        e: '「the kiln interior taken in 1978」という原本の記述と、「taken by the same photographer within a few months of the originals」という代替の記述を組み合わせると、代替もほぼ同時期の撮影と分かる。',
        w: [
          '矛盾。本文は「taken by the same photographer within a few months of the originals」と明記しており、原本の写真家とは別の人物による撮影ではない。',
          '正解。原本の一つは「the kiln interior taken in 1978」であり、代替は「taken... within a few months of the originals」なので、ほぼ同時期の撮影と分かる。',
          '矛盾。本文は「a kiln interior from the same brickworks」と述べており、代替の窯内部の写真は原本と同じ工場の内部を写したものであって、別の隣接する煉瓦工場の写真ではない。「neighbouring site」はもう一方の代替（荷降ろし場の写真）についての記述であり、この2点を混同させる誤答である。',
          '矛盾。本文は「Both are already held under our standing licence, so no further fee applies」と述べており、代替の写真はすでに包括契約の対象である。新たな使用許諾なしには使えないとするこの記述は本文と正面から矛盾する。',
        ] },
      { tag: '詳細', qid: 'v3q155r',
        s: 'What does Ms. Vickery ask Dr. Naylor to do?',
        c: [
          'State whether each substitute photograph is acceptable for use.',
          'Agree to a later print date for the book.',
          'Remove the two affected images from the plates section.',
          'Confirm the production schedule with the typesetter directly.',
        ], a: 0,
        e: '最終段落で、代替2点それぞれについて使用の可否を10月24日までに知らせてほしい、あるいは自分で別の写真を用意したいかを知らせてほしいと依頼している。',
        w: [
          '正解。「let me know by 24 October whether each is suitable for the section」と、代替2点それぞれについて使用の可否を知らせるよう依頼している。',
          '矛盾。本文は「The typesetter needs a final image list no later than 1 November to keep the December print date, so a prompt reply would be a great help」と述べており、12月の印刷日を守るために迅速な返信を求めている。印刷日を遅らせることへの同意を求めているのではない。',
          '本文は「Rather than remove the two images outright, our picture researcher has located two alternatives」と述べており、削除ではなく代替案を用意したのであって、画像を取り除く依頼ではない。',
          '返信は「let me know by 24 October」とヴィッカリー氏（差出人）宛てに求められており、著者が制作スケジュールについて植字担当者と直接やり取りする依頼ではない。',
        ] },
    ],
  }),

  /* ── 156–158 記事 ─────────────────────────────────── */
  sp({
    n: [156, 157, 158], lv: 3,
    docs: [{
      label: 'Article',
      title: 'Second Life for an Old Tram Depot',
      head: 'By Vera Gough',
      body: [
        'The old Number 9 tram depot sat empty for well over a decade after the last tram left the yard, its high glass roof gradually filmed with soot and pigeon droppings. Today the same roof shelters twenty-two stalls selling everything from smoked fish to sourdough, and on a Saturday morning the queue for coffee alone can stretch past the old inspection pit.',
        'The conversion, completed two winters ago, kept far more of the original structure than most developers would have risked. The steel roof trusses were sandblasted rather than replaced, the inspection pit was glassed over instead of filled in, and the sliding doors at the western end still sit on their original tram rails, though the turning loop they once opened onto has been paved over as a delivery yard. The timber floor, rotted beyond saving, and the brick signal cabin by the gate also had to go.',
        "Two of the market's longest-serving traders run stalls that are older than the market itself, having moved their businesses over from a covered market on Gantry Street when it closed for redevelopment. They have since been joined by newer arrivals, a Georgian-style bakery and a cheese counter stocked from three local farms, and the depot now draws customers well beyond the neighbourhood it was originally built to serve.",
        "The depot's revival has changed the block around it. Two units that had been let until the tram yard closed, and had stood empty until recently, have now been let again, one to a bicycle repair shop and the other to a small bookshop, and the traders' association is quick to point out that neither tenant sells food and both signed their leases only after the market had opened.",
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v3q156r',
        s: "According to the article, which original feature of the depot was kept in the conversion?",
        c: [
          'The metal framework beneath the glass roof',
          'The turning loop outside the western doors',
          'The timber floor inside the tram depot',
          'The brick signal cabin by the gate',
        ], a: 0,
        e: '「The steel roof trusses were sandblasted rather than replaced」とあり、ガラス屋根を支える鉄骨は撤去されず再利用されたと分かる。',
        w: [
          '正解。「The steel roof trusses were sandblasted rather than replaced」と、ガラス屋根の下の鉄骨の骨組みはサンドブラスト仕上げで再利用され、交換されなかったと明記されている。',
          '矛盾。本文は「the turning loop they once opened onto has been paved over as a delivery yard」と述べており、旋回ループは搬入用の広場へと舗装し直されている。原形のまま保存されてはいない。',
          '本文に「The timber floor, rotted beyond saving, ... also had to go」とあり、木製の床材は腐食のため撤去されたと明記されている。',
          '本文に「... and the brick signal cabin by the gate also had to go」とあり、信号小屋は撤去されたと明記されている。',
        ] },
      { tag: '同義語', qid: 'v3q157r', t: ['p7syn'],
        s: 'In paragraph 3, the word "run" is closest in meaning to',
        c: ['race', 'extend', 'operate', 'flow'], a: 2,
        e: 'この run は「（店を）経営する」の意味で使われている（Two of the market\'s longest-serving traders run stalls…）。operate も同じ「経営する」を表す。',
        w: [
          'run が race に近い意味になるのは、人や馬が主語で「レースに出る」とき（run in the Derby / run a marathon）か、馬・車などを目的語に取って「レースに出す」とき（ran his best horse in the Derby）である。本文の目的語 stalls（露店）は、レースでも、レースに出す馬や車でもないので、この語義では読めない。',
          'run が extend に近い意味になるのは、道・線などが主語で「（ある方向に）延びる」とき、契約・催しなどが主語で「（期間が）続く」とき（The contract runs for a year.）、方向を表す語句を伴ってケーブルなどを目的語に取り「這わせる」とき（run a wire along the wall）である。本文は人が主語で stalls を目的語に取り、方向や期間を表す語句も伴わないので、どの語義でも読めない。',
          '正解。run が operate に近い意味になるのは、人などが主語で店や事業を目的語に取り「経営する、運営する」ときである。"traders run stalls" はまさにこの型（人が主語で店を目的語に取る）であり、この語義で読める。',
          'run が flow に近い意味になるのは、液体・電流などが主語で「流れる」とき（Water was running off the roof.）か、水・蛇口・風呂などを目的語に取って「（水を）流す、出す」とき（He ran the tap. / run a bath）である。本文は人が主語で stalls（露店）を目的語に取っており、液体にも蛇口にも当たらないので、この語義では読めない。',
        ] },
      { tag: '推測', qid: 'v3q158r', t: ['p7inf'],
        s: 'What is suggested about the two new tenants near the depot?',
        c: [
          "The two new tenants belong to the market's management company.",
          'The two new tenants work in trades unrelated to food.',
          'The two new tenants occupy units with no prior letting history.',
          'The two new tenants signed their leases before the market opened.',
        ], a: 1,
        e: '「one to a bicycle repair shop and the other to a small bookshop」「neither tenant sells food」とあり、新しく入った2店舗は食品と無関係の業種と分かる。',
        w: [
          '本文に出てくる組織は「the traders\' association」だけで、市場の経営会社には触れていない。',
          '正解。「one to a bicycle repair shop and the other to a small bookshop」「neither tenant sells food」から、2店舗は食品と無関係の業種と分かる。',
          '矛盾。本文は「Two units that had been let until the tram yard closed」と述べており、この2区画は路面電車の車庫が閉鎖するまでずっと借り手が付いていた。以前の借り手の記録が無いとするこの記述は本文と正面から矛盾する。',
          '矛盾。本文は「both signed their leases only after the market had opened」と述べており、2人の新しい借り手が契約に署名したのは市場の開業より後である。市場が開く前に署名したとするこの記述は本文と正面から矛盾する。',
        ] },
    ],
  }),

  /* ── 159–160 フォーム ─────────────────────────────── */
  sp({
    n: [159, 160], lv: 3,
    docs: [{
      label: 'Feedback form',
      title: 'Post-Course Feedback Form',
      body: [
        { t: 'kv', pairs: [
          ['Course', 'Workplace First Aid – One-Day Certificate'],
          ['Date', '14 September'],
          ['Venue', 'Greymoor Community Hall, Room 2'],
          ['Instructor', 'N. Kessler'],
        ] },
        { t: 'table', head: ['Aspect', 'Rating (Excellent, Good, Fair, Poor)'], rows: [
          ['Course content', 'Excellent'],
          ["Trainer's pace", 'Good'],
          ['Hands-on practice time', 'Fair'],
          ['Course handouts', 'Excellent'],
        ] },
        "The bandaging practice ran out of time before everyone had a turn, and the room felt quite cramped once the mannequins were laid out. There was no time left for the planned defibrillator demonstration. I'd have liked a follow-up session in a few months to keep the CPR steps fresh, but the trainer explained each step clearly and answered every question we raised.",
      ],
    }],
    q: [
      { tag: 'NOT', qid: 'v3q159r', t: ['p7not'],
        s: 'What is NOT indicated on the form?',
        c: [
          'The community hall hosted the course.',
          "The trainer's explanations were hard to follow.",
          'The course handouts received the highest rating.',
          'The participant would have liked a later review session.',
        ], a: 1,
        e: '表の下の自由記述には「the trainer explained each step clearly and answered every question we raised」とあり、説明が分かりにくかったという記述はない。他の3つは書式上部の欄・表・自由記述にそれぞれ記載されている。',
        w: [
          '書式上部の Venue 欄に「Greymoor Community Hall, Room 2」とあり、地域の集会施設で開催されたことは記載されている。',
          '正解。表の下の自由記述は「the trainer explained each step clearly and answered every question we raised」と述べており、説明が分かりにくかったという記述はない。むしろ明快だったとある。',
          '表の Course handouts の行に「Excellent」とあり、最高評価を得たことは記載されている。',
          '表の下の自由記述に「I\'d have liked a follow-up session in a few months to keep the CPR steps fresh」とあり、後日の復習セッションを希望する記述がある。',
        ] },
      { tag: '推測', qid: 'v3q160r', t: ['p7inf'],
        s: 'What is suggested about the training session?',
        c: [
          'The room had no shortage of space for the mannequins.',
          'The trainer demonstrated how to use a defibrillator.',
          'The course taught participants how to perform cardiopulmonary resuscitation.',
          'The participant found the course content unsatisfactory.',
        ], a: 2,
        e: '表の下の自由記述の「to keep the CPR steps fresh」と「the trainer explained each step clearly」から、この講習でCPRの手順が教えられたと分かる。',
        w: [
          '矛盾。本文は「the room felt quite cramped once the mannequins were laid out」と述べており、マネキンを並べた後は室内が混み合っていたとある。マネキン用のスペースが不足していなかったとするこの記述は本文と正面から矛盾する。',
          '矛盾。本文は「There was no time left for the planned defibrillator demonstration」と述べており、AED（除細動器）の使用法の実演は時間切れで行われなかった。実演を行ったとするこの記述は本文と正面から矛盾する。',
          '正解。「to keep the CPR steps fresh」とあり、この講習でCPRの手順（心肺蘇生法）も扱われ、受講者に教えられたことが分かる。',
          '表では Course content は Excellent（最高評価）であり、内容に不満だったという記述と矛盾する。',
        ] },
    ],
  }),

  /* ── 161–164 記事（文挿入あり）─── 書き下ろし：観測所ドームの改修（算術で閉じる型） ──
     この1ユニットだけ sp() を使わず直接オブジェクトを書く（CLAUDE.md の
     「中身を実質的に変えたら id を新規採番する」に従い qid を手で採番するため。
     この R2 の sp() は qid オーバーライドを持たないので、ここだけ手書きにする）。 */
  {
    id: 'v3-p7-161', part: 7, kind: 'doc', topics: ['p7ins'],
    level: 5, docCount: 1,
    docs: [{
      label: 'Article',
      title: "Cairnholm's April Closure, Two Years On",
      head: 'The Meridian Circular, No. 63',
      body: [
        "Across Britain's amateur observatories, the number of usable nights in a year — clear skies, with the dome fit to open — typically runs from about a hundred and fifteen to a hundred and forty. — [[1]] — Committees rarely publish the figure, since one wet winter can drag a good site's average down for years.",
        "Cairnholm Community Observatory, run by volunteers above the village, had long under-performed sites of similar size. A survey commissioned by the society found no distortion in the aluminium panels of the shutter leaf, no fraying in the winch cable that draws it across, and no movement in the bolted joints of its frame; what it did report was that the runners in the shutter track had rusted solid in their housings. The shutter could therefore no longer be drawn fully home, and on damp evenings moisture crept in through the gap it left and misted the primary mirror before a session began. — [[2]] — Over the five years before repairs began, the logbook shows an average of just ninety-two usable nights a year.",
        "Repairing the shutter meant taking the dome fully out of action. A new sealed, motorised shutter replaced the old sliding one, and the shutter track was renewed along its whole length. The society considered spreading the work over several weekends instead, but dropped the idea once the contractor warned that a phased repair would leave the track only half renewed, and the shutter still leaking, for most of a season. — [[3]] — The full closure took three weeks in April, during which no public sessions were held.",
        "The results were more dramatic than expected. In the two years since the new shutter went in, the observatory has logged an average of a hundred and thirty-three usable nights a year, with none lost to a misted mirror. — [[4]] — Membership enquiries have also risen, though the society credits the clearer skies rather than any recruitment drive for the jump.",
        "The lesson the society draws is practical: a repair that looks costly on its own can be the cheapest thing an observatory ever does, if the fault it fixes keeps recurring. Cairnholm's smaller coastal site, which has the same ageing dome, closes to observers each winter and is now due for an identical repair when it reopens next spring.",
      ],
    }],
    questions: [
      {
        id: 'v3q161r2', no: 161, tag: '詳細', topics: ['p7detail'],
        stem: 'According to the article, what had gone wrong with the dome before the repairs began?',
        choices: [
          'The panels in the shutter leaf had buckled.',
          'The runners in the shutter track had seized.',
          'The cable on the shutter winch had frayed.',
          'The bolts in the shutter frame had loosened.',
        ],
        answer: 1,
        exp: '第2段落によれば、協会が依頼した点検は、シャッター本体のアルミ板に歪みを認めず、引き込み用ウインチのケーブルにもほつれを認めず、枠のボルト接合部にも緩みを認めなかった。報告されたのは、シャッター軌道の走行子が錆びついて固着していたことである。そのためシャッターを最後まで引き切れず、残った隙間から湿った晩に湿気が入り込んで主鏡を曇らせていた。',
        why: [
          'シャッター本体のアルミ板については、点検が「歪みは見られなかった（no distortion）」と報告しており、本文と矛盾する。',
          '正解。シャッター軌道の走行子が錆びついて固着していたため、シャッターが最後まで閉まらず、残った隙間から湿気が入り込んだ。',
          'シャッターを引くウインチのケーブルについては、同じ点検が「ほつれは見られなかった（no fraying）」と報告しており、本文と矛盾する。',
          'シャッター枠のボルト接合部については、同じ点検が「緩みは見られなかった（no movement）」と報告しており、本文と矛盾する。',
        ],
      },
      {
        id: 'v3q162r', no: 162, tag: '詳細', topics: ['p7detail'],
        stem: 'Why did the society decide against repairing the shutter in stages?',
        choices: [
          'The weekend contractors could not commit to extra days.',
          'The necessary replacement parts still remained on national order.',
          "The observatory's site insurance required a single closure period.",
          'The leak would go unresolved most of the season.',
        ],
        answer: 3,
        exp: '業者から、段階的な工事ではシャッター軌道の更新が中途半端にしか進まず、シーズンの大半でシャッターからの漏れが残ると指摘されたため、一括工事に切り替えたと説明されている。',
        why: [
          '週末の業者確保が難しかったという記載はない。',
          '交換部品の入荷待ちについては本文に記載がない。',
          '保険上の制約についても本文に記載はない。',
          '正解。',
        ],
      },
      {
        id: 'v3q163r', no: 163, tag: '位置選択', topics: ['p7ins'],
        insertAt: 4,
        sentence: 'The gain of forty-one usable nights easily outweighed the three weeks the dome spent out of action.',
        stem: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"The gain of forty-one usable nights easily outweighed the three weeks the dome spent out of action."',
        choices: ['[1]', '[2]', '[3]', '[4]'],
        answer: 3,
        exp: '「41 夜分の増加」という差分は、改修前の 92 夜（第2段落）と改修後の 133 夜（第4段落）が出そろって初めて成立し、すでに示されている「3週間の休止」（第3段落）と過不足なく突き合わせられる。両方の夜数が出そろった直後である [4] でのみこの定名詞句が成立する。',
        why: [
          '[1] の前後は業界一般の水準（年 115〜140 夜程度）の話にとどまり、Cairnholm 固有の観測夜数はまだ一つも登場していない。',
          '[2] の前後ではシャッター軌道の走行子が固着していたという原因は述べられているが、具体的な 92 という夜数はこの文の直後に初めて示され、133 も未登場である。',
          '[3] の前後で判明しているのは改修前の 92 夜だけで、改修工事が3週間続いたという事実は直後の文で初めて示され、改修後の 133 夜もまだ登場していない。',
          '正解。92 夜（改修前）と 133 夜（改修後）がここまでに出そろっており、133−92＝41 という「forty-one usable nights」の増加分と、すでに示されている「three weeks」の休止期間とを、過不足なく突き合わせられる。',
        ],
      },
      {
        id: 'v3q164r2', no: 164, tag: '推測', topics: ['p7inf'],
        stem: "What is suggested about Cairnholm's coastal satellite site?",
        choices: [
          'It has a shutter of a newer sealed type.',
          'It has a dome due for work this coming autumn.',
          'It has a dome of the same ageing design.',
          'It has a dome kept open through the winter months.',
        ],
        answer: 2,
        exp: '最終段落に、Cairnholm のより小さな沿岸施設は「同じ老朽化したドーム（the same ageing dome）」を持ち、冬のあいだは観測を休み、春に再開する時点で同一の改修を受ける予定だとある。ドームの様式が本体と同じであることが示唆されている。',
        why: [
          '沿岸施設はこれから同一の改修を受ける段階であり、密閉式・電動のシャッターが入ったのは4月に改修した本体のドームのほうである。',
          '改修の時期は「冬季休止を経て再開する来春」と本文が明記しており、秋ではない。',
          '正解。',
          '沿岸施設は冬のあいだ観測者に対して閉じる（closes to observers each winter）と明記されており、冬も開けているという内容と矛盾する。',
        ],
      },
    ],
  },
];
