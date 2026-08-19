/* =============================================================
   drills/vocab3.js — 語彙・語法（コロケーション／動詞の語法 増補）
   colloc（コロケーション）と vusage（動詞の語法）の 2 論点を
   900 帯向けに補充する。書式・解説の厚みは vocab.js に合わせた。
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
  /* 旧 id は colloc3-01。誤答に release を置いていたが、release には「（保留していた金銭を）
     支払えるようにする」の語義があり（LDOCE の business 項目に release the money for grants）、
     release a full refund to all affected customers が第二の正解になっていた。選択肢を
     差し替えたので id を新規採番している。 */
  q('colloc3-01r', {
    t: ['colloc'], lv: 3,
    s: 'Due to the manufacturing defect, the company agreed to ------- a full refund to all affected customers.',
    c: ['issue', 'reimburse', 'compensate', 'publish'],
    a: 0,
    e: 'refund は「交付されるもの」で、issue a refund / issue a statement / issue a permit のように issue の目的語になる。他の 3 語はそれぞれ目的語に取れる名詞の種類が決まっており、refund はそのどれにも属さない——reimburse は払い戻しを受ける「人」かその人が支出した費用を、compensate は補償を受ける「人」を（損害・費用の側は for + 名詞）、publish は「公表される情報・出版物」を目的語に取る。',
    w: ['正解。issue a full refund to somebody。issue は正式に交付するもの（refund / statement / permit / invoice）を目的語に取る。',
        'reimburse の目的語は払い戻しを受ける人か、その人が支出した費用（reimburse the customers / reimburse the shipping costs）。OALD は reimburse something to somebody の型も立てるが、その something は「相手が支出した金額」であって、払い戻しという行為そのものを指す refund は入らない。',
        'compensate が前置詞なしで取る目的語は補償を受ける人（compensate the customers for the delay）で、補償の理由となる損害・費用は for + 名詞で示す。LDOCE は語法欄で Nothing can compensate this loss.（→ compensate for this loss）、We will compensate you your expenses.（→ compensate you for your expenses）を誤用として挙げ、金銭や損害を直接目的語に置く型が無いことを明示している。a full refund も同じ理由で目的語にならない。',
        'publish の目的語は公表される情報や出版物（publish a report / publish the findings）。refund は情報ではなく支払いなので目的語にならない。'],
    ja: '製造上の不具合があったため、その会社は影響を受けたすべての顧客に全額返金することに同意した。',
    v: [['defect', '欠陥'], ['affected', '影響を受けた']],
  }),

  /* 旧 id は colloc3-02 → colloc3-02r。旧 stem（... to ------- capital from private investors ...）は
     capital from private investors を一つの名詞句として読めるため increase capital「資本を増やす」が
     成立し、第二の正解になっていた。目的語を金額に変えた colloc3-02r でも increase は閉じきれない。
     Google Books で increased $ [数] million は raised $ [数] million の 74%、to increase $ [数] million
     も to raise $ [数] million の 8.6% あり、Revenues increased $12 million のように金額が動詞の直後に
     立つ型（自動詞＋差分の測度句）が広く実在するため、「増加分の金額は by でしか示せない」という
     排除理由は学習者に反例を出されてしまう。increase を外し、金額を後続させる型が Google Books に
     1 件も無い strengthen に差し替えた。boost・expand は確認済みで安全（boosted $ [数] million は
     raised $ [数] million の 0.19%、expanded は 0.46% でいずれも雑音水準。to boost / to expand
     $ [数] million は 0 件）。gather / collect は collect capital from が実在する（raise capital from の
     約 3%）ため引き続き不採用。選択肢を差し替えたので id を新規採番している。 */
  q('colloc3-02r2', {
    t: ['colloc'], lv: 3,
    s: 'The startup plans to ------- $8 million in additional capital from private investors before entering the European market.',
    c: ['expand', 'raise', 'strengthen', 'boost'],
    a: 1,
    e: '空所の目的語は $8 million in additional capital という「調達される金額」。金額そのものを目的語に置き、出し手を from で示せるのは raise で、LDOCE も「to collect money」の語義に The Trust hopes to raise $1 million to buy land. を挙げている（raise capital / raise funds / raise $8 million from private investors）。expand / strengthen / boost が目的語に取るのは大きく・強くなる対象の側（事業・規模・資本基盤・売上）で、増える分の金額は by の位置に置く（boost output by 20 percent）。金額そのものを目的語にする型を持たないため、この 3 語はこの位置に入らない。',
    w: ['expand の目的語は規模を広げる対象そのもの（expand the business / expand its capacity / expand the product line）。$8 million in additional capital は広げられる対象ではなく調達される金額なので、目的語に置けない。',
        '正解。raise $8 million in additional capital。LDOCE は raise を「（資金を）集める」の語義で立項し、The Trust hopes to raise $1 million to buy land. のように金額をそのまま目的語に取る。出し手は from + 提供者で示す（raise capital from private investors）。',
        'strengthen の目的語は強くする対象の側（strengthen the economy / strengthen its capital base / strengthen ties）。LDOCE が全語義で挙げる目的語も、関係・決意・組織・経済・通貨・身体・建物・論拠であって、調達する金額は一つも含まれない。金額を言うなら strengthen its capital base by raising $8 million のように別の動詞に預けることになる。',
        'boost も目的語は増やす対象の側（boost sales / boost profits / boost morale）。増加分は by で示し、LDOCE の例も Profits last year were boosted by £69m of interest savings. と by の位置に金額を置く。$8 million in additional capital をそのまま目的語には取れない。'],
    ja: 'そのスタートアップは、欧州市場に参入する前に、民間投資家から追加で 800 万ドルの資金を調達する計画である。',
    v: [['capital', '資本、資金'], ['private investor', '民間投資家']],
  }),

  /* 旧 id は colloc3-03 → colloc3-03r → colloc3-03r2。colloc3-03r（refused to ------- the warranty、
     選択肢 comply / honor / adhere / notify）は vocab.js の colloc-06r2（failed to ------- the terms
     of the … agreement、選択肢 comply / conform / adhere / observe）と、論点・level・意味場
     （契約系の名詞を守る／履行する）・閉じ手（前置詞が必須の自動詞）が一致し、誤答も comply と
     adhere の 2 つが同じだった。colloc ドリルは両ファイルから出題されるので、同一セッションで
     実質同じ弁別を 2 回引くことになる。閉じ手を「目的語の意味クラス」に、意味場を「組織に態度を
     根づかせる」に移して作り直した。正解位置（B）と level（4）は据え置き、stem・選択肢とも
     入れ替わったので id を新規採番している。
     4 語の目的語クラスは LDOCE で相互に排他: instil＝植えつける気持ち・価値観（+ in/into 人）、
     institute＝新しく始める制度・手続き・訴訟、inspect＝点検して確かめる物・場所、
     instruct＝指示・指導を受ける人。Google Books（en-2019, 1990-2019）でも
     instill a sense of urgency は 1.9e-09 で実在し、institute / instruct / inspect +
     a sense of urgency はいずれも 0 件（近義の establish a sense of urgency 2.1e-09、
     create a sense of urgency 1.8e-08 は実在するので、institute が落ちるのは意味の不自然さでは
     なく語彙的な共起制限）。eggcorn の install a sense of は instill の 1.8% 出るため
     選択肢に入れていない。

     監査で独立に引き直した記録（次に見る者が引き直さなくて済むように残す）。
     辞書：LDOCE の institute は「to introduce or start a system, rule, legal process etc」の
     1 語義のみで、例も court proceedings / a companywide program / reforms / a student-testing
     program と制度・手続きの側に限られる。Random House（to set up; establish; organize —
     instituting a government）と Collins（to organize; establish / to initiate）が establish で
     言い換えるのも同じ語義で、目的語は government・laws・a practice。「気持ちを人に根づかせる」の
     語義はどの辞書にも無い。Wiktionary が載せる「to train, instruct」は obsolete（c. 1684）。
     用例：Google Books（en-2019, 1990-2019）で institute a sense of urgency は 5-gram 0 件。
     institute a sense of community / order / belonging / responsibility / duty / pride も
     すべて 0 件で、4-gram の institute a sense of だけが 1e-10 前後（instill a sense of
     4.4e-08 の 0.2〜0.3%）出る——どの目的語も 5-gram の収録閾値に届かない散り方。
     英語版 Wikipedia の insource 完全一致でも institute a sense of urgency は 0 件、
     institute a sense of は 1 件のみで、それも「institute a sense of character into his team」と
     into を取っており instill の言い誤り。instill a sense of urgency は 4 件。 */
  q('colloc3-03r2', {
    t: ['colloc'], lv: 4,
    s: 'The incoming operations director hopes to ------- a sense of urgency in the maintenance crews before the busiest quarter of the year begins.',
    c: ['institute', 'instill', 'inspect', 'instruct'],
    a: 1,
    e: '空所の目的語は a sense of urgency、つまり人の中に育てる心構え。この種の「気持ち・価値観・習慣」を目的語に取り、それを受け取る相手を in / into で示すのが instill（LDOCE: instil confidence/fear/discipline etc into somebody、We have tried to instil good manners in our children from an early age.）。残る 3 語も目的語を直接取る他動詞だが、取れる名詞の種類がそれぞれ別で——institute は新しく始める制度・手続き・訴訟、inspect は点検して確かめる物・場所、instruct は指示・指導を受ける人——a sense of urgency はそのどれにも属さない。',
    w: ['institute の目的語は新しく始められる制度・手続き・法的手続き。LDOCE は「to introduce or start a system, rule, legal process etc」と定義し、institute court proceedings / institute a companywide program / institute reforms / institute a number of cost-cutting measures を挙げる。a sense of urgency は導入される仕組みではなく人の側に育つ心構えなので、この目的語には立たない。制度の側を言うなら institute a new shift rotation のようになる。',
        '正解。instill a sense of urgency in somebody。instill は植えつける気持ち・価値観・習慣を目的語に取り（instill confidence / instill discipline / instill pride / instill a sense of responsibility）、それを受け取る相手を in / into で示す。',
        'inspect の目的語は、現物を当たって状態を確かめる物・場所・設備・書類。LDOCE が両語義に挙げる例も inspect the damage / inspect the building / inspect the troops / All trucks coming through are inspected. と、すべて出向いて当たれる対象。a sense of urgency は人の側に育つ心構えで、当たって状態を確かめられる現物ではないため、この目的語の位置には立たない。',
        'instruct が前置詞なしで取る目的語は指示・指導を受ける人で、させたい行為は to 不定詞、教える内容は in + 名詞で続ける（instruct the crew to report faults immediately / instruct somebody in road safety）。教える内容の側を目的語に置く型を持たないため、a sense of urgency をそのまま続けられない。'],
    ja: '新任の業務部長は、一年で最も忙しい四半期が始まる前に、整備班に緊迫感を植えつけたいと考えている。',
    v: [['a sense of urgency', '緊迫感、切迫感'], ['maintenance crew', '整備班']],
  }),

  /* 旧 id は colloc3-04。誤答 hit はどの辞書にも hit a balance の立項が無いものの、実際の英文には
     hit the right balance が現れるため「不可能」とは言えず外した。同時に form も、同義の
     create a balance between が編集された英文に広く実在するため（Google Books で strike a
     balance between の 7% 前後）、create の類推で通る恐れがあるとみて外した。
     代わりに自動詞の strive（LDOCE は [intransitive]、American Heritage は intr.v. と明記。
     strive for / strive to do。M-W と Collins は 403 で一次確認できていないので名指ししていない）
     と、目的語の種類が辞書で限定されている pose を入れ、構造と共起の両面で閉じてある。
     Google Books（en-2019, 1990-2019）でも strike a balance between 2.7e-07 に対し
     strive a balance between 4.5e-11、pose a balance between 0 件、meet a balance between 7.9e-11 で
     いずれも雑音水準（meet a balance 1.2e-09 の大半は meet a balance of …「差引残高を支払う」の
     会計用法で、between A and B を伴う「釣り合い」の語義ではない）。
     選択肢を差し替えたので id を新規採番している。 */
  q('colloc3-04r', {
    t: ['colloc'], lv: 4,
    s: 'The new policy attempts to ------- a balance between employee flexibility and operational consistency.',
    c: ['strive', 'pose', 'strike', 'meet'],
    a: 2,
    e: 'strike a balance (between A and B)「A と B の間で釣り合いを取る」は、LDOCE が例文に挙げる形（It is necessary to strike a balance between the needs of employers and employees.）。LDOCE のコロケーション欄もこの意味の balance と組む動詞として strike / achieve / find / keep / maintain / upset / redress を並べており、目的語に取れる動詞は限られる。strive は自動詞で目的語を直接取れず、pose と meet はそれぞれ目的語に取れる名詞の種類が辞書で決まっていて、「二つの要求の釣り合い」はそのどちらにも属さない。',
    w: ['strive は自動詞で、目指す対象は for、目指す行為は to 不定詞で示す（strive for a balance / strive to achieve a balance）。LDOCE は [intransitive]、American Heritage は intr.v. と品詞欄で明記しており、他動詞用法を載せていない。前置詞なしで a balance を続けることはできない。',
        'pose の目的語は、相手に突きつけられる問題や問い（pose a problem / pose a threat / pose a risk / pose a question）。a balance は突きつけられる問題ではないので目的語にならない。',
        '正解。strike a balance between A and B。',
        'meet の目的語は、あらかじめ示された基準・要求・期限（meet a deadline / meet the requirements / meet the standard）か、支払うべき費用（meet the cost）。between A and B を伴う a balance は「二つの要求の釣り合い」であって、満たすべき基準でも支払う金額でもない。'],
    ja: '新方針は、従業員の柔軟性と業務の一貫性の間でバランスを取ろうとするものである。',
    v: [['flexibility', '柔軟性'], ['operational consistency', '業務の一貫性']],
  }),

  /* 旧 id は colloc3-05。draft a proposal を問うていたが、Google Books では design a proposal が
     draft a proposal の 17%、construct a proposal が 7.4%、compose a proposal が 2.8% 出現し、
     いずれもこの stem にそのまま収まる第二の正解だった（解説も「proposal とは結び付かない」と
     頻度で切っていただけで排除理由が無い）。文書を「書く・作る」系の動詞は互いに置き換わるので
     stem に情報を足しても閉じられないと判断し、設問ごと作り替えた。新版は補部構造で閉じてある——
     保険・保証が主語のとき補償対象の損害そのものを目的語に取れるのは cover だけで（LDOCE:
     Most policies cover accidental damage to pipes.）、protect / guard / shield は守られる側を
     目的語に取り損害は from / against で示す。Google Books（en-2019, 1990-2019）でも
     protects damage / guards damage / shields damage は 3-gram で 0 件（covers damage to は
     3.8e-09、covers damage caused は 5.7e-10）。原形の protect damage to だけは 1.6e-10 出るが、
     cover damage to 4.8e-09 の 3.4% で、LDOCE・Oxford のどの語義にも「損害の側を目的語に取る
     protect」は無く、非母語話者の誤用と見てよい水準。設問で使うのは 3 人称単数の protects で、
     その形は 0 件。id を新規採番している。 */
  q('colloc3-05r', {
    t: ['colloc'], lv: 3,
    s: 'The insurance policy ------- accidental damage to rented equipment, but not losses caused by improper storage.',
    c: ['covers', 'protects', 'guards', 'shields'],
    a: 0,
    e: '保険や保証が主語のとき、補償の対象となる損害・費用そのものを直接目的語に取れるのは cover。LDOCE は「if your insurance covers you or your possessions, it promises to pay you money ...」の語義に Most policies cover accidental damage to pipes. を挙げており、cover damage / cover the cost of repairs / cover medical expenses のように「支払ってもらえる損害・費用」が目的語に来る。protect / guard / shield が目的語に取るのは守られる側（人・物）で、脅威となる損害の側は from / against で示す型しか持たない。damage は守られる対象ではないので、この 3 語の目的語の位置には入らない。',
    w: ['正解。cover accidental damage / cover the cost of repairs / cover medical expenses。保険・保証が「〜を補償の対象に含む」を表す型で、LDOCE も Most policies cover accidental damage to pipes. を例示している。',
        'protect の型は protect somebody/something from/against something で、目的語は守られる側（LDOCE: The cover protects the machine from dust.）。LDOCE は保険会社を主語にする語義も別に立てているが（if an insurance company protects your home, car, life etc, it agrees to pay you money if things are stolen or damaged）、そこでも目的語は保険をかけた家・車・命の側であって、支払われる損害の側ではない。この文意を出すなら protect the equipment against accidental damage と、守られる物を目的語に置くしかない。',
        'guard も目的語は守る対象（guard the entrance / guard a secret）で、防ぐ相手は against で示す（guard something against attack / guard against damage）。損害そのものを目的語には置けない。',
        'shield も型は shield somebody/something from something で、目的語は守られる側（shielding his eyes from the sun / shield firms from foreign competition）。damage を直接続けることはできない。'],
    ja: 'その保険は、借りた機材への偶発的な損傷は補償するが、不適切な保管によって生じた損失は対象としない。',
    v: [['accidental damage', '偶発的な損傷'], ['improper storage', '不適切な保管']],
  }),

  q('colloc3-06', {
    t: ['colloc'], lv: 4,
    s: 'Supervisors are expected to ------- discretion when handling employee grievances.',
    c: ['perform', 'exercise', 'conduct', 'administer'],
    a: 1,
    e: 'discretion（裁量＝与えられた判断の権限）を目的語に取れる動詞は、権限・判断力の行使を表す exercise と use に限られる。perform / conduct / administer はそれぞれ目的語に取れる名詞の種類が決まっており、discretion はそのどれにも属さない。',
    w: ['perform が目的語に取るのは、実際に遂行される行為・任務・機能（perform a task / a duty / an operation / a function）。discretion は行為ではなく判断の権限なので遂行の対象にならない。',
        '正解。exercise discretion / exercise caution / exercise judgment / exercise authority。権限・判断力を「行使する」型の動詞。',
        'conduct が目的語に取るのは、手順を組んで実施する活動（conduct a survey / an experiment / an interview / business）。discretion は実施される活動ではない。',
        'administer が目的語に取るのは、施す・執行する対象（administer medication / a test / an oath / justice / an estate）。discretion は誰かに施すものではない。'],
    ja: '管理職は、従業員の苦情に対応する際には裁量を働かせることが求められる。',
    v: [['discretion', '裁量'], ['grievance', '苦情']],
  }),

  q('colloc3-07', {
    t: ['colloc'], lv: 4,
    s: 'The spokesperson was well prepared to ------- questions from reporters after the announcement.',
    c: ['field', 'grasp', 'catch', 'seize'],
    a: 0,
    e: 'field a question「（次々に来る質問を）受けてさばく」が定型で、field は投げかけられて対応を迫られるもの（question / call / complaint / inquiry）を目的語に取る。grasp / catch / seize はどれも「つかむ」系だが、目的語に取れるものの種類がそれぞれ決まっており、「対応すべき質問」はそのどれにも属さない。',
    w: ['正解。field a question / field a call / field a complaint。記者会見で質問をさばく文脈の定型。',
        'grasp の目的語は、理解の対象となる概念か、手で握る物（grasp the concept / grasp the significance / grasp the handle）。grasp a question は「質問の趣旨を理解する」であって、質問に答えて対応する意味は持たない。',
        'catch の目的語は、動いているものを受け止める・捕らえる対象（catch a ball / catch a train / catch a cold）。「聞き取る」の語義（I could not catch your name）もあるが、それは聞こえたかどうかの話で、質問への対応は表さない。',
        'seize の目的語は、力ずくで奪う対象か、逃せば消える機会（seize control / seize the documents / seize an opportunity）。'],
    ja: 'その広報担当者は、発表後に記者からの質問に対応する準備ができていた。',
    v: [['spokesperson', '広報担当者'], ['announcement', '発表']],
  }),

  q('colloc3-08r', {
    t: ['colloc'], lv: 5,
    s: 'To ensure impartiality, the board voted to ------- an outside firm to review the incident.',
    c: ['transfer', 'commission', 'outsource', 'refer'],
    a: 1,
    e: '空所の直後が an outside firm（依頼先）＋ to review（依頼内容）なので、「依頼先そのものを目的語に取り、依頼内容を to 不定詞で示す」型を持つ動詞でなければならない。commission an outside firm to review ... がその型。transfer / outsource / refer はいずれも移す・任せる「案件」の側を目的語に取り、相手は to + 名詞 で示す型しか持たないため、この語順には入らない。',
    w: ['transfer が目的語に取るのは移される側（案件・権限・人員）で、移す先は to + 名詞 で示す。transfer the review to an outside firm の形であって、依頼先を目的語に置いて to do を続ける型は LDOCE にも立項が無い。an outside firm を transfer の目的語として読むこと自体はできるが、その場合 transfer は「社外の企業をどこかへ移す」の意味になり、to review 以下は目的を表す副詞句にしかならないため、「調査を依頼する」という文意を作れない。',
        '正解。commission + 依頼先 + to do（Macmillan commissioned her to illustrate a book）。commission a study のように成果物を目的語に取ることもできる。',
        'outsource は委託する仕事の側を目的語に取る（outsource the review to an outside firm）。委託先を目的語にすることはできない。',
        'refer も案件の側を目的語に取る（refer the matter to an outside firm）。refer + 人 + to + 人・機関（refer a patient to a specialist）の型はあるが、to の後は名詞で to do は続かない。'],
    ja: '公正さを確保するため、取締役会はその件の調査を社外の企業に依頼することを議決した。',
    v: [['impartiality', '公正さ'], ['incident', '事案']],
  }),

  /* 旧 id は colloc3-09 → colloc3-09r。目的語が expenses である限り、collect は「（顧客などから）
     徴収する」で成立してしまう（collect expenses は Google Books に実在する）。colloc3-09r は
     関係詞節 that could not be passed on to the customer で費用の負担者を確定させて切っていたが、
     これは「誰が払ったか」という状況の推論による排除で、読み手が別の徴収先（運送業者・保険会社）を
     補えば開いてしまう。目的語を LDOCE が incur の共起表現として明示している somebody's displeasure に
     変え、acquire / gather / collect のどれとも共起しない名詞で閉じた（acquire the displeasure /
     collect the wrath / gather the displeasure はいずれも Google Books に 1 件も無い）。
     stem と選択肢を差し替えたので id を新規採番している。 */
  q('colloc3-09r2', {
    /* lv は 5 → 4。level の判定軸「落とすとしたら何を知らなかったからか」で見ると、決め手は
       displeasure と共起する動詞を知っているかどうか＝自明でないコロケーションで lv4。
       lv5 の基準 (b)（誤答の少なくとも 1 つが単独では正しい英語で、離れた位置の構造・論理でのみ
       排除される）は満たさない——acquire / gather / collect は空所の直後の目的語との共起だけで、
       つまり隣接位置で落ちる。基準 (a) の「法務・財務の書き言葉」にも incur は当たらない
       （incur costs は 800 帯の教師が知っている語）。 */
    t: ['colloc'], lv: 4,
    s: 'By announcing the restructuring before consulting the regional offices, the chief executive ------- the displeasure of several longtime shareholders.',
    c: ['acquired', 'gathered', 'incurred', 'collected'],
    a: 2,
    e: 'incur は「自分の行いの結果として、望ましくないものを身に招く」を表す他動詞。LDOCE は incur expenses / costs / losses / debts と並べて incur somebody\'s displeasure / wrath / disapproval を共起表現として挙げている。acquire / gather / collect はいずれも「自分の側に取り込む・集める」方向の動詞で、目的語に取れるのは手に入れる価値のあるもの・散らばった物や情報・受け渡される金銭や賞であり、相手の側に生じる感情はそのどれにも属さない。',
    w: ['acquire の目的語は、取引や努力の結果として自分のものになる価値あるもの、または身につく技能・習慣・評判（acquire a company / acquire a skill / acquire a reputation）。displeasure は相手の側に生じる感情で、自分のものになる取得物ではない。',
        'gather が名詞句を目的語に取るのは「散らばっているものを一か所に集める」意味のとき（gather information / gather evidence / gather a crowd）。「〜だと察する」の語義も LDOCE は他動詞として立項しているが、そこで目的語になるのは that 節か、それを受ける so much / as much / what（I gather that the meeting was canceled／from what I can gather）であって、相手の感情を名指しした名詞句は取らない。',
        '正解。incur somebody\'s displeasure / wrath / disapproval。LDOCE が incur の項に挙げる共起表現で、「自分の行いの報いとして招く」の意味。',
        'collect の目的語は、他者から取り立てる金銭（collect fees / collect rent / collect taxes）、集めて回る物やデータ（collect data / collect samples）、または手渡される賞・賞金（collect an award）。いずれも受け渡しのある物であって、相手の感情は含まれない。'],
    ja: '地域事務所に相談せずに組織再編を発表したことで、その最高経営責任者は長年の株主数名の不興を買った。',
    v: [['restructuring', '組織再編'], ['displeasure', '不興、不快感'], ['longtime shareholder', '長年の株主']],
  }),

  q('colloc3-10', {
    t: ['colloc'], lv: 5,
    s: 'The board will ------- a special session to address the safety complaints raised last week.',
    c: ['gather', 'convene', 'assemble', 'collect'],
    a: 1,
    e: 'convene a session「会合を招集する」が定型で、convene は「人を集めて開く催しそのもの」（meeting / session / panel / conference）を目的語に取る。gather / assemble / collect が目的語に取るのは集められる側の人・物・データであって、開催される催しではない。',
    w: ['gather の目的語は集められる側の人や物（gather the staff / gather the documents）。会合という催しを目的語にする用法は無い。',
        '正解。convene a meeting / convene a session / convene a panel。招集の意味では call a special session とも言える。',
        'assemble の目的語も集められる側の人・部品（assemble a team / assemble the parts）。自動詞では「（人が）集まる」で、この場合も a special session は目的語にならない。',
        'collect の目的語は集めて回る物・データ・取り立てる料金（collect data / collect fees）。'],
    ja: '取締役会は、先週提起された安全上の苦情に対応するため、臨時会合を招集する予定である。',
    v: [['convene', '招集する'], ['address', '対処する']],
  }),

  q('colloc3-11', {
    t: ['colloc'], lv: 3,
    s: 'New clients are expected to ------- their first invoice within fourteen days of receipt.',
    c: ['settle', 'redeem', 'close', 'balance'],
    a: 0,
    e: 'settle an invoice「請求を決済する」が定型。redeem は voucher / coupon に、close は account に、balance は the books / an account に使い、invoice とは結び付かない。',
    w: ['正解。settle an invoice / settle a bill / settle an account。',
        'redeem は redeem a voucher / redeem a coupon。invoice には使わない。',
        'close は close an account。invoice には使わない。',
        'balance は balance the books / balance an account。'],
    ja: '新規のお客様は、請求書受領から 14 日以内に最初のご請求をお支払いいただくことになっています。',
    v: [['invoice', '請求書'], ['receipt', '受領']],
  }),

  /* ══ 動詞の語法 ═════════════════════════════════════ */
  q('vusage3-01', {
    t: ['vusage'], lv: 4,
    s: 'The consignment is expected to ------- the Southampton terminal by Thursday morning.',
    c: ['arrive', 'reach', 'get', 'come'],
    a: 1,
    e: 'reach は他動詞で目的語を直接取る「〜に到着する」。arrive は arrive at / arrive in、get は get to、come は come to と、いずれも前置詞が必要。',
    w: ['arrive at が必要。目的語を直接取れない。',
        '正解。reach + 場所（他動詞）。',
        'get to が必要。',
        'come to が必要。'],
    ja: 'その貨物は木曜日の朝までにサウサンプトンのターミナルに到着する見込みである。',
    v: [['consignment', '貨物'], ['terminal', 'ターミナル']],
  }),

  q('vusage3-02', {
    t: ['vusage'], lv: 4,
    s: 'Could you ------- the refund policy to the new hires before their first shift?',
    c: ['explain', 'warn', 'inform', 'discuss'],
    a: 0,
    e: '空所の直後が the refund policy（事）で、その後ろが to the new hires（相手）。この語順を取れるのは explain + 事 + to + 人 の型だけ。warn / inform は相手の側を目的語に取る動詞、discuss は相手を with で示す動詞で、いずれも「事 + to + 人」の並びを作れない。',
    w: ['正解。explain + 事 + to + 人。tell と違い explain 人 事 の二重目的語は取らない。',
        'warn は知らせる相手を目的語に取り、内容は of / about / that で導く（warn the new hires about the policy）。事を目的語の位置に置くことはできない。',
        'inform も相手を目的語に取り、内容は of / about で導く（inform the new hires of the policy）。inform + 事 + to + 人 という型は無い。',
        'discuss は事を目的語に取れるが、話す相手は with で示す（discuss the policy with the new hires）。discuss に to + 人 を続ける型は無く、to the new hires が係る先を失う。'],
    ja: '初出勤の前に、返金規定を新入社員に説明していただけますか。',
    v: [['refund policy', '返金規定'], ['new hire', '新入社員']],
  }),

  q('vusage3-03', {
    t: ['vusage'], lv: 5,
    s: 'The technician ------- the client that the replacement part would arrive within 48 hours.',
    c: ['ensured', 'confirmed', 'insured', 'assured'],
    a: 3,
    e: '空所の直後が the client（人）＋ that 節。「人を目的語に取り、その人に伝える内容を that 節で示す」型（V + 人 + that 節）を持つのは assure だけ。ensure / confirm / insure はいずれもこの語順を作れない。',
    w: ['ensure が取るのは ensure (that) 節 / ensure + 事 / ensure + 人 + 物（OALD: Victory ensured them a place in the final.）の型で、人を目的語に置いて that 節を続ける ensure somebody that の型はどの主要辞書にも無い。ここは ensured that the part would arrive とするしかない。',
        'confirm の型は confirm (that) 節、または相手を to で示す confirm to somebody that ...。人を目的語の位置に置く confirm somebody that の語順は取らない。',
        'insure の中心義は「保険をかける」で、目的語は保険の対象（insure the shipment）。米用法で ensure と交替して「確実にする」を表すこともあるが、その場合も型は insure that ... であって、人を目的語に置いて that 節を続けることはできない。',
        '正解。assure + 人 + that 節（assure somebody that ...）。'],
    ja: 'その技術者は、交換部品が 48 時間以内に届くと顧客に保証した。',
    v: [['replacement part', '交換部品'], ['assure', '保証する']],
  }),

  q('vusage3-04', {
    t: ['vusage'], lv: 4,
    s: 'Ms. Kestenbaum will personally ------- every inquiry submitted through the new online form.',
    c: ['respond', 'answer', 'reply', 'react'],
    a: 1,
    e: 'answer は他動詞で、答える対象（a question / an inquiry / a letter / the phone）を直接目的語に取る。respond / reply / react は自動詞で、反応の対象を to で示す型しか持たない。that 節や引用文を続ける用法はあるが（"Yes," he replied）、名詞句を目的語として直接続けることはできない。',
    w: ['respond は自動詞。反応の対象は to で示す（respond to every inquiry）。',
        '正解。answer every inquiry / answer a question / answer the phone。',
        'reply も自動詞で reply to が必要。他動詞用法は reply that ... と引用文に限られ、名詞句を目的語に取れない。',
        'react も自動詞で、反応の対象は to で示す（react to the announcement）。'],
    ja: 'ケステンバウム氏は、新しいオンラインフォームから送られたすべての問い合わせに自ら回答する。',
    v: [['inquiry', '問い合わせ']],
  }),

  q('vusage3-05', {
    t: ['vusage'], lv: 4,
    s: 'The committee ------- of seven elected members and two advisors.',
    c: ['comprises', 'includes', 'consists', 'contains'],
    a: 2,
    e: '空所の直後が of なので、構成要素を of で示す自動詞が要る。consist はその型（consist of ...）。comprise / include / contain はいずれも他動詞で、構成要素を直接目的語に取るため of を挟めない。',
    w: ['comprise は他動詞で、The committee comprises seven elected members. のように of を挟まない。受動形の be comprised of は辞書にも立項があるが（The committee is comprised of ...）、ここは能動の comprises なので of は続かない。',
        'include も他動詞で of を伴わない。加えて include は全体の一部を挙げる語なので、構成のすべてを示すこの文には合わない。',
        '正解。consist of。自動詞なので of が必須。',
        'contain も他動詞で of を伴わない（The report contains three sections.）。'],
    ja: 'その委員会は、選出された 7 名の委員と 2 名の顧問から成る。',
    v: [['elected member', '選出された委員'], ['advisor', '顧問']],
  }),

  q('vusage3-06', {
    t: ['vusage'], lv: 3,
    s: 'All department heads are required to ------- the quarterly planning session in person.',
    c: ['participate', 'attend', 'take part', 'attend to'],
    a: 1,
    e: 'attend は他動詞で目的語を直接取る「〜に出席する」。participate / take part はいずれも in を伴う。attend to は「〜の世話をする、対処する」で意味が異なる。',
    w: ['participate in が必要。',
        '正解。attend + 行事（他動詞）。',
        'take part in が必要。',
        'attend to は「対処する」の意味。出席するの意味にはならない。'],
    ja: 'すべての部門長は、四半期計画会議に直接出席することが求められている。',
    v: [['department head', '部門長'], ['in person', '直接、対面で']],
  }),

  q('vusage3-07', {
    t: ['vusage'], lv: 4,
    s: 'The organizers plan to ------- several local businesses about sponsoring next year\'s festival.',
    c: ['reach out', 'talk', 'approach to', 'approach'],
    a: 3,
    e: 'approach は他動詞で、働きかける相手を直接目的語に取り、用件は about で示す（approach somebody about something）。reach out と talk は自動詞で、相手を to / with で示す型しか持たない。approach に to が付くのは名詞のとき（a new approach to fundraising）で、動詞の位置では前置詞を挟めない。',
    w: ['reach out は自動詞句で、働きかける相手は to で示す（reach out to several local businesses）。',
        'talk も自動詞で、相手は to / with で示す（talk to local businesses about sponsorship）。',
        'approach に前置詞 to が付くのは名詞のとき（an approach to the problem）。動詞の approach は目的語を直接取るため、to は入らない。',
        '正解。approach + 相手 + about + 用件。'],
    ja: '主催者は、来年のフェスティバルの協賛について、地元の複数の企業に働きかける計画である。',
    v: [['sponsor', '協賛する'], ['organizer', '主催者']],
  }),

  q('vusage3-08', {
    t: ['vusage'], lv: 4,
    s: 'The revised logo ------- the original design from 1998 far more closely than the marketing team had intended.',
    c: ['takes after', 'resembles', 'is similar', 'compares'],
    a: 1,
    e: 'resemble は他動詞で、似ている対象を直接目的語に取る「〜に似ている」。is similar は to、compares は to / with が必要。take after は主要辞書がそろって目的語を人（特に年長の血縁者）と明記する句動詞で、無生物どうしの類似には使えない。',
    w: ['take after の目的語は人。LDOCE は to look or behave like an older relative、Merriam-Webster は to resemble (someone) in features, build, character, or disposition と、いずれも人に限って立項している。American Heritage が併記する「手本として従う」の語義も、従う側は人。ロゴとデザインという無生物どうしの類似には使えない。',
        '正解。resemble + 目的語（他動詞）。前置詞は入らない。',
        'is similar to が必要。similar は前置詞なしで比較の相手を取れない。',
        'compare は比較の相手を to / with で示す（compares with the original design）。目的語を直接取る他動詞用法は compare A with B のように比較される二つをそろえる型で、この文には合わない。'],
    ja: '改訂後のロゴは、マーケティングチームが意図していたよりもはるかに強く、1998 年当時の元のデザインに似てしまっている。',
    v: [['resemble', '似ている'], ['intend', '意図する']],
  }),

  q('vusage3-09', {
    t: ['vusage'], lv: 3,
    s: 'A certified interpreter will ------- the delegation throughout its three-day visit.',
    c: ['accompany', 'travel', 'accompany with', 'go along'],
    a: 0,
    e: 'accompany は他動詞で、同行する相手を直接目的語に取る。travel は travel with、go along は go along with と、相手を前置詞で示す型が必要。accompany A with B（A に B を添える）という型は存在するが、その with は添えるものを示す位置で、同行相手の前には置けない。',
    w: ['正解。accompany + 同行する相手（他動詞）。',
        'travel は自動詞で、同行相手は with で示す（travel with the delegation）。',
        'accompany が with を取るのは accompany something with something（He accompanied his speech with gestures.）の型で、with の後ろは「添えるもの」。同行相手はあくまで直接目的語なので、accompany the delegation と続けるしかない。',
        'go along も自動詞句で、同行相手は with で示す（go along with the delegation）。'],
    ja: '公認通訳者が、3 日間の訪問を通じて代表団に同行する。',
    v: [['delegation', '代表団'], ['certified', '認定を受けた']],
  }),

  q('vusage3-10', {
    t: ['vusage'], lv: 3,
    s: 'The assistant will ------- attendees to bring photo identification on the day of the exam.',
    c: ['remember', 'remind', 'recall', 'memorize'],
    a: 1,
    e: '「人に〜するよう思い出させる」型（V + 人 + to do）を持つのは remind だけ。remember / recall / memorize は記憶する主体が主語自身で、相手に行動を指示する to 不定詞を続ける型を持たない。',
    w: ['remember は主語自身が覚えている・思い出す意味で、目的語は思い出す内容。remember to do は「（自分が）忘れずに〜する」、remember me to your family は「〜によろしく伝える」で、いずれも「相手に〜させる」型ではない。',
        '正解。remind + 人 + to do（remind + 人 + of + 事、remind + 人 + that ... も可）。',
        'recall には「思い出す」のほか「（大使を）召還する、（製品を）回収する」という他動詞用法もあるが、その型は recall + 人・物 + to + 場所・職務（recall the ambassador to London）で、to 不定詞で相手の行動を指示することはできない。',
        'memorize は主語自身が暗記する意味で、目的語は暗記する内容（memorize a list）。人を目的語に取って to do を続ける型は無い。'],
    ja: 'そのアシスタントは、試験当日に写真付き身分証明書を持参するよう受験者に念を押す予定である。',
    v: [['attendee', '受験者、参加者'], ['photo identification', '写真付き身分証明書']],
  }),

  /* 旧 id は vusage3-11。誤答に enter into を置き「場所には使わない」と解説していたが、
     Farlex / McGraw-Hill（TheFreeDictionary 掲載）は enter in(to) something に literal 語義
     「to get into something」を立てており（She entered into the house and soon went to work.）、
     学習者が辞書を引くと解説と衝突する。誤答を access to に差し替えたので id を新規採番している。 */
  q('vusage3-11r', {
    t: ['vusage'], lv: 3,
    s: 'Visitors must ------- the laboratory only through the north door.',
    c: ['go', 'arrive', 'access to', 'enter'],
    a: 3,
    e: 'enter は他動詞で、入る場所を直接目的語に取る（enter the building / enter the room）。go は行き先を to、arrive は到着点を at / in で示す自動詞なので、場所を直接続けられない。access は動詞では他動詞（access the laboratory）で、to が付くのは名詞のとき（access to the laboratory）だけ。',
    w: ['go は自動詞で、行き先は to で示す（go to the laboratory）。',
        'arrive も自動詞で、到着点は at（建物・地点）か in（都市・国）で示す。',
        'access に to が付くのは名詞のとき（have access to the laboratory）。動詞の access は目的語を直接取るため to は入らず、動詞の位置に access to は置けない。',
        '正解。enter + 場所（他動詞）。前置詞は入らない。'],
    ja: '来訪者は、北側の扉からのみ研究室に入らなければならない。',
    v: [['laboratory', '研究室']],
  }),

  q('vusage3-12r', {
    t: ['vusage'], lv: 4,
    s: 'The training manager managed to ------- senior staff to adopt the new scheduling tool.',
    c: ['persuade', 'suggest', 'propose', 'insist'],
    a: 0,
    e: '空所の直後が senior staff（人）＋ to adopt。「人を目的語に取り、その人にさせる行為を to 不定詞で示す」型（V + 人 + to do）を持つのは persuade だけ。suggest / propose は要求・提案の内容を that 節（節内は原形＝仮定法現在）か動名詞で述べる型、insist は that 節か on doing で述べる型で、いずれも人を目的語に置いて to do を続ける形が無い。',
    w: ['正解。persuade + 人 + to do（同型は advise / urge / encourage / require / remind など）。',
        'suggest は suggest that + S + 原形、または suggest doing。人を目的語に置いて to do を続ける型は無く、LDOCE も語法欄で Don’t say: I suggest her to wait a few weeks. と明示している。',
        'propose も propose that + S + 原形、または propose doing。人を目的語に取るのは propose + 人 + for / as + 役職（推薦する）の型だけで、to do は続かない。LDOCE も語法欄で Don’t say: I propose Ms Hallam to be appointed. と明示している。',
        'insist が取るのは on + 名詞 / on doing か that 節（節内は原形）で、LDOCE も insist on something・insist that ... の型しか立てていない。人を目的語に置いて to do を続ける insist somebody to do の型はどの主要辞書にも無く、senior staff を直接続けられない。'],
    ja: '研修担当のマネージャーは、新しいスケジューリングツールを導入するよう幹部職員を説得することに成功した。',
    v: [['adopt', '導入する'], ['scheduling tool', 'スケジュール管理ツール']],
  }),
];
