import React, { useState } from 'react';
import './Projects.css';
import Reveal from './Reveal';
import { FaLaptop, FaStore, FaBuilding, FaClock, FaGamepad, FaChartBar, FaDesktop } from 'react-icons/fa';
import oceanImg from '../assets/image 46.png';
import formeImg from '../assets/image 47.png';
import cinnamonImg from '../assets/image 48.png';
import magicImg from '../assets/image 49.png';
import clockImg from '../assets/image 50.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const projectList = [
    {
      id: 11,
      title: "Frontend Odyssey Hackathon",
      description: "A fully frontend interactive project developed for the Frontend Odyssey Hackathon. Built with React, featuring rich animations and an immersive UI/UX.",
      tags: ["React", "Animations", "Frontend"],
      link: "https://frontend-odyssey-8c6v.vercel.app/",
      category: "Webpages",
      icon: <FaLaptop />,
      image: oceanImg
    },
    {
      id: 4,
      title: "Forme-Clone",
      description: "A modern hardware solutions website showcasing tools, components, and technology essentials.",
      tags: ["HTML", "CSS"],
      link: "https://frome.netlify.app/",
      videoLink: "https://youtu.be/YicDrCGcrw4?si=WJygjlAix0Ow9vtq",
      category: "Webpages",
      icon: <FaDesktop />,
      image: formeImg
    },
    {
      id: 5,
      title: "Cinnamon kitchen - Clone",
      description: "The gifting page of the website showcases a range of artisanal, healthy snack hampers and gift sets that can be shipped across India.",
      tags: ["HTML", "CSS"],
      link: "https://cinnamonkitchen-clone.netlify.app/",
      videoLink: "https://youtu.be/i_h8CI5B6Nc?si=rC1ERdR1VYUvMmXH",
      category: "Webpages",
      icon: <FaStore />,
      image: cinnamonImg
    },
    {
      id: 8,
      title: "Magicbricks-clone",
      description: "A responsive static Magicbricks clone focusing on layout, design, and UI structure.",
      tags: ["HTML", "CSS"],
      link: "https://magickbrick-clone.netlify.app/",
      videoLink: "https://youtu.be/S58FhaNs9Xg?si=GyXdt6W1lj7AoSae",
      category: "Webpages",
      icon: <FaBuilding />,
      image: magicImg
    },
    {
      id: 7,
      title: "Study-Clock",
      description: "This is a study clock that helps you to study for a certain amount of time and take breaks in between. Includes timer and to-do list.",
      tags: ["React"],
      link: "https://clock-timer-project.vercel.app/",
      category: "Webpages",
      icon: <FaClock />,
      image: clockImg
    },
    {
      id: 9,
      title: "Tic-Tac-Toe App",
      description: "A fully functional interactive Tic-Tac-Toe game built with modern web technologies and logic.",
      tags: ["React", "JavaScript"],
      link: "#",
      category: "Game",
      icon: <FaGamepad />
    },
    {
      id: 10,
      title: "E-Commerce Dashboard",
      description: "A massive full-stack inventory management system actively in development with live data tracking.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      category: "Ongoing",
      icon: <FaChartBar />
    }
  ];

  const filteredProjects = activeTab === 'All'
    ? projectList
    : projectList.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>A selection of my recent work.</p>
      </div>

      {/* Category Tabs */}
      <div className="project-tabs">
        {['All', 'Webpages', 'Game', 'Ongoing'].map(tab => (
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
            
            <div className="card-top-decoration"></div>

            {project.image && (
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-thumb" />
              </div>
            )}
            
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
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default Projects;
