import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { ColorRing } from "react-loader-spinner";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoader(true);
    async function getData() {
      const res = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=150&idStarts=1001"
      );
      const finalRes = await res.json();
      setLoader(false);
      setData(finalRes);
      toast.success("successfully fetched data");
    }
    getData();
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <ToastContainer/>
        {loader ? (
          <div className="main">
            <ColorRing color="#15202b" />
          </div>
        ) : (
          data.map((element, index) => {
            return <p key={index}>{element.firstName}</p>;
          })
        )}
      </div>
    </>
  );
}

export default App;
