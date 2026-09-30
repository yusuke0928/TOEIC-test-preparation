/* =============================================================
   予想模試 Vol.4 — Part 7 単一文書 後半（No.165–175）
   ============================================================= */

const sp = (o) => ({
  id: `v4-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。 */
    id: x.qid || `v4q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7detail'], tag: x.tag,
    insertAt: x.insertAt, sentence: x.sentence,
  })),
});

export const R3 = [

  /* ── 165–168 オンラインチャット（3名）─────────────── */
  /* 設問案（v15/plans/vol4-final-P7s.txt の v4-p7-165）を凍結、くじ（v15/dice/vol4-r3.txt）で
     Q165=D・Q166=B・Q167=D・Q168=B に確定。本文はくじ確定後に新規に書き下ろした。
     固有名は設問案の Dominic・Ella・Wesley・Torrington Film Festival のみを使用し、新規の
     固有名は追加していない（頭文字 T の割り当ては使用せず）。設問 id は全問新規採番
     （v4q165p〜v4q168p）。
     申し送り対応：映画祭はすでに終わっている前提で統一した。Q166 の引用の直前は「相手（Ella）
     がこれから事務所へ行って作業する」という発言だけにし、備品の無事・伝聞・配達の話は本文の
     どこにも置いていない。Wesley が何かを頼まれる形も作っていない。Q167 は Dominic が語る
     会場の忘れ物を first-aid kit の1つだけにし、他の3択（programmes・charger・jacket）には
     一切触れていない。Q168 は Ella だけが Tuesday を提案し、他の曜日は本文のどこにも出さない。 */
  sp({
    n: [165, 166, 167, 168], lv: 4, t: ['p7intent'],
    docs: [{
      label: 'Online chat discussion',
      body: [{ t: 'chat', lines: [
        { who: 'Dominic', time: '09:02', text: "Morning both. I've made a start on the e-mails festivalgoers have sent in since closing night — there's a good stack of them in the shared inbox." },
        { who: 'Ella', time: '09:04', text: "I'll pick up a batch once I'm logged on. Anything I should look at first?" },
        { who: 'Dominic', time: '09:06', text: "One woman says she left a small first-aid kit she carries for her children under her seat in Screen Two on the closing night and wants to know if it's turned up." },
        { who: 'Ella', time: '09:07', text: "I'll ask at the venue when I'm there on Tuesday and let her know either way." },
        { who: 'Ella', time: '09:08', text: "I'm heading over to the office in a few minutes anyway, so I'll work through my batch from there — it's quieter." },
        { who: 'Wesley', time: '09:09', text: "The office is locked. Caretaker's away for a few days and nobody else has a spare key." },
        { who: 'Ella', time: '09:10', text: "Ah — good thing you said. I'll stay put and do mine from home, then." },
        { who: 'Dominic', time: '09:15', text: "Once today's batch of e-mails is done, shall we get together and go through whatever's left over?" },
        { who: 'Ella', time: '09:16', text: "How about Tuesday? I'm at the venue in the morning anyway, so I can join you both on a call afterwards and we'll finish it off then." },
        { who: 'Wesley', time: '09:17', text: "Tuesday's fine for me too." },
      ] }],
    }],
    q: [
      { tag: '概要', qid: 'v4q165p', s: 'What are the writers mainly discussing?',
        c: ['Returning equipment hired for the festival.', 'Counting the votes for an audience prize.',
            "Writing a report for the festival's funders.", 'Replying to messages from ticket holders.'],
        a: 3,
        e: '冒頭でドミニクが「閉幕の夜以降に来場者から届いたメールに手をつけ始めた」と伝え、以降のやり取りは会場への忘れ物の問い合わせへの返信や、残りのメッセージをいつ片付けるかという話題で一貫している。',
        w: ['借りた機材の返却についての言及はチャットのどこにも無い（言及なし）。',
            '観客賞の投票集計についての言及はチャットのどこにも無い（言及なし）。',
            '出資者向けの報告書についての言及はチャットのどこにも無い（言及なし）。',
            '正解。'] },
      { tag: '意図', t: ['p7intent'], qid: 'v4q166p',
        s: 'What does Wesley most likely mean when he writes, "The office is locked"?',
        c: ['He is reassuring a colleague about some equipment.', 'He is warning a colleague against a wasted trip.',
            'He is contradicting something a colleague was told.', 'He is predicting a problem with a delivery.'],
        a: 1,
        e: '直前でエラが「これから事務所へ行って、そこで自分の分の処理を進める」と、自分がこれから事務所へ行くつもりだと述べている。ウェズリーの「事務所は施錠されている」は、その訪問が無駄足になることを知らせる警告である。',
        w: ['チャットに出てくる物は、観客が会場（Screen Two）に置き忘れた救急箱だけで、事務所とは結び付いていない。直前の発言はエラがこれから事務所へ行くという予定で、備品が無事かを気にする発言はどこにも無い。',
            '正解。',
            'エラは「事務所が開いている」と誰かから聞いたとは一言も述べておらず、自分がこれから行くという予定を述べただけなので、ウェズリーの発言が否定する伝聞情報が存在しない。',
            '配達の手配についての言及はチャットのどこにも無く、この発言のあとも配達の話には一切つながらない。'] },
      { tag: '詳細', qid: 'v4q167p', s: 'According to Dominic, what was left behind at the venue?',
        c: ['A box of programmes.', 'A laptop charger.', "A volunteer's jacket.", 'A first-aid kit.'],
        a: 3,
        e: 'ドミニクの発言「ある女性が、閉幕の夜にスクリーン2の自分の席の下に救急箱を忘れたと言っている」が根拠。',
        w: ['プログラムの束についての言及はチャットのどこにも無い（言及なし）。',
            '充電器についての言及はチャットのどこにも無い（言及なし）。',
            'ボランティアの上着についての言及はチャットのどこにも無い（言及なし）。',
            '正解。'] },
      { tag: '詳細', qid: 'v4q168p', s: 'On what day does Ella say the team will next meet?',
        c: ['On Monday.', 'On Tuesday.', 'On Wednesday.', 'On Thursday.'],
        a: 1,
        e: 'エラが「火曜日はどう？　午前中はどのみち会場にいるから、そのあと通話で合流して一緒に片付けよう」と火曜日を提案し、ウェズリーも同意している。',
        w: ['月曜日についての言及はチャットのどこにも無い（言及なし）。',
            '正解。',
            '水曜日についての言及はチャットのどこにも無い（言及なし）。',
            '木曜日についての言及はチャットのどこにも無い（言及なし）。'] },
    ],
  }),

  /* ── 169–171 手紙 ─────────────────────────────────── */
  /* 設問案（v4-p7-169）を凍結、くじで Q169=D・Q170=C・Q171=A に確定。本文はくじ確定後に
     新規に書き下ろした。固有名は設問案の Joanna Toomey・Nansfield University のみを使用し、
     新規の固有名は追加していない（雑誌名・旧友の名は本文中で名付けず一般名詞で済ませた）。
     設問 id は全問新規採番（v4q169p〜v4q171p）。
     申し送り対応：用件は雑誌記事の誤りの指摘1つだけにし、写真の提供・同窓会の提案・証明書の
     再発行のいずれにも触れていない。卒業年は本文に "I graduated from Nansfield in 2007" の
     一度だけ書き、記事の誤りが指す年（1999／1997）とは別の数値にして混同を避けた。Q171 は
     差出人住所を "Vancouver, BC, Canada" にし、本文でも "even from all the way over here in
     Canada" と重ねて示した。専攻・卒業後の勤め先・自営については本文のどこにも触れていない。 */
  sp({
    n: [169, 170, 171], lv: 4, t: ['p7inf'],
    docs: [{
      label: 'Letter',
      head: 'Joanna Toomey\n14 Birch Lane, Vancouver, BC, Canada\n\n3 May',
      body: [
        'Alumni Relations Office\nNansfield University',
        'Dear Alumni Relations Office,',
        "I'm writing about a date that seems to have been given wrongly in the 'Fifty Years of the Union' feature in the Spring issue of the alumni magazine. It says the ground-floor café in the Union building opened in 1999, but the leaflet the Union still keeps by the till gives the date as 1997 — the writer may have mixed it up with a later refit. A friend of mine from my Nansfield days, who still lives near the campus and drops into the Union from time to time, is the one who noticed it and mentioned it to me.",
        "I graduated from Nansfield in 2007, and I still read every issue of the magazine from cover to cover, even from all the way over here in Canada. It seems a shame to leave a small detail like that uncorrected, so I wondered whether you could pass this on to whoever edits the magazine, in case a short correction can run in the next issue.",
        'Thank you for your time.',
        'Yours faithfully,',
      ],
      sig: 'Joanna Toomey',
    }],
    q: [
      { tag: '概要', qid: 'v4q169p', s: 'Why did Ms. Toomey write the letter?',
        c: ['To offer some photographs for an exhibition.', 'To propose a reunion for her year group.',
            'To ask for a replacement degree certificate.', 'To point out an error in a magazine article.'],
        a: 3,
        e: '冒頭で「同窓会誌の春号に載った特集『学生会（Union）の50年』の中の、誤って書かれたらしい日付について書いている」と述べ、その誤りを編集者に伝えて訂正してほしいと依頼している。',
        w: ['展示会への写真提供についての言及は手紙のどこにも無い（言及なし）。',
            '学年での同窓会の提案についての言及は手紙のどこにも無い（言及なし）。',
            '卒業証明書の再発行についての言及は手紙のどこにも無い（言及なし）。',
            '正解。'] },
      { tag: '詳細', qid: 'v4q170p', s: 'According to the letter, in what year did Ms. Toomey graduate?',
        c: ['In 1996.', 'In 2001.', 'In 2007.', 'In 2012.'],
        a: 2,
        e: '"I graduated from Nansfield in 2007" と本文に明記されている。',
        w: ['本文にこの年は無い（言及なし）。',
            '本文にこの年は無い（言及なし）。',
            '正解。',
            '本文にこの年は無い（言及なし）。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v4q171p', s: 'What is suggested about Ms. Toomey?',
        c: ['She now lives in another country.', 'She took a degree in history.',
            'She worked at the university after graduating.', 'She runs a small business of her own.'],
        a: 0,
        e: '差出人の住所が "14 Birch Lane, Vancouver, BC, Canada" となっており、本文でも "even from all the way over here in Canada" と重ねて述べている。',
        w: ['正解。',
            '専攻についての言及は手紙のどこにも無い（言及なし）。',
            '卒業後に大学に勤めたという言及は手紙のどこにも無い（言及なし）。',
            '自営業についての言及は手紙のどこにも無い（言及なし）。'] },
    ],
  }),

  /* ── 172–175 報告書 ───────────────────────────────── */
  /* 設問案（v4-p7-172）を凍結、くじで Q172=B・Q173=C・Q174=[1]・Q175=B に確定。本文はくじ
     確定後に新規に書き下ろした。固有名は設問案の Nimbury University・Campus Dining Services
     のみを使用し、新規の固有名は追加していない（食堂は North/South/East/West の方角名にとどめ、
     語学学校にも固有名を与えていない）。設問 id は全問新規採番（v4q172p〜v4q175p）。英式の綴り
     で統一した。
     挿入文 "In exchange, the group has agreed to return in each of the next three summers." の
     取っ手は2つ。
     ①前方（初出違反）：[1] の直前だけに「特定の1団体（the school）に割引という譲歩を与えた」
       という文を置いた。他の3か所の直前にはそうした譲歩の文を置いていないので、挿入すると
       "In exchange" が受ける譲歩が無い。
     ②後方（逆向きの初出違反）：[1] の直後（固定文）に "That commitment" として、翌年から3年分
       の予約という、挿入文で初めて出る約束を既出として受ける文を置いた。挿入文を他の位置に
       動かすと、この固定文の "That commitment" は直前の割引の合意を受けることになり、割引の
       合意からは今後数年の予約の見通しは得られないので、意味が合わなくなる。
     Q172 は初めて利用した団体を語学学校1種類だけにし、他の3択（スポーツキャンプ・医療系の会議・
     チェス大会）にはどれも触れていない。Q173 は夏に開いていた食堂の数を3館の1値だけにし、時期に
     よって変わる書き方はしていない。Q175 は「本館以外に図書館内のカフェも運営している」という
     1本の根拠だけを置き、衛生評価・在学中の学生雇用・県内農家からの仕入れにはどれも触れていない。 */
  sp({
    n: [172, 173, 174, 175], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Report',
      head: 'Campus Dining Services\nSummer 2026 Review — extract for staff',
      body: [
        "Over the ten weeks with no students on campus, we kept three of our four halls open — the North, South and East dining halls — to serve staff, contractors and the handful of outside groups who book the campus for residential courses each summer. The West Hall stayed closed throughout for its five-yearly rewiring.",
        "The largest of this year's bookings was a fortnight-long course run by an overseas language school, the first time a group of that kind has used our halls. Because the course fell in our quietest fortnight, we agreed to give the school a reduced day rate for the whole stay. [[1]] That commitment already gives us a clearer picture of bookings for the next few summers than we normally have at this stage of the year.",
        "Elsewhere, the quiet summer gave the maintenance team a rare chance to get ahead of routine repairs across the halls that stayed open. The serving counter in the East Hall was re-tiled, and the walk-in chiller in the North Hall had its compressor replaced a full season before it was due to fail. [[2]]",
        "Catering income held up well despite the quiet campus. The coffee bar our team runs on the ground floor of the Main Library also had a steady summer, helped by the extra researchers and visiting academics working through the break. [[3]] Overall takings across the whole operation were only a little below what we would expect during term time.",
        "Looking ahead, we expect a similarly mixed calendar of outside bookings next summer, and exact hall opening dates will be circulated nearer the time. [[4]] Anyone with questions about this summer's figures should contact the dining services office in Room 14 of the Refectory building.",
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v4q172p', s: 'According to the report, what kind of group used the dining halls for the first time this summer?',
        c: ['A youth sports camp.', 'A language school.', 'A medical conference.', 'A chess tournament.'],
        a: 1,
        e: '「今年最大の予約は、海外の語学学校による2週間のコースで、この種の団体が食堂を使うのは初めてだった」と本文にある。',
        w: ['青少年スポーツキャンプについての言及は報告書のどこにも無い（言及なし）。',
            '正解。',
            '医療系の会議についての言及は報告書のどこにも無い（言及なし）。',
            'チェス大会についての言及は報告書のどこにも無い（言及なし）。'] },
      { tag: '詳細', qid: 'v4q173p', s: 'How many dining halls stayed open over the summer?',
        c: ['One hall.', 'Two halls.', 'Three halls.', 'Four halls.'],
        a: 2,
        e: '「4館のうち3館（North・South・East）を開けたままにし、West Hall だけを5年に1度の配線工事のために閉めた」と本文に明記されている。',
        w: ['本文は3館が開いていたと明記しており、1館ではない。',
            '本文は3館が開いていたと明記しており、2館ではない。',
            '正解。',
            '本文は4館のうち1館（West Hall）を閉めていたと明記しており、4館ではない。'] },
      { tag: '位置選択', qid: 'v4q174p', t: ['p7ins'], insertAt: 1,
        sentence: 'In exchange, the group has agreed to return in each of the next three summers.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"In exchange, the group has agreed to return in each of the next three summers."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 0,
        e: '挿入文の "In exchange"（その見返りに）は、直前の "we agreed to give the school a reduced day rate for the whole stay" という、特定の1団体（the school）に与えた譲歩を受けて初めて意味が定まり、"the group" もその団体を指す。この文は [1] の直前にしか無い。挿入文の直後には "That commitment already gives us a clearer picture of bookings for the next few summers…" が続き、挿入文で初めて導入された「3年分の予約という約束」を、既出のものとして "That commitment" で受けている。[2][3][4] の直前にはいずれも特定の1団体に何かを譲った文が無く、"In exchange" が受けるものが無い。また、挿入文を [1] 以外に置くと、[1] の直後の "That commitment" は直前の割引の合意を受けることになるが、割引の合意からは「今後数年の夏の予約の見通し」は得られないので、文がつながらない。',
        w: ['正解。',
            '[2] の直前は "The serving counter in the East Hall was re-tiled, and the walk-in chiller in the North Hall had its compressor replaced a full season before it was due to fail." という設備の補修の話で、特定の1団体への譲歩は述べられていない。"In exchange" が受ける譲歩が無いうえ、挿入文を [1] に置かないと [1] の直後の "That commitment" は直前の割引の合意を受けることになり、割引の合意からは今後数年の夏の予約の見通しは得られないので、文がつながらない。',
            '[3] の直前は "The coffee bar our team runs on the ground floor of the Main Library also had a steady summer, helped by the extra researchers and visiting academics working through the break." というカフェの売上の話で、特定の1団体への譲歩は述べられていない。理由は [2] と同じで、"In exchange" が受ける譲歩が無く、[1] の直後の "That commitment" も割引の合意を受けたままで文がつながらない。',
            '[4] の直前は "we expect a similarly mixed calendar of outside bookings next summer, and exact hall opening dates will be circulated nearer the time." という来年への見通しの話で、特定の1団体への譲歩は述べられていない。理由は [2][3] と同じで、"In exchange" が受ける譲歩が無く、[1] の直後の "That commitment" も割引の合意を受けたままで文がつながらない。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v4q175p', s: 'What is suggested about Campus Dining Services?',
        c: ['It holds a top hygiene rating from the council.', 'It operates the café in the main library.',
            'It employs current students during term time.', 'It buys its meat from farms in the county.'],
        a: 1,
        e: '「図書館の1階で私たちのチームが運営しているコーヒーバーも、夏の間安定した売上だった」という一文から、Campus Dining Services が学内の食堂だけでなく図書館内のカフェ（コーヒーバー）も運営していることが分かる。',
        w: ['衛生評価についての言及は報告書のどこにも無い（言及なし）。',
            '正解。',
            '在学中の学生を雇用しているという言及は報告書のどこにも無い（言及なし）。',
            '県内の農場からの仕入れについての言及は報告書のどこにも無い（言及なし）。'] },
    ],
  }),
];
