# pglite-sample

## プロジェクト概要

このリポジトリは、PGliteの検証およびDDD（ドメイン駆動設計）の実践を目的としたサンプルプロジェクトです。
`project-bd-client`のバックエンド実装例としても利用しています。

## 技術スタック

| 種類      | 技術              |
| --------- | ----------------- |
| Backend   | TypeScript, Hono  |
| ORM       | Prisma            |
| Database  | PGlite            |

## セットアップ手順

1. 依存パッケージのインストール
   ```sh
   npm install
   ```
2. 開発サーバーの起動
   ```sh
   npm run dev
   ```
3. アプリケーションの確認
   [http://localhost:5000](http://localhost:5000) をブラウザで開く

## DDD検証について

本リポジトリではDDDの設計パターンを検証しています。

- 悪い例: `src/01_article`
- 良い例: `src/02_article`

設計の違いを比較しながら学習・検証できます。

## 補足
- 技術検証や設計練習のためのサンプルです。
- ご自由にご利用・改変ください。


