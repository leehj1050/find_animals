import React, { useEffect, useState } from "react";
import "./pageNation.css";

export const PageNation = ({
  totalCount,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / itemsPerPage); // 전체 페이지 수

  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(5);

  //전체페이지 수로 array만들기
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  // console.log("startPage >> ", startPage);
  // console.log("endPage >> ", endPage);
  // console.log("current >>", currentPage);

  return (
    <ul className="pageWrap">
      {startPage > 1 && (
        <li
          onClick={() => {
            setStartPage(startPage - 5);
            setEndPage(startPage - 1);
          }}
        >
          Prev
        </li>
      )}

      {pageNumbers.slice(startPage - 1, endPage).map((pageNumber) => (
        <li
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? "active" : ""}
        >
          {pageNumber}
        </li>
      ))}

      {endPage < totalPages && (
        <li
          onClick={() => {
            setStartPage(endPage + 1);
            setEndPage(endPage + 5);
          }}
        >
          Next
        </li>
      )}
    </ul>
  );
};
