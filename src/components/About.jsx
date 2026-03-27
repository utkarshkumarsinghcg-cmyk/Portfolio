import React from 'react';
import './About.css';
import { FaDownload, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const About = () => {
    return (
        <section id="about" className="about">
            {/* Background elements */}
            <div className="about-background">
                <div className="bg-blob blob-1"></div>
                <div className="bg-blob blob-2"></div>
                <div className="bg-grid-overlay"></div>
            </div>

            <div className="about-container">

                {/* Header */}
                <div className="about-header">
                    <span className="about-tag">Get to know me</span>
                    <h2>About <span className="about-name-hl">Me</span></h2>
                </div>

                {/* Main layout */}
                <div className="about-layout">

                    {/* Left: Avatar + quick facts */}
                    <div className="about-sidebar">
                        <div className="about-avatar-ring">
                            <img
                                src="https://github.com/utkarshkumarsinghcg-cmyk/Portfolio/blob/main/img.png?raw=true"
                                alt="Utkarsh Kumar Singh"
                                className="about-avatar"
                            />
                        </div>

                        <div className="about-quick-facts">
                            <div className="fact-item">
                                <FaMapMarkerAlt className="fact-icon" />
                                <span>Gandhinagar, Gujarat</span>
                            </div>
                            <div className="fact-item">
                                <FaGraduationCap className="fact-icon" />
                                <span>BE CSE, Swaminarayan University</span>
                            </div>
                            <div className="fact-item">
                                <SiLeetcode className="fact-icon lc" />
                                <span>Active on LeetCode</span>
                            </div>
                        </div>

                        <a
                            href="https://drive.google.com/file/d/1gd8rC9jqg39QoFbZ4-nqfzD5FLbz1xXP/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-resume-btn"
                        >
                            <FaDownload /> Download Resume
                        </a>
                    </div>

                    {/* Right: Paragraphs */}
                    <div className="about-content">

                        <p className="about-para">
                            Hi! I'm <mark>Utkarsh Kumar Singh</mark>, a passionate{' '}
                            <mark>Full-Stack Developer</mark> pursuing my{' '}
                            <mark>BE in Computer Science</mark> from{' '}
                            <mark>Swaminarayan University, Gandhinagar, Gujarat</mark>. My journey into tech
                            began in <mark>August 2025</mark>, and since then I have been
                            relentlessly building, learning, and shipping real-world projects
                            that bridge great design with solid engineering.
                        </p>

                        <p className="about-para">
                            On the frontend I specialise in <mark>React.js</mark>,{' '}
                            <mark>modern CSS</mark>, and crafting silky-smooth animations that
                            make interfaces feel alive. On the backend I work with{' '}
                            <mark>Node.js</mark>, <mark>Express</mark>, and{' '}
                            <mark>MongoDB</mark> to build scalable APIs. I believe that a
                            great product is born at the intersection of{' '}
                            <mark>clean code</mark> and <mark>thoughtful UI/UX</mark> — and
                            that intersection is exactly where I like to work.
                        </p>

                        <p className="about-para">
                            Beyond work, I'm an active competitive programmer on{' '}
                            <mark>LeetCode</mark>, constantly sharpening my{' '}
                            <mark>data structures &amp; algorithms</mark> skills. When I'm
                            not coding, I explore design systems, contribute to hackathons
                            (I placed in <mark>Frontend Odyssey 2025</mark>!), and dive deep
                            into whatever new technology catches my eye. I'm currently
                            open to <mark>internships</mark> and{' '}
                            <mark>freelance opportunities</mark> — let's build something
                            great together!
                        </p>

                        {/* Stats row */}
                        <div className="about-stats">
                            <div className="stat-pill">
                                <span className="stat-num">10+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-pill">
                                <span className="stat-num">1+</span>
                                <span className="stat-label">Year Experience</span>
                            </div>
                            <div className="stat-pill">
                                <span className="stat-num">300+</span>
                                <span className="stat-label">Problems Solved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
