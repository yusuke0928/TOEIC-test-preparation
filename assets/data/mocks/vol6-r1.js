/* =============================================================
   予想模試 Vol.6 — Part 5（No.101–130）／ Part 6（No.131–146）
   ============================================================= */

const p5 = (no, o) => ({
  id: `v6-p5-${no}`, part: 5, kind: 'single', topics: o.t, level: o.lv ?? 3,
  questions: [{
    id: `v6q${no}`, no, stem: o.s, choices: o.c, answer: o.a,
    exp: o.e, why: o.w, ja: o.ja, topics: o.t,
  }],
});

const p6 = (o) => ({
  id: `v6-p6-${o.n[0]}`, part: 6, kind: 'doc', topics: o.t, level: o.lv ?? 4, docCount: 1,
  docs: [o.doc],
  /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
     x.id で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
     別問題に引き継がれるため）。 */
  questions: o.q.map((x, i) => ({
    id: x.id ?? `v6q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t, tag: x.tag,
  })),
});

export const R1 = [

  /* ══════════ PART 5 ══════════ */
  p5(101, { t: ['pos'], lv: 3,
    s: 'The maintenance supervisor inspects the loading-dock doors ------- , logging any wear in the shift report.',
    c: ['quarterly', 'quarters', 'quarterlies', 'quarter'],
    a: 0,
    e: '文の要素はすべてそろっており、空所には動詞 inspects を修飾する副詞が入る。quarterly は monthly / weekly / daily などと同じく、形容詞と副詞を兼ねる語。',
    w: ['正解。動詞 inspects を修飾する副詞としての quarterly。',
        '名詞の複数形。動詞の直後は副詞の位置で、名詞は置けない。',
        '名詞（定期刊行物）の複数形。quarterly を可算名詞として複数化した形で、この位置には合わない。',
        '名詞の単数形（四半期、の意味）。冠詞も前置詞もなく置けない。'],
    ja: '保守担当の責任者は搬入口の扉を四半期ごとに点検し、摩耗があればシフト報告書に記録している。' }),

  p5(102, { t: ['adjprep'], lv: 3,
    s: 'Older units of this scanner model are especially prone ------- overheating during long print runs.',
    c: ['to', 'with', 'for', 'at'],
    a: 0,
    e: 'prone は「~しやすい、~の傾向がある」という形容詞で、伴う前置詞は to のみ。',
    w: ['正解。prone to ~「~しやすい」。to の目的語には名詞も動名詞も置ける（prone to error ／ prone to overheating）。',
        'prone が傾向の対象を標示するのは to だけで、with は取らない。prone with という並びが現れるのは lying prone with his arms outstretched のように「うつ伏せの」という別語義の付帯状況で、傾向の対象を示すものではない。',
        'prone は傾向の対象を to で標示する形容詞で、for でその対象を示す型を持たない。',
        'at を補部に取るのは good at ／ adept at のように能力・熟達を表す形容詞で、prone はその語群に入らない。'],
    ja: 'このスキャナー型式の旧モデルは、長時間の連続印刷中に特に過熱しやすい。' }),

  /* id は v6q103s（no は 103 のまま。中身を差し替えたため設問 id は新規採番）。
     旧問は選択肢 will arrive / arrives / arriving / is arriving・正解 arrives で、
     drills/grammar3.js の「As soon as the shipment ------- , the receiving team will begin the
     quality check.（will arrive / arrives / is arriving / arrived、正解 arrives）」と
     装置・正解語・選択肢3語まで一致していた。ドリルを解いた記憶でそのまま答えが出るため、
     動詞を替え、誤答も「定形動詞かどうか」で切れる形に組み直してある。
     2026-08-18 の監査で、差し替え後の誤答 will set up を having set up に替え、id を v6q103s に再採番した。
     (1) 時の副詞節に will を置けないという規則には実例の反証がある（意志の will。Wikipedia の
     insource 検索で "must show that they suffer serious harm before the court will accept the case"
     等 13 件）。とくにこの文は「テーブルの配置が終わらないとケータリング業者は設営にかからない」
     という前提条件の読みが自然に立ち、誤答が「不可能」にならなかった。
     (2) 誤答を非定形の 3 形に揃えると、〈接続詞＋主語〉の後ろは定形動詞という構造だけで閉じる。
     2026-08-18 に英語版 Wikipedia の insource 正規表現検索で裏を取った。
     /[Dd]espite the [a-z]+ (leaving|arriving|ending|starting|closing|opening) (in|for|on|at|with|from|to)/
     は 46 件で、Despite the battle ending in a stalemate ／ Despite the railway arriving in 1850 ／
     Despite the ceasefire ending on 9 October のように、主語を伴う動名詞節が前置詞の目的語に
     立つ例が普通に出る。同じ正規表現の before 版は 22 件あるが、before the official opening on
     17 June ／ before the plural ending in slot のように -ing が名詞の例か、
     before the lockout ending in 1999 ／ before the syllables ending with a liquid のように
     -ing が名詞を後置修飾する例（＝before ＋ 名詞句）ばかりで、
     時を表す副詞節として働く before ＋〈主語〉＋ -ing は 1 件も無い。
     つまり before は、前置詞として使うときは名詞句か主語を伴わない動名詞しか取らず、
     主語が現れた時点で接続詞となり定形動詞を要求する。
     （Google Books Ngrams はこの帯の 4-gram を返さない——実在が確かめられている
     despite the series ending でも空を返す——ので、この論点の判定には使えない。）
     なおこの差し替えで、vol1-r1.js の No.103「Once the inspection ------- , the crew will be
     permitted ...（will conclude / concludes / concluding / is concluding）」との装置の重なりも解けた。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v6-p5-103s', part: 5, kind: 'single', topics: ['vform'], level: 3,
    questions: [{
      id: 'v6q103s', no: 103,
      stem: "Before the caterer ------- for tomorrow's reception, the events staff will finish arranging the tables in the main hall.",
      choices: ['having set up', 'sets up', 'setting up', 'to set up'],
      answer: 1,
      exp: 'before の後ろには主語 the caterer が置かれている。主語を伴う節の述語になれるのは時制を持つ定形動詞だけで、分詞も to 不定詞も述語動詞の位置には立てない。定形動詞は選択肢のうち sets up ひとつ。before が導く時の副詞節なので、指しているのが明日の出来事でも動詞は現在形で表す。',
      why: ['完了分詞。分詞は時制を持たないので、主語 the caterer を受ける述語動詞にはなれない。',
            '正解。主語 the caterer を受ける定形動詞。before が導く時の副詞節なので、明日の出来事でも現在形で表す。',
            '現在分詞。before は前置詞として -ing を取ることもあるが、その用法では -ing の前に主語を置かない（Before setting up, the caterer checks the floor plan.）。despite や with は Despite the match ending in a draw ... のように主語つきの動名詞節を取れるが、before はこの型を持たない。この文には主語 the caterer があるので before は接続詞であり、定形動詞が要る。',
            'to 不定詞。to 不定詞も時制を持たないため、主語を伴う節の述語動詞にはなれない。'],
      ja: '明日のレセプションに向けてケータリング業者が設営を始める前に、イベント担当のスタッフがメインホールのテーブル配置を終える。',
      topics: ['vform'],
    }] },

  /* id は v6q104s（no は 104 のまま。中身を全面的に差し替えたため設問 id は新規採番）。
     初版は recall＝「（欠陥品を）回収する」を正解とする語彙問題だったが、同じ Vol.6 の
     Part 7・No.196–200 が電気ケトルのリコール通知で答えがそのまま手に入るため差し替えた。
     その差し替え先「... carefully ------- the new shutdown procedure to every member of the
     maintenance crew.（informed / reminded / convinced / explained、正解 explained）」も、
     drills/vocab3.js の vusage3-02「Could you ------- the refund policy to the new hires before
     their first shift?（explain / warn / inform / discuss、正解 explain）」と
     〈V ＋ 内容 ＋ to ＋ 相手〉という枠・正解語・誤答 inform・排除の根拠まで一致していた。
     ドリルを解いた記憶でそのまま答えが出るため、of で補部を標示する型に替えてある。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v6-p5-104s', part: 5, kind: 'single', topics: ['vusage'], level: 3,
    questions: [{
      id: 'v6q104s', no: 104,
      stem: 'The overnight software failure ------- the call centre of access to its customer records for most of the morning.',
      choices: ['removed', 'withdrew', 'blocked', 'deprived'],
      answer: 3,
      exp: '空所の後ろは〈奪われた側 the call centre〉＋〈of ＋ 奪われたもの〉という並び。奪われた側を目的語に取り、奪われたものを of で標示できる動詞でなければ of access ... を受け止められない。deprive somebody/something of something がその型を持つ。',
      why: ['remove は取り除かれる物のほうを目的語に取り、取り除く元を from で示す（remove the files from the server）。奪われた側を目的語に置いて of を続ける型を持たない。',
            'withdraw も引き揚げる物のほうを目的語に取り、元を from で示す（withdraw the funds from the account）。of で補部を標示する型を持たない。',
            'block は遮断される対象を目的語に取り、遮断する内容は from ＋ 動名詞で示すか（block staff from editing the file）、access to ... をそのまま目的語に取る（block access to the records）。of を続ける型を持たない。',
            '正解。deprive somebody/something of something「〜から…を奪う」。奪われた側を目的語に取り、奪われたものを of で標示する。'],
      ja: '夜間に起きたソフトウェアの障害により、コールセンターは午前中の大半にわたって顧客記録を参照できなくなった。',
      topics: ['vusage'],
    }] },

  p5(105, { t: ['pron'], lv: 3,
    s: 'The supplier shipped the replacement parts in two separate boxes: one arrived within a week, but ------- did not arrive until the following month.',
    c: ['other', 'another', 'the others', 'the other'],
    a: 3,
    e: 'two separate boxes という閉じた集合のうち一つは one で受けているので、残る一つを指すのは the other。',
    w: ['other は限定詞や the を伴わずに単独の代名詞としては使えない語で、the other や another、others の形でしか立たない。',
        'another は「（今ある物とは別に）もう一つ」で、既出の集合の外に新たな一つがあることを含意する。two separate boxes という閉じた集合と矛盾する。',
        'the others は「残り全部」を指す複数形。two separate boxes から one を除いた残りは箱一つなので、複数形では数が合わない。',
        '正解。two separate boxes のうち一つは one で受けたので、残る一つを指すのは the other。'],
    ja: 'サプライヤーは交換部品を2つの箱に分けて発送し、一方は1週間以内に届いたが、もう一方は翌月まで届かなかった。' }),

  p5(106, { t: ['biz'], lv: 5,
    s: "Customers who believe they have been overcharged on their monthly statement may seek ------- through the ombudsman's office rather than through the courts.",
    c: ['address', 'redraft', 'regress', 'redress'],
    a: 3,
    e: 'redress（名詞・不可算）「（受けた不当な扱いに対する）救済・補償」。seek redress で定型。他の3語は綴りが似ているだけで、「不当を正すこと・その補償」という語義を担わない。',
    w: ['名詞 address には、(1) 所在を示す表示（住所・宛先・IP アドレス）、(2) 人に向けて発する改まった言葉（演説、および元首への上奏文・請願）、(3) 人に対する物腰・話しぶり（a man of pleasing address）や古風な「才覚・手際」——といった語義がある。(1)(2) は可算で an address ／ the address のように限定詞を伴うため、無冠詞単数のこの位置には置けない。(3) は不可算なので無冠詞で立てるが、これは応対する人の様子・技量を指す語で、過大請求を受けた側がオンブズマンを通じて求める補償を指せない。「（不当・問題を）正す」という意味を担うのは動詞の address であり、その意味に対応する名詞は redress のほうである。',
        'redraft の名詞用法は「書き直した原稿・第二稿」と、金融の「（不渡りになった手形に対して振り出す）再手形」で、どちらも一つ二つと数える可算名詞。a redraft ／ the redraft のように限定詞を伴う必要があり、無冠詞単数のこの位置には置けない。',
        'regress の名詞用法は、progress の対義語としての「後戻り・退行」と、法律用語の「（賃借人などが）元の場所へ戻る権利」（ingress, egress, and regress という定型で使う）で、いずれも〈元の位置・状態へ戻ること〉を指す。受けた不利益に対する補償という語義は担わない。',
        '正解。seek redress「救済を求める」。overcharged という被害に対する補償・是正を表す不可算名詞。'],
    ja: '自分が毎月の明細で過大請求されたと考える顧客は、裁判ではなくオンブズマン事務所を通じて救済を求めることができる。' }),

  p5(107, { t: ['ptcp'], lv: 3,
    s: 'The lab discarded any calibration readings ------- outside the standard temperature range, since those values could not be trusted for the report.',
    c: ['recording', 'record', 'recorded', 'to record'],
    a: 2,
    e: 'record は他動詞で目的語を必要とするが、空所の後ろは outside 以下の前置詞句だけで目的語が無い。目的語にあたる readings が修飾される側に立っているので、過去分詞が名詞を後置修飾する形になる。',
    w: ['現在分詞。能動なので直後に目的語が要るが、空所の後ろは前置詞句だけで目的語が無い。',
        '原形。文にはすでに述語動詞 discarded があり、関係代名詞も接続詞も無いまま定形動詞をもう一つ置くことはできない。',
        '正解。readings recorded outside ...「…の外で記録された測定値」。受け身の後置修飾。',
        '名詞を後置修飾する to 不定詞は「これから記録する予定の」という未実現の意味になる（forms to complete「これから記入する用紙」）。主節はすでに得られた測定値を discarded（破棄した）という内容なので、未実現を表すこの形とは両立しない。記録が済んだことを受け身で示せるのは過去分詞。'],
    ja: '研究室は標準温度範囲の外で記録された較正の測定値をすべて破棄した。それらの値は報告書として信頼できなかったためである。' }),

  p5(108, { t: ['adv'], lv: 4,
    s: 'Even during the holiday rush, the new distribution route has kept average delivery time to ------- under two hours.',
    c: ['fully', 'well', 'vastly', 'deeply'],
    a: 1,
    e: '前置詞句の内側で数量を前から強める副詞。well は under/over/within など範囲を示す前置詞の直前に置いて「かなり」の意味で幅を強調できる。',
    w: ['fully は「完全に、全部」で、程度の幅を強めるのではなく完了・充足を表す。fully under two hours という並びは実在せず、時間の範囲を強める働きを持たない。',
        '正解。well under ~「~をかなり下回って」。前置詞 under の目的語となる数量表現全体を前から強める。',
        'vastly は different / superior のような形容詞・比較表現を強める副詞（vastly different）で、under のような前置詞句の内側で数量を強める用法を持たない。',
        'deeply は感情や色の濃さなどを強める副詞（deeply concerned / deeply colored）で、時間の範囲を強めることはできない。'],
    ja: '繁忙期でも、新しい配送ルートによって平均配達時間は2時間をかなり下回る水準に保たれている。' }),

  p5(109, { t: ['rel'], lv: 4,
    s: 'The keynote speaker, ------- the committee had negotiated a reduced fee, agreed to extend her session by twenty minutes when the technical setup ran late.',
    c: ['for whom', 'for which', 'whose', 'who'],
    a: 0,
    e: '先行詞 the keynote speaker は人。動詞 negotiate は「（人）のために交渉する」の意味で for を伴い、関係詞節の内部でその for の目的語が欠けている。前置詞を関係詞の前に出した for whom が入る。',
    w: ['正解。for whom「その人のために」。negotiated a reduced fee for the keynote speaker という文の for 以下が関係詞節の先頭に出た形。',
        'which は物を受ける関係代名詞。先行詞は人なので使えない。',
        'whose の直後には無冠詞の名詞が続く必要がある。この文では the committee had negotiated という完全な節が続いており、whose の後ろに名詞が来ていない。',
        'who は先行詞が人であることには合うが、節内を見ると negotiated a reduced fee で終わっており、for に相当する前置詞の情報を受け止める場所がないまま文が完結してしまう。'],
    ja: 'その基調講演者――委員会が減額した講演料を交渉していた相手――は、技術準備が遅れたためセッションを20分延長することに同意した。' }),

  p5(110, { t: ['conjprep'], lv: 3,
    s: '------- a shortage of certified electricians in the region, the panel installation has been rescheduled for late September.',
    c: ['Because', 'Due to', 'Even though', 'Provided that'],
    a: 1,
    e: '空所の後ろが a shortage of ... という名詞句のみなので前置詞句。Due to は「~のために」。',
    w: ['接続詞。後ろに主語と動詞を含む節が必要。',
        '正解。Due to + 名詞句「~のために」。',
        '接続詞（譲歩）。後ろに節が必要で、意味も「不足にもかかわらず」となり文意に合わない。',
        '接続詞（条件）。後ろに節が必要。'],
    ja: 'この地域で有資格の電気技師が不足しているため、パネルの設置は9月下旬に延期された。' }),

  /* id は v6q111r（no は 111 のまま。stem を全面的に差し替えたため設問 id は新規採番）。
     2026-08-18 の一括照合で、まず動詞を reduce から suspend に替えた。
     旧版の選択肢 to reduce / reduce / reduced / reducing は drills/grammar4.js の verbal-11
     （with a view to ------- delivery times、正解 reducing）と4語すべてが一致し、正解の形まで
     同じだった。vol3-r1.js の No.113（committed to ------- its energy consumption、正解 reducing）
     とも3語が重なっていた。
     同日の監査で、その差し替え後の stem
     「Despite mounting pressure from shareholders, the board resisted ------- the dividend for a
     third consecutive year.」に二つの難点が出たため、stem の内容だけを入れ替えた。
     (1) for a third consecutive year を suspending に掛けて読むと「すでに2年止めている配当を
     3年目も止める」ことに抵抗した、となり、抵抗している側が現状維持を拒んでいるのか続行を
     拒んでいるのか読みが定まらない。
     (2) 株主が「配当の停止」を求めて圧力をかけるという向きが、ビジネス文書として逆である
     （株主が求めるのは通常は配当のほうで、止めろと迫る側ではない）。
     株主が中止を迫る対象を、費用のかさむ海外展開に替えて向きをそろえた。
     resist ＋ 動名詞という論点、選択肢4語、正解の位置（D）はいずれも変えていない。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v6-p5-111r', part: 5, kind: 'single', topics: ['verbal'], level: 3,
    questions: [{
      id: 'v6q111r', no: 111,
      stem: 'Despite mounting pressure from shareholders, the board resisted ------- the overseas expansion, arguing that the pilot stores had not yet completed a full year of trading.',
      choices: ['to suspend', 'suspend', 'suspended', 'suspending'],
      answer: 3,
      exp: 'resist が目的語に取るのは名詞句か動名詞句で、to 不定詞を補部に取る型を持たない。空所は他動詞 resist の目的語の位置なので、動詞を置くなら動名詞。',
      why: ['不定詞。resist が取る目的語は名詞句か動名詞句で、to 不定詞を補部に取る型を持たない。',
            '原形。他動詞 resist の目的語の位置に立てるのは名詞相当の形で、動詞なら動名詞。原形は入らない。',
            '過去分詞・過去形。これも名詞相当の形ではなく、他動詞 resist の目的語の位置に立てない。',
            '正解。resist doing something。resist の目的語になるのは名詞句か動名詞句。'],
      ja: '株主からの圧力が強まる中でも、取締役会は、試験店舗がまだ丸1年の営業を終えていないことを理由に、海外展開を中断することに抵抗した。',
      topics: ['verbal'],
    }] },

  p5(112, { t: ['vusage'], lv: 3,
    s: 'New branch managers are asked to ------- the operations manual before making any changes to the standard opening procedure.',
    c: ['consult with', 'refer', 'consult', 'ask'],
    a: 2,
    e: 'consult は他動詞で、文書・資料を直接目的語に取れる（consult the manual）。',
    w: ['with を伴う consult は「〜と協議する」という相互的な行為を表す型で、with の目的語は協議に応じる側（人・部署・専門家）を指す。マニュアルは応じる側になれない。「参照する」の意味の consult は前置詞を挟まずに文書を直接目的語に取る型で、with を挟むとこの型から外れる。',
        'refer は自動詞で、refer to the manual のように to を伴わなければ文書を目的語に取れない。',
        '正解。consult + 文書「（文書）を参照する」。他動詞なので前置詞なしで目的語を取る。',
        'ask の目的語になるのは〈尋ねる相手〉（ask the supervisor）か〈尋ねる内容そのもの〉（ask a question ／ ask the price）で、参照する文書はどちらにも当たらない。'],
    ja: '新任の支店長は、標準の開店手順を変更する前に業務マニュアルを参照するよう求められている。' }),

  /* id は v6q113r（no は 113 のまま。中身を全面的に差し替えたため設問 id は新規採番）。
     旧問「This year's fundraising total was ------- higher than organizers had projected ...」は
     drills/grammar2.js の comp-04「Attendance at this year's trade fair was ------- higher than
     organizers had projected.」と、枠・正解（far）・選択肢の4語（very / so / far / too）まで
     一致していた。ドリルで解いた記憶がそのまま使えるため、同じ comp の中で相関比較に替えてある。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v6-p5-113r', part: 5, kind: 'single', topics: ['comp'], level: 3,
    questions: [{
      id: 'v6q113r', no: 113,
      stem: 'The earlier a household switches to the metered tariff, ------- it pays for water over the course of the year.',
      choices: ['the less', 'less', 'the least', 'least'],
      answer: 0,
      exp: '前半が The earlier ... で始まる相関比較〈The ＋ 比較級 …, the ＋ 比較級 …〉。後半も the を伴う比較級で受ける。',
      why: ['正解。the less it pays for water「水道料金はそれだけ少なくて済む」。前半 The earlier と対をなす後半。',
            'the が無い。この構文の the は指示の定冠詞ではなく相関比較を組み立てる要素で、前半の The earlier と対になる後半にも必ず要る。',
            '最上級。この構文の前後半に入るのは比較級で、最上級は前半の The earlier と対にならない。また the least it pays for water は「その世帯が支払う最低額」という名詞句にしかならず、述語を欠いた断片になる。',
            '最上級であるうえ the も無い。'],
      ja: '従量制の料金体系に切り替えるのが早ければ早いほど、その世帯が1年を通じて支払う水道料金は少なくて済む。',
      topics: ['comp'],
    }] },

  p5(114, { t: ['pos'], lv: 3,
    s: "The panel's ------- of the revised safety plan cleared the way for construction to resume on schedule.",
    c: ['endorsement', 'endorsed', 'endorses', 'endorse'],
    a: 0,
    e: '所有格 The panel\'s と前置詞 of の間は名詞の位置。動詞の形（原形・三単現・過去分詞）はこの位置に立てない。',
    w: ['正解。所有格＋名詞＋of の型。',
        '過去分詞。名詞の位置には入らない。',
        '三人称単数現在の定形動詞。所有格の直後は名詞の位置であり、定形動詞は置けない。この文の述語動詞は既に cleared がある。',
        '動詞の原形。所有格の直後には来ない。'],
    ja: '審査委員会が改訂版の安全計画を承認したことで、予定通り工事を再開できるようになった。' }),

  /* 2026-08-18 の一括照合で、動詞を complete から undertake に替えた。
     旧版の選択肢 completes / complete / will complete / completed は drills/grammar3.js の
     vform-22（until the ventilation contractor ------- the final inspection、正解 completes）と
     2語が重なり、stem の inspection まで共通していた。装置は別（仮定法現在 と 時の副詞節の現在形）
     だが表層が近いので、語彙だけを入れ替えてある。 */
  p5(115, { t: ['subj'], lv: 3,
    s: 'The safety officer recommended that each forklift operator ------- a refresher course before the annual audit.',
    c: ['undertakes', 'undertake', 'will undertake', 'undertook'],
    a: 1,
    e: 'recommend that ... の that 節は仮定法現在（原形）。三単現の s は付けない。',
    w: ['三単現の定形。recommend / require / suggest など要求・提案を表す動詞に続く that 節では、動詞は主語の人称・数にかかわらず原形をとり、s は付かない。',
        '正解。要求・提案の動詞に続く that 節は原形（仮定法現在）。',
        '未来形。この that 節の動詞は時制を持たない原形で表すため、助動詞 will を立てられない。',
        '過去形。この that 節の動詞は時制を持たない原形で表すため、過去形は入らない。'],
    ja: '安全管理者は、年次監査の前に各フォークリフト運転者が再研修を受けるよう勧告した。' }),

  p5(116, { t: ['confuse'], lv: 4,
    s: 'Because the serial number on the damaged unit was barely ------- to the naked eye, the warranty claim had to be processed manually.',
    c: ['eligible', 'eligibility', 'legible', 'legislative'],
    a: 2,
    e: 'be ------- to the naked eye「肉眼で〜だ」という枠。読み取る側を to で受けられるのは legible「（文字が）判読できる」で、legible to the reader ／ barely legible to the naked eye のように使う。',
    w: ['「（人・組織が）資格を満たしている」。この形容詞が to を伴うのは eligible to apply のような to 不定詞か、eligible to the office of ... のように就く地位を示す場合で、the naked eye のような〈読み取る側〉を to で受ける型は持たない。文字が読めるかどうかを述べる語でもない。',
        '名詞。ここに要るのは主語 the serial number の状態を述べる形容詞で、抽象名詞を置くと「シリアル番号＝資格そのもの」となり、to the naked eye も掛かる先を失う。',
        '正解。legible「判読できる」。barely legible to the naked eye「肉眼ではかろうじてしか読み取れない」。',
        '「立法の、議会の」。議会・法律の働きを述べる形容詞で、文字の見え方は表さず、to で読み取る側を受ける型も持たない。'],
    ja: '破損したユニットのシリアル番号は肉眼ではかろうじてしか判読できなかったため、保証請求は手作業で処理せざるを得なかった。' }),

  /* id は v6q117r（no は 117 のまま。中身を全面的に差し替えたため設問 id は新規採番）。
     直前の版「Although the vendor submitted three revised cost estimates, ------- of them matched ...」は
     vol1-r1.js の No.117「------- of the four bids met the technical specification, so the tender will be
     reissued.」と、選択肢4語（Neither / Both / Either / None）・正解（none）・
     「3者以上だから2者専用語は使えない」という装置まで一致していた。
     さらに誤答の most は、drills/context3.js の Every / Each / Most / All（正解 All）と
     4語の組が完全に一致してしまうため several に替えてある（装置は別で、
     context3 側は「Every / Each は単数名詞しか取らない」を問う設問）。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v6-p5-117r', part: 5, kind: 'single', topics: ['quant'], level: 4,
    questions: [{
      id: 'v6q117r', no: 117,
      stem: 'The refurbishment was finished on schedule in ------- but two of the twelve guest rooms, and those two are due to reopen at the end of the month.',
      choices: ['each', 'all', 'every', 'several'],
      answer: 1,
      exp: '「〜を除いて全部」を表す all but ~ の型。ここでの but は「〜を除いて」を表す前置詞で、その直前に立てるのは全体を指す all のような語に限られる。',
      why: ['each は each of the twelve guest rooms のように of 句を続ける形は取れるが、but を後続させて除外を表す型を持たない。',
            '正解。all but two of the twelve guest rooms「12室のうち2室を除く全室で」。',
            'every は直後に単数名詞を要求する限定詞で（every guest room）、but も of 句も直接続けられない。',
            'several は several of the twelve guest rooms のように of 句を続ける形も、無冠詞複数を直接修飾する several guest rooms の形も取れるが、but を後続させて除外を表す型を持たない。'],
      ja: '改修は12ある客室のうち2室を除いて予定どおり完了し、その2室も今月末には再開の見込みである。',
      topics: ['quant'],
    }] },

  p5(118, { t: ['voice'], lv: 4,
    s: 'A significant backlog in permit approvals ------- last month after the online filing system went down for a week.',
    c: ['emerged', 'was emerged', 'emerging', 'has been emerged'],
    a: 0,
    e: 'emerge は自動詞で受動態にできない。last month という過去の一点があるので単純過去。',
    w: ['正解。',
        '自動詞に受動態は不可。',
        '分詞。この節には他に述語動詞が無く、定形動詞が要る位置に分詞は置けない。',
        '自動詞の受動態は不可であるうえ、現在完了は last month のように過去の一時点を特定する語句とは共起できない。'],
    ja: 'オンライン申請システムが1週間ダウンした後、許可証の承認に大きな滞留が生じた。' }),

  p5(119, { t: ['adv'], lv: 4,
    s: 'The venue must be booked at least six months in advance, ------- of whether the event is a wedding reception or a corporate seminar.',
    c: ['accordingly', 'likewise', 'nonetheless', 'irrespective'],
    a: 3,
    e: '直後の of を伴って「~にかかわらず」を作れるのは irrespective のみ。他は単独の文修飾副詞で、of 句を続けて名詞節を従える用法を持たない。',
    w: ['accordingly は「それに応じて」という文修飾の副詞で、単独で文をつなぐ働きしかなく、of を伴って直後の要素を従える用法を持たない。',
        'likewise は「~もまた」を表す文修飾の副詞で、単独で文をつなぐ働きしかなく、of を伴って直後の名詞節を従える用法を持たない。',
        'nonetheless は「それでもなお」という逆接の副詞で、これも of を伴って直後の名詞節を従える用法を持たない。',
        '正解。irrespective of ~「~にかかわらず」。of を伴って直接名詞節を従える。'],
    ja: '会場は少なくとも6か月前に予約しなければならない。催しが結婚披露宴か企業セミナーかにかかわらず。' }),

  p5(120, { t: ['phrasal'], lv: 4,
    s: "After three volatile quarters, the division's revenue finally began to ------- out, settling in a narrow band from month to month.",
    c: ['black', 'space', 'level', 'burn'],
    a: 2,
    e: 'level out「（変動していたものが）横ばいになる、安定する」。',
    w: ['black out は「意識を失う」「（停電・検閲で）暗転させる」の意味で、収益が横ばいになることを表せない。',
        'space out は「間隔を空けて配置する」または「（人が）ぼんやりする」の意味で、収益の変動が収まることとは無関係。',
        '正解。level out「上下動が収まり一定の水準に落ち着く」。',
        'burn out は「燃え尽きる」「（電球などが）切れる」「（人が）働きすぎて疲れ果てる」の意味で、数値が安定することを表さない。'],
    ja: '3四半期続いた変動の後、その部門の収益はようやく横ばいになり、月ごとの振れ幅も狭い範囲に落ち着き始めた。' }),

  /* id は v6q121r（no は 121 のまま。語族を差し替えたため設問 id は新規採番）。
     旧問の選択肢は more thorough / thorough / thoroughness / thoroughly で、vol5-r1.js の
     「All returned equipment must be inspected ------- before being placed back into stock.
     （thorough / thoroughly / thoroughness / thoroughness's、正解 thoroughly）」と
     語族・正解語が一致していた（drills/grammar.js の pos-07 も meticulous で同型）。
     語族を scrupulous に替えてある。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v6-p5-121r', part: 5, kind: 'single', topics: ['pos'], level: 3,
    questions: [{
      id: 'v6q121r', no: 121,
      stem: 'The bridge inspection report was ------- documented, complete with photographs and measurements for every support beam.',
      choices: ['more scrupulous', 'scrupulous', 'scrupulousness', 'scrupulously'],
      answer: 3,
      exp: '空所の直後は過去分詞 documented。was documented という受動態の内側に割り込んで動詞句を修飾できるのは副詞だけで、形容詞・名詞はこの位置に立てない。',
      why: ['形容詞 scrupulous の比較級。比較級になっても品詞は形容詞のままで、過去分詞 documented を修飾する働きは生じない。動詞句を修飾するには副詞形が要る。',
            '形容詞。形容詞は名詞を修飾するか、be 動詞などの補語の位置に立つ語で、過去分詞を修飾する働きを持たない。',
            '名詞。was の直後に名詞を置くと補語になってしまい、その後ろの documented を受け止める語が無くなる。',
            '正解。過去分詞 documented を修飾する副詞。'],
      ja: 'その橋梁点検報告書は細心の注意を払って記録されており、支持梁のすべてについて写真と測定値が添えられていた。',
      topics: ['pos'],
    }] },

  p5(122, { t: ['adjprep'], lv: 5,
    s: 'Under the new compliance framework, it is incumbent ------- every director to disclose any financial interest that could affect a board decision.',
    c: ['of', 'on', 'for', 'to'],
    a: 1,
    e: 'incumbent は it is incumbent on/upon somebody to do something「その人に~する責務がある」という型で、on（または upon）だけを取る。',
    w: ['of が続くのは名詞用法の incumbent（the incumbent of the post「その職の現職者」）で、その場合は冠詞が要る。形容詞 incumbent が義務を負う人を標示するのは on／upon。',
        '正解。it is incumbent on somebody to do something「~することがその人の責務である」。',
        'この枠で義務の担い手を標示するのは on／upon の 2 つで、for はその標識にならない。',
        'it is incumbent to do ...（担い手を示さない言い方）の to は直後に動詞の原形を要求する。この空所の後ろは every director という名詞句なので to では受けられず、担い手を標示するのは on／upon。'],
    ja: '新しいコンプライアンス制度のもとでは、取締役会の決定に影響しうる金銭的利害を開示することが、すべての取締役の責務である。' }),

  p5(123, { t: ['inv'], lv: 5,
    s: 'Little ------- the interns know that the routine audit conducted last spring would soon uncover a decade-old filing error.',
    c: ['do', 'had', 'did', 'were'],
    a: 2,
    e: '否定的限定を表す Little が文頭に出ると倒置が起こる。後ろの動詞 know が原形なので、対応する助動詞は過去形の did。',
    w: ['do は現在の助動詞。文全体は last spring という過去の出来事を報じており、時制が合わない。',
        'had なら後ろは過去分詞 known でなければならず、原形 know とは結び付かない。',
        '正解。Little did the interns know that ...「~とは知る由もなかった」。',
        'were は be 動詞。一般動詞 know を伴う疑問文型の倒置には do/does/did が要る。'],
    ja: 'インターンたちは、この春実施された定例監査が10年越しの記帳ミスを間もなく明るみに出すことになるとは、思いもしなかった。' }),

  p5(124, { t: ['biz'], lv: 5,
    s: 'Under the reimbursement policy, the ------- is on the employee to keep the original receipt until the claim has been fully processed.',
    c: ['bonus', 'opus', 'onus', 'onset'],
    a: 2,
    e: 'onus「（義務・責任の）重荷」。the onus is on somebody to do something で定型。',
    w: ['「特別手当、賞与」。この枠の to keep ... は空所の名詞が指す義務の中身を述べる補部だが、bonus は義務を表す名詞ではないので to 不定詞の補部を取れない。',
        '「（音楽・文学の）大作」。作品を指す名詞で、義務を表さないため to 不定詞の補部を取れない。',
        '正解。the onus is on somebody to do something「~するのはその人の責務である」。onus は義務そのものを指す名詞なので、その中身を to 不定詞で受けられる。',
        '「（物事の）始まり」。出来事の開始時点を指す名詞で、義務を表さないため to 不定詞の補部を取れない。'],
    ja: '払戻方針のもとでは、請求が完全に処理されるまで原本の領収書を保管しておくのは従業員の責任である。' }),

  p5(125, { t: ['vform'], lv: 4,
    s: 'The share of orders placed through the mobile app rather than by phone ------- steadily since the loyalty-points feature was introduced.',
    c: ['have grown', 'has grown', 'are growing', 'grow'],
    a: 1,
    e: '主語の中心は The share で単数。直後の of orders につられて複数扱いにしない。since 節があるので現在完了。',
    w: ['複数主語を受ける形。主語は直前の orders ではなく The share なので一致しない。',
        '正解。単数主語 The share を受ける has と、since 以下の継続を受ける現在完了。',
        '複数扱いであるうえ、since ... 以来の継続は現在完了で表す。',
        '複数扱いの現在形。since 節が示す継続を受けられない。'],
    ja: '電話ではなくモバイルアプリ経由で行われる注文の割合は、ポイント還元機能が導入されて以来、着実に増加している。' }),

  /* id は v6q126r（no は 126 のまま。中身を差し替えたため設問 id は新規採番）。
     旧問「... the regional office agreed to ------- a formal apology to every affected customer.
     （issue / admit / confess / commit、正解 issue）」は drills/vocab3.js の
     「Due to the manufacturing defect, the company agreed to ------- a full refund to all affected
     customers ...（issue / reimburse / compensate / publish、正解 issue）」と、
     〈agreed to ＋ 空所 ＋ a … to（all / every）affected customer(s)〉という枠と正解語が
     一致していた。枠と正解の動詞をともに替えてある。
     p5() ヘルパーは id を no から自動生成するため、このユニットだけは直接記述する。 */
  { id: 'v6-p5-126r', part: 5, kind: 'single', topics: ['colloc'], level: 4,
    questions: [{
      id: 'v6q126r', no: 126,
      stem: 'At the close of the hearing, the committee chair ------- a formal apology to the two employees whose records had been disclosed in error.',
      choices: ['extended', 'admitted', 'confessed', 'committed'],
      answer: 0,
      exp: 'extend には「（謝罪・礼・招待・歓迎などを）差し出す」という語義があり、〈extend something to somebody〉の型を取る（LDOCE は extend a warm welcome to ... ／ extend my thanks to ... を挙げる）。an apology もこの語群に入る。',
      why: ['正解。extend an apology to somebody「（人）に謝罪を申し出る」。extend ＋ 名詞 ＋ to ＋ 人 の型。',
            'admit には〈過失・責任・事実を認める〉（admit the error ／ admit responsibility ／ admit the mistake to the manager）と〈中へ入れる〉（admit visitors to the gallery）の二つの型があり、目的語になるのは前者では認める対象、後者では入れる人や物である。謝罪はそのどちらでもないので、admit の目的語にはならない。',
            'confess の目的語になるのも〈告白する対象〉、すなわち罪・過失・隠していた事実である（confess the mistake to the manager）。confess something to somebody という語順自体はあるが、謝罪はその目的語の類に入らない。',
            'commit にも commit something to something の型はあるが、to の後ろに立つのは預け先・投入先である（commit funds to the project ／ commit the details to memory ／ Collins は commit a child to the care of its aunt を「委ねる」の語義で挙げる）。この文の to の後ろは謝罪を受け取る相手なので、その型には当てはまらない。目的語のほうも、commit が取るのは〈犯す対象〉（commit an offence）か〈委ねる物・投じる資源〉で、謝罪はそのどちらでもない。'],
      ja: '審問の終わりに、委員会の議長は、記録が誤って開示された当該2名の職員に対して正式な謝罪を申し出た。',
      topics: ['colloc'],
    }] },

  p5(127, { t: ['ptcp'], lv: 3,
    s: '------- against the low afternoon sun, the mural appeared far more muted in color than it had at the unveiling.',
    c: ['Photographing', 'To photograph', 'Photographs', 'Photographed'],
    a: 3,
    e: '分詞構文の意味上の主語は主節の主語 the mural。壁画は「撮影される」側なので過去分詞。',
    w: ['現在分詞。分詞構文の意味上の主語は主節の主語 the mural になるが、壁画が「撮影する」側に立つことはできない。',
        '不定詞。文頭の to 不定詞が目的を表すとき、その動作を行うのは主節の主語 the mural。壁画が撮影する側に立つことはできない。',
        '動詞なら三人称単数現在形、名詞なら photograph の複数形。文には既に述語動詞 appeared があり、接続詞も関係詞も無いまま定形動詞をもう一つ置くことはできない。名詞の複数形と読んでも、コンマの前の句を主節につなぐ働きを持たない。',
        '正解。Photographed against the sun, the mural appeared ...「逆光で撮影すると、壁画は…見えた」。撮影されるのは主節の主語 the mural。'],
    ja: '午後の低い日差しを背にして（＝逆光で）撮影すると、その壁画はお披露目のときよりもずっとくすんだ色に見えた。' }),

  p5(128, { t: ['adv'], lv: 4,
    s: 'Persuading the landlord to waive the deposit was ------- an achievement, given how firmly he had resisted every previous request.',
    c: ['very', 'fairly', 'quite', 'highly'],
    a: 2,
    e: '空所は不定冠詞 an の前。この位置に立てる程度語は quite / rather / such / what など数が限られている（quite an achievement ／ rather a nuisance ／ such an achievement ／ What an achievement!）。very / fairly / highly は不定冠詞の前に出られず、a very great achievement のように限定詞の内側に入って形容詞・副詞を修飾する。',
    w: ['very は、程度副詞としては形容詞・副詞を修飾して限定詞の内側に立ち（a very great achievement）、「まさにその」の意味の形容詞としても限定詞の後ろに立つ（the very man I wanted）。どちらの用法でも位置は限定詞の内側で、不定冠詞の前に出る語順を持たない。',
        'fairly も形容詞・副詞を修飾する程度副詞で、立つ位置は限定詞の内側（a fairly demanding target）。不定冠詞の前には出られない。',
        '正解。quite an achievement「なかなかの成果」。quite は不定冠詞の前に置ける数少ない程度語で、rather（rather a nuisance）、such（such an achievement）、what（What an achievement!）が同じ語順を取る。',
        'highly も形容詞・分詞を修飾する副詞で、立つ位置は限定詞の内側（a highly unusual request）。不定冠詞の前には出られない。'],
    ja: '大家に敷金の免除を承諾させたのは、なかなかの成果だった。彼がそれまでの申し出をことごとく固く拒んでいたことを思えば。' }),

  p5(129, { t: ['conjprep'], lv: 4,
    s: 'Please keep a printed copy of the itinerary ------- the online booking system becomes unavailable during the conference.',
    c: ['in case', 'unless', 'provided that', 'now that'],
    a: 0,
    e: '「もしもの時のために」という予防の意味を表すのは in case。unless は条件、provided that も条件、now that は既に起きたことを理由に導く。',
    w: ['正解。in case ~「~するといけないので、~に備えて」。実際に起こるかどうかにかかわらずあらかじめ備える意味。',
        'unless は「~でなければ」という条件を表す。「システムが使えなくなら『なければ』印刷物を持っておく」では意味が逆転し、常に予備として持つという文意に合わない。',
        'provided that は「~という条件を満たす場合に限り」と実行の可否を条件に縛る接続詞。印刷物は障害が起きる前に手元に用意しておかなければ役に立たないので、用意すること自体を将来の障害の発生に縛るこの読みでは、指示として実行できない。',
        'now that は「今や~なので」とすでに実現した事実を理由として導く語で、まだ起きていないことを述べるこの文脈には合わない。'],
    ja: '会議中にオンライン予約システムが使えなくなる場合に備えて、旅程表の印刷物を1部持っておいてください。' }),

  p5(130, { t: ['confuse'], lv: 4,
    s: "The consultant's carefully worded questions were designed to ------- honest feedback from reluctant employees.",
    c: ['illicit', 'elicit', 'implicit', 'explicit'],
    a: 1,
    e: 'to の後ろには動詞の原形が必要。4語のうち動詞なのは elicit のみ。elicit「（反応・情報を）引き出す」。',
    w: ['形容詞「違法な」。to の後ろに動詞が必要なこの位置には入らない。',
        '正解。elicit feedback「反応・意見を引き出す」。',
        '形容詞「暗黙の」。to の後ろに必要な動詞ではない。',
        '形容詞「明白な、明示的な」。動詞ではない。'],
    ja: 'コンサルタントの入念に練られた質問は、消極的な従業員から率直な意見を引き出すために考えられたものだった。' }),

  /* ══════════ PART 6 ══════════ */
  p6({
    n: [131, 132, 133, 134], lv: 4, t: ['voice', 'connect'],
    doc: {
      label: 'E-mail',
      head: "To: Friends of Meadowcroft Garden\nFrom: Membership Office\nDate: 10 September\nSubject: Changes to this year's autumn plant sale",
      body: [
        'Dear Friends,',
        "Because resurfacing work on the main lawn will not be finished in time, this year's autumn plant sale {{1}} in the greenhouse courtyard instead of on the lawn.",
        'The courtyard has less browsing space than the lawn, so {{2}} twenty-five stalls will be available this year, compared with the usual forty.',
        "From 1 October, Friends members may reserve up to five plants online before the sale opens to the public. Reserved plants will be labelled with the member's name and held at the collection table near the courtyard entrance. {{3}} Members who do not collect their reservation within thirty minutes of the sale's opening will have their plants released to other buyers.",
        'The courtyard is also a shorter walk from the car park than the lawn, and there is a small café nearby for anyone who would like a hot drink while they wait. {{4}}, we recommend allowing extra time to reach the courtyard on the morning of the sale, since the path is not yet signposted from the main gate.',
        'Regards,\nMembership Office',
      ],
    },
    q: [
      { tag: '態', t: ['voice'],
        c: ['holding', 'will hold', 'will be held', 'has held'],
        a: 2,
        e: '「催しを開く」の意味の hold は他動詞で目的語を必要とするが、空所の後ろは場所を示す前置詞句だけで目的語が無い。主語 this year\'s autumn plant sale がその目的語にあたるので受動態。ヘッダの日付は 9 月 10 日、催しはこれからなので未来形。',
        w: ['分詞。この節には定形動詞が他に無く、文の述語動詞になれない。',
            '能動態。hold は「（催しを）開く」の意味では目的語を必要とするが、空所の後ろに目的語となる名詞句が無い。',
            '正解。will be held。hold の目的語にあたるものが主語に立った受動態で、催しの日はまだ先なので未来形。',
            '能動態であるうえ、hold の目的語となる名詞句が空所の後ろに無い。現在完了である点も、これから開く催しを述べる文脈と合わない。'] },
      { tag: '語彙', t: ['quant'],
        c: ['only', 'quite', 'most', 'very'],
        a: 0,
        e: '基数＋複数名詞（twenty-five stalls）を前から直接修飾できるのは only。quite / most / very はこの型を取らない。',
        w: ['正解。only + 数 + 複数名詞「わずか~」。',
            'quite は quite a few のように不定冠詞を介する言い方はあるが、quite twenty-five stalls のように基数を直接前に置く型は持たない。',
            'most は most of the stalls や無冠詞複数の most stalls の形を取り、most twenty-five stalls のように基数の直前には置けない。',
            'very は very many のように many を介して数量を強めることはあっても、基数を直接修飾する型は持たない。'] },
      /* id は v6q133r（no は 133 のまま。選択肢を差し替えたため設問 id は新規採番）。
         旧 (C) 「Reservations will not be confirmed until payment is received in person on the
         day of the sale.」は本文のどことも矛盾せず（オンラインで予約し当日現地で支払う、
         と読めば直後の「30分ルール」ともつながる）、第二の正解になっていた。
         受取場所を正門に変えて、直前の「中庭入口そばの受取台」と正面から矛盾させてある。 */
      { tag: '文挿入', t: ['p6ins'], id: 'v6q133r',
        c: [
          "This year's most popular variety, the same one featured at the spring show, will be available in limited numbers.",
          'Plants may only be reserved by visiting the membership office in person.',
          'Reserved plants will remain at the main gate until closing time on the day of the sale.',
          'Please bring your membership card or the confirmation e-mail when you come to collect your plants.',
        ],
        a: 3,
        e: '直前で「予約した植物は会員名を付けて受付台で保管する」、直後で「30分以内に受け取らなければ他の買い手に回す」と述べている。受け取りに必要な持ち物を示す文が間に入って初めて2文がつながる。',
        w: ['the spring show と既知のもののように指しているが、その催しは本文のどこにも出ておらず指示先が無い。段落は予約から受け取りまでの手順を追っており、品種の在庫数はこの連鎖に入らない。',
            '同じ段落の冒頭で「会員はオンラインで最大5鉢まで予約できる」と述べており、「事務所に出向かなければ予約できない」は矛盾する。',
            '直前の文が「予約した植物は中庭入口そばの受取台で保管する」と保管場所を定めており、「正門に置かれたままになる」はこれと矛盾する。直後の「開場から30分以内に受け取らなければ他の買い手に回す」とも、閉場まで置いておくという記述が両立しない。',
            '正解。'] },
      { tag: '接続語', t: ['connect'],
        c: ['Therefore', 'Similarly', 'For example', 'However'],
        a: 3,
        e: '「駐車場から近く、待つ間に温かい飲み物も楽しめる」という利点の後に「それでも道に案内表示が無いので余裕を持って」と注意を促しており、逆接。',
        w: ['因果。駐車場から近いことは、余裕を持つ必要があることの原因にならない。',
            '並列。前後は同種の事柄の言い換えではない。',
            '例示。後続文は前文の具体例ではない。',
            '正解。'] },
      ].map(x => ({ ...x, s: null })),
  }),

  p6({
    n: [135, 136, 137, 138], lv: 4, t: ['voice', 'pron'],
    /* 2026-08-18 の一括照合で、題材をエレベーターの近代化工事から公共計量台の再校正に替えた。
       旧版は drills/context.js の u-p6c-01（TO: All Kettleworth Building Occupants ／
       RE: Elevator Modernization ／「Beginning Monday, 24 March, the two passenger elevators
       in the east lobby {{1}} a six-week modernization program. During this period, only the
       freight elevator ... will be available for general use.」）と、
       (1) エレベーターの近代化工事という題材、(2)「During this period, only the ◯◯ will …」という
       第1段落の文型、(3) 移動に支援が要る人を代替の貨物用リフトへ案内するという第2段落の趣旨、
       の三つが重なっていた（本文 5-gram でも "during this period only the" が一致）。
       同じ Vol.6 の Part 3・No.59–61 もエレベーターの年次点検を扱っており、巻内でも題材が二重になっていた。
       空所の装置（他動詞句の目的語欠落による受動態＋未来／文挿入／逆接／単数の it）は変えていない。 */
    doc: {
      label: 'Notice',
      title: 'Notice — Recalibration of the Public Weighbridge, Draycott Household Waste Site',
      body: [
        'The public weighbridge at the Draycott Household Waste Site {{1}} for recalibration from 8 September to 19 September. Loads brought in during those two weeks will instead be assessed by volume at the gate house, and the weight-based charge will not apply until the weighbridge reopens.',
        'Traders who hold a trade-waste permit and need a certified weight ticket during the closure should telephone the site office before setting out; they will be booked in at the district weighbridge on Ashcombe Lane. {{2}} A member of the site team will meet you at the north gate with the transfer note you will need to present there.',
        'The site office will do its best to keep queues at the gate to a minimum. {{3}}, waiting times on Saturday mornings are likely to be longer than usual, because every load has to be assessed by eye.',
        'A revised charging sheet setting out the volume-based rates will be posted to every permit holder before the work begins. Please keep {{4}} for reference until the weighbridge reopens.',
      ],
    },
    q: [
      { tag: '態・時制', t: ['voice', 'ctense'],
        c: ['has taken out of service', 'will be taken out of service', 'taking out of service', 'will take out of service'],
        a: 1,
        e: 'take ... out of service は目的語を take と out の間に置く他動詞句（take the weighbridge out of service）。空所の後ろに目的語となる名詞句が無いので、目的語が主語に立った受動態。次文の will instead be assessed / will not apply が工事期間をこれからの出来事として示しているので未来形。',
        w: ['能動態。take と out の間に目的語となる名詞句が無い。現在完了である点も、次文の will instead be assessed が示すこれからの期間と合わない。',
            '正解。',
            '分詞。この節には定形動詞が他に無く、文の述語動詞になれない。',
            '能動態。take と out の間に目的語となる名詞句が無い。'] },
      /* id は v6q136r（no は 136 のまま。中身を差し替えたため設問 id は新規採番）。
         初版の (B)「The same arrangement was used during last year's roof repairs.」は
         直前の a temporary alternative を指す読みが成立し、本文のどことも矛盾しないまま
         その位置に収まってしまうため第二の正解になっていた。誤答3つはいずれも
         直前または直後の文と正面から矛盾する内容にしてある。 */
      { tag: '文挿入', t: ['p6ins'], id: 'v6q136r',
        c: [
          'Vehicles will not be met at the north gate at any point while the recalibration is under way.',
          'Please give the registration of the vehicle when you call, so that it can be added to the gate list for that day.',
          'The site team will not be on duty during the first week of the recalibration.',
          'No certified weight ticket can be issued anywhere in the district while the recalibration is under way.',
        ],
        a: 1,
        e: '直前は「事前に現場事務所へ電話すれば、アシュコム通りの地区計量台に予約を入れてもらえる」、直後は「現場の担当者が北門で搬出票を渡します」。電話のときに何を伝えるのか、そしてなぜ担当者が待ち構えていられるのかを示す文が間に入って初めて2文がつながる。',
        w: ['直後の文が「担当者が北門で搬出票を渡します」と述べており、「北門で迎えることは一切ない」はこれと矛盾する。',
            '正解。',
            '直後の文が「担当者が北門で搬出票を渡します」と条件を付けずに述べており、「最初の1週間は担当者が不在」はこれと矛盾する。',
            '直前の文が「電話すればアシュコム通りの地区計量台に予約を入れてもらえる」と述べており、「工事中は地区内のどこでも計量票を発行できない」はこれと矛盾する。'] },
      { tag: '接続語', t: ['connect'],
        c: ['However', 'Therefore', 'For instance', 'Likewise'],
        a: 0,
        e: '「待ち時間は最小限に抑えるよう努める」という約束の後に、「それでも土曜午前は普段より長くなる見込み」と留保を述べており、逆接。',
        w: ['正解。',
            '因果。待ち時間を抑える努力が、待ち時間が延びることの原因にはならない。',
            '例示。後続文は前文の具体例ではない。',
            '並列。前後は同種の事柄の言い換えではない。'] },
      { tag: '代名詞', t: ['pron', 'cohesion'],
        c: ['them', 'one', 'it', 'those'],
        a: 2,
        e: '直前の文で送られるものは主語の a revised charging sheet ひとつ。keep の目的語はそれを受ける代名詞で、sheet は単数の可算名詞なので it で受ける。',
        w: ['複数を受ける代名詞。keep ... for reference の目的語になるのは手元に残して参照する書き物で、この文で送られてくるのは a revised charging sheet ひとつである。文中の唯一の複数名詞 the volume-based rates は料率そのものを指す語で、保管して参照する対象にならない。',
            'one は同種の不特定の一つを指す語で（a bigger one など）、既出の特定の a revised charging sheet そのものを指し直すことはできない。',
            '正解。単数の可算名詞 a revised charging sheet を受ける it。',
            '複数を受ける指示代名詞。単数の a revised charging sheet とは数が合わない。'] },
      ].map(x => ({ ...x, s: null })),
  }),

  p6({
    n: [139, 140, 141, 142], lv: 4, t: ['rel', 'ctense'],
    doc: {
      label: 'Article',
      title: 'Halbrook Freight Terminal Opens Overnight Shift as Cargo Volumes Climb',
      head: 'HARBOR CITY — 12 March',
      body: [
        'Halbrook Freight Terminal, {{1}} container volumes have climbed for four consecutive quarters, opened a new overnight shift last month, running from midnight to eight in the morning.',
        'This is the first time in over a decade that the terminal {{2}} a third shift; the previous overnight shift, introduced in the early 2000s, was discontinued after only two years.',
        "The new shift is staffed largely by workers transferring from the terminal's smaller depot in Netherby, which closed permanently at the end of February. Local officials have welcomed the extra jobs, though several nearby residents have asked the terminal to install additional sound barriers along the fence line facing the Elm Street homes. {{3}} The terminal's operations director said the request is under review and that a decision is expected before the next quarterly meeting.",
        "The terminal's two daytime shifts already operate at close to full capacity during peak afternoon hours, and extending them would have meant significant overtime costs. {{4}}, management opted to open an entirely new shift instead.",
      ],
    },
    q: [
      { tag: '関係詞', t: ['rel'],
        c: ['which', 'who', 'that', 'whose'],
        a: 3,
        e: '先行詞 Halbrook Freight Terminal に container volumes という所有関係を続けるので、所有格の関係代名詞 whose が入る。',
        w: ['which は直後に名詞を伴って所有を表す働きを持たない。which container volumes という並びは作れない。',
            '先行詞 Halbrook Freight Terminal は施設名で人ではない。',
            'コンマの後ろに続く非制限用法の関係詞節に that は使えない。',
            '正解。所有格の関係代名詞 whose。Halbrook Freight Terminal の container volumes、という所有関係を表す。'] },
      { tag: '時制', t: ['ctense'],
        c: ['has added', 'added', 'adds', 'will add'],
        a: 0,
        e: '主節が This is と現在形で、in over a decade が「現在までの10年余り」という現在を終点とする期間を測っている。その期間内に何度あったかを数える節なので、現在までの回数・経験を表す現在完了で受ける。',
        w: ['正解。This is the first time (that) S has done ... の型。in over a decade が現在を終点とする期間なので現在完了で受ける。',
            '過去形は現在と切り離された一時点の出来事を述べる形で、現在を終点とする in over a decade の期間内に何度あったかを数える働きを持たない。主節が This is と現在形である点とも合わない。',
            '現在形は現在の習慣・状態を表す形で、期間内に何度あったかを数える働きを持たない。',
            '未来形。第1段落で「先月 新しい深夜シフトを開設した」と既に実現した事実として述べており、これから起こることではない。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'Officials said that the barriers approved for the first phase of the work will be installed along the fence line before the end of June.',
          'The gate at Elm Street was widened as part of the same construction project.',
          "Night-time truck movements are the residents' main concern, since the new shift roughly doubles activity at the gate between midnight and dawn.",
          'Officials confirmed that no additional trucks would use the terminal this year.',
        ],
        a: 2,
        e: '直前は「近隣住民が防音壁の設置を求めた」、直後は「担当者が検討中と回答した」。住民が何を懸念しているかを具体的に示す文が間に入って初めてつながる。',
        w: ['直後の文が「要望は検討中で、決定は次回の四半期会合の前になる見込み」と述べており、「第一段階の防音壁は承認済みで6月までに設置される」はこれと矛盾する。the first phase を既知のもののように指している点でも、段階分けは本文のどこにも出ていない。',
            'the same construction project と既知の事業のように指しているが、建設事業は本文のどこにも出ておらず指示先が無い。the gate at Elm Street も同様で、本文にあるのは the Elm Street homes に面したフェンス沿いという記述だけである。',
            '正解。第1段落で述べた「深夜0時から午前8時までの新しい勤務」という情報を踏まえ、深夜のトラック往来が倍増することへの懸念だと具体化している。',
            '同じ段落で「ネザビーの小規模拠点が2月末に恒久閉鎖され、その従業員がこのターミナルへ移ってきている」と述べており、閉鎖した拠点の貨物がこちらへ回る以上、トラックが増えないという記述と両立しない。第1段落の「コンテナ取扱量が4四半期連続で増加し新シフトを開設した」とも矛盾する。'] },
      { tag: '接続語', t: ['connect'],
        c: ['For instance', 'As a result', 'Likewise', 'Even so'],
        a: 1,
        e: '「日中シフトを延長すれば残業代がかさむ」という前文を受け、「だから新シフトを新設した」と結果を述べる因果関係。',
        w: ['例示。後続文は前文の具体例ではない。',
            '正解。',
            '並列。前後は同種の事柄の言い換えではない。',
            '譲歩。前文の内容と後続の決定は対立関係にない。'] },
      ].map(x => ({ ...x, s: null })),
  }),

  p6({
    n: [143, 144, 145, 146], lv: 4, t: ['connect', 'voice'],
    /* 2026-08-18 の一括照合で、題材を経費精算から街路灯の故障記録に、
       正解語を must be submitted から must be countersigned に替えた。
       旧版は drills/context.js の u-p6c-05（TO: Regional Sales Staff ／ FROM: 〈氏名〉, VP Sales ／
       SUBJECT: New expense submission process ／「As of 1 December, all travel and entertainment
       expenses {{1}} through the Concurra portal.」正解 must be submitted）と、
       (1) 地域営業担当宛の社内メモ、(2) 経費精算の手続き変更という主題、
       (3) 文頭に起点を示す副詞句を置き、直後の空所を〈助動詞＋受動態〉で埋める型、
       (4) 正解の文字列 must be submitted、の四つが一致していた。
       drills/grammar2.js の voice-02（All maintenance requests ------- through the online portal、
       正解 should be submitted）とも submit の受動態という装置が重なっていた。
       空所の装置（逆接の接続語／目的語欠落による受動態／文挿入／後置修飾の現在分詞）は変えていない。
       さらに同日の監査で、文書としてのねじれを直した。第2段落が「当直技師が副署する」と定めるのに、
       副署の前提になる巡回員自身の署名が本文のどこにも出ておらず、rather than held ... の held の
       主語も曖昧だった。第1段落を filling in and signing a log at the roadside に、第2段落の主語を
       the log you sign for each lighting column に改め、巡回員が路上で署名した記録を当直技師が副署する、
       という順序が本文だけで読み取れるようにした。held の主語も the log ... で一貫する。
       空所4つの正解・選択肢・正解位置はいずれも変えていない。 */
    doc: {
      label: 'Memo',
      head: 'TO: All Highways Inspectors\nFROM: Tamsin Vellacott, Street Lighting\nDATE: 2 September\nSUBJECT: New deadline for fault logs',
      body: [
        'The street lighting team understands that filling in and signing a log at the roadside, rather than gathering a week of notes into one batch back at the district office, takes extra time for inspectors who cover several routes in a night. {{1}}, the new deadline is necessary to keep the repair schedule accurate.',
        'Beginning next month, the log you sign for each lighting column {{2}} by the duty engineer within two working days of the inspection, rather than held until the end of the week as before.',
        'Each log should also carry a photograph of the fault, taken on the handset issued to you. {{3}} Inspectors who file a log without a photograph will be asked to supply one within three working days, or the column will be carried over to the following week\'s list.',
        'Inspectors who find faults on more than one column in the same street on the same night should file a separate log for each column, together with the photograph for that column. Logs {{4}} two or more columns on a single sheet will be returned for separation.',
        'Thank you,\nStreet Lighting',
      ],
    },
    q: [
      { tag: '接続語', t: ['connect'],
        c: ['Therefore', 'For instance', 'Even so', 'Similarly'],
        a: 2,
        e: '「路上で書き込むのは手間がかかると承知している」という譲歩の後に「それでも新しい締切は必要だ」と続けており、逆接・譲歩の関係。',
        w: ['因果。手間がかかることが、締切が必要なことの原因にはならない。',
            '例示。後続文は前文の具体例ではない。',
            '正解。',
            '並列。前後は同種の事柄の言い換えではない。'] },
      { tag: '態', t: ['voice'],
        c: ['has countersigned', 'must be countersigned', 'countersigning', 'must countersign'],
        a: 1,
        e: 'countersign は他動詞で目的語を必要とするが、空所の後ろは by ＋ 動作主と時を表す副詞句だけで目的語が無い。目的語にあたる the log you sign for each lighting column が主語に立った受動態が入る。後続の rather than held ... とも、共通の must be を補って並ぶ（記録は週末まで留め置かれるのではなく、2営業日以内に副署される）。',
        w: ['能動態で、countersign の目的語となる名詞句が空所の後ろに無い。by the duty engineer は動作主を示す前置詞句であって目的語ではない。Beginning next month が示すこれからの規定を、現在完了では受けられない点も合わない。',
            '正解。must be countersigned。countersign の目的語にあたるものが主語に立った受動態で、義務を表す must に続く。',
            '分詞。この節には定形動詞が他に無く、文の述語動詞になれない。',
            '能動態で、countersign の目的語となる名詞句が空所の後ろに無い。'] },
      { tag: '文挿入', t: ['p6ins'],
        c: [
          'A close view showing the column number is acceptable; a general view of the street is not.',
          'Photographs taken on a handset will not be accepted; only images from the district office camera may be attached.',
          'The same exception was granted to the sign-cleaning team last year.',
          'The revised column-height threshold takes effect from the same date.',
        ],
        a: 0,
        e: '直前は「各記録には支給の端末で撮った故障箇所の写真を添える」、直後は「写真が無い記録を出した場合は3営業日以内の提出を求める」。どういう写真なら記録として認められるかを示す文が間に入って初めてつながる。',
        w: ['正解。',
            '直前の文で「支給の端末で撮った写真を添える」と定めており、「端末で撮った写真は不可、事務所のカメラのみ」は矛盾する。',
            '「標識清掃班への同じ例外」への言及は本文のどこにも無く、指す対象が無い。',
            '「改定された柱高の基準」への言及は本文のどこにも無く、指す対象が無い。'] },
      /* id は v6q146r（no は 146 のまま。中身を差し替えたため設問 id は新規採番）。
         初版は each + 単数名詞（a separate claim for ------- visit）を問うもので、
         vol1-r1.js の Part 6・No.144（{{2}} case cost us a free return visit、選択肢
         Either / Each / All / Most、正解 Each）と同じ装置・同じ正解語・誤答2語が重なっていた。
         Vol.1 を解いた記憶でそのまま答えが出るため、分詞の後置修飾に差し替えてある。 */
      { tag: '動詞の形', t: ['ptcp'], id: 'v6q146r',
        c: ['cover', 'covered', 'have covered', 'covering'],
        a: 3,
        e: 'この文の述語動詞はすでに will be returned。関係代名詞も接続詞も無いので空所に定形動詞は入らない。主語 Logs を後ろから修飾し、かつ直後の two or more columns を目的語に取れる形が要る。',
        w: ['定形動詞（現在形）。述語動詞は will be returned が担っており、関係代名詞も接続詞も無いまま定形動詞をもう一つ置くことはできない。',
            '定形の過去形と読めば述語動詞が二つになり置けない。過去分詞として Logs を後置修飾すると読む場合は「記録が覆われる」という受け身になり、受け身の分詞は直後に目的語を取らないので two or more columns を受け止められない。',
            '定形動詞（現在完了）。述語動詞は will be returned が担っており、ここに定形動詞は置けない。',
            '正解。現在分詞が Logs を後置修飾し、two or more columns を目的語に取る。Logs covering two or more columns「2本以上の柱をまとめた記録」。'] },
      ].map(x => ({ ...x, s: null })),
  }),
];
