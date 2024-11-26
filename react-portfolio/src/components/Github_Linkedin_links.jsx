import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Github_Linkedin_links = () => {

return (
    <>
  <section id="links">
  <a href="https://github.com/debisela" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/debora-sela-7a3786b3/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
  </section>
  </>
)
};

export default Github_Linkedin_links;
