import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
        <nav className="navigation">
            <ul className="navbar-list">
                <li className="list-item" id="home">Naslovna</li>
                <li className="list-item" id="transaction">Transakcije</li>
                <li className="list-item" id="userLogin">Login</li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;
