# cosme_markup
コスメ商品静的ページのマークアップ

## 実装したサイト
- [AWESOME COSME](https://works03.k-watanabe39.com/)

BASIC認証をかけてます。

ID：works<br>
PW：works

### ポイント
- 要所要所にフェードインアニメーションを使用
- 画像部分にはパララックス効果を付与
- 各リンクhover時のアニメーション実装

## 制作環境について
### Gulpを導入
Gulpを導入することによって下記を全て自動化しています。<br>
※Sass公式推奨の「Dart Sass」で記述しております
- Sassのコンパイル
- ブラウザシンク(ファイル編集後、ブラウザを更新→反映する自動リロードを行う)
- ベンダープレフィックスの付与
- 画像の自動圧縮
### Gulpの起動
1. gulpfile.jsおよびpackage.jsonがある状態で下記コマンドを打つ。

※node_modulesおよびpackage-lock.jsonが生成される
```
$ npm i
```
2. gulp起動の下記コマンドを打つ。
```
$ npx gulp
```
3. gulpfile.jsに記述されたタスクが実行されます。


## 経緯
[CODE MENTOR](https://codementor.arutega.jp/)様での課題を基に制作しました。
