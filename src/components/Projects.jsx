import React, { useState } from 'react';
import './Projects.css';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { projectList } from '../data';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Webpages');

  const filteredProjects = projectList.filter(project => project.category === activeTab);
  const displayedProjects = filteredProjects.slice(0, 2);

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>A selection of my recent work.</p>
      </div>

      {/* Category Tabs */}
      <div className="project-tabs">
        {['Webpages', 'Game', 'Ongoing'].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <Reveal className="projects-grid home-grid reveal-stagger">
        {displayedProjects.map((project) => (
          <div key={project.id} className="project-card modern-card">
            
            <div className="card-image-wrapper">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-image" />
              ) : (
                <div className="project-image-placeholder">
                  {project.icon}
                </div>
              )}
            </div>
            
            <div className="card-content">
              <div className="card-header">
                <div className="card-logo-wrapper">
                  {project.icon}
                </div>
                <h3>{project.title}</h3>
              </div>
              
              <p className="description-text">{project.description}</p>
              
              <div className="tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              
              <div className="card-actions">
                <Link to={`/project/${project.id}`} className="btn-modern detail-btn">Details</Link>
                <a href={project.link} className="btn-modern outline-btn" target="_blank" rel="noopener noreferrer">View Site</a>
                {project.videoLink && (
                  <a href={project.videoLink} className="btn-modern filled-btn" target="_blank" rel="noopener noreferrer">
                    <span className="play-icon">▶</span> Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
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
        ))}
        {filteredProjects.length > 2 && (
          <div className="project-card modern-card see-more-card">
            <Link to="/projects" className="see-more-circle-link" title="See all projects">
              <span className="arrow-icon">&rarr;</span>
            </Link>
          </div>
        )}
      </Reveal>
      
      <div className="section-footer">
        <Link to="/projects" className="btn btn-primary see-more-main-btn">
          See All Projects <span className="arrow-icon">&rarr;</span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
