/* =============================================================
   予想模試 Vol.6 — Part 7 単一文書 後半（No.165–175）
   ============================================================= */

const sp = (o) => ({
  id: `v6-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。 */
    id: x.qid || `v6q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7detail'], tag: x.tag,
    insertAt: x.insertAt, sentence: x.sentence,
  })),
});

export const R3 = [

  /* ── 165–168 オンラインチャット（4 名）───────────── */
  sp({
    n: [165, 166, 167, 168], lv: 5, t: ['p7intent'],
    docs: [{
      label: 'Online chat discussion',
      body: [{ t: 'chat', lines: [
        { who: 'Ilona Szymanski', time: '15:10', text: 'One thing before we file the safety report: the Grimsby injury count does not match the log. One entry is logged twice.' },
        { who: 'Marlise Brennecke', time: '15:12', text: 'Can you confirm with the site before we submit?' },
        { who: 'Ilona Szymanski', time: '15:14', text: 'I have called twice. The supervisor is on the depot floor until at least four.' },
        { who: 'Kaveh Hosseini', time: '15:16', text: 'The portal locks at 17:00 sharp and fines apply per day late, no exceptions for pending confirmation.' },
        { who: 'Torvald Ness', time: '15:18', text: 'We do not need to wait. File the corrected count now, treating the duplicate as removed, and amend once Grimsby confirms.' },
        { who: 'Kaveh Hosseini', time: '15:20', text: 'Amendments are free with no deadline, so that is less risky than missing 17:00.' },
        { who: 'Ilona Szymanski', time: '15:22', text: 'If Grimsby says both entries were genuine, can a correction raise the count back up too?' },
        { who: 'Torvald Ness', time: '15:24', text: 'Yes — amendments work either way. The portal only restricts the original submission.' },
        { who: 'Marlise Brennecke', time: '15:26', text: 'Waiting buys us nothing, then. Ilona, submit the corrected figure by five, and flag the Grimsby entry for an amendment either way.' },
        { who: 'Ilona Szymanski', time: '15:28', text: 'Will do. I will call the supervisor again at four in case he confirms first.' },
        { who: 'Kaveh Hosseini', time: '15:30', text: 'Good — if he confirms in time, we can file the right number the first time and skip the amendment.' },
      ] }],
    }],
    q: [
      { tag: '概要', s: 'What issue are the four writers trying to resolve?',
        c: ['Whether to request an extension from the regulator', 'Whether to dispute the injury count with Grimsby directly',
            'How to submit the report on time despite an unconfirmed figure', 'Whether to close the incident investigation early'],
        a: 2,
        e: '未確認の数値がある状況で、17:00 の期限に間に合わせるため、修正した数値でひとまず提出し、確定後に訂正申請を出す案が決定される。',
        w: ['延長の要請は話題に出ていない（期限は固定と明言されている）。', 'グリムズビーへの異議申し立てではなく確認待ちの状態である。',
            '正解。', '調査を打ち切る話ではない。'] },
      { tag: '詳細', s: 'Why is submitting after 17:00 not a good option?',
        c: ['The regulator would reject the report outright.', 'A fine applies for each day the submission is late.',
            'The portal deletes any data entered after the deadline.', 'Grimsby would no longer be able to confirm the figure.'],
        a: 1,
        e: 'ホセイニの発言「ポータルは17:00で締まり、確認待ちでも例外なく延滞日数分の罰金がかかる」が根拠。',
        w: ['本文にあるのは「17:00 でポータルが閉じる」「延滞日数分の罰金」だけで、却下という記述は無い。', '正解。',
            'ポータルは締まる（locks）とあるだけで、入力済みデータの削除には触れていない。',
            '17:00 を過ぎるとグリムズビーが確認できなくなる、という記述は無い。監督者に連絡が取れるかは現場の都合で、ポータルの期限とは別の話。'] },
      { tag: '意図', t: ['p7intent'],
        s: 'At 15:26, what does Ms. Brennecke most likely mean when she writes, "Waiting buys us nothing, then"?',
        c: ['She thinks the discrepancy in the log can be ignored.', 'She has decided to wait for Grimsby before submitting anything.',
            'She believes the amendment process will not be needed at all.', 'She agrees that the corrected figure should be submitted now, with an amendment filed later.'],
        a: 3,
        e: '15:24 でネスが「訂正申請はどちらの方向にも出せる。制限があるのは当初提出だけだ」と確認している。数値は提出後に上にも下にも直せるのだから、グリムズビーの確認を待って提出を遅らせても得るものは無い、という意味。ブレネッケは同じ発言の後半で、修正済みの数値を5時までに提出し、グリムズビーの記録は訂正申請の対象として立てておくよう指示している。',
        w: ['食い違いを無視するのではなく、重複を除いた「修正済みの数値」を提出すると決めている。', 'その逆で、待つことに利がないから待たない、という趣旨である。',
            '同じ発言の後半で「どちらに転んでも訂正申請の対象として立てておけ」と指示しており、訂正申請が不要とは考えていない。', '正解。'] },
      { tag: '次の行動', s: 'What will Ms. Szymanski do?',
        c: ['Call the Grimsby supervisor again before the deadline', 'Submit the report using outdated figures',
            'File a formal amendment immediately', 'Ask the regulator for permission to delay'],
        a: 0,
        e: 'シマンスキー自身が「4時にもう一度監督者に電話する」と述べている。',
        w: ['正解。', '古い数値を使うとは述べていない（修正済みの数値を使うと決まっている）。',
            '訂正申請はグリムズビーの確認後に出すもので、今すぐではない。', '延長を求める話は出ていない。'] },
    ],
  }),

  /* ── 169–171 手紙 ─────────────────────────────────── */
  /* 2026-08-18 の再監査で全面差し替え。旧版は「外部の専門家が文化施設を訪問したあとに書く
     所見の手紙 → 全面改修は今は勧めない、限定的な代替策を推す → ただし別件を別部署に上げてほしい」
     という4段構成で、vol1〜vol5 の r3 スロットに5巻続けて出ている「専門職事務所の意見書」一族の
     変種だった。No.169（目的）の正解もその一族の共通命題（点検の結果を伝え、締切前の進め方を勧める）
     に乗っていた。訪問も所見も勧告も持たない別種の手紙（競売の結果通知）に組み替え、
     設問 id も新規採番している。
     2026-08-18 のレビューで、第5段落の photographed を photographed afresh に変えた。
     No.171 は「9月の売立てに残すと図版料が改めて発生する」ことを問う設問だが、撮り直しが
     明示されていないと「同じ写真を使い回すなら再度は生じない」という別の結論に達しうるため。 */
  sp({
    n: [169, 170, 171], lv: 5,
    docs: [{
      label: 'Letter',
      head: 'Petherton Auction Rooms — Consignments Office\n21 June',
      body: [
        'Dear Ms. Loxley,',
        'I am writing with the results of the sale held on 14 June, at which we offered the two lots you consigned in April. The saleroom was busier than we expected for the time of year, with a good deal of interest from outside the county.',
        'Lot 214, the set of brass drawing instruments in its fitted case, was bought by a telephone bidder at $520, against a pre-sale estimate of $300 to $400. Two telephone bidders were still competing well past the upper figure. Our commission of twelve per cent of the hammer price is deducted before payment, and a remittance advice will reach you within a fortnight.',
        'Lot 215, the mahogany plan chest, did not sell. The highest bid on the day was $260, short of the $400 reserve you placed on it, and our conditions of sale do not allow a lot to be knocked down below its reserve. The chest has gone into our unsold store.',
        'Unsold lots are entered in the following sale at the same reserve unless the consignor instructs us otherwise, and every lot in a sale is photographed afresh and given its own catalogue entry. The illustration charge of $40 for each catalogue entry falls due whether or not the lot finds a buyer. A reserve may be lowered by writing to this office at least ten days before the sale date; we are not able to act on instructions given by telephone.',
        'Our next sale is on 12 September and entries close on 22 August. Do let me know before then how you would like to proceed with the chest; if I hear nothing, it will go forward as it stands.',
        'Yours sincerely,\nGareth Pomeroy\nConsignments Office, Petherton Auction Rooms',
      ],
    }],
    q: [
      { tag: '概要', qid: 'v6q169r', s: 'Why did Mr. Pomeroy write to Ms. Loxley?',
        c: ['To report how two items she consigned performed at a sale',
            'To invite her to view the lots entered in a coming sale',
            'To ask her to collect an item from the saleroom',
            'To explain why one of her items was withdrawn before the sale'],
        a: 0,
        e: '冒頭に「4月にお預かりした2点を出品した6月14日の売立ての結果をお知らせします」とあり、以下214番の落札額と手数料、215番の不落札とその後の扱いが順に述べられる。2点の結果の報告が用件である。',
        w: ['正解。',
            '下見や来場を勧める記述はない。9月12日の売立てに触れているのは、売れ残った品の次の出品先としてであって、招待ではない。',
            '引き取りを求める記述はない。売れ残ったプランチェストは「当社の未落札品保管庫に入った」と述べられ、指示がなければそのまま次の売立てに回ると説明されている。',
            '2点はいずれも6月14日に出品されている（214番は落札、215番は最高値が留保価格に届かず不落札）。事前に取り下げられたという内容と矛盾する。'] },
      { tag: '詳細', qid: 'v6q170r', s: 'What does Mr. Pomeroy report about Lot 214?',
        c: ['It was bought by a bidder in the room.',
            'It was offered with a reserve of $400.',
            'It will be entered in the sale on 12 September.',
            'It sold for more than its highest estimate.'],
        a: 3,
        e: '214番は520ドルで落札されており、事前見積りは「300ドルから400ドル」である。落札額は見積りの上限を上回っている。',
        w: ['本文は「電話の入札者が落札した」と明記しており、会場内の入札者という内容と矛盾する。',
            '214番について本文が示しているのは事前見積り（300ドルから400ドル）であって、留保価格ではない。400ドルの留保価格が置かれているのは215番のプランチェストのほうである。',
            '次の売立てに回るのは売れ残った品だと本文は述べており、214番は6月14日に落札されている。9月12日の売立てに関わるのは215番である。',
            '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v6q171r', s: 'What is suggested about leaving the plan chest in the September sale?',
        c: ['The reserve would automatically be lowered to $260.',
            'The commission would rise above twelve per cent.',
            'The chest would be offered without a catalogue entry.',
            'Another illustration charge of $40 would become payable.'],
        a: 3,
        e: '第5段落は「売立てに出る品はすべて写真を撮り直し、それぞれに固有のカタログ項目が与えられる」「カタログ項目1件につき40ドルの図版料が、落札の有無にかかわらず発生する」と述べている。チェストを9月の売立てに残せば新たなカタログ項目が作られるのだから、そのぶんの図版料が改めて生じることになる。',
        w: ['第5段落は「委託者から別段の指示がない限り同じ留保価格のまま次の売立てに出す」と述べており、自動的に下がるという内容と矛盾する。留保価格を下げるには売立て日の10日前までに書面で申し出る必要がある。',
            '手数料は落札価格の12パーセントと示されているだけで、回数や売立てによって変わるという記述はない。',
            '第5段落は「売立てに出る品はすべて写真を撮り直し、それぞれにカタログ項目が与えられる」と述べており、カタログ項目なしで出品されるという内容と矛盾する。',
            '正解。'] },
    ],
  }),

  /* ── 172–175 報告書（文挿入あり）───────────────── */
  sp({
    n: [172, 173, 174, 175], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Report',
      title: 'Progress Update: Automated Returns Kiosk Trial',
      head: 'Fenmore Retail Group — Customer Services, 9 July',
      body: [
        'Fenmore introduced self-service returns kiosks at the Trentbridge and Wrenhaven stores on 8 January, aiming to cut the average wait at the returns counter, which had reached eleven minutes at peak times. — [[1]] — Six months on, the two stores look nothing alike.',
        'At Trentbridge, the kiosks now handle just over half of all returns, and the average wait for a customer who still needs a staff member has fallen to under four minutes. — [[2]] — Wrenhaven tells a different story: for most of the trial, kiosk use there stayed under one in five returns, and staff reported that customers often abandoned the kiosk partway through and joined the counter queue instead.',
        'The kiosks require a printed receipt with a barcode. Wrenhaven has run a paperless-receipt promotion since 1 March, so a much larger share of its returns arrive with only a mobile receipt, which the kiosk cannot scan. Staff there began keying the mobile receipt numbers in by hand on 1 June, and kiosk use rose to nearly one in three returns over the following weeks. — [[3]] —',
        'We recommend extending the manual key-in option to Trentbridge as well, since roughly one in twelve of its returns are still turned away for the same reason, and testing a barcode reader that can scan a mobile receipt directly before the trial’s second phase begins in September. — [[4]] — Customer feedback forms show satisfaction is highest among shoppers making a single, straightforward return, and lowest among those returning part of a larger order.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What is reported about the kiosks at the Trentbridge store?',
        c: ['They have not reduced wait times at the counter.', 'Just over half of returns are now handled through them.',
            'They were removed after complaints from customers.', 'They are being replaced with a newer model in September.'],
        a: 1,
        e: '第2段落に「トレントブリッジでは、キオスクが返品全体のちょうど半数強を処理している」とある。',
        w: ['同じ文で「対応が必要な客の待ち時間も4分未満に短縮した」とあり、待ち時間は縮んでいる。', '正解。',
            '撤去されたという記述は本文のどこにも無い。',
            '9月に始まるのは試行の第2段階で、本文が勧めているのはその開始前にモバイルレシートを直接読み取れるバーコード読み取り機を試すことである。キオスク自体を新型に入れ替えるとは述べられていない。'] },
      { tag: '詳細', s: 'According to the report, why has kiosk use at Wrenhaven been low?',
        c: ['Customers frequently bring items without any receipt at all.', 'The kiosk software crashes when scanning a barcode.',
            'Many returns there now arrive with only a digital receipt, which the kiosk cannot read.', 'Wrenhaven’s kiosk was installed several months after Trentbridge’s.'],
        a: 2,
        e: '第3段落に「レンヘイヴンは3月1日からペーパーレスレシートの推奨キャンペーンを実施しており、そのためモバイルレシートのみを伴って持ち込まれる返品の割合が大幅に増え、キオスクはそれを読み取れない」とある。これが利用率が伸びなかった原因である。',
        w: ['レシートが手元に無いのではなく、レシートが電子形式でしか存在しない点が問題だと本文は述べている。', 'ソフトウェアの不具合には触れていない。',
            '正解。', '第1段落に「トレントブリッジとレンヘイヴンの両店に1月8日に導入した」とあり、導入時期は同じである。'] },
      { tag: '位置選択', t: ['p7ins'], insertAt: 3,
        sentence: 'By that date the promotion had already been running for three months.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"By that date the promotion had already been running for three months."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 2,
        e: '挿入文の By that date は直前の文に出てくる日付を受ける。[3] の直前の文にある日付は、レンヘイヴンの店員が手入力を始めた6月1日である。ペーパーレスレシートの推奨キャンペーンの開始は3月1日だから、6月1日までで正確に3か月となり、挿入文の数値と一致する。定冠詞つきの the promotion が指すキャンペーンも、同じ段落の直前の文で導入済みである。他の3か所は、直前の文の日付がそれぞれ1月8日・（日付なし）・9月であり、いずれも「すでに3か月続いていた」が成立しない。',
        w: ['[1] の直前の文にある日付は、キオスク導入日の1月8日である。キャンペーンが始まるのは3月1日なので、1月8日の時点では「すでに3か月続いていた」どころかまだ始まっていない。加えて、この位置ではキャンペーンが本文に一度も登場しておらず、定冠詞つきの the promotion に受け先が無い。',
            '[2] の直前の文には日付が一つも無く、By that date が指す日を取れない。前の段落まで遡って1月8日を取る読みを試みても、キャンペーンの開始は3月1日なので「すでに3か月続いていた」は成立しない。加えてキャンペーンはこの時点で本文に一度も登場しておらず、定冠詞つきの the promotion に受け先が無い。',
            '正解。',
            '[4] の直前の文にある日付は、試行の第2段階が始まる9月である。キャンペーンの開始は3月1日なので、9月を基準にすれば「すでに3か月」ではなく6か月続いていることになり、本文の日付と食い違う。さらに9月はこの報告書（7月9日付）から見て未来の時点であり、過去完了の had already been running で受けることができない。'] },
      { tag: '推測', t: ['p7inf'], s: 'What is indicated about customer satisfaction with the kiosks?',
        c: ['It is unrelated to the type of return being made.', 'It tends to be lower for more complicated transactions.',
            'It has declined since the trial began in January.', 'It is measured only at the Trentbridge store.'],
        a: 1,
        e: '最終段落に「満足度が最も高いのは単品の単純な返品客で、最も低いのは大口注文の一部を返品する客」とある。単純な取引ほど満足度が高く、込み入った取引ほど低いという相関を言い換えると、取引が複雑になるほど満足度は下がる傾向がある、となる。',
        w: ['返品の種類によって満足度が異なると述べられており、無関係とは言えない。', '正解。',
            '1月の試行開始からの推移には触れていない。アンケートは現時点の傾向を述べているだけである。',
            'アンケートの集計対象がトレントブリッジ店に限られるとは述べられていない。'] },
    ],
  }),
];
