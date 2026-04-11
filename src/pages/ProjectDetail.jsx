import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectList } from '../data';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import NotFound from './NotFound';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectList.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        <Link to="/projects" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>
        
        <div className="project-detail-content">
          <div className="project-header">
            <div className="project-icon">{project.icon}</div>
            <h1>{project.title}</h1>
            <div className="tags">
              {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>

          <div className="project-main">
            <div className="project-image-section">
              {project.image ? (
                <img src={project.image} alt={project.title} className="detail-image" />
              ) : (
                <div className="detail-image-placeholder">{project.icon}</div>
              )}
            </div>

            <div className="project-info-section">
              <h2>About the Project</h2>
              <p className="description">{project.description}</p>
              
              <div className="project-meta">
                <div className="meta-item">
                  <strong>Category:</strong> {project.category}
                </div>
              </div>

              <div className="detail-actions">
                <a href={project.link} className="btn-modern filled-btn" target="_blank" rel="noopener noreferrer">
                  Visit Live Site <FaExternalLinkAlt />
                </a>
                {project.github && (
                  <a href={project.github} className="btn-modern outline-btn" target="_blank" rel="noopener noreferrer">
                    View Code <FaGithub />
                  </a>
                )}
                {project.videoLink && (
                  <a href={project.videoLink} className="btn-modern video-btn" target="_blank" rel="noopener noreferrer">
                    Watch Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
