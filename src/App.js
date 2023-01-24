import { useMemo } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Calculation");
    for (let i = 0; i < 50; i++) {}
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div className="App">
      <Header />
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <h4>Count: {calculation}</h4>
      <input className="input-box" onChange={(e) => setName(e.target.value)} />
      <h4>Name: {name}</h4>
    </div>
  );
}

export default App;
