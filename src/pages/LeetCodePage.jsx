import React, { useEffect } from 'react';
import LeetCodeStats from '../components/LeetCodeStats';

const LeetCodePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container" style={{ padding: '120px 20px', minHeight: '100vh', background: '#0d0d0d' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <LeetCodeStats />
      </div>
    </div>
  );
};

export default LeetCodePage;
