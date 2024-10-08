import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { up, down } from "./Redux/Slice/LikeCountSlice"; // 正しいアクションクリエーターをインポート

const LikeCounter = ({ articleId }) => {
  // likeCountsオブジェクトから指定された記事IDのいいね数を取得
  const count = useSelector((state) => state.likeCounter.likeCounts[articleId] || 0);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count} いいね</p>
      <button onClick={() => dispatch(up({ articleId }))}>
        いいね
      </button>
      <button onClick={() => dispatch(down({ articleId }))}>
        よくないね
      </button>
    </div>
  );
};

export default LikeCounter;
