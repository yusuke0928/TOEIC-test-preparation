/* =============================================================
   予想模試 Vol.6 — Part 3 後半（No.53–70）
   題材は施設管理・物流・イベント運営に限定（vol6-l2a / vol6-l3 と分担）。

   ▼ このファイルを書く担当へ（2026-08-18）
   揃えるのは**構造だけ**。具体的には——問題数 18（3問×6 セット、No.53–70）、
   図表問題は後半 3 セット、`tag` の並び、`level` の配分、話者ロールの散らし方、
   1 セットあたりの語数の水準（125〜160 語）だけ。
   **場面・業種・人物・地名・数値・言い回し・設問文（stem）・選択肢は絶対に揃えない。**
   構造は上のとおり数値で書いてあるので、**既存の巻（vol1〜vol5 の -l2b.js）を開かないこと。**
   開くと必ず内容まで引きずられる。
   もとここには「Vol.1（標準回）と同じ条件・同じ配分の回」と書いてあった。この一文が原因で
   2026-08-18 に Vol.6 は Vol.1 の内容そのものの再スキンになり、Part 7 で 50 問、
   Part 3・4 で 30 問以上を作り直した。**この注意書きを消さないこと。**
   書き終えたら `assets/data/` 全体（ドリル `assets/data/drills/*.js` を含む）と
   機械照合すること。既存の巻を避けた結果ドリルと衝突した事故が同日に 4 件起きている。
   ============================================================= */

/* `sid` / `qid` は id の明示指定。中身を差し替えたユニット・設問は
   SRS の履歴を引き継がせないため、通し番号由来の既定 id ではなく
   新しい id を与える（`no` は 1〜200 の連番なので絶対に変えない）。 */
const set = (o) => ({
  id: o.sid || `v6-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v6q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2B = [

  /* ── 53–55（3名）────────────────────────────────── */
  /* 2026-09-26 先読み対策 第2案（method2）のパイロット適用。stem・4択は
     pilot/final-P3.md の凍結案のまま1字も変えていない。
     正解はメインのくじ（53=A, 54=A, 55=A）。
     監査で3点を直した：①もう一方の男性（M-Au）が Q54 の誤答B（夜勤に
     伝える）に当たる行動を音声内で取っていたので、その発話を削除し、
     夜勤は会話に一度も出てこない形にした（これに伴い、直後の "until
     then" の then が二通りに取れる問題も解消した——then は「今朝連絡
     した業者が今日の午後に確認に来る」を指す一択になる）。②M-Am（米）
     が英式の "rang" を使い選択肢Aとほぼ逐語だったので、"called the
     dealer we bought it from" に言い換えた。③Q55 の根拠が誤答C（作業
     順の組み替え）を部分的に推せる書き方だったので、"rather than
     moving it all by the pallet, we'll open the pallets up and go
     through the cartons ourselves" と手作業（正解）だけを立てる形に
     直した。
     閉じ方：Q54 は「購入元の販売店に電話した」男性の発話で正解を立てる。
     D（自分で応急処置）は「保証を無効にしたくないので手を付けなかった」
     という理由で構造的に閉じた（この行は監査後も変更なし）。B・C（ラベル
     違い・棚の傾き・スキャナーの通信）は会話に一度も出てこないため、
     概要設問の標準どおり言及なしで閉じている。
     2026-09-27 第2巡監査：ja の「今日の午後に交換前の確認に来る」の
     「交換前の」は本文に無い付け足しだったので削った（本文は confirm it
     としか言っていない）。本文・stem・選択肢・answer は変更なし。
     2026-09-27 三次監査反映：正解位置の平準化（balance2.mjs --by part）で No.54（旧 A →
     新 D）・No.55（旧 A → 新 B）の選択肢の並びを入れ替えた（why も対応して入れ替え済み）。 */
  set({
    n: [53, 54, 55], lv: 4, k: 'conversation with three speakers',
    s: [
      { role: 'W-Cn', text: 'Morning. Anything before the briefing?' },
      { role: 'M-Am', text: 'Forklift six keeps dying on us — charged all night, then dead again after forty minutes on the floor.' },
      { role: 'W-Cn', text: 'Charger or the battery itself?' },
      { role: 'M-Am', text: 'Charger\'s fine — forklift four\'s battery held steady on it. This one\'s just failing.' },
      { role: 'W-Cn', text: 'Have you had it looked at?' },
      { role: 'M-Am', text: 'I called the dealer we bought it from first thing — they think it\'s worn out for good and are sending someone this afternoon to confirm it.' },
      { role: 'M-Au', text: 'First I\'ve heard of it — that explains why it was sitting by the charger when I came in.' },
      { role: 'W-Cn', text: 'So forklift six stays parked until then?' },
      { role: 'M-Am', text: 'Right — it\'s still under warranty, so I left it alone rather than risk voiding that.' },
      { role: 'W-Cn', text: 'Understood. That leaves us a truck short for this afternoon\'s restock — so rather than moving it all by the pallet, we\'ll open the pallets up and go through the cartons ourselves.' },
      { role: 'M-Am', text: 'Fine by me — we can manage the volume without it for one afternoon.' },
    ],
    ja: '倉庫で朝の申し送りの際、作業員の男性がフォークリフト6号機の調子が悪いと報告する。一晩充電しても稼働後40分ほどで切れてしまうが、充電器自体は別の機体で正常に使えたため、バッテリー本体の不具合だと分かる。男性はすでに購入元の販売店に連絡しており、業者は完全に寿命だと見て、今日の午後に確認に来る予定だという。保証期間中のため自分で手を加えることは避けたと説明する。もう1人の男性はこの件を今初めて知り、朝から充電器のそばに置かれていた理由に納得する。トラックが1台使えなくなることを受け、監督者は今日の午後の補充作業をパレットごと運ばず、パレットを開けて箱を1つずつ手作業で確認する方法に切り替えようと提案し、男性も同意する。',
    v: [['die (on someone)', '（機械などが）動かなくなる・故障する'], ['worn out (for good)', '完全に摩耗している、使い物にならない'], ['void (a warranty)', '（保証を）無効にする'], ['restock', '（在庫の）補充']],
    q: [
      { tag: '概要', qid: 'v6q53p', s: 'What problem are the speakers discussing?',
        c: ['A forklift battery has stopped holding its charge.', 'One shipment arrived with the wrong labels.', 'Some shelving in aisle four has started to lean.', 'The handheld scanners keep losing their signal.'],
        a: 0,
        e: 'フォークリフト6号機が一晩充電しても稼働後すぐに切れてしまうと報告され、充電器自体は別の機体で正常に使えたためバッテリー本体の不具合だと分かる。',
        w: ['正解。', '荷物のラベル違いについては会話のどこにも出てこない。', '棚の傾きについては会話のどこにも出てこない。', 'ハンディスキャナーの通信については会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v6q54p', s: 'What does one of the men say he did?',
        c: ['He tried a quick fix on his own.', 'He told the night shift about it.', 'He checked the records from last week.', 'He rang the company that supplied it.'],
        a: 3,
        e: '一方の男性が「購入元の販売店に朝一番で電話した」と述べている。',
        w: ['電話をかけた男性は "it\'s still under warranty, so I left it alone rather than risk voiding that" と述べており、保証を無効にしないよう自分では手を付けなかったと説明している。自分で応急処置を試みたという記述はこれと正面から矛盾する。', '夜勤に伝えたという記述は会話のどこにも出てこない。', '先週の記録を確認したという話は会話のどこにも出てこない。', '正解。'] },
      { tag: '次の行動', qid: 'v6q55p', s: 'What will the speakers most likely do this afternoon?',
        c: ['Bring in some temporary workers', 'Sort through the stock by hand', 'Rearrange the order of today\'s jobs', 'Warn a client about late orders'],
        a: 1,
        e: '監督者が「トラックが1台使えない分、今日の午後の補充はパレットごと運ばず、パレットを開けて箱を1つずつ手作業で確認しよう」と提案し、男性が同意している。',
        w: ['臨時作業員を入れるという話は会話のどこにも出てこない。', '正解。', '今日の作業順を組み替えるという話は会話のどこにも出てこない。', '顧客に遅延を知らせるという話は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 56–58 ─────────────────────────────────────────── */
  /* 正解はくじ（56=A, 57=D, 58=A）。
     閉じ方：Q56 の用件（デザートの追加）と Q57 の依頼（駐車スペースの確保）
     は別の話題として分けて出し、どちらも他方の設問の答えを前提にしない。
     Q58 は「会場の管理者に連絡する」という第三者への行動を明示し、
     「男性へかけ直す」（C）と区別できるようにした。B・C・D はいずれも
     会話に出てこないため言及なしで閉じている。
     2026-09-27 追記：正解位置の平準化（balance2.mjs --by part）で No.56（旧 A → 新 D）・
     No.58（旧 A → 新 C）の選択肢の並びを入れ替えた（why も対応して入れ替え済み）。 */
  set({
    n: [56, 57, 58], lv: 3,
    s: [
      { role: 'W-Br', text: 'Hi, I\'m calling about Saturday\'s reception — could we fit one extra item onto the buffet without taking anything off?' },
      { role: 'M-Am', text: 'What did you have in mind?' },
      { role: 'W-Br', text: 'A guest let us know this week she can\'t have dairy, and there\'s nothing dairy-free on the sweet table. Could we add a fruit-based dessert alongside what\'s already booked?' },
      { role: 'M-Am', text: 'Easily done — I\'ll have the kitchen add a fruit tart to the list. Numbers haven\'t changed?' },
      { role: 'W-Br', text: 'No, still forty for the sit-down and sixty for the reception after.' },
      { role: 'M-Am', text: 'Good, that stays as quoted then. One thing from our end — the loading bay at that venue is narrow. Could you make sure a space by the side door is kept clear for our van from four?' },
      { role: 'W-Br', text: 'I\'ll get in touch with the venue manager this afternoon and have that sorted before Saturday.' },
      { role: 'M-Am', text: 'Appreciated — that\'ll save us a good twenty minutes on the day.' },
    ],
    ja: 'イベントプランナーの女性が土曜日のレセプションについてケータリング業者に電話し、何も削らずビュッフェに1品追加できないか尋ねる。乳製品を摂れない客が判明したため、既存のデザートに加えて果物系のデザートを用意してほしいという依頼で、人数に変更はない。担当者は対応を了承し、あわせて当日の搬入口が狭いため、4時から側面の出入口付近に自社の車のためのスペースを確保しておいてほしいと頼む。女性はその日の午後に会場の管理者へ連絡し、土曜日までに手配すると約束する。',
    v: [['fit (something) onto ~', '～に組み込む・追加する'], ['sit-down (dinner)', '着席形式の食事'], ['loading bay', '搬入口・荷降ろし場'], ['side door', '脇の出入口']],
    q: [
      { tag: '概要', qid: 'v6q56p', s: 'What is the purpose of the woman\'s call?',
        c: ['To order more tables for the buffet', 'To have the staff arrive earlier', 'To move the serving area outdoors', 'To add a dish to the menu'],
        a: 3,
        e: '女性は「ビュッフェに何も外さず1品追加できないか」と切り出し、乳製品不使用のデザートを加えたいと伝えている。',
        w: ['ビュッフェ用のテーブルを追加注文する話は会話のどこにも出てこない。', 'スタッフの到着時間を早める話は会話のどこにも出てこない。', '提供場所を屋外に移す話は会話のどこにも出てこない。', '正解。'] },
      { tag: '詳細', qid: 'v6q57p', s: 'What does the man ask the woman to do?',
        c: ['Put the changes in an e-mail', 'Give the final numbers by noon', 'Pay the balance before the event', 'Keep a parking space free for the van'],
        a: 3,
        e: '男性は「搬入口脇のスペースを4時から自分たちの車のために空けておいてほしい」と頼んでいる。',
        w: ['変更内容をメールで送るよう頼む記述は会話のどこにも出てこない。', '人数はこの通話ですでに「変わっていない」と確認されており、正午までに最終人数を伝えるよう頼む記述は出てこない。', 'イベント前に残金を払うよう頼む記述は会話のどこにも出てこない。', '正解。'] },
      { tag: '次の行動', qid: 'v6q58p', s: 'What does the woman say she will do?',
        c: ['Call back later in the afternoon', 'Check the plan with her client', 'Let the venue manager know', 'Visit the venue that evening'],
        a: 2,
        e: '女性は「今日の午後、会場の管理者に連絡して土曜日までに手配する」と述べている。',
        w: ['女性が連絡すると述べているのは会場の管理者であり、男性へかけ直すとは述べていない。', '依頼主（クライアント）とプランを確認するという話は会話のどこにも出てこない。', '正解。', 'その晩に会場を訪れるという話は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 59–61 ─────────────────────────────────────────── */
  /* 正解はくじ（59=C, 60=B, 61=C）。
     閉じ方：Q60 の引用はメインが差し替えたとおり "The engineers charge
     double after six." のまま。直前で男性が費用差を尋ね、直後に女性が
     「別のやり方は無い」と続けることで、コストを受け入れてほしいという
     依頼として機能させている（時間帯を日中に戻したいという読み・過去の
     請求の原因究明・別業者探しは、いずれもこの流れと逆方向で言及もない）。
     Q59・Q61 はいずれも言及なしで閉じる形で、明示的な否定・訂正は
     このユニットでは使っていない。
     監査で3点を直した：①Q59 why[D] が「火曜日のままで」と本文に無い
     断定を含んでいたので、冒頭の「火曜日に予約済み」だけを根拠にする
     書き方に直した。②Q60 why[C] の「という文脈ではない」を、男性の
     質問が今回の費用差であることを名指しする書き方に直した。③Q61 の
     stem の today に本文で対応する語が無かったので、最終行に
     "this afternoon" を足した。
     2026-09-27 第2巡監査：ja に Q61 の根拠である「今日の午後」を補った
     （旧稿はブライオニーへの依頼が今日か不明瞭だった）。本文・stem・
     選択肢・answer は変更なし。 */
  set({
    n: [59, 60, 61], lv: 4,
    s: [
      { role: 'W-Cn', text: 'Tuesday\'s booked in for the annual fire alarm test. I\'ve had them extend this year\'s test to the parking area beneath the building — that got missed last year.' },
      { role: 'M-Br', text: 'Good. Same time as before, during the day?' },
      { role: 'W-Cn', text: 'No — the day slot caused problems last time. Half the building had to stand outside for twenty minutes and three tenants complained. This time it has to run after everyone\'s gone.' },
      { role: 'M-Br', text: 'Fair enough. Any cost difference for that?' },
      { role: 'W-Cn', text: 'The engineers charge double after six. So the invoice will likely come in higher than the estimate we gave finance — I don\'t see a way around that, though.' },
      { role: 'M-Br', text: 'Understood, I\'ll square that with finance. Do you need someone from our side there?' },
      { role: 'W-Cn', text: 'Yes, someone needs to be on site for it.' },
      { role: 'M-Br', text: 'I\'ve got my daughter\'s school event that evening, so I can\'t stay past five. I\'ll ask Briony this afternoon to cover for me instead — she usually stays late anyway.' },
    ],
    ja: '施設管理担当の女性が、年次消防設備検査が火曜日に決まり、今年は建物地下の駐車場まで対象を広げたと同僚の男性に伝える。前回は日中に実施して入居者からの苦情が出たため、今回は営業時間後に行うことになったと説明する。男性が費用について尋ねると、女性は業者が18時以降は倍額を請求するため見積もりより高い請求になると答え、それは避けられないと述べる。男性はその晩、娘の学校行事があるため5時より遅くは残れないと明かし、今日の午後、代わりに同僚のブライオニーに立ち会いを頼むと話す。',
    v: [['extend (a test/scope)', '（検査などの）対象を広げる'], ['charge double', '倍額を請求する'], ['square (something) with ~', '～と話をつける・調整する'], ['cover for ~', '～の代わりを務める']],
    q: [
      { tag: '詳細', qid: 'v6q59p', s: 'What does the woman say about the fire alarm test?',
        c: ['It will take about two hours.', 'It is a condition of the insurance policy.', 'It includes the underground car park.', 'It has moved to a different week.'],
        a: 2,
        e: '女性は「今年は建物地下の駐車場まで検査の対象を広げた」と述べている。',
        w: ['所要時間については会話のどこにも出てこない。', '保険契約の条件だという記述は会話のどこにも出てこない。', '正解。', '週を移したとは述べていない。女性が変えたと述べているのは実施の時間帯（前回の日中から、全員が退出した後へ）で、日程は冒頭で「火曜日に予約済み」と述べているだけである。'] },
      { tag: '意図', qid: 'v6q60p', t: ['p3int'], s: 'What does the woman mean when she says, "The engineers charge double after six."?',
        c: ['She prefers to hold the test in the daytime.', 'She is asking the man to accept a higher cost.', 'She has found the reason for an earlier bill.', 'She wants to look for a different company.'],
        a: 1,
        e: '男性が費用差を尋ねたのに対し、女性は「時間外だと業者の料金が倍になる。それは避けられない」と続けており、見積もりより高い請求になることを了承してほしいと伝えている。',
        w: ['日中に検査を行いたいという記述は出てこない。むしろ前回の苦情を理由に、今回は時間外での実施が必要だと述べている。', '正解。', '過去の請求への言及は無く、男性の質問は今回の費用差についてである。', '別の業者を探したいという記述は会話のどこにも出てこない。'] },
      { tag: '次の行動', qid: 'v6q61p', s: 'What will the man do today?',
        c: ['Put up a notice in the lobby', 'Look over last year\'s test report', 'Ask a colleague to attend in his place', 'Walk round the building with a technician'],
        a: 2,
        e: '男性は「その晩は娘の学校行事があるので5時より後は残れない。今日の午後、代わりにブライオニーに来てもらうよう頼む」と述べている。',
        w: ['ロビーに掲示を出すという話は会話のどこにも出てこない。', '昨年の検査報告書を確認するという話は会話のどこにも出てこない。', '正解。', '男性自身が技術者と建物を見て回るという記述は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 62–64（図表）────────────────────────────────── */
  /* 図表・正解はくじ（62=A=Mast 27, 63=B, 64=A）。表は凍結（Mast/Roof Section/
     Mount Type）。音声は行名（Mast 12 等）を一度も読み上げず、Street Side・
     Courtyard Side・Pole mount・Frame mount も言い換えている（見通し線が
     取れる側＝道路寄りの区画／中庭側の区画、単管＝支柱1本／架台＝鉄骨の
     骨組み）。2つの条件（見通し線が必要→道路寄りの2本に絞る、重量があり
     架台が必要→単管支持を除く）を両方拾って初めて Mast 27 に決まる。
     Q63・Q64 は非図表設問のため t を明示した。
     監査で2点を直した：①Q63 exp の「一晩越しで作業を残せない」が本文に
     無い言い換えだったので、本文どおりの言い方に直した。②vocab の
     bracket が本文に無い語だったので booked out に差し替えた。
     2026-09-27 第2巡監査：①Q63 exp の「出社して」が本文に無い付け足し
     だったので削った（本文は logs on としか言っていない）。②Q64 exp
     の「今日以降」を「明日以降」に直した（本文は booked out after
     today で、今日を含まず明日から埋まっている、の意）。③本文を3か所
     で言い換えた（sit above→go on the steel framework、This antenna→
     That mast、the job moves to next week→we'd be back to do it next
     week）。指す対象はアンテナからマストに変わったが、真偽は変わらない。stem・選択肢・
     answer は変更なし。 */
  set({
    n: [62, 63, 64], lv: 4, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Rooftop Mast Locations — Brindlewood Plaza',
      head: ['Mast', 'Roof Section', 'Mount Type'],
      rows: [
        ['Mast 12', 'Street Side', 'Pole mount'],
        ['Mast 27', 'Street Side', 'Frame mount'],
        ['Mast 5', 'Courtyard Side', 'Frame mount'],
        ['Mast 9', 'Courtyard Side', 'Pole mount'],
      ],
    },
    s: [
      { role: 'W-Au', text: 'Right, the new antenna\'s going in today — which mast is it for?' },
      { role: 'M-Br', text: 'It needs a clear line of sight to the tower, so it must sit on the section of roof nearer the main road. The section by the inner yard won\'t get a signal through.' },
      { role: 'W-Au', text: 'That still leaves two masts on that side, though.' },
      { role: 'M-Br', text: 'This unit\'s heavier than the last one we put up — a single upright post won\'t take that load, so it has to go on the steel framework instead.' },
      { role: 'W-Au', text: 'Got it. Why the rush to finish in one go?' },
      { role: 'M-Br', text: 'That mast carries live traffic for the building\'s wireless network. Whatever we disconnect has to be carrying that traffic again before anyone logs on tomorrow.' },
      { role: 'W-Au', text: 'Understood. And if it rains before we\'re done?' },
      { role: 'M-Br', text: 'We\'d stop straight away — not worth the risk on wet steel. Then we\'d be back to do it next week rather than tomorrow, since the crane\'s booked out after today.' },
    ],
    ja: 'Farraday Wireless の作業員2名が、屋上のどの区画に新しいアンテナを設置するか話している。男性はまず、送信塔への見通しを確保するため道路寄りの区画である必要があると説明し、中庭側の2区画を除外する。続けて、新しいユニットは従来より重く単管では支えられないため鉄骨の架台がある区画が必要だと説明し、道路寄りでも単管支持の区画は除外される。作業を1日で終える必要がある理由は、そのマストが建物の無線通信を担っており、翌日誰かがログオンする前に通信を復旧させる必要があるためだと説明する。雨が降り出した場合は作業を中止し、クレーンの予約の都合上、翌日ではなく来週に設置を持ち越すことになるという。',
    v: [['line of sight', '見通し線'], ['booked out', '予約で埋まっている'], ['upright (post)', '支柱・単管'], ['steel framework', '鉄骨の骨組み']],
    q: [
      { tag: '図表', qid: 'v6q62p', s: 'Look at the graphic. Which mast will the new antenna be added to?',
        c: ['Mast 27', 'Mast 5', 'Mast 9', 'Mast 12'],
        a: 0,
        e: '男性はまず、送信塔への見通しを確保するため道路側（Street Side）の区画に設置する必要があると述べ、中庭側（Courtyard Side）の Mast 5・Mast 9 を除外する。続けて、新しいユニットは重量があり単管（Pole mount）では支えられず架台（Frame mount）が必要だと述べ、道路側で単管支持の Mast 12 も除外される。残るのは道路側・架台支持の Mast 27 だけである。',
        w: ['正解。', 'Mast 5 は架台支持（Frame mount）で重量の条件は満たすが、中庭側（Courtyard Side）にあり、送信塔への見通しが確保できないため除外される。', 'Mast 9 は中庭側（Courtyard Side）にあり見通しの条件を満たさない。加えて単管支持（Pole mount）でもあり、重量の条件も満たさない。', 'Mast 12 は道路側（Street Side）で見通しの条件は満たすが、単管支持（Pole mount）のため新しいユニットの重量を支えられず除外される。'] },
      { tag: '詳細', qid: 'v6q63p', t: ['p3detail'], s: 'Why does the man say the crew must finish in a single day?',
        c: ['Noise from the work bothers top-floor tenants.', 'The network has to be back up by morning.', 'A window-cleaning team needs the roof next.', 'Their next job starts the following day.'],
        a: 1,
        e: '男性が「そのマスト（今回の設置先）は建物の無線ネットワークの通信を担っており、切り離した分は明日誰かがログオンする前に通信を回復させておく必要がある」と述べている。',
        w: ['最上階の入居者が騒音を気にするという記述は会話のどこにも出てこない。', '正解。', '窓拭き業者が屋上を必要とするという記述は会話のどこにも出てこない。', '翌日に次の現場が控えているという記述は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v6q64p', t: ['p3detail'], s: 'What does the man say will happen if the weather worsens?',
        c: ['Installation will move to the following week.', 'Everyone will reach the roof by the stairwell.', 'More workers will join the crew for the day.', 'The crew will put a cover over the equipment.'],
        a: 0,
        e: '男性は「雨が降り出したら作業を中止し、クレーンが明日以降予約で埋まっているため翌日ではなく来週に持ち越すことになる」と述べている。',
        w: ['正解。', '階段で屋上に上がるという記述は会話のどこにも出てこない。', '追加の作業員を投入するという記述は会話のどこにも出てこない。', '機材にカバーをかけるという記述は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 65–67（図表）────────────────────────────────── */
  /* 図表・正解はくじ（65=B=Room 3, 66=D, 67=C）。表は凍結（Room/Layout/
     Screen）。音声は行名（Room 18 等）や Theatre/Boardroom・Pull-down/
     Wall-mounted を一度も読み上げず、申し送りどおりの言い換え（前向きに
     並んだ椅子の配置／1つの大テーブルを囲む配置、巻き下ろす投影幕／固定の
     画面）で伝えている。座席配置（Theatre）と画面（Wall-mounted）の
     2条件を両方拾って初めて Room 3 に決まる。Q66・Q67 は非図表設問の
     ため t を明示した。
     監査で4点を直した：①「a fixed one on the wall」が Wall-mounted の
     語をそのまま言っていたので「a fixed one」に削り、fixed＝巻き下ろせ
     ない、の推論を要る形にした。②vocab の ground floor が本文に無い
     語だったので rule out に差し替えた（ja・exp の「1階」も、
     downstairs からの推測にすぎないので「階下」に直した）。
     ③porter's desk は英式なので、話者を M-Am から M-Br に統一した。
     ④Q67 の根拠が選択肢の group's page とほぼ逐語だったので、1行目の
     society を使って「our society's page」に言い換えた。
     2026-09-27 第2巡監査：①Q65 exp・why[0] を、男性の最終確定発話
     "that's the room with the fixed screen and forward-facing seating"
     を軸にした書き方に直した。②Q67 exp の「時間・部屋・鍵の受け取り方」
     の「時間」が本文に無い付け足しだったので削り、女性の最終発話を
     逐語で引く形にした。③ja・Q66 exp の「門衛のデスク」から「のデスク」
     を削った（本文を pick them up from the porters on the floor below
     に言い換えたため。D の真偽は変えていない）。④vocab を porter's
     desk→porter に差し替えた。⑤本文冒頭の Which one have we been
     given?→Which one will we be in? も言い換えた。stem・選択肢・
     answer は変更なし。 */
  set({
    n: [65, 66, 67], lv: 4, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Meeting Room Assignments — Campus Booking',
      head: ['Room', 'Layout', 'Screen'],
      rows: [
        ['Room 18', 'Theatre', 'Pull-down'],
        ['Room 6', 'Boardroom', 'Wall-mounted'],
        ['Room 24', 'Boardroom', 'Pull-down'],
        ['Room 3', 'Theatre', 'Wall-mounted'],
      ],
    },
    s: [
      { role: 'W-Cn', text: 'Hi, I\'m calling about the room for our society\'s meeting next Thursday. Which one will we be in?' },
      { role: 'M-Br', text: 'Let me check — you need seating for around thirty, all facing the front for a talk, is that right?' },
      { role: 'W-Cn', text: 'That\'s right — it\'s a guest speaker, so rows of forward-facing chairs would suit us better than everyone sitting round one big table.' },
      { role: 'M-Br', text: 'That rules out two of them. Do you need a screen you can roll down, or is a fixed one fine?' },
      { role: 'W-Cn', text: 'A fixed one\'s fine — we\'re only showing a few slides.' },
      { role: 'M-Br', text: 'Right, that\'s the room with the fixed screen and forward-facing seating. I\'ll confirm it on the system now.' },
      { role: 'W-Cn', text: 'Thanks. Anything I should know about picking up keys?' },
      { role: 'M-Br', text: 'Yes — for evening bookings, keys aren\'t held here. You\'ll pick them up from the porters on the floor below before you go up.' },
      { role: 'W-Cn', text: 'Good to know. I\'ll put all of that up on our society\'s page for the members.' },
    ],
    ja: '学生団体の代表の女性が、来週木曜のミーティング用に割り当てられた部屋について施設予約担当の男性に問い合わせる。ゲスト講師を招くため前向きに並んだ椅子の配置を希望すると伝えると、対象が2部屋に絞られる。続けて画面は固定式で構わないと伝えると、残る条件に合う部屋が1つに決まる。男性は夜間予約の場合、鍵はこの事務所では扱っておらず階下の門衛から受け取る必要があると案内する。女性は、部屋の割り当てや鍵の受け取り方法など今聞いた内容をまとめて自分たちの団体のページに掲載し、メンバーに知らせると答える。',
    v: [['forward-facing (seating)', '前向きに並んだ（座席）'], ['roll down (a screen)', '（スクリーンを）巻き下ろす'], ['porter', '門衛・受付係'], ['rule out', '除外する']],
    q: [
      { tag: '図表', qid: 'v6q65p', s: 'Look at the graphic. Which room will the group be assigned?',
        c: ['Room 18', 'Room 3', 'Room 24', 'Room 6'],
        a: 1,
        e: '女性は大テーブルを囲む形より前向きの椅子の列（Theatre）がよいと述べ、男性はこれで2部屋（Boardroom）が外れると言う。巻き下ろす画面が要るか尋ねられた女性が「固定のもので構わない」と答えたのを受けて、男性は "that\'s the room with the fixed screen and forward-facing seating" と、固定の画面（Wall-mounted）で前向きの座席（Theatre）の部屋に決めている。両方を満たすのは Room 3 だけである。',
        w: ['Room 18 は前向きの座席（Theatre）だが画面は巻き下ろし式（Pull-down）で、男性が割り当てた "the room with the fixed screen" に当たらない。', '正解。', 'Room 24 は1つの大テーブルを囲む配置（Boardroom）であり、女性が求めた前向きに並んだ椅子の配置ではないため除外される。画面も巻き下ろし式（Pull-down）である。', 'Room 6 は1つの大テーブルを囲む配置（Boardroom）であり、女性が求めた前向きに並んだ椅子の配置ではないため除外される。'] },
      { tag: '詳細', qid: 'v6q66p', t: ['p3detail'], s: 'What does the man say about the room booking policy?',
        c: ['Each group gets one booking per week.', 'Empty rooms go to other groups after fifteen minutes.', 'Groups have to leave by ten at night.', 'Keys come from the porter\'s desk downstairs.'],
        a: 3,
        e: '男性は「夜間の予約では鍵はこの事務所では扱っておらず、階下の門衛から受け取ってから上がってほしい」と述べている。',
        w: ['グループごとに週1回までという予約制限については会話のどこにも出てこない。', '空室が15分で他グループに回されるという記述は会話のどこにも出てこない。', '夜10時までに退出しなければならないという記述は会話のどこにも出てこない。', '正解。'] },
      { tag: '次の行動', qid: 'v6q67p', t: ['p3detail'], s: 'What will the woman most likely do next?',
        c: ['E-mail the list of attendees to the office', 'Pay a deposit to secure the booking', 'Post the room details on the group\'s page', 'Visit the room to check its size'],
        a: 2,
        e: '女性は "I\'ll put all of that up on our society\'s page for the members." と述べ、部屋の割り当てや鍵の受け取り方など今聞いた内容を、団体のページに載せてメンバーに知らせると言っている。',
        w: ['出席者名簿を事務局にメールするという話は会話のどこにも出てこない。', '予約の保証金を払うという話は会話のどこにも出てこない。', '正解。', '部屋の広さを確認しに行くという話は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 68–70（図表）────────────────────────────────── */
  /* 図表・正解はくじ（68=B=Booth 22, 69=D, 70=A）。表は凍結（Booth/
     Flooring/Next To）。
     監査で致命的1件・要修正3件を直した（レビュー役が解き直し済みの
     スクリプトに差し替え）：①旧稿は "easier on their feet than timber"
     と "the carpeted booth" でセルの語（Timber・Carpet）をほぼそのまま
     言っており、コード内コメントの「一度も読み上げず」は事実と違って
     いた。②W-Am（米）の timber・M-Br（英）の coat check が英米逆
     だった。③Q69 は男性が電話で希望を聞いて割り当てを決めた設定なのに
     "this year's list came from requests on the applications" と
     噛み合わない台詞になっていた。④Q70 が致命的：
     "our panels are coming by courier, not the printer" は運び手
     （courier）を肯定しているだけで送り手（印刷業者）を否定しておらず、
     「印刷業者が宅配便で直送する」として誤答Cも同時に真になっていた。
     新稿は、女性が希望を伝えるだけで割り当てが決まる会話に作り替え、
     床材（柔らかい＝Carpet）と近接エリア（静かな一角＝Cloakroom側）の
     2条件を両方拾って初めて Booth 22 に決まる。パネルは「すでに印刷業者
     から届いて自社オフィスにあり、配送業者が会場まで運ぶ」という時系列
     にして、印刷業者が直送する読みを構造的に閉じた。
     Q69 は「昨年と同じ場所か」という女性の質問に「いいえ」と直接答える形
     の明示的な訂正、ユニット全体ではこの1箇所のみ（上限2本以内）。
     2026-09-27 第2巡監査：本文2行目の割り当て理由を「食事の匂いを避け
     たい（キッチン用品を扱っているから）」から「終日プレゼンテーション
     を行うので飲食コーナーから離したい」に差し替えた（前者は業種と
     要望の結びつきが弱かった）。ja・Q69 exp も合わせて直した。Booth 22
     を決める床材・近接エリアの2条件と Q69 の答え（営業部長の要望）は
     変わっていない。stem・選択肢・answer は変更なし。 */
  set({
    n: [68, 69, 70], lv: 4, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Exhibit Booth Assignments — Fennimore Convention Centre',
      head: ['Booth', 'Flooring', 'Next To'],
      rows: [
        ['Booth 31', 'Carpet', 'Café'],
        ['Booth 14', 'Timber', 'Cloakroom'],
        ['Booth 22', 'Carpet', 'Cloakroom'],
        ['Booth 8', 'Timber', 'Café'],
      ],
    },
    s: [
      { role: 'W-Am', text: 'Hi — I\'m checking which booth we\'ve been given for next month\'s show.' },
      { role: 'M-Br', text: 'Let me look... Your sales manager added a note to your application asking for a spot away from the food counters, since your team will be giving talks throughout the day — so you\'re on the quieter side, near where visitors leave their coats.' },
      { role: 'W-Am', text: 'That\'s good. And is the floor soft there? People stand for a while at our demo area.' },
      { role: 'M-Br', text: 'There are two stands on that side, and yours is the one with the soft floor covering — the other\'s on bare boards.' },
      { role: 'W-Am', text: 'Is that where we were last year?' },
      { role: 'M-Br', text: 'No, you were over by the main entrance then.' },
      { role: 'W-Am', text: 'One more thing — our panels are back from the printer and sitting in our office. We\'ve booked a delivery firm to bring them to your loading dock the day before we open.' },
      { role: 'M-Br', text: 'Noted, I\'ll let the loading team know.' },
    ],
    ja: '出展企業の女性担当者が、来月の展示会で自社が割り当てられたブースについて Fennimore Convention Centre の運営スタッフに問い合わせる。担当者は、営業部長から終日プレゼンテーションを行う予定なので飲食コーナーから離れた場所にしてほしいという要望が申込書に添えられていたため、来客がコートを預ける一角に近い静かな側に決まったと説明する。女性がその一角の床が柔らかいか尋ねると、担当者はその側にはブースが2つあり、女性の会社は柔らかい床材のほう、もう一方は板張りだと答える。女性が昨年と同じ場所かと尋ねると、担当者は昨年は正面玄関そばだったと否定する。最後に女性は、展示用パネルはすでに印刷業者から届いて自社オフィスにあり、開幕前日に配送業者が会場の搬入口まで運ぶ手配になっていると伝え、担当者は搬入担当に申し送ると答える。',
    v: [['soft floor covering', '柔らかい床材'], ['bare boards', '（覆いのない）板張りの床'], ['add a note (to an application)', '申込書に一筆添える'], ['delivery firm', '配送業者']],
    q: [
      { tag: '図表', qid: 'v6q68p', s: 'Look at the graphic. Which booth is the woman\'s company assigned to?',
        c: ['Booth 8', 'Booth 22', 'Booth 14', 'Booth 31'],
        a: 1,
        e: '担当者は、営業部長からの要望で来客がコートを預ける一角に近い静かな側に決まったと説明し、続けてその側にある2つのブースのうち女性の会社は柔らかい床材のほうだと述べている。表でその側（Cloakroom側）にあるのは Booth 14（Timber）と Booth 22（Carpet）で、柔らかい床材（Carpet）に当たるのは Booth 22 だけである。',
        w: ['Booth 8 は軽食の売店に近い側（Café側）で板張りの床（Timber）である。女性の会社が決まった静かな側（Cloakroom側）でも柔らかい床材（Carpet）でもないため除外される。', '正解。', 'Booth 14 は静かな側（Cloakroom側）で条件を満たすが、床は板張り（Timber）であり、女性の会社に決まった柔らかい床材ではないため除外される。', 'Booth 31 は柔らかい床材（Carpet）で条件を満たすが、軽食の売店に近い側（Café側）であり、女性の会社に決まった静かな側ではないため除外される。'] },
      { tag: '詳細', qid: 'v6q69p', t: ['p3detail'], s: 'What does the man say about the booth assignment?',
        c: ['It follows the order in which exhibitors registered.', 'It came from a random draw last month.', 'It keeps her company in last year\'s spot.', 'It reflects a request from her sales manager.'],
        a: 3,
        e: '男性は「営業部長から、終日プレゼンテーションを行う予定なので飲食コーナーから離れた場所にしてほしいという要望が申込書に添えられていたため、静かな側に決まった」と説明している。',
        w: ['登録順で決まるという記述は会話のどこにも出てこない。', '先月の抽選で決まったという記述は会話のどこにも出てこない。', '「昨年と同じ場所か」という女性の質問に対し、男性は "No, you were over by the main entrance then." と述べており、昨年は正面玄関そばだったと否定している。今年の静かな側とは別の場所であり、昨年の場所を維持しているという記述と正面から矛盾する。', '正解。'] },
      { tag: '詳細', qid: 'v6q70p', t: ['p3detail'], s: 'According to the woman, how will her display materials arrive?',
        c: ['A courier company will deliver them.', 'Her colleague will drive them over.', 'The printer will send them directly.', 'She will carry them in herself.'],
        a: 0,
        e: '女性は「展示用パネルはすでに印刷業者から届いて自社オフィスにあり、開幕前日に配送業者が会場の搬入口まで運ぶ手配になっている」と述べている。',
        w: ['正解。', '同僚が車で運ぶという記述は会話のどこにも出てこない。', '女性は "our panels are back from the printer and sitting in our office. We\'ve booked a delivery firm to bring them to your loading dock" と述べており、パネルはすでに印刷業者の手を離れて自社オフィスにあり、会場まで運ぶのは印刷業者ではなく別に手配した配送業者であると説明している。印刷業者が直接届けるという記述はこれと正面から矛盾する。', '女性自身が持ち込むという記述は会話のどこにも出てこない。配送業者が届けると述べている。'] },
    ],
  }),
];
