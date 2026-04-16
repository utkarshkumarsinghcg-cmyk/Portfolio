import React from 'react';
import {Helmet} from 'react-helmet';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <Helmet>
                <title>About-Me</title>
                <meta name='description' content='My-journey to become a developer ' />
            </Helmet>
            <div className="about-inner">

                <div className="about-header">
                    <span className="about-tag">Get to know me</span>
                    <h2>About <span className="about-name-hl">Me</span></h2>
                </div>

                <div className="about-body">
                    <p className="about-para">
                        Hi! I'm <strong>Utkarsh Kumar Singh</strong>, a passionate{' '}
                        <strong>Full-Stack Developer</strong> pursuing my{' '}
                        <strong>BE in Computer Science</strong> from{' '}
                        Swaminarayan University, Gandhinagar, Gujarat. My journey into tech
                        began in 2025, and since then I have been relentlessly building,
                        learning, and shipping real-world projects that bridge great design
                        with solid engineering.
                    </p>

                    <p className="about-para">
                        On the frontend I specialise in <strong>React.js</strong>,{' '}
                        <strong>modern CSS</strong>, and crafting smooth animations that make
                        interfaces feel alive. On the backend I work with{' '}
                        <strong>Node.js</strong>, <strong>Express</strong>, and{' '}
                        <strong>MongoDB</strong> to build scalable APIs. I believe a great
                        product lives at the intersection of clean code and thoughtful
                        UI/UX — and that's exactly where I like to work.
                    </p>

                    <p className="about-para">
                        Beyond coding, I'm an active competitive programmer on{' '}
                        <strong>LeetCode</strong>, constantly sharpening my{' '}
                        <strong>data structures & algorithms</strong> skills. I also love
                        participating in hackathons — most recently placing in{' '}
                        <strong>Frontend Odyssey 2025</strong>. I'm currently open to{' '}
                        <strong>internships</strong> and freelance opportunities — let's build
                        something great together!
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;
