import { useCallback } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = (c) => setCount((c) => c + 1);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, `New Todo ${t.length}`]);
  }, [todos]);

  return (
    <div className="App">
      <Header />
      Count: {count}
      <button className="btn" onClick={increment}>
        +
      </button>
      <hr />
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
