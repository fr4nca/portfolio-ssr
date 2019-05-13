import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";

import "./Landing.css";

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
          background: `url(../static/img/landing.svg) no-repeat center center/cover`,
          height: this.state.innerHeight
        }}
      >
        <div className="landing-content">
          <div className="container">
            <h1 className="l-heading">Victor Almeida França</h1>
            <p className="lead">Desenvolvedor Web, programador e entusiasta</p>
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
            </ul>
          </div>
          <div className="arrow">
            <ScrollLink
              activeClass="active"
              to="myskills"
              spy={true}
              smooth={true}
              duration={750}
              offset={-this.props.navHeight}
            >
              <span className="read">Leia mais</span>
              <i className="fas fa-angle-double-down fa-3x" />
            </ScrollLink>
          </div>
        </div>
      </div>
    );
  }
}
