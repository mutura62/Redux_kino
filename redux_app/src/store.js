import { configureStore, combineReducers } from '@reduxjs/toolkit';
import likeCounterReducer from './components/Redux/Slice/LikeCountSlice'; 
import searchReducer from './components/Redux/Slice/SearchSlice'; 

// 複数のリデューサーを結合
const rootReducer = {
  search: searchReducer,
  likeCounter: likeCounterReducer,
};

// 通常のReduxストアを構成
const store = configureStore({
  reducer: combineReducers(rootReducer),
});

export default store;
