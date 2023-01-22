import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
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
    document.title = `(${state}) Emplyees Online`;
  }, [state]);

  return (
    <div>
      <Header />
      <button className="btn" onClick={() => setState(state + 1)}>
        Increase {state}
      </button>
      {data.map((element, index) => {
        return (
          <Link to={`/home/${element.id}`}>
            <div className="data" key={index}>
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
