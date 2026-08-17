# guu-note 模写コーディング

レストラン・カフェサイト「guu-note」を参考にした模写コーディング作品です。

参考サイトのデザインやレイアウトを観察し、HTML / SCSS / JavaScriptを使用して実装しています。

※本制作は学習目的の模写作品です。

---

## 🔗 参考サイト

https://goo-note.info/

---

## 📖 制作概要

- 制作：個人制作
- 種別：Webサイト模写
- 目的：HTML / SCSS / JavaScriptの実践学習
- 参考サイト：guu-note

今回の制作では、デザインの再現だけではなく、サイト全体の構造やレスポンシブ対応、SCSSの設計、JavaScriptによるインタラクションまで意識しています。

---

## 🛠 使用技術

- HTML
- SCSS（Sass）
- JavaScript
- Node.js
- npm
- Git
- GitHub
- Swiper

### CSS設計

- FLOCSS
- BEMをベースにした命名

---

## ✨ 実装内容

- レスポンシブWebデザイン
- ハンバーガーメニュー
- ナビゲーション
- Swiperを使用したスライダー
- スクロール・表示アニメーション
- パララックス表現
- hoverアニメーション
- レストラン・カフェのメニュー表示
- SNS・LINEなどのリンクエリア

---

## 🎯 制作で意識したこと

### HTML構造

ページの情報構造を意識し、header・main・section・footerなどのセマンティックなHTML要素を使用しています。

### CSS設計

FLOCSSをベースに、役割ごとにSCSSを分割しています。

```text
l- → layout
c- → component
p- → project
u- → utility
```

共通して使用するパーツはcomponent、ページ固有のスタイルはprojectとして整理しています。

### レスポンシブ対応

PCとスマートフォンでレイアウトや画像を切り替え、画面幅に応じて表示が崩れないように調整しています。

### JavaScript

ハンバーガーメニューやスライダー、アニメーションなど、ユーザー操作やスクロールに合わせた動きを実装しています。

---

## 📂 ディレクトリ構成

```text
guu-note/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── image/
│
├── scss/
│   ├── foundation/
│   ├── layout/
│   ├── component/
│   ├── project/
│   ├── utility/
│   └── style.scss
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## 💻 開発環境

- Node.js（LTS推奨）
- npm
- VS Code
- Git / GitHub

### Sassの監視

```bash
npm run sass
```

SCSSを編集すると、`assets/css`へ自動コンパイルされます。

### ローカル開発

```bash
npm run dev
```

Sassのコンパイルとローカルサーバーを同時に起動します。

---

## 📚 今回学んだこと

- 複数セクションを持つWebサイトのHTML設計
- FLOCSSを使ったSCSSのファイル分割
- BEMを意識したclass設計
- Flexbox / Gridを使ったレイアウト
- レスポンシブ対応
- JavaScriptによるUI操作
- Swiperの導入とカスタマイズ
- スクロール・パララックス表現
- Git / GitHubを使った制作管理

---

## 🔍 今後の改善

- コードの共通化・整理
- アニメーションの再現度向上
- アクセシビリティの改善
- HTMLのセマンティックな構造の見直し
- CSS / SCSSの保守性向上
- ページ表示速度の改善

---

## ⚠️ 注意

本サイトは学習目的で制作した模写作品です。

掲載されているデザイン・画像・文章等の著作権は各権利者に帰属します。
商用利用を目的としたものではありません。
