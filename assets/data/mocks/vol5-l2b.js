/* =============================================================
   予想模試 Vol.5 — Part 3 後半（No.53–70）
   総仕上げ回。
   ============================================================= */

const set = (o) => ({
  id: `v5-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: `v5q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2B = [

  /* ── 53–55（図表は1問目のみ）────────────────────────── */
  /* 本番仕様（1セット1問の図表設問）に合わせ、No.54 を図表設問から通常設問へ差し替えた
     （2026-08-25）。旧 No.54（id: v5q54）は「そのキットの日額」を問う図表設問だったが、
     1セット2問の図表構成自体を解消するため書き直した。新設問は音声のみで解け、
     図表（キット名・料金）にも No.55（返却期限）にも触れない——受け取り可能時刻を問う。
     set() は id を no から自動生成し、この設問だけ id を変える手段がないため、
     このユニットだけヘルパーを使わず直接記述する。
     追記（2026-08-25、監査で発見の破綻を是正）：旧版は正解の Pro が価格（£110・最高額）でも
     内容（含まれる物が最多）でも表内で最上位で、「結婚式なら一番いいキットだろう」という
     推測だけで音声なしに当たった。値と名称を組み替え、価格・内容量とも最上位のキットは
     スタジオ撮影向け（照明一式・背景スタンド付き、レンズは 1 本のみ）の別物にして誤答に回し、
     正解は 2 本目のレンズと三脚を含む中位のキットにした。会話本文（レンズ 2 本・三脚が必要、
     フラッシュは不要でも構わない、「2 本のレンズを含む唯一のキットだから」という決め手）は
     変えていない——この理屈は表を組み替えても成立する（2 本のレンズを含むキットは相変わらず
     1 つだけ）。中身（表・選択肢・解説）を変えたため id を新規採番する（no は 53 のまま）。
     再追記（2026-08-25、レビュー差し戻し対応）：No.55（v5q55）の topics が
     ['graphic'] のままだったが、この設問は図表を使わない詳細設問（返却期限）
     なので ['p3detail'] に修正した。stem・choices・answer・id は変更していない。 */
  {
    id: 'v5-p3-53', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 5,
    script: [
      { role: 'W-Br', text: 'I\'m shooting a friend\'s wedding and need something more than my own kit. I\'ll want a wide lens for the ceremony and a longer one for candid shots during the reception.' },
      { role: 'M-Am', text: 'Two lenses, understood. Do you need a tripod? Useful for the formal group photos.' },
      { role: 'W-Br', text: 'Yes, definitely for the group shot.' },
      { role: 'M-Am', text: 'And flash — is the venue well lit, or will you need it?' },
      { role: 'W-Br', text: 'It\'s outdoors in the afternoon, so I don\'t think I\'ll need it, but if it\'s bundled in I won\'t complain.' },
      { role: 'M-Am', text: 'It is bundled with the only kit that includes two lenses, so that\'s the one you\'ll want regardless.' },
      { role: 'W-Br', text: 'That\'s fine. What time can I collect it the day before?' },
      { role: 'M-Am', text: 'Any time after four. Just bring the kit back by ten the following morning — a day\'s rental covers you until then.' },
    ],
    graphic: {
      t: 'table', title: 'Northgate Camera Hire — Daily Rates',
      head: ['Kit', 'Includes', 'Daily rate'],
      rows: [
        ['Basic', 'Body only', '£35'],
        ['Standard', 'Body + zoom lens', '£58'],
        ['Advanced', 'Body + two lenses + tripod + flash', '£98'],
        ['Pro', 'Body + zoom lens + tripod + studio lighting kit + backdrop stand + reflector', '£139'],
      ],
    },
    ja: '女性が友人の結婚式撮影のため機材を借りに来店。式典用の広角レンズと披露宴でのスナップ用の望遠レンズの 2 本が必要で、集合写真のために三脚も要ると伝える。フラッシュは屋外の午後撮影のため不要だと思うが、付属していれば構わないと言うと、2 本のレンズが付く唯一のセットにはフラッシュも付属しているため、いずれにせよそのセットになると説明される。前日の午後 4 時以降に受け取り可能で、翌朝 10 時までに返却すれば 1 日分の料金でまかなえると案内された。',
    vocab: [['candid shot', '自然な瞬間を捉えた写真'], ['bundled', '一式に含まれた'], ['tripod', '三脚']],
    questions: [
      { id: 'v5q53r', no: 53, tag: '図表', stem: 'Look at the graphic. Which kit will the woman rent?',
        choices: ['Standard', 'Advanced', 'Pro', 'Basic'],
        answer: 1,
        exp: 'レンズ 2 本と三脚が必要で、両方を含むのは Advanced のみ（フラッシュも付属）。Pro は三脚こそあるがレンズは 1 本で、代わりにスタジオ照明一式・背景スタンド・レフ板が付属しており、屋外の結婚式撮影には不要な構成——価格・内容量は表内で最大だが、レンズが 1 本しかないため条件を満たさない。',
        why: ['ズームレンズ 1 本のみで、三脚もフラッシュも含まれない。', '正解。', 'レンズは 1 本のみで、必要な 2 本目のレンズを含まない。三脚はあるが、内容はスタジオ撮影向けの照明一式・背景スタンド・レフ板で、屋外の結婚式撮影には使わない。', '本体のみで、レンズも三脚も含まれない。'],
        topics: ['graphic'] },
      { id: 'v5q54r', no: 54, tag: '詳細', stem: 'When can the woman collect the rental kit?',
        choices: ['As soon as the shop opens on that particular morning.', 'Only after she pays a deposit in person.', 'Ten in the morning on the wedding day.', 'Any time after four the day before.'],
        answer: 3,
        exp: '「前日の午後 4 時以降ならいつでも」受け取れると案内されている。',
        why: ['担当者が示した受け取り可能時刻は「前日の午後 4 時以降」で、開店時刻を基準にはしていない。', '受け取りの条件として述べられているのは時刻だけで、保証金の支払いは条件に挙がっていない。', '「翌朝 10 時」は返却の期限として述べられた時刻であり、受け取りの時刻ではない。', '正解。'],
        topics: ['p3detail'] },
      { id: 'v5q55', no: 55, tag: '詳細', stem: 'By when must she return the kit?',
        choices: ['Within two hours of the wedding ending.', 'By six the following evening, once the ceremony ends.',
            'By ten the following morning.', 'By the end of the same day.'],
        answer: 2,
        exp: '「翌朝 10 時までに返却すれば 1 日分の料金でまかなえる」と案内されている。',
        why: ['担当者が返却期限として挙げたのは「翌朝 10 時」という時刻で、式の終了時刻を起点にした制限は述べていない。', '「6 時」も「式が終わったら」という条件も本文のどこにも出てこない。担当者が返却期限として挙げたのは「翌朝 10 時」という時刻だけである。', '正解。', '担当者は「翌朝 10 時までに戻せば 1 日分の料金でまかなえる」と述べており、期限は式当日の終わりではなく翌朝になる。'],
        topics: ['p3detail'] },
    ],
  },

  /* ── 56–58 ─────────────────────────────────────────── */
  set({
    n: [56, 57, 58], lv: 5, t: ['p3int'],
    s: [
      { role: 'W-Am', text: 'Callan, the banners for the trade show haven\'t shown up, and we\'re on-site tomorrow.' },
      { role: 'M-Br', text: 'I checked the tracking this morning — they\'re stuck at customs. Something about the paperwork listing the wrong tariff code.' },
      { role: 'W-Am', text: 'Can we get that fixed today?' },
      { role: 'M-Br', text: 'I\'ve sent the correction to the courier, but even if they process it now, the earliest delivery would be tomorrow afternoon, and we\'re due to set up at nine.' },
      { role: 'W-Am', text: 'Then we can\'t rely on them arriving in time.' },
      { role: 'M-Br', text: 'Not for the morning, no. I\'ve asked the print shop near the venue for a quote on reprinting just the two main banners overnight — everything else in the booth doesn\'t depend on them.' },
      { role: 'W-Am', text: 'Do it. We can put the small banners up first thing and swap in the printed ones if the originals do turn up later.' },
      { role: 'M-Br', text: 'That\'s the plan. I\'ll confirm the print shop can deliver by eight.' },
    ],
    ja: '展示会用のバナーが届かず、翌日には現地入りする予定だと女性が報告。男性は追跡状況を確認し、書類の関税コードの誤りで税関に留め置かれていると説明。今日中に修正しても最短で翌日午後の到着となり、9 時の設営には間に合わないと判明。女性は「原本に頼るのは無理だ」と判断し、男性は会場近くの印刷店に主要な 2 枚のバナーだけ一晩で再印刷する見積もりを依頼済みだと答える。他のブース用品はバナーに依存しないため問題ないとも説明。女性は再印刷を進めるよう指示し、まず小さいバナーを設置し、原本が後で届けば差し替える方針で合意した。',
    v: [['tariff code', '関税コード'], ['courier', '運送業者'], ['booth', '（展示会の）ブース']],
    q: [
      { tag: '詳細', s: 'Why are the banners delayed?',
        c: ['Nobody placed the order in time.', 'The print shop closed unexpectedly.',
            'The delivery truck broke down.', 'A paperwork error held them at customs.'],
        a: 3,
        e: '書類の関税コードの誤りで税関に留め置かれていると説明されている。',
        w: ['男性が挙げた遅延の理由は書類の関税コードの誤りで、発注が間に合わなかったという話は会話に出てこない。', '印刷店の休業には触れていない。', '故障の話はない。', '正解。'] },
      { tag: '意図', t: ['p3int'], s: 'What does the woman mean when she says, "Then we can\'t rely on them arriving in time"?',
        c: ['She is deciding they need a backup plan.', 'She wants to cancel the trade show appearance.',
            'She doubts the tracking data.', 'She wants to delay the setup time.'],
        a: 0,
        e: '直前で「最短でも翌日午後着で、9 時の設営に間に合わない」と説明され、それを受けて代替策が必要だと判断している。',
        w: ['正解。', '出展の取りやめは述べていない。', '追跡情報については誤りを指摘していない。', '設営時刻の変更は述べていない。'] },
      { tag: '次の行動', s: 'What does Callan plan to do?',
        c: ['Ask the venue to postpone the entire setup.', 'Arrange overnight reprinting of the two main banners.',
            'Cancel the customs clearance request this afternoon.', 'Order replacement banners from a different courier.'],
        a: 1,
        e: '会場近くの印刷店に主要 2 枚を一晩で再印刷してもらう手配を進めている。',
        w: ['設営延期の依頼については会話のどこにも出てこない。', '正解。', '通関手続きの修正はすでに進めており、取り下げるとは述べていない。', '別の運送業者への発注については会話のどこにも出てこない。'] },
    ],
  }),

  /* ── 59–61（図表なし・No.59 を通常設問化）────────────────── */
  /* 本番仕様（1セット1問の図表設問）に合わせ、No.60 を図表設問から通常設問へ差し替えた
     （2026-08-25）。旧 No.60（id: v5q60）は「一時的に使う区画」を問う図表設問だったが、
     1セット2問の図表構成自体を解消するため書き直した。新設問は音声のみで解け、
     図表（区画名）にも No.61（Zone A 使用の前提条件）にも触れない——
     年間許可証を勧めた理由（年間を通じて割安）を問う。set() は id を no から自動生成し、
     この設問だけ id を変える手段がないため、このユニットだけヘルパーを使わず直接記述する。
     追記（2026-08-25、監査で発見の破綻を是正）：旧版の図表は Permit type 列に
     「Staff — annual permit」とそのまま書いており、設問（"annual staff permit" を問う）と
     文字列が一致するため、音声を聞かずに図表だけで正解できた。Permit type 列を削除し、
     図表は Zone と Distance to entrance のみにした。これで「年間許可証がどの区画か」は
     音声（「中間区画、50〜150 メートル」——行名でも最上級でもなく、図表の Distance 列と
     突き合わせて初めて分かる数値）でしか分からず、図表だけでは（距離しか出ていないため）
     分からない。No.61 が使う「Zone A」という名指しは音声内の別の発言によるもので、
     この図表の列とは無関係なため影響しない。会話本文は変えていない。
     再追記（2026-08-25、図表を9→5問に減らす作業）：本セット最後の図表設問だった No.59
     （「年間許可証はどの区画か」）を通常設問に差し替え、graphic オブジェクト自体を
     削除した（このセットに図表設問がゼロになるため。残すと画面に無関係な表が出て
     No.60・No.61 の手がかりになりうる）。新しい No.59 は script 末尾の男性の発言
     "Let's do that for now, and I'll switch to my annual permit zone once the
     crutches are off" の意図を問う設問に差し替えた（script は変更していない）。
     tag を「図表」から「意図」、topics を graphic から p3int に変更した——同じセット
     の No.60・No.61 がどちらも p3detail のため、重複を避けられる。No.61 の topics も、
     実体を持たなくなった graphic から p3detail に修正した（内容は変えていないため
     id は v5q61 のまま）。あわせて、No.60 の誤答 (C)「It requires no approval from
     facilities.」が No.61 の正解「Facilities must approve the request.」を語彙ごと
     漏らしていたため、無関係な誤答「It can be transferred to another vehicle.」に
     差し替えた（選択肢を変えたため id を v5q60r2 に更新）。
     再々追記（2026-08-25、レビュー差し戻し対応）：No.59（意図問題）を検証したところ、
     引用文 "Let's do that for now, and I'll switch to my annual permit zone once
     the crutches are off" が平叙文で話者自身が既に言い切っており、字義を超えた含みが
     ない——正解は引用文の逐語言い換え（for now＝temporarily、once the crutches are
     off＝until his crutches are no longer needed）で、誤答3つは引用文自体と矛盾する
     だけで落ちるため、意図問題として成立していないと判断した。加えて同じセットの
     No.61 の stem "before the employee can use Zone A" が「男性が Zone A を使う」を
     先読みで確定させ、正解が供給する新情報を無料で与えてしまっていた。
     意図問題を諦め、script 中の "Given I'm still on crutches for a few more weeks,
     is there any way to be closer?" を根拠にした詳細設問（男性が入口に近い区画を
     尋ねた理由）に差し替えた。script は変更していない。crutches という語を選択肢に
     置かず、キーワード一致を避けている。3問とも p3detail になるが、Part 3 の
     非図表論点は p3detail／p3int の2つしかないため、設問の妥当性を論点の分散より
     優先した。中身を変えたため id を新規採番する（v5q59r3）。
     2巡目監査（2026-08-25、レビュー役）：No.59 の exp が「けがから回復中」と、音声にない語
     （injury）を根拠のように書いていた。台本にあるのは「あと数週間はまだ松葉杖」と担当者の
     「一時的な医療上の必要」「通常は最長 6 週間」で、これらから回復途上だと分かる、という
     導出を明示する形に改めた。why の (B)(C)(D) も「述べていない」だけだったので、
     「男性が理由として挙げたのは松葉杖のことだけ」という肯定形の根拠を先に置いた。
     解説文のみの修正。
     3巡目監査（2026-08-25、レビュー役差し戻し）：No.59 の新しい stem
     "Why does the man ask about parking closer to the building?" が「男性は入口に
     近い駐車を求めている」を明示するため、No.60 の誤答 (A)「It includes a reserved
     space near the entrance.」が先読みで弱まり（年間許可証が入口そばの区画なら、
     男性がわざわざ近くを求める理由が無くなる）、実質3択化していた。(A) を、入口・
     距離に触れない「It includes a space in the covered section.」に差し替えた
     （屋根付き区画という設定は script のどこにも出てこず、音声を聞かなければ
     判断できない）。選択肢を変えたため id を新規採番する（v5q60r3）。 */
  {
    id: 'v5-p3-59', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['p3detail'], level: 5,
    script: [
      { role: 'W-Cn', text: 'Since you\'re joining us full-time and staying long term, I\'d recommend the annual permit rather than paying monthly — it works out cheaper over the year.' },
      { role: 'M-Au', text: 'That sounds sensible. Is that zone closer or further from the building?' },
      { role: 'W-Cn', text: 'It\'s the middle zone, fifty to a hundred fifty metres. The monthly option is a bit further out.' },
      { role: 'M-Au', text: 'Given I\'m still on crutches for a few more weeks, is there any way to be closer?' },
      { role: 'W-Cn', text: 'For a temporary medical need we can put in a request for zone A, which is right by the entrance, but that has to be approved by facilities and it\'s usually for a maximum of six weeks.' },
      { role: 'M-Au', text: 'Let\'s do that for now, and I\'ll switch to my annual permit zone once the crutches are off.' },
      { role: 'W-Cn', text: 'I\'ll submit the request today and let you know once it\'s approved.' },
    ],
    ja: '人事担当が、正社員として長く在籍する予定の男性に月極ではなく年間許可証を勧める。その方が年間を通じて割安になるためで、対象は入口から 50〜150 メートルの中間区画だと説明。男性は松葉杖を使っている間だけもっと近い場所に停められないか尋ね、担当者は医療上の一時的な必要があれば入口すぐそばの A 区画を施設管理の承認を得て申請できるが、通常は最長 6 週間だと答える。男性はまずそちらで申請し、松葉杖が外れたら年間許可証の区画に切り替えることにした。担当者は本日中に申請すると約束した。',
    vocab: [['crutches', '松葉杖'], ['facilities', '施設管理部門'], ['work out cheaper', '結果的に安くつく']],
    questions: [
      { id: 'v5q59r3', no: 59, tag: '詳細', stem: 'Why does the man ask about parking closer to the building?',
        choices: ['He is currently recovering from an injury.', 'He regularly carries heavy equipment to work.', 'He starts his shift before the gates open.', 'He shares a car with another employee.'],
        answer: 0,
        exp: '男性は「あと数週間はまだ松葉杖なので、もっと近くに停められないか」と自分から理由を添えて尋ねている。担当者もこれを「一時的な医療上の必要」と呼び、通常は最長 6 週間の措置だと説明しているので、恒久的な事情ではなく体を痛めて回復途上の状態だと分かる。',
        why: ['正解。', '男性が理由として挙げたのは松葉杖のことだけで、荷物や機材を運ぶという話は会話のどこにも出てこない。', '男性が理由として挙げたのは松葉杖のことだけで、勤務開始時刻にも門の開閉時刻にも会話は触れていない。', '男性が理由として挙げたのは松葉杖のことだけで、相乗りや車の共有は会話に出てこない。'],
        topics: ['p3detail'] },
      { id: 'v5q60r3', no: 60, tag: '詳細', stem: 'Why does the woman recommend the annual permit?',
        choices: ['It includes a reserved space in the covered parking section.', 'It costs less over a full year.', 'It can be transferred to another vehicle.', 'It is available only to new employees.'],
        answer: 1,
        exp: '「1年を通じて働くなら月払いより年間許可証の方が割安」と勧めている。',
        why: ['屋根付き区画についての言及は会話のどこにもなく、年間許可証を勧める理由としても挙げられていない。', '正解。', '他の車両への譲渡については会話中で一切触れられておらず、年間許可証を勧める理由としても挙げられていない。', '担当者が挙げた根拠は「長く在籍する予定だから年間で見て割安になる」ことで、入社時期による利用制限には触れていない。'],
        topics: ['p3detail'] },
      { id: 'v5q61', no: 61, tag: '詳細', stem: 'What must happen before the employee can use Zone A?',
        choices: ['A doctor\'s note must be submitted in person.', 'Facilities must approve the request.',
            'He must pay an additional deposit.', 'He must wait six months.'],
        answer: 1,
        exp: '「施設管理の承認が必要」と述べられている。',
        why: ['担当者が挙げた条件は施設管理の承認だけで、診断書の提出は会話のどこにも出てこない。', '正解。', '追加保証金の話はない。', '「6 週間」であって 6 か月ではない。'],
        topics: ['p3detail'] },
    ],
  },

  /* ── 62–64（3名）─────────────────────────────────── */
  set({
    n: [62, 63, 64], lv: 5, k: 'conversation with three speakers', t: ['p3int'],
    s: [
      { role: 'M-Cn', text: 'So we\'ve got three venues shortlisted for the retreat. Ludmila, you visited all three — what\'s the read?' },
      { role: 'W-Br', text: 'On facilities they\'re close. On availability, not so much.' },
      { role: 'M-Am', text: 'Meaning?' },
      { role: 'W-Br', text: 'Two of them can hold our dates in October. The third can only offer November, which clashes with the year-end close.' },
      { role: 'M-Cn', text: 'That could just be a scheduling headache we push through.' },
      { role: 'W-Br', text: 'It could, but I asked twice about flexibility on the dates, and they said no both times — they\'re fully booked around our preferred week either way.' },
      { role: 'M-Am', text: 'Then we\'re choosing between two, not three. What separates them?' },
      { role: 'W-Br', text: 'One has better breakout rooms for the workshops. The other is cheaper and closer, but the breakout spaces are really just corners of the main hall.' },
      { role: 'M-Cn', text: 'Let\'s get exact quotes from both by Friday and decide based on price once we know the gap.' },
    ],
    ja: '社員研修の会場候補 3 件について、全て視察したルドミラが報告。設備面はどこも近いが、空き状況が問題で、10 月に対応できるのは 2 件のみ。3 件目は 11 月しか提示できず、期末決算と重なる。日程調整で押し切れないか問われ、2 回柔軟性を尋ねたが両方とも断られ、希望週は完全に埋まっていると説明。結果として実質 2 件からの選択となり、一方は研修用の分科会室が充実しているが、もう一方は安価で立地も近いものの分科会スペースは大広間の一角に過ぎないと述べる。結論として、金曜までに両方の正式見積もりを取り、差額を見て決めることにした。',
    v: [['shortlist', '候補に絞る'], ['breakout room', '分科会室'], ['year-end close', '期末決算']],
    q: [
      { tag: '詳細', s: 'Why is the third venue no longer under consideration?',
        c: ['It withdrew its offer entirely.', 'It has no breakout rooms at all.',
            'It can only accommodate the group in November.', 'It exceeds the budget by a wide margin.'],
        a: 2,
        e: '3 件目は 11 月しか対応できず、期末決算と重なるため除外された。',
        w: ['辞退したとは述べていない。', '分科会室の有無には触れていない。', '正解。', '予算超過の話はない。'] },
      { tag: '意図', t: ['p3int'], s: 'What does Ludmila imply when she says, "I asked twice... and they said no both times"?',
        c: ['The venue changed its answer between calls.', 'She made a scheduling mistake the first time.',
            'The venue\'s unavailability cannot be negotiated.', 'She is unsure whether to trust the venue.'],
        a: 2,
        e: '2 回尋ねて同じ回答だったことから、空き状況の問題は交渉の余地がないことを示している。',
        w: ['回答が変わったとは述べていない。2 回とも同じ回答だったと述べている。', '自身のミスについては会話のどこにも出てこない。', '正解。', '信頼性への疑念ではなく、空き状況そのものへの確信の欠如を示している。'] },
      { tag: '次の行動', s: 'What will happen next?',
        c: ['The retreat will be postponed to November.', 'A fourth venue will be added to the shortlist.',
            'Exact quotes will be obtained from the two remaining venues.', 'The workshops will be held online instead.'],
        a: 2,
        e: '「金曜までに両方の正式見積もりを取り、差額を見て決めよう」と結論している。',
        w: ['11 月への延期は選ばれていない。', '新たな候補の追加は述べていない。', '正解。', 'オンライン開催の話はない。'] },
    ],
  }),

  /* ── 65–67（図表を削減、No.65 を通常設問化）─────────────── */
  /* 予想模試 Vol.5 の図表設問を本番数（Part3:3問）に減らす作業（2026-08-25）。
     旧 No.65（tag「図表」）は「Look at the graphic. Which region are the speakers
     discussing?」で、四半期ごとの地域別売上表から「増えてすぐ戻った」行（East:
     640→1,020→705）を選ばせる設問だったが、監査で「表だけを見れば東地域が唯一
     その形をしているため、音声を聞かなくても実質7割超の確度で正解できる」と
     指摘された。会話は地域名を一度も音声で読み上げないため、図表を残す限りこの
     欠陥は解消できない。よって図表（graphic）自体を削除し、No.65 を音声のみで
     解ける設問（キャンペーンによる売上増の原因）に差し替えた。script は変更していない。
     このセットに図表設問がゼロになるため、graphic を残すと画面に無関係な表が出て
     他の設問の手がかりになりうる（削除で解消）。
     このユニットは元々 set() ヘルパーで組んでいたが、No.65 だけ id を変える手段が
     ないため、他の差し替え済みユニット（59–61 等）と同様、ヘルパーを使わず
     直接記述する形に変更した。
     あわせて、旧 No.67 の誤答 (D)「Raising prices in the East region.」が、
     削除した図表の行名「East」をそのまま使っており、図表が無くなると地域名の
     出どころが無いまま浮いてしまうため、地域名を含まない誤答
     「Extending the same discount through the winter.」に差し替えた（id を
     v5q67r に更新）。No.67 は set() のユニット既定 t:['graphic','p3int'] を
     明示の上書きなしに暗黙に継承しており、図表と無関係な「次の行動」設問なのに
     topics に graphic が紛れ込んでいたため、topics を明示的に p3detail に修正した。
     No.66 は元から t:['p3int'] を明示していたため内容・id とも変更していない。
     新しい No.65 の topics は p3detail とした——同じセットの No.66（p3int）とは
     重複しないが、No.67（次の行動＝p3detail）とは重複する。Part3 の非図表論点は
     p3detail と p3int の2つしかなく、3問中2問が「詳細・次の行動」に分類される
     内容である以上、3問を3種の異なる論点に分けることは構造的にできない
     （変更前は3問とも topics に p3int を含んでいたので、重複はむしろ減っている）。
     再追記（2026-08-25、レビュー差し戻し対応）：
     (1) No.65 の stem「in that region」は、stem 内に先行詞がないまま指示詞が
     宙に浮いていたため「in one region」に改めた（音声冒頭の "One region jumped
     in the second quarter" と対応させた）。
     (2) No.67 の4択が4つとも discount／campaign を含んでおり、これを先読みすると
     No.65 の4択のうち割引に触れる唯一の選択肢（正解）が浮き上がってしまうと
     指摘された。(A)(B) を discount／campaign を含まない誤答に差し替えた
     （(A) Increasing prices across the entire range. / (B) Hiring an additional
     regional sales manager.）。いずれも音声のどこにも出てこない内容で、(C)(D) は
     従来どおり。正解位置（index 2）は変更していない。選択肢を変えたため id を
     新規採番する（v5q67r2）。
     2巡目監査（2026-08-25、レビュー役）：新しい誤答 (A)(B) の why が「触れていない」だけ
     だったため、男性が実際に提案した内容（秋に規模を半分にした割引を試す）を先に名指しし、
     そこから外れるという形に書き直した。解説文のみの修正。
     なお (D) が discount を含んだままである件（No.65 の正解を先読みで示唆する）は
     選択肢の変更が要るため直さず、報告に回した。
     3巡目監査（2026-08-25、レビュー役差し戻し）：上記の (D)「Extending the same
     discount through the winter.」を、discount／campaign を含まない
     「Reporting the loss to the finance committee.」に差し替えた（監査役の案を採用。
     音声に該当する提案は無く、男性の実際の提案＝秋の割引縮小テストと矛盾するため
     誤答として成立する。「loss」は音声中に出るが「財務委員会への報告」という行動
     自体は述べられていない）。これで No.65 の4択のうち割引に触れる選択肢は
     No.65 自身の正解のみになった。why[3] を新しい選択肢に合わせて書き直した。
     選択肢を変えたため id を新規採番する（v5q67r3）。 */
  {
    id: 'v5-p3-65', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['p3detail'], level: 5,
    script: [
      { role: 'W-Br', text: 'Have you seen the regional sales? One region jumped in the second quarter and came straight back down.' },
      { role: 'M-Cn', text: 'I have — that was the spring promotion. We ran a big discount campaign there and nowhere else.' },
      { role: 'W-Br', text: 'So it worked.' },
      { role: 'M-Cn', text: 'It moved units, certainly. Whether it "worked" depends on margin — most of what we sold there in Q2 was at a loss once you account for the discount.' },
      { role: 'W-Br', text: 'How much of a loss, roughly?' },
      { role: 'M-Cn', text: 'We lost money on about sixty percent of the extra units sold. The rest were near break-even.' },
      { role: 'W-Br', text: 'Then let\'s not repeat it in the same form. Could we try a smaller discount next time and see if it still moves volume?' },
      { role: 'M-Cn', text: 'That\'s worth testing. I\'ll propose a half-size version for the autumn.' },
    ],
    ja: '地域別売上のデータで、ある地域が第 2 四半期に急増しすぐ元に戻っていると女性が指摘。男性はそれが春のキャンペーンによるもので、その地域だけ大幅な割引を実施したためと説明。女性が「効果があった」と言うと、男性は販売数は伸びたが、割引を考慮すると第 2 四半期の販売の大半は赤字だったと述べる。追加販売分の約 6 割は損失で、残りはほぼ収支均衡だったという。女性は同じ形での再実施はしない方針とし、次回はより小規模な割引で販売量への効果を試せないか提案。男性はそれを検討し、秋に規模を半分にした案を提案すると答えた。',
    vocab: [['margin', '利幅'], ['break-even', '収支均衡'], ['move units', '販売数量を伸ばす']],
    questions: [
      { id: 'v5q65r', no: 65, tag: '詳細', stem: 'Why did sales increase sharply in one region during the second quarter?',
        choices: ['The company ran a temporary discount campaign there.', 'A rival company shut down its local operations.', 'A new product line launched exclusively in that region.', 'The region ran a customer referral campaign that quarter.'],
        answer: 0,
        exp: '男性が「それは春のキャンペーンによるもので、その地域だけ大幅な割引を実施したためだ」と説明している。',
        why: ['正解。', '男性は増加の原因を「春のキャンペーン＝その地域だけで実施した大幅な割引」と明示しており、競合他社の動向には一切触れていない。', '男性が挙げた原因は割引キャンペーンのみで、新製品の投入は会話のどこにも出てこない。', '男性が挙げた原因は「その地域だけで実施した大幅な割引」であり、顧客紹介による販促には一切触れていない。'],
        topics: ['p3detail'] },
      { id: 'v5q66', no: 66, tag: '意図', stem: 'What does the man mean when he says, "Whether it \'worked\' depends on margin"?',
        choices: ['The campaign should be repeated everywhere.', 'The sales data for that entire quarter was recorded incorrectly.', 'Increased sales volume alone does not mean the campaign was profitable.', 'Final results will not be known for several more months.'],
        answer: 2,
        exp: '直後に「割引を考慮すると大半が赤字だった」と続く。件数の増加＝成功ではないという趣旨。',
        why: ['この地域限定の施策で、他の地域への展開は話題になっていない。', 'データの誤りについては会話のどこにも出てこない。数字自体は正しいものとして扱われている。', '正解。', '結果はすでに判明しており、赤字だったと述べている。'],
        topics: ['p3int'] },
      { id: 'v5q67r3', no: 67, tag: '次の行動', stem: 'What does the man propose?',
        choices: ['Increasing prices across the entire range.', 'Hiring an additional regional sales manager.', 'Testing a smaller discount in the autumn.', 'Reporting no loss to the finance committee.'],
        answer: 2,
        exp: '「秋に規模を半分にした案を提案する」と述べている。',
        why: ['男性が提案したのは「秋に規模を半分にした割引を試す」ことだけで、値上げには一切触れていない。', '男性が提案したのは「秋に規模を半分にした割引を試す」ことだけで、人員の追加採用は会話に出てこない。', '正解。', '男性は "most of what we sold there in Q2 was at a loss once you account for the discount" と、Q2 の販売の大半が赤字だったと述べており、損失が無かったと財務委員会に報告する提案は本文と矛盾する。'],
        topics: ['p3detail'] },
    ],
  },

  /* ── 68–70（図表は1問目のみ）────────────────────────── */
  /* 本番仕様（1セット1問の図表設問）に合わせ、No.69 を図表設問から通常設問へ差し替えた
     （2026-08-25）。旧 No.69（id: v5q69）は「模擬面接に行く場所」を問う図表設問だったが、
     1セット2問の図表構成自体を解消するため書き直した。新設問は音声のみで解け、
     図表（部屋名）にも No.70（担当者が個別の予約を確認できないこと）にも触れない——
     模擬面接に入室するために必要な持ち物を問う。set() は id を no から自動生成し、
     この設問だけ id を変える手段がないため、このユニットだけヘルパーを使わず直接記述する。
     再追記（2026-08-25、監査で発見の破綻を是正）：No.69 の誤答 (B)「A print-out of
     his CV.」が、図表の「Workshop Room — CV clinic (drop-in)」を指しており、No.69 の
     stem「the interview room」が Quiet Room を名指しで消すため、音声を聞かずに
     No.68 の正解 Workshop Room に到達できた。誤答 (B) を CV に触れない
     「A ticket bought on the day.」に差し替え、stem も図表のラベルと同じ語を含まない
     「the session he booked online」に変更した（id を v5q69r2 に更新）。
     あわせて、音声の "just drop in" が図表の Workshop Room の注記 "(drop-in)" と
     文字列としてそのまま一致していたため、その注記を削除した（"CV clinic" という
     項目名だけを残し、"CV" という語の対応関係のみで判別させる）。Quiet Room の
     "(booked slots only)" 側は No.68 の他の誤答説明が使っていないため変更していない。
     No.70 の topics も、図表とは無関係な「予約確認の可否」設問なのに graphic のまま
     だったため、p3detail に修正した（内容は変えていないため id は v5q70 のまま）。
     再々追記（2026-08-25、レビュー差し戻し対応）：No.69 の stem「What does the man
     need in order to enter the session he booked online?」が stem 自身の booked と
     正解「His confirmation of the booking.」で同語反復になっており、さらに誤答
     「A ticket bought on the day.」が stem の「オンラインで予約済み」と直接矛盾して
     いて、設問文と選択肢だけで解けると指摘された。stem を音声の "have your
     confirmation ready" に対応する「What does the woman tell the man to have
     ready?」に変更した（選択肢4つは据え置き）。これで誤答は stem と矛盾しなくなる。
     あわせて図表の「Quiet Room — Interview practice (booked slots only)」の注記も
     stem の旧い booked という語と呼応してしまうため削除した（No.68 の why はこの
     注記を使っていないため影響なし）。stem を変えたため id を新規採番する
     （v5q69r3）。
     3巡目監査（2026-08-25、レビュー役差し戻し）：No.69 の正解が
     「His confirmation of the booking.」で、同じセット中 booking の語を含む
     選択肢は No.69 のこの正解だけだったため、No.70 の stem
     「What does the staff member say about checking booking times?」と誤答
     3つ（Bookings can be changed .../ All bookings are printed .../ She cannot
     check individual bookings ...）に booking(s) が残っていると、先読みで
     No.69 の正解が浮いてしまうと指摘された。stem を「What does the woman say
     she is unable to do?」に変更し（呼称も the staff member から the woman に
     統一——No.69 と同一人物）、4択すべてを booking(s) を含まない文に書き直した。
     正解は音声 "I can't see individual bookings from here" を、script 中に
     既出の語 "slot"（"a mock interview slot" / "What time is my slot"）で
     言い換えた「Check individual slot times from her location.」とした。
     誤答3つ（駐車場までの案内／紙の日程表／順番待ちの場所の確保）はいずれも
     音声のどこにも出てこない。当初「Direct him to the correct room.」を候補に
     したが、"room" が No.68 の正解ラベル「Workshop Room」と同じ語を含むため、
     一語ずつの重なり確認で除外し「Hold his place in the queue.」に差し替えた。
     正解位置（index 3）は変更していない。stem・選択肢を変えたため id を
     新規採番する（v5q70r）。 */
  {
    id: 'v5-p3-68', part: 3, kind: 'set', kindLabel: 'conversation',
    topics: ['graphic'], level: 4,
    script: [
      { role: 'M-Am', text: 'Hi, I\'m hoping to get some feedback on my CV before I start talking to employers.' },
      { role: 'W-Au', text: 'That\'s the room just past the main entrance, on your right — no need to book, just drop in.' },
      { role: 'M-Am', text: 'Great. I also signed up online for a mock interview slot — where do I go for that?' },
      { role: 'W-Au', text: 'That\'s a different room, further down past both employer halls. Only people with a booked slot can go in, so have your confirmation ready.' },
      { role: 'M-Am', text: 'I do, on my phone. What time is my slot, by the way — is that something you can check?' },
      { role: 'W-Au', text: 'I can\'t see individual bookings from here, but the confirmation e-mail should have the time. If you can\'t find it, the information desk by the entrance can look it up.' },
      { role: 'M-Am', text: 'I\'ll check my phone first. Thanks for the directions.' },
    ],
    graphic: {
      t: 'list', title: 'Northfield Careers Fair — Zone Guide',
      items: [
        'Hall A — Employer stands (technology & finance)',
        'Hall B — Employer stands (public sector & non-profit)',
        'Workshop Room — CV clinic',
        'Quiet Room — Interview practice',
      ],
    },
    ja: '来場者の男性が、企業と話す前に履歴書の添削を受けたいと職員に尋ねる。入口を過ぎてすぐ右の部屋で予約不要、直接立ち寄ればよいと案内される。オンラインで予約した模擬面接についても尋ねると、雇用主のホール 2 つを過ぎたさらに先の別室で、予約済みの人のみ入室可能、確認書の提示が必要だと説明される。時間を確認できるか尋ねると、この場所では個別の予約は確認できないが確認メールに時間が記載されているはずで、見つからなければ入口の案内デスクで調べられると答える。男性はまず携帯を確認すると述べた。',
    vocab: [['drop-in', '予約不要で立ち寄れる', ], ['mock interview', '模擬面接'], ['confirmation', '確認書・確認メール']],
    questions: [
      { id: 'v5q68', no: 68, tag: '図表', stem: 'Look at the graphic. Where should the man go first?',
        choices: ['Hall A', 'Hall B', 'Workshop Room', 'Quiet Room'],
        answer: 2,
        exp: '履歴書添削は CV clinic ＝ Workshop Room。予約不要で立ち寄れる。',
        why: ['技術・金融企業のブース。', '公共・非営利企業のブース。', '正解。', '模擬面接の会場。'],
        topics: ['graphic'] },
      { id: 'v5q69r3', no: 69, tag: '詳細', stem: 'What does the woman tell the man to have ready?',
        choices: ['His confirmation of the booking.', 'A ticket bought at the door on the day.', 'Identification issued by the venue.', 'A letter from his employer.'],
        answer: 0,
        exp: '女性は「予約済みの人のみ入室でき、確認書を用意しておくように」と伝えている。',
        why: ['正解。', '当日購入の券のような仕組みは話に出ておらず、用意するよう求められてもいない。', '女性が用意するよう求めたのは予約の確認書だけで、会場発行の身分証には触れていない。', '女性が用意するよう求めたのは予約の確認書のみで、雇用主からの書状は話に出ていない。'],
        topics: ['p3detail'] },
      { id: 'v5q70r', no: 70, tag: '詳細', stem: 'What does the woman say she is unable to do?',
        choices: ['Provide directions to the parking area.', 'Give a paper copy of the timetable.',
            'Hold his place in the queue.', 'Check individual slot times from her location.'],
        answer: 3,
        exp: '女性は「この場所では個別の予約枠の時間は確認できない」と述べ、確認メールか入口の案内デスクを頼るよう伝えている。',
        why: ['駐車場までの案内については話に出ていない。', '紙の日程表を渡すという話は出ていない。', '順番待ちの場所を確保するという話は出ていない。', '正解。'],
        topics: ['p3detail'] },
    ],
  },
];
