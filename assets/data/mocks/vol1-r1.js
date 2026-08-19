/* =============================================================
   予想模試 Vol.1 — Part 5（No.101–130）／ Part 6（No.131–146）
   ============================================================= */

const p5 = (no, o) => ({
  id: `v1-p5-${no}`, part: 5, kind: 'single', topics: o.t, level: o.lv ?? 3,
  questions: [{
    id: `v1q${no}`, no, stem: o.s, choices: o.c, answer: o.a,
    exp: o.e, why: o.w, ja: o.ja, topics: o.t,
  }],
});

const p6 = (o) => ({
  id: `v1-p6-${o.n[0]}`, part: 6, kind: 'doc', topics: o.t, level: o.lv ?? 4, docCount: 1,
  docs: [o.doc],
  questions: o.q.map((x, i) => ({
    id: `v1q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t, tag: x.tag,
  })),
});

export const R1 = [

  /* ══════════ PART 5 ══════════ */
  p5(101, { t: ['pos'], lv: 3,
    s: 'The training coordinator distributes the revised safety checklist to all shift supervisors ------- .',
    c: ['monthly', 'months', 'monthlies', 'month'],
    a: 0,
    e: '文の要素はすべてそろっており、空所には動詞 distributes を修飾する副詞が入る。monthly は形容詞と副詞の両方で使える。',
    w: ['正解。', '名詞の複数形。', '名詞の複数形。', '名詞。前置詞も冠詞もなく置けない。'],
    ja: '研修担当者は、改訂した安全チェックリストを毎月すべてのシフト責任者に配布している。' }),

  p5(102, { t: ['adjprep'], lv: 4,
    s: 'Access to the server room is restricted ------- personnel who have completed the security briefing.',
    c: ['to', 'by', 'with', 'for'],
    a: 0,
    e: 'be restricted to ...「〜に限定されている」。restrict は「限定する対象・範囲」を to で示す動詞で（limited to / confined to も同型）、受動態でもその to が残る。',
    w: ['正解。be restricted to + 人「〜に限って認められている」。',
        'restricted by は「何によって制限されているか」（手段・行為者）を示す型（access restricted by a keypad / by security staff）。by を入れると、説明を受けた職員が制限する側になり、立ち入りを認められる側を示せない。',
        'with は手段・道具を示す前置詞としてなら使えるが（fenced off with barriers）、続くのは道具・材料である。人を with で受けて「立ち入りを認められる範囲」を示す用法は無い。',
        'for は「〜にとっては」と、制限を受ける側の事情を示す（Access is restricted for visitors.「来訪者は立ち入りが制限される」）。for を入れると説明を受け終えた職員こそが制限される側になり、直後の関係詞節と矛盾する。'],
    ja: 'サーバー室への立ち入りは、セキュリティ説明を受けた職員に限定されている。' }),

  p5(103, { t: ['vform'], lv: 4,
    s: 'Once the inspection ------- , the crew will be permitted to resume work on the upper deck.',
    c: ['will conclude', 'concludes', 'concluding', 'is concluding'],
    a: 1,
    e: 'once は時を表す接続詞。節内は未来の内容でも現在形で表す。',
    w: ['副詞節中に will は用いない。', '正解。', '分詞。述語動詞にならない。', '進行形は完了の時点を示しにくい。'],
    ja: '点検が完了し次第、作業員は上部デッキでの作業再開を許可される。' }),

  p5(104, { t: ['colloc'], lv: 4,
    s: 'The logistics team was unable to ------- the deadline because two containers were held at the port.',
    c: ['reach', 'meet', 'achieve', 'arrive'],
    a: 1,
    e: 'meet a deadline「納期に間に合わせる」が定型。期限は「守る・間に合わせる」対象であり、meet（口語では make）以外の動詞はこの意味で deadline と結び付かない。',
    w: ['reach は reach a conclusion / reach an agreement のように「到達した結果」を目的語に取る。deadline と組む場合は「期日が来る」という時点への到達の意味にしかならず、期限を守るという意味では使えない。',
        '正解。meet a deadline。',
        'achieve は achieve a goal / a target のように達成すべき成果を目的語に取る。deadline は達成する成果ではなく守るべき期限なので組まない。',
        '自動詞。arrive at ... の形でしか続けられず、the deadline を直接目的語にできない。'],
    ja: 'コンテナ 2 本が港で留め置かれたため、物流チームは納期に間に合わせられなかった。' }),

  p5(105, { t: ['pron'], lv: 4,
    s: 'The two branches submitted their proposals separately, and ------- included a detailed cost breakdown.',
    c: ['both', 'either', 'each other', 'another'],
    a: 0,
    e: '2 つの支店の両方が、という文脈。動詞 included が複数扱いでも成立する both が適切。',
    w: ['正解。', 'either は「どちらか一方」で、2 つとも含めた意味にならない。', '相互代名詞。主語にならない。', '「もう一つ」。3 つ目が存在する前提になる。'],
    ja: '2 つの支店は別々に提案書を提出し、どちらにも詳細な費用内訳が含まれていた。' }),

  p5(106, { t: ['biz'], lv: 5,
    s: 'Delegates are reminded that the conference badge must be worn at all times while on the ------- .',
    c: ['premises', 'premise', 'promises', 'premiums'],
    a: 0,
    e: 'premises は「敷地、構内」の意味では常に -s の形で使い、on the premises で場所を表す。単数形の premise は「前提」で、場所を指す用法を持たない。',
    w: ['正解。on the premises「構内で」。',
        '「前提」。この語義では on the premise that ... / on the premise of ... の形で仮定を導き、後ろに that 節か of 句が必要になる。場所を示す while on ------- の空所には入らない。',
        '「約束」。premises との音の引っ掛けで、場所を表す語ではない。',
        '「割増料金、保険料」。金銭を表す語で、場所を表さない。'],
    ja: '参加者は、構内にいる間は常に会議用バッジを着用するよう注意されている。' }),

  p5(107, { t: ['ptcp'], lv: 4,
    s: 'Applications ------- after the closing date will be held for the next recruitment cycle.',
    c: ['receiving', 'receive', 'to receive', 'received'],
    a: 3,
    e: '応募書類は「受け取られる」側なので過去分詞が名詞を後置修飾する。空所の後ろに目的語がないことも根拠。',
    w: ['現在分詞。応募書類が受け取ることになる。', '原形。既に述語動詞がある。', '不定詞。「これから受け取る」意になり文意に合わない。', '正解。'],
    ja: '締切後に受理された応募書類は、次回の採用時期まで保留される。' }),

  /* id は v1q108r（no は模試の通し番号として 108 を維持するが、stem を差し替えたため設問 id は
     新規採番）。旧 stem は '... are therefore not ------- comparable.' で、not nearly が
     「まったく〜ない、とうてい〜でない」（LDOCE: not nearly ＝ not at all）と読めるため
     not nearly comparable が「およそ比較にならない」という第二の正解になっていた。
     p5() ヘルパーは id を no から自動生成し no を変えずに id だけ変える手段がないため、
     このユニットだけヘルパーを使わず直接記述する。 */
  { id: 'v1-p5-108r', part: 5, kind: 'single', topics: ['adv'], level: 5,
    questions: [{
      id: 'v1q108r', no: 108,
      stem: 'The two datasets were collected using different instruments and therefore cannot be ------- compared.',
      choices: ['nearly', 'directly', 'shortly', 'evenly'],
      answer: 1,
      exp: 'directly compare「直接比べる」。空所は受動態の compared に掛かる副詞なので、「比べ方」を表せる語でなければならない。測定機器が違うので換算を挟まずには比べられない、という報告文の定型。',
      why: ['nearly は「もう少しで（〜するところ）」と完了の手前を表す副詞で（nearly finished / nearly two hours）、比べ方＝様態を表す語ではない。cannot と結ぶと「比較しかけることができない」となり、機器が違うことがその理由になっていない。not nearly（＝まったく〜ない）という成句もあるが、これは not と nearly が隣り合うときの形で、cannot be ------- compared では両者の間に be が入るためこの読みは作れない。',
            '正解。directly compared「直接比較される」。not directly comparable と並ぶ、報告書の定型。',
            'shortly は「まもなく」（Ms Jones will be back shortly.）と「そっけなく」（"I\'ve explained that already," Rod said shortly.）が主な語義で、辞書によっては「簡潔に、手短に」も挙げる。ただしどの語義を取っても、「まもなく比較できない」「そっけなく比較できない」「手短に比較できない」のいずれも、機器が違うことを理由とする therefore の因果を受けられない。',
            'evenly は「等しく行き渡る／等分される／一定の調子で」を表す副詞で、付く先は分配・配置・拮抗である（evenly covered / split evenly / evenly matched）。compare は分け合う動作でも拮抗でもないため様態を修飾できない。「対等な条件で比べる」は on equal terms や fairly であって evenly ではない。'],
      ja: 'その 2 つのデータ群は異なる機器で収集されたため、直接比較することはできない。',
      topics: ['adv'],
    }],
  },

  p5(109, { t: ['rel'], lv: 5,
    s: 'The consultant recommended a supplier ------- delivery record had been verified by three independent clients.',
    c: ['which', 'whose', 'that', 'who'],
    a: 1,
    e: '空所の直後が無冠詞の名詞 delivery record で、「その業者の納品実績」という所有関係。所有格の関係代名詞。',
    w: ['直後に名詞は続かない。', '正解。', '直後に名詞は続かない。', '主格。直後に名詞は置けない。'],
    ja: 'そのコンサルタントは、納品実績が独立した 3 社の顧客によって検証されている業者を推薦した。' }),

  p5(110, { t: ['conjprep'], lv: 4,
    s: '------- the extended opening hours, footfall in the evening has increased by nearly a fifth.',
    c: ['Because', 'So that', 'Even though', 'Owing to'],
    a: 3,
    e: '空所の後ろが the extended opening hours という名詞句なので前置詞句。owing to は「〜のおかげで」。',
    w: ['接続詞。後ろに節が必要。', '接続詞。', '接続詞。後ろに節が必要。', '正解。'],
    ja: '営業時間の延長により、夕方の来客数は 5 分の 1 近く増加した。' }),

  p5(111, { t: ['verbal'], lv: 4,
    s: 'The committee postponed ------- on the funding request until the audited accounts became available.',
    c: ['to decide', 'decide', 'deciding', 'decided'],
    a: 2,
    e: 'postpone は動名詞のみを目的語に取る。',
    w: ['不定詞は取らない。', '原形。目的語にならない。', '正解。', '過去形。'],
    ja: '委員会は、監査済みの会計書類が出そろうまで資金要請についての決定を延期した。' }),

  /* id は v1q112r（no は 112 を維持。設問を丸ごと差し替えたため設問 id は新規採番）。
     旧 v1q112 は 'All contractors are required to ------- with the site\'s waste-segregation
     policy.' ／ ['comply','obey','observe','follow'] ／ 正解 comply。差し替えた理由は 3 つ。

     (1) ドリル vusage-05 のほぼ複製だった。vusage-05 は
         'All contractors must ------- with the site\'s hearing-protection policy without
         exception.' ／ ['obey','follow','comply','observe']。書き出し・枠・4 語が同じで、
         違うのは hearing-protection か waste-segregation かだけ。利用者はドリルで解いた文に
         模試で再会することになる。さらに comply / adhere / conform / observe の対比自体が
         colloc-06r2・colloc3-03r でも使われており、この語群は既に 4 問使用済み。
     (2) level の詐称。comply with は単語帳の標準項目で、誤答 3 つは「他動詞だから前置詞を
         取れない」の一規則で一括消去できる。CLAUDE.md の lv3 の定義そのものなのに lv:5 だった。
     (3) 同じ Part 5 の 4 問先の 116（absolve … of）と、抽象化すると
         「stem にある前置詞から動詞を決める」という同型だった。

     差し替え先は使役動詞の原形不定詞。assets/data 全 1638 問を通して
     let / allow / permit / enable が選択肢に立つ設問は一つも無く（causative の設問自体が皆無）、
     決め手が前置詞ではなく〈目的語の後ろに置かれた to の無い原形〉なので 116 とも重ならない。
     既存の vusage / colloc 58 問の判断過程（動詞×名詞のコロケーション 25 問、他動詞性 11 問、
     V+O+to 不定詞 6 問、V+人+of/that 5 問、前置詞から動詞を決める 3 問）のどれにも属さない。

     閉じ方の確認（構造で切る）：
     ・LDOCE の型は allow somebody to do something ／ permit somebody to do something ／
       enable somebody/something to do something。3 語とも原形不定詞を取る型を持たない。
       let 側は LDOCE が語形パターン let somebody do something を立て（Let Johnny have a go on
       the computer now. ／ Some people seem to let their kids do whatever they like.）、
       さらに allow と permit の項に置かれた GRAMMAR: Comparison 欄で
       「let • You let someone do something: Her boss lets her work from home.
       ✗Don't say: let someone to do something」と、肯定形の型と誤りの型を並べて示している。
       ※初版の解説は「Cambridge は let に [T + infinitive without to] という文法ラベルを
         付けている」と書き、別の役が「現行版で確認できなかった」と報告して差し戻された。
         2026-08-17、レビュー役が dictionary.cambridge.org/dictionary/english/let を
         直接取得したところ、**この表示は実在した**（let verb (ALLOW) の見出しに
         B1 [ T + infinitive without to ]、以下の語義にも [ T + obj + infinitive without to ]）。
         前回の「確認できなかった」は Cloudflare による取得失敗であって、記述の誤りではない。
         ただし解説は LDOCE 版のままにしてある。理由は 2 つ。(1) Cambridge は日によって
         403 になり、学習者が引いたときに確かめられないことがある。(2) CLAUDE.md の
         「排除の根拠は肯定形の構造規則で書く」に照らすと、文法ラベルの引用より
         let somebody do something という型の提示のほうが強い。
         LDOCE 側は同日 ldoceonline.com を直接取得して上記の記述を確認済み。
     ・逃げ道も塞いである。allow には「〜だと認める」の allow that ... があるが（LDOCE:
       I allow that there may have been a mistake.）その節は直説法なので、単数の
       a team leader を主語にするなら approves でなければならず、原形の approve は受けられない。
       目的語を単数にしてあるのはこのため。
     ・allow / permit には二重目的語型もあるが（LDOCE: Passengers are allowed one item of hand
       luggage each. ／ The bill would permit workers 12 weeks of unpaid leave.）、2 つ目に
       来るのは名詞句で、動詞 approve は置けない。approve は名詞用法を持たない（名詞は approval）
       ので、approve overtime requests を名詞句と読む道も無い。

     level は 3。単一の軸「800点台の高校英語教師がこれを落とすとしたら何を知らなかったか」で言えば
     「使役動詞 let が原形不定詞を取ること」で、これは高校文法の標準項目（LDOCE は let を
     ●●● S1 W1＝話し言葉・書き言葉とも最頻 1000 語に分類し、Cambridge はこの語義を B1 と表示する。
     どちらも 2026-08-17 に再取得して確認）。
     誤答 3 つも「to が要る」の一規則で一括消去できる。lv3 の定義に二重に当たる。
     なお 900 帯の vusage の型は既存問題でほぼ使い尽くされており（上記 58 問）、112 に lv4/lv5 を
     置くには vusage の外に枠を移す必要がある。それは型の設計の話なのでメインの判断に委ねる。

     p5() ヘルパーは id を no から自動生成し no を変えずに id だけ変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v1-p5-112r', part: 5, kind: 'single', topics: ['vusage'], level: 3,
    questions: [{
      id: 'v1q112r', no: 112,
      stem: 'The new scheduling tool will ------- a team leader approve overtime requests without contacting the regional office.',
      choices: ['let', 'allow', 'permit', 'enable'],
      answer: 0,
      exp: '空所の後ろは〈目的語 a team leader ＋ approve〉で、approve に to が付いていない。目的語のあとに to の無い原形をそのまま続けられるのは、4 語のうち使役動詞 let だけである。LDOCE は let の語法を let somebody do something という形で示し（Let Johnny have a go on the computer now. ／ Some people seem to let their kids do whatever they like.）、allow と permit の項に置かれた文法欄では allow somebody to do something と let somebody do something を並べたうえで、let somebody to do something のほうに誤りの印を付けている。allow・permit・enable は LDOCE がそろって〈目的語＋to 不定詞〉の型（allow somebody to do something ／ permit somebody to do something ／ enable somebody/something to do something）で立項しており、to を省くことはできない。',
      why: ['正解。let ＋ 目的語 ＋ 原形不定詞。Her boss lets her work from home. のように目的語の直後に to の無い原形が続き、The tool lets you edit the schedule. と主語が人でなくても使える。',
            'LDOCE の型は allow somebody to do something。a team leader to approve なら正しいが、to の無い原形は続けられない。allow には「〜だと認める」の意味で that 節を取る用法もあるものの（I allow that there may have been a mistake.）その節は直説法なので、単数の a team leader を主語にするなら approves でなければならず、原形の approve は受けられない。',
            'LDOCE の型は permit somebody to do something で、これも to が必要。permit には二重目的語の型もあるが（The bill would permit workers 12 weeks of unpaid leave.）、2 つ目に来るのは名詞句であって、動詞 approve を置くことはできない。',
            'LDOCE が挙げる型は enable somebody/something to do something ただ一つで（The loan enabled Jan to buy the house.）、to は省略できない。「〜を可能にする」の意味でも原形不定詞を取る用法を持たない。'],
      ja: '新しいスケジュール管理ツールを使えば、チームリーダーは地域オフィスに連絡しなくても残業申請を承認できるようになる。',
      topics: ['vusage'],
    }],
  },

  p5(113, { t: ['comp'], lv: 5,
    s: 'The refurbished units consume ------- less energy than the models they replaced.',
    c: ['very', 'too', 'considerably', 'as'],
    a: 2,
    e: '比較級 less を強める副詞は much / far / considerably / significantly。very と too は比較級を修飾しない。',
    w: ['原級を修飾する。', '「〜すぎる」。比較級に付かない。', '正解。', 'as ... as の形になっていない。'],
    ja: '改修された機器は、置き換え前の機種よりかなり少ない電力しか消費しない。' }),

  p5(114, { t: ['pos'], lv: 4,
    s: 'Ms. Renaud\'s ------- of the licensing terms saved the company from a costly dispute.',
    c: ['interpret', 'interpreted', 'interpretation', 'interpretive'],
    a: 2,
    e: '所有格 Ms. Renaud\'s と前置詞 of の間なので名詞が入る。',
    w: ['動詞。', '過去分詞。', '正解。', '形容詞。'],
    ja: 'ルノー氏によるライセンス条件の解釈が、会社を高くつく紛争から救った。' }),

  p5(115, { t: ['subj'], lv: 5,
    s: 'The regulator has requested that the utility ------- its emergency procedures within sixty days.',
    c: ['revises', 'will revise', 'revised', 'revise'],
    a: 3,
    e: 'request that ... の that 節は「（should）＋原形」。三単現の s は付けない。',
    w: ['三単現の s。', '未来形。', '過去形。', '正解。'],
    ja: '規制当局は、その公益事業者に対し 60 日以内に緊急時手順を改訂するよう要請した。' }),

  /* id は v1q116r3（no は 116 を維持。設問を丸ごと差し替えたため設問 id は三度目の新規採番）。
     v1q116r2 は economic / economical の対を避けるための応急処置で、誤答は閉じていたものの
     論点が confuse から pos（economize / economy / economical / economically の品詞識別）に
     落ちており、模試の 116 としては軽すぎた。confuse の設問として立て直すにあたり、
     辞書が相互に立項していない -olve 系の 4 語に差し替え、「目的語＋of 句を取れるか」という
     構造で切る形にした。挿入句 with immediate effect を挟んで of 句を空所から離してあるので、
     dissolve は空所の近傍だけを見れば正しい英文になる（＝離れた位置の構造でのみ排除される）。
     p5() ヘルパーは id を no から自動生成し no を変えずに id だけ変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。

     別の目による検証（作問者が直接引けなかった辞書を含む）：
     ・Cambridge は absolve someone of something を型として立項し、能動の例文
       The priest absolved him of all his sins. を挙げる。dissolve の語義は「溶ける」
       「公的な組織・法的な取り決めを終わらせる」の 2 つだけで、American Dictionary の例文が
       They decided to dissolve the partnership.。devolve は devolve sth to sb/sth と
       devolve sth into sth、evolve は evolve from / evolve into のみ。
     ・Collins English Dictionary 12th（Collins 本体は 403 のため The Free Dictionary の
       完全版リプリントで確認）：dissolve は 9 語義とも〈目的語＋of 句〉を持たず、devolve は
       (foll by: on, upon, to)、evolve は「発展させる」「（熱・気体を）放出する」。
       absolve は (usually foll by from) to release from blame, sin, punishment, obligation。
     ・Merriam-Webster はどの経路（WebFetch・curl・r.jina.ai・Wayback）でも取得できなかったため、
       Google Books Ngrams の用例で代替した。en-2019 コーパスで
       absolved * of の上位は him / them / himself / her / themselves / itself / me / it /
       Complainant / you と、すべて〈目的語＋of〉。対して dissolved * of の上位は
       out of・because of・as of・some of と、dissolved monastery of / dissolved oxygen of の
       ような形容詞用法だけで、〈目的語＋of〉は 1 件も無い。devolved * of は much of・most of・
       many of の部分表現と devolved powers of などの形容詞用法のみ。evolved * of は
       out of・because of・independently of（of は independently が取るもの）のみ。
       dissolved him of・devolved him of・evolved him of・dissolved them of・devolved them of は
       いずれも 0 件（1500–2019）。
     ・法律辞書（West's Encyclopedia of American Law）は dissolve を
       「To terminate; abrogate; cancel; annul. To release or unloose the binding force of
       anything.」と記す。「拘束力を解く」語義は実在するので、解説はこれを否定せず、
       解かれるのが目的語に置かれた契約・組織そのものである（当事者＋of ではない）という
       目的語の型で切っている。
     level 5 の根拠は「誤答の 1 つが単独では正しい英語で、離れた位置の構造でのみ落ちる」＝lv5(b)。
     作問者の「devolve は目的語の型、evolve は自動詞性という別個の事実でも独立に死ぬので
     単一規則の一括消去ではない」という説明は、解答手順としては誤り（of の規則だけで 3 つとも
     消えるので、その 2 つは冗長な追加根拠にすぎない）。lv5 が成り立つのは規則の数ではなく、
     dissolved the partnership, with immediate effect. が単独では完全に正しい英文で、
     排除子の of 句が 5 語先にあるためである。 */
  { id: 'v1-p5-116r3', part: 5, kind: 'single', topics: ['confuse'], level: 5,
    questions: [{
      id: 'v1q116r3', no: 116,
      stem: 'The settlement signed last month ------- the partnership, with immediate effect, of any further liability under the warehouse lease.',
      choices: ['dissolved', 'devolved', 'absolved', 'evolved'],
      answer: 2,
      exp: 'absolve A of B「A を B（責任・非難）から免れさせる」。空所の動詞は、目的語 the partnership を取ったうえで、挿入句をはさんだ先の of any further liability ... まで従えなければならない。この「目的語＋of 句」の型を持つのは 4 語のうち absolve だけで、LDOCE は absolve somebody from/of something として立項し、Cambridge は absolve someone of something の型に The priest absolved him of all his sins. という能動の例文を、American Heritage は語義に to relieve of a requirement or obligation を挙げる。挿入句 with immediate effect の手前で読み止めると他の語でも文が成り立つように見えるが、その読みでは of 句の掛かる先が無くなる。',
      why: ['「（組織・契約関係を）解消する」。dissolve the partnership 自体は正しい組み合わせで（Cambridge の例文が They decided to dissolve the partnership.）、The settlement signed last month dissolved the partnership, with immediate effect. までなら完結した正しい英文になる。法律用語としての dissolve にも「拘束力を解く」という語義がある。ただしその拘束力を解かれるのは目的語に置かれた契約・組織そのもので、dissolve が取る目的語は〈解消される対象〉一つに限られる（dissolve a marriage / dissolve an injunction / dissolve parliament）。当事者を目的語に置き、そのうえで of 句で切り離す義務を示す形は持たないため、後半の of any further liability ... が掛かる先を失う。',
            '「（権限・職務を）下位の組織や人に移譲する」。目的語に立つのは移譲される権限・職務のほうで、移譲先は devolve powers to the regional office / responsibility devolves on the manager のように to・on で示す。組織を目的語に取る型もあるが、それは devolve the central investigative unit into six regional bodies のように分割後の姿を into で示すものである。当事者を目的語に置いて of 句で責任を切り離す形は持たない。',
            '正解。absolve A of B「A を B（責任）から免れさせる」。absolve A from B も同義で使える。',
            '「（時間をかけて）発展する、進化する」。自動詞が中心で、他動詞で使うときの目的語も evolve a system / evolve its own style of teaching のように時間をかけて作り上げるものに限られる（化学の「（熱・気体を）放出する」も他動詞用法だが、目的語は放出される物質である）。前置詞を伴う場合も evolve from / evolve into で、当事者を目的語に取ってそこに of 句を続ける型は持たない。'],
      ja: '先月調印された和解により、そのパートナーシップは、倉庫の賃貸借契約に基づくそれ以上の責任を即時に免れた。',
      topics: ['confuse'],
    }],
  },

  p5(117, { t: ['quant'], lv: 4,
    s: '------- of the four bids met the technical specification, so the tender will be reissued.',
    c: ['Neither', 'Both', 'Either', 'None'],
    a: 3,
    e: '4 者以上の全否定は none。neither は 2 者に限定される。後半の「再入札」とも整合する。',
    w: ['2 者の否定。', '2 者の両方。文意も逆。', '2 者のうち一方。', '正解。'],
    ja: '4 件の入札のいずれも技術仕様を満たさなかったため、入札はやり直される。' }),

  p5(118, { t: ['voice'], lv: 4,
    s: 'A discrepancy in the stock count ------- during last Friday\'s spot check.',
    c: ['was arisen', 'has arisen', 'was arising', 'arose'],
    a: 3,
    e: 'arise は自動詞で受動態にできない。last Friday という過去の時点があるので過去形。',
    w: ['自動詞に受動態は不可。', '現在完了は明確な過去時点と併用できない。', '進行形は瞬間的な発生に合わない。', '正解。'],
    ja: '先週金曜の抜き取り検査中に、在庫数の不一致が判明した。' }),

  p5(119, { t: ['adv'], lv: 5,
    s: 'Two of the three panellists withdrew; -------, the session was reduced to a single presentation.',
    c: ['however', 'alternatively', 'otherwise', 'consequently'],
    a: 3,
    e: '「2 名が辞退した → だから 1 件の発表に縮小された」という因果。結果を導く consequently が入る。',
    w: ['however は前後を対立させる語。後半は前半の結果であって反対の内容ではないため、対立関係が作れない。',
        'alternatively は「その代わりに、あるいは」と別の選択肢を示す語。後半は実際に起きた結果であって代案ではない。',
        'otherwise は「さもなければ」＝前提が満たされなかった場合の帰結を導く語で、帰結節には would などの仮定法が必要（otherwise the session would have been cancelled）。ここは直説法の過去で事実を述べている。「その他の点では」の語義もあるが、その場合は前文と別の側面を述べる必要があり、縮小は辞退の直接の帰結なので当たらない。',
        '正解。consequently「その結果」。'],
    ja: '3 名の登壇者のうち 2 名が辞退したため、そのセッションは 1 件の発表に縮小された。' }),

  /* id は v1q120r（no は模試の通し番号として 120 を維持するが、中身を差し替えたため
     設問 id は新規採番。旧 id v1q120 を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     p5() ヘルパーは id を no からテンプレートリテラルで自動生成し、no を変えずに
     id だけ変える手段がないため、このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v1-p5-120r', part: 5, kind: 'single', topics: ['phrasal'], level: 4,
    questions: [{
      id: 'v1q120r', no: 120,
      stem: 'The two parties spent an extra week trying to ------- out a disagreement over the delivery schedule before signing the contract.',
      choices: ['wear', 'sell', 'iron', 'stand'],
      answer: 2,
      exp: 'iron out「（意見の相違や問題を）話し合いで解決する」。out と結んで「相違・不都合をならして解消する」意味を作るのは iron / sort / work / hammer / thrash の系列で、wear・sell・stand はこの系列に入らない。契約に署名する前に納期をめぐる相違を解消しようとした、という文脈にも合う。',
      why: ['wear out は「使い古してだめにする」「（人を）疲れさせる」「（言い訳などを）言い古す」。対立や抵抗を根気強く切り崩すのは wear down であって wear out ではなく、どの語義も「相違を解消して合意する」意味にはならない。',
            'sell out が目的語に取るのは在庫・チケット（売り切る）か、裏切る対象としての人・信条・自社の株式。a disagreement を取って「解消する」意味にはならない。',
            '正解。iron out「（意見の相違や問題を）話し合いで解決する」。iron out differences / issues のように、相違や問題を目的語に取る。',
            'stand out は「際立つ、目立つ」、および against / for を伴う「応じない、譲らない」で、いずれも自動詞。a disagreement のような目的語を直接続けられない。'],
      ja: '契約に署名する前に、両者は納期をめぐる意見の相違を解消しようと、さらに1週間を費やした。',
      topics: ['phrasal'],
    }],
  },

  p5(121, { t: ['pos'], lv: 5,
    s: 'The board found the restructuring proposal ------- argued but insufficiently costed.',
    c: ['persuasive', 'persuade', 'persuasion', 'persuasively'],
    a: 3,
    e: 'find + O + C の補語が argued（過去分詞）。その過去分詞を修飾するのは副詞。後半の insufficiently と並列になっている点も手がかり。',
    w: ['形容詞。過去分詞を修飾できない。', '動詞。', '名詞。', '正解。'],
    ja: '取締役会は、その再編案は説得力をもって論じられているが、費用の見積もりが不十分だと判断した。' }),

  /* id は v1q122r（no は 122 を維持。設問を丸ごと差し替えたため設問 id は新規採番）。
     旧 v1q122 は 'Bonus payments are contingent ------- the division meeting its annual safety
     targets.' ／ ['to','on','in','of'] ／ 正解 on。ドリル vocab.js の adjprep-06
     （'Bonus payments are contingent ------- the division meeting its annual revenue target.'
     ／ ['on','to','in','of'] ／ 正解 on）と、主語・述語・空所位置・4 前置詞・正解語まで同一で、
     違うのは文末の safety targets か revenue target かだけだった（機械抽出の一致率 69%）。
     利用者はドリルで解いた文に模試で再会することになる。さらに v3q130 も
     'Access to the archive is contingent ------- prior approval ...' で contingent upon を
     問うており、この形容詞は既に 3 問使用済み。

     差し替え先は「2 つの項を取る形容詞の、どちらの項の標識を選ぶか」。
     accountable は assets/data 全 1638 問を通して一度も使われていない（grep 済み）。
     既存 adjprep 40 問の判断過程は「1 つの前置詞句しか持たない形容詞の、その前置詞を選ぶ」か
     「与えられた前置詞に合う形容詞を選ぶ」のいずれかで、〈to 句と for 句を両方取る形容詞の、
     前半の項の標識〉を問うのは本問が初出。

     閉じ方の確認：
     ・LDOCE は accountable を [not before noun] とし、accountable to somebody（誰に対して）と
       accountable for something（何について）の 2 つの型だけを立項する。例文は
       The government should be accountable to all the people of the country. ／
       Managers must be accountable for their decisions. ／
       The hospital should be held accountable for the quality of care it gives.
     ・Collins English Dictionary 12th（本体は 403 のため The Free Dictionary の完全版
       リプリントで確認）は「responsible to someone or for some action; answerable」と、
       to と for の 2 つだけを語義の中に書き込んでいる。American Heritage も
       「governments must be accountable to someone beside themselves」
       「fully accountable for what they did」の 2 型のみ。
     ・Merriam-Webster はどの経路でも Cloudflare に阻まれ取得できなかった。**確認できていない。**
     ・Google Books Ngrams（en-2019, smoothing=3, 2019 年値）：
       accountable to 1.135e-06 ／ accountable for 1.866e-06 に対し、
       accountable of 2.717e-09、accountable from 2.064e-09 と 400〜900 倍低い雑音帯。
       held accountable of は 4.031e-10。
     ・with は当初 4 つ目の選択肢の候補だったが棄却した。accountable with 9.465e-09 は
       hold them accountable with clear metrics のような手段の with と、
       「the trustees are accountable with the Charity Commission for ...」＝
       「評議員は慈善委員会と共同で責任を負う」という随伴の with として読めてしまい、
       構造では殺せず意味の推論（閉じ方 3）に落ちるため。

     level 5 の根拠は lv5(b)。誤答 for は The trustees are accountable for the Charity
     Commission. までなら「評議員が慈善委員会の面倒を見る責任を負う」という完結した正しい
     英文で（accountable for は accountable to と拮抗する高頻度の型である。初版の comment は
     ここを 3.82e-07 対 3.84e-07 としていたが、レビュー役が再取得しても同じ値にならず、
     同じ comment の上のほうの数値とも桁が合わないので差し替えた。2026-08-17 の実測は
     is accountable for 9.511e-08 対 is accountable to 9.273e-08、
     are accountable for 1.051e-07 対 are accountable to 1.299e-07＝ほぼ同数）、
     これを排除するのは空所の 5 語先にあるもう一つの for 句だけである。トリガーは隣接語ではない。

     2026-08-17 レビュー役の独立検証。焦点は「for を accountable for X for Y と重ねて読む
     余地が無いか」。英語版 Wikipedia の insource:/accountable for [^.]{3,40} for the/ は 7 件で、
     内訳は (a) 等位接続（held accountable for their action and for their crimes）、
     (b) 2 つ目の for が最初の for 句の中の名詞に掛かる（accountable for high energy costs
     for the transportation of foodstuffs）、(c) 2 つ目の for が動詞句に掛かる
     （accountable for failing to properly prepare for the net zero transition ／
     accountable for having carried arms for the defence of the town）の 3 通りだけで、
     独立した for 句が 2 つ accountable に掛かる例は 0 件。本問は and が無く、
     the Charity Commission は前置詞句を従える余地の無い固有名詞なので (a)(b)(c) のどれにも
     逃げられない。したがって for は閉じている（この知見は why の 3 つ目に反映済み）。
     of と from も裏を取った。insource:/accountable of [a-z]/ は 9 件だが、すべて
     hold ... accountable of ...＝for の代用（翻訳文・非母語話者の文）で、〈相手〉を標示した例は 0 件。
     insource:/accountable from/ は 4 件だが accountable from the moment the case is opened の
     ような時間の起点ばかりで、監督機関を標示した例は 0 件。二項の枠そのものが実在することは
     insource:/answerable to the [A-Za-z ]+ for the/ が 13 件（answerable は LDOCE・Collins・
     American Heritage・Random House がそろって accountable の定義語に使う）で裏付く。
     LDOCE の accountable to ／ accountable for の 2 型と Collins の
     「responsible to someone or for some action; answerable」も再取得して一致を確認した。
     Merriam-Webster は今回も Cloudflare で 403。**確認できていない。**
     p5() ヘルパーは id を no から自動生成し no を変えずに id だけ変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v1-p5-122r', part: 5, kind: 'single', topics: ['adjprep'], level: 5,
    questions: [{
      id: 'v1q122r', no: 122,
      stem: 'The trustees are accountable ------- the Charity Commission for the accuracy of every return the charity files.',
      choices: ['of', 'to', 'for', 'from'],
      answer: 1,
      exp: 'accountable は項を 2 つ取る形容詞で、〈誰に対して弁明する義務があるか〉を to で、〈何について義務があるか〉を for で標示する（LDOCE は accountable to somebody と accountable for something の 2 型を立項し、Collins は語義そのものを「responsible to someone or for some action」と書く）。この文には空所の 5 語先に for the accuracy of every return ... という for 句が既にあり、そちらが〈対象〉を埋めている。したがって空所に入るのは〈相手〉を標示する to で、the Charity Commission が弁明の相手になる。',
      why: ['of が結び付くのは名詞の accountability のほう（the accountability of the board to its members）。形容詞 accountable が取る 2 つの項は〈相手＝to〉と〈対象＝for〉で、of はそのどちらの標識でもない。hold ... accountable of ... を for の代わりに使った例が稀に見られるが、それは〈対象〉の側の言い換えであって、この文では〈対象〉の枠を文末の for the accuracy ... が既に埋めているので、そう読んでも二重になって成立しない。',
            '正解。be accountable to + 監督する側「〜に対して説明責任を負う」。うしろの for the accuracy ... が〈何について〉を示す。',
            'accountable for は正しい型で、The trustees are accountable for the Charity Commission. だけを取り出せば「評議員が慈善委員会について責任を負う」という完結した正しい英文になる。落ちるのは離れた位置の構造による。accountable が取れる for 句は〈責任の対象〉ひとつだけで、この文には空所の先に for the accuracy of every return ... がもう一つある。and で等位に並べる場合（held accountable for their actions and for their crimes）を除いて、独立した for 句を 2 つ accountable に掛けることはできず、あとの for 句が掛かる先を失う。',
            'from は起点を示す前置詞。accountable が表すのは「誰に向かって弁明するか」という向きの関係なので、義務の向かう先は to で示す。起点を取る項はこの形容詞の項構造に無い。'],
      ja: '評議員は、当該慈善団体が提出するすべての報告書の正確性について、慈善委員会に対して説明責任を負う。',
      topics: ['adjprep'],
    }],
  },

  /* id は v1q123r（no は 123 を維持。設問を丸ごと差し替えたため設問 id は新規採番）。
     旧 v1q123 は 'Not until the second round of testing ------- the intermittent fault
     reproduced.' ／ ['was','it was','were','that was'] ／ 正解 was。ドリル grammar2.js の
     inv-05（'Not until the third round of testing ------- the intermittent fault reproduced.'
     ／ ['that was','it was','was','were'] ／ 正解 was）と、序数が second か third かを
     除いて stem が完全に同一、選択肢も 4 語すべて同じ、解説文も一字一句同じだった
     （機械抽出の一致率 80%）。流用として最も程度が重い。

     さらに、この「Not until / Only after ＋ 名詞句 → 主節の助動詞を選ぶ」型は
     v3q117（Only after the third inspection ------- the source of the leak identified.）と
     v5q117（Not until the final inspection ------- the wiring fault discovered.）でも
     使われており、模試 3 本が同じ枠を共有していた。したがって枠ごと差し替える。

     inv の既出 26 問を読み直して確認した判断過程は 4 種類しかない。
     (i) どの助動詞か（inv-02 Rarely does／inv-03 Under no circumstances are／inv-12 In no
     way is／v2q119 Seldom has／v4q117 Under no circumstances should／v3q117・v5q117・旧 123）、
     (ii) 倒置した語順そのもの（inv-01 Not only did they meet）、
     (iii) 後置された主語との数の一致（inv-04 Enclosed are）、
     (iv) 強調構文・省略・接続（inv-07/08/17/18/19/22/23/24）。
     本問は (ii) と (iii) を組み合わせつつ、トリガーを既出のどれとも違う〈文頭の so ＋ 形容詞〉に
     置いた。so 系のトリガーは inv-20（------- was the enthusiasm ... that ...／So・Very・
     Such・Too から Such を選ぶ）が唯一の先例だが、あちらの判断過程は「後ろが名詞句なので
     such、形容詞なら so」という程度語の選択であって、倒置の語順そのものは問うていない。
     Google Books Ngrams でも so heavy was the 3.619e-09 に対し so was heavy the は 0 件、
     so heavy were the demand も 0 件。

     level 5 の根拠は、3 つの誤答を落とす手がかりがいずれも空所の右側にあること。
     heavy were を落とす数の情報（the demand が単数）は空所の 2 語右、
     heavily was を落とす情報（文末まで分詞が一つも無い）は文の残り全体を読まないと確定しない。
     なお so heavily was 自体は 1.320e-09 と実在する並びで（so heavily was he influenced ... の
     ように後ろに過去分詞が来る形）、「そんな語順は無い」ではなく「掛かる先が無い」で切っている。

     2026-08-17 レビュー役の独立検証。焦点は「heavy were が demand を集合名詞として
     複数扱いする読みで復活しないか」。復活しない。demand は集合名詞（committee 型）ではなく
     抽象的な不可算名詞で、英式の集合名詞複数一致の対象にならない。
     英語版 Wikipedia の insource:/[Ss]o heavy were the/ は 4 件で、主語はすべて複数
     （losses／the Luftwaffe's losses／rains／these defeats）。
     insource:/[Tt]he demand were/ は 1 件だけヒットするが、読むと主語は
     these deviations on the demand were smaller ... で demand ではない。
     ただし Google Books の the demand were 2.510e-09 の過半は if the demand were 1.377e-09、
     つまり仮定法過去である。ここが唯一の逃げ道だったので、that 節が直説法の過去
     （the operator scheduled）で実際の結果を述べており仮定法が成立しないことを why に明記した。
     heavily の側も裏を取り、insource:/[Ss]o heavily was the [a-z]+ that/ は 0 件だった
     （＝分詞を伴わない so heavily was + 主語 + that は使われない）。
     p5() ヘルパーは id を no から自動生成し no を変えずに id だけ変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v1-p5-123r', part: 5, kind: 'single', topics: ['inv'], level: 5,
    questions: [{
      id: 'v1q123r', no: 123,
      stem: 'So ------- the demand for the Saturday sailing that the operator scheduled a second departure the same afternoon.',
      choices: ['heavy was', 'was heavy', 'heavily was', 'heavy were'],
      answer: 0,
      exp: '程度を表す so ＋ 形容詞 が文頭に出ると、続く主節は〈so ＋ 形容詞 ＋ be 動詞 ＋ 主語 ＋ that 節〉の順に倒置される。so は形容詞・副詞を修飾する語なので直後には形容詞 heavy が来なければならず、その次に be 動詞、そのあとに主語が置かれる。主語は空所の右にある the demand で単数だから was。',
      why: ['正解。So heavy was the demand ... that ...「需要があまりに大きかったので〜」。倒置した主語 the demand は be 動詞の右に来る。',
            'so が程度を修飾するのは形容詞か副詞で、定形動詞を直接続けることはできない（動詞の程度を言うなら so much）。so の直後に修飾対象の形容詞が来ていないため、heavy が宙に浮く。',
            'heavily は副詞。be 動詞の補語になれるのは形容詞か名詞で、副詞は補語にならない。so heavily was ... という並び自体は実在するが、それは so heavily was the region affected のように後ろに過去分詞があって副詞がそれを修飾する場合である。この文は that the operator scheduled a second departure the same afternoon. で終わり、空所より右に分詞が一つも無いので heavily の掛かる先が作れない。',
            '倒置文の主語は be 動詞の右にある the demand で、単数。were は複数主語を受ける形なので一致しない（So heavy were the losses that ... のように、この語順で were が立つのは主語が複数のとき）。単数主語に were が付くのは If the demand were higher ... のような仮定法過去のときだけだが、この文は that 以下が the operator scheduled と直説法の過去で実際に起きた結果を述べているので仮定法にはならない。数を決める主語が空所の右側にあるのが、この語順の読みにくいところ。'],
      ja: '土曜の便の需要があまりに大きかったため、運航会社は同じ日の午後に 2 便目を設定した。',
      topics: ['inv'],
    }],
  },

  p5(124, { t: ['biz'], lv: 5,
    s: 'Guests who cancel within 48 hours of arrival will ------- the deposit paid at the time of booking.',
    c: ['forfeit', 'forward', 'formulate', 'foresee'],
    a: 0,
    e: 'forfeit「（権利・金銭を）失う、没収される」。違反や取り消しの結果として、既に払ったものが戻らないことを表す動詞。予約時の手付金が返らないという文脈に合う。',
    w: ['正解。forfeit the deposit「手付金を没収される」。',
        'forward は「（受け取ったものを）別の宛先へ転送する」。転送できるのは手元にあるものなので、予約時に既に支払い済みの手付金を、支払った側である Guests が forward することはできない。',
        'formulate は計画・方針・答えなど「組み立てて作り上げるもの」を目的語に取る（formulate a policy）。既に存在する金銭には使えない。',
        'foresee は「これから起きる事柄」を目的語に取る（foresee a delay / problems）。the deposit のような既存の金銭は目的語にならない。'],
    ja: '到着 48 時間以内に取り消したお客様は、予約時にお支払いいただいた手付金を失うことになります。' }),

  p5(125, { t: ['vform'], lv: 5,
    s: 'The number of enquiries the helpdesk receives each Monday ------- steadily since the portal was launched.',
    c: ['have risen', 'has risen', 'are rising', 'rise'],
    a: 1,
    e: '主語は The number of ... で単数扱い。since 節があるので現在完了。',
    w: ['複数形。', '正解。', '複数かつ進行形。', '現在形かつ複数。'],
    ja: 'ポータルの開設以来、ヘルプデスクが毎週月曜に受ける問い合わせの数は着実に増加している。' }),

  p5(126, { t: ['colloc'], lv: 5,
    s: 'Before finalising the layout, the design team will ------- a survey of two hundred regular users.',
    c: ['conduct', 'commit', 'convene', 'convey'],
    a: 0,
    e: 'conduct a survey「調査を実施する」が定型。',
    w: ['正解。', '「（罪を）犯す、投入する」。', '「（会議を）招集する」。survey とは組まない。', '「伝える」。'],
    ja: '配置を確定する前に、設計チームは常用ユーザー 200 名を対象に調査を実施する。' }),

  p5(127, { t: ['ptcp'], lv: 5,
    s: '------- from the observation deck, the reservoir appears almost perfectly rectangular.',
    c: ['Seeing', 'Seen', 'To see', 'Sees'],
    a: 1,
    e: '分詞構文の意味上の主語は主節の主語 the reservoir。貯水池は「見られる」側なので過去分詞。',
    w: ['現在分詞。貯水池が見ることになる。', '正解。', '不定詞。目的を表し文意に合わない。', '定形動詞。'],
    ja: '展望デッキから見ると、その貯水池はほぼ完全な長方形に見える。' }),

  /* id は v1q128r2（no は 128 を維持。設問を丸ごと差し替えたため設問 id は三度目の新規採番）。
     初版 'Volunteers ------- gave up two weekends to help catalogue the donated archive.' は
     rarely / hardly / scarcely を入れても完結した正しい文になり、肯定・否定のどちらを述べる
     文なのかを決める材料が文中に無かった。
     v1q128r は結果を示す後半（and the collection opened ... a month ahead of schedule）を
     足したが、これは「否定の副詞では後半を説明できない」という意味の推論による排除であり、
     「めったに返上しないが、出たときは早く終わらせた」と読めば否定の副詞のままでも成立する。
     「肯定の副詞 vs 否定の副詞を単文の意味で選ばせる」型は閉じられない（ドリル側で 3 巡失敗
     している）ので、意味ではなく構造で切れる型に作り替えた。

     新しい型は「空所の後ろが定形節か分詞句か」で決まる。空所の後ろにあるのは
     eliminating で始まる分詞句だけで、主語も定形動詞も無い。whereby・whereupon は後ろに
     〈主語＋定形動詞〉の節を要求する語なので、導くべき節が存在せず立てない。thereof は
     名詞の直後に置いて前の名詞を受ける語で、分詞句の前には立てない。分詞句を従えて
     主節の結果を述べられるのは thereby だけ。
     ── 別の目による独立検証（2026-08-17）。作問者の報告はおおむね裏付けられたが、
        2 点だけ記述を直し、解説に穴を 2 か所ふさいだ。

     ・LDOCE：whereby＝adverb, formal「by means of which or according to which」で例文 9 本すべて
       定形節。whereupon＝conjunction, formal で例文 2 本とも定形節。thereby＝adverb, formal で
       型を thereby doing something として立項（He became a citizen in 1978, thereby gaining
       the right to vote.）。thereof＝adverb, formal、例文 7 本すべて名詞の直後。
     ・Cambridge：whereby＝adverb/conjunction（辞書例文もコーパス例文 18 本もすべて定形節）、
       whereupon＝conjunction（英・米とも）、thereof＝adverb「law／formal or specialized」。
       thereby は「... clog up our arteries, thereby reducing the blood flow ...」
       「... thereby throwing 250 people out of work.」。
       ※作問者のコメントは Cambridge の thereby を「formal」と記していたが、正しくは
         「formal or old-fashioned」。ここだけ事実の訂正。
     ・Oxford（OALD）：whereby＝adverb (formal)、whereupon＝conjunction (formal)、
       thereby＝adverb (formal)「Regular exercise strengthens the heart, thereby reducing the
       risk of heart attack.」＝本問とほぼ同型、thereof＝adverb (law or formal)「any part thereof」。
     ・Collins English Dictionary 12th／American Heritage 5th（Collins 本体は 403 のため
       The Free Dictionary のリプリントで確認）：Collins は whereby を**代名詞**に分類し
       「by or because of which」と定義する。つまり whereby は by which と同じ関係語で、
       自分が導く節の内部で前置詞句の役割を果たす。だから定形動詞のある節が要る、という
       肯定形の構造規則が立つ（書誌的な「例文が無い」ではなく、これを解説の根拠にした）。
       AHD は whereupon を sentence connector「at which; at which point; upon which」とする。
       thereof は AHD・Collins とも「of that or it」に加えて
       「from or because of that／from or out of that origin or cause」という**原因の語義**を立てる。
       この語義は実在するので解説では否定せず、「前置詞句の代用のままで分詞句を従える副詞にはならない」
       という位置の話で切った。
     ・Merriam-Webster は Cloudflare により WebFetch・curl・r.jina.ai・Wayback のいずれでも
       取得できなかった。**確認できていない。**（作問者と同じ状況。）

     ・Google Books Ngrams（en-2019, smoothing=3, 2019 年値）：
       thereby eliminating 9.75e-08 ／ whereby eliminating 1.04e-10 ／ thereof eliminating 1.81e-11。
       whereupon eliminating と whereby eliminating the need は API が系列を返さない＝0 件。
       thereby reducing 6.17e-07 に対し whereby reducing 4.14e-10、whereupon reducing は 0 件。
       ここで効くのは **thereof eliminating が 0 でないこと**。この並びは構造上ありえないのに
       whereby eliminating と同じ桁に出る。この帯は文境界の誤結合による雑音であって、
       whereby eliminating の 1.04e-10 を実在の型の証拠と読んではいけない、と言い切れる。

     ・Wikipedia の insource 正規表現検索（英語版全文）：
       thereof ＋(eliminating|reducing|allowing|avoiding|ensuring|increasing) は **0 件**。
       whereupon ＋同上は 1 件だが中身は whereupon increasingly favorable environmental
       factors … で、-ing ではなく副詞 increasingly ＋定形節。**実質 0 件。**
       whereby ＋同上は **12 件ヒットする。** 内訳は
        (1) 動名詞主語＋定形動詞＝正用。a security dilemma whereby increasing one's security
            may bring … ／ the post-racial turn within the party whereby increasing party
            diversity has coincided …
        (2) increasingly ＋定形節＝そもそも -ing ではないもの
        (3) thereby の誤用。… would become foehn winds, whereby allowing decent amount of
            sunny days … ／ … is shifted down whereby reducing osmotic pressure …
            （どちらも同じ節に冠詞脱落などを伴う未校閲の文章）
       **つまり「whereby ＋ -ing」は実在するが、実在するのは (1) の動名詞主語であって
       「分詞句を従える」型ではない。**本問は空所より後ろに定形動詞が一つも無く
       （文は each spring. で終わる）、(1) の逃げ道も塞がっている。
       ただし学習者が検索すれば (1) の実例に当たり「whereby のあとに -ing が来ているではないか」と
       見えるので、why[0] にこの場合分けを書き足した。
       同様に thereof は、Wittgenstein 由来の倒置 Whereof one cannot speak, thereof one must be
       silent. で文頭に立つ用例があり（Cambridge のコーパス例文にも同型が出る）、
       「名詞の直後にしか立てない」という旧稿の断定は反例を持つ。そのときも続くのは定形節なので
       結論は変わらないが、why[3] の断定を外して位置の規則に書き直した。

     level は 5 のまま（lv5(a)＝語彙の帯が 900+）。4 語とも主要辞書が formal を付け、thereof は
     Cambridge が law／formal or specialized、Oxford が law or formal、AHD が (Law) と記す契約文書語。
     単一の軸で言えば落とす原因は「where- / there- 複合副詞の統語クラス（関係語か・接続詞か・
     前置詞句の代用か）を知らないこと」で、これは文法書にも単語帳にも載らない書き言葉の知識。
     lv3 の但し書き「誤答 3 つが一つの規則で一括消去できる問題も lv3」には当たらない——
     whereby・whereupon は「定形節を要求する」で落ちるが、thereof は「前置詞句の代用なので
     受ける名詞が要る」という別の規則で落ちる。
     判断過程の重複確認：thereby / whereby は assets/data 全体で本問以外に一度も使われていない
     （grep 済み）。ドリルの adv-05r3 は「前置詞の目的語の内側で数量を前から修飾できるか」、
     adv-06r は「副詞が of 補語を取れるか」で切っており、どちらも本問の
     「定形節を要求するか分詞句を従えられるか」とは別。v5q106r3 の at all（否定極性項目の認可）、
     v2q128 の largely because（because 節の前置修飾）とも別。
     p5() ヘルパーは id を no から自動生成し no を変えずに id だけ変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v1-p5-128r2', part: 5, kind: 'single', topics: ['adv'], level: 5,
    questions: [{
      id: 'v1q128r2', no: 128,
      stem: 'The society moved its membership renewals to an online form last January, ------- eliminating the need to process several thousand paper applications by hand each spring.',
      choices: ['whereby', 'whereupon', 'thereby', 'thereof'],
      answer: 2,
      exp: '空所の後ろに続くのは eliminating で始まる分詞句だけで、主語も定形動詞も無い（文は each spring. で終わる）。この位置に立てるのは、節を要求せず、分詞句を従えて「その結果〜した」と述べられる副詞だけである。thereby がまさにその語で、LDOCE は型を thereby doing something として立項し He became a citizen in 1978, thereby gaining the right to vote. を、Oxford は Regular exercise strengthens the heart, thereby reducing the risk of heart attack. を挙げる。残る 3 語は、whereby・whereupon が定形節を、thereof が受ける名詞を必要とするため、この空所を埋められない。',
      why: ['Collins は whereby を代名詞に分類し「by or because of which」と定義する。つまり by which と同じ関係語で、自分が導く節の内部で前置詞句の役割を果たす語であり、うしろには定形動詞のある節が要る（LDOCE・Cambridge・Oxford の例文もすべて定形節。a plan whereby customers earn discounts / They\'ve set up a plan whereby you can spread the cost over a two-year period. / They have introduced a new system whereby all employees must undergo regular training.）。なお whereby の直後に -ing が来る実例はある。ただしそれは a security dilemma whereby increasing one\'s security may bring greater instability のように、その -ing が動名詞の主語で、あとに定形動詞（may bring）が控えている場合である。この文は空所より後ろに定形動詞が一つも無いので、その読みも作れず、whereby が導くべき節そのものが存在しない。',
            '「するとすぐに、その結果」と、直前の出来事に続いて起きたことを述べる語（She refused to hand over her money, whereupon there was a fight.）。LDOCE・Cambridge・Oxford はそろって conjunction、American Heritage は sentence connector「at which point」と分類する。いずれにせよ節をつなぐ語なので、うしろに〈主語＋定形動詞〉を要求する点は whereby と同じで、分詞句だけを従えることはできない。',
            '正解。thereby eliminating ...「それによって〜を無くした」。thereby は「それによって」を表す副詞で、直後に分詞句を置いて主節から生じた結果を述べる形が定型（thereby reducing the blood flow / thereby gaining the right to vote / thereby throwing 250 people out of work）。',
            'of it / of that の代用。前置詞句が入りうる位置——名詞のうしろ（the labelling thereof / any part thereof / Articles 99 and 100 thereof）や動詞の補語——にしか収まらない。American Heritage と Collins は「from or because of that（そこから、それが原因で）」という原因の語義も立てているので、意味の面では「それによって」に近づく余地はある。しかしその語義でも thereof は前置詞句の代用のままで、分詞句を従えて結果を述べる副詞にはならない。古風な倒置で文頭に出ることはあるが（Whereof one cannot speak, thereof one must be silent.）、そのときも続くのは定形節である。'],
      ja: 'その協会は昨年 1 月に会員更新をオンラインの申込フォームに切り替え、それによって、毎春何千通もの紙の申込書を手作業で処理する必要が無くなった。',
      topics: ['adv'],
    }],
  },

  /* id は v1q129r（no は 129 を維持。設問を丸ごと差し替えたため設問 id は新規採番）。
     旧 v1q129 は 'The permit may be revoked by either party ------- thirty days\' written
     notice.' ／ ['as of','upon','toward','within'] ／ 正解 upon。ドリル grammar2.js の
     conjprep-07（'The contract may be terminated by either party ------- ninety days\'
     written notice.' ／ ['as of','toward','upon','across'] ／ 正解 upon）と、
     〈契約文書＋ by either party ＋ 空所 ＋ 日数 days\' written notice〉という枠が同一で、
     選択肢も 4 つ中 3 つ（as of / toward / upon）が同じ、正解語も同じだった
     （機械抽出の一致率 54%）。判断過程も「通知を契機として示す前置詞を選ぶ」で完全に同一。

     差し替え先は「or not を直後に従えられるのはどの語か」という位置の問題。
     conjprep の既出 56 問はすべて〈譲歩・原因・条件・時〉の副詞節または副詞句を作る語の選択で、
     判断過程は (a) 後ろが節か名詞句か（v1q110 がこれ。同じ模試の中で重ねない）、
     (b) 論理関係（逆接か因果か条件か）、(c) 語の後置（conjprep-13 の notwithstanding）の
     3 種類しかなく、「対立項 or not を直接取れるか」を問うのは本問が初出。
     whether が選択肢に立つのはドリル context.js の p6c-04-4 だけで、そちらの排除理由は
     「名詞節を作るのでこの位置に合わない」という別の話。v5q103r の Whether 節は主語の一致問題。

     閉じ方の確認（1＝構造で切る。位置で切る型）：
     ・Cambridge の文法欄は Whether … or not を独立の項目として立て、
       「We use whether … or not or whether or not to give an opposite alternative」と書く。
       同じ欄は「We use whether and not if after prepositions」「We use whether, not if,
       before to-infinitives」とも書き、if と whether が置ける位置が違うことを明示している。
     ・Oxford（OALD）の whether の項は or not を含む例文を
       You are entitled to a free gift whether you accept our offer of insurance or not. ／
       It remains to be seen whether or not this idea can be put into practice. と、
       すべて whether で挙げる。同項の Grammar Point「if / whether」は、両者が交替できるのは
       yes-no の間接疑問と or による二者択一のときだと限定している。
     ・LDOCE は whether の 2 番目の語義に「whether you like it or not」を挙げる。
       ただし if との対比を扱う文法欄はこの語の項には無かった。
     ・Merriam-Webster は Cloudflare により取得できなかった。**確認できていない。**
     ・上の Cambridge・Oxford の引用は 2026-08-17 にレビュー役が再取得して一致を確認した。
       Cambridge の文法ページ dictionary.cambridge.org/grammar/british-grammar/whether には
       h2 見出し「Whether … or not」が実在し、本文は
       「We use whether … or not or whether or not to give an opposite alternative」、
       続けて「We often use whether … or not to mean 'it's not important if' or
       'it doesn't matter if'」「We can use whether … or not in front or end position with
       this meaning」——本問の譲歩の読みそのものである。Typical errors 欄の
       「We use whether, not if, before a to-infinitive」も実在。
       OALD の whether の項にも You are entitled to a free gift whether you accept our offer
       of insurance or not. ／ It remains to be seen whether or not this idea can be put into
       practice. が実在した。
     ・英語版 Wikipedia の insource 正規表現検索で /[^a-z]if or not [a-z]/ は全文で **2 件**。
       うち 1 件は言語学の項目 If (subordinator) が
       「Whether/*if or not the room is ready」と **非文の印つきで** 挙げている当の例。
       同じ検索で whether or not the は 4805 件。
     ・Google Books Ngrams（en-2019, smoothing=3, 2019 年値）：
       whether or not the 2.533e-06 に対し if or not the 3.718e-10（約 6800 倍差の雑音帯）。
       regardless or not 2.631e-10、no matter or not は 0 件。

     level は 4。初版は lv5(b)（誤答 regardless は文末に置けば The service charge is payable
     in full on the first day of each quarter, regardless. で完結した正しい英文になる）で立てられ、
     書いた本人から「lv4 のほうが目盛りに忠実かもしれない」と申し送りが付いていた。
     2026-08-17、レビュー役が 4 に確定した。根拠は 2 つ。

     (1) lv5(b) は成立しない。CLAUDE.md の (b) には「トリガーが空所を直接支配する隣接語なら、
         それは lv3 か lv4」という自己点検が付いている。本問の決め手は空所の直後 2 語の or not
         そのもので、隣接語である。regardless が単独で正しい副詞であることは事実だが、
         それを殺すのは離れた位置の構造ではなく直後の or not なので (b) の要件を満たさない。
         比較として、同じ conjprep で lv5 に置いてある grammar5.js の conjprep-13
         （X notwithstanding の後置）は、決め手が空所より前に置かれた名詞句にある。
     (2) lv3 でもない。lv3 の但し書き「誤答 3 つが一つの規則で一括消去できる」に当たらず、
         if は「or not を節末に回す語だから」、regardless は「後ろに要素を従えるには of が要る
         副詞だから」、no matter は「wh 語を伴って初めて節を導く語だから」と、
         3 つとも別々の語法を知っている必要がある。whether or not は高校の標準項目だが、
         regardless / no matter の補部の要求は単語帳の対語リストには載らない。
         「知らなければ解けないが覚えれば解ける」型なので lv4（CLAUDE.md の既定値）。

     2026-08-17 レビュー役の独立検証（用例）。英語版 Wikipedia の
     insource:/[^a-z]no matter or not [a-z]/ は **0 件**。
     insource:/[^a-z]if or not [a-z]/ は **2 件**で、1 件は言語学の項目 If (subordinator) が
     Whether/*if or not the room is ready と非文の印つきで挙げている当の例（作問時の報告と一致）。
     insource:/[^a-z]regardless or not [a-z]/ は 4 件ヒットするが、読むと 4 件とも
     regardless or not if it passes ... ／ regardless or not of whether they operate ... のように
     直後に if か of が入る混線形で、**regardless が or not だけを従えて節を導いた例は 0 件**。
     つまり「of の無い regardless は or not を直接取れない」は用例側からも裏が取れている。
     p5() ヘルパーは id を no から自動生成し no を変えずに id だけ変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v1-p5-129r', part: 5, kind: 'single', topics: ['conjprep'], level: 4,
    questions: [{
      id: 'v1q129r', no: 129,
      stem: 'Under clause 9 the service charge is payable in full on the first day of each quarter, ------- or not the tenant has occupied the unit for the whole of that period.',
      choices: ['if', 'whether', 'regardless', 'no matter'],
      answer: 1,
      exp: '空所の直後が or not なので、対立項 or not をそのまま従えられる語でなければならない。それができるのは whether で、whether or not ... ／ whether ... or not で「〜であろうとなかろうと」という譲歩の副詞節を作る（Cambridge は文法欄に Whether … or not を独立の項目として立て、Oxford は You are entitled to a free gift whether you accept our offer of insurance or not. を挙げる）。残る 3 語は、or not を置ける位置が違うか、節を導くのに別の語を必要とする。',
      why: ['if も「〜かどうか」を表せるが、対立項を置く位置が whether と違う。if を使うなら or not は節の末尾に回して … if the tenant has occupied the unit for the whole of that period or not とする。if の直後に or not を置く形は作れず、英語版 Wikipedia 全文でも if or not は 2 件しかヒットせず、そのうち 1 件は言語学の項目が Whether/*if or not the room is ready と非文の印をつけて挙げている当の例である。',
            '正解。whether or not ...「〜であろうとなかろうと」。占有していてもいなくても全額払う、という譲歩の副詞節を作る。',
            'regardless は単独では「それでも、ともかく」を表す副詞で、文末に置けば ... payable in full on the first day of each quarter, regardless. だけで完結した正しい英文になる。ただしうしろに要素を従えるには of が要り、その目的語が節なら regardless of whether ... という形になる。of の無い regardless が or not を直接取ることはできない。',
            'no matter はそれ自体では従位接続詞にならず、no matter whether / no matter how / no matter what のように wh 語を伴って初めて節を導く。wh 語を欠いたまま or not を続ける形は無い。'],
      ja: '第 9 条により、サービス料は各四半期の初日に全額支払うものとし、その期間全体にわたって借主が当該区画を使用していたかどうかは問わない。',
      topics: ['conjprep'],
    }],
  },

  /* id は v1q130r（no は 130 を維持。設問を丸ごと差し替えたため設問 id は新規採番）。
     旧 v1q130 は 'The figures in this bulletin are ------- and will be revised when the annual
     audit concludes.' ／ ['primary','principal','preliminary','prior'] ／ 正解 preliminary。
     ドリル vocab2.js の biz-06（'All figures in this report are ------- and will be revised
     once the year-end audit concludes.' ／ ['principal','primary','preliminary','prior'] ／
     正解 preliminary）と、選択肢 4 語が完全に同一、正解語も同一、stem も
     figures / are / will be revised / audit concludes という骨格まで同一で、
     違うのは bulletin か report か、when か once か、annual か year-end かだけだった
     （機械抽出の一致率 53%）。4 件のうち選択肢の集合まで一致するのはこれだけで、実質は同一問題。

     差し替えにあたっての制約が 2 つある。
     (1) 同じ模試の 116（v1q116r3, dissolve/devolve/absolve/evolve）が既に confuse で、
         その判断過程は「ラテン語系の他動詞が〈目的語＋of 句〉を取れるか」＝動詞の項構造。
         130 でも動詞の項構造を問うと、1 本の模試の中で同じ判断を 2 回させることになる。
         そこで 130 は語形（品詞）の識別に寄せ、動詞ではなく形容詞を軸にした。
         confuse の既出 20 問のうち語形識別型（considerate/considerable、
         indicative/indicating、principal/principle、discrete/discreet など）はいずれも
         別の語族で、stringent の語族は assets/data 全体で本問が初出（grep 済み）。
     (2) 直前に差し替えた 123 が So ... that の構文なので、130 で so ... that を使うと
         同じ Part 5 の中に程度構文が 2 つ並ぶ。so ではなく too ... to ... の枠にした。

     閉じ方の確認：
     ・LDOCE は stringent を「a stringent law, rule, standard etc is very strict and must be
       obeyed」とし、派生形として stringently（副詞）と stringency（**不可算名詞**）を明記する。
     ・strident は LDOCE が 1「forceful and determined, especially in a way that is offensive
       or annoying」2「a strident sound or voice is loud and unpleasant」の 2 語義で、
       例は strident criticism / strident demands / strident calls。
       Collins English Dictionary 12th（本体は 403 のため The Free Dictionary の完全版
       リプリントで確認）は 1「(of a shout, voice, etc) having or making a loud or harsh
       sound」2「urgent, clamorous, or vociferous: strident demands」。
       Random House Webster's College は 1「harsh in sound」2「having an obtrusive, insistent
       character: strident opinions」。**どの辞書にも「厳格な・厳しい」の語義は無く**、
       語義の担い手はいずれも音・声か、要求を声高に押し出す人・発言である。
     ・astringent は 4 つ目の選択肢の候補だったが棄却した。Collins が「1. severe; harsh」、
       Random House が「3. stern or severe; austere」を立てており、
       astringent criteria が「厳しい基準」と読めてしまうため。
     ・Merriam-Webster はどの経路でも Cloudflare に阻まれ取得できなかった。**確認できていない。**
     ・Google Books Ngrams（en-2019, smoothing=3, 2019 年値）：
       stringent criteria 3.697e-08 に対し **strident criteria は 0 件**（strident requirements
       も 0 件、strident demands は 5.214e-09 と実在）。
       too stringent for 2.373e-09 に対し **too stringency は 0 件**、
       too much stringency は 2.914e-11。so stringency も 0 件で such stringency は 8.081e-10。

     2026-08-17 レビュー役の独立検証。焦点は「strident に本当に〈厳格な〉の語義が無いか」と
     「stringently が too ------- for X to do の枠に入らないか」。
     ・LDOCE を直接取得。strident は 1 forceful and determined, especially in a way that is
       offensive or annoying（例 strident criticism）／2 a strident sound or voice is loud and
       unpleasant（例 the strident calls of seagulls）の 2 語義のみ。作問時の報告と一致する。
     ・Wiktionary も引いた。1 loud; shrill, piercing／2 grating or obnoxious／3 forceful or
       obtrusive／4（nonstandard）vigorous, making strides。〈厳格な〉は無い。
     ・The Free Dictionary 版で Collins「(of a shout, voice, etc) having or making a loud or
       harsh sound ／ urgent, clamorous, or vociferous: strident demands」、Random House
       「harsh in sound; grating ／ having an obtrusive, insistent character: strident opinions」を
       再取得して一致を確認。American Heritage だけは 2 が Forcefully assertive or severely
       critical: strident rhetoric と severely を含むが、担い手は rhetoric＝発言であって
       基準ではなく、「基準が厳しい」の語義ではない。**「どの辞書にも語義が無い」という
       書誌的な否定形では書かず**、語源（stridere と stringere）と共起（strident criteria が
       0 件）という肯定形の根拠に why を書き換えた。
     ・stringently は入らない。too stringently 自体は 2.931e-09 と実在するが、それは
       applied/enforced too stringently のように修飾する動詞・過去分詞がある場合で、
       本問の空所の右は for ... to ... の不定詞句だけ。be 動詞の補語に副詞は立てられない。
     ・Merriam-Webster は今回も Cloudflare で 403。**確認できていない。**

     level 5 の根拠は lv5(a)。stringent / stringency は法務・監査の書き言葉の帯で、
     strident との識別は単語帳の対語リストには載らない。
     lv3 の但し書き「誤答 3 つが一つの規則で一括消去できる問題も lv3」には当たらない——
     stringency は「too は形容詞・副詞の程度しか修飾できず、名詞なら much が要る」で、
     stringently は「be 動詞の補語に副詞は立てない」で、strident は「語義の担い手が
     音・声・発言であって基準ではない」で落ち、3 つとも別の規則である。
     p5() ヘルパーは id を no から自動生成し no を変えずに id だけ変える手段がないため、
     このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v1-p5-130r', part: 5, kind: 'single', topics: ['confuse'], level: 5,
    questions: [{
      id: 'v1q130r', no: 130,
      stem: 'The criteria for admission to the accreditation scheme are too ------- for most applicants to satisfy at the first attempt.',
      choices: ['stringency', 'strident', 'stringent', 'stringently'],
      answer: 2,
      exp: '空所は too と for ... to ... に挟まれた位置で、too が程度を修飾できるのは形容詞か副詞、そのうち be 動詞の補語に立てるのは形容詞だけである。意味の面でも、基準が「守るべき水準として厳しい」ことを表す語でなければならない。stringent は LDOCE が「a stringent law, rule, standard etc is very strict and must be obeyed」と定義する語で、この 2 つを同時に満たす。',
      why: ['不可算名詞（LDOCE が stringency を noun, uncountable として立項）。too が程度を修飾できるのは形容詞・副詞で、名詞の量を言うには much が要る（too much stringency）。名詞をそのまま too の後ろに置くことはできない。',
            '「（音・声が）耳障りな」「（要求・批判を）声高に押し出す」。LDOCE の例は strident criticism / strident demands、Collins は urgent, clamorous, or vociferous、Random House は strident opinions と、語義の担い手はいずれも音・声か、声高に主張する人・発言である。基準（criteria）は声を出すものでも主張を押し出すものでもないので、この形容詞が付く相手にならない。stringent と語形が似ているのは偶然で、語源も別（LDOCE の語源欄は strident が「耳障りな音を立てる」の stridere、stringent が「きつく縛る」の stringere）。stringent criteria が普通に使われるのに対して、strident criteria は Google Books でも 0 件である。',
            '正解。too stringent for ... to ...「厳しすぎて〜には満たせない」。stringent criteria / stringent rules のように、守るべき基準・規則を修飾する。',
            '副詞。be 動詞の補語になれるのは形容詞か名詞で、副詞は補語に立てない。stringently が生きるのは the rules are stringently enforced のように後ろに動詞や過去分詞がある場合だが、この文の空所の右にあるのは for ... to ... の不定詞句だけで、修飾できる動詞が無い。'],
      ja: 'その認定制度の入会基準は厳しすぎて、大半の応募者は一度目の申請では満たせない。',
      topics: ['confuse'],
    }],
  },

  /* ══════════ PART 6 ══════════ */
  p6({
    n: [131, 132, 133, 134], lv: 4, t: ['connect', 'ctense'],
    doc: {
      label: 'E-mail',
      head: 'To: All Marchmont Library cardholders\nFrom: circulation@marchmontlibrary.org\nDate: 4 September\nSubject: Self-service returns from 1 October',
      body: [
        'Dear members,',
        'From 1 October, returns at the Marchmont Library {{1}} through the new self-service kiosk in the entrance hall rather than at the circulation desk.',
        'The kiosk issues a printed receipt listing every item returned. We recommend keeping it until the items disappear from your online account, which usually takes a few minutes. {{2}}, if an item is still showing the following day, bring the receipt to the desk and we will clear it immediately.',
        '{{3}} Staff will be stationed beside the kiosk throughout October to help anyone who prefers to be shown once rather than read the instructions.',
        'Items too large for the kiosk slot — atlases, boxed sets and audiovisual kits — should still be handed to a member of staff. These are {{4}} a small proportion of our stock, so most visitors will not be affected.',
        'With thanks,\nThe Circulation Team',
      ],
    },
    q: [
      { tag: '態・時制', t: ['ctense', 'voice'],
        c: ['processing', 'will process', 'have processed', 'will be processed'],
        a: 3,
        e: '返却物は「処理される」側なので受動態。ヘッダの日付は 9 月 4 日、本文は 10 月 1 日からの話なので未来形。',
        w: ['分詞。述語動詞にならない。', '能動態。返却物が処理することになる。', '現在完了かつ能動。', '正解。'] },
      { tag: '接続語', t: ['connect'],
        c: ['Likewise', 'Otherwise', 'For example', 'However'],
        a: 3,
        e: '「通常は数分で消える」→「しかし翌日も残っていたら」と、通常と例外を対比している。逆接の However。',
        w: ['並列ではない。', '「さもなければ」。仮定の帰結を表す。', '例示ではない。', '正解。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'The library will close for two days during the changeover.',
          'Using the kiosk takes about the same time as queuing at the desk.',
          'The process itself is straightforward: scan your card, then place items on the tray.',
          'Overdue charges will rise slightly from the same date.',
        ],
        a: 2,
        e: '直後の文が「説明書を読むより一度やって見せてほしい人のために職員を配置する」と続く。その前提として「操作手順」を示す文が必要。(C) が手順を述べており、instructions と自然につながる。',
        w: ['休館の話は本文のどこにも出てこない。', '所要時間の比較では、次文の「説明」につながらない。', '正解。', '延滞料の話は文脈から外れる。'] },
      { tag: '語彙', t: ['quant'],
        c: ['nearly', 'much', 'only', 'rather'],
        a: 2,
        e: '「ごく一部にすぎない」→「だから大半の利用者には影響しない」という流れ。only a small proportion が自然。',
        w: ['「ほぼ」。少なさを強調しない。', '不可算を修飾する語で、a small proportion には付かない。', '正解。', '「かなり」。後半の「影響しない」と噛み合わない。'] },
      ].map((x, i) => ({ ...x, s: null })),
  }),

  p6({
    n: [135, 136, 137, 138], lv: 5, t: ['cohesion', 'connect'],
    doc: {
      label: 'Notice',
      title: 'Tenants\' Notice — Bicycle Store, Ellery Court',
      body: [
        'The bicycle store at the rear of Block C is now open. Access is by fob only; fobs {{1}} from the management office on production of a tenancy agreement.',
        'The store holds forty-eight bicycles on two-tier racks. Upper-tier spaces require the use of a gas-assisted lift arm, which most residents find manageable, {{2}} anyone who would prefer a lower space should say so when collecting a fob.',
        'Please do not leave bicycles in the stairwells or chained to the railings at the front of the building. {{3}} Items left in these areas may be removed without further notice.',
        'One further point. The store is covered by the building\'s camera system but is not insured by the freeholder. Residents are advised to check whether {{4}} own contents policy extends to bicycles kept outside the flat.',
      ],
    },
    q: [
      { tag: '態', t: ['voice'],
        c: ['issue', 'are issuing', 'are issued', 'have issued'],
        a: 2,
        e: 'キーフォブは「発行される」側なので受動態。空所の後ろに目的語がなく from 句が続く点が根拠。',
        w: ['能動の現在形。', '能動の進行形。', '正解。', '能動の現在完了。'] },
      { tag: '接続語', t: ['connect', 'conjprep'],
        c: ['so', 'unless', 'because', 'but'],
        a: 3,
        e: '「大半の住民は問題なく扱える」に対し「下段を希望する人は申し出を」と例外を示す。逆接の but。',
        w: ['因果。前後は対立している。', '条件。', '因果。', '正解。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'The racks were installed by an external contractor in June.',
          'Fobs may be replaced once at no charge.',
          'A second store is planned for Block D next year.',
          'These routes must remain clear for fire safety reasons.',
        ],
        a: 3,
        e: '直前が「階段室や正面の手すりに自転車を置かないこと」、直後が「これらの場所に放置された物は予告なく撤去されることがある」。間に入るのは禁止の理由を述べる文。(D) が防火上の理由を示している。',
        w: ['施工業者の話は禁止の理由にならない。', 'フォブの再発行は別の話題。', '別棟の計画は文脈から外れる。', '正解。'] },
      { tag: '代名詞', t: ['pron', 'cohesion'],
        c: ['their', 'its', 'his', 'our'],
        a: 0,
        e: '主語 Residents（複数）を受ける所有格。their own contents policy「各自の家財保険」。',
        w: ['正解。', '単数の所有格。', '男性単数に限定され、Residents を受けられない。', '書き手側を指すことになり文意が変わる。'] },
      ].map(x => ({ ...x, s: null })),
  }),

  p6({
    n: [139, 140, 141, 142], lv: 5, t: ['ctense', 'p6ins'],
    doc: {
      label: 'Article',
      title: 'Riverbank Path Reopens After Two-Year Closure',
      head: 'LANGDON — 12 May',
      body: [
        'The riverbank path between Mill Bridge and Ashe Lock {{1}} to walkers on Saturday, two years after erosion forced the council to close it.',
        'The delay was not caused by the repair work itself, which took eleven weeks. {{2}} the council had to establish who owned a ninety-metre stretch behind the old maltings, a question that took eighteen months to settle in the land registry.',
        'The rebuilt section sits on a concrete shelf set back from the water. Engineers say this should prevent a repeat of the undercutting {{3}} damaged the original path.',
        '{{4}} Volunteers from the Langdon Ramblers have already scheduled a guided walk for the last Sunday in May.',
      ],
    },
    q: [
      { tag: '時制', t: ['ctense'],
        c: ['reopens', 'has reopened', 'reopened', 'will reopen'],
        a: 2,
        e: '記事の日付は 5 月 12 日で、本文は「土曜日に」と過去の出来事を述べている。過去形。',
        w: ['現在形。', '現在完了は明確な過去時点を示す語句と併用しにくい。', '正解。', '未来形。既に再開している。'] },
      { tag: '接続語', t: ['connect'],
        c: ['Therefore', 'Instead', 'Similarly', 'Meanwhile'],
        a: 1,
        e: '「遅延の原因は工事そのものではなかった」→「そうではなく、所有者の特定が必要だった」という否定＋訂正の流れ。Instead が入る。',
        w: ['因果。前文を受けた結果ではない。', '正解。', '並列。', '同時進行。'] },
      { tag: '関係詞', t: ['rel'],
        c: ['that', 'what', 'whose', 'where'],
        a: 0,
        e: '先行詞 the undercutting を受け、後ろが主語の欠けた不完全文なので主格の関係代名詞 that。',
        w: ['正解。', '先行詞を含む関係代名詞。ここでは先行詞が明示されている。', '所有格。直後に名詞が必要。', '関係副詞。後ろは完全文でなければならない。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'Local walking groups have welcomed the reopening.',
          'The council has not said how much the legal work cost.',
          'Cyclists are still barred from the northern section.',
          'The maltings itself was demolished in 2019.',
        ],
        a: 0,
        e: '直後が「ラングドン・ランブラーズのボランティアが 5 月最終日曜にガイド付きウォークを予定している」と続く。地元の徒歩団体を先に導入する (A) が自然につながる。',
        w: ['正解。', '費用の話は次文の団体の話につながらない。', '自転車の話題は次文と無関係。', '建物の解体は次文につながらない。'] },
      ].map(x => ({ ...x, s: null })),
  }),

  p6({
    n: [143, 144, 145, 146], lv: 5, t: ['connect', 'cohesion'],
    doc: {
      label: 'Memo',
      head: 'TO: All field technicians\nFROM: Yolanda Pereira, Service Operations\nDATE: 19 August\nSUBJECT: Photographing completed work',
      body: [
        'From next Monday, every completed job must include at least two photographs uploaded through the mobile app before the visit {{1}} as closed.',
        'This is not about checking up on anyone. Over the past quarter we have had nine callbacks where the customer said the work was never done and we had no way of showing otherwise. {{2}} case cost us a free return visit.',
        'Two photographs are the minimum: one wide shot showing the location, and one close shot showing the finished connection. {{3}}',
        'Please do not photograph anything that identifies the customer — post, documents on tables, or family photographs. If such items are unavoidable, move them out of frame {{4}} taking the picture.',
      ],
    },
    q: [
      { tag: '態・時制', t: ['ctense', 'voice'],
        c: ['can be marked', 'can mark', 'marking', 'has marked'],
        a: 0,
        e: '訪問は「記録される」側なので受動態。before に続く節なので現在形。',
        w: ['正解。', '能動態。訪問が自ら記録することになる。', '分詞。', '能動の現在完了。'] },
      { tag: '代名詞', t: ['pron', 'quant'],
        c: ['Either', 'Each', 'All', 'Most'],
        a: 1,
        e: '直前の nine callbacks を受け、「その 1 件ごとが無償の再訪問というコストになった」。既出の複数のものを 1 つずつ取り上げ、かつ単数名詞 case を取れるのは each。',
        w: ['2 者のうちどちらか一方。ここは 9 件なので使えない。', '正解。単数名詞 case を取り、既出の 9 件を 1 件ずつ指す。', '複数名詞を取る。', '複数名詞を取る。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'Technicians should carry a spare battery at all times.',
          'The app compresses images automatically, so file size is not a concern.',
          'Customer satisfaction scores rose last quarter.',
          'Vans will be fitted with dashboard cameras in September.',
        ],
        a: 1,
        e: '直前で写真 2 枚の要件を示している。段落を締めるには、写真をアップロードするうえでの実務的な懸念（通信量・容量）を先回りして解消する文が自然。(B) がそれに当たる。',
        w: ['予備バッテリーは写真要件の説明とつながらない。', '正解。', '満足度の数値は段落の主題から外れる。', '車載カメラは別の施策。'] },
      { tag: '接続語', t: ['conjprep'],
        c: ['while', 'before', 'despite', 'unless'],
        a: 1,
        e: '「撮影する前に枠外へ移動させる」。後ろが動名詞なので前置詞として使える before が入る。',
        w: ['「〜している間に」。撮影と同時に動かす指示になり、顧客が特定される物を写さないという直前の指示（do not photograph anything that identifies the customer）を果たせない。移動が撮影より先である必要がある。',
            '正解。',
            '「〜にもかかわらず」。譲歩を表す前置詞で、片づけと撮影の間に対立関係はない。',
            '接続詞なので後ろには主語と動詞のある節が必要で、動名詞句を直接取れない。'] },
      ].map(x => ({ ...x, s: null })),
  }),
];
