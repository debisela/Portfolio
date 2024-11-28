import React from "react";
import Project from "./Project";
import Tetris from "./Tetris.jpg"
import EasyCart1 from "./EasyCart1.jpg"
import EasyCart2 from "./EasyCart2.jpg"
import TagMaster1 from "./TagMaster1.jpg"
import TagMaster2 from "./TagMaster2.jpg"
import TagMaster3 from "./TagMaster3.jpg"

const projects = [
  {
    title: "Tetris",
    description: "A browser-based Tetris game.",
    link: "https://tetris-onm0.onrender.com/",
    github: "https://github.com/debisela/tetris",
    reason: "Created during a Hackathon in collaboration with another student. We wanted to build a classic game, since we love Tetris and it was a great opportunity to practice DOM manipulation.",
    tools: "JavaScript, HTML, CSS",
    time: "4 days",
    challenges: "Implementing the collision detection for tetromino shapes.",
    lessons: "Learned how to optimize DOM manipulation for smoother animations.",
    screenshots: [
      Tetris
    ],
  },
  {
    title: "EasyCart",
    description: "A grocery shopping app that categorizes items and tracks them during the shopping.",
    link: "https://easycartapp.onrender.com",
    github: "https://github.com/debisela/Hackathon_July_24",
    reason: "This app was developed during a Hackathon with the goal of simplifying the grocery shopping experience. It allows users to manually input a shopping list, which is then automatically sorted into categories for better organization. If an item matches multiple products, the app provides options to refine the selection. During shopping, users can filter their list by marking items as either 'found' and added to the cart or 'not found'. This dynamic functionality enhances efficiency, making grocery trips more streamlined and hassle-free.",
    tools: "JavaScript, HTML, CSS, Node.js, PostgreSQL",
    time: "4 days",
    challenges: "Handling multiple items category.",
    lessons: "I gained valuable experience in connecting the backend to the frontend and implementing a database. This project helped me understand how to handle data flow between the client and server, ensuring smooth interaction and storage of user inputs. I also deepened my knowledge of database integration, which was crucial for managing and organizing shopping list data effectively.",
    screenshots: [
      EasyCart1,
      EasyCart2,
    ],
  },
  {
    title: "TagMaster",
    description: "A conference registration app with attendee check-in and badge styling and printing.",
    link: "https://test-final-project-vanilla-client.onrender.com",
    github: "https://github.com/debisela/final_project_october24_js",
    reason: "This project was developed as the final project of a fullstack bootcamp. The app is designed to simplify and streamline the conference registration process by providing administrators and onsite employees with intuitive, customizable tools to manage attendee data and print personalized tags efficiently. It includes two distinct user interfaces: one for administrators and one for onsite employees. Key features implemented include attendee check-in/check-out, tag printing, field selection for tags, and tag styling customization.",
    tools: "React, Redux, CSS, Node.js, PostgreSQL",
    time: "1 month",
    challenges: "Handling real-time updates for attendee statuses.",
    lessons: "I deepened my knowledge of building React applications and enhanced my skills in using Redux for state management. This project also helped me improve my understanding of handling user interfaces with different roles and managing complex data workflows in a real-world scenario.",
    screenshots: [
      TagMaster1,
      TagMaster2,
      TagMaster3
    ],
  },
];

const ProjectsList = () => {
  return (
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
  );
};

export default ProjectsList;

