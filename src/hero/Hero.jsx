import React from "react";
import "./hero.css";

// Hero section component
const Hero = () => {
  return (
    <section className="hero">
      {/* Main hero section with image container */}
      <div className="hero-content">
        {/* Hero text (title, tagline) */}
        <div className="hero-text">
          {/* Add your main intro text here */}
          <h1>Welcome to My Portfolio</h1>
          <p>Creative developer and designer crafting amazing digital experiences. Let's build something incredible together.</p>
          {/* Call-to-action button */}
          <a href="#projects" className="hero-cta">Explore My Work</a>
        </div>
        {/* Container for hero image */}
        <div className="hero-image-container">
          {/* Place for imported hero image */}
          {/* Example: <img src={HeroImage} alt="Hero" /> */}
          <p style={{color: '#999', textAlign: 'center'}}>Your Hero Image Here</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
