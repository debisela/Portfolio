import React from "react";
import Project from "./Project";

const projects = [
  { title: "Tetris", description: "...", link: "https://tetris-onm0.onrender.com/" },
  { title: "EasyCart", description: "...", link: "https://easycartapp.onrender.com" },
  { title: "TagMaster", description: "...", link: "https://tagmaster.com" },
];

const ProjectsList = () => {

  return(
  <>
  <section id="projects" className="projects">
    <h2>My Projects</h2>
    <div className="project-list">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  </section>
  </>
  )
};

export default ProjectsList;
