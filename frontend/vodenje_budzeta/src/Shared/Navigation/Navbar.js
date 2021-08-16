import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navigation">
        <ul className="navbar-list">
          <NavLink to="/" activeClassName="list-item">
            Naslovna
          </NavLink>
          <NavLink to="/statistics" activeClassName="list-item">
            Statistika
          </NavLink>
          <NavLink to="/" activeClassName="list-item">
            Login
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
