import React from 'react';
import './Certificates.css';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';
import { certificateList } from '../data';
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

const Certificates = () => {
  const displayedCertificates = certificateList.slice(0, 2);

  return (
    <section id="certificates" className="certificates">
      <div className="section-header">
        <Reveal>
          <h2>Hackathon Achievements</h2>
          <p>Recognition and certificates from various tech competitions and hackathons.</p>
        </Reveal>
      </div>

      <div className="certificates-grid home-grid">
        {displayedCertificates.map((cert, index) => (
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
                    View Certificate <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      
      <div className="section-footer">
        <Link to="/certificates" className="btn btn-primary see-more-main-btn">
          See All Achievements <span className="arrow-icon">&rarr;</span>
        </Link>
      </div>
    </section>
  );
};

export default Certificates;
