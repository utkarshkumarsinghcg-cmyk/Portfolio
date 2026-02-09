import React from 'react';
import './Skills.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiNumpy, SiPandas } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "#38B2AC" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
        { icon: <SiFigma />, name: "Figma", color: "#F24E1E" },
        { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
        { icon: <FaPython />, name: "Python", color: "#3776AB" },
        { icon: <SiNumpy />, name: "NumPy", color: "#013243" },
        { icon: <SiPandas />, name: "Pandas", color: "#150458" },
    ];

    return (
        <section id="skills" className="skills">
            <div className="section-header">
                <h2>Technical Skills</h2>
                <p>Though I'm new to web development, having started in August 2024, I'm quickly mastering modern frontend technologies and design tools.</p>
            </div>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card" style={{ '--i': index }}>
                        <div className="icon-wrapper" style={{ color: skill.color }}>
                            {skill.icon}
                        </div>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
