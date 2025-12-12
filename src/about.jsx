import React from "react";
import "./about.css";

// About section component
const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        {/* Container for profile/about image */}
        <div className="about-image-container">
          {/* Place for imported about/profile image */}
          {/* Example: <img src={ProfilePic} alt="About" /> */}
          <p style={{color: '#999', textAlign: 'center'}}>Your Profile Image Here</p>
        </div>
        {/* Container for about text */}
        <div className="about-text">
          {/* Add your about/bio text here */}
          <p>I'm a passionate developer and designer with a love for creating beautiful, functional digital products. With expertise in modern web technologies and design principles, I help businesses bring their ideas to life through innovative solutions.</p>
          <p>My journey in tech has been driven by curiosity and a desire to constantly learn and improve. I specialize in building responsive, user-friendly applications that solve real problems and deliver real value.</p>
          <h3>Skills & Expertise</h3>
          <ul style={{color: 'var(--text-light)', lineHeight: '2'}}>
            <li>Frontend Development (React, JavaScript, CSS)</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design</li>
            <li>Problem Solving & Creative Thinking</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
