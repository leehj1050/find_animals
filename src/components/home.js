import React from "react";
import { List } from "./list";

export const Home = ({ getApi }) => {
  return (
    <>
      <List getApi={getApi} />
    </>
  );
};
