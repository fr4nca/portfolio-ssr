import React from "react";
import "./ProjectItem.css";

export default function ProjectItem({ project }) {
  return (
    <div className="project-item bg-light">
      <div className="project-header">{project.nome}</div>
      <div className="project-content">
        <img
          className="project-img"
          src={project.foto.foto}
          width={project.foto.w}
          height={project.foto.h}
        />
        <div className="links">
          <a href={project.github} className="btn btn-dark">
            Github
          </a>
          <a href={project.live} className="btn btn-dark">
            Live
          </a>
        </div>
      </div>
    </div>
  );
}
