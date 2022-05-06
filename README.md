# Monaca × Framework7 × NCMBのベースアプリ

Monacaで公開されているFramework7テンプレートはv6.0.11や5系で古くなっているので、オリジナルのテンプレートを作成しました。

## 使い方

インポートにて、下記URLを指定してください。

```
https://github.com/NCMBMania/MonacaFramework7Base/archive/refs/heads/main.zip
```

## ライブラリのバージョン

- Framework7: 7.0.2
- NCMB JavaScript SDK: 3.1.3

## NCMBの初期化

NCMBの初期化処理は実行済みです（`js/app.js` にて）。ただしアプリケーションキー、クライアントキーは書き換えてください。

`js/config.json` を開くと、次のようになっています。

```json
{
	"applicationKey": "YOUR_APPLICATION_KEY",
	"clientKey": "YOUR_CLIENT_KEY"
}
```

この `YOUR_APPLICATION_KEY` と `YOUR_CLIENT_KEY` を書き換えてください。

## License

MIT.
