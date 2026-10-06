/* =============================================================
   予想模試 Vol.3 — Part 7 単一文書 前半（No.147–164）
   リーディング高負荷回。文書をやや長めにしてある。
   ============================================================= */

const sp = (o) => ({
  id: `v3-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v3q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7detail'], tag: x.tag,
    insertAt: x.insertAt, sentence: x.sentence,
  })),
});

export const R2 = [
  sp({
    n: [147, 148], lv: 3,
    docs: [{
      label: 'Notice',
      title: 'New Lesson Series at Roxwell Ice Arena',
      head: 'Notice to All Skaters',
      body: [
        "Starting Tuesday, 3 November, Roxwell Ice Arena will launch a new six-week course for pairs of skaters who want to move around the rink in step with each other to music, learning to hold hands, match each other's timing, and glide through a few simple turns together. Classes run from 7:00 to 8:00 p.m. every Tuesday and cost £48 for the full six weeks.",
        "No previous experience is needed, and anyone who signs up alone will be paired with another participant for the course. Places are limited to sixteen skaters, so early booking through the front desk or the arena's website is recommended.",
        'Skates can be hired at the front desk: arena members borrow a pair at no charge, while non-members pay the standard hire fee.',
        'Anyone wanting more detail about the new course, or about arena membership, should ask a member of staff at the front desk.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v3q147p', s: 'According to the notice, what will the new lessons teach?',
        c: ['How to play ice hockey', 'How to dance with a partner', 'How to perform figure-skating jumps', 'How to race over short distances'],
        a: 1,
        e: '第1段落に、新しいコースは "move around the rink in step with each other to music, learning to hold hands, match each other\'s timing, and glide through a few simple turns together" ことを学ぶとあり、これは相手と合わせて滑るダンスを指す。',
        w: ['言及なし。スティックやパックなど、アイスホッケーを示す記述は本文のどこにもない。',
            '正解。',
            '言及なし。ジャンプの技術について本文のどこにも触れていない。',
            '言及なし。タイムや距離を競うことについて本文のどこにも触れていない。'] },
      { tag: '詳細', qid: 'v3q148p', s: "What is mentioned about the arena's skate rental service?",
        c: ['It offers free rentals for members', 'It now stocks smaller sizes for children', 'It requires a security deposit', 'It closes earlier than the main rink'],
        a: 0,
        e: '第3段落に "arena members borrow a pair at no charge" とあり、会員は貸し靴を無料で借りられると分かる。',
        w: ['正解。',
            '言及なし。子ども向けの小さいサイズについて本文のどこにも触れていない。',
            '言及なし。保証金について本文のどこにも触れていない。',
            '言及なし。貸し靴の営業がリンク本体より早く終わるという記述はない。'] },
    ],
  }),
  sp({
    n: [149, 150], lv: 3,
    docs: [{
      label: 'Memo',
      head: 'Sennworth Communications — Internal Memo',
      body: [
        { t: 'kv', pairs: [['To', 'All Account Executives'], ['From', 'Miriam Sattersby, Managing Director'], ['Date', '5 May'], ['Subject', 'A Change to How We Handle Press Release Drafts']] },
        'From Monday, every press release draft will need to clear one extra step before it goes out. Once a draft leaves your hands, it will go to our in-house lawyers, who will read it through and confirm there is nothing in the wording that could expose a client, or us, to a complaint. Only after the lawyers have signed off will the draft come to me for a final look, which until now has been the only check.',
        'I know the extra step will add a day or so to the timetable, so please build that into any deadline you promise a client from now on.',
        'I have left a one-page summary of the new procedure on each of your desks. Please read it, sign the bottom, and drop your signed copy back to my office by Friday afternoon so that I can confirm everyone has seen it. If I have not had your copy by then, I will come and track you down.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v3q149p', s: 'According to the memo, what change is being introduced to the press release process?',
        c: ['Drafts will require sign-off from a senior editor', 'Drafts will need a reference number before release', "Drafts will need the client's approval in writing", 'Drafts will undergo a review by the legal team'],
        a: 3,
        e: '第1段落に "it will go to our in-house lawyers, who will read it through and confirm there is nothing in the wording that could expose a client, or us, to a complaint" とあり、原稿が社内弁護士の審査を受けるようになる変更だと分かる（これが法務チームによる審査に当たる）。',
        w: ['本文の承認（"Only after the lawyers have signed off"）は社内弁護士によるもので、その後の "a final look" は差出人の Managing Director がこれまでも行ってきた確認（"which until now has been the only check"）。上級編集者の承認が新たに加わるという記述は無い。',
            '言及なし。整理番号の取得については本文のどこにも触れていない。',
            '言及なし。クライアントによる書面での承認については本文のどこにも触れていない。',
            '正解。'] },
      { tag: '詳細', qid: 'v3q150p', s: 'What are account executives asked to do by the end of the week?',
        c: ['Update their contact lists for each client', 'Submit a summary of pending press releases', 'Confirm their availability for a team meeting', 'Return their signed copies of the new policy'],
        a: 3,
        e: '第3段落に "sign the bottom, and drop your signed copy back to my office by Friday afternoon" とあり、金曜までに署名済みの控えを提出するよう求めている。',
        w: ['言及なし。クライアントごとの連絡先リストの更新については本文のどこにも触れていない。',
            '本文の "a one-page summary of the new procedure" は差出人が配った新しい手続きの要約であり、保留中のプレスリリースの概要を提出するよう求める記述ではない。',
            '言及なし。会議への出欠確認については本文のどこにも触れていない。',
            '正解。'] },
    ],
  }),
  sp({
    n: [151, 152], lv: 3,
    docs: [{
      label: 'Advertisement',
      title: 'Sollerby Boat Hire',
      head: 'Lake Sorrelfield',
      body: [
        'Spend an afternoon on the water at Lake Sorrelfield, a short walk from the village green. Rowing boats, pedal boats and small motor boats are all available to hire by the hour, by the half-day or for a full day. Life jackets are provided for every passenger at no extra cost, whichever length of hire you choose.',
        'Hire a boat for a full day and we will also send you off with a free map marking a handful of pleasant walking paths around the shoreline, ideal for a stop along the way.',
        'Weekends fill up quickly through the summer, so booking ahead is worth doing. Hiring six boats or more for a group outing? Ask about our reduced per-boat rate when you call — it works out cheaper than booking each boat on its own.',
        'Call 01632 960482 or come to the boathouse on the north shore to reserve your boat.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v3q151p', s: 'According to the advertisement, what is included with a full-day rental?',
        c: ['A parking space beside the boathouse', 'A guided tour of the lake shoreline', 'A discount voucher for the lakeside café', 'A complimentary map of nearby trails'],
        a: 3,
        e: '第2段落に "Hire a boat for a full day and we will also send you off with a free map marking a handful of pleasant walking paths around the shoreline" とあり、丸一日の貸し出しにだけ地図が付くと分かる。',
        w: ['言及なし。駐車スペースについて本文のどこにも触れていない。',
            '言及なし。ガイド付きの周遊について本文のどこにも触れていない。',
            '言及なし。カフェの割引券について本文のどこにも触れていない。',
            '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v3q152p', s: 'What can be inferred about Sollerby Boat Hire?',
        c: ['It has been open for over a decade', 'It is easily reached from the train station', 'It recently added new boats to its fleet', 'It offers lower rates for group bookings'],
        a: 3,
        e: '第3段落に "Hiring six boats or more for a group outing? Ask about our reduced per-boat rate when you call" とあり、団体での申し込みには1艇あたりの料金が下がると分かる。',
        w: ['言及なし。開業して何年になるかについて本文のどこにも触れていない。',
            '言及なし。駅からの道のりについて本文のどこにも触れていない。',
            '言及なし。新しい艇を最近加えたという記述はない。',
            '正解。'] },
    ],
  }),
  /* 2026-10-06 難度5の試作（設問案から設計。ブランチ lv5-design）で設問を新しくした。
     凍結案 lv5-frozen.txt（sha256 86f51fe9…）、くじ dice-lv5.json。id は新規採番（v3q153d〜v3q155d）、
     no は不変。stem・4択・並び・正解はくじのとおり（153=D, 154=C, 155=D）。
     Q153（通常）：決め手は第5段落（cabinets の写真）の1か所。第2・4段落の運び方の話に図面・ケース・
       解説文・案内役は持ち込んでいない。
     Q154（型I）：決め手は第1段落（石や樹皮を覆う低いクッション状の植物＝コケ。時代は言わない）と
       第3段落（採集は1870年代の旅行と1930年代の調査の2つの時期。1930年代の調査の分は大学で
       撮影中のため展覧会が閉じるまで貸せない。種類は言わない）。どちらも「貸すのは〜だ」と言い切らない。
       第1段落だけ→種類はコケと決まり、時代の2本（19世紀／20世紀）が残る。
       第3段落だけ→時代は19世紀と決まり、種類の2本（シダ／コケ）が残る。
     Q155（型S）：決め手は第2段落（借りる車を1台。van を先、car を後に示す。2案は持ち主が同じ＝借りる車）と
       第4段落（会場の裏口に通じる小道が狭く、the smaller of the two しか入れない。候補は並べ直さない）。
       おとりは hired van。第2段落だけ→2本（hired car／hired van）。
       第4段落だけ→小さいほう（car）と決まり、持ち主の2本（herbarium's car／hired car）が残る。第1巡の修正 F1：旧2文目の the firm が持ち主を漏らしていたので、持ち主を示さない文に替えた。
     決め手の段落は Q154＝1・3、Q155＝2・4、Q153＝5。重ねていない。
     否定語（not/no/never/n't/cannot）を含む文：1（第3段落の cannot be lent）。明示的な訂正・否定は 0。 */
  sp({
    n: [153, 154, 155], lv: 3,
    docs: [{
      label: 'Letter',
      head: "Yewdale Herbarium\nMill Road, Yewdale\n12 October\n\nMr. Ingleby\nSecretary, Isfield Naturalists' Society",
      body: [
        'Dear Mr. Ingleby,',
        "Thank you for your letter about the exhibition your society is planning for its members and the public. I am pleased to say that the herbarium would be glad to help. As I understand it, you would like to borrow our specimens of the low, cushion-like plants that spread over stones and tree bark, which your members have been studying along the river this year.",
        "For the journey to your exhibition, we will hire a vehicle from a firm in Yewdale. The firm can supply either a van or a car, and one vehicle will carry everything.",
        "Our specimens of these plants were gathered in two periods only: on field trips in the 1870s, and during a survey in the 1930s. The sheets from the survey are at present with a university team, who are photographing them, and they cannot be lent until after your exhibition has closed.",
        "As you mention in your letter, the lane to the back door of your hall is very narrow, so only the smaller of the two will get through. I will arrange things accordingly, and the sheets will come back the same way at the end of the loan.",
        "Before the loan begins, please send us a photograph of the cabinets in which the sheets will be shown, so that our conservator can check that they will protect the sheets properly.",
        "I hope these arrangements are acceptable, and I would be glad to answer any further questions. With best wishes for a successful exhibition.",
      ],
      sig: 'Yours sincerely,\nUrsula Yarborne\nCurator, Yewdale Herbarium',
    }],
    q: [
      { tag: '詳細', qid: 'v3q153d', s: 'What does the curator ask the society to send before the loan begins?',
        c: ['A draft of the exhibition labels', 'A plan of the exhibition space', 'A list of the volunteer guides', 'A photograph of the display cases'], a: 3, t: ['p7detail'],
        e: '第5段落で "please send us a photograph of the cabinets in which the sheets will be shown" と求めている。cabinets は標本を見せる展示ケースにあたる。',
        w: ['A draft of the exhibition labels: 第5段落で送るよう求められているのは "a photograph of the cabinets" で、解説文の下書きではない。labels は手紙に出てこない。',
            'A plan of the exhibition space: 第5段落で求められているのは "a photograph of the cabinets" で、会場の図面ではない。図面は手紙に出てこない。',
            'A list of the volunteer guides: 第5段落で求められているのは "a photograph of the cabinets" で、案内役の名簿ではない。案内役は手紙に出てこない。',
            '正解。第5段落の "a photograph of the cabinets in which the sheets will be shown" が、展示ケースの写真にあたる。'] },
      { tag: '推測', qid: 'v3q154d', s: 'What can be inferred about the specimens the herbarium will lend?',
        c: ['The loan will consist of ferns gathered in the nineteenth century', 'The loan will consist of ferns gathered in the twentieth century', 'The loan will consist of mosses gathered in the nineteenth century', 'The loan will consist of mosses gathered in the twentieth century'], a: 2, t: ['p7inf'],
        e: '第1段落で借りたいとされるのは "the low, cushion-like plants that spread over stones and tree bark"（コケの特徴）。第3段落によると、この植物の標本は "on field trips in the 1870s, and during a survey in the 1930s" の2つの時期のもので、後者は "cannot be lent until after your exhibition has closed"。貸し出せるのは1870年代、つまり19世紀の採集分に限られる。',
        w: ['ferns gathered in the nineteenth century: 時代は合うが、第1段落が述べる "low, cushion-like plants that spread over stones and tree bark" はコケの特徴で、羽のような葉を持つシダではない。ferns は手紙に出てこない。',
            'ferns gathered in the twentieth century: 種類も時代も合わない。借りたいのは "low, cushion-like plants" で、1930年代の調査の分は "cannot be lent until after your exhibition has closed"。',
            '正解。"cushion-like plants that spread over stones and tree bark" がコケにあたり、貸し出せるのは "field trips in the 1870s" の分、つまり19世紀の採集分。',
            'mosses gathered in the twentieth century: 種類は合うが、1930年代の調査の分は "cannot be lent until after your exhibition has closed" で、貸し出せない。'] },
      { tag: '詳細', qid: 'v3q155d', s: 'How will the specimens be taken to the society\'s exhibition?',
        c: ['In the herbarium\'s van', 'In a hired van', 'In the herbarium\'s car', 'In a hired car'], a: 3, t: ['p7detail'],
        e: '第2段落で "we will hire a vehicle from a firm in Yewdale. The firm can supply either a van or a car" と、借りた車で運ぶことと2案が示される。第4段落の "the lane to the back door of your hall is very narrow, so only the smaller of the two will get through" が基準で、小さいほうの車、つまり乗用車が選ばれる。',
        w: ['In the herbarium\'s van: 第2段落の "we will hire a vehicle from a firm in Yewdale" により、標本館の車ではなく借りる車で運ぶ。',
            'In a hired van: 第2段落の "either a van or a car" の一方で、第2段落だけでは残る2案の一方。しかし第4段落の "only the smaller of the two will get through" で、大きいほうの van は小道を通れない。',
            'In the herbarium\'s car: 第2段落の "we will hire a vehicle from a firm in Yewdale" により、標本館の車ではなく借りる車で運ぶ。',
            '正解。第2段落の "we will hire a vehicle" が借りる車、第4段落の "only the smaller of the two will get through" が小さいほう、つまり car を決める。'] },
    ],
  }),
  sp({
    n: [156, 157, 158], lv: 3,
    docs: [{
      label: 'Article',
      title: 'Sarnhaven Light Reopens After Two-Year Restoration',
      head: 'Local News',
      body: [
        'Sarnhaven Light stopped guiding ships past the headland in 1988, when its lamp was switched off for the last time and the tower was left to the gulls. Salt air had worked into the ironwork by the time a group of volunteers formed the Sarnhaven Light Trust six years ago and set out to bring the tower back.',
        'The two-year restoration replaced the rusted lantern room, rebuilt the spiral staircase tread by tread, and returned the original lens, found in a council store room, to working order. The final scaffolding came down in March, and the light was switched back on for the first time in almost forty years.',
        'The £140,000 needed for the work came from one steady source: the marina along the harbour wall, which has handed over a share of its mooring fees to the trust every year since the trust was set up. That yearly payment is what finally covered the bill.',
        "The tower's restored beam, together with an evening open day the trust now holds each summer, has already begun to draw walkers back to the headland after dark. Last month a television crew spent two days filming the tower for a documentary on Britain's coastline, due to be broadcast next year.",
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v3q156p', s: "According to the article, what helped fund the lighthouse's restoration?",
        c: ['A donation drive organized by local residents', 'A grant from a national heritage programme', 'A share of proceeds from the nearby marina', 'A one-time contribution from a shipping company'],
        a: 2,
        e: '第3段落に "the marina along the harbour wall, which has handed over a share of its mooring fees to the trust every year since the trust was set up" とあり、近くのマリーナの係留料の一部が復元資金を支えたと分かる。',
        w: ['言及なし。住民による募金活動については本文のどこにも触れていない。',
            '言及なし。国の文化財保護プログラムからの助成については本文のどこにも触れていない。',
            '正解。',
            '言及なし。海運会社からの一度きりの寄付については本文のどこにも触れていない。'] },
      { tag: '同義語', t: ['p7syn'], qid: 'v3q157p', s: 'In paragraph 4, the word "draw" is closest in meaning to',
        c: ['attract', 'withdraw', 'sketch', 'select'],
        a: 0,
        e: '第4段落の "The tower\'s restored beam, together with an evening open day the trust now holds each summer, has already begun to draw walkers back to the headland after dark." では、主語は灯台の光と夏の催しという、人を引き寄せるものであり、"walkers" という人を目的語に、"back to the headland" という行き先を伴って使われている。この draw は「（人を）引き寄せる」の意味で、attract に最も近い。',
        w: ['正解。draw の主語が灯台の光と催しという、人を引き寄せるものであり、"walkers" を目的語に取り、"back to the headland" という行き先が続くため、attract の語義で読める。',
            'draw が withdraw に近い意味になるのは、draw £50 from an account のように、口座などから金を引き出すとき。本文の draw は灯台の光と夏の公開日が主語で、walkers を back to the headland（岬へ）来させる、人を主語の側へ向かわせる意味であり、何かを取り出す意味では読めない。',
            'draw が sketch に近い意味になるのは、人が絵や図を描くとき（draw the tower）。本文の主語は灯台の光と催しで描き手になれず、walkers の後ろに back to the headland という行き先が続くので、描く意味では読めない。',
            'draw が select に近い意味になるのは、くじ・抽選で選ぶとき（be drawn at random / draw the winning ticket）。本文は抽選の話ではなく、灯台の光と催しが walkers を back to the headland へ来させる移動の意味なので、選ぶ意味では読めない。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v3q158p', s: 'What is suggested about Sarnhaven Light?',
        c: ['It will offer overnight stays for visitors', 'It will house a coastal weather station', 'It will appear in a documentary film', 'It will expand its car park for tour buses'],
        a: 2,
        e: '第4段落に "Last month a television crew spent two days filming the tower for a documentary on Britain\'s coastline, due to be broadcast next year." とあり、来年放送予定のドキュメンタリー番組に取り上げられると分かる。',
        w: ['言及なし。宿泊施設の提供については本文のどこにも触れていない。',
            '言及なし。気象観測所の設置については本文のどこにも触れていない。',
            '正解。',
            '言及なし。観光バス用駐車場の拡張については本文のどこにも触れていない。'] },
    ],
  }),
  sp({
    n: [159, 160], lv: 3,
    docs: [{
      label: 'Feedback Form',
      title: 'Radleigh Training Group — Seminar Feedback',
      head: 'Completed by a Participant',
      body: [
        { t: 'kv', pairs: [['Seminar', 'Running Better Team Meetings'], ['Presenter', 'Wendell Suttonmere'], ['Date', '18 September'], ['Overall rating', '4 out of 5']] },
        { t: 'list', items: [
          'Content: very useful, especially the section on setting an agenda in advance.',
          'Presenter: clear and easy to follow throughout.',
          'Materials: the handouts were a nice touch.',
          'Venue: see note below.',
        ] },
        'The open floor for questions at the end ran a little long, but it was worth it — Mr. Suttonmere took time with every question rather than rushing through them. The printed sheets summarising each stage of the method are worth keeping too.',
        'Glad to hear a recording of the session will be sent out to everyone who took part, so anyone who wants to go back over a point later can do that.',
        'One thing to flag for next time: the signs from the main road were confusing, and I ended up parking two streets away and walking the last stretch in the rain because I could not find the entrance. A clearer sign at the turning would help.',
      ],
    }],
    q: [
      { tag: 'NOT', t: ['p7not'], qid: 'v3q159p', s: 'What is NOT mentioned as part of the seminar?',
        c: ['A question-and-answer session', 'A set of printed handouts', 'A networking lunch', 'A recording to watch later'],
        a: 2,
        e: '感想票には、質問の時間（"The open floor for questions at the end ran a little long"）、配布資料（"The printed sheets summarising each stage of the method are worth keeping too."）、後日視聴できる録画（"a recording of the session will be sent out to everyone who took part"）の3つが具体的に触れられているが、懇親ランチについてはどこにも記載がない。',
        w: ['言及あり。"The open floor for questions at the end ran a little long" と、質問の時間があったことが分かる。',
            '言及あり。"The printed sheets summarising each stage of the method are worth keeping too." と、印刷された配布資料が複数あったことが分かる。',
            '正解。感想票のどこにも懇親ランチへの言及はない。',
            '言及あり。"a recording of the session will be sent out to everyone who took part" と、後日視聴できる録画があることが分かる。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v3q160p', s: 'What can be inferred about the respondent?',
        c: ['The respondent had to leave the seminar early', 'The respondent had attended a similar seminar before', 'The respondent attended with a group of colleagues', 'The respondent found the venue difficult to reach'],
        a: 3,
        e: '最後のコメントに "the signs from the main road were confusing, and I ended up parking two streets away and walking the last stretch in the rain because I could not find the entrance" とあり、会場にたどり着くのに苦労したことが分かる。',
        w: ['本文冒頭に "The open floor for questions at the end ran a little long, but it was worth it" とあり、質問の時間である最後まで参加していたと分かる。途中で退出したという記述はない。',
            '言及なし。以前に似た研修を受けたという記述はない。',
            '言及なし。同僚と一緒に参加したという記述はない。',
            '正解。'] },
    ],
  }),
  // 文挿入 No.163 の取っ手：
  // 前方＝挿入文の "that reputation" の先行詞（"That promise has earned Ridgecote a reputation …"）を [4] の直前にだけ置く。
  //   [1]〜[3] の直前はいずれも立地・製品・取引先への約束の記述だけで、まだ「評判」として言葉になっていない。
  // 後方＝Rhona Sherbrook のフルネームと役職は挿入文でのみ導入し、[4] 直後の一文でのみ "Ms. Sherbrook" と姓で受ける。
  //   正解が最後のマーカー [4] なので、後方の取っ手がこの位置を裏付けるために落とす位置は無い（[1]〜[3] はすべて前方の取っ手だけで落ちる）。
  sp({
    n: [161, 162, 163, 164], lv: 4, t: ['p7ins'],
    docs: [{
      label: 'Article',
      title: 'A Look Inside Ridgecote Paper Mill',
      head: 'Local Business',
      body: [
        "Ridgecote Paper Mill has stood beside the River Ryle since 1911, half a mile downstream from Ridgecote village, its brick chimney visible from the towpath long before the gates come into view. Water is still drawn off the old mill leat to feed the vats where the pulp is mixed, just as it was when the mill first opened. — [[1]] — A short strike over pay stopped the machines for a week in 1987, and a fire in the drying shed in 2003 closed the mill for three months, but neither dented its order book for long.",
        "What has kept the mill going through all of that is a single unglamorous product: heavy board that ends up as the trays, cartons and wrapping used across the food industry, from a punnet of strawberries to the box a takeaway arrives in. — [[2]] — The mill tells its trade buyers that every order will be turned around within a week, a promise it has kept even as raw pulp prices have doubled over the past two years. — [[3]] — That promise has earned Ridgecote a reputation among food producers as the safest pair of hands in the region for board that has to survive a supermarket supply chain without failing. — [[4]] — Recycled fibre already makes up two-thirds of what goes into the mill's board, and Ms. Sherbrook says next year's main spending will go on a further drop-off yard on site, alongside the existing one, where the mill's buyers can return used board to be pulped again.",
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v3q161p', s: 'According to the article, what is Ridgecote Paper Mill known for?',
        c: ['Paper made for watercolour painting', 'Card used for hardback book covers', 'Lightweight paper for printed maps', 'Packaging board for the food trade'],
        a: 3,
        e: '第2段落に "heavy board that ends up as the trays, cartons and wrapping used across the food industry, from a punnet of strawberries to the box a takeaway arrives in" とあり、食品業界向けの梱包用ボードで知られていると分かる。',
        w: ['言及なし。水彩画用の紙については本文のどこにも触れていない。',
            '言及なし。上製本の表紙に使うカードについては本文のどこにも触れていない。',
            '言及なし。地図印刷用の薄い紙については本文のどこにも触れていない。',
            '正解。'] },
      { tag: '詳細', qid: 'v3q162p', s: 'What does the article say the mill plans to do next year?',
        c: ['Add a second recycling collection point', 'Host an open day for local schools', 'Begin exporting to overseas markets', 'Launch a training programme for new staff'],
        a: 0,
        e: '第2段落末尾に "Ms. Sherbrook says next year\'s main spending will go on a further drop-off yard on site, alongside the existing one, where the mill\'s buyers can return used board to be pulped again." とあり、既存の回収拠点に加えてもう1か所増やす計画だと分かる。',
        w: ['正解。',
            '言及なし。地元の学校向けの見学会については本文のどこにも触れていない。',
            '言及なし。海外市場への輸出については本文のどこにも触れていない。',
            '言及なし。新人向けの研修プログラムについては本文のどこにも触れていない。'] },
      { tag: '位置選択', t: ['p7ins'], insertAt: 4, qid: 'v3q163p',
        sentence: "Maintaining that reputation is now the job of Rhona Sherbrook, who took over as the mill's operations manager this spring.",
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "Maintaining that reputation is now the job of Rhona Sherbrook, who took over as the mill\'s operations manager this spring."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 3,
        e: '挿入文は "that reputation" という指示語で、工場が実際に評判を得たと述べる直前の一文を受ける。第2段落の "That promise has earned Ridgecote a reputation among food producers as the safest pair of hands in the region for board that has to survive a supermarket supply chain without failing." が、文書中で工場の評判が初めて言葉になる箇所であり、この文は [4] の直前にしかない。[1]〜[3] の直前はいずれも、立地・製品・取引先への約束を述べているだけで、まだ評判として言葉になっていないため、"that reputation" の指す先が無い。また、挿入文は Rhona Sherbrook をフルネームと役職で初めて導入しており、[4] の直後の一文は "Ms. Sherbrook" と姓だけで受けている。正解の位置が文書中で最後のマーカーであるため、このつながりを崩す後ろ側の位置は存在しない。',
        w: ['第1段落のこの位置の直前は、工場の立地と水の引き方についての記述だけで、工場が何によって評価されているかにはまだ触れていない。評判が "a reputation" として初めて言葉になるのは [4] の直前の一文（"That promise has earned Ridgecote a reputation …"）が最初であり、この位置ではまだ評判が述べられていないので、"that reputation" が受ける先が無い。',
            '第2段落のこの位置の直前は、工場を長年支えてきた製品が食品業界向けの梱包用ボードだという記述であり、評判や評価には触れていない。評判が初めて述べられるのは [4] の直前の一文（"That promise has earned Ridgecote a reputation …"）であり、ここに挿入しても "that reputation" の指す先が無い。',
            '同じ段落のこの位置の直前は、取引先に注文を1週間で仕上げると伝え、それを守ってきたという事実の記述であり、「評判」や「評価」として言葉にはしていない。工場が実際に "a reputation" を得たと述べるのは次の一文であり、ここに挿入すると、まだ得ていない評判をすでに得たものとして受けることになる。',
            '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v3q164p', s: 'What can be inferred about Ridgecote Paper Mill?',
        c: ['It runs its machines through the night', 'It takes its water from a nearby river', 'It sells some paper directly to the public', 'It is owned by the family that founded it'],
        a: 1,
        e: '第1段落に "Ridgecote Paper Mill has stood beside the River Ryle since 1911" とあり、続けて "Water is still drawn off the old mill leat to feed the vats where the pulp is mixed" とある。工場が川のそばに立ち、水路（leat）で水を引いていることから、川から水を取り込んでいると分かる。',
        w: ['言及なし。夜通し機械を動かしているという記述はない。',
            '正解。',
            '言及なし。第2段落の取引先（trade buyers／the mill\'s buyers）への言及はあるが、紙を一般向けに直接販売しているという記述はない。',
            '言及なし。創業した一族が今も所有しているという記述はない。'] },
    ],
  }),
];
