/* =============================================================
   予想模試 Vol.4 — Part 5（No.101–130）／ Part 6（No.131–146）
   語彙難化回。Part 5 は語彙・語法問題の比率を上げ、900点帯の語を
   正解位置に置いてある。
   ============================================================= */

const p5 = (no, o) => ({
  id: `v4-p5-${no}`, part: 5, kind: 'single', topics: o.t, level: o.lv ?? 3,
  questions: [{
    id: `v4q${no}`, no, stem: o.s, choices: o.c, answer: o.a,
    exp: o.e, why: o.w, ja: o.ja, topics: o.t,
  }],
});

const p6 = (o) => ({
  id: `v4-p6-${o.n[0]}`, part: 6, kind: 'doc', topics: o.t, level: o.lv ?? 4, docCount: 1,
  docs: [o.doc],
  questions: o.q.map((x, i) => ({
    id: `v4q${o.n[i]}`, no: o.n[i], stem: null, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t, tag: x.tag,
  })),
});

export const R1 = [

  /* ══════════ PART 5 ══════════ */
  p5(101, { t: ['pos'], lv: 3,
    s: 'The proposal was submitted ------- ahead of the internal deadline.',
    c: ['considerably', 'considerable', 'consideration', 'considerate'],
    a: 0,
    e: '副詞 ahead（of）を修飾する副詞が入る。',
    w: ['正解。', '形容詞。', '名詞。', '形容詞「思いやりのある」。'],
    ja: 'その提案書は、社内の期限よりかなり早く提出された。' }),

  p5(102, { t: ['conjprep'], lv: 4,
    s: '------- the auditors identified only minor issues, the report recommends a full review of the reimbursement process.',
    c: ['Because of', 'Despite', 'In spite of', 'Although'],
    a: 3,
    e: '後ろが節（SV）なので接続詞 Although が入る。',
    w: ['前置詞句。', '前置詞句。', '前置詞句。', '正解。'],
    ja: '監査人は軽微な問題しか見つけなかったものの、報告書は払い戻しプロセスの全面的な見直しを勧告している。' }),

  p5(103, { t: ['vform'], lv: 5,
    s: 'The updated firmware ------- to all registered devices automatically once it passes final testing.',
    c: ['will be pushed', 'will push', 'has pushed', 'pushed'],
    a: 0,
    e: 'ファームウェアは「配信される」側なので受動態。once 節（現在形で未来を表す）に続く主節は未来形。',
    w: ['正解。', '能動態。', '能動の現在完了。', '過去形で時制が合わない。'],
    ja: '更新されたファームウェアは、最終テストに合格し次第、登録済みの全端末に自動的に配信される。' }),

  p5(104, { t: ['colloc'], lv: 4,
    s: 'The finance team will ------- a full reconciliation of the March accounts before the audit begins.',
    c: ['comply', 'commit', 'compose', 'conduct'],
    a: 3,
    e: 'conduct a reconciliation「照合作業を行う」。conduct は手順を踏んで実施する作業（an audit / a survey / an investigation）を目的語に取る他動詞。',
    w: ['comply は自動詞で、comply with the rules のように with を伴う。目的語 a reconciliation を直接取れない。',
        'commit が名詞句を直接目的語に取るのは commit a crime / an error / fraud のように「（罪・過ちを）犯す」場合に限られる。照合作業は過失ではないので取れない。「〜すると約束する」の意なら commit to doing と to が要る。',
        'compose の目的語は a letter / an e-mail / a speech / music など「書き上げる文章・楽曲」。作業そのものを指す reconciliation は取れない（「構成する」の意なら be composed of の受動形）。',
        '正解。conduct a reconciliation / conduct an audit。'],
    ja: '経理チームは監査が始まる前に、3 月分の勘定について全面的な照合を行う。' }),

  p5(105, { t: ['ptcp'], lv: 5,
    s: '------- from the manufacturer directly, the replacement parts arrived within two days.',
    c: ['Order', 'Ordered', 'Ordering', 'To order'],
    a: 1,
    e: '分詞構文の意味上の主語は the replacement parts。部品は「発注される」側なので過去分詞。',
    w: ['原形。', '正解。', '現在分詞では部品が自ら発注することになる。', '不定詞。'],
    ja: 'メーカーから直接発注されたため、交換部品は 2 日以内に届いた。' }),

  p5(106, { t: ['pron'], lv: 5,
    s: 'The two suppliers use different invoicing software, so ------- of their reports can be imported directly into our system.',
    c: ['neither', 'both', 'either', 'each'],
    a: 0,
    e: '「どちらの報告書も直接取り込めない」という全否定。動詞 can の後ろが単数扱いであることとも一致する。',
    w: ['正解。', '「両方とも」では文意が逆になる。', '「どちらか一方」では文意が変わる。', '個別性の話ではない。'],
    ja: '2 社の仕入先は異なる請求ソフトを使用しているため、どちらの報告書も当社のシステムに直接取り込むことができない。' }),

  p5(107, { t: ['adjprep'], lv: 5,
    s: 'Reimbursement is ------- to receipts being submitted within thirty days of the expense.',
    c: ['subjective', 'subjected', 'subject', 'subjection'],
    a: 2,
    e: 'be subject to「〜を条件とする、〜次第である」。',
    w: ['「主観的な」。', '過去分詞。be subjected to は「〜を被る」で意味が異なる。', '正解。', '名詞。'],
    ja: '払い戻しは、経費発生から 30 日以内に領収書が提出されることを条件とする。' }),

  p5(108, { t: ['quant'], lv: 4,
    s: '------- piece of equipment leaving the warehouse must be logged in the tracking system.',
    c: ['Every', 'All', 'Several', 'Most'],
    a: 0,
    e: 'piece が単数形で動詞も must（単数扱い）なので、単数名詞を取る every。',
    w: ['正解。', '複数名詞を取る。', '複数名詞を取る。', '複数名詞を取る。'],
    ja: '倉庫を出るすべての備品は、追跡システムに記録されなければならない。' }),

  /* id は v4q109r（no は 109 のまま。stem・選択肢とも差し替えたため設問 id は新規採番）。
     旧 v4q109 は This year's turnout was ------- higher than organisers had projected. で、
     ドリル grammar2.js の comp-04（Attendance at this year's trade fair was ------- higher than
     organizers had projected.）の stem をほぼそのまま流用していた。主語を差し替えただけで
     ------- higher than organi(s/z)ers had projected は完全に一致しており、
     ドリルで解いた文に模試で再会する状態だった（機械抽出の一致率 54%）。
     さらに「比較級を very / too / so で修飾できるか」という論点自体が、
     comp-04・v1q113・v3q109・v5q109 と本問で 5 問使われていて飽和していた。
     論点ごと差し替え、比較節の倒置（than + 助動詞 + 主語）に作り替えてある。

     閉じ方は 1（構造で切る）。比較節で省略されているのは主節の述語 draws less current at
     peak load で、一般動詞なので代動詞 do が要る。空所の直後 the model it replaces が主語
     なので、その前に立てるのは助動詞のみ。
     裏付け：Google Books ngram 1990-2019 平均で than does the 5.11e-07、than do the 3.51e-07 と、
     比較節の倒置そのものは書き言葉に広く実在する。
     ※ 誤答に did を入れなかったのは正しい。比較節は主節と時制がずれてよく
     （She earns more now than she did last year.）、than did the model it replaces は
     「置き換え前の機種が引いていた電流」との比較として成立してしまう。
     同じ理由で has も採らない（than she has in years のように完了の助動詞を明示した比較節は成立する）。
     採ったのは (1) 数が合わない do、(2) 主節の述語に be を含まないため代動詞になれない is、
     (3) 主語 it を立てると後続の名詞句が主語の位置を失う it does の 3 つ。

     2026-08-17 レビューで解説のみ改訂（stem・選択肢・answer・no は不変）。
     独立検証で確かめたこと:
     ・英語版 Wikipedia の insource:"than does the" は 289 件（the Southern Hemisphere receives
       slightly more energy from the Sun than does the northern …）。正解の型は実在する。
     ・insource:"than is the" は 335 件あるが、抽出した実例はいずれも主節に be を含む
       （are more positive than is the case / nearer to Bermuda than is the Caribbean）。
       旧 why の「主節に be が無いと is で受けられない」は正しい。ただし旧 why の後半
       「is を独立した動詞にするなら補語が要るが後ろは主語となる名詞句だけ」は誤り。
       than is the case のように名詞句が補語になる型が実在するので、
       「その読みでは主語が比較されている量になり〈電流＝機種〉の述語関係が立たない」に書き換えた。
     ・it does については Google Books ngram で more than it does the が 1.20e-08 と、
       正解 than does the model（7.56e-10）より 16 倍多い実在の型だった
       （The drug affects older patients more than it does the young.）。
       旧 why はこの型に一切触れず「does の目的語になれない」と断じており、
       辞書外の実在型を否定して見える書き方だった。実在を認めたうえで
       「比較されているのが目的語そのもの（less current）なので does の目的語枠が既に埋まっている、
       かつ draw は二重目的語を取らない」という構造の理由で切るように書き換えた。
     重複確認：inv 系（v4q117 / v5q117 / inv-24 の neither did …）は否定辞の前置による倒置で、
     本問の比較節の倒置とは別の構造。comp 系 18 問にも than + 助動詞 + 主語の型は無い。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v4-p5-109r', part: 5, kind: 'single', topics: ['comp'], level: 5,
    questions: [{
      id: 'v4q109r', no: 109,
      stem: 'The redesigned pump draws less current at peak load than ------- the model it replaces, according to the trial data collected at the Hartland site.',
      choices: ['does', 'do', 'is', 'it does'],
      answer: 0,
      exp: 'than のあとが〈助動詞＋主語〉の語順になっている比較節の倒置。空所の直後の the model it replaces が主語なので、その前に置けるのは助動詞だけである。比較節が受けているのは主節の動詞 draws で、これは一般動詞だから代動詞 do を使う。主語 the model it replaces は単数なので does。書き言葉ではこの倒置はごく普通で、The Southern Hemisphere receives more energy from the Sun than does the northern. のように使われる。',
      why: ['正解。than does the model it replaces。比較節では主語の前に助動詞を出す倒置が起こり、主節の一般動詞 draws を受ける代動詞 do が、単数主語に合わせて does になる。',
            'do は複数主語を受ける形。空所の直後に立つ主語は the model it replaces で、it replaces は model を後ろから修飾する関係詞節にすぎず、主語を複数にはしない。than do the models it replaces のように主語自体が複数であれば成立する。',
            'than + is + 主語 という倒置そのものは実在する（The new filter is more efficient than is the one it replaces. / British views are more positive than is the case elsewhere.）。ただしそれが成り立つのは、比較節が受ける主節の述語に be が含まれているときである。この文の主節の述語は一般動詞 draws なので、is では受けられない。than is the case のように is のあとの名詞句を補語として読む型もあるが、その読みでは主語が比較されている量（＝電流）になり、「電流＝置き換え前の機種」という述語関係は成り立たない。',
            'V ... more than it does ... という言い方自体はある（The drug affects older patients more than it does the young.）。ただしそれが成り立つのは、比較されているのが more のような程度の副詞で、does の目的語の枠が空いているときに限られる。この文で比較されているのは目的語そのもの（less current）なので、does の目的語の枠はすでに埋まっている。draw は目的語を二つ取る動詞でもないため、the model it replaces を置く場所が無い。'],
      ja: 'ハートランド拠点で収集された試験データによれば、再設計されたポンプは、ピーク負荷時に、置き換え前の機種よりも消費電流が少ない。',
      topics: ['comp'],
    }] },

  p5(110, { t: ['voice'], lv: 5,
    s: 'The contract ------- by both parties before any work can begin on site.',
    c: ['sign', 'must sign', 'must be signed', 'signing'],
    a: 2,
    e: '契約は「署名される」側なので受動態。義務を表す must を伴う。',
    w: ['原形。', '能動態。', '正解。', '分詞。'],
    ja: '契約は、現場でのいかなる作業も開始される前に、双方によって署名されなければならない。' }),

  p5(111, { t: ['rel'], lv: 5,
    s: 'The clause ------- the vendor relies most heavily has never actually been tested in court.',
    c: ['on which', 'which', 'that', 'what'],
    a: 0,
    e: 'rely on の on が前に出た形。空所の後ろが完全文なので前置詞＋関係代名詞。',
    w: ['正解。', '後ろが完全文なので不可。', '後ろが完全文なので不可。', '先行詞がある場合は使えない。'],
    ja: 'その業者が最も頼りにしている条項は、実際には一度も裁判で争われたことがない。' }),

  /* id は v4q112r（no は 112 のまま。選択肢を差し替えたため設問 id は新規採番）。
     旧選択肢の moderate は OALD が「to become or make something become less extreme,
     severe」と定義しており、moderate the risk がそのまま「リスクを和らげる」の意で成立して
     第二の正解になっていた（旧 why の「risk とは組まない」は事実に反する）。
     主語が無生物であることで排除できる meditate に差し替えてある。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v4-p5-112r', part: 5, kind: 'single', topics: ['biz'], level: 5,
    questions: [{
      id: 'v4q112r', no: 112,
      stem: 'The revised schedule is intended to ------- the risk of a second delay before the holiday shutdown.',
      choices: ['mediate', 'migrate', 'meditate', 'mitigate'],
      answer: 3,
      exp: 'mitigate「（危険・損害・影響を）小さく抑える」。mitigate the risk / mitigate the impact のように、望ましくない事態の程度を減らす対象を目的語に取る。',
      why: ['「仲裁する」。目的語に取るのは当事者間の争いや取りまとめる合意（mediate a dispute / mediate a settlement）。生物・化学分野の「（作用を）媒介して伝える」の意で読むと、日程がリスクを伝える媒体になってしまい、is intended to（そうなるよう意図した）と正反対になる。',
            '「移動する」。自動詞では鳥や人の移住、他動詞では IT 分野で「（データ・システムを）別の環境へ移す」の意。対象を別の場所へ移す語であって、危険の程度を小さくする語義を持たない。',
            '「熟考する、瞑想する」。他動詞でも使われ（LDOCE は「（復讐などを）心中で企てる」Silently she meditated revenge. を立項、辞書によっては「〜を熟考する」の語義も挙げる）、目的語を取ること自体は可能。ただしどの語義でも「考える主体」が主語に立つ必要があり、to の意味上の主語である The revised schedule（無生物）は思考の主体になれない。書き直すなら The committee meditated ... のように人が主語に来る。',
            '正解。mitigate the risk「リスクを軽減する」。'],
      ja: '改訂された日程は、休業前に二度目の遅延が生じるリスクを軽減することを意図している。',
      topics: ['biz'],
    }] },

  p5(113, { t: ['verbal'], lv: 4,
    s: 'The committee is considering ------- the deadline by two weeks.',
    c: ['extending', 'extend', 'extended', 'to extend'],
    a: 0,
    e: 'consider は動名詞を目的語に取る。',
    w: ['正解。', '原形。', '過去分詞。', '不定詞は取らない。'],
    ja: '委員会は、期限を 2 週間延長することを検討している。' }),

  /* id は v4q114r2（no は 114 のまま。stem・選択肢とも差し替えたため設問 id は二度目の新規採番）。
     旧 v4q114r は Costs have risen ------- since ... , with freight charges alone up almost
     forty percent. で markedly を正解としていたが、誤答 scarcely が第二の正解のまま残っていた。
     「輸送費だけは 40 パーセント増えたが、他の費目が下がって総コストはほとんど動かなかった」と
     読めば Costs have scarcely risen は完全に成立し、alone（〜だけ）はむしろその読みを助ける。
     旧 why[3] の「have scarcely risen という形自体は英語として正しいが…この文では矛盾する」は、
     CLAUDE.md が「第二の正解ありの徴候」と名指しする譲歩の書き方そのものだった。
     「肯定の副詞 vs 否定の副詞を単文の意味で選ばせる」型は閉じられない（ドリル側で 3 巡失敗）ので、
     後半に情報を足す方向はやめ、構造で切れる型に作り替えた。

     新しい型は「その語は目的語となる名詞句の後ろに回れるか」で決まる。空所の前にあるのは
     The objections raised at the October meeting という名詞句だけで、定形動詞が無い
     （raised は他動詞 raise の過去分詞。目的語が置かれていないので過去形とは読めない）。
     空所の後ろはコンマを挟んで〈主語＋動詞〉のそろった完全な節。したがって空所に入る語は、
     前にある名詞句を従えて譲歩の副詞句を作れる語でなければならず、
     目的語の後ろに回れる前置詞 notwithstanding しか立てない。
     裏付け：LDOCE は notwithstanding を preposition, adverb formal として立項し、
     挙げている例文 3 つのうち 2 つが後置形（Fame and fortune notwithstanding, Donna never forgot
     her hometown. / The end of the Cold War notwithstanding, the world is still a dangerous place.）。
     Wiktionary も postposition の用法注記を持ち（The lack of a catalog notwithstanding, it was a
     very interesting exhibit.）、法律文・格式ばった文で普通と記す。
     ※ 後置できる語には aside / apart もあるため誤答に使っていない（Google Books ngram
     1990-2019 平均で objections aside 5.96e-09、objections apart 3.25e-10）。
     pending / given のような分詞・形容詞も独立分詞構文の述語になれる（patent pending 型）ので使わない。
     誤答 3 つは、名詞句を前から支配する前置詞（despite）、of を挟んで後ろに置く副詞（regardless）、
     節と節をつなぐ副詞（nevertheless）で、いずれも前に置かれた名詞句を受け取れない。
     判断過程の重複確認：adv-05r3 は「前置詞の目的語の内側で数量を前から修飾できるか」、
     adv-06r は「副詞が of 補語を後ろに取れるか」、v5q106r3 は「否定極性項目 at all の認可」、
     v1q128r2 は「定形節を要求するか分詞句を従えられるか」で切っており、本問の
     「目的語の前後どちらに置ける前置詞か」とはいずれも別。
     level は 5 のまま（lv5(a)＝語彙の帯が 900+。LDOCE は notwithstanding を formal と記す）。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v4-p5-114r2', part: 5, kind: 'single', topics: ['adv'], level: 5,
    questions: [{
      id: 'v4q114r2', no: 114,
      stem: 'The objections raised at the October meeting -------, the board approved the revised fee schedule without amendment.',
      choices: ['despite', 'regardless', 'notwithstanding', 'nevertheless'],
      answer: 2,
      exp: '空所の前にあるのは The objections raised at the October meeting という名詞句だけで、定形動詞が無い（raised は他動詞 raise の過去分詞であり、目的語が置かれていないため過去形とは読めない）。空所の後ろはコンマを挟んで〈主語＋動詞〉のそろった完全な節。つまりこの名詞句は、空所の語の力で譲歩の副詞句にならない限り、文のどこにも掛かれない。目的語を必ず後ろに置く普通の前置詞ではこれができず、目的語の後ろに回れる前置詞が要る。notwithstanding がその語で、LDOCE は preposition, adverb formal として立項し、Fame and fortune notwithstanding, Donna never forgot her hometown. / The end of the Cold War notwithstanding, the world is still a dangerous place. と後置の例文を挙げている。',
      why: ['前置詞だが、目的語は必ず後ろに置く（despite the objections / despite what was said at the meeting）。空所の後ろにあるのは the board approved ... という完全な節で、despite が支配できる名詞句は残っていない。前に置かれた名詞句を後ろから受け取る語順は取れない。',
            '「（妨げがあっても）かまわずに」。目的語を取るときは of を挟んで後ろに置き（regardless of the objections）、of が無いときは節に掛かる副詞として働く（She was told to stop, but continued regardless.）。of を落として regardless the objections とする言い方も一部にあるが（Wiktionary は preposition として立てたうえで proscribed と注記）、その形でも目的語は後ろに来る。この文には後ろに続く名詞句も、regardless が掛かるべき定形動詞も無い。',
            '正解。The objections raised at the October meeting notwithstanding, ...「〜にもかかわらず」。目的語の後ろに回れる数少ない前置詞で、LDOCE の例文も Fame and fortune notwithstanding, ... / The end of the Cold War notwithstanding, ... と後置形になっている。',
            '「それにもかかわらず」。先行する内容と対比しながら節に掛かる副詞で、目的語は取らない。掛かる先として節が要るが、この文で空所の前に立っているのは名詞句 1 つだけで節ではない。仮に raised を過去形と見て節に読み替えようとしても、raise は目的語を要求するので節にならない。'],
      ja: '10 月の会合で出された異議にもかかわらず、取締役会は改定後の料金体系を修正なしで承認した。',
      topics: ['adv'],
    }] },

  p5(115, { t: ['subj'], lv: 5,
    s: 'The bylaws require that every member ------- notified in writing of any change to the fee schedule.',
    c: ['be', 'is', 'was', 'being'],
    a: 0,
    e: 'require that 節中は原形（仮定法現在）。',
    w: ['正解。', '三単現の s は不可。', '過去形は不可。', '分詞。'],
    ja: '会則は、会費体系に変更があった場合、すべての会員が書面で通知されることを求めている。' }),

  p5(116, { t: ['confuse'], lv: 5,
    s: 'The ------- reason for the delay was a shortage of raw materials, not a labour dispute.',
    c: ['principled', 'principle', 'principally', 'principal'],
    a: 3,
    e: 'principal「主要な、主たる」（形容詞）。同音の名詞 principle「原則」との識別が要点。',
    w: ['「信念に基づいた、筋の通った」。a principled stand / no principled reason のように、道義や一貫した原則にのっとっていることを述べる語。ここで挙がっている理由は原材料不足という事実関係であって道義的な立場ではないため、当てはまらない。',
        '名詞「原則、原理」。principal と同音だが品詞が異なり、冠詞 The と名詞 reason の間に置いて名詞を修飾することはできない。',
        '副詞。副詞は名詞を修飾できないため、The ------- reason の位置には入らない（principally は動詞や文全体を修飾する）。',
        '正解。the principal reason「主たる理由」。'],
    ja: '遅延の主な理由は原材料の不足であり、労使紛争ではなかった。' }),

  p5(117, { t: ['inv'], lv: 5,
    s: 'Under no circumstances ------- a visitor be left unaccompanied in the server room.',
    c: ['is to', 'a visitor should', 'should', 'a visitor is'],
    a: 2,
    e: 'Under no circumstances のような否定語句が文頭に出ると、疑問文と同じ語順（助動詞＋主語）になる。',
    w: ['主語が欠けており構造が合わない。', '倒置されていない語順。', '正解。', '倒置されていない語順。'],
    ja: 'いかなる状況であっても、来訪者をサーバー室に付き添いなしで残してはならない。' }),

  /* id は v4q118r（no は 118 のまま。stem・選択肢とも差し替えたため設問 id は新規採番）。
     旧 v4q118 は The technician ------- us that the replacement part would not arrive until
     next Tuesday. で、ドリル vocab3.js の vusage3-03（The technician ------- the client that the
     replacement part would arrive within 48 hours.）と主語も目的語の内容も同一だった
     （機械抽出の一致率 50%）。
     加えて「V + 人 + of / that」の枠は vusage-01（notify 人 of）・vusage3-02（explain to 人）・
     vusage3-03（assure 人 that）・v2q112（inform 人 of）・v5q118 と本問で 6 問使われており飽和。
     v5q118 も同じ枠だったため、両方とも別の型に差し替えた。

     閉じ方は 1（構造で切る）。長い目的語 the unexplained shortfall in the March stock count の
     後ろに on が印字されているので、目的語のあとに on を取る型を持つ動詞しか立たない。
     原因を on で示すのは blame something on something。残る 3 語は帰属先を to（ascribe / attribute /
     credit）または with（credit 人 with）で示す型しか持たない。
     裏付け：Google Books ngram 1990-2019 平均で attributed the increase to 4.19e-09、
     blamed the increase on 4.64e-10、ascribed the increase to 1.33e-10 に対し、
     attributed the increase on はデータなし（0 件）。

     2026-08-17 レビューで独立検証し、正解は blamed 一つで確定。追加で確かめたこと:
     ・OALD の動詞欄が挙げる型は blame something on somebody/something、
       ascribe something to somebody/something、attribute something to somebody/something、
       credit A with B / credit B to A / credit something to somebody’s account。
       on を取るのは blame だけで、credit の会計用法（口座に入金する）も to だった。
       「credited ... on my account」的な読みで credit が復活する余地は無い。
     ・英語版 Wikipedia の insource 検索は attributed the decline on / attributed the shortfall on /
       ascribed the failure on / credited the increase on がいずれも 0 件。
       blamed the shortfall on は 2 件で、うち 1 件は本問とほぼ同型のビジネス文
       （CEO Phillip White blamed the shortfall on a loss of focus on the core database business）。
     ・Google Books ngram の attributed it on 6.93e-11 / ascribed it on 2.03e-11 /
       credited it on 5.81e-11 は、明らかに非文の blamed it to 9.86e-11 と同じ桁で、
       to 型（attributed it to 1.32e-07）の 1000〜2000 分の 1。誤植・OCR 由来の雑音と判断。
     ・why の attribute 欄が「Google Books に一件も現れない」という書誌的な否定形で
       切っていたため、CLAUDE.md の指示どおり「to の後ろが原因の枠」という肯定形の
       構造規則を先に立て、コーパスは補強に回す書き方へ改めた。
     ・ja が「〜によるものだとした」で、これは誤答 attributed の訳語に見えたため
       「〜のせいだとした」に改めた。
     ・重複：ドリル vusage-04（The finance director ------- the shortfall to an unexpected drop ...、
       正解 attributed）と名詞 shortfall を共有するが、あちらは to 型を選ばせる問題で
       本問は on の印字で to 型を全部落とす問題。論点は反対向きで、機械一致率も 6%。
     level を 5 から 4 に下げた。CLAUDE.md の唯一の軸で言うと、落とす理由は
     「blame A on B という型を知らなかった／空所の 10 語右にある on を拾わなかった」であり、
     blame A on B 自体は文法書の標準項目。決め手が空所の外の情報を 1 つ拾うことにある問題は
     目盛りの定義上 lv4。誤答 3 つが「全部 to 型」と同方向に偏っていて一つの規則で
     一括消去できる点は lv3 寄りだが、ascribe・attribute・credit の帰属用法は中頻度の
     書き言葉なので lv4 に置いた。no（118）・正解位置（D）・topics は変えていない。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v4-p5-118r', part: 5, kind: 'single', topics: ['vusage'], level: 4,
    questions: [{
      id: 'v4q118r', no: 118,
      stem: 'The auditors ------- the unexplained shortfall in the March stock count on a change in the way customer refunds were recorded.',
      choices: ['ascribed', 'credited', 'attributed', 'blamed'],
      answer: 3,
      exp: 'blame + 目的語 + on + 原因「〜を…のせいにする」。空所の直後に置かれているのは the unexplained shortfall in the March stock count という長い目的語で、その先に on が印字されている。したがって「目的語のあとに on を続ける」型を持つ動詞でなければ入らない。4 語のうちその型を持つのは blame だけである。',
      why: ['ascribe が帰属先・原因を導くのに使う前置詞は to である（ascribe the shortfall to a change in procedure / a portrait ascribed to Rembrandt）。原因が入る枠は to の後ろなので、印字されている on を受け取る場所が無い。',
            'credit が取るのは、成果の帰属先を to で示す credit the discovery to her team か、人を目的語に置いて内容を with で示す credit her team with the discovery のどちらかである。金額を口座に付ける会計の用法も credit the refund to the customer’s account と to を使う。原因を on で導く枠はどの型にも無い。',
            'attribute が原因・出所を導くのに使う前置詞も to である（attribute the shortfall to a change in the way refunds were recorded）。to の後ろが原因の枠なので、on は受け取れない。attributed ... on という並びは Google Books にも英語版 Wikipedia にも現れない。',
            '正解。blame the shortfall on a change ...。この動詞だけが、目的語のあとに原因を on で導く枠を持つ。'],
      ja: '監査人は、3 月の棚卸しで生じた原因不明の不足分を、顧客への返金の記帳方法が変わったせいだとした。',
      topics: ['vusage'],
    }] },

  /* id は v4q119r（no は 119 のまま。stem を差し替えたため設問 id は新規採番）。
     旧 stem の added two prospective members to the audit committee は、
     委員会に「加えた」時点でその 2 名は正式な委員であり、「まだ委員ではない候補」を
     表す prospective と矛盾していた（正解側が成立していなかった）。
     候補者を面接する場面に変え、prospective が唯一成り立つ形にしてある。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v4-p5-119r', part: 5, kind: 'single', topics: ['biz'], level: 5,
    questions: [{
      id: 'v4q119r', no: 119,
      stem: 'The board interviewed two ------- members for the audit committee after the resignation left a seat open.',
      choices: ['respective', 'perspective', 'prospective', 'prospected'],
      answer: 2,
      exp: 'prospective「（就任・採用が）見込まれる、候補の」。まだ委員ではない候補者を面接する場面に合う。prospective buyer / prospective employer と同じく、「これから〜になるかもしれない人」を表す。',
      why: ['「それぞれの」。their respective boards のように、すでに文中にある複数の対象へ一つずつ対応させる語で、初出の two members を単独で修飾することはできない。',
            '「観点、遠近法」。名詞であって形容詞用法がなく、名詞として members を修飾しても「観点メンバー」となり意味をなさない。prospective との綴りの混同を突いた選択肢。',
            '正解。「候補の、見込みの」。',
            '「試掘された」。他動詞 prospect は鉱区・土地を目的語に取って「試掘する」の意で使う語で、人を修飾する過去分詞にはならない。'],
      ja: '取締役会は、辞任によって空席が生じたのを受け、監査委員会の候補者 2 名を面接した。',
      topics: ['biz'],
    }] },

  p5(120, { t: ['phrasal'], lv: 5,
    s: 'Management decided to ------- the meeting until the quarterly figures were confirmed.',
    c: ['put down', 'put out', 'put up', 'put off'],
    a: 3,
    e: 'put off「（予定を）延期する」。put + 副詞 の組み合わせのうち、会議・決定・出発など予定を目的語に取って until 節と結べるのは off だけ。',
    w: ['put down が目的語に取るのは暴動・反乱（鎮圧する）、書きとめる内容、動物（安楽死させる）、頭金など。会議を目的語にして「延期する」意味にはならない。',
        'put out は火・明かりを消す、声明や製品を出す、（be put out で）迷惑をこうむる、の意。時期をずらす意味を持たないため until 節と結べない。',
        'put up は建てる・掲示する・値を上げる・宿泊させるの意（put up with なら「我慢する」）。いずれも予定を先送りする意味にはならない。',
        '正解。put off「延期する、見合わせる」。put off the meeting until … と、延期の期限を until で示せる。'],
    ja: '経営陣は、四半期の数値が確定するまで会議を見合わせることにした。' }),

  p5(121, { t: ['biz'], lv: 5,
    s: 'The two sides reached a ------- agreement, subject to approval by their respective boards.',
    c: ['tentatively', 'tenacious', 'tentative', 'tentativeness'],
    a: 2,
    e: 'tentative「仮の、暫定的な」。名詞 agreement を修飾する形容詞で、subject to approval（承認を条件とする）という後半と対応する。',
    w: ['副詞。冠詞 a と名詞 agreement の間に入れて名詞を修飾することはできない。',
        '「粘り強い、しつこい」。人の性質や、握力・記憶など離れにくさを表す語で、承認待ちという合意の暫定性は表せない。',
        '正解。「仮の、暫定的な」。',
        '名詞「煮え切らなさ、暫定的であること」。a tentativeness agreement という複合名詞は成立しない。'],
    ja: '両者は、それぞれの取締役会の承認を条件とする暫定合意に達した。' }),

  p5(122, { t: ['biz'], lv: 5,
    s: 'A ------- licence was issued pending the results of the final inspection.',
    c: ['provisionally', 'provisioning', 'provision', 'provisional'],
    a: 3,
    e: 'provisional「暫定的な、仮の」（形容詞）。冠詞 A と名詞 licence の間に入って名詞を修飾し、pending the results of the final inspection（検査結果が出るまでの間）と対応する。',
    w: ['副詞。副詞は名詞を修飾できないため、冠詞と名詞の間には置けない。',
        '動名詞・現在分詞。provisioning は「（船舶・現場への）物資の補給」を指す語で、a provisioning contract のように「補給のための」と限定する複合語なら作れるが、a provisioning licence は「補給業務の許可」の意になり、検査結果を待つ間の一時的な免許という文脈と合わない。',
        '名詞「規定、条項、支給」。名詞を二つ並べても a provision licence という複合語は成立せず、「暫定的な」の意味も表せない。',
        '正解。a provisional licence「仮免許、暫定的な許可」。'],
    ja: '最終検査の結果が出るまでの間、暫定的な免許が発行された。' }),

  /* id は v4q123r（no は模試の通し番号として 123 を維持するが、stem を差し替えたため
     設問 id は新規採番。旧 id v4q123 を使い回すと SRS の復習履歴が別問題に引き継がれる）。
     旧 stem の the lines of communication は strengthen とも普通に結び付く実在の
     コロケーション（strengthen the lines of communication）で、第二の正解になっていた。
     簡素化の方向を目的節で明示した文に差し替えてある。
     p5() ヘルパーは id を no からテンプレートリテラルで自動生成し、no を変えずに
     id だけ変える手段がないため、このユニットだけはヘルパーを使わず直接記述する。 */
  { id: 'v4-p5-123r', part: 5, kind: 'single', topics: ['colloc'], level: 5,
    questions: [{
      id: 'v4q123r', no: 123,
      stem: 'The new manager wants to ------- the reordering procedure so that a single form replaces the three separate notices now required.',
      choices: ['strengthen', 'straighten', 'streamline', 'stretch'],
      answer: 2,
      exp: 'streamline「（手続き・組織を）簡素化して効率化する」。3 種類の伝票を 1 枚にまとめるという目的節が示すのは工程の削減で、streamline の語義そのもの。',
      why: ['「強化する」。管理や体制をより厳しく・強くする方向の語で、書類を 3 枚から 1 枚に減らすという目的節とは向きが逆になる。',
            '「まっすぐにする」。曲がったものを直す語で、手続きを目的語に取るなら straighten out（もつれを解く）の形が要る。',
            '正解。streamline the procedure / streamline the process。',
            '「引き延ばす」。期間や資源を限界まで伸ばす語で、手続きの簡素化は表さない。'],
      ja: '新しいマネージャーは、現在必要とされている 3 種類の伝票を 1 枚の書式にまとめられるよう、再発注手続きを簡素化したいと考えている。',
      topics: ['colloc'],
    }] },

  p5(124, { t: ['biz'], lv: 5,
    s: 'The customer asked whether the order could be ------- given the tight installation deadline.',
    c: ['expedient', 'expedited', 'expeditious', 'expediency'],
    a: 1,
    e: 'expedite「（注文・手続きを）通常より早く処理する」の過去分詞。the order を主語にした受動態で「注文を早く処理してもらえないか」という依頼の内容になる。',
    w: ['「（道義的な当否はさておき）好都合な、得策の」。It would be expedient to ... のように方策の是非を述べる形容詞で、be の補語に置くこと自体はできるが、the order is expedient は「その注文は得策だ」の意になり、処理を早めてほしいという依頼にはならない。',
        '正解。be expedited「（優先扱いで）早く処理される」。',
        '「迅速な、手早い」。an expeditious solution / in an expeditious manner のように処理の仕方や方法を形容する語で、the order is expeditious では注文そのものが素早いという意味になり、納期を早める話にならない。',
        '名詞「便宜、ご都合主義」。be の補語に置くと the order is expediency となり、注文と便宜を同一視する意味不明の文になる。'],
    ja: '顧客は、据え付けの期限が厳しいため、注文を迅速化できないか尋ねた。' }),

  /* id は v4q125r（no は 125 のまま。選択肢を差し替えたため設問 id は新規採番）。
     旧選択肢の attend は Merriam-Webster が他動詞「to look after : to take charge of」
     （a doctor attending his patients）を立項しており、attend the new hires が
     「新人の世話をする」の意でそのまま成立して第二の正解になっていた。
     主要辞書が他動詞用法を持たない preside に差し替えてある。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v4-p5-125r', part: 5, kind: 'single', topics: ['vusage'], level: 5,
    questions: [{
      id: 'v4q125r', no: 125,
      stem: 'The new supervisor will personally ------- the new hires during their first week.',
      choices: ['preside', 'oversee', 'consist', 'apply'],
      answer: 1,
      exp: 'oversee は他動詞で、監督する対象をそのまま目的語に取る（oversee a project / oversee a team）。残る 3 語は、この文のように人を直接目的語に置く形を取れない。',
      why: ['「（会議・式を）取り仕切る」。preside は自動詞で preside over / preside at の形しか取らず、Merriam-Webster・LDOCE・OALD・Collins・Cambridge のいずれも他動詞の立項を持たないため、the new hires を直接続けられない。over を補ったとしても preside over の目的語になるのは会議・式典・組織・ある時期であって、指導を受ける個々の人ではない。',
            '正解。oversee「（人・作業を）監督する、統括する」。',
            '自動詞。consist of（〜から成る）／consist in（〜に本質がある）の形でしか使えず、目的語を直接取れない。人を指導する意味も持たない。',
            '「申し込む」の意では自動詞で apply for / apply to、他動詞の「適用する」では規則・方法・力など当てはめる側が目的語になる（apply the rule to this case）。人を目的語にして「面倒を見る」意味にはならない。'],
      ja: '新しい主任は、新入社員の最初の 1 週間を自ら統括する。',
      topics: ['vusage'],
    }] },

  /* id は v4q126r（no は 126 のまま。選択肢を差し替えたため設問 id は新規採番）。
     旧選択肢の recommended は Oxford Advanced Learner's / Advanced American が
     recommend somebody to do something を正規の語型として立項しており
     （Passengers are recommended to arrive at the airport early.）、第二の正解だった。
     「recommend O to do は不可」は日本の受験参考書の単純化で、根拠にならない。
     人を目的語に取る用法自体がない insist に差し替えてある。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v4-p5-126r', part: 5, kind: 'single', topics: ['vusage'], level: 5,
    questions: [{
      id: 'v4q126r', no: 126,
      stem: 'The consultant ------- management to consolidate the two regional offices into one.',
      choices: ['proposed', 'advised', 'insisted', 'suggested'],
      answer: 1,
      exp: 'advise + 人 + to do「人に〜するよう勧める」。相手を直接目的語に置き、そのまま to 不定詞を続けられるのは advise。',
      why: ['propose は人を目的語にして to 不定詞を続ける型を持たない。提案内容は that 節（proposed that management consolidate ...）か動名詞（proposed consolidating ...）で表す。',
            '正解。advise somebody to do something。',
            'insist が取れるのは insist on doing と insist that S (should) V の形で、名詞句を目的語に置く型がない（LDOCE は自動詞としてのみ立項し、Don’t say: She insists her own bedroom. と明記している）。ここは insisted that management (should) consolidate ... と書くほかなく、空所の後ろに to が印字されているため that を省いた insisted management consolidate ... の読みも入り込まない。',
            'suggest も人を目的語に取れない。相手は to で示し、内容は that 節で表す（suggested to management that ...）。'],
      ja: 'そのコンサルタントは経営陣に、2 つの地域事務所を 1 つに統合するよう助言した。',
      topics: ['vusage'],
    }] },

  p5(127, { t: ['biz'], lv: 5,
    s: 'Citing falling demand, the airline announced it would ------- several regional routes next quarter.',
    c: ['curb', 'curtail', 'curtain', 'curve'],
    a: 1,
    e: 'curtail「（規模・量・期間を）切り詰める、（サービス・路線を）縮小する」。curtail services / curtail flights のように、提供している事業の一部を打ち切る対象を目的語に取れる。',
    w: ['「（増えすぎて困るものを）抑制する」。curb inflation / curb spending / curb emissions のように、目的語は勢いを抑えるべき量・行為・傾向に限られる。several regional routes は個々の路線という可算の対象で、抑えるべき「勢い」を持たないため目的語にできない。curb には「本数を減らす、廃止する」の語義もない。',
        '正解。curtail several regional routes「いくつかの地方路線を縮小・廃止する」。',
        '名詞「幕、カーテン」。動詞用法は curtain off「カーテンで仕切る」のように副詞を伴う形で、路線を目的語には取れない。',
        '「曲げる、湾曲させる」。物理的な形状を変える語で、便数や事業規模を減らす意味は持たない。'],
    ja: '需要の落ち込みを理由に、その航空会社は来四半期にいくつかの地方路線を削減すると発表した。' }),

  p5(128, { t: ['biz'], lv: 5,
    s: 'The inspector may ------- a shipment unsafe if the packaging shows signs of damage.',
    c: ['deed', 'deem', 'deep', 'deemed'],
    a: 1,
    e: 'deem O C「O を C とみなす」。助動詞 may の後ろは原形で、目的語 a shipment のあとに補語 unsafe を置く SVOC を作れるのは deem。',
    w: ['名詞では「証書、行為」、動詞では「（不動産を）証書で譲渡する」。目的語のあとに形容詞の補語を置く SVOC の型を持たない。',
        '正解。may deem a shipment unsafe。',
        '形容詞・副詞「深い／深く」。動詞用法がないため、助動詞 may の後ろには置けない。',
        '過去形・過去分詞。助動詞 may の後ろは原形でなければならない。'],
    ja: '検査官は、梱包に損傷の兆候があれば、その貨物を安全でないとみなすことができる。' }),

  p5(129, { t: ['biz'], lv: 5,
    s: 'The lease ------- that any structural changes must receive written approval from the landlord.',
    c: ['notices', 'stipulates', 'displays', 'stimulates'],
    a: 1,
    e: 'stipulate that ...「〜と規定する」。契約書・規約そのものを主語に取れる動詞で、条件を定める文脈で頻出。',
    w: ['notice は「〜に気づく」。that 節を取るには気づく主体（人）が主語である必要があり、書類である The lease は主語になれない。',
        '正解。',
        'display は「（物・情報を）表示する」で名詞句を目的語に取る他動詞。that 節を目的語に取る用法がない。',
        '「（人・需要などを）刺激する」。名詞句を目的語に取る語で、that 節も取らない。'],
    ja: '賃貸契約は、構造上の変更には大家の書面による承認を要すると規定している。' }),

  p5(130, { t: ['biz'], lv: 5,
    s: "The board's ------- does not extend to decisions about day-to-day staffing.",
    c: ['remittance', 'remit', 'remitting', 'remitted'],
    a: 1,
    e: 'remit「（権限の及ぶ）職務範囲、所管」（名詞）。extend to ...「〜にまで及ぶ」の主語として、権限の範囲を表す語が要る。',
    w: ['「送金、送金額」。金銭の移動を指す語なので、日々の人員配置の決定にまで「及ぶ／及ばない」と述べる主語にはならない。',
        '正解。「所管範囲」。fall within the board\'s remit のようにも使う。',
        '動名詞「送金すること」。The board\'s remitting は「取締役会が送金すること」の意になり、権限の範囲を表せない。',
        '過去分詞。所有格 The board\'s に続けて主語になれる名詞ではない。'],
    ja: '取締役会の権限は、日々の人員配置に関する決定には及ばない。' }),

  /* ══════════ PART 6 ══════════ */
  /* 第 4 空所の設問 id は v4q134r（no は 134 のまま。旧問の選択肢 like は
     treat it like one が英語として完全に成立するため第二の正解になっていた。
     本文の当該文ごと err on the side of caution の語法問題に差し替えている）。
     p6() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v4-p6-131', part: 6, kind: 'doc', topics: ['connect', 'voice'], level: 5, docCount: 1,
    docs: [{
      label: 'E-mail',
      head: 'To: All account managers\nFrom: compliance@harrowgate-finance.com\nDate: 4 November\nSubject: Updated disclosure procedure',
      body: [
        'From 1 December, any potential conflict of interest {{1}} to the compliance office before a client meeting takes place, not afterward as in the past.',
        'The change follows two cases this year in which a conflict was disclosed only after a deal had closed. {{2}}, the compliance office had no opportunity to advise on how the meeting should be handled.',
        '{{3}} The form takes under five minutes to complete and can be submitted from a mobile device.',
        "Managers who are unsure whether a situation counts as a conflict should err {{4}} the side of caution and file the form; it is far easier to withdraw an unnecessary disclosure than to explain a missed one.",
      ],
    }],
    questions: [
      { id: 'v4q131', no: 131, stem: null, tag: '態・時制', topics: ['voice', 'ctense'],
        choices: ['must disclose', 'must be disclosed', 'discloses', 'disclosing'],
        answer: 1,
        exp: '利益相反は「開示される」側なので受動態。今後の規定を述べる助動詞 must を伴う。',
        why: ['能動態。', '正解。', '現在形で今後の規定を表せない。', '分詞で文が成立しない。'] },
      { id: 'v4q132', no: 132, stem: null, tag: '接続語', topics: ['connect'],
        choices: ['For example', 'On the other hand', 'As a result', 'In summary'],
        answer: 2,
        exp: '「取引が成立した後に初めて開示された」→「その結果、コンプライアンス部門は助言する機会がなかった」という因果関係。',
        why: ['例示でもない。', '逆接ではない。', '正解。', '要約でもない。'] },
      { id: 'v4q133', no: 133, stem: null, tag: '文挿入', topics: ['p6ins'],
        choices: [
          'The two cases mentioned above resulted in no financial loss.',
          'The compliance office will be relocating to the third floor in January.',
          'Client meetings will now require two account managers to attend.',
          'A new one-page disclosure form is now available on the intranet.',
        ],
        answer: 3,
        exp: '直後が「その用紙は 5 分もかからず記入でき、携帯端末からも提出できる」と続くため、新しい用紙の導入を告げる文が先行する必要がある。',
        why: ['損失の有無は「用紙」の話に接続しない。', '部署の移転は次文とつながらない。', '同席人数の規定は文脈から外れる。', '正解。'] },
      { id: 'v4q134r', no: 134, stem: null, tag: '語法', topics: ['conjprep'],
        choices: ['in', 'at', 'on', 'to'],
        answer: 2,
        exp: 'err on the side of caution「判断に迷ったら安全な側に倒す、慎重を期す」。the side of ... と結び付く前置詞は on に固定されている。',
        why: ['err in ... は「〜の点で誤る」（err in judgment）の形で、the side of caution とは結び付かない。',
              'at は地点を示す前置詞で、この成句には入らない。',
              '正解。err on the side of caution。err on the side of generosity のように of の後ろだけが入れ替わる。',
              'to は方向・到達点を示す前置詞。err to ... という結合はなく、the side of caution を続けられない。'] },
      ],
  },

  p6({
    n: [135, 136, 137, 138], lv: 5, t: ['ctense', 'rel'],
    doc: {
      label: 'Article',
      title: 'A Repair Shop That Started Selling Time, Not Just Parts',
      body: [
        'When Voss & Hale Appliance Repair introduced a flat forty-minute diagnostic slot last year, most customers assumed it {{1}} simply a new pricing scheme.',
        'It was not quite that. Owner Petra Voss explains that technicians had been quoting repairs after a rushed five-minute look, then discovering the real problem once the appliance was already in pieces. "We were promising a price before we actually knew {{2}} was wrong," she says. "The forty minutes let us tell customers the truth up front."',
        '{{3}} Customers now receive a written estimate before any part is ordered, and cancelling after the diagnostic slot costs only the slot fee, not a restocking charge.',
        'Repeat business has grown steadily since the change, {{4}} first-time customers have been slower to book the longer slot.',
      ],
    },
    q: [
      { tag: '時制', t: ['vform'],
        c: ['has been', 'were', 'is', 'was'],
        a: 3,
        e: '過去の一時点で顧客が思い込んだ内容を述べる。主語 it（単数）と、過去の動詞 assumed に時制を合わせる。',
        w: ['現在完了では文脈と合わない。', '単数の it と一致しない。', '現在形では過去の思い込みと時制が合わない。', '正解。'] },
      { tag: '関係詞', t: ['rel'],
        c: ['which', 'that', 'what', 'how'],
        a: 2,
        e: '先行詞を含む関係代名詞 what。「何が悪いのか（＝the thing that was wrong）」という名詞節を作り、knew の目的語になる。',
        w: ['疑問詞として使えば「（示された候補のうち）どれが」の意味になるが、選ぶ対象となる候補が本文に示されていないため成立しない。関係代名詞と見た場合は先行詞になる名詞が前にない。',
            '関係代名詞・接続詞の that では、主語のない was wrong を後ろに導けない。指示代名詞と見れば knew that was wrong と読めるが、that が指す具体物が直前になく、「40 分あれば本当のことを伝えられる」と続く発言の趣旨（故障箇所が分からないまま見積もっていた）ともつながらない。',
            '正解。',
            'how は方法を表す副詞で、後ろの was wrong の主語になれない。節の中に主語が必要（knew how the appliance had broken なら可）。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'Diagnostic slots are currently booked about two weeks in advance.',
          'The shop plans to open a second branch next spring.',
          'Petra started the business twelve years ago with her father.',
          'The change also came with a new, more transparent cancellation policy.',
        ],
        a: 3,
        e: '直後が「顧客は部品発注前に見積もりを受け取り、診断後のキャンセルはスロット料金のみで済む」と続くため、方針変更を総括する文が先行する必要がある。',
        w: ['予約状況は「方針変更」の話に接続しない。', '2 号店の計画は次文とつながらない。', '創業の経緯は文脈から外れる。', '正解。'] },
      { tag: '接続語', t: ['conjprep'],
        c: ['because', 'although', 'so that', 'provided that'],
        a: 1,
        e: '「常連客の利用は着実に増えた」に対し「初めての客は予約が遅れがち」と対比している。',
        w: ['因果ではない。', '正解。', '目的でもない。', '条件でもない。'] },
      ],
  }),

  p6({
    n: [139, 140, 141, 142], lv: 5, t: ['ctense', 'connect'],
    doc: {
      label: 'Memo',
      head: 'TO: All site supervisors\nFROM: Safety & Compliance\nDATE: 14 January\nSUBJECT: Near-miss reporting — process change',
      body: [
        'From 1 February, near-miss incidents {{1}} within twenty-four hours using the new online form, rather than the paper log used until now.',
        'The paper log will remain in each site office for one further month as a backup, but every entry made there must also be entered online before the end of the same shift. {{2}}, a near miss recorded only on paper will not appear in the monthly safety summary sent to head office.',
        '{{3}} Supervisors should complete the short training video, under six minutes, before the new system goes live.',
        "Any near miss involving a contractor rather than a direct employee {{4}} to that contractor's own safety officer as well as to our system.",
      ],
    },
    q: [
      { tag: '態・時制', t: ['voice', 'ctense'],
        c: ['must report', 'must be reported', 'reports', 'reporting'],
        a: 1,
        e: 'ヒヤリハットは「報告される」側なので受動態。今後の規定を述べる助動詞 must を伴う。',
        w: ['能動態。', '正解。', '現在形で規定を表せない。', '分詞。'] },
      { tag: '接続語', t: ['connect'],
        c: ['For example', 'Similarly', 'Otherwise', 'Nonetheless'],
        a: 2,
        e: '「紙にしか記録しなければ月次の安全報告に反映されない」＝そうしなければ、という条件的な帰結。',
        w: ['例示でもない。', '並列ではない。', '正解。', '逆接でもない。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'Head office reviews the monthly safety summary within five working days.',
          'The paper log has been in use since the site first opened.',
          'Contractors are billed separately for any equipment damage.',
          'Training on the new form will be provided at each site during the last week of January.',
        ],
        a: 3,
        e: '直後が「導入前に 6 分未満の研修動画を見ておくこと」と続くため、研修が用意されることを告げる文が先行する必要がある。',
        w: ['本部の確認期間は「研修」の話に接続しない。', '紙台帳の使用開始時期は文脈から外れる。', '請求の話は無関係。', '正解。'] },
      { tag: '態', t: ['voice'],
        c: ['must report', 'must also be reported', 'reports also', 'also reporting'],
        a: 1,
        e: 'ヒヤリハットは「報告される」側なので受動態。副詞 also は最初の助動詞 must の直後に置く。',
        w: ['能動態。report to + 人 は「〜の指揮下に入る、〜に出頭する」の意味で主語は人。出来事である near miss は報告する主体になれない。',
            '正解。',
            '能動態で主語と動詞の関係が逆になるうえ、also を動詞の直後に置く語順も取れない。',
            '現在分詞。この文に述語動詞がなくなり、文として成立しない。'] },
      ],
  }),

  p6({
    n: [143, 144, 145, 146], lv: 5, t: ['voice', 'conjprep'],
    doc: {
      label: 'Web page',
      title: 'Bellcross Retail — Staff Discount Policy Update',
      body: [
        'From 1 April, the staff discount {{1}} to twenty-five percent on regular-priced merchandise, up from the current fifteen percent.',
        "The increase became possible {{2}} the loyalty programme now generates enough separate revenue to absorb the cost, according to the finance team's review.",
        '{{3}} The discount will continue to exclude sale items, gift cards, and any product already reduced through a promotional code.',
        'Staff who share their discount code with a non-employee {{4}} of the privilege for a minimum of six months.',
      ],
    },
    q: [
      { tag: '態', t: ['voice'],
        c: ['will rise', 'will be risen', 'rises', 'has risen'],
        a: 0,
        e: 'rise は自動詞で受動態にできない。今後の変更を述べるので未来形。',
        w: ['正解。', 'rise は他動詞化して受動態にできない。', '現在形で今後の変更を表せない。', '現在完了では文脈と合わない。'] },
      { tag: '接続語', t: ['conjprep'],
        c: ['because', 'because of', 'despite', 'although'],
        a: 0,
        e: '後ろが節（the loyalty programme ... generates ...）なので接続詞 because。',
        w: ['正解。', '前置詞句。後ろに節は続かない。', '逆接で文意が合わない。', '譲歩で文意が合わない。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'Other conditions of the discount remain unchanged.',
          'The loyalty programme will also be redesigned this year.',
          'New employees become eligible after a three-month probation period.',
          "The finance team's review took approximately six weeks to complete.",
        ],
        a: 0,
        e: '直後で「セール品・ギフトカード・販促コードによる値引き品は対象外のまま」と、変わらない条件を列挙しているため、「他の条件は変わらない」と総括する文が先行する必要がある。',
        w: ['正解。', 'ロイヤルティ制度の改編は次文とつながらない。', '新入社員の資格条件は文脈から外れる。', 'レビューの所要期間は「除外条件」の話に接続しない。'] },
      { tag: '態', t: ['voice'],
        c: ['will be stripped', 'will strip', 'strips', 'stripping'],
        a: 0,
        e: 'strip A of B「AからBを剥奪する」の受動態。従業員は「剥奪される」側。',
        w: ['正解。', '能動態。', '現在形かつ能動態。', '分詞で文が成立しない。'] },
      ],
  }),
];
