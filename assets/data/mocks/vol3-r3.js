/* =============================================================
   予想模試 Vol.3 — Part 7 単一文書 後半（No.165–175）
   リーディング高負荷回。
   ============================================================= */

const sp = (o) => ({
  id: `v3-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。 */
    id: x.qid || `v3q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7detail'], tag: x.tag,
    insertAt: x.insertAt, sentence: x.sentence,
  })),
});

export const R3 = [

  /* ── 165–168 オンラインチャット ──────────────────── */
  /* 「設問を先に作り、正解はくじで決める」方式でユニット全体を書き下ろした。
     stem・4択はメインが凍結し（plans/vol3-final-P7s.txt の v3-p7-165）、
     正解はメインがくじで決定（Q165=A、Q166=B、Q167=D、Q168=B。dice/vol3-r3.txt）。
     旧版の題材・人物名・言い回しは一切流用せず、本文を新規に書き下ろした。
     設問 id は全問新規採番（v3q165p〜v3q168p）。
     申し送り対応：チャットの曜日は「It's Thursday already.」で本文中に固定した。Q166 の引用の
     直前（10:07 のエズミの発言）は「その日のうちにデザイナーに差し替えを頼めるか」という1つの
     依頼だけに絞り、ファイルの送付や打ち合わせの話題はこの発言には含めていない。Q167 の依頼
     （フリーランス連絡先の更新）は Q166 とは別の話題として10:15 に切り出し、Corentin から Esme
     への依頼（Q166(D)の型）とは方向を取り違えないようにした。Q168 は10:05 のコレンタンの発言
     だけが根拠になるようにし、刊行間隔・移転・記念号には一切触れていない。
     2026-09-29 監査反映（reviews/vol3-r3-r1.txt）：(1) Q166 の10:11「I keep forgetting it's
     only Thursday.」は「まだ木曜（週末は先）」の意味で、正解の「出勤日を過ぎている」と逆向き
     だったため、「I'd lost track of the days. It's Thursday already.」に直した（曜日が
     すでに過ぎている向きに統一）。あわせて exp の引用を差し替え、why[0]（(A)）の「まだ着手
     されていない作業についての言及は無く」という記述が10:07の差し替え依頼と矛盾していたため、
     「レイアウトは仕上がっていて、差し替えはその場で新たに頼まれたもの」という趣旨に書き直し、
     why[3]（(D)）も「出勤日を伝えているだけ」という、正解の「断っている」と食い違って読める
     書き方から「言及なし」に直した。(2) Q168 の根拠だった10:17「since almost all of our
     copies go straight to subscribers rather than newsstands」は、正解を立てるためだけの文
     であるうえ、10:05の「newsstand thumbnail」（店頭での見え方を表紙選びの理由にする発言）と
     逆向きにぶつかっていたため、10:17の当該文を削除し、10:05を「Nearly every copy goes out
     by post to readers who've paid for the year in advance, so the cover can afford a
     quieter image like that one.」に差し替えて、表紙選びの理由として定期購読中心であることを
     示す形にした（本文なし・見出しだけ・他設問込み・常識だけ・矛盾箇所の引用の5通りで試行し、
     新しい第二の正解・抜け道が生じないことを確認済み）。exp も新しい引用に合わせた。
     (3) Q167 の why[0]・why[1] は「言及なし」で閉じていたが、印刷会社の確認・カメラマンへの
     連絡はいずれも本文に登場していたため、それぞれ「コレンタンが自分から確認すると言っている
     だけ」「昨日すでに試みたことで、頼んでいるのは電話番号の修正」と、本文の記述を名指しする
     形に書き直した。
     2026-09-29 第2巡監査反映（reviews/vol3-r23-r2.txt）：Q168 exp の「雑誌のほとんどの号が」
     は誤訳（copy は部数・冊で、号は issue）だったため、「発行部数のほぼすべてが」に直した。 */
  sp({
    n: [165, 166, 167, 168], lv: 4, t: ['p7intent'],
    docs: [{
      label: 'Online chat discussion',
      body: [{ t: 'chat', lines: [
        { who: 'Esme Rudling', time: '10:02', text: 'Corentin, I\'ve just seen the layout with the harbour shot on the cover, and I still think the café terrace photo works better for the next issue of Skelmoor Traveller.' },
        { who: 'Corentin Rilston', time: '10:05', text: 'I actually prefer the harbour shot myself. Nearly every copy goes out by post to readers who\'ve paid for the year in advance, so the cover can afford a quieter image like that one.' },
        { who: 'Esme Rudling', time: '10:07', text: 'Could you get the designer to swap in the café terrace shot today, just so I can compare the two side by side before the proof goes to the printer tomorrow morning?' },
        { who: 'Corentin Rilston', time: '10:09', text: 'The designer works Mondays and Tuesdays.' },
        { who: 'Esme Rudling', time: '10:11', text: 'Of course — I\'d lost track of the days. It\'s Thursday already. Let\'s leave the harbour shot as it is, then. There\'s no time to try another version before the deadline.' },
        { who: 'Corentin Rilston', time: '10:13', text: 'Agreed. I\'ll confirm with the printer that the harbour shot is final.' },
        { who: 'Esme Rudling', time: '10:15', text: 'Thanks. Also, could you go through our freelance photographers\' details and fix the two phone numbers that changed? Nobody could reach one of them yesterday about the walking-trails piece.' },
        { who: 'Corentin Rilston', time: '10:17', text: 'Sure, I\'ll sort out the numbers this afternoon.' },
      ] }],
    }],
    q: [
      { tag: '概要', qid: 'v3q165p', s: 'What is the online chat discussion mainly about?',
        c: ['Choosing an image for the next cover', 'Shortening an article to fit its space',
            'Checking facts in a restaurant guide', 'Preparing a list of reader prize winners'],
        a: 0,
        e: '冒頭でエズミが "I still think the café terrace photo works better for the next issue of Skelmoor Traveller." と述べ、以降のやり取りも同じ表紙用の写真をめぐる話し合いとして進み、最終的にハーバーの写真を採用することで一致している。したがって、このチャットの主題は次号の表紙に使う画像を選ぶことである。',
        w: ['正解。',
            '記事を短縮するという話題はチャットのどこにも無い（言及なし）。',
            'レストランガイドの事実確認についての言及はチャットのどこにも無い（言及なし）。',
            '読者向け賞品の当選者リストについての言及はチャットのどこにも無い（言及なし）。'] },
      { tag: '意図', t: ['p7intent'], qid: 'v3q166p',
        s: 'What does Corentin most likely mean when he writes, "The designer works Mondays and Tuesdays"?',
        c: ['He is explaining why some work is unfinished', 'He is turning down a request for changes',
            'He is agreeing to move a meeting to tomorrow', 'He is asking Esme to send some files sooner'],
        a: 1,
        e: '直前でエズミが "Could you get the designer to swap in the café terrace shot today, just so I can compare the two side by side before the proof goes to the printer tomorrow morning?" と、今日中にデザイナーに差し替えを頼めないか尋ねている。それに対しコレンタンが "The designer works Mondays and Tuesdays." と答えており、デザイナーの出勤日が月曜と火曜に限られることを理由に、その依頼を断る趣旨である。続けてエズミも "It\'s Thursday already." と応じ、ハーバーの写真のままにすると決めており、依頼が通らなかったことを裏付ける。',
        w: ['頼んであった作業の遅れを説明するという読みは、その作業がまだ終わっていないことが前提になる。レイアウトは "I\'ve just seen the layout with the harbour shot on the cover" のとおり仕上がっていて、差し替えは10:07にその場で新たに頼まれたもの。終わっていない作業の理由を説明する場面は無い。',
            '正解。',
            '打ち合わせについての言及はチャットのどこにも無い（言及なし）。',
            'ファイルの送付はチャットのどこにも出てこない（言及なし）。'] },
      { tag: '詳細', qid: 'v3q167p', s: 'According to the chat, what does Esme ask Corentin to do?',
        c: ['Forward an e-mail from the printer', 'Ring a photographer about an invoice',
            'Collect some samples from reception', 'Update a list of freelance contacts'],
        a: 3,
        e: 'エズミが "could you go through our freelance photographers\' details and fix the two phone numbers that changed?" と、フリーランスの連絡先情報を修正するよう頼んでいる。',
        w: ['印刷会社は10:13にコレンタンが自分から確認すると言っているだけで、メールの転送は頼まれていない。',
            'カメラマンへの連絡は10:15の "Nobody could reach one of them yesterday about the walking-trails piece." に出るが、昨日すでに試みたことで、エズミが頼んでいるのは電話番号の修正。請求書には触れていない。',
            '受付でのサンプル受け取りについての言及はチャットのどこにも無い（言及なし）。',
            '正解。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v3q168p', s: 'What is suggested about Skelmoor Traveller?',
        c: ['It comes out every two months', 'It is sold mainly by subscription',
            'It recently moved to new premises', 'It is planning a special anniversary issue'],
        a: 1,
        e: 'コレンタンが10:05で "Nearly every copy goes out by post to readers who\'ve paid for the year in advance, so the cover can afford a quieter image like that one." と述べており、発行部数のほぼすべてが、1年分を前払いした読者に郵送されている、つまり雑誌の大半が定期購読で売られていることが読み取れる。',
        w: ['刊行の間隔についての言及はチャットのどこにも無い（言及なし）。',
            '正解。',
            '移転についての言及はチャットのどこにも無い（言及なし）。',
            '記念号についての言及はチャットのどこにも無い（言及なし）。'] },
    ],
  }),

  /* ── 169–171 手紙 ─────────────────────────────────── */
  /* 「設問を先に作り、正解はくじで決める」方式でユニット全体を書き下ろした。
     stem・4択はメインが凍結し（plans/vol3-final-P7s.txt の v3-p7-169）、
     正解はメインがくじで決定（Q169=B、Q170=B、Q171=A。dice/vol3-r3.txt）。
     旧版の題材・人物名・言い回しは一切流用せず、本文を新規に書き下ろした。
     設問 id は全問新規採番（v3q169p〜v3q171p）。
     申し送り対応：手紙の用件は古い写真の提供を尋ねる1点のみとした。写真を求める文脈は
     「創立60周年の記念展示」であり、協会自身の出版物のためとは書いていない
     （Q171(B) の「書籍を出版している」が推せないようにするため）。定例会の曜日は
     「第2水曜日」の1か所だけとし、特定の会合日は書いていない。宛先の住所は本文に書かず、
     近隣の村を示唆する記述も置いていない（Q171(C) 対策）。会場は Stavenhall Community Centre
     とし、図書館という語は使っていない（Q171(D) 対策）。
     2026-09-29 監査反映（reviews/vol3-r3-r1.txt）：(1) exp・why の段落番号が、宛名
     "Dear Mr. Stobart," を第1段落に数えて1つずれていたため、宛名を数えない数え方
     （第2→第1、第3→第2、第4→第3）に直した。(2) 第1段落の "This year marks sixty years
     since a small group of local residents founded the society in 1964" は、"1964" と
     "sixty years" の両方を書いたことで手紙の年が2024年に固定され、かつ founded がほぼ逐語で
     Q171(A) が推測にならず lv3 に寄っていたため、"The society turns sixty this spring" に
     直した（60周年という事実は変えず、年の固定と逐語性だけを外した）。Q169・Q171 の exp の
     引用をこれに合わせて差し替えた。 */
  sp({
    n: [169, 170, 171], lv: 4,
    docs: [{
      label: 'Letter',
      head: 'Stavenhall Local History Society\n14 March',
      body: [
        'Dear Mr. Stobart,',
        'The society turns sixty this spring, and we are putting together a short display of old photographs in the town hall foyer to mark the occasion.',
        'While going through the archive, we found several later views of the market square but nothing from before the war, and I recall that your grandfather ran a photography studio on the high street in those years. Do you happen to have kept any of his prints of the square, or of the old corn exchange before it was pulled down? Even a single print, loaned just long enough for us to make a copy, would fill a real gap in the display.',
        'If it helps, you are welcome to bring anything you find along to one of our meetings — we gather on the second Wednesday of the month at the Stavenhall Community Centre — or I would be glad to call at your house myself, whichever suits you better.',
        'The display goes up in early May, so it would help greatly if you could let me know either way by the middle of April.',
        'Yours sincerely,\nOttoline Ramscar\nHonorary Secretary, Stavenhall Local History Society',
      ],
    }],
    q: [
      { tag: '概要', qid: 'v3q169p', s: 'What is the purpose of the letter?',
        c: ['To confirm Mr. Stobart\'s place on a coach trip', 'To ask Mr. Stobart about an old photograph',
            'To tell Mr. Stobart the outcome of a vote', 'To apologize to Mr. Stobart for a billing error'],
        a: 1,
        e: '第1段落で "we are putting together a short display of old photographs in the town hall foyer to mark the occasion" とあり、続く第2段落で "Do you happen to have kept any of his prints of the square, or of the old corn exchange before it was pulled down?" と、差出人がストーバート氏の祖父が撮った古い写真を持っていないか尋ねている。手紙全体はこの依頼のために書かれている。',
        w: ['バスツアーの座席についての言及は手紙のどこにも無い（言及なし）。',
            '正解。',
            '投票結果についての言及は手紙のどこにも無い（言及なし）。',
            '請求の誤りについての言及は手紙のどこにも無い（言及なし）。'] },
      { tag: '詳細', qid: 'v3q170p', s: 'According to the letter, when does the society usually meet?',
        c: ['On the first Tuesday of each month', 'On the second Wednesday of each month',
            'On the third Thursday of each month', 'On the last Friday of each month'],
        a: 1,
        e: '第3段落に "we gather on the second Wednesday of the month at the Stavenhall Community Centre" とあり、協会は毎月第2水曜日に集まるとしている。',
        w: ['第1火曜という記述は手紙のどこにも無い（言及なし）。',
            '正解。',
            '第3木曜という記述は手紙のどこにも無い（言及なし）。',
            '最終金曜という記述は手紙のどこにも無い（言及なし）。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v3q171p', s: 'What is suggested about the Stavenhall Local History Society?',
        c: ['It was founded more than fifty years ago', 'It publishes books about the town\'s history',
            'It has members from several nearby villages', 'It holds its meetings at the town library'],
        a: 0,
        e: '第1段落に "The society turns sixty this spring" とあり、協会が今年で60歳になるとしている。60年は50年を超えているので、この選択肢が読み取れる。',
        w: ['正解。',
            '協会が書籍を出版しているという記述は手紙のどこにも無い（言及なし）。第1段落が触れているのは写真の展示であり、出版物ではない。',
            '近隣の村の会員についての言及は手紙のどこにも無い（言及なし）。',
            '会合の会場は第3段落で "the Stavenhall Community Centre" と明記されており、図書館という記述はどこにも無い。'] },
    ],
  }),

  /* ── 172–175 掲示（文挿入あり）──────────────────── */
  /* 「設問を先に作り、正解はくじで決める」方式でユニット全体を書き下ろした。
     stem・4択・挿入文はメインが凍結し（plans/vol3-final-P7s.txt の v3-p7-172）、
     正解はメインがくじで決定（Q172=D、Q173=B、Q174=位置[2]、Q175=C。dice/vol3-r3.txt）。
     旧版の題材・数値・言い換えは一切流用せず、本文を新規に書き下ろした。
     設問 id は全問新規採番（v3q172p〜v3q175p）。
     Q174 は取っ手を2つ用意して位置[2]に閉じた。
     ①前方：第4段落冒頭の "Several residents on the two upper floors asked the committee
     whether quiet hours could be introduced during the exam period, when noise from the next
     room was making it hard to study in the evenings." を、挿入文の "That request" が受ける
     唯一の先行文とし、これより前（[1]）には要望についての記述を一切置いていない。
     ②後方：挿入文が 'Quiet Corridor' という名称を引用符付きで初めて導入するので、[2] の直後の
     一文（第4段落末尾の "Quiet Corridor will run from nine in the evening until eight the next
     morning, …"）だけがこの名称を引用符なしの既出として使い、[3][4] はこの既出扱いの一文より
     後ろに位置するため、そこに挿入すると名称を二度初めて導入する形になり成り立たない。
     要望の文と[2]のあいだ、[2]と既出扱いの一文のあいだには他のマーカーを置いていない。
     来客の変更理由（避難経路の混雑）と台所の変更（オンライン予約）はそれぞれ1点のみとし、
     request/requested/asked for は第4段落の要望文以外では使っていない。Q175 の寮長交代は
     くじの (C) に合わせ、新入生比率・値上げには一切触れていない。
     2026-09-29 監査反映（reviews/vol3-r3-r1.txt）：(1) Q172 の第2段落1文目にあった
     "the side door next to the bicycle sheds" の "next to the bicycle sheds" が、Q175(B)
     「駐輪スペースの増設」に触れる語になっていた（本コメントの旧版が「駐輪場には一切触れて
     いない」と書いていたのは事実と違った）ため、"the door at the rear of the building" に
     差し替えて駐輪場への言及を無くした。あわせて同段落末尾の "A member of staff will be at
     the side door each evening to let guests in." は、混雑の時間帯（朝、講義に出る時間）と
     職員がいる時間帯（夕方）が噛み合わず、(A)「受付での登録」の話題にも寄っていたため削除した。
     why[2]（(C)）の「同居人」は誤訳（host は来客を招いた居住者）だったため「来客が招いた
     居住者（ホスト）」に直した。(2) Q173 の why[3]（(D)）が「第1段落・第3段落とも引き続き
     1階にある」という、移転を否定する根拠にならない書き方だったため「台所についての変更は
     第3段落の予約制だけで、移転の記述は無い（言及なし）」に直した。(3) Q175 の根拠だった
     第5段落1文目 "I took up the post of hall warden at the start of this term, after my
     predecessor moved to a post at another hall" は、正解 (C) の "is undergoing a change"
     （進行中）に対し交代がすでに済んだ相で書かれていたため、"I am taking over as hall warden
     this term from my predecessor, who has moved to a post at another hall" に直し、
     交代が進行中の相に揃えた（Q174 why[2] の引用も合わせて差し替えた）。(4) 上記(1)(3)の
     修正後も、Q174 の4か所の判定は変わらない：[1] は要望の先行文が無く不成立のまま、[2] は
     要望文の直後で指示対象が定まり、[3][4] は 'Quiet Corridor' がすでに引用符なしで既出の
     あとに位置するため、いずれも不成立のまま。(1)の修正で本文は約297語になった。
     2026-09-29 第2巡監査反映（reviews/vol3-r23-r2.txt）：全巻の曜日つき日付を2026年想定で
     機械照合した結果、"from Monday, 10 February" が2026年では火曜（2026年2月10日は火曜、
     9日が月曜）で不一致だったため、"from Monday, 9 February" に直した。Q174 why[0] が同じ
     文を引用していたため、そちらも合わせて差し替えた。掲示の日付 "3 February"（2026年で火曜）
     は変更前の日付であり不一致は無いためそのままとした。選択肢に曜日・日付は無く、
     Q174 の4か所の判定にも影響しない（[1] の直前に要望が無いことは変わらない）。 */
  sp({
    n: [172, 173, 174, 175], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Notice',
      title: 'Hall Updates for This Term',
      head: 'Rendwick Hall — Notice from the Warden, 3 February',
      body: [
        'Rendwick Hall will introduce a number of changes from Monday, 9 February, following the review the committee carries out at the start of each term. — [[1]] — The points below cover guests, the ground-floor kitchen, and the two upper floors.',
        'From that date, all guests must come in through the door at the rear of the building rather than through the main lobby. The change follows a fire-exit review, which found the lobby stairwell became crowded whenever a guest arrived just as residents were leaving for lectures.',
        'The kitchen will change too: residents will reserve a cooking slot in advance through the hall\'s online portal, rather than simply turning up whenever they like.',
        'Several residents on the two upper floors asked the committee whether quiet hours could be introduced during the exam period, when noise from the next room was making it hard to study in the evenings. — [[2]] — Quiet Corridor will run from nine in the evening until eight the next morning, and residents on those floors should keep music and conversation in the corridors to a minimum during those hours.',
        'I am taking over as hall warden this term from my predecessor, who has moved to a post at another hall, and I am happy to answer any questions about these changes at the hall office. — [[3]] — I will also hold a drop-in session in the common room next month for anyone who would rather talk in person.',
        'Printed copies of this notice are on the board on each floor, and a copy has also been sent to every resident\'s university e-mail address. — [[4]] — Please check the board for updates.',
        'Greta Sayward\nHall Warden, Rendwick Hall',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v3q172p', s: 'According to the notice, what change is being made to the guest policy?',
        c: ['Guests will need to register at the front desk', 'Guests will need to leave the building by midnight',
            'Guests will need to stay with their host', 'Guests will need to use a separate entrance'],
        a: 3,
        e: '第2段落に "all guests must come in through the door at the rear of the building rather than through the main lobby" とあり、来客は正面ロビーではなく別の出入り口を使うことになるとしている。',
        w: ['受付での登録についての言及は掲示のどこにも無い（言及なし）。',
            '門限についての言及は掲示のどこにも無い（言及なし）。',
            '来客が招いた居住者（ホスト）と一緒にいなければならない、という記述は無い（言及なし）。',
            '正解。'] },
      { tag: '詳細', qid: 'v3q173p', s: 'What does the notice say about the kitchen on the ground floor?',
        c: ['It will close for cleaning on Sunday mornings', 'It will use a new booking system',
            'It will get two additional cookers', 'It will move to a larger room nearby'],
        a: 1,
        e: '第3段落に "residents will reserve a cooking slot in advance through the hall\'s online portal, rather than simply turning up whenever they like" とあり、台所の利用が事前予約の方式に変わるとしている。',
        w: ['日曜午前の清掃についての言及は掲示のどこにも無い（言及なし）。',
            '正解。',
            'コンロの増設についての言及は掲示のどこにも無い（言及なし）。',
            '台所についての変更は第3段落の予約制だけで、移転の記述は無い（言及なし）。'] },
      { tag: '位置選択', qid: 'v3q174p', t: ['p7ins'], insertAt: 2,
        sentence: 'That request led the hall committee to trial a new scheme, called \'Quiet Corridor,\' on the two upper floors.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"That request led the hall committee to trial a new scheme, called \'Quiet Corridor,\' on the two upper floors."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 1,
        e: '挿入文の "That request" は、直前で述べられた居住者からの要望 — "Several residents on the two upper floors asked the committee whether quiet hours could be introduced during the exam period, when noise from the next room was making it hard to study in the evenings." — を受ける。この文は [2] の直前にのみ置かれているので、[2] に挿入すると指示対象が定まる。挿入文の直後には "Quiet Corridor will run from nine in the evening until eight the next morning, and residents on those floors should keep music and conversation in the corridors to a minimum during those hours." が続き、挿入文で初めて引用符付きで導入された \'Quiet Corridor\' という名称を、既出のものとして引用符なしで受けている。[1] の直前には居住者からの要望についての記述が無く、"That request" の指示対象が無い。[3][4] は、この既出の名称を含む一文がすでに[2]の直後に置かれているため、そこに挿入すると \'Quiet Corridor\' という名称を、一度既知のものとして使ったあとでもう一度初めて導入する形になり、成り立たない。',
        w: ['[1] の直前は "Rendwick Hall will introduce a number of changes from Monday, 9 February, following the review the committee carries out at the start of each term." という掲示全体の導入であり、居住者からの要望についての記述が無い。"That request" が指す先行詞が無いため、ここには置けない。',
            '正解。',
            '[3] の直前は "I am taking over as hall warden this term from my predecessor, who has moved to a post at another hall, and I am happy to answer any questions about these changes at the hall office." という寮長自身の紹介であり、居住者からの要望についての記述ではない。加えて、[2] の直後にはすでに \'Quiet Corridor\' という名称が引用符なしで登場しており、ここに挿入すると、既知のものとして使ったあとの位置でもう一度その名称を初めて導入する形になり成り立たない。',
            '[4] の直前は "Printed copies of this notice are on the board on each floor, and a copy has also been sent to every resident\'s university e-mail address." という掲示の掲出方法についての記述であり、居住者からの要望についての記述ではない。[3] と同様、この位置もすでに \'Quiet Corridor\' という名称が引用符なしで使われたあとに来るため、もう一度初めて導入する形になり成り立たない。'] },
      { tag: '推測', t: ['p7inf'], qid: 'v3q175p', s: 'What can be inferred about Rendwick Hall?',
        c: ['It houses mainly students in their first year', 'It has recently added extra bicycle storage',
            'It is undergoing a change in on-site management', 'It plans to raise its fees next year'],
        a: 2,
        e: '第5段落に "I am taking over as hall warden this term from my predecessor, who has moved to a post at another hall" とあり、寮長が今学期、交代の最中であることが読み取れる。',
        w: ['新入生が中心という記述は掲示のどこにも無い（言及なし）。',
            '駐輪スペースの増設についての言及は掲示のどこにも無い（言及なし）。',
            '正解。',
            '来年度の値上げについての言及は掲示のどこにも無い（言及なし）。'] },
    ],
  }),
];
