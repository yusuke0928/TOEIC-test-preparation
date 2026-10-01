/* =============================================================
   予想模試 Vol.5 — Part 3 後半（No.53–70）
   総仕上げ回。
   ============================================================= */

/* `qid` は設問 id の明示指定。中身を差し替えた設問は SRS の履歴を引き継がせないため、
   通し番号由来の既定 id ではなく新しい id（v5qNNp）を与える（`no` は絶対に変えない）。 */
const set = (o) => ({
  id: `v5-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v5q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2B = [

  /* ── 53–55 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     図表。男性の希望は「角で折れ曲がる作業台」と「高い位置から出る音」。男性が編集室を取るのは自分の作業のため。 */
  set({
    n: [53,54,55], lv: 4, t: ["graphic"],
    graphic: {"t":"table","title":"Editing Suites","head":["Suite","Desk Shape","Speakers"],"rows":[["Suite 10","L-shaped","Ceiling"],["Suite 7","Straight","Floor"],["Suite 3","L-shaped","Floor"],["Suite 11","Straight","Ceiling"]]},
    s: [
      { role: "M-Au", text: "Morning. I'm going to book an editing room for the afternoon, because I've got a ten-minute corporate video to colour-grade. I find it easier with a table that bends round the corner." },
      { role: "W-Cn", text: "Sounds sensible. Are there any free?" },
      { role: "M-Au", text: "Two are. And I'd rather have the sound coming from fixtures high up overhead, so I'll take the one that has both." },
      { role: "W-Cn", text: "Good luck. I'm stuck here all day. I have to finish a first, unpolished version of the whole fishing-village documentary before I leave tonight." },
      { role: "M-Au", text: "Then I'll head out to the café before I start. I can get you something to eat while I'm there." },
      { role: "W-Cn", text: "Oh, thanks. A sandwich would be great." },
    ],
    ja: "映像編集スタジオの同僚2人が、編集室の予約と今日の仕事について話す。男性は午後、10分の企業向け動画の色調整をするために編集室を取る。角を曲がるように折れ曲がった作業台のあるものがよく、音も高い位置の機器から出るものがよいと言って、その両方を備えた1室を選ぶ。女性は、漁村を扱ったドキュメンタリー全編の、仕上げ前の最初の版を今夜帰る前に終えなければならないと言い、男性は、カフェへ行くついでに食べるものを買ってくると申し出る。女性は礼を言い、サンドイッチを頼む。",
    v: [["colour-grade","色調整をする"],["unpolished","仕上げ前の"],["overhead","頭上の"],["fixture","備え付けの機器"]],
    q: [
      { tag: "図表", qid: 'v5q53p', s: "Look at the graphic. Which suite will the man reserve?",
        c: ["Suite 10","Suite 7","Suite 3","Suite 11"],
        a: 0,
        e: "男性は、角で折れ曲がる作業台（表の L-shaped）と、高い位置の機器から音が出ること（表の Ceiling）の両方を挙げている。表で L-shaped かつ Ceiling の行は Suite 10 だけである。",
        w: ["正解。","Suite 7 は Straight で Floor の行。男性が挙げた2つの条件のどちらにも合わない。","Suite 3 は L-shaped で作業台は合うが、Floor で、高い位置から音が出るという条件に合わない。","Suite 11 は Ceiling で音は合うが、Straight で、角で折れ曲がる作業台という条件に合わない。"] },
      { tag: "詳細", qid: 'v5q54p', t: ["p3detail"], s: "What does the woman say she needs to finish before the end of the day?",
        c: ["A rough cut of a documentary","A set of subtitles","A short animated logo","A reel of sample clips"],
        a: 0,
        e: "女性は `I have to finish a first, unpolished version of the whole fishing-village documentary before I leave tonight.` と述べている。作品全体の、仕上げ前の最初の版、つまり粗編集である。",
        w: ["正解。","字幕の作成は、会話のどこにも出てこない。","短いアニメーションのロゴは、会話のどこにも出てこない。","見本の映像集は、会話のどこにも出てこない。"] },
      { tag: "詳細", qid: 'v5q55p', t: ["p3detail"], s: "What does the man offer to do?",
        c: ["Pick up some lunch for her","Lend her a spare laptop","Give her a lift home","Show her a software shortcut"],
        a: 0,
        e: "男性は `I can get you something to eat while I'm there.` と、昼に食べるものを買ってくると申し出ている。",
        w: ["正解。","予備のノートパソコンを貸すという申し出は、会話のどこにも出てこない。","家まで車で送るという申し出は、会話のどこにも出てこない。","ソフトの近道の操作を教えるという申し出は、会話のどこにも出てこない。"] },
    ],
  }),

  /* ── 56–58 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     Q56=スマートフォン向けアプリの開発。Q57 の直前の女性の発言は「講演者が見つからない」のみ（案は出さない）。Q58=学生向けの知らせを書く。 */
  set({
    n: [56,57,58], lv: 4,
    s: [
      { role: "W-Br", text: "Did the request from that company come in? Remind me what they do." },
      { role: "M-Au", text: "It did. They build apps for smartphones, and they'd like us to put their graduate vacancy on the jobs board." },
      { role: "W-Br", text: "That's fine. Go ahead and list it." },
      { role: "M-Au", text: "Will do." },
      { role: "W-Br", text: "Now, while employers are on my mind, I still haven't found anyone to speak at the careers evening next month, and the programme goes to print on Friday." },
      { role: "M-Au", text: "They hired two of our graduates last year." },
      { role: "W-Br", text: "That's true. I'll mention the evening when I write back to confirm the listing." },
      { role: "M-Au", text: "Good. In the meantime, I'll put together a short notice for students about the opening, so it can go out in this afternoon's newsletter." },
    ],
    ja: "大学の就職支援課で、課長の女性と男性職員が、ある企業からの求人掲載の依頼について話す。男性によれば、その会社はスマートフォン向けのアプリを作っており、新卒者向けの求人を就職掲示板に載せたいという。女性は掲載を認め、男性が応じる。続けて女性が、来月のキャリアの夕べの講演者がまだ見つからず、プログラムが金曜に印刷に回ると述べると、男性は、その会社は昨年この大学の卒業生を2人採用したと言う。女性は、掲載の返事を書くときにその夕べにも触れると答える。男性は、学生向けに求人の知らせを短く書き、今日の午後のニュースレターに載せられるようにすると言う。",
    v: [["vacancy","求人"],["listing","掲載"],["jobs board","求人掲示板"],["goes to print","印刷に回る"]],
    q: [
      { tag: "詳細", qid: 'v5q56p', s: "What does the man say the company does?",
        c: ["It designs bridges and roads","It runs a chain of hotels","It carries out market research","It develops mobile software"],
        a: 3,
        e: "男性は `They build apps for smartphones` と、その会社の事業を説明している。",
        w: ["橋や道路の設計は、会話のどこにも出てこない。","ホテルチェーンの運営は、会話のどこにも出てこない。","市場調査の実施は、会話のどこにも出てこない。","正解。"] },
      { tag: "意図", qid: 'v5q57p', t: ["p3int"], s: "Why does the man say, \"They hired two of our graduates last year\"?",
        c: ["To object to refusing a request","To explain a firm's partner status","To propose a guest speaker","To agree with a colleague's idea"],
        a: 2,
        e: "直前に女性が `I still haven't found anyone to speak at the careers evening next month` と、夕べの講演者が見つからないことを述べている。そこで男性が、その会社は昨年この大学の卒業生を2人採用したと挙げるのは、その会社に講演を頼んではどうかという提案である。女性も `I'll mention the evening when I write back` と応じている。",
        w: ["女性は掲載を `Go ahead and list it.` と認めており、断る話は会話に出てこない。","提携先（partner）の扱いは会話のどこにも出てこない。直前の女性の発言も、その扱いについての質問ではない。","正解。","直前の女性の発言は講演者が見つからないという困りごとで、案ではない。掲載を認める `Go ahead and list it.` には男性がすでに `Will do.` と答えており、引用はそれへの賛成ではない。"] },
      { tag: "次の行動", qid: 'v5q58p', s: "What will the man most likely do next?",
        c: ["Call the company's office","Book a meeting room","Search the alumni records","Draft a message to students"],
        a: 3,
        e: "男性は最後に `I'll put together a short notice for students about the opening, so it can go out in this afternoon's newsletter.` と述べている。",
        w: ["会社に電話をするという話は、会話のどこにも出てこない。会社への返事を書くのは女性である。","会議室を予約するという話は、会話のどこにも出てこない。","卒業生の名簿を調べるという話は、会話のどこにも出てこない。","正解。"] },
    ],
  }),

  /* ── 59–61 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     Q59=治療用ベッドのみ。Q60=その年数（6年）のみ男性が言う。Q61=最初の患者は7時45分。 */
  set({
    n: [59,60,61], lv: 3,
    s: [
      { role: "M-Br", text: "Good morning. I'm from Bosleigh Medical Services, here for the annual equipment check. Where would you like me to begin?" },
      { role: "W-Au", text: "Thanks for coming. Could you look at the patient bed in room two first? The motor that raises it has started to stick." },
      { role: "M-Br", text: "Of course. I've got the service history for your equipment here, and it shows the bed was made six years ago, so the motor should still have plenty of life in it." },
      { role: "W-Au", text: "I hope so. How long will you need? Our first patients arrive at a quarter to eight, and I'd like the room back by then." },
      { role: "M-Br", text: "An hour should be enough if I start now." },
      { role: "W-Au", text: "Wonderful, thank you." },
    ],
    ja: "医療機器の保守会社の技術者が診療所を訪ね、事務長の女性と、点検する機器について話す。女性は、まず2号室の患者用ベッドを見てほしいと頼む。上げ下げするモーターの動きが悪くなってきたという。男性は手元の点検記録を見て、6年前に製造されたものなので、モーターにはまだ余裕があるはずだと言う。女性は、最初の患者が7時45分に来るので、それまでに部屋を使えるようにしてほしいと言い、男性は今始めれば1時間で足りると答える。",
    v: [["annual","毎年の"],["patient bed","患者用ベッド"],["stick","（動きが）引っかかる"],["service history","点検・整備の記録"]],
    q: [
      { tag: "詳細", qid: 'v5q59p', s: "What does the woman ask the man to look at?",
        c: ["A blood pressure monitor","A sterilizing unit","A treatment couch","A set of weighing scales"],
        a: 2,
        e: "女性は `Could you look at the patient bed in room two first?` と頼んでいる。",
        w: ["血圧計を見てほしいという依頼は、会話のどこにも出てこない。","滅菌装置を見てほしいという依頼は、会話のどこにも出てこない。","正解。","体重計を見てほしいという依頼は、会話のどこにも出てこない。"] },
      { tag: "詳細", qid: 'v5q60p', s: "How old does the man say the equipment is?",
        c: ["About six years old","About ten years old","About fifteen years old","About twenty years old"],
        a: 0,
        e: "男性は手元の点検記録を見て `it shows the bed was made six years ago` と述べている。",
        w: ["正解。","男性が挙げる年数は6年だけで、10年前後という話は会話のどこにも出てこない。","男性が挙げる年数は6年だけで、15年前後という話は会話のどこにも出てこない。","男性が挙げる年数は6年だけで、20年前後という話は会話のどこにも出てこない。"] },
      { tag: "詳細", qid: 'v5q61p', s: "According to the woman, when do the first patients arrive?",
        c: ["At seven forty-five","At eight thirty","At nine fifteen","At ten o'clock"],
        a: 0,
        e: "女性は `Our first patients arrive at a quarter to eight` と述べている。7時45分である。",
        w: ["正解。","8時30分という時刻は、会話のどこにも出てこない。","9時15分という時刻は、会話のどこにも出てこない。","10時という時刻は、会話のどこにも出てこない。"] },
    ],
  }),

  /* ── 62–64 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     Q62=船会社がコンテナの所在を見失った。Q63 の直前の発言（M-Am）は延期の提案のみ。理由に見本・仕入先の遅れを使わない。見本が早く届いたことは引用で初めて出す。Q64=ビデオ会議に接続。 */
  set({
    n: [62,63,64], lv: 4, k: "conversation with three speakers",
    s: [
      { role: "W-Au", text: "Morning, both. First item: the shipping line has told me they've lost track of our container, the one carrying the dried fruit order for the spring range." },
      { role: "M-Br", text: "Lost track? How does a whole container just vanish?" },
      { role: "W-Au", text: "They say it went onto the wrong ship at the port, and they're still trying to trace it. I'll chase them again after lunch." },
      { role: "M-Am", text: "Half of us will be tied up with this for the rest of the week. Shall we push Thursday's tasting back to next week? We'd have more time to get ready for it." },
      { role: "M-Br", text: "The samples arrived a day early." },
      { role: "W-Au", text: "Right. We're due to meet the buyer online in two minutes, so let's all log on now." },
      { role: "M-Am", text: "Ready when you are." },
    ],
    ja: "食品輸出会社の会議で、女性1人と男性2人が今週の仕事について話す。女性は、船会社から、春の商品のドライフルーツの注文分を積んだコンテナの所在が分からなくなったと伝えられたと言う。港で別の船に載せられたらしく、いま追跡中で、昼食後にもう一度問い合わせるという。アメリカ人男性は、この件で今週いっぱいは半数の手が取られるので、木曜の試食会を来週に延ばして準備の時間を増やそうと提案する。イギリス人男性は、見本が1日早く届いたと言う。女性は、2分後にバイヤーとオンラインで会う予定なので、全員で接続しようと促し、男性が応じる。",
    v: [["shipping line","船会社"],["lost track of","所在が分からなくなった"],["trace","追跡する"],["tasting","試食会"],["sample","見本"]],
    q: [
      { tag: "詳細", qid: 'v5q62p', s: "What problem do the speakers discuss?",
        c: ["A customs check held up a shipment","A buyer asked for lower prices","A freight company lost a container","A translator missed a deadline"],
        a: 2,
        e: "冒頭で女性が `the shipping line has told me they've lost track of our container` と述べ、港で別の船に載せられたとして追跡中だと説明している。",
        w: ["税関の検査で荷が止まったという話は、会話のどこにも出てこない。","買い手が値下げを求めたという話は、会話のどこにも出てこない。","正解。","翻訳者が期限に遅れたという話は、会話のどこにも出てこない。"] },
      { tag: "意図", qid: 'v5q63p', t: ["p3int"], s: "Why does one of the men say, \"The samples arrived a day early\"?",
        c: ["To reject a proposed delay","To defend a supplier's record","To account for an extra charge","To ask colleagues for some help"],
        a: 0,
        e: "直前にアメリカ人男性が `Shall we push Thursday's tasting back to next week? We'd have more time to get ready for it.` と、準備の時間を増やすための延期を提案し、イギリス人男性が `The samples arrived a day early.` と言う。見本がすでに早く届いていて準備は進められる以上、延ばす必要はない、という反対である。",
        w: ["正解。","直前に仕入先を非難する発言はなく、仕入先の実績を擁護する場面ではない。","追加料金の話は、会話のどこにも出てこない。","手伝いを求める言葉は、会話のどこにも出てこない。"] },
      { tag: "次の行動", qid: 'v5q64p', s: "What will the speakers most likely do next?",
        c: ["Join a video call","Walk to the loading bay","Read through a contract","Look at a sales report"],
        a: 0,
        e: "最後に女性が `We're due to meet the buyer online in two minutes, so let's all log on now.` と促し、男性が応じている。",
        w: ["正解。","搬入口へ歩いていくという話は、会話のどこにも出てこない。","契約書を読み通すという話は、会話のどこにも出てこない。","売上報告を見るという話は、会話のどこにも出てこない。"] },
    ],
  }),

  /* ── 65–67 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     Q65=バスタオルのみ。Q66 の直前の女性の発言は「荷を数える人がいない心配」のみ（人の割り振りの案は出さない）。ブライオニーが倉庫にいることは引用で初めて出す。Q67=仕入先の写真を見る。 */
  set({
    n: [65,66,67], lv: 4,
    s: [
      { role: "W-Am", text: "The new product group going on the site next month is towels, the big bath kind, in six colors." },
      { role: "M-Br", text: "Good. We haven't sold anything like that before, so it should bring in some new customers. When do they arrive?" },
      { role: "W-Am", text: "Thursday, at the warehouse, about forty boxes of them. What worries me is who'll count the boxes against the order. I'm in meetings all day Thursday and Friday." },
      { role: "M-Br", text: "Bryony's at the warehouse this week." },
      { role: "W-Am", text: "Right, thanks. The supplier has sent pictures of every color. Shall we go through them now and decide which ones to use?" },
      { role: "M-Br", text: "Sure. Bring them up on your screen. We'll need the best three for the homepage banner." },
    ],
    ja: "家庭用品のネット通販会社の同僚2人が、来月サイトに加える商品群の準備について話す。女性は、新しく加わるのは大判のバスタオルで、6色あると言う。男性は、そのような品は今まで扱っておらず、新しい客が見込めると言う。女性は、約40箱が木曜に倉庫に届くが、自分は木曜と金曜は終日会議で、注文書と突き合わせて数を数える人がいないのが心配だと言う。男性は、ブライオニーが今週は倉庫にいると言う。女性は礼を言って次の話に移り、仕入先が送ってきた全色の写真を今から一緒に見て使うものを決めようと提案し、男性は応じて、トップページのバナーに使う上位3点が要ると付け加える。",
    v: [["product group","商品群"],["warehouse","倉庫"],["count the boxes against the order","箱を数えて注文書と突き合わせる"],["supplier","仕入先"]],
    q: [
      { tag: "詳細", qid: 'v5q65p', s: "What products does the woman say will be added next month?",
        c: ["A range of table lamps","A line of bath towels","A set of garden chairs","A collection of wall clocks"],
        a: 1,
        e: "女性は `The new product group going on the site next month is towels, the big bath kind, in six colors.` と述べている。",
        w: ["卓上ランプの話は、会話のどこにも出てこない。","正解。","庭用の椅子の話は、会話のどこにも出てこない。","壁掛け時計の話は、会話のどこにも出てこない。"] },
      { tag: "意図", qid: 'v5q66p', t: ["p3int"], s: "Why does the man say, \"Bryony's at the warehouse this week\"?",
        c: ["To turn down a staffing suggestion","To assure her someone can check a delivery","To suggest who could fetch some items","To explain a lack of replies"],
        a: 1,
        e: "直前に女性が `What worries me is who'll count the boxes against the order.` と、届いた荷を注文と照合する人がいないことを心配している。男性は `Bryony's at the warehouse this week.` と、倉庫にそれを確認できる人がいると伝えている。",
        w: ["直前の女性の発言は心配の表明で、人員配置の提案ではない。断る相手の提案が会話に出てこない。","正解。","直前の女性の発言は荷の確認の心配で、品物を取りに行く人の話ではない。","返事が来ないという話は、会話のどこにも出てこない。"] },
      { tag: "次の行動", qid: 'v5q67p', s: "What will the speakers most likely do next?",
        c: ["Look through some product photos","Write a description for the website","Phone a supplier about prices","Update a stock spreadsheet"],
        a: 0,
        e: "女性は `Shall we go through them now and decide which ones to use?` と、仕入先が送ってきた全色の写真を見ることを提案し、男性が応じている。",
        w: ["正解。","サイト用の商品説明を書くという話は、会話のどこにも出てこない。","仕入先に値段を電話で尋ねるという話は、会話のどこにも出てこない。","在庫の表を更新するという話は、会話のどこにも出てこない。"] },
    ],
  }),

  /* ── 68–70 ── 先読み対策（設問先行・正解はくじ）で本文を書いた。stem・4択は凍結案のまま、正解はくじのまま。
     図表。依頼は「舞台のそば」と「古い鉄の柵が背後」。日程の理由はクレーンのみ。送るものは地図のみ。 */
  set({
    n: [68,69,70], lv: 4, t: ["graphic"],
    graphic: {"t":"table","title":"Wyncote Common — Sculpture Plots","head":["Plot","Landmark","Backdrop"],"rows":[["Plot 32","Pond","Hedge"],["Plot 18","Pond","Railings"],["Plot 35","Bandstand","Hedge"],["Plot 27","Bandstand","Railings"]]},
    s: [
      { role: "W-Br", text: "Thanks for coming. I'd like to confirm where the sculpture goes. The artist wants it next to the little round stage with the pointed roof." },
      { role: "M-Au", text: "Right, we can manage that. Is there anything she wants behind it?" },
      { role: "W-Br", text: "Yes, she'd like the old iron fence behind it, as a contrast. It's a bronze piece, about two metres tall, so it will need careful handling." },
      { role: "M-Au", text: "Understood. Then I suggest we install it next Thursday." },
      { role: "W-Br", text: "Why that day?" },
      { role: "M-Au", text: "It's the only day this month the hire firm can send their truck with the big lifting arm." },
      { role: "W-Br", text: "And how will the lorry get onto the grass?" },
      { role: "M-Au", text: "I'll e-mail you a map of the way in for the truck." },
    ],
    ja: "屋外の公共アートの設置で、役所の女性と、設置を請け負う業者の男性が、彫刻をどこに置くかを話す。女性は、作者が屋根の尖った小さな円形の舞台のそばを望んでいると言い、さらに背後には古い鉄の柵があるのがよいと言う。彫刻は高さ約2メートルのブロンズ像で、慎重な扱いが要るという。男性は来週の木曜の設置を提案し、その理由として、レンタル会社が吊り上げ用のアームつきのトラック（クレーン車）を出せるのは今月その日だけだからと説明する。トラックはどう芝生に入るのかと聞かれた男性は、進入路の地図をメールで送ると約束する。",
    v: [["sculpture","彫刻"],["lifting arm","（クレーン車の）吊り上げ用のアーム"],["hire firm","レンタル会社"],["lorry","トラック"]],
    q: [
      { tag: "図表", qid: 'v5q68p', s: "Look at the graphic. Which plot will the sculpture be installed on?",
        c: ["Plot 32","Plot 18","Plot 35","Plot 27"],
        a: 3,
        e: "女性は、屋根の尖った小さな円形の舞台のそば（表の Bandstand）と、背後の古い鉄の柵（表の Railings）を挙げている。表で Bandstand かつ Railings の行は Plot 27 だけである。",
        w: ["Plot 32 は Pond で Hedge の行。女性が挙げた2つの条件のどちらにも合わない。","Plot 18 は Railings で背後の条件は合うが、Pond で、舞台のそばという条件に合わない。","Plot 35 は Bandstand で舞台のそばは合うが、Hedge で、背後に古い鉄の柵があるという条件に合わない。","正解。"] },
      { tag: "詳細", qid: 'v5q69p', t: ["p3detail"], s: "What reason does the man give for the installation date?",
        c: ["The artist can attend then","The crane is available that day","The common is quiet midweek","The park staff are on duty"],
        a: 1,
        e: "日程の理由を聞かれた男性は `It's the only day this month the hire firm can send their truck with the big lifting arm.` と答えている。吊り上げ用のアームつきのトラック（クレーン車）を出せるのがその日だけだという理由である。",
        w: ["作者が立ち会えるからという理由は、会話のどこにも出てこない。","正解。","平日は共有地が静かだからという理由は、会話のどこにも出てこない。","公園の職員が勤務しているからという理由は、会話のどこにも出てこない。"] },
      { tag: "詳細", qid: 'v5q70p', t: ["p3detail"], s: "What does the man offer to send the woman?",
        c: ["A photo of the finished piece","A map of the access route","A timetable for the work","A copy of the risk assessment"],
        a: 1,
        e: "男性は `I'll e-mail you a map of the way in for the truck.` と、進入路の地図を送ると述べている。",
        w: ["完成した作品の写真を送るという話は、会話のどこにも出てこない。","正解。","作業の日程表を送るという話は、会話のどこにも出てこない。日付は `next Thursday` に触れただけである。","リスク評価の写しを送るという話は、会話のどこにも出てこない。"] },
    ],
  }),
];
