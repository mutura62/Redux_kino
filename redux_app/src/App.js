import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchNews from "./components/SearchNews";
import NewsBlock from "./components/NewsBlock";
import NewsDetail from "./components/NewsDetail"; // 修正: 正しいコンポーネントをインポート
import Kiji from "./data/kiji.json";
import { Provider } from 'react-redux';
import store from './store'; 

const App = () => {
  // Reduxストアから検索キーワードを取得
  const searchTerm = useSelector((state) => state.search.SearchWord);

  // 検索キーワードでKijiをフィルタリング
  const filteredKiji = Kiji.filter(
    (article) =>
      article.title.includes(searchTerm) || article.content.includes(searchTerm)
  );

  console.log("検索後：", filteredKiji);

  return (
    <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <h1>News</h1>
            </header>
            <SearchNews />
            <Routes>
              {/* トップページでニュースリストを表示 */}
              <Route
                path="/"
                element={
                  filteredKiji.length > 0 ? (
                    filteredKiji.map((article, index) => (
                      <NewsBlock
                        key={index}
                        className="NewsBlock"
                        title={article.title}
                        image={article.image}
                        content={article.content}
                        category={article.category}
                        articleId={index + 1} // 記事IDを渡す
                      />
                    ))
                  ) : (
                    <p>結果なし</p>
                  )
                }
              />

              {/* 記事詳細ページを動的ルートで表示 */}
              <Route path="/Kiji/:id" element={<NewsDetail />} />
            </Routes>
          </div>
        </BrowserRouter>
    </Provider>
  );
};

export default App;
