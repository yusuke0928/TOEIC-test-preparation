/* =============================================================
   予想模試 Vol.4 — Part 1（No.1–6）／ Part 2（No.7–31）
   語彙難化回。リスニングは標準的な難度・構成で出題する。
   ============================================================= */

const p1 = (no, o) => ({
  id: `v4-p1-${no}`, part: 1, kind: 'p1', topics: o.t || ['p1verb'], level: o.lv ?? 4,
  scene: o.scene, speaker: o.sp || 'W-Am',
  questions: [{ id: `v4q${no}`, no, choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, topics: o.t || ['p1verb'] }],
});

const p2 = (no, o) => ({
  id: `v4-p2-${no}`, part: 2, kind: 'p2', topics: o.t || ['p2ind'], level: o.lv ?? 5,
  questions: [{
    id: `v4q${no}`, no, prompt: o.p, speakerA: o.sa || 'M-Am', speakerB: o.sb || 'W-Br',
    choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, topics: o.t || ['p2ind'],
  }],
});

export const L1 = [

  /* ══════════ PART 1 ══════════ */
  p1(1, {
    scene: 'warehouse', sp: 'M-Br', lv: 3,
    c: [
      'A forklift is lifting a pallet of boxes.',
      'Boxes are being loaded onto a delivery truck.',
      'A worker is climbing a ladder to reach the top shelf.',
      'The lowest shelf has been left empty.',
    ],
    a: 3,
    e: '棚は上の 2 段に箱が置かれ、最下段だけ何も載っていない。「そこに何が無いか」を述べる選択肢も、写真の通りであれば正解になる。',
    w: ['フォークリフトは描かれていない。', 'トラックへの積み込み場面ではない。', 'はしごに登る人物はいない。', '正解。'],
    ja: [
      '(A) フォークリフトが箱を載せたパレットを持ち上げている。',
      '(B) 箱が配送トラックに積み込まれているところだ。',
      '(C) 作業員が最上段の棚に届くようはしごを登っている。',
      '(D) 最下段の棚は空のままになっている。',
    ],
  }),

  p1(2, {
    scene: 'bank-teller', sp: 'W-Br', lv: 4,
    c: [
      'Two people are facing each other across a counter.',
      'A teller is stamping a form.',
      'A sign is being posted on a wall.',
      'An employee is unlocking a door.',
    ],
    a: 0,
    e: 'カウンターを挟んで二人が向き合っている位置関係。Part 1 では動作だけでなく、こうした人物どうしの位置関係を述べた選択肢も正解になる。',
    w: ['正解。', '押印している動作は確認できない。', '掲示している人はいない。', '施錠・解錠の動作も写っていない。'],
    ja: [
      '(A) 二人がカウンターを挟んで向かい合っている。',
      '(B) 窓口係が書類に押印している。',
      '(C) 掲示が壁に貼られているところだ。',
      '(D) 従業員がドアの鍵を開けている。',
    ],
  }),

  p1(3, {
    scene: 'laboratory-seated', sp: 'M-Am', lv: 5,
    c: [
      'Safety goggles are being distributed.',
      'Chemicals are being poured into a beaker.',
      'A researcher is seated at a workbench.',
      'A microscope is being repaired.',
    ],
    a: 2,
    e: '実験台の前に人物が着席している状態。周囲に器具が置かれている。',
    w: ['配布の場面ではない。', '注ぐ動作は確認できない。', '正解。', '修理の様子はない。'],
    ja: [
      '(A) 保護ゴーグルが配布されているところだ。',
      '(B) 薬品がビーカーに注がれているところだ。',
      '(C) 研究者が実験台の前に座っている。',
      '(D) 顕微鏡が修理されているところだ。',
    ],
  }),

  p1(4, {
    scene: 'market-stall', sp: 'W-Au', lv: 4,
    c: [
      'A person is carrying goods next to a stall.',
      'A vendor is arranging fruit on a table.',
      'An awning is being taken down.',
      'A cart is blocking the walkway.',
    ],
    a: 0,
    e: '露店の脇で荷物を抱えている人物の姿。手が箱に掛かっているので carry と言える。日よけをたたむ・台車を置くといった、写真にない要素を足した選択肢は選べない。',
    w: ['正解。', '商品に触れて並べている様子は確認できない。', '日よけを外す動作はない。', '通路をふさぐ台車はない。'],
    ja: [
      '(A) 人物が露店の脇で品物を抱えている。',
      '(B) 店主が台の上に果物を並べている。',
      '(C) 日よけが外されているところだ。',
      '(D) 台車が通路をふさいでいる。',
    ],
  }),

  p1(5, {
    scene: 'train-platform', sp: 'M-Br', lv: 4,
    c: [
      'A train is pulling into the station.',
      'Tickets are being checked at a gate.',
      'Passengers are waiting on a platform beside a train.',
      'A platform is being repaired.',
    ],
    a: 2,
    e: '列車のそばのホームで乗客が待っている位置関係。静止した 1 枚の写真は「いま動いている最中」を写せないので、進行中の移動を断定する選択肢は避ける。列車がホームに入っているという結果の状態なら読み取れる。',
    w: ['静止した写真から「進行中の移動」は読み取れない。車体はホームに横づけされた状態で写っており、いま進入している途中だと述べる根拠がない。到着し終えた状態（has pulled into）なら写真から読み取れる。',
        '改札の場面はない。', '正解。', '補修工事の様子はない。'],
    ja: [
      '(A) 列車が駅に進入している。',
      '(B) 改札で切符が確認されているところだ。',
      '(C) 乗客が列車のそばのホームで待っている。',
      '(D) ホームが補修されているところだ。',
    ],
  }),

  p1(6, {
    scene: 'factory', sp: 'W-Cn', lv: 5,
    c: [
      'A machine is being repaired by a technician.',
      'A worker is standing next to a conveyor belt.',
      'Products are being packaged by hand.',
      'The factory floor has been cleared of all equipment.',
    ],
    a: 1,
    e: 'ベルトコンベヤのすぐ脇に作業員が立っている位置関係。動作を断定しきれないときでも、位置関係を述べた選択肢なら写真から確実に裏づけられる。',
    w: ['修理をしている人物はいない。', '正解。', '手作業での梱包場面ではない。', '箱や機械があり空ではない。'],
    ja: [
      '(A) 技術者によって機械が修理されているところだ。',
      '(B) 作業員がベルトコンベヤのそばに立っている。',
      '(C) 製品が手作業で梱包されているところだ。',
      '(D) 工場のフロアからすべての設備が取り除かれている。',
    ],
  }),

  /* ══════════ PART 2 ══════════ */
  p2(7, { t: ['p2wh'], lv: 3, sa: 'W-Am', sb: 'M-Br',
    p: 'How many attendees are we expecting for the product demo?',
    c: ['At the downtown venue.', 'Yes, it was demonstrated.', 'Around forty, based on RSVPs.'],
    a: 2,
    e: 'How many に人数で答えている。',
    w: ['Where への回答。', 'demo の反復で数を答えていない。', '正解。'],
    ja: '製品デモの出席予定人数はどのくらいですか。→ (C) 出欠確認によるとおよそ40名です。' }),

  p2(8, { t: ['p2ind'], lv: 5, sa: 'M-Am', sb: 'W-Au',
    p: 'Did the vendor confirm the delivery date?',
    c: ['They shipped it by courier.', 'The vendor is based in Leeds.', 'I am still waiting to hear back.'],
    a: 2,
    e: '「まだ返事待ち」と間接的に未確定であることを伝える応答。',
    w: ['配送方法の話で質問に答えていない。', '所在地の話で確認の可否ではない。', '正解。'],
    ja: '業者は配送日を確認しましたか。→ (C) まだ返事待ちです。' }),

  p2(9, { t: ['p2wh'], lv: 4, sa: 'W-Br', sb: 'M-Cn',
    p: 'Where did you leave the master key?',
    c: ['It opens every door.', 'On the hook by the fire exit.', 'Yes, I found it.'],
    a: 1,
    e: 'Where に場所で答えている。',
    w: ['鍵の機能説明で場所ではない。', '正解。', 'Where に Yes は不可。'],
    ja: 'マスターキーはどこに置きましたか。→ (B) 非常口のそばのフックです。' }),

  /* id は v4q10r（no は模試の通し番号として 10 を維持するが、選択肢を差し替えたため
     設問 id は新規採番。旧 id v4q10 を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     旧 (B) The auditor arrived yesterday. は「監査人がもう来ている」＝監査は今週で合っている、
     という間接的な肯定として成立してしまい、第二の正解になっていたため差し替えた。
     p2() ヘルパーは id を no からテンプレートリテラルで自動生成し、no を変えずに
     id だけ変える手段がないため、このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v4-p2-10r', part: 2, kind: 'p2', topics: ['p2ind'], level: 5,
    questions: [{
      id: 'v4q10r', no: 10,
      prompt: 'Isn\'t the quarterly audit due this week?',
      speakerA: 'M-Br', speakerB: 'W-Am',
      choices: ['Yes, it audits well.', 'I added it to the shared folder.', 'It was pushed back to next month.'],
      answer: 2,
      exp: '否定疑問に Yes / No で答えず、「来月に延期された」という事実を示して「今週ではない」と伝える間接応答。',
      why: ['audit は「〜を監査する」他動詞で、主語が自ら監査する it audits well のような自動詞用法はない。音を反復しただけの選択肢。',
            'audit と added it の音の引っ掛け。何かを共有フォルダに入れたという話で、監査の実施時期については肯定も否定もしていない。',
            '正解。延期という事実を述べることで、今週の予定ではないと間接的に答えている。'],
      ja: '四半期監査は今週の予定ではなかったですか。→ (C) 来月に延期されました。',
      topics: ['p2ind'],
    }] },

  p2(11, { t: ['p2wh'], lv: 4, sa: 'W-Au', sb: 'M-Am',
    p: 'Would you rather review the budget now or after lunch?',
    c: ['Whichever suits you best.', 'Yes, that budget works.', 'The lunch was rescheduled.'],
    a: 0,
    e: '選択疑問に Yes は不可。「どちらでも」と条件で答える応答。',
    w: ['正解。', '選択疑問に Yes は不可。', 'lunch の反復で質問に答えていない。'],
    ja: '予算の確認は今か昼食後のどちらがよいですか。→ (A) どちらでもお任せします。' }),

  p2(12, { t: ['p2ind'], lv: 5, sa: 'M-Cn', sb: 'W-Br',
    p: 'How did the client react to the revised proposal?',
    c: ['They have not responded yet.', 'It was revised twice.', 'The proposal is due Friday.'],
    a: 0,
    e: 'まだ反応を得ていないと間接的に答える応答。',
    w: ['正解。', 'revise の反復。', '期限の話で反応の内容ではない。'],
    ja: 'クライアントは修正した提案書にどう反応しましたか。→ (A) まだ返事がありません。' }),

  p2(13, { t: ['p2ind'], lv: 4, sa: 'W-Am', sb: 'M-Au',
    p: 'Who is covering the reception desk this afternoon?',
    c: ['Around three o\'clock.', 'It covers the whole lobby.', 'Nobody has volunteered yet.'],
    a: 2,
    e: 'Who に対し「まだ誰も名乗り出ていない」と未定であることで間接的に答える。',
    w: ['When への回答。', 'cover の別の意味を使った引っ掛け。', '正解。'],
    ja: '今日の午後、受付は誰が担当しますか。→ (C) まだ誰も名乗り出ていません。' }),

  p2(14, { t: ['p2ind'], lv: 5, sa: 'M-Br', sb: 'W-Cn',
    p: 'The conference call keeps dropping.',
    c: ['Try switching to the landline.', 'It drops off the shelf.', 'The call starts at nine.'],
    a: 0,
    e: '問題提起に対し解決策を示す応答。',
    w: ['正解。', 'drop の別の意味を使った引っ掛け。', '時刻の話で対応になっていない。'],
    ja: '電話会議がまた途切れます。→ (A) 固定電話に切り替えてみてください。' }),

  p2(15, { t: ['p2wh'], lv: 4, sa: 'W-Au', sb: 'M-Am',
    p: 'Didn\'t the printer just get serviced?',
    c: ['Yes, it prints in colour.', 'The service was excellent.', 'That was a different machine.'],
    a: 2,
    e: '否定疑問への訂正応答。「それは別の機械だった」と事実で返している。',
    w: ['print の反復。', 'service の別の意味を使った引っ掛け。', '正解。'],
    ja: 'プリンターは点検を受けたばかりではなかったですか。→ (C) それは別の機械でした。' }),

  p2(16, { t: ['p2ind'], lv: 5, sa: 'M-Cn', sb: 'W-Br',
    p: 'What did the inspector say about the wiring?',
    c: ['He left before saying anything definite.', 'The wiring is copper.', 'Inspections happen quarterly.'],
    a: 0,
    e: '「明言する前に帰ってしまった」と間接的に未確定であることを伝える応答。',
    w: ['正解。', '材質の説明で意見の内容ではない。', '頻度の話で答えになっていない。'],
    ja: '検査官は配線について何と言っていましたか。→ (A) 何も明言せずに帰ってしまいました。' }),

  p2(17, { t: ['p2wh'], lv: 4, sa: 'W-Am', sb: 'M-Br',
    p: 'Is the workshop mandatory, or can employees opt out?',
    c: ['It runs for two hours.', 'Yes, it is very useful.', 'Only new hires must attend.'],
    a: 2,
    e: '選択疑問に「新入社員のみ必須」と条件を示して答える応答。',
    w: ['How long への回答。', '選択疑問に Yes は不可。', '正解。'],
    ja: 'その研修は必須ですか、それとも辞退できますか。→ (C) 新入社員のみ必須です。' }),

  p2(18, { t: ['p2ind'], lv: 5, sa: 'M-Au', sb: 'W-Cn',
    p: 'You submitted the expense report already, didn\'t you?',
    c: ['I am waiting on one receipt.', 'Yes, expenses were high.', 'The report was ten pages.'],
    a: 0,
    e: '付加疑問に対し「領収書 1 枚待ち」と伝えることで未完了であることを間接的に示す。',
    w: ['正解。', 'expense の反復で質問に答えていない。', 'pages の話は無関係。'],
    ja: '経費報告書はもう提出しましたよね。→ (A) 領収書が1枚届くのを待っています。' }),

  p2(19, { t: ['p2wh'], lv: 3, sa: 'W-Br', sb: 'M-Am',
    p: 'Why was the shipment held at customs?',
    c: ['For about a week.', 'It shipped from Rotterdam.', 'A form was missing.'],
    a: 2,
    e: 'Why に理由で答えている。',
    w: ['How long への回答。', '出発地の話で理由ではない。', '正解。'],
    ja: '荷物はなぜ税関で止められたのですか。→ (C) 書類が1枚不足していたためです。' }),

  p2(20, { t: ['p2ind'], lv: 5, sa: 'M-Br', sb: 'W-Am',
    p: 'Has the new hire started using the CRM system yet?',
    c: ['She is still being trained on it.', 'The system was updated last year.', 'Hiring is competitive this year.'],
    a: 0,
    e: '「まだ研修中」と間接的にまだ使っていないことを伝える応答。',
    w: ['正解。', 'システムの更新時期は無関係。', 'hire の反復で質問に答えていない。'],
    ja: '新入社員はもうCRMシステムを使い始めましたか。→ (A) まだ研修を受けているところです。' }),

  p2(21, { t: ['p2wh'], lv: 4, sa: 'W-Au', sb: 'M-Cn',
    p: 'Shouldn\'t the invoices have gone out by now?',
    c: ['Yes, they went out smoothly.', 'The billing software crashed this morning.', 'Invoices are usually monthly.'],
    a: 1,
    e: '否定疑問に対し、システム障害という理由で応答している。',
    w: ['invoice の反復で、遅れている状況と矛盾する。', '正解。', '頻度の話で理由ではない。'],
    ja: '請求書はもう発送されているべきではないですか。→ (B) 今朝、請求ソフトが落ちました。' }),

  p2(22, { t: ['p2ind'], lv: 5, sa: 'M-Am', sb: 'W-Br',
    p: 'Do you know if the merger has been finalized?',
    c: ['It merges two departments.', 'Legal is still drafting the paperwork.', 'The finale was well received.'],
    a: 1,
    e: '「法務がまだ書類を作成中」と未確定であることを伝える応答。',
    w: ['merge の反復。', '正解。', 'finalized と finale の音の引っ掛け。'],
    ja: '合併は正式に決定しましたか。→ (B) 法務がまだ書類を作成中です。' }),

  p2(23, { t: ['p2wh'], lv: 4, sa: 'W-Cn', sb: 'M-Br',
    p: 'Are we meeting in the main hall or the annex?',
    c: ['Yes, the meeting is important.', 'Whichever room is free first.', 'The annex was built last year.'],
    a: 1,
    e: '選択疑問に「先に空いた方」と柔軟に答える応答。',
    w: ['選択疑問に Yes は不可。', '正解。', 'annex の反復で質問に答えていない。'],
    ja: '会議は本館とアネックスのどちらで行いますか。→ (B) 先に空いた方でお願いします。' }),

  p2(24, { t: ['p2ind'], lv: 5, sa: 'M-Au', sb: 'W-Am',
    p: 'The catering order still hasn\'t arrived.',
    c: ['It caters to large groups.', 'The order was placed last week.', 'I will call them right now.'],
    a: 2,
    e: '問題提起に「今すぐ電話する」と対応を約束する応答。',
    w: ['cater の別の意味を使った引っ掛け。', '発注時期は解決策になっていない。', '正解。'],
    ja: 'ケータリングの注文がまだ届いていません。→ (C) 今すぐ電話してみます。' }),

  p2(25, { t: ['p2wh'], lv: 3, sa: 'W-Br', sb: 'M-Cn',
    p: 'How much does the annual maintenance plan cost?',
    c: ['It covers all repairs.', 'About eight hundred a year.', 'Maintenance is scheduled monthly.'],
    a: 1,
    e: 'How much に金額で答えている。',
    w: ['内容の説明で金額ではない。', '正解。', '頻度の話で金額ではない。'],
    ja: '年間保守プランの費用はいくらですか。→ (B) 年間およそ800です。' }),

  p2(26, { t: ['p2ind'], lv: 5, sa: 'M-Br', sb: 'W-Au',
    p: 'Weren\'t you supposed to present at the town hall meeting?',
    c: ['Yes, the hall was full.', 'That got reassigned to Priya.', 'The meeting starts at ten.'],
    a: 1,
    e: '否定疑問に対し、担当が変わったという事実で答える応答。',
    w: ['hall の反復で無関係。', '正解。', '時刻の話で担当者への回答ではない。'],
    ja: '全体会議での発表はあなたの担当ではなかったですか。→ (B) それはプリヤに交代しました。' }),

  p2(27, { t: ['p2wh'], lv: 4, sa: 'W-Am', sb: 'M-Am',
    p: 'What time does the warehouse gate open on Mondays?',
    c: ['About fifty pallets.', 'Six, but deliveries can arrive earlier by arrangement.', 'Yes, it opened this morning.'],
    a: 1,
    e: '時刻を答えたうえで例外の手配にも触れている。',
    w: ['How many への回答。', '正解。', 'What time に Yes は不可。'],
    ja: '月曜日、倉庫のゲートは何時に開きますか。→ (B) 6時ですが、事前調整で早められます。' }),

  p2(28, { t: ['p2ind'], lv: 5, sa: 'M-Cn', sb: 'W-Br',
    p: 'How was the feedback from the pilot users?',
    c: ['Mostly positive, with a few concerns about speed.', 'They flew in from Chicago.', 'The pilot program starts Monday.'],
    a: 0,
    e: '概括で反応を伝える応答。',
    w: ['正解。', 'pilot を操縦士と誤解した引っ掛け。', 'program の話で反応の内容ではない。'],
    ja: '試験導入ユーザーからの反応はどうでしたか。→ (A) おおむね好評ですが、速度への懸念も少しあります。' }),

  p2(29, { t: ['p2wh'], lv: 5, sa: 'W-Au', sb: 'M-Br',
    p: 'Could you send the contract, or should I request it from legal directly?',
    c: ['I will send it within the hour.', 'Yes, please send it.', 'The contract is quite long.'],
    a: 0,
    e: '「あなたが送るか、私が法務に直接依頼するか」という選択疑問に対し、前者を選んで自分が送ると申し出る応答。',
    w: ['正解。1 時間以内に送ると答え、前半の選択肢を選んでいる。',
        '送る役目を負うのは答え手の側なので、答え手が「送ってください」と依頼し返すと役割が入れ替わり、どちらの選択肢を選んだのかも示せない。',
        '契約書の長さの話で、どちらの経路で入手するかという問いに対する情報になっていない。'],
    ja: '契約書を送っていただけますか、それとも法務に直接依頼すべきですか。→ (A) 1時間以内にお送りします。' }),

  p2(30, { t: ['p2ind'], lv: 5, sa: 'M-Am', sb: 'W-Cn',
    p: 'Is the rooftop terrace available for the reception?',
    c: ['It has a nice view.', 'Facilities are checking on that now.', 'The reception starts at six.'],
    a: 1,
    e: '「施設部が確認中」と未確定であることを伝える応答。',
    w: ['眺めの話で可否ではない。', '正解。', '時刻の話で可否ではない。'],
    ja: '屋上テラスはレセプションに使えますか。→ (B) 施設部が今確認しています。' }),

  p2(31, { t: ['p2wh'], lv: 4, sa: 'W-Br', sb: 'M-Au',
    p: 'Hasn\'t the software license already been renewed?',
    c: ['Yes, it renews automatically.', 'Finance is holding it for budget reasons.', 'The software runs smoothly.'],
    a: 1,
    e: '否定疑問に対し、財務部が保留している事実で応答している。',
    w: ['renew の反復で、保留中という状況と矛盾する。', '正解。', '動作状況の話で更新の可否ではない。'],
    ja: 'ソフトウェアのライセンスはもう更新されたのではないですか。→ (B) 予算の都合で財務部が保留しています。' }),
];
