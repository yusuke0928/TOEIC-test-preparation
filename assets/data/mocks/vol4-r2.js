/* =============================================================
   予想模試 Vol.4 — Part 7 単一文書 前半（No.147–164）
   語彙難化回。
   ============================================================= */

const sp = (o) => ({
  id: `v4-p7-${o.n[0]}`, part: 7, kind: 'doc', topics: o.t || ['p7detail'],
  level: o.lv ?? 4, docCount: o.docs.length, docs: o.docs,
  questions: o.q.map((x, i) => ({
    /* 設問 id は通し番号 no から自動生成するが、中身を差し替えた設問だけは
       x.qid で新規採番を明示できるようにしてある（id を使い回すと SRS の履歴が
       別問題に引き継がれるため）。vol4-r3.js の sp() と同じパターン。 */
    id: x.qid || `v4q${o.n[i]}`, no: o.n[i], stem: x.s, choices: x.c, answer: x.a,
    exp: x.e, why: x.w, topics: x.t || ['p7detail'], tag: x.tag,
    insertAt: x.insertAt, sentence: x.sentence,
  })),
});

export const R2 = [

  /* ── 147–148 掲示 ─────────────────────────────────── */
  sp({
    n: [147, 148], lv: 3,
    docs: [{
      label: 'Notice',
      title: 'Thistledown Tower — Elevator Modernisation Notice',
      body: [
        'The east bank of elevators (cars 3 and 4) will be taken out of service from Monday 6 to Friday 17 October for a full modernisation of the control system and cabling, replacing equipment that has been in continuous use since the building opened in 1998.',
        'The west bank (cars 1 and 2) will remain in operation throughout, though tenants on floors 9 and above should expect longer waits during the morning and evening peaks. Building management recommends staggering arrival times where possible and has arranged for the ground-floor café to extend its opening hours to ease congestion in the lobby.',
        'Freight deliveries requiring the service elevator should be scheduled through the building office at least one day in advance during the works, as the service elevator will be shared with the contractor for material transport between 8:00 and 10:00 each morning.',
        'Tenants with concerns about accessibility should contact the building office directly; a temporary stair-climbing chair will be available on request for the duration of the project.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why are cars 3 and 4 being taken out of service?',
        c: ['Their control system and cabling are being replaced.', 'A new tenant on floor nine requested the change.',
            'They are being removed permanently due to low ridership.', 'They failed a recent safety inspection carried out by the city.'],
        a: 0,
        e: '制御系統と配線を全面更新するためと明記されている。',
        w: ['正解。', '新テナントの要望という記述はない。9階以上への影響は待ち時間の文脈で、要望とは無関係。', '恒久的な撤去ではなく、乗車率低下という理由も述べられていない。', '検査不合格の話はない。運休の理由は制御系統と配線の全面更新だと明記されている。'] },
      { tag: '詳細', s: 'What is stated about freight deliveries during the works?',
        c: ['They must be scheduled at least a day in advance.', 'They are suspended entirely for the length of the works.',
            'They must use cars 1 and 2 during peak hours.', 'They will be handled by building staff only, free of charge.'],
        a: 0,
        e: 'サービスエレベーターは午前 8 時〜10 時は業者の資材搬入と共用のため、少なくとも前日までに事務所を通して予約が必要と明記されている。',
        w: ['正解。', '全面停止ではなく、事前予約すれば利用できる。', '共用されるのはサービスエレベーターであり、号機1・2の指定はない。', '建物スタッフ限定や無料という記述はない。'] },
    ],
  }),

  /* ── 149–150 業務連絡（メモ）─────────────────────── */
  sp({
    n: [149, 150], lv: 4,
    docs: [{
      label: 'Memo',
      head: 'TO: Warehouse floor staff\nFROM: Operations\nDATE: 8 May\nSUBJECT: New inventory scanners — rollout delay',
      body: [
        'The new handheld scanners originally due to arrive this week have been delayed at customs and are now not expected until 20 May.',
        "In the meantime, all stock movements must continue to be logged on the paper count sheets, exactly as before. Please do not attempt to use last year's scanners, which were returned to the supplier for parts and no longer hold a working inventory database.",
        "Once the new units arrive, training will be scheduled in small groups so that floor coverage is maintained; nobody will be pulled from a shift without at least two days' notice.",
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why have the scanners been delayed?',
        c: ['They failed a quality test.', 'The wrong model was ordered.',
            'The supplier went out of business.', 'They were held up in customs.'],
        a: 3,
        e: '「税関で足止めされ、5 月 20 日まで届かない見込み」と説明されている。',
        w: ['検査不合格の話はない。', '発注ミスには触れていない。', '廃業の話はない。', '正解。'] },
      { tag: '詳細', s: "Why should staff not use last year's scanners?",
        c: ['They have been sold to another company for parts.', 'They belong to a different department in the company.',
            'They require a software update from the manufacturer.', 'They no longer hold a working inventory database.'],
        a: 3,
        e: '「部品取り用に業者へ返却され、稼働する在庫データベースをもう保持していない」と明記されている。',
        w: ['業者へ返却されたのであり、他社への売却ではない。', '部署の違いには触れていない。旧スキャナーは業者へ返却済みで、社内のどこかにあるわけでもない。', 'ソフト更新ではなく、稼働するデータベースの有無が理由。', '正解。'] },
    ],
  }),

  /* ── 151–152 広告 ─────────────────────────────────── */
  sp({
    n: [151, 152], lv: 4,
    docs: [{
      label: 'Advertisement',
      title: 'Fenwick & Barr — Upholstery & Furniture Restoration, Est. 1977',
      body: [
        'We reframe, respring and reupholster. What we will not do is talk a customer into recovering a chair that has a structural problem underneath, when the honest answer is that the frame itself needs attention first.',
        { t: 'list', items: [
          'Full reupholstery from £310 (fabric not included)',
          'Spring replacement from £85 per seat',
          'Frame repair from £120',
          'Free in-home assessment within 15 miles',
        ] },
        'Turnaround is five to seven weeks for a full reupholstery. We do not offer a rush service for horsehair-stuffed pieces, because horsehair must be teased and redistributed by hand over several sessions, and compressing that process is the most common cause of an uneven seat within a year.',
        'Foam-filled pieces, by contrast, can often be turned around in two to three weeks, since foam requires no comparable hand-finishing.',
        'If, after assessment, we judge that a piece is not worth restoring, we say so and charge nothing for the visit. This happens with roughly one piece in ten, usually where the frame has been affected by damp.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'Why does the shop not offer a rush service for horsehair-stuffed pieces?',
        c: ['Horsehair is no longer manufactured by any major supplier.', 'Insurance restrictions prevent the shop from offering it.',
            'Few customers request it during the busiest months.', 'The material must be hand-finished over several sessions.'],
        a: 3,
        e: '馬毛は数回に分けて手作業でほぐし配り直す必要があり、それを圧縮すると 1 年以内に座面がへたる主因になると説明されている。',
        w: ['馬毛の製造中止という記述はない。', '保険上の制限には触れていない。', '需要の少なさが理由という記述はない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What is suggested about foam-filled pieces?',
        c: ['They are treated in exactly the same way as horsehair pieces.', 'They cost noticeably more to restore than horsehair pieces.',
            'They are not accepted by the shop for restoration.', 'They can often be completed faster than horsehair pieces.'],
        a: 3,
        e: '「フォーム詰めは同等の手作業の仕上げが不要なので、2〜3 週間で仕上がることが多い」とある。',
        w: ['同等の仕上げは不要と明記されている。', '費用の比較は述べられていない。', '断るのは「修復する価値がない」と判断した場合のみで、フォーム詰めを受け付けないという記述はない。', '正解。'] },
    ],
  }),

  /* ── 153–154 テキストメッセージ ───────────────────── */
  sp({
    n: [153, 154], lv: 4,
    docs: [{
      label: 'Text message chain',
      body: [{ t: 'chat', lines: [
        { who: 'Rosalind Achebe', time: '14:02', text: "The catering van says they're stuck behind an accident on the ring road." },
        { who: 'Tomasz Wysocki', time: '14:04', text: 'How stuck? We start seating at five.' },
        { who: 'Rosalind Achebe', time: '14:05', text: 'Driver says forty minutes minimum, could be more.' },
        { who: 'Tomasz Wysocki', time: '14:06', text: 'Then we lose the warm starters either way.' },
        { who: 'Rosalind Achebe', time: '14:08', text: 'Can we swap to the cold menu option they offered as a backup?' },
        { who: 'Tomasz Wysocki', time: '14:09', text: 'Yes — call them now and tell them to switch before they load the van.' },
        { who: 'Rosalind Achebe', time: '14:10', text: 'On it.' },
      ] }],
    }],
    q: [
      { tag: '詳細', s: 'What problem is described in the messages?',
        c: ['A caterer has been delayed by a traffic accident.', 'A caterer has cancelled the order for this evening.',
            'A menu item has gone out of stock at short notice.', 'A payment has not been processed by the bank.'],
        a: 0,
        e: '「環状道路で事故があり、その渋滞に巻き込まれている」というケータリング業者の遅延について。',
        w: ['正解。', '業者は取り消していない。「事故で足止めされている」と伝えてきただけで、その後も「積み込む前に冷製メニューへ切り替えるよう伝えて」と、配達される前提で話が進んでいる。', 'メニューの在庫切れには触れていない。', '支払い未処理の話は出ていない。'] },
      { tag: '詳細', s: 'What does Mr. Wysocki ask Ms. Achebe to do?',
        c: ['Ask the caterer to switch to the cold menu.', 'Find a replacement caterer for the entire event.',
            'Delay the start of seating until the caterer arrives.', 'Cancel the catering order entirely and start over.'],
        a: 0,
        e: '「今すぐ電話して、積み込む前に冷製メニューに切り替えるよう伝えて」と依頼している。',
        w: ['正解。', '代替業者の手配は依頼していない。', '開始時刻の変更は述べていない。', '全面取り消しではなく、メニュー変更で対応している。'] },
    ],
  }),

  /* ── 155–157 メール ───────────────────────────────── */
  sp({
    n: [155, 156, 157], lv: 5,
    docs: [{
      label: 'E-mail',
      head: 'To: p.okonjo@harrowbrook-textiles.com\nFrom: e.rasmussen@greenline-design.no\nDate: 9 June\nSubject: Courtyard planting — revised proposal',
      body: [
        'Dear Mr. Okonjo,',
        'Thank you for walking me through how staff actually use the courtyard at different times of day — that changed my recommendation.',
        'You originally asked for a single species of ornamental tree along both the north and south beds, to match the existing planting outside reception. Having watched the courtyard over two lunch periods, I would like to propose two species instead: a low, wide-canopied tree for the north bed, where staff eat lunch and want shade without losing sightlines to the door, and a narrower, upright tree for the south bed, which gets almost no midday use and would benefit more from height and screening of the loading bay behind it.',
        'The two-species approach adds around ten percent to the planting cost, since it requires two separate supplier orders rather than one bulk order. I think it is worth it, but I want to be clear this is my professional judgement, not something the site drainage survey requires.',
        'On matching the reception planting: matching exactly, I now think, would waste the north bed\'s potential. The reception trees are chosen for a formal, symmetrical look from the street, which does not serve people trying to eat lunch under them.',
        'I have attached sketches of both options and a revised planting schedule. If the ten percent increase is not workable within the current budget, I can specify a single compromise species that will do both jobs adequately rather than either job well.',
        'With regards,\nElin Rasmussen',
      ],
    }],
    q: [
      { tag: '概要', s: 'Why is Ms. Rasmussen writing?',
        c: ['To request payment for a site visit completed last month', 'To confirm a delivery date for the ornamental trees',
            'To propose a change to an agreed planting plan', 'To decline a landscaping commission due to scheduling'],
        a: 2,
        e: '「単一樹種」という当初の依頼に対し、2 樹種に分ける提案をしている。',
        w: ['費用請求ではない。現地は見ているが、その費用も実施時期も本文に出てこない。', '納期の確認ではない。樹木の納品日への言及自体が本文にない。', '正解。', '依頼を辞退してはいない。'] },
      { tag: '詳細', s: 'What did Ms. Rasmussen observe about the courtyard?',
        c: ['The lighting is inadequate for outdoor dining.', 'Drainage in the south bed is poor.',
            'The courtyard is smaller than the site plan showed.', 'The two beds are used very differently at midday.'],
        a: 3,
        e: '北側は昼食時に利用され、南側はほぼ利用されないという使われ方の違いを観察している。',
        w: ['照明の話はない。', '排水の問題には触れていない。', '広さの話は出ていない。', '正解。'] },
      { tag: '推測', t: ['p7inf'], s: 'What does Ms. Rasmussen imply about matching the reception planting exactly?',
        c: ['It is not permitted under the terms of the original design brief.', 'It would exceed the requirements of the site drainage survey.',
            'It would fail to serve people who eat lunch in the north bed.', 'It would require trees that are especially difficult to source locally.'],
        a: 2,
        e: '「受付前の植栽は左右対称の見た目重視で選ばれており、その下で昼食を取る人々には向かない」という趣旨。',
        w: ['禁止規定の話は出てこない。彼女は「厳密に合わせると北側の花壇の可能性を無駄にする」と、可否ではなく得失として述べている。', '排水調査の話とは無関係——本人が「これは自分の専門判断であり、排水調査が求めるものではない」と明言している。', '正解。', '入手性には触れていない。'] },
    ],
  }),

  /* ── 158–160 記事 ─────────────────────────────────── */
  sp({
    n: [158, 159, 160], lv: 5,
    docs: [{
      label: 'Article',
      title: 'The Coffee Shop That Closed an Hour Earlier and Made More Money',
      head: 'Independent Retail Monthly',
      body: [
        'In 2021, Marrow & Bean, a coffee shop in a mid-sized market town, cut its closing time from seven in the evening to six. No other change was made: staffing levels, the menu and the opening time all stayed the same.',
        'The idea came from a simple observation by owner Callum Reid: the last hour of trade brought in barely enough to cover the wages of the two staff needed to run it, once you subtracted the cost of throwing away unsold pastries at closing.',
        'The first six months showed a predictable drop in evening revenue of around eight percent. Full three-year tracking, unusual for a change this small, showed something else: total annual revenue rose by six percent, driven almost entirely by the morning trade.',
        'Mr. Reid\'s explanation is that closing earlier let him move his best staff to the morning shift, when queues had been a longstanding complaint. "We were spread thin trying to cover twelve hours with the same four people," he says. "Now three of them work the four busiest hours, and the fourth handles what used to be the quiet afternoon."',
        'The shop has not extended the change to its second location, opened last year in a neighbouring town, where the evening trade follows a different pattern tied to a nearby cinema.',
      ],
    }],
    q: [
      { tag: '詳細', s: 'What change did Marrow & Bean make in 2021?',
        c: ['It replaced its pastry supplier at the start of the year.', 'It reduced its closing time by one hour.',
            'It reduced its staffing levels during quiet afternoons.', 'It extended its opening hours on weekday mornings.'],
        a: 1,
        e: '「閉店時刻を19時から18時に早めた」とある。',
        w: ['仕入先変更の話はない。「他の変更は一切していない」と明記されている。', '正解。', '人員は変えていないと明記。閑散時間帯の話でもない。', '延長ではなく短縮。平日朝限定という記述もない。'] },
      { tag: '詳細', s: 'What was unusual about the tracking of the change?',
        c: ['It was conducted by an outside retail consultant.', 'It measured staff satisfaction rather than revenue.',
            'It covered both of the shop\'s locations from the outset.', 'It continued for three years rather than a shorter period.'],
        a: 3,
        e: '「この程度の小さな変更にしては珍しく」3 年間の追跡調査を行った点が特異だと述べている。',
        w: ['外部コンサルタントの話はない。', '測定対象は売上。', '2 号店は昨年開業した別の話。', '正解。'] },
      { tag: '詳細', s: 'What does Mr. Reid say resulted from the change?',
        c: ['He hired two additional employees to cover the evenings.', 'His best staff moved to the morning shift.',
            'The shop reduced its menu during the evening hours.', 'Customer complaints about long queues increased after the change.'],
        a: 1,
        e: '「最も優秀なスタッフを朝の忙しい時間帯に回せるようになった」と述べている。',
        w: ['「同じ 4 人で 12 時間を回していた」のが「3 人が繁忙の 4 時間、残り 1 人が午後」に変わっただけで、増員はしていない。', '正解。', 'メニュー削減には触れていない。', '行列は「以前からの苦情」で、優秀なスタッフを朝に回したのはその解消のため。増加したとは書かれていない。'] },
    ],
  }),

  /* ── 161–164 記事（文挿入あり）───────────────────── */
  sp({
    n: [161, 162, 163, 164], lv: 5, t: ['p7ins'],
    docs: [{
      label: 'Article',
      title: 'A Six-Year Puzzle at Furrow Hill Cider House',
      head: 'The Cellar Trade Digest',
      body: [
        'Furrow Hill Cider House, a fourth-generation producer south of Leyburn, spent six years chasing an intermittent fault: roughly one bottle in forty developed a faint vinegary taint months after bottling, regardless of the orchard block or apple blend used. Last spring the family retired the oak-and-elm press that had stood in the barn since 1931, replacing it with an enclosed stainless unit. — [[1]] —',
        'Kelleher said little when the laboratory results came back. Swabs from the retired press turned up acetic bacteria lodged in hairline splits deep inside the oak, deposits no washdown had ever reached. — [[2]] — Juice drawn through one of those splits carried a real chance of picking up enough bacteria to sour a bottle months later, long after the batch had already passed the taste test performed before release.',
        'The finding changed more than the equipment list. The cidery now runs a quarterly acid wash and an ultrasonic probe test on any wood-contacting part nearing retirement, rather than relying on visual inspection alone. — [[3]] — Bottles from the final eighteen months under the old press have also been pulled from three retailers as a precaution, though only one in five of the batches they came from has tested positive.',
        'Since the switch, the defect rate has fallen from one bottle in forty to fewer than one in six hundred, and no batch pressed on the new unit has yet tested positive. — [[4]] — The retired press itself has been donated to the regional agricultural museum, where Kelleher now gives a monthly talk on traditional pressing methods.',
        'For Furrow Hill, the episode is a reminder that a fault can hide in the one piece of equipment nobody thought to test, however carefully everything else is inspected.',
      ],
    }],
    q: [
      { tag: '詳細', qid: 'v4q161r',
        s: 'What problem had Furrow Hill Cider House been trying to diagnose for six years?',
        c: ['A shortage of skilled orchard workers', 'A decline in the sweetness of finished cider',
            'A rise in complaints from three retailers', 'A recurring taint appearing months after bottling'],
        a: 3,
        e: '本文冒頭で、ブロックや配合によらず瓶詰め後数か月で現れる酢のような異味を6年間追っていたと述べられている。',
        w: ['熟練した果樹園労働者の不足には触れていない。',
            '完成したサイダーの甘みが落ちたという記述はない。',
            '苦情の増加ではなく、予防のため最終18か月分の瓶を引き上げたという話であり、6年来の課題とは別の話。',
            '正解。ブロックや配合によらず瓶詰め後数か月で現れる酢のような異味を6年間追っていたと述べられている。'] },
      { tag: '詳細', qid: 'v4q162r',
        s: 'What did tests on the retired press reveal?',
        c: ['A layer of hardened mould on the exterior', 'A colony of bacteria deep inside the oak',
            'A leak inside the stainless collection tray', 'A residue from an earlier cleaning chemical'],
        a: 1,
        e: '引退した圧搾機の検体から、木材の奥深くの割れ目に潜む酢酸菌のコロニーが見つかり、そこは洗浄でも届かない場所だったと説明されている。',
        w: ['外側の硬化したカビの層という記述はない。',
            '正解。検体調査で、木材の奥深くの割れ目に酢酸菌のコロニーが潜んでいたことが分かったと述べられている。',
            'ステンレス製の受け皿の亀裂には触れていない。',
            '洗浄剤の残留物ではなく、菌そのものが原因だと述べられている。'] },
      { tag: '位置選択', qid: 'v4q163r', t: ['p7ins'], insertAt: 1,
        sentence: 'Thora Kelleher, who had run the pressing floor for twenty-six years, had argued against the change, insisting that the old press had nothing to do with the fault.',
        s: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?　"Thora Kelleher, who had run the pressing floor for twenty-six years, had argued against the change, insisting that the old press had nothing to do with the fault."',
        c: ['[1]', '[2]', '[3]', '[4]'],
        a: 0,
        e: '挿入文は Thora Kelleher という固有名を「圧搾室を26年間切り盛りしてきた」という説明つきで初めて導入している。第2段落はこの人物を姓だけの Kelleher で指しており、固有名は世界知識から推測できないため、それより前に一度は正式名で導入されていなければ読者は誰のことか分からない。それが成立するのは [1] だけである。',
        w: ['正解。挿入文がフルネームで Thora Kelleher を導入するのはこの位置だけで、直後の段落にある Kelleher という姓だけの表現が、直前で導入された相手を指す形として成立する。',
            '[2] に置くと、同じ段落の冒頭の Kelleher という姓だけの表現が、挿入文によるフルネームでの導入より前にすでに本文中に現れていることになる。固有名は文脈から推測できないため、まだ一度も名指しされていない相手を第2段落冒頭が指してしまっており、成立しない。',
            '[3] に置くと、Kelleher という姓だけの言及がすでに一度（第2段落冒頭）現れたあとになり、誰を指すか定まらないまま固有名が使われていたことになる。',
            '[4] に置くと、Kelleher という姓だけの表現からさらに離れたあとで Thora Kelleher がフルネームで「初めて」導入されることになり、すでに姓だけで扱われていた相手を今さら初出の形で導入し直す矛盾が生じる。'] },
      { tag: '推測', qid: 'v4q164r2', t: ['p7inf'],
        s: 'What is suggested about the bottles produced during the final eighteen months before the press was replaced?',
        c: ['They have been traced to one blend.', 'They have not all been cleared yet.',
            'They have been withdrawn without any public explanation.', 'They have never been removed from the three retailers.'],
        a: 1,
        e: '最終18か月分の瓶は予防的に引き上げられたが、その元になったバッチのうち検査で陽性だったのは5分の1にとどまると述べられており、全てが陰性と確認されたわけではないと分かる。',
        w: ['第1段落は、異味が「使用した果樹園の区画やりんごの配合によらず」およそ40本に1本の割合で現れたと明記している。第2段落は原因を、引退した圧搾機の樫材の割れ目に潜んでいた酢酸菌と特定している。瓶の由来を配合のひとつに絞る見方は、この2か所の記述と食い違う。',
            '正解。予防的に引き上げられた瓶について、その元になったバッチの5分の1が検査で陽性だったと述べられており、全てが不検出と確認されたわけではないと分かる。',
            '第3段落が述べているのは、最終18か月分の瓶が予防措置として3つの小売店から引き上げられたという事実だけである。引き上げにあたって事業者が公衆に向けて説明を行ったかどうかは、本文のどの段落も扱っていない。記事が理由を書いていることと、事業者が公表したかどうかは別の事柄である。',
            '第3段落は Bottles from the final eighteen months under the old press have also been pulled from three retailers as a precaution と述べており、対象の瓶は現に3つの小売店から引き上げられている。一度も引き上げられていないという内容は、この一文と正面から食い違う。'] },
    ],
  }),
];
