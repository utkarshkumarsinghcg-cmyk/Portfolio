import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>Have a project in mind? Let's work together.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p>utkarshkumarsingh491@gmail.com</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 8847029740</p>
          </div>
          <div className="info-item">
            <h3>Socials</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/utkarsh-kumar-singh-28ba04378/">LinkedIn</a>
              <a href="https://github.com/utkarshkumarsinghcg-cmyk">GitHub</a>
              <a href="https://x.com/UtkarshSin78788">Twitter</a>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
