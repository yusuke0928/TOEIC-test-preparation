/* =============================================================
   drills/listening3.js — Part 2 応答問題 追加ドリル
   Part 2 間接応答（p2ind）/ Part 2 疑問文の型（p2wh）
   listening.js の p2ind / p2wh を増補する。書式は listening.js を踏襲。
   音声は端末の音声合成で再生される。選択肢は解答するまで表示されない。
   ============================================================= */

/* Part 2 の単問（3 択） */
const p2 = (id, o) => ({
  id: `u-${id}`, part: 2, kind: 'p2', topics: o.t, level: o.lv ?? 4,
  questions: [{
    id, prompt: o.p, speakerA: o.sa || 'M-Am', speakerB: o.sb || 'W-Br',
    choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, vocab: o.v, topics: o.t,
  }],
});

export const UNITS = [

  /* ══ Part 2 — 間接応答（p2ind）══════════════════════ */
  p2('p2i-09', {
    t: ['p2ind'], lv: 3, sa: 'W-Br', sb: 'M-Am',
    p: "Has the lease renewal already gone out to the tenants?",
    c: [
      "It went out this morning, actually.",
      "The lease runs for two years.",
      "The tenants are on the fourth floor.",
    ],
    a: 0,
    e: '契約更新の通知を送ったかどうかを尋ねられ、Yes / No を使わずに「今朝送った」と事実で直接答える間接応答。lease や tenants という質問中の語をそのまま使った選択肢は、いずれも送付済みかという問いに答えていない。',
    w: [
      '正解。Yes / No を使わず、送付済みであることを事実で伝えている。',
      'lease という同じ語を使った引っ掛け。契約期間の話であり、送付の有無に答えていない。',
      'tenants という同じ語を使った引っ掛け。入居者の階数は質問と無関係。',
    ],
    ja: '設問：賃貸契約の更新通知はもう入居者に送りましたか。→ (A) 今朝送りました。',
    v: [['lease renewal', '賃貸契約の更新'], ['tenant', '入居者']],
  }),

  p2('p2i-10', {
    t: ['p2ind'], lv: 4, sa: 'M-Cn', sb: 'W-Au',
    p: "The delivery van broke down again on the way to the clinic.",
    c: [
      "Then I'll reschedule this afternoon's appointments.",
      "We bought that van last spring.",
      "The clinic opens at nine.",
    ],
    a: 0,
    e: '配送車の故障という報告（平叙文）に対し、「では午後の予約を組み直す」と対応策を示す間接応答。平叙文への投げかけには、具体的な行動で応じる選択肢が正解になりやすい。',
    w: [
      '正解。問題を受けた対応策を示している。',
      'van という同じ語を使った引っ掛け。購入時期の話であり、故障への反応になっていない。',
      'clinic という語を使った関連トピックの引っ掛け。開院時刻は問題への応答ではない。',
    ],
    ja: '設問：配送車がまたクリニックへ向かう途中で故障しました。→ (A) では午後の予約を組み直します。',
    v: [['break down', '故障する'], ['reschedule', '予定を組み直す']],
  }),

  p2('p2i-11', {
    t: ['p2ind'], lv: 4, sa: 'W-Am', sb: 'M-Br',
    p: "Who's going to introduce the guest curator at the opening?",
    c: [
      'She curated the exhibit herself.',
      "That hasn't been decided yet.",
      'The opening starts at six.',
    ],
    a: 1,
    e: '紹介役を尋ねられ、人名を答えずに「まだ決まっていない」と未確定であることを伝える間接応答。curator と語根が共通する語や opening の反復に惑わされないこと。',
    w: [
      'curator と語根が共通する curated を使った引っ掛け。紹介者を答えていない。',
      '正解。まだ決まっていないと未確定であることを伝えている。',
      'opening の反復。開始時刻は「誰が」に答えていない。',
    ],
    ja: '設問：オープニングでゲストキュレーターの紹介は誰がしますか。→ (B) まだ決まっていません。',
    v: [['curator', '学芸員'], ['guest curator', '客員キュレーター']],
  }),

  p2('p2i-12', {
    t: ['p2ind'], lv: 4, sa: 'W-Cn', sb: 'M-Br',
    p: "Where did the courier leave today's parcels?",
    c: [
      "I haven't checked the loading dock yet.",
      'They usually leave around noon.',
      'The courier company just changed last month.',
    ],
    a: 0,
    e: '荷物を置いた場所を尋ねられ、「まだ搬入口を確認していない」と答えられない事情を示す間接応答。leave を「出発する」の意味で使った選択肢は同じ語の音の引っ掛け。',
    w: [
      '正解。まだ確認していないと答えられない事情を示している。',
      'leave という同じ語を「出発する」の意味で使った引っ掛け。場所を答えていない。',
      'courier という語を使った関連トピックの引っ掛け。委託先の変更は場所と無関係。',
    ],
    ja: '設問：配達員は今日の荷物をどこに置いていきましたか。→ (A) まだ搬入口を確認していません。',
    v: [['courier', '配達員'], ['loading dock', '搬入口']],
  }),

  p2('p2i-13', {
    t: ['p2ind'], lv: 5, sa: 'M-Br', sb: 'W-Am',
    p: "Shouldn't the trial results be published by now?",
    c: [
      'The trial site is on the east campus.',
      'The lead researcher is still finalizing the analysis.',
      'The journal charges a submission fee.',
    ],
    a: 1,
    e: '「もう公開されているべきでは」という否定疑問に対し、Yes / No を使わず「主任研究員がまだ分析をまとめている最中」と遅れている理由を示す間接応答。trial の反復に惑わされないこと。',
    w: [
      'trial の反復。実施場所の話であり、公開が遅れているかどうかに答えていない。',
      '正解。分析がまだ終わっていないという理由を示している。',
      'journal という語を使った関連トピックの引っ掛け。掲載料の話は質問に答えていない。',
    ],
    ja: '設問：治験の結果はもう公開されているべきではないですか。→ (B) 主任研究員がまだ分析をまとめているところです。',
    v: [['trial results', '治験の結果'], ['finalize', 'まとめ上げる']],
  }),

  p2('p2i-14', {
    t: ['p2ind'], lv: 4, sa: 'W-Au', sb: 'M-Cn',
    p: 'How much will the water damage claim cost us?',
    c: [
      "It depends on the adjuster's report.",
      'The damage happened last Tuesday.',
      'Our flood policy renews in March.',
    ],
    a: 0,
    e: '金額を尋ねられ、断定を避けて「査定人の報告書次第」と条件を示す間接応答。It depends on ... は Part 2 の間接応答の定番表現。',
    w: [
      '正解。査定結果次第であると条件を示している。',
      'When への答えであり、How much に対応しない。',
      'flood policy という関連語を使った引っ掛け。保険の更新時期は請求額と無関係。',
    ],
    ja: '設問：水害の保険金請求はいくらになりますか。→ (A) 査定人の報告書次第です。',
    v: [['water damage', '水害'], ['adjuster', '（保険の）査定人']],
  }),

  p2('p2i-15', {
    t: ['p2ind'], lv: 3, sa: 'M-Am', sb: 'W-Br',
    p: 'Why was our gate changed at the last minute?',
    c: [
      'Ground crew found a mechanical issue on B7.',
      'The gate is now B12.',
      'Boarding starts in twenty minutes.',
    ],
    a: 0,
    e: '理由を尋ねられて「地上係員が B7 で機械的な不具合を見つけた」と具体的な原因で答える応答。新しいゲート番号だけを答えた選択肢は、理由ではなく変更後の情報にすぎない。',
    w: [
      '正解。ゲート変更の理由を具体的に述べている。',
      '変更後のゲート番号を答えているだけで、理由になっていない。',
      'gate に関連する話題だが、搭乗開始時刻は理由への応答ではない。',
    ],
    ja: '設問：なぜ直前でゲートが変更されたのですか。→ (A) 地上係員が B7 で機械的な不具合を見つけたためです。',
    v: [['ground crew', '地上係員'], ['mechanical issue', '機械的な不具合']],
  }),

  p2('p2i-16', {
    t: ['p2ind'], lv: 4, sa: 'W-Cn', sb: 'M-Au',
    p: 'It looks like enrollment is down again this semester.',
    c: [
      'The semester ends in December.',
      'Enrollment forms are online now.',
      'Then we might need to extend the application deadline.',
    ],
    a: 2,
    e: '志願者数の減少という報告（平叙文）に対し、「出願期限の延長が必要かもしれない」と対応策を提案する間接応答。',
    w: [
      'semester の反復。報告への反応になっていない。',
      'enrollment の反復。書式の電子化は減少への対応策ではない。',
      '正解。減少を受けた対応策を提案している。',
    ],
    ja: '設問：この学期もまた志願者数が減っているようです。→ (C) では出願期限の延長が必要かもしれませんね。',
    v: [['enrollment', '志願者数・入学者数'], ['application deadline', '出願期限']],
  }),

  p2('p2i-17', {
    t: ['p2ind'], lv: 4, sa: 'M-Br', sb: 'W-Au',
    p: 'Do we need to book the phone booths in advance now?',
    c: [
      'The booths were installed last month.',
      "Only during peak hours, from what I've heard.",
      'I usually work from home on Fridays.',
    ],
    a: 1,
    e: '予約の要否を尋ねられ、Yes / No を使わず「混雑時間帯だけ、と聞いている」と条件付きで答える間接応答。',
    w: [
      'booths の反復。設置時期の話であり、予約の要否に答えていない。',
      '正解。混雑時間帯に限られると条件を示している。',
      '個人の勤務スタイルの話であり、予約の要否に答えていない。',
    ],
    ja: '設問：電話ブースはもう事前予約が必要ですか。→ (B) 混雑時間帯だけ、と聞いています。',
    v: [['phone booth', '電話ブース'], ['peak hours', '混雑時間帯']],
  }),

  p2('p2i-18', {
    t: ['p2ind'], lv: 5, sa: 'W-Br', sb: 'M-Cn',
    p: "Who's covering wardrobe while Priya's on leave?",
    c: [
      "It's been split between two assistants.",
      "She's on leave until next Friday.",
      'Wardrobe fittings start at noon.',
    ],
    a: 0,
    e: '担当者を尋ねられ、特定の 1 人ではなく「2 人のアシスタントで分担している」と体制で答える間接応答。leave の反復に惑わされないこと。',
    w: [
      '正解。特定の 1 人ではなく分担体制で答えている。',
      'leave の反復。休暇期間の話であり、代わりの担当者を答えていない。',
      'wardrobe の反復。フィッティングの開始時刻は担当者の質問と無関係。',
    ],
    ja: '設問：プリヤが休暇中の衣装係は誰が担当していますか。→ (A) 2 人のアシスタントで分担しています。',
    v: [['wardrobe', '衣装（係）'], ['on leave', '休暇中で']],
  }),

  p2('p2i-19', {
    t: ['p2ind'], lv: 3, sa: 'M-Au', sb: 'W-Br',
    p: 'How soon can Dr. Castellano fit in an emergency appointment?',
    c: [
      'The appointment was rescheduled twice.',
      'Dental cleanings take about an hour.',
      "Not until she's back from the conference on Thursday.",
    ],
    a: 2,
    e: '「どれくらい早く」と急ぎの対応を尋ねられ、「木曜に学会から戻るまでは無理」と条件で答える応答。',
    w: [
      'appointment の反復。過去の変更履歴であり、緊急対応の可否に答えていない。',
      '診療という関連話題を使った引っ掛け。処置の所要時間は緊急対応の可否と無関係。',
      '正解。学会から戻る木曜までは対応できないと条件を示している。',
    ],
    ja: '設問：キャステラーノ先生の緊急診察はどれくらい早く入れられますか。→ (C) 木曜に学会から戻るまでは無理です。',
    v: [['fit in', '（予定に）組み込む'], ['emergency appointment', '緊急診察']],
  }),

  p2('p2i-20', {
    t: ['p2ind'], lv: 5, sa: 'W-Am', sb: 'M-Br',
    p: 'Someone in receiving keeps mislabeling the pallets.',
    c: [
      'The pallets arrived yesterday afternoon.',
      "I'll walk through the process with the new hires tomorrow.",
      'The warehouse closes at six.',
    ],
    a: 1,
    e: 'ラベル付けのミスという報告（平叙文）に対し、「明日、新人に手順を説明する」と再発防止の行動で答える間接応答。',
    w: [
      'pallets の反復。到着時刻の話であり、報告への対応になっていない。',
      '正解。再発防止の具体的な行動を示している。',
      '倉庫の閉店時刻の話であり、報告への対応になっていない。',
    ],
    ja: '設問：入荷担当の誰かがパレットのラベル付けを間違え続けています。→ (B) 明日、新人たちに手順を説明します。',
    v: [['receiving', '入荷（部門）'], ['mislabel', 'ラベルを間違って貼る']],
  }),

  /* ══ Part 2 — 疑問文の型（p2wh）═════════════════════ */
  p2('p2w-09', {
    t: ['p2wh'], lv: 5, sa: 'W-Am', sb: 'M-Cn',
    p: "The client approved the final layout, didn't they?",
    c: [
      'The layout took two weeks to finish.',
      'The client meeting is on Friday.',
      'They approved everything except the cover.',
    ],
    a: 2,
    e: '付加疑問による確認に対し、Yes / No を使わず「表紙以外はすべて承認した」と部分的な承認内容を示す応答。全面的な Yes でも No でもない部分肯定が 900 帯で狙われる。',
    w: [
      'layout の反復。制作期間の話であり、承認の有無に答えていない。',
      'client の反復。次回の打ち合わせ予定であり、承認の確認に答えていない。',
      '正解。表紙以外は承認済みという部分肯定で答えている。',
    ],
    ja: '設問：クライアントは最終レイアウトを承認しましたよね。→ (C) 表紙以外はすべて承認しました。',
    v: [['layout', 'レイアウト'], ['cover', '表紙']],
  }),

  p2('p2w-10', {
    t: ['p2wh'], lv: 5, sa: 'M-Br', sb: 'W-Cn',
    p: "Didn't the finance team already sign off on this budget?",
    c: [
      'They signed for the delivery this morning.',
      'The budget meeting ran long yesterday.',
      'Not the revised version, no.',
    ],
    a: 2,
    e: '否定疑問による確認に対し、日本語とは逆に事実として承認していないので No。「改訂版については承認していない」と対象を限定して答える応答。',
    w: [
      'sign の反復。荷物の受け取りサインの話であり、予算の承認とは無関係。',
      'budget の反復。会議が長引いた話であり、承認の有無に答えていない。',
      '正解。改訂版に限っては承認していないと限定して答えている。',
    ],
    ja: '設問：経理チームはこの予算をもう承認しているのではないですか。→ (C) いいえ、改訂版については承認していません。',
    v: [['sign off on', '正式に承認する'], ['revised version', '改訂版']],
  }),

  p2('p2w-11', {
    t: ['p2wh'], lv: 4, sa: 'W-Br', sb: 'M-Am',
    p: 'Should we run the interview live or record it beforehand?',
    c: [
      "Yes, we'll record it next week.",
      'Whichever the host prefers.',
      'The interview runs about twenty minutes.',
    ],
    a: 1,
    e: '選択疑問文には原則 Yes / No で答えられない。「司会者の希望次第」と判断を他者に委ねる間接応答。',
    w: [
      '選択疑問に Yes は不可。',
      '正解。判断を司会者に委ねている。',
      'How long への答えであり、選択に対応していない。',
    ],
    ja: '設問：インタビューは生放送と事前収録のどちらにしますか。→ (B) 司会者の希望次第です。',
    v: [['run live', '生放送で流す'], ['beforehand', '事前に']],
  }),

  p2('p2w-12', {
    t: ['p2wh'], lv: 4, sa: 'M-Cn', sb: 'W-Am',
    p: 'Do you know whether the invoices were sent before the holiday?',
    c: [
      'The invoices come to about six thousand.',
      'The holiday falls on a Monday this year.',
      'I believe so, but let me double-check.',
    ],
    a: 2,
    e: 'whether を使った間接疑問。断定を避けて「そう思うが確認する」と留保を示す応答。',
    w: [
      'How much への答えであり、送付済みかどうかに答えていない。',
      '祝日の曜日の話であり、送付済みかどうかに答えていない。',
      '正解。断定を避けつつ確認すると答えている。',
    ],
    ja: '設問：祝日の前に請求書を送ったかどうかご存知ですか。→ (C) そう思いますが、確認させてください。',
    v: [['whether', '〜かどうか'], ['double-check', '再確認する']],
  }),

  p2('p2w-13', {
    t: ['p2wh'], lv: 4, sa: 'W-Au', sb: 'M-Br',
    p: "Isn't the batch supposed to pass inspection before shipping?",
    c: [
      'Inspection usually takes about two hours.',
      'Shipping costs went up again this quarter.',
      'It failed the first round, actually.',
    ],
    a: 2,
    e: '「検査に通ってから出荷のはずでは」という否定疑問に対し、Yes / No を使わず「実は 1 回目は不合格だった」と前提を崩す事実を示す応答。',
    w: [
      'inspection の反復。所要時間の話であり、合否に答えていない。',
      'shipping の反復。コストの話であり、質問に答えていない。',
      '正解。1 回目は不合格だったという事実で前提を崩している。',
    ],
    ja: '設問：出荷前にそのロットは検査に通っているはずではないですか。→ (C) 実は 1 回目は不合格だったんです。',
    v: [['batch', 'ロット・一群'], ['pass inspection', '検査に通る']],
  }),

  p2('p2w-14', {
    t: ['p2wh'], lv: 3, sa: 'M-Au', sb: 'W-Br',
    p: 'Would you rather we mail the invitations or send them by e-mail?',
    c: [
      'Yes, the invitations are ready.',
      'The event is in two months.',
      'Mail feels more appropriate for this event.',
    ],
    a: 2,
    e: '選択疑問文に Yes / No は使えない。郵送とメールのどちらかを直接選んで答える、比較的素直な応答。',
    w: [
      '選択疑問に Yes は不可。',
      'How soon への答えであり、選択に対応していない。',
      '正解。郵送の方がふさわしいと直接選んでいる。',
    ],
    ja: '設問：招待状は郵送とメールのどちらがよいですか。→ (C) この催しには郵送の方がふさわしいと思います。',
    v: [['invitation', '招待状'], ['appropriate', 'ふさわしい']],
  }),

  p2('p2w-15', {
    t: ['p2wh'], lv: 3, sa: 'W-Cn', sb: 'M-Am',
    p: "The pool's closed for maintenance this week, isn't it?",
    c: [
      'The car pool leaves at eight.',
      'Yes, it reopens Monday.',
      'Maintenance staff arrive early.',
    ],
    a: 1,
    e: '付加疑問に Yes で答え、再開日を添える素直な応答。pool を「相乗り」の意味で使った選択肢は同語を使った音の引っ掛け。',
    w: [
      'pool を「相乗り」の意味で使った同語の引っ掛け。プールの話ではない。',
      '正解。Yes と答え、再開日を添えている。',
      'maintenance の反復。スタッフの出勤時刻は質問に答えていない。',
    ],
    ja: '設問：プールは今週メンテナンスで閉まっていますよね。→ (B) はい、月曜に再開します。',
    v: [['car pool', '（通勤の）相乗り'], ['reopen', '再開する']],
  }),

  p2('p2w-16', {
    t: ['p2wh'], lv: 4, sa: 'M-Br', sb: 'W-Au',
    p: 'Could you tell me whether the placement test results are ready?',
    c: [
      'Yes, the test was quite difficult.',
      'The center opens at nine.',
      'Not yet, but the tutors are finishing up now.',
    ],
    a: 2,
    e: 'whether を使った間接疑問。Yes と答えていても内容が噛み合わない選択肢に注意。「まだだが、講師陣が今まとめている」と進捗を示す応答が正解。',
    w: [
      'Yes の後に続く内容がテストの難易度についてで、結果が出たかどうかに答えていない。',
      '教室の開室時刻の話であり、質問に答えていない。',
      '正解。まだだが講師陣が仕上げていると進捗を示している。',
    ],
    ja: '設問：クラス分けテストの結果が出ているかどうか教えていただけますか。→ (C) まだですが、講師陣が今まとめているところです。',
    v: [['placement test', 'クラス分けテスト'], ['tutor', '講師']],
  }),
];
