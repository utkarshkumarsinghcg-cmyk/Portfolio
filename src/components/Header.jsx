import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from './Logo';

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
        <Link to="/#hero" className="logo-link" aria-label="UKS Logo">
          <Logo />
        </Link>

        <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/#hero" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/#skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
            <li><Link to="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/#certificates" onClick={() => setMenuOpen(false)}>Certificates</Link></li>
            <li><Link to="/#education" onClick={() => setMenuOpen(false)}>Education</Link></li>
            <li><Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li>
              <a
                href="/resume.pdf"
                className="resume-btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  setMenuOpen(false);
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
