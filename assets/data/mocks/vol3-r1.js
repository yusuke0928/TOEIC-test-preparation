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
    id: `v3q${o.n[i]}`, no: o.n[i], stem: null, choices: x.c, answer: x.a,
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
    c: ['was', 'is', 'has been', 'were'],
    a: 3,
    e: 'neither A nor B は近い方の名詞（the subcontractors）に動詞を一致させる。複数なので were。',
    w: ['単数。', '単数の現在形。', '単数の現在完了。', '正解。'],
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
    w: ['現在分詞。結果が確認することになる。', '定形動詞。', '不定詞。', '正解。'],
    ja: '独立した 3 つの研究機関によって確認されたことで、その結果は現在では信頼できるとみなされている。' }),

  p5(106, { t: ['pron'], lv: 4,
    s: 'Applicants must submit their own transcripts; we cannot accept ------- sent by a third party.',
    c: ['this', 'these', 'those', 'that'],
    a: 2,
    e: '前出の複数名詞 transcripts の反復を避ける those。後ろに分詞句 sent by ... が続く形も those の特徴。',
    w: ['単数の指示語。', '後ろに修飾語を伴う用法は取りにくい。', '正解。', '単数。transcripts は複数。'],
    ja: '応募者は自身の成績証明書を提出しなければならず、第三者から送られたものは受理できません。' }),

  p5(107, { t: ['adjprep'], lv: 5,
    s: 'The findings are consistent ------- those reported by the Uppsala team last spring.',
    c: ['to', 'of', 'for', 'with'],
    a: 3,
    e: '「〜と一致する、矛盾しない」の意味の consistent は前置詞 with を固定で取る（be consistent with ...）。この語義で to / of / for を取る型はどの辞書にも無い。consistent が別の前置詞と結び付くのは「一貫している」の意味で in を取るとき（consistent in quality）だけ。',
    w: ['to を取るのは similar / identical / equivalent など別の形容詞。consistent to という型は無い。',
        'of を続ける型は無い。consistent の後ろに来るのは照合の相手であって、構成や所属ではない。',
        'for を続ける型は無い。',
        '正解。be consistent with「〜と一致する」。'],
    ja: 'その結果は、昨春ウプサラのチームが報告したものと一致している。' }),

  p5(108, { t: ['quant'], lv: 4,
    s: '------- applicant is required to provide two references from previous employers.',
    c: ['All', 'Few', 'Several', 'Each'],
    a: 3,
    e: 'applicant が単数形で動詞が is なので、単数名詞を取る each。',
    w: ['複数名詞を取る。', '複数名詞を取る。', '複数名詞を取る。', '正解。'],
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
    c: ['conducted', 'conducting', 'has conducted', 'was conducted'],
    a: 3,
    e: 'by 以下に行為者が示され、空所の後ろに目的語がないので受動態。',
    w: ['能動態。', '分詞。', '能動の現在完了。', '正解。'],
    ja: 'その安全審査は、運営会社自身ではなく外部の委員会によって実施された。' }),

  p5(111, { t: ['rel'], lv: 5,
    s: 'The technique ------- the laboratory is best known was developed almost by accident.',
    c: ['which', 'whose', 'that', 'for which'],
    a: 3,
    e: 'be known for「〜で知られる」の for が前に出た形。空所の後ろが完全文なので前置詞＋関係代名詞。',
    w: ['後ろが完全文なので不可。', '所有格。直後に名詞が必要。', '後ろが完全文なので不可。', '正解。'],
    ja: 'その研究室が最もよく知られている技法は、ほとんど偶然に開発されたものだった。' }),

  p5(112, { t: ['biz'], lv: 5,
    s: 'The clause allows either party to ------- the agreement if performance targets are not met.',
    c: ['reside', 'resign', 'rescind', 'resemble'],
    a: 2,
    e: 'rescind an agreement / a contract「（契約を）取り消す、解除する」。',
    w: ['「居住する」。', '「辞任する」。', '正解。', '「似ている」。'],
    ja: 'この条項により、業績目標が達成されない場合はいずれの当事者も契約を解除できる。' }),

  p5(113, { t: ['verbal'], lv: 5,
    s: 'The department has committed to ------- its energy consumption by a fifth within three years.',
    c: ['reducing', 'reduce', 'reduced', 'be reduced'],
    a: 0,
    e: 'be committed to の to は前置詞なので動名詞。',
    w: ['正解。', '原形。前置詞の後には置けない。', '過去分詞。', '受動の原形。'],
    ja: '当部門は 3 年以内にエネルギー消費量を 5 分の 1 削減することを約束している。' }),

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
    c: ['sufficiently', 'sufficient', 'sufficiency', 'suffice'],
    a: 0,
    e: '形容詞 compelling を修飾するので副詞。sufficiently + 形容詞 + to do の形。',
    w: ['正解。', '形容詞。形容詞を修飾できない。', '名詞。', '動詞。'],
    ja: '委員会は、その証拠が全面的な再検討を正当化するに足るほど説得力があると判断した。' }),

  p5(122, { t: ['cohesion', 'pron'], lv: 5,
    s: 'The building has two staircases; ------- of them is accessible from the loading area.',
    c: ['neither', 'either', 'both', 'each'],
    a: 0,
    e: '2 者の全否定は neither。動詞 is が単数形であることも根拠。',
    w: ['正解。', '「どちらか一方」。肯定になる。', '複数扱いで are になる。', 'each of them is も可だが、文意は「どちらも〜ない」。'],
    ja: 'この建物には階段が 2 つあるが、どちらも荷役区画からは入れない。' }),

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

  p5(125, { t: ['ptcp'], lv: 5,
    s: 'With the main road ------- for resurfacing, deliveries are being routed through the industrial estate.',
    c: ['closed', 'closing', 'closes', 'to close'],
    a: 0,
    e: '付帯状況の with + O + 分詞。道路は「閉鎖される」側なので過去分詞。',
    w: ['正解。', '現在分詞。道路が自ら閉じることになる。', '定形動詞。', '不定詞。'],
    ja: '主要道路が舗装のため閉鎖されているため、配送は工業団地経由に振り替えられている。' }),

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
    c: ['have', 'has', 'is', 'was'],
    a: 0,
    e: 'A number of + 複数名詞は複数扱い。The number of ...（単数扱い）との違いが要点。',
    w: ['正解。', '単数。', '単数の be 動詞。', '単数の過去形。'],
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
    c: ['upon', 'to', 'in', 'for'],
    a: 0,
    e: 'contingent は「〜次第である」の意味で前置詞 on / upon を固定で取る（be contingent on / upon ...）。この語義で to / in / for を取る型はどの辞書にも無い。',
    w: ['正解。be contingent upon「〜を条件とする」。on でも同じ。',
        'to を取るのは subject to ... など別の形容詞。contingent to という型は無い。',
        'in を続ける型は無い。',
        'for を続ける型は無い。'],
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
        choices: ['will shut off', 'shuts off', 'has been shut off', 'will be shut off'],
        answer: 3,
        exp: '水道本管は「止められる」側なので受動態。5 月 12 日からという未来の予定なので未来形。',
        why: ['能動態。', '現在形。', '現在完了。まだ止まっていない。', '正解。'],
        topics: ['ctense', 'voice'], tag: '態・時制' },
      { id: 'v3q132', no: 132, stem: null,
        choices: ['Nevertheless', 'Otherwise', 'Accordingly', 'Likewise'],
        answer: 2,
        exp: '「水が出ない」→「そこで給水車を手配した」という対応の関係。Accordingly。',
        why: ['逆接。', '「さもなければ」。', '正解。', '並列。'],
        topics: ['connect'], tag: '接続語' },
      { id: 'v3q133', no: 133, stem: null,
        choices: [
          'The car park will be closed to vehicles during the works.',
          'The supplier has apologised for the disruption.',
          'Members are reminded to renew their subscriptions by June.',
          'A tap and two watering cans will be attached to the bowser.',
        ],
        answer: 3,
        exp: '直後が「必要な分だけ汲んでください。給水車の容量は暖かい日の使用量の約 5 分の 1」と続く。給水車から水を汲む手段を先に示す文が自然につながる。',
        why: ['駐車場閉鎖なら給水車を置けず矛盾する。', '謝罪は次文の「必要な分だけ」につながらない。', '会費は無関係。', '正解。'],
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
        'When Orla Feeney took over the Anchor Bookshop in 2022, it carried about eleven thousand titles. It now carries four thousand, and turnover {{1}} by nineteen percent.',
        'The reduction was not a cost-cutting measure. Ms. Feeney describes it as a change in what the shop is for. "A shop with eleven thousand titles is a warehouse you can walk into," she says. "Nobody needs that any more. There is not {{2}} in a warehouse like that they cannot get in two clicks."',
        '{{3}} Each of the four thousand is there because a member of staff has read it and can say something about it. Shelf labels carry initials, and customers ask for the person rather than the section.',
        'Not every category survived the cut. Reference and travel went almost entirely, {{4}} the shop\'s children\'s section doubled.',
      ],
    },
    q: [
      { tag: '時制', t: ['ctense'],
        c: ['rose', 'will rise', 'rises', 'has risen'],
        a: 3,
        e: '2022 年の引き継ぎから現在までの変化を述べており、直前の carries（現在形）と並ぶ。現在完了が自然。',
        w: ['過去形。現在に至る変化を表しにくい。', '未来形。', '現在形。変化を表さない。', '正解。'] },
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
        c: ['must send', 'must be sent', 'sending', 'have sent'],
        a: 1,
        e: '記録は「送られる」側なので受動態。3 月 1 日からの規定なので助動詞 must を伴う。',
        w: ['能動態。', '正解。', '分詞。', '能動の現在完了。'] },
      { tag: '接続語', t: ['connect'],
        c: ['As a result', 'By contrast', 'For example', 'In short'],
        a: 0,
        e: '「火曜に請求された記録が翌月曜まで放置され得た」→「その結果、平均取得日数は 11 日だった」という因果。',
        w: ['正解。', '対比ではない。', '例示でもない。', '要約でもない。'] },
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
        c: ['more useful', 'as useful', 'most useful', 'usefully'],
        a: 0,
        e: 'than があるので比較級。「期限内に送られた半分の台車の方が、3 日遅れの満杯の台車より役に立つ」。',
        w: ['正解。', '原級比較には as ... as が必要。', '最上級は than と結び付かない。', '副詞。be 動詞の補語にならない。'] },
      ],
  }),

  p6({
    n: [143, 144, 145, 146], lv: 5, t: ['cohesion', 'connect'],
    doc: {
      label: 'Web page',
      title: 'Kestrel Instruments — Repair or Replace?',
      body: [
        'Customers often ask whether an instrument that is more than ten years old is worth repairing. Our answer depends less on age {{1}} on which part has failed.',
        'Sensors and displays are consumable. We hold them for fifteen years from the end of production, and replacing one is usually economic {{2}} the rest of the instrument is sound.',
        '{{3}} Where a main board has failed, the calculation changes: boards are not stocked beyond ten years, and a repair may depend on recovering a component from another unit.',
        'If we cannot obtain a part, we will say so rather than quote for a repair we are not confident of completing. In {{4}} case we will offer a trade-in against a current model, valued on condition rather than age.',
      ],
    },
    q: [
      { tag: '比較', t: ['comp'],
        c: ['as', 'than', 'that', 'so'],
        a: 1,
        e: 'less A than B「A よりむしろ B」。depends less on age than on which part has failed。',
        w: ['as が必要なのは as ... as の形。', '正解。', 'that は入らない。', 'so も入らない。'] },
      { tag: '接続語', t: ['conjprep'],
        c: ['provided', 'despite', 'unless', 'whereas'],
        a: 0,
        e: '「本体が健全であれば」という条件。provided (that)。',
        w: ['正解。', '前置詞。', '条件だが否定になり文意が逆。', '対比。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'All repairs carry a twelve-month guarantee.',
          'That is the straightforward case.',
          'Our workshop is located in Dundee.',
          'Sensors can be ordered directly from our website.',
        ],
        a: 1,
        e: '直前がセンサー・表示部という「経済的に修理できる」場合、直後が「主基板が壊れた場合は計算が変わる」。両者をつなぐには、前段を「単純なケース」と総括する文が要る。',
        w: ['保証の話は対比の橋渡しにならない。', '正解。', '所在地は文脈から外れる。', '注文方法も接続しない。'] },
      { tag: '結束性', t: ['cohesion', 'pron'],
        c: ['this', 'that', 'each', 'any'],
        a: 1,
        e: '直前の「部品が入手できない場合」を受ける in that case「その場合には」。',
        w: ['in this case も可能だが、前文の条件を受ける定型は that。', '正解。', '複数の場合を前提とする。', '不特定になり文意が緩む。'] },
      ],
  }),
];
