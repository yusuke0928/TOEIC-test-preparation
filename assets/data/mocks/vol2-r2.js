/* =============================================================
   予想模試 Vol.2 — Part 7 単一文書 前半（No.147–164）
   ============================================================= */

const sp = (o) => ({
  id: `v2-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v2q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
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
      title: 'Bickford Post Office — Children’s Picture Competition',
      body: [
        'Bickford Post Office is holding a picture competition for local children aged five to twelve. Each entry should be drawn or coloured on a single A4 sheet, with the child’s name and age written on the back, and left at the counter or posted to the branch by 30 April.',
        'Each child may submit up to two pictures. Parents are welcome to help with cutting and sticking, but the drawing or colouring itself should be the child’s own work.',
        'A panel from Bickford Library will pick one overall winner by 10 May. The winner’s family will be contacted by phone.',
        'The winning picture will then be enlarged, printed on a long vinyl sheet and hung across the front of the post office for the whole of June, so that everyone passing along the high street can see it.',
        'Entry forms are available free of charge at the counter, and any parent with questions is welcome to ask a member of staff.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v2q147p', s: 'How will the winning picture be used?',
        c: ['It will be printed on postcards sold at the counter.', 'It will be shown on a banner outside the branch.',
            'It will be reproduced on calendars given to customers.', 'It will be featured in the local community newsletter.'],
        a: 1,
        e: '第4段落に、入賞した絵は拡大されて長尺のビニールシートに印刷され、6月いっぱい郵便局の正面に掲げられる、とある。',
        w: ['はがきに印刷して販売するという記述はない。',
            '正解。',
            'カレンダーに複製するという記述はない。',
            '地域の会報に掲載するという記述はない。'] },
      { tag: 'NOT', t: ['p7not'], qid: 'v2q148p', s: 'What information is NOT given in the notice?',
        c: ['The theme that entries should follow', 'The size of paper entrants should use',
            'The number of entries allowed per child', 'The people who will judge the entries'],
        a: 0,
        e: '掲示は使用する紙のサイズ（A4判1枚）・1人あたりの応募点数の上限（2点まで）・審査を行う人物（Bickford図書館のパネル）を伝えているが、描くべき題材については触れていない。',
        w: ['正解。掲示のどこにも描くべき題材の指定はない。',
            '"a single A4 sheet" と、使用する紙のサイズが示されている。',
            '"submit up to two pictures" と、1人あたりの応募点数の上限が示されている。',
            '"A panel from Bickford Library will pick one overall winner" と、審査を行う人物が示されている。'] },
    ],
  }),

  /* ── 149–150 テキストメッセージ ───────────────────── */
  sp({
    n: [149, 150], lv: 4, t: ['p7intent'],
    docs: [{
      label: 'Text message chain',
      body: [{ t: 'chat', lines: [
        { who: 'Trevor Braddock', time: '10:02', text: 'Sandra, when you’re near the Hawksmere later, a customer just up the road from it has rung wanting a dozen tulips before lunch. Any chance you could swing by on the way?' },
        { who: 'Sandra Blackmore', time: '10:05', text: 'Sure, I can fit that in on the way over. I’ll take them with the hotel order.' },
        { who: 'Trevor Braddock', time: '10:06', text: 'Thanks, that’s a big help. I’ll ring her back and confirm.' },
        { who: 'Trevor Braddock', time: '10:41', text: 'Actually, could you nip back to the shop for half an hour first? I need to run to the bank before it shuts and there’s no one to mind the counter.' },
        { who: 'Sandra Blackmore', time: '10:44', text: "I'm due at the Hawksmere at twelve." },
        { who: 'Trevor Braddock', time: '10:46', text: 'Fair enough, I’ll ask the assistant from the shop next door to look after things instead.' },
        { who: 'Trevor Braddock', time: '10:48', text: 'While you’re there, could you leave one of the spring price sheets from the glovebox with the woman who runs their functions? She rang last week asking what we charge.' },
        { who: 'Sandra Blackmore', time: '10:50', text: 'Will do. I’ll leave it at the desk if she’s not free.' },
      ] }],
    }],
    q: [
      { tag: '意図', t: ['p7intent'], qid: 'v2q149p',
        s: `Why does the driver write, "I'm due at the Hawksmere at twelve."?`,
        c: ['To turn down a request to mind the shop.', 'To offer to take on an extra delivery.',
            'To explain why she is still at the shop.', 'To ask for some arrangements to be ready sooner.'],
        a: 0,
        e: '直前の10:41の発言でブラドックが「銀行に行きたいので30分だけ店番を頼めないか」と頼んでおり、10:44の発言はその頼みに対し、正午にはホテルにいなければならないと伝えることで、暗に断っている。',
        w: ['正解。',
            '追加の配達（近くの客へのチューリップ）は10:02にブラドックが頼み、10:05にサンドラが引き受けて済んでいる。10:44の発言は10:41の店番の依頼への返事で、10:46でブラドックは「Fair enough」と言って別の人に店番を頼んでいる。',
            '10:41で「could you nip back to the shop」と頼まれており、彼女はこの時点で店にいない。この発言は店にまだいる理由の説明ではなく、正午までにホテルに着いていなければならないという予定を伝えて、直前の店番の依頼を断るものである。',
            '花（アレンジメント）の仕上がりを早めてほしいという話はチェーンのどこにも無い。'] },
      { tag: '詳細', qid: 'v2q150p', s: 'What does the manager ask the driver to do at the hotel?',
        c: ['Photograph the arrangements after setting them up.', 'Collect a cheque from the front desk.',
            'Bring back the empty buckets from an earlier event.', `Give the hotel's events manager a price list.`],
        a: 3,
        e: '10:48の発言で、ブラドックは車に積んである春の価格表の1枚を、ホテルの催事を担当している女性に渡してほしいと頼んでいる。',
        w: ['フラワーアレンジメントを設置した後に写真を撮ってほしいという依頼はない。',
            '受付で小切手を受け取ってほしいという依頼はない。',
            '以前のイベントで使った空のバケツを持ち帰ってほしいという依頼はない。',
            '正解。'] },
    ],
  }),

  /* ── 151–152 広告 ─────────────────────────────────── */
  sp({
    n: [151, 152], lv: 3, t: ['p7syn'],
    docs: [{
      label: 'Advertisement',
      title: 'Hedgerow Cycling Tours',
      head: 'Guided Rides Through the Countryside',
      body: [
        'Hedgerow Cycling Tours runs half-day guided rides along the quiet lanes and bridleways between the village green and the coast, taking in orchards, old mill buildings and a stretch of river path that most drivers never see. Each group is kept small, with a local guide who knows every gate and shortcut along the way.',
        'The ride keeps a gentle pace, suited to the slowest rider rather than the fastest, with a stop at a viewpoint about halfway round. If someone’s tyre goes flat somewhere on the lanes, the guide carries a repair kit and can usually have the group moving again within ten minutes.',
        'Tours leave from the green in Hedgerow village every Saturday and Sunday morning between April and September, and take around three and a half hours to complete. A ride makes a popular birthday present, and a voucher for any of the tours can be ordered through our website or by calling the office.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v2q151p', s: 'What is indicated about the guided tours?',
        c: ['Bicycles are provided for participants who need one.', 'Lunch is included in the price of each tour.',
            'A minimum group size is required for private tours.', 'Gift vouchers can be purchased for the tours.'],
        a: 3,
        e: '最終段落に、贈り物用のバウチャーをウェブサイトや電話で注文できるとある。',
        w: ['参加者用に自転車を用意するという記述はない。',
            '昼食が料金に含まれるという記述はない。',
            '貸切ツアーに最少人数が必要だという記述はない。',
            '正解。'] },
      { tag: '同義語', t: ['p7syn'], qid: 'v2q152p', s: 'In paragraph 2, the word "flat" is closest in meaning to',
        c: ['level', 'fixed', 'deflated', 'dull'],
        a: 2,
        e: '第2段落の "If someone’s tyre goes flat somewhere on the lanes" は、タイヤの空気が抜けている状態を表しており、flat はここでは「空気が抜けた、パンクした」を意味する deflated に最も近い。',
        w: ['flat が level（平らな、起伏のない）に近いのは、土地・道・床など面の形を言うとき。本文の flat は tyre について go flat（タイヤの空気が抜ける）と言っており、面の起伏の話ではないので、この語義では読めない。',
            'flat が「一律の、定額の」の意味になるのは a flat fee のように料金を表すときだが、本文の flat は料金ではなくタイヤの状態を表している。',
            '正解。',
            'flat が dull に近いのは、話・演技・声・色などに張りや鮮やかさが無いことを言うとき。本文の flat は tyre を主語に go flat（タイヤの空気が抜ける）と言っており、面白みや鮮やかさの有無を言う語義では読めない。'] },
    ],
  }),

  /* ── 153–155 メール ───────────────────────────────── */
  sp({
    n: [153, 154, 155], lv: 4, t: ['p7inf'],
    docs: [{
      label: 'E-mail',
      body: [
        { t: 'kv', pairs: [
          ['From', 'Martin Bewley <martin.bewley@buxleighrecruitment.co.uk>'],
          ['To', 'Janet Hesketh <janet.hesketh@barrowfieldeng.co.uk>'],
          ['Subject', 'Quality Engineer role'],
        ] },
        'Dear Ms. Hesketh,',
        'I have been fielding calls about the Quality Engineer vacancy all week, and I think the advert could do more to put nervous applicants at ease. Several callers have asked what support a new starter gets in the first few months, so I would suggest adding a short paragraph about the mentoring that new engineers receive from a senior colleague during their initial training.',
        'On a separate note, I understand the closing date has just been moved back to the 17th, which should help us catch anyone who is only just back from the summer break. I will update our website listing to match.',
        'The role itself will still sit within the new automation division you are setting up alongside production and design, so I have left that part of the wording exactly as it stands. Let me know if you would like to see a draft of the revised paragraph before it goes live.',
      ],
      sig: 'Best wishes,\nMartin Bewley\nSenior Consultant, Buxleigh Recruitment',
    }],
    q: [
      { tag: '概要', qid: 'v2q153p', s: 'What is the purpose of the e-mail?',
        c: ['To introduce a colleague who will be the new contact.', 'To request additional details about a vacant position.',
            'To confirm the arrangements for an upcoming interview.', 'To recommend a change to the job advertisement.'],
        a: 3,
        e: '第1段落で、ベウリーは、新人エンジニアが最初の研修期間に先輩社員から受ける指導（メンタリング）について、短い段落を求人広告に加えることを提案している。',
        w: ['新しい担当者に交代するという記述はない。',
            '依頼は "Let me know if you would like to see a draft of the revised paragraph before it goes live." だけで、これは下書きを見せる申し出であり、空席についての追加情報を求める内容ではない。',
            '面接の段取りを確認する内容ではない。',
            '正解。'] },
      { tag: '詳細', qid: 'v2q154p', s: 'What is stated about the position?',
        c: ['It requires proficiency in a second language.', 'It appeared first on an internal job board.',
            'It became vacant several months ago.', 'It has a revised application deadline.'],
        a: 3,
        e: '第2段落に、締め切りが17日に延期されたとある。',
        w: ['第二言語の能力が必要だという記述はない。',
            '社内の掲示板に最初に出たという記述はない。',
            '何カ月も前から空席だという記述はない。',
            '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v2q155p', s: 'What can be inferred about Barrowfield Engineering?',
        c: ['It offers its staff a four-day working week.', 'It is relocating its head office soon.',
            'It recently changed its recruitment policy.', 'It plans to open a new department.'],
        a: 3,
        e: '第3段落に、このポストは、貴社（Barrowfield）が生産・設計と並ぶ部門として立ち上げている新しい自動化部門に置かれる、とある。新しい部門を立ち上げている最中であることから、新しい部署を設けようとしていることがうかがえる。',
        w: ['週4日勤務を導入しているという記述はない。',
            '本社を移転するという記述はない。',
            '採用方針を最近変えたという記述はない。',
            '正解。'] },
    ],
  }),

  /* ── 156–158 記事 ─────────────────────────────────── */
  sp({
    n: [156, 157, 158], lv: 3, t: ['p7inf'],
    docs: [{
      label: 'Article',
      title: 'Beekeepers’ Cooperative Agrees Supply Deal with Bakery Chain',
      head: 'By Carol Harmond',
      body: [
        'Bellcombe Beekeepers’ Cooperative has agreed to supply honey to Birchcroft Bakeries, the regional chain with more than twenty branches. Under the arrangement, honey sold in Birchcroft branches will go on the shelves under the cooperative’s own label and badge rather than the bakery’s branding, so customers will know exactly whose hives the honey came from.',
        'Cooperative member Roger Heron, who keeps bees on the edge of the village, said this year’s crop looked different from the moment he lifted the first frames out of his hives. "It’s a deep amber this time, almost the colour of strong tea, rather than the pale gold we usually get," he said. "I can’t remember a batch this dark since I started."',
        'Away from the supply deal, one of the cooperative’s flavoured blends, bottled from last year’s harvest, was named the country’s best flavoured honey at a national tasting competition this spring, beating entries from more than forty producers.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v2q156p', s: 'What is mentioned about the agreement?',
        c: ['It will run for an initial period of two years.', 'It came about through a regional food fair.',
            `It requires the jars to carry the cooperative's name.`, 'It begins with deliveries to a few branches.'],
        a: 2,
        e: '第1段落に、Birchcroftの各店舗で売られる蜂蜜には、パン屋のブランドではなく組合自身のラベルとバッジが付く、とある。',
        w: ['契約が当初2年間だという記述はない。',
            '地域の食品見本市がきっかけだという記述はない。',
            '正解。',
            '一部の店舗から配達を始めるという記述はない。'] },
      { tag: '詳細', qid: 'v2q157p', s: `What does Mr. Heron say about this year's honey harvest?`,
        c: ['It started later than usual after a cold spring.', 'It was larger than the members had expected.',
            `It went mainly to buyers at farmers' markets.`, 'It had a darker colour than in most years.'],
        a: 3,
        e: '第2段落のヘロン氏の発言に、今年の蜜はいつもの淡い金色ではなく、濃い紅茶のような色をしていると引用されている。',
        w: ['春が寒く採蜜の開始が遅れたという発言はない。',
            '予想より収穫量が多かったという発言はない。',
            '主に朝市の買い手に渡ったという発言はない。',
            '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v2q158p', s: `What can be inferred about Bellcombe Beekeepers' Cooperative?`,
        c: ['It plans to accept members from outside the county.', 'It won a national prize for its honey.',
            'It shares its honey-processing equipment among its members.', 'It has operated for more than a decade.'],
        a: 1,
        e: '最終段落に、組合のフレーバー蜂蜜が全国規模の品評会で最高賞を受けた、とある。',
        w: ['県外からの会員受け入れの記述はない。',
            '正解。',
            '加工設備を会員間で共有しているという記述はない。',
            '10年を超えて活動しているという記述はない。'] },
    ],
  }),

  /* ── 159–160 請求書 ───────────────────────────────── */
  sp({
    n: [159, 160], lv: 4, t: ['p7inf'],
    docs: [{
      label: 'Invoice',
      head: 'Barstow Catering Equipment Repairs',
      body: [
        { t: 'kv', pairs: [
          ['Invoice No.', 'BC-4471'],
          ['Date', '14 March'],
          ['Bill To', 'Hollins Bistro, 2nd Floor, Bosworth Hotel, 14 Quay Street'],
          ['Equipment', 'Countertop gas fryer'],
          ['Technician', 'D. Bostwick'],
        ] },
        'The fryer stopped holding a steady oil temperature during the bistro’s lunch service. The unit was collected and repaired on our own premises, where a faulty thermostat and a cracked igniter lead were replaced, before being returned and reconnected.',
        { t: 'table', head: ['Item', 'Cost'], rows: [
          ['Thermostat', '£68.00'],
          ['Igniter lead', '£22.50'],
          ['Labour (3 hrs)', '£135.00'],
          ['Total', '£225.50'],
        ] },
        'The replaced parts carry a twelve-month warranty. Please keep this invoice as your record of the work.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v2q159p', s: 'What is indicated about the repair?',
        c: ['It came at a fixed price agreed in advance.', 'It needed two technicians to carry it out.',
            `It took place at the repair company's workshop.`, 'It began on the day the bistro reported the fault.'],
        a: 2,
        e: '本文に、フライヤーは引き取られ、当社の作業場で修理された（サーモスタットと点火リード線を交換した）、とある。',
        w: ['言及なし。明細は部品代と作業3時間分の工賃で、事前に固定額で合意したという記述はない。',
            '技術者は D. Bostwick 一人しか記載がなく、二人の技術者が必要だったという記述はない。',
            '正解。',
            '言及なし。不具合が起きたのが昼の営業中だとあるだけで、いつ連絡を受け、いつ作業を始めたかは書かれていない。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v2q160p', s: 'What can be inferred about Hollins Bistro?',
        c: ['It has hired the repair company before.', 'It runs more than one restaurant.',
            'It is undergoing a kitchen renovation.', 'It shares a building with a hotel.'],
        a: 3,
        e: '請求書の宛先が "Hollins Bistro, 2nd Floor, Bosworth Hotel, 14 Quay Street" となっており、ビストロが Bosworth Hotel と同じ建物に入っていることがうかがえる。',
        w: ['過去にも依頼したことがあるという記述はない。',
            '複数の店舗を運営しているという記述はない。',
            '厨房を改装中だという記述はない。',
            '正解。'] },
    ],
  }),

  /* ── 161–164 記事（文挿入あり）───────────────── */
  // 制作コメント（文挿入 no.163、第1巡監査の指摘を受けて前方の取っ手を補強）：
  // 前方の取っ手＝「That layout」は、正解位置[2]の直前（トンネルの配置を述べる文）でのみ成立するよう、
  // 第1段落からは水槽・配置に関する記述を除き、サンゴの調達と仮の水槽での飼育のみに限定した。
  // 後方の取っ手＝略語「the HLN」は、挿入文の直後（[2]の直後、アドバイザーが戻ってくるという文）でのみ使用し、
  // この文の come back（前回の関与を前提にする語）も挿入文の内容に依存している。
  // 正式名称 "Harbour Learning Network" は挿入文以外のどこにも書いていない。
  // [1]：直前がサンゴの調達・飼育の文で配置を述べていないため、前方の取っ手で落ちる。
  // [3][4]：直前が配置を述べていないことに加え、短縮形「the HLN」がすでに使われた後になるため、
  // 正式名称の再導入が語順違反になり、後方の取っ手でも落ちる（二重に閉じる）。
  sp({
    n: [161, 162, 163, 164], lv: 4, t: ['p7ins'],
    docs: [{
      label: 'Article',
      title: 'Burnhaven Aquarium Prepares New Gallery',
      head: 'Community News',
      body: [
        'Burnhaven Aquarium will open its new gallery in November, home to Indo-Pacific corals and reef fish that the aquarium has never displayed before. Keepers have spent the past year sourcing the corals from approved suppliers and caring for them in holding tanks until the gallery is ready. — [[1]] — Admission to the new gallery will be included in the standard aquarium ticket, so members can visit on their usual pass.',
        'The centrepiece of the new gallery is a nine-metre acrylic tunnel that will let visitors walk directly beneath the largest of its four tanks, watching reef sharks and rays pass overhead. — [[2]] — Advisers from the HLN will come back during the gallery’s first week to watch how visitors move through the tunnel.',
        'The aquarium now has around thirty volunteers, most of them students at the two colleges in Burnhaven. — [[3]] — It hopes to take on another ten or so before the end of the year.',
        '"When I took up this post over the summer, the tanks were still empty, so seeing them finally being filled is a real thrill," said aquarium director Yvonne Bracewell. — [[4]] — Booking for the gallery’s launch weekend opens to members next Monday, with tickets for the public following a week later.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v2q161p', s: 'What is mentioned about the new gallery?',
        c: ['It will occupy a building formerly used for storage.', 'It will include a tunnel under a large tank.',
            'It will stay open later on Friday evenings.', 'It will display items lent by a local museum.'],
        a: 1,
        e: '第2段落に、新展示室の目玉は4つの水槽のうち最大のものの真下を歩いて通れる9メートルのアクリル製トンネルだ、とある。',
        w: ['倉庫として使われていた建物を使うという記述はない。',
            '正解。',
            '金曜の夜だけ閉館時間を延ばすという記述はない。',
            '地元の博物館から借りた展示物を並べるという記述はない。'] },
      { tag: '詳細', qid: 'v2q162p', s: `What is mentioned about the aquarium's volunteers?`,
        c: ['They will guide visitors around the gallery.', 'They receive regular training from marine biologists.',
            'They helped to build some of the displays.', 'They come mainly from colleges in the area.'],
        a: 3,
        e: '第3段落に、水族館には現在ボランティアが約30人おり、その大半はBurnhavenにある2つのカレッジの学生だ、とある。',
        w: ['展示室内を案内して回るという記述はない。',
            '海洋生物学者から定期的な研修を受けるという記述はない。',
            '展示物の製作を手伝ったという記述はない。',
            '正解。'] },
      { tag: '位置選択', t: ['p7ins'], insertAt: 2, qid: 'v2q163p',
        sentence: 'That layout was drawn up with advice from the Harbour Learning Network (HLN), which works with aquariums across the country.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "That layout was drawn up with advice from the Harbour Learning Network (HLN), which works with aquariums across the country."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 1,
        e: '挿入文は "That layout" という指示表現で配置を指しており、これが意味を成すのは直前に展示室内の配置を述べる文がある場合だけである。[1] の直前の2文（新展示室の開館時期の紹介と、サンゴの調達・仮の水槽での飼育について）はどちらも配置を述べておらず、[2] の直前にある「新展示室の目玉は…トンネルだ」という文だけが配置の記述に当たる。この直後に挿入すると "That layout" が自然につながる。また挿入文は "the Harbour Learning Network (HLN)" を正式名称で初めて導入しており、以降の本文はこれを短縮形 "the HLN" で受けている。この短縮形が使われるのは挿入文の直後の文（アドバイザーが戻ってくるという文）だけであり、正式名称が先に来ていなければ意味が通らない。したがって挿入文は [2] に入る。',
        w: ['第1段落のこの位置の直前はサンゴの調達と仮の水槽での飼育についての文であり、配置を述べていないので "That layout" の指す先がない。',
            '正解。',
            '第3段落のこの位置の直前はボランティアの人数と出身についての文であり、配置を述べていない。さらにこの時点ではすでに前段落で短縮形 "the HLN" が使われたあとであり、ここで正式名称をもう一度導入すると、短縮形のあとにフルネームで名乗り直す不自然な順序になる。',
            '第4段落のこの位置の直前は館長のコメントであり、配置を述べていない。ここでも短縮形 "the HLN" がすでに使われたあとなので、正式名称を今さら導入するのは順序が崩れる。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v2q164p', s: 'What can be inferred about Burnhaven Aquarium?',
        c: ['It has recently appointed a new director.', 'It draws many tourists from other countries.',
            'It plans to charge extra for the gallery.', 'It operates as a registered charitable trust.'],
        a: 0,
        e: '第4段落で、館長のイヴォンヌ・ブレイスウェルは「この夏にこの職に就いたときはまだ水槽が空だった」と語っており、館長に就任してからまだ日が浅いことがうかがえる。',
        w: ['正解。',
            '海外からの観光客が多いという記述はない。',
            '新展示室に追加料金を課す計画だという記述はない。第1段落に、新展示室への入場は通常のチケットに含まれるとある。',
            '登録された慈善信託として運営されているという記述はない。'] },
    ],
  }),

];
