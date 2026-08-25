/* =============================================================
   予想模試 Vol.6 — Part 3 後半（No.53–70）
   題材は施設管理・物流・イベント運営に限定（vol6-l2a / vol6-l3 と分担）。

   ▼ このファイルを書く担当へ（2026-08-18）
   揃えるのは**構造だけ**。具体的には——問題数 18（3問×6 セット、No.53–70）、
   図表問題は後半 3 セット、`tag` の並び、`level` の配分、話者ロールの散らし方、
   1 セットあたりの語数の水準（125〜160 語）だけ。
   **場面・業種・人物・地名・数値・言い回し・設問文（stem）・選択肢は絶対に揃えない。**
   構造は上のとおり数値で書いてあるので、**既存の巻（vol1〜vol5 の -l2b.js）を開かないこと。**
   開くと必ず内容まで引きずられる。
   もとここには「Vol.1（標準回）と同じ条件・同じ配分の回」と書いてあった。この一文が原因で
   2026-08-18 に Vol.6 は Vol.1 の内容そのものの再スキンになり、Part 7 で 50 問、
   Part 3・4 で 30 問以上を作り直した。**この注意書きを消さないこと。**
   書き終えたら `assets/data/` 全体（ドリル `assets/data/drills/*.js` を含む）と
   機械照合すること。既存の巻を避けた結果ドリルと衝突した事故が同日に 4 件起きている。
   ============================================================= */

const set = (o) => ({
  id: `v6-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.id で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。 */
    id: x.id ?? `v6q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2B = [

  /* ── 53–55（3名）────────────────────────────────── */
  set({
    n: [53, 54, 55], lv: 4, k: 'conversation with three speakers',
    s: [
      { role: 'M-Br', text: 'Before the standup — Bay Three. What\'s the situation?' },
      { role: 'W-Cn', text: 'The roller door won\'t lift past waist height. I\'ve had a look; it\'s the motor, not just a jam.' },
      { role: 'M-Br', text: 'How long to fix?' },
      { role: 'W-Cn', text: 'The part isn\'t in our van stock. It\'s on next-day delivery, so realistically tomorrow morning.' },
      { role: 'M-Au', text: 'That\'s a problem — we\'ve got six trucks queued for Bay Three already, and more booked through the afternoon.' },
      { role: 'M-Br', text: 'Can we run them through One and Two instead?' },
      { role: 'M-Au', text: 'We can, but those are reserved for outbound loading. If we use them for inbound all day, nothing ships out until Bay Three\'s fixed.' },
      { role: 'W-Cn', text: 'What if you alternate — inbound in the morning, outbound after lunch? I can rope off Bay Three so nobody tries the door.' },
      { role: 'M-Br', text: 'Do that. And rebook this afternoon\'s Bay Three deliveries for tomorrow once the part\'s confirmed.' },
    ],
    ja: '物流拠点の朝の打ち合わせで、バイ3の巻き上げシャッターが腰の高さまでしか上がらず、単なる引っかかりではなくモーターの故障だと判明する。交換部品は車載在庫になく翌日配送のため、実質的な修理は翌朝になる。すでに6台のトラックがバイ3で搬入待ちをしており、午後にも搬入予約が入っている。通常は搬出専用のバイ1・2を終日搬入に回す案も出るが、それでは搬出ができなくなるため、午前は搬入・午後は搬出と時間帯で使い分ける方針となる。バイ3にはロープを張って立入禁止にし、当日午後にバイ3宛てだった搬入は部品の到着が確定してから翌日に取り直すことになった。',
    v: [['roller door', '巻き上げ式シャッター'], ['queue', '列を作る・並ぶ'], ['rope off', 'ロープで立入禁止にする'], ['rebook', '予約を取り直す']],
    q: [
      { tag: '概要', s: 'What problem are the speakers discussing?',
        c: ['A delivery truck broke down on the way to the site.', 'A loading bay door will not open properly.', 'All of the loading bays are out of use.', 'A staff member did not show up for a shift.'],
        a: 1,
        e: 'バイ3のシャッターが腰の高さまでしか上がらないという不具合について話している。',
        w: ['トラックについては「6台がバイ3に並んで待っている」と述べているだけで、故障は述べていない。', '正解。', '使えないのはバイ3だけで、バイ1・2は搬入にも搬出にも使えると述べられている。', '欠勤の話は出ていない。'] },
      { tag: '詳細', s: 'What does the woman say about the repair?',
        c: ['It can be completed within the hour.', 'A different technician needs to be called in.', 'The cost will exceed the usual budget.', 'The necessary part is not currently in stock.'],
        a: 3,
        e: '「必要な部品が車載在庫になく、翌日配送のため実質的に明日の朝になる」と説明している。',
        w: ['1時間以内ではなく、翌日になると述べている。', '女性自身が原因をモーターと特定して部品の手配まで説明しており、別の技術者を呼ぶ話は出ていない。', '費用には触れていない。', '正解。'] },
      { tag: '次の行動', s: 'What will the speakers most likely do this afternoon?',
        c: ['Use Bays One and Two for outbound loading.', 'Wait until Bay Three is repaired before resuming work.', 'Move all inbound trucks into Bay Three.', 'Fit a replacement motor using a spare from the van.'],
        a: 0,
        e: '「午前は搬入、午後は搬出に切り替える」という提案に同意しており、午後はバイ1・2を搬出に使う。',
        w: ['正解。', '修理を待たず代替策で進める方針になっている。', 'バイ3はロープを張って誰も触れないようにすると述べられている。', '交換部品は車載在庫に無く翌日配送だと述べられている。'] },
    ],
  }),

  /* ── 56–58 ─────────────────────────────────────────── */
  set({
    n: [56, 57, 58], lv: 4,
    s: [
      { role: 'W-Br', text: 'This is Naomi from the Fairview Ballroom — the backdrop stand you delivered for tonight\'s awards dinner is missing its base plate.' },
      { role: 'M-Am', text: 'The heavy round one that bolts to the bottom of each upright?' },
      { role: 'W-Br', text: 'That\'s the one. Without it the frame isn\'t stable enough to leave standing near a walkway.' },
      { role: 'M-Am', text: 'I can have a replacement on a van within the hour, but our nearest driver is coming from the depot across town — that\'s closer to ninety minutes with today\'s traffic.' },
      { role: 'W-Br', text: 'Doors open at six. Can it get here before then?' },
      { role: 'M-Am', text: 'It should, but only just. If it looks tight, lay the frame flat rather than leave it standing unsupported.' },
      { role: 'W-Br', text: 'Understood. I\'ll have someone watch the loading entrance so the driver isn\'t held up finding us.' },
      { role: 'M-Am', text: 'Good. I\'ll pass him your number as well, in case he needs directions.' },
    ],
    ja: '会場の担当者ナオミが、当夜の授賞式用に届いたバックドロップスタンドの土台部品が欠けていると業者に連絡する。土台がないと通路脇に安定して立てられないと説明。業者は1時間以内に代替品をトラックに積めるが、最寄りのドライバーが街の反対側の営業所からのため、実質90分近くかかると答える。開場は6時で、ぎりぎり間に合う見込みだが、間に合わなければフレームを立てず寝かせておくよう勧められる。ナオミはドライバーが迷わないよう荷受け口に人を配置すると応じ、業者は道順の確認用にドライバーへ彼女の番号を伝えておくと答えた。',
    v: [['backdrop stand', '背景用スタンド'], ['base plate', '土台部品'], ['depot', '営業所・拠点'], ['unsupported', '支えのない']],
    q: [
      { tag: '概要', s: 'What is the purpose of the woman\'s call?',
        c: ['To ask for an earlier delivery time.', 'To request a refund for a cancelled booking.', 'To report that a delivered item is incomplete.', 'To report that an item arrived damaged.'],
        a: 2,
        e: '配送されたバックドロップスタンドの土台部品が欠けていると伝えている。',
        w: ['納品はすでに済んでおり、時間を早めるようには求めていない。', 'キャンセルや返金の話は出ていない。', '正解。', '破損ではなく部品の欠品だと述べている。'] },
      { tag: '詳細', s: 'What does the man say about the replacement part?',
        c: ['It has already left the depot.', 'It will take about ninety minutes to arrive.', 'It cannot be delivered until the following day.', 'It is currently out of stock.'],
        a: 1,
        e: '「一番近いドライバーが街の反対側の営業所から来るため、実質90分近くかかる」と述べている。',
        w: ['「1時間以内に車に積める」と述べており、まだ出発していない。', '正解。', '「開場の6時にぎりぎり間に合う」と述べており、翌日ではない。', '代替品は1時間以内に車に積めると述べており、在庫切れではない。'] },
      { tag: '次の行動', s: 'What does the woman say she will do?',
        c: ['Postpone the doors opening until six-thirty.', 'Call another supplier for a spare part.', 'Move the backdrop to a different room.', 'Station someone at the loading entrance.'],
        a: 3,
        e: '「配送のドライバーが迷わないよう、荷受け口で誰かに見ていてもらう」と述べている。',
        w: ['開場は6時のままで、女性は「それまでに届くか」と尋ねている。開場を遅らせる案は出ていない。', '別の業者へ発注する話は出ていない。', '男性が勧めているのはフレームを寝かせておくことで、別の部屋へ移す話は出ていない。', '正解。'] },
    ],
  }),

  /* ── 59–61 ─────────────────────────────────────────── */
  set({
    n: [59, 60, 61], lv: 5,
    s: [
      { role: 'M-Cn', text: 'Imogen, I need to flag something. The lift contractor confirmed Thursday for the annual inspection — all three lifts, out from nine until five.' },
      { role: 'W-Br', text: 'Thursday\'s a problem. We\'ve got the Hallcombe reception in the ninth-floor suite that evening, starting at six.' },
      { role: 'M-Cn', text: 'Six should be clear — they told me back in service by five.' },
      { role: 'W-Br', text: 'We were told that last time too, and they ran two hours over.' },
      { role: 'M-Cn', text: 'So you\'re not confident they\'ll hit five this time either.' },
      { role: 'W-Br', text: 'Not confident enough to risk sixty guests standing in the lobby with no way up. A few of them use wheelchairs.' },
      { role: 'M-Cn', text: 'Fair. I\'ll ask them to take lift three first and have it back in service by three, as a buffer.' },
      { role: 'W-Br', text: 'And if three o\'clock slips the way five o\'clock did last time?' },
      { role: 'M-Cn', text: 'Then the reception has to come downstairs. I\'ll put a hold on the second-floor function room this morning and release it the moment lift three is running.' },
    ],
    ja: '施設管理担当の男性が、契約業者の年次点検が木曜に確定し、3基のエレベーターが9時から17時まで停止すると女性に伝える。女性はその晩6時から9階のスイートでホールコムのレセプションがあると指摘。男性は「5時までに稼働再開」という説明を伝えるが、女性は前回も同じ説明で2時間超過した実績を挙げて疑念を示す。男性は今回も5時に間に合うか確信が持てないのかと確認し、女性は車椅子利用者を含む60名がロビーで足止めされる事態は避けたいと答える。男性はエレベーター3号機を最初に点検させ、3時までに再稼働させて余裕を持たせるよう業者に依頼すると提案。女性が「その3時も前回の5時のようにずれ込んだら」と問うと、男性は、その場合レセプションは下の階に移すことになるとして、今朝のうちに2階の宴会室を仮押さえし、3号機が動き出したらすぐ解放すると答えた。',
    v: [['flag', '（問題を）指摘する'], ['buffer', '余裕・緩衝'], ['put a hold on ~', '～を仮押さえする'], ['function room', '（ホテル等の）宴会場']],
    q: [
      { tag: '詳細', s: 'What does the man say about the lift inspection?',
        c: ['It is scheduled to run from nine until five.', 'It will affect only one of the three lifts.', 'It has been postponed to the following week.', 'It was completed earlier this month.'],
        a: 0,
        e: '「9時から17時まで、3基すべてが停止する」年次点検が木曜に確定したと述べている。',
        w: ['正解。', '3基すべてが対象で、1基だけではない。', '延期の話はなく、むしろ日程が確定している。', 'これから行われる点検で、すでに完了したものではない。'] },
      { tag: '意図', t: ['p3int'], s: 'What does the woman mean when she says, "We were told that last time too, and they ran two hours over"?',
        c: ['She wants to cancel the Thursday inspection.', 'She is blaming the man for the earlier delay.', 'She doubts the contractor will finish on time.', 'She is agreeing that the schedule is realistic.'],
        a: 2,
        e: '直後に男性が「今回も5時に間に合うか自信がないのですね」と確認しており、過去の超過実績を根拠に今回の見積もりを疑っている。',
        w: ['点検の中止は求めていない。', '超過したのは業者だと述べており、男性の責任には触れていない。', '正解。', 'むしろ日程を疑っており、同意はしていない。'] },
      /* id は v6q61r（no は 61 のまま。中身を差し替えたため設問 id は新規採番）。
         2026-08-18 の一括照合で差し替え。旧版の正解「Get written confirmation from the contractor.」は
         vol3-l2b.js の No.61（同じ Part 3・同じ「次の行動」・正解 Get written confirmation of the
         filming days）と結論の命題そのものが一致していた。誤答「Confirm the arrangement over the
         phone instead.」まで含めて「電話ではなく書面で」という同じ対立軸に乗っており、
         vol4-l2b.js の No.57（I'd still get it in writing before we commit）とも同じ修辞だった。
         会話の結びを別の行動に組み替えてある。 */
      { tag: '次の行動', id: 'v6q61r', s: 'What will the man do today?',
        c: ['Postpone the annual inspection.', 'Ask the caterers to arrive two hours earlier.', 'Reserve a second venue as a precaution.', 'Cancel the ninth-floor booking.'],
        a: 2,
        e: '「3時も間に合わなければレセプションは下の階に移すことになる。今朝のうちに2階の宴会室を仮押さえし、3号機が動き出したらすぐ解放する」と述べている。今日行うのは代替会場の仮押さえ。',
        w: ['点検の延期は求めていない。男性が業者に頼むのは3号機を先に点検して3時までに復旧させることである。', 'ケータリング業者にも到着時刻にも触れていない。', '正解。', '9階の予約を取り消すとは述べていない。3号機が3時までに動けば9階のまま行い、動かなければ下の階へ移すという二段構えである。'] },
    ],
  }),

  /* ── 62–64（図表）────────────────────────────────── */
  /* 2026-08-25 是正（3回目）。前回（2回目）の是正は判別軸を「crane 可否／耐荷重／
     既存の使用予定」の3系統に増やしたつもりだったが、実際には表だけで Area 3 が
     一意に決まっていた——耐荷重は最小（Area 1・2.5t）でも最大（Area 2・3.6t）でもなく、
     crane 列で唯一 No のエリア（Area 4）でもない、「どの列でも印が付かない唯一の行」が
     Area 3 だけだったため、当てずっぽうで100%正解できた。加えて音声も
     "Area Four's a non-starter" "Isn't Area Two the one with the highest rating?" と
     除外対象を行名で名指ししており（"the highest rating" は最上級）、二重に閉じて
     いなかった。

     今回、判別軸を「量」から「種別」に組み替えた。数値の Load limit と Yes/No の
     Crane access を廃し、Roof deck（Concrete slab / Steel deck）と
     Crane set-up（East side / West side）という、どちらも一般的な優劣を持たない
     2種類×2種類の表にした（4エリアがちょうど1組み合わせずつになり、最大・最小・
     唯一値がすべて消える）。音声側は「2.8トンなのでコンクリート下地でなければ
     支えられない（Steel deck の2エリアを除外）」「今月は東側で外壁工事の足場が
     組まれておりクレーンを西側にしか据えられない（East side の残り1エリアを除外）」
     の2条件に組み替え、いずれも行名を言わず属性で指すようにした。表だけでは
     4エリアのどれも識別できず（同じ属性の組み合わせが必ず2エリアずつ存在する）、
     音声の2条件を両方拾って初めて Area 3（Concrete slab・West side）に絞り込める。

     あわせて、除外理由の四半期表記のずれ（判断基準は「今期すでに committed」なのに
     除外理由は「来期の chiller housing」だった点）も解消した——今回の除外理由は
     季節・四半期に依存しない「今月の足場工事」に統一している。結びの
     "That leaves the last one, by default." も「最後のエリア＝Area 4」と誤読される
     余地があったため、"That's the only one of the remaining two that fits." に
     改めた。

     No.63（一体吊りの理由＝メーカー保証）・No.64（作業日数）の該当発言（2.8トン・
     一体吊りの文、クレーン1日＋配管翌朝の文）はいずれも変更していないため、
     両設問は答え・id とも変更しない。No.62 は表・音声・解説を全面的に書き換えたため
     設問 id を新規採番する（v6q62r → v6q62r3、no は 62 のまま）。正解位置は前回と
     同じ index 2（choices の3番目＝Area 3）を維持した。 */
  set({
    n: [62, 63, 64], lv: 5, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Thurlby House — Roof Plant Areas',
      head: ['Area', 'Roof deck', 'Crane set-up'],
      rows: [
        ['Area 1', 'Concrete slab', 'East side'],
        ['Area 2', 'Steel deck', 'East side'],
        ['Area 3', 'Concrete slab', 'West side'],
        ['Area 4', 'Steel deck', 'West side'],
      ],
    },
    s: [
      { role: 'W-Au', text: 'The new cooling unit is booked in for the twelfth. Which of the roof areas are you putting it on?' },
      { role: 'M-Am', text: 'That depends on the roof deck underneath and where we can actually get the crane set up this month.' },
      { role: 'W-Au', text: 'The unit weighs two point eight tonnes, and it has to go up in one piece. The manufacturer won\'t warrant it if we split it on site.' },
      { role: 'M-Am', text: 'At that weight it has to sit on a concrete slab — steel decking won\'t take a point load like that, so two of the areas are out straight away.' },
      { role: 'W-Au', text: 'And the crane itself?' },
      { role: 'M-Am', text: 'Scaffolding\'s up on the east side for the façade work, so this month the crane can only be positioned on the west side. That\'s the only one of the remaining two that fits.' },
      { role: 'W-Au', text: 'Understood. How long is the roof out of use for the installation?' },
      { role: 'M-Am', text: 'A full day for the crane, then a morning after that for the pipework.' },
    ],
    ja: '施設管理担当の女性が、12日に搬入予定の新しい冷却ユニットをどの屋上プラントエリアに設置するのか業者に尋ねる。業者は、下地の屋根の種類と、今月クレーンをどちら側に据えられるかで決まると答える。女性はユニットが2.8トンあり、現場で分割するとメーカー保証が効かなくなるため一体で吊り上げる必要があると説明する。業者は、その重さではコンクリート下地でなければ支えられず鋼製デッキの2エリアはまず除外されると述べる。続けて、今月は東側で外壁工事の足場が組まれているためクレーンを西側にしか据えられず、残る2エリアのうち条件に合うのは1つだけだと説明する。設置に伴う屋上の使用停止は、クレーン作業に丸1日、その後の配管作業に翌朝が必要だと案内された。',
    v: [['plant area', '設備機器の設置区画'], ['warrant', '（製品を）保証する'], ['point load', '一点に集中してかかる荷重'], ['scaffolding', '（工事用の）足場'], ['pipework', '配管']],
    q: [
      { tag: '図表', id: 'v6q62r3', s: 'Look at the graphic. Where will the cooling unit be installed?',
        c: ['Area 1', 'Area 2', 'Area 3', 'Area 4'],
        a: 2,
        e: '男性はまず、ユニットの重さ（2.8トン）ではコンクリート下地でなければ支えられないと述べ、鋼製デッキの Area 2・Area 4 を除外する。続けて、今月は東側で外壁工事の足場が組まれておりクレーンを西側にしか据えられないと述べ、残る2エリア（Area 1・Area 3）のうち東側の Area 1 も除外される。したがって Area 3（コンクリート下地・西側）に決まる。表の Roof deck 列・Crane set-up 列はどちらも2エリアずつに分かれており、突出した値も1エリアだけの値も無い。片方の列だけでは必ず2エリアが残るため、男性が挙げた「重さによる下地の条件」と「今月のクレーンの据え付け位置」の両方を聞き取って初めて Area 3 に確定できる。',
        w: ['コンクリート下地で重さの条件は満たすが、東側にあり、今月は外壁工事の足場のためクレーンを東側には据え付けられない。', '鋼製デッキのため、2.8トンのユニットを支えられず、この時点で除外される。', '正解。', '鋼製デッキのため、2.8トンのユニットを支えられず、この時点で除外される。西側にある点はこの除外理由に関係しない。'] },
      /* 2026-08-25（2回目の是正）: 前回差し替えた正解 "The roof's load capacity and
         crane access." が図表の列見出し（Load limit / Crane access）とほぼ同一で、
         図表だけで当たってしまう欠陥が見つかったため、"That comes down to two things"
         の論点を離れ、script 内の別の未使用発言（メーカー保証が一体吊りを要求する理由）
         を問う設問に差し替えた。中身を丸ごと変えたため設問 id を再度新規採番する
         （no は 63 のまま）。正解位置は前回と同じ index 1 を維持。 */
      { tag: '詳細', t: ['p3detail'], id: 'v6q63r2', s: 'Why must the unit be lifted in one piece?',
        c: ['The crane can only make one lift that day.', 'The manufacturer\'s warranty would not apply otherwise.', 'The roof cannot be reached from inside the building.', 'The delivery is booked for a single date.'],
        a: 1,
        e: '女性が「現場で分割するとメーカー保証が効かなくなる」と述べており、一体で吊り上げる理由はメーカー保証を維持するためである。',
        w: ['その日のクレーンの吊り作業回数については述べられていない。', '正解。', '建物内部からの屋根への到達可否については述べられていない。', '搬入日が12日である点は述べられているが、これは一体で吊り上げる理由ではない。'] },
      { tag: '詳細', t: ['p3detail'], s: 'How long does the man say the roof will be out of use?',
        c: ['Half a day.', 'One day.', 'One day and a morning.', 'Two days and a morning.'],
        a: 2,
        e: '「クレーン作業に丸1日、そのあと配管のために翌朝が必要」と述べており、合わせて1日と半日になる。',
        w: ['クレーン作業だけで丸1日かかると述べている。', 'クレーン作業の1日に加えて翌朝の配管作業が必要だと述べている。', '正解。', '使用停止はクレーン作業の丸1日と翌朝の配管作業までで、2日を超えるとは述べていない。'] },
    ],
  }),

  /* ── 65–67（図表）────────────────────────────────── */
  /* 2026-08-25 是正：正解位置の偏り是正（Vol.6 は図表 5 問中 4 問が C だった）。
     Zone/Area/Dock/Machine のような連番ラベルは選択肢の並べ替えができないため、
     表の行の属性（Stock type・Units short の組）を Zone 1 と Zone 3 の間で入れ替え、
     正解の行を Zone 3 → Zone 1 に移した（No.65 の tag: '図表' 設問の答えを C → A に）。
     音声は Zone の番号を一度も言わず、Electronics / Returns Pending / Workwear /
     Seasonal stock という stock type 名でのみ言及しているため、この入れ替えは音声と
     矛盾しない。入れ替え後も Units short 列は Zone 1=31, Zone 2=58, Zone 3=2, Zone 4=9 で、
     最大値（58, Zone 2）は依然として不正解（「未記帳の返品ロットと説明がつく」ため除外）
     であり、「一番大きい数を選ぶ」当てずっぽうは今回も Zone 2 に落ちる。
     中身（表）を変更したため設問 id を v6q65 → v6q65b に新規採番する（no は 65 のまま）。 */
  set({
    n: [65, 66, 67], lv: 5, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Bramcote Distribution Centre — Q3 Inventory Variance',
      head: ['Zone', 'Stock type', 'Units short'],
      rows: [
        ['Zone 1', 'Electronics', '31'],
        ['Zone 2', 'Returns pending', '58'],
        ['Zone 3', 'Workwear', '2'],
        ['Zone 4', 'Seasonal stock', '9'],
      ],
    },
    s: [
      { role: 'M-Au', text: 'The Q3 inventory audit came back. Two of the four zones are well outside normal variance.' },
      { role: 'W-Cn', text: 'Which ones?' },
      { role: 'M-Au', text: 'Returns Pending — fifty-eight units short — and Electronics, thirty-one short.' },
      { role: 'W-Cn', text: 'Returns Pending is the bigger gap by some way. Is that where we should be looking?' },
      { role: 'M-Au', text: 'That\'s what I assumed at first. But that one we can account for — it matches a batch that came back last week and hasn\'t been logged in yet.' },
      { role: 'W-Cn', text: 'And Electronics?' },
      { role: 'M-Au', text: 'Nothing explains it. No despatch that size went out this quarter, and nothing\'s logged as returned. It\'s also the priciest stock we hold.' },
      { role: 'W-Cn', text: 'Then we treat it as a discrepancy, not a paperwork lag. I\'ll schedule a recount for tomorrow morning, before the shift starts, so nobody\'s moving stock while we count.' },
    ],
    ja: '倉庫の第3四半期の在庫監査の結果について、男性が4ゾーンのうち2つが正常な変動幅を大きく外れていると報告する。返品保留ゾーンが58個、エレクトロニクスが31個の不足。女性は不足数のより大きい返品保留のほうを調べるべきかと尋ねるが、男性はそちらは先週返品されたロットが未記帳のままであることと一致するため説明がつくと答える。一方エレクトロニクスには説明が見つからず、今四半期に該当規模の出荷も返品記録もなく、しかも保管品の中で最も高額な在庫だという。女性は記録の遅れではなく実際の食い違いとして扱うこととし、翌朝シフト開始前、誰も在庫を動かさない時間帯に再カウントを行うことにした。',
    v: [['variance', '差異'], ['despatch', '発送'], ['discrepancy', '食い違い'], ['paperwork lag', '記帳の遅れ']],
    q: [
      { tag: '図表', id: 'v6q65b', s: 'Look at the graphic. Which zone are the speakers concerned about?',
        c: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'],
        a: 0,
        e: '正常な変動幅を外れているのは2ゾーンで、うちエレクトロニクス（31個不足）だけは説明がつかないと述べている。図表でエレクトロニクスに対応するのは Zone 1。',
        w: ['正解。', '不足数58は表の中で最大だが、先週返品されたロットが未記帳のままであることと一致すると説明がついている。「数字が一番大きい行を選ぶ」という当てずっぽうはここに落ちる。', 'Workwear のゾーン。正常な変動幅を外れた2ゾーンとして名前が挙がっていない。', 'Seasonal stock のゾーン。正常な変動幅を外れた2ゾーンとして名前が挙がっていない。'] },
      /* stem と選択肢Aから Electronics / Returns Pending の名指しを外した（2026-08-18、最終監査）。
         旧 stem は「Electronics のほうが深刻」と書いており、表の Stock type 列を引くだけで
         前問 No.65（どのゾーンか）が音声なしで Zone 3 に確定した。 */
      { tag: '詳細', t: ['p3detail'], s: 'Why does the man think one of the two discrepancies is more serious?',
        c: ['It involves a larger number of missing units.', 'It cannot be explained by a known cause.', 'It occurred in a zone with no security camera.', 'It was reported by more than one employee.'],
        a: 1,
        e: 'Returns Pendingは先週返品されたロットと一致すると分かっているが、Electronicsには一致する説明が見つからないと述べている。',
        w: ['男性がより深刻だとしているのは Electronics（31個不足）で、Returns Pending の58個不足より数は少ない。不足数の多さは理由になっていない。', '正解。', 'セキュリティカメラの有無には触れていない。', '報告者の人数には触れていない。'] },
      { tag: '次の行動', t: ['p3detail'], s: 'What does the woman decide to do?',
        c: ['Arrange a recount before the next shift begins.', 'Order additional security cameras for the zone.', 'Escalate the issue to head office immediately.', 'Write off the missing units as a loss.'],
        a: 0,
        e: '「翌朝、シフト開始前に、誰も在庫を動かさない状態で再カウントを行う」と述べている。',
        w: ['正解。', '追加の防犯カメラの話は出ていない。', '本社への報告には触れていない。', '「記録の遅れではなく食い違いとして扱う」と述べており、損失計上には触れていない。'] },
    ],
  }),

  /* ── 68–70（図表）────────────────────────────────── */
  set({
    n: [68, 69, 70], lv: 5, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Millrace Exhibition Centre — Move-in Schedule (Hall 2)',
      head: ['Time slot', 'Assigned to', 'Dock'],
      rows: [
        ['06:00–08:00', 'Structural stand-builders', 'Dock 4'],
        ['08:00–10:00', 'Modular / pop-up stands', 'Dock 2'],
        ['10:00–12:00', 'Furniture & AV suppliers', 'Dock 1'],
        ['12:00–14:00', 'Exhibitor own-vehicle drop-off', 'Dock 3'],
      ],
    },
    s: [
      { role: 'M-Br', text: 'Move-in enquiries, this is Emeka.' },
      { role: 'W-Am', text: 'Hi, I\'m calling about our stand in Hall Two — it\'s a two-storey structure. Which move-in slot are we in, and which dock?' },
      { role: 'M-Br', text: 'Two storeys makes it a structural build, so you\'re in the structural stand-builders\' slot. The dock for that slot is set out on the move-in schedule.' },
      { role: 'W-Am', text: 'That\'s where I might have a problem. Our steel frame is coming from a supplier who can\'t get it to us before seven.' },
      { role: 'M-Br', text: 'That\'s still inside the slot, so no issue there. We do have one complication, though — the dock you\'re assigned to is having its floor resurfaced this week.' },
      { role: 'W-Am', text: 'And if it overruns?' },
      { role: 'M-Br', text: 'It\'s booked to finish by half past six, so it should be clear before your frame gets here. But if it does run over, I\'ll put you into Dock Two instead for that one morning — nothing\'s booked there before eight.' },
      { role: 'W-Am', text: 'Understood. I\'ll pass that on to our stand-builders.' },
    ],
    ja: '見本市の出展者側物流担当の女性が、2階建てのブース構造物の搬入時間帯と搬入口について会場に電話で確認する。2階建ては構造材の施工業者（structural stand-builders）の扱いになり、その枠の搬入口は搬入予定表に出ていると案内される。鉄骨フレームの搬入元業者が7時より前には届けられないと伝えるが、それでもその時間帯の枠内には収まるため問題ないと言われる。あわせて、割り当てられた搬入口の床面が今週補修中である点が話題になり、予定では6時半までに終わり鉄骨の到着には間に合う見込みだが、超過した場合はその朝だけDock 2に回すと案内される（Dock 2は8時より前は予約が入っていない）。女性はその旨を施工業者に伝えると応じた。',
    v: [['structural', '構造材の・構造上の'], ['resurface', '（床などを）補修する'], ['overrun', '予定を超過する']],
    q: [
      /* stem を「will … use」から「is … assigned to」へ変えた（2026-08-18、3巡目の監査）。
         script は「補修が長引いたらその朝だけ Dock Two に回す」という条件付きの振替を
         述べているため、「will use」だと Dock 2 が条件次第で成立しうる＝誤答が「不可能」に
         ならない。搬入予定表上の割り当てを尋ねる形にすると、Dock 2 は 08:00–10:00 の枠の
         割り当てであって女性のブースの割り当てではない、と構造的に切れる。
         男性自身の "the dock you're assigned to" を語彙上の足がかりにしている。 */
      { tag: '図表', s: 'Look at the graphic. Which dock is the woman\'s stand assigned to?',
        c: ['Dock 1', 'Dock 2', 'Dock 3', 'Dock 4'],
        a: 3,
        e: '女性のブースは「2階建ての構造物」で、男性は「構造材の施工業者（structural stand-builders）の枠になる。その枠の搬入口は搬入予定表に出ている」と答えている。図表で Structural stand-builders の行に割り当てられている搬入口は Dock 4。',
        w: ['Dock 1 は10:00–12:00 の什器・AV業者の枠に割り当てられた搬入口である。', 'Dock 2 は08:00–10:00 のモジュール式ブース用の搬入口で、女性のブースへの割り当てではない。男性は "the dock you\'re assigned to is having its floor resurfaced this week" と述べて、割り当て先＝補修中の搬入口であることを明言している。Dock 2 が出てくるのは "I\'ll put you into Dock Two instead for that one morning" — 補修が超過した場合にその朝だけ回す代替先としてであり、instead が示すとおり割り当てそのものではない。', 'Dock 3 は12:00–14:00 の出展者自身の車両（own-vehicle drop-off）用の枠に割り当てられた搬入口である。女性の鉄骨フレームは "coming from a supplier" と述べられており、出展者自身の車両での持ち込みでもない。', '正解。'] },
      { tag: '詳細', t: ['p3detail'], s: 'What does the woman say about the steel frame delivery?',
        c: ['It has already arrived at the venue.', 'It cannot arrive before seven o\'clock.', 'It is coming from another exhibitor.', 'It will arrive on the exhibitor\'s own vehicle.'],
        a: 1,
        e: '「鉄骨フレームは供給業者から来るが、7時より前には届けられない」と述べている。',
        w: ['これから届くもので、まだ到着していない。', '正解。', '「供給業者から来る」と述べており、他の出展者からではない。', '供給業者が運んでくるもので、出展者自身の車両ではない。'] },
      { tag: '詳細', t: ['p3detail'], s: 'What will happen if the floor resurfacing runs over schedule?',
        c: ['The move-in will be postponed to the next day.', 'An additional fee will be charged to the exhibitor.', 'The dock being resurfaced will stay closed for the rest of the week.', 'The truck will be redirected to a different dock that morning.'],
        a: 3,
        e: '「予定を超えた場合は、その朝だけDock Twoに回す」と説明している。',
        w: ['翌日への延期は述べていない。', '追加料金の話は出ていない。', '超過した場合の対応は「その朝だけ Dock Two に回す」であり、補修中の搬入口が週内ずっと閉鎖されるとは述べていない。', '正解。'] },
    ],
  }),
];
