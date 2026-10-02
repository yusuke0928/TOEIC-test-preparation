/* =============================================================
   予想模試 Vol.5 — Part 7 単一文書 前半（No.147–164）
   総仕上げ回。
   ============================================================= */

const sp = (o) => ({
  id: `v5-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    // 設問 id は新規採番した qid（v5q<no>p）を使う。中身を差し替えたので、旧 id の SRS 履歴を引き継がない。
    id: x.qid || `v5q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7detail'], tag: x.tag,
    insertAt: x.insertAt, sentence: x.sentence,
  })),
});

export const R2 = [

  /* ── 147–148 掲示 ── */
  sp({
    n: [147,148], lv: 3,
    docs: [{
      label: "Notice",
      title: "Gorsemead Allotment Society — Notice to Plot Holders",
      head: "Spring Season Arrangements",
      body: [
        "With the growing season only weeks away, the committee asks every plot holder who wants manure this spring to place an order with the farm that supplies the society, using the telephone number pinned inside the tool-shed door, before 31 March. Orders received after that date cannot be added to the bulk delivery, which is made at the start of April.",
        "The annual spring inspection will take place on Saturday 18 April. Two committee members will walk every plot between nine and noon to see that the ground is being worked, and holders do not need to be present. A plot judged to be in good order needs no further action; the holders of the others will be given four weeks to catch up.",
        "The outcome for each plot will be set out on a sheet displayed beside the main entrance from Monday 20 April, so holders can look for themselves whenever they next visit.",
        "The standpipes will be switched on again on Wednesday 1 April.",
        "Gorsemead Allotment Society Committee",
      ],
    }],
    q: [
      { tag: "詳細", qid: "v5q147p",
        s: "What are plot holders asked to do by the end of March?",
        c: ["Fix a number sign to their plot","Remove old carpet laid over the soil","Order manure from the society's supplier","Return a signed tenancy renewal form"],
        a: 2,
        e: "第1段落で、委員会は堆肥がほしい区画利用者に、協会に資材を納めている農場へ「before 31 March」までに注文するよう求めている（「who wants manure this spring to place an order with the farm that supplies the society」）。3月末までに求められている行動はこの一つだけで、期限後の注文は4月初めの一括配送に載せられない、と理由も添えてある。",
        w: ["区画に番号札を取り付けることは、本文のどこにも求められておらず、言及なし。","土の上に敷いた古いカーペットの撤去は、本文のどこにも求められておらず、言及なし。","正解。「who wants manure this spring to place an order with the farm that supplies the society」とあり、期限は「before 31 March」。","借地契約の更新書類の提出は、本文のどこにも求められておらず、言及なし。"] },
      { tag: "詳細", qid: "v5q148p",
        s: "According to the notice, how will plot holders learn the results of the spring inspection?",
        c: ["From a letter sent to their home address","From a card left on their plot","From an e-mail sent by the secretary","From a list posted at the main gate"],
        a: 3,
        e: "第3段落に、区画ごとの見回りの結果は「a sheet displayed beside the main entrance」に掲げられ、利用者は次に来たときに自分で見られる、とある。個別に連絡が届く形ではなく、入口脇の掲示で知る形である。",
        w: ["自宅への手紙で知らせるという記述はなく、言及なし。結果は入口脇に掲げる一覧で示される。","区画にカードを残すという記述はなく、言及なし。","メールで知らせるという記述はなく、言及なし。","正解。「a sheet displayed beside the main entrance」と、入口脇に掲げる一覧で知らせるとある。"] },
    ],
  }),

  /* ── 149–150 メモ ── */
  sp({
    n: [149,150], lv: 3,
    docs: [{
      label: "Memo",
      head: "TO: Curatorial and Gallery Teams\nFROM: Glenys Gadsby, Head of Exhibitions\nDATE: 6 May\nSUBJECT: Handling session for the loan exhibition",
      body: [
        "The exhibition opens on 12 June. Every object in it has been lent to us by the rare-books and artefacts store of Gresford University, and because none of the items are ours, anyone who will touch them, whether to unpack, mount or move them, must first attend a handling session.",
        "The session will take place in the workroom on Thursday 14 May at 9.30 and will last about ninety minutes. It will be led by Gemma Gillard, who has looked after the museum’s own collection for more than twenty years and is the most experienced restorer on our team.",
        "Gloves will be provided. Anyone unable to attend should let me know by Friday 8 May so that a second session can be arranged.",
      ],
    }],
    q: [
      { tag: "詳細", qid: "v5q149p",
        s: "According to the memo, where are the objects in the exhibition coming from?",
        c: ["From a university's special collections","From a private collector in the region","From a national museum overseas","From the archive of a family-owned firm"],
        a: 0,
        e: "第1段落に、展示品はすべて「the rare-books and artefacts store of Gresford University」から借りたものだとある。大学の貴重書・資料の所蔵部門であり、大学の特別コレクションに当たる。",
        w: ["正解。「Every object in it has been lent to us by the rare-books and artefacts store of Gresford University」とある。","地域の個人収集家からの借用は言及なし。展示品はすべて大学の所蔵部門から借りたものと述べられている。","海外の国立博物館からの借用は言及なし。展示品はすべて大学の所蔵部門から借りたものと述べられている。","同族企業の資料室からの借用は言及なし。展示品はすべて大学の所蔵部門から借りたものと述べられている。"] },
      { tag: "詳細", qid: "v5q150p",
        s: "Who will lead the handling training session?",
        c: ["A specialist from an art transport firm","A senior conservator on the museum's staff","A trainer from a national heritage body","A manager from the museum's security team"],
        a: 1,
        e: "第2段落に、研修を率いるのは Gemma Gillard で、館の所蔵品を20年以上世話してきた、「the most experienced restorer on our team」だとある。館の職員のうち最も経験を積んだ修復担当者であり、上級の保存修復担当に当たる。",
        w: ["美術品輸送会社の専門家が研修に来るという記述はなく、言及なし。","正解。「It will be led by Gemma Gillard」で、館の所蔵品を長年世話してきた「the most experienced restorer on our team」とある。","遺産団体の講師が研修に来るという記述はなく、言及なし。","警備担当の責任者が研修に関わるという記述はなく、言及なし。"] },
    ],
  }),

  /* ── 151–152 広告 ── */
  sp({
    n: [151,152], lv: 3,
    docs: [{
      label: "Advertisement",
      title: "Hollycroft Wood-Fired Catering",
      head: "Real Pizza, Cooked Where You Are",
      body: [
        "Nothing beats a pizza lifted from the fire a minute after it was stretched. Hollycroft Wood-Fired Catering brings exactly that to birthdays, weddings, village fêtes and anything else worth celebrating: a real clay oven, a stack of split oak, and a crew who know what they are doing.",
        "Our oven travels on the open platform of our own lorry, held down with heavy straps, and it is lit and ready to cook within the hour of arriving. All we ask of you is a level patch of ground and a way in for the lorry.",
        "Choose from six classic toppings, or tell us what your guests like and we will build the menu around it. Vegetarian and gluten-free bases are always available.",
        "“We needed lunch for the whole site on our summer open day, and the pizzas kept coming for three hours without a single complaint about the wait. Hollycroft made it look easy.” — Gloria Gibbons, Garstone Engineering",
        "To ask about a date or request a quote, call 01632 960 417 or write to enquiries@hollycroft-catering.co.uk.",
      ],
    }],
    q: [
      { tag: "詳細", qid: "v5q151p",
        s: "According to the advertisement, how is the company's oven transported to events?",
        c: ["Inside a restored vintage van","On a trailer pulled by a car","In sections assembled at the venue","Strapped to a flatbed lorry"],
        a: 3,
        e: "第2段落に、窯は自社のトラックの「open platform」に「held down with heavy straps」で載せて運ばれる、とある。荷台が平らに開いたトラックにストラップで固定する運び方である。",
        w: ["古いバンの中に入れて運ぶという記述はなく、言及なし。窯は荷台の上に固定されて運ばれる。","車で引くトレーラーに載せるという記述はなく、言及なし。窯は自社のトラックの荷台に固定されて運ばれる。","現地で組み立てる分割式だという記述はなく、言及なし。本文は、窯が自社のトラックの荷台に固定されて運ばれると述べているだけである。","正解。「travels on the open platform of our own lorry, held down with heavy straps」とある。"] },
      { tag: "推測", t: ["p7inf"], qid: "v5q152p",
        s: "What can be inferred about the company from the advertisement?",
        c: ["It requires bookings several weeks in advance","It sources ingredients from local farms","It also operates a small restaurant","It has catered for large company events"],
        a: 3,
        e: "第4段落の客の声は、自社の夏の公開日に「the whole site」の昼食をこの業者が3時間途切れずに出し続けた、という内容である。投稿者は Garstone Engineering の名で書いており、会社の行事で大人数に食事を出した実績があると推せる。",
        w: ["予約を何週間も前に入れる必要があるという記述はなく、言及なし。日程は「To ask about a date」と問い合わせを促すだけである。","食材を地元の農場から仕入れているという記述はなく、言及なし。","小さなレストランを経営しているという記述はなく、言及なし。この業者は客の場所へ出向いて調理する形で紹介されている。","正解。客の声が「We needed lunch for the whole site on our summer open day」と、会社の公開日に敷地全体の昼食を任されたことを述べている。"] },
    ],
  }),

  /* ── 153–155 メール ── */
  /* 凍結・くじ：stem・選択肢・正解は設問先行方式の凍結のまま（qid は新規採番済み）。
     2026-10-01 難度の試作（規則A〜C）で本文を全面的に書き直した。第1巡の監査のあと、第1段落の口コミ・第4〜5段落の部品の案・vanity unit・leak を直した。
     stem・選択肢・くじの正解・id は変えていない。
     誤答の足場　153：ボイラー（別の時＝昨年10月の点検。第1段落）・シャワー（別の時・別の人物＝夫が3月に設置。第5段落）。足場は1文に1本ずつ分けた／
     154：床のシーツ（別の人物＝客本人。くじの正解）・作業員がしたこと3項目は、早着が第2段落、原因の説明と部品の持ち帰りが第3段落の隣り合う2文（原因の説明は explained が逐語）／
     155：銀行振込（別の時＝支払い済み）・口コミ投稿（別の人物＝隣人。作業員を名指しした理由として働かせた）・
     家具の移動（別の時＝訪問前に済み。作業員が戻って取り付ける案は見送った案で、見送ったことは we have chosen the second option で一意）。
     規則Bの決め手　155：(a) 第4段落が2つの案を示し、第5段落で客がどちらを選んだかが分かる。
     試験：第4段落だけ読むと、4本とも残る（支払い済みも口コミの人物も第4段落には無い。作業員が戻る案で家具の移動、客が注文する案で部品の注文）。
     第5段落だけ読むと、2つ目の案が何か分からず、口コミ・家具・部品の3本が残る（支払いだけ yesterday で落ちる）。両方で部品の注文に決まる。
     153：規則Bは申告しない（(c) は正解の語が本文の別の場所にも出て成立しない）。 */
  sp({
    n: [153,154,155], lv: 3,
    docs: [{
      label: "E-mail",
      head: "To: customerservice@gowland-plumbing.co.uk\nFrom: p.hartigan@fastmail.com\nDate: 9 October\nSubject: Visit on 7 October",
      body: [
        "Dear Sir or Madam,",
        "We have relied on your firm for our heating for years, most recently for the boiler service last October. That is why I called you again when the cold tap in the spare bathroom began leaking a drop every few seconds. I asked for Mr. Hedley by name, as my neighbour, Mr. Ibbotson, had posted a glowing review of his work on the Inglewood Community Forum.",
        "Mr. Hedley was at my door at 9.40 for the 10.00 appointment. Before he came, I had pulled the vanity unit out from the wall and spread some old sheets over the tiles, which he said made the job quicker.",
        "He explained that the rubber washer inside the tap had perished, which was why it kept leaking. He fitted a new one and left with the old fittings in a carrier bag.",
        "The leak has stopped for now, but he warned that the spindle is worn and should be replaced. The part has to come from the manufacturer, so he offered two options: he could order one and come back to fit it, or he could leave us the part number so that we could order it ourselves.",
        "My husband, who fitted the new shower in our main bathroom himself in March, watched him closely and is confident of managing the job, so we have chosen the second option, which I shall see to this evening. Please pass on our thanks to Mr. Hedley. Thank you also for the invoice, which I settled by bank transfer yesterday.",
        "Yours faithfully,",
        "Paula Hartigan",
      ],
    }],
    q: [
      { tag: "詳細", qid: "v5q153p", t: ["p7detail"], s: "According to the e-mail, what problem does Ms. Hartigan describe?",
        c: ["A dripping tap in the guest bathroom","A rattling noise from the boiler","A patch of damp on the kitchen ceiling","A drop in water pressure in the shower"],
        a: 0,
        e: "第1段落の when the cold tap in the spare bathroom began leaking a drop every few seconds が、客用浴室（spare bathroom）の蛇口の水漏れにあたる。ボイラーは第1段落の昨年10月の点検、シャワーは第5段落の夫が3月に付けた話で、どちらも以前のことである。",
        w: ["正解。the cold tap in the spare bathroom began leaking a drop every few seconds が、客用浴室の蛇口の水漏れにあたる。","誤り。most recently for the boiler service last October はボイラーの点検を昨年10月に頼んだという過去の話で、異音の記述ではない（別の時のこと）。","言及なし。台所の天井や湿った染みに触れた文は全体のどこにも無い。","誤り。My husband, who fitted the new shower in our main bathroom himself in March は3月に夫がシャワーを付けたという話で、水圧の低下は書かれていない（別の時のこと・別の人物のこと）。"] },
      { tag: "NOT", qid: "v5q154p", t: ["p7not"], s: "What is NOT mentioned in the e-mail as something the plumber did during the visit?",
        c: ["Arrived before the agreed time","Covered the floor with sheets","Explained what had caused the fault","Took the old parts away with him"],
        a: 1,
        e: "作業員がしたこととして書かれているのは、第2段落の Mr. Hedley was at my door at 9.40 for the 10.00 appointment（予定より早い到着）、第3段落の He explained that the rubber washer inside the tap had perished（原因の説明）と left with the old fittings in a carrier bag（古い部品の持ち帰り）。床にシーツを敷いたのは I had pulled the vanity unit out from the wall and spread some old sheets over the tiles とあるとおり本人である。",
        w: ["作業員のこととして書かれている。Mr. Hedley was at my door at 9.40 for the 10.00 appointment が、約束の10時より前の到着にあたる。","正解。spread some old sheets over the tiles をしたのは I（Ms. Hartigan）で、作業員が床をシーツで覆ったとは書かれていない（別の人物のこと）。","作業員のこととして書かれている。He explained that the rubber washer inside the tap had perished, which was why it kept leaking が、故障の原因の説明にあたる。","作業員のこととして書かれている。He fitted a new one and left with the old fittings in a carrier bag が、古い部品を持ち帰ったことにあたる。"] },
      { tag: "推測", qid: "v5q155p", t: ["p7inf"], s: "What will Ms. Hartigan most likely do next?",
        c: ["Pay the bill by bank transfer","Post a review on a local website","Move some furniture before the next visit","Order a part the plumber recommended"],
        a: 3,
        e: "第4段落の he warned that the spindle is worn and should be replaced と、he could leave us the part number so that we could order it ourselves（作業員が示した2つ目の案）に対し、第5段落で we have chosen the second option, which I shall see to this evening と述べている。2か所を合わせると、客が作業員の勧めた部品を自分で注文することが分かる。",
        w: ["誤り。which I settled by bank transfer yesterday とあり、支払いは昨日済んでいる（別の時のこと）。","誤り。a glowing review of his work on the Inglewood Community Forum を投稿したのは隣人の Mr. Ibbotson で、本人ではない（別の人物のこと）。","誤り。I had pulled the vanity unit out from the wall は作業員が来る前に済ませたことである。作業員が戻って取り付ける案（he could order one and come back to fit it）は we have chosen the second option により見送られており、次の訪問は予定されていない（別の時のこと・見送った案）。","正解。he could leave us the part number so that we could order it ourselves（第4段落）と we have chosen the second option, which I shall see to this evening（第5段落）を合わせると、客が作業員の勧めた部品を注文することになる。"] },
    ],
  }),

  /* ── 156–158 記事 ── */
  sp({
    n: [156,157,158], lv: 3,
    docs: [{
      label: "Article",
      title: "Producer Profile: Hebden Cider",
      body: [
        "Gideon Garland, who founded Hebden Cider, is not the sort of cider maker you might picture. He greets visitors to the yard in a sharp charcoal jacket and polished shoes, even in the wettest weeks of the pressing season.",
        "Most of what draws those visitors is the press. While the rest of the trade long ago moved to electric hydraulic machines, Hebden’s is worked by a large wheel that the stream beside the shed turns, and the fruit is crushed under its slow, steady pull. Filling a vat this way takes roughly twice as long, Mr. Garland concedes, but he says the juice is gentler for it.",
        "On Saturdays from September to November the doors of the pressing shed are opened at eleven, and whoever has turned up is led through every stage in one group, from the first crates to the finished juice, with Mr. Garland explaining each step over the sound of the wheel.",
        "The juice is then left to ferment slowly through the winter before it is bottled in the spring.",
      ],
    }],
    q: [
      { tag: "詳細", qid: "v5q156p",
        s: "According to the article, what is unusual about the cider maker's press?",
        c: ["It is driven by a water wheel","It was built from a single oak tree","It can be moved on a small trailer","It was rescued from a demolished barn"],
        a: 0,
        e: "第2段落に、同業の多くが電動の油圧式に移るなか、ここの圧搾機は小屋の脇の小川が回す大きな車輪で動かされる、とある（「worked by a large wheel that the stream beside the shed turns」）。動力が水流で回る水車である点が、この圧搾機の珍しさである。",
        w: ["正解。「worked by a large wheel that the stream beside the shed turns」とあり、動力は小川が回す水車である。","1本のオークの木から作られたという記述はなく、言及なし。","小さなトレーラーで移動できるという記述はなく、言及なし。","取り壊された納屋から救い出されたという記述はなく、言及なし。"] },
      { tag: "同義語", t: ["p7syn"], qid: "v5q157p",
        s: "In paragraph 1, the word \"sharp\" is closest in meaning to",
        c: ["sudden","sour","clever","stylish"],
        a: 3,
        e: "段落1の sharp は「a sharp charcoal jacket and polished shoes」と、上着と靴という身なりを形容している。sharp が服装を修飾して「洒落た、きりっとした身なりの」を表す用法で、stylish に近い。本文の sharp は jacket にかかっており、突然の変化・味・頭の働きを表す語にはかかっていない。",
        w: ["sharp が「急な、突然の」の意味になるのは、a sharp rise や a sharp turn のように変化や動きを表す語にかかるときである。本文の sharp は jacket にかかっているので、この読みにならない。","sharp が「酸っぱい」の意味になるのは、味を表すときである。本文の sharp は jacket にかかっており、味の話ではない。","sharp が「頭の切れる」の意味になるのは、a sharp mind のように頭の働きを表す語にかかるときや、She is very sharp. のように人について言うときである。本文の sharp は jacket にかかっているので、この読みにならない。","正解。sharp は「a sharp charcoal jacket and polished shoes」と服装を形容しており、「洒落た身なりの」という stylish の語義で読める。"] },
      { tag: "推測", t: ["p7inf"], qid: "v5q158p",
        s: "What can be inferred about the cider maker?",
        c: ["It relies mainly on fruit from its own land","It sells most of its cider locally","It plans to expand production within the year","It offers guided tours of its pressing shed"],
        a: 3,
        e: "第3段落に、9月から11月の土曜日に圧搾小屋の扉が開けられ、来た人はグループで行程のすべてを案内され、Garland さんが各段階を説明する、とある。圧搾小屋を案内付きで見せていると推せる。",
        w: ["自家の畑の果実を主に使っているという記述はなく、言及なし。","大半を地元で売っているという記述はなく、言及なし。","今年中に増産するという記述はなく、言及なし。","正解。第3段落に、「whoever has turned up is led through every stage in one group」と、来た人が小屋の行程を案内されるとある。"] },
    ],
  }),

  /* ── 159–160 フォーム ── */
  sp({
    n: [159,160], lv: 3,
    docs: [{
      label: "Form",
      title: "Granger Tool Library — Membership Application",
      body: [
        {"t":"kv","pairs":[["Member name","Gwyneth Gilbey"],["Address","26 Orchard Row, Granger"],["Telephone","01632 960 328"],["Tools you expect to borrow","Ladder; hedge trimmer"],["Date","3 March"]]},
        "Joining fee: £15, paid at the desk when you hand in this form. Borrowing itself is free.",
        "Borrowing terms: you may take out up to three tools at a time. Each tool must be back at the library within four days of the day it was taken out. One extension of two days is possible if no one else is waiting for the tool. A late return costs 50p per tool for each day.",
        "Unwanted tools: if you have tools in working order that you no longer use, please hand them in at the desk. We check each one and add it to the shelves.",
        "I have read and agree to the borrowing terms. Signed: Gwyneth Gilbey",
      ],
    }],
    q: [
      { tag: "詳細", qid: "v5q159p",
        s: "According to the form, how long can members keep a borrowed tool?",
        c: ["Four days","One week","Ten days","Two weeks"],
        a: 0,
        e: "貸出条件の欄に、各工具は借りた日から「within four days」に返却するとある。延長は2日を1回だけなので、合計でも6日で、他の日数にはならない。",
        w: ["正解。「Each tool must be back at the library within four days of the day it was taken out」とある。","返却期限は4日で、延長を使っても合計6日であり、1週間にはならない。","返却期限は4日で、延長を使っても合計6日であり、10日にはならない。","返却期限は4日で、延長を使っても合計6日であり、2週間にはならない。"] },
      { tag: "推測", t: ["p7inf"], qid: "v5q160p",
        s: "What can be inferred about the tool library from the form?",
        c: ["It accepts donations of used tools","It charges students a reduced fee","It relies mainly on volunteer staff","It requires members to renew each year"],
        a: 0,
        e: "最後の欄に、使わなくなった動く工具があれば窓口へ持ってくるよう求め、図書館が点検して棚に加える、とある（「please hand them in at the desk. We check each one and add it to the shelves」）。使い古しの工具の寄付を受け付けていると推せる。",
        w: ["正解。「if you have tools in working order that you no longer use, please hand them in at the desk」とある。","料金の欄は入会金15ポンドの1つだけで、学生向けの区分には言及なし。","運営者の身分やボランティアには言及なし。","会員資格の有効期間や更新には言及なし。"] },
    ],
  }),

  /* ── 161–164 記事（文挿入） ── */
  sp({
    n: [161,162,163,164], lv: 3,
    docs: [{
      label: "Article",
      title: "Greymoor Car Club: Sharing the Road",
      head: "Community News",
      body: [
        "On a weekday morning in Greymoor, three silver hatchbacks leave their parking spaces within ten minutes of one another, and none of them belongs to the person driving it. — [[1]] — The cars are shared by the members of Greymoor Car Club, a community scheme that lets residents drive when they need to without owning a vehicle of their own.",
        "The idea came from Gordon Gough, who drove the village bus for thirty-one years before retiring and then watched as the route was cut back until the last service was withdrawn. He kept meeting neighbours who could no longer reach the hospital or the supermarket, and he proposed at a parish meeting that residents should pool their money for a car instead. — [[2]] — Enough of them agreed to make it possible.",
        "The club’s first car went on the road in 2019, kept in a space behind the old library on Marsh Lane, where members collected it. — [[3]] — The Hawbury Road site, beside the leisure centre, is now where most weekend trips begin. — [[4]] —",
        "Booking is deliberately simple. A member who wants a car telephones the volunteer who looks after the club’s bookings, Gillian Grundy, who lives on Church Row and tells each caller which car is free and when.",
        "Anyone thinking of joining can find the club’s details on its noticeboard in the post-office window, where pride of place goes to an engraved glass trophy from the county’s travel panel, with Greymoor Car Club’s name on its base.",
      ],
    }],
    q: [
      { tag: "詳細", qid: "v5q161p",
        s: "According to the article, how do members reserve a vehicle?",
        c: ["By using a mobile phone application","By calling a local coordinator","By signing a paper logbook","By booking through a website calendar"],
        a: 1,
        e: "第4段落に、車がほしい会員は、クラブの予約を引き受けているボランティアの Gillian Grundy に電話する、とある（「telephones the volunteer who looks after the club’s bookings」）。地元の世話役に電話で頼む方法である。",
        w: ["携帯のアプリで予約するという記述はなく、言及なし。","正解。「A member who wants a car telephones the volunteer who looks after the club’s bookings」とある。","紙の記録帳に署名するという記述はなく、言及なし。","ウェブサイトの予約表で予約するという記述はなく、言及なし。"] },
      { tag: "詳細", qid: "v5q162p",
        s: "According to the article, who first suggested starting the club?",
        c: ["A retired bus driver","A local bakery owner","A primary school teacher","A nurse at the health centre"],
        a: 0,
        e: "第2段落に、「The idea came from Gordon Gough」とあり、彼は「drove the village bus for thirty-one years before retiring」と書かれている。退職した元バス運転手が発案者である。",
        w: ["正解。「The idea came from Gordon Gough, who drove the village bus for thirty-one years before retiring」とある。","パン屋の経営者が発案したという記述はなく、言及なし。","小学校の教師が発案したという記述はなく、言及なし。","保健センターの看護師が発案したという記述はなく、言及なし。"] },
      // 文挿入の取っ手は2つ（時系列型）。どちらを外しても別の位置が開く。
      // 前方：[3] の直前の文が「in 2019」の年と1つ目の受け取り場所（図書館の裏）を述べ、挿入文の "By the following year" と "a second" の両方がこの文を受ける。
      //   年を述べる文・受け取り場所を述べる文は [3] の直前にしか無い。[1] [2] の前には年も1つ目の拠点も出ない（Hawbury Road・2か所目にも触れない）ので落ちる。
      // 後方：[3] の直後の文 "The Hawbury Road site, …" が、挿入文で初めて出る場所を既出として受ける。[4] に入れると、その文が先に出て、あとから Hawbury Road を初めて導入することになるので落ちる。
      // [1] 年も1つ目の拠点も無い（前方の取っ手が無い）／[2] 同上／[3] 正解／[4] 後方の取っ手（直後ではなく直前の文が既出として受けている）で落ちる。
      { tag: "位置選択", t: ["p7ins"], insertAt: 3, qid: "v5q163p",
        sentence: "By the following year, membership had grown enough for the club to open a second pick-up point on Hawbury Road.",
        s: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"By the following year, membership had grown enough for the club to open a second pick-up point on Hawbury Road.\"",
        c: ["[1]","[2]","[3]","[4]"],
        a: 2,
        e: "挿入文は \"By the following year\" と \"a second pick-up point on Hawbury Road\" の2つの手がかりで位置が決まる。「翌年」と言うには先に基準となる年が、「2つ目の拠点」と言うには先に1つ目の拠点が、それぞれ述べられていなければならない。第3段落の1文目が「in 2019」の年と、会員が車を受け取った図書館裏の場所を述べており、これを受けるのは [3] だけである。さらに [3] の直後の文は \"The Hawbury Road site\" と、すでに紹介された場所として受けているので、挿入文はその前に来る必要がある。",
        w: ["この位置の前は冒頭の描写だけで、基準となる年も、クラブの1つ目の拠点もまだ出ていない。ここに入れると「翌年」「2つ目の拠点」が何を指すのか定まらない。","この位置の前は発案の経緯だけで、1つ目の拠点がまだ出ておらず、「a second pick-up point」の「2つ目」の指す先がない。しかも直後の「Enough of them agreed to make it possible.」で初めてクラブが実現するので、その前に会員が増えて拠点を開く話をすると時系列が逆になる。また「Enough of them」の「them」は直前の住民を指しており、挿入文を挟むとその先行詞が切り離される。","正解。直前の文が「in 2019」の年と会員が車を受け取る1つ目の場所を述べ、直後の文が \"The Hawbury Road site\" と挿入文で出た場所を既出として受けている。","この位置の直前の文がすでに \"The Hawbury Road site\" と、既出のように書いている。挿入文は Hawbury Road を初めて出す文なので、これより後ろに置くと、先に出てきた \"The Hawbury Road site\" が何を指すのか定まらない。"] },
      { tag: "推測", t: ["p7inf"], qid: "v5q164p",
        s: "What can be inferred about the car club?",
        c: ["It holds a members' meeting every month","It receives funding from the local council","It lends its cars to local charities","It has won an award for its work"],
        a: 3,
        e: "第5段落に、郵便局の窓の掲示板のそばの目立つ場所に、郡の旅行関係の委員会からの彫刻入りのガラスのトロフィーがあり、台座に Greymoor Car Club の名が入っている、とある。クラブが活動で賞を受けたと推せる。",
        w: ["毎月会合を開くという記述はなく、言及なし。会合は第2段落の発案のときの教区の会議だけである。","市や地方自治体から資金を受けているという記述はなく、言及なし。","慈善団体に車を貸しているという記述はなく、言及なし。","正解。台座にクラブの名が入った「an engraved glass trophy from the county’s travel panel」が窓に飾られている。"] },
    ],
  }),
];
