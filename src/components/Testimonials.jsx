import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Product Manager at TechFlow",
            content: "Utkarsh is one of the most talented developers I've worked with. He transformed our vague requirements into a stunning, high-performance platform.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Founder, StartUp Inc.",
            content: "The attention to detail and design aesthetics are unmatched. He delivered the project ahead of schedule and the code quality was exceptional.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Creative Director",
            content: "A true professional who understands both code and design. The animations and user interactions he implemented took our site to the next level.",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="testimonials" className="testimonials">
            <div className="section-header">
                <h2>Client Testimonials</h2>
                <p>What people say about working with me.</p>
            </div>

            <div className="testimonials-container">
                <div className="testimonial-card">
                    <div className="quote-icon">❝</div>
                    <p className="testimonial-text">{testimonials[activeIndex].content}</p>
                    <div className="testimonial-author">
                        <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="author-img" />
                        <div className="author-info">
                            <h4>{testimonials[activeIndex].name}</h4>
                            <span>{testimonials[activeIndex].role}</span>
                        </div>
                    </div>
                </div>

                <div className="testimonial-controls">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`control-dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`View testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
