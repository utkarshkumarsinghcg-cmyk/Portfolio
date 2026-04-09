import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import AllCertificates from './pages/AllCertificates';

const ScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      {isLoading ? (
        <Loader onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<AllProjects />} />
              <Route path="/certificates" element={<AllCertificates />} />
            </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <AppContent />
    </Router>
  );
}

export default App;
