import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import Insta from "./components/Insta";
import Mail from "./components/Mail";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="home/:userId" element={<UserDetails />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />}>
            <Route index element={<Insta />} />
            <Route index exact path="insta" element={<Insta />} />
            <Route exact path="mail" element={<Mail />} />
          </Route>
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
