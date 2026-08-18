/* =============================================================
   予想模試 Vol.6 — Part 4（No.71–100）
   終盤 2 セットは図表問題。

   ▼ このファイルを書く担当へ（2026-08-18）
   揃えるのは**構造だけ**。具体的には——問題数 30（3問×10 セット、No.71–100）、
   図表問題は終盤 2 セット、`tag` の並び、`level` の配分、話者ロールの散らし方、
   1 セットあたりの語数の水準（120〜150 語）だけ。
   **場面・業種・人物・地名・数値・言い回し・設問文（stem）・選択肢は絶対に揃えない。**
   構造は上のとおり数値で書いてあるので、**既存の巻（vol1〜vol5 の -l3.js）を開かないこと。**
   開くと必ず内容まで引きずられる。
   もとここには「Vol.1 と同じ条件を鏡写しにする」と書いてあった。この一文が原因で
   2026-08-18 に Vol.6 は Vol.1 の内容そのものの再スキンになり、Part 7 で 50 問、
   Part 3・4 で 30 問以上を作り直した。**この注意書きを消さないこと。**
   書き終えたら `assets/data/` 全体（ドリル `assets/data/drills/*.js` を含む）と
   機械照合すること。既存の巻を避けた結果ドリルと衝突した事故が同日に 4 件起きている。
   ============================================================= */

const talk = (o) => ({
  id: `v6-p4-${o.n[0]}`, part: 4, kind: 'set', kindLabel: o.k || 'talk',
  topics: o.t || ['p4type'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.id || `v6q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p4type'], tag: x.tag,
  })),
});

export const L3 = [

  /* ── 71–73 講演者の紹介 ───────────────────────────────
     題材ごと差し替え（旧版は「専門業者からの留守電 → 問題説明 → 2案提示 → 平日の期限までに
     どちらか選ばせる」で、Vol.4・Vol.5 の同スロットと装置が同一だった）。
     id は v6-p4-71r / v6q71r–73r（no は模試の通し番号として 71–73 を維持するが、中身を
     丸ごと差し替えたため設問 id は新規採番）。作成当時 talk() ヘルパーは id を no から
     自動生成するだけで no を変えずに id だけ変える手段がなかったため、このユニットはヘルパーを
     使わず直接記述している（その後 q の要素に id を書けば上書きできるようにした。No.93 がその例）。 */
  {
    id: 'v6-p4-71r', part: 4, kind: 'set', kindLabel: 'introduction',
    topics: ['p4type'], level: 4,
    script: [
      { role: 'M-Cn', text: 'Welcome, everyone, to the autumn meeting of the Wrayburn Valley Guest House Association.' },
      { role: 'M-Cn', text: 'Our guest tonight is Bettina Kerridge, who took over Saltmoor House from her aunt four years ago, after eleven years working as a bridge engineer.' },
      { role: 'M-Cn', text: 'She is not here to describe her own guest house. Her subject is the shared booking scheme that thirty-one of our members joined in the spring of last year, and what its first full year shows.' },
      { role: 'M-Cn', text: 'Bettina joined the association only two years ago and does not sit on the committee, which is why we asked her to look at the numbers.' },
      { role: 'M-Cn', text: 'The last twenty minutes are for questions. Rather than passing a microphone around, please write yours on the cards on your table and pass them to the front during the break. The slides go on our website tomorrow, so nobody needs to copy anything down.' },
    ],
    ja: 'レイバーン渓谷ゲストハウス協会の秋季会合の冒頭。司会が今夜の講演者ベティーナ・ケリッジを紹介する。ケリッジ氏は4年前に叔母からソルトムーア・ハウスを引き継いだが、その前は11年間、橋梁技師として働いていた。話の主題は自分の宿ではなく、昨年の春に会員31名が加わった共同予約制度と、その最初の1年が示すものである。ケリッジ氏が協会に加わったのは2年前で委員会には入っておらず、だからこそ数字の検討を頼んだと司会は説明する。最後の20分は質疑にあてるが、マイクを回す方式は取らず、質問はテーブル上のカードに書いて休憩中に前方へ回すよう依頼する。スライドは翌日ウェブサイトに載るので書き写す必要はない、と付け加えている。',
    vocab: [['guest house', '（小規模な）宿泊施設'], ['take over from', '（人）から引き継ぐ'], ['sit on a committee', '委員会に籍を置く、委員を務める'], ['scheme', '（組織的な）制度、仕組み']],
    questions: [
      { id: 'v6q71r', no: 71, topics: ['p4type'], tag: '概要',
        stem: 'What will the guest speaker discuss?',
        choices: ['A recent refurbishment of Ms. Kerridge\'s guest house', 'The results of a survey of overnight visitors', 'A proposed increase in the association membership fee', 'The first year of a shared booking scheme'],
        answer: 3,
        exp: '司会は She is not here to describe her own guest house. Her subject is the shared booking scheme that thirty-one of our members joined in the spring of last year, and what its first full year shows. と演題を名指ししている。話の中身は、昨年の春に会員31名が加わった共同予約制度の最初の1年が何を示したか、である。',
        why: ['She is not here to describe her own guest house と、自分の宿については話さないと明言している。改装についての言及もない。',
              '数字の出どころは会員31名が加わった共同予約制度の最初の1年の記録であり、宿泊客への調査ではない。調査を行ったという発言はない。',
              '会費には一言も触れておらず、司会は演題を「共同予約制度の最初の1年が示すもの」と名指ししている。',
              '正解。'] },
      { id: 'v6q72r', no: 72, topics: ['p4type'], tag: '詳細',
        stem: 'What is mentioned about Ms. Kerridge?',
        choices: ['She worked as an engineer earlier in her career.', 'She helped found the association eleven years ago.', 'She has served on the association committee since June.', 'She has owned Saltmoor House since it first opened.'],
        answer: 0,
        exp: 'who took over Saltmoor House from her aunt four years ago, after eleven years working as a bridge engineer と紹介している。宿を引き継ぐ前は橋梁技師だった、という経歴である。',
        why: ['正解。',
              'eleven years がかかるのは橋梁技師として働いた年数である。協会については joined the association only two years ago と述べており、11年前の設立に関わったという話とは両立しない。',
              'does not sit on the committee と明言している。',
              'took over Saltmoor House from her aunt four years ago と述べており、開業時から所有していたのではなく叔母から引き継いでいる。'] },
      { id: 'v6q73r', no: 73, topics: ['p4type'], tag: '依頼',
        stem: 'What does the speaker ask audience members to do?',
        choices: ['Download the slides from the website this evening', 'Raise their hands to ask questions at any point', 'Copy down the details shown on each slide', 'Hand in written questions during the break'],
        answer: 3,
        exp: 'please write yours on the cards on your table and pass them to the front during the break と、質問はカードに書いて休憩中に前方へ回すよう求めている。',
        why: ['スライドがウェブサイトに載るのは tomorrow で、今夜ではない。しかもそれは「書き写す必要がない」ことの根拠として述べられており、聴衆への依頼ではない。',
              '質問はカードに書いて前方へ回す方式で、Rather than passing a microphone around と、その場で口頭に出して尋ねる方式を退けている。質疑も the last twenty minutes に限られており、at any point ではない。',
              'nobody needs to copy anything down と明言している。スライドは翌日ウェブサイトに載る。',
              '正解。'] },
    ],
  },

  /* ── 74–76 場内放送 ───────────────────────────────── */
  talk({
    n: [74, 75, 76], lv: 3, k: 'announcement',
    s: [
      { role: 'M-Au', text: 'Attention, skaters. Thanks for joining us this morning here at Cardew Ice Rink.' },
      { role: 'M-Au', text: 'A quick note: the public session will end at noon today, an hour earlier than usual, so our maintenance team can carry out extra resurfacing work before this evening\'s junior league match.' },
      { role: 'M-Au', text: 'The smaller practice rink next door stays open until the normal time of one o\'clock, so if you were hoping for a longer skate, you\'re welcome to move over there.' },
      { role: 'M-Au', text: 'Also, skate hire at the front desk is closed this morning while a new sharpening machine is installed. If you need skates fitted, please use the desk near the café instead.' },
      { role: 'M-Au', text: 'Skate hire at the front desk should reopen this afternoon. Thanks for your patience, and enjoy the ice.' },
    ],
    ja: 'カードゥー・アイスリンクの一般滑走セッションについての場内放送。今夜のジュニアリーグの試合前に追加の整氷作業を行うため、通常より1時間早い正午に一般滑走が終了する。隣の練習用リンクは通常どおり13時まで営業しているので、長く滑りたい人はそちらへ案内。また、正面のスケート靴貸出は新しい研磨機の設置のため休止中で、必要な人はカフェ近くの窓口を利用するよう案内。貸出窓口は午後に再開見込み。',
    v: [['resurfacing', '整氷（氷面の再仕上げ）'], ['skate hire', 'スケート靴の貸出'], ['sharpening machine', '（刃の）研磨機']],
    q: [
      { tag: '詳細', s: 'Why will the public session end early today?',
        c: ['For a scheduled fire drill', 'Because of a power failure', 'Because a private lesson has been booked', 'To make time for extra resurfacing work'],
        a: 3,
        e: '「今夜のジュニアリーグの試合前に追加の整氷作業を行うため」と述べている。',
        w: ['訓練の話は出ていない。', '停電の話はない。', '個人レッスンの予約には触れていない。', '正解。'] },
      { tag: '詳細', s: 'What is suggested for skaters wanting a longer session?',
        c: ['Return in the afternoon', 'Book a private skating lesson', 'Ask for a refund at the front desk', 'Use the smaller practice rink instead'],
        a: 3,
        e: '「隣の練習用リンクは通常どおり13時まで営業しているので、そちらへどうぞ」と案内している。',
        w: ['午後への言及は貸出窓口の再開についてのみで、一般滑走は正午で終了する。午後に戻れば長く滑れるとは述べていない。', '個人レッスンの予約案内はない。', '返金や払い戻しには一切触れていない。', '正解。'] },
      { tag: '詳細', s: 'What is said about skate hire at the front desk?',
        c: ['It is closed for the whole day, reopening tomorrow morning.', 'It has moved permanently to the café.', 'It is temporarily closed for new equipment, reopening this afternoon.', 'It now requires an advance booking.'],
        a: 2,
        e: '「新しい研磨機の設置のため休止中で、午後には再開見込み」と説明している。',
        w: ['「午後には再開の見込み」と述べており、終日の休止でも翌朝の再開でもない。', '恒久的な移転ではない。', '正解。', '予約制になったとは述べていない。'] },
    ],
  }),

  /* ── 77–79 ラジオ広告 ─────────────────────────────── */
  talk({
    n: [77, 78, 79], lv: 4, k: 'advertisement',
    s: [
      { role: 'W-Am', text: 'Tired of waiting half a day for a locksmith who won\'t say when they\'ll actually turn up? Penhale Locksmiths has just added a second van, covering the north side of town from this month.' },
      { role: 'W-Am', text: 'Every call-out gets a fixed price before any work begins, so what you\'re quoted on the phone is what you pay — no surprise labour charges once the door\'s open.' },
      { role: 'W-Am', text: 'Our standard daytime response is under thirty minutes. After hours, it\'s under an hour, with no extra fee for evenings or weekends.' },
      { role: 'W-Am', text: 'Right through April, we\'re waiving the call-out fee completely on the north side, to introduce our second van — you\'d only pay for parts, if any are needed.' },
      { role: 'W-Am', text: 'Penhale Locksmiths. Reach us any time, day or night.' },
    ],
    ja: 'ペンヘイル・ロックスミスの広告。今月から町の北側を担当する2台目の出張車両を追加。すべての出張は作業開始前に確定料金を提示し、電話で聞いた金額がそのまま請求額になる（作業後の追加請求なし）。日中の標準対応時間は30分以内、時間外でも1時間以内で、夜間・週末の割増料金はない。4月中は2台目の車両の導入にあわせ、町の北側での依頼は出張料が全額免除され、部品代のみの負担で済む。日夜問わず連絡可能。',
    v: [['call-out', '出張対応'], ['waive', '免除する'], ['response time', '対応（までの）時間']],
    q: [
      { tag: '概要', s: 'What kind of business does the advertisement describe?',
        c: ['A home security system installer', 'A moving company', 'A locksmith service', 'A hardware store'],
        a: 2,
        e: '冒頭と末尾で社名を Penhale Locksmiths と名乗り、締め出し時の出張対応・出張料・部品代について述べている。',
        w: ['防犯システムの設置には触れていない。', '引っ越しの話はない。', '正解。', '店舗での販売の話ではない。'] },
      { tag: '詳細', s: 'What does the speaker emphasise about pricing?',
        c: ['Discounts are given to returning customers.', 'A fixed price is given before work begins.', 'Prices are lower in the evenings and at weekends.', 'A membership plan reduces costs.'],
        a: 1,
        e: '「電話で提示された金額がそのまま請求額になる」と明言している。',
        w: ['常連客への割引の話はない。', '正解。', '夜間・週末について述べているのは「割増料金がない」ことだけで、通常より安くなるとは言っていない。', '会員制の話はない。'] },
      { tag: '詳細', s: 'How can listeners receive a free call-out?',
        c: ['By calling in the evening rather than during the day', 'By requesting service on the north side in April', 'By paying with a specific credit card', 'By accepting a quotation over the phone'],
        a: 1,
        e: '「4月中は2台目の車両の導入にあわせ、町の北側での依頼は出張料を全額免除する」と述べている。地域と期間の両方を満たしたときだけの免除で、時間外の「割増なし」や事前の確定料金とは別の話である。',
        w: ['時間外について述べているのは「1時間以内に対応する」「夜間・週末の割増料金はない」ことである。割増が付かないことと、出張料そのものが免除されることは別。', '正解。', '特定のカードの話はない。', '確定料金の提示はすべての出張に対する標準の扱いで、しかも「電話で聞いた額がそのまま請求額になる」と述べている。無料になる条件ではない。'] },
    ],
  }),

  /* ── 80–82 会議の抜粋 ─────────────────────────────── */
  talk({
    n: [80, 81, 82], lv: 5, k: 'excerpt from a meeting',
    s: [
      { role: 'M-Br', text: 'Last thing on the agenda, and it\'s the printed catalogue — I don\'t expect this one to be popular with everybody.' },
      { role: 'M-Br', text: 'We produced four thousand copies of the January edition. Six hundred went out with orders, another four hundred went to the sales team for customer visits, and the remaining three thousand are still shrink-wrapped in the stockroom.' },
      { role: 'M-Br', text: 'Three quarters of what we printed has never left the building.' },
      { role: 'M-Br', text: 'So January was the last edition at that volume. We\'ll print four hundred a year for the sales team and move everyone else to the online version, which we can correct the same day a price changes.' },
      { role: 'M-Br', text: 'Before Friday, each of you needs to send me the name of any customer who genuinely cannot work from the online version. Those accounts will keep receiving a printed copy.' },
    ],
    ja: '会議の最終議題として印刷版カタログを取り上げる。1月号は4,000部を刷ったが、注文に同梱して出たのが600部、営業担当が顧客訪問用に持ち出したのが400部で、残る3,000部はフィルム包装のまま在庫室にあると内訳を示す。そのうえで「印刷した4分の3は建物から一度も出ていない」と述べ、1月号をその部数での最後にすると告げる。今後は営業担当向けに年400部だけ刷り、それ以外はオンライン版に移す。オンライン版なら価格が変わったその日のうちに直せる。金曜までに、各自がオンライン版では業務にならない顧客の名前を送ること。その取引先には引き続き印刷版を届ける。',
    v: [['edition', '（刊行物の）号・版'], ['shrink-wrapped', 'フィルムで包装されたままの'], ['volume', '（ここでは）発行部数'], ['account', '取引先']],
    q: [
      { tag: '意図', s: 'What does the speaker imply when he says, "Three quarters of what we printed has never left the building"?',
        t: ['p3int'],
        c: ['That the stockroom needs to be reorganised', 'That the January edition sold out quickly', 'That the sales team should visit more customers', 'That most of the copies produced served no purpose'],
        a: 3,
        e: '直前に内訳を挙げている。4,000部のうち外に出たのは600部＋400部の計1,000部で、残る3,000部は包装されたまま在庫室にある。その3,000部を「4分の3」と言い換えており、直後に「1月号がその部数での最後」と減刷の決定が続く。印刷した大半が用をなさなかったという指摘である。',
        w: ['在庫室の整理には触れていない。残っている部数は印刷量を減らす根拠として挙げられている。', '外に出たのは4,000部のうち1,000部だと直前に数字で示しており、完売とは正反対の内訳である。', '営業担当の訪問回数についての話はしておらず、営業担当向けには年400部を刷り続けると述べている。', '正解。'] },
      { tag: '詳細', s: 'What will change after the January edition?',
        c: ['Far fewer copies will be printed, and an online version will be used instead.', 'The catalogue will be produced twice a year, and each edition will be shorter.', 'Prices will be removed from the printed catalogue.', 'An outside company will take over the printing.'],
        a: 0,
        e: '「1月号がその部数での最後。今後は営業担当向けに年400部だけ刷り、それ以外はオンライン版に移す」と述べている。',
        w: ['正解。', '発行回数を増やすとも、1号あたりを薄くするとも述べていない。変わるのは部数と配布の手段である。', '価格を載せないとは述べておらず、むしろオンライン版なら価格変更の当日に直せる点を利点として挙げている。', '印刷を外部に委託するという話は出ていない。'] },
      { tag: '依頼', s: 'What are the listeners asked to send by Friday?',
        c: ['An estimate of next year\'s printing costs', 'The names of customers who still need a printed copy', 'Comments on the new catalogue design', 'A count of the copies left in the stockroom'],
        a: 1,
        e: '「金曜までに、オンライン版では業務にならない顧客の名前を送ってほしい。その取引先には引き続き印刷版を届ける」と依頼している。',
        w: ['印刷費の見積もりは求めていない。', '正解。', 'デザインへの意見は求めていない。', '在庫の部数は話し手自身が示しており、集計を依頼していない。'] },
    ],
  }),

  /* ── 83–85 見学ツアー ─────────────────────────────── */
  talk({
    n: [83, 84, 85], lv: 4, k: 'talk',
    s: [
      { role: 'W-Cn', text: 'Hello, everybody. My name is Genevieve, and I will be showing you around Thornbarrow until about midday.' },
      { role: 'W-Cn', text: 'Everything we make here is made the way it was in seventeen ninety — a mould built up in loam, molten bronze poured into it, and then weeks of patient tuning before anything leaves the yard.' },
      { role: 'W-Cn', text: 'Today happens to be a casting day. The furnace is already up to temperature, so instead of crossing the floor as we normally would, we\'ll watch the pour from the gallery above it.' },
      { role: 'W-Cn', text: 'That adds about twenty minutes to the visit, so we will not be finished by midday after all. If that causes anyone a problem, please tell me straight away.' },
      { role: 'W-Cn', text: 'We\'ll end in the tuning room, where a bell cast in nineteen-oh-four is being brought back into pitch this week.' },
    ],
    ja: 'ソーンバローの見学ツアーの導入。案内役はジェネヴィエーヴで、正午ごろまで同行する。ここで作るものはすべて1790年当時と同じ方法——粘土質の土で鋳型を築き、溶かした青銅を流し込み、そのあと何週間もかけて根気よく音を整えてから外へ出す——で作られていると説明する。今日はちょうど鋳造の日にあたり、炉がすでに高温になっているため、いつものように作業場の床を横切るのではなく、その上のギャラリーから流し込みを見学する。そのぶん20分ほど延びるので正午には終わらないと断り、都合の悪い人はすぐに申し出るよう求める。最後は調律室で終わり、そこでは1904年に鋳造された鐘が今週、音程を整え直されている。',
    v: [['loam', '鋳型に用いる粘土質の土'], ['molten', '溶けた'], ['pour', '（溶けた金属を型に）流し込むこと'], ['pitch', '音の高さ、音程']],
    q: [
      { tag: '概要', s: 'What kind of place are the listeners visiting?',
        c: ['An iron foundry', 'A bell foundry', 'A piano workshop', 'A pottery'],
        a: 1,
        e: '粘土質の土で鋳型を築き、溶かした青銅を流し込み、そのあと何週間もかけて音を整える、という工程を挙げている。さらに末尾で「1904年に鋳造された鐘の音程を整え直している」と述べており、鐘の鋳造所と分かる。',
        w: ['流し込むと述べているのは molten bronze（青銅）であって鉄ではない。作っているものも、末尾に出る「1904年に鋳造された鐘」である。', '正解。', 'ピアノ工房なら調律はあるが、溶かした青銅を鋳型に流し込む工程はない。', '陶器工房なら型は使うが、青銅の鋳造も音程の調整も行わない。'] },
      { tag: '詳細', s: 'Why will the group watch from the gallery?',
        c: ['The pour is taking place on the floor below.', 'The floor below is being repaired this week.', 'The gallery gives a clearer view of the moulds.', 'A delivery is blocking the usual route.'],
        a: 0,
        e: '「今日は鋳造の日で炉がすでに高温になっているので、いつものように床を横切らず、その上のギャラリーから流し込みを見る」と理由を述べている。',
        w: ['正解。', '床の補修工事には触れていない。', '見やすさを理由には挙げておらず、鋳造中だからと述べている。', '搬入で通路が塞がっているという説明はない。'] },
      { tag: '詳細', s: 'What does the speaker say about today\'s tour?',
        c: ['It will follow the route it normally takes.', 'It has been shortened by twenty minutes.', 'It will run longer than usual.', 'It costs more than the standard tour.'],
        a: 2,
        e: '普段は作業場の床を横切るところを、今日は鋳造中のためギャラリーから見学する。That adds about twenty minutes と述べており、いつもの行程より長くかかる。',
        w: ['instead of crossing the floor as we normally would と述べており、今日はいつもの経路を取らない。', '20分短くなるのではなく、20分延びる。', '正解。', '追加料金には触れていない。'] },
    ],
  }),

  /* ── 86–88 電話の自動応答 ─────────────────────────── */
  talk({
    n: [86, 87, 88], lv: 4, k: 'recorded message',
    s: [
      { role: 'NARR', text: 'Thank you for calling Holt\'s Garage. Our workshop is open Monday to Friday, eight to five thirty, and Saturday mornings only, eight to twelve.' },
      { role: 'NARR', text: 'Our menu was reorganised over the summer, so please do not assume the options are where they used to be.' },
      { role: 'NARR', text: 'To book a routine service using your registration number, press one. To check on a vehicle currently with us for repair, press two — please note that any estimate given over the phone can change once a mechanic has opened the vehicle up.' },
      { role: 'NARR', text: 'For an MOT test booking, press three. You will need your logbook number and a preferred date to hand when the call connects.' },
      { role: 'NARR', text: 'For anything else, hold and one of the team will pick up. One thing we cannot do by telephone is take payment; invoices are settled at the desk when you collect the vehicle.' },
    ],
    ja: 'ホルト・ガレージの自動音声。営業は月〜金 8〜17時半、土曜は午前のみ8〜12時。メニューは夏の間に組み替えたので、選択肢が以前と同じ位置にあると思い込まないよう注意を促す。登録番号での定期点検予約は1、修理中の車両の状況確認は2（電話で伝える見積もりは、整備士が実際に車両を開けてみると変わることがある）、車検予約は3（車検証番号と希望日を手元に用意）。その他は切らずに待てば担当者が出る。電話でできないことが一つあり、それは支払いの受け付けで、請求は車両を引き取る際に窓口で精算する。',
    v: [['registration number', '車両登録番号'], ['logbook', '車検証（V5）'], ['MOT test', '車検（英国の検査制度）'], ['settle an invoice', '請求を精算する']],
    q: [
      { tag: '詳細', s: 'What is mentioned about repair estimates given by phone?',
        c: ['They include the cost of any replacement parts fitted.', 'They are valid for thirty days.', 'They may change once a mechanic inspects the vehicle.', 'They require a deposit to be confirmed.'],
        a: 2,
        e: '「電話で伝えた見積もりは、整備士が実際に開けてみると変わることがある」と明言している。',
        w: ['部品代を含むとは述べていない。', '有効期限の話はない。', '正解。', 'デポジットの話はない。'] },
      { tag: '詳細', s: 'What is stated about the workshop\'s Saturday opening hours?',
        c: ['It is open the same hours as on weekdays.', 'It is open in the morning only.', 'It is closed on Saturdays.', 'It opens an hour later than on weekdays.'],
        a: 1,
        e: '冒頭で「月〜金は8時から17時半、土曜は午前のみ8時から12時」と述べている。',
        w: ['平日は17時半まで、土曜は12時までで、営業時間は同じではない。', '正解。', '土曜も8時から12時まで営業している。', '平日も土曜も8時開店で、開店時刻は同じ。'] },
      { tag: '詳細', s: 'What does the message say about payment?',
        c: ['A deposit is required when a booking is made.', 'Card payments carry a small charge.', 'Invoices must be settled within thirty days.', 'Payment cannot be taken over the telephone.'],
        a: 3,
        e: '末尾で「電話でできないことが一つあり、それは支払いの受け付けである。請求は車両を引き取る際に窓口で精算する」と述べている。',
        w: ['予約時のデポジットには触れていない。', 'カード手数料の話は出ていない。', '支払期限ではなく、引き取り時に精算すると述べている。', '正解。'] },
    ],
  }),

  /* ── 89–91 ニュース ───────────────────────────────── */
  talk({
    n: [89, 90, 91], lv: 5, k: 'broadcast',
    s: [
      { role: 'W-Au', text: 'In regional news, fruit growers in the Hallowmere valley can sign up from Monday to a frost-warning service run by the county agricultural college.' },
      { role: 'W-Au', text: 'Sensors have been fixed in eleven orchards at different heights above the valley floor, and whenever the reading at any of them is forecast to fall below freezing overnight, a text goes out to everyone registered.' },
      { role: 'W-Au', text: 'The college stresses that the warnings come from the sensors, not from the regional forecast: cold air settles at the bottom of the valley, and on a still night the two can differ by several degrees.' },
      { role: 'W-Au', text: 'The first season is free, but growers must register a mobile number with the college before the end of March; no registrations will be taken once the season is under way.' },
      { role: 'W-Au', text: 'A second set of sensors for the neighbouring Ilfley valley has been approved, though not for installation until next year.' },
    ],
    ja: '地域ニュース。ハローミア谷の果樹栽培農家が、月曜から県の農業大学が運営する霜警報サービスに登録できるようになる。谷底からの高さが異なる11か所の果樹園にセンサーが設置されており、いずれかの測定値が夜間に氷点下まで下がる見込みになると、登録者全員にテキストメッセージが送られる。大学は、警報がこのセンサーに基づくもので地域予報に基づくものではないことを強調する。冷気は谷底にたまるため、風のない夜には両者が数度違うことがあるからである。初年度は無料だが、農家は3月末までに携帯番号を大学に登録する必要があり、シーズンが始まってからの登録は受け付けない。隣接するイルフリー谷向けの第2組のセンサーも承認されているが、設置は来年になる。',
    v: [['frost', '霜、氷点下の冷え込み'], ['orchard', '果樹園'], ['forecast', '（動詞で）予報する'], ['under way', 'すでに始まって']],
    q: [
      { tag: '詳細', s: 'Why does the college say the warnings may differ from the regional forecast?',
        c: ['Cold air collects at the bottom of the valley.', 'The regional forecast is issued only once a day.', 'The sensors also record rainfall.', 'The forecast does not cover the whole county.'],
        a: 0,
        e: '「警報はセンサーに基づくもので地域予報に基づくものではない。冷気は谷底にたまるため、風のない夜には両者が数度違うことがある」と述べている。',
        w: ['正解。', '地域予報の発表回数には触れていない。', 'センサーが測ると述べているのは気温で、降水量の記録には言及がない。', '予報の対象範囲についての言及はない。'] },
      { tag: '詳細', s: 'What must growers do in order to receive the warnings?',
        c: ['Register a mobile number before the end of March', 'Install a sensor in their own orchard', 'Attend a session at the agricultural college', 'Pay a fee before the start of the first season'],
        a: 0,
        e: '「初年度は無料だが、3月末までに携帯番号を大学に登録しなければならない。シーズンが始まってからの登録は受け付けない」と述べている。',
        w: ['正解。', 'センサーは既に11か所の果樹園に設置されており、農家が自分で設置することは求められていない。', '来校や講習の話は出ていない。', '初年度は無料だと明言している。'] },
      { tag: '詳細', s: 'What is mentioned about the Ilfley valley?',
        c: ['Its growers were consulted before the trial began.', 'Sensors there will not be installed until next year.', 'It already has a warning service of its own.', 'Its orchards lie at a lower altitude.'],
        a: 1,
        e: '「隣接するイルフリー谷向けの第2組のセンサーは承認されているが、設置は来年になる」と述べている。',
        w: ['事前に意見を聞いたという話は出ていない。', '正解。', '独自のサービスがあるとは述べておらず、これからセンサーを設置する側として挙げられている。', '高さについて述べているのはハローミア谷の11か所の設置高さで、イルフリー谷の標高には触れていない。'] },
    ],
  }),

  /* ── 92–94 研修の導入 ─────────────────────────────── */
  talk({
    n: [92, 93, 94], lv: 5, k: 'talk',
    s: [
      { role: 'M-Am', text: 'Morning, everyone. Before you touch a pipette this week, we need to talk about how you write things down.' },
      { role: 'M-Am', text: 'Every entry in the lab notebook needs a date, your initials, and enough detail that someone else could repeat what you did without asking you a single question.' },
      { role: 'M-Am', text: 'The part people get wrong isn\'t the successful runs — those are easy to describe. It\'s the ones that fail. People are tempted to just leave the page blank and move on.' },
      { role: 'M-Am', text: 'A blank page is not a null result. If a reaction doesn\'t work, write down exactly what you did and what you saw, because the next person who tries it needs to know it\'s already been tried.' },
      { role: 'M-Am', text: 'I\'ll check the first week of notebooks myself, not to catch anyone out, but because this habit is much easier to build now than to fix in six months.' },
    ],
    ja: '実験ノートの記入方法についての研修の冒頭。すべての記入には日付・イニシャル・他の人が質問なしに再現できるだけの詳しさが必要と説明。多くの人がつまずくのは成功した実験ではなく失敗した実験の記録で、白紙のまま次に進みたくなる点だと指摘。「白紙は〈効果が出なかったという結果〉ではない」と述べ、うまくいかなかった場合も何をして何を見たかを正確に書くよう求める。次に試す人が、それが既に試されたことを知る必要があるため。最初の1週間分のノートは自分で確認するが、それは咎めるためではなく、この習慣は今のうちに身につける方が半年後に直すより簡単だからだと締めくくる。',
    v: [['pipette', 'ピペット'], ['null result', '（実験で）効果・変化が出なかったという結果。それ自体は正当な実験結果で、記録しないこととは違う'], ['initials', 'イニシャル']],
    q: [
      { tag: '概要', s: 'What is the main topic of the talk?',
        c: ['How to record work in a lab notebook', 'How to operate laboratory equipment safely', 'How to design a new experiment', 'How to write a research paper for publication'],
        a: 0,
        e: '終始、実験ノートの記入方法（日付・イニシャル・再現できる詳しさ、失敗の記録）について述べている。',
        w: ['正解。', '機器の安全な操作法の話ではない。', '実験計画の立て方ではない。', '論文執筆の話は出ていない。'] },
      /* 旧版は 'what do people often get wrong?' で、正解が
         'They leave the page blank when an experiment fails.' だった。
         これは Q94 の stem に引用されている "A blank page is not a null result"
         （null result ＝失敗・陰性の結果）を先読みするだけで確定してしまう。
         音声を聞かなくても解けるので、引用が触れていない部分（記入の必須項目）に差し替えた。
         中身を丸ごと変えたため設問 id は新規採番する（no は 93 のまま）。 */
      { tag: '詳細', id: 'v6q93r', s: 'What does the speaker say every entry must include?',
        c: ['A reference to the relevant safety guidelines', 'Enough detail for someone else to repeat the work', 'The signature of a second person who was present', 'An estimate of how long each step took'],
        a: 1,
        e: 'Every entry in the lab notebook needs a date, your initials, and enough detail that someone else could repeat what you did without asking you a single question. と述べている。三つ目の要件が「他の人が一つも質問せずに同じことを再現できるだけの詳しさ」である。',
        w: ['安全指針への参照は求めていない。記入に必要なものとして挙げているのは日付・イニシャル・再現できるだけの詳しさの三つである。', '正解。', '求められているのは your initials（記入する本人のイニシャル）であって、立ち会った別の人の署名ではない。第三者の確認を取るようにとは述べていない。', '各手順の所要時間を書き留めるようにとは述べていない。'] },
      { tag: '意図', s: 'Why does the speaker say, "A blank page is not a null result"?',
        t: ['p3int'],
        c: ['To criticise the layout of the notebook', 'To request additional lab equipment', 'To insist that failed experiments must be documented too', 'To explain a statistical term used in reports'],
        a: 2,
        e: '直前で「失敗した実験を白紙のまま放置しがち」という問題点を指摘し、直後で「何をして何を見たか正確に書け。次の人がそれを知る必要がある」と続く。失敗した実験も記録すべきだという主張。',
        w: ['ノートの体裁への批判ではない。', '機器の追加要求ではない。', '正解。', '統計用語の説明ではない。'] },
    ],
  }),

  /* ── 95–97（図表）─────────────────────────────────── */
  /* 2026-08-18 の一括照合で、セットを丸ごと差し替えた。
     旧版（Kilronan Harbour の出航案内）は drills/listening2.js の u-p4g-01
     （Riverside Terminal — Departure Board）と次の四つが一致していた。
       (1) 4行の交通掲示板で、Destination 列に同じ行き先が2回だけ出る同じ表の形
       (2) 機械的な不具合による1便の運休という前提
       (3)「同じ行き先の2便のうち遅いほうが別の場所から出る」という同一の照合
       (4) 3問目の正解の命題「チケットはそのまま後の便に使える」＝
           drill の Take a later service without paying more（誤答の並びまで対応）
     結びの一文（All other sailings … / All other services are running to schedule.）まで同型で、
     ドリルを解いた記憶で3問目はそのまま解け、2問目も照合の手順が分かってしまう状態だった。
     差し替え版は表のどの列にも一意の値が無く（Monday・Thursday・Worktops・Door frames が
     それぞれ2回ずつ）、2つの図表問題は互いに別の行・別の組み合わせで解く。
     設問 id は新規採番する（no は 95–97 のまま）。 */
  talk({
    n: [95, 96, 97], lv: 5, k: 'announcement', t: ['graphic', 'p4type'],
    graphic: {
      t: 'table', title: 'Tarnbeck Joinery — Machine Servicing, Week 12',
      head: ['Machine', 'Used for', 'Service due'],
      rows: [
        ['Machine 1', 'Worktops', 'Monday'],
        ['Machine 2', 'Door frames', 'Thursday'],
        ['Machine 3', 'Door frames', 'Monday'],
        ['Machine 4', 'Worktops', 'Thursday'],
      ],
    },
    s: [
      { role: 'M-Br', text: 'Morning, everyone. Two changes to the servicing board before you start on the benches.' },
      { role: 'M-Br', text: 'The engineer who comes on Monday has only half a day this week, so he can take one machine rather than two. We\'ve asked him to do the door-frame machine and to leave the other Monday job until his next visit.' },
      { role: 'M-Br', text: 'Thursday is a different problem. The extraction ductwork above the worktop line is being replaced that morning, so the worktop machine booked for Thursday cannot be run at all. That service moves to the week after.' },
      { role: 'M-Br', text: 'One more thing, and it applies to both visits. The engineer wants each machine cleaned down and empty before he starts, so please do not leave a part-finished job in one overnight.' },
      { role: 'M-Br', text: 'I will have the board by the door updated by lunchtime, so check it before you plan tomorrow\'s work.' },
    ],
    ja: 'ターンベック建具工房の朝の連絡。今週の点検予定に2件の変更がある。第一に、月曜に来る技術者が今週は半日しか滞在できないため、点検できるのは2台ではなく1台となる。工房側は、月曜に予定していた2台のうちドアフレーム用の機械を点検してもらい、もう1台は次回に回すことにした。第二に、木曜の午前に天板ラインの上の集塵ダクトを交換するため、木曜に予定していた天板用の機械はそもそも運転できず、その点検は翌週に繰り延べになる。両日に共通する依頼として、技術者が各機械を清掃済み・空の状態で受け取りたいので、加工途中の材料を機械に残したまま退出しないよう求めている。入口の掲示板は昼までに更新される。',
    v: [['joinery', '建具工房、木工所'], ['worktop', '（台所などの）天板、ワークトップ'], ['extraction ductwork', '（切削くずを吸う）集塵ダクト'], ['clean down', '（機械を）清掃する']],
    q: [
      { tag: '図表', id: 'v6q95r', s: 'Look at the graphic. Which machine will the engineer service on Monday?',
        c: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4'],
        a: 2,
        e: '「月曜の技術者は半日しかいないので1台だけ。ドアフレーム用の機械のほうを点検してもらう」と述べている。表で月曜に予定されているのは Machine 1 と Machine 3 の2台で、そのうち Used for が Door frames なのは Machine 3。',
        w: ['月曜の予定だが、用途は Worktops。技術者に見てもらうのはドアフレーム用のほうだと述べている。', '用途は Door frames だが、予定は木曜であって月曜ではない。', '正解。月曜の予定で、かつドアフレーム用。', '月曜の予定でも、ドアフレーム用でもない。'] },
      { tag: '図表', id: 'v6q96r', s: 'Look at the graphic. Which machine\'s service has been put back to the following week?',
        c: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4'],
        a: 3,
        e: '「木曜の午前に天板ラインの集塵ダクトを交換するので、木曜に予定していた天板用の機械は運転できず、点検は翌週に回る」と述べている。表で木曜の予定は Machine 2 と Machine 4 の2台で、そのうち Used for が Worktops なのは Machine 4。',
        w: ['用途は Worktops だが、予定は月曜であって木曜ではない。', '木曜の予定だが、用途は Door frames。ダクト交換の影響を受けるのは天板ラインのほう。', '月曜の予定で、用途も Door frames。', '正解。木曜の予定で、かつ天板用。'] },
      { tag: '詳細', id: 'v6q97r', s: 'What does the speaker ask the listeners to do?',
        c: ['Order replacement parts in advance.', 'Avoid leaving unfinished work in a machine overnight.', 'Report any faults to the engineer directly.', 'Record the running hours of each machine.'],
        a: 1,
        e: '「技術者は各機械を清掃済みで空の状態にしておいてほしいと言っているので、加工途中の材料を機械に残したまま退出しないでほしい」と述べている。',
        w: ['部品の事前発注についての言及はない。', '正解。', '不具合を技術者に直接伝えるようにとは述べていない。連絡先として挙がっているのは入口の掲示板である。', '稼働時間の記録についての言及はない。'] },
    ],
  }),

  /* ── 98–100（図表）───────────────────────────────── */
  talk({
    n: [98, 99, 100], lv: 5, k: 'telephone message', t: ['graphic', 'p4type'],
    graphic: {
      t: 'table', title: 'Thistlewood Fulfilment — Packaging Stock (Tuesday Count)',
      head: ['Box Size', 'Used For', 'Current Stock'],
      rows: [
        ['Small', 'Accessories', '640'],
        ['Medium', 'Tote bags', '210'],
        ['Large', 'Framed prints', '620'],
        ['Extra-large', 'Rugs', '96'],
      ],
    },
    s: [
      { role: 'W-Br', text: 'Hi Mr. Bracewell, this is Sanjana Ilangovan at the Thistlewood fulfilment centre, calling about this morning\'s stock count.' },
      { role: 'W-Br', text: 'Everything else is fine except the boxes we use for mid-size orders — the ones that ship with the tote-bag range. We\'re already below the point where I\'d normally flag a reorder to the supplier.' },
      { role: 'W-Br', text: 'I checked the small and large sizes as well, and neither one is anywhere close to that line, so it really is just this one size.' },
      { role: 'W-Br', text: 'If the new delivery doesn\'t arrive here by Thursday afternoon, we\'ll have to hold back part of Friday\'s shipments, which I\'d really rather avoid with the promotion starting next week.' },
      { role: 'W-Br', text: 'Could you chase the supplier and confirm a delivery day? And please copy me on the reply this time — the last three e-mails about this went to my old address instead of the new one.' },
    ],
    ja: 'ティッスルウッド発送センターのサンジャナ・イランゴーヴァンからブレイスウェル氏への、今朝の在庫確認についての留守電。トートバッグ・シリーズの発送に使う中サイズの箱以外は問題なく、その箱だけは通常なら再発注のフラグを立てる水準をすでに下回っている。小サイズと大サイズも確認したが、どちらもその水準には程遠く、問題は中サイズだけだと述べる。新しい納品が木曜午後までに届かなければ、来週始まるプロモーションに間に合わせたいのに金曜出荷分の一部を保留せざるを得ないと懸念を示す。サプライヤーに連絡して納品日を確認してほしいと依頼し、今回は必ず自分にも返信を写しで送ってほしいと念押しする——この件の直近3通のメールが、新しいアドレスではなく旧アドレスに届いていたため。',
    v: [['fulfilment centre', '（通販の）発送センター'], ['flag a reorder', '再発注のタイミングだと示す'], ['hold back', '（出荷などを）保留する'], ['copy (someone) on', '（メールを）CCで送る']],
    q: [
      { tag: '図表', s: 'Look at the graphic. What is the current stock of the box size the speaker is concerned about?',
        c: ['640', '620', '210', '96'],
        a: 2,
        e: '「トートバッグ・シリーズの発送に使う中サイズの箱が、通常なら再発注のフラグを立てる水準をすでに下回っている」と述べており、図表で Used For が Tote bags の行（Box Size は Medium）の Current Stock を見ると 210。',
        w: ['640 は Small の在庫数。小サイズは「その水準には程遠い」と述べられており、話し手が懸念しているのは中サイズ。', '620 は Large の在庫数。大サイズも「その水準には程遠い」と述べられており、話し手が懸念しているのは中サイズ。', '正解。', '96 は Extra-large の在庫数。話し手は「それ以外は問題ない」と述べており、懸念しているのは中サイズのみ。'] },
      { tag: '詳細', s: 'What does the speaker say about the small and large box sizes?',
        c: ['They are also running low.', 'They have not been counted yet.', 'Neither is close to its reorder point.', 'They will be replaced by a new supplier.'],
        a: 2,
        e: '「小サイズと大サイズも確認したが、どちらもその水準には程遠い」と明言している。',
        w: ['在庫が少ないのは中サイズのみで、この2サイズについては水準には程遠いと述べている。', 'カウント済みだと明言している（確認したと述べている）。', '正解。', '仕入先変更の話はない。'] },
      { tag: '依頼', s: 'What request does the speaker make?',
        c: ['Contact the supplier about a delivery date', 'Approve a rush order at extra cost', 'Update the shipment schedule for Friday', 'Visit the warehouse to verify the count in person'],
        a: 0,
        e: '「サプライヤーに連絡して納品日を確認してほしい」と依頼している（あわせて、その返信を自分にも写しで送るよう念押ししている）。',
        w: ['正解。', '追加費用での特急発注の承認は求めていない。', '金曜出荷分の保留は懸念として述べているだけで、更新の依頼ではない。', '倉庫への訪問は求めていない。'] },
    ],
  }),
];
