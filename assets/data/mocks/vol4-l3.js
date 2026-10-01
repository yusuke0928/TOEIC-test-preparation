/* =============================================================
   予想模試 Vol.4 — Part 4（No.71–100）
   終盤 2 セット（89–91・98–100）は図表問題。

   2026-09-29 先読み対策：設問（stem・選択肢）を凍結し正解をくじで決めたあとに
   本文を新規に書き下ろした（工程4。v15/plans/vol4-final-P4.txt・v15/dice/vol4-l3.txt）。
   全 10 ユニットを置き換え、設問 id は v4q<no>p の形で新規採番した（no は 71–100 のまま）。
   ============================================================= */

const talk = (o) => ({
  id: `v4-p4-${o.n[0]}`, part: 4, kind: 'set', kindLabel: o.k || 'talk',
  topics: o.t || ['p4type'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    // 2026-09-29 先読み対策：本文を全面的に書き直したため id を新規採番（qid）。no は据え置き。
    id: x.qid || `v4q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p4type'], tag: x.tag,
  })),
});

export const L3 = [

  /* ── 71–73 留守番電話（Harwick Window Fitters） ───────────────────────────
     場面・くじ：v15/plans/vol4-final-P4.txt・v15/dice/vol4-l3.txt（71=B, 72=C, 73=C）。
     用件は「決定の遅れの説明」の1つだけに絞り、採用の申し出・勤務時間の変更・忘れ物の話はしない。
     会社の最近の出来事は「自治体との新契約」の1つだけに絞る（第2拠点・車両購入・ドア取付けは無言及）。
     依頼はウェブサイトでの簡単な回答の1つだけに絞り、免許証送付・住所確認・折り返し電話には触れない。 */
  talk({
    n: [71, 72, 73], lv: 3, k: 'telephone message',
    s: [
      { role: 'W-Br', text: "Hi, this is Hedy, calling from Harwick Window Fitters about the fitter position you applied for." },
      { role: 'W-Br', text: "I'm sorry it's taken us a little longer than planned to get back to you — the two people who were due to hold interviews this week have been pulled onto site because the district council has just awarded us the work of replacing windows across three of their sheltered housing blocks." },
      { role: 'W-Br', text: "With everyone tied up on that for the rest of the month, we won't be able to make a final decision on the role until closer to the end of it, so I wanted to let you know rather than leave you waiting without a word." },
      { role: 'W-Br', text: "In the meantime, could I ask you to go onto our website and answer a few quick questions under the 'Careers' tab? They just ask for your available start date and a contact number where we can reach you." },
      { role: 'W-Br', text: "Thanks again for your patience, and I'll be in touch as soon as a decision's been made." },
    ],
    ja: '窓の取付け業者の担当ヘディから、応募した取付け作業員の職への留守番電話。当初の予定より返事が遅れていることを詫び、今週面接を担当するはずだった2名が、自治体から高齢者向け住宅3棟の窓の入れ替え工事を新たに任され、現場に回されたためだと説明する。今月末近くになるまで最終的な採用可否は決められないため、音沙汰なしにせず連絡したと述べる。差し当たり、ウェブサイトの「Careers」タブで簡単な質問に答え、希望開始日と連絡先電話番号を伝えてほしいと依頼する。最後に、待ってくれていることに改めて礼を述べ、決定次第連絡すると伝える。',
    v: [['sheltered housing', '高齢者向け住宅'], ['tied up', '手が離せない、かかりきりの'], ['contact number', '連絡先電話番号']],
    q: [
      { tag: '概要', qid: 'v4q71p', s: 'What is the purpose of the message?',
        c: ['To offer the listener the job', 'To explain a delay in reaching a decision', "To describe a change to the job's hours", 'To report an item the listener left behind'],
        a: 1,
        e: '話し手は "I\'m sorry it\'s taken us a little longer than planned to get back to you" と切り出し、さらに "we won\'t be able to make a final decision on the role until closer to the end of it" と述べて、採否の決定が遅れていることを説明している。',
        w: ['採用を申し出る発言はない。むしろ "we won\'t be able to make a final decision on the role" と、まだ決定していないと明言している。', '正解。決定が遅れていることを説明する留守番電話である。', '勤務時間の変更についての言及はない。', '聞き手の忘れ物についての言及はない。'] },
      { tag: '詳細', qid: 'v4q72p', s: 'According to the speaker, what has the company recently done?',
        c: ['Opened a second depot', 'Bought several new vans', 'Won a contract with the council', 'Started fitting front doors'],
        a: 2,
        e: '"the district council has just awarded us the work of replacing windows across three of their sheltered housing blocks" と述べており、自治体から窓の入れ替えの仕事を新たに任されたことが、面接が遅れている理由として挙げられている。',
        w: ['第2拠点の開設についての言及はない。', '車両の購入についての言及はない。', '正解。自治体（district council）から窓の入れ替えの仕事を新たに任されたと述べている(契約を獲得したことの言い換え)。', 'ドアの取付けについての言及はない。窓の入れ替えの仕事としか述べていない。'] },
      { tag: '依頼', qid: 'v4q73p', s: 'What does the speaker ask the listener to do?',
        c: ['Send a copy of a driving licence', 'Confirm a current postal address', 'Fill in a form on the website', 'Call the office back by Friday'],
        a: 2,
        e: '"could I ask you to go onto our website and answer a few quick questions under the \'Careers\' tab" と依頼している。ウェブサイト上のフォームへの回答を求めている。',
        w: ['免許証の写しの送付についての言及はない。', '住所確認についての言及はない。求めているのは希望開始日と連絡先の電話番号である。', '正解。ウェブサイトの「Careers」タブで簡単な質問に答えるよう依頼している。', '折り返しの電話についての言及はない。むしろ「決定次第こちらから連絡する」と述べている。'] },
    ],
  }),

  /* ── 74–76 駅構内放送（Ludgrove 駅） ─────────────────────────────────
     催しはロックコンサートの1つだけ（試合・食の祭典・自転車レースには触れない）。
     助言は「大きな鞄を避ける」の1つだけ（切符の先買い・裏口利用・時刻表確認には触れない）。
     増発の間隔は15分の1つだけを述べ、ふだんの間隔・他の数値は出さない。 */
  talk({
    n: [74, 75, 76], lv: 3, k: 'announcement',
    s: [
      { role: 'M-Au', text: 'Good morning, and thank you for travelling with us today.' },
      { role: 'M-Au', text: "We'd like to remind everyone that a large open-air rock concert is being held in the town this Saturday evening, and thousands of fans are expected to pass through this station throughout the day." },
      { role: 'M-Au', text: "Because of the extra security checks at the gates, we'd ask anyone heading to the show to travel light and leave big bags and backpacks at home, as this will help keep the queues moving." },
      { role: 'M-Au', text: 'The concert is expected to finish shortly before eleven, and the platforms will be at their busiest in the hour after that.' },
      { role: 'M-Au', text: "To cope with the crowds, we'll be running extra trains on the main line every fifteen minutes from nine o'clock until midnight." },
      { role: 'M-Au', text: 'Thank you for your patience, and we hope you enjoy the show.' },
    ],
    ja: '駅の構内放送。今週土曜の夜に町で大規模な野外ロックコンサートが開催され、多くのファンが終日この駅を利用する見込みだと案内する。ゲートでの追加の保安検査があるため、会場へ向かう人は荷物を少なくし、大きな鞄やリュックは家に置いてくるよう求める（その方が列の進みが早くなるため）。コンサートは11時少し前に終わる見込みで、その後の1時間はホームがいちばん混雑すると伝える。混雑に対応するため、9時から深夜まで本線で15分おきに増発すると案内し、利用への感謝を述べて締めくくる。',
    v: [['travel light', '荷物を少なくして移動する'], ['queue', '行列、列'], ['extra trains', '増発列車']],
    q: [
      { tag: '詳細', qid: 'v4q74p', s: 'According to the announcement, what will take place in the town on Saturday?',
        c: ['A football match', 'A food festival', 'A cycle race', 'A rock concert'],
        a: 3,
        e: '"a large open-air rock concert is being held in the town this Saturday evening" と直接述べている。',
        w: ['サッカーの試合についての言及はない。', '食の祭典についての言及はない。', '自転車レースについての言及はない。', '正解。土曜の夜に野外ロックコンサートが開催されると述べている。'] },
      { tag: '詳細', qid: 'v4q75p', s: 'What does the speaker advise passengers to do?',
        c: ['Buy return tickets in advance', "Use the station's side entrance", 'Check the timetable online beforehand', 'Avoid bringing large bags'],
        a: 3,
        e: '"we\'d ask anyone heading to the show to travel light and leave big bags and backpacks at home" と依頼している。大きな鞄は持ち込まないよう求める助言である。',
        w: ['往復切符を事前に買う助言はない。', '脇の入口の利用についての言及はない。', '時刻表を事前に確認する助言はない。', '正解。大きな鞄やリュックは家に置いてくるよう助言している。'] },
      { tag: '詳細', qid: 'v4q76p', s: 'How often will extra trains run on Saturday?',
        c: ['Every 10 minutes', 'Every 15 minutes', 'Every 20 minutes', 'Every 30 minutes'],
        a: 1,
        e: '"we\'ll be running extra trains on the main line every fifteen minutes from nine o\'clock until midnight" と述べている。',
        w: ['10分おきという数値は出ていない。', '正解。15分おきに増発すると述べている。', '20分おきという数値は出ていない。', '30分おきという数値は出ていない。'] },
    ],
  }),

  /* ── 77–79 会議の抜粋（Langmere Sports） ─────────────────────────────
     主題はボート部のスポンサー契約の1つだけ（見本市・倉庫移転・顧客アンケートには触れない）。
     Q78 は直前の発言（経理の「据え置き」案への反論）で言語行為を増産支持に決める。引用は独立した1文で、
     直後に読みを言い直す文を置かない。
     来週の出来事はデザイナー2名加入の1つだけを述べる。 */
  talk({
    n: [77, 78, 79], lv: 4, k: 'meeting excerpt',
    s: [
      { role: 'M-Am', text: "Morning, team. I want to spend most of today's meeting on the new three-year sponsorship deal we've just signed with a local rowing club." },
      { role: 'M-Am', text: "Our logo will go on the boats and the team's uniforms, and our gear gets a spot beside the course at every regatta they enter this season, which should put it in front of exactly the customers we're trying to reach." },
      { role: 'M-Am', text: "One more thing before we move on. Finance would like next quarter's factory order for the new trail jacket kept at exactly the size of the launch order, and I think that's a mistake. The first batch sold out in two days." },
      { role: 'M-Am', text: "And a quick heads-up for next week: we've taken on two more people for the design side of the product team, and they start on Monday, so please make some room for them in the studio." },
      { role: 'M-Am', text: "Okay, let's get into the sponsorship details." },
    ],
    ja: '会議の抜粋。部門責任者が、地元のボート部との新しい3年間のスポンサー契約に今日の会議の大半を割くと切り出す。自社のロゴがボートとチームのユニフォームに入り、さらに今シーズンそのチームが出場する全レガッタで、コースのそばに自社の用品を置く場所がもらえ、狙っている客層に直接訴求できると説明する。話題を移す前にもう一点として、経理部門は来四半期の新しいトレイルジャケットの工場発注数を初回の発注と同じ規模に据え置きたいとしているが、それは誤りだと思うと述べ、初回出荷分がわずか2日で完売したと伝える。さらに来週の連絡事項として、製品チームのデザイン担当として2名を新たに採用し、月曜日に出社するのでスタジオに場所を空けておくよう伝え、最後にスポンサー契約の詳細説明に移る。',
    v: [['regatta', 'レガッタ、ボートレース大会'], ['sponsorship deal', 'スポンサー契約'], ['factory order', '工場への発注'], ['launch order', '発売時の発注']],
    q: [
      { tag: '概要', qid: 'v4q77p', s: 'What is the speaker mainly discussing?',
        c: ['Preparations for a trade fair', 'Sponsorship of a rowing club', 'Relocation to a larger warehouse', 'Results of a customer survey'],
        a: 1,
        e: '冒頭で "I want to spend most of today\'s meeting on the new three-year sponsorship deal we\'ve just signed with a local rowing club" と述べ、この話題に大半の時間を割くと明言している。',
        w: ['見本市の準備についての言及はない。レガッタでの用品の設置場所はボート部のスポンサー契約に伴うもので、見本市とは別である。', '正解。地元のボート部との新しいスポンサー契約について話している。', '倉庫の移転についての言及はない。', '顧客アンケートの結果についての言及はない。'] },
      { tag: '意図', t: ['p3int'], qid: 'v4q78p', s: 'Why does the speaker say, "The first batch sold out in two days"?',
        c: ["To praise a department's efforts", 'To support a larger production run', 'To explain a shortage in shops', 'To reject a proposed price cut'],
        a: 1,
        e: 'この発言の直前で "Finance would like next quarter\'s factory order for the new trail jacket kept at exactly the size of the launch order, and I think that\'s a mistake." と、発注量を据え置く経理の案に異を唱えたうえで "The first batch sold out in two days." と述べている。初回分が早く売り切れたという事実を、発注量を据え置くべきではないという主張、つまり次回の生産量を増やす方向を支える根拠として挙げている。',
        w: ['引用の前後で人や部署の働きをほめる発言はない。直前は経理の据え置き案への反論である。', '正解。発注量を据え置く案に反対する根拠として、初回分の早い完売を挙げている。', '早期の完売という事実は述べているが、その目的は据え置き案への反論の根拠であり、店の品不足の理由を説明するためではない。', '退けている提案は発注量を据え置く案であり、値下げの提案は話に出てこない。'] },
      { tag: '詳細', qid: 'v4q79p', s: 'What does the speaker say will happen next week?',
        c: ['A photographer will visit the office', 'Two new designers will join the team', 'Workers will repaint the showroom', 'Local students will tour the factory'],
        a: 1,
        e: '"we\'ve taken on two more people for the design side of the product team, and they start on Monday" と述べており、来週からデザイン担当の新しい2名がチームに加わる。',
        w: ['写真家の来訪についての言及はない。', '正解。2名の新しいデザイナーがチームに加わると述べている。', 'ショールームの塗り直しについての言及はない。', '学生の工場見学についての言及はない。'] },
    ],
  }),

  /* ── 80–82 ラジオ広告（Lansdown Office Plants） ───────────────────────
     宣伝はロビー向け週替わり生花の1つだけ（短期レンタル・苔の壁・在宅勤務者向けには触れない）。
     創業年数は25年の1つだけを述べ、他の数字（6/11/18）は別の文脈にも出さない。
     栽培地はオランダの温室の1か所だけを述べる。 */
  talk({
    n: [80, 81, 82], lv: 3, k: 'advertisement',
    s: [
      { role: 'W-Am', text: 'Is your office lobby looking a little tired? Let Lansdown Office Plants brighten it up.' },
      { role: 'W-Am', text: 'Every week, one of our stylists delivers a fresh arrangement of seasonal flowers for your reception area, swapping out the display before the old one ever has a chance to wilt.' },
      { role: 'W-Am', text: "Whether it's a small reception desk or a large atrium, our team can put together something that suits the space and the season." },
      { role: 'W-Am', text: "We've been doing this for twenty-five years now, so we know exactly which blooms hold up best under office lighting and air conditioning." },
      { role: 'W-Am', text: 'Every stem is grown for us in greenhouses over in the Netherlands, then flown in twice a week so it reaches your lobby at its freshest.' },
      { role: 'W-Am', text: 'Call today for a free trial delivery, and see why so many offices trust us with their first impression.' },
    ],
    ja: 'オフィス向け観葉植物・生花レンタル会社ランズダウン・オフィス・プランツのラジオ広告。オフィスのロビーが物寂しく見えていないかと問いかけ、毎週専属のスタイリストが受付エリア用に季節の生花のアレンジメントを届け、しおれる前に新しいものと交換するサービスを紹介する。小さな受付デスクでも広いアトリウムでも、空間と季節に合ったものを用意できるとする。この事業を25年続けており、オフィスの照明や空調の下でも長持ちする花を熟知していると述べる。花はすべて自社のためにオランダの温室で栽培され、週に2回空輸されるので常に新鮮な状態で届くという。最後に無料のお試し配達を呼びかけ、多くのオフィスから信頼されている理由を確かめてほしいと締めくくる。',
    v: [['reception area', '受付エリア'], ['wilt', 'しおれる'], ['atrium', '吹き抜けの大広間、アトリウム']],
    q: [
      { tag: '概要', qid: 'v4q80p', s: 'What is being advertised?',
        c: ['Short-term plant hire for events', 'Living walls made from moss', 'Weekly flower displays for office lobbies', 'Desk plants for home workers'],
        a: 2,
        e: '"Every week, one of our stylists delivers a fresh arrangement of seasonal flowers for your reception area" と述べており、オフィスのロビー・受付向けの週替わりの生花サービスを宣伝している。',
        w: ['イベント向け短期レンタルについての言及はない。', '苔でできた壁面緑化についての言及はない。', '正解。オフィスのロビー向けに週替わりの生花を届けるサービスである。', '在宅勤務者向けの卓上植物についての言及はない。'] },
      { tag: '詳細', qid: 'v4q81p', s: 'According to the advertisement, how long has the company been in business?',
        c: ['6 years', '11 years', '18 years', '25 years'],
        a: 3,
        e: '"We\'ve been doing this for twenty-five years now" と述べている。',
        w: ['6年という数字は出ていない。', '11年という数字は出ていない。', '18年という数字は出ていない。', '正解。25年続けていると述べている。'] },
      { tag: '詳細', qid: 'v4q82p', s: 'Where does the speaker say the company\'s plants are grown?',
        c: ['At a nursery outside the city', 'On the roof of a shopping centre', 'In greenhouses in another country', 'Inside a converted factory building'],
        a: 2,
        e: '"Every stem is grown for us in greenhouses over in the Netherlands" と述べている。',
        w: ['郊外の苗床についての言及はない。', 'ショッピングセンターの屋上についての言及はない。', '正解。オランダの温室で栽培されていると述べている。', '工場を改装した建物についての言及はない。'] },
    ],
  }),

  /* ── 83–85 ビジターセンターでの話（Hallworth Nature Reserve） ─────────────
     話の中心はアザラシの繁殖期の1つだけ（雁の飛来・ランの開花・トンボの羽化には触れない）。
     Q84 は引用の直前の「木道はすべて自分たちのチームが再建した」で
     (D) スタッフの働きをたたえる、に決める（(B) 閉鎖中の説明は「再開済み」と矛盾して落ちる）。引用は独立した1文で、後ろで言い直さない。
     貸し出すのは折りたたみ式スツールの1つだけを述べる。 */
  talk({
    n: [83, 84, 85], lv: 4, k: 'talk',
    s: [
      { role: 'M-Br', text: 'Good afternoon, everyone, and welcome to Hallworth Nature Reserve.' },
      { role: 'M-Br', text: "This month our common seals have come ashore on the shingle to give birth, and if you walk down towards the beach you'll likely spot mothers resting with their pups right along the tideline." },
      { role: 'M-Br', text: "The pups stay close to their mothers for the first few weeks, so please keep well back from the water's edge and keep any dogs on their leads while you're out there." },
      { role: 'M-Br', text: "Before you head off, a word about the winter. Every boardwalk the storms tore up was rebuilt by our own team before the reserve reopened in spring. We have three rangers for four hundred hectares." },
      { role: 'M-Br', text: "The best spot to watch from is the wooden screen just past the visitor centre, and if you'd like to sit for a while, we keep a few fold-up stools at the front desk that you're welcome to take out with you." },
    ],
    ja: '自然保護区ホールワース・ネイチャー・リザーブでのレンジャーによる来館者向けの話。今月、ゼニガタアザラシが出産のため砂利浜に上陸しており、浜へ下りていくと波打ち際で母アザラシと仔が寄り添って休んでいる様子が見られると案内する。仔アザラシは最初の数週間、母親のそばを離れないので、水際からは十分離れ、犬は必ずリードにつなぐよう求める。出かける前に冬のことに触れ、嵐で壊れた木道はすべて春の再開前に自分たちのチームが再建したと話し、レンジャーは400ヘクタールに3人しかいないと述べて、チームの働きをたたえる。観察に最適な場所はビジターセンターを過ぎたところにある木製のスクリーンで、しばらく座って見ていたい人のために、受付に折りたたみ式のスツールを数脚置いてあり、持ち出して構わないと伝える。',
    v: [['shingle', '砂利浜、小石浜'], ['tideline', '波打ち際、潮境線'], ['boardwalk', '木道'], ['fold-up', '折りたたみ式の']],
    q: [
      { tag: '概要', qid: 'v4q83p', s: 'What is the speaker mainly talking about?',
        c: ['The arrival of migrating geese', 'The flowering of wild orchids', 'The breeding season of seals', 'The emergence of dragonflies'],
        a: 2,
        e: '"our common seals have come ashore on the shingle to give birth" と述べ、出産のため上陸したアザラシについて話している。',
        w: ['渡り鳥の雁の飛来についての言及はない。', '野生のランの開花についての言及はない。', '正解。アザラシの出産・繁殖期について話している。', 'トンボの羽化についての言及はない。'] },
      { tag: '意図', t: ['p3int'], qid: 'v4q84p', s: 'Why does the speaker say, "We have three rangers for four hundred hectares"?',
        c: ['To appeal to listeners for volunteer help', 'To explain why a path is still closed', 'To decline a request for daily walks', 'To praise what the staff have achieved'],
        a: 3,
        e: 'この発言の直前で "Every boardwalk the storms tore up was rebuilt by our own team before the reserve reopened in spring." と、嵐で壊れた木道をチームが自分たちで再建し終えたことを述べている。そのうえで "We have three rangers for four hundred hectares." と、レンジャーは400ヘクタールに3人しかいないことを添えており、少人数で冬の被害をすべて修復し終えたチームの働きをたたえる発言である。',
        w: ['話の中にボランティアを求める呼びかけはない。', '"Every boardwalk the storms tore up was rebuilt by our own team before the reserve reopened in spring" と、木道はすべて再建され保護区も再開済みだと述べており、閉鎖中の道の説明ではない。', '毎日の散策を求める依頼は話に出てこない。', '正解。少人数で冬の被害をすべて修復し終えたチームの働きをたたえている。'] },
      { tag: '詳細', qid: 'v4q85p', s: 'What does the speaker say visitors can borrow from the front desk?',
        c: ['A pair of binoculars', 'A walking pole', 'A waterproof poncho', 'A folding stool'],
        a: 3,
        e: '"we keep a few fold-up stools at the front desk that you\'re welcome to take out with you" と述べている。',
        w: ['双眼鏡の貸し出しについての言及はない。', '杖の貸し出しについての言及はない。', '雨具の貸し出しについての言及はない。', '正解。折りたたみ式のスツールを貸し出していると述べている。'] },
    ],
  }),

  /* ── 86–88 自動音声案内（Harkness Blood Donation Centre） ─────────────
     不足している血液型はB型陽性の1つだけを述べる（他の3つは言及なし）。
     移転先は公立図書館の上階の1か所だけを述べる。
     所要時間は来館全体でおよそ60分の1つの数値だけを述べる。 */
  talk({
    n: [86, 87, 88], lv: 3, k: 'recorded message',
    s: [
      { role: 'W-Cn', text: 'Thank you for calling Harkness Blood Donation Centre. Please listen carefully, as some details have changed.' },
      { role: 'W-Cn', text: "At the moment, we're especially short of B positive donors, so if that's your blood type, we'd love to see you at your earliest convenience." },
      { role: 'W-Cn', text: "Please remember to bring a valid form of photo identification with you when you come in, as we can't register new visits without one." },
      { role: 'W-Cn', text: "From next month, we'll be moving out of this building and into new premises on the upper floor of the central library building on Market Street, so please check our website for the exact date before you travel." },
      { role: 'W-Cn', text: 'A typical visit, from the moment you arrive to the moment you leave, takes about sixty minutes, so please allow enough time when you book your appointment.' },
      { role: 'W-Cn', text: 'To book online, visit our website, or press one now to speak with a member of our team.' },
    ],
    ja: '献血センター、ハークネス・ブラッド・ドネーション・センターの自動音声案内。いくつか変更点があるのでよく聞くよう求めたうえで、現在特にB型Rh陽性の献血者が不足しており、該当する血液型の人にはできるだけ早く来てほしいと案内する。来館時には有効な写真付き身分証明書の持参が必要で、それがないと新規の来館受付ができないと注意する。来月からは、この建物を出て、マーケット・ストリートにある中央図書館の建物の上階の新しい施設に移転するため、正確な移転日はウェブサイトで確認してほしいと案内する。到着してから帰るまでの一般的な来館所要時間はおよそ60分であり、予約の際は十分な時間を見ておくよう求める。最後にオンライン予約の方法と、担当者と話すための操作案内で締めくくる。',
    v: [['donor', '献血者、提供者'], ['premises', '施設、建物'], ['photo identification', '写真付き身分証明書']],
    q: [
      { tag: '詳細', qid: 'v4q86p', s: 'Which blood type does the message say is most urgently needed?',
        c: ['O negative', 'A negative', 'B positive', 'AB positive'],
        a: 2,
        e: '"we\'re especially short of B positive donors" と述べている。',
        w: ['O型陰性についての言及はない。', 'A型陰性についての言及はない。', '正解。B型陽性が特に不足していると述べている。', 'AB型陽性についての言及はない。'] },
      { tag: '詳細', qid: 'v4q87p', s: 'Where will the centre be located from next month?',
        c: ['Inside a shopping centre', 'Next to the railway station', "In a hospital's outpatient wing", 'Above a public library'],
        a: 3,
        e: '"we\'ll be moving out of this building and into new premises on the upper floor of the central library building on Market Street" と述べている。',
        w: ['ショッピングセンター内についての言及はない。', '鉄道駅の隣についての言及はない。', '病院の外来棟についての言及はない。', '正解。中央図書館の建物の上階に移転すると述べている。'] },
      { tag: '詳細', qid: 'v4q88p', s: 'How long does the speaker say a typical visit takes?',
        c: ['About 40 minutes', 'About 50 minutes', 'About 60 minutes', 'About 75 minutes'],
        a: 2,
        e: '"A typical visit, from the moment you arrive to the moment you leave, takes about sixty minutes" と述べている。',
        w: ['40分という数値は出ていない。', '50分という数値は出ていない。', '正解。およそ60分と述べている。', '75分という数値は出ていない。'] },
    ],
  }),

  /* ── 89–91（図表）山岳ガイドの話（Huxtable Mountain Guides） ─────────────
     表は凍結どおり（Route23:Quarry car park→Lake shore／Route26:Forest gate→Village square／
     Route6:Quarry car park→Village square／Route12:Forest gate→Lake shore）。
     表の語（ルート番号・quarry・forest・lake・village・square）は音声に出さない。
     出発地は「松林の始まるところ」（Forest gate の言い換え。gate の語は言わない）、到着地は「水辺のすぐそば」（Lake shore の
     言い換え）を別々の文で伝え、この2つを満たすのは Route 12 だけになる。ルート番号は言わない。
     自己試行：音声だけ（表なし）→ルート番号との対応が不明で 1/4。表だけ（音声なし）→
     4行とも起点・終点の組み合わせが1回ずつで見分けがつかず 1/4。出発地の手がかりだけなら
     Route26/12 の2択（1/2）、到着地の手がかりだけなら Route23/12 の2択（1/2）。両方そろって Route12 に確定。
     昼食は農場カフェの1つだけ、戻る時刻は5時半の1つだけを述べる。 */
  talk({
    n: [89, 90, 91], lv: 3, k: 'talk', t: ['graphic', 'p4type'],
    graphic: {
      t: 'table', title: 'Walking Routes on Offer',
      head: ['Route', 'Starts at', 'Finishes at'],
      rows: [
        ['Route 23', 'Quarry car park', 'Lake shore'],
        ['Route 26', 'Forest gate', 'Village square'],
        ['Route 6', 'Quarry car park', 'Village square'],
        ['Route 12', 'Forest gate', 'Lake shore'],
      ],
    },
    s: [
      { role: 'M-Cn', text: "Morning, everyone — great turnout today. Let me run through the plan for today's walk." },
      { role: 'M-Cn', text: "Because of all the rain we had yesterday, I want to keep today's group on drier ground, so this morning we'll be setting off from where the pine woods begin." },
      { role: 'M-Cn', text: "It's an easy grade the whole way, and the walk finishes right down by the water, where the minibus will already be waiting to take you back." },
      { role: 'M-Cn', text: "We'll stop for lunch partway round at a working farm that's opened its little cafe to walkers — they do a very good soup, so bring some cash if you'd like to try it." },
      { role: 'M-Cn', text: "All being well, we should be back at the minibus by half past five, so you've got plenty of time before the evening meal." },
    ],
    ja: '山岳ガイドが、朝の集合時に参加者へ今日の行程を説明する。昨日の雨のため足場の悪い場所を避けたいとして、今朝は松林の始まるところから出発すると案内する。道のりは終始緩やかな勾配で、ゴール地点は水辺のすぐそばで、そこにはすでに送迎の小型バスが待機しているという。途中、営業中の農場が併設のカフェを歩行者に開放しており、そこで昼食休憩を取れると案内し、スープがおいしいので試したい人は現金を持参するよう勧める。順調にいけば午後5時半には小型バスに戻れる見込みで、夕食までには十分な時間があると締めくくる。',
    v: [['grade', '勾配、傾斜'], ['partway', '途中で'], ['minibus', '小型バス']],
    q: [
      { tag: '図表', qid: 'v4q89p', s: 'Look at the graphic. Which route does the speaker recommend?',
        c: ['Route 23', 'Route 26', 'Route 6', 'Route 12'],
        a: 3,
        e: '話し手は "this morning we\'ll be setting off from where the pine woods begin" と述べており、これは表の Forest gate から出発する2ルート（Route 26・Route 12）のどちらかを指す。さらに "the walk finishes right down by the water" とも述べており、これは表の Lake shore で終わる2ルート（Route 23・Route 12）のどちらかを指す。両方を満たすのは Route 12（Forest gate → Lake shore）だけである。',
        w: ['出発地が Quarry car park のルートであり、話し手が述べた「松林の始まるところ」から出発するという説明と合わない。', '出発地は合うが、到着地が Village square であり、話し手が述べた「水辺のすぐそば」で終わるという説明と合わない。', '出発地・到着地のどちらも話し手の説明と合わない。', '正解。松林の始まるところから出発し、水辺のそばで終わるのは Route 12 だけである。'] },
      { tag: '詳細', t: ['p4type'], qid: 'v4q90p', s: 'Where can the group stop for lunch?',
        c: ['Inside a mountain hut', 'Beside a waterfall', 'At a farm café', 'On a grassy hilltop'],
        a: 2,
        e: '"We\'ll stop for lunch partway round at a working farm that\'s opened its little cafe to walkers" と述べている。',
        w: ['山小屋についての言及はない。', '滝についての言及はない。', '正解。営業中の農場のカフェで昼食を取れると述べている。', '草地の丘の上についての言及はない。'] },
      { tag: '詳細', t: ['p4type'], qid: 'v4q91p', s: 'What time does the speaker say the group will return?',
        c: ['1:00 p.m.', '2:30 p.m.', '4:00 p.m.', '5:30 p.m.'],
        a: 3,
        e: '"we should be back at the minibus by half past five" と述べている。',
        w: ['午後1時という数値は出ていない。', '午後2時半という数値は出ていない。', '午後4時という数値は出ていない。', '正解。午後5時半に戻ると述べている。'] },
    ],
  }),

  /* ── 92–94 サービスエリアの構内放送（Lockyer Services） ─────────────
     対象はキャラバン利用者の1つだけ（トラック・バス・バイクの運転手には触れない）。
     提示するのは運転免許証の1つだけ（燃料の領収書・会員カードには触れない。駐車許可証は発行の文脈で出る）。
     無料駐車時間は8時間の1つの数値だけを述べる。 */
  talk({
    n: [92, 93, 94], lv: 3, k: 'announcement',
    s: [
      { role: 'M-Br', text: 'Could we have your attention, please — this announcement is for anyone parked here today with a caravan.' },
      { role: 'M-Br', text: "If you'd like to make use of our long-stay area at the back of the car park, please come to the shop counter first and show your driving licence, so we can issue you a parking permit for your windscreen." },
      { role: 'M-Br', text: "With that permit, you're welcome to park in the long-stay area for up to eight hours completely free of charge." },
      { role: 'M-Br', text: "Please don't leave your caravan in the long-stay area without a permit displayed, as it may be clamped." },
      { role: 'M-Br', text: 'Please also make sure your caravan sits fully inside the marked bay, so other vehicles can still pass safely behind you.' },
      { role: 'M-Br', text: 'Thanks for choosing Lockyer Services — enjoy your journey.' },
    ],
    ja: '高速道路のサービスエリア、ロッキヤー・サービシズでの構内放送。今日ここに駐車しているキャラバン利用者向けの案内である。駐車場奥の長時間駐車エリアを利用したい場合は、まず店のカウンターで運転免許証を提示し、フロントガラスに貼る駐車許可証を発行してもらうよう案内する。その許可証があれば、最大8時間まで無料で長時間駐車エリアを利用できるという。許可証を掲示せずにキャラバンを置いていくと車輪止めをされる可能性があると注意し、区画内にきちんと収まるように駐車し、後続車が通行できるようにも求める。最後に利用への感謝と道中の無事を祈る言葉で締めくくる。',
    v: [['long-stay area', '長時間駐車エリア'], ['windscreen', 'フロントガラス'], ['clamped', '車輪止めをされた']],
    q: [
      { tag: '概要', qid: 'v4q92p', s: 'Who is the announcement mainly intended for?',
        c: ['Lorry drivers', 'Coach drivers', 'Caravan owners', 'Motorcyclists'],
        a: 2,
        e: '冒頭で "this announcement is for anyone parked here today with a caravan" と述べている。',
        w: ['トラックの運転手についての言及はない。', 'バスの運転手についての言及はない。', '正解。キャラバンで駐車している人向けの放送である。', 'バイク利用者についての言及はない。'] },
      { tag: '詳細', qid: 'v4q93p', s: 'What should the listeners show at the shop counter?',
        c: ['Their fuel receipt', 'Their driving licence', 'Their loyalty card', 'Their parking ticket'],
        a: 1,
        e: '"please come to the shop counter first and show your driving licence" と述べている。',
        w: ['燃料の領収書についての言及はない。', '正解。運転免許証を提示するよう述べている。', '会員カードについての言及はない。', '店で発行されるのは駐車許可証（"issue you a parking permit"）で、カウンターで見せる物ではない。カウンターで見せるよう求められているのは運転免許証である。'] },
      { tag: '詳細', qid: 'v4q94p', s: 'How long can the listeners park free of charge?',
        c: ['For one hour', 'For two hours', 'For four hours', 'For eight hours'],
        a: 3,
        e: '"you\'re welcome to park in the long-stay area for up to eight hours completely free of charge" と述べている。',
        w: ['1時間という数値は出ていない。', '2時間という数値は出ていない。', '4時間という数値は出ていない。', '正解。8時間まで無料と述べている。'] },
    ],
  }),

  /* ── 95–97 地域ラジオ放送（Loveridge、Hambrook Road の街路樹） ─────────
     植える本数は65本の1つの数値だけを述べる。
     住民への依頼は「傷んだ木を自治体に報告する」の1つだけ（ボランティア・水やり・寄付には触れない）。
     Q97 は「2年前の嵐以来ずっと木がなく寂しかった」という描写で示唆にとどめ、
     「嵐で失った」と明言はしない（示唆から推測させる）。舗装工事・商店・バス専用レーンには触れない。 */
  talk({
    n: [95, 96, 97], lv: 3, k: 'broadcast',
    s: [
      { role: 'W-Au', text: 'Now to local news: work begins next week on replanting street trees along Hambrook Road, here in Loveridge.' },
      { role: 'W-Au', text: 'Sixty-five semi-mature trees will go in along the length of the road, which has looked bare and exposed ever since a severe storm battered the area two winters ago.' },
      { role: 'W-Au', text: "The council is asking residents living nearby to keep an eye on the new trees over the coming months, and to let the council's parks team know straight away about any that look broken or unwell, rather than try pruning them themselves." },
      { role: 'W-Au', text: 'A council spokesperson said the new avenue should reach a decent height within about ten years, restoring some of the shade the road has been missing.' },
      { role: 'W-Au', text: "That's all for local news — sport is next." },
    ],
    ja: '地域ラジオのローカルニュースコーナー。来週から、ラヴリッジのハムブルック・ロード沿いで街路樹の植樹作業が始まると伝える。65本の成木手前の木がこの道路沿いに植えられる予定で、この道路は2年前の冬に激しい嵐が地域を襲って以来、木がなく寂しい様子が続いていたと述べる。地域住民に対しては、今後数か月新しい木の様子に気を配り、折れていたり元気がないように見える木を見つけたら自分で剪定などをせず、すぐに自治体の公園管理チームに知らせるよう呼びかける。自治体の広報担当者は、新しい並木がおよそ10年ほどで見栄えのする高さに育ち、この道路に足りなかった木陰を取り戻せるだろうと述べたという。',
    v: [['semi-mature', '若木より育った、成木手前の'], ['battered', '打撃を受けた、痛めつけられた'], ['parks team', '公園管理チーム']],
    q: [
      { tag: '詳細', qid: 'v4q95p', s: 'How many trees will be planted on Hambrook Road?',
        c: ['40', '65', '120', '180'],
        a: 1,
        e: '"Sixty-five semi-mature trees will go in along the length of the road" と述べている。',
        w: ['40という数値は出ていない。', '正解。65本植えると述べている。', '120という数値は出ていない。', '180という数値は出ていない。'] },
      { tag: '詳細', qid: 'v4q96p', s: 'What does the speaker say residents can do to help?',
        c: ['Volunteer to help with planting', 'Water young trees during dry spells', 'Report damaged trees to the council', 'Sponsor a tree for a fee'],
        a: 2,
        e: '"to let the council\'s parks team know straight away about any that look broken or unwell" と述べており、傷んだ木を見つけたらすぐ自治体の公園管理チームに知らせるよう住民に求めている。',
        w: ['植樹のボランティアについての言及はない。', '水やりについての言及はない。', '正解。傷んだ木を自治体の公園管理チームに知らせるよう述べている。', '寄付についての言及はない。'] },
      { tag: '推測', qid: 'v4q97p', s: 'What is suggested about Hambrook Road?',
        c: ['It lost its old trees in a storm', 'It is due for resurfacing soon', 'It runs past a row of shops', 'It gained a new bus lane recently'],
        a: 0,
        e: '"which has looked bare and exposed ever since a severe storm battered the area two winters ago" と述べており、この描写から、同じ道路がかつて並木を持っていて、それを嵐で失ったことがうかがえる。',
        w: ['正解。2年前の冬の嵐以来ずっと木がなく寂しい様子だったという描写から、嵐で並木を失ったことがうかがえる。', '舗装工事の予定についての言及はない。', '沿道の商店についての言及はない。', '新しいバス専用レーンについての言及はない。'] },
    ],
  }),

  /* ── 98–100（図表）寝具店の留守番電話（Hartsdale Beds） ─────────────
     表は凍結どおり（Lathom:Retail park/Cinema／Heddon:Town centre/Supermarket／
     Lowfield:Town centre/Cinema／Hawksby:Retail park/Supermarket）。
     表の語（店名・retail・park・centre・cinema・supermarket）は音声に出さない。
     立地は「郊外の大型店が並ぶ一角」（Retail park の言い換え）、隣接施設は「映画を観に行く建物の隣」
     （Cinema の言い換え）を別々の文で伝え、この2つを満たすのは Lathom だけになる。
     自己試行：音声だけ（表なし）→店名との対応が不明で 1/4。表だけ（音声なし）→4行とも
     立地・隣接の組み合わせが1回ずつで見分けがつかず 1/4。立地の手がかりだけなら
     Lathom/Hawksby の2択（1/2）、隣接施設の手がかりだけなら Lathom/Lowfield の2択（1/2）。
     両方そろって Lathom に確定。価格は575ポンドの1つだけを述べる。
     Q100 は「今のマットレスが真ん中でへこんで眠れない」という描写で買い替えの必要性を示唆し、
     転居・賃貸・以前の購入には触れない。 */
  talk({
    n: [98, 99, 100], lv: 4, k: 'telephone message', t: ['graphic', 'p4type'],
    graphic: {
      t: 'table', title: 'Hartsdale Beds Showrooms',
      head: ['Showroom', 'Setting', 'Next to'],
      rows: [
        ['Lathom', 'Retail park', 'Cinema'],
        ['Heddon', 'Town centre', 'Supermarket'],
        ['Lowfield', 'Town centre', 'Cinema'],
        ['Hawksby', 'Retail park', 'Supermarket'],
      ],
    },
    s: [
      { role: 'W-Br', text: "Hi, this is Lydia from Hartsdale Beds, returning your call about trying out that memory-foam mattress before you buy." },
      { role: 'W-Br', text: "That particular model is only out on the shop floor in one of our showrooms — it's the one out where the big warehouse-style shops are, just off the ring road, so it's an easy stop if you're driving out that way." },
      { role: 'W-Br', text: "It's the showroom right beside the place everyone goes to catch the latest film, so you can't miss it." },
      { role: 'W-Br', text: 'The mattress itself is five hundred and seventy-five pounds, and that includes free delivery within thirty miles.' },
      { role: 'W-Br', text: "Since you mentioned your old one's got a dip in the middle that's been keeping you up at night, I really think this model would suit you — give us a call back if you'd like to book a time to come in." },
    ],
    ja: '寝具店ハーツデール・ベッズの店員リディアから、問い合わせのあったメモリーフォーム・マットレスの試し寝について、客の留守番電話への折り返しメッセージ。そのモデルは自社の1店舗のみ店頭に展示しており、その店は郊外の大型店が立ち並ぶ一角、環状道路のすぐそばにあるため車で来るなら寄りやすいと案内する。さらに、その店はみんなが最新作の映画を観に行く建物のすぐ隣にあり、見つけやすいと伝える。マットレスの価格は575ポンドで、30マイル以内は送料無料だと案内する。客が以前、今使っているマットレスは真ん中がへこんでいて夜よく眠れないと話していたことに触れ、このモデルが向いていると思うので、来店の予約をしたければ折り返してほしいと締めくくる。',
    v: [['ring road', '環状道路'], ['showroom', 'ショールーム、展示場'], ['dip', 'へこみ、くぼみ']],
    q: [
      { tag: '図表', qid: 'v4q98p', s: 'Look at the graphic. Where can the listener try out the mattress?',
        c: ['Lathom', 'Heddon', 'Lowfield', 'Hawksby'],
        a: 0,
        e: '話し手は "it\'s the one out where the big warehouse-style shops are, just off the ring road" と述べており、これは表の Retail park に立地する2つのショールーム（Lathom・Hawksby）のどちらかを指す。さらに "It\'s the showroom right beside the place everyone goes to catch the latest film" とも述べており、これは表の Cinema の隣にある2つのショールーム（Lathom・Lowfield）のどちらかを指す。両方を満たすのは Lathom（Retail park かつ Cinema の隣）だけである。',
        w: ['正解。郊外の大型店の一角にあり、かつ映画館の隣にあるのは Lathom だけである。', '立地・隣接施設のどちらも話し手の説明と合わない。', '隣接施設は合うが、立地が Town centre であり、話し手が述べた郊外の大型店の一角という説明と合わない。', '立地は合うが、隣接施設が Supermarket であり、話し手が述べた「映画を観に行く場所の隣」という説明と合わない。'] },
      { tag: '詳細', t: ['p4type'], qid: 'v4q99p', s: 'How much does the speaker say the mattress costs?',
        c: ['£389', '£449', '£519', '£575'],
        a: 3,
        e: '"The mattress itself is five hundred and seventy-five pounds" と述べている。',
        w: ['389ポンドという数値は出ていない。', '449ポンドという数値は出ていない。', '519ポンドという数値は出ていない。', '正解。575ポンドと述べている。'] },
      { tag: '推測', t: ['p4type'], qid: 'v4q100p', s: 'What is suggested about the listener?',
        c: ['They moved to the area recently', 'They are furnishing a rental property', 'They have bought from the shop before', 'They need to replace a damaged mattress'],
        a: 3,
        e: '"you mentioned your old one\'s got a dip in the middle that\'s been keeping you up at night" と述べており、この描写から、聞き手が傷んだ（へたった）マットレスの買い替えを検討していることがうかがえる。',
        w: ['転居についての言及はない。', '賃貸物件の家具についての言及はない。', '以前の購入についての言及はない。', '正解。今のマットレスが真ん中でへこんで眠れないという描写から、傷んだマットレスの買い替えを検討していることがうかがえる。'] },
    ],
  }),
];
