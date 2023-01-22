import React from "react";
import { useContext } from "react";
import { AppState } from "../App";
import ComB from "./ComB";

const ComA = () => {
  const AppData1 = useContext(AppState);
  return (
    <div className="compa">
      <h4>Component A</h4>
      <p>Name: {AppData1.bio.name}</p>
      <p>Email: {AppData1.bio.email}</p>
      <p>Age: {AppData1.bio.age}</p>
      <ComB />
    </div>
  );
};

export default ComA;
