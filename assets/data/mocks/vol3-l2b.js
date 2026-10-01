/* =============================================================
   予想模試 Vol.3 — Part 3 後半（No.53–70、6セット）
   図表付きは 56・62・68 の3セット。
   ============================================================= */

/* `qid` は id の明示指定。設問を先に凍結し正解をくじで決める方式（2026-09-27
   確立）で本文を書き下ろしたため、通し番号由来の既定 id ではなく
   新しい id を与える（`no` は 1〜200 の連番なので絶対に変えない）。 */
const set = (o) => ({
  id: o.sid || `v3-p3-${o.n[0]}`, part: 3, kind: 'set', kindLabel: o.k || 'conversation',
  topics: o.t || ['p3detail'], level: o.lv ?? 4,
  script: o.s, graphic: o.graphic, ja: o.ja, vocab: o.v,
  questions: o.q.map((x, i) => ({
    id: x.qid || `v3q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || o.t || ['p3detail'], tag: x.tag,
  })),
});

export const L2B = [

  /* ── 53–55 ─────────────────────────────────────────── */
  /* 設問案凍結・くじの正解（53=B, 54=A, 55=B）は変更していない。
     Q53 の記事の主題（値上がり）は女性の冒頭発言だけで示し、言い換えて
     選択肢の語をそのまま使わない。Q54 は「産地から直接仕入れ」の1点のみ
     を男性に述べさせ、ブレンド・配送日数・通販起源には一切触れない。
     Q55 の引用直前は「観光客数の落ち込みが売上に影響しているか」という
     女性の質問1つだけにし、スーパー回避・顧客層の思い込み・梱包サイズの
     話題は混在させていない。
     2026-09-29 第1巡監査反映：S4「growers」を「estates」に差し替え、
     選択肢(A) tea growers との逐語一致を解消（vocab に estate を追加）。
     Q55 の ja の誤訳（「団体旅行客の来店が途絶えると」）を修正。
     2026-09-29 第2巡監査反映：ja の「男性創業者」（創業したのは本文では
     父親であり男性ではない）「食料品専門誌」（本文に無い）「小さな作業場」
     （small が掛かるのは firm であり unit ではない）を書き直した。 */
  set({
    n: [53, 54, 55], lv: 3,
    s: [
      { role: 'W-Am', text: 'Hi, is this an okay time? I\'m writing a piece on why shoppers are paying more at the checkout for their tea, and your name came up.' },
      { role: 'M-Br', text: 'That\'s fine, go ahead. We\'re a small firm — my father set it up thirty years ago, working out of a unit near the docks.' },
      { role: 'W-Am', text: 'And you still buy the leaf yourselves?' },
      { role: 'M-Br', text: 'We do. We deal straight with the estates, with no agents taking a cut along the way.' },
      { role: 'W-Am', text: 'That\'s useful. Visitor numbers have been down around here this summer — has that touched your side of things at all?' },
      { role: 'M-Br', text: 'Half our customers are hotels, so yes. When the coach parties stop coming through, our orders drop within days.' },
      { role: 'W-Am', text: 'I\'ll note that down. Anything else you\'d like readers to hear?' },
      { role: 'M-Br', text: 'Just that we\'re doing everything we can to hold our prices steady.' },
    ],
    ja: '紅茶の輸入会社を営む男性に、紅茶の値上がりについて記事を書いている女性記者が電話で取材している。男性は、小さな会社で、父親が30年前に埠頭近くの作業場で始めたと説明し、茶園から仲介業者を挟まず直接買い付けていると述べる。女性が今夏の観光客数の落ち込みが影響しているか尋ねると、男性は顧客の半数がホテルであるため、団体旅行客が来なくなると数日で注文が減ると認める。女性はそれを書き留め、男性は価格を据え置くよう努めている旨を付け加えて締めくくる。',
    v: [['a unit near the docks', '埠頭近くの作業場'], ['deal straight with', '（仲介を挟まず）直接取引する'], ['estate', '茶園'], ['agents taking a cut', '手数料を取る仲介業者'], ['coach parties', '団体旅行客'], ['hold ... steady', '（価格などを）据え置く']],
    q: [
      { tag: '詳細', qid: 'v3q53p', s: 'What is the woman\'s article about?',
        c: ['Small firms that import specialty foods', 'The rising price of tea',
            'Family-owned companies in the region', 'Changes in how people drink tea'],
        a: 1,
        e: '女性は冒頭で「レジで払う紅茶の値段が上がっている理由についての記事を書いている」と述べており、これが記事の主題である。',
        w: ['男性の会社が小規模である点には触れているが、それは記事の主題として述べられていない。', '正解。', '地域の家族経営企業についての言及はない。', '紅茶の飲み方の変化についての言及はない。'] },
      { tag: '詳細', qid: 'v3q54p', s: 'What does the man say about his company?',
        c: ['It buys directly from tea growers.', 'It blends its own teas in-house.',
            'It delivers orders within two days.', 'It began as a mail-order firm.'],
        a: 0,
        e: '男性は「茶園と直接取引しており、間に入る仲介業者はいない」と述べている。',
        w: ['正解。', '自社でブレンドしているという発言はない。', '注文を2日以内に届けるという発言はない。', '通信販売として創業したという発言はない。'] },
      { tag: '意図', qid: 'v3q55p', t: ['p3int'], s: 'What does the man mean when he says, "Half our customers are hotels"?',
        c: ['He is explaining why the firm avoids supermarkets.', 'He is acknowledging that tourism affects his sales.',
            'He is correcting her assumption about his clients.', 'He is explaining why the packs are so large.'],
        a: 1,
        e: '直前で女性が「今夏はこのあたりの観光客数が落ち込んでいるが、それが影響しているか」と尋ねたのに対し、男性は「顧客の半数はホテルだ」と答えており、これは観光客数の変動が自社の売上に影響することを認める発言である。',
        w: ['スーパーへの卸を避ける理由についての話題は会話に出てこない。', '正解。', '女性は思い込みを述べたのではなく質問をしただけなので、訂正には当たらない。', '梱包の大きさについての話題は会話に出てこない。'] },
    ],
  }),

  /* ── 56–58（図表）──────────────────────────────────── */
  /* 表は凍結案どおり（Crate ID / Position / Recipient）。Position・Recipient の
     セルの語（upright・flat・museum・private・client）は本文で一切使わず、
     「立てる／寝かせる」「公共の収蔵施設／収集家の自宅」に言い換えて2文に分けて
     伝えている。Museum 行きの2件（KFL-119・KFL-082）のうち Flat（寝かせる）
     なのは KFL-082 だけなので表だけでは1/2までしか絞れず、音声の2属性で
     初めて1件に決まる（音声だけ・表だけのどちらでも1/4のまま）。木箱の向きの
     話は女性の依頼（Q57）とは無関係の識別用の話題にとどめ、Q57 の実際の
     用件（納期の再連絡）とは別の話題として提示した。Q58 は男性の次の行動を
     「輸送業者に電話する」の1つだけに絞っている。
     2026-09-29 第1巡監査反映：S5・S7・S8 を書き換え、Q57 の逐語
     （need / date）と Q58 の逐語（courier）を解消した。`courier` の語自体を
     本文から外し「the transport company」に統一（運搬業者は1社しか
     登場しないので stem の the courier はこの会社を指す）。
     2026-09-29 第2巡監査反映：Q57 の exp が根拠の一部（S5）しか引いて
     おらず、依頼そのものである S7 を引いていなかったので追記。ja にも
     この依頼の1文を追加。本文（スクリプト）は変更していない。 */
  set({
    n: [56, 57, 58], lv: 4, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Outbound Crates — This Week',
      head: ['Crate ID', 'Position', 'Recipient'],
      rows: [
        ['KFL-119', 'Upright', 'Museum'],
        ['KFL-337', 'Flat', 'Private client'],
        ['KFL-204', 'Upright', 'Private client'],
        ['KFL-082', 'Flat', 'Museum'],
      ],
    },
    s: [
      { role: 'W-Cn', text: 'Before we get into the schedule change, I want to check on the crate that\'s going out to the public collection rather than to a collector\'s home.' },
      { role: 'M-Au', text: 'That narrows it to two of them. Do you mean the one that has to travel lying down, or the one that stands on its end?' },
      { role: 'W-Cn', text: 'The one that travels lying down.' },
      { role: 'M-Au', text: 'Got it, I know which one you mean.' },
      { role: 'W-Cn', text: 'Good. The transport company has moved our pickup back two days, so I have to let the recipient know when it\'ll actually arrive.' },
      { role: 'M-Au', text: 'Let me look into that today.' },
      { role: 'W-Cn', text: 'Can you find out what the transport company can actually offer, rather than us guessing?' },
      { role: 'M-Au', text: 'I\'ll ring them myself now and see what slot they\'ve got instead.' },
    ],
    ja: '木箱の発送を扱う事務所で、女性スタッフが男性の担当者に、今週発送予定の木箱について確認している。女性は、個人の収集家の自宅ではなく公共の収蔵施設に向かい、かつ立てた状態ではなく寝かせた状態で運ぶ必要がある木箱を尋ねている。該当の木箱が分かると、女性は輸送会社が集荷の予定を2日遅らせたため、実際の到着日を先方に知らせなければならないと伝え、推測で済ませずに輸送会社が実際に出せる枠を確かめてほしいと頼む。男性はこれから自分で輸送会社に電話し、代わりにどんな枠が出せるか確認すると答える。',
    v: [['the public collection', '公共の収蔵施設'], ['a collector\'s home', '個人収集家の自宅'], ['travel lying down', '寝かせた状態で運ばれる'], ['stands on its end', '立てた状態で置かれる'], ['transport company', '運送会社'], ['move ... back', '（予定を）遅らせる']],
    q: [
      { tag: '図表', qid: 'v3q56p', s: 'Look at the graphic. Which crate is the woman asking about?',
        c: ['KFL-119', 'KFL-337', 'KFL-204', 'KFL-082'],
        a: 3,
        e: '女性は、公共の収蔵施設（Museum）行きで、かつ寝かせた状態で運ぶ（Flat）木箱を尋ねている。Museum 行きは KFL-119 と KFL-082 の2件だが、そのうち Flat なのは KFL-082 だけなので、これが該当する。',
        w: ['KFL-119 は Museum 行きだが Upright（立てて運ぶ）であり、女性が言う寝かせて運ぶ木箱とは異なる。', 'KFL-337 は Private client（個人収集家）行きであり、女性が言う公共の収蔵施設行きとは異なる。', 'KFL-204 も Private client 行きであり、公共の収蔵施設行きではない。', '正解。'] },
      { tag: '詳細', qid: 'v3q57p', t: ['p3detail'], s: 'What does the woman need from the man?',
        c: ['She needs updated customs documentation.', 'She wants confirmation of the insurance value.',
            'She wants photos of the packed crate.', 'She needs a revised delivery date.'],
        a: 3,
        e: '女性は「輸送会社が集荷の予定を2日遅らせたので、実際の到着日を先方に知らせなければならない」と述べたうえで、男性に「Can you find out what the transport company can actually offer, rather than us guessing?」と頼んでおり、女性が男性から得たいのは、先方に伝える新しい到着日である。',
        w: ['通関書類の更新についての言及はない。', '保険金額の確認についての言及はない。', '梱包後の木箱の写真についての言及はない。', '正解。'] },
      { tag: '次の行動', qid: 'v3q58p', t: ['p3detail'], s: 'What will the man most likely do next?',
        c: ['He will update the shipment records.', 'He will contact the courier directly.',
            'He will send a confirmation e-mail.', 'He will check the crate\'s exact weight.'],
        a: 1,
        e: '男性は最後に「自分ですぐ輸送会社に電話し、代わりにどんな枠が出せるか確認する」と述べている。輸送を担う会社はこの1社しか登場しないので、これが stem の the courier に当たる。',
        w: ['出荷記録を更新するという発言はない。', '正解。', '確認のメールを送るという発言はない。（先方に到着日を知らせるのは女性の役割で、男性の次の行動ではない。）', '木箱の正確な重量を確認するという発言はない。'] },
    ],
  }),

  /* ── 59–61（3名の会話）─────────────────────────────── */
  /* 先に話す男性（M-Am）を配送担当、2人目の男性（M-Au）を売り場担当にした。
     Q60 の引用直前は「近く予定されている賃金の見直し」という2人目の男性の
     質問1つだけにし、荷下ろしの人手不足・研修記録・不在の理由は混在させて
     いない。1人目の男性の発言はQ60 の4択のいずれにも当たらない（供給業者へ
     の対応の話のみ）。Q59 の問題は電話回線の不通1点のみ、Q61 の女性の
     次の行動は常連客への電話1点のみに絞っている。
     2026-09-29 第1巡監査反映：2人目の男性の役を M-Cn → M-Au に変更
     （端末によっては en-CA の男声が無く M-Am と同じ声になりうるため。
     引用で発話者は特定できるが、body-rules の例に合わせて安全側に寄せた）。
     S4「Before you go」→「Before we head out」（女性が go 側ではなく
     男性2人が出ていく側だと述べているのに合わせた）。S2「mobile」→
     「cell」（M-Am は米式）。S6 を書き換え、答えが引用の直後に逐語で
     出ていた「reflected in my pay」を外し、why(B) が「文脈で切る」書き方
     になっていたのを言及なしの理由に書き直した。 */
  set({
    n: [59, 60, 61], lv: 3, k: 'conversation with three speakers',
    s: [
      { role: 'W-Br', text: 'Morning, both. Quick thing before you head out — we lost the phones for the best part of an hour first thing, so if a customer tried to ring in, it won\'t have come through.' },
      { role: 'M-Am', text: 'That explains it. One of my suppliers said he tried my desk line and gave up, so he called my cell instead.' },
      { role: 'W-Br', text: 'Right, well, keep an ear out today in case others do the same.' },
      { role: 'M-Au', text: 'Before we head out — can I ask about the pay review that\'s coming up?' },
      { role: 'W-Br', text: 'Go on.' },
      { role: 'M-Au', text: 'I\'ve done the forklift course. I\'m hoping that counts for something this time round.' },
      { role: 'W-Br', text: 'Put that in writing and I\'ll take it to head office with the others.' },
      { role: 'M-Au', text: 'Will do.' },
      { role: 'W-Br', text: 'Right, I\'m going to ring one of our long-standing trade customers now, in case they tried to get through earlier and couldn\'t.' },
    ],
    ja: '開店前の朝の打ち合わせで、女性の支店長が、開店直後の約1時間、電話回線がつながらなかったため、客からの着信が入っていない可能性があると伝える。配送担当の男性は、業者から自分の携帯電話に直接連絡が来たと応じる。売り場担当のもう一人の男性は、近く予定されている賃金の見直しについて尋ね、フォークリフトの講習を修了しており、今回はそれが多少なりとも考慮されるとよいと述べる。支店長は書面で提出すれば本社に話を通すと応じ、最後に、朝の不通でつながらなかったかもしれない長年の取引先の一つに、これから自分で電話をかけると告げる。',
    v: [['the best part of an hour', 'ほぼ1時間'], ['desk line', '（会社の）固定電話回線'], ['pay review', '賃金の見直し'], ['counts for something', '（何らかの）評価・考慮の対象になる'], ['long-standing trade customer', '長年の取引先の常連客']],
    q: [
      { tag: '詳細', qid: 'v3q59p', s: 'What problem does the woman report?',
        c: ['A customer\'s order went to the wrong site.', 'The phone lines were down for an hour.',
            'Rain soaked two pallets of cement.', 'Someone left the side gate open overnight.'],
        a: 1,
        e: '女性は冒頭で「今朝は開店直後のほぼ1時間、電話がつながらない状態だった」と述べている。',
        w: ['客の注文が違う現場に届いたという話は出てこない。', '正解。', '雨でセメントのパレットが濡れたという話は出てこない。', '夜間に裏門が開けっ放しだったという話は出てこない。'] },
      { tag: '意図', qid: 'v3q60p', t: ['p3int'], s: 'What does the second man mean when he says, "I\'ve done the forklift course"?',
        c: ['He is offering to unload a delivery himself.', 'He is noting that a record is out of date.',
            'He is explaining why he was away from work.', 'He is making a case for a pay rise.'],
        a: 3,
        e: '直前で2人目の男性が「近く予定されている賃金の見直しについて聞いてもよいか」と切り出しており、続けて「フォークリフトの講習を修了した。今回はそれが多少なりとも考慮されるとよいのですが」と述べている。これは新しい資格を根拠に賃金の見直し（昇給）を期待する発言である。',
        w: ['荷下ろしを自分が引き受けるという申し出は会話に出てこない。', '記録が古くなっているという話は会話に出てこない。', '不在だった理由についての話は会話に出てこない。', '正解。'] },
      { tag: '次の行動', qid: 'v3q61p', s: 'What will the woman most likely do next?',
        c: ['She will call a regular customer.', 'She will check the delivery schedule.',
            'She will put up a notice.', 'She will unlock the front gate.'],
        a: 0,
        e: '女性は最後に「これから、今朝の不通でつながらなかったかもしれない長年の取引先の一つに、自分で電話をかける」と述べている。',
        w: ['正解。', '配送予定を確認するという発言はない。', '貼り紙を出すという発言はない。', '正面の門を開けるという発言はない。'] },
    ],
  }),

  /* ── 62–64（図表）──────────────────────────────────── */
  /* 表は凍結案どおり（Screening Room / Format / Time Slot）。Format・Time Slot の
     セルの語（subtitled・dubbed・afternoon・evening）は本文で一切使わず、
     「原語＋字幕／英語吹替」「お茶の時間より前」に言い換えて2文に
     分けて伝えている。Subtitled の2室（Pipit・Puffin）のうち Afternoon なのは
     Pipit だけなので、表だけでは1/2までしか絞れず、音声の2属性で初めて
     1件に決まる。Q63 の引用直前は男性の「当日は2人だけでは対応しきれない
     かもしれない」という人手についての発言1つだけにし、催しを小さくする案・
     宣伝不足の心配・予約席の話は混在させていない。Q64 の監督についての話は
     出身地の1点だけに絞っている。
     2026-09-29 第1巡監査反映（致命的1件を含む）：
     ①S3 から「not the one after dinner」を削除。`after dinner` は英国北部
     方言で昼食後を指しうる読みが割れるうえ、同じ話者（M-Br）の2本目の
     not でもあった（`before tea` の1文だけで Afternoon の一択は保たれる）。
     ②S5 を書き換え、致命的：本文「grew up just outside town（町のすぐ外）」
     が正解 (A) `The director grew up in the town.` と向きが逆だった点を修正
     （「地元の若者で、ここから数ブロック先で育った」＝町の中、に直した）。
     ③S8 を書き換え、Q63 の引用の直前「You're right」・直後「we'll need
     more hands」がどちらも答えそのものだった問題を解消（人手が要るという
     読みは、直前の男性の発言と「もっと忙しくなる」という応答だけで
     推論させる）。S9 も引用直後の答えと矛盾しない形に軽微に調整。
     2026-09-29 第2巡監査反映：ja の「この町の数ブロック先で育った」を
     「この映画館から通りを数本隔てたところで育った」に修正（「町から
     数ブロック先＝町の外」とも読め、Q64 の致命的と同じ向きの揺れが
     訳文に残っていた）。上のコメントから「夕食後」の言い換え記述と
     誤字「指しうり」も削除・修正（本文はすでに `after dinner` を含まない）。 */
  set({
    n: [62, 63, 64], lv: 4, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Porthaven Cinema — Saturday Screenings',
      head: ['Screening Room', 'Format', 'Time Slot'],
      rows: [
        ['Pipit', 'Subtitled', 'Afternoon'],
        ['Periwinkle', 'Dubbed', 'Evening'],
        ['Puffin', 'Subtitled', 'Evening'],
        ['Knapweed', 'Dubbed', 'Afternoon'],
      ],
    },
    s: [
      { role: 'M-Br', text: 'For the director\'s talk on Saturday, we need the screening that\'s in the original language with captions — he wants the audience to hear the film as he made it, not with an English voice track over it.' },
      { role: 'W-Au', text: 'That still leaves two rooms, though.' },
      { role: 'M-Br', text: 'It also has to be the one before tea.' },
      { role: 'W-Au', text: 'Got it, I\'ll book him into that one. Anything else I should know about him?' },
      { role: 'M-Br', text: 'Only that he\'s a local lad — he was brought up a few streets from here, which is why the paper\'s covering it so closely.' },
      { role: 'W-Au', text: 'That explains the message I got this morning.' },
      { role: 'M-Br', text: 'Saturday\'s going to be a lot to manage with just the two of us on the door, by the way.' },
      { role: 'W-Au', text: 'And it\'s about to get busier. The local paper wants to send a photographer.' },
      { role: 'M-Br', text: 'Then I\'ll ask upstairs if anyone can help out.' },
    ],
    ja: 'Porthaven Cinema の事務室で、男性のイベント担当者と女性の支配人が、土曜日に予定している映画監督のトークについて話している。男性は、監督が字幕付きの原語版での上映を望んでいるため吹替版ではない回にする必要があり、さらにお茶の時間より前の回でなければならないと伝える。女性はその回を予約すると答え、監督について尋ねると、男性は監督がこの映画館から通りを数本隔てたところで育った地元の人であることが地元紙の強い関心の理由だと明かす。続けて男性は、当日は2人だけでは対応しきれないかもしれないと切り出し、女性は、もっと忙しくなる、地元紙がカメラマンを送ってくると応じる。男性は上の階に応援を頼めないか聞いてみると答える。',
    v: [['the original language with captions', '字幕付きの原語版'], ['an English voice track', '英語吹替の音声'], ['before tea', 'お茶の時間より前'], ['local lad', '地元出身の若者'], ['was brought up', '育てられた'], ['on the door', '入り口の対応をする']],
    q: [
      { tag: '図表', qid: 'v3q62p', s: 'Look at the graphic. Where will the director\'s talk take place?',
        c: ['Pipit', 'Periwinkle', 'Puffin', 'Knapweed'],
        a: 0,
        e: '男性は、監督が字幕付きの原語版（Subtitled）での上映を望んでいると述べ、さらにお茶の時間より前（Afternoon）の回でなければならないと述べている。Subtitled の2室（Pipit・Puffin）のうち Afternoon なのは Pipit だけなので、これが該当する。',
        w: ['正解。', 'Periwinkle は Afternoon ではなく Evening の回であり、しかも Dubbed（吹替）でもあるため条件に合わない。', 'Puffin は Subtitled だが Evening の回であり、お茶の時間より前という条件に合わない。', 'Knapweed は Afternoon の回だが Dubbed（吹替）であり、原語版という条件に合わない。'] },
      { tag: '意図', qid: 'v3q63p', t: ['p3int'], s: 'What does the woman mean when she says, "The local paper wants to send a photographer"?',
        c: ['She is objecting to keeping the event small.', 'She is agreeing that they need extra staff.',
            'She is reassuring him about publicity for the event.', 'She is explaining why she has reserved some seats.'],
        a: 1,
        e: '直前で男性が「土曜日は2人だけでは対応しきれないかもしれない」と述べたのに対し、女性は「これからもっと忙しくなる。地元紙がカメラマンも送り込む予定だ」と応じており、これは人手が余分に必要だという男性の見方に同意する発言として機能している。',
        w: ['催しの規模を小さくする提案は会話に出てこない。', '正解。', '宣伝が足りないという心配についての話ではない（男性は「地元紙がこの件をよく取り上げてくれている」と自分で述べている）。', '予約済みの座席についての話は出てこない（`book him into that one` は上映回を押さえる話で、座席ではない）。'] },
      { tag: '詳細', qid: 'v3q64p', t: ['p3detail'], s: 'What does the man say about the director?',
        c: ['The director grew up in the town.', 'The director is shooting a film nearby.',
            'The director wants to sign some books.', 'The director will arrive with a critic.'],
        a: 0,
        e: '男性は「監督は地元の人で、ここから数ブロック先で育った。それが地元紙の強い関心の理由だ」と述べている。',
        w: ['正解。', '「ここから数ブロック先」は近所を指すが、近くで映画を撮影しているという話ではない。', 'サイン会を望んでいるという話は出てこない。', '評論家と一緒に来るという話は出てこない。'] },
    ],
  }),

  /* ── 65–67 ─────────────────────────────────────────── */
  /* Q65 の理由は転居の1点のみ（改装とは重ねない）。Q66 の施設の説明は
     獣医の毎朝の巡回1点のみ。Q67 の男性の次の行動は預かり金の支払い1点
     のみにし、書類の記入は話題にしていない。
     2026-09-29 第1巡監査反映（致命的1件を含む）：
     ①S2「that same week」→「during that time」（直前の Two weeks を受ける
     先を作った。受ける先が無いという指摘に対応）。
     ②致命的：S5 の「get him settled into his run」を削除。run（区画）が
     (A) Each dog has its own outdoor run を部分的に真にしていた。
     支払い方法の説明（半額前払い・残金は引き取り時）に差し替え、これが
     Q67 の逐語（pay the deposit）も同時に解消する。
     2026-09-29 第2巡監査反映：Q67 の why(B) が誤訳だった（`I\'ll take him
     from you` を「連れて帰る」と書いていたが、女性が男性から犬を受け取って
     預かる、の意味で向きが逆だった）ので書き直した。本文は変更していない。 */
  set({
    n: [65, 66, 67], lv: 3,
    s: [
      { role: 'W-Br', text: 'Hello there — checking in for a stay, is it? How long will he be with us?' },
      { role: 'M-Au', text: 'Two weeks, if you\'ve got room. We\'re moving house across the county during that time, and I didn\'t want him under everyone\'s feet with boxes everywhere.' },
      { role: 'W-Br', text: 'That\'s fine, we\'ve got space. And don\'t worry about him while he\'s here — one of our vets looks in on every dog each morning, whether or not there\'s anything wrong.' },
      { role: 'M-Au', text: 'That\'s good to hear, actually. He gets a bit anxious with strangers.' },
      { role: 'W-Br', text: 'He\'ll settle in, most of them do after the first day. Right, if you can put half down now and the balance when you collect him, I\'ll take him from you and get him some water.' },
      { role: 'M-Au', text: 'Sure, do you take cards?' },
      { role: 'W-Br', text: 'We do.' },
    ],
    ja: '犬を預かる施設の受付で、女性スタッフが、ペットを預けに来た男性客に預かり期間を尋ねる。男性は2週間、その期間中に県内の別の場所へ引っ越す予定で、荷物だらけの中に犬を置いておきたくないためだと説明する。女性は、獣医が毎朝すべての犬の様子を見に来ると伝えて安心させる。男性は犬が人見知りすると付け加える。女性は、多くの犬が最初の1日で慣れると答え、半額を今払い残りを引き取り時に払ってもらえれば、犬を預かって水をやると告げる。男性はカード払いが可能か尋ね、女性は可能だと答える。',
    v: [['moving house', '引っ越しをする'], ['under everyone\'s feet', '（邪魔になって）足手まといで'], ['looks in on', '様子を見に立ち寄る'], ['settle in', '（新しい環境に）慣れる'], ['put half down', '半額を前払いする'], ['the balance', '残金']],
    q: [
      { tag: '詳細', qid: 'v3q65p', s: 'Why is the man boarding his pet?',
        c: ['He is going on a business trip.', 'He is having his house renovated.',
            'He is moving to a new home.', 'He is attending a family event abroad.'],
        a: 2,
        e: '男性は「その期間中に県内の別の場所へ引っ越す予定で、荷物だらけの中に犬を置いておきたくない」と述べている。',
        w: ['出張についての言及はない。', '自宅の改装についての言及はない。', '正解。', '海外での家族の行事についての言及はない。'] },
      { tag: '詳細', qid: 'v3q66p', s: 'What does the woman say about the kennels?',
        c: ['Each dog has its own outdoor run.', 'A vet checks on the dogs daily.',
            'Owners can watch the dogs online.', 'Staff walk the dogs in the woods.'],
        a: 1,
        e: '女性は「獣医が毎朝すべての犬の様子を見に来る。何も問題がなくても」と述べている。',
        w: ['それぞれの犬に専用の屋外スペースがあるという話は出てこない。', '正解。', '飼い主がオンラインで犬の様子を見られるという話は出てこない。', 'スタッフが森を散歩させるという話は出てこない。'] },
      { tag: '次の行動', qid: 'v3q67p', s: 'What will the man most likely do next?',
        c: ['He will fetch the pet\'s bedding from his car.', 'He will take a tour of the kennels.',
            'He will fill out a boarding form.', 'He will pay a deposit for the stay.'],
        a: 3,
        e: '女性は最後に「半額を今払い、残りは引き取り時に」と伝えており、これがこの直後に求められる行動である。',
        w: ['車から寝具を取ってくるという話は出てこない。', '言及なし。`I\'ll take him from you` は、女性が男性から犬を受け取って預かるという意味で、男性が施設を見学するという話ではない。', '書類の記入についての話は出てこない。', '正解。'] },
    ],
  }),

  /* ── 68–70（図表）──────────────────────────────────── */
  /* 表は凍結案どおり（Lane / Style / Section）。Style・Section のセルの語
     （cosmic・classic・front・back）は本文で一切使わず、「普通の照明／光る
     照明と音楽」「入り口に近い／奥の方」に言い換えて2文に分けて伝えている。
     レーン番号は音声で言わない（女性はレーン番号を覚えていない設定）。
     Classic の2レーン（Lane 5・Lane 7）のうち Front なのは Lane 7 だけなので、
     表だけでは1/2までしか絞れず、音声の2属性で初めて1件に決まる。
     Q70 の男性の次の行動は夜間シフトへの確認1点のみにし、遺失物ボックスの
     確認・防犯カメラの確認・電話番号を控える、は話題にしていない
     （電話番号については女性の方から今夜かけ直すと申し出ている）。
     2026-09-29 第1巡監査反映：S7 を書き換え、Q69 の逐語（jacket）と、
     正解を補強するだけの文（kind of small for an adult so you'd notice it）
     を解消した。S8「evening shift」→「whoever closed up」（Q70 の
     night-shift staff と語義がずれていた点を解消）。S9 の「instead」
     （受け先の無い代替表現）を削除。
     2026-09-29 第2巡監査反映：Q70 の exp が全角の「（B）」で選択肢を
     記号参照しており、balance2.mjs の除外判定（半角 `(A)`〜`(D)` のみ）を
     すり抜けて並べ替え後にずれる恐れがあったため、選択肢の中身（英文＋
     日本語の言い換え）で書き直した。任意案として、男性役を M-Au → M-Br
     に変更（役の国の散らしを整えるため。台詞の文言は1字も変えていない）。 */
  set({
    n: [68, 69, 70], lv: 4, t: ['graphic'],
    graphic: {
      t: 'table', title: 'Pinsent Lanes — Friday Evening Bookings',
      head: ['Lane', 'Style', 'Section'],
      rows: [
        ['Lane 12', 'Cosmic', 'Front'],
        ['Lane 5', 'Classic', 'Back'],
        ['Lane 18', 'Cosmic', 'Back'],
        ['Lane 7', 'Classic', 'Front'],
      ],
    },
    s: [
      { role: 'W-Cn', text: 'Hi, I was in last night with my kids, and I think we left something behind on our lane.' },
      { role: 'M-Br', text: 'No problem — do you remember the lane number?' },
      { role: 'W-Cn', text: 'Not really, sorry. It was one of the lanes with the ordinary lighting, not one of the ones with all the glow lights and music.' },
      { role: 'M-Br', text: 'Okay, that\'s two of them. Were you near the entrance, or down at the far end?' },
      { role: 'W-Cn', text: 'Near the entrance — we could see the shoe counter the whole time.' },
      { role: 'M-Br', text: 'Got it. And what did you leave?' },
      { role: 'W-Cn', text: 'My son\'s windbreaker — a blue one with his name on the label.' },
      { role: 'M-Br', text: 'I wasn\'t on last night, so let me check with whoever closed up. They might already have it somewhere safe.' },
      { role: 'W-Cn', text: 'Okay, I\'ll give you a call this evening, then.' },
      { role: 'M-Br', text: 'Sounds good, speak then.' },
    ],
    ja: 'Pinsent Lanes に女性が電話をかけ、前の晩に子どもたちと利用した際、レーンに忘れ物をしたようだと伝える。レーン番号は覚えていないが、光る照明や音楽が流れる方ではなく普通の照明のレーンで、入り口に近い方だったと説明する。女性は、忘れたのは息子のウインドブレーカーで、ラベルに名前が入っていると伝える。男性は前の晩は出勤していなかったため、閉店作業をした担当者に確認すると答える。女性は、今夜あらためて電話をかけ直すと申し出て、男性はそのときに、と応じる。',
    v: [['ordinary lighting', '普通の照明'], ['glow lights and music', '光る照明と音楽'], ['shoe counter', 'シューズカウンター'], ['closed up', '閉店作業をした'], ['windbreaker', '（薄手の）ウインドブレーカー'], ['somewhere safe', '安全などこか']],
    q: [
      { tag: '図表', qid: 'v3q68p', s: 'Look at the graphic. Which lane did the woman use?',
        c: ['Lane 12', 'Lane 5', 'Lane 18', 'Lane 7'],
        a: 3,
        e: '女性は、光る照明と音楽の方ではなく普通の照明のレーン（Classic）で、かつ入り口に近い方（Front）だったと伝えている。Classic の2レーン（Lane 5・Lane 7）のうち Front なのは Lane 7 だけなので、これが該当する。',
        w: ['Lane 12 は Front だが、光る照明と音楽が流れる方（Cosmic）であり、女性が言う普通の照明とは異なる。', 'Lane 5 は普通の照明（Classic）だが、入り口に近い方ではなく奥の方（Back）であり、条件に合わない。', 'Lane 18 は奥の方（Back）で、しかも光る照明と音楽の方（Cosmic）でもあり、条件に合わない。', '正解。'] },
      { tag: '詳細', qid: 'v3q69p', t: ['p3detail'], s: 'What did the woman leave behind?',
        c: ['A pair of glasses', 'A child\'s jacket', 'A set of car keys', 'A phone charger'],
        a: 1,
        e: '女性は「忘れたのは息子のウインドブレーカーで、ラベルに名前が入っている」と述べている。',
        w: ['眼鏡についての言及はない。', '正解。', '車の鍵についての言及はない。', '携帯電話の充電器についての言及はない。'] },
      { tag: '次の行動', qid: 'v3q70p', t: ['p3detail'], s: 'What will the man most likely do next?',
        c: ['He will check the lost-property box.', 'He will ask the night-shift staff.',
            'He will look at the security footage.', 'He will take down her phone number.'],
        a: 1,
        e: '男性は「I wasn\'t on last night, so let me check with whoever closed up.」と述べている。前夜に閉店作業をした担当者、つまり前夜の遅い時間帯に勤務していたスタッフに確認するということで、選択肢の「夜間シフトのスタッフに尋ねる」の言い換えになっている。',
        w: ['遺失物ボックスを自分で確認するという発言はない。', '正解。', '防犯カメラの映像を確認するという発言はない。', '男性が次にすると述べているのは、閉店作業をした担当者に確認することだけで、電話番号を尋ねる発言はない。女性の方が「今夜あらためて電話する」と申し出て会話が終わっている。'] },
    ],
  }),

];
