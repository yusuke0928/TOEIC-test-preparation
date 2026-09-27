/* =============================================================
   予想模試 Vol.6 — Part 4（No.71–100）
   終盤 2 セットは図表問題。

   ▼ このファイルを書く担当へ（2026-08-18）
   揃えるのは**構造だけ**。具体的には——問題数 30（3問×10 セット、No.71–100）、
   図表問題は終盤 2 セット、`tag` の並び、`level` の配分、話者ロールの散らし方、
   1 セットあたりの語数の水準（120〜150 語）だけ。
   **場面・業種・人物・地名・数値・言い回し・設問文（stem）・選択肢は絶対に揃えない。**
   構造は上のとおり数値で書いてあるので、**既存の巻（vol1〜vol5 の -l3.js）を開かないこと。**
   開くと必ず内容まで引きずられる。
   もとここには「Vol.1 と同じ条件を鏡写しにする」と書いてあった。この一文が原因で
   2026-08-18 に Vol.6 は Vol.1 の内容そのものの再スキンになり、Part 7 で 50 問、
   Part 3・4 で 30 問以上を作り直した。**この注意書きを消さないこと。**
   書き終えたら `assets/data/` 全体（ドリル `assets/data/drills/*.js` を含む）と
   機械照合すること。既存の巻を避けた結果ドリルと衝突した事故が同日に 4 件起きている。
   ============================================================= */

const talk = (o) => ({
  id: `v6-p4-${o.n[0]}`, part: 4, kind: 'set', kindLabel: o.k || 'talk',
  topics: o.t || ['p4type'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.id || `v6q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p4type'], tag: x.tag,
  })),
});

export const L3 = [

  /* ── 71–73 講演者の紹介 ───────────────────────────────
     2026-09-27 先読み対策 第2案（method2.md）。stem・選択肢は final-P4.md で凍結、
     正解はメインがくじで決めた（71=B, 72=B, 73=D）。本文は旧稿（ゲストハウス協会）を
     全面的に書き換え、くじの結果が真になるように新規で書き下ろした。
     全設問の内容が変わったため id を新規採番する（no は 71–73 のまま）。作成当時 talk() ヘルパーは
     id を no から自動生成するだけで no を変えずに id だけ変える手段がなかったため、このユニットは
     ヘルパーを使わず直接記述している（その後 q の要素に id を書けば上書きできるようにした）。
     Q71（概要）・Q72（詳細）は「何を話すか／講演者について何が触れられているか」を問う設問で、
     本文に登場しない誤答3本はすべて言及なしで閉じている。Q73（依頼）も同様。
     明示的な否定・訂正でユニット全体を通じて閉じている箇所はない。
     2026-09-27 監査反映：S4 の "for anyone who wants to look through the eyepiece herself" は
     anyone を herself で受けており誤りで、the eyepiece も先行詞が無かったため
     "a telescope themselves" に差し替えた。S2・S3 は監査役が指定した逐語（Q72・Q71 の根拠文）に
     差し替え、S3 はもう「三台の」というカメラ台数を明示しない。vocab から本文に無くなった
     streak・eyepiece を外した。why[0]（Q71）の「主鏡の修復」は選択肢に無い語なので削除。
     level は監査の結論で 4→3。
     2026-09-27 二次監査反映：話者ロールを HEAD と同じ M-Cn に戻した（本文に方言を示す語は無く、
     前回 M-Br のままだったのはファイル全体で英国話者に偏っていたのを是正する変更が漏れていたため）。
     ja の「毎晴天夜」は不自然な表現だったため「晴れた夜は毎晩」に直した。 */
  {
    id: 'v6-p4-71r', part: 4, kind: 'set', kindLabel: 'introduction',
    topics: ['p4type'], level: 3,
    script: [
      { role: 'M-Cn', text: 'Good evening, everyone, and welcome to the spring meeting of the Hartwell Astronomy Society.' },
      { role: 'M-Cn', text: "Tonight's guest is Helena Larkin. For the past decade, she has run Hartwell Observatory's Saturday sessions for young visitors — she's the person local schools call when they want a stargazing night." },
      { role: 'M-Cn', text: "She'll be sharing what her team learned after a full twelve months of filming the night sky on every clear evening and logging each shooting star the cameras caught." },
      { role: 'M-Cn', text: "The talk should run about forty minutes, and she's promised to leave plenty of time afterwards for anyone who wants to look through a telescope themselves." },
      { role: 'M-Cn', text: 'Before we start, a quick request: please put your name on the list by the door before you head off tonight. The committee needs the numbers for our insurance renewal next month.' },
    ],
    ja: 'ハートウェル天文協会の春季例会の冒頭。司会が今夜の講演者ヘレナ・ラーキンを紹介する。ラーキン氏はこの十年、ハートウェル天文台の土曜の子ども向け観察会を運営してきており、学校が星空観察を頼みたいときに声をかける相手であり続けているという。今夜の話の内容は、一年間、晴れた夜は毎晩夜空を撮影し続けてカメラが捉えた流星の一つひとつを記録した成果だと紹介する。講演は40分ほどの見込みで、終了後は望遠鏡を自分の目でのぞいてみたい人のために十分な時間を取ると約束しているという。始める前にひとつ頼みがあるとして、今夜帰る前に扉のそばの名簿に名前を記入するよう求める。保険更新のための人数把握に必要だからだと説明する。',
    vocab: [['stargazing', '星空観察']],
    questions: [
      { id: 'v6q71p', no: 71, topics: ['p4type'], tag: '概要',
        stem: 'What will the guest speaker discuss?',
        choices: ["A recent restoration of the observatory's original dome", 'The findings of a year-long meteor-tracking project', 'Plans for a light-pollution monitoring survey', 'Advances in coating techniques for telescope lenses'],
        answer: 1,
        exp: '司会は「彼女のチームが1年間、晴れた夜は毎晩夜空を撮影し続け、カメラが捉えた流星を一つひとつ記録してきた成果を共有する」と紹介しており（"She\'ll be sharing what her team learned after a full twelve months of filming the night sky on every clear evening and logging each shooting star the cameras caught."）、これは1年がかりの流星追跡プロジェクトの成果である。',
        why: ['ドームの改修には一切触れていない。',
              '正解。1年間、夜空を撮影し続けて記録した流星観測の成果を紹介している。',
              '光害監視の調査計画についての言及はない。',
              '望遠鏡レンズのコーティング技術についての言及はない。'] },
      { id: 'v6q72p', no: 72, topics: ['p4type'], tag: '詳細',
        stem: 'What is mentioned about the guest speaker?',
        choices: ['She used to belong to this club as a student.', "She has led the observatory's junior program for ten years.", 'She recently moved from a different regional observatory.', "She retired as the observatory's director earlier this year."],
        answer: 1,
        exp: '司会は「この十年、ハートウェル天文台の土曜の子ども向け観察会を運営しており、学校が星空観察を頼みたいときに声をかける相手であり続けている」と紹介している（"For the past decade, she has run Hartwell Observatory\'s Saturday sessions for young visitors — she\'s the person local schools call when they want a stargazing night."）。',
        why: ['学生としてこのクラブに所属していたという話は出ていない。',
              '正解。「この十年」土曜の子ども向け観察会を運営してきたと紹介されている。',
              '他の地域の観測所から最近移ってきたという話は出ていない。',
              '観測所の所長を退任したという話は出ていない。'] },
      { id: 'v6q73p', no: 73, topics: ['p4type'], tag: '依頼',
        stem: 'What does the speaker ask audience members to do?',
        choices: ['Turn off their phones during the presentation.', 'Save their questions for a session after the break.', 'Move to the front rows to see the slides.', 'Sign a sheet before leaving the room.'],
        answer: 3,
        exp: '司会は最後に「今夜帰る前に、扉のそばの名簿に名前を記入してほしい。保険更新のための人数把握に必要」と頼んでいる（"please put your name on the list by the door before you head off tonight. The committee needs the numbers for our insurance renewal next month"）。',
        why: ['電話の電源を切るようにとの案内はない。',
              '休憩後に質問の時間を設けるという案内はない。',
              '前方の席へ移動するようにとの案内はない。',
              '正解。帰る前に名簿へ記入するよう頼んでいる。'] },
    ],
  },

  /* ── 74–76 場内放送 ─────────────────────────────────
     2026-09-27 先読み対策 第2案（method2.md）。stem・選択肢は final-P4.md で凍結、
     正解はメインがくじで決めた（74=A, 75=D, 76=C）。場面をアイスリンクから
     ロックスムーア・レジャーセンターの屋内クライミングウォールに差し替え、
     くじの結果が真になるよう新規で書き下ろした。全設問 id を新規採番する（no は74–76のまま）。
     明示的な否定・訂正で閉じている箇所はない（すべて言及なし、または直接の事実提示）。
     2026-09-27 監査反映（任意）：S4 を監査役の逐語案に差し替え、Q76 の根拠が明示の
     "has moved" 一語ではなく「更衣室裏ではなく正面入口そば」という対比から読み取れる形にした。
     exp・why・ja も新しい文言に合わせて更新。 */
  talk({
    n: [74, 75, 76], lv: 3, k: 'announcement',
    s: [
      { role: 'M-Au', text: "Attention, climbers — thank you for coming to Loxmoor Leisure Centre's wall this morning." },
      { role: 'M-Au', text: "Just a quick note: today's public session will finish an hour early, at three o'clock, because our regional safety officer is here this afternoon to go over every rope, harness, and clip on the wall." },
      { role: 'M-Au', text: "If you were hoping for more climbing time today, please have a word with a member of staff at the main desk — depending on what's free, they may be able to sort something out for you." },
      { role: 'M-Au', text: "One more change: you'll now find the equipment-hire desk just inside the front doors, on your left as you come in, rather than tucked away behind the changing rooms." },
      { role: 'M-Au', text: 'Thanks for your patience, and enjoy the rest of your climb.' },
    ],
    ja: 'ロックスムーア・レジャーセンターの屋内クライミングウォールでの利用者向け場内放送。今日の一般セッションは通常より1時間早い15時に終了すると案内する。理由は、地域担当の安全担当者が午後に来て壁のロープ・ハーネス・クリップをすべて点検するためである。今日もっと長く登りたい人には、正面デスクのスタッフに相談するよう勧める（空き状況次第で対応できることがあるという）。もう一つの変更として、器具貸出デスクは更衣室裏ではなく、正面入口を入ってすぐ左側に移ったことを伝える。最後に利用者の理解に感謝し、残りの時間を楽しむよう呼びかける。',
    v: [['harness', '（安全）ハーネス'], ['clip', 'クリップ、留め具'], ['tucked away (behind)', '（〜の裏に）目立たない場所に置かれている']],
    q: [
      { tag: '詳細', id: 'v6q74p', s: 'Why will the public climbing session end early today?',
        c: ['A safety inspector is examining the equipment.', 'Corporate visitors have booked the wall today.', 'The lighting system needs urgent repairs.', 'Two instructors have called in sick.'],
        a: 0,
        e: '「地域担当の安全担当者が午後に来て、壁のロープ・ハーネス・クリップをすべて点検する」ため今日は1時間早く終了すると述べている（"our regional safety officer is here this afternoon to go over every rope, harness, and clip on the wall"）。',
        w: ['正解。安全担当者が器具一式を点検するために早く終了する。', '企業の団体予約についての言及はない。', '照明設備の修理についての言及はない。', 'インストラクターが欠勤しているという話は出ていない。'] },
      { tag: '詳細', id: 'v6q75p', s: 'What is suggested for climbers who want to keep climbing today?',
        c: ['Try the bouldering room on the lower level.', "Book a session at the centre's other branch.", 'Take part in a taster session this afternoon.', 'Speak to staff at the desk about other options.'],
        a: 3,
        e: '「もっと長く登りたい人は正面デスクのスタッフに相談してほしい。空き状況次第で対応できることがある」と案内している（"please have a word with a member of staff at the main desk — depending on what\'s free, they may be able to sort something out for you"）。',
        w: ['ボルダリングルームについての案内はない。', '他店舗でのセッション予約についての案内はない。', '体験セッションについての案内はない。', '正解。デスクのスタッフに相談するよう案内している。'] },
      { tag: '詳細', id: 'v6q76p', s: 'What is said about the equipment-hire desk?',
        c: ['The desk is closed for the rest of the week.', 'Hire prices there went up earlier this month.', 'It has moved to a new location near the entrance.', 'Customers now need to book online in advance.'],
        a: 2,
        e: '「更衣室裏ではなく、正面入口を入ってすぐ左側に器具貸出デスクがある」と述べている（"you\'ll now find the equipment-hire desk just inside the front doors, on your left as you come in, rather than tucked away behind the changing rooms."）。',
        w: ['今週いっぱい閉鎖という話は出ていない。', '料金値上げについての言及はない。', '正解。器具貸出デスクは以前の更衣室裏ではなく、今は正面入口そばにあると述べている。', 'オンライン事前予約が必要になったという話は出ていない。'] },
    ],
  }),

  /* ── 77–79 ラジオ広告 ─────────────────────────────────
     2026-09-27 先読み対策 第2案（method2.md）。stem・選択肢は final-P4.md で凍結、
     正解はメインがくじで決めた（77=B, 78=D, 79=C）。場面をロックスミス広告から
     造園サービス（Loxdale Grounds）の広告に差し替え、くじの結果が真になるよう新規で書き下ろした。
     全設問 id を新規採番する（no は77–79のまま）。
     申し送り（final-P4.md）：くじで A が当たったら「前払い」を書かない、との条件はくじが C
     だったため直接には該当しないが、D「前払い」自体を本文のどこにも書いていない。
     明示的な否定・訂正で閉じている箇所はない。
     2026-09-27 監査反映：話者の語法が英式（garden, autumn, rings, round, tidy-ups）だったため、
     本文は変えずロールのみ W-Am → W-Au に変更（メインの決定）。S4 は監査役の逐語案に差し替え、
     「口にするのは地区名であって広告そのものではない」点が明示されるようにした。
     Q77 why[0] は本文の "every visit ends with a full clean-up" に触れていなかったため、
     その clean-up が屋外作業（庭の刈りくず片付け）であることを逐語で引いて書き直した。
     level は監査の結論で 4→3。 */
  talk({
    n: [77, 78, 79], lv: 3, k: 'advertisement',
    s: [
      { role: 'W-Au', text: 'Is your garden looking more like a jungle than a lawn? Loxdale Grounds has been keeping local gardens in shape for fifteen years, from the first mow of spring to the last leaf of autumn.' },
      { role: 'W-Au', text: "Our crews handle everything outdoors — mowing, hedge-trimming, planting, and seasonal tidy-ups — and every visit ends with a full clean-up, so you're never left with clippings on the path." },
      { role: 'W-Au', text: "What customers mention most is that someone from our crew rings the day before every visit, just to make sure you're still expecting us." },
      { role: 'W-Au', text: "And this month, if you live in Hillgate — the area our crews have just started covering — you'll get twenty percent off your first booking. Just mention Hillgate when you ring." },
      { role: 'W-Au', text: 'Loxdale Grounds. Call today, and let us take the garden off your hands.' },
    ],
    ja: '地域のラジオ広告。ロックスデール・グラウンズは15年にわたり地元の庭を手入れしてきた造園サービスで、芝刈り・生垣の刈り込み・植え付け・季節ごとの手入れまで屋外の作業一式を請け負い、作業後は必ず清掃して切りくずを残さないと謳う。顧客からよく挙がる評判として、訪問前日にスタッフから確認の電話が入り、予定どおり訪問して良いか確かめてくれる点を挙げる。今月に限り、新しく担当エリアに加わったヒルゲート地区の住民には初回予約が20%引きになるとし、電話の際にヒルゲート地区内であることを伝えるよう案内する。最後に社名を繰り返し、庭仕事を任せてほしいと呼びかける。',
    v: [['hedge-trimming', '生垣の刈り込み'], ['tidy-up', '手入れ、片付け'], ['clippings', '刈りくず']],
    q: [
      { tag: '概要', id: 'v6q77p', s: 'What kind of business does the advertisement describe?',
        c: ['A home-cleaning service', 'A landscaping service', 'A household-appliance repair service', 'A furniture-rental company'],
        a: 1,
        e: '「芝刈り・生垣の刈り込み・植え付け・季節ごとの手入れ」など屋外の庭仕事全般を請け負うと説明しており（"mowing, hedge-trimming, planting, and seasonal tidy-ups"）、造園サービスである。',
        w: ['"Our crews handle everything outdoors — mowing, hedge-trimming, planting, and seasonal tidy-ups — and every visit ends with a full clean-up" とあり、この clean-up は屋外の庭仕事の片付けを指す。屋内の清掃サービスではない。', '正解。芝刈り・生垣の刈り込み・植え付けなど造園作業を行うと説明している。', '家電の修理についての言及はない。', '家具の貸し出しについての言及はない。'] },
      { tag: '詳細', id: 'v6q78p', s: 'What does the speaker emphasize about the service?',
        c: ['Weekend visits cost the same as weekday ones.', 'The firm gives phone quotes within an hour.', 'Staff show photo identification at the door.', 'A team member calls ahead to confirm each appointment.'],
        a: 3,
        e: '「顧客からよく評価されるのは、訪問前日にスタッフから確認の電話が入り、予定どおり訪問して良いか確かめてくれる点」と述べている（"someone from our crew rings the day before every visit, just to make sure you\'re still expecting us"）。',
        w: ['週末料金についての言及はない。', '電話見積もりについての言及はない。', '身分証の提示についての言及はない。', '正解。訪問前日にスタッフが確認の電話を入れると述べている。'] },
      { tag: '詳細', id: 'v6q79p', s: 'How can listeners qualify for a discount?',
        c: ["By booking through the company's website", 'By mentioning the radio advertisement when calling', 'By requesting service in a newly added area', 'By paying the standard service fee in advance'],
        a: 2,
        e: '「ヒルゲート地区——クルーが対応を始めたばかりのエリア——に住んでいれば初回予約が20%引きになる」と述べている（"if you live in Hillgate — the area our crews have just started covering — you\'ll get twenty percent off your first booking. Just mention Hillgate when you ring."）。',
        w: ['ウェブサイト経由の予約についての案内はない（電話での予約のみ案内している）。', '電話で口にするよう案内しているのは地区名（Hillgate）であって、この広告そのものではない（"Just mention Hillgate when you ring."）。広告への言及が割引の条件だとは述べていない。', '正解。クルーが対応を始めたばかりの新エリア、ヒルゲート地区に住んでいることが割引の条件である。', '前払いについての言及はない。'] },
    ],
  }),

  /* ── 80–82 会議の抜粋 ─────────────────────────────────
     2026-09-27 先読み対策 第2案（method2.md）。stem・選択肢は final-P4.md で凍結、
     正解はメインがくじで決めた（80=D, 81=C, 82=B）。場面を印刷版カタログの部数報告から
     ホールクロス・ミューチュアル保険の同封物（enclosure）についての報告に差し替え、
     くじの結果が真になるよう新規で書き下ろした。全設問 id を新規採番する（no は80–82のまま）。
     Q80 の意図問題は引用 "That's more than we send out in a year" を本文にそのまま入れ、
     直前（競合他社の郵送物の話）・直後（「ページ数で張り合うつもりはない」）の文脈で、
     他の3通りの読み（自社の企画・コピー請求の急増・印刷業者の最小発注量）をそれぞれ閉じている。
     明示的な否定・訂正は1本（"I'm not proposing we compete on page count"）で、
     ユニット全体で2本までの上限内。
     2026-09-27 監査反映：Q80 の exp・why[3] が「今週、競合他社が送った」と書いていたのは誤りで、
     "this week" は代理店から電話があった時点、送付自体は "last month"。また「当社の年間発送量」も
     不正確で、正しくは「当社が顧客1人に1年で送る分（更新のたびの同封物1回分）」。両方を訂正した。
     ja から、音声のどこにも出てこない自社名「ホールクロス・ミューチュアル保険」を外した
     （社名を伏せても保険業であることは "policy enclosure" "renewal pack" "compliance workshop" から分かる）。
     level は監査の結論で 5→4。
     2026-09-27 二次監査反映：話者ロールを stem の "when she says"（Q80）に合わせ M-Br → W-Br に
     修正（前巡の指示が丸ごと反映されていなかったもの）。S5 の "confirm by Friday whether you're
     free for the compliance training session" は Q82 の正解 "Confirm their attendance at a
     training session" と逐語一致していたため、"let me know by Friday whether you can make the
     compliance workshop" に差し替えて一致を解消した（意味は変えていない）。vocab の
     compliance training も本文の語に合わせ compliance workshop に改めた。 */
  talk({
    n: [80, 81, 82], lv: 4, k: 'excerpt from a meeting',
    s: [
      { role: 'W-Br', text: 'Right, last item on the agenda — the policy enclosure that goes out with every renewal pack.' },
      { role: 'W-Br', text: "I had a call this week from a broker who mentioned that Lindfield Cover posted new customers an eighteen-page welcome pack last month. That's more than we send out in a year." },
      { role: 'W-Br', text: "I'm not proposing we compete on page count, but it's worth remembering how modest our own enclosure looks by comparison." },
      { role: 'W-Br', text: "On a related note, next quarter's print run brings the enclosure up to five languages, from the current three, thanks to some new translation hires." },
      { role: 'W-Br', text: "Last thing — can you each let me know by Friday whether you can make the compliance workshop on the fourteenth? I need the numbers before I book the room." },
    ],
    ja: 'ある保険会社の四半期会議の抜粋。担当者が最後の議題として、更新パックに同封する案内文書（同封物）を取り上げる。今週、ある代理店から聞いた話として、競合のリンドフィールド・カバー社が先月、新規顧客に18ページの案内一式を送ったと紹介し、「それは当社が顧客1人に1年で送る分（更新のたびの同封物1回分）より多い」と述べる。ページ数で張り合うつもりはないが、当社の同封物がいかに控えめかを思い知らされると付け加える。関連して、来四半期から同封物の対応言語が現行の3言語から5言語に増える予定で、翻訳担当を新たに採用したことによると説明する。最後に、金曜までに14日のコンプライアンス研修（ワークショップ）に参加できるかどうかを各自知らせてほしいと依頼する。部屋の予約のために人数が必要だからである。',
    v: [['enclosure', '同封物'], ['broker', '代理店、仲介業者'], ['compliance workshop', 'コンプライアンス研修（ワークショップ）']],
    q: [
      { tag: '意図', id: 'v6q80p', s: 'What does the speaker imply when she says, "That\'s more than we send out in a year"?',
        t: ['p3int'],
        c: ['That one proposed mailing is unusually large', 'That customer requests for copies have jumped', "That the printer's minimum run is too big", "That a rival firm's mailing was very large"],
        a: 3,
        e: '直前で「今週、代理店から聞いた話として、競合のリンドフィールド・カバー社が先月、新規顧客に18ページの案内一式を送った」と紹介しており（"this week" は代理店から電話があった時点で、送付自体は "last month"）、その1回分の郵送物が、当社が顧客1人に1年で送る分（更新のたびに同封する1回分）より多いと続けている。競合1社の1回の郵送物がそれほど大きかった、という含みである。',
        w: ['話題にしているのは自社が今後行う予定の郵送物ではなく、他社が先月実際に送った郵送物である。直後で「ページ数で張り合うつもりはない」と述べており、自社の企画についての発言ではない。', 'コピーの請求件数についての言及はない。', '印刷業者の最小発注量についての言及はない。', '正解。競合他社（リンドフィールド・カバー社）が先月送った1回の郵送物が、当社が顧客1人に1年で送る分（更新のたびに同封する1回分）を上回るほど大きかったという含みである。'] },
      { tag: '詳細', id: 'v6q81p', s: 'What does the speaker say will happen next quarter?',
        c: ['The company will launch a digital enclosure.', 'Customer support will gain a new phone line.', 'Translators will add two more languages to the enclosure.', "Lawyers will rewrite the enclosure's claims section."],
        a: 2,
        e: '「来四半期から同封物の対応言語が現行の3言語から5言語に増える」と述べている（"next quarter\'s print run brings the enclosure up to five languages, from the current three"）。',
        w: ['デジタル版の導入についての言及はない。', '電話回線の増設についての言及はない。', '正解。同封物の対応言語が3言語から5言語に増える。', '補償に関する条項の書き換えについての言及はない。'] },
      { tag: '依頼', id: 'v6q82p', s: 'What are the listeners asked to do by Friday?',
        c: ['Submit a summary of recent client feedback', 'Confirm their attendance at a training session', 'Update the mailing list for their branch', 'Report their remaining stock of the current enclosure'],
        a: 1,
        e: '「金曜までに、14日のコンプライアンス研修（ワークショップ）に参加できるかどうかを各自知らせてほしい」と依頼している（"can you each let me know by Friday whether you can make the compliance workshop on the fourteenth"）。',
        w: ['顧客からの意見の要約提出は求めていない。', '正解。研修に参加できるかどうかを金曜までに知らせるよう求めている。', '発送リストの更新は求めていない。', '同封物の在庫報告は求めていない。'] },
    ],
  }),

  /* ── 83–85 見学ツアー ─────────────────────────────────
     2026-09-27 先読み対策 第2案（method2.md）。stem・選択肢は final-P4.md で凍結、
     正解はメインがくじで決めた（83=C, 84=C, 85=B）。場面を鐘の鋳造所から
     ロックスフィールド織物工場（textile mill）の見学ツアーに差し替え、
     くじの結果が真になるよう新規で書き下ろした。全設問 id を新規採番する（no は83–85のまま）。
     Q83（概要）は羊毛→糸→織り→染色という工程描写のみで、チーズ・ガラス・チョコレートの
     要素は一切書いていない（言及なしで閉じる）。
     明示的な否定・訂正で閉じている箇所はない。
     2026-09-27 監査反映：S1 の施設名 "Loxfield Mill" が選択肢 C "textile mill" と一語一致し、
     冒頭だけで答えが決まっていたため "the Loxfield site" に差し替え（ja も「織物工場」を外し、
     工程描写のみで業種を推測させる）。S3 は監査役の逐語案に差し替え、「撮影クルーが通路を使っている」
     から「今日はギャラリーを外す」への論理の飛躍を、明示のつなぎ（"so we'll leave the gallery out"）で
     埋めた。
     2026-09-27 二次監査反映：W-Cn の話者の英式表現 "car park" を "parking lot" に直した
     （ja の「駐車場」は変更不要）。 */
  talk({
    n: [83, 84, 85], lv: 4, k: 'talk',
    s: [
      { role: 'W-Cn', text: "Hello, everyone. My name is Hazel, and I'll be your guide around the Loxfield site this morning." },
      { role: 'W-Cn', text: "Everything you'll see today starts with raw wool, carded and spun into yarn on the frames upstairs, then woven on the looms below before it goes through the dye vats at the far end of the building." },
      { role: 'W-Cn', text: "Normally we'd walk the gallery above the looms first, but a television team is up there today shooting a documentary, so we'll leave the gallery out, start in the dye house instead and loop back to the entrance." },
      { role: 'W-Cn', text: "That means the tour will finish a little sooner than usual — we'd normally wrap up at ten past twelve, but today we should be done by five to." },
      { role: 'W-Cn', text: "If anyone needs to leave earlier than that, just let me know and I'll point you towards the exit nearest the parking lot." },
    ],
    ja: 'ロックスフィールドという施設の見学ツアーの案内。ガイドのヘーゼルが今朝の案内役を務める。すべての工程は生の羊毛から始まり、上階の機械で梳いて紡いで糸にし、下の階の織機で織り、建物の奥にある染色槽を通ると説明する。普段は織機の上のギャラリーを最初に歩くが、今日は撮影クルーがそこで撮影しているため、ギャラリーは外し、代わりに染色場から見学を始めて入口へ戻ると伝える。そのため今日のツアーはいつもより少し早く終わる見込みで、普段は12時10分に終わるところ、今日は11時55分ごろには終えられそうだと述べる。その時間より早く抜けたい人は申し出れば、駐車場に一番近い出口へ案内すると付け加える。',
    v: [['carded', '（羊毛などが）梳かれた'], ['loom', '織機'], ['dye vat', '染色槽']],
    q: [
      { tag: '概要', id: 'v6q83p', s: 'What kind of place are the visitors touring?',
        c: ['A cheese dairy', 'A glassworks', 'A textile mill', 'A chocolate factory'],
        a: 2,
        e: '「生の羊毛を梳いて紡ぎ、織機で織り、染色槽を通す」という工程を説明しており（"raw wool, carded and spun into yarn... woven on the looms... dye vats"）、織物工場と分かる。',
        w: ['チーズや乳製品についての言及はない。', 'ガラスの成形についての言及はない。', '正解。羊毛を紡ぎ織って染める工程が説明されている。', 'チョコレートの製造についての言及はない。'] },
      { tag: '詳細', id: 'v6q84p', s: 'Why has the visitor route changed today?',
        c: ['Cleaning has begun in the regular viewing area', 'The production process requires extra floor space', 'A film crew is using the usual viewing route', "Repairs are underway on the visitor centre's lift"],
        a: 2,
        e: '「今日は撮影クルーがギャラリーで撮影しているため、ギャラリーは外し、代わりに染色場から見学を始めて入口へ戻る」と述べている（"a television team is up there today shooting a documentary, so we\'ll leave the gallery out, start in the dye house instead and loop back to the entrance."）。',
        w: ['清掃作業についての言及はない。', '製造工程のためのスペース確保についての言及はない。', '正解。撮影クルーが通常の見学経路であるギャラリーを使っているため、経路を変更している。', 'エレベーターの修理についての言及はない。'] },
      { tag: '詳細', id: 'v6q85p', s: "What does the speaker say about today's tour?",
        c: ['It pauses for a short break halfway through.', 'It runs fifteen minutes shorter than usual.', 'It concludes with an open question session.', 'It now includes a stop at the gift shop.'],
        a: 1,
        e: '「普段は12時10分に終わるところ、今日は11時55分ごろに終えられそう」と述べており、通常より15分早く終わる（"we\'d normally wrap up at ten past twelve, but today we should be done by five to"）。',
        w: ['途中の休憩についての言及はない。', '正解。普段の終了時刻より15分早く終わる見込みだと述べている。', '質疑応答についての言及はない。', '売店への立ち寄りについての言及はない。'] },
    ],
  }),

  /* ── 86–88 電話の自動応答 ─────────────────────────────
     2026-09-27 先読み対策 第2案（method2.md）。stem・選択肢は final-P4.md で凍結、
     正解はメインがくじで決めた（86=D, 87=D, 88=A）。場面をホルト・ガレージから
     ロックスブリッジ歯科医院の自動音声に差し替え、くじの結果が真になるよう新規で書き下ろした。
     全設問 id を新規採番する（no は86–88のまま）。
     申し送り: Q87 は本文で土曜の時間（平日8–18時、通常の土曜8–16時、今週のみ8–15時）を
     具体的に述べ、4本のうちDだけが成り立つようにした（Aは平日と数値が異なるため偽、
     Bは7時間営業のため「半日」に当たらず偽、Cは実際に営業しているため偽）。
     明示的な否定・訂正で閉じている箇所はない。
     2026-09-27 監査反映：S1 は「1時間早い」という差分を音声自身が言ってしまっていたため、
     "we'll be locking up at three instead" に差し替え、聞き手が通常の16時からの差を引き算する形にした。
     S3 は「電話メニューで2を押させておきながら電話ではやらないと言う」自己矛盾を解消し、
     ウェブサイトでの確認に一本化（press の指示自体を外した）。空いた「2」は緊急予約に繰り上げ、
     S4 の "press three" を "press two" に変更。Q88 why[3] はD「来院ごとに確認」と両立しないことを
     明示する形に書き直した。level は監査の結論で 4→3。
     2026-09-27 二次監査反映：vocab の verification・online portal は本文に無い語だったため、
     本文にある cover・log-in area に差し替えた（policy number は本文の語のまま据え置き）。
     ja の「保険証番号」を vocab と同じ「保険証券番号」に揃え、「確認するのは医院」（本文は
     "we'll confirm your cover"）であって患者ではない点、および本文に無い「一度」を削って書き直した。
     Q88 why[3] も同じ観点で「来院ごとに医院が確認すると述べるだけで、年1回の更新には触れていない」
     という肯定形の書き方に直した。 */
  talk({
    n: [86, 87, 88], lv: 3, k: 'recorded message',
    s: [
      { role: 'NARR', text: "Thank you for calling Loxbridge Dental Clinic. We're open Monday to Friday from eight until six, and on Saturdays from eight until four — though this Saturday only, we'll be locking up at three instead, for staff training." },
      { role: 'NARR', text: "If you'd like a rough cost estimate over the phone, press one. We always follow up every phone estimate with the figures by e-mail, so you have something in writing ahead of your visit." },
      { role: 'NARR', text: "If you're calling to check your dental insurance cover, please note that we now handle all cover checks through the patient log-in area of our website. Just add your policy number to your account, and we'll confirm your cover there before each visit." },
      { role: 'NARR', text: 'For an emergency appointment, press two. For anything else, please hold and a member of our team will be with you shortly.' },
      { role: 'NARR', text: 'Thanks for calling Loxbridge Dental Clinic.' },
    ],
    ja: 'ロックスブリッジ歯科医院の自動音声案内。営業は月〜金8〜18時、土曜は8〜16時だが、今週の土曜のみスタッフ研修のため15時に閉院すると案内する（通常より1時間早い）。電話でのおおまかな見積もりを希望する場合は1を押す。電話での見積もりは必ず後日メールで数字を送るため、来院前に書面で確認できると説明する。歯科保険の適用状況を確認したい場合は、ウェブサイトの会員ログインページを通じてすべて確認するようになったと案内する。保険証券番号をアカウントに登録すれば、来院のたびに医院がそこで保険の適用状況を確認するという。緊急の予約は2を押す。それ以外の用件は電話を切らずに待てば担当者が対応する。',
    v: [['cover', '（保険の）補償'], ['log-in area', '（会員専用の）ログインページ'], ['policy number', '保険証券番号']],
    q: [
      { tag: '詳細', id: 'v6q86p', s: 'What is mentioned about cost estimates given by phone?',
        c: ['They include the cost of prescribed medication.', 'They stay valid for the next thirty days.', 'They become final once a dentist examines the patient.', 'They come with a written copy by e-mail.'],
        a: 3,
        e: '「電話での見積もりは必ず後日メールで数字を送るため、来院前に書面で確認できる」と述べている（"We always follow up every phone estimate with the figures by e-mail, so you have something in writing ahead of your visit"）。',
        w: ['処方薬の費用を含むという言及はない。', '有効期限についての言及はない。', '診察後に確定するという言及はない。', '正解。電話の見積もりは後日メールで書面として送られる。'] },
      { tag: '詳細', id: 'v6q87p', s: "What is stated about the clinic's Saturday hours?",
        c: ['It keeps its weekday hours.', 'It opens for half the day.', 'It stays closed on Saturdays.', 'It closes an hour earlier than usual.'],
        a: 3,
        e: '「土曜日は通常8時から16時までだが、今週の土曜だけはスタッフ研修のため15時に閉める」と述べている（"on Saturdays from eight until four — though this Saturday only, we\'ll be locking up at three instead, for staff training."）。通常の16時と比べると1時間早い。',
        w: ['平日は8時から18時までで、土曜（通常16時、今週は15時）とは営業時間が異なる。', '土曜は8時から16時（今週は15時）までで、平日の10時間と比べて半日とは言えない時間帯である。', '土曜も営業している。', '正解。土曜の通常の閉店時刻16時に対し、今週だけは15時に閉める。'] },
      { tag: '詳細', id: 'v6q88p', s: 'What does the message say about insurance verification?',
        c: ["It goes through the clinic's online portal.", "It requires a copy of the patient's records.", 'It carries a small processing fee.', 'It needs renewing once a year.'],
        a: 0,
        e: '「歯科保険の適用状況の確認は、ウェブサイトの会員ログインページを通じてすべて行われる」と述べている（"we now handle all cover checks through the patient log-in area of our website"）。',
        w: ['正解。歯科保険の確認はウェブサイトの会員ログインページを通じて行われる。', '診療記録の写しの提出についての言及はない。', '手数料についての言及はない。', '来院ごとに医院が確認すると述べるだけで、年1回の更新には触れていない（"Just add your policy number to your account, and we\'ll confirm your cover there before each visit."）。'] },
    ],
  }),

  /* ── 89–91 ニュース ───────────────────────────────────
     2026-09-27 先読み対策 第2案（method2.md）。stem・選択肢は final-P4.md で凍結、
     正解はメインがくじで決めた（89=A, 90=A, 91=A）。場面を霜警報サービスから
     ハローブルック地区の太陽光パネル導入制度に差し替え、くじの結果が真になるよう新規で
     書き下ろした。全設問 id を新規採番する（no は89–91のまま）。
     申し送り: Q90 は参加条件を「最新の電気メーターの数値を4月になる前に送ること」の
     1点だけに絞り、複合条件文を避けた。
     明示的な否定・訂正で閉じている箇所はない（隣接地区についての対比はすべて肯定文で書いた）。
     2026-09-27 監査反映（致命的）：初稿では answer が 1（B）になっており、くじ（0＝A）と食い違って
     いた。実装時にくじを取り違えていたもの。S2〜S4 を監査役の逐語案に差し替え、A「型落ちのパネル」
     が真になり、B「議会が費用の半分を負担」は明示的に偽（費用は世帯の全額自己負担）になるように
     書き直した。S3 末尾の "at this stage" というヘッジは、それ自体が B/C/D への含みを残す抜け道
     だったため "that's all you need to do to sign up" に差し替えて閉じた。S4 の
     "thanks to a larger council contribution" は残すと B（隣接地区限定の話ではあるが自スキームの
     根拠が議会負担であるかのように読める）を部分的に真にしうるため削除した。answer を 0 に戻し、
     Q89・Q91 の exp・why・ja を新しい本文に合わせて書き直した。level は監査の結論で 5→3。
     2026-09-27 二次監査反映：S5 の "Sign-up forms are on the council website now" は S1 の
     "will be able to sign up from Monday"（登録開始は月曜から）とずれていたため、S3 で述べた
     「議会へ送る数値」を月曜から議会サイト経由で送れる、という趣旨に差し替えた
     （Q90 の正解選択肢の語 "reading" は本文で使わず "figure" のまま）。ja の最終文も合わせて書き直した。
     vocab の contribution は S4 の削除で本文から既に消えていたため外した。
     2026-09-27 追記：正解位置の平準化（balance2.mjs --by part）で No.90 の選択肢の並びを
     入れ替えた（旧 A → 新 D。why も対応して入れ替え済み）。 */
  talk({
    n: [89, 90, 91], lv: 3, k: 'broadcast',
    s: [
      { role: 'W-Au', text: "In local news, homeowners across Hallowbrook will be able to sign up from Monday for the council's new solar panel scheme." },
      { role: 'W-Au', text: "It works out cheaper than going straight to an installer because the panels on offer are the range the manufacturer brought out twelve months ago, before this year's version replaced it. Households pay back the whole cost themselves, through a small monthly charge added to their council tax." },
      { role: 'W-Au', text: "To take part, send the council the figure currently showing on your electricity meter sometime before April begins — that's all you need to do to sign up." },
      { role: 'W-Au', text: 'Next door in Hartmoor, a similar scheme has been running for two years already, and residents there tell us theirs works out even less expensive than ours.' },
      { role: 'W-Au', text: "You can send the figure through the council website from Monday, or call the number on your screen." },
    ],
    ja: '地域ニュース。ハローブルック地区の住民が月曜から、地元議会の新しい太陽光パネル導入制度に登録できるようになると伝える。この制度が業者に直接依頼するより安く済むのは、提供されるパネルが今年の新型に置き換わる前の型、つまり12か月前に発売された型だからで、費用そのものは住民税に上乗せされるわずかな月額負担を通じて世帯が全額自己負担すると説明する。参加するには、4月に入る前に電気メーターに今表示されている数値を議会へ送ればよく、それが登録に必要なことのすべてだと述べる。隣接するハートムーア地区ではすでに2年前から同種の制度が運用されており、そちらの住民の話ではこちらよりもさらに割安だという。その数値は月曜から議会のウェブサイトを通じて送れるほか、画面に表示された番号への電話でも伝えられると締めくくる。',
    v: [['council tax', '住民税（地方自治体税）'], ['installer', '設置業者']],
    q: [
      { tag: '詳細', id: 'v6q89p', s: 'Why does the scheme cost less than a private installation?',
        c: ["The panels are last year's model.", "Council funding covers half of each household's cost.", 'Trainee installers carry out the work.', "Installations happen in the installers' quiet season."],
        a: 0,
        e: '「業者に直接依頼するより安く済むのは、提供されるパネルが今年の新型に置き換わる前の型、つまり12か月前に発売された型だから」と述べている（"the panels on offer are the range the manufacturer brought out twelve months ago, before this year\'s version replaced it"）。費用は住民税に上乗せされる少額の月払いを通じて世帯が全額自己負担する（"Households pay back the whole cost themselves, through a small monthly charge added to their council tax."）。',
        w: ['正解。提供されるパネルは、今年の新型に置き換わる前の型、つまり12か月前に発売された型（型落ち）である。', '各世帯は費用を全額自己負担し、住民税に上乗せされる少額の月払いで支払う仕組みであり、議会が費用の半分を負担するとは述べていない（"Households pay back the whole cost themselves, through a small monthly charge added to their council tax."）。', '研修中の設置業者が作業するという言及はない。', '閑散期に合わせて設置するという言及はない。'] },
      { tag: '詳細', id: 'v6q90p', s: 'What must homeowners do in order to join the scheme?',
        c: ['Pay a deposit before the installation date is confirmed', 'Have their roof inspected by a council engineer first', 'Attend an information session at the town hall', 'Submit a recent electricity meter reading before March ends'],
        a: 3,
        e: '「4月に入る前に、電気メーターに今表示されている数値を議会へ送ればよく、それが登録に必要なことのすべて」と述べている（"send the council the figure currently showing on your electricity meter sometime before April begins — that\'s all you need to do to sign up."）。',
        w: ['設置日確定前の頭金についての言及はない。', '議会の技術者による屋根の点検についての言及はない。', '説明会への参加についての言及はない。', '正解。4月になる前に、電気メーターに表示されている数値を送ることが登録に必要なことのすべてだと述べられている。'] },
      { tag: '詳細', id: 'v6q91p', s: 'What is mentioned about the neighbouring district?',
        c: ['It runs a cheaper scheme of its own.', 'Registration there opens at the same time.', 'The scheme will reach it next year.', 'Its council is reviewing whether to join.'],
        a: 0,
        e: '「隣接するハートムーア地区ではすでに2年前から同種の制度が運用されており、そちらのほうがさらに割安だと住民が話している」と述べている（"a similar scheme has been running for two years already, and residents there tell us theirs works out even less expensive than ours."）。',
        w: ['正解。ハートムーア地区は既に独自の、より割安な制度を運用している。', 'ハートムーア地区の制度はすでに2年前から始まっており、同時期の開始ではない。', '来年に制度が及ぶという話ではなく、すでに2年前から運用されている。', '参加を検討中だという話ではなく、すでに独自の制度を運用している。'] },
    ],
  }),

  /* ── 92–94 研修の導入 ─────────────────────────────── */
  /* 2026-09-26 先読み対策 第2案（method2.md、2026-09-26 追記の「閉じ方の改訂」反映済み）。
     stem・選択肢はメインが凍結し、正解はメインがくじで決めた
     （92=A dating, 93=B training schedule, 94=C new rule）。
     本文（script/ja/vocab/why/exp）はそのくじの結果が真になるよう全面的に新規で書き下ろした。
     全設問の内容が変わったため id を新規採番する（no は 92–94 のまま）。
     2026-09-26 監査反映：3・4・5行目を書き直した。旧稿の "usually takes weeks to surface,
     not on the day it happened" は並列が崩れており、"three extra digits" は日付欄の説明として
     意味をなさなかった（数字3桁というだけでは「もう一つの日付欄」だと分からない）。
     No.93 D を消すためだけに置かれていた設備点検の1文（"The equipment already had its
     safety inspection last week"）は削除し、D は「言及なし」で閉じ直した。英式の
     "new starter" は話者が M-Am のため "new hire" に差し替えた。
     Q92（主題）：中心を「実際に作業した日の日付を書く」ことに絞った。誤り訂正・データ保存・
     ノート保管は本文に一切登場させていない（主題を問う設問で言及なしの誤答を閉じるための
     1問1本の上限は撤廃されているため、意図的に沈黙で閉じている。誤答を打ち消すためだけの
     文は書いていない）。
     Q93（詳細）：「今週」起きることを新しい研修予定表の配布1点に絞った。指導担当の抜き取り確認
     （数週間後）・筆記テスト（最初の6週間の終わり）は、新人研修の見通し（roadmap）として
     自然に触れる1文の中でそれぞれ別の時期の出来事として閉じている（誤答を打ち消すためだけの
     文ではなく、見通しを伝える案内という実質を持たせた）。設備点検は本文から削除したので、
     その選択肢は言及なしで閉じる。
     Q94（意図）：引用 "It happens more often than you'd think." の直前に実害（結果の順序の混乱、
     当日ではなく何週間も経ってから発覚）、直後に「今学期から2つ目の日付欄を設けた理由」と
     「記入は数秒で済む」を置き、「安心させる」「すぐ気づかれる」「時間がかかる」という
     他の3通りの読みを直前・直後の文脈でそれぞれ閉じた（言及なしでは閉じられない設問のため、
     文脈による排除で閉じている）。
     明示的な否定・訂正でユニット全体を通じて閉じている箇所はない（すべて事実の提示または沈黙）。 */
  talk({
    n: [92, 93, 94], lv: 5, k: 'talk',
    s: [
      { role: 'M-Am', text: "Good morning. Before you touch a pipette, there's one habit every new hire must get right from day one: dating your entries correctly." },
      { role: 'M-Am', text: "Write the date you actually did the work, not the date you write it up. If you catch up on several days at once, give each its own dated entry instead of lumping them under today's date." },
      { role: 'M-Am', text: "Two runs under one date can scramble a week's results, and that kind of mix-up usually comes to light weeks later rather than on the day." },
      { role: 'M-Am', text: "It happens more often than you'd think. That's exactly why, from this term, every entry also carries the date it was written up — a second date field that takes a few seconds to fill in." },
      { role: 'M-Am', text: "A couple of dates to note. The new training schedule goes out this afternoon, so keep an eye on your inbox. Your supervisor will start spot-checking notebooks in a few weeks, once everyone's settled in, and the written quiz comes at the end of your first six weeks." },
    ],
    ja: '研究所での新人研修の冒頭。今日の主題は、実際に作業を行った日の日付を書くことだと明言し、記入している日ではなく作業した日を書くこと、数日分をまとめて記録する場合も1つの日付にまとめず日ごとに別々の記入にすることを求める。同じ日付で2つの実験を記録すると週内の結果の順序が混乱し、そうした食い違いは当日ではなく何週間も経ってから明るみに出ることが多いと説明する。「思っている以上によく起きる」ため今学期から、作業日に加えて実際に書き上げた日も記録する2つ目の日付欄を設けたのだと述べ、記入にかかる時間は数秒ほどで済むと付け加える。最後に、今週に関わる日程として、新しい研修予定表が今日の午後に配布されること、指導担当によるノートの抜き取り確認は数週間後、皆が落ち着いてから始まること、筆記テストは最初の6週間が終わったころになることを伝える。',
    v: [['pipette', 'ピペット'], ['lump A under B', 'AをひとまとめにしてBとして扱う'], ['scramble', '（順序などを）混乱させる'], ['come to light', '明るみに出る、判明する']],
    q: [
      { tag: '概要', id: 'v6q92p', s: 'What is the main focus of the talk?',
        c: ['How entries should be dated properly', 'How mistakes should be marked clearly', 'How data should be saved regularly', 'How notebooks should be stored securely'],
        a: 0,
        e: '冒頭で "dating your entries correctly" を今日必ず身につける習慣として掲げ、以降も作業日の記入方法・まとめ書きの分け方・二つ目の日付欄を新設した理由まで、話の中心は一貫して日付の記入方法である。',
        w: ['正解。冒頭の "dating your entries correctly" という宣言から始まり、作業日の記入方法・まとめ書きの扱い・二つ目の日付欄を新設した理由まで、話の中心は一貫して日付の記入方法である。',
              '話の中心は日付の記入方法であり、誤りの訂正方法についての説明は含まれていない。',
              '話の中心は日付の記入方法であり、データの保存頻度についての説明は含まれていない。',
              '話の中心は日付の記入方法であり、ノートの保管方法についての説明は含まれていない。'] },
      { tag: '詳細', id: 'v6q93p', s: 'According to the speaker, what will happen this week?',
        c: ['Notebooks will be reviewed by a supervisor.', 'A new training schedule will be issued.', 'Quizzes will be given to new employees.', 'Some laboratory equipment will be inspected.'],
        a: 1,
        e: '"the new training schedule goes out this afternoon" と述べており、今週（今日の午後）に配布されるのは新しい研修予定表である。',
        w: ['"Your supervisor will start spot-checking notebooks in a few weeks, once everyone\'s settled in" と述べており、指導担当による確認は数週間後からで、今週の出来事ではない。',
              '正解。"the new training schedule goes out this afternoon" と、今日の午後に新しい研修予定表が配布されると明言している。',
              '"the written quiz comes at the end of your first six weeks" と述べており、筆記テストは今週ではなく最初の6週間が終わったころである。',
              '設備の点検については本文のどこにも言及がない。'] },
      { tag: '意図', id: 'v6q94p', s: 'Why does the speaker say, "It happens more often than you\'d think."?',
        t: ['p3int'],
        c: ['To reassure the listeners that an error is common', 'To warn the listeners that mistakes are noticed quickly', 'To explain why a new rule was introduced', 'To suggest that a task takes longer than expected'],
        a: 2,
        e: '直前で "Two runs under one date can scramble a week\'s results" と実害を指摘し、引用の直後で "That\'s exactly why, from this term, every entry also carries the date it was written up" と続けている。頻度への言及は、聞き手を安心させる材料としてではなく、新しい規則（二つ目の日付欄）を導入した理由を裏付けるものとして述べられている。',
        w: ['直前の "Two runs under one date can scramble a week\'s results" という具体的な弊害の指摘と、直後の "That\'s exactly why, from this term, every entry also carries the date it was written up" という是正の説明は、聞き手を安心させる言い方ではなく問題を裏付ける言い方であり、両立しない。',
              '直前で "that kind of mix-up usually comes to light weeks later rather than on the day" と述べており、誤りがすぐに気づかれるという内容とは正反対で両立しない。',
              '正解。直後で "That\'s exactly why, from this term, every entry also carries the date it was written up" と、新しい規則（二つ目の日付欄）を導入した理由として述べている。',
              '直後で "a second date field that takes a few seconds to fill in" と述べており、作業に時間がかかるという内容と正面から矛盾する。'] },
    ],
  }),

  /* ── 95–97（図表）─────────────────────────────────────
     2026-09-27 先読み対策 第2案（method2.md）。表は final-P4.md で凍結
     （Hallowgate Brewery — Tank Cleaning, Week 9。Tank 6/Cellar/Tuesday, Tank 2/Yard/Tuesday,
     Tank 9/Cellar/Friday, Tank 4/Yard/Friday）。stem・選択肢も凍結、正解はくじ（95=A, 96=C, 97=A）。
     旧版（Tarnbeck Joinery の機械点検）を全面的に書き換えた。全設問 id を新規採番する
     （no は95–97のまま）。
     申し送り: 音声は Cellar/Yard・曜日を表の語のまま言わない。「地下に置かれている／屋外に
     置かれている」「週の早い側／週末直前」という言い換えで、地下タンク2基（Tank 6・Tank 9）の
     うち週の早い側（Tank 6）だけを指すようにした。非図表設問（Q96・Q97）には t: を明示する。
     明示的な否定・訂正は0（対比はすべて「〜ではなく…」という肯定的な言い換えで書いた。
     図表の行を絞り込むための対比表現は、この種の設問に構造的に必要な排他であり、
     CLAUDE.md の禁止対象である命題への明示否定とは別のものとして扱う）。
     2026-09-27 監査反映：初稿の S2 は否定語3つのうち2つ（"not the one that sits outside in the open"
     "not the one we're leaving until just before the weekend"）が消しても Tank 6 のまま特定できる
     情報量ゼロの誤答消しで、片方の属性だけで行が取れてしまっていた（"the tank that's kept
     underground" が単数扱いで "of our two underground tanks" と矛盾してもいた）。監査役の逐語案に
     差し替え、地下＋週の早い側の2属性を音声だけで伝える形にした（結果として明示否定は0になり、
     旧稿の「否定0」という記述が実際に正しくなった）。S3 は「より強い薬剤」「作業責任者の承認」に、
     S4 は前置きの語のみ調整。why[1] に、Tank 2 も火曜日である点への言及を足した。level は
     監査の結論で 5→4。
     2026-09-27 二次監査反映：S2 の "the tank we keep below ground"（単数）が「地下に2基ある」という
     設定（"of our two underground tanks"）と数の不一致を起こしていたため "one of the tanks we keep
     below ground" に直した（絞り込みの論理・25%判定は変えていない）。vocab の underground は本文の
     語 below ground に、ja・exp の「作業責任者」は英語 "duty manager" に合わせて「当番の責任者」に
     直した（why[2] も後日「作業責任者」から「当番の責任者」に直した）。 */
  talk({
    n: [95, 96, 97], lv: 4, k: 'announcement', t: ['graphic', 'p4type'],
    graphic: {
      t: 'table', title: 'Hallowgate Brewery — Tank Cleaning, Week 9',
      head: ['Tank', 'Location', 'Clean-out day'],
      rows: [
        ['Tank 6', 'Cellar', 'Tuesday'],
        ['Tank 2', 'Yard', 'Tuesday'],
        ['Tank 9', 'Cellar', 'Friday'],
        ['Tank 4', 'Yard', 'Friday'],
      ],
    },
    s: [
      { role: 'M-Br', text: 'Morning, everyone. Quick update before you start on the tanks today.' },
      { role: 'M-Br', text: "Today the crew is cleaning out one of the tanks we keep below ground — the earlier of the two down there this week — so the stairs down to it are off limits until they finish, probably by mid-afternoon." },
      { role: 'M-Br', text: "One more thing about this round of cleaning: because of the stronger chemical the crew is using this time, each tank needs a safety check signed off by the duty manager before anyone climbs in." },
      { role: 'M-Br', text: "And while the crew's here, please make sure nothing's left in the loading bay on either cleaning day this week. The tanker needs a clear run to the doors." },
      { role: 'M-Br', text: "That's everything. Thanks, and see you on the floor." },
    ],
    ja: 'ハロウゲート醸造所の朝の連絡。今週のタンク清掃について案内する。今日、作業班が清掃するのは地下に置かれているタンクのうち、週の早い側の予定分だと伝える（清掃が終わるまで、そこへ下りる階段は立入禁止で、終了は午後半ばの見込み）。今回の清掃について、今回使用するより強い薬剤の関係で、各タンクについて当番の責任者による安全点検の承認を得る必要があると付け加える。作業員がいる間は、両方の清掃日とも搬入口を空けておくよう依頼する——タンクローリーがまっすぐ扉まで入れるようにするためである。最後に締めくくりの挨拶をする。',
    v: [['below ground', '地下の'], ['safety check', '安全点検'], ['loading bay', '搬入口、荷降ろし場']],
    q: [
      { tag: '図表', id: 'v6q95p', s: 'Look at the graphic. Which tank does the speaker say needs cleaning today?',
        c: ['Tank 6', 'Tank 2', 'Tank 9', 'Tank 4'],
        a: 0,
        e: '「今日、作業班が清掃するのは地下に置かれているタンクの1つで、地下にある2基のうち週の早い側の予定分」と述べており（"Today the crew is cleaning out one of the tanks we keep below ground — the earlier of the two down there this week"）、地下＝表の Cellar、Cellar の2基は火曜日の Tank 6 と金曜日の Tank 9 なので、週の早い側＝火曜日の Tank 6 に絞られる。',
        w: ['正解。地下（Cellar）に置かれ、かつ週の早い側（火曜日）に予定されているのは Tank 6 だけである。', 'Tank 2 は表で Yard（屋外）にあり、地下のタンクではない。表では Tank 2 も火曜日（週の早い側）の予定だが、話し手が今日の清掃として挙げているのは地下に置かれたタンクだけなので対象外である。', 'Tank 9 は地下（Cellar）だが、表では Friday（週の遅い側）の予定であり、今日の清掃ではない。', 'Tank 4 は Yard（屋外）かつ Friday（週の遅い側）で、いずれの条件にも合わない。'] },
      { tag: '詳細', t: ['p4type'], id: 'v6q96p', s: "What is mentioned about this week's clean-out?",
        c: ["A new contractor is handling this week's clean-out.", 'The clean-out will take an extra day this week.', "This week's clean-out requires extra safety inspections.", 'Trainees will supervise part of the process.'],
        a: 2,
        e: '「今回使用するより強い薬剤の関係で、各タンクについて当番の責任者の安全点検の承認を得る必要がある」と述べている（"because of the stronger chemical the crew is using this time, each tank needs a safety check signed off by the duty manager before anyone climbs in"）。',
        w: ['新しい業者に切り替えるという言及はない。', '清掃日数が増えるという言及はない。', '正解。今回使うより強い薬剤のため、入槽前に当番の責任者の安全点検の承認が必要になる。', '研修生が工程の一部を監督するという言及はない。'] },
      { tag: '詳細', t: ['p4type'], id: 'v6q97p', s: 'What does the speaker ask staff to do?',
        c: ['Keep the loading bay clear on cleaning days.', 'Record the temperature of each tank before leaving.', 'Empty each tank before the cleaning crew arrives.', 'Report unusual smells from the tanks to a supervisor.'],
        a: 0,
        e: '「作業員がいる間は、両方の清掃日とも搬入口を空けておいてほしい。タンクローリーがまっすぐ扉まで入れるようにするため」と依頼している（"please make sure nothing\'s left in the loading bay on either cleaning day this week. The tanker needs a clear run to the doors"）。',
        w: ['正解。清掃日は搬入口を空けておくよう頼んでいる。', '温度の記録についての言及はない。', '清掃業者到着前にタンクを空にするようにとの依頼はない。', '異臭の報告についての言及はない。'] },
    ],
  }),

  /* ── 98–100（図表）─────────────────────────────────────
     2026-09-27 先読み対策 第2案（method2.md）。表は final-P4.md で凍結
     （Loxwood Nursery — Pot Lines。Item 14/Herbs/Glasshouse, Item 9/Shrubs/Glasshouse,
     Item 22/Herbs/Polytunnel, Item 5/Shrubs/Polytunnel）。stem・選択肢も凍結、
     正解はくじ（98=C, 99=B, 100=B）。旧版（Thistlewood 発送センターの箱在庫）を
     全面的に書き換えた。全設問 id を新規採番する（no は98–100のまま）。
     申し送り: 音声は Plant type（basil and mint という具体例で Herbs を示す）と
     Stored in（plastic-covered tunnel／under glass という言い換えで Polytunnel/Glasshouse を示す）の
     両方を表の語のまま言わない。Herbs（14・22）と Polytunnel（22・5）の交点は Item 22 だけ。
     非図表設問（Q99・Q100）には t: を明示する。
     明示的な否定・訂正は0（Aの「廃番」は、S4 の "until prices settle down"〈価格が落ち着くまでの
     つなぎ〉が示す供給継続で退けている）。
     2026-09-27 監査反映：Q100 に t: ['p4type'] が抜けており、図表ユニットの非図表設問が
     'graphic' 論点を無言で継承していた（申し送り違反）ため追加。S3 の
     "the design and everything else about it is exactly the same" は Q99 の A を打ち消すためだけの
     文だったため削除し、代わりに S4 の "until prices settle down"（つなぎの一時的措置）から
     「供給自体は続いており廃番ではない」と読ませる形にした。ja の「原材料費」（本文は単に
     costs であり原材料に限定していない）は「コスト」に直した。level は監査の結論で 5→4。
     2026-09-27 二次監査反映：S2・S3 の "batch" は S1 の "pot lines"・S4 の "this one line" と呼び方が
     ずれていたため "line" に統一した。S4 の "a very similar pot" が Q100 の正解選択肢
     "a similar pot" と逐語一致していたため "a near-identical pot" に差し替え、Q99・Q100 の exp の
     引用も本文の更新に合わせて書き直した。上の「明示的な否定・訂正」の記述は、S3 の該当文が
     既に削除されていたため実際の本数（0）に訂正した。 */
  talk({
    n: [98, 99, 100], lv: 4, k: 'telephone message', t: ['graphic', 'p4type'],
    graphic: {
      t: 'table', title: 'Loxwood Nursery — Pot Lines',
      head: ['Item', 'Plant type', 'Stored in'],
      rows: [
        ['Item 14', 'Herbs', 'Glasshouse'],
        ['Item 9', 'Shrubs', 'Glasshouse'],
        ['Item 22', 'Herbs', 'Polytunnel'],
        ['Item 5', 'Shrubs', 'Polytunnel'],
      ],
    },
    s: [
      { role: 'M-Br', text: "Hi Mr. Holt, it's Liam Hartley over at Loxwood Nursery, calling about one of the pot lines." },
      { role: 'M-Br', text: "It's the line we use for the culinary plants — basil, mint, that sort of thing — the ones kept out in the plastic-covered tunnel, not the ones under glass." },
      { role: 'M-Br', text: "The maker's just told us their costs have gone up, so the price on this line has risen since last month's order." },
      { role: 'M-Br', text: "Rather than pass that increase on straight away, I'd like to bring in a near-identical pot from a different supplier for this one line, at least until prices settle down — could you sign off on that for me?" },
      { role: 'M-Br', text: 'Give me a call back when you get a chance.' },
    ],
    ja: 'ロックスウッド・ナーサリーからホルト氏への留守電。リアム・ハートリーが鉢の品目の一つについて連絡している。対象はバジルやミントなど料理用の植物向けの鉢で、ガラス張りの温室ではなくビニールトンネルの中に置かれているものだと説明する。仕入れ先からコストが上がったと知らされ、先月の発注時よりこの品目の価格が上がったと伝える。値上げをそのまま転嫁する前に、この品目に限り別の仕入れ先から似た鉢を仕入れて価格が落ち着くまでのつなぎにしたいとして、承認してほしいと依頼する。手が空いたときに折り返し連絡してほしいと締めくくる。',
    v: [['culinary', '料理用の'], ['polytunnel', 'ビニールハウス（トンネル型）'], ['sign off on', '（正式に）承認する']],
    q: [
      { tag: '図表', id: 'v6q98p', s: 'Look at the graphic. Which item is the speaker calling about?',
        c: ['Item 14', 'Item 9', 'Item 22', 'Item 5'],
        a: 2,
        e: '「バジルやミントなど料理用の植物向け」（表の Herbs）で「ビニールトンネルの中」（表の Polytunnel）にある品目だと述べており、表と照らすと Item 22 に絞られる。',
        w: ['Item 14 は表で Herbs（料理用の植物向け）だが Glasshouse（ガラス張りの温室）であり、ビニールトンネルではない。', 'Item 9 は Shrubs（低木向け）かつ Glasshouse であり、いずれの条件にも合わない。', '正解。Herbs（料理用の植物向け）かつ Polytunnel（ビニールトンネル）に当たるのは Item 22 だけである。', 'Item 5 は Shrubs（低木向け）であり、料理用の植物向けではない。'] },
      { tag: '詳細', t: ['p4type'], id: 'v6q99p', s: 'What problem does the speaker mention?',
        c: ['The maker has discontinued the design.', "The supplier's prices rose this month.", 'The last delivery arrived cracked.', 'The pots sent were the wrong colour.'],
        a: 1,
        e: '「仕入れ先からコストが上がったと知らされ、先月の発注時よりこの品目の価格が上がった」と述べている（"The maker\'s just told us their costs have gone up, so the price on this line has risen since last month\'s order"）。',
        w: ['価格が上がった原因は仕入れ先のコスト増であり、さらに別の仕入れ先の鉢を使うのは "until prices settle down"（価格が落ち着くまでの一時的な措置）と述べていることから、この品目の供給自体は続いており、デザインが廃止されたわけではない。', '正解。仕入れ先の値上げにより、この品目の価格が先月より上がった。', '破損した状態で届いたという言及はない。', '色違いが届いたという言及はない。'] },
      { tag: '依頼', t: ['p4type'], id: 'v6q100p', s: 'What request does the speaker make?',
        c: ['Speak to the supplier before Friday', 'Approve a similar pot from another maker', 'Ask the other branch for spare stock', 'Tell the shop staff about the problem'],
        a: 1,
        e: '「値上げをそのまま転嫁する前に、この品目に限り別の仕入れ先からほぼ同一の鉢を仕入れたい。承認してほしい」と依頼している（"I\'d like to bring in a near-identical pot from a different supplier for this one line... could you sign off on that for me?"）。',
        w: ['金曜までに仕入れ先と話すようにとの依頼ではない。', '正解。別の仕入れ先の似た鉢を使うことの承認を求めている。', '他店舗への在庫依頼についての言及はない。', '店舗スタッフへ問題を伝えるようにとの依頼ではない。'] },
    ],
  }),
];
