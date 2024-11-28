import React from "react";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li className="skill-card">
            <h3>Programming & Development</h3>
            <p>
              Expertise in modern web development technologies and tools, including:
            </p>
            <ul className="horizontal-list">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML, CSS</li>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>Python</li>
              <li>OOP</li>
              <li>PostgreSQL</li>
              <li>GitHub</li>
              <li>VS Code</li>
            </ul>
          </li>
          <li className="skill-card">
            <h3>Languages</h3>
            <p>Fluent in multiple languages, enhancing communication and collaboration:</p>
            <ul className="horizontal-list">
              <li>German (Native)</li>
              <li>English (Fluent)</li>
              <li>Spanish (Fluent)</li>
              <li>Hebrew (Fluent)</li>
            </ul>
          </li>
          <li className="skill-card">
            <h3>Engineering & Technical Skills</h3>
            <p>
              In-depth knowledge of environmental engineering processes and software, such as:
            </p>
            <ul className="horizontal-list">
              <li>Environmental Modeling</li>
              <li>Wastewater treatment</li>
              <li>Process Engineering</li>
              <li>GIS</li>
              <li>AutoCAD</li>
              <li>CRM tools</li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Skills;
