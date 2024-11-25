import React from "react";
import profilePicture from"./Debi Sela.jpg"

const About = () => {

return (
    <>
  <section id="about" className="about">
  <img src={profilePicture} alt="Profile" className="profile-picture"
   style={{ width: "150px", height: "150px", borderRadius: "50%"}}  />
    <h2>Debi Sela</h2>
    <p>Fullstack Developer | Environmental Engineer | Tech Enthusiast</p>
    <p>
    I am passionate about coding, water and wastewater engineering, and problem-solving. Currently seeking a role as a fullstack developer!
    </p>
  </section>
  </>
)
};

export default About;
