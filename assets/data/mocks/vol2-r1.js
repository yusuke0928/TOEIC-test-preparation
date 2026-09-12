/* =============================================================
   予想模試 Vol.2 — Part 5（No.101–130）／ Part 6（No.131–146）
   ============================================================= */

const p5 = (no, o) => ({
  id: `v2-p5-${no}`, part: 5, kind: 'single', topics: o.t, level: o.lv ?? 3,
  questions: [{
    id: `v2q${no}`, no, stem: o.s, choices: o.c, answer: o.a,
    exp: o.e, why: o.w, ja: o.ja, topics: o.t,
  }],
});

const p6 = (o) => ({
  id: `v2-p6-${o.n[0]}`, part: 6, kind: 'doc', topics: o.t, level: o.lv ?? 4, docCount: 1,
  docs: [o.doc],
  questions: o.q.map((x, i) => ({
    id: x.id ?? `v2q${o.n[i]}`, no: o.n[i], stem: null, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t, tag: x.tag,
  })),
});

export const R1 = [

  /* ══════════ PART 5 ══════════ */
  p5(101, { t: ['pos'], lv: 3,
    s: 'The regional office responds to routine enquiries ------- , usually within two working hours.',
    c: ['promptly', 'prompt', 'prompted', 'promptness'],
    a: 0,
    e: '文の要素はそろっており、動詞 responds を修飾する副詞が入る。',
    w: ['正解。', '形容詞。動詞を修飾できない。', '過去分詞。', '名詞。'],
    ja: '地域事務所は通常の問い合わせに迅速に、たいてい 2 営業時間以内に対応している。' }),

  p5(102, { t: ['vform'], lv: 4,
    s: 'By the time the audit team arrives next month, the finance office ------- all supporting documents.',
    c: ['will have compiled', 'is compiling', 'compiled', 'compiles'],
    a: 0,
    e: 'By the time + 現在形（未来の意味）に対し、主節はその時点までに完了している内容なので未来完了。',
    w: ['正解。', '進行形。完了を表さない。', '過去形。来月の話に合わない。', '現在形。完了の意味を表せない。'],
    ja: '来月に監査チームが到着するころには、財務部はすべての裏付け資料をまとめ終えていることになる。' }),

  p5(103, { t: ['adjprep'], lv: 4,
    s: 'The warranty is void if the seal is broken, and this condition is clearly stated ------- the packaging.',
    c: ['at', 'of', 'on', 'to'],
    a: 2,
    e: 'be stated on ...「〜に記載されている」。文字が載っている面を示す前置詞は on（on the label / on the packaging / on page 4）。',
    w: ['at は「地点」を示す前置詞で、掲示物の面ではなく位置を指す（wait at the entrance）。文字が印刷されている面を示す用法は無い。',
        'state は「述べる」の意味で of を続けない。of が付くのは名詞の state（the state of the packaging「包装の状態」）で、ここは受動態の述語なのでその読みは取れない。',
        '正解。stated on the packaging。',
        'state は伝える相手を to で示せるが（state one\'s position to the committee）、to のあとに来るのは人・組織。the packaging は伝える相手ではなく記載面なので to では受けられない。'],
    ja: '封が破られている場合、保証は無効となり、この条件は包装に明記されている。' }),

  p5(104, { t: ['colloc'], lv: 4,
    s: 'The department will ------- a series of workshops to prepare staff for the new reporting system.',
    c: ['detain', 'depart', 'deliver', 'derive'],
    a: 2,
    e: 'deliver a workshop / deliver training「（研修・講義を）実施する」が定型。deliver は「用意したものを相手に届ける」が中心の語義で、講義・研修・講演を目的語に取れる。',
    w: ['detain は「（人を）拘束する、引き留める」「（物の引き渡しを）差し止める」で、目的語は人か物。研修という催しを目的語にして「実施する」意味にはならない。',
        'depart は自動詞で（depart from / depart for）目的語を取らない。他動詞の用法は depart this life のような古い慣用に限られる。',
        '正解。deliver a series of workshops。',
        'derive は derive A from B「A を B から得る」の型で、from が無いと文が完結しない。また得られるのは利益・意味・語源などで、開催する催しではない。'],
    ja: '当部門は、新しい報告システムに向けて職員を準備させるため、一連の研修を実施する。' }),

  p5(105, { t: ['rel'], lv: 5,
    s: 'The proposal ------- the committee eventually approved differed considerably from the original draft.',
    c: ['what', 'that', 'whose', 'where'],
    a: 1,
    e: '先行詞 The proposal を受け、approved の目的語が欠けた不完全文が続くので目的格の関係代名詞。',
    w: ['先行詞を含む関係代名詞。ここでは先行詞がある。', '正解。', '所有格。直後に名詞が必要。', '関係副詞。後ろは完全文でなければならない。'],
    ja: '委員会が最終的に承認した提案は、当初の草案とかなり異なっていた。' }),

  p5(106, { t: ['quant'], lv: 4,
    s: 'Very ------- progress was made during the first round of negotiations.',
    c: ['few', 'several', 'many', 'little'],
    a: 3,
    e: 'progress は不可算名詞。不可算を修飾できるのは little。',
    w: ['可算名詞用。', '可算名詞用。', '可算名詞用。', '正解。'],
    ja: '交渉の第 1 ラウンドでは、ほとんど進展がなかった。' }),

  p5(107, { t: ['conjprep'], lv: 5,
    s: '------- the sensor readings appear stable, the technician recommends a second calibration.',
    c: ['Even though', 'Regardless of', 'In spite of', 'Despite'],
    a: 0,
    e: '空所の後ろが the sensor readings appear ... という節なので接続詞。譲歩の Even though。',
    w: ['正解。', '前置詞句。', '前置詞句。', '前置詞。名詞句が必要。'],
    ja: 'センサーの数値は安定しているように見えるが、技術者は 2 回目の校正を勧めている。' }),

  p5(108, { t: ['ptcp'], lv: 4,
    s: 'Guests ------- in the east wing should use the side entrance after ten in the evening.',
    c: ['accommodating', 'accommodate', 'to accommodate', 'accommodated'],
    a: 3,
    e: '宿泊客は「収容される」側なので過去分詞が後置修飾する。be accommodated in「〜に宿泊する」。',
    w: ['現在分詞。客が収容することになる。', '原形。',
        '不定詞関係節の可能性がある（Guests to accommodate ... のように「（これから）収容すべき客」という受動的な意味の裸の不定詞関係節。cf. Factors to consider in the design include ...）。しかしその読みでは Guests が「こちらが収容する対象」になり、続く should use the side entrance が呼びかけている「客」自身と一致しない。文全体は一貫して宿泊客に呼びかけているので、この読みは成立しない。',
        '正解。'],
    ja: '東棟にご宿泊のお客様は、午後 10 時以降は側面の入口をご利用ください。' }),

  p5(109, { t: ['biz'], lv: 5,
    s: 'The lease grants the tenant the right to ------- the premises with thirty days\' notice.',
    c: ['ventilate', 'validate', 'venture', 'vacate'],
    a: 3,
    e: 'vacate the premises「（借りている）建物を明け渡す」。賃貸借契約で「30 日前の通知をもって行使できる権利」として定められるのは、占有をやめる動作。',
    w: ['ventilate は「換気する」で、建物を目的語に取ること自体はできる。ただし換気は借主が日常的に行える行為であって、事前通知を条件に契約で認める性質の権利ではない。契約が通知期間を定めるのは占有の終了について。',
        'validate は「（書類・切符・データ・主張の）有効性を認める、裏づける」。論理学の premises（前提）なら validate the premises と言えるが、本問は the lease / the tenant / thirty days\' notice から不動産の premises（建物）であり、建物を validate することはできない。',
        'venture は他動詞では「（意見・推測を）思い切って口にする」（venture an opinion）、自動詞では venture into / out「危険を冒して進む」。建物を目的語に取って「明け渡す」意味にはならない。',
        '正解。vacate the premises。'],
    ja: '本賃貸借契約は、30 日前の通知により賃借人が物件を明け渡す権利を認めている。' }),

  p5(110, { t: ['comp'], lv: 5,
    s: 'The revised procedure is far ------- than the one it replaces, which is why compliance has improved.',
    c: ['simple', 'simpler', 'simply', 'simplest'],
    a: 1,
    e: 'far は比較級を強める副詞で、than があるので比較級 simpler。',
    w: ['原級。than と組み合わない。', '正解。', '副詞。', '最上級。than とは結び付かない。'],
    ja: '改訂後の手順は従来のものよりはるかに簡潔で、それが遵守率の改善につながっている。' }),

  /* id は v2q111r2（no は 111 を維持。前版 v2q111r は今回の巡で新設した id で HEAD には無く、
     まだコミット・配布されていないため SRS 履歴が存在せず、内容を作り替えても据え置きでよいが、
     stem を丸ごと差し替えるため区別のため r2 とした）。
     第3巡監査で、前版の (B) have collected が第二の正解であることが確定した——要求・提案の
     that 節では主語・動詞の一致が停止し、原形は HAVE の原形＝have なので、have collected は
     完了仮定法として正文（"it is required that the candidate have completed specialist
     officer training" ほか、英語版 Wikipedia insource で多数確認）。しかも before proceeding
     beyond reception が期限を立てるため、前時性を表す完了形はむしろ自然に成立してしまっていた。
     DECISIONS.md D1再改訂のとおり、肯定形のまま4本とも定形にする型は
     「will は動詞ごとに開閉が割れる」「have V-en は完了仮定法として必ず開く」の両方に当たるため
     採らず、`not` を空所の前に置く型（subj-28 と同型）に作り替えた。
     not が空所の前にあるので、直説法（is/were 等）・完了仮定法（have/has been V-en）・助動詞
     （will V）はすべて「not は定形の直前ではなく助動詞・be動詞の直後に置く」という語順のみで
     同時に落ちる（is not V / did not V / was not V-ing の語順にしかならず、not の直後に定形を
     直接置くことはできない）。誤答3本が同一の語順規則ひとつで一括消去できるため、
     CLAUDE.md の目盛りに従い level は 3（前版の5から変更）。
     stem は badge / every visitor から完全に離した（前版は v5q115r と主語・目的語まで一致し、
     「前の巻の記憶から答えが手に入る」重複になっていた。今回の書き替えで解消）。
     トリガーは imperative のまま残したが、対象を night-shift operator / emergency shutoff /
     site manager に変え、grammar.js の subj-28（暗号鍵／critical／受動）・subj-02r（試験区域／
     mandatory／能動）・vol4-r1.js の v4q115r（会則／require／受動）のいずれとも語彙・態が
     重ならないようにした（本問は能動・人物主語）。
     `not` 先行型なので will の可否を動詞ごとに測り直す必要は無い（語順だけで閉じるため）。
     p5() ヘルパーは設問 id を no から自動生成するため、このユニットだけ直接記述する。

     追記（第3巡監査）：末尾の "without first alerting the site manager" を含め、
     T1（not 先行型）8問中4問が without で終わっていた偏りが指摘された。末尾を
     until 節に差し替えて分散させた。stem を変えたため id を v2q111r3 に採番し直す。
     choices・answer・exp・why・論点は変えていない。 */
  { id: 'v2-p5-111r3', part: 5, kind: 'single', topics: ['subj'], level: 3,
    questions: [{
      id: 'v2q111r3', no: 111,
      stem: 'It is imperative that the night-shift operator not ------- the emergency shutoff until the site manager has been notified.',
      choices: ['override', 'overrides', 'overrode', 'is overriding'],
      answer: 0,
      exp: 'imperative that ... の that 節を否定するときは、do 支援を使わず not を原形の直前に置く（not + 原形）。定形の活用形（三人称単数現在・過去形・現在進行形）を否定するときは、not を助動詞・be動詞の直後に置く語順（does not override / did not override / is not overriding）になるため、not の直後にそのまま定形を置くことはできず、この位置に入れられるのは原形だけになる。',
      why: ['正解。imperative that ... の that 節は原形（仮定法現在）を取り、否定は not ＋ 原形。',
            '三人称単数現在の定形。定形の直説法を否定するには does not override と do 支援が要るので、not を動詞の直前に置いたこの語順は作れない。',
            '過去形の定形。否定形は did not override となるため、not を動詞の直前に置いたこの語順は作れない。',
            '現在進行形。否定形は is not overriding となるため、not の直後にこの形をそのまま置くことはできない。'],
      ja: '施設責任者に通知が行われるまで緊急停止装置を無効化しないことが、夜勤の運転員には必須である。',
      topics: ['subj'],
    }],
  },

  p5(112, { t: ['vusage'], lv: 5,
    s: 'Please ------- the reception desk of any dietary requirements at least a week in advance.',
    c: ['announce', 'report', 'mention', 'inform'],
    a: 3,
    e: '空所の直後が the reception desk（知らせる相手）で、その後ろが of any dietary requirements（知らせる内容）。「相手を目的語に取り、内容を of で導く」型を持つのは inform / notify / advise / remind / assure などで、選択肢では inform だけ。他の 3 語は知らせる内容の側を目的語に取り、相手は to で示す型なので、この語順に入らない。',
    w: ['announce は知らせる内容を目的語に取り、相手は to で示す（announce the changes to the staff）。相手を目的語に置いて of で内容を導く型は無い。',
        'report も内容の側を目的語に取り、相手は to で示す（report the accident to the safety officer）。report + 人 + to + 人（report him to the supervisor「〜を通報する」）と人を目的語に取る用法はあるが、それは「上位者に苦情を申し立てる」意味で相手を to で示す型であり、of で内容を導くことはできない。',
        'mention も話題にする内容を目的語に取り、相手は to で示す（mention it to the manager）。人を目的語に置けば「その人に言及する」意味になり、知らせる相手にはならず、of 句も続かない。',
        '正解。inform + 人 + of + 事。'],
    ja: '食事に関するご要望は、少なくとも 1 週間前までに受付までお知らせください。' }),

  p5(113, { t: ['adv'], lv: 5,
    s: 'The two prototypes performed ------- in the drop test, so cost became the deciding factor.',
    c: ['incidentally', 'identically', 'individually', 'intentionally'],
    a: 1,
    e: '後半の「だから費用が決め手になった」という帰結が、性能に差がつかなかったことを前提にしている。identically「まったく同じように」。',
    w: ['incidentally は文全体に掛けて「ところで」と話題を転換するか、「（主目的ではなく）付随的に」を表す。落下試験での性能の出方を述べる語ではなく、費用が決め手になった理由も導けない。',
        '正解。performed identically「まったく同じ結果を示した」。',
        'individually は「1 つずつ、個別に」で、試験のやり方（別々に試した）を述べるだけの語。2 つの結果が同じだったことは言えないので、後半の「だから費用が決め手になった」につながらない。',
        'intentionally は「意図的に」で、意志を持つ主体の行為に使う。主語は prototypes（物）なので、意図をもって performed することはできない。'],
    ja: '2 つの試作品は落下試験で同じ結果を示したため、費用が決め手となった。' }),

  p5(114, { t: ['pron'], lv: 5,
    s: 'The cost of shipping by air is roughly triple ------- of sending the same goods by sea.',
    c: ['this', 'it', 'those', 'that'],
    a: 3,
    e: '前出の単数名詞 the cost の反復を避ける代名詞 that。that of ... は比較の定型。',
    w: ['this に反復用法はない。', 'of 句で限定される用法を取らない。', '複数形。cost は単数。', '正解。'],
    ja: '航空便の輸送費は、同じ貨物を船便で送る場合のおよそ 3 倍である。' }),

  p5(115, { t: ['pos'], lv: 4,
    s: 'The board\'s ------- to delay the merger surprised several analysts.',
    c: ['decide', 'decision', 'decided', 'decisive'],
    a: 1,
    e: '所有格 The board\'s の後ろで、to 不定詞に修飾される名詞が必要。',
    w: ['動詞。', '正解。', '過去分詞。', '形容詞。'],
    ja: '合併を延期するという取締役会の決定は、複数のアナリストを驚かせた。' }),

  p5(116, { t: ['voice'], lv: 4,
    s: 'The malfunction ------- shortly after the software update was installed last Tuesday.',
    c: ['was occurred', 'occurred', 'has occurred', 'is occurring'],
    a: 1,
    e: 'occur は自動詞で受動態にできない。last Tuesday があるので過去形。',
    w: ['自動詞に受動態は不可。', '正解。', '現在完了は明確な過去時点と併用できない。', '進行形。'],
    ja: 'その不具合は、先週火曜にソフトウェア更新が適用された直後に発生した。' }),

  /* id は v2q117r（no は 117 を維持。stem・選択肢の差し替えのため設問 id は新規採番）。
     旧 stem 'The two roles are quite ------- ; one focuses on design and the other on
     implementation.' では空所が補語の位置に置かれるだけで、後続の説明を受けられるかどうかを
     語義で争うことになり、Merriam-Webster が distinctive の第 1 義に "serving to distinguish"
     を挙げる以上「distinctive は不可能」と断定できなかった（distinguished も「区別されている」の
     受動として読む余地が残った）。distinct だけが from 句を従えられることを利用し、
     be distinct from の枠に変えて、誤答が構造で落ちるようにした。
     p5() ヘルパーは設問 id を no から自動生成するため、このユニットだけ直接記述する。 */
  { id: 'v2-p5-117r', part: 5, kind: 'single', topics: ['confuse'], level: 5,
    questions: [{
      id: 'v2q117r', no: 117,
      stem: 'Although the two job titles are often used interchangeably, the coordinator\'s duties are quite ------- from the supervisor\'s.',
      choices: ['distracted', 'distinctive', 'distinction', 'distinct'],
      answer: 3,
      exp: 'be distinct from ...「〜とははっきり別のものである」。LDOCE も The learning needs of the two groups are quite distinct from each other. の形で載せる型で、空所が be 動詞の補語であること、直後に from 句が続くことの両方を満たせるのは distinct だけ。前半の「2 つの職名は同じ意味で使われがちだ」とも呼応する。',
      why: ['distracted は「注意がそれた」。be distracted from ... という形自体はあるが、注意を持つ主体すなわち人にしか使えない（She was distracted from her work.）。主語は duties（職務）で注意を持たないため、この受動態の主語になれない。',
            'distinctive は「それと分かる特徴を備えた」で、1 つのものが持つ独自性を言う語（a distinctive sound / distinctive markings）。その特徴が何に属するかを示すときに取る前置詞は of（distinctive of ...）で、from 句は従えない。ここは from the supervisor\'s が続くので入らない。',
            'distinction は名詞。quite が単数可算名詞に付くには quite a distinction のように冠詞が要るが、この位置に冠詞は無い。名詞の distinction が差の相手を示すときも the distinction between the two roles のように between を使う。',
            '正解。be distinct from ...「〜と明確に異なる、別個である」。'],
      ja: 'その 2 つの職名はしばしば同じ意味で使われるが、コーディネーターの職務は監督者の職務とは明確に異なる。',
      topics: ['confuse'],
    }],
  },

  p5(118, { t: ['verbal'], lv: 5,
    s: 'The new policy is intended to discourage employees from ------- annual leave until December.',
    c: ['defer', 'to defer', 'deferring', 'deferred'],
    a: 2,
    e: 'discourage A from doing「A が〜するのを思いとどまらせる」。前置詞 from の後は動名詞。',
    w: ['原形。前置詞の後には置けない。', '不定詞。', '正解。', '過去分詞。'],
    ja: '新しい方針は、従業員が年次有給休暇を 12 月まで先延ばしにすることを抑えるためのものである。' }),

  p5(119, { t: ['inv'], lv: 5,
    s: 'Seldom ------- a manufacturing fault been traced so precisely to a single batch.',
    c: ['have', 'it has', 'been', 'has'],
    a: 3,
    e: '否定的副詞 Seldom が文頭に出たため倒置。倒置では助動詞だけが主語の前に出て、残りの動詞句（been traced）は主語の後ろに残る。主語 a manufacturing fault は単数なので has。',
    w: ['複数形。主語は単数。', '倒置されていない。', '助動詞ではないため主語の前に出せない。', '正解。単数主語に対応する助動詞。'],
    ja: '製造上の不具合がこれほど正確に単一のロットまで特定されることは、めったにない。' }),

  p5(120, { t: ['phrasal'], lv: 5,
    s: 'The committee decided to ------- ahead with the pilot despite the shortened timeline.',
    c: ['press', 'pull', 'put', 'pass'],
    a: 0,
    e: 'press ahead with「（困難があっても）推し進める」。ahead with ＋ 取り組み という型を取れるのは press / push / forge / go / move など「前進」を表す自動詞の系列で、本問の選択肢でこの系列に入るのは press だけ。',
    w: ['正解。press ahead with「（障害があっても）予定どおり進める」。despite 節と自然に呼応する。',
        'pull ahead は「（競争相手より）先行する」で、抜く相手は of で示す（pull ahead of its rivals）。取り組みを with で受けて「推し進める」意味にはならない。',
        'put ahead は「（時計・予定を）早める」（put the clock ahead / put the meeting ahead to Monday）か、put + 人 + ahead「（競争で）優位に立たせる」の型で使う。いずれも ahead の前後に目的語や of 句を要求する型で、ahead with ＋ 取り組み の形は取らない。',
        'pass ahead という句動詞はない。pass は pass on（伝える）／pass up（見送る）などの型を取る。'],
    ja: '委員会は日程が短縮されたにもかかわらず、試験導入を進めることを決定した。' }),

  p5(121, { t: ['pos'], lv: 5,
    s: 'The auditors described the record-keeping as ------- thorough, which is rare in a first inspection.',
    c: ['exception', 'exceptional', 'exceptionally', 'excepted'],
    a: 2,
    e: 'as の後の補語が形容詞 thorough。その形容詞を修飾するのは副詞。',
    w: ['名詞。', '形容詞。形容詞を修飾できない。', '正解。', '過去分詞。'],
    ja: '監査人はその記録管理を極めて徹底していると評したが、初回検査では珍しいことである。' }),

  p5(122, { t: ['ctense', 'vform'], lv: 5,
    s: 'The gallery ------- free admission on the first Sunday of every month since it reopened in 2019.',
    c: ['offers', 'offered', 'has offered', 'will offer'],
    a: 2,
    e: 'since 2019 という起点があるので現在完了。過去から現在まで継続している。',
    w: ['現在形。継続の意味を表さない。',
        '過去形。`since it reopened in 2019` の since は起点を示す時間の接続詞として読まれ、その場合主節は現在完了でなければ 2019 年から続く継続を表せない。過去形は特定の一時点の出来事を表すだけで、起点からの継続は示せない。',
        '正解。',
        '未来形。since は起点からの継続を表す接続詞であり、未来形では 2019 年から現在まで続いてきたという事実を表せない。'],
    ja: 'その美術館は 2019 年の再開以来、毎月第 1 日曜に入場を無料としている。' }),

  p5(123, { t: ['adjprep'], lv: 5,
    s: 'Participation in the mentoring scheme is open ------- all staff who have completed their probation.',
    c: ['for', 'to', 'with', 'at'],
    a: 1,
    e: 'be open to ...「〜に開かれている、〜が参加できる」。参加資格の及ぶ相手を示すのは to（open to the public / open to all members）。',
    w: ['open for は「何のために開いているか」「どれだけの期間開いているか」を示す型で、続くのは活動や期間（open for business / open for applications / open for two weeks）。all staff は活動ではなく参加する人なので、for では受けられない。',
        '正解。be open to + 人。',
        'be open with ... は「（人に対して）包み隠さず話す」の意味で実在するが（She has always been open with me.）、この型は主語が人でなければならない。本問の主語は Participation という事柄なので入らない。',
        'at は場所や時刻を示す前置詞（open at nine / open at the north gate）。参加できる相手を示す用法は無い。'],
    ja: 'メンター制度への参加は、試用期間を終えたすべての職員に開かれている。' }),

  p5(124, { t: ['colloc'], lv: 5,
    s: 'The council will ------- public comment on the draft plan for a period of six weeks.',
    c: ['invite', 'inquire', 'insist', 'induce'],
    a: 0,
    e: 'invite は「差し出してほしいもの」を目的語に取って「募る」意味を作れる（invite comment / applications / tenders / questions）。他の 3 語は public comment を目的語に取る型を持たない。',
    w: ['正解。invite comment on ... for a period of ...「〜について一定期間、意見を募る」。',
        'inquire は情報を求める側の動作で、求める内容は about / into、尋ねる相手は of で示す（inquire about the plan / inquire of a passer-by）。名詞を直接目的語に取るのは引用文や wh 節を続けるときだけで、「募集する対象」を目的語には取れない。',
        'insist は insist on + 名詞/動名詞、または insist that + S + 原形。名詞を直接目的語に取る型が無い。',
        'induce が目的語に取るのは、説得する相手（induce + 人 + to do）か、引き起こされる生理的・心理的状態（induce labour / sleep / vomiting）。public comment はそのどちらにも当たらず、募集期間を示す for a period of six weeks とも結び付かない。'],
    ja: '議会は素案について、6 週間にわたり市民からの意見を募る。' }),

  /* id は v2q125r（no は 125 を維持。stem・選択肢の差し替えのため設問 id は新規採番）。
     旧 stem '------- of the two proposals addresses the question of long-term maintenance.'
     （正解 Neither）は、ドリル grammar2.js の pron-07
     'Of the three proposals reviewed, ------- addressed the question of long-term maintenance costs.'
     と語彙も判断過程（2 者なら neither・3 者以上なら none）もほぼ同一で、ドリルを解いた利用者が
     模試で再会してしまう状態だった。加えて「of the two … + 単数動詞 → neither / each」という型は
     grammar2.js の quant-04、grammar6.js の quant-15、vol1-r1.js の設問 117 でも使われており、
     この論点自体が飽和している。数量詞の使い分けという topic は保ったまま、
     「結果を表す that 節を従えられるのは so だけ」という別の構造に枠を移した。
     誤答 3 つはいずれも単独では正しい英語で、空所から離れた文末の that 節でのみ排除される。
     p5() ヘルパーは設問 id を no から自動生成するため、このユニットだけ直接記述する。 */
  { id: 'v2-p5-125r', part: 5, kind: 'single', topics: ['quant'], level: 5,
    questions: [{
      id: 'v2q125r', no: 125,
      stem: '------- delegates registered for the Thursday workshop that the organizers merged it with the Friday session.',
      choices: ['Too few', 'So few', 'Very few', 'Fewer'],
      answer: 1,
      exp: '文末の that the organizers merged it with the Friday session は、登録者が少なかったことの帰結を述べる節。〈so + few + 複数名詞 … that + 節〉で「あまりに〜が少なかったので…」という程度と結果を結ぶ（so many students applied for admission that the school had a wait list. のように、結果の that 節は動詞の後ろの前置詞句をまたいで文末に置かれる）。選択肢 4 語のうち、この結果の that 節を従える型を持つのは so だけである（同じ型を持つ語は他に such や enough があるが、いずれも選択肢に無い）。too が取るのは to 不定詞、fewer が取るのは than 句で、very は程度を強めるだけで従属節を導かない。空所だけを見れば 4 つとも複数名詞 delegates に付く正しい形なので、決め手は空所から離れた文末の that 節にある。',
      why: ['too が程度の帰結を受けるときに取るのは非定形の補部だけで、to 不定詞（Too few delegates registered to justify a separate session.「別枠で開くには登録者が少なすぎた」）か、その意味上の主語を for で示した too … for + 人 + to do の形をとる。LDOCE が too に立てる型も too … to do something と too … for somebody (to do something) で、定形節を従える型は無い。したがって Too few を入れると文末の that 節が掛かる先を失う。Too few delegates registered for the Thursday workshop. までなら正しい文で、that 節が続くこの文でだけ成立しない。',
            '正解。so + few + 複数名詞 … that + 節 で「〜があまりに少なかったので…」という程度と結果を結ぶ。',
            'very は形容詞・副詞・数量詞の程度を強めるだけの副詞で、従属節を導く働きを持たない。Very few delegates registered for the Thursday workshop. はそれ自体正しい文だが、そこで完結する。very few のあとに that 節が続く形は 2 通りあり、どちらもこの文では成立しない。(1) one of the very few sessions that were cancelled のような名詞修飾の関係詞節——関係詞節なら先行詞 workshop に対応する空所が節の中に要るが、merged の目的語は it で埋まっていて空所が無い。(2) Very few delegates realized that … のような動詞の that 補部——register は「登録する」の意味では for を伴って自動詞で使い that 節を取らず、「（…に）気づく」の意味では for 句を伴わないので、どちらの語義でも that 節を受けられない。程度と結果を結ぶには so が要る。',
            'fewer は比較級なので、これが導けるのは比較の相手を示す than 句であって（Fewer delegates registered for the Thursday workshop than for the Friday session.）、結果を表す節を従える構文は持たない。than 句を置かなくても Fewer delegates registered this year. のようにそこで文が完結するので、やはり文末の that 節を受けられない。that 節を関係詞節に読む道も、merged の目的語が it で埋まっていて空所が無い以上ふさがっている。'],
      ja: '木曜のワークショップに登録した参加者があまりに少なかったため、主催者はそれを金曜のセッションと統合した。',
      topics: ['quant'],
    }],
  },

  p5(126, { t: ['biz'], lv: 5,
    s: 'Any employee who wishes to ------- a grievance should do so in writing within ten working days.',
    c: ['raise', 'rise', 'arise', 'arouse'],
    a: 0,
    e: 'raise a grievance / raise an issue「異議を申し立てる、問題を提起する」。他動詞 raise。',
    w: ['正解。', '自動詞。目的語を取れない。', '自動詞。目的語を取れない。', '「（感情を）かき立てる」。'],
    ja: '苦情を申し立てたい従業員は、10 営業日以内に書面で行う必要がある。' }),

  p5(127, { t: ['ptcp'], lv: 5,
    s: '------- correctly, the adhesive reaches full strength within twenty-four hours.',
    c: ['Applying', 'Applied', 'To apply', 'Apply'],
    a: 1,
    e: '分詞構文の意味上の主語は主節の主語 the adhesive。接着剤は「塗られる」側なので過去分詞。',
    w: ['現在分詞。接着剤が塗ることになる。', '正解。', '不定詞。目的を表す。', '原形。'],
    ja: '正しく塗布すれば、その接着剤は 24 時間以内に完全な強度に達する。' }),

  p5(128, { t: ['adv'], lv: 5,
    s: 'The trial was halted early, ------- because two participants withdrew in the first week.',
    c: ['largely', 'lately', 'lastly', 'loosely'],
    a: 0,
    e: 'largely because ...「主として〜という理由で」。because 節の前に置いて、それが主たる理由であることを示す副詞。',
    w: ['正解。largely because ...。',
        'lately は「最近、近ごろ」と時期を表す副詞で、現在完了などと使う（Have you seen her lately?）。because 節に掛けて理由の重みを示す用法は無い。',
        'lastly は列挙の最後の項目を導く副詞（Firstly ... Lastly ...）。ここには先行する理由の列挙が無いため、「最後の理由」を示すことができない。',
        'loosely は「大まかに、ゆるく」で、結び付きの厳密さを言う（loosely based on a true story）。理由の主従を示す語ではない。'],
    ja: 'その試験は早期に中止された。主な理由は、最初の週に参加者 2 名が離脱したことである。' }),

  /* No.129 の id は v2q129r（no は 129 を維持。誤答 (B) が第二の正解だったための新規採番）。
     前回の巡は (B) を except のまま残し、「except は主語＋be動詞の省略節を従えられない」という
     新しい排除根拠に差し替えたが、これは偽（英語版 Wikipedia insource で
     "except otherwise provided by law"〈New York City Charter §6〉ほか計26件が実在し、
     本問の except otherwise agreed も同じ語義〈別段の合意がある場合を除き〉で成立してしまう。
     第二の正解）。(B) を because に差し替えた。because は if / unless / when / while / although /
     though のような条件・譲歩・時を表す接続詞の仲間には入らず、理由を表す接続詞であり、
     文脈から復元できる主語＋be動詞を省いた節（otherwise agreed のような分詞句）を従えられない
     （Wikipedia insource: "because otherwise agreed" = 0件。対照に "unless otherwise agreed" =
     28件で、検索そのものは生きている）。
     併せて (A) without・(D) besides の why に排除理由を明記した（前回は「前置詞。」
     「前置詞・副詞。」とだけ書かれ、理由が無かった）。 */
  { id: 'v2-p5-129r', part: 5, kind: 'single', topics: ['conjprep'], level: 5,
    questions: [{
      id: 'v2q129r', no: 129,
      stem: 'Invoices are payable within thirty days ------- otherwise agreed in writing.',
      choices: ['without', 'because', 'unless', 'besides'],
      answer: 2,
      exp: 'unless (it is) otherwise agreed「別段の合意がない限り」。unless は、文脈から復元できる主語＋be動詞を省いた節（otherwise agreed のような分詞句）を直接従えられる接続詞。without・besides は前置詞で、目的語には名詞句か動名詞しか取れない。because は接続詞だが理由を表すため、この省略は認められない。',
      why: ['前置詞。目的語には名詞句か動名詞を取るが、otherwise agreed は主語＋be動詞を省いた分詞節であり、名詞句でも動名詞でもないため without の直後には置けない。',
            '接続詞。ただし、文脈から復元できる主語＋be動詞を省いた節を従えられるのは if / unless / when / while / although / though のような条件・譲歩・時を表す接続詞に限られる。理由を表す because にはこの省略が認められておらず、because otherwise agreed という形は成立しない（英語版 Wikipedia insource でも一致0件。対照に unless otherwise agreed は28件検出され、検索そのものは生きている）。',
            '正解。unless (it is) otherwise agreed。',
            '前置詞・副詞。前置詞として使う場合の目的語も名詞句か動名詞に限られ、without と同じ理由で otherwise agreed という分詞節を直接続けられない。'],
      ja: '書面で別段の合意がない限り、請求書は 30 日以内にお支払いいただきます。',
      topics: ['conjprep'],
    }],
  },

  p5(130, { t: ['vusage'], lv: 5,
    s: 'The organizers have ------- the venue with an additional exit at their own expense.',
    c: ['offered', 'donated', 'provided', 'presented'],
    a: 2,
    e: 'provide A with B「A に B を備え付ける、供給する」。空所の直後が the venue with an additional exit という語順なので、場所を目的語に取り、備え付けるものを with で示せる動詞が必要。equip A with B / supply A with B も同型。',
    w: ['offer は offer B to A（または offer A B）の型で、差し出すもの自体を目的語に取る。offer the venue with ... と並べても with 句は the venue を説明する修飾語にしかならず、「会場に出口を設ける」意味は出ない。',
        'donate も donate B to A の型で、寄付するものを目的語に取る。寄付先に付ける設備を with で示す用法は無い。',
        '正解。provide A with B。',
        'present A with B は実在する型だが、A は受け取る人・組織、B は賞・記念品・書類・（比喩的に）問題など「差し出されるもの」に限られる（present her with an award / present us with a problem）。建物に出口を増設する意味では使えない。'],
    ja: '主催者は自らの費用負担で、会場に追加の出口を設けた。' }),

  /* ══════════ PART 6 ══════════ */
  p6({
    n: [131, 132, 133, 134], lv: 4, t: ['ctense', 'connect'],
    doc: {
      label: 'E-mail',
      head: 'To: Season ticket holders\nFrom: box.office@lyricplayhouse.org\nDate: 22 August\nSubject: Your 2026 season',
      body: [
        'Dear patrons,',
        'Booking for the 2026 season {{1}} on Monday 1 September at ten in the morning.',
        'As in previous years, season ticket holders have a two-week priority window before public booking opens. {{2}}, we have changed how seats are released within that window. Rather than holding the whole auditorium, we now release the stalls and the circle on separate days, which last year reduced the queue at opening by about two thirds.',
        '{{3}} Anyone who held a seat in 2025 will be offered the same seat first, and has until 8 September to accept it.',
        'One further note. The Thursday matinee has been discontinued for this season because attendance {{4}} below forty for eleven of the fourteen performances last year. We are looking at a Sunday afternoon slot instead and would welcome your views.',
        'With thanks for your continued support,\nThe Box Office Team',
      ],
    },
    q: [
      { tag: '時制', t: ['ctense'],
        c: ['had opened', 'opened', 'has opened', 'opens'],
        a: 3,
        e: 'メールの日付は 8 月 22 日で、予約開始は 9 月 1 日。確定した予定は現在形で表す。',
        w: ['過去完了。', '過去形。まだ始まっていない。', '現在完了。まだ開始していない。', '正解。'] },
      { tag: '接続語', t: ['connect'],
        c: ['In addition', 'Therefore', 'For instance', 'However'],
        a: 3,
        e: '「例年どおり優先期間がある」→「ただし座席の開放方法を変更した」と、継続と変更が対比されている。逆接の However。',
        w: ['追加ではなく変更点の提示。', '因果。', '例示ではない。', '正解。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'Tickets for all performances are now printed at home.',
          'The renovation of the foyer will begin in October.',
          'Group discounts are offered to parties of ten or more.',
          'Returning patrons are handled separately from new bookings.',
        ],
        a: 3,
        e: '直後が「2025 年に座席を持っていた方には同じ席を先に案内し、9 月 8 日まで受諾できる」と続く。継続利用者を別枠で扱うことを先に述べる文が入る。',
        w: ['発券方法は文脈から外れる。', '改修の話は次文につながらない。', '団体割引は継続利用者の話につながらない。', '正解。'] },
      { tag: '時制', t: ['ctense'],
        c: ['falls', 'will fall', 'is falling', 'fell'],
        a: 3,
        e: 'last year という過去の時点が明示されているので過去形。',
        w: ['現在形。', '未来形。', '進行形。', '正解。'] },
      ],
  }),

  /* No.135 の id は v2q135r（no は 135 を維持。誤答 (A) will move が第二の正解だったための新規採番）。
     move は能格動詞で、(A) will move はラック自身が能動的に移動する自動詞用法として成立してしまっていた。
     初回修正では本文に by our contractor を足して能動態を閉じたが、同一文書 No.137（文挿入）の排除根拠
     （定冠詞 The contractor が、本来は後続文で初出する our contractor より前に来て前方照応できない）
     を壊す副作用が出たため差し戻された。本文は by our contractor を加えない HEAD の文に戻し、代わりに
     動詞を dismantle（他動詞専用。LDOCE [transitive]、AHD・Collins・Random House もいずれも自動詞の語義を
     立てない）に差し替えた。「解体して再設置する」という意味にするため and re-erected でつなぎ、目的語の
     無い能動態はそもそも成立しないという構造で (A)(C) を閉じる。
     この一文にしか {{1}} は無く、他の設問（136–138）は別の段落を参照するため影響しない。
     p6() ヘルパーは o.q[i].id があればそれを使うよう変更済み（無指定なら従来どおり自動生成）。 */
  p6({
    n: [135, 136, 137, 138], lv: 5, t: ['cohesion', 'p6ins'],
    doc: {
      label: 'Notice',
      title: 'Cycle Parking — Change of Location',
      body: [
        'From Monday 6 October, the cycle racks currently outside the main entrance {{1}} and re-erected in the covered area beside the loading bay.',
        'The move is not a downgrade. The new location is under cover, has lighting on a motion sensor, and is within view of the security desk, {{2}} the racks outside the entrance have neither shelter nor direct surveillance.',
        '{{3}} Please remove any bicycle left in the old racks before Friday 3 October; anything remaining after that date will be moved by our contractor and stored at the goods entrance for one month.',
        'The number of spaces increases from twenty-four to thirty-six, so it should no longer be necessary to lock bicycles to the railings — a practice that has blocked the ramp on several occasions and {{4}} a complaint from the accessibility officer.',
      ],
    },
    q: [
      { tag: '態・時制', t: ['voice', 'ctense'], id: 'v2q135r',
        c: ['will dismantle', 'will be dismantled', 'have been dismantling', 'have been dismantled'],
        a: 1,
        e: '空所は and re-erected と等位接続されているので、re-erected と並べられる形（be + 過去分詞）でなければならない。ラックは「解体される」側なので受動態、10 月 6 日からという未来の予定なので未来形。dismantle は他動詞専用（自動詞用法を持たない）なので、目的語の無い能動態はそもそも成立しない。',
        w: ['空所は and re-erected と等位接続されているので、re-erected と並べられる形（be + 過去分詞）でなければならない。will dismantle and re-erected は等位接続そのものが成立しない。加えて dismantle は他動詞専用（LDOCE: [transitive]。AHD・Collins・Random House もいずれも自動詞の語義を立てていない）で、目的語を伴わずに使うことはできない。ラックは解体「する」側ではなく「される」側なので、この能動態の形は成立しない。',
            '正解。受動態の未来形 will be dismantled and re-erected …。re-erected と等位接続できる be + 過去分詞の形であり、10 月 6 日からという未来の予定と、ラックが解体・再設置「される」側であることの両方に合う。',
            '空所は and re-erected と等位接続されているので、re-erected と並べられる形（be + 過去分詞）でなければならない。have been dismantling and re-erected は等位接続そのものが成立しない。加えて dismantle は目的語を伴わずに使うことはできないうえ、currently outside the main entrance（まだ元の位置にある）という記述と、既に始まっている継続的動作を表すこの形は矛盾する。',
            '受動態の現在完了。態は正しいが、currently outside the main entrance が示す「今もまだ元の位置にある」という状態と、既に解体を終えたことを表すこの形は矛盾する。10 月 6 日から始まる今後の作業には未来形が必要。'] },
      { tag: '接続語', t: ['connect'],
        c: ['because', 'whereas', 'provided that', 'as soon as'],
        a: 1,
        e: '新しい場所の利点を挙げたうえで、旧来の場所には屋根も監視もないと対比している。カンマで節が続いているので、対比を表す従属接続詞 whereas が入る。',
        w: ['因果。対比の関係ではない。', '正解。', '条件。', '時。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'The changeover will take place over a single weekend.',
          'The contractor will also repaint the racks in the spring.',
          'Staff may apply for a locker at the same time.',
          'A map showing the new location is posted at both entrances.',
        ],
        a: 0,
        e: '直後が「10 月 3 日金曜までに旧ラックの自転車を撤去してください」と続く。移設が短期間で行われることを先に示す文が、期限の切迫さを説明する。',
        w: ['正解。', '塗装は期限の説明につながらない。', 'ロッカーは別の話題。', '地図の掲示は撤去期限の根拠にならない。'] },
      { tag: '動詞の形', t: ['vform'],
        c: ['prompt', 'prompting', 'has prompted', 'to prompt'],
        a: 2,
        e: 'that 節（a practice that has blocked ... and ------- ...）の中で has blocked と and で並列される述語。現在完了で形をそろえる。',
        w: ['原形。has blocked と並ばない。', '分詞。', '正解。', '不定詞。'] },
      ],
  }),

  p6({
    n: [139, 140, 141, 142], lv: 5, t: ['connect', 'ctense'],
    doc: {
      label: 'Article',
      title: 'Tidal Mill Reopens as Working Museum',
      head: 'ARDLEIGH — 30 June',
      body: [
        'The eighteenth-century tidal mill at Ardleigh Creek {{1}} its first visitors in more than forty years on Saturday.',
        'Restoration began in 2019 and was expected to take three years. It took six. The delay was caused less by the building than by the machinery: the original wooden gearing had to be copied by hand, and only two workshops in the country were {{2}} of the work.',
        '{{3}} Visitors on Saturday were able to watch the wheel turn on the ebb tide, which happens twice a day and lasts about four hours.',
        'The trust that runs the mill says it will grind flour for sale from September, {{4}} the site passes a final food-safety inspection scheduled for August.',
      ],
    },
    q: [
      { tag: '時制', t: ['ctense'],
        c: ['welcomes', 'has welcomed', 'welcomed', 'will welcome'],
        a: 2,
        e: '記事の日付は 6 月 30 日で、本文は「土曜日に」と過去の出来事を述べている。',
        w: ['現在形。',
            '現在完了は明確な過去時点（on Saturday）と併用できない。同じ文書の Visitors on Saturday were able to watch the wheel turn on the ebb tide が、土曜日を過去の事実として確定させている。',
            '正解。', '未来形。'] },
      { tag: '語彙', t: ['adjprep'],
        c: ['able', 'capable', 'possible', 'skilled'],
        a: 1,
        e: '空所の後ろが of the work。of + 名詞 を続けられる形容詞は capable だけ（be capable of + 名詞/動名詞）。',
        w: ['able は be able to do の型で、of は取らない。', '正解。be capable of the work / of doing the work。', 'possible は「事柄」を主語に取る形容詞で（It is possible for them to do the work）、人・組織を主語にして「〜できる」の意味では使えず、of 句も取らない。', 'skilled は be skilled at / in / with の型で、of は取らない。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'The mill last operated commercially in 1981.',
          'Admission is free for residents of the parish.',
          'The wheel is driven not by a river but by the outgoing tide.',
          'A second phase of work will restore the granary.',
        ],
        a: 2,
        e: '直後が「土曜の来場者は引き潮のときに水車が回るのを見られた」と続く。潮で動く仕組みを先に説明する文が自然につながる。',
        w: ['稼働停止年は次文の潮の説明につながらない。', '入場料は文脈から外れる。', '正解。', '第 2 期工事は次文と接続しない。'] },
      { tag: '接続語', t: ['conjprep'],
        c: ['provided', 'although', 'whereas', 'because'],
        a: 0,
        e: '「8 月の食品安全検査に合格すれば 9 月から製粉して販売する」という条件。provided (that)「〜という条件で」。',
        w: ['正解。', '譲歩。条件を表さない。', '対比。', '因果。'] },
      ],
  }),

  /* No.143 の id は v2q143r（no は 143 を維持。誤答 (B) is removed が第二の正解だったための新規採番）。
     is removed は「予定を表す現在形」（The paper sheet is published next week. 型）として読めてしまっていた。
     目的語なしの能動 is removing に差し替え済み。remove には自動詞の語義（AHD「移転する」・Collins「移転する」、
     中間構文の「（塗料などが）落ちる」）が実在するので、他動詞専用という書誌的な理由では閉じない。
     いったん「自動詞の remove は方向の補部を要求する」という構造規則で閉じたが、これは AHD 5th の
     v.intr.2「To go away; depart.」・Random House v.i.8「to go away; disappear.」が方向の補部を
     伴わない語義を立項しているため断定として成立しなかった（再監査で指摘）。
     正しい閉じ手は主語の選択：自動詞 remove の主語になるのは「住居や事業所を移す」「立ち去る」の
     いずれの語義でも人・組織で、掲示された紙は自ら移動も退出もしないためこの主語になれない。
     中間構文（「〜が落ちる、取れる」）は総称の単純現在で使う形で進行形を取らない。
     この2点で is removing はどちらの自動詞の読みでも成立しない。
     why[2]（was removed）は、前の巡で HEAD の文脈根拠「過去形。まだ撤去されていない。」を
     「at the end of this week という未来の時の副詞句と共起しない」という一般規則の断定に
     置き換えていたが、金曜の夕方に発話すれば was removed at the end of this week は成立するため
     反例を持つ。実際に効いているのは 1 月 11 日付のメモの時点で用紙がまだ撤去されていないという
     文脈のほうなので、その根拠に戻した。
     No.144 の id は v2q144r（no は 144 を維持。誤答 (D) would rather が第二の正解だったための新規採番）。
     was would rather / may はいずれも意味の推論でしか排除できていなかった（統語的には正しい）。
     to を要求する法助動詞的表現（ought / be able to）に差し替え、to 無しでは原形を直接取れないという
     構造で閉じた（*ought charge / *are able charge はいずれも不可）。
     p6() ヘルパーは o.q[i].id があればそれを使うよう変更済み。 */
  p6({
    n: [143, 144, 145, 146], lv: 5, t: ['cohesion', 'connect'],
    doc: {
      label: 'Memo',
      head: 'TO: All laboratory users\nFROM: Ifeoma Nwachukwu, Laboratory Manager\nDATE: 11 January\nSUBJECT: Booking the environmental chamber',
      body: [
        'The environmental chamber is now bookable through the shared calendar rather than the paper sheet on the door. The paper sheet {{1}} at the end of this week.',
        'Please book in whole hours and include your project code in the title. Bookings without a code will be deleted, not because we are being difficult but because we {{2}} charge the time back to the correct budget.',
        '{{3}} If you need the chamber for longer than eight hours, e-mail me rather than making four consecutive bookings, as the calendar will not show the run as continuous and someone may reset the unit between slots.',
        'One last point. If you finish early, please release the remaining time. Last term the chamber showed as fully booked for 340 hours but the logger recorded only 190 hours of actual running, {{4}} means about forty percent of the capacity was wasted.',
      ],
    },
    q: [
      { tag: '時制', t: ['ctense', 'voice'], id: 'v2q143r',
        c: ['will be removed', 'is removing', 'was removed', 'has been removed'],
        a: 0,
        e: 'メモの日付は 1 月 11 日、「今週末に」という未来の予定なので未来形。用紙は「撤去される」側なので受動態。',
        w: ['正解。',
            '現在進行形・能動態。remove を自動詞で使うときの主語は人・組織で、語義は「住居や事業所を移す」（"In 1751, I removed from the country to the town"）か「立ち去る」。掲示された紙は自ら移動も退出もしないので、この主語にはなれない。remove には「（塗料・染みが）落ちる、取れる」という中間構文の語義もあるが（paint that removes with water）、これは手段・様態の副詞を伴う総称の単純現在で使う形で進行形を取らない。したがって目的語を持たない The paper sheet is removing … は、どの自動詞の読みでも成立しない。',
            '過去形。メモの日付は 1 月 11 日で、用紙はまだ撤去されておらず、撤去は今週末に行われる予定である。', '現在完了。at the end of this week という未来の時の副詞句と共起しない。'] },
      { tag: '語彙', t: ['vform'], id: 'v2q144r',
        c: ['are able', 'must', 'used to', 'ought'],
        a: 1,
        e: '「正しい予算に時間を付け替える必要がある」という義務。だからコードのない予約は削除される、という因果になる。',
        w: ['「be able to do」の型。to が無ければ動詞の原形を直接続けられない（*are able charge は不可）。',
            '正解。', '過去の習慣。',
            '「ought to do」の型。to が無ければ動詞の原形を直接続けられない（*ought charge は不可）。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'The chamber was serviced during the winter closure.',
          'A short guide to the calendar is attached to this message.',
          'Most bookings are for four hours or less.',
          'Please do not eat or drink in the laboratory.',
        ],
        a: 2,
        e: '直後が「8 時間を超えて使う場合は 4 件連続で予約せずメールを」と続く。通常の予約が短いことを先に示すと、長時間利用が例外的であることが際立つ。',
        w: ['整備の話は次文につながらない。', '手引きの添付は長時間利用の話につながらない。', '正解。', '飲食の注意は文脈から外れる。'] },
      { tag: '関係詞', t: ['rel'],
        c: ['which', 'what', 'that', 'it'],
        a: 0,
        e: '前の内容全体（340 時間の予約に対し実稼働 190 時間）を受ける非制限用法の which。',
        w: ['正解。', '先行詞を含む関係代名詞。', '非制限用法では that を使えない。', '接続詞がなく 2 文をつなげない。'] },
      ],
  }),
];
