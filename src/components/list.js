import React from "react";
import "./list.css";
import { Link } from "react-router-dom";

export const List = ({ getApi }) => {
  console.log(getApi);
  return (
    <div className="content">
      <div className="flexBox">
        {getApi.map((item) => {
          return (
            <Link className="item" to={"/detail"}>
              <ul>
                <li>
                  <h2>{item.ty3Kind}</h2>
                </li>
                <li>
                  <img src={item.ty3Picture} />
                </li>
                <li>
                  <p>구조정보: {item.sj}</p>
                </li>
                <li>
                  <p>성별: {item.ty3Sex}</p>
                </li>
                <li>
                  <p>포획일시: {item.ty3Date}</p>
                </li>
                <li>
                  <p>포획장소: {item.ty3Place}</p>
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
