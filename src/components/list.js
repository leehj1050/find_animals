import React from "react";
import "./list.css";

export const List = ({ getApi }) => {
  console.log(getApi);
  return (
    <div className="content">
      <div className="flexBox">
        {getApi.map((item) => {
          return (
            <>
              <div className="item">
                <h2>{item.ty3Kind}</h2>
                <img src={item.ty3Picture} />
                <p>성별: {item.ty3Sex}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
// <div className="item">cont1</div>
