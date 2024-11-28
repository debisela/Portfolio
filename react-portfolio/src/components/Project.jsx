import React, { useState } from "react";

const Project = ({
  title,
  description,
  link,
  github,
  reason,
  tools,
  time,
  challenges,
  lessons,
  screenshots,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="project-button" onClick={toggleExpand}>
        {isExpanded ? "Hide Details" : "View Details"}
      </button>
      {isExpanded && (
        <div className="project-details">
          <p><strong>Project Purpose:</strong> {reason}</p>
          <p><strong>Tools Used:</strong> {tools}</p>
          <p><strong>Time Invested:</strong> {time}</p>
          <p><strong>Challenges:</strong> {challenges}</p>
          <p><strong>Lessons Learned:</strong> {lessons}</p>
          <div className="project-screenshots">
            {screenshots.map((screenshot, index) => (
              <img key={index} src={screenshot} alt={`${title} screenshot ${index + 1}`} />
            ))}
          </div>
          <div className="project-links">
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
