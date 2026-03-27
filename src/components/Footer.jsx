import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/utkarsh-kumar-singh-28ba04378/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://github.com/utkarshkumarsinghcg-cmyk" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://x.com/UtkarshSin78788" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://www.youtube.com/@UtkarshsBuilds" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          <a href="https://leetcode.com/u/utkarshkumarsingh/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Utkarsh Kumar Singh. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
