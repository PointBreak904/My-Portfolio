import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className="app-loader" role="status" aria-label="Loading content">
      <div className="loader-header" />

      <div className="loader-hero">
        <div className="hero-left">
          <div className="skeleton skeleton-title" />
          <div className="skeleton skeleton-sub" />
          <div className="skeleton skeleton-cta" />
        </div>
        <div className="hero-right">
          <div className="skeleton skeleton-image" />
        </div>
      </div>

      <div className="loader-cards">
        <div className="skeleton skeleton-card" />
        <div className="skeleton skeleton-card" />
        <div className="skeleton skeleton-card" />
      </div>
    </div>
  );
};

export default Loader;
