import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import SearchNews from "./components/SearchNews";
import NewsBlock from "./components/NewsBlock";
import Kiji from "./data/kiji.json";

const App = () => {
  // Reduxストアから検索キーワードを取得
  const searchTerm = useSelector((state) => state.search.SearchWord);

  // 検索キーワードでKijiをフィルタリング
  // タイトルか記事に語句を含む記事のみ
  const filteredKiji = Kiji.filter(
    (article) =>
      article.title.includes(searchTerm) || article.content.includes(searchTerm)
  );

  console.log("検索後：", filteredKiji);

  return (
    <div className="App">
      <header className="App-header">
        <h1>News</h1>
      </header>
      <SearchNews />
      {/* フィルタリングされた記事を表示 */}
      {filteredKiji.length > 0 ? (
        filteredKiji.map((article, index) => (
          <NewsBlock
            key={index} 
            className="NewsBlock"
            title={article.title}
            image={article.image}
            content={article.content}
            category={article.category}
            articleId={index + 1} 
          />
        ))
      ) : (
        <p>結果なし</p>  // 検索結果が見つからない場合のメッセージ
      )}
    </div>
  );
};

export default App;
