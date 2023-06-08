import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./list.css";

function Detail({ getApi }) {
  const { id } = useParams();
  const result = getApi.filter((i) => i.ty3Date === id);
  // console.log("result", result);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {result.map((data) => {
        return (
          <ul>
            <li>
              <h2>{data.ty3Kind}</h2>
            </li>
            <li>
              <img
                src={data.ty3Picture}
                className="detailImg"
                alt="detailImg"
              />
            </li>
            <li>
              <h2>내용: {data.cn}</h2>
            </li>
            <li>
              <p>구조정보: {data.sj}</p>
            </li>
            <li>
              <p>성별: {data.ty3Sex}</p>
            </li>
            <li>
              <p>포획일시: {data.ty3Date}</p>
            </li>
            <li>
              <p>포획장소: {data.ty3Place}</p>
            </li>
            <li>
              <p>
                <b>인계: {data.ty3Ingye}</b>
              </p>
            </li>
            <li>
              <p>
                <b>인수: {data.ty3Insu}</b>
              </p>
            </li>
            <li>
              <p>
                글쓴이: {data.wrter}&nbsp; 작성일: {data.writngDe}
              </p>
            </li>
            <li>
              <p
                className={
                  data.ty3Process.indexOf("완료") > -1 ? "success" : "wait"
                }
              >
                {data.ty3Process}
              </p>
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default Detail;
