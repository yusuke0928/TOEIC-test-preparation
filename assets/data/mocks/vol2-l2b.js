/* =============================================================
   予想模試 Vol.2 — Part 3 後半（No.53–70）
   図表問題は 53・65・68 の3セット（59 は図表なし）。
   ============================================================= */

/* qid は id の明示指定。先読み対策（設問先行・正解はくじ）で本文を
   書き直した設問は、通し番号由来の既定 id ではなく新しい id
   (v2q<no>p) を明示して SRS の履歴を引き継がせない。 */
const set = (o) => ({
  id: `v2-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v2q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2B = [

  /* ── 53–55（図表）────────────────────────────────── */
  /* 設問案・正解はくじ（53=A=Stall 12, 54=A, 55=A）。stem・選択肢・表は
     凍結案のまま1字も変えていない。表（Stall/Area/Setup）は Area・Setup
     とも値がちょうど2回ずつ出る種別×種別の2×2。
     2026-09-29 監査（vol2-l2b-r1.txt）を反映して本文を修正：
     ①区画の言い換え "open ground" は Plaza（広場）とも紛れるため
     "the grass" に直した。②セルの語 "tent" を削り、テントのみの区画は
     "a five-minute surface box handles it" とだけ述べる形にした。
     ③"Not equally, though." が直前の問い "so those two first?" と
     噛み合っていなかったため "Yes, but one before the other." に直した。
     ④供給業者の納品予定時刻 "nine" が Q55 の開場時刻の "nine" と
     紛れていたため "half past eight" に変更（Q54 の exp も合わせて
     直した）。⑤Q55 の「開場が1時間早まった」が選択肢とほぼ逐語だった
     ため、"nine tomorrow instead of ten" と具体的な時刻差にし、1時間の
     差は読み手の計算に委ねる形にした。⑥W-Cn（カナダ）のせりふが英式の
     "organisers" だったため "organizers" に直した。⑦why(Stall 27) の
     「男性がテントと言った」という書き方をやめ、行動（五分の簡易ボック
     スで後回しにする）の記述に直した。ja の「まだ舗装されていない」も
     "open ground" の誤訳だったため削った。vocab の「gate opening」は
     本文の言い換えで使わなくなったため削除した。
     自己試行（修正後）：表だけでは Area・Setup とも一意に絞れず1/4。
     音声だけでも「芝生／車両あり」の2条件だけでは対応する Stall 番号が
     分からず1/4（表と合わせて初めて Stall 12 に決まる）。本文に
     Lawn・Plaza・Food truck・Tent の語は一度も出てこない。
     Q54 の供給業者は男性側（接続ボックスなどの資材の取引先）で、出店者
     側の取引先ではない。Q55 は開場時刻の話に限定し、入口・舞台などの
     場所や Lawn/Plaza の言い換えには一切触れていない（申し送りどおり）。 */
  set({
    n: [53, 54, 55], lv: 3, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Weekend Street Food Festival — Stall Layout',
      head: ['Stall', 'Area', 'Setup'],
      rows: [
        ['Stall 12', 'Lawn', 'Food truck'],
        ['Stall 27', 'Lawn', 'Tent'],
        ['Stall 8', 'Plaza', 'Food truck'],
        ['Stall 19', 'Plaza', 'Tent'],
      ],
    },
    s: [
      { role: 'W-Cn', text: 'Morning! I know you\'ve got several stalls to wire up today — is there a plan for the order?' },
      { role: 'M-Br', text: 'There is. The ones on the grass need their cable trenched in before the landscaping crew rolls matting over that section, in about an hour.' },
      { role: 'W-Cn', text: 'Right, so those two first?' },
      { role: 'M-Br', text: 'Yes, but one before the other. The one with a vehicle on the pitch needs the cable run under the wheels and clipped clear, and that takes longer, so I\'ll do it first. The other just needs a five-minute surface box, and I\'ll fit that in before the crew arrives.' },
      { role: 'W-Cn', text: 'Understood. Anything you\'re still waiting on?' },
      { role: 'M-Br', text: 'Yes. My supplier was meant to drop off extra junction boxes by half past eight, and they still haven\'t shown up.' },
      { role: 'W-Cn', text: 'Do you have enough without them?' },
      { role: 'M-Br', text: 'Just about, for today.' },
      { role: 'W-Cn', text: 'Good. One more thing — the organizers are letting people in at nine tomorrow instead of ten, so everything needs to be live before that.' },
      { role: 'M-Br', text: 'Noted. That lines up with what I\'m already planning.' },
    ],
    ja: '出店の並ぶ催しの前日、運営スタッフの女性が、各出店区画への電源接続を請け負う男性の作業員に作業順を尋ねる。男性は、芝生の区画は造園チームが養生シートを敷く前に配線を終える必要があると説明する。さらにその2区画のうち、車両が乗り入れている区画は配線をタイヤの下に回して固定する必要があり時間がかかるため先に片付け、もう一方は五分で済む簡易ボックスで後回しにするという。続けて男性は、資材を納品するはずだった取引業者が8時半の約束にまだ来ていないと明かすが、今日のところは手持ちで足りるとのこと。女性は最後に、明日は予定の10時ではなく9時に開場することになったので、それまでに全区画を通電させておく必要があると伝える。',
    v: [['trench (a cable)', '（ケーブルを）溝を掘って埋設する'], ['matting', '養生シート・敷物'], ['junction box', '接続ボックス'], ['pitch', '（出店などの）区画・場所']],
    q: [
      { tag: '図表', qid: 'v2q53p', s: 'Look at the graphic. Which stall will the man go to first?',
        c: ['Stall 12', 'Stall 27', 'Stall 8', 'Stall 19'],
        a: 0,
        e: '男性は、芝生の区画は造園チームが養生シートを敷く前に配線を済ませる必要があると述べ、芝生の2区画（Stall 12・Stall 27）に絞られる。続けて、車両が乗り入れている区画は配線に時間がかかるため先に済ませ、もう一方は五分で済む簡易ボックスで対応すると述べており、最初に向かうのは芝生かつフードトラックの Stall 12 である。',
        w: ['正解。', 'Stall 27 も芝生の区画だが、男性は「もう一方は五分で済む簡易ボックスで対応する」と述べ、そちらは後回しにするとしている。', 'Stall 8 は舗装された区画（Plaza）にあり、男性が急ぐ理由に挙げた「養生シートを敷く前に済ませる」という条件に当てはまらない。', 'Stall 19 も舗装された区画（Plaza）にあり、養生シートを敷く前に済ませるという条件には当てはまらない。'] },
      { tag: '詳細', qid: 'v2q54p', t: ['p3detail'], s: 'What does the man mention about a supplier?',
        c: ['A supplier is running late.', 'A supplier changed an order.', 'A supplier requires cash payment.', 'A supplier raised its prices.'],
        a: 0,
        e: '男性は「資材の取引業者が8時半までに追加の接続ボックスを届ける予定だったが、まだ来ていない」と述べている。',
        w: ['正解。', '業者が発注内容を変更したという記述は会話のどこにも出てこない。', '業者が現金払いを求めているという記述は会話のどこにも出てこない。', '業者が値上げしたという記述は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v2q55p', t: ['p3detail'], s: 'What does the woman say about the festival?',
        c: ['The festival opens an hour early tomorrow.', 'The festival added a new entrance.', 'The festival hired extra security.', 'The festival moved its main stage.'],
        a: 0,
        e: '女性は「明日の開場時刻が予定の10時ではなく9時になる」と伝えており、1時間早まることを意味する。',
        w: ['正解。', '新しい入口が増設されたという記述は会話のどこにも出てこない。', '警備員を追加したという記述は会話のどこにも出てこない。', 'メインステージを移動したという記述は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 56–58 ────────────────────────────────────────── */
  /* 正解はくじ（56=A, 57=B, 58=C）。
     2026-09-29 監査を反映し、本文を全面的に書き直した：
     ①旧稿は Estate Red の話題（試飲の準備）のほうが機械修理の話題より
     長く、概要の正解の根拠として弱かったため、機械の修理（バネの交換・
     応急対応・復旧見込み）を厚くし、ワインの話題は単発の依頼1つに
     絞った。②Q57 の根拠 "three...grapes...into the same bottle" が
     選択肢の "three grape varieties" とほぼ逐語だったため、ぶどうの
     品種名（Cabernet・Merlot・Shiraz）を3つ列挙し、数える形の言い換え
     に直した。③正解を繰り返すだけだった男性の相槌
     "I still remember when we added the third grape…" を削った。
     ④"weekend tasting" と "tonight" が矛盾していたため、"tonight's
     tour group" に統一した。⑤Q58 の引用の直前に "Not at all."（訂正
     そのもの）を置いていたのをやめ、女性の「もう業者に連絡した？」と
     いう思い込みの質問のすぐ後に引用を置き、男性が発注の周期と手持ち
     の在庫でそれを正す形にした（"we've got plenty of springs in the
     drawer" が (D) の不足懸念も閉じる）。申し送りの「we はワイナリー
     （コルク・瓶などの資材の発注）」は "Parts go in with the corks and
     bottles" で守っている。
     自己試行：機械修理の話（約94語）が試飲がらみの依頼（約43語）より
     明確に長く、概要の正解として無理がない。Q57 は3品種名を数えて
     「3種類」と結ぶ言い換えになり、(A)(C)(D) は本文と両立しない
     （(C) は「セラーからケースを運んでおいて」で瓶詰めの在庫がある
     ことが分かり、樽熟成中とは言えない）。Q58 は直前の女性の質問の
     内容だけでくじの読みに決まる。英米の語法：W-Au（豪）の
     "rung"・"Fair enough"、M-Am（米）の "put in"。 */
  set({
    n: [56, 57, 58], lv: 4,
    s: [
      { role: 'M-Am', text: 'Morning. The capping head jammed again first thing. One of the springs inside has snapped, so I\'ve moved the line onto the backup unit while I strip the old head down and put in a spare.' },
      { role: 'W-Au', text: 'Good thinking. I suppose you\'ve already rung the supplier for a replacement?' },
      { role: 'M-Am', text: 'We usually order twice a year. Parts go in with the corks and bottles, and we\'ve got plenty of springs in the drawer.' },
      { role: 'W-Au', text: 'Fair enough. How long until the old head\'s back on the line?' },
      { role: 'M-Am', text: 'It should be running again by mid-afternoon.' },
      { role: 'W-Au', text: 'Great. Oh, and I\'m pouring the Estate Red for tonight\'s tour group — it\'s the one that blends Cabernet, Merlot and Shiraz — so could you bring a case up from the cellar before you finish?' },
      { role: 'M-Am', text: 'Sure, I\'ll grab one on my way back from the workshop.' },
    ],
    ja: 'ワインの充填ラインで、男性のスタッフがキャッピングヘッドのバネが1本折れたと女性の醸造責任者に報告し、予備ユニットに切り替えて古いヘッドの分解と交換部品の取り付けを進めていると伝える。女性が業者に交換部品の連絡はもう済ませたのかと尋ねると、男性は、通常年に2回まとめて発注しておりコルクや瓶と一緒に部品も届く仕組みで、引き出しにも予備のバネが十分あると答える。女性は納得し、古いヘッドがいつラインに戻るかを尋ね、男性は午後の半ばには動くはずだと答える。続けて女性は、今夜のツアー客向けに Estate Red を注ぐ予定だと伝え、それはカベルネ・メルロー・シラーズをブレンドしたワインだと説明したうえで、作業を終える前にセラーからケースを1つ運んでおいてほしいと頼む。男性は作業場から戻るついでに1つ持ってくると答える。',
    v: [['capping head', 'キャッピングヘッド（瓶にキャップを取り付ける装置）'], ['backup unit', '予備の装置'], ['strip (something) down', '（機械などを）分解する'], ['cellar', '貯蔵庫・セラー']],
    q: [
      { tag: '概要', qid: 'v2q56p', s: 'What are the speakers mainly discussing?',
        c: ['Repairs to a bottling machine', 'Preparations for a harvest event', 'Training for new tour guides', 'Designs for a wine label'],
        a: 0,
        e: '会話の中心はキャッピングヘッドのバネの破損と、その修理・応急対応（予備ユニットへの切替、部品の交換、復旧見込み）である。後半のワインの話題は、その日の別件の依頼にとどまる。',
        w: ['正解。', '収穫祭の準備についての記述は会話のどこにも出てこない。', '今夜のツアー客にワインを注ぐ話はあるが、新人ガイドの研修についての記述は会話のどこにも出てこない。', 'ワインラベルのデザインについての記述は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v2q57p', t: ['p3detail'], s: 'What does the woman say about the Estate Red?',
        c: ['It sold out quickly.', 'It uses three grape varieties.', 'It is still aging in barrels.', 'It costs more this year.'],
        a: 1,
        e: '女性は Estate Red について「カベルネ・メルロー・シラーズをブレンドしたワインだ」と述べており、3種類のぶどうを使っていることが分かる。',
        w: ['完売したという記述は会話のどこにも出てこない。', '正解。', '女性は「セラーからケースを運んでおいて」と頼んでおり、瓶詰めされた在庫があることが分かるため、樽でまだ熟成中だとは言えない。', '今年値上がりしたという記述は会話のどこにも出てこない。'] },
      { tag: '意図', qid: 'v2q58p', t: ['p3int'], s: 'Why does the man say, "We usually order twice a year"?',
        c: ['To turn down a proposed delivery plan.', 'To explain why some shelves look empty.', "To correct a colleague's assumption.", 'To express concern about running short.'],
        a: 2,
        e: '女性が「もう業者に交換部品の連絡をしたのでは」と尋ねたのに対し、男性は「通常は年2回まとめて発注しており、引き出しにも予備のバネが十分ある」と伝え、女性の思い込みを正している。',
        w: ['女性の発言は特定の配送方法の提案ではなく質問であり、男性はそれを断っているのではない。', '棚が空に見える理由についての記述は会話のどこにも出てこない。', '正解。', '男性は予備の部品を取り付けている最中で、「引き出しにも予備のバネが十分ある」と述べており、不足の懸念には当たらない。'] },
    ],
  }),

  /* ── 59–61 ────────────────────────────────────────── */
  /* 正解はくじ（59=A, 60=D, 61=D）。
     2026-09-29 監査を反映：①Q60 の "ten students" が選択肢と逐語だった
     ため、人数（10）はそのまま（言い換え不能）で対象の名詞だけ
     "children" に直した。②Q61 の why(A) が「申込用紙への記入という
     手順そのものが本文で否定されている」という誤った記述だった
     （"rather than through the front desk" が否定しているのは手続きの
     経路であって、用紙の有無ではない）ため、「まずコーディネーターと
     話す必要があり、女性自身も次の行動を電話と明言している。用紙が
     あるとしても、それは本人と話した後になる」という理屈に書き直した。
     ③M-Cn（カナダ）のせりふが英式の "ring her" だったため
     "her direct line" に直し、"ring" は W-Br（英国）のせりふに移した
     （"I'll give her a ring once I'm back at the office"）。
     このユニット唯一の明示的な閉じ方（Q61 の(A)）は、書き直した後も
     1問1本のまま。 */
  set({
    n: [59, 60, 61], lv: 3,
    s: [
      { role: 'W-Br', text: 'Hi, I saw a poster about your after-school programme. Is that suitable for a seven-year-old? I\'m asking on behalf of my son.' },
      { role: 'M-Cn', text: 'It is, actually. That\'s our Young Learners course, for ages six to nine.' },
      { role: 'W-Br', text: 'Good. What\'s the group size like? I\'d rather he wasn\'t just one of forty in a hall.' },
      { role: 'M-Cn', text: 'It\'s small by design. We cap it at ten children so the tutor can give everyone attention.' },
      { role: 'W-Br', text: 'That sounds perfect. Can I book him in today, or is there a form to fill out?' },
      { role: 'M-Cn', text: 'For this course specifically, the coordinator handles registrations directly rather than through the front desk, so you\'d need to speak with her before anything\'s confirmed.' },
      { role: 'W-Br', text: 'Oh, all right. Is she in now?' },
      { role: 'M-Cn', text: 'She\'s out until this afternoon, but I can give you her direct line.' },
      { role: 'W-Br', text: 'Lovely. I\'ll give her a ring once I\'m back at the office.' },
    ],
    ja: '女性が窓口を訪れ、掲示を見た放課後プログラムが7歳の息子に向くか尋ねる。スタッフの男性は、それが6〜9歳向けの Young Learners コースだと説明する。定員を尋ねられると、少人数制で子どもの数を10名までに抑えていると答える。女性がその場で申し込めるか尋ねると、このコースだけは受付ではなくコーディネーターが直接手続きを扱っており、確定の前に本人と話す必要があると説明する。コーディネーターは午後まで不在だが直通番号を教えてもらえるとのことで、女性はオフィスに戻ったら電話すると言う。',
    v: [['after-school (programme)', '放課後の（プログラム）'], ['cap (a number)', '（人数などを）上限に抑える'], ['coordinator', '担当調整者・コーディネーター'], ['registration', '登録・申し込み手続き']],
    q: [
      { tag: '概要', qid: 'v2q59p', s: 'What are the speakers mainly discussing?',
        c: ['A course for her young son', "A course for her retired father", "A course for her company's staff", 'A course for her own travels'],
        a: 0,
        e: '女性は「掲示にあった放課後プログラムは7歳の息子に向くか」と尋ねており、以降も息子向けのコースについてやり取りが続く。',
        w: ['正解。', '退職した父親向けのコースについての記述は会話のどこにも出てこない。', '会社のスタッフ向けのコースについての記述は会話のどこにも出てこない。', '女性自身の旅行のためのコースについての記述は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v2q60p', t: ['p3detail'], s: 'What does the man mention about the course?',
        c: ['It meets twice a week.', 'It includes an online component.', 'It has a placement test.', 'It enrolls up to ten students.'],
        a: 3,
        e: '男性は「少人数制で、子どもの数を10名までに抑えている」と述べている。',
        w: ['週2回開催という記述は会話のどこにも出てこない。', 'オンラインの要素が含まれるという記述は会話のどこにも出てこない。', 'プレースメントテストがあるという記述は会話のどこにも出てこない。', '正解。'] },
      { tag: '次の行動', qid: 'v2q61p', t: ['p3detail'], s: 'What will the woman most likely do next?',
        c: ['Complete a registration form.', 'Observe a sample class.', 'Take a brochure home.', 'Make a phone call.'],
        a: 3,
        e: '男性は「このコースは受付ではなくコーディネーターが直接手続きを扱っており、確定の前に本人と話す必要がある」と説明し、午後不在のコーディネーターの直通番号を教える。女性は「オフィスに戻ったら電話する」と述べている。',
        w: ['男性は「まずコーディネーターと話す必要がある」と述べ、女性自身も次に取る行動として電話をかけることを明言している。申込用紙への記入は、あるとしても本人と話した後になるため、次の行動には当たらない。', '体験授業を見学するという記述は会話のどこにも出てこない。', 'パンフレットを持ち帰るという記述は会話のどこにも出てこない。', '正解。'] },
    ],
  }),

  /* ── 62–64（3名）───────────────────────────────────── */
  /* 正解はくじ（62=D, 63=A, 64=C）。3人の会話。引用「We haven't heard
     back since Monday」は2人目の男性（M-Au）の発言で、もう1人の男性
     （M-Br）には Q63 の他の3択に当たる発言をさせていない。クライアント
     への言及は一切置いておらず、Q63(D) は言及なしで閉じる。Q64 は
     「部屋を取る」話を一切出していないため、Q64(A) との衝突も生じない。
     2026-09-29 監査を反映：①女性の最初の発言が「新しいデータ入力用
     ソフトへの切り替え」「先月分の回答を読み込めたか」の2文に分かれて
     いたため、"how's the move to the new program for keying in last
     month's responses going?" の1文に統合した（Q62 の選択肢との逐語も
     緩和）。②時刻が出ていないのに "later" と言っていたのを "longer"
     に直した。③M-Br の相槌 "my part's ready to go too" の "too" が
     受け先（もう1人が準備できていない）を欠いていたため、
     "my side's all set to go as soon as the mapping's confirmed" に
     直した。④Q62 の why(A) に、"responses" の語が誘う (A) との違い
     （回収率ではなく入力の話であること）を明記した。 */
  set({
    n: [62, 63, 64], lv: 4, k: 'conversation with three speakers',
    s: [
      { role: 'W-Am', text: 'Before the call this afternoon: how\'s the move to the new program for keying in last month\'s responses going?' },
      { role: 'M-Br', text: 'I ran a couple of test rows through it yesterday, and the formatting held up fine on the ones I tried.' },
      { role: 'M-Au', text: 'The trouble\'s on my side. We can\'t load the full batch until the vendor confirms the field names will map over correctly. We haven\'t heard back since Monday.' },
      { role: 'W-Am', text: 'That\'s longer than I\'d hoped.' },
      { role: 'M-Br', text: 'For what it\'s worth, my side\'s all set to go as soon as the mapping\'s confirmed.' },
      { role: 'W-Am', text: 'Alright, I\'ll chase the vendor myself instead of waiting any longer. I\'ll send them a note today and copy you both so we\'ve got it on record.' },
    ],
    ja: '調査の回答入力を担当するチームで、プロジェクト担当の女性が、男性の同僚2名に、先月分の回答をシステムに入力するための新しい仕組みへの切り替え状況を尋ねる。1人目の男性は昨日いくつか試しに読み込ませてみたところ書式は問題なかったと答える。2人目の男性は、項目名が正しく対応するとベンダーから確認が取れるまで全件は読み込めないと説明し、月曜日以来ベンダーから連絡が来ていないと述べる。女性は思ったより長引いていると受け止め、1人目の男性は自分の作業はマッピングが確認され次第いつでも進められると付け加える。女性は自分でベンダーに連絡を取ることにし、今日中に先方へメールを送り、2人にも共有すると伝える。',
    v: [['key in (data)', 'データを入力する'], ['map over', '（データの項目などが）正しく対応する'], ['batch', '一括分・まとめて処理する単位'], ['chase (someone)', '（連絡や返答を）催促する']],
    q: [
      { tag: '詳細', qid: 'v2q62p', s: 'What does the woman ask the men about?',
        c: ['The response rate for a survey', 'The software for data entry', 'The budget for a focus group', 'The timeline for a client report'],
        a: 1,
        e: '女性は「先月分の回答をシステムに入力するための新しい仕組みへの移行はどうなっているか」と尋ねている。',
        w: ['アンケートの回収率（何件集まったか）についての言及ではなく、集まった回答をシステムに入力する話であり、回収率そのものは会話のどこにも出てこない。', '正解。', 'フォーカスグループの予算についての記述は会話のどこにも出てこない。', 'クライアント向け報告書の納期についての記述は会話のどこにも出てこない。'] },
      { tag: '意図', qid: 'v2q63p', t: ['p3int'], s: 'Why does one of the men say, "We haven\'t heard back since Monday"?',
        c: ['To explain a delay in starting a task.', 'To correct an assumption the woman made.', 'To object to a proposed next step.', 'To agree with a concern about a client.'],
        a: 0,
        e: '2人目の男性は「項目名の対応をベンダーが確認するまで全件は読み込めない」と述べたうえで、その確認の連絡が月曜日以来来ていないと続けており、作業に着手できていない理由を説明している。',
        w: ['正解。', '女性が何かを誤って思い込んでいたという記述は会話のどこにも出てこない。', '何らかの提案に反対しているという記述は会話のどこにも出てこない。', 'クライアントへの懸念についての記述は会話のどこにも出てこない。'] },
      { tag: '次の行動', qid: 'v2q64p', s: 'What will the woman most likely do next?',
        c: ['Book a meeting room.', 'Draft a follow-up e-mail.', 'Update a project timeline.', 'Review some survey results.'],
        a: 1,
        e: '女性は「自分でベンダーに連絡を取ることにし、今日中に先方へメールを送り、2人にも共有する」と述べている。',
        w: ['会議室を予約するという記述は会話のどこにも出てこない。', '正解。', 'プロジェクトの予定表を更新するという記述は会話のどこにも出てこない。', 'アンケート結果を確認するという記述は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 65–67（図表）────────────────────────────────── */
  /* 正解はくじ（65=B=Route 6, 66=C, 67=D）。表（Route/Neighborhood/
     Vehicle）は凍結。
     2026-09-29 監査で致命的2件（65・66）が指摘され、本文を全面的に
     書き直した：①旧稿は男性が波止場側と事務所側の**両方**の便を担当
     する内容になっており、Q65「which route」に対し Route 6 と
     Route 22 の両方が成立していた。新稿は "Everything on my sheet
     today is along the waterfront" と、今日1日はその1区域だけを担当
     すると明言する形にした。②旧稿の "the covered van run for the
     office side" が Route 22 の2属性（Van・Uptown）を1文かつセルの語
     で言っており、Van・Uptown の便への言及ごと削った。③"open-bed" の
     "bed" に紛れが残る懸念から "open-deck" に直し、"truck" の語も
     削った。④Q66 の引用（"The customer called twice this morning."）
     の意味が直後の文（配達順の変更）でしか決まらず、(A)（配達時刻の
     変更）が成立していたため、直前に男性の「出る前にコーヒーを飲んで
     いく」という発言を置き、引用の直後も「コーヒーは後でいい」という
     応答に変え、"急いで出発を" の読みだけがその場で決まるようにした。
     倉庫の閉店時刻の変更（4時・6時）はその後の別件として独立させ、
     Q66 の読みに影響しないようにした。⑤Q67 の「変更」の中身を、男性
     自身の既定の予定ではなく倉庫の閉店時刻という本物の変更にし、
     "loading list" と紛れる語（list・loading）は本文から削って
     "run sheet" に限定した。
     自己試行：表だけでは Vehicle・Neighborhood とも一意に絞れず1/4。
     音声だけでも「開放型の荷台の車／水辺」の2条件だけでは対応する
     Route 番号が分からず1/4。本文に Riverside・Uptown・Van・truck・
     Route番号は一度も出てこない。Q66 は直前・直後の文脈だけで読みが
     決まり、Q67 の正解（倉庫の閉店時刻の変更）と矛盾しない。
     2026-09-29 第2巡監査を反映：①exp・why(C)(D)・ja・vocab・この
     コメントの「川沿い沿い」（本文の waterfront を先取りした訳）を
     「水辺（沿い）」に直した——waterfront と Riverside を結ぶのは解き手
     の仕事であり、訳が先に答えを書いていた。②Q66 の why(B)「異議を
     唱えている記述は無い」だけでは根拠が弱いと指摘されたため、男性の
     直前の発言が争える主張を含まないこと・女性がその内容を否定も訂正
     もしていないことを名指しする書き方に直した。③Q67 の why(B)(C) の
     「言及なし」に、男性が実際に書き込む内容（倉庫の閉まる時刻の変更）
     と書き込む先（run sheet）を明記し、マニフェスト・積み込みリストとの
     違いを言えるようにした。④S1 を "The two glass-top tables for your
     first drop-off are…" に変え、"The customer" の先行詞（冒頭のテーブル
     の注文主）を明確にした（語数 111→113）。5通りで試し、新しい抜け道
     が無いことを確認した——本文なし／表だけ／他の設問込み／常識だけ／
     誤答の矛盾箇所の引用のいずれでも、Q65〜67 の答え・閉じ方は変わらない
     （"first" は配達の順で、表に順序の列は無いため行を指さない）。 */
  set({
    n: [65, 66, 67], lv: 4, t: ['graphic'],
    graphic: {
      t: 'table', title: "Today's Delivery Routes",
      head: ['Route', 'Neighborhood', 'Vehicle'],
      rows: [
        ['Route 14', 'Riverside', 'Van'],
        ['Route 6', 'Riverside', 'Flatbed truck'],
        ['Route 22', 'Uptown', 'Van'],
        ['Route 9', 'Uptown', 'Flatbed truck'],
      ],
    },
    s: [
      { role: 'W-Cn', text: 'Morning! The two glass-top tables for your first drop-off are wrapped and waiting by the back door.' },
      { role: 'M-Au', text: 'No worries. I\'m driving the open-deck one today, so they can ride on the back with the sofas.' },
      { role: 'W-Cn', text: 'Perfect. And which part of town are you covering this morning?' },
      { role: 'M-Au', text: 'Everything on my sheet today is along the waterfront. I\'ll just grab a quick coffee before I head off.' },
      { role: 'W-Cn', text: 'The customer called twice this morning.' },
      { role: 'M-Au', text: 'Ah. Point taken — the coffee can wait.' },
      { role: 'W-Cn', text: 'Oh, and the depot\'s closing at four today instead of six, for the inventory count. Make sure you\'re back before then.' },
      { role: 'M-Au', text: 'Right, I\'ll pop that on my run sheet now, and then I\'m off.' },
    ],
    ja: 'ショールームで、女性のスタッフが、男性の配送ドライバーに、最初の配達先に届ける、包装済みのガラス天板テーブル2台が裏口で待っていると伝える。男性は今日は開放型の荷台の車に乗るので、ソファと一緒に載せられると答える。女性が今朝はどの地区を担当するのか尋ねると、男性は今日の配達はすべて水辺沿いの地区だと言い、出発前にコーヒーだけ飲んでいくと言う。女性が、その顧客から今朝すでに2回電話があったと伝えると、男性はコーヒーを後回しにすると応じる。さらに女性は、在庫確認のため倉庫の閉店時刻が今日はいつもの6時ではなく4時に変わったので、それまでに戻るよう念を押し、男性はその変更を自分のルート表に書き留めて出発すると答える。',
    v: [['open-deck (vehicle)', '荷台がむき出しの車両（＝フラットベッド）'], ['waterfront', '水辺（川・海などに面した地区）'], ['depot', '営業所・車庫'], ['run sheet', '配送順を記した日報・ルート表']],
    q: [
      { tag: '図表', qid: 'v2q65p', s: 'Look at the graphic. Which route will the man take?',
        c: ['Route 14', 'Route 6', 'Route 22', 'Route 9'],
        a: 1,
        e: '男性は「今日は開放型の荷台の車に乗る」と述べ、Vehicle が Flatbed truck の便に絞られる。続けて「今日の配達はすべて水辺（waterfront）沿いだ」と述べ、Neighborhood が川沿いの Riverside の便に絞られる。したがって、Flatbed truck かつ Riverside の Route 6 が該当する。',
        w: ['Route 14 は Riverside だが Vehicle が Van であり、男性が今日使っているのは開放型の荷台の車である。', '正解。', 'Route 22 は Vehicle が Van で、Neighborhood も Uptown であり、男性が「今日の配達はすべて水辺沿いだ」と述べた内容とも一致しない。', 'Route 9 は Vehicle が Flatbed truck だが Neighborhood が Uptown であり、男性が今日担当すると述べた水辺の区域とは一致しない。'] },
      { tag: '意図', qid: 'v2q66p', t: ['p3int'], s: 'Why does the woman say, "The customer called twice this morning"?',
        c: ['To explain a change to a delivery time.', 'To dispute something the man said.', 'To urge the man to leave soon.', 'To decline a request to postpone a stop.'],
        a: 2,
        e: '男性が「出る前にコーヒーだけ飲んでいく」と言った直後に、女性が「その顧客から今朝2回電話があった」と伝えており、コーヒーを飲んでいる余裕なく早く出発するよう促している。男性も直後に「分かった、コーヒーは後でいい」と応じている。',
        w: ['配達時刻の変更についての記述は、この発言の前後のどこにも出てこない（後で話題になる倉庫の閉店時刻の変更とは別の話である）。', '男性の直前の発言 "I\'ll just grab a quick coffee before I head off." は自分がこれからすることを述べたもので、正しい・誤りを争える主張を含まない。女性はその内容を否定も訂正もしておらず（コーヒーには触れていない）、顧客から2回電話があったという事実を伝えているだけで、男性も "Point taken" と受け入れている。この発言の働きは出発を促すことで、男性の言ったことの正しさを争うことではない。', '正解。', '配達の延期を頼まれてそれを断っているという記述は会話のどこにも出てこない。'] },
      { tag: '次の行動', qid: 'v2q67p', t: ['p3detail'], s: 'What will the man most likely do next?',
        c: ['Call a customer directly.', 'Check a delivery manifest.', 'Update a loading list.', 'Note a schedule change.'],
        a: 3,
        e: '男性は、倉庫の閉店時刻が今日はいつもの6時ではなく4時に変わり、在庫確認のためそれまでに戻る必要があると伝えられ、「今、それを自分のルート表に書き留める」と応じている。',
        w: ['顧客に直接電話をかけるという記述は会話のどこにも出てこない。', '男性が次にするのは "I\'ll pop that on my run sheet now" と、倉庫の閉まる時刻の変更を自分のルート表に書き込むことであり、書類の中身を確かめることではない。配送マニフェストを確認するという発言も無い。', '男性が書き込むのは "the depot\'s closing at four today instead of six" という倉庫の閉まる時刻の変更であり、何を積むかの変更は会話に出てこない。書き込む先も、配達の予定を記したルート表（run sheet）である。', '正解。'] },
    ],
  }),

  /* ── 68–70（図表）────────────────────────────────── */
  /* 正解はくじ（68=C=Wall D, 69=D, 70=C）。表（Wall/Section/Medium）は
     凍結。
     2026-09-29 監査で致命的1件（68）が指摘され、本文を全面的に書き
     直した：①旧稿は区画（North Gallery / South Gallery）を「正面入口
     に近い側／カフェ寄り」と言い換えていたが、どちらが入口寄りかは
     音声にも表にも無い作り話で、区画の手がかりが実質的に存在しなかった。
     新稿は建物の南側／北側という方角そのもの（表は凍結のため方角の対
     を言い換える手段が無く、派生形 "southern" を使うことをメインが
     承認〈2026-09-29〉）で「南側の部屋」と直接示す形にした。②区画を
     示す唯一の手がかりだった "the large seascape going up on the
     north wall"（セルの語 north を含むうえ、別の設問〈Q69〉の情報に
     頼る経路になっていた）を削り、その海景画は「今日新しく掛ける
     作品」とだけ述べる形にした。③最上級 "furthest from the main
     entrance" を削った。④Q69 の "belongs to a private collector" が
     選択肢と逐語だったため "on loan from a private collection" に
     直した。⑤Q70 の "a short talk" が選択肢と逐語だったため
     "say a few words" に直した。
     自己試行：表だけでは Section・Medium とも一意に絞れず1/4。音声
     だけでも「南側／油彩」の2条件だけでは対応する Wall の記号が
     分からず1/4。本文に North・South・Gallery・Paintings・
     Photographs の語は一度も出てこない（"southern" のみ、表の
     "South" の派生形としての使用をメインが承認済み）。Q69 で言及する
     作品（今日新しく掛ける海景画）は、残る壁（南側の油彩）とは別の
     作品にしている（申し送りどおり）。
     level の見立てを4→3に下げた（southern が方角の直接的な言い換え
     で、oils⇔Paintings も易しいため）。 */
  set({
    n: [68, 69, 70], lv: 3, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Gallery Rehang — Wall Assignments',
      head: ['Wall', 'Section', 'Medium'],
      rows: [
        ['Wall C', 'North Gallery', 'Paintings'],
        ['Wall H', 'North Gallery', 'Photographs'],
        ['Wall D', 'South Gallery', 'Paintings'],
        ['Wall K', 'South Gallery', 'Photographs'],
      ],
    },
    s: [
      { role: 'W-Am', text: 'Right, we\'re rehanging almost everything today. Only one wall stays as it is.' },
      { role: 'M-Cn', text: 'Which one\'s staying?' },
      { role: 'W-Am', text: 'It\'s in the room at the southern end of the building. Leave the oils in there exactly where they are. Every other wall is getting new work.' },
      { role: 'M-Cn', text: 'Understood. One heads-up on the new arrangement, then: the large seascape we\'re putting up today is on loan from a private collection, so we\'ll need the extra padding when we hang it.' },
      { role: 'W-Am', text: 'Noted. I\'ll make sure the handling team knows before anyone touches it. Also, the artist has agreed to say a few words at the opening, just before we let the public in.' },
      { role: 'M-Cn', text: 'Great, I\'ll set out some chairs near the entrance for that.' },
    ],
    ja: '展示替えが行われる日、女性のキュレーターが、今日はほぼ全ての壁を掛け替えるが1面だけはそのまま残すと男性の作業担当者に伝える。残すのは建物の南側の部屋にある油彩で、他のすべての壁は新しい作品に替わるという。男性は了承し、新しい配置についての注意点として、今日新しく掛ける大きな海景画が個人のコレクションからの貸与品であり、扱いに追加の保護材が必要だと伝える。女性はその点を作業チームに周知すると答え、あわせて作家が一般公開の直前にひとこと挨拶することになったと伝える。男性は入口付近に椅子を用意すると応じる。',
    v: [['rehang', '展示のかけ替え・展示替え'], ['on loan (from ~)', '（～から）貸与されている'], ['collection', '（美術品などの）コレクション・収集品'], ['say a few words', 'ひとこと挨拶する']],
    q: [
      { tag: '図表', qid: 'v2q68p', s: 'Look at the graphic. Which wall will be left as it is?',
        c: ['Wall C', 'Wall H', 'Wall D', 'Wall K'],
        a: 2,
        e: '女性は「そのまま残す壁は建物の南側の部屋にある」と述べ、Section が South Gallery の2面（Wall D・Wall K）に絞られる。続けて「そこにある油彩はそのまま残す」と述べ、Medium が Paintings の面に絞られるため、該当するのは Wall D である。',
        w: ['Wall C は Paintings（絵画）だが North Gallery（建物の北側）にあり、女性が残すと述べた「南側の部屋」とは一致しない。', 'Wall H は North Gallery（建物の北側）にあり、しかも Photographs（写真）であるため、油彩を残すという条件にも一致しない。', '正解。', 'Wall K は South Gallery（建物の南側）にあるが Photographs（写真）であり、女性が残すと述べた油彩とは一致しない。'] },
      { tag: '詳細', qid: 'v2q69p', t: ['p3detail'], s: 'What does the man mention about a piece?',
        c: ['A piece needs a new frame.', 'A piece belongs to a collector.', 'A piece requires special lighting.', 'A piece is heavier than expected.'],
        a: 1,
        e: '男性は「今日新しく掛ける大きな海景画は個人のコレクションからの貸与品だ」と述べている。',
        w: ['額装をやり直す必要があるという記述は会話のどこにも出てこない。', '正解。', '特別な照明が必要だという記述は会話のどこにも出てこない。', '大きいとは述べているが、想定より重いという記述は会話のどこにも出てこない（詰め物が必要な理由として述べられているのは貸与品だからという点である）。'] },
      { tag: '詳細', qid: 'v2q70p', t: ['p3detail'], s: 'What does the woman say about the opening?',
        c: ['The opening reception starts at six.', 'The opening moved to next week.', 'The opening will include a short talk.', 'The opening requires an RSVP.'],
        a: 2,
        e: '女性は「作家が一般公開の直前にひとこと挨拶する」と述べている。',
        w: ['開始時刻が6時だという記述は会話のどこにも出てこない。', '来週に延期したという記述は会話のどこにも出てこない。', '正解。', 'RSVP（出欠確認）が必要だという記述は会話のどこにも出てこない。'] },
    ],
  }),

];
