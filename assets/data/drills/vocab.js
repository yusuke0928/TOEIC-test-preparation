/* =============================================================
   drills/vocab.js — 語彙・語法（前半）
   コロケーション / 動詞の語法 / 形容詞・名詞＋前置詞 / 副詞の意味識別
   ============================================================= */

const q = (id, o) => ({
  id: `u-${id}`, part: 5, kind: 'single', topics: o.t, level: o.lv ?? 4,
  questions: [{
    id, stem: o.s, choices: o.c, answer: o.a,
    exp: o.e, why: o.w, ja: o.ja, vocab: o.v, topics: o.t,
  }],
});

export const UNITS = [

  /* ══ コロケーション ═════════════════════════════════ */
  q('colloc-01', {
    t: ['colloc'], lv: 3,
    s: 'Despite the shortened production window, the plant managed to ------- every delivery deadline in the third quarter.',
    c: ['reach', 'accomplish', 'meet', 'arrive'],
    a: 2,
    e: 'meet a deadline「期限に間に合わせる」が定型。LDOCE の deadline のコロケーション欄が挙げる動詞も meet / miss / set / extend / work to だけで、期限を「満たす」側の語は meet。',
    w: ['reach は到達点（場所・数値・合意点）に達することを表す。deadline は達成すべき数値ではなく作業を終える時間の限界なので、reach the deadline は「期限の時点が来る」の意味にしかならず、managed to「〜し遂げた」の目的語にならない。reach a decision / reach an agreement なら可。',
        'accomplish の目的語は達成される課題そのもの（accomplish a goal / a task / a mission）。deadline は課題ではなくそれを終える時点を指すので目的語に立てない。',
        '正解。meet a deadline / meet a requirement / meet a demand。「満たすべき水準・条件」を目的語に取る。',
        'arrive は自動詞で arrive at ... の形しか取れず、every delivery deadline を直接目的語にできない。'],
    ja: '生産期間が短縮されたにもかかわらず、その工場は第 3 四半期のすべての納期に間に合わせた。',
    v: [['production window', '生産可能な期間'], ['deadline', '期限']],
  }),

  q('colloc-02', {
    t: ['colloc'], lv: 3,
    s: 'Before finalizing the new packaging, the marketing team will ------- a survey of 500 regular customers.',
    c: ['convey', 'commit', 'construct', 'conduct'],
    a: 3,
    e: 'conduct a survey / conduct research / conduct an interview「調査を実施する」が定型。',
    w: ['convey は「伝える、運ぶ」。',
        'commit は「（罪を）犯す」「（資源を）投入する」。survey とは組まない。',
        'construct は「建設する、構築する」。',
        '正解。調査・研究・面接に用いる。'],
    ja: '新しいパッケージを確定する前に、マーケティングチームは常連客 500 名を対象に調査を実施する。',
    v: [['finalize', '最終決定する'], ['survey', '調査']],
  }),

  q('colloc-03', {
    t: ['colloc'], lv: 3,
    s: 'Customers who ------- an order before noon can expect same-day dispatch from our Leeds warehouse.',
    c: ['take', 'put', 'set', 'place'],
    a: 3,
    e: 'place an order「注文を出す」が定型。place a bid / place an advertisement / place an emphasis on と同じ、「（依頼・申し込みを）出す」意味の place。',
    w: ['take an order は注文を受ける側（店員・受注側）の言い方で、目的語の an order は「他人から受け取る注文」。この文の主語は注文を出す Customers なので、やり取りの向きが逆になり成立しない。',
        'put は「注文を出す」意味では put in an order と副詞 in を伴う形でしか使えない（put in a request / a claim と同じ型）。in の無い put an order という型は無い。',
        'set の目的語は set a date / a price / a target / a record のように「自分で定める基準・数値」。an order は相手に出す依頼であって自分で設定する基準ではないので、目的語に立たない。',
        '正解。place an order。'],
    ja: '正午までにご注文いただいたお客様は、リーズ倉庫からの当日発送をご期待いただけます。',
    v: [['dispatch', '発送'], ['warehouse', '倉庫']],
  }),

  /* id は colloc-04r（選択肢を差し替えたため新規採番）。旧選択肢 retain は LDOCE の語義1
     「to keep something or continue to have something」がそのまま当てはまり、
     retain confidentiality は法律事務所の実務記事にも使われる実在の言い方（businesses wanting to
     retain confidentiality in commercial arrangements）で、第二の正解だった。 */
  q('colloc-04r', {
    t: ['colloc'], lv: 4,
    s: 'The agency has been asked to ------- strict confidentiality regarding the client\'s expansion plans.',
    c: ['detain', 'sustain', 'contain', 'maintain'],
    a: 3,
    e: 'maintain confidentiality「守秘を保つ」が定型。maintain は「あるべき状態・水準を崩さずに続ける」で、confidentiality / standards / records / silence のような「保つべき状態」を目的語に取る。',
    w: ['detain は「（人・物を）その場から進ませない」語で、目的語は引き止められる実体（detain a suspect / detain a shipment。LDOCE の 2 語義はどちらも人が目的語）。古い用法として American Heritage が archaic「to retain or withhold（payment or property）」を残しているが、そこでの目的語も引き渡すべき金銭・財産という実体で、confidentiality のような「守るべき状態」は取れない。',
        'sustain は「放っておけば落ちていくものを、その水準のまま続かせる」語。LDOCE の例文の目的語も the children\'s interest / economic growth / a relationship のように程度の上下がある活動・水準で、AHD が並べる用法（keep up a role / support weight / suffer losses）もこれと同じ。confidentiality は上下する水準ではなく守るか破るかの義務なので、この目的語に立たない。守秘を「保つ」なら maintain / preserve / keep。',
        'contain は「中に含む」（The file contains confidential data）か「封じ込める、抑える」（contain an outbreak / contain costs）。守秘義務を「保つ」意味は持たない。',
        '正解。maintain confidentiality。'],
    ja: 'その代理店は、顧客の事業拡大計画について厳格な守秘義務を守るよう求められている。',
    v: [['confidentiality', '守秘（義務）'], ['expansion', '拡大']],
  }),

  /* id は colloc-05r（選択肢を差し替えたため新規採番）。旧選択肢 take は LDOCE の decision の項に
     take a decision「英」＝ make an important or formal decision と立項されており、英国用法として
     正しい英語なので第二の正解だった。旧 give も give a decision（審判・裁定を下す）が実在するため
     併せて外した。 */
  q('colloc-05r', {
    t: ['colloc'], lv: 3,
    s: 'The committee will ------- a decision on the site selection at its next scheduled meeting.',
    c: ['do', 'draw', 'reach', 'raise'],
    a: 2,
    e: 'reach a decision「（議論の末に）決定に至る」。reach は議論・交渉の到達点を目的語に取る動詞で、decision / agreement / conclusion / consensus / compromise と結び付く。',
    w: ['do は do business / do research / do damage のように「行う行為そのもの」を目的語に取る。決定を下す意味では decision と組まず、do a decision という形は存在しない。',
        'draw は draw a conclusion / draw a distinction / draw a comparison のように「推論して導き出すもの」を目的語に取る。conclusion とは組むが、意思決定を表す decision とは組まない。',
        '正解。reach a decision。reach an agreement / reach a consensus も同じ型。',
        'raise は raise an issue / raise a question / raise an objection のように「議題として持ち出すもの」を目的語に取る。まだ存在しない決定を raise することはできない。'],
    ja: '委員会は次回の定例会議で、用地選定について結論を出す予定である。',
    v: [['site selection', '用地選定']],
  }),

  /* id は colloc-06r2（選択肢をさらに差し替えたため再採番）。もとの colloc-06 の obey は
     Merriam-Webster が「to conform to or comply with（obey an order）」と定義しており第二の正解だった。
     差し替え版 colloc-06r で入れた abide も、Collins が他動詞「to accept or submit to; suffer」
     （例: to abide the court's decision）、M-W が「to accept without objection」（will abide your
     decision）と立項しており、前置詞なしで the terms を取れてしまうため外した。「遵守する」の意味で
     必ず前置詞を要し、他動詞用法も目的語の型が違う conform に入れ替えてある。
     conform の他動詞用法は追加で全辞書を確認済み: LDOCE・Oxford・Cambridge は conform を自動詞
     （conform to/with）としてしか立項していない。M-W・Collins・AHD・Webster's New World は他動詞を
     載せるが、いずれも「A を B に合うよう作り変える」の使役義（M-W: to give the same shape, outline,
     or contour to — conform furrows to the slope of the land）で、法律実務の conform a copy
     「原本に合わせて写しを整える」もこの語義。abide と違い「守る・受け入れる」の意味にはならないので、
     この stem では第二の正解にならない。 */
  q('colloc-06r2', {
    t: ['colloc'], lv: 4,
    s: 'Our supplier failed to ------- the terms of the service-level agreement for three consecutive months.',
    c: ['comply', 'conform', 'adhere', 'observe'],
    a: 3,
    e: '空所の直後に前置詞なしで the terms が続く。「（取り決めを）遵守する」の意味でこの位置に目的語を直接取れる他動詞は observe だけで、comply / conform / adhere は with・to が要る。',
    w: ['comply は自動詞で comply with the terms の形。with が無いこの位置には入らない。',
        'conform は「（規則・取り決めに）従う」の意味では自動詞で、conform to the terms / conform with the terms と前置詞が要る（LDOCE・Oxford・Cambridge はこの自動詞用法しか立項していない）。M-W・Collins が載せる他動詞の conform は「A を B に合うよう作り変える」という別語義で（conform furrows to the slope of the land、法律実務の conform a copy「原本に合わせて写しを整える」）、主語は書き換える側。仕入先が守るべき条件を作り変える話ではないので、遵守の意味では使えない。',
        'adhere は adhere to the terms と to が必要。他動詞の adhere は「（接着剤で）貼り付ける」の意味で adhere A to B の形を取る。',
        '正解。observe は「（法・規定・協定を）守る」の意味の他動詞で、observe the terms / observe the rules / observe a ceasefire のように目的語を直接取る。'],
    ja: '当社の仕入先は 3 か月連続で、サービス品質保証契約の条件を守れなかった。',
    v: [['service-level agreement', 'サービス品質保証契約'], ['consecutive', '連続した']],
  }),

  /* id は colloc-07r（選択肢を差し替えたため新規採番。旧 id colloc-07 を使い回すと
     SRS の復習履歴が別問題に引き継がれる）。旧選択肢 afforded は LDOCE の第 2 語義
     「to provide something」（例: The new law will afford protection to employees.）が
     この文型にそのまま収まり、第二の正解になりうるため外した。 */
  q('colloc-07r', {
    t: ['colloc'], lv: 4,
    s: 'The foundation ------- a grant of 2.4 million euros to the coastal restoration project.',
    c: ['amounted', 'rewarded', 'awoke', 'awarded'],
    a: 3,
    e: 'award a grant / award a contract / award a prize「（助成金・契約・賞を）授与する」。交付先を to で示せるのはこの中で award だけ。reward は「報いる」で、目的語に来るのは報いる相手（人）かその行為であり、渡す金銭そのものは目的語にならない。',
    w: ['amount は自動詞で amount to ...「〜に達する、〜に等しい」の形しか取らず、a grant のような目的語を直接置けない。文末の to に引きずられやすいが、その to は grant に係る「〜への助成金」の to。',
        'reward someone for something / reward someone with something の形。目的語は報いる相手であって、渡す金銭ではないので grant を取れない。',
        'awake の過去形。自動詞「目が覚める」が中心で、他動詞用法でも目的語は人や記憶・関心などに限られ、金銭の交付は表さない。',
        '正解。award a grant。award A to B の形で交付先を示せる。'],
    ja: 'その財団は沿岸修復プロジェクトに 240 万ユーロの助成金を交付した。',
    v: [['grant', '助成金'], ['restoration', '修復']],
  }),

  /* id は colloc-08r（選択肢を差し替えたため新規採番）。旧選択肢 raised は Oxford Learner's が
     raise something =「to end a restriction on somebody/something」（to raise a blockade / a ban /
     an embargo / a siege）と立項し、LDOCE も raise a siege/embargo を「force で止められていた
     人・物の出入りを再び許す」と定義している。つまり raise は正解 lifted と同じ「規制を解除する」
     意味を持ち、第二の正解だった。 */
  q('colloc-08r', {
    t: ['colloc'], lv: 4,
    s: 'Several long-standing regulations were ------- when the trade agreement took effect last April.',
    c: ['elevated', 'hoisted', 'lifted', 'boosted'],
    a: 2,
    e: 'lift は LDOCE が「to remove a rule or a law that says that something is not allowed」と定義する語で、lift a ban / lift restrictions / lift regulations と「規則そのものを取り除く」意味を持つ。残る 3 語は「高さ・数値・地位を上げる」側の意味しか持たない。',
    w: ['elevate は位置を高くする、または地位を引き上げる語。地位の用法は elevate A to B と到達先を示す形が必要で、いずれにせよ規則の効力を無くす意味は無い。',
        'hoist は綱や装置を使って物を引き上げること（hoist a flag / hoist the cargo aboard）。LDOCE はビジネス用法として「急に引き上げる」（hoist its sales tax）も立てているが、そこでの目的語は税率・価格のような上げ下げできる数値。規則は数値ではなく、hoist には lift や raise が持つ「（禁令・包囲を）解く」の語義が LDOCE・Collins・AHD・Century のどれにも無いので、どちらの型にも乗らない。',
        '正解。lift a ban / lift restrictions / lift regulations。',
        'boost は sales / profits / morale / the economy のように「増やせる量や勢い」を目的語に取って押し上げる語。regulations は増減する量ではなく、取り除く意味も持たない。'],
    ja: '昨年 4 月に貿易協定が発効した際、長年続いてきたいくつかの規制が撤廃された。',
    v: [['long-standing', '長年の'], ['take effect', '発効する']],
  }),

  /* ══ 動詞の語法 ═════════════════════════════════════ */
  q('vusage-01', {
    t: ['vusage'], lv: 3,
    s: 'Please ------- the payroll department of any change to your banking details.',
    c: ['announce', 'report', 'say', 'notify'],
    a: 3,
    e: 'notify A of B「A に B を知らせる」。人・部署を目的語に置き of で内容を続けられるのは notify / inform / advise / remind / assure など限られた動詞だけ。',
    w: ['announce は announce something to someone の形で、伝える内容の方が目的語になる。announce + 人 + of + 事柄 の形は取れない。',
        'report は report something to someone が基本形で、伝える内容が目的語。人を目的語に取る用法もあるが、それは report him to the supervisor「人を上司に通報する」のように to で通報先を示す形に限られ、of を伴って「人に事柄を知らせる」意味にはならない。',
        'say は say something to someone の形。伝える相手を目的語にできない。',
        '正解。notify + 人 + of + 事柄。'],
    ja: '銀行口座情報に変更がある場合は、給与課までお知らせください。',
    v: [['payroll department', '給与課'], ['banking details', '口座情報']],
  }),

  q('vusage-02', {
    t: ['vusage'], lv: 3,
    s: 'The panel will ------- the merits of each application before ranking the finalists.',
    c: ['discuss about', 'speak', 'talk', 'discuss'],
    a: 3,
    e: 'discuss は他動詞で、目的語との間に前置詞を挟めない。mention / approach / attend / enter / marry / resemble も同じ型で、日本語の「〜について」に引かれて about を入れる誤りが起きやすい語。',
    w: ['discuss は目的語を直接取る他動詞なので、about を挟むと目的語が前置詞句に変わってしまい、動詞が目的語を欠く。',
        'speak は「（言語を）話す」以外では自動詞で、話題は speak about / speak of で示す。the merits を直接目的語にできない。',
        'talk が前置詞なしで名詞を続けられるのは talk business / talk shop / talk politics のような決まった組み合わせだけで、話題一般は talk about で示す。',
        '正解。他動詞として直接目的語を取る。'],
    ja: '審査委員会は最終候補者を順位付けする前に、各応募の長所を検討する。',
    v: [['merit', '長所'], ['finalist', '最終候補者']],
  }),

  /* id は vusage-03r（選択肢を差し替えたため新規採番）。旧選択肢 request は LDOCE に
     request somebody to do something が文型として立項されており（Passengers are requested not to
     throw things out of the window.）、request staff to log ... がそのまま成立して第二の正解だった。 */
  q('vusage-03r', {
    t: ['vusage'], lv: 4,
    s: 'The revised guidelines ------- staff to log all client interactions within 24 hours.',
    c: ['suggest', 'demand', 'require', 'insist'],
    a: 2,
    e: 'require + 人 + to do「人に〜するよう義務づける」。この文型を取れるのは require / allow / enable / encourage / advise / remind など。suggest / demand / insist は人を目的語にした to 不定詞を取らず、that 節（動詞は原形または should）で受ける。',
    w: ['suggest は目的語に人＋to 不定詞を置けない動詞の代表。suggest that staff log ... または suggest logging ... の形にする。',
        'demand は demand that staff log ... か demand to do の形。demand + 人 + to do の語順は取らない。',
        '正解。require + 人 + to do。',
        'insist は自動詞で insist on doing / insist that staff log ... の形。人を直接目的語にできない。'],
    ja: '改訂されたガイドラインは、顧客とのやり取りをすべて 24 時間以内に記録することを職員に義務づけている。',
    v: [['log', '記録する'], ['interaction', 'やり取り']],
  }),

  q('vusage-04', {
    t: ['vusage'], lv: 4,
    s: 'The finance director ------- the shortfall to an unexpected drop in overseas orders.',
    c: ['distributed', 'contributed', 'attributed', 'substituted'],
    a: 2,
    e: 'attribute A to B「A の原因を B に帰する」。to の後ろに来るのが「原因」である型を持つのはこの中で attribute だけ。',
    w: ['distribute A to B は「A を B に配る」で、to の後ろは配付先（人・部署・店舗）。an unexpected drop in overseas orders は受け取り手になれないので、この構文が成立しない。',
        'contribute A to B は「A を B に提供・寄付する」で、to の後ろは資金や労力の受け皿（a fund / a charity / a project）。原因を表す名詞句を置く型を持たない。自動詞の contribute to は「〜の一因となる」だが、その用法では the shortfall を目的語に取れない。',
        '正解。attribute A to B。',
        'substitute は substitute A for B / substitute A with B の形で、to を取らない。'],
    ja: '財務部長は、その不足分を海外受注の予期せぬ落ち込みによるものだと説明した。',
    v: [['shortfall', '不足（分）'], ['attribute A to B', 'A を B に帰する']],
  }),

  q('vusage-05', {
    t: ['vusage'], lv: 3,
    s: 'All contractors must ------- with the site\'s hearing-protection policy without exception.',
    c: ['obey', 'follow', 'comply', 'observe'],
    a: 2,
    e: '空所の直後に with があるので、with を伴う comply が正解。obey / follow / observe はいずれも他動詞で前置詞を取らない。',
    w: ['obey は他動詞で obey the policy と目的語を直接取る。with を挟む型を持たない。',
        'follow も他動詞で follow the policy。規則に従う意味で with を目的語標識に使うことはない。',
        '正解。comply with + 規則。',
        'observe は「（規則・協定を）守る」意味の他動詞で observe the policy。with は取らない。'],
    ja: 'すべての請負業者は、例外なく現場の聴覚保護規定を遵守しなければならない。',
    v: [['hearing protection', '聴覚保護'], ['without exception', '例外なく']],
  }),

  /* id は vusage-06r（選択肢を差し替えたため新規採番）。旧選択肢 allocated to は
     Each student is allocated to a supervisor. のように「人を担当者に割り当てる」形で普通に使われ、
     The new hire was allocated to a mentor ... がそのまま成立して第二の正解だった。旧 appointed も
     the court appointed him counsel 型の二重目的語用法があり危ういので併せて外し、
     「前置詞なしで二重目的語を取れるのはどれか」だけで決着する設計にした。 */
  q('vusage-06r', {
    t: ['vusage'], lv: 5,
    s: 'The new hire was ------- a mentor from the same department during her first six weeks.',
    c: ['introduced', 'paired', 'assigned', 'matched'],
    a: 2,
    e: 'assign + 人 + 物「人に物をあてがう」の二重目的語構文の受動態。She was assigned a mentor. で「メンターを付けられた」。空所の後ろに前置詞が無いので、前置詞なしで人と相手を結べる動詞でなければならない。',
    w: ['introduce は introduce A to B「A を B に引き合わせる」。二重目的語を取れないので was introduced to a mentor でなければ成立しない。',
        'pair は pair A with B「A を B と組ませる」。was paired with a mentor なら可だが、with の無いこの形では使えない。',
        '正解。assign + 人 + 物 の受動態。',
        'match は match A with B「A を B に引き合わせる」。was matched with a mentor の形が必要で、with を省くことはできない。'],
    ja: 'その新入社員は、最初の 6 週間、同じ部署のメンターを付けられた。',
    v: [['new hire', '新入社員'], ['assign', '割り当てる']],
  }),

  q('vusage-07', {
    t: ['vusage'], lv: 3,
    s: 'Would you ------- reviewing the draft agenda before I send it to the participants?',
    c: ['mind', 'hesitate', 'object', 'refuse'],
    a: 0,
    e: 'Would you mind doing ...?「〜していただけますか」は動名詞を取る依頼の定型。hesitate と refuse は不定詞、object は object to doing。',
    w: ['正解。mind + 動名詞。',
        'hesitate to do の形。',
        'object to doing の形で to が必要。',
        'refuse to do の形。'],
    ja: '参加者に送る前に、議題案に目を通していただけますか。',
    v: [['draft agenda', '議題案']],
  }),

  q('vusage-08', {
    t: ['vusage'], lv: 4,
    s: 'The auditors ------- the discrepancy out to the bookkeeper before finalizing the report.',
    c: ['pointed', 'indicated', 'showed', 'referred'],
    a: 0,
    e: 'point A out to B「A を B に指摘する」。目的語の後ろに副詞 out が置かれているので、out を伴う句動詞を作れる point しか入らない。',
    w: ['正解。point out。point A out to B の語順で、指摘の相手を to で示せる。',
        'indicate は目的語を直接取る他動詞で、indicate the discrepancy to the bookkeeper の形になる。out を伴う句動詞の型を持たない。',
        'show A out という句動詞は実在するが、それは「人を出口まで案内して送り出す」意味で目的語は人（The receptionist showed him out.）。無生物の the discrepancy を取れない。「示す」の意味なら show A to B で、out は付かない。',
        'refer が取るのは他動詞の refer A to B「A を B に回付する」と自動詞の refer to ... の 2 型で、LDOCE をはじめ主要学習辞書は refer に out を伴う句動詞を立項していない。'],
    ja: '監査人は報告書を確定する前に、その不一致を経理担当者に指摘した。',
    v: [['bookkeeper', '経理担当者'], ['point out', '指摘する']],
  }),

  /* ══ 形容詞・名詞＋前置詞 ═══════════════════════════ */
  q('adjprep-01', {
    t: ['adjprep'], lv: 3,
    s: 'Employees who have completed two years of service are eligible ------- the enhanced pension scheme.',
    c: ['to', 'for', 'with', 'of'],
    a: 1,
    e: 'be eligible for「〜の資格がある」が定型。eligible to do（不定詞）も可だが、後ろが名詞句なので for。',
    w: ['eligible to は後ろに動詞の原形を続ける型（eligible to vote / eligible to apply）。名詞句 the enhanced pension scheme を直接続けることはできない。',
        '正解。be eligible for + 名詞（eligible for a loan / for a discount / for benefits）。',
        'with は「〜を伴って」を表す前置詞で、資格の対象を指す働きが無い。主要辞書も eligible with という型を立項していない。',
        'of は所属・所有・部分を示す前置詞で、資格の対象を指せない。eligible of という型は無い。'],
    ja: '勤続 2 年を満たした従業員は、拡充された年金制度に加入する資格があります。',
    v: [['eligible', '資格がある'], ['pension scheme', '年金制度']],
  }),

  q('adjprep-02', {
    t: ['adjprep'], lv: 3,
    s: 'All quoted prices are subject ------- change without prior notice.',
    c: ['for', 'to', 'on', 'in'],
    a: 1,
    e: 'be subject to「〜を受けることがある、〜次第である」。契約・見積書の定型表現。',
    w: ['形容詞 subject が「〜を受けることがある」を表すときの前置詞は to で固定されている（subject to change / to approval / to delay / to tax）。for に置き換えられる型は無い。',
        '正解。be subject to。',
        'on を取るのは名詞の subject（a book on the subject「その主題についての本」）。ここは be 動詞の補語に立つ形容詞なので、その用法とは別。',
        'in は「〜の中で・〜の点で」を表す前置詞で、影響を受ける対象を導く働きが無い。形容詞 subject が in を取る型は無い。'],
    ja: '記載の価格はすべて、予告なく変更される場合があります。',
    v: [['quoted price', '提示価格'], ['prior notice', '事前通知']],
  }),

  q('adjprep-03', {
    t: ['adjprep'], lv: 3,
    s: 'The laboratory is fully compliant ------- the revised waste-disposal standards issued last year.',
    c: ['to', 'with', 'for', 'of'],
    a: 1,
    e: 'be compliant with「〜に準拠している」。動詞 comply with と前置詞が同じである点で覚えるとよい。',
    w: ['compliant は動詞 comply の派生語で、前置詞も comply with の with をそのまま引き継ぐ。LDOCE / Collins / Oxford はいずれも compliant with しか立項しておらず、to を取る型は無い。',
        '正解。compliant with。',
        'for は用途や受け手を示す前置詞で、準拠先の基準を導く働きが無い。',
        'of は取らない。基準への準拠は名詞形でも compliance with と with で表す。'],
    ja: 'その研究所は、昨年公布された改訂版の廃棄物処理基準に完全に準拠している。',
    v: [['waste disposal', '廃棄物処理'], ['issue', '（規則などを）公布する']],
  }),

  q('adjprep-04', {
    t: ['adjprep'], lv: 4,
    s: 'The delay was largely attributable ------- a shortage of certified welders in the region.',
    c: ['of', 'for', 'to', 'from'],
    a: 2,
    e: 'be attributable to「〜に起因する」。動詞 attribute A to B と同じ前置詞。',
    w: ['attributable は動詞 attribute の派生語で、attribute A to B の to をそのまま引き継ぐ。of を取る型は無い。',
        'for が理由を導けるのは famous for / responsible for のような別の形容詞。attributable が取る前置詞は to に固定されている。',
        '正解。attributable to。',
        'from で原因を示すのは result from / stem from のような動詞の型。形容詞 attributable は from を取らない。'],
    ja: 'その遅延は主に、地域における有資格溶接工の不足に起因していた。',
    v: [['attributable to', '〜に起因する'], ['welder', '溶接工']],
  }),

  /* id は adjprep-05r（選択肢を差し替えたため新規採番）。旧選択肢 about は LDOCE の knowledge の項に
     knowledge of/about と併記され（Few parents have enough knowledge about college entry
     requirements ...）、正しい英語として成立するため第二の正解だった。旧 on も knowledge on the
     subject の形で用例があるので併せて外した。 */
  q('adjprep-05r', {
    t: ['adjprep'], lv: 3,
    s: 'Ms. Lindqvist has a thorough knowledge ------- European packaging regulations.',
    c: ['to', 'of', 'with', 'for'],
    a: 1,
    e: 'knowledge of「〜についての知識」。名詞 knowledge が「何についての知識か」を示すときは of を取る。a knowledge of the law / a thorough knowledge of the market。',
    w: ['to は取らない。the knowledge to do the job のように不定詞を続ける形はあるが、名詞句を直接続けて対象を示すことはできない。',
        '正解。knowledge of。',
        'with は取らない。「精通している」を with で言うのは familiarity with / be familiar with で、名詞 knowledge は with と組まない。',
        'for は取らない。for は用途や受け手（knowledge for beginners）を示す前置詞で、知識の対象そのものを示すことはできない。'],
    ja: 'リンドクヴィスト氏は欧州の包装規制に関する深い知識を持っている。',
    v: [['thorough', '徹底した'], ['regulation', '規制']],
  }),

  q('adjprep-06', {
    t: ['adjprep'], lv: 4,
    s: 'Bonus payments are contingent ------- the division meeting its annual revenue target.',
    c: ['on', 'to', 'in', 'of'],
    a: 0,
    e: 'be contingent on「〜次第である」。depend on と同じ前置詞。',
    w: ['正解。contingent on / upon。LDOCE も「〜次第である」の contingent は on と upon の 2 つだけを示す。',
        '「〜次第である」を表す contingent が取る前置詞は on / upon に限られ、to を取る型は無い。',
        'in は条件を導く働きを持たない。contingent in という組み合わせは辞書に無い。',
        'of と組むのは名詞の contingent（a contingent of soldiers「一団の兵士」）。ここは be 動詞の補語に立つ形容詞なので、その用法とは別。'],
    ja: '賞与の支給は、当該部門が年間売上目標を達成することを条件とする。',
    v: [['contingent on', '〜を条件とする'], ['revenue', '収益']],
  }),

  q('adjprep-07', {
    t: ['adjprep'], lv: 4,
    s: 'The insulation used in these panels is highly resistant ------- moisture and temperature fluctuation.',
    c: ['for', 'of', 'to', 'against'],
    a: 2,
    e: 'be resistant to「〜に耐性がある」。immune to / vulnerable to も同じ形。',
    w: ['for は用途や受け手を示す前置詞で、耐える対象を導く働きが無い。resistant for という型は辞書に無い。',
        'of は取らない。resistant of という組み合わせは辞書に無い。',
        '正解。resistant to。immune to / vulnerable to / susceptible to も同じ型。',
        'against と組むのは動詞の protect / guard against や名詞の resistance（resistance against ...）。形容詞 resistant の後ろは LDOCE / Collins / Oxford いずれも to だけを立項している（Collins は [+ to] と明示）。'],
    ja: 'これらのパネルに使われている断熱材は、湿気と温度変化に対して高い耐性がある。',
    v: [['insulation', '断熱材'], ['fluctuation', '変動']],
  }),

  q('adjprep-08', {
    t: ['adjprep'], lv: 3,
    s: 'In accordance ------- company policy, all visitors must sign in at the reception desk.',
    c: ['to', 'with', 'of', 'for'],
    a: 1,
    e: 'in accordance with「〜に従って」。in compliance with / in conjunction with も同じ形で頻出。',
    w: ['according to は可だが、accordance は with を取る。',
        '正解。in accordance with。',
        'of は取らない。',
        'for は取らない。'],
    ja: '社内規程に従い、来訪者は全員、受付で記帳する必要があります。',
    v: [['in accordance with', '〜に従って'], ['sign in', '記帳する']],
  }),

  /* ══ 副詞の意味識別 ═════════════════════════════════ */
  /* id は adv-01r（stem を差し替えたため新規採番）。旧 stem は「The technician replied to the
     service request ------- , resolving the issue before noon.」で、previously を入れても
     「以前に返答し、正午前に問題を解決した」という文法的にも意味的にも成立する英文になり、
     第二の正解だった。依頼が届いた時刻を明示して、返答をそれより前に置く previously が
     成立しない形に組み替えた。 */
  q('adv-01r', {
    t: ['adv'], lv: 3,
    s: 'Although the request did not reach the service desk until 11:20 A.M., the technician replied ------- and resolved the issue before noon.',
    c: ['presumably', 'previously', 'primarily', 'promptly'],
    a: 3,
    e: '依頼が届いたのが 11 時 20 分、解決が正午前。40 分足らずで片付いたという時間差が空所を決める。promptly「即座に」。',
    w: ['presumably は話し手の推量を添える文修飾の副詞で、置ける位置は文頭（Presumably the technician replied ...）、助動詞・動詞の前（The technician presumably replied ...）、前後をコンマで切った挿入位置（He replied, presumably, ...）の 3 つ。空所は動詞の直後、様態・頻度の副詞が入る席で、そこに区切りなしで立つことはできない。文自体も「正午前に解決した」と事実を断定しており、推量を混ぜる余地も無い。',
        'previously は「（話題に出ている時点より）前に」を表す。返答は 11 時 20 分の到着より後にしか起こりえないので、返答の時点をそれより前だと限定することはできない。',
        'primarily は「主として」で、他と比べて何が中心かを述べる語（replied primarily to the second question のように比較の対象が要る）。この文には比べる相手が無く、返答の仕方を限定できない。',
        '正解。promptly「即座に」。11 時 20 分の受付から正午前の解決までの短さと一致する。'],
    ja: '依頼がサービス受付に届いたのは午前 11 時 20 分だったが、技術者は即座に返答し、正午前に問題を解決した。',
    v: [['promptly', '即座に'], ['resolve', '解決する']],
  }),

  q('adv-02', {
    t: ['adv'], lv: 4,
    s: 'The two divisions reported revenues of 8.2 and 5.6 million dollars -------.',
    c: ['respectfully', 'respectively', 'relatively', 'regardless'],
    a: 1,
    e: 'respectively「それぞれ」。複数の項目と複数の数値を順に対応させる語で、文末に置かれる。respectfully「敬意を込めて」との混同を狙った定番問題。',
    w: ['「敬意を込めて」。報告する側の態度を表す様態の副詞で、8.2 と 5.6 のどちらがどちらの部門の数字かを指定する働きは持たない。この文が必要としているのは 2 対 2 の対応づけ。',
        '正解。前に並んだ 2 つの項目と 2 つの数値を、並んだ順どおりに 1 対 1 で結びつける語。',
        '「比較的」。形容詞・副詞を前から修飾して程度をやわらげる語（relatively small / relatively quickly）で、修飾する語を持たずに文末に単独で置くことはできない。',
        '単独で使う regardless は「（前に述べた妨げを）押し切って」の意味で、押し切る対象が文脈に必要（She was told to stop, but continued regardless.）。この文にはその対象が無い。'],
    ja: '2 つの部門はそれぞれ 820 万ドル、560 万ドルの収益を報告した。',
    v: [['respectively', 'それぞれ'], ['revenue', '収益']],
  }),

  q('adv-03', {
    t: ['adv'], lv: 4,
    s: 'The venue was double-booked; -------, the workshop had to be moved to a nearby hotel.',
    c: ['accordingly', 'alternatively', 'otherwise', 'likewise'],
    a: 0,
    e: '「二重予約だった → だから移動せざるを得なかった」という因果関係。accordingly「それに応じて、したがって」。',
    w: ['正解。因果を表す。',
        '「あるいは」。選択肢を提示する語。',
        '「さもなければ」。仮定の帰結を表す。',
        '「同じように」。並列を表す。'],
    ja: '会場が二重予約になっていたため、ワークショップは近隣のホテルへ移さざるを得なかった。',
    v: [['double-booked', '二重予約された'], ['accordingly', 'したがって']],
  }),

  q('adv-04', {
    t: ['adv'], lv: 3,
    s: 'Registration closes on Friday; -------, late entries may be accepted if space remains.',
    c: ['therefore', 'however', 'thus', 'consequently'],
    a: 1,
    e: '「金曜締切」と「空きがあれば遅れても受付」は対立する内容。逆接の however。他の 3 つはすべて因果を表す。',
    w: ['因果。',
        '正解。逆接。',
        '因果。',
        '因果。'],
    ja: '登録は金曜日に締め切られますが、空きがあれば遅れての申し込みも受け付ける場合があります。',
    v: [['late entry', '締切後の申し込み']],
  }),

  /* id は adv-05r3（stem・選択肢とも差し替えたため新規採番）。3 巡失敗した経緯を残す。
     初版 adv-05「Volunteers ------- gave up their weekends to help catalog the donated collection.」は
     rarely を入れても完全に正しい英文で、単文内に排除根拠が無かった。
     adv-05r は「and every weekend shift ... was filled without a single cancellation」を足したが、
     受動態で動作主が無く「シフトは別の人手で埋まった」と読めた。
     adv-05r2 はそれを分詞構文 filling ... にして意味上の主語を主節と同一に固定したが、なお閉じない。
     (1) Volunteers は主節では配分的（各人はめったに週末を返上しない）、分詞節では集合的（全員でシフトを
     埋めきった）に読め、their weekends（各人の週末全体）と every weekend shift on the ... project
     （プロジェクト側の有限のシフト）は量化の領域が別なので、人数がいれば両立してしまう。
     (2) コンマ付きの -ing 節は主節との論理関係を明示しないので、譲歩・限定（めったに返上しないが、
     出たときは全シフトを埋めた）にも読める。
     readily と rarely/hardly/barely の対立は結局「文の意味と両立するか」でしか切れず、
     CLAUDE.md の「効かない閉じ方＝意味の推論で切る」に当たる。stem に情報を足す方向では閉じられないため、
     構造で切れる型に作り替えた。空所を前置詞 to の目的語である数量表現の直前に置き、
     この位置に立てるのが「超過の幅」を測れる well だけになるようにしてある。 */
  q('adv-05r3', {
    t: ['adv'], lv: 3,
    s: 'With freight and installation included, the cost of the replacement conveyor came to ------- over sixty thousand dollars, so the plant manager sent the request to head office for approval.',
    c: ['well', 'highly', 'strongly', 'readily'],
    a: 0,
    e: '空所は came to の to が取る目的語 over sixty thousand dollars の直前にある。前置詞と目的語の間に入れるのは目的語そのものを測る修飾語だけで、動詞 came や文全体に掛かる副詞はこの位置に置けない。したがってここに立てるのは、数量を前から修飾して「どれだけ上回るか」という幅を測れる語に限られる。well はその用法を持つ副詞で、LDOCE は副詞 well に「a lot, or to a great degree」の語義を立て、well before / after / above / below … と前置詞句の前に置く型を明示している（The village is well below sea level.）。well over sixty thousand dollars も同じ型。',
    w: ['正解。well over sixty thousand dollars で「6 万ドルを大きく超えて」。数量表現の前に置いて超過の幅を表す well の用法（well over a million / well above average / well before the deadline）。',
        'highly が掛かるのは、highly effective / highly unlikely / highly skilled のように性質の度合いを持つ形容詞・分詞と、value / recommend / regard のように評価そのものを表す動詞。over sixty thousand dollars は評価の度合いを持たない数量表現なので、highly が測れる対象にならない。',
        'strongly は働きかけや立場の強さを測る副詞で、動詞・分詞（strongly recommend / strongly opposed / strongly worded）のほか、態度を表す前置詞句にも掛かる（strongly against the merger / strongly in favor of the plan）。前置詞句に掛かること自体はあるが、測っているのは賛否の強さで、over sixty thousand dollars は数量であって強弱の目盛りを持たない。空所は前置詞 to の目的語の内側なので、動詞 came に掛ける読みも取れない。',
        'readily は動詞を修飾して「いやがらずに、快く」（readily agreed / readily accepted）、分詞・形容詞を修飾して「容易に、すぐに」（readily available / readily apparent）を表す副詞。どちらの用法も動詞句か叙述語に掛かるもので、数量表現を前から修飾する用法はない。'],
    ja: '運賃と据え付け費を含めると、交換用コンベヤーの費用は 6 万ドルを大きく超えたため、工場長はその申請を承認のため本社へ送った。',
    v: [['come to', '（合計が）〜になる'], ['well over', '〜を大きく上回って']],
  }),

  /* id は adv-06r（stem・選択肢とも差し替えたため新規採番）。旧 adv-06
     「The prototype is ------- complete; only the housing and the labeling remain.」は
     誤答 hardly / scarcely を「only ... remain（残っているのは 2 点だけ）」との意味の衝突でしか
     切れていなかった。この含意は取り消し可能で、... only the housing and the labeling remain,
     but those are the two biggest jobs. と続ければ hardly complete のまま成立する。
     adv-05 と同じ「肯定の副詞 vs 否定の副詞を単文の意味で選ばせる」型＝閉じられない型に当たるため、
     副詞が従える補語の前置詞で切れる型に作り替えた。空所の後ろの of each other は動詞 reviewed が
     要求するものではなく（reviewed の目的語は the branch accounts で既に埋まっている）、
     名詞に掛ける読み（the branch accounts of each other＝互いの帳簿）も名詞と後置の of 句の間に
     副詞を挟めないので位置的に立たない。したがって of を従えられるのは空所の副詞そのものしかない。
     4 つとも「別々に」という近い意味を持たせてあり、意味では選べない（意味で選べてしまうと
     また「意味の推論で切る」型に戻る）。adv-05r3 は「前置詞の目的語の内側という位置」で
     切っているので、判断過程は重ならない。

     監査時に誤答 3 つの実在を確認した記録（次に見る者が引き直さなくて済むように残す）。
     辞書：separately は OALD が separately from somebody/something を型として立項、
     LDOCE は separately from other liabilities、Collins は [Also + from]。
     apart は LDOCE が apart from を立項（We were standing a few feet apart from each other.）、
     Collins も [+ from]（... lived just 25 miles apart from each other.）。
     individually は OALD・Collins・Random House とも「1 個ずつ／まとめてでなく」の語義のみで
     補語の型を持たない。independent(ly) だけが of の枠を持つ（LDOCE・OALD・Collins・
     American Heritage の 4 辞書）。
     用例：英語版 Wikipedia の insource 完全一致で independently of each other 764 件に対し
     separately of each other 1 件・individually of each other 0 件・apart of each other 5 件
     （5 件はすべて「six hours apart of each other」型で、本問の型ではない）。
     Google Books ngram（1990-2019 平均）でも separately of each other は
     independently of each other の 0.17%、individually of each other は 0.02%、
     apart of each other は 0.25% で、いずれも誤記・非母語話者由来の雑音水準。
     ただし separately of は皆無ではなく、19 世紀の米法廷文（Lewis v. United States, 1892 の反対意見
     「each separately of the other」）に古い用例がある。そのため解説では
     「of は取れない」という否定形ではなく「相手を示す席を占める前置詞は from」という
     肯定形の規則で書いてある。 */
  q('adv-06r', {
    t: ['adv'], lv: 3,
    s: 'The two auditors reviewed the branch accounts ------- of each other, and their final figures matched exactly.',
    c: ['separately', 'independently', 'individually', 'apart'],
    a: 1,
    e: '空所の後ろに of each other が置かれている。この of 句が掛かれる先は 3 つしかない。動詞 reviewed は of を取らず、目的語も the branch accounts で既に埋まっている。名詞に掛ける読み（the branch accounts of each other＝互いの帳簿）は、名詞とその後置の of 句の間に副詞を挟めないため位置的に立たない。残るのは空所に入る副詞そのもので、判定は「その副詞が of を補語に取るか」の一点に絞られる。of で「無関係である相手」を示す枠を持つのは independent 系で、LDOCE・OALD・Collins・American Heritage がそろって independent of somebody/something を型として立項し、LDOCE は副詞の例に The two departments operate independently of each other.、OALD は independently (of somebody/something) の見出しで The two departments work independently of each other. を挙げている。4 つとも「別々に」という近い意味だが、決め手は意味ではなく後ろに続けられる前置詞。',
    w: ['separately が「何から離して」の相手を示すとき、その席を占める前置詞は from。OALD は separately from somebody/something という型そのものを見出しに立て（That matter will be considered separately from the main agenda.）、LDOCE も Debt should be stated on the balance sheet separately from other liabilities.、Collins も [Also + from] と付ける。この文が必要としているのは of each other をそのまま受けられる語なので、from を要求する separately では受けられない。',
        '正解。independently of ...「〜とは無関係に、〜から独立して」。形容詞 independent が of で「無関係である相手」を取る型（Collins は independent に [+ of] を付け Your questions should be independent of each other. を挙げる）を副詞がそのまま受け継ぐ。4 つのうち、後ろの of each other を補語として受けられるのはこの語だけ。',
        'individually が答えるのは「まとめて扱うか、1 個ずつ扱うか」という扱いの単位で（OALD は「separately, rather than as a group」と定義し individually wrapped chocolates を挙げる。individually numbered / assessed individually も同型）、意味を完成させるのに基準となる相手が要らない。相手を明示したければ前置詞ごと別の語に替える必要があり（independently of ... / separately from ...）、individually 自体は補語を取らずに 1 語で完結する副詞。',
        'apart が「離れている相手」を示すときも、その席を占めるのは from。LDOCE は apart from を型として立項し（He’s never been apart from his mother. / We were standing a few feet apart from each other.）、Collins も [+ from] を付けて Ray and sister Renee lived just 25 miles apart from each other. を挙げる。six metres apart のように幅を前に置く形は持つが、相手を導く位置には from が入る。'],
    ja: '2 人の監査人は互いに独立して支店の会計帳簿を精査し、最終的な数字は完全に一致した。',
    v: [['independently of', '〜とは無関係に、〜から独立して'], ['auditor', '監査人'], ['branch', '支店']],
  }),

  /* id は adv-07r（stem を差し替えたため新規採番）。旧 stem は「Attendance figures have risen
     ------- since the venue introduced discounted evening tickets.」で、増加の幅を示す情報が
     どこにも無く、marginally / moderately を入れても完全に正しい英文になった（第二の正解）。
     コロン以下に増加幅を明示し、程度の副詞を数値で選べる形にした。 */
  q('adv-07r', {
    t: ['adv'], lv: 4,
    s: 'Attendance figures have risen ------- since the venue introduced discounted evening tickets: nightly turnout has more than doubled.',
    c: ['markedly', 'marginally', 'moderately', 'mildly'],
    a: 0,
    e: 'コロン以下が「1 晩あたりの入場者数は 2 倍以上になった」と増加幅を明示している。4 つとも程度の副詞だが、この幅を表せるのは markedly「著しく、目立って」だけ。',
    w: ['正解。markedly は「はっきり目に見えるほど大きく」。2 倍超という後半の数値がその大きさを裏づける。',
        'marginally は「ごくわずかに」。2 倍以上という後半の数値と正面から食い違う。',
        'moderately は LDOCE が「fairly, but not very」と定義する語で、moderately successful / moderately well のように「そこそこだが大きくはない」程度を表す。コロンは前半を数字で言い換える働きをしており、2 倍超という幅は「大きくはない」に収まらない。',
        'mildly は「穏やかに、軽度に」。程度が小さいことを表すので、2 倍超の増加と食い違う。'],
    ja: '会場が夜間割引券を導入して以来、来場者数は著しく増加している。1 晩あたりの入場者数は 2 倍以上になった。',
    v: [['markedly', '著しく'], ['turnout', '入場者数、人出']],
  }),

  /* id は adv-08r（選択肢を差し替えたため新規採番）。旧選択肢 closely は
     closely comparable（「細部まで似ている」）が学術文で実際に使われる組み合わせで、
     not closely comparable もそのまま成立するため第二の正解になっていた。 */
  q('adv-08r', {
    t: ['adv'], lv: 4,
    s: 'The two studies used different sampling methods and are therefore not ------- comparable.',
    c: ['directly', 'shortly', 'lately', 'hardly'],
    a: 0,
    e: '「手法が違うので直接には比較できない」という文意。directly は「間に何も介さずに」の意味で、そのまま突き合わせられるかどうかを限定する。not directly comparable は学術・報告文書の定型。',
    w: ['正解。「直接には」。手法の違いを理由に「そのまま突き合わせることはできない」と限定する。',
        '「まもなく」。未来の時点を示す時の副詞で、現在の状態を述べる are comparable の程度を限定できない。',
        '「最近」。現在完了などと共に期間を示す時の副詞で、形容詞 comparable を修飾できない。',
        '否定の副詞。not と重ねた not hardly は二重否定になり、標準英語では成立しない形。'],
    ja: 'その 2 つの研究は異なる標本抽出法を用いているため、直接比較することはできない。',
    v: [['sampling method', '標本抽出法'], ['comparable', '比較可能な']],
  }),
];
