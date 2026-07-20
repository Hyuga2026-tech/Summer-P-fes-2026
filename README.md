# 湊町夏祭り ホームページ

タイムスケジュール・屋台紹介・店舗情報を掲載した、夏祭り用の1ページサイトです。
HTML / CSS / JavaScript のみで作られており、サーバーは不要です。

## ファイル構成

```
natsumatsuri/
├── index.html   ページ本体（内容はここを編集）
├── style.css    デザイン・配色
├── script.js    スクロールアニメーションなど
└── README.md    このファイル
```

## ローカルで確認する（VSCode）

1. VSCodeでこのフォルダを開く
2. 拡張機能「Live Server」（作者: Ritwick Dey）をインストール
3. `index.html` を右クリック →「Open with Live Server」
4. ブラウザが自動で開き、保存するたびに更新される

PyCharmの場合は、`index.html` を開いてエディタ右上のブラウザアイコンから
「Open in Browser」でも確認できます。

## 内容の編集方法

- **タイムスケジュール**：`index.html` 内の `<section id="schedule">` にある
  `<li class="timeline__item">` を時間の分だけコピーして編集
- **屋台紹介**：`<section id="stalls">` にある `<article class="stall-card">`
  を店舗の数だけコピーして編集
- **店舗情報**：`<section id="info">` にある `<div class="info-card">` を編集
- 配色を変えたい場合は `style.css` 冒頭の `:root { ... }` にある
  `--ai-deep` `--lantern-red` `--gold` などの色コードを変更するだけで
  サイト全体に反映されます

## GitHubで公開する手順

1. GitHubで新しいリポジトリを作成する（例: `natsumatsuri-hp`）
2. ターミナル（VSCode内でもOK）で以下を実行

   ```bash
   cd natsumatsuri
   git init
   git add .
   git commit -m "夏祭りホームページ 初期公開"
   git branch -M main
   git remote add origin https://github.com/ユーザー名/natsumatsuri-hp.git
   git push -u origin main
   ```

3. GitHubのリポジトリページで **Settings → Pages** を開く
4. 「Build and deployment」の Source を **Deploy from a branch** にし、
   Branch を **main / (root)** に設定して Save
5. 数分後、`https://ユーザー名.github.io/natsumatsuri-hp/` でサイトが公開される

## 更新するとき

内容を変えたら、以下のコマンドで再度アップロードすれば数分で反映されます。

```bash
git add .
git commit -m "内容を更新"
git push
```
