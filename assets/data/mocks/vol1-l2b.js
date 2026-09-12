/* =============================================================
   予想模試 Vol.1 — Part 3 後半（No.53–70）
   終盤 3 セットは図表問題。
   ============================================================= */

const set = (o) => ({
  id: `v1-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: `v1q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2B = [

  /* ── 53–55 ─────────────────────────────────────────── */
  set({
    n: [53, 54, 55], lv: 4, k: 'conversation with three speakers',
    s: [
      { role: 'M-Am', text: 'Before we finish — the archive digitisation. Where are we?' },
      { role: 'W-Br', text: 'Scanning is done. All eleven thousand pages. The problem is the metadata.' },
      { role: 'M-Am', text: 'Meaning?' },
      { role: 'W-Br', text: 'Each scan needs a date, a place and a subject tag before it\'s searchable. The software guesses, but it guessed wrong on about a third of the sample I checked.' },
      { role: 'M-Cn', text: 'A third is too high to correct by hand at this volume.' },
      { role: 'W-Br', text: 'Agreed. But the errors aren\'t random. Almost all of them are pre-1950 documents, where the handwriting is harder to read.' },
      { role: 'M-Cn', text: 'So we could accept the software output for anything after 1950 and hand-check only the older material.' },
      { role: 'W-Br', text: 'That\'s about fifteen hundred pages. Two people could do it in a fortnight.' },
      { role: 'M-Am', text: 'Then draw up a plan on that basis and I\'ll find the two people.' },
    ],
    ja: '資料のデジタル化について、スキャンは 1 万 1 千ページすべて完了したが、メタデータ（日付・場所・主題タグ）が問題だと報告される。ソフトの自動推定は抽出調査で約 3 分の 1 が誤り。手作業での全数修正は量的に無理だが、誤りは 1950 年以前の文書（手書きが読みにくい）にほぼ集中していると判明。1950 年以降はソフト出力をそのまま採用し、それ以前の約 1,500 ページのみ人手で確認する方針となる。2 名で 2 週間の見込みで、計画を立てることになった。',
    v: [['metadata', 'メタデータ'], ['searchable', '検索可能な'], ['fortnight', '2 週間'], ['draw up', '（計画を）作成する']],
    q: [
      { tag: '概要', s: 'What has already been completed?',
        c: ['The tagging of all documents', 'The purchase of new software', 'The scanning of the collection', 'The recruitment of two assistants'],
        a: 2,
        e: '「スキャンは完了。全 1 万 1 千ページ」と述べられている。',
        w: ['タグ付けが残っている課題。', 'ソフト購入の話はない。', '正解。', '人員はこれから探す。'] },
      { tag: '詳細', s: 'What does the woman say about the errors?',
        c: ['They were introduced during scanning.', 'They occur mainly in place names.', 'They affect about half the collection.', 'They are concentrated in older documents.'],
        a: 3,
        e: '「誤りはランダムではなく、ほぼすべて 1950 年以前の文書」と述べている。',
        w: ['スキャン時ではなく自動タグ付けの誤り。', '地名に限定されるとは述べていない。', '約 3 分の 1 であり半分ではない。', '正解。'] },
      { tag: '次の行動', s: 'What will the woman most likely do next?',
        c: ['Re-scan the older material', 'Interview candidates for the role', 'Contact the software vendor', 'Prepare a plan for partial checking'],
        a: 3,
        e: '最後に「その方針で計画を立てて」と指示され、人員手配は男性が行う。',
        w: ['再スキャンの必要はない。', '人選は男性が担当する。', 'ベンダー連絡の話はない。', '正解。'] },
    ],
  }),

  /* ── 56–58 ─────────────────────────────────────────── */
  set({
    n: [56, 57, 58], lv: 4,
    s: [
      { role: 'W-Au', text: 'Hello, this is Marta Kovač from unit 6B. The heating in the flat hasn\'t come on since Sunday.' },
      { role: 'M-Br', text: 'I\'m sorry to hear that. Is it the whole flat or just one room?' },
      { role: 'W-Au', text: 'The whole flat. The boiler makes a sound like it\'s starting and then stops.' },
      { role: 'M-Br', text: 'That\'s usually the pressure. Could you look at the gauge on the front of the boiler and tell me what the needle is pointing at?' },
      { role: 'W-Au', text: 'Just a moment. It\'s a little below one.' },
      { role: 'M-Br', text: 'That\'s your answer. It should sit between one and one and a half. I can talk you through repressurising it now, or send an engineer tomorrow afternoon.' },
      { role: 'W-Au', text: 'I\'d rather have someone do it properly. I\'m out until four, though.' },
      { role: 'M-Br', text: 'I\'ll book the four-to-six slot and text you a confirmation.' },
    ],
    ja: '6B 号室のコバチ氏が日曜から暖房が入らないと管理会社に電話。ボイラーは起動音のあと停止するという。担当者は圧力が原因と見て、ボイラー前面のゲージの針を確認するよう依頼。1 をわずかに下回っており、正常値は 1〜1.5 と説明される。電話で加圧手順を案内するか、翌日午後に技術者を派遣するかを提案し、女性は 4 時まで不在のため 16〜18 時の枠で技術者派遣を予約、確認をショートメッセージで送ることになる。',
    v: [['boiler', '給湯暖房機'], ['gauge', '計器'], ['repressurise', '加圧し直す'], ['slot', '（予約の）枠']],
    q: [
      { tag: '概要', s: 'Why is the woman calling?',
        c: ['To report a heating fault', 'To arrange a routine inspection', 'To query a utility bill', 'To request a change of flat'],
        a: 0,
        e: '「日曜から暖房が入らない」という不具合の報告。',
        w: ['正解。', '定期点検の依頼ではない。', '請求の照会ではない。', '住戸変更の話はない。'] },
      { tag: '詳細', s: 'What does the man ask the woman to check?',
        c: ['The thermostat setting', 'The radiator valves', 'A pressure reading', 'Circuit breaker wiring'],
        a: 2,
        e: '「ボイラー前面のゲージの針が何を指しているか」＝圧力の値を確認するよう求めている。',
        w: ['サーモスタットの話はない。', 'ラジエーターの弁ではない。', '正解。', 'ブレーカーには触れていない。'] },
      { tag: '次の行動', s: 'What will happen tomorrow?',
        c: ['The woman will repressurise the boiler herself.', 'An engineer will visit in the late afternoon.', 'A technician will replace the boiler.', 'The woman will call back with a reading.'],
        a: 1,
        e: '「16〜18 時の枠で予約する」と述べられている。',
        w: ['自分でやるより技術者を希望した。', '正解。', '交換の話は出ていない。', '数値はすでに伝えている。'] },
    ],
  }),

  /* ── 59–61 ─────────────────────────────────────────── */
  set({
    n: [59, 60, 61], lv: 5,
    s: [
      { role: 'M-Cn', text: 'Ingrid, I read your write-up on the packaging trial. One thing isn\'t clear to me.' },
      { role: 'W-Am', text: 'Go ahead.' },
      { role: 'M-Cn', text: 'You say breakage fell from four percent to one. But the trial ran in July and the baseline is from February.' },
      { role: 'W-Am', text: 'You are asking whether the weather explains it.' },
      { role: 'M-Cn', text: 'Partly. Cold makes the old material brittle, doesn\'t it?' },
      { role: 'W-Am', text: 'It does. Which is why I also pulled last July for comparison. Breakage that month was three point six.' },
      { role: 'M-Cn', text: 'Ah. So the drop holds even against a same-season baseline.' },
      { role: 'W-Am', text: 'It does. I left that out of the summary to keep it to one page, but it\'s in the appendix.' },
      { role: 'M-Cn', text: 'Move it into the summary. That comparison is the whole argument.' },
    ],
    ja: '男性が包装材の試験報告について、破損率が 4 パーセントから 1 パーセントに下がったとあるが、試験は 7 月で基準値は 2 月のものだと指摘。女性は「天候が理由ではないかという趣旨ですね」と受け、寒さで旧素材が脆くなる点を認めたうえで、前年 7 月の数値（3.6 パーセント）も比較用に出していると説明する。同季比較でも改善が成立していることが確認され、男性はその比較を要約本文に移すよう求める。',
    v: [['breakage', '破損（率）'], ['baseline', '基準値'], ['brittle', '脆い'], ['appendix', '付録']],
    q: [
      { tag: '詳細', s: 'What concern does the man raise?',
        c: ["Last July's figures were not pulled at all.", 'The comparison periods differ in season.', 'The new material costs more.', 'The trial was not independently reviewed.'],
        a: 1,
        e: '「試験は 7 月、基準値は 2 月」という季節のずれを問題にしている。',
        w: ['女性は "Which is why I also pulled last July for comparison. Breakage that month was three point six." と述べ、前年 7 月の数値を実際に引き出して示している。まったく引き出していないとするこの記述は本文と正面から矛盾するので偽。', '正解。', '費用には触れていない。', '第三者検証の話はない。'] },
      { tag: '意図', s: 'What does the woman mean when she says, "You are asking whether the weather explains it"?',
        t: ['p3int'],
        c: ['She is restating his concern before answering it.', 'She disagrees that the weather is relevant to the result.', 'She needs him to repeat the question in different words.', 'She is unsure how to respond until she checks the appendix.'],
        a: 0,
        e: '直後に「まさにその理由で前年 7 月も比較した」と続く。相手の懸念を言い換えて確認し、その上で答えている。',
        w: ['正解。', '関連性を否定していない。むしろ「寒さで旧素材が脆くなる」と認めたうえで、前年 7 月との比較を示している。', '聞き返してはおらず、直後に相手の懸念を正しく言い換えたうえで自ら答えている。', '即座に明確に答えており、回答のために付録を確認してはいない。付録は要約に載せなかった数値の保管場所として後で言及されるだけである。'] },
      { tag: '次の行動', s: 'What does the man ask the woman to do?',
        c: ['Include a comparison in the main summary', 'Repeat the trial in winter', 'Shorten the report to one page', 'Send the data to an external analyst'],
        a: 0,
        e: '「その比較を要約本文に移してほしい。それが論拠そのものだ」と述べている。',
        w: ['正解。', '再試験は求めていない。', '既に 1 ページで、むしろ追記を求めている。', '外部分析の依頼はない。'] },
    ],
  }),

  /* ── 62–64（図表）────────────────────────────────── */
  /* 本番の TOEIC は "Look at the graphic." の設問を1セットに1問しか置かない。この模試は
     長らく1セット2問（62・63）を置いており、2問目が必然的に1問目の正解を先行詞で受ける
     鎖になっていた（実際、旧 No.63 は "the room that is booked from ten until two that day"
     のように問い方を変えて凌いでいたが、それでも図表設問が2問残る構造自体は解消していなかった）。
     2026-08-24 の是正で、No.63 を「図表を見なくても音声だけで解ける通常設問」に差し替え、
     本番仕様（1セット1問）に揃えた。旧 No.63（id v1q63r、Oak の時間料金 €24 を問う図表設問）は
     この差し替えでまるごと不要になった。
     新しい No.63（id v1q63s）はワークショップの参加人数（"There will be twelve of us." と
     音声に明示）を問う設問で、No.62 の正解（Willow）にも No.64 の正解
     （2 週間以上前の予約という早期割引の理由）にも触れない。
     set() は id を no から自動生成し、この設問だけ id を新規採番する手段がないため、
     このユニットだけヘルパーを使わず直接記述する。
     No.64 も id を新規採番済み（v1q64r、以前の是正）。旧選択肢 (D)「He is reserving the
     largest room.」は誤答でありながら事実としては真（男性は実際に最大の部屋 Willow を
     予約する）で、設問を先読みした受験者が図表の座席数列だけで「最大の部屋＝Willow」と
     分かり、No.62 の正解を音声なしで強く絞り込めてしまっていた。(D) を「He is booking
     more than one room.」（会話全体を通じて予約は 1 室のみで明確に偽、他のどの設問の
     答えにも触れない）に差し替えた。(A)〜(C) と正解位置（index 0）は変更していない。
     2026-08-25 の是正：No.62 自体に「座席数・料金ともに Willow が最大」という欠陥が残って
     いた（Larch 4/€9・Maple 8/€15・Oak 14/€24・Willow 22/€38、単調増加）。2 軸とも最大の
     行を選べば当たるため、会話を聞かなくても表だけで正解できていた。座席数と料金の対応を
     崩し、Willow（正解）をどちらの列でも最大・最小にならない中間の値に変更した
     （Larch 4/€9・Oak 14/€33・Willow 18/€24・Maple 26/€19。Maple が座席数最大・料金最安、
     Oak が料金最大という非単調な配置にすることで、「一番大きい／一番高い部屋を選ぶ」という
     当てずっぽうが機能しなくなる）。"next size up"（14 席のすぐ上）は 18 席の Willow を指し、
     26 席の Maple はさらにもう一段階大きいので対象外——という、表の順序に基づく閉じた推論の
     みで正解に至る形にした。会話（音声）と No.63・No.64 の内容・正解は変更していない。
     設問 id は表の実質変更に伴い v1q62 → v1q62r に新規採番した。

     2026-08-25 の追加是正（レビュー役の監査差し戻し）：上記の是正後もなお 2 件の欠陥が残っていた。
     (1) 女性の "It is." が男性の "if it's the only option that fits us"（12 名が入る唯一の
     選択肢）を肯定する台詞だったが、直した表では Maple（26 席）にも 12 名は入り、Maple が
     予約不可であるとはどこにも述べられていなかった。第二の正解（Maple も条件を満たす）が
     生じていた。(2) 座席数と料金が非単調（Oak 14 席 €33 > Willow 18 席 €24）で、物語として
     不自然だった。
     両方を是正するため、料金を座席数と単調に対応させ（Larch 4/€9・Oak 14/€24・Willow 18/€28・
     Maple 26/€38。座席数・料金のどちらでも Willow は 4 択中 3 番目で極端値にならない）、かつ
     会話に "Our largest room is closed for redecorating this month" という一文を足して
     Maple を明示的に予約対象から除外した。これにより「11〜13 時に空いていて 12 名が入る
     部屋」は、14 席の Oak（10〜14 時で予約済み）でも 26 席の Maple（改装で閉鎖）でもなく、
     18 席の Willow だけになり、"the only option that fits us" が文字どおり真になる。
     "our largest room" という最上級は表の最大値（Maple＝26 席・€38、誤答）を名指しするが、
     これは「一番大きい部屋を選べば当たる」という当てずっぽうを助長しない——Maple は最初から
     一番大きく・一番高い当てずっぽうの行き先であり、それが除外されると分かっても、残る
     Oak と Willow のどちらが正解かは「Oak は時間帯が合わない」という別の情報を聞かないと
     決まらないため。
     No.63 の選択肢は別途、是正5（下記）で全巻唯一の小文字始まりを是正しており、その過程で
     Oak の座席数（14）を使った誤答 "Fourteen" を追加した。Oak は No.62 の誤答（時間帯が
     合わず予約できない部屋）であり、"Fourteen"（参加人数と取り違える罠）が No.62 の正解
     Willow を示唆することはない。
     設問 id は表・会話・解説の実質変更に伴い v1q62r → v1q62t、v1q63s → v1q63t に
     新規採番した。No.64（v1q64r）の内容・正解は変更していない。 */
  {
    id: 'v1-p3-62', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    script: [
      { role: 'W-Br', text: 'Trellis Co-working, good afternoon.' },
      { role: 'M-Am', text: 'Hello. I\'d like to book a room for a workshop on the nineteenth. There will be twelve of us.' },
      { role: 'W-Br', text: 'Twelve. Let me see what is free that day. The room that seats fourteen is taken from ten until two, I\'m afraid.' },
      { role: 'M-Am', text: 'We were planning eleven to one.' },
      { role: 'W-Br', text: 'Then that one\'s out. Our largest room is closed for redecorating this month, but I do have the next size up from fourteen, available all day.' },
      { role: 'M-Am', text: 'That\'s more space than we need, but if it\'s the only option that fits us, we\'ll take it.' },
      { role: 'W-Br', text: 'It is. And because you\'re booking more than two weeks ahead, I can apply our early-booking discount of ten percent.' },
      { role: 'M-Am', text: 'Good. Two hours, then.' },
    ],
    graphic: {
      t: 'table', title: 'Trellis Co-working — Room Booking Fees',
      head: ['Room', 'Seats', 'Hourly rate'],
      rows: [['Larch', '4', '€9'], ['Oak', '14', '€24'], ['Willow', '18', '€28'], ['Maple', '26', '€38']],
    },
    ja: '男性が 19 日に 12 名のワークショップ用の部屋を予約したいと電話。14 名収容の部屋（Oak）は 10 時から 14 時まで予約済みで、希望は 11 時から 13 時のため使えない。最大の部屋（Maple）は今月改装のため閉鎖中とのことで、14 席のすぐ上のサイズ（18 名収容の Willow）が終日空いており、広すぎるがそれしか合わないため予約。2 週間以上前の予約なので早期割引 10 パーセントが適用される。',
    vocab: [['seat', '（人数を）収容する'], ['early-booking discount', '早期予約割引']],
    questions: [
      { id: 'v1q62t', no: 62, tag: '図表', stem: 'Look at the graphic. Which room will the man reserve?',
        choices: ['Larch', 'Maple', 'Oak', 'Willow'],
        answer: 3,
        exp: '12 名なら 14 席の Oak で足りるが、11〜13 時は予約済みで使えない。26 席の Maple は今月改装のため閉鎖中で選べない。残るのは 14 席のすぐ上のサイズである 18 席の Willow だけで、男性の「それしか合わないなら」という発言とも一致する。',
        why: ['4 席では 12 名が入らない。', '26 席で人数は足りるが、最大の部屋のため今月は改装で閉鎖中と案内されており、選べない。', '14 席で人数は足りるが、希望の時間帯（11〜13 時）は予約済みで使えない。', '正解。'],
        topics: ['graphic'] },
      { id: 'v1q63t', no: 63, tag: '詳細', stem: 'How many people will attend the workshop?',
        choices: ['Ten', 'Twelve', 'Fourteen', 'Nineteen'],
        answer: 1,
        exp: '男性が冒頭で「12 名で行きます」と参加人数を告げ、女性が「12 名ですね」と復唱して確認している。参加人数は 12 名で確定する。',
        why: [
          '"from ten until two" は Oak が予約済みの時間帯、"ten percent" は早期割引率を指し、いずれも参加人数ではない。参加人数は男性が明言した 12 名で確定する。',
          '正解。男性の「12 名で行きます」と、女性の「12 名ですね」という復唱の両方で確認できる。',
          '"the room that seats fourteen" は Oak（希望の時間帯には使えない部屋）の座席数であり、参加人数ではない。参加人数は 12 名と明言されている。',
          '"a workshop on the nineteenth" は開催日（19 日）であり、参加人数ではない。参加人数は 12 名と明言されている。',
        ],
        topics: ['p3detail'] },
      { id: 'v1q64r', no: 64, tag: '詳細', stem: 'Why is the man eligible for a discount?',
        choices: ['He is booking well in advance.', 'He is booking for more than two hours.', 'He is a returning customer.', 'He is booking more than one room.'],
        answer: 0,
        exp: '「2 週間以上前の予約だから早期割引が使える」と説明されている。',
        why: ['正解。', '時間数は 2 時間で、条件として述べられていない。', '再来訪の話はない。', '会話を通じて予約しているのは 1 室のみで、複数の部屋を予約してはいない。'],
        topics: ['graphic'] },
    ],
  },

  /* ── 65–67（図表）────────────────────────────────── */
  /* 2026-08-25 是正：4系列のうち Outerwear だけが 164→171→243 と大きく動き、他3系列
     （Footwear 210→198→186／Knitwear 132→128→119／Accessories 88→91→86）は
     横ばいか減少のみだった。「1行だけ毛色が違う」ため、"the only line that moved
     much at all" という台詞と表を突き合わせるだけで、音声の具体的な数値を聞かずに
     Outerwear に絞り込めていた。
     今回、他3系列にも動きを持たせたうえで、Outerwear の決め手（「第2四半期から
     第3四半期にかけて70点を超えて増加」）と紛らわしいが条件を満たさない値を
     意図的に配置した。Knitwear は 132→212→219 と表内で最大の増加（+80）を示すが、
     これは第1四半期→第2四半期の変化であり「第2四半期から第3四半期にかけて」という
     時期の条件に当てはまらない（「表内で一番動いた行を選ぶ」を無効化）。Accessories は
     88→91→152 と第2四半期から第3四半期にかけて増加する点は Outerwear と同じだが、
     増加幅は+61で「70点を超える」という条件を満たさない（「正しい四半期の増加行を
     選ぶ」だけでは2択が残る）。Footwear は 145→149→152 と小幅な増加のみで、
     いずれの条件にも当てはまらない。
     台詞の "Three of the four categories are flat or improving." と
     "It's the only line that moved much at all." は新しい表では成立しなくなるため、
     両方とも削除し、男性が Outerwear の条件（増加幅・時期）を直接述べる形に書き換えた。
     Category 名・選択肢の並び・正解（Outerwear、choices の1番目）は変更していないため
     answer の index は 0 のまま。No.66・No.67 は本文中の当該発言（理由コード・仕入先・
     依頼内容）を変更していないため答え・id とも変更しない。No.65 は表・音声・解説を
     書き換えたため、このユニットだけ set() ヘルパーを使わず直接記述し、設問 id を
     新規採番する（v1q65 → v1q65r、no は 65 のまま）。 */
  /* 2026-08-25 是正（2巡目、レビュー差し戻し対応）：上の是正後も、正解の Outerwear
     （164/171/243）が表内で最大セル（243）・Q3列の最大・行合計の最大（578）を
     兼ねてしまっていた。「Q2→Q3 の変化幅で選ぶ」トラップは効いていたが（Knitwear が
     表内最大の変化 +80 を持つため）、「表で一番大きい数字・一番大きい行を選ぶ」という
     何も聞かずに使える別の当てずっぽうがそのまま通ってしまう状態だった。
     Footwear の数値を 145/149/152 から 245/249/252 に引き上げた。これにより
     最大セル（252）・Q3列最大（252）・行合計最大（746）はすべて誤答行（Footwear）に
     移り、Knitwear の Q1→Q2 +80（表内最大の変化）はそのまま、Outerwear の
     Q2→Q3 +72（「70点超」を満たす唯一の変化）もそのまま維持された。Footwear 自身は
     Q1→Q2 が +4、Q2→Q3 が +3 とほぼ横ばいで、どちらの条件（70点超の増加・該当する
     四半期）も満たさない。
     「どの列でも印（最大・最小）が付かない唯一の行になっていないか」も確認した。
     新しい数値では Q1〜Q3 のすべての列で Footwear が最大、Accessories が最小となり、
     Outerwear と Knitwear はどちらの列でも最大にも最小にもならない——「無印の行」が
     2行（Outerwear・Knitwear）になるため、無印であること自体では1行に絞れない。
     音声（"One category is up by more than seventy units, specifically between
     the second and third quarter."）は数値そのものに触れていないため変更していない。
     表の数値のみ変更したため、答え・choices の並びは変えていないが、設問 id は
     新規採番する（v1q65r → v1q65r2、no は 65 のまま）。answer の index は
     0 のまま維持した。 */
  /* 2026-08-25 是正（3巡目、監査差し戻し対応）：上の2巡目の是正後も、条件「Q2→Q3 で
     70点を超えて増加」を満たす行が Outerwear（+72）だけで、これが同時に「70点超の
     増加行のうちで最大の増加幅」でもあったため、「表内で一番大きく動いた行を選ぶ」
     という当てずっぽうがそのまま正解に一致していた（表だけで100%的中）。
     監査役の案(ii) に従い、Accessories の Q3 を 152 → 165 に引き上げて Q2→Q3 の
     増加幅を +61 → +74 にし、70点超の増加行を Outerwear（+72）・Accessories（+74）
     の2行にした。この2行だけを比べると「大きいほうを選ぶ」は Accessories に落ちる
     （+74 > +72）ため、量の大小だけでは正解を決められない。
     そのうえで、量に優劣のない種別列 Range（Core／Seasonal）を追加し、Footwear・
     Outerwear を Core、Knitwear・Accessories を Seasonal とした（2行ずつに均等）。
     音声を「70点超の増加行が2つあるが、片方は季節商品でこの時期の増加は珍しくなく、
     基幹ラインのほうこそ本当の懸念だ」と書き換え、「70点超の増加」と「Core」の
     両方を満たす Outerwear だけに絞り込む形にした。
     他の当てずっぽう経路も確認済み：Q1・Q2・Q3 の各列とも最大は Footwear・最小は
     Accessories で、Outerwear はどの生の列でも極値にならない。行合計も最大は
     Footwear（746）・最小は Accessories（344）で、Outerwear（578）は中間。
     Q1→Q2 の増加幅は Knitwear が表内最大（+80）で、これは対象の時期（第2四半期→
     第3四半期）に当てはまらない。「どの列でも極値を持たない行」を探すと Outerwear と
     Knitwear の2行が残るが、この2行は Range で Core／Seasonal に分かれており、
     ここでも Core の指定が Outerwear だけに絞り込む。
     Category 名・choices の並び・正解位置（index 0）は変更していないため answer は
     0 のまま維持した。No.65 は表・音声・解説を書き換えたため、このユニットだけ
     set() ヘルパーを使わず直接記述し、設問 id を新規採番する（v1q65r2 → v1q65r3、
     no は 65 のまま）。

     あわせて2つの残存漏れも是正した。
     (1) No.66 の正解 "A defective component from a new supplier" が4択で唯一
     supplier を含む一方、No.67 の (B) "A meeting with the supplier" にも
     supplier が出ており、設問をまたいだ先読みで正解が示唆されていた。No.67 の
     (B) を "A meeting with the factory manager" に差し替え、supplier という
     語を No.66 の正解だけに残した。
     (2) No.66 は選択肢の語数が 3/7/3/6 で正解（7語）が単独最長、No.67 も
     6/5/4/5 で正解（6語）が単独最長だった。No.66 の誤答3つをそれぞれ
     "Inaccurate size labelling on the packaging."（6語）、
     "Delays in delivery from the warehouse."（6語）、
     "A change in the returns policy itself."（7語）に伸ばし、正解の7語と
     並ぶ長さにした（7語が正解と (D) の2つになり単独最長ではなくなる）。No.67 は
     (B) を上記の言い換えで6語にし、(C) を "A revised monthly sales forecast"
     （5語）に伸ばして、6/6/5/5 という正解が単独最長にならない分布にした。
     内容・正解はいずれも変えていない。No.66・No.67 とも選択肢の文言を変更したため
     id を新規採番する（v1q66 → v1q66r、v1q67 → v1q67r、no はそれぞれ 66・67 の
     まま）。 */
  /* 2026-08-25 是正（4巡目、監査差し戻し対応）：3巡目の是正（Range 列の追加）後も、
     「Core」という1条件だけで Core の2行（Footwear・Outerwear）に絞り込み、その中で
     「実際に動いているほう」を選べば Outerwear が一意に決まってしまっていた（Footwear は
     Q1→Q2→Q3 が 245/249/252 とほぼ横ばいのため）。「70点超の増加」も「第2四半期から第3
     四半期にかけて」という時期の条件も、Q1〜Q3 の生数値が表に残っている限り表だけで検算
     できてしまい、音声を聞く必要が実質無かった。
     監査役の案A（種別×種別の 2×2 に組み替える）を採用し、Q1〜Q3 の数量列を表から撤去した。
     「70点を超えて増加」という情報は音声だけが持つ情報にし、表からは検証できないようにした。
     Range（Core／Seasonal）はそのまま残し、もう1つの中立な種別として Buyer（Team North／
     Team South。地域担当の社内バイヤーで、量に優劣の無い属性）を追加した。
     Footwear=Core/Team North、Knitwear=Seasonal/Team South、Outerwear=Core/Team South、
     Accessories=Seasonal/Team North とし、Range・Buyer のどちらも値がちょうど2回ずつ出て、
     4行の組み合わせがすべて異なる 2×2 になる。
     音声は「基幹ラインで季節商品ではない」（Range 条件、Footwear・Outerwear の2択に絞る）と
     「Team South の扱い」（Buyer 条件、Knitwear・Outerwear の2択に絞る）の両方を述べ、両方を
     組み合わせて初めて Outerwear 一つに決まる形にした。表には数量列が無いためどの列にも
     最大・最小・唯一値は存在せず、「表で目立つ行を選ぶ」当てずっぽうは機能しない。
     あわせて、音声の "The reason codes point at the zips." が世界知識で「ジッパー付きの
     ニットは稀」と Knitwear をほぼ排除し Outerwear に傾ける効果を持っていたため、
     "the zips" を "the fastenings"（留め具全般。4カテゴリすべてに存在しうる）に差し替えた。
     No.66 の答え（不良部品・新しい仕入先・留め具の不具合）と No.67 の答え（絶対数ではなく
     割合での依頼）はいずれも変更していない。「A sizing change, maybe?」という女性の発言も
     No.66 の why[0] の根拠として維持している。
     また、No.66 の選択肢のうち正解 (B) だけ文末ピリオドが無く、他3つには付いている回帰
     （HEAD では4択とも無しで揃っていた）を発見し、4択とも無しに統一した（同じセットの
     No.67 も4択ともピリオド無しで、これに合わせた）。句読点だけの変更のため No.66 の id は
     変更していない。
     No.65 は表・音声・exp・why を実質的に書き換えたため id を新規採番する
     （v1q65r3 → v1q65r4、no は 65 のまま、answer の index は 0 のまま変更なし）。
     No.67 は script の変更を共有するが自身の stem・choices・answer・why は変更していないため
     id は維持する（v1q67r のまま）。 */
  {
    id: 'v1-p3-65', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    graphic: {
      t: 'table', title: 'Returns Review — Category Profile',
      head: ['Category', 'Range', 'Buyer'],
      rows: [
        ['Footwear', 'Core', 'Team North'],
        ['Knitwear', 'Seasonal', 'Team South'],
        ['Outerwear', 'Core', 'Team South'],
        ['Accessories', 'Seasonal', 'Team North'],
      ],
    },
    script: [
      { role: 'M-Br', text: 'Priya, the returns figures came through. One line is up by more than seventy units between the second and third quarter, and it\'s one of our core lines, not one of the seasonal ones.' },
      { role: 'W-Au', text: 'Do we know exactly which one?' },
      { role: 'M-Br', text: 'It\'s one of Team South\'s.' },
      { role: 'W-Au', text: 'Do we know why? A sizing change, maybe?' },
      { role: 'M-Br', text: 'The reason codes point at the fastenings. Sixty percent of that category\'s returns in Q3 cite a faulty fastening.' },
      { role: 'W-Au', text: 'That\'ll be the new supplier we moved to in June. Can you get me the return rate as a percentage of units sold rather than absolute numbers?' },
      { role: 'M-Br', text: 'I can have that by Thursday.' },
      { role: 'W-Au', text: 'Good. If it confirms what I think, we go back to the previous supplier for the spring run.' },
    ],
    ja: '返品状況のレビューについて、男性が、季節商品ではなく基幹ラインの系列が1つ、第2四半期から第3四半期にかけて70点を超えて増加していると述べる。女性がどの系列かと尋ねると、Team South が扱っているものだと分かる。女性はサイズ変更が原因かと尋ねるが、男性は理由コードが留め具（fastenings）の不良を示していると答える。第3四半期の同カテゴリ返品の60パーセントが留め具の不具合を挙げている。6月に切り替えた新しい仕入先が原因と推測され、絶対数ではなく販売数に対する返品率を木曜までに出すことになった。裏づけが取れれば春物は従来の仕入先に戻す方針。',
    vocab: [['returns', '返品'], ['reason code', '理由コード'], ['fastening', '留め具'], ['run', '（生産の）ロット'], ['core line', '基幹ライン'], ['seasonal line', '季節商品ライン']],
    questions: [
      { id: 'v1q65r4', no: 65, tag: '図表', stem: 'Look at the graphic. Which category are the speakers discussing?',
        choices: ['Outerwear', 'Footwear', 'Knitwear', 'Accessories'],
        answer: 0,
        exp: 'Q2 から Q3 にかけて 70 点を超えて増加している系列が1つあり、それは基幹ライン（Core）で季節商品ではないと述べられている。この条件だけでは Core の2行、Footwear と Outerwear が残る。続けて、その系列は Team South の扱いだと分かる。この条件だけでは Team South の2行、Knitwear と Outerwear が残る。「Core」と「Team South」の両方を満たす行は Outerwear だけであり、これが正解となる。表には数量の列が無く、Range・Buyer のどちらも値に優劣が無いため、「表で目立つ行を選ぶ」当てずっぽうは機能しない。',
        why: ['正解。', 'Footwear は基幹ライン（Core）で季節商品ではないという条件は満たすが、Team North の扱いであり、Team South という条件は満たさない。', 'Knitwear は Team South の扱いという条件は満たすが、季節商品（Seasonal）に区分されており、基幹ラインで季節商品ではないという条件は満たさない。', 'Accessories は季節商品（Seasonal）かつ Team North の扱いで、どちらの条件も満たさない。'],
        topics: ['graphic'] },
      { id: 'v1q66r', no: 66, tag: '詳細', stem: 'What is given as the likely cause?',
        choices: ['Inaccurate size labelling on the packaging', 'A defective component from a new supplier', 'Delays in delivery from the warehouse', 'A change in the returns policy itself'],
        answer: 1,
        exp: '「理由コードは留め具（fastenings）の不良を示す」「6 月に切り替えた新しい仕入先だろう」が根拠。',
        why: ['女性が挙げた推測は「サイズの変更が原因では」というもので、包装のサイズ表示が誤っているという話は誰もしていない。男性はその推測に対し「理由コードが指しているのは留め具（fastenings）だ」と別の原因を答えている。', '正解。', '配送遅延の話はない。', '返品規定の変更には触れていない。'],
        topics: ['p3detail'] },
      { id: 'v1q67r', no: 67, tag: '次の行動', stem: 'What does the woman ask for?',
        choices: ['Return figures expressed as a percentage', 'A meeting with the factory manager', 'A revised monthly sales forecast', 'Photographs of the faulty items'],
        answer: 0,
        exp: '「絶対数ではなく販売数に対する割合で出してほしい」と依頼している。',
        why: ['正解。', '工場長との面談を求める発言はない。仕入先については「裏づけが取れれば春物は従来の仕入先に戻す」と述べているだけである。', '女性が求めたのは販売数に対する返品の割合であり、売上予測の作成には触れていない。', '不良品の写真を送るよう求める発言はない。'],
        topics: ['p3detail'] },
    ],
  },

  /* ── 68–70（図表）────────────────────────────────── */
  set({
    n: [68, 69, 70], lv: 5, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Harbourview Gallery — Floor Directory',
      head: ['Floor', 'Space'],
      rows: [
        ['Ground', 'Ticketing / Cloakroom'],
        ['1', 'Permanent Collection'],
        ['2', 'Temporary Exhibition'],
        ['3', 'Print Study Room'],
      ],
    },
    s: [
      { role: 'W-Am', text: 'Excuse me, I have a research appointment at three to look at the Vasari engravings.' },
      { role: 'M-Cn', text: 'Of course. Have you been to that part of the building before?' },
      { role: 'W-Am', text: 'No, this is my first visit.' },
      { role: 'M-Cn', text: 'Then two things. The lift only serves the first two floors, so you\'ll need the stairs at the far end for the last flight.' },
      { role: 'W-Am', text: 'That\'s fine.' },
      { role: 'M-Cn', text: 'And bags larger than a laptop case aren\'t permitted above the second floor. You can leave yours downstairs at no charge.' },
      { role: 'W-Am', text: 'I\'ll do that on the way. Do I need to show anything at the desk up there?' },
      { role: 'M-Cn', text: 'Just the confirmation e-mail. They\'ll already have your name.' },
    ],
    ja: '女性が 3 時からの調査予約でヴァザーリの版画を見に来たと受付で伝える。初来館のため、案内係が 2 点を説明。エレベーターは 2 階までしか行かないので、最後の 1 フロアは奥の階段を使うこと。また、ノートパソコンケースより大きい鞄は 3 階以上に持ち込めず、1 階で無料で預けられること。上階の受付では確認メールを見せればよく、名前は既に登録済み。',
    v: [['engraving', '版画'], ['flight', '（階段の）一続き'], ['cloakroom', '手荷物預かり所']],
    q: [
      { tag: '図表', s: 'Look at the graphic. Which floor is the woman going to?',
        c: ['Ground', 'Floor 1', 'Floor 3', 'Floor 2'],
        a: 2,
        e: '版画の調査＝ Print Study Room で 3 階。エレベーターが 2 階までで最後の 1 フロアは階段、という説明とも一致する。',
        w: ['1 階は受付。', '常設展示。', '正解。', '企画展示。'] },
      { tag: '詳細', s: 'What is the woman told about the lift?',
        c: ['It is temporarily out of service.', 'It does not reach her destination.', 'It requires a staff card.', 'It is located at the far end of the building.'],
        a: 1,
        e: '「エレベーターは 2 階までしか行かない」と説明されている。',
        w: ['故障の話はない。', '正解。', 'カードの必要性には触れていない。', '奥にあるのは階段。'] },
      { tag: '詳細', s: 'What will the woman most likely do on her way?',
        c: ['Purchase an admission ticket', 'Print her confirmation e-mail', 'Meet a member of staff at the lift', 'Leave her bag in the cloakroom'],
        a: 3,
        e: '「大きい鞄は 3 階以上に持ち込めない。1 階で無料で預けられる」と案内され、「途中でそうします」と応じている。',
        w: ['入場券の購入は述べられていない。', '印刷は求められていない（メールを見せるだけ）。', '待ち合わせの話はない。', '正解。'] },
    ],
  }),
];
