import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Certificates from '../components/Certificates';
import Hackathons from '../components/Hackathons';
import Achievements from '../components/Achievements';
import FigmaDesigns from '../components/FigmaDesigns';
import ScrollSphere from '../components/ScrollSphere';
import Reveal from '../components/Reveal';
import LeetCodeStats from '../components/LeetCodeStats';

const sectionTitles = {
  hero: 'Utkarsh Kumar Singh | Portfolio',
  about: 'About | Utkarsh Kumar Singh',
  skills: 'Skills | Utkarsh Kumar Singh',
  projects: 'Projects | Utkarsh Kumar Singh',
  hackathons: 'Hackathons | Utkarsh Kumar Singh',
  achievements: 'Achievements | Utkarsh Kumar Singh',
  figma: 'Figma Designs | Utkarsh Kumar Singh',
  certificates: 'Certificates | Utkarsh Kumar Singh',
  education: 'Education | Utkarsh Kumar Singh',
  contact: 'Contact | Utkarsh Kumar Singh',
};

const Home = () => {
  useEffect(() => {
    // Fix 1: Clear the hash from the URL on page load to prevent auto-scroll on reload
    if (window.location.hash) {
      window.history.replaceState(null, document.title, window.location.pathname);
    }

    // Fix 2: Update browser tab title as sections scroll into view
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (sectionTitles[id]) {
              document.title = sectionTitles[id];
            }
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollSphere />
      <main>
        <Reveal><Hero /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><LeetCodeStats /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><FigmaDesigns /></Reveal>
        <Reveal><Hackathons /></Reveal>
        <Reveal><Achievements /></Reveal>
        <Reveal><Certificates /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
    </>
  );
};

export default Home;
