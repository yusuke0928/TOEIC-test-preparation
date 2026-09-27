/* =============================================================
   予想模試 Vol.6 — Part 3 前半（No.32–52）
   ============================================================= */

/* `sid` / `qid` は id の明示指定。中身を差し替えたユニット・設問は
   SRS の履歴を引き継がせないため、通し番号由来の既定 id ではなく
   新しい id を与える（`no` は 1〜200 の連番なので絶対に変えない）。 */
const set = (o) => ({
  id: o.sid || `v6-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v6q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2A = [

  /* ── 32–34 ─────────────────────────────────────────── */
  /* 2026-09-26 先読み対策 第2案（method2）のパイロット。stem・4択は凍結案のまま
     1字も変えていない（例外は No.34 の並びのみ。下記）。
     正解はメインがくじで決めたもの（32=A, 33=D, 34=くじの結果は C だが、後述の
     並び入れ替えにより本ファイルでは D として実装）。
     2026-09-26 監査反映：旧稿は「切り替えに伴う一時的な手数料が加わった」筋
     だったため、加算分だけ月額が動き、No.32 D「月額が変わった理由を知るため」
     が第二の正解になっていた（致命的）。「総額はいつもと同じだが、その中の
     1行だけ見覚えがない」という筋（既存のサブスクリプション料金の一部を
     新システムが独立の1行として表示するようになっただけで、総額は不変）に
     書き直し、女性の第一声で総額不変を明言して閉じた。
     33A「優遇レートで開設」は、新しいスクリプットが料金区分に一切触れない
     ため言及なしで閉じる。34A「確認メールを送る」は、男性の最後の発話が
     「まず確認し、確認後に別途連絡する」という順序を明言しているため、
     時系列（次にすることではない）で閉じる。
     34 はくじの結果 C だったが、それだと vol6 の Part3 で「前問と同じ位置」の
     率が11%まで下がり検査Dが警告を出すため（HEAD は13%）、内容とは無関係に
     C と D の選択肢を入れ替え、正解を D に移した（why も対応して入れ替え）。 */
  set({
    n: [32, 33, 34], lv: 3,
    s: [
      { role: 'W-Cn', text: 'Hi, I\'m calling about this month\'s bill. The total\'s what we always pay, but one of the lines on it is new to me.' },
      { role: 'M-Br', text: 'Let me pull that up. Could you give me the account e-mail?' },
      { role: 'W-Cn', text: 'It\'s under logistics at brightfield dot com.' },
      { role: 'M-Br', text: 'Thanks. Your account moved to our upgraded platform last week, and the new system lists part of your usual subscription as its own line — a hosting charge.' },
      { role: 'W-Cn', text: 'So that\'s tied to some change on your end?' },
      { role: 'M-Br', text: 'That\'s right. The switch-over split it out by itself.' },
      { role: 'W-Cn', text: 'Good to know, thanks.' },
      { role: 'M-Br', text: 'I\'ll go through the rest of your account a bit more closely first, to see whether anything else was split out. I\'ll follow up separately once I\'ve checked.' },
      { role: 'W-Cn', text: 'Thanks, I\'ll wait to hear from you.' },
    ],
    ja: '女性が今月の請求書について問い合わせる。支払っている総額はいつもと変わらないが、その中の1行に見覚えがないという。担当者がアカウントを確認すると、先週アカウントが新しい請求システムへ移行した際に、通常のサブスクリプションの一部が独立した項目（施設利用料）として表示されるようになったことが原因だと分かる。担当者は、まず自分でアカウントの残りをもっと詳しく確認し、ほかにも同様に分割された項目がないか調べると述べ、確認できしだい改めて連絡すると伝える。',
    v: [['line (on a bill)', '請求書上の項目'], ['switch-over', '（システムなどの）切り替え'], ['hosting charge', '施設利用料']],
    q: [
      { tag: '概要', qid: 'v6q32p', s: 'Why is the woman calling?',
        c: ['To report an unfamiliar charge on her bill', 'To ask whether her plan includes a certain feature', 'To request that a payment date be changed', 'To find out why her monthly amount changed'],
        a: 0,
        e: '冒頭で「今月の請求額はいつもと同じだが、その中の1行に見覚えがない」と用件を述べている。総額自体は変わっていないことも同じ発話の中で明言される。',
        w: ['正解。', 'プランの機能について尋ねる場面は会話のどこにも出てこない。', '支払い日の変更を求める場面は会話のどこにも出てこない。', '女性は "The total\'s what we always pay" と述べており、月々の総額はいつもどおりで変わっていない。総額が変わった理由を知りたいというこの記述は本文と正面から矛盾する。'] },
      { tag: '詳細', qid: 'v6q33p', s: 'What does the man say about the woman\'s account?',
        c: ['It was set up under a promotional rate.', 'It was flagged for a routine review.', 'It was linked to more than one payment method.', 'It was transferred to a new system.'],
        a: 3,
        e: '男性は「アカウントが先週アップグレードされた新しいプラットフォームに移行し、新しいシステムが通常のサブスクリプションの一部を独立した1行――施設利用料――として表示するようになった」と説明している。',
        w: ['優遇レートについての言及は会話のどこにも出てこない。男性が説明したのはプラットフォームの切り替えと、それに伴う請求項目の分割の2点のみである。', '審査についての言及は会話のどこにも出てこない。', '支払い方法についての言及は会話のどこにも出てこない。', '正解。'] },
      { tag: '次の行動', qid: 'v6q34p', s: 'What will the man most likely do next?',
        c: ['Send the woman a confirmation e-mail', 'Transfer her call to another department', 'Update a record before ending the call', 'Look further into her account'],
        a: 3,
        e: '男性は「まずアカウントの残りをもっと詳しく確認し、ほかにも同様に分割された項目がないか見る」と述べ、確認できしだい改めて連絡すると続けている。',
        w: ['男性は "I\'ll follow up separately once I\'ve checked" と述べており、確認の連絡はアカウントを調べたあとに行うことであって、次にすることではない。', '他部署への取り次ぎについては会話のどこにも出てこない。', '記録を更新するという話は会話のどこにも出てこない。', '正解。'] },
    ],
  }),

  /* 2026-09-27 先読み対策 第2案（method2）本実装。担当ユニット 35–37 / 38–40 / 41–43 /
     44–46 / 47–49 / 50–52。stem・4択は pilot/final-P3.md の凍結案のまま1字も変えていない。
     並び順の入れ替えも行っていない。正解はメインのくじ（pilot/s4v6-l2a.md）のとおり：
     35=A/A/C、38=D/A/A、41=B/B/B、44b=C/B/C、47=C/D/A、50b=C/A/B。
     正解位置の検査（A〜F）で警告が出ても、ここでは並びを変えていない（メインの担当）。
     2026-09-27 追記：正解位置の平準化（balance2.mjs --by part）で No.51 の選択肢の並びを
     入れ替えた（旧 A → 新 C。why も対応して入れ替え済み）。 */

  /* ── 35–37 ─────────────────────────────────────────── */
  /* 申し送り：Q35 のくじが A のため、引用「That's not what I was told.」は
     広告そのものの不具合（Q36＝タイトルの誤植）ではなく、割引条件の食い違いという
     別の話題に向けている。 */
  set({
    n: [35, 36, 37], lv: 4,
    s: [
      { role: 'W-Br', text: 'Hi, this is Bethan from Boskell Books. I\'m calling about our ad for next month\'s issue — I understood our loyalty discount would carry over to this booking as well.' },
      { role: 'M-Au', text: 'That\'s not what I was told. My records show that discount applied only to your first booking, back when you joined the programme. This booking is at the standard rate.' },
      { role: 'W-Br', text: 'Oh — I must have mixed that up with the renewal terms, then. While I have you, I looked over the proof yesterday and noticed something else.' },
      { role: 'M-Au', text: 'Go ahead.' },
      { role: 'W-Br', text: 'The novel we\'re featuring in the middle panel has two letters the wrong way round in its name. It reads "Cinnamon Coast" — it should be "Cinnamon Coats".' },
      { role: 'M-Au', text: 'That would look bad in print. Let me ring the print shop first and see how much time\'s left before this issue needs signing off. If there\'s still room today, I\'ll get it corrected before anything goes out.' },
      { role: 'W-Br', text: 'Thanks — let me know either way.' },
    ],
    ja: '地元書店 Boskell Books を営む女性ベサンが、広告代理店の担当者に電話をかける。来月号の広告についてロイヤルティ割引が今回の予約にも適用されると思っていたが、担当者は割引は初回加入時のみだったと説明し、彼女は思い違いだったと納得する。続けて、前日に確認した校正刷りで中央パネルの小説の名前の中の2文字が入れ替わって印字されている（正しくは"Cinnamon Coats"）ことを伝えると、担当者は掲載までの余裕を確認するためまず印刷会社に連絡すると答える。',
    v: [['loyalty discount', '継続利用の割引'], ['proof', '校正刷り'], ['sign off (on)', '（内容を）最終承認する']],
    q: [
      { tag: '意図', qid: 'v6q35p', t: ['p3int'], s: 'What does the man mean when he says, "That\'s not what I was told."?',
        c: ['He believes the woman has misunderstood the agreement.', 'He suspects a coworker recorded her request wrongly.', 'He is hearing about a change for the first time.', 'He feels relieved that the problem is minor.'],
        a: 0,
        e: '直前で女性が「ロイヤルティ割引が今回の予約にも適用されると思っていた」と述べたのに対し、男性は「自分の記録では、その割引は加入時の初回分だけで、今回は通常料金になる」と続けている。女性の理解と自分の記録が食い違っているという指摘であり、女性が合意内容を誤解していると考えていることを表す。',
        w: ['正解。', '男性は自分の「記録」を根拠に説明しており、同僚が女性の依頼を誤って記録した、という話は会話のどこにも出てこない。', '女性は直後に "I must have mixed that up with the renewal terms" と述べており、割引条件に変更があったのではなく女性自身の思い違いだったことが分かる。変更を初めて知らされたという読みは成り立たない。', '話題は割引条件の食い違いを訂正することであり、問題が軽微だったと安堵する発言は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v6q36p', s: 'What is the problem with the advertisement?',
        c: ['The title of one book has a spelling error.', 'The shop\'s opening hours are out of date.', 'The advertisement appears in the wrong section.', 'The ad is smaller than the size she ordered.'],
        a: 0,
        e: '女性は「校正刷りで確認した中央パネルの小説の、名前の中の2文字が入れ替わっている」と指摘し、"Cinnamon Coast" となっているが正しくは "Cinnamon Coats" だと述べている。',
        w: ['正解。', '営業時間についての言及は会話のどこにも出てこない。', '掲載箇所についての言及は会話のどこにも出てこない。', '広告の大きさについての言及は会話のどこにも出てこない。'] },
      { tag: '次の行動', qid: 'v6q37p', s: 'What will the man most likely do next?',
        c: ['Send a corrected proof for her approval', 'Look up her original order in the system', 'Call the printer about the deadline', 'Put her through to the designer'],
        a: 2,
        e: '男性は「まず印刷会社に連絡し、この件の最終確認までにどれくらい時間が残っているか確かめる」と述べている。',
        w: ['男性は "If there\'s still room today, I\'ll get it corrected before anything goes out." と述べており、修正版の送付は印刷会社に確認したあとのことで、次にすることではない。', '割引の件はすでに自分の記録をもとにその場で説明を終えており、女性の元の注文を調べ直すという話は出てこない。', '正解。', 'デザイン担当への取り次ぎについては会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 38–40 ─────────────────────────────────────────── */
  /* 申し送り：second man（M-Au）の最初の発話は first man（M-Am）の最初の発話より後。
     M-Am には Q39 の他の3択（検査官の指摘・翌日対応・他現場の類似トラブル）に
     当たる発言をさせていない。 */
  set({
    n: [38, 39, 40], lv: 4, k: 'conversation with three speakers',
    s: [
      { role: 'W-Br', text: 'Let\'s start on the east wing — I want to check how the window installation\'s going.' },
      { role: 'M-Am', text: 'Something\'s off up here — three of the window frames on this floor aren\'t lining up with where the plans show them.' },
      { role: 'W-Br', text: 'Show me... you\'re right, all three are a good ten centimetres out from the line.' },
      { role: 'M-Au', text: 'That\'s not down to us. The outfit that had this job before us marked out the openings, and we just set each frame to their marks.' },
      { role: 'W-Br', text: 'So the marks were off before your crew ever got here. Understood — resetting three frames will set us back, so I\'ll ring the building\'s owners this afternoon and let them know our completion date could slip.' },
    ],
    ja: 'Fenshaw Tower の改修現場で、現場監督の女性が2名の男性作業員と巡回し、この階の窓枠が3か所、図面どおりの位置に収まっていないことに気づく。あとから発言した男性は、この工事を請け負う前にいた業者が開口部の印を付け、自分たちはその印にそのまま合わせて枠を取り付けただけだと説明する。女性は、3か所の枠を付け直せば工程が遅れるとして、この午後に建物のオーナーへ連絡し、完成予定に影響しうると伝えると述べる。',
    v: [['frame (window ~)', '窓枠'], ['mark (an opening)', '（開口部の位置に）印を付ける'], ['outfit', '（会社・チームとしての）業者'], ['completion date', '完成予定日']],
    q: [
      { tag: '概要', qid: 'v6q38p', s: 'What are the speakers mainly discussing?',
        c: ['Cracks in a newly laid concrete floor', 'Loose tiles in the main stairwell', 'Water coming in through the roof', 'Windows fitted in the wrong positions'],
        a: 3,
        e: '女性が「窓の設置状況を確認したい」と切り出すと、1人目の男性が「この階の窓枠が3か所、図面どおりの位置に収まっていない」と報告し、女性も3か所とも図面の位置からずれていることを確認している。',
        w: ['コンクリート床のひび割れについての言及は会話のどこにも出てこない。', '階段室のタイルについての言及は会話のどこにも出てこない。', '屋根からの浸水についての言及は会話のどこにも出てこない。', '正解。'] },
      { tag: '詳細', qid: 'v6q39p', s: 'What does the second man say about the problem?',
        c: ['The previous contractor is responsible for it.', 'An inspector pointed it out last week.', 'His crew will deal with it tomorrow.', 'Similar trouble came up at another site.'],
        a: 0,
        e: '2人目の男性（あとから発言した方）は「この工事を請け負う前にいた業者が開口部に印を付け、自分たちはその印にそのまま合わせて枠を取り付けただけだ」と述べ、女性も「では、印は御社のチームが入る前から狂っていたのですね」と確認している。',
        w: ['正解。あとから発言した男性は "The outfit that had this job before us marked out the openings, and we just set each frame to their marks." と述べており、以前の業者に原因があると説明している。', '検査官の指摘についての言及は会話のどこにも出てこない。', '翌日の対応についての言及は会話のどこにも出てこない。', '他の現場での同様のトラブルについての言及は会話のどこにも出てこない。'] },
      { tag: '次の行動', qid: 'v6q40p', s: 'What will the woman most likely do this afternoon?',
        c: ['Update the client on the schedule', 'Rearrange the work for tomorrow', 'Send photographs to the insurer', 'Order materials for the repair'],
        a: 0,
        e: '女性は最後に「3か所の枠を付け直せば工程が遅れるので、この午後に建物のオーナーへ連絡し、完成予定が遅れる可能性を伝える」と述べている。',
        w: ['正解。女性は最後に "I\'ll ring the building\'s owners this afternoon and let them know our completion date could slip." と述べており、施主（建物のオーナー）に工程への影響を伝えるとしている。', '翌日の作業の組み直しについては会話のどこにも出てこない。', '保険会社への写真送付については会話のどこにも出てこない。', '補修材料の発注については会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 41–43 ─────────────────────────────────────────── */
  set({
    n: [41, 42, 43], lv: 4,
    s: [
      { role: 'M-Br', text: 'Good evening. How can I help?' },
      { role: 'W-Au', text: 'Hi, I\'ve booked a trial badminton session for Thursday, and I\'ll be coming straight from work by car. I wanted to check what I need to bring, and whether there\'s anything to sort out first.' },
      { role: 'M-Br', text: 'There\'s one thing. Like the library next door, we\'re run by the council, and the two buildings share a car park, so anyone driving in fills in a short form. That\'s what lets us clear your car to stay there for the evening.' },
      { role: 'W-Au', text: 'Does that sign me up as a member as well?' },
      { role: 'M-Br', text: 'Not for a one-off trial — the form\'s only for the parking side. While you\'re here, feel free to look round the pool and the gym upstairs; a lot of our trial visitors end up joining for more than just badminton.' },
      { role: 'W-Au', text: 'Good to know. Anything I should bring on the day?' },
      { role: 'M-Br', text: 'Just whatever number\'s on your confirmation e-mail — that\'s all we\'ll need to check you in at the desk.' },
      { role: 'W-Au', text: 'Perfect, thanks.' },
    ],
    ja: '女性が地域運営の複合レジャー施設の受付を訪れ、木曜日に予約した体験バドミントンセッションについて尋ねる。仕事帰りに車で来る予定だと伝えると、駐車場は隣接する図書館と共用で、両施設とも自治体が運営しているため、車で来る人は簡単な用紙に記入する必要があると説明される。それが会員登録にもなるのか尋ねると、一回限りの体験では不要で、あくまで駐車のための手続きだと案内される。あわせて、せっかく来たのだからとプールやジムも見学できると勧められ、持ち物は予約確認メールに記載の番号だけで足りると伝えられる。',
    v: [['(be) run by the council', '自治体によって運営されている'], ['one-off', '一回限りの'], ['confirmation e-mail', '予約確認メール']],
    q: [
      { tag: '概要', qid: 'v6q41p', s: 'Where does this conversation most likely take place?',
        c: ['At a hotel spa', 'At a community leisure centre', 'At a private yoga studio', 'At a physiotherapy clinic'],
        a: 1,
        e: '受付係は「駐車場は隣の図書館と共用で、両方の建物を自治体が運営している」と述べたうえで、プールやジムも案内しており、バドミントン以外にも複数の活動を扱う複合施設であることが分かる。',
        w: ['受付係は "we\'re run by the council" と述べており、施設は自治体の運営で、ホテルの付属施設ではない。', '正解。受付係は "we\'re run by the council" と述べ、続けて "the pool and the gym upstairs" にも言及しており、バドミントン以外の活動も扱う自治体運営の複合施設だと分かる。', '施設は自治体（council）が運営しており、私設のスタジオではない。プールやジムの案内もあり、単一種目に特化した施設でもない。', '医療的な処置についての言及は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v6q42p', s: 'Why does the woman need to complete a form?',
        c: ['To note down her medical history', 'To get a visitor parking permit', 'To open an account in her name', 'To borrow equipment for the session'],
        a: 1,
        e: '女性は仕事帰りに車で来ると伝えており、受付係は「車で来る人は誰でもこの用紙に記入する必要があり、それによって図書館と共用の駐車場に車を置けるようにする」と説明している。',
        w: ['既往症についての言及は会話のどこにも出てこない。', '正解。女性は車で来ると伝えており、受付係は "anyone driving in fills in a short form. That\'s what lets us clear your car to stay there for the evening." と説明している。', '受付係は "Not for a one-off trial — the form\'s only for the parking side." と述べており、会員登録のための用紙ではないと明言している。', '用具の貸し出しについての言及は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v6q43p', s: 'What does the man tell the woman to bring to her first session?',
        c: ['Some form of photo ID', 'The reference number for her booking', 'Loose clothing for moving around', 'Her own bottle of water'],
        a: 1,
        e: '受付係は「確認メールに記載の番号さえあれば、受付で確認できる」と述べている。',
        w: ['写真付き身分証についての言及は会話のどこにも出てこない。', '正解。', '動きやすい服装についての言及は会話のどこにも出てこない。', '飲み物についての言及は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 44–46 ─────────────────────────────────────────── */
  /* 申し送り：会話の曜日を月曜以外にした（今週の始め＝月曜からの変化とし、
     「今朝」「先週」のいずれとも重ならないようにする）。 */
  set({
    n: [44, 45, 46], lv: 3, sid: 'v6-p3-44b',
    s: [
      { role: 'W-Am', text: 'Bram, have you got a minute? I\'ve been looking at the booking numbers, and something\'s off with the yearly wellness exams.' },
      { role: 'M-Au', text: 'Off how?' },
      { role: 'W-Am', text: 'We normally fill around fifteen of those slots a week. This week we\'re at four, and it\'s already Wednesday.' },
      { role: 'M-Au', text: 'When did that start?' },
      { role: 'W-Am', text: 'Last week was normal right through to Friday. It\'s since Monday that the online bookings for them have dried up.' },
      { role: 'M-Au', text: 'Any idea why?' },
      { role: 'W-Am', text: 'Hard to say — maybe the reminder e-mail we usually send didn\'t go out this time.' },
      { role: 'M-Au', text: 'I\'ll get a reminder posted on our website today, in case people have simply forgotten their pets are due, and see if that brings the bookings back up.' },
      { role: 'W-Am', text: 'Good idea. I\'ll keep an eye on the figures.' },
    ],
    ja: '獣医クリニックの受付主任の女性が同僚ブラムに、年次健診の予約件数が急に減っていると報告する。通常は週15件ほど埋まる枠が今週は4件にとどまっており、先週は金曜まで普段どおりだったが、今週の月曜からオンライン予約が途絶えているため、今週に入ってからの変化だとわかる。原因ははっきりしないが、案内メールが送られていない可能性を挙げ、ブラムはその日のうちにウェブサイトへお知らせを掲載し、件数が戻るか様子を見ると答える。',
    v: [['slot (booking ~)', '予約枠'], ['reminder e-mail', '案内メール'], ['keep an eye on', '注意して見守る']],
    q: [
      { tag: '概要', qid: 'v6q44p', s: 'What problem does the woman report?',
        c: ['The booking system has double-booked some slots.', 'A delivery of pet medicine is running late.', 'Fewer clients are booking annual check-ups.', 'Calls to the front desk keep dropping.'],
        a: 2,
        e: '女性は「通常は週15件ほど埋まる健診の枠が、今週はまだ4件しかない」と報告している。',
        w: ['予約システムの二重予約についての言及は会話のどこにも出てこない。', 'ペット用医薬品の配送についての言及は会話のどこにも出てこない。', '正解。女性は "something\'s off with the yearly wellness exams" と切り出し、"We normally fill around fifteen of those slots a week. This week we\'re at four" と述べている。', '女性が報告しているのは健診の "online bookings" が減ったことで、受付への電話については（切れる・減るのどちらの意味でも）何も述べていない。'] },
      { tag: '詳細', qid: 'v6q45p', s: 'According to the woman, when did the problem start?',
        c: ['First thing this morning', 'At the start of this week', 'About two weeks ago', 'Near the end of last month'],
        a: 1,
        e: '女性は「先週は金曜まで普段どおりで、今週の月曜からオンライン予約が途絶えている」と述べている。',
        w: ['女性は "It\'s since Monday that the online bookings for them have dried up." と述べ、会話の時点は "it\'s already Wednesday" なので、問題は月曜から続いている。今朝始まったのではない。', '正解。女性は "It\'s since Monday that the online bookings for them have dried up." と述べており、今週の初め（月曜）から予約が減っていると説明している。', '2週間前についての言及は会話のどこにも出てこない。', '先月末についての言及は会話のどこにも出てこない。'] },
      { tag: '次の行動', qid: 'v6q46p', s: 'What does the man say he will do?',
        c: ['Raise it at the next staff meeting', 'Go through the recent records', 'Put a notice for clients online', 'Cover the front desk for a while'],
        a: 2,
        e: 'ブラムは「今日中にウェブサイトへお知らせを掲載し、件数が戻るか様子を見る」と述べている。',
        w: ['定例会議で取り上げるという話は会話のどこにも出てこない。', '過去の記録を調べるという話は会話のどこにも出てこない（予約件数を洗い出したのは女性であり、ブラムではない）。', '正解。', '受付を代わるという話は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 47–49 ─────────────────────────────────────────── */
  set({
    n: [47, 48, 49], lv: 4,
    s: [
      { role: 'M-Br', text: 'Hi, I need someone to look at my bike — a delivery van caught it while it was locked outside my building, and it toppled onto the pavement.' },
      { role: 'W-Cn', text: 'Let\'s see... the impact\'s bent the rear gear mechanism pretty badly. Did it still change gears afterwards?' },
      { role: 'M-Br', text: 'No, it\'s been stuck in one gear since it happened.' },
      { role: 'W-Cn', text: 'That confirms it. Normally we\'d straighten it and fit a few new pieces from a repair kit, but the kit for this model\'s on back order everywhere right now. So I\'d rather order a whole new mechanism — the supplier can get one to us in a few days.' },
      { role: 'M-Br', text: 'Whatever gets me moving again fastest.' },
      { role: 'W-Cn', text: 'In the meantime, I\'ve got a loaner out back you\'re welcome to take — just bring it back within a week.' },
      { role: 'M-Br', text: 'Perfect, thank you.' },
    ],
    ja: '男性客が Fulbrook Cycles に自転車を持ち込み、建物の外に施錠して停めていたところ配送用のバンに接触されて倒れたと説明する。店員が確認すると、後部の変速機構がひどく曲がっており、変速ができなくなっている。通常なら部品を交換して修理するところだが、この型の修理キットはどこも入荷待ちのため、機構を丸ごと新しいものに交換することを提案し、部品の手配には数日かかると伝える。待っている間の代車も用意されており、1週間以内に返却すればよいと案内される。',
    v: [['gear mechanism', '変速機構'], ['on back order', '入荷待ちで'], ['loaner', '（貸し出し用の）代替品']],
    q: [
      { tag: '詳細', qid: 'v6q47p', s: 'What does the man say happened to his bicycle?',
        c: ['A sudden downpour left it soaked overnight.', 'The chain slipped off while he was riding.', 'It fell over when a van clipped it.', 'One pedal cracked on a long ride.'],
        a: 2,
        e: '男性は「建物の外に施錠して停めていたところ、配送用のバンに接触されて倒れた」と述べている。',
        w: ['大雨についての言及は会話のどこにも出てこない。', 'チェーンが外れたという話は会話のどこにも出てこない。', '正解。', 'ペダルが割れたという話は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v6q48p', s: 'Why does the woman recommend replacing the part rather than repairing it?',
        c: ['The internal parts show heavy wear.', 'A replacement costs less than a repair kit.', 'Repairs on this model void the warranty.', 'Spare parts for repair are out of stock.'],
        a: 3,
        e: '店員は「専用の修理キットはこの型番のものがどこも入荷待ちで、部品を揃えての修理ではなく、丸ごと新しい機構に交換したい」と述べている。',
        w: ['内部部品の摩耗についての言及は会話のどこにも出てこない。曲がっているのであって摩耗ではない。', '費用の比較についての言及は会話のどこにも出てこない。', '保証についての言及は会話のどこにも出てこない。', '正解。店員は "the kit for this model\'s on back order everywhere right now. So I\'d rather order a whole new mechanism" と述べており、修理用の部品がどこも入荷待ちであることを理由に交換を選ぶと説明している。'] },
      { tag: '詳細', qid: 'v6q49p', s: 'What does the woman say about the bicycle she is lending him?',
        c: ['It is due back in seven days.', 'It has a smaller frame than his.', 'It comes fitted with a basic lock.', 'It needs its tyres pumped up first.'],
        a: 0,
        e: '店員は「1週間以内に返却してほしい」と述べている。',
        w: ['正解。', 'フレームの大きさについての言及は会話のどこにも出てこない。', '鍵についての言及は会話のどこにも出てこない。', 'タイヤの空気圧についての言及は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 50–52 ─────────────────────────────────────────── */
  /* 申し送り：Q50 のくじが C のため、直前の女性の発話は「(彼が)持っているか」を
     尋ねる形にしている（"Do you have it?"）。 */
  set({
    n: [50, 51, 52], lv: 4, sid: 'v6-p3-50b',
    s: [
      { role: 'W-Br', text: 'Hi Fintan, quick one — I can\'t find the signed onboarding paperwork for Foxhall Group on the shared drive. Do you have it?' },
      { role: 'M-Cn', text: 'It\'s been sitting on my desk for a week. The scanner up here\'s been out of action all that time, so I\'ll run it down to reception and send it over right after this call.' },
      { role: 'W-Br', text: 'Perfect, thanks. While I\'ve got you, they\'ve also logged a ticket about slow load times on their dashboard.' },
      { role: 'M-Cn', text: 'I saw that come through. They\'ve only been with Brackwell since February, so I\'m surprised to see performance issues cropping up in a setup this new.' },
      { role: 'W-Br', text: 'So you think it\'s on our end, then?' },
      { role: 'M-Cn', text: 'Probably. That\'s outside what our team handles day to day, so I\'ll pass it to the platform team today and let them dig into it properly.' },
      { role: 'W-Br', text: 'Great, I\'ll let Foxhall know someone\'s looking into it.' },
    ],
    ja: 'ソフトウェア会社 Brackwell Software の社員2名が業務連絡を交わす。女性が顧客 Foxhall Group の契約書類が共有ドライブに見当たらないと同僚フィンタンに尋ねると、フィンタンは自分の机の上に置いたままだったこと、その間ずっとスキャナーが故障していて送れずにいたことを説明し、通話後すぐに受付まで持って行って送ると答える。あわせて、その顧客からダッシュボードの表示が遅いという問い合わせが来ていることを伝えると、フィンタンは今年2月からの顧客なのに不具合が出ていることに驚き、自分たちのチームの管轄外だとして、その日のうちにプラットフォームチームへ引き継ぐと答える。',
    v: [['onboarding paperwork', '契約手続き書類'], ['shared drive', '共有ドライブ'], ['dashboard', '（管理画面の）ダッシュボード'], ['out of action', '故障して使えない']],
    q: [
      { tag: '意図', qid: 'v6q50p', t: ['p3int'], s: 'What does the man mean when he says, "It\'s been sitting on my desk for a week."?',
        c: ['He is admitting he forgot about it.', 'He needs a colleague\'s approval first.', 'He has the document the woman needs.', 'He sees the request as a low priority.'],
        a: 2,
        e: '直前で女性が「共有ドライブに見当たらないが、あなたは持っているか」と尋ねたのに対し、男性は「机の上にずっと置いたままだった」と答え、続けてスキャナーが故障していたので送れずにいたと説明している。書類は自分の手元にあることを伝えている。',
        w: ['男性は "The scanner up here\'s been out of action all that time" と、送れなかった具体的な理由を説明しており、単に忘れていたのではない。', '承認についての言及は会話のどこにも出てこない。', '正解。直前で女性が "Do you have it?" と尋ねたのに対し、男性は "It\'s been sitting on my desk for a week." と答えており、書類は自分の手元にあることを伝えている。', 'すぐに受付まで持って行って送ると述べており、優先度が低いという話は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v6q51p', s: 'What does the man say about the client?',
        c: ['It has offices in several countries.', 'It uses an older version of the software.', 'It joined Brackwell earlier this year.', 'It changed its main contact recently.'],
        a: 2,
        e: '男性は「その顧客は今年2月からブラックウェルの顧客だ」と述べている。',
        w: ['複数国に拠点を持つという話は会話のどこにも出てこない。', '男性は "a setup this new" と述べており、契約したばかりの新しい環境だとしている。旧バージョンの使用についての言及は会話のどこにも出てこない。', '正解。男性は "They\'ve only been with Brackwell since February" と述べている。', '担当窓口が最近変わったという話は会話のどこにも出てこない。'] },
      { tag: '次の行動', qid: 'v6q52p', s: 'What does the man say he will do today?',
        c: ['Draft a reply to send to the client', 'Forward the ticket to another team', 'Schedule a call to discuss the issue', 'Update the notes on the client\'s account'],
        a: 1,
        e: '男性は「これは自分たちのチームが日常的に扱う範囲の外にあるので、今日中にプラットフォームチームへ引き継ぐ」と述べている。',
        w: ['返信文の作成については会話のどこにも出てこない（顧客への連絡は女性が担うと述べている）。', '正解。', '通話の設定については会話のどこにも出てこない。', 'アカウントの記録更新については会話のどこにも出てこない。'] },
    ],
  }),
];
