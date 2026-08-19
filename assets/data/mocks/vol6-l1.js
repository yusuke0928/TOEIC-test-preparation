/* =============================================================
   予想模試 Vol.6 — Part 1（No.1–6）／ Part 2（No.7–31）
   ============================================================= */

const p1 = (no, o) => ({
  id: `v6-p1-${no}`, part: 1, kind: 'p1', topics: o.t || ['p1verb'], level: o.lv ?? 3,
  scene: o.scene, speaker: o.sp || 'W-Am',
  questions: [{ id: `v6q${no}`, no, choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, topics: o.t || ['p1verb'] }],
});

const p2 = (no, o) => ({
  id: `v6-p2-${no}`, part: 2, kind: 'p2', topics: o.t || ['p2wh'], level: o.lv ?? 4,
  questions: [{
    id: `v6q${no}`, no, prompt: o.p, speakerA: o.sa || 'M-Am', speakerB: o.sb || 'W-Br',
    choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, topics: o.t || ['p2wh'],
  }],
});

export const L1 = [

  /* ══════════ PART 1 ══════════ */
  p1(1, {
    scene: 'kitchen', sp: 'W-Br', lv: 3,
    /* 2026-08-18、正解文から the handle を外した。旧版の正解は
       'A man is reaching for the handle of a pot.' だったが、544px の light / dark
       両方で実描画して確認したところ、鍋の取っ手（scenes.js の kitchen が
       line(218,144 → 200,142) として持っている 18 単位の線）は取っ手として読めない。
       - この線は手の円（中心 200,142 / r=4.5）で終わっており、肩→肘(186,148)→手 と
         続く腕の延長線上に並ぶ。画面では「腕がそのまま鍋まで伸びている」か
         「手が棒を握っている」ように見え、鍋の側面から生えた取っ手には見えない。
       - 鍋の胴（219〜237）と縁の楕円（cx228 rx11.5）のどちらにも、取っ手の付け根を
         示す線は無い。
       結果画面では絵と解説が並ぶので、「取っ手」と書くと絵と食い違って見える。
       正解文は鍋そのものを対象にし、reaching for（手を伸ばしている）という
       動作だけで成立させてある。手の円の縁（x=204.5）と鍋の縁（x=216.5）は
       12 単位離れており、つかんではいない。 */
    c: [
      'Water is boiling in a pot on the stove.',
      'Some pots are being washed in a sink.',
      'A man is reaching for a pot on the stove.',
      'A shelf is being mounted on the wall.',
    ],
    a: 2,
    e: 'コンロに置かれた鍋に向かって、調理人が腕をまっすぐ伸ばしている。reach for は手を伸ばす動作を表し、つかんでいることまでは求めない。残る 3 つは、沸騰・洗浄・設置と、いずれも絵の中に根拠が無い動作を述べている。',
    w: [
      '炎も湯気も描かれておらず、沸騰しているかどうかは絵から読み取れない。',
      '流し（シンク）は描かれておらず、鍋を洗っている人物もいない。',
      '正解。コンロに置かれた鍋へ腕を伸ばしている。',
      '壁の棚はすでに取り付けられた状態で描かれており、取り付け作業をしている人物は写っていない。is being + 過去分詞は、その動作をしている人が絵の中にいなければ選べない。',
    ],
    ja: [
      '(A) コンロの上の鍋で湯が沸いている。',
      '(B) 鍋がシンクで洗われているところだ。',
      '(C) 男性がコンロの上の鍋に手を伸ばしている。',
      '(D) 棚が壁に取り付けられているところだ。',
    ],
  }),

  p1(2, {
    scene: 'library', sp: 'M-Cn', lv: 3,
    c: [
      'A man is loading some books onto a cart.',
      'Some books have been placed on multiple shelves.',
      'A shelf is being taken apart near the wall.',
      'All of the shelves have been left bare.',
    ],
    a: 1,
    e: '複数段の棚に本が並べられている状態を have been placed で表した文が正解。カートへの積み込みや棚の解体、棚が空のままという描写は、いずれも写真の内容と矛盾するか、描かれていない要素を含む。',
    w: [
      'カートは描かれておらず、本を積み込む動作もない。',
      '正解。複数の棚に本が並べられている状態。',
      '棚を分解している人物や道具は描かれていない。',
      '棚には本が並んでおり、空のままではない。',
    ],
    ja: [
      '(A) 男性がカートに本を積み込んでいる。',
      '(B) 複数の棚に本が並べられている。',
      '(C) 棚が壁際で分解されているところだ。',
      '(D) すべての棚が空のままにされている。',
    ],
  }),

  p1(3, {
    scene: 'hotel-lobby', sp: 'W-Au', lv: 3,
    /* 2026-08-18、正解位置を A → B に移した（No.5 の B → A と対。件数 A1/B2/C2/D1 は不変）。
       旧版の Part 1 の並びは C B A D B C で、最初の 4 問が C→B→A→D と 3 回続けて
       降順になっていた。validate.mjs の循環検査（A・C）は設問数 10 未満のパートを
       判定しない（6 問＝5 組では統計的に有意にならないため。これは正しい設計）ので、
       この並びは機械では捕まらない。新しい並びは C B B D A C で、単調な連続は最長 1、
       隣接同一が 1 組（5 組中 20%、偶然の水準 25%）になる。
       入れ替えは選択肢・why・ja を対で動かし、ja 先頭の (A)〜(D) を位置に合わせて
       振り直した。e の列挙（窓の清掃／台車への積み込み／カウンター上の物）も新しい
       提示順に直してある。exp・why に (A) 等の記号参照は無い。 */
    c: [
      'A window is being cleaned near the entrance.',
      'The shelves are empty.',
      'Some luggage is being loaded onto a cart.',
      'The counter is stacked with brochures.',
    ],
    a: 1,
    e: '棚に何も置かれていない状態を are empty で表した文が正解。窓の清掃や台車への積み込み、カウンター上の物といった、写真に描かれていない要素を含む選択肢はすべて誤り。',
    w: [
      '窓や清掃の動作は描かれていない。',
      '正解。棚には何も置かれていない。',
      '台車は描かれておらず、荷物を積み込む動作もない。',
      'カウンターの上には何も置かれていない。',
    ],
    ja: [
      '(A) 窓が入口付近で拭かれているところだ。',
      '(B) 棚には何も置かれていない。',
      '(C) 荷物が台車に積み込まれているところだ。',
      '(D) カウンターにはパンフレットが積まれている。',
    ],
  }),

  p1(4, {
    scene: 'meeting-room', sp: 'M-Br', lv: 4,
    /* 2026-08-18、誤答 (B) を差し替えた。旧版は 'Three people are standing in a row.'
       で、解説は「3人は着席しており、立っているのは1人だけである」と切っていた。
       544px の light / dark 両方で実描画したところ、**その「着席している」が絵から
       読み取れない。**
       - テーブルの向こう側の 3 体は、頭（円）＋首（線）＋胴（台形）だけで、腕も脚も
         椅子も描かれていない。胴の下辺はテーブル天面（y=194）の線とちょうど重なるため、
         3 つの台形が天板の上に置かれているようにも見える。
       - 着席の根拠は頭頂 y（座 136 / 立 110）の差だけで、これは scenes.js の
         'office-desk' の注記が「脚が隠れているため『座っている』の根拠は頭頂の高さだけ。
         **seated を問う設問はこの場面では作らないこと**」と禁じている作り方そのもの。
         meeting-room は同じ共通 sit ポーズを使い、同じく nearFace の塗りで脚を隠している。
       そこで、姿勢（着席か立位か）に一切依存しない 4 択に作り替えた。正解 (D) は
       presenter の手の円（344,118）がスクリーン（344〜438 / y66〜136）の左辺に
       重なっているという接触の事実だけで成立しており、ここは 544px でも読める。
       新しい (B) は「椅子があるかどうか」ではなく「並べている人物が絵の中にいるか」で
       切れるので、3 体の姿勢が読めなくても真偽が決まる。
       **この場面では今後も seated / standing を問う設問を作らないこと。** */
    c: [
      'Some documents are spread out on the table.',
      'Chairs are being arranged around the table.',
      'Two people are shaking hands.',
      'A man is touching the edge of a screen.',
    ],
    a: 3,
    e: '立っている男性の手がスクリーンの左端に重なっており、触れていることが絵から読み取れる。残る 3 つは、天板の上に何も置かれていない、手を取り合っている 2 人がいない、椅子を並べている人物がいない、と、いずれも絵の中に根拠が無い。',
    w: [
      'テーブルの天板には何も置かれていない。',
      '椅子を並べている人物は写っていない。is being + 過去分詞は、その動作をしている人が絵の中にいなければ選べない。テーブルの周りで物を動かしている人物は 1 人もおらず、立っている男性の手はスクリーンに向いている。',
      '手を取り合っている 2 人は描かれていない。',
      '正解。男性がスクリーンの左端に手を触れている。',
    ],
    ja: [
      '(A) テーブルの上に書類が広げられている。',
      '(B) 椅子がテーブルの周りに並べられているところだ。',
      '(C) 2 人が握手を交わしている。',
      '(D) 男性がスクリーンの端に手を触れている。',
    ],
  }),

  p1(5, {
    scene: 'loading-dock', sp: 'W-Am', lv: 4,
    /* 2026-08-18、正解位置を B → A に移した（No.3 の A → B と対。理由は No.3 の注記を参照）。
       選択肢・why・ja を対で入れ替え、ja 先頭の記号を振り直した。e の列挙
       （パレット／洗車／受け渡し）は入れ替え後も提示順 (B)(C)(D) のままなので変えていない。 */
    c: [
      'A worker is holding a box.',
      'A truck is being loaded with pallets.',
      'A vehicle is being washed near the dock.',
      'A box is being handed to another worker.',
    ],
    a: 0,
    e: '作業員が箱を抱えている動作が正解。残る 3 つはいずれも is being + 過去分詞で、その動作が絵の中で成立していなければ選べない。パレットは 1 枚も描かれておらず、洗車をしている人物も水も無く、写っている人物は 1 人だけなので箱を受け取る相手もいない。',
    w: [
      '正解。作業員が箱を抱えている。',
      'パレット（荷役台）は 1 枚も描かれていない。地面に積まれているのは段ボール箱である。作業員もトラックから離れた場所に立っており、荷台にも積まれた箱にも手を掛けていない。',
      '洗車をしている人物や水は描かれていない。',
      '写っている人物は作業員 1 人だけで、箱を受け取る相手が絵の中にいない。受け渡しは 2 人いて初めて成立する。',
    ],
    ja: [
      '(A) 作業員が箱を抱えている。',
      '(B) トラックにパレットが積み込まれているところだ。',
      '(C) 車両が荷降ろし場の近くで洗われているところだ。',
      '(D) 箱が別の作業員に手渡されているところだ。',
    ],
  }),

  p1(6, {
    scene: 'cafe-counter', sp: 'M-Au', lv: 4,
    /* 2026-08-18、場面ごと crosswalk から差し替えた。crosswalk を使えない理由は 2 つある。
       (1) crosswalk の 3 体はいずれも figure(stand)（膝の曲げ 0・前方オフセット 0・腕は 1 本も
       描かれていない・接地 y は 3 体とも 236）で、読み取れる事実が「並んで立っている」しか無い。
       同じ絵を使う vol3-l1.js No.4 の正解が 'Three people are standing side by side.' なので、
       言い換えをどう工夫しても 1 枚の絵で同じ命題を 2 度正解にすることになり、Vol.3 を解いた
       記憶だけで選べてしまう（旧版はこれを「等間隔」へずらして凌いでいたが、間隔も同じ
       「横に並んだ 3 人」から読む以上、別の命題とは言い難い）。
       (2) 544px で実描画すると、横断歩道の縞（rect() ヘルパーで描くため必ず輪郭線が付く
       20×40 の矩形 6 本）が路面のペイントではなく「地面に置かれた縦長の箱」に見え、
       人物の足元がその箱の後ろに立っているように読める。持ち物の有無を根拠にする誤答は
       この形と衝突する（旧々版 'One of the pedestrians is carrying a suitcase.' が実害を出した）。

       差し替え先は cafe-counter。544px の light / dark 両方で実描画し、getCTM() で座標を
       測って次を確認した。
       - カウンターは x56–404 / y172–238。店員の figure は x125–155 / y110–236 で、脚
         （y176–236）がカウンター前面（--card-2 の塗り、y172–238）に完全に飲まれる＝向こう側。
       - 客の figure は x333.5–366.5 / y123.4–262。frontFigure 層なのでカウンター前面より
         後に描かれ、足元の線 y=262 がカウンター下端 238 より 24 単位下に出る＝手前側。
       - 接地 y の差は 262−236＝26（SPEC ③「手前の人物の接地 y は奥より +20 以上」を満たす）。
         「カウンターを挟んで両側に立っている」は、この遮蔽関係と接地 y の差で幾何的に決まる。
       - 2 体とも stand プリセットで頭頂 y は 110 と 123.4。座位なら 136 と 152 になるので
         SPEC ④ の「頭頂差 20 以上なら 544px でも判別できる」に照らして「座っていない」と言える。
         座面（stool / bench / chair）はこの場面に 1 つも置かれていない。
       - 壁の棚は y60–86。最も近い手（店員の手 y152.5–161.5）でも棚の下辺から 66 単位下で、
         腕の上限（肩→肘 30 ＋ 肘→手 28 ＝ 58）では届かない。棚のカップに手を掛けている
         人物は写っていない。
       - 店員の手（円 r=4.5、中心 182,157）はカウンター上のカップ（x178–202 / y155–169）の
         左上の縁に重なる＝カップに触れている。客の手（中心 340,176）はカウンターの天面の
         帯（y172–186）に触れている。**どちらの手にも手帳・ペンのような「持ち物」は
         描かれていない**（(D) を切る根拠はここ。「何も持っていない」ではなく
         「書く道具が絵の中に無い」と書くこと。店員はカップに触れている）。

       2026-08-18 レビュー役が独立に実描画（544px / paper・sumi 両テーマ）し、getCTM() で
       全要素の場面座標を測って上記の数値を再確認した。実測値は上の記述と完全に一致。
       目視で追加確認したこと:
       - 店員の胴の下辺（y=176）はカウンターの塗り（y172 起点）に隠れるので、SPEC が警告する
         「胴の下辺の線が天面線と重なって台形が天板の上に載って見える」形にはなっていない。
         頭・首・腕が付いた状態で天面線の上に胴が 36 単位出ており、「カウンターの向こう側に
         立つ人」と読める。
       - 客は胴（y152–196）と脚（y196–262）がカウンターの天面線・幕板線を塗りで断ち切って
         おり、「カウンターの手前に立つ人」と読める。前後関係は 544px で判別できる。
       - 壁の棚と 3 個のカップは 544px でも棚とカップとして読める（棚 y60–86、cup 高さ 12）。
         棚に手を伸ばしている人物はおらず、(B) が画面と衝突しない。crosswalk の縞のように
         「別の物に見える部品」は cafe-counter には無い（棚は棚、カップはカップ、
         カウンターはカウンターとして読める）。

       drills/listening.js p1v-04 が同じ場面を使うが、そちらの正解は
       'An employee is reaching across a counter.' で、根拠は店員の腕がカウンターを越えて
       いること。こちらは 2 人の前後関係だけで決まるので、読み取る対象が重ならない。
       なお 'facing each other' 系は書けない。figure の dir は 2 体とも 1（同じ向き）で、
       bank-teller と違って 2 本の腕が 1 つの対象へ内向きに集まってもいないため、
       「向かい合っている」の幾何的根拠が絵の中に無い。 */
    c: [
      'A customer is seated on a stool.',
      'Some cups are being taken down from a shelf.',
      'Two people are standing on opposite sides of a counter.',
      'An employee is writing on a notepad.',
    ],
    a: 2,
    e: '2 人はカウンターを挟んで前後に分かれて立っている。片方は脚がカウンターの前面に隠れて胴から上しか見えず、もう片方は脚が前面の手前を通って足元がカウンターの下端より下に出ている。この遮蔽の違いが「両側に立っている」ことの根拠になる。腰掛けるもの・棚に手を伸ばしている人・書くための手帳やペンは、いずれも写真に写っていない。',
    w: [
      'スツールやベンチなど腰掛けるものは 1 つも描かれていない。手前の客は膝を伸ばして立っており、足元まで見えている。座っていれば腿が水平になり、頭の位置がはっきり下がる。',
      '棚は 2 人の頭よりさらに高い位置にあり、そこへ手を伸ばしている人物はいない。is being taken down は、その動作をしている人が写真に写っていなければ選べない。',
      '正解。片方はカウンターの向こう側に立っていて脚が前面に隠れ、もう片方は手前側に立っていて足元がカウンターの下端より下に見える。',
      '手帳もペンも描かれていない。従業員の手はカウンターの上のカップに触れているだけで、書く動作をしている人物はいない。',
    ],
    ja: [
      '(A) 客がスツールに腰掛けている。',
      '(B) カップが棚から下ろされているところだ。',
      '(C) 2 人がカウンターを挟んで両側に立っている。',
      '(D) 従業員が手帳に書き込んでいる。',
    ],
  }),

  /* ══════════ PART 2 ══════════ */
  p2(7, {
    t: ['p2wh'], lv: 3, sa: 'W-Am', sb: 'M-Br',
    p: 'Where do we keep the spare staplers?',
    c: ['In the bottom drawer of the supply cabinet.', 'About a dozen of them.', 'Susan ordered them last week.'],
    a: 0,
    e: '場所を尋ねる Where に対し、収納場所を答えている直接的な応答。',
    w: ['正解。Where に場所で答えている。', 'How many への答え。', 'Who への答え。'],
    ja: '予備のホッチキスはどこにありますか。→ (A) 備品棚の一番下の引き出しです。',
  }),

  p2(8, {
    t: ['p2wh'], lv: 3, sa: 'M-Am', sb: 'W-Au',
    /* 2026-08-18、機械照合で旧版の stem 'When does the new parking policy take effect?' が
       vol2-l1.js の v2q8 'When will the new pricing take effect?' と枠ごと重なっている
       ことが分かったため差し替えた（内容語の一致率 0.57。When / new / take effect が共通）。
       型（When への直接応答・正解位置 B・誤答は「範囲」と「人物・場所」）はそのまま保っている。 */
    p: 'When is the scaffolding coming down at the east entrance?',
    c: ['Only the section over the doorway.', 'Not until the new sign goes up.', 'The contractors park round the back.'],
    a: 1,
    e: 'When に、撤去の時期を「〜するまでは外さない」の形で答えている応答。',
    w: [
      '撤去する範囲を答えており、時期を尋ねる When への答えになっていない。',
      '正解。新しい看板が付くまでは外さない、と時期で答えている。',
      '業者の駐車場所の話で、撤去の時期に答えていない。',
    ],
    ja: '東側入口の足場はいつ外されますか。→ (B) 新しい看板が付くまでは外しません。',
  }),

  p2(9, {
    t: ['p2wh'], lv: 3, sa: 'W-Br', sb: 'M-Cn',
    /* 2026-08-18、正解位置を C → A に移した（No.10 の A → C と対。件数 A9/B8/C8 は不変）。
       旧版は No.7–12 の正解位置が A B C A B C と、5 組続けて「次が +1（mod 3）」になる
       輪番だった。validate.mjs の循環検査 A はパート全体での割合（38%）を見るので閾値
       60% に届かず、パートの先頭に固まったこの並びは機械では捕まらない。入れ替え後は
       +1 が 25%（偶然の水準と同じ）、最長の +1 連鎖が 1 になる。
       選択肢と why を対で動かし、ja の → (X) の記号を新しい位置に合わせた。
       exp・why に (A) 等の記号参照は無い。 */
    p: "Who's meeting with today's two o'clock visitor?",
    c: ["I believe it's Mr. Ellery.", 'In the small conference room.', "At two o'clock sharp."],
    a: 0,
    e: 'Who に、担当者の名前で答えている直接的な応答。',
    w: ['正解。Who に人名で答えている。', 'Where への答え。', 'When への答え。時刻の反復。'],
    ja: '今日の2時の来客には誰が対応しますか。→ (A) エラリーさんだと思います。',
  }),

  p2(10, {
    t: ['p2ind'], lv: 4, sa: 'M-Br', sb: 'W-Am',
    p: 'How many stops does the airport coach make before it reaches the terminal?',
    /* 2026-08-18、正解位置を A → C に移した（No.9 の C → A と対。理由は No.9 の注記を参照）。 */
    c: ['The terminal was refurbished last year.', 'It leaves from the north side of the station.', "I've only ever taken the train."],
    a: 2,
    e: '停留所の数を尋ねられて、自分は列車しか使ったことがないと述べる間接応答。数そのものは答えていないが、答えられない理由を示しているので応答として成立する。',
    w: [
      'terminal の反復。改装の話で、停留所の数に答えていない。',
      '発車場所を答えており、How many が求める数になっていない。',
      '正解。列車しか使ったことがない＝バスの停留所の数は知らない、という間接応答。',
    ],
    ja: '空港バスはターミナルに着くまでに何回停まりますか。→ (C) 私は列車しか使ったことがないんです。',
  }),

  p2(11, {
    t: ['p2ind'], lv: 4, sa: 'W-Au', sb: 'M-Am',
    p: "Why don't we have the new intern restock the supply closet?",
    c: ['The closet is on the third floor.', "She doesn't start until next week.", "Because we're low on folders."],
    a: 1,
    e: 'Why don\'t we ...? という提案に対し、その提案が実行できない事情を述べる応答。Because で始まる選択肢は、この形を「なぜ〜しないのか」という理由の問いと取り違えたときにだけ選べる。',
    w: ['場所を答えており、提案への応答になっていない。', '正解。新しいインターンはまだ勤務を始めていない。', 'Because で始まるのは「なぜ〜しないのか」と取った場合の応答だが、述べているのは補充が必要な理由であって、インターンに任せない理由になっていない。'],
    ja: '新しいインターンに備品庫の補充をさせませんか。→ (B) 彼女はまだ来週まで勤務を始めません。',
  }),

  p2(12, {
    t: ['p2wh'], lv: 4, sa: 'M-Cn', sb: 'W-Br',
    /* 2026-08-18、正解の先頭から 'No, ' を削った（純粋な削除で、新しい英文は足していない）。
       理由は 2 つある。
       (1) No.16 と構造的に双子だった。この巻の否定疑問 3 問（No.12・No.16・No.28）のうち
           2 問が「(Yes + 前提と矛盾する内容) 対 (No + 説明が正解)」と同型で、exp の日本語も
           「英語の No は〜を指すので、日本語では『ええ、〜』に当たる」までほぼ同一だった。
       (2) 選択肢の「形」が正解を教えていた。旧版の Part 2 は 'No,' で始まる選択肢が 2 つしか
           無く、その 2 つとも正解（2/2）。一方 'Yes,' で始まる 6 つのうち正解は 1 つだけ
           （1/6）。「No, で始まっていれば正解」というパターンだけで 2 問取れた。
       既存 5 巻は否定疑問 17 問中 16 問で正解が Yes/No 無しの平叙文であり、削ったほうが
       既存の作りとも揃う。削除後は 'No,' で始まる選択肢が 1 つ（No.16 の正解）だけになり、
       件数 1 では学習者が規則として読み取れる形にならない。
       否定疑問の Yes/No の論理は、誤答 (A) の「Yes は前提を認めることになるのに続く内容が
       それと食い違う」という検討にそのまま残してある。 */
    p: "Isn't the gravel supposed to arrive at the site this morning?",
    c: ["Yes, I'm afraid we cancelled that order.", "I'll be out on site until three.", "The driver rang to say it'll be after lunch."],
    a: 2,
    e: '否定疑問への応答。Yes/No をいっさい使わず、運転手からの連絡という事実だけで「今朝は届かない」ことを伝えている。否定疑問では Yes/No で始まる応答よりも、届く時期を言い直すこの型のほうが正解になりやすい。',
    w: [
      'Yes は「今朝届く予定だ」を認めることになるが、続く内容は発注を取り消したという話で、届く予定があるという前提と食い違う。',
      '自分の所在を述べているだけで、砂利が今朝届くかどうかに答えていない。',
      '正解。昼過ぎになると運転手から連絡があった、と到着時刻を言い直すことで、今朝は届かないことを Yes/No を使わずに伝えている。',
    ],
    ja: '砂利は今朝、現場に届く予定ではないのですか。→ (C) 昼過ぎになると運転手から連絡がありました。',
  }),

  p2(13, {
    t: ['p2ind'], lv: 4, sa: 'W-Am', sb: 'M-Br',
    p: 'Could you order some more binder clips for the supply closet?',
    c: ['The binder is on the second shelf.', 'I just placed an order yesterday.', 'The closet needs to be cleaned.'],
    a: 1,
    e: '依頼に対し、すでに対応済みであることを伝える間接応答。',
    w: ['binder の反復。バインダー（別の物）の置き場所を答えており、クリップを発注するかどうかに答えていない。', '正解。すでに昨日発注済みだと伝えている。', '備品庫の清掃の話で、発注の依頼と無関係。'],
    ja: '備品庫用にバインダークリップを追加で発注してもらえますか。→ (B) ちょうど昨日発注したところです。',
  }),

  p2(14, {
    t: ['p2ind'], lv: 4, sa: 'M-Au', sb: 'W-Cn',
    p: 'Do we need hard hats to walk through the assembly area?',
    c: ['The assembly line runs until six.', 'Visitors are handed them at the gate.', 'The area was extended last spring.'],
    a: 1,
    e: '着用の要否を尋ねられて、入口で渡されると述べることで必要であることを伝える間接応答。Yes/No を使わずに、どこで手に入るかまで示している。',
    w: [
      'assembly の反復。稼働時間の話で、ヘルメットが要るかどうかに答えていない。',
      '正解。見学者には入口で渡されると述べ、必要であることを間接的に伝えている。',
      'area の反復。区画の拡張工事の話で、着用の要否に答えていない。',
    ],
    ja: '組立エリアを通るのにヘルメットは要りますか。→ (B) 見学者には入口で渡されます。',
  }),

  p2(15, {
    t: ['p2ind'], lv: 4, sa: 'W-Cn', sb: 'M-Br',
    p: "You already updated the shift roster for next week, didn't you?",
    c: ['The roster is pinned by the time clock.', 'The shift starts at nine.', "I'm still waiting for two people to confirm."],
    a: 2,
    e: '付加疑問に対し、まだ完了していない事情を Yes/No を使わずに伝える応答。',
    w: ['roster の反復。更新が済んだかどうかに答えていない。', '開始時刻の話で、更新の状況に答えていない。', '正解。2人の確認待ちでまだ完了していないと伝えている。'],
    ja: '来週のシフト表はもう更新しましたよね。→ (C) あと2人の確認待ちなんです。',
  }),

  p2(16, {
    t: ['p2wh'], lv: 4, sa: 'M-Br', sb: 'W-Au',
    p: "Isn't our stand at the trade fair on the upper level?",
    c: ['Yes, we decided not to exhibit this year.', 'No, they moved us down to the main hall.', 'The fair opens at ten on Monday.'],
    a: 1,
    e: '否定疑問への応答。上の階ではないので No、その説明として主会場へ移されたことが続く。英語の No は「上の階ではない」を指すので、日本語では「ええ、違います」に当たる。',
    w: [
      'Yes は「自社のブースが上の階にある」を認めることになるが、続く内容は今年は出展しないという話で、ブースがあるという前提と食い違う。',
      '正解。No のあとに、主会場へ移されたという説明が続く。',
      '開場時刻の話で、ブースの場所に答えていない。',
    ],
    ja: '見本市のうちのブースは上の階ではないのですか。→ (B) ええ（違います）、主会場のほうへ移されました。',
  }),

  p2(17, {
    t: ['p2ind'], lv: 4, sa: 'W-Br', sb: 'M-Am',
    /* 2026-08-18、正解の人名を Priya → Aditi に変えた。Priya は assets/data 全体で
       最も使い回されている名で、とくに vol4-l1.js No.26 の Part 2 正解
       'That got reassigned to Priya.' と、名前だけでなく「別の人が担当している」という
       装置まで一致していた。設問の構造は変えていない。Aditi は corpus に他用例なし。 */
    p: 'Did anyone book a table for the client lunch tomorrow?',
    c: ['The lunch break is from twelve to one.', 'Aditi said she would take care of it.', 'It was very good, actually.'],
    a: 1,
    e: '予約が済んでいるかを尋ねられて、担当している人の名を挙げる間接応答。Yes/No では答えていないが、誰が対応しているかを示しているので応答として成立する。',
    w: [
      'lunch の反復。昼休みの時間帯の話で、店の予約に答えていない。',
      '正解。アディティが引き受けたと伝えている。',
      '過去の食事の感想で、明日の予約が取れているかどうかに答えていない。',
    ],
    ja: '明日の取引先との昼食、誰か店を予約しましたか。→ (B) アディティが引き受けると言っていました。',
  }),

  p2(18, {
    t: ['p2wh'], lv: 4, sa: 'M-Cn', sb: 'W-Br',
    p: 'Should we visit the mill on Thursday, or wait until Friday?',
    c: ['Yes, the mill tour was very informative.', 'Thursday — Friday is a public holiday there.', 'It takes about two hours to drive out there.'],
    a: 1,
    e: '「木曜に行く」か「金曜まで待つ」かを問う選択疑問。応答はどちらかを選ぶか、選べない事情を述べるかのどちらかになる。or の後ろは独立した文ではなく共通の Should we に掛かる動詞句なので、Yes で始めてもどちらを選んだのかは決まらない。',
    w: [
      'Yes だけではどちらを選んだのか決まらない。mill の反復で、過去の見学の感想も二択に触れていない。',
      '正解。金曜は現地が祝日だと理由を挙げて木曜を選んでいる。',
      '所要時間の話で、木曜か金曜かの二択に触れていない。',
    ],
    ja: '工場の見学は木曜に行きますか、それとも金曜まで待ちますか。→ (B) 木曜に。金曜は現地が祝日です。',
  }),

  p2(19, {
    t: ['p2ind'], lv: 4, sa: 'W-Au', sb: 'M-Br',
    /* 選択疑問で Yes を誤答に置くときの決まり：or の後ろを独立した節にしないこと。
       この設問の旧版（別題材）は後半が独立した Yes/No 疑問文だったため、Yes がその
       後半に掛かって「はい、そうです」と読め、Yes で始まる誤答が第二の正解になっていた。
       ここでは or の後ろを共通の put the team up に掛かる場所の句にしてある。 */
    p: "Should we put the team up near the airport, or somewhere closer to the client's office?",
    c: ["That's really up to whoever is handling the travel budget.", "Yes, the client's office moved last year.", 'The flights are already booked.'],
    a: 0,
    e: '「空港の近くに泊める」か「取引先の事務所の近くに泊める」かを問う選択疑問。判断は出張費を管理している人次第だと述べ、決定を第三者に委ねる間接応答が正解。二択のどちらも選んでいないが、選べない事情を示しているので応答として成立する。',
    w: [
      '正解。判断は出張費を管理している人次第だと述べ、決定を第三者に委ねている。',
      "Yes だけではどちらを選んだのか決まらない。client's office の反復で、移転した話も宿泊先の二択に触れていない。",
      '航空券の手配の話で、宿泊先の二択に答えていない。',
    ],
    ja: 'チームは空港の近くに泊めますか、それとも取引先の事務所に近いところにしますか。→ (A) それは出張費を管理している人の判断次第です。',
  }),

  p2(20, {
    t: ['p2ind'], lv: 4, sa: 'M-Am', sb: 'W-Cn',
    p: "Who's driving the van up to the Bellhaven store on Saturday?",
    c: ['The store opens at nine.', 'Marcus offered to, I think.', 'It was driven back empty last time.'],
    a: 1,
    e: '担当者を尋ねられて、確信を持ちきれない形で人名を答える間接応答。',
    w: [
      '開店時刻の話で、誰が運転するかに答えていない。',
      '正解。マーカスが引き受けたと思う、と答えている。',
      'drive の反復。前回の帰りの話で、今回の担当者に答えていない。',
    ],
    ja: '土曜にベルヘイヴン店までバンを運転するのは誰ですか。→ (B) マーカスが引き受けてくれたと思います。',
  }),

  p2(21, {
    t: ['p2wh'], lv: 3, sa: 'W-Br', sb: 'M-Cn',
    p: 'Which day is the window cleaning crew coming this month?',
    c: ['Thursday the fourteenth, I believe.', "Yes, they've already done the east side.", 'From the roof, on a suspended platform.'],
    a: 0,
    e: 'Which day に、具体的な日付で答えている直接的な応答。',
    w: [
      '正解。木曜の14日だと具体的な日で答えている。',
      'Which day に Yes/No では答えられない。すでに作業した面の話も日にちに答えていない。',
      'How（方法）への答え。作業の仕方を述べており、日にちを尋ねる質問に答えていない。',
    ],
    ja: '今月、窓清掃の業者はどの日に来ますか。→ (A) 木曜の14日だと思います。',
  }),

  p2(22, {
    t: ['p2ind'], lv: 4, sa: 'M-Br', sb: 'W-Am',
    p: 'How much is the mileage allowance if I use my own car?',
    c: ["I'd have to look it up in the staff handbook.", 'The claim forms go to payroll at the end of the month.', 'About forty kilometres each way.'],
    a: 0,
    e: '単価を尋ねられて、確認しないとわからないという間接応答。',
    w: [
      '正解。就業規則を調べないとわからないと答えている。',
      '申請書の提出先と時期の話で、単価に答えていない。',
      '距離を答えている。走行距離は手当の額を出すための入力であって、手当そのものの額ではない。尋ねられているのは 1 キロ（マイル）あたりいくら支払われるかで、片道何キロ走るかではない。なお mileage allowance はリース契約などでは「走行してよい距離の上限」を指すこともあるが、この設問は if I use my own car（自家用車を使った場合）と実費精算の場面に限定しており、each way と合わせて距離の読みは塞がれている。',
    ],
    ja: '自家用車を使う場合、走行距離手当はいくらですか。→ (A) 就業規則を調べてみないとわかりません。',
  }),

  p2(23, {
    t: ['p2wh'], lv: 3, sa: 'W-Am', sb: 'M-Au',
    p: 'How often does accounting process reimbursement requests?',
    c: ['By direct deposit, I think.', 'Mine was processed last Friday.', 'Twice a month, usually.'],
    a: 2,
    e: 'How often に、頻度で答えている直接的な応答。',
    w: [
      '支払い方法の話で、頻度を尋ねる質問に答えていない。',
      'process の反復。1 件がいつ処理されたかを答えており、How often が求める頻度になっていない。',
      '正解。月に2回だと頻度で答えている。',
    ],
    ja: '経理部は払い戻し申請をどのくらいの頻度で処理していますか。→ (C) 通常、月に2回です。',
  }),

  p2(24, {
    t: ['p2ind'], lv: 5, sa: 'M-Cn', sb: 'W-Br',
    p: 'This trolley tips over if I stack more than three crates on it.',
    c: ['I stacked the shelves this morning.', 'The crates came in on Monday.', "That one isn't meant for heavy loads."],
    a: 2,
    e: '不具合の訴えに対し、その台車の想定用途を示して「故障ではない」と答える応答。訴えにそのまま同意せず、事実を返す型。',
    w: [
      'stack の反復。棚の補充作業の話で、訴えへの応答になっていない。',
      'crate の反復。入荷日の話で、台車が倒れることに答えていない。',
      '正解。その台車はもともと重い荷物向けではないと、想定用途を示している。',
    ],
    ja: 'この台車、木箱を3つ以上積むと倒れるんです。→ (C) それは重い荷物向けの台車ではないんです。',
  }),

  p2(25, {
    t: ['p2ind'], lv: 5, sa: 'M-Am', sb: 'W-Br',
    p: 'Who arranged for the shrubs along the front drive to be cut back?',
    c: ["I wasn't aware anyone had.", 'They were planted about ten years ago.', 'It does look much tidier now.'],
    a: 0,
    e: '「誰かが手配した」という前提そのものを問い返す間接応答。前提の否定は 900 帯で頻出。',
    w: [
      '正解。手配した人がいるとは知らなかった、と前提を問い返している。',
      '植えられた時期の話で、手配した人に答えていない。',
      '仕上がりの感想で、手配した人に答えていない。',
    ],
    ja: '正面の車寄せ沿いの植え込みを刈り込むよう手配したのは誰ですか。→ (A) 誰かが手配したとは知りませんでした。',
  }),

  p2(26, {
    t: ['p2ind'], lv: 5, sa: 'W-Au', sb: 'M-Br',
    p: 'Could you cover my shift on Saturday?',
    c: ["I'm actually away that weekend.", 'Saturday deliveries stop at noon.', 'The break room is open all weekend.'],
    a: 0,
    e: '依頼に対し、対応できない事情を述べる遠回しな断り。',
    w: ['正解。その週末は不在だと伝えることで断っている。', '土曜の配送時間の話で、シフト交代の依頼に答えていない。', '休憩室の話で、依頼を引き受けるかどうかに答えていない。'],
    ja: '土曜日、私のシフトを代わってもらえますか。→ (A) 実はその週末は出かけているんです。',
  }),

  p2(27, {
    t: ['p2ind'], lv: 5, sa: 'M-Br', sb: 'W-Am',
    p: 'I forgot my access badge at home this morning.',
    c: ['My badge photo was taken last spring.', 'I already checked in for the day.', 'Reception can issue you a temporary one.'],
    a: 2,
    e: '困りごとの報告に対し、解決策を提示する応答。',
    w: [
      '自分のバッジの写真の話で、忘れ物への対応になっていない。',
      '話者自身の出勤確認の話で、忘れ物への対応になっていない。',
      '正解。受付で仮のバッジを発行してもらえると解決策を示している。',
    ],
    ja: '今朝、入館バッジを家に忘れてきてしまいました。→ (C) 受付で仮のバッジを発行してもらえますよ。',
  }),

  p2(28, {
    t: ['p2ind'], lv: 5, sa: 'W-Br', sb: 'M-Cn',
    /* 2026-08-18、正解を差し替えた。旧版は 'Their legal team is still reviewing it.' で、
       vol2-l1.js No.8 の Part 2 正解 'Legal is still reviewing it.' と内容語の一致率 0.75。
       「法務がまだ確認中だ」＝「まだ確定していない」という装置まで同じで、さらに
       vol4-l1.js No.22 の正解 'Legal is still drafting the paperwork.' もあり、corpus で
       3 度目の使い回しになっていた。前の巻を解いた記憶からこの設問の正解が手に入る。
       新しい正解は「署名されたのは基本合意書であって契約書ではない」と対象を限定して
       前提を訂正する型。letter of intent は assets/data 全体で他に用例なし。
       誤答 2 つは変えていない。(B) は sign for（受領のサインをする）との語義のずれ、
       (C) は署名の有無に触れていないことで切れる。 */
    p: "Didn't you say the Ridgeway contract had already been signed?",
    c: ['Only the letter of intent was signed.', 'I signed for the parcel myself.', 'The Ridgeway office moved to Fulton Street.'],
    a: 0,
    e: '「契約書が署名済み」という前提を、署名されたのは基本合意書のほうだと対象を限定して訂正する応答。Yes/No を使わずに前提そのものを正す型。',
    w: [
      '正解。署名済みなのは基本合意書（letter of intent）であって契約書ではない、と対象を限定して前提を訂正している。',
      'sign の反復。sign for は目的語に受け取る側の物を取り、「それを受け取った証しにサインする」を表す（sign for the package／sign for this, please）。ここで署名の対象になっているのは小包であって、話題のリッジウェイ社との契約書ではない。契約書に署名が済んでいるかどうかに答えていない。',
      '先方の事務所の移転先の話で、署名の有無に答えていない。',
    ],
    ja: 'リッジウェイ社との契約はもう署名済みだと言っていませんでしたか。→ (A) 署名したのは基本合意書のほうです。',
  }),

  p2(29, {
    t: ['p2ind'], lv: 5, sa: 'M-Au', sb: 'W-Cn',
    p: 'Would you be able to train the new hire on the expense system this week?',
    c: ["I'm fully booked until Friday.", 'The expense system was updated recently.', 'She was hired through an agency.'],
    a: 0,
    e: '依頼に対し、対応できない事情を述べる遠回しな断り。',
    w: [
      '正解。金曜まで予定が詰まっていると伝えることで断っている。',
      '経費システムの更新の話で、依頼への応答になっていない。',
      '採用の経路の話で、今週対応できるかどうかに答えていない。',
    ],
    ja: '今週、経費システムについて新入社員に教えてもらえますか。→ (A) 金曜まで予定が詰まっているんです。',
  }),

  p2(30, {
    t: ['p2ind'], lv: 5, sa: 'W-Am', sb: 'M-Br',
    p: 'The visitor sign-in sheet is completely full.',
    c: ['The visitors signed out an hour ago.', 'The sign-in desk opens at eight.', "I'll print out a new one."],
    a: 2,
    e: '困りごとの報告に対し、解決策を提示する応答。',
    w: ['退出の話で、用紙が満杯だという問題への応答になっていない。', 'sign-in の反復。受付の開始時刻の話で、用紙が満杯であることへの対応になっていない。', '正解。新しい用紙を印刷しようという解決策。'],
    ja: '来客用の記入用紙がいっぱいになっています。→ (C) 新しいものを印刷しますね。',
  }),

  p2(31, {
    t: ['p2wh'], lv: 3, sa: 'M-Br', sb: 'W-Au',
    p: 'Did the electrician get the floodlights working again?',
    c: ['The light switch is by the side door.', 'He works out of the Dunmore branch.', 'Yes, they came back on last night.'],
    a: 2,
    e: 'Yes/No 疑問に対し、復旧したと直接答えている応答。',
    w: [
      'light の反復。屋内の照明スイッチの場所を答えており、投光器が直ったかどうかに答えていない。',
      'work の反復。電気工の勤務先の話で、復旧したかどうかに答えていない。',
      '正解。昨夜には点くようになったと直接答えている。',
    ],
    ja: '電気工の人、投光器を直してくれましたか。→ (C) はい、昨夜には点くようになりました。',
  }),
];
