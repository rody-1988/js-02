# Guu-note

個人制作・模写コーディングです。
[goo-note](https://goo-note.info/)
レストラン・カフェのお店

---

## 使用技術

- HTML
- Sass（SCSS）
- JavaScript
- Node.js
- npm
- Git
- GitHub
- CSS設計（FLOCSS + BEM風）

---

# ディレクトリ構成

```txt
scss/
├── foundation/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _reset.scss
│   ├── _base.scss
│   └── _index.scss
│
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   ├── _container.scss
│   └── _index.scss
│
├── component/
│   ├── _button.scss
│   ├── _card.scss
│   ├── _title.scss0
│   ├── _animation.scss
│   └── _index.scss
│
├── project/
│   ├── _fv.scss
│   ├── _news.scss
│   ├── _lunch.scss
│   ├── _alacarte.scss
│   ├── _kids.scss
│   ├── _cake.scss
│   ├── _drink.scss
│   ├── _access.scss
│   └── _index.scss
│
├── utility/
│   ├── _utility.scss
│   └── _index.scss
│
└── style.scss
```

---

# 開発環境

## 必要環境

- Node.js（LTS版推奨）
- npm
- Git
- VS Code

---

# 初回セットアップ

## 1. プロジェクト作成

```bash
mkdir project-name
cd project-name
```

### メモ

- mkdir → フォルダ作成
- cd → フォルダ移動

---

## 2. Git初期化

```bash
git init
```

### 確認

```bash
git status
```

### メモ

このフォルダをGit管理する。

---

## 3. npm初期化

```bash
npm init -y
```

生成ファイル

```txt
package.json
```

### メモ

プロジェクト情報を管理するファイル。

---

## 4. Sassインストール

```bash
npm install sass
```

生成ファイル

```txt
node_modules/
package-lock.json
```

---

## 5. package.json設定

```json
{
  "scripts": {
    "sass": "sass --watch scss:assets/css"
  }
}
```

---

## 6. Sass監視開始

```bash
npm run sass
```

### メモ

scss

```txt
scss/style.scss
```

↓

css

```txt
assets/css/style.css
```

へ自動コンパイルされる。

---

# GitHub運用

## .gitignore作成

```bash
touch .gitignore
```

内容

```txt
node_modules/
```

---

## なぜ必要？

node_modules は npm が自動生成する。

GitHubにはアップロードせず、

```txt
package.json
package-lock.json
```

から再生成する。

---

## GitHubへPush

初回

```bash
git remote add origin リポジトリURL
git branch -M main
git push -u origin main
```

2回目以降

```bash
git push
```

---

# Git運用

## コミット例

初期設定

```bash
git add .
git commit -m "初期設定"
```

ヘッダー完成

```bash
git add .
git commit -m "header作成"
```

FV完成

```bash
git add .
git commit -m "fv作成"
```

Feature完成

```bash
git add .
git commit -m "feature作成"
```

Contact完成

```bash
git add .
git commit -m "contact作成"
```

---

## メモ

戻りたいポイントごとにコミットする。

---

# CSS設計

## layout

```html
l-header l-container
```

サイト全体のレイアウト管理用。

### メモ

- 横幅
- header
- footer
- grid
- flex

など配置を担当する。

見た目より構造を意識する。

---

## component

```html
c-button c-card c-title
```

再利用するパーツ用。

### メモ

別ページでも使い回せるものをcomponent化する。

例

- ボタン
- カード
- タイトル
- ナビ
- ハンバーガーボタン
- フェードインアニメーション

---

## project

```html
p-fv p-comcept
```

ページ固有のスタイル用。

### メモ

そのページだけで使うclassを書く。

再利用しない。

---

## utility

```html
u-center u-hidden
```

微調整用。

### メモ

utilityを増やしすぎない。

必要になった時だけ追加する。

---

# Sassの管理

## foundation/\_index.scss

```scss
@forward "variables";
@forward "mixins";
@forward "reset";
@forward "base";
```

---

## 各ファイルでの読み込み

```scss
@use "../foundation" as *;
```

### メモ

foundationで変数・mixinをまとめて管理する。

---

## style.scss

```scss
@use "foundation";
@use "layout";
@use "component";
@use "project";
@use "utility";
```

### メモ

style.scssには直接CSSを書かない。

読み込み専用にする。

---

# media query

## 使用例

```scss
@include sp {
}
```

---

## mixin

```scss
@mixin sp {
  @media screen and (max-width: #{$breakpoint-sp}) {
    @content;
  }
}
```

### メモ

スマホ対応を統一して管理する。

---

# 命名ルール

```txt
l- → layout
c- → component
p- → project
u- → utility
```

---

# コーディングルール

- component化を意識する
- 再利用できるclass名をつける
- class名は見た目ではなく役割でつける
- style.scssには直接CSSを書かない
- Sassを分割して管理する
- layoutに余白を書きすぎない
- section余白はproject側で管理する
- 共通化できるものはcomponent化する
- HTMLを先に組み、その後Sassを書く

---

# 自分用メモ

## 困ったら考えること

### これは再利用する？

YES → component

NO → project

---

### これは配置？

YES → layout

---

### このclass名は後で見て意味が分かる？

分からないなら修正する。

---

### このスタイルは共通化できる？

YES → component

NO → project

---

# 今後追加予定

- ハンバーガーメニュー
- utility拡張
- animation
- componentライブラリ化
- Swiperテンプレート化
- npmライブラリ管理
- Vite導入
- React学習
