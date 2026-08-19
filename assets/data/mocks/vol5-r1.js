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
  questions: o.q.map((x, i) => ({
    id: `v5q${o.n[i]}`, no: o.n[i], stem: null, choices: x.c, answer: x.a,
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
      choices: ['depend', 'depending', 'have depended', 'depends'],
      answer: 3,
      exp: 'この文の主語は Whether the three depots can absorb the additional weekend deliveries という名詞節ひとつで、名詞節が主語に立つときの動詞は単数で受ける。空所の直前にある deliveries も、節の先頭近くにある depots も、名詞節の内側の語であって主語の中心ではない。したがって三人称単数現在の depends が入る。なお Whether 節を「〜であろうとなかろうと」の譲歩の副詞節と読むには or not や or … という対立項が要り、そう読んだ場合は主節に主語が無くなって文が成立しない。',
      why: ['複数主語を受ける形。The three depots depend largely on ... のように depots を主語に立てれば正しい英語になるが、この文で主語になっているのは Whether で始まる名詞節そのもので、depots はその節の内側の語にすぎない。名詞節が主語のときは単数で受ける。',
            '現在分詞・動名詞であって定形動詞ではない。これを入れると、定形の動詞は Whether 節の内側の can absorb だけになり、主節の述語動詞が無いまま文が終わる。',
            '現在完了だが複数主語を受ける形。名詞節の主語は単数で受けるため一致しない（同じ内容を現在完了で言うなら has depended となる）。',
            '正解。名詞節の主語を単数で受ける depends。'],
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

  p5(108, { t: ['quant'], lv: 4,
    s: '------- department is expected to submit its own contingency plan by Friday.',
    c: ['All', 'Few', 'Several', 'Every'],
    a: 3,
    e: 'department が単数形で動詞も is なので、単数名詞を取る every。',
    w: ['複数名詞を取る。', '複数名詞を取る。', '複数名詞を取る。', '正解。'],
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
    c: ['was identified', 'identified', 'has identified', 'identifying'],
    a: 0,
    e: 'by 以下に行為者が示され、空所の後ろに目的語がないので受動態。',
    w: ['正解。', '能動態。', '能動の現在完了。', '分詞。'],
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
      choices: ['formerly', 'previously', 'then', 'presently'],
      answer: 2,
      exp: '空所は限定詞 the と名詞 head of operations の間にある。副詞がこの区間に現れることはあるが、それは掛かる先の分詞・形容詞がそこにあるときに限られる（the formerly state-owned utility / the previously announced merger では、副詞は state-owned・announced に掛かっている）。本問の head of operations は裸の名詞で、副詞が掛かれる分詞も形容詞も無いため、ここに入れるのは名詞を直接修飾できる語＝限定用法の形容詞だけになる。4 つのうち限定用法の形容詞として辞書に立項されているのは then だけで、LDOCE は adjective の語義に「used when mentioning the person who had a particular job, title, or position at a time in the past」を立て、a visit to China by the then US President, Richard Nixon を挙げる（Wiktionary も attributive only と注記）。in 2019 と who left the company the following year が「その当時」の基準時を文中に固定しているので、then が指す時点も文中で決まる。',
      why: ['「以前は」。動詞や分詞・形容詞に掛かる副詞で、名詞句の中に入る場合も修飾できるのは分詞・形容詞のほう（the formerly state-owned utility / a formerly derelict site）。head of operations は裸の名詞なので掛かる先が無い。同じ内容を限定詞の後ろで言うなら、副詞ではなく形容詞 former を使って the former head of operations とする。',
            '「（基準となる時点より）前に」。これも動詞・分詞に掛かる副詞で（had previously worked there）、名詞句の中に入れるのは分詞・形容詞を伴うときだけ（the previously announced merger は announced に掛かっている）。head of operations は裸の名詞なので掛かる先が無い。',
            '正解。the then head of operations「当時の運営責任者」。then には副詞のほかに限定用法だけの形容詞があり、役職を表す名詞の前に置いて「その当時その職にあった」を表す（the then US President / the then chairman / the then head of ...）。',
            '「まもなく」とも「現在」とも読む副詞だが、掛かる先はどちらの語義でも動詞・分詞（will presently be announced / the presently serving chairman）。裸の名詞を直接修飾する用法は持たないので、「現在」の意味で読んでも、分詞も形容詞も無いこの位置には置けない。'],
      ja: '現在どの営業所でも使われているシフト管理システムは、当時の運営責任者の強い求めによって 2019 年に導入された。その責任者は翌年に会社を去っている。',
      topics: ['adv'],
    }] },

  p5(115, { t: ['subj'], lv: 5,
    s: 'It is essential that every visitor ------- a badge at all times while on site.',
    c: ['wear', 'wears', 'wearing', 'to wear'],
    a: 0,
    e: 'essential that 節中は原形（仮定法現在）。',
    w: ['正解。', '三単現の s は不可。', '分詞。', '不定詞。'],
    ja: '敷地内にいる間、すべての来訪者は常にバッジを着用することが不可欠である。' }),

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
    w: ['複数形。', '倒置されていない形。', '正解。', '強調構文の形とは一致しない。'],
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
    ja: '検査官は、その配線が現行の安全基準を満たすのに十分であると判断した。' }),

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

  p5(125, { t: ['ptcp'], lv: 5,
    s: 'With the access road ------- for repaving, deliveries are being rerouted through the rear gate.',
    c: ['closed', 'closing', 'close', 'to close'],
    a: 0,
    e: '付帯状況の with + O + 分詞。道路は「閉鎖される」側なので過去分詞。',
    w: ['正解。', '現在分詞。道路が自ら閉じることになる。', '形容詞・副詞。', '不定詞。'],
    ja: 'アクセス道路が再舗装のため閉鎖されているため、配送は裏門経由に振り替えられている。' }),

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
    c: ['was reissued', 'reissues', 'has reissued', 'reissuing'],
    a: 0,
    e: '請求書は「再発行される」側なので受動態。過去の一時点までの経緯を述べているので過去形。',
    w: ['正解。', '能動の現在形。', '能動の現在完了。', '分詞。'],
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
      choices: ['discrete', 'discreet', 'discreetly', 'discreteness'],
      answer: 0,
      exp: 'discrete「別個の、互いに重ならない」。後半の「1 件の苦情が複数の区分に数えられることはない」が、区分どうしが重複しないという discrete の語義をそのまま言い換えている。同音の discreet との識別が要点。',
      why: ['正解。discrete「別個の、独立した」。discrete categories / discrete units のように、境界が分かれていて重ならないものを表す。',
            '「（秘密を漏らさないよう）慎重な、控えめな」。a discreet inquiry / be discreet about ... のように、人の言動や振る舞いの慎重さを述べる語で、区分どうしの重なりの有無は表せない。discrete と同音（/dɪˈskriːt/）だが語義は重ならず、綴りの取り違えを突いた選択肢。',
            '副詞「慎重に、目立たないように」。副詞は名詞 categories を修飾できないため、数詞と名詞の間には入らない。',
            '名詞「個別であること、離散性」。空所は名詞 categories を修飾する形容詞の位置で、名詞を並べても five discreteness categories という複合語は成立しない。'],
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
      { tag: '態・時制', t: ['ctense', 'voice'],
        c: ['relocates', 'relocated', 'has relocated', 'will be relocated'],
        a: 3,
        e: '書庫は「移される」側なので受動態。3 月 18 日の週という未来の予定なので未来形。',
        w: ['能動の現在形。', '過去形。', '能動の現在完了。', '正解。'] },
      { tag: '接続語', t: ['connect'],
        c: ['For instance', 'Otherwise', 'Consequently', 'Similarly'],
        a: 2,
        e: '「全ファイルが地下に移される」→「その結果、旧ファイルが必要な職員は前日までに申請すること」という因果関係。',
        w: ['例示ではない。', '「さもなければ」では文意が変わる。', '正解。', '並列でもない。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'All files older than ten years will be digitised this year.',
          'The elevator will be out of service that week.',
          'The archive room will reopen permanently in April.',
          'Access to the basement will be restricted to core working hours.',
        ],
        a: 3,
        e: '直後が「地下入口にサインアウト表を置き、24 時間以内に返却」という新たな運用ルールの説明。地下への立ち入りに制約を設けるという前置きが自然につながる。',
        w: ['デジタル化の話は文脈から外れる。', 'エレベーターの話は次文につながらない。', '「一時移転」という前提と矛盾する恒久的な話。', '正解。'] },
      { tag: '態', t: ['voice'],
        c: ['is', 'was', 'has been', 'were'],
        a: 1,
        e: '主語 the timing は単数。文全体が過去の決定を振り返る内容なので過去形の受動態。',
        w: ['現在形では時制が合わない。', '正解。', '現在完了では文脈と合わない。', '複数形は主語と一致しない。'] },
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
        w: ['現在形では過去の思い込みと時制が合わない。', '複数扱いは the shop（単数）と一致しない。', '正解。', '現在完了では文脈と合わない。'] },
      { tag: '結束性', t: ['cohesion', 'pron'],
        c: ['None', 'These', 'Both', 'That'],
        a: 3,
        e: '直前の one large banner（単数）を指す指示代名詞。「その（大判バナーの仕事の）方が場所も機械の時間もはるかに必要だった」という意味。',
        w: ['「どれも〜ない」では文意が逆になる。', '複数形は単数の banner と一致しない。', '「両方とも」では文意が変わる。', '正解。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          "Freya plans to open a second location next year.",
          'The shop removed cards from its website and window display.',
          'Card prices had not changed in over a decade.',
          "The shop's lease was renewed for five years.",
        ],
        a: 1,
        e: '直後が「既存客から直接頼まれれば小口の仕事は今も対応するが、もう宣伝はしていない」と続く。名刺の宣伝をやめたという前置きが自然につながる。',
        w: ['2 号店の計画は次文とつながらない。', '正解。', '価格の据え置き期間は文脈から外れる。', '賃貸契約の更新は無関係。'] },
      { tag: '接続語', t: ['connect'],
        c: ['so that', 'because', 'whereas', 'provided that'],
        a: 2,
        e: '「今は売上の大半を占める」に対し「3 年前は 4 分の 1 未満だった」と対比している。',
        w: ['目的でもない。', '因果ではない。', '正解。', '条件でもない。'] },
    ],
  }),

  p6({
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
      { tag: '態・時制', t: ['voice', 'ctense'],
        c: ['will move', 'will be moved', 'has moved', 'moves'],
        a: 1,
        e: '訓練日程は「変更される」側なので受動態。今後の予定なので未来形。',
        w: ['能動態。', '正解。', '能動の現在完了。', '能動の現在形。'] },
      { tag: '接続語', t: ['connect'],
        c: ['Therefore', 'Otherwise', 'Similarly', 'In fact'],
        a: 3,
        e: '「4 分以内に避難」という規定に対し、「実際には前回 6 分を超えた」という事実を対比的に付け加えている。',
        w: ['因果関係ではない。', '「さもなければ」では文意が変わる。', '並列でもない。', '正解。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'This time, two additional marshals will be posted on each floor.',
          'The alarm contractor has already been paid in full.',
          'The car park will be repaved next month.',
          'All fire extinguishers were inspected in July.',
        ],
        a: 0,
        e: '直後が「担当者は事前に自分の担当区画を歩いて、避難扉をふさぐものがないか確認すること」と続く。今回の訓練での追加対策を示す文が自然につながる。',
        w: ['正解。', '契約業者への支払いは次文とつながらない。', '駐車場の舗装は無関係。', '消火器の点検は 7 月の話で、今回の対策ではない。'] },
      { tag: '態', t: ['voice'],
        c: ['will be recorded', 'records', 'recording', 'has recorded'],
        a: 0,
        e: '無届けで欠席した訓練は「記録される」側なので受動態。今後の運用について述べているので未来形。',
        w: ['正解。', '能動の現在形。', '分詞。', '能動の現在完了。'] },
    ],
  }),

  p6({
    n: [143, 144, 145, 146], lv: 5, t: ['cohesion', 'connect'],
    doc: {
      label: 'Web page',
      title: 'Bellcross Engineering — Laptop Loan Policy Update',
      body: [
        "From 1 November, loaned laptops {{1}} returned to IT within five working days of an employee's last day, rather than the previous ten.",
        'The change follows an internal review that found devices sitting unreturned for months created both a security risk and a cost, since a laptop cannot be safely reissued {{2}} it has first been wiped and re-imaged.',
        '{{3}} Line managers are now responsible for confirming return of the device as part of the standard offboarding checklist, rather than leaving it to IT to chase.',
        "Devices not returned within the new window will be reported to payroll, and the replacement cost {{4}} from the final salary payment where the contract permits.",
      ],
    },
    q: [
      { tag: '態', t: ['voice'],
        c: ['must return', 'must be returned', 'returning', 'have returned'],
        a: 1,
        e: 'ノートパソコンは「返却される」側なので受動態。',
        w: ['能動態。', '正解。', '分詞。', '能動の現在完了。'] },
      { tag: '接続語', t: ['conjprep'],
        c: ['until', 'despite', 'although', 'because'],
        a: 0,
        e: '「初期化・再設定が完了するまで再貸与できない」という時間的な条件。until が自然。',
        w: ['正解。', '前置詞で、後ろの節と構造が合わない。', '逆接で文意が合わない。', '因果が逆になる。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'The review also looked at printer and mobile-phone loans, but found no comparable issue.',
          "IT has agreed to email a reminder on an employee's last day as before.",
          'The policy therefore shifts primary responsibility away from IT.',
          'A new inventory system will launch in December.',
        ],
        a: 2,
        e: '直後が「現場の管理者が、標準的な退職手続きの一環として返却確認の責任を持つ」と続く。責任の所在が IT から離れるという総括が自然につながる。',
        w: ['プリンターや携帯電話の調査結果は文脈から外れる。', '「これまでどおり IT が対応する」では次文の責任移管と矛盾する。', '正解。', '在庫システムの導入は無関係。'] },
      { tag: '態', t: ['voice'],
        c: ['will be deducted', 'deducts', 'deducting', 'has deducted'],
        a: 0,
        e: '交換費用は「差し引かれる」側なので受動態。今後の運用について述べているので未来形。',
        w: ['正解。', '能動の現在形。', '分詞。', '能動の現在完了。'] },
    ],
  }),
];
