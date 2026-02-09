import React from 'react';
import './About.css';
import { FaCode, FaPaintBrush, FaBrain } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="section-header">
                    <h2>About Me</h2>
                </div>

                <div className="about-cards">
                    <div className="about-card">
                        <div className="card-icon">
                            <FaCode />
                        </div>
                        <h3>Frontend Development</h3>
                        <p>Passionate about creating responsive and intuitive user interfaces with React and modern web technologies.</p>
                    </div>

                    <div className="about-card">
                        <div className="card-icon">
                            <FaPaintBrush />
                        </div>
                        <h3>UI/UX Design</h3>
                        <p>Learning to create user-centered designs and prototypes using modern design principles.</p>
                    </div>

                    <div className="about-card">
                        <div className="card-icon">
                            <FaBrain />
                        </div>
                        <h3>Quick Learner</h3>
                        <p>Started my development journey in August 2025 and rapidly learning new technologies.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
