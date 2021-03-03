import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Rick_and_Morty_logo.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__wrapper">
          <img
            src={logo}
            alt="Rick and Morty logo"
            title="Rick and Morty logo"
            className="header__wrapper--logo"
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
