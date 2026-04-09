import React, { useState } from 'react';
import './Projects.css';
import Reveal from './Reveal';
import { FaLaptop, FaStore, FaBuilding, FaClock, FaGamepad, FaChartBar, FaDesktop, FaGithub } from 'react-icons/fa';
import frontendOdeacy from '../assets/frontendOdeacy.png';
import Forme from '../assets/Forme.png';
import CinnamonKitchen from '../assets/CinnamonKitchen.png';
import MagicBrick from '../assets/MagicBrick.png';
import Clock from '../assets/Clock.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Webpages');
  const [showAll, setShowAll] = useState(false);

  const projectList = [
    {
      id: 11,
      title: "Frontend Odyssey Hackathon",
      description: "A fully frontend interactive project developed for the Frontend Odyssey Hackathon. Built with React, featuring rich animations and an immersive UI/UX.",
      tags: ["React", "Animations", "Frontend"],
      link: "https://frontend-odyssey-8c6v.vercel.app/",
      videoLink: "https://youtu.be/hfGGrY0ZCOI?si=wvgJLxupQeqVSbG9",
      github: "https://github.com/utkarshkumarsinghcg-cmyk/Frontend-Odyssey",
      category: "Webpages",
      icon: <FaLaptop />,
      image: frontendOdeacy
    },
    {
      id: 4,
      title: "Forme-Clone",
      description: "A modern hardware solutions website showcasing tools, components, and technology essentials.",
      tags: ["HTML", "CSS"],
      link: "https://frome.netlify.app/",
      videoLink: "https://youtu.be/YicDrCGcrw4?si=WJygjlAix0Ow9vtq",
      github: "https://github.com/utkarshkumarsinghcg-cmyk/FORME_CLONE",
      category: "Webpages",
      icon: <FaDesktop />,
      image: Forme
    },
    {
      id: 5,
      title: "Cinnamon kitchen - Clone",
      description: "The gifting page of the website showcases a range of artisanal, healthy snack hampers and gift sets that can be shipped across India.",
      tags: ["HTML", "CSS"],
      link: "https://cinnamonkitchen-clone.netlify.app/",
      videoLink: "https://youtu.be/i_h8CI5B6Nc?si=rC1ERdR1VYUvMmXH",
      github: "https://github.com/utkarshkumarsinghcg-cmyk/CINNAMON_KITCHEN-CLONE",
      category: "Webpages",
      icon: <FaStore />,
      image: CinnamonKitchen
    },
    {
      id: 8,
      title: "Magicbricks-clone",
      description: "A responsive static Magicbricks clone focusing on layout, design, and UI structure.",
      tags: ["HTML", "CSS"],
      link: "https://magickbrick-clone.netlify.app/",
      videoLink: "https://youtu.be/S58FhaNs9Xg?si=GyXdt6W1lj7AoSae",
      github: "https://github.com/utkarshkumarsinghcg-cmyk/MAGIC_BRICK_CLONE",
      category: "Webpages",
      icon: <FaBuilding />,
      image: MagicBrick
    },
    {
      id: 7,
      title: "Study-Clock",
      description: "This is a study clock that helps you to study for a certain amount of time and take breaks in between. Includes timer and to-do list.",
      tags: ["React"],
      link: "https://clock-timer-project.vercel.app/",
      videoLink: "https://youtu.be/S58FhaNs9Xg?si=GyXdt6W1lj7AoSae",
      github: "https://github.com/utkarshkumarsingh",
      category: "Webpages",
      icon: <FaClock />,
      image: Clock
    },
    {
      id: 9,
      title: "Tic-Tac-Toe App",
      description: "A fully functional interactive Tic-Tac-Toe game built with modern web technologies and logic.",
      tags: ["React", "JavaScript"],
      link: "#",
      github: "https://github.com/utkarshkumarsingh",
      category: "Game",
      icon: <FaGamepad />
    },
    {
      id: 10,
      title: "E-Commerce Dashboard",
      description: "A massive full-stack inventory management system actively in development with live data tracking.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "https://github.com/utkarshkumarsingh",
      category: "Ongoing",
      icon: <FaChartBar />
    }
  ];

  const filteredProjects = projectList.filter(project => project.category === activeTab);
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

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
            onClick={() => {
              if (activeTab !== tab) {
                setActiveTab(tab);
                setShowAll(false);
              }
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <Reveal className="projects-grid reveal-stagger">
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
      </Reveal>

      {filteredProjects.length > 3 && (
        <div className="see-more-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button 
            className="btn-modern filled-btn" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
