import React from 'react';
import './Hackathons.css';
import Reveal from './Reveal';
import { hackathonList } from '../data';
import { FaCalendarAlt, FaGithub } from 'react-icons/fa';

const Hackathons = () => {
  return (
    <section id="hackathons" className="hackathons">
      <div className="section-header">
        <Reveal>
          <h2>Hackathons</h2>
          <p>Innovating and building under pressure at various hackathons.</p>
        </Reveal>
      </div>

      <div className="hackathons-grid home-grid">
        {hackathonList.map((hackathon, index) => (
          <Reveal key={hackathon.id} delay={index * 0.1}>
            <div className="hackathon-card modern-card">
              <div className="hackathon-image-container">
                <img src={hackathon.image} alt={hackathon.hackathonName} className="hackathon-image" />
              </div>
              
              <div className="hackathon-content">
                <div className="hackathon-header">
                  <div className="hackathon-icon-wrapper">
                    {hackathon.icon}
                  </div>
                  <h3 className="hackathon-title">{hackathon.hackathonName}</h3>
                </div>
                
                <span className="hackathon-project-title">Project: {hackathon.projectTitle}</span>
                
                <div className="hackathon-problem">
                   <strong>Problem Statement:</strong> {hackathon.problemStatement}
                </div>
                
                <div className="hackathon-tags tags">
                  {hackathon.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                
                <div className="hackathon-footer">
                  <span className="hackathon-date">
                    <FaCalendarAlt size={12} /> {hackathon.date}
                  </span>
                  <div className="hackathon-links">
                     {hackathon.link && (
                        <a href={hackathon.link} className="btn-modern outline-btn" target="_blank" rel="noopener noreferrer">
                          View Site
                        </a>
                      )}
                      {hackathon.github && (
                         <a
                          href={hackathon.github}
                          className="btn-modern github-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on GitHub"
                        >
                          <FaGithub />
                        </a>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
