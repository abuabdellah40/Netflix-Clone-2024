// Importing React and the associated styles for the footer
import React from "react";
import "./Footer.css";

// The Footer component creates the bottom section with links and a footer message
function Footer() {
  return (
    <footer className="footer">
      {/* List of footer links */}
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

      {/* Footer message */}
      <p className="footer__text">
        Netflix Clone — Built for learning purposes.
      </p>
    </footer>
  );
}

export default Footer; // Make the Footer component reusable in other parts of the app
