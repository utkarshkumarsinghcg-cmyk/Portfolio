import React from 'react';
import './Projects.css';
import Reveal from './Reveal';

const Projects = () => {
  const projectList = [
    
  
   
    {
      id: 4,
      title: "Forme-Clone",
      description: "A modern hardware solutions website showcasing tools, components, and technology essentials.",
      tags: ["HTML", "CSS"],
      link: "https://frome.netlify.app/"
    },
    {
      id: 5,
      title: "Cinnamon kitchen - Clone",
      description: "The gifting page of the website showcases a range of artisanal, healthy snack hampers and gift sets that can be shipped across India with customized packaging and messages.",
      tags: ["HTML", "CSS"],
      link: "https://cinnamonkitchen-clone.netlify.app/"
    },

     {
      id: 6,
      title: "Incredible India-clone",
      description: "A static multi-page clone of the Incredible India tourism website built using HTML and CSS.",
      tags: ["HTML", "CSS"],
      link: "https://incredibleindiaclone.netlify.app/"
    },


     {
      id: 4,
      title: "Magicbricks-clone",
      description: "A responsive static Magicbricks clone focusing on layout, design, and UI structure.",
      tags: ["HTML", "CSS"],
      link: "https://magickbrick-clone.netlify.app/"
    },

     


  ];



  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>A selection of my recent work.</p>
      </div>

      <Reveal className="projects-grid reveal-stagger">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <a href={project.link} className="card-link">View Project &rarr;</a>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default Projects;
