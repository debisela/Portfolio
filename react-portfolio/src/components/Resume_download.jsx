import React from "react";
import CV from "./CV_Debi_Sela.pdf"

const Resume_download= () => {

return (
    <>
  <section id="resume">
  <a href={CV} download className="button">
          Download Resume
        </a>
  </section>
  </>
)
};

export default Resume_download;
