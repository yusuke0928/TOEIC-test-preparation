/* =============================================================
   topics.js — 個別論点マスタ
   800点保持者が 900 台へ抜けるときに、実際に失点が集中する論点だけを
   選んで並べてある。各論点に「なぜ落とすか」を明記した。
   ============================================================= */

export const GROUPS = [
  { id: 'g-grammar',   name: '文法',       part: '5・6', kicker: 'GRAMMAR'   },
  { id: 'g-vocab',     name: '語彙・語法', part: '5・6', kicker: 'VOCABULARY'},
  { id: 'g-context',   name: '文脈',       part: '6',    kicker: 'CONTEXT'   },
  { id: 'g-reading',   name: '読解設問',   part: '7',    kicker: 'READING'   },
  { id: 'g-listening', name: 'リスニング', part: '1〜4', kicker: 'LISTENING' },
];

export const TOPICS = [
  /* ── 文法 ───────────────────────────────────────── */
  { id: 'pos', group: 'g-grammar', part: 5, name: '品詞の識別',
    sub: '空所に入る品詞を構造から決める',
    pitfall: '意味で選ぼうとすると事故る。S・V・O の欠けを見て「名詞か形容詞か副詞か」を先に確定させる。',
    key: '空所の前後だけを見る。冠詞＋___＋前置詞なら名詞、be動詞＋___なら形容詞か分詞。' },

  { id: 'vform', group: 'g-grammar', part: 5, name: '動詞の形',
    sub: '時制・態・主述の一致',
    pitfall: '800 レベルでは単純な時制は落とさない。狙われるのは「時を表す副詞節中の現在形」と「完了形の使い分け」。',
    key: 'by the time / once / as soon as に続く節は未来でも現在形。' },

  { id: 'subj', group: 'g-grammar', part: 5, name: '仮定法・要求提案',
    sub: '要求提案の that 節・仮定法の時制・if なし条件',
    pitfall: 'recommend / require / essential の後ろの that 節は原形。ただし insist は二義的で、要求の意味なら原形、「事実を強く主張する」の意味なら直説法になる。',
    key: 'if 節がなくても otherwise / but for / 主語の名詞句が条件を担うことがある。帰結節が would + 原形か would have + 過去分詞かは「いつの話か」で決まる。' },

  { id: 'verbal', group: 'g-grammar', part: 5, name: '準動詞',
    sub: '不定詞・動名詞・分詞の選択',
    pitfall: '動詞ごとに後続形が決まっているものは知識問題。avoid/consider/postpone は動名詞のみ。',
    key: '「be committed to -ing」「look forward to -ing」の to は前置詞。' },

  { id: 'ptcp', group: 'g-grammar', part: 5, name: '分詞と分詞構文',
    sub: '現在分詞と過去分詞の判別',
    pitfall: '修飾先が「する側」か「される側」か。名詞との能動・受動関係だけで決まる。',
    key: '意味上の主語が省略された分詞構文は、必ず主節の主語と一致する。' },

  { id: 'rel', group: 'g-grammar', part: 5, name: '関係詞',
    sub: '格・先行詞・複合関係詞',
    pitfall: '関係代名詞 what と関係副詞 where の使い分け。前置詞＋関係代名詞は後ろが完全文。',
    key: '空所の後ろが完全文なら関係副詞か that（同格）、不完全なら関係代名詞。' },

  { id: 'conjprep', group: 'g-grammar', part: 5, name: '接続詞・前置詞・副詞',
    sub: '後続が節か句かで決める',
    pitfall: 'because / because of、although / despite、while / during。意味は同じでも構造が違う。',
    key: '空所の後ろに SV があれば接続詞、名詞句だけなら前置詞、独立していれば副詞。' },

  { id: 'pron', group: 'g-grammar', part: 5, name: '代名詞',
    sub: '格・再帰・不定代名詞',
    pitfall: 'themselves が「自分たちで」の強調用法で副詞的に置かれるパターン。',
    key: 'those who / that of / one another など、指すものを追う。' },

  { id: 'comp', group: 'g-grammar', part: 5, name: '比較',
    sub: '原級・比較級・最上級と慣用表現',
    pitfall: 'no later than / as many as / the + 比較級。慣用句として覚えていないと解けない。',
    key: '比較級を強めるのは much / far / even / still / considerably（very は不可）。' },

  { id: 'quant', group: 'g-grammar', part: 5, name: '数量詞と可算性',
    sub: 'much / many / few / little / each / every',
    pitfall: 'equipment, furniture, information, machinery, luggage は不可算。数える選択肢が罠。',
    key: 'each / every + 単数名詞 + 単数動詞。all / most + 複数 or 不可算。' },

  { id: 'inv', group: 'g-grammar', part: 5, name: '倒置・強調・省略',
    sub: '倒置を呼ぶ語・強調構文の枠・復元できる省略',
    pitfall: '倒置は文頭の語の暗記だけでは足りない。as thorough as it was のように倒置しない型もある。強調・省略も文脈で何を補うかが鍵。',
    key: 'Not only / Such などが文頭なら倒置、Should / Had は if の省略。強調は it is/was ... that の枠か、命令文を強める Do。省略は主語＋be動詞や代不定詞の to など一意に復元できる要素のみ。' },

  { id: 'voice', group: 'g-grammar', part: 5, name: '態と自他動詞',
    sub: '受動態にできない動詞',
    pitfall: 'rise / arise / occur / remain / consist は自動詞。受動態の選択肢は即消せる。',
    key: '空所の直後に目的語があれば能動、なければ受動を疑う。' },

  /* ── 語彙・語法 ─────────────────────────────────── */
  { id: 'colloc', group: 'g-vocab', part: 5, name: 'コロケーション',
    sub: '動詞＋名詞の決まった結び付き',
    pitfall: 'meet a deadline / place an order / conduct a survey。訳せても組み合わせを知らないと選べない。',
    key: '選択肢が全部「意味は通る動詞」なら、名詞との相性で決める。' },

  { id: 'vusage', group: 'g-vocab', part: 5, name: '動詞の語法',
    sub: '文型と後続の形',
    pitfall: 'inform / notify / remind は「人」を目的語に取る。announce / suggest は人を直接取れない。',
    key: 'discuss / mention / approach / attend は他動詞（前置詞不要）。' },

  { id: 'adjprep', group: 'g-vocab', part: 5, name: '形容詞・名詞＋前置詞',
    sub: '固定した前置詞の組み合わせ',
    pitfall: 'be eligible for / be subject to / in compliance with。前置詞が空所になる形が頻出。',
    key: '選択肢が前置詞だけのときは、前の形容詞・名詞から逆算する。' },

  { id: 'adv', group: 'g-vocab', part: 5, name: '副詞の意味識別',
    sub: '文意を決める副詞',
    pitfall: '意味の近い副詞が並ぶと、訳し比べだけでは決め手が出ない。hard と hardly、due と duly のように語形が似ていて働きの違う対も落としやすい。',
    key: '同義に見えたら位置で決める。数量表現の前なら幅を測れる語（well over）、of が続けばその前置詞を取れる語（independently of）、文頭の倒置なら否定的限定の語（Only when）。' },

  { id: 'confuse', group: 'g-vocab', part: 5, name: '紛らわしい語',
    sub: '語源が近い派生語の識別',
    pitfall: 'considerable / considerate、economic / economical、successful / successive。',
    key: '意味の差を日本語で一言で言えるようにしておく。' },

  { id: 'biz', group: 'g-vocab', part: 5, name: 'ビジネス頻出語',
    sub: '900 帯で問われる語',
    pitfall: 'discretion, contingent, prospective, tentative, waive, forfeit。知識がなければ落とす。',
    key: '知らない語が正解の位置に来る。消去法の精度を上げる。' },

  { id: 'phrasal', group: 'g-vocab', part: 5, name: '句動詞',
    sub: '動詞＋副詞・前置詞',
    pitfall: 'carry out / call off / take over / fill in for。ビジネス文脈での意味を押さえる。',
    key: '句動詞は目的語の位置（分離可能か）も問われる。' },

  /* ── 文脈（Part 6）──────────────────────────────── */
  { id: 'connect', group: 'g-context', part: 6, name: '文脈接続語',
    sub: 'However / Therefore / Nevertheless',
    pitfall: '空所の前後の論理関係（逆接・因果・追加・例示）を読み取れば一意に決まる。',
    key: '空所だけ見ても解けない。前の文と次の文の関係を日本語で言語化する。' },

  { id: 'ctense', group: 'g-context', part: 6, name: '文脈依存の時制',
    sub: '文書全体の時間軸から決める',
    pitfall: '同じ文だけ見ると複数の時制が成立する。日付・last week・as of などが決定打。',
    key: '文書のヘッダの日付と、本文中の時を表す語句を必ず結び付ける。' },

  { id: 'p6ins', group: 'g-context', part: 6, name: '文挿入（Part 6）',
    sub: '4 択から 1 文を選ぶ',
    pitfall: '内容が正しくても、直後の文の指示語・定冠詞とつながらなければ誤り。',
    key: '入れた文の「次の文」が自然に続くかを必ず確認する。' },

  { id: 'cohesion', group: 'g-context', part: 6, name: '結束性',
    sub: '指示語・定冠詞・語彙の連鎖',
    pitfall: 'this / these / such / the former。前出の名詞を正確に指せているか。',
    key: '初出は a、既出は the。この原則が Part 6 の空所を決めることがある。' },

  /* ── 読解設問（Part 7）──────────────────────────── */
  { id: 'p7not', group: 'g-reading', part: 7, name: 'NOT・EXCEPT 問題',
    sub: '本文にないものを選ぶ',
    pitfall: '4 択のうち 3 つを本文で確認する必要があり、最も時間を食う。',
    key: '選択肢を先に読み、本文を上から照合する。消えた 3 つが確定したら残りが答え。' },

  { id: 'p7intent', group: 'g-reading', part: 7, name: '意図問題',
    sub: '"何を意味するか" を問う',
    pitfall: '引用文の直訳ではなく、直前の相手の発言に対する機能（同意・拒否・確認）を答える。',
    key: '引用の 1 つ前の発言を必ず読む。答えはそこにある。' },

  { id: 'p7ins', group: 'g-reading', part: 7, name: '位置選択',
    sub: '[1]〜[4] のどこに入るか',
    pitfall: '挿入文中の指示語・接続語が手がかり。それがない場合は話題の切り替わりで判断。',
    key: '挿入文に this / that / such / also / instead があれば、その指す内容の直後。' },

  { id: 'p7syn', group: 'g-reading', part: 7, name: '同義語問題',
    sub: '文中での意味に最も近い語',
    pitfall: '辞書の第一義ではなく「その文脈での意味」。多義語が狙われる。',
    key: '該当語を選択肢で置き換えて、文が成立するか読み直す。' },

  { id: 'p7cross', group: 'g-reading', part: 7, name: 'クロスリファレンス',
    sub: '複数文書の照合',
    pitfall: 'DP/TP で必ず 1〜2 問出る最重要論点。片方の文書だけでは絶対に解けない。',
    key: '固有名詞・日付・金額・番号が 2 つの文書に出てきたら、そこが接点。' },

  { id: 'p7inf', group: 'g-reading', part: 7, name: '推測問題',
    sub: 'imply / suggest / most likely',
    pitfall: '本文に書いていない「常識的な飛躍」を選ぶと誤り。必ず根拠が本文にある。',
    key: '選んだ選択肢について「本文の何行目が根拠か」を言えるか自問する。' },

  { id: 'p7detail', group: 'g-reading', part: 7, name: '詳細・言い換え',
    sub: '本文の情報の paraphrase',
    pitfall: '本文の語がそのまま入っている選択肢は罠であることが多い。',
    key: '正解の選択肢は必ず言い換えられている。同じ単語＝正解ではない。' },

  /* ── リスニング ─────────────────────────────────── */
  { id: 'p1verb', group: 'g-listening', part: 1, name: 'Part 1 状態と動作',
    sub: '受動態の進行形と状態受動態',
    pitfall: 'is being loaded（今まさに積まれている＝人がいる）と is loaded（積まれた状態）の差。',
    key: '人が写っていない写真で being + 過去分詞 が聞こえたら、ほぼ誤り。' },

  { id: 'p2ind', group: 'g-listening', part: 2, name: 'Part 2 間接応答',
    sub: 'Yes/No で答えない返し',
    pitfall: '900 帯の失点はほぼここ。「わからない」「まだ決まっていない」「別の人に聞いて」が正解になる。',
    key: '疑問詞と同じ音・関連語が入った選択肢は、まず疑う。' },

  { id: 'p2wh', group: 'g-listening', part: 2, name: 'Part 2 疑問文の型',
    sub: '否定疑問・付加疑問・選択疑問',
    pitfall: '否定疑問への Yes/No は日本語と逆。選択疑問に Yes/No は原則不可。',
    key: '文頭 3 語で疑問文の型を確定させ、その型に合わない応答を切る。' },

  { id: 'p3int', group: 'g-listening', part: 3, name: 'Part 3 意図問題',
    sub: '発言の意図を問う',
    pitfall: '引用文が流れる「前」の文脈が根拠。聞き逃すと復元できない。',
    key: '設問を先読みし、引用文をキーワードとして待ち構える。' },

  { id: 'p3detail', group: 'g-listening', part: 3, name: 'Part 3 詳細・次の行動',
    sub: '問題点・依頼・この後の行動',
    pitfall: '設問の順序と会話の展開はほぼ一致する。3 問目は会話の後半にしか根拠がない。',
    key: '「次に何をするか」は最後の 2 往復に出る。そこまで集中を切らさない。' },

  { id: 'graphic', group: 'g-listening', part: 3, name: '図表問題',
    sub: 'Look at the graphic',
    pitfall: '音声で読み上げられるのは「図表に載っていない側の情報」。図表で対応する側を答える。',
    key: '音声が始まる前に図表の 2 列の対応関係を頭に入れる。' },

  { id: 'p4type', group: 'g-listening', part: 4, name: 'Part 4 トークの型',
    sub: '留守電・館内放送・広告・ツアー',
    pitfall: '型ごとに設問パターンが決まっている。冒頭 10 秒で型を判定できれば正答率が跳ねる。',
    key: 'Thank you for calling / Attention, shoppers / Welcome to は、それぞれ別の設問セットを予告する。' },
];

export const topicById = (id) => TOPICS.find(t => t.id === id);
export const topicName = (id) => topicById(id)?.name || id;
export const topicsOfGroup = (g) => TOPICS.filter(t => t.group === g);
