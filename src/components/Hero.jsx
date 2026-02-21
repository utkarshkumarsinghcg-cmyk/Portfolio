import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

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
          Transforming complex problems into elegant, scalable web solutions.
          Specializing in building modern, responsive, and user-centric applications
          that drive results.
        </p>

        <div className="cta-group">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        <div className="tech-stack-preview">
          <p>Tech Stack:</p>
          <div className="tech-icons">
            <FaReact title="React" />
            <FaNodeJs title="Node.js" />
            <FaJs title="JavaScript" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiMongodb title="MongoDB" />
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
