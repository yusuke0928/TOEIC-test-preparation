/* =============================================================
   予想模試 Vol.2 — Part 3 後半（No.53–70）
   図表問題を 4 セットに増量した回。
   ============================================================= */

const set = (o) => ({
  id: `v2-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: `v2q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2B = [

  /* ── 53–55（図表）────────────────────────────────── */
  /* 本番の Part 3/4 は "Look at the graphic." が 1 セットに 1 問のみ。
     このセットはかつて No.53・54 の 2 問を図表問題にしており、No.54 の
     "that model" が No.53 の正解を先行詞として受ける鎖になっていた（旧 id: v2q54r）。
     一度は音声に一文（M-Am の発話末尾）を足し、No.54 を「点検で稼働していない
     車種の日額」に作り替えて鎖を切ったが、方針が「構造ごと本番仕様に寄せる」に
     変わったため、その付加節と、それに合わせて書き換えた No.53 の why[3] 後半を
     元に戻し、No.54 は図表を見ずに音声だけで解ける通常設問（意図問題）に
     作り替えた。set() は id を no から自動生成し、この設問だけ id を変える手段が
     ないため、このユニットだけヘルパーを使わず直接記述する。

     2026-08-25 の追加是正（レビュー役の監査差し戻し）：上記で作り替えた No.54（意図問題）
     自体が、設問文と選択肢だけで解ける欠陥を持っていた。引用 "Then weight isn't the
     constraint; length is" はどちらの要素が効くかを明言する平叙文で、含意を持たない。
     4 択の対比の組（期間/料金・保証金/免許・納品日/距離・長さ/重量）のうち、引用文中の
     2 語（weight, length）をそのまま含むのは正解の組だけなので、会話を聞かなくても
     語の一致だけで正解できた。この会話で含意を持つ発話は "a photo won't do"（＝原本が
     必要）だけだが、これは No.55 の正解と同じ命題のため使えない。よって意図問題を諦め、
     音声中で他の設問に使われていない情報（保証金の返却条件＝「借りたときと同じ燃料の量で
     返せば返金される」）を使った通常の詳細設問に作り替えた。tag を「意図」から「詳細」に、
     topics を p3int から p3detail に変更。正解位置（index 3）は維持。設問 id は
     v2q54c → v2q54d に新規採番した。 */
  {
    id: 'v2-p3-53', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    script: [
      { role: 'M-Am', text: 'Kestrel Hire, good morning.' },
      { role: 'W-Br', text: 'Hello. I need a van for Saturday. I\'m moving some display boards — the longest is three metres.' },
      { role: 'M-Am', text: 'Three metres. And roughly what weight in total?' },
      { role: 'W-Br', text: 'Nothing heavy. Maybe two hundred kilos altogether.' },
      { role: 'M-Am', text: 'Then weight isn\'t the constraint; length is. I\'ll put you in the smallest one that takes a three-metre board.' },
      { role: 'W-Br', text: 'That works. Do you need a deposit?' },
      { role: 'M-Am', text: 'A hundred pounds, refunded when you bring it back with the same fuel level. And bring your licence — a photo won\'t do.' },
    ],
    graphic: {
      t: 'table', title: 'Kestrel Hire — Van Fleet',
      head: ['Model', 'Load length', 'Payload', 'Daily rate'],
      rows: [
        ['Compact', '1.8 m', '600 kg', '£54'],
        ['Medium', '2.6 m', '900 kg', '£71'],
        ['Long', '3.4 m', '1,200 kg', '£88'],
        ['Extra long', '4.2 m', '1,400 kg', '£112'],
      ],
    },
    ja: '女性が土曜にディスプレイボード（最長 3 メートル）を運ぶためバンを借りたいと電話。総重量は 200 キロ程度で重量は制約にならず、長さで決まると説明される。3 メートルの板が入る最小の車種が割り当てられる。保証金は 100 ポンドで、同じ燃料量で返却すれば返金。免許証は原本が必要で写真では不可。',
    vocab: [['payload', '積載量'], ['constraint', '制約'], ['deposit', '保証金']],
    questions: [
      { id: 'v2q53', no: 53, tag: '図表', stem: 'Look at the graphic. Which model will the woman hire?',
        choices: ['Long', 'Compact', 'Medium', 'Extra long'],
        answer: 0,
        exp: '3 メートルの板が入るのは荷室 3.4 メートルの Long 以上。「最小の車種」なので Long。重量 200 キロはどの車種でも足りる。',
        why: ['正解。', '1.8 m では入らない。', '2.6 m では入らない。', '荷室 4.2 m なので長さの条件自体は満たすが「最小」ではない。'],
        topics: ['graphic'] },
      { id: 'v2q54d', no: 54, tag: '詳細', stem: 'Under what condition will the deposit be returned?',
        choices: [
          'It must be returned with a full tank.',
          'It must be returned by Saturday evening.',
          'It must be cleaned before it is handed back.',
          'It must have the same amount of fuel.',
        ],
        answer: 3,
        exp: '「保証金は、借りたときと同じ燃料の量で返却すれば返金される」と述べられている（"refunded when you bring it back with the same fuel level"）。',
        why: [
          '満タンで返す、とは述べていない。条件は「同じ燃料の量」であって満タンではない。',
          '返却の期限（土曜夕方）には触れていない。',
          '洗車してから返す、という条件は述べられていない。',
          '正解。「同じ燃料の量で返却すれば保証金は返金される」という発言と一致する。',
        ],
        topics: ['p3detail'] },
      { id: 'v2q55', no: 55, tag: '詳細', stem: 'What is the woman told to bring?',
        choices: ['A printed booking confirmation', 'A second form of payment', 'Her original driving licence', 'Proof of insurance'],
        answer: 2,
        exp: '「免許証を持参。写真では不可」＝原本が必要。',
        why: ['予約確認書の話はない。', '別の支払い手段は求められていない。', '正解。', '保険証明には触れていない。'],
        topics: ['graphic'] },
    ],
  },

  /* ── 56–58 ─────────────────────────────────────────── */
  set({
    n: [56, 57, 58], lv: 5,
    s: [
      { role: 'W-Am', text: 'Dmitri, the translation of the safety notices came back. Something is off.' },
      { role: 'M-Br', text: 'Off how?' },
      { role: 'W-Am', text: 'The register. It reads like a legal contract, not like something you put on a wall for people who are in a hurry.' },
      { role: 'M-Br', text: 'That may be my fault. I sent them the terms and conditions as a reference file so they\'d match our terminology.' },
      { role: 'W-Am', text: 'That explains it. They matched the tone as well as the terms.' },
      { role: 'M-Br', text: 'I\'ll go back to them. Should I ask for a full rewrite?' },
      { role: 'W-Am', text: 'No — the terminology is right and that\'s the expensive part. Ask them to shorten the sentences and use the imperative. That is an hour of work, not a week.' },
    ],
    ja: '安全掲示の翻訳が上がってきたが、女性が「文体がおかしい」と指摘。急いでいる人が壁で読むものではなく法律文書のようだという。男性は用語をそろえるため参考資料として約款を送ったと明かし、それが原因で文体まで揃ってしまったと判明。全面書き直しを依頼すべきか尋ねると、女性は「用語は正しく、そこが費用のかかる部分」として、文を短くし命令形を使うよう頼めばよいと助言。1 週間ではなく 1 時間の作業だと述べる。',
    v: [['register', '（言葉の）文体・格式'], ['terms and conditions', '約款'], ['imperative', '命令形']],
    q: [
      { tag: '概要', s: 'What is the problem with the translation?',
        c: ['It contains factual errors.', 'It uses inconsistent terminology.',
            'Its style is unsuitable for the purpose.', 'It was delivered after the deadline.'],
        a: 2,
        e: '「文体が法律文書のようで、壁の掲示に向かない」という指摘。',
        w: ['事実誤りには触れていない。', '用語は正しいと明言されている。', '正解。', '納期の話はない。'] },
      { tag: '詳細', s: 'What does the man say he did?',
        c: ['He chose a cheaper translation agency.', 'He approved the draft without reading it.',
            'He shortened the original notices.', 'He supplied the contract as a reference.'],
        a: 3,
        e: '「用語をそろえるため約款を参考資料として送った」と述べている。',
        w: ['業者選定の話はない。', '未読の承認は述べていない。', '原文の短縮はこれからの依頼。', '正解。'] },
      { tag: '意図', t: ['p3int'], s: 'What does the woman mean when she says, "That is an hour of work, not a week"?',
        c: ['The revision should be inexpensive and quick.', 'The agency has been too slow to respond so far.',
            'She will do the rewriting work herself this week.', 'The deadline should be extended by another week.'],
        a: 0,
        e: '全面書き直しではなく限定的な修正で足りる、という趣旨。直前で「用語は正しく、そこが費用のかかる部分」と述べている。',
        w: ['正解。', '業者の対応の遅さを責めてはいない。話題は修正の分量が少ないことである。', '自分で書き直すとは述べていない。依頼先の業者に頼む前提である。', '期限の延長は述べていない。むしろ短時間で終わる作業だと述べている。'] },
    ],
  }),

  /* ── 59–61（図表）────────────────────────────────── */
  set({
    n: [59, 60, 61], lv: 5, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Ardmore Sports Centre — Court Availability, Thursday',
      head: ['Court', '18:00', '19:00', '20:00'],
      rows: [
        ['1', 'Booked', 'Free', 'Free'],
        ['2', 'Free', 'Booked', 'Free'],
        ['3', 'Booked', 'Booked', 'Free'],
        ['4', 'Free', 'Booked', 'Booked'],
      ],
    },
    s: [
      { role: 'M-Cn', text: 'Ardmore Sports Centre.' },
      { role: 'W-Au', text: 'Hi, I\'d like to book a badminton court for Thursday evening. We need two consecutive hours.' },
      { role: 'M-Cn', text: 'Two hours. Let me look at Thursday. There are a few free slots, but only one court\'s free for two hours in a row.' },
      { role: 'W-Au', text: 'What time does that start?' },
      { role: 'M-Cn', text: 'Seven. So seven to nine.' },
      { role: 'W-Au', text: 'That\'s fine. We had hoped for six, but seven works.' },
      { role: 'M-Cn', text: 'I\'ll put you down. One thing — the lights on that side switch to the energy-saving setting at half past eight, so it gets a little dimmer for the last half hour.' },
    ],
    ja: '女性が木曜の夜にバドミントンコートを 2 時間連続で予約したいと電話。空きはいくつかあるが 2 時間続けて空いているコートは 1 面だけで、19 時開始（19〜21 時）。18 時希望だったが 19 時で了承。なお、そちら側の照明は 20 時半に省エネ設定に切り替わるため、最後の 30 分はやや暗くなると案内される。',
    v: [['consecutive', '連続した'], ['slot', '（予約の）枠'], ['energy-saving setting', '省エネ設定']],
    q: [
      { tag: '図表', s: 'Look at the graphic. Which court will the woman use?',
        c: ['Court 1', 'Court 2', 'Court 3', 'Court 4'],
        a: 0,
        e: '2 時間続けて空いているのは Court 1（19 時・20 時）だけ。係員の「19 時開始」という発言とも一致する。図表問題では、音声が言わない側（コート番号）を表から特定する。',
        w: ['正解。', '18 時と 20 時が空きだが連続していない。', '20 時のみ空き。', '18 時のみ空き。'] },
      { tag: '詳細', s: 'What had the woman originally wanted?',
        c: ['A morning slot', 'A different day of the week',
            'To book two courts', 'To start at six'],
        a: 3,
        e: '「6 時を希望していたが 7 時でよい」と述べている。',
        w: ['午前の話はない。', '曜日の変更は述べていない。', '1 面のみ。', '正解。'] },
      { tag: '詳細', s: 'What is the woman told about the lighting?',
        c: ['It is currently being repaired.', 'It dims partway through the booking.',
            'It must be switched on at reception.', 'It costs extra after eight.'],
        a: 1,
        e: '「20 時半に省エネ設定に切り替わり、最後の 30 分はやや暗くなる」が根拠。',
        w: ['修理の話はない。', '正解。', '操作場所には触れていない。', '追加料金の話はない。'] },
    ],
  }),

  /* ── 62–64 ─────────────────────────────────────────── */
  set({
    n: [62, 63, 64], lv: 5, k: 'conversation with three speakers',
    s: [
      { role: 'M-Br', text: 'So we have three candidates and one post. Sofia, you interviewed all three.' },
      { role: 'W-Am', text: 'I did. On technical ability they\'re close. On everything else they are not.' },
      { role: 'M-Cn', text: 'Meaning?' },
      { role: 'W-Am', text: 'Two of them described a project that went wrong and what they changed afterwards. The third described only successes.' },
      { role: 'M-Br', text: 'That could just be interview nerves.' },
      { role: 'W-Am', text: 'It could. I asked twice, in different words, and got the same answer both times.' },
      { role: 'M-Cn', text: 'Then we\'re choosing between two, not three. What separates them?' },
      { role: 'W-Am', text: 'One has done this exact role elsewhere. The other hasn\'t, but asked better questions about how we work.' },
      { role: 'M-Br', text: 'Let\'s bring both back for a short second conversation. Half an hour each, no presentation.' },
    ],
    ja: '3 名の候補者に対し 1 つのポストという状況。面接した女性は「技術力は拮抗しているが、それ以外は違う」と述べる。2 名は失敗した案件とその後の改善を語ったが、3 人目は成功例しか話さなかった。面接の緊張の可能性も指摘されるが、表現を変えて 2 回尋ねても同じだったという。実質 2 名の選択となり、1 名は同じ職務の経験があり、もう 1 名は経験はないが働き方についてより良い質問をした。結論として、2 名を短い二次面談（各 30 分、プレゼンなし）に呼ぶことになった。',
    v: [['post', '職位'], ['interview nerves', '面接の緊張'], ['separate', '（優劣を）分ける']],
    q: [
      { tag: '詳細', s: 'What distinguished one candidate from the others?',
        c: ['A lack of technical ability', 'Not discussing any setbacks',
            'Arriving late for the interview', 'Requesting a higher salary'],
        a: 1,
        e: '「3 人目は成功例しか話さなかった」が決定的な差。',
        w: ['技術力は拮抗している。', '正解。', '遅刻の話はない。', '給与には触れていない。'] },
      { tag: '意図', t: ['p3int'], s: 'Why does the woman say, "I asked twice, in different words"?',
        c: ['To show the candidate misunderstood the question both times.', 'To indicate the response was not simply nervousness.',
            'To explain why the interview overran by nearly twenty minutes.', 'To suggest that the original question was poorly worded.'],
        a: 1,
        e: '直前に「面接の緊張かもしれない」と言われたことへの応答。2 回試して同じだったので緊張では説明できない、という趣旨。',
        w: ['誤解の指摘ではない。表現を変えて 2 回尋ねて同じ答えが返ったことを、緊張では説明できない根拠として挙げている。', '正解。', '面接時間の超過には一切触れていない。この面接が予定を超過したという話ではなく、超過するとすれば今後設定される二次面談（各 30 分）の話である。', '質問自体の不備は認めていない。表現を変えても答えが変わらなかった点を確認しただけである。'] },
      { tag: '次の行動', s: 'What will happen next?',
        c: ['A written test will be set.', 'Two candidates will be interviewed again.',
            'The post will be readvertised.', 'References will be checked.'],
        a: 1,
        e: '「2 名を各 30 分の二次面談に呼ぶ、プレゼンなし」と決まっている。',
        w: ['筆記試験の話はない。', '正解。', '再募集は述べていない。', '照会の確認には触れていない。'] },
    ],
  }),

  /* ── 65–67（図表）────────────────────────────────── */
  /* 2026-08-25 是正（is3、vol1-l2b.js No.65 と同じ方針）：4系列のうち Newsletter だけが
     145→410→158 と突出し、他3系列（Search 1,240→1,190→1,205／Trade directory
     310→298→306／Referral 92→88→95）はほぼ横ばいだった。「1系列だけ毛色が違う」ため、
     表を一瞥するだけで音声なしに Newsletter に絞り込めていた。
     今回、他3系列にも動きを持たせたうえで、Newsletter の決め手（「2月に急増して
     3月に元の水準近くまで戻る」）と紛らわしいが条件を満たさない値を意図的に配置した。
     Trade directory は 460→305→298 と表内でも大きな数値を示すが、急増しているのは
     1月であり「2月に急増」という時期の条件には当てはまらない（「表内で目立つ数字を
     選ぶ」を無効化）。Search は 1,100→1,240→1,360 と毎月着実に増えるだけで、急増後に
     戻るという形にはならない。Referral は 130→110→95 と一貫して減少している。
     台詞（"One source spiked in February and went straight back down." 以下）は
     いずれも Newsletter 自身の増減にしか言及しておらず、他3系列の水準を主張していない
     ため書き換えの必要はなかった。Source 名・選択肢の並び・正解（Newsletter、choices
     の4番目）は変更していないため answer の index は 3 のまま。No.66・No.67 は本文中の
     当該発言（周年メール配信の成果・配信停止率・依頼内容）を変更していないため答え・id
     とも変更しない。No.65 は表・解説を書き換えたため、このユニットだけ set() ヘルパーを
     使わず直接記述し、設問 id を新規採番する（v2q65 → v2q65r、no は 65 のまま）。 */
  /* 2026-08-25 是正（2巡目、レビュー差し戻し対応）：上の是正後も次の4つの欠陥が残っており、
     会話ごと差し替えた。
     (1) 表だけで解けた——4系列とも単調増加・単調減少のみで、「2月に急増して3月に戻る」
     という山型の動きを示すのは Newsletter 1系列だけだった。変化幅の最大・最小も
     両方 Newsletter が兼ねていた。
     (2) 音声だけで解けた——"the anniversary mailing" "we sent it to the full list"
     "the unsubscribe rate" は、4つの Source のうち Newsletter（メール配信）以外に
     当てはまりようがなく、「行名を言わない」ルールが同義語で実質的に破られていた。
     (3) 先読みだけで解けた——No.66 の選択肢と No.67 の選択肢の両方に "mailing" が
     出ており、設問間で語彙が重複していた。
     (4) vol5-l2b.js No.65–67（W-Br/M-Cn、"One region jumped in the second quarter
     and came straight back down." → "So it worked." → "Whether it 'worked'
     depends on margin"）と、意図問題の鍵になる修辞・正解の命題（数量の増加は
     成功の証にならない、という同じ結論）が一致していた。CLAUDE.md の
     「意図問題の鍵になっている修辞が同型／正解の命題が同じなら作り直す」に該当する。
     新しい題材は、クライアント向け研修会場を4室（Room 12/5/9/3、非序数の番号）から
     選ぶという設定にし、判別軸を「量の山型」から「種別×種別」の完全な2×2
     （Tables: Round/Rectangular × Wall: Glass/Solid、4通りがちょうど1回ずつ出現し
     最大値・最小値・唯一値が存在しない）に組み替えた。どちらの軸にも一般的な優劣は
     ない（丸テーブルと角テーブル、ガラス壁と仕切り壁のどちらが「良い」かは用途次第）。
     音声はどの行にも対応しない属性値（round tables・a solid wall）だけを述べ、
     部屋番号を言わないのはもちろん、部屋番号を推測させる同義語も使っていない。
     意図問題は「追加費用をまだ提示していないので決定が変わるかもしれない」という、
     費用の承認待ちという vol5 とは別の命題にし、次の行動も「見取り図を金曜までに
     送ってもらう」という費用に触れない依頼にして、3問間の語彙重複（旧版の
     "mailing"）も解消した（3問の choices を突き合わせ、正解にあたる語が他問の
     stem・choices に出ていないことを確認済み）。
     検討した別案（印刷会社の色校正から仕上げ・綴じで1点を選ぶ設定、家具の張り替え
     生地から色・織りで1点を選ぶ設定）はいずれも `assets/data/drills/listening2.js`
     u-p3i-01（校正・matte/gloss の校正刷りが絡む意図問題）または
     `assets/data/mocks/vol4-r2.js`・`vol5-r2.js`（張り替え〈reupholster〉業者の
     Part 7）と語彙・題材が重なったため、両方を避けて研修会場の設定にした。
     Source 名・choices の並び・正解位置（No.65 は index 3、No.66 は index 0、
     No.67 は index 2）は変更前と同じ位置を維持した。3問とも中身を全面的に
     書き換えたため、設問 id はすべて新規採番する（v2q65r → v2q65r2、
     v2q66 → v2q66r、v2q67 → v2q67r、no はそれぞれ 65・66・67 のまま）。 */
  /* 2026-08-25 是正（監査差し戻し対応、2件）。
     (1) 正解の行の番号が Room 3（4つの行番号 12/5/9/3 のうち最小）になっており、
     vol4-l2b.js No.53（Unit 3 が最小）・vol5-l3.js No.98（Bay 2 が最小）と
     合わせて3表とも「正解＝最小番号」という指紋が揃っていた。属性（Tables・Wall の
     値）は変えず、正解の行の番号だけを Room 3 → Room 8 に振り直した。新しい番号
     12/5/9/8 のうち最小は 5（誤答の行）で、8 は最大でも最小でもない中間の値になる。
     choices の並び順（Room 5, Room 12, Room 9, Room 8）も昇順・降順のいずれでもない
     （5, 12, 9, 8）。会話（音声）は部屋番号に一切言及していないため変更していない。
     why の文言は部屋番号ではなく属性（Round/Rectangular・Glass/Solid）で書かれて
     いるため変更不要。exp 内の「Room 3」の表記のみ「Room 8」に更新した。
     (2) No.67 の誤答 (D) "Change the room to a rectangular layout instead." に
     表のセル値 "Rectangular" がそのまま含まれており、"instead" という語もあって
     「選ばれた部屋は Rectangular ではない」と先読みだけで読め、Room 12・Room 9 が
     音声なしで消えていた（25%→50%）。また (A)(B) の2択がすでに venue を含んでおり、
     (D) にも venue を入れると正解 (C) だけが venue を含まない選択肢になって浮いて
     しまう。(D) を "Order refreshments for the first morning."（6語、表のどの
     値〈Round/Rectangular/Glass/Solid〉にも venue にも触れない）に差し替えた。
     why[3] を「会話に飲食物の手配についての言及はなく、依頼の内容でもない。」に
     書き直した。No.65 は表・choices・exp を、No.67 は choices・why を変更したため
     id を新規採番する（v2q65r2 → v2q65r3、v2q67r → v2q67r2、no はそれぞれ 65・67
     のまま）。No.66 は変更していない。 */
  {
    id: 'v2-p3-65', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    graphic: {
      t: 'table', title: 'Workshop Room Options — Available This Week',
      head: ['Room', 'Tables', 'Wall'],
      rows: [
        ['Room 12', 'Rectangular', 'Glass'],
        ['Room 5', 'Round', 'Glass'],
        ['Room 9', 'Rectangular', 'Solid'],
        ['Room 8', 'Round', 'Solid'],
      ],
    },
    script: [
      { role: 'W-Br', text: 'The room list came back from the venue — four options, like you asked for.' },
      { role: 'M-Am', text: 'Good. Did the client say anything definite about the setup?' },
      { role: 'W-Br', text: 'Two things, actually. It\'s a workshop with small-group discussion, so it needs round tables — a rectangular layout won\'t work for that.' },
      { role: 'M-Am', text: 'Okay, that rules out the rectangular ones. What was the other thing?' },
      { role: 'W-Br', text: 'They\'ll be discussing confidential material, so it has to be a solid wall — nothing with glass.' },
      { role: 'M-Am', text: 'That only leaves one option, then. I\'ll get it booked this afternoon.' },
      { role: 'W-Br', text: 'Hold off for now. I haven\'t shown him the added cost for that room, and that might change his mind.' },
      { role: 'M-Am', text: 'Understood. What do you want me to do instead?' },
      { role: 'W-Br', text: 'Can you ask the venue to hold the booking and send over the floor plan by Friday? I\'d rather show him in person.' },
    ],
    ja: '会場から届いた研修室のリストについて、女性が担当者の男性と検討している。クライアントは、少人数のグループ討議を行う研修のため丸テーブルの部屋を希望しており、四角いテーブルの配置では対応できないという。さらに機密性の高い内容を話し合うため、ガラス壁ではなく仕切り壁の部屋でなければならないとも希望している。男性は残る1室をすぐに予約しようとするが、女性は待つよう伝える。追加料金をまだクライアントに提示しておらず、それを知れば決定が変わるかもしれないためだという。女性は男性に、会場に予約を保留させたうえで金曜までに見取り図を送ってもらうよう依頼し、クライアントに直接見せたいと述べる。',
    vocab: [['workshop', '研修・ワークショップ'], ['confidential', '機密の'], ['hold off', '（行動を）見送る・いったん待つ'], ['floor plan', '見取り図'], ['book', '予約する']],
    questions: [
      { id: 'v2q65r3', no: 65, tag: '図表', stem: 'Look at the graphic. Which room matches what the client asked for?',
        choices: ['Room 5', 'Room 12', 'Room 9', 'Room 8'],
        answer: 3,
        exp: 'クライアントは、少人数のグループ討議のため丸テーブルを、機密性の高い内容を話し合うためガラス壁ではなく仕切り壁を希望している。両方を満たすのは Round・Solid の Room 8 だけである。Room 5（Round・Glass）は壁の条件を満たさず、Room 12（Rectangular・Glass）はテーブル・壁のどちらの条件も満たさず、Room 9（Rectangular・Solid）はテーブルの条件を満たさない。表そのものは Tables・Wall のどちらも2件ずつに均等に分かれており、列を1つ見るだけでは1室に絞れない。女性が伝えた2つの条件を両方とも聞き取って初めて Room 8 に確定できる。',
        why: ['テーブルは条件どおり Round だが、壁が Glass のため、機密性を保てないという条件に反する。', 'テーブルが Rectangular、壁も Glass で、両方の条件に反する。', '壁は条件どおり Solid だが、テーブルが Rectangular のため、少人数のグループ討議に適さないという条件に反する。', '正解。'],
        topics: ['graphic'] },
      { id: 'v2q66r', no: 66, tag: '意図', stem: 'What does the woman mean when she says, "Hold off for now"?',
        choices: ['She worries the added cost could change his decision.', 'She thinks they booked the wrong room initially.', 'She wants the venue to change the layout entirely.', 'She believes the workshop date has already passed.'],
        answer: 0,
        exp: '直後で「追加料金をまだ見せていないので、決定が変わるかもしれない」と理由を続けている。部屋の予約し直しやレイアウト変更、日程の話ではなく、費用の承認が先だという趣旨。',
        why: ['正解。', '男性はこれから「今日の午後に予約する」と言った段階で、予約はまだ行われていない。取り違えて予約し直すという話ではない。', '女性は「丸テーブルの部屋」という条件で部屋を絞っており、会場に配置を変えさせる話は出ていない。直後に続く理由も追加料金の提示であって、レイアウトではない。', '女性はこのあと「予約を保留して金曜までに見取り図を送ってもらってほしい」と頼んでおり、研修はこれから行われる。日程が過ぎたという話ではない。'],
        topics: ['p3int'] },
      { id: 'v2q67r2', no: 67, tag: '次の行動', stem: 'What does the woman ask the man to do?',
        choices: ['Confirm the room booking with the venue today.', 'Ask the venue to cancel the reservation.', 'Get the floor plan sent over by Friday.', 'Order refreshments for the first morning.'],
        answer: 2,
        exp: '「会場に予約を保留させ、金曜までに見取り図を送ってもらってほしい」と依頼している。',
        why: ['女性は「今は待って」と言っており、今日中に予約を確定させることは依頼の内容と正反対である。', '女性が頼んだのは「予約を保留してもらう」ことで、取り消しではない。追加料金を示したうえでクライアントに判断してもらうまで押さえておく趣旨。', '正解。', '会話に飲食物の手配についての言及はなく、依頼の内容でもない。'],
        topics: ['p3detail'] },
    ],
  },

  /* 本番の Part 3/4 は "Look at the graphic." が 1 セットに 1 問のみ。
     旧 No.69 は "Look at the graphic." で午後の実習の部屋を問うており、No.68 と
     合わせて 1 セット 2 問の図表問題になっていた。No.69 を、図表を見ずに音声
     だけで解ける通常設問（詳細）に作り替えた。set() は id を no から自動生成し、
     この設問だけ id を変える手段がないため、このユニットだけヘルパーを使わず
     直接記述する。
     2026-08-25 の是正：No.68 自体に 2 つの欠陥が残っていた。
     (1) 選択肢の形が不揃いだった（Oak Room・Lecture Theatre は 2 語、Seminar Room B は
     3 語、正解の Gallery だけ 1 語で Room/Theatre の類の語を含まない）。正解だけ「形が違う」
     という理由で、内容を読まずに選べてしまう。Seminar Room B を Seminar Room に、Gallery を
     Gallery Hall にし、4 択すべて「〈固有名〉＋部屋を表す語」の 2 語形に揃えた。
     (2) 設問文が "display his board" と述べており、"board"（ポスターボード）という業界知識
     だけで、音声を聞かなくても図表の "Poster session" 行（Gallery）に直結してしまう懸念が
     あった。設問文を "Where will the man most likely go?" という中立な言い方に変え、
     男性が "poster presenters" だと述べる音声を実際に聞かないと正解に辿り着けない形にした。
     図表・音声本文・No.69・No.70 の内容と正解は変更していない。設問 id は選択肢・設問文の
     実質変更に伴い v2q68 → v2q68r に新規採番した。

     2026-08-25 の追加是正（レビュー役の監査差し戻し）：No.68 自体に、この男性が実際には
     2 部屋（ポスター発表の Gallery Hall と、午後の実習の Seminar Room）の両方に行くという
     欠陥が残っていた。旧設問文 "Where will the man most likely go?" は時点を指定しておらず、
     しかも会話の最後の一文が Seminar Room への道案内だったため、Seminar Room も答えとして
     成立しかねなかった（its why[2] が「実習の会場。」としか書けず、誤りである理由を示せて
     いなかったのが徴候）。設問文を "Where will the man most likely be at noon?" に変更し、
     音声の "The session itself runs from eleven to one."（ポスター発表は 11〜13 時）と
     突き合わせることで、正午の時点は確定的に Gallery Hall（Poster session）に絞られる
     形にした（実習は "in the afternoon" で、正午の時点ではまだ始まっていない）。
     選択肢・正解位置（index 3）は変更していない。why[2]（Seminar Room）を「実習は午後に
     行われ、正午の時点ではまだ始まっていない」という趣旨に書き直した。設問 id は設問文の
     実質変更に伴い v2q68r → v2q68s に新規採番した。

     あわせて No.70 の欠陥も是正した。図表の "Seminar Room — Workshop (limited places)" と
     いう注記が、No.70 の正解 "It reached its limit quickly."（定員に早く達した）をそのまま
     先読みで示唆していた（設問は音声より先に読めるため）。注記を "(pre-booked)"（要事前
     予約、というだけで定員超過を示唆しない）に変更した。この行は No.68 の正解（Gallery
     Hall）とは別の行であり、No.68 には影響しない。括弧付きの項目が図表中に 1 つだけ、かつ
     正解の行（Gallery Hall）ではない行にある、という形は維持した。No.70 自身の設問文・
     選択肢・正解（index 3）は変更していないが、図表を見ただけでは解けない形に是正したため、
     設問 id を v2q70 → v2q70b に新規採番した。 */
  {
    id: 'v2-p3-68', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    script: [
      { role: 'M-Am', text: 'Excuse me, I\'m one of the poster presenters. Where should I put my board up?' },
      { role: 'W-Au', text: 'You\'re in the room straight through the arch, not the one you register in. The boards are numbered, and yours will have your name on it.' },
      { role: 'M-Am', text: 'And when can I set up?' },
      { role: 'W-Au', text: 'Any time from eight. The session itself runs from eleven to one.' },
      { role: 'M-Am', text: 'One more thing — I signed up for the hands-on session in the afternoon, but I never got a confirmation.' },
      { role: 'W-Au', text: 'That one has a cap of twenty and it filled in a day. Let me check the list. What is your surname?' },
      { role: 'M-Am', text: 'Petrakis.' },
      { role: 'W-Au', text: 'You\'re on it. It\'s the last room down the corridor on the left.' },
    ],
    graphic: {
      t: 'list', title: 'Fenmoor Hall — Room Assignments (Saturday)',
      items: [
        'Oak Room — Registration and refreshments',
        'Gallery Hall — Poster session',
        'Lecture Theatre — Plenary talks',
        'Seminar Room — Workshop (pre-booked)',
      ],
    },
    ja: 'ポスター発表者の男性が掲示場所を尋ねる。受付をする部屋ではなくアーチを抜けた先の部屋で、掲示板には番号と本人の名前がついている。設営は 8 時から可能で、セッション自体は 11 時から 13 時。午後の実習に申し込んだが確認が来ていないと相談すると、定員 20 名で 1 日で埋まったと説明され、名簿を確認して登録済みと判明。会場は廊下の左手一番奥。',
    vocab: [['plenary talk', '全体講演'], ['cap', '定員'], ['hands-on session', '実習']],
    questions: [
      { id: 'v2q68s', no: 68, tag: '図表', stem: 'Look at the graphic. Where will the man most likely be at noon?',
        choices: ['Oak Room', 'Lecture Theatre', 'Seminar Room', 'Gallery Hall'],
        answer: 3,
        exp: 'ポスター発表者だと名乗っており、Gallery Hall（Poster session）が「11 時から 13 時」実施されると述べられている。正午はその時間帯の中にあるため、正午に男性がいるのは Gallery Hall。「受付をする部屋ではない」という説明も Oak Room を除外する手がかり。',
        why: ['受付と軽食の部屋。', '全体講演の会場。', '実習は "in the afternoon"（午後）に行われ、正午の時点ではまだ始まっていない。', '正解。'],
        topics: ['graphic'] },
      { id: 'v2q69b', no: 69, tag: '詳細', stem: 'How does the woman confirm the man\'s afternoon booking?',
        choices: [
          'By checking his email confirmation',
          'By calling the workshop leader',
          'By requesting a payment receipt',
          'By checking the attendee list',
        ],
        answer: 3,
        exp: '男性が確認メールを受け取っていないと伝えると、女性は「名簿を確認する」と述べ、名字を尋ねている。確認の方法は名簿と名字の照合。',
        why: [
          '男性自身が「確認メールを受け取っていない」と述べており、確認する対象が存在しない。',
          '女性はその場で名簿を開いて名字を尋ね、「載っています」と即答している。電話をかける場面はなく、実習の担当者も会話に登場しない。',
          '確認の手段として述べられているのは名簿と名字の照合であり、支払い関連の書類ではない。',
          '正解。「名簿を確認する」「名字を教えてほしい」という発言と一致する。',
        ],
        topics: ['p3detail'] },
      { id: 'v2q70b', no: 70, tag: '詳細', stem: 'What does the woman say about the afternoon session?',
        choices: ['It has been moved to a larger room.', 'It requires an additional fee.',
            'It will be recorded.', 'It reached its limit quickly.'],
        answer: 3,
        exp: '「定員 20 名で 1 日で埋まった」と述べている。',
        why: ['移動の話はない。', '追加料金には触れていない。', '録画の話はない。', '正解。'],
        topics: ['graphic'] },
    ],
  },
];
