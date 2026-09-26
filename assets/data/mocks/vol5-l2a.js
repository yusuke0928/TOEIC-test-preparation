/* =============================================================
   予想模試 Vol.5 — Part 3 前半（No.32–52）
   総仕上げ回。
   ============================================================= */

const set = (o) => ({
  id: `v5-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: `v5q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2A = [

  /* ── 32–34 ─────────────────────────────────────────── */
  set({
    n: [32, 33, 34], lv: 4,
    s: [
      { role: 'M-Br', text: 'Priya, the stationery order that arrived this morning — half of it isn\'t what we ordered.' },
      { role: 'W-Am', text: 'Which half?' },
      { role: 'M-Br', text: 'We asked for the recycled paper, letter size. They sent us the glossy stock instead, and it\'s the wrong size too — it\'s ledger.' },
      { role: 'W-Am', text: 'Did you check the packing slip against the order confirmation?' },
      { role: 'M-Br', text: 'I did. The slip matches what arrived, not what we asked for. So the mistake happened on their end, at the warehouse.' },
      { role: 'W-Am', text: 'Then we should get a full replacement, not a partial credit. Can you photograph the delivery before we send anything back?' },
      { role: 'M-Br', text: 'Already done. I\'ll e-mail the supplier now and copy you.' },
      { role: 'W-Am', text: 'Good. And ask for expedited shipping on the replacement — we have the client binders due Friday.' },
    ],
    ja: '男性が、届いた文房具の注文が発注内容と違うと報告する。再生紙・レターサイズを頼んだのに光沢紙のレジャーサイズが届いた。納品書は届いた品と一致しており、注文確認とは一致しないため、誤りは業者の倉庫側で起きたと判明。女性は一部返金ではなく全量交換を求め、返送前に写真を撮るよう指示。男性はすでに撮影済みで業者にメールすると答える。女性は交換分の発送を急ぐよう頼むことも求めた。金曜締切の顧客用バインダーがあるため。',
    v: [['packing slip', '納品書'], ['expedited shipping', '速達発送'], ['glossy', '光沢のある']],
    q: [
      { tag: '概要', s: 'What problem does the man describe?',
        c: ['The delivery arrived a week late.', 'The delivery does not match what was ordered.',
            'The supplier sent an incorrect invoice.', 'Part of the order was never shipped.'],
        a: 1,
        e: '紙の種類とサイズの両方が発注内容と異なっていたと述べている。',
        w: ['遅延の話はない。', '正解。', '請求書の誤りではない。', '届いてはいるが内容が違う。'] },
      { tag: '詳細', s: 'What does the man confirm by checking the packing slip?',
        c: ['That their office placed the order twice.', 'That the invoice amount was correct.',
            'That someone else had already signed for the delivery.', 'That the error occurred at the supplier\'s warehouse.'],
        a: 3,
        e: '「納品書は届いた品と一致し、注文内容とは一致しない」＝ミスは業者側で起きたと確認できる。',
        w: ['二重発注ではない。', '金額の話は出ていない。', '受領者には触れていない。', '正解。'] },
      { tag: '次の行動', s: 'What does the woman ask the man to do?',
        c: ['Cancel the order entirely.', 'Request expedited shipping for the replacement.',
            'Visit the supplier\'s warehouse in person.', 'Ask for a partial refund instead.'],
        a: 1,
        e: '「交換分は発送を急いでもらって」と依頼している。金曜の締切があるため。',
        w: ['キャンセルではなく交換を求めている。', '正解。', '訪問の話はない。', '一部返金ではなく全量交換を選んだ。'] },
    ],
  }),

  /* ── 35–37 ─────────────────────────────────────────── */
  set({
    n: [35, 36, 37], lv: 4,
    s: [
      { role: 'W-Au', text: 'Mr. Ashworth, I\'m calling about your reservation for Saturday at eight. I\'m afraid we\'ve had to move a private function into the main dining room that evening.' },
      { role: 'M-Br', text: 'That\'s the room I booked, isn\'t it?' },
      { role: 'W-Au', text: 'It is, and I apologise — the private booking was confirmed after yours, which shouldn\'t have happened. I can offer you the same time in our smaller room upstairs, or seven o\'clock in the main room before the private party arrives.' },
      { role: 'M-Br', text: 'How many can the upstairs room seat? We\'re a party of ten.' },
      { role: 'W-Au', text: 'Ten is tight up there — it comfortably seats eight.' },
      { role: 'M-Br', text: 'Then let\'s do seven o\'clock downstairs. Will we need to be out by a certain time?' },
      { role: 'W-Au', text: 'The private party arrives at nine-thirty, so as long as you\'re finishing up by then, there\'s no rush.' },
    ],
    ja: 'レストランの担当者が、土曜 8 時の予約客に電話し、その夜メインダイニングに私的な催しが入ってしまったと伝える。私的予約が客の予約より後に確定していたのは店側の手違いと認め、上階の小部屋を同じ時間で使うか、私的催事の前に 7 時からメインダイニングを使うかを提案。上階は 10 名には狭く 8 名までとわかり、客は 7 時のメインダイニングを選ぶ。私的催事は 9 時半到着なので、それまでに終えれば急ぐ必要はないと案内される。',
    v: [['private function', '私的な催し', ], ['comfortably seat', '無理なく〜人座れる'], ['finish up', '切り上げる']],
    q: [
      { tag: '概要', s: 'Why is the woman calling?',
        c: ['To announce new hours.', 'To confirm a menu choice for Saturday.',
            'To request a deposit for a large party.', 'To explain a scheduling conflict with a reservation.'],
        a: 3,
        e: '土曜夜の予約に私的催事が重なってしまったという日程の衝突を説明している。',
        w: ['営業時間の変更については会話のどこにも出てこない。', 'メニューの話はない。', '保証金の話は出ていない。', '正解。'] },
      { tag: '詳細', s: 'What does the woman say about the private booking?',
        c: ['It was cancelled at the last minute.', 'It was confirmed after the customer\'s reservation.',
            'It requires the entire building.', 'It was made by a former employee.'],
        a: 1,
        e: '「私的予約は客の予約より後に確定したもので、本来あってはならないこと」と認めている。',
        w: ['中止ではなく実施される。', '正解。', '建物全体の話はない。', '元従業員には触れていない。'] },
      { tag: '次の行動', s: 'What does the customer decide?',
        c: ['To use the upstairs room instead.', 'To move the reservation to the following week.',
            'To reduce the size of his party.', 'To take the seven o\'clock slot in the main dining room.'],
        a: 3,
        e: '上階は 10 名には狭いため、7 時からのメインダイニングを選んでいる。',
        w: ['上階は狭いため選ばなかった。', '週の変更は述べていない。', '人数を減らす話はない。', '正解。'] },
    ],
  }),

  /* ── 38–40（3名）─────────────────────────────────── */
  set({
    n: [38, 39, 40], lv: 5, k: 'conversation with three speakers', t: ['p3int'],
    s: [
      { role: 'W-Am', text: 'Let\'s start with the onboarding redesign. Diego, where are we against the original date?' },
      { role: 'M-Br', text: 'Two weeks behind. The API we\'re calling from the partner bank changed its response format without much notice, and we had to rebuild the parsing layer.' },
      { role: 'W-Au', text: 'Does that affect the design at all, or is it purely backend?' },
      { role: 'M-Br', text: 'Purely backend. The screens you built are untouched.' },
      { role: 'W-Am', text: 'Good. Freya, is there anything on your side that could still slip?' },
      { role: 'W-Au', text: 'One thing — we\'re waiting on legal to approve the wording on the consent screen. That\'s been sitting for four days.' },
      { role: 'W-Am', text: 'I\'ll chase that today. Diego, once the parsing layer is done, how long to full testing?' },
      { role: 'M-Br', text: 'Three days, assuming nothing else changes on their end.' },
      { role: 'W-Am', text: 'Then let\'s aim to ship a week from Friday, and I\'ll flag to the partner bank that any further API changes need two weeks\' notice going forward.' },
    ],
    ja: 'オンボーディング画面の刷新について進捗確認。ディエゴは提携銀行の API 仕様が予告なく変わり、解析処理を作り直したため 2 週間遅れていると報告するが、影響はバックエンドのみでデザイン画面は無傷と説明。フレヤは同意画面の文言について法務の承認待ちが 4 日続いていると指摘。ナレディはその件を本日中に催促すると答え、解析処理完了後のテスト期間（3 日）を確認したうえで、再来週金曜のリリースを目指すと結論。今後は API 変更に 2 週間前の予告を求めると提携銀行に伝えるとも述べた。',
    v: [['parsing layer', '解析処理層'], ['consent screen', '同意画面'], ['chase', '（案件を）催促する']],
    q: [
      { tag: '詳細', s: 'Why is the project behind schedule?',
        c: ['A key engineer left the team.', 'A partner\'s API changed unexpectedly.',
            'The design was rejected by legal.', 'A server migration took longer than planned.'],
        a: 1,
        e: '提携銀行の API 仕様が予告なく変わり、解析処理の作り直しが必要になったと述べている。',
        w: ['離職の話はない。', '正解。', 'デザイン自体は却下されていない。', 'サーバー移行には触れていない。'] },
      { tag: '意図', t: ['p3int'], s: 'What does Freya imply when she says, "That\'s been sitting for four days"?',
        c: ['The legal approval has been held up and still needs attention.', 'The design is now finished well ahead of schedule.',
            'The consent screen was approved by legal yesterday and filed today.', 'The wording was rejected by legal after review and requires changes.'],
        a: 0,
        e: '法務の承認が 4 日間止まったままだと述べており、対応を促す趣旨の発言。',
        w: ['正解。', 'デザイン画面は無傷だと述べているだけで、前倒しで完成したとは述べていない。', 'まだ承認されておらず、4 日間止まったままだと述べている。また、今日提出したという話も本文にはない。', '却下されたとは述べておらず、承認待ちの状態だと述べている。修正が必要だという話も本文にはない。'] },
      { tag: '次の行動', s: 'What will Naledi do today?',
        c: ['Approve the consent wording without waiting for legal.', 'Tell Diego not to run full testing.',
            'Follow up with legal about the consent wording.', 'Delay the release by two full weeks instead.'],
        a: 2,
        e: '「今日中に催促する」と述べている。',
        w: ['法務の承認を待たずに自分で文言を承認するとは述べていない。ナレディの「今日中に催促する」は法務に対応を促すという意味で、承認の権限は法務側にある。', 'ディエゴは "Three days, assuming nothing else changes on their end." と、解析層が終われば全体テストに 3 日かかると答え、ナレディはその線で出荷日を決めている。全体テストをやめるよう伝えるという内容は、この記述と正面から矛盾する。', '正解。', '延期ではなく再来週金曜の出荷を目標にしている。'] },
    ],
  }),

  /* ── 41–43 ─────────────────────────────────────────── */
  set({
    n: [41, 42, 43], lv: 4,
    s: [
      { role: 'W-Am', text: 'Hi, I\'m here about a charge on my account. I froze my membership in March for an injury, but I was still charged in April.' },
      { role: 'M-Au', text: 'Let me pull that up. I see the freeze request — it was submitted on the eighteenth, but our system only applies freezes from the start of the following billing cycle.' },
      { role: 'W-Am', text: 'Nobody told me that when I submitted it.' },
      { role: 'M-Au', text: 'You\'re right, and that\'s on us — it should be explained on the form. I can backdate the freeze and refund April in full.' },
      { role: 'W-Am', text: 'Thank you. While I have you, when does the freeze end?' },
      { role: 'M-Au', text: 'Freezes run for a maximum of eight weeks. Yours would end in mid-June unless you tell us to reactivate sooner.' },
      { role: 'W-Am', text: 'Mid-June works. Can you send me a confirmation e-mail?' },
      { role: 'M-Au', text: 'I\'ll send it before you leave today.' },
    ],
    ja: '女性が、3 月にけがで休会を申請したのに 4 月も請求されたと会員フロントに問い合わせる。担当者は休会申請が 18 日提出だったが、システム上は翌請求サイクルの開始からしか適用されないと説明。案内不足を認め、休会日を遡って適用し、4 月分を全額返金すると対応。休会は最大 8 週間で、6 月中旬に終了予定と案内。女性は確認メールの送付を依頼し、担当者は退店前に送ると約束した。',
    v: [['freeze (membership)', '（会員資格を）休止する'], ['billing cycle', '請求サイクル'], ['backdate', '（日付を）遡らせる']],
    q: [
      { tag: '詳細', s: 'Why was the woman charged in April?',
        c: ['The gym does not offer freezes for injuries.', 'Her injury was not documented.',
            'She cancelled the freeze request herself.', 'Freezes only take effect from the start of the next billing cycle.'],
        a: 3,
        e: '休会申請は翌請求サイクルの開始からしか適用されないため、3 月の申請が 4 月には反映されていなかった。',
        w: ['けがによる休会は提供されている。', 'けがの証明には触れていない。', '本人が取り消した事実はない。', '正解。'] },
      { tag: '詳細', s: 'What does the man acknowledge?',
        c: ['The freeze period is too short for her needs.', 'The policy should have been explained on the form.',
            'The refund will take several more weeks.', 'The system was down for most of that day.'],
        a: 1,
        e: '「案内不足は自分たちの落ち度」と認めている。',
        w: ['期間の長さへの不満については会話のどこにも出てこない。休会は最大 8 週間と案内されているだけである。', '正解。', '返金は「全額を返金する」と即座に述べており、数週間かかるとは述べていない。', 'システム障害については会話のどこにも出てこない。'] },
      { tag: '次の行動', s: 'What will the man do before the woman leaves?',
        c: ['Schedule a follow-up appointment for the following week.', 'Print a new membership card.',
            'Send a confirmation e-mail.', 'Process a partial refund only.'],
        a: 2,
        e: '「今日中に確認メールを送る」と述べている。',
        w: ['予約の話はない。翌週の面談も設定されていない。今日中に確認メールを送ると述べているだけである。', '会員証の再発行は述べていない。', '正解。', '全額返金すると述べている。'] },
    ],
  }),

  /* ── 44–46（図表は1問目のみ）────────────────────────── */
  /* 本番仕様（1セット1問の図表設問）に合わせ、No.45 を図表設問から通常設問へ差し替えた
     （2026-08-25）。旧 No.45（id: v5q45r）は「明日のルートの配達枠」を問う図表設問だったが、
     1セット2問の図表構成自体を解消するため丸ごと書き直した。新設問は音声のみで解け、
     図表（今日のルート）にも No.46（渋滞への懸念）にも触れない——男性が女性にこの配送を
     頼んだ理由（同僚 Priya の病欠）を問う。id は新規採番（v5q45r2）。
     set() は id を no から自動生成し、この設問だけ id を変える手段がないため、
     このユニットだけヘルパーを使わず直接記述する。
     追記（2026-08-25、監査で発見の破綻を是正）：No.44 の選択肢が
     'City centre (restaurants)' のように図表の行名をそのまま括弧書きで含んでいたため、
     音声の「hotels aren't on it, cafés aren't on it — restaurants only」と選択肢の
     括弧内の語を単純一致させるだけで、図表を引かずに正解できた。選択肢からは括弧書きを外し
     ルート名のみにし、業態（cafés/hotels/restaurants/supermarkets）は図表の独立列
     （Serves）に移した。これで「業態は図表でしか分からず、どの業態のルートかは音声でしか
     分からない」形になる。
     あわせて、音声中の「call the city-centre accounts directly」が選択肢 'City centre' と
     そのまま一致し、業態・曜日の推論を経ずに語だけで正解できてしまう経路も見つけたため、
     'restaurant accounts' に変更した（ja も合わせて修正）。この1文以外の音声本文は
     変更していない。中身を変えたため id を新規採番する（no は 44 のまま）。
     再追記（2026-08-25、Vol.5 図表数の是正に伴う監査）：Days 列で City centre だけが
     'Daily'（唯一値かつ最大）だったため、Days を見るだけで Serves 列を読まずに正解できた。
     North の Days も 'Mon, Wed, Fri' → 'Daily' に変更し、Daily の行を2つ（North, City centre）
     にしたことで、Days だけでは絞れず Serves 列（Restaurants）を読んで初めて City centre に
     決まる形にした。音声（North の曜日には触れていない）とは矛盾しない。
     あわせて、ルート名 'City centre' と音声の 'restaurants only' の間に「レストランは
     都心にある」という現実世界の連想が残っていたため、'Eastside'（方角由来の中立な名前）に
     改称した。これで正解はレストラン云々の連想ではなく Serves 列の読み取りでしか出ない。
     この2点により choices・exp・why・id（v5q44r → v5q44r2）を更新する。
     あわせて No.46 の topics が ['graphic'] のままだった（この設問は図表を使わない詳細設問）
     ため ['p3detail'] に修正した。stem・choices・answer は変えていないため id は維持。 */
  {
    id: 'v5-p3-44', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    script: [
      { role: 'M-Cn', text: 'Thanks for coming in early. Priya\'s off sick, so I need you to cover her route today.' },
      { role: 'W-Br', text: 'Which one was she on?' },
      { role: 'M-Cn', text: 'The one that runs every day of the week — hotels aren\'t on it, cafés aren\'t on it — restaurants only.' },
      { role: 'W-Br', text: 'Got it. What time should I be loaded and out?' },
      { role: 'M-Cn', text: 'Seven at the latest, so you\'re delivering by half seven and finished before eight thirty.' },
      { role: 'W-Br', text: 'That doesn\'t leave much room if there\'s traffic.' },
      { role: 'M-Cn', text: 'There usually isn\'t at that hour. If you do hit trouble, call the restaurant accounts directly — their numbers are on the manifest.' },
      { role: 'W-Br', text: 'Will do. Is there a route I should know for tomorrow as well?' },
      { role: 'M-Cn', text: 'Tomorrow you\'re back on your usual, the supermarkets — that\'s only two days a week, so it should feel light after today.' },
    ],
    graphic: {
      t: 'table', title: 'Millbrook Bakery — Wholesale Delivery Routes',
      head: ['Route', 'Serves', 'Days', 'Delivery window'],
      rows: [
        ['North', 'Cafés', 'Daily', '06:00–07:30'],
        ['South', 'Hotels', 'Tue, Thu', '05:30–07:00'],
        ['Eastside', 'Restaurants', 'Daily', '07:00–08:30'],
        ['Out-of-town', 'Supermarkets', 'Mon, Thu', '08:00–10:00'],
      ],
    },
    ja: '配送担当が、体調不良の同僚に代わって女性ドライバーに担当ルートを頼む。対象は「毎日運行、ホテルもカフェも含まず、レストランのみ」のルート。7 時までに積み込みを終え、7 時半までに配達、8 時半までに完了する必要があると説明。渋滞への懸念に対し、その時間帯は通常混まないと述べつつ、問題があれば配送先のレストラン各店に直接連絡するよう伝える。翌日は通常担当のスーパー向けルート（週 2 日）に戻るため、今日より楽になるだろうと付け加える。',
    vocab: [['manifest', '積荷目録'], ['off sick', '病気で欠勤している'], ['loaded and out', '積み込みを終えて出発する']],
    questions: [
      { id: 'v5q44r2', no: 44, tag: '図表', stem: 'Look at the graphic. Which route will the driver cover today?',
        choices: ['Eastside', 'South', 'North', 'Out-of-town'],
        answer: 0,
        exp: '音声は「毎日運行、ホテルもカフェも含まれず、レストランのみ」と業態で説明している。図表で Days が Daily なのは North（Cafés）と Eastside（Restaurants）の2行あり、Days だけでは絞れない。Serves 列で Restaurants に対応するのは Eastside だけなので、これが正解になる。',
        why: ['正解。', '図表では Hotels 向けで週 2 日（Tue, Thu）。音声は「ホテルは含まれない」と述べている。', '図表では Cafés 向け。Days は Eastside と同じ Daily だが、音声は「カフェは含まれない」と明言しているため除外される。', '図表では Supermarkets 向けで週 2 日（Mon, Thu）。音声は翌日担当分として別に触れており、レストラン向けではない。'],
        topics: ['graphic'] },
      { id: 'v5q45r2', no: 45, tag: '詳細', stem: 'Why is the woman covering this route today?',
        choices: ['A coworker swapped shifts with her.', 'She is training for a new position.', 'She requested extra weekend hours.', 'Her colleague is unwell today.'],
        answer: 3,
        exp: '冒頭で「プリヤが病欠のため、代わりに今日のルートを担当してほしい」と依頼している。',
        why: ['男性が挙げた理由は「プリヤが病欠だから代わってほしい」ということだけで、同僚がこの女性とシフトを交換した事実は会話のどこにも出てこない。女性の通常担当（スーパー向けルート）は翌日そのまま戻る。', '女性は翌日には自分の通常ルートに戻ると述べられており、新しい職務のための研修としては扱われていない。', '今日の担当を頼んだのは男性の側で、女性が自分から追加勤務を申し出た場面はない。男性が挙げた理由は「プリヤの病欠」だけで、勤務時間の追加にも週末にも一切触れていない。', '正解。'],
        topics: ['p3detail'] },
      { id: 'v5q46', no: 46, tag: '詳細', stem: 'What does the driver say about the schedule?',
        choices: ['She needs help loading the van.', 'She wants a different route assigned.', 'She thinks the delivery schedule is far too light.', 'She is concerned about traffic delays.'],
        answer: 3,
        exp: '「渋滞があれば余裕がない」と懸念を示している。',
        why: ['積み込みの補助は求めていない。', '別ルートへの変更は求めていない。', 'むしろ余裕がないと感じている。', '正解。'],
        topics: ['p3detail'] },
    ],
  },

  /* ── 47–49 ─────────────────────────────────────────── */
  set({
    n: [47, 48, 49], lv: 4,
    s: [
      { role: 'M-Br', text: 'The lift\'s been out for three days now. Is there any update?' },
      { role: 'W-Cn', text: 'The part arrived yesterday, but the technician found a second issue once he opened the panel — a worn cable, not just the motor we expected.' },
      { role: 'M-Br', text: 'Is that going to add much time?' },
      { role: 'W-Cn', text: 'A day, maybe two. He\'s ordering the cable today and it should be here tomorrow afternoon.' },
      { role: 'M-Br', text: 'I\'m on the fifth floor, and I\'ve got boxes to move in this weekend. Is there anything the building can do?' },
      { role: 'W-Cn', text: 'We can arrange for the goods lift at the back to be unlocked for you on Saturday — it\'s usually reserved for deliveries, but I\'ll clear it with the porter.' },
      { role: 'M-Br', text: 'That would help a lot. What about elderly residents in the meantime?' },
      { role: 'W-Cn', text: 'We\'ve already contacted the two residents on the upper floors who mentioned mobility issues and offered to carry anything heavy for them until the lift is back.' },
    ],
    ja: '住民の男性が、3 日間止まっているエレベーターの状況を管理者に尋ねる。部品は前日届いたが、点検で予想外のもう 1 つの不具合（摩耗したケーブル）が見つかったと説明。修理は 1〜2 日延びる見込みで、ケーブルは本日発注し翌日午後には届く予定。男性は今週末に荷物を運び込む予定があると相談し、通常は配送専用の業務用エレベーターを土曜だけ開放できると管理者が提案。高齢の住民への対応についても尋ねると、移動に不自由がある上階の住民 2 名にはすでに連絡し、重い荷物を運ぶ手伝いを申し出済みだと答えた。',
    v: [['goods lift', '業務用エレベーター'], ['porter', '（建物の）管理人・門番'], ['mobility issue', '移動に関する不自由'] ],
    q: [
      { tag: '詳細', s: 'Why will the repair take longer than expected?',
        c: ['The replacement part was the wrong size.', 'A second problem was discovered.',
            'The technician was unavailable this week.', 'A permit from the council is required.'],
        a: 1,
        e: '点検でモーター以外に摩耗したケーブルという別の不具合が見つかったため。',
        w: ['サイズ違いの話はない。', '正解。', '技術者は来て点検している。', '許可証の話はない。'] },
      { tag: '詳細', s: 'What does the woman offer to arrange for the man?',
        c: ['A temporary room on a lower floor.', 'Several months of reduced service charges.',
            'Access to the goods lift on Saturday.', 'Money back for the inconvenience.'],
        a: 2,
        e: '「土曜だけ業務用エレベーターを開放できるよう門番に掛け合う」と申し出ている。',
        w: ['仮住まいの提供はない。', '管理費の減額については会話のどこにも出てこない。女性が申し出たのは土曜に業務用エレベーターを開けることだけである。', '正解。', '返金の話も出ていない。'] },
      { tag: '詳細', s: 'What has the building already done for elderly residents?',
        c: ['Waived their entire monthly fees for the month and apologized.', 'Moved them to nearby rooms.',
            'Arranged a private taxi service for them and confirmed it.', 'Contacted them and offered to carry heavy items.'],
        a: 3,
        e: '「移動に不自由がある住民に連絡し、重い荷物を運ぶ手伝いを申し出た」と述べている。',
        w: ['料金免除についても謝罪についても会話のどこにも出てこない。', '部屋の移動については会話のどこにも出てこない。', 'タクシーの手配についても、その確認についても会話のどこにも出てこない。', '正解。'] },
    ],
  }),

  /* ── 50–52（図表なし）──────────────────────────────── */
  /* 本番仕様（1セット1問の図表設問）に合わせ、No.51 を図表設問から通常設問へ一度差し替えた
     （2026-08-25）。旧 No.51（id: v5q51）は「その部屋を使う時刻」を問う図表設問だった。
     再追記（2026-08-25、Vol.5 の図表セット数を本番相当の5セット（Part 3:3 / Part 4:2）に
     絞る監査に伴い、No.50 も図表設問から外し、このセットの graphic を丸ごと削除した）：
     - No.50（旧 v5q50 = Look at the graphic. Which room…）は、部屋名は図表がないと
       決まらない設問だったため維持できず、音声だけで解ける「女性は木曜に何のために
       部屋が要るか（顧客向けプレゼン）」という冒頭の情報を問う設問に書き直した。
       id 新規採番（v5q50r）。
     - No.51（v5q51r）の旧 stem "When will the man have the equipment ready?" は
       "the equipment" の一語で No.52 の正解（画面と会議機器の事前設営）を先読みで
       割らせてしまうと監査で指摘された（ファイル内の旧コメントは「No.52 にも触れない」と
       書いていたが誤りだった）。レビュー役の案を検証のうえ採用し、"How does the woman
       react to the time she is offered?" に差し替えた（正解 She says it suits her
       client better.）。時刻・機器・遠隔参加者のいずれにも触れず、No.52 の情報とは
       重ならない。id 再採番（v5q51r2）。
     - No.52 は stem・正解の中身は変えず維持するが、選択肢が (B) だけ8語・唯一の
       "X and Y" 構造・唯一の過去分詞修飾つきで単独最長になっていた点をレビュー役の
       指摘で是正した。4択とも6語に揃え、"and" 構造を (A)(B) の2つに、
       後置修飾（過去分詞＋前置詞句）を全choiceに持たせて (B) だけが際立たないようにした。
       中身を変えたため id を新規採番する（v5q52r）。
     - 3問とも topics を明示（p3detail）。graphic 削除に伴いユニット既定の topics も
       ['graphic'] から ['p3detail'] に変更した。
     set() は id を no から自動生成し、これらの設問だけ id を変える手段がないため、
     このユニットだけヘルパーを使わず直接記述する。
     再々追記（2026-08-25、レビュー差し戻し対応）：No.51 の選択肢 (B)「She says it
     suits her client better.」が、No.50 の4択のうち client を含む唯一の選択肢＝
     正解「A client presentation.」を名指ししており、No.51 を先読みするだけで No.50
     が決定できると指摘された。(B) から client の語を外し「She says the later time
     is actually preferable.」に差し替えた（音声 "That's fine, actually — two works
     even better for our client" の "actually...even better" 部分で成立し、client
     には触れない）。exp も client への言及を外した。中身を変えたため id を新規採番
     する（v5q51r3）。
     あわせて No.52 の stem "the caller" を、同じセットの No.50・No.51 が使う
     "the woman" に統一した（台本に電話であることを示す語がなく、呼称が浮いていた）。
     stem のみの変更のため id は v5q52r のまま維持する。
     2巡目監査（2026-08-25、レビュー役）：No.51 の exp が「当初希望していなかった時間でも」と
     書いていたが、女性は冒頭で「11 時か 14 時のどちらでもよい」と自ら 14 時を候補に挙げており、
     台本と食い違っていた。exp を「挙げた 2 案のうち遅い方を提示され、むしろ好都合だと答えた」
     という事実どおりの記述に改めた。あわせて why の (A)(C) が「述べていない」だけだったため、
     台本の該当箇所を根拠として名指しする形に書き直した。解説文のみの修正。 */
  {
    id: 'v5-p3-50', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['p3detail'], level: 5,
    script: [
      { role: 'W-Au', text: 'I need a room for a client presentation on Thursday — eleven people, so I\'ll need decent seating.' },
      { role: 'M-Am', text: 'Do you have a preferred time?' },
      { role: 'W-Au', text: 'Either eleven or two would work for us.' },
      { role: 'M-Am', text: 'For eleven people, you\'ll need one of our larger rooms — Elm or Fir. At eleven o\'clock, both of those are already booked, I\'m afraid, so it would have to be two o\'clock.' },
      { role: 'W-Au', text: 'That\'s fine, actually — two works even better for our client.' },
      { role: 'M-Am', text: 'I\'ll book that one for you then. Do you need the screen and conferencing equipment set up in advance?' },
      { role: 'W-Au', text: 'Yes, please — we\'ll have two colleagues joining remotely.' },
      { role: 'M-Am', text: 'No problem, I\'ll have that ready fifteen minutes before you arrive.' },
    ],
    ja: '女性が木曜の顧客向けプレゼンのため会議室を予約したいと相談。参加者は 11 名で、11 時か 14 時のどちらでもよいと伝える。11 名を収容できるのは Elm か Fir だが、11 時はどちらも予約済みのため 14 時になると案内され、女性はむしろ好都合だと答える。担当者は 14 時に空いている方の部屋を予約し、遠隔参加者 2 名のため画面と会議機器の事前設営も依頼される。到着 15 分前までに準備すると約束した。',
    vocab: [['decent seating', 'それなりの座席数'], ['conferencing equipment', '会議用機器'], ['remotely', '遠隔で'] ],
    questions: [
      { id: 'v5q50r', no: 50, tag: '概要', stem: 'What is the woman arranging a room for?',
        choices: ['A job interview.', 'A staff orientation.', 'A department meeting.', 'A client presentation.'],
        answer: 3,
        exp: '冒頭で「木曜に顧客向けのプレゼンのため部屋が必要」と述べている。',
        why: ['面接の話は出ていない。', '研修の話は出ていない。', '部署の会議とは述べていない。', '正解。'],
        topics: ['p3detail'] },
      { id: 'v5q51r3', no: 51, tag: '詳細', stem: 'How does the woman react to the time she is offered?',
        choices: ['She asks to be put on a waiting list.', 'She says the later time is actually preferable.',
            'She asks whether a discount applies.', 'She says she will check and call back.'],
        answer: 1,
        exp: '女性は初めに「11 時か 14 時のどちらでもよい」と伝えている。11 時はどちらの大部屋も予約済みで 14 時になると告げられると「かえってその方が都合がよい」と答えており、提示された遅い方の時刻を歓迎している。',
        why: ['11 時が埋まっていると聞いた直後にその場で 14 時を受け入れており、11 時の空きを待ちたいという希望は述べていない。', '正解。', '女性が 14 時について述べたのは「かえって都合がよい」という一点のみで、料金にも割引にも会話を通じて一切触れていない。', 'その場で答えており、確認して折り返すとは言っていない。'],
        topics: ['p3detail'] },
      { id: 'v5q52r', no: 52, tag: '詳細', stem: 'What does the woman request in addition to the room?',
        choices: ['A catered lunch and bottled water.', 'Screen and conferencing equipment installed early.',
            'Extra parking spaces reserved for guests.', 'Printed agenda sheets for the attendees.'],
        answer: 1,
        exp: '遠隔参加者がいるため、画面と会議機器を前もって設営しておくよう依頼している。',
        why: ['昼食や飲み物の手配には触れていない。', '正解。', '駐車場の確保には触れていない。', '印刷した議事次第の配布には触れていない。'],
        topics: ['p3detail'] },
    ],
  },
];
