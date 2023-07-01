import React, { useState } from "react";

const Search = ({ setSearch }) => {
  const [userSearch, setUserSearch] = useState("");

  //style
  const InputBox = {
    width: "300px",
    padding: "10px",
    marginRight: "10px",
    border: "none",
    borderRadius: "30px",
  };
  const ButtonBox = {
    padding: "9px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
  };

  //Event
  const searchClick = () => {
    setSearch(userSearch);
    // setUserSearch("");
    console.log(userSearch);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      searchClick();
    }
  };

  return (
    <div>
      <input
        placeholder="검색.. (위치등을 입력해주세요..)"
        onChange={(e) => setUserSearch(e.target.value)}
        value={userSearch}
        style={InputBox}
        onKeyDown={onKeyDown}
      />
      <button style={ButtonBox} onClick={searchClick}>
        검색
      </button>
      <button
        style={ButtonBox}
        onClick={() => {
          window.location.reload();
        }}
      >
        모두보기
      </button>
    </div>
  );
};

export default Search;
