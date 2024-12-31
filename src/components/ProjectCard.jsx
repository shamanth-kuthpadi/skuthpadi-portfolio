import React, { useState } from "react";

function ProjectCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxPreviewLength = 100; // Define the max preview length

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const isLongDescription = props.description.length > maxPreviewLength;

  return (
    <div className="project-card">
      <h3 className="project-card-name">{props.name}</h3>
      <div className="project-card-tags">
        {props.tools.map((tool, index) => (
          <span key={index} className="project-card-tag">
            {tool}
          </span>
        ))}
      </div>
      <p className="project-card-desc">
        {isExpanded || !isLongDescription
          ? props.description
          : `${props.description.substring(0, maxPreviewLength)}...`}
        {isLongDescription && (
          <button className="read-more-btn" onClick={toggleDescription}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </p>
      {props.sourceCode && (
        <a
          href={props.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="source-code-btn"
        >
          &lt;/&gt;
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
