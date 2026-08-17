/* =============================================================
   drills/vocab2.js — 語彙・語法（後半）
   紛らわしい語 / ビジネス頻出語 / 句動詞
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
  q('confuse-01', {
    t: ['confuse'], lv: 4,
    s: 'It was ------- of the organizers to provide a quiet room for participants with young children.',
    c: ['considerable', 'considerate', 'considered', 'considering'],
    a: 1,
    e: 'considerate「思いやりのある」／considerable「（量・程度が）かなりの」。It was ... of + 人 の構文は人の性質を表す形容詞を取るので considerate。',
    w: ['「かなりの」。量や程度の大きさを表す語で、It was ... of + 人 が要求する「人の性質を評価する形容詞」ではない。considerable of the organizers という結び付きは成立しない。',
        '正解。「思いやりのある」。It was kind / careless / considerate of + 人 + to do は、to 不定詞の行為からその人の性質を評価する構文。',
        '「熟考された」。a considered opinion / a considered response のように判断・意見を修飾する語で、人の性質を評価する形容詞ではない。It was considered that ... の受動なら成立するが、その形は of + 人 を取らない。',
        '前置詞「〜を考慮すると」または分詞。形容詞ではないので be 動詞の補語にならず、この構文の空所に入らない。'],
    ja: '幼い子ども連れの参加者のために静かな部屋を用意したのは、主催者の心遣いだった。',
    v: [['considerate', '思いやりのある'], ['considerable', 'かなりの']],
  }),

  /* id は confuse-02r（設問ごと差し替えたため新規採番）。旧 confuse-02 は
     "Switching to LED fixtures proved highly ------- , cutting the building's lighting costs by 38 percent."
     で economical を正解、economic を誤答に置いていたが、economic には economical と同義の語義が実在する
     （Wiktionary「Frugal; cheap (in the sense of representing good value); economical」、
     Merriam-Webster も語義に ECONOMICAL と profitable を立てる）。旧解説が使っていた
     「採算ラインに乗るか否かの二値だから highly で程度修飾できない」は、この語義を採ると崩れ、
     highly economic を不可と言い切る根拠も見つからない。economical を正解に据える限り economic は
     どの文脈でも第二の正解になるため（模試 v5q129 も同じ理由で対ごと差し替え済み）、
     対そのものを prescribe / proscribe に替えた。 */
  /* lv は 5。決め手の proscribe は LDOCE・OALD とも formal ラベルの法務系書き言葉で
     （LDOCE の用例も The Act proscribes discrimination on the grounds of race.）、
     lv5 基準 (a)「語彙の帯が 900+（法務・財務の書き言葉）」に当たる。同じファイルの
     waive（biz-02）forfeiture（biz-03）と同じ帯。prescribe との対は lv4 の言う
     「紛らわしい派生語の対」でもあるが、lv4 が想定するのは中頻度のビジネス語であり、
     proscribe はその帯に無い。 */
  q('confuse-02r', {
    t: ['confuse'], lv: 5,
    s: 'Trade fair regulations ------- the use of amplified sound at exhibitor booths, and companies that ignore the ban may be barred from next year\'s event.',
    c: ['prescribe', 'proscribe', 'subscribe', 'ascribe'],
    a: 1,
    e: 'proscribe「（法令・規則が）禁止する」。LDOCE の語義は「to officially say that something is not allowed to exist or be done」で、The Act proscribes discrimination on the grounds of race. と同じく規則を主語に取る。決め手は後半の the ban（その禁止）で、定冠詞が付いたこの名詞が指せる先は前半に置かれた禁止しかない。空所に禁止以外の語を入れると、the ban が指すものが文中から消える。',
    w: ['「（法・規則が）〜せよと定める」。LDOCE の語義は「to state officially what should be done in a particular situation」（What punishment does the law prescribe for this crime?）で、proscribe とは反対に「そうせよ」と命じる側の語。これを入れると規則が拡声機器の使用を義務づけたことになり、後半の the ban が指す禁止が文中に存在しなくなる。',
        '正解。「（法令・規則が）禁止する」。規則を主語にして禁止の対象を目的語に取る。',
        '「（新聞・サービスを）定期購読する」「（意見に）賛同する」。LDOCE の型は subscribe to a magazine / subscribe to a view で、普通の名詞句を続けるには to が要る。目的語を直接取れるのは subscribe your name to the document のような署名や出資額に限られ、the use of ... を目的語にできない。',
        '「（原因・作者などを）〜に帰する」。LDOCE の見出しは ascribe something to somebody/something で、帰属先を示す to 句が必須。この文には to 句が無く、規則が使用を誰かのせいにするという内容にもならない。'],
    ja: '見本市の規則は出展ブースでの拡声機器の使用を禁じており、この禁止を無視した企業は翌年の開催から締め出されることがある。',
    v: [['proscribe', '（法令が）禁止する'], ['prescribe', '（規則が）〜せよと定める'], ['amplified sound', '拡声機器による音声']],
  }),

  /* id は confuse-03r（stem と選択肢を差し替えたため新規採番）。旧 stem は profits を計上した
     文脈だったため、旧選択肢 successful が「好調だった 6 四半期」として成立し（連続性は
     its longest run が担う）第二の正解だった。旧 succeeding も Merriam-Webster のシソーラスが
     consecutive の同義語に挙げるため外し、stem を losses に変えて successful を意味的に封じた。 */
  q('confuse-03r', {
    t: ['confuse'], lv: 4,
    s: 'The firm has posted losses for six ------- quarters, the longest such run in its 40-year history.',
    c: ['successful', 'successive', 'succession', 'successively'],
    a: 1,
    e: 'successive「連続する」。six successive quarters で「6 四半期連続」。4 語のうち quarters を修飾できる形容詞は successful と successive の 2 つだが、損失を計上した四半期を successful（好調だった）と呼ぶことはできず、続く the longest such run（最長の連続記録）が求めているのも「切れ目なく続いた」という意味なので successive しか残らない。',
    w: ['「成功した」。損失を計上した四半期を successful quarters（好調だった四半期）と呼ぶことはできず、posted losses と正面から矛盾する。',
        '正解。「連続する」。successive days / successive years のように「切れ目なく続く」を表す。',
        '名詞。「連続して」を succession で言うなら six quarters in succession と後置する形になり、名詞のまま quarters の前に置くことはできない。',
        '副詞。動詞や文を修飾する形で、名詞 quarters を修飾できない。'],
    ja: '同社は 6 四半期連続で損失を計上しており、これは 40 年の社史で最長の連続記録である。',
    v: [['successive', '連続する'], ['post a loss', '損失を計上する']],
  }),

  q('confuse-04', {
    t: ['confuse'], lv: 3,
    s: 'Please ------- to the attached diagram when assembling the shelving unit.',
    c: ['refine', 'reflect', 'refuse', 'refer'],
    a: 3,
    e: 'refer to「〜を参照する」。決め手は空所直後の前置詞 to で、to + 名詞 を続けられるのはこの 4 語のうち refer だけ。',
    w: ['「改良する」。目的語を直接取る他動詞（refine a process / refine a design）で、to + 名詞 を続ける用法が無い。',
        '「反射する」「熟考する」。熟考の意味では reflect on / upon と on を取り、reflect to という結び付きは存在しない。',
        '「拒否する」。目的語を直接取るか refuse to do の形で使う語で、to の後ろに名詞を置く形は無い。',
        '正解。refer to「〜を参照する」。'],
    ja: '棚を組み立てる際は、添付の図をご参照ください。',
    v: [['assemble', '組み立てる'], ['shelving unit', '棚']],
  }),

  /* id は confuse-05r3（stem を再度直したため新規採番）。経緯は 3 巡ぶんある。
     1 巡目の旧 confuse-05 は "The auditor asked for the ------- figures, not the estimates
     circulated in the draft." で current / recent が第二の正解だった（figures は「報告された数値」
     なので "current figures"＝現時点で採用されている版、と読めてしまう）。
     2 巡目の confuse-05r は head を number に替えてこの逃げ道を塞いだが、
     "on the museum's opening day" が何年のことか言っていないため、開館が最近なら
     recent（LDOCE「having happened or started only a short time ago」）が真だった。
     3 巡目の confuse-05r2 は in 2018 と年を入れたが、これでも「2018 年が recent か」は
     文中では決まらず、発話時点を読み手の外の知識に委ねたままだった（1999 年に読めば真）。
     この 4 巡目は more than two decades ago という発話時点基準の表現に替え、recent の語義と
     文字どおり矛盾させた。この時間表現が opening day に掛かっても exceeded に掛かっても、
     問題の来場者数が 20 年以上前のものである点は変わらないので、掛かり先の解釈で穴は開かない。 */
  q('confuse-05r3', {
    t: ['confuse'], lv: 4,
    s: 'The ------- number of visitors on the museum\'s opening day, more than two decades ago, exceeded the forecast by nearly 20 percent.',
    c: ['present', 'current', 'actual', 'recent'],
    a: 2,
    e: 'actual「実際の、実績の」。LDOCE の語義は「used to emphasize that something is real or exact」（I know Germany won, but I can\'t tell you the actual score.）で、想定や見積もりに対する「ふたを開けてみての実数」を指す。この文では exceeded the forecast が「予測値 対 実績値」という対比を作っており、その実績側を埋めるのが actual。残る 3 語 present / current / recent はいずれも発話時点を基準に時期を言う語で、more than two decades ago と時期が明示された 1 日の数値には掛からない。LDOCE が actual の項に置く注記「Do not use actual to mean "at the present time". Use current or present」は、この 4 語が「時点を言う語」と「値の性質を言う語」に分かれることをそのまま述べたもので、本問の論点そのもの。head の名詞が figures（報告された数値。後から改訂されうる）ではなく number（日付で一つに定まる量そのもの）である点も効いていて、「現時点で採用されている版の数値」という読み替えができない。',
    w: ['「現在の」。この語は語義ごとに置ける位置が決まっており、LDOCE も Oxford Advanced Learner\'s も「happening / existing now」の語義を [only before noun]、「その場にいる」の語義を [not before noun] と分ける。Collins も前者を (prenominal)「in existence at the moment in time at which an utterance is spoken or written」、後者を (postpositive)「being in a specified place, thing, etc」と位置つきで立てている。空所は名詞 number の前なので在席の語義は初めから取れない（「来場していた」を言うなら the visitors present と名詞の後ろに置く形になるうえ、この空所が修飾するのは visitors ではなく number という量である）。残る「今の」の語義は発話時点を基準にするので、20 年以上前の 1 日に確定した数値には掛からない。Collins が prenominal にもう一つ立てる「now in consideration or under discussion」（the present case / the present study）は、いま書いている論文・いま扱っている事件のようにその文が載る文書そのものに属する対象を指す語義で、この一文が初めて導入する「開館初日の来場者数」は文書に属する対象ではないため、この語義の指す先にならない。',
        '「現在の」。LDOCE の語義は [only before noun]「happening or existing now」で、the current president / in its current state のように今この時点で成り立っている状態を指す。Collins が別に立てる「most recent; up-to-date」「commonly known, practised, or accepted」の語義も、基準に置くのはやはり発話時点であり、いま通用している版・いま行き渡っている状態を指す。20 年以上前の 1 日の来場者数はどちらの語義でも「いま」の側に入らない。the current figure for ...（最新版の数値）の型を当てはめようとしても、空所が修飾するのは the number of visitors on the museum\'s opening day、すなわち日付で一つに定まる量であって、版が複数あって最新版を選べる報告値ではない。',
        '正解。「実際の、実績の」。予測・見積もりに対して「ふたを開けてみての実数」を指す。',
        '「最近の」。LDOCE の語義は「having happened or started only a short time ago」、Collins も「having appeared, happened, or been made not long ago」で、いずれも発話時点から見て短い過去であることを要求する。more than two decades ago はこれと正面から矛盾し、この時間表現を opening day に掛けて読んでも exceeded に掛けて読んでも、数値が 20 年以上前のものであることは動かない。Collins の been made（最近作られた）を取って「最近まとめられた集計」と読む逃げ道も、空所が修飾するのは the number of visitors on ... という日付で確定した量であって、後から作り直される報告書ではないため通らない。'],
    ja: '20 年以上前のことになるが、その博物館の開館初日の実際の来場者数は、予測を 20 パーセント近く上回った。',
    v: [['actual', '実際の、実績の'], ['forecast', '予測']],
  }),

  q('confuse-06', {
    t: ['confuse'], lv: 4,
    s: 'The seminar is intended for ------- managers who have not yet led a project team.',
    c: ['respectable', 'respective', 'prospective', 'perspective'],
    a: 2,
    e: 'prospective「将来の、〜候補の」。「まだチームを率いたことがない」＝これから管理職になる人という文脈。',
    w: ['「（人・物が）まっとうな、体面を保った」。評判や外見の水準を表す語で、「まだチームを率いたことがない」という経験の有無を述べる関係節と対応しない。',
        '「それぞれの」。既出の複数の対象に一対一で対応づける語で、対応先となる複数名詞が前に出ていないと使えない。',
        '正解。「将来の、候補の」。prospective buyer / prospective employer のように「これから〜になる人」を指す。',
        '名詞「観点、遠近法」。形容詞ではないので名詞 managers を修飾できない。'],
    ja: 'このセミナーは、まだプロジェクトチームを率いた経験のない管理職候補者を対象としています。',
    v: [['prospective', '将来の、候補の'], ['lead', '率いる']],
  }),

  /* id は confuse-07r（stem を差し替えたため新規採番）。旧 stem は主語が The schedule で、
     an intensive schedule（詰め込んだ日程）が実在の言い方であるため
     「第 2 週が押さえられるまでは日程が詰まったままだ」という読みが作れてしまい、intensive を
     完全には排除できなかった。schedule は活動の配置を表す名詞なので密度を述べられるが、
     dates は暦上の日付を指すだけの語で、活動の密度・注意・保持力のいずれの述語も取れない。
     残る 3 語を語の選択制限で落とせる主語に替えたのがこの版。 */
  q('confuse-07r', {
    t: ['confuse'], lv: 4,
    s: 'The dates for the training session remain ------- until the venue confirms availability for the second week of May.',
    c: ['intensive', 'attentive', 'retentive', 'tentative'],
    a: 3,
    e: 'tentative「暫定的な、仮の」。LDOCE の語義は「not definite or certain, because you may want to change things」で、Merriam-Webster は用例に a tentative date を挙げている。4 語とも形容詞なので remain の補語には形が合い、決め手は主語 dates（暦上のどの日か）を述語にできるかどうか。確定・未確定という日付そのものの状態を述べられるのは tentative だけで、until 節（会場の空き確認が取れるまで）がそのまま未確定の理由になる。',
    w: ['「集中的な、密度の高い」。LDOCE の語義は「involving a lot of activity, effort, or careful attention in a short period of time」で、修飾するのは intensive course / intensive training / intensive negotiations のように活動そのものを表す名詞。dates は活動ではなく暦上の日付を指す語なので、その密度を述べる remain intensive という叙述にならない。until 節が言う「会場の空き確認」も、日程が確定するかどうかを左右する条件であって、活動の密度を左右する条件ではない。',
        '「注意深い、気配りのある」。注意を向ける側、すなわち人やその応対に使う語（an attentive host / attentive to detail）。dates は注意を向ける主体になれないので述語に取れない。',
        '「（記憶力・保水力などが）保持力のある」。a retentive memory / retentive soil のように、何かを保持する能力を持つものに使う語。dates は保持する主体になれない。',
        '正解。「暫定的な、仮の」。確定していない状態を表し、確認が取れるまでという条件と対応する。'],
    ja: '会場が 5 月第 2 週の空き状況を確定するまで、研修の日程は仮のままです。',
    v: [['tentative', '暫定的な、仮の'], ['availability', '空き状況']],
  }),

  q('confuse-08', {
    t: ['confuse'], lv: 4,
    s: 'Interest in the pilot course has been ------- , with all 40 seats filled within two hours.',
    c: ['consideration', 'considerate', 'considerable', 'considerably'],
    a: 2,
    e: '「2 時間で 40 席が埋まった」という程度の大きさを述べるので considerable「かなりの」。人の性質を表す considerate との使い分けが要点。',
    w: ['名詞「考慮、検討」。has been の後ろに無冠詞で置けず、Interest ＝ consideration という同定にもならない。「検討中」を言うなら under consideration と前置詞が要る。',
        '「思いやりのある」。人や振る舞いの性質を表す語（It was considerate of him to ...）で、関心の大きさを測る語ではない。',
        '正解。「かなりの」。数量・程度の大きさを表し、40 席が 2 時間で埋まったという規模の記述と対応する。',
        '副詞。has been の補語になれるのは形容詞か名詞句で、副詞は単独で置けない（considerably higher のように形容詞・比較級を修飾する形なら可）。'],
    ja: '試験開講のコースへの関心は非常に高く、40 席すべてが 2 時間以内に埋まった。',
    v: [['pilot course', '試験的に開講される講座']],
  }),

  /* ══ ビジネス頻出語 ═════════════════════════════════ */
  q('biz-01', {
    t: ['biz'], lv: 4,
    s: 'Room upgrades are offered at the ------- of the front-desk staff and cannot be guaranteed in advance.',
    c: ['disruption', 'distinction', 'distribution', 'discretion'],
    a: 3,
    e: 'at the discretion of + 人「〜の裁量で」。判断を誰に委ねるかを示す慣用句で、ホテルの約款や契約書で頻出。at the ------- of + 人 という枠に収まって「判断の主体」を示せるのは discretion だけ。',
    w: ['「混乱、中断」。出来事が乱れることを指す名詞で、at the disruption of ... という慣用句は無く、提供の判断主体も表せない。',
        '「区別、栄誉」。have the distinction of doing「〜という栄誉を持つ」の形はあるが、at the ------- of + 人 の枠に入って裁量を表す用法は無い。',
        '「配布、流通」。at the distribution of ... は「配布の場で」としか読めず、判断を委ねる意味を持たない。',
        '正解。「裁量」。at the discretion of the staff で「係員の判断次第で」。'],
    ja: '客室のアップグレードはフロント係の裁量で提供されるもので、事前の保証はできません。',
    v: [['at the discretion of', '〜の裁量で'], ['guarantee', '保証する']],
  }),

  q('biz-02', {
    t: ['biz'], lv: 5,
    s: 'By signing below, the tenant agrees to ------- any claim to the security deposit after the inspection.',
    c: ['wave', 'waive', 'weigh', 'widen'],
    a: 1,
    e: 'waive a claim / waive a fee「（権利・料金を）放棄する、免除する」。契約書の定番語。',
    w: ['「振る」。同音異義語による引っ掛け。',
        '正解。「放棄する」。',
        '「量る、比較検討する」。',
        '「広げる」。'],
    ja: '以下に署名することにより、賃借人は点検後の敷金に対する請求権を放棄することに同意します。',
    v: [['waive', '放棄する'], ['security deposit', '敷金']],
  }),

  q('biz-03', {
    t: ['biz'], lv: 5,
    s: 'Failure to collect the item within 30 days will result in ------- of the storage fee already paid.',
    c: ['formation', 'fortitude', 'forfeiture', 'foundation'],
    a: 2,
    e: 'forfeiture of ...「（権利・金銭の）没収、喪失」。動詞は forfeit。既に支払った料金が「戻ってこない」ことを表せるのはこの語だけ。',
    w: ['「形成、結成」。result in the formation of a committee のように新たに生まれるものを取る語で、支払い済みの料金を失う意味にはならない。',
        '「不屈の精神」。人の資質を表す不可算名詞で、of the storage fee と結び付かない。',
        '正解。「没収、喪失」。権利や納めた金銭を失うことを指す法務・契約文書の語。',
        '「基礎、財団」。土台や設立された組織を指す語で、金銭が失われる意味を持たない。'],
    ja: '30 日以内に品物を引き取らない場合、既に支払われた保管料は没収されます。',
    v: [['forfeiture', '没収'], ['storage fee', '保管料']],
  }),

  /* id は biz-04r2（stem を再度直したため新規採番）。1 巡目の旧 biz-04 は
     "The committee has been asked to ------- the feasibility of relocating the distribution center."
     で、assume the feasibility of ...「実現可能性を与件として置く」も
     assert the feasibility of ...「実現可能性を主張する」も実在し、第二の正解だった。
     2 巡目の biz-04r は目的語を名詞のまま残して and to report its findings を足したが、これは
     「findings が出るのは調べたときだけ」という意味の推論による排除で、調査の主体を文外に
     想定すれば assert / assume の読みが残る（＝「不可能」にはできていない）。
     目的語を whether 節に替え、間接疑問を目的語に取れるかという構造で切る形にした。 */
  q('biz-04r2', {
    t: ['biz'], lv: 3,
    s: 'The committee has been asked to ------- whether relocating the distribution center is feasible and to report its findings to the board in October.',
    c: ['assume', 'assert', 'assign', 'assess'],
    a: 3,
    e: 'assess「評価する、見極める」。決め手は空所の直後の whether 節で、「〜かどうか」という未決の問いを目的語に取れるのは、調べて判断を下す型の動詞だけ。assess はこの型を持つ（Cambridge: We need to assess whether the project is worth doing. / LDOCE: assess what effects it may have）。名詞を取る assess the feasibility of ... も定番の組み合わせ。残る 3 語は断定の内容を受ける動詞か目的語に名詞を要求する動詞で、whether 節を目的語にできない。',
    w: ['「（真であるとして）想定する」「（職務・責任を）引き受ける」。LDOCE が挙げる型は assume (that) ... と assume + 名詞（assume control / responsibility）で、いずれも断定される内容を受ける。「〜かどうか」という未決の問いを表す whether 節は目的語にできない。',
        '「断言する」「（権利などを）主張する」。LDOCE が挙げる型は assert that ... と assert your rights / independence だけで、いずれも「真だと話し手が決めている内容」を受ける。whether 節が表すのは真偽が未決のままの問いなので、断定を意味するこの動詞とは意味的に両立しない。',
        '「割り当てる」。assign A to B / assign 人 to do の形で、割り当てる物・仕事と割り当て先が要る。節を目的語に取る用法が無い。',
        '正解。assess whether ...「〜かどうかを見極める」。調べて判断を出す動詞なので、後半の report its findings（調査結果を報告する）とも対応する。'],
    ja: '委員会は、配送センターの移転が実現可能かどうかを見極め、その調査結果を 10 月に取締役会へ報告するよう求められている。',
    v: [['assess', '評価する、見極める'], ['feasible', '実現可能な'], ['findings', '調査結果']],
  }),

  q('biz-05', {
    t: ['biz'], lv: 3,
    s: 'The supplier offered a 4 percent discount as ------- for the late shipment.',
    c: ['competition', 'compensation', 'compilation', 'complication'],
    a: 1,
    e: 'compensation for ...「〜に対する補償、埋め合わせ」。損害や不都合を受けた側に渡すものを指す語で、値引きを差し出した理由（出荷の遅れ）と対応する。',
    w: ['「競争、競技会」。as competition for ... は「〜を争う競争として」の意味にしかならず、遅延の埋め合わせを表せない。',
        '正解。「補償」。compensation for the delay / compensation for the damage のように、被った不利益を for の後ろに置く。',
        '「編集、集成」。作品や資料を集めてまとめたものを指す語で、埋め合わせの意味を持たない。',
        '「複雑化、合併症」。事態が込み入ることを指す語で、値引きの名目にはならない。'],
    ja: '仕入先は出荷の遅れに対する補償として、4 パーセントの値引きを提示した。',
    v: [['compensation', '補償'], ['shipment', '出荷']],
  }),

  q('biz-06', {
    t: ['biz'], lv: 4,
    s: 'All figures in this report are ------- and will be revised once the year-end audit concludes.',
    c: ['principal', 'primary', 'preliminary', 'prior',],
    a: 2,
    e: 'preliminary「暫定の、予備的な」。確定版の前段階であること、すなわち後で差し替わることを語義そのものに含むので、will be revised（修正される）という後半と噛み合う。',
    w: ['「主要な、（金融で）元本の」。重要度や元本を指す語で、後から改訂される前提を含まない。the principal reason のように名詞の前で使い、be 動詞の補語にする用法もまれ。',
        '「主要な、一次の」。Merriam-Webster の「first in order of time or development」の語義も the primary stage of civilization のように発達段階の初期を指すもの、primary data / primary source は「自分で直接得た」ことを指すもので、どちらも「後で改訂される」という含みを持たないため will be revised と結び付かない。',
        '正解。「暫定の、予備的な」。preliminary results / preliminary figures で確定前の数値を表す。',
        '「事前の」。prior approval / prior notice のように名詞の前で使うか prior to ... の形で用いる語で、be 動詞の補語には置けない。'],
    ja: '本報告書の数値はすべて暫定値であり、年度末監査の完了後に修正されます。',
    v: [['preliminary', '暫定の'], ['conclude', '終了する']],
  }),

  q('biz-07', {
    t: ['biz'], lv: 4,
    s: 'The bank requires two forms of identification before it will ------- funds to an overseas account.',
    c: ['remark', 'remind', 'remain', 'remit'],
    a: 3,
    e: 'remit「送金する」。remit funds / remit payment to ... の形で金額を目的語に取る他動詞。名詞 remittance（送金）も金融文書の頻出語。',
    w: ['「述べる、論評する」。remark that ... / remark on ... の形で意見を述べる語で、funds のような金銭を目的語に取らない。',
        '「思い出させる」。目的語は人で remind 人 of ... / remind 人 to do の形を取り、funds を直接の目的語にできない。',
        '「残る、〜のままである」。自動詞なので funds を目的語に取れず、送金の意味も無い。',
        '正解。「送金する」。remit funds to an overseas account で「海外口座へ送金する」。'],
    ja: '当行は海外口座へ送金する前に、2 種類の本人確認書類の提示を求めます。',
    v: [['remit', '送金する'], ['identification', '本人確認書類']],
  }),

  q('biz-08', {
    t: ['biz'], lv: 4,
    s: 'The lease may be renewed for a further term ------- both parties agree in writing.',
    c: ['providing for', 'provided', 'provision', 'provided for'],
    a: 1,
    e: 'provided (that)「〜という条件で」は接続詞として節を導く。後ろが both parties agree という節であることが手がかり。',
    w: ['providing for は「〜に備えて」の前置詞句。節を導けない。',
        '正解。条件を表す接続詞。',
        '名詞。節を導けない。',
        '「〜のために備えられた」。節を導けない。'],
    ja: '両当事者が書面で合意する場合に限り、賃貸借契約はさらに 1 期間更新することができます。',
    v: [['lease', '賃貸借契約'], ['provided that', '〜という条件で']],
  }),

  /* ══ 句動詞 ═════════════════════════════════════════ */
  q('phrasal-01', {
    t: ['phrasal'], lv: 3,
    s: 'The outdoor ceremony was ------- off after the weather service issued a wind advisory, and the organizers confirmed that it would not be rescheduled.',
    c: ['taken', 'put', 'called', 'brought'],
    a: 2,
    e: 'call off「（予定されていた催しを）中止する」。決め手は後半の it would not be rescheduled（日程を組み直すことはない）。put off「延期する」は辞書の定義（to arrange to do something at a later time or date）どおり「後日あらためて実施する」を語義に含むため、この後半と正面から矛盾する。一方 call off は「その回の実施を取りやめる」までしか言わず、代替日を設けるかどうかは含意しない。だからこそ後半が情報として成立する。',
    w: ['take off は「離陸する、（衣服を）脱ぐ、（売れ行きが）伸びる」。取りやめの意味になるのは The show was taken off. のように継続中の番組・興行や運行を打ち切る場合に限られ、一回限りの式典には使わない。この文で使うなら take it off the schedule のように外す先を示す必要がある。',
        'put off は「延期する」。「後日あらためて行う」ことを語義そのものに含むので、後半の it would not be rescheduled（日程を組み直すことはない）と両立しない。put off ... indefinitely（無期限延期）でも「いずれは実施する」前提は残るため、やはりこの後半とは合わない。',
        '正解。call off は予定されていた実施そのものを取りやめる語。中止したうえで代替日も設けない、という後半の it would not be rescheduled と無理なくつながる。',
        'bring off は「（難しいことを）やってのける、成功させる」。式典が実施され成功したことを表す語なので、実施されなかったことを前提に「日程を組み直すことはない」と続く後半と両立しない。'],
    ja: '気象台が強風注意報を発表したため屋外での式典は中止となり、主催者は日程を組み直すことはないと明言した。',
    v: [['call off', '中止する'], ['put off', '延期する'], ['advisory', '注意報'], ['reschedule', '日程を組み直す']],
  }),

  q('phrasal-02', {
    t: ['phrasal'], lv: 3,
    s: 'Ms. Cardoso will ------- over as branch manager when Mr. Rahman retires in June.',
    c: ['come', 'get', 'hold', 'take'],
    a: 3,
    e: 'take over as ...「〜の職を引き継ぐ」。前任者を示すときは take over from Mr. Rahman の形。空所の後ろの over as と結び付いて役職の交代を表せるのは take だけ。',
    w: ['come over は「（家や国へ）立ち寄る、渡ってくる」。LDOCE にはもう一つ come over as ...「〜という印象を与える」（She comes over as a very efficient businesswoman.）の語義があるが、これは人柄がどう見えるかを述べる語義で、退職に伴って職務そのものを継ぐという役職の交代は表せない。',
        'get over は「（病気・困難を）乗り越える、回復する」。over の後ろに乗り越える対象を置く形で、as ... と続けて就任を表す用法は無い。',
        'hold over は他動詞で「（決定・議題を）持ち越す」「（公演を）延長する」。人を主語にして「後任として職に就く」という自動詞の用法は無い。',
        '正解。take over as branch manager。'],
    ja: 'ラーマン氏が 6 月に退職するのに伴い、カルドーゾ氏が支店長を引き継ぐ。',
    v: [['take over', '引き継ぐ'], ['branch manager', '支店長']],
  }),

  q('phrasal-03', {
    t: ['phrasal'], lv: 4,
    s: 'Could you ------- in for Daniela at the reception desk while she attends the briefing?',
    c: ['hold', 'fill', 'take', 'put'],
    a: 1,
    e: 'fill in for someone「（一時的に）〜の代わりを務める」。空所の後ろの in for + 人 という枠に収まるのは fill だけ。',
    w: ['hold in は「（怒り・感情を）抑える」で、目的語は anger / feelings の類。in for + 人 という形を取らず、代役の意味も持たない。',
        '正解。fill in for someone「〜の代わりを務める」。',
        'take in は「理解する」「（人を）泊める」「（衣服を）詰める」。代役を表すのは take over for someone で、in の形では成立しない。',
        'put in for は「（休暇・異動・昇給などを）申請する」で、for の後ろに来るのは申請する対象（put in for a transfer）。人名を置いて代役を務める意味にはならない。'],
    ja: 'ダニエラがブリーフィングに出ている間、受付で彼女の代わりを務めていただけますか。',
    v: [['fill in for', '〜の代わりを務める'], ['briefing', '説明会']],
  }),

  /* id は phrasal-04r（stem を直したため新規採番）。旧 stem の sharply は「急激に」で、
     taper off が語義に含む「緩やかに細っていく」と衝突していた（Cambridge・Merriam-Webster とも
     gradual を明記）。正解語の語義と副詞が食い違ったままだと、taper off を正しく知っている人ほど
     選べなくなるため steadily に改めた。 */
  q('phrasal-04r', {
    t: ['phrasal'], lv: 5,
    s: 'Sales of the discontinued model have ------- off steadily since the replacement was announced.',
    c: ['tapered', 'turned', 'set', 'laid'],
    a: 0,
    e: 'taper off「次第に減少する」。taper は「先細りになる」で、時間をかけて細っていく変化を表す。後継機種の発表以来じわじわ売上が落ちている文脈に合う。',
    w: ['正解。taper off「次第に細っていく」。緩やかな減少を表すので steadily と自然に共起する。',
        'turn off は「（電源・水道を）止める」「（道を）わきへそれる」。売上のような数量を主語にして「減っていく」意味にはならない。',
        'set off は「出発する」「（警報・反応を）引き起こす」。減少は表さない。',
        'lay off は「（人員を）一時解雇する」で目的語は人。Sales を主語にした自動詞の用法は無い。'],
    ja: '後継機種が発表されて以来、生産終了となった機種の売上は着実に細っている。',
    v: [['taper off', '次第に減少する'], ['discontinued', '生産終了の']],
  }),

  q('phrasal-05', {
    t: ['phrasal'], lv: 3,
    s: 'The accounting team is still ------- through last quarter\'s receipts to locate the duplicate entry.',
    c: ['going', 'coming', 'taking', 'putting'],
    a: 0,
    e: 'go through「（書類・データを）一つずつ調べる、目を通す」。through の後ろに調べる対象を置いて精査を表せるのは go。',
    w: ['正解。go through the receipts。',
        'come through は「（知らせ・書類が）届く」「（困難を）切り抜ける」。through の後ろに調べる対象を置いて「精査する」意味にはならない。',
        'take は take somebody through something「人に手順を順を追って説明する」の形で、説明を受ける人の目的語が必要。ここには人の目的語が無く、また自分で調べる意味にもならない。',
        'put ... through は「（電話を）つなぐ」「（人を）学校に通わせる」「（人に）厳しい経験をさせる」「（計画・変更を）通す」。LDOCE が挙げる最後の語義の目的語は plan・suggestion・change の類で、調べる対象の書類は取らず、「精査する」の意味も無い。'],
    ja: '経理チームは、重複した記帳を突き止めるため、いまだ前四半期の領収書を精査している。',
    v: [['go through', '詳しく調べる'], ['duplicate entry', '重複記帳']],
  }),

  /* id は phrasal-06r（選択肢を差し替えたため新規採番）。旧選択肢 hold は hold back on ...
     「〜を控える、〜に踏み切らずにおく」（hold back on spending / hold back on hiring）が
     実在の言い方で、cut back on とほぼ同じ内容になり第二の正解だった。 */
  q('phrasal-06r', {
    t: ['phrasal'], lv: 3,
    s: 'The manufacturer had to ------- back on overtime after the export order was canceled.',
    c: ['cut', 'look', 'give', 'fall'],
    a: 0,
    e: 'cut back on「（費用・活動を）削減する」。注文が消えた分だけ残業を減らすという文脈。cut back on spending / cut back on staff も同じ型。',
    w: ['正解。cut back on + 費用・活動。削減の対象を on の後ろに置く。',
        'look back on は「（過ぎたことを）振り返る」。on の後ろに来るのは look back on the year / on his career のように過ぎ去った期間や経験で、overtime のような削減対象の活動量は取らない。注文が取り消された結果として「振り返らざるを得なかった」という因果も成り立たない。',
        'give back は「（借りた物・受け取った物を）返す」。返す対象を目的語に取る形で、on を伴って活動量を減らす意味にはならない。',
        'fall back on は「（本命が駄目になったときに）代わりの手段に頼る」。頼る先は不足を埋める資源で、注文が消えて仕事量が減った局面では残業が代わりの手段になりようがなく、after 節の因果と逆になる。'],
    ja: '輸出向けの注文が取り消されたため、そのメーカーは残業を削減せざるを得なかった。',
    v: [['cut back on', '〜を削減する'], ['overtime', '残業']],
  }),

  /* id は phrasal-07r（選択肢を差し替えたため新規採番）。旧選択肢 make は Collins に
     「When you make out a cheque, receipt, or order form, you write all the necessary information
     on it.」と立項されており、返送用の同封書類はまさにその order form に当たるので第二の正解だった。
     旧 write も write out a cheque / a receipt に同じ語義があり危ういため併せて外した。 */
  q('phrasal-07r', {
    t: ['phrasal'], lv: 3,
    s: 'Please ------- out the enclosed form and return it in the prepaid envelope.',
    c: ['fill', 'carry', 'find', 'throw'],
    a: 0,
    e: 'fill out a form「用紙に記入する」。目的語は form / application / questionnaire など記入欄のある書式。英国では fill in も使う。',
    w: ['正解。fill out the form。',
        'carry out の目的語は計画・指示・調査・作業など「実行される事柄」（carry out a plan / carry out an inspection）。記入する書式は目的語にならない。',
        'find out の目的語は事実・情報（find out the truth / find out what happened）。手元に同封されている用紙を「調べ出す」意味にはならない。',
        'throw out は「（不要な物を）捨てる」。捨てたものを prepaid envelope で返送することはできず、後半と矛盾する。'],
    ja: '同封の用紙にご記入のうえ、料金受取人払いの封筒でご返送ください。',
    v: [['fill out', '記入する'], ['prepaid envelope', '料金受取人払い封筒']],
  }),

  q('phrasal-08', {
    t: ['phrasal'], lv: 3,
    s: 'Negotiations ------- down when neither side would revise its position on delivery penalties.',
    c: ['broke', 'turned', 'went', 'set'],
    a: 0,
    e: 'break down「（交渉・関係が）決裂する」。話し合いが継続できなくなることを表す自動詞用法で、機械が「故障する」のも同じ語。',
    w: ['正解。negotiations break down。',
        'turn down は「（申し出を）断る」「（音量を）下げる」で他動詞。断る対象の目的語が要り、negotiations を主語にした自動詞用法は無い。',
        'go down は「（数値が）下がる」「（船・システムが）沈む・停止する」「（提案が）受け止められる（go down well）」。話し合いが物別れになる意味では使わない。',
        'set down は「（規則・条件を）明文化する」「（乗客を）降ろす」で他動詞。目的語が要り、交渉の決裂は表せない。'],
    ja: '納期遅延の違約金についてどちらの側も立場を変えようとせず、交渉は決裂した。',
    v: [['break down', '決裂する'], ['penalty', '違約金']],
  }),
];
