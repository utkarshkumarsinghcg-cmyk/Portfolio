import React, { useEffect } from 'react';
import '../components/Certificates.css';
import Reveal from '../components/Reveal';
import { certificateList } from '../data';
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

const AllCertificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container" style={{ padding: '120px 20px', minHeight: '100vh', background: '#0d0d0d' }}>
      <section className="certificates" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <h2>All Certificates & Achievements</h2>
          <p>A comprehensive view of my hackathon participation and certifications.</p>
        </div>

        <div className="certificates-grid">
          {certificateList.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.1}>
              <div className="certificate-card modern-card">
                <div className="cert-image-container">
                  <img src={cert.image} alt={cert.title} className="cert-image" />
                  <span className="cert-badge">{cert.badge}</span>
                </div>
                
                <div className="cert-content">
                  <div className="cert-header">
                    <div className="cert-icon-wrapper">
                      {cert.icon}
                    </div>
                    <h3 className="cert-title">{cert.title}</h3>
                  </div>
                  
                  <span className="cert-org">{cert.organization}</span>
                  <p className="cert-description">{cert.description}</p>
                  
                  <div className="cert-footer">
                    <span className="cert-date">
                      <FaCalendarAlt size={12} /> {cert.date}
                    </span>
                    <a href={cert.link} className="view-cert-btn" target="_blank" rel="noopener noreferrer">
                      View <FaExternalLinkAlt size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllCertificates;
