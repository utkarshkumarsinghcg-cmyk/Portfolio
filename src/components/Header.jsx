import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">
          UTKARSH<span>.</span>
        </a>

        <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li>
              <a
                href="/resume.pdf"
                className="resume-btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  setMenuOpen(false);
                  // Create a temporary link to trigger download
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Utkarsh_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
