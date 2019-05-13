import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="main-footer" className="bg-darker text-center py-1">
        <div className="container">
          <ul className="links">
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://github.com/fr4nca"
              >
                <i className="fab fa-github fa-3x" />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://linkedin.com/fr4nca"
              >
                <i className="fab fa-linkedin fa-3x" />
              </a>
            </li>
            <li>
              <a href="mailto:fr4ncacc@gmail.com">
                <i className="fas fa-envelope fa-3x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
