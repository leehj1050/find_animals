import React, { useEffect, useState } from "react";
import { List } from "./list";
import { PageNation } from "./pageNation";

export const Home = ({
  getApi,
  totalCount,
  handlePageChange,
  setCurrentPage,
  currentPage,
}) => {
  const itemsPerPage = 9; //한페이지당 보여줄 갯수

  // console.log(getApi);

  return (
    <>
      <List getApi={getApi} />
      <PageNation
        totalCount={totalCount}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        getApi={getApi}
        onPageChange={handlePageChange}
      />
    </>
  );
};
