/* =============================================================
   予想模試 Vol.1 — Part 3 前半（No.32–52）
   ============================================================= */

/* `qid` は設問 id の明示指定。先読み対策（設問先行・正解はくじ）方式で
   本文を全面的に書き直したため、通し番号由来の既定 id ではなく
   新しい id（`v1q32p` 等）を与える（`no` は 1〜200 の連番なので変えない）。 */
const set = (o) => ({
  id: `v1-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v1q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2A = [

  /* ── 32–34 ─────────────────────────────────────────── */
  /* 申し送り：会話の本題は Q32 のくじの正解（新しいブレーキパッドの見積もり）
     だけにし、エンジンの異音・部品納期の遅れ・請求書の食い違いはいずれも
     本文に一切出さない。
     2026-09-29 監査反映：正解の根拠（quote・brake pads）が本文に逐語で
     出ていたため、「ブレーキのパッド交換の費用を尋ね、価格を比べたい」
     という言い方に言い換えた。(D) の service record も「車の履歴を
     システムで確認する」に言い換えた。`Dana` は vol1 の他ファイルに
     複数いる名のため落とし、姓の Ferris だけにした（assets/data 全体で
     本ファイルのみで使用）。W-Am の発言にあった英式表現（usual garage /
     have this sorted）も米語寄りに直した。「セカンドオピニオンが欲しい」
     と言うだけで整備士が現物を点検しない、という言いっぱなしの文も外した。 */
  set({
    n: [32, 33, 34], lv: 3,
    s: [
      { role: 'W-Am', text: 'Hi, I was hoping you could tell me what it would cost to replace the pads on my brakes. My regular mechanic says mine are wearing thin, and I\'d like to compare prices before I book anything.' },
      { role: 'M-Au', text: 'Sure thing. Have you had any work done with us before?' },
      { role: 'W-Am', text: 'A couple of times, yes. It should be under the name Ferris.' },
      { role: 'M-Au', text: 'Great, then I can check which pads suit your model before I work out a figure, so the price is accurate.' },
      { role: 'W-Am', text: 'That\'d be great. Actually, I\'m heading off for a short trip starting Saturday, so I\'d love to have this taken care of beforehand if at all possible.' },
      { role: 'M-Au', text: 'That should be fine. Let me bring up your car\'s history on our system and see what we\'ve fitted for you previously.' },
      { role: 'W-Am', text: 'Thanks, I appreciate it.' },
    ],
    ja: '女性が来店し、ブレーキのパッド交換にいくらかかるかを尋ね、予約する前に価格を比べたいと伝える。姓のフェリスで以前にも利用したことがあると伝えると、担当の整備士は正確な価格を出すため、まず車種に合うパッドを確認すると言う。女性は今週末から数日間の外出を控えているため、それまでに終えたいと伝える。整備士はこれから彼女の車の履歴をシステムで調べ、これまで取り付けた部品を確認すると答える。',
    v: [['wearing thin', 'すり減ってきている'], ['work out a figure', '金額を算出する'], ['fitted', '（部品を）取り付けた']],
    q: [
      { tag: '概要', qid: 'v1q32p', s: 'What are the speakers mainly discussing?',
        c: ['A strange noise coming from the engine', 'A delay in the delivery of a part', 'A quote for new brake pads', 'A discrepancy found on the repair invoice'],
        a: 2,
        e: '女性は冒頭で、ブレーキのパッド交換にかかる費用を尋ね、予約する前に価格を比べたいと述べており、会話全体がこの見積もりのやり取りに終始する。',
        w: ['言及なし。エンジンの異音についての話は会話のどこにも出てこない。', '言及なし。部品の納期の遅れについての話は会話のどこにも出てこない。', '正解。', '言及なし。請求書の内容についての話は会話のどこにも出てこない。'] },
      { tag: '詳細', qid: 'v1q33p', s: 'What does the woman say about her schedule?',
        c: ['She has another appointment this afternoon', 'She is leaving town at the weekend', 'She works mornings during the week', 'She starts a new job on Monday'],
        a: 1,
        e: '女性は "Actually, I\'m heading off for a short trip starting Saturday" と述べており、週末から数日間、町を離れる予定であることが分かる。',
        w: ['言及なし。今日の午後の別の予定についての話は出てこない。', '正解。', '言及なし。平日の勤務時間についての話は出てこない。', '言及なし。月曜からの新しい仕事についての話は出てこない。'] },
      { tag: '次の行動', qid: 'v1q34p', s: 'What will the man most likely do next?',
        c: ['Look up a service record', 'Call a parts supplier', 'Show her the worn part', 'Schedule a follow-up visit'],
        a: 0,
        e: '男性は最後に "Let me bring up your car\'s history on our system and see what we\'ve fitted for you previously." と述べており、これから車の履歴を確認しようとしている。',
        w: ['正解。', '言及なし。部品業者へ連絡する話は出てこない。', '言及なし。摩耗した部品を見せる話は出てこない。', '言及なし。再訪問の予定を組む話は出てこない。'] },
    ],
  }),

  /* ── 35–37 ─────────────────────────────────────────── */
  /* 申し送り：引用の直前の発言は「作業の遅れの理由を説明する」読みだけが
     成り立つようにし、依頼の謝絶・手伝いの申し出の受諾・打ち合わせの延期の
     歓迎のいずれの読みも同時に立たないようにした（打ち合わせ自体を本文に
     出さない）。早まっているのは Corvale 社の納期であり、翻訳そのものの
     期限を延ばす発言はさせていない。
     2026-09-29 監査反映：引用の直前が進捗確認とクライアントの要望報告を
     兼ねていて、依頼の謝絶とも読めたため、直前は進捗確認だけに絞った。
     「That's actually why …」という因果の逆転（要望の報告が着手していない
     理由になっていた）も解消し、締めの発言も「予定どおり」ではなく
     「新しい納期で仕上げる」に直した。あわせて turnaround との派生語
     一致と、(A) を連想させる「新製品ラインの取扱説明書」の記述を外した。 */
  set({
    n: [35, 36, 37], lv: 4,
    s: [
      { role: 'W-Cn', text: 'How\'s the translation for Corvale coming along? I thought you\'d be well into it by now.' },
      { role: 'M-Br', text: 'I\'ve got two other jobs due tomorrow. I was going to start on it once those are out of the way.' },
      { role: 'W-Cn', text: 'That\'s cutting it close — they asked yesterday if we could get it back to them a day sooner than we\'d promised.' },
      { role: 'M-Br', text: 'So I heard, but only last night. And it\'s two hundred pages, half of it technical specifications.' },
      { role: 'W-Cn', text: 'Will you manage it alone, then?' },
      { role: 'M-Br', text: 'Honestly, no. Not without falling behind on the other two.' },
      { role: 'W-Cn', text: 'Could we bring somebody else in for part of it, then?' },
      { role: 'M-Br', text: 'I\'ll see if any of the contractors we\'ve used before have time this week.' },
      { role: 'W-Cn', text: 'Good idea. Let me know once you\'ve found someone, and I\'ll tell Corvale they\'ll have it on the new date.' },
    ],
    ja: '女性が同僚の男性に、Corvale社向けの翻訳の進み具合を尋ね、もうだいぶ進んでいると思っていたと伝える。男性は、他に明日締め切りの仕事を2件抱えており、それらが片付いてから着手するつもりだったと説明する。女性は、Corvale社が当初の約束より1日早く仕上げてほしいと言ってきたと伝えると、男性はそれを聞いたのは昨夜だったとして、200ページのうち半分が技術仕様だという分量の大きさを挙げる。一人で抱えると他の2件が遅れてしまうと言う男性に、女性は誰か他の人に手伝ってもらえないか尋ね、男性はこれまで依頼したことのある外部の協力者に今週空きがないか確認すると答える。',
    v: [['cutting it close', '（時間的に）ぎりぎりである'], ['contractor', '外部の協力者・請負業者'], ['technical specifications', '技術仕様']],
    q: [
      { tag: '意図', qid: 'v1q35p', t: ['p3int'], s: 'What does the man mean when he says, "I\'ve got two other jobs due tomorrow"?',
        c: ['He is turning down an assignment', 'He is explaining why some work is late', 'He is accepting an offer of help', 'He is welcoming the postponement of a meeting'],
        a: 1,
        e: '女性が「もうだいぶ進んでいると思っていた」と進捗を確認したのに対し、男性はこの発言で、他に明日締め切りの仕事を2件抱えており、それらが終わってから着手するつもりだったと、遅れている理由を説明している。',
        w: ['言及なし。この時点で女性は新しい仕事を依頼しておらず、依頼を謝絶する場面にもなっていない。', '正解。', '言及なし。この時点で女性は手伝いを申し出ておらず、申し出を受け入れる発言でもない。', '言及なし。この会話に打ち合わせや電話会議についての話は一切出てこない。'] },
      { tag: '詳細', qid: 'v1q36p', s: 'What does the woman say about the client?',
        c: ['The client is launching a product in Japan', 'The client has a new main contact', 'The client wants a shorter turnaround time', 'The client prefers British spelling'],
        a: 2,
        e: '女性は "they asked yesterday if we could get it back to them a day sooner than we\'d promised" と述べており、Corvale社が納期を当初の約束より早めるよう求めてきたことが分かる。',
        w: ['言及なし。日本での製品発売についての話は出てこない。', '言及なし。担当者が変わったという話は出てこない。', '正解。', '言及なし。綴りの好みについての話は出てこない。'] },
      { tag: '次の行動', qid: 'v1q37p', s: 'What will the man most likely do next?',
        c: ['Phone the client\'s office', 'Look for a freelance translator', 'Send a draft for checking', 'Print out a glossary of terms'],
        a: 1,
        e: '男性は最後に "I\'ll see if any of the contractors we\'ve used before have time this week" と述べており、これまで依頼したことのある外部の協力者に空きがないか確認しようとしている。',
        w: ['言及なし。クライアントの事務所に電話する話は男性の発言には出てこない（Corvale に新しい納期を伝えるのは女性自身の発言である）。', '正解。', '言及なし。下訳を確認に出す話は出てこない。', '言及なし。用語集を印刷する話は出てこない。'] },
    ],
  }),

  /* ── 38–40 ─────────────────────────────────────────── */
  /* 申し送り：Q39 は来訪した男性2人のうち一方（M-Am、先に発言する方）だけの
     発言にし、もう一方の男性（M-Au）と支配人（W-Br）には、Q39 の他の3択
     （機材の破損・乗り遅れ・車の故障）に当たる発言をさせていない。
     2026-09-29 監査反映：冒頭の支配人の発言が「昼食後まで来ないと思って
     いた」（＝早く着いた）と読め、直後の「時間どおりに来られたはずが…」
     （＝遅れた）という記述と事実が矛盾していたため、「遅れて心配していた」
     という中立の言い方に直した。あわせて正解 (B) が本文と4語一致していた
     （hotel booking … fell through）ため、1人目の男性の説明を「ホテル
     から予約が取れなくなったと連絡があった」という言い換えに直した。 */
  set({
    n: [38, 39, 40], lv: 3, k: 'conversation with three speakers',
    s: [
      { role: 'W-Br', text: 'Welcome — I was beginning to wonder where you\'d got to.' },
      { role: 'M-Am', text: 'We would\'ve been here sooner, but the hotel I\'d booked for tonight called this morning to say they\'d lost my reservation, so I had to find somewhere else before we set off.' },
      { role: 'W-Br', text: 'Ah, that would slow anyone down. Anyway, are you still able to do the full run-through today, or would you rather push it to tomorrow morning instead?' },
      { role: 'M-Au', text: 'Let\'s keep it today if we can — maybe just later in the afternoon rather than right after lunch.' },
      { role: 'W-Br', text: 'That\'s no problem. I\'ll move it to four o\'clock and let the cast know.' },
      { role: 'M-Am', text: 'Perfect, that gives us more breathing room.' },
      { role: 'W-Br', text: 'Great. Now, before you start unloading, let me walk you both through the building so you know where the dressing rooms and loading area are.' },
      { role: 'M-Au', text: 'Sounds good, thanks.' },
    ],
    ja: '地域の劇場に、巡業公演の技術スタッフの男性2人が到着し、劇場支配人の女性が、来るのが遅いので心配していたと出迎える。1人目の男性は、今夜泊まる予定だったホテルから今朝連絡があり、予約が取れなくなっていたと知らされたため、出発前に別の宿を探さなければならなかったと説明する。支配人が、通し稽古を予定どおり今日行うか翌朝に延期するか尋ねると、2人目の男性は、今日のうちに、ただし昼食直後ではなくもう少し遅い時間に行いたいと答える。支配人は開始を4時に変更し、出演者に伝えると約束する。最後に支配人は、荷下ろしの前に建物内を案内すると申し出る。',
    v: [['run-through', '通し稽古'], ['set off', '出発する'], ['breathing room', '（時間的な）余裕']],
    q: [
      { tag: '概要', qid: 'v1q38p', s: 'What are the speakers mainly discussing?',
        c: ['The setup of lighting equipment', 'The rescheduling of a rehearsal', 'The repair of a stage curtain', 'The seating arrangement for an event'],
        a: 1,
        e: '支配人と2人目の男性は、通し稽古を今日中に行うか翌朝に延期するかを話し合い、開始時刻を4時に変更することで合意している。',
        w: ['言及なし。照明機材の設営についての話は出てこない。', '正解。', '言及なし。舞台幕の修理についての話は出てこない。', '言及なし。客席の配置についての話は出てこない。'] },
      { tag: '詳細', qid: 'v1q39p', s: 'What problem does one of the men mention?',
        c: ['A piece of equipment arrived damaged', 'A hotel booking fell through', 'A crew member missed a train', 'A van broke down on the way'],
        a: 1,
        e: '1人目の男性が "the hotel I\'d booked for tonight called this morning to say they\'d lost my reservation" と述べている。',
        w: ['言及なし。機材が破損して届いたという話は出てこない。', '正解。1人目の男性は "the hotel I\'d booked for tonight called this morning to say they\'d lost my reservation" と述べており、宿泊予約が取れなくなったことを説明している。', '言及なし。乗り遅れについての話は出てこない。', '言及なし。車の故障についての話は出てこない。'] },
      { tag: '次の行動', qid: 'v1q40p', s: 'What will the speakers most likely do next?',
        c: ['Carry cases in through the stage door', 'Test the microphones on stage', 'Take a tour of the building', 'Clear the corridor backstage'],
        a: 2,
        e: '支配人は最後に "let me walk you both through the building so you know where the dressing rooms and loading area are" と申し出て、2人目の男性が了承している。',
        w: ['言及なし。舞台裏口からケースを運び入れる話は出てこない。', '言及なし。マイクの音出しをする話は出てこない。', '正解。', '言及なし。廊下を片付ける話は出てこない。'] },
    ],
  }),

  /* ── 41–43 ─────────────────────────────────────────── */
  /* 申し送り：Q43（駐車場の舗装補修）は Q41（隣室の騒音）とは別の話として
     出し、原因や結果として結びつけていない。
     2026-09-29 監査反映：正解の根拠（noise・next door）が本文に逐語で
     出ていたため、「壁を隔てたテナント」「考え事もできないほど」という
     言い方に言い換えた。Q43 の vocab（`booked (in)`）が本文の言い回しと
     一致していなかったため直し、ja の「日程が決まりしだい」も本文の
     言い回しに合わせて直した。 */
  set({
    n: [41, 42, 43], lv: 3,
    s: [
      { role: 'W-Au', text: 'Hi, I\'m calling about the tenants on the other side of my wall — I run a business preparing food for private events out of my unit, and some afternoons I can barely hear myself think.' },
      { role: 'M-Br', text: 'I\'m sorry to hear that — what sort of sound is it, and when does it happen?' },
      { role: 'W-Au', text: 'Machinery of some kind, most afternoons, right through the wall while I\'m trying to prep orders.' },
      { role: 'M-Br', text: 'Understood, I\'ll note it down and reach out to them about it.' },
      { role: 'W-Au', text: 'Thanks. Also, while I\'ve got you — any idea when the car park out front will finally get sorted? A few of my delivery drivers have been complaining about the potholes.' },
      { role: 'M-Br', text: 'Actually, yes — we\'ve got someone booked to redo the surface out there next month. I\'ll send round a note with the exact dates.' },
      { role: 'W-Au', text: 'Great, thanks for that.' },
    ],
    ja: '商業ビルの1区画を借りて、個人向けの出張料理の仕事をしている女性が、管理会社に電話をかけ、壁を隔てた隣のテナントの物音に悩まされ、午後は考え事もできないほどだと伝える。担当の男性スタッフは内容を控え、隣の入居者に連絡すると約束する。女性はついでに、建物前の駐車場の補修工事がいつ行われるか尋ね、配達業者からくぼみについての苦情が出ていると伝える。男性は来月に補修の予定が入っていることを伝え、詳しい日程は追って案内すると答える。',
    v: [['prep orders', '注文の準備をする'], ['potholes', '（路面の）くぼみ'], ['redo the surface', '（路面を）補修し直す']],
    q: [
      { tag: '概要', qid: 'v1q41p', s: 'What are the speakers mainly discussing?',
        c: ['Noise from the unit next door', 'A new due date for the rent', 'Permission to put up a sign', 'Water leaking through a ceiling'],
        a: 0,
        e: '女性は冒頭で、壁を隔てた隣のテナントの物音のせいで午後は考え事もできないほどだと相談しており、会話の中心はこの騒音の件である。',
        w: ['正解。', '言及なし。家賃の支払期日についての話は出てこない。', '言及なし。看板の設置許可についての話は出てこない。', '言及なし。天井からの水漏れについての話は出てこない。'] },
      { tag: '詳細', qid: 'v1q42p', s: 'What type of business does the woman run?',
        c: ['A graphic design studio', 'A catering company', 'A shoe shop', 'A locksmith service'],
        a: 1,
        e: '女性は "I run a business preparing food for private events out of my unit" と述べており、出張料理の仕事をしていることが分かる。',
        w: ['言及なし。デザイン事務所についての話は出てこない。', '正解。', '言及なし。靴店についての話は出てこない。', '言及なし。鍵屋についての話は出てこない。'] },
      { tag: '詳細', qid: 'v1q43p', s: 'What does the man mention about the building?',
        c: ['Its owner wants to sell it', 'Its parking area needs resurfacing', 'Its alarm system has new codes', 'Its front doors open earlier now'],
        a: 1,
        e: '男性は "we\'ve got someone booked to redo the surface out there next month" と述べており、建物前の駐車場の補修工事が来月に入っている。',
        w: ['言及なし。オーナーが建物を売却したいという話は出てこない。', '正解。', '言及なし。警報システムの暗証番号についての話は出てこない。', '言及なし。開館時間が早まったという話は出てこない。'] },
    ],
  }),

  /* ── 44–46 ─────────────────────────────────────────── */
  /* 申し送り：会話の本題は Q44 のくじの正解（配達曜日の変更）だけにし、
     新しい品揃えと新規客向け割引、配達日の変更と値上げ、といった営業の
     話でつなげやすい組を同じ会話に出していない。Q45 の別の仕入れ先は
     女性の会社とは別会社である。
     2026-09-29 監査反映：価格が変わったかどうかを尋ねるやり取りが、
     申し送りが禁じた「配達日の変更と値上げの示唆」に近くなっていたため、
     シェフが新メニューの原価計算のために価格表を求める、という値上げに
     触れない文脈に差し替えた。あわせて女性の相づちが Q45 の正解語
     （changed its ordering system）とほぼ同じ語を繰り返していたため
     言い換え、vocab の `switched over` も本文の言い回しに合わせた。 */
  set({
    n: [44, 45, 46], lv: 3,
    s: [
      { role: 'W-Am', text: 'Hi Chef, thanks for sparing me a few minutes. I wanted to let you know we\'re changing our delivery schedule — from next month, orders for this area will come in on Mondays and Thursdays instead of Tuesdays and Fridays.' },
      { role: 'M-Br', text: 'Good to know, I\'ll pass that on to whoever\'s doing the ordering. Actually, while you\'re here — my other supplier for dry goods just switched everything over to some new online portal, and I still haven\'t figured out how to place an order through it.' },
      { role: 'W-Am', text: 'Oh no, those always take some getting used to.' },
      { role: 'M-Br', text: 'Tell me about it. Anyway, I\'m costing a new spring menu at the moment — have you got a copy of what you charge on you?' },
      { role: 'W-Am', text: 'Sure, I always carry one. Give me a second to dig it out of my bag.' },
      { role: 'M-Br', text: 'Great, it\'s mainly the olive oil I need to check.' },
    ],
    ja: '食材卸の営業担当の女性がレストランのシェフを訪ね、来月から配達の曜日が火・金曜から月・木曜に変わると伝える。シェフは了承し、注文担当者に伝えると答えたうえで、別の乾物の仕入れ先が新しいオンラインの注文システムに切り替えたため、まだ注文の仕方が分からず困っていると話す。女性が同情を示すと、シェフは今考えている春の新メニューの原価を計算しているので、価格表を持っていないか尋ねる。女性はいつも携帯しているとして、鞄から取り出そうとする。',
    v: [['delivery schedule', '配達スケジュール'], ['switched everything over', '（一斉に）切り替えた'], ['dry goods', '乾物']],
    q: [
      { tag: '概要', qid: 'v1q44p', s: 'What are the speakers mainly discussing?',
        c: ['A new range of cheeses', 'A change to delivery days', 'A price increase next month', 'A discount for new customers'],
        a: 1,
        e: '女性は冒頭で "we\'re changing our delivery schedule — from next month, orders for this area will come in on Mondays and Thursdays instead of Tuesdays and Fridays" と伝えており、会話の主題は配達曜日の変更である。',
        w: ['言及なし。新しいチーズの品揃えについての話は出てこない。', '正解。', '言及なし。値上げについての話は出てこない。', '言及なし。新規客向けの割引についての話は出てこない。'] },
      { tag: '詳細', qid: 'v1q45p', s: 'What does the man say about another supplier?',
        c: ['The supplier raised its prices', 'The supplier changed its ordering system', 'The supplier discontinued a product line', 'The supplier moved to a new warehouse'],
        a: 1,
        e: '男性は "my other supplier for dry goods just switched everything over to some new online portal" と述べている。',
        w: ['言及なし。その仕入れ先が値上げしたという話は出てこない。', '正解。', '言及なし。取り扱い品目を廃止したという話は出てこない。', '言及なし。倉庫を移転したという話は出てこない。'] },
      { tag: '次の行動', qid: 'v1q46p', s: 'What will the woman most likely do next?',
        c: ['Hand over some samples', 'Show him a price list', 'Phone her head office', 'Arrange a second visit'],
        a: 1,
        e: '男性が "have you got a copy of what you charge on you?" と尋ねたのに対し、女性は "Sure, I always carry one. Give me a second to dig it out of my bag." と答えており、価格表を取り出して見せようとしている。',
        w: ['言及なし。試供品を渡す話は出てこない。', '正解。', '言及なし。本社に電話する話は出てこない。', '言及なし。再訪問の予定を立てる話は出てこない。'] },
    ],
  }),

  /* ── 47–49 ─────────────────────────────────────────── */
  /* 2026-09-29 監査反映：Q47・Q49 の正解の根拠が選択肢の語をほぼそのまま
     使っていたため（add/items/order、planning/second/event…）、
     トロフィーを追加できるか尋ねる言い方と、営業部門が独自の表彰の夜を
     予定しているという言い方に言い換えた。あわせて「今年は受賞者が
     増えた」という理由が Q49 の (A)（スタッフ増）を連想させかねなかった
     ため、「部門ごとの合同表彰にした」という理由に差し替えた。ja の
     「早く届く」も本文が支える「発送が1日早い」に直した。 */
  set({
    n: [47, 48, 49], lv: 3,
    s: [
      { role: 'W-Br', text: 'Hi, this is Clara calling about order C-4471 for our staff awards — is it too late to put a few more trophies on it?' },
      { role: 'M-Am', text: 'Let me check... you\'re fine, it hasn\'t gone to engraving yet. How many more did you need?' },
      { role: 'W-Br', text: 'Three more of the same style, please. We\'ve decided to give joint awards in a few categories this year.' },
      { role: 'M-Am', text: 'No problem, I\'ll update the order today. Just so you know, our workshop\'s moved its shipping day — we now send everything out on Thursdays instead of Fridays, so it\'ll go out a day earlier than you might expect.' },
      { role: 'W-Br', text: 'Good to know. We\'ll probably be in touch again before the year\'s out, actually — our sales team is holding an awards night of its own.' },
      { role: 'M-Am', text: 'Sounds good, just get in touch whenever you\'re ready.' },
    ],
    ja: 'ある会社の人事担当の女性クララが、トロフィー製作会社に電話をかけ、社内表彰用の注文にまだトロフィーを追加できるか尋ねる。担当の男性は、その注文がまだ彫刻の工程に入っていないため追加できると答え、必要な数を尋ねる。女性は今年はいくつかの部門で表彰を分け合うことにしたため、同じ型を3個追加してほしいと言う。男性は今日中に注文を更新すると答えたうえで、工房の発送日が金曜から木曜に変わり、発送が1日早まったと伝える。女性は、年内にまた連絡することになりそうだとして、営業部門も独自の表彰の夜を予定していると話す。',
    v: [['engraving', '彫刻'], ['workshop', '工房'], ['shipping day', '発送日']],
    q: [
      { tag: '詳細', qid: 'v1q47p', s: 'Why is the woman calling?',
        c: ['To add items to an order', 'To query a charge on an invoice', 'To report a mistake on a nameplate', 'To request an earlier delivery date'],
        a: 0,
        e: '女性は冒頭で "is it too late to put a few more trophies on it?" と尋ねており、注文にトロフィーを追加できるか確認するために電話をかけている。',
        w: ['正解。', '言及なし。請求内容についての問い合わせは出てこない。', '言及なし。銘板の誤りについての話は出てこない。', '言及なし。女性は納期を早めてほしいとは頼んでおらず、発送日が早まったのは男性が伝えた別の情報である。'] },
      { tag: '詳細', qid: 'v1q48p', s: 'What does the man say about the workshop?',
        c: ['It will close for staff holidays', 'It is replacing an engraving machine', 'It now ships orders on Thursdays', 'It has some materials on back order'],
        a: 2,
        e: '男性は "we now send everything out on Thursdays instead of Fridays" と述べている。',
        w: ['言及なし。従業員の休暇による休業についての話は出てこない。', '言及なし。彫刻機を入れ替えるという話は出てこない。', '正解。', '言及なし。資材の入荷待ちについての話は出てこない。'] },
      { tag: '詳細', qid: 'v1q49p', s: 'What does the woman mention about her company?',
        c: ['It has more staff this year', 'It changed its name recently', 'It is moving its offices soon', 'It plans a second event later this year'],
        a: 3,
        e: '女性は "our sales team is holding an awards night of its own" と述べており、年内にもう一度、別の表彰の機会があることが分かる。',
        w: ['言及なし。今年スタッフが増えたという話は出てこない。', '言及なし。社名を変更したという話は出てこない。', '言及なし。オフィスを移転するという話は出てこない。', '正解。'] },
    ],
  }),

  /* ── 50–52 ─────────────────────────────────────────── */
  /* 申し送り：引用の直前は、くじの正解（希望額の根拠を述べる）だけが
     成り立つ形にした。女性が先に希望額を伝え、男性は品物を見る前として
     金額自体には踏み込まない（買い取り額を提示していないので「申し出を
     断る」読みにはならない）。真贋への言及・領収書への言及はどちらも
     本文に出さず、男性はこの時点で年代の推測も述べていない。
     2026-09-29 監査反映：女性の希望額（およそ300）と男性の「具体的な
     金額」という反応が噛み合っていなかったため「具体的な」を削った。
     Q51 の正解 large を支える語が本文に無かったため albums を big に、
     fills を full from cover to cover に直した。Q52 の (A)（コインを
     調べる）の閉じ方が弱かったため、男性が調べ始める前に電話をかける、
     という順序を明示する行に直した。 */
  set({
    n: [50, 51, 52], lv: 3,
    s: [
      { role: 'W-Cn', text: 'I\'ve brought in my father\'s old coin collection — I was hoping to sell the whole lot, and I was thinking somewhere around three hundred for it.' },
      { role: 'M-Au', text: 'Let\'s see what you\'ve got before we talk numbers like that. That\'s quite a figure for a collection I haven\'t even looked at yet.' },
      { role: 'W-Cn', text: 'Fair enough. My father bought them in the sixties, so plenty of these are pretty old — they\'re not just any coins.' },
      { role: 'M-Au', text: 'Understood. How much is there, roughly?' },
      { role: 'W-Cn', text: 'Three big albums, full from cover to cover.' },
      { role: 'M-Au', text: 'Right, that\'s a lot to go through. Before I start, let me ring someone else in the trade who knows that period better than I do — I\'d like them to go through these with me before I put a number on anything.' },
      { role: 'W-Cn', text: 'Sure, take your time.' },
    ],
    ja: '女性が父親の古い硬貨のコレクションを売りに、古銭店を訪れる。女性がひとまとまりで300ほどを希望額として伝えると、店主の男性は品物をよく見る前にその金額を言われても、と難色を示す。女性は、父が1960年代に買い集めたものなので、かなり古いものが多いはずだと説明する。男性がおおよその量を尋ねると、女性はアルバム3冊分、隅々までぎっしり入っていると答える。男性は、それだけの量を調べるのは大変だとして、調べ始める前にまず、その年代に詳しい同業者に電話して意見を聞きたいと答える。',
    v: [['collection', 'コレクション'], ['go through', '丹念に調べる'], ['in the trade', 'その業界にいる（同業者）']],
    q: [
      { tag: '意図', qid: 'v1q50p', t: ['p3int'], s: 'What does the woman mean when she says, "My father bought them in the sixties"?',
        c: ['She is justifying the price she wants', 'She is assuring the man they are genuine', 'She is explaining a lack of receipts', 'She is agreeing with the man\'s guess'],
        a: 0,
        e: '女性が先に希望額を伝え、男性が品物も見ないうちからその金額を言われても、と難色を示したのに対し、この発言で、父が60年代に買い集めた品なので古いものが多いはずだと、希望額の根拠を述べている。',
        w: ['正解。', '言及なし。男性は真贋を疑う発言をしておらず、保証する対象の疑いがそもそも無い。', '言及なし。領収書についての話はどこにも出てこない。', '言及なし。男性はこの時点で年代についての推測を述べておらず、同意する対象がない。'] },
      { tag: '詳細', qid: 'v1q51p', s: 'What does the woman say about the collection?',
        c: ['It fills three large albums', 'It sat in her attic for years', 'It includes coins from Canada', 'It had a valuation last year'],
        a: 0,
        e: '女性は "Three big albums, full from cover to cover" と述べている。',
        w: ['正解。', '言及なし。屋根裏に長年しまってあったという話は出てこない。', '言及なし。カナダの硬貨が含まれるという話は出てこない。', '言及なし。昨年査定を受けたという話は出てこない。'] },
      { tag: '次の行動', qid: 'v1q52p', s: 'What will the man most likely do next?',
        c: ['Examine some coins closely', 'Phone a fellow dealer', 'Write down an offer', 'Look up a price guide'],
        a: 1,
        e: '男性は最後に "Before I start, let me ring someone else in the trade who knows that period better than I do" と述べている。',
        w: ['男性は "Before I start, let me ring someone else in the trade" と述べており、コレクションを実際に調べ始めるのはこの電話のあとになる。次に行うのは電話をかけることである。', '正解。', '男性は "before I put a number on anything" と述べており、金額を出すのは同業者に電話したあとである。', '言及なし。価格ガイドを調べる話は出てこない。'] },
    ],
  }),

];
