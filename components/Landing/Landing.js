import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import './Landing.css';

export default class Landing extends Component {
  state = {
    innerHeight: undefined
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      innerHeight: window.innerHeight
    });
  }

  render() {
    return (
      <div
        id="landing"
        style={{
          background: `url(/static/img/landing.jpg) no-repeat center center/cover`,
          height: this.state.innerHeight
        }}
      >
        <div className="landing-content">
          <div className="container">
            <h1 className="l-heading">Victor Almeida França</h1>
            <p className="lead">
              Web Fullstack and Mobile Developer, programmer
            </p>
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
                  href="https://www.linkedin.com/in/victor-almeida-franca/"
                >
                  <i className="fab fa-linkedin fa-3x" />
                </a>
              </li>
            </ul>
          </div>
          <div className="arrow">
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={750}
              offset={-this.props.navHeight + 5}
            >
              <span className="read">Projects</span>
              <i className="fas fa-angle-double-down fa-3x" />
            </ScrollLink>
          </div>
        </div>
      </div>
    );
  }
}
