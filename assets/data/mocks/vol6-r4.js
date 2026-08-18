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

  /* ══ 176–180 ダブルパッセージ ══════════════════════ */
  /* 2026-08-18 の一括照合で、応募要件の1項目を書き換えた。
     旧版「A minimum of two years in work that involved dealing with the public, in any sector」は
     drills/reading3.js の u-p7s-12（Client Support Specialist (Bilingual) — Marlow & Kent Logistics）の
     「At least two years in a customer-facing role, in any industry」の逐語的な言い換えで、
     年数・「業種は問わない」という但し書きまで一致していた。No.176 はこの下限との比較で解く設問なので、
     ドリルを解いた学習者は求人票を読まずに下限を持ち込めた。年数と職務の書き方を替えてある。
     （求人票＋応募メールという組み合わせ自体は TOEIC の定型なので残す。他の3項目——遅番、
     チケッティングシステム、就労資格——は既に別内容になっている。） */
  mp({
    n: [176, 177, 178, 179, 180],
    docs: [
      {
        label: 'Web page', meta: 'Document 1',
        title: 'Verhoeven Language Bureau — Bookings Coordinator, Ghent Office',
        body: [
          'We are recruiting one Bookings Coordinator to take scheduling calls and written requests in English and in at least one of French, Spanish, or Portuguese, at a standard suitable for settling deadlines over the telephone.',
          { t: 'list', items: [
            'Eighteen months or more of front-desk or switchboard work; the field it was in does not matter',
            'Able to cover two late shifts a week, staffing the desk until 20:00',
            'Familiarity with a ticketing system such as Ticketra or Deskmark counts in your favour but is not essential — we train on ours',
            'Applicants must already be entitled to work in Belgium; we cannot arrange a work permit for this post',
          ] },
          'Send a short covering note with your CV to hiring@verhoevenbureau.be.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: hiring@verhoevenbureau.be\nFrom: a.moretti@fastmail.com\nDate: 14 February\nSubject: Application — Bookings Coordinator',
        body: [
          'Dear Hiring Team,',
          'I would like to be considered for the Bookings Coordinator post advertised for your Ghent office.',
          'For the past three years I have run the front desk of a veterinary practice, dealing with owners in person and over the phone all day.',
          'Spanish and Italian are both first languages for me — I grew up between Seville and Turin — and I read English at university.',
          'Late shifts are not a problem on most days, but Thursdays are fixed: I collect my son from a music lesson that ends at 19:45.',
          'I have never worked in Ticketra or Deskmark, but I did spend about a year on a comparable ticketing system, Casewell, in my previous post.',
          'I already hold a Belgian residence card that carries the right to work without restriction, so no permit would need to be arranged.',
          'My CV is attached.',
          'Kind regards,\nAlba Moretti',
        ],
      },
    ],
    q: [
      { tag: 'クロス', s: "What is indicated about Ms. Moretti?",
        c: ['She has less experience dealing with the public than the posting requires.',
            'She has more experience dealing with the public than the minimum the posting states.',
            'She has no experience with any ticketing system.',
            'She does not have the right to work in Belgium.'],
        a: 1,
        e: '求人の応募要件は「受付または電話交換の実務が18か月以上、分野は問わない」。Morettiさんのメールでは、動物病院の受付を3年間担当し、対面と電話の両方で飼い主に対応してきたと述べている。3年は求人の下限である18か月を上回る。',
        w: ['実際には求人の下限（18か月）よりメールの実績（3年）の方が長く、逆の内容。', '正解。',
            'メールでは同種のチケッティングシステムであるCasewellを1年ほど使った経験があると述べており、「経験が全く無い」という記述と矛盾する。',
            'メールでは制限なく働ける権利を伴うベルギーの在留カードを保持していると明記されており、矛盾する。'] },
      { tag: 'クロス', s: "Which language will most likely allow Ms. Moretti to satisfy the language requirement in the posting, in addition to English?",
        c: ['Spanish', 'French', 'Portuguese', 'Italian'],
        a: 0,
        e: '求人はEnglishに加えてFrench・Spanish・Portugueseのいずれかを電話でのやり取りに十分な水準で扱えることを求めている。メールでMorettiさんが挙げている言語はSpanishとItalianの2つだが、求人の対象言語リストに含まれるのはSpanishだけで、Italianはリストに無い。',
        w: ['正解。', 'メールにFrenchへの言及は無い。', 'メールにPortugueseへの言及は無い。',
            'Italianは第一言語だと述べているが、求人が挙げる対象言語（French・Spanish・Portuguese）に含まれない。'] },
      { tag: '詳細', s: "What does Ms. Moretti say limits her availability for late shifts?",
        c: ['A part-time class she attends herself on weekday evenings', 'A second job that runs until 21:00',
            'A journey home that takes over an hour', 'A fixed commitment on Thursday evenings'],
        a: 3,
        e: '「木曜日は決まっていて、19時45分に終わる息子の音楽のレッスンの迎えがある」と述べている。',
        w: ['自分自身が通う講座ではなく、息子の迎えだと述べている。', '副業には触れていない。', '帰宅にかかる時間には触れていない。', '正解。'] },
      { tag: '詳細', s: "What does the job posting say is helpful but not essential for applicants?",
        c: ['Fluency in a fourth language', 'Prior experience working late shifts',
            'Familiarity with a ticketing system such as Ticketra or Deskmark', 'A university degree in a related field'],
        a: 2,
        e: '「Ticketra や Deskmark のようなチケッティングシステムに慣れていれば評価されるが必須ではなく、自社のシステムは研修で教える」と明記されている。',
        w: ['第4言語には触れていない。', '遅番の勤務経験そのものは要件として挙げられていない。求人が求めているのは週2回の遅番に入れることであって、その経験ではない。', '正解。', '学位の要件には触れていない。'] },
      { tag: '詳細', s: "What does Ms. Moretti state about her entitlement to work in Belgium?",
        c: ['She is currently applying for a work permit.', 'She holds a residence card that allows her to work without restriction.',
            'She would need the company to arrange a work permit for her.', 'She has dual citizenship in Belgium and Italy.'],
        a: 1,
        e: '「制限なく働ける権利を伴うベルギーの在留カードを既に保持しているため、就労許可を手配する必要はない」と述べている。',
        w: ['申請中とは述べていない。既に在留カードを保持している。', '正解。', '就労許可の手配は不要だと明記しており、矛盾する。', '二重国籍には触れていない。'] },
    ],
  }),

  /* ══ 181–185 ダブルパッセージ ══════════════════════ */
  /* 2026-08-18 の一括照合で、No.181 の stem が「1600mm standing desks」と品目名を直書きしており、
     No.185（正解: Standing desk, 1600mm）を文書を読まずに解ける状態だったため是正した。
     stem から品目名を外し「How many units …」に一般化（EC-4チェアは在庫9台=注文9台で入荷待ちが
     生じないため、答えの5は変わらない。ただし解説は両品目を確認する記述に更新した）。
     あわせて No.182 の stem も「backordered desks」→「backordered items」に変え、品目カテゴリ
     （デスクだと確定できる情報）が先に漏れないようにした。182・183・184 は他に品目名を含まないことを確認済み。 */
  mp({
    n: [181, 182, 183, 184, 185],
    docs: [
      {
        label: 'Notice', meta: 'Document 1',
        title: 'Bramfield Office Supplies — Current Stock & Lead Times',
        body: [
          { t: 'table',
            head: ['Item', 'In stock (this week)', 'Lead time if backordered'],
            rows: [
              ['Ergonomic desk chair (EC-4)', '9', '3 weeks'],
              ['Standing desk, 1200mm', '4', '5 weeks'],
              ['Standing desk, 1600mm', '3', '6 weeks'],
              ['Filing cabinet, 3-drawer', '15', '2 weeks'],
            ] },
          'Stock figures are counted every Friday and reflect items physically on our premises. The price of each item is the same whether it ships immediately or after a wait.',
          'Lead time for a backordered item is counted from the date we receive payment in full, not from the date the order is placed.',
          'An order that combines in-stock and backordered items ships as a single delivery once the backordered portion arrives, unless split shipping is requested; in that case the in-stock portion ships immediately and the remainder follows separately.',
          'Deliveries are made by our own van fleet within a 50-kilometre radius of the warehouse; further afield we use a courier partner, which does not change the lead times shown above.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: orders@bramfieldoffice.com\nFrom: o.faulkner@redbournelegal.com\nDate: 3 September\nSubject: Furniture order — new office',
        body: [
          'Hello,',
          "This is our first order with Bramfield, so please flag anything else you need from us to get it processed smoothly.",
          'We are opening a new office and need to place an order today: eight of the 1600mm standing desks and nine of the EC-4 ergonomic chairs.',
          'Our accounts team can release payment on 15 September, once the current invoicing cycle closes.',
          "We would like everything to arrive together in a single delivery if at all possible — we don't have anywhere to store furniture that turns up before the rest, so multiple deliveries would be difficult for us.",
          'Our team moves into the new space on 3 November. Please let me know whether that timeline is realistic.',
          "We're also considering a follow-up order for the reception area once this one is confirmed.",
          'Thank you,\nOwen Faulkner\nRedbourne Legal Partners',
        ],
      },
    ],
    q: [
      { tag: 'クロス', s: "How many units will need to be backordered to complete this order?",
        c: ['3', '5', '8', '11'],
        a: 1,
        e: 'Mr. Faulknerはこの注文で1600mm規格のスタンディングデスクを8台、EC-4チェアを9台注文している。文書1の在庫表によれば、EC-4チェアは在庫9台で注文数と一致するため入荷待ちは生じない。1600mmデスクは在庫3台なので、8－3＝5台が入荷待ちとなる。したがって、この注文全体で入荷待ちとなるのは1600mmデスクの5台のみ。',
        w: ['1600mmデスクの在庫台数（3台）そのもので、注文数から差し引く前の数値。', '正解。', '1600mmデスクの注文台数（8台）そのもので、在庫分（3台）を差し引いていない。',
            '注文台数と在庫台数を誤って合算した数（8＋3＝11）。'] },
      { tag: 'クロス', s: "Based on the payment date given in the e-mail, by what date can the backordered items be expected to arrive?",
        c: ['6 October', '15 October', '20 October', '27 October'],
        a: 3,
        e: '1600mmデスクの入荷待ちのリードタイムは6週間で、文書1により起算日は支払いが完了した日。Faulkner氏のメールでは支払いは9月15日に行われる予定なので、9月15日から6週間後の10月27日が到着見込み日になる。',
        w: ['支払日（9月15日）にチェア（EC-4）のリードタイムである3週間を誤って適用した日付（9月15日＋3週間＝10月6日）。',
            '支払日ではなく注文提出日（9月3日）を起算日と誤って用いた場合の日付（9月3日＋6週間＝10月15日）。',
            '支払日（9月15日）に1200mmデスクのリードタイムである5週間を誤って適用した日付（9月15日＋5週間＝10月20日）。',
            '正解。'] },
      { tag: '詳細', s: "What does the notice say determines when the lead time for a backordered item begins?",
        c: ['The date payment is received in full', 'The date the order is placed',
            "The date the item is restocked at the supplier's main warehouse", "The date the customer confirms the delivery address"],
        a: 0,
        e: '「入荷待ち品のリードタイムは、注文日ではなく、支払いを全額受領した日から起算する」と明記されている。',
        w: ['正解。', '本文はむしろ「注文日ではない」と明記している。', '本社倉庫での再入荷日には触れていない。', '配送先住所の確認日には触れていない。'] },
      { tag: '推測', t: ['p7inf'], s: "What is suggested about Mr. Faulkner's dealings with Bramfield Office Supplies?",
        c: ['He has placed several orders with the company before.', 'He has already settled the invoice for this order.',
            "He has visited the company's warehouse in person.", 'He is not yet familiar with what the company asks of a new customer.'],
        a: 3,
        e: 'メールの冒頭で「Bramfieldへの発注は今回が初めてなので、手続きが滞りなく進むよう、他に必要なものがあれば知らせてほしい」と書いている。取引が初めてで、相手が新規顧客に何を求めるかをまだ把握していないことが読み取れる。',
        w: ['メールの冒頭で「Bramfieldへの発注は今回が初めてだ」と述べており、矛盾する。',
            '支払いは9月15日に処理する予定だと述べており、まだ支払いは済んでいない。',
            '倉庫を訪ねたという記述は無い。', '正解。'] },
      { tag: 'クロス', s: "Which item's stock level will determine when the whole order is delivered?",
        c: ['Ergonomic desk chair (EC-4)', 'Standing desk, 1200mm', 'Standing desk, 1600mm', 'Filing cabinet, 3-drawer'],
        a: 2,
        e: 'Faulkner氏は単一配送を希望している。注文に含まれる品目（1600mmデスクとEC-4チェア）のうち、在庫表で在庫が不足し入荷待ちになるのは1600mmデスクだけ（在庫3台に対し注文8台）。EC-4チェアは在庫9台で注文9台とちょうど足りる。単一配送である以上、全体の到着日は最も遅い品目、すなわち1600mmデスクの入荷待ち分で決まる。',
        w: ['在庫9台に対し注文も9台で、入荷待ちは生じない。', 'メールの注文品目は1600mm規格のデスクとEC-4チェアの2点だけで、1200mm規格のデスクは注文されていない。', '正解。', 'メールの注文品目は1600mm規格のデスクとEC-4チェアの2点だけで、書類キャビネットは注文されていない。'] },
    ],
  }),

  /* ══ 186–190 トリプルパッセージ ════════════════════ */
  /* 2026-08-18 の一括照合で、No.189 の正解選択肢が「a 3-hour Regulatory Update webinar」と
     時間数を含んでおり、No.186（Regulatory Updateの不足時間＝3）の答えが選択肢の文面から
     透けていたため、選択肢から「3-hour」を外した（文書3の他の記述と照合しても、この選択肢は
     依然として一意に正解として特定できる）。 */
  mp({
    n: [186, 187, 188, 189, 190],
    docs: [
      {
        label: 'Notice', meta: 'Document 1',
        title: 'Federation of Property Assessors — Continuing Professional Development Requirements',
        body: [
          'Members must record at least 30 hours of continuing professional development (CPD) in the membership year ending 31 December, made up of at least 12 hours in Technical Practice, at least 7 hours in Regulatory Update, and the remainder in any category, including Business Skills.',
          'Hours from a single online course count toward the Technical Practice minimum only up to 8 hours; any hours beyond 8 from the same course still count toward the overall 30-hour total.',
          'This requirement applies to all practising members, including those working part-time. Hours must be logged through the online CPD portal within 60 days of the activity to be counted.',
          'Members who have not met the requirement by 31 December are placed on probationary status and must complete the shortfall by 31 March, or renewal is suspended.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: cpd@propertyassessors.org\nFrom: f.chowdhury@bexleighassessment.com\nDate: 18 November\nSubject: CPD hours — can you confirm my total?',
        body: [
          'Hello,',
          "Could you confirm whether I have met this year's CPD requirement before the year closes? Here is what I have logged so far.",
          "Technical Practice: a 14-hour online course, 'Foundation Assessment Methods,' plus a 3-hour in-person seminar, 'Defect Diagnosis on Site.'",
          'Regulatory Update: a 4-hour session I attended in June.',
          'Business Skills: a 5-hour negotiation workshop in August.',
          'If I am short anywhere, please let me know exactly which category, since I would like to fix it before 31 December rather than wait for the probation period.',
          'I keep the attendance certificates for all of these on file, in case anything needs to be checked.',
          'Thank you,\nFarida Chowdhury',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: f.chowdhury@bexleighassessment.com\nFrom: cpd@propertyassessors.org\nDate: 19 November\nSubject: RE: CPD hours — can you confirm my total?',
        body: [
          'Dear Ms. Chowdhury,',
          'Thank you for logging your hours promptly.',
          'You are short in two categories, not one, and the totals are related: closing both would also close your overall shortfall.',
          "There is a 3-hour Regulatory Update webinar on 12 December titled 'Recent Amendments to Assessment Standards.' Attending that alone would not fully resolve things, but it is the fastest single session we currently have listed before the year closes.",
          'If it would help, I can also send a reminder two weeks before the year-end deadline.',
          'Kind regards,\nCPD Team',
        ],
      },
    ],
    q: [
      { tag: 'クロス', s: "How many additional hours of Regulatory Update does Ms. Chowdhury need to meet this year's requirement?",
        c: ['1', '2', '3', '4'],
        a: 2,
        e: 'Regulatory Updateの必須時間数は文書1で7時間。Chowdhuryさんは文書2で6月に4時間出席したと報告しており、7－4＝3時間不足している。',
        w: ['Technical Practiceの不足分（必須12時間に対し算入11時間で1時間不足）で、Regulatory Updateの不足分ではない。',
            'Regulatory Updateの必須7時間と実績4時間の差は3時間であり、2時間ではない。', '正解。',
            '全体（30時間枠）の不足分（合計26時間で4時間不足）で、Regulatory Update単独の不足分ではない。'] },
      { tag: 'クロス', s: "How many of the hours Ms. Chowdhury reports count toward the 12-hour Technical Practice minimum?",
        c: ['8', '11', '14', '17'],
        a: 1,
        e: '文書1は「単一のオンライン講座がTechnical Practiceの必須時間数に算入されるのは8時間まで」と定めている。文書2でChowdhuryさんがTechnical Practiceとして挙げているのは14時間のオンライン講座と3時間の対面セミナー。オンライン講座は8時間までしか算入されないので、8＋3＝11時間が必須時間数に算入される。',
        w: ['オンライン講座の上限（8時間）だけを数え、3時間の対面セミナーを加えていない数値。',
            '正解。',
            'オンライン講座の14時間をそのまま数えた数値で、8時間という上限を適用しておらず、対面セミナーの3時間も加えていない。',
            '14時間と3時間をそのまま合算した数値（14＋3＝17）で、オンライン講座の8時間という上限を適用していない。'] },
      { tag: '詳細', s: "What happens to members who have not met the CPD requirement by 31 December?",
        c: ['Their membership is cancelled immediately.', 'They are charged a late fee equal to the shortfall in hours.',
            'They are given an additional 30 hours to complete by the following June.', 'They are placed on probationary status and must complete the shortfall by 31 March.'],
        a: 3,
        e: '「12月31日までに要件を満たしていない会員は保留資格となり、3月31日までに不足分を解消しなければ更新が停止される」と明記されている。',
        w: ['即時の資格取消しとは述べていない。', '延滞金には触れていない。', '追加で30時間、6月まで、という規定は無い。', '正解。'] },
      { tag: '詳細', s: "What does the CPD Team recommend to Ms. Chowdhury?",
        c: ['Attending a Regulatory Update webinar on 12 December', 'Repeating the online course she already completed',
            'Submitting a written appeal to waive the shortfall', "Transferring hours from next year's requirement"],
        a: 0,
        e: '返信メールで「12月12日に3時間のRegulatory Update ウェビナーがあり、それだけでは全て解消しないが、年内に組める最速の1件だ」と勧めている。',
        w: ['正解。', '同じ講座の再受講は勧めていない。', '免除の申立てには触れていない。', '翌年からの繰り越しには触れていない。'] },
      { tag: '推測', t: ['p7inf'], s: "What is suggested about the Business Skills category?",
        c: ['It requires more hours than Technical Practice.', "It was removed from this year's requirement.",
            'It does not have its own minimum hour requirement.', 'It cannot include a negotiation workshop.'],
        a: 2,
        e: '文書1は必須時間数を明記しているのはTechnical Practice（12時間）とRegulatory Update（7時間）の2区分だけで、残りは「Business Skillsを含むどの区分でもよい」としている。特定の下限が定められていないことが読み取れる。',
        w: ['文書1はTechnical Practiceに12時間という下限を定める一方、Business Skillsには下限を定めていない。「Technical Practiceより多くの時間を要する」という記述は本文に無い。',
            '文書1はBusiness Skillsを「残りの時間を充てられる区分」として現に挙げており、今年度の要件から外したとは述べていない。', '正解。',
            '文書2でChowdhuryさんは5時間の交渉ワークショップをBusiness Skillsとして計上し、文書3の事務局もその計上を前提に不足分を計算しているので、矛盾する。'] },
    ],
  }),

  /* ══ 191–195 トリプルパッセージ ════════════════════ */
  /* 2026-08-18 の再監査で全面差し替え。旧版（会議の参加登録）は 181–185 と同じ装置——
     「起点になるのは書類の日付ではなく入金日」——で作られており、しかも同じ誤答
     （申込書・注文書の日付を起算日に使ってしまう）を置いていた。同じ巻で2回になるため、
     こちらの計算の軸を日付から外し、「料金帯を決めるのは届いた数ではなく実際に試験する数」
     という数量の閾値に組み替えた。文書・設問とも全面的に書き直し、設問 id も新規採番している。
     2026-08-18 のレビューで、さらに2点直した。
     (1) No.192 は文書1だけで解けていた。証明に関する規定が「排水計画書」ひとつしか無く、
         文書2を読まなくても他の3択が消えて当たってしまう。文書1の規定を池の種類で2分岐にし
         （屋根の雨水だけの池＝流入口の写真／舗装ヤードの表面水も受ける池＝排水計画書）、
         誤答に前者の要件を置いた。文書2の「工場棟の屋根と舗装ヤードの両方」を読まないと
         どちらの分岐か決まらない。
     (2) No.193 は4択のうち正解だけが and で結ぶ複合構造だった（CLAUDE.md の既知の書き癖）。
         誤答Dを同じ「標準パネル＋α」の形に替えて、形だけで正解が浮かないようにした。
     2026-08-18 の再々監査で、(1) の直しがまだ閉じていないことが分かり文書1を1文だけ直した。
     旧文「Testing proceeds without the document, but the results cannot be certified …」は、
     定冠詞の the document が直前の the site drainage plan しか受けられず、
     「証明に関わる書類＝排水計画書」と文書1だけで読めてしまう（写真の分岐には証明の話が付いて
     いなかった）。証明の条件を「その池に求められる方の書類」と両分岐に対称に掛け直したので、
     文書1だけでは A（排水計画書）と B（流入口の写真）が 50/50 のまま残り、
     文書2の「屋根と舗装ヤードの両方」を読んで初めて決まる。あわせて文書2を
     「Each of the ponds takes run-off from …」に変え、「一部の池は屋根だけ」という分配読みで
     誤答B（流入口の写真）も必要になる余地を消した。 */
  mp({
    n: [191, 192, 193, 194, 195],
    docs: [
      {
        label: 'Web page', meta: 'Document 1',
        title: 'Cranmore Analytical Services — Sediment Testing: Charges and Submission Rules',
        body: [
          { t: 'table',
            head: ['Samples tested in one submission', 'Charge per sample'],
            rows: [
              ['1–9', '$46'],
              ['10–24', '$38'],
              ['25 or more', '$31'],
            ] },
          'A submission is everything that reaches us under a single job number. The band above is fixed by the number of samples we test, not by the number that arrive.',
          'Every sample is moisture-checked on arrival. Samples above the limit cannot be run: they go back untested, are not charged for, and are left out of the count that fixes the band. Returned samples are held at reception for fourteen days, then disposed of.',
          'The charge per sample covers the standard panel and one summary report for the job. Individual data sheets are charged separately. Submitters arrange delivery; we do not collect.',
          'Where a pond is fed by roof water alone, a photograph of the inlet is all we need. Where a pond also takes run-off from a paved yard, the site drainage plan must accompany the submission instead. Testing proceeds either way, but the results can be certified for a regulatory filing only where the item required for that pond, whether the photograph or the drainage plan, has been supplied.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: reception@cranmoreanalytical.com\nFrom: h.brekkan@winsdaleaggregates.com\nDate: 9 February\nSubject: Sediment samples from the Winsdale ponds',
        body: [
          'Hello,',
          'Our driver is bringing twenty-six sediment samples this afternoon, all from the settling ponds at the Winsdale site and all under one job number.',
          'Each of the ponds takes run-off from the workshop roofs and from the paved yard where the loading shovels stand.',
          'The figures are for our discharge consent renewal, which the regulator will not process without certified results.',
          'Could you confirm what the job will come to?',
          'Many thanks,\nHedda Brekkan\nEnvironmental Officer, Winsdale Aggregates',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: h.brekkan@winsdaleaggregates.com\nFrom: o.sowande@cranmoreanalytical.com\nDate: 10 February\nSubject: RE: Sediment samples from the Winsdale ponds',
        body: [
          'Dear Ms. Brekkan,',
          'The samples reached us safely. Two were above the moisture limit and cannot be run; those two are on the shelf here for your driver. The rest are booked in as job CR-3318.',
          'Your delivery note lists the ponds as P1 to P4, but the tubs carry only dates. I have logged them by date so that testing can start on schedule. If you need the results broken down by pond, send me a list matching dates to ponds.',
          'One further point: individual data sheets have to be asked for before the report is signed off; they cannot be added afterwards.',
          'Kind regards,\nOttilie Sowande\nSample Reception, Cranmore Analytical Services',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v6q191r', s: 'What will Cranmore Analytical Services charge for the Winsdale job?',
        c: ['$744', '$806', '$912', '$988'],
        a: 2,
        e: '文書2でBrekkanさんは26点を1つのジョブ番号で送ると述べている。文書3によれば、そのうち2点は水分量が上限を超えて試験できず、返却されている。文書1は「返却された試料は課金せず、料金帯を決める数にも入れない」と定めているので、課金の対象は24点。24点は表の「10–24」の帯に入るから1点あたり$38で、24×$38＝$912となる。',
        w: ['料金帯を「届いた26点」で判定して「25 or more」の$31を当てはめ、課金は24点で計算した額（24×$31＝$744）。文書1は帯を決めるのは実際に試験する数だと明記している。',
            '届いた26点を、帯の判定にも課金する点数にもそのまま使った額（26×$31＝$806）。試験できなかった2点は帯の判定からも課金からも外れる。',
            '正解。',
            '帯は正しく$38を取りながら、返却された2点まで課金してしまった額（26×$38＝$988）。文書1は返却された試料は課金しないと定めている。'] },
      { tag: 'クロス', qid: 'v6q192r', s: 'What will Winsdale Aggregates have to provide if the results are to be certified?',
        c: ['A drainage plan for the site',
            'A photograph of the pond inlet',
            'Moisture readings taken before dispatch',
            'A separate job number for each pond'],
        a: 0,
        e: '文書1は池の種類で2つに分けている。屋根の雨水だけを受ける池なら流入口の写真、舗装ヤードからの表面水も受ける池なら敷地の排水計画書を提出物に添える必要があり、その池に求められる方が添えられていなければ結果を規制当局への届出用に証明できない。文書2でBrekkanさんは「どの池も工場棟の屋根と、積込機の置かれた舗装ヤードの表面水を受けている」と述べているので後者に当たり、必要なのは排水計画書。どちらの分岐に当たるかは文書2を読まないと決まらない。',
        w: ['正解。',
            '文書1が流入口の写真で足りるとしているのは「屋根の雨水だけを受ける池」の場合。文書2は池が舗装ヤードの表面水も受けていると述べており、この条件に当たらない。',
            '文書1によれば水分量の測定は受入時に試験所側が全点について行う。提出者が測って添えるという規定はない。',
            '文書1は「1つのジョブ番号でまとめて届いたもの全体が1件の提出である」と定めており、池ごとに番号を分けるという規定はない。文書3も残りをまとめて1件（CR-3318）として登録している。'] },
      { tag: '詳細', qid: 'v6q193r', s: 'According to the Web page, what does the charge per sample include?',
        c: ['Collection of the samples from the submitter’s site',
            'The standard panel and one summary report',
            'Individual data sheets for every sample tested',
            'The standard panel and a set of data sheets'],
        a: 1,
        e: '文書1に「1点あたりの料金には標準パネルの試験と、そのジョブ1件分の要約報告書が含まれる」と明記されている。',
        w: ['文書1は「配送は提出者が手配する。当社は集荷しない」と明記しており、矛盾する。',
            '正解。',
            '文書1は個票（individual data sheets）を別料金と明記しており、1点あたりの料金には含まれない。',
            '標準パネルは含まれるが、個票一式は別料金である。文書1が1点あたりの料金に含めているのは、標準パネルと、そのジョブ1件分の要約報告書だけ。'] },
      { tag: '詳細', qid: 'v6q194r', s: 'What does Ms. Sowande say about the individual data sheets?',
        c: ['They are sent automatically with the summary report.',
            'They are available only where a report is certified.',
            'They are issued two weeks after the summary report.',
            'They must be requested before the report is signed off.'],
        a: 3,
        e: '文書3の末尾に「個票は報告書が承認される前に依頼しておく必要があり、承認されたあとには追加できない」とある。',
        w: ['文書3は「報告書が承認される前に依頼しておく必要がある」と明記しており、依頼なしに自動で付くという内容と矛盾する。',
            '証明付きの報告書に限るという条件は文書3のどこにも述べられていない。',
            '文書3は「報告書が承認されたあとには追加できない」と述べており、あとから出るという内容と矛盾する。',
            '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v6q195r', s: 'What is suggested about the results as the samples are currently logged?',
        c: ['They will be delayed until the labelling is corrected.',
            'They will not show which pond each sample came from.',
            'They will be grouped by pond rather than by date.',
            'They will have to be checked against the delivery note by the client.'],
        a: 1,
        e: '文書3によれば、納品書には池がP1からP4と記されているのに、容器そのものには日付しか書かれていない。Sowandeさんは日付で登録したと述べ、池ごとに分けた結果が必要なら日付と池の対応表を送るよう求めている。裏返せば、対応表が届かない限り、報告書は各試料がどの池のものかを示さないことになる。',
        w: ['文書3は「試験を予定どおり始められるよう日付で登録した」と述べており、遅れるという内容と矛盾する。',
            '正解。',
            '文書3は「日付で登録した」と明記しており、池ごとにまとめるという内容と矛盾する。池ごとに分けた結果が要るなら、日付と池の対応表を送る必要がある。',
            '納品書との照合を客に求める記述はない。求められているのは、日付と池の対応表を送ることである。'] },
    ],
  }),

  /* ══ 196–200 トリプルパッセージ ════════════════════ */
  /* 2026-08-18 の一括照合で、旧版のNo.200「店舗の在庫について何が示唆されるか」（正解:
     大半が販売できなくなる）が、No.196（対象範囲内の台数＝5）と同じ「6台中5台が対象範囲内」
     という事実の言い換えに過ぎず、どちらか一方の答えが分かればもう一方も絞れる状態だったため、
     No.200 を別の事実（新規入荷品の確認手順を変更したこと。文書3の末尾）を問う設問に差し替えた。
     正解位置（index 0）は変更していないが、正解の中身が変わったため id を新規採番した
     （qid: 'v6q200r'）。196・197・198・199 は互いに独立した事実を問うており、この重複は無いことを確認済み。 */
  mp({
    n: [196, 197, 198, 199, 200],
    docs: [
      {
        label: 'Notice', meta: 'Document 1',
        title: 'Halvern Home Appliances — Voluntary Recall Notice: Countertop Kettle, Model CK-210',
        body: [
          'We are recalling countertop kettles, Model CK-210, with serial numbers between CK210-40000 and CK210-52999, manufactured between 12 October last year and 19 April this year.',
          'In a small number of units within this range, the base connector can overheat if the kettle is boiled more than fifteen times in quick succession without a cooling break.',
          'Units with serial numbers outside this range, and all CK-210 units manufactured after 19 April, are not affected; a design change introduced on 20 April resolved the issue.',
          'Customers with an affected unit should stop using it and may return it to any Halvern retail partner for a full refund or a replacement of a different model. No receipt is required for a return under this notice.',
          'Customers can also check their own serial number against the recalled range using the lookup tool on our support pages, which will remain posted until the recall is closed.',
        ],
      },
      {
        label: 'Memo', meta: 'Document 2',
        title: 'Halvern Retail Partners — In-Store Procedure for the CK-210 Recall',
        body: [
          { t: 'ol', items: [
            'Remove all CK-210 stock from display and check the serial number printed on the base of each unit against the recalled range, CK210-40000 to CK210-52999.',
            'Units within that range: place in the marked return bin for collection; do not return them to display or resell them.',
            'Units outside that range: return to display and mark them as checked on the inventory sheet.',
            "Customers presenting a CK-210 for return: check the serial number the same way. If it falls within the recalled range, process a refund or replacement per the notice, and no receipt is required. If it falls outside the range, the recall does not apply, and this store's standard return policy governs instead — returns are accepted only within 30 days of purchase and only with a receipt.",
            'Log every check, whether the unit is within range or not, on the attached inventory sheet so head office can confirm the store has completed it.',
          ] },
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: safety@halvernappliances.com\nFrom: r.attah@kelbrookhomegoods.com\nDate: 6 May\nSubject: CK-210 recall — stock check and a customer return',
        body: [
          'Hello,',
          'We completed the stock check this morning. We had six CK-210 units in the store: five have serial numbers in the 46000s, and one is CK210-53100.',
          "A customer also brought in her CK-210 today, serial number CK210-51500. She bought it about four months ago and does not have the receipt. She's asking for a refund.",
          "Could you confirm we're handling both situations correctly before we finish for the day?",
          "We've also updated our shelf signage to note that any new CK-210 stock should be checked immediately on delivery, not just when a customer asks.",
          'Thanks,\nRuth Attah\nKelbrook Home Goods',
        ],
      },
    ],
    q: [
      { tag: 'クロス', s: "How many of the six CK-210 units found in the store fall within the recalled serial range?",
        c: ['1', '4', '5', '6'],
        a: 2,
        e: 'リコール対象の連番範囲は文書1でCK210-40000からCK210-52999。文書3によれば店舗にあった6台のうち5台は46000番台で範囲内、残り1台のCK210-53100は52999を超えるため範囲外。したがって範囲内は5台。',
        w: ['範囲外だった台数（CK210-53100の1台）で、範囲内の台数ではない。',
            '文書3が範囲内の台数として挙げているのは46000番台の5台であり、4台という数値は文書3のどの記述からも出てこない。', '正解。',
            '店舗にあった台数の総数（6台）で、CK210-53100の1台を範囲内と誤って数えた場合の値。この番号は上限のCK210-52999を超えている。'] },
      { tag: '詳細', s: "What is given as the cause of the CK-210 issue?",
        c: ['A cracked plastic handle that can break under normal use', 'A power cord that was manufactured with the wrong wire gauge',
            'A water reservoir that can leak onto the base while boiling', 'A base connector that can overheat after repeated use without a cooling break'],
        a: 3,
        e: '「冷却の間隔を空けずに15回を超えて連続で沸かすと、ベース部のコネクタが過熱することがある」と明記されている。',
        w: ['ハンドルの破損には触れていない。', 'コードの線材には触れていない。', '水漏れには触れていない。', '正解。'] },
      { tag: '詳細', s: "What should staff do with CK-210 units whose serial numbers fall outside the recalled range?",
        c: ['Return them to display and mark them as checked on the inventory sheet', 'Place them in the marked return bin along with the affected units',
            'Send them back to Halvern for inspection regardless', 'Offer customers a discount if they choose to buy one'],
        a: 0,
        e: '「対象範囲外の製品は、陳列に戻し、在庫確認表にチェック済みと記録する」と明記されている。',
        w: ['正解。', '返品ビンに入れるのは範囲内の対象製品だけ。', '一律の本社送り返しは指示されていない。', '値引き販売には触れていない。'] },
      { tag: 'クロス', s: "Will the store need to see a receipt before refunding the kettle the customer brought in?",
        c: ["Yes, because her purchase falls outside the standard 30-day return window.", "No, because her kettle's serial number falls within the recalled range.",
            'No, because the notice requires a replacement rather than a refund.', 'Yes, because her serial number falls outside the recalled range.'],
        a: 1,
        e: '文書3によれば、客が持ち込んだ製品の連番はCK210-51500で、文書1が示すリコール対象範囲（CK210-40000〜CK210-52999）内にある。文書2は、対象範囲内の製品には通常の店舗方針（30日以内・レシート必須）ではなくリコール通知の規定が適用され、レシートは不要だと定めている。',
        w: ['30日以内・レシート必須という規定は、文書2により対象範囲外の製品にのみ適用される通常方針であり、この客の製品には当てはまらない。', '正解。',
            '文書1は「全額返金または別モデルへの交換」としており、交換に限定していない。', 'CK210-51500は40000から52999の範囲内にあり、範囲外ではない。'] },
      { tag: '詳細', qid: 'v6q200r', s: "What does Ms. Attah say the store has changed about handling new CK-210 stock?",
        c: ["It will check new stock's serial numbers immediately upon delivery.", 'It will stop ordering the CK-210 model altogether.',
            'It will post the recall notice next to all new stock.', 'It will wait for a customer to ask before checking new stock.'],
        a: 0,
        e: '文書3の末尾で「新しく届くCK-210の在庫は、客に聞かれたときだけでなく、入荷した時点ですぐに確認するよう、陳列棚の表示を更新した」と述べている。',
        w: ['正解。', 'CK-210の発注を取りやめるとは述べていない。', '新規入荷品の脇にリコール通知を掲示するとは述べていない。',
            '文書3はむしろ「客に聞かれたときだけでなく」入荷時点で確認すると述べており、客の申し出を待つという内容と正反対。'] },
    ],
  }),
];
