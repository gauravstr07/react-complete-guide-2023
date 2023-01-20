import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={'/'}>
        {" "}
        <h1 style={{ cursor: "pointer" }}>Home</h1>
      </Link>
      <Link to={'/about'}>
        {" "}
        <h1 style={{ cursor: "pointer" }}>About</h1>
      </Link>
      <Link to={'/contact'}>
        <h1 style={{ cursor: "pointer" }}>Contact</h1>
      </Link>
    </div>
  );
};

export default Header;
