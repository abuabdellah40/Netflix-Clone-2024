import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

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

      {/* Social Media Icons */}
      <div className="footer__socials">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="footer__icon" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="footer__icon" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="footer__icon" />
        </a>
      </div>

      <p className="footer__text">
        Netflix Clone — Built - By - developer Fuad Tafese - for learning
        purposes.
      </p>
    </footer>
  );
}

export default Footer;
