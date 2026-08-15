# TOEIC L&R 900 対策アプリ

## これは何か
親戚（40歳・高校英語教師・800点超保持）が 900 点台へ抜けるための演習アプリ。
ビルド不要の静的サイト。GitHub Pages にそのまま置ける。

## 作業体制（利用者の指示。以後も継続して適用する）
対話しているメインの Claude は**進捗管理と品質管理のみ**を担当し、実装作業そのものは行わない。
実作業は Agent ツールで次の3役を立てて分担させる。

| 役 | モデル | 担当 |
|---|---|---|
| 実装役 | Sonnet 5 | 問題データの作成・修正、コードの実装 |
| レビュー役 | Opus 5 | 実装役の成果物を1問ずつ監査する。英語の正誤、狙った論点が成立しているか、誤答が本当に誤りか、解説との整合 |
| オブザーバー | Opus 5 | 40歳・高校英語教師・800点台の利用者目線で、実際に画面を通して使い勝手と学習効果を確認する |

メインの Claude の職務は、3役への指示・成果の突き合わせ・`tools/` の検査実行・
PROGRESS.md と CLAUDE.md の更新。

**自己検算は当てにならない。** 過去の実績では新規作問の約1/4に欠陥が出た（383問に対し108件、
うち致命的20件）。**書き下ろしは必ず別の目の監査を通してから確定させる。**

## 収録内容の原則
- **TOEIC® の過去問・公式サンプルは一切使わない。** ETS 著作物であり公開・再配布されていない。
- 収録しているのは、公開されている**出題形式の仕様のみ**に合わせた完全オリジナルの書き下ろし。
- 形式仕様（本番と同じ）: Part 1:6 / 2:25 / 3:39 / 4:30 / 5:30 / 6:16 / 7:54 = 200問。
- リスニング音声は Web Speech API による合成。音声ファイルは持たない。

## 構成
```
index.html
assets/css/app.css        デザイン（紙/藍墨/朱の3色、light+dark）
assets/js/                app.js(ルータ) quiz.js(出題エンジン) store.js(localStorage/SRS)
                          analytics.js score.js audio.js charts.js render.js ui.js runtime.js
assets/js/views/          home drills mocks review analytics settings result exam
assets/data/topics.js     論点マスタ（37論点）
assets/data/scenes.js     Part 1 の SVG 場面（30種。模試30問とドリル9問が使う）。部品系は design/part1/SPEC.md に従う
design/part1/             Part 1 線画の設計仕様と見本 SVG。線画を触る前に SPEC.md を必ず読む
assets/data/registry.js   目録と遅延読み込み
assets/data/drills/*.js   論点別ドリル（23ファイル）
assets/data/mocks/volN*.js 予想模試（volN.js が集約、volN-xx.js が中身）
tools/                    品質管理ツール（下記）。依存は tools/package.json、node_modules は gitignore
```

## 動かす
```
python3 -m http.server 8777     # file:// では ES モジュールが動かない
```

## 品質管理ツール（`tools/`）
- `tools/validate.mjs` — 整合性チェック（パート別問題数・設問番号連番・選択肢数・`answer` 範囲・論点ID・
  場面ID・Part 6 空所数・Part 7 `insertAt`/`sentence`・id 重複、`why` の隣接参照〈`同上`等〉、
  選択肢の大小文字と空所位置の整合、`why[answer]` のみ「正解」始まりか、選択肢の重複、
  Part 1 の `scene`・`desc` 排他 など）。`--extra <ファイル…>` で registry 未登録のファイルも検査できる
- `tools/balance2.mjs` — 正解位置の平準化 codemod。`--by part`（既定、模試向け）と
  `--by topic`（論点単位、ドリル向け。ほぼ全部 Part 5 のドリルはパート単位では偏りが解消しないため）
- `tools/smoke.mjs` — Playwright による実ブラウザ通しテスト（27項目）。ポートが他プロセスに占有されて
  いれば自動で隣にずれる
- `tools/shots.mjs` — 主要画面のスクリーンショット取得
- `tools/scenecheck.mjs` — Part 1 線画の幾何検査（12項目）。Chromium で実描画し `getCTM()` で
  transform を解決して座標を測る。`--ref` で `design/part1/*.svg` の見本を検査
- 作業前後に `node tools/validate.mjs` を実行し、エラー0・警告0を確認すること
- **線画を変えたら `tools/scenecheck.mjs` に加えて、必ず 544px・light / dark で
  レンダリングして目視すること。**幾何検査を通っても「読み取れる」とは限らない
  （輪郭線が無く塗りだけだと `--card-2` と背景の差がわずかで、存在自体が読めない事故が実際に起きた）

## 問題データの書式
各ファイルは `export const UNITS = [...]`（模試の分割ファイルは `L1` `R2` などを export し `volN.js` で集約）。

ユニット: `{ id, part, kind, topics:[], level:1-5, questions:[...] }`
- `kind`: `p1`(写真) / `p2`(応答) / `set`(Part3,4) / `single`(Part5) / `doc`(Part6,7)
- `set` は `script:[{role,text}]`、`doc` は `docs:[...]` を持つ
- `p1` は `scene`（SVG場面ID）と `desc`（英語の場面描写テキスト）のどちらか一方を持つ。
  **模試の Part 1（30問）は `scene` のまま**（本番の見た目・時間感覚を再現するため変更しない）。
  **個別論点ドリルの Part 1 は原則 `desc` 方式**（`part1.js` の40問。数秒表示→消去→「もう一度見る」で再表示可）。
  線画では `is wearing` と `is putting on` のような動作の識別を作問できないための変更（`quiz.js` の `renderP1()` が両方式を分岐して描画する後方互換の実装）。
  **ただし線画でしか問えない論点はドリルでも `scene` 方式を使う**（`listening.js` の9問）。
  `is being + 過去分詞` の可否は「動作主が写っているか」で決まるため、絵がないと成立しない。
  `warehouse`（有人）と `warehouse-b`（無人）は什器座標を共有しており、同じ倉庫で人の有無だけを
  変えた対比が作れる（`p1v-01` と `p1v-09`）
- 模試の設問には通し番号 `no:1-200` が必須
- Part 6 の空所は本文に `{{1}}`〜`{{4}}`（ユニット内の何問目か）
- Part 7 の文挿入位置は本文に `[[1]]`〜`[[4]]`、設問に `insertAt` と `sentence`
- 話者ロール: `M-Am W-Am M-Br W-Br M-Au W-Au M-Cn W-Cn NARR`

解説は日本語。`exp`（なぜそうなるか）、`why`（選択肢ごとの検討・選択肢と同数）、`ja`（訳）、`vocab`（語注）。

## 難度 level の定義
`level` は **表示専用**（`quiz.js` のヘッダ、`drills.js`・`result.js` の一覧に出るだけ）。
SRS の間隔・出題順・絞り込み・推定スコアには一切関与しない。

新規に問題を作るときはこの目盛りに従うこと（level 1・2 は作らない。このアプリは 800→900 帯専用）:
- **level 3** = 800〜860帯。文全体・複数文の統合が要る／基本コロケーション
- **level 4** = 860〜900帯。900帯特有の語彙・紛らわしい語・間接応答など「知らなければ解けない」知識
- **level 5** = 900+。構造的トラップ／複数情報源の統合

既存データ（このセッション以前に作られた問題）は付け直していない。`set`/`doc` は1ユニットに複数設問が
乗り、`level` はユニット単位でしか持てないため、設問単位で正確に付け直すには `question.level` の新設が要る。

## 品質の決まり
- 正解位置は A/B/C/D をほぼ均等にする。偏ったら平準化ツールで直す（選択肢と `why` を対で入れ替える）。
- 数値・日付など順序に意味がある選択肢は並べ替えない。
- 解説文中で `(A)` のように記号を参照するときは、入れ替えで壊れないか確認する。
- 図表問題は、図表と音声スクリプトの数値が矛盾していないか必ず突き合わせる。
- `p7ins`（位置選択）と `graphic`（図表）は選択肢が `[1]`〜`[4]` や金額・時刻など順序を持つため、
  `balance2.mjs` が正解位置の入れ替え対象から構造的に除外する。これは正しい挙動。
