import React from 'react';
import './FigmaDesigns.css';
import { figmaList } from '../data';
import { FaExternalLinkAlt, FaFigma } from 'react-icons/fa';

const FigmaDesigns = () => {
  return (
    <section id="figma" className="figma">
      <div className="section-header">
        <h2 className="section-title">Figma Designs</h2>
        <p className="section-subtitle">Showcasing my UI/UX design workflow and prototypes</p>
      </div>

      <div className="figma-grid">
        {figmaList.map((design) => (
          <div key={design.id} className="figma-card">
            <div className="figma-image-container">
              <img src={design.image} alt={design.title} className="figma-image" />
              <div className="figma-overlay">
                <a href={design.link} target="_blank" rel="noopener noreferrer" className="figma-link">
                  <FaFigma /> View Prototype
                </a>
              </div>
            </div>
            <div className="figma-info">
              <div className="figma-tags">
                {design.tags.map((tag, index) => (
                  <span key={index} className="figma-tag">{tag}</span>
                ))}
              </div>
              <h3 className="figma-title">{design.title}</h3>
              <p className="figma-description">{design.description}</p>
              <a href={design.link} target="_blank" rel="noopener noreferrer" className="btn-figma">
                <span>See Design</span>
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FigmaDesigns;
