import React, { useState, useEffect } from "react";
import { Home } from "./components/home";
import { Header } from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/detail";

function App() {
  const [getApi, setGetApi] = useState([]);
  const [totalCount, setTotalCount] = useState(0); //전체수
  const [currentPage, setCurrentPage] = useState(1); //현재페이지

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
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              setGetApi={setGetApi}
              getApi={getApi}
              totalCount={totalCount}
              handlePageChange={handlePageChange}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail getApi={getApi} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
