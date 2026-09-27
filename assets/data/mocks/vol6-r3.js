/* =============================================================
   予想模試 Vol.6 — Part 7 単一文書 後半（No.165–175）
   ============================================================= */

const sp = (o) => ({
  id: `v6-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。 */
    id: x.qid || `v6q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7detail'], tag: x.tag,
    insertAt: x.insertAt, sentence: x.sentence,
  })),
});

export const R3 = [

  /* ── 165–168 オンラインチャット（4 名）───────────── */
  /* 2026-09-26 の先読み対策パイロット第2案（method2.md）でユニット全体を書き直した。
     stem・4択はメインが凍結し、正解はメインがくじで決定（Q165=A、Q166=B、Q167=C、Q168=C）。
     旧版（Grimsby の労災件数をめぐる社内チャット）の題材・人物名・言い回しは一切流用せず、
     本文を新規に書き下ろした。設問 id は全問新規採番（v6q165p〜v6q168p）。
     申し送り対応：Q165=A と Q168=B の相関は、施設への確認連絡をプルーエット氏の役割として
     ケタリング氏の行動とは切り離すことで閉じた。Q165=B（未確定ゲスト数）と Q168=D（ゲストリスト
     更新）はチャットで一切話題にせず、相関そのものが生じないようにした。
     2026-09-27 監査反映（review-r3.md）：15:03 のポータス氏の発言が意味を取りにくく、(C)（業者
     スタッフの到着時刻）の領域に踏み込んでいた（申し送り違反）ため、監査役の案どおり14:58・
     15:00・15:03 を差し替え、"like" を "insist on" に替えて「好み」の読みを消した。15:16 は
     「学部長の事務所に電話してみてもよい」という申し出を撤回する不自然な流れが (A) を誤って
     補強していたため、単なる確認の問いに差し替えた。15:26 は "I'll forward it to her directly"
     が選択肢 168(C) と逐語で重なり "it" の先行詞も遠かったため、"Prentice's e-mail" と明示する
     形に差し替えた（15:12は "a forty-pound charge" のまま。簡略化はしていない）。
     Q167 の why は、(A) を「学部長に月曜まで一切連絡が取れなくなる」という言い過ぎではなく
     「4時半が捕まえる期限であり、それを過ぎた電話は間に合わない」という期限の話に、(B)(D) を
     「言及なし」ではなく15:26以降の応答（電話でなくメール転送に切り替え、追いかける必要はない
     という15:27の追認）を根拠にする形に書き直した。
     2026-09-27 第2巡監査反映（polish-l2a-r3.md）：15:16（パラント氏「追加費用についても
     知らせるべきか」）と15:17（ケタリング氏の返答）の2行を削除した。15:16 が「電話をかける役」に
     パラント氏を位置づけてしまい、15:24 の "I'm free after half past four." を (A)（自分が後で
     かけ直す）にも読ませていたため。15:12 が学部長の承認の要をすでに述べているので、削っても
     失われる情報は無い（"the figure" は15:17にしか無く、本文から消えるため Q165 why[1] の
     「言及なし」はそのまま成り立つ）。Q167 の exp から15:17への言及を外した。 */
  sp({
    n: [165, 166, 167, 168], lv: 4, t: ['p7intent'],
    docs: [{
      label: 'Online chat discussion',
      body: [{ t: 'chat', lines: [
        { who: 'Marcus Kettering', time: '14:58', text: 'Bad news — we\'ve lost the Refectory for this year\'s symposium dinner. A conference has first claim on it for the 14th.' },
        { who: 'Ines Pruett', time: '15:00', text: 'Is there anywhere else that seats forty?' },
        { who: 'Marcus Kettering', time: '15:01', text: 'Maybe the Small Hall in the Old Library wing. I haven\'t checked whether it\'s free that evening.' },
        { who: 'Callum Portas', time: '15:03', text: 'Whatever we pick has to be free well before the dinner — Prentice\'s crew insist on a full two hours in the room before doors open. It\'s our first year with them, and I\'d like the evening to go smoothly.' },
        { who: 'Ines Pruett', time: '15:05', text: 'I\'ll ring the estates office about the Small Hall now, before their line shuts at four.' },
        { who: 'Marcus Kettering', time: '15:12', text: 'An e-mail\'s just come in from Prentice — moving rooms adds a forty-pound charge. That needs the dean\'s sign-off before it goes any further.' },
        { who: 'Callum Portas', time: '15:14', text: 'Can one of us catch her before half four? She\'s off-site after that until Monday.' },
        { who: 'Odalys Pallant', time: '15:24', text: 'I\'m free after half past four.' },
        { who: 'Marcus Kettering', time: '15:26', text: 'No matter. I\'ll pass Prentice\'s e-mail straight on to her and ask her to confirm whenever she\'s free — simpler than catching her by phone.' },
        { who: 'Callum Portas', time: '15:27', text: 'Good — no need to chase her down at all, then.' },
      ] }],
    }],
    q: [
      { tag: '概要', qid: 'v6q165p', s: 'What issue are the four colleagues trying to resolve?',
        c: ['Where to hold the dinner now the usual hall is taken.', 'What figure to enter for one laboratory\'s unconfirmed guests.',
            'When the caterer\'s staff should arrive to set up.', 'Whether the planned menu suits guests with food allergies.'],
        a: 0,
        e: '冒頭でケタリング氏が「今年のシンポジウム夕食のためにレクタリーを確保できず、14日は学会が優先権を持っている」と伝え、以降のやり取り全体が代わりの部屋探しと、それに伴う追加費用の承認という、会場変更に起因する話題で進む。',
        w: ['正解。',
            '確定していないゲスト数や、記入すべき数値についての言及はチャットのどこにも無い（言及なし）。',
            '"Whatever we pick has to be free well before the dinner — Prentice\'s crew insist on a full two hours in the room before doors open." とあるとおり、プレンティス側の所要時間はすでに分かっており、代わりの部屋を選ぶ際に満たすべき条件として触れられているだけで、到着時刻そのものを話し合って決めている場面ではない。',
            'メニューやアレルギーへの言及はチャットのどこにも無い（言及なし）。'] },
      { tag: '詳細', qid: 'v6q166p', s: 'What does Mr. Portas say about Prentice Catering Co.?',
        c: ['It has catered the institute\'s dinners for several years.', 'Its staff need two hours to set up a room.',
            'Orders confirmed a week early receive a discount.', 'A new manager has taken over its bookings desk.'],
        a: 1,
        e: 'ポータス氏の発言「プレンティスのスタッフは開場前に丸2時間の作業を要求している」が根拠。',
        w: ['ポータス氏自身が同じ発言で "It\'s our first year with them" と述べており、今年が初めての依頼だとしている。数年来担当してきたという内容と正面から矛盾する。',
            '正解。',
            '早期に確定した注文への割引についての言及はチャットのどこにも無い（言及なし）。',
            '予約窓口の担当者交代についての言及はチャットのどこにも無い（言及なし）。'] },
      { tag: '意図', t: ['p7intent'], qid: 'v6q167p',
        s: 'At 15:24, what does Ms. Pallant most likely mean when she writes, "I\'m free after half past four"?',
        c: ['She agrees to make the call later in the afternoon.', 'She would like a colleague to phone her later on.',
            'She thinks one of the others should handle the task.', 'She wants the four of them to meet in person.'],
        a: 2,
        e: 'ポータス氏が15:14で「4時半までに誰かが学部長を捕まえられるか、それを過ぎると彼女は月曜まで学外にいる」と期限を示している。パラント氏の15:24の発言「4時半を過ぎたら空く」は、期限である4時半より後にしか自分は動けないという意味であり、期限内に対応できるのはほかの誰かだという趣旨になる。',
        w: ['15:14で「4時半までに誰かが学部長を捕まえられるか」という形で期限が示されている。4時半は学部長を捕まえる期限であって、それを過ぎてから電話をかけても間に合わない。パラント氏が空くのはその期限を過ぎてからであり、遅い時間に自分が電話をかけると申し出た内容とは相容れない。',
            '15:26でケタリング氏が「電話で捕まえるより、プレンティスのメールをそのまま転送する方が簡単だ」と方針を切り替えており、パラント氏や他の同僚が学部長に電話をかけ直すという流れにはなっていない。話題は学部長への連絡方法であって、パラント氏自身にほかの誰かが電話をかけ直すことを望んでいるという内容ではない。',
            '正解。',
            '15:26でケタリング氏はメールの転送で対応する方針に決め、15:27でポータス氏も「追いかける必要はもうない」と応じている。4人が対面する場を持つという流れにはなっていない。'] },
      { tag: '次の行動', qid: 'v6q168p', s: 'What will Mr. Kettering do?',
        c: ['Send the draft seating plan to the others.', 'Check the room booking with the facilities office.',
            'Forward the caterer\'s latest e-mail to the dean.', 'Update the guest list on the shared drive.'],
        a: 2,
        e: 'ケタリング氏が15:26で「構わない、プレンティスのメールをそのまま彼女に回し、手が空いたときに確認してもらう」と述べている。',
        w: ['座席表についての言及はチャットのどこにも無い（言及なし）。',
            '"I\'ll ring the estates office about the Small Hall now, before their line shuts at four." とあるとおり、施設担当への確認はプルーエット氏がすでに引き受けており、ケタリング氏の役割ではない。',
            '正解。',
            'ゲストリストについての言及はチャットのどこにも無い（言及なし）。'] },
    ],
  }),

  /* ── 169–171 手紙 ─────────────────────────────────── */
  /* 2026-09-26 の先読み対策パイロット第2案（method2.md）でユニット全体を書き直した。
     stem・4択はメインが凍結し、正解はメインがくじで決定（Q169=A、Q170=B、Q171=C）。
     旧版（2026-08-18 の全面差し替え版と、直前の 2026-09-26 第1案〈誤答のみ差し替え〉）の
     ロット番号・人物名・手数料設定・言い回しは一切流用せず、本文を新規に書き下ろした。
     設問 id は全問新規採番（v6q169p / v6q170p / v6q171p）。tag は凍結案の [目的][詳細][推測]
     をそのまま使用。
     2026-09-26 監査反映：第5・第6段落と、231番の入札を述べる文を書き直した。
     旧稿の第6段落に "our invoice for commission" があり、stem の "the fee mentioned in
     the letter" が commission（出品手数料）とも読めてしまっていた（致命的）。第6段落から
     commission への言及を削り、"a full statement of account" とだけ述べる形に改めた。
     No.171 の正解を支える文も "we will set the charge aside"（据え置く、とも読める）から
     "we normally excuse him from the charge"（免除する、と一義的に読める）に差し替え、
     exp・why の「据え置く」の訳も「免除する」に直した。
     231番の入札を述べる文も "sold to a single commission bid" から
     "drew just one bid — a commission bid …" に差し替えた。前者は「委任入札1件で落札」を
     述べるだけで、会場の入札が留保価格の手前で止まっていた可能性を排除しきれず、
     No.170 A（複数の入札者）を閉じきれていなかった。
     現行版は次の方針で閉じている:
     ・169B（不落札品の扱いを尋ねる）／169D（条件確認の依頼）は、"Both found buyers" という
       肯定の事実と、手紙のどこにも確認・返信を求める文が無いことで閉じ、打ち消し専用の文は
       置いていない。169C（手数料の説明が目的）は、延滞引き取り料が「引き取りが遅れた品にだけ」
       かかる条件付きの料金であって "each item" と呼べるものではないこと、かつミセス・オズグッドの
       精算額を安心させるための付随的な一文にすぎないことの両方で閉じる。
     ・170A（複数入札者）は「入札は一件しか無かった」という肯定の事実で閉じ、170C（次の売立てに
       入る）は「すでに買い手に渡り引き取りを待っている」という肯定の事実で閉じる。170D（要修理）
       は本文に修理・状態への言及が無いことで閉じる（"What does the writer say about Lot 231?"
       型の設問として、述べられていない事項は述べられていないことをもって偽とした）。
     ・171（推測）は、料金を「買い手が実在し、かつ引き取りを遅らせた場合にのみ生じる」肯定の条件で
       立てて171A（売れても売れなくても生じる）を閉じ、「定額」という肯定の性質で171D（複数回の
       出品で増額）を閉じた。171B（精算額から差し引かれる）だけは
       "does not affect the amount you are due" という明示的な否定文1本で閉じている
       （ユニット全体の明示的な否定・訂正はこの1本のみで、上限の2本以内）。
     he/him（総称の男性代名詞）は使っていない。本文中の he/him はいずれも Lot 231 の買い手という
     特定の人物のみを指す。 */
  sp({
    n: [169, 170, 171], lv: 5,
    docs: [{
      label: 'Letter',
      head: 'Marrowfield Rooms — Client Accounts\n6 August',
      body: [
        'Dear Mrs. Osgood,',
        'I am writing to let you know how the two pieces you sent us in June fared at the sale on 3 August. Both found buyers on the day, and the saleroom was livelier than we had expected for a summer date.',
        'Lot 231, the walnut-cased carriage clock, drew just one bid — a commission bid left with us ahead of the sale — and went for the reserve of $340. The buyer has arranged to collect it later this month, and for now it is being kept in our holding room; your remittance for this lot will follow once he has done so.',
        'Lot 258, the set of six oak dining chairs, drew far more attention: three bidders pursued it well past our top estimate of $650, and it eventually sold for $875 to a bidder in the room.',
        'Under our standard terms, a buyer who leaves a lot uncollected for more than a fortnight pays a late-collection charge of $15 a week. The charge is billed to the buyer separately, at a flat rate, and does not affect the amount you are due. If the buyer of Lot 231 writes to us before the fortnight is up to ask for more time, we normally excuse him from the charge, in which case your remittance for this lot may reach you a little later.',
        'A full statement of account will follow by post within the week. Thank you again for choosing to consign with us.',
        'Yours sincerely,\nJulius Corbett\nClient Accounts, Marrowfield Rooms',
      ],
    }],
    q: [
      { tag: '目的', qid: 'v6q169p', s: 'Why did the writer write to the recipient?',
        c: ['To report the outcome of the items sold',
            'To ask how to handle an unsold item',
            'To explain a fee charged on each item',
            'To request that certain sale conditions be confirmed'],
        a: 0,
        e: '第2段落で「6月に送った2点が8月3日の売立てでどうなったか知らせる」という用件が示され、第3段落で231番、第4段落で258番、それぞれの結果が報告される。2点とも買い手がついており、指示や条件確認を求める記述は無い。',
        w: ['正解。',
            '第2段落に "Both found buyers on the day" とあり、2点とも即日買い手がついたと明記されている。不落札の品は存在しないので、その扱いを尋ねる目的はありえない。',
            '手数料に触れているのは第5段落だけで、そこで説明されているのは「引き取りが2週間を超えて遅れた品にだけかかる延滞料」であり、売れた品すべてに一律にかかる "each item" の手数料ではない。しかも "does not affect the amount you are due" とあるとおり、この手数料はミセス・オズグッドの精算額にも影響しない、231番の買い手側の負担についての付随的な説明にすぎない。手紙の主眼はあくまで第2〜4段落の結果報告である。',
            '手紙のどこにも売立て条件の確認を求める記述はない。第2段落は結果を知らせるとだけ述べており、返信や確認を求める文はどこにもない。'] },
      { tag: '詳細', qid: 'v6q170p', s: 'What does the writer say about Lot 231?',
        c: ['It attracted interest from more than one bidder.',
            'It has been placed in the storage area.',
            'It will be entered in the next sale.',
            'It needed repair before it could be sold.'],
        a: 1,
        e: '第3段落に「委任入札一件のほかには入札が無く、そのまま留保価格の340ドルで落札された」「買い手が今月中に引き取る予定なので、現在は当方の保管室に置いている」とある。231番は保管室に置かれている、が正しい。',
        w: ['第3段落は "drew just one bid — a commission bid left with us ahead of the sale" と述べており、事前に預けられた一件の委任入札のほかには入札が無かったと明記している。複数の入札者が関心を示したとするこの記述とは両立しない。',
            '正解。',
            '第3段落は231番についてすでに買い手が決まり引き取りを待っている状態だと述べている（"The buyer has arranged to collect it later this month" "your remittance for this lot will follow once he has done so"）。落札済みで買い手の引き取りを待つ品が次の売立てに入るという内容と両立しない。',
            '第3段落が231番について述べているのは落札の経緯と保管の状況だけで、修理や状態については一切触れていない。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v6q171p', s: 'What is indicated about the fee mentioned in the letter?',
        c: ['It applies regardless of whether an item sells.',
            'It is deducted from the final payment.',
            'It can be waived upon written request.',
            'It increases for items entered more than once.'],
        a: 2,
        e: '第5段落は「引き取らずに2週間を超えて放置した買い手には週15ドルの延滞引き取り料がかかる」「231番の買い手が期限前に書面で申し出れば、通常はその料金を免除する」と述べている。書面で申し出れば料金が免除される、ということである。',
        w: ['第5段落は "a buyer who leaves a lot uncollected for more than a fortnight pays a late-collection charge" と述べており、この料金は買い手が実在し、かつ引き取りを遅らせている場合にのみ生じる。品が売れなかった場合には買い手自体が存在せず、生じようがない。落札の有無にかかわらず生じるという内容とは相容れない。',
            '第5段落は "The charge is billed to the buyer separately, at a flat rate, and does not affect the amount you are due." と述べており、この料金がミセス・オズグッドの受け取る精算額に影響しないと明記している。最終的な支払いから差し引かれるという内容と正面から矛盾する。',
            '正解。',
            '第5段落は "billed to the buyer separately, at a flat rate" と述べており、料金は定額であると明記している。定額である以上、複数回の出品によって増額されるという内容とは相容れない。'] },
    ],
  }),

  /* ── 172–175 報告書（文挿入あり）───────────────── */
  /* 2026-09-26 の先読み対策パイロット第2案（method2.md）でユニット全体を書き直した。
     stem・4択・挿入文はメインが凍結し、正解はメインがくじで決定
     （Q172=B、Q173=B、Q174=位置[2]、Q175=A）。旧版（Fenmore Retail Group の返品キオスク
     報告書）の題材・数値・言い換えは一切流用せず、本文を新規に書き下ろした。
     設問 id は全問新規採番（v6q172p〜v6q175p）。
     申し送り対応：「新しい設計」（軽量化したごみ箱の設計）は収集担当の作業負担軽減という、
     Q173 の誤答3本（屋外スペース不足・野生動物・参加開始の遅れ）のいずれとも無関係な理由で
     導入し、誤答への対策として読めないようにした。満足度の記述は「測り方」の文と「結果」の文を
     1文ずつに絞り、くじで決まった1本（食品廃棄物の量との無関係性）以外の結果は書いていない。
     2026-09-27 監査反映（review-r3.md）：No.173 致命的（第4段落の "only once every three
     weeks rather than fortnightly" が、正解 (B)「3週に1回飛ばす（＝残り2週は来る）」と意味が
     逆で、しかも両地区とも隔週収集なので周期そのものが噛み合わなかった）。監査役の案どおり、
     第2段落の "as part of the borough's standard phase-in process" を削り、第3段落の
     "fortnightly" を "weekly" に改め、第4段落を書き直して「3週に1回だけ別のルートに回されて
     この地区を丸ごと素通りする」という、(B) と向きが一致する周期に直した。誤答を打ち消すためだけ
     だった3文（キルクストールとの地勢の類似／両地区共通のロック付きクリップ／同日開始）は削り、
     (A)(C) は「言及なし」、(D) は第1段落の「両地区とも1月12日に開始」で閉じる形にした。
     Q174 の解説は、[3][4] の排除理由を「別の話題」から構造上の理由（[3] は直前の "the new day"
     の先行詞〈moved … to Thursdays〉から切り離される／[4] は "That leaves" が要る直前の起点が
     無い）に書き直し、日数の一致（7月9日→8月18日＝40日＜6週）を位置の決め手として使う誤りを
     正し、the second phase への言及が「直前の文」ではなく「2文前」であることも直した。
     Q172 の why はキルクストールの周期表記を weekly に合わせ、C の否定材料から Q173 と無関係な
     "no particular difficulty in keeping to the new day" の引用を外した。
     2026-09-27 第2巡監査反映（polish-l2a-r3.md）：Q173 why[0]・why[2] の「収集ルートの見直し」
     という言い方が本文の実際の原因（3週に1度ほかのルートに回されて丸ごと素通りする）と厳密には
     ずれていたため、本文どおりの言い方に直した。Q174 の why[2] が第3段落の曜日変更を「隔週収集」
     と誤って書いており（第3段落は既に weekly に直っていたのに、この why だけ直し漏れていた）、
     exp とあわせて weekly の記述に揃え、[3] を落とす理由も「4月から8月18日までは4か月以上あり
     under six weeks に合わない」という日数の根拠に書き直した。exp も同じ根拠で書き直した。
     why[3] の「カデー」を正しい表記「キャディー」に直した。第4段落末尾の満足度の一文
     （"In both wards, …"）を独立した第5段落に分け、"[[4]]" の位置は第4段落の末尾のまま変えていない
     （直前の一文が変わらないので [4] を落とす理由・[2] を選ぶ理由のいずれにも影響しない）。
     "the difference traces to collection" は "the difference can be traced to collection" に
     直した（内容は変えていない）。 */
  sp({
    n: [172, 173, 174, 175], lv: 4, t: ['p7ins'],
    docs: [{
      label: 'Report',
      title: 'Composting Pilot: Progress Report',
      head: 'Prescott District Council — Waste & Recycling Service, 9 July',
      body: [
        'Prescott District Council began a kerbside composting pilot in the Kirkstall and Portobello Green wards on 12 January, aiming to cut the food waste sent to landfill and to test whether a full borough rollout would be worthwhile. — [[1]] — Uptake and day-to-day running have differed sharply between the two wards.',
        'The pilot\'s first phase concludes on 18 August, when a wider second phase begins in three further wards. Ahead of that, officers have also started trialling a lighter bin design intended to ease handling for the collection crews. — [[2]] — Full findings from both wards are set out below.',
        'In Kirkstall, around two in five eligible households now take part, and the weekly collection was moved from Tuesdays to Thursdays in April, after the round was combined with the garden-waste collection to save a vehicle. — [[3]] — Officers there report no particular difficulty in keeping to the new day.',
        'Participation in Portobello Green has stayed lower, and the difference can be traced to collection. Since April, the lorry that serves the ward has been called away to cover another round one week in three, and in those weeks it leaves Portobello Green out altogether. Several residents have told officers that a caddy left full for a fortnight puts them off using it. — [[4]]',
        'In both wards, satisfaction is measured through a short card left with each collection; ratings so far show no link to how much food waste a household says it produces.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v6q172p', s: 'What is reported about the composting pilot in Kirkstall?',
        c: ['Over half of eligible households there now take part.', 'Its collection day changed partway through the pilot.',
            'Staff there have removed several bins after resident complaints.', 'Households there receive a free supply of caddy liners.'],
        a: 1,
        e: '第3段落に「キルクストールでは対象世帯のおよそ5分の2が参加しており、4月に毎週収集の曜日が火曜日から木曜日に変更された」とある。庭ごみ収集との統合による曜日変更であり、これが正しい。',
        w: ['第3段落は "around two in five eligible households now take part" と述べており、参加しているのは対象世帯のおよそ5分の2で、半数を超えてはいない。',
            '正解。',
            '住民からの苦情を受けてごみ箱を撤去したという記述はどこにも無い（言及なし）。',
            '生ごみ入れの内袋を無償配布しているという記述はどこにも無い（言及なし）。'] },
      { tag: '詳細', qid: 'v6q173p', s: 'According to the report, why has participation in Portobello Green been low?',
        c: ['Many residents there lack outdoor space for a bin.', 'The collection truck skips that neighbourhood every third week.',
            'Wildlife frequently gets into bins that are left unlocked.', 'It joined the pilot several months later than Kirkstall did.'],
        a: 1,
        e: '第4段落に「4月以降、この地区を担当する収集車は3週に1度、別の収集ルートに回されて、その週はポートベロー・グリーンを丸ごと素通りする」とあり、これが参加率低迷の原因として挙げられている。',
        w: ['報告書のどこにも住民の屋外スペースの不足についての記述は無い（言及なし）。第4段落が参加率低迷の原因として挙げているのは収集車が3週に1度ほかのルートに回され、その週は収集されないことだけである。',
            '正解。',
            '施錠の有無や野生動物についての記述はどこにも無い（言及なし）。第4段落が参加率低迷の原因として挙げているのは収集車が3週に1度ほかのルートに回され、その週は収集されないことだけである。',
            '第1段落は "Prescott District Council began a kerbside composting pilot in the Kirkstall and Portobello Green wards on 12 January" と述べており、両地区とも1月12日に同時に試行を始めたと明記している。数か月遅れて参加したという内容と正面から矛盾する。'] },
      { tag: '位置選択', qid: 'v6q174p', t: ['p7ins'], insertAt: 2,
        sentence: 'That leaves under six weeks to test the new design before the second phase begins.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"That leaves under six weeks to test the new design before the second phase begins."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 1,
        e: '文頭の裸の That は直前の文を受け、そこから第2段階までの残り期間を述べる。[2] の直前は『第2段階（8月18日開始）に先立ち、軽量化したごみ箱の試験を始めた』で、報告書の日付7月9日から8月18日までは40日＝6週間未満なので挿入文と合う。the new design は直前の a lighter bin design を、the second phase は2文前の a wider second phase を受ける。[1] では2つとも未登場。[3] の直前は4月の曜日変更で、そこからは4か月以上ある。[4] の直前は住民の声で、残り期間を数える起点にならない。',
        w: ['[1] の時点では the new design（軽量化したごみ箱の試験）も the second phase（8月18日開始）もまだ本文に一度も登場しておらず、指示対象が無い。',
            '正解。2文前で第2段階の開始日「8月18日」が、直前の文で軽量化したごみ箱の試験が示されている。報告書の日付「7月9日」から8月18日までは40日で、6週間に満たない。',
            '[3] の直前は『毎週の収集の曜日を4月に火曜から木曜へ移した』という文である。裸の That はこの4月の変更を受けることになるが、4月から8月18日までは4か月以上あり、"under six weeks" と合わない。',
            '[4] の直前は「キャディーを2週間放置されると使う気をなくす住民がいる」という一文で終わっており、"That leaves" が受けるべき期限・起点になる語がその直前に無い。裸の That は直前の文に明確な起点を要求するため、ここには置けない。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v6q175p', s: 'What is indicated about resident satisfaction with the composting pilot?',
        c: ['It is unrelated to a household\'s amount of food waste.', 'It runs higher among households that include young children.',
            'It has risen steadily since the pilot\'s first month.', 'It comes from a survey sent out each quarter.'],
        a: 0,
        e: '最終段落に「両地区とも、満足度は各回収時に手渡す簡単なカードで測定されており、ここまでの評価は各世帯が申告する生ごみの量との関連を示していない」とある。',
        w: ['正解。',
            '子どものいる世帯で満足度が高いという記述はどこにも無い（言及なし）。',
            '満足度が試行開始月から着実に上昇してきたという記述はどこにも無い（言及なし）。',
            '最終段落は "In both wards, satisfaction is measured through a short card left with each collection" と述べており、四半期ごとのアンケートではなく、収集のたびに手渡すカードで測定されている。'] },
    ],
  }),
];
