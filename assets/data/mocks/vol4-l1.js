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
      'A teller is stamping a form at the counter.',
      'A sign is being posted on a wall.',
      'An employee is unlocking a side door.',
    ],
    a: 0,
    e: 'カウンターを挟んで二人が向き合っている位置関係。Part 1 では動作だけでなく、こうした人物どうしの位置関係を述べた選択肢も正解になる。',
    w: ['正解。', '押印している動作は確認できない。', '掲示している人はいない。', '施錠・解錠の動作も写っていない。'],
    ja: [
      '(A) 二人がカウンターを挟んで向かい合っている。',
      '(B) 窓口係がカウンターで書類に押印している。',
      '(C) 掲示が壁に貼られているところだ。',
      '(D) 従業員が脇のドアの鍵を開けている。',
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
      'Two workers are taking down the awning over the stall.',
      'A cart is blocking the walkway.',
    ],
    a: 0,
    e: '露店の脇で荷物を抱えている人物の姿。手が箱に掛かっているので carry と言える。日よけ自体は絵に描かれているが、それに手をかけている人物はいないので、外す動作を述べた選択肢は選べない。台車のように絵に無いものを持ち出した選択肢も同様。',
    w: ['正解。', '商品に触れて並べている様子は確認できない。', '日よけに手をかけている人物はいない。', '台車は写っていない。'],
    ja: [
      '(A) 人物が露店の脇で品物を抱えている。',
      '(B) 店主が台の上に果物を並べている。',
      '(C) 二人の作業員が露店の上の日よけを外している。',
      '(D) 台車が通路をふさいでいる。',
    ],
  }),

  p1(5, {
    scene: 'train-platform', sp: 'M-Br', lv: 4,
    c: [
      'A train is pulling into the station.',
      'Tickets are being checked at a gate by an inspector.',
      'Passengers are waiting on a platform beside a train.',
      'A platform is being repaired by workers.',
    ],
    a: 2,
    e: '列車のそばのホームで乗客が待っている位置関係。車体はホームと平行に停まった状態で描かれており、進入中かどうかを判断できる手がかりが無い。読み取れるのは「列車がホームに着いている」という状態までで、進行中の移動を断定する選択肢は選べない。',
    w: ['車体はホームと平行に停まった状態で描かれており、いま進入している途中だと述べる手がかりが無い。到着し終えた状態（has pulled into）なら読み取れる。',
        '改札の場面はない。', '正解。', '補修工事の様子はない。'],
    ja: [
      '(A) 列車が駅に進入している。',
      '(B) 改札で係員によって切符が確認されているところだ。',
      '(C) 乗客が列車のそばのホームで待っている。',
      '(D) 作業員によってホームが補修されているところだ。',
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
    c: ['At the downtown convention venue.', 'No, it wasn\'t demonstrated.', 'Around forty, based on RSVPs.'],
    a: 2,
    e: 'How many に人数で答えている。',
    w: ['Where への回答。', 'demo の反復。実演されたかどうかを答えているだけで、人数には触れていない。', '正解。'],
    ja: '製品デモの出席予定人数はどのくらいですか。→ (C) 出欠確認によるとおよそ40名です。' }),

  p2(8, { t: ['p2ind'], lv: 5, sa: 'M-Am', sb: 'W-Au',
    p: 'Did the vendor confirm the delivery date?',
    c: ['They used a courier.', 'The vendor\'s head office is in Leeds.', 'I am still waiting to hear back.'],
    a: 2,
    e: '「まだ返事待ち」と間接的に未確定であることを伝える応答。',
    w: ['配送方法の話で質問に答えていない。', '所在地の話で確認の可否ではない。', '正解。'],
    ja: '業者は配送日を確認しましたか。→ (C) まだ返事待ちです。' }),

  p2(9, { t: ['p2wh'], lv: 4, sa: 'W-Br', sb: 'M-Cn',
    p: 'Where did you leave the master key?',
    c: ['It does not fit the side door.', 'On the hook by the fire exit.', 'Yes, I found it.'],
    a: 1,
    e: 'Where に場所で答えている。',
    w: ['It が指すのは master key だが、その鍵がどの扉に合うかという事柄は、"Where did you leave the master key?" が求めている置き場所とは論理的に独立で、場所を答えていない。', '正解。', 'Where に Yes は不可。'],
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
    c: ['Whichever suits you best.', 'Yes, that budget works.', 'The lunch time changed.'],
    a: 0,
    e: '「今」か「昼食後」かを問う選択疑問。or の後ろは共通の Would you rather review the budget に掛かる時の句なので、Yes で始めてもどちらを選んだことになるのかは決まらない。正解は判断を相手に委ねる応答。',
    w: ['正解。', 'Yes だけではどちらを選んだのか決まらない。budget の反復で、予算そのものが妥当だという内容も時期の二択に触れていない。', 'lunch の反復。昼食の日程が動いたという事実は、確認を今にするか後にするかのどちらとも両立する（時間がずれても「昼食後」という選択肢は残る）。'],
    ja: '予算の確認は今か昼食後のどちらがよいですか。→ (A) どちらでもお任せします。' }),

  p2(12, { t: ['p2ind'], lv: 5, sa: 'M-Cn', sb: 'W-Br',
    p: 'How did the client react to the revised proposal?',
    c: ['They have not responded yet.', 'It went through two revisions.', 'The proposal is due Friday.'],
    a: 0,
    e: 'まだ反応を得ていないと間接的に答える応答。',
    w: ['正解。', 'revise の反復。', '期限の話で反応の内容ではない。'],
    ja: 'クライアントは修正した提案書にどう反応しましたか。→ (A) まだ返事がありません。' }),

  p2(13, { t: ['p2ind'], lv: 4, sa: 'W-Am', sb: 'M-Au',
    p: 'Who is covering the reception desk this afternoon?',
    c: ['Around three o\'clock.', 'It doesn\'t cover the whole lobby.', 'Nobody has volunteered yet.'],
    a: 2,
    e: 'Who に対し「まだ誰も名乗り出ていない」と未定であることで間接的に答える。',
    w: ['When への回答。', 'cover の別の意味を使った引っ掛け。担当範囲を否定しているだけで、誰が受付を担当するかには触れていない。', '正解。'],
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
    c: ['He left before saying anything definite.', 'The wiring diagrams are filed in the site office.', 'Inspections are carried out every three months.'],
    a: 0,
    e: '「明言する前に帰ってしまった」と間接的に未確定であることを伝える応答。',
    w: ['正解。', '図面の保管場所の話で、検査官が述べた内容ではない。', '頻度の話で答えになっていない。'],
    ja: '検査官は配線について何と言っていましたか。→ (A) 何も明言せずに帰ってしまいました。' }),

  p2(17, { t: ['p2wh'], lv: 4, sa: 'W-Am', sb: 'M-Br',
    p: 'Is the workshop mandatory, or can employees opt out?',
    c: ['It runs for two hours each morning.', 'The workshop is led by an outside consultant.', 'Only new hires must attend.'],
    a: 2,
    e: '「必須か、辞退できるか」を問う選択疑問。対象を新入社員に限ることで、新入社員には必須・それ以外は辞退できる、と二択の両方に答えている。',
    w: ['How long への回答。研修の長さは、必須かどうかの二択とは独立している。', 'workshop の反復。誰が講師を務めるかという話で、出席が必須かどうかには触れていない。', '正解。'],
    ja: 'その研修は必須ですか、それとも辞退できますか。→ (C) 新入社員のみ必須です。' }),

  p2(18, { t: ['p2ind'], lv: 5, sa: 'M-Au', sb: 'W-Cn',
    p: 'You submitted the expense report already, didn\'t you?',
    c: ['I am waiting on one receipt.', 'Yes, expenses were high across every department.', 'The report ran to ten pages in the end.'],
    a: 0,
    e: '付加疑問に対し「領収書 1 枚待ち」と伝えることで未完了であることを間接的に示す。',
    w: ['正解。', 'expense の反復で質問に答えていない。', 'pages の話は無関係。'],
    ja: '経費報告書はもう提出しましたよね。→ (A) 領収書が1枚届くのを待っています。' }),

  p2(19, { t: ['p2wh'], lv: 3, sa: 'W-Br', sb: 'M-Am',
    p: 'Why was the shipment held at customs?',
    c: ['For about a week.', 'It shipped from Rotterdam on Tuesday.', 'A form was missing.'],
    a: 2,
    e: 'Why に理由で答えている。',
    w: ['How long への回答。', '出発地と日付の話で理由ではない。', '正解。'],
    ja: '荷物はなぜ税関で止められたのですか。→ (C) 書類が1枚不足していたためです。' }),

  p2(20, { t: ['p2ind'], lv: 5, sa: 'M-Br', sb: 'W-Am',
    p: 'Has the new hire started using the CRM system yet?',
    c: ['She is still being trained on it.', 'The system was updated late last year.', 'Hiring is competitive this year.'],
    a: 0,
    e: '「まだ研修中」と間接的にまだ使っていないことを伝える応答。',
    w: ['正解。', 'システムの更新時期は無関係。', 'hire の反復で質問に答えていない。'],
    ja: '新入社員はもうCRMシステムを使い始めましたか。→ (A) まだ研修を受けているところです。' }),

  p2(21, { t: ['p2wh'], lv: 4, sa: 'W-Au', sb: 'M-Cn',
    p: 'Shouldn\'t the invoices have gone out by now?',
    c: ['The invoice template uses the new company logo.', 'The billing software crashed this morning.', 'Invoices are usually sent out each month.'],
    a: 1,
    e: '否定疑問に対し、システム障害という理由で応答している。',
    w: ['invoice の反復。書式の見た目の話で、発送済みかどうかには触れていない。', '正解。', '頻度の話で理由ではない。毎月出すという周期だけでは今月分の締めを過ぎたかどうかが決まらず、発送済みかどうかの答えにならない。'],
    ja: '請求書はもう発送されているべきではないですか。→ (B) 今朝、請求ソフトが落ちました。' }),

  /* id は v4q22r（no は模試の通し番号として 22 を維持するが、正解の選択肢を差し替えたため
     設問 id は新規採番。旧 id v4q22 を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     旧 (B) Legal is still drafting the paperwork. は、vol2-l1.js No.8 の正解
     'Legal is still reviewing it.' と「法務がまだ〜している＝未確定」という装置が同一で、
     全巻照合（機械照合＋通読）により重複と判定されたため差し替えた（2026-08-24）。
     新しい正解は「話自体が先週白紙になった」という確定した事実で応答する型に変えてあり、
     「まだ決まっていない」という未確定型ではなく「結論が出た（不成立）」という別の装置になる。
     誤答2つは元のまま使用（(A) は merger の定義を述べるだけで完了の有無に触れておらず、
     (C) は finalized / finale の音の引っ掛けで、いずれも装置の重複とは無関係だったため）。
     p2() ヘルパーは id を no から自動生成し、no を変えずに id だけ変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v4-p2-22r', part: 2, kind: 'p2', topics: ['p2ind'], level: 5,
    questions: [{
      id: 'v4q22r', no: 22,
      prompt: 'Do you know if the merger has been finalized?',
      speakerA: 'M-Am', speakerB: 'W-Br',
      choices: ['It merges two departments.', 'It fell through last week.', 'The finale was well received.'],
      answer: 1,
      exp: 'Do you know if ... ? は形の上では「知っているか」を尋ねる Yes/No 疑問だが、実際に求められているのは埋め込み節の中身、つまり合併が正式に決まったのかどうか。ここに Yes/No を置かず事実だけで答えるのが間接応答。fall through は取引・合意・計画が成立せずに流れることをいう句動詞で（Longman は if an agreement, plan, sale etc falls through, it is not completed successfully と定義）、merger のような取り決めを主語に取る。「先週流れた」と言えば、正式決定には至らなかったことがそのまま伝わる。',
      why: [
        '設問の merger と語幹を共有する merges を使った引っ掛け。述べているのは合併の中身（何と何を統合するか）で、これは正式決定の前でも後でも等しく言える内容。つまり、問われている「決定済み」と「未決定」のどちらの状態とも両立してしまい、状態を区別する情報を何も足していない。',
        '正解。It は the merger を受け、「先週流れた」と合併そのものの結末を述べている。fall through した以上、正式決定には至らなかったことが確定するので、Yes/No を使わずに問いへの答えが出ている。',
        'finalized と音の近い finale（公演などの最終幕）を使った音の引っ掛け。しかも the finale と定冠詞で受けているのに、この対話にはその最終幕が指しうるものが一つも出てきていない。指示対象を欠くので、応答として立たない。',
      ],
      ja: '合併が正式に決まったかどうか、ご存じですか。→ (B) 先週、その話は流れました。',
      topics: ['p2ind'],
    }] },

  p2(23, { t: ['p2wh'], lv: 4, sa: 'W-Cn', sb: 'M-Br',
    p: 'Are we meeting in the main hall or the annex?',
    c: ['Yes, the meeting is important.', 'Whichever room is free first.', 'The annex was built last year.'],
    a: 1,
    e: '「本館か、アネックスか」を問う選択疑問。or の後ろは共通の Are we meeting in に掛かる名詞句なので、Yes で始めてもどちらを選んだことになるのかは決まらない。正解は「先に空いた方」と条件で答えている。',
    w: ['Yes だけではどちらを選んだのか決まらない。meeting の反復で、会議が重要だという内容も場所の二択に触れていない。', '正解。', 'annex の反復。いつ建てられたかは、どちらの部屋で会うかという二択と論理的に独立している。'],
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
    c: ['It covers all repairs, replacement parts, and labour.', 'About eight hundred a year.', 'Maintenance is carried out without notice.'],
    a: 1,
    e: 'How much に金額で答えている。',
    w: ['内容の説明で金額ではない。', '正解。', 'maintenance の反復。予告の有無という別の事柄を否定しているだけで、How much が求める金額には答えていない。'],
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
    c: ['No pallets arrived today.', 'Six, but deliveries can arrive earlier by arrangement.', 'Yes, it opened this morning.'],
    a: 1,
    e: '時刻を答えたうえで例外の手配にも触れている。',
    w: ['荷の数を否定した文で、How many への回答にあたる。What time が求める開門時刻には答えていない。', '正解。', 'What time に Yes は不可。'],
    ja: '月曜日、倉庫のゲートは何時に開きますか。→ (B) 6時ですが、事前調整で早められます。' }),

  p2(28, { t: ['p2ind'], lv: 5, sa: 'M-Cn', sb: 'W-Br',
    p: 'How was the feedback from the pilot users?',
    c: ['Mostly positive, with a few concerns about speed.', 'They flew in from Chicago.', 'The pilot program included forty of our customers.'],
    a: 0,
    e: '概括で反応を伝える応答。',
    w: ['正解。', 'pilot を操縦士と誤解した引っ掛け。', 'program の話で反応の内容ではない。'],
    ja: '試験導入ユーザーからの反応はどうでしたか。→ (A) おおむね好評ですが、速度への懸念も少しあります。' }),

  p2(29, { t: ['p2wh'], lv: 5, sa: 'W-Au', sb: 'M-Br',
    p: 'Could you send the contract, or should I request it from legal directly?',
    c: ['I will send it within the hour.', 'Yes, please send it.', 'The contract includes an appendix on pricing.'],
    a: 0,
    e: '「あなたが送るか、私が法務に直接依頼するか」という選択疑問に対し、前者を選んで自分が送ると申し出る応答。',
    w: ['正解。1 時間以内に送ると答え、前半の選択肢を選んでいる。',
        '応答自体が矛盾している。Yes が前半の Could you send the contract に掛かるなら答え手が送る側になるが、続く please send it は相手に送るよう頼む命令文で、送る側を相手に移してしまう。Yes が後半の should I request it from legal に掛かる場合も、契約書を求めているのは尋ねた側なので、その相手に「送ってください」と頼むことはできない。',
        '契約書の中身の説明で、どちらの経路で入手するかという問いに対する情報になっていない。'],
    ja: '契約書を送っていただけますか、それとも法務に直接依頼すべきですか。→ (A) 1時間以内にお送りします。' }),

  p2(30, { t: ['p2ind'], lv: 5, sa: 'M-Am', sb: 'W-Cn',
    p: 'Is the rooftop terrace available for the reception?',
    c: ['It has a view over the harbour.', 'Facilities are checking on that now.', 'The reception starts at six with a short speech.'],
    a: 1,
    e: '「施設部が確認中」と未確定であることを伝える応答。',
    w: ['眺めの話で可否ではない。', '正解。', '時刻の話で可否ではない。'],
    ja: '屋上テラスはレセプションに使えますか。→ (B) 施設部が今確認しています。' }),

  p2(31, { t: ['p2wh'], lv: 4, sa: 'W-Br', sb: 'M-Au',
    p: 'Hasn\'t the software license already been renewed?',
    c: ['Our license covers fifty workstations.', 'Finance is holding it for budget reasons.', 'The software runs on the older machines as well.'],
    a: 1,
    e: '否定疑問に対し、財務部が保留している事実で応答している。',
    w: ['license の反復。利用範囲の話で、更新されたかどうかには触れていない。', '正解。', '動作状況の話で更新の可否ではない。'],
    ja: 'ソフトウェアのライセンスはもう更新されたのではないですか。→ (B) 予算の都合で財務部が保留しています。' }),
];
