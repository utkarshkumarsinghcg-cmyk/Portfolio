import React from 'react';
import {Helmet} from 'react-helmet';
import './Hackathons.css';
import Reveal from './Reveal';
import { hackathonList } from '../data';
import { FaCalendarAlt, FaGithub, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';

const Hackathons = () => {
  return (
    <section id="hackathons" className="hackathons">
      <div className="section-header">
        <Reveal>
          <h2>Hackathons</h2>
          <p>Building under pressure — real problems, tight deadlines, and bold ideas.</p>
        </Reveal>
      </div>

      <div className="hackathons-timeline">
        {hackathonList.map((hackathon, index) => (
          <Reveal key={hackathon.id} delay={index * 0.15}>
            <div className="hackathon-entry">

              {/* Timeline dot */}
              <div className="hackathon-dot">
                <FaTrophy />
              </div>

              {/* Spotlight Card */}
              <div className="hackathon-spotlight">
                <div className="hackathon-spotlight-inner">

                  {/* Left: Image Panel */}
                  <div className="hackathon-img-panel">
                    {hackathon.image && (
                      <img src={hackathon.image} alt={hackathon.hackathonName} />
                    )}
                    <span className="hack-badge">Hackathon</span>
                  </div>

                  {/* Right: Info Panel */}
                  <div className="hackathon-info-panel">
                    <div className="hack-top">
                      <span className="hack-date-chip">
                        <FaCalendarAlt size={11} /> {hackathon.date}
                      </span>
                      <h3 className="hackathon-name">{hackathon.hackathonName}</h3>
                      <span className="hack-project-label">🚀 Project: {hackathon.projectTitle}</span>
                    </div>

                    <div className="hack-problem">
                      <strong>Problem:</strong> {hackathon.problemStatement}
                    </div>

                    <div className="hack-tags">
                      {hackathon.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>

                    <div className="hack-actions">
                      {hackathon.link && (
                        <a href={hackathon.link} className="btn-modern outline-btn" target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt size={12} /> View Site
                        </a>
                      )}
                      {hackathon.github && (
                        <a href={hackathon.github} className="btn-modern github-btn" target="_blank" rel="noopener noreferrer" title="GitHub">
                          <FaGithub />
                        </a>
                      )}
                    </div>
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
