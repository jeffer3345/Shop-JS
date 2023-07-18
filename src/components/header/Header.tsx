import "./Header.css";
import React from "react";
import logoImage from "../../logo.png"

const Header: React.FC = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand">
    <img className="logo"src={logoImage} alt="Logo" />
    <a className="text">JS</a>
    </div>
    <ul className="navbar-menu">
      <li className="navbar-item">
        <a>Home</a>
      </li>
      <li className="navbar-item">
        <a >Hombre</a>
      </li>
      <li className="navbar-item">
        <a >Mujer</a>
      </li>
      <li className="navbar-item">
        <a >Contactanos</a>
      </li>
    </ul>
  </nav>
  );
};

export default Header;
