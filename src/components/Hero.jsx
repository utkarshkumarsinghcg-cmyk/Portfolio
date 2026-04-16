import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';
import './Hero.css';
import { FaReact, FaNodeJs, FaJs, FaDatabase, FaDownload } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Full-Stack Developer", "Frontend Specialist", "UI/UX Enthusiast", "Problem Solver"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="badge-container">
          <span className="badge">
            <span className="blinking-dot"></span>
            Available for Work
          </span>
        </div>

        <h1 className="title">
          Hi, I'm <span className="name-gradient">Utkarsh Kumar Singh</span>
        </h1>

        <h2 className="role-text">
          I am a <span className="typing-text">{text}<span className="cursor">|</span></span>
        </h2>

        <p className="description">
          A passionate Full-Stack Developer specializing in building scalable web applications
          with <span className="highlight">MongoDB</span>, <span className="highlight">Express</span>, <span className="highlight">React</span>, and <span className="highlight">Node.js</span>. 
          I transform complex problems into elegant, user-centric solutions.
        </p>

        <div className="cta-group">
          <Link to="/#projects" onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }
          }} className="btn btn-primary">View My Work</Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-resume"
          >
            <span className="resume-btn-inner">
              <FaDownload className="resume-icon" />
              <span>Resume</span>
            </span>
            <span className="resume-btn-glow"></span>
          </a>

          <div className="tech-stack-inline">
            <span className="tech-stack-label">Stack:</span>
            <div className="tech-icons">
              <FaReact title="React" />
              <FaNodeJs title="Node.js" />
              <FaJs title="JavaScript" />
              <SiTailwindcss title="Tailwind CSS" />
              <SiMongodb title="MongoDB" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>

        <div className="image-wrapper floating">
          <div className="img-border">
            <img src="https://github.com/utkarshkumarsinghcg-cmyk/Portfolio/blob/main/img.png?raw=true" alt="Utkarsh Kumar Singh" className="profile-img" />
          </div>
        </div>

        {/* Floating Abstract Elements */}
        <div className="floating-card glass-card card-1">
          <FaReact className="card-icon spin-slow" />
        </div>
        <div className="floating-card glass-card card-2">
          <FaDatabase className="card-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
