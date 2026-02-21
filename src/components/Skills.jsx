import React from 'react';
import './Skills.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiNumpy, SiPandas, SiMongodb } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { icon: <FaReact />, name: "React", color: "#61DAFB" },
                { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
                { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
                { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
                { icon: <SiTailwindcss />, name: "Tailwind", color: "#38B2AC" },
            ]
        },
        {
            title: "Backend & Languages",
            skills: [
                { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
                { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
                { icon: <FaPython />, name: "Python", color: "#3776AB" },
                { icon: <SiNumpy />, name: "NumPy", color: "#013243" },
                { icon: <SiPandas />, name: "Pandas", color: "#150458" },
            ]
        },
        {
            title: "UI/UX & Tools",
            skills: [
                { icon: <SiFigma />, name: "Figma", color: "#F24E1E" },
                { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
            ]
        }
    ];

    let globalIndex = 0; // Use a global index for stagger animation

    return (
        <section id="skills" className="skills">
            <div className="section-header">
                <h2>Technical Skills</h2>
                <p>Though I'm new to web development, having started in August 2024, I'm quickly mastering modern technologies separated into distinct domains.</p>
            </div>

            <div className="skills-categories-container">
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="skill-category">
                        <h3 className="category-title">{category.title}</h3>
                        <div className="skills-container">
                            {category.skills.map((skill) => {
                                const currentIndex = globalIndex++;
                                return (
                                    <div key={skill.name} className="skill-card" style={{ '--i': currentIndex }}>
                                        <div className="icon-wrapper" style={{ color: skill.color }}>
                                            {skill.icon}
                                        </div>
                                        <span>{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
