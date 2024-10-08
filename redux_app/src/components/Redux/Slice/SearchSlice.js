import { createSlice } from '@reduxjs/toolkit';

// 初期状態を設定
const initialSearchState = {
  SearchWord: "",
};

// Sliceを作成
const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    setSearchWord: (state, action) => {
      state.SearchWord = action.payload;
    },
  },
});

// アクションとリデューサーをエクスポート
export const { setSearchWord } = searchSlice.actions;
export default searchSlice.reducer;
