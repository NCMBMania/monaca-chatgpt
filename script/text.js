// `superagent` ライブラリをインポートする
const request = require('superagent');

// OpenAI API のエンドポイントと API キーを定義する
const url = 'https://api.openai.com/v1/chat/completions';
const apiKey = 'YOUR_OPENAI_API_KEY';

// 使用する AI モデルの名前を定義する
const model = 'gpt-3.5-turbo';

// 関数をエクスポートする
module.exports = async function(req, res) {
  // リクエストボディからコンテンツを取得する
  const { content } = req.body;
  // リクエストボディから messages を取得するか、空の配列を設定する
  const messages = req.body.messages || [];
  // ユーザーのメッセージを messages 配列に追加する
  messages.push({content, role: 'user'});
  // OpenAI API に送信するパラメータを設定する
  const params = {
    model,
    messages,
  };
  // OpenAI API に POST リクエストを送信し、レスポンスを受け取る
  const response = await request.post(url)
    .set('Content-Type', 'application/json') // ヘッダーに Content-Type を設定する
    .set('Authorization', `Bearer ${apiKey}`) // ヘッダーに API キーを設定する
    .send(JSON.stringify(params)); // JSON 形式のパラメータを送信する

  // レスポンスから AI の返答を取得し、クライアントに JSON 形式で返す
  res.json({text: response.body.choices[0].message.content});
}
