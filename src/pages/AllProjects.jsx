import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/Projects.css';
import Reveal from '../components/Reveal';
import { projectList } from '../data';
import { FaGithub } from 'react-icons/fa';

const AllProjects = () => {
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = ['All', ...new Set(projectList.map(p => p.category))];

  const filteredProjects = activeTab === 'All' 
    ? projectList 
    : projectList.filter(project => project.category === activeTab);

  return (
    <div className="page-container" style={{ padding: '120px 20px', minHeight: '100vh', background: '#0d0d0d' }}>
      <section className="projects" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Link to="/" style={{ color: '#00d2ff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          &larr; Back to Home
        </Link>
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <h2>All Projects</h2>
          <p>A comprehensive view of my work.</p>
        </div>

        {/* Category Tabs */}
        <div className="project-tabs" style={{ marginBottom: '4rem' }}>
          {tabs.map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <Reveal className="projects-grid reveal-stagger">
          {filteredProjects.map((project) => (
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
                  <a href={project.link} className="btn-modern outline-btn" target="_blank" rel="noopener noreferrer">Live Site</a>
                  {project.videoLink && (
                    <a href={project.videoLink} className="btn-modern filled-btn" target="_blank" rel="noopener noreferrer" title="View Demo">
                      <span className="play-icon">▶</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="btn-modern github-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </section>
    </div>
  );
};

export default AllProjects;
