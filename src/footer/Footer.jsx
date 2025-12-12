import React from "react";
import "./footer.css";

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer content and social links */}
      <div className="footer-content">
        {/* Copyright text */}
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p style={{fontSize: '0.9rem', color: '#aaa', marginTop: '0.5rem'}}>Built with React & modern web technologies</p>
        {/* Social icons container */}
        <div className="footer-socials">
          {/* Place for imported social icon images */}
          {/* Example: <img src={TwitterIcon} alt="Twitter" /> */}
          <a href="#" title="LinkedIn">LinkedIn</a>
          <a href="#" title="GitHub">GitHub</a>
          <a href="#" title="Twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
