import React from "react";
import "./RepoItem.css";

export default function RepoItem({
  id,
  name,
  createdAt,
  updatedAt,
  url,
  description,
  primaryLanguage,
  owner
}) {
  return (
    <div className="repo-item bg-darker">
      <div className="repo-header">{name}</div>
      <div className="repo-content">
        {description ? (
          <span className="attribute">
            <span className="key">Descrição:</span> {description}
          </span>
        ) : null}
        {primaryLanguage ? (
          <span className="attribute">
            <span className="key">Language:</span> {primaryLanguage.name}
          </span>
        ) : null}
        <a className="btn" href={url}>
          Github
        </a>
      </div>
    </div>
  );
}
