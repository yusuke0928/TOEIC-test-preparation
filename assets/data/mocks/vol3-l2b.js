/* =============================================================
   予想模試 Vol.3 — Part 3 後半（No.53–70）
   ============================================================= */

const set = (o) => ({
  id: `v3-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: `v3q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2B = [

  /* ── 53–55 ─────────────────────────────────────────── */
  set({
    n: [53, 54, 55], lv: 5,
    s: [
      { role: 'W-Am', text: 'Rasmus, the client has asked us to remove the survey question about household income.' },
      { role: 'M-Br', text: 'On what grounds?' },
      { role: 'W-Am', text: 'They say respondents find it intrusive and it\'ll hurt the completion rate.' },
      { role: 'M-Br', text: 'The completion rate on the pilot was ninety-one percent, and only four people skipped that question.' },
      { role: 'W-Am', text: 'I know. But it\'s their study.' },
      { role: 'M-Br', text: 'It is. My concern is that half the analysis they have asked for can\'t be done without it. We can\'t report by income band if we don\'t collect income.' },
      { role: 'W-Am', text: 'Then that\'s what we tell them — not "we disagree", but "here is what you lose".' },
      { role: 'M-Br', text: 'I\'ll list the affected tables. There are six.' },
    ],
    ja: '顧客から、世帯収入に関する調査項目の削除を求められた。理由は「回答者が立ち入りすぎと感じ、完了率が下がる」。しかし試験調査の完了率は 91 パーセントで、その設問を飛ばしたのは 4 名だけ。顧客の調査である以上従うべきだが、依頼された分析の半分がその項目なしには実施できない（収入帯別の集計ができない）。そこで「反対です」ではなく「削ると何が失われるか」を提示する方針とし、影響を受ける集計表 6 点を列挙することになった。',
    v: [['intrusive', '立ち入りすぎた'], ['completion rate', '（回答の）完了率'], ['income band', '収入帯']],
    q: [
      { tag: '詳細', s: 'What does the client want changed?',
        c: ['The removal of one question', 'The wording of one question',
            'The method of distribution', 'The size of the sample'],
        a: 0,
        e: '「世帯収入に関する設問の削除」を求めている。',
        w: ['正解。', '顧客が求めたのは削除であり、表現の書き換えは求めていない。', '配布方法には触れていない。', '標本数の話も出ていない。'] },
      { tag: '詳細', s: 'What does the pilot data show?',
        c: ['The completion rate was low.', 'The question was rarely skipped.',
            'Most respondents misunderstood the question.', 'Income data was unreliable.'],
        a: 1,
        e: '「完了率 91 パーセント、その設問を飛ばしたのは 4 名だけ」が根拠。',
        w: ['91 パーセントは低くない。', '正解。', '誤解の話はない。', '信頼性には触れていない。'] },
      { tag: '意図', t: ['p3int'], s: 'What does the woman mean when she says, "not \'we disagree\', but \'here is what you lose\'"?',
        c: ['They should refuse the request outright.', 'They should present consequences rather than objections.',
            'They should ask for a higher fee.', 'They should consult a second client.'],
        a: 1,
        e: '直前に「依頼された分析の半分ができなくなる」とあり、直後に「影響を受ける集計表を列挙する」と続く。反対意見ではなく帰結を示す方針。',
        w: ['拒否ではない。', '正解。', '費用の話は出ていない。', '別の顧客の話もない。'] },
    ],
  }),

  /* ── 56–58（図表）────────────────────────────────── */
  /* No.57 は2度目の是正（id を v3q57s に再採番）。1度目の修正（v3q57r）は「ページ数の時点で
     除外される綴じ方の公表料金」を問う図表設問にしたが、レビューで次が発覚した：
     stem が定冠詞＋単数（"the binding option that is ruled out"）で「除外されるのはちょうど1つ」
     と明言しており、表の Max pages 列（48/250/400/600）と組み合わせると、48<P≤250 の場合に
     除外される行は必ず Saddle stitch に一意確定するため、音声の「190ページ」を聞かなくても
     設問文と表だけで正解 £1.90 が求まってしまっていた。加えて正解 £1.90 は公表料金の最安値、
     Max pages 48 は唯一の外れ値（次点の250とは5倍差）で、当てずっぽうの手がかりも二重に立って
     いた上、"the binding option that is ruled out" が No.56 の選択肢 Saddle stitch を先読みで
     排除し、No.56 を実質3択にしていた。この会話は図表設問を2問載せられない構造（Perfect bound /
     Wire-O / Case bound を識別する属性がすべて表の列そのもの）なので、No.57 を図表設問から
     詳細設問に作り替え、音声終盤の「200部には公表料金にない割引がある」という発言
     （No.58 の正解＝午後に見積もりを送る、とは別の事実で、いずれの他設問の答えにも触れない）を
     問う形にした。tag を「図表」→「詳細」、topics を ['graphic'] → ['p3detail']
     （このセットの他の詳細系設問と同じ論点。他ユニットの set() 既定値に倣った）に変更。
     set() は id を no から自動生成し、この設問だけ id を変える手段がないため、
     このユニットだけヘルパーを使わず直接記述する。 */
  {
    id: 'v3-p3-56', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    script: [
      { role: 'M-Am', text: 'Halvard Print, good afternoon.' },
      { role: 'W-Au', text: 'Hello. I need two hundred copies of a training manual. It runs to a hundred and ninety pages.' },
      { role: 'M-Am', text: 'A hundred and ninety. That rules out one of our options straight away.' },
      { role: 'W-Au', text: 'The important thing is that it stays open on a bench while people follow the steps.' },
      { role: 'M-Am', text: 'Then that narrows it to one. The cheaper binding at that page count won\'t stay open — it springs shut.' },
      { role: 'W-Au', text: 'Understood. And the cost?' },
      { role: 'M-Am', text: 'I\'ll send a written quotation this afternoon. There\'s a discount at two hundred copies that\'s not on the published rate.' },
    ],
    graphic: {
      t: 'table', title: 'Halvard Print — Binding Options',
      head: ['Binding', 'Max pages', 'Lies flat', 'Cost per copy'],
      rows: [
        ['Saddle stitch', '48', 'Yes', '£1.90'],
        ['Perfect bound', '400', 'No', '£3.40'],
        ['Wire-O', '250', 'Yes', '£4.20'],
        ['Case bound', '600', 'No', '£9.80'],
      ],
    },
    ja: '190 ページの研修マニュアルを 200 部という依頼。ページ数で選択肢が 1 つ除外される。作業台の上で開いたままになることが重要と伝えると、条件を満たすのは 1 つに絞られると説明。そのページ数では安い方の綴じ方は開いたままにならず閉じてしまうという。費用は午後に書面で見積もりを送るとし、200 部には公表料金にない割引があると案内された。',
    vocab: [['lie flat', '（本が）開いたままになる'], ['spring shut', '（反発で）閉じてしまう'], ['quotation', '見積もり']],
    questions: [
      { id: 'v3q56', no: 56, tag: '図表', stem: 'Look at the graphic. Which binding will be used?',
        choices: ['Saddle stitch', 'Wire-O', 'Perfect bound', 'Case bound'],
        answer: 1,
        exp: '190 ページなので Saddle stitch（48 ページまで）は不可。開いたままになる必要があるので Lies flat が Yes の Wire-O。Perfect bound と Case bound は No。',
        why: ['ページ数の上限を超える。', '正解。', '開いたままにならない。', '開いたままにならない。'],
        topics: ['graphic'] },
      { id: 'v3q57s', no: 57, tag: '詳細', stem: 'What does the man say about the price for this order?',
        choices: ['It will be higher than the standard published rate.', 'It will be the same as the published rate.',
                   'It will be lower than the standard published rate.', 'It includes a surcharge for a short deadline.'],
        answer: 2,
        exp: '男性は「200 部には公表料金にない割引がある」と述べている。割引がある以上、実際の価格は公表料金より低くなる。',
        why: ['割引は価格を下げるものであり、上げるものではない。', '割引は公表料金と異なることを意味するので、同額にはならない。', '正解。', '述べられているのは割引であり、追加の割増ではない。短納期への言及もない。'],
        topics: ['p3detail'] },
      { id: 'v3q58', no: 58, tag: '次の行動', stem: 'What will the man do this afternoon?',
        choices: ['Send a written quotation', 'Deliver a sample copy', 'Order the paper stock', 'Visit the customer\'s site'],
        answer: 0,
        exp: '「午後に書面で見積もりを送る」と述べている。',
        why: ['正解。', '見本の話はない。', '用紙の発注には触れていない。', '訪問の予定もない。'],
        topics: ['p3detail'] },
    ],
  },

  /* ── 59–61 ─────────────────────────────────────────── */
  set({
    n: [59, 60, 61], lv: 5, k: 'conversation with three speakers',
    s: [
      { role: 'M-Br', text: 'Last thing — the recruitment video. Wren, you looked at the two quotes.' },
      { role: 'W-Am', text: 'I did. Twelve thousand from Fable, seven from Northlight.' },
      { role: 'M-Cn', text: 'Same deliverable?' },
      { role: 'W-Am', text: 'Not quite. Fable includes two days of filming on our sites; Northlight assumes we send them footage.' },
      { role: 'M-Cn', text: 'We don\'t have footage.' },
      { role: 'W-Am', text: 'Exactly. So the seven becomes seven plus whatever it costs us to produce two days of usable material, which we have never done.' },
      { role: 'M-Br', text: 'So it is not really seven against twelve.' },
      { role: 'W-Am', text: 'No. It is twelve against seven plus an unknown, delivered by people who have never filmed on a working site.' },
      { role: 'M-Br', text: 'Go with Fable. Wren, ask them to confirm the two filming days in writing before we sign.' },
    ],
    ja: '採用動画の 2 社見積もりを検討。フェイブル社が 1 万 2 千、ノースライト社が 7 千。ただし内容が同じではなく、フェイブルは自社拠点での 2 日間の撮影を含むが、ノースライトは映像素材の提供を前提としている。素材は存在せず、経験もないため「7 千＋未知の費用」となる。したがって単純な 7 対 12 の比較ではないと確認され、フェイブルに決定。契約前に撮影 2 日間を書面で確認するよう指示された。',
    v: [['deliverable', '成果物'], ['footage', '映像素材'], ['usable', '使える']],
    q: [
      { tag: '詳細', s: 'What is the difference between the two quotes?',
        c: ['One offers a faster turnaround than the other.', 'One includes filming; the other does not.',
            'One includes editing only.', 'One requires payment in advance.'],
        a: 1,
        e: '「フェイブルは 2 日間の撮影を含み、ノースライトは素材の提供を前提とする」と説明されている。',
        w: ['納期は一度も比較されていない。2 社の違いは撮影 2 日間が含まれるかどうかである。', '正解。', '編集のみとは述べていない。', '支払条件の話はない。'] },
      { tag: '意図', t: ['p3int'], s: 'What does the woman mean when she says, "It is twelve against seven plus an unknown"?',
        c: ['The two quotes should be renegotiated before any final decision.', 'The cheaper quote carries unquantified extra costs.',
            'The budget has not yet been approved by finance.', 'The higher quote includes charges that were never disclosed.'],
        a: 1,
        e: '素材制作の費用が見積もられていないため、7 千では済まないという指摘。',
        w: ['再交渉の提案ではない。結論はすでにフェイブルへ決定している。', '正解。', '予算承認の話はない。', '未知の費用が生じるのは安い方（ノースライト）であり、高い方（フェイブル）ではない。高い方の内訳（2日間の撮影）はむしろ明確である。'] },
      { tag: '次の行動', s: 'What is the woman asked to do?',
        c: ['Negotiate a lower price with Fable before signing', 'Obtain a third quotation from a different production company',
            'Produce sample footage', 'Get written confirmation of the filming days'],
        a: 3,
        e: '「契約前に撮影 2 日間を書面で確認するよう頼め」と指示されている。',
        w: ['値下げ交渉は述べていない。男性は「フェイブルで進めよう」と結論づけている。', '3 社目の見積もりを取る話はない。', '素材制作は避ける方針。', '正解。'] },
    ],
  }),

  /* ── 62–64（図表 1 問＋通常 2 問）─────────────────── */
  /* No.63 は本番仕様（1 セット 1 問の図表設問）に揃えるための差し替え。
     旧 No.63「Look at the graphic. Will lunch be included?」は、No.62 の正解
     （Woodland trail）が確定して初めて「3 時間＝4 時間未満」から昼食の有無が
     決まる構造で、図表設問が1セットに2問載る形（本番に存在しない構造）だった。
     音声終盤の M-Cn の発言 "Then there's one that fits exactly." の意図問題
     （＝女性が挙げた2条件〈登り300m未満・6kmより長い〉を満たす案が1つに絞られる、
     という意味）に置き換えた。図表を見なくても音声だけで解け、正解（Woodland trail）
     の名称・数値には一切触れないので No.62 の答えを先読みで漏らさない。
     tag を「図表」→「意図」、topics を ['graphic']（o.t 由来）→ ['p3int'] に変更。
     set() は id を no から自動生成し、この設問だけ id を変える手段がないため、
     このユニットだけヘルパーを使わず直接記述する（先例: v3-p3-56 の v3q57s）。 */
  /* 2026-08-25 追記（監査で二度目の差し戻し）: 上の v3q63r 自体が意図問題として
     成立していなかった。引用 "there's one that fits exactly" に字義を超えた含みが
     なく（「条件に合う案がちょうど1つ」という文字通りの意味そのもの）、しかも
     正解 "Only one walk meets both conditions she described." がその逐語訳で、
     誤答3つ（複数ある／一つも無い／どれでもよい）は引用文中の "one" と "fits" に
     矛盾するため設問文と選択肢だけで、音声なしに正解できてしまっていた。
     引用を同じ発話の別の一文 "we have all day" に差し替えた
     （女性の発言「But six kilometres feels too short — we have all day.」の一部）。
     この一文は字義（一日使える時間がある）を超えて、直前の「6キロでは短すぎる」という
     不満の理由付けとして機能しており、含みを読む必要が生じる。
     誤答は次の根拠でそれぞれ「不可能」に閉じている:
     ・「その日は後で別の予定がある」＝ "we have all day" の字義（その日は丸ごと空いている）と
       直接矛盾する。
     ・「さらに短縮したい」＝ 直前で本人が「6キロでは短すぎる」と述べており、
       これと正反対になるため成立しない。
     ・「距離に関わらず昼食を用意してほしい」＝ 後続の発言「4時間以上のコースのみ昼食を
       含む」と明示的に矛盾する。
     No.62（Woodland trail・9 km）の答えにも、No.64（中間地点の温かい飲み物）の答えにも
     一切触れないため、先読みによる漏れは生じない。tag「意図」・topics ['p3int'] は
     そのまま据え置く（成立している意図問題になったため）。中身を総入れ替えしたので
     id を v3q63r → v3q63s に新規採番する。 */
  {
    id: 'v3-p3-62', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    script: [
      { role: 'W-Br', text: 'Good morning. We\'re a group of eight and we\'d like a guided walk on Friday.' },
      { role: 'M-Cn', text: 'Certainly. How much climbing are you comfortable with?' },
      { role: 'W-Br', text: 'Two of the group have knee problems, so we\'d want to keep the ascent under three hundred metres. But six kilometres feels too short — we have all day.' },
      { role: 'M-Cn', text: 'Then there\'s one that fits exactly.' },
      { role: 'W-Br', text: 'Good. Is lunch included?' },
      { role: 'M-Cn', text: 'On walks of four hours or more, yes. On shorter ones you bring your own, though we do provide hot drinks at the halfway point on all of them.' },
    ],
    graphic: {
      t: 'table', title: 'Ardvreck Estate — Guided Walks',
      head: ['Walk', 'Distance', 'Ascent', 'Duration'],
      rows: [
        ['Loch circuit', '6 km', '40 m', '2 hours'],
        ['Woodland trail', '9 km', '210 m', '3 hours'],
        ['Ridge path', '11 km', '620 m', '4.5 hours'],
        ['Summit route', '14 km', '980 m', '6 hours'],
      ],
    },
    ja: '8 名のグループが金曜のガイド付きウォーキングを希望。2 名が膝の不調のため登りは 300 メートル未満に抑えたいが、6 キロでは短すぎる（1 日使える）と伝える。条件にちょうど合うコースが 1 つあると案内される。昼食は 4 時間以上のコースでは含まれ、それより短いものは各自持参だが、すべてのコースで中間地点に温かい飲み物が用意される。',
    vocab: [['ascent', '登り（の標高差）'], ['halfway point', '中間地点']],
    questions: [
      { id: 'v3q62', no: 62, tag: '図表', stem: 'Look at the graphic. Which walk will the group take?',
        choices: ['Woodland trail', 'Loch circuit', 'Ridge path', 'Summit route'],
        answer: 0,
        exp: '登り 300 メートル未満で、6 キロより長いのは Woodland trail（9 km・210 m）のみ。',
        why: ['正解。', '6 km で短すぎる。', '登り 620 m で条件を超える。', '登り 980 m で条件を超える。'],
        topics: ['graphic'] },
      { id: 'v3q63s', no: 63, tag: '意図', stem: 'What does the woman mean when she says, "we have all day"?',
        choices: ['She has other commitments later that day.', 'She wants the walk shortened even further.',
                   'She would prefer a walk that takes longer.', 'She wants lunch provided regardless of how long the walk is.'],
        answer: 2,
        exp: '直前に「six kilometres feels too short（6キロでは短すぎる）」とあり、その理由として「we have all day（その日は丸ごと使える）」と続けている。使える時間が十分にあるので、短い案では物足りず、より時間のかかる長い案を望んでいる、という意味。',
        why: ['「we have all day」はその日が丸ごと空いていることを意味し、後で別の予定があることとは相容れない。', '直前で「6キロでは短すぎる」と述べており、さらに短くしたいという読みはこれと正反対になる。', '正解。', '昼食が出るかどうかは後続の発言で「4時間以上のコースのみ」と条件付きで示されており、長さに関わらず出るという読みとは矛盾する。'],
        topics: ['p3int'] },
      { id: 'v3q64', no: 64, tag: '詳細', stem: 'What is provided on every walk?',
        choices: ['Hot drinks partway through', 'A packed lunch',
                   'Walking poles for anyone who needs them', 'A printed map of the estate paths'],
        answer: 0,
        exp: '「すべてのコースで中間地点に温かい飲み物を用意する」と述べている。',
        why: ['正解。', '4 時間以上のコースのみ昼食が含まれ、それより短いコースでは各自持参と明言されている。すべてのコースに含まれるわけではない。', 'ポールの貸し出しには一切触れていない。全コース共通で用意されると述べられているのは中間地点の温かい飲み物だけである。', '地図の配布には触れていない。用意されると述べられているのは温かい飲み物のみである。'],
        topics: ['p3detail'] },
    ],
  },

  /* ── 65–67 ─────────────────────────────────────────── */
  set({
    n: [65, 66, 67], lv: 5,
    s: [
      { role: 'M-Am', text: 'Elin, I have a question about the returns policy on the website. It says thirty days, but the printed insert in the box says fourteen.' },
      { role: 'W-Br', text: 'The insert\'s out of date. We extended it in March.' },
      { role: 'M-Am', text: 'How many boxes still have the old insert?' },
      { role: 'W-Br', text: 'All of them, until we use up the print run. About eleven thousand.' },
      { role: 'M-Am', text: 'That\'s a year of stock.' },
      { role: 'W-Br', text: 'It is. Reprinting would cost about nine hundred and we\'d bin eleven thousand perfectly good inserts.' },
      { role: 'M-Am', text: 'And if a customer relies on the fourteen days and we refuse a return on day twenty?' },
      { role: 'W-Br', text: 'We wouldn\'t refuse it — the longer period applies. But you\'re right that it looks careless.' },
      { role: 'M-Am', text: 'Then put a sticker on the outer carton. It\'s not elegant, but it costs almost nothing.' },
    ],
    ja: 'ウェブサイトの返品規定は 30 日だが、箱に同梱された印刷物は 14 日となっている。3 月に延長したため印刷物が古いままで、在庫を使い切るまで全箱に入る。残り約 1 万 1 千枚＝約 1 年分。刷り直しは約 900 の費用に加え、使える印刷物 1 万 1 千枚を廃棄することになる。14 日を信じた顧客が 20 日目に返品を断られる懸念については、長い方の期間が適用されるので断らないが、ずさんに見えるのは確かと認める。結論として外箱にシールを貼る案が出た。',
    v: [['insert', '（箱の）同梱印刷物'], ['print run', '（一度の）印刷分'], ['bin', '廃棄する']],
    q: [
      { tag: '詳細', s: 'What inconsistency has the man noticed?',
        c: ['The website lists the wrong price.', 'Two different return periods are stated.',
            'The packaging shows an old logo.', 'The warranty length has changed.'],
        a: 1,
        e: 'ウェブは 30 日、同梱印刷物は 14 日という食い違い。',
        w: ['価格の話はない。', '正解。', 'ロゴには触れていない。', '保証期間ではなく返品期間。'] },
      { tag: '詳細', s: 'Why has the insert not been reprinted?',
        c: ['Legal approval from head office is pending.', 'The printer has been fully booked for weeks.',
            'The policy may change again before the year ends.', 'The existing stock would be wasted.'],
        a: 3,
        e: '「使える印刷物 1 万 1 千枚を廃棄することになる」が理由。費用 900 も併せて挙げられている。',
        w: ['法務の承認にも本社の決裁にも触れていない。刷り直さない理由として挙がっているのは在庫の廃棄と費用である。', '印刷業者の稼働状況の話はない。理由として挙げられているのは在庫の廃棄と刷り直し費用である。', '規定が再び変わる予定は述べられていない。3 月に 30 日へ延長したという説明があるだけである。', '正解。'] },
      { tag: '次の行動', s: 'What solution is proposed?',
        c: ['Reverting to the terms printed on the insert', 'Reprinting the inserts immediately',
            'Removing the insert from the boxes', 'Adding a label to the outer packaging'],
        a: 3,
        e: '「外箱にシールを貼る。優雅ではないがほぼ費用がかからない」と提案されている。',
        w: ['同梱印刷物の記載に戻すという案は誰も出していない。女性は長い方（30 日）が適用されると明言している。', '刷り直しは避ける方針。', '抜き取りは述べていない。', '正解。'] },
    ],
  }),

  /* ── 68–70（図表 1 問＋通常 2 問）─────────────────── */
  /* No.69 は本番仕様に揃えるための差し替え。旧 No.69「Look at the graphic.
     What time is it most likely now?」は、No.68 の正解（Counter C）が確定し、
     かつ表の締切時刻（15:00）を読んでから「20分過ぎている」という音声と
     足し合わせて初めて解ける2階建ての図表設問で、1セットに図表設問が2問
     載る形（本番に存在しない構造）だった。音声中の「20分過ぎている」という
     数値そのものを問う詳細設問に置き換えた——カウンターの識別や表の時刻は
     一切問わないので、No.68 の答え（Counter C）を先読みで漏らさない。
     tag は「図表」のまま変えず、topics のみ ['graphic']（o.t 由来）→
     ['p3detail'] に変更。set() は id を no から自動生成し、この設問だけ
     id を変える手段がないため、このユニットだけヘルパーを使わず直接記述する
     （先例: v3-p3-56 の v3q57s）。 */
  /* 2026-08-25 追記: No.68 自体に別の欠陥があった。音声の
     "shuts earliest of all of them" が表の until 列の唯一の最小値
     （15:00＝Counter C）と直接対応しており、「関税＝customs カウンター」
     という語彙推論を飛ばして最上級の一語だけで表の極端値を拾えば解けた。
     音声から最上級表現を除去し、あわせて表の時刻も Counter B と C で
     入れ替えて、正解行（Counter C）が until 列の最大でも最小でもない
     中間値（16:00）になるようにした。No.69 が依拠する「20分過ぎている」
     という数値は変えていない。表・音声を実質変更したため id を
     v3q68 → v3q68b に新規採番。 */
  {
    id: 'v3-p3-68', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    script: [
      { role: 'W-Au', text: 'Excuse me, I have a card for an item that couldn\'t be delivered.' },
      { role: 'M-Br', text: 'May I see it? Ah — this one came from abroad and there\'s duty to pay, so it\'s not the ordinary parcel counter.' },
      { role: 'W-Au', text: 'I didn\'t realise. What time do they close?' },
      { role: 'M-Br', text: 'That counter\'s already shut, I\'m afraid — you\'ve missed it by twenty minutes.' },
      { role: 'W-Au', text: 'Can I use the lockers?' },
      { role: 'M-Br', text: 'Not for anything with duty outstanding. But you can pay the duty online tonight, and then it moves to the ordinary parcel counter tomorrow, which is open much later.' },
      { role: 'W-Au', text: 'That\'s easier. Thank you.' },
    ],
    graphic: {
      t: 'kv', title: 'Sorting Office — Collection Times (Weekday)',
      pairs: [
        ['Counter A', 'Parcels — until 17:30'],
        ['Counter B', 'Registered post — until 15:00'],
        ['Counter C', 'Customs items — until 16:00'],
        ['Locker bank', 'Self-service — 24 hours'],
      ],
    },
    ja: '不在票を持って郵便局を訪れた女性。担当者が確認すると海外からの品で関税の支払いが必要なため、通常の小包窓口ではないと説明。その窓口はすでに閉まっており、20 分前に締め切られていた。ロッカー利用を尋ねると、関税未納の品は不可。ただし当夜オンラインで関税を支払えば、翌日は通常の小包窓口の扱いになり、そちらはずっと遅くまで開いていると案内された。',
    vocab: [['duty', '関税'], ['outstanding', '未払いの'], ['locker bank', '自動受取ロッカー']],
    questions: [
      { id: 'v3q68b', no: 68, tag: '図表', stem: 'Look at the graphic. Which counter does the woman need today?',
        choices: ['Counter A', 'Counter B', 'Counter C', 'The locker bank'],
        answer: 2,
        exp: '海外からの品で関税（duty）の支払いが必要と述べられており、これに対応するのは Customs items ＝ Counter C。表の締切時刻は手がかりにならない——音声はどの窓口が何時に閉まるかに一切触れていないので、duty と Customs items を結び付ける以外に窓口を特定する道はない。',
        why: ['通常の小包窓口であり、関税がかかる品の窓口ではない。', '書留郵便の窓口であり、関税とは無関係。', '正解。', '関税未納の品はロッカーに預けられないと明言されている。'],
        topics: ['graphic'] },
      { id: 'v3q69r', no: 69, tag: '詳細', stem: 'By how many minutes did the woman miss the counter\'s closing time?',
        choices: ['Five minutes', 'Ten minutes', 'Fifteen minutes', 'Twenty minutes'],
        answer: 3,
        exp: '男性の 「you\'ve missed it by twenty minutes」 が唯一の根拠。表に載っているのは各窓口の締切時刻だけで現在時刻が無いため、経過時間を表から計算することはできない。選択肢は昇順に並べてある。',
        why: ['男性が口にした差は twenty minutes。five という数はこの会話に出てこない。', '男性が口にした差は twenty minutes。ten という数はこの会話に出てこない。', '男性が口にした差は twenty minutes。fifteen という数はこの会話に出てこない。', '正解。男性が twenty minutes と明言している。'],
        topics: ['p3detail'] },
      { id: 'v3q70', no: 70, tag: '次の行動', stem: 'What will the woman most likely do tonight?',
        choices: ['Pay a charge online', 'Collect the item from a locker',
                   'Telephone the sorting office', 'Return the item to the sender'],
        answer: 0,
        exp: '「今夜オンラインで関税を払えば、翌日は通常の小包窓口になる」と案内され、女性は「その方が楽」と応じている。',
        why: ['正解。', '関税未納のためロッカーは使えない。', '電話の話は出ていない。', '返送は述べていない。'],
        topics: ['p3detail'] },
    ],
  },
];
