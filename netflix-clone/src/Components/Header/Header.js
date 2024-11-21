import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="header__logo"
      />
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#tv-shows">TV Shows</a>
          </li>
          <li>
            <a href="#movies">Movies</a>
          </li>
          <li>
            <a href="#latest">New & Popular</a>
          </li>
          <li>
            <a href="#my-list">My List</a>
          </li>
        </ul>
      </nav>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User Avatar"
        className="header__avatar"
      />
    </header>
  );
}

export default Header;
