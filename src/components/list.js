import React, { useEffect, useState } from "react";
import "./list.css";
import { Link } from "react-router-dom";

export const List = ({ getApi }) => {
  console.log(getApi);
  return (
    <div className="content">
      <div className="flexBox">
        {getApi.map((i, idx) => {
          return (
            <Link className="itemBox" to={`/detail/${i.ty3Date}`}>
              <ul>
                <li>
                  <h2>{i.ty3Kind}</h2>
                </li>
                <li>
                  <img src={i.ty3Picture} />
                </li>
                <li>
                  <p>구조정보: {i.sj}</p>
                </li>
                <li>
                  <p>성별: {i.ty3Sex}</p>
                </li>
                <li>
                  <p>포획일시: {i.ty3Date}</p>
                </li>
                <li>
                  <p>포획장소: {i.ty3Place}</p>
                </li>
                <li>
                  <p
                    className={
                      i.ty3Process.indexOf("완료") > -1 ? "success" : "wait"
                    }
                  >
                    {i.ty3Process}
                  </p>
                </li>
              </ul>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
// <div className="item">cont1</div>
