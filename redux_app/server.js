const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path'); // JSONファイルのパスを解決するためにpathモジュールを使用
const app = express();

// ボディの内容をJSONとしてパースするためのミドルウェア
app.use(bodyParser.json());

// Kiji.jsonファイルへのパス（プロジェクトのdataディレクトリ内を想定）
const KijiFilePath = path.join(__dirname, 'data', 'kiji.json');

// 記事追加のAPIエンドポイント
app.post('/api/add-article', (req, res) => {
  const newArticle = req.body;

  // JSONファイルを読み込んで記事データを追加
  fs.readFile(KijiFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'ファイルの読み込みに失敗しました' });
    }

    // JSONデータをパース
    let articles = JSON.parse(data);
    newArticle.id = articles.length + 1; // 新しい記事にユニークなIDを付与
    articles.push(newArticle); // 記事を配列に追加

    // 更新されたデータをKiji.jsonに書き込み
    fs.writeFile(KijiFilePath, JSON.stringify(articles, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).json({ message: 'ファイルの更新に失敗しました' });
      }

      // 成功レスポンスを返す
      res.status(200).json({ message: '記事が正常に追加されました' });
    });
  });
});

// サーバーの起動
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`サーバーがポート${PORT}で起動しています`);
});
