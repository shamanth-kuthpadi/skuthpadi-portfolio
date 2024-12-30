
function ProjectCard(props) {
    return (
      <div className="project-card">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <h3 className="project-card-name">{props.name}</h3>
        </a>
        <div className="project-card-content">
          <div className="project-card-tools">{props.title}</div>
          <div className="project-card-date">{props.date}</div>
          <ul className="project-card-desc">{props.desc}</ul>
        </div>
      </div>
    );
}

export default ProjectCard;