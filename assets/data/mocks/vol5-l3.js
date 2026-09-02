/* =============================================================
   予想模試 Vol.5 — Part 4（No.71–100）
   総仕上げ回。
   ============================================================= */

const talk = (o) => ({
  id: `v5-p4-${o.n[0]}`, part: 4, kind: 'set', kindLabel: o.k || 'talk',
  topics: o.t || ['p4type'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: `v5q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p4type'], tag: x.tag,
  })),
});

export const L3 = [

  /* ── 71–73 留守番電話 ─────────────────────────────── */
  talk({
    n: [71, 72, 73], lv: 4, k: 'telephone message',
    s: [
      { role: 'W-Br', text: 'Hello, this is a message for Mr. Kowalczyk from Fenwick Dental Practice, about your appointment on Thursday.' },
      { role: 'W-Br', text: 'I\'m calling because the hygienist you were booked with, Ms. Adeyemi, has had to take unplanned leave, and I want to offer you some options rather than just moving you to whoever\'s free.' },
      { role: 'W-Br', text: 'The appointment was for a routine clean and check-up. Dr. Marsh can do the check-up part on Thursday as planned, but the clean would need to go to a different hygienist, Mr. Okafor, at a slightly later time — half past three instead of two.' },
      { role: 'W-Br', text: 'Alternatively, if you\'d rather keep everything with Ms. Adeyemi specifically, I can move the whole appointment to the following Tuesday, when she\'s back.' },
      { role: 'W-Br', text: 'There\'s no charge either way, and neither option affects your annual check-up cycle.' },
      { role: 'W-Br', text: 'Please call the practice back before Wednesday so we know which option to book you into. Thank you.' },
    ],
    ja: 'フェンウィック歯科医院から、木曜の予約についての伝言。担当予定だった歯科衛生士アデイェミ氏が急な休みを取ったため、単に空いている担当者に回すのではなく選択肢を伝えたいと述べる。予約内容は定期清掃と検診で、検診部分は木曜のままマーシュ医師が担当できるが、清掃は別の衛生士オカフォー氏が午後 2 時ではなく 3 時半に担当することになる。あるいは、アデイェミ氏本人にこだわるなら、彼女が復帰する翌週火曜に予約全体を移すことも可能。どちらも追加費用はなく、年 1 回の検診周期にも影響しない。水曜までに折り返し、どちらか希望を伝えるよう依頼している。',
    v: [['hygienist', '歯科衛生士'], ['unplanned leave', '急な休み'], ['check-up cycle', '検診の周期']],
    q: [
      { tag: '概要', s: 'Why is the speaker calling?',
        c: ['To explain that a hygienist is unavailable and offer alternatives.', 'To confirm that the appointment has been cancelled outright.',
            'To request payment for an earlier check-up carried out in January.', 'To announce a permanent change to the practice\'s opening and closing times.'],
        a: 0,
        e: '担当の衛生士が急に休みを取ったため、代替案を提示している。',
        w: ['正解。', '予約は取り消されておらず、二つの案が提示されている。', '費用については「どちらの案でも追加の請求はない」と述べており、過去の検診分の請求という話は一度も出てこない。', '診療時間そのものの変更はどこにも出てこない。述べているのは担当者の急な休みに伴う今回の予約の組み替えで、開閉時刻は話題になっていない。'] },
      { tag: '詳細', s: 'What is one option offered to the listener?',
        c: ['Having the check-up on Thursday and the clean later that day with another hygienist.', 'Having the entire appointment cancelled and a full refund paid back within ten working days.',
            'Coming in earlier on Thursday morning to have both procedures done together.', 'Switching permanently to Mr. Okafor for all future cleans and check-ups.'],
        a: 0,
        e: '検診は木曜のまま、清掃は別の衛生士が同日午後3時半に担当する案が示されている。',
        w: ['正解。', '「どちらの案でも追加の請求はない」と述べているだけで、支払い済みの費用も返金も話題になっていない。', '示された案では清掃が午後 2 時から 3 時半へ後ろにずれる。早い時間にまとめる案ではない。', 'オカフォー氏が担当するのは今回の清掃だけで、以後ずっと担当を替えるという話ではない。'] },
      { tag: '依頼', s: 'What does the speaker ask the listener to do?',
        c: ['Arrive at the practice fifteen minutes early on Thursday.', 'Call back before Wednesday to choose an option.',
            'Bring proof of insurance to the rescheduled appointment.', 'Confirm the appointment online before the end of today.'],
        a: 1,
        e: '「水曜までに折り返し、どちらの案にするか伝えてほしい」と依頼している。',
        w: ['早めの来院は求めていない。', '正解。', '保険証明の話はない。', 'オンライン確認の話もない。'] },
    ],
  }),

  /* ── 74–76 空港アナウンス ─────────────────────────── */
  talk({
    n: [74, 75, 76], lv: 4, k: 'announcement',
    s: [
      { role: 'M-Au', text: 'May I have your attention, please. This is an announcement for passengers on flight WX 482 to Auckland.' },
      { role: 'M-Au', text: 'Due to a change of aircraft, this flight will now depart from gate 14 instead of gate 22. Please make your way to the new gate as soon as possible; boarding will begin in approximately twenty minutes.' },
      { role: 'M-Au', text: 'Passengers requiring wheelchair assistance who have already checked in at gate 22 do not need to move — a member of staff will come to you and escort you to gate 14 directly.' },
      { role: 'M-Au', text: 'Because the new aircraft has a different seating configuration, a small number of passengers will be reseated. If you are affected, your new boarding pass will be issued automatically at the gate; there is no need to visit the service desk.' },
      { role: 'M-Au', text: 'We apologise for the inconvenience and thank you for your patience.' },
    ],
    ja: 'オークランド行き WX482 便の搭乗客への案内。機材変更のため搭乗口が 22 番から 14 番に変わり、約 20 分後に搭乗開始予定なので速やかに移動するよう案内。すでに 22 番で車椅子介助の受付を済ませた乗客は移動不要で、係員が迎えに来て 14 番まで案内する。新しい機材は座席配置が異なるため一部の乗客は座席が変わるが、対象者には搭乗口で新しい搭乗券が自動的に発行されるため、サービスデスクに行く必要はないと説明している。',
    v: [['aircraft configuration', '機材の座席配置'], ['escort', '案内して連れて行く'], ['boarding pass', '搭乗券']],
    q: [
      { tag: '詳細', s: 'Why is there a gate change?',
        c: ['The flight has been delayed by several hours.', 'The original gate is undergoing repairs.',
            'A different aircraft has been assigned to the flight.', 'A security issue was found at the original gate.'],
        a: 2,
        e: '「機材変更のため」と明言されている。',
        w: ['遅延の話は出ていない。', '修理の話はない。', '正解。', '保安上の問題には触れていない。'] },
      { tag: '詳細', s: 'What should wheelchair-assistance passengers who already checked in do?',
        c: ['Wait for a further announcement listing all the affected seat numbers.', 'Stay where they are; staff will come to them.',
            'Visit the service desk at gate 14 for a new pass.', 'Proceed to gate 14 immediately on their own without waiting for assistance.'],
        a: 1,
        e: '「移動不要。係員が迎えに来て案内する」と述べられている。',
        w: ['追加の案内を待つようにという指示はない。座席が変わる乗客には搭乗口で新しい搭乗券が発行されるので、座席番号を放送で読み上げるという案内自体が存在しない。', '正解。', '座席が変わってもサービスデスクに行く必要はないと明言されている。', '車椅子介助の乗客は移動しなくてよく、係員が迎えに来ると述べている。'] },
      { tag: '推測', s: 'What is implied about passengers who are reseated?',
        c: ['They must request a new seat at the service desk.', 'They will receive a new boarding pass automatically at the gate.',
            'They will have to take a later flight departing the next day.', 'They will receive a discount voucher for a future flight booking.'],
        a: 1,
        e: '「対象者には搭乗口で新しい搭乗券が自動的に発行され、サービスデスクに行く必要はない」とある。',
        w: ['サービスデスクへの訪問は不要と明記。', '正解。', '便の変更ではない。', '割引の話はない。'] },
    ],
  }),

  /* ── 77–79 会議の抜粋 ─────────────────────────────── */
  talk({
    n: [77, 78, 79], lv: 5, k: 'excerpt from a meeting', t: ['p3int'],
    s: [
      { role: 'W-Am', text: 'Moving to item four, travel spending. You\'ll have seen the figures — we\'re running about eighteen percent over the travel budget for the year so far.' },
      { role: 'W-Am', text: 'I don\'t think the answer is banning travel outright; some of it clearly pays for itself. What I want us to agree today is a simple filter: before booking, ask whether the same outcome could be achieved by video call, and be able to answer that question in writing.' },
      { role: 'W-Am', text: 'This isn\'t about trusting people less. It\'s about making the decision visible, because right now nobody has to justify a trip until after the fact, when it\'s too late to change anything.' },
      { role: 'W-Am', text: 'Starting next month, any single trip over four hundred pounds will need that one-line justification signed off by a manager before booking, not after.' },
      { role: 'W-Am', text: 'Trips under that amount are unaffected — we don\'t want to create a bottleneck over relatively small spends.' },
      { role: 'W-Am', text: 'I\'d like this in place by the first of next month. Any objections, raise them now rather than when the policy lands in your inbox.' },
    ],
    ja: '出張費が年初来予算を約 18 パーセント超過している議題。出張を全面禁止するのではなく、予約前に「ビデオ通話で同じ目的を達成できないか」を自問し、それを文書で説明できるようにする簡単な基準の導入を提案。人を信用しないという趣旨ではなく、判断を可視化することが狙いで、現状は事後にしか正当化されず手遅れになってしまうと説明。来月から 400 ポンドを超える出張は予約前に上司の一言承認が必要になるが、それ未満の出張には影響しない（小口の出張まで滞らせたくないため）。来月 1 日までに導入したいので、異議があれば通知が届いてからではなく今この場で述べるよう求めている。',
    v: [['bottleneck', '滞り、ボトルネック'], ['sign off', '承認する'], ['justification', '正当化・理由付け']],
    q: [
      { tag: '概要', s: 'What is being proposed?',
        c: ['Requiring written justification after booking each trip.', 'Banning all business travel immediately.',
            'Requiring justification for costlier trips before booking.', 'Outsourcing travel booking to an agency.'],
        a: 2,
        e: '400 ポンド超の出張は予約前に一言の正当化と上司承認を必要とする制度を提案している。',
        w: ['「予約の前であって事後ではない」と明言している。事後の正当化は現行の運用そのもので、手遅れになると問題視されている側である。対象も 400 ポンドを超える出張に限られ、すべての出張ではない。', '全面禁止ではないと明言している。', '正解。', '外部委託の話も出ていない。'] },
      { tag: '意図', t: ['p3int'], s: 'What does the speaker mean when she says, "It\'s about making the decision visible"?',
        c: ['She wants to reduce the company\'s total travel budget by half.', 'She wants justification to happen before spending, not just be recorded after.',
            'She wants every justification to be published on the internal website.', 'She wants every trip to be approved by two managers.'],
        a: 1,
        e: '直後に「今は事後にしか正当化されず手遅れになる」と述べ、事前の可視化が狙いだと説明している。',
        w: ['超過分は約 18 パーセントと述べているだけで、予算を半減させるという目標は出てこない。', '正解。', '書面に残すのは上司の承認を得るためで、全社に公開するとは述べていない。可視化とは、決裁の場に理由が出ることであって、社内に公表することではない。', '承認するのは上司 1 人で、しかも対象は 400 ポンドを超える出張に限られる。'] },
      { tag: '詳細', s: 'What is stated about trips under four hundred pounds?',
        c: ['They still require written justification.', 'They are unaffected by the new policy.',
            'They will be banned starting next month.', 'They require approval from two managers.'],
        a: 1,
        e: '「その金額未満の出張は影響を受けない」と明言している。',
        w: ['正当化が必要なのは 400 ポンド超。', '正解。', '禁止の対象ではない。', '二重承認の話はない。'] },
    ],
  }),

  /* ── 80–82 広告 ───────────────────────────────────── */
  talk({
    n: [80, 81, 82], lv: 4, k: 'advertisement',
    s: [
      { role: 'M-Br', text: 'Do you love the idea of houseplants more than you love keeping them alive? Leafwell might be for you.' },
      { role: 'M-Br', text: 'We\'re a subscription plant-care visit — once a month, one of our specialists comes to your home, checks every plant you own, and does whatever it needs: repotting, pruning, treating pests, or just telling you to stop watering it quite so often.' },
      { role: 'M-Br', text: 'Unlike a one-off consultation, we track each plant over time, so by the third or fourth visit we know exactly what\'s worked and what hasn\'t in your specific home — your light, your humidity, your habits.' },
      { role: 'M-Br', text: 'Visits start at eighteen pounds a month for up to ten plants, and you can pause anytime you\'re travelling — you\'re only charged for months we actually visit.' },
      { role: 'M-Br', text: 'If a plant dies despite our advice within the first three months, we\'ll replace it free of charge, no questions asked.' },
      { role: 'M-Br', text: 'Book your first visit this month and the initial consultation, normally twelve pounds, is included at no extra cost.' },
    ],
    ja: '観葉植物を育てるのが得意ではない人向けの月極訪問サービス「Leafwell」の広告。月 1 回、専門スタッフが自宅を訪れ、すべての植物を点検し、植え替え・剪定・害虫対策や水やりの助言などを行う。1 回限りの相談と違い、時間をかけて各植物を追跡するため、3〜4 回目の訪問までにはその家特有の光・湿度・習慣に何が合っているかがわかるようになる。料金は植物 10 鉢までで月 18 ポンドから、旅行中は一時停止でき、実際に訪問した月のみ課金される。助言に従っても最初の 3 か月以内に植物が枯れた場合は無条件で無料交換。今月中に初回訪問を予約すると、通常 12 ポンドの初回相談も無料になる。',
    v: [['repotting', '植え替え'], ['one-off consultation', '1 回限りの相談'], ['no questions asked', '理由を問わず']],
    q: [
      { tag: '概要', s: 'What does Leafwell offer?',
        c: ['An online course on plant care.', 'An occasional plant delivery service.',
            'A recurring monthly plant-care visit.', 'An annual discount on gardening tools.'],
        a: 2,
        e: '月 1 回の定期訪問による植物ケアサービスと説明されている。',
        w: ['オンライン講座の話はない。', '配送サービスではない。', '正解。', '園芸道具の割引には触れていない。'] },
      { tag: '詳細', s: 'What is said about pausing the service?',
        c: ['Pausing requires thirty days of written notice.', 'Pausing is not permitted once a subscription starts.',
            'Customers are only charged for months they are actually visited.', 'A cancellation fee applies each time a customer pauses the service.'],
        a: 2,
        e: '「旅行中は一時停止でき、実際に訪問した月のみ課金される」と述べている。',
        w: ['「旅行中はいつでも一時停止できる」と述べており、予告期間という条件は付いていない。', '一時停止できることが売りとして挙げられており、開始後は不可という説明と食い違う。', '正解。', '一時停止した月は課金されないと述べており、費用が発生するという説明と食い違う。'] },
      { tag: '詳細', s: 'What does the speaker say about plants that die within three months?',
        c: ['A partial refund will be issued.', 'They will be replaced free of charge.',
            'The customer must upgrade their plan.', 'They are not covered under any circumstances.'],
        a: 1,
        e: '「最初の 3 か月以内に枯れた場合は無条件で無料交換」と述べている。',
        w: ['返金ではなく交換。', '正解。', 'プラン変更の話はない。', '対象外という説明ではない。'] },
    ],
  }),

  /* ── 83–85 研修講話 ───────────────────────────────── */
  talk({
    n: [83, 84, 85], lv: 5, k: 'talk', t: ['p3int'],
    s: [
      { role: 'W-Cn', text: 'Welcome to your first shift briefing. I want to spend most of our time on one thing that isn\'t in the manual in any useful way: what to do if you think someone is shoplifting.' },
      { role: 'W-Cn', text: 'The instinct is to confront them immediately. Don\'t — that\'s a decision for the duty manager, not for you, and it\'s there to protect you as much as anyone.' },
      { role: 'W-Cn', text: 'What we do ask is that you stay visible and polite. Go over, offer help with something completely unrelated — "can I get you a basket," that sort of thing. In most cases, being seen and acknowledged is enough on its own to change what happens next.' },
      { role: 'W-Cn', text: 'If you\'re still concerned after that, the sequence is: note what you saw, tell the duty manager quietly, and let them decide what happens. You are never expected to follow anyone outside the store.' },
      { role: 'W-Cn', text: 'The one thing you must never do is discuss a specific customer with another customer, even if they ask. Just say you can\'t discuss individual shoppers, and move on.' },
    ],
    ja: '新人スタッフの初回勤務前の説明。マニュアルに十分書かれていない「万引きを疑ったときの対応」に時間の大半を割くと述べる。すぐに問い詰めたくなるが、それは自分の判断ですることではなく、当直責任者が決めることであり、スタッフ自身を守るための決まりでもあると説明。求められる対応は、目立つ位置で丁寧に応対すること。無関係な用件（「かごをお持ちしましょうか」など）で声をかけるだけで、多くの場合はそれだけで状況が変わるという。それでも不安が残る場合は、見たことを記録し、静かに当直責任者に伝え、判断を委ねること。店外まで追いかけることは決して求められない。絶対にしてはいけないのは、他の客に特定の客について話すこと。尋ねられても「個別の客については話せない」とだけ答えて切り上げるよう指示している。',
    v: [['confront', '問い詰める'], ['duty manager', '当直責任者'], ['shoplifting', '万引き']],
    q: [
      { tag: '概要', s: 'Who most likely are the listeners?',
        c: ['Head office auditors', 'Store security consultants',
            'New retail staff', 'Loyalty programme members'],
        a: 2,
        e: '「初回の勤務前ミーティングへようこそ」と冒頭で述べている。',
        w: ['本社監査担当ではない。', 'コンサルタントではなく現場スタッフ向け。', '正解。', '会員向けの説明ではない。'] },
      { tag: '意図', t: ['p3int'], s: 'What does the speaker mean when she says, "that\'s a decision for the duty manager, not for you"?',
        c: ['Staff should photograph or film the incident as evidence.', 'Staff should call the police immediately without telling anyone else.',
            'Staff should not personally confront or accuse a customer.', 'Staff should ask a colleague to make the decision instead.'],
        a: 2,
        e: '直前の「すぐに問い詰めたくなる衝動」への対応として述べており、その判断・対応は当直責任者に委ねるべきだという意味。',
        w: ['撮影・録画への言及は一度もない。求められているのは「見たことを書き留めて当直責任者に静かに伝える」ことで、記録手段としての写真や動画は挙がっていない。', '警察への通報は述べていない。', '正解。', '同僚への丸投げではなく当直責任者への報告。'] },
      { tag: '詳細', s: 'What must staff never do?',
        c: ['Offer unsolicited help to any customer in the store.', 'Discuss a specific customer with another customer.',
            'Leave the sales floor unattended.', 'Report a concern to the duty manager.'],
        a: 1,
        e: '「他の客に特定の客について話すことは絶対にしてはいけない」と明言している。',
        w: ['むしろ声をかけることが推奨されている。', '正解。', '離席の話はない。', '責任者への報告はむしろ推奨されている。'] },
    ],
  }),

  /* ── 86–88 自動応答 ───────────────────────────────── */
  talk({
    n: [86, 87, 88], lv: 4, k: 'recorded message',
    s: [
      { role: 'M-Am', text: 'Thank you for calling Northbridge Insurance claims. Due to high call volumes, your wait time is currently longer than usual.' },
      { role: 'M-Am', text: 'Before you continue holding, two things that may help.' },
      { role: 'M-Am', text: 'If you\'re calling to check the status of an existing claim, you can get real-time updates through our website or app without waiting on hold — you\'ll need your claim reference number, which starts with the letter C.' },
      { role: 'M-Am', text: 'If you\'re calling to report a new vehicle incident and no one was injured, you can also start that report online; it takes about ten minutes and avoids the queue entirely for the first stage. A claims handler will still call you back within one working day to finish the process.' },
      { role: 'M-Am', text: 'If your call involves an injury or an incident that\'s still ongoing, please stay on the line, as those calls are handled in priority order.' },
      { role: 'M-Am', text: 'To continue holding for a general enquiry, please stay on the line. Alternatively, you can request a callback by pressing one, and we\'ll ring you back in the order your call was received.' },
    ],
    ja: 'ノースブリッジ保険の保険金請求窓口の自動音声。現在、通話量が多く待ち時間が通常より長いと案内。既存の請求状況を確認したい場合は、ウェブサイトかアプリで待たずにリアルタイム確認ができ、C から始まる請求番号が必要と説明。けが人のいない新規の車両事故報告もオンラインで開始でき、約 10 分で最初の段階の順番待ちを完全に回避できるが、手続き完了のため担当者が翌営業日以内に折り返すとのこと。けがを伴う場合や進行中の事故についてはそのまま電話を保留するよう案内され、そうした電話は優先順に対応される。一般的な問い合わせで保留を続ける場合はそのまま待つか、1 を押して着信順の折り返しを依頼できる。',
    v: [['claim reference number', '請求番号'], ['claims handler', '保険金請求担当者'], ['priority order', '優先順']],
    q: [
      { tag: '詳細', s: 'What can callers do to check an existing claim\'s status?',
        c: ['Visit a local branch in person during business hours.', 'Send a text message or letter quoting their policy number.',
            'E-mail a photograph of the damage to the claims team.', 'Use the website or app with their claim reference number.'],
        a: 3,
        e: '「ウェブサイトかアプリで、請求番号を使ってリアルタイム確認ができる」と案内されている。',
        w: ['支店という窓口自体が音声に出てこない。来店は案内されていない。', '照会の手段として案内されているのはウェブサイトとアプリだけで、テキストメッセージも郵送も出てこない。', 'メール送付の話も出ていない。', '正解。'] },
      { tag: '詳細', s: 'What is said about reporting a new incident with no injuries?',
        c: ['It can only be reported by telephone during the company\'s normal business hours.', 'It cannot be started until a claims handler has returned the customer\'s call.',
            'It requires a formal police report and a witness statement to be attached first.', 'It can be started online and avoids the queue for the first stage.'],
        a: 3,
        e: '「オンラインで開始でき、約 10 分で最初の段階の待ち行列を回避できる」と述べている。',
        w: ['オンラインでの受付に時間帯の制限は付いておらず、営業時間内に限るという条件は述べていない。', '担当者からの折り返しは手続きを「完了させる」ためのもので、報告そのものはその前にオンラインで開始できると明言している。', '警察の報告書も目撃者の陳述書も、添付を求める案内は出てこない。必要なものとして挙がっているのは請求番号（既存の請求を照会する場合）だけ。', '正解。'] },
      { tag: '詳細', s: 'Who is advised to stay on the line rather than use the alternatives?',
        c: ['Callers who have already filed a claim online.', 'Callers who want a printed or emailed copy of their policy.',
            'Callers asking a question about premium payments.', 'Callers whose incident involves an injury or is still ongoing.'],
        a: 3,
        e: '「けがを伴う場合や進行中の事故についてはそのまま保留するように」と案内している。',
        w: ['オンラインで申請済みの人には担当者から翌営業日以内に折り返すと述べており、保留を続けるようにとは言っていない。', '保険証券の写しを紙でもメールでも送るという用件は、音声のどこにも出てこない。', '保険料の支払いという用件そのものが音声に出てこない。一般的な問い合わせについては、保留を続けても 1 を押して折り返しを頼んでもよいと案内されており、「代替手段を使わずに保留せよ」と言われている相手ではない。', '正解。'] },
    ],
  }),

  /* ── 89–91（図表）─────────────────────────────────── */
  /* 2026-08-25（レビュー差し戻し対応）：No.90・No.91 は t を明示していなかったため、
     ユニット既定の t:['graphic','p4type'] を暗黙に継承し、図表を使わない詳細設問
     なのに topics に 'graphic' が紛れ込んでいた。両問に t:['p4type'] を明示した。
     stem・choices・answer は変更していないため id（talk() の自動生成）はそのまま。 */
  talk({
    n: [89, 90, 91], lv: 5, k: 'talk', t: ['graphic', 'p4type'],
    graphic: {
      t: 'table', title: 'Cobblestone Tavern — Evening Shift Assignments',
      head: ['Station', 'Tuesday', 'Wednesday'],
      rows: [
        ['Bar', 'Marek', 'Yara'],
        ['Grill', 'Yara', 'Feng'],
        ['Front of house', 'Feng', 'Marek'],
        ['Cellar/stock', 'Priya', 'Priya'],
      ],
    },
    s: [
      { role: 'M-Br', text: 'Quick briefing before we open tonight. Two things.' },
      { role: 'M-Br', text: 'First, whoever\'s on the grill today needs to swap with cellar duty for the first hour, because the keg delivery is arriving late and needs to go straight down before it warms up in the yard.' },
      { role: 'M-Br', text: 'That\'s only for the first hour — normal stations resume after that, and it\'s only for tonight; tomorrow\'s rota is unaffected.' },
      { role: 'M-Br', text: 'Second, the card machine at the bar has been swapped for a new model, and it now needs a signature for anything over fifty pounds instead of just a tap. Expect a few confused regulars.' },
      { role: 'M-Br', text: 'Last thing — happy hour snacks go out at six, not five thirty like last week. We ran out before the dinner rush last time because we started too early.' },
    ],
    ja: '開店前の短い連絡。1 点目、今日グリル担当の人は最初の 1 時間だけ貯蔵室担当と交代する必要がある。生樽の配達が遅れており、庭先で温まる前にすぐ貯蔵室に運び込む必要があるため。これは最初の 1 時間だけで、今夜限りであり、翌日の割り当てには影響しない。2 点目、バーのカード決済機が新型に交換され、50 ポンドを超える支払いはタッチではなく署名が必要になった。戸惑う常連客がいるかもしれない。最後に、ハッピーアワーの軽食は先週の 5 時半ではなく 6 時に提供する。前回は早く出しすぎて夕食のピーク前になくなってしまったため。',
    v: [['keg', '（ビールの）樽'], ['rota', '勤務表'], ['dinner rush', '夕食どきの混雑'] ],
    q: [
      { tag: '図表', s: 'Look at the graphic. Who will swap to cellar duty for the first hour on Tuesday?',
        c: ['Priya', 'Marek', 'Feng', 'Yara'],
        a: 3,
        e: '「本日（火曜）グリル担当」が該当。表の火曜グリルは Yara。',
        w: ['貯蔵室担当で、入れ替わる相手側。', '火曜はバー担当。', '火曜はホール担当。', '正解。'] },
      { tag: '詳細', t: ['p4type'], s: 'Why is the swap necessary?',
        c: ['A delivery needs to be stored before it warms up.', 'A staff member called in sick this morning.',
            'The grill station is being repaired by an outside contractor today.', 'A new till is being installed down in the cellar this evening.'],
        a: 0,
        e: '「生樽の配達が遅れており、庭先で温まる前にすぐ貯蔵室に運び込む必要がある」が理由。',
        w: ['正解。', '欠勤者が出たという説明はない。交代は最初の 1 時間だけで、通常の持ち場はその後戻る。', 'グリル台の故障や修理には触れていない。交代の理由は樽の配達である。', '新型に交換されたのはバーのカード決済機で、貯蔵室ではない。しかも機器の交換は交代の理由として挙げられていない。'] },
      { tag: '詳細', t: ['p4type'], s: 'What mistake was made last week?',
        c: ['The new card machine was left unplugged for the entire evening shift.', 'Snacks were put out too early and ran out before the dinner rush.',
            'The wrong type of beer keg was delivered to the tavern by mistake.', 'Someone posted the weekly rota late and left off two shifts.'],
        a: 1,
        e: '「前回は 5 時半に早く出しすぎて夕食のピーク前になくなった」が根拠。',
        w: ['カード決済機は新型に交換されたと述べているだけで、電源が抜けていたという不具合の話は出てこない。', '正解。', '樽については配達が遅れているとだけ述べており、種類の間違いには触れていない。', '勤務表については「明日の割り当ては影響を受けない」と述べているだけで、掲示の遅れも記載漏れも話題になっていない。'] },
    ],
  }),

  /* ── 92–94 ─────────────────────────────────────────── */
  /* 2026-08-25: 利用者判断で模試の図表設問を 9→5 に削減。Part 4 は No.89・No.98 の
     2問を残し、No.92 を通常設問に差し替える。旧 No.92 は設問文が「3–6 hours」の行を
     名指しし、図表の New rate 列がそのまま答えになっていた（音声は "the one-to-
     three-hour and three-to-six-hour bands will both increase" と述べるのみで
     数値を一切言わない＝音声だけでは解けず、図表だけで解けてしまっていた）。
     スクリプト・ja・vocab は変更せず、音声だけで解ける目的（purpose）設問に
     差し替えた。このユニットから図表設問が無くなるため graphic オブジェクトを削除し、
     t を ['graphic', 'p4type'] → ['p4type'] に変更（No.93・No.94 が既定継承で
     'graphic' を保持してしまう不具合の芽を摘む）。talk() ヘルパーは id を no から
     自動生成し、内容を変えた No.92 だけ id を変える手段がないため、このユニットのみ
     ヘルパーを使わず直接記述する（no は 92 のまま、id は新規採番）。No.93・No.94 は
     内容不変のため id を維持。 */
  {
    id: 'v5-p4-92', part: 4, kind: 'set', kindLabel: 'announcement',
    topics: ['p4type'], level: 5,
    script: [
      { role: 'M-Cn', text: 'Thank you all for coming to this quarter\'s tenant forum. The main item today concerns car park charges.' },
      { role: 'M-Cn', text: 'The board has agreed that, from the first of October, the mid-range tariffs — the one-to-three-hour and three-to-six-hour bands — will both increase, while the short-stay rate and the monthly season ticket stay exactly where they are.' },
      { role: 'M-Cn', text: 'I know a rate rise is never welcome, so let me explain where the money goes. The car park\'s drainage system failed twice this winter, and a permanent fix — regrading and relining — is not something we can cover from the existing service charge alone.' },
      { role: 'M-Cn', text: 'For anyone parking under an hour, or anyone on a season ticket, today\'s announcement changes nothing at all.' },
      { role: 'M-Cn', text: 'If you currently pay under the three-to-six-hour band regularly, switching to a season ticket may now work out cheaper — our concierge can run the comparison for your specific pattern if you bring in your last few months of receipts.' },
    ],
    ja: 'テナント向け四半期フォーラムでの駐車場料金についての説明。10 月 1 日から中間帯の料金（1〜3 時間、3〜6 時間）が値上げされる一方、短時間料金と月極の年間券は据え置きと発表。値上げの理由として、今冬に駐車場の排水設備が 2 回故障し、恒久的な修理（再整地と内張り）が既存の管理費だけでは賄えないと説明。1 時間未満の利用者や月極利用者には今回の発表は一切影響しない。3〜6 時間帯を日常的に利用している人は、月極に切り替えた方が安くなる可能性があり、直近数か月の領収書を持参すればコンシェルジュが個別に比較してくれると案内している。',
    vocab: [['tariff', '料金体系'], ['drainage system', '排水設備'], ['concierge', 'コンシェルジュ']],
    questions: [
      { id: 'v5q92r', no: 92, tag: '目的', stem: 'What is the purpose of the talk?',
        choices: ['To announce changes to car park charges.', 'To announce the closure of the car park.',
            'To introduce new car park staff.', 'To request feedback on a road project.'],
        answer: 0,
        exp: '「本日の主な議題は駐車場料金についてです」と切り出し、その後の値上げ内容を説明している。',
        why: ['正解。', '話し手は 10 月からの新料金と月極への切り替えを案内しており、駐車場が引き続き営業する前提で話している。閉鎖には触れていない。', '新スタッフの紹介ではなく、料金改定とその理由の説明。', '道路工事についての意見募集ではない。'],
        topics: ['p4type'] },
      { id: 'v5q93', no: 93, tag: '詳細', stem: 'What is the stated reason for the change?',
        choices: ['Local property taxes have increased significantly this year.', 'Repairs to the drainage system are needed.',
            'The car park is being expanded to add spaces.', 'Staffing costs have risen sharply over the past year.'],
        answer: 1,
        exp: '「排水設備が 2 回故障し、恒久的な修理費用が必要」と説明されている。',
        why: ['税金の話はない。', '正解。', '拡張工事の話も出ていない。', '人件費には触れていない。'],
        topics: ['p4type'] },
      { id: 'v5q94', no: 94, tag: '詳細', stem: 'What does the speaker suggest to frequent 3–6 hour parkers?',
        choices: ['Apply for a rate exemption.', 'Park at a different facility nearby.',
            'Consider switching to a season ticket.', 'Prepay for an entire year at once.'],
        answer: 2,
        exp: '「月極に切り替えた方が安くなる可能性があり、比較してもらえる」と提案している。',
        why: ['免除の申請には触れていない。', '他施設の利用は提案していない。', '正解。', '一括前払いの話も出ていない。'],
        topics: ['p4type'] },
    ],
  },

  /* ── 95–97 地域ニュース ───────────────────────────── */
  talk({
    n: [95, 96, 97], lv: 5, k: 'broadcast',
    s: [
      { role: 'W-Au', text: 'This is Riverside Community Radio. Our top story: the council has approved funding to replace the aging footbridge linking Elder Park to the retail quarter, ending eighteen months of debate.' },
      { role: 'W-Au', text: 'The current bridge, built in 1971, has been restricted to pedestrians only since a structural survey three years ago found it could no longer safely bear cyclists or mobility scooters.' },
      { role: 'W-Au', text: 'Under the approved plan, the new bridge will be wider, will support cyclists and scooters, and will include a covered section for the first time — something residents have asked for since a 2019 petition gathered over two thousand signatures.' },
      { role: 'W-Au', text: 'The council\'s head of infrastructure, Tobias Renner, said cost was not, in the end, the main obstacle. "The real sticking point was keeping the crossing open during construction. We\'ve now agreed a temporary pontoon crossing will be in place throughout, so nobody loses access for the eighteen months of building work."' },
      { role: 'W-Au', text: 'Construction is due to begin in January, with completion expected by the following summer, weather permitting.' },
    ],
    ja: '地域ラジオのトップニュース。市議会がエルダー公園と商業地区を結ぶ老朽化した歩道橋の架け替え予算を承認し、18 か月にわたる議論に決着がついた。現在の橋は 1971 年建設で、3 年前の構造調査で自転車や電動スクーターの荷重に耐えられないと判明して以来、歩行者専用に制限されている。承認された計画では新しい橋は幅が広がり、自転車とスクーターに対応し、初めて屋根付き区間も設けられる。これは 2019 年の請願で 2,000 筆超の署名が集まって以来、住民が求めてきたもの。インフラ担当責任者トビアス・レナー氏は、最終的な障害は費用ではなく、工事中も横断路を確保することだったと説明。仮設の浮き桟橋を工事期間中ずっと設置することで合意し、18 か月の工事中も誰もアクセスを失わないようにしたという。着工は 1 月の予定で、天候次第だが翌年の夏までの完成が見込まれている。',
    v: [['footbridge', '歩道橋'], ['structural survey', '構造調査'], ['pontoon crossing', '浮き桟橋の横断路'] ],
    q: [
      { tag: '詳細', s: 'Why has the current bridge been restricted to pedestrians only?',
        c: ['The council reduced its annual bridge maintenance and repair budget.', 'A previous traffic accident closed it to vehicles permanently.',
            'Nearby construction work has blocked wider access for years.', 'A structural survey found it unsafe for cyclists and scooters.'],
        a: 3,
        e: '「構造調査で自転車やスクーターの荷重に耐えられないと判明したため」と説明されている。',
        w: ['維持・補修の予算を削ったという話は出てこない。歩行者専用になった経緯として挙げられているのは構造調査の結果だけである。', '事故の話はない。', '周辺工事による通行止めではない。', '正解。'] },
      { tag: '詳細', s: 'According to Mr. Renner, what was the main obstacle to the project?',
        c: ['Objections from nearby businesses.', 'The overall cost of the new bridge.',
            'Finding a contractor willing to take the work.', 'Maintaining access during construction.'],
        a: 3,
        e: '「最終的な障害は費用ではなく、工事中の横断路確保だった」と明言している。',
        w: ['近隣店舗の反対には触れていない。', '費用は主要因ではないと否定されている。', '請負業者探しの話はない。', '正解。'] },
      { tag: '推測', s: 'What is implied about the temporary pontoon crossing?',
        c: ['It requires a separate council vote to install.', 'It will only be used in an emergency.',
            'It will remain in place permanently after construction ends.', 'It will ensure the public retains access throughout construction.'],
        a: 3,
        e: '「工事期間中ずっと設置し、誰もアクセスを失わないようにする」とある。',
        w: ['別途採決が必要とは述べていない。', '緊急時限定ではない。', '恒久設置の話はない。', '正解。'] },
    ],
  }),

  /* ── 98–100（図表は1問目のみ）────────────────────── */
  /* 2026-08-25 全面書き直し：`vol4-l2b.js` No.53–55（Kestrel Self Storage）と装置が
     丸ごと重複していた。場面（貸倉庫の見学）・表題（`— Unit Sizes`）・行名
     （Locker/Small/Medium/Large）・状況（1ベッドルームの家具を約2か月）・図表問題の
     正解（Medium）・3問目の命題（短期だから定額プランより単位契約が得）が一致しており、
     「前の巻を解いた記憶から答えが手に入るか」に対して3問中2問が YES だった。
     加えて、行名 Locker<Small<Medium<Large 自体が大小の序列を持ち、音声が
     「小さすぎず大きすぎない中間」としか言わなくても選択肢名から Medium を当てられた
     （面積の数値だけ本文から外した前回の是正は、この選択肢側の序数性を残したため未完
     だった）。
     今回、業種を「引っ越し向け貸倉庫」から「オフィスの書類保管（Millbank Document
     Archive）」へ変更し、行名を Bay 2 / Bay 4 / Bay 11 / Bay 19 という非序数の番号
     （表内の並びも数値順にしていない）にした。図表問題の決め手も「面積の大小」から
     「1階であること」「空調管理されていること」という2つの独立した条件の組み合わせに
     変更し、正解の Bay 2 は Floor・Climate control のどちらの列でも単独の値ではなく
     （Ground は Bay 4 と共有、Yes は Bay 11 と共有）、Monthly rate も £36 で Bay 19 と
     同額にして最大・最小・唯一値のいずれにもならないようにした（当てずっぽうの
     落ち先は本文末の検証を参照）。
     3巡目監査（2026-08-25、レビュー役差し戻し）：上記の金額調整（Bay11=£34/Bay4=£30/
     Bay19=£44/Bay2=£38）は「空調ありの2行のうち高い方」にも「1階の2行のうち高い方」にも
     Bay 2 が一致してしまい、どちらか一方の条件しか聞き取れなくても「高い方を選ぶ」で
     50%の確率で正解に達する対称な経路が新たに開いていた。いずれの設問（No.98＝どのベイを
     勧めるか／No.99＝持参物／No.100＝防火扉）も金額を問うていないため、Monthly rate 列を
     丸ごと削除した。残る列は Bay／Floor／Climate control の3列のみで、Floor は Ground×2・
     Upper×2、Climate control は Yes×2・No×2 と、値がちょうど2回ずつ出る種別×種別の 2×2 に
     なる。極端値（最大・最小）も列内の唯一値も存在しなくなり、当てずっぽうの的中率は
     厳密に25%に戻る（検証は報告に記載）。script・ja・vocab のいずれも金額に一切言及して
     いないため、列の削除による破綻はない。exp・why も金額に触れていないため変更していない。
     表そのものを変更したため No.98 の id のみ新規採番する（no は 98 のまま、answer は 0 の
     まま変更なし）。No.99・No.100 は内容・id とも変更していない。
     3問目（No.100）の命題も「支払い方法の損得」から
     「1階のベイは施錠されておりスタッフの解錠が必要」という別の論点に変更した。
     No.99（写真付き身分証の持参）は場面を変えても契約時の要件として自然なため流用し、
     監査で指摘された不自然な英語 `Identification with a photo on it.` を
     `A form of photo identification.` に修正した。
     talk() ヘルパーは id を no から自動生成し、この設問だけ id を変える手段がない
     ため、このユニットだけヘルパーを使わず直接記述する。3問とも中身を書き換えたため
     3問とも id を新規採番した（no は 98/99/100 のまま）。answer の index は
     いずれも変更前と同じ（98:0 / 99:3 / 100:0）。
     再追記（2026-08-25、レビュー差し戻し対応）：
     (1) No.100 の stem「What does the speaker say about the ground-floor bays?」を
     先読みすると、表の Floor 列で Ground なのは Bay 4 と Bay 2 の2行だけなので、
     No.98 が音声なしで 25%→50% に絞られてしまうと指摘された。stem を「What does
     the speaker say about the fire doors?」に差し替え、階を一切名指ししない形にした
     （選択肢・answer は変更していない。表に fire door の列は無いため図表だけでも
     解けない）。音声 "the ground-floor bays sit behind our fire doors, so someone
     on staff has to let you in" に対応する。誤答3つ（点検頻度・常時開放・今年設置）は
     いずれも音声に出てこず、うち「常時開放」は「スタッフが解錠する必要がある」＝
     常時は施錠されているという記述と直接矛盾する。stem を変えたため id を新規採番
     する（v5q100r3）。
     (2) No.98 の表について、Bay 2（正解）が「1階かつ空調あり」に加えて「空調ありの
     2行のうち安い方」（Bay 11 £42 → Bay 2 £36）にもなっており、当てずっぽうの
     的中率が 25%→35〜40% に上がると指摘された。Monthly rate を Bay 11=£34 /
     Bay 4=£30 / Bay 19=£44 / Bay 2=£38 に組み替えた。空調ありの2行では Bay 2 が
     むしろ高い方になり、1階の2行でも Bay 2 が高い方になるため、「安い方を選ぶ」
     という自然な誘導はどちらの軸でも正解に一致しない。最大値（£44）は誤答の
     Bay 19 に、最小値（£30）は誤答の Bay 4 に置き、Bay 2 の £38 は最大でも最小でも
     なく、4つの値はすべて異なる（当てずっぽうの落ち先の全体は本文末の検証を参照）。
     why・exp は金額に言及していないため変更していない。
     (3) 音声中の「around fifteen boxes」が `vol4-l2b.js` の書き直し前バージョン
     （No.53–55 の旧稿）で使っていた数と同じ数字で、書き直しの出自が見える痕跡
     だったため「around twenty boxes」に変更した（ja も合わせて修正。この数字は
     どの設問の決め手にもなっていないため、答えへの影響はない）。 */
  /* 2026-08-25 是正（監査差し戻し対応、2件）。
     (1) 「Climate control: Yes / No」は空調ありのほうが明らかに有利な、優劣のある
     対だった。「Floor: Ground / Upper」も、重い書類箱を運ぶこの場面では Ground が
     有利であり、正解の Bay 2 は2軸とも有利な行になっていた（CLAUDE.md「2軸とも
     最良の行を作らないこと」に抵触）。Climate control 列を Access（Roller shutter /
     Double doors）に差し替えた。どちらが一般的に優れているとも言えない中立な対で、
     今回はパレット台車で搬入するため、シャッター式には台車の車輪が引っかかる
     立ち上がりのレールがあり使えず、観音開きが必要という状況依存の理由にした
     （書類の防湿という一般的に優劣のある理由を、台車の物理的な制約という中立な
     理由に置き換えた）。Floor 列は No.100（防火扉の説明が1階のベイに限られる）の
     成立に必要なため残した。新しい Access 列は Roller shutter・Double doors が
     2行ずつに均等に分かれ、最大・最小・唯一値は生じない。音声の該当箇所を
     「書類が湿気てはいけない」から「パレット台車で搬入する」に、要件を
     「climate-controlled」から「double-door」に書き換えた。
     (2) 正解の行の番号が Bay 2（4つの行番号 11/4/19/2 のうち最小）になっており、
     vol2-l2b.js No.65（Room 3 が最小）・vol4-l2b.js No.53（Unit 3 が最小）と合わせて
     3表とも「正解＝最小番号」という指紋が揃っていた。属性（Floor・Access の値）は
     変えず、正解の行の番号だけを Bay 2 → Bay 15 に振り直した。新しい番号
     11/4/19/15 のうち最小は 4（誤答の行）、最大は 19（誤答の行）で、15 はどちらにも
     ならない中間の値になる。choices の並び順（Bay 15, Bay 4, Bay 11, Bay 19）も
     昇順・降順のいずれでもない（15, 4, 11, 19。旧版の Bay 2, Bay 4, Bay 11, Bay 19
     は 2 < 4 < 11 < 19 の完全な昇順だったため、この点も是正した）。音声はベイ番号に
     一切言及していないため変更していない。
     No.98 は表・音声・choices・exp・why・vocab を実質変更したため id を新規採番する
     （v5q98r4 → v5q98r5、no は 98 のまま、answer は 0 のまま）。No.99・No.100 は
     金額や climate control に触れておらず、防火扉の説明も Floor 列に依存したままの
     ため内容・id とも変更していない。 */
  /* 2026-08-25 是正（さらなる差し戻し対応）：上記の是正後も、`Floor: Ground / Upper`
     自体が優劣軸のままだった。重い書類箱を運ぶ場面では素朴に「1階のほうが楽」と読め、
     正解もその Ground 側（Bay 15）だったため、音声を聞かなくても Ground の2行
     （Bay 4・Bay 15）に絞り込める（50%）。さらに No.100 の stem "the fire doors" の
     "doors" が表の Access 列の値 "Double doors" と語として共鳴し、「doors が論点らしい
     → Double doors の行」という先読みだけの絞り込みと合成すると、Ground かつ
     Double doors の行は Bay 15 だけになり、音声を一切聞かずに 100% 的中する経路が
     開いていた。
     (i) Floor の傾きを誤答側に反転させた。音声の決め手を「重いから1階」ではなく
     「夕方以降にも出入りしたい → 1階のベイは防火扉の奥でスタッフの解錠が必要になり
     時間帯が縛られる → 暗証番号式で終日利用できる上階のベイにする」という理由に
     書き換えた。あわせて「トロリーごと載る大きさのエレベーターがあるので、箱の重さは
     どちらの階を選んでも問題にならない」という一文を足し、「重い荷物は当然1階」という
     世界知識そのものを無効化した。これにより、素朴な「1階のほうが楽」という選択は
     誤答（Bay 4・Bay 15）に落ちる。正解は Upper かつ Double doors の Bay 11 になった。
     No.100（1階のベイは防火扉の奥で係員の解錠が必要）という一般的な事実は、顧客が
     実際にどのベイを借りるかとは独立して成立するため、そのまま使える。
     (ii) No.100 の stem を "Why must some visits be made during staffed hours?"
     に差し替え、"door" の語を stem からも4択からも完全に排除した。あわせて、正解
     (旧 "Staff must open them for customers.") だけ主語が Staff で誤答3つが全部
     They という回帰（先読みで正解が形により浮く）も直すため、4択とも
     "Some bays ..." で始まる統一した主語・8語の構造に揃えた。
     Access・Floor の表自体（Bay 11/4/19/15 の行と値）は変更していない。値は
     Floor が Ground×2・Upper×2、Access が Double doors×2・Roller shutter×2 の
     2×2 のまま、極端値・唯一値は無い。会話はベイ番号に一切言及していない。
     No.98 は音声・exp・why・answer を実質的に変更したため id を新規採番する
     （v5q98r5 → v5q98r6、no は 98 のまま、choices の並び順は変更していない）。
     No.100 は stem・choices を全面的に書き換えたため id を新規採番する
     （v5q100r3 → v5q100r4、no は 100 のまま、answer の index は 0 のまま）。
     No.99（v5q99r3）は内容・id とも変更していない。 */
  {
    id: 'v5-p4-98', part: 4, kind: 'set', kindLabel: 'telephone message',
    topics: ['graphic', 'p4type'], level: 5,
    script: [
      { role: 'W-Br', text: 'Hi, this is Millbank Document Archive, returning your call about storing some office files while your move finishes up.' },
      { role: 'W-Br', text: 'You mentioned you\'d like to be able to drop things off or collect them some evenings, after the office closes — that points you to one of our upper bays, since those work on a self-service keypad rather than needing one of us there to let you in. There\'s a lift up to that floor big enough for a loaded trolley, so the weight of the boxes isn\'t an issue either way.' },
      { role: 'W-Br', text: 'You also mentioned around twenty boxes of closed client files, with a few of the lever-arch ones quite heavy, so you\'ll be bringing everything in on a pallet trolley — that means it also needs to be one of our double-door bays; the roller-shutter ones have a raised threshold rail the wheels can\'t get over.' },
      { role: 'W-Br', text: 'The bay you\'d want is on the upper floor with double doors, and there\'s one free from Monday.' },
      { role: 'W-Br', text: 'One thing to flag: unlike the upper bays, the ground-floor ones sit behind our fire doors, so someone on staff has to let you in — that\'s why those are limited to our staffed hours, eight until six. Yours won\'t be.' },
      { role: 'W-Br', text: 'Give me a call to confirm, and bring a form of photo identification when you come in to sign the agreement — we can\'t set up the bay without it.' },
    ],
    graphic: {
      t: 'table', title: 'Millbank Document Archive — Storage Bays',
      head: ['Bay', 'Floor', 'Access'],
      rows: [
        ['Bay 11', 'Upper', 'Double doors'],
        ['Bay 4', 'Ground', 'Roller shutter'],
        ['Bay 19', 'Upper', 'Roller shutter'],
        ['Bay 15', 'Ground', 'Double doors'],
      ],
    },
    ja: 'ミルバンク・ドキュメント・アーカイブから、オフィス移転が済むまで書類を預ける件についての折り返しの電話。顧客は夕方、閉店後にも荷物の出し入れをしたいと伝えており、それには暗証番号式キーパッドで終日利用できる上階のベイが向いていると案内する。上階へは台車ごと載せられる大きさのエレベーターがあるため、箱の重さはどちらの階を選んでも問題にならないという。また、処理済み案件のファイルがおよそ20箱あり、そのうちレバーアーチ式のファイルが数箱かなり重いためパレット台車で運び込むとのことなので、シャッター式ではなく観音開きの搬入口があるベイである必要があるとも説明する（シャッター式は台車の車輪が引っかかる立ち上がりのレールがあるため）。この2条件（上階かつ観音開きの搬入口）を満たすベイが月曜から利用可能だと案内する。あわせて、1階のベイは防火扉の奥にあるためスタッフが解錠する必要があり、そのため利用できるのはスタッフが常駐する時間帯（8時から18時まで）に限られるが、顧客が契約する上階のベイにはその制約がないと伝える。最後に、確認の電話を折り返すよう依頼し、来店して契約書に署名する際は写真付き身分証明書を持参するよう求める。それがないとベイの契約手続きができないため。',
    vocab: [['lever-arch file', 'レバーアーチ式ファイル（バインダー）'], ['pallet trolley', 'パレット台車'], ['roller shutter', 'シャッター（巻き上げ式の扉）'], ['threshold rail', '（床の）立ち上がりレール'], ['keypad', '暗証番号式の錠']],
    questions: [
      { id: 'v5q98r6', no: 98, tag: '図表', stem: 'Look at the graphic. Which bay does the speaker recommend?',
        choices: ['Bay 15', 'Bay 4', 'Bay 11', 'Bay 19'],
        answer: 2,
        exp: '来訪者は夕方以降にも出入りしたいと述べており、暗証番号式で終日利用できる上階のベイが必要になる（1階のベイは防火扉の奥にあり、スタッフの解錠が必要で、スタッフの常駐時間しか利用できないため）。また、荷物はパレット台車で運び込むため、シャッター式ではなく観音開きの搬入口が必要である（シャッター式には台車の車輪が引っかかる立ち上がりのレールがあるため）。図表でこの2条件（上階・観音開き）をともに満たすのは Bay 11 のみ。',
        why: ['観音開きの搬入口で台車の条件は満たすが、1階のため防火扉の奥にあり、スタッフの常駐時間しか利用できず、夕方以降に出入りしたいという条件を満たさない。', '1階でスタッフの常駐時間に限られるうえ、搬入口もシャッター式で台車が使えず、どちらの条件も満たさない。', '正解。', '上階で暗証番号式のため夕方以降も利用できるが、搬入口がシャッター式で台車の車輪が引っかかり使えない。'],
        topics: ['graphic', 'p4type'] },
      { id: 'v5q99r3', no: 99, tag: '次の行動', stem: 'What does the speaker ask the listener to bring?',
        choices: ['Cash for the first month\'s rent.', 'Confirmation of the drop-off date.', 'A cheque for the deposit.', 'A form of photo identification.'],
        answer: 3,
        exp: '「契約書に署名しに来る際は写真付き身分証明書を持参してほしい。それがないと契約手続きができない」と述べている。',
        why: ['来店時に持参するよう求められたのは写真付き身分証明書のみで、初月分の家賃を現金で持参するようにとは述べていない。', '搬入日についての確認書の持参は求めていない。ベイの利用開始日はすでに担当者の側から「月曜から利用可能」と伝えられている。', '預け金の小切手にも触れていない。', '正解。'],
        topics: ['p4type'] },
      { id: 'v5q100r4', no: 100, tag: '詳細', stem: 'Why must some visits be made during staffed hours?',
        choices: ['Some bays can only be opened by staff.', 'Some bays are checked by management every month.', 'Some bays stay open to visitors every evening.', 'Some bays were newly built earlier this year.'],
        answer: 0,
        exp: '1階のベイは防火扉の奥にあり、スタッフでなければ解錠できないため、そうしたベイへの来訪はスタッフが常駐する時間帯（8時から18時）に限られる、と説明されている。顧客が契約する上階のベイは暗証番号式のため、この制約を受けない。',
        why: ['正解。', '点検の頻度には触れていない。', '「夕方も開いている」という説明はなく、むしろ逆に、一部のベイはスタッフの解錠が必要なため夕方は使えないという内容である。', '設置・完成時期には触れていない。'],
        topics: ['p4type'] },
    ],
  },
];
