import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import AllCertificates from './pages/AllCertificates';
import NotFound from './pages/NotFound';
import LeetCodePage from './pages/LeetCodePage';
import ProjectDetail from './pages/ProjectDetail';

const ScrollToAnchor = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      let retries = 0;
      const scrollIfFound = () => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (retries < 10) {
          retries++;
          setTimeout(scrollIfFound, 400);
        }
      };
      // Short delay helps ensure react router has properly unmounted/mounted routes
      setTimeout(scrollIfFound, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

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
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/certificates" element={<AllCertificates />} />
              <Route path="/leetcode" element={<LeetCodePage />} />
              <Route path="*" element={<NotFound />} />
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
