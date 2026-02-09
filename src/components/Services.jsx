import React from 'react';
import './Services.css';
import Reveal from './Reveal';

const Services = () => {
    const services = [
        {
            title: "Web Development",
            description: "Building fast, responsive, and secure websites tailored to your business needs.",
            icon: "💻"
        },
        {
            title: "UI/UX Design",
            description: "Designing intuitive and aesthetically pleasing interfaces for better user engagement.",
            icon: "🎨"
        },
        {
            title: "App Development",
            description: "Creating cross-platform mobile applications with seamless performance.",
            icon: "📱"
        },
        {
            title: "SEO Optimization",
            description: "Improving your website's visibility on search engines to drive organic traffic.",
            icon: "🚀"
        },
        {
            title: "Data Analytics",
            description: "Transforming raw data into meaningful insights using Python, Pandas, and NumPy.",
            icon: "📊"
        }
    ];

    return (
        <section id="services" className="services">
            <div className="section-header">
                <h2>What I Do</h2>
                <p>High-quality services for your digital growth.</p>
            </div>

            <Reveal className="services-grid reveal-stagger">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </Reveal>
        </section>
    );
};

export default Services;
