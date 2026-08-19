/* =============================================================
   予想模試 Vol.1 — Part 1（No.1–6）／ Part 2（No.7–31）
   ============================================================= */

const p1 = (no, o) => ({
  id: `v1-p1-${no}`, part: 1, kind: 'p1', topics: o.t || ['p1verb'], level: o.lv ?? 3,
  scene: o.scene, speaker: o.sp || 'W-Am',
  questions: [{ id: `v1q${no}`, no, choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, topics: o.t || ['p1verb'] }],
});

const p2 = (no, o) => ({
  id: `v1-p2-${no}`, part: 2, kind: 'p2', topics: o.t || ['p2wh'], level: o.lv ?? 4,
  questions: [{
    id: `v1q${no}`, no, prompt: o.p, speakerA: o.sa || 'M-Am', speakerB: o.sb || 'W-Br',
    choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, topics: o.t || ['p2wh'],
  }],
});

export const L1 = [

  /* ══════════ PART 1 ══════════ */
  p1(1, {
    scene: 'office-desk', sp: 'M-Am', lv: 3,
    c: [
      'A man is typing on a laptop.',
      'A man is hanging a picture on the wall.',
      'Some documents are being shredded.',
      'A window is being installed.',
    ],
    a: 0,
    e: '机に向かってノートパソコンを操作している男性の動作。「is being + 過去分詞」を含む選択肢は、その作業をしている人が写っていなければ選べない。',
    w: ['正解。', '絵を掛けている動作はない。', '書類を裁断している人がいない。', '窓の設置作業は行われていない。'],
    ja: [
      '(A) 男性がノートパソコンで入力している。',
      '(B) 男性が壁に絵を掛けている。',
      '(C) 書類がシュレッダーにかけられているところだ。',
      '(D) 窓が設置されているところだ。',
    ],
  }),

  p1(2, {
    scene: 'market-stall', sp: 'W-Br', lv: 3,
    c: [
      'A vendor is weighing some produce.',
      'Merchandise has been laid out on a table.',
      'Shoppers are forming a line at a register.',
      'An awning is being folded up.',
    ],
    a: 1,
    e: '台の上に商品が並べられている状態を have been laid out で表した (B)。人物の動作を述べる選択肢は、その動作が写真上で確認できなければ選べない。',
    w: ['計量している様子はない。', '正解。', 'レジに並ぶ列は写っていない。', '日よけをたたむ動作は行われていない。'],
    ja: [
      '(A) 店主が農産物の重さを量っている。',
      '(B) 商品が台の上に並べられている。',
      '(C) 買い物客がレジに列を作っている。',
      '(D) 日よけがたたまれているところだ。',
    ],
  }),

  p1(3, {
    scene: 'train-platform', sp: 'M-Br', lv: 3,
    c: [
      'A conductor is checking tickets.',
      'A train has pulled into the station.',
      'Passengers are boarding a bus.',
      'Luggage is being loaded into a compartment.',
    ],
    a: 1,
    e: '列車がホームに入っている状態。誤答は、乗り物の種類が違うものと、写真にない人物の動作を述べたものに分かれる。',
    w: ['検札をしている人物はいない。', '正解。', 'バスではなく列車。', '荷物の積み込み作業は写っていない。'],
    ja: [
      '(A) 車掌が切符を確認している。',
      '(B) 列車が駅に入ってきている。',
      '(C) 乗客がバスに乗り込んでいる。',
      '(D) 荷物が客室に積み込まれているところだ。',
    ],
  }),

  p1(4, {
    scene: 'painting-wall', sp: 'W-Au', lv: 4,
    c: [
      'A worker is applying paint to a wall.',
      'A wall is being demolished.',
      'Some brushes have been placed in a sink.',
      'A ladder is being carried across the room.',
    ],
    a: 0,
    e: '壁に塗料を塗っている作業員の動作。apply paint to は「塗料を塗る」の言い換えで、Part 1 では動作の言い換えが頻繁に使われる。',
    w: ['正解。', '取り壊しではなく塗装。', '流しは写っていない。', 'はしごを運ぶ動作はない。'],
    ja: [
      '(A) 作業員が壁に塗料を塗っている。',
      '(B) 壁が取り壊されているところだ。',
      '(C) 刷毛が流しに置かれている。',
      '(D) はしごが部屋を横切って運ばれているところだ。',
    ],
  }),

  p1(5, {
    scene: 'waterfront', sp: 'M-Cn', lv: 4,
    c: [
      'A boat is being launched into the water.',
      'People are fishing from a pier.',
      'A bridge is being repaired.',
      'Some vessels are tied up near a bridge.',
    ],
    a: 3,
    e: '橋の近くに船が係留されている状態。無人の風景写真では、人の動作を含む選択肢はすべて誤りになると考えてよい。vessel は boat の言い換え。',
    w: ['進水させている人がいない。', '釣りをしている人は写っていない。', '補修作業は行われていない。', '正解。'],
    ja: [
      '(A) ボートが水面に降ろされているところだ。',
      '(B) 人々が桟橋から釣りをしている。',
      '(C) 橋が補修されているところだ。',
      '(D) 数隻の船が橋の近くに係留されている。',
    ],
  }),

  /* id は v1q6r（no は模試の通し番号として 6 を維持するが、正解の選択肢を差し替えたため
     設問 id は新規採番。旧 id v1q6 を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     旧版の正解は 'A researcher is adjusting a microscope.' だったが、laboratory の顕微鏡は
     「垂直の支柱＋斜めのアーム＋先端の小さな円＋台形の台座」という構成で、544px の
     light / dark どちらで実描画してもスタンドライトかマイクのブームにしか見えない
     （2026-08-18 に確認。scenes.js の場面コメントも「microscope / eyepiece / stage など
     顕微鏡の部位に依存する文は書かないこと」としている）。
     一方、伸ばした腕の先の手（276,149）は器具のつまみ（円 cx279 cy150 r6）に重なり、
     朱の接点マーカーも付いている＝接触は SPEC②の基準で確実に読み取れる。器具名を出さず
     「機器に手を掛けている」とだけ述べる形に改める。
     p1() ヘルパーは id を no から自動生成し、no を変えずに id だけ変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v1-p1-6r', part: 1, kind: 'p1', topics: ['p1verb'], level: 4,
    scene: 'laboratory', speaker: 'W-Am',
    questions: [{
      id: 'v1q6r', no: 6,
      choices: [
        'Shelves are being installed above a bench.',
        'Glassware is being washed at a sink.',
        'A researcher has one hand on a piece of equipment.',
        'A technician is pouring liquid into a beaker.',
      ],
      answer: 2,
      exp: '作業台の奥に立つ人物が腕を伸ばし、台の上の器具に手を掛けている。手と器具が接している位置関係は写真から確実に読み取れる。器具の種類まで特定できる描写ではないので、正解も器具名を挙げず a piece of equipment と述べている。誤答は、写っていない物（棚・流し）と、手が届いていない物（ビーカー）に分かれる。',
      why: [
        '棚は写っておらず、設置作業をしている人物も道具もない。',
        '流しは写っていない。ガラス器具は台の上に置かれたままで、洗っている人もいない。',
        '正解。伸ばした腕の先の手が、台の上の器具に接している。',
        'ビーカーは作業台の右端にあり、人物の手からは大きく離れている。液体の入った容器も持っていない。',
      ],
      ja: [
        '(A) 作業台の上に棚が設置されているところだ。',
        '(B) ガラス器具が流しで洗われているところだ。',
        '(C) 研究者が機器に手を掛けている。',
        '(D) 技術者がビーカーに液体を注いでいる。',
      ],
      topics: ['p1verb'],
    }],
  },

  /* ══════════ PART 2 ══════════ */
  p2(7, {
    p: 'Where should I leave the visitor badges?',
    sa: 'W-Am', sb: 'M-Br', lv: 3,
    c: ['Yes, they visited yesterday.', 'About twenty of them.', 'In the tray by the entrance.'],
    a: 2,
    e: 'Where に場所で答える直接的な応答。',
    w: ['Where 疑問文に Yes は不可。', 'How many への答え。', '正解。'],
    ja: '来客用バッジはどこに置けばよいですか。→ (C) 入口のそばのトレーに。',
  }),

  p2(8, {
    p: 'When does the quarterly report have to be submitted?',
    sa: 'M-Am', sb: 'W-Au', lv: 3,
    c: ['It was a strong quarter.', 'To the finance department.', 'By the end of next week.'],
    a: 2,
    e: 'When に期限で答えている。',
    w: ['quarter の反復。時期を答えていない。', 'Where / To whom への答え。', '正解。'],
    ja: '四半期報告書はいつまでに提出が必要ですか。→ (C) 来週末までです。',
  }),

  p2(9, {
    p: 'Who is going to lead the orientation on Monday?',
    sa: 'W-Br', sb: 'M-Cn', lv: 4,
    c: ['Hasn\'t that been postponed?', 'It starts at nine.', 'In the training room.'],
    a: 0,
    e: '担当者を尋ねられて「延期になったのでは？」と前提を問い返す間接応答。前提の否定は 900 帯で頻出。',
    w: ['正解。', 'When への答え。', 'Where への答え。'],
    ja: '月曜のオリエンテーションは誰が担当しますか。→ (A) あれは延期になったのではないですか。',
  }),

  p2(10, {
    p: 'Why has the shuttle service been reduced?',
    sa: 'M-Br', sb: 'W-Am', lv: 4,
    c: ['It runs every twenty minutes.', 'Near the north gate.', 'Fewer people are commuting on Fridays.'],
    a: 2,
    e: 'Why に理由で答えている。',
    w: ['How often への答え。', 'Where への答え。', '正解。'],
    ja: 'なぜ送迎バスの運行が減らされたのですか。→ (C) 金曜の通勤者が減っているためです。',
  }),

  p2(11, {
    p: 'How did the client respond to the revised proposal?',
    sa: 'W-Au', sb: 'M-Am', lv: 4,
    c: ['We haven\'t heard back yet.', 'By courier, I think.', 'Yes, it was revised twice.'],
    a: 0,
    e: '「まだ返答がない」と、答えられない事情を述べる間接応答。',
    w: ['正解。', 'How を手段と誤解した引っ掛け。', 'revise の反復。How に Yes は不可。'],
    ja: '改訂した提案に対する顧客の反応はどうでしたか。→ (A) まだ返答をいただいていません。',
  }),

  p2(12, {
    p: 'Have the new security cameras been installed yet?',
    sa: 'M-Cn', sb: 'W-Br', lv: 3,
    c: ['She installed it herself.', 'It\'s a secure connection.', 'Only in the lobby so far.'],
    a: 2,
    e: 'Yes / No を使わず「今のところロビーだけ」と部分的な進捗を答える応答。',
    w: ['install の反復。主語がかみ合わない。', 'secure の音の反復。', '正解。'],
    ja: '新しい防犯カメラはもう設置されましたか。→ (C) 今のところロビーだけです。',
  }),

  p2(13, {
    p: 'Would you like me to book a car for the site visit?',
    sa: 'W-Am', sb: 'M-Br', lv: 4,
    c: ['That would be a big help.', 'The site\'s quite large.', 'I booked it last spring.'],
    a: 0,
    e: '申し出に対する受諾。That would be a big help. は Part 2 頻出の受諾表現。',
    w: ['正解。', 'site の反復。申し出への応答になっていない。', 'book の反復。時制が噛み合わない。'],
    ja: '現地視察の車を手配しましょうか。→ (A) そうしていただけると大変助かります。',
  }),

  p2(14, {
    p: 'Isn\'t the cafeteria closed for renovation this week?',
    sa: 'M-Am', sb: 'W-Au', lv: 4,
    c: ['Yes, the food is excellent.', 'No, they pushed it back to April.', 'It closes at three.'],
    a: 1,
    e: '否定疑問への応答。閉まっていないので No、その理由として「4 月に延期された」と続く。',
    w: ['Yes と答えるなら閉鎖の内容が続くはず。', '正解。', 'close の反復。質問に答えていない。'],
    ja: '今週、社員食堂は改装で閉まっているのではないですか。→ (B) いいえ、4 月に延期されました。',
  }),

  p2(15, {
    p: 'Should we print the handouts in color or in black and white?',
    sa: 'W-Br', sb: 'M-Cn', lv: 4,
    c: ['About sixty copies.', 'Yes, please print them.', 'Whichever is cheaper.'],
    a: 2,
    e: '選択疑問に「安い方で」と基準を示して答える応答。選択疑問に Yes / No は原則不可。',
    w: ['How many への答え。', '選択疑問に Yes は使えない。', '正解。'],
    ja: '配布資料はカラーと白黒のどちらで印刷しますか。→ (C) 安い方でお願いします。',
  }),

  p2(16, {
    p: 'The keynote speaker\'s flight was delayed.',
    sa: 'M-Br', sb: 'W-Am', lv: 5,
    c: ['He spoke for about an hour.', 'Then we should swap the afternoon sessions.', 'At gate twelve.'],
    a: 1,
    e: '平叙文による情報提供に対し、それを受けた対応策を提案する応答。平叙文の投げかけは 900 帯で最も落としやすい型。',
    w: ['speak の反復。過去の話にすり替わっている。', '正解。', '搭乗口の話は無関係。'],
    ja: '基調講演者の便が遅れています。→ (B) では午後のセッションを入れ替えましょう。',
  }),

  p2(17, {
    p: 'How much did the catering come to in the end?',
    sa: 'W-Au', sb: 'M-Am', lv: 4,
    c: ['It came by van.', 'For about forty guests.', 'Just under our budget.'],
    a: 2,
    e: '金額を尋ねられて「予算をわずかに下回った」と概略で答える応答。',
    w: ['come の反復。', 'How many への答え。', '正解。'],
    ja: 'ケータリングは結局いくらになりましたか。→ (C) 予算をわずかに下回りました。',
  }),

  p2(18, {
    p: 'Didn\'t Ms. Alvarez say she\'d bring the sample contracts?',
    sa: 'M-Cn', sb: 'W-Br', lv: 5,
    c: ['Yes, I signed both copies.', 'She\'s stuck in traffic.', 'The samples were free.'],
    a: 1,
    e: '「持ってくると言っていたのでは？」に対し、来られていない事情を述べる間接応答。Yes / No を使わない。',
    w: ['contract に関連する signed の引っ掛け。', '正解。', 'sample の反復。'],
    ja: 'アルバレスさんが契約書のサンプルを持ってくると言っていませんでしたか。→ (B) 渋滞で足止めされています。',
  }),

  p2(19, {
    p: 'Could you take a look at these figures before I send them out?',
    sa: 'W-Am', sb: 'M-Br', lv: 4,
    c: ['They were sent this morning.', 'I have a meeting until four.', 'On the second page.'],
    a: 1,
    e: '依頼に対し、すぐには対応できない事情を述べる間接応答。断りとも承諾ともつかない返しが正解になる典型。',
    w: ['send の反復。依頼と時制が合わない。', '正解。', '場所を答えており、依頼への応答になっていない。'],
    ja: '送る前にこの数値を確認していただけますか。→ (B) 4 時まで会議が入っています。',
  }),

  p2(20, {
    p: 'Where can I find the maintenance log for the second boiler?',
    sa: 'M-Am', sb: 'W-Au', lv: 4,
    c: ['Yes, it was serviced last month.', 'Twice a year, usually.', 'It\'s been moved to the shared drive.'],
    a: 2,
    e: 'Where に対し「共有ドライブに移された」と場所（保管先）を答えている。',
    w: ['Where に Yes は不可。', 'How often への答え。', '正解。'],
    ja: '2 号ボイラーの整備記録はどこで見られますか。→ (C) 共有ドライブに移されました。',
  }),

  p2(21, {
    p: 'What did you think of the candidate we interviewed this morning?',
    sa: 'W-Br', sb: 'M-Cn', lv: 5,
    c: ['Three candidates in total.', 'At half past nine.', 'I only saw the last ten minutes.'],
    a: 2,
    e: '感想を求められて「最後の 10 分しか見ていない」と判断できない事情を述べる間接応答。',
    w: ['How many への答え。', 'When への答え。', '正解。'],
    ja: '今朝面接した候補者をどう思いましたか。→ (C) 最後の 10 分しか見ていないんです。',
  }),

  p2(22, {
    p: 'This printer keeps jamming.',
    sa: 'M-Br', sb: 'W-Am', lv: 5,
    c: ['I printed it in duplicate.', 'There\'s another one on the fourth floor.', 'The jam is homemade.'],
    a: 1,
    e: '不具合の報告に対し、代替手段を提示する応答。問題提起 → 解決案の提示は Part 2 の頻出パターン。',
    w: ['print の反復。', '正解。', 'jam の別の意味を使った音の引っ掛け。'],
    ja: 'このプリンターはすぐ紙詰まりを起こします。→ (B) 4 階にもう 1 台ありますよ。',
  }),

  p2(23, {
    p: 'Have you decided which venue to use for the awards dinner?',
    sa: 'W-Au', sb: 'M-Am', lv: 4,
    c: ['The awards were presented last night.', 'It\'s between the Rowan and the Kestrel.', 'Dinner is at seven.'],
    a: 1,
    e: '「まだ 2 択で迷っている」と決定途中であることを伝える応答。Yes / No を使わない。',
    w: ['award の反復。時制が合わない。', '正解。', 'dinner の反復。'],
    ja: '授賞式の夕食会の会場は決まりましたか。→ (B) ローワンとケストレルの二択です。',
  }),

  p2(24, {
    p: 'Why don\'t we move the weekly check-in to Wednesday mornings?',
    sa: 'M-Cn', sb: 'W-Br', lv: 4,
    c: ['Some of the team works remotely on Wednesdays.', 'Because I checked it twice.', 'It moved to the third floor.'],
    a: 0,
    e: 'Why don\'t we ...? は提案。提案に対する懸念を述べる応答が正解。理由を答える Because は誤り。',
    w: ['正解。', 'check の反復。Why を理由の問いと誤解した引っ掛け。', 'move の反復。'],
    ja: '週次の打ち合わせを水曜の朝に移しませんか。→ (A) 水曜は在宅勤務の人がいます。',
  }),

  p2(25, {
    p: 'How often is the equipment recalibrated?',
    sa: 'W-Am', sb: 'M-Br', lv: 4,
    c: ['By an external technician.', 'Every six months, or after a repair.', 'It costs about four hundred.'],
    a: 1,
    e: 'How often に頻度で答えている。',
    w: ['By whom への答え。', '正解。', 'How much への答え。'],
    ja: '機器はどのくらいの頻度で再校正されますか。→ (B) 6 か月ごと、または修理後です。',
  }),

  p2(26, {
    p: 'You\'ve worked with this supplier before, haven\'t you?',
    sa: 'M-Am', sb: 'W-Au', lv: 5,
    c: ['Yes, I\'ll supply the figures.', 'Only on one small order.', 'It works quite well.'],
    a: 1,
    e: '付加疑問に対し「小さな注文で一度だけ」と程度を限定して答える応答。全面的な Yes ではない返しが 900 帯で狙われる。',
    w: ['supply の反復。', '正解。', 'work の反復。'],
    ja: 'この仕入先とは以前に取引がありますよね。→ (B) 小口の注文で一度だけです。',
  }),

  p2(27, {
    p: 'Who approved the additional overtime last month?',
    sa: 'W-Br', sb: 'M-Cn', lv: 5,
    c: ['About thirty extra hours.', 'That would have been Mr. Farrow.', 'It was approved in writing.'],
    a: 1,
    e: '「たぶんファロー氏でしょう」と推量で人物を答える応答。That would have been ... は控えめな断定の定型。',
    w: ['How many への答え。', '正解。', 'approve の反復。人を答えていない。'],
    ja: '先月の追加残業は誰が承認したのですか。→ (B) ファロー氏だったはずです。',
  }),

  p2(28, {
    p: 'Is the west stairwell still closed off?',
    sa: 'M-Br', sb: 'W-Am', lv: 4,
    c: ['They reopened it on Tuesday.', 'Yes, it\'s a close call.', 'On the west side of the building.'],
    a: 0,
    e: 'Yes / No を使わず「火曜に再開された」と事実を述べることで実質 No を伝える応答。',
    w: ['正解。', 'close の音を使った引っ掛け。', 'west の反復。'],
    ja: '西側の階段はまだ閉鎖されていますか。→ (A) 火曜に再開されました。',
  }),

  p2(29, {
    p: 'What\'s the easiest way to get to the conference centre from here?',
    sa: 'W-Au', sb: 'M-Am', lv: 4,
    c: ['The tram drops you right outside.', 'It was a very useful conference.', 'About four kilometres.'],
    a: 0,
    e: '手段を尋ねられて交通手段を答える直接的な応答。',
    w: ['正解。', 'conference の反復。', 'How far への答え。'],
    ja: 'ここから会議場へ行く一番楽な方法は何ですか。→ (A) 路面電車がすぐ前で降ろしてくれます。',
  }),

  p2(30, {
    p: 'We should probably order more chairs for the reception.',
    sa: 'M-Cn', sb: 'W-Br', lv: 5,
    c: ['How many are you expecting?', 'The reception was well attended.', 'I ordered the fish.'],
    a: 0,
    e: '提案に対して質問で返す応答。Part 2 では「質問に質問で返す」形が正解になることが多い。',
    w: ['正解。', 'reception の反復。時制が合わない。', 'order の別の意味を使った引っ掛け。'],
    ja: '受付用の椅子をもう少し注文した方がよさそうです。→ (A) 何名を見込んでいますか。',
  }),

  p2(31, {
    p: 'Could I get an extension on the compliance training deadline?',
    sa: 'W-Am', sb: 'M-Br', lv: 5,
    c: ['You\'d need to ask your line manager.', 'The extension is 4419.', 'It was quite a useful course.'],
    a: 0,
    e: '依頼に対し「上司に聞いてください」と権限のある人へ回す間接応答。extension の別の意味（内線）を使った (B) が典型的な引っ掛け。',
    w: ['正解。', 'extension を「内線」と取った音の引っ掛け。', '依頼への応答になっていない。'],
    ja: 'コンプライアンス研修の期限を延ばしていただけますか。→ (A) 直属の上司に確認する必要があります。',
  }),
];
