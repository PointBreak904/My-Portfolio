import React, { useState, useEffect } from "react";
import ProfilePic from "../assets/svg/profile_pic.svg";
import BackPic from "../assets/svg/back_pic.svg";
import "./Header.css";

const Header = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFlip = () => {
    if (isMobile) setIsFlipped(prev => !prev);
  };

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="header">

      {/* Flip Card */}
      <div
        className={`flip-card ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="flip-inner">
          <div className="flip-front">
            <img src={ProfilePic} alt="Front" />
          </div>
          <div className="flip-back">
            <img src={BackPic} alt="Back" />
          </div>
        </div>
      </div>

      {/* Burger menu */}
      {isMobile && (
        <div className={`burger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Profile</li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
