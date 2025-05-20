import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    alert(
      `Language changed to: ${e.target.options[e.target.selectedIndex].text}`
    );
  };

  return (
    <div className="hero-container text-white">
      <div className="main-con">
        <div className="col-50 ">
          <img
            src="/assets/Netflix_Logo.png"
            className="logonet pr-4"
            alt="Netflix Logo"
          />
        </div>

        <div className="d-flex col-50 align-items-center">
          <select
            className="form-select me-2 bg-dark text-white"
            style={{ width: "200px" }}
            id="languageSelect"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="ja">本語</option>
          </select>

          <button className="btn text-white" id="button">
            Sign Out
          </button>
        </div>
      </div>

      <div className="text-center hero-content px-3">
        <h1 className="fw-bold display-4">
          Unlimited movies,
          <br />
          TV shows and more
        </h1>
        <p className="fs-5 mt-3">Starts at ₹149. Cancel at any time.</p>
        <button className="btn text-white btn-lg mt-3 py-2 fw-bold" id="button">
          Restart Your Membership <span className="ms-1">&lt;</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
