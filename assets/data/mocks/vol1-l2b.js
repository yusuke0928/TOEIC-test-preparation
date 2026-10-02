/* =============================================================
   予想模試 Vol.1 — Part 3 後半（No.53–70）
   終盤 3 セットは図表問題。
   ============================================================= */

/* qid は id の明示指定。中身を差し替えたユニット・設問は SRS の履歴を
   引き継がせないため、通し番号由来の既定 id ではなく新しい id を与える。 */
const set = (o) => ({
  id: `v1-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v1q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2B = [

  /* ── 53–55（3名）────────────────────────────────── */
  /* 先読み対策（設問先行・正解はくじ）方式。stem・4択は凍結案のまま。正解はくじ（53=C 許可の遅れ, 54=A 在宅勤務, 55=C 昼食）。id の経緯：qid は v1q53p〜55p。
     2026-10-01 難度の試作（規則A〜C）で本文を全面的に書き直し、第1巡の監査で直した。stem・選択肢・くじの正解・id は変えていない。
     Q53：誤答の足場は 設計変更（1発言目。春に redrew 済みで、洪水の確認だけが残る＝時のずれ）と 現地訪問（3発言目。来週の予定が延期＝変更前の予定）。正解は本文の語 delay を持つ（2発言目 Another delay?）。規則Bの決め手は申告しない。
     Q54：誤答の足場は 新しい社長（2発言目。入居日を急ぐ理由として20年務める人と述べる＝新任ではない）と 旧社屋の売却（4発言目。up for sale にしたが買い手なし＝不成立。premises と up for sale は言い換え）。正解と誤答の増員は staff を共有する。決め手は規則B(c)（週2日出社・残りは台所の机＝在宅勤務を認める。work・home は本文に無い。内容語の共有は staff のみ）。
     Q55：誤答の足場は 現地写真（5発言目。依頼主がすでに見た＝時のずれ）と 模型（6発言目。木曜まで届かず見送り＝変更前の案）。規則Bの決め手は申告しない（変更が隣の発言で、最後の3発言が昼食で一致するため）。
     明示的な否定・訂正は nobody made an offer の1本。 */
  set({
    n: [53, 54, 55], lv: 3, k: 'conversation with three speakers', t: ['p3detail'],
    s: [
      { role: 'W-Br', text: 'The planning office is content with the entrance we redrew in the spring, but it won\'t give us the go-ahead until a flood survey is done, so the consent slips by at least two weeks.' },
      { role: 'M-Am', text: 'Another delay? Mr. Ostler wants a firm move-in date. He\'s been our managing director for twenty years, and he hates missed deadlines.' },
      { role: 'W-Br', text: 'The officer was due to visit the site next Tuesday, but he\'s put that off until the survey is in.' },
      { role: 'M-Au', text: 'It isn\'t as bad for us. We put the old premises up for sale last autumn and nobody made an offer, so we\'re in no hurry. Most of our staff are only in two days a week now; the rest of the time they\'re at their kitchen tables.' },
      { role: 'M-Am', text: 'True, that does take the pressure off. We\'ve already seen the site photos, so could we see the scale model?' },
      { role: 'W-Br', text: 'The workshop is only sending it on Thursday. It\'s nearly twelve, though. Shall we get lunch instead?' },
      { role: 'M-Am', text: 'Good idea.' },
      { role: 'M-Au', text: 'Let\'s do that.' },
    ],
    ja: '建築士の女性が、依頼主企業の男性2人に、春に描き直した玄関部分は計画担当部署も問題にしていないが、洪水調査が終わるまで許可は出ず、許可が少なくとも2週間遅れると伝える。1人目の男性は、また遅れかと言い、オストラー氏が確かな入居日を求めていると話し、社長を20年務める同氏は期限の遅れを嫌うと付け加える。女性は、担当官が来週予定していた現地視察は調査が出るまで延期になったと説明する。2人目の男性は、旧社屋を昨秋に売りに出したが買い手がつかず、急ぐ必要はないこと、社員の大半は週2日しか出社せず残りは自宅の台所の机で働いていることを挙げて、遅れは見た目ほど深刻でないと述べる。1人目の男性は、現地の写真はもう見たので縮尺模型を見たいと言うが、女性は模型が木曜にしか工房から届かないと答え、正午近いので代わりに昼食に行こうと提案する。男性2人は賛成する。',
    v: [['go-ahead', '許可・ゴーサイン'], ['flood survey', '洪水リスクの調査'], ['put ~ off', '〜を延期する'], ['up for sale', '売りに出されて'], ['premises', '（敷地を含む）建物・社屋'], ['take the pressure off', '負担を軽くする'], ['scale model', '縮尺模型']],
    q: [
      { tag: '概要', qid: 'v1q53p', s: 'What are the speakers mainly discussing?',
        c: ['A revision to a building design', 'A name for the new building', 'A delay in a permit approval', 'A site visit scheduled for next week'],
        a: 2,
        e: '女性が冒頭で「it won\'t give us the go-ahead until a flood survey is done, so the consent slips by at least two weeks」と述べ、男性は「Another delay?」と受けている。続く発言は、その遅れの影響（入居日・現地視察・自社への影響）をめぐって進む。選択肢の「a permit approval」は本文の go-ahead / consent の言い換えで、「a delay」は本文の「Another delay?」と同じ語で、内容は「slips by at least two weeks」と同じである。',
        w: ['「The planning office is content with the entrance we redrew in the spring」とあり、設計の描き直しは春に済んでいて役所も問題にしていない（時のずれ）。いま許可を止めているのは「until a flood survey is done」とある洪水調査で、設計変更は話の中心ではない。', '建物の名称は会話のどこにも出てこない（言及なし）。', '正解。「it won\'t give us the go-ahead until a flood survey is done, so the consent slips by at least two weeks」で許可の遅れが提示され、「Another delay?」が受けて、以降の発言もその影響を受けて進む。', '「The officer was due to visit the site next Tuesday, but he\'s put that off until the survey is in.」とあり、来週に予定されていた現地訪問は延期された（変更前の予定）。来週に予定されているものではない。'] },
      { tag: '詳細', qid: 'v1q54p', s: 'What does one of the men say about their company?',
        c: ['It lets staff work from home', 'It has a new managing director', 'It sold its old building', 'It is hiring more staff this year'],
        a: 0,
        e: '2人目の男性が「Most of our staff are only in two days a week now; the rest of the time they\'re at their kitchen tables.」と述べている。週の大半は自宅で働く、つまり会社が在宅勤務を認めているということを具体的に言ったもので、選択肢はそれを一段上の言葉でまとめている。',
        w: ['正解。「Most of our staff are only in two days a week now; the rest of the time they\'re at their kitchen tables.」で、社員が週2日しか出社せず残りは自宅で働いていると述べている。', '「He\'s been our managing director for twenty years」とあり、社長は20年務めている人物で、新任ではない（時のずれ）。', '「We put the old premises up for sale last autumn and nobody made an offer」とあり、旧社屋は売りに出されたが買い手がつかず、売却は成立していない（不成立）。', '「Most of our staff are only in two days a week now」は社員の出社日数の話で、増員の話ではない。人を増やすことは会話のどこにも出てこない（言及なし）。'] },
      { tag: '次の行動', qid: 'v1q55p', s: 'What will the speakers most likely do next?',
        c: ['Examine a scale model', 'Look at photos of a site', 'Have lunch together', 'Move to another meeting room'],
        a: 2,
        e: '女性が模型は木曜にしか届かないと伝えたうえで、「It\'s nearly twelve, though. Shall we get lunch instead?」と昼食を提案し、男性が「Good idea.」、もう1人が「Let\'s do that.」と同意して会話が終わる。',
        w: ['男性が「could we see the scale model?」と尋ねたが、女性が「The workshop is only sending it on Thursday.」と答えており、模型を見る案は見送られた（変更前の案）。', '男性が「We\'ve already seen the site photos」と言っており、写真はすでに見たもの（時のずれ）。この後にするのは、全員が同意した昼食である。', '正解。「Shall we get lunch instead?」に「Good idea.」「Let\'s do that.」と全員が応じている。', '別の部屋へ移ることは会話のどこにも出てこない（言及なし）。'] },
    ],
  }),

  /* ── 56–58 ─────────────────────────────────────────── */
  /* 正解はくじ（56=D, 57=D, 58=D）。
     閉じ方：Q56 は「家主からの値上げ通知」を冒頭で立て、道路工事・ディスプレイ
     コンテスト・金曜営業延長はいずれも会話に出さない。Q57 は女性が
     子ども向け読み聞かせの時間について述べる発言だけを置き、周年行事・新従業員・
     オンライン販売はいずれも出さない。Q58 は「男性の店の前で客が待っている」と
     女性が指摘し、男性がそれに応じる形で立て、家主への電話・他店主への連絡文・
     自治体サイトの確認はいずれも会話に出さない。
     2026-09-29 監査r1反映：①Q57 の根拠 "the reading hour I started for
     children" が選択肢とほぼ同語で、M-Br の相槌も "That reading hour of
     yours" と繰り返していたため、両方とも "the story time I run for kids
     on Saturday mornings" / "Those Saturday story mornings of yours" に
     言い換えた。②"footfall"（英式）は W-Cn（カナダ）に合わないため
     "foot traffic" に差し替え（vocab も対応）。③Q58 の根拠が "a customer
     waiting by your shop" とほぼ選択肢そのものだったため、"someone at
     your door with a watch in their hand"
     に言い換えた。stem・選択肢・answer は変更なし。 */
  set({
    n: [56, 57, 58], lv: 3,
    s: [
      { role: 'M-Br', text: 'Did you get that letter from the landlord this morning? Our rent\'s going up eight percent from next quarter.' },
      { role: 'W-Cn', text: 'I got one too. Eight percent on top of last year\'s rise is a lot for a shop this size.' },
      { role: 'M-Br', text: 'I know. I don\'t see how we absorb that without raising our own prices.' },
      { role: 'W-Cn', text: 'Same here. At least the story time I run for kids on Saturday mornings keeps families coming through my door, so foot traffic\'s still strong — it\'s just the margins that are tight.' },
      { role: 'M-Br', text: 'Those Saturday story mornings of yours do seem to bring people in. Anyway—' },
      { role: 'W-Cn', text: 'Hold on, isn\'t that someone at your door with a watch in their hand?' },
      { role: 'M-Br', text: 'Ah, so it is. I\'d better go and see to them.' },
      { role: 'W-Cn', text: 'Go on, we\'ll pick this up later.' },
    ],
    ja: '隣り合う店を営む男性と女性が、今朝届いた家主からの通知で来四半期から家賃が8%上がると話す。女性も同じ通知を受け取っており、昨年の値上げに続く8%はこの規模の店には大きいと応じる。女性は、自分が土曜日の朝に開いている子ども向けのお話の時間のおかげで来客数は落ちていないが、利益の幅が厳しいのだと話す。男性がその効果に触れかけたところで、女性が男性の店の前に時計を手にした人がいるのではと指摘し、男性は対応するために会話を切り上げる。',
    v: [['on top of ~', '～に加えて'], ['absorb (a cost)', '（費用を）自分でかぶる・吸収する'], ['foot traffic', '来客数・客足'], ['margin', '利益の幅']],
    q: [
      { tag: '概要', qid: 'v1q56p', s: 'What is the main topic of the conversation?',
        c: ['A road repair planned for the street', 'A contest for the best window display', 'A plan to stay open late on Fridays', 'A rent increase from their landlord'],
        a: 3,
        e: '男性が「今朝、家主から通知が来て、来四半期から家賃が8%上がる」と切り出し、女性も同じ通知を受け取ったと応じている。',
        w: ['通りの道路工事については会話のどこにも出てこない。', '窓のディスプレイコンテストについては会話のどこにも出てこない。', '金曜日の営業時間延長については会話のどこにも出てこない。', '正解。'] },
      { tag: '詳細', qid: 'v1q57p', s: 'What does the woman mention about her shop?',
        c: ['It is celebrating its tenth anniversary', 'It has a new part-time assistant', 'It started selling online last year', 'It hosts a reading hour for children'],
        a: 3,
        e: '女性は「土曜日の朝に子ども向けのお話の時間を開いており、それが家族連れを店に呼び込んでいる」と述べている。',
        w: ['開店10周年については会話のどこにも出てこない。', '新しいパート従業員については会話のどこにも出てこない。', '昨年からのオンライン販売については会話のどこにも出てこない。', '正解。'] },
      { tag: '次の行動', qid: 'v1q58p', s: 'What will the man most likely do next?',
        c: ['Serve a waiting customer', 'Write a note to other shop owners', 'Look at the council\'s website', 'Call the landlord\'s office'],
        a: 0,
        e: '女性が「あなたの店の前に時計を手にした人がいるのでは」と指摘し、男性が「そのとおりだ、対応してくる」と応じている。',
        w: ['正解。', '他の商店主への連絡文を書くという記述は会話のどこにも出てこない。', '自治体のサイトを確認するという記述は会話のどこにも出てこない。', '家主の事務所に電話するという記述は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 59–61 ─────────────────────────────────────────── */
  /* 正解はくじ（59=D, 60=B, 61=D）。
     2026-09-29 監査r1反映（致命的の解消）：旧稿は同じ話者が冒頭で
     "a while back" / "lately" と言いながら、引用で "on Saturday"（せいぜい
     数日前）と言う自己矛盾があり、女性の保証の理屈（発売14か月・保証12か月
     なら「最近買った人以外は有料」にならない）も成り立っていなかった。
     直し方：①冒頭から時期を示す語（a while back / lately）を削り、時期に
     ついて何も言わせない。②女性の判定基準を「購入時期」ではなく「入荷
     （シリアル番号）が1年以上前」に変える——入荷基準なら「12か月保証の
     対象外」という判定は独立して成立する。③男性の "I bought it on
     Saturday" を受けて、女性が「それなら在庫倉庫に長く置かれていた個体
     だったのだろう」と納得し、購入日基準の返品期間（14日）に切り替える、
     という筋にした。これで引用の直前にあるのは「入荷基準で保証外と断定
     した修理代」だけになり、引用は (B) 修理代への異議としてのみ機能する。
     返品の話は引用の後で女性が初めて持ち出し、男性は "I didn't know I
     could still bring it back" と明言する（(A) を閉じる、この発言のみ
     明示的な否定）。不具合の診断（internal fault）は引用より前に置かれて
     いるため、引用を (C) 驚きの表明として読む文脈もない。使用頻度への
     言及も無いため (D) も成り立たない。 */
  set({
    n: [59, 60, 61], lv: 4,
    s: [
      { role: 'M-Au', text: 'Hi, I bought this wireless speaker here, and the sound cuts out every couple of minutes. It reconnects on its own, but it happens the whole time I\'m using it.' },
      { role: 'W-Am', text: 'That does sound frustrating. Let me take a look... The pairing with your phone looks fine, so it\'s probably an internal fault.' },
      { role: 'M-Au', text: 'Can it be fixed?' },
      { role: 'W-Am', text: 'It can, but according to the serial number, this unit came in with a shipment from over a year ago, so it\'s outside the twelve-month warranty. A repair would cost around forty dollars.' },
      { role: 'M-Au', text: 'I bought it on Saturday.' },
      { role: 'W-Am', text: 'Oh — it must have been sitting in our stockroom, then. In that case, you\'re well within our fourteen-day return window, so rather than send it off for repair, I\'ll put the money back on your card.' },
      { role: 'M-Au', text: 'Oh, I didn\'t know I could still bring it back — that works for me. Here\'s my receipt, just in case.' },
      { role: 'W-Am', text: 'Perfect, thanks.' },
    ],
    ja: '男性が店で購入したワイヤレススピーカーについて、数分おきに音が途切れて自動的に再接続されるが、使っている間ずっとそれが起きると女性スタッフに説明する。女性は接続の設定に問題は見当たらないため内部の故障だろうと述べる。男性が修理できるか尋ねると、女性はシリアル番号から、この個体は1年以上前に入荷したものなので12か月保証の対象外であり、修理は40ドルほどの有償になると答える。男性が「土曜日に買った」と伝えると、女性はそれなら在庫倉庫に長く置かれていた個体だったのだろうと納得し、それなら14日間の返品期間内なので、修理に出す代わりにカードへ返金すると答える。男性は返品できるとは知らなかったと言いつつ了承し、念のため領収書も渡す。',
    v: [['serial number', '製造番号・シリアル番号'], ['internal fault', '内部の故障'], ['stockroom', '倉庫・在庫置き場'], ['return window', '返品受付期間']],
    q: [
      { tag: '詳細', qid: 'v1q59p', s: 'What problem does the man mention?',
        c: ['The connection keeps dropping out', 'The screen developed a crack', 'The speaker makes a buzzing sound', 'The battery stopped holding a charge'],
        a: 0,
        e: '男性は「音が数分おきに途切れ、自動的に再接続されるが、使っている間ずっとそれが起きる」と説明している。',
        w: ['正解。', '画面にひびが入ったという記述は会話のどこにも出てこない。', 'スピーカーからブザーのような音がするという記述は会話のどこにも出てこない。', '電池が充電を保持しなくなったという記述は会話のどこにも出てこない。'] },
      { tag: '意図', qid: 'v1q60p', t: ['p3int'], s: 'What does the man mean when he says, "I bought it on Saturday"?',
        c: ['He is claiming he can still return it', 'He is objecting to a repair charge', 'He is expressing surprise at the problem', 'He is explaining why he has barely used it'],
        a: 1,
        e: '直前で女性が、シリアル番号から入荷が1年以上前だと判断し、12か月保証の対象外なので修理は有償になると説明したのに対し、男性は「土曜日に買った」と返して、その判断が誤りだと示している。',
        w: ['この時点では返品の話はまだ出ておらず、女性はこのあと初めて返品の可能性を持ち出している。男性自身も「返品できるとは知らなかった」と述べており、この発言の時点で返品を主張していたのではない。', '正解。', '引用は、女性が修理代を示した直後の返答である。女性もそれを受けて "it must have been sitting in our stockroom, then" と、入荷から購入まで店の在庫にあった個体だと受け止め、修理ではなく返金に切り替えている（"rather than send it off for repair, I\'ll put the money back on your card"）。不具合は男性自身が冒頭で説明しており、この発言は不具合への反応ではない。', '女性が問題にしているのは保証の対象になる入荷時期であって、使用頻度についての発言はない。'] },
      { tag: '次の行動', qid: 'v1q61p', s: 'What will the woman most likely do next?',
        c: ['Issue a replacement device', 'Check the return policy', 'Contact the manufacturer', 'Process a refund'],
        a: 3,
        e: '女性は「それなら14日間の返品期間内なので、修理に出す代わりにカードへ返金する」と述べている。',
        w: ['代替品を渡すという記述は会話のどこにも出てこない。', '返品規定を確認するという記述はなく、女性はすでに返品期間内だと分かったうえで先へ進んでいる。', 'メーカーに連絡するという記述は会話のどこにも出てこない。', '正解。'] },
    ],
  }),

  /* ── 62–64（図表）────────────────────────────────── */
  /* 図表・正解はくじ（62=A=Model 17, 63=C, 64=D）。表は凍結（Model/Shell/
     Closure）。音声は行名（Model 17 等）も Hard shell / Soft shell / Zip /
     Clasps も一度も読み上げず、申し送りどおりに言い換えている（固いケース＝
     rigid／留め具＝縁を一周する1本の留め具、角の金属の留め金ではない）。殻の硬さと
     留め具の2条件を両方拾って初めて Model 17 に決まる。Q63・Q64 は非図表
     設問のため t を明示した。自己試行：表だけでは4択のまま（どの行が正解か
     手がかりが無い）、音声だけでも4択のまま（モデル番号が分からない）。
     表と音声を両方合わせて初めて1つに絞れる。
     2026-09-29 監査r1反映：①男性の相槌 "a rigid case with a full zip
     closure" が表の見出し語 Closure とセル語 Zip をそのまま含んでいたので
     "This one covers both of those." に言い換えた。②女性が硬いケースを
     求める理由が「土産のガラス製品」という旅行の事情からの推測だったため、
     "my old one used to get squashed flat in the overhead lockers"
     （旅行の事情と無関係な、過去の経験）に差し替えた（これに伴い "not one
     that flexes" という明示的な否定を削り、vocab の flex も差し替えた）。
     ③Q64 の根拠 "luggage tags with the buyer's initials" が選択肢とほぼ
     同語だったため "a free pair of handle labels with your monogram
     stitched on" に言い換えた。stem・選択肢・answer は変更なし。level は
     監査の見立てどおり lv3 に直した（両軸とも直接的な語で取れるため）。 */
  set({
    n: [62, 63, 64], lv: 3, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Suitcase Range',
      head: ['Model', 'Shell', 'Closure'],
      rows: [
        ['Model 17', 'Hard shell', 'Zip'],
        ['Model 2', 'Soft shell', 'Zip'],
        ['Model 26', 'Hard shell', 'Clasps'],
        ['Model 10', 'Soft shell', 'Clasps'],
      ],
    },
    s: [
      { role: 'W-Br', text: 'Hi, I need a new case — my sister and I are flying to Lisbon next week and my old one\'s finally given out.' },
      { role: 'M-Cn', text: 'Sure, let\'s find you something. Any particular requirements?' },
      { role: 'W-Br', text: 'I\'d like something rigid this time — my old one used to get squashed flat in the overhead lockers.' },
      { role: 'M-Cn', text: 'That narrows it down. And how do you feel about the fastening?' },
      { role: 'W-Br', text: 'I\'d rather avoid the ones with metal snap catches on the corners — I had one pop open at an airport once. I\'d feel safer with something that has one fastening running right the way round the edge.' },
      { role: 'M-Cn', text: 'This one covers both of those. And this week, we\'re including a free pair of handle labels with your monogram stitched on, if you\'d like.' },
      { role: 'W-Br', text: 'Oh, that\'s a nice touch. Yes please.' },
    ],
    ja: '女性客が旅行かばん店で、姉（妹）と来週リスボンへ行くため旧いケースの代わりを探していると店員の男性に伝える。以前使っていたケースは機内の収納棚でよく潰れていたので、今回は硬いケースが良いと述べる。留め具については、以前空港で金属の留め金が外れた経験があるため、縁をぐるりと一周する1本の留め具のほうが安心だと述べる。男性は両方の条件に合う商品を提示し、さらに今週はモノグラム入りの取っ手用ラベルを無料で付けていると案内する。女性は喜んでそれを受け取ることにする。',
    v: [['squashed flat', 'ぺしゃんこに潰れる'], ['snap catch', '金属の留め金'], ['one fastening running right the way round the edge', '縁を一周する1本の留め具'], ['monogram', '組み合わせ頭文字（モノグラム）']],
    q: [
      { tag: '図表', qid: 'v1q62p', s: 'Look at the graphic. Which model will the woman most likely buy?',
        c: ['Model 17', 'Model 2', 'Model 26', 'Model 10'],
        a: 0,
        e: '女性はまず、以前のケースが機内の収納棚でよく潰れていたと述べ、今回は硬いケースが良いと伝えて柔らかい素材のケース（Model 2・Model 10）を除外する。続けて、留め具は角に付く金属の留め金ではなく、縁を一周する1本の留め具が良いと述べ、留め金式のケース（Model 26）も除外される。表で縁を一周する留め具に当たるのはジッパー式で、残るのは硬いケースかつジッパー式の Model 17 だけである。',
        w: ['正解。', 'Model 2 は表ではジッパー式で、縁を一周する留め具という条件は満たすが、柔らかい素材のケースであり女性が求める硬さの条件を満たさない。', 'Model 26 は硬いケースで素材の条件は満たすが、留め金式であり女性が避けたいと述べた留め具である。', 'Model 10 は柔らかい素材かつ留め金式で、どちらの条件も満たさない。'] },
      { tag: '詳細', qid: 'v1q63p', t: ['p3detail'], s: 'What does the woman say about her trip?',
        c: ['She leaves on Friday', 'She will be away for a month', 'She is going with her sister', 'She won it in a contest'],
        a: 2,
        e: '女性は「姉（妹）と一緒にリスボンへ行く」と述べている。',
        w: ['出発が金曜日だという記述は会話のどこにも出てこない。', '1か月間の旅行だという記述は会話のどこにも出てこない。', '正解。', 'コンテストで当てたという記述は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v1q64p', t: ['p3detail'], s: 'What does the man offer the woman?',
        c: ['Free delivery to her home', 'Ten percent off a second item', 'An extended warranty', 'Luggage tags with her initials'],
        a: 3,
        e: '店員の男性は「今週は購入者のモノグラム入りの取っ手用ラベルを無料でお付けしている」と申し出ている。',
        w: ['自宅への無料配送については会話のどこにも出てこない。', '2点目の10%引きについては会話のどこにも出てこない。', '延長保証については会話のどこにも出てこない。', '正解。'] },
    ],
  }),

  /* ── 65–67（図表）────────────────────────────────── */
  /* 図表・正解はくじ（65=D=Item 18, 66=D, 67=B）。表は凍結（Item/Fabric/
     Fitting）。音声は行名（Item 11 等）も Blackout / Sheer / Inside the
     frame / Outside the frame も一度も読み上げず言い換えている（薄く透ける
     ＝Sheer／窓全体の前面に垂れ下がり周囲を覆う＝Outside the frame）。生地と
     取り付けの2条件を両方拾って初めて Item 18 に決まる。Q66・Q67 は非図表
     設問のため t を明示した。自己試行：表だけでは4択のまま（どの品が不具合か
     手がかりが無い）、音声だけでも4択のまま（品番が分からない）。片方の属性
     だけ聞き取れれば2択（Sheer系2枚 or Outside系2枚）まで絞れる。
     2026-09-29 監査r1反映：①取り付けの言い換えに frame / inside / outside
     という表の語がそのまま出ていたので、"sit within the window recess" /
     "hang over the surrounding trim" に言い換えた。②場面が「届いたブラ
     インド」なのに本文が "one of the blinds you fitted"（会社が設置した）
     になっており、Q67 の (A) 設置業者の派遣が筋として浮いていたので、
     "delivered" と "a few different types" に直した。③生地の説明が
     "has a problem" の直後に苦情の口調（"even when it's fully drawn"）で
     置かれ不具合そのものに聞こえたため、"one of the thin, see-through
     ones" に短縮し中立にした。④返却の対応も "email … returns form" が
     選択肢とほぼ同語だったため "get the paperwork for sending it back
     into your inbox" / "a new one will go out to you" に言い換えた。
     ⑤W-Am（米）に合わない英式語 decorators／sorted を crew／taken care
     of に差し替えた（vocab・ja も対応）。stem・選択肢・answer は変更なし。 */
  set({
    n: [65, 66, 67], lv: 4, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Blinds Ordered',
      head: ['Item', 'Fabric', 'Fitting'],
      rows: [
        ['Item 11', 'Blackout', 'Inside the frame'],
        ['Item 30', 'Sheer', 'Inside the frame'],
        ['Item 4', 'Blackout', 'Outside the frame'],
        ['Item 18', 'Sheer', 'Outside the frame'],
      ],
    },
    s: [
      { role: 'W-Am', text: 'Hi, I\'m calling about an order from last month — one of the blinds you delivered has a problem.' },
      { role: 'M-Br', text: 'Sorry to hear that. Can you tell me which one? There are a few different types on your order.' },
      { role: 'W-Am', text: 'It\'s one of the thin, see-through ones.' },
      { role: 'M-Br', text: 'Right, and does that one sit within the window recess, or hang over the surrounding trim?' },
      { role: 'W-Am', text: 'It hangs down in front of the whole window, so it covers the trim around it as well.' },
      { role: 'M-Br', text: 'Got it. And what\'s the problem with it?' },
      { role: 'W-Am', text: 'There\'s a patch of discoloration near the bottom hem, like it\'s a slightly different shade there. I\'ve got a crew coming to put a fresh coat on the walls in that room next week, so I\'d like it taken care of before they start.' },
      { role: 'M-Br', text: 'No problem — I\'ll get the paperwork for sending it back into your inbox this afternoon, and once that blind reaches us, a new one will go out to you.' },
      { role: 'W-Am', text: 'Thank you, I appreciate it.' },
    ],
    ja: '女性客が、先月注文したブラインドの1枚に不具合があると電話でブラインド販売会社の男性に伝える。生地は薄く透けて見えるタイプだと伝え、取り付け方は窓全体の前面に垂れ下がり、周囲の縁も覆うタイプだと伝える。不具合は裾近くに色むらの部分があることで、来週その部屋の壁に新しく塗り替える作業員が来る予定なのでそれまでに済ませてほしいと述べる。男性は本日中に返送用の書類をメールで送り、返送されたブラインドが届き次第交換品を送ると答える。',
    v: [['see-through', '透けて見える'], ['recess (window)', '窓の奥まった部分'], ['discoloration', '変色・色むら'], ['hem', '裾・縁']],
    q: [
      { tag: '図表', qid: 'v1q65p', s: 'Look at the graphic. Which blind has a problem?',
        c: ['Item 11', 'Item 30', 'Item 4', 'Item 18'],
        a: 3,
        e: '女性はまず、その生地が薄く透けて見えるタイプだと伝え、遮光タイプの品（Item 11・Item 4）を除外する。続けて、その品は窓全体の前面に垂れ下がり周囲の縁も覆うと伝え、窓枠の奥まった部分に収まる品（Item 30）も除外される。残るのは透ける生地かつ前面に垂れ下がるタイプの Item 18 だけである。',
        w: ['遮光タイプであり、女性が述べた「薄く透けて見える」という生地の条件を満たさない。加えて窓枠の奥まった部分に収まるタイプでもあり、取り付け方の条件も満たさない。', '透ける生地で条件は満たすが、窓枠の奥まった部分に収まるタイプであり、女性が述べた「前面に垂れ下がり周囲を覆う」取り付け方と一致しない。', '遮光タイプであり、女性が述べた「薄く透けて見える」という生地の条件を満たさない。', '正解。'] },
      { tag: '詳細', qid: 'v1q66p', t: ['p3detail'], s: 'What does the woman say about her home?',
        c: ['She moved in last month', 'She plans to sell it next year', 'She has guests arriving on Saturday', 'She is having it painted soon'],
        a: 3,
        e: '女性は「来週、その部屋の壁に新しく塗り替える作業員が来る予定なので、それまでに済ませてほしい」と述べている。',
        w: ['先月引っ越してきたという記述は会話のどこにも出てこない（先月あったのは注文であって引っ越しではない）。', '来年売却する予定だという記述は会話のどこにも出てこない。', '土曜日に来客があるという記述は会話のどこにも出てこない。', '正解。'] },
      { tag: '次の行動', qid: 'v1q67p', t: ['p3detail'], s: 'What will the man most likely do next?',
        c: ['Send an installer to her home', 'Check the factory\'s schedule', 'E-mail her a returns form', 'Look up the original measurements'],
        a: 2,
        e: '男性は「本日中に返送用の書類をメールで送るので、返送されたブラインドが届き次第、交換品を送る」と述べている。',
        w: ['設置業者を派遣するという記述は会話のどこにも出てこない（ブラインドは会社が届けたもので、設置作業員の話は出てこない）。', '工場の予定を確認するという記述は会話のどこにも出てこない。', '正解。', '当初の採寸を調べるという記述は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 68–70（図表）────────────────────────────────── */
  /* 図表・正解はくじ（68=A=Package 13, 69=D, 70=D）。表は凍結（Package/
     Equipment/Style）。音声は行名（Package 13 等）も Furniture sets / Tent
     structures / Rustic / Modern も一度も読み上げず言い換えている（テーブルと
     椅子＝Furniture sets／古びた木材の風合い＝Rustic）。備品の種類とスタイル
     の2条件を両方拾って初めて Package 13 に決まる。Q69・Q70 は非図表設問の
     ため t を明示した。Q70 は返却について女性が述べることを1つだけにし、
     点検・清掃・引き取りの話は出さない。自己試行：表だけでは4択のまま
     （どの行が返却物か手がかりが無い）、音声だけでも4択のまま（パッケージ
     番号が分からない）。片方の属性だけなら2択まで絞れる。
     2026-09-29 監査r1反映：①備品の種類とスタイルが
     "tables and chairs, dressed up with a wooden farmhouse look" と1文に
     なっていた（申し送り「別々の文で」に違反）ので2文に分けた。②
     "glad we hadn't cut back on the seating" がイベントの規模から Equipment
     列を推させる言い方だったので削った。③Q69 の根拠 "far more guests than
     we'd planned for" が選択肢の語 guests とほぼ同語だったので、語の重なりの
     無い "the turnout was well beyond what we'd planned for" に言い換えた。
     ④Q70 の根拠 "the loading bay closes at five" が選択肢とほぼ同語で、
     構文も崩れていたので "the roller door out the back … comes down at
     five" に言い換えた（vocab・ja も対応）。⑤"Was everything from the
     same booking?" に対する応答が質問と噛み合っていなかったので、問いと
     応答を対応させた。stem・選択肢・answer は変更なし。
     2026-09-29 監査r2反映：②で1文に分けたスタイルの文が「イベントの」
     風合い（会場の木造建築など）とも読め、返却した品のものだと明示され
     ていなかったため、"Everything we rented from you got compliments —
     people loved that old farmhouse feel of the weathered wood." に
     差し替え、風合いが「借りた品」のものだと明示した（+6語、exp・ja も
     対応）。stem・選択肢・answer は変更なし。 */
  set({
    n: [68, 69, 70], lv: 4, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Rentals Due Back Today',
      head: ['Package', 'Equipment', 'Style'],
      rows: [
        ['Package 13', 'Furniture sets', 'Rustic'],
        ['Package 5', 'Tent structures', 'Rustic'],
        ['Package 27', 'Furniture sets', 'Modern'],
        ['Package 8', 'Tent structures', 'Modern'],
      ],
    },
    s: [
      { role: 'M-Cn', text: 'Hi, I\'m bringing back the tables and chairs we rented for Saturday\'s event — it\'s all already loaded in the van just outside.' },
      { role: 'W-Au', text: 'Of course. Let me pull up your order... here we go. Was everything on the one booking?' },
      { role: 'M-Cn', text: 'Yes, just the one. The event went really well, actually. Everything we rented from you got compliments — people loved that old farmhouse feel of the weathered wood. And the turnout was well beyond what we\'d planned for.' },
      { role: 'W-Au', text: 'Good to hear. One thing before you start unloading — the roller door out the back where the vans pull in comes down at five, so you\'ll want to be done before then.' },
      { role: 'M-Cn', text: 'No trouble at all, we\'ll have it out of the van well before then. Thanks for your help today.' },
    ],
    ja: '男性客がイベント用品レンタル業者の倉庫に、土曜日のイベントで借りたテーブルと椅子一式を返しに来る。女性担当者が、注文がひとまとめかどうか尋ね、男性は一括だったと答える。イベントは大変好評で、借りた品が褒められ、古びた木材の風合いが好評だったことや、当日の来場者数が見込みを大きく上回ったことを話す。女性は、搬入用の裏口のシャッターが5時に閉まるので、それまでに荷降ろしを終えてほしいと伝え、男性はその前に済ませると答える。',
    v: [['turnout', '来場者数・参加者数'], ['weathered wood', '風雨にさらされ味わいの出た木材'], ['roller door', 'シャッター式の扉'], ['pull in', '（車が）乗り入れる']],
    q: [
      { tag: '図表', qid: 'v1q68p', s: 'Look at the graphic. Which package is the man returning?',
        c: ['Package 13', 'Package 5', 'Package 27', 'Package 8'],
        a: 0,
        e: '男性は「土曜日のイベント用に借りたテーブルと椅子を返しに来た」と伝えたうえで、「借りた品が褒められ、古びた木材の風合いが好評だった」と述べ、テント構造の品（Package 5・Package 8）と、洗練された現代風の品（Package 27）を除外する。残るのは家具一式かつ古びた風合いの Package 13 だけである。',
        w: ['正解。', 'Package 5 はテント構造の品であり、男性が述べた家具一式という条件を満たさない。', 'Package 27 は家具一式で条件は満たすが、洗練された現代風の品であり、男性が述べた古びた風合いと一致しない。', 'Package 8 はテント構造かつ現代風の品で、どちらの条件も満たさない。'] },
      { tag: '詳細', qid: 'v1q69p', t: ['p3detail'], s: 'What does the man say about his event?',
        c: ['It raised money for a charity', 'It celebrated a colleague\'s retirement', 'It lasted for two days', 'It had more guests than expected'],
        a: 3,
        e: '男性は「当日の来場者数は、見込んでいた人数を大きく上回った」と述べている。',
        w: ['慈善事業のための資金集めだったという記述は会話のどこにも出てこない。', '同僚の退職を祝うものだったという記述は会話のどこにも出てこない。', '2日間にわたったという記述は会話のどこにも出てこない。', '正解。'] },
      { tag: '詳細', qid: 'v1q70p', t: ['p3detail'], s: 'What does the woman mention about the return?',
        c: ['The company offers a pickup service', 'The items need a quick inspection first', 'The rental price includes cleaning', 'The loading bay closes at five'],
        a: 3,
        e: '女性は「搬入用の裏口のシャッターが5時に閉まるので、それまでに済ませてほしい」と述べている。',
        w: ['引き取りサービスについては会話のどこにも出てこない。', '返却時の点検については会話のどこにも出てこない。', '清掃込みの料金については会話のどこにも出てこない。', '正解。'] },
    ],
  }),
];
