import React from "react";
import "./Header.scss";
import Search from "../search/Search";

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-content__wrapper centered">
          <div className="logo">
            <img src="/assets/flicker-logo.png" alt="flicker-logo" />
          </div>
          <ul className="nav-menu">
            <li className="menu-item">Explore</li>
            <li className="menu-item">Prints</li>
            <li className="menu-item">Get Pro</li>
          </ul>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
