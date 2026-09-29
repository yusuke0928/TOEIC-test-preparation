/* =============================================================
   予想模試 Vol.1 — Part 7 単一文書 後半（No.165–175）
   ============================================================= */

const sp = (o) => ({
  id: `v1-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。 */
    id: x.qid || `v1q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7detail'], tag: x.tag,
    insertAt: x.insertAt, sentence: x.sentence,
  })),
});

export const R3 = [

  /* ── 165–168 オンラインチャット（4 名）───────────── */
  /* 「設問を先に作り、正解はくじで決める」方式でユニット全体を書き下ろした。
     stem・4択はメインが凍結し（plans/vol1-final-P7s.txt の v1-p7-165）、
     正解はメインがくじで決定（Q165=D、Q166=B、Q167=B、Q168=A。dice/vol1-r3.txt）。
     旧版の題材・人物名・言い回しは一切流用せず、本文を新規に書き下ろした。
     設問 id は全問新規採番（v1q165p〜v1q168p）。
     申し送り対応：Q167 の引用の直前（オラ・セルカーク氏の発言）は「開店前7時の研修案」1点に
     絞り、納品時刻には触れていない。グレース・レッドパス氏が確認を要すると述べるのは総予算
     （Q166）1点のみで、納品日程・研修日時は他の発言（デイナ、オラ、フェリックス）の話題として
     処理した。参加店舗はデイナの冒頭発言で地区の全店舗と事実上確定しており、納品日は未確定の
     まま（オラの発言「数日前倒しできないか確認する」）だが、いずれもグレース氏自身の発言では
     ないため (A)(C)(D) は「言及なし」で閉じている。Q168 の行為（仕入れ先への電話）は
     オラ・セルカーク氏自身の最後の発言のみから読め、他の3人には店舗訪問・表計算共有・
     本社連絡のいずれも割り当てていない。
     2026-09-29 監査反映（reviews/vol1-r3-r1.txt）：(1) Q166 の正解の根拠が "The total budget"
     の逐語で 07:27 にも "the budget figure" が出て budget の一語で解けていたため、07:17 と
     07:29 のグレース氏の発言を言い換えに差し替えた（"budget" の語を使わない）。
     (2) Q167 の決着で、フェリックス氏の店が6時開店なのに Dana 氏が「6時半」（開店30分後）を
     割り当てており、"before the doors open" というオラ氏の前提と噛み合っていなかったため、
     "five o'clock"（開店1時間前。オラ氏の "a clear hour" と揃う）に差し替えた。
     (3) Q166 why[3] が選択肢 (D)「研修の**日付**」を「時刻」の話にすり替えていたため、
     日付には触れていないと明示する形に直した。(4) Q166 why[2] を、参加店舗が確定側である
     ことを断定する書き方から「言及なし」で閉じる書き方に改めた。(5) Q168 why[3] の
     「本社の管理者ではない」は本文で確かめられない記述だったため、「言及なし」を根拠にする
     書き方に改めた。いずれも正誤・why[answer] は変えていない。
     2026-09-29 第2巡監査反映（reviews/vol1-r23-r2.txt）：(6) Q166 why[0] が「納品の日程は
     言及なし」と書いていたが、Ola の "bring our first order forward a few days" が実際には
     最初の発注の日程に触れており、本文と矛盾していた（第1巡の見落とし）。(A) が偽なのは
     「Grace の発言ではないから」で足りるため、その理由に書き直した。(7) 07:17 の Grace の
     発言（基本以上のことは約束したくない）と 07:27 の "That works."（研修日程への同意）が
     食い違って見えたため、07:17 を「基本を超えることは約束したくない」という言い方に改め、
     研修日程への同意と両立する形にした（(B) の正誤・他設問への影響なし）。(8) Q167 why[0] に
     「Ola の最後の発言は発注を数日早める話で時刻の話ではなく、引用より後にある」と一言足し、
     (6) の直しと矛盾して見えないようにした。 */
  sp({
    n: [165, 166, 167, 168], lv: 4, t: ['p7intent'],
    docs: [{
      label: 'Online chat discussion',
      body: [{ t: 'chat', lines: [
        { who: 'Dana Rothwell', time: '07:15', text: 'Morning all — head office has confirmed we\'re moving every store in the district onto the new bean supplier from the second week of next month. Let\'s use this thread to get everyone ready.' },
        { who: 'Grace Redpath', time: '07:17', text: 'Noted. Finance still hasn\'t told us how much we\'ve got to spend on the changeover overall, and I\'d rather not commit to anything beyond the basics until I know.' },
        { who: 'Ola Selkirk', time: '07:20', text: 'Could we get the teams together for a briefing at seven, before the doors open? That would give us a clear hour to run through the new brewing settings.' },
        { who: 'Felix Sandys', time: '07:22', text: 'My stores open at six.' },
        { who: 'Felix Sandys', time: '07:23', text: 'By seven I\'ve already got a queue of customers and no staff free for a briefing.' },
        { who: 'Dana Rothwell', time: '07:25', text: 'Good point — we\'ll run two briefings instead: five o\'clock for Felix\'s group, seven for the rest of us.' },
        { who: 'Grace Redpath', time: '07:27', text: 'That works. I\'ll chase finance again and aim to have an answer by Friday.' },
        { who: 'Ola Selkirk', time: '07:29', text: 'I\'ll ring the new supplier this morning and see if they can bring our first order forward a few days, so we\'re not left short during the changeover week.' },
      ] }],
    }],
    q: [
      { tag: '概要', qid: 'v1q165p', s: 'What are the writers mainly discussing?',
        c: ['Preparations for a seasonal menu launch', 'Preparations for a store renovation',
            'Preparations for a new ordering app', 'Preparations for a change of coffee supplier'],
        a: 3,
        e: '冒頭でデイナ・ロズウェル氏が "head office has confirmed we\'re moving every store in the district onto the new bean supplier from the second week of next month" と伝え、以降のやり取り全体が新しい豆の仕入れ先への切り替えに向けた準備（予算の確認・研修日程の調整・発注の前倒し）について進む。',
        w: ['季節メニューの導入についての言及はチャットのどこにも無い（言及なし）。',
            '店舗改装についての言及はチャットのどこにも無い（言及なし）。',
            '新しい発注アプリについての言及はチャットのどこにも無い（言及なし）。オラ・セルカーク氏が最後に述べる発注は電話で新しい仕入れ先に連絡するという話であり、アプリの導入とは別の話題である。',
            '正解。'] },
      { tag: '詳細', qid: 'v1q166p', s: 'According to the discussion, what does Grace Redpath say she still needs to confirm?',
        c: ['The delivery date for some supplies', 'The total budget for the project',
            'The list of stores taking part', 'The date of a staff briefing'],
        a: 1,
        e: 'グレース・レッドパス氏が "Finance still hasn\'t told us how much we\'ve got to spend on the changeover overall, and I\'d rather not commit to anything beyond the basics until I know." と述べており、切り替え全体にいくら使えるか（総予算）がまだ経理から知らされておらず、それを知るまで基本的な作業以上のことは約束したくないとしている。',
        w: ['納品の日程についてグレース・レッドパス氏は何も述べていない（言及なし）。最初の発注を数日早められないか仕入れ先に確かめると述べているのはオラ・セルカーク氏である（"I\'ll ring the new supplier this morning and see if they can bring our first order forward a few days, so we\'re not left short during the changeover week."）。',
            '正解。',
            '参加する店舗の一覧について、グレース・レッドパス氏は何も述べていない（言及なし）。',
            '研修の日付についてグレース・レッドパス氏は何も述べていない（言及なし）。本文で決まるのは研修の時刻で、グレース氏はそれに "That works." と応じているだけである。'] },
      { tag: '意図', t: ['p7intent'], qid: 'v1q167p', s: 'What does Felix Sandys mean when he writes, "My stores open at six"?',
        c: ['He is confirming that a delivery time will work', 'He is explaining why a proposed time is too late',
            'He is volunteering to start before the others', 'He is saying why he is awake so early'],
        a: 1,
        e: '直前でオラ・セルカーク氏が "Could we get the teams together for a briefing at seven, before the doors open?" と、開店前の7時に研修を行う案を出している。フェリックス・サンディス氏の "My stores open at six." は自分の店が6時に開店するため7時ではすでに遅いことを伝えるものであり、続けて "By seven I\'ve already got a queue of customers and no staff free for a briefing." と、7時には客が並び研修に割ける人手が無いという理由を説明している。',
        w: ['この時点の話題はオラ・セルカーク氏が提案した7時の研修についてであり、納品の時刻についての言及はやりとりのどこにも無い（オラ氏の最後の発言は発注を数日早める話で、時刻の話ではなく、引用より後にある）。',
            '正解。',
            'フェリックス・サンディス氏はこの発言に続けて "By seven I\'ve already got a queue of customers and no staff free for a briefing." と支障を説明しており、デイナ・ロズウェル氏も "we\'ll run two briefings instead: five o\'clock for Felix\'s group, seven for the rest of us." と、彼の店のためだけに別の時刻を設ける形で応じている。自分から先に始めると申し出た発言ではなく、都合が悪いことを伝えて時刻を調整してもらった発言である。',
            '話題は店の開店時刻についてであり、自分が早起きしていることについての言及はどこにも無い。'] },
      { tag: '次の行動', qid: 'v1q168p', s: 'What will Ola Selkirk most likely do next?',
        c: ['Call a supplier about an order', 'Visit one of the stores in person',
            'Share a spreadsheet with the group', 'Write to a manager at head office'],
        a: 0,
        e: 'オラ・セルカーク氏が最後に "I\'ll ring the new supplier this morning and see if they can bring our first order forward a few days, so we\'re not left short during the changeover week." と述べており、新しい仕入れ先に電話して発注を前倒しできないか確認するとしている。',
        w: ['正解。',
            '店舗を訪問するという言及はチャットのどこにも無い（言及なし）。',
            '表計算ファイルを共有するという言及はチャットのどこにも無い（言及なし）。',
            'オラ・セルカーク氏の発言に本社への連絡は無い（言及なし）。経理（finance）に催促すると述べているのはグレース・レッドパス氏である。'] },
    ],
  }),

  /* ── 169–171 手紙 ─────────────────────────────────── */
  /* 「設問を先に作り、正解はくじで決める」方式でユニット全体を書き下ろした。
     stem・4択はメインが凍結し（plans/vol1-final-P7s.txt の v1-p7-169）、
     正解はメインがくじで決定（Q169=C、Q170=D、Q171=D。dice/vol1-r3.txt）。
     旧版の題材・人物名・言い回しは一切流用せず、本文を新規に書き下ろした。
     設問 id は全問新規採番（v1q169p〜v1q171p）。
     申し送り対応：Q170 はオンラインでできることを他国への送金1点だけに絞り、カードリーダーの
     注文・明細の閲覧・面談予約はいずれも言及していない（第3段落の "statement" は請求に
     変更が反映されることを述べるだけで、閲覧手段には触れていない）。Q171 は宛名の住所を書かず
     （vol6-r3.js の手紙と同じく head に住所は置いていない）、自宅か事業所かが推せる情報を
     一切与えていない。
     2026-09-29 監査反映（reviews/vol1-r3-r1.txt）：(1) Q170 の正解の根拠が "payments sent to
     other countries" の逐語だったため、"transfers to accounts overseas" 等の言い換えに
     差し替えた（正誤・(B) の誘いは変わらない）。(2) 手紙の日付（9月3日）に対し「次回の明細」
     では変更がまだ反映されない可能性があったため、"on their statements from then on" に
     直した。(3) head の "Business Banking" が Q171 の正解にのみある語を見出しに含んでいた
     （titleleak）ため、"Sallowfield Bank\n3 September" に削った。(4) 結びが敬称のみ
     （"Ms. Rylance"）で署名の慣例に合わなかったため、名を足して "Morag Rylance" にした
     （grep と names-used.txt で未使用を確認）。いずれも stem・選択肢・正解は変えていない。 */
  sp({
    n: [169, 170, 171], lv: 4,
    docs: [{
      label: 'Letter',
      head: 'Sallowfield Bank\n3 September',
      body: [
        'Dear Mr. Sedley,',
        'I am writing to let you know about some changes we are making to the fees on business current accounts, effective from the start of next month.',
        'The change most likely to affect you concerns transfers to accounts overseas. At present these are charged at a flat rate regardless of the amount; from next month the fee will instead be calculated as a small percentage of each transfer. You can still arrange these transfers yourself at any time through online banking, without needing to visit a branch or call us.',
        'The monthly account-keeping fee itself is staying the same, so for most business customers this will be the only difference they notice on their statements from then on.',
        'Because almost all of your dealings with us over the past year have gone through online banking rather than in person, we wanted to make sure this reached you directly rather than leave you to come across a notice in branch.',
        'If you have any questions about the new charges, please get in touch.',
        'Yours sincerely,\nMorag Rylance\nBranch Manager, Sallowfield Bank',
      ],
    }],
    q: [
      { tag: '概要', qid: 'v1q169p', s: 'What is the purpose of the letter?',
        c: ['To announce that a branch is moving', 'To introduce a new business adviser',
            'To explain a change to account fees', 'To invite Mr. Sedley to a free seminar'],
        a: 2,
        e: '第1段落で "I am writing to let you know about some changes we are making to the fees on business current accounts, effective from the start of next month." と、事業用当座預金口座の手数料の変更を知らせる目的が示されている。',
        w: ['支店の移転についての言及は手紙のどこにも無い（言及なし）。',
            '新しい事業担当アドバイザーの紹介についての言及は手紙のどこにも無い（言及なし）。',
            '正解。',
            '無料セミナーへの招待についての言及は手紙のどこにも無い（言及なし）。'] },
      { tag: '詳細', qid: 'v1q170p', s: 'According to the letter, what can Mr. Sedley do online?',
        c: ['Order a new card reader', 'View his monthly statements',
            'Book a meeting with staff', 'Send payments to other countries'],
        a: 3,
        e: '第2段落に "The change most likely to affect you concerns transfers to accounts overseas." および "You can still arrange these transfers yourself at any time through online banking, without needing to visit a branch or call us." とあり、他国の口座への送金はオンラインバンキングでいつでも自分で手配できるとしている。',
        w: ['カードリーダーの注文についての言及は手紙のどこにも無い（言及なし）。',
            '第3段落の "this will be the only difference they notice on their statements from then on" は、今後の明細に変更が反映されることを述べているだけで、明細をオンラインで閲覧できるという内容ではない。オンラインで行えると明記されているのは他国の口座への送金だけである。',
            'スタッフとの面談予約についての言及は手紙のどこにも無い（言及なし）。',
            '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v1q171p', s: 'What is suggested about Mr. Sedley?',
        c: ['He has been a customer for many years', 'He runs his business from his home',
            'He recently asked about a business loan', 'He usually does his banking online'],
        a: 3,
        e: '第4段落に "Because almost all of your dealings with us over the past year have gone through online banking rather than in person, we wanted to make sure this reached you directly rather than leave you to come across a notice in branch." とあり、直近1年ほぼすべての取引が対面ではなくオンラインバンキングを通じて行われてきたと述べられている。ふだんオンラインで銀行取引をしている、という内容がここから読み取れる。',
        w: ['取引年数についての言及は手紙のどこにも無い（言及なし）。第4段落が述べているのは直近1年間の取引の傾向であり、長年の顧客であるかどうかは分からない。',
            '自宅や事務所の所在についての言及は手紙のどこにも無い（言及なし）。',
            '事業資金の融資についての言及は手紙のどこにも無い（言及なし）。',
            '正解。'] },
    ],
  }),

  /* ── 172–175 報告書（文挿入あり）───────────────── */
  /* 「設問を先に作り、正解はくじで決める」方式でユニット全体を書き下ろした。
     stem・4択・挿入文はメインが凍結し（plans/vol1-final-P7s.txt の v1-p7-172）、
     正解はメインがくじで決定（Q172=D、Q173=B、Q174=位置[1]、Q175=C。dice/vol1-r3.txt）。
     旧版の題材・数値・言い換えは一切流用せず、本文を新規に書き下ろした。
     設問 id は全問新規採番（v1q172p〜v1q175p）。
     Q174 は CLAUDE.md「文挿入の設計」の逆向きの初出違反で正解を [1] に閉じた。取っ手は前方の
     "these suggestions"（直前の提案の列挙〈音声ガイド・馬小屋での催し・土曜の営業時間延長〉を
     受ける照応）と、後方の1文 "Ms. Sturge has already met once …"（短縮形での既出扱い。[1] の
     直後の1文だけに依存する）。[1] 以外に挿入すると、この "Ms. Sturge" の文が本文に一度も
     導入されていない人物を短縮形で指す形になり成り立たない。[2] はさらに直後の "Even so, …"
     が満足度の総括と対比する相手を失い、[3] はさらに直後の "The kitchen garden, by
     contrast, …" が庭の座席不足と対比する相手を失う。[4] は直後の "The working group is
     due to report …" と局所的にはよくつながり、"these suggestions" も言い直し型なので届き
     うる、いちばん引きの強い誤答だが、それでも第2段落の "Ms. Sturge" の文が未紹介のままに
     なるため構造的に成り立たない（"The working group" の文自体は [1] 以外のどの位置に
     挿入しても、それより前に "a working group" が導入されていれば落ちない。落ちるのは
     "Ms. Sturge" の文だけである）。"these suggestions" と "Ms. Sturge" のあいだの区間には
     [1] 以外のマーカーを置いていない。調査の方法（Q172）は第1段落の1箇所のみに書き、見出しに
     Q173 の答え（庭の座席不足）は書いていない。"these suggestions" の中身（音声ガイド・
     馬小屋での催し・土曜の営業時間延長）は Q173 の4本（駐車料金・庭の座席・行列・表示の文字）
     とも Q175 の4本（子ども無料・定休日・ボランティア案内・過去の調査）とも別の話題にしてある。
     2026-09-29 監査反映（reviews/vol1-r3-r1.txt）：(1) Q175 (D)「2年前に類似の調査を実施」が
     致命的に開いていた——第1段落 "this year's visitor survey" と第3段落 "satisfaction
     remained high" が、いずれも過去の同種調査の存在を前提にしており、部分的に推せる状態
     だった。"this year's" を削り、"remained" を "was" に、念のため第5段落の "remain
     popular" も "are clearly popular" に直した（過去の状態を前提にする語を全て除いた）。
     (2) 上記の exp の最終文が「[1] 以外に挿入すると "The working group" の文も未紹介の
     集団を指す」と誤って書いていた（"The working group" の文はどの位置に挿入しても、
     挿入文がそれより前に来るため依存できてしまう。正しくは "Ms. Sturge" の文1本だけが
     全位置を閉じている）。exp と制作コメント（本注記）を書き直した。why[2]（選択肢 [3]）の
     「前段落の "Ms. Sturge…"」も誤り（[3] は第4段落にあり、"Ms. Sturge" は第2段落）だった
     ため「第2段落の」に直し、why[1]・why[2] に "Even so" / "by contrast" の対比が切れる
     という局所的な根拠も追加した。(3) Q172 の正解の根拠 "paper forms" が選択肢 (D) と逐語
     だったため、"printed questionnaires" に言い換えた（正誤・(A) の誘いは変わらない）。
     いずれも stem・選択肢・正解（くじ）は変えていない。
     2026-09-29 第2巡監査反映（reviews/vol1-r23-r2.txt）：(4) 直前の "The working group" の
     依存文についての注記の言い回しを訂正した（誤：「[4] 以外の位置では」／正：「どの位置に
     挿入しても」。The working group の文はどのマーカーよりも後ろにあるため、[4] を含めた
     どの位置に挿入しても依存できてしまう。結論〈閉じているのは "Ms. Sturge" の文だけ〉は
     元から正しい）。(5) "Guided tours of the state rooms"（複数）のあと "the room's
     capacity of twenty" が単数でどの部屋か定まらなかったため、"the tour's limit of
     twenty" に言い換えた。Q174 why[3]・Q175 exp の引用も同期した（正誤・他設問への影響
     なし）。 */
  sp({
    n: [172, 173, 174, 175], lv: 4, t: ['p7ins'],
    docs: [{
      label: 'Report',
      title: 'Visitor Survey: Results and Next Steps',
      head: 'Rushbrook Hall — Report to the Board of Trustees, 9 September',
      body: [
        'This report summarises the results of a visitor survey carried out at Rushbrook Hall to help the trustees plan next season\'s improvements. Between April and June, short printed questionnaires were left on the tables in the tearoom, and visitors were asked to fill one in before leaving the house. A little over four hundred forms came back.',
        'Several respondents also used the comment box on the questionnaire to offer suggestions of their own, among them a recorded audio guide for the state rooms, extra event days in the stable-yard, and longer opening hours for the gift shop on Saturdays. — [[1]] — Ms. Sturge has already met once with the visitor-services and grounds staff to weigh up which of these ideas are practical this year.',
        'Overall satisfaction was high, with nine visitors in ten rating their visit good or excellent. — [[2]] — Even so, the survey pointed to one clear source of frustration that the headline figures do not show.',
        'The concern respondents raised most often was the shortage of seating in the walled garden: on warm afternoons, several visitors said every bench and terrace table was already taken, and some ended up picnicking on the grass or cutting their visit short. — [[3]] — The kitchen garden, by contrast, drew many positive comments throughout the season.',
        'Guided tours of the state rooms are clearly popular: on the two afternoons a week when a volunteer leads one, numbers regularly reach the tour\'s limit of twenty, well above the numbers on other afternoons when no tour runs. — [[4]] — The working group is due to report its recommendations to the trustees before the next quarterly meeting.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v1q172p', s: 'According to the report, how was the survey carried out?',
        c: ['Through tablets placed near the exit', 'Through e-mails sent to ticket buyers',
            'Through interviews in the entrance hall', 'Through paper forms left in the tearoom'],
        a: 3,
        e: '第1段落に "Between April and June, short printed questionnaires were left on the tables in the tearoom, and visitors were asked to fill one in before leaving the house." とあり、ティールームのテーブルに置いた紙の用紙に記入してもらう方式で調査を行ったとしている。',
        w: ['出口付近のタブレット端末についての言及は報告書のどこにも無い（言及なし）。',
            'チケット購入者へのメール送付についての言及は報告書のどこにも無い（言及なし）。',
            'エントランスホールでの聞き取りについての言及は報告書のどこにも無い（言及なし）。',
            '正解。'] },
      { tag: '詳細', qid: 'v1q173p', s: 'What problem did respondents mention most often?',
        c: ['The cost of parking near the house', 'The lack of seating in the gardens',
            'The length of the queue for tickets', 'The size of the text on signs'],
        a: 1,
        e: '第4段落に "The concern respondents raised most often was the shortage of seating in the walled garden: on warm afternoons, several visitors said every bench and terrace table was already taken, and some ended up picnicking on the grass or cutting their visit short." とあり、回答者が最も多く挙げた不満は庭の座席不足だとしている。',
        w: ['駐車料金についての言及は報告書のどこにも無い（言及なし）。',
            '正解。',
            'チケットの行列についての言及は報告書のどこにも無い（言及なし）。',
            '案内表示の文字の大きさについての言及は報告書のどこにも無い（言及なし）。'] },
      { tag: '位置選択', qid: 'v1q174p', t: ['p7ins'], insertAt: 1,
        sentence: 'Ms. Rosamund Sturge, the house manager, has agreed to lead a working group on these suggestions.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"Ms. Rosamund Sturge, the house manager, has agreed to lead a working group on these suggestions."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 0,
        e: '挿入文はロザムンド・スタージ氏をフルネームで初めて導入し、"these suggestions" で直前の内容を受ける。[1] の直前は "Several respondents also used the comment box on the questionnaire to offer suggestions of their own, among them a recorded audio guide for the state rooms, extra event days in the stable-yard, and longer opening hours for the gift shop on Saturdays." であり、回答者が寄せた提案をまとめている。挿入文の直後には短縮形の "Ms. Sturge" で受ける "Ms. Sturge has already met once with the visitor-services and grounds staff to weigh up which of these ideas are practical this year." が続き、位置関係が一致する。[1] 以外に挿入すると、[1] の直後のこの "Ms. Sturge has already met once with the visitor-services and grounds staff to weigh up which of these ideas are practical this year." が、まだ紹介されていない人物を短縮形で指し、そのあとでフルネームと肩書きによる紹介が来る順序になってしまう。',
        w: ['正解。直前で回答者から寄せられた具体的な提案（音声ガイド・馬小屋での催し・土曜の営業時間延長）がまとめられており、挿入文の "these suggestions" がこれを受ける。挿入文の直後は "Ms. Sturge has already met once with the visitor-services and grounds staff to weigh up which of these ideas are practical this year." と、挿入文で初めて導入される "Ms. Rosamund Sturge" を短縮形で受けており、位置関係が一致する。',
            '[2] の直前は "Overall satisfaction was high, with nine visitors in ten rating their visit good or excellent." という満足度の総括であり、"these suggestions" が指せる提案の記述が直前に無い。ここに挿入すると、直後の "Even so, the survey pointed to one clear source of frustration that the headline figures do not show." が満足度の総括と対比する相手を失う。さらに、第2段落末の "Ms. Sturge has already met once with the visitor-services and grounds staff to weigh up which of these ideas are practical this year." が、本文にまだ一度も登場していない人物を短縮形で指すことになり成り立たない。',
            '[3] の直前は "on warm afternoons, several visitors said every bench and terrace table was already taken, and some ended up picnicking on the grass or cutting their visit short." という庭の座席不足の記述であり、"these suggestions" が指す提案の内容とは無関係である。ここに挿入すると、直後の "The kitchen garden, by contrast, drew many positive comments throughout the season." が対比する相手（座席不足の苦情）を失う。さらに、第2段落の "Ms. Sturge has already met once with the visitor-services and grounds staff to weigh up which of these ideas are practical this year." が未紹介の人物を短縮形で指す状態は解消しない。',
            '[4] の直前は "numbers regularly reach the tour\'s limit of twenty, well above the numbers on other afternoons when no tour runs." というガイドツアーの人数についての記述であり、"these suggestions" が指す提案の内容とは無関係である。ここに挿入すると "The working group is due to report its recommendations to the trustees before the next quarterly meeting." の直前には来るが、それより前にある "Ms. Sturge has already met once with the visitor-services and grounds staff to weigh up which of these ideas are practical this year." は依然として未紹介の人物を短縮形で指したままであり、報告書全体としては成り立たない。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v1q175p', s: 'What is suggested about Rushbrook Hall?',
        c: ['It lets children enter free of charge', 'It closes to the public one day a week',
            'It uses volunteers to lead guided tours', 'It held a similar survey two years ago'],
        a: 2,
        e: '最終段落に "Guided tours of the state rooms are clearly popular: on the two afternoons a week when a volunteer leads one, numbers regularly reach the tour\'s limit of twenty, well above the numbers on other afternoons when no tour runs." とあり、週に2回、ボランティアがガイドツアーを担当する午後に人数が集まるとしている。ガイドツアーをボランティアが率いていることがここから読み取れる。',
        w: ['子どもの無料入館についての言及は報告書のどこにも無い（言及なし）。',
            '定休日についての言及は報告書のどこにも無い（言及なし）。ガイドツアーが行われるのは週2回の午後という記述であり、休館日を述べたものではない。',
            '正解。',
            '過去の調査についての言及は報告書のどこにも無い（言及なし）。'] },
    ],
  }),
];
