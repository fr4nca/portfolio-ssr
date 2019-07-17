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
              <li>React</li>
              <li>VueJS</li>
              <li>Vanilla HTML5, CSS3 and JavaScript</li>
              <li>CSS frameworks like Bootstrap, Bulma and Materialize</li>
              <li>Server-side and client-side rendering</li>
              <li>Redux, Vuex and Context API state management</li>
            </ul>
            <ul id="mobile-skills">
              <h2>Mobile Development</h2>
              <li>React Native</li>
            </ul>
            <ul id="backend-skills">
              <h2>Back-end</h2>
              <li>Express</li>
              <li>Django</li>
              <li>Flask</li>
              <li>Nginx</li>
              <li>Websockets</li>
              <li>RESTfull APIs</li>
              <li>GraphQL APIs</li>
            </ul>
            <ul id="databases-skills">
              <h2>Databases</h2>
              <li>Postgres</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
            <ul id="security-skills">
              <h2>Security</h2>
              <li>JWT authentication</li>
              <li>OAuth</li>
              <li>Role based authorization</li>
            </ul>
            <ul id="nonspecific-skills">
              <h2>Non specific</h2>
              <li>Cloud Computing</li>
              <li>Docker</li>
              <li>Docker-compose</li>
              <li>Kubernetes</li>
              <li>Microservices</li>
              <li>Linux environment</li>
              <li>Server management</li>
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
                <i className="fab fa-python fa-2x" />
                Python
              </li>
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
          <div className="resume">
            <a
              className="btn btn-dark download-resume"
              target="_blank"
              href="../../static/pdf/CURRICULO_Victor.pdf"
            >
              Currículo / Resumè
            </a>
          </div>
        </div>
      </div>
    );
  }
}
