import React from "react";

export const Header = () => {
  const header = {
    width: "100%",
    height: "2.5em",
    backgroundColor: "lightgray",
    textAlign: "center",
  };

  return (
    <div style={header}>
      <h3>실종 반려동물 찾기</h3>
    </div>
  );
};
