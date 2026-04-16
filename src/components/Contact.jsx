import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Please replace these with your actual EmailJS IDs.
    // Get them by signing up at https://www.emailjs.com/
    emailjs.sendForm('service_0yjqixf', 'template_idne70w', form.current, '7LckNCnxd4JZRBZto')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully! I'll get back to you soon.");
          e.target.reset(); // clear form
          setIsSending(false);
      }, (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
          setIsSending(false);
      });
  };
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
              <a href="https://www.linkedin.com/in/utkarsh-kumar-singh-28ba04378/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/utkarshkumarsinghcg-cmyk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://x.com/UtkarshSin78788" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@UtkarshsBuilds" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://leetcode.com/u/utkarshkumarsingh/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <SiLeetcode />
              </a>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
