/* =============================================================
   予想模試 Vol.4 — Part 3 前半（No.32–52）
   ============================================================= */

/* 2026-09-29 先読み対策（設問先行・正解はくじ）で全7ユニットを書き直し。
   `sid` / `qid` は id の明示指定。中身を差し替えたユニット・設問は
   SRS の履歴を引き継がせないため、通し番号由来の既定 id ではなく
   新しい id（v4q32p 等）を与える（`no` は 1〜200 の連番なので絶対に変えない）。 */
const set = (o) => ({
  id: o.sid || `v4-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v4q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2A = [

  /* ── 32–34（3名）─────────────────────────────────── */
  /* 申し送り：Q32 の引用「The fair opens at eleven.」はここで初めて出す（それより前に
     誰も開場時刻を言わない）。引用は単独の1文で、その直前の M-Cn の発言は
     「機材班が8時着で、客の前に配線を終えられるか」の心配のみ。引用の直前に答えを置かない。
     引用者（M-Br）以外の男性（M-Cn）には Q32 の他の3択に当たる話をさせていない。
     Q33 のスタンド位置・Q34 のバナー発注は、それぞれ1か所・1件だけを述べ、
     他の選択肢の場所・行動には一切触れていない。 */
  set({
    n: [32, 33, 34], lv: 4, t: ['p3int'], k: 'conversation with three speakers',
    s: [
      { role: 'W-Am', text: 'Right, let\'s run through Saturday\'s plan for the live broadcast from the fairground.' },
      { role: 'M-Cn', text: 'Sure — I just want to check the timing. The crew can\'t get there until eight, and I\'d hate to be running cables with crowds pushing past us.' },
      { role: 'M-Br', text: 'The fair opens at eleven.' },
      { role: 'M-Cn', text: 'Oh, perfect.' },
      { role: 'W-Am', text: 'One more thing — the stand\'s moved this year. It\'ll be right alongside the stage where the headline acts play, instead of off in the corner where it usually sits.' },
      { role: 'M-Br', text: 'That\'s a better spot anyway, more foot traffic.' },
      { role: 'W-Am', text: 'Actually, looking at our banners now, they\'re pretty faded from last year. I\'ll put an order in for replacements this afternoon before I forget.' },
      { role: 'M-Cn', text: 'Good idea.' },
    ],
    ja: 'ラジオ局の3人が、土曜日に祭りの会場から行う生放送の準備を確認している。カナダ人の男性が、機材班が8時にならないと現地に着けないため、客が押し寄せる前に配線を終えられるか心配を口にすると、イギリス人の男性が祭りは11時に開くと答える。女性は、局のスタンドが今年はいつもの隅ではなく、有名な出演者が登場するステージのすぐ脇に移ったことを伝える。さらに、去年のバナーが色あせていることに気づき、今日の午後、忘れないうちに交換用を注文すると述べる。',
    v: [['fairground', '祭りの会場、催し物広場'], ['run cables', '配線する'], ['headline act', '目玉の出演者'], ['foot traffic', '人通り'], ['faded', '色あせた']],
    q: [
      { tag: '意図', qid: 'v4q32p', s: 'What does one of the men mean when he says, "The fair opens at eleven"?',
        c: ['He is questioning the timing of an interview.', 'He is reassuring a colleague about setup time.', 'He is explaining a change to the broadcast schedule.', 'He is agreeing to cover an early shift.'],
        a: 1,
        e: 'カナダ人の男性が "The crew can\'t get there until eight, and I\'d hate to be running cables with crowds pushing past us." と、人混みの前に配線を終えられるかを心配している。これに対しイギリス人の男性が "The fair opens at eleven." と開場時刻を告げ、開場まで人が来ないことを示して、設営に使える時間について安心させている。',
        w: ['インタビューの時刻についての言及は会話のどこにも出てこない。', '正解。', '放送予定の変更についての言及は会話のどこにも出てこない。', '早番を引き受ける話は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v4q33p', t: ['p3detail'], s: 'According to the woman, where will the station\'s stand be?',
        c: ['Next to the main stage', 'Beside the car park entrance', 'Near the children\'s play area', 'Opposite the row of food tents'],
        a: 0,
        e: '女性が "It\'ll be right alongside the stage where the headline acts play, instead of off in the corner where it usually sits." と、今年のスタンドの位置を、有名な出演者が登場するステージ(メインステージ)のすぐ脇だと述べている。',
        w: ['正解。', '駐車場の入口についての言及は会話のどこにも出てこない。', '子供の遊び場についての言及は会話のどこにも出てこない。', '飲食テントの列についての言及は会話のどこにも出てこない。'] },
      { tag: '次の行動', qid: 'v4q34p', t: ['p3detail'], s: 'What will the woman most likely do next?',
        c: ['Phone the fair\'s organizers', 'Update the station\'s website', 'Order some new banners', 'Print a list of equipment'],
        a: 2,
        e: '女性は最後に "I\'ll put an order in for replacements this afternoon before I forget." と、色あせた古いバナーの交換用を注文すると述べている。',
        w: ['主催者へ電話するという話は会話のどこにも出てこない。', 'ウェブサイトの更新については会話のどこにも出てこない。', '正解。', '備品リストの印刷については会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 35–37 ─────────────────────────────────────────── */
  /* 申し送り：Q35 の「まだ買う必要がある品」はキャンバスのロール1つだけ。
     ほかの品には名指しで触れない（most of it sorted）。
     Q36 の品切れ品（鉛筆のスタイル）は Q35 の4択のどれとも別の品。
     Q37 は会話の直後の行動（入荷予定の確認）1つだけにし、他の3択は予告していない。 */
  set({
    n: [35, 36, 37], lv: 3,
    s: [
      { role: 'W-Br', text: 'Hi — I\'m putting together supplies for the six-week painting course I run on Tuesdays. I\'ve got most of it sorted, but I still need a roll of canvas so I can stretch it over the frames myself.' },
      { role: 'M-Am', text: 'Sure, we keep a few widths of that in the back. What size are your frames, roughly?' },
      { role: 'W-Br', text: 'Mostly forty by fifty centimetres. Oh, and one of my students asked about a particular set of drawing pencils — the woodless kind that come in a little tin.' },
      { role: 'M-Am', text: 'Those are actually out of stock right now. We sold the last tin over the weekend, and the new order hasn\'t come in yet.' },
      { role: 'W-Br', text: 'That\'s a shame. Any idea when they\'ll be back in?' },
      { role: 'M-Am', text: 'Let me pull up what\'s due in from the supplier — I think there\'s a shipment sometime this week, but I don\'t want to promise a date until I\'ve confirmed it.' },
      { role: 'W-Br', text: 'No worries, take your time.' },
    ],
    ja: '画材店で、絵画講座の準備をしている女性客が男性の店員に相談している。ほとんどの材料は揃ったが、フレームに自分で張るためのキャンバスのロールがまだ必要だという。また、受講者から頼まれた特定の木軸のない鉛筆のセットについて尋ねると、そのセットは週末に売り切れ、次の入荷もまだだと言われる。女性ががっかりすると、男性は日付を約束する前に、仕入先から何が入荷予定か調べると答える。',
    v: [['canvas', 'キャンバス(画布)'], ['stretch (over a frame)', '(フレームに)張る'], ['woodless', '木軸のない(芯だけの)'], ['due in', '入荷予定の']],
    q: [
      { tag: '詳細', qid: 'v4q35p', s: 'What does the woman say she still needs to buy?',
        c: ['A set of watercolor brushes', 'A pad of heavy paper', 'A box of pastel sticks', 'A roll of canvas fabric'],
        a: 3,
        e: '女性は "I still need a roll of canvas so I can stretch it over the frames myself." と述べ、自分でフレームに張るためのキャンバスのロールがまだ必要だと言っている。ほかの材料については "I\'ve got most of it sorted" と、ほぼ揃っているとしか述べていない。',
        w: ['筆についての言及は会話のどこにも出てこない。', '画用紙のパッドについての言及は会話のどこにも出てこない。', 'パステルの棒についての言及は会話のどこにも出てこない。', '正解。'] },
      { tag: '詳細', qid: 'v4q36p', s: 'What does the man say is currently out of stock?',
        c: ['A certain shade of blue paint', 'A particular size of easel', 'A specific brand of palette knife', 'A certain style of drawing pencil'],
        a: 3,
        e: '店員の男性は "Those are actually out of stock right now." と、woodless の鉛筆のセット(the woodless kind that come in a little tin)が現在品切れだと述べている。',
        w: ['青い絵の具の色番については会話のどこにも出てこない。', 'イーゼルのサイズについての言及は会話のどこにも出てこない。', 'パレットナイフについての言及は会話のどこにも出てこない。', '正解。'] },
      { tag: '次の行動', qid: 'v4q37p', s: 'What will the man most likely do next?',
        c: ['Check a delivery schedule', 'Unlock a glass display case', 'Register her for a discount card', 'Carry her items to the counter'],
        a: 0,
        e: '男性は最後に "Let me pull up what\'s due in from the supplier" と述べ、鉛筆の入荷時期を確認するために、仕入先からの入荷予定(配送予定)を調べると言っている。',
        w: ['正解。', 'ガラスケースの鍵を開ける話は会話のどこにも出てこない。', '割引カードの登録については会話のどこにも出てこない。', '品物をカウンターへ運ぶ話は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 38–40（図表）───────────────────────────────── */
  /* 申し送り：表のセルの語（narrow・wide・ribbon・feather）と列名（brim・trim）、
     Stand の番号は本文で使っていない（語幹も避けた）。つばの広さと飾りは別々の発話で言い換えて伝え、
     どちらも肯定形の言い換え（a small, neat edge／a silk band around the crown）だけで
     伝え、否定で行を消さない。指定はスタイリストのものとし、用途からスタイルを
     推理できないようにした。Q40 は女性の「このあと上の事務所へ戻る」という1つの手がかりだけで
     ふだんの持ち場を示し、他の3択（作業場・他店舗・市場の屋台）には触れていない。 */
  set({
    n: [38, 39, 40], lv: 4, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Hat Stands in the Back Room',
      head: ['Stand', 'Brim', 'Trim'],
      rows: [
        ['Stand 21', 'Narrow', 'Ribbon'],
        ['Stand 29', 'Wide', 'Ribbon'],
        ['Stand 16', 'Narrow', 'Feather'],
        ['Stand 25', 'Wide', 'Feather'],
      ],
    },
    s: [
      { role: 'M-Au', text: 'Before the client arrives this afternoon, we should get her hat out from the back room so it\'s ready for her to try on.' },
      { role: 'W-Au', text: 'Sure — did the details come through from the stylist?' },
      { role: 'M-Au', text: 'Yes, this morning. The client\'s being photographed for a magazine feature this weekend, and the stylist wants the one with just a small, neat edge around it, so it sits close to the head.' },
      { role: 'W-Au', text: 'And on top?' },
      { role: 'M-Au', text: 'A silk band around the crown. The stylist was very specific about that.' },
      { role: 'W-Au', text: 'Right, I know the one. I\'ll bring it out — I\'m heading back up to the office afterwards anyway, so I\'ll drop it at the till on my way.' },
      { role: 'M-Au', text: 'Thanks, I\'ll finish tidying down here.' },
    ],
    ja: '帽子店の2人の従業員が、午後に来店する客のために、奥の部屋から帽子を出す準備をしている。男性によると、客は今週末に雑誌の特集で撮影される予定で、スタイリストは縁が小さく整っていて頭に沿う帽子を指定している。飾りも、山の部分にシルクの帯が巻かれたものをスタイリストが指定したという。女性は該当する帽子を持っていくことにし、そのあとは上の事務所へ戻るので、ついでにレジへ寄ると述べる。',
    v: [['stylist', 'スタイリスト'], ['feature', '(雑誌の)特集記事'], ['crown', '(帽子の)山の部分'], ['till', 'レジ']],
    q: [
      { tag: '図表', qid: 'v4q38p', s: 'Look at the graphic. Which stand will the woman bring out?',
        c: ['Stand 21', 'Stand 29', 'Stand 16', 'Stand 25'],
        a: 0,
        e: '男性は、スタイリストの指定として "the stylist wants the one with just a small, neat edge around it, so it sits close to the head" とつばが狭いスタイルを、続けて "A silk band around the crown." とシルクの帯(リボン)の飾りを伝えている。表でつばが狭くリボン飾りなのは Stand 21 だけである。',
        w: ['正解。', 'Stand 29 はつばが広いスタイルで、男性が伝えたスタイリストの指定「縁が小さく整っていて頭に沿うもの」という条件に合わない。', 'Stand 16 はつばは狭いが飾りが羽根で、男性が伝えたスタイリストの指定「山の部分にシルクの帯」という条件に合わない。', 'Stand 25 はつばが広く飾りも羽根で、どちらの条件にも合わない。'] },
      { tag: '詳細', qid: 'v4q39p', t: ['p3detail'], s: 'What does the man say the customer needs the hat for?',
        c: ['A day at the horse races', 'A wedding held outdoors', 'A themed costume party', 'A magazine photo shoot'],
        a: 3,
        e: '男性は "The client\'s being photographed for a magazine feature this weekend" と、客が今週末、雑誌の特集で撮影されるためだと述べている。',
        w: ['競馬観戦についての言及は会話のどこにも出てこない。', '屋外の結婚式についての言及は会話のどこにも出てこない。', '仮装パーティーについての言及は会話のどこにも出てこない。', '正解。'] },
      { tag: '推測', qid: 'v4q40p', t: ['p3detail'], s: 'What is suggested about the woman?',
        c: ['She normally works in the workroom.', 'She normally works at another branch.', 'She normally works in the office upstairs.', 'She normally works at the shop\'s market stall.'],
        a: 2,
        e: '女性は最後に "I\'m heading back up to the office afterwards anyway, so I\'ll drop it at the till on my way." と述べており、この作業のあとは上の事務所へ戻ると言っていることから、ふだんは上の事務所で働いていることがうかがえる。',
        w: ['作業場(workroom)についての言及は会話のどこにも出てこない。女性はこの作業のあと "heading back up to the office" と、上の事務所へ戻ると言っている。', '他の支店についての言及は会話のどこにも出てこない。', '正解。', '市場の屋台についての言及は会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 41–43（3名）─────────────────────────────────── */
  /* 申し送り：Q42 の引用「Nobody could log in on Sunday.」はここで初めて出す。
     直前は女性の「男性の確認結果がまだ届いていない」という指摘のみで、志願者の延長願い・
     志願者の申し立て・週末の件数といった他の3択の話題は混ぜていない。
     Q41 の欠落書類と Q42/Q43 の applicant は、会話全体を通して同じ1件の
     出願書類だけを扱うことで同一人物にしている。Q43 は会話の直後の行動
     （別部署への転送）1つだけにし、「追いついたら」などの先送りを置かない。 */
  set({
    n: [41, 42, 43], lv: 4, t: ['p3int'], k: 'conversation with three speakers',
    s: [
      { role: 'W-Am', text: 'Before we shortlist this one, there\'s a gap in the file. Everything else looks really strong, but I can\'t find a current English proficiency result anywhere.' },
      { role: 'W-Au', text: 'That\'s odd — the document checks should have picked that up before it reached us. Your check results normally land in our inbox first thing Monday, but nothing\'s come through yet.' },
      { role: 'M-Br', text: 'Nobody could log in on Sunday.' },
      { role: 'W-Am', text: 'Ah, of course — that was the maintenance weekend, wasn\'t it?' },
      { role: 'M-Br', text: 'Anyway, I\'ll take this file and pass it straight along to International Admissions myself — they handle the language test verification, so it\'ll move faster coming from me than through the usual routing.' },
      { role: 'W-Au', text: 'Thanks, that\'ll save us a step.' },
    ],
    ja: '大学の入試課で、女性職員2人が男性職員と一緒に、ある出願書類を確認している。一人が、ほかは申し分ないのに最近の英語力の試験結果が見当たらないと指摘する。もう一人の女性は、書類確認の段階で気づかれるはずだと言い、男性の確認結果が通常なら月曜の朝一番に届くのにまだ来ていないと述べる。男性は日曜日は誰もログインできなかったと言い、女性はメンテナンスのあった週末のことだと納得する。男性は、この書類を語学試験の確認を扱う国際入試課(International Admissions)へ自分で回すと述べ、通常の回付より早く進むと話す。',
    v: [['shortlist', '(候補を)選抜する'], ['proficiency', '(語学)能力'], ['land in (an inbox)', '(受信箱に)届く'], ['routing', '(書類などの)回付、処理の経路']],
    q: [
      { tag: '詳細', qid: 'v4q41p', t: ['p3detail'], s: 'What does one of the women say is missing from an application?',
        c: ['A signed reference letter', 'A copy of the transcript', 'A recent English test score', 'A personal statement essay'],
        a: 2,
        e: '女性が "there\'s a gap in the file. Everything else looks really strong, but I can\'t find a current English proficiency result anywhere." と、出願書類に最近の英語力の試験結果が見当たらないと述べている。',
        w: ['推薦状についての言及は会話のどこにも出てこない。', '成績証明書についての言及は会話のどこにも出てこない。', '正解。', '志望理由書についての言及は会話のどこにも出てこない。'] },
      { tag: '意図', qid: 'v4q42p', s: 'What does the man mean when he says, "Nobody could log in on Sunday"?',
        c: ['He is backing an applicant\'s request for more time.', 'He is questioning what an applicant has said.', 'He is explaining why his work is behind schedule.', 'He is accounting for a drop in weekend figures.'],
        a: 2,
        e: '別の女性が "Your check results normally land in our inbox first thing Monday, but nothing\'s come through yet." と、男性の確認結果がまだ届いていないと指摘したところで、男性が "Nobody could log in on Sunday." と述べている。続く女性の "the maintenance weekend" からも分かるとおり、これは日曜にシステムに入れなかったことを理由に、自分の確認作業が遅れていると説明する発言である。',
        w: ['志願者からの延長願いについての言及は会話のどこにも出てこない。', '志願者の申し立てを疑う話は会話のどこにも出てこない。', '正解。', '件数についての言及は会話のどこにも出てこない。日曜にログインできなかったという発言は、男性自身の確認結果が届いていない理由として述べられている。'] },
      { tag: '次の行動', qid: 'v4q43p', t: ['p3detail'], s: 'What will the man most likely do next?',
        c: ['Forward the file to another office', 'Contact the applicant directly', 'Schedule a meeting with his colleagues', 'Update the department\'s tracking sheet'],
        a: 0,
        e: '男性は最後に "I\'ll take this file and pass it straight along to International Admissions myself" と述べ、この書類を別の部署へ回す(転送する)と言っている。',
        w: ['正解。', '志願者に直接連絡する話は会話のどこにも出てこない。', '同僚との打ち合わせについては会話のどこにも出てこない。', '管理表の更新については会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 44–46 ─────────────────────────────────────────── */
  /* 申し送り：話題にする品は書簡の束1点だけ（他の3択の品には触れていない）。
     会場は「田舎の邸宅」と1か所だけ述べ、比較の対象は「町の通常のセールルーム」
     という、他の3択のどれとも異なる場所にした。開始時刻や入札方法などは
     並べて案内していない。Q46 は会話の直後の行動（状態の報告書を読む）1つだけ。 */
  set({
    n: [44, 45, 46], lv: 3,
    s: [
      { role: 'W-Br', text: 'Hi, it\'s the museum calling about Lot 42 in next week\'s sale — the bundle of correspondence from the old shipping family. I wanted to check a few things before our acquisitions panel meets.' },
      { role: 'M-Au', text: 'Of course. What would you like to know?' },
      { role: 'W-Br', text: 'First, where\'s the sale actually being held this time? I know it sometimes moves around.' },
      { role: 'M-Au', text: 'It\'s out at a stately home this time, actually — much roomier than our usual saleroom in town, so we can take the bigger pieces too.' },
      { role: 'W-Br', text: 'Good to know — I\'ll pass that on to the panel. And the correspondence itself — do we know much about its condition? Bundles like this can be quite fragile.' },
      { role: 'M-Au', text: 'I haven\'t looked closely myself yet. I\'ll read the specialist\'s full write-up on its condition before I call you back, just to be safe.' },
      { role: 'W-Br', text: 'That would be really helpful, thank you.' },
    ],
    ja: '博物館の学芸員の女性が競売会社に電話をかけ、来週の競売のロット42――古い海運業の一族の書簡の束――について男性の担当者に問い合わせている。会場を尋ねると、今回は町の通常の競売場より広い、大きな邸宅で開催されるという。書簡の状態について尋ねると、男性はまだ自分では詳しく見ていないため、折り返す前に専門家の詳しい報告書をきちんと読むと答える。',
    v: [['correspondence', '書簡、手紙のやり取り'], ['acquisitions panel', '収集(購入)審査委員会'], ['saleroom', '競売場'], ['write-up', '(調査などの)報告書']],
    q: [
      { tag: '概要', qid: 'v4q44p', s: 'What are the speakers mainly discussing?',
        c: ['A set of antique maps', 'A bundle of old letters', 'A pair of silver candlesticks', 'A carved wooden chest'],
        a: 1,
        e: '女性は冒頭で "it\'s the museum calling about Lot 42 in next week\'s sale — the bundle of correspondence from the old shipping family" と述べ、来週の競売に出る古い海運業の一族の書簡の束について話している。',
        w: ['古地図についての言及は会話のどこにも出てこない。', '正解。', '銀の燭台についての言及は会話のどこにも出てこない。', '彫刻入りの木箱についての言及は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v4q45p', s: 'Where will the sale be held?',
        c: ['In a city-centre hotel', 'In a country house', 'In a village hall', 'In a racecourse grandstand'],
        a: 1,
        e: '男性は "It\'s out at a stately home this time, actually — much roomier than our usual saleroom in town" と、今回の会場が町の外の大きな邸宅(country house)だと述べている。',
        w: ['街中のホテルについての言及は会話のどこにも出てこない。', '正解。', '村の公民館についての言及は会話のどこにも出てこない。', '競馬場のスタンドについての言及は会話のどこにも出てこない。'] },
      { tag: '次の行動', qid: 'v4q46p', s: 'What will the man most likely do next?',
        c: ['Send some close-up photographs', 'Register the woman as a bidder', 'Check the lot\'s condition report', 'Contact the item\'s current owner'],
        a: 2,
        e: '男性は最後に "I\'ll read the specialist\'s full write-up on its condition before I call you back, just to be safe." と述べ、品の状態についての専門家の報告書(状態報告書)を読むと言っている。',
        w: ['接写の写真を送る話は会話のどこにも出てこない。', '入札者としての登録については会話のどこにも出てこない。', '正解。', '現在の所有者への連絡については会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 47–49 ─────────────────────────────────────────── */
  /* 申し送り：患者の電話の用件は「夫の検査について尋ねる」1つだけ。空いている枠は火曜午前1つだけ述べ、他の
     3つの曜日・時間帯は空きとして挙げていない。Q49 は「通院に1時間近くかかる」
     という1つの手がかりだけで推測させ、職場の騒音・合唱団・退職には触れていない。 */
  set({
    n: [47, 48, 49], lv: 3,
    s: [
      { role: 'W-Au', text: 'About the woman who rang this morning — she wanted to know whether we could give her husband the same hearing test she had. Apparently he\'s been struggling to follow conversations at family get-togethers.' },
      { role: 'M-Am', text: 'We can definitely fit him in. Did she say when would work for them?' },
      { role: 'W-Au', text: 'She asked for a morning slot if we had one — she said the drive here takes her the better part of an hour, so she\'d rather do it before the roads get busy.' },
      { role: 'M-Am', text: 'Let me check... I\'ve got an opening Tuesday morning. After that, nothing really frees up until much later in the month.' },
      { role: 'W-Au', text: 'I\'ll call her back and offer her that, then.' },
    ],
    ja: '聴覚クリニックの受付で、女性の受付係が男性の聴覚士に、その朝電話をかけてきた患者について伝えている。患者は、自分が受けたのと同じ聴力検査を夫にも受けさせられるか尋ねていて、夫は家族の集まりで会話についていけずに困っているという。ここまで来るのに1時間近くかかるので、道が混む前に済ませたいと午前の枠を希望していた。男性が確認すると火曜日の午前に空きがあり、それ以外は今月かなり先まで空かないとわかる。女性はその枠を伝えるために患者に折り返すと言う。',
    v: [['get-together', '(内輪の)集まり'], ['fit (someone) in', '(予定に)組み込む、都合をつける'], ['opening', '(予定の)空き'], ['the better part of ~', '~の大半']],
    q: [
      { tag: '詳細', qid: 'v4q47p', s: 'Why did the patient call the clinic?',
        c: ['To move her appointment to another day', 'To ask about a test for her husband', 'To report that she lost a hearing aid', 'To request a copy of her test results'],
        a: 1,
        e: '受付の女性は "she wanted to know whether we could give her husband the same hearing test she had" と述べ、患者が自分の夫にも同じ聴力検査を受けさせられるか尋ねるために電話してきたと説明している。',
        w: ['予約を別の日に動かす話は会話のどこにも出てこない。', '正解。', '補聴器を紛失したという話は会話のどこにも出てこない。', '自分の検査結果の写しを求める話は会話のどこにも出てこない。夫に同じ検査を受けさせられるか尋ねているだけである。'] },
      { tag: '詳細', qid: 'v4q48p', s: 'When does the man say he has a free appointment?',
        c: ['On Tuesday morning', 'On Wednesday afternoon', 'On Thursday morning', 'On Friday afternoon'],
        a: 0,
        e: '男性は "I\'ve got an opening Tuesday morning." と、火曜日の午前に空きがあると述べている。',
        w: ['正解。', '水曜日の午後についての言及は会話のどこにも出てこない。', '木曜日の午前についての言及は会話のどこにも出てこない。', '金曜日の午後についての言及は会話のどこにも出てこない。'] },
      { tag: '推測', qid: 'v4q49p', s: 'What is suggested about the patient?',
        c: ['She works in a noisy place.', 'She sings in a local choir.', 'She retired from her job recently.', 'She lives far from the clinic.'],
        a: 3,
        e: '女性は "the drive here takes her the better part of an hour" と述べており、患者がクリニックまで車で1時間近くかかる場所に住んでいることがうかがえる。',
        w: ['騒がしい職場についての言及は会話のどこにも出てこない。', '合唱団についての言及は会話のどこにも出てこない。', '最近退職したという話は会話のどこにも出てこない。', '正解。'] },
    ],
  }),

  /* ── 50–52 ─────────────────────────────────────────── */
  /* 申し送り：改装する場所は地下室1つだけ。重視する点は予算1つだけ述べ、
     防水性・内装の調和・足元の暖かさには触れていない。Q52 は「来月まで
     海外で戻らない」という1つの手がかりだけで推測させ、常連かどうか・
     ペット・住居の古さには触れていない。 */
  set({
    n: [50, 51, 52], lv: 3,
    s: [
      { role: 'W-Cn', text: 'Hi, it\'s the shop — I\'ve got a customer turning her cellar into a home theatre, and I need to place an order for flooring and underlay.' },
      { role: 'M-Au', text: 'No worries, what\'s she after?' },
      { role: 'W-Cn', text: 'Nothing too fancy — she\'s been really clear that she\'s working to a tight budget, so whatever we quote has to stay within that, even if it means a plainer finish.' },
      { role: 'M-Au', text: 'Understood, I\'ll put together some options at the lower end, then. When does she need it by?' },
      { role: 'W-Cn', text: 'There\'s no rush, actually — she\'s working abroad at the moment and won\'t be home until next month, so anytime before then is fine.' },
      { role: 'M-Au', text: 'Great, that gives us some breathing room.' },
    ],
    ja: '仕入先への電話で、店の女性従業員が男性の担当者に、ある客が地下室をホームシアターに改装するため、床材とその下敷きを発注したいと伝える。客は予算に厳しく、見積もりは仕上げが簡素になってもその範囲に収めてほしいと言っているという。納期については、客は仕事で海外にいて来月まで戻らないため、それまでに届けば急ぎではないと伝える。',
    v: [['cellar', '地下室'], ['underlay', '(床材の)下敷き'], ['tight budget', '厳しい予算'], ['breathing room', '余裕']],
    q: [
      { tag: '詳細', qid: 'v4q50p', s: 'What does the woman say the customer is planning to renovate?',
        c: ['A home office', 'A kitchen floor', 'A staircase landing', 'A basement room'],
        a: 3,
        e: '女性は "I\'ve got a customer turning her cellar into a home theatre" と、客が地下室をホームシアターに改装しようとしていると述べている。',
        w: ['書斎(ホームオフィス)についての言及は会話のどこにも出てこない。', 'キッチンの床についての言及は会話のどこにも出てこない。', '階段の踊り場についての言及は会話のどこにも出てこない。', '正解。'] },
      { tag: '詳細', qid: 'v4q51p', s: 'What does the woman say is important to the customer?',
        c: ['A material that resists surface moisture', 'A pattern that matches existing decor', 'A price within a strict budget', 'A surface that stays warm underfoot'],
        a: 2,
        e: '女性は "she\'s working to a tight budget, so whatever we quote has to stay within that, even if it means a plainer finish" と述べ、予算内に収まることが客にとって重要だと伝えている。',
        w: ['表面の防水性についての言及は会話のどこにも出てこない。', '既存の内装との調和についての言及は会話のどこにも出てこない。', '正解。', '足元の暖かさについての言及は会話のどこにも出てこない。'] },
      { tag: '推測', qid: 'v4q52p', s: 'What is suggested about the customer?',
        c: ['The customer has bought from the shop before.', 'The customer owns a large dog.', 'The customer lives in an old house.', 'The customer is away until next month.'],
        a: 3,
        e: '女性は "she\'s working abroad at the moment and won\'t be home until next month" と述べており、客が今は不在で、来月まで戻らないことがうかがえる。',
        w: ['以前も店で買ったことがあるという話は会話のどこにも出てこない。', '大型犬を飼っているという話は会話のどこにも出てこない。', '古い家に住んでいるという話は会話のどこにも出てこない。', '正解。'] },
    ],
  }),
];
