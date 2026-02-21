import React, { useState } from 'react';
import './Projects.css';
import Reveal from './Reveal';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const projectList = [
    {
      id: 4,
      title: "Forme-Clone",
      description: "A modern hardware solutions website showcasing tools, components, and technology essentials.",
      tags: ["HTML", "CSS"],
      link: "https://frome.netlify.app/",
      category: "Webpages"
    },
    {
      id: 5,
      title: "Cinnamon kitchen - Clone",
      description: "The gifting page of the website showcases a range of artisanal, healthy snack hampers and gift sets that can be shipped across India with customized packaging and messages.",
      tags: ["HTML", "CSS"],
      link: "https://cinnamonkitchen-clone.netlify.app/",
      category: "Webpages"
    },
    {
      id: 6,
      title: "Incredible India-clone",
      description: "A static multi-page clone of the Incredible India tourism website built using HTML and CSS.",
      tags: ["HTML", "CSS"],
      link: "https://incredibleindiaclone.netlify.app/",
      category: "Webpages"
    },
    {
      id: 8,
      title: "Magicbricks-clone",
      description: "A responsive static Magicbricks clone focusing on layout, design, and UI structure.",
      tags: ["HTML", "CSS"],
      link: "https://magickbrick-clone.netlify.app/",
      category: "Webpages"
    },
    {
      id: 7,
      title: "Study-Clock",
      description: "This is a study clock that helps you to study for a certain amount of time and take breaks in between. It has timer and stop watch features and also a to-do list.",
      tags: ["React"],
      link: "https://clock-timer-project.vercel.app/",
      category: "Webpages"
    },
    {
      id: 9,
      title: "Tic-Tac-Toe App",
      description: "A fully functional interactive Tic-Tac-Toe game built with modern web technologies and logic.",
      tags: ["React", "JavaScript"],
      link: "#", // Placeholder
      category: "Game"
    },
    {
      id: 10,
      title: "E-Commerce Dashboard",
      description: "A massive full-stack inventory management system actively in development with live data tracking.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#", // Placeholder
      category: "Ongoing"
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
          <div key={project.id} className="project-card">
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <a href={project.link} className="card-link" target="_blank" rel="noopener noreferrer">View Project &rarr;</a>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default Projects;
