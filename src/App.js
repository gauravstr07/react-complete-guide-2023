import "./App.css";
import Header from "./components/Header";
import useFetch from "./components/useFetch";

function App() {
  const [data] = useFetch(
    "https://hub.dummyapis.com/employee?noofRecords=20&idStarts=1001"
  );

  return (
    <div className="App">
      <Header />
      {data.map((element, index) => {
        return <p key={index}>{element.firstName}</p>;
      })}
    </div>
  );
}

export default App;
