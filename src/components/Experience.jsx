function Experience(props) {
  const listDesc = props.desc.map((x, index) => <li key={index}>{x}</li>);

  return (
    <div className="experience-card">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <h3 className="experience-card-name">{props.name}</h3>
      </a>
      <div className="experience-card-content">
        <div className="experience-card-title">{props.title}</div>
        <div className="experience-card-date">{props.date}</div>
        <ul className="experience-card-desc">{listDesc}</ul>
      </div>
    </div>
  );
}

export default Experience;
