/* =============================================================
   予想模試 Vol.5 — Part 7 複数文書（No.176–200）
   ダブルパッセージ 2 セット／トリプルパッセージ 3 セット
   ============================================================= */

const mp = (o) => ({
  id: `v5-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7cross'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は x.qid で新規採番を明示する（先読み対策で全設問を作り直したため。
       id を使い回すと SRS の履歴が別問題に引き継がれる）。 */
    id: x.qid || `v5q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7cross'], tag: x.tag,
  })),
});

export const R4 = [

  /* ══ 176–180 ダブルパッセージ ══════════════════════
     先読み対策（2026-09-29）：stem と選択肢を凍結し、正解をくじで決めてから本文を新規に書いた。
     クロスの決め手と、文書を1つずつ隠したときの絞り込み：
       - Q176 キャプテンは（盤の数×相手チームの構成）の2×2。ウェブページの表だけでは4人のまま、
         メールだけでは人名が出ない。メールの人数は控えを含むので、数えると反対の帯に着く。
       - Q177 部屋代は（協会加盟の有無×軽食の有無）の4通り。メールだけでは額が出ず、
         ウェブページだけでは加盟の有無・軽食の希望が分からない。
       - Q179 日程は（晩が空いているか×相手の都合のつかない期間の内か外か）。
         ウェブページだけだと2つ、メールだけだと2つ残る。
     Q178・Q180 は単一文書の詳細設問。 */
  mp({
    n: [176, 177, 178, 179, 180],
    lv: 4,
    docs: [
      {
        label: 'Web page', meta: 'Document 1',
        title: 'Polmere Chess Club — Friendly Matches with Other Clubs',
        body: [
          'Polmere Chess Club is glad to welcome other clubs on alternate Wednesday evenings. Each match is arranged by one of our four captains, who is chosen according to the size of the visiting side and its make-up, as shown below.',
          { t: 'table',
            head: ['Captain', 'Boards in play', 'Visiting team'],
            rows: [
              ['Mr. Tyack', '6 or fewer', 'Any other team'],
              ['Mr. Tonkin', '7 or more', 'Made up entirely of players under 18'],
              ['Ms. Plumley', '7 or more', 'Any other team'],
              ['Ms. Pickersgill', '6 or fewer', 'Made up entirely of players under 18'],
            ] },
          'The number of boards is the number of visiting players who sit down to play at one time; anyone held in reserve does not take a board.',
          'Room hire is paid by the visiting club. It is £15 for a club that belongs to the county chess association and £28 for a club that does not. A visiting club that would like tea and cake served at the interval adds £7 to the room hire for that match.',
          "In every game, each player has an hour on the clock.",
          { t: 'table',
            head: ['Date', 'Use of the evening'],
            rows: [
              ['Wednesday 7 October', 'Club championship round'],
              ['Wednesday 21 October', 'Free for a friendly match'],
              ['Wednesday 4 November', 'Free for a friendly match'],
              ['Wednesday 18 November', 'Club championship round'],
            ] },
          'To arrange a match, write to matches@polmerechess.co.uk.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: matches@polmerechess.co.uk\nFrom: w.tebbutt@tarnbrookchess.org.uk\nDate: 22 September\nSubject: A friendly match with your club',
        body: [
          'Dear Polmere Chess Club,',
          'I am secretary of the Tarnbrook Chess Club, and I am writing to ask whether we could play a friendly match at your club this autumn.',
          'We first came across you at our town\'s fête in July, where some of your members had a stand and were taking on anyone who sat down.',
          'We would come with eight players in all, two of whom would be substitutes. Our oldest player is sixteen, so ours is a very young side.',
          'In the summer we put in an application to join the county chess association, but the association has not yet approved it. We would be grateful if tea and cake could be served for our players at the interval.',
          'Our minibus, the only way we can get the players to you, will be in for repairs from 26 October to 30 November, so we would need to play before then.',
          'Kind regards,\nWalter Tebbutt\nSecretary, Tarnbrook Chess Club',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v5q176p', s: 'Who will most likely arrange the match for Polmere Chess Club?',
        c: ['Ms. Pickersgill', 'Mr. Tonkin', 'Ms. Plumley', 'Mr. Tyack'],
        a: 0,
        e: 'ウェブページの表は、担当するキャプテンを「盤の数」と「相手チームの構成」の組で決めている。盤の数は一度に席につく選手の数で数え、控えは含まない。メールは「8人、うち2人は交代要員」と書いているので、盤に座るのは6人で、表の「6 or fewer」にあたる。また最年長が16歳なので選手は全員18歳未満で、表の「Made up entirely of players under 18」にあたる。この2つに合う行は Ms. Pickersgill である。',
        w: ['正解。表で Ms. Pickersgill の行は「6 or fewer」かつ「Made up entirely of players under 18」。メールの人数から交代要員を除いた席につく選手の数と、最年長が16歳という点の、両方に合う。',
            'Mr. Tonkin の行は「7 or more」。メールの8人をそのまま盤の数と読んだ場合に着く行だが、ウェブページの「anyone held in reserve does not take a board」により交代要員は盤に数えないので、盤は6面にとどまり合わない。',
            'Ms. Plumley の行は「7 or more」かつ「Any other team」。盤の数も相手の構成も、メールの内容と合わない（最年長が16歳なので、全員が18歳未満である）。',
            'Mr. Tyack の行は「6 or fewer」で盤の数は合うが、相手は「Any other team」の行である。メールは「Our oldest player is sixteen」と書いており、全員が18歳未満の側なのでこの行には当たらない。'] },
      { tag: 'クロス', qid: 'v5q177p', s: "How much will Mr. Tebbutt's club most likely pay Polmere Chess Club?",
        c: ['£15', '£22', '£28', '£35'],
        a: 3,
        e: 'ウェブページの部屋代は、協会に加盟しているクラブが £15、加盟していないクラブが £28で、お茶と菓子を頼むクラブは1試合につき £7 を足す。メールの加入申請は「has not yet approved it」とあり、まだ認められていないので加盟クラブではない（£28）。そのうえで「tea and cake」を頼んでいるので、£28 に £7 を足した £35 になる。',
        w: ['£15 は加盟クラブが軽食を頼まない場合の額。メールは「has not yet approved it」と書いていて加盟していないうえ、軽食も頼んでいるので合わない。',
            '£22 は £15 に £7 を足した額で、加盟クラブが軽食を頼む場合にあたる。メールの「has not yet approved it」により加盟クラブではないので合わない。',
            '£28 は加盟していないクラブが軽食を頼まない場合の額。メールは「tea and cake could be served for our players at the interval」と軽食を頼んでいるので、£7 が加わる。',
            '正解。加盟していないクラブの £28 に、軽食の £7 を足した額。'] },
      { tag: '詳細', qid: 'v5q178p', s: 'According to the web page, what time limit is used in friendly matches?',
        c: ['Fifteen minutes per player', 'Twenty-five minutes per player', 'Forty-five minutes per player', 'Sixty minutes per player'],
        a: 3,
        e: 'ウェブページに「In every game, each player has an hour on the clock.」とあり、持ち時間は1人60分である。',
        w: ['持ち時間は15分ではない。ウェブページは「In every game, each player has an hour on the clock.」と、1人1時間（60分）としている。',
            '持ち時間は25分ではない。ウェブページは「In every game, each player has an hour on the clock.」と、1人1時間（60分）としている。',
            '持ち時間は45分ではない。ウェブページは「In every game, each player has an hour on the clock.」と、1人1時間（60分）としている。',
            '正解。'] },
      { tag: 'クロス', qid: 'v5q179p', s: 'On what date will the match most likely be played?',
        c: ['October 7', 'October 21', 'November 4', 'November 18'],
        a: 1,
        e: 'ウェブページの表で、親善試合に使える晩は10月21日と11月4日。メールは「from 26 October to 30 November」はミニバスが使えないと述べている。11月4日はこの期間に入るので、期間の前にある10月21日が残る。',
        w: ['10月7日は、メールの期間の前にあるが、ウェブページの表では「Club championship round」の晩で、親善試合には使えない。',
            '正解。表では「Free for a friendly match」で、メールの「from 26 October to 30 November」の前にある。',
            '11月4日は、表では「Free for a friendly match」だが、メールの「from 26 October to 30 November」の期間に入るので、遠征用のミニバスが使えない。',
            '11月18日は、表で「Club championship round」の晩で使えず、メールの「from 26 October to 30 November」の期間にも入る。'] },
      { tag: '詳細', qid: 'v5q180p', s: 'How did Mr. Tebbutt first hear about Polmere Chess Club?',
        c: ['From a notice at the public library', 'From a neighbour who plays there', 'From a feature on local radio', 'From a stall at a summer fair'],
        a: 3,
        e: 'メールに「We first came across you at our town\'s fête in July, where some of your members had a stand」とあり、7月の町の祭り（夏の催し）の出店で知ったとわかる。',
        w: ['図書館の掲示については触れていない。',
            '隣人については触れていない。',
            'ラジオの特集については触れていない。',
            '正解。'] },
    ],
  }),

  /* ══ 181–185 ダブルパッセージ ══════════════════════
     先読み対策（2026-09-29）：stem と選択肢を凍結し、正解をくじで決めてから本文を新規に書いた。
     クロスの決め手と、文書を1つずつ隠したときの絞り込み：
       - Q183 記事は4枚の写真を、写っているもの（警官と犬・赤い自転車・はしごを登る男・楽隊）で紹介する。
         投書はその1つを別の言い方で指す。記事だけでは投書の対象が決まらず、投書だけではどの写真か出ない。
       - Q184 記事は町の4つの出来事を年つきで挙げ、投書は写真の年を出来事の1つの言い換えで指す。
         年の数は投書に書かない。記事だけでは4つの年、投書だけでは年が出ない。
     Q181・Q182 は記事の詳細、Q185 は投書の推測（書き手が加わる団体は展示の主催者とは別）。 */
  mp({
    n: [181, 182, 183, 184, 185],
    lv: 3,
    docs: [
      {
        label: 'Article', meta: 'Document 1',
        title: 'Pegworth Through the Lens',
        body: [
          'Residents who wonder what the town looked like when their parents were young will get an answer this month. An exhibition of old photographs has opened at the rooms of the Pegworth Historical Society and will stay open on Saturdays until the end of November.',
          'Nearly all of the prints on show had been lying in cardboard boxes in a records store at the town council offices, uncatalogued, until a clerk looked inside them last winter. Society members then spent the cold months sorting and mounting them.',
          'Four pictures have already become favourites with early visitors. The market square picture shows a police officer with a dog at his heels. In the picture of the old bridge, a red bicycle lies on its side. The schoolyard picture catches a man climbing a ladder, and the picture of the harbour front features a small brass band in full uniform.',
          "The exhibition also looks at four moments from the town's recent past: the opening of the Pettifer Picture House in 1948, the closure of Parfitt's bakery in 1952, the opening of the Pegworth Golf Club in 1957 and the opening of the Pegworth Cottage Hospital in 1961.",
          'Admission is free. Visitors who can put a name to anyone in the pictures are asked to tell the staff or write to this newspaper.',
        ],
      },
      {
        label: 'Letter to the editor', meta: 'Document 2',
        head: 'To the Editor, The Pegworth Herald',
        body: [
          'Dear Editor,',
          'I went along to the new photograph exhibition on Saturday and was delighted to see so much of the past on display. Your article asked readers to name people in the pictures, and I can name one.',
          'The man perched on the folding steps is Thaddeus Penhale. I give a few hours each month to Pegworth Remembers, a circle that collects older residents\' recollections of the town, and some years ago I recorded his memories for our archive. He told me about the day a photographer took his picture while he was up his steps at work, and said it was the year the town finally got its own hospital.',
          'I hope this is of help to the exhibition staff.',
          'Yours faithfully,\nSylvia Tregear',
        ],
      },
    ],
    q: [
      { tag: '詳細', qid: 'v5q181p', s: 'Where is the exhibition of old photographs being held?',
        c: ['At the town library', 'At the community centre', "At the historical society's rooms", 'At the parish church hall'],
        a: 2,
        e: '記事の冒頭に「An exhibition of old photographs has opened at the rooms of the Pegworth Historical Society」とある。',
        w: ['図書館については触れていない。',
            'コミュニティセンターについては触れていない。',
            '正解。',
            '教会の集会場については触れていない。'] },
      { tag: '詳細', qid: 'v5q182p', s: 'According to the article, how were most of the photographs obtained?',
        c: ['They were donated by local families.', "They were found in the council's archive.", 'They were bought from a private collector.', 'They were lent by a retired photographer.'],
        a: 1,
        e: '記事に「Nearly all of the prints on show had been lying in cardboard boxes in a records store at the town council offices」とあり、写真の大半は町役場の記録庫で見つかったものである。',
        w: ['地元の家族からの寄贈には触れていない。',
            '正解。',
            '収集家からの購入には触れていない。',
            '引退した写真家からの貸与には触れていない。'] },
      { tag: 'クロス', qid: 'v5q183p', s: "Which photograph in the exhibition is Ms. Tregear's letter mainly about?",
        c: ['The photograph of the market square', 'The photograph of the old bridge', 'The photograph of the schoolyard', 'The photograph of the harbour front'],
        a: 2,
        e: '投書は写真を「The man perched on the folding steps」と指している。記事で、段を登る男が写っているとされるのは「The schoolyard picture catches a man climbing a ladder」の校庭の写真だけである。',
        w: ['記事で市場の広場の写真に写っているのは「a police officer with a dog at his heels」で、投書が指す男は写っていない。',
            '記事で古い橋の写真に写っているのは「a red bicycle lies on its side」で、投書が指す男は写っていない。',
            '正解。',
            '記事で港の前の写真に写っているのは「a small brass band in full uniform」で、投書が指す男は写っていない。'] },
      { tag: 'クロス', qid: 'v5q184p', s: 'In what year was the photograph that Ms. Tregear writes about most likely taken?',
        c: ['1948', '1952', '1957', '1961'],
        a: 3,
        e: '投書は、写真が撮られたのは「the year the town finally got its own hospital」だと述べている。記事では町に病院ができたのは「the opening of the Pegworth Cottage Hospital in 1961」で、1961年になる。',
        w: ['1948年は記事で映画館の開館の年。投書が指すのは映画館ではなく町に病院ができた年なので合わない。',
            '1952年は記事でパン工場の閉鎖の年。投書が指すのは閉鎖ではなく、町に病院ができた年なので合わない。',
            '1957年は記事でゴルフ場の開場の年。投書が指すのはゴルフ場ではなく、町に病院ができた年なので合わない。',
            '正解。'] },
      { tag: '推測', qid: 'v5q185p', s: 'What is suggested about Ms. Tregear?',
        c: ['She has lived away from the town for years.', 'She has visited the exhibition more than once.', 'She keeps a copy of the same photograph.', 'She volunteers with a local history group.'],
        a: 3, t: ['p7inf'],
        e: '投書に「I give a few hours each month to Pegworth Remembers, a circle that collects older residents\' recollections of the town」とあり、町の住民の記憶を集める会（郷土史にかかわる団体）で毎月時間を割いて活動しているとわかる。展示の主催団体（Pegworth Historical Society）とは別の会である。',
        w: ['町を離れて暮らしているとは書かれていない。加わっている会は、この町の住民の記憶を集める会である。',
            '展示を見に行ったのは「on Saturday」と書かれているだけで、複数回とは書かれていない。',
            '写真の写しには触れていない。Penhale さんだとわかったのは、本人から聞いた「He told me about the day a photographer took his picture while he was up his steps at work」の話による。',
            '正解。'] },
    ],
  }),

  /* ══ 186–190 トリプルパッセージ ══════════════════════
     先読み対策（2026-09-29）：stem と選択肢を凍結し、正解をくじで決めてから本文を新規に書いた。
     クロスの決め手と、文書を1つずつ隠したときの絞り込み：
       - Q186 主任通訳者は4人が重ならない専門分野を持つ。メールは見本市の分野を展示品で言い換える。
         ウェブページだけでは4人のまま、メールだけでは人名が出ない。返信は主任に触れない。
       - Q187 人数は（言語数×1言語の人数）。言語数はメールの3言語に返信の1言語を足した4、
         1言語の人数はセッションの長さ（メールは120分）と規則（90分を超えれば2人）で決まる。
         返信を読まないと6、規則を読み違えると4や3に着く。
       - Q188 事前の資料は形式ごとに決まる。メールは形式名を使わずに言い換え、返信は資料に触れない。
     Q189 は返信の詳細、Q190 はメールの推測。 */
  mp({
    n: [186, 187, 188, 189, 190],
    lv: 4,
    docs: [
      {
        label: 'Web page', meta: 'Document 1',
        title: 'Tallentire Conference Interpreters — How We Staff Your Event',
        body: [
          'Tallentire Conference Interpreters supplies interpreters for conferences and trade fairs. Every assignment is led by one of our senior interpreters, chosen to match the subject of your event. Our current team leaders and their fields are shown below.',
          { t: 'table',
            head: ['Team leader', 'Field'],
            rows: [
              ['Mr. Pugsley', 'Shipbuilding and marine equipment'],
              ['Ms. Tewson', 'Aircraft and aviation equipment'],
              ['Mr. Prowse', 'Mining and quarrying machinery'],
              ['Ms. Pengelly', 'Textiles and clothing manufacture'],
            ] },
          'Whatever the field, the team leader arranges interpreters for every language you need, so the same person is responsible for all of them.',
          'The number of interpreters for each language depends on the length of the session. For a session running longer than 90 minutes, we supply two interpreters for each language, who take turns; for a session of 90 minutes or less, we supply one. The team leader counts as one of these interpreters.',
          'We also ask clients to send us one set of preparation material before the event, depending on the format of the session:',
          { t: 'list', items: [
            'An address read from a written text: a list of the firms that have stands at the event',
            'A discussion among several guests on a stage: recordings of the guests\' earlier public appearances',
            'A demonstration of a product: a short biography of each person giving it',
            'A session of questions from the audience: the draft timetable for the session',
          ] },
          'To book, write to bookings@tallentireinterpreters.co.uk.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: bookings@tallentireinterpreters.co.uk\nFrom: g.timms@pyecroftfairs.co.uk\nDate: 14 September\nSubject: Interpreters for the Tidworth Trade Fair',
        body: [
          'Dear Tallentire Conference Interpreters,',
          'I am organising the Tidworth Trade Fair for Pyecroft Trade Fairs. It opens on 10 November at the Tidworth Exhibition Hall. The fair is new this year, and it is the first that Pyecroft Trade Fairs has put on, so we are still learning what our visitors will need.',
          'Those visitors will be looking at looms, spinning machinery and finished cloth, and we hope you have someone who knows that world.',
          'We need interpretation into Spanish, Japanese and Arabic for just one session. It will last 120 minutes. A guest from the industry body will stand at a lectern and deliver, word for word, a text written in advance, and no questions will be taken afterwards.',
          'Please let me know whether you can staff it.',
          'Best wishes,\nGraham Timms\nPyecroft Trade Fairs',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: g.timms@pyecroftfairs.co.uk\nFrom: p.thwaite@tallentireinterpreters.co.uk\nDate: 15 September\nSubject: RE: Interpreters for the Tidworth Trade Fair',
        body: [
          'Dear Mr. Timms,',
          'Thank you for your enquiry. We are pleased to confirm that we can staff the session you describe.',
          'Following our telephone call this morning, I have added Mandarin to the booking, as you are expecting visitors from Guangzhou.',
          'The interpreters will be staying at a hotel close to the hall, and their rooms are booked. On the first morning, please meet them at the hall\'s front doors at 7:45 a.m.',
          'Best wishes,\nPauline Thwaite\nBookings Coordinator, Tallentire Conference Interpreters',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v5q186p', s: "Who will most likely lead Tallentire's team at the fair?",
        c: ['Ms. Pengelly', 'Mr. Prowse', 'Ms. Tewson', 'Mr. Pugsley'],
        a: 0,
        e: 'ウェブページは、主任通訳者を4人挙げ、それぞれの専門分野を示している。メールは見本市で「looms, spinning machinery and finished cloth」を見ることになると書いており、これは織物・衣料の分野にあたる。この分野の担当は Ms. Pengelly である。',
        w: ['正解。表で Ms. Pengelly の分野は「Textiles and clothing manufacture」で、メールの織機・紡績機械・仕上がった布にあたる。',
            'Mr. Prowse の分野は「Mining and quarrying machinery」。メールの織機・紡績機械・布とは別の分野である。',
            'Ms. Tewson の分野は「Aircraft and aviation equipment」。メールの織機・紡績機械・布とは別の分野である。',
            'Mr. Pugsley の分野は「Shipbuilding and marine equipment」。メールの織機・紡績機械・布とは別の分野である。'] },
      { tag: 'クロス', qid: 'v5q187p', s: 'How many interpreters will Tallentire most likely send to the fair?',
        c: ['Three', 'Four', 'Six', 'Eight'],
        a: 3,
        e: 'メールが挙げる言語はスペイン語・日本語・アラビア語で、返信で中国語（Mandarin）が加わるので4言語になる。通訳が要るセッションは「120 minutes」で、ウェブページの規則では「longer than 90 minutes」なら1言語に2人を付ける。主任も人数に含まれるので別に数えず、4言語 × 2人で8人になる。',
        w: ['3人は、3言語に1人ずつと読んだ場合の数。返信で言語が1つ加わるうえ、120分は規則の「longer than 90 minutes」にあたり、1言語に付くのは2人である。',
            '4人は、4言語に1人ずつと読んだ場合の数。メールのセッションは「120 minutes」なので、「for a session of 90 minutes or less」の1人にはあたらない。',
            '6人は、メールの3言語に2人ずつと読んだ場合の数。返信の「I have added Mandarin to the booking」により4言語になるので合わない。',
            '正解。4言語に2人ずつ。'] },
      { tag: 'クロス', qid: 'v5q188p', s: 'What will Mr. Timms most likely need to send Tallentire before the fair?',
        c: ['The draft programme for the session', "Recordings of the speakers' earlier talks", 'A list of the exhibiting companies', 'Short profiles of each presenter'],
        a: 2,
        e: 'メールが述べるセッションは、招待客が演壇で「a text written in advance」を一語一語読み上げ、質問は受けない形式で、ウェブページの「An address read from a written text」にあたる。この形式で事前に送る資料は「a list of the firms that have stands at the event」、つまり出展企業の一覧である。',
        w: ['進行表（draft timetable）は「A session of questions from the audience」の形式の資料。メールのセッションは「no questions will be taken afterwards」で、この形式ではない。',
            '過去の公の場での映像・音声（recordings）は「A discussion among several guests on a stage」の形式の資料。メールのセッションは壇上の討論ではない。',
            '正解。',
            '出演者の略歴は「A demonstration of a product」の形式の資料。メールのセッションは製品の実演ではない。'] },
      { tag: '詳細', qid: 'v5q189p', s: 'According to the reply, where will the interpreters meet Mr. Timms on the first morning?',
        c: ['At the main entrance', "At the organisers' office", 'At the technical desk', 'At the hotel reception'],
        a: 0,
        e: '返信に「On the first morning, please meet them at the hall\'s front doors at 7:45 a.m.」とある。ホテルは通訳者の宿泊先として触れられているだけで、集合場所ではない。',
        w: ['正解。',
            '主催者の事務所には触れていない。',
            '技術デスクには触れていない。',
            'ホテルは「staying at a hotel close to the hall」と宿泊先として出てくるだけで、集合場所ではない。'] },
      { tag: '推測', qid: 'v5q190p', s: 'What is suggested about Pyecroft Trade Fairs?',
        c: ['It has hired interpreters from Tallentire before.', 'It is holding this fair for the first time.', 'It organises several different fairs each year.', 'It has moved the fair to a new venue.'],
        a: 1, t: ['p7inf'],
        e: 'メールに「The fair is new this year, and it is the first that Pyecroft Trade Fairs has put on」とあり、この見本市は今年が初めての開催だとわかる。',
        w: ['以前に Tallentire へ依頼したことは書かれていない。',
            '正解。',
            'メールは、この見本市が Pyecroft Trade Fairs にとって初めて開くものだと述べており、毎年いくつも開いているという内容と合わない。',
            '会場を移したとは書かれていない。'] },
    ],
  }),

  /* ══ 191–195 トリプルパッセージ ══════════════════════
     先読み対策（2026-09-29）：stem と選択肢を凍結し、正解をくじで決めてから本文を新規に書いた。
     クロスの決め手と、文書を1つずつ隠したときの絞り込み：
       - Q191 枠は4つ。メールは第一・第二希望と外す枠を時刻なしで述べ、返信は第一希望が埋まっていると伝える。
         お知らせだけでは時刻が4つ、メールだけでは時刻が出ない。
       - Q192 区画は車の区分ごと。メールの本人の見立て（共用の会社の車）は誤りで、返信が区分を言い換えで確定する。
       - Q193 説明会は曜日ごと。メールは構内にいる曜日、返信は1つが今月は中止と伝える。
     Q194 は返信の詳細、Q195 はメールの推測。 */
  mp({
    n: [191, 192, 193, 194, 195],
    lv: 4,
    docs: [
      {
        label: 'Notice', meta: 'Document 1',
        title: 'Electric Vehicle Charging — Thurgood Business Park',
        body: [
          'The estates office is pleased to announce that charging bays are now open in the staff car park. To give everyone a fair turn, each bay is booked for a regular weekly slot, and each group of bays is reserved for one kind of vehicle.',
          { t: 'table',
            head: ['Bays', 'Reserved for'],
            rows: [
              ['Bays 9–12', 'Cars bought and owned by the employee who drives them'],
              ['Bays 1–4', 'Vehicles owned by a tenant firm and shared among its staff'],
              ['Bays 13–16', "Cars borrowed for a short time while an employee's own car is being repaired"],
              ['Bays 5–8', 'Cars leased by a tenant firm for the sole use of one named employee'],
            ] },
          'Charging slots begin at 7:30 a.m., 10:00 a.m., 12:30 p.m. and 3:00 p.m., and are the same in every bay.',
          'Anyone using the bays for the first time must attend one induction session. Each session runs on a different day:',
          { t: 'list', items: [
            'Monday: individual guidance from one of our coordinators',
            'Tuesday: a short talk in the staff café',
            'Wednesday: a group demonstration in the car park',
            'Friday: a video shown in the meeting room',
          ] },
          'All users must follow the charging rules, which are available from the estates office. Questions should be sent to estates@thurgoodpark.co.uk.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: estates@thurgoodpark.co.uk\nFrom: k.pidcock@tolliverfreight.co.uk\nDate: 8 September\nSubject: Charging bay and regular slot',
        body: [
          'Dear Estates Office,',
          'I work at Tolliver Freight Systems, one of the tenants on the park, and I would like to start using the new charging bays.',
          'My car is electric. My employer holds the lease, but the car was ordered for me alone, nobody else drives it, and a set sum comes out of my salary each month. I assume that makes it a company vehicle, so I expect to use the bays for those.',
          'I have just ordered a newer model through the same arrangement; it is due next month and takes the same type of connector.',
          'For my regular slot, my first choice would be the one that lets me plug in as soon as I arrive at work. If that is taken, the one around my lunch break would be my second choice. I could not manage the last slot of the day, as I am usually out of the building by then.',
          'I am at the park only on Wednesdays and Fridays; the rest of the week I work at customers\' premises.',
          'Kind regards,\nKeith Pidcock',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: k.pidcock@tolliverfreight.co.uk\nFrom: j.penwarden@thurgoodpark.co.uk\nDate: 9 September\nSubject: RE: Charging bay and regular slot',
        body: [
          'Dear Mr. Pidcock,',
          'Thank you for your message. Because your employer leases the car for you personally and you are the only person who drives it, it is not a shared company vehicle. You will therefore use the bays reserved for cars of your kind.',
          'I am sorry to say that the slot you mentioned first is already taken by another tenant, but your second choice is free, and I have put you down for it every week.',
          'Please note that the video showing for new users is not running this month, so you will need to choose one of the other sessions.',
          'Please also put your signature to the attached charging rules and send them back to me before your first session.',
          'Best regards,\nJ. Penwarden\nEstates Coordinator, Thurgood Business Park',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v5q191p', s: "At what time will Mr. Pidcock's regular charging slot most likely begin?",
        c: ['7:30 a.m.', '10:00 a.m.', '12:30 p.m.', '3:00 p.m.'],
        a: 2,
        e: 'お知らせの枠は7:30、10:00、12:30、3:00の4つ。メールの第一希望は「as soon as I arrive at work」に入れる朝の枠、第二希望は昼休みのころの枠（12:30）、外したいのは一日の最後の枠（3:00）。返信は「the slot you mentioned first is already taken」で、第二希望が空いていると伝えているので、12:30になる。',
        w: ['7:30 は昼休みごろの第二希望にはあたらない。出勤してすぐの第一希望にあたるとしても、返信の「the slot you mentioned first is already taken by another tenant」により埋まっている。',
            '10:00 は昼休みごろの第二希望にはあたらない。出勤してすぐの第一希望にあたるとしても、返信の「the slot you mentioned first is already taken by another tenant」により埋まっている。',
            '正解。第一希望が埋まっているため、第二希望の昼休みごろの枠になる。',
            '3:00 の枠は、メールの「I could not manage the last slot of the day」で本人が外している。'] },
      { tag: 'クロス', qid: 'v5q192p', s: 'Which bays will Mr. Pidcock most likely be allowed to use?',
        c: ['Bays 1–4', 'Bays 5–8', 'Bays 9–12', 'Bays 13–16'],
        a: 1,
        e: '返信は、車を雇用主がリースしていて本人だけが運転するので、共用の会社の車ではないと確定させている。お知らせでこれにあたるのは「Cars leased by a tenant firm for the sole use of one named employee」の区画で、Bays 5–8 になる。',
        w: ['Bays 1–4 は「Vehicles owned by a tenant firm and shared among its staff」の区画。メールで本人はこれにあたると見ているが、返信の「it is not a shared company vehicle」により当たらない。',
            '正解。',
            'Bays 9–12 は「Cars bought and owned by the employee who drives them」の区画。メールの車は雇用主がリースしているので、本人が購入した車ではない。',
            'Bays 13–16 は「Cars borrowed for a short time while an employee\'s own car is being repaired」の区画。メールの車は修理中の代わりに借りた車ではない。'] },
      { tag: 'クロス', qid: 'v5q193p', s: 'What kind of induction session will Mr. Pidcock most likely attend?',
        c: ['A one-to-one session with a coordinator', 'A group demonstration in the car park', 'A short talk in the staff café', 'A video shown in the meeting room'],
        a: 1,
        e: 'メールで Pidcock さんは構内にいるのは水曜と金曜だけだと書いている。お知らせでこの2日にあたる説明会は、水曜の「a group demonstration in the car park」と金曜の「a video shown in the meeting room」。返信は金曜の映像の説明会が今月は行われないと伝えているので、水曜の駐車場での実演が残る。',
        w: ['コーディネーターの個別の案内は月曜で、メールの水曜・金曜とは重ならない。',
            '正解。',
            '職員用カフェでの短い話は火曜で、メールの水曜・金曜とは重ならない。',
            '会議室での映像は金曜で曜日は合うが、返信の「the video showing for new users is not running this month」により今月は行われない。'] },
      { tag: '詳細', qid: 'v5q194p', s: 'What does the reply ask Mr. Pidcock to provide?',
        c: ['A copy of his driving licence', "A note of his car's registration", 'A letter from his employer', 'A signed copy of the user rules'],
        a: 3,
        e: '返信の最後に「Please also put your signature to the attached charging rules and send them back to me before your first session.」とあり、署名した利用規則を求めている。',
        w: ['運転免許証の写しは求めていない。',
            '車の登録番号の控えは求めていない。',
            '雇用主の手紙は求めていない。',
            '正解。'] },
      { tag: '推測', qid: 'v5q195p', s: 'What can be inferred about Mr. Pidcock?',
        c: ['He has recently started at his firm.', 'He is planning to change his car soon.', 'He currently charges his car at home.', 'He has driven an electric car for years.'],
        a: 1, t: ['p7inf'],
        e: 'メールに「I have just ordered a newer model through the same arrangement; it is due next month」とあり、近く車を替えるとわかる。',
        w: ['入社の時期については触れていない。',
            '正解。',
            '今の充電の方法については触れていない。',
            '電気自動車に乗っている期間については触れていない。'] },
    ],
  }),

  /* ══ 196–200 トリプルパッセージ ══════════════════════
     先読み対策（2026-09-29）：stem と選択肢を凍結し、正解をくじで決めてから本文を新規に書いた。
     クロスの決め手と、文書を1つずつ隠したときの絞り込み：
       - Q196 セットは（年代×色合い）の2×2。メールは年代と色の希望を広告の語を使わずに述べる。
         広告だけでは4セット、メールだけではセット番号が出ない。返信にセット番号は無い。
       - Q197 返却日は（受け渡しの日2通り×貸出日数2通り）。メールの希望日は6月2日だが、
         返信が6月5日に改め、日数は広告の規則とメールの内金のみという事実で7日。
       - Q198 届け方は会場の町ごと。メールは町名だけを書き、広告の町別の規則と合わせて決まる。
     Q199 はメールの詳細、Q200 はメールの推測。 */
  mp({
    n: [196, 197, 198, 199, 200],
    lv: 4,
    docs: [
      {
        label: 'Advertisement', meta: 'Document 1',
        title: 'Twigg Costume Hire — Period Costumes for Your Event',
        body: [
          'Twigg Costume Hire dresses groups for stage productions and special occasions. Each set is enough for a whole group, with outfits in a range of sizes. Choose the set that matches the look you want.',
          { t: 'table',
            head: ['Set', 'Period', 'Colours'],
            rows: [
              ['Set 58', '1920s', 'Muted, neutral shades'],
              ['Set 24', '1950s', 'Bright, bold shades'],
              ['Set 37', '1920s', 'Bright, bold shades'],
              ['Set 12', '1950s', 'Muted, neutral shades'],
            ] },
          'How long you keep a set depends on how you pay when you reserve it. If you pay the whole hire charge when you reserve, the set is due back no later than 14 days after the handover date. If you pay only a deposit when you reserve, with the balance due on the handover date, the set is due back no later than 7 days after the handover date.',
          'How the set reaches you depends on where your event is held:',
          { t: 'list', items: [
            'Pelsham or Pentreath: you collect the set from our shop.',
            'Thorncombe or Tregarrow: our van brings the set to you.',
            'Tolcarne or Trelawn: a courier firm sends the set to you.',
            'Tredinnick or Pilkerton: the set is held for you at our partner store in the town.',
          ] },
          'To reserve a set, write to hire@twiggcostumes.co.uk or visit us at 22 Wharf Street.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: hire@twiggcostumes.co.uk\nFrom: brenda.plowright@fastmail.com\nDate: 18 May\nSubject: Hiring a set of costumes',
        body: [
          'Dear Twigg Costume Hire,',
          'I am organising this year\'s village festival and would like to hire a set of costumes for it. A fellow committee member handed the organising on to me in March, so I am still finding my way.',
          'On the evening of the festival we will be showing silent films on a screen in the hall, and I would like everyone helping to be dressed in the fashions of the years when such films were made. The hall has only small windows and very dim lighting, so the clothes will need to stand out from a distance.',
          'The festival is on Saturday 6 June, in Thorncombe. Could the handover be on Tuesday 2 June, so that there is time for fittings?',
          'The committee will release only a deposit when I reserve, and the balance will be paid on the handover date.',
          'Kind regards,\nBrenda Plowright',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: brenda.plowright@fastmail.com\nFrom: roy.tozer@twiggcostumes.co.uk\nDate: 19 May\nSubject: RE: Hiring a set of costumes',
        body: [
          'Dear Ms. Plowright,',
          'Thank you for your enquiry. We would be delighted to dress your helpers.',
          'Unfortunately we cannot manage Tuesday 2 June, as all of our staff will be busy from Monday to Thursday that week preparing a very large theatre hire for another customer. The handover date will therefore be Friday 5 June, the day before your festival, which should still leave you an evening for fittings.',
          'To confirm the reservation, please let me have a list of your helpers\' sizes by the end of this month.',
          'Best wishes,\nRoy Tozer\nTwigg Costume Hire',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v5q196p', s: 'Which costume set will Ms. Plowright most likely hire?',
        c: ['Set 37', 'Set 12', 'Set 58', 'Set 24'],
        a: 0,
        e: '広告の表は、4つのセットを年代（1920s／1950s）と色合い（明るい／落ち着いた）の組で分けている。メールは、無声映画を上映する夜なので、そうした映画が作られた時代の装いにしたいと述べており、これは1920年代にあたる。また、会場が小さな窓しかなく照明も暗いので遠くから目立つ衣装が要ると述べており、これは明るい色合いにあたる。この2つに合うのは Set 37 である。',
        w: ['正解。表で Set 37 は「1920s」かつ「Bright, bold shades」。メールの無声映画の時代と、暗い会場で目立つ必要性の両方に合う。',
            'Set 12 は「1950s」かつ「Muted, neutral shades」。メールは無声映画の作られた時代の装いを望んでいて時代が合わず、暗い会場で目立つ必要があるので色合いも合わない。',
            'Set 58 は「1920s」で時代は合うが、「Muted, neutral shades」である。メールは「the clothes will need to stand out from a distance」と書いており、落ち着いた色合いは合わない。',
            'Set 24 は「Bright, bold shades」で色合いは合うが、「1950s」である。メールは無声映画の作られた時代の装いを望んでおり、時代が合わない。'] },
      { tag: 'クロス', qid: 'v5q197p', s: 'By what date will Ms. Plowright most likely need to return the costumes?',
        c: ['June 9', 'June 12', 'June 16', 'June 19'],
        a: 1,
        e: 'メールは内金だけを払い、残りは受け渡しの日に払うと述べているので、広告の規則では受け渡しの日から7日以内に返す。受け渡しの日は、メールの6月2日ではなく、返信で改められた6月5日である。6月5日の7日後の6月12日が返却の期限になる。',
        w: ['6月9日は、メールの希望日の6月2日から7日後。返信の「The handover date will therefore be Friday 5 June」により受け渡しの日は6月5日なので、起点が合わない。',
            '正解。6月5日の7日後。',
            '6月16日は、メールの希望日の6月2日から14日後。起点が6月5日であることと、メールが内金だけを払うとしていて7日の側にあたることの、どちらにも合わない。',
            '6月19日は、6月5日から14日後。14日は全額を払った場合の日数で、メールは「only a deposit」と書いているので合わない。'] },
      { tag: 'クロス', qid: 'v5q198p', s: 'How will the costumes most likely reach Ms. Plowright?',
        c: ['They will be picked up at the shop.', "They will be brought by the shop's van.", 'They will be sent by a courier firm.', 'They will be held at a partner store.'],
        a: 1,
        e: 'メールは催しの会場がある地名を「in Thorncombe」と書いている。広告は届け方を場所ごとに定めており、「Thorncombe or Tregarrow: our van brings the set to you.」とあるので、店のバンで届けられる。',
        w: ['店で受け取るのは広告の「Pelsham or Pentreath」の場合。会場は Thorncombe なので当たらない。',
            '正解。',
            '宅配業者で送るのは広告の「Tolcarne or Trelawn」の場合。会場は Thorncombe なので当たらない。',
            '提携店で預かるのは広告の「Tredinnick or Pilkerton」の場合。会場は Thorncombe なので当たらない。'] },
      { tag: '詳細', qid: 'v5q199p', s: "According to Ms. Plowright's e-mail, what kind of event is she organising?",
        c: ['A charity dinner', "A company's anniversary party", 'A village festival', 'A wedding celebration'],
        a: 2,
        e: 'メールに「I am organising this year\'s village festival」とある。',
        w: ['慈善の夕食会には触れていない。',
            '会社の記念パーティーには触れていない。',
            '正解。',
            '結婚の祝いには触れていない。'] },
      { tag: '推測', qid: 'v5q200p', s: 'What is most likely true about Ms. Plowright?',
        c: ['She has used the shop\'s services before.', 'She works at the venue for the event.', 'She took over the event from a colleague.', 'She will make some costumes herself.'],
        a: 2, t: ['p7inf'],
        e: 'メールに「A fellow committee member handed the organising on to me in March」とあり、催しの運営を同じ委員会の仲間から引き継いだとわかる。',
        w: ['この店を以前に利用したことには触れていない。',
            '会場で働いているとは書かれていない。',
            '正解。',
            '衣装を自分で作るとは書かれていない。'] },
    ],
  }),
];
