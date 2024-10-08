import { configureStore, combineReducers } from '@reduxjs/toolkit'; // combineReducersをインポート
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorageを使用
import likeCounterReducer from './components/Redux/Slice/LikeCountSlice'; // likeCounterリデューサーのインポート
import searchReducer from './components/Redux/Slice/SearchSlice'; // searchリデューサーのインポート

// パーシスト設定
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = {
  search: searchReducer,
  likeCounter: likeCounterReducer,
};

const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
