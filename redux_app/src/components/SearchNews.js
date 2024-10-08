import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchWord } from "./Redux/Slice/SearchSlice";

const SearchNews = () => {
  const dispatch = useDispatch();

  // useStateでinputの状態とsetInputを定義
  const [input, setInput] = useState(""); // 初期値を空文字に設定

  const handleInputChange = (e) => {
    setInput(e.target.value); // ①入力時、inputの状態を更新
  };

  const handleSearch = () => {
    dispatch(setSearchWord(input)); // ②dispatchでaction（SearchReducer）がトリガーされる
  };

  return (
    <div>
      <input
        type="text"
        placeholder="入力"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchNews;

