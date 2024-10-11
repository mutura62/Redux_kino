import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Kiji from "../data/kiji.json"; // 記事データをインポート

const NewsEdit = () => {
  // useParamsフックでURLの:idを取得
  const { id } = useParams();

  // 記事IDに基づいて記事を検索
  const article = Kiji.find((article, index) => index + 1 === parseInt(id)); 

  // 新しいタイトルの状態を管理
  const [newTitle, setNewTitle] = useState(article.title);

  // タイトルの入力が変更された時の処理
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value); // 入力された値を状態にセット
  };

  // 更新ボタンが押された時の処理
  const handleUpdate = () => {
    // PUTリクエストを送信して、サーバー側でタイトルを更新する
    fetch(`/api/update-title/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('タイトルが更新されました:', data);
          alert('タイトルが更新されました!');
        })
        .catch(error => {
          console.error('エラーが発生しました:', error);
        });
      
  };

  return (
    <div>      
      {/* タイトル編集用のフォーム */}

      <input
        type="text"
        value={newTitle}
        onChange={handleTitleChange}
      />

      <button onClick={handleUpdate}>更新</button>

      <p>{article.content}</p>
      <p>カテゴリ: {article.category}</p>
    </div>
  );
};

export default NewsEdit;
