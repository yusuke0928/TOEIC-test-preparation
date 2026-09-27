/* =============================================================
   予想模試 Vol.6 — Part 7 複数文書（No.176–200）
   ダブルパッセージ 2 セット／トリプルパッセージ 3 セット
   ============================================================= */

const mp = (o) => ({
  id: `v6-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7cross'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。 */
    id: x.qid || `v6q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7cross'], tag: x.tag,
  })),
});

export const R4 = [

  /* ══ 176–180 ダブルパッセージ ══════════════════════
     先読み対策・第2案（2026-09-26）：stem と選択肢は監査役の設問案で凍結し、正解はくじで
     決めたあと本文を新規に書き下ろした（pilot/method2.md）。求人票＋応募メールという
     組み合わせ自体は既存のまま、題材・固有名・本文はすべて新規。
     Q176・Q177の2問がクロス。文書を1つずつ隠すと：
       - 求人票だけでは、応募者の実務年数・保有資格・使用ソフト・前職の勤務先が分からず
         Q176 は決まらない。応募メールだけでは、求人側の下限・優遇資格・ソフト名・
         提携船会社が分からず同様に決まらない。
       - Q177 は求人票の「6週間の照会期間」とメールの「4週間の予告期間」の両方が要る
         （長いほうが効くため。月曜始業の規則は曜日が本文に無く年に依存するため削除した）。
       - Q178・Q180 は求人票のみ、Q179 は応募メールのみで決まる単一文書の詳細設問。
     監査の是正（review-r4）：Q176 はメールの根拠文から「求人の下限を満たす」「優遇資格ではない」
     という結論そのものを消し事実だけにした。Q177 は月曜始業を削り照会期間を6週間・予告期間を
     4週間にして曜日非依存にした。Q180 は「研修を受けて昇格」から「6か月の考課で昇格」に変え、
     Aの部分的真を消した。 */
  mp({
    n: [176, 177, 178, 179, 180],
    lv: 4,
    docs: [
      {
        label: 'Web page', meta: 'Document 1',
        title: 'Warrendale Freight Forwarding — Import Documentation Clerk',
        body: [
          "We are looking for an Import Documentation Clerk to join our office team. Day to day, the postholder's central task is to keep clients up to date on the whereabouts of their shipments while goods sit in the warehouse or at the port awaiting onward transport.",
          { t: 'list', items: [
            'At least eighteen months spent handling import or export documentation, in any sector',
            'A certificate in international trade compliance from a recognised awarding body is an advantage, though not required',
            "Comfortable working with our documentation platform, Wintrace; anyone who hasn't used it before will be appointed one grade below the advertised level and regraded after a satisfactory six-month review",
            'Right to work in the country from the date of starting',
          ] },
          "You'll be tracking shipments carried mainly by our two regular ocean partners, Wintermere Line and Vasterling Shipping.",
          'Once you accept an offer, we ask for six weeks before you start, to allow time for reference, right-to-work and background checks.',
          'Send a covering letter and CV to hiring@warrendalefreight.com.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: hiring@warrendalefreight.com\nFrom: e.wexcombe@fastmail.com\nDate: 5 May\nSubject: Application — Import Documentation Clerk',
        body: [
          'Dear Hiring Team,',
          'I would like to apply for the Import Documentation Clerk post advertised for your office.',
          'For the past three years I have handled import documentation at Wrixham Forwarding, a freight-forwarding company.',
          'I also hold a certificate in supply chain management, if that is of interest.',
          "I've used Wintrace daily in my current role, so I would need no time at all to learn your systems.",
          'Before I hand in my notice, could you confirm whether the post would ever require me to work on a Saturday or Sunday? My childcare arrangement means I need to know that up front.',
          "I would need to give my current employer four weeks' notice once I accept an offer.",
          'My CV is attached.',
          'Kind regards,\nElena Wexcombe',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v6q176p', s: 'What is indicated about Ms. Wexcombe?',
        c: ["Her experience in the field is longer than the posting's minimum.",
            'A certificate she holds is one the posting lists as preferred.',
            'The software she has used differs from the one the posting names.',
            'She has worked for one of the carriers the posting mentions.'],
        a: 0,
        e: '求人の応募要件は「輸出入書類業務の経験が18か月以上、分野は問わない」。Wexcombeさんのメールは、貨物利用運送会社Wrixham Forwardingで3年間その業務を担当してきたと述べている。3年は18か月を上回るので、求人の下限より長い経験を持つ、が正しい。',
        w: ['正解。',
            '求人が優遇するとしているのは国際貿易コンプライアンスの認定資格。メールでWexcombeさんが保有すると述べているのはサプライチェーンマネジメントの資格で、求人が挙げる国際貿易コンプライアンスの資格ではない。',
            'メールに「現在の職場でもWintraceを日常的に使っているので、御社のシステムを覚える時間は要らない」とあり、求人が名指しするソフトウェアと同じものを使ってきたことになる。異なるという内容とは矛盾する。',
            '求人が挙げているのは輸送を担う船会社のWintermere LineとVasterling Shipping。メールでWexcombeさんが自分の勤務先として挙げているのは貨物利用運送会社のWrixham Forwardingで、いずれの船会社とも一致しない。'] },
      { tag: 'クロス', qid: 'v6q177p', s: "If Ms. Wexcombe accepts an offer and gives notice on the date of her e-mail, what is the earliest date she could start at Warrendale?",
        c: ['9 June', '16 June', '23 June', '30 June'],
        a: 1,
        e: '求人票は、内定承諾後に照会のため6週間を置くことを定めている。メールの日付は5月5日で、Wexcombeさんは現在の勤務先に4週間の予告が必要だと述べている。開始日を決めるのはこの2つのうち長いほうなので、6週間の照会期間のほうが効き、5月5日から6週間後の6月16日が最も早い開始日になる。',
        w: ['5月5日から5週間後の日付。4週間の予告期間（6月2日）とも、6週間の照会期間（6月16日）とも合わない。',
            '正解。',
            '5月5日から7週間後の日付。6週間・4週間のどちらとも、その和の10週間（7月14日）とも合わない。',
            '5月5日から8週間後の日付。6週間・4週間のどちらとも、その和の10週間（7月14日）とも合わない。'] },
      { tag: '詳細', qid: 'v6q178p', s: 'What does the job posting say the position mainly involves?',
        c: ['Preparing customs declarations for goods arriving by sea',
            "Checking suppliers' invoices against the goods received",
            'Keeping clients informed about where their cargo is held',
            'Filing the records of shipments once they are completed'],
        a: 2,
        e: '求人票は「日々の中心業務は、貨物が倉庫や港で次の輸送を待っている間、その所在について依頼主に最新情報を伝え続けることだ」としている。',
        w: ['税関申告書の作成には触れていない。',
            '仕入先の請求書と入荷物の照合には触れていない。',
            '正解。',
            '出荷完了後の記録のファイリングには触れていない。'] },
      { tag: '詳細', qid: 'v6q179p', s: 'What does Ms. Wexcombe ask the hiring team to confirm before she gives notice to her current employer?',
        c: ['Whether the contract would be permanent from the start',
            'Whether she could work from home on some days',
            'Whether help with moving costs would be available',
            'Whether weekend shifts would be part of her schedule'],
        a: 3,
        e: 'メールで「現在の職場に予告を出す前に、この職に週末シフトが含まれるかどうか確認してほしい。育児の都合で前もって知る必要がある」と述べている。',
        w: ['最初から正社員契約かどうかの確認は求めていない。',
            '在宅勤務の可否については触れていない。',
            '引っ越し費用の援助については触れていない。',
            '正解。'] },
      { tag: '詳細', qid: 'v6q180p', s: 'What does the job posting say happens if an applicant lacks experience with the named software platform?',
        c: ['They receive training on it during their first month.',
            'They join at a junior grade of the post.',
            'They sit a short practical exercise on it at interview.',
            'They describe a comparable system they know in their letter.'],
        a: 1,
        e: '求人票は「Wintraceの経験が無い応募者は、募集要項に示された等級より1段階下で採用され、6か月間の考課の結果が良好であれば昇格する」としている。',
        w: ['研修の実施については触れておらず、6か月間の考課を経て昇格するとしているだけである。',
            '正解。',
            '面接での実技試験には触れていない。',
            '応募書類で類似システムの経験を説明するようにとは求めていない。'] },
    ],
  }),

  /* ══ 181–185 ダブルパッセージ ══════════════════════
     先読み対策・第2案。飲食店向けの什器卸という場面（メインの修正）を保ち、本文は新規。
     文書を1つずつ隠すと：在庫・納期の案内だけでは発注数量が、発注メールだけでは在庫数・
     リードタイム・起算日の規則が分からないため、Q181・Q182・Q185 はいずれも両文書が要る。
     Q183 は案内のみ、Q184（推測）はメールのみで決まる単一文書の設問。
     監査の是正（review-r4）：棚のリードタイムを3週間→9週間にした。棚は在庫10台に対し
     発注6台で在庫の範囲内に収まり入荷待ちにならないため、Q181の合計・Q182の到着日は
     変わらないが、在庫表の中で最長のリードタイムを持つのが棚（9週間・非入荷待ち）になり、
     「表だけで最長行を選ぶ」だけではQ185が解けなくなった（発注数との照合が要る）。 */
  mp({
    n: [181, 182, 183, 184, 185],
    lv: 4,
    docs: [
      {
        label: 'Notice', meta: 'Document 1',
        title: 'Vantree Catering Supplies — Current Stock & Lead Times',
        body: [
          { t: 'table',
            head: ['Item', 'In stock (this week)', 'Lead time if backordered'],
            rows: [
              ['Stacking dining chairs', '6', '8 weeks'],
              ['Square café tables', '5', '5 weeks'],
              ['Upholstered bar stools', '9', '6 weeks'],
              ['Wall-mounted shelving units', '10', '9 weeks'],
            ] },
          'Stock figures are counted every Friday and reflect items physically on our premises. The price of each item is the same whether it ships immediately or after a wait.',
          'Lead time for a backordered item is counted from the day your countersigned quote reaches us, not from the date you submit your order.',
          'An order that combines in-stock and backordered items ships as a single delivery once the backordered portion arrives, unless split shipping is requested; in that case the in-stock portion ships immediately and the remainder follows separately.',
          'Deliveries are made by our own van fleet within a 50-kilometre radius of the warehouse; further afield we use a courier partner, which does not change the lead times shown above.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: orders@vantreecatering.com\nFrom: m.winlock@verrickskitchen.com\nDate: 30 January\nSubject: Order for Verrick\'s Kitchen',
        body: [
          'Hello,',
          "We used to order from Vantree for our first restaurant, years ago, before we switched suppliers; now that we're opening Verrick's Kitchen, we'd like to come back to you for this order.",
          'We need eight of the stacking dining chairs, nine of the square café tables, twelve of the upholstered bar stools, and six of the wall-mounted shelving units.',
          'We are placing this order today, and we will sign and return the quotation by 7 February.',
          "We would like everything to arrive together in a single delivery if at all possible — we don't have anywhere to store furniture that turns up before the rest.",
          'Our team moves into the new space on 15 April. Please let me know whether that timeline is realistic.',
          "Thank you,\nMarta Winlock\nVerrick's Kitchen",
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v6q181p', s: 'How many units will need to be backordered to complete this order?',
        c: ['2', '4', '6', '9'],
        a: 3,
        e: '在庫表と発注メールを照合すると、椅子は発注8脚に対し在庫6脚で2脚、テーブルは発注9台に対し在庫5台で4台、スツールは発注12脚に対し在庫9脚で3脚、それぞれ入荷待ちとなる。棚は在庫10台に対し発注6台で在庫の範囲内に収まり、入荷待ちは生じない。したがって入荷待ちの合計は2＋4＋3＝9台。',
        w: ['椅子1品目だけの入荷待ち数（2脚）で、注文全体の入荷待ち数ではない。',
            'テーブル1品目だけの入荷待ち数（4台）で、注文全体の入荷待ち数ではない。',
            '椅子とテーブルの入荷待ち数だけを合計した数（2＋4＝6）で、スツールの分（3脚）を数え忘れている。',
            '正解。'] },
      { tag: 'クロス', qid: 'v6q182p', s: 'Based on the dates given in the e-mail, by what date can the whole order be expected to arrive?',
        c: ['4 April', '11 April', '18 April', '25 April'],
        a: 0,
        e: '在庫表は「入荷待ち品のリードタイムは、注文日ではなく署名済みの見積書を返送してもらった日から起算する」と定めている。メールでは見積書を2月7日に返送するとしている。単一配送を希望しているため、到着日は入荷待ちとなる品の中で最も長くかかるものに合わせて決まる。入荷待ちとなる椅子（8週間）・テーブル（5週間）・スツール（6週間）のうち最長は椅子の8週間で、2月7日から8週間後は4月4日。',
        w: ['正解。',
            '入荷待ちにならない棚のリードタイム（9週間）を、椅子の8週間の代わりに使った場合に出やすい日付（2月7日＋9週間＝4月11日）。棚は在庫10台に対し発注6台で在庫の範囲内に収まり、入荷待ちが生じない。',
            '2月7日から10週間後の日付。表のどのリードタイム（5・6・8・9週間）とも合わない。',
            '2月7日から11週間後の日付。表のどのリードタイム（5・6・8・9週間）とも合わない。'] },
      { tag: '詳細', qid: 'v6q183p', s: 'According to the notice, what marks the start of the lead time for an item that is backordered?',
        c: ['The date the full payment is received', 'The date the purchase order is sent',
            'The date the deposit is received', 'The date the signed quotation is returned'],
        a: 3,
        e: '「入荷待ち品のリードタイムは、注文書を送った日ではなく、署名済みの見積書を返送してもらった日から起算する」と明記されている。',
        w: ['支払いの受領時期には触れていない。',
            '本文はむしろ「注文書を送った日ではない」と明記している。',
            '手付金の受領時期には触れていない。',
            '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v6q184p', s: "What is suggested about Ms. Winlock's history with Vantree Catering Supplies?",
        c: ['She currently orders from Vantree for another restaurant she runs.',
            'She has bought from Vantree once before, for a small item.',
            'She is ordering from Vantree for the first time.',
            'She left Vantree for another supplier some years ago.'],
        a: 3,
        e: 'メールで「以前、最初の店のときにVantreeから仕入れていたが、その後仕入先を変えた。Verrick’s Kitchenの開業にあたり、今回改めてVantreeに注文したい」と述べている。過去に取引があり、その後いったん離れて別の仕入先に移っていたことが読み取れる。',
        w: ['メールは現在ほかの店舗でVantreeから仕入れているとは述べておらず、むしろ一度離れたと述べている。',
            '「最初の店のとき」に仕入れていたとあり、単発の小さな買い物だったという内容は読み取れない。',
            'メールは「以前にも仕入れていた」と明記しており、今回が初めての取引だとする内容と矛盾する。',
            '正解。'] },
      { tag: 'クロス', qid: 'v6q185p', s: "Which item's stock level will determine when the whole order is delivered?",
        c: ['Wall-mounted shelving units', 'Square café tables', 'Upholstered bar stools', 'Stacking dining chairs'],
        a: 3,
        e: '今回の注文で入荷待ちとなるのは椅子（2脚）・テーブル（4台）・スツール（3脚）の3品目で、棚は在庫10台に対し発注6台で在庫の範囲内に収まり入荷待ちが生じない。単一配送である以上、到着日は実際に入荷待ちとなる品の中で最も長くかかるものに合わせて決まる。入荷待ちとなる3品目のリードタイムは椅子8週間・テーブル5週間・スツール6週間で、椅子が最も長い。在庫表では棚が9週間といちばん長いリードタイムを示しているが、棚は在庫が発注数を上回るため入荷待ちにならず、納期には影響しない。したがって、全体の到着日を左右するのは椅子の在庫水準である。',
        w: ['棚は発注6台に対し在庫10台で在庫の範囲内に収まり、入荷待ちが生じない（在庫表のリードタイム9週間は最長だが、入荷待ちにならないため納期には関係しない）。',
            'テーブルは入荷待ちとなるが、リードタイムは5週間で、椅子の8週間より短い。',
            'スツールは入荷待ちとなるが、リードタイムは6週間で、椅子の8週間より短い。',
            '正解。'] },
    ],
  }),

  /* ══ 186–190 トリプルパッセージ ════════════════════
     先読み対策・第2案。研修時間の要件通知＋会員からの確認メール＋事務局の返信、という
     場面を保ち、本文は新規。文書を1つずつ隠すと：通知だけでは会員本人の実績が、
     確認メールだけでは必須時間数・上限規則が分からないため Q186・Q187 は両方が要る。
     返信（文書3）には不足時間数を書かず（Q186 が文書3だけで解けるのを防ぐ）、
     提案する研修（Q189）にも時間数を書いていない（Q186 の答えと数字が一致して
     漏れるのを防ぐ）。Q188・Q190 は通知のみで決まる単一文書の設問。
     監査の是正（review-r4）：オンライン講座1件あたりの算入上限を6時間→3時間にし、
     Vantreyさんの Vehicle Safety Systems の報告を「11時間のオンライン講座＋対面の3時間の
     講習」に変えた（対面分は上限の対象外なので算入は3＋3＝6のまま、Q187 の答えは変わらない）。
     文書3は「2区分で不足」の `not one` を削って明示の否定を減らし、VSS 側の不足理由も
     具体的な時間数を出さずに一文で説明を足した。Q188 は「更新保留」「手数料なし」という
     誤答を消すためだけの一文を削った。固有名 Northfield は既存の別ファイルで使用済みのため
     Wellsgate に差し替えた。 */
  mp({
    n: [186, 187, 188, 189, 190],
    lv: 4,
    docs: [
      {
        label: 'Notice', meta: 'Document 1',
        title: 'Wexbridge Institute of Transport Professionals — Continuing Professional Development Requirements',
        body: [
          'Members must record at least 25 hours of continuing professional development (CPD) in the membership year ending 31 December, made up of at least 10 hours in Vehicle Safety Systems, at least 5 hours in Regulatory Compliance Updates, and the remainder in any category, including Driver Wellbeing, which counts as a recognised category for the first time this year.',
          'Hours from a single online course count toward the Vehicle Safety Systems minimum only up to 3 hours; any hours beyond 3 from the same course still count toward the overall 25-hour total.',
          'This requirement applies to all practising members, including those working part-time. Hours must be logged through the online CPD portal within 60 days of the activity to be counted.',
          'Members who have not logged the full requirement by 31 December move to probationary status; they then have until 31 March to make good the shortfall, which is kept separate from the following year’s new requirement.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: cpd@wexbridgeinstitute.org\nFrom: f.vantrey@winmarshhaulage.com\nDate: 18 November\nSubject: CPD hours — can you confirm my total?',
        body: [
          'Hello,',
          "Could you confirm whether I've met this year's CPD requirement before the year closes? Here is what I've logged so far.",
          "Vehicle Safety Systems: an 11-hour online course, 'Braking and Stability Systems,' and a 3-hour in-person workshop on trailer coupling checks in April.",
          "Regulatory Compliance Updates: a 4-hour online session, 'Recent Regulatory Amendments,' in June.",
          'Business Skills: a 9-hour project-management workshop in August.',
          'Driver Wellbeing: a 5-hour peer-support session in September.',
          "I'm also attending the Wellsgate Haulage Trade Conference next month, if that's any help.",
          "If I'm short anywhere, please let me know exactly which category, since I'd like to fix it before 31 December rather than wait for the probation period.",
          'Thank you,\nFarah Vantrey',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: f.vantrey@winmarshhaulage.com\nFrom: cpd@wexbridgeinstitute.org\nDate: 19 November\nSubject: RE: CPD hours — can you confirm my total?',
        body: [
          'Dear Ms. Vantrey,',
          'Thank you for logging your hours promptly.',
          "You're short of this year's requirement in two categories.",
          'For Regulatory Compliance Updates, the Wellsgate Haulage Trade Conference you mentioned has a recognised regulatory-update session in its programme; logging that, once you have your attendance certificate, should help close the gap in this category.',
          "In Vehicle Safety Systems, the limit on hours from a single online course means your course doesn't count in full toward the minimum for that category.",
          'If it would help, I can also send a reminder two weeks before the year-end deadline.',
          'Kind regards,\nCPD Team',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v6q186p', s: "How many additional hours of Regulatory Compliance Updates does Ms. Vantrey need to meet this year's requirement?",
        c: ['1', '2', '3', '4'],
        a: 0,
        e: 'Regulatory Compliance Updatesの必須時間数は文書1で5時間。Vantreyさんは文書2で6月に4時間出席したと報告しており、5－4＝1時間不足している。',
        w: ['正解。',
            'RCUの4時間のオンラインセッションにも、Vehicle Safety Systemsにだけ適用される単一オンライン講座の算入上限（3時間）を当てはめた場合の不足分（5－3＝2）。この上限はVehicle Safety Systemsの必須時間数に限った規定で、RCUの4時間はそのまま算入される。',
            'RCUの不足分ではなく、Vehicle Safety Systemsの単一のオンライン講座に適用される算入上限（3時間）の数値を、そのままRCUの不足分と取り違えた場合に出やすい数。',
            'Regulatory Compliance Updatesではなく、Vehicle Safety Systemsの不足分（必須10時間に対し算入6時間で4時間不足）。設問が尋ねているのはRCUの不足分である。'] },
      { tag: 'クロス', qid: 'v6q187p', s: 'How many of the hours Ms. Vantrey reports count toward the minimum for Vehicle Safety Systems?',
        c: ['6', '9', '11', '14'],
        a: 0,
        e: '文書1は「単一のオンライン講座がVehicle Safety Systemsの必須時間数に算入されるのは3時間まで」と定めている。文書2でVantreyさんがVehicle Safety Systemsとして挙げているのは、11時間のオンライン講座1件と、対面の3時間の講習1件。オンライン講座分は上限の3時間までしか算入されないが、対面の講習は単一のオンライン講座には当たらないため上限の対象外で、3時間がそのまま算入される。したがって算入されるのは3＋3＝6時間。',
        w: ['正解。',
            '文書2でBusiness Skillsとして報告されている9時間のワークショップの数値で、Vehicle Safety Systemsの算入時間ではない。',
            'オンライン講座の11時間を、上限を適用せずそのまま数えた数値で、対面の講習の3時間は含めていない。',
            'オンライン講座と対面の講習の時間をどちらも上限を適用せずに合計した数値（11＋3＝14）で、Vehicle Safety Systemsの算入時間ではなく、Vantreyさんが実際に費やした時間の合計である。'] },
      { tag: '詳細', qid: 'v6q188p', s: 'What happens to members who have not met the requirement by the year-end deadline?',
        c: ['Their membership is suspended from the start of the new year.',
            'They are given three more months to make up the hours.',
            "The missing hours are added to next year's total.",
            'A fee is charged when they renew their membership.'],
        a: 1,
        e: '「12月31日までに要件を満たしていない会員は仮資格（条件付きで資格を保つ状態。停止ではない）に移行し、3月31日までに不足分を解消する。これは翌年分の新しい要件とは別扱いとされる」と定めている。12月31日から3月31日までは3か月。',
        w: ['仮資格（条件付きで資格を保つ状態。停止ではない）に移行するとしており、新年の初めに資格が停止されるとは述べていない。',
            '正解。',
            '不足分は翌年の必須時間数とは別に解消するとしており、翌年分に繰り込まれるという内容とは矛盾する。',
            '更新時に手数料が発生するとは述べていない。'] },
      { tag: '詳細', qid: 'v6q189p', s: 'What does the Institute suggest Ms. Vantrey do about her Regulatory Compliance Updates hours?',
        c: ['Attend a live briefing that the Institute runs online',
            'Complete a self-study module with a short quiz',
            'Submit a record of a training day at her company',
            'Log the hours from a trade conference she will attend'],
        a: 3,
        e: '返信で「あなたが触れていたWellsgate Haulage Trade Conferenceのプログラムには、規制改正を扱う認定セッションが含まれており、出席証明を得たうえでこの区分に記録すれば不足を埋められるはずだ」と勧めている。',
        w: ['オンラインのライブ配信講習には触れていない。',
            '自習形式の講座には触れていない。',
            '自社での研修日の記録提出には触れていない。',
            '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v6q190p', s: 'What is suggested about the Driver Wellbeing category?',
        c: ['It became one of the categories this year.',
            'Its hours count toward the total up to a limit.',
            "Sessions in it need the Institute's approval in advance.",
            'Members can attend its sessions free of charge.'],
        a: 0,
        e: '文書1は「Driver Wellbeingは今年から新たに認定区分に加わった」と述べている。',
        w: ['正解。',
            '上限が定められているのは、単一のオンライン講座がVehicle Safety Systemsの必須時間数に算入される場合だけで、Driver Wellbeingに上限があるとは述べていない。',
            '事前承認が必要だとは述べていない。',
            '無料で参加できるとは述べていない。'] },
    ],
  }),

  /* ══ 191–195 トリプルパッセージ ════════════════════
     先読み対策・第2案。全面差し替え（旧版は191–195と196–200の間で装置が競合していたため、
     監査役の案どおり印刷の料金帯という新しい装置に組み替えた）。
     監査の是正（review-r4）：Q191 の設計上の問題（誤答がすべて「同じ帯の別の単価」で、
     料金表と4択だけから逆算すると正解の帯しか成立しなかった）を、メインの決定に従い
     料金表を「枚数の帯」から「用紙（Standard／Recycled）×仕上げ（Matt／Gloss）」の2×2に
     組み替えて解消した。4つの単価はどの組み合わせにも一対一で割り当てており、用紙単独・
     仕上げ単独のどちらでも安いほうを選ぶだけでは正解の帯（Recycled×Gloss＝$0.17）に
     たどり着けない（Standardでは Matt のほうが Gloss より安く、Recycledでは逆に Gloss の
     ほうが Matt より安いので、片方の属性だけを見ても価格は決まらない）。用紙は文書2、
     仕上げは文書3でそれぞれ1つずつ確定するため、Q191 は両文書が要る。
     文書を1つずつ隠すと：料金ページだけでは発注枚数・用紙・仕上げが、発注メールだけでは
     用紙は分かるが仕上げ・料金帯が、返信だけでは仕上げは分かるが用紙・枚数・料金帯が
     分からない。Q192 はターンアラウンドの規則（文書1）と、ファイルが届いた曜日（文書3）・
     発注メールの日付（文書2）の両方が要る（曜日は本文の「月曜日に届いた」という一文と
     文書2の日付から逆算する形にし、特定の年に依存しないようにした）。Q193 は料金ページのみ、
     Q194 は返信メールのみで決まる単一文書の設問。合計枚数は「部数×1点あたりのページ数」で
     出す形にし、単一の数値としては書いていない。 */
  mp({
    n: [191, 192, 193, 194, 195],
    lv: 4,
    docs: [
      {
        label: 'Web page', meta: 'Document 1',
        title: 'Wrenburn Print Solutions — Pricing and Submission Rules',
        body: [
          { t: 'table',
            head: ['Paper', 'Finish', 'Price per sheet'],
            rows: [
              ['Standard', 'Matt', '$0.19'],
              ['Standard', 'Gloss', '$0.21'],
              ['Recycled', 'Matt', '$0.23'],
              ['Recycled', 'Gloss', '$0.17'],
            ] },
          'Each combination of paper and finish has its own rate per sheet, as shown above. The total price is that rate multiplied by the total number of sheets we print, calculated as the number of copies multiplied by the number of pages in each copy.',
          'The price per sheet covers the printing itself and cutting each printed sheet down to the dimensions you specify. A printed proof, delivery to your premises (jobs can otherwise be collected from our counter), and a full check of your artwork’s content and colours are each available as separate paid add-ons.',
          'Standard turnaround is seven working days from the date we receive print-ready files.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: orders@wrenburnprint.com\nFrom: n.vantwerp@westhollowmarketing.com\nDate: 3 March\nSubject: Brochure order — Westhollow Marketing',
        body: [
          'Hello,',
          "We'd like 1,200 copies of our new company brochure, A5 size, three pages each, printed on your recycled stock, using the artwork files attached.",
          "We haven't decided between a matt and a gloss finish — could you recommend one?",
          'The brochure was designed for us by a freelance graphic designer, so if there are any questions about the artwork, we may need a day or two to check with her.',
          'Also, please make sure the invoice shows our current address, which is on the purchase order attached. We relocated across town last year, and some online directories still list our old one.',
          "Please let me know the price and the timeline once you've had a chance to look at the files.",
          'Thank you,\nNoor Vantwerp\nWesthollow Marketing',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: n.vantwerp@westhollowmarketing.com\nFrom: orders@wrenburnprint.com\nDate: 5 March\nSubject: RE: Brochure order — Westhollow Marketing',
        body: [
          'Dear Ms. Vantwerp,',
          "When your files first arrived on Monday, we noticed the artwork was laid out for A4 rather than the A5 size you'd ordered, so we asked you to resend.",
          'Thanks for sending the corrected files this morning — we can now book the job in.',
          "For the finish, we'd suggest gloss for a brochure like this, so we've gone ahead with that.",
          "We'll send the invoice to the address on your purchase order.",
          'The order confirmation, with the price and the date the job will be ready, is attached.',
          'Kind regards,\nWrenburn Print Solutions',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v6q191p', s: 'What will Wrenburn Print Solutions charge for the Westhollow job?',
        c: ['$612', '$684', '$756', '$828'],
        a: 0,
        e: '文書2によれば注文は1,200部・各3ページのブローシュアで、用紙は再生紙（recycled stock）を使うとしている。仕上げについては文書2の時点では未定だが、文書3で光沢（gloss）仕上げを提案し、それを採用したとしている。印刷枚数の合計は1,200×3＝3,600枚。文書1の料金表で「再生紙×光沢」の単価は1枚$0.17なので、3,600×$0.17＝$612。',
        w: ['正解。',
            '「標準紙×つや消し」の単価$0.19を使った場合の額（3,600×$0.19＝$684）。用紙・仕上げのどちらも今回の注文とは異なる。',
            '「標準紙×光沢」の単価$0.21を使った場合の額（3,600×$0.21＝$756）。仕上げは光沢で合っているが、用紙を再生紙ではなく標準紙と取り違えている。',
            '「再生紙×つや消し」の単価$0.23を使った場合の額（3,600×$0.23＝$828）。用紙は再生紙で合っているが、仕上げを光沢ではなくつや消しと取り違えている。'] },
      { tag: 'クロス', qid: 'v6q192p', s: 'By what date should Ms. Vantwerp expect the finished job to be ready?',
        c: ['14 March', '18 March', '21 March', '25 March'],
        a: 0,
        e: '文書1は「通常の納期は、印刷可能な状態のファイルを受け取った日から7営業日」と定めている。文書3は、最初のファイルが月曜日に届いたとしており、文書2の日付が3月3日であることと合わせると、3月3日が月曜、返信の日付である3月5日は水曜とわかる。修正済みのファイルはこの3月5日の朝に届いたとあるので、この日を起点に7営業日を数える。3月5日の翌営業日から数えて7営業日目にあたるのは3月14日（金曜）。',
        w: ['正解。',
            '3月5日から9営業日後の日付で、7営業日の規定より遅い。',
            '3月5日から12営業日後の日付で、7営業日の規定より遅い。',
            '3月5日から14営業日後の日付で、7営業日の規定より遅い。'] },
      { tag: '詳細', qid: 'v6q193p', s: 'According to the Web page, what does the price per sheet include?',
        c: ['One printed proof for the whole job', 'Delivery to addresses within the city',
            'Trimming each sheet to its finished size', 'A check of the artwork files before printing'],
        a: 2,
        e: '文書1は「1枚あたりの料金には印刷そのものと、指定した寸法までの断裁が含まれる」とし、「校正刷り・お客様先への配送（それ以外は集荷カウンターでの受け取り）・原稿内容や色の全面チェックはいずれも別料金の追加サービスとして提供する」としている。',
        w: ['校正刷りは別料金の追加サービスだと明記されている。',
            '配送は、お客様先への配送であれば別料金で、それ以外は集荷カウンターでの受け取りだと述べている。市内かどうかという区別には触れていない。',
            '正解。',
            '原稿内容や色の全面チェックは別料金の追加サービスだと明記されている。'] },
      { tag: '詳細', qid: 'v6q194p', s: "What does Wrenburn's reply say about the files Ms. Vantwerp sent?",
        c: ['Some of the images in them are too low in resolution.',
            'Their colour settings suit screens rather than printed paper.',
            'The page size in them differs from the size ordered.',
            'They are in a format the press has to convert first.'],
        a: 2,
        e: '返信で「届いた原稿はA5で発注されているのにA4のレイアウトになっていたため、再送を依頼した」と述べている。',
        w: ['画像の解像度については触れていない。',
            '色の設定については触れていない。',
            '正解。',
            'ファイル形式の変換については触れていない。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v6q195p', s: 'What is suggested about Westhollow Marketing?',
        c: ['Wrenburn has printed jobs for it in the past.', 'It needs the items for a trade show.',
            'Its offices moved to a new building last year.', 'Designers on its own staff produced the artwork.'],
        a: 2,
        e: '発注メールで「昨年、町の反対側に移転しており、一部のオンラインディレクトリにはまだ旧住所が載っている」と述べ、請求書には発注書記載の現在の住所を使うよう念を押している。',
        w: ['Wrenburnとの過去の取引の有無には触れていない。',
            '展示会への言及はない。',
            '正解。',
            'ブローシュアのデザインは外部のフリーランスデザイナーに依頼したと明記されており、自社デザイナーが手がけたという内容とは矛盾する。'] },
    ],
  }),

  /* ══ 196–200 トリプルパッセージ ════════════════════
     先読み対策・第2案。リコール通知＋店舗向け手順メモ＋店舗からの報告メール、という場面は
     保ち、品目を携帯コンロに変更、本文は新規。文書を1つずつ隠すと：報告メールだけでは対象の
     連番範囲が、通知だけでは点検で見つかった連番が分からず Q196 は両方が要る。Q199 も、客の持込品の
     連番（文書3）と、対象範囲内の返金規定（文書1・文書2）の両方が要る。メールには連番を
     並べ、台数そのものは書いていない。Q197・Q198・Q200 は単一文書で決まる詳細設問。
     監査の是正（review-r4）：Q197 は対象範囲の境界（対象は4月22日製造分まで）と設計変更の
     導入日（`introduced that date`＝4月22日）が矛盾していたため、設計変更の導入日を
     4月23日に直した。原因の記述もQ197の選択肢と逐語一致していたため言い換えた。
     Q198 は「範囲外の製品を陳列に戻さない」という、Aを消すためだけの否定文を削り、
     肯定文（別箱にまとめて移送する）だけで足りる形にした。Q196 の why B（誤答「3」）を、
     「FS140-3で始まる連番だけを数えた」という具体的な取り違えの説明に書き直した。
     固有名 Briony は既存の別ファイル（Part 3）の人物と重複していたため Wilma に差し替えた
     （頭文字は W のまま）。 */
  mp({
    n: [196, 197, 198, 199, 200],
    lv: 4,
    docs: [
      {
        label: 'Notice', meta: 'Document 1',
        title: 'Wexmoor Outdoor Equipment — Voluntary Recall Notice: Portable Camping Stove, Model FS-140',
        body: [
          'We are recalling portable camping stoves, Model FS-140, with serial numbers between FS140-30000 and FS140-42999, manufactured between 3 November last year and 22 April this year.',
          'In a small number of units within this range, the valve that controls the gas flow can jam if the stove is lit again before it has cooled, which can cause a delay before the burner catches or, in rare cases, a brief flare-up.',
          'Units with serial numbers outside this range, and all FS-140 units manufactured after 22 April, are not affected; a design change introduced on 23 April resolved the issue.',
          'Customers with an affected unit should stop using it and may return it to any Verrow Outdoor Retail store for a refund or a replacement of a different model. Where the customer can show proof of purchase, we will process a full refund; without proof of purchase, we can only offer a replacement.',
          'Customers can also check their own serial number against the recalled range using the lookup tool on our support pages, which will remain posted until the recall is closed.',
        ],
      },
      {
        label: 'Memo', meta: 'Document 2',
        title: 'Verrow Outdoor Retail — In-Store Procedure for the FS-140 Recall',
        body: [
          { t: 'ol', items: [
            'Remove all FS-140 stock from display and check the serial number printed on the base of each unit against the recalled range, FS140-30000 to FS140-42999.',
            'Units within that range: place in the marked return bin for collection; do not return them to display or resell them.',
            'Units outside that range: box these separately for transfer. Head office is currently redistributing surplus stock to branches that are running low, and the courier collecting the recalled units will also take these.',
            'Customers presenting an FS-140 for return: check the serial number the same way. If it falls within the recalled range, follow the manufacturer’s notice — a refund with proof of purchase, or a replacement without. If it falls outside the range, the recall does not apply, and this store’s standard return policy governs instead: returns are accepted only within 30 days of purchase and only with a receipt.',
            'Log every check, whether the unit is within range or not, on the attached inventory sheet so head office can confirm the store has completed it.',
          ] },
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: safety@wexmoorequipment.com\nFrom: w.winmore@verrowoutdoor.com\nDate: 6 May\nSubject: FS-140 recall — stock check and a customer return',
        body: [
          'Hello,',
          'We completed the stock check this morning. We had seven FS-140 units in the store; serial numbers were FS140-31200, FS140-33450, FS140-41800, FS140-43700, FS140-29950, FS140-38810, and FS140-42500.',
          'A customer also brought in her FS-140 today, serial number FS140-36700, and is asking for a refund.',
          'Could you confirm what we should ask her for before we process it?',
          "We've also sent an e-mail to every customer on record as having purchased an FS-140 from us, letting them know about the recall and how to check their own serial number.",
          'Thanks,\nWilma Winmore\nVerrow Outdoor Retail',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v6q196p', s: "How many of the stoves found during the store's stock check fall within the recalled serial range?",
        c: ['1', '3', '5', '7'],
        a: 2,
        e: 'リコール対象の連番範囲は文書1でFS140-30000からFS140-42999。文書3が報告する在庫点検時の7台の連番のうち、この範囲に入るのはFS140-31200・33450・41800・38810・42500の5台。範囲外は下限未満のFS140-29950と上限超のFS140-43700の2台。',
        w: ['在庫点検で見つかった7台のうち、範囲内に入るのは1台だけではない。実際は5台（FS140-31200・33450・41800・38810・42500）が範囲内に入る。',
            'FS140-3で始まる3台（31200・33450・38810）だけを数えた数。上限はFS140-42999なので、41800・42500も範囲内に入る。',
            '正解。',
            '在庫点検で見つかった台数の総数（7台）で、範囲外の2台（FS140-29950・43700）まで範囲内に含めてしまった数。'] },
      { tag: '詳細', qid: 'v6q197p', s: 'What is given as the cause of the issue described in the notice?',
        c: ['A handle that can come loose after a few months of use',
            'A gas valve that can stick when relit while still hot',
            'A fuel line that can crack from long exposure to heat',
            'An ignition switch that can corrode after exposure to damp air'],
        a: 1,
        e: '「対象範囲内の一部の製品では、まだ熱いうちに再点火するとガスバルブが固着することがあり、バーナーの着火が遅れたり、まれに炎が一瞬大きくなったりすることがある」と明記されている。',
        w: ['取っ手の破損には触れていない。',
            '正解。',
            '燃料ラインのひび割れには触れていない。',
            '点火スイッチの腐食には触れていない。'] },
      { tag: '詳細', qid: 'v6q198p', s: 'What should staff do with stoves whose serial numbers fall outside the recalled range?',
        c: ['Put them back on display for sale as usual',
            'Keep them in the stockroom until head office confirms',
            "Send them on to the chain's regional warehouse",
            'Transfer them to a branch that needs more stock'],
        a: 3,
        e: 'メモは「対象範囲外の製品は、本社が在庫の少ない店舗へ余剰在庫を回しているところなので、移送用に別箱にまとめておき、回収対象の製品を引き取る配送業者に一緒に回収させる」と定めている。',
        w: ['メモは、範囲外の製品を移送用に別箱にまとめるとしており、通常どおり陳列に戻すという内容とは両立しない。',
            '本社の確認を待って在庫室に留め置くとは述べていない。',
            '系列の地域倉庫に送るとは述べていない。',
            '正解。'] },
      { tag: 'クロス', qid: 'v6q199p', s: 'Will the store need to see a receipt before refunding the stove the customer brought in?',
        c: ["No, because her stove's serial number is within the recalled range.",
            'No, because her purchase is on record through her loyalty card.',
            "Yes, because her stove's serial number is outside the recalled range.",
            'Yes, because the notice makes refunds depend on proof of purchase.'],
        a: 3,
        e: '文書3によれば、客が持ち込んだ製品の連番はFS140-36700で、文書1が示すリコール対象範囲（FS140-30000〜FS140-42999）内にある。文書1・文書2はいずれも、対象範囲内の製品でも返金には購入証明が要り、証明があれば全額返金、無ければ交換のみと定めている。したがって返金を受けるには購入証明の提示が必要になる。',
        w: ['対象範囲内であることは、証明なしで返金できることを意味しない。文書1・文書2はむしろ、対象範囲内の製品でも返金には購入証明が要ると定めている。',
            'ポイントカードによる購入記録には触れていない。文書3の on record は、店が購入記録のある客にメールを送ったという話で、この客の購入が記録にあるかどうかは述べていない。',
            'FS140-36700は上限のFS140-42999を超えておらず、対象範囲外ではない。',
            '正解。'] },
      { tag: '詳細', qid: 'v6q200p', s: "What does Ms. Winmore say the store has done in addition to the stock check?",
        c: ['Posted a notice about the recall beside the tills',
            'E-mailed customers who bought the stove through the store',
            'Set up a separate counter for recall returns',
            'Briefed weekend staff on how to handle returns'],
        a: 1,
        e: 'メールの末尾で「この店でFS-140を購入した記録のある客全員にメールを送り、リコールと連番の確認方法を知らせた」と述べている。',
        w: ['レジ脇への掲示には触れていない。',
            '正解。',
            '回収専用のカウンター設置には触れていない。',
            '週末スタッフへの説明には触れていない。'] },
    ],
  }),
];
