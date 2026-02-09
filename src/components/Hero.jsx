import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="greeting">Hello, I'm</span>
        <h1 className="title">
          Utkarsh Kumar Singh
          <span className="dot">.</span>
        </h1>
        <p className="subtitle">
          Building <span className="highlight">digital experiences</span> that matter.
        </p>
        <p className="description">
          A passionate web developer specializing in creating modern, responsive, and user-friendly web applications.
        </p>
        <div className="cta-container">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="gradient-blob"></div>
        <div className="image-container floating">
          <img src="./img.png" alt="Utkarsh Kumar Singh" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
