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

  /* ── 165–168 オンラインチャット（4名）─────────────── */
  sp({
    n: [165, 166, 167, 168], lv: 5, t: ['p7intent'],
    docs: [{
      label: 'Online chat discussion',
      body: [{ t: 'chat', lines: [
        { who: 'Farah Delacroix', time: '08:02', text: 'Support flagged it at seven — the new subscription renewal job double-charged some customers overnight. We need to know the scope before I escalate.' },
        { who: 'Ravi Chandrasekaran', time: '08:04', text: 'Checking the logs now. Looks like it only hit customers who renewed between midnight and 2 a.m.' },
        { who: 'Noor Haddad', time: '08:06', text: 'I have four tickets already, all saying they were charged twice.' },
        { who: 'Farah Delacroix', time: '08:07', text: 'How many customers renewed in that window total?' },
        { who: 'Ravi Chandrasekaran', time: '08:09', text: 'Three hundred and forty. Not all of them will have been double-charged — the bug only fires if the retry job runs before the first charge confirms.' },
        { who: 'Callum Reyes', time: '08:11', text: "Whatever the number, I'd rather we refund proactively than wait for tickets to come in one by one." },
        { who: 'Farah Delacroix', time: '08:13', text: 'Agreed. Ravi, can you get me an exact list by nine?' },
        { who: 'Ravi Chandrasekaran', time: '08:15', text: "Yes. I'm also disabling the retry job until we understand why it's firing early." },
        { who: 'Noor Haddad', time: '08:16', text: 'Should I tell the four who already contacted us that a refund is coming, or wait for the full list?' },
        { who: 'Callum Reyes', time: '08:18', text: "Tell them now. No reason to make them wait just because we're being thorough about the rest." },
        { who: 'Farah Delacroix', time: '08:20', text: 'Agreed, Noor — go ahead with those four.' },
      ] }],
    }],
    q: [
      { tag: '概要', s: 'What problem are the writers discussing?',
        c: ['A drop in subscription renewals reported earlier this week', 'A delay in shipping the renewal notices to customers overnight',
            'A billing error that charged some customers twice', 'A dispute over the refund policy raised by several customers'],
        a: 2,
        e: '更新処理のジョブが一部の顧客を二重に課金したという不具合について話し合っている。',
        w: ['更新件数の減少ではなく、二重請求という個別の不具合の話。', '通知発送の遅延ではない。', '正解。', '返金方針を巡る対立ではなく、全員が速やかな返金に同意している。'] },
      { tag: '意図', t: ['p7intent'],
        s: 'At 08:18, what does Mr. Reyes most likely mean when he writes, "No reason to make them wait just because we\'re being thorough about the rest"?',
        c: ['He believes the four known cases can be addressed without waiting for the complete list.', 'He thinks the investigation should be halted.',
            'He wants Noor to stop taking new tickets.', 'He is questioning whether a refund is necessary.'],
        a: 0,
        e: '直前で「4 件にはすぐ伝えるべきか、全体のリストを待つべきか」と問われ、その返答。全体調査を待たずに既知の 4 件には先に対応してよい、という意図。',
        w: ['正解。', '調査の中止は述べていない。', '新規受付の停止は述べていない。', '返金の必要性はすでに合意済み。'] },
      { tag: '詳細', s: 'How many customers renewed during the affected window?',
        c: ['4', '96', '340', '2'],
        a: 2,
        e: '「午前 0 時から 2 時の間に更新した顧客は合計 340 名」と述べられている。',
        w: ['判明している苦情件数。', '本文に記載なし。', '正解。', '対象時間帯（0〜2 時）の数字ではない。'] },
      { tag: '推測', t: ['p7inf'], s: 'Why does Mr. Chandrasekaran disable the retry job?',
        c: ['To prevent further double-charges while the cause is unclear', 'To reduce server load while the overnight renewal batch is still running',
            'Because Mr. Reyes instructed him to do so immediately this morning', 'Because the renewal window has already closed for all affected customers'],
        a: 0,
        e: '「なぜ早く発火するのか分かるまで、再試行ジョブを無効化する」と述べており、原因不明の間に被害を広げないための措置。',
        w: ['正解。', 'サーバー負荷についての言及はなく、停止の理由は「なぜ早く発火するのか分かるまで」と本人が明言している。', 'レイズ氏の指示ではなく、原因が分かるまでという本人の判断。', '更新期間が終了したとは述べておらず、不具合はまだ調査中。'] },
    ],
  }),

  /* ── 169–171 手紙 ─────────────────────────────────── */
  sp({
    n: [169, 170, 171], lv: 5,
    docs: [{
      label: 'Letter',
      head: 'Aldous & Fenwick Horology\nThe Old Forge, Bridport\n\n5 February',
      body: [
        'Ms. Corinne Whitmarsh\nClerk to the Parish Council\nGreat Hollowbrook',
        'Dear Ms. Whitmarsh,',
        'Further to your enquiry of 14 January, I have now completed my examination of the turret clock mechanism above the market hall.',
        'The condition is better than the 2018 report suggested. The going train — the gears that keep time — is in good order and needs only cleaning and re-oiling. What has failed is the strike train, the separate set of gears that trips the hour bell; a worn pivot there has been allowing the hammer to fall out of time with the actual hour.',
        'I would not recommend replacing the strike train at this stage. What the mechanism needs is a new bushing at the worn pivot and an adjustment to the count wheel. That is roughly twenty-five hours of workshop time rather than the hundred and twenty hours a full strike-train replacement would require.',
        'I must, however, raise the condition of the clock room itself. The window nearest the mechanism no longer closes fully, and dust and damp air have been reaching the movement for some time. Whatever we do to the mechanism will be undone within a few years unless that window is properly resealed. I can supply a written specification for a glazier if that would help you raise the matter with the council.',
        'My estimate for the bushing and adjustment is £2,180. I have not included the window specification, which I would provide at no charge.',
        'Yours sincerely,\nBenedict Aldous',
      ],
    }],
    q: [
      { tag: '概要', s: 'Why is Mr. Aldous writing?',
        c: ['To request additional historical drawings', 'To decline a restoration commission',
            'To report on an examination and recommend limited repair work', 'To invoice for completed repair work'],
        a: 2,
        e: '調査結果を報告し、全面交換ではなく限定的な修理を勧めている。',
        w: ['図面の追加要請はない。', '依頼は引き受けている。', '正解。', '未実施の作業の見積もりであり請求書ではない。'] },
      { tag: '詳細', s: 'What does the letter indicate about the going train?',
        c: ['It is in good order and needs only cleaning.', 'Mr. Aldous has already replaced it.',
            'Mr. Aldous took it away for inspection.', 'It no longer keeps accurate time and needs a full replacement.'],
        a: 0,
        e: '「時を刻む歯車列は状態が良く、清掃と注油のみでよい」とある。',
        w: ['正解。', '打鐘機構の交換は『現段階では勧めない』と述べているだけで、going train を交換したという記述は無い。', '取り外しには触れていない。', '不具合があるのは打鐘機構（strike train）の方で、時を刻む歯車列（going train）は清掃と注油のみでよいとされている。大掛かりな交換は不要。'] },
      { tag: '推測', t: ['p7inf'], s: 'Why does the writer mention the condition of the window?',
        c: ['To warn that the repair will not last without further work', 'To explain a delay in the examination',
            'To justify a higher estimate for the bushing', 'To suggest moving the clock room'],
        a: 0,
        e: '「窓を適切に密閉しない限り、機構の修理は数年で損なわれる」と警告している。',
        w: ['正解。', '遅延の説明ではない。', '見積もりには窓の工事は含まれていない。', '移設は提案していない。'] },
    ],
  }),

  /* ── 172–175 メモ（文挿入あり）───────────────────── */
  sp({
    n: [172, 173, 174, 175], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Memo',
      head: 'From: Head of Propagation\nTo: Bench Supervisors, Glasshouse Range\nDate: 3 March\nRe: Record sheets and sterilising between batches',
      body: [
        'Pennerley Nursery raises most of its stock from seed on heated propagation benches in the glasshouse range, moving each tray to an unheated bay once true leaves appear. Losses to damping-off vary from bench to bench, and until this spring nobody had found why some benches lost more trays than others. — [[1]] —',
        'Under the SHP, every bench is now sterilised between batches with a measured bleach dilution, instead of being wiped down at the grower\'s discretion. A record sheet on each bench logs the dilution used, and a bench whose sheet is not complete may not be sown again until inspected. — [[2]] — Compliance has been uneven: two of the range\'s eleven benches had no completed sheet in the first month.',
        'Supervisors who raised concerns about the paperwork were right that it adds a few minutes per changeover. Even so, benches following the SHP this season have lost fewer trays than before. — [[3]] — The two benches with incomplete records are, not coincidentally, the two with the highest losses so far.',
        'Staff have asked whether the dilution could be mixed in bulk each Monday rather than freshly before every changeover. — [[4]] — The active chlorine loses most of its strength within a day, so a batch mixed on Monday would do little by Wednesday.',
        'The sheets are not being kept for their own sake. They exist so that, next time losses spike on a bench, we can tell within twenty-four hours whether the cause is the protocol or something else.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v5q172r', s: 'According to the memo, what happens to a bench that lacks a completed record sheet?',
        c: ['It is assigned to a different propagator for the next batch.', 'It may not be used again before the season ends.',
            'Its trays are moved to the hardening-off bay early.', 'It cannot be sown again until it has been inspected.'],
        a: 3,
        e: '記録シートが無いベンチは、点検を受けるまで再び種をまくことができないと明記されている。',
        w: ['記録シートが無い場合に別の担当者に引き継がれるという記述はない。', '段落2は a bench whose sheet is not complete may not be sown again until inspected と書いており、再開を解く条件として置かれているのは点検を受けることである。点検はシーズンの途中でも受けられるので、シーズンが終わるまで使えないという期限の置き方はこの until 節と食い違う。', '早期にトレーを硬化用のベイへ移すという記述はない。', '正解。段落2に「a bench whose sheet is not complete may not be sown again until inspected」とあり、記録シートが不完全なベンチは点検を受けるまで再び種をまけないと明記されている。'] },
      { tag: '詳細', qid: 'v5q173r2', s: 'What do the two benches with incomplete records have in common, according to the memo?',
        c: ['They have raised their stock on an unheated bench all spring.', 'They have lost the most trays of any bench so far.',
            'They have reduced their losses faster than the rest of the range.', 'They have accounted for every tray lost across the range.'],
        a: 1,
        e: '記録が不完全な2台のベンチは、これまでにトレーの損失が最も多い2台と一致すると述べられている。',
        w: ['段落1は raises most of its stock from seed on heated propagation benches in the glasshouse range と述べており、種から育てる繁殖ベンチは加温されたものとして書かれている。加温されていないのは、本葉が出たあとトレーを移す先の bay（moving each tray to an unheated bay once true leaves appear）であってベンチではない。加温していないベンチで育ててきたという内容はこの2か所と食い違う。',
            '正解。段落3に「The two benches with incomplete records are, not coincidentally, the two with the highest losses so far」とあり、記録が不完全な2台はこれまでで最もトレーの損失が多い2台と一致すると明記されている。',
            '段落3は The two benches with incomplete records are, not coincidentally, the two with the highest losses so far と述べ、この2台をこれまでで損失が最も多い2台としている。損失の減り方が他のベンチより速いという内容は、この一文と正反対である。',
            '段落3は benches following the SHP this season have lost fewer trays than before と述べており、手順に従っているベンチの損失も以前より減っただけで無くなってはいない。範囲内で失われたトレーがすべてこの2台の分だという内容は、この記述と食い違う。'] },
      { tag: '位置選択', qid: 'v5q174r2', t: ['p7ins'], insertAt: 1,
        sentence: 'The Seedling Handling Protocol (SHP) was rewritten last autumn and now covers every bench in the range.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"The Seedling Handling Protocol (SHP) was rewritten last autumn and now covers every bench in the range."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 0,
        e: '挿入文は制度の正式名称と略語を初めて対にして示す文なので、略語だけが使われ始める前、すなわち [1] にしか置けない。[2]〜[4] は、その時点までにすでに「the SHP」が略語のみで使われているため、そこで正式名称を「初めて」導入するのは初出の順序として矛盾する。',
        w: ['正解。段落1では制度への言及が一度もなく、この位置で初めて「the Seedling Handling Protocol (SHP)」の正式名称が導入される。以降の段落はこの略語だけでそれを受けている。',
            'この位置の直前ではすでに「Under the SHP」として略語だけで制度に触れており、正式名称をここで初めて導入すると、略語が先に使われたあとで定義することになり順序が矛盾する。',
            'この位置までに段落2・3で「the SHP」という略語が繰り返し使われており、正式名称の初出をここに置くと、既出の略語を後からもう一度初めて導入し直すことになり成立しない。',
            'この位置までに略語「SHP」がすでに複数回使われており、正式名称の初出をここに置くことはできない。'] },
      { tag: '推測', qid: 'v5q175r', t: ['p7inf'], s: 'What is suggested about mixing the bleach dilution in bulk each Monday?',
        c: ['It would reduce the cost of the sterilising process significantly.', 'It has already been adopted at another site in the group.',
            'It would leave later use of the dilution largely ineffective.', 'It is now required under the revised protocol.'],
        a: 2,
        e: '有効塩素は希釈から1日程度で大半の効力を失うため、月曜日にまとめて希釈しても水曜日にはほとんど効かなくなってしまうことが示唆されている。',
        w: ['殺菌工程の費用を大きく削減できるという記述はない。', '系列の別施設ですでに採用されているという記述はない。', '正解。段落4に「The active chlorine loses most of its strength within a day, so a batch mixed on Monday would do little by Wednesday」とあり、月曜日にまとめて希釈すると週半ば以降はほとんど効かなくなると読み取れる。', '改定後の制度で義務付けられているという記述はない。むしろ希釈後は1日程度で効力が落ちると述べており、まとめて希釈することを推奨してはいない。'] },
    ],
  }),
];
