import { Home } from "./components/home";
import { Header } from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { List } from "./components/list";

function App() {
  const [getApi, setGetApi] = useState([]);
  //getApi
  useEffect(() => {
    fetch(
      `http://apis.data.go.kr/6260000/BusanPetAnimalInfoService/getPetAnimalInfo?serviceKey=${
        process.env.REACT_APP_API_KEY
      }&numOfRows=9&pageNo=${1}&resultType=json`
    )
      .then((res) => res.json())
      .then((res) => setGetApi(res.getPetAnimalInfo.body.items.item));
  }, []);

  return (
    <Router>
      <Header />
      <Home getApi={getApi} />
      <Routes>
        <Route exact path="/" component={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
