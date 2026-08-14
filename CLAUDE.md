# 朱記（SHUKI） — TOEIC L&R 900 対策アプリ

## これは何か
親戚（40歳・高校英語教師・800点超保持）が 900 点台へ抜けるための演習アプリ。
ビルド不要の静的サイト。GitHub Pages にそのまま置ける。

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
assets/data/topics.js     論点マスタ
assets/data/scenes.js     Part 1 の SVG 場面
assets/data/registry.js   目録と遅延読み込み
assets/data/drills/*.js   論点別ドリル
assets/data/mocks/volN*.js 予想模試（volN.js が集約、volN-xx.js が中身）
```

## 動かす
```
python3 -m http.server 8777     # file:// では ES モジュールが動かない
```

## 問題データの書式
各ファイルは `export const UNITS = [...]`（模試の分割ファイルは `L1` `R2` などを export し `volN.js` で集約）。

ユニット: `{ id, part, kind, topics:[], level:1-5, questions:[...] }`
- `kind`: `p1`(写真) / `p2`(応答) / `set`(Part3,4) / `single`(Part5) / `doc`(Part6,7)
- `set` は `script:[{role,text}]`、`doc` は `docs:[...]` を持つ
- 模試の設問には通し番号 `no:1-200` が必須
- Part 6 の空所は本文に `{{1}}`〜`{{4}}`（ユニット内の何問目か）
- Part 7 の文挿入位置は本文に `[[1]]`〜`[[4]]`、設問に `insertAt` と `sentence`
- 話者ロール: `M-Am W-Am M-Br W-Br M-Au W-Au M-Cn W-Cn NARR`

解説は日本語。`exp`（なぜそうなるか）、`why`（選択肢ごとの検討・選択肢と同数）、`ja`（訳）、`vocab`（語注）。

## 品質の決まり
- 正解位置は A/B/C/D をほぼ均等にする。偏ったら平準化ツールで直す（選択肢と `why` を対で入れ替える）。
- 数値・日付など順序に意味がある選択肢は並べ替えない。
- 解説文中で `(A)` のように記号を参照するときは、入れ替えで壊れないか確認する。
- 図表問題は、図表と音声スクリプトの数値が矛盾していないか必ず突き合わせる。
