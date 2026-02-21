import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <html lang="en" />
          <title>Utkarsh Kumar Singh | Dynamic Frontend Engineer</title>
          <meta name="description" content="Welcome to the digital portfolio of Utkarsh Kumar Singh. Explore my projects, skills, and experience in building modern, interactive web applications." />
          <link rel="canonical" href="https://utkarshkumarsingh.com/" />
        </Helmet>

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
    </HelmetProvider>
  );
}

export default App;
