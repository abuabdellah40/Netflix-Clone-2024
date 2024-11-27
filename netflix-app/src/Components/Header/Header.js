import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Change header to sticky with black background
      } else {
        setIsScrolled(false); // Transparent and absolute positioning
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${
        isScrolled
          ? "header--sticky header--black"
          : "header--absolute header--transparent"
      }`}
    >
      <div
        className="header__menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="header__logo"
      />

      <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
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

      <div className="header__icons">
        <SearchIcon className="header__icon" />
        <NotificationsNoneIcon className="header__icon" />
        <AccountBoxIcon className="header__icon" />
        <ArrowDropDownIcon className="header__icon" />
      </div>
    </header>
  );
}

export default Header;
