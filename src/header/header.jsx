import React, { useState, useEffect } from "react";
import ProfilePic from "../assets/svg/profile_pic.svg";
import BackPic from "../assets/svg/back_pic.svg";
import "./header.css";

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

      <h2>
        ROIGIE E. GABOTERO
      </h2>

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
          {/* Navigation links with anchor scroll */}
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
