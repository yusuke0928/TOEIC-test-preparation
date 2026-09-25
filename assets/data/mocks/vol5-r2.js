/* =============================================================
   予想模試 Vol.5 — Part 7 単一文書 前半（No.147–164）
   総仕上げ回。
   ============================================================= */

const sp = (o) => ({
  id: `v5-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v5q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
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
      title: 'Coldbrook Leisure Centre — Sauna Temporarily Closed',
      body: [
        'The sauna and steam room will be closed from Monday 7 to Friday 11 July for annual descaling and a full safety inspection of the heating elements.',
        'The main pool and both exercise studios will remain open as normal throughout this period. Members who hold a sauna-inclusive membership will have five days automatically added to the end of their current membership term; no request is necessary.',
        'Day-pass holders who specifically purchased sauna access for a single visit during the closure will be offered a full refund of the sauna portion of their pass at reception.',
        'We expect to reopen on Saturday 12 July, subject to the inspection results.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why will the sauna be closed?',
        c: ['For a change of ownership announced earlier in the year', 'For staff training on the new equipment',
            'For a renovation of the changing rooms', 'For descaling and a safety inspection'],
        a: 3,
        e: '「年次の湯垢除去と、暖房装置の全面的な安全点検のため」と明記されている。',
        w: ['所有権の変更には触れておらず、休業の理由は湯垢除去と点検のみ。', '研修の話はなく、新規設備の導入にも言及がない。', '更衣室の改装には触れていない。', '正解。'] },
      { tag: '詳細', s: 'What will happen automatically for members with sauna-inclusive membership?',
        c: ['They will receive a partial refund.', 'They will receive a free guest pass.',
            'They will move up to a higher membership tier.', 'They will have five days added to their membership.'],
        a: 3,
        e: '「サウナ付き会員は自動的に会員期間の末尾に 5 日が加算される。申請は不要」と明記。',
        w: ['返金は日ごとの利用券保有者への案内。', 'ゲスト券の話もない。', '等級変更の話はない。', '正解。'] },
    ],
  }),

  /* ── 149–150 業務連絡（メモ）─────────────────────── */
  sp({
    n: [149, 150], lv: 4,
    docs: [{
      label: 'Memo',
      head: 'TO: All production staff\nFROM: HR\nDATE: 14 January\nSUBJECT: New time-clock terminals',
      body: [
        'Starting Monday 20 January, the punch-card time clocks at both factory entrances will be replaced with fingerprint terminals.',
        'Employees do not need to register in advance; the terminal will prompt for a scan on first use and store it automatically. Anyone uncomfortable with fingerprint scanning may instead request a numeric PIN code from HR before the twentieth.',
        'For the first week only, both the new terminals and the old punch-card machines will remain active, in case of technical issues. After 27 January, the punch-card machines will be removed permanently.',
        'Employees who forget to clock in or out during the transition week should notify their supervisor the same day rather than waiting for payroll to flag the discrepancy.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What can an employee do who does not want to use fingerprint scanning?',
        c: ['Continue using the old punch-card machine indefinitely', 'Delay clocking in until the trial period ends',
            'Ask a supervisor to scan on their behalf', 'Request a PIN code from HR in advance'],
        a: 3,
        e: '「指紋認証に抵抗がある場合は、20 日より前に人事に数字の PIN コードを申請できる」とある。',
        w: ['旧式の打刻機は 1 週間限定で使用可。', '遅らせるという案内はない。', '代理での打刻には触れていない。', '正解。'] },
      { tag: '詳細', s: 'What is stated about the punch-card machines?',
        c: ['They were not in use at both factory entrances.', 'They will be moved to a different entrance and kept in service there.',
            'They will remain for one week before being removed.', 'They have already been removed from both entrances earlier this month.'],
        a: 2,
        e: '「最初の 1 週間だけ新旧併用し、1 月 27 日以降は打刻機を完全に撤去する」とある。',
        w: ['第1段落は the punch-card time clocks at both factory entrances will be replaced with fingerprint terminals と述べており、旧式の打刻機は工場の両方の入口で使われていた。両方の入口では使われていなかったとするこの記述は本文と正面から矛盾するので偽。', '両方の入口の打刻機が端末に置き換わり、27 日以降は撤去される。別の入口に移して使い続けるという記述はない。', '正解。', '撤去はまだ先の話で、このメモの時点（1 月 14 日）では旧式機はまだ稼働している。'] },
    ],
  }),

  /* ── 151–152 広告 ─────────────────────────────────── */
  sp({
    n: [151, 152], lv: 3,
    docs: [{
      label: 'Advertisement',
      title: 'Notes at Noon — Free Lunchtime Concerts at Selmoor Guildhall',
      body: [
        "Anyone who works nearby is welcome at Notes at Noon, a free concert in the Guildhall's upper hall every Wednesday from 2 April to 24 September, 12:15 to 12:55.",
        "There is no system for reserving a place; listeners are admitted in the order they arrive. Doors open at 11:55, and the hall holds about ninety people. Anyone who arrives after the music has begun, provided a seat remains, is admitted quietly and waits near the back until the music pauses; once every seat is taken, the doors close and further arrivals are turned away.",
        "The resident string quartet performs on the first Wednesday of each month; a different guest performer appears on the other Wednesdays. Guest names are posted on the noticeboard and the website one week ahead.",
      ],
    }],
    q: [
      {
        tag: '詳細', qid: 'v5q151r',
        s: "What is stated about the resident string quartet?",
        c: [
          "It performs alongside a guest performer at its concerts.",
          "It uses a smaller room than the guest performers do.",
          "It plays to audiences with no fixed seating limit.",
          "It takes the stage on one Wednesday each month.",
        ],
        a: 3,
        e: "第3段落に「the resident string quartet performs on the first Wednesday of each month」とあり、月に1回であることが分かる。",
        w: [
          "矛盾。本文は「a different guest performer appears on the other Wednesdays」と述べており、ゲストが出演するのはカルテットが演奏する第1水曜日以外の週である。出演日がこのように書き分けられており、共演するとは書かれていない。",
          "誤り。ゲストの公演も含め、シリーズ全体が「the Guildhall's upper hall」で行われると述べられており、カルテットだけが狭い部屋を使うという記載はない。",
          "矛盾。本文は「once every seat is taken, the doors close」と述べており、満席になれば入場を締め切る仕組みがある。加えて「the hall holds about ninety people」と会場自体にも約90人という定員がある。定員の上限が無いとするこの記述は本文と正面から矛盾する。",
          "正解。「the resident string quartet performs on the first Wednesday of each month」の言い換え。",
        ],
      },
      {
        tag: '推測', qid: 'v5q152r', t: ['p7inf'],
        s: "What is suggested about attending a concert in the Notes at Noon series?",
        c: [
          "The doors open at the moment the music begins.",
          "The guest performer's name is not listed on the website.",
          "The earliest arrivals are certain to get a seat.",
          "Attendance is limited to staff who work at the Guildhall.",
        ],
        a: 2,
        e: "先着順で入場する（listeners are admitted in the order they arrive）ことと、満席になるまでは入場を続ける（once every seat is taken, the doors close）ことを合わせると、最も早く到着した人は必ず着席できると分かる。",
        w: [
          "矛盾。本文は「Doors open at 11:55」と述べ、演奏は「12:15 to 12:55」に行われるとある。扉が開くのは音楽が始まる約20分前であり、音楽が始まった瞬間に扉が開くとするこの記述は本文と正面から矛盾する。",
          "誤り。ゲスト演奏者の名前は「posted on the noticeboard and the website one week ahead」とあり、ウェブサイトにも掲載される。",
          "正解。先着順での入場（admitted in the order they arrive）と、満席になれば以降の入場を断る仕組み（once every seat is taken, the doors close and further arrivals are turned away）を合わせると、最も早く到着した人は必ず着席できると分かる。",
          "誤り。本文は「Anyone who works nearby is welcome」と述べており、近隣で働く人なら誰でも参加できる。Guildhall の職員に限られてはいない。",
        ],
      },
    ],
  }),

  /* ── 153–155 メール ───────────────────────────────── */
  sp({
    n: [153, 154, 155], lv: 4,
    docs: [{
      label: 'E-mail',
      head: "To: Yasmin Lowry <yasmin.lowry@fastmail.com>\nFrom: Lucas Ferran <l.ferran@cobbleford.gov.uk>\nDate: 15 May\nSubject: Renewal of Pitch 14 — Cobbleford Market",
      body: [
        "Dear Ms. Lowry,",
        "Your permit for Pitch 14 on Saltmarsh Row, where you are currently licensed to trade Thursday to Saturday, is due to expire on 30 June. To keep trading beyond that date, please submit a renewal application to this office by 9 June.",
        "Along with the application form, we will need a copy of your current food hygiene certificate showing a rating of 4 or above, proof of public liability insurance with cover of at least £2 million, and a signed declaration that your stall complies with the market's fire safety guidelines. Because your stall's griddle runs on a generator, please also include a note confirming that the generator keeps its noise under the market's 65-decibel limit; this is now checked once a year, at renewal, for every generator-powered pitch. Unlike in previous years, you do not need to send fresh photographs of your stall — the ones already on file will be used again.",
        "The standard quarterly fee for a Saltmarsh Row pitch remains £180, unchanged from last year, since only the corner pitches in Market Square have moved to the higher rate. Payment may be made by bank transfer or in person at the council office.",
        "One further note: the market committee has approved Sunday trading in Market Square for July and August only, in response to extra footfall expected from the summer fair.",
        "If you have any questions about the renewal, please telephone this office on 01632 960 552.",
        "Regards,\nLucas Ferran\nMarkets & Permits Officer\nCobbleford City Council",
      ],
    }],
    q: [
      {
        tag: '詳細', qid: 'v5q153r',
        s: "According to the e-mail, what must Ms. Lowry provide because her stall uses a generator?",
        c: [
          "A receipt showing when the generator was purchased.",
          "A note from the market committee exempting her generator.",
          "A record that the noise is checked every six months.",
          "A statement that the generator's noise is within the limit.",
        ],
        a: 3,
        e: "第2段落に「Because your stall's griddle runs on a generator, please also include a note confirming that the generator keeps its noise under the market's 65-decibel limit」とある。",
        w: [
          "誤り。発電機の購入時期についての記載は本文になく、求められているのは騒音が市場の上限(65-decibel limit)を超えないことの確認である。",
          "誤り。本文は「this is now checked once a year, at renewal, for every generator-powered pitch」と述べており、発電機を使うすべての区画が対象で、免除される区画があるという記載はない。",
          "誤り。本文は「checked once a year, at renewal」と述べており、半年ごとではなく年1回である。",
          "正解。「please also include a note confirming that the generator keeps its noise under the market's 65-decibel limit」の言い換え。",
        ],
      },
      {
        tag: 'NOT', qid: 'v5q154r', t: ['p7not'],
        s: "According to the e-mail, what is NOT required for the renewal of Ms. Lowry's permit?",
        c: [
          "A copy of a current food hygiene certificate.",
          "A declaration that the stall meets fire safety guidelines.",
          "A set of recent photographs of the stall.",
          "A renewal application by 9 June.",
        ],
        a: 2,
        e: "第2段落の最後に「Unlike in previous years, you do not need to send fresh photographs of your stall」とあり、写真だけが不要とされている。",
        w: [
          "誤り。「a copy of your current food hygiene certificate showing a rating of 4 or above」と明記されている。",
          "誤り。「a signed declaration that your stall complies with the market's fire safety guidelines」と明記されている。",
          "正解。「you do not need to send fresh photographs of your stall」と明記されており、写真は不要。",
          "誤り。「please submit a renewal application to this office by 9 June」と明記されており、更新の申請書は必要。",
        ],
      },
      {
        tag: '推測', qid: 'v5q155r', t: ['p7inf'],
        s: "What is suggested about Ms. Lowry's pitch this summer?",
        c: [
          "The pitch will move to Market Square.",
          "The quarterly fee will rise to match Market Square's rate.",
          "The pitch's trading days will stay the same.",
          "Her permit will continue without a renewal application.",
        ],
        a: 2,
        e: "「you are currently licensed to trade Thursday to Saturday」と、日曜営業の拡大がMarket Square限定であることを合わせると、Saltmarsh Rowにある彼女の区画の営業日は変わらないと分かる。",
        w: [
          "誤り。区画の移転については本文に記載がない。",
          "矛盾。本文は「The standard quarterly fee for a Saltmarsh Row pitch remains £180, unchanged from last year, since only the corner pitches in Market Square have moved to the higher rate」と述べており、値上げの対象はMarket Squareの角の区画に限られ、Saltmarsh Rowの彼女の区画の料金は変わらない。Market Squareの料金に合わせて値上がりするとするこの記述は本文と正面から矛盾する。",
          "正解。日曜営業の拡大はMarket Square限定であり、Saltmarsh Rowの彼女の区画は対象外なので、営業日はThursday to Saturdayのまま変わらない。",
          "矛盾。本文は「To keep trading beyond that date, please submit a renewal application to this office by 9 June」と述べており、6月30日を過ぎて営業を続けるには更新申請の提出が必要である。申請なしで許可が継続するとするこの記述は本文と正面から矛盾する。",
        ],
      },
    ],
  }),

  /* ── 156–158 記事 ─────────────────────────────────── */
  sp({
    n: [156, 157, 158], lv: 4,
    docs: [{
      label: 'Article',
      title: 'Traces Beneath Southmere Rise',
      head: 'By Selina Yorke',
      body: [
        "Work on the access road for the Southmere Rise housing development was delayed three weeks this spring after archaeologists found the remains of a Roman-period ditch beneath the route the road was to follow. The find had not been expected: an earlier desk-based assessment had suggested only a low chance of significant remains.",
        "Under the terms of its planning permission, Larkbridge Developments had to fund an archaeological evaluation ahead of construction. A team from Corrance Heritage dug eleven trial trenches across the site in February, and it was in the ninth trench, near the site's eastern boundary, that the ditch came to light, along with pottery and animal bone.",
        "Rather than halt the project, Larkbridge Developments and Corrance Heritage agreed to redraw the access road so it curved around the ditch, leaving the remains undisturbed beneath a strip that will become a landscaped verge. Foundations for the houses, which lie outside the affected area, continued to be dug while the road design was revised.",
        "'Moving a road is far simpler than moving a housing block,' said site archaeologist Isolde Falkner. 'Because the developer brought us in before the design was fixed, we had room to work around what we found.' At a residents' meeting in March, a company spokesperson fielded questions about the delay and confirmed that it had affected the road, not the houses. Larkbridge Developments expects the estate's first residents to move in by next spring, only a few weeks behind schedule.",
      ],
    }],
    q: [
      {
        tag: '詳細', qid: 'v5q156r',
        s: "According to the article, where was the ditch discovered?",
        c: [
          "In a trench at the centre of the site.",
          "In the first trench that the team dug.",
          "In a trench dug after building work had begun.",
          "In a trench on the site's eastern side.",
        ],
        a: 3,
        e: "第2段落に「it was in the ninth trench, near the site's eastern boundary, that the ditch came to light」とある。",
        w: [
          "矛盾。本文は「it was in the ninth trench, near the site's eastern boundary」と述べており、発見されたのは敷地の東側の境界付近の試掘坑である。敷地の中央だとするこの記述は本文と正面から矛盾する。",
          "誤り。発見されたのは「the ninth trench」であり、最初の試掘坑ではない。",
          "誤り。試掘は「ahead of construction」に行われた評価調査であり、着工後ではない。",
          "正解。「in the ninth trench, near the site's eastern boundary」の言い換え。",
        ],
      },
      {
        tag: '同義語', qid: 'v5q157r', t: ['p7syn'],
        s: 'In paragraph 4, the word "fielded" is closest in meaning to',
        c: ["addressed", "caught", "assembled", "prepared"],
        a: 0,
        e: "「a company spokesperson fielded questions about the delay」の fielded は「質問に応答した」という語義（LDOCE: to answer questions, telephone calls）で使われており、この語義では addressed が最も近い。",
        w: [
          "正解。fielded はここでは「質問に応答する」の語義で使われており、addressed に置き換えても同じ文意になる。",
          "誤り。caught は field の「打球を捕球する」という語義に当たるが、この文の目的語は questions で、続く and confirmed that … という応答の記述とも合わない。捕球の語義ではこの文を読めない。",
          "誤り。assembled は field の「(チームや候補者などを)編成して送り出す」という語義に当たるが、この文の questions は住民説明会で住民側から出たものであり、spokesperson がそれを編成して送り出す対象ではない。続く「and confirmed that …」という応答の記述とも合わせると、この語義では読めない。",
          "誤り。prepared は field のどの語義にも当たらない。この文の主語は住民説明会で質問を受けた company spokesperson で、続く and confirmed という応答の記述と合わせると、質問に対応した側であって、あらかじめ質問を用意する側ではない。",
        ],
      },
      {
        tag: '推測', qid: 'v5q158r', t: ['p7inf'],
        s: "What is suggested about the construction of the houses at Southmere Rise?",
        c: [
          "It was not preceded by any archaeological evaluation.",
          "It was relocated to a different part of the site.",
          "It proceeded at a steady pace despite the discovery.",
          "It included plans for houses directly above the ditch.",
        ],
        a: 2,
        e: "「Foundations for the houses, which lie outside the affected area, continued to be dug while the road design was revised」と、住民説明会で「confirmed that it had affected the road, not the houses」と明言されたことを合わせると、住宅の建設自体は大きな中断なく進んだと分かる。",
        w: [
          "矛盾。本文は「Larkbridge Developments had to fund an archaeological evaluation ahead of construction」と述べており、着工前に考古学的評価調査が行われている。調査が先行していなかったとするこの記述は本文と正面から矛盾する。",
          "矛盾。本文は「Moving a road is far simpler than moving a housing block」と述べており、移設されたのは住宅ではなく道路のルートである。住宅の基礎も「Foundations for the houses, which lie outside the affected area, continued to be dug」と、影響区域の外で工事が続けられたとあり、住宅そのものが敷地内で移設されたとするこの記述は本文と正面から矛盾する。",
          "正解。住宅の基礎工事は影響区域の外で続けられ、住民説明会でも「confirmed that it had affected the road, not the houses」と明言されていることから、住宅の建設自体は大きな中断なく進んだと分かる。",
          "矛盾。本文は、溝が道路の予定ルートの下（beneath the route the road was to follow）にあったと述べ、住宅は「lie outside the affected area」と影響区域の外にある。住宅の建設計画が溝の真上にあったとするこの記述は本文と正面から矛盾する。",
        ],
      },
    ],
  }),

  /* ── 159–160 フォーム ─────────────────────────────── */
  sp({
    n: [159, 160], lv: 4,
    docs: [{
      label: 'Form',
      title: 'Fernlea Community Garden — Plot Transfer Request',
      body: [
        { t: 'kv', pairs: [
          ['Current plot holder', 'R. Whitfield (plot 22)'],
          ['Requested by', 'R. Whitfield'],
          ['Date', '3 March'],
          ['Plots currently held', '1 of a maximum of 2'],
        ] },
        { t: 'table',
          head: ['Name', 'Relationship to holder', 'Reason for transfer'],
          rows: [
            ['D. Whitfield', 'Spouse', "Continuing cultivation after holder's relocation"],
          ] },
        'Site use only: transfers to a family member are approved automatically provided the new holder has attended at least one committee meeting in the past year. Transfers without this attendance will be provisionally approved for one growing season only, pending attendance at the next scheduled meeting.',
        'Transfer requests are processed on the first Monday of each month and take effect from the following weekend.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What condition applies to an automatic transfer?',
        c: ['The new holder must have attended a committee meeting in the past year.', 'The new holder must already hold a plot elsewhere.',
            'The new holder must pay an additional fee.', 'The new holder must live within the local area.'],
        a: 0,
        e: '「過去 1 年以内に委員会の会合に 1 回以上出席していれば自動承認」と明記。',
        w: ['正解。', '自動承認の条件を定めた一文は "the new holder has attended at least one committee meeting in the past year" という provided 節ひとつだけを条件として挙げており、他区画の保有は条件として挙がっていない。', '追加料金の記載はない。', '居住地の条件はない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What can be inferred if the new holder has not attended a committee meeting?',
        c: ['The transfer will be approved for one season only.', 'The transfer will be rejected outright without any further review process.',
            'A late fee will be charged when the transfer is processed.', 'The current holder will lose their remaining plot within the growing season.'],
        a: 0,
        e: '「出席実績がない場合は、次回の会合に出席することを条件に 1 作期限定で暫定承認される」とある。',
        w: ['正解。', '却下ではなく、次回会合への出席を条件に 1 作期限定で暫定承認される。', 'この書式に料金の記載は一切なく、条件として挙がっているのは会合への出席実績だけ。', '現保有者は最大 2 区画のうち 1 区画のみを保有しており、「残る区画」を失うという状況は本文にない。'] },
    ],
  }),

  /* ── 161–164 記事（文挿入あり）───────────────────── */
  /* この4問は書き下ろしで stem・正解を差し替えたため、sp() ヘルパー（no から
     id を自動生成する）を使わず直接オブジェクトを書いて id を新規採番している。
     no は 161–164 のまま変えていない。 */
  {
    id: 'v5-p7-161', part: 7, kind: 'doc', topics: ['p7ins'],
    level: 5, docCount: 1,
    docs: [{
      label: 'Article',
      title: 'The Misattributed Surveyor of Grovemoor Vale',
      head: "The Cartographer's Notebook",
      body: [
        'Local record offices across the country still hold thousands of hand-drawn survey sheets from before aerial photography, when a boundary dispute could only be settled by sending a surveyor out with a chain and a plane table. Most have never been catalogued in detail, let alone shown to the public. Digitisation is usually described as a simple fix for that. — [[1]] —',
        'The Grovemoor County Archive is midway through a project to change that. The collection holds 1,300 surveyor\'s drawings from 1798 to 1841, of which 140 have so far been cleaned, flattened and photographed. — [[2]] — Cataloguers had expected the rest to be routine: photograph, transcribe the surveyor\'s name, and move on.',
        'Instead they found a problem hiding in plain sight. Sheet after sheet carries, in a cramped hand, what cataloguers had long transcribed as "T. Marchmont, surveyor." Comparing sheets under magnification showed the initial was not a T at all but a badly formed J, made with a nib that had begun to split. — [[3]] — The drawings were in fact the work of Josiah Marchmont, whose separate, well-documented commissions for a neighbouring estate had never been connected to this collection, because the initials did not match.',
        'The correction matters for more than tidiness. Once the sheets were reattributed, researchers could match unsigned fragments held elsewhere in the county to the same hand, using details such as how Marchmont lettered his compass roses. — [[4]] — The archive has now amended every entry that carried the old, mistaken initial.',
        'None of this required new equipment or funding. It required someone willing to look closely enough at one badly formed letter to doubt what earlier cataloguers had copied down without question.',
      ],
    }],
    questions: [
      { id: 'v5q161r2', no: 161, tag: '詳細', topics: ['p7detail'],
        stem: "Why was the surveyor's initial on the drawings misread for so long?",
        choices: ['A nib that had split changed the shape of the letter.', 'The ink had faded so badly that no letter was visible.', 'Different sheets showed inconsistent handwriting styles throughout the collection.', 'A later cataloguer wrote over the original signature.'],
        answer: 0,
        exp: 'ペン先が割れたことで書かれた J が T のように見えるようになり、長年 T. Marchmont という誤った名前で写し取られてきた、と読み取れる。',
        why: ['正解。段落3に「a nib that had begun to split」とあり、割れたペン先が文字の形を変えたことが誤読の原因であることが読み取れる。', '本文にインクが薄れたという記述はなく、誤読の原因はペン先の割れによる字形の変化だと説明されている。', '複数の図面で筆跡が食い違っていたという記述はない。誤読は同一の筆跡の中で1文字の形が崩れたことによる。', '本文に、後から目録作成者が署名の上に書き加えたという記述はない。誤読の原因はペン先の割れによる字形の変化だと説明されている。'] },
      { id: 'v5q162r', no: 162, tag: '詳細', topics: ['p7detail'],
        stem: 'What became possible once the sheets were correctly reattributed?',
        choices: ['The earliest sheets in the whole collection could finally be dated.', 'The original boundaries could be restored on the ground.', 'The sheets could finally be insured for public display.', 'The fragments held elsewhere could be matched to the same hand.'],
        answer: 3,
        exp: '帰属を Josiah Marchmont に正しく改めたことで、コンパスの描き方などの特徴を手がかりに、県内他所に残る未署名の断片も同じ筆跡と照合できるようになったと述べている。',
        why: ['年代を特定できるようになったという記述は本文にない。段落4で述べられているのは筆跡の照合であり、年代の判定には触れていない。', '本文が述べているのは図面上の帰属の訂正であり、実地の境界を復元したという記述はない。', '公開展示のための保険付保については本文に記載がない。', '正解。段落4に「researchers could match unsigned fragments held elsewhere in the county to the same hand」とあり、帰属の訂正後に他所の未署名の断片も同じ筆跡と照合できるようになったと明記されている。'] },
      { id: 'v5q163r2', no: 163, tag: '位置選択', topics: ['p7ins'],
        insertAt: 2, sentence: 'That is roughly one sheet in ten.',
        stem: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"That is roughly one sheet in ten."',
        choices: ['[1]', '[2]', '[3]', '[4]'],
        answer: 1,
        exp: '挿入文の裸の That は、直前の文が述べた内容を受けるのが既定である。離れた位置の内容を受けさせたいときは、その内容を記述で同定し直す定名詞句が要る。[1] の直前は digitisation についての一般論で数値を含まない。[2] の直前だけが「1,300点のうち140点」という2つの数値を述べており、140/1,300 は約10.8パーセント、すなわち「およそ10分の1」にあたるため、その計算結果を述べる挿入文がここに一致する。',
        why: ['[1] の直前は digitisation を「その簡単な解決策だとよく言われる」と述べる一般論で、量の記述がまったく無い。さらにその前の文が述べている量は Most have never been catalogued in detail の Most（大半）で、およそ10分の1という割合とは正反対の大きさである。', '正解。[2] の直前の文に「所蔵する1,300点のうち、140点がすでに洗浄・平坦化・撮影を終えている」とあり、140は1,300の約10.8パーセント、すなわちおよそ10分の1にあたる。挿入文の割合と符合する。', '[3] の直前は「拡大して比較すると、文字はTではなく割れたペン先で書かれた崩れたJだった」という字形の話で、数値も割合も述べていない。', '[4] の直前は「Marchmont のコンパスの描き方などの特徴」という筆跡の話で、数値は出てこない。'] },
      { id: 'v5q164r', no: 164, tag: '推測', topics: ['p7inf'],
        stem: "What is suggested about Josiah Marchmont's work for the neighbouring estate?",
        choices: ['It had been lost in a records-office fire decades ago.', 'It was commissioned only after the Grovemoor sheets were finished.', 'It had never been formally documented in any archive.', 'It had already been identified as his before this discovery.'],
        answer: 3,
        exp: '隣接する地所での Josiah Marchmont の仕事は「well-documented」＝すでによく記録され本人のものと判明していたが、Grovemoorの図面は誤った頭文字のせいでその記録と結び付けられていなかった、という趣旨。',
        why: ['本文に記録保管所の火災については記載がない。', '依頼の時期がGrovemoorの図面より後だったという記述はない。', '本文は「well-documented commissions」と述べており、正式に記録されていなかったとする本肢とは矛盾する。', '正解。段落3に「Josiah Marchmont, whose separate, well-documented commissions for a neighbouring estate had never been connected to this collection」とあり、隣接する地所での仕事はすでによく記録されていた（＝すでに彼のものと分かっていた）が、Grovemoorの図面とは名前が一致しなかったために結び付けられていなかった、と読み取れる。'] },
    ],
  },
];
