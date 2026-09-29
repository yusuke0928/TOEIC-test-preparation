/* =============================================================
   予想模試 Vol.4 — Part 3 後半（No.53–70）
   設問（stem・4択）は凍結済み（v15/plans/vol4-final-P3.txt）。正解はメインの
   くじ（v15/dice/vol4-l2b.txt）による。本文はこのくじに合わせて実装役が
   新規に書いた（2026-09-29。方式は CLAUDE.md「設問を先に作り、正解はくじで
   決める」）。stem・選択肢・正解は1字も変えていない。
   ============================================================= */

/* `qid` は id の明示指定。中身を新規に書いたユニット・設問は SRS の履歴を
   引き継がせないため、通し番号由来の既定 id ではなく新しい id（v4q<no>p）を
   与える（`no` は 1〜200 の連番なので絶対に変えない）。 */
const set = (o) => ({
  id: `v4-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v4q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2B = [

  /* ── 53–55（図表）────────────────────────────────── */
  /* 正解はくじ（53=A Job 11, 54=A, 55=B）。表は凍結（Job/Worktop/Hob）。
     音声は表のセル語（Wood/Stone/Gas/Induction）・列名（Worktop/Hob）・
     Job の番号を一度も言わず、天板の素材（solid oak／granite）とコンロの
     種類（open flame／glass top for magnetic pans）を別々の文で伝える。
     自己試行：表だけ→4択のまま絞れない（1/4）。音声だけ→どの Job 番号にも
     対応付けられない（1/4）。両方そろって初めて Job 11 に一意化する。
     Q54 の持ち物（取っ手）と Q55 の遅れの原因（幹線道路の事故）は、引き継ぎの
     理由（同僚が別の修理対応で手が離せない）ともお互いとも無関係な独立の話題
     にしてある。 */
  set({
    n: [53, 54, 55], lv: 4, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Kitchen Jobs – This Week',
      head: ['Job', 'Worktop', 'Hob'],
      rows: [
        ['Job 11', 'Wood', 'Gas'],
        ['Job 3', 'Wood', 'Induction'],
        ['Job 17', 'Stone', 'Gas'],
        ['Job 8', 'Stone', 'Induction'],
      ],
    },
    s: [
      { role: 'W-Am', text: 'Before you head out, we\'ve reshuffled the schedule a bit — you\'re taking over one of the other fitter\'s kitchens today. He\'s stuck on a repair that\'s running long.' },
      { role: 'M-Cn', text: 'No problem. Which one is it?' },
      { role: 'W-Am', text: 'The one where the customer\'s gone for solid oak, not that granite everybody\'s been asking for lately.' },
      { role: 'M-Cn', text: 'Oak, right. Does it cook over an open flame, or is it one of those smooth glass tops that only work with magnetic pans?' },
      { role: 'W-Am', text: 'Open flame — she was quite firm about not wanting the glass one.' },
      { role: 'M-Cn', text: 'Good, that\'s enough to go on. Anything else before I head off?' },
      { role: 'W-Am', text: 'Actually, yes. The customer changed her mind about the door handles — could you swing by the store and grab a spare set before you go?' },
      { role: 'M-Cn', text: 'Sure, I\'ll pick them up on the way. Oh, and heads-up: there\'s been a crash on the main road this morning, so traffic\'s backed up right across town.' },
      { role: 'W-Am', text: 'Thanks for the warning — I\'ll leave a bit earlier for my own job, then.' },
    ],
    ja: 'Corfield Kitchens の施工担当者2人が、本日の現場対応について話している。女性は、別の担当者が修理対応で手が離せないため男性がその案件を引き継ぐことになったと伝え、天板は客が無垢のオーク材を選んだこと、コンロはガラスの天板ではなく直火式であることを別々に伝える。続けて女性は、客が当日扉の取っ手について考えを変えたため、店で予備の一式を用意してから現場に向かうよう頼む。男性は、幹線道路で事故があり町中で交通が渋滞していることも伝え、女性は自分の訪問も早めに出発すると応じる。',
    v: [['solid oak', '無垢のオーク材'], ['magnetic pans', '磁性のある鍋'], ['spare set', '予備の一式'], ['backed up', '（交通が）渋滞している']],
    q: [
      { tag: '図表', qid: 'v4q53p', s: 'Look at the graphic. Which job will the man take over?',
        c: ['Job 11', 'Job 3', 'Job 17', 'Job 8'],
        a: 0,
        e: '女性が、引き継ぐ案件について「天板は無垢のオーク材（solid oak）」「コンロは直火式（open flame、ガラスの天板ではない）」という2つの手がかりを伝えている。表で Wood（無垢材に対応）かつ Gas（直火式に対応）の行は Job 11 だけである。',
        w: ['正解。', 'Job 3 は天板が Wood で無垢材の条件は満たすが、コンロが Induction（ガラスの天板で磁性の鍋専用）であり、女性が伝えた「直火式」の条件に合わない。', 'Job 17 はコンロが Gas で直火式の条件は満たすが、天板が Stone であり、女性が伝えた「無垢のオーク材」の条件に合わない。', 'Job 8 は天板が Stone、コンロが Induction で、無垢材・直火式のどちらの条件にも合わない。'] },
      { tag: '詳細', qid: 'v4q54p', t: ['p3detail'], s: 'What does the woman ask the man to bring to a site?',
        c: ['A spare set of cabinet handles', 'A backup set of drill bits', 'A copy of a floor plan', 'A set of installation instructions'],
        a: 0,
        e: '女性が「客が扉の取っ手について考えを変えたので、店で予備の一式を取ってきてほしい（grab a spare set before you go）」と頼んでいる。',
        w: ['正解。', '予備のドリルビットについての記述は会話のどこにも出てこない。', '図面の写しについての記述は会話のどこにも出てこない。', '取り付け説明書についての記述は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v4q55p', t: ['p3detail'], s: 'What does the man say caused a delay?',
        c: ['A late delivery from the supplier', 'A crash on the main road', 'A staff member calling in sick', 'A parking restriction near the site'],
        a: 1,
        e: '男性が「幹線道路で事故があり、町中で交通が渋滞している（there\'s been a crash on the main road … traffic\'s backed up right across town）」と伝えている。',
        w: ['仕入先からの配送の遅れについての記述は会話のどこにも出てこない。', '正解。', '従業員の病欠についての記述は会話のどこにも出てこない（引き継ぎの理由は同僚が別の修理対応で手が離せないことであり、病欠ではない）。', '現場近くの駐車規制についての記述は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 56–58（意図）────────────────────────────────── */
  /* 正解はくじ（56=D, 57=B, 58=C）。引用「That coach seats forty-nine」の
     直前で、参加人数（36人）を先に確定させたうえで女性がバスの定員を心配する
     文脈だけを置き、(A)(C)(D) に当たる話題（保護者の追加同行・別クラスの合流・
     2台目の車両）はどこにも出さない。Q58 の「その日」の予定は、男性が同行
     できない理由として「別の学校の事務を代行する」を一度だけほのめかす。
     否定は「同行できない」の1本のみ（ユニット内1本）。 */
  set({
    n: [56, 57, 58], lv: 4, t: ['p3int'],
    s: [
      { role: 'W-Br', text: 'Before you send the letter out, has the museum confirmed the final headcount — all thirty-two children plus the four staff?' },
      { role: 'M-Au', text: 'Yes, thirty-six altogether, and they\'ve confirmed the group rate covers that number.' },
      { role: 'W-Br', text: 'Good. I keep wondering whether thirty-six will be a tight squeeze on the coach, though.' },
      { role: 'M-Au', text: 'You really don\'t need to worry about that. That coach seats forty-nine.' },
      { role: 'W-Br', text: 'Oh, that\'s far more room than I expected. Now, what about the cost of the school lunch? Have the children been told, or are they all bringing packed lunches?' },
      { role: 'M-Au', text: 'I\'ll ring the catering office this afternoon, get the exact price per child, and let you know.' },
      { role: 'W-Br', text: 'Please do — I need that figure before the letter goes home this week.' },
      { role: 'M-Au', text: 'Will do. Oh, one more thing: I won\'t be able to join you on the day itself. One of the other schools in the group is short-staffed that morning, so I\'ll be filling in for their office manager.' },
      { role: 'W-Br', text: 'That\'s fine, we\'ll manage without you.' },
    ],
    ja: 'Grendon Primary School で、校長（女性）が事務職員（男性）と来月の校外学習の準備について話している。女性は博物館側が確認した人数（児童32人と職員4人の計36人）を確認し、その人数でバスが窮屈にならないか心配するが、男性はコーチが49人乗りであることを伝えて安心させる。続けて女性は学校給食の費用について確認を頼み、男性はその日の午後に給食担当部署へ問い合わせると答える。最後に男性は、遠足当日は人手不足の別の学校で事務を代行するため同行できないと伝える。',
    v: [['headcount', '人数'], ['tight squeeze', '窮屈な状態'], ['catering office', '給食を扱う部署'], ['filling in for', '代理を務める']],
    q: [
      { tag: '詳細', qid: 'v4q56p', t: ['p3detail'], s: 'What does the woman ask the man to confirm?',
        c: ['The timing of the school pickup', 'The list of items for the trip', 'The date of the parent meeting', 'The cost of the school lunch'],
        a: 3,
        e: '女性が「学校給食の費用はどうなっているか（what about the cost of the school lunch?）」と尋ね、男性に確認を頼んでいる。',
        w: ['送迎時刻の確認についての記述は会話のどこにも出てこない。', '持ち物一覧の確認についての記述は会話のどこにも出てこない。', '保護者会の日程についての記述は会話のどこにも出てこない。', '正解。'] },
      { tag: '意図', qid: 'v4q57p', s: 'What does the man mean when he says, "That coach seats forty-nine"?',
        c: ['He is objecting to inviting more parents.', 'He is reassuring her about the numbers.', 'He is suggesting that another class join them.', 'He is explaining the need for another vehicle.'],
        a: 1,
        e: '直前で女性が「36人ではバスが窮屈にならないか（whether thirty-six will be a tight squeeze on the coach）」と心配しており、男性は「そのコーチは49人乗りだ」と伝えて安心させている。',
        w: ['保護者をさらに同行させる案についての記述は会話のどこにも出てこない。', '正解。', '別のクラスを合流させる案についての記述は会話のどこにも出てこない。', '2台目の車両についての記述は会話のどこにも出てこない。'] },
      { tag: '推測', qid: 'v4q58p', t: ['p3detail'], s: 'What is suggested about the man?',
        c: ['He will be on holiday that day.', 'He will go on the trip with the class.', 'He will be working at another school that day.', 'He will be training a new colleague that day.'],
        a: 2,
        e: '男性が「当日は同じグループの別の学校が人手不足で、そちらの事務を代わりに務める（I\'ll be filling in for their office manager）」と述べている。',
        w: ['休暇を取るという記述は会話のどこにも出てこない。', '男性は「当日は同行できない（I won\'t be able to join you on the day itself）」と明言しており、遠足に同行するとは述べていない。', '正解。', '新人研修についての記述は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 59–61（図表）────────────────────────────────── */
  /* 正解はくじ（59=D Machine 10, 60=A, 61=A）。表は凍結（Machine/Power/
     Attachment）。音声は Diesel/Electric/Blade/Fork・列名・Machine の番号を
     一度も言わず、動力（runs on fuel from the pump／plug in overnight）と
     付属品（flat plate for pushing soil／prongs for lifting pallets）を
     別々の文で伝える。自己試行：表だけ→1/4。音声だけ→Machine 番号に
     対応付けられない（1/4）。両方そろって Machine 10 に一意化する。貸出期間
     （Q60）は男性が「2日間」と1回だけ言い、曜日は出さない（曜日から
     期間を推させない）。 */
  set({
    n: [59, 60, 61], lv: 4, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Machines Available Today',
      head: ['Machine', 'Power', 'Attachment'],
      rows: [
        ['Machine 7', 'Diesel', 'Blade'],
        ['Machine 15', 'Electric', 'Fork'],
        ['Machine 2', 'Electric', 'Blade'],
        ['Machine 10', 'Diesel', 'Fork'],
      ],
    },
    s: [
      { role: 'M-Br', text: 'The order confirmation just came through — we need one of these ready before they collect it this afternoon.' },
      { role: 'W-Cn', text: 'Which one\'s going out?' },
      { role: 'M-Br', text: 'The one that runs on fuel from the pump, not the one you plug in overnight.' },
      { role: 'W-Cn', text: 'So it\'s one of the diesels, then. Is it the one with the flat plate for pushing soil, or the one with the prongs for lifting pallets?' },
      { role: 'M-Br', text: 'The prongs — they\'re clearing out a warehouse and need to shift a stack of pallets.' },
      { role: 'W-Cn', text: 'Got it, I\'ll get that one sorted now.' },
      { role: 'M-Br', text: 'It\'s booked out for two days.' },
      { role: 'W-Cn', text: 'Fine. Could you give me a hand loading it onto the trailer once it\'s ready? It\'s heavier than I want to manage on my own.' },
      { role: 'M-Br', text: 'Sure thing, I\'ll come find you when it\'s done.' },
    ],
    ja: 'Cudmore Farm Machinery の従業員2人が、来週の貸出に向けて機材を準備している。男性は、これから貸し出す機材が燃料ポンプから給油するタイプで一晩充電するタイプではないと伝え、女性はディーゼル式の2台に絞る。続けて男性は、土を押す板ではなくパレットを持ち上げる爪が付いた方だと伝え、倉庫の片付けでパレットを移動させるためだと説明する。貸出期間は2日間だと男性が述べ、女性は準備ができたら荷台への積み込みを手伝ってほしいと頼む。',
    v: [['booked out', '貸し出し予約で埋まっている'], ['prongs', '（フォークリフトの）爪'], ['pallets', 'パレット'], ['plug in', '電源につなぐ']],
    q: [
      { tag: '図表', qid: 'v4q59p', s: 'Look at the graphic. Which machine will the woman prepare?',
        c: ['Machine 7', 'Machine 15', 'Machine 2', 'Machine 10'],
        a: 3,
        e: '男性が「燃料ポンプから給油するタイプで、一晩かけて充電するタイプではない（runs on fuel from the pump, not the one you plug in overnight）」と伝えて動力を絞り込み、続けて「土を押す板ではなく、パレットを持ち上げる爪（the prongs for lifting pallets）」と伝えて付属品を絞り込んでいる。表で Diesel（燃料式）かつ Fork（爪）の行は Machine 10 だけである。',
        w: ['Machine 7 は動力が Diesel で条件に合うが、付属品が Blade（土を押す板）であり、男性が伝えた「爪」の条件に合わない。', 'Machine 15 は付属品が Fork で条件に合うが、動力が Electric（一晩かけて充電するタイプ）であり、男性が伝えた「燃料ポンプから給油する」条件に合わない。', 'Machine 2 は動力が Electric、付属品が Blade で、どちらの条件にも合わない。', '正解。'] },
      { tag: '詳細', qid: 'v4q60p', t: ['p3detail'], s: 'According to the man, how long will the machine be rented for?',
        c: ['For two days', 'For four days', 'For one week', 'For two weeks'],
        a: 0,
        e: '男性が「2日間の貸し出しだ（It\'s booked out for two days）」と述べている。',
        w: ['正解。', '4日間という記述は会話のどこにも出てこない。', '1週間という記述は会話のどこにも出てこない。', '2週間という記述は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v4q61p', t: ['p3detail'], s: 'What does the woman say she needs help with?',
        c: ['Loading the machine onto a trailer', 'Finding the keys for the machine', 'Cleaning mud off the wheels', 'Arranging a convenient pickup time'],
        a: 0,
        e: '女性が「荷台への積み込みを手伝ってほしい（give me a hand loading it onto the trailer）」と頼んでいる。',
        w: ['正解。', '鍵を探すことについての記述は会話のどこにも出てこない。', '車輪の泥を落とすことについての記述は会話のどこにも出てこない。', '引き取り時間の調整についての記述は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 62–64（3名・意図）────────────────────────────── */
  /* 正解はくじ（62=D, 63=B, 64=A）。Q62 の所見は「排水口の蓋が緩んでいた」の
     1点のみ。Q63 の引用「There's a bus route over it」の直前は「上の道路を
     数時間閉鎖してはどうか」という提案だけを置き、(A)(C)(D) に当たる話題
     （現場の騒音・役所からの電話・夜間工事の依頼）はどこにも出さない。もう
     1人の男性（M-Cn）には Q63 の他の3本に当たる話をさせない。Q64 は3人
     そろっての直後の行動（写真の見直し）1つだけにする。 */
  set({
    n: [62, 63, 64], lv: 5, t: ['p3int'], k: 'conversation with three speakers',
    s: [
      { role: 'W-Au', text: 'I\'ve finished checking the underpass. There\'s a drain cover near the south end that\'s come loose from its frame — that\'s the only issue I found.' },
      { role: 'M-Br', text: 'Good, otherwise it\'s structurally sound. We still need to get that cover refitted, though. What if we closed the road above for a few hours tomorrow and did it properly in daylight?' },
      { role: 'M-Cn', text: 'There\'s a bus route over it.' },
      { role: 'M-Br', text: 'Ah, right — I forgot they rerouted the number forty-two through here after the bridge closed.' },
      { role: 'W-Au', text: 'So we\'d need to do it at night instead, or keep at least one lane open.' },
      { role: 'M-Br', text: 'Let\'s not decide now. Why don\'t we look back through the photos we took on site today first, so we can see how much clearance there actually is around the cover?' },
      { role: 'W-Au', text: 'Good idea — I\'ve already got them loaded up.' },
      { role: 'M-Cn', text: 'Sounds good to me.' },
    ],
    ja: 'Calshot Civil Consulting の技術者（女性）が、2人の男性同僚とともに、幹線道路の下を通る歩行者用地下道の点検結果を確認している。女性は、南端付近の排水口の蓋が枠から緩んで外れていたことだけを所見として報告する。1人の男性は、蓋の補修のため翌日数時間だけ上の道路を閉鎖してはどうかと提案するが、もう1人の男性は、その上には現在バス路線が通っていることを指摘して案に異を唱える。最初の男性はバスの路線が迂回でそこを通るようになったことを思い出し、女性は夜間の作業か車線の一部を残す方法を検討する必要があると言う。最後に、その場で決めずに現場で撮った写真を見返してから判断しようという話になる。',
    v: [['underpass', '地下道'], ['come loose', '緩んで外れる'], ['rerouted', '迂回させられた'], ['clearance', '（作業に必要な）隙間・余裕']],
    q: [
      { tag: '詳細', qid: 'v4q62p', t: ['p3detail'], s: 'What does the woman say was found during an inspection?',
        c: ['A crack in a concrete beam', 'A gap in the safety fencing', 'A rusted section of railing', 'A loose drain cover'],
        a: 3,
        e: '女性が「南端付近の排水口の蓋が枠から外れて緩んでいた（a drain cover near the south end that\'s come loose from its frame）」ことだけを所見として報告している。',
        w: ['コンクリート梁のひびについての記述は会話のどこにも出てこない。', '防護柵の隙間についての記述は会話のどこにも出てこない。', '手すりの錆についての記述は会話のどこにも出てこない。', '正解。'] },
      { tag: '意図', qid: 'v4q63p', s: 'What does one of the men mean when he says, "There\'s a bus route over it"?',
        c: ['He is explaining why the site was so noisy.', 'He is objecting to a proposed road closure.', 'He is accounting for a call from the council.', 'He is agreeing to a request for night work.'],
        a: 1,
        e: '直前で男性が「明日、数時間だけ上の道路を閉鎖して昼間に作業してはどうか（What if we closed the road above for a few hours tomorrow）」と提案しており、もう一人の男性は「その上にはバス路線が通っている」と応じて、道路閉鎖の案に異を唱えている。',
        w: ['現場が騒がしかった理由についての記述は会話のどこにも出てこない。', '正解。', '役所からの電話についての記述は会話のどこにも出てこない。', '夜間工事の依頼についての記述は会話のどこにも出てこない。'] },
      { tag: '次の行動', qid: 'v4q64p', t: ['p3detail'], s: 'What will the speakers most likely do next?',
        c: ['Look through the site photographs', 'Phone the client\'s project manager', 'Book a follow-up inspection', 'Draw up a cost estimate'],
        a: 0,
        e: '男性が「現場で撮った写真を見返してみよう（look back through the photos we took on site today）」と提案し、女性が「もう用意してある」と応じている。',
        w: ['正解。', '施主の担当者への電話についての記述は会話のどこにも出てこない。', '再点検の予約についての記述は会話のどこにも出てこない。', '見積もり作成についての記述は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 65–67（推測）────────────────────────────────── */
  /* 正解はくじ（65=C, 66=A, 67=A）。女性が探す品（ウールのコート）・男性が
     店について述べること（木曜遅くまで営業）・女性についての推測（親族への
     贈り物）は、それぞれ1つだけ述べる。他の選択肢に当たる話題はどこにも
     出さない。 */
  set({
    n: [65, 66, 67], lv: 3,
    s: [
      { role: 'W-Cn', text: 'Hi, I\'m hoping you can help — I\'m after a proper wool coat, something with real weight to it, ideally from the fifties or sixties.' },
      { role: 'M-Au', text: 'You\'ve come to the right shop. We\'ve got a whole rail of those just past the hats. Who\'s it for, if you don\'t mind me asking?' },
      { role: 'W-Cn', text: 'My aunt, actually. Her birthday\'s coming up and she\'s mad about anything vintage.' },
      { role: 'M-Au', text: 'That\'s sweet of you. Do you know her size?' },
      { role: 'W-Cn', text: 'A ten, I believe.' },
      { role: 'M-Au', text: 'Let me show you what we\'ve got, then.' },
      { role: 'W-Cn', text: 'Oh, this green one is gorgeous. Does it need any alterations, do you think?' },
      { role: 'M-Au', text: 'Looks about right to me, honestly. If you\'re still not sure, though, we stay open late on Thursdays, until eight — you could always bring her in to try it on herself before you decide.' },
      { role: 'W-Cn', text: 'That\'s a good idea. I might just do that. Thanks for your help.' },
    ],
    ja: 'Corscombe Vintage で、女性客が男性の店員に、重みのある本格的なウールのコートを探していると伝える。誰のためか尋ねられ、もうすぐ誕生日を迎える叔母のためで、叔母はヴィンテージ好きだと説明する。店員は在庫を見せ、女性は緑色のコートを気に入りお直しが必要か尋ねると、店員はこのままで大丈夫だろうと答え、心配なら木曜日は8時まで遅くまで開けているので、叔母を連れて試着させてから決めてもよいと勧める。',
    v: [['a rail of', '（服の）ラック一列分'], ['mad about', '夢中である'], ['alterations', 'お直し'], ['try it on', '試着する']],
    q: [
      { tag: '詳細', qid: 'v4q65p', s: 'What is the woman looking for?',
        c: ['A leather handbag', 'A silk scarf', 'A wool coat', 'A pair of boots'],
        a: 2,
        e: '女性が「重みのある本格的なウールのコートを探している（I\'m after a proper wool coat, something with real weight to it）」と述べている。',
        w: ['革のハンドバッグについての記述は会話のどこにも出てこない。', 'シルクのスカーフについての記述は会話のどこにも出てこない。', '正解。', 'ブーツについての記述は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v4q66p', s: 'What does the man mention about the shop?',
        c: ['It stays open late on Thursdays.', 'It offers a repair service.', 'It has a branch in another town.', 'It sells some items online.'],
        a: 0,
        e: '男性が「木曜日は8時まで遅くまで開けている（we stay open late on Thursdays, until eight）」と伝えている。',
        w: ['正解。', '修理サービスについての記述は会話のどこにも出てこない。', '別の町の支店についての記述は会話のどこにも出てこない。', 'オンライン販売についての記述は会話のどこにも出てこない。'] },
      { tag: '推測', qid: 'v4q67p', s: 'What is suggested about the woman?',
        c: ['She is buying a gift for a relative.', 'She has recently moved to the area.', 'She is a friend of the shop\'s owner.', 'She works for a film company.'],
        a: 0,
        e: '女性が「叔母のため、もうすぐ誕生日で、ヴィンテージ好きだ（My aunt, actually. Her birthday\'s coming up and she\'s mad about anything vintage）」と述べており、親族への贈り物として探していることがうかがえる。',
        w: ['正解。', '最近この地域に越してきたという記述は会話のどこにも出てこない。', '店主の友人であるという記述は会話のどこにも出てこない。', '映画会社に勤めているという記述は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 68–70（次の行動）────────────────────────────── */
  /* 正解はくじ（68=B, 69=B, 70=D）。客が買った家具（大型のコーナーデスク）・
     男性の頼み事（客の都合のよい時間）・男性の直後の行動（出発前の交通確認）
     は、それぞれ1つだけ述べる。「客に確認の電話をかける」のは女性の行動として
     明確に区別し、男性の行動とは書かない。 */
  set({
    n: [68, 69, 70], lv: 3,
    s: [
      { role: 'W-Br', text: 'New job just came in — the customer\'s bought a large corner desk and wants it put together sometime this week.' },
      { role: 'M-Cn', text: 'No problem, I can take that one. Could you find out what time would suit them best? I really don\'t want to turn up while they\'re still at work.' },
      { role: 'W-Br', text: 'Good thinking. I\'ll ring them now and text you a time once I\'ve got one.' },
      { role: 'M-Cn', text: 'Thanks. I\'ve got another call booked nearby that morning anyway, so it\'ll help me plan the order I visit people in.' },
      { role: 'W-Br', text: 'Makes sense. I\'ll let you know as soon as I hear back.' },
      { role: 'M-Cn', text: 'Great. Oh, and that last job of mine took forever because of hold-ups on the ring road, so I\'ll check the traffic before I set off this time, just in case.' },
      { role: 'W-Br', text: 'Good idea. Let me know if anything changes.' },
    ],
    ja: 'Granthope Assembly Services で、配車担当の女性が技術者の男性に、客が購入した大型のコーナーデスクを今週中に組み立ててほしいという依頼が入ったと伝える。男性はその仕事を引き受け、客の在宅時に訪問できるよう都合のよい時間を確認してほしいと女性に頼む。女性はすぐに客へ電話し、時間が分かり次第知らせると答える。男性は、同じ朝に近くで別の訪問予定があるので順番を決めるのに役立つと言い、さらに前回の仕事では環状道路の渋滞で大幅に時間がかかったため、今回は出発前に交通状況を確認すると付け加える。',
    v: [['corner desk', 'コーナーデスク'], ['hold-ups', '（交通の）渋滞・停滞'], ['ring road', '環状道路'], ['set off', '出発する']],
    q: [
      { tag: '詳細', qid: 'v4q68p', t: ['p3detail'], s: 'What does the woman say the customer has bought?',
        c: ['A set of bunk beds', 'A large corner desk', 'A wardrobe with sliding doors', 'A tall glass-fronted bookcase'],
        a: 1,
        e: '女性が「客が大型のコーナーデスクを購入し、今週中に組み立てを希望している（the customer\'s bought a large corner desk and wants it put together sometime this week）」と伝えている。',
        w: ['二段ベッドについての記述は会話のどこにも出てこない。', '正解。', '引き戸付きのワードローブについての記述は会話のどこにも出てこない。', '背の高いガラス扉の書棚についての記述は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v4q69p', t: ['p3detail'], s: 'What does the man ask the woman for?',
        c: ['A photo of the assembly instructions', 'A convenient time for a visit', 'A number identifying the item\'s model', 'A pass to access the building'],
        a: 1,
        e: '男性が「客に都合のよい時間を確認してほしい（Could you find out what time would suit them best?）」と女性に頼んでいる。',
        w: ['組み立て説明書の写真についての記述は会話のどこにも出てこない。', '正解。', '型番を示す番号についての記述は会話のどこにも出てこない。', '建物に入るための通行証についての記述は会話のどこにも出てこない。'] },
      { tag: '次の行動', qid: 'v4q70p', t: ['p3detail'], s: 'What will the man most likely do next?',
        c: ['Call the customer to confirm a time', 'Collect a tool from the storeroom', 'Send the customer a price quote', 'Check the traffic on his route'],
        a: 3,
        e: '男性が「今回は出発前に交通状況を確認する（I\'ll check the traffic before I set off this time）」と述べている。',
        w: ['客に確認の電話をかけるのは女性の行動であり、男性の行動としての記述ではない。', '道具を倉庫から取ってくることについての記述は会話のどこにも出てこない。', '見積書を送ることについての記述は会話のどこにも出てこない。', '正解。'] },
    ],
  }),
];
