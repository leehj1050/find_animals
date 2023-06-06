import React from "react";
import { Home } from "./components/home";
import { Header } from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./components/detail";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route path="/detail" component={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
