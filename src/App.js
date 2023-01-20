import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const res = await get.json();

      setData(res);
      console.log(res);
    }
    getData();
  }, [state]);

  return (
    <div className="App">
      <Header />
      <button className="btn" onClick={() => setState(state + 1)}>
        Increase {state}
      </button>
      {data.map((element, index) => {
        return (
          <div key={index}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
