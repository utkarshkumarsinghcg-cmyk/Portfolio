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

  const handleNavClick = (e, hashId) => {
    setMenuOpen(false);
    // Prevent the default Link routing that appends the hash to the URL
    // if we are already on the correct page (home page)
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(hashId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
            <li><Link to="/#hero" onClick={(e) => handleNavClick(e, '#hero')}>Home</Link></li>
            <li><Link to="/#about" onClick={(e) => handleNavClick(e, '#about')}>About</Link></li>
            <li><Link to="/#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</Link></li>
            <li><Link to="/#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</Link></li>
            <li><Link to="/#certificates" onClick={(e) => handleNavClick(e, '#certificates')}>Certificates</Link></li>
            <li><Link to="/#education" onClick={(e) => handleNavClick(e, '#education')}>Education</Link></li>
            <li><Link to="/#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</Link></li>
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
