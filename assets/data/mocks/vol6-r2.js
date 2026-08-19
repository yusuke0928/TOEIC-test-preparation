/* =============================================================
   予想模試 Vol.6 — Part 7 単一文書 前半（No.147–164）
   ============================================================= */

const sp = (o) => ({
  id: `v6-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。 */
    id: x.qid || `v6q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
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
      title: 'Aldercroft Tower — Ground-Floor Café Closure for Renovation',
      head: 'Issued by Merrifield Realty Group, Building Management',
      body: [
        'The ground-floor café will close for renovation from Monday, 21 September, through Friday, 9 October, reopening the following Monday.',
        'During the closure, a coffee cart will operate in the lobby on weekday mornings from 7:30 to 10:30, with seating limited to the two benches near the mail room while the café’s furniture is in storage.',
        'The vending machines on the third and fifth floors are unaffected and will be stocked as usual.',
        'Tenants needing a private space for outside visitors should reserve the fourth-floor meeting suite in advance, since walk-in use will not be possible while seating is limited.',
        'Ravenscourt Contracting is carrying out the work on Merrifield Realty Group’s behalf; questions about the schedule should go to the site supervisor, whose card is posted at the coffee cart.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What is indicated about the coffee cart?',
        c: ['It will operate on weekends as well as weekdays.', 'It will offer more seating than the café normally provides.',
            'Its seating will be limited compared with the café’s usual seating.', 'It replaces the vending machines on the upper floors.'],
        a: 2,
        e: '第2段落に「席は郵便室近くのベンチ2つに限られる。café の家具は工事のあいだ保管庫に入っている」とあり、通常より席数が少ないと分かる。',
        w: ['第2段落は営業を「平日の朝、7時30分から10時30分まで」と限定しており、週末の営業と矛盾する。',
            '第2段落は「café の家具が保管中で、席はベンチ2つに限られる」と述べており、通常より席が増えるという記述と正面から矛盾する。',
            '正解。', '第3段落で上階の自販機は「この工事の影響を受けず、通常どおり補充される」と明記されており、置き換えではない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What is implied about Merrifield Realty Group?',
        c: ['It manages only the ground-floor café.', 'It will provide free coffee during the closure.',
            'It owns the fourth-floor meeting suite exclusively for visitors.', 'It is having the renovation carried out by an outside company.'],
        a: 3,
        e: '最終段落に「Ravenscourt Contracting が Merrifield Realty Group に代わって工事を行っている」とある。別の社名を持つ事業者が代わりに作業する以上、工事は自社ではなく外部に委託されていると分かる。',
        w: ['見出しに「Merrifield Realty Group, Building Management 発行」とあり、本文も上階の自販機・4階の会議室・テナント全般に及ぶ。管理対象がカフェのみだという記述と矛盾する。',
            '無料提供の記述はない。飲み物の代金については本文のどこにも触れていない。',
            '第4段落は「外部からの来客用に個室が要るテナントは事前に予約すること」と述べるだけで、来客対応専用だとは書かれていない。', '正解。'] },
    ],
  }),

  /* ── 149–150 テキストメッセージ ───────────────────── */
  sp({
    n: [149, 150], lv: 5, t: ['p7intent'],
    docs: [{
      label: 'Text message chain',
      body: [{ t: 'chat', lines: [
        { who: 'Dax Mwangi', time: '10:05', text: 'Marit, the convection oven in Van 2 won’t hold above 140 degrees. Thermostat’s stuck.' },
        { who: 'Marit Berglund', time: '10:07', text: 'Can you reset the breaker and try again?' },
        { who: 'Dax Mwangi', time: '10:09', text: 'Tried twice. Same reading both times.' },
        { who: 'Marit Berglund', time: '10:12', text: 'The Bellrose trays need to finish by eleven. Can you swap ovens with Van 1?' },
        { who: 'Dax Mwangi', time: '10:14', text: 'Van 1’s already loaded for a different order — pulling those trays now would set that one back instead.' },
        { who: 'Marit Berglund', time: '10:17', text: 'Then call the Havelock Deli next door. Ines lets us use her second oven when we’re stuck, same as she did in March.' },
        { who: 'Dax Mwangi', time: '10:19', text: 'Her oven is half the size of ours.' },
        { who: 'Marit Berglund', time: '10:21', text: 'Two loads, then. I’ll tell the client the trays might run about twenty minutes behind.' },
      ] }],
    }],
    q: [
      /* id は v6q149r（no は 149 のまま。中身を差し替えたため設問 id は新規採番）。
         2026-08-18 の一括照合で差し替え。旧版は引用が "That works." で、正解が
         「直前に出された代案に同意している」だった。vol1-r2.js の同じスロット No.149
         （テキストチェーン・意図問題・引用 "That is what I was hoping to hear."・
         正解 She agrees with the solution being offered.・同じ選択肢位置 0）と
         命題も装置も一致していた。どちらも「車載機材が故障 → 上司が代案を出す →
         短い肯定で受ける」という同型で、本文を読まなくても選べる状態だった。
         引用を「代案の制約を指摘する」発話に替え、正解も含意の読み取りに組み替えてある。 */
      { tag: '意図', t: ['p7intent'], qid: 'v6q149r',
        s: 'At 10:19, what does Mr. Mwangi most likely mean when he writes, "Her oven is half the size of ours"?',
        c: ['The trays will have to be baked in more than one batch.', 'The deli’s oven cannot reach the temperature the trays need.',
            'He would prefer to swap ovens with Van 1 after all.', 'The client has already been told that the trays will be late.'],
        a: 0,
        e: '直前の 10:17 でベルグルンドが隣のデリのオーブンを借りる案を出しており、10:19 はその容量への指摘。直後の 10:21 でベルグルンドが Two loads, then.（では2回に分けて）と受け、遅れの見込みを10分から20分に引き上げていることが、指摘の趣旨が「一度に全部は入らない」であることを裏づけている。',
        w: ['正解。',
            '述べているのは大きさであって温度ではない。温度が問題になっているのは Van 2 のオーブン（140度より上がらない）のほうで、デリのオーブンの温度には触れていない。',
            '10:14 で本人が「Van 1 はすでに別の注文で積み込み済みで、今そのトレーを降ろせばそちらが遅れるだけだ」と述べて入れ替え案を退けており、それを撤回する発言はない。',
            '10:21 の「客に伝える」はこれから行う連絡であり、すでに伝えたとは述べられていない。'] },
      { tag: '詳細', s: 'What has Mr. Mwangi already done in response to the fault?',
        c: ['He has reset the breaker and checked the reading twice.', 'He has moved the trays into the oven in Van 1.',
            'He has telephoned the shop next door.', 'He has replaced the thermostat.'],
        a: 0,
        e: '10:07 でベルグルンドが「ブレーカーを入れ直してもう一度試して」と指示し、10:09 で「2回試した。どちらも同じ数値だった」と答えている。',
        w: ['正解。',
            '10:14 で「Van 1 はすでに別の注文で積み込み済みで、今トレーを降ろせばそちらが遅れる」と述べており、移してはいない。',
            '隣のデリに電話することは 10:17 に出された提案であり、すでに電話したとは述べていない。',
            'サーモスタットについては「固まっている」と報告しただけで、交換したとは述べていない。'] },
    ],
  }),

  /* ── 151–152 広告 ─────────────────────────────────── */
  sp({
    n: [151, 152], lv: 4,
    docs: [{
      label: 'Advertisement',
      title: 'Crestholm Device Repair — On-Site Screen & Battery Service for Offices',
      body: [
        'Cracked screens and failing batteries, fixed at your desk without a trip to a shop.',
        { t: 'list', items: [
          'Same-day repair for most phone and tablet models, most jobs finished within forty-five minutes',
          'Technicians carry parts for the twelve most common office models; anything else is quoted before work begins',
          'A loaner device provided free whenever a repair is expected to take longer than two hours',
          'Group bookings of five or more devices get a technician for the afternoon rather than separate visits',
        ] },
        'Book repairs for five or more devices this month and the diagnostic fee is waived for every device in the booking. The offer does not cover water-damaged devices, which require a separate assessment fee regardless of booking size.',
        'To arrange a visit, add the devices to the online form on our site; we confirm the technician’s arrival window the same working day.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What is available without an additional charge?',
        c: ['Assessment of a water-damaged device.', 'A loaner device when a repair is expected to exceed two hours.',
            'Parts for any model, carried on every visit.', 'Waiver of the diagnostic fee for any number of devices.'],
        a: 1,
        e: '箇条書きの3点目に「2時間を超えると見込まれる修理の場合、代替機を無料で提供する」と明記されている。',
        w: ['第3段落に「水濡れ端末には予約台数にかかわらず別途評価料がかかる」とあり、無償ではない。',
            '正解。',
            '箇条書きの2点目は「技術者が携行するのは最も一般的な12機種の部品で、それ以外は着手前に見積もる」と述べており、全機種分を携行するという記述と矛盾する。',
            '第3段落は診断料の免除を「今月5台以上の端末の修理を予約した場合」に限っており、台数を問わないという記述と矛盾する。'] },
      { tag: 'NOT', t: ['p7not'], s: 'What is NOT indicated about the current promotion?',
        c: ['It requires at least five devices.', 'It does not apply to water-damaged devices.',
            'It waives the diagnostic fee for every device in the booking.', 'It requires payment in advance.'],
        a: 3,
        e: '第3段落は対象条件（5台以上）・除外（水濡れ端末）・特典内容（予約に含まれる全端末の診断料免除）の3点を挙げるが、支払いの時期については本文のどこにも触れていない。',
        w: ['第3段落に「今月5台以上の端末の修理を予約すれば」と明記されている。',
            '第3段落に「この特典は水濡れ端末には適用されない」と明記されている。',
            '第3段落に「予約に含まれる全端末の診断料を免除する」と明記されている。', '正解。'] },
    ],
  }),

  /* ── 153–155 メール ───────────────────────────────── */
  /* 2026-08-18 の再監査で全面差し替え。旧版は社内の品質管理メール（女性が同僚へ／下の名前で
     署名／出荷前に表示の誤りが見つかる → 対処案が2つ、一方は固定日数の遅延 → まだ動いておらず
     先に法務の意見が欲しい）で、vol1-r2.js の同スロットと骨格が同型だったうえ、No.153（目的）と
     No.155（推測）の正解がどちらも「対処法をまだ決めていない」という同じ命題に乗っていた。
     差出人と受取人の関係（社外の取引先 → 顧客）・署名の形・設問の根拠をすべて別に組み替え、
     設問 id も新規採番している。
     2026-08-18 のレビューで、さらに No.153 の誤答Aを差し替えた。4択のうち正解だけが
     `explain … and …` の複合構造で他3つが単文という、CLAUDE.md が名指しで挙げている書き癖に
     当たっていたため（本文を読まずに「一番説明的なやつ」で当てられる）。誤答Aも複合構造にし、
     4択の語数を12語に揃えた。 */
  sp({
    n: [153, 154, 155], lv: 5,
    docs: [{
      label: 'E-mail',
      head: 'To: d.mostyn@larkmeadhotel.com\nFrom: r.teixeira@quennell-linen.com\nDate: 4 October\nSubject: Larkmead collections moving to the morning run',
      body: [
        'Dear Mr. Mostyn,',
        'From Monday 20 October the soiled-linen collection at Larkmead moves from 19:30 to 05:45. Our evening vehicle has been committed elsewhere, and only the morning run has the capacity for your volume. Deliveries of clean linen are unaffected and will keep to 14:00.',
        'Bags must be waiting on the goods dock by 05:30. The driver cannot wait while the last of the night’s linen is brought down.',
        'One consequence is worth setting out. At present your floor staff point out anything needing specialist stain treatment as the driver loads, and he sets those pieces aside. On the morning run the dock is unstaffed, so treatment items must be sealed in the red bags we supply and labelled as the rooms are stripped. Anything reaching us loose goes through the standard wash, which sets several common marks permanently.',
        'Could you confirm by Friday which of the two dock doors the bags will be left at? The driver’s route card has to be amended first.',
        'Kind regards,\nRosamund Teixeira\nAccount Manager, Quennell Linen Services',
      ],
    }],
    q: [
      { tag: '概要', qid: 'v6q153r', s: 'Why did Ms. Teixeira write to Mr. Mostyn?',
        c: ['To apologize for a missed collection and to arrange a replacement visit',
            'To explain a change of collection time and what it will require',
            'To announce an increase in the charge for each bag of linen',
            'To ask the hotel to move its clean-linen delivery to the morning'],
        a: 1,
        e: '第2段落で10月20日から回収時刻が19:30から05:45に移ることを告げ、第3段落以降で、そのために宿泊施設の側で何が変わるか（5:30までに袋を出すこと、染み抜きの必要な品の出し方）を順に説明している。変更の通知と、それに伴って相手側がすべきことの説明が用件である。',
        w: ['回収漏れには一言も触れていない。本文が扱っているのは10月20日以降の回収時刻の変更であって、過去の回収についての詫びや代替の手配ではない。',
            '正解。',
            '料金には一切触れていない。金曜までに返答を求めているのも、袋を置く搬入口の扉がどちらかという点である。',
            '第2段落に「清潔なリネンの配達は影響を受けず、これまでどおり14:00のままだ」とあり、配達を朝に移すよう求めているという内容と矛盾する。'] },
      { tag: '詳細', qid: 'v6q154r', s: 'What does the e-mail say must be done by 05:30?',
        c: ['The linen bags must be waiting on the goods dock.',
            'The bags must be taken to the hotel’s front entrance.',
            'The depot must be telephoned to confirm the collection.',
            'The weekly count of the linen in store must be finished.'],
        a: 0,
        e: '第3段落に「袋は5:30までに搬入口（goods dock）に出て待っていなければならない。運転手は夜勤最後のリネンが下りてくるのを待てない」とある。',
        w: ['正解。',
            '第3段落は置き場所を goods dock と明記しており、正面玄関に運ぶという内容と矛盾する。第5段落で確認を求めているのも、搬入口にある2つの扉のどちらかという点である。',
            '営業所へ電話して回収を確認せよという記述は本文のどこにもない。',
            '在庫リネンの棚卸しについては本文のどこにも触れていない。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v6q155r', s: 'What is implied about items that need specialist stain treatment?',
        c: ['They will no longer be accepted by the laundry.',
            'They are collected on a vehicle separate from the rest.',
            'They cost more to launder than they did before.',
            'They will have to be identified before the driver arrives.'],
        a: 3,
        e: '第4段落によれば、これまでは運転手が積み込む場に居合わせた現場スタッフが染み抜きの必要な品を指し示し、運転手がそれを脇に取り分けていた。しかし朝の便では搬入口に人がいない。そのため本文は、客室からリネンを外す時点で赤い袋に入れて封をし、表示を付けるよう求めている。選別は運転手が着く前に済ませておかなければならない、ということである。',
        w: ['第4段落は染み抜きの必要な品を赤い袋に入れて出すよう求めており、今後は受け付けないという内容と矛盾する。',
            '別の車両で回収するという記述は本文のどこにもない。第2段落によれば回収は朝の便に一本化される。',
            '料金については本文のどこにも触れていない。',
            '正解。'] },
    ],
  }),

  /* ── 156–158 記事 ─────────────────────────────────── */
  sp({
    n: [156, 157, 158], lv: 5,
    docs: [{
      label: 'Article',
      title: 'The Rooftops Are Buzzing Again',
      head: 'By Helene Delaney',
      body: [
        'Inspectors at the beekeepers’ association say they can no longer keep up with applications for rooftop hive permits, and new keepers are now told to expect a three-month wait before their first site visit.',
        '"Ours are surrounded by concrete for three streets in every direction, and the bees still bring back more honey than the hives I kept at my parents’ farm," says Rory Tolliver, who keeps four hives above a hotel kitchen.',
        'The association’s own data backs him up. Hives within half a kilometre of a city park produced, on average, less honey last year than hives with no park nearby at all. The association’s inspector, Devika Rajaratnam, thinks she knows why: parks are mown on a fixed schedule, which removes clover and dandelion just as they flower, while the mixed planting along streets and in window boxes blooms at less predictable times and is rarely all cut down at once.',
        'Registration is free, but new keepers must complete a one-day course and agree to a spring hive inspection. Ms. Rajaratnam says the course exists less to teach beekeeping than to explain the city’s rules on hive placement, since a badly sited hive is the most common source of neighbour complaints.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What does Mr. Tolliver say about his rooftop hives?',
        c: ['They are close to a large garden.', 'They produce more honey than the hives he once kept on a farm.',
            'They require a special course to maintain.', 'They were relocated from another rooftop.'],
        a: 1,
        e: '第2段落の発言に「どちらを向いても3ブロック分はコンクリートに囲まれているのに、実家の農場で飼っていた巣箱より多くの蜜を持ち帰る」とある。',
        w: ['同じ発言が「どちらを向いても3ブロック分コンクリートに囲まれている」と述べており、大きな庭が近くにあるという記述と矛盾する。',
            '正解。',
            '第4段落の一日講習は新規の飼育者の登録要件であって、既存の巣箱を維持するのに講習が要るとは書かれていない。',
            '別の屋上から移設したとは述べていない。'] },
      { tag: '詳細', s: 'According to the article, what does Ms. Rajaratnam suggest about city parks?',
        c: ['Parks attract more pests than street planting.', 'Parks are too far from most rooftop hives to matter.',
            'Parks require special permission for hive placement.', 'Parks are mown in a way that removes flowers just as they bloom.'],
        a: 3,
        e: '第3段落で「公園は決まった周期で刈られ、クローバーやタンポポが咲くちょうどその時期に取り除かれてしまう」と述べている。',
        w: ['害虫には触れていない。比較されているのは開花の時期と刈り取りの周期である。',
            '第3段落は「公園から半キロ以内の巣箱のほうが、公園が近くにない巣箱より採蜜量が少なかった」と述べており、距離が遠くて影響しないという記述と矛盾する。',
            '本文が触れているのは屋上の巣箱の許可申請と市の設置ルールで、公園に特別な許可が要るとは書かれていない。',
            '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What is implied about the one-day course for new beekeepers?',
        c: ['It is required only for hives above a certain size.', 'It replaced an earlier, longer training programme.',
            'It focuses mainly on preventing complaints from neighbours.', 'It is taught by Mr. Tolliver.'],
        a: 2,
        e: '第4段落は「講習の目的は養蜂の技術を教えることより設置ルールの説明にある。設置場所が悪い巣箱が近隣の苦情の最大の原因だからだ」と述べており、苦情の予防が主眼だと分かる。',
        w: ['第4段落は「新規の飼育者は一日講習を修了しなければならない」と例外なく述べており、規模による限定と矛盾する。',
            '以前の講習との入れ替わりには触れていない。',
            '正解。', '誰が教えるかは述べていない。'] },
    ],
  }),

  /* ── 159–160 フォーム ─────────────────────────────── */
  sp({
    n: [159, 160], lv: 4,
    docs: [{
      label: 'Form',
      title: 'Halstead Sports Centre — Facilities Fault Report',
      body: [
        { t: 'kv', pairs: [
          ['Submitted by', 'Ngozi Okwuosa, Badminton Section Coordinator'],
          ['Location', 'Court 3, Badminton Hall'],
          ['Contact', 'Extension 214'],
          ['Submitted', '5 June'],
        ] },
        { t: 'table',
          head: ['Item', 'Priority', 'Notes'],
          rows: [
            ['Net winder — handle broken', 'Urgent', 'Reported by two coaches since Friday'],
            ['Shuttlecock bin — lid missing', 'Routine', 'Bin left by the court 3 entrance'],
            ['Scoreboard — display dim', 'Routine', 'Batteries replaced by the section last week; still dim'],
          ] },
        'Facilities use only: items marked "Urgent" are passed to the duty technician on the day of submission. Items marked "Routine" wait for the contractor’s next fortnightly visit, except where the notes record a repair the section has already attempted; those are booked as separate call-outs, since a fault that has survived one attempt is rarely settled on a routine visit. Reports that leave the location blank are returned to the submitter.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What do the notes say about the net winder?',
        c: ['It has been reported by more than one person.', 'It was repaired by the section during the previous week.',
            'It is the item left by the court 3 entrance.', 'It is to be replaced rather than repaired.'],
        a: 0,
        e: '表のネットワインダーの行の備考に「金曜以降、コーチ2名から報告あり」とあり、報告者が複数いることが読み取れる。',
        w: ['正解。',
            '先週セクションが交換したのは得点板の電池で、これは得点板の行の備考である。ネットワインダーの行に修理の記録はない。',
            'コート3の入口に置かれているのはシャトルコック用ボックスで、これは別の行の備考である。',
            '交換するか修理するかについては、表にも注記にも記載がない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What can be inferred about the scoreboard?',
        c: ['It has been reclassified as urgent.', 'It will be booked as a separate call-out rather than waiting for the fortnightly visit.',
            'It will wait for the contractor’s next fortnightly visit, as the other routine item will.', 'It will be returned to the submitter because the location was left blank.'],
        a: 1,
        e: '注記は「Routine の項目は業者の次回隔週訪問を待つ。ただし備考にセクション自身が試みた修理が記録されている項目は、別枠の出張として手配する」と定めている。得点板の備考は「先週セクションが電池を交換したが、まだ表示が暗い」で、この例外に当たる。',
        w: ['注記が定めているのは手配のしかたであって、優先区分の付け替えではない。表の Priority 欄は Routine のままで、Urgent に変えるとは書かれていない。',
            '正解。',
            '隔週訪問を待つのは、修理を試みた記録がないシャトルコック用ボックスの行である。得点板の行は注記の例外に当たり、別枠で手配される。',
            'Location 欄に Court 3, Badminton Hall と記入があり、注記の「場所欄が空欄の報告は差出人に返す」に当たらない。'] },
    ],
  }),

  /* ── 161–164 記事（文挿入あり）───────────────── */
  sp({
    n: [161, 162, 163, 164], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Article',
      title: 'How Cedarfield Community Theatre Solved Its Weekday Matinee Problem',
      body: [
        'Cedarfield Community Theatre’s Tuesday and Wednesday matinees had emptied out for two years, and the box office’s first theory was the ticket price: at fourteen dollars, a matinee seat cost only two dollars less than an evening show. — [[1]] — The theatre tested that theory in January, cutting matinee prices to nine dollars for a six-week trial.',
        'Attendance barely moved: only eleven more tickets sold across the whole trial, nowhere near enough to offset the revenue given away. — [[2]] — A volunteer usher, Patrice Odom, suggested asking departing patrons directly rather than guessing again, and over three matinees the box office manager did exactly that.',
        'The answer surprised her: almost every patron who gave a reason mentioned parking. The car park across the street bills by the hour between eight and six and switches to a flat rate after that, so an afternoon visit costs a matinee patron several times what an evening patron pays. Parking, not price, was keeping people away. — [[3]] — The theatre approached the garage two blocks north, which already validates for evening ticket-holders, and extended the same arrangement to matinees.',
        'Matinee attendance in the eight weeks since the validation began has run thirty-four percent above the same period last year, and the nine-dollar price, held over since the trial, has been quietly withdrawn; full-price tickets now sell at a rate the discount never reached. — [[4]] — This is the strongest matinee stretch the theatre has recorded in five years.',
        'Validation starts at eleven, so patrons at the ten o’clock performances still pay the full daytime rate. Ms. Odom, who joined the theatre’s programming committee in April, has asked the board to consider starting those performances an hour later rather than reopening talks with the garage.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What did the theatre originally believe was causing the drop in matinee attendance?',
        c: ['That the shows were being marketed to the wrong audience.', 'That ticket prices were too close to evening prices.',
            'That the theatre’s location was hard to find.', 'That a nearby venue had lower prices.'],
        a: 1,
        e: '第1段落に「興行部が最初に疑ったのはチケット価格で、14ドルではマチネの席が夜間公演よりわずか2ドル安いだけだった」とある。',
        w: ['宣伝の対象が誤っていたという指摘は本文にない。',
            '正解。',
            '劇場の場所の分かりにくさには触れていない。',
            '比較されているのは同じ劇場のマチネと夜間公演の価格で、近隣の別施設の価格は本文に出てこない。'] },
      { tag: '詳細', s: 'How did the theatre finally identify the real cause of low attendance?',
        c: ['By analysing weather patterns on matinee days.', 'By lowering prices further and comparing sales.',
            'By asking departing patrons directly what kept them away.', 'By comparing attendance with a theatre in another town.'],
        a: 2,
        e: '第2段落に「ボランティアの案内係パトリス・オドムが、また当て推量するのではなく退場する客に直接尋ねてはどうかと提案し、興行部の支配人がマチネ3回分でそのとおりにした」とある。',
        w: ['天候の分析には触れていない。',
            '値下げは1月に一度行われただけで、チケットが11枚増えたにとどまり原因の特定には至っていない。さらに値下げを重ねたという記述もない。',
            '正解。',
            '他の町の劇場との比較には触れていない。'] },
      /* id は v6q163r（no は 163 のまま。挿入文を差し替えたため設問 id は新規採番）。
         2026-08-18 の一括照合で差し替え。旧挿入文「That single fact reframed everything the
         trial had seemed to prove, and it sent the box office looking for a garage rather than
         a discount.」は、vol1-r2.js の同じスロット No.163（挿入文「That assumption produced a
         service that was half empty at one o'clock and overcrowded at two.」・正解も同じ [3]）と
         装置が完全に同型だった——どちらも〈That ＋ 直前の原因を受ける指示語〉で後ろ向きに繋ぎ、
         後半で「だから対策に向かった」と前向きに繋ぐ橋渡し文で、正解位置まで同じ。
         記事の筋書き自体（当初の思い込み → データが覆す → 運用を改める → 実績が約3割向上 →
         残った不満）も vol1 と同型で、REWRITE.md が禁じた雛形に当たる。
         差し替え版は指示語を使わず、「なぜ向かいの駐車場ではなく2ブロック北のガレージなのか」という
         本文の欠落した因果を埋める文にしてある（受け先の作り方が別の型になる）。 */
      { tag: '位置選択', t: ['p7ins'], insertAt: 3, qid: 'v6q163r',
        sentence: 'The car park across the street declined to change its daytime tariff for a single tenant.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"The car park across the street declined to change its daytime tariff for a single tenant."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 2,
        e: '挿入文の主語 the car park across the street は既出の対象を指すので、それが本文に出たあとにしか置けない。登場するのは第3段落で、そこで昼間の時間制料金が問題だと説明される。さらに直後の文は劇場が「2ブロック北のガレージ」に掛け合ったと述べるが、なぜ向かいの駐車場でなく別のガレージなのかは本文のどこにも書かれていない。挿入文はその欠落した理由を埋める。両方を満たすのは [3] だけ。',
        w: ['第1段落のこの位置では駐車場がまだ一度も出ておらず、the car park across the street が指す対象が無い。話題も値下げの検討であって、料金体系の交渉ではない。',
            '第2段落のこの位置でも駐車場は未出で、指す対象が無い。直後は案内係が「当て推量をやめて客に直接聞こう」と提案する場面であり、駐車場との交渉が済んだ話をここに置くと、原因がまだ分かっていない段階で対策が終わっていることになる。',
            '正解。',
            '第4段落は提携開始後の実績を述べる箇所で、直前の文が「提携（validation）開始からの八週間」と時点を明示している。すでに別のガレージとの取り決めが成立したあとであり、そこへ向かいの駐車場に断られた経緯を置くと、交渉の結果が交渉の理由より先に語られて順序が崩れる。'] },
      { tag: '推測', t: ['p7inf'], s: 'What is suggested about Ms. Odom?',
        c: ['Her position at the theatre has changed since she made her suggestion.', 'She proposed the price cut that the theatre tested in January.',
            'She wants the theatre to negotiate with the garage again.', 'She questioned patrons at the evening performances as well.'],
        a: 0,
        e: '第2段落で登場したときは「ボランティアの案内係」だが、最終段落では「4月に劇場の企画委員会に加わった」と紹介されている。提案をしたあとで劇場内での立場が変わったと分かる。',
        w: ['正解。',
            '値下げは第1段落で「興行部の最初の仮説」として1月に試されたもので、オドムが登場するのはその結果が出たあとの第2段落である。',
            '最終段落に「ガレージとの交渉を蒸し返すのではなく、その回の開演を1時間遅らせることを検討するよう理事会に求めた」とあり、再交渉を望んでいない。',
            '客に直接尋ねたのはマチネ3回分で、実施したのは興行部の支配人である。夜間公演での聞き取りには触れていない。'] },
    ],
  }),
];
