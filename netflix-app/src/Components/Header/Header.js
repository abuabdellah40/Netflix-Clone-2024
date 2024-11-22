// Importing React and useState/useEffect for dynamic behavior
import React, { useState, useEffect } from "react";

// Importing styles and Material UI icons for the header
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search"; // Icon for the search feature
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"; // Icon for notifications
import AccountBoxIcon from "@mui/icons-material/AccountBox"; // Icon for account/profile
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Icon for dropdown menu

// The Header component creates the top navigation bar of the application
function Header() {
  const [isScrolled, setIsScrolled] = useState(false); // Tracks if the user has scrolled

  // Effect to listen to scroll events and update the header's background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background if user scrolls 50px or more
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll event listener
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on component unmount
  }, []);

  return (
    <header className={`header ${isScrolled ? "header--black" : ""}`}>
      {/* Netflix logo on the top left */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="header__logo"
      />

      {/* Navigation links in the center */}
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

      {/* Material UI icons for actions on the top right */}
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

export default Header; // Make the Header component reusable in other parts of the app
