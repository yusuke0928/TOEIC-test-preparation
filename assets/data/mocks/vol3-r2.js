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
            'To report that no additional cost is involved', 'To propose a change to an agreed lighting design'],
        a: 3,
        e: '「単一の色温度」という当初の依頼に対し、2 つのゾーンに分ける提案をしている。',
        w: ['遅延の報告ではない。', '依頼を辞退してはいない。', '本文は "The two-zone approach adds roughly twelve percent to the fixture cost" と述べており、提案には約 12% の追加費用がかかる。追加費用が生じないとするこの記述は本文と正面から矛盾する。', '正解。'] },
      { tag: '詳細', s: 'What did Ms. Oyelaran observe during the gallery visit?',
        c: ['The gallery was smaller than her original plan assumed.', 'The existing lighting was too dim throughout.',
            'Visitors moved through different parts of the gallery at different speeds.', 'Visitor numbers were lower than expected.'],
        a: 2,
        e: '入口付近では素早く動き、奥では立ち止まってじっくり見るという、来場者の動き方の違いを観察している。',
        w: ['広さの話は出ていない。', '照明の暗さには触れていない。', '正解。', '来場者数には触れていない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does Ms. Oyelaran imply about matching the Ceramics wing exactly?',
        c: ['It would breach the conservation guidelines.', 'It would exceed the museum\'s electrical capacity.',
            'It would cause visitors to overlook fragile textile pieces.', 'It would require fixtures that are no longer manufactured or supplied.'],
        a: 2,
        e: '「陶磁器と同じ照明では、繊細な織物の前でも立ち止まらずに通り過ぎやすくなる」という趣旨の指摘。',
        w: ['ガイドラインが禁じているとは述べていない。', '電力容量には触れていない。', '正解。', '製造終了や供給停止についての記載はない。'] },
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
        c: ['It reduced the number of supervisors per shift.', 'It introduced a face-to-face handover between supervisors.',
            'It replaced written safety notes with an audit system.', 'It automated part of the packaging line.'],
        a: 1,
        e: '「書面の引き継ぎメモの代わりに、交代前後の責任者が5分間並んで立つ」対面の引き継ぎに変えたとある。',
        w: ['人員削減には触れていない。', '正解。', '監査制度の話ではない。', '自動化の話はない。'] },
      { tag: '詳細', s: 'What was unusual about the tracking of the change?',
        c: ['It continued for three years rather than the more typical shorter period.', 'It found no effect after year one.',
            'It covered every line in the factory from the outset.', 'It relied on an outside hospital consultant.'],
        a: 0,
        e: '「この程度の小さな変更にしては珍しく」3 年間の追跡調査を行った点が特異だと述べている。',
        w: ['正解。', '第3段落は the effect grew rather than faded、By year three, such stoppages were down 71 percent from the baseline と、効果が初年度以降も伸びたことを明記している。初年度より後に効果が見られなかったとするこの記述は本文と正面から矛盾するので偽。', '当初は 1 ラインのみで開始。', '外部コンサルタントの話はない。'] },
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
        c: ['Passes for it are produced on Mondays only.', 'It requires annual confirmation from the safety officer.',
            'It carries an additional monthly charge.', 'It requires written confirmation of a safety module.'],
        a: 3,
        e: '「レーザーカッターの安全講習を修了したことを工房会員が書面で確認した場合にのみ発行」と明記。',
        w: ['書式末尾は Passes are produced on Mondays and Thursdays と、月曜と木曜の両方に発行することを明記している。月曜のみとするこの記述は本文と正面から矛盾するので偽。', '書面で確認するのは工房会員であって安全担当者ではない。年次の再確認も定められていない。', '追加料金の記載はない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What can be inferred if the confirmation is missing?',
        c: ['The request will be rejected outright.', 'One person will be issued a pass with restricted hours.',
            'The membership will be suspended.', 'A fee will be charged for reissue.'],
        a: 1,
        e: '「確認がない場合は日中アクセスとして発行され、後で無料で切り替えられる」とある。24 時間を求めた R. Ostrowski の分が日中に制限される。',
        w: ['却下ではなく条件付きで発行される。', '正解。', '停止の話はない。', '切り替えは無料と明記。'] },
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
