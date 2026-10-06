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
    n: [165, 166, 167, 168], lv: 3, t: ['p7intent'],
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
  /* 2026-10-07 難度5の再設計・第2試作（ブランチ lv5-design-b）で設問を新しくした。
     凍結案 lv5b-frozen.txt（sha256 2ea6372f…）、くじ dice-lv5b.json。
     id は新規採番（v4q169e〜v4q171e）、no は不変。
     Q169：概要（価格表の改定）。段落1が根拠。
     Q170：型R。くじ：正解 Tuesday、おとり Thursday、錨 Monday。
       決め手：段落2（運転手はいつも Thursday）、段落4（市は来週の Monday）、段落6（来週に限り、市の翌日）。
       段落2だけ→Thursday。段落6だけ（全文）→4本残る。段落4だけ→Monday（市の日）。
       曜日名は段落2と段落4の2回だけ。手紙の日付は曜日を書かない。2026年を想定（14 October は水曜、
       来週の月曜は19日、翌日は20日）。
     Q171：型C。くじ：正解 private households、おとり food shops。
       事実A＝段落3（注文はほとんど、酪農場で切って真空パックにした200グラムの小分けで、
       that stay sealed until they reach whoever eats them。6個入りの箱で1〜2箱）。家庭と食料品店に当てはまり、食料品店のほうが典型的。
       事実B＝段落5（取引割引の廃止。理由：nobody who buys from us resells the cheese in its packet）。食料品店だけを外す。
       Bだけ→食料品店が消え、飲食店・ホテル・家庭が残る（3本）。Aだけ→食料品店・家庭が残り食料品店がそれらしい。A＋B で家庭。
       A＋B で各種が外れる語：飲食店・ホテルは A の stay sealed until they reach whoever eats them（厨房・給仕が開けて出すので封のまま食べる人に届かない）、
       食料品店は B の resells the cheese in its packet。
       第2巡（rev-F）：J1〜J3。J3＝段落6の the empty boxes を the empties に（crates／cases／boxes の揺れを消した）。
       第1巡の修正（H1）：旧Aの so the buyer has no cutting to do では飲食店・ホテルが定義の上で外れなかったため、封のまま届く文に変えた。
       旧Bの sells the cheese on を resells ... in its packet に狭く定めた（料理として出すのを含まない）。
       4本の顧客種の語とその同義語、main customers は本文に使っていない。 */
  sp({
    n: [169, 170, 171], lv: 4, t: ['p7inf'],
    docs: [{
      label: 'Letter',
      head: "Oakhurst Cheesemakers — 14 October 2026",
      body: [
        "Dear customer,",
        "I am writing to let you know that we are revising our price list. The new list takes effect on 1 November, and a copy is enclosed with this letter.",
        "The way we handle your orders stays as it is. Our driver collects the empty crates every Thursday, as he always has.",
        "The increase is small. Most of what we send out is cut and vacuum-packed at the dairy in portions of 200 grams that stay sealed until they reach whoever eats them, and nearly every order is for one or two cases of six. Those portions rise by six percent.",
        "We hope to meet many of you at the cheese fair in town, where we have a stall on Monday of next week. The fair lasts for one day, and copies of the new list will be on the table.",
        "One part of the list changes in kind rather than in price: we are ending the trade discount, since nobody who buys from us resells the cheese in its packet.",
        "For next week only, the pick-up of the empties will be on the day after the fair, as the driver will be on a training course on his usual day. Please have them ready by the door, and thank you for your continued custom.",
      ],
      sig: "Jethro\nOakhurst Cheesemakers",
    }],
    q: [
      { tag: '概要', qid: 'v4q169e',
        s: "What is the purpose of the letter?",
        c: ["To announce a change to the price list", "To respond to a complaint about quality", "To introduce a new head cheesemaker", "To request a testimonial for an award entry"], a: 0,
        e: "最初の段落で I am writing to let you know that we are revising our price list. と書いており、目的は価格表の改定の知らせ。空き箱の回収や市への出店は付随の連絡。",
        w: ["正解。I am writing to let you know that we are revising our price list. と手紙の目的を述べている。",
            "不正解。品質への苦情への返答は書かれていない。",
            "不正解。新しい工房長の紹介は書かれていない。",
            "不正解。受賞への応募のための推薦文の依頼は書かれていない。"],
        t: ['p7detail'] },
      { tag: '詳細', qid: 'v4q170e',
        s: "On which day will the driver collect the empty crates next week?",
        c: ["Monday", "Tuesday", "Wednesday", "Thursday"], a: 1,
        e: "決め手は3か所。第2段落に Our driver collects the empty crates every Thursday, as he always has. とあり、いつもの回収は Thursday。第4段落に a stall on Monday of next week とあり、市は来週の Monday。最終段落は For next week only, the pick-up of the empties will be on the day after the fair と述べ、来週に限り回収は市の翌日。市の Monday の翌日は Tuesday。第2段落だけだと Thursday に着くが、来週は変わる。最終段落だけでは、市がいつか分からない。",
        w: ["不正解。Monday は市の日（a stall on Monday of next week）で、回収は the day after the fair、つまりその翌日。",
            "正解。市は Monday of next week で、来週の回収は the day after the fair。市の翌日は Tuesday。",
            "不正解。回収は the day after the fair で、市の Monday の翌日は Tuesday。Wednesday は2日後になる。",
            "不正解。Our driver collects the empty crates every Thursday, as he always has. はいつもの曜日で、来週は For next week only ... on the day after the fair に変わる。いつもの曜日だけを読むとここに着く。"],
        t: ['p7detail'] },
      { tag: '推測', qid: 'v4q171e',
        s: "What is suggested about the cheesemaker's main customers?",
        c: ["Its main customers are restaurants.", "Its main customers are food shops.", "Its main customers are hotels.", "Its main customers are private households."], a: 3,
        e: "決め手は2か所。第3段落は Most of what we send out is cut and vacuum-packed at the dairy in portions of 200 grams that stay sealed until they reach whoever eats them, and nearly every order is for one or two cases of six. と述べ、小分けは封をしたまま食べる人の手に届く。これに合うのは、買った人が自分で食べる家庭と、封のまま客に渡す食料品店で、食料品店のほうが典型的に見える。第5段落は we are ending the trade discount, since nobody who buys from us resells the cheese in its packet と述べ、買い手は誰も小分けのまま転売しない。食料品店は転売するので外れ、家庭が残る。第3段落だけを読むと食料品店に着き、第5段落だけでは飲食店・ホテル・家庭が残る。",
        w: ["不正解。第3段落は portions of 200 grams that stay sealed until they reach whoever eats them と述べ、小分けは封をしたまま食べる人に届く。飲食店は厨房で開けて客に出すので、封のまま食べる人の手に届くことはなく、この記述と両立しない。",
            "不正解。小分けの箱（portions of 200 grams that stay sealed ... one or two cases of six）は食料品店に合うが、第5段落の nobody who buys from us resells the cheese in its packet で、小分けのまま売る側は外れる。第3段落だけを読むとここに着く。",
            "不正解。第3段落は portions of 200 grams that stay sealed until they reach whoever eats them と述べ、小分けは封をしたまま食べる人に届く。ホテルは厨房や給仕が開けて宿泊客に出すので、封のまま食べる人の手に届くことはなく、この記述と両立しない。",
            "正解。小分けは封のまま食べる人に届き（that stay sealed until they reach whoever eats them）、第5段落の nobody who buys from us resells the cheese in its packet が食料品店を外すので、買った人が自分で食べる家庭が残る。"],
        t: ['p7inf'] },
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
    n: [172, 173, 174, 175], lv: 4, t: ['p7ins'],
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
