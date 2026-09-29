/* =============================================================
   予想模試 Vol.1 — Part 4（No.71–100）
   終盤 2 セットは図表問題。

   2026-09-29 全面書き下ろし（先読み対策・設問先行／正解はくじ方式、工程4）。
   stem・選択肢・図表（Q95, Q98）は `v15/plans/vol1-final-P4.txt` で凍結済み、
   正解は `v15/dice/vol1-l3.txt`（メインが crypto.randomInt で決定）のとおり。
   本文・解説を新規に書き下ろし、設問 id を v1q71p〜v1q100p に採番し直した
   （`qid` を追加し、ヘルパーは `x.qid` を優先するよう変更）。
   ============================================================= */

const talk = (o) => ({
  id: `v1-p4-${o.n[0]}`, part: 4, kind: 'set', kindLabel: o.k || 'talk',
  topics: o.t || ['p4type'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    // id は新規採番（v1q71p〜v1q100p）。x.qid を優先し、無ければ旧来の連番にフォールバック。
    id: x.qid || `v1q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p4type'], tag: x.tag,
  })),
});

export const L3 = [

  /* ── 71–73 留守番電話（ピアノ調律） ──────────────────────
     場面・くじは vol1-final-P4.txt / dice/vol1-l3.txt の No.71–73（71=C, 72=A, 73=A）。
     用件（料金値上げ）を冒頭近くで明言し、技術者の交代は明示的に否定して閉じた
     （「同じ技術者」）。訪問内容はペダル点検のみ、依頼はピアノ周りを空けることのみに絞った。
     新規固有名 Meredith Dunbar（Darnell Piano Service の担当者。来訪する技術者ではない）・
     Mr. Delling（客）は D/M 頭字、v15/names-used.txt・assets/data 全体と grep 照合済み（未使用）。
     2026-09-29 監査反映：S1 の "returning your call" を削除（(A) 確認の電話に寄る読みを消す）。
     S2 の "have gotten" → "have become"（W-Au に米式は不自然）、"than last year" → "than last time"
     （"last spring" と時期がずれるため）。S3・S4 を1文に統合し「同じ技術者」の1本だけで閉じる。
     S5 は "clear the area … without moving furniture" のちぐはぐな言い方をやめ、
     "move any chairs, boxes, or plants away from the piano" に言い換えて申し送りの依頼を1つに保つ。
     S6 の「電話して」（折り返し依頼）を削除（申し送り「依頼は1つだけ」違反だったため）。
     2026-09-29 監査第2巡反映：S2 の値上げ理由「調律ピンが値上がりした」は、標準調律ではピンを
     交換しない（ピアノに詳しい読み手には不自然）ため、"our travel costs have risen quite a bit"
     （出張費の上昇）に差し替えた。why[0]（Q72）の引用の大文字を本文（"and while she's there"）に
     合わせて小文字に修正。ja の技術者の記述と値上げ理由の訳も合わせて直した。 */
  talk({
    n: [71, 72, 73], lv: 3, k: 'telephone message',
    s: [
      { role: 'W-Au', text: `Hello, Mr. Delling, this is Meredith Dunbar from Darnell Piano Service, calling about the tuning we have booked for next Tuesday afternoon.` },
      { role: 'W-Au', text: `The main reason I'm calling is to let you know that our fee for a standard tuning has gone up since your piano was last serviced — our travel costs have risen quite a bit, so the visit will now cost twelve dollars more than last time.` },
      { role: 'W-Au', text: `It'll be the same technician who worked on your piano last spring, and while she's there, she'll also take a look at the pedals, since it's been a while since anyone checked the mechanism underneath the keyboard.` },
      { role: 'W-Au', text: `One small request before she arrives — could you move any chairs, boxes, or plants away from the piano, so there's enough room to work from both sides?` },
      { role: 'W-Au', text: `We'll see you on Tuesday.` },
    ],
    ja: `ダーネル・ピアノ・サービスのメレディス・ダンバーが、来週火曜午後に調律予約が入っている客デリング氏の留守電に残したメッセージ。主な用件は、出張にかかる費用が上がったため標準調律の料金が前回より12ドル上がったことを伝えること。担当技術者は、前回の春に調律したのと同じ人で、訪問時にはペダルも点検する予定。訪問前に、両側から作業できるよう椅子や箱、鉢植えなどをピアノの周りから移動しておいてほしいと依頼する。火曜に会うと伝えて締めくくる。`,
    v: [['tuning', '調律'], ['pedal', 'ペダル'], ['mechanism', '機構'], ['keyboard', '鍵盤']],
    q: [
      { tag: '概要', qid: 'v1q71p', s: 'What is the purpose of the call?',
        c: ['To confirm the start time of the visit', 'To explain a change of technician', 'To report an increase in the service fee', 'To describe a new cancellation policy'],
        a: 2,
        e: `電話の主目的は、標準調律の料金が上がったことを伝えることである。"The main reason I'm calling is to let you know that our fee for a standard tuning has gone up since your piano was last serviced" と明言されている。`,
        w: [
          `開始時刻の確認ではない。本文は料金値上げの報告を電話の主旨としており、訪問の開始時刻には触れていない。`,
          `技術者の交代ではない。"It'll be the same technician who worked on your piano last spring" と、前回と同じ技術者が来ると述べている。`,
          `正解。"The main reason I'm calling is to let you know that our fee for a standard tuning has gone up since your piano was last serviced" と、料金値上げの報告が電話の主目的だと明言している。`,
          `キャンセル規定の説明ではない。本文にキャンセルに関する言及はない。`,
        ] },
      { tag: '詳細', qid: 'v1q72p', s: 'What is mentioned about the visit?',
        c: ["It will include a check of the pedals", "It will last for two hours", "It will involve an electronic tuner", "It will be the first of two visits"],
        a: 0,
        e: `訪問中の作業としてペダルの点検が挙げられている。"she'll also take a look at the pedals" とある。`,
        w: [
          `正解。"while she's there, she'll also take a look at the pedals" と、ペダルの点検を行うと述べている。`,
          `所要時間についての言及はない。`,
          `電子式チューナーについての言及はない。`,
          `2回のうちの1回目という言及はない。本文は通常の調律訪問として述べており、続く2回目の訪問には触れていない。`,
        ] },
      { tag: '依頼', qid: 'v1q73p', s: 'What does the caller ask the listener to do?',
        c: ['Clear the area around the piano', "Send a photo of the piano's serial number", 'Keep the room at a steady temperature', 'Make a note of keys that stick'],
        a: 0,
        e: `訪問前の依頼として、ピアノ周りから物を移動しておくよう頼んでいる。"could you move any chairs, boxes, or plants away from the piano" とある。`,
        w: [
          `正解。"could you move any chairs, boxes, or plants away from the piano, so there's enough room to work from both sides" と依頼している。`,
          `シリアル番号の写真の送付についての依頼はない。`,
          `室温を一定に保つことについての依頼はない。`,
          `鍵盤の引っかかりを記録することについての依頼はない。`,
        ] },
    ],
  }),

  /* ── 74–76 店内放送（園芸用品店） ──────────────────────
     くじは No.74=C, 75=D, 76=B。配布物（肥料）は入口付近には置かず、入口付近の物はクッション
     の陳列のみにして重複を避けた。温室ツアーは1回のみ、時刻も1つだけ提示。新規固有名なし。 */
  talk({
    n: [74, 75, 76], lv: 3, k: 'announcement',
    s: [
      { role: 'M-Br', text: `Attention, shoppers: welcome to Dewhurst Garden Centre, and thanks for coming in on such a lovely morning.` },
      { role: 'M-Br', text: `Today only, everyone who spends over twenty pounds at the till will be handed a small bag of fertiliser for their vegetable beds, so make sure you mention it at checkout.` },
      { role: 'M-Br', text: `You may have noticed the rack of cushions for outdoor furniture just past the main doors as you came in — worth a look if your patio chairs could use a refresh before summer.` },
      { role: 'M-Br', text: `For those of you here for our monthly greenhouse tour, please gather by the ticket desk at half past ten; the tour leaves promptly and runs about forty minutes.` },
      { role: 'M-Br', text: `Enjoy your visit, and feel free to ask any of our staff in green aprons if you need a hand finding something.` },
    ],
    ja: `デューハースト・ガーデンセンターの店内放送。本日は20ポンド以上購入した客に野菜用の肥料の小袋を配布すると案内する。入口を入ってすぐのところには屋外用クッションの陳列があると伝える。月例の温室ツアーは10時半にチケットデスク集合で、所要約40分。最後に、緑のエプロンを着けたスタッフに気軽に声をかけるよう呼びかける。`,
    v: [['till', 'レジ'], ['fertiliser', '肥料'], ['patio', 'テラス、パティオ'], ['apron', 'エプロン']],
    q: [
      { tag: '詳細', qid: 'v1q74p', s: 'According to the announcement, what will be given away today?',
        c: ['A pair of cotton garden gloves', 'A reusable canvas tote bag', 'A small bag of plant fertilizer', 'A voucher for a future purchase'],
        a: 2,
        e: `本日配布されるのは肥料の小袋である。"will be handed a small bag of fertiliser for their vegetable beds" とある。`,
        w: [
          `綿製のガーデニング用手袋についての言及はない。`,
          `再利用可能なキャンバス地のトートバッグについての言及はない。`,
          `正解。"everyone who spends over twenty pounds at the till will be handed a small bag of fertiliser for their vegetable beds" と述べている。`,
          `次回使えるクーポン券についての言及はない。`,
        ] },
      { tag: '詳細', qid: 'v1q75p', s: 'What does the announcement say is located near the entrance?',
        c: ['A display of discounted potted plants', 'A table of new garden tools', 'A stand with bird feeders', 'A rack of outdoor cushions'],
        a: 3,
        e: `入口付近にあるのは屋外用クッションの陳列である。"the rack of cushions for outdoor furniture just past the main doors" とある。`,
        w: [
          `値引きされた鉢植えの陳列についての言及はない。`,
          `新しい園芸道具のテーブルについての言及はない。`,
          `餌台の陳列についての言及はない。`,
          `正解。"the rack of cushions for outdoor furniture just past the main doors" と、入口を入ってすぐのところにクッションの陳列があると述べている。`,
        ] },
      { tag: '詳細', qid: 'v1q76p', s: 'When will the greenhouse tour begin?',
        c: ['At 10:00 A.M.', 'At 10:30 A.M.', 'At 11:00 A.M.', 'At 11:30 A.M.'],
        a: 1,
        e: `温室ツアーは10時半に始まる。"please gather by the ticket desk at half past ten" とある。`,
        w: [
          `集合時刻として述べているのは"half past ten"だけで、10時という時刻は述べていない。`,
          `正解。"gather by the ticket desk at half past ten" と、10時半集合だと述べている。`,
          `集合時刻として述べているのは"half past ten"だけで、11時という時刻は述べていない。`,
          `集合時刻として述べているのは"half past ten"だけで、11時半という時刻は述べていない。`,
        ] },
    ],
  }),

  /* ── 77–79 ラジオ広告（自動車教習所） ──────────────────────
     くじは No.77=C, 78=D, 79=B。対象は「仕事で運転する従業員」のみに絞り、他の3対象
     （未経験者・海外からの転入者・長期ブランク明け）には触れない。料金に含まれるものは
     シミュレーター利用のみ、講師の特長は経験年数のみに絞った。新規固有名なし。
     2026-09-29 監査反映：S4「Sessions run evenings and weekends」が「平日夜間＋週末＝週7日」と
     読めて (C) が第二の正解になっていたため削除し、コース回数・団体受講の案内に差し替えた。
     S5 の「get back on the road」が長期ブランク明けの運転者（(D)）を連想させていたため、
     「毎日の運転をより安全に」という言い方に差し替えた。level は制作時 4 → 監査反映で 3
     （3問とも該当箇所の逐語照合で解ける水準のため）。 */
  talk({
    n: [77, 78, 79], lv: 3, k: 'advertisement',
    s: [
      { role: 'W-Am', text: `Does your job have you behind the wheel more than you'd like? Mulvaney Driving School now offers a course built for employees who drive company vehicles as part of their work — deliveries, site visits, client calls, all of it.` },
      { role: 'W-Am', text: `The course price already includes time on our driving simulator, so you can practice handling tight loading docks and busy intersections without putting an actual vehicle at risk.` },
      { role: 'W-Am', text: `Every instructor on our team has been teaching for more than ten years, so whatever your employer needs documented for insurance purposes, we've seen it before.` },
      { role: 'W-Am', text: `The full course is four sessions long, and we can also run it for a group of drivers from the same company.` },
      { role: 'W-Am', text: `Call Mulvaney Driving School today, and make every working day on the road a safer one.` },
    ],
    ja: `マルヴェイニー・ドライビング・スクールのラジオ広告。業務で社用車を運転する従業員向けの講習コースを宣伝している。料金にはシミュレーターの利用時間が含まれ、狭い荷降ろし場や交通量の多い交差点での運転を、実車を使わずに練習できる。講師陣は全員10年以上の指導歴があり、保険関連の書類が必要な場合にも対応できるとする。コースは全4回で、同じ会社の複数の受講者向けにまとめて実施することもできる。毎日の運転をより安全なものにしようと呼びかけて締めくくる。`,
    v: [['loading dock', '荷降ろし場'], ['simulator', 'シミュレーター'], ['intersection', '交差点']],
    q: [
      { tag: '概要', qid: 'v1q77p', s: 'What is being advertised?',
        c: ['Lessons for complete beginners behind the wheel', 'Lessons for motorists who recently moved from abroad', 'Lessons for employees who drive for work', 'Lessons for drivers returning after a long break'],
        a: 2,
        e: `広告されているのは、仕事で運転する従業員向けのレッスンである。"a course built for employees who drive company vehicles as part of their work" とある。`,
        w: [
          `運転未経験者向けではない。対象は"employees who drive company vehicles as part of their work"であり、すでに業務で運転している人たち向けである。`,
          `海外から移ってきた運転者向けという言及はない。`,
          `正解。"a course built for employees who drive company vehicles as part of their work" と、業務で運転する従業員向けのコースだと述べている。`,
          `長期のブランクがある運転者向けという言及はない。`,
        ] },
      { tag: '詳細', qid: 'v1q78p', s: 'According to the advertisement, what is included in the price of the lessons?',
        c: ["Pickup from the student's home", 'A printed guide to current road rules', 'Access to an online video library', 'Time on a driving simulator'],
        a: 3,
        e: `料金にはシミュレーターの利用時間が含まれる。"The course price already includes time on our driving simulator" とある。`,
        w: [
          `自宅への送迎についての言及はない。`,
          `道路規則の冊子についての言及はない。`,
          `オンライン動画ライブラリについての言及はない。`,
          `正解。"The course price already includes time on our driving simulator" と述べている。`,
        ] },
      { tag: '詳細', qid: 'v1q79p', s: 'What does the advertisement say about the instructors?',
        c: ['They teach each student from start to finish', 'They have more than ten years of experience', 'They offer lessons seven days a week', 'They provide feedback after each lesson'],
        a: 1,
        e: `講師は全員10年以上の指導経験を持つとしている。"Every instructor on our team has been teaching for more than ten years" とある。`,
        w: [
          `1人の生徒を最初から最後まで担当するという言及はない。`,
          `正解。"Every instructor on our team has been teaching for more than ten years" と述べている。`,
          `週7日レッスンを行うという言及はない。`,
          `毎回のレッスン後にフィードバックを行うという言及はない。`,
        ] },
    ],
  }),

  /* ── 80–82 会議の抜粋（観光案内所） ──────────────────────
     くじは No.80=D, 81=C, 82=D。引用直前は「予約システム業者からの研修担当者派遣の申し出を
     断る」文脈にし、他の3通りの読み（切り替えの順調さ・配置転換の質問・「誰も使ったことがない」
     という声）は入れていない。切り替えの話自体を出していないので、Q81「先週の出来事」＝地図の
     誤りと衝突しない。Lucia は凍結済みの固有名で新規ではない。他に新規固有名なし。
     2026-09-29 監査反映：S3 は断りの言葉 "I told them we won't need that" を引用の直前から外し、
     「前回と同じ答えを返した」という間接的な言い方にした（引用自体が断りの理由として機能する）。
     あわせて "so she can walk everyone else through it whenever it comes up" を削除
     （Lucia への役割の割り振りが (C) 人員配置の決定に寄っていたため）。S4 は地図の差し替えを
     話し手が自分で済ませた、という言い方にして「聞き手への依頼」から外した（(A) が部分的に真に
     なっていた申し送り違反の是正）。S5 は「施錠後に鍵を事務所の中に戻す」という理屈の合わない
     言い方をやめ、"key safe by the staff entrance" に差し替えた（(D) の範囲内）。
     ja の館名「モーウィック」は本文中に無いため一般名に戻した。 */
  talk({
    n: [80, 81, 82], lv: 4, k: 'excerpt from a meeting',
    s: [
      { role: 'M-Cn', text: `Right, a few things before you head out to the desk this morning.` },
      { role: 'M-Cn', text: `First, the software company that runs our tour and accommodation booking system called again yesterday, offering to send one of their trainers down for a half-day session next week.` },
      { role: 'M-Cn', text: `I'll give them the same answer I gave last time: Lucia used that booking system at her last job.` },
      { role: 'M-Cn', text: `Second, the printer finally sent back the corrected town maps, and I've already put them out in place of the old ones. If you remember, the batch that came in last week had the wrong street numbers printed along the harbour front.` },
      { role: 'M-Cn', text: `Last thing — from now on, whoever locks up in the evening needs to drop the office keys in the key safe by the staff entrance rather than taking them home, since we've had two different people show up unable to get in the next morning.` },
      { role: 'M-Cn', text: `That's everything. Have a good one.` },
    ],
    ja: `観光案内所の職員ミーティングの抜粋。案内所の予約システムを提供する会社が研修担当者の派遣を再度申し出てきたが、責任者は前回と同じ答え、すなわち Lucia が前職で同じ予約システムを使っていたという理由で断るつもりだと述べる。次に、印刷会社から町の地図の訂正版がようやく届き、古い地図はもう新しいものに差し替え済みだと伝える。先週届いた地図には街路の番地に誤りがあったのだと説明する。最後に、夜間に施錠した職員は鍵を自宅に持ち帰らず、職員通用口のキーセーフに入れるよう、翌朝入れずに困った職員が2人いたことを理由に依頼する。`,
    v: [['booking system', '予約システム'], ['half-day session', '半日の研修'], ['harbour front', '港沿いの地区'], ['lock up', '施錠する']],
    q: [
      { tag: '意図', t: ['p3int'], qid: 'v1q80p', s: 'Why does the speaker say, "Lucia used that booking system at her last job"?',
        c: ['To account for a smooth changeover', 'To correct a mistaken belief about staff', 'To explain a recent staffing decision', 'To turn down an offer of outside help'],
        a: 3,
        e: `直前で"I'll give them the same answer I gave last time"と述べ、続けて引用（Lucia が前職で同じ予約システムを使っていたこと）を、外部の研修担当者派遣の申し出を断る理由として挙げている。よって外部からの支援の申し出を断る意図である。`,
        w: [
          `スムーズな引き継ぎを説明しているのではない。本文にシステムの切り替え自体の話は出てこない。`,
          `スタッフについての誤解を正しているのではない。訂正するような誤った思い込みへの言及はない。`,
          `最近の人員配置の決定を説明しているのではない。Lucia の配置転換についての話は出てこない。`,
          `正解。直前で"I'll give them the same answer I gave last time"と述べ、続けて"Lucia used that booking system at her last job"と、外部の研修担当者派遣の申し出を断る理由を挙げている。`,
        ] },
      { tag: '詳細', qid: 'v1q81p', s: 'According to the speaker, what happened last week?',
        c: ['A bus tour company ended its contract', 'A cruise ship made an unplanned stop', 'A new town map came back with errors', 'A travel blogger praised the local walking trails'],
        a: 2,
        e: `先週の出来事は、新しく届いた町の地図に誤りがあったことである。"the batch that came in last week had the wrong street numbers printed along the harbour front" とある。`,
        w: [
          `バスツアー会社との契約終了についての言及はない。`,
          `クルーズ船の予定外の寄港についての言及はない。`,
          `正解。"the batch that came in last week had the wrong street numbers printed along the harbour front" と、先週届いた地図に誤りがあったと述べている。`,
          `旅行ブロガーが遊歩道を称賛したという言及はない。`,
        ] },
      { tag: '依頼', qid: 'v1q82p', s: 'What does the speaker ask the listeners to do?',
        c: ['Restock the brochure racks each morning', 'Sign up for shifts on the holiday weekend', 'Count the stock in the gift shop', 'Return keys to the office each evening'],
        a: 3,
        e: `職員に対し、夜間に施錠した際は鍵を自宅に持ち帰らず職員通用口のキーセーフに入れるよう依頼している。"whoever locks up in the evening needs to drop the office keys in the key safe by the staff entrance rather than taking them home" とある。`,
        w: [
          `毎朝パンフレット棚を補充するようにとの依頼はない。地図の差し替えは話し手が自分で済ませており、聞き手への依頼ではない。`,
          `祝日の週末のシフト登録についての依頼はない。`,
          `土産物店の在庫確認についての依頼はない。`,
          `正解。"whoever locks up in the evening needs to drop the office keys in the key safe by the staff entrance rather than taking them home" と依頼している。`,
        ] },
    ],
  }),

  /* ── 83–85 講話（公立図書館） ──────────────────────
     くじは No.83=B, 84=B, 85=A。中心となる活動は宅配サービスのみに絞り、他の3活動
     （児童向け読書・成人向けPC講座・寄贈図書の即売会）には触れない。持ち物・報告先も
     それぞれ1つのみ述べる。報告先は前置きで「受付デスクではない」と対比して閉じた。
     新規固有名なし。
     2026-09-29 監査反映：S2 が「事務所で写真を撮ってもらう」だったため、正解(B)「写真を持参する」
     と向きが逆だった（致命的）。「最近撮った証明写真サイズの写真を持参する」に書き換え、受付が
     バッジ用に確認する、という流れに直した。S3 の冗長な "ready and waiting for you" を整理。
     ja の館名「モスウッド」は本文中に無いため一般名に戻した。 */
  talk({
    n: [83, 84, 85], lv: 3, k: 'talk',
    s: [
      { role: 'W-Br', text: `Thanks for coming in today — you're all here because you signed up to help with our home delivery service, bringing library books out to residents who aren't able to get to the branch themselves.` },
      { role: 'W-Br', text: `On your first shift, please bring along a passport-sized picture of yourself taken in the last few months, so the front office can make up your volunteer badge — that's what the front desk checks before handing you the delivery bags each time.` },
      { role: 'W-Br', text: `Deliveries go out twice a week, usually to five or six addresses, driven out from the branch in one of our vans, and everything you need — the books, the route sheet, a bag with the library's name on it — will be ready when you arrive.` },
      { role: 'W-Br', text: `During your shift, you'll report to me directly, as the volunteer program coordinator, rather than whoever happens to be on the front desk, so if a resident asks to change their book list or a delivery falls through, come find me first.` },
      { role: 'W-Br', text: `Any questions before we go through the route sheets together?` },
    ],
    ja: `公立図書館のボランティア担当職員が、新しく登録したボランティア向けに話している。中心となる活動は、自力で図書館に来られない住民宅へ本を届ける宅配サービス。初回のシフトには、最近撮った証明写真サイズの写真を持参し、事務所でボランティア用バッジを作ってもらう必要があり、それが配達用のバッグを受け取る際に受付で確認される。配達は週2回、館の車で5〜6軒を回り、本やルート表、館名入りのバッグは用意されている。シフト中は受付デスクの職員ではなく、話している本人（ボランティア・プログラムの担当責任者）に直接報告するよう伝える。最後にルート表を一緒に確認する前に質問がないか尋ねる。`,
    v: [['front office', '事務局、事務所'], ['route sheet', '配達ルート表'], ['coordinator', '担当責任者'], ['branch', '（図書館の）分館']],
    q: [
      { tag: '概要', qid: 'v1q83p', s: 'What is the talk mainly about?',
        c: ['A reading program for young children', 'A book delivery service for residents', 'A computer skills class for adults', 'A sale of donated books'],
        a: 1,
        e: `話の中心は住民向けの図書配達サービスである。"you signed up to help with our home delivery service, bringing library books out to residents" とある。`,
        w: [
          `児童向け読書プログラムについての言及はない。`,
          `正解。"you signed up to help with our home delivery service, bringing library books out to residents who aren't able to get to the branch themselves" と述べている。`,
          `成人向けパソコン講座についての言及はない。`,
          `寄贈図書の即売会についての言及はない。`,
        ] },
      { tag: '詳細', qid: 'v1q84p', s: 'What does the speaker say volunteers should bring on their first day?',
        c: ['A signed copy of the volunteer agreement', 'A recent photo for an ID badge', 'A pair of comfortable shoes', 'A list of their available hours'],
        a: 1,
        e: `初日の持ち物として、最近撮った証明写真サイズの写真を持参するよう求めている。"please bring along a passport-sized picture of yourself taken in the last few months" とある。`,
        w: [
          `署名済みのボランティア同意書についての言及はない。`,
          `正解。"please bring along a passport-sized picture of yourself taken in the last few months, so the front office can make up your volunteer badge" と述べている。`,
          `歩きやすい靴についての言及はない。`,
          `対応可能な時間帯のリストについての言及はない。`,
        ] },
      { tag: '詳細', qid: 'v1q85p', s: 'According to the speaker, who will volunteers report to during their shifts?',
        c: ['The coordinator of the volunteer program', 'The head of the library', 'The staff at the front desk', 'The leader of their volunteer team'],
        a: 0,
        e: `シフト中の報告先は、話している本人であるボランティア・プログラムの担当責任者である。"you'll report to me directly, as the volunteer program coordinator" とある。`,
        w: [
          `正解。"you'll report to me directly, as the volunteer program coordinator" と述べている。`,
          `図書館長についての言及はない。`,
          `受付デスクの職員ではない。"rather than whoever happens to be on the front desk" と、受付デスクの職員ではないと述べている。`,
          `ボランティアチームの班長についての言及はない。`,
        ] },
    ],
  }),

  /* ── 86–88 自動音声案内（貸倉庫施設） ──────────────────────
     くじは No.86=A, 87=B, 88=A。平日の閉館時刻は1つのみ提示（土曜は別の値で区別）。
     閉館後アクセスの条件は「1階のみ」の1点に絞った。新規客特典も割引1点のみ。
     新規固有名なし。
     2026-09-29 監査反映：S2 の "gate access is available around the clock" を削除
     （申し送り「閉館後の条件は1つだけ」違反。1階限定の条件だけに絞った）。ロールを
     M-Am → M-Au に変更（英式の "ground floor" 等と揃える。M-Au は 92–94 と2回目）。
     2026-09-29 監査第2巡反映：ロールを M-Au に替えた際に "Monday through Friday"（北米語法）が
     残っていたため "Monday to Friday" に直した（exp・why[0] の引用も同様）。 */
  talk({
    n: [86, 87, 88], lv: 3, k: 'recorded message',
    s: [
      { role: 'M-Au', text: `Thank you for calling Denholm Storage Centre. Our current office hours are Monday to Friday, eight in the morning until five in the evening; on Saturdays we open at nine and close at one.` },
      { role: 'M-Au', text: `If you're an existing customer and need to reach your unit outside office hours, please note that after-hours entry is limited to units on the ground floor — the doors to the upper level are locked once staff have left for the day.` },
      { role: 'M-Au', text: `This month, anyone who signs a new rental agreement receives twenty percent off their first month's rent, no matter which unit size you choose.` },
      { role: 'M-Au', text: `For rates and available units, press one. To speak with a member of staff during office hours, press two. To hear this message again, press three.` },
    ],
    ja: `デンホルム貸倉庫センターの自動音声案内。事務所の営業時間は平日午前8時から午後5時まで、土曜は午前9時から午後1時までと案内する。既存客が営業時間外に自分のユニットに入る場合、入場できるのは1階のユニットのみで、上階への扉はスタッフの退勤後は施錠されると説明する。今月は新規契約者に初月家賃の20%引きを提供する。料金案内は1、スタッフとの通話は2、この案内の再生は3を押すよう案内する。`,
    v: [['office hours', '営業時間'], ['ground floor', '1階'], ['rental agreement', '賃貸契約']],
    q: [
      { tag: '詳細', qid: 'v1q86p', s: 'According to the recording, what time does the office close on weekdays?',
        c: ['At 5:00 P.M.', 'At 5:30 P.M.', 'At 6:00 P.M.', 'At 6:30 P.M.'],
        a: 0,
        e: `平日の事務所の閉館時刻は午後5時である。"Monday to Friday, eight in the morning until five in the evening" とある。`,
        w: [
          `正解。"Monday to Friday, eight in the morning until five in the evening" と述べている。`,
          `平日の閉館時刻として述べているのは"until five in the evening"だけで、5時半という時刻は述べていない。`,
          `平日の閉館時刻として述べているのは"until five in the evening"だけで、6時という時刻は述べていない。`,
          `平日の閉館時刻として述べているのは"until five in the evening"だけで、6時半という時刻は述べていない。`,
        ] },
      { tag: '詳細', qid: 'v1q87p', s: 'What does the recording say about access to units after the office closes?',
        c: ['It costs extra each month', 'It covers units on the ground floor', 'It needs a booking the day before', 'It ends at midnight each night'],
        a: 1,
        e: `閉館後の入場は1階のユニットに限られる。"after-hours entry is limited to units on the ground floor" とある。`,
        w: [
          `追加料金がかかるという言及はない。`,
          `正解。"after-hours entry is limited to units on the ground floor" と述べている。`,
          `前日予約が必要という言及はない。`,
          `終了時刻についての言及はない。`,
        ] },
      { tag: '詳細', qid: 'v1q88p', s: 'What is being offered to new customers this month?',
        c: ["A discount on the first month's rent", 'A free lock included with a new rental', 'A waiver of the administrative fee', 'A larger unit for the same price'],
        a: 0,
        e: `今月の新規客特典は初月家賃の割引である。"anyone who signs a new rental agreement receives twenty percent off their first month's rent" とある。`,
        w: [
          `正解。"anyone who signs a new rental agreement receives twenty percent off their first month's rent" と述べている。`,
          `無料の鍵についての言及はない。`,
          `事務手数料の免除についての言及はない。`,
          `同料金で大きいユニットを提供するという言及はない。`,
        ] },
    ],
  }),

  /* ── 89–91 ラジオニュース（交通局の路線変更） ──────────────────────
     くじは No.89=C, 90=A, 91=A。増便される路線は「川沿い」のみで、他の3路線は
     まとめて「現行維持」と述べて閉じた。増便理由・呼びかけもそれぞれ1点のみ。
     stem の選択肢語 "riverside neighborhoods" は本文で逐語にせず「waterfront communities」
     と言い換えた。新規固有名なし。
     2026-09-29 監査反映：S4「Routes serving downtown, the university, the industrial park,
     and the regional airport will keep their current schedules for now.」が1文で誤答3本を
     明示的に列挙して閉じており、「明示の否定・訂正は1問1本まで」を超え、聞き取りの近道
     （現状維持で名前が挙がらない1本を選ぶ）にもなっていたため削除。代わりに増便の利用者数の
     見込みを述べる文に差し替えた（Q90 の理由・Q91 の呼びかけのどちらにも触れない）。
     あわせて S2 の言い換えを "waterfront communities"（水辺全般を含み得る語）から
     "communities along the riverbank"（より川に近い言い換え）に変更。 */
  talk({
    n: [89, 90, 91], lv: 3, k: 'broadcast',
    s: [
      { role: 'W-Cn', text: `In local news, Dovedale Transit Authority has announced changes to bus service starting next month.` },
      { role: 'W-Cn', text: `The bus line serving the communities along the riverbank will get extra buses during peak hours, cutting the wait between buses on that route nearly in half.` },
      { role: 'W-Cn', text: `According to the authority, the change comes after several hundred new homes opened in that part of town over the past year, and the current schedule hasn't kept pace with the number of residents now commuting from there.` },
      { role: 'W-Cn', text: `The authority expects the extra trips to carry around fifteen hundred more passengers each weekday.` },
      { role: 'W-Cn', text: `Riders are encouraged to look up the new timetable on the authority's website before the changes take effect, since stop times on the affected route will shift by a few minutes in both directions.` },
    ],
    ja: `地域ニュースの放送。ドーヴデイル交通局が来月からのバス路線の変更を発表。川岸沿いの地域を走る路線でピーク時の増便が行われ、その路線の待ち時間はほぼ半分に短縮される。増便の理由は、その地域でこの1年に数百戸の新しい住宅が完成し、現行のダイヤが通勤者の増加に追いついていないため。当局は、この増便により平日一日あたり約1500人多い利用があると見込んでいる。利用客には、変更前に交通局のウェブサイトで新しい時刻表を確認するよう呼びかけている。対象路線では停留所の通過時刻が数分前後にずれるためである。`,
    v: [['peak hours', 'ピーク時、混雑時間帯'], ['commuting', '通勤'], ['timetable', '時刻表'], ['authority', '当局、機関']],
    q: [
      { tag: '詳細', qid: 'v1q89p', s: 'According to the broadcast, which bus route will see increased service?',
        c: ['The route connecting downtown and the university', 'The route serving the industrial park', 'The route along the riverside neighborhoods', 'The route to the regional airport'],
        a: 2,
        e: `増便されるのは川沿いの地域を走る路線である。"The bus line serving the communities along the riverbank will get extra buses during peak hours" とある。`,
        w: [
          `都心と大学を結ぶ路線について、増便されるという言及はない。`,
          `工業団地を通る路線について、増便されるという言及はない。`,
          `正解。"The bus line serving the communities along the riverbank will get extra buses during peak hours" と述べている。`,
          `空港行きの路線について、増便されるという言及はない。`,
        ] },
      { tag: '詳細', qid: 'v1q90p', s: 'What does the broadcast say is the reason for the added service?',
        c: ['A new housing development has opened', 'A major employer has moved to the area', 'A nearby rail line has closed for repairs', 'A petition has called for more buses'],
        a: 0,
        e: `増便の理由は新しい住宅地の開発である。"the change comes after several hundred new homes opened in that part of town over the past year" とある。`,
        w: [
          `正解。"the change comes after several hundred new homes opened in that part of town over the past year" と述べている。`,
          `大手企業の移転についての言及はない。`,
          `近隣の鉄道路線の運休についての言及はない。`,
          `増便を求める署名活動についての言及はない。`,
        ] },
      { tag: '詳細', qid: 'v1q91p', s: 'What are riders encouraged to do before the changes take effect?',
        c: ['Look up the new timetable online', 'Attend a public meeting about the plan', 'Register for text message updates', 'Fill out a short rider survey'],
        a: 0,
        e: `利用客への呼びかけは、新しい時刻表をウェブサイトで確認することである。"Riders are encouraged to look up the new timetable on the authority's website before the changes take effect" とある。`,
        w: [
          `正解。"Riders are encouraged to look up the new timetable on the authority's website before the changes take effect" と述べている。`,
          `説明会への参加についての言及はない。`,
          `テキスト通知への登録についての言及はない。`,
          `利用者アンケートについての言及はない。`,
        ] },
    ],
  }),

  /* ── 92–94 調理実演（料理教室） ──────────────────────
     くじは No.92=D, 93=A, 94=C。実演技法は「肉を焼き付ける」1つのみ。道具の話題も
     「地元業者からの贈り物」1点のみ。Q94 の引用直前は「なぜ6週間もあるのか」という
     過去の質問を置き、コースの長さを正当化する読みに固定した。新規固有名なし
     （地元の仕入れ業者は名前を出さず言及のみ）。
     2026-09-29 監査反映：S4 の "instead of two or three" を削除（「2〜3週で足りるのでは」という
     受講者の意見を含意し、(D)「受講者の発言に反論する」の足場になっていたため）。
     "the timing only comes to your hand through repetition" は不自然な言い回しだったため
     "you only get the timing through repetition" に直した。level は制作時 4 → 監査反映で 3
     （意図問題も直前の質問が答えの向きを直接示す水準のため）。ja の教室名「メリトン」は
     本文中に無いため一般名に戻し、鍋の由来の記述順序も直した。 */
  talk({
    n: [92, 93, 94], lv: 3, k: 'talk',
    s: [
      { role: 'M-Au', text: `All right, let's move on to today's main technique: getting a proper sear on a piece of meat before it finishes cooking.` },
      { role: 'M-Au', text: `This pan I'm using tonight actually came from outside our regular equipment order — one of our regular suppliers here in town dropped it off as a gift a few months back, after we mentioned ours were getting worn out.` },
      { role: 'M-Au', text: `Now, watch how I hold the meat down flat for the first thirty seconds; if you lift it too soon to check underneath, you'll tear the crust that's forming and lose that colour.` },
      { role: 'M-Au', text: `Someone in an earlier group asked why this course runs a full six weeks. This part takes some practice — you only get the timing through repetition, not from watching me do it once.` },
      { role: 'M-Au', text: `Once you've got a feel for it, we'll move on to letting it rest before you plate it up.` },
    ],
    ja: `料理教室での実演トーク。講師が本日の主な技法として、肉に焼き色を付ける工程を実演すると述べる。教室の鍋が傷んできたと話したところ、地元の仕入れ業者が数か月前に贈ってくれたのが、今使っている鍋だと説明する。肉を最初の30秒は動かさず押さえておくこと、早く裏を確認すると焼き色の膜が破れて色が落ちることを説明する。以前の回の受講者から、なぜこのコースが6週間もあるのかと聞かれたことに触れ、この工程には繰り返しの練習が必要で、一度見ただけでは身につかないからだと理由を述べる。感覚がつかめたら、次は休ませてから盛り付ける工程に進むと締めくくる。`,
    v: [['sear', '焼き色を付ける、焼き固める'], ['crust', '（焼き目の）膜、皮'], ['plate up', '盛り付ける']],
    q: [
      { tag: '概要', qid: 'v1q92p', s: 'What is the speaker mainly demonstrating?',
        c: ['A technique for filleting a fish', 'A method for kneading dough', 'A way to plate a dessert', 'A process for searing meat'],
        a: 3,
        e: `実演しているのは肉を焼き付ける工程である。"today's main technique: getting a proper sear on a piece of meat before it finishes cooking" とある。`,
        w: [
          `魚をおろす技法についての言及はない。`,
          `生地をこねる方法についての言及はない。`,
          `デザートの盛り付けについての言及はない。"plate it up" は焼いた肉を仕上げに盛る意味で使われている。`,
          `正解。"today's main technique: getting a proper sear on a piece of meat before it finishes cooking" と述べている。`,
        ] },
      { tag: '詳細', qid: 'v1q93p', s: 'What does the speaker say about the equipment being used?',
        c: ['It was a gift from a local supplier', 'It needs careful cleaning after each use', "It is available in the studio's shop", "It belonged to the speaker's first employer"],
        a: 0,
        e: `使用している鍋は地元の業者からの贈り物である。"one of our regular suppliers here in town dropped it off as a gift a few months back" とある。`,
        w: [
          `正解。"one of our regular suppliers here in town dropped it off as a gift a few months back" と述べている。`,
          `念入りな手入れが必要という言及はない。`,
          `スタジオの売店で購入できるという言及はない。`,
          `話し手の最初の勤務先の所有物だったという言及はない。`,
        ] },
      { tag: '意図', t: ['p3int'], qid: 'v1q94p', s: 'Why does the speaker say, "This part takes some practice"?',
        c: ['To encourage students who are struggling', 'To explain why a step is shown slowly', 'To justify the length of the course', "To disagree with a student's comment"],
        a: 2,
        e: `直前で「以前の回の受講者から、なぜこのコースが6週間もあるのかと聞かれた」ことに触れており、その答えとして「この部分には練習が要る」と続けている。よってコースの長さを正当化する意図である。`,
        w: [
          `苦戦している受講者を励ましているのではない。直前に受講者が苦戦しているという記述はない。`,
          `ゆっくり実演している理由の説明ではない。直前の話題はコースの週数についての質問である。`,
          `正解。直前で"Someone in an earlier group asked why this course runs a full six weeks"と述べており、その答えとして練習の必要性を挙げ、コースの長さを正当化している。`,
          `受講者の発言に異議を唱えているのではない。直前は週数についての質問であり、発言への反論ではない。`,
        ] },
    ],
  }),

  /* ── 95–97 場内放送（サッカー場、図表あり） ──────────────────────
     くじは No.95=B（Gate 3）, 96=D, 97=A。表の語（Home/Visiting/River side/Railway side/
     ゲート番号）は音声に出さず、区分は「地元チームのファン」対「相手チームを応援しに
     来たファン（away side）」、位置は「水に近い側」対「線路側（本文では触れない）」に
     言い換えた。閉鎖ゲートの2属性（away side・水に近い側）を別々の文で伝え、表と
     組み合わせて初めて Gate 3 に一意に絞られる（音声だけ・表だけではいずれも1/4のまま）。
     チーム名は出していない。新規固有名なし。
     2026-09-29 監査反映：S3 の "down by the river" が表のセル語 "River side" の river を
     そのまま使っていたため "down by the water" に差し替えた（論理は変わらず1/4のまま）。
     S2 も「アウェイ用の入口は1つ」という前提のずれを避けるため "one of the two entrances" とした。 */
  talk({
    n: [95, 96, 97], lv: 4, k: 'announcement', t: ['graphic', 'p4type'],
    graphic: {
      t: 'table', title: 'Entry Gates',
      head: ['Gate', 'Supporters', 'Location'],
      rows: [
        ['Gate 16', 'Home', 'River side'],
        ['Gate 3', 'Visiting', 'River side'],
        ['Gate 22', 'Home', 'Railway side'],
        ['Gate 7', 'Visiting', 'Railway side'],
      ],
    },
    s: [
      { role: 'M-Br', text: `Good evening, everyone, and welcome to Dalby Stadium.` },
      { role: 'M-Br', text: `Before kickoff, a note on tonight's gates: one of the two entrances normally used by supporters of the away side will be closed for the whole match.` },
      { role: 'M-Br', text: `It's the one down by the water, so if that's your usual way in, please use one of the other gates instead — stewards are on hand to point you the right way.` },
      { role: 'M-Br', text: `That gate is closed because the organisers are using the space just inside it to set up a fan zone for tonight's fixture, with food stalls and activities before kickoff.` },
      { role: 'M-Br', text: `At halftime, we're pleased to have a local choir performing on the pitch, so please stay in your seats and give them a warm welcome.` },
      { role: 'M-Br', text: `Enjoy the match, and thanks for your support tonight.` },
    ],
    ja: `ダルビー・スタジアムでの試合前の場内放送。キックオフ前の案内として、相手チームを応援しに来たファンが普段使う2つの入口のうち一方を、今夜は試合中ずっと閉鎖すると伝える。その入口は水に近い側にあるとし、普段そこを使う客には他の入口を使うよう案内する。閉鎖の理由は、その入口内側のスペースを今夜のためのファンゾーン（飲食の屋台や催し）として使うためと説明する。ハーフタイムには地元の合唱団がピッチ上で演奏する予定だと案内し、観客に温かい拍手を送るよう呼びかける。最後に観戦を楽しむよう伝えて締めくくる。`,
    v: [['kickoff', 'キックオフ'], ['steward', '警備員、誘導員'], ['fixture', '試合、対戦カード'], ['halftime', 'ハーフタイム']],
    q: [
      { tag: '図表', qid: 'v1q95p', s: 'Look at the graphic. Which gate will be closed tonight?',
        c: ['Gate 16', 'Gate 3', 'Gate 22', 'Gate 7'],
        a: 1,
        e: `話し手は閉鎖する入口について「相手チームを応援しに来たファンが使う2つの入口のうちの一方」（"one of the two entrances normally used by supporters of the away side will be closed for the whole match"）、かつ「水に近い側」（"It's the one down by the water"）と、2つの手がかりを別々の文で述べている。表で Visiting（相手チームのファン）かつ River side（川側）に該当するのは Gate 3 だけである。`,
        w: [
          `Gate 16 は表で Home（地元チームのファン）かつ River side（川側）であり、川側という点は一致するが、地元チームのファン用の入口であり、話し手が挙げた「相手チームのファン用」という条件に合わない。`,
          `正解。表で Visiting（相手チームのファン）かつ River side（川側）に該当するのは Gate 3 のみで、話し手が挙げた2つの条件（相手チームのファン用・川に面した側）の両方に一致する。`,
          `Gate 22 は表で Home（地元チームのファン）かつ Railway side（線路側）であり、いずれの条件にも合わない。`,
          `Gate 7 は表で Visiting（相手チームのファン）だが Railway side（線路側）であり、川に面した側という条件に合わない。`,
        ] },
      { tag: '詳細', t: ['p4type'], qid: 'v1q96p', s: 'What is the reason for the closure?',
        c: ['Workers are repairing the pavement there', 'Engineers are fixing its ticket scanners', 'A television crew is using the space', 'Organizers are setting up a fan zone there'],
        a: 3,
        e: `閉鎖の理由は、その入口内側の空間でファンゾーンを設営するためである。"the organisers are using the space just inside it to set up a fan zone for tonight's fixture" とある。`,
        w: [
          `舗装工事についての言及はない。`,
          `改札機の修理についての言及はない。`,
          `テレビ撮影隊の使用についての言及はない。`,
          `正解。"the organisers are using the space just inside it to set up a fan zone for tonight's fixture" と述べている。`,
        ] },
      { tag: '詳細', t: ['p4type'], qid: 'v1q97p', s: 'According to the speaker, what will happen at halftime?',
        c: ['A local choir will perform', 'Sponsors will announce a prize winner', 'Former players will greet the crowd', 'Youth teams will play a short game'],
        a: 0,
        e: `ハーフタイムには地元の合唱団が演奏する。"we're pleased to have a local choir performing on the pitch" とある。`,
        w: [
          `正解。"At halftime, we're pleased to have a local choir performing on the pitch" と述べている。`,
          `スポンサーによる抽選発表についての言及はない。`,
          `元選手によるあいさつについての言及はない。`,
          `ユースチームの試合についての言及はない。`,
        ] },
    ],
  }),

  /* ── 98–100 留守番電話（看板・印刷会社、図表あり） ──────────────────────
     くじは No.98=A（Order 44）, 99=B, 100=A。表の語（Acrylic panel/Aluminum panel/
     Matte/Gloss/注文番号）は音声に出さず、素材は「軽く透明な素材」対「金属製」、
     仕上げは「つや消し」対「光沢仕上げ（shinier）」に言い換えた。2属性（透明な素材・
     つや消し）を別々の文で伝え、表と組み合わせて Order 44 に一意に絞られる。行の並び
     （44, 12, 37, 8）はそのまま使用。請求書は4件分を1通にまとめ、Q99 の対象を1つに
     絞った。新規固有名 Maxine Milward（担当者）・Ms. Mabon（客）は D/M 頭字、
     v15/names-used.txt・assets/data 全体と grep 照合済み（未使用）。
     2026-09-29 監査反映：名を Dana → Maxine に変更（Dana は同じ vol1 の Part3・Part7 に既出のため）。
     2026-09-29 監査第2巡反映：S5「third order with us this year」が、表の4行がそれぞれ別の
     Order 番号を持つ（＝進行中の注文が4件ある）ことと食い違っていたため、"Since you've come to
     us for signs before,"（以前からの利用客）に差し替えた。ja も合わせて修正。S6 の "fitted"
     （英式）を W-Am のロールに合わせ "installed" に変更。
     S2「the first one's ready. It's the lightweight, see-through panel.」が、属性を聞かずに
     表の1行目（序数）で Order 44 に着く近道だったため、複数形「one of the lightweight,
     see-through panels」に直して序数を消した。S4 は「3件とも彫刻班にある」と言いながら
     1件は仕上げブースにあるという食い違いを解消し、"the third"（序数）も削除。
     S5 は「請求書に請求を添付する」という不自然な言い方をやめ、S7 の「電話して」という
     2つ目の依頼（(B) と部分的に重なる）を削除した。 */
  talk({
    n: [98, 99, 100], lv: 4, k: 'telephone message', t: ['graphic', 'p4type'],
    graphic: {
      t: 'table', title: 'Current Sign Orders',
      head: ['Order', 'Material', 'Finish'],
      rows: [
        ['Order 44', 'Acrylic panel', 'Matte'],
        ['Order 12', 'Aluminum panel', 'Matte'],
        ['Order 37', 'Acrylic panel', 'Gloss'],
        ['Order 8', 'Aluminum panel', 'Gloss'],
      ],
    },
    s: [
      { role: 'W-Am', text: `Hi, Ms. Mabon, this is Maxine Milward calling from Medford Sign & Print about the set of four signs you ordered for the new office.` },
      { role: 'W-Am', text: `Good news — one of them is finished. It's one of the lightweight, see-through panels.` },
      { role: 'W-Am', text: `It's also the one we finished with the flat, non-reflective coating, rather than the shinier option we also offer.` },
      { role: 'W-Am', text: `The other three are still in progress: the two metal ones are still being engraved, and the remaining see-through one needs another day in the finishing booth.` },
      { role: 'W-Am', text: `I've put the charges for all four signs on a single invoice. Since you've come to us for signs before, the total already includes the loyalty discount we apply to repeat customers.` },
      { role: 'W-Am', text: `When you come to collect the finished one, could you take a moment to check it over in the shop before you head out? It's much easier to sort out any issue with the panel while you're still here than after it's been installed.` },
      { role: 'W-Am', text: `Thanks, and see you soon.` },
    ],
    ja: `メドフォード・サイン・アンド・プリントの担当者マキシン・ミルワードが、看板を4点注文している客メイボン氏の留守電に残したメッセージ。4点のうち1点が仕上がったと伝え、その1点は軽く透明な素材で、つや消し仕上げにしたものだと説明する（光沢仕上げより光を反射しにくい）。残る3点のうち金属製の2点はまだ彫刻中で、透明素材の残る1点はあと1日仕上げに時間がかかると述べる。4点分の請求は1通の請求書にまとめており、以前にも利用している客なので常連客向けの割引が反映済みだと伝える。受け取りの際は、店を出る前にその場で確認してほしいと依頼する。最後にあいさつをして締めくくる。`,
    v: [['see-through', '透明な'], ['non-reflective', '光を反射しない、つや消しの'], ['finishing booth', '仕上げ用のブース'], ['loyalty discount', '常連客向けの割引']],
    q: [
      { tag: '図表', qid: 'v1q98p', s: 'Look at the graphic. Which order is ready for pickup today?',
        c: ['Order 44', 'Order 12', 'Order 37', 'Order 8'],
        a: 0,
        e: `話し手は本日受け取れる看板について「軽く透明な素材」（"It's one of the lightweight, see-through panels"）、かつ「つや消し仕上げ」（"It's also the one we finished with the flat, non-reflective coating"）と、2つの手がかりを別々の文で述べている。表で Acrylic panel（透明な素材）かつ Matte（つや消し）に該当するのは Order 44 だけである。`,
        w: [
          `正解。表で Acrylic panel（透明な素材）かつ Matte（つや消し）に該当するのは Order 44 のみで、話し手が挙げた2つの条件（軽く透明な素材・つや消し仕上げ）の両方に一致する。`,
          `Order 12 は Aluminum panel（金属製）かつ Matte（つや消し）であり、仕上げの条件は一致するが、素材が金属製で「軽く透明な素材」に合わない。`,
          `Order 37 は Acrylic panel（透明な素材）だが Gloss（光沢仕上げ）であり、話し手の言う「つや消し仕上げ」に合わない。さらに本文でも"the remaining see-through one needs another day in the finishing booth"と、透明素材のもう1件はまだ仕上げ中だと述べている。`,
          `Order 8 は Aluminum panel（金属製）かつ Gloss（光沢仕上げ）であり、いずれの条件にも合わない。`,
        ] },
      { tag: '詳細', t: ['p4type'], qid: 'v1q99p', s: 'What is mentioned about the bill?',
        c: ['The final cost is higher than the quote', 'The total reflects a repeat-customer discount', 'The invoice lists an old e-mail address', 'The balance is due before pickup'],
        a: 1,
        e: `請求について、常連客向けの割引が反映されていると述べている。"the total already includes the loyalty discount we apply to repeat customers" とある。`,
        w: [
          `見積もりより最終費用が高いという言及はない。`,
          `正解。"the total already includes the loyalty discount we apply to repeat customers" と述べている。`,
          `古いメールアドレスが記載されているという言及はない。`,
          `受け取り前の支払いについての言及はない。`,
        ] },
      { tag: '依頼', t: ['p4type'], qid: 'v1q100p', s: 'What does the caller ask the listener to do?',
        c: ['Check the sign before leaving the shop', 'Call the shop before coming in', 'Collect the sign within three days', 'Arrange for help carrying a large item'],
        a: 0,
        e: `受け取りの際、店を出る前に看板を確認してほしいと依頼している。"could you take a moment to check it over in the shop before you head out" とある。`,
        w: [
          `正解。"could you take a moment to check it over in the shop before you head out" と依頼している。`,
          `来店前の電話連絡についての依頼はない。`,
          `3日以内の受け取りについての言及はない。`,
          `大きな品物を運ぶ手伝いの手配についての依頼はない。`,
        ] },
    ],
  }),

];
