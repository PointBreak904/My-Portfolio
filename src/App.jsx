
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './header/header';
import Hero from './hero/Hero';
import About from './about';
import Projects from './projects/Projects';
import Blog from './blog_posts/Blog';
import Contact from './contact';
import Footer from './footer/Footer';
import Loader from './components/Loader';

// If you want to use React Router, uncomment the following lines and install react-router-dom
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simple artificial loading to show skeleton briefly
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {/* Header with navigation */}
      <Header />

      {/* Main hero section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About section */}
      <section id="about">
        <About />
      </section>

      {/* Projects section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Blog section */}
      <section id="blog">
        <Blog />
      </section>

      {/* Contact section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
