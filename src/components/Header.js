import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "white",
      fontSize: "20px",
    };
  };
  return (
    <div className="header">
      <NavLink style={navLinkStyles} to={"/home"}>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        About
      </NavLink>
      <NavLink style={navLinkStyles} to={"/contact"}>
        Contact
      </NavLink>
    </div>
  );
};

export default Header;
