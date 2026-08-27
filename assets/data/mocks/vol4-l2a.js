/* =============================================================
   予想模試 Vol.4 — Part 3 前半（No.32–52）
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

export const L2A = [

  /* ── 32–34（3名）─────────────────────────────────── */
  set({
    n: [32, 33, 34], lv: 5, t: ['p3int'], k: 'conversation with three speakers',
    s: [
      { role: 'W-Am', text: 'Julian, Wei — quick check before the launch e-mail goes out. Has legal signed off on the discount wording?' },
      { role: 'M-Br', text: 'Not yet. I sent it Tuesday and haven\'t heard back.' },
      { role: 'M-Cn', text: 'I saw an e-mail from them this morning about a different campaign, so they\'re clearly working today.' },
      { role: 'W-Am', text: 'Then maybe ours just got buried. Can one of you call rather than wait for a reply?' },
      { role: 'M-Br', text: 'I can call, but I don\'t want to seem like I\'m jumping the queue.' },
      { role: 'M-Cn', text: 'At this point, jumping the queue is the point. We launch tomorrow.' },
      { role: 'W-Am', text: 'Agreed. Julian, call now. If they can\'t turn it around today, we push the launch to Thursday.' },
      { role: 'M-Br', text: 'Understood. I\'ll report back within the hour.' },
    ],
    ja: '3 名がキャンペーン開始前の最終確認をしている。割引表示の文言について法務の承認がまだ届いていないと判明。今朝、法務が別件のメールを送っていたことから稼働中とわかり、電話で直接確認するよう提案される。男性は順番を飛ばすようで気が引けると述べるが、もう一人の男性が「今はそれが狙いだ、明日発表だから」と後押しし、女性も同意。今日中に対応できなければ発表を木曜に延期することになった。',
    v: [['sign off on', '承認する'], ['jump the queue', '順番を飛ばす'], ['turn around', '対応する、処理する']],
    q: [
      { tag: '意図', t: ['p3int'], s: 'What does the man mean when he says, "At this point, jumping the queue is the point"?',
        c: ['He believes the situation justifies asking for priority treatment.', 'He is unsure whether legal received the e-mail.',
            'He wants to cancel the phone call.', 'He thinks Julian should wait for a reply as usual.'],
        a: 0,
        e: '通常の順番を待つのではなく、緊急性を理由に優先対応を求めるべきだという趣旨の発言。',
        w: ['正解。', '受信の有無への疑問ではない。', '電話を止める提案ではない。', '通常通り待つべきとは逆の主張。'] },
      { tag: '詳細', s: 'What is Julian concerned about?',
        c: ['Being seen as impatient with another department', 'Missing the launch deadline entirely',
            'The cost of the discount', 'A technical error in the e-mail'],
        a: 0,
        e: '「順番を飛ばすように見えるのは気が引ける」と述べている。',
        w: ['正解。', '締め切りを完全に逃す心配ではない。', '費用の話はない。', '技術的な誤りには触れていない。'] },
      { tag: '次の行動', s: 'What will happen if legal cannot respond today?',
        c: ['The launch will move to Thursday.', 'Wei will contact legal instead.',
            'The discount will be removed.', 'The launch will be cancelled.'],
        a: 0,
        e: '「今日対応できなければ木曜に延期する」と女性が明言している。',
        w: ['正解。', 'ジュリアンが電話することになっている。', '割引の撤回には触れていない。', '中止の話はない。'] },
    ],
  }),

  /* ── 35–37 ─────────────────────────────────────────── */
  set({
    n: [35, 36, 37], lv: 4,
    s: [
      { role: 'W-Br', text: 'The move to the fourth floor is confirmed for the fourteenth. IT wants two days\' notice to disconnect the servers.' },
      { role: 'M-Am', text: 'Two days — so they need to start on the twelfth?' },
      { role: 'W-Br', text: 'Yes, and they\'ve asked that nobody use the shared printer after Wednesday morning, since it\'s on the same circuit.' },
      { role: 'M-Am', text: 'That\'s going to annoy the finance team — they print month-end reports Wednesday afternoon.' },
      { role: 'W-Br', text: 'I did flag that. IT said Thursday morning is fine for them if finance can hold off.' },
      { role: 'M-Am', text: 'I\'ll let finance know today so they can plan around it.' },
      { role: 'W-Br', text: 'Thanks. Also, can you confirm which boxes are fragile before the movers arrive Friday?' },
      { role: 'M-Am', text: 'I\'ll walk the floor this afternoon and label anything breakable.' },
    ],
    ja: '4 階への移転が 14 日に確定し、IT はサーバー停止のため 2 日前の告知を求めている。共有プリンターは水曜午前以降、同じ回路にあるため使用できなくなると伝えられ、経理部の月末印刷と重なると男性が懸念。女性はすでに IT に伝えており、経理が待てれば木曜午前でよいとの回答を得ている。男性は今日中に経理へ知らせると約束し、さらに金曜の引っ越し業者到着前に壊れやすい箱を確認して印をつけることも引き受けた。',
    v: [['disconnect', '切断する'], ['circuit', '回路'], ['fragile', '壊れやすい']],
    q: [
      { tag: '詳細', s: 'When does IT need to begin disconnecting the servers?',
        c: ['The fifteenth', 'The twelfth', 'The fourteenth', 'The thirteenth'],
        a: 1,
        e: '「2 日前の告知」＝14 日の 2 日前である 12 日から作業が必要だと述べている。',
        w: ['記載なし。', '正解。', '移転当日。', '本文に記載なし。'] },
      { tag: '詳細', s: 'What problem does the man raise?',
        c: ['A conflict with the finance team\'s printing schedule', 'A shortage of moving boxes',
            'A delay in the elevator booking', 'A missing floor plan'],
        a: 0,
        e: '共有プリンターの停止時期が経理部の月末印刷と重なることを指摘している。',
        w: ['正解。', '箱の不足には触れていない。', 'エレベーターの話はない。', 'フロア図の話もない。'] },
      { tag: '次の行動', s: 'What will the man do this afternoon?',
        c: ['Contact the IT department', 'Print the month-end reports',
            'Label fragile boxes', 'Reserve the elevator'],
        a: 2,
        e: '「今日の午後、フロアを回って壊れやすい物に印をつける」と述べている。',
        w: ['IT への連絡は女性がすでに済ませている。', '印刷は経理部の作業。', '正解。', 'エレベーターの話はない。'] },
    ],
  }),

  /* ── 38–40（図表）───────────────────────────────── */
  /* 本番は図表セットでも Look at the graphic. の設問は 1 セットに 1 問のみ。
     2 問目（No.39）を「音声だけで解ける通常設問」に差し替えたため、set() ヘルパー
     （id を no から自動生成する）を使わず直接オブジェクトを記述する。中身を丸ごと
     差し替えたので id は使い回さず v4q39r として新規採番する（no は模試の通し番号
     として 39 を維持）。No.40 は内容・id とも変更していない。
     2026-08-25 追記: No.38 自体に別の欠陥があった。選択肢 ['£8.90','£15.00',
     '£11.50','£12.40'] のうち正解 £15.00（Zone C の翌日便）が選択肢中の最大値で、
     「速達は一番高いはず」という発想だけで、音声も表も見ずに当たった。表の
     Zone D（remote）の Standard 料金を £12.40 → £16.80 に組み替え、選択肢の
     同じ枠（Zone D の Standard）も £16.80 に合わせて、正解 £15.00 が選択肢中の
     最大でも最小でもない値（£8.90 < £11.50 < £15.00 < £16.80）になるように
     した。Zone D の Next-day が「Not available」であること（No.40 の根拠）は
     変えていない。遠い区分ほど高いという料金体系（Standard: A<B<C<D）も維持。
     表・選択肢を実質変更したため id を v4q38 → v4q38b に新規採番。No.40
     の内容・id は変更していない。
     2026-08-25 追記2: No.39（v4q39r、「Aldergate はどのゾーンか」）がオブザーバーの
     実プレイで発覚——No.38 の解答過程（Aldergate → Zone C の特定）とまったく同じ
     事実を問うており、Zone C を聞き逃すと No.38・No.39 の両方を落とす「鎖」に
     なっていた。No.39 を、No.38 の解答過程（ゾーン名・金額・署名要件）にも
     No.40 の根拠（Zone D に翌日便が無いこと）にも触れない独立した事実——本文
     後半の高地行き荷物についての「通常便の所要日数（already two days）」——を
     問う設問に差し替え、id を v4q39r → v4q39c に新規採番した。
     2026-08-25 追記3: レビュー役の監査で残存2件が判明。(1) No.39 の stem
     `How long does standard delivery to the highlands normally take?` の
     `standard` が、表の Zone D（remote）の Standard 料金 £16.80 と結び付き、
     「£16.80 は高地向け通常便の料金＝Aldergate の答えではない」という消去材料を
     No.38 に与えていた（25%→33% への劣化）。`standard` を削り
     `How long does delivery to the highlands normally take?` とした。
     (2) No.39 の誤答 `One week` が宅配便として非現実的で常識だけで消え、かつ
     No.40 の誤答 `To prevent them from expecting next-day delivery` の
     `next-day delivery` が No.39 の `One day` を先読みだけで消す消去材料に
     なっており、あわせて実質2択（50%）になっていた。`One week` を
     `Four days` に差し替えて非現実的な選択肢を無くし（One day/Two days/
     Three days/Four days の昇順4択。いずれも音声の "that's already two
     days" とだけ矛盾する現実的な値）、No.40 は正解・誤答とも `next-day` や
     `delivery` という具体的な語を含まない表現に書き換えて先読みでの消去材料を
     断った（命題「高地行きは翌日便が使えないと伝えるため」は変えていない）。
     stem・選択肢を実質変更したため No.39 の id を v4q39c → v4q39d、No.40 の
     id を v4q40 → v4q40b に新規採番した。あわせて No.40 の誤答側の語数を
     伸ばし、正解が単独最長にならないようにした。 */
  {
    id: 'v4-p3-38', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    graphic: {
      t: 'table', title: 'Bramwell Courier — Regional Rates (per parcel, up to 5 kg)',
      head: ['Zone', 'Standard', 'Next-day', 'Notes'],
      rows: [
        ['Zone A (local)', '£4.50', '£8.00', 'Includes tracking'],
        ['Zone B (regional)', '£6.20', '£11.50', 'Includes tracking'],
        ['Zone C (national)', '£8.90', '£15.00', 'Signature required'],
        ['Zone D (remote)', '£16.80', 'Not available', 'Signature required'],
      ],
    },
    script: [
      { role: 'M-Au', text: 'The Aldergate order needs to arrive by tomorrow morning. Where does that postcode fall?' },
      { role: 'W-Cn', text: 'Let me check... that\'s Zone C. National, not regional.' },
      { role: 'M-Au', text: 'And next-day is available for Zone C?' },
      { role: 'W-Cn', text: 'Yes, but it needs a signature, so someone has to be at the address.' },
      { role: 'M-Au', text: 'The client works from home, so that\'s fine. What about the parcel after that, the one going up to the highlands?' },
      { role: 'W-Cn', text: 'That\'s Zone D. No next-day option there at all — standard only, and that\'s already two days.' },
      { role: 'M-Au', text: 'Then we\'d better tell them today, before they assume next-day like the first one.' },
    ],
    ja: '男性がオールダーゲート宛の荷物を翌朝までに届けたいと相談。郵便番号を調べると全国区の Zone C にあたる。翌日配送は可能だが署名が必要で、宛先の顧客は在宅勤務なので問題ないと判断。次に高地宛の荷物については Zone D にあたり、翌日配送の選択肢自体がなく通常便のみで、すでに 2 日かかる。1 件目のように翌日配送を期待されないよう、今日のうちに顧客へ伝えることにした。',
    vocab: [['postcode', '郵便番号'], ['signature', '署名'], ['highlands', '高地']],
    questions: [
      {
        id: 'v4q38b', no: 38, tag: '図表', topics: ['graphic'],
        stem: 'Look at the graphic. What will the delivery cost for the Aldergate order?',
        choices: ['£15.00', '£8.90', '£11.50', '£16.80'],
        answer: 0,
        exp: 'Zone C（全国区）の翌日配送は £15.00。翌朝必着という要件から翌日配送を選ぶ。選択肢中の最大値は £16.80（Zone D の通常便）であり、金額の大小では選べない。',
        why: ['正解。', 'Zone C の通常便であり、翌朝必着という要件には合わない。', 'Zone B の翌日便であり、Aldergate の区分（Zone C）ではない。', 'Zone D の通常便であり、Aldergate とは無関係の区分の金額。'],
      },
      {
        // 音声だけで解ける設問。No.38 の解答過程（Aldergate→Zone C の特定、料金、
        // 署名要件）にも No.40 の根拠（Zone D に翌日便が無いこと）にも触れない、
        // 本文後半の高地行き荷物についての独立した事実（通常便の所要日数）を問う。
        id: 'v4q39d', no: 39, tag: '詳細', topics: ['p3detail'],
        stem: 'How long does delivery to the highlands normally take?',
        choices: ['One day', 'Two days', 'Three days', 'Four days'],
        answer: 1,
        exp: '女性は高地行きの荷物について「翌日配送の選択肢が全く無く、標準の便のみで、それだけで既に2日かかる」と述べている（"No next-day option there at all — standard only, and that\'s already two days."）。翌日配送そのものが無いと明言されているため1日では届かず、"already two days" と実数が明言されているため3日・4日でもない。',
        why: [
          '高地行きの区分には「翌日配送の選択肢が全く無い」と明言されており、1日で届く手段は存在しない。',
          '正解。"that\'s already two days" と明言されている。',
          '"that\'s already two days" と実数が明言されており、3日という言及はない。',
          '"that\'s already two days" と実数が明言されており、4日という言及もない。',
        ],
      },
      {
        id: 'v4q40b', no: 40, tag: '推測', topics: ['p7inf'],
        stem: 'Why does the man want the client told today about the highlands parcel?',
        choices: ['To correct the client\'s assumption about speed', 'To offer them a discount on the order',
                   'To cancel the order at their request', 'To request a different delivery address'],
        answer: 0,
        exp: 'Zone D には翌日配送の選択肢がなく標準の便のみのため、1 件目（Aldergate 向け）のように早く届くと誤解されないよう、その思い込みを正しておくべきだという趣旨。具体的な配送日数には触れず、あくまで速さについての思い込みを正すという目的だけを述べている。',
        why: ['正解。', '値引きの話はない。', '注文の取り消しではない。', '住所変更の依頼はない。'],
      },
    ],
  },

  /* ── 41–43（3名）─────────────────────────────────── */
  set({
    n: [41, 42, 43], lv: 5, t: ['p3int'], k: 'conversation with three speakers',
    s: [
      { role: 'W-Br', text: 'I still can\'t log into the shared drive. I\'ve reset my password twice this morning.' },
      { role: 'M-Am', text: 'Let me check the account... it looks like it\'s locked, not just expired. That usually means too many failed attempts.' },
      { role: 'W-Au', text: 'Priya, did you try logging in from your phone as well as your laptop?' },
      { role: 'W-Br', text: 'Yes, both, within a few minutes of each other.' },
      { role: 'M-Am', text: 'That would do it — the system counts attempts across devices, and five failures in ten minutes locks the account for an hour.' },
      { role: 'W-Au', text: 'So this isn\'t really about the password at all.' },
      { role: 'M-Am', text: 'No. I can unlock it manually now rather than have her wait the hour.' },
      { role: 'W-Br', text: 'That would help — I have a call in twenty minutes that needs those files.' },
    ],
    ja: 'プリヤが共有ドライブにログインできず、今朝すでに 2 回パスワードを再設定したと訴える。技術者が確認すると、単なる期限切れではなくロックされていると判明。別の女性が携帯とノートパソコンの両方で試したか尋ねると、数分の間に両方で試みたと判明し、複数端末での失敗が合算され、10 分以内に 5 回失敗すると 1 時間ロックされる仕組みだと説明される。パスワード自体の問題ではないと確認され、技術者は 1 時間待たせず手動で解除すると申し出た。プリヤは 20 分後の電話にそのファイルが必要だと述べる。',
    v: [['locked', 'ロックされた', ], ['failed attempt', '失敗した試行'], ['unlock manually', '手動で解除する']],
    q: [
      { tag: '詳細', s: 'Why was Priya\'s account locked?',
        c: ['Her password had expired.', 'The shared drive was undergoing maintenance.',
            'She entered incorrect passwords too many times across devices.', 'Her account had been suspended by IT policy.'],
        a: 2,
        e: '複数端末での失敗が合算され、10 分以内に 5 回失敗したためロックされたと説明されている。',
        w: ['期限切れではないと明言。', 'メンテナンスの話はない。', '正解。', '方針による停止ではない。'] },
      { tag: '意図', t: ['p3int'], s: 'What does the second woman mean when she says, "So this isn\'t really about the password at all"?',
        c: ['She thinks Priya forgot her password.', 'She wants to change the password policy.',
            'She realizes the true cause is a device-related lockout, not a wrong password.', 'She doubts the technician\'s diagnosis.'],
        a: 2,
        e: '直前の説明を受け、根本原因はパスワードそのものではなく、複数端末にまたがるロックの仕組みにあると理解した発言。',
        w: ['パスワードを忘れたとは述べていない。', '方針変更の提案ではない。', '正解。', '診断を疑ってはいない。'] },
      { tag: '次の行動', s: 'What will the technician do?',
        c: ['Wait for the one-hour lockout to expire', 'Reset the shared drive entirely',
            'Unlock the account manually now', 'Escalate the issue to a supervisor'],
        a: 2,
        e: '「1 時間待たせず、今すぐ手動で解除する」と述べている。',
        w: ['待たずに対応すると述べている。', '共有ドライブ全体のリセットではない。', '正解。', '上司への報告には触れていない。'] },
    ],
  }),

  /* ── 44–46（図表）───────────────────────────────── */
  /* 2026-08-25 追記: set() は各設問の topics を x.t || o.t || ['p3detail'] で決めるため、
     o.t: ['graphic'] のこのユニットでは No.45・46（通常の詳細設問）が明示的な t を
     持たず、既定で ['graphic'] を継承してしまっていた（図表を見て答える設問ではない
     のに論点集計上は「図表問題」に計上される不整合）。No.45・46 に t: ['p3detail']
     を明示し、No.44（唯一の「Look at the graphic」設問）だけが ['graphic'] を
     継承するようにした。
     2026-08-25 追記2: オブザーバーの実プレイで、No.44 の音声が "Pod 4, ten to
     twelve." とポッド番号そのものを明言しており、図表を見る必要が一切ないことが
     判明。しかも exp が「音声が言わない側（ポッド番号）を表から特定する」と、
     事実と逆のことを書いていた。加えて、旧・表は「10時・11時の2コマ連続で
     空いているのは Pod 4 だけ」という唯一値だったため、音声を無視して表だけを
     見ても解けた（当てずっぽうの列⑤⑦に該当）。
     vol6-l2b.js No.68（"the dock for that slot is set out on the move-in
     schedule" と番号を伏せて属性だけを伝える型）を参考に、音声からポッド番号を
     完全に削除し、表の属性（10時-12時・11時-13時のどちらの2時間枠が空いているか）
     でのみ特定できる形に組み替えた。あわせて表も、2時間連続で空いている枠が
     Pod 3（11:00–13:00）と Pod 4（10:00–12:00）の2室になるようにし
     （旧表は Pod 4 のみだった）、音声の「正午までに終わる枠が必要」という条件と
     突き合わせて初めて Pod 4 に絞れるようにした（表だけでは2室に絞れるが1室には
     絞れない。音声だけでは「10時開始の方」としか分からずポッド番号は分からない）。
     No.45 が根拠とする「9 時開始を希望していた」という発話、No.46 が根拠とする
     「全ポッドに HDMI・USB-C 内蔵」という発話はどちらも文言を変えていない。
     stem・選択肢・答えの位置（Pod 4 = index 3）は変えていない。表・音声を実質
     変更したため id を v4q44 → v4q44b に新規採番。No.45・46 の id は変更していない。
     2026-08-25 追記3: レビュー役の監査で、女性の応答 `Then the earlier one,
     please.` が比較級 `earlier` で対象を直接指しており、表の時刻列とそのまま
     結び付くため「2時間連続で空いている中で早い方」を音声の2語だけで確定でき、
     出題意図（正午までに終わる枠との照合）を丸ごと迂回できることが判明。
     `Then I'll take the one that works, please.`（直前の男性の発話が示した
     「正午までに終わる方」という条件だけを指す、比較級・最上級を含まない表現）に
     差し替えた。正解・選択肢は変えていないため id は維持（v4q44b のまま）。ja の
     「早い方（10時開始）を選ぶ」も比較級を含まない表現に直した。
     あわせて No.46 の誤答の語数を伸ばし、正解 `HDMI and USB-C are already
     built in.`（7語）が選択肢中で単独最長（他は6語）にならないようにした
     （選択肢を実質変更したため id を v4q46 → v4q46b に新規採番）。 */
  {
    id: 'v4-p3-44', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    graphic: {
      t: 'table', title: 'Fernshaw Co-working — Meeting Pod Availability, Friday',
      head: ['Pod', '10:00', '11:00', '12:00'],
      rows: [
        ['Pod 1', 'Booked', 'Free', 'Booked'],
        ['Pod 2', 'Free', 'Booked', 'Free'],
        ['Pod 3', 'Booked', 'Free', 'Free'],
        ['Pod 4', 'Free', 'Free', 'Booked'],
      ],
    },
    script: [
      { role: 'M-Cn', text: 'Fernshaw Co-working, how can I help?' },
      { role: 'W-Am', text: 'Hi, I need a pod for Friday, two hours back to back. I was hoping to start right at nine, but if that\'s taken, anything works as long as I\'m out by noon for another commitment.' },
      { role: 'M-Cn', text: 'Let me see... nothing\'s free before ten, and there are two slots that run two hours straight after that.' },
      { role: 'W-Am', text: 'Do either of them get me out by noon?' },
      { role: 'M-Cn', text: 'Only one does. The other one doesn\'t open up until eleven, so it would run past your noon commitment.' },
      { role: 'W-Am', text: 'Then I\'ll take the one that works, please. Do I need to bring my own screen adapter?' },
      { role: 'M-Cn', text: 'No, all pods have HDMI and USB-C built in. Just bring your laptop.' },
    ],
    ja: '女性が金曜日にコワーキングスペースのポッドを2時間連続で予約したいと電話をかける。9時開始を希望していたが、埋まっていれば正午までに退室できる枠なら何でもよいと伝える。担当者は、10時より前は空きがなく、10時以降で2時間連続して空いている枠が2つあると案内する。女性が「どちらも正午までに終わるか」と尋ねると、片方は11時開始のため正午を過ぎてしまい、もう一方だけが正午ちょうどに終わると説明される。女性は正午ちょうどに終わる方（10時開始）を選ぶ。画面用アダプターの持参が必要か尋ねると、すべてのポッドにHDMIとUSB-Cが備え付けられているのでノートパソコンだけで良いと案内される。',
    vocab: [['back to back', '連続して'], ['commitment', '用事、予定'], ['run past', '（時刻を）過ぎる'], ['built in', '内蔵の']],
    questions: [
      {
        id: 'v4q44b', no: 44, tag: '図表', topics: ['graphic'],
        stem: 'Look at the graphic. Which pod will the woman use?',
        choices: ['Pod 1', 'Pod 2', 'Pod 3', 'Pod 4'],
        answer: 3,
        exp: '女性は2時間連続の枠が必要で、正午までに終わることを条件としている。表で2時間連続して空いているのは Pod 3（11:00–13:00）と Pod 4（10:00–12:00）の2室のみだが、11時開始の Pod 3 は正午を過ぎてしまうため条件に合わない。10時開始で正午ちょうどに終わる Pod 4 が条件に合う。音声はポッド番号を一切明言せず、「10時より前は空きがない」「もう一方は11時開始で正午を過ぎる」という時間の条件だけを伝えるため、表と照合して初めてポッド番号が決まる。',
        why: [
          '11時の1コマしか空いておらず（10時・12時は予約済み）、2時間連続にならない。',
          '10時と12時は空いているが11時が予約済みのため、連続した2時間にならない。',
          '11:00–13:00 の2時間は連続して空いているが、11時開始のため正午を過ぎてしまい、女性の条件（正午までに終わる）に合わない。',
          '正解。10:00–12:00 の2時間が連続して空いており、正午ちょうどに終わる。',
        ],
      },
      {
        id: 'v4q45', no: 45, tag: '詳細', topics: ['p3detail'],
        stem: 'What had the woman originally wanted?',
        choices: ['A different day', 'A longer session', 'To start at nine', 'To book two pods'],
        answer: 2,
        exp: '「9時ちょうどの開始を希望していたが、埋まっていれば別の時間でもよい」と述べている。',
        why: ['曜日の変更は述べていない。', '時間の延長は求めていない。', '正解。', '1室のみ希望。'],
      },
      {
        id: 'v4q46b', no: 46, tag: '詳細', topics: ['p3detail'],
        stem: "What does the man say about the pods' equipment?",
        choices: ['Equipment must always be booked well in advance.', 'An adapter must be purchased at extra cost.', 'Only some of the pods have screens.', 'HDMI and USB-C are already built in.'],
        answer: 3,
        exp: '「すべてのポッドにHDMIとUSB-Cが内蔵されている」と案内している。',
        why: ['事前予約の話はない。', '別途購入は不要と述べている。', 'すべてのポッドが対象。', '正解。'],
      },
    ],
  },

  /* ── 47–49 ─────────────────────────────────────────── */
  set({
    n: [47, 48, 49], lv: 4,
    s: [
      { role: 'M-Br', text: 'The produce invoice this month is about 15 percent higher than usual.' },
      { role: 'W-Cn', text: 'I noticed too. I called our supplier — they said it\'s the drought affecting the lettuce and tomato crops specifically.' },
      { role: 'M-Br', text: 'Just those two, not everything?' },
      { role: 'W-Cn', text: 'Right. Root vegetables and grains are unaffected, so far.' },
      { role: 'M-Br', text: 'Could we swap the summer salad for something that leans less on lettuce and tomato?' },
      { role: 'W-Cn', text: 'I already asked the chef. She\'s testing a cabbage-based version this week.' },
      { role: 'M-Br', text: 'Good. Let\'s hold off on raising the menu price until we see whether the cabbage version works.' },
    ],
    ja: '今月の青果の請求額が通常より 15 パーセントほど高いと男性が指摘。女性が業者に確認したところ、干ばつがレタスとトマトの作物に限って影響していると判明。根菜類や穀類は今のところ影響を受けていない。男性はレタスとトマトへの依存が少ない献立への切り替えを提案し、女性はすでにシェフに相談済みで、今週キャベツを使った代替版を試作中だと答える。結論として、代替版がうまくいくか見極めるまでメニュー価格の値上げは見送ることになった。',
    v: [['produce', '青果'], ['drought', '干ばつ'], ['root vegetable', '根菜']],
    q: [
      { tag: '詳細', s: 'Why has the produce invoice increased?',
        c: ['A new supplier was hired.', 'Drought has affected certain crops.',
            'The restaurant increased its order size.', 'Delivery fees rose.'],
        a: 1,
        e: '干ばつがレタスとトマトの作物に影響していると業者から説明を受けている。',
        w: ['業者変更の話はない。', '正解。', '発注量増加には触れていない。', '配送料の話も出ていない。'] },
      { tag: '詳細', s: 'What is unaffected by the price increase?',
        c: ['Lettuce and tomatoes', 'All produce',
            'Root vegetables and grains', 'Only imported items'],
        a: 2,
        e: '「根菜類と穀類は今のところ影響を受けていない」と述べられている。',
        w: ['影響を受けている側。', 'すべてではなく一部が影響を受けている。', '正解。', '輸入品の話は出ていない。'] },
      { tag: '推測', s: 'What will the speakers do before changing the menu price?',
        c: ['Wait to see if a recipe substitution works', 'Switch suppliers',
            'Raise prices immediately', 'Consult a food critic'],
        a: 0,
        e: 'キャベツを使った代替版がうまくいくか見極めるまで値上げを見送ると結論している。',
        w: ['正解。', '業者変更の話はない。', '値上げは見送られている。', '評論家への相談はない。'] },
    ],
  }),

  /* ── 50–52 ─────────────────────────────────────────── */
  set({
    n: [50, 51, 52], lv: 5,
    s: [
      { role: 'W-Au', text: 'Kenji, I\'ve read your reconciliation on the July shipment discrepancy. It\'s thorough, but it stops before the actual cause.' },
      { role: 'M-Cn', text: 'You mean why the count was off in the first place.' },
      { role: 'W-Au', text: 'Yes. You\'ve shown that 40 units were missing from the manifest. What you haven\'t shown is where they went.' },
      { role: 'M-Cn', text: 'The loading bay camera was down that week, so I can\'t confirm visually. My best guess is a mislabelled pallet went to the wrong truck.' },
      { role: 'W-Au', text: 'Can you check the other truck\'s delivery records?' },
      { role: 'M-Cn', text: 'I can, but that truck went to three different sites, so it will take some cross-checking.' },
      { role: 'W-Au', text: 'Do it. If it\'s a mislabelling problem, it could easily happen again on any pallet, not just this one.' },
      { role: 'M-Cn', text: 'I\'ll have an answer by Thursday.' },
    ],
    ja: '女性が 7 月の出荷差異についての照合報告書を読み、内容は丁寧だが実際の原因の手前で止まっていると指摘。ケンジは「原因のことですね」と応じ、女性は「マニフェストから 40 個が消えたことは示せているが、どこへ行ったかが示せていない」と続ける。ケンジは積み込み場のカメラがその週故障していたため目視確認できず、パレットの表示ミスで別のトラックに積まれた可能性が高いと推測。女性は別のトラックの配送記録を確認するよう指示し、表示ミスなら他のパレットでも同じことが起こり得ると懸念を示す。ケンジは木曜までに回答すると答えた。',
    v: [['reconciliation', '照合、突き合わせ'], ['discrepancy', '食い違い'], ['manifest', '積荷目録'], ['mislabelled', '表示を誤った']],
    q: [
      { tag: '詳細', s: 'What has Kenji\'s report established?',
        c: ['The camera system was working correctly.', '40 units were missing from the manifest.',
            'A specific driver was responsible.', 'The mislabelled pallet has been located.'],
        a: 1,
        e: '「マニフェストから 40 個が消えていた」ことは報告書で示せていると述べられている。',
        w: ['カメラは故障していたと述べている。', '正解。', '特定のドライバーの責任には触れていない。', 'パレットの所在はまだ不明。'] },
      { tag: '詳細', s: 'Why can\'t Kenji confirm the cause visually?',
        c: ['The loading bay camera was not working that week.', 'The paperwork was destroyed.',
            'He was not on shift that day.', 'The truck has already been repainted.'],
        a: 0,
        e: '「その週、積み込み場のカメラが故障していた」ため目視で確認できないと述べている。',
        w: ['正解。', '書類の破棄には触れていない。', '勤務の有無は述べていない。', '塗装の話はない。'] },
      { tag: '推測', s: 'Why is the woman concerned about other pallets?',
        c: ['They have already caused a second incident.', 'They are due for a scheduled audit.',
            'They belong to a different client.', 'A mislabelling problem could recur on any pallet.'],
        a: 3,
        e: '「表示ミスなら、これ 1 件に限らず他のパレットでも容易に起こり得る」と懸念している。',
        w: ['2 件目の発生はまだ述べられていない。', '監査予定の話はない。', '顧客の違いには触れていない。', '正解。'] },
    ],
  }),
];
