import React, { useContext } from "react";
import { AppState } from "../App";

const CompC = () => {
  const AppData = useContext(AppState);
  return (
    <div className="compc">
      <h4>Component C</h4>
      <h1>{AppData.data}</h1>
    </div>
  );
};

export default CompC;
