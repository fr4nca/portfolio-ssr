import React, { Component } from "react";
import "./Skills.css";

export default class Skills extends Component {
  render() {
    return (
      <div id="myskills" className="bg-light p-2">
        <div className="section">
          <h2 className="section-heading">Skills</h2>
          <hr />
          <ul id="skills">
            <ul id="frotend-skills">
              <h2>Front-end</h2>
              <li>React/Angular front-end development</li>
              <li>Handlebars</li>
              <li>Vanilla HTML5, CSS3 and JavaScript</li>
              <li>Server-side and client-side rendering</li>
              <li>Redux and Context API</li>
            </ul>
            <ul id="backend-skills">
              <h2>Back-end</h2>
              <li>Express </li>
              <li>Nginx</li>
              <li>Websockets</li>
              <li>RESTfull APIs</li>
              <li>GraphQL APIs</li>
            </ul>
            <ul id="databases-skills">
              <h2>Databases</h2>
              <li>MySQL</li>
              <li>Postgres</li>
              <li>MongoDB</li>
              <li>Firebase</li>
            </ul>
            <ul id="security-skills">
              <h2>Security</h2>
              <li>JWT authentication</li>
              <li>OAuth</li>
              <li>Role based authorization</li>
            </ul>
            <ul id="deployment-skills">
              <h2>Deployment</h2>
              <li>Docker containers</li>
              <li>Container orchestration with Kubernetes</li>
              <li>Docker-compose</li>
            </ul>
            <ul id="nonspecific-skills">
              <h2>Non specific</h2>
              <li>Cloud computing</li>
              <li>Microservices</li>
              <li>Linux environment</li>
              <li>Server management</li>
              <li>MVC pattern</li>
            </ul>
          </ul>
          <ul className="skills-list">
            <div id="frameworks">
              <li>
                <i className="fab fa-node-js fa-2x" />
                NodeJS
              </li>
              <li>
                <i className="fab fa-react fa-2x" />
                React
              </li>
              <li>
                <i className="fas fa-code fa-2x" />
                Back-end
              </li>
            </div>
            <div id="technologies">
              <li>
                <i className="fab fa-html5 fa-2x" />
                HTML5
              </li>
              <li>
                <i className="fab fa-css3 fa-2x" />
                CSS3
              </li>
              <li>
                <i className="fab fa-js-square fa-2x" />
                JavaScript
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
