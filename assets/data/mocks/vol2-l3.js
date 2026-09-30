/* =============================================================
   予想模試 Vol.2 — Part 4（No.71–100）
   図表 2 セット・意図問題 3 問を含む強化回。

   2026-09-29 全面書き下ろし（先読み対策・設問先行／正解はくじ方式、工程4）。
   stem・選択肢・図表（Q89, Q98）は `v15/plans/vol2-final-P4.txt` で凍結済み、
   正解は `v15/dice/vol2-l3.txt`（メインが crypto.randomInt で決定）のとおり。
   本文・解説を新規に書き下ろし、設問 id を v2q71p〜v2q100p に採番し直した
   （`qid` を追加し、ヘルパーは `x.qid` を優先するよう変更）。
   ============================================================= */

const talk = (o) => ({
  id: `v2-p4-${o.n[0]}`, part: 4, kind: 'set', kindLabel: o.k || 'talk',
  topics: o.t || ['p4type'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    // id は新規採番（v2q71p〜v2q100p）。x.qid を優先し、無ければ旧来の連番にフォールバック。
    id: x.qid || `v2q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p4type'], tag: x.tag,
  })),
});

export const L3 = [

  /* ── 71–73 留守番電話（屋根工事業者） ──────────────────────
     くじは No.71=B, 72=A, 73=B。**2026-09-29 監査第1巡で3点、第2巡で軽微2点を修正**：
     ①Q71＝正解の語義が本文の「予定変更の通知」とずれていた→ S2 を「既に決まっている
     予定を念のため知らせる」形に書き換え、reminder の語義に合わせた。②Q73＝依頼が
     S2/S3/S6 にも紛れ込み申し送り「依頼は1つだけ」に反していた→ S2 を事実の伝達に、
     S3 の「電話を」命令を削除、S6 の"Ring the office"を削除し、依頼は写真撮影のみに
     絞った。③写真の依頼文を"get a few pictures of the completed work up top"に
     言い換え、選択肢 "Take photos of a finished roof" との逐語一致を弱めた。
     【第2巡】④W-Br（英国ロール）が北米寄りの"short an extension ladder"（of 落とし）
     を使っていたため"short of an extension ladder"に直した。⑤ja の「車の置き場」が
     "the yard"（会社の資材置き場・車両基地）の訳としてずれていたため「会社の置き場
     （yard）まで車で戻る手間」に修正。Q72（機材を借りる提案の読み）は直前・直後とも
     変更なしで維持。用件は他の3つの話題（資材の注文・新しい作業員・安全手順）に一切
     触れない。新規固有名詞なし（社名 Jarrow は設問案の固定語）。level は付け直さない
     （3。前巡の監査の結論のまま）。 */
  talk({
    n: [71, 72, 73], lv: 3, k: 'telephone message',
    s: [
      { role: 'W-Br', text: `Hi, it's the office — a few quick things before you head off for the day.` },
      { role: 'W-Br', text: `First, so it's fresh in everyone's mind, Thursday's team meeting starts at nine o'clock, and the whole crew is expected to be there.` },
      { role: 'W-Br', text: `Second, if you're still short of an extension ladder for today's job, here's a thought. There's another crew finishing up nearby, and driving back to the yard would eat up the rest of your afternoon.` },
      { role: 'W-Br', text: `They've got the same telescopic model we use, so it should fit straight onto the van.` },
      { role: 'W-Br', text: `And once you've wrapped up, get a few pictures of the completed work up top before you leave — the homeowner has asked to see it up close before we send the invoice.` },
      { role: 'W-Br', text: `That's everything for now.` },
    ],
    ja: `屋根工事会社の事務所から、現場に出ている作業班の責任者への留守番電話。木曜日のチーム会議が9時に始まることを念のため知らせ、班全員の参加を見込んでいると伝える。続けて、もし作業に必要な伸縮式のはしごが足りなければ、近くで作業を終えようとしている別の班が同じ型のはしごを持っており、それを借りれば会社の置き場（yard）まで車で戻る手間が省けると伝える。最後に、その日の作業が終わったら、仕上がった屋根の写真を何枚か撮っておくよう頼む——家主が請求前に近くで見たがっているためである。`,
    v: [['extension ladder', '伸縮式のはしご'], ['telescopic', '伸縮式の'], ['homeowner', '家主'], ['invoice', '請求書']],
    q: [
      { tag: '概要', qid: 'v2q71p', s: 'What is the purpose of the call?',
        c: ['To report a problem with a materials order', 'To give a reminder about a staff meeting', 'To pass on details about a new worker', 'To announce a new safety procedure'],
        a: 1,
        e: `冒頭近くで"so it's fresh in everyone's mind, Thursday's team meeting starts at nine o'clock, and the whole crew is expected to be there"と述べており、既に決まっている会議の予定を思い出させることが用件である。`,
        w: [
          `資材の注文の不具合についての言及はない。`,
          `正解。"so it's fresh in everyone's mind, Thursday's team meeting starts at nine o'clock, and the whole crew is expected to be there"と、会議の予定を思い出させている。`,
          `新しい作業員についての言及はない。`,
          `新しい安全手順についての言及はない。`,
        ] },
      { tag: '意図', t: ['p3int'], qid: 'v2q72p', s: 'Why does the caller say, "There\'s another crew finishing up nearby"?',
        c: ['To suggest borrowing some equipment', 'To account for a customer\'s remark', 'To justify handing a job to others', 'To warn about traffic on a street'],
        a: 0,
        e: `直前で"if you're still short of an extension ladder for today's job"とはしごの不足に触れ、引用の直後で"They've got the same telescopic model we use, so it should fit straight onto the van"と、同じ型のはしごを借りられると示している。よって機材を借りることを提案する意図である。`,
        w: [
          `正解。直前ではしごの不足に触れ（"if you're still short of an extension ladder for today's job"）、引用の直後で"They've got the same telescopic model we use, so it should fit straight onto the van"と、近くの班から機材を借りられることを示している。`,
          `客の発言についての言及はない。`,
          `仕事を他の班に任せる話はしていない。`,
          `通りの交通事情についての言及はない。`,
        ] },
      { tag: '依頼', qid: 'v2q73p', s: 'What does the caller ask the listener to do?',
        c: ['Pick up tiles from a supplier\'s yard', 'Take photos of a finished roof', 'Drop off a spare key at the office', 'Measure a chimney at a customer\'s house'],
        a: 1,
        e: `"get a few pictures of the completed work up top before you leave"と、屋根の写真を撮るよう頼んでいる。`,
        w: [
          `資材置き場から瓦を受け取る依頼はない。"the yard"への言及はあるが、それは車で戻る手間を避ける文脈であり、瓦の受け取りを頼んでいるのではない。`,
          `正解。"get a few pictures of the completed work up top before you leave"と依頼している。`,
          `事務所への合鍵の受け渡しについての依頼はない。`,
          `煙突の採寸についての依頼はない。`,
        ] },
    ],
  }),

  /* ── 74–76 園内放送（動物園） ──────────────────────
     くじは No.74=C, 75=B, 76=D。**2026-09-29 監査第1巡で軽微2点を修正**：
     ①Q75＝依頼文が選択肢 "Switch off the flash on cameras" と完全に逐語だったため
     "please make sure your camera's flash is turned off" に言い換えた。②ja の
     「ふれあいトーク」が本文の keeper talks（飼育員によるトーク）とややずれていたため
     修正。生まれた動物はレッサーパンダの子のみに絞り、他の3種（キリン・コビトカバ・
     シマウマ）には触れない。鳥舎前の注意はカメラのフラッシュの1点のみ。開園50周年
     （Q76）は前週の出産とは別の段落で述べ、出産を「特別な日」の根拠にしていない。
     催しも「園内各所（throughout the park）」に限定し、街全体の催しだとは述べていない。
     新規固有名詞なし（園名 Ottery は設問案の固定語）。level は監査の結論により
     据え置き（3。すべて逐語または直接の言及）。 */
  talk({
    n: [74, 75, 76], lv: 3, k: 'announcement',
    s: [
      { role: 'M-Br', text: `Good morning, and welcome to Ottery Zoo! We're delighted to share that a red panda cub was born here last week — she's already exploring her enclosure with her mother, so keep an eye out near the bamboo garden.` },
      { role: 'M-Br', text: `Before you head into the aviary, please make sure your camera's flash is turned off; the birds inside are sensitive to bright light.` },
      { role: 'M-Br', text: `Feel free to pick up a map at the entrance gate, and check the show times board near the café for today's keeper talks.` },
      { role: 'M-Br', text: `Also, today marks fifty years since the zoo first opened its gates, and we've got a few surprises planned throughout the park this afternoon to mark the occasion.` },
      { role: 'M-Br', text: `Enjoy your visit, and thank you for supporting Ottery Zoo.` },
    ],
    ja: `Ottery Zoo の来園者向け園内放送。先週レッサーパンダの赤ちゃんが生まれたことを伝え、母親と一緒に囲いの中にいる様子を竹林の辺りで見られると案内する。鳥舎に入る前にはカメラのフラッシュを切っておくよう頼み、入口でのマップの受け取りや、カフェ付近の掲示板での飼育員によるトークの時間確認も勧める。さらに、今日が開園50周年の節目であり、園内各所で記念のサプライズを用意していると伝える。`,
    v: [['cub', '（動物の）赤ちゃん、幼獣'], ['enclosure', '（動物の）飼育スペース、囲い'], ['aviary', '鳥舎'], ['flash', '（カメラの）フラッシュ']],
    q: [
      { tag: '詳細', qid: 'v2q74p', s: 'According to the announcement, what was born at the zoo last week?',
        c: ['A giraffe calf', 'A pygmy hippo', 'A red panda cub', 'A baby zebra'],
        a: 2,
        e: `"a red panda cub was born here last week"と述べている。`,
        w: [
          `キリンの赤ちゃんについての言及はない。`,
          `コビトカバについての言及はない。`,
          `正解。"a red panda cub was born here last week"と述べている。`,
          `シマウマの赤ちゃんについての言及はない。`,
        ] },
      { tag: '詳細', qid: 'v2q75p', s: 'What does the announcement ask visitors to do before entering the aviary?',
        c: ['Store food items in a locker', 'Switch off the flash on cameras', 'Put away shiny jewelry', 'Leave strollers in a designated area'],
        a: 1,
        e: `"Before you head into the aviary, please make sure your camera's flash is turned off"と頼んでいる。`,
        w: [
          `食べ物をロッカーに預けるよう求める記述はない。`,
          `正解。"Before you head into the aviary, please make sure your camera's flash is turned off"と頼んでいる。`,
          `光る装身具をしまうよう求める記述はない。`,
          `ベビーカーを所定の場所に置くよう求める記述はない。`,
        ] },
      { tag: '推測', qid: 'v2q76p', s: 'What is suggested about the zoo today?',
        c: ['It is trying out a new entry system', 'It is operating with reduced staff', 'It is participating in a citywide event', 'It is celebrating a founding anniversary'],
        a: 3,
        e: `"today marks fifty years since the zoo first opened its gates"と、開園から50年の節目であることを述べている。`,
        w: [
          `新しい入場方式についての言及はない。`,
          `人手不足についての言及はない。`,
          `催しは"throughout the park"（園内各所）に限定されており、街全体の催しだとは述べていない。`,
          `正解。"today marks fifty years since the zoo first opened its gates"と、開園50周年の節目であることを述べている。`,
        ] },
    ],
  }),

  /* ── 77–79 朝礼の抜粋（化粧品工場） ──────────────────────
     くじは No.77=D, 78=B, 79=D。**2026-09-29 監査第1巡で修正、第2巡で軽微1点を修正**：
     Q78＝直前だけでは「(B)空きのあるラインで試す」「(D)前倒しで進んでいるので日程は
     安心」の2通りが立ち、直後の文でしか閉じていなかった（旧S3の"this is only a
     short-term fix"のthis も、まだ言及していない対応策を先取りして指す語順の誤り
     だった）。S3〜S5 を「空きのあるラインが要る、という問いを直前に立て、引用がその
     答え（ライン2）になる」形に書き換えた。【第2巡】S5後半の"so that's where the
     trial batch will go"が**決定の告知**で、正解 (B) "To propose a place"（提案）と
     言語行為がずれていたため、"so let's run the trial batch there"（提案）に戻した。
     話題はクリーム用原料の不足のみに絞り、他の3話題（梱包材のリサイクル・新しい機械・
     小売バイヤーの来訪）には触れない。休憩室の新しい物は大きいテーブルの1点のみ。
     新規固有名詞なし（社名 Joliffe は設問案の固定語）。level は付け直さない（3。
     前巡の監査の結論のまま）。 */
  talk({
    n: [77, 78, 79], lv: 3, k: 'excerpt from a meeting',
    s: [
      { role: 'M-Cn', text: `Morning, everyone, before you clock in — a quick update on the rose-and-honey moisturizer line.` },
      { role: 'M-Cn', text: `Our supplier's had a delay shipping in the plant extract we use for that cream, so we're going to be short of it for a few days.` },
      { role: 'M-Cn', text: `To keep the batches moving, we've adjusted the recipe slightly to use a bit less of it, just until a fresh shipment arrives on Thursday.` },
      { role: 'M-Cn', text: `Before that adjusted formula goes into full production, though, we need to try it out on a line with some spare time this morning.` },
      { role: 'M-Cn', text: `Line two finished early yesterday, so let's run the trial batch there once the shift starts.` },
      { role: 'M-Cn', text: `One more thing — you'll notice the break room now has a bigger table, so the whole shift can sit together at lunch.` },
      { role: 'M-Cn', text: `That's all for today. Thanks, and let's get started.` },
    ],
    ja: `始業前の打ち合わせ。ローズ&ハニーの保湿クリームに使う植物由来の成分の入荷が遅れ、数日分が不足する見込みであることを伝える。生産を止めないよう、木曜に新しい入荷が届くまでの間、配合をわずかに調整して使用量を減らすと説明する。その調整した配合を本格導入する前に、今朝、空きのあるラインで試したいと述べ、昨日早めに作業が終わったライン2でその試作を行おうと提案する。最後に、休憩室のテーブルが大きい物に替わり、シフト全員が一緒に座れるようになったと伝える。`,
    v: [['moisturizer', '保湿剤'], ['plant extract', '植物由来の成分、植物エキス'], ['batch', '（生産の）1回分、バッチ'], ['formula', '配合、処方']],
    q: [
      { tag: '概要', qid: 'v2q77p', s: 'What is the speaker mainly discussing?',
        c: ['A recycling program for packaging waste', 'A new machine on the packing line', 'A visit from a group of retail buyers', 'A shortage of an ingredient for a cream'],
        a: 3,
        e: `"Our supplier's had a delay shipping in the plant extract we use for that cream, so we're going to be short of it for a few days"と、クリームに使う原料が不足する見込みであることを述べている。`,
        w: [
          `梱包材のリサイクル計画についての言及はない。`,
          `新しい機械についての言及はない。`,
          `小売バイヤーの来訪についての言及はない。`,
          `正解。"Our supplier's had a delay shipping in the plant extract we use for that cream, so we're going to be short of it for a few days"と述べている。`,
        ] },
      { tag: '意図', t: ['p3int'], qid: 'v2q78p', s: 'Why does the speaker say, "Line two finished early yesterday"?',
        c: ['To praise a group of workers', 'To propose a place to run a test', 'To raise a concern about quality', 'To reassure staff about a deadline'],
        a: 1,
        e: `直前の"we need to try it out on a line with some spare time this morning"で空きのあるラインを探しており、引用の"Line two finished early yesterday"がその答えとしてライン2を挙げ、直後の"so let's run the trial batch there once the shift starts"と提案を続けている。よって試験を行う場所を提案する意図である。`,
        w: [
          `称賛ではない。作業員を褒める記述はない。`,
          `正解。直前の"we need to try it out on a line with some spare time this morning"を受けて、引用が"Line two finished early yesterday"と空きのあるラインを挙げ、"so let's run the trial batch there"と、試験を行う場所を提案している。`,
          `品質への懸念を示す発言ではない。調整した配合を本格導入の前に試すことは、直前の"we need to try it out on a line with some spare time this morning"で述べられており、引用はその試作を行う場所としてライン2を挙げたもの。直後も"so let's run the trial batch there"と場所の話に進み、品質に問題があるとは述べていない。`,
          `納期についての言及はない。`,
        ] },
      { tag: '詳細', qid: 'v2q79p', s: 'What does the speaker say is new in the break room?',
        c: ['A second microwave oven', 'A filtered water dispenser', 'A shelf of books to borrow', 'A larger table for meals'],
        a: 3,
        e: `"you'll notice the break room now has a bigger table"と述べている。`,
        w: [
          `2台目の電子レンジについての言及はない。`,
          `浄水器についての言及はない。`,
          `貸し出し用の本棚についての言及はない。`,
          `正解。"you'll notice the break room now has a bigger table"と述べている。`,
        ] },
    ],
  }),

  /* ── 80–82 ラジオ広告（子ども向け科学教室） ──────────────────────
     くじは No.80=D, 81=C, 82=A。**2026-09-29 監査第1巡で軽微1点、第2巡で要修正1点を
     修正**：語数調整で足していた S2 の"the experiments we design get used
     nationwide"が、S3 の"sent out to schools and community groups across the
     region"（全国 vs 地域）と食い違っていたため、S2 を場所の説明だけに削った。
     【第2巡】S5 の"cover note"は LDOCE・Wiktionary とも「保険の仮証書」の語義しか
     立てておらず、vocab「添え状」と辞書上で衝突していたため（学習者が辞書を引くと
     解説と矛盾する）、"covering letter"（LDOCE に地域ラベルなしで「添え状」の語義が
     ある）に差し替えた。募集する仕事は実験の考案業務のみに絞り、"you won't be
     running workshops yourself"と教える仕事であることを明示的に否定して閉じた
     （1問1本の範囲内）。応募条件は第二言語の堪能さのみ、応募方法は履歴書のメール
     送付のみに絞り、他の選択肢（経験年数・週末の勤務可否・身元確認、オンライン応募・
     面接会・電話）には一切触れない。新規固有名詞なし（社名 Osgrove は設問案の固定語。
     メールドメイン jobs@osgroveworkshops.com は社名からの派生で新規固有名詞ではない）。
     level は付け直さない（3。前巡の監査の結論のまま）。 */
  talk({
    n: [80, 81, 82], lv: 3, k: 'advertisement',
    s: [
      { role: 'M-Au', text: `Osgrove Science Workshops is hiring a creative mind for our experiment design team.` },
      { role: 'M-Au', text: `Our small team is based just outside the city.` },
      { role: 'M-Au', text: `In this role, you won't be running workshops yourself — you'll be behind the scenes, developing brand-new hands-on experiments that get sent out to schools and community groups across the region.` },
      { role: 'M-Au', text: `This year we're publishing our activity guides in two languages, so we're specifically looking for someone who's fluent in a second language and comfortable writing instructions in both.` },
      { role: 'M-Au', text: `If that sounds like you, send your résumé and a short covering letter to jobs@osgroveworkshops.com. We'd love to see examples of any hands-on projects you've designed before, even from school or volunteer work.` },
      { role: 'M-Au', text: `Osgrove Science Workshops — sparking curiosity, one experiment at a time.` },
    ],
    ja: `子ども向け科学教室 Osgrove Science Workshops のラジオ求人広告。教室を実際に教える仕事ではなく、学校や地域団体に配布する新しい体験型の実験を考案する仕事であると説明する。今年は活動用のガイドを2か国語で発行する予定のため、第二言語が堪能で両方の言語で説明文が書ける人を求めていると述べる。応募は、履歴書と簡単な添え状をメールで送るよう案内する。`,
    v: [['hands-on', '体験型の、実地の'], ['fluent', '堪能な'], ['covering letter', '添え状'], ['résumé', '履歴書']],
    q: [
      { tag: '概要', qid: 'v2q80p', s: 'What is being advertised?',
        c: ['Teaching jobs in after-school classes', 'Office work handling bookings', 'Driving jobs for a mobile lab', 'Design work on new experiments'],
        a: 3,
        e: `"you'll be... developing brand-new hands-on experiments"と、実験を考案する仕事であると述べている。`,
        w: [
          `本文で"you won't be running workshops yourself"と明確に否定されており、教える仕事ではない。`,
          `予約の事務作業についての言及はない。`,
          `移動式の実験室を運転する仕事についての言及はない。`,
          `正解。"you'll be behind the scenes, developing brand-new hands-on experiments"と述べている。`,
        ] },
      { tag: '詳細', qid: 'v2q81p', s: 'According to the advertisement, what is required of applicants?',
        c: ['Two years of related experience', 'Availability on weekends', 'Fluency in a second language', 'Clearance from a background check'],
        a: 2,
        e: `"we're specifically looking for someone who's fluent in a second language"と述べている。`,
        w: [
          `経験年数についての言及はない。`,
          `週末の勤務可否についての言及はない。`,
          `正解。"we're specifically looking for someone who's fluent in a second language"と述べている。`,
          `身元確認についての言及はない。`,
        ] },
      { tag: '詳細', qid: 'v2q82p', s: 'How should interested listeners apply?',
        c: ['By sending a résumé by e-mail', 'By filling out a form online', 'By attending an open interview day', 'By calling the main office'],
        a: 0,
        e: `"send your résumé and a short covering letter to jobs@osgroveworkshops.com"と述べている。`,
        w: [
          `正解。"send your résumé and a short covering letter to jobs@osgroveworkshops.com"と、メールでの応募方法を伝えている。`,
          `オンラインフォームへの入力についての言及はない。`,
          `面接会への参加についての言及はない。`,
          `電話での応募についての言及はない。`,
        ] },
    ],
  }),

  /* ── 83–85 案内（植物園） ──────────────────────
     くじは No.83=A, 84=C, 85=D。**2026-09-29 監査第1巡で2点を修正**：①Q84＝直前が
     植物の説明（S2）と「そこへ向かう」（S3前半）だけでは (B)植物選定の理由・(C)暑い
     道への注意・(A)撮影スポットの3通りが立ち、直後の文でしか閉じていなかった。さらに
     正解選択肢の"path"に当たる語が本文に無かった。S3 を「これから歩く砂利の遊歩道
     （西向きの斜面を登る）」という直前の"問い"に書き換え、引用の"That section"が
     その道の区間を指すことで直前だけで閉じるようにした（walkway ⇔ path の言い換え。
     west-facing は「午後に日が当たる」との整合のため）。②Q85＝S4 の「歩きの途中で
     ひとり抜けて休憩する」という案内役の発話として不自然な言い回しを、「見学の後に
     戻って休憩する」に直した。【第2巡】why(A) が根拠を示さず否定を言い直しただけ
     だったため、「写真・撮影への言及はない」と対象を名指ししたうえで、直後の文が
     備え（帽子・水）を勧めていることを補った。話の目的は新しいロックガーデンの
     紹介のみに絞り、他の3話題（音声ガイド・ピクニック方針・会員プログラム）には
     触れない。カフェについて述べるのは水生植物園を見渡せる点のみ。新規固有名詞なし
     （園名 Jephcott は設問案の固定語）。level は付け直さない（3。前巡の監査の結論の
     まま）。 */
  talk({
    n: [83, 84, 85], lv: 3, k: 'talk',
    s: [
      { role: 'W-Am', text: `Good afternoon, everyone, and welcome to Jephcott Botanical Garden. I'm delighted to introduce you to our new rock garden, which opened to the public just last month after two years of planning.` },
      { role: 'W-Am', text: `The new garden brings together alpine plants from three continents, arranged around a series of small streams.` },
      { role: 'W-Am', text: `In a few minutes we'll head out there together along the gravel walkway that climbs the west-facing slope. That section gets full sun in the afternoon, so it's worth grabbing a hat and some water before we set off.` },
      { role: 'W-Am', text: `Along the way, you'll pass our café, which sits right above the pond and looks out over the whole water garden — a nice spot to come back to for a break once we're done.` },
      { role: 'W-Am', text: `Feel free to ask questions as we go. Let's get started.` },
    ],
    ja: `Jephcott Botanical Garden の職員による、ホールに集まった来園者向けの案内。先月2年の準備を経て一般公開されたばかりの新しいロックガーデンを紹介し、3つの大陸の高山植物を小川のまわりに配した造りだと説明する。これから西向きの斜面を登る砂利敷きの遊歩道を通ってそこへ向かうが、その区間は午後に日差しが強いので、出発前に帽子と水を用意しておくとよいと伝える。道中通るカフェは池のすぐ上にあり、水生植物園全体を見渡せる、見学の後に戻ってひと休みするのにちょうどよい場所だと述べる。`,
    v: [['alpine', '高山性の'], ['stream', '小川'], ['pond', '池'], ['water garden', '水生植物園']],
    q: [
      { tag: '概要', qid: 'v2q83p', s: 'Why is the speaker giving the talk?',
        c: ['To introduce a recently opened area of the garden', 'To explain how to use a new audio guide', 'To announce a new policy on picnics', 'To promote a new membership program for families'],
        a: 0,
        e: `"I'm delighted to introduce you to our new rock garden, which opened to the public just last month"と、最近開いた区画を紹介する目的を述べている。`,
        w: [
          `正解。"I'm delighted to introduce you to our new rock garden, which opened to the public just last month"と述べている。`,
          `新しい音声ガイドについての言及はない。`,
          `ピクニックの新方針についての言及はない。`,
          `家族向け会員プログラムについての言及はない。`,
        ] },
      { tag: '意図', t: ['p3int'], qid: 'v2q84p', s: 'Why does the speaker say, "That section gets full sun in the afternoon"?',
        c: ['To recommend a good spot for photographs', 'To explain the choice of certain plants', 'To warn visitors about a hot path', 'To correct a visitor\'s mistaken belief'],
        a: 2,
        e: `直前で"we'll head out there together along the gravel walkway that climbs the west-facing slope"とこれから歩く道に触れ、引用の直後で"so it's worth grabbing a hat and some water before we set off"と続けており、歩く道の日差しの強さについて注意を促している。`,
        w: [
          `写真・撮影への言及はない。直後は"it's worth grabbing a hat and some water before we set off"と、歩く人の備えを勧めている。`,
          `直前で話しているのは"the gravel walkway that climbs the west-facing slope"というこれから歩く道であり、植物を選んだ理由の説明ではない。`,
          `正解。直前の"we'll head out there together along the gravel walkway that climbs the west-facing slope"を受けて、引用の直後で"it's worth grabbing a hat and some water before we set off"と、歩く道の日差しの強さについて注意を促している。`,
          `来園者の思い違いを訂正する記述はない。`,
        ] },
      { tag: '詳細', qid: 'v2q85p', s: 'What does the speaker mention about the garden\'s café?',
        c: ['It offers discounts on weekday mornings', 'It cooks with herbs from the garden', 'It closes before the garden does', 'It overlooks the water garden'],
        a: 3,
        e: `"our café, which sits right above the pond and looks out over the whole water garden"と述べている。`,
        w: [
          `平日午前の割引についての言及はない。`,
          `園内のハーブを使った調理についての言及はない。`,
          `閉園時間についての言及はない。`,
          `正解。"our café, which sits right above the pond and looks out over the whole water garden"と述べている。`,
        ] },
    ],
  }),

  /* ── 86–88 自動音声案内（会計事務所） ──────────────────────
     くじは No.86=D, 87=D, 88=B。**2026-09-29 監査第1巡で修正、第2巡で ja を修正**：
     S2 の"when we return your call"（事務所が折り返す＝伝言を残して切る前提）が、S3
     の「切らずに待てば担当者につながる」とぶつかり、(B)「希望日を添えた伝言」を誘って
     いた。S2 を「初回の来所に備えて書類を用意する」形に書き換え、折り返しの含みを
     消した。【第2巡】ja の「口座開設の前に」が"open an account for you"（会計事務所の
     顧客としての登録）の訳としてずれ、(C) 銀行口座の読みを誘っていたため、「顧客
     として登録する前に」に直した。新規の客に用意を頼む書類は自宅住所の証明のみに
     絞り、他の3つ（経費の領収書・前年の確定申告書・銀行口座の一覧）には触れない。
     予約の方法は"there's no need to press anything — just stay on the line"と、
     番号を押す選択肢を明示的に否定して「電話を切らずに待つ」の1点に絞った（1問1本
     の範囲内。伝言や予約サイトへの言及はない）。急ぎの客への案内は専用メールアドレス
     の1点のみ。新規固有名詞なし（社名 Overbury は設問案の固定語。メールドメイン
     urgent@overburyaccounting.co.uk は社名からの派生）。level は付け直さない（3。
     前巡の監査の結論のまま）。 */
  talk({
    n: [86, 87, 88], lv: 3, k: 'recorded message',
    s: [
      { role: 'M-Br', text: `Thank you for calling Overbury Accounting Group. Our office hours are Monday to Friday, nine to five, and this message will guide you through a few options.` },
      { role: 'M-Br', text: `If you're a new client, please have proof of your home address ready for your first appointment, as we're required to keep one on file before we can open an account for you.` },
      { role: 'M-Br', text: `To arrange an appointment with an advisor, there's no need to press anything — just stay on the line, and a member of our scheduling team will be with you as soon as one is free.` },
      { role: 'M-Br', text: `If you have an urgent filing deadline, e-mail urgent@overburyaccounting.co.uk directly, and a senior advisor will get back to you within the hour.` },
      { role: 'M-Br', text: `Thank you for your patience, and we look forward to speaking with you.` },
    ],
    ja: `会計事務所 Overbury Accounting Group に電話をかけた際の自動音声案内。新規の顧客には、初回の面談に向けて、顧客として登録する前に保管が必要な自宅住所の証明書類を用意しておくよう求める。予約の相談は、番号を押す必要はなく、そのまま電話を切らずに待てば担当者につながると案内する。提出期限が差し迫っている場合は専用のメールアドレスへ直接連絡するよう伝え、担当者から1時間以内に返信すると述べる。`,
    v: [['proof', '証明書類'], ['advisor', '担当者'], ['filing deadline', '提出期限'], ['senior advisor', '上級担当者']],
    q: [
      { tag: '詳細', qid: 'v2q86p', s: 'What does the recording ask new clients to have ready?',
        c: ['Receipts for business expenses', 'Last year\'s tax return', 'A list of bank accounts', 'Proof of home address'],
        a: 3,
        e: `"please have proof of your home address ready"と述べている。`,
        w: [
          `経費の領収書についての言及はない。`,
          `前年の確定申告書についての言及はない。`,
          `銀行口座の一覧についての言及はない。`,
          `正解。"please have proof of your home address ready"と述べている。`,
        ] },
      { tag: '詳細', qid: 'v2q87p', s: 'What does the recording say clients should do to schedule an appointment?',
        c: ['Press a number to reach the scheduling desk', 'Leave a message with a preferred date', 'Visit the firm\'s website to book online', 'Wait on the line for assistance'],
        a: 3,
        e: `"there's no need to press anything — just stay on the line, and a member of our scheduling team will be with you"と述べている。`,
        w: [
          `本文で"there's no need to press anything"と明確に否定されている。`,
          `希望日を添えた伝言についての言及はない。`,
          `ウェブサイトでの予約についての言及はない。`,
          `正解。"just stay on the line, and a member of our scheduling team will be with you"と述べている。`,
        ] },
      { tag: '詳細', qid: 'v2q88p', s: 'What are callers with an urgent deadline told to do?',
        c: ['Press a number for a priority line', 'Send an e-mail to a dedicated address', 'Call a staff member\'s mobile phone', 'Come to the office in person'],
        a: 1,
        e: `"e-mail urgent@overburyaccounting.co.uk directly, and a senior advisor will get back to you within the hour"と述べている。`,
        w: [
          `優先電話回線の番号についての言及はない。`,
          `正解。"e-mail urgent@overburyaccounting.co.uk directly"と述べている。`,
          `担当者の携帯電話への連絡についての言及はない。`,
          `来所についての言及はない。`,
        ] },
    ],
  }),

  /* ── 89–91 合唱団の練習（合唱祭、図表あり） ──────────────────────
     くじは No.89=C（Slot 19）, 90=B, 91=A。**2026-09-29 監査第1巡で修正**：旧 S2・S3
     がどちらも "X, rather than Y" で、2×2 では不要な打ち消しを Q89 1問に2本置いて
     おり（Q90 の "couldn't fit us in" と合わせるとユニット3本で上限超過）、さらに
     "we're staying at"（宿泊）と誤読される余地・自団に部門を告げる不自然さ・
     "across town" と "travelling up" の町の揺れがあった。S2・S3 を「団員から部門を
     尋ねられたので伝える」という自然な理由づけに変え、肯定文1本ずつで手がかりを
     渡す形に書き換えた（rather than 節を撤去。明示的な打ち消しはユニットで Q90 の
     1本のみに）。表の語（Slot の番号・Mixed voices・Treble voices・Assembly Rooms・
     Parish Church、church・voices を含む）は音声に出さず、部門は「高い声だけの合唱団
     の部門」、会場は「舞踏会に200年使われてきた建物」に言い換えた（town hall と紛れ
     ないよう hall・広場は使っていない）。2つの手がかりを別々の文で伝え、表と組み合わ
     せて初めて Slot 19 に一意に絞られる（音声だけ・表だけではいずれも1/4のまま）。
     Slot の出演順・時刻には触れていない。移動手段はバス便が取れず電車になったと述べ
     （"couldn't fit us in"、1問1本の否定）、次回配る物は楽譜の1点のみ。新規固有名詞
     なし（団体名 Jessop は設問案の固定語）。**第2巡で軽微2点を修正**：①why(B)(D) の
     "Parish Church（鐘楼とステンドグラスのある建物）" が旧本文（差し替え前）の言い換え
     の残りだったため、今の本文に鐘楼もステンドグラスも出ない以上、素直な語義注
     "Parish Church（教区の教会）" に直した。②S3 の"the town's dances"が、先行詞の
     無い"the town"と"travelling up by train"（よその町へ行く）で一瞬揺れたため、
     "the town's"を削り"that's been hosting dances for two hundred years"に直した
     （教会は舞踏会を開かないので Parish Church の2行は変わらず落ちる。town hall との
     混同も無くなる）。level は付け直さない（4。前巡の監査の結論のまま）。 */
  talk({
    n: [89, 90, 91], lv: 4, k: 'talk', t: ['graphic', 'p4type'],
    graphic: {
      t: 'table', title: 'Festival Performance Slots',
      head: ['Slot', 'Class', 'Venue'],
      rows: [
        ['Slot 12', 'Mixed voices', 'Assembly Rooms'],
        ['Slot 5', 'Treble voices', 'Parish Church'],
        ['Slot 19', 'Treble voices', 'Assembly Rooms'],
        ['Slot 8', 'Mixed voices', 'Parish Church'],
      ],
    },
    s: [
      { role: 'W-Au', text: `Right, before we start today's warm-up, let's go over the details for next month's festival.` },
      { role: 'W-Au', text: `Since the entry forms went in last week, a few of you have asked which class we're in: it's the one for choirs that sing only in the higher register.` },
      { role: 'W-Au', text: `As for the venue, we'll be singing in the elegant building that's been hosting dances for two hundred years.` },
      { role: 'W-Au', text: `The coach company couldn't fit us in this year, so we'll be travelling up by train instead — the organisers have arranged discounted group tickets for the whole choir.` },
      { role: 'W-Au', text: `At our next rehearsal, I'll be handing out printed copies of the new piece we're adding to the programme, so make sure you're here.` },
      { role: 'W-Au', text: `Right, let's get warming up.` },
    ],
    ja: `合唱団の練習冒頭、指揮者が来月の合唱祭について団員に説明する。先週出場申込書を提出したところ団員から部門を尋ねられたと述べ、今回出演するのは高い声だけの合唱団の部門であると伝える。会場については、200年にわたって舞踏会の会場になってきた建物で歌うと述べる。今年はバスの手配ができなかったため電車で向かうことになり、主催者が団体割引のきっぷを手配したと伝える。次回の練習では、新しく取り入れる曲の楽譜を配布すると案内する。`,
    v: [['register', '（声の）音域'], ['organiser', '主催者'], ['discounted', '割引の'], ['rehearsal', '練習']],
    q: [
      { tag: '図表', qid: 'v2q89p', s: 'Look at the graphic. Which slot will the choir perform in?',
        c: ['Slot 12', 'Slot 5', 'Slot 19', 'Slot 8'],
        a: 2,
        e: `指揮者は出演枠について「高い声だけの合唱団の部門」（"it's the one for choirs that sing only in the higher register"）、かつ「200年にわたって舞踏会の会場になってきた建物」（"we'll be singing in the elegant building that's been hosting dances for two hundred years"）と、2つの手がかりを別々の文で述べている。表で Treble voices（高い声だけの部門）かつ Assembly Rooms（舞踏会に使われてきた建物）に該当するのは Slot 19 だけである。`,
        w: [
          `Slot 12 は表で Mixed voices（男女がそろう部門）かつ Assembly Rooms（舞踏会に使われてきた建物）であり、会場は一致するが、部門が「高い声だけの部門」という条件に合わない。`,
          `Slot 5 は表で Treble voices（高い声だけの部門）かつ Parish Church（教区の教会）であり、部門は一致するが、会場が「舞踏会に使われてきた建物」という条件に合わない。`,
          `正解。表で Treble voices（高い声だけの部門）かつ Assembly Rooms（舞踏会に使われてきた建物）に該当するのは Slot 19 のみで、指揮者が挙げた2つの条件の両方に一致する。`,
          `Slot 8 は表で Mixed voices（男女がそろう部門）かつ Parish Church（教区の教会）であり、いずれの条件にも合わない。`,
        ] },
      { tag: '詳細', t: ['p4type'], qid: 'v2q90p', s: 'According to the speaker, how will the choir travel to the festival?',
        c: ['By coach from the town hall', 'By train on group tickets', 'By car in shared rides', 'By minibus the festival provides'],
        a: 1,
        e: `"we'll be travelling up by train instead — the organisers have arranged discounted group tickets for the whole choir"と述べている。`,
        w: [
          `本文で"The coach company couldn't fit us in this year"と明確に否定されている。`,
          `正解。"we'll be travelling up by train instead — the organisers have arranged discounted group tickets for the whole choir"と述べている。`,
          `相乗りの車についての言及はない。`,
          `主催者が用意するミニバスについての言及はない。`,
        ] },
      { tag: '詳細', t: ['p4type'], qid: 'v2q91p', s: 'What will members receive at the next rehearsal?',
        c: ['Printed copies of new music', 'Name badges for the festival', 'A schedule for the trip', 'Tickets for family members'],
        a: 0,
        e: `"I'll be handing out printed copies of the new piece we're adding to the programme"と述べている。`,
        w: [
          `正解。"I'll be handing out printed copies of the new piece we're adding to the programme"と述べている。`,
          `名札についての言及はない。`,
          `移動の日程表についての言及はない。`,
          `家族用のチケットについての言及はない。`,
        ] },
    ],
  }),

  /* ── 92–94 店内放送（百貨店） ──────────────────────
     くじは No.92=C, 93=B, 94=A。**2026-09-29 監査第1巡で軽微1点を修正**：話し手の
     ロール W-Cn（カナダ）が英式寄りの"till"を使い、同じ放送内の"elevators"（米式）と
     語法が揃っていなかったため"checkout"に直した。放送の主な話題はエスカレーターの
     一時停止のみに絞り、他の3話題（値引きの催し・調理家電の実演・遺失物の受付）には
     触れない。抽選の応募方法はストアカードへの登録のみ（"no purchase necessary"で
     購入条件を明示的に否定。1問1本）、退店前の注意は駐車券の認証のみに絞った。新規
     固有名詞なし（店名 Oxendale's は設問案の固定語）。level は監査の結論により据え
     置き（3。すべて逐語）。 */
  talk({
    n: [92, 93, 94], lv: 3, k: 'announcement',
    s: [
      { role: 'W-Cn', text: `Attention, shoppers: for your safety, the escalator between the second and third floors is temporarily out of service while our engineers complete some routine maintenance.` },
      { role: 'W-Cn', text: `We expect it back in service by this afternoon, so please use the elevators near the food hall in the meantime. We apologize for any inconvenience this may cause.` },
      { role: 'W-Cn', text: `While you're here, you can enter today's prize drawing simply by signing up for an Oxendale's store card at any checkout — no purchase necessary.` },
      { role: 'W-Cn', text: `And before you leave, please remember to have your parking ticket validated at the front desk; without it, the machine at the exit will charge the full rate.` },
      { role: 'W-Cn', text: `Our customer service desk on the ground floor is also here to help with any questions.` },
      { role: 'W-Cn', text: `Thank you for shopping with us at Oxendale's.` },
    ],
    ja: `Oxendale's の店内放送。安全のため、2階と3階の間のエスカレーターが定期点検のため一時停止中であることを伝え、近くのエレベーターの利用と、ご不便への謝罪を述べる。あわせて、Oxendale's のストアカードに登録するだけで本日の抽選に応募できること（購入は不要）を案内する。最後に、退店前に総合案内で駐車券の認証を受けるよう呼びかける（認証がないと出口の機械で満額を請求される）。1階の接客カウンターでも質問を受け付けていると付け加える。`,
    v: [['escalator', 'エスカレーター'], ['routine maintenance', '定期点検'], ['prize drawing', '抽選'], ['validate', '（駐車券などを）認証する']],
    q: [
      { tag: '概要', qid: 'v2q92p', s: 'What is the announcement mainly about?',
        c: ['A special discount event today', 'A demonstration of new kitchen appliances', 'A temporary closure of an escalator', 'A collection point for lost belongings'],
        a: 2,
        e: `"the escalator between the second and third floors is temporarily out of service"と述べている。`,
        w: [
          `値引きの催しについての言及はない。`,
          `調理家電の実演についての言及はない。`,
          `正解。"the escalator between the second and third floors is temporarily out of service"と述べている。`,
          `遺失物の受付についての言及はない。`,
        ] },
      { tag: '詳細', qid: 'v2q93p', s: 'According to the announcement, how can shoppers enter a prize drawing?',
        c: ['By spending over a set amount', 'By signing up for a store card', 'By posting a photo online', 'By filling out a short survey'],
        a: 1,
        e: `"you can enter today's prize drawing simply by signing up for an Oxendale's store card at any checkout — no purchase necessary"と述べている。`,
        w: [
          `本文で"no purchase necessary"と明確に否定されており、一定額以上の購入は条件ではない。`,
          `正解。"you can enter today's prize drawing simply by signing up for an Oxendale's store card at any checkout"と述べている。`,
          `写真の投稿についての言及はない。`,
          `アンケートへの回答についての言及はない。`,
        ] },
      { tag: '詳細', qid: 'v2q94p', s: 'What does the announcement remind shoppers to do before leaving?',
        c: ['Validate their parking ticket at the front desk', 'Collect their coats from the cloakroom', 'Pick up a copy of the store\'s catalog', 'Return shopping baskets to the entrance'],
        a: 0,
        e: `"please remember to have your parking ticket validated at the front desk"と述べている。`,
        w: [
          `正解。"please remember to have your parking ticket validated at the front desk"と述べている。`,
          `クロークでのコートの受け取りについての言及はない。`,
          `カタログの受け取りについての言及はない。`,
          `買い物かごの返却についての言及はない。`,
        ] },
    ],
  }),

  /* ── 95–97 ラジオ放送（市民マラソン） ──────────────────────
     くじは No.95=A, 96=B, 97=B。**2026-09-29 監査第1巡で軽微2点、第2巡で軽微1点を
     修正**：①why(D) が「ラジオでの実況には触れているが」と作り話を書いていた（本文は
     結果とハイライトを"this evening's broadcast"で伝えると言っているだけで、実況とは
     述べていない）ため書き直した。②ja の「今週末の Judson City Marathon」が、
     S1"Race day has finally arrived … this morning"（レース当日の朝の放送）とずれて
     いたため「本日行われる」に修正。【第2巡】S2 の変更理由"concerns about crowding
     at last year's spot"が、Q97(A)「参加者が昨年より多い」の連想の足場になっていた
     （混雑＝人が増えたという連想。本文は人数を比較していないので偽のままだが、推測
     問題なので足場は消したい）ため、"construction work near last year's spot"（工事）
     に差し替えた（M-Am のロールに合わせ roadworks ではなく construction work を使用。
     S4 の当日の交通規制とはぶつからない）。スタート地点は市庁舎前の広場のみに絞り、
     他の3か所（競技場の入口・歴史的な橋のたもと・駅前）には触れない。レース後の催しは
     ゴール付近の小規模なコンサートのみに絞る。Q97 は、昨年の工事を理由にスタート
     地点が変わったと述べることでコース変更を示唆し、参加人数の比較・寄付・テレビ初
     中継には触れていない。新規固有名詞なし（大会名 Judson は設問案の固定語）。level
     は付け直さない（3。前巡の監査の結論のまま）。 */
  talk({
    n: [95, 96, 97], lv: 3, k: 'broadcast',
    s: [
      { role: 'M-Am', text: `Good morning, listeners. Race day has finally arrived for the Judson City Marathon, and thousands are expected to line the streets downtown this morning.` },
      { role: 'M-Am', text: `This year, organizers have moved the starting line to the plaza outside city hall, after construction work near last year's spot forced a change to the route.` },
      { role: 'M-Am', text: `Once the race wraps up, runners and spectators alike can head to the small concert set up near the finish line, where a couple of local bands will be playing through the early afternoon.` },
      { role: 'M-Am', text: `Road closures will be in effect downtown until early afternoon, so drivers are advised to plan alternate routes.` },
      { role: 'M-Am', text: `Temperatures should stay mild for the runners, with a light breeze expected through midday.` },
      { role: 'M-Am', text: `We'll have full results and highlights on this evening's broadcast.` },
    ],
    ja: `地域のラジオニュース。本日行われる Judson City Marathon について伝える。今年はスタート地点が市庁舎前の広場に変更されたことを、昨年の開始地点付近の工事を受けてコースが変わった経緯とともに説明する。レース終了後は、ゴール付近で小規模なコンサートが開かれ、地元のバンドが午後早くまで演奏すると案内する。中心街では午後早くまで交通規制が敷かれるため、ドライバーには迂回を呼びかける。気温は穏やかで、正午にかけて弱い風が吹く見込みだと伝える。`,
    v: [['spectator', '観客'], ['road closure', '交通規制'], ['alternate route', '迂回路'], ['breeze', 'そよ風']],
    q: [
      { tag: '詳細', qid: 'v2q95p', s: 'According to the broadcast, where will the race begin?',
        c: ['At the plaza outside city hall', 'At the entrance to a sports stadium', 'At the foot of a historic bridge', 'At the front of the train station'],
        a: 0,
        e: `"organizers have moved the starting line to the plaza outside city hall"と述べている。`,
        w: [
          `正解。"organizers have moved the starting line to the plaza outside city hall"と述べている。`,
          `競技場の入口についての言及はない。`,
          `歴史的な橋についての言及はない。`,
          `駅前についての言及はない。`,
        ] },
      { tag: '詳細', qid: 'v2q96p', s: 'What will take place after the race?',
        c: ['A ceremony to present awards', 'A concert near the finish line', 'A street market along the course', 'A free meal for runners'],
        a: 1,
        e: `"runners and spectators alike can head to the small concert set up near the finish line"と述べている。`,
        w: [
          `表彰式についての言及はない。`,
          `正解。"runners and spectators alike can head to the small concert set up near the finish line"と述べている。`,
          `沿道の市についての言及はない。`,
          `参加者への食事の提供についての言及はない。`,
        ] },
      { tag: '推測', qid: 'v2q97p', s: 'What is suggested about this year\'s marathon?',
        c: ['It has more entrants than last year\'s race', 'It follows a different course from last year', 'It raises money for a local charity', 'It appears on television for the first time'],
        a: 1,
        e: `"organizers have moved the starting line to the plaza outside city hall, after construction work near last year's spot forced a change to the route"と述べており、昨年と異なるコースになったことを示している。`,
        w: [
          `参加人数の比較についての言及はない。`,
          `正解。"construction work near last year's spot forced a change to the route"と、昨年と異なるコースになったことを示している。`,
          `慈善団体への寄付についての言及はない。`,
          `今夜の放送で結果とハイライトを伝えるとは言っているが（"We'll have full results and highlights on this evening's broadcast"）、テレビで初めて放映されるという言及はない。`,
        ] },
    ],
  }),

  /* ── 98–100 留守番電話（仕立て屋、図表あり） ──────────────────────
     くじは No.98=C（Jobling）, 99=C, 100=C。**2026-09-29 監査第1巡で修正**：旧 S5 の
     "the office nearer the middle of town, rather than the one attached to the
     mill itself" が town・mill という表のセルを区別する語そのものを音声に出して
     いた。さらに旧 S4・S5 がどちらも "X, rather than Y" で不要な打ち消しを Q98 1問に
     2本置いており（「1問1本まで」を超過）、しかも用件（配達日の問い合わせ）からは
     会計係に連絡する理由が無く、"an easy call for me to make" も事務所の場所と
     結びつかなかった。S4・S5 を「支払い確認待ちで保留になっていると考える」という
     自然な理由づけに変え、肯定文1本ずつで手がかりを渡す形に書き換えた（rather than
     節・town・mill を撤去。明示的な打ち消しは0本に）。あわせて S6 の
     "started teaching"（雇用かどうか一段弱い）を"took on … to learn the trade"に
     直し、Q100 の見習い雇用の読みをはっきりさせた。担当は「請求・支払いを扱う側」、
     事務所は「町なかの事務所」に言い換え、連絡先の人物は名前・敬称・he/she のいずれ
     でも指さず、2つの手がかりを別々の文で伝えて表と組み合わせて初めて Jobling に
     一意に絞られる（音声だけ・表だけではいずれも1/4のまま。常識〈配達の件なら発送係〉
     で解くと Jolley・Oxtoby に落ちる）。行の並び（Jolley, Oakden, Jobling, Oxtoby）は
     変更していない。生地が必要な理由は展示会用サンプルのみに絞り、他の3つ（ホテル
     制服・結婚式・定番商品の補充）には触れない。新規固有名詞なし（店名 Ormsby、表の
     4名 Jolley/Oakden/Jobling/Oxtoby は設問案の固定語）。**第2巡で要修正1点・軽微
     1点を修正**：①vocab の`billing`が本文に無かった（S4・S5 書き換えで消えた語）ため、
     本文の"invoices"に合わせて`invoice`に差し替えた。②S5"that team works out of
     your office in the city center"が「請求・支払いの担当はみな町の中心の事務所に
     いる」と一般化して聞こえ、表では Oakden も Accounts なのに Mill office にいる
     事実と食い違っていたため、S5 を「話し手が連絡する相手（S4 の"them"）の事務所が
     町の中心にある」という個別の言明に絞った（"Your office in the city center is
     just a few blocks from here, so I'll simply stop by and talk to them in
     person."）。them は S4 の"whoever looks after invoices and payments"を受ける
     ので、2つの手がかりは変わらず同一人物についてのもの。level は付け直さない（4。
     前巡の監査の結論のまま）。 */
  talk({
    n: [98, 99, 100], lv: 4, k: 'telephone message', t: ['graphic', 'p4type'],
    graphic: {
      t: 'table', title: 'Mill Contacts',
      head: ['Contact', 'Department', 'Office'],
      rows: [
        ['Jolley', 'Dispatch', 'Town office'],
        ['Oakden', 'Accounts', 'Mill office'],
        ['Jobling', 'Accounts', 'Town office'],
        ['Oxtoby', 'Dispatch', 'Mill office'],
      ],
    },
    s: [
      { role: 'W-Am', text: `Hi, it's Ormsby Tailoring calling about the tweed order I placed with you last week.` },
      { role: 'W-Am', text: `I need a decent length of it in hand before next week's trade show — we're bringing a set of new samples for buyers to look over, and I'd like this fabric included.` },
      { role: 'W-Am', text: `Could you let me know the delivery date as soon as you get this?` },
      { role: 'W-Am', text: `If I don't hear back by tomorrow, I'll assume the order is on hold until my payment clears, so I'll get in touch with whoever looks after invoices and payments.` },
      { role: 'W-Am', text: `Your office in the city center is just a few blocks from here, so I'll simply stop by and talk to them in person.` },
      { role: 'W-Am', text: `One more thing — since I took on a local teenager last month to learn the trade, there's been an extra pair of hands around the workshop, so do let me know if a faster turnaround is ever possible for future orders.` },
      { role: 'W-Am', text: `Thanks, and I look forward to hearing from you.` },
    ],
    ja: `仕立て屋 Ormsby Tailoring の店主から、生地の卸売業者の営業担当者に宛てた留守番電話。先週注文したツイード生地について、来週の展示会で買い手に見せる新作サンプル一式にこの生地を使いたいので、必要な分量を早めに用意してほしいと伝え、配達日を折り返し教えてほしいと頼む。もし翌日までに返事がなければ、支払いの確認待ちで保留になっているのだろうと考え、請求・支払いの担当者と話すため、ここから数区画の町なかの事務所に直接立ち寄ると伝える。最後に、先月から地元の若者を見習いとして迎えたおかげで工房の手が一人分増えたと触れ、今後の注文の納期を早められないか尋ねる。`,
    v: [['tweed', 'ツイード（生地）'], ['trade show', '展示会'], ['invoice', '請求書'], ['turnaround', '（注文から納品までの）所要時間']],
    q: [
      { tag: '図表', qid: 'v2q98p', s: 'Look at the graphic. Who will the speaker contact if there is no reply?',
        c: ['Jolley', 'Oakden', 'Jobling', 'Oxtoby'],
        a: 2,
        e: `話し手は返事が無い場合に連絡する相手について「支払いが確認できるまで保留になっていると考え、請求・支払いを扱う側に連絡する」（"I'll assume the order is on hold until my payment clears, so I'll get in touch with whoever looks after invoices and payments"）、かつ「その相手の事務所は町なかにある」（"Your office in the city center is just a few blocks from here, so I'll simply stop by and talk to them in person"）と、2つの手がかりを別々の文で述べている。表で Accounts（請求・支払いを扱う側）かつ Town office（町なかの事務所）に該当するのは Jobling だけである。`,
        w: [
          `Jolley は表で Dispatch（発送を扱う側）かつ Town office（町なかの事務所）であり、事務所は一致するが、担当が「請求・支払いを扱う側（"invoices and payments"）」という条件に合わない。`,
          `Oakden は表で Accounts（請求・支払いを扱う側）かつ Mill office（工場付設の事務所）であり、担当は一致するが、事務所が「町なかの事務所（"office in the city center"）」という条件に合わない。`,
          `正解。表で Accounts（請求・支払いを扱う側）かつ Town office（町なかの事務所）に該当するのは Jobling のみで、話し手が挙げた2つの条件の両方に一致する。`,
          `Oxtoby は表で Dispatch（発送を扱う側）かつ Mill office（工場付設の事務所）であり、いずれの条件にも合わない。`,
        ] },
      { tag: '詳細', t: ['p4type'], qid: 'v2q99p', s: 'Why does the speaker need the fabric?',
        c: ['To make uniforms for a hotel\'s staff', 'To fill an order for a wedding party', 'To prepare samples for a trade show', 'To restock a popular line of jackets'],
        a: 2,
        e: `"before next week's trade show — we're bringing a set of new samples for buyers to look over, and I'd like this fabric included"と述べている。`,
        w: [
          `ホテルの制服についての言及はない。`,
          `結婚式の注文についての言及はない。`,
          `正解。"before next week's trade show — we're bringing a set of new samples for buyers to look over"と述べている。`,
          `定番商品の補充についての言及はない。`,
        ] },
      { tag: '推測', t: ['p4type'], qid: 'v2q100p', s: 'What is suggested about the speaker?',
        c: ['The speaker has bought a new machine', 'The speaker has opened a second shop', 'The speaker has hired an apprentice', 'The speaker has recently returned from a trip'],
        a: 2,
        e: `"since I took on a local teenager last month to learn the trade, there's been an extra pair of hands around the workshop"と述べており、見習いを迎えたことをうかがわせる。`,
        w: [
          `新しい機械についての言及はない。`,
          `2店目の出店についての言及はない。`,
          `正解。"since I took on a local teenager last month to learn the trade, there's been an extra pair of hands around the workshop"と述べており、見習いを迎えたことをうかがわせる。`,
          `旅行から戻ったことについての言及はない。`,
        ] },
    ],
  }),

];
