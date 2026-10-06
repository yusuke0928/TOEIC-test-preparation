/* =============================================================
   予想模試 Vol.5 — Part 4（No.71–100）
   総仕上げ回。図表問題は 89–91 と 98–100 の2セット。

   2026-09-29 先読み対策（設問を先に作り、正解はくじで決める方式）で全ユニットを書き直した。
   stem・選択肢は凍結案どおり、正解はメインがくじで決めた。本文と解説は新規の書き下ろし。
   全設問の内容が変わったため id を新規採番した（v5q<no>p。no は 71–100 のまま）。
   ============================================================= */

const talk = (o) => ({
  id: `v5-p4-${o.n[0]}`, part: 4, kind: 'set', kindLabel: o.k || 'talk',
  topics: o.t || ['p4type'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    /* 設問 id は no から自動生成するが、中身を差し替えた設問は x.qid で新規採番する
       （id を使い回すと SRS の履歴が別問題に引き継がれるため）。 */
    id: x.qid || `v5q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p4type'], tag: x.tag,
  })),
});

export const L3 = [

  talk({
    n: [71, 72, 73], lv: 4, k: 'telephone message',
    s: [
      { role: 'W-Br', text: 'Hello, it\'s Caddick Chimney Care here. I\'m calling to say a proper thank-you, because three of the landlords on your books have rung me this month, and every one of them told me your office had given them my name.' },
      { role: 'W-Br', text: 'It\'s no exaggeration to say that your office has filled most of my diary, and I wanted you to know how much I appreciate it.' },
      { role: 'W-Br', text: 'Sorry about the clatter behind me. I\'m at the trade counter where I buy my flue liner and bagged mortar, and they\'re loading the van as we speak.' },
      { role: 'W-Br', text: 'One small favour while I have you. Could you e-mail me the addresses of all the houses you\'re looking after at the moment? The ones I have are a couple of years old, and I\'d rather not knock on the door of a house you no longer manage.' },
      { role: 'W-Br', text: 'Thanks again, and have a good week.' },
    ],
    ja: 'キャディック煙突清掃の経営者の女性が、貸家を管理する会社の担当者の留守番電話にメッセージを残している。今月、管理会社が担当する貸家の持ち主が3人、相次いで電話をくれ、いずれも管理会社から自分の名前を教えてもらったと言っていたと述べ、そのおかげで予定表の大半が埋まったと礼を言う。背後の騒音を詫び、いまは煙突の内張り材と袋入りのモルタルを買う業者向けのカウンターにいて、荷物を車に積んでもらっているところだと話す。最後に、いま管理している家の住所を全部メールで送ってほしいと頼む。手元の住所は2年ほど前のもので、すでに管理していない家の戸口を叩きたくないからである。',
    v: [['landlord', '大家、貸家の持ち主'], ['trade counter', '業者向けの販売カウンター'], ['flue liner', '煙突の内張り材'], ['mortar', 'モルタル'], ['looking after', '管理する、世話をする']],
    q: [
      { tag: '概要', qid: 'v5q71p', s: 'What is the purpose of the message?',
        c: ['To report a blockage found in a chimney', 'To explain an error on a recent invoice', 'To pass on a tenant\'s question about a stove', 'To thank the agency for recommending the company'],
        a: 3,
        e: '話し手は冒頭で「きちんとお礼を言うために電話した」と述べ（"I\'m calling to say a proper thank-you"）、3人の貸家の持ち主がみな管理会社に名前を教えてもらったと言っていた、と理由を続けている。さらに「あなたの事務所のおかげで予定表の大半が埋まった」と感謝を重ねており、用件は仕事を回してもらったことへの礼である。',
        w: ['煙突の詰まり（blockage）を見つけた報告は、メッセージのどこにも出てこない（言及なし）。', '請求書や、その誤りに触れる発言は無い（言及なし）。', '入居者の質問を取り次ぐ内容は無い。話し手が触れる相手は貸家の持ち主（landlords）で、入居者ではない（言及なし）。', '正解。"I\'m calling to say a proper thank-you" と述べ、貸家の持ち主たちが管理会社から名前を教えてもらったと言っていたことを理由に挙げている。紹介してもらったことへの礼が用件である。'] },
      { tag: '詳細', qid: 'v5q72p', s: 'Where does the speaker say she is calling from?',
        c: ['A customer\'s driveway', 'A car repair garage', 'A roadside café', 'A builders\' merchant'],
        a: 3,
        e: '背後の騒音を詫びたあと、「内張り材と袋入りのモルタルを買う業者向けのカウンターにいる」と言っている（"I\'m at the trade counter where I buy my flue liner and bagged mortar"）。煙突工事の資材を買う建築資材の販売店で、荷物を積み込んでもらっているところである。',
        w: ['客の家の私道にいるとは言っていない（言及なし）。', '車の修理工場にいるという発言は無い。"they\'re loading the van" は買った資材を車に積んでもらっているという意味で、修理とは関係がない（言及なし）。', '道路沿いのカフェにいるという発言は無い（言及なし）。', '正解。"I\'m at the trade counter where I buy my flue liner and bagged mortar" と述べ、資材を買う業者向けのカウンターにいると言っている。'] },
      { tag: '依頼', qid: 'v5q73p', s: 'What does the speaker ask the listener to do?',
        c: ['Send a current list of the properties', 'Provide a phone number for a tenant', 'Get a landlord\'s approval for a repair', 'Choose dates for the spring visits'],
        a: 0,
        e: '話し手は「いま管理している家の住所を全部メールで送ってもらえないか」と頼んでいる（"Could you e-mail me the addresses of all the houses you\'re looking after at the moment?"）。理由は、手元の住所が2年ほど前のもので、すでに管理していない家を訪ねたくないからである。',
        w: ['正解。"Could you e-mail me the addresses of all the houses you\'re looking after at the moment?" と頼んでいる。', '入居者の電話番号を求める発言は無い（言及なし）。', '貸家の持ち主の承認を取るよう頼む発言は無い（言及なし）。', '日程を選ぶよう頼む発言は無い。"diary" は仕事が埋まったという感謝の中で出てくるだけである（言及なし）。'] },
    ],
  }),

  talk({
    n: [74, 75, 76], lv: 3, k: 'announcement',
    s: [
      { role: 'M-Au', text: 'Good morning, ladies and gentlemen, and welcome to another day at sea. A few notes for today and tomorrow.' },
      { role: 'M-Au', text: 'Breakfast will be served in the Garden Restaurant until ten o\'clock, and the library on deck six is open all day.' },
      { role: 'M-Au', text: 'Now, tonight\'s show. Our dancers need extra time to rehearse with the new lighting, so instead of eight o\'clock, the curtain will rise at nine.' },
      { role: 'M-Au', text: 'Tomorrow we call at our final port. Anyone going ashore must be back on board by five o\'clock in the afternoon, as the gangway will be raised promptly.' },
      { role: 'M-Au', text: 'And a tip for those who enjoy the outdoor pool: by early afternoon, every sun lounger beside it is usually taken, so if you would like one, I would head up straight after breakfast.' },
      { role: 'M-Au', text: 'That\'s all for now. Enjoy your day.' },
    ],
    ja: '客船の船内放送。朝、乗客に向けてその日と翌日の案内をする。朝食はガーデン・レストランで10時まで、デッキ6の図書室は終日開いていると伝える。今夜のショーは、ダンサーが新しい照明のもとでリハーサルをする時間が必要なため、8時ではなく9時に開演する。翌日は最後の寄港地に着き、上陸する人は午後5時までに船に戻らなければならない（タラップは時間どおりに上げられる）。屋外プールの横の日光浴用の寝椅子は、午後の早い時間にはたいてい全部ふさがるので、使いたければ朝食後すぐに行くとよい、と助言する。',
    v: [['curtain will rise', '幕が上がる、開演する'], ['rehearse', 'リハーサルをする'], ['call at', '（船が）寄港する'], ['gangway', 'タラップ'], ['sun lounger', '日光浴用の寝椅子']],
    q: [
      { tag: '詳細', qid: 'v5q74p', s: 'What does the speaker say about this evening\'s show?',
        c: ['It will move to another lounge.', 'It will start an hour later.', 'It will air on cabin televisions.', 'It will include a guest performer.'],
        a: 1,
        e: '今夜のショーについて、「8時ではなく9時に幕が上がる」と言っている（"instead of eight o\'clock, the curtain will rise at nine"）。1時間遅くなる。理由は、ダンサーが新しい照明でリハーサルをする時間が要るからである。',
        w: ['会場を移すとは言っていない（言及なし）。', '正解。"instead of eight o\'clock, the curtain will rise at nine" と述べ、8時の予定が9時に変わる。', '客室のテレビで放映するという発言は無い（言及なし）。', '客演者が出るという発言は無い。"Our dancers" は船の専属のダンサーで、外から来る出演者ではない（言及なし）。'] },
      { tag: '詳細', qid: 'v5q75p', s: 'According to the speaker, when must passengers be back on board tomorrow?',
        c: ['4:30 P.M.', '5:00 P.M.', '5:30 P.M.', '6:00 P.M.'],
        a: 1,
        e: '翌日の帰船について、「午後5時までに船に戻らなければならない」と言っている（"must be back on board by five o\'clock in the afternoon"）。',
        w: ['4時半に触れる箇所は無い。本文に出る時刻は、10時（朝食の終了）、8時と9時（ショー）、5時（帰船）だけである。', '正解。"must be back on board by five o\'clock in the afternoon" と述べている。', '5時半に触れる箇所は無い。', '6時に触れる箇所は無い。'] },
      { tag: '推測', qid: 'v5q76p', s: 'What does the speaker imply about the outdoor pool?',
        c: ['It is busy in the afternoons.', 'It holds water from the sea.', 'It stays warm after dark.', 'It is beside a snack bar.'],
        a: 0,
        e: '屋外プールの横の寝椅子は「午後の早い時間にはたいてい全部ふさがっている」ので、使いたければ朝食後すぐに行くとよい、と助言している（"by early afternoon, every sun lounger beside it is usually taken"）。ここから、午後のプールは混み合うことが推せる。',
        w: ['正解。"by early afternoon, every sun lounger beside it is usually taken" と述べており、午後は寝椅子が足りなくなるほど混むことが分かる。', 'プールの水が海水かどうかには触れていない（言及なし）。', '日が暮れたあとの水温には触れていない（言及なし）。', 'プールの隣に軽食の売店があるという発言は無い（言及なし）。'] },
    ],
  }),

  talk({
    n: [77, 78, 79], lv: 4, k: 'excerpt from a meeting',
    s: [
      { role: 'W-Au', text: 'Thanks for staying behind, everyone. Most of what I want to cover today is our big charity dinner next month, so let me start there.' },
      { role: 'W-Au', text: 'It will be held at the town hall on the second Saturday, with room for a hundred and twenty guests and tickets at forty dollars a head.' },
      { role: 'W-Au', text: 'Before I go on, some good news: last week the football club in the next town over handed us a cheque, raised at their end-of-season match.' },
      { role: 'W-Au', text: 'I need six volunteers to serve at the dinner and four to clear tables afterwards, so please put your names on the sheet by the door before you leave.' },
      { role: 'W-Au', text: 'One change to what goes out on Fridays: from this week, every parcel will also hold a carton of milk and a wedge of cheese. The cold room is full.' },
      { role: 'W-Au', text: 'Now, back to the dinner. Has anyone here ever run a raffle?' },
    ],
    ja: 'フードバンクの職員会議の抜粋。運営責任者の女性が職員とボランティアに話している。今日の話の大半は来月開く慈善夕食会についてで、会場は市役所、第2土曜日、定員120人、チケットは1人40ドルだと説明する。途中で、先週、隣町のサッカークラブが、シーズン終了時の試合で集めた小切手を届けてくれたという良い知らせを伝える。夕食会では給仕に6人、片付けに4人のボランティアが必要なので、帰る前に入口のシートに名前を書いてほしいと頼む。また、金曜日に配る包みは今週から、どれにも牛乳1パックとチーズ1切れを加えると伝え、冷蔵室がいっぱいだと述べる。最後に、夕食会の話に戻り、くじ引きを運営した経験のある人を尋ねる。',
    v: [['charity dinner', '慈善夕食会'], ['a head', '1人あたり'], ['cheque', '小切手'], ['parcel', '（食料の）包み'], ['cold room', '冷蔵室'], ['raffle', 'くじ引き']],
    q: [
      { tag: '概要', qid: 'v5q77p', s: 'What is the speaker mainly discussing?',
        c: ['A search for a paid coordinator', 'A new way of registering clients', 'A training course for volunteer drivers', 'A fundraising dinner next month'],
        a: 3,
        e: '冒頭で「今日扱いたいことの大半は来月の大きな慈善夕食会だ」と述べ（"Most of what I want to cover today is our big charity dinner next month"）、会場・日取り・定員・チケット代、必要なボランティアの人数、最後のくじ引きの経験者探しまで、夕食会の話で進む。',
        w: ['有給のコーディネーターを探す話は出てこない（言及なし）。', '利用者の新しい登録方法には触れていない。"please put your names on the sheet by the door" は夕食会のボランティアの申し込みで、利用者の登録ではなく、新しい方法でもない。', 'ボランティア運転手の研修には触れていない。"volunteers" は夕食会の給仕と片付けの人手として出てくるだけである（言及なし）。', '正解。"Most of what I want to cover today is our big charity dinner next month" と述べ、話の大半が夕食会の準備である。'] },
      { tag: '意図', t: ['p3int'], qid: 'v5q78p', s: 'Why does the speaker say, "The cold room is full"?',
        c: ['To justify adding items to each parcel', 'To ease a worry about running short', 'To support buying a second fridge', 'To decline more stock from a supplier'],
        a: 0,
        e: '直前で「今週から、どの食料の包みにも牛乳1パックとチーズ1切れを加える」と述べている（"from this week, every parcel will also hold a carton of milk and a wedge of cheese"）。そのあとの「冷蔵室はいっぱいだ」は、冷やして置いてある乳製品を包みに入れて外へ出す理由づけである。',
        w: ['正解。直前で、どの包みにも乳製品を足すと述べている。冷蔵室が満杯だと続けることで、乳製品を包みに入れて外へ出す理由を示している。', '品が足りなくなることを心配する発言は、誰からも出ていない（言及なし）。', '冷蔵設備を買い足す話は出てこない（言及なし）。', '仕入れ先から追加の品が届くという申し出は、直前のどこにも無い（言及なし）。'] },
      { tag: '詳細', qid: 'v5q79p', s: 'Who does the speaker say made a recent donation?',
        c: ['A local bakery', 'A dental practice', 'A football club', 'An accounting firm'],
        a: 2,
        e: '良い知らせとして、「先週、隣町のサッカークラブが、シーズン終了時の試合で集めた小切手を届けてくれた」と言っている（"last week the football club in the next town over handed us a cheque"）。',
        w: ['パン屋からの寄付には触れていない（言及なし）。', '歯科医院からの寄付には触れていない（言及なし）。', '正解。"last week the football club in the next town over handed us a cheque" と述べている。', '会計事務所からの寄付には触れていない（言及なし）。'] },
    ],
  }),

  talk({
    n: [80, 81, 82], lv: 3, k: 'advertisement',
    s: [
      { role: 'M-Br', text: 'Is your cottage more than a hundred years old, with walls of solid granite or limestone? And is it never quite warm, however high you turn up the heating? Walls like those were built to last, not to hold in the heat, and that is where Fothergill Insulation can help.' },
      { role: 'M-Br', text: 'We specialise in making cottages of that age comfortable without spoiling what makes them beautiful, with breathable wall linings that protect the masonry and cut your heating bills.' },
      { role: 'M-Br', text: 'The company\'s founder spent twenty years designing new homes and offices, watching good buildings lose heat through their walls, until she decided to do something about it. Our fitters are local, fully insured, and tidy up after every job.' },
      { role: 'M-Br', text: 'Book your survey this month and we will fit, at no extra charge, a heating control that you can run from your phone.' },
      { role: 'M-Br', text: 'Call us on 0808 157 0142. That\'s 0808 157 0142. Fothergill Insulation: warm walls, lower bills.' },
    ],
    ja: '住宅の断熱工事会社フォーザギル・インシュレーションのラジオ広告。築100年を超え、花崗岩や石灰岩を積んだ、中空層のない壁の家の持ち主に、いくら暖房を強くしても十分に暖まらないのではと呼びかけ、そのような壁は長持ちするように造られたもので熱を逃がさないようには造られていないと述べる。同社はその年代の家を、美しさを損なわずに快適にすることを専門とし、石積みを守る通気性のある壁の内張りで暖房費を減らす。創業者は、新築の住宅や事務所を20年間設計し、良い建物が壁から熱を逃がすのを見てきた人物である。作業員は地元の人で、保険にも入っており、作業のあとは片づけていく。今月、調査を申し込めば、スマートフォンから操作できる暖房の制御装置を追加料金なしで取り付けるという。最後に電話番号を2回繰り返す。',
    v: [['cottage', '（小さな）家'], ['granite', '花崗岩'], ['limestone', '石灰岩'], ['masonry', '石積み'], ['specialise', '専門にする'], ['breathable', '通気性のある'], ['fitter', '取付工']],
    q: [
      { tag: '概要', qid: 'v5q80p', s: 'Who is the advertisement mainly intended for?',
        c: ['Owners of older stone cottages', 'Landlords who rent out flats', 'Families adding an extension', 'People working from home'],
        a: 0,
        e: '冒頭で「あなたの家は築100年を超え、壁は花崗岩か石灰岩を積んだ（中空層のない）壁か」と呼びかけ（"Is your cottage more than a hundred years old, with walls of solid granite or limestone?"）、続けて「その年代の家」を快適にすることが専門だと述べている。呼びかけの相手は、古い石造りの家の持ち主である。',
        w: ['正解。"Is your cottage more than a hundred years old, with walls of solid granite or limestone?" と呼びかけ、その年代の家を快適にすることが専門だと続けている。', '貸し出す家の持ち主（家主）への呼びかけは無い（言及なし）。', '増築をする家族への呼びかけは無い（言及なし）。', '在宅で仕事をする人への呼びかけは無い（言及なし）。'] },
      { tag: '詳細', qid: 'v5q81p', s: 'According to the advertisement, who started the company?',
        c: ['A retired builder', 'A former teacher', 'An architect', 'A local farmer'],
        a: 2,
        e: '創業者について、「新築の住宅や事務所を20年間設計し、良い建物が壁から熱を逃がすのを見てきた」人物だと言っている（"The company\'s founder spent twenty years designing new homes and offices, watching good buildings lose heat through their walls"）。選択肢のうち、住宅や事務所の設計図を引く職業にあたるのは建築家だけである。',
        w: ['引退した大工が創業したという発言は無い（言及なし）。', '元教師が創業したという発言は無い（言及なし）。', '正解。"The company\'s founder spent twenty years designing new homes and offices" と述べており、住宅や事務所の設計を20年してきた創業者は建築家にあたる。', '地元の農家が創業したという発言は無い。"local" は作業員について言っているだけである（言及なし）。'] },
      { tag: '詳細', qid: 'v5q82p', s: 'What will listeners receive if they book this month?',
        c: ['A carbon monoxide alarm', 'A smart thermostat', 'A hardware store voucher', 'A pair of thermal curtains'],
        a: 1,
        e: '今月の特典として、「今月調査を申し込めば、追加料金なしで、スマートフォンから操作できる暖房の制御装置を取り付ける」と言っている（"Book your survey this month and we will fit, at no extra charge, a heating control that you can run from your phone"）。これがスマート温度調節器にあたる。',
        w: ['一酸化炭素の警報器には触れていない（言及なし）。', '正解。"we will fit, at no extra charge, a heating control that you can run from your phone" と述べており、スマートフォンから操作できる暖房の制御装置が特典である。', '金物店の商品券には触れていない（言及なし）。', '断熱カーテンには触れていない（言及なし）。'] },
    ],
  }),

  talk({
    n: [83, 84, 85], lv: 4, k: 'talk',
    s: [
      { role: 'M-Cn', text: 'Welcome to the old quarter, everyone. Please keep to the sidewalk as we walk; the lanes here are narrow.' },
      { role: 'M-Cn', text: 'Look up at the long buildings with the tall upper windows. For over two hundred years, this district was the town\'s weaving quarter, and at its peak nearly every family on these streets worked at a loom or in a dye house.' },
      { role: 'M-Cn', text: 'Those big windows were the whole point. Weavers needed daylight to follow their patterns, and the cloth made here was sold at markets across the region.' },
      { role: 'M-Cn', text: 'Now, a couple of you asked earlier whether we could go up the tower on the corner. The tower is privately owned.' },
      { role: 'M-Cn', text: 'Let\'s carry on down this lane. Watch your step on the cobbles.' },
      { role: 'M-Cn', text: 'Our walk ends at the cathedral, where you\'ll have time to look around inside before the bus back.' },
    ],
    ja: '市内の歴史散策ツアーのガイドの男性が、旧市街を歩きながら参加者に話している。道が狭いので歩道から出ないよう伝えたあと、背の高い上階の窓を持つ長い建物を示し、ここは200年以上にわたって町の織物の地区で、最盛期にはこの通りのほとんどの家が織機か染色所で働いていたと説明する。大きな窓は、織り手が模様を見るための日光を取り入れるためだった。参加者の何人かが先ほど、角の塔に登れるかと尋ねたことに触れて、塔は個人の所有だと述べる。そのまま通りを進み、石畳に注意するよう促す。ツアーは大聖堂で終わり、中を見て回る時間があって、そのあとバスで戻ると伝える。',
    v: [['weaving', '織物（を織ること）'], ['loom', '織機'], ['dye house', '染色所'], ['privately owned', '個人の所有の'], ['cobbles', '石畳']],
    q: [
      { tag: '概要', qid: 'v5q83p', s: 'What is the speaker mainly discussing?',
        c: ['A writer who lived in the town', 'A trade that once employed many residents', 'A royal visit in the seventeenth century', 'A battle fought near the town'],
        a: 1,
        e: 'ガイドは「この地区は200年以上、町の織物の地区で、最盛期にはほとんどの家が織機か染色所で働いていた」と説明し（"this district was the town\'s weaving quarter"）、大きな窓や布の販売先まで、かつて多くの住民を雇った織物業の話を続けている。',
        w: ['この町に住んだ作家には触れていない（言及なし）。', '正解。"this district was the town\'s weaving quarter" と述べ、最盛期にはほとんどの家が織機か染色所で働いていたと続けている。', '17世紀の王の訪問には触れていない（言及なし）。', '町の近くで戦われた戦いには触れていない（言及なし）。'] },
      { tag: '意図', t: ['p3int'], qid: 'v5q84p', s: 'Why does the speaker say, "The tower is privately owned"?',
        c: ['To reject a request to climb it', 'To account for how well it is kept', 'To explain the lack of a history sign', 'To question a plan reported in the news'],
        a: 0,
        e: '直前で、参加者の何人かが先ほど、角の塔に登れるかと尋ねたと述べている（"a couple of you asked earlier whether we could go up the tower on the corner"）。それに続く「塔は個人の所有だ」は、登れないという答えになる。',
        w: ['正解。直前で、塔に登れるかという参加者の質問に触れている。「個人の所有だ」と続けることで、登らせることはできないと断っている。', '塔が良く手入れされているという話は、直前にも直後にも出ない（言及なし）。', '歴史を説明する案内板が無いという話は出てこない（言及なし）。', '塔に関する新聞の報道や計画の話は出てこない（言及なし）。'] },
      { tag: '詳細', qid: 'v5q85p', s: 'Where will the tour finish?',
        c: ['At a riverside café', 'At the old town gate', 'At the cathedral', 'At the town museum'],
        a: 2,
        e: '最後に、「ツアーは大聖堂で終わり、中を見て回る時間がある」と言っている（"Our walk ends at the cathedral"）。',
        w: ['川沿いのカフェには触れていない（言及なし）。', '古い門には触れていない（言及なし）。', '正解。"Our walk ends at the cathedral" と述べている。', '町の博物館には触れていない（言及なし）。'] },
    ],
  }),

  /* 2026-10-06 難度5の試作（設問案から設計。ブランチ lv5-design）で設問を新しくした。
     凍結案 lv5-frozen.txt（sha256 86f51fe9…）、くじ dice-lv5.json。id は新規採番（v5q86d〜v5q88d）、
     no は不変。stem・4択・並び・正解はくじのとおり（86=C, 87=B, 88=A）。
     Q86（通常）：決め手は第2段落（four hours）の1か所。他の時間は出していない。曜日・図柄とは結びつけていない。
     Q87（型U）：決め手は第1段落（As arranged, our fitters will be with you on Thursday the eleventh of next month。おとり）と
       第4段落（our fitters will now be with you on Wednesday the tenth。確定として言う。先の日付にして、図柄選びの時点と年表がぶつからない）。
       第4段落は前の日を the day we'd arranged で受け、第2・3・5・6段落は曜日を言わない。理由は
       別の客の取り消しで取り付け工が空いたこと（ガラスの色・図柄は出していない）。
       第4段落を消した本文→Thursday（おとり）に着く。第1段落を消した本文→Wednesday の1本（型Uの構造上）。
     Q88（型S）：決め手は第3段落（正解の amber 側を先に言う。2案は同じ swan の図柄で、蜂蜜色と青みがかった灰色。
       どちらを選ぶかは言わない）と第5段落（板張りが暗く日当たりが乏しいので the warmer glass。
       候補は並べ直さない）。おとりは slate swan。
       第3段落だけ→2本（amber swan／slate swan）。第5段落だけ→色調が暖色と決まり、図柄の2本（amber swan／amber ivy）。
     2026-10-06 第1巡の修正：Q87 を先の日付つきにし stem と第4段落の動詞句の逐語一致を解消（F2）、鳥を swan と呼ぶ・第5段落の冒頭と時制を整えた（F4）、ja から本文に無い推論を除いた（F6）。
     2026-10-06 第2巡（rev-C）：改名 Olwen→Oonagh・Odile→Josephine、No.48 の ja。
     否定語（not/no/never/n't）を含む文：0。明示的な訂正・否定は第4段落の日の変更の1本。
     決め手の段落は Q87＝1・4、Q86＝2、Q88＝3・5。重ねていない。 */
  talk({
    n: [86, 87, 88], lv: 4, k: 'recorded message',
    s: [
      { role: 'W-Br', text: 'Hello, Ms. Quennell, this is Oonagh at Ollerenshaw Glass Studio, calling about the reading-room window. As arranged, our fitters will be with you on Thursday the eleventh of next month.' },
      { role: 'W-Br', text: "The fitting itself will take four hours, and they'll tidy up afterwards." },
      { role: 'W-Br', text: "Now, the design. Since you left that to us, I've drawn up two ideas. Both show a swan gliding over a pond; one is in honey-coloured glass, the other in bluish-grey. I'll tell you which we've picked in a moment." },
      { role: 'W-Br', text: "Sorry, a colleague has just brought some news. Another client has cancelled a job, so the day we'd arranged is changing: our fitters will now be with you on Wednesday the tenth." },
      { role: 'W-Br', text: "Back to the design. The reading room is panelled in dark wood and gets very little daylight, so we've picked the warmer glass." },
      { role: 'W-Br', text: "If you'd like to talk anything over, call 01632 960 457 and ask for me. Thank you." },
    ],
    ja: 'ステンドグラス工房の女性スタッフが、閲覧室の窓を注文した客のクエネルさんに残した留守番電話。まず、予定どおり来月11日の木曜に取り付け工がうかがうと述べる。次に、取り付け自体は4時間かかり、終わったら片づけていくと伝える。続いて、図柄は工房に任されたので2案を描いたと言い、どちらも白鳥が池をすべる絵で、一方は蜂蜜色、もう一方は青みがかった灰色のガラスだと説明し、どちらにしたかはあとで伝えると述べる。ここで同僚から知らせが入ったと断り、別の客が仕事を取り消したので、決めていた日が変わり、10日の水曜にうかがうと告げる。図柄の話に戻り、閲覧室は濃い色の板張りで日光がほとんど入らないので、暖かい色のほうのガラスに決めたと述べる。最後に、相談があれば電話番号あてにかけ、自分を呼び出すよう伝える。',
    v: [['fitters', '（窓などの）取り付け工'], ['fitting', '取り付け（作業）'], ['tidy up', '片づける'], ['gliding', 'すべるように進む'], ['honey-coloured', '蜂蜜色の'], ['panelled', '板張りの'], ['talk over', '話し合う、相談する']],
    q: [
      { tag: '詳細', qid: 'v5q86d', s: 'How long does the speaker say the fitting will take?',
        c: ['Two hours', 'Three hours', 'Four hours', 'Six hours'], a: 2, t: ['p4type'],
        e: '第2段落で "The fitting itself will take four hours, and they\'ll tidy up afterwards." と述べている。',
        w: ['Two hours: 第2段落の "The fitting itself will take four hours" は4時間で、2時間ではない。',
            'Three hours: 第2段落の "The fitting itself will take four hours" は4時間で、3時間ではない。',
            '正解。第2段落の "The fitting itself will take four hours" のとおり。',
            'Six hours: 第2段落の "The fitting itself will take four hours" は4時間で、6時間ではない。'] },
      { tag: '詳細', qid: 'v5q87d', s: "On which day will the studio's fitters come to the listener's building?",
        c: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], a: 1, t: ['p4type'],
        e: '第1段落の "As arranged, our fitters will be with you on Thursday the eleventh of next month." が当初の予定だが、第4段落で "Another client has cancelled a job, so the day we\'d arranged is changing: our fitters will now be with you on Wednesday the tenth." と変更を告げている。後から確定として告げられた日が実際に来る日になる。',
        w: ['Tuesday: この曜日は録音のどこにも出てこない。取り付け工が来るのは第4段落の Wednesday。',
            '正解。第4段落の "our fitters will now be with you on Wednesday the tenth" が確定した日。',
            'Thursday: 第1段落の "As arranged, our fitters will be with you on Thursday the eleventh of next month." だけを聞くと着く日だが、これは変更前の予定。第4段落の "the day we\'d arranged is changing" で取り消され、"will now be with you on Wednesday the tenth" に替わる。',
            'Friday: この曜日は録音のどこにも出てこない。取り付け工が来るのは第4段落の Wednesday。'] },
      { tag: '詳細', qid: 'v5q88d', s: 'Which design will the studio make for the reading-room window?',
        c: ['The amber swan design', 'The slate swan design', 'The amber ivy design', 'The slate ivy design'], a: 0, t: ['p4type'],
        e: '第3段落で2案が示される。"Both show a swan gliding over a pond; one is in honey-coloured glass, the other in bluish-grey." で、図柄は同じで色調だけが違う。第5段落の "The reading room is panelled in dark wood and gets very little daylight, so we\'ve picked the warmer glass." が選ぶ基準で、暖色の蜂蜜色のほうが選ばれる。',
        w: ['正解。2案とも白鳥の図柄で、"the warmer glass" は "honey-coloured glass" のほう。',
            'The slate swan design: 第3段落の "the other in bluish-grey" は示された2案のもう一方で、第3段落だけでは残る2案の一方。しかし第5段落の "we\'ve picked the warmer glass" で、青みがかった灰色のほうは選ばれない。',
            'The amber ivy design: 色調は "the warmer glass" に合うが、図柄が違う。第3段落の2案はどちらも "a swan" の図柄で、蔓の葉の図柄は録音に出てこない。',
            'The slate ivy design: 図柄も色調も合わない。蔓の葉の図柄は録音に出てこず、"bluish-grey" のガラスは "the warmer glass" で選ばれない。'] },
    ],
  }),

  talk({
    n: [89, 90, 91], lv: 3, k: 'talk', t: ['graphic','p4type'],
    graphic: {
      t: 'table', title: 'Chenlow Flower Show — Exhibit Tents',
      head: ['Tent', 'Category', 'Judging Session'],
      rows: [
        ['Tent 19', 'Flowering', 'Morning'],
        ['Tent 24', 'Foliage', 'Morning'],
        ['Tent 10', 'Flowering', 'Afternoon'],
        ['Tent 29', 'Foliage', 'Afternoon'],
      ],
    },
    s: [
      { role: 'W-Br', text: 'Hello, everyone, and welcome to this year\'s Chenlow Flower Show. A few announcements before you head off to explore. Please keep to the gravel walkways around the display beds, and keep dogs on a lead.' },
      { role: 'W-Br', text: 'First, something new for this year: a tea room staffed entirely by our volunteers, just beside the main lawn. It serves sandwiches and cake, so do stop by.' },
      { role: 'W-Br', text: 'Second, the author of the show\'s gardening guide will be signing copies today. You\'ll find her in one of the marquees showing plants grown for the shape and colour of their leaves.' },
      { role: 'W-Br', text: 'It\'s the one whose entries are judged before the lunch break.' },
      { role: 'W-Br', text: 'Finally, every ticket you\'ve bought today goes towards a small bus that will take the elderly residents of the nursing home down the road out on day trips, so thank you for supporting us.' },
      { role: 'W-Br', text: 'Enjoy the show.' },
    ],
    ja: '園芸の品評会チェンロー・フラワー・ショーの運営担当者の女性が、来場者に向けて話している。展示用の花壇の周りでは砂利敷きの通路を歩き、犬には綱をつけるよう頼んだあと、今年の新しいものとして、ボランティアだけで運営する喫茶室が中央の芝生の横にできたと伝える。次に、品評会の園芸ガイドの著者が今日サイン会を開くと述べ、場所を2つの手がかりで示す。葉の形と色を楽しむために育てた植物を展示しているテントのうちの1つで、そこの出品物は昼休みより前に審査される。最後に、今日買ったチケットの収益は、近くの老人ホームの入居者を日帰りの遠出に連れて行く小型バスのために使われると礼を言う。',
    v: [['marquee', '大型テント'], ['tea room', '喫茶室'], ['signing copies', '著書にサインをする'], ['entries', '出品物'], ['nursing home', '老人ホーム']],
    q: [
      { tag: '図表', qid: 'v5q89p', s: 'Look at the graphic. Where will a book signing take place?',
        c: ['Tent 19', 'Tent 24', 'Tent 10', 'Tent 29'],
        a: 1,
        e: '表の4つのテントは、植物の種類（花／葉）と審査の時間帯（昼前／昼後）の組み合わせで1つに決まる。音声は種類を「葉の形と色を楽しむために育てた植物」（"plants grown for the shape and colour of their leaves"）、審査を「昼休みより前に審査される」（"entries are judged before the lunch break"）と言い換えている。葉を楽しむ植物でかつ昼前に審査されるのは Tent 24 だけである。',
        w: ['Tent 19 は昼前に審査されるが、種類が Flowering（花）で、葉を楽しむ植物ではない。', '正解。Tent 24 は Foliage（葉）で、審査が Morning（昼前）の組み合わせの行である。', 'Tent 10 は Flowering（花）で、審査も Afternoon（昼後）なので、どちらの手がかりにも合わない。', 'Tent 29 は Foliage（葉）だが、審査が Afternoon（昼後）で、昼休みより前ではない。'] },
      { tag: '詳細', t: ['p4type'], qid: 'v5q90p', s: 'What does the speaker say is new at this year\'s show?',
        c: ['A play area for children', 'A place to store purchased plants', 'A café run by volunteers', 'A shuttle bus from the car park'],
        a: 2,
        e: '今年の新しいものとして、「ボランティアだけで運営する喫茶室」を挙げている（"a tea room staffed entirely by our volunteers"）。',
        w: ['子どもの遊び場には触れていない（言及なし）。', '買った植物を預ける場所には触れていない（言及なし）。', '正解。"a tea room staffed entirely by our volunteers" と述べ、喫茶室が今年の新しいものである。', '駐車場からのシャトルバスには触れていない。本文の "a small bus" は、チケットの収益で老人ホームの入居者を日帰りの遠出に連れて行くバスで、会場の新しい設備でも駐車場からの送迎でもない。'] },
      { tag: '詳細', t: ['p4type'], qid: 'v5q91p', s: 'According to the speaker, what will ticket sales help pay for?',
        c: ['A new roof for the village hall', 'A science lab at a local school', 'A minibus for a care home', 'A footpath along the river'],
        a: 2,
        e: 'チケットの収益の使い道として、「近くの老人ホームの入居者を日帰りの遠出に連れて行く小型バス」に充てられると言っている（"goes towards a small bus that will take the elderly residents of the nursing home down the road out on day trips"）。',
        w: ['公会堂の新しい屋根には触れていない（言及なし）。', '地元の学校の理科実験室には触れていない（言及なし）。', '正解。"every ticket you\'ve bought today goes towards a small bus that will take the elderly residents of the nursing home down the road out on day trips" と述べている。', '川沿いの小道は収益の使い道として出てこない。"gravel walkways" は会場の花壇の周りの通路で、収益の使い道ではない。'] },
    ],
  }),

  talk({
    n: [92, 93, 94], lv: 3, k: 'announcement',
    s: [
      { role: 'M-Am', text: 'Good morning, graduates, families and friends, and welcome to the graduation ceremony at Fairholt College.' },
      { role: 'M-Am', text: 'Before we begin, it gives me great pleasure to share that this year\'s Founders\' Medal, awarded for outstanding service to the community, goes to a member of today\'s graduating class, Fenella Crossley. She has spent her four years here running a free tutoring program in local schools, and the medal will be presented to her later in the ceremony.' },
      { role: 'M-Am', text: 'Each of you will receive your diploma from the town\'s mayor. Please come forward when your name is called.' },
      { role: 'M-Am', text: 'Once the ceremony is over, please make your way to the rose garden, where the college photographer will be taking the official pictures of you and your families.' },
      { role: 'M-Am', text: 'Thank you, and congratulations to you all.' },
    ],
    ja: 'フェアホルト・カレッジの卒業式の会場で、進行担当者の男性が出席者に向けて放送している。まず、地域への優れた貢献に贈られる今年のファウンダーズ・メダルを、今日の卒業生のフェネラ・クロスリーが受けると発表する。彼女は4年間、地元の学校で無料の学習支援を運営してきた。メダルは式の後半で授与される。卒業証書は一人ひとりが町の市長から受け取るので、名前を呼ばれたら前に出るよう伝える。式が終わったらバラ園へ向かうよう促し、そこで大学の写真係が出席者と家族の公式の写真を撮ると述べる。最後に祝辞を述べて締めくくる。',
    v: [['graduating class', '卒業生'], ['medal', 'メダル'], ['tutoring', '個別の学習支援'], ['diploma', '卒業証書'], ['rose garden', 'バラ園']],
    q: [
      { tag: '目的', qid: 'v5q92p', s: 'What is the purpose of the announcement?',
        c: ['To explain a change to the schedule', 'To introduce the day\'s guest speaker', 'To give directions to a reception', 'To announce a prize for a graduate'],
        a: 3,
        e: '放送の中心は、冒頭の「今年のファウンダーズ・メダルが、今日の卒業生の1人に贈られると発表する」である（"it gives me great pleasure to share that this year\'s Founders\' Medal"）。続く卒業証書と写真の案内は、式の進行の連絡である。',
        w: ['式の予定が変わるという発言は無い。メダルは「式の後半で授与される」と言っているだけで、予定の変更ではない（言及なし）。', '来賓の講演者を紹介する場面は無い（言及なし）。', '祝賀会への道順の案内は無い。案内しているのは式のあとの写真撮影の場所である（言及なし）。', '正解。"it gives me great pleasure to share that this year\'s Founders\' Medal" と述べ、卒業生の1人に賞が贈られると発表している。'] },
      { tag: '詳細', qid: 'v5q93p', s: 'Who will hand out the diplomas?',
        c: ['The president of the college', 'The chair of the board of governors', 'The mayor of the town', 'The heads of the departments'],
        a: 2,
        e: '卒業証書については、「皆さんは町の市長から卒業証書を受け取る」と言っている（"Each of you will receive your diploma from the town\'s mayor"）。',
        w: ['学長が手渡すという発言は無い（言及なし）。', '理事会の議長が手渡すという発言は無い（言及なし）。', '正解。"Each of you will receive your diploma from the town\'s mayor" と述べている。', '学科長たちが手渡すという発言は無い（言及なし）。'] },
      { tag: '詳細', qid: 'v5q94p', s: 'Where will official photographs be taken after the ceremony?',
        c: ['On the library steps', 'In the rose garden', 'Beside the main fountain', 'Under the clock tower'],
        a: 1,
        e: '公式の写真は、「式が終わったらバラ園へ向かう」ように言い、そこで大学の写真係が撮ると述べている（"please make your way to the rose garden, where the college photographer will be taking the official pictures of you and your families"）。',
        w: ['図書館の階段には触れていない（言及なし）。', '正解。"please make your way to the rose garden, where the college photographer will be taking the official pictures of you and your families" と述べている。', '中央の噴水の脇には触れていない（言及なし）。', '時計塔の下には触れていない（言及なし）。'] },
    ],
  }),

  talk({
    n: [95, 96, 97], lv: 3, k: 'broadcast',
    s: [
      { role: 'M-Br', text: 'Now some news for anyone who swims off Flintshore Beach, one of the busiest stretches of sand on our coast. Lifeguards are on duty there until six every evening.' },
      { role: 'M-Br', text: 'Water samples were taken there on Tuesday, after workers mended a broken drain that runs just behind the dunes. It was thought wise to check that nothing had reached the sea.' },
      { role: 'M-Br', text: 'Both the sampling and the analysis were handled by a charity that works to protect the coastal environment, using volunteers trained in water testing.' },
      { role: 'M-Br', text: 'Results published this morning show that the water is well within the safe limit for bathing, so the beach stays open as normal.' },
      { role: 'M-Br', text: 'Stay with us. After this short break, we\'ll hear how the roads are looking for the weekend, including the tailbacks on the coast road.' },
    ],
    ja: '地域のラジオ放送。海水浴場フリントショア・ビーチで最近行われた水質検査を伝える。この浜は沿岸でもとくににぎわう砂浜の1つで、救助員が毎晩6時まで詰めている。火曜日に、砂丘のすぐ後ろで壊れていた排水溝を作業員が直したあと、何も海に流れ込んでいないか確かめるために水が採取された。採取も分析も、沿岸の環境を守る活動をする慈善団体が、水質検査の訓練を受けたボランティアを使って行った。今朝発表された結果では、水は遊泳の安全基準を十分に満たしており、浜は通常どおり開いている。最後に、短い休憩のあとで、週末の道路の状況（海岸道路の渋滞を含む）を伝えると予告する。',
    v: [['drain', '排水溝、排水管'], ['dunes', '砂丘'], ['sampling', '採取'], ['bathing', '水浴び、遊泳'], ['tailback', '（車の）渋滞']],
    q: [
      { tag: '詳細', qid: 'v5q95p', s: 'According to the speaker, what prompted the recent water testing?',
        c: ['A repair to a nearby drainage pipe', 'A complaint from a local swimming club', 'A spell of heavy rain last week', 'A routine check at the start of summer'],
        a: 0,
        e: '検査のきっかけは、「砂丘のすぐ後ろを通る壊れた排水溝を作業員が直したあと」である（"after workers mended a broken drain that runs just behind the dunes"）。何も海に流れ込んでいないか確かめるために水が採取された。',
        w: ['正解。"after workers mended a broken drain that runs just behind the dunes" と述べ、排水溝の修理が検査のきっかけである。', '地元の水泳クラブからの苦情には触れていない（言及なし）。', '先週の大雨には触れていない（言及なし）。', '夏の初めの定期検査だとは言っていない（言及なし）。'] },
      { tag: '詳細', qid: 'v5q96p', s: 'According to the speaker, who carried out the tests?',
        c: ['A university laboratory', 'A county council team', 'An environmental charity', 'A private testing firm'],
        a: 2,
        e: '検査をしたのは、採取も分析も担当した「沿岸の環境を守る活動をする慈善団体」である（"Both the sampling and the analysis were handled by a charity that works to protect the coastal environment"）。',
        w: ['大学の研究所には触れていない（言及なし）。', '郡議会のチームには触れていない（言及なし）。', '正解。"handled by a charity that works to protect the coastal environment" と述べている。', '民間の検査会社には触れていない。"volunteers" はその慈善団体の人手である（言及なし）。'] },
      { tag: '推測', qid: 'v5q97p', s: 'What will listeners most likely hear next?',
        c: ['A weather forecast', 'A traffic update', 'A sports roundup', 'A listener phone-in'],
        a: 1,
        e: '放送の最後に、「短い休憩のあとで、週末の道路の状況、海岸道路の渋滞を伝える」と予告している（"we\'ll hear how the roads are looking for the weekend, including the tailbacks on the coast road"）。次に流れるのは交通情報である。',
        w: ['天気予報を予告する発言は無い（言及なし）。', '正解。"we\'ll hear how the roads are looking for the weekend, including the tailbacks on the coast road" と予告しており、次は交通情報である。', 'スポーツの結果を予告する発言は無い（言及なし）。', '聴取者の電話参加を予告する発言は無い（言及なし）。'] },
    ],
  }),

  talk({
    n: [98, 99, 100], lv: 3, k: 'telephone message', t: ['graphic','p4type'],
    graphic: {
      t: 'table', title: 'Mouldings in Stock',
      head: ['Code', 'Wood', 'Edge'],
      rows: [
        ['M-40', 'Oak', 'Flat'],
        ['M-17', 'Walnut', 'Flat'],
        ['M-52', 'Oak', 'Rounded'],
        ['M-23', 'Walnut', 'Rounded'],
      ],
    },
    s: [
      { role: 'W-Cn', text: 'Hello, this is Corinna Fanshawe, with a message for the framing team at Clovermead. I\'ve gone through the list of mouldings you gave me, and I\'ve decided which one I\'d like for my six prints. They are all the same size, so I\'d like the frames to match.' },
      { role: 'W-Cn', text: 'I\'d like the darker of the two materials, the one with the deep brown tone.' },
      { role: 'W-Cn', text: 'As for the profile, I\'d like the one that curves gently at the front.' },
      { role: 'W-Cn', text: 'The prints will line the main hallway of an elementary school, and I\'m hoping to hang them all in the same week.' },
      { role: 'W-Cn', text: 'The school office will tell me later today where the finished frames should be sent, and I\'ll phone you again with that as soon as I hear.' },
      { role: 'W-Cn', text: 'Thanks very much, and I look forward to hearing from you.' },
    ],
    ja: '額縁店クローバーミードの留守番電話に、額装を頼んでいる客の女性（コリーナ・ファンショーと名乗る）がメッセージを残している。店から渡された縁材の一覧を見て、6枚の版画に使うものを決めたと伝える。版画は同じ大きさなので、額縁をそろえたいと言う。素材は2種類のうち濃い色のほう、縁の形は正面がなだらかに丸みを帯びたものを選ぶ。版画は小学校のメインの廊下に掛ける予定で、同じ週のうちにすべて掛けたいと話す。完成した額縁の送り先は、今日あとで学校の事務室が教えてくれる予定で、分かりしだいあらためて電話で知らせると言う。最後に礼を述べる。',
    v: [['moulding', '額縁などの縁材'], ['prints', '版画、印刷物'], ['material', '素材'], ['profile', '（縁材の断面の）形'], ['hallway', '廊下']],
    q: [
      { tag: '図表', qid: 'v5q98p', s: 'Look at the graphic. Which moulding does the speaker choose?',
        c: ['M-40', 'M-17', 'M-52', 'M-23'],
        a: 3,
        e: '表の4本の縁材は、木の色（明るい／濃い）と縁の形（平ら／丸み）の組み合わせで1つに決まる。話し手は木の素材を「2種類のうち濃いほう」（"I\'d like the darker of the two materials"）、縁の形を「正面がなだらかに丸みを帯びたもの」（"I\'d like the one that curves gently at the front"）と言い換えている。濃い色の木で丸みのある縁は M-23 だけである。',
        w: ['M-40 は Oak（明るい色の木）で、縁も Flat（平ら）なので、どちらの手がかりにも合わない。', 'M-17 は Walnut（濃い色の木）だが、縁が Flat（平ら）で、丸みのある縁ではない。', 'M-52 は縁が Rounded（丸み）だが、Oak（明るい色の木）で、濃い色の木ではない。', '正解。M-23 は Walnut（濃い色の木）で、縁が Rounded（丸み）の組み合わせの行である。'] },
      { tag: '次の行動', t: ['p4type'], qid: 'v5q99p', s: 'What will the speaker do next?',
        c: ['Drop off two more pictures', 'Pay a deposit online', 'Measure a wall again', 'Call back with a delivery address'],
        a: 3,
        e: '次にすることは、「学校の事務室が今日あとで額縁の送り先を教えてくれるので、分かりしだい電話で知らせる」ことである（"I\'ll phone you again with that as soon as I hear"）。',
        w: ['あと2枚の絵を持っていくという発言は無い（言及なし）。', 'オンラインで内金を払うという発言は無い（言及なし）。', '壁をもう一度測るという発言は無い（言及なし）。', '正解。"The school office will tell me later today where the finished frames should be sent, and I\'ll phone you again with that as soon as I hear" と述べ、送り先を電話で知らせるとしている。'] },
      { tag: '詳細', t: ['p4type'], qid: 'v5q100p', s: 'Where does the speaker plan to hang the pictures?',
        c: ['In a hotel lobby', 'In a school corridor', 'In a dentist\'s waiting room', 'In a restaurant'],
        a: 1,
        e: '絵を掛ける場所は、「小学校のメインの廊下」である（"The prints will line the main hallway of an elementary school"）。',
        w: ['ホテルのロビーには触れていない（言及なし）。', '正解。"The prints will line the main hallway of an elementary school" と述べている。', '歯科医院の待合室には触れていない（言及なし）。', 'レストランには触れていない（言及なし）。'] },
    ],
  }),

];
