/* =============================================================
   予想模試 Vol.2 — Part 3 前半（No.32–52）
   ============================================================= */

/* `sid` / `qid` は id の明示指定。中身を差し替えたユニット・設問は
   SRS の履歴を引き継がせないため、通し番号由来の既定 id ではなく
   新しい id を与える（`no` は 1〜200 の連番なので絶対に変えない）。 */
const set = (o) => ({
  id: o.sid || `v2-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v2q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2A = [

  /* 2026-09-29 先読み対策（設問先行・正解くじ）方式で本文を新規に書き下ろした。
     stem・4択は plans/vol2-final-P3.txt の凍結案のまま1字も変えておらず、並び順の
     入れ替えも行っていない。正解は dice/vol2-l2a.txt のとおり：
     32=C, 33=C, 34=C, 35=D, 36=C, 37=D, 38=C, 39=C, 40=D, 41=D, 42=C, 43=C,
     44=D, 45=D, 46=D, 47=A, 48=A, 49=D, 50=D, 51=D, 52=A。
     正解位置の検査（A〜F）で警告が出ても、ここでは並びを変えていない（メインの担当）。
     2026-09-29 追記：第1巡監査（reviews/vol2-l2a-r1.txt）で致命的2件（38–40 の
     Q38・Q40）・要修正15件が指摘され、全ユニットの本文を書き直した（詳細は各
     ユニットの注記）。level（lv）は監査後の見立てに合わせて動かさず、メインが
     一括で付け直す方針のため据え置いている。
     2026-09-29 追記2：第2巡監査（reviews/vol2-l2a-r2.txt）は本文に第二の正解・
     事実の食い違いなしと判定。残りは解説3件（Q32 why[3]・Q43 why[1]・Q50 why[0]）・
     ja1件（38–40）・話者ロール2件（47–49 を W-Cn に、50–52 を W-Br に入れ替え）・
     軽微8件で、すべて反映した。本文の文言は役の入れ替えに伴う47–49の1行目以外
     変えていない。 */

  /* ── 32–34 ────────────────────────────────────────────── */
  /* 2026-09-29 第1巡監査反映：引用 "This is the second time I've come in for it" の
     it の指す先が同じ話者の続きの文（今回のヒンジの件）とぶつかっていたのと、意図の読みが
     直後の文（男性への説明お断り）ではなく直前の文脈で決まるように、場面を書き直した
     （男性が『説明しましょう』と申し出た直後に『結構です、前も同じことがあって同じやり方で
     直してもらったので』と続く形にした）。Q33 の『hinge』・Q34 の『loaner』も言い換えて
     逐語一致を外した。 */
  set({
    n: [32, 33, 34], lv: 4,
    s: [
      { role: 'M-Am', text: 'Hi there, what can I help you with today?' },
      { role: 'W-Br', text: 'Hi — the tiny screw where the left arm folds keeps working its way out. I can feel the arm wobbling whenever I take them off.' },
      { role: 'M-Am', text: 'Let me take a look... ah, I\'m afraid it\'s more than that. The thread inside that joint is worn smooth, so just tightening the screw won\'t hold for long. The frame will have to go to our workshop for about a week, and we\'d put your lenses in a spare frame meanwhile. I\'ll just explain how that works.' },
      { role: 'W-Br', text: 'That\'s fine. This is the second time I\'ve come in for it — the same thing happened with my old pair a couple of years ago, and you sorted it the same way.' },
      { role: 'M-Am', text: 'Great. Then let me bring out a few spare frames in a shape close to yours, and you can choose the one you like.' },
      { role: 'W-Br', text: 'Perfect, thank you.' },
    ],
    ja: '女性客が、左腕の付け根の小さなねじがゆるんで抜けかけている眼鏡を持って来店する。男性スタッフが確認すると、その関節内のねじ山がすり減っており、締め直すだけでは長く持たないと分かる。フレームは1週間ほど工房に預ける必要があり、その間はレンズを予備のフレームに移すことになるといい、やり方を説明しようとする。女性は「これで2度目」だと述べ、数年前にも別の古い眼鏡で同じことがあり、同じやり方で直してもらった経験があるので説明はいらないと伝える。男性は形の近い予備のフレームをいくつか持ってきて、女性に選んでもらうことにする。',
    v: [['thread (of a screw)', 'ねじ山'], ['worn smooth', 'すり減ってなめらかになる（＝ねじ山がつぶれる）'], ['spare frame', '予備のフレーム']],
    q: [
      { tag: '意図', qid: 'v2q32p', t: ['p3int'], s: 'Why does the woman say, "This is the second time I\'ve come in for it"?',
        c: ['To object to paying a fee.', 'To ask him to speed up the job.', 'To indicate that she knows the procedure.', 'To doubt that a simple fix will hold.'],
        a: 2,
        e: '男性が「フレームを預かり、その間レンズを予備のフレームに移す。そのやり方を説明します」と申し出た直後の発言。女性は "That\'s fine" と断り、続けて "the same thing happened with my old pair a couple of years ago, and you sorted it the same way" と述べ、以前も同じやり方で直してもらった経験があることを理由に、説明が要らないと伝えている。',
        w: ['料金についての言及は会話のどこにも出てこない。',
              '急がせる発言は無い。男性が示した工房での期間（"about a week"）に、女性は "That\'s fine" と答えて異を唱えていない。続く発言も前回の経験の話である。',
              '正解。女性は続けて "the same thing happened with my old pair a couple of years ago, and you sorted it the same way" と述べ、以前も同じやり方で直してもらった経験があることを示し、男性の説明を断っている。',
              '簡単な直しで持つかを疑う発言は、女性には無い。簡単な直しが持たないことは、女性が話す前に男性が "just tightening the screw won\'t hold for long" と述べて退けている。女性が続けて挙げる前回の経験も "the same thing happened with my old pair a couple of years ago, and you sorted it the same way" で、別の眼鏡が同じやり方（工房での修理）で直った話である。直しが持たなかった話ではない。'] },
      { tag: '詳細', qid: 'v2q33p', s: 'What does the woman say about her glasses?',
        c: ['A lens has a scratch.', 'A frame has faded paint.', 'A hinge has a loose screw.', 'A nose pad is missing.'],
        a: 2,
        e: '女性は来店時に "the tiny screw where the left arm folds keeps working its way out" と伝えており、左腕の付け根（ヒンジ）のねじがゆるんでいることを申告している。',
        w: ['レンズの傷についての言及は会話のどこにも出てこない。',
              'フレームの塗装が色あせているという言及は会話のどこにも出てこない。',
              '正解。女性は "the tiny screw where the left arm folds keeps working its way out" と述べている。',
              '鼻あてが無いという言及は会話のどこにも出てこない。'] },
      { tag: '次の行動', qid: 'v2q34p', s: 'What will the man most likely do next?',
        c: ['Check with a technician.', 'Look up an order number.', 'Offer a replacement pair.', 'Print a repair receipt.'],
        a: 2,
        e: '男性は最後に "let me bring out a few spare frames in a shape close to yours, and you can choose the one you like" と述べており、代わりのフレームを何本か用意して選んでもらおうとしている。',
        w: ['技術者に確認するという話は会話のどこにも出てこない。',
              '注文番号を調べるという話は会話のどこにも出てこない。',
              '正解。男性は "let me bring out a few spare frames in a shape close to yours, and you can choose the one you like" と述べている。',
              '修理の受領書を印刷するという話は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 35–37 ────────────────────────────────────────────── */
  /* 2026-09-29 第1巡監査反映：地名 `Corbett Street`（頭文字がA・Eの外、vol6-r3の人名と重複）
     を削除し、場面の説明のみで示す形にした。Q36 の非文（"it's just come in two options"）を
     自然な文に直し、Q35・Q36・Q37 の逐語一致（shop window / two finishes / new quote）も言い換えた。 */
  set({
    n: [35, 36, 37], lv: 3,
    s: [
      { role: 'M-Cn', text: 'How\'s the lighting for the boutique coming along — the display facing the street?' },
      { role: 'W-Au', text: 'Good progress. I heard back from the supplier this morning about the pendant we picked to hang above the mannequins.' },
      { role: 'M-Cn', text: 'Any trouble getting it?' },
      { role: 'W-Au', text: 'None. You can get it either in brushed brass or in matte black, so I\'ve sent the client photos of both.' },
      { role: 'M-Cn', text: 'Any idea which way they\'ll lean?' },
      { role: 'W-Au', text: 'Not yet, but both cost the same, so it won\'t hold anything up. I\'ll work up updated pricing for them today — we added two spotlights for the side panels last week, so the total\'s changed whichever they choose.' },
      { role: 'M-Cn', text: 'Sounds good. Let me know if you need anything checked on my end.' },
    ],
    ja: '男性が、担当している路面の展示（マネキンの上に吊るす照明）の進み具合を尋ねる。女性は今朝サプライヤーから、選定していたペンダント照明について返答があったと伝える。仕上げは真鍮とマット・ブラックの2種類から選べ、両方の写真をすでに顧客に送ったという。価格はどちらの仕上げでも同じなので選定に時間がかかっても進行には支障が無いとし、先週追加したサイド用スポットライト2灯分を反映して、今日中に見積もりを新しく作成すると述べる。',
    v: [['pendant', '天井から吊り下げる照明'], ['mannequin', 'マネキン'], ['pricing', '価格設定、見積もり']],
    q: [
      { tag: '概要', qid: 'v2q35p', s: 'What are the speakers mainly discussing?',
        c: ['Lighting for a hotel lobby', 'Lighting for a restaurant terrace', 'Lighting for a library reading room', 'Lighting for a shop window'],
        a: 3,
        e: '冒頭で男性が "the display facing the street" という路面の展示について尋ね、以降のやり取りもその展示用照明について終始している。',
        w: ['ホテルのロビーについての言及は会話のどこにも出てこない。',
              'レストランのテラスについての言及は会話のどこにも出てこない。',
              '図書館の閲覧室についての言及は会話のどこにも出てこない。',
              '正解。冒頭で男性が "the display facing the street" と切り出し、以降も同じ、通りに面した展示用の照明器具について話している。'] },
      { tag: '詳細', qid: 'v2q36p', s: 'What does the woman say about a fixture?',
        c: ['A fixture is on backorder.', 'A fixture needs a certain mount.', 'A fixture comes in two finishes.', 'A fixture costs more than planned.'],
        a: 2,
        e: '女性は取り寄せ中のペンダント照明について "You can get it either in brushed brass or in matte black" と述べており、仕上げが2種類あることを伝えている。',
        w: ['女性は "Any trouble getting it?" という問いに "None" と答えており、入荷待ちの状態ではない。',
              '特定の取り付け金具が必要だという言及は会話のどこにも出てこない。「マネキンの上に吊るす」とは述べているが、取り付け方法の制約には触れていない。',
              '正解。女性は "You can get it either in brushed brass or in matte black" と述べ、仕上げが2種類あることを伝えている。',
              '言及なし。女性が述べているのは2種類の仕上げの価格が同じだということだけで、当初の予定より高くなるとは述べていない。見積もりを新しく作る理由は、先週追加したスポットライト2灯である。'] },
      { tag: '次の行動', qid: 'v2q37p', s: 'What will the woman do next?',
        c: ['Send a revised drawing.', 'Schedule a site visit.', 'Contact a supplier.', 'Prepare a new quote.'],
        a: 3,
        e: '女性は最後に "I\'ll work up updated pricing for them today" と述べ、追加した照明を反映した見積もりを新しく作成すると伝えている。',
        w: ['図面を送り直すという話は会話のどこにも出てこない。',
              '現地調査の予定についての言及は会話のどこにも出てこない。',
              'サプライヤーへの連絡は "I heard back from the supplier this morning" とすでに今朝済んでおり、これから行う次の行動ではない。',
              '正解。女性は "I\'ll work up updated pricing for them today" と述べている。'] },
    ],
  }),

  /* ── 38–40 ────────────────────────────────────────────── */
  /* 2026-09-29 第1巡監査反映（致命的2件の修正）：7行目が「必要になりそうな作業の見積もり」を
     頼む形だったため、修理の話に触れて Q38(B) を部分的に真にし、かつその場で頼みが済んで
     しまい Q40 が『会話後の行動』として支持されなくなっていた。女性の頼みを『この場を出た
     あとに事務所へ立ち寄って、書面のおおまかな見積もりを頼むつもりだ』という会話後の行為に
     書き直し、修理への言及も外した。年式の固定（twenty-fifteen）も外し、Q39 の読みが直後の
     『I wouldn't count on it without testing it first』ではなく直前の文脈（充電器は使える前提で
     紹介されていた）で決まるように直した。申し送り（Q39は2人目の男性、1人目は他3択に
     当たる発言をしない、女性の質問はQ38の1つだけ）は維持。 */
  set({
    n: [38, 39, 40], lv: 4,
    s: [
      { role: 'W-Am', text: 'Thanks for showing me around. Before we go any further — how old is the engine? I can\'t find a build date on it anywhere.' },
      { role: 'M-Br', text: 'It\'s the original engine, so it\'s as old as the boat, about nine years, but it\'s been serviced every spring.' },
      { role: 'W-Am', text: 'Good to know.' },
      { role: 'M-Br', text: 'The previous owner also left a battery charger in the cabin, which should keep the batteries topped up over the winter.' },
      { role: 'M-Au', text: 'That\'s been sitting there for a while.' },
      { role: 'M-Br', text: 'Fair point.' },
      { role: 'W-Am', text: 'Well, I\'d want to talk it all over with my partner before deciding anything. I\'ll stop by your office on my way out and ask them to write up a rough total for me.' },
      { role: 'M-Br', text: 'Good idea. They\'ll be happy to sort that out for you.' },
    ],
    ja: '中古艇の購入を検討している女性が、ヤードの男性スタッフ2名から艇の説明を受ける。女性はエンジンの年式を尋ね、1人目の男性はボート本体と同じ約9年落ちのオリジナルエンジンだが毎春整備をしていると答える。1人目の男性がキャビンに残されていた充電器について、冬のあいだバッテリーを充電状態に保ってくれるはずだと説明すると、2人目の男性は「長いあいだそこに置いてある」と指摘し、1人目の男性も「もっともな指摘だ」と認める。女性はその場では決めず、パートナーとよく相談したいと言い、帰りがけにヤードの事務所に立ち寄って、おおまかな総額を書面にしてもらうよう頼むと伝える。1人目の男性はそれに賛成する。',
    v: [['build date', '製造年月日'], ['topped up', '（バッテリーなどが）満たされた状態に保たれる'], ['rough total', 'おおまかな見積額']],
    q: [
      { tag: '詳細', qid: 'v2q38p', s: 'What does the woman ask about?',
        c: ['The condition of a hull', 'The cost of a repair', 'The age of an engine', 'The availability of a mooring'],
        a: 2,
        e: '女性は "how old is the engine?" と尋ねており、エンジンの年式についてのみ質問している。',
        w: ['船体の状態についての質問は会話のどこにも出てこない。',
              '修理の費用を尋ねる発言は無い。会話の中で女性が尋ねたのはエンジンの年数（"how old is the engine?"）だけである。最後に述べるのは、帰りがけに事務所で "a rough total"（おおまかな総額）を書いてもらうことで、修理の費用ではない。',
              '正解。女性は "how old is the engine?" と尋ねている。',
              '係留場所の空き状況についての質問は会話のどこにも出てこない。'] },
      { tag: '意図', qid: 'v2q39p', t: ['p3int'], s: 'Why does the second man say, "That\'s been sitting there for a while"?',
        c: ['To indicate that a delivery has arrived.', 'To suggest that an item is free to use.', 'To doubt that an item still works.', 'To explain why an item looks dirty.'],
        a: 2,
        e: '1人目の男性が「前の所有者が残していった充電器は、冬のあいだバッテリーを充電状態に保ってくれるはずだ」と、使える前提で紹介した直後、2人目の男性がこの発言をしている。これを受けて1人目の男性は "Fair point." と、もっともな指摘だと認めている。',
        w: ['荷物が届いたことを示す発言ではない。直前の説明は、前の所有者が残していったものだという由来についてであり、新しい配達の話ではない。',
              '自由に使えると示す発言ではない。1人目の男性は、充電器を "should keep the batteries topped up" と使える前提で紹介し、2人目の男性の発言に "Fair point." と答えている。これは自分の説明への反論として認めた返事である。「自由に使える」なら1人目の説明に沿う話で、認めて引き下がる理由が無い。',
              '正解。長く放置されていたものだという指摘は、直前の「使えるはずだ」という前提と対比され、正常に動作するかどうかへの疑いを示している。1人目の男性もこれを "Fair point." と認めている。',
              '汚れている理由を説明する発言ではない。会話のどこにも汚れについての言及は出てこない。'] },
      { tag: '次の行動', qid: 'v2q40p', s: 'What will the woman most likely do next?',
        c: ['Go on a sea trial.', 'Return the following week.', 'Call her insurance company.', 'Request a written estimate.'],
        a: 3,
        e: '女性は最後に "I\'ll stop by your office on my way out and ask them to write up a rough total for me" と述べ、この場を出たあとに事務所へ立ち寄って書面の見積もりを頼むと伝えている。',
        w: ['試乗についての言及は会話のどこにも出てこない。',
              '翌週また来るという話は会話のどこにも出てこない。',
              '保険会社への連絡についての言及は会話のどこにも出てこない。',
              '正解。女性は "ask them to write up a rough total for me" と述べている（write up が書面にする、rough total が見積もりの言い換え）。'] },
    ],
  }),

  /* ── 41–43 ────────────────────────────────────────────── */
  /* 2026-09-29 第1巡監査反映：頼まれた直後にギターもカードも受け取らないうちに返品・返金が
     済んでいた時系列の誤りと、それを閉じるためだけの『there's no receipt to print』という文を
     除いた。返金は本人の目の前でその場で処理する自然な流れにし、B（受領書印刷）は言及なしで
     閉じる形にした。Q41・Q43 の逐語一致（return / tune）も言い換えた。申し送り（男性の別の
     頼みはドアを押さえること。Q42直前は値札の話だけ）は維持。 */
  set({
    n: [41, 42, 43], lv: 3,
    s: [
      { role: 'M-Cn', text: 'Hi, I bought this guitar here last week, but it just doesn\'t suit the way I play, so I\'d like to bring it back and get my money back. I\'ve got the receipt here.' },
      { role: 'W-Am', text: 'Sure, I can do that. Let me put it through for you... okay, the money should be back on your card within a couple of days.' },
      { role: 'M-Cn', text: 'Great, thanks. Oh, and would you mind holding the door for me on my way out? I\'ve got a couple of heavy bags to get to the car.' },
      { role: 'W-Am', text: 'Of course, just let me know when you\'re ready.' },
      { role: 'M-Cn', text: 'Thanks. I also noticed the acoustic on the stand over there doesn\'t have a price on it. Did I miss it?' },
      { role: 'W-Am', text: 'No. We just got a shipment in this morning, so a few pieces haven\'t been through pricing yet.' },
      { role: 'M-Cn', text: 'Ah, that explains it.' },
      { role: 'W-Am', text: 'Before this one goes back up on the wall, I\'ll bring the strings back up to pitch. It\'s drifted a bit flat on the way over.' },
    ],
    ja: '男性客が、先週購入したギターが自分の弾き方に合わなかったとして返品と返金を申し出る。女性スタッフはその場で返金処理をし、数日中にカードへ入金されると伝える。男性はついでに、車まで重い荷物を運ぶので店を出る際にドアを押さえてもらえないかと頼み、女性は快く応じる。男性が展示中のアコースティックギターに値段が付いていないことに気づいて尋ねると、女性は今朝入荷したばかりでまだ値付けが済んでいないと説明する。女性は最後に、返品されたギターを壁の展示に戻す前に、輸送中に少し狂った弦の調律をすると述べる。',
    v: [['put it through', '（取引などを）処理する'], ['shipment', '入荷、荷物'], ['up to pitch', '正しい音程に']],
    q: [
      { tag: '詳細', qid: 'v2q41p', s: 'What does the man want to do?',
        c: ['Trade in an old instrument.', 'Buy a gift.', 'Book a repair.', 'Return a purchase.'],
        a: 3,
        e: '男性は冒頭で "it just doesn\'t suit the way I play, so I\'d like to bring it back and get my money back" と述べ、先週購入したギターを返品して返金を受けたいと伝えている。',
        w: ['下取りについての言及は会話のどこにも出てこない。',
              '贈り物を買うという話は会話のどこにも出てこない。',
              '修理の予約についての言及は会話のどこにも出てこない。男性は不具合ではなく「自分の弾き方に合わない」ことを理由にしている。',
              '正解。男性は "I\'d like to bring it back and get my money back" と述べている。'] },
      { tag: '意図', qid: 'v2q42p', t: ['p3int'], s: 'Why does the woman say, "We just got a shipment in this morning"?',
        c: ['To explain why the shop looks untidy.', 'To assure him that some stock is new.', 'To account for a missing price tag.', 'To decline a request for help.'],
        a: 2,
        e: '男性が展示中のギターについて "I also noticed the acoustic on the stand over there doesn\'t have a price on it. Did I miss it?" と尋ねた直後の発言。女性は続けて "so a few pieces haven\'t been through pricing yet" と述べており、値札が無い理由を説明している。',
        w: ['店内が散らかって見える理由の説明ではない。会話のどこにも散らかりについての言及は出てこない。',
              '在庫が新しいことを安心させるための発言ではない。話題は値段の有無についてであり、在庫全般の新しさを強調してはいない。',
              '正解。女性は "We just got a shipment in this morning, so a few pieces haven\'t been through pricing yet" と続け、値札が無い理由を説明している。',
              '何かの頼みを断る発言ではない。男性がドアを押さえてほしいと頼んだ際、女性は "Of course, just let me know when you\'re ready" と快く応じており、断ってはいない。'] },
      { tag: '次の行動', qid: 'v2q43p', s: 'What will the woman most likely do next?',
        c: ['Check a storeroom.', 'Print a receipt.', 'Tune an instrument.', 'Write down his details.'],
        a: 2,
        e: '女性は最後に "I\'ll bring the strings back up to pitch" と述べ、ギターの弦の調律をすると伝えている。',
        w: ['在庫室を確認するという話は会話のどこにも出てこない。',
              '言及なし。男性が持参したのは購入時のレシート（"I\'ve got the receipt here"）で、女性がレシートを印刷するとは言っていない。返金は "the money should be back on your card within a couple of days" で処理が済んでおり、女性が最後に述べる行為は弦の音程を戻すこと（"I\'ll bring the strings back up to pitch"）である。',
              '正解。女性は "I\'ll bring the strings back up to pitch" と述べている。',
              '男性の連絡先を控えるという話は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 44–46 ────────────────────────────────────────────── */
  /* 2026-09-29 第1巡監査反映：Q45 の読みが引用の前後どちらでも言い直されていたため、
     後ろの『so I wouldn't have been able to join it anyway』を外し、担当者の謝罪付きの中止の
     知らせ（直前の文脈）だけで読みが決まる形にした。Q44・Q46 の逐語一致（holiday package /
     loyalty discount / breakfast each morning）も言い換え、綴りの割れ（cancelled/canceled）は
     `called off` にして回避した。申し送り（変更は最終日朝のツアー中止で、提案・予約誤り・
     空港移動にせず、朝食にもしない）は維持。 */
  set({
    n: [44, 45, 46], lv: 4,
    s: [
      { role: 'M-Br', text: 'Hi, I\'m calling about my trip to the Algarve — booking reference ARL-2290. I got an e-mail saying returning customers can get money off, and I wanted to check that still applies, since I\'ve only paid the deposit.' },
      { role: 'W-Cn', text: 'Let me check... yes, it applies as long as the balance hasn\'t been paid in full, which yours hasn\'t. I can take fifteen percent off what\'s left to pay.' },
      { role: 'M-Br', text: 'That\'s great, thank you.' },
      { role: 'W-Cn', text: 'While I have your file open, I should also mention that the complimentary group tour on your last morning has been called off. The local guide had to pull out. I\'m sorry about that.' },
      { role: 'M-Br', text: 'My flight leaves at six that morning.' },
      { role: 'W-Cn', text: 'Ah, that\'s a relief, then. I\'ll send the updated invoice by the end of the day. And since people often ask, your room rate at the hotel covers the morning buffet every day of your stay.' },
      { role: 'M-Br', text: 'Perfect, thanks for letting me know.' },
    ],
    ja: '男性が旅行の予約について女性の担当者に電話し、自分の旅行代金について、リピーター向けの割引がまだ適用できるか尋ねる。女性が確認すると、残額がまだ全額支払われていないため適用でき、残りの支払いから15パーセントを差し引けると答える。女性はついでに、最終日の朝に予定していた無料の団体ツアーが、現地ガイドの都合により中止になったと謝罪する。男性はその朝は6時発の便に乗ると答え、女性はそれを聞いて「それなら安心です」と受け止める。女性は更新した請求書をその日のうちに送ると伝え、よく尋ねられることとして、宿泊先の部屋代には滞在中毎朝のビュッフェ朝食が含まれていると付け加える。',
    v: [['deposit', '内金、頭金'], ['balance', '残額'], ['buffet', 'ビュッフェ、バイキング形式の食事']],
    q: [
      { tag: '概要', qid: 'v2q44p', s: 'What are the speakers mainly discussing?',
        c: ['A change to a flight itinerary', 'A refund for a canceled tour', 'A missing confirmation for a booking', 'A discount on a holiday package'],
        a: 3,
        e: '男性は冒頭で "I got an e-mail saying returning customers can get money off, and I wanted to check that still applies" と切り出し、以降のやり取りも自分の旅行代金の割引適用についてが中心である。',
        w: ['航空便の日程変更についての言及は会話のどこにも出てこない。男性の便自体は変わっていない。',
              '取り消されたツアーへの返金についての言及は会話のどこにも出てこない。ツアーは無料で含まれていたものであり、返金の話は出てこない。',
              '予約確認が届いていないという話は会話のどこにも出てこない。男性はすでに予約番号を把握している。',
              '正解。男性は "returning customers can get money off, and I wanted to check that still applies" と切り出し、女性も "I can take fifteen percent off what\'s left to pay" と応じている。'] },
      { tag: '意図', qid: 'v2q45p', t: ['p3int'], s: 'Why does the man say, "My flight leaves at six that morning"?',
        c: ['To decline a suggested activity.', 'To point out a schedule error.', 'To voice concern about reaching the airport.', 'To reassure her about a change.'],
        a: 3,
        e: '女性が謝罪とともに「最終日の朝に予定していた無料の団体ツアーが中止になった」と伝えた直後の発言。女性はこれを聞いて "that\'s a relief, then" と受け止めており、男性がどのみち参加できなかった事情を挙げて安心させたことが分かる。',
        w: ['断っている提案は無い。ツアーの中止はすでに決定事項として謝罪付きで伝えられたものであり、男性が選べる提案ではない。',
              '予定の誤りを指摘する発言ではない。ツアーの中止は現地ガイドの都合（"The local guide had to pull out."）として謝罪つきで伝えられたもので、予約や日程の誤りの話は出てこない。女性も "that\'s a relief, then" と安心して受け止めている。',
              '空港への到着を心配する発言ではない。女性が "that\'s a relief, then" と受け止めており、心配ではなく安心を示す発言として理解されている。',
              '正解。中止の知らせへの返事としてこの事実を挙げており、女性はこれを "that\'s a relief, then" と受け止めている。彼がどのみち早朝の便でその朝のツアーには参加できなかったため、変更が問題にならないことを伝えている。'] },
      { tag: '詳細', qid: 'v2q46p', s: 'What does the woman mention about a hotel?',
        c: ['A hotel offers a free shuttle.', 'A hotel has an outdoor pool.', 'A hotel sits near a train station.', 'A hotel includes breakfast each morning.'],
        a: 3,
        e: '女性は "your room rate at the hotel covers the morning buffet every day of your stay" と述べており、宿泊先のホテルで毎朝朝食（ビュッフェ）が付くことを伝えている。',
        w: ['無料送迎についての言及は会話のどこにも出てこない。',
              '屋外プールについての言及は会話のどこにも出てこない。',
              '駅の近くにあるという言及は会話のどこにも出てこない。',
              '正解。女性は "your room rate at the hotel covers the morning buffet every day of your stay" と述べている。'] },
    ],
  }),

  /* ── 47–49 ────────────────────────────────────────────── */
  /* 2026-09-29 第1巡監査反映：男性の薬剤師が自分自身を三人称で呼んでいた点を直し（"ask the
     pharmacist" → "ask me"）、Q47・Q49 の逐語一致（drowsiness / card at home）を言い換えた。
     2026-09-29 第2巡監査反映：女性客の発言に米加式の語（refill／保険証を出す仕組み）が
     入っていたため、話者ロールを W-Br から W-Cn に変更し（50–52 の W-Cn とは入れ替え）、
     1行目を collect→pick up・rang→called に直して英式の語を外した。 */
  set({
    n: [47, 48, 49], lv: 3,
    s: [
      { role: 'W-Cn', text: 'Hi, I\'m here to pick up a prescription. I called ahead this morning, so it should be ready.' },
      { role: 'M-Au', text: 'Let me check... yes, here it is. Before I hand it over, is there anything you\'d like to ask me about it?' },
      { role: 'W-Cn', text: 'Actually, yes — will this make me sleepy? I\'m driving straight after this.' },
      { role: 'M-Au', text: 'This one shouldn\'t affect how alert you are, but check the label if you\'re taking anything else as well.' },
      { role: 'W-Cn', text: 'Good, that\'s a relief. Also, are you open on Sundays? I might need a refill next week.' },
      { role: 'M-Au', text: 'We are, but only until one in the afternoon on Sundays. The rest of the week we\'re open until six.' },
      { role: 'W-Cn', text: 'Noted, thanks. Now, what do I owe you? I\'m insured, but I think my card\'s still sitting on the kitchen table.' },
      { role: 'M-Au', text: 'No trouble, I can look you up by name and date of birth instead.' },
      { role: 'W-Cn', text: 'Great, thank you.' },
    ],
    ja: '女性客が薬局に処方薬を受け取りに来る。薬剤師は薬を渡す前に質問がないか尋ね、女性は運転前に眠くならないか確認する。薬剤師はこの薬は注意力に影響しないはずだが、他に服用している薬があれば表示を確認するよう伝える。女性は来週再調剤が必要かもしれないと考え、日曜日の営業を尋ねると、薬剤師は日曜は午後1時までで、ほかの曜日は午後6時までだと答える。最後に女性は、保険には入っているが保険証はまだ自宅の台所のテーブルに置いてきたようだと伝え、薬剤師は氏名と生年月日で照会できると応じる。',
    v: [['sleepy', '眠い'], ['refill', '（処方薬の）再調剤'], ['insured', '保険に加入している']],
    q: [
      { tag: '詳細', qid: 'v2q47p', s: 'What does the woman ask the man?',
        c: ['Whether a medication causes drowsiness', 'Whether a prescription allows early refills', 'Whether an item requires a prescription', 'Whether a discount applies to seniors'],
        a: 0,
        e: '女性は "will this make me sleepy? I\'m driving straight after this" と尋ねており、薬が眠気を引き起こすかどうかを確認している。',
        w: ['正解。女性は "will this make me sleepy?" と尋ねている。',
              '早めの再調剤が可能かという質問は会話のどこにも出てこない。女性が後で尋ねているのは日曜の営業時間である。',
              '処方箋が要るかという質問は無い。女性は、処方された薬を受け取りに来ている（"I\'m here to pick up a prescription"）。',
              '高齢者向け割引についての質問は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v2q48p', s: 'What does the man say about the pharmacy?',
        c: ['The pharmacy closes early on Sundays.', 'The pharmacy just added a new service.', 'The pharmacy gets busy after five.', 'The pharmacy shares a building with a clinic.'],
        a: 0,
        e: '男性は "We are, but only until one in the afternoon on Sundays. The rest of the week we\'re open until six." と述べており、日曜日はほかの曜日（"The rest of the week"）より早く閉まることを伝えている。',
        w: ['正解。男性は "only until one in the afternoon on Sundays" と述べ、ほかの曜日（"The rest of the week"）の午後6時までという営業時間より早く閉まることを伝えている。',
              '新しいサービスを始めたという言及は会話のどこにも出てこない。',
              '5時以降に混み合うという言及は会話のどこにも出てこない。',
              'クリニックと同じ建物にあるという言及は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v2q49p', s: 'What does the woman mention about her insurance?',
        c: ['Her insurance is through her employer.', 'Her insurance requires prior approval.', 'Her insurance excludes a certain brand.', 'Her insurance card is at home.'],
        a: 3,
        e: '女性は "I\'m insured, but I think my card\'s still sitting on the kitchen table" と述べており、保険証を自宅に置いてきたことを伝えている。',
        w: ['勤務先を通じた保険だという言及は会話のどこにも出てこない。',
              '事前承認が必要だという言及は会話のどこにも出てこない。',
              '特定の銘柄が対象外だという言及は会話のどこにも出てこない。',
              '正解。女性は "my card\'s still sitting on the kitchen table" と述べている（自宅に置いてきたことの言い換え）。'] },
    ],
  }),

  /* ── 50–52 ────────────────────────────────────────────── */
  /* 2026-09-29 第1巡監査反映：西向きの窓なのに午後に柔らかい光になるという物理の食い違いを
     東向きに直し、10人（申し出）と11人（応答の『ten』）のずれを11人で揃えた。Q50 の読みが
     引用の後ろの『Not at all』ではなく、直前に男性自身が述べる光への不安（直前の家族写真で
     眩しかった経験）で決まる形にした。Q52 の逐語一致（we've hosted... before）も、設備の言及
     からの推測に言い換えた。
     2026-09-29 第2巡監査反映：女性スタッフの発言に英式の語（step-free）が入っていたため、
     話者ロールを W-Cn から W-Br に変更した（47–49 の W-Br とは入れ替え。文言は変えていない）。 */
  set({
    n: [50, 51, 52], lv: 4,
    s: [
      { role: 'M-Am', text: 'Hi, I\'d like to book a family portrait session for this Saturday. The afternoon\'s the only time we can all get together, though, and I\'m a bit worried about the light. Our last family portrait was done outside around midday, and everyone was squinting.' },
      { role: 'W-Br', text: 'Let me check... yes, we have a two o\'clock slot. The light comes in differently after two.' },
      { role: 'M-Am', text: 'Oh? How so?' },
      { role: 'W-Br', text: 'The studio faces east, so by then the sun\'s moved around and the light\'s soft and even. A lot of families end up preferring it. So, two o\'clock this Saturday?' },
      { role: 'M-Am', text: 'Yes, that works. We need to finish by four — my mother\'s birthday dinner is across town at five, and we\'ll need time to get changed and drive over.' },
      { role: 'W-Br', text: 'That\'s fine. Sessions usually run about an hour.' },
      { role: 'M-Am', text: 'Perfect. Also, there\'ll be eleven of us, including my mother, who uses a wheelchair. Is that manageable?' },
      { role: 'W-Br', text: 'Easily. The benches we use for reunion shoots seat twenty, and the studio\'s step-free throughout.' },
    ],
    ja: '男性が写真スタジオに電話し、今度の土曜に家族写真の撮影を予約したいと申し出る。午後しか家族全員の都合がつかないが、前回屋外の真昼に撮った際は皆まぶしそうにしていたので、光の具合が心配だと伝える。スタッフの女性は2時の枠を案内し、2時を過ぎると光の入り方が違うと答える。スタジオは東向きで、その時間には日差しの向きが変わって柔らかく均一な光になり、かえって好む家族が多いのだと説明する。男性は、母親の誕生日の食事会が5時から別の場所であるため、4時までに撮影を終える必要があると伝える。女性はセッションは通常1時間程度なので十分間に合うと答える。男性が車椅子を使う母親を含む11人での撮影になると伝えると、女性は親族の集まり用に使うベンチは20人分あり、スタジオは段差のないつくりなので問題ないと答える。',
    v: [['squint', '（まぶしくて）目を細める'], ['step-free', '段差のない'], ['reunion', '親族・同窓などの集まり']],
    q: [
      { tag: '意図', qid: 'v2q50p', t: ['p3int'], s: 'Why does the woman say, "The light comes in differently after two"?',
        c: ['To recommend an earlier start time.', 'To justify a difference in prices.', 'To explain why sample photos vary.', 'To reassure him about an afternoon booking.'],
        a: 3,
        e: '男性が「午後しか都合がつかないが、光が心配だ。前回の家族写真は真昼に屋外で撮ったら、皆まぶしそうにしていた」と伝え、女性が "yes, we have a two o\'clock slot" と2時の枠を示した、その続きの発言。直前の心配に対する返事として述べられているため、午後の予約について安心させる発言だと決まる。',
        w: ['開始を早めるよう勧める発言ではない。女性は続けて "the light\'s soft and even. A lot of families end up preferring it." と2時以降の光の良さを挙げ、"So, two o\'clock this Saturday?" と2時の枠で確かめている。2時より前の枠は勧めていない。',
              '料金の違いを正当化する発言ではない。料金についての言及は会話のどこにも出てこない。',
              '見本写真がばらつく理由の説明ではない。見本写真についての言及は会話のどこにも出てこない。今回話題になっているのは男性自身の前回の撮影である。',
              '正解。直前で男性が午後の光を心配していたのに対する返事として述べられており、午後の予約について安心させている。'] },
      { tag: '詳細', qid: 'v2q51p', s: 'What does the man say about the session?',
        c: ['It is for a company website.', 'It marks a wedding anniversary.', 'It will include his dog.', 'It must end by a certain time.'],
        a: 3,
        e: '男性は "We need to finish by four — my mother\'s birthday dinner is across town at five" と述べており、撮影を決まった時刻までに終える必要があると伝えている。',
        w: ['会社のウェブサイト用だという言及は会話のどこにも出てこない。',
              '結婚記念日を祝うものだという言及は会話のどこにも出てこない。母親の誕生日の食事会は別の話である。',
              '犬を含めるという言及は会話のどこにも出てこない。',
              '正解。男性は "We need to finish by four" と述べている。'] },
      { tag: '推測', qid: 'v2q52p', s: 'What is suggested about the photography studio?',
        c: ['It has handled large groups before.', 'It recently expanded its hours.', 'It offers digital retouching.', 'It runs a second studio.'],
        a: 0,
        e: '女性は "The benches we use for reunion shoots seat twenty" と述べており、大人数の親族向け撮影で使う設備を備えていることから、これまでにも大人数のグループに対応してきたことがうかがえる。',
        w: ['正解。女性は "The benches we use for reunion shoots seat twenty" と述べており、大人数の撮影に備えた設備を持つことから対応実績がうかがえる。',
              '営業時間を延長したという言及は会話のどこにも出てこない。',
              'デジタル修正（レタッチ）サービスについての言及は会話のどこにも出てこない。',
              '2店舗目を運営しているという言及は会話のどこにも出てこない。'] },
    ],
  }),

];
