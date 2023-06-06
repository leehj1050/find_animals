import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const header = {
    width: "100%",
    height: "2.5em",
    backgroundColor: "lightgrey",
    textAlign: "center",
  };

  return (
    <div style={header}>
      <Link to={"/"}>
        <h3>실종 반려동물 찾기</h3>
      </Link>
    </div>
  );
};
