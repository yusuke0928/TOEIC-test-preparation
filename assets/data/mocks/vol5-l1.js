/* =============================================================
   予想模試 Vol.5 — Part 1（No.1–6）／ Part 2（No.7–31）
   総仕上げ回。全体を通じて標準〜やや高めの難度で構成する。
   ============================================================= */

const p1 = (no, o) => ({
  id: `v5-p1-${no}`, part: 1, kind: 'p1', topics: o.t || ['p1verb'], level: o.lv ?? 4,
  scene: o.scene, speaker: o.sp || 'W-Am',
  questions: [{ id: `v5q${no}`, no, choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, topics: o.t || ['p1verb'] }],
});

const p2 = (no, o) => ({
  id: `v5-p2-${no}`, part: 2, kind: 'p2', topics: o.t || ['p2ind'], level: o.lv ?? 5,
  questions: [{
    id: `v5q${no}`, no, prompt: o.p, speakerA: o.sa || 'M-Am', speakerB: o.sb || 'W-Br',
    choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, topics: o.t || ['p2ind'],
  }],
});

export const L1 = [

  /* ══════════ PART 1 ══════════ */
  p1(1, {
    scene: 'waterfront', sp: 'M-Cn', lv: 3,
    c: [
      'A ramp is being lowered onto a boat.',
      'A bridge extends across the water.',
      'Fishing nets are hanging out to dry.',
      'A crowd has gathered near the water.',
    ],
    a: 1,
    e: '水面をまたいで橋が架かっている。人が一人も写っていない写真では、人の動作を含む選択肢はすべて誤りになり、風景そのものを述べた選択肢が残る。',
    w: ['渡し板を下ろす作業は確認できない。', '正解。', '網を干している様子はない。', '人だかりは写っていない。'],
    ja: [
      '(A) 渡し板がボートに下ろされているところだ。',
      '(B) 橋が水面を横切って架かっている。',
      '(C) 漁網が干してある。',
      '(D) 人だかりが水辺の近くにできている。',
    ],
  }),

  p1(2, {
    scene: 'presentation', sp: 'W-Br', lv: 4,
    c: [
      'A speaker is addressing a seated audience.',
      'The audience is filing out of the room.',
      'Chairs are being folded and stacked.',
      'A screen is being lowered from the ceiling.',
    ],
    a: 0,
    e: '着席した聴衆に向かって話す発表者の姿。is addressing は「〜に向かって話している」という進行中の動作。',
    w: ['正解。', '退出している様子はない。', '椅子を片付けている人はいない。', 'スクリーンの操作は確認できない。'],
    ja: [
      '(A) 発表者が着席した聴衆に向かって話している。',
      '(B) 聴衆が部屋から次々と退出している。',
      '(C) 椅子がたたまれて積まれているところだ。',
      '(D) スクリーンが天井から下ろされているところだ。',
    ],
  }),

  p1(3, {
    scene: 'bicycle', sp: 'M-Am', lv: 4,
    c: [
      'A cyclist is riding down a lane.',
      'A helmet is hanging from the handlebars.',
      'A bicycle is being loaded onto a rack.',
      'Someone is adjusting a bicycle wheel.',
    ],
    a: 3,
    e: 'しゃがんで自転車の車輪に手を伸ばしている人物。is adjusting はその場での作業を表す進行形。',
    w: ['走行している自転車ではない。', 'ヘルメットは描かれていない。', 'ラックへの積み込みは確認できない。', '正解。'],
    ja: [
      '(A) 自転車利用者が車線を走っている。',
      '(B) ヘルメットがハンドルからぶら下がっている。',
      '(C) 自転車がラックに積み込まれているところだ。',
      '(D) 誰かが自転車の車輪を調整している。',
    ],
  }),

  p1(4, {
    scene: 'bank-teller', sp: 'W-Au', lv: 4,
    c: [
      'A clerk is unlocking a cash drawer.',
      'A document is being passed across a counter.',
      'Chairs have been placed in a waiting area.',
      'A vault door is being closed.',
    ],
    a: 1,
    e: 'カウンターを挟んで両側の人物が同じ書類に手を掛けている。is being + 過去分詞は動作主が写っていて初めて成立するので、(B) は選べるが、動作主も対象も写っていない (D) は選べない。',
    w: ['引き出しを開ける動作は確認できない。', '正解。', '待合スペースの椅子は描かれていない。', '金庫の扉は描かれていない。'],
    ja: [
      '(A) 係員が現金の引き出しの鍵を開けている。',
      '(B) 書類がカウンター越しに受け渡されているところだ。',
      '(C) 椅子が待合スペースに置かれている。',
      '(D) 金庫の扉が閉められているところだ。',
    ],
  }),

  p1(5, {
    scene: 'factory', sp: 'M-Br', lv: 5,
    c: [
      'A conveyor belt is being repaired.',
      'Protective gear is being distributed.',
      'Boxes have been stacked near a machine.',
      'A worker is climbing over a machine.',
    ],
    a: 2,
    e: '機械のそばに箱が積まれている状態。have been stacked は完了した状態を表し、写真から確実に読み取れる。',
    w: ['コンベヤの修理作業は確認できない。', '防護具の配布は描かれていない。', '正解。', '機械によじ登る動作は確認できない。'],
    ja: [
      '(A) ベルトコンベヤが修理されているところだ。',
      '(B) 防護具が配布されているところだ。',
      '(C) 機械の近くに箱が積み重ねられている。',
      '(D) 作業員が機械によじ登っている。',
    ],
  }),

  p1(6, {
    scene: 'parking-lot', sp: 'W-Am', lv: 3,
    c: [
      'Some parking spaces are unoccupied.',
      'A car is being washed.',
      'A barrier is being raised.',
      'Passengers are boarding a vehicle.',
    ],
    a: 0,
    e: '区画は 4 つあるが車は 2 台で、右側の 2 区画が空いている。「何が置かれているか」だけでなく「どこが空いているか」も描写の対象になる。',
    w: ['正解。', '洗車している様子はない。', '遮断機は描かれていない。', '乗り降りしている人物はいない。'],
    ja: [
      '(A) いくつかの駐車区画が空いている。',
      '(B) 車が洗われているところだ。',
      '(C) 遮断機が上げられているところだ。',
      '(D) 乗客が車両に乗り込んでいる。',
    ],
  }),

  /* ══════════ PART 2 ══════════ */
  p2(7, { t: ['p2wh'], lv: 3, sa: 'W-Br', sb: 'M-Am',
    p: 'How often does the newsletter go out?',
    c: ['Yes, I subscribed.', 'It\'s about our new product.', 'Twice a month.'],
    a: 2,
    e: 'How often に頻度で答えている。',
    w: ['How often に Yes は不可。', 'What について への答え。', '正解。'],
    ja: 'ニュースレターはどのくらいの頻度で配信されますか。→ (C) 月に 2 回です。' }),

  p2(8, { t: ['p2ind'], lv: 5, sa: 'M-Cn', sb: 'W-Am',
    p: 'Could you send me the minutes from yesterday\'s meeting?',
    c: ['I\'m still typing them up.', 'The meeting ran long.', 'Sure, they\'re minute-long.'],
    a: 0,
    e: '依頼に対し「まだ清書中です」と、完了していないことを間接的に伝える応答。',
    w: ['正解。', '会議の長さは依頼への答えになっていない。', 'minutes（議事録）と minute（分）の音の引っ掛け。'],
    ja: '昨日の会議の議事録を送っていただけますか。→ (A) まだ清書しているところです。' }),

  /* id は v5q9r（no は模試の通し番号として 9 を維持。設問全体を差し替えたため id は
     新規採番のまま使い続ける。旧 id v5q9 を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     経緯:
     1) 初版 "Who's covering the reception desk this afternoon?" → "Nobody's been assigned yet."
        は vol4-l1.js No.13 "Who is covering the reception desk this afternoon?" →
        "Nobody has volunteered yet." と stem・正解の装置（＝まだ誰も決まっていない）が
        同一で重複と判定され差し替えた。
     2) 1回目の差し替え（選択疑問 "Should we replace the older forklift, or just have it
        serviced again?"）はレビュー監査で3件の欠陥により却下: (a) 誤答が「去年2回整備した」
        で、買い替え方向を示す間接的な第二の正解になっていた。(b) もう一方の誤答を「選択疑問に
        Yes は構造的に不可」として排除していたが、この規則は誤り（Cambridge の
        *English Grammar Today* も Huddleston & Pullum (2002) も、選択疑問への Yes/No 応答は
        文脈次第で成立しうるとし、統語的な禁止ではないとしている）。(c) vol6-l1.js No.18 と
        型・装置が全一致するうえ、Vol.5 の選択疑問がこれで4問目になってしまう。
     2回目の今回は付加疑問 (tag question) に変更し、正解の装置も「保証期間の数値を Yes/No を
     使わずに訂正する」という、既存6巻 Part 2 全150問のどの装置とも重複しない型にした
     （2026-08-24）。
     2026-08-25 のレビュー監査で解説のみ改訂（prompt・choices・answer は変更なし）。
     旧解説は誤答2つを「期間の長さに触れていない」で切っていたが、この論法は1回目の差し替えで
     却下された論法の再演にあたる（本データセットでは V6-19 / V1-28 / V4-10 のように
     二択のどちらも選ばない応答・事実だけを返す応答が正解になっており、「明示していない」は
     排除根拠にならない）。改訂後は「問われている命題と論理的に独立している——保証期間が
     1年でも2年でも両方の誤答は同時に成り立つ」という形に書き換えた。この線なら、
     どんな文脈を補っても (A)(C) は応答にならない（応答にするには文を書き換えるしかない）。
     なお既存の付加疑問6問（V1-26 / V2-18 / V3-18 / V3-31 / V4-18 / V6-15）は全部
     主語が二人称の人間で、無生物主語＋isn't it? はこれが唯一。Vol.5 は付加疑問が0問だった。
     p2() ヘルパーは id を no から自動生成し、no を変えずに id だけ変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v5-p2-9r', part: 2, kind: 'p2', topics: ['p2wh'], level: 4,
    questions: [{
      id: 'v5q9r', no: 9,
      prompt: 'The extended warranty on these laptops is still just one year, isn\'t it?',
      speakerA: 'W-Au', speakerB: 'M-Br',
      choices: [
        'It\'s billed as a separate line item on the invoice.',
        'It went up to two years starting with this year\'s models.',
        'It covers manufacturing defects, not accidental damage.',
      ],
      answer: 1,
      exp: '付加疑問 "..., isn\'t it?" は「延長保証は今も1年のままだ」という命題の真偽を相手に確かめる形なので、応答はその命題を肯定するか、否定するか、または自分には判断できない事情を述べるかのいずれかになる。正解は Yes / No を使わず、「今年のモデルから2年になった」と保証期間そのものの新しい値を挙げて「まだ1年」を否定している。go up は LDOCE が "to increase in price, amount, level etc" と定義し go up from something to something の型を挙げる語で、数量が上がることを表す。starting with は切り替わりの起点を示し、一回限りの変更ではなく仕様そのものが改まったことを表す。誤答2つは保証にまつわる語（invoice / line item / manufacturing defects）を並べているが、述べている内容は保証期間の長さと論理的に独立していて、期間が1年であっても2年であっても同じように成り立つ。話題が同じでも命題として独立していれば応答にならない、というのが Part 2 の急所。',
      why: [
        '請求書上の計上方法を述べた文。保証料が独立した項目として立っているかどうかは保証期間の長さとは別の事柄で、期間が1年でも2年でも同じように成り立つ。つまり付加疑問が求める極性の判断をまったく含んでいない。「保証期間は自分の担当外だ」という含みで読もうとしても、この文にはそう読ませる語（I / not sure / you\'d have to ask など）が一つも無く、保証の扱いを承知している話し手の断定になっている。',
        '正解。「今年のモデルから2年になった」と保証期間そのものの新しい値を挙げ、「まだ1年」を否定している。Yes / No を使わずに相手の前提を訂正する型。',
        '保証の適用範囲を述べた文。製造上の欠陥が対象で偶発的な損傷は対象外という範囲の話は、期間が1年でも2年でも変わらず成り立つので、「まだ1年か」への答えにはならない。X, not Y という訂正の形をしているが、訂正しているのは相手が口にしていない補償範囲のほうで、問われている期間には手が付いていない。',
      ],
      ja: 'これらのノートパソコンの延長保証は、まだ1年きりのままですよね。→ (B) 今年のモデルからは2年になりました。',
      topics: ['p2wh'],
    }] },

  p2(10, { t: ['p2ind'], lv: 5, sa: 'M-Am', sb: 'W-Br',
    p: 'Has the invoice from the caterer come through?',
    c: ['The caterer starts at noon.', 'It came to about £400.', 'Not that I\'ve seen.'],
    a: 2,
    e: '「私が見た限りではまだ届いていない」と間接的に否定する応答。',
    w: ['caterer の反復。', '金額は届いたかどうかへの答えではない。', '正解。'],
    ja: '仕出し業者からの請求書は届きましたか。→ (C) 私が見た限りではまだです。' }),

  p2(11, { t: ['p2wh'], lv: 4, sa: 'W-Br', sb: 'M-Cn',
    p: 'Why was the shipment held at the port?',
    c: ['It left on Tuesday.', 'A customs form was missing.', 'The port is quite busy.'],
    a: 1,
    e: '理由を尋ねられ、「税関書類が不足していた」と具体的な原因を答えている。',
    w: ['出発日は理由になっていない。', '正解。', '港の混雑は述べられているだけで理由ではない。'],
    ja: 'なぜ出荷が港で留め置かれたのですか。→ (B) 税関の書類が一部不足していました。' }),

  p2(12, { t: ['p2ind'], lv: 5, sa: 'M-Br', sb: 'W-Au',
    p: 'Don\'t we need approval before publishing this?',
    c: ['We published it last year.', 'Approval isn\'t required for minor edits.', 'Yes, it\'s approved of.'],
    a: 1,
    e: '否定疑問に Yes / No を使わず、「軽微な修正には承認は不要」と条件を示して答える応答。',
    w: ['公開時期は問いに答えていない。', '正解。', 'approve の別の意味を使った引っ掛け。'],
    ja: 'これを公開する前に承認が必要ではないですか。→ (B) 軽微な修正には承認は不要です。' }),

  p2(13, { t: ['p2wh'], lv: 3, sa: 'W-Am', sb: 'M-Au',
    p: 'Which printer has the colour toner?',
    c: ['Every Monday.', 'The one near the stairs.', 'Yes, it prints fast.'],
    a: 1,
    e: 'Which に対して特定のプリンターを答えている。',
    w: ['How often への答え。', '正解。', 'Which に Yes は不可。'],
    ja: 'どのプリンターにカラートナーが入っていますか。→ (B) 階段の近くのものです。' }),

  p2(14, { t: ['p2wh'], lv: 5, sa: 'M-Cn', sb: 'W-Br',
    p: 'Would you like the window seat or the aisle?',
    c: ['Yes, I\'d like that.', 'The window was cleaned.', 'Either is fine, honestly.'],
    a: 2,
    e: '選択疑問に「どちらでも構わない」と答える応答。Yes / No は使えない。',
    w: ['選択疑問に Yes は不可。', 'window の反復。', '正解。'],
    ja: '窓側と通路側、どちらがよろしいですか。→ (C) 正直、どちらでも構いません。' }),

  p2(15, { t: ['p2wh'], lv: 5, sa: 'W-Au', sb: 'M-Am',
    p: 'Isn\'t the workshop supposed to start at nine?',
    c: ['Yes, workshops are useful.', 'It was moved to ten.', 'The room seats forty.'],
    a: 1,
    e: '否定疑問に事実で答える応答。「10 時に変更された」と時刻がずれたことを伝えている。',
    w: ['workshop の反復で、質問に答えていない。', '正解。', '定員は問いに関係ない。'],
    ja: '研修は 9 時開始ではなかったですか。→ (B) 10 時に変更されました。' }),

  p2(16, { t: ['p2ind'], lv: 4, sa: 'M-Br', sb: 'W-Am',
    p: 'What\'s the fastest way to get to the annex building?',
    c: ['Through the car park, if the gate\'s open.', 'It was built last year.', 'About two hundred people work there.'],
    a: 0,
    e: '経路を尋ねられ、条件付きで具体的なルートを答えている。',
    w: ['正解。', '建築時期は問いに答えていない。', '人数は問いに関係ない。'],
    ja: '別館への一番早い行き方は何ですか。→ (A) 門が開いていれば駐車場を通る道です。' }),

  p2(17, { t: ['p2wh'], lv: 3, sa: 'W-Br', sb: 'M-Cn',
    p: 'How many boxes are left to unpack?',
    c: ['They\'re quite heavy.', 'A dozen or so.', 'Yes, we unpacked them.'],
    a: 1,
    e: 'How many に数量で答えている。',
    w: ['重さは問いに答えていない。', '正解。', 'How many に Yes は不可。'],
    ja: '荷ほどきが残っている箱はいくつありますか。→ (B) 12 個ほどです。' }),

  p2(18, { t: ['p2ind'], lv: 5, sa: 'M-Am', sb: 'W-Au',
    p: 'Have the samples arrived from the supplier yet?',
    c: ['Yes, samples are useful.', 'They sampled the product.', 'Customs still has them.'],
    a: 2,
    e: '「税関がまだ保留している」＝まだ届いていない、と間接的に答える応答。',
    w: ['一般論で質問に答えていない。', 'sample の別の意味（試食する）を使った引っ掛け。', '正解。'],
    ja: '業者からのサンプルはもう届きましたか。→ (C) まだ税関に留め置かれています。' }),

  p2(19, { t: ['p2wh'], lv: 5, sa: 'W-Au', sb: 'M-Br',
    p: 'Weren\'t we supposed to get feedback by Friday?',
    c: ['Yes, feedback matters.', 'It\'s coming Monday instead.', 'The Friday meeting was cancelled.'],
    a: 1,
    e: '否定疑問に対し、遅れた事情を述べる間接応答。',
    w: ['一般論で問いに答えていない。', '正解。', '金曜の会議中止は理由になっていない。'],
    ja: 'フィードバックは金曜までにもらえるはずではなかったですか。→ (B) 代わりに月曜になります。' }),

  p2(20, { t: ['p2wh'], lv: 4, sa: 'M-Cn', sb: 'W-Am',
    p: 'Would you rather reschedule or just shorten the call?',
    c: ['The call started late.', 'Yes, that works.', 'Let\'s shorten it.'],
    a: 2,
    e: '選択疑問に「短縮しよう」と具体的に一方を選ぶ応答。',
    w: ['開始時刻は問いに答えていない。', '選択疑問に Yes は不可。', '正解。'],
    ja: '予定を変更するか、それとも通話を短くするか、どちらがよいですか。→ (C) 短くしましょう。' }),

  p2(21, { t: ['p2ind'], lv: 5, sa: 'W-Br', sb: 'M-Au',
    p: 'Can you believe the printer jammed again?',
    c: ['The printer is grey.', 'I\'ll call maintenance now.', 'Yes, I believe it.'],
    a: 1,
    e: '不満・驚きの表明に対し、対応行動で応じる応答。',
    w: ['printer の色は無関係。', '正解。', 'believe を文字通り取った引っ掛け。'],
    ja: 'プリンターがまた詰まったなんて信じられますか。→ (B) 今すぐ保守担当に連絡します。' }),

  p2(22, { t: ['p2wh'], lv: 3, sa: 'M-Am', sb: 'W-Au',
    p: 'Where did you file the original contract?',
    c: ['Yes, it\'s filed.', 'It was signed in March.', 'Under the client\'s name.'],
    a: 2,
    e: 'Where に対して具体的な保管場所で答えている。',
    w: ['Where に Yes は不可。', '署名時期は問いに答えていない。', '正解。'],
    ja: '契約書の原本はどこに保管しましたか。→ (C) 顧客名で分類してあります。' }),

  p2(23, { t: ['p2ind'], lv: 5, sa: 'W-Am', sb: 'M-Br',
    p: 'Do you know if the parking permit renewal is automatic?',
    c: ['I\'d double-check with facilities.', 'The permit costs sixty pounds.', 'Parking is on level two.'],
    a: 0,
    e: '「施設管理に確認した方がよい」と、自分も確信がないことを示す間接応答。',
    w: ['正解。', '料金は問いに答えていない。', '駐車場の階数は無関係。'],
    ja: '駐車許可証の更新は自動かご存じですか。→ (A) 施設管理に確認した方がよさそうです。' }),

  p2(24, { t: ['p2wh'], lv: 5, sa: 'M-Cn', sb: 'W-Br',
    p: 'Aren\'t the quarterly numbers due today?',
    c: ['Finance pushed the deadline back a week.', 'Yes, numbers are important.', 'The quarter ends in June.'],
    a: 0,
    e: '否定疑問に対し、期限が延びた事情を述べる応答。',
    w: ['正解。', '一般論で問いに答えていない。', '四半期の終了月は理由になっていない。'],
    ja: '四半期の数字は今日が期限ではなかったですか。→ (A) 経理部が期限を 1 週間延ばしました。' }),

  p2(25, { t: ['p2ind'], lv: 5, sa: 'W-Au', sb: 'M-Am',
    p: 'I still haven\'t heard back about the venue booking.',
    c: ['Try calling instead of emailing.', 'The venue holds two hundred.', 'It was booked last year.'],
    a: 0,
    e: '困りごとの表明に対し、対応策を提案する応答。',
    w: ['正解。', '収容人数は問いに関係ない。', '予約時期は問いに関係ない。'],
    ja: '会場予約の件、まだ返事が来ていません。→ (A) メールではなく電話してみてください。' }),

  p2(26, { t: ['p2wh'], lv: 4, sa: 'M-Br', sb: 'W-Am',
    p: 'Is the training online, or do we need to travel?',
    c: ['A bit of both, actually.', 'Yes, we trained hard.', 'It starts next Tuesday.'],
    a: 0,
    e: '選択疑問に「実は両方」と答え、二者択一を崩す応答。',
    w: ['正解。', '選択疑問に Yes は不可。', '開始日は問いに答えていない。'],
    ja: '研修はオンラインですか、それとも出張が必要ですか。→ (A) 実はどちらもあります。' }),

  p2(27, { t: ['p2ind'], lv: 4, sa: 'W-Br', sb: 'M-Au',
    p: 'Where should visitors sign in?',
    c: ['The sign was replaced.', 'Visitors arrive at nine.', 'Whoever\'s at the front desk will show them.'],
    a: 2,
    e: '場所を尋ねられ、「受付にいる人が案内する」と間接的に答える応答。',
    w: ['sign の別の意味（標識）を使った引っ掛け。', '到着時刻は問いに答えていない。', '正解。'],
    ja: '来訪者はどこで受付をすればよいですか。→ (C) その時フロントにいる人が案内します。' }),

  p2(28, { t: ['p2wh'], lv: 5, sa: 'M-Am', sb: 'W-Au',
    p: 'Why don\'t we just merge the two spreadsheets?',
    c: ['The spreadsheet has ten tabs.', 'Because it merges well.', 'They use different formats, unfortunately.'],
    a: 2,
    e: 'Why don\'t we ...? は提案。それに対する障害を挙げる応答が正解で、Because で理由を答えるのは誤り。',
    w: ['タブ数は提案への応答ではない。', 'merge の反復で提案への応答になっていない。', '正解。'],
    ja: '2 つの表を統合してはどうでしょう。→ (C) あいにく書式が違うんです。' }),

  p2(29, { t: ['p2ind'], lv: 5, sa: 'W-Am', sb: 'M-Cn',
    p: 'Has the budget for new laptops been approved?',
    c: ['It\'s with finance for sign-off.', 'The laptops are quite light.', 'Yes, budgets are tight.'],
    a: 0,
    e: '「経理部の承認待ち」＝まだ確定していない、と間接的に答える応答。',
    w: ['正解。', 'ノートパソコンの重さは無関係。', '一般論で問いに答えていない。'],
    ja: '新しいノートパソコンの予算は承認されましたか。→ (A) 経理部の最終承認待ちです。' }),

  p2(30, { t: ['p2ind'], lv: 4, sa: 'M-Br', sb: 'W-Br',
    p: 'This scanner has been jammed all week.',
    c: ['There\'s a spare one in the mail room.', 'It scans in colour.', 'The week went quickly.'],
    a: 0,
    e: '不満の表明に対し、代替手段を示す応答。',
    w: ['正解。', 'スキャナーの機能は問いに関係ない。', '週の感想は応答になっていない。'],
    ja: 'このスキャナー、今週ずっと詰まったままです。→ (A) 郵便室に予備が 1 台ありますよ。' }),

  p2(31, { t: ['p2wh'], lv: 5, sa: 'W-Au', sb: 'M-Am',
    p: 'Weren\'t the badges supposed to be ready by now?',
    c: ['The printer ran out of blanks.', 'Yes, they\'re quite useful.', 'Badges are worn at the front.'],
    a: 0,
    e: '否定疑問に対し、遅れた事情を述べる間接応答。',
    w: ['正解。', '一般論で問いに答えていない。', '着用位置は理由になっていない。'],
    ja: 'バッジはもうできているはずではなかったですか。→ (A) プリンターの用紙が切れてしまって。' }),
];
