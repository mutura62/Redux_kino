import React from "react";
import NewsTitle from "./NewsTitle";
// import NewsThumbnail from "./NewsThumbnail";
import NewsContent from "./NewsContent";
// import NewsCategory from "./NewsCategory";
import LikeCounter from "./LikeCounter";
import { Link } from 'react-router-dom';


function NewsBlock({ className, title, image, content, category, articleId }) { // articleId を受け取る
  return (
    <div className={className}>
      <NewsTitle title={title} />
      {/* <NewsThumbnail image={image} /> */}
      <NewsContent content={content} />
      {/* <NewsCategory category={category} /> */}
      <LikeCounter articleId={articleId} /> 
      <Link to={`/Kiji/${articleId}`}>詳細</Link>
    </div>
  );
}

export default NewsBlock;
