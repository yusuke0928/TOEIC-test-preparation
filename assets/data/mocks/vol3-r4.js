/* =============================================================
   予想模試 Vol.3 — Part 7 複数文書（No.176–200）
   リーディング高負荷回。
   ============================================================= */

const mp = (o) => ({
  id: `v3-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7cross'],
  level: o.lv ?? 5, docCount: o.docs.length, docs: o.docs,
  /* 設問 id は通し番号 no から自動生成するが、本ファイルは No.176–200 を全問
     新規採番したため x.qid で明示している（id を使い回すと SRS の履歴が
     別問題に引き継がれるため）。 */
  questions: o.q.map((x, i) => ({
    id: x.qid || `v3q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7cross'], tag: x.tag,
  })),
});

export const R4 = [

  /* ══ 176–180 ダブルパッセージ ══════════════════════
     先読み対策（2026-09-29）：stem と選択肢は監査役の設問案で凍結し、正解は
     くじで決めたあと本文を新規に書き下ろした。釣り船チャーター会社の Web
     ページ＋グループ予約の問い合わせメール。Q176・Q177・Q179 の3問がクロス。
     文書を1つずつ隠すと：
       - Web ページだけでは、Duckett さんの一行の人数・乗船希望日・催しの
         目的・参加者の事情が分からず、どのクロス設問も決まらない。
       - メールだけでは、人数帯ごとの料金・キャンセル規定・4つのプランの
         条件（出航時間帯×船上の話〈河口の野生生物／地元の海の歴史〉）が分からず、
         同様に決まらない。
       - Q178・Q180 は Web ページ／メールそれぞれ単独で決まる詳細設問。
     Q176: 人数「7名」（メール）＝「7名まで£150」の料金帯（Web ページ）。
     Q177: 乗船日「8月23日（日）」（メール）＝「7日前までなら無料」の規定
     （Web ページ）。逆算すると8月16日。
     Q179: 「バードウォッチャーの2人が鳥やアザラシの話を聞きたい」「早い
     時間に出る便がよい」（メール2文、どちらも表の語を言い換え）＝「午前
     発・河口の野生生物の話」の Delford Trip（Web ページの表）。
     監査の是正（review-r1）：Q179 は「skipper あり／なし」（料金は同じで、
     付いているほうが有利になる優劣軸。skipper 不在だと誰が船を操るのかも
     不明瞭）を「初心者向けコーチ／経験者向けガイド」という、どちらも
     人が乗る優劣なしの軸に変更した。Q180 は誤答3本（弁当・雨具・魚の
     下処理）を1本ずつ挙げて消す列挙になっており、しかも申し送り「Q180
     の4品目を Q176 の追加料金に使わない」に反していたため、料金に含まれる
     ものの説明から追加料金の列挙を削り、防寒・防水の服を持参する案内に
     差し替えた。Q177 は乗船日の曜日を2026年に合わせて Saturday→Sunday に
     訂正した（無料キャンセル最終日の計算そのものには影響しない）。
     監査の是正（review-r2）：Q179 の「初心者向け／経験者向け」は、他の
     設問（Q178 の4つの目的がどれも社交の催しであること）から先読みで
     「初心者向けの2行」に寄れてしまい、表だけで2択に落ちる新しい欠陥
     だったため、対象を名指ししない軸（「河口の野生生物の話」「地元の海の
     歴史の話」）に差し替え、メールの条件も鳥・アザラシへの関心に変更した。
     Q177 の why を、stem の「最も遅い日」に正面から答える書き方に直した。 */
  mp({
    n: [176, 177, 178, 179, 180],
    lv: 4,
    docs: [
      {
        label: 'Web page', meta: 'Document 1',
        title: 'Duskwater Charters — Group Fishing Trips',
        body: [
          'Duskwater Charters runs four group fishing trips throughout the season, each aboard one of our covered boats out on the estuary.',
          { t: 'table', head: ['Trip', 'Departure', 'Talk on board'],
            rows: [
              ['The Delford Trip', 'Morning', 'Estuary wildlife'],
              ['The Mawdry Trip', 'Afternoon', 'Estuary wildlife'],
              ['The Dannock Trip', 'Morning', 'Local maritime history'],
              ['The Morvell Trip', 'Afternoon', 'Local maritime history'],
            ] },
          'Charter prices for any of the four trips depend only on the size of your party:',
          { t: 'table', head: ['Group size', 'Price'],
            rows: [
              ['Up to 7', '£150'],
              ['8–11', '£175'],
              ['12–15', '£200'],
              ['16 or more', '£225'],
            ] },
          'Bookings cancelled at least seven days before the trip date receive a full refund of the deposit; cancellations made after that point forfeit the deposit.',
          'The price of every trip covers all the fishing equipment your group will need for the day. Please bring warm, waterproof clothing, as it can be chilly out on the water even in summer.',
          'To book, e-mail bookings@duskwatercharters.co.uk with your preferred trip, date and numbers.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: bookings@duskwatercharters.co.uk\nFrom: p.duckett@fastmail.com\nDate: 2 August\nSubject: Group booking enquiry',
        body: [
          'Dear Duskwater Charters,',
          "I'd like to book one of your group fishing trips for a get-together I'm organising. There will be seven of us in total, including me — a group of friends who gave up their time to help at a local charity run back in June, and I wanted to treat them to an outing on the water as a thank-you.",
          "We're hoping to go out on Sunday, 23 August.",
          "Two of the group are keen birdwatchers, so they'd love to hear about the birds and seals we might spot along the way.",
          "We'd also like to be back at the quayside in good time for a late lunch afterwards, so a trip that sets off earlier in the day would suit us best.",
          "Could you let me know which trip you'd recommend, and what the whole outing is likely to cost?",
          'Best wishes,\nPetra Duckett',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v3q176p', s: 'How much will Ms. Duckett most likely be charged for the outing?',
        c: ['£150', '£175', '£200', '£225'],
        a: 0,
        e: 'Web ページの料金表では、7名までの一行は£150。メールで Duckett さんは「私を含めて全部で7名」と書いており、この人数帯に当たる。',
        w: ['正解。7名は「7名まで」の料金帯に当たり、£150。',
            '£175は8〜11名の料金帯。メールの「私を含めて7名」の「含めて」を見落として本人を二重に数え8名とすると、この帯に入ってしまう。',
            '£200は12〜15名の料金帯で、7名とは合わない。',
            '£225は16名以上の料金帯で、7名とは合わない。'] },
      { tag: 'クロス', qid: 'v3q177p', s: 'What is the latest date on which Ms. Duckett can cancel the booking free of charge?',
        c: ['August 2', 'August 9', 'August 16', 'August 23'],
        a: 2,
        e: 'Web ページは「乗船日の7日前までのキャンセルなら預り金を全額返金する」と定めている。メールの乗船希望日は8月23日（日）なので、その7日前に当たる8月16日が無料キャンセルの最終日になる。',
        w: ['8月2日も無料で取り消せる日だが、規定の7日前に当たる8月16日より早く、最も遅い日ではない。これはメールの送信日でもある。',
            '8月9日も無料で取り消せる日だが、8月16日より早く、最も遅い日ではない。',
            '正解。乗船日の8月23日からちょうど7日前が8月16日で、無料で取り消せる最も遅い日に当たる。',
            '8月23日は乗船日そのものであり、「乗船日より前」という条件に合わない。'] },
      { tag: '詳細', qid: 'v3q178p', s: 'According to the e-mail, why is Ms. Duckett organizing the outing?',
        c: ['To entertain clients visiting from overseas', "To celebrate a friend's recent engagement", 'To thank volunteers from a charity event', 'To mark the end of a training course'],
        a: 2,
        e: 'メールは「6月にチャリティーランの運営を手伝ってくれた友人たちへのお礼として、水上での催しに招待したい」と書いている。',
        w: ['海外からの来客の接待には触れていない。',
            '婚約祝いには触れていない。',
            '正解。',
            '研修コースの修了には触れていない。'] },
      { tag: 'クロス', qid: 'v3q179p', s: "Which trip will most likely suit Ms. Duckett's group?",
        c: ['The Delford Trip', 'The Mawdry Trip', 'The Dannock Trip', 'The Morvell Trip'],
        a: 0,
        e: 'メールは「仲間のうち2人は熱心なバードウォッチャーで、途中で見かける鳥やアザラシの話を聞きたがっている」（河口の野生生物の話の言い換え）と「早めの時間に出る便がいちばん合う」（午前発の言い換え）の2文を書いている。Web ページの表でこの両方を満たすのは、午前発で河口の野生生物の話がある Delford Trip だけ。',
        w: ['正解。午前発・河口の野生生物の話の組み合わせで、両方の条件に合う。',
            'Mawdry Trip は野生生物の話はあるが午後発で、早めの時間に出る便がよいという条件に合わない。',
            'Dannock Trip は午前発だが船上の話は地元の海の歴史で、鳥やアザラシの話を聞きたいという希望に合わない。',
            'Morvell Trip は午後発・海の歴史の話で、どちらの条件にも合わない。'] },
      { tag: '詳細', qid: 'v3q180p', s: 'According to the web page, what is included in the price of every trip?',
        c: ['The use of rods and tackle', 'The provision of a packed lunch', 'The loan of waterproof jackets', "The filleting of the day's catch"],
        a: 0,
        e: 'Web ページは「料金にはその日にグループが必要とする釣り具一式が含まれる」と述べている。',
        w: ['正解。',
            '弁当については触れていない。',
            '「暖かく防水の服を各自持参するように」と案内しており、雨具は貸し出しではなく客が自分で用意するもの。',
            '魚の下処理については触れていない。'] },
    ],
  }),

  /* ══ 181–185 ダブルパッセージ ══════════════════════
     先読み対策（2026-09-29）：地方紙の記事＋出店者の投書。Q183・Q184 の
     2問がクロス。
     文書を1つずつ隠すと：
       - 記事だけでは、Dashwood さんの区画の位置・出店する曜日・区画数に
         ついての補足情報が分からず、どちらのクロス設問も決まらない。
       - 投書だけでは、4通りの仮設の出店先の割り振り（現在の側×曜日）・
         改修前の区画数が分からず、同様に決まらない。
       - Q181・Q182 は記事／投書それぞれ単独で決まる詳細設問。Q185 は投書の
         別の1文のみで決まる推測設問。
     Q183: 「魚市場だった側」「週の半ば」（投書2文、記事の語を言い換え）＝
     「魚市場側×火木」の library car park（記事の表）。
     Q184: 記事「現在30区画」＝投書「café のために1ダース失う」で18。
     監査の是正（review-r1）：Q184 は投書に置いていた「6区画減の旧案なら
     24」という一文から 24＋6＝30 が逆算でき、投書だけで答えが決まって
     しまっていたため削除した（クロス不成立の致命的欠陥）。Q185 は「週2回
     しか出店しない」という投書内の記述と、土曜の朝市の常連という記述が
     ぶつかり、かつ farmers' market が正解を支持しない可能性（自作の品を
     売る市と読める）があったため、Q183 の修正と合わせて曜日を日曜に
     移し「street market」に変更した（致命的欠陥）。Q183 は同じ話者の
     頼まれていない否定を2つ重ね、位置と曜日を1文に収めていたため、
     否定を削って2文に分けた。 */
  mp({
    n: [181, 182, 183, 184, 185],
    lv: 4,
    docs: [
      {
        label: 'Article', meta: 'Document 1',
        title: 'Marlstow Market Hall Set for Renovation',
        body: [
          "The Marlstow Gazette — Marlstow Borough Council has approved long-awaited renovation work on the Market Hall, the Victorian building that has housed the town's indoor market for more than a century. Work is due to begin in the New Year and will take around three months to complete.",
          "The centrepiece of the project will be the repair of the hall's clock tower, whose mechanism has not kept accurate time in decades and whose stonework has begun to crack. Engineers will also renew the drains beneath the building, which have caused flooding after heavy rain in recent winters.",
          'While the work is under way, stallholders will trade from temporary sites nearby.',
          { t: 'table', head: ['Current side of the hall', 'Trading days', 'Temporary site'],
            rows: [
              ['The fish-market side', 'Tuesday and Thursday', 'The library car park'],
              ['The fish-market side', 'Friday and Saturday', 'The bus station forecourt'],
              ['The side entered from the high street', 'Tuesday and Thursday', 'The riverside marquee'],
              ['The side entered from the high street', 'Friday and Saturday', 'The town hall courtyard'],
            ] },
          'The hall currently has thirty trading pitches. Council officials say a number of these will be lost to make way for a small café near the main entrance, though the exact figure has yet to be confirmed.',
          "A council spokesperson said the renovation would secure the hall's future for another century of trading.",
        ],
      },
      {
        label: 'Letter', meta: 'Document 2',
        title: 'Letters to the Editor',
        body: [
          'I read with interest your report on the Market Hall renovation.',
          "For the past eleven years I've had a pitch on the side of the hall where the old fish counters used to stand.",
          "I'm there twice a week, in the middle of the week, so I'll be one of the traders moving out while the work is done — and I'm relieved it is finally going ahead.",
          'I would urge the council to keep back a handful of the newly refurbished pitches specifically for people just starting out in trade, rather than reallocating all of them to existing stallholders.',
          "On the question of numbers, I gather from a member of the traders' committee that the new café will take up a dozen pitches — a high price, in my view, for somewhere to buy a cup of tea.",
          "On Sundays you'll find me behind a stall at the street market in the next town, and I've seen there how much passing trade a busy market brings to the shops around it.",
        ],
        sig: 'Rosa Dashwood',
      },
    ],
    q: [
      { tag: '詳細', qid: 'v3q181p', s: 'According to the article, which feature of the hall will be restored?',
        c: ['Its glass roof', 'Its clock tower', 'Its iron gates', 'Its tiled floor'],
        a: 1,
        e: '記事は「計画の中心となるのは、何十年も正確に時を刻んでいない時計塔の修復だ」と述べている。',
        w: ['ガラス屋根には触れていない。',
            '正解。',
            '鉄の門には触れていない。',
            'タイルの床には触れていない。'] },
      { tag: '詳細', qid: 'v3q182p', s: 'What does Ms. Dashwood propose in her letter?',
        c: ['Holding an open day when the hall reopens', 'Improving the lighting inside the hall', 'Keeping the hall open later on weekdays', 'Setting aside stalls for new traders'],
        a: 3,
        e: '投書は「改修後の区画の一部を、既存の出店者にすべて回すのではなく、これから商売を始める人のために取っておくよう議会に求めたい」と述べている（本文は set aside ではなく keep back で書いている）。',
        w: ['オープンデーの開催には触れていない。',
            '照明の改善には触れていない。',
            '平日の営業時間延長には触れていない。',
            '正解。'] },
      { tag: 'クロス', qid: 'v3q183p', s: "To which temporary site will Ms. Dashwood's stall most likely be moved?",
        c: ['The library car park', 'The bus station forecourt', 'The riverside marquee', 'The town hall courtyard'],
        a: 0,
        e: '投書は「昔の魚売り場があった側」（記事の「魚市場だった側」の言い換え）に「週の半ば」（記事の「火曜と木曜」の言い換え）に出店していると書いている。記事の表でこの組み合わせに当たるのは library car park だけ。',
        w: ['正解。魚市場側・火木の組み合わせに当たる。',
            'bus station forecourt は魚市場側・金土の組み合わせで、曜日が合わない。',
            'riverside marquee は本通り（high street）から入る側・火木の組み合わせで、側が合わない。',
            'town hall courtyard は本通りから入る側・金土の組み合わせで、どちらも合わない。'] },
      { tag: 'クロス', qid: 'v3q184p', s: 'How many stalls will the renovated hall most likely have?',
        c: ['18', '24', '30', '36'],
        a: 0,
        e: '記事は現在の区画数を30としている。投書は「新しいカフェのために1ダース（12）の区画が使われる」と書いており、30から12を引くと18になる。',
        w: ['正解。現在の30区画から、投書が挙げる12区画分を引くと18。',
            '24は、本文のどの数字の組み合わせからも出ない。',
            '30は改修前の現在の区画数であり、改修後の数ではない。',
            '36も、本文のどの数字の組み合わせからも出ない。'] },
      { tag: '推測', qid: 'v3q185p', s: 'What can be inferred about Ms. Dashwood?',
        c: ['She makes the goods that she sells.', 'She has an assistant at her stall.', 'She also trades at another market.', 'She took over the stall from a relative.'],
        a: 2,
        t: ['p7inf'],
        e: '投書は「日曜には隣町の street market で出店している」と書いており、Market Hall 以外の市場でも商売をしていることがうかがえる。',
        w: ['自分で商品を作っているとは述べていない。',
            '助手がいるとは述べていない。',
            '正解。',
            '親族から区画を引き継いだとは述べていない。'] },
    ],
  }),

  /* ══ 186–190 トリプルパッセージ ══════════════════════
     先読み対策（2026-09-29）：音楽祭のボランティア募集 Web ページ＋応募者
     Drennan のメール＋担当 Marchant の返信。Q186・Q187・Q188 の3問がクロス。
     文書を1つずつ隠すと：
       - Web ページだけでは、Drennan さんに実際に割り当てられた持ち場・
         時間帯・シフト数、説明会のどちらに出るかが分からず、どのクロス
         設問も決まらない。
       - メールだけでは、1シフトの長さ・チームリーダーの対応表・説明会の
         2つの日程が分からず、同様に決まらない。
       - 返信だけでは、Web ページの規定（1シフトの長さ・対応表・説明会の
         日程）が分からず、同様に決まらない。
       - Q189 はメールのみ、Q190 は Web ページの別の1文のみで決まる設問。
     Q186: 返信「舞台裏の搬入・夜間帯を3シフト」×Web ページ「シフトは
     すべて5時間」で15時間。
     Q187: メール「平日の夜のほうが都合がよい」×Web ページ「平日夜は7月9日、
     週末朝は7月11日」で7月9日。
     Q188: 返信「舞台裏の搬入・夜間帯」×Web ページの対応表で Colin Mayhew。
     監査の是正（review-r1）：返信が持ち場・時間帯を表のセルと同じ語で
     逐語的に書いていたため言い換えた。説明会についての一文も、正解を
     補強するだけで論理がつながっていなかったため書き直した。why の
     作り話（Q186 の3時間・6時間の仮定）を削った。
     監査の是正（review-r2）：Q186 の why が「本文のどの数字の組み合わせ
     からも出ない」と言い過ぎていた（6×3＝18、3日×3シフト＝9 が数の上
     では出るため）ので、計算の経路を作らず規定と不一致であるとだけ書く
     形に直した。Q188 exp の「ステージ裏で」を英文に無い語だったため
     「ステージに」に直した。Q190 exp の引用が英文の afternoon を落として
     いたため補った。 */
  mp({
    n: [186, 187, 188, 189, 190],
    lv: 4,
    docs: [
      {
        label: 'Web page', meta: 'Document 1',
        title: 'Mereworth Festival — Volunteer With Us',
        body: [
          'Mereworth Festival started out in 2018 as a single afternoon of live music on the grounds of Mereworth Hall. This year, for the first time, it will run across three full days, from Friday to Sunday, to make room for more performances and activities.',
          "We're recruiting volunteers for two roles this year: car park marshalling and backstage supply runs. Whichever role or time of day you choose, all shifts run for five hours.",
          { t: 'table', head: ['Role', 'Time slot', 'Reports to'],
            rows: [
              ['Car park marshalling', 'Daytime (10 a.m.–6 p.m.)', 'Leah Dunstan'],
              ['Car park marshalling', 'Evening (6 p.m.–11 p.m.)', 'Tessa Dellar'],
              ['Backstage supply runs', 'Daytime (10 a.m.–6 p.m.)', 'Owain Morland'],
              ['Backstage supply runs', 'Evening (6 p.m.–11 p.m.)', 'Colin Mayhew'],
            ] },
          "Before the festival, we hold two induction briefings: one on the evening of Thursday, July 9th, and a second on the morning of Saturday, July 11th, for anyone who prefers a weekend session. Either is fine, and there's no need to book — attending a briefing does not count towards your volunteer hours.",
          'All volunteers receive a wristband valid for the festival, a T-shirt, and a meal voucher for each shift worked.',
          "To apply, e-mail volunteers@mereworthfestival.org with your preferred role and the number of shifts you'd like to work.",
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: volunteers@mereworthfestival.org\nFrom: e.drennan@fastmail.com\nDate: 22 June\nSubject: Volunteering enquiry',
        body: [
          'Dear Volunteer Team,',
          "I'd like to apply to volunteer at this year's festival. I'm hoping to move into event production eventually, so hands-on experience at a festival like yours would be brilliant for my CV.",
          'I have a standing swimming lesson every Saturday morning, so weekday evenings work far better for me if I need to attend one of your briefings.',
          'Could you also let me know which of the two roles would suit someone with no previous festival experience?',
          'Thanks very much,\nElliot Drennan',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: e.drennan@fastmail.com\nFrom: volunteers@mereworthfestival.org\nDate: 26 June\nSubject: Re: Volunteering enquiry',
        body: [
          'Dear Elliot,',
          "Thanks for your interest — we'd love to have you on board. I've put you down to keep the stages stocked with supplies, from six o'clock until the music stops, for three shifts across the weekend.",
          "Do come along to one of the two briefings beforehand — as the website says, there's no need to book.",
          'One more thing: because the site backs onto a working farm, please wear boots rather than trainers for your shifts.',
          'Thanks again for volunteering,\nGideon Marchant',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v3q186p', s: 'How many hours will Mr. Drennan most likely volunteer in total?',
        c: ['9', '12', '15', '18'],
        a: 2,
        e: 'Web ページは「シフトはどの持ち場・時間帯でも5時間」としている。返信は Drennan さんに「3シフト」を割り当てたと述べており、5時間×3シフトで15時間になる。',
        w: ['9は、1シフト5時間×3シフト＝15と合わない。',
            '12も、5時間×3シフト＝15と合わない。',
            '正解。5時間×3シフト＝15時間。',
            '18も15と合わない。返信の「6時から」は開始時刻で、シフトの長さは Web ページのとおりどれも5時間。'] },
      { tag: 'クロス', qid: 'v3q187p', s: 'On what date will Mr. Drennan most likely attend a volunteer briefing?',
        c: ['July 8', 'July 9', 'July 10', 'July 11'],
        a: 1,
        e: 'Web ページは説明会を「平日の夜（7月9日）」と「週末の朝（7月11日）」の2回開くとしている。メールは「平日の夜のほうが都合がよい」と書いており、この条件に合うのは7月9日。',
        w: ['7月8日には説明会は設定されていない（Web ページが挙げるのは9日と11日のみ）。',
            '正解。平日の夜という条件に合うのは7月9日の回。',
            '7月10日には説明会は設定されていない。',
            '7月11日は週末の朝の回で、平日の夜のほうが都合がよいという条件に合わない。'] },
      { tag: 'クロス', qid: 'v3q188p', s: 'Which team leader will Mr. Drennan most likely report to?',
        c: ['Leah Dunstan', 'Colin Mayhew', 'Tessa Dellar', 'Owain Morland'],
        a: 1,
        e: '返信は Drennan さんの持ち場を「ステージに物資を切らさないようにする係」（舞台裏の搬入の言い換え）、時間帯を「6時から音楽が終わるまで」（夜間の言い換え）としている。Web ページの対応表でこの組み合わせに当たるのは Colin Mayhew。',
        w: ['Leah Dunstan は駐車場整理・日中帯の担当で、Drennan さんの持ち場（舞台裏の搬入）と一致しない。',
            '正解。舞台裏の搬入・夜間帯の組み合わせに当たる。',
            'Tessa Dellar は駐車場整理・夜間帯の担当で、持ち場が一致しない。',
            'Owain Morland は舞台裏の搬入・日中帯の担当で、時間帯が一致しない。'] },
      { tag: '詳細', qid: 'v3q189p', s: 'According to Mr. Drennan\'s e-mail, why does he want to volunteer at the festival?',
        c: ['To meet people after moving to the area', 'To gain experience for a career in events', 'To give something back to his hometown', 'To spend time with a relative who volunteers'],
        a: 1,
        e: 'メールは「いずれはイベント制作の仕事に進みたいと考えており、このような音楽祭での実地経験は履歴書にとても役立つ」と書いている。',
        w: ['引っ越してきて人と知り合いたいとは述べていない。',
            '正解。',
            '地元への恩返しには触れていない。',
            'ボランティアをしている親族には触れていない。'] },
      { tag: '推測', qid: 'v3q190p', s: 'What can be inferred about the Mereworth Festival?',
        c: ['It raises money for a local charity.', 'It uses a new venue this year.', 'It has grown from a one-day event.', 'It attracts many families with children.'],
        a: 2,
        t: ['p7inf'],
        e: 'Web ページは「2018年には Mereworth Hall の敷地での午後だけのライブ音楽の催しとして始まり、今年初めて金曜から日曜までの3日間開催になる」と書いており、当初は1日だけの催しだったものが規模を広げてきたことがうかがえる。',
        w: ['地元の慈善団体のための資金集めには触れていない。',
            '会場は2018年に始まった場所（Mereworth Hall の敷地）が書かれているだけで、今年会場が変わるとは述べていない。',
            '正解。',
            '子供連れの家族が多いとは述べていない。'] },
    ],
  }),

  /* ══ 191–195 トリプルパッセージ ══════════════════════
     先読み対策（2026-09-29）：公園のテニスコートの利用規定の掲示＋コーチ
     Dacre の問い合わせメール＋担当 Marner の返信。Q191・Q192・Q193 の
     3問がクロス。
     文書を1つずつ隠すと：
       - 掲示だけでは、Dacre さんの希望日・希望時間・週数・コートに求める
         2つの条件が分からず、どのクロス設問も決まらない。
       - メールだけでは、予約の受付規定（何日前までか）・コートの特徴の
         対応表・1時間あたりの料金・団体予約の割引条件が分からず、
         同様に決まらない。
       - 返信だけでは、掲示の規定・メールの希望条件が分からず、同様に
         決まらない。
       - Q194 はメールのみ、Q195 はメールの別の1文のみで決まる設問。
     Q191: メール送信日「4月6日（月）」×掲示「14日前までに申し込み」で、
     希望の4月13日は不可、次の月曜である4月20日が最短。
     Q192: メール「毎週月曜2時間×8週」×掲示「1時間£10、10回以上で
     2割引」で、8回は割引の対象外なので£160。
     Q193: メール「球足が遅くなる面がよい」「生徒は10代前半なので標準
     サイズが要る」（掲示の語を言い換え）＝「クレー・フルサイズ1面」の
     Court 3（掲示の表）。
     監査の是正（review-r1）：Q193 の表は「フルサイズ／シングル専用（幅が
     狭い）」という、料金が同じなら広いほうが有利になる優劣軸だったため、
     「フルサイズ1面／10歳以下向けのミニコート2面」という年齢で向き先が
     分かれるだけの軸に変更し、メールの条件も「隣の面と幅を分け合う」から
     「生徒が10代前半なので標準サイズが要る」に書き直した。クレーが遅い
     という知識は掲示に一文加えて説明した。Q191 は規定・返信の文言を
     整え、why(D) に起点の取り違えの経路を明記した。
     監査の是正（review-r2）：Q193 に足した「クレーは遅い」という一文が
     クレー側に弱い事前確率を作っていたため、ハード側にも「弾みが一定で
     読みやすい」という利点を添えて両面を対等にした。Q191 は返信の
     head に曜日を追加し、掲示の冒頭文を「Digby Park のテニスコート
     4面のうち」という言い方に直して、番号が12まであるのに4面しか
     ないという違和感を解消した。 */
  mp({
    n: [191, 192, 193, 194, 195],
    lv: 5,
    docs: [
      {
        label: 'Notice', meta: 'Document 1',
        title: 'Digby Park Tennis Courts — Booking Information',
        body: [
          'Four of the tennis courts at Digby Park are available for hire, either by the hour or as part of a block booking for a course of lessons.',
          'Block bookings must reach us at least fourteen days before the first session.',
          { t: 'table', head: ['Court', 'Surface', 'Layout'],
            rows: [
              ['Court 9', 'Hard', 'One full-size court'],
              ['Court 3', 'Clay', 'One full-size court'],
              ['Court 12', 'Hard', 'Two mini-courts (ages 10 and under)'],
              ['Court 5', 'Clay', 'Two mini-courts (ages 10 and under)'],
            ] },
          'Clay courts play more slowly, while hard courts give a truer, more predictable bounce.',
          'Court hire costs £10 per hour, whichever court you choose and whatever the time of year. Block bookings of ten sessions or more qualify for a 20% discount off the standard rate.',
          'For a block booking, e-mail bookings@moxonbc.gov.uk with your preferred day, time and the number of weeks.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: bookings@moxonbc.gov.uk\nFrom: n.dacre@fastmail.com\nDate: Monday, 6 April\nSubject: Block booking enquiry',
        body: [
          'Dear Booking Team,',
          'I run tennis lessons for juniors and would like to arrange a block booking: a two-hour session every Monday afternoon, for eight weeks.',
          "Most of my pupils are just starting out, so a surface that slows the ball down a little would really help them rally for longer. They're all in their early teens, though, so they need a court marked out at the standard size.",
          'One thing I did want to check — I understand Digby Park backs onto a playground, and previous groups have mentioned it can get quite noisy there in the afternoons. Would that be likely to disturb lessons that need a bit of concentration?',
          "As a side note, if a Monday session is ever rained off, I'd rather move it within the same week than lose it altogether, which sometimes happens with the youth ski squad I coach every winter.",
          'Could you confirm whether Monday, 13 April would be possible for our first session?',
          'Best wishes,\nNaomi Dacre',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: n.dacre@fastmail.com\nFrom: bookings@moxonbc.gov.uk\nDate: Tuesday, 7 April\nSubject: Re: Block booking enquiry',
        body: [
          'Dear Ms. Dacre,',
          "Thank you for your e-mail of Monday, 6 April. I'm glad to confirm a block booking for you, though I'm afraid the thirteenth won't be possible — as the notice on our website explains, we need a little more notice than that between booking and the first session. Let me know if a slightly later Monday suits you instead, and I'll pencil in the court.",
          "I've taken note of the surface and the court size you're after, and we'll make sure the right court is held for you once the date is settled. I'll also ask the park staff about the playground and let you know what they say.",
          "We'll do our best to arrange a same-week make-up session if the weather ever forces us to cancel, too.",
          'Best wishes,\nSam Marner',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v3q191p', s: "What is the earliest date on which Ms. Dacre's lessons can most likely begin?",
        c: ['April 6', 'April 13', 'April 20', 'April 27'],
        a: 2,
        e: 'メールは4月6日（月）に送信され、掲示は「希望開始日の14日前までに申し込むこと」と定めている。返信は希望日の4月13日では足りないとしており、4月6日から14日後に当たる最初の月曜日は4月20日。',
        w: ['4月6日はメールの送信日そのもので、そこから起算する基準日であり、開始日ではない。',
            '4月13日は送信日から7日後で、規定の14日に足りない（返信でも難しいと伝えられている）。',
            '正解。送信日の4月6日から14日後に当たる最初の月曜日。',
            '4月27日は送信日から21日後で、必要な14日より1週間分多い。返信の日付（4月7日）から14日後で数えても4月21日以降の最初の月曜は4月27日になるが、申し込みは4月6日に届いている。'] },
      { tag: 'クロス', qid: 'v3q192p', s: 'What will Ms. Dacre most likely pay for the block booking?',
        c: ['£96', '£128', '£160', '£192'],
        a: 2,
        e: '掲示は「1時間£10、10回以上のブロック予約は2割引」としている。メールは「毎週月曜2時間、8週間」と書いており、8回は10回に届かないので割引は適用されない。2時間×8週＝16時間、16時間×£10＝£160。',
        w: ['£96は、本文の料金と割引の規定のどの組み合わせからも出ない。',
            '£128は、10回に満たない予約に誤って2割引を適用した場合、または週2時間×8週の合計16時間を16回のセッションと数え違えて10回以上の基準を満たすとした場合に出る金額。',
            '正解。1時間£10×16時間（週2時間×8週）＝£160。8回は10回に満たないため割引は適用されない。',
            '£192も、本文の料金と割引の規定のどの組み合わせからも出ない。'] },
      { tag: 'クロス', qid: 'v3q193p', s: "Which court will most likely be reserved for Ms. Dacre's lessons?",
        c: ['Court 9', 'Court 3', 'Court 12', 'Court 5'],
        a: 1,
        e: '掲示は「クレーコートは球足が遅く、ハードコートは弾みが一定で読みやすい」と説明している。メールは「球足が遅くなる面のほうが助かる」（クレーを指す）と「生徒は全員10代前半なので標準サイズのコートが要る」（10歳以下向けのミニコートではなくフルサイズ1面を指す）の2文を書いている。掲示の表でこの両方を満たすのは Court 3 だけ。',
        w: ['Court 9はハード・フルサイズ1面で、コートの広さの条件には合うが、球足を遅くしたいという条件に合わない。',
            '正解。クレー・フルサイズ1面の組み合わせで、両方の条件に合う。',
            'Court 12はハード・10歳以下向けミニコート2面で、どちらの条件にも合わない。',
            'Court 5はクレー・10歳以下向けミニコート2面で、面の条件には合うが、生徒が10代前半でミニコート向けの年齢ではないという条件に合わない。'] },
      { tag: '詳細', qid: 'v3q194p', s: 'According to Ms. Dacre\'s e-mail, what is she concerned about?',
        c: ['The availability of parking spaces', 'The condition of the nets', 'The noise from a nearby playground', 'The storage space for equipment'],
        a: 2,
        e: 'メールは「公園が遊び場に隣接しており、午後はかなり騒がしいと聞いている。集中を要するレッスンの妨げにならないか」と尋ねている。',
        w: ['駐車スペースの確保には触れていない。',
            'ネットの状態には触れていない。',
            '正解。',
            '用具の置き場には触れていない。'] },
      { tag: '推測', qid: 'v3q195p', s: 'What can be inferred about Ms. Dacre?',
        c: ['She is setting up her own coaching business.', 'She coaches another sport in the winter.', 'She plans to enter pupils in a competition.', 'She trained as a coach overseas.'],
        a: 1,
        t: ['p7inf'],
        e: 'メールは雨で流れた回の扱いに触れるなかで、「毎冬指導しているユースのスキーチーム」に言及しており、テニスのほかに冬は別の競技を指導していることがうかがえる。',
        w: ['自分のコーチ業を新たに立ち上げつつあるとは述べていない。',
            '正解。',
            '大会に生徒を出場させる計画には触れていない。',
            '海外でコーチの研修を受けたとは述べていない。'] },
    ],
  }),

  /* ══ 196–200 トリプルパッセージ ══════════════════════
     先読み対策（2026-09-29）：中古車販売店の広告＋Dovaston の問い合わせ
     メール＋担当 Mowbray の返信。Q196・Q197・Q198 の3問がクロス。
     文書を1つずつ隠すと：
       - 広告だけでは、Dovaston さんが新聞広告経由か紹介経由か・現金かローン
         か・変速方式と車体の好み・入金日が分からず、どのクロス設問も
         決まらない。
       - メールだけでは、値引きの区分（新聞広告／紹介／現金）・4台の対応表・
         納車準備にかかる期間が分からず、同様に決まらない。
       - 返信だけでは、広告の値引き規定・準備期間の規定・メールの希望条件が
         分からず、同様に決まらない。
       - Q199 はメールのみ、Q200 は広告の別の1文のみで決まる設問。
     Q196: メール「新聞広告を見た」「ローンを組む」×広告「新聞広告£150、
     紹介£100（併用不可）、現金+£50」で£150。
     Q197: 返信「入金は10月5日」×広告「入金から2週間で準備」で10月19日。
     Q198: メール「自分でギアを変えたい」「積載量が欲しい」（広告の語を
     言い換え）＝「マニュアル・エステート」の The Dorvel（広告の表）。
     監査の是正（review-r1）：Q197 は曜日が1文も無く、2026年で答えの
     10月19日が「火〜土営業」の定休日（月曜）に当たっていたため、営業日を
     「月〜土」に直し、メール・返信の日付に曜日を添えて試乗と入金の経緯が
     通るようにした（返信は車種・金額・最終日付を直接書かない）。Q196 の
     「family」の語が Q200 の家族経営の推測と響くため discount の文言を
     整理した。
     監査の是正（review-r2）：Q196 why の「広告を見た＝紹介ではない」は
     両立しうる事実で理由になっていなかったため、「紹介を受けたとは
     どこにも書いていない」という書き方に直した。 */
  mp({
    n: [196, 197, 198, 199, 200],
    lv: 5,
    docs: [
      {
        label: 'Advertisement', meta: 'Document 1',
        title: "Draycombe Motors — This Month's Clearance Sale",
        body: [
          "Draycombe Motors was set up in 1985 by our manager's grandfather, whose son and grandson have run it ever since. This month, we're clearing four well-looked-after used cars to make room for new stock.",
          { t: 'table', head: ['Model', 'Transmission', 'Body style'],
            rows: [
              ['The Delvane', 'Automatic', 'Hatchback'],
              ['The Marisca', 'Manual', 'Hatchback'],
              ['The Dorvel', 'Manual', 'Estate'],
              ['The Merrow', 'Automatic', 'Estate'],
            ] },
          'Every car above qualifies for one of two discounts, which cannot be combined with each other: £150 off for anyone who saw this advertisement, or £100 off for anyone referred by an existing customer. Buyers who pay the full balance in cash, rather than arranging finance, receive a further £50 on top of whichever discount applies.',
          "Once we've received your deposit, allow at least two weeks for us to prepare your car for collection — a full valet, safety check, and updated registration paperwork. We're open Monday to Saturday.",
          'Call in or e-mail sales@draycombemotors.co.uk to arrange a test drive.',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 2',
        head: 'To: sales@draycombemotors.co.uk\nFrom: f.dovaston@fastmail.com\nDate: Saturday, 3 October\nSubject: Enquiry about a replacement car',
        body: [
          'Dear Draycombe Motors,',
          "I saw your advertisement in the paper this week and I'm looking for a replacement car fairly urgently — my current car is a company car, and under my employer's fleet policy it has to go back to them at the end of this month.",
          "I much prefer changing gear myself. I'll also need to fit a folding bike in the back most days, so as much load space as possible would really help.",
          "I'll be arranging a loan through my bank rather than paying the full amount outright.",
          "Could you let me know which of your cars might suit me, and roughly how much I'd save?",
          'Best wishes,\nFarah Dovaston',
        ],
      },
      {
        label: 'E-mail', meta: 'Document 3',
        head: 'To: f.dovaston@fastmail.com\nFrom: sales@draycombemotors.co.uk\nDate: Tuesday, 6 October\nSubject: Re: Enquiry about a replacement car',
        body: [
          'Dear Ms. Dovaston,',
          "It was good to meet you on Monday, 5 October, and I'm glad the car we suggested felt right on your test drive.",
          'We received your deposit the same day, so please allow us the usual time to get the car ready before you come to collect it.',
          'Sorry to hear about the situation with your current car — these things always seem to come up at short notice.',
          'Best wishes,\nDiane Mowbray',
        ],
      },
    ],
    q: [
      { tag: 'クロス', qid: 'v3q196p', s: 'How much of a discount will Ms. Dovaston most likely receive?',
        c: ['£100', '£150', '£200', '£250'],
        a: 1,
        e: '広告は「新聞広告を見た人には£150引き、紹介の場合は£100引き（併用不可）、現金払いの場合はさらに£50上乗せ」としている。メールは「新聞広告を見た」「ローンを組む予定」と書いており、紹介でも現金払いでもないので、£150引きだけが当てはまる。',
        w: ['紹介を受けたとはメールのどこにも書いておらず、当てはまるのは広告を見た人向けの£150（2つの値引きはどちらか一方しか適用されない）。',
            '正解。新聞広告を見た人向けの£150引きのみが当てはまる。ローンを組む予定なので現金払いの上乗せは対象外。',
            '£200は£150に現金払いの£50上乗せを加えた金額だが、メールはローンを組むと書いており現金払いではない。',
            '£250は£150の値引きと£100の紹介値引きを合算した金額だが、広告はこの2つを併用できないとしている。'] },
      { tag: 'クロス', qid: 'v3q197p', s: 'When will the car most likely be ready for Ms. Dovaston to collect?',
        c: ['October 5', 'October 12', 'October 19', 'October 26'],
        a: 2,
        e: '広告は「入金から少なくとも2週間、納車準備の期間をいただく」としている。返信は入金日を10月5日としており、その2週間後の10月19日が準備の完了する日になる。',
        w: ['10月5日は入金日そのものであり、そこから準備期間を置く前の基準日。',
            '10月12日は入金日から7日後で、規定の2週間の半分。',
            '正解。入金日の10月5日から2週間後の10月19日。',
            '10月26日は入金日から21日後で、必要な2週間より1週間分多い。'] },
      { tag: 'クロス', qid: 'v3q198p', s: "Which vehicle will most likely suit Ms. Dovaston's needs?",
        c: ['The Delvane', 'The Marisca', 'The Dorvel', 'The Merrow'],
        a: 2,
        e: 'メールは「自分でギアを変えたい」（マニュアルの言い換え）と「積載量をできるだけ確保したい」（エステートの言い換え）の2文を書いている。広告の表でこの両方を満たすのは The Dorvel だけ。',
        w: ['The Delvane はオートマチック・ハッチバックで、どちらの条件にも合わない。',
            'The Marisca はマニュアル・ハッチバックで、変速方式の条件には合うが積載量の条件に合わない。',
            '正解。マニュアル・エステートの組み合わせで、両方の条件に合う。',
            'The Merrow はオートマチック・エステートで、積載量の条件には合うが変速方式の条件に合わない。'] },
      { tag: '詳細', qid: 'v3q199p', s: "According to Ms. Dovaston's e-mail, why is she looking for a different vehicle?",
        c: ['Her employer is taking back her company car.', 'Her current car failed a safety inspection.', 'Her son will be using her current car.', 'Her neighbour has bought her current car.'],
        a: 0,
        e: 'メールは「今の車は会社の車で、勤務先の車両方針により今月末には返却しなければならない」と書いている。',
        w: ['正解。',
            '車検に落ちたとは述べていない。',
            '息子が今の車を使うとは述べていない。',
            '隣人が今の車を買ったとは述べていない。'] },
      { tag: '推測', qid: 'v3q200p', s: 'What can be inferred about Draycombe Motors?',
        c: ['It is a family-run business.', 'It sponsors a local sports team.', 'It has more than one branch.', 'It opens seven days a week.'],
        a: 0,
        t: ['p7inf'],
        e: '広告は「1985年に、現在の店長の祖父が創業し、その息子と孫が代々経営してきた」と書いており、家族経営の店であることがうかがえる。',
        w: ['正解。',
            '地元のスポーツチームの後援には触れていない。',
            '複数の店舗を構えているとは述べていない。',
            '月曜から土曜まで営業すると書いており、週7日ではない。'] },
    ],
  }),
];
