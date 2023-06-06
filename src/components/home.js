import React, { useEffect, useState } from "react";
import { List } from "./list";
import { PageNation } from "./pageNation";

export const Home = () => {
  const [getApi, setGetApi] = useState([]);
  const [totalCount, setTotalCount] = useState(0); //전체수
  const [currentPage, setCurrentPage] = useState(1); //현재페이지
  const itemsPerPage = 9; //한페이지당 보여줄 갯수
  //getApi
  useEffect(() => {
    fetch(
      `http://apis.data.go.kr/6260000/BusanPetAnimalInfoService/getPetAnimalInfo?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=9&pageNo=${currentPage}&resultType=json`
    )
      .then((res) => res.json())
      .then((res) => {
        setTotalCount(res.getPetAnimalInfo.body.totalCount);
        setGetApi(res.getPetAnimalInfo.body.items.item);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
    // Add your logic to fetch and display data for the selected page
  };

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
