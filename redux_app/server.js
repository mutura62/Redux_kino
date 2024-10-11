const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 1337;

// JSONリクエストを解析するミドルウェア
app.use(express.json());

const kijiFilePath = path.resolve(__dirname, "src/data/kiji.json");

// タイトル更新用のAPIエンドポイント
app.put("/api/update-title/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  // kiji.jsonファイルを読み込む前に存在確認
  fs.access(kijiFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`ファイルが存在しません: ${kijiFilePath}`);
      return res.status(500).send("File does not exist");
    }

    // ファイルが存在すれば処理を続行
    fs.readFile(kijiFilePath, "utf8", (err, data) => {
      if (err) {
        console.error(`ファイルの読み込みに失敗しました: ${err.message}`);
        return res.status(500).send("Error reading file");
      }

      // 読み込んだ内容で記事を更新
      let articles = JSON.parse(data);
      const articleIndex = articles.findIndex(
        (article, index) => index + 1 === parseInt(id)
      );

      if (articleIndex !== -1) {
        articles[articleIndex].title = title;

        // 更新されたデータを書き込み
        fs.writeFile(kijiFilePath, JSON.stringify(articles, null, 2), (err) => {
          if (err) {
            console.error(`ファイルの書き込みに失敗しました: ${err.message}`);
            return res.status(500).send("Error writing file");
          }
          res.json({
            message: "Title updated successfully",
            article: articles[articleIndex],
          });
        });
      } else {
        res.status(404).json({ error: "Article not found" });
      }
    });
  });
});

// サーバー起動部分（閉じ括弧の問題を修正）
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
