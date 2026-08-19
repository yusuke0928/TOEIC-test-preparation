/* =============================================================
   drills/vocab4.js — 語彙・語法（補充）
   紛らわしい語 / ビジネス頻出語 / 句動詞 の増補分
   既存は vocab2.js。level は 3〜5 に分散（900 帯の目盛りとして機能させる）。
   ============================================================= */

const q = (id, o) => ({
  id: `u-${id}`, part: 5, kind: 'single', topics: o.t, level: o.lv ?? 4,
  questions: [{
    id, stem: o.s, choices: o.c, answer: o.a,
    exp: o.e, why: o.w, ja: o.ja, vocab: o.v, topics: o.t,
  }],
});

export const UNITS = [

  /* ══ 紛らわしい語 ═══════════════════════════════════ */
  q('confuse-21', {
    t: ['confuse'], lv: 4,
    s: 'Analysts say a rate hike is ------- , possibly as soon as the central bank\'s next meeting.',
    c: ['imminent', 'eminent', 'prominent', 'dominant'],
    a: 0,
    e: 'imminent「差し迫った、間近な」。出来事がまもなく起こることを述べる語で、possibly as soon as ... next meeting という時期の見積もりを受けられるのはこれだけ。残る 3 語は人・物の傑出ぶりや勢力の強さを評価する語で、出来事がいつ起こるかという時間関係を表さない。',
    w: ['正解。「差し迫った、間近な」。出来事が起こるまでの時間の短さを表す。',
        '「（人・資質が）著名な、卓越した」。傑出ぶりを評価する語で、出来事の時期は表さない。as soon as ... next meeting という時期の限定を受けられない。',
        '「目立つ、有力な」。位置的・社会的な目立ちやすさを表す語で、出来事の時期は表さない。',
        '「（他を圧して）支配的な」。勢力の優劣を表す語で、出来事の時期は表さない。'],
    ja: 'アナリストによれば利上げは差し迫っており、早ければ次回の中央銀行会合で決定される可能性がある。',
    v: [['imminent', '差し迫った'], ['rate hike', '利上げ']],
  }),

  q('confuse-22', {
    t: ['confuse'], lv: 4,
    s: 'Please be ------- about the pending layoffs until the official announcement is made next week.',
    c: ['discreet', 'discrete', 'indiscreet', 'discreetly'],
    a: 0,
    e: 'discreet「思慮深く、目立たないように振る舞う」。正式発表前の情報を扱う慎重さを求める文脈。discrete「別個の、分離した」は綴りが似ているが意味が異なる。be 動詞の補語には形容詞が必要で、副詞 discreetly は入らない。',
    w: ['正解。「（言動が）慎重な、控えめな」。',
        '「別個の、互いに分かれた」。数量や単位が連続せず区切られていることを述べる語で、人の振る舞いを表す be discrete about ... という語型を持たない。',
        '「無分別な、軽率な」。discreet とは逆の意味。',
        '副詞。be 動詞の補語は形容詞が必要。'],
    ja: '正式発表が来週行われるまで、予定されている人員削減については慎重に振る舞ってください。',
    v: [['discreet', '慎重な、控えめな'], ['layoff', '人員削減']],
  }),

  /* id は confuse-23r（stem を差し替えたため新規採番）。旧 stem
     The two software packages are ------- , each handling ... では、complimentary を
     「無料の」（LDOCE・Cambridge の第 1 語義）で取ると「その 2 本は無料である」という
     正しい文がそのまま成立し、後続の分詞句は付加情報として読めてしまうため第二の正解だった。
     Rather than competing with each other という対比の枠を足し、空所に「2 者の関係」を
     表す語しか入らない形に閉じてある。 */
  q('confuse-23r', {
    t: ['confuse'], lv: 5,
    s: 'Rather than competing with each other, the two software packages are ------- , each handling tasks the other was not designed for.',
    c: ['complementary', 'complimentary', 'compliment', 'complement'],
    a: 0,
    e: 'complementary「互いに補い合う」。rather than competing with each other という対比の枠が、空所に「2 者がどういう関係にあるか」を表す語を要求する。complementary は 2 つのものが互いの足りない部分を埋める関係を表す語で、「相手が対応していない作業を処理する」という後続の説明とも一致する。',
    w: ['正解。「補完的な、互いに補い合う」。A is complementary to B の形で 2 者の関係を表す。',
        '「無料の」「称賛の」。LDOCE が立てる語義はこの 2 つだけで、前者は買い手に対する価格、後者は褒める側の態度を表し、どちらも 2 者の間の関係を述べない。無料の製品どうしが競合することはいくらでもあるので、無料であることは competing with each other の代わりに立つ選択肢にならず、each handling tasks the other was not designed for という後続の説明とも結び付かない。',
        '名詞・動詞「称賛（する）」。名詞なら可算で冠詞が要り、動詞と取れば are compliment という語形自体が成り立たない。',
        '名詞・動詞「補完物（を補う）」。名詞なら可算で冠詞が要り、動詞と取れば are complement という語形自体が成り立たない。'],
    ja: 'その 2 つのソフトウェアパッケージは互いに競合するのではなく補完し合う関係にあり、それぞれが相手には対応していない作業を処理する。',
    v: [['complementary', '互いに補い合う'], ['be designed for', '〜向けに設計されている']],
  }),

  q('confuse-24', {
    t: ['confuse'], lv: 5,
    s: 'Before responding to the lawsuit, the board consulted ------- with extensive experience in employment law.',
    c: ['council', 'counsel', 'consul', 'console'],
    a: 1,
    e: 'counsel は「（法律上の）助言、顧問弁護士」の意味では不可算で、consult counsel / retain counsel のように冠詞なしで目的語に置ける。残る 3 語はいずれも可算名詞で、単数形を冠詞なしに他動詞の目的語には置けない。',
    w: ['「議会、評議会」。可算名詞なので単数形を冠詞なしで目的語に置けない。the council と冠詞を補っても、合議体を指す語なので extensive experience in employment law という個人の職歴の記述と噛み合わない。',
        '正解。「（専門的な）助言、顧問弁護士」。不可算扱いで consult counsel / retain counsel と冠詞なしで使う。',
        '「領事」。可算名詞で冠詞が要り、職務は外交・在外自国民の保護であって労働法の助言ではない。',
        '名詞なら「操作盤」で可算のため冠詞が要り、動詞「慰める」と取れば consulted の目的語にならない。'],
    ja: '訴訟に対応する前に、取締役会は労働法に豊富な経験を持つ顧問弁護士に相談した。',
    v: [['counsel', '助言、顧問弁護士'], ['employment law', '労働法']],
  }),

  q('confuse-25', {
    t: ['confuse'], lv: 3,
    s: 'The delivery van remained ------- behind a double-parked car for nearly an hour, unable to pull out of the loading zone.',
    c: ['stationary', 'stationery', 'station', 'stationed'],
    a: 0,
    e: 'stationary「静止した、動かない」。二重駐車の車に阻まれて動けなかったという状況に合う。stationery「文房具」は発音が同じだが意味が全く異なり、stationed「配置された」は任務としての配置を表す語で、通行を妨げられて動けない状況には合わない。',
    w: ['正解。「静止した、動かない」。',
        '「文房具」。発音は同じだが意味が異なる。',
        '名詞「駅、局」。形容詞として使えない。',
        '「（任務として）配置された」。通行を妨げられて動けない状況には合わない。'],
    ja: '配達車は二重駐車の車に阻まれ、荷降ろし場所から出られないままほぼ 1 時間動かずにいた。',
    v: [['stationary', '静止した'], ['double-parked', '二重駐車の']],
  }),

  /* id は confuse-26r（stem を全面差し替えしたため新規採番）。旧 stem は
     The new thermostat is extremely ------- , adjusting the room temperature ... で
     sensitive「（機器が）敏感な」を問うていたが、sensible には
     「liable to external impression; easily affected; sensitive」の語義があり、
     Wiktionary はその例文に a sensible thermometer を挙げている（Collins も
     "capable of receiving sensation; sensitive" を立項）。機器の反応性を問う限り
     sensible は正解と同義になり stem では閉じられないため、
     sensitive を「（情報が）機密の」の語義で問う形に替えた。 */
  q('confuse-26r', {
    t: ['confuse'], lv: 3,
    s: 'Files containing ------- customer records must be encrypted before they are transferred outside the company network.',
    c: ['sensible', 'sensory', 'sensitive', 'senseless'],
    a: 2,
    e: 'sensitive「（情報が）機密の、取り扱いに注意を要する」。sensitive information / sensitive data / sensitive records が定型で、暗号化を義務づける理由になるのはこの語義。',
    w: ['「分別のある、実用本位の」（a sensible decision / sensible shoes）のほか、LDOCE が formal と注記する「（変化が）感じ取れるほどの」（a sensible increase in temperature）、Collins が載せる「感覚を受け取れる、敏感な」がある。判断や選択の適切さ、変化の察知しやすさ、感覚器としての反応性を表す語ばかりで、情報が秘匿を要するという性質を表す語義はどの辞典にもない。',
        '「感覚の、知覚に関する」。視覚・聴覚など感覚器の働きにかかわることを表す語（sensory input）で、記録の機密性は表さない。',
        '正解。「機密の、取り扱いに注意を要する」。sensitive information / sensitive records で定型。',
        '「無意味な、無分別な」「意識を失った」。行為の無意味さ（senseless violence）や人の失神を表す語で、情報の機密性は表さない。'],
    ja: '機密の顧客記録を含むファイルは、社内ネットワークの外へ転送する前に暗号化しなければならない。',
    v: [['sensitive', '（情報が）機密の'], ['encrypt', '暗号化する']],
  }),

  q('confuse-27', {
    t: ['confuse'], lv: 4,
    s: 'The safety manual was rewritten in plain language so that it would be fully ------- to workers with no technical background.',
    c: ['comprehensive', 'apprehensive', 'comprehension', 'comprehensible'],
    a: 3,
    e: 'comprehensible「理解できる」。専門知識のない作業員にも「わかる」ように書き直したという文脈。comprehensive「包括的な」は範囲の広さを表す語で、通常 to 句を伴わず意味も異なる。',
    w: ['「包括的な、総合的な」。範囲の広さを表す語で、to 句を伴う用法ではなく意味も異なる。',
        '「懸念している、不安な」。',
        '名詞「理解（力）」。形容詞ではない。',
        '正解。「理解できる」。'],
    ja: '専門知識のない作業員にも十分理解できるよう、安全マニュアルは平易な言葉で書き直された。',
    v: [['comprehensible', '理解できる'], ['plain language', '平易な言葉']],
  }),

  q('confuse-28', {
    t: ['confuse'], lv: 4,
    s: 'Given the size of the discrepancy, the auditors conducted a review so ------- that not a single transaction from the past three years went unchecked.',
    c: ['exhausted', 'exhausting', 'exhaustible', 'exhaustive'],
    a: 3,
    e: 'exhaustive「徹底的な、網羅的な」。so ... that の帰結が「1 件の取引も未確認のまま残らなかった」である以上、空所には網羅性を表す語しか入らない。exhausting「疲れさせる」では、疲労の度合いから確認漏れがゼロだったという帰結は導けない。exhausted は人の疲労か資源の枯渇を表す語で、調査の徹底ぶりを述べる用法を持たない。',
    w: ['「（人が）疲れ果てた」、また「（資源が）使い尽くされた」（exhausted reserves）。疲労と枯渇を表す語で、a review を修飾して調査の徹底ぶりを述べる用法がない。',
        '「（人を）疲れさせる」。疲労の度合いを表す語で、確認漏れがないという帰結は導けない。',
        '「使い尽くせる、枯渇しうる」。監査の徹底性を表す語ではない。',
        '正解。「徹底的な、網羅的な」。'],
    ja: '食い違いの大きさを踏まえ、監査人は過去 3 年間の取引が 1 件も未確認のまま残らないほど徹底的な調査を行った。',
    v: [['exhaustive', '徹底的な'], ['discrepancy', '食い違い']],
  }),

  /* id は confuse-29r（選択肢を差し替えたため新規採番）。旧選択肢 creditable は
     Merriam-Webster が第 1 語義に "worthy of belief" を注記なしで載せており、
     credible と同義に読めて第二の正解になりうるため外した。 */
  q('confuse-29r', {
    t: ['confuse'], lv: 5,
    s: 'Without any supporting documentation, the contractor\'s explanation for the missed deadline did not seem ------- to the client.',
    c: ['creditworthy', 'credulous', 'incredible', 'credible'],
    a: 3,
    e: 'credible「（話・説明が）信じられる、信憑性がある」。seem の補語として説明そのものの真偽を評価できるのはこの語。credulous は信じる側の人の性質、creditworthy は借り手の返済能力を表す語で、どちらも explanation を主語に取れない。',
    w: ['「信用力のある」。LDOCE・Cambridge・Collins・Merriam-Webster はいずれも「借りた金を返せると見込まれる（人・企業）」という金融の語義しか載せておらず、説明や証言の真偽を評価する語ではない。',
        '「（人が）すぐ信じる、騙されやすい」。主要辞典が載せるのは信じる側の人の性質を表す語義のみで、信じられる対象を評価する語ではない。仮に「たやすく信じられてしまう」という古い用法で取っても「信憑性がある」の意にはならず、裏付け資料がないという前半とつながらない。',
        '「信じがたい」。did not seem incredible は「信じがたいようには思えなかった」＝むしろ信用されたという逆の内容になり、裏付け資料がないという前半と矛盾する。',
        '正解。「信じられる、信憑性がある」。'],
    ja: '裏付けとなる資料が何もなかったため、納期遅延に関する請負業者の説明は依頼主にとって信憑性があるようには思えなかった。',
    v: [['credible', '信憑性がある'], ['creditworthy', '信用力のある']],
  }),

  /* ══ ビジネス頻出語 ═════════════════════════════════ */
  q('biz-21', {
    t: ['biz'], lv: 3,
    s: 'The facilities team will ------- the new office furniture directly from the manufacturer to avoid distributor markups.',
    c: ['procure', 'propose', 'produce', 'promote'],
    a: 0,
    e: 'procure「（努力して）調達する、入手する」。代理店を通さずメーカーから直接入手するという文脈に合う。propose「提案する」は計画や案を目的語に取る語で、家具そのものを目的語にして「メーカーから直接」という入手経路を述べる文にはならない。',
    w: ['正解。「調達する」。',
        '「提案する」。計画や案を目的語に取る語で、仕入れ行為は表さない。',
        '「生産する」。自社で作る意味になり、メーカーから入手する文脈と矛盾する。',
        '「販促する、昇進させる」。宣伝の対象や昇進する人を目的語に取る語で、directly from the manufacturer という入手経路を伴って仕入れる意味にはならず、代理店の上乗せを避けるという購買上の目的ともつながらない。'],
    ja: '施設管理チームは、代理店の上乗せ料金を避けるため、新しいオフィス家具をメーカーから直接調達する。',
    v: [['procure', '調達する'], ['markup', '上乗せ料金']],
  }),

  q('biz-22', {
    t: ['biz'], lv: 3,
    s: 'Guests who cancel their reservation less than 48 hours in advance will ------- a fee equal to one night\'s stay.',
    c: ['inquire', 'insert', 'incur', 'inspire'],
    a: 2,
    e: 'incur「（費用・損害・罰則などを）負う、被る」。自らの行為の結果として不利益が生じることを表す語で、キャンセルの結果として料金が発生する文脈に合う。',
    w: ['「尋ねる、問い合わせる」。inquire about ... / inquire whether ... の形を取り、a fee のような金額を直接目的語にはできない。',
        '「（物・語句を）差し込む、挿入する」。挿入される対象を目的語に取る語で、料金が発生することは表せない。',
        '正解。「（費用などを）負う」。incur a fee / incur a penalty / incur costs。',
        '「（人を）奮い立たせる、（感情・着想を）呼び起こす」。目的語になるのは人や感情で、宿泊客が料金を負担するという結果は表せない。'],
    ja: '48 時間を切ってから予約をキャンセルした宿泊客には、1 泊分に相当する料金が発生する。',
    v: [['incur', '（費用などを）負う'], ['in advance', '事前に']],
  }),

  /* id は biz-23r（選択肢を差し替えたため新規採番）。旧選択肢 valuable は
     LDOCE 第 1 語義「worth a lot of money」がそのまま事業に使え
     （Longman Business Dictionary も business 文脈の例を載せる）、
     「補助金が切れて事業モデルが価値あるものに見えなくなった」という
     正しい文が成立して第二の正解だった。stem では閉じられないため外した。 */
  q('biz-23r', {
    t: ['biz'], lv: 3,
    s: 'The startup\'s business model no longer looked ------- once the government subsidy was withdrawn.',
    c: ['viable', 'veritable', 'variable', 'visible'],
    a: 0,
    e: 'viable「（事業などが）成り立つ、存続可能な」。補助金という外部の支えがなくなった後で事業が自力では立ち行かなくなったという文脈で、looked の補語として事業の存続可能性を述べられるのはこの語。',
    w: ['正解。「成り立つ、存続可能な」。a viable business model / commercially viable。',
        '「まさしくの、〜も同然の」。a veritable mountain of paperwork のように直後の名詞を強めるための語で、LDOCE と Oxford は [only before noun]、Cambridge は [before noun] と、限定用法専用であることを明示する。「本物の、真の」という叙述に向きそうな語義もあるが、Collins は rare、Random House は obsolete と注記する古い用法で、その例文も veritable proof と名詞の前に置く形しかない。looked の補語には置けない。',
        '「変動しやすい、一定しない」。variable costs / variable rates / variable quality のように値や質が揺れうるものに付く語で、事業が立ち行くかどうかという成否の評価には使わない。',
        '「目に見える、存在が認識できる」。視認性や表面上の目立ちやすさを表す語で、事業が採算的に立ち行くかどうかは表さない。'],
    ja: '政府の補助金が打ち切られると、そのスタートアップの事業モデルはもはや成り立たないように見えた。',
    v: [['viable', '成り立つ、存続可能な'], ['subsidy', '補助金']],
  }),

  q('biz-24', {
    t: ['biz'], lv: 4,
    s: 'Switching to a remote-first policy cut the firm\'s ------- by nearly a third, mainly through reduced office rent.',
    c: ['output', 'overhead', 'outcome', 'outlet'],
    a: 1,
    e: 'overhead「（家賃・光熱費などの）経常経費」。オフィス賃料の削減を通じて経費が減ったという説明と一致する。output「生産量、産出」は事業の産出物を表す語で、賃料削減によって減る対象ではない。',
    w: ['「生産量、産出」。賃料削減によって減る対象ではない。',
        '正解。「経常経費」。',
        '「結果、成果」。賃料削減によって減る対象ではない。',
        '「出口」「（小売の）直営店」。場所を指す可算名詞で、by nearly a third と量的に削減される費目を表す用法がなく、単数形のまま cut の目的語にも置けない。'],
    ja: 'リモートワーク優先の方針への切り替えにより、主にオフィス賃料の削減を通じて、その会社の経常経費はほぼ 3 分の 1 減った。',
    v: [['overhead', '経常経費'], ['remote-first', 'リモートワークを基本とする']],
  }),

  q('biz-25', {
    t: ['biz'], lv: 4,
    s: 'The minor nature of the complaint does not ------- the expense of a full investigation by the compliance department.',
    c: ['assure', 'ensure', 'warrant', 'insure'],
    a: 2,
    e: 'warrant「（〜するに）値する、正当化する」。warrant the expense で「その費用に見合う」という定型。assure / ensure はどちらも「（結果を）確実にする」で、費用を目的語に取ると「費用を確実にする」という意味不明の文になる。insure は「保険をかける」。',
    w: ['「（人に）保証する、安心させる」。費用を目的語に取って「費用に見合う」という意味にはならない。',
        '「確実にする」。結果を確定させる語で、費用を目的語に取ると文意が成立しない。',
        '正解。「（〜するに）値する、正当化する」。warrant the expense で定型。',
        '「保険をかける」。'],
    ja: 'その苦情は軽微であり、コンプライアンス部門による本格的な調査の費用に見合うものではない。',
    v: [['warrant', '（〜するに）値する'], ['compliance department', 'コンプライアンス部門']],
  }),

  /* id は biz-26r（stem に so that 節を足したため新規採番）。旧 stem
     ... to serve as ------- before approving the loan. では、融資審査の
     5 Cs（Character / Capacity / Capital / Collateral / Conditions）でいう capital
     ＝借り手の自己投下資本と読めば capital も通ってしまう。
     「不履行なら差し押さえて売却できるように」という担保に固有の目的を足して閉じた。 */
  q('biz-26r', {
    t: ['biz'], lv: 4,
    s: 'Before approving the loan, the bank required the equipment itself to serve as ------- so that the machinery could be seized and sold if the borrower defaulted.',
    c: ['collateral', 'capital', 'credential', 'currency'],
    a: 0,
    e: 'collateral「（融資の）担保」。債務不履行のときに貸し手が差し押さえて売却できるよう差し入れる財産を指す語で、so that 以下の目的と結び付くのはこれだけ。',
    w: ['正解。「担保」。不可算で serve as collateral / put up ... as collateral の形を取る。',
        '「資本（金）」。事業に投下された自己資金や生産設備そのものを指す語で、貸し手に差し押さえの権利を与える取り決めは表さない。so that 以下の「不履行なら差し押さえて売却できるように」という目的につながらない。',
        '「資格、信任状」。可算名詞なので単数形を冠詞なしで serve as の後ろに置けず、意味も能力や身分の証明であって差し入れる財産ではない。',
        '「通貨、流通貨幣」。交換手段として通用することを表す語で、担保として差し入れる財産は表さない。'],
    ja: '融資を承認する前に、銀行は、借り手が債務不履行に陥った場合に差し押さえて売却できるよう、機器そのものを担保とすることを求めた。',
    v: [['collateral', '担保'], ['default', '（債務の）不履行に陥る']],
  }),

  q('biz-27', {
    t: ['biz'], lv: 4,
    s: 'The law firm charges the client a flat monthly ------- regardless of how many hours are actually billed.',
    c: ['rebate', 'refund', 'referral', 'retainer'],
    a: 3,
    e: 'retainer「（継続的な役務のために前払いする）顧問料、着手金」。charge A B「A に B を請求する」の B に置けるのは請求される料金を表す名詞で、実働時間にかかわらず毎月定額という条件はこれに当たる。',
    w: ['「（購入後に一部が戻る）払い戻し金」。売り手が買い手に返す金を指す語なので、事務所が依頼人に請求する額にはならない。',
        '「返金」。受け取った金を返すもので、これも請求される額を表さない。',
        '「紹介（すること）」。行為を指す名詞で金額ではない。料金を言うなら a referral fee のように fee が要る。',
        '正解。「顧問料、着手金」。on retainer / pay a monthly retainer の形で使う。'],
    ja: 'その法律事務所は、実際に請求される時間数にかかわらず、依頼人に毎月定額の顧問料を課している。',
    v: [['retainer', '顧問料'], ['bill', '（費用を）請求する']],
  }),

  q('biz-28', {
    t: ['biz'], lv: 4,
    s: 'Employees affected by the restructuring will receive two weeks of ------- pay for every year of service.',
    c: ['seclusion', 'sequence', 'severance', 'severity'],
    a: 2,
    e: 'severance「（雇用関係の）断絶」から severance pay「退職手当、解雇手当」。勤続年数に応じて支払われる手当を表す定型の複合語で、名詞＋pay の形で手当の種類を言えるのはこの語だけ。',
    w: ['「隔離、人目を避けること」。場所的に離れていることを表す語で、pay と結んで手当の種類を表す複合語を作らない。',
        '「順序、一続き」。並び方や連続を表す語で、pay と結んで手当の種類を表す複合語を作らない。',
        '正解。「（雇用の）断絶」。severance pay で「退職手当」の定型。',
        '「深刻さ、厳しさ」。程度の甚だしさを表す語で、pay と結んで手当の種類を表す複合語を作らない。'],
    ja: '組織再編の影響を受ける従業員は、勤続年数 1 年につき 2 週間分の退職手当を受け取る。',
    v: [['severance pay', '退職手当'], ['restructuring', '組織再編']],
  }),

  q('biz-29', {
    t: ['biz'], lv: 4,
    s: 'The conglomerate agreed to ------- its underperforming retail division as part of the restructuring plan.',
    c: ['divest', 'devise', 'diverge', 'divulge'],
    a: 0,
    e: 'divest「（事業・資産を）売却して手放す」。divest a division / divest assets の形で、保有している事業を切り離すことを表す。',
    w: ['正解。「（事業などを）手放す」。',
        '「考案する」。計画・方法・仕組みなど頭の中で組み立てるものを目的語に取る語で、すでに保有している事業部門を手放す意味にはならない。',
        '「分岐する、（意見が）食い違う」。自動詞であり、its underperforming retail division という目的語を直接続けられない。',
        '「（秘密・情報を）漏らす」。目的語になるのは情報や内容で、事業部門を目的語にはできない。'],
    ja: 'そのコングロマリットは、再編計画の一環として業績不振の小売部門を手放すことに合意した。',
    v: [['divest', '（事業を）手放す'], ['underperforming', '業績不振の']],
  }),

  q('biz-30', {
    t: ['biz'], lv: 5,
    s: 'The city council voted to ------- an additional tax on properties left vacant for more than a year.',
    c: ['levitate', 'levy', 'leverage', 'elevate'],
    a: 1,
    e: 'levy「（税・罰金などを）課す」。levy a tax on ... の形で課税対象を on で示す定型で、新たな課税を導入するという議決の内容に合う。',
    w: ['「空中に浮く、浮かせる」。物体が宙に浮くことを表す語で、税や罰金を目的語に取る用法がない。',
        '正解。「（税などを）課す」。',
        '「（資産などを）最大限活用する」。新たな課税を導入する意味にはならない。',
        '「（程度を）高める」。既存のものを引き上げる意味で、新設の追加課税を導入する文脈には合わない。'],
    ja: '市議会は、1 年以上空き家となっている不動産に追加課税することを議決した。',
    v: [['levy', '（税を）課す'], ['vacant', '空き家の']],
  }),

  q('biz-31', {
    t: ['biz'], lv: 5,
    s: 'The tenant was two months in ------- when the landlord finally began eviction proceedings.',
    c: ['arrival', 'array', 'arrears', 'arraignment'],
    a: 2,
    e: 'in arrears「（支払いが）滞納して」。arrears は「未払いの金」を指す複数形専用の名詞で、two months in arrears のように遅れの期間を前に置いて滞納の状態を表す。',
    w: ['「到着」。到着という出来事を表す名詞で、in arrival という支払状態を表す成句を作らない。',
        '「配列、勢ぞろい」。in array は「隊列を組んで、整然と並んで」の意で、支払いの遅れは表さない。',
        '正解。in arrears で「（支払いが）滞納して」。',
        '「（刑事事件の）罪状認否」。起訴事実を被告人に確認する手続を指す語で、two months in ... と期間を伴って滞納状態を表す用法がない。'],
    ja: '家賃を 2 か月分滞納していたところで、大家はついに立ち退き手続きを開始した。',
    v: [['in arrears', '（支払いが）滞納して'], ['eviction', '立ち退き']],
  }),

  q('biz-32', {
    t: ['biz'], lv: 5,
    s: 'Under the service agreement, the contractor must ------- the client against any claims arising from on-site accidents.',
    c: ['indemnify', 'identify', 'intensify', 'itemize'],
    a: 0,
    e: 'indemnify A against B「A に B について補償する、A を B から保護する」。現場事故から生じる請求から依頼主を保護するという契約条項。identify「特定する」は綴りが似ているが意味が全く異なる。',
    w: ['正解。「補償する、保護する」。indemnify A against B の形。',
        '「特定する」。綴りは似ているが意味が異なる。',
        '「強化する」。',
        '「項目別に明細を示す」。'],
    ja: '業務委託契約に基づき、請負業者は現場事故から生じるいかなる請求からも依頼主を保護しなければならない。',
    v: [['indemnify', '補償する'], ['on-site accident', '現場事故']],
  }),

  /* ══ 句動詞 ═════════════════════════════════════════
     同じ動詞・異なる不変化詞の識別に軸を置く（既存 vocab2.js は逆に
     不変化詞を固定し動詞を選ばせる形式のため、ここでは形式を変えて補う）。 */
  q('phrasal-21', {
    t: ['phrasal'], lv: 4,
    s: 'Employees may carry ------- up to five unused vacation days into the following calendar year.',
    c: ['out', 'over', 'on', 'off'],
    a: 1,
    e: 'carry over「（未消化分などを）持ち越す、繰り越す」。carry over ... into the next year の形で、繰り越し先を into で示せるのはこの句動詞だけ。',
    w: ['「（計画・命令を）実行する」。実行される計画や指示を目的語に取る語で、日数を目的語にして into the following calendar year と翌年へ移す意味にはならない。',
        '正解。「持ち越す、繰り越す」。carry over ... into the following year。',
        '「（活動・会話を）続ける」。継続される活動を目的語に取る語で、未消化の日数を翌年へ移す動きは表さない。',
        '「（難しいことを）うまくやり遂げる」「（賞を）勝ち取る」「運び去る」。いずれも into ... と繰り越し先を示す句を取らない。'],
    ja: '従業員は未消化の有給休暇を最大 5 日まで翌年に繰り越すことができる。',
    v: [['carry over', '持ち越す'], ['unused', '未消化の']],
  }),

  q('phrasal-22', {
    t: ['phrasal'], lv: 4,
    s: 'Before the merger closes, the legal team will draw ------- the definitive purchase agreement so that both parties can sign it by Friday.',
    c: ['on', 'out', 'up', 'back'],
    a: 2,
    e: 'draw up「（契約書などを）作成する」。金曜までに両当事者が署名できるよう文書を作成するという文脈。draw on「（資源として）利用する」、draw out「引き延ばす」はいずれも文書作成の意味にならない。',
    w: ['「（資源・経験を）活用する」。draw on funds / draw on experience のようにすでに手元にある元手を目的語に取る語で、これから作る契約書を目的語にできない。',
        '「（会議・手続を）長引かせる」「（預金を）引き出す」。前者は金曜までに署名するという so that 節の目的と正反対で、後者は口座から出す金額を目的語に取る。',
        '正解。「（文書を）作成する」。draw up a contract / draw up an agreement で定型。',
        '「後ずさりする、（関与から）身を引く」。自動詞で用いるか、カーテンやかんぬきなど物理的に引き戻せる物を目的語に取る語で、文書を作成する意味を持たない。'],
    ja: '合併完了前に、法務チームが金曜日までに両当事者が署名できるよう最終的な買収契約書を作成する。',
    v: [['draw up', '（文書を）作成する'], ['definitive agreement', '最終契約書']],
  }),

  q('phrasal-23', {
    t: ['phrasal'], lv: 4,
    s: 'The CFO asked to bring the quarterly review meeting ------- to next Tuesday, citing a scheduling conflict later in the month.',
    c: ['about', 'up', 'down', 'forward'],
    a: 3,
    e: 'bring forward「（予定を）繰り上げる」。来週火曜という早い日程に変更する文脈。bring about「引き起こす」、bring up「話題に出す」、bring down「引き下げる」はいずれも日程変更の意味にならない。',
    w: ['「（変化・結果を）引き起こす」。bring about a change のように生じる事態を目的語に取る語で、to+日付 と移動先の日程を示す用法がない。',
        '「（話題を）持ち出す」「（子を）育てる」。主要辞典のどの語義にも予定を早める用法はなく、持ち出す先を to+日付 で示す形も取らない。',
        '「（価格・熱を）下げる」「（政権を）倒す」。数値や体制を下降させる語で、日程を早める意味にはならない。',
        '正解。「（予定を）繰り上げる」。bring the meeting forward to Tuesday。'],
    ja: 'CFO は、月内後半の予定が重なることを理由に、四半期レビュー会議を来週火曜日に繰り上げるよう求めた。',
    v: [['bring forward', '（予定を）繰り上げる'], ['scheduling conflict', '予定の重複']],
  }),

  /* id は phrasal-24r（stem を差し替えたため新規採番）。旧 stem の
     take back two additional engineers は、take back に「（辞めた従業員を）再び雇う」の
     語義があり（Collins・Oxford Learner's などが立項）、人員を戻して増強する読みで
     そのまま成立していたため第二の正解だった。目的語を「今年の卒業生」に変え、
     再雇用の前提（過去に在籍していたこと）が成り立たない形に閉じてある。 */
  q('phrasal-24r', {
    t: ['phrasal'], lv: 3,
    s: 'The firm plans to take ------- two engineers straight from this year\'s graduating class to meet the project deadline.',
    c: ['back', 'on', 'up', 'down'],
    a: 1,
    e: 'take on「（人員を）新たに雇い入れる」。take on staff / take on new graduates が定型で、straight from this year\'s graduating class（今年の卒業生をそのまま）という新規採用の文脈に合う。',
    w: ['「（辞めた従業員を）再び雇う」「（買った物を）返品する」。前者は以前その会社にいたことを前提とする語で、今年の卒業生を直接採用する文とは両立しない。後者は物を目的語に取る用法で人には使えない。',
        '正解。「（人員を）新たに雇い入れる」。',
        '「（活動・趣味を）始める」「（場所・時間を）占める」。人を目的語に取って雇うという意味は持たない。',
        '「書き留める」「取り壊す、降ろす」。採用を表す用法がない。'],
    ja: 'その会社は、プロジェクトの納期に間に合わせるため、今年の卒業生からエンジニアを 2 名直接採用する予定である。',
    v: [['take on staff', '人員を新たに雇い入れる'], ['graduating class', '卒業予定者']],
  }),

  q('phrasal-25', {
    t: ['phrasal'], lv: 3,
    s: 'The board voted to set ------- 10 percent of this year\'s profits for next year\'s marketing campaign.',
    c: ['up', 'forth', 'aside', 'back'],
    a: 2,
    e: 'set aside「（資金などを）別に取り分けておく、確保する」。用途を示す for と結び付いて「〜のために取っておく」を表し、今年の利益の一部を来年の費用に充てるという文脈に合う。',
    w: ['「（会社・制度を）設立する、（機器を）設置する」。組織や仕組みを目的語に取る語で、利益の 10 パーセントという金額を目的語にはできない。',
        '「（正式に）述べる、明示する」。条件・理由・方針など述べる内容を目的語に取る語で、資金を確保する行為は表せない。',
        '正解。「（資金を）取り分けておく」。',
        '「（計画などを）遅らせる」「（人に）〜の出費をさせる」（The trip set me back $500）。後者は set + 人 + 金額 の語順を取るため、金額そのものを目的語にする形にはならない。'],
    ja: '取締役会は、今年の利益の 10 パーセントを来年のマーケティングキャンペーンのために取り分けておくことを議決した。',
    v: [['set aside', '取り分けておく'], ['profit', '利益']],
  }),

  q('phrasal-26', {
    t: ['phrasal'], lv: 3,
    s: 'The renovation project ran ------- unexpected delays after inspectors discovered asbestos in the old wiring.',
    c: ['out of', 'over', 'down', 'into'],
    a: 3,
    e: 'run into「（問題などに）遭遇する」。アスベストの発見によって予期せぬ遅延に見舞われたという文脈。run out of「〜を使い果たす」は、遅延が使い果たされる資源ではないため意味が通らない。',
    w: ['「〜を使い果たす」。遅延は使い果たす対象にはならず、原因のアスベスト発見とも矛盾する。',
        '「超過する」。通常は予算や期限を目的語に取り、「遅延を超過する」とは言わない。',
        '「（機能などが）低下する」。',
        '正解。「（問題に）遭遇する」。'],
    ja: '検査員が古い配線内にアスベストを発見した後、その改修工事は予期せぬ遅延に見舞われた。',
    v: [['run into', '（問題に）遭遇する'], ['asbestos', 'アスベスト']],
  }),

  q('phrasal-27', {
    t: ['phrasal'], lv: 5,
    s: 'After the client filed for bankruptcy, the accounting department had no choice but to write ------- the outstanding invoice as a bad debt.',
    c: ['out', 'off', 'down', 'up'],
    a: 1,
    e: 'write off「（回収不能な債権などを）帳簿から損失として処理する」。破産により回収の見込みがなくなった請求書を貸倒れとして処理するという文脈。write down「（資産の帳簿価額を）一部減額する」は価値が部分的に残る資産に使う語で、全額を損失計上する as a bad debt とは結び付かない。',
    w: ['「（書類を）省略せずに書き上げる」「（小切手を）振り出す」。書き上げる文書や振り出す証書を目的語に取る語で、債権を帳簿から落とす会計処理は表さない。',
        '正解。「（債権を）損失として処理する」。write off ... as a bad debt で定型。',
        '「（資産の帳簿価額を）引き下げる」。一部の回収を見込んで低い価額で計上し続ける処理を指し、簿価をゼロにして帳簿から外す write off と会計上区別される。回収不能と位置づける as a bad debt を伴えない。',
        '「（報告書などを）詳しく書き上げる」。会計では逆に「帳簿価額を引き上げる」（write-up）を指し、どちらも回収不能債権の損失計上にはならない。'],
    ja: '取引先が破産を申請した後、経理部門は未回収の請求書を貸倒れとして損失処理せざるを得なかった。',
    v: [['write off', '損失として処理する'], ['bad debt', '貸倒れ']],
  }),

  q('phrasal-28', {
    t: ['phrasal'], lv: 4,
    s: 'The property was signed ------- to the new owner once the final payment cleared.',
    c: ['off', 'up', 'over', 'for'],
    a: 2,
    e: 'sign over「（署名して）所有権を譲渡する」。最終支払いの完了を受けて所有権が新しい所有者に移ったという文脈。sign off は「（承認して）署名を終える」で、to 以下に譲渡先を伴う用法ではない。',
    w: ['「（放送を）終える」「（承認して）決裁する」。承認の意味では sign off on ... と on を取る語で、譲渡先を to+人 で示す形を持たない。',
        '「（人を）加入させる、契約させる」。sign up new members のように加入する人を目的語に取る語で、不動産を主語にして所有権の移転を表す用法がない。',
        '正解。「（署名して）譲渡する」。sign over the property to ... で定型。',
        '「（受領の証しに）署名する」。sign for a package のように受け取る物を for の後ろに置く形で、signed for to ... と for と to を重ねた語形自体が成り立たない。'],
    ja: '最終支払いが完了すると、その不動産は新しい所有者に署名の上で譲渡された。',
    v: [['sign over', '署名して譲渡する'], ['clear', '（支払いなどが）完了する']],
  }),

  q('phrasal-29', {
    t: ['phrasal'], lv: 4,
    s: 'The sales rep promised to follow ------- with the client after the trade show, but no one on the team ever did.',
    c: ['suit', 'along', 'in', 'up'],
    a: 3,
    e: 'follow up with + 人「（相手に）改めて連絡を取る」。連絡の相手を with で示せるのはこの句動詞で、用件を示すときは follow up on + 事柄 と使い分ける。',
    w: ['follow suit は「先例にならって同じことをする」。目的語を取らない成句で、with を続ける場合も followed suit with a similar price cut のように「同じ行為の中身」を示すだけで、連絡する相手（人）は入らない。',
        'follow along は「（説明や進行に）ついていく」。with の後ろに来るのは a text / the instructor など、たどる対象。展示会後に顧客へ連絡を取る行為は表さない。',
        'follow in は follow in someone\'s footsteps「〜の跡を継ぐ」の形でのみ使い、in の後ろは足跡・道筋を表す名詞に限られる。with + 人 は取らない。',
        '正解。follow up with the client。'],
    ja: '営業担当者は展示会の後に顧客へ改めて連絡すると約束したが、チームの誰もそれを果たさなかった。',
    v: [['follow up with', '改めて連絡を取る'], ['trade show', '展示会']],
  }),

  q('phrasal-30', {
    t: ['phrasal'], lv: 5,
    s: 'When the scheduled speaker canceled at the last minute, the marketing director had to step ------- for him and deliver the presentation herself.',
    c: ['back', 'in', 'down', 'aside'],
    a: 1,
    e: 'step in for「〜の代わりを務める」。直前のキャンセルを受けて代役を務めたという文脈。step back / step down / step aside はいずれも「退く、身を引く」方向の意味で、自らプレゼンを行ったという後半と矛盾する。',
    w: ['「後ろに下がる」「（関与から）身を引く」。step back from ... と離れる対象を from で示す語で、for+人 を伴って代役を務める意味にはならず、自ら発表を行ったという後半とも矛盾する。',
        '正解。step in for「〜の代わりを務める」。',
        '「（役職を）退く、辞任する」。step down as chairman のように退く役職を示す語で、for+人 を伴って代役を務める意味にはならない。',
        '「わきへ寄る、（後任に）道を譲る」。step aside for ... は相手に場を明け渡す逆向きの意味で、キャンセルした講演者に場を譲ることはできず、自ら発表したという後半とも合わない。'],
    ja: '予定されていた講演者が直前にキャンセルしたため、マーケティング部長が彼の代わりを務め、自らプレゼンテーションを行うことになった。',
    v: [['step in for', '〜の代わりを務める'], ['at the last minute', '直前に']],
  }),
];
