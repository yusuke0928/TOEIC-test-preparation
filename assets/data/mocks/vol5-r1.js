/* =============================================================
   予想模試 Vol.5 — Part 5（No.101–130）／ Part 6（No.131–146）
   総仕上げ回。
   ============================================================= */

const p5 = (no, o) => ({
  id: `v5-p5-${no}`, part: 5, kind: 'single', topics: o.t, level: o.lv ?? 3,
  questions: [{
    id: `v5q${no}`, no, stem: o.s, choices: o.c, answer: o.a,
    exp: o.e, why: o.w, ja: o.ja, topics: o.t,
  }],
});

const p6 = (o) => ({
  id: `v5-p6-${o.n[0]}`, part: 6, kind: 'doc', topics: o.t, level: o.lv ?? 4, docCount: 1,
  docs: [o.doc],
  // id: x.id ?? `v5q${o.n[i]}` — 個々の設問だけ設問 id を新規採番するとき、x に id を足せば上書きできる
  // （no は o.n[i] のまま変わらない）。2026-09-03 追加。
  questions: o.q.map((x, i) => ({
    id: x.id ?? `v5q${o.n[i]}`, no: o.n[i], stem: null, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t, tag: x.tag,
  })),
});

export const R1 = [

  /* ══════════ PART 5 ══════════ */
  p5(101, { t: ['pos'], lv: 3,
    s: 'All returned equipment must be inspected ------- before being placed back into stock.',
    c: ['thorough', 'thoroughly', 'thoroughness', "thoroughness's"],
    a: 1,
    e: '受動態の過去分詞 inspected を修飾する副詞が入る。',
    w: ['形容詞。', '正解。', '名詞。', '名詞の所有格。'],
    ja: '返却された機器はすべて、在庫に戻す前に入念に検査されなければならない。' }),

  p5(102, { t: ['conjprep'], lv: 4,
    s: '------- rising freight costs, the distributor was able to keep prices unchanged for another quarter.',
    c: ['Unless', 'Although', 'Because', 'Despite'],
    a: 3,
    e: '後ろが名詞句 rising freight costs なので前置詞 Despite。',
    w: ['接続詞。', '接続詞。節が必要。', '接続詞。', '正解。'],
    ja: '輸送コストの上昇にもかかわらず、その卸売業者はもう一四半期、価格を据え置くことができた。' }),

  /* id は v5q103r（no は 103 のまま。stem・選択肢とも差し替えたため設問 id は新規採番）。
     旧 v5q103 は Each of the regional offices ------- required to submit its budget forecast by
     the fifteenth. で、ドリル grammar3.js の vform-28（Each of the regional offices ------- required
     to submit a quarterly compliance report.）と主語 Each of the regional offices が完全に同一、
     続く required to submit も同一だった（機械抽出の一致率 46%）。
     論点（Each of + 複数名詞 = 単数扱い）もドリルと同一なので、論点ごと差し替えた。

     閉じ方は 1（構造で切る）。主語は Whether で始まる名詞節ひとつで、名詞節が主語のときの
     動詞はつねに単数扱い。空所の直前に見える deliveries も、節の先頭近くの depots も、
     名詞節の内側の語であって主語の中心ではない。
     ※ Whether 節を「〜であろうとなかろうと」の譲歩の副詞節と読む逃げ道は塞いである。
     この読みには or not か or … という対立項が要り、しかもそう読むと主節に主語が
     一つも無くなって文が成立しない。
     lv5(b) の自己点検：誤答 depend は The three depots depend largely on ... という別の文に
     置けば完全に正しい英語で、排除の根拠（主語が名詞節であること）は空所の 9 語左の
     Whether にある。トリガーは隣接語ではない。
     重複確認：vform 系の既出は by the time + 未来完了、過去完了、neither … nor の一致、
     the number of / a number of、時・条件の副詞節中の現在形、Each of の一致で、
     「名詞節が主語のときの一致」は本問が初出。

     2026-08-17 レビューで独立検証。正解は depends 一つで確定し、level 5 も維持した。
     ・譲歩読みの封じは裏が取れた。OALD の whether の第 2 義（used to show that something is
       true in either of two cases）に載る例はすべて or / or not つきで、Cambridge の文法欄も
       「it's not important if」の意味を whether … or not の枠として記述している。
       つまり対立項の要求は語感ではなく型の要求。本問には or も or not も無い。
       仮に譲歩に読んでも主節の主語が消えるので二重に塞がっている。
     ・have depended に別の読みは無い。mandative の原形でも不定詞でもなく、
       単に複数主語を受ける現在完了なので一致で落ちる。
     ・depending の why が「文全体に述語動詞が一つも無くなる」と書いていたのは誤り。
       Whether 節の中に can absorb という定形動詞がある。「主節の述語動詞が無いまま文が終わる」に訂正。
       高校英語教師なら真っ先に気づく種類の穴だった（解説のみの訂正で stem・選択肢は不変）。
     ・level は 5 のまま。誤答 depend は The three depots depend largely on ... という別の文では
       完全に正しい英語で、排除の根拠 Whether は空所の 9 語左。lv5(b) の定義に厳密に合う。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v5-p5-103r', part: 5, kind: 'single', topics: ['vform'], level: 5,
    questions: [{
      id: 'v5q103r', no: 103,
      stem: 'Whether the three depots can absorb the additional weekend deliveries ------- largely on how quickly the new sorters are commissioned.',
      choices: ['depends', 'depending', 'have depended', 'depend'],
      answer: 0,
      exp: 'この文の主語は Whether the three depots can absorb the additional weekend deliveries という名詞節ひとつで、名詞節が主語に立つときの動詞は単数で受ける。空所の直前にある deliveries も、節の先頭近くにある depots も、名詞節の内側の語であって主語の中心ではない。したがって三人称単数現在の depends が入る。なお Whether 節を「〜であろうとなかろうと」の譲歩の副詞節と読むには or not や or … という対立項が要り、そう読んだ場合は主節に主語が無くなって文が成立しない。',
      why: ['正解。名詞節の主語を単数で受ける depends。',
            '現在分詞・動名詞であって定形動詞ではない。これを入れると、定形の動詞は Whether 節の内側の can absorb だけになり、主節の述語動詞が無いまま文が終わる。',
            '現在完了だが複数主語を受ける形。名詞節の主語は単数で受けるため一致しない（同じ内容を現在完了で言うなら has depended となる）。',
            '複数主語を受ける形。The three depots depend largely on ... のように depots を主語に立てれば正しい英語になるが、この文で主語になっているのは Whether で始まる名詞節そのもので、depots はその節の内側の語にすぎない。名詞節が主語のときは単数で受ける。'],
      ja: '3 つの営業所が週末の追加配送を吸収できるかどうかは、主として新しい仕分け機がどれだけ早く稼働するかにかかっている。',
      topics: ['vform'],
    }] },

  /* id は v5q104r3（no は 104 のまま。選択肢を 3 度目に差し替えたため設問 id を採番し直した）。
     初版の take は take a vote (on ...) が主要辞書の定型で第二の正解だった。
     1 巡目で入れた bring も不可で、bring a vote of no confidence / bring a vote on ...
     という言い方が英語圏の実文に存在する（英語版 Wikipedia に複数例）。
     2 巡目で入れた make も同じ理由で不可だった。Google Books ngram で "make a vote on" は
     "hold a vote on" の約 1/4 の頻度で実在し（1 巡目で退けた bring の 1/7 より多い）、
     英語版 Wikipedia にも "the city of Cedar Rapids was to make a vote on whether ..."
     "a plenary meeting to make a vote on ... Impeachment" と、hold a vote と同義で使った実文がある。
     代わりに、主要辞書が自動詞としてのみ立項し目的語を直接取れない preside に差し替えた
     （LDOCE: preside [intransitive]、preside over / preside at）。
     "preside a vote" "presided a vote" "abstain a vote" は英語版 Wikipedia に 0 件。
     do は "do a vote on" が Google Books ngram に一件も無く、Wikipedia の "do a vote" も
     "do a vote appeal"（複合名詞）1 件のみで、実在しない型と判断してそのまま残す。
     proceed も自動詞だが、次の設問 105 の stem に proceed with が出て手がかりになるため採らない。
     4 巡目の検証（別の目）：LDOCE・Wiktionary とも abstain / preside を intransitive のみで立項。
     Google Books ngram は "preside a vote" "presided a vote" "abstain a vote" "preside over a vote"
     "do a vote on" のいずれにもデータが無い。英語版 Wikipedia の insource も "presided a vote" 0 件、
     /"do a vote"/ は "do a vote appeal" の 1 件のみ、/"did a vote"/ の 1 件も
     "as did a vote on incorporation"（代動詞 did）で当たらない。
     なお /"preside a "/ には "preside a political party" "preside a synod" の 2 件があるが、
     いずれもスペイン語 presidir・フランス語 présider からの干渉で、主要辞書 5 種の自動詞表示を
     覆すものではない（"preside the meeting" の ngram も "preside over the meeting" の 1/66）。
     elect を候補に入れなかったのは正しい。elect + 名詞句には医療・法務で「〜を選択する」の
     語義が実在し（the patient elected surgery）、elect a vote を「投票を行うことを選ぶ」と
     読まれる余地が残るため。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v5-p5-104r3', part: 5, kind: 'single', topics: ['colloc'], level: 4,
    questions: [{
      id: 'v5q104r3', no: 104,
      stem: "The committee will ------- a vote on the proposed amendments at next week's meeting.",
      choices: ['abstain', 'preside', 'hold', 'do'],
      answer: 2,
      exp: 'hold a vote「採決を行う」。LDOCE が hold の語義 2 に「to have a meeting, party, election etc in a particular place or at a particular time」を立項しているとおり、日時と場所を決めて人を集めて執り行う催しを目的語に取れるのが hold。',
      why: ['「（採決で）棄権する」。投票の話題で使う語だが、主要辞書はそろって自動詞としてのみ立項しており（LDOCE: abstain [intransitive]、見出しの分野表示も Voting）、目的語を取らない。棄権を言うなら Three members abstained. のように単独で使うか、abstain from voting on ... と前置詞を伴う。',
            '「（会議・式典を）主宰する」。これも自動詞としてのみ立項される語で（LDOCE: preside [intransitive]）、主宰する対象は preside over the meeting / preside at the hearing のように前置詞で示す。目的語を直接続けられないため a vote は置けない。',
            '正解。hold a vote / hold a meeting / hold an election。',
            'light verb の do が目的語に取るのは do the paperwork / do the accounts / do the dishes のように、遂行すべき作業そのものを指す名詞。日時と場所を決めて人を集めて執り行う催しは hold（や take）が受け持ち、do a vote on ... という結び付きは Google Books の用例に一件も現れない。'],
      ja: '委員会は来週の会議で、提案された修正案について投票を行う予定だ。',
      topics: ['colloc'],
    }] },

  p5(105, { t: ['ptcp'], lv: 5,
    s: '------- of any last-minute changes, the printer will proceed with the original file.',
    c: ['Notifying', 'Notifies', 'To notify', 'Not notified'],
    a: 3,
    e: '分詞構文。意味上の主語は主節の the printer で、印刷業者は「知らされる」側なので過去分詞を使い、否定辞 not は分詞の前に置く。',
    w: ['現在分詞。notify は notify + 人 + of ... の形を取る他動詞なので、目的語のないまま of 句だけを続けられない。印刷業者が知らせる側になる点でも主節と合わない。',
        '三人称単数現在の定形動詞。主語がなく、後ろの the printer will proceed とつなぐ接続詞もないため文が成立しない。',
        '不定詞。notify は目的語が必要で To notify of ... の形を取れない。目的を表す読みでも主節の内容とつながらない。',
        '正解。'],
    ja: '直前の変更について知らされない限り、印刷業者は元のファイルのまま作業を進める。' }),

  /* id は v5q106r3（no は 106 のまま。stem を 3 度目に差し替えたため設問 id を採番し直した）。
     初版は単文で each of them addresses ... がそのまま成立していた。
     1 巡目は文末に nor do they offer ... を足し「nor は先行節が否定であることを要求する」と
     説明したが、これは事実に反する。nor は肯定の節の後にも置ける
     （Random House 系＝Dictionary.com は語義に「used after an affirmative clause, or as a
     continuative, in the sense of and not」を立て They are happy, nor need we worry. を挙げ、
     Wiktionary も「introducing a negative statement, without necessarily following one」と
     記述する）。そのため each / either が残っていた。
     2 巡目は帰結節 so those concerns remain unaddressed で each / either を切ろうとしたが、
     これは意味の矛盾による排除であり、addresses を「言及する」、unaddressed を「未解決」と
     読み分ければ矛盾が消えるため構造的には閉じていなかった。
     3 巡目は空所の節に at all を置いた。at all は否定文・疑問文専用の強調表現なので
     （LDOCE: 「used in negative statements and questions to emphasize what you are saying」）、
     節内に他に否定語が無いこの文では、空所自体が否定でなければ節が成立しない。
     これで each / either の排除が意味の推論ではなく構造（否定極性項目の認可）になる。
     both は加えて複数扱いで印字の addresses と一致しない。
     4 巡目の検証（別の目）：認可子は同一節内に必要で、セミコロン前の differ・mainly は
     空所の節を c 統御しないため認可子にならない。空所の節には否定語・疑問・条件・比較・
     only / hardly / few のいずれも無い。Wiktionary の用法注記も
     「almost always used in negative polarity sentences, questions, and conditionals or
     hypotheticals, as opposed to plain affirmative statements」で LDOCE と一致する。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v5-p5-106r3', part: 5, kind: 'single', topics: ['pron'], level: 4,
    questions: [{
      id: 'v5q106r3', no: 106,
      stem: 'The two proposals differ mainly in cost; ------- of them addresses the timeline concerns at all, so the committee has asked for revised submissions.',
      choices: ['both', 'each', 'either', 'neither'],
      answer: 3,
      exp: '空所を含む節の末尾に at all がある。LDOCE が at all を「used in negative statements and questions to emphasize what you are saying」と記すとおり、at all は否定文・疑問文でしか使えない強調表現。これを認可できるのは同じ節の中にある否定語・疑問・条件・比較・only / hardly などの要素に限られるが、この節にはそのいずれも無い（セミコロンより前の differ や mainly は別の節の語なので認可子にならない）。したがって空所自体が否定を担う語でなければ節が成立せず、4 つのうち否定を含むのは neither だけ。neither of + 複数名詞は単数扱いなので、印字されている addresses とも一致する。',
      why: ['「両方とも」。二重に不可。（1）both of them は複数扱いなので動詞は address となり、印字されている addresses（三人称単数現在）と一致しない。（2）肯定の意味しか持たないため、文末の at all を認可する否定要素が節内に存在しなくなる。',
            '「それぞれ」。単数扱いなので addresses とは形が合うが、肯定の断定であり、at all が要求する否定文・疑問文という環境を作れない（Each of them addresses the concerns at all. とは言えない）。意味の上でも「2 つとも懸念に対応している」ことになり、修正案の再提出を求めたという帰結とつながらない。',
            '肯定文の either of them は「（2 つのうち）どちらでも」の意で（Either of them meets the requirement.）、否定を含まないため at all を認可できない。文末に置く副詞の either は「〜もまた…ない」で否定文専用だが、それは主語の位置に立つ用法ではない。',
            '正解。neither of them ...「どちらの提案も〜ない」。節に否定を持ち込むので文末の at all を認可し、neither of + 複数名詞は単数扱いなので addresses とも一致する。'],
      ja: '2 つの提案は主に費用の点で異なっているが、どちらも日程の懸念にはまったく対応しておらず、そのため委員会は修正案の再提出を求めた。',
      topics: ['pron'],
    }] },

  p5(107, { t: ['adjprep'], lv: 5,
    s: 'The revised guidelines are largely ------- to those issued last year, aside from the reporting deadlines.',
    c: ['comparably', 'compare', 'comparable', 'comparability'],
    a: 2,
    e: 'be comparable to ...「〜に匹敵する、同等である」。are の補語になる形容詞が入る。',
    w: ['副詞。are の補語にはなれず、副詞が to 句と結び付いて「〜と同等だ」を表す形もない。',
        '動詞の原形。be 動詞のあとに定形動詞は置けない（受動態にするなら are compared to）。',
        '正解。be comparable to ...。',
        '名詞「比較可能性」。The guidelines are comparability では「ガイドライン＝比較可能性」という等式になり、意味をなさない。'],
    ja: '改訂されたガイドラインは、報告期限を除けば、昨年発行されたものとほぼ同等である。' }),

  /* 最終照合で、vol4-r1.js No.108（"------- piece of equipment leaving the warehouse
     must be logged ..." choices Every/All/Several/Most、正解 Every）と選択肢が
     4 語中 3 語（Every/All/Several）重なり、正解も Every で一致する巻をまたぐ重複が
     見つかった。誤答1本（All → Both）を差し替えて重なりを4語中2語まで下げた。
     誤答1本のみの差し替え（過半には満たない）なので id は据え置く。 */
  p5(108, { t: ['quant'], lv: 4,
    s: '------- department is expected to submit its own contingency plan by Friday.',
    c: ['Every', 'Few', 'Several', 'Both'],
    a: 0,
    e: 'department が単数形で動詞も is なので、単数名詞を取る every。',
    w: ['正解。', '複数名詞を取る。department という単数形の可算名詞には続けられない。', '複数名詞を取る。department という単数形の可算名詞には続けられない。', '2 つのものを指すときに使う語で複数扱いになる。department という単数形の可算名詞には続けられず、二者に絞る文脈も無い。'],
    ja: '各部門は金曜日までに、それぞれの緊急時対応計画を提出することになっている。' }),

  p5(109, { t: ['comp'], lv: 5,
    s: 'The renovated wing is ------- larger than the architects had originally sketched.',
    c: ['very', 'so', 'too', 'considerably'],
    a: 3,
    e: '比較級 larger を強める副詞は much / far / considerably。very と too は比較級を修飾できない。',
    w: ['原級を修飾する。', 'so + 比較級は不可。', '「〜すぎる」。', '正解。'],
    ja: '改装された棟は、建築家が当初描いていたものよりもかなり広い。' }),

  p5(110, { t: ['voice'], lv: 5,
    s: 'The malfunction ------- by a technician within minutes of the alarm sounding.',
    c: ['was identified', 'identified', 'were identified', 'identifying'],
    a: 0,
    e: 'by 以下に行為者が示され、空所の後ろに目的語がないので受動態。',
    w: ['正解。', '能動態。', '受動態だが、主語 The malfunction は単数なので、複数の主語に対応する were とは一致しない。', '分詞。'],
    ja: 'その故障は、警報が鳴ってから数分のうちに技術者によって特定された。' }),

  p5(111, { t: ['rel'], lv: 5,
    s: 'The supplier ------- components we depend on most heavily is based overseas, which complicates contingency planning.',
    c: ['whose', 'who', 'which', 'that'],
    a: 0,
    e: '所有格の関係代名詞。「その部品」＝仕入先の部品、という所有関係を示す。',
    w: ['正解。', '主格。人を先行詞に取るが所有関係は示さない。', '所有関係を示さない。', '所有関係を示さない。'],
    ja: '私たちが最も頼りにしている部品を扱うその仕入先は海外に拠点があり、そのため緊急時対応計画が複雑になっている。' }),

  p5(112, { t: ['biz'], lv: 5,
    s: "Approval of expenses above the standard limit is left to the finance director's -------.",
    c: ['discrepancy', 'disclosure', 'discretion', 'distinction'],
    a: 2,
    e: 'discretion「裁量、自由裁量権」。be left to someone\'s discretion「〜の裁量に委ねられる」は、判断の権限が誰にあるかを述べる定型。',
    w: ['「（数値・記述の）食い違い、不一致」。差異そのものを指す語で、判断を委ねる先にはならない。',
        '「（情報の）開示」。be left to the director\'s disclosure では「開示という行為に委ねられる」となり、承認権限の所在を述べる文にならない。',
        '正解。left to the finance director\'s discretion。',
        '「区別、差異」（また「卓越」）。物事を分ける働きや名誉を指す語で、権限を委ねる対象にはならない。'],
    ja: '標準限度額を超える経費の承認は、財務担当役員の裁量に委ねられている。' }),

  p5(113, { t: ['verbal'], lv: 5,
    s: 'The board postponed ------- a decision until the audit findings were available.',
    c: ['made', 'to make', 'making', 'make'],
    a: 2,
    e: 'postpone は動名詞を目的語に取る。',
    w: ['過去分詞。', '不定詞は取らない。', '正解。', '原形。'],
    ja: '取締役会は、監査結果が出るまで決定を下すのを延期した。' }),

  /* id は v5q114r2（no は模試の通し番号として 114 を維持。stem・選択肢とも差し替えたため
     設問 id は二度目の新規採番。旧 id を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     初版は has scarcely declined が現在完了＋scarcely の定型としてそのまま成立し、
     単文中に steadily を選ばせる手がかりが無かった。
     v5q114r は「直近 6 四半期それぞれで約 2 ポイントずつ低下」という下げ幅を足したが、これは
     意味の矛盾による排除でしかない。scarcely declined は「（システム導入という要因では）
     ほとんど下がっていない」と読め、後半の低下は別要因によるものと補える。
     旧 why[3] の「has scarcely declined という形自体は英語として正しいが…矛盾する」という
     譲歩の書き方自体が、CLAUDE.md の言う「第二の正解ありの徴候」。
     「肯定の副詞 vs 否定の副詞を単文の意味で選ばせる」型は閉じられないため、構造で切れる型に
     作り替えた。

     新しい型は「限定詞 the と裸の名詞 head of operations の間に入れるか」で決まる。
     副詞がこの区間に出ること自体はあるが、それは掛かる先の分詞・形容詞がそこにあるときだけで
     （the formerly state-owned utility / the previously announced merger /
     the presently serving chairman）、本問の head of operations は裸の名詞なので掛かる先が無い。
     したがって立てるのは名詞を直接修飾できる語＝限定用法の形容詞だけになり、
     4 語のうちその用法を持つのは then しかない。
     ※「副詞は名詞句に入れない」と書くと上の 3 例が反例に見えるので、解説では
     「掛かる先の分詞・形容詞があるときだけ入れる」という肯定形で書いてある。
     裏付け：LDOCE は then の語義 8 を adjective として立て「used when mentioning the person who
     had a particular job, title, or position at a time in the past」と定義し、
     a visit to China by the then US President, Richard Nixon を挙げる。
     Wiktionary も英語の Adjective 節に attributive（限定用法のみ・比較変化なし）と注記する。
     用例：Google Books ngram 1990-2019 平均で the then chairman 1.08e-08、
     the then head of 1.71e-08 に対し、the formerly chairman / the previously chairman /
     the presently chairman / the formerly manager / the previously manager /
     the presently manager はいずれも 0 件。英語版 Wikipedia の insource 完全一致でも
     the then head of 490 件・the then Prime Minister 2183 件に対し
     the previously chairman・the presently chairman は 0 件。
     誤答が名詞句の中に入れる形も確認した（the formerly state-owned … は insource 33 件）。
     いずれも掛かる先は分詞・形容詞であって、裸の名詞ではない。
     唯一の例外らしき当たりは insource:"the previously head of" の 1 件だが、中身は
     List of Christians in science and technology の「He was the previously head of Condensed
     Matter Physics at Oxford.」で、the previous head の書き損じ。同記事系統の未校正文であり、
     the then head of 490 件との差から見ても用法の裏づけにはならない。
     in 2019 と who left the company the following year が基準時を文中に固定しているので、
     then が指す時点は文中で確定する（CLAUDE.md の「発話時点に依存する語は時点を固定する」）。
     判断過程の重複確認：adv-05r3 は「前置詞の目的語の内側で数量を前から修飾できるか」、
     adv-06r は「副詞が of 補語を後ろに取れるか」、v5q106r3 は「at all の認可」、
     v1q128r2 は「定形節か分詞句か」で切っており、本問の「限定詞と名詞の間に入って
     裸の名詞を修飾できるか」とはいずれも別。
     level は 5 から 4 に下げた（別の目による判定）。CLAUDE.md の lv5 は
     (a) 語彙の帯が 900+ か (b) 構造的トラップ＝誤答が離れた位置の構造でのみ排除されるか、の
     どちらか。(a) は満たさない——then / formerly / previously / presently はいずれも
     ごく普通の語で、900 帯の法務・財務語彙ではない。(b) も満たさない——誤答を排除する
     トリガーは空所の直前の限定詞 the と直後の裸の名詞 head で、どちらも隣接語である。
     CLAUDE.md は「トリガーが空所を直接支配する隣接語なら lv3 か lv4」と定めている。
     決め手は「then には限定用法だけの形容詞がある」という、知らなければ解けないが
     覚えれば解ける語法知識なので lv4（既定値）が正しい。設問の中身は変えていない。
     p5() ヘルパーは id を no からテンプレートリテラルで自動生成し、no を変えずに
     id だけ変える手段がないため、このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v5-p5-114r2', part: 5, kind: 'single', topics: ['adv'], level: 4,
    questions: [{
      id: 'v5q114r2', no: 114,
      stem: 'The shift-planning system now used at every depot was introduced in 2019 at the insistence of the ------- head of operations, who left the company the following year.',
      choices: ['then', 'previously', 'formerly', 'presently'],
      answer: 0,
      exp: '空所は限定詞 the と名詞 head of operations の間にある。副詞がこの区間に現れることはあるが、それは掛かる先の分詞・形容詞がそこにあるときに限られる（the formerly state-owned utility / the previously announced merger では、副詞は state-owned・announced に掛かっている）。本問の head of operations は裸の名詞で、副詞が掛かれる分詞も形容詞も無いため、ここに入れるのは名詞を直接修飾できる語＝限定用法の形容詞だけになる。4 つのうち限定用法の形容詞として辞書に立項されているのは then だけで、LDOCE は adjective の語義に「used when mentioning the person who had a particular job, title, or position at a time in the past」を立て、a visit to China by the then US President, Richard Nixon を挙げる（Wiktionary も attributive only と注記）。in 2019 と who left the company the following year が「その当時」の基準時を文中に固定しているので、then が指す時点も文中で決まる。',
      why: ['正解。the then head of operations「当時の運営責任者」。then には副詞のほかに限定用法だけの形容詞があり、役職を表す名詞の前に置いて「その当時その職にあった」を表す（the then US President / the then chairman / the then head of ...）。',
            '「（基準となる時点より）前に」。これも動詞・分詞に掛かる副詞で（had previously worked there）、名詞句の中に入れるのは分詞・形容詞を伴うときだけ（the previously announced merger は announced に掛かっている）。head of operations は裸の名詞なので掛かる先が無い。',
            '「以前は」。動詞や分詞・形容詞に掛かる副詞で、名詞句の中に入る場合も修飾できるのは分詞・形容詞のほう（the formerly state-owned utility / a formerly derelict site）。head of operations は裸の名詞なので掛かる先が無い。同じ内容を限定詞の後ろで言うなら、副詞ではなく形容詞 former を使って the former head of operations とする。',
            '「まもなく」とも「現在」とも読む副詞だが、掛かる先はどちらの語義でも動詞・分詞（will presently be announced / the presently serving chairman）。裸の名詞を直接修飾する用法は持たないので、「現在」の意味で読んでも、分詞も形容詞も無いこの位置には置けない。'],
      ja: '現在どの営業所でも使われているシフト管理システムは、当時の運営責任者の強い求めによって 2019 年に導入された。その責任者は翌年に会社を去っている。',
      topics: ['adv'],
    }] },

  /* id は v5q115r2（no は 115 のまま。前版 v5q115r も今回の巡で新設した id で HEAD には無く、
     まだコミット・配布されていないため SRS 履歴が存在しないが、stem を丸ごと差し替えるため
     区別のため r2 とした）。
     第3巡監査で、前版の (C) have worn が第二の正解であることが確定した——要求・提案の that 節
     では主語・動詞の一致が停止し、原形は HAVE の原形＝have なので、have worn は完了仮定法として
     正文になり得る（"It is not required that licensing have been continuous during that
     period." ほか、英語版 Wikipedia insource で多数確認）。加えて前版は v2q111r と主語
     every visitor・目的語 a badge まで一致し、誤答テンプレートも will V / have V-en / were
     V-ing で揃っていたため、巻をまたぐ重複にもなっていた。
     DECISIONS.md D1再改訂のとおり、肯定形のまま4本とも定形にする型は
     「will は動詞ごとに開閉が割れる」「have V-en は完了仮定法として必ず開く」の両方に当たるため
     採らず、`not` を空所の前に置く型（subj-28 と同型）に作り替えた。
     not が空所の前にあるので、直説法（is/was 等）・進行形（is being V-en）・原形以外の受動態は
     すべて「not は定形の直前ではなく be動詞の直後に置く」という語順のみで同時に落ちる
     （is not dispatched / was not dispatched / is not being dispatched の語順にしかならず、
     not の直後に定形を直接置くことはできない）。誤答3本が同一の語順規則ひとつで一括消去できる
     ため、CLAUDE.md の目盛りに従い level は 3（前版の5から変更）。
     stem は badge / every visitor から完全に離し、v2q111r2 とも重ならない題材（代替出荷／
     損傷品の返送）にした。トリガーは essential（この T1 の族でまだ使われていない語）とした
     ——当初 stipulate 案で書いたが、`grammar.js` が並行してこの巡で `subj-07r` に
     stipulate を使う編集を加えていたため（"The updated data-handling policy stipulates
     that an employee not ------- client files to a personal email account ..."）、
     トリガー動詞の重複を避けて essential に差し替えた。
     grammar.js の subj-28（暗号鍵／critical／受動）・subj-02r（試験区域／mandatory／能動）・
     subj-07r（クライアントファイル／stipulate／能動）・vol4-r1.js の v4q115r（会則／require／
     受動）・v2q111r2（緊急停止装置／imperative／能動）のいずれとも語彙が重ならないようにした
     （本問は受動・物主語）。
     `not` 先行型なので will の可否を動詞ごとに測り直す必要は無い（語順だけで閉じるため）。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v5-p5-115r2', part: 5, kind: 'single', topics: ['subj'], level: 3,
    questions: [{
      id: 'v5q115r2', no: 115,
      stem: 'It is essential that the replacement shipment not ------- dispatched before the damaged units have been returned.',
      choices: ['is dispatched', 'be dispatched', 'was dispatched', 'is being dispatched'],
      answer: 1,
      exp: 'essential that ... の that 節を否定するときも、not を原形の直前に置く（not + 原形）。定形の活用形（現在形・過去形・現在進行形）の受動態を否定するときは、not を be動詞の直後に置く語順（is not dispatched / was not dispatched / is not being dispatched）になるため、not の直後にそのまま定形を置くことはできず、この位置に入れられるのは原形の be だけになる。',
      why: ['直説法の現在形（受動態）。否定形は is not dispatched となるため、not を be動詞の直前に置いたこの語順は作れない。',
            '正解。not be dispatched。要求・必要を表す essential の that 節は原形（仮定法現在）を取り、否定は not ＋ 原形。',
            '過去形（受動態）。否定形は was not dispatched となるため、not を be動詞の直前に置いたこの語順は作れない。',
            '現在進行形（受動態）。否定形は is not being dispatched となるため、not の直後にこの形をそのまま置くことはできない。'],
      ja: '損傷した製品が返送されるまで代替の出荷分を発送してはならないということが必須である。',
      topics: ['subj'],
    }] },

  p5(116, { t: ['confuse'], lv: 5,
    s: 'The landlord was ------- enough to waive the last month\'s rent given the circumstances.',
    c: ['considerate', 'considerable', 'considering', 'consideration'],
    a: 0,
    e: 'considerate「思いやりのある、気配りのできる」。be considerate enough to do「〜してくれるほど思いやりがある」。派生形 considerable「かなりの」との識別が要点。',
    w: ['正解。considerate enough to waive the rent。',
        '「（量・程度が）かなりの」。considerable expense / considerable time のように量的な名詞を修飾する語で、人柄を述べる用法はない。be considerable enough to do も「量が十分あって〜できる」の意になり、家賃を免除した理由の説明にならない。',
        '「〜を考慮すると」の前置詞用法か、consider の現在分詞。動詞と見れば目的語が要り、was considering enough to waive では enough が目的語として浮いてしまう。',
        '名詞「考慮、対価」。The landlord was consideration では人と「考慮」を同一視することになり、文が成立しない。'],
    ja: '大家は、事情を考慮して最後の月の家賃を免除してくれるほど思いやりがあった。' }),

  p5(117, { t: ['inv'], lv: 5,
    s: 'Not until the final inspection ------- the wiring fault discovered.',
    c: ['were', 'it was', 'was', 'did it'],
    a: 2,
    e: 'Not until ... が文頭に出ると主節が倒置される。主語 the wiring fault は単数なので was。',
    w: ['複数形。', '倒置されていない形。', '正解。', 'did it は一般動詞の疑問文・強調構文で使う do-support の形。この形を入れると助動詞 did の後ろに主語 it を置いたことになるが、続く the wiring fault discovered もそれ自体が主語＋動詞の並びなので、文に主語が it と the wiring fault の二つ並ぶことになり成立しない。'],
    ja: '最終検査になって初めて、配線の不具合が発見された。' }),

  /* id は v5q118r（no は 118 のまま。stem・選択肢とも差し替えたため設問 id は新規採番）。
     旧 v5q118 は The consultant ------- the board that further delays would jeopardise the
     certification timeline. で、v4q118（The technician ------- us that ...）と完全な同型
     （V + 人 + that 節で inform を選ばせる）だった。誤答も mentioned / said を共有していた。
     「V + 人 + of / that」の枠はアプリ全体で vusage-01・vusage3-02・vusage3-03・v2q112・
     v4q118・本問の 6 問に達しており飽和していたため、v4q118 とあわせて別の型に差し替えた。

     閉じ方は 1（構造で切る）。空所の後ろに branch managers と the trouble という前置詞を
     挟まない名詞句が二つ並んでいるので、二重目的語（V + 人 + 物）の型を持つ動詞しか入らない。
     残る 3 語は免れる対象を of（relieve）・from（exempt）で示す型しか持たず、avoid は
     目的語を一つしか取らない。
     裏付け：LDOCE は spare somebody something を立項する（I wanted to spare her the
     embarrassment of ...）。Google Books ngram 1990-2019 平均で spares them the 1.85e-09、
     spare you the trouble 3.21e-09、exempt them from the 1.23e-08 に対し、
     relieves them the / avoids them the / exempts them the / relieve you the trouble は
     いずれもデータなし（0 件）。
     ※ saves を誤答に入れていないのは、save somebody something が spare と同じ二重目的語の
     型を持ち、第二の正解になるため。実際 ngram の saves you the trouble 6.43e-09 は
     spare you the trouble 3.24e-09 の 2 倍あり、除外は正しい。

     2026-08-17 レビューで独立検証し、正解は spares 一つで確定。追加で確かめたこと:
     ・LDOCE の spare は spare somebody the trouble/difficulty/pain etc (of doing something) を
       そのまま立項しており、本問の枠と完全に一致する。OALD も spare somebody/yourself something を
       「save somebody pain/trouble」の語義で立項（You could have spared yourself an unnecessary trip ...）。
     ・OALD の動詞欄が挙げる型は relieve something / relieve somebody / relieve somebody of something、
       exempt somebody/something from something、avoid something / avoid somebody/something。
       二重目的語を持つのは spare だけ。
     ・英語版 Wikipedia の insource:"relieved him the" は 5 件だが、抽出するとすべて
       「... relieved him.」と文が切れた直後を拾った偽陽性で、二重目的語の実例は 0。
       relieved him of the は 43 件。exempted him the は 0 件。
       spared her the stress of having to relive the accident / spared her the death penalty のように
       spare 側だけが実文に出る。
     level を 5 から 4 に下げた。落とす理由は「spare が二重目的語を取る動詞だと知らなかった」で、
     これは覚えれば解ける中頻度の語法。しかもトリガーは空所直後に並ぶ裸の名詞句 2 つで隣接しており、
     CLAUDE.md は「トリガーが空所を直接支配する隣接語なら lv3 か lv4」と定めている。
     no（118）・正解位置（B）・topics は変えていない。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v5-p5-118r', part: 5, kind: 'single', topics: ['vusage'], level: 4,
    questions: [{
      id: 'v5q118r', no: 118,
      stem: 'The consolidated return ------- branch managers the trouble of filing three separate sets of figures each quarter.',
      choices: ['relieves', 'spares', 'exempts', 'avoids'],
      answer: 1,
      exp: '空所の後ろに branch managers と the trouble という名詞句が前置詞を挟まずに二つ並んでいるので、二重目的語（V + 人 + 物）の型を持つ動詞が要る。spare somebody something「人に〜（面倒・不快なこと）をかけずに済ませる」がその型で、LDOCE も spare somebody something を立項している（I wanted to spare her the embarrassment of ...）。',
      why: ['relieve は免れる対象を of で示す（relieve somebody of a duty / relieve somebody of the burden）。二重目的語の型を持たないため、branch managers の後ろに the trouble を前置詞なしで続けられない。relieves branch managers of the trouble ... なら成立する。',
            '正解。spare somebody something。',
            'exempt も免除の対象を from で示す（exempt somebody from the requirement）。これも二重目的語の型を持たないので、exempts branch managers from the trouble ... と from が要る。',
            'avoid が取る目的語は一つで、避ける事柄そのものが来る（avoid the trouble of filing ... / avoid filing ...）。人を第一目的語に置いて「人に〜を避けさせる」意味を作る型は無い。'],
      ja: '統合された申告書のおかげで、支店長は四半期ごとに 3 種類の数値表を別々に提出する面倒を免れる。',
      topics: ['vusage'],
    }] },

  p5(119, { t: ['ctense'], lv: 5,
    s: 'By the time the new terminal opens next spring, construction crews ------- around the clock for over three years.',
    c: ['work', 'worked', 'will have been working', 'have worked'],
    a: 2,
    e: '来春という未来の基準時までの継続を表すので未来完了進行形。',
    w: ['現在形。', '過去形。', '正解。', '現在完了は基準時が現在。'],
    ja: '来春に新ターミナルが開業する頃には、建設作業員たちは 3 年以上にわたって昼夜を問わず作業してきたことになる。' }),

  /* id は v5q120r（no は模試の通し番号として 120 を維持するが、中身を差し替えたため
     設問 id は新規採番。旧 id v5q120 を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     p5() ヘルパーは id を no からテンプレートリテラルで自動生成し、no を変えずに
     id だけ変える手段がないため、このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v5-p5-120r', part: 5, kind: 'single', topics: ['phrasal'], level: 4,
    questions: [{
      id: 'v5q120r', no: 120,
      stem: 'If the automated screening tool is unavailable, the compliance team can ------- back on the manual procedure it used before the system was introduced.',
      choices: ['step', 'fall', 'draw', 'turn'],
      answer: 1,
      exp: 'fall back on「（主たる手段が使えないときに）代わりに〜に頼る、〜に立ち返る」。条件節 If the automated screening tool is unavailable が「代替手段」を求める文脈を作っており、back on のあとに手段を表す名詞句を取るこの型と噛み合う。残る 3 語は、back on のあとに手段の名詞句を取って「代わりに頼る」意味を作る用法を持たない。',
      why: ['step back on 自体は英語として存在するが、語義が合わない。「（舞台・コートなど）活動の場に戻る」（step back on the court）の意味では足を乗せる場所を目的語に取るので procedure は取れず、「〜についての立場・約束を撤回する」（step back on its plan）の意味では「手を引く」ことになり、自動ツールが使えないときの代替手段を述べる文意と正反対になる。「距離を置いて考え直す」の step back なら続くのは from。',
            '正解。fall back on（= fall back upon）「他の手段が使えないときに代替として頼る／立ち返る」。fall back on the law、have something to fall back on のように、手段・資源を表す名詞句を目的語に取る。',
            'draw back は「後ずさりする」「（不利と考えて）手を引く」で、続く前置詞は from（draw back from the agreement）。draw back on という組み合わせは主要辞書のいずれにも立項がない。資源や経験を「活用する」意味を担うのは draw on だが、本問は back が印字されているため draw on の形にはできない。',
            'turn back は「引き返す」「以前のやり方に戻る」だが、戻る先は to で示す（turn back to the old system）。turn ... back on は「（照明・電源などを）再び入れる」で、作動させられる装置・供給が目的語であり、しかも語順は turn the system back on。手順を「入れ直す」とは言えない。turn one\'s back on は「〜を見放す」で所有格が必須、意味も「頼る」の逆になる。'],
      ja: '自動審査ツールが使えない場合、コンプライアンス部門は、システム導入前に使っていた手作業の手順に立ち返ることができる。',
      topics: ['phrasal'],
    }],
  },

  p5(121, { t: ['pos'], lv: 5,
    s: 'The inspector found the wiring ------- adequate to meet current safety standards.',
    c: ['sufficiently', 'sufficient', 'sufficiency', 'suffice'],
    a: 0,
    e: '形容詞 adequate を修飾するので副詞。',
    w: ['正解。', '形容詞。形容詞を修飾できない。', '名詞。', '動詞。'],
    ja: '検査官は、その配線が現行の安全基準を満たすのに十分に適切であると判断した。' }),

  /* id は v5q122r（no は 122 のまま。stem を差し替えたため設問 id は新規採番）。
     旧 stem は The factory operates two production lines; ------- runs a different shift pattern.
     で、neither runs a different shift pattern（＝2 本は同じシフトで動いている）が
     単数一致も意味も満たしてそのまま成立し、第二の正解になっていた。
     a different には「互いに異なる」以外に「（別の何かとは）別の」の読みがあり、
     比較の相手が文中に無いため、読み手が文外に基準を補えば neither も either も開く。
     配分を表す文末の副詞 each（LDOCE は each を adverb として立項し
     The tickets cost £20 each. を挙げる）を問う形に変え、
     both / neither は語の置き場所、either は「否定文専用の文末副詞」という構造で切れる形にした。
     topics も、代名詞ではなく数量詞の配分用法を問う内容になったため pron → quant に改めた
     （設問 106 と同じ topic・同じ選択肢集合という重複の指摘への部分的な対応でもある）。
     level は 5 から 4 に下げた。lv5 の要件（b）は「誤答の少なくとも 1 つが単独では正しい英語」で
     あることだが、both / neither / either はいずれも目的語の後ろというこの位置に置いた時点で
     どんな文脈でも非文になるので、構造的トラップではない。決め手は「each には配分を表す副詞用法が
     ある」という知識ひとつで、覚えれば解ける 860〜900 帯の項目＝lv4。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v5-p5-122r', part: 5, kind: 'single', topics: ['quant'], level: 4,
    questions: [{
      id: 'v5q122r', no: 122,
      stem: "The factory's two production lines run on staggered schedules and employ about forty workers -------.",
      choices: ['both', 'neither', 'either', 'each'],
      answer: 3,
      exp: '空所は目的語 about forty workers の後ろ、文末の位置。この位置に置いて「1 つにつき〜」という配分を表せるのは、副詞用法を持つ each だけ（LDOCE は each を adverb としても立項し、The tickets cost £20 each. / You get two cookies each. を挙げる）。employ about forty workers each で「2 本のラインが各々約 40 人を雇っている」。',
      why: ['「両方とも」。both は名詞句の前（both production lines）か、主語に添えるときは動詞の前・助動詞の後（The lines both employ ...）に置く語で、目的語の後ろに置いて配分を表す用法がない。名詞の直後に置ける形は them both のように 2 つのものを指す代名詞に限られ、空所の直前にあるのは forty workers（2 つのものではない）。',
            '「どちらも〜ない」。否定を含む語で、neither production line / neither of the lines のように名詞句を作って主語や目的語の位置に立つ。文末に置いて「1 つにつき」を表す用法はなく、and で結ばれたこの節は run on staggered schedules と並ぶ肯定の節なので、否定語を入れる余地もない。',
            '文末に置く副詞の either は「〜もまた…ない」で、LDOCE が「used to show that a negative statement is also true about another thing or person」と記すとおり否定文でしか使えない（The second line does not run on Sundays either.）。ここは肯定文なので入らない。either line / either of them と名詞句を作る用法も、空所の後ろに名詞が続かないため取れない。',
            '正解。each の副詞用法「1 つにつき、それぞれ」。数量を表す目的語の後ろに置いて配分を示す。'],
      ja: 'その工場の 2 本の生産ラインは時間をずらした日程で稼働しており、それぞれ約 40 人の作業員を雇用している。',
      topics: ['quant'],
    }] },

  /* id は v5q123r（no は 123 のまま。選択肢を差し替えたため設問 id は新規採番）。
     旧選択肢の have は have a look (at ...) が主要辞書に載る定型で、take a look と
     同義のまま成立して第二の正解になっていた。a look と組めない pay に差し替えてある。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v5-p5-123r', part: 5, kind: 'single', topics: ['colloc'], level: 5,
    questions: [{
      id: 'v5q123r', no: 123,
      stem: 'The audit team was asked to ------- a closer look at the discrepancies in the March figures.',
      choices: ['make', 'take', 'do', 'pay'],
      answer: 1,
      exp: 'take a closer look at ...「〜をもっと詳しく調べる」。a look（ひと目見ること）を目的語に取れるのは take（英語の口語では have a look、get a look とも言うが、選択肢にはない）。',
      why: ['make が作り出す対象は a decision / a suggestion / an effort など、行為の結果生まれるもの。a look とは結び付かない。',
            '正解。take a closer look at the discrepancies。',
            'do の目的語になるのは the paperwork / the accounts のような具体的な作業で、a look は取らない。',
            'pay が名詞と作る成句は pay attention / pay a visit / pay a compliment / pay tribute のように「相手に差し向けるもの」に限られ、a look は入らない。意味の近い pay closer attention to ... なら成り立つが、印字されている a look とは組めない。'],
      ja: '監査チームは、3 月の数値の食い違いをもっと詳しく調べるよう求められた。',
      topics: ['colloc'],
    }] },

  p5(124, { t: ['conjprep'], lv: 5,
    s: 'The warranty remains valid ------- the unit has not been modified by an unauthorised technician.',
    c: ['in spite of', 'provided that', 'because of', 'owing to'],
    a: 1,
    e: '条件を表す provided (that)「〜という条件で」。後ろが節なので接続詞的表現が必要。',
    w: ['前置詞句。', '正解。', '前置詞句。', '前置詞句。'],
    ja: '保証は、無許可の技術者によって装置が改造されていない限り有効である。' }),

  /* id は v5q125r（no は 125 のまま。動詞を close から block に差し替えたため設問 id は新規採番）。
     旧 (A) to close は「with + 名詞句 + to 不定詞」（予定・未処理を表す絶対構文）でそのまま成立していた。
     英語版 Wikipedia insource /[Ww]ith the [a-z]+ to close/＝31 件（with the deal to close at the
     end of the year など）、/[Ww]ith the [a-z]+ to open in/＝7 件（with the stations to open in
     early 2017 など）で、close/open のような自動詞用法（能格）を持つ語がこの型に参加することを確認した。
     close は Google Books Ngrams の the road closes（平均 6.82e-10）・the bridge closes
     （6.06e-10）が示すとおり道路・施設を主語にする自動詞用法を持つため、(B) closing も
     「道路自身が閉まりつつある」という進行の絶対構文として同じ理由で開く疑いがあった
     （With the access road closing for repaving = 道路が再舗装のため閉まりつつあるので、と読め、
     受動の closed とほぼ同じ帰結になる）。
     T2（能格動詞は LDOCE で [transitive] のみの動詞に枠を移す）に従い、動詞を block に差し替えた。
     LDOCE は block（verb）のすべての語義を [transitive] とし、目的語を要求しない自動詞用法を
     立項しない（block somebody's way / block something from happening / block somebody's view /
     block light / block a ball など、いずれも目的語を伴う）。英語版 Wikipedia insource
     /with the [a-z]+ to block/＝18 件はすべて with the intent/task/plan/object to block …
     （目的を表す名詞＋to 不定詞）型で、NP 自身が「閉じる」ように to block する予定用法は無い。
     stem は変えていない（動詞は choices 側にのみ現れるため、stem を変更せずに動詞を差し替えられる）。
     誤答の過半（4 択中 4 本）を差し替えたため id は新規採番。level・topics は変えていない。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。

     2026-09-03（レビューの差し戻し・同じ id 内での是正）：(A) to block が、
     with + NP + to V の別の読み（目的語ギャップの不定詞関係節。with the bill to pay /
     with a family to feed 型）でそのまま成立していた。この読みでは the access road が
     block の目的語になり、"With the access road to block for repaving, ..." は
     「再舗装のため封鎖しなければならないアクセス道路を抱えているので」という意味で成立する
     （目的語ギャップの不定詞関係節は他動詞専用の語でこそ作れるため、自動詞用法を封じる目的で
     動詞を block に替えたことが、逆にこの読みを確実に成立させていた）。
     Google Books Ngrams（1990–2019, en-2019, smoothing=3 平均）: with the rent to pay
     1.27e-10 / with the bills to pay 8.8e-11 / with the mortgage to pay 4.2e-11 と、
     定冠詞つき単数の具体名詞でも目的語ギャップ型が成立する。英語版 Wikipedia insource
     "he has been left there with the bill to pay"（*Number9dream*）も同型の実例。
     (A) を定形の blocks に差し替えた。with 絶対構文の補語位置には分詞・形容詞・前置詞句などの
     非定形の要素しか入らず、定形動詞を置くと構文自体が成立しない
     （"With the access road blocks for repaving, ..." という文は作れない）ため、
     目的語ギャップの読みも予定を表す読みも生じる余地が構造的に消える。
     この差し替えは誤答 1 本（(A) のみ）で、v5q125r への採番はすでに前回の是正（動詞を block に
     替えた回）で行われているため id は据え置く。stem・answer・level・topics は変えていない。

     2026-09-12（第2巡再監査の指摘・stem 修正）：(C) block と (A) blocks が名詞読みで開いていた。
     block/blocks/blocking はいずれも名詞としても読めるため、"With the access road block for
     repaving, ..." が「補修舗装のための進入路の封鎖により」という意味で完全な付帯状況の名詞句として
     成立してしまう（road block は Ngrams で the road block 2.597e-08・road block for 1.041e-09
     と、上で正解の枠とした is essential that it be の 3.540e-08 より高頻度。英語版 Wikipedia
     insource "the road block (was|is|at|on|had)" も5件。access road ＋名詞の3段複合も
     access road construction / access road upgrades などで生産的）。blocks も複数名詞として
     同じ経路で開く。blocking も Wiktionary が名詞義（bed blocking のように対象名詞＋blocking の
     複合が語彙化する型）を立項しており、自動詞の共起制限（蹴球・クリケット・精神・計算機はいずれも
     主語に動作主性が要る）だけでは名詞読みまで塞げない。
     また現行 exp の「block に自動詞用法は無い」は事実として誤り。LDOCE は verb を [transitive]
     単独ラベルとするが、AHD 5th（v.intr. Sports／I blocked on his name.）・Collins 12th
     （(also intr) sport／(intr) 心理学的な block を病む）・Random House（v.i. Sports／
     to suffer a block）・Wiktionary（cricket／プログラミングの blocking call）がいずれも自動詞を
     立項しており、学習者が辞書を引けば衝突する（CLAUDE.md「実在する語義を存在しないと書かない」）。
     動詞は替えず、stem に不変化詞 off を追加して閉じた：block off / blocks off には名詞形が
     無く（"the access road block off for repaving" は off for repaving が構成素にならず
     主要部の立たない名詞句になる）、blocking off も LDOCE の block sth ↔ off（目的語必須の句動詞。
     例 Police blocked off the city centre streets.）により目的語の無いこの位置には立てず、
     自動詞義（蹴球・クリケット・精神・計算機）もどれも off を取らないので自動詞経路も同時に死ぬ。
     blocked off for は Ngrams 8.757e-09 で実在。off は stem 側にのみ置き、選択肢には付けていない
     （選択肢に付けると off が二重に出る）。stem を変更したため id を新規採番（v5q125r →
     v5q125r2）。no（125）・answer（3=blocked の位置）・level・topics は変えていない。

     2026-09-12（第3巡監査の指摘・動詞を替えて枠ごと組み替え）：足した off が、drills/grammar.js の
     ptcp-06r「With the eastern corridor ------- off for repairs, visitors should use the north
     entrance until June.」（分詞: sealing/*sealed/seals/seal）と、枠（With the 〈NP〉 ------- off
     for 〈-ing 名詞〉, 〈主節〉）・選択肢の活用パターン（原形・-ing・-s・-ed の4活用で正解は
     過去分詞）・装置（付帯状況の with + O + 過去分詞 ＋ 他動詞専用の句動詞 V off の目的語必須性）の
     いずれも一致してしまっていた。grammar.js は担当外のため、v5q125r2 の側を off に頼らない
     閉じ方に組み替えた。動詞を restrict に差し替え、stem からも off を外した：
     ・restrict は LDOCE 以下すべての主要辞書で他動詞専用（[transitive]。restrict access /
       restrict the flow のように必ず目的語を取り、自動詞の語義を立てる辞書は無い）で、
       block と違って自動詞の語義自体が存在しないため、block で起きたような「自動詞の共起制限
       だけでは名詞読みを塞げない」問題そのものが生じない。
     ・restrict には block のような一般名詞の語義が無い（辞書はいずれも動詞のみを立項）ため、
       "the access road restrict" が road block のような複合名詞として読める余地が無い
       （対照に road block は Ngrams で 2.597e-08 と高頻度）。block/blocks/blocking を
       名詞として読む経路（前回・前々回の是正で問題になった経路）がこの動詞には存在しない。
     ・「道路自身が制限する」という能動の自動詞読みが実在するかを英語版 Wikipedia insource で
       確認したところ、"road restricts to"／"restricts to a single lane" はいずれも0件
       （対照に同型の "narrows to a single lane" は8件検出され、検索そのものは生きている）。
       divert は「道路の走行方向が変わる」という能格の自動詞用法が実在する（insource
       "the road diverts" 7件・"diverts around" 7件）ため、restrict に差し替えた。
     この結果、off という不変化詞に頼らずに、動詞 restrict の他動詞専用性だけで
     (A)(B)(C) を同時に閉じられる。stem を変更したため id を新規採番（v5q125r2 → v5q125r3）。
     no（125）・level・topics は変えていない。answer の位置は D のまま
     （blocked→restricted、位置は変わらない）。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v5-p5-125r3', part: 5, kind: 'single', topics: ['ptcp'], level: 5,
    questions: [{
      id: 'v5q125r3', no: 125,
      stem: 'With the access road ------- for repaving, deliveries are being rerouted through the rear gate.',
      choices: ['restricts', 'restricting', 'restrict', 'restricted'],
      answer: 3,
      exp: '付帯状況の with + O + 過去分詞。restrict は「（通行・利用などを）制限する」を表す他動詞専用の語（LDOCE ほか主要辞書がいずれも [transitive] のみを立項し、名詞の語義も持たない）。空所の後ろに目的語が無く、道路は「制限される」側なので、過去分詞 restricted が入る。',
      why: ['三人称単数現在の定形動詞。with 付帯状況（with + O + -------）の空所に入るのは分詞・形容詞・前置詞句で、時制を持つ定形動詞は置けない。',
            '現在分詞。with + O + 現在分詞という形自体は成立するが、restrict は目的語を必要とする他動詞専用の語で、道路が「制限する」側になる自動詞用法は辞書に無い。目的語の無いこの位置には置けない。',
            '原形。時制も分詞の形も持たないため、付帯状況節の述部にはならない。',
            '正解。付帯状況の with + O + 過去分詞。restricted for repaving で「補修舗装のため通行制限されて」。'],
      ja: 'アクセス道路が再舗装のため通行制限されているため、配送は裏門経由に振り替えられている。',
      topics: ['ptcp'],
    }] },

  p5(126, { t: ['biz'], lv: 5,
    s: 'In recognition of the delay, the vendor agreed to ------- the late-delivery penalty for this shipment.',
    c: ['wave', 'waive', 'waiver', 'waiving'],
    a: 1,
    e: 'waive「（権利・請求・料金を）行使しないことにする、免除する」。waive a fee / waive a penalty / waive the requirement。同音の wave との識別が要点。',
    w: ['「（手・旗などを）振る」。目的語に取れるのは物理的に振れるものか、wave somebody through のように通す相手。違約金という債権を目的語にする語義はなく、waive と同音であることを突いた選択肢。',
        '正解。waive the late-delivery penalty「遅延違約金を免除する」。',
        '名詞「（権利の）放棄、免責証書」。動詞用法がないため、agreed to のあとに置いて the penalty を目的語に取ることはできない（名詞として使うなら agreed to a waiver of the penalty）。',
        '動名詞。「これから〜することに同意する」を表す形は agree to do で、この to は不定詞の to。agree to the terms のように to を前置詞と見る用法もあるが、そこに入るのは合意の対象となる案・条件を指す名詞句で、動作を表す動名詞は続けない。'],
    ja: '遅延を考慮し、業者は今回の出荷については遅延違約金を免除することに同意した。' }),

  p5(127, { t: ['adv'], lv: 5,
    s: 'The two survey results are ------- consistent, though the sample sizes differed considerably.',
    c: ['broad', 'broadly', 'broadness', 'broadened'],
    a: 1,
    e: '形容詞 consistent を修飾する副詞。broadly consistent「おおむね一致している」。',
    w: ['形容詞。', '正解。', '名詞。', '過去分詞。'],
    ja: 'サンプルサイズはかなり異なっていたものの、2 つの調査結果はおおむね一致している。' }),

  p5(128, { t: ['vform'], lv: 5,
    s: 'The invoice ------- twice before the accounting error was finally caught.',
    c: ['will be reissued', 'reissues', 'was reissued', 'reissuing'],
    a: 2,
    e: '請求書は「再発行される」側なので受動態。過去の一時点までの経緯を述べているので過去形。',
    w: ['受動態の未来形。before 節の was finally caught が過去の出来事を指しており、主節はその基準時より前に起きたことを述べる。未来形が指すのは発話時より後なので、この基準時と結び付かない。', '能動の現在形。', '正解。', '分詞。'],
    ja: '経理上の誤りがようやく発見されるまでに、その請求書は 2 回再発行されていた。' }),

  /* id は v5q129r（no は 129 のまま。stem と選択肢を差し替えたため設問 id は新規採番）。
     旧問は economical / economic の識別を狙っていたが、Merriam-Webster は economic の
     語義 2 に「ECONOMICAL」、語義 4 に「profitable」を立項しており、
     「材料が 40 パーセント少ない包装」の文脈では more economic がそのまま成立して
     第二の正解になっていた（LDOCE も economic に「利益が出て継続できる」の語義を持つ）。
     この対は「節約的」の向きでは辞書上排除できないため、語義が重ならない
     discrete / discreet の対に差し替えてある。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v5-p5-129r', part: 5, kind: 'single', topics: ['confuse'], level: 5,
    questions: [{
      id: 'v5q129r', no: 129,
      stem: 'The complaints log is broken down into five ------- categories, and no single complaint is counted in more than one of them.',
      choices: ['discreteness', 'discreet', 'discreetly', 'discrete'],
      answer: 3,
      exp: 'discrete「別個の、互いに重ならない」。後半の「1 件の苦情が複数の区分に数えられることはない」が、区分どうしが重複しないという discrete の語義をそのまま言い換えている。同音の discreet との識別が要点。',
      why: ['名詞「個別であること、離散性」。空所は名詞 categories を修飾する形容詞の位置で、名詞を並べても five discreteness categories という複合語は成立しない。',
            '「（秘密を漏らさないよう）慎重な、控えめな」。a discreet inquiry / be discreet about ... のように、人の言動や振る舞いの慎重さを述べる語で、区分どうしの重なりの有無は表せない。discrete と同音（/dɪˈskriːt/）だが語義は重ならず、綴りの取り違えを突いた選択肢。',
            '副詞「慎重に、目立たないように」。副詞は名詞 categories を修飾できないため、数詞と名詞の間には入らない。',
            '正解。discrete「別個の、独立した」。discrete categories / discrete units のように、境界が分かれていて重ならないものを表す。'],
      ja: '苦情記録は 5 つの独立した区分に分けられており、1 件の苦情が複数の区分にまたがって数えられることはない。',
      topics: ['confuse'],
    }] },

  /* id は v5q130r（no は 130 のまま。stem と選択肢を差し替えたため設問 id は新規採番）。
     旧問は are ------- from ... の空所に exempted を入れた are exempted from も
     受動態として完全に正しく、第二の正解になっていた（旧 why 自身が「be exempted from も
     可能だが」と認めていた）。空所を冠詞 an の直後の名詞位置に移し、
     exemption 以外はどれも入りようがない形に閉じてある。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v5-p5-130r', part: 5, kind: 'single', topics: ['adjprep'], level: 5,
    questions: [{
      id: 'v5q130r', no: 130,
      stem: 'Employees working fewer than fifteen hours a week may request an ------- from the mandatory training requirement.',
      choices: ['exempt', 'exemption', 'exempted', 'exempting'],
      answer: 1,
      exp: '空所は冠詞 an と前置詞 from に挟まれた名詞の位置。「〜の免除」を表す名詞は exemption で、request / grant / apply for an exemption from ... と使う。',
      why: ['形容詞。be exempt from ...「〜を免除されている」の形でしか使えない。名詞用法の exempt は「（税・兵役などを）免除されている人」を指す語なので、an exempt from the training requirement では「研修義務から来た免除者を申請する」となり意味をなさない。',
            '正解。exemption from「〜の免除」。an exemption from the requirement と冠詞・前置詞の両方に収まる唯一の形。',
            '過去分詞。are exempted from ... のように動詞として述語に立つ形で、冠詞 an に続く名詞にはならない。',
            '現在分詞・動名詞。exempt は他動詞なので目的語が要り、an exempting from ... という名詞句は作れない。'],
      ja: '週 15 時間未満勤務の従業員は、必須研修の免除を申請することができる。',
      topics: ['adjprep'],
    }] },

  /* ══════════ PART 6 ══════════ */
  p6({
    n: [131, 132, 133, 134], lv: 4, t: ['ctense', 'connect'],
    doc: {
      label: 'E-mail',
      head: 'To: All branch managers\nFrom: facilities@westgatecommerce.com\nDate: 6 March\nSubject: Temporary relocation of the archive room',
      body: [
        'The archive room on the second floor {{1}} to make way for the new server cabinet during the week of 18 March.',
        'All paper files will be moved to the basement storage unit for the duration of the work. {{2}}, staff who need a file from before 2019 should request it at least one working day in advance rather than retrieving it themselves.',
        '{{3}} A sign-out sheet will be kept at the basement door, and files must be returned within 24 hours.',
        'We recognise that this is inconvenient during the quarter-end reporting period, and we apologise for the timing, which {{4}} chosen by the facilities contractor rather than by this office.',
      ],
    },
    q: [
      /* 2026-09-03（監査指摘）: (B) is being relocated は「予定・手配済みの未来を表す現在進行形（受動）」
         としてそのまま成立していた（メールの日付 6 March とも矛盾しない）。(D) relocates も
         LDOCE が relocate を [intransitive, transitive] で立項するため疑われたが、自動詞の主語は
         人・事業体に限られ（if a person or business relocates ... they move to a different place）、
         archive room はどちらでもないので (B) ほど強くは開かない。
         T12（未来を表しうる形を誤答に置かない）に従い、(B) は「6 March 付のメールで 18 March の
         週の予定を過去形にはできない」という文書内の日付で閉じる was relocated に、(D) は非定形
         relocating に差し替えた。第二の正解を閉じる修正なので id を新規採番（no は 131 のまま）。 */
      { id: 'v5q131r', tag: '態・時制', t: ['ctense', 'voice'],
        c: ['will be relocated', 'was relocated', 'has been relocating', 'relocating'],
        a: 0,
        e: '書庫は「移される」側なので受動態。3 月 18 日の週という未来の予定なので未来形。',
        w: ['正解。',
            '受動態の過去形。メールの日付は 3 月 6 日で、本文が予定しているのは 18 日の週の移設。18 日の週は 6 日より後（未来）なので、過去形 was relocated ではまだ来ていない日付の出来事を過去形で語ることになり、6 March 付のメールの時点と噛み合わない。',
            '能動の現在完了進行形。3 月 18 日の週という今後の時期に対し、既に継続して行われてきた動作を表すこの形は時制が合わない。また能動態なので書庫室自身が移転する意味になってしまう。',
            '現在分詞。定形の動詞ではないため、文の述語になれない。'] },
      { tag: '接続語', t: ['connect'],
        c: ['For instance', 'Otherwise', 'Consequently', 'Similarly'],
        a: 2,
        e: '「全ファイルが地下に移される」→「その結果、旧ファイルが必要な職員は前日までに申請すること」という因果関係。',
        w: ['例示ではない。', 'Otherwise は先行文の内容が成り立たない場合を受ける語。ここは全ファイルの地下移設が実施される前提で新しい手順を出す箇所なので、否定の条件を導く語は入らない。', '正解。', '並列でもない。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'All files older than ten years will be digitised this year.',
          'The staff elevator will be out of service for the whole week.',
          'The archive room will reopen permanently on 1 April.',
          'Access to the basement will be restricted to core working hours.',
        ],
        a: 3,
        e: '直後が「地下入口にサインアウト表を置き、24 時間以内に返却」という新たな運用ルールの説明。地下への立ち入りに制約を設けるという前置きが自然につながる。',
        w: ['ファイルのデジタル化は本文のどこにも出てこず、直後の「地下でのサインアウトと 24 時間以内の返却」という運用説明の前置きにならない。', 'エレベーターの停止は地下への立ち入り手順とは別の話で、直後の返却ルールを導かない。', '4 月の恒久的な再開時期は本文のどこにも書かれておらず、直後の「地下でのサインアウトと 24 時間以内の返却」という運用ルールの前置きにもならない。', '正解。'] },
      /* 2026-09-03（監査指摘）: (C) has been chosen は現在完了受動としてそのまま成立していた
         （文書のどこにも過去の時点副詞が無く、単純過去を強制する材料が無いため）。副次的に (A) is も
         「日程はこの部署ではなく施工業者が決めるものだ」という現行の取り決めを述べる現在受動として
         読めてしまう疑いがあった。論点を宣言どおりの「態」に戻すため、(A)(C) を数の一致だけで
         閉じる形に差し替えた（(A) are・(C) being、(D) were はそのまま）。
         第二の正解を閉じる修正なので id を新規採番（no は 134 のまま）。

         2026-09-03（レビューの指摘・tag/topics のみの是正）：4 本とも be 動詞（are/was/being/were）
         なので態（能動・受動）の対立が無く、実際に切れているのは主述の一致（which＝the timing が単数）
         と定形／非定形（being は非定形）だけ。上のコメントが書いた「論点を宣言どおりの『態』に戻す」は
         実データと食い違っており、態は戻っていない。tag を「態」→「動詞の形」、topics を
         ['voice']→['vform']（topics.js の vform＝「時制・態・主述の一致」）に付け替えた。
         choices・answer・exp・why・stem は変えていない。 */
      { id: 'v5q134r', tag: '動詞の形', t: ['vform'],
        c: ['are', 'was', 'being', 'were'],
        a: 1,
        e: '主語 which（＝ the timing）は単数。文全体が過去の決定を振り返る内容なので過去形の受動態。',
        w: ['現在形の受動態だが複数形。関係代名詞 which（＝ the timing、単数）と一致しない。', '正解。', '現在分詞。定形の動詞ではないため、この関係代名詞節の述語になれない。', '複数形は主語と一致しない。'] },
    ],
  }),

  p6({
    n: [135, 136, 137, 138], lv: 5, t: ['cohesion', 'p6ins'],
    doc: {
      label: 'Article',
      title: 'A Print Shop That Stopped Printing Business Cards',
      body: [
        'When Innes Print dropped business cards from its price list last year, regular customers assumed the shop {{1}} closing.',
        'It was not. Owner Freya Lindqvist explains that cards had become the least profitable item on the price list. "We were printing a box of two hundred for the same margin as one large banner," she says. "{{2}} needed the space and the machine time far more."',
        '{{3}} The shop still finishes small jobs for existing customers who ask directly, but no longer advertises the service.',
        "Banners and large-format signage now account for most of the shop's revenue, {{4}} they made up less than a quarter of it three years ago.",
      ],
    },
    q: [
      { tag: '時制', t: ['ctense'],
        c: ['is', 'were', 'was', 'has been'],
        a: 2,
        e: '過去の一時点で顧客が思い込んだ内容を述べる過去進行形。assumed という過去の動詞と時制が一致する。',
        w: ['現在形。直後の一文 It was not. は「実際には閉店しようとしていなかった」という事実を過去形で述べており、regular customers assumed the shop ------- closing の空所もこれと同じ過去の時点の状態を指していなければ呼応しない。現在形 is ではこの過去の時点を表せない。', '複数扱いは the shop（単数）と一致しない。', '正解。', '現在完了では文脈と合わない。'] },
      /* 2026-09-03（レビュー指摘・第二の正解を閉じる修正）: exp の指示対象を a box of two hundred
         （名刺側）にしたことで、(B) These が「a box of two hundred＝two hundred [business cards]
         の省略」という容器＋中身の読みで two hundred cards（複数）を指す先行詞として開いていた。
         直前の地の文も cards had become the least profitable item と cards を複数形で主題として
         既に提示しており、"These needed the space and the machine time far more." は
         「（名刺の）こちらのほうが場所も機械の時間もはるかに食っていた」と読めて、
         正解 That の命題と同じ内容になってしまう。単数の指示詞に寄せると再び exp との整合が壊れるため、
         (B) を単数・複数のどちらの読みにも依存しない Neither に差し替えた。
         第二の正解を閉じる修正なので id を新規採番（no は 136 のまま）。stem・answer・exp・topics・
         level は変えていない。 */
      { id: 'v5q136r', tag: '結束性', t: ['cohesion', 'pron'],
        c: ['None', 'Neither', 'Both', 'That'],
        a: 3,
        e: '直前の a box of two hundred（名刺 200 枚分の印刷という、ひとまとまりの仕事を指す単数の名詞句）を指す指示代名詞。名刺が最も利益率の低い品目になっていたという記事の前提と整合させると、「名刺の仕事の方が、同じ利益率のバナー一枚と比べて場所も機械の時間もはるかに必要だった」という意味になる。',
        w: ['「どれも〜ない」では文意が逆になる。', '「（2 つのうち）どちらも〜ない」。直前の一文は名刺 200 枚の箱とバナー一枚が同じ利益率だったと述べ、続く一文はその一方（名刺側）が場所も機械の時間もはるかに必要だったと対比している。Neither はこの対比そのものを打ち消してしまい、直前の内容と矛盾する。', 'Both は名刺とバナーの両方を指すことになるが、述語は far more と比較級で、比較の相手が消えてしまう。', '正解。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'The shop removed cards from its website and window display.',
          "Freya plans to open a second location next spring.",
          'Card prices had not changed at the shop in over a decade.',
          "The shop renewed its retail lease for another five years.",
        ],
        a: 0,
        e: '直後が「既存客から直接頼まれれば小口の仕事は今も対応するが、もう宣伝はしていない」と続く。名刺の宣伝をやめたという前置きが自然につながる。',
        w: ['正解。', '出店計画は「今も小口の仕事は受けるが宣伝はしていない」という直後の一文の前置きにならない。', '価格を据え置いていた期間の話は、名刺の扱いをどう変えたかを述べておらず、直後の「もう宣伝していない」につながらない。', '賃貸契約の更新は名刺の取り扱いと無関係で、直後の一文の前置きにならない。'] },
      { tag: '接続語', t: ['connect'],
        c: ['so that', 'because', 'whereas', 'provided that'],
        a: 2,
        e: '「今は売上の大半を占める」に対し「3 年前は 4 分の 1 未満だった」と対比している。',
        w: ['目的でもない。', '因果ではない。', '正解。', '条件でもない。'] },
    ],
  }),

  (() => { const u = p6({
    n: [139, 140, 141, 142], lv: 5, t: ['connect', 'ctense'],
    doc: {
      label: 'Memo',
      head: 'TO: All floor wardens\nFROM: Facilities & Safety\nDATE: 2 September\nSUBJECT: Fire drill — rescheduled',
      body: [
        "The quarterly fire drill, originally planned for the morning of 9 September, {{1}} to the afternoon of 11 September, because the building's alarm contractor cannot attend on the ninth.",
        'All staff must evacuate to the designated assembly point in the north car park within four minutes of the alarm sounding. {{2}}, at the last drill in June, response times exceeded six minutes, which the contractor flagged as a concern.',
        '{{3}} Wardens should walk their assigned corridors beforehand to confirm nothing is blocking a fire door.',
        'Anyone unable to attend for a medical reason should notify their warden in advance; a drill missed without notice {{4}} as a non-compliance in the annual safety audit.',
      ],
    },
    q: [
      /* 2026-09-02（第2巡・レビュー指摘）: (C) の has moved は「イベントが時間帯を移る」の能格用法で
         成立してしまい第二の正解の疑いがあったため、非定形 moving に差し替えた。この節には {{1}} 以外に
         定形動詞が無く、moving は文の述語動詞になれない。第二の正解を閉じる差し替えのため、この設問だけ
         id を新規採番する（no は 139 のまま）。p6() ヘルパーは id を n から自動生成し1問だけ上書きする
         手段がないため、このユニットを IIFE で包み構築後に id を書き換える。 */
      { tag: '態・時制', t: ['voice', 'ctense'],
        c: ['had been moved', 'will be moved', 'moving', 'is moved regularly'],
        a: 1,
        e: '空所には文の述語になれる定形動詞が要る。(C) は分詞で、この節には他に定形動詞が無いため述語になれない。(A) は過去完了だが、基準となる過去の時点が本文には無い。(D) は現在形で regularly と結びつき習慣的な反復を表すため、9日から11日への一回限りの変更を述べられない。正解の will be moved は未来の一回限りの予定を表す。',
        w: ['受動態だが過去完了。過去のある時点までに移動が完了していたことを示す形で、これから 11 日午後に変更されるという本文の時間関係と噛み合わない。基準となる過去の時点も本文には無い。', '正解。', '分詞。この節には定形動詞が他に無く、文の述語動詞になれない。',
            '受動態だが現在形。regularly が習慣的な反復を表す語で、本文の「アラーム点検業者が 9 日に来られないため」という今回限りの理由による変更（9 日から 11 日へ一度だけ動く）とは噛み合わない。'] },
      { tag: '接続語', t: ['connect'],
        c: ['Therefore', 'Otherwise', 'Similarly', 'In fact'],
        a: 3,
        e: '「4 分以内に避難」という規定に対し、「実際には前回 6 分を超えた」という事実を対比的に付け加えている。',
        w: ['因果関係ではない。', 'Otherwise は先行文が成り立たない場合を受ける語。ここは規定を述べたうえで実測値を突き付ける箇所で、否定の条件を導く語は入らない。', '並列でもない。', '正解。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'This time, two additional marshals will be posted on each floor.',
          'The alarm contractor has already been paid the full amount.',
          'The north car park will be repaved at the end of October.',
          'All fire extinguishers were inspected by an engineer in July.',
        ],
        a: 0,
        e: '直後が「担当者は事前に自分の担当区画を歩いて、避難扉をふさぐものがないか確認すること」と続く。今回の訓練での追加対策を示す文が自然につながる。',
        w: ['正解。', '業者への支払いが済んでいるかどうかは、直後の「担当区画を事前に歩いて避難扉の前を確認する」という指示を導かない。', '駐車場の舗装工事は避難集合場所の話であって訓練の手順ではなく、直後の点検指示の前置きにならない。', '消火器の点検は 7 月に済んだ過去の話で、11 日の訓練に向けて今回何を足すかを述べていない。'] },
      { tag: '態', t: ['voice'],
        c: ['will be recorded', 'is recording', 'having been recorded', 'has been recording'],
        a: 0,
        e: '無届けで欠席した訓練は「記録される」側なので受動態。今後の運用について述べているので未来形。',
        w: ['正解。',
            '能動の現在進行形。受動態でなければならず、また「いま実際に記録している最中」という一回性の進行動作を表すため、今後の運用方針を一般的に述べるこの文脈にも合わない。',
            '非定形。having been recorded は分詞（完了受動の分詞構文）であり、セミコロンの後ろに置かれる独立節の定形述語にはなれない。',
            '能動の現在完了進行形。受動態でなければならず、過去から継続する動作を表すため、今後の運用方針を述べるこの文脈に合わない。'] },
    ],
  }); u.questions[0].id = 'v5q139r'; return u; })(),

  p6({
    n: [143, 144, 145, 146], lv: 5, t: ['cohesion', 'connect'],
    doc: {
      label: 'Web page',
      title: 'Bellcross Engineering — Laptop Loan Policy Update',
      body: [
        "From 1 November, loaned laptops {{1}} to IT within five working days of an employee's last day, rather than the previous ten.",
        'The change follows an internal review that found devices sitting unreturned for months created both a security risk and a cost, since a laptop cannot be safely reissued {{2}} it has first been wiped and re-imaged.',
        '{{3}} Line managers are now responsible for confirming return of the device as part of the standard offboarding checklist, rather than leaving it to IT to chase.',
        "Devices not returned within the new window will be reported to payroll, and the replacement cost {{4}} from the final salary payment where the contract permits.",
      ],
    },
    q: [
      { tag: '態', t: ['voice'],
        c: ['must return', 'must be returned', 'returning', 'may be returned'],
        a: 1,
        e: '空所の後ろは to IT で、目的語が無い。「返却する」の意の return は目的語を取る他動詞なので、返却される側の loaned laptops を主語に立てるには受動態にする。',
        w: ['能動態。「（人が）返却する」の意の return は他動詞で目的語（返す物）を要求するが、空所の後ろは to IT だけで目的語が無い。目的語を伴わないこの位置の return は自動詞（自ら戻る）の読みになり、同じ文書の末尾にある Devices not returned within the new window ... のように「返却する」を他動詞・受動形で表す用法と食い違う。',
            '正解。',
            '現在分詞。定形の述語にならないため、主語 loaned laptops を受ける述語動詞が文中に一つも無くなり、文として成立しない。',
            'may は許可・可能性を表す助動詞。この文は「従来の 10 日ではなく 5 営業日以内」と期限を切り替える規定で、同じ文書の末尾は期限内に返却されなかった機器を給与部門に報告すると定めている。許可の助動詞では期限も罰則も課されないため、義務を表す助動詞でなければならない。'] },
      { tag: '接続語', t: ['conjprep'],
        c: ['because', 'despite', 'although', 'until'],
        a: 3,
        e: '「初期化・再設定が完了するまで再貸与できない」という時間的な条件。until が自然。',
        w: ['因果が逆になる。', '前置詞で、後ろの節と構造が合わない。', '逆接で文意が合わない。', '正解。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'The review also looked at printer and mobile-phone loans, but found no comparable issue.',
          "IT has agreed to email a reminder on an employee's last day as before.",
          'The policy therefore shifts primary responsibility for all future device returns away from IT.',
          'A new inventory system for tracking loaned laptops is due to launch in early December.',
        ],
        a: 2,
        e: '直後が「現場の管理者が、標準的な退職手続きの一環として返却確認の責任を持つ」と続く。責任の所在が IT から離れるという総括が自然につながる。',
        w: ['調査が他の貸出機器も見たが同様の問題は無かった、という補足で、直後の「現場の管理者が返却確認を担う」という責任の移し方を導かない。', 'IT が従来どおり最終日に督促メールを送ると述べており、返却確認を現場の管理者に移すという直後の一文と正面から食い違う。', '正解。', '在庫システムの新規導入は返却の責任を誰が負うかという論点と別で、直後の一文の前置きにならない。'] },
      { tag: '態', t: ['voice'],
        c: ['is deducting', 'will be deducted', 'having already been deducted', 'has been deducting'],
        a: 1,
        e: '交換費用は「差し引かれる」側なので受動態。今後の運用について述べているので未来形。',
        w: ['能動の現在進行形。受動態でなければならず、また deduct は他動詞で、差し引かれる側を主語にした自動詞的用法を持たない。the replacement cost が自ら差し引く動作を行う意味になってしまう。',
            '正解。',
            '非定形。having already been deducted は分詞（完了受動の分詞構文）であり、独立節の定形述語にはなれない。',
            '能動の現在完了進行形。受動態でなければならず、また deduct に自動詞的用法は無いため、the replacement cost が自ら継続的に差し引く動作を行う意味になり、主語と整合しない。'] },
    ],
  }),
];
