/* =============================================================
   drills/context3.js — Part 6（長文穴埋め）論点ドリル 追加分
   文挿入（p6ins）/ 結束性（cohesion）の補充。
   文書中の {{1}}〜{{4}} は「このユニットの何問目か」を表す。
   ============================================================= */

export const UNITS = [

  /* ── 1. 社内通知：立体駐車場の改修 ─────────────────── */
  {
    id: 'u-p6c3-01', part: 6, kind: 'doc', level: 3, docCount: 1,
    topics: ['cohesion', 'p6ins'],
    docs: [{
      label: 'Notice', meta: 'Internal',
      head: 'TO: All Wrenfield Plaza Tenants\nFROM: Property Management\nDATE: 10 February\nRE: Parking Garage Resurfacing — Levels 2 and 3',
      body: [
        'Beginning Monday, 23 February, levels 2 and 3 of the parking garage will undergo a resurfacing project expected to take ten working days. Vehicles normally assigned to {{1}} floors should use the visitor overflow lot on Thackeray Lane at no charge to tenants during this period.',
        'The crew will strip the existing surface and repaint every directional marking, including the arrows on level 2 that currently guide traffic toward the Thackeray Lane exit. {{2}} Anyone driving into the garage on the first morning after the work concludes should follow the temporary signs posted at the entrance rather than rely on memory of the old layout.',
        'Once the new surface has cured, the crew will repaint stall numbers, and several spaces on level 3 will shift position by roughly one bay. Tenants assigned to {{3}} spaces will receive a written notice confirming their new stall number before 6 March.',
        'Levels 1 and 4 will remain open throughout the project, and monthly parking rates will not change as a result of the work. {{4}} Tenants with questions about the schedule should contact the property office at extension 210.',
      ],
    }],
    questions: [
      { id: 'p6c3-01-1', topics: ['cohesion'],
        choices: ['those', 'other', 'the same', 'certain'],
        answer: 0,
        exp: '直前の文で levels 2 and 3 という具体的なフロアが名指しされている。それを受けて「(通常割り当てられている)フロア」と言うには、既出の特定の対象を指す指示形容詞 those が必要。空所の文だけでは、どのフロアを指すか決まらない。',
        why: ['正解。直前の文で名指しされた levels 2・3 を指す。',
              'other なら「(2・3以外の)別の」フロアという意味になり、閉鎖対象の説明と矛盾する。',
              'the same は比較対象が必要だが、ここでは何と「同じ」かが示されていない。',
              'certain は不特定の一部を指し、直前で明示された2つのフロアを指せない。'],
        vocab: [['overflow lot', '臨時駐車場']] },

      { id: 'p6c3-01-2', topics: ['p6ins'],
        choices: [
          "The garage's overnight lighting will also be upgraded to LED fixtures during the same period.",
          'The new pattern will route level 2 traffic toward the north ramp instead of the Thackeray Lane exit currently used.',
          'Level 2 was originally scheduled for resurfacing last autumn but was delayed due to weather.',
          'Compact-car spaces on level 2 will be reduced from twenty spaces to twelve.',
        ],
        answer: 1,
        exp: '直前の文の「現在サッカレー通り出口へ誘導する矢印」という記述と、直後の文の「一時的な標識に従うべきで、旧レイアウトの記憶に頼らない」という記述の両方と結び付く文が入る。動線が変わることを明示する一文が、両者をつなぐ。',
        why: ['駐車場の照明工事は矢印や出口の話とは別件で、直後の「旧レイアウトの記憶に頼らない」という文につながらない。',
              '正解。直前の文の「(現在)サッカレー通り出口へ誘導する矢印」を「これまで使われてきたサッカレー通り出口」と反復して受け、動線が変わることを示す。直後の「一時的な標識に従うべき」にも自然につながる。',
              '延期の経緯は過去の話であり、標識やレイアウト変更の説明にはつながらない。',
              '区画数の変更は矢印や出口の話とは別の変更点で、次文の「レイアウトの記憶」にはつながらない。'],
        vocab: [['directional marking', '誘導標示'], ['currently', '現在のところ']] },

      { id: 'p6c3-01-3', topics: ['cohesion'],
        choices: ['such', 'this', 'that', 'other'],
        answer: 0,
        exp: '直前の文で「レベル3のいくつかの区画が位置を変える」と述べている。その「(位置が変わる)種類の区画」を受けるには、数の一致を問わない such が必要。this/that は単数名詞専用のため複数の spaces には使えず、other では直前の文で述べた対象と食い違う。',
        why: ['正解。spaces(複数)を指すのに数の一致を問わない such が適切。「その(位置が変わる)種類の区画」という意味になる。',
              'this は単数名詞に付く。spaces という複数名詞とは数が合わない。',
              'that も単数名詞に付く語で、複数名詞 spaces を修飾できない。',
              'other だと「位置が変わらない別の区画」を指すことになり、新しい区画番号の通知を受け取る対象として直前の文と食い違う。'],
        vocab: [['stall', '(駐車の)区画'], ['bay', '(駐車場の)区画']] },

      { id: 'p6c3-01-4', topics: ['p6ins'],
        choices: [
          'The resurfacing contractor was selected through a competitive tender process.',
          'Compact and standard-size spaces will be marked with different colors after the work is finished.',
          "Any towing required during the project will be billed to the vehicle's owner, not to the tenant's monthly account.",
          'A day-by-day schedule of the work is posted on the ground-floor notice board.',
        ],
        answer: 3,
        exp: '直前の文の「工事費用による駐車料金の変更はない」という話題と、直後の文の「スケジュールについての質問は管理事務所へ」という案内の間には、スケジュールの参照先を示す一文が必要。直後の schedule という語を先に導入している文が正解。',
        why: ['業者選定の経緯は、直後の「スケジュールについての質問は管理事務所へ」という流れにつながらない。',
              '区画の色分けは工事の仕上げに関する話で、スケジュールの話題ではない。',
              '牽引費用の請求方法は別の注意事項で、スケジュールの案内にはつながらない。',
              '正解。直後の文にある「スケジュールについての質問」という語句を先に導入している。'],
        vocab: [['notice board', '掲示板'], ['extension', '内線番号']] },
    ],
  },

  /* ── 2. E-mail：会計ソフトの定期メンテナンス ───────── */
  {
    id: 'u-p6c3-02', part: 6, kind: 'doc', level: 4, docCount: 1,
    topics: ['cohesion', 'p6ins'],
    docs: [{
      label: 'E-mail',
      head: 'To: All Larkspur Ledger customers\nFrom: Farouk Nasri, Customer Success\nDate: 6 June\nSubject: Scheduled downtime — 15 June, 01:00–05:00 UTC',
      body: [
        'We are writing to let you know that Larkspur Ledger will be unavailable for approximately four hours beginning at 01:00 UTC on Sunday, 15 June, while we migrate the invoicing database to new servers. {{1}} maintenance is intended to improve load times for reports that currently take longer than a few seconds to generate.',
        'During the maintenance window, you will not be able to create new invoices, record payments, or export reports; any changes you attempt to save will not reach our servers until the migration is complete. {{2}} If you need to send an invoice urgently during this period, we recommend preparing it in advance and using the scheduled-send option so it goes out automatically once the system is back online.',
        'Two smaller regional data centers will be retired as part of this migration, and all customer data will move to a single facility in Dublin. {{3}} facility meets the same certification standards as our current infrastructure, and no customer action is required to comply with data-residency requirements.',
        'We understand that any downtime is disruptive, and we have scheduled this work for the lowest-traffic window in our usage data — early Sunday morning in most time zones our customers operate in. {{4}} If the migration runs longer than expected, we will post real-time updates on status.larkspurledger.com rather than send additional e-mails.',
      ],
    }],
    questions: [
      { id: 'p6c3-02-1', topics: ['cohesion'],
        choices: ['Every', 'Some', 'No', 'This'],
        answer: 3,
        exp: '直前の文で「日曜1時(UTC)からデータベースを新サーバーへ移行するため約4時間利用できなくなる」という1回限りの具体的な作業を説明している。それを受けて「その(この)メンテナンスは...」と特定の事象を指すには this が必要。',
        why: ['Every は不可算名詞 maintenance との相性が悪く、また総称的な繰り返しを示すため、直前で説明した1回限りの特定の作業を指すには合わない。',
              'Some は不特定の一部を表し、直前で具体的に説明された作業と矛盾する。',
              'No は「メンテナンスが無い」の意になり、直前の説明と正面から矛盾する。',
              '正解。直前の文で具体的に説明した今回のデータベース移行という特定の作業を指す。'],
        vocab: [['migrate', '(データなどを)移行する']] },

      { id: 'p6c3-02-2', topics: ['p6ins'],
        choices: [
          'Customers on the Enterprise plan will also lose access to the API during this time.',
          'The scheduling feature introduced last month lets you queue an invoice for automatic delivery at a future time, even while you are offline.',
          'We migrated to our current server provider in 2019 and have not experienced downtime of this length since.',
          'Support tickets submitted during the window will be queued and answered once we are back online.',
        ],
        answer: 1,
        exp: 'この段落は「メンテナンス中は新規請求書の作成・支払記録・レポート出力ができず、保存した変更も移行完了まで反映されない」という制約を説明している。その制約を踏まえた回避策として、直後の文で「事前に準備し、送信予約機能を使う」という具体策が続く。段落全体の趣旨(できないこと→回避策)を踏まえないと、どの一文が入るか決まらない。',
        why: ['API アクセスの制限は Enterprise プラン限定の別の影響で、緊急の請求書送付という話題にはつながらない。',
              '正解。先月導入されたスケジュール機能に触れており、直後の「事前に準備し、送信予約機能を使う」という具体策に直接つながる。',
              '移行時期の経緯は過去の話で、緊急時の対処法にはつながらない。',
              'サポートチケットの扱いは請求書の送付とは別件で、直後の「請求書を送りたい場合」にはつながらない。'],
        vocab: [['scheduled-send', '送信予約'], ['queue', '(処理待ちの列に)入れる']] },

      { id: 'p6c3-02-3', topics: ['cohesion'],
        choices: ['Another', 'The', 'A', 'Every'],
        answer: 1,
        exp: '直前の文で初めて「ダブリンにある単一の施設」が具体的に特定されている。既出のものを再び指すときは定冠詞 The。a なら未出扱いになり、直前の「単一の施設」という記述と矛盾する。',
        why: ['Another は別の(3つ目の)施設を暗示し、「単一の施設」という記述と矛盾する。',
              '正解。直前の文で初めて具体的に特定された「ダブリンの単一施設」を指す定冠詞。',
              'A は未出のものとして再導入する意味になり、直前で既に特定された施設と矛盾する。',
              'Every は複数の存在を前提とし、「単一の施設」という記述と矛盾する。'],
        vocab: [['data-residency requirement', 'データ所在地要件']] },

      { id: 'p6c3-02-4', topics: ['p6ins'],
        choices: [
          'Most of our competitors schedule similar maintenance windows for the same reason.',
          'The new servers have twice the storage capacity of the ones being retired.',
          'Customers based in Australia and New Zealand will experience the maintenance window in the middle of the day.',
          'We have also doubled the engineering team assigned to the cutover compared with our usual maintenance procedure.',
        ],
        answer: 3,
        exp: 'この段落は「負荷の低い時間帯を選んで作業を予定した」という説明と、直後の「それでも予定より長引いた場合はステータスページで更新する」という譲歩の間に位置する。予定通り終わらせるための追加の備えを述べる一文が、両者を自然につなぐ。',
        why: ['他社の対応との比較は、直後の「それでも予定より長引いた場合」という譲歩の前提を作らない。',
              '新サーバーの容量は事実の紹介であり、作業が延びた場合の対応にはつながらない。',
              '一部地域では日中に当たるという注意点は、直前の「負荷の低い時間帯を選んだ」への補足にとどまり、直後の「予定より長引いた場合」にはつながらない。',
              '正解。通常より多くの技術者を投入したという備えを述べ、それでも直後の「予定より長引いた場合」という譲歩に自然につながる。'],
        vocab: [['cutover', '切り替え作業'], ['real-time update', 'リアルタイム更新']] },
    ],
  },

  /* ── 3. 社内メモ：勤怠システムの切り替え ───────────── */
  {
    id: 'u-p6c3-03', part: 6, kind: 'doc', level: 4, docCount: 1,
    topics: ['cohesion', 'p6ins'],
    docs: [{
      label: 'Memo',
      head: 'TO: All Client-Facing Staff\nFROM: Mateus Bijl, Operations\nDATE: 4 September\nSUBJECT: Timesheet system change — effective 1 October',
      body: [
        'Starting 1 October, billable hours will be recorded through the new Chronogate app rather than the spreadsheet template we have used since 2016. {{1}} calculates utilization automatically and flags entries that fall outside a project\'s approved budget before they reach the finance team.',
        'The switch is not optional. Managers will no longer be able to approve hours submitted on the old spreadsheet after 30 September, regardless of the reason for the delay. {{2}} Staff who are traveling or working from a site with limited connectivity should download the offline mode before their trip, since entries made offline sync automatically once the device reconnects.',
        'Training sessions will run twice daily during the last week of September, and attendance is mandatory for anyone who submits timesheets on behalf of a project team. {{3}} sessions cover both the desktop and mobile interfaces, since roughly forty percent of billable staff work primarily from client sites.',
        'Chronogate replaces the spreadsheet entirely; nothing about the underlying billing codes or client project numbers is changing. {{4}} Anyone who still has questions after the training sessions should contact the Operations team directly rather than wait for the next scheduled walkthrough.',
      ],
    }],
    questions: [
      { id: 'p6c3-03-1', topics: ['cohesion'],
        choices: ['It', 'They', 'Each', 'Both'],
        answer: 0,
        exp: '直前で導入された the new Chronogate app という単数の主体を受ける主格代名詞は It。Each も単数扱いで動詞の形は合うが、複数の対象があることを前提とする語であり、この文書で導入されている新システムは Chronogate ひとつだけなので合わない。',
        why: ['正解。直前で導入された単数の主体 the new Chronogate app を受ける。',
              'They は複数。単数の app を受けられない。',
              'Each は複数の対象の中の「それぞれ」を表す語。直前で導入された新システムは Chronogate ひとつだけで、前提が合わない。',
              'Both は「両方」の意で、置き換えられる旧スプレッドシートまで含んでしまい、直前の文意と矛盾する。'],
        vocab: [['utilization', '稼働率、使用率'], ['flag', '(問題として)指摘する']] },

      { id: 'p6c3-03-2', topics: ['p6ins'],
        choices: [
          "Chronogate's mobile app works even without an internet connection, storing entries locally until they can be sent.",
          'The finance team piloted Chronogate with two departments over the summer before this rollout.',
          'Employees who exceed forty hours in a week will receive an automatic notification.',
          'Managers can still edit their own timesheets after submission, up until the monthly close.',
        ],
        answer: 0,
        exp: 'この段落は「10月から旧スプレッドシートでの承認は不可」という規則を説明し、直後で「出張者や接続環境が限られる拠点で働くスタッフはオフラインモードを事前にダウンロードすべき」という具体策が続く。両者をつなぐには、オフラインでの利用可否に触れる一文が必要。',
        why: ['正解。オフラインでも使える機能を説明しており、直後の「出張者は事前にオフラインモードをダウンロードすべき」という具体的な助言に直接つながる。',
              '試験導入の経緯は過去の話で、オフライン対応の話題にはつながらない。',
              '超過勤務の通知機能は別の話題で、接続環境の話にはつながらない。',
              '編集期限の話は承認後の修正に関する別の機能で、オフライン利用の話にはつながらない。'],
        vocab: [['sync', '同期する'], ['connectivity', '接続環境']] },

      { id: 'p6c3-03-3', topics: ['cohesion'],
        choices: ['Some', 'Any', 'Other', 'These'],
        answer: 3,
        exp: '直前の文で「9月最終週に1日2回研修を行い、出席は必須」と述べている。その研修そのものを受けるので、直前に述べたばかりの複数名詞 sessions を指す this の複数形 these が入る。空所の文だけを見ても、どの研修を指すかは決まらない。',
        why: ['Some だと「一部の回だけが両方の画面を扱う」という意味になり、全員に出席を義務付けている直前の文とかみ合わない。',
              'Any は疑問文・否定文・条件節で使うのが基本で、この肯定平叙文には合わない。',
              'Other は既出以外の別の研修を指すが、本文にあるのは9月最終週の研修だけで、それ以外のセッションは存在しない。',
              '正解。直前の文で述べたばかりの Training sessions を指す this の複数形。'],
        vocab: [['mandatory', '必須の'], ['interface', '(操作)画面']] },

      { id: 'p6c3-03-4', topics: ['p6ins'],
        choices: [
          'Client billing addresses will need to be re-entered manually during the first week.',
          'The Operations team is also updating the client-facing invoice template this quarter.',
          "A one-page reference card mapping each old spreadsheet column to its Chronogate equivalent will be distributed at every training session.",
          'Chronogate was developed by the same vendor that supplies our expense-reporting tool.',
        ],
        answer: 2,
        exp: '直前の文で「請求コードや案件番号は何も変わらない」という安心材料を示し、直後で「研修後もまだ質問がある場合はOperationsチームに直接連絡を」と続く。両者の間には、研修で配布される具体的な資料に触れる一文が入るのが自然で、待たずに直接連絡すべき理由(すでに参照資料は配られている)にもつながる。',
        why: ['請求先住所の再入力という内容は、直前の「請求コードや案件番号は変わらない」という説明とむしろ矛盾し、話がつながらない。',
              '請求書テンプレートの更新は並行する別の案件で、この段落の趣旨から外れる。',
              '正解。研修セッションで配布される対照表に触れており、直後の「研修後もまだ質問がある場合は」という文に自然につながる。',
              '開発元の話は背景情報にすぎず、質問対応の案内にはつながらない。'],
        vocab: [['reference card', '参照カード、早見表'], ['walkthrough', '操作説明']] },
    ],
  },

  /* ── 4. 記事：屋内プールの早期再開 ─────────────────── */
  {
    id: 'u-p6c3-04', part: 6, kind: 'doc', level: 5, docCount: 1,
    topics: ['cohesion', 'p6ins'],
    docs: [{
      label: 'Article',
      title: 'Halworth Aquatic Centre Reopens More Than Two Months Ahead of Schedule',
      head: 'HALWORTH — 14 April',
      body: [
        "The Halworth Aquatic Centre reopened to the public last Saturday, ten weeks after Corvane Assessors, the town's structural consultancy, found corrosion in three roof trusses during a routine survey and recommended immediate closure. {{1}} assessors' estimate, issued the same week, called for repairs to be finished by the end of June.",
        'The repair itself — replacing the corroded trusses and recoating the pool deck beneath them — was completed by Bruncastle & Vane, a construction firm the council had not previously used for work of this size. Bruncastle & Vane compressed the schedule by running two work shifts instead of one and by sourcing replacement steel locally rather than importing it. {{2}} As a result, the centre reopened on 12 April, well ahead of the June estimate.',
        "Bruncastle & Vane will return to Halworth in September to resurface the centre's outdoor lanes, a smaller project expected to take three weeks. {{3}} recommended waiting until early autumn for this second phase, citing the need to confirm the repaired trusses have fully settled under normal pool-hall humidity before adjacent structural work resumes.",
        "The council has confirmed that season passes will not increase in price despite the additional cost of the compressed schedule. {{4}} A full account of the project's costs will be presented at the council's public meeting on 30 April.",
      ],
    }],
    questions: [
      { id: 'p6c3-04-1', topics: ['cohesion'],
        choices: ['An', 'Some', 'The', 'Another'],
        answer: 2,
        exp: '直前の文で Corvane Assessors という固有名まで挙げて特定された調査会社の見積もりを指すには定冠詞 The が必要。an なら未出の一般的な見積もりとして再導入することになり、直前の記述と矛盾する。',
        why: ['An は未出のものとして扱う不定冠詞で、直前で名前まで挙げて特定された調査会社の見積もりを指すには合わない。',
              'Some は不特定を表し、直前で固有名まで示された対象と矛盾する。',
              '正解。直前の文で Corvane Assessors という固有名まで挙げて特定されている調査会社の見積もりを指す定冠詞。',
              'Another は別の(2社目の)調査会社を暗示し、直前の文脈と矛盾する。'],
        vocab: [['structural consultancy', '構造調査会社'], ['corrosion', '腐食']] },

      { id: 'p6c3-04-2', topics: ['p6ins'],
        choices: [
          'The town council debated emergency funding for the repair for nearly three weeks before construction began.',
          'Those two changes added roughly four percent to the total cost but removed more than ten weeks from the timeline.',
          'A similar roof failure closed the centre for six weeks in 2014.',
          'The original overseas supplier has since said it could have delivered the steel sooner than first quoted.',
        ],
        answer: 1,
        exp: '直前の文の「2交代制にし、鋼材を地元調達に切り替えた」という2つの判断と、直後の文の「その結果、6月の見込みより大幅に早い4月12日に再開した」という結果の間には、その2つがコストと期間にどう影響したかを示す一文が必要。「Those two changes」が受けられるのは直前の文だけで、他の空所には入らない。',
        why: ['資金承認の議論は着工前の出来事で、直後の「その結果、6月の見込みより大幅に早く再開した」という結果を導く根拠にはならない。',
              '正解。直前の文で述べた2つの判断がコストと期間にどう影響したかを数値で示しており、直後の「その結果」に自然につながる。',
              '2014年の類似事案は過去の別の出来事で、今回の工期短縮の説明にはつながらない。',
              '海外供給元のその後の発言は、今回の工期短縮の理由の説明にはつながらない。'],
        vocab: [['compress', '(工期などを)短縮する'], ['timeline', '工程、日程']] },

      { id: 'p6c3-04-3', topics: ['cohesion'],
        choices: ['Corvane Assessors', 'Bruncastle & Vane', 'The town council', "The centre's management"],
        answer: 0,
        exp: '空所の直前の文の主語は施工業者 Bruncastle & Vane だが、ここで問われているのは「トラスが定着するのを確認してから」という構造上の安全性についての専門的な判断であり、これは第1段落で構造調査を担当したとわかる Corvane Assessors の領分。直前の文の主語につられて Bruncastle & Vane を選ぶと誤り。離れた第1段落の情報と、この文の技術的な内容を突き合わせないと判断できない。',
        why: ['正解。第1段落から構造調査(屋根トラスの腐食)を担当したとわかる Corvane Assessors が、トラスの定着という構造上の安全性について助言する立場にある。',
              '直前の文の主語につられやすいが、Bruncastle & Vane は第2段落にあるとおり施工を担当した建設会社であり、構造安全性についての専門的判断をする立場ではない。',
              '町議会は発注者であり、構造上の安全性についての専門的助言をする立場ではない。',
              '施設の運営側も、構造安全性についての専門的助言をする立場ではない。'],
        vocab: [['settle', '(構造物が)定着する、落ち着く'], ['humidity', '湿度']] },

      { id: 'p6c3-04-4', topics: ['p6ins'],
        choices: [
          'Membership numbers have grown steadily since the centre introduced online booking two years ago.',
          'The council also approved a separate budget for playground equipment at a nearby park this year.',
          'Similar reserve funds are recommended by the national association of public pools.',
          'The gap between the original and final budgets will instead be covered by a maintenance reserve fund the centre built up over the past three years.',
        ],
        answer: 3,
        exp: '直前の文の「追加費用にもかかわらず利用料は値上げしない」という記述と、直後の文の「費用の詳細は4月30日の公開の会議で説明される」という予告の間には、その差額を実際にどう賄うかを説明する一文が必要。',
        why: ['会員数の伸びは別の話題で、値上げをしない理由の説明にはつながらない。',
              '遊具の予算は別件で、プール工事の費用の話にはつながらない。',
              '準備基金の一般的な業界推奨は、今回具体的にどう差額を賄ったかの説明にはつながらない。',
              '正解。直前の「追加費用にもかかわらず値上げしない」という記述に対し、その差額をどう賄うかを具体的に説明しており、直後の「費用の詳細は公開の会議で説明される」にも自然につながる。'],
        vocab: [['reserve fund', '積立基金'], ['account', '説明、報告']] },
    ],
  },

  /* ── 5. ウェブページ：食材キットの定期宅配サービス ─── */
  {
    id: 'u-p6c3-05', part: 6, kind: 'doc', level: 5, docCount: 1,
    topics: ['cohesion', 'confuse', 'biz'],
    docs: [{
      label: 'Web page', meta: 'fennerpantry.com',
      title: 'Fenner Pantry — Weekly Ingredient Boxes, Delivered Fresh',
      body: [
        'Fenner Pantry delivers pre-portioned ingredients and a printed recipe card to your door every week. Everything is measured and trimmed before it ships, so dinner is ready in thirty minutes and the planning you have to do beforehand is {{1}}.',
        'Each box includes recipes chosen around what is in season, along with a handful of pantry staples you are unlikely to already have on hand — sumac, harissa paste, or aged balsamic, for example. {{2}} ingredients arrive individually labeled with a use-by date, so nothing gets lost in the crisper drawer.',
        'Subscriptions can be paused, skipped, or canceled at any time through the account dashboard; there is no long-term {{3}} of any kind.',
        'Fenner Pantry now ships to four additional regions, including the Selby Hills area, following a two-year wait for regulatory approval to include fresh seafood in the box. {{4}} approval took longer than expected because seafood delivery requires a separate cold-chain certification that dry and produce items do not.',
      ],
    }],
    questions: [
      /* id は p6c3-05-1r（本文を差し替えたため新規採番）。旧本文は
         with {{1}} planning と名詞の直前に空所を置いていたため、with minimum planning
         （with minimum fuss / with minimum delay と同型）が英語として完全に成立し、
         minimum が第二の正解になっていた。be 動詞の補語の位置に移し、
         名詞の直前でしか使わない minimum を排除できるようにした。
         なお辞書の扱いは一致していない（LDOCE [only before noun]／Cambridge [always before noun]
         に対し Oxford Learner's は [usually before noun]、M-W・Collins は無標）ので、
         解説では断定できる LDOCE と Cambridge だけを挙げてある。 */
      { id: 'p6c3-05-1r', topics: ['confuse'],
        choices: ['minimum', 'minimally', 'minimal', 'minimize'],
        answer: 2,
        exp: '空所は be 動詞の補語の位置にあり、主語 the planning you have to do beforehand の状態を述べる。ここに立てるのは叙述用法を持つ形容詞 minimal「ごくわずかな」で、LDOCE の例文も The cost to taxpayers would be minimal. と補語位置。minimum も「最小限の」を表す形容詞だが、LDOCE は [only before noun]、Cambridge は [always before noun] と、名詞の直前でしか使わない語として立項している。',
        why: ['形容詞の minimum は名詞の直前で使う語（LDOCE は [only before noun]、Cambridge は [always before noun]）。minimum wage / with minimum planning のように名詞の前なら成立するが、be 動詞の補語には立てない。補語位置で「量がごくわずかだ」と述べるのは minimal の役目（The effect will be minimal.）。名詞として読む場合も a/the が要る（keep it to a minimum）。',
              '副詞。be 動詞の補語になって主語の状態を述べることはできない（is minimally invasive のように後ろに形容詞・分詞を伴う形でしか使えない）。',
              '正解。叙述用法を持つ形容詞で、「事前にすべき段取りはごくわずかだ」と主語の状態を述べる。',
              '動詞の原形。be 動詞の直後に原形は置けない。'],
        vocab: [['pre-portioned', '小分けにされた'], ['beforehand', '事前に']] },

      { id: 'p6c3-05-2', topics: ['quant', 'cohesion'],
        choices: ['Every', 'Each', 'Most', 'All'],
        answer: 3,
        exp: '直前の文で挙げた材料一式を指す複数名詞 ingredients を受けるには、複数名詞を取り、かつ「すべて」という総括の意味を持つ All が必要。同じ文の後半にある「何も見失わない」という記述が、All が示す網羅性と一致する。',
        why: ['Every は単数名詞を取る。複数形 ingredients には使えない。',
              'Each も単数名詞を取る語で、複数形 ingredients には付けられない。',
              'Most は「大半」の意で、直後の「何も見失わない」が示す網羅性と矛盾する。',
              '正解。複数名詞 ingredients を取り、直後の「何も見失わない」が示す網羅性とも一致する。'],
        vocab: [['crisper drawer', '(冷蔵庫の)野菜室']] },

      { id: 'p6c3-05-3', topics: ['biz'],
        choices: ['compliance', 'obligation', 'commission', 'comment'],
        answer: 1,
        exp: 'セミコロンの前で「いつでも一時停止・スキップ・解約できる」と述べ、後半はそれを言い換えて「利用者が長期にわたって負わされるものは一切ない」と締めている。〈利用者が負う契約上の拘束〉を表す名詞は obligation。',
        why: ['「（規則・命令に）従うこと」。従う側の行為を指す名詞で、通例 compliance with the rules のように従う対象を伴う。ここには従うべき規則が示されておらず、また前半の「いつでも解約できる」の裏返しになる〈契約上の拘束〉も表さない。',
              '正解。「（契約上の）義務、拘束」。no long-term obligation は解約自由をうたう定型で、前半の「いつでも一時停止・解約できる」と正確に対応する。',
              '「（仲介者に払う）手数料・歩合」「委任、委員会」。いずれも仲介者や委任先の存在を前提とする語で、利用者が直接申し込むこのサービスには当てはまらず、利用者を縛る拘束も表さない。',
              '「意見、論評」。人が口にする発言を指す名詞で、契約上負う拘束を表さない。'],
        vocab: [['dashboard', '(アプリの)管理画面']] },

      { id: 'p6c3-05-4', topics: ['cohesion'],
        choices: ['Another', 'The', 'An', 'Some'],
        answer: 1,
        exp: '直前の文で「生鮮魚介類を追加するための規制当局の承認」が初めて具体的に特定されている。既出のものを指すには定冠詞 The が必要。',
        why: ['Another は別の(2つ目の)承認手続きを暗示し、直前の記述と矛盾する。',
              '正解。直前の文で具体的に特定された「生鮮魚介類を追加するための規制当局の承認」を指す定冠詞。',
              'An は未出のものとして扱う不定冠詞で、直前で既に特定された承認を指すには合わない。',
              'Some は不特定を表し、直前で具体的に特定された内容と矛盾する。'],
        vocab: [['cold-chain certification', 'コールドチェーン認証']] },
    ],
  },
];
