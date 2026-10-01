/* =============================================================
   予想模試 Vol.5 — Part 7 単一文書 後半（No.165–175）
   総仕上げ回。
   ============================================================= */

const sp = (o) => ({
  id: `v5-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。 */
    id: x.qid || `v5q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7detail'], tag: x.tag,
    insertAt: x.insertAt, sentence: x.sentence,
  })),
});

export const R3 = [

  /* ── 165–168 オンラインチャット（2 名）───────────── */
  /* 2026-09-29 先読み対策（設問を先に作り、正解はくじで決める方式）で書き下ろした。
     stem・4択は凍結、正解はくじ（Q165=D 売店、Q166=A 早く戻った理由、Q167=D 帰りの休憩所、Q168=A 地元企業の資金）。
     申し送り対応：Q166 の引用の直前の発言は「もう戻ったの？」と驚く一つだけ（10:13）。引用は散策路が
     1マイルしかないという事実を述べ、直後は Ms. Haddow が地図をまだ見ていないと返すだけにして、
     空き時間の提案・申し出の断り・疲れた生徒の心配の読みの材料は置いていない。売店の話は 10:02〜10:09 と
     10:21 で、10:13〜10:15 のやり取りとは別の時間帯に置いた。Q168 は、ガーデンセンターへの礼状（バス代はそこが出した）
     の1点だけで推せる形にした。 */
  sp({
    n: [165, 166, 167, 168], lv: 4, t: ['p7intent'],
    docs: [{
      label: 'Online chat discussion',
      body: [{ t: 'chat', lines: [
        { who: 'Vera Haddow', time: '10:02', text: 'Curtis, have you got a minute? The staff say the gift shop can only take one group at a time.' },
        { who: 'Curtis Garside', time: '10:03', text: 'Fine. My half have been out on the nature trail since a quarter to ten, so yours can have the shop first.' },
        { who: 'Vera Haddow', time: '10:04', text: 'Thanks. I\'ve told my lot they can spend up to five pounds each.' },
        { who: 'Curtis Garside', time: '10:05', text: 'Same limit for mine, and I\'d stick to it. The pencils and bookmarks are cheap, but the soft toys cost eight pounds.' },
        { who: 'Vera Haddow', time: '10:06', text: 'Good tip. I\'ll send in eight of mine now and the other seven after them.' },
        { who: 'Curtis Garside', time: '10:08', text: 'Sensible. Warn them the till only takes cash.' },
        { who: 'Vera Haddow', time: '10:09', text: 'Will do.' },
        { who: 'Vera Haddow', time: '10:13', text: 'Curtis, you\'re back already? We\'ve only just got going here.' },
        { who: 'Curtis Garside', time: '10:14', text: 'The nature trail is a mile long.' },
        { who: 'Vera Haddow', time: '10:15', text: 'Ah. I haven\'t looked at the map yet.' },
        { who: 'Vera Haddow', time: '10:21', text: 'My other seven are heading into the shop now. I\'ll message you when they\'re out.' },
        { who: 'Curtis Garside', time: '10:22', text: 'Thanks.' },
        { who: 'Vera Haddow', time: '10:25', text: 'One reminder for later: we\'ll stop for lunch at the motorway services on the way home, so everyone\'s lunch boxes stay on the coach.' },
        { who: 'Curtis Garside', time: '10:26', text: 'Noted. I\'ll tell my group.' },
        { who: 'Vera Haddow', time: '10:28', text: 'While they\'re still in the shop, I\'ll pick out a thank-you card for the garden centre in town. They paid for today\'s coach.' },
      ] }],
    }],
    q: [
      { tag: '概要', qid: 'v5q165p',
        s: 'What are the writers mainly discussing?',
        c: ['A pupil who needs to go home early', 'An activity that the venue has cancelled', 'A request for photos for the school website', 'A visit to the venue\'s gift shop'],
        a: 3,
        e: 'チャットは冒頭の10:02に「売店は一度に1班しか入れない」という連絡で始まり、先に入る班、使ってよい金額、現金しか使えないこと、2組目の生徒が店に入るところまで、売店に寄る段取りが大半を占める。',
        w: ['早退する生徒の話は、チャットのどこにも出てこない（言及なし）。',
            '施設が取りやめた活動の話は出てこない（言及なし）。',
            '学校のウェブサイト用の写真を頼む話は出てこない（言及なし）。',
            '正解。"the gift shop can only take one group at a time" の連絡から始まり、生徒の持ち金、現金のみの支払い、班ごとに店に入る順番と、売店に寄る件が話の大半を占めている。'] },
      { tag: '意図', qid: 'v5q166p', t: ['p7intent'],
        s: 'At 10:14, what does Mr. Garside mean when he writes, "The nature trail is a mile long."?',
        c: ['He is explaining why his group returned early', 'He is suggesting how to use some spare time', 'He is turning down a colleague\'s proposal', 'He is easing a concern about some tired pupils'],
        a: 0,
        e: '10:13に Ms. Haddow が「もう戻ったの？こちらは始めたばかり」と驚き（"you\'re back already?"）、それに対して Mr. Garside が「散策路は1マイルの長さだ」と答えている。短い道だから早く一周できた、という説明である。',
        w: ['正解。直前で Ms. Haddow が "you\'re back already?" と早く戻ったことに驚いている。散策路の長さを述べることで、短い道だから早く戻れたと説明している。',
            '空いた時間の使い道を提案する発言ではない。直前の Ms. Haddow の発言は、こちらは始めたばかりだという驚きで、空き時間の相談ではない。チャットのどこにも、空き時間の使い道を尋ねる発言は無い。',
            '直前の Ms. Haddow の発言は提案ではなく驚きなので、断る相手の提案が無い（言及なし）。',
            '疲れた生徒を心配する発言は、チャットのどこにも出てこない（言及なし）。'] },
      { tag: '詳細', qid: 'v5q167p',
        s: 'According to the online discussion, where will the class eat lunch?',
        c: ['At a café inside the venue', 'At outdoor picnic tables near the car park', 'At a restaurant in the nearby town', 'At a rest stop during the journey back'],
        a: 3,
        e: '昼食について、10:25に「帰り道のサービスエリアで昼食にする」と言っている（"we\'ll stop for lunch at the motorway services on the way home"）。弁当箱は荷物として、バスに置いたままにしておく。',
        w: ['施設の中のカフェで食べるという発言は無い（言及なし）。',
            '駐車場の近くのピクニックテーブルで食べるという発言は無い（言及なし）。',
            '近くの町のレストランで食べるという発言は無い。"in town" はガーデンセンターへの礼状の話に出てくるだけである（言及なし）。',
            '正解。"we\'ll stop for lunch at the motorway services on the way home" と述べている。'] },
      { tag: '推測', qid: 'v5q168p', t: ['p7inf'],
        s: 'What can be inferred about the trip?',
        c: ['It is funded by a local business', 'It is the class\'s first visit to the venue', 'It includes some pupils from another class', 'It was suggested by a pupil\'s parent'],
        a: 0,
        e: '10:28に Ms. Haddow は、町のガーデンセンターに礼状のカードを選ぶと言い、その理由に、今日のバス代はそこが払ってくれた、と言っている（"They paid for today\'s coach"）。校外学習のバス代を出した地元の店があるので、この校外学習の費用は地元の企業が出したと推せる。',
        w: ['正解。"I\'ll pick out a thank-you card for the garden centre in town. They paid for today\'s coach." と述べており、町の店が校外学習のバス代を出したことが分かる。',
            '教員・生徒がこの施設に初めて来たと分かる発言は無い（言及なし）。',
            '10:03 の "My half" から、Mr. Garside の班はクラスの半分で、残りの半分が Ms. Haddow の班（8人と7人に分けて入店。10:06）と読める。他のクラスの生徒が加わっているという発言は無い。',
            '生徒の保護者の発案だという発言は無い（言及なし）。'] },
    ],
  }),

  /* ── 169–171 手紙（農場の経営者から取引先のレストランへ）───────────── */
  /* 2026-09-29 先読み対策（設問を先に作り、正解はくじで決める方式）で書き下ろした。
     stem・4択は凍結、正解はくじ（Q169=C 新任の農場責任者の紹介、Q170=A 農場事務所への電話、Q171=C 地域の食の賞）。
     申し送り対応：用件は新任の責任者の紹介1つだけ。注文の窓口は農場事務所の電話番号1つで、新任の責任者を
     注文の窓口にしていない（"Nothing changes in the way you order"）。賞は「この地方の食と飲み物の賞で、年間最優秀の生産者に選ばれた」
     とだけ書き、有機栽培・家族経営・毎週の市には触れていない。 */
  sp({
    n: [169, 170, 171], lv: 3, t: ['p7detail'],
    docs: [{
      label: 'Letter',
      head: 'Hayfield Farm\n12 March',
      body: [
        'Dear Ms. Hobday,',
        'I am writing to let you know that Ms. Hilary Hendry joined us last month to take charge of Hayfield Farm. She has taken over the day-to-day running of the fields and the packing shed from me, and you will be hearing from her in the coming weeks.',
        'Ms. Hendry comes to us from a large vegetable grower in the next county, where she led the packing and dispatch team for six years. She arrived shortly after we were named grower of the year at the food and drink awards for our part of the country, and she is keen to build on that result.',
        'Nothing changes in the way you order. Please go on ringing the office here at the farm with your orders, on 01632 960318, before four o\'clock on the afternoon before you need them. The office staff will take each order exactly as they always have.',
        'As one of our longest-standing customers, you will be among the first to meet Ms. Hendry, and I hope you will take the chance to say hello when she calls in at the restaurant.',
        'Yours sincerely,\nFrank Gregson\nOwner, Hayfield Farm',
      ],
    }],
    q: [
      { tag: '概要', qid: 'v5q169p',
        s: 'What is the purpose of the letter?',
        c: ['To thank the restaurant for a recommendation', 'To offer a new crop for the menu', 'To introduce a new farm manager', 'To announce new days for deliveries'],
        a: 2,
        e: '第1段落で「先月、農場を任されて加わった Ms. Hilary Hendry のことを知らせるために書いている」と述べ（"I am writing to let you know that Ms. Hilary Hendry joined us last month to take charge of Hayfield Farm"）、第2段落で経歴、第4段落で挨拶の機会を勧めている。手紙の用件は新任の責任者の紹介である。',
        w: ['推薦への礼は書かれていない。第4段落の "longest-standing customers" は取引が長いことを述べているだけで、紹介された礼ではない（言及なし）。',
            '新しい作物を勧める記述は無い（言及なし）。',
            '正解。第1段落で "I am writing to let you know that Ms. Hilary Hendry joined us last month to take charge of Hayfield Farm" と述べ、新任の責任者の紹介が手紙の用件になっている。',
            '配達の曜日を変えるという記述は無い（言及なし）。'] },
      { tag: '詳細', qid: 'v5q170p',
        s: 'According to the letter, how should the restaurant place its orders?',
        c: ['By phoning the farm office', 'By filling in an online form', 'By e-mailing Mr. Gregson directly', 'By leaving a note with the driver'],
        a: 0,
        e: '第3段落で「これまでどおり、農場事務所に電話で注文してほしい。事務所は従来どおり受け付ける」と述べ、事務所の電話番号を示している（"Please go on ringing the office here at the farm with your orders, on 01632 960318"）。',
        w: ['正解。第3段落で "Please go on ringing the office here at the farm with your orders" と述べている。',
            'ウェブ上の注文フォームには触れていない（言及なし）。',
            '経営者個人へのメールで注文するという記述は無い。書かれているのは農場事務所への電話である（言及なし）。',
            '配達員にメモを渡して注文するという記述は無い（言及なし）。'] },
      { tag: '推測', qid: 'v5q171p', t: ['p7inf'],
        s: 'What can be inferred about Hayfield Farm?',
        c: ['It grows produce using organic methods', 'It is a family-run business', 'It has won a regional food award', 'It sells at a weekly market stall'],
        a: 2,
        e: '第2段落に、Ms. Hendry は「この地方の食と飲み物の賞で、農場が年間最優秀の生産者に選ばれた直後に」着任したとある（"She arrived shortly after we were named grower of the year at the food and drink awards for our part of the country"）。農場が地方の賞で年間の最優秀に選ばれたのだから、地域の賞を受けたことが推せる。',
        w: ['有機栽培の方法に触れた記述は無い（言及なし）。',
            '家族経営かどうかを示す記述は無い。Ms. Hendry は別の農場から来た人で、家族とは書かれていない（言及なし）。',
            '正解。第2段落の "we were named grower of the year at the food and drink awards for our part of the country" から、農場が地域の食と飲み物の賞を受けたことが分かる。',
            '毎週の市で屋台を出しているという記述は無い（言及なし）。'] },
    ],
  }),

  /* ── 172–175 社内メモ（通販会社のカスタマーサービス部）───────────── */
  /* 2026-09-29 先読み対策（設問を先に作り、正解はくじで決める方式）で書き下ろした。
     stem・4択は凍結、正解はくじ（Q172=C 正しい品との無料交換、Q173=B 注文のメモ欄、Q174=[3]、Q175=A 町の店舗）。
     文挿入 Q174 は列挙型。取っ手は2つ（どちらを外しても開く）。
     ① 前方：挿入文の "A second issue" は、列挙の1つ目を述べる文 "One issue concerns the size chart ..." の
        直後でしか成り立たない。[1] と [2] は1つ目の問題より前なので、「2つ目」が「1つ目」より先に出ることになり、
        直後に "One issue concerns ..." が続く順序も逆転する（初出・数え上げの順序違反）。前置きでは問題の数を言っていない。
     ② 後方：正解位置 [3] の直後の文は "Both problems come from the printed catalogue ..." と、色コードの問題が
        挿入されて初めて成り立つ「2つ」を受ける。[4] はその "Both ..." のあとなので、受ける2つ目がまだ無いうちに
        "Both" が出ていることになり、挿入文を [4] に置くと "Both" の指す先が戻って定まらない（逆向きの初出違反）。
     各位置の落ち方：[1]=1つ目が未出・次の段落の "One issue" と順序が逆、[2]=直後の "One issue concerns" と順序が逆、
     [3]=正解、[4]="Both problems" が先に出ている。見出しは色コードにも1つ目の問題の中身にも触れない。 */
  sp({
    n: [172, 173, 174, 175], lv: 4, t: ['p7ins'],
    docs: [{
      label: 'Memo',
      head: 'To: All customer service staff\nFrom: Hamish Harcourt, Head of Customer Service\nDate: 6 October\nRe: Calls about this season\'s catalogue',
      body: [
        'Since this season\'s Garnock catalogue went out, we have been taking a steady number of calls from customers whose parcels did not match what they thought they had ordered. — [[1]] — This memo sets out how those calls should be handled.',
        'Please deal with every caller in the same calm, helpful way. — [[2]] — One issue concerns the size chart on the back pages, which gives the width of each rug in inches rather than centimetres, so several customers have ordered a rug far larger than they intended. — [[3]] — Both problems come from the printed catalogue rather than from anything done at our end, so the remedy is the same for each: the caller is to be sent the right item at no cost and asked to return the one they received. — [[4]]',
        'Please log every call about either issue in the notes section of that customer\'s order, so that the next person who opens the order can see what has already been agreed.',
        'Finally, the counter at our premises on the high street will close at one o\'clock on Thursday for stocktaking. Please tell any caller who is planning to call in.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v5q172p',
        s: 'What are staff asked to offer customers whose orders were affected?',
        c: ['A voucher towards their next order', 'A month of free delivery', 'A free exchange for the correct item', 'A discount for keeping the item'],
        a: 2,
        e: '第2段落の最後の文に、カタログの誤りが原因の2つの問題のどちらでも、正しい品を費用なしで送り、受け取った品は返してもらうよう指示している（"the caller is to be sent the right item at no cost and asked to return the one they received"）。',
        w: ['次の注文に使える引換券には触れていない（言及なし）。',
            '1か月間の送料無料には触れていない（言及なし）。',
            '正解。"the caller is to be sent the right item at no cost and asked to return the one they received" と指示している。',
            '品を手元に残す代わりの値引きには触れていない（言及なし）。'] },
      { tag: '詳細', qid: 'v5q173p',
        s: 'According to the memo, where should staff record each call about the problems?',
        c: ['In a spreadsheet shared by the team', 'In the notes field of each order', 'In a paper log beside each phone', 'In a form sent to the supervisor'],
        a: 1,
        e: '第3段落で、2つの問題に関する電話はすべて、客の注文の「メモ欄」に記録するよう指示している（"Please log every call about either issue in the notes section of that customer\'s order"）。',
        w: ['チーム共有の表計算ファイルに記録するという記述は無い（言及なし）。',
            '正解。"Please log every call about either issue in the notes section of that customer\'s order" と述べている。',
            '電話機の脇の紙の記録簿には触れていない（言及なし）。',
            '上司に送る書式で報告するという記述は無い（言及なし）。'] },
      { tag: '位置選択', qid: 'v5q174p', t: ['p7ins'], insertAt: 3,
        sentence: 'A second issue concerns the colour codes printed beside each item in the catalogue.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"A second issue concerns the colour codes printed beside each item in the catalogue."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 2,
        e: '挿入文の "A second issue" は、列挙の2つ目として、1つ目の問題を述べた文の直後に来る。1つ目（サイズ表）を述べる文は "One issue concerns the size chart ..." で、その直後の [3] に置くと、次の文の "Both problems" が2つの問題をまとめて受ける形になる。',
        w: ['[1] の前には、列挙の1つ目の問題がまだ出ていない。"A second issue" が先に出てしまい、あとの段落で "One issue concerns the size chart" が来ると、数え上げの順序が逆になる。',
            '[2] の直後が "One issue concerns the size chart" である。挿入文を置くと "A second issue" の直後に "One issue" が来て、2つ目が1つ目より先に出る順序の逆転になる。',
            '正解。直前の "One issue concerns the size chart ..." が列挙の1つ目で、挿入文が2つ目の色コードの問題を導く。直後の "Both problems come from the printed catalogue" がその2つをまとめて受ける。',
            '[4] の前には、すでに "Both problems come from the printed catalogue ..." という文がある。この時点で本文に出ている問題はサイズ表の1つだけで、"Both" が受ける2つ目がまだ無い。'] },
      { tag: '推測', qid: 'v5q175p', t: ['p7inf'],
        s: 'What can be inferred about Garnock Mail Order?',
        c: ['It runs a shop in the town', 'It delivers to customers in other countries', 'It employs staff who work from home', 'It opened a new warehouse this year'],
        a: 0,
        e: '最後の段落で、「うちの高街の店のカウンターが木曜日の1時に棚卸しで閉まる。来店するつもりの客がいたら伝えてほしい」と指示している（"the counter at our premises on the high street will close at one o\'clock on Thursday"）。客が訪ねてくる窓口が町の通りにあるので、町に店を持っていることが推せる。',
        w: ['正解。最後の段落の "the counter at our premises on the high street" と、来店する客に伝えるよう求める指示から、町の通りで店を営んでいることが分かる。',
            '国外の客への配送には触れていない（言及なし）。',
            '在宅で働くスタッフには触れていない（言及なし）。',
            '今年新しい倉庫を開いたという記述は無い（言及なし）。'] },
    ],
  }),

];
