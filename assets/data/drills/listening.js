/* =============================================================
   drills/listening.js — Part 1・Part 2 論点ドリル
   Part 1 状態と動作 / Part 2 間接応答 / Part 2 疑問文の型
   音声は端末の音声合成で再生される。選択肢は解答するまで表示されない。
   ============================================================= */

/* Part 1 の単問 */
const p1 = (id, o) => ({
  id: `u-${id}`, part: 1, kind: 'p1', topics: o.t, level: o.lv ?? 4,
  scene: o.scene, speaker: o.sp || 'W-Am',
  questions: [{ id, choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, vocab: o.v, topics: o.t }],
});

/* Part 2 の単問 */
const p2 = (id, o) => ({
  id: `u-${id}`, part: 2, kind: 'p2', topics: o.t, level: o.lv ?? 5,
  questions: [{
    id, prompt: o.p, speakerA: o.sa || 'M-Am', speakerB: o.sb || 'W-Br',
    choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, vocab: o.v, topics: o.t,
  }],
});

export const UNITS = [

  /* ══ Part 1 — 状態と動作 ════════════════════════════ */
  p1('p1v-01', {
    t: ['p1verb'], lv: 4, scene: 'warehouse', sp: 'M-Am',
    c: [
      'Cartons have been stacked on the shelving.',
      'A worker is assembling a set of shelves.',
      'Some boxes are being unwrapped.',
      'A cart is being loaded onto a truck.',
    ],
    a: 0,
    e: '棚に箱が積まれている「状態」を have been stacked（現在完了の受動態）で述べた (A) が正解。is being + 過去分詞は「今まさに人が行っている」動作を表すため、その動作をしている人が写っていなければ誤り。この倉庫には作業員が 1 人写っている。同じ倉庫の無人版もこの論点に収録されているので、あわせて見比べておくと効果的。',
    w: ['正解。積み上げられた状態を表す。',
        '棚を組み立てている人は写っていない。',
        '箱を開けている人がいないので is being unwrapped は不可。',
        'トラックも積み込み作業も写っていない。'],
    ja: ['(A) 段ボール箱が棚に積み上げられている。',
         '(B) 作業員が棚を組み立てている。',
         '(C) 箱の包装が解かれているところだ。',
         '(D) カートがトラックに積み込まれているところだ。'],
    v: [['stack', '積み重ねる'], ['unwrap', '包装を解く']],
  }),

  /* p1v-01 と同じ倉庫の無人版（warehouse-b）。什器の座標は 1 単位も動かしていないので、
     人物の有無だけで使える動詞の型がどう変わるかを、同じ絵で対比できる。 */
  p1('p1v-09', {
    t: ['p1verb'], lv: 5, scene: 'warehouse-b', sp: 'W-Cn',
    c: [
      'Cartons are being loaded onto a pallet.',
      'A carton has been placed on a pallet.',
      'Every shelf has been filled with cartons.',
      'A shelving unit is being assembled.',
    ],
    a: 1,
    e: 'この場面には人が 1 人も写っていない。(A) と (D) は is being + 過去分詞、つまり「今まさに人がその動作を行っている」ことを含意する進行受動なので、動作主が写っていない時点で中身を検討するまでもなく消える。残る (B)(C) はどちらも動作主を必要としない状態文なので、ここからは絵を見て判断する。棚は上 2 段に箱が並ぶが最下段は空いているため、すべての棚が箱で埋まっているとする (C) は成立しない。パレットの上に段ボール箱が 1 個置かれている状態を述べた (B) が正解。この場面は、同じ倉庫に作業員が 1 人写っている版とセットになっている。人が写ると、その人が実際に行っている動作についてだけ進行受動・進行形が使えるようになるため、無人版では中身を見るまでもなく消えた (A)(D) のような文も、有人版では検討対象に昇格する。ただし写っている人物の動作と一致しなければやはり誤りで、有人版でも結局は完了受動の文が正解として残る。人の有無で変わるのは「進行受動を選べる可能性が生じるかどうか」であって、正解の型が自動的に入れ替わるわけではない。見比べて確認しておくこと。',
    w: ['積み込んでいる人が写っていないため、進行受動は使えない。',
        '正解。パレットの上に箱が置かれた状態を完了受動で述べている。',
        '最下段の棚は空いており、すべての棚が箱で埋まっているわけではない。',
        '棚はすでに組み上がっており、組み立てている人もいない。'],
    ja: ['(A) 段ボール箱がパレットに積み込まれているところだ。',
         '(B) パレットの上に段ボール箱が 1 つ置かれている。',
         '(C) すべての棚が段ボール箱で埋められている。',
         '(D) 棚が組み立てられているところだ。'],
    v: [['pallet', 'パレット、荷役台'], ['shelving unit', '棚（一式）'], ['load', '積み込む']],
  }),

  p1('p1v-02', {
    t: ['p1verb'], lv: 4, scene: 'construction', sp: 'W-Br',
    c: [
      'A ladder is leaning against a wall.',
      'A worker is climbing a ladder.',
      'Bricks are being unloaded from a truck.',
      'Scaffolding is being dismantled.',
    ],
    a: 1,
    e: 'はしごの段に足をかけて上へ向かっている作業員の動作。人が実際に動作しているので進行形が正解。',
    w: ['はしごは壁に立てかけられておらず、建物から離して立てられている。また人が昇っている最中である。',
        '正解。人物の動作を進行形で述べている。',
        'トラックも積み下ろし作業も写っていない。',
        '足場を解体している人は写っていない。'],
    ja: ['(A) はしごが壁に立てかけられている。',
         '(B) 作業員がはしごを昇っている。',
         '(C) レンガがトラックから降ろされているところだ。',
         '(D) 足場が解体されているところだ。'],
    v: [['lean against', '〜に立てかけられる'], ['scaffolding', '足場'], ['dismantle', '解体する']],
  }),

  /* id は p1v-03r（旧 p1v-03 の正解 'Chairs have been arranged near the water.' を
     差し替えたため新規採番。旧 id を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     beach の「デッキチェア」は背もたれも脚も無い台形 2 つで、544px の light / dark
     どちらで実描画しても椅子とは読めない（2026-08-18 に確認。桶か箱に見える）。
     絵から確実に言えるのは「同じ形・同じ大きさの物が 2 つ、同じ底辺 y=214 の上に
     間隔 44 を空けて置かれ、その上端 y=190 が水面の帯の下端に接している」ことなので、
     物の名前を出さない形に改める。 */
  p1('p1v-03r', {
    t: ['p1verb'], lv: 3, scene: 'beach', sp: 'M-Br',
    c: [
      'Some objects have been arranged side by side near the water.',
      'A woman is opening a beach umbrella.',
      'People are sitting under an umbrella.',
      'Swimmers are entering the sea.',
    ],
    a: 0,
    e: '人が 1 人も写っていない場面。人物を主語にした選択肢はすべて誤りになる。正解は、同じ形・同じ大きさの物が 2 つ、同じ高さに間隔を空けて水際に置かれている状態を have been arranged で述べたもの。無人の場面では、状態を表す現在完了の受動態か、there is 構文が正解になりやすい。',
    w: ['正解。同じ形・同じ大きさの物が 2 つ、同じ高さに間隔を空けて水際に置かれている。人が写っていなくても、置かれた状態なら現在完了の受動態で述べられる。',
        '女性は写っていない。',
        '人は写っていない。',
        '泳いでいる人も写っていない。'],
    ja: ['(A) いくつかの物が水辺に横に並べて置かれている。',
         '(B) 女性がビーチパラソルを開いている。',
         '(C) 人々がパラソルの下に座っている。',
         '(D) 海水浴客たちが海に入っているところだ。'],
    v: [['arrange', '並べる'], ['side by side', '横に並んで'], ['beach umbrella', 'ビーチパラソル']],
  }),

  p1('p1v-04', {
    t: ['p1verb'], lv: 4, scene: 'cafe-counter', sp: 'W-Am',
    c: [
      'A customer is paying with a card.',
      'An employee is reaching across a counter.',
      'Cups are being washed in a sink.',
      'A menu board is being replaced.',
    ],
    a: 1,
    e: 'カウンター越しに手を伸ばしている店員の動作を進行形で述べた (B)。写真に写っている「人の動作」を最も忠実に描写した選択肢を選ぶ。',
    w: ['カードは写っておらず、支払い動作も確認できない。',
        '正解。カウンター越しに手を伸ばしている。',
        '洗い物をしている人は写っていない。',
        'メニュー板を交換している人も写っていない。'],
    ja: ['(A) 客がカードで支払っているところだ。',
         '(B) 従業員がカウンター越しに手を伸ばしている。',
         '(C) カップが流しで洗われているところだ。',
         '(D) メニュー板が交換されているところだ。'],
    v: [['reach across', '〜越しに手を伸ばす'], ['sink', '流し']],
  }),

  p1('p1v-05', {
    t: ['p1verb'], lv: 3, scene: 'parking-lot', sp: 'M-Cn',
    c: [
      'Drivers are getting into their cars.',
      'A car is being driven out of the lot.',
      'Vehicles are parked in marked spaces.',
      'A parking attendant is directing traffic.',
    ],
    a: 2,
    e: '区画線の引かれた駐車場に車が停まっている状態。are parked は「停まっている」という状態を表す。is being driven のような進行形の受動態は、その動作をしている人物が必要。',
    w: ['人物が写っていない。',
        '運転している人物が確認できない。',
        '正解。停車している状態を述べている。',
        '係員も写っていない。'],
    ja: ['(A) 運転手たちが車に乗り込んでいるところだ。',
         '(B) 車が駐車場から出されているところだ。',
         '(C) 車両が区画線内に停められている。',
         '(D) 駐車場の係員が交通整理をしているところだ。'],
    v: [['marked space', '区画線の引かれた枠'], ['attendant', '係員']],
  }),

  p1('p1v-06', {
    t: ['p1verb'], lv: 4, scene: 'library', sp: 'W-Au',
    c: [
      'Books are being sorted into boxes.',
      'A shelf is being assembled.',
      'Shelves have been emptied.',
      'A woman is removing a book from a shelf.',
    ],
    a: 3,
    e: '棚に手を伸ばして本を取り出している人物の動作。「棚が空にされた」という描写は、本が並んでいる写真と矛盾する。状態を表す選択肢でも、内容が写真と合わなければ誤り。',
    w: ['箱に仕分けている様子はない。',
        '棚を組み立てている人はいない。',
        '棚には本が並んでおり、空ではない。',
        '正解。棚から本を取り出す動作。'],
    ja: ['(A) 本が箱に仕分けられているところだ。',
         '(B) 棚が組み立てられているところだ。',
         '(C) 棚が空にされている。',
         '(D) 女性が棚から本を取り出している。'],
    v: [['sort', '仕分ける'], ['assemble', '組み立てる']],
  }),

  p1('p1v-07', {
    t: ['p1verb'], lv: 4, scene: 'waterfront', sp: 'M-Au',
    c: [
      'People are boarding a ferry.',
      'A bridge is under construction.',
      'Boats are docked along the shore.',
      'Sails are being lowered.',
    ],
    a: 2,
    e: '岸沿いにボートが停泊している状態。be docked は「停泊している」。人物が写っていないため、乗船や帆を下ろす動作を含む選択肢は選べない。',
    w: ['人は写っていない。',
        '橋は完成しており、工事中の様子はない。',
        '正解。停泊している状態。',
        '帆を下ろす動作をしている人がいない。'],
    ja: ['(A) 人々がフェリーに乗り込んでいるところだ。',
         '(B) 橋が建設中である。',
         '(C) ボートが岸沿いに停泊している。',
         '(D) 帆が下ろされているところだ。'],
    v: [['dock', '停泊する'], ['board', '乗り込む'], ['lower', '下ろす']],
  }),

  p1('p1v-08', {
    t: ['p1verb'], lv: 4, scene: 'presentation', sp: 'W-Br',
    c: [
      'A projector is being repaired.',
      'The audience is leaving the room.',
      'Chairs are being stacked at the back.',
      'A speaker is pointing at a screen.',
    ],
    a: 3,
    e: '発表者がスクリーンを指している動作。着席した聴衆がいるため、「聴衆が退室している」という描写は矛盾する。',
    w: ['プロジェクターを修理している人もいない。',
        '聴衆は着席しており、退室していない。',
        '椅子を積んでいる人はいない。',
        '正解。指し示す動作を進行形で述べている。'],
    ja: ['(A) プロジェクターが修理されているところだ。',
         '(B) 聴衆が部屋を出ていくところだ。',
         '(C) 椅子が後方に積み重ねられているところだ。',
         '(D) 発表者がスクリーンを指している。'],
    v: [['audience', '聴衆'], ['stack', '積み重ねる']],
  }),

  /* ══ Part 2 — 間接応答 ══════════════════════════════ */
  p2('p2i-01', {
    t: ['p2ind'], lv: 4, sa: 'W-Am', sb: 'M-Br',
    p: 'When will the revised floor plan be ready?',
    c: [
      'On the second floor, next to the lift.',
      'Yes, it was ready last Friday.',
      'The architect is still waiting on the survey.',
    ],
    a: 2,
    e: 'When で聞かれているが、時期を答えず「建築士がまだ測量結果を待っている（＝だからまだ言えない）」と間接的に応じる。900 帯の失点はこの型に集中する。',
    w: ['floor（階）という同じ音を使った引っ掛け。時期を答えていない。',
        'When 疑問文に Yes / No で答えることはできない。',
        '正解。「まだ決まっていない」を理由で示す間接応答。'],
    ja: '設問：改訂した平面図はいつ出来上がりますか。→ (C) 建築士がまだ測量結果を待っているところです。',
    v: [['floor plan', '平面図'], ['survey', '測量'], ['wait on', '〜を待つ']],
  }),

  p2('p2i-02', {
    t: ['p2ind'], lv: 4, sa: 'M-Am', sb: 'W-Au',
    p: 'Who is covering the front desk during the training session?',
    c: [
      'At two o\'clock in the conference room.',
      'It covers about forty pages.',
      'Check the roster on the staffroom door.',
    ],
    a: 2,
    e: 'Who で聞かれているが、人名ではなく「勤務表を見て」と情報源を示す間接応答。「自分は知らないが、そこに書いてある」というパターンは頻出。',
    w: ['When / Where への答えであり、Who に対応しない。',
        'cover の別の意味を使った引っ掛け。人を答えていない。',
        '正解。情報の在りかを示す間接応答。'],
    ja: '設問：研修中は誰が受付を担当しますか。→ (C) スタッフルームのドアにある勤務表を確認してください。',
    v: [['cover', '（人の代わりに）担当する'], ['roster', '勤務表']],
  }),

  p2('p2i-03b', {
    t: ['p2ind'], lv: 5, sa: 'W-Br', sb: 'M-Cn',
    p: 'Shouldn\'t we order more toner before the audit?',
    c: [
      'They\'re not in alphabetical order on the shelf, right next to the printer paper.',
      'No, the auditor arrives on Thursday, for the quarterly review.',
      'I thought Deepa took care of that yesterday.',
    ],
    a: 2,
    e: '「〜すべきでは？」という提案に対し、「ディーパが昨日やったと思っていたが」と第三者の行動を挙げて応じる間接応答。Yes / No を使わずに実質「もう手配済みのはず」と答えている。なお「もう注文してある」と既成事実を述べる応答も、この型では正解になりうる。誤答かどうかは「注文すべきか」という提案に情報として答えているかで判断する。',
    w: ['問いの order（注文する）を「順序」の意味で使った、音の反復による引っ掛け。棚の並びを否定しても、トナーを注文すべきかという提案には何も答えていない。',
        'audit → auditor と関連語を重ねた引っ掛け。「監査官は木曜に来る」は監査がまだ先だと示す情報で、「監査の前に注文する」余地がまだあることの裏づけにこそなり、No の理由にならない。何のための監査かを加えても同じで、「配送が間に合わない」という含みで読もうとすると、この会話に出てこない配送日数を補う必要がある。',
        '正解。第三者がすでに対応した可能性を示す間接応答。'],
    ja: '設問：監査の前にトナーをもっと注文すべきではないですか。→ (C) ディーパが昨日対応したと思っていました。',
    v: [['audit', '監査'], ['take care of', '対処する'], ['in alphabetical order', 'アルファベット順に']],
  }),

  p2('p2i-04', {
    t: ['p2ind'], lv: 3, sa: 'M-Au', sb: 'W-Am',
    p: 'Where did you put the signed contracts?',
    c: [
      'I signed both of them this morning.',
      'They should be in the grey folder.',
      'Because legal needed them urgently.',
    ],
    a: 1,
    e: 'Where に対して場所を答える直接的な応答。Part 2 では素直な答えが正解のこともあるので、間接応答を狙いすぎないこと。(A) は sign の音を反復した典型的な引っ掛け。',
    w: ['signed の音を反復した引っ掛け。場所を答えていない。',
        '正解。場所を答えている。',
        'Why への答え。Where に対応しない。'],
    ja: '設問：署名済みの契約書はどこに置きましたか。→ (B) グレーのフォルダに入っているはずです。',
    v: [['contract', '契約書'], ['urgently', '至急']],
  }),

  p2('p2i-05', {
    t: ['p2ind'], lv: 4, sa: 'W-Au', sb: 'M-Am',
    p: 'How long does the certification course take?',
    c: [
      'The certificate is on my desk, filed under last year\'s cohort.',
      'Yes, I completed it last spring.',
      'It depends on which track you choose.',
    ],
    a: 2,
    e: '「どれくらいかかるか」に対し、「選ぶコースによる」と条件付きで返す間接応答。It depends on ... は Part 2 の間接応答の定番。',
    w: ['certificate という関連語を使った引っ掛け。保管場所を加えても、期間を答えていない。',
        'How long への Yes / No は不可。',
        '正解。一概には言えないと条件を示す。'],
    ja: '設問：その認定講座はどのくらいかかりますか。→ (C) どのコースを選ぶかによります。',
    v: [['certification', '認定'], ['track', '（学習の）コース']],
  }),

  p2('p2i-06', {
    t: ['p2ind'], lv: 3, sa: 'M-Br', sb: 'W-Br',
    p: 'Why was the shipment held at customs?',
    c: [
      'It was shipped from Rotterdam.',
      'No one has told me either.',
      'Customs closes at six.',
    ],
    a: 1,
    e: '理由を尋ねられて「私も聞いていない」と答える間接応答。I don\'t know 系の応答は Part 2 で頻繁に正解になる。',
    w: ['ship の音を反復した引っ掛け。理由になっていない。',
        '正解。「自分も知らない」型の間接応答。',
        'customs の反復。営業時間は理由ではない。'],
    ja: '設問：なぜその荷物は税関で止められたのですか。→ (B) 私も誰からも聞いていません。',
    v: [['customs', '税関'], ['hold', '留め置く']],
  }),

  p2('p2i-07', {
    t: ['p2ind'], lv: 4, sa: 'W-Am', sb: 'M-Au',
    p: 'Could you send me the attendance figures for last quarter?',
    c: [
      'About three hundred people attended, according to the sign-in sheet.',
      'I\'ll need approval from Ms. Duarte first.',
      'The figures were quite encouraging, especially compared with last year.',
    ],
    a: 1,
    e: '依頼に対し、「まずデュアルテさんの承認が必要です」と条件を示して事実上の保留を伝える間接応答。承諾でも拒否でもない返しが正解になる典型。',
    w: ['attend の反復。出所を加えても、依頼への応答になっていない。',
        '正解。依頼に条件を付けて応じている。',
        'figures の反復。比較の対象を加えても、依頼に答えていない。'],
    ja: '設問：前四半期の参加者数を送っていただけますか。→ (B) まずデュアルテさんの承認が必要です。',
    v: [['attendance figures', '参加者数'], ['approval', '承認']],
  }),

  p2('p2i-08', {
    t: ['p2ind'], lv: 4, sa: 'M-Cn', sb: 'W-Au',
    p: 'The new expense system is a lot faster, isn\'t it?',
    c: [
      'It arrives faster by rail.',
      'Yes, we expensed the whole trip.',
      'I haven\'t had to use it yet.',
    ],
    a: 2,
    e: '同意を求める付加疑問に対し、「まだ使っていないので判断できない」と答える間接応答。感想を求められて「経験がない」と返すのは頻出。',
    w: ['faster の反復。話題が輸送手段にすり替わっている。',
        'expense の反復。同意の内容が噛み合っていない。',
        '正解。判断できる立場にないことを示す。'],
    ja: '設問：新しい経費システムはずいぶん速いですよね。→ (C) 私はまだ使ったことがありません。',
    v: [['expense', '経費で処理する'], ['by rail', '鉄道で']],
  }),

  /* ══ Part 2 — 疑問文の型 ════════════════════════════ */
  p2('p2w-01', {
    t: ['p2wh'], lv: 3, sa: 'W-Br', sb: 'M-Am',
    p: 'Would you rather present on Tuesday or Thursday?',
    c: [
      'Yes, I would, but there\'s no need to confirm yet.',
      'Either day works for me.',
      'In the main auditorium, not the smaller room upstairs.',
    ],
    a: 1,
    e: '「火曜」か「木曜」かを問う選択疑問。応答はどちらかを名指しするか、どちらでもよい・決められないという事情を述べるかになる。正解は「どちらの日でも大丈夫」と二択の両方を受け入れる定番の型。なお Yes / No で始まる応答が形として禁じられているわけではなく、判定は「二択のどちらを採ったかが言えているか」で行う。',
    w: ['would の後ろの動詞句が省略された形で、補われるのは質問の rather present on Tuesday or Thursday。つまり二択をそっくり含んだまま繰り返しているだけで、Tuesday か Thursday かを特定する語が応答の中に一つも無い。確認の要不要に触れても同じで、依然としてどちらの曜日かを特定していない。',
        '正解。どちらの日でも構わない、と二択の両方を受け入れている。',
        '場所を答えており、部屋の候補を加えても、火曜か木曜かという日の二択には触れていない。'],
    ja: '設問：発表は火曜と木曜のどちらがよいですか。→ (B) どちらの日でも大丈夫です。',
    v: [['would rather', 'むしろ〜したい'], ['auditorium', '講堂']],
  }),

  p2('p2w-02', {
    t: ['p2wh'], lv: 4, sa: 'M-Am', sb: 'W-Au',
    p: 'Haven\'t the samples been sent to the lab yet?',
    c: [
      'No, the courier comes at four.',
      'Yes, the lab is on the third floor.',
      'They weren\'t quite similar.',
    ],
    a: 0,
    e: '否定疑問文への Yes / No は、日本語と逆に「事実そのもの」に対応する。まだ送っていないなら No。「No＋まだ送っていない理由」という自然な流れになっている。',
    w: ['正解。まだ送っていないので No。',
        'Yes と答えるなら「送った」内容が続くはずだが、場所の話になっている。',
        'sample に関連する形容詞だが、類似していたか否かを答えても、まだ研究所に送ったかどうかという質問には答えていない。'],
    ja: '設問：試料はまだ研究所に送っていないのですか。→ (A) はい（まだです）、宅配業者が 4 時に来ます。',
    v: [['courier', '宅配業者'], ['sample', '試料']],
  }),

  p2('p2w-03', {
    t: ['p2wh'], lv: 4, sa: 'W-Am', sb: 'M-Br',
    p: 'You booked the meeting room for two hours, didn\'t you?',
    c: [
      'It was booked out last week.',
      'For three, actually.',
      'The room isn\'t free on Fridays.',
    ],
    a: 1,
    e: '付加疑問による確認に対し、Yes / No を使わずに「実は 3 時間で」と訂正する応答。数の訂正は頻出パターン。',
    w: ['book の反復だが、時間数の確認に答えていない。',
        '正解。時間数を訂正している。',
        'room の反復。金曜に空いていないという別の事柄を否定しているだけで、何時間で予約したのかという確認には答えていない。'],
    ja: '設問：会議室は 2 時間で予約しましたよね。→ (B) 実は 3 時間で取りました。',
    v: [['book out', '予約で埋まる']],
  }),

  /* id は p2w-04r（第二の正解を閉じたため新規採番。旧 id p2w-04 を使い回すと、
     第二の正解を選んで不正解と記録された履歴がそのまま SRS に引き継がれる）。
     旧 (C) 'It moved last month.' は、it が受けられる名詞句が the standing meeting しか
     無く、「定例会議は先月動かしたばかりだ」＝もう一度動かすことへの障害を挙げた
     間接応答として成立していた。「すでに手当て済み・直近でやったばかり」を事実で示して
     提案を押し返す型は、同じファイルの p2i-03b で正解になっている装置なので、
     誤答には置けない。自動詞 move（予定が動く）の実在も語法上の逃げ道にならない。
     差し替え後は主語を the archive boxes（提案の対象と別の事物）にし、move の語形反復
     だけを残した。prompt・正解・answer は変えていない（ja も正解しか載せていないので変更なし）。 */
  p2('p2w-04r', {
    t: ['p2wh'], lv: 3, sa: 'M-Au', sb: 'W-Br',
    p: 'Why don\'t we move the standing meeting to Wednesdays?',
    c: [
      'Because it stands in the corner.',
      'That would suit the Berlin team better.',
      'The archive boxes were moved yesterday.',
    ],
    a: 1,
    e: 'Why don\'t we ...? は「〜しませんか」という提案。応答は提案を受け入れるか、実行を妨げる事情を挙げるかになる。正解 (B) は「その方がベルリンのチームには都合がよい」と、水曜に移す利点を挙げて賛同している。なお Because で始まる応答が形として誤りになるわけではない。この形は字義どおり「なぜ移さないのか」とも読めるので、妨げになる事情を Because で述べる返しは成立する。判定は語の形ではなく内容で行う。',
    w: ['stand の反復。in the corner という場所の補語が付くと stand は「立って場所を占めている」という物理的な意味になり、主語は場所を占める物でなければならない。ここで it が受けられるのは the standing meeting だが、会議は出来事なので隅に立つことはできない。standing meeting の standing は「定例の」という意味で、立っていることではない。',
        '正解。水曜に移せばベルリンのチームの都合がよくなる、と利点を挙げて提案に賛成している。',
        'move の語形反復。動いたと述べているのは the archive boxes という物で、提案の対象である the standing meeting とは別の事物。しかも報告しているのは昨日一度きりの出来事なので、定例会議を今後どの曜日に開くかにも、曜日を動かせるかどうかにも情報を与えていない。'],
    ja: '設問：定例会議を水曜に移しませんか。→ (B) その方がベルリンのチームには都合がよいでしょう。',
    v: [['standing meeting', '定例会議'], ['suit', '都合がよい']],
  }),

  p2('p2w-05', {
    t: ['p2wh'], lv: 5, sa: 'W-Au', sb: 'M-Cn',
    p: 'Which of the two suppliers gave the lower quote?',
    c: [
      'Neither has replied yet.',
      'Yes, it was quite low.',
      'They don\'t supply packaging materials.',
    ],
    a: 0,
    e: 'Which で二者択一を問われているが、「どちらもまだ返答していない」と前提そのものを否定する応答。前提を崩す返しは 900 帯で狙われる。',
    w: ['正解。前提（見積もりが出ている）を否定する。',
        'Which 疑問文に Yes は不可。',
        'supply の反復。供給の有無を否定しても、どちらの業者かを答えていない。'],
    ja: '設問：2 社のうちどちらが安い見積もりを出しましたか。→ (A) どちらもまだ返答していません。',
    v: [['quote', '見積もり'], ['supplier', '仕入先']],
  }),

  p2('p2w-06', {
    t: ['p2wh'], lv: 4, sa: 'M-Br', sb: 'W-Am',
    p: 'How about asking Renata to lead the orientation?',
    c: [
      'She led it last year, actually.',
      'About forty new hires.',
      'Not in the east wing, I believe.',
    ],
    a: 0,
    e: 'How about doing ...? は提案。それに対し「実は彼女は昨年もやった」と情報を補足しつつ暗に賛同する応答。How を「どのように」と取ると誤る。',
    w: ['正解。提案に情報を添えて応じている。',
        'How many への答え。提案に対応しない。',
        'Where への答え方。場所を述べた文であり、レナータに任せるという提案には対応しない。'],
    ja: '設問：オリエンテーションはレナータに任せてはどうでしょう。→ (A) 実は昨年も彼女が担当しました。',
    v: [['orientation', '新人研修'], ['new hire', '新入社員']],
  }),

  /* id は p2w-07r（第二の正解を閉じたため新規採番。旧 id p2w-07 を使い回すと、
     第二の正解を選んで不正解と記録された履歴がそのまま SRS に引き継がれる）。
     旧 (B) 'Yes, they were approved.' は、Yes が「承認するのはソレンセン氏だ」という
     確認をそのまま肯定し、続く they were approved がその承認がすでに済んでいることを
     報告するので、質問に答えたうえで状況を補った完全な応答として成立していた。
     「もう手当て済みだ」と事実で応じる型は p2i-03b で正解になっている装置である。
     旧 why の「承認済みなら質問と噛み合わない」は排除根拠になっていない——
     設問は請求書が未承認だとはどこにも述べておらず、承認済みだと知らせる応答は
     この確認に対して普通に成立する。なお「Yes で始まるから誤り」という論法は
     使えない（2026-08-28 に誤りと確定）。
     差し替え後の (B) は approve の語形反復を残したまま、承認されたと述べる対象を
     the planning application（自治体に出す許認可の申請）に移してある。社外の申請なので、
     誰が請求書を承認する決まりかにも、請求書が今どの状態かにも触れない。
     prompt・正解・answer は変えていない（ja も正解しか載せていないので変更なし）。 */
  p2('p2w-07r', {
    t: ['p2wh'], lv: 4, sa: 'W-Br', sb: 'M-Au',
    p: 'Isn\'t Mr. Sorensen supposed to approve these invoices?',
    c: [
      'He\'s on leave until the ninth.',
      'The planning application was approved in June.',
      'The invoice number is 4471.',
    ],
    a: 0,
    e: '否定疑問による確認。応答は、承認の担当がソレンセン氏かどうかに答えるか、その承認が得られるかどうかを左右する事情を述べるかになる。正解は「彼は 9 日まで休暇中だ」と、承認するはずの本人が不在で今は承認が得られないという事情を挙げた間接応答。誤答 2 つは approve と invoice を拾っているだけで、述べている内容は承認の担当にも請求書の状態にも触れていない。',
    w: ['正解。承認するはずの本人が 9 日まで不在だと述べ、いま承認が得られない事情を示している。',
        'approve の語形反復。承認されたと述べているのは the planning application で、話題になっている these invoices とは別の案件。自治体に出した許認可の申請が 6 月に下りたという社外の出来事を報告しているだけで、社内で誰が請求書を承認する決まりなのかにも、請求書が今どの状態にあるのかにも情報を与えていない。',
        'invoice の語形反復。答えているのは What is the invoice number? という書類の番号であって、承認の担当が誰かという確認には触れていない。'],
    ja: '設問：これらの請求書はソレンセンさんが承認するはずではないですか。→ (A) 彼は 9 日まで休暇中です。',
    v: [['be supposed to', '〜することになっている'], ['on leave', '休暇中で']],
  }),

  p2('p2w-08', {
    t: ['p2wh'], lv: 4, sa: 'M-Am', sb: 'W-Au',
    p: 'Do you want the report printed double-sided or single-sided?',
    c: [
      'Whichever uses less paper.',
      'Yes, please print it.',
      'It was reported on Monday.',
    ],
    a: 0,
    e: '「両面」か「片面」かを問う選択疑問。or が結んでいるのは double-sided と single-sided の 2 語で、printed は両案に共通している。正解は「紙の消費が少ない方で」と判断の基準を示して選ばせる応答。直接どちらかを名指ししなくても、一方に絞れる基準を与えていれば正解になる。',
    w: ['正解。紙の消費が少ない方で、と一方に絞れる基準を示している。',
        '「刷ってください」と、両案に共通する printed の部分を繰り返しているだけで、double-sided と single-sided のどちらを採るかを示す語が無い。',
        'report の反復。報告がいつ出されたかを述べているだけで、両面か片面かの二択には触れていない。'],
    ja: '設問：報告書は両面印刷と片面印刷のどちらにしますか。→ (A) 紙の消費が少ない方でお願いします。',
    v: [['double-sided', '両面の'], ['whichever', 'どちらでも〜する方']],
  }),
];
