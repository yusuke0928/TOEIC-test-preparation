/* =============================================================
   予想模試 Vol.4 — Part 7 単一文書 前半（No.147–164）
   設問を先に作り正解はくじで決める方式で作り直し（2026-09-29）。
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
      title: 'Bicycle Rack Notice',
      head: 'Napley Station',
      body: [
        'The cycle racks outside the main entrance are provided for customers who travel by train, and space is limited during peak commuting hours. Station staff check the racks every day, and any bicycle that has stood in the same spot for fourteen days will have a bright tag fastened to its frame, asking the owner to move it.',
        'A tagged bicycle that is still there after a further ten days will be taken into store by station staff. From that point it can no longer be collected from the racks; instead, it is kept at the station ticket office, where staff will match the tag number to the bicycle before releasing it to its owner.',
        'The scheme exists only to keep the racks free for people cycling to catch a train. Anyone planning to leave a bicycle for longer than two weeks, for example while away on holiday, should ask a member of staff to note this in advance so that the bicycle is not tagged by mistake.',
        'Any questions about this notice can be raised with a member of station staff on the platform.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v4q147p',
        s: 'According to the notice, how long can a bicycle stay in the racks before it is labelled for removal?',
        c: ['Three days.', 'Seven days.', 'Fourteen days.', 'Twenty-eight days.'],
        a: 2,
        e: '第1段落に、駅員が毎日ラックを確認し、同じ場所に十四日間置かれた自転車にタグを付けて持ち主に移動を求める、と明記されている。',
        w: ['掲示が示すタグ付けまでの猶予は十四日であり、三日ではない。',
            '掲示が示すタグ付けまでの猶予は十四日であり、七日ではない（タグ付け後にさらに与えられる猶予は十日で、これも七日とは異なる）。',
            '正解。第1段落に、同じ場所に十四日間置かれた自転車にタグが付けられるとある。',
            '掲示が示すタグ付けまでの猶予は十四日であり、二十八日ではない。'] },
      { tag: '詳細', qid: 'v4q148p',
        s: 'According to the notice, where can owners collect a bicycle that has been removed?',
        c: ['At the station ticket office.', 'At a council storage depot.', 'At the local police station.', 'At a bicycle shop nearby.'],
        a: 0,
        e: '第2段落に、タグ付けからさらに十日たっても動かされていない自転車は駅員が持ち去り、駅の切符売り場で保管し、タグの番号と自転車を照合してから返却する、とある。',
        w: ['正解。第2段落に、持ち去られた自転車は駅の切符売り場で保管され、タグの番号と照合のうえ返却される、とある。',
            '自治体の保管施設については本文のどこにも触れていない。',
            '警察署については本文のどこにも触れていない。',
            '近くの自転車店については本文のどこにも触れていない。'] },
    ],
  }),

  /* ── 149–150 社内メモ ─────────────────────────────── */
  sp({
    n: [149, 150], lv: 4,
    docs: [{
      label: 'Memo',
      head: 'TO: Parks Department Field Staff\nFROM: Grounds Operations Manager\nDATE: 12 May\nSUBJECT: New apprentices starting next month',
      body: [
        "Tuckwell City Council will take on four new apprentices next month, the first intake since the scheme was paused a few years ago. All four will be based at the council's collection of labelled specimen trees for the length of their training, working alongside the tree and shrub team rather than being split across the department's sites.",
        'The apprenticeship itself runs for eighteen months and leads to a recognised horticultural qualification on completion. Each apprentice will be paired with an experienced member of staff who agrees to act as their mentor for the full period, and mentors will receive a small allowance on top of their usual pay.',
        'Please make sure tools and protective equipment are ready before the apprentices arrive, and that someone is free to walk them through basic safety procedures on their first morning. Uniforms have already been ordered and should arrive by the end of the month.',
        "Any questions about the scheme should go to me directly rather than to the council's general recruitment line.",
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v4q149p',
        s: 'According to the memo, where will the apprentices be based?',
        c: ['At the plant nursery.', 'At the cemetery grounds.', 'At the arboretum.', 'At the sports fields.'],
        a: 2,
        e: '第1段落に、4人の見習いは全員、樹木の手入れを行う班とともに、市が所有する見本樹木のコレクション（つまり樹木園）を拠点に研修を受ける、とある。',
        w: ['苗圃については本文のどこにも触れていない。',
            '墓地の敷地については本文のどこにも触れていない。',
            '正解。第1段落に、見習いは全員、市の見本樹木のコレクション（樹木園）を拠点にすると書かれている。',
            '運動場については本文のどこにも触れていない。'] },
      { tag: '詳細', qid: 'v4q150p',
        s: 'How long will the apprenticeship programme last?',
        c: ['One year.', 'Eighteen months.', 'Two years.', 'Three years.'],
        a: 1,
        e: '第2段落に、研修そのものは十八か月間続き、修了時に認定される園芸の資格につながる、とある。',
        w: ['一年という期間は本文に出てこない。',
            '正解。第2段落に、研修は十八か月間続くと明記されている。',
            '二年という期間は本文に出てこない。',
            '三年という期間は本文に出てこない。'] },
    ],
  }),

  /* ── 151–152 広告 ─────────────────────────────────── */
  sp({
    n: [151, 152], lv: 4,
    docs: [{
      label: 'Advertisement',
      title: 'Tidmarsh Indoor Golf',
      head: 'Play a Different Course Every Visit',
      body: [
        'Tidmarsh Indoor Golf offers six full-swing simulator bays, each loaded with more than forty courses, so regulars can play somewhere new every visit without leaving town. Bays are climate-controlled and open every day from nine in the morning until eleven at night.',
        'A bay can be booked by telephone on 01632 960774, through the Tidmarsh Golf app, or in person at the front desk when you arrive. Walk-ins are welcome whenever a bay is free, though booking ahead is the surest way to get the time you want.',
        'Tuesday evenings are our busiest slot of the week: the same eight or so regulars come in together, and for the past few seasons they have kept a running tally of scores on the noticeboard by the front desk that resets each spring. If you would rather play somewhere quieter, mornings and early afternoons are usually wide open.',
        'A loyalty card is available at no charge: buy nine sessions and the tenth one is free, whichever bay or course you choose.',
      ],
    }],
    q: [
      { tag: 'NOT', t: ['p7not'], qid: 'v4q151p',
        s: 'What is NOT mentioned as a way to book a bay?',
        c: ['By telephone.', 'Through a mobile app.', 'At the front desk.', 'On the website.'],
        a: 3,
        e: '広告が挙げる予約方法は電話・アプリ・受付（来店）の3つだけで、ウェブサイトでの予約には一切触れていない。',
        w: ['第2段落に、電話（01632 960774）で予約できるとある。',
            '第2段落に、Tidmarsh Golf のアプリを通じて予約できるとある。',
            '第2段落に、来店して受付で直接予約できるとある。',
            '正解。広告はウェブサイトでの予約に触れておらず、ウェブサイトのアドレスも載せていない。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v4q152p',
        s: 'What is suggested about Tidmarsh Indoor Golf?',
        c: ['It changed owners earlier this year.', 'It has added more simulator bays.', 'It hosts a regular evening league.', 'It will start serving hot food soon.'],
        a: 2,
        e: '第3段落に、火曜の夜は同じ8人前後の常連が連れ立って訪れ、ここ数シーズン、受付脇の掲示板でスコアの通算成績をつけ、それを毎春リセットしていると述べられている。特定の曜日に同じ顔ぶれが継続的に成績を競っていることから、定例の夜間リーグが開かれていると分かる。',
        w: ['経営者の交代については本文のどこにも触れていない。',
            '打席が増設されたとは述べられておらず、本文は現在の打席数（6）を挙げているだけである。',
            '正解。火曜の夜に同じ常連が集まり、シーズンをまたいで通算成績をつけていることから、定例の夜間リーグが開かれていると分かる。',
            '温かい食事の提供については本文のどこにも触れていない。'] },
    ],
  }),

  /* ── 153–154 テキストメッセージ ───────────────────── */
  sp({
    n: [153, 154], lv: 3,
    docs: [{
      label: 'Text message chain',
      body: [{ t: 'chat', lines: [
        { who: 'Warren Tallcroft', time: '10:14', text: "Morning, Celia. Quick change of plan for Thursday — the forecast's just flipped to heavy rain for that day, so I don't want to start the exterior coat in it. Any chance we push to Friday instead?" },
        { who: 'Celia Nield', time: '10:19', text: "That's fine by me. Is Friday definitely clear?" },
        { who: 'Warren Tallcroft', time: '10:22', text: "Dry right through the weekend according to the forecast, so Friday should be safe. I'll put us down for Friday morning and bring the sheeting to cover the beds under the windows while I work." },
        { who: 'Celia Nield', time: '10:25', text: "Good thinking, those roses are just coming into bud. One more thing while I've got you — I've decided on the shutters. Let's go with deep blue rather than what we talked about before." },
        { who: 'Warren Tallcroft', time: '10:31', text: "Deep blue it is. I'll mix that shade up before Friday so it's ready when I start, and I'll do the front door frame to match if you like the look of it once it's on." },
        { who: 'Celia Nield', time: '10:33', text: "Let's see how the shutters look first, then decide on the door. Thanks, Warren." },
        { who: 'Warren Tallcroft', time: '10:35', text: 'Will do. See you Friday.' },
      ] }],
    }],
    q: [
      { tag: '詳細', qid: 'v4q153p',
        s: 'Why does Mr. Tallcroft suggest postponing the job?',
        c: ['Rain is due on the start date.', 'His paint supplier has delayed an order.', 'Another job is taking longer than planned.', 'One of his painters is unwell.'],
        a: 0,
        e: '10時14分の Mr. Tallcroft のメッセージに、木曜日の天気予報が急に大雨に変わったため、その日に外壁の塗装を始めたくない、と述べられている。',
        w: ['正解。10時14分のメッセージで、予定していた木曜日の天気予報が大雨に変わったことを延期の理由として挙げている。',
            '塗料の仕入れ先による発注の遅れには触れていない。',
            '別の現場が長引いているという話は出てこない。',
            '職人の体調不良には触れていない。'] },
      { tag: '詳細', qid: 'v4q154p',
        s: 'What colour does Ms. Nield want for the shutters?',
        c: ['Pale grey.', 'Dark green.', 'Deep blue.', 'Off-white.'],
        a: 2,
        e: '10時25分の Ms. Nield のメッセージに、雨戸は deep blue にすると決めた、とある。',
        w: ['淡い灰色には触れていない。',
            '濃い緑色には触れていない。',
            '正解。10時25分のメッセージで、雨戸を deep blue にすると伝えている。',
            'オフホワイトには触れていない。'] },
    ],
  }),

  /* ── 155–157 メール ───────────────────────────────── */
  sp({
    n: [155, 156, 157], lv: 4,
    docs: [{
      label: 'E-mail',
      head: 'To: Tapscott Water Services — Customer Care <care@tapscottwater.co.uk>\nFrom: Yvette Nuttall <y.nuttall@nashgrove-consulting.co.uk>\nDate: 14 May\nSubject: Our water cooler rental',
      body: [
        'Hello,',
        "We've rented water coolers from Tapscott for about four years now and have always been happy with the service. At the moment we have eight coolers spread across our two floors, all on the standard bottled system, and I wanted to ask whether some or all of them could be swapped for coolers that connect straight to the mains water supply. The empty bottles pile up faster than our storeroom can hold them, and I gather mains-fed machines do away with that altogether.",
        "One more thing, out of curiosity rather than anything urgent — I noticed one of your vans dropping off what looked like a coffee machine for the accountants on the floor below us last month. If that's something you also supply, it might be worth knowing about for later, even if it's not what I'm asking about today.",
        "Could you let me know what's involved in making that change, including any cost difference and how much notice you'd need? Happy to arrange a visit if that's easier than doing this by e-mail.",
        'Best wishes,\nYvette Nuttall',
      ],
    }],
    q: [
      { tag: '概要', qid: 'v4q155p',
        s: 'What is the purpose of the e-mail?',
        c: ['To report a fault with one of the coolers.', 'To question a charge on the latest invoice.', 'To change the day of the regular delivery.', 'To ask about switching to plumbed-in units.'],
        a: 3,
        e: '第1段落に、現在借りているボトル式の給水機の一部または全部を、水道の配管に直接つなぐ型（plumbed-in units）に交換できるか尋ねたい、と用件が書かれている。',
        w: ['故障の報告には触れていない。',
            '請求内容への疑問には触れていない。',
            '配達日の変更には触れていない。',
            '正解。ボトル式の給水機を、水道に直接つなぐ型に交換できるかを尋ねたいと述べている。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v4q156p',
        s: 'What is suggested about Tapscott Water Services?',
        c: ['It also rents out coffee machines.', 'It came recommended by another business.', 'It changed its name last year.', 'It has a new customer service manager.'],
        a: 0,
        e: '第2段落に、先月、Tapscott のバンが同じ建物の下の階の会計事務所にコーヒーマシンらしきものを届けているのを見かけた、とある。Tapscott は給水機を貸し出してバンで届ける会社であり、そのバンが同じ建物の別の会社にコーヒーマシンらしきものを届けていたことから、コーヒーマシンも扱っていることがうかがえる。',
        w: ['正解。Tapscott のバンが下の階の会社にコーヒーマシンらしきものを届けているのを見かけたと述べており、コーヒーマシンも扱っていることがうかがえる。',
            '本文に出てくる別の会社は、下の階の会計事務所だけである。この会社は Tapscott のバンが荷物を届けた先として書かれており、紹介者ではない。Nuttall さんの事務所が Tapscott の給水機を約4年間借りているとあるだけで、どう知ったかには触れていない。',
            '社名の変更については触れていない。',
            '担当者の交代については触れていない。'] },
      { tag: '詳細', qid: 'v4q157p',
        s: "How many water coolers does Ms. Nuttall's office currently rent?",
        c: ['Two coolers.', 'Three coolers.', 'Five coolers.', 'Eight coolers.'],
        a: 3,
        e: '第1段落に、現在2つのフロアに8台の給水機を置いている、とある。',
        w: ['2という数字はフロアの数であり、給水機の台数ではない。',
            '3台という記述はない。',
            '5台という記述はない。',
            '正解。8台の給水機を置いていると明記されている。'] },
    ],
  }),

  /* ── 158–160 記事 ─────────────────────────────────── */
  sp({
    n: [158, 159, 160], lv: 3,
    docs: [{
      label: 'Article',
      title: 'Behind the Counter',
      head: 'Local Business',
      body: [
        "When the local council asked around for someone to mark the town's hundred and fiftieth anniversary with something more lasting than a badge or a mug, they settled on Tansy Nevin, who has run Nevin Candle Company from a converted stable behind the market square for the past nine years. The result, a squat candle scented with the heather and honey that the surrounding hills are known for, has been one of the town gift shop's best sellers since it launched in the spring.",
        "Ms. Nevin says the hardest part was not the scent but the wax itself: the council wanted something that would burn evenly for a full ten hours, long enough to see a whole evening's celebrations through without a second candle. Getting the blend right took four attempts and most of a winter.",
        "The workshop itself employs twelve people, most of them local, and each one has a hand in at least part of the anniversary candle, from pouring the wax to hand-stamping the tin with the town's crest.",
        'Ms. Nevin rarely leaves the building before dark. Asked about this, she laughed and said it has less to do with dedication than with the stairs at the back of the workshop, which lead straight up to where she lives; there is, she says, no commute to complain about.',
        'The anniversary candle will remain on sale at the gift shop until stocks run out, with no plans yet for a second batch.',
      ],
    }],
    q: [
      { tag: '概要', qid: 'v4q158p',
        s: 'What is the article mainly about?',
        c: ["A candle made for the town's anniversary.", 'A switch to refillable glass jars.', 'A series of candle-making classes.', 'A collaboration with local artists.'],
        a: 0,
        e: '第1段落に、町制150周年を記念して依頼された特別なろうそくを Nevin Candle Company が作った経緯が述べられ、以降の段落もこのろうそくについて説明している。',
        w: ['正解。記事全体が、町制150周年のために作られた特別なろうそくを取り上げている。',
            '詰め替え式のガラス瓶への切り替えには触れていない。',
            '講座については触れていない。',
            '地元作家との協作には触れていない。'] },
      { tag: '詳細', qid: 'v4q159p',
        s: 'According to the article, how many people work at Nevin Candle Company?',
        c: ['Three people.', 'Five people.', 'Eight people.', 'Twelve people.'],
        a: 3,
        e: '第3段落に、工房では12人が働いている、とある。',
        w: ['3人という記述はない。',
            '5人という記述はない。',
            '8人という記述はない。',
            '正解。第3段落に、工房では12人が働いていると明記されている。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v4q160p',
        s: 'What is suggested about Ms. Nevin?',
        c: ['She runs the business with her brother.', 'She lives in a flat above the workshop.', 'She used to work as a florist.', 'She is writing a book about candle making.'],
        a: 1,
        e: '第4段落に、Ms. Nevin が日が暮れるまで建物を離れないのは献身のためというより、工房の裏の階段がそのまま自宅に続いているからだ、と本人が語っている。工房の上に住んでいることがうかがえる。',
        w: ['兄弟については本文のどこにも触れていない。',
            '正解。工房裏の階段が自宅に直接続いていると本人が語っており、工房の上階に住んでいることがうかがえる。',
            '以前の職業（花屋）については触れていない。',
            '執筆中の本については触れていない。'] },
    ],
  }),

  /* ── 161–164 記事（文挿入あり）───────────────────── */
  sp({
    n: [161, 162, 163, 164], lv: 4, t: ['p7ins'],
    docs: [{
      label: 'Article',
      title: 'A Sweet Makes Its Return',
      head: 'Local Business',
      body: [
        "Tibbetts Confectionery, a boiled-sweet maker with close to eighty years in business, is best known locally for a striped mint twist sold in little paper bags stamped with the company's name. — [[1]] — Production of the twist stopped abruptly four years ago, and the shelves at the factory shop have stayed bare of it ever since.",
        "The trouble traced back to a single machine: an ageing steel mould that pressed and cut the twist to its familiar shape. — [[2]] — When the mould finally cracked clean through one winter morning, the part turned out to have been out of production for over a decade, with no other manufacturer making anything compatible. Management shelved the line for good rather than commission a costly replica on a guess.",
        'That might have been the end of it, had the story not travelled. A trade magazine ran a short piece on the closure last year, and interest in the old sweet spread well beyond the town. — [[3]] — None of it changed anything at the time, since the firm still had no way of reproducing the shape without the mould.',
        "This spring, the firm tried a different approach. It placed a short notice in the local paper asking anyone who remembered how the sweet was made by hand to get in touch, and about a dozen people replied within a fortnight, mostly retired staff and long-standing customers who had kept the sweet's wrapper as a keepsake. — [[4]] — That copy, spotted with age but still legible, matched the firm's own surviving notes on the mixture almost word for word, and gave the team enough confidence to start testing batches by hand.",
        "With hand-shaping too slow for anything beyond small runs, engineers have since built a modern press that needs no part from the original design. Tibbetts expects the twist to return to shop shelves in November.",
        'Most of what Tibbetts makes each week is loaded onto containers bound for wholesalers overseas, and only a small share is ever sold from the factory shop or nearby stockists.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v4q161p',
        s: 'According to the article, why did Tibbetts Confectionery stop making the sweet?',
        c: ['One key ingredient became hard to obtain.', 'Its moulding machine wore out.', 'Sales fell below a profitable level.', 'Another firm objected to its name.'],
        a: 1,
        e: '第2段落に、菓子を成形していた金属製の型が老朽化しており、ある冬の朝に完全に割れてしまい、その部品はすでに製造中止から十年以上たっていて代わりが見つからなかった、とある。',
        w: ['本文で手に入らなかったと書かれているのは、割れた型の交換部品（"the part turned out to have been out of production for over a decade"）で、菓子の原料ではない。原料の入手について本文は何も述べていない。',
            '正解。老朽化した成形用の型がある朝完全に割れ、代わりの部品が見つからなかったために製造を止めたと述べられている。',
            '売上の落ち込みには触れていない。',
            '名称への異議には触れていない。'] },
      { tag: '詳細', qid: 'v4q162p',
        s: 'When will the sweet go on sale again?',
        c: ['In March.', 'In June.', 'In September.', 'In November.'],
        a: 3,
        e: '第5段落に、Tibbetts は11月に店頭に twist を戻すことを見込んでいる、とある。',
        w: ['3月という記述はない。',
            '6月という記述はない。',
            '9月という記述はない。',
            '正解。第5段落に、11月に店頭復帰を見込んでいると明記されている。'] },
      // 取っ手①(前方・照応): 挿入文の "them" は人を指す複数名詞を要求する。
      // 第4段落の直前文（about a dozen people replied ... mostly retired staff and
      // long-standing customers）だけが該当し、[1]〜[3]の直前文にはそれが無い。
      // 取っ手②(後方・逆向きの初出違反): 挿入文が "a handwritten copy of the recipe" を
      // 初めて導入し、直後の "That copy" がそれを既出として受ける。挿入文が無ければ
      // "That copy" の先行詞が本文に無くなる。
      // 注意: [3] は後方では落ちない位置で、閉じているのは "them" だけ。[3] の直前の文
      // （A trade magazine ran ... spread well beyond the town.）に人を指す複数名詞を足さないこと。
      { tag: '位置選択', t: ['p7ins'], insertAt: 4, qid: 'v4q163p',
        sentence: 'Among them was a former employee who had kept a handwritten copy of the recipe.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "Among them was a former employee who had kept a handwritten copy of the recipe."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 3,
        e: '挿入文の "them" が指せるのは、直前に人を指す複数名詞があるときだけである。第4段落の "about a dozen people replied within a fortnight, mostly retired staff and long-standing customers" が唯一、人を指す複数名詞（a dozen people）を含む文である。挿入文はその中に元従業員がいたと述べ、続く一文の "That copy" が挿入文で初めて導入された "a handwritten copy of the recipe" を受けている。他の3か所の直前の文はいずれも人を指す複数名詞を持たない。',
        w: ['第1段落のこの位置の直前は、菓子の由来と外見を説明する文であり、人を指す複数名詞を含まない。"them" が指す相手がいない。',
            '第2段落のこの位置の直前は、型そのものについての説明であり、人を指す複数名詞を含まない。',
            '第3段落のこの位置の直前は、業界誌の記事と関心の広がりについての文で、"interest" という抽象名詞はあっても人を指す複数名詞ではない。',
            '正解。第4段落のこの位置の直前だけが「十日あまりで十数人から返信があった」という、人を指す複数名詞（a dozen people）を含む文である。挿入文の "them" はこの十数人を受け、続く文の "That copy" が挿入文で導入された手書きの写しを受けている。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v4q164p',
        s: 'What is suggested about Tibbetts Confectionery?',
        c: ['It still operates from its first factory.', 'It sells most of its products abroad.', 'It belongs to a larger food group.', 'It sponsors a local football club.'],
        a: 1,
        e: '第6段落に、Tibbetts が毎週作るものの大半はコンテナに積まれて海外の卸業者へ送られ、国内で売られるのはごく一部にすぎない、とある。',
        w: ['最初の工場で今も操業しているとは述べられていない。',
            '正解。毎週の生産量の大半が海外の卸業者向けに出荷され、国内で売られるのはごく一部だと述べられている。',
            'より大きな食品グループに属しているとは述べられていない。',
            '地元サッカークラブのスポンサーだとは述べられていない。'] },
    ],
  }),
];
