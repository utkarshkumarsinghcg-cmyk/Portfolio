import React, { useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollSphere from './components/ScrollSphere';
import Reveal from './components/Reveal';
import LeetCodeStats from './components/LeetCodeStats';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      {isLoading ? (
        <Loader onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <ScrollSphere />
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
        </>
      )}
    </div>
  );
}

export default App;
