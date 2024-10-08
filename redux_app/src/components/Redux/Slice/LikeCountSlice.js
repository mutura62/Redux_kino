import { createSlice } from '@reduxjs/toolkit';

// 初期状態の定義
const initialLikeState = {
  likeCounts: {}, 
};

const likeSlice = createSlice({
  name: 'likeCounter',
  initialState: initialLikeState,
  reducers: {
    up: (state, action) => {
      const { articleId } = action.payload;
      if (articleId) {
        // 記事IDをキーとしていいねのカウントを増加
        state.likeCounts[articleId] = (state.likeCounts[articleId] || 0) + 1;
      }
    },
    down: (state, action) => {
      const { articleId } = action.payload;
      if (articleId) {
        // 記事IDをキーとしていいねのカウントを減少
        state.likeCounts[articleId] = (state.likeCounts[articleId] || 0) - 1;
      }
    },
  }
});

// アクションとリデューサーをエクスポート
export const { up, down} = likeSlice.actions;
export default likeSlice.reducer;
