/* =============================================================
   drills/vocab5.js — 語彙・語法（第2波・語彙単問）
   形容詞・名詞＋前置詞（追加12問） / 副詞の意味識別（追加8問）
   ============================================================= */

const q = (id, o) => ({
  id: `u-${id}`, part: 5, kind: 'single', topics: o.t, level: o.lv ?? 4,
  questions: [{
    id, stem: o.s, choices: o.c, answer: o.a,
    exp: o.e, why: o.w, ja: o.ja, vocab: o.v, topics: o.t,
  }],
});

export const UNITS = [

  /* ══ 形容詞・名詞＋前置詞（追加） ═══════════════════════ */
  q('adjprep-09', {
    t: ['adjprep'], lv: 3,
    s: 'A quiet, well-lit workspace is generally conducive ------- sustained concentration during long editing sessions.',
    c: ['to', 'for', 'toward', 'with'],
    a: 0,
    e: 'be conducive to「〜を促す、〜に資する」で前置詞は to のみ。conducive for / conducive toward / conducive with はいずれも標準的な結び付きではない。',
    w: ['正解。be conducive to + 名詞。LDOCE・Cambridge・Collins のいずれもこの語型だけを立項している。',
        'conducive はラテン語 conducere「導く」に由来し、行き着く先を示す to と結び付く語。用途・目的を示す for を取る語型は辞書に登録がない。',
        'toward は方向を示す前置詞だが、conducive の後続前置詞としては立項されていない。',
        'with は同伴・手段を示す前置詞で、conducive が要求する「導かれる先」を示せない。'],
    ja: '静かで採光の良い作業スペースは、長時間の編集作業における持続的な集中を促す傾向がある。',
    v: [['conducive to', '〜を促す'], ['sustained concentration', '持続的な集中']],
  }),

  q('adjprep-10', {
    t: ['adjprep'], lv: 3,
    s: 'Prolonged exposure to direct sunlight can be detrimental ------- the color stability of the fabric samples.',
    c: ['for', 'of', 'with', 'to'],
    a: 3,
    e: 'be detrimental to「〜に有害である、〜を損なう」。detrimental はラテン語 detrimentum「損失」に由来し、損失が及ぶ到達点を to で示す語。LDOCE・Cambridge・Collins のいずれも detrimental to だけを語型として立項している。',
    w: ['for は「〜のために、〜にとって」と受益・用途を示す前置詞で、被害の及ぶ先を示せない。detrimental for という語型は辞書に登録がない。',
        'of は所属・部分を示す前置詞。detrimental が求めるのは「損失がどこに及ぶか」という到達点で、所属関係とは噛み合わない。',
        'with は同伴・手段を示す前置詞で、被害の到達点を示す働きを持たない。',
        '正解。detrimental to が唯一の定型（LDOCE の見出しも detrimental to something）。'],
    ja: '直射日光に長時間さらされると、生地サンプルの色の安定性を損なう可能性がある。',
    v: [['detrimental to', '〜に有害な'], ['color stability', '色の安定性']],
  }),

  q('adjprep-11', {
    t: ['adjprep'], lv: 4,
    s: 'The building\'s brick façade and arched windows are reminiscent ------- early twentieth-century warehouse architecture.',
    c: ['of', 'to', 'with', 'from'],
    a: 0,
    e: 'be reminiscent of「〜を思い起こさせる」。前置詞は of のみ。',
    w: ['正解。reminiscent of が唯一の定型。',
        'to は取らない。',
        'with は取らない。',
        'from は取らない。'],
    ja: 'その建物のれんが造りのファサードとアーチ窓は、20世紀初頭の倉庫建築を思い起こさせる。',
    v: [['reminiscent of', '〜を思い起こさせる'], ['façade', '正面外観']],
  }),

  q('adjprep-12', {
    t: ['adjprep'], lv: 4,
    s: 'Colleagues described her approach to managing the project as akin ------- conducting an orchestra, coordinating rather than commanding each section.',
    c: ['with', 'of', 'for', 'to'],
    a: 3,
    e: 'be akin to「〜に似ている、〜に近い」。akin は kin（血縁）に接頭辞 a- が付いた語で、「何と同族か」という比較の到達点を to で示す。LDOCE は見出しごと akin to something として立項している。',
    w: ['with は同伴・随伴を示す前置詞。akin が求めるのは「何に近いか」という比較の到達点で、with では示せない。',
        'of は所属・部分を示す前置詞で、比較の相手を導く働きを持たない。',
        'for は目的・用途を示す前置詞で、類似の相手を導けない。',
        '正解。akin to が唯一の定型（LDOCE: akin to something）。'],
    ja: '同僚たちは、彼女のプロジェクト管理の手法を、各部門に命令するのではなく調整するという点で、オーケストラの指揮に似ていると評した。',
    v: [['akin to', '〜に似ている'], ['coordinate', '調整する']],
  }),

  /* id は adjprep-13r（選択肢を差し替えたため新規採番）。旧選択肢の in と for は
     integral in doing / integral for + 目的 という用法が実際の英文にあり、
     しかも空所の後ろが product development cycle という「過程」を表す名詞句なので
     どちらも読めてしまい、第二の正解になっていた。integral が構造的に取り得ない
     前置詞（of / with / from）に差し替えた。 */
  q('adjprep-13r', {
    t: ['adjprep'], lv: 3,
    s: 'Regular feedback sessions with customers have become integral ------- the company\'s product development cycle.',
    c: ['of', 'with', 'to', 'from'],
    a: 2,
    e: 'be integral to「〜に不可欠である、〜の欠かせない一部である」。LDOCE の立項も integral to something。an integral part of ... という言い方を知っていると of を選びたくなるが、その of は part に付く前置詞であって integral が取る前置詞ではない。',
    w: ['an integral part of ... の of は名詞 part が取る前置詞。integral 自体が of を取る語型はない（the integral of f(x) は数学用語の名詞で別語）。ここは part という名詞がないので of は掛かる先を失う。',
        'LDOCE が立項する語型は integral to something だけで、with が続くのは「（部品が）他の部分と一体に成形されている」という機械・建築の用法（a shaft integral with the housing / integral with the frame）に限られる。一体成形できる物体どうしを結ぶ言い方なので、feedback sessions と development cycle という抽象名詞の間には掛からない。',
        '正解。integral to が「全体にとって欠かせない一部である」を表す定型。',
        'from は起点・分離を示す前置詞。integral は全体に組み込まれていることを言う語で、分離の起点を示す from とは向きが正反対になる。'],
    ja: '顧客との定期的なフィードバックセッションは、会社の製品開発サイクルに不可欠なものとなっている。',
    v: [['integral to', '〜に不可欠な'], ['development cycle', '開発サイクル']],
  }),

  q('adjprep-14', {
    t: ['adjprep'], lv: 5,
    s: 'The inspector\'s report was refreshingly devoid ------- the vague language that usually fills such documents.',
    c: ['from', 'with', 'in', 'of'],
    a: 3,
    e: 'be devoid of「〜を欠いている、〜が全くない」。古フランス語 desvuidier「空にする」に由来し、「空になっている中身」を of で示す。LDOCE も be devoid of something の形で立項している。',
    w: ['from は起点・分離を示す前置詞。free from なら「〜から解放されて」で成立するが、devoid は取り除かれた起点ではなく欠けている中身そのものを示す語なので from は掛からない。',
        'with は所持・同伴を示す前置詞で、欠如を言う devoid とは向きが逆になり結び付かない。',
        'in は場所・範囲を示す前置詞。lacking in なら「〜の点で欠けている」で成立するが、devoid の語型として辞書に登録はない。',
        '正解。devoid of が唯一の定型。'],
    ja: 'その検査報告書には、この種の文書によくある曖昧な表現がまったくなく、すがすがしいほどだった。',
    v: [['devoid of', '〜を欠いた'], ['vague', '曖昧な']],
  }),

  q('adjprep-15', {
    t: ['adjprep'], lv: 4,
    s: 'In the logistics industry, the company\'s name has become virtually synonymous ------- next-day delivery.',
    c: ['with', 'to', 'of', 'for'],
    a: 0,
    e: 'be synonymous with「〜と同義である、〜の代名詞である」。二つのものが並び立って重なる関係を表す語なので、随伴を示す with を取る。LDOCE の例文も Nixon\'s name has become synonymous with political scandal。',
    w: ['正解。synonymous with が唯一の定型。',
        'to は到達点を示す前置詞。similar to / equivalent to は成立するが、synonymous は「二つが並び立つ」関係を示す語で、辞書はいずれも with だけを立項している。',
        'of は所属・部分を示す前置詞で、対応関係の相手を導けない。',
        'for は目的・用途を示す前置詞で、対応関係の相手を導けない。'],
    ja: '物流業界では、その会社の名前は事実上、翌日配送の代名詞となっている。',
    v: [['synonymous with', '〜と同義の'], ['logistics', '物流']],
  }),

  q('adjprep-16', {
    t: ['adjprep'], lv: 4,
    s: 'The regional manager\'s early feedback was instrumental ------- refining the onboarding checklist now used company-wide.',
    c: ['for', 'to', 'in', 'on'],
    a: 2,
    e: 'be instrumental in doing「〜する上で重要な役割を果たす」。instrument（道具）から出た語で、その道具が働いた場面を in で示す。LDOCE は見出しごと be instrumental in (doing) something として立項している。',
    w: ['for は目的・用途を示す前置詞。useful for doing なら成立するが、instrumental は「実際に働いた場面」を示す語で、辞書はいずれも in だけを立項している。',
        'to は到達点を示す前置詞で、働きの場面を示せない。instrumental の後ろに to doing を続ける語型は辞書にない。',
        '正解。instrumental in doing が唯一の定型。',
        'on は接触・主題を示す前置詞で、働きの場面を示せない。'],
    ja: '地域マネージャーの早い段階でのフィードバックが、現在全社で使われているオンボーディングチェックリストの改良に大きく寄与した。',
    v: [['instrumental in', '〜に大きく寄与する'], ['onboarding', '新人研修']],
  }),

  q('adjprep-17', {
    t: ['adjprep'], lv: 5,
    s: 'Failing to disclose the conflict of interest was considered tantamount ------- a breach of the firm\'s ethics policy.',
    c: ['with', 'as', 'for', 'to'],
    a: 3,
    e: 'be tantamount to「〜も同然である、〜に等しい」。前置詞は to のみ。',
    w: ['with は取らない。',
        'as は取らない。',
        'for は取らない。',
        '正解。tantamount to が唯一の定型。'],
    ja: '利益相反を開示しなかったことは、会社の倫理方針への違反も同然だとみなされた。',
    v: [['tantamount to', '〜も同然の'], ['conflict of interest', '利益相反']],
  }),

  q('adjprep-18', {
    t: ['adjprep'], lv: 5,
    s: 'The consultant\'s fee was ------- with the scope and complexity of the six-month engagement, not simply the number of hours logged.',
    c: ['attributable', 'adequate', 'commensurate', 'equivalent'],
    a: 2,
    e: 'commensurate with「〜に見合った」。attributable to / adequate for / equivalent to はそれぞれ異なる前置詞を取るため、with には続かない。',
    w: ['attributable は原因の帰着先を to で示す語（attributable to the delay）。with を取る語型は辞書にない。',
        'adequate は「足りている用途」を for で示す語（adequate for the task）。with を取る語型は辞書にない。',
        '正解。commensurate with が唯一この文脈に合う定型（LDOCE: Salary will be commensurate with age and experience）。',
        'equivalent は対応する相手を to で示す語。LDOCE・Cambridge とも equivalent to だけを立項しており、with とは組まない。'],
    ja: 'そのコンサルタントの報酬は、単に稼働時間の数ではなく、6か月にわたる契約の範囲と複雑さに見合ったものだった。',
    v: [['commensurate with', '〜に見合った'], ['engagement', '（業務）委託']],
  }),

  /* id は adjprep-19r（選択肢を差し替えたため新規採番）。旧選択肢 proficient は
     Merriam-Webster も「道具について言うときは proficient with」と認めており、
     排除の根拠が「対象が道具でない」という程度の話に留まっていた（旧解説自身が
     「with を取ることもあるが」と譲歩していた）。of しか取らない cognizant に差し替えた。 */
  q('adjprep-19r', {
    t: ['adjprep'], lv: 4,
    s: 'After two years on the compliance team, she became fully ------- with the reporting requirements under the new directive.',
    c: ['informed', 'versed', 'cognizant', 'conversant'],
    a: 3,
    e: 'be conversant with「〜に精通している」。LDOCE の例文 Are you fully conversant with the facts of the case? と同じ形で、規定や手続きに通じていることを表す。空所の後ろが with で固定されているので、with を取る語はどれかを問う問題。',
    w: ['informed は知る対象を about / of で示す語（be fully informed about the requirements / be informed of the decision）。informed with という結合自体は a novel informed with compassion のように存在するが、それは動詞 inform の「〜に息を吹き込む、〜の性格を与える」の語義で、with が取るのは compassion・wit のような抽象的な性質。reporting requirements のような規則類は取れず、「知識が行き渡った」の意味にもならない。',
        'versed は LDOCE が見出しごと be (well) versed in something として立項している語。主要辞書のどれも versed with を語型として登録していない。',
        'cognizant は LDOCE・Merriam-Webster とも cognizant of だけを立項している（He was cognizant of the peculiarities of the case）。with とは組まない。',
        '正解。conversant with が唯一この文脈に合う定型。なお conversant in は conversant in Russian のように「（外国語を）話せる」の意で、対象が言語のときに限られる。'],
    ja: 'コンプライアンスチームで2年を過ごした後、彼女は新しい指令の下での報告要件に完全に精通するようになった。',
    v: [['conversant with', '〜に精通した'], ['directive', '指令']],
  }),

  q('adjprep-20', {
    t: ['adjprep'], lv: 4,
    s: 'Her fluency in Mandarin proved ------- to closing the deal with the investors from Shanghai.',
    c: ['indispensable', 'effective', 'influential', 'supportive'],
    a: 0,
    e: 'be indispensable to doing「〜する上で不可欠である」。空所の後ろが to closing と「to＋動名詞」で固定されているので、その形を取れる語はどれかを問う問題。LDOCE も indispensable to somebody/something を立項している（This book is indispensable to anyone interested in space exploration）。',
    w: ['正解。indispensable to doing「〜する上で不可欠である」の形。',
        'effective は効果が現れる場面を in で示す語（effective in reducing costs）。to＋動名詞を続ける語型は辞書にない。',
        'influential は影響力が及ぶ場面を in で示す語（influential in shaping the policy）。to＋動名詞を続ける語型は辞書にない。',
        'supportive は支える対象を of で示す語（supportive of her efforts）。人に対して supportive to somebody と言うことはあるが、その to は「人」しか取れず、to＋動名詞の形にはならない。'],
    ja: '彼女の中国語の流暢さが、上海からの投資家との契約締結に不可欠な役割を果たした。',
    v: [['indispensable to', '〜に不可欠な'], ['fluency', '流暢さ']],
  }),

  /* ══ 副詞の意味識別（追加） ═══════════════════════════ */
  /* id は adv-09r（stem を差し替えたため新規採番）。旧 stem は
     so disruptive that ------- the most patient tenants began filing complaints で、
     (1) only を入れた文が英語として成立し、排除が「そんなに酷いなら我慢強くない層も
     苦情を出すはずだ」という読み手の推論だけに依存していた（苦情の広がりを述べる記述が
     文中に一つも無かった）、(2) 空所が主語の直前という節の副詞も置ける位置だったため、
     already を「（もうその時点で）すでに」と読む余地が残っていた。
     空所を挿入句の先頭に移し、主語を All the tenants in the building にして
     only を all との正面衝突で落とした。
     2巡目（レビュー2人目）で解説を書き直した。初版の解説は「still / already は同格の名詞句の
     前には入らない」と断定していたが、これは偽（The firm, already the largest employer in the
     county, announced ... のような副詞＋叙述名詞句の無動詞節が実在する）。学習者が
     反例に行き当たる書き方だったので、挿入句に入りうる2構造（焦点副詞＋名詞句／無動詞節）を
     並べ、still・already は後者としてなら立つが「主語全体の言い換え」にしかならず
     the ones who ... という部分集合を指せない、という肯定形の規則で切り直した。
     lv は 4→5（誤答 only は単独では正しい英語で、離れた位置の All とだけ衝突する＝lv5(b)）。 */
  q('adv-09r', {
    t: ['adv'], lv: 5,
    s: 'All the tenants in the building, ------- the ones who had never complained about anything before, contacted the manager about the noise from the renovation.',
    c: ['still', 'only', 'even', 'already'],
    a: 2,
    e: '空所は主語 All the tenants in the building の直後、コンマで挟まれた挿入句の先頭にある。この位置に入る構造は2つしかない。(1) 焦点副詞（even / only / just / especially など）＋名詞句で、主語の中から一部を取り出して「〜まで含めて」「〜だけ」と示す形。(2) 副詞＋叙述の名詞句からなる無動詞節（Kim, then a student at Oxford, ... ＝ who was then a student）で、この名詞句は主語全体の言い換えにしかならない。even は (1) の焦点副詞で、「〜でさえ」と起こりそうにない端を挙げる語。「これまで何一つ苦情を言わなかった層」という最も苦情を出しそうにない端を主語の内側から取り出し、All（全員）を裏打ちする。',
    w: ['still は焦点副詞ではないので、(1) の「名詞句を取り出して焦点にする」働きを持たない。挿入句の先頭に立てるのは (2) の無動詞節としてで（Their flagship store, still the largest in the region, was closed. ＝ which is still the largest）、この形に来る名詞句は主語全体を言い換える叙述でなければならない。the ones who had never complained about anything before は「入居者のうち以前は苦情を言わなかった人たち」と一部を指す名詞句なので、主語全体の言い換えにならない。仮に全員がその層だと読んでも、still（今もその状態のままだ）は「全員が管理者に苦情を伝えた」という主節自体に打ち消される。',
        'only は even と同じ焦点副詞なので (1) の位置は取れる。落ちるのは意味の側で、only は焦点に挙げた集合の外側を排除する語。主語が All the tenants in the building（一人残らず）なのに「連絡したのは一度も苦情を言ったことのない層だけだ」と一部に絞り込むことになり、All と正面から矛盾する。even が使えるのは逆に、焦点の外側（以前から苦情を言っていた層）も同じことをしたと前提する語だからで、そちらは All と両立する。',
        '正解。「〜でさえ」。(1) の焦点副詞として the ones who had never complained about anything before を主語の内側から取り出し、最も苦情を出しそうにない層まで含まれていたことを示す。焦点の外側も同じ行動を取ったことを前提するので、All the tenants と食い違わない。',
        'already も焦点副詞ではないので (1) は取れない。(2) の無動詞節としてなら The firm, already the largest employer in the county, announced further hiring. のように立てるが、この形に来る名詞句は主語全体の言い換えでなければならず、一部を指す the ones who ... は当てはまらない。加えて already は「ある状態に入るのが予想より早い」ことを示す語で、had never complained about anything before という過去の一時点までの経歴には、早い遅いを測るべき変化の時点そのものが無い。'],
    ja: '建物の入居者全員が、それまで何一つ苦情を言ったことのない人たちでさえ、改修工事の騒音について管理者に連絡してきた。',
    v: [['tenant', '入居者'], ['renovation', '改修工事']],
  }),

  q('adv-10', {
    t: ['adv'], lv: 4,
    s: 'The technician worked ------- through the weekend to have the backup system ready before Monday\'s audit.',
    c: ['hardly', 'strictly', 'narrowly', 'hard'],
    a: 3,
    e: 'hard は形容詞と副詞が同形で、副詞の hard は「懸命に、激しく」と動作の強度を表す。work hard で「懸命に働く」。',
    w: ['「ほとんど〜ない」。程度を否定する副詞で、週末を通して作業したという内容と正面から矛盾する。hard と語形が似ているが働きの異なる別語。',
        '「厳密に、厳格に」。規則や範囲の適用の仕方に使う語で（strictly prohibited / strictly speaking）、労働の強度は表さない。',
        '「かろうじて（narrowly escaped）」「狭く（narrowly defined）」。差の小ささや範囲の狭さを表す語で、work の様態を表す用法はない。',
        '正解。work hard「懸命に働く」。'],
    ja: 'その技術者は、月曜日の監査までにバックアップシステムを準備するため、週末を通して懸命に働いた。',
    v: [['work hard', '懸命に働く'], ['backup system', 'バックアップシステム']],
  }),

  /* id は adv-11r（stem を差し替えたため新規採番）。旧 stem は
     has been arriving at the office ------- という現在完了進行形で、
     lately を入れても「最近は出社している」という完全に成立する文になり、
     後続の関係詞節も「彼が出社するようになったので会議を動かした」と読めてしまうため
     第二の正解になっていた。差の幅を表す twenty minutes と過去の一時点 yesterday を
     入れて、lately が構造的に立てないようにした。 */
  q('adv-11r', {
    t: ['adv'], lv: 3,
    s: 'The new sales associate arrived twenty minutes ------- again yesterday, so the receptionist had to move two of the morning appointments.',
    c: ['lately', 'presently', 'late', 'newly'],
    a: 2,
    e: '空所の前に twenty minutes という「ずれの幅」を表す名詞句が置かれている。この位置に立てるのは幅を測れる late / early / behind の類だけで、late は「（定刻より）遅れて」。twenty minutes late で遅れの幅を数える形になる。',
    w: ['「最近、この頃」と現在までの期間を表す副詞。twenty minutes のような幅を表す名詞句に修飾されず、また yesterday という過去の一時点を指す語とも共起しない（lately は現在完了か現在形の反復とともに使う）。',
        '「まもなく」（未来）または米用法の「現在は」（現在）を表す副詞で、どちらも yesterday の一回の到着には掛からない。幅を表す twenty minutes に修飾される語でもない。',
        '正解。「（定刻より）遅れて」。twenty minutes late と遅れの幅を数えられる。',
        'newly appointed / newly built のように過去分詞・形容詞の直前に置いてそれを修飾する語で、動詞の後ろに単独で置いて到着の仕方を表す用法はない。'],
    ja: 'その新しい営業担当者は昨日もまた20分遅れて出社したため、受付係は午前の予定を2件動かさなければならなかった。',
    v: [['arrive late', '遅れて到着する'], ['appointment', '面会の約束']],
  }),

  /* id は adv-12r（選択肢を差し替えたため新規採番）。旧選択肢 overly は
     overly praised（「過度に称賛された」）が英語として成立し、stem にそれを排除する
     手がかりがないため第二の正解になっていた。語形の識別に差し替えた。 */
  q('adv-12r', {
    t: ['adv'], lv: 3,
    s: 'The proposal to convert the loading dock into a shared workspace was ------- praised by the review committee for its creative reuse of underused space.',
    c: ['high', 'height', 'highly', 'closely'],
    a: 2,
    e: '過去分詞 praised を修飾して評価の程度を表す副詞 highly「大いに、非常に」。副詞の high は空間・数値の高さを表す用法しか持たず、過去分詞を修飾して評価の度合いを表すのは -ly 形の highly の役目。',
    w: ['副詞の high は「高い位置に」（fly high）や「高い値まで」（Prices rose high）のように、空間・数値の高さを表す用法に限られる。過去分詞を修飾して評価の度合いを表すのは highly の役目で（highly praised / think highly of）、high にその用法はない。',
        '名詞「高さ」。名詞は動詞・過去分詞を修飾できない。',
        '正解。「大いに」。highly praised / highly regarded / highly recommended。',
        '「綿密に、密接に」。closely examined / closely related のように調査や関連の緊密さに使う語で、称賛の程度は表さない。'],
    ja: '荷積み場を共同ワークスペースに転用するという提案は、未活用スペースの創造的な再利用が評価され、審査委員会から高く評価された。',
    v: [['highly praised', '高く評価された'], ['underused', '十分に活用されていない']],
  }),

  q('adv-13', {
    t: ['adv'], lv: 5,
    s: 'The quarterly planning meeting was cut ------- when the fire alarm forced an evacuation of the conference hall.',
    c: ['shortly', 'brief', 'briefly', 'short'],
    a: 3,
    e: 'cut short「（話・会などを）予定より早く打ち切る」。LDOCE も cut something short として立項しているイディオムで、short は「打ち切られた状態」を表す結果補語。この形でしか成立しない。',
    w: ['「まもなく」と時点の近さを表す副詞。cut shortly after the alarm sounded のように後ろに時の表現を伴えば使えるが、単独では cut の結果（会議が途中で終わった状態）を表せない。',
        '形容詞。keep it brief / make it brief のように keep・make の補語には立つが、cut を使った「途中で打ち切る」の言い方は cut short で固定されており、cut brief という結合は辞書にない。',
        '「短時間だけ」と動作そのものの持続時間を表す副詞。The power was cut briefly のように「切られていた時間が短い」場合には成立するが、ここは会議が途中で終わったという結果を言う位置で、cut という動作の長さの話ではない。',
        '正解。cut short「（予定より早く）切り上げる」。'],
    ja: '火災警報が鳴り、会議場からの避難を余儀なくされたため、四半期計画会議は途中で打ち切られた。',
    v: [['cut short', '途中で切り上げる'], ['evacuation', '避難']],
  }),

  q('adv-14', {
    t: ['adv'], lv: 4,
    s: 'As the company\'s outside legal counsel, the attorney ------- refrained from commenting on the pending litigation when reporters approached him after the hearing.',
    c: ['gradually', 'naturally', 'considerably', 'widely'],
    a: 1,
    e: '「社外顧問弁護士という立場上、当然ながらコメントを控えた」という文脈。naturally は「（立場・状況から見て）当然、無理もなく」という文修飾の意味で使われている。gradually は動作が徐々に進行することを表すが、コメントを控えるという単発の行為には合わない。considerably は比較級や差の大きさを表す語を修飾する語で、refrained のような段階のない動詞は修飾しない。widely は known / regarded / used のように「多くの人や場所にまたがる」ことを表す語と結び付く副詞で、refrain のような個人の意志的な行為とはそもそも組まない。',
    w: ['「徐々に」。コメントを控えるという単発の行為には合わない。',
        '正解。「（立場上）当然」。外部顧問弁護士という立場から見て自然な行動だったことを表す。',
        '「かなり」。程度差を表す語で、refrained のような段階のない動詞を修飾しない。',
        '「広く」。known / regarded のように多くの人や場所にまたがることを表す語と結び付く副詞で、個人の意志的な行為である refrained とは組まない。'],
    ja: '社外の顧問弁護士という立場上、その弁護士は聴聞会の後に記者団に声をかけられても、当然のようにコメントを控えた。',
    v: [['legal counsel', '顧問弁護士'], ['refrain from', '〜を控える'], ['litigation', '訴訟']],
  }),

  q('adv-15', {
    t: ['adv'], lv: 5,
    s: '------- when every item on the safety checklist has been verified will the crew be cleared to begin the demolition.',
    c: ['Even', 'Still', 'Only', 'Just'],
    a: 2,
    e: '文頭に限定的な意味の語句が出て、後ろが疑問文と同じ語順（will the crew be cleared）になっている倒置構文。この倒置を引き起こすのは Only 〜 when ...「〜して初めて」の形。Even when や Just when は倒置を伴わない通常の語順で使う。',
    w: ['「〜でさえ」。even when は譲歩を表す副詞節を作るだけで、主節を疑問文の語順にする力はない（Even when every item has been verified, the crew must wait. のように通常語順になる）。倒置を起こすのは only / not until のように「それ以外では起こらない」と否定的に限定する語句に限られる。',
        'still は「それでもなお」と対比・継続を示す連結副詞で、when 節と一つの副詞句をなさない。文頭に出しても否定的限定の焦点にならないため、will the crew be cleared という語順を説明できない。',
        '正解。Only when ... のように否定的に限定する副詞句が文頭に出ると、主節が疑問文と同じ語順（助動詞＋主語）になる。',
        '「〜のちょうどそのとき」。just when も時を示すだけの副詞節で、否定・限定の意味を含まないため倒置を引き起こさない。'],
    ja: '安全点検表のすべての項目が確認されて初めて、作業員は解体作業の開始を許可される。',
    v: [['clear (someone) to do', '〜することを許可する'], ['demolition', '解体']],
  }),

  /* id は adv-16r（選択肢と stem を差し替えたため新規採番）。旧選択肢 solely は
     「〜されただけだ（署名と日付以外の手続きは踏んでいない）」という読みで英語として成立し、
     both parties とも矛盾しないため第二の正解になっていた。品詞で切れる due に差し替え、
     あわせて動作主を both companies（法人）にして dully の様態読みも塞いだ。
     「法人は態度を持たない」という切り方は the company reluctantly agreed で反証されるので、
     dully は「態度」ではなく「生気・活気の欠如という身体的な現れ方」を表す語だという
     線で切ってある（LDOCE の副詞例も he said dully / Her stomach ached dully）。 */
  q('adv-16r', {
    t: ['adv'], lv: 4,
    s: 'The revised contract was ------- signed and dated by both companies before the merger was finalized.',
    c: ['dully', 'vastly', 'due', 'duly'],
    a: 3,
    e: '「所定の手続きを経て署名され日付が記された」という文脈。duly は due（当然の、所定の）から出た副詞で、duly signed / duly authorized / duly noted のように手続きの正当性を表す。',
    w: ['形容詞 dull（生気がない、鈍い）の副詞。LDOCE が dull の項に挙げる副詞の例も "Well Michael?" he said dully / Her stomach ached dully で、声や表情の生気のなさ・痛みや音の鈍さを描く語。手続きが正規に踏まれたことを表す語義は持たない。reluctantly や grudgingly のような態度の副詞は法人にも掛かるが、dully が表すのは態度ではなく生気・活気の欠如という身体的な現れ方で、by both companies という法人には掛かる先がない。duly とは語源から別語（duly は due、dully は dull）。',
        '「はるかに、大きく」。vastly improved / vastly different のように程度の幅を測れる語を強める副詞。signed は署名したかしないかの二択で幅を持たないため修飾できない。',
        '形容詞・名詞。was due to be signed のように to 不定詞を伴えば使えるが、過去分詞 signed を直接修飾することはできない。副詞の due は LDOCE が due north/south/east/west、Collins が「north・south・east・west の前で使う」と方位語の直前に限って立項しており（M-W も used chiefly of points of the compass）、動詞・分詞を修飾する用法はない。',
        '正解。「所定の手続きを経て」。duly signed and dated は契約文書の定型表現。'],
    ja: '合併が最終的に成立する前に、改訂された契約書は所定の手続きを経て両社によって署名・日付記入された。',
    v: [['duly', '所定の手続きを経て'], ['finalize', '最終的に取り決める']],
  }),
];
