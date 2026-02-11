import { defineConfig } from "slidev-prerender";

export default defineConfig({
  slidevDist: "./dist",
  outDir: "./dist-prerender",
  pages: [
    {
      slug: "1",
      meta: {
        title: "SlidevにページごとのOGPを設定したい！ - タイトル",
        description: "SlidevにページごとのOGPを設定する方法について発表します",
        seoMeta: {
          ogTitle: "SlidevにページごとのOGPを設定したい！",
          ogDescription: "いちむら ゆうま",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/1.png"
        },
      },
    },
    {
      slug: "2",
      meta: {
        title: "自己紹介 - いちむらゆうま",
        description: "発表者の自己紹介",
        seoMeta: {
          ogTitle: "自己紹介 - いちむらゆうま | petaxa",
          ogDescription: "26卒 Web系エンジニア、Vueがすき",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/2.png"
        },
      },
    },
    {
      slug: "3",
      meta: {
        title: "SNSでスライドが共有されているとき",
        description: "同じOG Imageだと何に言及しているかわかりづらい問題",
        seoMeta: {
          ogTitle: "SNSでスライドが共有されているとき",
          ogDescription: "おなじOG Imageだと何に言及しているかわかりづらい!",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/3.png"
        },
      },
    },
    {
      slug: "4",
      meta: {
        title: "Slidevでは1つのOG Imageしか設定できない",
        description: "Slidev単体の制限について",
        seoMeta: {
          ogTitle: "Slidevでは1つのOG Imageしか設定できない",
          ogDescription: "Slidevの制限とその解決策について",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/4.png"
        },
      },
    },
    {
      slug: "5",
      meta: {
        title: "slidev-prerender",
        description: "slidev-prerenderの紹介",
        seoMeta: {
          ogTitle: "slidev-prerender",
          ogDescription: "SlidevにページごとのOGPを設定できるツール",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/5.png"
        },
      },
    },
    {
      slug: "6",
      meta: {
        title: "そもそもSlidevとは",
        description: "Slidevの概要説明",
        seoMeta: {
          ogTitle: "そもそもSlidevとは",
          ogDescription: "Webベースのスライドメーカー",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/6.png"
        },
      },
    },
    {
      slug: "7",
      meta: {
        title: "そもそもSlidevとは - 詳細",
        description: "Slidevの特徴について",
        seoMeta: {
          ogTitle: "そもそもSlidevとは",
          ogDescription: "Webベースのスライドメーカー、マークダウンベースのテキストでスライドを記述する",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/7.png"
        },
      },
    },
    {
      slug: "8",
      meta: {
        title: "OGPとはなにか",
        description: "OpenGraphProtocolの説明",
        seoMeta: {
          ogTitle: "OGPとはなにか",
          ogDescription: "Webページの情報を記述するためのデータ形式",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/8.png"
        },
      },
    },
    {
      slug: "9",
      meta: {
        title: "どうしてslidev-prerenderが必要なの",
        description: "slidev-prerenderが必要な理由",
        seoMeta: {
          ogTitle: "どうしてslidev-prerenderが必要なの",
          ogDescription: "slidevはSPA、headタグはすべてのスライドで共通",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/9.png"
        },
      },
    },
    {
      slug: "10",
      meta: {
        title: "どうやって解決したの",
        description: "解決方法の概要",
        seoMeta: {
          ogTitle: "どうやって解決したの",
          ogDescription: "ページごとにHTMLを作成する",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/10.png"
        },
      },
    },
    {
      slug: "11",
      meta: {
        title: "どうやって解決したの - 詳細",
        description: "具体的な解決方法",
        seoMeta: {
          ogTitle: "どうやって解決したの",
          ogDescription: "ページの数だけHTMLを生成し、headを上書き。プラグイン機能でHTML自体の書き換えも可能",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/11.png"
        },
      },
    },
    {
      slug: "12",
      meta: {
        title: "簡単なハンズオン - configファイルを用意する",
        description: "slidev-prerenderの設定ファイル作成",
        seoMeta: {
          ogTitle: "簡単なハンズオン - configファイルを用意する",
          ogDescription: "slidev-prerender.config.tsの設定方法",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/12.png"
        },
      },
    },
    {
      slug: "13",
      meta: {
        title: "簡単なハンズオン - slidevをビルド",
        description: "Slidevのビルド手順",
        seoMeta: {
          ogTitle: "簡単なハンズオン - slidevをビルド",
          ogDescription: "pnpm buildでSlidevをビルド",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/13.png"
        },
      },
    },
    {
      slug: "14",
      meta: {
        title: "簡単なハンズオン - slidev-prerenderでビルド",
        description: "slidev-prerenderでのビルド手順",
        seoMeta: {
          ogTitle: "簡単なハンズオン - slidev-prerenderでビルド",
          ogDescription: "pnpm prerenderでビルド実行",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/14.png"
        },
      },
    },
    {
      slug: "15",
      meta: {
        title: "簡単なハンズオン - ビルド完了！",
        description: "ビルド完了後の成果物",
        seoMeta: {
          ogTitle: "簡単なハンズオン - ビルド完了！",
          ogDescription: "プリレンダリング完了",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/15.png"
        },
      },
    },
    {
      slug: "16",
      meta: {
        title: "slidev-prerenderについて - ビルドプロセス",
        description: "slidev-prerenderのビルドプロセス詳細",
        seoMeta: {
          ogTitle: "slidev-prerenderについて - ビルドプロセス",
          ogDescription: "Slidevのdistをcopy、sirvでサーブ、playwrightでHTML取得",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/16.png"
        },
      },
    },
    {
      slug: "17",
      meta: {
        title: "slidev-prerenderについて - sirv",
        description: "使用しているパッケージ: sirv",
        seoMeta: {
          ogTitle: "slidev-prerenderについて - sirv",
          ogDescription: "Viteでも使われている速い静的ファイル配信ミドルウェア",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/17.png"
        },
      },
    },
    {
      slug: "18",
      meta: {
        title: "slidev-prerenderについて - unhead",
        description: "使用しているパッケージ: unhead",
        seoMeta: {
          ogTitle: "slidev-prerenderについて - unhead",
          ogDescription: "HTMLのheadをJSで管理できるライブラリ",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/18.png"
        },
      },
    },
    {
      slug: "19",
      meta: {
        title: "slidev-prerenderについて - ドキュメント",
        description: "slidev-prerenderのドキュメント案内",
        seoMeta: {
          ogTitle: "ぜひ、ドキュメントを...!",
          ogDescription: "https://petaxa.github.io/slidev-prerender/",
          ogImage: "https://petaxa.github.io/intro-slidev-prerender/ogp/19.png"
        },
      },
    },
  ],
  port: 3030,
});
