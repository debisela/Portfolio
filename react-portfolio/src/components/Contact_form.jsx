import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h2>Contact Me</h2>
        <div className="contact-container">
          {/* Contact Form */}
          <form action="#" method="POST" className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your message" required></textarea>
            <button type="submit">Send</button>
          </form>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://github.com/debisela"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/debora-sela-7a3786b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
