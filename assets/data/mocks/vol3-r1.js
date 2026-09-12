/* =============================================================
   予想模試 Vol.3 — Part 5（No.101–130）／ Part 6（No.131–146）
   ============================================================= */

const p5 = (no, o) => ({
  id: `v3-p5-${no}`, part: 5, kind: 'single', topics: o.t, level: o.lv ?? 3,
  questions: [{
    id: `v3q${no}`, no, stem: o.s, choices: o.c, answer: o.a,
    exp: o.e, why: o.w, ja: o.ja, topics: o.t,
  }],
});

const p6 = (o) => ({
  id: `v3-p6-${o.n[0]}`, part: 6, kind: 'doc', topics: o.t, level: o.lv ?? 4, docCount: 1,
  docs: [o.doc],
  questions: o.q.map((x, i) => ({
    id: x.id ?? `v3q${o.n[i]}`, no: o.n[i], stem: null, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t, tag: x.tag,
  })),
});

export const R1 = [

  /* ══════════ PART 5 ══════════ */
  p5(101, { t: ['pos'], lv: 3,
    s: 'All incoming samples must be logged ------- upon arrival at the receiving bench.',
    c: ['immediate', 'immediately', 'immediacy', 'immediateness'],
    a: 1,
    e: '受動態の過去分詞 logged を修飾する副詞が入る。',
    w: ['形容詞。', '正解。', '名詞。', '名詞。'],
    ja: '搬入された試料はすべて、受入台に到着した時点で直ちに記録されなければならない。' }),

  p5(102, { t: ['conjprep'], lv: 4,
    s: '------- the shortage of qualified assessors, the certification backlog has grown for six consecutive months.',
    c: ['Because', 'Even if', 'So that', 'Because of'],
    a: 3,
    e: '後ろが the shortage という名詞句なので前置詞句 Because of。',
    w: ['接続詞。節が必要。', '接続詞。', '接続詞。', '正解。'],
    ja: '有資格の審査員が不足しているため、認証の滞留は 6 か月連続で増加している。' }),

  p5(103, { t: ['vform'], lv: 5,
    s: 'Neither the site manager nor the subcontractors ------- informed of the revised access route.',
    c: ['were', 'is', 'has been', 'was'],
    a: 0,
    e: 'neither A nor B は近い方の名詞（the subcontractors）に動詞を一致させる。複数なので were。',
    w: ['正解。', '単数の現在形。', '単数の現在完了。', '単数。'],
    ja: '現場責任者も下請業者も、変更された進入経路について知らされていなかった。' }),

  p5(104, { t: ['colloc'], lv: 4,
    s: 'The institute will ------- an inquiry into the discrepancies identified in last year\'s returns.',
    c: ['lift', 'lodge', 'launch', 'lease'],
    a: 2,
    e: 'an inquiry into ...（〜についての調査）を目的語に取れるのは、活動を開始する意味の launch（launch an inquiry / an investigation / a campaign）。他の 3 語はそれぞれ目的語に取れる名詞の種類が決まっており、「調査」はどれにも当てはまらない。',
    w: ['lift が「解除する」で目的語に取るのは、課されている制限（lift a ban / restrictions / sanctions / a curfew）。調査は解除される制限ではない。',
        'lodge が目的語に取るのは、正式に提出する申し立て（lodge a complaint / an appeal / an objection / a claim）で、提出先は with で示す。into the discrepancies が付いた an inquiry は「調査という活動」であって提出物ではないため、lodge の目的語にはならない。',
        '正解。launch an inquiry into ...「〜についての調査を開始する」。',
        'lease は「賃貸借する」で、目的語は不動産・車両・設備など貸し借りの対象物。'],
    ja: '当研究所は、昨年度の申告に見つかった不一致について調査を開始する。' }),

  p5(105, { t: ['ptcp'], lv: 5,
    s: '------- by three independent laboratories, the results are now considered reliable.',
    c: ['Confirming', 'Confirms', 'To confirm', 'Confirmed'],
    a: 3,
    e: '分詞構文の意味上の主語は the results。結果は「確認される」側なので過去分詞。',
    w: ['現在分詞。結果が確認することになる。', '定形動詞。', '不定詞。文頭の非定形節の意味上の主語は主節の主語 the results と一致する。to confirm は能動形で the results が確認する側になってしまうが、by three independent laboratories が示すのは確認する側（研究機関）が別にいるという受動の関係であり、矛盾する。', '正解。'],
    ja: '独立した 3 つの研究機関によって確認されたことで、その結果は現在では信頼できるとみなされている。' }),

  p5(106, { t: ['pron'], lv: 4,
    s: 'Applicants must submit their own transcripts; we cannot accept ------- sent by a third party.',
    c: ['this', 'these', 'those', 'that'],
    a: 2,
    e: '前出の複数名詞 transcripts の反復を避ける those。後ろに分詞句 sent by ... が続く形も those の特徴。',
    w: ['単数の指示語。', '前出の名詞を受け直す代用形として、後置修飾（of 句・分詞句）を従えて指示対象を絞り込むのは that / those の働き。this / these は指示対象をそれ自体で特定する代名詞で、後ろに修飾語を足して絞り込む代用形の働きを持たない。ここは「第三者が送ったもの」という条件で絞り込む必要があるので those が要る。', '正解。', '単数。transcripts は複数。'],
    ja: '応募者は自身の成績証明書を提出しなければならず、第三者から送られたものは受理できません。' }),

  p5(107, { t: ['adjprep'], lv: 5,
    s: 'The findings are consistent ------- those reported by the Uppsala team last spring.',
    c: ['with', 'of', 'for', 'to'],
    a: 0,
    e: '「〜と一致する、矛盾しない」の意味の consistent は前置詞 with を固定で取る（be consistent with ...）。この語義で to / of / for を取る型はどの辞書にも無い。consistent が別の前置詞と結び付くのは「一貫している」の意味で in を取るとき（consistent in quality）だけ。',
    w: ['正解。be consistent with「〜と一致する」。',
        'of を続ける型は無い。consistent の後ろに来るのは照合の相手であって、構成や所属ではない。',
        'for を続ける型は無い。',
        'to を取るのは similar / identical / equivalent など別の形容詞。consistent to という型は無い。'],
    ja: 'その結果は、昨春ウプサラのチームが報告したものと一致している。' }),

  p5(108, { t: ['quant'], lv: 4,
    s: '------- applicant is required to provide two references from previous employers.',
    c: ['Each', 'Few', 'Several', 'All'],
    a: 0,
    e: 'applicant が単数形で動詞が is なので、単数名詞を取る each。',
    w: ['正解。', '複数名詞を取る。', '複数名詞を取る。', '複数名詞を取る。'],
    ja: '各応募者は、前職の雇用主 2 名からの推薦状を提出する必要がある。' }),

  p5(109, { t: ['comp'], lv: 5,
    s: 'The second prototype was tested under conditions ------- more demanding than the first.',
    c: ['very', 'so', 'much', 'too'],
    a: 2,
    e: '比較級 more demanding を強める副詞は much / far / considerably。very と too は不可。',
    w: ['原級を修飾する。', 'so + 比較級は取らない。', '正解。', '「〜すぎる」。'],
    ja: '2 号機は 1 号機よりはるかに厳しい条件下で試験された。' }),

  p5(110, { t: ['voice'], lv: 5,
    s: 'The safety review ------- by an external panel rather than by the operating company itself.',
    c: ['conducted', 'being conducted', 'has conducted', 'was conducted'],
    a: 3,
    e: 'by 以下に行為者が示され、他動詞 conduct の目的語が空所の後ろに無いので受動態。加えて、この節には他に定形動詞が無いため、空所には定形の動詞が入る。',
    w: ['能動の過去形と読むと、他動詞 conduct の目的語が空所の後ろに無い。過去分詞と読むと The safety review conducted by an external panel … という名詞句になり、文の述語動詞が消える。',
        '受動の分詞（being + 過去分詞）。分詞は定形動詞ではないので主語 The safety review に対する述語動詞にならず、この節には他に定形動詞が無い。',
        '能動の現在完了。他動詞 conduct の目的語が空所の後ろに無く、by 句は目的語にならない。',
        '正解。'],
    ja: 'その安全審査は、運営会社自身ではなく外部の委員会によって実施された。' }),

  p5(111, { t: ['rel'], lv: 5,
    s: 'The technique ------- the laboratory is best known was developed almost by accident.',
    c: ['for which', 'whose', 'that', 'which'],
    a: 0,
    e: 'be known for「〜で知られる」の for が前に出た形。空所の後ろが完全文なので前置詞＋関係代名詞。',
    w: ['正解。', '所有格。直後に名詞が必要。', '後ろが完全文なので不可。', '後ろが完全文なので不可。'],
    ja: 'その研究室が最もよく知られている技法は、ほとんど偶然に開発されたものだった。' }),

  p5(112, { t: ['biz'], lv: 5,
    s: 'The clause allows either party to ------- the agreement if performance targets are not met.',
    c: ['reside', 'resign', 'rescind', 'resemble'],
    a: 2,
    e: 'rescind an agreement / a contract「（契約を）取り消す、解除する」。',
    w: ['「居住する」。', '「辞任する」。', '正解。', '「似ている」。'],
    ja: 'この条項により、業績目標が達成されない場合はいずれの当事者も契約を解除できる。' }),

  /* id は v3q113r2（no は 113 のまま。設問ごと2回目の差し替えのため新規採番）。
     1回目（v3q113r。"The vendor is looking forward to ------- the updated proposal ..."、
     正解 submitting）は再監査で差し戻された。誤答3本は閉じていたが、drills/grammar4.js の
     verbal-09（"is looking forward to formally ------- the new product line ..."、正解
     unveiling）と装置が同一（引き金が同じ look forward to／4形の組み合わせが同じ／exp・why の
     最終項がほぼ同文）で、答えの根拠が丸ごと重複していた。加えて topics.js の verbal の key
     「『look forward to -ing』の to は前置詞」が画面に印字されており、読めば解ける状態だった。
     今回は判別の決め手を「to は前置詞」から切り離し、動詞 resume 自体の目的語選択（動名詞のみを
     取り、to 不定詞・定形・裸の過去分詞のいずれも取らない）に移した。resume は topics.js の
     verbal の key・pitfall（be committed to / look forward to / avoid・consider・postpone）に
     無く、verbal-01〜verbal-20 のどの引き金（postpone / committed to / wish / permit /
     rather than / enable / regret / worth / look forward to / when it comes to /
     with a view to / advise / cannot help / have difficulty / object to / insist on /
     refrain from / remember / in addition to / used to）とも重ならない（grep 照合済み）。
     LDOCE「resume」語義1 [transitive] は用例欄に "resume doing something" を明記し
     ("He will resume training as soon as the injury is better.")、to 不定詞を伴う形は
     立項していない。Google Books Ngrams（1990–2019, en-2019, smoothing=0）で
     resumed flying 1.996e-09・resume flying 1.963e-09（いずれも全30年でヒットあり）に対し、
     resume to fly・resumed to fly はデータ自体が返らない。英語版 Wikipedia insource でも
     "resume to fly"「0件」・"resumed to fly"「0件」・"will resume flying"「0件」で、
     "resume to do" の3件はいずれも presume との誤検出（First Taranaki War 等）か resume
     （名詞「履歴書」）が別の語に接続した偽陽性（"sending out his resume to dozens of..."）で、
     resume + to不定詞の実例ではない。stem・語彙（airline / northern destinations / runway
     repairs）は assets/data/ 全体と grep 照合し衝突なしを確認済み。 */
  { id: 'v3-p5-113r2', part: 5, kind: 'single', topics: ['verbal'], level: 4,
    questions: [{
      id: 'v3q113r2', no: 113,
      stem: 'The airline will resume ------- to its northern destinations once the runway repairs are finished.',
      choices: ['flying', 'to fly', 'flew', 'flown'],
      answer: 0,
      exp: 'resume doing something「〜するのを再開する」。resume が他動詞として補部に取るのは動名詞で、辞書の用例も resume doing something の形（He will resume training as soon as the injury is better.）。resume を自動詞で読んで to fly を目的の不定詞に取る逃げ道も無い。自動詞の resume が主語に取るのは中断されていた出来事・活動そのもの（the meeting resumed / normal service resumed）で、ここで中断されていたのは運航であって航空会社ではないため、The airline will resume だけでは完結した節にならず、目的の不定詞を掛ける先が作れない。',
      why: ['正解。resume flying「運航を再開する」。resume の目的語となる動名詞。',
            '不定詞。resume が他動詞として補部に取るのは動名詞で、辞書の用例も resume doing something の形。resume を自動詞で読んで to fly を「〜するために」の目的の不定詞に取る逃げ道も無い。自動詞の resume が主語に取るのは中断されていた出来事・活動そのもの（the meeting resumed / normal service resumed）で、ここで中断されていたのは運航であって航空会社ではないため、The airline will resume だけでは完結した節にならず、目的の不定詞を掛ける先が作れない。',
            '過去形の定形動詞。will の後に続く resume の目的語位置には非定形の要素しか入らず、そこにさらに独立した定形動詞 flew を続けることはできない。',
            '過去分詞。resume の目的語になれるのは動名詞であって、裸の過去分詞をその位置に置く形は無い。'],
      ja: '滑走路の修理が終わり次第、その航空会社は北部の就航先への運航を再開する。',
      topics: ['verbal'],
    }] },

  p5(114, { t: ['adv'], lv: 5,
    s: 'The two accounts of the incident differ ------- on the question of who gave the instruction.',
    c: ['shortly', 'sharply', 'shabbily', 'sheerly'],
    a: 1,
    e: 'sharply は差や変化の大きさ・鋭さを表す副詞で、differ / disagree / rise / decline などの程度を修飾する（differ sharply「大きく食い違う」）。他の 3 語は程度を表す副詞ではない。',
    w: ['shortly が表すのは「まもなく（時期）」「そっけなく（話し方）」「手短に」で、差の大きさは表さない。現在形の differ と組めば「まもなく」の読みも作れない。',
        '正解。differ sharply on ...「〜の点で大きく食い違う」。',
        'shabbily が修飾するのは身なり（dressed shabbily）か人の扱い方（treat someone shabbily）。差の程度には使わない。',
        'sheerly は sheer の副詞形で、用例は「垂直に」「純然と」に限られる。動詞 differ の程度を修飾する用法は辞書に無い。'],
    ja: 'その出来事についての 2 つの説明は、誰が指示を出したのかという点で大きく食い違っている。' }),

  p5(115, { t: ['subj'], lv: 5,
    s: 'Had the fault ------- earlier, the line would not have been shut down for a full shift.',
    c: ['been detected', 'detected', 'detecting', 'be detected'],
    a: 0,
    e: 'If the fault had been detected ... の if が省略された倒置。受動なので been detected。',
    w: ['正解。', '能動。不具合が検知することになる。', '分詞。', '原形の受動。'],
    ja: 'その不具合がもっと早く検知されていれば、ラインが 1 交代分すべて停止することはなかっただろう。' }),

  /* id は v3q116r（no は模試の通し番号として 116 を維持するが、選択肢と stem を差し替えたため
     設問 id は新規採番。旧 id v3q116 を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     旧版は誤答に indicated を置いていたが、indicated には形容詞として「（処置などが）適切だ、
     求められる」の語義があり（The revised timetable is indicated. で成立してしまう）、
     第二の正解になっていた。p5() ヘルパーは id を no から自動生成し no を変えずに id だけ
     変える手段がないため、このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v3-p5-116r', part: 5, kind: 'single', topics: ['confuse'], level: 5,
    questions: [{
      id: 'v3q116r', no: 116,
      stem: 'The revised timetable is ------- only; the final version will be published in February.',
      choices: ['indicating', 'indicative', 'indication', 'indicatively'],
      answer: 1,
      exp: 'be 動詞の補語に立ち、直後の only（「あくまで〜にすぎない」）に修飾される形容詞が入る。indicative は「（確定ではなく）目安の、暫定的な」で、figures are indicative only のように使う定型。セミコロン以下の「最終版は 2 月に公表」とも整合する。',
      why: ['indicate は他動詞で、進行形にするなら示す内容を目的語として続けなければならない（is indicating the new departure times）。空所の後ろは only とセミコロンで、目的語になる要素が無い。自動詞用法は「（車が）方向指示器を出す」の意味だけで、timetable が主語では成り立たない。',
            '正解。indicative only「あくまで目安」。',
            '名詞。indication は限定詞を伴い、of 句や that 節で「何のしるしか」を示すのが辞書の用例（a good indication of healthy roots／no indication of his feelings／some indication as to ...）。限定詞も of 句も無い裸の名詞を be の補語に置く形は無く、「日程表＝しるし」という同一関係を作るなら an indication と冠詞が要る。',
            '副詞。-ly の様態副詞は be の補語位置に立てない（この位置に立てる副詞は here / there / away など場所・時を表すものに限られる）。'],
      ja: '改訂された日程表はあくまで目安であり、最終版は 2 月に公表される。',
      topics: ['confuse'],
    }],
  },

  p5(117, { t: ['inv'], lv: 5,
    s: 'Only after the third inspection ------- the source of the leak identified.',
    c: ['it was', 'was', 'were', 'that was'],
    a: 1,
    e: 'Only after ... が文頭に出ると主節が倒置される。主語 the source は単数なので was。',
    w: ['倒置されていない。', '正解。', '複数形。', '強調構文とは形が異なる。'],
    ja: '3 回目の点検を経てようやく、漏れの原因が特定された。' }),

  p5(118, { t: ['vusage'], lv: 5,
    s: 'The guidance ------- staff to record the serial number of every device issued.',
    c: ['insists', 'demands', 'requires', 'suggests'],
    a: 2,
    e: '空所の直後が staff（人）＋ to record。「人を目的語に取り、その人にさせる行為を to 不定詞で示す」型（V + 人 + to do）を持つのは require だけ。他の 3 語は要求・提案の内容を that 節（節内は原形＝仮定法現在）か動名詞で述べる型しか持たない。',
    w: ['insist は insist on doing、または insist that + S + 原形。名詞を直接目的語に取る型が無いため staff を続けられない。',
        'demand は demand + 事（demand an explanation）、demand to do、demand that + S + 原形。人を目的語に置いて to do を続ける型は無く、辞書にも demand somebody to do something は誤りと明記されている。',
        '正解。require + 人 + to do。',
        'suggest は suggest that + S + 原形、または suggest doing。人 + to do の型を持たない。'],
    ja: 'その指針は、貸与したすべての機器の製造番号を記録するよう職員に求めている。' }),

  p5(119, { t: ['ctense'], lv: 5,
    s: 'By the end of this month the trial ------- for a full year without a single interruption.',
    c: ['runs', 'ran', 'will have run', 'has run'],
    a: 2,
    e: 'By the end of this month という未来の基準時までの継続なので未来完了。',
    w: ['現在形。', '過去形。', '正解。', '現在完了は基準時が現在。'],
    ja: '今月末で、その試験は一度の中断もなく丸 1 年間続いたことになる。' }),

  p5(120, { t: ['phrasal'], lv: 5,
    s: 'The two departments have agreed to ------- down the duplicated reporting to a single monthly return.',
    c: ['pair', 'pare', 'pour', 'peer'],
    a: 1,
    e: 'pare down A to B「A を B まで切り詰める」。同音の pair / pare の識別が要点で、pare だけが「削って減らす」意味を持つ。',
    w: ['pair は「組にする」で、down とは句動詞を作らない（pair up / pair off）。pare down の綴り誤りとして頻出するが、pair down という辞書項目は存在しない。',
        '正解。pare down「（数量・規模を）切り詰める」。pare down the list to five names のように to で到達点を示せる。',
        'pour down の down は前置詞で、pour A down B（液体を通り道に流す）の型を取る。reporting は流し込む通り道になれず、to a single monthly return も係る先を失う。',
        'peer は「じっと見る」の自動詞で目的語を取れない（peer down at / into … の形しかない）。'],
    ja: '2 つの部門は、重複していた報告を月 1 回の提出に絞ることで合意した。' }),

  p5(121, { t: ['pos'], lv: 5,
    s: 'The committee found the evidence ------- compelling to justify a full review.',
    c: ['suffice', 'sufficient', 'sufficiency', 'sufficiently'],
    a: 3,
    e: '形容詞 compelling を修飾するので副詞。sufficiently + 形容詞 + to do の形。',
    w: ['動詞。', '形容詞。形容詞を修飾できない。', '名詞。', '正解。'],
    ja: '委員会は、その証拠が全面的な再検討を正当化するに足るほど説得力があると判断した。' }),

  /* id は v3q122r（no は 122 のまま。設問ごと差し替えたため新規採番）。
     旧版は "two staircases; ------- of them is accessible ..."（正解 neither、誤答に each /
     either / both）だったが、単数の is が排除できるのは複数扱いの both だけで、each of them
     is も either of them is もそれ自体は正しい英語として成立し（"each of them is accessible"＝
     2 つとも入れる、"either of them is accessible"＝どちらか一方から入れる、"neither of them
     is accessible"＝どちらも入れない、の3つとも文法的に閉じた文）、単文に肯定・否定どちらの
     内容かを決める材料が無いため第二の正解だった（旧 why[0] も "each of them is も可だが" と
     明示的に認めていた）。加えて論点 cohesion は topics.js で Part 6 の文書結束性として定義
     されており、談話の無い Part 5 の1文に載せていたこと自体が閉じ手を文外に求める構造に
     なっていた（担当外・topics.js の定義自体はメインの判断事項のため報告のみ）。
     単数・複数の対立ではなく「単数の代名詞のうち後ろに of 句を続けて比較対象を示せるのは
     that だけ（those / ones はいずれも複数形で単数の先行詞と数が合わない）」という数の一致
     だけで閉じる枠に作り替えた。vol6-r1.js の v6q105r が the other / others / one another /
     other という別の指示代名詞の対立をすでに扱っているため、それとは異なる that of の型を
     選び、stem の語彙（manufacturing cost / blueprint 等）も既存のどの設問とも重ならない
     ことを確認済み（grep 照合済み）。 */
  { id: 'v3-p5-122r', part: 5, kind: 'single', topics: ['cohesion', 'pron'], level: 5,
    questions: [{
      id: 'v3q122r', no: 122,
      stem: 'The manufacturing cost of the revised model is lower than ------- the original blueprint.',
      choices: ['that of', 'those of', 'the ones of', 'ones of'],
      answer: 0,
      exp: 'than の後ろは、前に出た単数の名詞 manufacturing cost を受ける代名詞＋比較対象を示す of 句。単数の先行詞を受けるのは that で、of the original blueprint（どちらのものか）が続く that of ... の定型になる。',
      why: ['正解。that of ...「〜のそれ」。前出の単数の名詞 manufacturing cost を受け、of 以下でその帰属先を示す。',
            'those は複数の名詞を受ける代名詞。前出の manufacturing cost は単数（主語の is とも一致する単数扱い）で、複数形の those とは数が合わない。',
            'ones も複数の名詞を受ける代名詞で、単数の manufacturing cost とは数が合わない。the ones of という形もこの比較の型では使われない。',
            'ones は複数形であることに加え、限定詞を伴わない裸の ones は代名詞として単独では使えない（the ones や which ones のように限定詞・疑問詞を伴う必要がある）。単数の manufacturing cost とも数が合わない。'],
      ja: '改訂版モデルの製造コストは、当初の設計図の製造コストよりも低い。',
      topics: ['cohesion', 'pron'],
    }] },

  p5(123, { t: ['colloc'], lv: 5,
    s: 'The auditor was unable to ------- the discrepancy between the two sets of figures.',
    c: ['reconvene', 'reconcile', 'reconsider', 'reconstruct'],
    a: 1,
    e: 'reconcile は「食い違う二つを突き合わせて辻褄を合わせる」で、discrepancy / figures / accounts を目的語に取る会計・監査の定型。他の 3 語は re- が付いた形が似ているだけで、目的語に取れるものの種類が違う。',
    w: ['reconvene の目的語は、いったん散会した会議・法廷・委員会（reconvene the meeting）。discrepancy は再開できる集まりではない。',
        '正解。reconcile the discrepancy / reconcile the figures。',
        'reconsider の目的語は、いったん下した判断（reconsider a decision / an application / a position）。discrepancy は判断ではないので再考の対象にならない。',
        'reconstruct の目的語は、元の形に組み直せるもの（reconstruct a building / reconstruct the sequence of events）。discrepancy は「二つが食い違っている状態」であって組み直す対象ではない。'],
    ja: '監査人は、2 組の数値の間の食い違いを整合させることができなかった。' }),

  p5(124, { t: ['conjprep'], lv: 5,
    s: 'The permit remains valid ------- the holder continues to meet the conditions attached to it.',
    c: ['so long as', 'despite', 'in case of', 'owing to'],
    a: 0,
    e: '後ろが節なので接続詞的表現。so long as「〜する限り」が条件を表す。',
    w: ['正解。', '前置詞。', '前置詞句。', '前置詞句。'],
    ja: 'その許可は、保有者が付帯条件を満たし続ける限り有効である。' }),

  /* id は v3q125r（no は 125 のまま。設問ごと差し替えたため新規採番）。
     旧版は "With the main road ------- for resurfacing, ..."（正解 closed、誤答に現在分詞
     closing）だったが、close は能格動詞（LDOCE close 語義3 [intransitive, transitive]
     "The shops close at six."）で「道路が自ら閉じることになる」という旧 why[1] の排除根拠は
     偽の規則だった。"With the main road closing for resurfacing, ..." は道路を主語にした
     能格用法として実在する（英語版 Wikipedia insource「the road closes for the season」
     「with the station closing for freight on 2 November 1964」）。
     枠を能格用法を持たない他動詞 renovate に移した（Wiktionary の renovate は2語義とも
     transitive のみ）。加えて旧版は誤答 (D) to close（with + NP + to V の「まだやり残して
     いる」構文）も閉じ切れていなかったため、空所の節に past-time の副詞 last month を隣接
     させ、裸の不定詞が定形の過去時点を表せない（to have renovated の形が要る）ことで (D) も
     構造的に排除した。 */
  { id: 'v3-p5-125r', part: 5, kind: 'single', topics: ['ptcp'], level: 5,
    questions: [{
      id: 'v3q125r', no: 125,
      stem: 'With the reception area ------- last month, this year\'s facilities budget will focus on the loading dock instead.',
      choices: ['renovated', 'renovating', 'renovates', 'to renovate'],
      answer: 0,
      exp: '付帯状況の with + O + 分詞。renovate は目的語を必要とする他動詞で（Wiktionary の2語義ともに transitive）、空所の後ろは last month という時の副詞だけで目的語が無い。reception area は「改修される」側なので過去分詞。',
      why: ['正解。with the reception area renovated last month「先月に受付エリアが改修されたので」。',
            '現在分詞。renovate は目的語を必要とする他動詞だが、空所の後ろに目的語が無い。reception area 自身が改修する側になってしまう点でも成り立たない（改修するのは業者であり、場所自体ではない）。',
            '定形動詞。with + O + 分詞の絶対構文には非定形の分詞が入る。加えて現在形は last month という確定した過去の時点と両立しない。',
            '不定詞。裸の不定詞は確定した過去の時点を単独では表せない（to have renovated のように完了形にする必要がある）。to renovate last month は時制の点で成り立たない。'],
      ja: '先月に受付エリアが改修されたので、今年度の施設予算は代わりに搬入口に充てられる予定である。',
      topics: ['ptcp'],
    }] },

  p5(126, { t: ['biz'], lv: 5,
    s: 'Payment is due within thirty days; thereafter interest ------- at the statutory rate.',
    c: ['accuses', 'accrues', 'accedes', 'accords'],
    a: 1,
    e: 'interest accrues「利息が発生する」。金融・契約文書の定型。',
    w: ['「非難する」。', '正解。', '「同意する、就任する」。', '「一致する」。'],
    ja: '支払期日は 30 日以内で、それ以降は法定利率で利息が発生する。' }),

  p5(127, { t: ['adv'], lv: 5,
    s: 'The two figures are ------- identical, differing only in the third decimal place.',
    c: ['vaguely', 'virtually', 'variously', 'verbally'],
    a: 1,
    e: 'virtually は「実質的には」で、identical / impossible / certain のような限界を表す語と組み、そこにわずかに届かないことを表す。小数第 3 位だけが違うという後半の説明と正確に対応する。',
    w: ['vaguely は「かすかに、漠然と」で、輪郭がぼやけていることを表す（vaguely familiar / vaguely aware）。identical は「完全に同一」という限界を指す語なので、ぼやけ具合を表す vaguely とは結び付かない。',
        '正解。virtually identical「ほぼ同一の」。',
        'variously は「さまざまに」で、複数のものが別々の形を取ることを表す（variously described as ...）。identical とは意味が正反対になる。',
        'verbally は「口頭で」（伝達の手段）。一致の度合いを表す副詞ではない。'],
    ja: 'その 2 つの数値はほぼ同一で、小数第 3 位でのみ異なっている。' }),

  p5(128, { t: ['vform'], lv: 5,
    s: 'A number of the recommendations ------- already been implemented at the Leeds site.',
    c: ['was', 'has', 'is', 'have'],
    a: 3,
    e: 'A number of + 複数名詞は複数扱い。The number of ...（単数扱い）との違いが要点。',
    w: ['単数の過去形。', '単数。', '単数の be 動詞。', '正解。'],
    ja: 'それらの提言の多くは、すでにリーズ拠点で実施されている。' }),

  p5(129, { t: ['confuse'], lv: 5,
    s: 'The council must ------- between competing demands on a fixed budget.',
    c: ['adopt', 'adapt', 'arbitrate', 'accumulate'],
    a: 2,
    e: '空所の直後が between competing demands。対立する二つ（以上）の間に立って裁定することを表し、対立する側を between で示す型を持つのは arbitrate だけ（arbitrate between management and the union / between competing claims）。他の 3 語は between を続ける型を持たない。',
    w: ['adopt は他動詞で、採用する対象を直接目的語に取る（adopt a policy）。between を続ける型が無い。',
        'adapt は「適応する」なら to（adapt to the new system）、「作り替える」なら他動詞で目的語を取る。どちらの型でも between は続かない。',
        '正解。arbitrate between「〜の間を裁定する、調整する」。',
        'accumulate は「（次第に）たまる・ためる」で、自動詞なら主語自身が増えていく意味（interest accumulates）。between を続ける型が無い。'],
    ja: '議会は、限られた予算をめぐる競合する要求の間を調整しなければならない。' }),

  p5(130, { t: ['adjprep'], lv: 5,
    s: 'Access to the archive is contingent ------- prior approval from the collections officer.',
    c: ['for', 'to', 'in', 'upon'],
    a: 3,
    e: 'contingent は「〜次第である」の意味で前置詞 on / upon を固定で取る（be contingent on / upon ...）。この語義で to / in / for を取る型はどの辞書にも無い。',
    w: ['for を続ける型は無い。',
        'to を取るのは subject to ... など別の形容詞。contingent to という型は無い。',
        'in を続ける型は無い。',
        '正解。be contingent upon「〜を条件とする」。on でも同じ。'],
    ja: '資料室への立ち入りは、収蔵担当者による事前承認を条件とする。' }),

  /* ══════════ PART 6 ══════════ */
  /* 設問 134 の id は v3q134r（no は 134 のまま。本文の該当文と選択肢を差し替えたため
     設問 id を新規採番）。旧 v3q134 は hardly / rarely / arguably / scarcely から
     arguably を選ばせる型で、旧 why[0] が「hardly the worst month は英語として成立する
     言い方だが…矛盾する」と明示的に譲歩しており、談話の整合性でしか切れていなかった。
     May is hardly the worst month（5 月がとりわけ悪い月というわけではない）としたうえで
     「それでも作付け直後の断水は困る」と読めば前後と両立するので閉じていない。
     CLAUDE.md の「肯定の副詞 vs 否定の副詞を単文の意味で選ばせる型は閉じられない」に当たる。

     構造で切れる型に作り替えた。新しい空所は as serious as … という原級比較の直前にある。
     原級比較は「両者に差が無い」ことを述べる形なので、前に置けるのは等しさの見方を言う語に
     限られる（just / every bit、almost / nearly / nowhere near、twice / half）。
     a good deal・far・considerably は「どれだけ差があるか」という差の量を測る語で、差そのものを
     表す比較級 more … than にしか付かない。nowhere near as … as は差の量ではなく
     「そこまで届かない」という近似なので、この一般化の反例にはならない。
     裏付け：LDOCE は every bit as important/bad/good etc を句として立項し
     「used to emphasize that something is equally important, bad etc as something else」
     と定義、Jodi plays every bit as well as the men. を挙げる。
     用例：Google Books ngram 1990-2019 平均で every bit as serious as 2.63e-09
     （every bit as good as 4.28e-08）に対し、far as serious as / considerably as serious as /
     a good deal as serious as はいずれも 0 件。同じ副詞が比較級に付く形は
     far more serious than 4.28e-08、considerably more serious than 2.00e-09 と普通に出る。
     英語版 Wikipedia の insource 完全一致でも every bit as serious as 2 件に対し
     far as serious as・considerably as serious as・a good deal as serious as は 0 件。
     選択肢は 2 語のものを 2 つ入れて、語形の長さで正解が見分けられないようにしてある。
     判断過程の重複確認：adv-05r3（前置詞の目的語の内側で数量を前から修飾できるか）、
     adv-06r（副詞が of 補語を後ろに取れるか）、v5q106r3（at all の認可）、
     v1q128r2（定形節か分詞句か）のいずれとも別。同じ vol3 の設問 109 は
     「比較級を強められる副詞はどれか（much 対 very / so / too）」で、本問はその裏返し、
     すなわち「比較級を強める副詞は原級比較には付けない」を問う対の関係にある。
     本文は空所を含む最終段落の 1 文だけを差し替えた。空所 {{1}}〜{{3}} は別の段落にあり、
     文挿入 133 の根拠（直後の「必要な分だけ汲んでください。給水車の容量は…」）も無傷。
     p6() ヘルパーは id を no から自動生成し、134 だけ id を変える手段がないため、
     このユニットはヘルパーを使わず直接記述する。 */
  { id: 'v3-p6-131', part: 6, kind: 'doc', topics: ['ctense', 'connect'], level: 4, docCount: 1,
    docs: [{
      label: 'E-mail',
      head: 'To: All allotment holders\nFrom: secretary@brackenhillallotments.org\nDate: 3 May\nSubject: Water supply works, 12–16 May',
      body: [
        'Dear members,',
        'The water main serving the site {{1}} between Monday 12 and Friday 16 May while the supplier replaces a section of failing pipe under the access track.',
        'During those five days there will be no mains water anywhere on the site. {{2}}, we have arranged for a 1,000-litre bowser to be positioned in the car park and refilled each morning.',
        '{{3}} Please take only what you need; the bowser holds roughly a fifth of what the site uses on a warm day.',
        'The work is being carried out now rather than in autumn because the supplier can only guarantee a five-day window outside the winter programme. We made the case for September, without success. With seedlings only just planted out, five days without mains water in May is {{4}} as serious as a fortnight without it would be in October.',
        'With apologies,\nThe Committee',
      ],
    }],
    questions: [
      { id: 'v3q131', no: 131, stem: null,
        choices: ['will be shut off', 'shuts off', 'has been shut off', 'will shut off'],
        answer: 0,
        exp: '水道本管は「止められる」側なので受動態。5 月 12 日からという未来の予定なので未来形。',
        why: ['正解。', '現在形は確定した予定を表せるが、shuts off は能動態。shut off の自動詞用法（The iron shuts off automatically.）は自ら停止する機械・器具に限られ、water main（本管）はその型に当たらない。同じ文の while the supplier replaces a section of failing pipe が外部の動作主（供給業者）を明示しており、本管は「止められる」側である。', '現在完了。まだ止まっていない。', 'will shut off も同じ理由で不可。能動態であり、shut off の自動詞用法が使えるのは自ら停止する機械・器具に限られる。water main は外部（供給業者）によって止められる側であり、同じ文がその動作主を明示している。'],
        topics: ['ctense', 'voice'], tag: '態・時制' },
      /* id は v3q132r（no は 132 のまま。誤答 (A) を差し替えたため新規採番）。
         旧版は誤答 (A) に Nevertheless を置いていたが、「水が出ない」という前文の含意（水が
         手に入らない）に対し「給水車を用意した」という後文は緩和策の提示であり、譲歩
         （Nevertheless / However）としても意味が通ってしまう第二の正解だった（旧 why[0]
         「逆接。」はこの位置で逆接が成立しない理由を名指ししていなかった）。
         For example に差し替えた。for example は前文を具体例として例示する働きしか持たず、
         「水が出ない」ことの具体例としてボウザーの手配（対応策）を挙げることはできないため、
         意味の関係の種類そのもので排除できる。 */
      { id: 'v3q132r', no: 132, stem: null,
        choices: ['For example', 'Otherwise', 'Accordingly', 'Likewise'],
        answer: 2,
        exp: '「水が出ない」→「そこで給水車を手配した」という対応の関係。Accordingly。',
        why: ['for example は前文の内容を具体例として例示する語で、後ろには前文の一事例が続く必要がある。給水車の手配は「水が出ないこと」の一事例ではなく、それに対する対応策であり、例示の関係にならない。', '「さもなければ」。', '正解。', '並列。'],
        topics: ['connect'], tag: '接続語' },
      { id: 'v3q133', no: 133, stem: null,
        choices: [
          'A tap and two watering cans will be attached to the bowser.',
          'The supplier has apologised for the disruption and the delay.',
          'Members are reminded to renew their subscriptions by June.',
          'The car park will be closed to vehicles during the works.',
        ],
        answer: 0,
        exp: '直後が「必要な分だけ汲んでください。給水車の容量は暖かい日の使用量の約 5 分の 1」と続く。給水車から水を汲む手段を先に示す文が自然につながる。',
        why: ['正解。', 'the delay と既知のもののように指しているが、本文に遅延の記述は無い。工事は 5 月 12〜16 日の予定どおりで、委員会が求めた 9 月の実施が通らなかったと書かれているだけである。次の文の「必要な分だけ汲んでください」ともつながらない。', '会費は無関係。', '駐車場閉鎖なら給水車を置けず矛盾する。'],
        topics: ['p6ins'], tag: '文挿入' },
      { id: 'v3q134r', no: 134, stem: null,
        choices: ['a good deal', 'far', 'every bit', 'considerably'],
        answer: 2,
        exp: '空所の後ろは as serious as ... という原級比較で、「二つのあいだに差が無い」ことを述べる形。この位置に入れるのは、その等しさをどう見るかを言う語に限られる。具体的には just / every bit（まったく同じだけ）、almost / nearly / nowhere near（そこに届くか届かないか）、twice / half（何倍か）といった語。一方 a good deal・far・considerably は「どれだけ差があるか」という差の量を測る語で、差そのものを表す比較級 more ... than に付く（far more serious than / considerably more serious than）。差がゼロだと述べている原級比較には測るべき差が無いため、この 3 語は空所に立てない。LDOCE は every bit as important/bad/good etc を句として立項し、「used to emphasize that something is equally important, bad etc as something else」と定義して Jodi plays every bit as well as the men. を挙げている。',
        why: ['「かなり」。程度を測る副詞として使うときに付く先は比較級で（a good deal better / a good deal more expensive）、測っているのは二者の差の大きさ。差が無いと述べる as ... as の前には置けない（名詞を伴う a good deal of time は量を表す別の型）。',
              'これも差の幅を測る語で、付く先は比較級（far more serious than / far worse）。as ... as は差がゼロであることを述べる形なので、far が測る対象が無い。なお as far as ... は「〜する限り」を表す別の型で、そこでは far が as の後ろに来る。ここは as の前の位置なのでその型にはならない。',
              '正解。every bit as serious as ...「〜と全く同程度に深刻だ」。LDOCE が every bit as important/bad/good etc の形で立項する強調表現で、原級比較の前に置いて「まったく同程度だ」と念押しする。5 月の 5 日間が 10 月の 2 週間に匹敵するという書き方で、作付け直後の断水の重さを述べている。',
              '「相当に」。変化や差の大きさを測る語で、掛かる先は比較級か変化を表す動詞・分詞（considerably higher / considerably more difficult / considerably improved）。差がゼロだと述べる原級比較の前には、測る対象が無いので置けない。'],
        topics: ['adv'], tag: '比較' },
    ] },

  p6({
    n: [135, 136, 137, 138], lv: 5, t: ['cohesion', 'p6ins'],
    doc: {
      label: 'Article',
      title: 'A Bookshop That Sells Fewer Books',
      body: [
        'When Orla Feeney took over the Anchor Bookshop in 2022, it carried about eleven thousand titles. It now carries four thousand, and turnover {{1}} by nineteen percent to date.',
        'The reduction was not a cost-cutting measure. Ms. Feeney describes it as a change in what the shop is for. "A shop with eleven thousand titles is a warehouse you can walk into," she says. "Nobody needs that any more. There is not {{2}} in a warehouse like that they cannot get in two clicks."',
        '{{3}} Each of the four thousand is there because a member of staff has read it and can say something about it. Shelf labels carry initials, and customers ask for the person rather than the section.',
        'Not every category survived the cut. Reference and travel went almost entirely, {{4}} the shop\'s children\'s section doubled.',
      ],
    },
      /* id は v3q135r（no は 135 のまま。本文に to date を追加し正解を閉じたため新規採番）。
         旧版は現在完了を強制する時間標識が空所の節に無く、過去形 rose でも
         "It now carries four thousand, and turnover rose by nineteen percent." は普通の英文
         として成立していた（Google Books Ngrams で turnover rose by 2.087e-09 に対し
         turnover has risen by 2.603e-10、単純過去のほうが8倍多い）。topics.js の ctense 自身が
         「日付・last week・as of などが決定打」と定義しており、本問はその決定打を欠いていた。
         文末に to date を足して現在完了を強制する標識を明示した（to date「現在までに」は
         現在完了と結び付く定型で、Wiktionary も "typically used with present perfect tense
         constructions" と説明。so far は「そこまで／それほど」という程度の副詞義もあり
         Ngrams で rose so far が高頻度に出るため避けた）。 */
    q: [
      { tag: '時制', t: ['ctense'], id: 'v3q135r',
        c: ['rose', 'will rise', 'rises', 'has risen'],
        a: 3,
        e: '2022 年の引き継ぎから現在までの変化を述べており、直前の carries（現在形）と文末の to date（現在までに、の意）が現在完了を要求する。',
        w: ['過去形。文末の to date は「現在までに」の意で、現在完了と結び付く標識であり単純過去とは共起しない。', '未来形。', '現在形。変化を表さない。', '正解。'] },
      { tag: '結束性', t: ['cohesion', 'pron'],
        c: ['something', 'everything', 'anything', 'nothing'],
        a: 2,
        e: 'There is not ... という否定文の中で「〜なものは何もない」を表すのは anything。some 系は原則として肯定文で用いる。',
        w: ['肯定文で用いる語。否定文 There is not ... の中では anything を使う。', 'not everything は「すべてが〜なわけではない」という部分否定になり、文意がずれる。', '正解。否定文中で「何も〜ない」を表す。', 'not と nothing で二重否定になる。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'The shop has since opened a second branch in Sligo.',
          'The shop now sells coffee as well as books.',
          'Rent on the premises rose sharply in 2023.',
          'What replaced breadth was a rule about depth.',
        ],
        a: 3,
        e: '直後が「4,000 点はすべて、店員が読んで何か語れるからそこにある」と続く。品ぞろえの広さに代わる原則を示す文が入る。',
        w: ['2 号店は次文につながらない。', 'コーヒーは文脈から外れる。', '賃料は「読んでいる本だけ置く」につながらない。', '正解。'] },
      { tag: '接続語', t: ['connect', 'conjprep'],
        c: ['whereas', 'because', 'unless', 'as soon as'],
        a: 0,
        e: '「参考書と旅行はほぼ全廃」に対し「児童書は倍増」と対比している。whereas。',
        w: ['正解。', '因果。', '条件。', '時。'] },
      ],
  }),

  p6({
    n: [139, 140, 141, 142], lv: 5, t: ['connect', 'ctense'],
    doc: {
      label: 'Memo',
      head: 'TO: All ward clerks\nFROM: Records Management\nDATE: 6 February\nSUBJECT: Scanning of paper notes',
      body: [
        'From 1 March, paper notes for discharged patients {{1}} to the scanning bureau within two working days rather than weekly.',
        'The change follows a review of retrieval times. Under the weekly system, a set of notes requested on a Tuesday could sit on a trolley until the following Monday. {{2}}, the average retrieval time for recently discharged patients was eleven days.',
        '{{3}} The bureau collects at 07:30 and 15:00 each weekday, so a set completed on Monday afternoon will normally be scanned by Wednesday.',
        'Please do not batch notes in order to fill a trolley. A half-empty trolley sent on time is {{4}} than a full one sent three days late.',
        'Questions to the records office on extension 2280.',
      ],
    },
    q: [
      { tag: '態・時制', t: ['voice', 'ctense'],
        c: ['must be sending', 'must be sent', 'sending', 'were being sent'],
        a: 1,
        e: 'send は目的語を必要とする他動詞だが、空所の後ろは to 以下の前置詞句だけで目的語が無い。目的語にあたる paper notes が主語に立った受動態が入る。3 月 1 日からの規定なので義務を表す must を伴う。',
        w: ['能動の進行形。send は目的語となる名詞句を必要とするが、空所の後ろに目的語が無い。',
            '正解。must be sent。send の目的語にあたるものが主語に立った受動態で、義務を表す must に続く。',
            '分詞。この節には定形動詞が他に無く、文の述語動詞になれない。',
            '受動態だが過去進行形。メモの日付は 2 月 6 日で、From 1 March はこれから始まる規定を指す。過去時制では、まだ始まっていない運用を述べられない。'] },
      { tag: '接続語', t: ['connect'],
        c: ['As a result', 'On the other hand', 'In the meantime', 'At the same time'],
        a: 0,
        e: '「火曜に請求された記録が翌月曜まで放置され得た」→「その結果、平均取得日数は 11 日だった」という因果。',
        w: ['正解。前文の滞留（火曜に請求された記録が翌月曜まで放置され得る）から、平均 11 日という数値が結果として導かれる。',
            'on the other hand は同じ話題について前文と釣り合う別の側面を並べる語で、前後が対立していることを要求する。平均 11 日という数値は前文の滞留を裏づける値であって、対立する側面ではない。',
            'in the meantime は「これから起きる別の出来事までの、その間に」を表す語で、待っている先の出来事が前後に必要になる。前文は旧方式の説明であって待機の対象となる出来事を示しておらず、平均取得日数という統計値も、ある期間の「間に」起きる出来事ではない。',
            'at the same time は同時性（同じ時期に別のことが起きる）か、譲歩（「とはいえ」）を表す。平均 11 日は前文と同時に起きる別の出来事ではなく、前文の内容を打ち消す材料でもないので、どちらの用法にも当てはまらない。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'The bureau has increased its staffing to handle the change.',
          'Paper notes will continue to be destroyed after scanning.',
          'The new arrangement removes that delay almost entirely.',
          'Ward clerks should attend a briefing in late February.',
        ],
        a: 2,
        e: '直前が旧方式の遅延の説明、直後が新しい集荷時刻と「月曜午後に完成した記録は通常水曜までにスキャンされる」という具体例。間に「新方式は遅延をほぼ解消する」という総括が入る。',
        w: ['人員増は次文の具体例につながらない。', '廃棄の話は文脈から外れる。', '正解。', '説明会は次文と接続しない。'] },
      { tag: '比較', t: ['comp'],
        c: ['usefully', 'as useful', 'most useful', 'more useful'],
        a: 3,
        e: 'than があるので比較級。「期限内に送られた半分の台車の方が、3 日遅れの満杯の台車より役に立つ」。',
        w: ['副詞。be 動詞の補語にならない。', '原級比較には as ... as が必要。', '最上級は than と結び付かない。', '正解。'] },
      ],
  }),

  /* このユニットだけ p6() ヘルパーを使わず直接記述している。
     設問 146 は「in {{4}} case（this / that / each / any）」という型が 4 択に乗らないため差し替えた。
     in this case はこの位置で完全に正しい英語で、旧解説も「in this case も可能だが」と
     第二の正解を認めたうえで頻度で切っていた。空所を同じ文の分詞句へ移し、
     他動詞 value に目的語が無いこと・コンマだけでは節をつなげないことという構造判定に変えている。
     stem（空所の位置）と正解が変わったので設問 id は v3q146r と新規採番した。no は 146 のまま。 */
  { id: 'v3-p6-143', part: 6, kind: 'doc', topics: ['cohesion', 'connect'], level: 5, docCount: 1,
    docs: [{
      label: 'Web page',
      title: 'Kestrel Instruments — Repair or Replace?',
      body: [
        'Customers often ask whether an instrument that is more than ten years old is worth repairing. Our answer depends less on age {{1}} on which part has failed.',
        'Sensors and displays are consumable. We hold them for fifteen years from the end of production, and replacing one is usually economic {{2}} the rest of the instrument is sound.',
        '{{3}} Where a main board has failed, the calculation changes: boards are not stocked beyond ten years, and a repair may depend on recovering a component from another unit.',
        'If we cannot obtain a part, we will say so rather than quote for a repair we are not confident of completing. In that case we will offer a trade-in against a current model, {{4}} on condition rather than age.',
      ],
    }],
    questions: [
      { id: 'v3q143', no: 143, stem: null,
        choices: ['as', 'than', 'that', 'so'],
        answer: 1,
        exp: 'less A than B「A よりむしろ B」。比較されているのは on age と on which part has failed という 2 つの前置詞句で、比較級 less が要求する比較対象を導くのは than。',
        why: ['比較の as が「比べる相手」を導くのは as much as / not so much A as B のように前半にも as・so を置く型で、前半が比較級 less のときは対になる as が立たない。理由や様態の接続詞 as と読んでも、後ろには主語と動詞のそろった節が要る。空所に続くのは on which part has failed という前置詞句である。',
              '正解。depends less on age than on which part has failed。',
              'that が導くのは主語と動詞のそろった節（名詞節・関係節）。空所に続くのは on which part has failed という前置詞句で、節ではない。比較級 less の比較対象を導く働きも that は持たない。',
              'so は so + 形容詞・副詞（so serious）で程度を強める副詞か、主語と動詞のそろった節を従えて結果・目的を示す接続詞。空所の後ろは前置詞句なのでどちらの型にも収まらず、比較級 less の比較対象を導く働きも so は持たない。'],
        topics: ['comp'], tag: '比較' },
      { id: 'v3q144', no: 144, stem: null,
        choices: ['whereas', 'despite', 'unless', 'provided'],
        answer: 3,
        exp: '「本体が健全であれば」という条件。provided (that)。',
        why: ['対比。', '前置詞。', 'unless で読むと「本体が健全でなければ交換は経済的」となる。これは次段落の the calculation changes（主基板が壊れた場合は計算が変わる）と、前段を「単純なケース」と総括する挿入文 That is the straightforward case.（No.145 の正解）が置く読み――本体が健全な場合を「経済的」側とする――に正面から矛盾する。文書内の記述で読みが確定するため unless は使えない。', '正解。'],
        topics: ['conjprep'], tag: '接続語' },
      { id: 'v3q145', no: 145, stem: null,
        choices: [
          'All repairs carry a twelve-month guarantee.',
          'That is the straightforward case.',
          'Our workshop is located in Dundee.',
          'Sensors can be ordered directly from our website.',
        ],
        answer: 1,
        exp: '直前がセンサー・表示部という「経済的に修理できる」場合、直後が「主基板が壊れた場合は計算が変わる」。両者をつなぐには、前段を「単純なケース」と総括する文が要る。',
        why: ['保証の話は対比の橋渡しにならない。', '正解。', '所在地は文脈から外れる。', '注文方法も接続しない。'],
        topics: ['p6ins'], tag: '文挿入' },
      { id: 'v3q146r', no: 146, stem: null,
        choices: ['values', 'valued', 'valuing', 'to value'],
        answer: 1,
        exp: 'コンマの後ろは、直前の名詞句 a trade-in against a current model を後ろから修飾する分詞句。value は「〜を査定する・評価する」という他動詞で（LDOCE は verb [transitive]、Collins は vb (tr)、American Heritage は tr.v. と、いずれも他動詞のみを立項）、目的語となる名詞句を必ず取る。空所の後ろにあるのは on condition rather than age という前置詞句だけで、目的語が無い。査定される側（下取り品）が修飾される名詞として前に出ているのだから、動詞は過去分詞になる。',
        why: ['三人称単数現在形の定形動詞。定形動詞を立てると節がもう一つできるが、節と節を並べるには and・but のような等位接続詞か関係詞が要り、コンマだけでは足りない。複数名詞 values（査定額）と読んでも、a trade-in against a current model を言い換える同格の名詞句にはならない。',
              '正解。valued on condition rather than age で「年式ではなく状態に基づいて査定された（下取り品）」。査定される側が修飾先の名詞に回っているので、動詞は過去分詞の形をとる。査定の基準は valued on the basis of ... のように on で示す。',
              '現在分詞。主語 we に掛かる分詞構文と読んでも、他動詞 value の目的語にあたる名詞句が空所の後ろに無い。on condition rather than age は前置詞句であって目的語にはならない。',
              '不定詞。to のあとも value は他動詞のままで、目的語にあたる名詞句を必要とする。空所の後ろにあるのは前置詞句だけで、目的語が無い。'],
        topics: ['vform'], tag: '動詞の形' },
    ] },
];
