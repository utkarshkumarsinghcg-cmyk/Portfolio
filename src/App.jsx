import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleNetwork from './components/ParticleNetwork';
import Reveal from './components/Reveal';
import LeetCodeStats from './components/LeetCodeStats';

function App() {
  return (
    <div className="App">
      <ParticleNetwork />
      <Header />
      <main>
        <Reveal><Hero /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><LeetCodeStats /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
