import React from "react";
import profilePicture from"./Debi Sela.jpg"

const About = () => {

return (
    <>
  <section id="about" className="about">
  <h2>Fullstack Developer | Environmental Engineer | Tech Enthusiast</h2>
  <img src={profilePicture} alt="Profile" className="profile-picture"
   style={{ width: "150px", height: "150px", borderRadius: "50%"}}  />
    
    <p>
    I am a Fullstack Developer with a background as an Environmental Engineer, bringing over 10 years of experience in process design and water engineering. My passion for problem-solving and innovation led me to pursue a career in coding, where I aim to merge my technical expertise with my environmental interests to create impactful solutions. I grew up in Switzerland and spent over a decade in Israel, gaining cultural and professional insights. Fluent in English, German, Hebrew, and Spanish, I am excited to leverage my diverse skills and experiences in my next professional chapter.
    </p>
  </section>
  </>
)
};

export default About;
