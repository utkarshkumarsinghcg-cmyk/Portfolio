import React from 'react';
import './Certificates.css';
import Reveal from './Reveal';
import { FaCertificate, FaMedal, FaExternalLinkAlt, FaCalendarAlt, FaTrophy } from 'react-icons/fa';
import cert1 from '../assets/Certificate1.pdf';
import cert2 from '../assets/Certificate2.pdf';
import certImg1 from '../assets/image 44.png';
import certImg2 from '../assets/image 45.png';

const Certificates = () => {
  const certificateList = [
    {
      id: 1,
      title: "Winner - Frontend Odyssey",
      organization: "Tech Community",
      description: "Secured 1st place in the Frontend Odyssey Hackathon for building an immersive UI/UX experience with React and Framer Motion.",
      date: "March 2026",
      badge: "1st Place",
      link: cert1,
      icon: <FaTrophy />,
      image: certImg1
    },
    {
      id: 2,
      title: "Top 10 Finalist - HackIT 2026",
      organization: "Dev League",
      description: "Recognized as a top 10 finalist among 500+ participants for developing a real-time collaborative workspace tool.",
      date: "February 2026",
      badge: "Finalist",
      link: cert2,
      icon: <FaMedal />,
      image: certImg2
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="section-header">
        <Reveal>
          <h2>Hackathon Achievements</h2>
          <p>Recognition and certificates from various tech competitions and hackathons.</p>
        </Reveal>
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
                    View Certificate <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
