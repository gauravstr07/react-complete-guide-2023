// import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";

function App() {
  const [input, setInput] = useState("");
  // const counter = useRef(0);
  let inputField = useRef("");

  // useEffect(() => {
  //   counter.current = counter.current + 1;
  //   prevState.current = input;
  // }, [input]);

  const formHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = () => {
    inputField.current.value = "Gaurav Sutar🥰";
  };

  return (
    <div className="App">
      <Header />
      <input
        ref={inputField}
        className="input-box"
        value={input}
        onChange={formHandler}
      />
      {/* <h4>Application has been renderd {counter.current} times</h4> */}
      {/* <h4>Your previous state was {prevState.current}</h4> */}
      <button className="btn" onClick={clickHandler}>
        Focus on input
      </button>
    </div>
  );
}

export default App;
