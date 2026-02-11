# SlidevにページごとのOGPを設定したい！

slidev-prerenderの紹介スライド

## 開発

```bash
pnpm install
pnpm dev
```

## ビルド

```bash
pnpm build
pnpm prerender
```

## OGP画像の生成

global-bottom.vueを非活性にしないと動かない

```bash
pnpm export-ogp
```
