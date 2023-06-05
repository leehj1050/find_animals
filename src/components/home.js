import React from "react";
import { List } from "./list";
import { PageNation } from "./pageNation";

export const Home = ({ getApi }) => {
  return (
    <>
      <List getApi={getApi} />
      <PageNation />
    </>
  );
};
