/* =============================================================
   drills/context.js — Part 6（長文穴埋め）論点ドリル
   文脈接続語 / 文脈依存の時制 / 文挿入 / 結束性
   文書中の {{1}}〜{{4}} は「このユニットの何問目か」を表す。
   ============================================================= */

export const UNITS = [

  /* ── 1. 社内通知：文脈接続語と時制 ─────────────────── */
  {
    id: 'u-p6c-01', part: 6, kind: 'doc', level: 4, docCount: 1,
    topics: ['connect', 'ctense'],
    docs: [{
      label: 'Notice', meta: 'Internal',
      head: 'TO: All Kettleworth Building Occupants\nFROM: Facilities Management\nDATE: 14 March\nRE: Elevator Modernization',
      body: [
        'Beginning Monday, 24 March, the two passenger elevators in the east lobby {{1}} a six-week modernization program. During this period, only the freight elevator at the rear of the building will be available for general use.',
        'We recognize that this will cause inconvenience, particularly during the morning arrival period. {{2}}, we have arranged for the stairwell doors on floors two through six to remain unlocked between 7:30 A.M. and 9:30 A.M.',
        '{{3}} Anyone requiring assistance should contact the facilities desk at extension 4400 at least one business day in advance.',
        'The upgraded cars will be quieter, roughly 30 percent faster, and {{4}} with the building access-card system, eliminating the need for a separate lobby check-in.',
      ],
    }],
    questions: [
      { id: 'p6c-01-1', topics: ['ctense'],
        choices: ['underwent', 'undergoing', 'has undergone', 'will undergo'],
        answer: 3,
        exp: 'ヘッダの日付は 3 月 14 日、本文は「3 月 24 日から」と未来の予定を述べている。したがって未来形。文書の日付と本文の時を表す語句を必ず結び付けるのが Part 6 の鉄則。',
        why: ['過去形。24 日はまだ来ていない。',
              '分詞。述語動詞にならない。',
              '現在完了。すでに完了した意味になり矛盾する。',
              '正解。Beginning 24 March という未来の起点に対応。'],
        vocab: [['undergo', '（工事などを）受ける'], ['occupant', '入居者']] },

      { id: 'p6c-01-2', topics: ['connect'],
        choices: ['Nevertheless', 'Similarly', 'Otherwise', 'Accordingly'],
        answer: 3,
        exp: '前文で「特に朝の時間帯に不便をかける」と問題を認め、後続文でその対応策（階段を開放する）を述べている。原因→対応の因果関係なので Accordingly「それに応じて」。',
        why: ['逆接の Nevertheless は、前件から期待される帰結を後件が否定する関係を要求する。ここでは前件（不便をかける）が後件（階段を開放する）を妨げず、むしろ促す関係なので、逆接は成立しない。',
              '「同じように」。並列を表し、対応策の導入には合わない。',
              '「さもなければ、その点を除けば」（apart from that）。この語義で読んでも、後続文の 7:30–9:30 A.M. は前文の the morning arrival period そのものであり、「それ以外の点では」という除外が指す対象が無く成立しない。',
              '正解。前文を受けた対応を導く。'],
        vocab: [['stairwell', '階段室'], ['accordingly', 'それに応じて']] },

      { id: 'p6c-01-3', topics: ['p6ins'],
        choices: [
          'Residents will be notified once a new contractor has been selected, a decision the board expects to make in April.',
          'Parking permits must be renewed at the security office each January.',
          'The lobby renovation was completed ahead of schedule last autumn.',
          'Tenants who use mobility aids may request an escort to the freight elevator.',
        ],
        answer: 3,
        exp: '直後の文が「支援が必要な方は内線 4400 へ」と続く。Anyone requiring assistance の assistance を先に導入している選択肢が入る。(D) は移動支援具の利用者に付き添いを申し込める旨を述べており、次文と自然につながる。',
        why: ['業者選定の話題は本文に存在しないうえ、工事は3月24日開始とすでに確定しており、業者選定を4月に控えているという時系列は冒頭の記述と矛盾する。',
              '駐車許可証は本通知の主題と無関係。',
              '過去の改修の話で、この段落の趣旨から外れる。',
              '正解。次文の「支援が必要な方は」に直接つながる。'],
        vocab: [['mobility aid', '移動支援具'], ['escort', '付き添い']] },

      /* id は p6c-01-4r（誤答を差し替えたため新規採番）。旧誤答 integrate（原形）は
         will be [quieter], [faster], and [integrate with ...] という will 共有の等位構造で
         読めてしまい、integrate with に自動詞用法があるため第二の正解になっていた。
         3人称単数現在形 integrates に替えることで、will の直後（原形要求）にも
         単独の述語（主語 Panels＝cars は複数で数が一致しない）にも立てない形にした。 */
      { id: 'p6c-01-4r', topics: ['pos', 'cohesion'],
        choices: ['integrates', 'integration', 'integrating', 'integrated'],
        answer: 3,
        exp: 'will be [quieter], [roughly 30 percent faster], and [------- with ...] と、will be を共有する3つの補語が and で並んでいる。等位接続詞 and は同じ範疇の要素どうしを結ぶので、比較級の形容詞2つと並ぶ空所には形容詞相当の語＝過去分詞 integrated が入る。be integrated with「〜と統合されている」。',
        why: ['3人称単数現在形。主語 cars は複数なので数が一致しない。will と共有する述語として読むにしても、will の直後は原形でなければならず（will integrate であって will integrates ではない）、この位置には二重に立たない。',
              '無冠詞の抽象名詞。quieter / faster という形容詞2つと and で等位接続できない。',
              '現在分詞。will be integrating と切り離して読めば未来進行形として作れる形だが（integrate with は自動詞用法があるので「何かを統合する」意味にはならない）、その場合 quieter / faster という形容詞2つと範疇が異なり、and による等位接続が成立しない。',
              '正解。quieter / faster と同じ範疇（形容詞相当）で並ぶ補語。'],
        vocab: [['integrate A with B', 'A を B と統合する'], ['eliminate', 'なくす']] },
    ],
  },

  /* ── 2. 顧客宛メール：結束性と語彙 ─────────────────── */
  {
    id: 'u-p6c-02', part: 6, kind: 'doc', level: 5, docCount: 1,
    topics: ['cohesion', 'connect'],
    docs: [{
      label: 'E-mail',
      head: 'To: h.varga@meridianprint.co.uk\nFrom: service@bellamyinks.com\nDate: 2 October\nSubject: Your recent order (#88214)',
      body: [
        'Dear Ms. Varga,',
        'Thank you for your order of twelve cartridges of Bellamy Archival Black. Unfortunately, our warehouse team has discovered that the batch reserved for you does not meet our viscosity standard. We have therefore {{1}} the shipment rather than send you material we cannot stand behind.',
        'A replacement batch is scheduled to leave our Dover facility on 9 October. {{2}} arrangement means your order will arrive roughly one week later than originally quoted.',
        '{{3}} As a gesture of apology, we have credited your account with £40, which will be applied automatically to your next invoice.',
        'If the revised timeline does not work for your production schedule, please reply to this message and we will {{4}} the order in full, no questions asked.',
        'With apologies,\nDeclan Moore\nCustomer Service, Bellamy Inks',
      ],
    }],
    questions: [
      { id: 'p6c-02-1', topics: ['biz'],
        choices: ['expedited', 'endorsed', 'duplicated', 'withheld'],
        answer: 3,
        exp: '「基準を満たさない」→「保証できない品を送るくらいなら」という文脈から、出荷を「差し止めた」。withhold「保留する、差し控える」。',
        why: ['「早める」。基準未達を発見した直後の行動として矛盾する。',
              '「支持する、裏書きする」。',
              '「複製する」。文意が通らない。',
              '正解。「差し止める」。'],
        vocab: [['withhold', '差し控える'], ['stand behind', '（品質を）保証する']] },

      { id: 'p6c-02-2', topics: ['cohesion'],
        choices: ['Any', 'Another', 'This', 'Each'],
        answer: 2,
        exp: '直前の文で述べた「9 日に代替ロットを出荷する」という取り決めを指している。既出の内容を受ける This が入る。指示語が何を指すかを前文に求めるのが結束性の要点。',
        why: ['不特定を表し、前文の特定の取り決めを指せない。',
              '「もう一つの」。別の取り決めが存在する前提になる。',
              '正解。前文の内容を受ける。',
              '「それぞれの」。複数の取り決めが必要。'],
        vocab: [['quote', '（納期・価格を）提示する']] },

      { id: 'p6c-02-3', topics: ['p6ins'],
        choices: [
          'We understand that this delay may affect your own commitments.',
          'Please confirm your delivery address before we dispatch the goods.',
          'Our Dover facility has operated continuously since 1974.',
          'Archival Black is also available in a matte finish.',
        ],
        answer: 0,
        exp: '直後が「お詫びのしるしとして 40 ポンドを口座に入金した」と続く。お詫びに至る前提として「遅延がお客様の予定に影響することを理解している」が入る。次文の As a gesture of apology と論理的につながるのはこれだけ。',
        why: ['正解。次文の「お詫びとして」に自然につながる。',
              '住所確認の依頼は、直後のお詫びの入金と論理がつながらない。',
              '工場の沿革は謝罪の文脈から外れる。',
              '別仕様の宣伝は謝罪メールの流れを断ち切る。'],
        vocab: [['commitment', '（果たすべき）予定・約束']] },

      { id: 'p6c-02-4', topics: ['biz'],
        choices: ['refund', 'reimburse', 'restore', 'retain'],
        answer: 0,
        exp: 'refund the order「注文分を全額返金する」。reimburse は「（人に）払い戻す」で、目的語は通常「人」または「費用」。ここでは目的語が the order なので refund。',
        why: ['正解。refund + 金額・注文。',
              'reimburse は reimburse you / reimburse the cost の形を取る。',
              '「復元する」。返金の意味はない。',
              '「保持する」。文意が逆。'],
        vocab: [['refund', '返金する'], ['in full', '全額']] },
    ],
  },

  /* ── 3. 記事：時制と接続語 ─────────────────────────── */
  {
    id: 'u-p6c-03', part: 6, kind: 'doc', level: 5, docCount: 1,
    topics: ['ctense', 'connect'],
    docs: [{
      label: 'Article',
      title: 'Harbour Line Extension Opens Ahead of Schedule',
      head: 'PORT ANNESLEY — 3 June',
      body: [
        'The long-awaited Harbour Line extension {{1}} to passengers last Saturday, four months earlier than the timetable published when construction began in 2021.',
        'Transit authority director Nuala Byrne credited the early completion to a decision made midway through the project. Rather than building the two tunnel sections consecutively, crews worked on both simultaneously. {{2}} the approach required a second boring machine, it removed nearly five months from the critical path.',
        'Ridership in the first four days exceeded projections by a wide margin. {{3}}',
        'The authority now expects the line to carry 41,000 passengers on an average weekday by the end of its first year — a figure it had not expected {{4}} until 2027.',
      ],
    }],
    questions: [
      { id: 'p6c-03-1', topics: ['ctense'],
        choices: ['opens', 'has opened', 'opened', 'will open'],
        answer: 2,
        exp: '同じ文中の last Saturday という明確な過去の時点があるので過去形。',
        why: ['現在形。過去の出来事を表せない。',
              '現在完了は明確な過去時点を表す語句と併用できない。',
              '正解。last Saturday に対応する過去形。',
              '未来形。すでに開業している。'],
        vocab: [['long-awaited', '待望の'], ['timetable', '工程表']] },

      /* id は p6c-03-2r（誤答を差し替えたため新規採番）。本文は HEAD の文言に戻した
         （前回追加した「2回故障し中断した」という関係詞節は、内容が背景化されるだけで
         Because の因果読みを閉じられなかったため）。HEAD からは選択肢が2本変わっている
         ——(A) は接続詞 Because から前置詞句 Because of に、(C) は接続詞 Whereas から
         副詞 Meanwhile に、いずれも前回の巡で差し替え済み。(A) は後続が〈主語+動詞〉の
         節であることから構造的に閉じ、(C) は接続詞ではない副詞なので、コンマだけで
         2つの節をつなぐ形（コンマ・スプライス）になり構造的に閉じている。 */
      { id: 'p6c-03-2r', topics: ['connect', 'conjprep'],
        choices: ['Because of', 'Unless', 'Meanwhile', 'Although'],
        answer: 3,
        exp: '空所の後ろは the approach required a second boring machine という〈主語+動詞〉の完全な節。節を導けるのは接続詞であり、前置詞（句）は節を取れない。Because of は前置詞句なので不可。Unless に過去形を続ける用法は反復可能な機会を量化する型で、一度限りの決定を条件づけられない。Meanwhile は副詞で接続詞ではないため、コンマだけで2つの節をつなぐ形（コンマ・スプライス）になる。残る Although が、2台目の掘削機を要したという不利な事実にもかかわらず工期を5か月縮めたという対比を表す、節を導ける譲歩の接続詞。',
        why: ['前置詞句。後ろに〈主語+動詞〉の節を取れない。the approach required a second boring machine は完全な節であり、前置詞句 Because of には接続できない。',
              '「〜でない限り」という条件を表す接続詞。Unless に過去形を続ける形は、Unless it rained, we ate outside.（雨が降らない限り外で食べた）のように反復可能な機会を量化する用法で使うのが基本だが、the approach required a second boring machine は一度限りの特定の決定であり、量化できる反復機会がない。この1回きりの過去の事実を条件づけるには Unless the approach had required …, it would not have removed … のような仮定法過去完了が要る。',
              '副詞であり接続詞ではない。従属節を主節に接続する働きを持たず、コンマだけで2つの節をつなぐ形（コンマ・スプライス）になってしまう。',
              '正解。不利な事実（2台目の掘削機を要したこと）にもかかわらず工期を縮めたという対比を表す、節を導ける譲歩の接続詞。'],
        vocab: [['boring machine', '掘削機'], ['critical path', '（工程の）クリティカルパス']] },

      { id: 'p6c-03-3', topics: ['p6ins'],
        choices: [
          'Fares on the extension will remain unchanged through the end of the year.',
          'The original tunnel design was rejected by the planning committee.',
          'On Monday alone, the three new stations recorded 26,000 boardings.',
          'Ms. Byrne has led the transit authority since 2019.',
        ],
        answer: 2,
        exp: '直前が「最初の 4 日間の乗客数が予測を大幅に上回った」という概括。段落を締めるには、それを裏づける具体的な数値が続くのが自然。(C) が月曜日の実数を示している。',
        why: ['運賃の話は乗客数の裏づけにならない。',
              '設計案の却下は、乗客数の段落と無関係。',
              '正解。前文の概括を具体的な数字で支える。',
              '人物の経歴は、この段落の主題から外れる。'],
        vocab: [['boarding', '乗車（人数）'], ['by a wide margin', '大差で']] },

      { id: 'p6c-03-4', topics: ['vform'],
        choices: ['reaching', 'having reached', 'reached', 'to reach'],
        answer: 3,
        exp: 'expect O to do の O が関係詞化して前に出た形。a figure (which) it had not expected to reach until 2027「2027 年まで到達するとは見込んでいなかった数字」。expect は O の後ろに to 不定詞だけを取る動詞である点が決め手。',
        why: ['動名詞。expect は動名詞を目的語に取らない。',
              '完了分詞。expect の後ろに置けない。',
              '過去分詞。expect は目的語の後ろに裸の過去分詞（原形不定詞相当の分詞補語）を取る型を持たない。expect O to do の不定詞型だけを取る。',
              '正解。expect ... to do の不定詞。'],
        vocab: [['expect', '見込む'], ['average weekday', '平日平均']] },
    ],
  },

  /* ── 4. 求人・案内：結束性と冠詞 ───────────────────── */
  {
    id: 'u-p6c-04', part: 6, kind: 'doc', level: 5, docCount: 1,
    topics: ['cohesion', 'p6ins'],
    docs: [{
      label: 'Web page', meta: 'careers.orsted-analytics.com',
      title: 'Data Quality Analyst — Bristol',
      body: [
        'Ørsted Analytics is seeking a Data Quality Analyst to join our client-reporting team. The successful candidate will design validation rules for incoming datasets and investigate anomalies before {{1}} reach published dashboards.',
        'This is a newly created role. {{2}} Because the position has no established routine, we are looking for someone comfortable defining their own priorities.',
        'Candidates should have at least three years of experience working with relational databases and a demonstrated ability to explain technical findings to {{3}} audiences.',
        'Applications close on 30 April. We review submissions on a rolling basis, {{4}} early applicants may hear from us before the deadline.',
      ],
    }],
    questions: [
      /* id は p6c-04-1r2（誤答の過半（(B)(D) の2本）を差し替えたため新規採番）。
         旧 (D) these は「同一文内で直前の複数名詞をそのまま受け直す」型の実例が実在し
         （Wikipedia：only around 20 cars were produced before these reverted to
         the original …）閉じていなかったため、前回 theirs に差し替えた。だが再監査で
         旧 (B) those の why が「無標の人称代名詞のほうが適する」という選好（閉じ方3）に
         なっており、(D) と同じ穴が (B) に残っていたことが判明した。加えて theirs の
         排除根拠「先行する並行表現の "their + 名詞" が無いと使えない」も、
         Is this yours? のように先行表現なしで使える所有代名詞の反例があり強すぎた。
         (B)(D) を格と数で構造的に閉じる語に差し替える：
         (B) those → that（指示代名詞。単数で anomalies（複数）と数が一致しない）、
         (D) theirs → them（目的格。reach の主語位置に目的格は立てない）。 */
      { id: 'p6c-04-1r2', topics: ['pron', 'cohesion'],
        choices: ['it', 'that', 'they', 'them'],
        answer: 2,
        exp: 'before 以下は reach を述語とする節なので、空所は主語の位置。主節の目的語 anomalies（複数）を、同じ文の従属節でそのまま受け直す純粋な照応なので、複数の主格人称代名詞 they が入る。it・that はいずれも単数の代名詞で anomalies（複数）と数が一致しない。them は目的格で主語位置に立てない。',
        why: ['単数の人称代名詞。受ける名詞 anomalies は複数で数が一致しない。',
              '単数の指示代名詞。that も受ける名詞 anomalies（複数）と数が一致しない。bare の that は単一の対象を指す代名詞であり、複数の anomalies をまとめて指すことはできない。',
              '正解。複数名詞 anomalies を受ける主格の人称代名詞。',
              '目的格の人称代名詞。空所は reach の主語の位置で、主格の they が必要。目的格の them はこの位置に立てない。'],
        vocab: [['anomaly', '異常値'], ['validation rule', '検証ルール']] },

      { id: 'p6c-04-2', topics: ['p6ins'],
        choices: [
          'The team currently consists of four analysts and one team lead.',
          'Our Bristol office relocated to Temple Quay in 2023, a move that added two floors of workspace.',
          'All employees receive an annual travel allowance, capped at eight hundred pounds per person.',
          'Interviews will be conducted in three rounds, beginning the week after the application deadline and concluding by the end of May.',
        ],
        answer: 0,
        exp: '直前が「これは新設のポジションです」、直後が「定型業務がないため、自分で優先順位を決められる人を求める」。間に入るのは、その新設ポジションが置かれるチームの現状を説明する文。(A) がチーム構成を示し、前後をつなぐ。',
        why: ['正解。新設ポジションの置かれる文脈を補足する。',
              'オフィス移転（規模を加えても）は、直後の「定型業務がない」という話に接続しない。',
              '手当の話（金額を加えても）は段落の主題から外れ、直後の「定型業務がない」という説明につながらない。',
              '選考日程の具体化は応募要領の段落に属する内容で、依然としてチームの現状説明にはならない。'],
        vocab: [['team lead', 'チームリーダー'], ['established routine', '確立された定型業務']] },

      { id: 'p6c-04-3', topics: ['confuse'],
        choices: ['nontechnical', 'untechnical', 'technicality', 'technically'],
        answer: 0,
        exp: '「技術的な調査結果を説明する」相手なので、技術者ではない聞き手。nontechnical audiences「非技術系の聞き手」。接頭辞は non- が正しい。',
        why: ['正解。「専門外の」。',
              'untechnical は標準的な語形ではない。',
              '名詞。audiences を修飾できない。',
              '副詞。名詞を修飾できない。'],
        vocab: [['nontechnical', '専門外の'], ['demonstrated ability', '実証された能力']] },

      { id: 'p6c-04-4', topics: ['connect', 'conjprep'],
        choices: ['despite', 'so', 'in case', 'whether'],
        answer: 1,
        exp: '「随時審査している」→「だから早く応募した人には締切前に連絡が行くかもしれない」という因果。前後が節なので接続詞 so。',
        why: ['前置詞。後ろに名詞句が必要。',
              '正解。因果を表す接続詞。',
              '「〜の場合に備えて」。因果関係を表さない。',
              '「〜かどうか」。名詞節を作り、この位置に合わない。'],
        vocab: [['on a rolling basis', '随時']] },
    ],
  },

  /* ── 5. 社内メモ：時制と語彙 ───────────────────────── */
  {
    id: 'u-p6c-05', part: 6, kind: 'doc', level: 5, docCount: 1,
    topics: ['ctense', 'cohesion'],
    docs: [{
      label: 'Memo',
      head: 'TO: Regional Sales Staff\nFROM: Priya Raghunathan, VP Sales\nDATE: 8 November\nSUBJECT: New expense submission process',
      body: [
        'As of 1 December, all travel and entertainment expenses {{1}} through the Concurra portal. The paper form we have used since 2018 will no longer be accepted after 30 November.',
        'Those of you who attended the October regional meeting {{2}} a preview of the new interface at that session. For everyone else, a 20-minute recorded walkthrough is now posted on the intranet under Finance > Training.',
        'The change is not merely cosmetic. Because Concurra reads receipt images directly, it eliminates the manual coding step that {{3}} for most of the delay in reimbursement.',
        '{{4}} Anything submitted on paper on or before that date will be processed under the old system.',
      ],
    }],
    questions: [
      { id: 'p6c-05-1', topics: ['ctense', 'voice'],
        choices: ['must submit', 'must be submitted', 'were submitted', 'are submitting'],
        answer: 1,
        exp: '経費は「提出される」側なので受動態。As of 1 December という将来の起点に対する規定なので助動詞 must を伴う。空所の後ろに目的語がないことが受動の決め手。',
        why: ['能動態。経費が自ら提出することになる。',
              '正解。助動詞＋受動態。',
              '過去形の受動態。12 月 1 日からの規定に合わない。',
              '能動の進行形。目的語がない。'],
        vocab: [['as of', '〜をもって、〜時点で'], ['entertainment expenses', '交際費']] },

      /* id は p6c-05-2r（stem を差し替えたため新規採番）。旧文には過去形を強制する
         時間標識が無く、「出席者には後日プレビューを送る」という will receive の読みが
         残っていた（第二の正解）。at that session を補い、10 月の会議という
         過去の一時点にしか結び付かない表現にして未来形を閉じた。 */
      { id: 'p6c-05-2r', topics: ['ctense'],
        choices: ['receive', 'will receive', 'received', 'have been receiving'],
        answer: 2,
        exp: 'メモの日付は 11 月 8 日で、10 月の地域会議はすでに終わっている。at that session「その(10 月の)会合の場で」という表現が、出来事を 10 月という過去の一時点に固定している。過去の一時点にしか結び付かない標識があるので過去形。',
        why: ['現在形。at that session という過去の一時点を表す語句と併用できない。',
              '未来形。at that session が指す 10 月の会議はすでに過去の出来事であり、未来形の will receive とは時制が矛盾する。',
              '正解。at that session という過去の一時点で受け取った出来事。',
              '現在完了進行形。「今まで繰り返し受け取り続けている」という意味になり、at that session という一度きりの過去の一時点を表せない。'],
        vocab: [['walkthrough', '操作解説'], ['intranet', '社内ネットワーク']] },

      { id: 'p6c-05-3b', topics: ['rel', 'colloc'],
        choices: ['accounted', 'accounting', 'have accounted', 'to account'],
        answer: 0,
        exp: '関係代名詞 that の直後なので、先行詞 the manual coding step を主語とする定形動詞（時制を持つ動詞）が要る。account for は「〜の原因である、〜を占める」。加えて先行詞は単数なので、複数主語を要求する have は取れない。この2点を同時に満たすのは accounted だけ。過去形は「12 月に廃止されるこの作業が、これまで払い戻し遅延の主因だった」という済んだ事実として述べる形（現在完了 has accounted や現在形 accounts も英語としては成り立つが、選択肢にはない）。',
        why: ['正解。時制を持つ定形動詞。過去形は主語の数に左右されないので、単数の先行詞 the manual coding step をそのまま主語にできる。',
              '現在分詞。関係代名詞 that の直後に置いても、時制を持たないので関係詞節の述語にならない。',
              '数が一致しない。先行詞 the manual coding step は単数なので have は取れない。',
              '不定詞。時制を持たないので、関係代名詞 that に続く節の述語にならない。'],
        vocab: [['account for', '〜の原因となる、〜を占める'], ['reimbursement', '払い戻し']] },

      { id: 'p6c-05-4', topics: ['p6ins'],
        choices: [
          'Please direct questions about mileage rates to your line manager.',
          'The final day for paper submissions is 30 November.',
          'Concurra was selected after a review of five vendors.',
          'Regional meetings will resume in the spring.',
        ],
        answer: 1,
        exp: '直後が「その日付までに紙で提出されたものは旧システムで処理される」。that date の指す日付を先に示す文が必要。(B) が具体的な日付を提示しており、冒頭の「11 月 30 日以降は受理しない」とも一致する。',
        why: ['走行距離手当の話は、次文の that date を指せない。',
              '正解。次文の that date が指す日付を提示する。',
              'ベンダー選定の経緯は that date を指せない。',
              '会議の再開時期も that date に対応しない。'],
        vocab: [['line manager', '直属の上司'], ['mileage rate', '走行距離手当の単価']] },
    ],
  },

  /* ── 6. 広告：接続語と語法 ─────────────────────────── */
  {
    id: 'u-p6c-06', part: 6, kind: 'doc', level: 5, docCount: 1,
    topics: ['connect', 'p6ins'],
    docs: [{
      label: 'Advertisement',
      title: 'Nordvik Acoustic Panels — Now Specified for Open-Plan Offices',
      body: [
        'For twenty years, architects have chosen Nordvik panels for concert halls and recording studios. {{1}}, the same technology is available in a format designed for the modern workplace.',
        'Our new Meridian series cuts reverberation time by up to 42 percent in rooms with hard flooring, where sound keeps bouncing long after a speaker has stopped, {{2}} the single most common complaint in open-plan environments.',
        'Installation requires no structural modification. Panels {{3}} to standard ceiling grids in under three minutes each, and they can be repositioned when a floor plan changes.',
        '{{4}} Request one at nordvik-acoustics.com/samples, and we will include a copy of our reverberation planning guide.',
      ],
    }],
    questions: [
      { id: 'p6c-06-1', topics: ['connect'],
        choices: ['For instance', 'At last', 'In contrast', 'By comparison'],
        answer: 1,
        exp: '「20 年間ホールやスタジオ向けだった」→「ついに同じ技術がオフィス向けにも」という流れ。待望のものが実現したことを示す At last。',
        why: ['例示。前文の具体例を挙げる関係ではない。',
              '正解。「ついに」。',
              '対比。オフィス向け展開は前文の否定ではなく発展。',
              '比較。2 つを並べて比べる文脈ではない。'],
        vocab: [['reverberation', '残響'], ['open-plan', '間仕切りのない']] },

      { id: 'p6c-06-2', topics: ['rel'],
        choices: ['what is', 'which is', 'that is', 'it is'],
        answer: 1,
        exp: 'カンマ以下が直前の内容（硬い床の部屋で音が反響し続けること）を受けて補足説明している非制限用法。節の内容全体を先行詞にできるのは which。',
        why: ['先行詞を含む関係代名詞。前の節を受ける用法はない。',
              '正解。前の節の内容全体を受ける非制限用法の which。',
              '非制限用法では that を使えない。',
              '代名詞。接続詞がなくカンマだけでは 2 つの節をつなげない（コンマ・スプライス）。'],
        vocab: [['complaint', '苦情']] },

      /* id は p6c-06-3r（据え置き。stem・正解の文言は変わっていない）。旧誤答 clip は
         LDOCE が [intransitive always + adverb/preposition] と自動詞用法を明記する
         能格動詞で、「Panels clip to standard ceiling grids」が第二の正解になっていた。
         動詞を secure に替えても、secure にも「(部品が)〜に固定される」という同型の
         能格用法が編集された英文に実在し（例：the liner secures to the underarm area）、
         穴が移っただけだった。そこで誤答3本を非定形（securing / to secure /
         having been secured）にして「定形の述語動詞が無いと独立節にならない」という
         構造だけで閉じたが、これは新たに「非定形3本・定形1本＝定形を選べば100%正解」
         という指紋を作った（voice の論点も、能動2本・受動2本で50%にしか効かず死んでいた）。
         再監査を受け、誤答3本を「非定形1本＋数の不一致2本」に組み替える：
         (A) to secure は非定形（構造で閉じる）、(B) is secured と (D) has been secured は
         定形だが be 動詞・助動詞が単数形で、複数主語 Panels と数が一致しない（構造で閉じる）。
         定形3/4・受動3/4になったので「定形/受動を選べば当たる」という抜け道は消える。
         あわせて topics を ['voice','vform'] → ['vform'] に変更（voice は数の一致では
         測れないため。数の一致は vform の範囲内）。 */
      { id: 'p6c-06-3r', topics: ['vform'],
        choices: ['to secure', 'is secured', 'are secured', 'has been secured'],
        answer: 2,
        exp: 'この文は Panels {{3}} to standard ceiling grids in under three minutes each, and they can be repositioned when a floor plan changes. と、and で2つの節を対等に結ぶ形。and が対等に結ぶ以上、最初の節にも2つ目の節（they can be repositioned）と同じく定形の述語動詞が要る。to secure は不定詞で非定形なので、その時点で文が成立しない。is secured と has been secured は定形だが、be 動詞・助動詞が単数形（is / has）で、複数の主語 Panels と数が一致しない。定形かつ主語の数と一致するのは are secured だけ。パネルは「固定される」側なので態も受動が適切。',
        why: ['不定詞。定形の述語動詞にならない。and が結ぶ最初の節に定形動詞が無いため、文全体が成立しない。',
              '定形の受動態だが、be 動詞が単数形の is。主語 Panels は複数なので数が一致しない。',
              '正解。定形の受動態・現在形で、主語 Panels（複数）と数が一致する。and で結ばれる2つの節がどちらも定形動詞を持ち、独立節として成立する。取り付け方法を一般的に説明する文なので単純現在が適切。',
              '定形の現在完了受動態だが、助動詞が単数形の has。主語 Panels は複数なので数が一致しない。'],
        vocab: [['secure A to B', 'A を B に固定する'], ['ceiling grid', '天井下地の格子'], ['reposition', '配置し直す']] },

      { id: 'p6c-06-4', topics: ['p6ins'],
        choices: [
          'Bulk pricing is available for orders over 200 units, available only for direct wholesale accounts.',
          'Nordvik was founded in Trondheim in 2004 and now operates showrooms in six countries.',
          'See and hear the difference for yourself with a free sample panel.',
          'Concert halls remain our largest single market.',
        ],
        answer: 2,
        exp: '直後が「nordvik-acoustics.com/samples でご請求ください」と続き、one が指す先が必要。(C) の a free sample panel が one の指示対象になる。',
        why: ['一括価格の話（対象条件を加えても）では、次文の one（＝サンプル）を指せない。',
              '会社沿革（現在の展開状況を加えても）は、次文の請求案内につながらない。',
              '正解。次文の one が指す a free sample panel を導入する。',
              'コンサートホールの話題は、サンプル請求の案内につながらない。'],
        vocab: [['bulk pricing', '一括購入価格'], ['for yourself', 'ご自身で']] },
    ],
  },
];
