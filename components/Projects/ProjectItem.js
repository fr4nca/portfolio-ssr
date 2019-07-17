import React from "react";
import "./ProjectItem.css";

export default function ProjectItem({ project }) {
  return (
    <div className="project-item bg-light">
      <div className="project-header">{project.nome}</div>
      <div className="project-content">
        <img className="project-img" src={project.foto} />
        {project.desc ? (
          <div className="project-desc">{project.desc}</div>
        ) : null}
        {project.stack ? (
          <div className="project-stack">
            {project.stack.backend ? (
              <p>
                <strong>Backend: </strong>
                {project.stack.backend}
              </p>
            ) : null}
            {project.stack.frontend ? (
              <p>
                <strong>Frontend: </strong>
                {project.stack.frontend}
              </p>
            ) : null}
          </div>
        ) : null}
        <div className="links">
          <a target="_blank" href={project.github} className="btn btn-dark">
            Code
          </a>
          {project.live !== "" ? (
            <a target="_blank" href={project.live} className="btn btn-dark">
              Live
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
