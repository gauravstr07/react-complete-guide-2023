import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header";

const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + 1;
  } else if (action.type === "DEC") {
    return state - 1;
  } else if (action.type === "MUL") {
    return state * 2;
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <Header />
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INC" })} className="btn">
        Increment
      </button>
      <button onClick={() => ({ type: "DEC" })} className="btn">
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "MUL" })} className="btn">
        Multiplication
      </button>
    </div>
  );
}

export default App;
