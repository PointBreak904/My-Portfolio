import React from "react";
import "./blog.css";

// Blog section component
const Blog = () => {
  return (
    <section className="blog">
      <h2>Latest Blog Posts</h2>
      <div className="blog-list">
        {/* Example blog post card with image container */}
        <div className="blog-card">
          {/* Container for blog post image */}
          <div className="blog-image-container">
            {/* Place for imported blog post image */}
            {/* Example: <img src={Blog1Img} alt="Blog Post 1" /> */}
            <p style={{color: '#999', textAlign: 'center'}}>Blog Image</p>
          </div>
          {/* Blog info (title, summary) */}
          <div className="blog-info">
            <h3>Tips for Modern Web Development</h3>
            <p style={{fontSize: '0.9rem', color: '#999'}}>December 10, 2024</p>
            <p>Discover the latest trends and best practices in web development. Learn how to build faster, more scalable, and maintainable applications.</p>
            <a href="#" className="blog-link">Read More →</a>
          </div>
        </div>
        
        {/* Example blog post card 2 */}
        <div className="blog-card">
          <div className="blog-image-container">
            <p style={{color: '#999', textAlign: 'center'}}>Blog Image</p>
          </div>
          <div className="blog-info">
            <h3>Mastering React Hooks</h3>
            <p style={{fontSize: '0.9rem', color: '#999'}}>December 5, 2024</p>
            <p>A comprehensive guide to understanding and using React Hooks effectively. Transform your functional components with powerful state management.</p>
            <a href="#" className="blog-link">Read More →</a>
          </div>
        </div>

        {/* Example blog post card 3 */}
        <div className="blog-card">
          <div className="blog-image-container">
            <p style={{color: '#999', textAlign: 'center'}}>Blog Image</p>
          </div>
          <div className="blog-info">
            <h3>Designing User-Centric Interfaces</h3>
            <p style={{fontSize: '0.9rem', color: '#999'}}>November 28, 2024</p>
            <p>Principles and strategies for creating intuitive and beautiful user interfaces that engage users and drive conversions.</p>
            <a href="#" className="blog-link">Read More →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
