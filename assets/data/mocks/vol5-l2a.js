/* =============================================================
   予想模試 Vol.5 — Part 3 前半（No.32–52）
   総仕上げ回。
   ============================================================= */

/* `qid` は設問 id の明示指定。中身を差し替えた設問は SRS の履歴を引き継がせないため、
   通し番号由来の既定 id ではなく新しい id（v5qNNp）を与える（`no` は絶対に変えない）。 */
const set = (o) => ({
  id: `v5-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v5q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2A = [

  /* ── 32–34 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     Q32=概要(週末の人手不足)。Q33 は一覧の持参、Q34 は入居者の息子と話す。他の選択肢の話題は一切出さない。 */
  set({
    n: [32,33,34], lv: 3,
    s: [
      { role: "W-Br", text: "Have you seen the rota for this weekend? We're two care assistants short on Saturday, and Sunday morning isn't much better." },
      { role: "M-Am", text: "I have. Two people are out sick, and I still haven't found anyone to fill in." },
      { role: "W-Br", text: "Could an agency cover it?" },
      { role: "M-Am", text: "I've asked, but they won't confirm until Friday afternoon. I'm meeting the home manager on Thursday to ask about paying for extra hours, and I'd like you to come along. Could you bring a rundown of what we've paid out for temporary staff this quarter?" },
      { role: "W-Br", text: "Sure. I can pull that together tomorrow morning." },
      { role: "M-Am", text: "Thanks. Oh, and one of the residents' sons is waiting in the lounge. He wanted a few minutes before he heads home, so I'll go and have a word with him now." },
      { role: "W-Br", text: "Good idea. I'll see you later." },
    ],
    ja: "介護付き老人ホームの同僚2人が、今週末の人手不足について話す。土曜は介護職員が2人足りず、日曜の午前も厳しい。病欠が2人出ており、代わりはまだ見つかっていない。派遣会社の返事は金曜の午後になる。男性は木曜にホームの責任者と会って追加の勤務時間の支払いについて相談する予定で、女性に同席を求め、今期に臨時職員へ支払った額の一覧を持ってくるよう頼む。女性は明日の朝にまとめると答える。最後に男性は、入居者の息子がラウンジで待っているので、話をしに行くと言う。",
    v: [["rota","勤務表"],["care assistant","介護職員"],["agency","派遣会社"],["rundown","要点の一覧"]],
    q: [
      { tag: "概要", qid: 'v5q32p', s: "What are the speakers mainly discussing?",
        c: ["A leak in the laundry room ceiling","A shortage of staff for the weekend shift","A delivery of new mobility equipment","A visit from a health inspector"],
        a: 1,
        e: "冒頭で女性が `We're two care assistants short on Saturday, and Sunday morning isn't much better.` と述べ、以降も病欠の代わりと派遣会社の手配を話している。主題は週末の勤務の人手不足である。",
        w: ["洗濯室の天井の水漏れは、会話のどこにも出てこない。","正解。","新しい移動補助器具の納品は、会話のどこにも出てこない。","保健当局の検査官の訪問は、会話のどこにも出てこない。"] },
      { tag: "詳細", qid: 'v5q33p', s: "What does the man ask the woman to bring to a later meeting?",
        c: ["A calendar of outings","A set of feedback forms","A summary of expenses","A spare storeroom key"],
        a: 2,
        e: "男性は木曜の面談に女性の同席を求め、`Could you bring a rundown of what we've paid out for temporary staff this quarter?` と頼んでいる。臨時職員に支払った額の一覧、つまり費用のまとめである。",
        w: ["行事の予定表を持参するという話は、会話のどこにも出てこない。","意見用紙を持参するという話は、会話のどこにも出てこない。","正解。","予備の保管室の鍵を持参するという話は、会話のどこにも出てこない。"] },
      { tag: "次の行動", qid: 'v5q34p', s: "What will the man most likely do next?",
        c: ["Phone the head office","Update a shared file","Speak with a visiting relative","Walk to another building"],
        a: 2,
        e: "最後に男性が `one of the residents' sons is waiting in the lounge` と言い、`I'll go and have a word with him now` と続ける。入居者の家族と話しに行く。",
        w: ["本部に電話するという話は、会話のどこにも出てこない。","共有ファイルを更新するという話は、会話のどこにも出てこない。`pull that together tomorrow morning` は女性が一覧をまとめることで、男性の行動ではない。","正解。","男性が向かう先は `the lounge` で、別の建物へ行くという話は出てこない。"] },
    ],
  }),

  /* ── 35–37 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     Q35=生産終了品の特別注文。Q36 の申し出は郵送のみ。Q37 は店のサイトを見る（店内の記録・在庫室とは別）。 */
  set({
    n: [35,36,37], lv: 3,
    s: [
      { role: "M-Au", text: "Good morning. I'm after a set of four goods wagons in the green livery the maker used to sell. Your catalogue says it's no longer made. Is there any way to order it?" },
      { role: "W-Br", text: "That set was taken out of production last spring, I'm afraid. But makers sometimes keep a few boxes back for shops, so I can put in a special order and ask them to look." },
      { role: "M-Au", text: "That would be great. I live about an hour's drive from you, though." },
      { role: "W-Br", text: "Then if it does turn up, we can send it out to your address, so you won't have to make the trip." },
      { role: "M-Au", text: "Perfect. Thank you." },
      { role: "W-Br", text: "Before I contact the maker, I'll look at our online shop. Its clearance page sometimes has the last few sets. Could you hold for a moment?" },
      { role: "M-Au", text: "Of course." },
    ],
    ja: "客の男性が模型店に電話し、メーカーがもう作っていない貨車4両セットを注文できないかと尋ねる。店員は、そのセットは昨春に生産が終わったが、メーカーが店向けに数箱を残していることがあるので、特別注文を入れて探してもらえると言う。男性が店から車で1時間の所に住むと言うと、入荷すれば自宅の住所へ送れると申し出る。メーカーに連絡する前に、店のオンラインショップの在庫処分のページを確認すると言い、男性に待ってもらう。",
    v: [["goods wagon","貨車"],["livery","（車両の）塗装"],["special order","特別注文"],["clearance","在庫処分"]],
    q: [
      { tag: "概要", qid: 'v5q35p', s: "What is the conversation mainly about?",
        c: ["A special order for a discontinued item","A repair to a damaged model","A membership in a hobby club","A return of an unwanted product"],
        a: 0,
        e: "男性が `Your catalogue says it's no longer made. Is there any way to order it?` と尋ね、店員が `I can put in a special order` と応じている。生産が終わった商品の特別注文が本題である。",
        w: ["正解。","破損した模型の修理の話は、会話のどこにも出てこない。","趣味のクラブへの入会の話は、会話のどこにも出てこない。","不要な商品の返品の話は、会話のどこにも出てこない。"] },
      { tag: "詳細", qid: 'v5q36p', s: "What does the woman offer to do?",
        c: ["Call him back later that day","Post an item to his home","Waive a small fee","E-mail him a confirmation"],
        a: 1,
        e: "店員は `we can send it out to your address, so you won't have to make the trip.` と、入荷後に自宅の住所へ送ると申し出ている。",
        w: ["店員が男性に折り返し電話をするとは言っていない。`Could you hold for a moment?` は、電話を保留にして待ってもらう依頼である。","正解。","手数料の免除の話は、会話のどこにも出てこない。","確認のメールを送るという話は、会話のどこにも出てこない。"] },
      { tag: "次の行動", qid: 'v5q37p', s: "What will the woman most likely do next?",
        c: ["Look in the stockroom","Search a computer record","Speak to the shop owner","Check the shop's website"],
        a: 3,
        e: "店員は `I'll look at our online shop. Its clearance page sometimes has the last few sets.` と述べ、そのまま男性に待ってもらっている。次にするのは店のオンラインショップの確認である。",
        w: ["店の奥の在庫室を見るという話は、会話のどこにも出てこない。","店内の記録（注文・修理・会員の台帳）を調べるとは言っていない。確認するのは `our online shop`（店のサイト）である。","店主に相談するという話は、会話のどこにも出てこない。","正解。"] },
    ],
  }),

  /* ── 38–40 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     Q38=最後のスポンジが冷めるのを待つ。Q39 は直前が進み具合の質問のみ。ミキサーがバンにあることは引用で初めて出す。Q40=3人で注文主に電話。 */
  set({
    n: [38,39,40], lv: 4, k: "conversation with three speakers",
    s: [
      { role: "W-Br", text: "That's the last of the layers baked. I can't start stacking until the final lot of sponges has cooled right down, though." },
      { role: "W-Au", text: "Has anyone started on the cream for the filling? The order's due at four." },
      { role: "M-Am", text: "The mixer's in the van. I left it there after yesterday's market, and I haven't brought it in to wash it yet." },
      { role: "W-Au", text: "So the filling won't be ready for another hour at least, and the sponges still have to be sliced and layered after that." },
      { role: "W-Br", text: "Which means we'll miss four o'clock by a fair bit." },
      { role: "M-Am", text: "Then whoever ordered it needs to hear that from us before the afternoon is out." },
      { role: "W-Au", text: "Agreed. Let's all go to the office and give them a ring now." },
    ],
    ja: "洋菓子店の厨房で、女性2人と男性が、午後4時納品の大口注文の準備を進めている。一人の女性は、焼けたスポンジの最後の分が十分に冷めるまで積み重ねの作業に入れないと言う。もう一人の女性がフィリング用のクリームに取りかかったか尋ねると、男性は、ミキサーは昨日の市場のあとからバンに積んだままで、まだ洗っていないと答える。フィリングは少なくとも1時間遅れ、そのあとにスポンジを切って重ねる作業も残るため、4時に間に合わないと分かり、3人は注文した人に知らせるため、事務所へ行って電話することにする。",
    v: [["sponge","スポンジ生地"],["stack","積み重ねる"],["filling","フィリング"],["give them a ring","（彼らに）電話する"]],
    q: [
      { tag: "詳細", qid: 'v5q38p', s: "What does one of the women say she is waiting for?",
        c: ["A delivery of ingredients","A repaired oven","A customer's confirmation","A tray of cooling sponges"],
        a: 3,
        e: "一人目の女性が `I can't start stacking until the final lot of sponges has cooled right down` と言っている。最後のスポンジが冷めるのを待っている。",
        w: ["材料の納品を待っているという話は、会話のどこにも出てこない。","修理されたオーブンの話は、会話のどこにも出てこない。","客の確認を待っているという話は、会話のどこにも出てこない。","正解。"] },
      { tag: "意図", qid: 'v5q39p', t: ["p3int"], s: "Why does the man say, \"The mixer's in the van\"?",
        c: ["To turn down an offer of help","To explain why some work is late","To object to a change of plan","To suggest that they leave soon"],
        a: 1,
        e: "直前に別の女性が `Has anyone started on the cream for the filling?` と作業の進み具合を尋ね、男性は `The mixer's in the van` と答えて、洗ってもいないと続ける。クリームに着手できていない理由の説明である。",
        w: ["直前の発言は進み具合の質問で、手伝いの申し出ではない。断る相手の申し出が会話に出てこない。","正解。","直前の発言は進み具合の質問で、計画の変更の提案ではない。男性も計画を変えるよう求めていない。","男性はミキサーの場所を述べており、出発を促す発言は出てこない。`The order's due at four.` は納期を述べた文で、出発を促すものではない。"] },
      { tag: "次の行動", qid: 'v5q40p', s: "What will the speakers most likely do next?",
        c: ["Load a vehicle","Contact a customer","Taste a test batch","Take a short break"],
        a: 1,
        e: "最後に女性が `Let's all go to the office and give them a ring now.` と言い、3人で注文した人に電話をかけることにしている。",
        w: ["車に荷を積む話は、会話のどこにも出てこない。ミキサーが車にあるのは、積み込みの話ではない。","正解。","試作品を味見するという話は、会話のどこにも出てこない。","休憩を取るという話は、会話のどこにも出てこない。"] },
    ],
  }),

  /* ── 41–43 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     Q41=報告書の写しの依頼のみ。Q42=機材（スキャナー）は修理工場。Q43=同僚の予定表を見る。 */
  set({
    n: [41,42,43], lv: 3,
    s: [
      { role: "W-Br", text: "Hello, it's about the Barrowdean job. Could you send me your write-up from the survey? Our architect is waiting to see it." },
      { role: "M-Au", text: "I'd be glad to, but the final section isn't finished. The last day's measurements are still stored on the laser scanner, and I can't pull them off yet." },
      { role: "W-Br", text: "Oh dear. Where is the scanner at the moment?" },
      { role: "M-Au", text: "It's in for repair. Its screen cracked when it was knocked off a tripod, and it's been with the repairers since Monday." },
      { role: "W-Br", text: "How soon can you get at the data, then?" },
      { role: "M-Au", text: "Once someone collects it. One of my colleagues will be driving past the workshop, so I'll look at his diary and see which day suits. As soon as I have the data, the write-up will be on its way to you." },
      { role: "W-Br", text: "Thank you. I'll tell the architect to expect it." },
    ],
    ja: "取引先の女性が測量事務所に電話し、Barrowdean の案件の測量のまとめ（報告書）を送ってほしいと頼む。建築家が待っているという。男性は、最終日の計測値がまだレーザースキャナーの中にあり、取り出せないと説明する。スキャナーは三脚から落ちて画面が割れ、月曜から修理に出ている。男性は、同僚が工場の近くを車で通るので、その同僚の予定表を見て受け取りに行ける日を確かめると言い、データが取れしだいまとめを送ると約束する。",
    v: [["survey","測量"],["write-up","（調査の）まとめ"],["laser scanner","レーザースキャナー"],["workshop","工場"],["tripod","三脚"],["diary","予定表"]],
    q: [
      { tag: "詳細", qid: 'v5q41p', s: "Why is the woman calling?",
        c: ["To reschedule a site visit","To request a copy of a report","To ask about extra costs","To pass on new contact details"],
        a: 1,
        e: "冒頭で女性が `Could you send me your write-up from the survey?` と頼んでいる。電話の用件は、測量のまとめ（報告書）を送ってもらう依頼である。",
        w: ["現場訪問の日程変更の話は、会話のどこにも出てこない。","正解。","追加費用についての質問は、会話のどこにも出てこない。","新しい連絡先を伝える話は、会話のどこにも出てこない。"] },
      { tag: "詳細", qid: 'v5q42p', s: "Where does the man say the equipment is now?",
        c: ["On another survey job","At a repair workshop","With a parcel courier","In his office storeroom"],
        a: 1,
        e: "機材の場所を聞かれた男性は `It's in for repair.` と答え、`it's been with the repairers since Monday` と続けている。修理業者の手元にある。",
        w: ["別の測量の仕事に出ているという話は、会話のどこにも出てこない。","正解。","宅配業者に預けているという話は、会話のどこにも出てこない。","事務所の保管室にあるという話は、会話のどこにも出てこない。"] },
      { tag: "次の行動", qid: 'v5q43p', s: "What will the man most likely do next?",
        c: ["Check a colleague's schedule","E-mail a set of photos","Visit the site in person","Phone the local council"],
        a: 0,
        e: "男性は `I'll look at his diary and see which day suits.` と述べ、同僚の予定を確認すると言っている。",
        w: ["正解。","写真をメールで送るという話は、会話のどこにも出てこない。","男性が現場を訪れるという話は、会話のどこにも出てこない。同僚が通るのは修理工場の近くである。","市役所に電話するという話は、会話のどこにも出てこない。"] },
    ],
  }),

  /* ── 44–46 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     図表。女性の希望は「細長い型」と「中庭を通る入口」。目的（動画の収録）は2列の値と結びつけない。鍵の置き場所は搬入の話と結びつけない。 */
  set({
    n: [44,45,46], lv: 4, t: ["graphic"],
    graphic: {"t":"table","title":"Kitchens Available for Hire","head":["Kitchen","Floor Plan","Loading Access"],"rows":[["Kitchen 5","Island","Rear lane"],["Kitchen 21","Galley","Rear lane"],["Kitchen 13","Galley","Side gate"],["Kitchen 2","Island","Side gate"]]},
    s: [
      { role: "W-Au", text: "Good afternoon. I'd like to book one of your kitchens for next Tuesday. We're recording a recipe video for our website." },
      { role: "M-Br", text: "Certainly. Four are free that day. Two of them have a worktop in the middle that you can walk all the way round, and the other two are long and narrow, with counters along both walls. Does that matter to you?" },
      { role: "W-Au", text: "I'd like the long, narrow kind. I've always cooked in a kitchen like that, so I know where everything goes." },
      { role: "M-Br", text: "Fine. Those two differ in how you bring things in. One is reached by the service road that runs behind the building, and the other through the entrance by the yard to the left of the building." },
      { role: "W-Au", text: "The yard entrance, please. The supplier delivering our crates has already used it for another job." },
      { role: "M-Br", text: "Then that's the one for you. We close at six, so when you've finished, please hand the key to our night watchman." },
    ],
    ja: "業務用キッチン貸しの受付で、客の女性が来週火曜の予約を申し込む。ウェブサイト用のレシピ動画を収録するという。男性は空いている4室を、中央に回り込める作業台があるタイプ2室と、両側の壁沿いに調理台が並ぶ細長いタイプ2室に分けて説明し、女性は細長いほうを希望する。搬入は、建物の裏を通るサービス道路から入る口と、建物の左の中庭のそばの入口があり、女性は、納品業者が使ったことのある中庭のそばの入口を選ぶ。男性は、利用後は鍵を夜間の警備員（夜警）に渡すよう頼む。",
    v: [["worktop","調理台"],["counter","カウンター"],["service road","サービス道路"],["crate","箱"]],
    q: [
      { tag: "図表", qid: 'v5q44p', s: "Look at the graphic. Which kitchen will the woman book?",
        c: ["Kitchen 5","Kitchen 21","Kitchen 13","Kitchen 2"],
        a: 2,
        e: "女性は、細長く両側の壁沿いに調理台があるタイプ（表の Galley）と、建物の左の中庭のそばの入口（表の Side gate）を選んでいる。表で Galley かつ Side gate の行は Kitchen 13 だけである。",
        w: ["Kitchen 5 は Island で Rear lane の行。女性が選んだ細長いタイプでも中庭のそばの入口でもない。","Kitchen 21 は Galley で細長いタイプだが、Rear lane（建物の裏のサービス道路）で、女性が選んだ中庭のそばの入口ではない。","正解。","Kitchen 2 は Side gate で入口は合うが、Island で、女性が選んだ細長いタイプではない。"] },
      { tag: "詳細", qid: 'v5q45p', t: ["p3detail"], s: "What is the purpose of the woman's booking?",
        c: ["Filming a cooking video","Baking for a market stall","Hosting a private dinner","Training new staff members"],
        a: 0,
        e: "冒頭で女性が `We're recording a recipe video for our website.` と予約の目的を述べている。",
        w: ["正解。","市場の屋台のために焼くという話は、会話のどこにも出てこない。","内輪の夕食会を開くという話は、会話のどこにも出てこない。","新人の研修という話は、会話のどこにも出てこない。"] },
      { tag: "詳細", qid: 'v5q46p', t: ["p3detail"], s: "Where does the man ask the woman to leave the key?",
        c: ["At the front desk","In a drop box outside","With the security guard","Under the office door"],
        a: 2,
        e: "男性は最後に `please hand the key to our night watchman` と頼んでいる。夜間の警備員に渡す。",
        w: ["受付に置くという話は、会話のどこにも出てこない。","外の返却箱に入れるという話は、会話のどこにも出てこない。","正解。","事務所のドアの下に差し込むという話は、会話のどこにも出てこない。"] },
    ],
  }),

  /* ── 47–49 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     Q47=ページが1枚なくなっている。Q48=表紙は濃い茶色のヤギ革1種類のみ。Q49=金曜は依頼人の来訪のみ。 */
  set({
    n: [47,48,49], lv: 3,
    s: [
      { role: "W-Cn", text: "How's the restoration of the old hymnal coming along?" },
      { role: "M-Au", text: "Slowly. When I took the old cover off, I found that one of the pages near the end isn't there any more. Only the stub is left in the spine." },
      { role: "W-Cn", text: "That's a shame, but it can go in the condition report. Now, for the new cover, I'd use a goat leather in a deep brown. It wears well, and the book will be handled a lot." },
      { role: "M-Au", text: "That sounds right to me. I'll order a skin today. Oh, and the lady who brought the book in is dropping by on Friday to see how it's getting on." },
      { role: "W-Cn", text: "Good. Then we'd better have the pages laid out for her to see." },
    ],
    ja: "古書の製本・修復工房で、責任者の女性と職人の男性が賛美歌集の修復について話す。男性は、古い表紙を外したところ、終わり近くのページが1枚なくなっており、綴じ目に切れ端だけが残っていると報告する。女性はそれを状態報告書に記録すればよいと言い、新しい表紙には濃い茶色のヤギ革を勧める。傷みにくく、よく手に取られる本だからという。男性は賛成し、革は今日注文すると言ったうえで、本を持ち込んだ女性が金曜に進み具合を見に工房へ来ると伝える。",
    v: [["hymnal","賛美歌集"],["stub","（抜けたページの）切れ端"],["spine","背"],["condition report","状態報告書"],["wears well","長持ちする"]],
    q: [
      { tag: "詳細", qid: 'v5q47p', s: "What problem does the man mention?",
        c: ["A delivery of gold leaf is late","A pressing tool has broken","A client has changed the deadline","A page has gone missing"],
        a: 3,
        e: "男性は `one of the pages near the end isn't there any more` と、ページが1枚なくなっていることを報告している。",
        w: ["金箔の納品の遅れは、会話のどこにも出てこない。","押さえ道具の故障は、会話のどこにも出てこない。","依頼人が納期を変えたという話は、会話のどこにも出てこない。","正解。"] },
      { tag: "詳細", qid: 'v5q48p', s: "What material does the woman suggest for the new cover?",
        c: ["A dark goatskin leather","A plain linen cloth","A heavy marbled paper","A pale calf vellum"],
        a: 0,
        e: "女性は `I'd use a goat leather in a deep brown. It wears well, and the book will be handled a lot.` と、濃い茶色のヤギ革を勧めている。",
        w: ["正解。","亜麻布を勧める発言は、会話のどこにも出てこない。","大理石模様の紙を勧める発言は、会話のどこにも出てこない。","子牛の皮紙を勧める発言は、会話のどこにも出てこない。女性が勧める素材はヤギ革だけである。"] },
      { tag: "詳細", qid: 'v5q49p', s: "What does the man say will happen on Friday?",
        c: ["A client will visit the workshop","A courier will collect a finished book","A new apprentice will start work","A reporter will interview the owner"],
        a: 0,
        e: "男性は `the lady who brought the book in is dropping by on Friday to see how it's getting on` と、本を持ち込んだ依頼人が金曜に工房へ来ると述べている。",
        w: ["正解。","宅配業者が完成品を引き取るという話は、会話のどこにも出てこない。","新しい見習いが働き始めるという話は、会話のどこにも出てこない。","記者が責任者に取材するという話は、会話のどこにも出てこない。"] },
    ],
  }),

  /* ── 50–52 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     Q50=配色の変更の依頼のみ。Q51 の曜日は金曜のみ（他の曜日は出さない）。Q52=週末は空き部屋の片付けのみ。 */
  set({
    n: [50,51,52], lv: 3,
    s: [
      { role: "W-Am", text: "Bellworth Interiors, how can I help?" },
      { role: "M-Am", text: "Hi, it's about my living room. I know we agreed on the green, but I've been looking at the sample against my furniture, and I'd like to swap it for a warm gray." },
      { role: "W-Am", text: "That's no problem. I'll bring some new samples to the house so you can see them in the room. When are you free?" },
      { role: "M-Am", text: "I'm out at work most days, but I have Friday afternoon free." },
      { role: "W-Am", text: "Then Friday it is. I'll be at your place around three." },
      { role: "M-Am", text: "Great. I'm going to empty out the guest room this weekend anyway, so there'll be somewhere to move the living room furniture when the work starts." },
      { role: "W-Am", text: "Good thinking. That'll make things easier for the crew." },
    ],
    ja: "内装デザイン事務所に、自宅の内装を依頼している男性が電話する。居間の壁の色を、合意済みの緑から温かみのある灰色に変えたいと言う。デザイナーの女性は新しい見本を自宅に持参すると言い、男性は日中は仕事だが金曜の午後なら空いていると答える。女性は金曜の3時ごろに行くと約束する。男性は、工事が始まったら居間の家具を移せるよう、この週末に客用の寝室を片付けると言う。",
    v: [["swap","取り替える"],["sample","見本"],["crew","作業班"]],
    q: [
      { tag: "概要", qid: 'v5q50p', s: "Why is the man calling?",
        c: ["To ask about the status of a project","To request a change to a color scheme","To complain about a missed appointment","To inquire about pricing for new work"],
        a: 1,
        e: "男性は `I know we agreed on the green` と述べたうえで、`I'd like to swap it for a warm gray.` と、色の変更を頼んでいる。",
        w: ["仕事の進み具合を尋ねる話は、会話のどこにも出てこない。","正解。","約束の日に来なかったことへの苦情は、会話のどこにも出てこない。","新しい仕事の料金を尋ねる話は、会話のどこにも出てこない。"] },
      { tag: "詳細", qid: 'v5q51p', s: "When will the woman come to the man's home?",
        c: ["On Monday","On Wednesday","On Thursday","On Friday"],
        a: 3,
        e: "女性は `Then Friday it is. I'll be at your place around three.` と、金曜に男性の家へ行くと述べている。",
        w: ["月曜に行くという話は、会話のどこにも出てこない。","水曜に行くという話は、会話のどこにも出てこない。","木曜に行くという話は、会話のどこにも出てこない。","正解。"] },
      { tag: "詳細", qid: 'v5q52p', s: "What does the man say he will do this weekend?",
        c: ["Visit a furniture showroom","Clear out a spare room","Attend a family wedding","Host a dinner party"],
        a: 1,
        e: "男性は `I'm going to empty out the guest room this weekend anyway` と、週末に客用の寝室を片付けると述べている。",
        w: ["家具のショールームへ行くという話は、会話のどこにも出てこない。","正解。","家族の結婚式に出るという話は、会話のどこにも出てこない。","夕食会を開くという話は、会話のどこにも出てこない。"] },
    ],
  }),
];
