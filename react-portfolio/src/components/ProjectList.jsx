import React from "react";
import Project from "./Project";

const projects = [
  { title: "Tetris", description: "...", link: "https://tetris.com" },
  { title: "EasyCart", description: "...", link: "https://shopping.com" },
  { title: "TagMaster", description: "...", link: "https://tagmaster.com" },
];

const ProjectsList = () => {

  return(
  <>
  <a href="#projects">Projects</a>
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
