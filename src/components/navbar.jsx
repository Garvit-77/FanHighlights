import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onLanguageChange }) => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    onLanguageChange(lang);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">FunPulse</h1>
      <div className="navbar-links">
        <button className="nav-button">Login</button>
        <button className="nav-button">Sign Up</button>
        <div className="language-selector">
          <span>Language:</span>
          <button
            className={`lang-button ${language === "English" ? "active" : ""}`}
            onClick={() => handleLanguageChange("English")}
          >
            EN
          </button>
          <button
            className={`lang-button ${language === "Spanish" ? "active" : ""}`}
            onClick={() => handleLanguageChange("Spanish")}
          >
            ES
          </button>
          <button
            className={`lang-button ${language === "Japanese" ? "active" : ""}`}
            onClick={() => handleLanguageChange("Japanese")}
          >
            JP
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
