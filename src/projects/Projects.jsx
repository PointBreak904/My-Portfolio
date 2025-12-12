import React from "react";
import "./projects.css";

// Projects section component
const Projects = () => {
  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-list">
        {/* Example project card with image container */}
        <div className="project-card">
          {/* Container for project image */}
          <div className="project-image-container">
            {/* Place for imported project image */}
            {/* Example: <img src={Project1Img} alt="Project 1" /> */}
            <p style={{color: '#999', textAlign: 'center'}}>Project Image</p>
          </div>
          {/* Project info (title, description) */}
          <div className="project-info">
            <h3>Project Title 1</h3>
            <p>An elegant solution that demonstrates clean code and beautiful design. Built with modern technologies for optimal performance.</p>
            <a href="#" className="project-link">View Project →</a>
          </div>
        </div>
        
        {/* Example project card 2 */}
        <div className="project-card">
          <div className="project-image-container">
            <p style={{color: '#999', textAlign: 'center'}}>Project Image</p>
          </div>
          <div className="project-info">
            <h3>Project Title 2</h3>
            <p>A cutting-edge application that combines functionality with stunning user experience. Delivered on time and exceeding expectations.</p>
            <a href="#" className="project-link">View Project →</a>
          </div>
        </div>

        {/* Example project card 3 */}
        <div className="project-card">
          <div className="project-image-container">
            <p style={{color: '#999', textAlign: 'center'}}>Project Image</p>
          </div>
          <div className="project-info">
            <h3>Project Title 3</h3>
            <p>Innovative design meets powerful functionality in this award-winning project. A testament to attention to detail and creative problem-solving.</p>
            <a href="#" className="project-link">View Project →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
