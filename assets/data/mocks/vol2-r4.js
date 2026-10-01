/* =============================================================
   予想模試 Vol.2 — Part 7 複数文書（No.176–200）
   ============================================================= */

const mp = (o) => ({
  id: `v2-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7cross'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  /* 設問 id は通し番号 no から自動生成するが、本ファイルは No.176–200 を全問
     新規採番したため x.qid で明示している（id を使い回すと SRS の履歴が
     別問題に引き継がれるため）。 */
  questions: o.q.map((x, i) => ({
    id: x.qid || `v2q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7cross'], tag: x.tag,
  })),
});

export const R4 = [

  /* ══ 176–180 ダブルパッセージ ══════════════════════
     先読み対策（2026-09-29）：stem と選択肢は監査役の設問案で凍結し、正解は
     くじで決めたあと本文を新規に書き下ろした。大学の夏期講座ウェブページ＋
     受講希望者の問い合わせメール。Q176・Q177・Q179・Q180 の4問がクロス。
     文書を1つずつ隠すと：
       - ウェブページだけでは、Farthing さんがどの講師の下で学びたいか・どの
         身分の区分に当たるか・曜日と時間帯の希望・オリエンテーションの希望が
         分からず、どのクロス設問も決まらない。
       - メールだけでは、4講座と担当講師の対応・4区分の金額・4セクションの
         曜日と時間帯・4回のオリエンテーションの形式と内容が分からず、
         同様に決まらない。
       - Q178 はウェブページのみで決まる単一文書の詳細設問。
     Q176: 講師 Lacey（メール）＝Principles of Data Visualization（ウェブページ）。
     Q177: Lowther Group 勤務（メール）＝$180 の区分（ウェブページ）。
     Q179: 火木・夕方（メール2文）＝Farrant Hall（ウェブページ）。
     Q180: キャンパス開催・コンピュータ口座設定希望（メール2文）＝6月26日
     （ウェブページ）。 */
  mp({
    n: [176, 177, 178, 179, 180],
    lv: 3,
    docs: [
      {
        label: 'Web page', meta: 'Document 1',
        title: 'Ledgerton University — Summer Programs',
        body: [
          'This summer, the Summer Programs Office is offering four non-credit courses, open to the public as well as current students.',
          { t: 'list', items: [
            'Foundations of Marine Biology, taught by Dr. Laurence Fitton',
            'Introduction to Urban Planning, taught by Dr. Leonie Landry',
            'Principles of Data Visualization, taught by Dr. Felicity Lacey',
            'Fundamentals of Museum Studies, taught by Dr. Lachlan Forsythe',
          ] },
          'Each course is offered in all four sections below, so choose whichever meeting time suits your schedule:',
          { t: 'table', head: ['Section', 'Meets', 'Time'],
            rows: [
              ['Lorrimer Hall', 'Monday and Wednesday', 'Evening'],
              ['Lydgate Hall', 'Tuesday and Thursday', 'Morning'],
              ['Fairlie Hall', 'Monday and Wednesday', 'Morning'],
              ['Farrant Hall', 'Tuesday and Thursday', 'Evening'],
            ] },
          'Course fees depend on your status, as follows:',
          { t: 'table', head: ['Category', 'Fee'],
            rows: [
              ['Ledgerton University alumni', '$260'],
              ['Lingwood College faculty and staff', '$220'],
              ['Ledgerton Public Library cardholders', '$300'],
              ['Lowther Group employees', '$180'],
              ['All other applicants', '$340'],
            ] },
          'A brief orientation is offered four times before classes begin; each covers one topic, in one of two formats:',
          { t: 'table', head: ['Date', 'Format', 'Focus'],
            rows: [
              ['June 5', 'Online', 'Library orientation'],
              ['June 12', 'On campus', 'Library orientation'],
              ['June 19', 'Online', 'Computer account setup'],
              ['June 26', 'On campus', 'Computer account setup'],
            ] },
          'To register for a course, please come in person to the Summer Programs Office, Room 118, on any weekday between 9 a.m. and 7 p.m.; a staff member will help you complete the paperwork there.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: summerprograms@ledgerton.edu\nFrom: imogen.farthing@fastmail.com\nDate: May 20\nSubject: Summer course registration',
        body: [
          'Dear Summer Programs Office,',
          'I once attended a public lecture given by Dr. Felicity Lacey and would very much like the chance to study under her this summer.',
          'I have been on the staff of the Lowther Group for the past two years.',
          'This summer, my schedule only leaves Tuesdays and Thursdays free for a class.',
          "I work until five on weekdays, so I'd need a class that meets once the working day is over.",
          "For the orientation, I'd prefer to come to the university in person rather than join remotely.",
          "The main thing I'm hoping to take care of at orientation is getting my login for the university's computers set up.",
          'Could you let me know what I should do next?',
          'Best wishes,\nImogen Farthing',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v2q176p', s: 'Which summer course will Ms. Farthing most likely register for?',
        c: ['Principles of Data Visualization', 'Introduction to Urban Planning', 'Foundations of Marine Biology', 'Fundamentals of Museum Studies'],
        a: 0,
        e: 'ウェブページは Principles of Data Visualization を Dr. Felicity Lacey が担当すると案内している。メールは、Dr. Felicity Lacey の公開講演に以前出席し、彼女のもとで学びたいと書いている。この2つを合わせると、Farthing さんが登録するのは Principles of Data Visualization だとわかる。',
        w: ['正解。',
            'Introduction to Urban Planning の担当は Dr. Leonie Landry で、メールが触れている講師とは一致しない。',
            'Foundations of Marine Biology の担当は Dr. Laurence Fitton で、メールが触れている講師とは一致しない。',
            'Fundamentals of Museum Studies の担当は Dr. Lachlan Forsythe で、メールが触れている講師とは一致しない。'] },
      { tag: 'クロス', qid: 'v2q177p', s: 'How much will Ms. Farthing most likely pay in course fees?',
        c: ['$180', '$220', '$260', '$300'],
        a: 0,
        e: 'ウェブページの料金表では、Lowther Group の社員は $180。メールで Farthing さんは「この2年間 Lowther Group に勤めている」と書いており、この区分に当たる。',
        w: ['正解。',
            '$220 は Lingwood College の教職員向けの料金で、メールは同校との関係を述べていない。',
            '$260 は Ledgerton University 卒業生向けの料金で、メールは卒業生であるとは述べていない。',
            '$300 は Ledgerton Public Library の利用カード保有者向けの料金で、メールは図書館カードに触れていない。'] },
      { tag: '詳細', qid: 'v2q178p', s: 'What does the website say about registering for a course?',
        c: ['Registration takes place through an online form.', 'Registration involves a visit to the campus office.', 'Registration happens through a telephone call.', 'Registration requires mailing a signed paper form.'],
        a: 1,
        e: 'ウェブページは「登録するには、平日9時から19時の間に Summer Programs Office, Room 118 へ直接来てほしい。職員がその場で手続きを手伝う」と案内している。',
        w: ['オンラインの様式には触れていない。', '正解。', '電話での対応には触れていない。', '署名済みの用紙の郵送には触れていない。'] },
      { tag: 'クロス', qid: 'v2q179p', s: 'Which section will Ms. Farthing most likely join?',
        c: ['The Farrant Hall section', 'The Lydgate Hall section', 'The Lorrimer Hall section', 'The Fairlie Hall section'],
        a: 0,
        e: 'ウェブページの表では、Farrant Hall は火曜と木曜、夕方に開講。メールは「火曜と木曜しか空いていない」（曜日）と「平日は5時まで仕事があるので、勤務が終わってから始まる授業が必要」（時間帯）の2文を書いており、この両方を満たすのは Farrant Hall だけ。',
        w: ['正解。',
            'Lydgate Hall は火・木の午前で、曜日の条件には合うが夕方という時間帯の条件に合わない。',
            'Lorrimer Hall は月・水の夕方で、時間帯の条件には合うが火・木という曜日の条件に合わない。',
            'Fairlie Hall は月・水の午前で、曜日・時間帯のどちらの条件にも合わない。'] },
      { tag: 'クロス', qid: 'v2q180p', s: 'On what date will Ms. Farthing most likely attend an orientation session?',
        c: ['June 5', 'June 12', 'June 19', 'June 26'],
        a: 3,
        e: 'ウェブページの表では、6月26日はキャンパス開催・コンピュータ口座設定が内容。メールは「オンラインではなく大学に直接出向きたい」（形式）と「大学のコンピュータのログインを設定しておきたい」（内容）の2文を書いており、この両方を満たすのは6月26日だけ。',
        w: ['6月5日はオンライン・図書館案内で、形式・内容のどちらの希望にも合わない。',
            '6月12日はキャンパス開催・図書館案内で、形式の希望には合うがコンピュータ口座設定という内容の希望に合わない。',
            '6月19日はオンライン・コンピュータ口座設定で、内容の希望には合うがキャンパス開催という形式の希望に合わない。',
            '正解。'] },
    ],
  }),

  /* ══ 181–185 ダブルパッセージ ══════════════════════
     公園改修を報じる地元紙の記事＋住民からの投書。Q183・Q184 の2問がクロス。
     文書を1つずつ隠すと：
       - 記事だけでは、投書者がいつ自分の催しを開くか・いつなら意見を出せるかが
         分からず、どちらのクロス設問も決まらない。
       - 投書だけでは、4つの工程がいつ実施されるか・4つの意見提出方法がいつまで
         受け付けられるかが分からず、同様に決まらない。
       - Q181・Q182 は単一文書の詳細設問。Q185 は投書のみの推測設問。
     Q183: 投書「8月に催しを開きたい」＝記事「8月は菜園の移設」。
     Q184: 投書「6月最後の2週間まで考えがまとまらない」＝記事「公園課の意見箱は
     6月16〜30日のみ受付（他の3方法はすでに締め切っている）」。 */
  mp({
    n: [181, 182, 183, 184, 185],
    lv: 3,
    docs: [
      {
        label: 'Article', meta: 'Document 1',
        title: 'Renovation Plans Approved for Lindley Green',
        body: [
          "The Falstone Gazette — Town officials have approved a long-discussed renovation of Lindley Green, the town's largest park. Plans moved forward after nearly four hundred residents signed a petition asking the town council to have the park brought up to date, and the council voted last month to fund the work in full.",
          'Work will proceed in four phases, each addressing a different part of the park:',
          { t: 'table', head: ['Phase', 'Scheduled month'],
            rows: [
              ['Playground reconstruction', 'June'],
              ['Pathway resurfacing', 'July'],
              ['Garden relocation', 'August'],
              ['Parking area expansion', 'September'],
            ] },
          'Residents wishing to comment on the plans may do so in several ways:',
          { t: 'table', head: ['Method', 'Open period'],
            rows: [
              ['Online feedback form', 'April 1–30'],
              ['Public forum at the library', 'May 15 (one evening only)'],
              ['Mailed comment card', 'June 1–15'],
              ['Comment box at the parks office', 'June 16–30'],
            ] },
          'The parks department says it will review every comment it receives.',
        ],
      },
      {
        label: 'Letter', meta: 'Document 2',
        title: 'Letters to the Editor',
        body: [
          'I read with interest your report on the plans for Lindley Green.',
          "These days, I like to meet a couple of old friends at the picnic tables most Saturday mornings, and it's good to hear the park will be brought up to date.",
          "I'm hoping to organize a small outdoor poetry reading in the park sometime in August, and I wonder whether construction will still be going on at that point.",
          "Between work and family commitments, I doubt I'll manage to put my thoughts on the plans in order before the final two weeks of June, so I may be later than most in having my say.",
          'Last spring my family traded our old apartment for a house two streets from the park, and the green space was one of the main reasons we chose the neighborhood.',
        ],
        sig: 'Dorian Featherstone',
      },
    ],
    q: [
      { tag: '詳細', qid: 'v2q181p', s: 'According to the article, why did the town decide to renovate Lindley Green?',
        c: ['The town won a grant for improving public spaces.', 'Residents handed a petition to the town council.', 'An elementary school opened on the street beside the park.', 'County officials set new standards for public parks.'],
        a: 1,
        e: '記事は「約400人の住民が、公園を改修するよう求める請願書に署名したことを受けて計画が進んだ」と述べている。',
        w: ['補助金の獲得には触れていない。', '正解。', '小学校の開校には触れていない。', '郡の基準には触れていない。'] },
      { tag: '詳細', qid: 'v2q182p', s: 'What does Mr. Featherstone say he currently does at Lindley Green?',
        c: ['He grows vegetables in one of the community garden plots.', 'He walks his dog along the perimeter path each morning.', 'He coaches a youth sports team on the open field.', 'He meets friends at the picnic tables on weekends.'],
        a: 3,
        e: '投書は「最近は土曜の朝、昔からの友人と何人かでピクニックテーブルによく集まっている」と書いている。',
        w: ['菜園の区画で野菜を育てているとは書いていない。', '犬の散歩には触れていない。', '少年スポーツチームの指導には触れていない。', '正解。'] },
      { tag: 'クロス', qid: 'v2q183p', s: 'Which phase of the renovation will most likely be underway when Mr. Featherstone plans to hold his event at Lindley Green?',
        c: ['The playground reconstruction', 'The pathway resurfacing', 'The garden relocation', 'The parking area expansion'],
        a: 2,
        e: '投書は「8月中に屋外の朗読会を開きたい」と書いている。記事の表では、8月に予定されているのは菜園の移設。',
        w: ['遊具の再建は6月に予定されており、8月ではない。', '小道の舗装し直しは7月に予定されており、8月ではない。', '正解。', '駐車場の拡張は9月に予定されており、8月ではない。'] },
      { tag: 'クロス', qid: 'v2q184p', s: 'How will Mr. Featherstone most likely submit his comments on the renovation plan?',
        c: ['By leaving a note at the parks office', 'By mailing a written comment card', 'By speaking at the public forum', 'By completing the online feedback form'],
        a: 0,
        e: '投書は「6月最後の2週間になるまで考えを整理できそうにない」と書いている。記事の表では、その時期（6月16〜30日）に開いているのは公園課の意見箱だけで、オンラインの様式（4月）・公開フォーラム（5月15日のみ）・郵送のコメントカード（6月1〜15日）はすでに締め切っている。',
        w: ['正解。', '郵送のコメントカードは6月1〜15日のみの受付で、6月最後の2週間には間に合わない。', '公開フォーラムは5月15日の一晩限りで、6月下旬にはすでに終わっている。', 'オンラインの様式は4月1〜30日のみの受付で、6月下旬にはすでに締め切っている。'] },
      { tag: '推測', qid: 'v2q185p', t: ['p7inf'], s: 'What can be inferred about Mr. Featherstone?',
        c: ['He has lived near Lindley Green for many years.', 'He recently moved to a house near the park.', 'He runs a business that faces the park.', 'He sent the newspaper a letter last year.'],
        a: 1,
        e: '投書は「去年の春、古いアパートから公園から2本先の通りの家に移った。この緑地があることが引っ越し先を選んだ大きな理由の一つだった」と書いている。',
        w: ['「去年の春に越した」という記述と矛盾する。', '正解。', '公園に面した店を営んでいるとは書いていない。', '過去に投書したことには触れていない。'] },
    ],
  }),

  /* ══ 186–190 トリプルパッセージ ══════════════════════
     陶芸教室のウェブページ＋受講希望者のメール＋教室からの返信。
     Q186・Q187・Q188 の3問がクロス。文書を1つずつ隠すと：
       - ウェブページだけでは、Lonscombe さんがどの曜日・どの講師を希望するか、
         何回コースを希望するか、住んでいる町・作品の大きさ・受け取りに来られる
         時期が分からず、どのクロス設問も決まらない。
       - メールだけでは、4講座と曜日・講師の対応、回数ごとの総額、受け取り4方法
         それぞれの条件（期間・町・サイズ上限・配達先の町）が分からず、同様に
         決まらない。
       - Q189 はウェブページのみで決まる単一文書の詳細設問。Q190 は返信のみの
         推測設問。
     Q186: 月曜・Fleetwood 先生希望（メール2文）＝Wheel Throwing（ウェブページ）。
     Q187: 「14週間分の授業」（メール）＝14回コースの総額 $350（ウェブページ）。
     Q188: Foxwold 在住・作品はすべて30cm近く・7月4日〜8月2日は留守（メール3文）
     ＝配達便（ウェブページ。受付は7月13〜24日限定で留守期間に完全に含まれる、
     郵送上限25cmを全作品が超過、市場は Lynthorpe 在住者限定で該当せず、
     残るは Foxwold・Fallowmere への配達便のみ。2026-09-29 の監査で、相対期間
     〈完成から30日／1か月〉では毎週の通学と両立して閉じないことが判明し、
     暦日の期間・日付での不在・市場の居住条件に差し替えた）。 */
  mp({
    n: [186, 187, 188, 189, 190],
    lv: 4,
    docs: [
      {
        label: 'Web page', meta: 'Document 1',
        title: 'Firthwell Pottery Studio — Class Series',
        body: [
          'Firthwell Pottery Studio offers four class series this term, which runs from mid-March to mid-June, and every one of them welcomes complete beginners as well as returning students.',
          { t: 'table', head: ['Class series', 'Meets', 'Instructor'],
            rows: [
              ['Wheel Throwing', 'Monday evenings', 'Ms. Fleetwood'],
              ['Hand Building', 'Thursday evenings', 'Ms. Fleetwood'],
              ['Surface Decoration', 'Monday evenings', 'Mr. Furnival'],
              ['Sculptural Forms', 'Thursday evenings', 'Mr. Furnival'],
            ] },
          'Fees depend on how many sessions you sign up for, and cover materials and firing; there is no separate charge for clay or kiln use.',
          { t: 'table', head: ['Sessions', 'Total fee'],
            rows: [
              ['2', '$140'],
              ['7', '$210'],
              ['10', '$280'],
              ['14', '$350'],
            ] },
          'Finished pieces can be collected in one of the following ways:',
          { t: 'list', items: [
            'Front desk: pieces from every class series can be collected from July 13 to July 24.',
            'Market stall: students who live in Lynthorpe can collect their pieces from our stall at the Saturday market there.',
            'Mail: pieces up to twenty-five centimeters in any dimension can be sent to a home address.',
            'Delivery route: a van makes a monthly round to Foxwold and Fallowmere, dropping off finished pieces for students who live in those towns.',
          ] },
          'The studio itself is upstairs; visitors reach it through the same street-level entrance used by the café on the ground floor.',
          'To enroll, e-mail us with your preferred class series and schedule.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: enroll@firthwellpottery.com\nFrom: m.lonscombe@fastmail.com\nDate: March 3\nSubject: Enrollment inquiry',
        body: [
          'Dear Firthwell Pottery Studio,',
          "I'd like to enroll in one of your class series for the coming term.",
          'The only evening I can commit to each week is Monday.',
          "I'd like to be placed with Ms. Fleetwood, if a spot in her section is available.",
          "I'm hoping to sign up for fourteen weeks of classes.",
          "I live in Foxwold, about half an hour's drive from the studio.",
          "I'm planning to spend the term on a few large serving platters, and I'd guess each will end up close to thirty centimeters across.",
          "Just so you know, once the term has ended I'll be away visiting family from July 4 to August 2.",
          'Could you tell me what I need to do to complete my enrollment?',
          'Best wishes,\nMarguerite Lonscombe',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: m.lonscombe@fastmail.com\nFrom: a.fairclough@firthwellpottery.com\nDate: March 4\nSubject: Re: Enrollment inquiry',
        body: [
          'Dear Ms. Lonscombe,',
          "Thank you for your message, and it's good to have you back with us — I believe you took one of our courses a while back.",
          "We can certainly try to accommodate your scheduling preferences, and I've made a note of the details you've given us.",
          "For the pickup arrangements, our office will confirm the best option once your enrollment is finalized, but rest assured we'll find one that works for you.",
          'If you have any other questions before then, just let me know.',
          'Best regards,\nAmbrose Fairclough\nFirthwell Pottery Studio',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v2q186p', s: 'Which class series will Ms. Lonscombe most likely enroll in?',
        c: ['Wheel Throwing', 'Hand Building', 'Surface Decoration', 'Sculptural Forms'],
        a: 0,
        e: 'ウェブページの表では、Wheel Throwing は Monday evenings に Ms. Fleetwood が担当。メールは「毎週コミットできるのは月曜の夜だけ」と「Fleetwood 先生のクラスに入りたい」の2文を書いており、この両方を満たすのは Wheel Throwing だけ。',
        w: ['正解。',
            'Hand Building は Ms. Fleetwood の担当だが木曜の夜で、月曜という希望に合わない。',
            'Surface Decoration は月曜の夜だが担当は Mr. Furnival で、Fleetwood 先生という希望に合わない。',
            'Sculptural Forms は Mr. Furnival の担当で木曜の夜であり、どちらの希望にも合わない。'] },
      { tag: 'クロス', qid: 'v2q187p', s: 'How much will Ms. Lonscombe most likely pay in total for the course?',
        c: ['$140', '$210', '$280', '$350'],
        a: 3,
        e: 'ウェブページの表では、14回コースの総額は $350。メールは「14週間分の授業に申し込みたい」と書いており、週1回のクラスなので14回に当たる。',
        w: ['$140 は2回コースの総額で、14週間という希望に合わない。', '$210 は7回コースの総額で、14週間という希望に合わない。', '$280 は10回コースの総額で、14週間という希望に合わない。', '正解。'] },
      { tag: 'クロス', qid: 'v2q188p', s: 'How will Ms. Lonscombe most likely receive her finished pieces?',
        c: ["She will collect them from the studio's front desk.", 'She will pick them up at the market stall.', 'She will have them mailed to her home address.', "She will get them on the studio's delivery route."],
        a: 3,
        e: 'ウェブページは、配達便が Foxwold と Fallowmere に月1回回ると案内している。メールで Lonscombe さんは Foxwold 在住だと書いており、この町の一つに当たる。他の3方法は、それぞれ独立の条件でメールの内容と両立しない。',
        w: ['ウェブページの受付での受け取りは7月13日から24日に限られるが、メールは「学期が終わったら7月4日から8月2日まで家族を訪ねて留守にする」と書いており、この期間が受付期間をすべて含むため受け取りに来られない。',
            '市場での受け取りは Lynthorpe 在住者に限られるが、メールは Foxwold 在住だと書いており、その町ではない。',
            '郵送は25センチまでの作品に限られるが、メールは「今学期は数点の大きめの大皿に取り組む予定で、どれも30センチ近くになりそうだ」と書いており、作品はすべて上限を超える。',
            '正解。'] },
      { tag: '詳細', qid: 'v2q189p', s: "What does the studio's website say about its building?",
        c: ['It once housed a bakery.', 'It shares an entrance with a café.', 'It has parking spaces behind it.', 'It sits above a hardware store.'],
        a: 1,
        e: 'ウェブページは「教室は2階にあり、1階の同じ入口をカフェと共有している」と述べている。',
        w: ['かつてパン屋だったとは述べていない。', '正解。', '裏手の駐車スペースには触れていない。', '金物店の上にあるとは述べていない。'] },
      { tag: '推測', qid: 'v2q190p', t: ['p7inf'], s: 'What can be inferred about Ms. Lonscombe?',
        c: ['She has taken pottery classes at Firthwell before.', 'She plans to give her pieces as gifts.', 'She learned about the studio from a colleague.', 'She owns a pottery wheel at home.'],
        a: 0,
        e: '返信は「またお越しいただけて嬉しいです。以前も当教室のコースを受けていただいたかと思います」と書いている。',
        w: ['正解。', '作品を贈り物にする予定には触れていない。', '同僚からの紹介には触れていない。', '自宅にろくろを持っているとは述べていない。'] },
    ],
  }),

  /* ══ 191–195 トリプルパッセージ ══════════════════════
     スポーツクラブの年次更新案内＋会員のメール＋クラブ担当者からの返信。
     Q191・Q192・Q193 の3問がクロス。文書を1つずつ隠すと：
       - 案内だけでは、Ferriby さんがどの施設をよく使うか・更新に加える家族の
         人数と年齢・ゲストがどんな種類の来館をするのかが分からず、どのクロス
         設問も決まらない。
       - メールだけでは、4種別と施設の対応、家族追加の基本額・例外条件、
         ゲストの来館の種類ごとの承認者が分からず、同様に決まらない。
       - Q194 は案内のみで決まる単一文書の詳細設問。Q195 は返信のみの推測設問。
     Q191: 「川沿いの屋内施設をよく使う」（メール）＝Finch 会員（案内）。
     Q192: 妻＋子供2人（9歳・13歳。メール）＝基本額 $180 ＋ $50×2（9歳は12歳
     未満無料の例外に当たるため、有償の加算は2人分）＝$280（案内）。
     Q193: 「来月のクラブハウスの夜の集いにゲストで来る」（メール）＝
     クラブハウスの催しの承認者 Ms. Lisle（案内）。 */
  mp({
    n: [191, 192, 193, 194, 195],
    lv: 4,
    docs: [
      {
        label: 'Notice', meta: 'Document 1',
        title: 'Annual Membership Renewal',
        body: [
          "It's time to renew your membership with Lethbridge Community Sports Club for the coming year. Please review the categories below and let us know your choice.",
          { t: 'table', head: ['Membership', 'Facilities', 'Setting'],
            rows: [
              ['Finch', 'Riverside', 'Indoor'],
              ['Linnet', 'Town', 'Outdoor'],
              ['Lapwing', 'Riverside', 'Outdoor'],
              ['Fulmar', 'Town', 'Indoor'],
            ] },
          'The base fee is $180 a year for all four membership types. Each additional family member sharing the membership is charged $50 a year, except that children under the age of twelve are added at no extra charge.',
          'Guests are welcome at the club, subject to approval from the relevant staff member beforehand:',
          { t: 'list', items: [
            'To play a match with a member: contact Ms. Fordyce.',
            'To join a supervised class: contact Ms. Lanyon.',
            'To attend a clubhouse event: contact Ms. Lisle.',
            'To look around while considering membership: contact Ms. Faulds.',
          ] },
          "Renewal fees can be paid securely through the club's mobile app.",
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: renewals@lethbridgesports.org\nFrom: grant.ferriby@gmail.com\nDate: February 6\nSubject: Membership renewal',
        body: [
          'Dear Lethbridge Community Sports Club,',
          "I'd like to renew my membership for the coming year.",
          'The facilities I use most often are the indoor ones by the river.',
          "I'll be adding my wife and our two children, aged nine and thirteen, to the renewal.",
          "My brother-in-law will be joining me as a guest for the club's evening social next month, and I understand he'll need approval beforehand.",
          'Could you let me know the total amount due and how to proceed?',
          'Best regards,\nGrant Ferriby',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: grant.ferriby@gmail.com\nFrom: h.lathbury@lethbridgesports.org\nDate: February 7\nSubject: Re: Membership renewal',
        body: [
          'Dear Mr. Ferriby,',
          "Thank you for letting us know you'll be renewing.",
          "We've noted the details you've provided, including the family members joining you and your guest's visit next month; the right approval will be arranged on our end.",
          "It's a pleasure to have you with us for another year — I remember you telling us, when you first joined, that you'd come over from the Lambourne Athletic Club just down the road.",
          "We'll be in touch shortly to confirm everything.",
          'Best wishes,\nHester Lathbury\nMembership Team, Lethbridge Community Sports Club',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v2q191p', s: 'Which membership will Mr. Ferriby most likely choose for the coming year?',
        c: ['The Finch membership', 'The Linnet membership', 'The Lapwing membership', 'The Fulmar membership'],
        a: 0,
        e: '案内の表では、Finch は川沿い・屋内の施設。メールは「よく使う施設は川沿いの屋内のもの」と書いている。',
        w: ['正解。', 'Linnet は町中・屋外の施設で、どちらの条件にも合わない。', 'Lapwing は川沿い・屋外の施設で、川沿いには合うが屋内という条件に合わない。', 'Fulmar は町中・屋内の施設で、屋内には合うが川沿いという条件に合わない。'] },
      { tag: 'クロス', qid: 'v2q192p', s: 'How much will Mr. Ferriby most likely pay for his membership renewal?',
        c: ['$180', '$230', '$280', '$330'],
        a: 2,
        e: '案内は「基本額は年 $180、同居家族の追加は1人 $50、ただし12歳未満の子供は無料」としている。メールは妻と9歳・13歳の子供2人を加えると書いており、9歳は12歳未満の例外に当たるため無料、有償の追加は妻と13歳の子供の2人分。$180+$50×2=$280。',
        w: ['基本額のみで、家族の追加を一切していない場合の金額。', '13歳の子にも12歳未満の例外を誤って当てはめ、妻の分だけを有償の追加として数えた場合の金額（$180+$50）。', '正解。', '9歳の子供にも12歳未満の例外を適用せず、3人全員を有償の追加として数えた場合の金額（$180+$50×3）。'] },
      { tag: 'クロス', qid: 'v2q193p', s: "Who will most likely approve Mr. Ferriby's guest request?",
        c: ['Ms. Fordyce', 'Ms. Lanyon', 'Ms. Lisle', 'Ms. Faulds'],
        a: 2,
        e: '案内は「クラブハウスの催しに来るゲストは Ms. Lisle に連絡」としている。メールは、義理の兄弟が来月のクラブの夜の集い（クラブハウスの催し）にゲストとして来ると書いている。',
        w: ['Ms. Fordyce が担当するのは会員との試合をするゲストで、クラブハウスの催しではない。', 'Ms. Lanyon が担当するのは指導つきの教室に加わるゲストで、クラブハウスの催しではない。', '正解。', 'Ms. Faulds が担当するのは入会を考えて見学に来るゲストで、クラブハウスの催しではない。'] },
      { tag: '詳細', qid: 'v2q194p', s: 'What does the notice say about paying the renewal fee?',
        c: ['Payment can be made at the front desk.', 'Payment can be made by bank transfer.', "Payment can be made through the club's app.", 'Payment can be made with a mailed check.'],
        a: 2,
        e: '案内は「更新料はクラブの携帯アプリから安全に支払える」と述べている。',
        w: ['受付での支払いには触れていない。', '銀行振込には触れていない。', '正解。', '小切手の郵送には触れていない。'] },
      { tag: '推測', qid: 'v2q195p', t: ['p7inf'], s: 'What can be inferred about Mr. Ferriby?',
        c: ["He sits on one of the club's committees.", 'He was away when the notice went out.', 'He previously belonged to a different sports club nearby.', 'He works for a company near the club.'],
        a: 2,
        e: '返信は「入会されたとき、近くの Lambourne Athletic Club から移ってきたとおっしゃっていたのを覚えています」と書いている。',
        w: ['委員会に所属しているとは述べていない。', '案内が出たときに不在だったとは述べていない。', '正解。', 'クラブの近くの会社に勤めているとは述べていない。'] },
    ],
  }),

  /* ══ 196–200 トリプルパッセージ ══════════════════════
     観光バスツアー会社の広告＋予約希望者のメール＋同行者の追加のメール。
     Q196・Q197・Q198 の3問がクロス。文書を1つずつ隠すと：
       - 広告だけでは、Lumsden さんの一行がどの曜日・時間帯を望むか、メールの
         日付、一行がどう現地に到着するかが分からず、どのクロス設問も決まらない。
       - Lumsden さんのメールだけでは、4ツアーの曜日・時刻の対応、デポジットの
         期限の起点からの日数、乗車地と最寄り施設の対応が分からず、同様に
         決まらない。
       - Q199 は広告のみで決まる単一文書の詳細設問。Q200 は Larchmont さんの
         メールのみの推測設問。
     Q196: 「日曜しか空いていない」＋「午前に出たい」（メール2文）＝
     Mountain Vista（広告）。
     Q197: メール日付8月4日＋広告「予約から1週間以内にデポジット」＝8月11日。
     誤答は A=起点の8月4日そのもの／C=取消の2週間を使った8月18日（Larchmont
     さんのメールの日付8月18日とも一致）／D=起点を Larchmont さんのメールの
     日付〈8月18日〉と取り違えてそこから1週間後とした8月25日（2026-09-29の
     監査で、文書3の日付が旧稿では正解と同じ8月11日になっており「文書3の日付
     をそのまま答える」素朴な誤りが正解に着いていたため、8月18日に変更した）。
     Q198: 「一行全員が早い船で渡ってくる」（Larchmont さんのメール）＝船が
     着く場所＝フェリー乗り場に近い Fenby Avenue（広告）。 */
  mp({
    n: [196, 197, 198, 199, 200],
    lv: 3,
    docs: [
      {
        label: 'Advertisement', meta: 'Document 1',
        title: 'Fetterlane Coach Tours',
        body: [
          'Fetterlane Coach Tours runs four different day trips each weekend throughout the season:',
          { t: 'table', head: ['Tour', 'Departs', 'Time'],
            rows: [
              ['Garden Estates', 'Saturday', 'Afternoon'],
              ['Mountain Vista', 'Sunday', 'Morning'],
              ['Heritage Trail', 'Saturday', 'Morning'],
              ['Coastal Discovery', 'Sunday', 'Afternoon'],
            ] },
          "On every tour, two guides travel with the group and hand each passenger a printed booklet on the day's stops to keep.",
          'A deposit of 20 percent of the tour price is due within one week of booking. Bookings may be canceled free of charge within two weeks of booking; after that point, the deposit is non-refundable.',
          'Coaches depart from four points around town:',
          { t: 'table', head: ['Pickup point', 'Nearby'],
            rows: [
              ['Linacre Square', 'the train station'],
              ['Larkhill Road', 'the airport bus stop'],
              ['Lomax Street', 'the hotel district'],
              ['Fenby Avenue', 'the ferry terminal'],
            ] },
          'Full fares are the same for all four tours and all four pickup points.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: bookings@fetterlanecoachtours.com\nFrom: b.lumsden@gmail.com\nDate: August 4\nSubject: Group booking inquiry',
        body: [
          'Dear Fetterlane Coach Tours,',
          "I'd like to arrange one of your day tours for a group of eight of us later this month.",
          'Sunday is the only day everyone in our group is free this month.',
          "We'd rather set off in the morning, since a couple of us have evening commitments that day.",
          "We're all looking forward to getting away for the day.",
          'Could you let me know how to confirm the booking and what happens next? Please let us know if you need any other information from us.',
          'Best regards,\nBarnaby Lumsden',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: bookings@fetterlanecoachtours.com\nFrom: p.larchmont@fastmail.com\nDate: August 18\nSubject: Group booking — additional details',
        body: [
          'Dear Fetterlane Coach Tours,',
          "I'm part of the group Barnaby Lumsden contacted you about booking for later this month.",
          "We'll all be coming over on the early boat that morning, so it would make sense for us to meet the coach somewhere near where it docks.",
          "Barnaby has asked me to pass these details along on his behalf, as we've shared an office for more than ten years.",
          'Please let me know if you need anything further from our side.',
          'Best wishes,\nPhilippa Larchmont',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v2q196p', s: "Which tour package will Mr. Lumsden's group most likely book?",
        c: ['The Heritage Trail tour', 'The Coastal Discovery tour', 'The Mountain Vista tour', 'The Garden Estates tour'],
        a: 2,
        e: '広告の表では、Mountain Vista は日曜の午前発。Lumsden さんのメールは「日曜しか空いていない」（曜日）と「午前に出たい」（時間帯）の2文を書いており、この両方を満たすのは Mountain Vista だけ。',
        w: ['Heritage Trail は土曜の午前発で、日曜という曜日の条件に合わない。',
            'Coastal Discovery は日曜の午後発で、曜日には合うが午前という時間帯の条件に合わない。',
            '正解。',
            'Garden Estates は土曜の午後発で、どちらの条件にも合わない。'] },
      { tag: 'クロス', qid: 'v2q197p', s: "If Fetterlane Coach Tours accepts Mr. Lumsden's booking on the date of his e-mail, by what date must the deposit be paid?",
        c: ['August 4', 'August 11', 'August 18', 'August 25'],
        a: 1,
        e: '広告は「デポジットは予約から1週間以内」としている。Lumsden さんのメールの日付は8月4日なので、その1週間後の8月11日が期限になる。',
        w: ['予約日である8月4日そのものの日付。',
            '正解。',
            '広告が定める「取消は2週間以内」という別の期間を使って8月4日から2週間後とした日付（Larchmont さんのメールの日付8月18日とも一致する）。',
            '起点を Larchmont さんのメールの日付（8月18日）と取り違え、そこから1週間後とした日付。'] },
      { tag: 'クロス', qid: 'v2q198p', s: "Where will Mr. Lumsden's group most likely be picked up?",
        c: ['The Linacre Square stop', 'The Larkhill Road stop', 'The Lomax Street stop', 'The Fenby Avenue stop'],
        a: 3,
        e: 'Larchmont さんのメールは「一行全員が当日の朝、早い船で渡ってくる」と書いている。広告の表では、船が着く場所＝フェリー乗り場に近いのは Fenby Avenue。',
        w: ['Linacre Square の近くは駅で、フェリー乗り場ではない。', 'Larkhill Road の近くは空港バス乗り場で、フェリー乗り場ではない。', 'Lomax Street の近くはホテル街で、フェリー乗り場ではない。', '正解。'] },
      { tag: '詳細', qid: 'v2q199p', s: 'What does the advertisement mention about the tour guides?',
        c: ['They hold certificates in local history.', 'They speak more than one language fluently.', 'They have led tours for several years.', 'They provide printed guidebooks to each passenger.'],
        a: 3,
        e: '広告は「どのツアーも2人のガイドが同行し、乗客一人ひとりにその日訪れる場所を記した印刷物を渡して持ち帰ってもらう」と述べている。',
        w: ['地域史の資格には触れていない。', '複数言語を話せるとは述べていない。', '長年ツアーを率いてきたとは述べていない。', '正解。'] },
      { tag: '推測', qid: 'v2q200p', t: ['p7inf'], s: 'What can be inferred about Ms. Larchmont?',
        c: ['She has worked alongside Mr. Lumsden for years.', 'She recommended Fetterlane Coach Tours to the group.', 'She lives in a different city from Mr. Lumsden.', 'She is celebrating a birthday on the tour.'],
        a: 0,
        e: 'Larchmont さんのメールは「Barnaby から頼まれて代わりに連絡している。10年以上同じオフィスで働いている」と書いている。',
        w: ['正解。', 'この会社を勧めたとは述べていない。', '違う都市に住んでいるとは述べていない。', '誕生日を祝うとは述べていない。'] },
    ],
  }),
];
