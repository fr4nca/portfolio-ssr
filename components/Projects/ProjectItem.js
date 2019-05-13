import React from "react";
import "./ProjectItem.css";

export default function ProjectItem({ project }) {
  return (
    <div className="project-item bg-light">
      <div className="project-header">{project.nome}</div>
      <div className="project-content">
        <img className="project-img" src={project.foto} />
        <div className="links">
          <a target="_blank" href={project.github} className="btn btn-dark">
            Code
          </a>
          <a target="_blank" href={project.live} className="btn btn-dark">
            Live
          </a>
        </div>
      </div>
    </div>
  );
}
