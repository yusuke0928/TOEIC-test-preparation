/* =============================================================
   予想模試 Vol.5 — Part 7 単一文書 前半（No.147–164）
   総仕上げ回。
   ============================================================= */

const sp = (o) => ({
  id: `v5-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    id: `v5q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
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
        c: ['For a change of ownership', 'For staff training',
            'For a renovation of the changing rooms', 'For descaling and a safety inspection'],
        a: 3,
        e: '「年次の湯垢除去と、暖房装置の全面的な安全点検のため」と明記されている。',
        w: ['所有権の変更ではない。', '研修の話はない。', '更衣室の改装には触れていない。', '正解。'] },
      { tag: '詳細', s: 'What will happen automatically for members with sauna-inclusive membership?',
        c: ['They will receive a partial refund.', 'They will receive a free guest pass.',
            'They will be upgraded to a higher membership tier.', 'Five days will be added to their membership term.'],
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
        c: ['They will be kept as a permanent backup.', 'They will be moved to a different entrance.',
            'They have already been removed.', 'They will remain for one week before being removed.'],
        a: 3,
        e: '「最初の 1 週間だけ新旧併用し、1 月 27 日以降は打刻機を完全に撤去する」とある。',
        w: ['恒久的な予備としては残らない。', '移設の話はない。', 'まだ稼働している。', '正解。'] },
    ],
  }),

  /* ── 151–152 広告 ─────────────────────────────────── */
  sp({
    n: [151, 152], lv: 4,
    docs: [{
      label: 'Advertisement',
      title: 'Thistledown Upholstery — Furniture Restoration',
      body: [
        'We reupholster, re-spring and refinish. What we will not do is charge for a full restoration when a partial repair will serve the piece just as well.',
        { t: 'list', items: [
          'Full reupholstery from £340',
          'Spot repair to a single cushion from £45',
          'Frame regluing from £95',
          'Free in-home assessment within 15 miles',
        ] },
        'Turnaround is five to seven weeks for full reupholstery. We do not offer a rush service for this work, because the fabric must be steamed and relaxed for at least four days before cutting, and cutting too soon is the most common cause of a poor pattern match at the seams.',
        'Spot repairs, which do not involve replacing large panels of fabric, can often be completed within a week.',
        'If an in-home assessment concludes that a piece is not structurally sound enough to justify reupholstery, we say so and charge nothing for the visit. This applies to roughly one piece in twenty.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why does the shop not offer a rush service for full reupholstery?',
        c: ['Fabric is difficult to source quickly.', 'Customers rarely request faster service.',
            'Skilled staff are not always available.', 'The fabric requires several days of preparation before cutting.'],
        a: 3,
        e: '生地は裁断前に最低 4 日間、蒸気を当ててなじませる必要があり、急ぐと縫い目の柄合わせに失敗しやすいと説明されている。',
        w: ['入手性には触れていない。', '需要の話ではない。', '人員の話はない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What is suggested about spot repairs?',
        c: ['They require the same fabric preparation as full reupholstery.', 'They cost more than full reupholstery.',
            'They are offered only to repeat customers.', 'They can often be finished more quickly than full reupholstery.'],
        a: 3,
        e: '「大きな生地パネルの張替えを伴わないため、1 週間程度で完了することが多い」とある。',
        w: ['同様の準備期間は不要と読める。', 'スポット修理（£45〜）は全面張替え（£340〜）より安価。', '常連客限定とは述べていない。', '正解。'] },
    ],
  }),

  /* ── 153–155 メール ───────────────────────────────── */
  sp({
    n: [153, 154, 155], lv: 5,
    docs: [{
      label: 'E-mail',
      head: 'To: g.albrecht@thornfield-holdings.com\nFrom: m.oyelaran@greenline-design.co.uk\nDate: 9 May\nSubject: Courtyard redesign — revised planting plan',
      body: [
        'Dear Mr. Albrecht,',
        'Thank you for walking me through how staff actually use the courtyard at different times of day last Wednesday. That visit changed my recommendation.',
        'You originally asked for a single planting scheme throughout the courtyard, using the same low hedging along both the north and south edges for a uniform look. Having watched three lunch periods, I would like to propose two treatments instead: taller, denser planting along the south edge, where the afternoon sun makes seating uncomfortable without shade, and the current low hedging along the north edge, where staff already gather for short breaks and value the open sightline back to the building.',
        'The two-treatment approach adds roughly nine percent to the planting budget, mainly because the taller specimens cost more to establish. I believe it is worth the difference, but I want to be clear this is a design judgement rather than something the original brief required.',
        'On the choice of species for the south edge: you mentioned birch. Birch loses its leaves for nearly half the year, which would remove the shade exactly when the courtyard is least used and provide none when it is most needed in summer. I would suggest instead an evergreen screen, which holds its shade year-round.',
        'I have attached sketches of both zones and a revised planting schedule. If the nine percent increase is not acceptable, I can design a single uniform scheme that will provide some benefit to both edges, though less than either would gain from its own tailored treatment.',
        'With regards,\nMireille Oyelaran',
      ],
    }],
    q: [
      { tag: '概要', s: 'Why is Ms. Oyelaran writing?',
        c: ['To decline a landscaping project', 'To confirm a completion date',
            'To request payment for a site visit', 'To propose a change to an agreed planting scheme'],
        a: 3,
        e: '「南北とも同じ低い生垣」という当初の依頼に対し、2 通りの植栽に分ける提案をしている。',
        w: ['依頼を辞退してはいない。', '完了日の確認ではない。', '訪問費用の請求ではない。', '正解。'] },
      { tag: '詳細', s: 'What did Ms. Oyelaran observe during her visit?',
        c: ['The courtyard is smaller than the original plan assumed.', 'The existing hedging was already dying.',
            'The courtyard is used differently along its two edges.', 'Staff rarely use the courtyard at all.'],
        a: 2,
        e: '南側は日差しが強く座りづらい一方、北側は短い休憩に使われ見通しが好まれている、という使われ方の違いを観察している。',
        w: ['広さの話は出ていない。', '既存の生垣が枯れているとは述べていない。', '正解。', 'むしろ使われている前提の記述。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does Ms. Oyelaran imply about using birch?',
        c: ['It would exceed the planting budget on its own.', 'It is difficult to obtain locally.',
            'It would fail to provide shade exactly when it is most needed.', 'It is unsuitable for a courtyard setting in general.'],
        a: 2,
        e: '「シラカバは 1 年の半分近く葉を落とすため、最も日陰が必要な夏に日陰を提供できない」という趣旨。',
        w: ['予算増の理由は高木種全般のコスト。', '入手性には触れていない。', '正解。', '中庭に不向きとは述べていない。'] },
    ],
  }),

  /* ── 156–158 記事 ─────────────────────────────────── */
  sp({
    n: [156, 157, 158], lv: 5,
    docs: [{
      label: 'Article',
      title: 'The Script the Call Centre Threw Away',
      head: 'Service Quarterly, Issue 33',
      body: [
        "In 2020, the customer service team at Brindlewood Insurance stopped requiring agents to read a fixed opening script on every call, replacing it with three required pieces of information delivered in the agent's own words. No other change was made to staffing, call volume or the products handled.",
        'The idea followed a review of recorded calls in which supervisors noticed that customers frequently interrupted the script before it finished, then had to be walked back through information they had already indicated they did not need. Ms. Odalys Ferreira, the team\'s training lead, wondered whether removing the fixed wording would shorten calls without reducing what customers actually retained.',
        'The first six months produced a modest result: average call length fell by 8 percent, with no measurable change in follow-up call rates. Full two-year tracking, unusual for a change of this kind, showed the effect had grown: by year two, average call length was down 19 percent, and follow-up calls, which had been expected to rise, had actually fallen by 6 percent.',
        'Ms. Ferreira\'s explanation is that agents, once freed from reciting fixed wording, began listening for what a specific caller actually needed rather than delivering the same information to everyone. "In month one, agents still recited the three pieces of information in order, just in their own words," she says. "By year two, they were often skipping straight to the one point that mattered for that caller."',
        'The company has since removed fixed scripts from two other departments, though not from the claims line, where legal wording must be read verbatim for regulatory reasons.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What change did Brindlewood Insurance make in 2020?',
        c: ['It introduced a new call-routing system.', 'It reduced the number of agents per shift.',
            'It replaced a fixed script with required points in agents\' own words.', 'It began recording all customer calls for the first time.'],
        a: 2,
        e: '固定の冒頭スクリプトをやめ、必須の 3 項目を担当者自身の言葉で伝える方式に変えたとある。',
        w: ['振り分けシステムの話ではない。', '人員削減には触れていない。', '正解。', '録音自体は変更前から行われていた（レビューの前提）。'] },
      { tag: '詳細', s: 'What was unusual about the tracking of the change?',
        c: ['It was conducted by an outside consultancy.', 'It measured revenue rather than call length.',
            'It covered every department from the outset.', 'It continued for two years rather than the more typical shorter period.'],
        a: 3,
        e: '「この種の変更にしては珍しく」2 年間の追跡調査を行った点が特異だと述べている。',
        w: ['外部委託の話はない。', '測定対象は通話時間と再架電率。', '当初は 1 部門のみで開始。', '正解。'] },
      { tag: '詳細', s: 'What does Ms. Ferreira say changed about agent behaviour over time?',
        c: ['Agents began ignoring the three required points entirely.', 'Agents started transferring more calls to supervisors.',
            'Agents began reading from a printed card again.', 'Agents shifted from reciting all points in order to focusing on what mattered.'],
        a: 3,
        e: '「1 か月目は順番どおり 3 項目を伝えていたが、2 年目にはその客に関係する 1 点に直接進むようになった」と述べている。',
        w: ['完全に無視したとは述べていない。', '転送件数の話はない。', '印刷カードに戻したとは述べていない。', '正解。'] },
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
        c: ['The new holder must live within the local area.', 'The new holder must already hold a plot elsewhere.',
            'The new holder must pay an additional fee.', 'The new holder must have attended a committee meeting in the past year.'],
        a: 3,
        e: '「過去 1 年以内に委員会の会合に 1 回以上出席していれば自動承認」と明記。',
        w: ['居住地の条件はない。', 'むしろ他に区画を持っていないことが前提。', '追加料金の記載はない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What can be inferred if the new holder has not attended a committee meeting?',
        c: ['The current holder will lose their remaining plot.', 'The transfer will be rejected outright.',
            'The transfer will be approved for one season only.', 'A late fee will be charged.'],
        a: 2,
        e: '「出席実績がない場合は、次回の会合に出席することを条件に 1 作期限定で暫定承認される」とある。',
        w: ['もう一方の区画への言及はない。', '却下ではなく条件付きで承認される。', '正解。', '延滞料金の話はない。'] },
    ],
  }),

  /* ── 161–164 記事（文挿入あり）───────────────────── */
  sp({
    n: [161, 162, 163, 164], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Article',
      title: 'The Missed-Delivery Rate That Was Hiding Two Routes',
      head: 'Logistics Monthly',
      body: [
        'For most last-mile delivery operators, the headline missed-first-attempt rate sits somewhere between twelve and twenty percent. — [[1]] — Nearly all track it weekly against a fixed target, and a rate above eighteen percent is usually treated as a driver-training or routing problem.',
        'Fennimore Express, a regional courier based in the Trent valley, found that its headline figure was concealing something. — [[2]] — When the company split missed attempts by whether the delivery address was a house with a private entrance or a flat accessed through a shared building entryphone, two quite different operations appeared.',
        'House deliveries had a missed-first-attempt rate of nine percent. Flat deliveries had a missed rate of thirty-one percent — and a disproportionate share of those required a second attempt on a different day entirely, rather than simply a redelivery later the same afternoon, because entryphone systems often connect to a resident who is not the one expecting the parcel.',
        "The finding changed what Fennimore did about missed deliveries. The obvious response, adding thirty seconds to every driver's allotted time per stop, would have slowed house deliveries that were already working well. — [[3]] — Instead the company began asking flat residents, at the point of order, for a preferred safe-place or neighbour option, and gave drivers a single shared code for buildings where the managing agent allowed it.",
        'Missed attempts on flat deliveries fell by forty-two percent within a year. — [[4]] — The overall missed-first-attempt rate fell to eleven percent, and average time per house delivery did not change at all.',
        'The lesson Fennimore draws is not about parcels. It is that a single average can quietly combine two operations that behave nothing alike.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What did Fennimore Express discover about its missed deliveries?',
        c: ['They differed sharply between two types of address.', 'They came mainly from a small group of repeat addresses.',
            'They were higher than the industry average.', 'They were concentrated on a single weekday.'],
        a: 0,
        e: '戸建てと集合住宅とで、初回不在率が 9 パーセントと 31 パーセントに分かれた。',
        w: ['正解。', 'リピート住所の話ではない。', '業界平均との比較はしていない。', '曜日別の話は出ていない。'] },
      { tag: '詳細', s: 'Why did the company reject adding time to every stop?',
        c: ['It was prohibited by driver contracts.', 'It would have required hiring more drivers.',
            'It had failed at a competitor before.', 'It would have slowed deliveries that were already working well.'],
        a: 3,
        e: '「すでにうまくいっている戸建て配送まで遅くしてしまう」ため見送った。',
        w: ['契約上の制約には触れていない。', '増員の話も出ていない。', '競合の事例には触れていない。', '正解。'] },
      { tag: '位置選択', t: ['p7ins'], insertAt: 2,
        sentence: 'The figure itself was unremarkable, at sixteen percent.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"The figure itself was unremarkable, at sixteen percent."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 1,
        e: '挿入文の The figure は直前の「表面上の不在率が何かを隠していた」の「その数字」を指し、直後の「内訳に分けると 2 つの異なる運用が現れた」につながる。平凡な総計 → 分解すると別物、という論理が [2] で完成する。',
        w: ['[1] の前後は業界一般の話で、Fennimore 固有の数字はまだ出ていない。',
            '正解。',
            '[3] の前後は対応策の話で、数値の提示は遅すぎる。',
            '[4] の前後は成果の数字で、前提の提示にはならない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does the final paragraph suggest?',
        c: ['Delivery services differ fundamentally from other industries.', 'Customer surveys are more reliable than delivery data.',
            'Missed-delivery rates should not be published.', 'Averages can conceal distinct groups within the data.'],
        a: 3,
        e: '「小包の話ではない。1 つの平均が、まったく異なる挙動をする 2 つの運用を静かに合わせてしまうことがある」という結びが根拠。',
        w: ['「小包の話ではない」と明言している。', '調査手法の比較はしていない。', '公表の是非には触れていない。', '正解。'] },
    ],
  }),
];
