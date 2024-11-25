// Importing React and useState/useEffect for dynamic behavior
import React, { useState, useEffect } from "react";

// Importing styles and Material UI icons for the header
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search"; // Icon for the search feature
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"; // Icon for notifications
import AccountBoxIcon from "@mui/icons-material/AccountBox"; // Icon for account/profile
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Icon for dropdown menu
import MenuIcon from "@mui/icons-material/Menu"; // For the hamburger menu
import CloseIcon from "@mui/icons-material/Close"; // For closing the menu

function Header() {
  const [isScrolled, setIsScrolled] = useState(false); // Tracks if the user has scrolled
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  // Effect to listen to scroll events and update the header's background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Turn background black
      } else {
        setIsScrolled(false); // Keep background transparent
      }
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll event listener
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on component unmount
  }, []);

  return (
    <header
      className={`header ${
        isScrolled ? "header--sticky" : "header--absolute"
      } ${isScrolled ? "header--black" : "header--transparent"}`}
    >
      {/* Menu toggle button for mobile */}
      <div
        className="header__menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* Netflix logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="header__logo"
      />

      {/* Navigation links */}
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

      {/* Right-side icons */}
      <div className="header__icons">
        <SearchIcon className="header__icon" /> {/* Search functionality */}
        <NotificationsNoneIcon className="header__icon" />{" "}
        {/* Notifications feature */}
        <AccountBoxIcon className="header__icon" />{" "}
        {/* Profile/account settings */}
        <ArrowDropDownIcon className="header__icon" /> {/* Dropdown menu */}
      </div>
    </header>
  );
}

export default Header;
