import React from 'react';
import './Education.css';
import Reveal from './Reveal';

const Education = () => {
    const education = [
        {
            id: 1,
            school: "Codinggita",
            degree: "Bachelor of Computer Science",
            field: "Web Development",
            year: "2025",
            description: "Focusing on full-stack web development, data structures, and algorithms."
        },
        {
            id: 2,
            school: "KV AFS HALWARA",
            degree: "High School (10th & 12th)",
            field: "Science Stream",
            year: "2024",
            description: "Completed secondary and higher secondary education with a focus on science and mathematics."
        }
    ];

    return (
        <section id="education" className="education">
            <div className="section-header">
                <h2>Education</h2>
                <p>My academic journey.</p>
            </div>

            <Reveal className="timeline">
                {education.map((item) => (
                    <div key={item.id} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>{item.school}</h3>
                            <div className="degree-info">
                                <span className="degree">{item.degree}</span>
                                <span className="year">{item.year}</span>
                            </div>
                            <p className="field">{item.field}</p>
                            <p className="description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Reveal>
        </section>
    );
};

export default Education;
