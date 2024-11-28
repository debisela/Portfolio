import React from "react";
import profilePicture from"./Debi Sela.jpg"

const About = () => {

return (
    <>
  <section id="about" className="about">
  <h1>Debi Sela</h1>
  <h2>Fullstack Developer | Environmental Engineer | Tech Enthusiast</h2>
  <div className="about-content">
    <div className="picture-container">
  <img src={profilePicture} alt="Profile" className="profile-picture"/>
  </div>
  <div className="bio-container">
    <p>
    I am a Fullstack Developer with a background as an Environmental Engineer, bringing over 10 years of experience in the water and wastewater sector. For the past 7 years, I have worked as a Presales and Solution Engineer, including 3 years in a SaaS company, where I gained valuable experience in the high-tech sector. This role enhanced my problem-solving skills, strengthened my ability to communicate complex technical solutions, and deepened my understanding of innovative technologies.
    </p>
    <p>
    My passion for problem-solving and innovation inspired me to transition into coding, where I aim to merge my technical expertise with my environmental interests to create impactful solutions.
    I grew up in Switzerland and spent over a decade in Israel, gaining rich cultural and professional insights. Fluent in English, German, Hebrew, and Spanish, I am excited to leverage my diverse skills and experiences in my next professional chapter.
    </p>
    </div>
    </div>
  </section>
  </>
)
};

export default About;
