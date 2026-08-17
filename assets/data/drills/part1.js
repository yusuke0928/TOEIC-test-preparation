/* =============================================================
   drills/part1.js — Part 1 論点ドリル（描写テキスト方式・40問）
   論点は p1verb のまま。listening.js の8問（SVG場面方式）はそのまま残し、
   本ファイルは英語の場面描写テキストを一定時間だけ表示するユニットのみを追加する
   （scene の代わりに desc を持つ。quiz.js 側が desc を検知してテキスト表示に切り替える）。

   サブ論点の内訳（合計40問）:
     is being + 過去分詞（進行受動・動作主の有無）      7問
     has been + 過去分詞（完了受動・状態と動作）        7問
     is wearing / is putting on（着用の状態と動作）      7問
     There is / There are（存在・数量）                  6問
     位置の前置詞（behind / in front of / across from /
                   alongside）                            7問
     抽象動詞（inspect / examine / adjust / browse /
               handle）                                   6問

   描写テキストの語彙は選択肢の語彙とできる限り重ならないように書いてある
   （答えが描写文からそのまま漏れないようにするため）。
   is being + 過去分詞 を誤答に使う箇所は、その動作を行っている動作主が
   描写文に存在しないことを一問ずつ確認済み。
   ============================================================= */

const p1 = (id, o) => ({
  id: `u-${id}`, part: 1, kind: 'p1', topics: ['p1verb'], level: o.lv ?? 4,
  desc: o.desc, speaker: o.sp || 'W-Am',
  questions: [{
    id, choices: o.c, answer: o.a, exp: o.e, why: o.w, ja: o.ja, vocab: o.v, topics: ['p1verb'],
  }],
});

const ROLES = ['M-Am', 'W-Am', 'M-Br', 'W-Br', 'M-Au', 'W-Au', 'M-Cn', 'W-Cn'];
const sp = (i) => ROLES[i % ROLES.length];

export const UNITS = [

  /* ══ is being + 過去分詞（進行受動）═══════════════════
     正解に使うときは、その動作をしている人物を描写文に明記する。 */

  p1('p1d-01', {
    lv: 4, sp: sp(0),
    desc: 'A man kneels beside a bicycle, holding a wrench to one wheel. Tools are scattered on the pavement around him.',
    c: [
      'A bicycle wheel is being repaired.',
      'A man is riding a bicycle down a street.',
      'Some tools have been packed into a box.',
      'A bicycle has been chained to a post.',
    ],
    a: 0,
    e: '工具を手にして車輪にかがみ込んでいる人物の動作を is being + 過去分詞（進行受動）で述べている。この形は、その動作を行っている人物が描写の中に存在して初めて正しくなる。',
    w: ['正解。工具を当てている人物がおり、修理の動作が進行中と読める。',
        '乗っている場面ではなく、かがみ込んで作業している場面。',
        '工具は地面に散らばっており、箱に片付けられてはいない。',
        '柱や鎖については何も述べられていない。'],
    ja: [
      '(A) 自転車の車輪が修理されているところだ。',
      '(B) 男性が通りを自転車で走っている。',
      '(C) 工具が箱に詰め込まれている。',
      '(D) 自転車が柱に鎖でつながれている。',
    ],
    v: [['wrench', 'レンチ'], ['scattered', '散らばった']],
  }),

  p1('p1d-02', {
    lv: 4, sp: sp(1),
    desc: 'Two men move a sofa toward the open back of a van parked at the curb. Several boxes sit stacked on the sidewalk nearby.',
    c: [
      'A van is being unloaded at a warehouse.',
      'Furniture is being carried into a vehicle.',
      'Boxes have been left at the roadside overnight.',
      'A man is sweeping the sidewalk.',
    ],
    a: 1,
    e: 'ソファを持ち上げて車の方へ運んでいる二人の動作。is being carried は、それを運んでいる人物が写っていて初めて成立する。倉庫や一晩放置といった、写真からは判断できない情報を含む選択肢は誤り。',
    w: ['倉庫ではなく道端であり、荷下ろしではなく積み込みの最中。',
        '正解。家具（ソファ）が車両に運び込まれている。',
        '一晩放置されていたかどうかは写真から判断できない。',
        '掃いている人物は写っていない。'],
    ja: [
      '(A) 倉庫でバンの荷が下ろされているところだ。',
      '(B) 家具が車両に運び込まれているところだ。',
      '(C) 箱が一晩、道端に置かれたままだ。',
      '(D) 男性が歩道を掃いている。',
    ],
    v: [['curb', '縁石'], ['sidewalk', '歩道']],
  }),

  p1('p1d-03', {
    lv: 4, sp: sp(2),
    desc: 'Behind a counter, a barista holds a metal pitcher beneath the nozzle of an espresso machine. Foam is rising to the rim of the pitcher.',
    c: [
      'A customer is ordering a drink at a register.',
      'Cups have been arranged on a tray.',
      'Milk is being steamed at a counter.',
      'A machine is being unplugged from the wall.',
    ],
    a: 2,
    e: 'ピッチャーを機械のノズルの下に構え、泡が立ち上っている場面。is being steamed は、それを操作している人物（バリスタ）が写っていて初めて成立する。',
    w: ['注文している客の姿は写っていない。',
        'トレイやカップの配置については何も述べられていない。',
        '正解。バリスタが機械を使ってミルクを温めている最中である。',
        '機械は使用中であり、コンセントを抜いている様子はない。'],
    ja: [
      '(A) 客がレジで飲み物を注文している。',
      '(B) カップがトレイに並べられている。',
      '(C) カウンターでミルクがスチームされているところだ。',
      '(D) 機械のプラグがコンセントから抜かれているところだ。',
    ],
    v: [['pitcher', 'ピッチャー、水差し'], ['rim', '縁（ふち）']],
  }),

  p1('p1d-04', {
    lv: 4, sp: sp(3),
    desc: 'A woman leans toward a dress form, pressing pins into a length of fabric draped over it. Spools of thread rest on a nearby table.',
    c: [
      'A woman is folding a finished garment.',
      'A spool of thread is rolling off the table.',
      'A sewing machine is being repaired.',
      'A dress form is being fitted with fabric.',
    ],
    a: 3,
    e: 'トルソーに布をかけてピンを刺している人物の動作。is being fitted は、それを行っている人物が写っていて初めて成立する。写真にないミシンや落下する糸巻きは誤り。',
    w: ['布はまだ仮止めの途中で、完成した衣服をたたんでいるわけではない。',
        '糸巻きはテーブルの上に置かれているだけで、転がり落ちている描写はない。',
        'ミシン自体が写真の中に存在しない。',
        '正解。トルソーに布を仮止めしている最中である。'],
    ja: [
      '(A) 女性が仕上がった衣服をたたんでいる。',
      '(B) 糸巻きがテーブルから転がり落ちかけている。',
      '(C) ミシンが修理されているところだ。',
      '(D) トルソーに布が合わせられているところだ。',
    ],
    v: [['dress form', 'トルソー'], ['spool', '糸巻き']],
  }),

  p1('p1d-05', {
    lv: 4, sp: sp(4),
    desc: 'A librarian bends over a counter, pressing a small sticker onto the spine of a book. A stack of books waits beside her.',
    c: [
      'A label is being attached to a book.',
      'Books are being returned to a shelf.',
      'A stack of books has toppled onto the floor.',
      'A librarian is scanning a barcode with a handheld device.',
    ],
    a: 0,
    e: 'シールを本の背に貼り付けている動作を is being attached（進行受動）で述べている。それを行う人物（司書）が明記されているため成立する。',
    w: ['正解。司書がラベルを本に貼り付けている最中である。',
        '棚に戻す動作ではなく、カウンターでの作業。',
        '本の山は「待っている」だけで、崩れてはいない。',
        'バーコードを読み取る機器は写っていない。'],
    ja: [
      '(A) ラベルが本に貼り付けられているところだ。',
      '(B) 本が棚に戻されているところだ。',
      '(C) 本の山が床に崩れ落ちている。',
      '(D) 司書が携帯端末でバーコードを読み取っている。',
    ],
    v: [['spine', '（本の）背'], ['sticker', 'シール']],
  }),

  p1('p1d-06', {
    lv: 5, sp: sp(5),
    desc: 'One worker hammers a metal peg into the ground while another unrolls a length of canvas beside a folded tent. Poles lie in the grass.',
    c: [
      'A tent is being taken down by two workers.',
      'A stake is being driven into the ground.',
      'Canvas has been folded and stored in a bag.',
      'Poles are being assembled into a frame.',
    ],
    a: 1,
    e: '二人の作業員がそれぞれ異なる作業（杭打ちと布の展開）をしている場面。テントはまだ畳まれた状態で、これから設営される途中と読める。杭を打つ人物が明記されているため、その動作を進行受動で述べた選択肢が正解になる。',
    w: ['テントは畳まれたままで、これは撤収ではなく設営の途中と読める。',
        '正解。金属の杭を地面に打ち込んでいる人物がいる。',
        '布は広げられている最中であり、畳んで収納された状態ではない。',
        '支柱は草の上に置かれているだけで、組み立てている人物はいない。'],
    ja: [
      '(A) 二人の作業員によってテントが撤収されているところだ。',
      '(B) 杭が地面に打ち込まれているところだ。',
      '(C) 布が畳まれて袋に収納されている。',
      '(D) 支柱が組み立てられて骨組みにされているところだ。',
    ],
    v: [['peg', '杭'], ['unroll', '広げる、繰り出す']],
  }),

  p1('p1d-07', {
    lv: 5, sp: sp(6),
    desc: 'A forklift operator raises a loaded pallet several inches off the concrete floor. Nearby, a colleague writes on a clipboard beside stacked crates.',
    c: [
      'A pallet is being lowered onto a truck.',
      'Boxes are being stacked onto a pallet by hand.',
      'A pallet is being lifted by a forklift.',
      'A colleague is loading boxes onto a cart.',
    ],
    a: 2,
    e: '二人の人物がそれぞれ別の作業をしている場面。フォークリフトがパレットを持ち上げている動作主は明確だが、もう一方の人物はクリップボードに記入しているだけで、積み込みや荷下ろしはしていない。',
    w: ['パレットは下ろされているのではなく、床から持ち上げられている。',
        '手作業で箱を積んでいる人物はいない。フォークリフトが持ち上げている。',
        '正解。フォークリフトがパレットを持ち上げている最中である。',
        '同僚はクリップボードに記入しており、台車に箱を積んではいない。'],
    ja: [
      '(A) パレットがトラックに下ろされているところだ。',
      '(B) 箱が手作業でパレットに積み上げられているところだ。',
      '(C) パレットがフォークリフトで持ち上げられているところだ。',
      '(D) 同僚が台車に箱を積み込んでいる。',
    ],
    v: [['pallet', 'パレット（荷物台）'], ['clipboard', 'クリップボード']],
  }),

  /* ══ has been + 過去分詞（完了受動）════════════════════
     状態を表す完了受動が正解になる。誤答の is being + 過去分詞 は
     その動作を行う人物が描写に存在しないことを徹底する。 */

  p1('p1d-08', {
    lv: 4, sp: sp(7),
    desc: 'Rows of identical cartons rise to the ceiling on tall metal shelving. No one stands in the narrow aisle between the rows.',
    c: [
      'A worker is climbing a ladder to reach the top shelf.',
      'Cartons are being unloaded from a truck outside.',
      'An aisle is being swept by a cleaning crew.',
      'Cartons have been stacked on tall shelving.',
    ],
    a: 3,
    e: '通路に誰もいないことが明記されている無人の写真。is being + 過去分詞（進行受動）は動作を行う人物がいなければ成立しないため、人物を含む選択肢はすべて消える。積み上がった「状態」を述べる have been stacked が正解。',
    w: ['通路には誰もいないため、はしごに登っている人物は存在しない。',
        'トラックも、荷下ろしをしている人物も描写にない。',
        '清掃員についての記述はない。',
        '正解。棚に箱が積み上げられた状態を述べている。'],
    ja: [
      '(A) 作業員が最上段の棚に届くようはしごを昇っている。',
      '(B) 外でトラックから段ボール箱が降ろされているところだ。',
      '(C) 清掃員によって通路が掃かれているところだ。',
      '(D) 段ボール箱が高い棚に積み上げられている。',
    ],
    v: [['carton', '段ボール箱'], ['aisle', '通路']],
  }),

  p1('p1d-09', {
    lv: 4, sp: sp(0),
    desc: 'Several bicycles stand side by side against a metal railing in a park. Their wheels line up evenly along the paved path.',
    c: [
      'Bicycles have been parked along a railing.',
      'A rider is locking a bicycle to a railing.',
      'A railing is being painted a bright color.',
      'A path is being repaved by a work crew.',
    ],
    a: 0,
    e: '柵に立てかけられた自転車の「状態」を have been parked で述べている。鍵をかける、塗装する、舗装するといった動作をしている人物は描写のどこにもいない。',
    w: ['正解。自転車が柵に沿って停められている状態。',
        '鍵をかけている人物についての記述はない。',
        '柵を塗装している人物はいない。',
        '道を舗装し直している作業員もいない。'],
    ja: [
      '(A) 自転車が柵に沿って停められている。',
      '(B) 利用者が自転車を柵に施錠している。',
      '(C) 柵が鮮やかな色に塗られているところだ。',
      '(D) 作業員たちによって道が舗装し直されているところだ。',
    ],
    v: [['railing', '柵、手すり'], ['paved', '舗装された']],
  }),

  p1('p1d-10', {
    lv: 4, sp: sp(1),
    desc: 'Folders and pens sit evenly spaced at each place around a long table. The chairs around the table are all empty.',
    c: [
      'A meeting is being conducted around a table.',
      'Materials have been laid out on a conference table.',
      'Chairs are being carried into a room.',
      'A table is being wiped down by staff.',
    ],
    a: 1,
    e: '椅子がすべて空いていることから会議中ではないと分かる。資料が「並べられた状態」を have been laid out で述べた選択肢が正解。',
    w: ['椅子はすべて空いており、会議は進行していない。',
        '正解。資料がテーブルに並べられている状態。',
        '椅子を運んでいる人物についての記述はない。',
        '拭き掃除をしているスタッフは写っていない。'],
    ja: [
      '(A) テーブルを囲んで会議が行われているところだ。',
      '(B) 資料が会議用テーブルに並べられている。',
      '(C) 椅子が部屋に運び込まれているところだ。',
      '(D) スタッフによってテーブルが拭かれているところだ。',
    ],
    v: [['evenly spaced', '等間隔に'], ['conference table', '会議用テーブル']],
  }),

  p1('p1d-11', {
    lv: 4, sp: sp(2),
    desc: 'Rows of flowers grow in evenly spaced beds beside a stone path. A watering can rests untouched on the grass.',
    c: [
      'A gardener is trimming hedges along a path.',
      'Flowers are being watered from a can.',
      'Flower beds have been planted along a path.',
      'A path is being laid with new stones.',
    ],
    a: 2,
    e: 'じょうろが「手つかずのまま」置かれていることが明記されており、水やりをしている人物はいない。花壇が「作られた状態」を have been planted で述べた選択肢が正解。',
    w: ['生垣を刈っている庭師についての記述はない。',
        'じょうろは触れられずに置かれているだけで、水やりの最中ではない。',
        '正解。花壇が小道沿いに作られている状態。',
        '石を敷いている作業員についての記述はない。'],
    ja: [
      '(A) 庭師が小道沿いの生垣を刈り込んでいる。',
      '(B) じょうろで花に水が撒かれているところだ。',
      '(C) 花壇が小道沿いに作られている。',
      '(D) 小道に新しい石が敷かれているところだ。',
    ],
    v: [['flower bed', '花壇'], ['untouched', '手つかずの']],
  }),

  p1('p1d-12', {
    lv: 3, sp: sp(3),
    desc: 'A tall bookshelf stands completely bare against the wall. Several boxes sit on the floor in front of it.',
    c: [
      'A shelf is being carried out of the room.',
      'A worker is filling a shelf with books.',
      'Boxes are being opened on the floor.',
      'A shelf has been emptied of its books.',
    ],
    a: 3,
    e: '棚が完全に空になっている「状態」を have been emptied で述べている。運び出す、詰める、開けるといった動作をしている人物は描写に存在しない。',
    w: ['棚を運び出している人物についての記述はない。',
        '棚は空であり、本を詰めている人物はいない。',
        '箱を開けている人物についての記述はない。',
        '正解。棚は本が取り払われて空になった状態。'],
    ja: [
      '(A) 棚が部屋の外へ運び出されているところだ。',
      '(B) 作業員が棚に本を詰めている。',
      '(C) 床で箱が開けられているところだ。',
      '(D) 棚は本が取り払われて空になっている。',
    ],
    v: [['bare', '何もない、空の'], ['completely', '完全に']],
  }),

  p1('p1d-13', {
    lv: 3, sp: sp(4),
    desc: 'A single car sits centered between painted white lines in an otherwise empty lot. No one is near the vehicle.',
    c: [
      'A car has been parked within the lines.',
      'A driver is stepping out of a car.',
      'Lines are being painted on the pavement.',
      'A lot is being cleared of vehicles.',
    ],
    a: 0,
    e: '「車の近くに誰もいない」と明記されている。区画線内に停められた「状態」を has been parked で述べた選択肢が正解で、降車・塗装・撤去といった動作をしている人物はいずれも存在しない。',
    w: ['正解。車が区画線内に停められている状態。',
        '車の近くには誰もいないため、降車している運転手はいない。',
        '線を塗装している人物についての記述はない。',
        '車を移動させている人物についての記述はない。'],
    ja: [
      '(A) 車が区画線内に停められている。',
      '(B) 運転手が車から降りているところだ。',
      '(C) 舗装面に線が塗られているところだ。',
      '(D) 駐車場から車両が撤去されているところだ。',
    ],
    v: [['lot', '駐車場'], ['pavement', '舗装面']],
  }),

  p1('p1d-14', {
    lv: 3, sp: sp(5),
    desc: 'A wide umbrella shades a small round table with two empty chairs beneath it. The café patio is otherwise quiet.',
    c: [
      'A waiter is setting down plates at the table.',
      'An umbrella has been opened over a table.',
      'Chairs are being stacked against a wall.',
      'A table is being wiped by a staff member.',
    ],
    a: 1,
    e: '椅子が空いており、テラスは「静か」と明記されている。人物の動作を含む選択肢はすべて消え、パラソルが「開かれた状態」を has been opened で述べた選択肢が正解になる。',
    w: ['椅子は空いており、皿を置くウェイターはいない。',
        '正解。パラソルがテーブルの上に開かれている状態。',
        '椅子を積み重ねている人物についての記述はない。',
        '拭き掃除をしているスタッフについての記述はない。'],
    ja: [
      '(A) ウェイターがテーブルに皿を置いている。',
      '(B) テーブルの上にパラソルが開かれている。',
      '(C) 椅子が壁際に積み重ねられているところだ。',
      '(D) スタッフによってテーブルが拭かれているところだ。',
    ],
    v: [['shade', '陰を作る'], ['patio', 'テラス']],
  }),

  /* ══ is wearing / is putting on（着用の状態と動作）══════
     is wearing = すでに身につけている状態。is putting on = 身につけている最中の動作。 */

  p1('p1d-15', {
    lv: 4, sp: sp(6),
    desc: 'A man reaches one arm behind his back toward the open sleeve of a jacket. His other arm is already through the opposite sleeve.',
    c: [
      'A jacket has been hung on a hook.',
      'A man is folding a jacket over his arm.',
      'A man is putting on a jacket.',
      'A man is removing a jacket outdoors.',
    ],
    a: 2,
    e: '片方の腕はすでに袖を通しているが、もう片方はまだ袖を探っている最中で、着用が完了していない。この「動作の途中」を表せるのは is putting on であり、すでに着ている状態を表す is wearing とは区別される。',
    w: ['ジャケットはフックにかけられておらず、着用中である。',
        '腕にかけてたたんでいるのではなく、袖を通している最中。',
        '正解。ジャケットを着ている最中の動作。',
        '脱いでいる場面ではなく、袖を通している最中である。'],
    ja: [
      '(A) ジャケットがフックに掛けられている。',
      '(B) 男性がジャケットを腕に掛けている。',
      '(C) 男性がジャケットを着ているところだ。',
      '(D) 男性が屋外でジャケットを脱いでいる。',
    ],
    v: [['sleeve', '袖'], ['reach', '手を伸ばす']],
  }),

  p1('p1d-16', {
    lv: 4, sp: sp(7),
    desc: 'A woman stands still at a lab bench, goggles fixed over her eyes and a white coat buttoned to the collar.',
    c: [
      'A woman is buttoning a lab coat.',
      'Goggles have been left on a bench.',
      'A woman is reaching for a coat on a hook.',
      'A woman is wearing a lab coat and goggles.',
    ],
    a: 3,
    e: 'ゴーグルは目に固定され、白衣は襟元まで留められた状態で、いずれもすでに完了している。この「身につけ終わった状態」を表せるのは is wearing であり、いままさに留めている最中を表す is buttoning とは異なる。',
    w: ['白衣はすでに留め終わった状態であり、留めている最中ではない。',
        'ゴーグルは目にかけられており、ベンチに置かれてはいない。',
        'フックにある上着に手を伸ばしている描写はない。',
        '正解。すでに白衣とゴーグルを身につけている状態。'],
    ja: [
      '(A) 女性が白衣のボタンを留めている。',
      '(B) ゴーグルがベンチに置かれたままだ。',
      '(C) 女性がフックにかかった上着に手を伸ばしている。',
      '(D) 女性が白衣とゴーグルを身に着けている。',
    ],
    v: [['lab bench', '実験台'], ['collar', '襟']],
  }),

  p1('p1d-17', {
    lv: 4, sp: sp(0),
    desc: 'A chef stands at a stove stirring a pot. A tall white hat sits on his head and an apron is tied at his waist.',
    c: [
      'A chef is wearing a hat and an apron.',
      'A chef is tying an apron behind his back.',
      'A hat is being placed on a shelf.',
      'A pot is being washed in a sink.',
    ],
    a: 0,
    e: '帽子は頭に「乗っている」状態、エプロンは「結ばれた」状態で、いずれもすでに完了している。この状態を表すのは is wearing であり、いままさに結んでいる動作を表す選択肢とは区別される。',
    w: ['正解。帽子とエプロンをすでに身につけている状態。',
        'エプロンはすでに結ばれており、結んでいる最中ではない。',
        '帽子は頭にあり、棚に置かれてはいない。',
        '鍋は調理中であり、洗われてはいない。'],
    ja: [
      '(A) シェフが帽子とエプロンを身に着けている。',
      '(B) シェフが後ろでエプロンのひもを結んでいる。',
      '(C) 帽子が棚に置かれているところだ。',
      '(D) 鍋が流しで洗われているところだ。',
    ],
    v: [['stir', 'かき混ぜる'], ['waist', '腰、ウエスト']],
  }),

  p1('p1d-18', {
    lv: 4, sp: sp(1),
    desc: 'A worker lowers a hard hat onto his head with one hand still gripping the brim. The strap dangles beneath his chin.',
    c: [
      'A hard hat rests on a table nearby.',
      'A worker is putting on a hard hat.',
      'A worker is removing safety gloves.',
      'A helmet is being handed to a supervisor.',
    ],
    a: 1,
    e: 'つばをまだ手でつかんだまま頭に下ろしている最中で、あごひももまだ垂れ下がっている。着用が完了していないこの動作は is putting on で表す。',
    w: ['ヘルメットはテーブルにはなく、頭に下ろされている最中である。',
        '正解。ヘルメットを被っている最中の動作。',
        '手袋についての記述はない。',
        '上司に手渡している描写はない。'],
    ja: [
      '(A) ヘルメットが近くのテーブルに置かれている。',
      '(B) 作業員がヘルメットを被っているところだ。',
      '(C) 作業員が安全手袋を外している。',
      '(D) ヘルメットが上司に手渡されているところだ。',
    ],
    v: [['brim', 'つば'], ['dangle', '垂れ下がる']],
  }),

  p1('p1d-19', {
    lv: 5, sp: sp(2),
    desc: 'Two cyclists pause at a crossing. One has a helmet strapped on; the other holds a helmet loosely at his side.',
    c: [
      'Both cyclists are putting on helmets.',
      'A cyclist is repairing a bicycle helmet.',
      'One cyclist is wearing a helmet.',
      'A helmet has fallen onto the pavement.',
    ],
    a: 2,
    e: '二人の状態が異なる点に注意が必要。片方はすでにヘルメットを固定した状態（is wearing）だが、もう片方は手に持っているだけで着用の動作をしているわけではない。両者を混同すると誤る。',
    w: ['ヘルメットを被る動作をしている人物はいない。片方はすでに被り、片方は手に持っているだけ。',
        'ヘルメットを修理している描写はない。',
        '正解。二人のうち一人だけがヘルメットを身につけている。',
        'ヘルメットは手に持たれており、落下してはいない。'],
    ja: [
      '(A) 自転車利用者が二人ともヘルメットを被っているところだ。',
      '(B) 自転車利用者が自転車用ヘルメットを修理している。',
      '(C) 一人の自転車利用者がヘルメットを被っている。',
      '(D) ヘルメットが路面に落ちている。',
    ],
    v: [['strapped on', 'ベルトで固定された'], ['loosely', '緩く']],
  }),

  p1('p1d-20', {
    lv: 5, sp: sp(3),
    desc: 'At a poolside, one swimmer already floats in the water while another stands at the edge, pulling a cap snugly over her hair.',
    c: [
      'Two swimmers are diving into a pool together.',
      'A swimmer is drying her hair with a towel.',
      'A swimmer has already removed her cap.',
      'A swimmer is putting on a cap at poolside.',
    ],
    a: 3,
    e: '二人の人物のうち、水中にいる一人と、プールサイドで帽子をかぶっている最中の一人を区別する必要がある。帽子を髪にかぶせている最中の動作を is putting on で表す。',
    w: ['一緒に飛び込んでいる描写はない。片方はすでに水中にいる。',
        'タオルについての記述はない。',
        '帽子はこれから被るところで、脱いだ描写ではない。',
        '正解。プールサイドで帽子を被っている最中の動作。'],
    ja: [
      '(A) 二人の泳いでいる人が一緒にプールに飛び込んでいる。',
      '(B) 泳いでいる人がタオルで髪を乾かしている。',
      '(C) 泳いでいる人がすでに帽子を脱いでいる。',
      '(D) 泳いでいる人がプールサイドで帽子を被っているところだ。',
    ],
    v: [['float', '浮かぶ'], ['snugly', 'ぴったりと']],
  }),

  p1('p1d-21', {
    lv: 5, sp: sp(4),
    desc: 'Behind a reception desk, a woman has a name badge clipped to her blazer. In front of the desk, a visitor signs a paper form.',
    c: [
      'A receptionist is wearing a badge on her blazer.',
      'A visitor is pinning a badge to his shirt.',
      'A form is being handed across a desk.',
      'A woman is removing a blazer behind a desk.',
    ],
    a: 0,
    e: '受付の女性と来訪者、二人の人物と位置関係（受付の奥／手前）を同時に押さえる必要がある。名札はすでに留められた状態のため is wearing が正解で、来訪者側の動作と混同しないこと。',
    w: ['正解。受付の女性がすでに名札をブレザーに付けている状態。',
        'バッジを付けているのは来訪者ではなく受付の女性である。',
        '書類が手渡されている描写はない。来訪者が自分で記入している。',
        'ブレザーを脱いでいる描写はない。'],
    ja: [
      '(A) 受付係がブレザーに名札を付けている。',
      '(B) 来訪者がバッジをシャツに留めている。',
      '(C) 受付の向こうへ書類が手渡されているところだ。',
      '(D) 女性が受付の奥でブレザーを脱いでいる。',
    ],
    v: [['badge', '名札、バッジ'], ['blazer', 'ブレザー']],
  }),

  /* ══ There is / There are（存在・数量）══════════════════ */

  p1('p1d-22', {
    lv: 3, sp: sp(5),
    desc: "Half a dozen folded umbrellas sit upright in a metal stand beside a shop's glass doors. The doorway behind them is empty.",
    c: [
      'A shopkeeper is opening an umbrella by the door.',
      'There are several umbrellas in a rack by the entrance.',
      'An entrance is being decorated with lights.',
      'A rack is being carried into a shop.',
    ],
    a: 1,
    e: '傘の存在と数量を there are で述べる問題。開けている人物や装飾している人物についての記述はなく、単に置かれている状態を述べた選択肢が正解。',
    w: ['傘を開いている店員についての記述はない。',
        '正解。傘立てに複数の傘が入っている状態。',
        '照明で飾られている描写はない。',
        '傘立てを運んでいる人物についての記述はない。'],
    ja: [
      '(A) 店員がドアのそばで傘を開いている。',
      '(B) 入口の傘立てに複数の傘がある。',
      '(C) 入口が照明で飾り付けられているところだ。',
      '(D) 傘立てが店内に運び込まれているところだ。',
    ],
    v: [['rack', '（傘・棚などの）ラック'], ['upright', '直立して']],
  }),

  p1('p1d-23', {
    lv: 3, sp: sp(6),
    desc: 'A narrow walkway for pedestrians arches over a quiet waterway. The water beneath is still, and no one is crossing at the moment.',
    c: [
      'A boat is passing beneath the bridge.',
      'A bridge is being repainted along its rails.',
      'There is a footbridge over the canal.',
      'Workers are repairing a section of the bridge.',
    ],
    a: 2,
    e: '橋の存在を there is で述べる問題。「誰も渡っていない」「水面は静か」と明記されており、船やペンキ塗り、補修工事をしている人物は描写にいない。',
    w: ['水面は静かであり、通過している船についての記述はない。',
        '塗装をしている人物についての記述はない。',
        '正解。運河に歩道橋が架かっている。',
        '補修作業をしている作業員についての記述はない。'],
    ja: [
      '(A) 船が橋の下を通り過ぎている。',
      '(B) 橋の欄干沿いが塗り直されているところだ。',
      '(C) 運河に歩道橋が架かっている。',
      '(D) 作業員たちが橋の一部を補修している。',
    ],
    v: [['footbridge', '歩道橋'], ['canal', '運河']],
  }),

  p1('p1d-24', {
    lv: 3, sp: sp(7),
    desc: 'A line of small plants in clay pots sits along a sunny ledge beneath a window. Their leaves lean slightly toward the glass.',
    c: [
      'A worker is watering plants on a windowsill.',
      'Plants are being moved away from a window.',
      'A windowsill is being cleaned with a cloth.',
      'There are several potted plants on a windowsill.',
    ],
    a: 3,
    e: '植木鉢の存在を there are で述べる問題。水やり・移動・清掃のいずれも行っている人物は描写に存在しない。',
    w: ['水やりをしている人物についての記述はない。',
        '植木鉢は窓辺に並んだままで、移動されている描写はない。',
        '窓辺を拭いている人物についての記述はない。',
        '正解。窓辺に複数の植木鉢がある。'],
    ja: [
      '(A) 作業員が窓辺の植物に水をやっている。',
      '(B) 植物が窓から遠ざけられているところだ。',
      '(C) 窓辺が布で拭かれているところだ。',
      '(D) 窓辺に複数の植木鉢がある。',
    ],
    v: [['windowsill', '窓辺、窓台'], ['lean', '傾く']],
  }),

  p1('p1d-25', {
    lv: 3, sp: sp(0),
    desc: 'A line of rental bicycles stands locked into a metal rack at the edge of the street. No one is nearby.',
    c: [
      'There are bicycles docked along the curb.',
      'A rider is unlocking a bicycle from a station.',
      'A docking station is being installed by workers.',
      'Bicycles are being loaded onto a truck.',
    ],
    a: 0,
    e: '「近くに誰もいない」と明記されている。自転車が停められている状態を there are で述べた選択肢が正解で、鍵を外す・設置する・積み込むといった動作の主体はいずれもいない。',
    w: ['正解。歩道沿いのラックに自転車が停められている。',
        '近くには誰もいないため、鍵を外している人物はいない。',
        'ステーションを設置している作業員についての記述はない。',
        'トラックに積み込んでいる人物についての記述はない。'],
    ja: [
      '(A) 縁石沿いに停められた自転車がある。',
      '(B) 利用者がステーションで自転車の鍵を外している。',
      '(C) 作業員たちによって貸出ステーションが設置されているところだ。',
      '(D) 自転車がトラックに積み込まれているところだ。',
    ],
    v: [['docking station', '（自転車の）貸出ステーション'], ['curb', '縁石']],
  }),

  p1('p1d-26', {
    lv: 4, sp: sp(1),
    desc: 'On the counter, a wide dish piled with apples and pears sits beside a cutting board and a knife block. In the background, someone rinses a plate at the sink.',
    c: [
      'A person is slicing fruit on a cutting board.',
      'There is a bowl of fruit on the counter.',
      'Dishes are being dried with a towel.',
      'A knife block is being restocked with knives.',
    ],
    a: 1,
    e: '手前の物の配置（果物・まな板・ナイフスタンド）と、奥の人物の動作（皿をすすぐ）を混同しないこと。まな板の上で切っている様子はなく、単に置かれている状態。',
    w: ['まな板の上で果物を切っている描写はない。まな板は置かれているだけ。',
        '正解。カウンターに果物の入ったボウルがある。',
        '奥の人物は皿をすすいでいるのであり、拭いてはいない。',
        'ナイフを補充している人物についての記述はない。'],
    ja: [
      '(A) 人がまな板の上で果物を切っている。',
      '(B) カウンターに果物の入ったボウルがある。',
      '(C) 皿がタオルで拭かれているところだ。',
      '(D) ナイフスタンドにナイフが補充されているところだ。',
    ],
    v: [['cutting board', 'まな板'], ['rinse', 'すすぐ']],
  }),

  p1('p1d-27', {
    lv: 4, sp: sp(2),
    desc: 'Vehicles fill most of the bays on this level of the garage. Beside one pillar, a single bay stands vacant, with a small sign posted at its entrance.',
    c: [
      'A car is pulling into an empty space.',
      'Cars are being driven out of a garage.',
      'There is an empty space marked by a sign.',
      'A sign is being attached to a pillar.',
    ],
    a: 2,
    e: '多くの区画が車で埋まっている中、柱のそばの一区画だけが空いているという細部を正確に捉える必要がある。標識はすでに設置された状態であり、取り付けている最中ではない。',
    w: ['その空いている区画に車が入ってくる動作は描写されていない。',
        '車が出ていく動作についての記述はない。',
        '正解。標識のある空いた区画が一つある。',
        '標識はすでに設置された状態であり、取り付けている最中ではない。'],
    ja: [
      '(A) 車が空いた区画に入っていくところだ。',
      '(B) 車が駐車場から運転して出されているところだ。',
      '(C) 標識のある空いた区画が一つある。',
      '(D) 標識が柱に取り付けられているところだ。',
    ],
    v: [['pillar', '柱'], ['garage', '駐車場（立体）']],
  }),

  /* ══ 位置の前置詞（behind / in front of / across from / alongside）══ */

  p1('p1d-28', {
    lv: 3, sp: sp(3),
    desc: 'In the foreground, a single car is parked near the entrance of a lot. Farther back, directly in line with it, a bicycle leans against a fence.',
    c: [
      'A bicycle is parked in front of a car.',
      'A car is parked across from a bicycle.',
      'A bicycle is parked alongside a car.',
      'A bicycle is parked behind a car.',
    ],
    a: 3,
    e: '手前に車があり、その奥に一直線に自転車がある。見る側から遠い方が behind、手前が in front of なので、自転車は車の後ろ（behind）という位置関係になる。',
    w: ['自転車は車より奥にあり、手前ではない。',
        '向かい合う位置関係についての記述はない。',
        '横に並んでいるのではなく、前後の位置関係にある。',
        '正解。自転車は車の後方（奥）にある。'],
    ja: [
      '(A) 自転車が車の前に停められている。',
      '(B) 車が自転車の向かいに停められている。',
      '(C) 自転車が車と並んで停められている。',
      '(D) 自転車が車の後ろに停められている。',
    ],
    v: [['lean against', '〜に立てかかる'], ['fence', 'フェンス']],
  }),

  p1('p1d-29', {
    lv: 3, sp: sp(4),
    desc: "A stone fountain stands at the center of the plaza between the street and the building's main doors. Pigeons gather near its base.",
    c: [
      'A fountain stands in front of a building.',
      'A fountain stands behind a building.',
      'A fountain stands alongside a street.',
      'A statue stands across from a fountain.',
    ],
    a: 0,
    e: '噴水は通りと建物の正面玄関の間にある＝建物の手前（in front of）の位置関係。奥（behind）や横並び（alongside）とは異なる。',
    w: ['正解。噴水は建物の正面（手前）にある。',
        '噴水は建物の奥ではなく手前にある。',
        '噴水は広場の中央にあり、通りに沿って並んでいるわけではない。',
        '像についての記述はない。'],
    ja: [
      '(A) 噴水が建物の前にある。',
      '(B) 噴水が建物の裏にある。',
      '(C) 噴水が通り沿いに立っている。',
      '(D) 像が噴水の向かいにある。',
    ],
    v: [['plaza', '広場'], ['pigeon', 'ハト']],
  }),

  p1('p1d-30', {
    lv: 3, sp: sp(5),
    desc: "A bakery's awning stretches over the sidewalk on one side of a narrow street. A bookstore's entrance faces it from the opposite side.",
    c: [
      'A bakery is located behind a bookstore.',
      'A bookstore is located across from a bakery.',
      'A bookstore is located alongside a bakery.',
      "A bakery's awning is being taken down.",
    ],
    a: 1,
    e: '通りの両側で向かい合っている店同士の位置関係は across from（〜の向かいに）で表す。同じ側に並ぶ alongside や、奥にある behind とは異なる。',
    w: ['奥にあるのではなく、通りを挟んで向かい合っている。',
        '正解。書店はパン屋の向かいにある。',
        '同じ側に並んでいるのではなく、向かい合っている。',
        '日よけを取り外している人物についての記述はない。'],
    ja: [
      '(A) パン屋が書店の裏にある。',
      '(B) 書店がパン屋の向かいにある。',
      '(C) 書店がパン屋と並んでいる。',
      '(D) パン屋の日よけが取り外されているところだ。',
    ],
    v: [['awning', '日よけ、オーニング'], ['face', '面する']],
  }),

  p1('p1d-31', {
    lv: 4, sp: sp(6),
    desc: 'On a shared path, a jogger moves at the same pace as a cyclist just to her right. Trees line both edges of the path.',
    c: [
      'A jogger is running in front of a cyclist.',
      'A cyclist is stopped behind a jogger.',
      'A jogger is running alongside a cyclist.',
      'A jogger and a cyclist are facing each other.',
    ],
    a: 2,
    e: '同じペースで、右側にぴったり並んで進んでいる位置関係は alongside（〜と並んで）で表す。前後関係（in front of / behind）や向かい合う関係（facing）とは異なる。',
    w: ['前後に並んでいるのではなく、横に並んでいる。',
        '自転車利用者は止まっておらず、同じペースで進んでいる。',
        '正解。ジョガーが自転車利用者と横に並んで走っている。',
        '向かい合ってはおらず、同じ方向に進んでいる。'],
    ja: [
      '(A) ジョガーが自転車利用者の前を走っている。',
      '(B) 自転車利用者がジョガーの後ろで止まっている。',
      '(C) ジョガーが自転車利用者と並んで走っている。',
      '(D) ジョガーと自転車利用者が向かい合っている。',
    ],
    v: [['pace', 'ペース'], ['line', '（並木のように）並ぶ']],
  }),

  p1('p1d-32', {
    lv: 4, sp: sp(7),
    desc: "A printer sits on a low cabinet. A stack of paper reams rests on the floor at the cabinet's rear, hidden from view of the desk.",
    c: [
      'Paper reams are stacked in front of a cabinet.',
      'A printer is placed beside a stack of paper.',
      'A cabinet is positioned across from a printer.',
      'Paper reams are stacked behind a cabinet.',
    ],
    a: 3,
    e: '紙は「キャビネットの奥」＝手前から見て隠れる位置にあるため、behind（〜の後ろに）の位置関係になる。手前（in front of）や横（beside）ではない点に注意。',
    w: ['紙はキャビネットの手前ではなく奥にある。',
        'プリンターはキャビネットの上に置かれており、紙の横にあるわけではない。',
        'キャビネットとプリンターは向かい合ってはいない。同じ場所にある。',
        '正解。紙の束はキャビネットの後ろに積まれている。'],
    ja: [
      '(A) 用紙の束がキャビネットの手前に積まれている。',
      '(B) プリンターが紙の束の横に置かれている。',
      '(C) キャビネットがプリンターの向かいに置かれている。',
      '(D) 用紙の束がキャビネットの後ろに積まれている。',
    ],
    v: [['ream', '（紙の）連、束'], ['rear', '後部、奥']],
  }),

  p1('p1d-33', {
    lv: 4, sp: sp(0),
    desc: 'A small boat is tied up in the slip directly ahead of the entrance ramp. A larger vessel is moored farther down the pier, well away from the smaller one.',
    c: [
      'A small boat is moored in front of a ramp.',
      'A small boat is moored behind a larger vessel.',
      'Two boats are moored side by side at the same spot.',
      'A vessel is being untied from the dock.',
    ],
    a: 0,
    e: '小型ボートは入口のスロープの真正面の停泊枠に係留されている＝スロープの手前（in front of）。大型船は桟橋のずっと先にあり小型ボートとは離れているため、後ろ（behind）や横並び（side by side）の関係ではない。',
    w: ['正解。小型ボートはスロープの手前に係留されている。',
        '大型船とは離れた位置にあり、その後ろではない。',
        '同じ場所ではなく、それぞれ別の位置に係留されている。',
        '解いている描写はない。両方とも係留されたままである。'],
    ja: [
      '(A) 小型ボートがスロープの手前に係留されている。',
      '(B) 小型ボートが大型船の後ろに係留されている。',
      '(C) 二隻のボートが同じ場所に並んで係留されている。',
      '(D) 船のもやい綱が桟橋から解かれているところだ。',
    ],
    v: [['moor', '係留する'], ['pier', '桟橋']],
  }),

  p1('p1d-34', {
    lv: 5, sp: sp(1),
    desc: 'A clock tower rises on one side of the square. On the opposite side, a bank entrance stands where a guard waits near the doors.',
    c: [
      'A guard stands behind a clock tower.',
      'A bank stands across from a clock tower.',
      'A clock tower stands alongside a bank.',
      "A guard is unlocking the bank's doors.",
    ],
    a: 1,
    e: '広場の両側にある二つの建物の位置関係（across from）と、警備員という人物の存在を同時に押さえる必要がある。警備員は塔の後ろにいるのではなく、広場の反対側の銀行のそばにいる。',
    w: ['警備員は時計塔の裏にいるのではなく、広場の反対側の銀行のそばにいる。',
        '正解。銀行は時計塔の向かいにある。',
        '横並びではなく、広場を挟んで向かい合っている。',
        '扉の鍵を開けている描写はなく、そばで待っているだけである。'],
    ja: [
      '(A) 警備員が時計塔の裏に立っている。',
      '(B) 銀行が時計塔の向かいにある。',
      '(C) 時計塔が銀行と並んでいる。',
      '(D) 警備員が銀行の扉の鍵を開けている。',
    ],
    v: [['square', '広場'], ['opposite', '反対の']],
  }),

  /* ══ 抽象動詞（inspect / examine / adjust / browse / handle）═══ */

  p1('p1d-35', {
    lv: 4, sp: sp(2),
    desc: 'A worker holds a metal part close to an overhead light, turning it slowly and studying its surface for flaws.',
    c: [
      'A worker is assembling several metal parts.',
      'A part is being placed into a machine.',
      'A worker is inspecting a metal part.',
      'A worker is polishing a part with a cloth.',
    ],
    a: 2,
    e: '部品を光にかざしてゆっくり回しながら表面を確認している動作は「点検する」= inspect で表す。組み立てや機械への設置、布での磨きとは異なる動作。',
    w: ['部品は一つだけで、複数を組み立てている描写はない。',
        '機械に部品を入れている描写はない。',
        '正解。部品を光にかざして点検している最中である。',
        '布で磨いている描写はない。'],
    ja: [
      '(A) 作業員が複数の金属部品を組み立てている。',
      '(B) 部品が機械に入れられているところだ。',
      '(C) 作業員が金属部品を点検している。',
      '(D) 作業員が布で部品を磨いている。',
    ],
    v: [['flaw', '欠陥、傷'], ['overhead light', '頭上の照明']],
  }),

  p1('p1d-36', {
    lv: 4, sp: sp(3),
    desc: 'A veterinarian holds an X-ray up against a lit panel, leaning close to study the shadowy image on the film.',
    c: [
      'An X-ray is being printed from a machine.',
      'A veterinarian is filing paperwork at a desk.',
      'A lit panel is being mounted on a wall.',
      'A veterinarian is examining an X-ray.',
    ],
    a: 3,
    e: 'X線写真をライトパネルにかざして顔を近づけ、画像をじっくり見ている動作は「詳しく調べる」= examine で表す。印刷や書類仕事、パネルの取り付けとは異なる動作。',
    w: ['印刷している機械についての記述はない。',
        '書類仕事をしている描写はない。X線を見ている最中である。',
        'パネルはすでに点灯しており、取り付けている最中ではない。',
        '正解。獣医がX線写真を詳しく調べている最中である。'],
    ja: [
      '(A) X線写真が機械から印刷されているところだ。',
      '(B) 獣医が机で書類を整理している。',
      '(C) 照明パネルが壁に取り付けられているところだ。',
      '(D) 獣医がX線写真を詳しく調べている。',
    ],
    v: [['veterinarian', '獣医'], ['lit panel', '（X線を見るための）照明パネル']],
  }),

  p1('p1d-37', {
    lv: 5, sp: sp(4),
    desc: 'A technician turns a dial on a large sound console. A colleague sits in a nearby chair, watching, a pair of headphones resting around his own neck.',
    c: [
      'A technician is adjusting a sound console.',
      'A colleague is putting on a pair of headphones.',
      'Two technicians are carrying equipment together.',
      "A sound console is being unplugged from its cables.",
    ],
    a: 0,
    e: '二人の人物のうち、実際に手を動かしているのはダイヤルを回している技術者だけで、同僚はヘッドホンを首にかけたまま座って見ているだけ。誰が何をしているかを正確に対応させる必要がある。',
    w: ['正解。技術者が音響コンソールのダイヤルを調整している最中である。',
        'ヘッドホンはすでに首にかかっているだけで、装着している動作ではない。',
        '技術者は一人だけで、機材を運んでいる描写もない。',
        'コンソールはケーブルを抜かれてはおらず、使用中である。'],
    ja: [
      '(A) 技術者が音響コンソールを調整している。',
      '(B) 同僚がヘッドホンを着けているところだ。',
      '(C) 二人の技術者が一緒に機材を運んでいる。',
      '(D) 音響コンソールがケーブルから外されているところだ。',
    ],
    v: [['dial', 'ダイヤル'], ['console', '操作卓、コンソール']],
  }),

  p1('p1d-38', {
    lv: 5, sp: sp(5),
    desc: 'In an aisle, a shopper tilts her head to read the spines of books on a shelf. Behind her, a clerk restocks a lower shelf.',
    c: [
      'A clerk is browsing books in an aisle.',
      'A shopper is browsing books on a shelf.',
      'A shopper is restocking a lower shelf.',
      'A clerk is standing in front of a shopper.',
    ],
    a: 1,
    e: '二人の人物（客と店員）それぞれの動作と、二人の前後関係を同時に正確に押さえる必要がある。本の背表紙を読んでいるのは客であり、店員はその後ろで棚を補充している。',
    w: ['本を眺めているのは店員ではなく客である。',
        '正解。客が棚の本を眺めている最中である。',
        '棚を補充しているのは客ではなく店員である。',
        '店員は客の後ろにおり、手前にはいない。'],
    ja: [
      '(A) 店員が通路で本を眺めている。',
      '(B) 客が棚の本を眺めている。',
      '(C) 客が下段の棚を補充している。',
      '(D) 店員が客の前に立っている。',
    ],
    v: [['spine', '（本の）背'], ['restock', '補充する']],
  }),

  p1('p1d-39', {
    lv: 5, sp: sp(6),
    desc: 'A worker lifts a crate marked with a fragile symbol, cradling it with both arms while a second crate rests on a pallet behind him.',
    c: [
      'A worker is stacking two crates evenly.',
      'A crate is being loaded onto a shelf.',
      'A worker is carefully handling a marked crate.',
      'A crate has been left open on the floor.',
    ],
    a: 2,
    e: '二つの木箱のうち、両腕で抱えられている一つと、後ろで待機している一つを区別する必要がある。両腕で抱えて丁寧に扱っている動作は handle で表す。',
    w: ['積み重ねている描写ではなく、一つを両腕で抱えている。',
        '棚についての記述はない。',
        '正解。印のついた木箱を両腕で慎重に扱っている最中である。',
        '木箱が開けられて床に置かれている描写はない。'],
    ja: [
      '(A) 作業員が二つの木箱を均等に積み重ねている。',
      '(B) 木箱が棚に積み込まれているところだ。',
      '(C) 作業員が印のついた木箱を慎重に扱っている。',
      '(D) 木箱が床に開けられたままになっている。',
    ],
    v: [['crate', '木箱'], ['cradle', '（腕で）抱える']],
  }),

  p1('p1d-40', {
    lv: 5, sp: sp(7),
    desc: 'At a market stall, a customer picks up a melon and turns it over, while the vendor arranges other melons into a pyramid nearby.',
    c: [
      'A vendor is inspecting a piece of fruit.',
      'A customer is arranging fruit into a pyramid.',
      'A melon is being weighed on a scale.',
      'A customer is inspecting a piece of fruit.',
    ],
    a: 3,
    e: '客と店主、それぞれの動作を入れ替えないことが鍵になる。手に取って裏返して見ているのは客であり、店主は別のメロンを積み上げているだけ。',
    w: ['メロンを手に取って調べているのは店主ではなく客である。',
        'ピラミッド状に積んでいるのは客ではなく店主である。',
        'はかりについての記述はない。',
        '正解。客がメロンを手に取って調べている最中である。'],
    ja: [
      '(A) 店主が果物を調べている。',
      '(B) 客が果物をピラミッド状に積んでいる。',
      '(C) メロンがはかりで計量されているところだ。',
      '(D) 客が果物を調べている。',
    ],
    v: [['stall', '露店、屋台'], ['pyramid', 'ピラミッド状の山積み']],
  }),

];
