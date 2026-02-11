---
# try also 'default' to start simple
theme: seriph
title: SlidevにページごとのOGPを設定したい！
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
class: text-center
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 35min
bgCenter:
  x: 80
  y: 40
---

<p class="text-12">SlidevにページごとのOGPを設定したい！</p>

いちむら ゆうま

---
bgCenter:
  x: 20
  y: 40
---

<div class="flex gap-5 items-center">
  <img src="/imgs/petaxa-icon.png" class="w-50 rounded" alt="発表者のSNSアイコン" />
  <p class="text-10">いちむらゆうま | petaxa</p>
</div>

<div class="mt-20 ml-10 flex flex-col">
  <p class="text-8">26卒 Web系エンジニア</p>
  <p class="text-8">Vueがすき</p>
</div>

---
bgCenter:
  x: 30
  y: 60
---

<p class="text-2xl mb-4">SNSでスライドが共有されているとき...</p>

<div class="absolute w-full">
  <div class="relative flex items-center justify-center h-100 mb-8">
    <img v-click="[1, 2]" src="/imgs/post1.png" class="absolute w-150" alt="SNSでうさぎにんじゃさんがスライドの感想をポストしている" />
    <img v-click="[2, 3]" src="/imgs/post2.png" class="absolute w-150" alt="SNSでかめさんがスライドの感想をポストしている" />
    <img v-click="[3, 4]" src="/imgs/post3.png" class="absolute w-150" alt="SNSでやきとりさんがスライドの感想をポストしている" />
  </div>
</div>

<div class="grid grid-cols-3 gap-4 mt-20 mb-20">
  <img v-click="4" src="/imgs/post1.png" class="w-full" alt="SNSでうさぎにんじゃさんがスライドの感想をポストしている" />
  <img v-click="4" src="/imgs/post2.png" class="w-full" alt="SNSでかめさんがスライドの感想をポストしている" />
  <img v-click="4" src="/imgs/post3.png" class="w-full" alt="SNSでやきとりさんがスライドの感想をポストしている" />
</div>

<p v-click="4" class="text-center text-10 mt-4">おなじOG Imageだと何に言及しているかわかりづらい!</p>

---
layout: cover
bgCenter:
  x: 70
  y: 30
---

<div class="h-full flex items-center justify-center">
  <p class="text-10">Slidevでは1つのOG Imageしか設定できない</p>
</div>

---
bgCenter:
  x: 50
  y: 50
---

<div class="h-full flex flex-col items-center justify-center">
  <div class="flex items-center justify-center gap-6">
    <img src="/imgs/slidev-prerender-icon.svg" class="w-32 h-32" alt="slidev-prerenderのアイコン" />
    <p class="text-6xl font-bold">slidev-prerender</p>
  </div>
  <div class="flex items-center justify-center gap-1 mt-5">
    <img src="https://img.shields.io/npm/v/slidev-prerender.svg" alt="npm version">
    <img src="https://img.shields.io/npm/dm/slidev-prerender.svg" alt="npm downloads">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
  </div>
</div>

---
bgCenter:
  x: 20
  y: 70
---

<!-- そもそもslidevとはなにか -->
<!-- MarkdownベースでWebにレンダリングされるスライド作成ツール -->

## そもそもSlidevとは

<div class="flex items-center justify-center h-100">
  <img src="/imgs/slidev-og-image.png" w-150 alt="npm version">
</div>

---
bgCenter:
  x: 85
  y: 45
---

## そもそもSlidevとは

<div class="h-full flex items-center text-6 space-y-4">

- Webベースのスライドメーカー
- マークダウンベースのテキストでスライドを記述する

</div>

---
bgCenter:
  x: 40
  y: 25
---

<!-- OGPとはなにか -->
<!-- Webページの情報を記述するための形式 -->
<!-- これを設定しておくとリンクを貼ったときに一緒に表示されたりする -->

## OGPとはなにか

<div class="h-full flex items-center text-6 space-y-4">

- OpenGraphProtocol
- Webページの情報を記述するためのデータ形式
- headタグの中に設定できる
- 設定しておくとアプリケーション側が情報を読み取ってサムネイルを表示してくれる

</div>

---
bgCenter:
  x: 65
  y: 65
---

<!-- どうしてslidev単体だとできないのか -->
<!-- slidevはSPA -->
<!-- ひとつのHTMLの中身をCSRで入れ替えることでページを切り替えている -->
<!-- つまり、headは常に一つ -->

<!-- ひとことで答えを言ってから詳しく解説がいいね -->

## どうしてslidev-prerenderが必要なの

<div class="h-full flex items-center text-6 space-y-4">

- slidevはSPA
- ひとつのHTMLの中身を入れ替えることでページの切り替えを行う
  - = headタグはすべてのスライドで共通

</div>

---
bgCenter:
  x: 25
  y: 35
---

<!-- どういう方法でそれを解決しているのか -->
<!-- ページごとにHTMLを作れば解決 -->
<!-- ページの数だけHTMLを生成し、headerを上書き -->
<!-- プラグインでそれ以外の書き換えもできるようにしました -->

<!-- ひとことで答えを言ってから詳しく解説がいいね -->

## どうやって解決したの

<div class="h-full flex items-center justify-center">
  <p class="text-10">ページごとにHTMLを作成する</p>
</div>

---
bgCenter:
  x: 75
  y: 55
---

## どうやって解決したの

<div class="h-full flex items-center text-6 space-y-4">

- ページの数だけHTMLを生成し、headを上書き
- プラグイン機能を用意し、HTML自体の書き換えもできる

</div>
---
bgCenter:
  x: 45
  y: 70
---

<!-- 簡単なハンズオン -->

## 簡単なハンズオン

### 1. configファイルを用意する

<div class="items-center justify-center h-full w-full">

```ts
// slidev-prerender.config.ts
import { defineConfig } from "slidev-prerender";

export default defineConfig({
  slidevDist: "./dist",
  outDir: "./dist-prerender",
  pages: [
    {
      slug: "1",
      meta: {
        title: "いちぺーじめ",
        seoMeta: {
          ogTitle: "PAGE ONE!",
          ogImage: "./slide-one.png"
        },
      },
    },
    // ...
  ],
  port: 3030,
});
```

</div>

---
bgCenter:
  x: 60
  y: 20
---

## 簡単なハンズオン

### 2. slidevをビルド

<div class="flex items-center justify-center h-90">

<div class="w-90%">

```bash
pnpm build
```

</div>

</div>

<style>
/* 通常コードブロック */
code,
pre {
  font-size: 24px !important;
}
</style>

---
bgCenter:
  x: 35
  y: 50
---

## 簡単なハンズオン

### 3. slidev-prerenderでビルド

<div class="flex items-center justify-center h-90">

<div class="w-90%">

```bash
pnpm prerender
# "prerender": "slidev-prerender"
```

</div>

</div>

<style>
/* 通常コードブロック */
code,
pre {
  font-size: 24px !important;
}
</style>

---
bgCenter:
  x: 80
  y: 35
---

## 簡単なハンズオン

### 4. ビルド完了！

<div class="h-full flex items-center justify-center">
  <img class="h-99" src="/imgs/prerendered-dir.png" alt="prerender後のファイル構造" />
</div>

---
bgCenter:
  x: 55
  y: 60
---

<!-- 実装について、利用した技術についていくつか説明 -->
<!-- sirvでサーブ、playwrightでHTML取得 -->

## slidev-prerenderについて -ビルドプロセス

<div class="h-full flex items-center text-6">

1. Slidevのdistをcopy
2. sirvでSlidevのdistをサーブ
3. 設定ファイルのページだけHTML取得を繰り返す
   1. playwrightでサーブしたスライドにアクセス
   2. HTMLを取得
   3. unheadでheadを書き換え
   4. プラグインを実行
4. ファイル書き出し

</div>

---
bgCenter:
  x: 25
  y: 45
---

## slidev-prerenderについて -使ってるパッケージ

### sirv

<div class="flex items-center justify-center">
  <img class="w-100" src="/imgs/sirv-og-image.png" alt="prerender後のファイル構造" />
</div>

<div class="flex items-center mt-10 text-6">

- Viteでも使われている速い静的ファイル配信ミドルウェア
- プログラム内で利用するにはvercel/serveより安定感があった気がした(?)

</div>

---
bgCenter:
  x: 70
  y: 70
---

## slidev-prerenderについて -使ってるパッケージ

### unhead

<div class="flex items-center justify-center">
  <img class="w-100" src="/imgs/unhead-og-image.png" alt="prerender後のファイル構造" />
</div>

<div class="flex items-center mt-10 text-6">

- unjsのパッケージの1つ
- HTMLのheadをJSで管理できるライブラリ

</div>

---
bgCenter:
  x: 50
  y: 30
---

## slidev-prerenderについて

### ぜひ、ドキュメントを...!

https://petaxa.github.io/slidev-prerender/

<div class="flex justify-center">
  <img src="/imgs/document-qr.png" alt="slidev-prerenderのドキュメントへのQRコード" />
</div>
