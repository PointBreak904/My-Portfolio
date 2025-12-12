import React, { useState } from "react";
import "./contact.css";

// Contact section component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <h2>Let's Work Together</h2>
      <div className="contact-content">
        {/* Contact form or contact details */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name input */}
          <input 
            type="text" 
            placeholder="Your Name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          {/* Email input */}
          <input 
            type="email" 
            placeholder="Your Email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/* Message textarea */}
          <textarea 
            placeholder="Your Message" 
            name="message" 
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {/* Submit button */}
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        {/* Container for contact image/icon */}
        <div className="contact-image-container">
          {/* Place for imported contact image or icon */}
          {/* Example: <img src={ContactImg} alt="Contact" /> */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p><strong>Email:</strong> your.email@example.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Location:</strong> Your City, Country</p>
            <div className="social-links" style={{marginTop: '2rem'}}>
              <a href="#" style={{marginRight: '1rem'}}>LinkedIn</a>
              <a href="#" style={{marginRight: '1rem'}}>GitHub</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

