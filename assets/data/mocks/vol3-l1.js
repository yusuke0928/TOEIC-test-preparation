/* =============================================================
   予想模試 Vol.3 — Part 1（No.1–6）／ Part 2（No.7–31）
   ============================================================= */

const p1 = (no, o) => ({
  id: `v3-p1-${no}`, part: 1, kind: 'p1', topics: o.t || ['p1verb'], level: o.lv ?? 4,
  scene: o.scene, speaker: o.sp || 'W-Am',
  questions: [{ id: `v3q${no}`, no, choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, topics: o.t || ['p1verb'] }],
});

const p2 = (no, o) => ({
  id: `v3-p2-${no}`, part: 2, kind: 'p2', topics: o.t || ['p2ind'], level: o.lv ?? 5,
  questions: [{
    id: `v3q${no}`, no, prompt: o.p, speakerA: o.sa || 'M-Am', speakerB: o.sb || 'W-Br',
    choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, topics: o.t || ['p2ind'],
  }],
});

export const L1 = [

  /* ══════════ PART 1 ══════════ */
  p1(1, {
    scene: 'bank-teller', sp: 'M-Br', lv: 3,
    c: [
      'A window is being cleaned.',
      'A queue has formed at the entrance.',
      'Money is being counted into a tray.',
      'A customer is handing over a document.',
    ],
    a: 3,
    e: 'カウンター越しに書類を渡している客の動作。人物の動作が写真で確認できる選択肢を選ぶ。',
    w: ['窓の清掃も行われていない。', '行列は写っていない。', '現金を数えている様子はない。', '正解。'],
    ja: [
      '(A) 窓が清掃されているところだ。',
      '(B) 入口に行列ができている。',
      '(C) お金がトレーに数え入れられているところだ。',
      '(D) 客が書類を手渡している。',
    ],
  }),

  /* id は v3q2r（no は模試の通し番号として 2 を維持するが、正解の選択肢を差し替えたため
     設問 id は新規採番。旧 id v3q2 を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     旧版の正解は 'A worker is reaching toward a stack of cartons.' だったが、factory の
     作業員の腕は肩(298,142)→手(312,185)で水平から 72°＝ほぼ真下を向いており、最寄りの
     箱の角(330,196)の方向（同 31°）とは 40°以上ずれている。手と箱の距離 21 は SPEC②の
     非接触（14 以上）にあたり、コンベヤ右端(300,204)までの距離 22 とほぼ等しいので、
     どちらへ手を伸ばしているとも言えない。544px の light / dark で実描画したところ
     「片腕を下ろして立っている作業員」にしか見えず、reach の根拠が絵の中に無かった
     （2026-08-18）。scenes.js の場面コメントも「reach / hand / grasp を根拠にする
     正解文はこの場面では作らないこと」としている。
     一方、箱は床線 y=236 の上に 2 個（x330・x374）並び、その上に 1 個（x352, y172）が
     載っており、「床に積まれている」ことは幾何的に確実。正解をその状態へ寄せる。
     コンベヤ（x140〜300, y204〜214）の上には何も置かれていないので、「箱がベルトの上に
     置かれている」型の誤答は物の位置だけで切れる。
     p1() ヘルパーは id を no から自動生成し、no を変えずに id だけ変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v3-p1-2r', part: 1, kind: 'p1', topics: ['p1verb'], level: 4,
    scene: 'factory', speaker: 'W-Au',
    questions: [{
      id: 'v3q2r', no: 2,
      choices: [
        'Cartons have been stacked on the floor.',
        'A worker is reaching into a carton.',
        'A machine is being dismantled.',
        'Boxes have been placed on a conveyor belt.',
      ],
      answer: 0,
      exp: '床の上に段ボール箱が 2 個並び、その上にもう 1 個載っている。完了の受動態 have been stacked は「積み終わった結果の状態」を表すので、動作主が写っていなくても成り立つ。誤答はそれぞれ別の理由で落ちる——手の位置（作業員は箱に触れていない）、動作主の不在（機械に手を掛けている人がいない）、物の位置（コンベヤの上には何も載っていない）。',
      why: [
        '正解。床の上に箱が 2 個並び、その上に 1 個載っている。積み終わった状態なので完了の受動態で述べられる。',
        '作業員の腕は体の脇に下りたままで、手は最寄りの箱から離れている。箱に手を差し入れてはいない。',
        '機械に手を掛けている人物はおらず、機械も分解されていない。is being dismantled は、その作業をしている人が写っていなければ選べない。',
        'コンベヤはローラーが見えているだけで、上には何も載っていない。箱が置かれているのは床の上である。',
      ],
      ja: [
        '(A) 段ボール箱が床に積み重ねられている。',
        '(B) 作業員が段ボール箱に手を差し入れている。',
        '(C) 機械が解体されているところだ。',
        '(D) 箱がベルトコンベヤの上に置かれている。',
      ],
      topics: ['p1verb'],
    }],
  },

  p1(3, {
    scene: 'hotel-lobby', sp: 'M-Cn', lv: 4,
    c: [
      'Suitcases are being loaded onto a trolley.',
      'A person is carrying a box in the lobby.',
      'A plant is being watered.',
      'The reception counter is unattended.',
    ],
    a: 1,
    e: 'ロビーで箱を抱えている人物の動作。カウンターの内側には係員が立っているため、「無人」とする描写は写真と矛盾する。',
    w: ['台車への積み込み作業は写っていない。', '正解。', '水やりの動作もない。', 'カウンターの内側に係員が立っている。'],
    ja: [
      '(A) スーツケースが台車に積み込まれているところだ。',
      '(B) 人物がロビーで箱を抱えている。',
      '(C) 植物に水が撒かれているところだ。',
      '(D) 受付カウンターには誰もいない。',
    ],
  }),

  /* id は v3q4r（no は模試の通し番号として 4 を維持するが、正解の選択肢を差し替えたため
     設問 id は新規採番。旧 id v3q4 を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     旧版の正解は 'Pedestrians are crossing the road.' だったが、crosswalk の 3 人は
     figure() の stand 姿勢——膝はほぼ直線、左右の足が同じ y(=236) で接地、腕は一本も
     描かれていない——で置かれており、歩行（＝移動）の手掛かりが絵の中に一つも無い。
     544px の light / dark で実描画して確認した（2026-08-18）。同じ場面を使う Vol.6 No.6 が
     「歩行者が並んで立っている」を正解にしていたため、1 枚の絵に矛盾する正解が 2 つ
     存在していた。幾何的な根拠がある「立っている」側へ寄せ、正解文からは移動の含意を外す。
     p1() ヘルパーは id を no から自動生成し、no を変えずに id だけ変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v3-p1-4r', part: 1, kind: 'p1', topics: ['p1verb'], level: 4,
    scene: 'crosswalk', speaker: 'W-Br',
    questions: [{
      id: 'v3q4r', no: 4,
      choices: [
        'A traffic light is being repaired.',
        'Three people are standing side by side.',
        'Cars have stopped at an intersection.',
        'A cyclist is waiting on the pavement.',
      ],
      answer: 1,
      exp: '3 人とも膝が伸びたまま両足を同じ高さで接地しており、踏み出している足は無い。写真から確実に読み取れるのは「3 人が横に並んで立っている」という状態だけで、信号機・車・自転車はいずれも写っていない。',
      why: [
        '信号機そのものが写っておらず、修理をしている作業員も道具も描かれていない。is being repaired は、その作業をしている人が写真に写っていなければ選べない。',
        '正解。同じ高さの地面に 3 人が等間隔で並んで立っている。',
        '車は 1 台も写っていない。',
        '自転車も、自転車に乗る人も写っていない。',
      ],
      ja: [
        '(A) 信号機が修理されているところだ。',
        '(B) 3 人が横に並んで立っている。',
        '(C) 車が交差点で止まっている。',
        '(D) 自転車利用者が歩道で待っている。',
      ],
      topics: ['p1verb'],
    }],
  },

  p1(5, {
    scene: 'photographer', sp: 'M-Am', lv: 5,
    c: [
      'A photograph is being taken outdoors.',
      'A camera is being mounted on a tripod.',
      'Trees are being trimmed.',
      'A path has been closed off.',
    ],
    a: 0,
    e: 'カメラを構えている人物がおり、撮影という動作が進行中。is being taken は動作主が写真に写っているので成立する。',
    w: ['正解。', '三脚は写っていない。', '剪定の作業はない。', '通行止めの様子もない。'],
    ja: [
      '(A) 屋外で写真が撮られているところだ。',
      '(B) カメラが三脚に取り付けられているところだ。',
      '(C) 木々が剪定されているところだ。',
      '(D) 通路が閉鎖されている。',
    ],
  }),

  p1(6, {
    scene: 'airport', sp: 'W-Am', lv: 5,
    c: [
      'Passengers are boarding an aircraft.',
      'A bench has been left unoccupied.',
      'A suitcase is standing upright on the floor.',
      'Departure information is being updated.',
    ],
    a: 2,
    e: 'スーツケースは床に立てられたままで、誰も手を掛けていない。この写真で選べるのは状態を述べた (C) だけ。is being + 過去分詞は「今まさに誰かが行っている」ことを表すので、その動作主が写っていなければ選べない。直前の設問と対にして確認しておきたい。',
    w: ['搭乗の場面ではない。', 'ベンチには人が座っている。', '正解。', '案内表示を更新している人はいない。'],
    ja: [
      '(A) 乗客が飛行機に搭乗している。',
      '(B) ベンチが空いたままになっている。',
      '(C) スーツケースが床にまっすぐ立っている。',
      '(D) 出発案内が更新されているところだ。',
    ],
  }),

  /* ══════════ PART 2 ══════════ */
  p2(7, { t: ['p2wh'], lv: 3, sa: 'W-Am', sb: 'M-Br',
    p: 'What time does the courier normally collect?',
    c: ['Around half past four.', 'From the loading bay.', 'Yes, they came yesterday.'],
    a: 0,
    e: 'What time に時刻で答えている。',
    w: ['正解。', 'Where への答え。', 'What time に Yes は不可。'],
    ja: '宅配業者はいつも何時ごろ集荷しますか。→ (A) 4 時半ごろです。' }),

  p2(8, { t: ['p2ind'], lv: 5, sa: 'M-Am', sb: 'W-Au',
    p: 'Should we advertise the position externally?',
    c: ['The advertisement was well designed.', 'Have we exhausted the internal list?', 'Our external walls need repainting.'],
    a: 1,
    e: '提案に対して質問で返す応答。判断の前提を確認している。',
    w: ['advertise の反復。広告の出来ばえの話で、社外に出すかどうかには触れていない。', '正解。', 'externally と重なる external を、外壁という別の意味で使った引っ掛け。塗り替えが要るかどうかは公募するかどうかと無関係。'],
    ja: 'この職は社外にも公募すべきでしょうか。→ (B) 社内の候補は出尽くしましたか。' }),

  p2(9, { t: ['p2ind'], lv: 5, sa: 'W-Br', sb: 'M-Cn',
    p: 'How was the site visit yesterday?',
    c: ['The site is near Doncaster, just off the motorway.', 'By car, about an hour.', 'I wasn\'t able to go in the end.'],
    a: 2,
    e: '感想を求められて「結局行けなかった」と答えられない事情を述べる間接応答。',
    w: ['site の反復。所在地を答えているだけで、視察がどうだったかという感想には触れていない。', 'How を手段と誤解した引っ掛け。', '正解。'],
    ja: '昨日の現地視察はどうでしたか。→ (C) 結局行けなかったんです。' }),

  p2(10, { t: ['p2wh'], lv: 4, sa: 'M-Br', sb: 'W-Am',
    p: 'Where do I return the projector remote?',
    c: ['To the AV cupboard on level two.', 'It projects quite clearly onto the far screen.', 'About two hours ago, before the client meeting started downstairs.'],
    a: 0,
    e: 'Where に場所で答えている。',
    w: ['正解。', 'project の反復。', 'When への答え。'],
    ja: 'プロジェクターのリモコンはどこへ返せばよいですか。→ (A) 2 階の AV 保管庫です。' }),

  p2(11, { t: ['p2ind'], lv: 5, sa: 'W-Au', sb: 'M-Am',
    p: 'Are these figures final?',
    c: ['About twelve pages, including the two appendices.', 'Yes, we finished at five.', 'The finance team is still reconciling.'],
    a: 2,
    e: '「財務チームがまだ照合中」＝まだ確定していない、と間接的に答えている。',
    w: ['How many への答え。', 'final と finish の音の引っ掛け。', '正解。'],
    ja: 'これらの数値は確定版ですか。→ (C) 財務チームがまだ照合しています。' }),

  p2(12, { t: ['p2wh'], lv: 4, sa: 'M-Cn', sb: 'W-Br',
    p: 'Weren\'t you going to take the early train?',
    c: ['I changed it to the eight fifteen.', 'They arrived early for the briefing.', 'Trains run every twenty minutes on that branch line.'],
    a: 0,
    e: '否定疑問に Yes / No を使わず、変更した事実を述べて答えている。',
    w: ['正解。', 'early の反復。早く着いたのは別の人たちで、話し手が早い列車に乗る予定だったかどうかには触れていない。', 'train の反復。運行間隔を答えているだけで、予定を変えたかどうかには触れていない。'],
    ja: '早い列車に乗る予定ではなかったですか。→ (A) 8 時 15 分に変更しました。' }),

  p2(13, { t: ['p2ind'], lv: 5, sa: 'W-Am', sb: 'M-Au',
    p: 'The photocopier is jamming on double-sided again.',
    c: ['I copied it twice.', 'Single-sided still works.', 'It\'s on the second floor.'],
    a: 1,
    e: '不具合の報告に対し、使える機能を示して当面の対応策を提示する応答。',
    w: ['copy の反復。', '正解。', '場所を答えており、報告への応答になっていない。'],
    ja: '複合機がまた両面印刷で紙詰まりします。→ (B) 片面ならまだ使えますよ。' }),

  p2(14, { t: ['p2wh'], lv: 5, sa: 'M-Am', sb: 'W-Br',
    p: 'Do you want the summary before the meeting or during it?',
    c: ['Yes, the summary was useful.', 'Before, if you can manage it.', 'It summarises the third quarter.'],
    a: 1,
    e: '「会議の前」か「会議の最中」かを問う選択疑問。or が結んでいるのは before the meeting と during it の 2 つの時を表す句で、要約を渡すこと自体は両案に共通している。正解は Before と一方を名指しし、可能ならという条件を添えている。',
    w: ['要約が役に立ったという過去の感想。役に立ったかどうかは、会議の前に渡しても最中に渡しても同じように言えることで、これから渡す要約をいつ受け取りたいかという二択とは無関係。', '正解。前にしてほしいと一方を名指しし、可能ならという条件を添えている。', 'summary の反復。要約の中身を説明しているだけで、受け取る時点の二択には触れていない。'],
    ja: '要約は会議の前と最中のどちらがよいですか。→ (B) 可能なら前にお願いします。' }),

  p2(15, { t: ['p2ind'], lv: 5, sa: 'W-Br', sb: 'M-Cn',
    p: 'Who normally orders the laboratory gloves?',
    c: ['Whoever notices they\'re low.', 'About four boxes a month.', 'Yes, the order arrived.'],
    a: 0,
    e: '担当者を尋ねられて「気づいた人が」と、決まっていないことを示す間接応答。',
    w: ['正解。', 'How many への答え。', 'Who に Yes は不可。'],
    ja: '実験用手袋はいつも誰が注文しているのですか。→ (A) 残り少ないと気づいた人が、という感じです。' }),

  p2(16, { t: ['p2wh'], lv: 4, sa: 'M-Br', sb: 'W-Au',
    p: 'How often does the fire alarm get tested?',
    c: ['Every Wednesday at eleven.', 'On the ground floor.', 'It was quite loud.'],
    a: 0,
    e: 'How often に頻度で答えている。',
    w: ['正解。', 'Where への答え。', '感想であって頻度ではない。'],
    ja: '火災報知器はどのくらいの頻度で点検されますか。→ (A) 毎週水曜の 11 時です。' }),

  p2(17, { t: ['p2ind'], lv: 5, sa: 'W-Au', sb: 'M-Am',
    p: 'Could you look over the tender documents before Thursday?',
    c: ['They tendered last year as well.', 'How long are they?', 'On Thursday morning.'],
    a: 1,
    e: '依頼に対して分量を確認する質問で返す応答。承諾の可否を判断するための問い返し。',
    w: ['tender の反復。', '正解。', 'When への答えで、依頼への応答になっていない。'],
    ja: '木曜までに入札書類に目を通していただけますか。→ (B) どれくらいの分量ですか。' }),

  p2(18, { t: ['p2wh'], lv: 5, sa: 'M-Cn', sb: 'W-Br',
    p: 'You\'re the one who set up the shared calendar, aren\'t you?',
    c: ['It calendars the whole year.', 'Yes, we all share it.', 'That was Marcelo, actually.'],
    a: 2,
    e: '付加疑問による確認に対し、事実を訂正する応答。',
    w: ['意味を成さない語の引っ掛け。', 'share の反復。', '正解。'],
    ja: '共有カレンダーを設定したのはあなたですよね。→ (C) 実はマルセロです。' }),

  p2(19, { t: ['p2ind'], lv: 5, sa: 'W-Am', sb: 'M-Br',
    p: 'Why has the delivery been split into two?',
    c: ['Into the north entrance.', 'One item was on back order.', 'The delivery came on Tuesday.'],
    a: 1,
    e: '理由を尋ねられ、入荷待ちの品があったという原因を答えている。',
    w: ['Where への答え。', '正解。', 'deliver の反復。理由になっていない。'],
    ja: 'なぜ納品が 2 回に分かれたのですか。→ (B) 1 点が入荷待ちだったためです。' }),

  p2(20, { t: ['p2ind'], lv: 5, sa: 'M-Am', sb: 'W-Au',
    p: 'Has anyone booked the minibus for the site tour?',
    c: ['It seats sixteen.', 'The tour lasts three hours.', 'I assumed Priya had.'],
    a: 2,
    e: '「プリヤがやったものと思っていた」＝確認できていない、という間接応答。誰も手配していない可能性を示唆する。',
    w: ['車両の情報であって質問の答えではない。', 'tour の反復。', '正解。'],
    ja: '現地見学のマイクロバスは誰か予約しましたか。→ (C) プリヤがやったものと思っていました。' }),

  p2(21, { t: ['p2wh'], lv: 4, sa: 'W-Br', sb: 'M-Cn',
    p: 'Which entrance should the contractors use?',
    c: ['Four of them are coming.', 'Between eight and ten.', 'The one on Wharf Street.'],
    a: 2,
    e: 'Which に特定の入口で答えている。',
    w: ['How many への答え。', 'When への答え。', '正解。'],
    ja: '業者はどちらの入口を使えばよいですか。→ (C) ワーフ通り側です。' }),

  p2(22, { t: ['p2ind'], lv: 5, sa: 'M-Br', sb: 'W-Am',
    p: 'I thought the workshop was fully booked.',
    c: ['Two people dropped out this morning.', 'The workshop\'s on the fourth floor.', 'Bookings closed early last year.'],
    a: 0,
    e: '平叙文による前提に対し、状況が変わったことを伝えて訂正する応答。',
    w: ['正解。', '場所を答えており、前提への応答になっていない。', 'book の反復。予約が締め切られたのは昨年の話で、今朝の欠員の有無には触れていない。'],
    ja: 'ワークショップは満席だと思っていました。→ (A) 今朝 2 名がキャンセルしました。' }),

  /* id は v3q23r（no は模試の通し番号として 23 を維持するが、誤答 2 つを差し替えたため
     設問 id は新規採番。旧 id v3q23 を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     差し替えの理由（2026-08-28）:
     1) 旧 (A) 'Yes, please do.' は「選択疑問に Yes は構造的に不可」を排除根拠にしていたが、
        この規則は 2026-08-24 に誤りと確定している（経緯は vol5-l1.js の v5q9r の注釈に記録）。
        しかもこの prompt は or の後ろ will you handle it? が独立した節なので、Yes は前半の
        Do you want me to reprint the labels? に掛かり、「はい、刷り直してください」と第一案を
        明確に選ぶ完全な応答になっていた。正解 (B) と同じ第一案を、条件も付けずに選んでいた。
     2) 旧 (C) 'The printer is out of ink.' は、どちらが担当しても共通に効く障害を挙げた文で、
        「今はどちらもできない」と二択の前提ごと退ける応答になる。選択疑問では両案をまとめて
        退ける応答も成立するので、これも第二の正解にあたる。
     差し替え後の誤答 2 つは、どちらも prompt の語を別の意味で拾っただけの文で、二択とは
     論理的に独立している。書式の裏に細字の条項があってもなくても、扉の取っ手が緩んで
     いてもいなくても、こちらが刷り直す案も相手が対応する案も同じように成り立つ。
     3 つの選択肢の先頭語（The / If / Someone）を全部変えてあるのは、正解だけが形で
     浮かないようにするため。prompt と正解 (B) は変えていないので ja もそのまま。
     p2() ヘルパーは id を no から自動生成し、no を変えずに id だけを変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v3-p2-23r', part: 2, kind: 'p2', topics: ['p2wh'], level: 5,
    questions: [{
      id: 'v3q23r', no: 23,
      prompt: 'Do you want me to reprint the labels, or will you handle it?',
      speakerA: 'W-Au', speakerB: 'M-Am',
      choices: [
        'The fine print is on the back of the form.',
        'If you have the template, go ahead.',
        'Someone needs to tighten the door handle.',
      ],
      answer: 1,
      exp: '「こちらが刷り直す」か「そちらで対応する」かを問う選択疑問。応答はどちらかを選ぶか、どちらも選べない事情を述べるかのどちらかになる。正解はテンプレートがあるならという条件を付けたうえで、go ahead と相手に第一案（こちらが刷り直す）を進めさせる形で一方を選んでいる。誤答 2 つは print と handle を prompt とは別の意味で拾っているだけで、述べている内容は担当の二択と論理的に独立している。細字の条項が裏面にあってもなくても、取っ手が緩んでいてもいなくても、どちらの案も同じように成り立つ。',
      why: [
        'reprint と重なる print を、fine print（契約書などの細字の条項）という別の意味で使った引っ掛け。書式の裏面に何が刷ってあるかは、こちらが刷り直す案とも相手が対応する案とも独立していて、どちらを採っても同じように成り立つ。二択を分ける材料を何も含んでいない。',
        '正解。テンプレートがあるならという条件を付けて、こちらが刷り直す側（第一案）を選んでいる。',
        'handle を動詞ではなく名詞（扉の取っ手）で使った引っ掛け。取っ手を締め直す必要があるという別件の話であって、ラベルを誰が刷り直すかには触れていない。',
      ],
      ja: 'ラベルを刷り直しましょうか、それともご自分でされますか。→ (B) テンプレートをお持ちならお願いします。',
      topics: ['p2wh'],
    }],
  },

  p2(24, { t: ['p2ind'], lv: 5, sa: 'M-Cn', sb: 'W-Br',
    p: 'When can we expect the revised quotation?',
    c: ['The original quotation for a smaller order went through last week.', 'They\'re waiting on a price from their fabricator.', 'By courier, I think, from the local printing office.'],
    a: 1,
    e: '時期を尋ねられ、「加工業者からの価格待ち」＝まだわからない理由を答える間接応答。',
    w: ['quotation の反復。先週通ったのは小口注文向けの元の見積もりで、これから届く修正版がいつになるかには触れていない。', '正解。', 'How への答え。届け方を述べているだけで、時期には触れていない。'],
    ja: '修正した見積もりはいつごろいただけますか。→ (B) 加工業者からの価格待ちだそうです。' }),

  p2(25, { t: ['p2wh'], lv: 4, sa: 'W-Am', sb: 'M-Au',
    p: 'Isn\'t the archive open on Saturdays?',
    c: ['Only by appointment.', 'Yes, we archived them.', 'It opens onto the courtyard.'],
    a: 0,
    e: '否定疑問に対し「予約制でのみ」と条件付きで肯定する応答。',
    w: ['正解。', 'archive の反復。', 'open の別の意味を使った引っ掛け。'],
    ja: '資料室は土曜も開いているのではないですか。→ (A) 予約制のみです。' }),

  p2(26, { t: ['p2ind'], lv: 5, sa: 'M-Am', sb: 'W-Au',
    p: 'These headphones haven\'t been sanitised since the last session.',
    c: ['The wipes are in the second drawer.', 'I listened to the whole session.', 'They\'re quite comfortable.'],
    a: 0,
    e: '問題の指摘に対し、解決手段の在りかを示す応答。',
    w: ['正解。', 'session の反復。', '感想であって対応になっていない。'],
    ja: 'このヘッドホンは前回のセッション以降、消毒されていません。→ (A) 消毒シートは 2 番目の引き出しにあります。' }),

  p2(27, { t: ['p2wh'], lv: 5, sa: 'W-Br', sb: 'M-Cn',
    p: 'How much notice do we need to give to cancel?',
    c: ['It\'s in clause fourteen.', 'We cancelled last time.', 'About two hundred euros.'],
    a: 0,
    e: '「第 14 条に書いてある」と情報源を示す間接応答。数値そのものは答えていない。',
    w: ['正解。', 'cancel の反復。', 'How much を金額と誤解した引っ掛け。'],
    ja: '解約にはどれくらい前に通知が必要ですか。→ (A) 第 14 条に記載があります。' }),

  p2(28, { t: ['p2ind'], lv: 5, sa: 'M-Br', sb: 'W-Am',
    p: 'Did the new packaging test well with customers?',
    c: ['Yes, we tested them.', 'I packed the samples for the trade fair myself.', 'We only have twelve responses so far.'],
    a: 2,
    e: '「まだ 12 件しか回答がない」＝判断できる段階ではない、という間接応答。',
    w: ['test の反復。設問の test well with customers は「顧客の受けがよい」という自動詞の用法で、この応答の tested は他動詞。試験にかけたとだけ述べており、受けがよかったかどうかは何も言っていない。単数の the new packaging を them で受けている点も噛み合わない。', 'pack の反復。誰が見本を詰めたかという話で、顧客の評価がどうだったかには触れていない。', '正解。'],
    ja: '新しいパッケージは顧客の評価が良かったですか。→ (C) まだ 12 件しか回答がありません。' }),

  p2(29, { t: ['p2wh'], lv: 4, sa: 'W-Au', sb: 'M-Br',
    p: 'Why don\'t we run the induction online this year?',
    c: ['The induction starts on the fourth of September.', 'Half the intake has no reliable connection.', 'It ran for two days at the old regional training venue.'],
    a: 1,
    e: 'Why don\'t we ...? は提案。それに対する障害を挙げる応答が正解。',
    w: ['When への答え。開始日を述べているだけで、オンラインで実施するという提案の可否には触れていない。', '正解。', 'run の反復。昨年の会場と日数を述べているだけで、今年オンラインにするかどうかには触れていない。'],
    ja: '今年は新人研修をオンラインでやりませんか。→ (B) 新入社員の半数は通信環境が安定していません。' }),

  p2(30, { t: ['p2ind'], lv: 5, sa: 'M-Cn', sb: 'W-Br',
    p: 'Where did you find the missing inventory sheet?',
    c: ['Yes, it was missing.', 'About forty items appear on the missing inventory sheet.', 'Someone had filed it under the wrong month.'],
    a: 2,
    e: '場所を尋ねられ、経緯を含めて答えている。',
    w: ['Where に Yes は不可。', 'How many への答え。', '正解。'],
    ja: '見当たらなかった在庫表はどこで見つかったのですか。→ (C) 誰かが違う月のところに綴じていました。' }),

  p2(31, { t: ['p2wh'], lv: 5, sa: 'W-Am', sb: 'M-Am',
    p: 'You haven\'t signed the visitor book yet, have you?',
    c: ['The visitor\'s in reception.', 'Yes, the signature\'s required.', 'I did on the way in.'],
    a: 2,
    e: '付加疑問に対し「入ってくるときに書いた」と事実で答え、実質 No を伝える応答。',
    w: ['visitor の反復。', 'sign の反復。', '正解。'],
    ja: '来訪者名簿にまだ記帳されていませんよね。→ (C) 入るときに書きました。' }),
];
