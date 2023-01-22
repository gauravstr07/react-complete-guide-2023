import { createContext } from "react";
import { useState } from "react";
import "./App.css";
import ComA from "./components/ComA";
import Header from "./components/Header";

const AppState = createContext();

function App() {
  const [data, setData] = useState("GauravStr26");
  const [bio, setBio] = useState({
    name: "Gaurav Sutar",
    email: "gauravstr05@gmail.com",
    age: 23,
  });
  return (
    <div className="App">
      <AppState.Provider value={{data, bio}}>
        <Header />
        <ComA />
      </AppState.Provider>
    </div>
  );
}

export default App;
export { AppState };
