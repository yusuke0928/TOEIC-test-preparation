/* =============================================================
   予想模試 Vol.4 — Part 3 後半（No.53–70）
   ============================================================= */

const set = (o) => ({
  id: `v4-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: `v4q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2B = [

  /* ── 53–55（図表）────────────────────────────────── */
  /* 2026-08-25 追記: set() は各設問の topics を x.t || o.t || ['p3detail'] で決めるため、
     o.t: ['graphic'] のこのユニットでは No.54・55（通常の詳細設問）が明示的な t を
     持たず、既定で ['graphic'] を継承してしまっていた（図表を見て答える設問ではない
     のに論点集計上は「図表問題」に計上される不整合）。No.54・55 に t: ['p3detail']
     を明示し、No.53（唯一の「Look at the graphic」設問）だけが ['graphic'] を
     継承するようにした。 */
  /* 2026-08-25 是正（is4）：行名が Locker/Small/Medium/Large という大小を含む序列
     そのもので、Floor area・Height・Weekly rate の3列すべてが行の並びと単調に
     一致していた。加えて音声が "I'd put you in Medium." と正解の行名をそのまま
     口にしており、表を見るまでもなく音声だけで解けていた（vol5-l3.js No.98–100 の
     旧版〈Locker/Small/Medium/Large、Kestrel Self Storage と場面まで同一〉が
     すでに同じ欠陥で書き直されている前例に倣った）。
     今回、行名を非序数の番号（Unit 14 / Unit 9 / Unit 3 / Unit 6、表内の並びも
     数値順にしていない）に変え、判別軸を「量」から「種別」に組み替えた。Floor area・
     Height・Weekly rate の数値列を廃し、Ceiling（Low / Full height）と
     Access（Street side / Yard side）という、どちらも一般的な優劣を持たない
     2種類×2種類にした（4ユニットがちょうど1組み合わせずつになり、最大・最小・
     唯一値がすべて消える）。音声側は「ワードローブ（高さ2m）を立てて収納するには
     天井の高いユニットが要る（Low の2ユニットを除外）」「今は表通り側の通路が
     道路工事中で、搬入は中庭側からしかできない（Street side の残り1ユニットを
     除外）」の2条件に組み替え、いずれもユニット名を言わず属性で指すようにした。
     表だけでは4ユニットのどれも識別できず、音声の2条件を両方拾って初めて Unit 3
     （Full height・Yard side）に絞り込める。Weekly rate 列は決定に使っていなかった
     （元データでも Q55 の答えは料金体系の一般論で、表の数値を参照していない）ため
     削除した。
     No.54 は「Locker が不向きな理由」から「天井の低いユニットが不向きな理由」に
     stem を書き換えた（該当ユニットが2つになったため）。答えの内容（天井が低く
     ワードローブが立てて入らない）は変えていない。No.55（料金体系）は本文中の
     当該発言を変更していないため答え・id とも変更しない。
     このユニットは No.53・54 の中身（表・choices・stem）を書き換えたため、set()
     ヘルパーを使わず直接記述し、両問の設問 id を新規採番する（v4q53 → v4q53r、
     v4q54 → v4q54r、no はそれぞれ 53・54 のまま）。No.53 の正解は Unit 3（choices
     の3番目）で、answer の index は元の 2 のまま維持した。 */
  /* 2026-08-25 是正（2巡目、レビュー差し戻し対応）：上の是正で Locker/Small/Medium/Large
     という序列そのものの行名は解消したが、置き換えた Ceiling（Low / Full height）が
     依然として優劣を持っていた。「一部屋分の家財を預ける」という場面では常識的に
     Full height を選ぶのが既定であるため、表を見ただけで2択（50%）に絞れてしまう
     ——序数性を行名から列へ移しただけで、Locker/Small/Medium/Large と本質的に
     同じ欠陥が残っていた。加えて No.54 の stem "Why does the man rule out any
     unit with a low ceiling?" 自体が「天井の低いユニットは除外される」と断定して
     おり、音声を聞かずに Unit 14・Unit 6 が消え、選択肢 (A)「The wardrobe cannot
     stand up inside it.」がそれをさらに裏づけていた。
     今回、Ceiling 列を Block（North block / South block）に差し替えた。方角名は
     どちらが優れているかを一般に決められない中立な対で、表には「北棟」「南棟」としか
     書かれておらず、どちらの天井が高いかは表だけでは分からない（天井の高低は音声
     でのみ明かす）。音声は「ワードローブを立てて収納するには北棟のユニットが要る
     （南棟は天井が低く入らない）」と、属性は言うが行名（Unit 番号）は言わない形を
     保った。Access（Street side / Yard side）は元から優劣のない対だったため変更
     していない。
     No.54 は stem を「What does the man say about the wardrobe?」に、choices を
     天井やユニットに触れない「立てて収納する必要がある／梱包が必要／分解が必要／
     トロリーで運べない」の4択に差し替えた。stem 単独では何も漏れず、選択肢を
     先読みしても正解が4分の1候補にとどまる。答えの内容（ワードローブは立てたまま
     収納する必要がある）は変えていない。
     あわせて No.55 の選択肢 (A) が「The weekly rate is cheaper than the monthly
     plan for her stay.」（12語）で他の3択（各6語）の倍だったため、
     「Weekly payment works out cheaper for her stay.」（8語）に短縮した。答えの
     内容・answer の index は変えていない。
     No.53・54・55 とも中身（表・choices・stem のいずれか）を書き換えたため、設問 id を
     すべて新規採番する（v4q53r → v4q53r2、v4q54r → v4q54r2、v4q55 → v4q55r、no は
     それぞれ 53・54・55 のまま）。No.53 の answer index（2）・No.54 の answer index
     （0）・No.55 の answer index（0）はいずれも変更していない。 */
  /* 2026-08-25 是正（監査差し戻し対応、2件）。
     (1) 正解の行の番号が Unit 3（4つの行番号 14/9/3/6 のうち最小）になっており、
     vol2-l2b.js No.65（Room 3 が最小）・vol5-l3.js No.98（Bay 2 が最小）と合わせて
     3表とも「正解＝最小番号」という指紋が揃っていた。属性（Block・Access の値）は
     変えず、行番号だけを振り直した：North block・Yard side の行（正解）を
     Unit 3 → Unit 11 に、South block・Yard side の行（誤答）を Unit 6 → Unit 3 に
     入れ替えた。新しい番号 14/9/11/3 のうち最小は 3（誤答の行）、最大は 14（誤答の
     行）で、正解の 11 はどちらにもならない中間の値になる。choices の並び順
     （Unit 14, Unit 9, Unit 11, Unit 3）も昇順・降順のいずれでもない（14, 9, 11, 3）。
     会話（音声）はユニット番号に一切言及していないため変更していない。why の文言は
     ユニット番号ではなく属性（North/South block・Street/Yard side）で書かれている
     ため変更不要。exp 内の「Unit 3」「Unit 6」の表記のみ「Unit 11」「Unit 3」に
     更新した。
     (2) No.55 の選択肢が (A) 8語（正解）・(B)(C)(D) 各6語で、正解が単独最長になって
     いた。誤答3つを "A deposit is required before the first week."（8語）、
     "Payment must be made in cash on arrival."（8語）、"A discount applies after
     the first six months."（8語）にそれぞれ伸ばし、4択すべて8語に揃えた。答えの
     内容・why・answer の index はいずれも変更していない。
     No.53 は表・choices・exp を、No.55 は choices を変更したため id を新規採番する
     （v4q53r2 → v4q53r3、v4q55r → v4q55r2、no はそれぞれ 53・55 のまま）。No.54 は
     変更していない。 */
  {
    id: 'v4-p3-53', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    graphic: {
      t: 'table', title: 'Kestrel Self Storage — Unit Details',
      head: ['Unit', 'Block', 'Access'],
      rows: [
        ['Unit 14', 'South block', 'Street side'],
        ['Unit 9', 'North block', 'Street side'],
        ['Unit 11', 'North block', 'Yard side'],
        ['Unit 3', 'South block', 'Yard side'],
      ],
    },
    script: [
      { role: 'W-Br', text: 'Hi, I need to store the contents of a one-bedroom flat for about two months.' },
      { role: 'M-Am', text: 'Any particularly large pieces? That usually decides which unit will work.' },
      { role: 'W-Br', text: 'A wardrobe, about two metres tall, and a three-seat sofa. Everything else is boxes — maybe fifteen or so.' },
      { role: 'M-Am', text: 'The wardrobe has to go in standing up, so it needs one of the north-block units — the south-block ones have a lower ceiling and won\'t take it.' },
      { role: 'W-Br', text: 'And how do I actually get it all in?' },
      { role: 'M-Am', text: 'That depends where we can bring the trolley in. There\'s roadworks outside the street side this fortnight, so deliveries are yard-side access only for now.' },
      { role: 'W-Br', text: 'Understood. Is there a minimum stay?' },
      { role: 'M-Am', text: 'No minimum, but at two months the weekly rate works out cheaper than our monthly plan, so weekly is fine for you.' },
    ],
    ja: '女性が 1 ベッドルームの部屋の荷物を約 2 か月間預けたいと相談。特に大きい物として高さ約 2 メートルの洋服だんすと 3 人掛けのソファがあり、他は箱がおよそ 15 個程度。担当者は、ワードローブは立てて収納する必要があるため天井の低い南棟のユニットには入らず、天井の高い北棟のユニットに限られると説明する。さらに搬入経路について、今は表通り側の通路が道路工事中のため、搬入は裏の中庭側からしかできないと説明する。最低利用期間はないが、2 か月であれば週単位の料金が月極プランより安くなるため週単位でよいと案内される。',
    vocab: [['wardrobe', '洋服だんす'], ['minimum stay', '最低利用期間'], ['work out cheaper', '結果的に安くなる'], ['roadworks', '道路工事']],
    questions: [
      { id: 'v4q53r3', no: 53, tag: '図表', stem: 'Look at the graphic. Which unit will the woman most likely rent?',
        choices: ['Unit 14', 'Unit 9', 'Unit 11', 'Unit 3'],
        answer: 2,
        exp: '男性は、ワードローブを立てたまま収納するには天井の高い北棟（North block）のユニットが必要で、天井の低い南棟（South block）のユニット（Unit 14・Unit 3）はこの時点で除外されると述べる。続けて、表通り側の通路が道路工事中で搬入は中庭側からしかできないと説明しており、北棟だが表通り側にある Unit 9 も除外される。残る Unit 11 が北棟かつ中庭側にあり、これが正解となる。表には「北棟」「南棟」としか書かれておらず、どちらの天井が高いかは表だけでは分からない。表通り側・中庭側についても優劣はなく、2ユニットずつに均等に分かれている。両方の条件を音声で聞き取って初めて Unit 11 に絞り込める。',
        why: ['南棟にあり、天井が低いためワードローブを立てて収納できないと述べられている。', '北棟にあり天井は高いが、表通り側にあり道路工事のため今は搬入経路として使えないと述べられている。', '正解。', '中庭側からの搬入は可能だが、南棟にあり天井が低いためワードローブを立てて収納できない。'],
        topics: ['graphic'] },
      { id: 'v4q54r2', no: 54, tag: '詳細', stem: 'What does the man say about the wardrobe?',
        choices: ['It must be stored standing up.', 'It should be wrapped before storage.', 'It will have to be dismantled.', 'It cannot be moved on a trolley.'],
        answer: 0,
        exp: '男性はワードローブについて「立てたまま収納する必要がある」と述べている。',
        why: ['正解。', '男性がワードローブについて述べたのは収納時の向き（立てたまま入れる）だけで、梱包や養生には触れていない。', '男性は「立てたまま入れる必要がある」と述べており、組み立てたまま収納する前提になっている。分解するという話は出てこない。', 'トロリーの話は搬入経路（中庭側からしか入れられない）について出てくるものであり、ワードローブ自体をトロリーで運べないとは述べていない。'],
        topics: ['p3detail'] },
      { id: 'v4q55r2', no: 55, tag: '詳細', stem: 'What does the man say about payment?',
        choices: ['Weekly payment works out cheaper for her stay.', 'A deposit is required before the first week.', 'Payment must be made in cash on arrival.', 'A discount applies after the first six months.'],
        answer: 0,
        exp: '「2 か月であれば週単位の方が月極プランより安くなる」と説明している。',
        why: ['正解。', '保証金の話はない。', '支払い方法には触れていない。', '6 か月後の割引の話はない。'],
        topics: ['p3detail'] },
    ],
  },

  /* ── 56–58 ─────────────────────────────────────────── */
  set({
    n: [56, 57, 58], lv: 5, t: ['p3int'],
    s: [
      { role: 'W-Am', text: 'Dario, legal flagged our new product name. Apparently "Solstice" is already trademarked in the beverage category.' },
      { role: 'M-Au', text: 'By a competitor?' },
      { role: 'W-Am', text: 'No, unrelated — a sunscreen brand. But apparently that\'s still close enough to cause a conflict.' },
      { role: 'M-Au', text: 'We\'ve already printed ten thousand labels.' },
      { role: 'W-Am', text: 'I know. Legal\'s view is that using them domestically is probably fine, low risk, but exporting to markets where that brand is registered is not.' },
      { role: 'M-Au', text: 'So we could sell through the existing stock here, just not ship it abroad.' },
      { role: 'W-Am', text: 'That\'s my reading too. I\'d still get it in writing before we commit to a decision either way.' },
    ],
    ja: '女性が、新商品名「Solstice」が飲料カテゴリーですでに商標登録されていると法務から指摘があったと伝える。登録元は競合ではなく日焼け止めブランドだが、それでも抵触の恐れがあるという。すでにラベルを 1 万枚印刷済みと男性が指摘すると、女性は法務の見解として、国内での使用はおそらく低リスクだが、その商標が登録されている市場への輸出は避けるべきだと説明。男性は国内在庫は売り切って輸出だけしなければよいのではと確認し、女性も同じ理解だとしつつ、決定を下す前に必ず書面で確認を取ると付け加えた。',
    v: [['trademarked', '商標登録された', ], ['low risk', '低リスク', ], ['commit to a decision', '決定を下す']],
    q: [
      { tag: '詳細', s: 'What problem has legal identified?',
        c: ['The product formula infringes a patent.', 'The product name may conflict with an existing trademark.',
            'The packaging design was copied.', 'The labels contain a printing error.'],
        a: 1,
        e: '新商品名が既存の商標と抵触する恐れがあると指摘されている。',
        w: ['特許の話はない。', '正解。', 'デザインの模倣には触れていない。', '印刷ミスの話はない。'] },
      { tag: '意図', t: ['p3int'], s: 'What does the woman mean when she says, "I\'d still get it in writing before we commit to a decision either way"?',
        c: ['She believes the existing labels must be destroyed immediately.', 'She disagrees with legal\'s assessment of the risk.',
            'She wants to cancel the product launch this week.', 'She wants written confirmation before making a final decision.'],
        a: 3,
        e: '自分の理解と一致していても、行動に移す前に法務から正式な書面での確認を得たいという意図。',
        w: ['即座の廃棄については会話のどこにも出てこない。', '男性の説明に「自分の理解も同じだ」と同意しており、見解への異議ではない。', '商品中止の提案は会話のどこにも出てこない。', '正解。'] },
      { tag: '推測', s: 'What can be inferred about the existing labels?',
        c: ['They must be reprinted.', 'They have already been discarded by the warehouse team.',
            'They will be donated to another local company.', 'They can likely still be used for domestic sales.'],
        a: 3,
        e: '国内での使用は低リスクとされ、既存在庫は国内向けに使える見込みだと述べられている。',
        w: ['再印刷については会話のどこにも出てこない。', '破棄については会話のどこにも出てこない。', '譲渡については会話のどこにも出てこない。', '正解。'] },
    ],
  }),

  /* ── 59–61（図表）────────────────────────────────── */
  /* 本番は図表セットでも Look at the graphic. の設問は 1 セットに 1 問のみ。
     旧 No.60「Look at the graphic. When is that screen available?」は "that screen" が
     No.59 の正解（Screen 4）を先行詞で受けており、No.59 を解かないと解けない鎖になって
     いた（既知の欠陥として報告済み）。No.60 を「音声だけで解ける通常設問」に差し替え、
     この鎖を解消する。set() ヘルパー（id を no から自動生成する）は使わず直接記述し、
     id は使い回さず v4q60r として新規採番する（no は模試の通し番号として 60 を維持）。
     No.61 は内容・id とも変更していない。
     2026-08-25 追記: No.59 自体に別の欠陥があった。定員列の唯一の最大値
     （Screen 4＝200）が正解になっており、「一番大きい部屋を選ぶ」だけで
     150 名という要件を聞かずに当たった。定員が要件（150 名）を満たす部屋を
     2室（Screen 3＝220、Screen 4＝160）に増やし、Screen 4 の定員を最大値に
     しないようにしたうえで、もう一方の軸（午後の空き）で絞り込む形に組み替えた
     ——Screen 3 は定員は足りるが午後は予約済みで使えず、午後に空いている
     Screen 4 が正解として残る。Screen 1・Screen 2 は定員（60・90）が
     150 名に届かず構造的に使えない。No.60 が依拠する「午後を尋ねた理由」、
     No.61 が依拠する「映写機はバックアップ機・輝度がやや低い」という記述は
     変えていない。表・音声を実質変更したため id を v4q59 → v4q59b に
     新規採番。No.60・No.61 の内容・id は変更していない。 */
  /* 2026-08-25 追記（監査で二度目の差し戻し）: 上の v4q59b にはさらに2つの欠陥があった。
     (1) No.60 の stem「Why does the woman ask about the afternoon slot?」を先読みすると
     「午後が争点」と分かってしまい、表の Afternoon 列を見るだけで Booked の Screen 3 が
     音声なしで脱落し、残る Screen 1(60)・2(90)・4(160) のうち定員 150 名要件で
     Screen 4 に到達できた——No.59 が音声を必要としない設問になっていた。
     (2) 定員×時間帯の Free/Booked 格子という装置が、同じ Vol.4 の v4-p3-44
     （Fernshaw Co-working、Pod×時間帯の格子、正解は表の4行目・選択肢D）と
     正解の行位置・選択肢位置まで一致する重複になっていた。
     そこで表の軸を「時間帯の空き」から「座席の形式」に変更し、Free/Booked 格子を
     廃止した（v4-p3-44 との装置の重複も同時に解消）。あわせて Screen の番号も
     振り直し、正解が v4-p3-44 と同じ「表の4行目・選択肢D」に一致する偶然も消した
     （新しい正解は Screen 2・選択肢B）。Seating 列は Retractable が
     Screen 2・4、Fixed が Screen 1・3 で、唯一値にはならないようにしてある
     （定員 150 名以上に絞った後の Screen 1・2 の中でだけ Fixed/Retractable が
     1 対 1 で分かれる）。音声で「開映前に短い表彰式を行うので舞台前に空間が要る」と
     述べ、座席が固定式の Screen 1 にはその余地がなく、可動式の Screen 2 であれば
     確保できると案内する——この「どちらの形式が必要か」は音声でしか分からず、
     表だけでは判定できない。定員（220/160/90/60）は Screen 2（160）が最大でも
     最小でもない値のまま維持した。
     No.60 は "afternoon" への言及を撤去し、この会話の他のどの設問の答えにも
     触れない独立した事実（最終人数を1週間前までに知らせる依頼）を問う設問に
     差し替えた。誤答3つは「未言及」（前払い金）と「既出事実と矛盾」
     （開始時刻は既に確定／使用スクリーンは既に決定）でそれぞれ閉じている。
     また旧版は選択肢の語数が [10,5,5,7] で正解だけが複合構造（2要素）になって
     おり、正解が単独最長になる書き癖の実例だった。誤答3つを 6〜7 語程度の
     単文に統一し、正解も複合構造を持たない単文に書き改めた。
     さらに音声の "That still narrows it down to two" の "still" は直前に絞り込みの
     文脈がなく座りが悪かったため削除し、"if that suits you better" は同じ Vol.4 の
     vol4-l3.js（"first thing Monday morning if that suits you better"）と重複して
     いたため、この決まり文句を使わない言い回しに書き改めた。
     表・音声・選択肢を実質変更したため id を v4q59b → v4q59c、v4q60r → v4q60s、
     v4q61 → v4q61b に新規採番する。No.61 の topics も ['graphic']（図表を見て
     答える設問ではないのに図表論点になっていた不整合）から ['p3detail'] に修正した。 */
  {
    id: 'v4-p3-59', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    graphic: {
      t: 'table', title: 'Fenwick Cinema — Screen Specifications',
      head: ['Screen', 'Capacity', 'Seating'],
      rows: [
        ['Screen 1', '220', 'Fixed'],
        ['Screen 2', '160', 'Retractable'],
        ['Screen 3', '90', 'Fixed'],
        ['Screen 4', '60', 'Retractable'],
      ],
    },
    script: [
      { role: 'M-Cn', text: 'Fenwick Cinema private bookings.' },
      { role: 'W-Br', text: 'Hi, I\'m looking to book a screen for a company event — a hundred and fifty guests, so I\'ll need one of your larger rooms.' },
      { role: 'M-Cn', text: 'That narrows it down to two, capacity-wise.' },
      { role: 'W-Br', text: 'Good. We\'re also planning a short prize-giving before the film starts, so we\'ll need some open floor space at the front — is that workable in either of them?' },
      { role: 'M-Cn', text: 'One of the two has fixed seating right up to the screen, so there\'s no room for that. The other has retractable front rows, so you\'d have the space you need.' },
      { role: 'W-Br', text: 'Let\'s go with that one. What time can we come in?' },
      { role: 'M-Cn', text: 'Any time from midday. One more thing — we\'ll need your final guest count a week beforehand, so we can set the retractable rows to the right depth.' },
      { role: 'W-Br', text: 'Understood, I\'ll send that through.' },
      { role: 'M-Cn', text: 'And I should mention the projector in that screen is being serviced this week, so we\'d be running from a backup unit — the brightness is a touch lower, but nothing most people would notice.' },
    ],
    ja: '女性が 150 名の会社行事のため、大きめのスクリーンを予約したいと電話。定員から候補は 2 室に絞られる。開映前に短い表彰式を行うので舞台前に人が動けるスペースが要ると伝えると、一方は座席が固定式でその余地がなく、もう一方は前方座席が可動式でスペースを確保できると案内され、そちらに決定。入場開始時刻は正午以降ならいつでもよいとの回答。あわせて、最終的な人数を 1 週間前までに知らせてほしいと頼まれる（可動式座席を適切な深さに設定するため）。さらに、そのスクリーンの映写機が今週点検中でバックアップ機を使うことになり、輝度がやや落ちるがほとんどの人は気づかない程度だと説明される。',
    vocab: [['capacity', '定員'], ['narrow down', '絞り込む'], ['prize-giving', '表彰式'], ['retractable', '可動式の（格納できる）'], ['backup unit', '予備機']],
    questions: [
      {
        id: 'v4q59c', no: 59, tag: '図表', topics: ['graphic'],
        stem: 'Look at the graphic. Which screen will most likely be booked?',
        choices: ['Screen 1', 'Screen 2', 'Screen 3', 'Screen 4'],
        answer: 1,
        exp: '150 名を収容できるのは定員 220 の Screen 1 と定員 160 の Screen 2 の 2 室（「capacity-wise…narrows it down to two」に対応）。女性は開映前の表彰式のため舞台前に空間が必要だと述べており、座席が固定式の Screen 1 にはその余地がなく、前方座席が可動式の Screen 2 であれば確保できると案内されている。定員の大小だけでは選べない。',
        why: ['定員は満たすが、座席が固定式で前方に空間を作れないと説明されている。', '正解。', '定員 90 で 150 名の要件を満たせない。', '定員 60 で 150 名の要件を満たせない。'],
      },
      {
        // 新規: 音声だけで解ける独立した設問。No.59（座席形式）・No.61（映写機）の
        // どちらの答えにも触れない。
        id: 'v4q60s', no: 60, tag: '詳細', topics: ['p3detail'],
        stem: 'What does the man ask the woman to do a week before the event?',
        choices: ['Confirm the final guest count.', 'Pay a deposit in advance.',
                   'Choose a start time.', 'Select which screen to use.'],
        answer: 0,
        exp: '「最終的な人数を 1 週間前までに知らせてほしい。可動式の座席を適切な深さに設定するため」と述べている。',
        why: [
          '正解。',
          '前払い金についての言及はない。',
          '開始時刻はすでに「正午以降ならいつでも」と決まっている。',
          'どのスクリーンを使うかはすでにこの会話の中で決まっている。',
        ],
      },
      {
        id: 'v4q61b', no: 61, tag: '詳細', topics: ['p3detail'],
        stem: 'What does the man mention about the projector?',
        choices: ['A backup unit is in use.', 'It was replaced with a newer model.',
                   'It cannot show certain video formats, unlike the usual projector.', 'Extra payment is required to use it.'],
        answer: 0,
        exp: '「点検中のためバックアップ機を使う」と説明している。',
        why: ['正解。', '更新の話ではなく点検中。', '形式の制限には触れておらず、影響は明るさがわずかに落ちる程度で「ほとんどの人は気づかない」と述べられている。通常機との機能差は述べられていない。', '追加料金の話はない。'],
      },
    ],
  },

  /* ── 62–64（3名）─────────────────────────────────── */
  set({
    n: [62, 63, 64], lv: 5, t: ['p3int'], k: 'conversation with three speakers',
    s: [
      { role: 'M-Br', text: 'Right, we\'ve got two finalists for the scholarship and one place. Wei, you interviewed both — what\'s the split?' },
      { role: 'W-Cn', text: 'Academically almost identical. Where they differ is in how they talk about failure.' },
      { role: 'M-Au', text: 'Meaning?' },
      { role: 'W-Cn', text: 'One candidate described a research project that didn\'t work and explained what she\'d change. The other insisted every project she\'d led had succeeded.' },
      { role: 'M-Br', text: 'Could that just be interview nerves — not wanting to look weak?' },
      { role: 'W-Cn', text: 'Could be. I asked a follow-up question a different way and got the same answer.' },
      { role: 'M-Au', text: 'Then it\'s really down to the one who discussed the failed project. What tipped it for you?' },
      { role: 'W-Cn', text: 'Her plan for what she\'d study next was more specific — she\'d already identified the three labs she wanted to approach.' },
      { role: 'M-Br', text: 'That\'s a strong basis for a decision. Let\'s confirm the offer to her by Friday.' },
    ],
    ja: '奨学金の最終候補者 2 名に対し枠は 1 つという状況。両方を面接した女性は「学業成績はほぼ同じだが、失敗の語り方が違う」と述べる。1 人は失敗した研究とその後の改善策を語ったが、もう 1 人はすべて成功したと主張したという。面接の緊張の可能性も指摘されるが、表現を変えて再度尋ねても同じ答えだったとのこと。決め手は、失敗を語った候補者の今後の研究計画がより具体的で、すでに志望する研究室を 3 つ特定していた点。金曜までに採用の連絡をすることになった。',
    v: [['finalist', '最終候補者'], ['tip it', '決め手になる'], ['interview nerves', '面接の緊張']],
    q: [
      { tag: '詳細', s: 'What distinguished the two candidates?',
        c: ['Their interview scheduling', 'Their academic records',
            'Their proposed research topics', 'How they discussed failure'],
        a: 3,
        e: '「学業成績はほぼ同じだが、失敗の語り方が違う」と述べられている。',
        w: ['面接日程の話はない。', '成績はほぼ同じ。', '研究テーマの違いには触れていない。', '正解。'] },
      { tag: '意図', t: ['p3int'], s: 'What does the woman mean when she says, "I asked a follow-up question a different way and got the same answer"?',
        c: ['To flag the candidate\'s confusion.', 'To indicate the response was not due to nervousness.',
            'To explain an unrelated scheduling delay in the interview.', 'To suggest the follow-up question itself was unclear.'],
        a: 1,
        e: '面接の緊張かもしれないという指摘に対し、表現を変えて 2 回試しても同じ答えだったので緊張では説明できない、という趣旨。',
        w: ['候補者の困惑を指摘する発言ではない。表現を変えても同じ答えが返ってきたと述べている。', '正解。', '面接日程の遅れについては会話のどこにも出てこない。', '質問が不明瞭だったとは述べていない。むしろ表現を変えても同じ答えが返ってきたと述べている。'] },
      { tag: '次の行動', s: 'What will happen by Friday?',
        c: ['A third interview will take place next Monday instead.', 'A written test will happen.',
            'The scholarship will be readvertised for next year.', 'An offer will be confirmed to the chosen candidate.'],
        a: 3,
        e: '「金曜までに採用の連絡をしよう」と決まっている。',
        w: ['3 回目の面接については会話のどこにも出てこない。', '筆記試験については会話のどこにも出てこない。', '再募集については会話のどこにも出てこない。金曜までに採用を決めると述べている。', '正解。'] },
    ],
  }),

  /* ── 65–67 ─────────────────────────────────────────── */
  set({
    n: [65, 66, 67], lv: 4,
    s: [
      { role: 'W-Au', text: 'The bakery\'s cocoa order came in short again — third time this quarter.' },
      { role: 'M-Br', text: 'Same supplier?' },
      { role: 'W-Au', text: 'Yes. I think it\'s time we looked elsewhere, even if it costs slightly more.' },
      { role: 'M-Br', text: 'There\'s a co-op two towns over that a few other bakeries use. I could get a sample this week.' },
      { role: 'W-Au', text: 'Do that. If the quality\'s comparable, I\'d rather pay a bit more and get full orders on time.' },
      { role: 'M-Br', text: 'I\'ll bring back a sample batch and we can test it in the ganache before deciding.' },
    ],
    ja: '製菓店のカカオの発注が今四半期 3 回目の数量不足だったと女性が報告。同じ業者からの発注だと確認し、多少高くても別の業者を探すべきだと述べる。男性は近隣の町の協同組合を他の製菓店も使っていると紹介し、今週サンプルを取り寄せると申し出る。女性は品質が同等ならば少し高くても全量が時間通りに届く方がよいと答え、男性はサンプルを持ち帰りガナッシュで試してから決めようと提案した。',
    v: [['come in short', '数量が不足する'], ['co-op', '協同組合'], ['ganache', 'ガナッシュ']],
    q: [
      { tag: '詳細', s: 'Why does the woman want to switch suppliers?',
        c: ['A sudden price increase', 'Repeated short deliveries',
            'Poor packaging quality', 'Change in company ownership'],
        a: 1,
        e: '「今四半期 3 回目の数量不足」が理由。',
        w: ['値上げの話はない。', '正解。', '梱包品質には触れていない。', '経営者交代の話もない。'] },
      { tag: '詳細', s: 'What will the man do this week?',
        c: ['Visit the current supplier\'s factory', 'Renegotiate with the current supplier',
            'Cancel the current contract', 'Obtain a sample from another supplier'],
        a: 3,
        e: '「今週サンプルを取り寄せる」と述べている。',
        w: ['工場訪問には触れていない。', '再交渉の話はない。', '契約解除はまだ決まっていない。', '正解。'] },
      { tag: '推測', s: 'What is suggested about the new supplier?',
        c: ['It offers a lower price than the bakery pays now.', 'It may cost slightly more but could be more reliable.',
            'It cannot supply the required quantity.', 'It has never worked with bakeries before.'],
        a: 1,
        e: '「多少高くても、全量が時間通りに届く方がよい」という発言から、価格はやや高いが信頼性を重視していることが読み取れる。',
        w: ['女性は「多少高くついても別を探したい」「少し高くても全量が時間通りに届く方がよい」と述べており、現在より安く買えるという読みは会話の内容と食い違う。', '正解。', '供給量への懸念はない。', '他の製菓店も利用していると述べている。'] },
    ],
  }),

  /* ── 68–70 ─────────────────────────────────────────── */
  set({
    n: [68, 69, 70], lv: 4,
    s: [
      { role: 'M-Cn', text: 'The Tuesday evening spin class has been under six people for a month.' },
      { role: 'W-Br', text: 'Is that a promotion problem or a timing problem?' },
      { role: 'M-Cn', text: 'Timing, I think — the Thursday slot at the same hour is nearly full.' },
      { role: 'W-Br', text: 'Then let\'s move Tuesday\'s slot to lunchtime instead of cutting it. We haven\'t tried a midday spin class before.' },
      { role: 'M-Cn', text: 'We\'d need an instructor free at noon. I can check who\'s available.' },
      { role: 'W-Br', text: 'Do that, and let\'s trial it for a month before deciding whether to keep it.' },
    ],
    ja: '火曜夜のスピンクラスが 1 か月間、参加者 6 人未満で推移していると男性が報告。宣伝の問題か時間帯の問題か女性が尋ねると、男性は同時刻の木曜枠がほぼ満員なので時間帯の問題だろうと答える。女性は廃止ではなく、火曜の枠を昼休みの時間帯に移すことを提案し、これまで昼のスピンクラスは試したことがないと述べる。男性は正午に空いているインストラクターが必要だとして確認すると答え、女性は 1 か月試験導入してから継続を判断しようと結論づけた。',
    v: [['spin class', 'スピンクラス（室内自転車）'], ['midday', '正午の', ], ['trial', '試験的に行う']],
    q: [
      { tag: '詳細', s: 'What problem does the man report?',
        c: ['Broken gym equipment', 'Low attendance in the Tuesday evening class',
            'A double-booked instructor for two evening classes', 'Complaints about the class room temperature'],
        a: 1,
        e: '「火曜夜のクラスが 1 か月間、6 人未満」と報告している。',
        w: ['機材の故障については会話のどこにも出てこない。', '正解。', 'ダブルブッキングについては会話のどこにも出てこない。', '室温への苦情については会話のどこにも出てこない。'] },
      { tag: '詳細', s: 'What does the woman propose instead of cancelling the class?',
        c: ['Merging it with the Thursday class', 'Moving it to a lunchtime slot',
            'Offering it for free', 'Replacing the instructor'],
        a: 1,
        e: '「廃止ではなく昼休みの時間帯に移そう」と提案している。',
        w: ['統合の提案ではない。', '正解。', '無料化の話はない。', '講師交代の話もない。'] },
      { tag: '次の行動', s: 'What will the man check?',
        c: ['Costs of the new equipment', 'Member feedback from last month',
            'Instructor availability at noon', 'The room booking system'],
        a: 2,
        e: '「正午に空いているインストラクターがいるか確認する」と述べている。',
        w: ['機材費の話はない。', '会員アンケートには触れていない。', '正解。', '予約システムの話もない。'] },
    ],
  }),
];
