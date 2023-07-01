import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./search";

export const Header = ({ setSearch }) => {
  const HeaderBox = styled.div`
    width: 100%;
    height: 2.5em;
    background-color: rgb(255, 69, 0, 0.8);
    padding: 20px;
    a {
      color: white;
      text-align: center;
      display: flex;
      justify-content: space-around;
      h2 {
        margin: 0;
        font-weight: 500;
      }
    }
  `;

  return (
    <HeaderBox>
      <Link to={"/"}>
        <h2
          onClick={() => {
            window.location.reload();
          }}
        >
          실종 반려동물 찾기
        </h2>
        <Search setSearch={setSearch} />
      </Link>
    </HeaderBox>
  );
};
