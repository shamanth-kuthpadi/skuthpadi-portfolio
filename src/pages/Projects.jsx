import React from "react";
import TypingEffect from "react-typing-effect";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="project">
      <div className="project-main">
        <div className="header">
          <h1>
            <TypingEffect
              text={["Projects I Have Worked On ."]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
            />
          </h1>
        </div>
      </div>
      <div>
        <ProjectCard 
          name=""
        />
      </div>
    </div>
  );
}

export default Projects;
