import React from "react";
import { useParams } from "react-router-dom";
import Kiji from "../data/kiji.json"; // 記事データをインポート

const NewsDetail = () => {
  // useParamsフックでURLの:idを取得
  const { id } = useParams();

  // 記事IDに基づいて記事を検索
  const article = Kiji.find((article, index) => index + 1 === parseInt(id)); 

  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} />
      <p>{article.content}</p>
      <p>カテゴリ: {article.category}</p>
    </div>
  );
};

export default NewsDetail;
