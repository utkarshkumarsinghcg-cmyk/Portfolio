import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Certificates from '../components/Certificates';
import Hackathons from '../components/Hackathons';
import ScrollSphere from '../components/ScrollSphere';
import Reveal from '../components/Reveal';
import LeetCodeStats from '../components/LeetCodeStats';

const Home = () => {
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
        <Reveal><Hackathons /></Reveal>
        <Reveal><Certificates /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
    </>
  );
};

export default Home;
