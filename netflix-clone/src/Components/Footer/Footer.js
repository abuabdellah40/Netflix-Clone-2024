import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <ul>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#help">Help Center</a>
          </li>
          <li>
            <a href="#terms">Terms of Use</a>
          </li>
          <li>
            <a href="#privacy">Privacy</a>
          </li>
          <li>
            <a href="#cookies">Cookie Preferences</a>
          </li>
          <li>
            <a href="#corporate">Corporate Information</a>
          </li>
        </ul>
      </div>
      <p className="footer__text">
        Netflix Clone — Built for learning purposes.
      </p>
    </footer>
  );
}

export default Footer;
