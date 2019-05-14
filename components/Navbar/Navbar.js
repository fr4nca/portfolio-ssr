import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }

  state = {
    navHeight: "",
    checked: false
  };

  componentDidMount() {
    this.props.setNavHeight(this.nav.current.clientHeight);
    this.setState({
      navHeight: this.nav.current.clientHeight
    });
  }

  onChange = () => {
    this.setState({
      ...this.state,
      checked: !this.state.checked
    });
  };

  handleClick = () => {
    if (this.state.checked)
      this.setState({
        ...this.state,
        checked: false
      });
  };

  render() {
    return (
      <div>
        <nav id="navbar" ref={this.nav}>
          <h1 className="logo">
            <ScrollLink
              activeClass="active"
              to="landing"
              spy={true}
              smooth={true}
              duration={750}
            >
              Victor França
            </ScrollLink>
          </h1>
          <i id="menu-icon" className="fas fa-bars fa-2x" />
          <input
            type="checkbox"
            id="menu-button"
            checked={this.state.checked}
            onChange={this.onChange}
          />
          <div className="menu-wrapper">
            <ul className="nav">
              <li className="nav-item">
                <ScrollLink
                  activeClass="active"
                  to="myskills"
                  spy={true}
                  smooth={true}
                  offset={-this.state.navHeight + 5}
                  duration={750}
                  onClick={this.handleClick}
                >
                  Skills
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-this.state.navHeight + 5}
                  duration={750}
                  onClick={this.handleClick}
                >
                  Projects
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  activeClass="active"
                  to="repos"
                  spy={true}
                  smooth={true}
                  offset={-this.state.navHeight + 5}
                  duration={750}
                  onClick={this.handleClick}
                >
                  Repos
                </ScrollLink>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a>About me</a>
                </Link>
              </li>
              {/* <li className="nav-item">
                    <ScrollLink
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-this.state.navHeight}
                      duration={750}
                      onClick={this.handleClick}
                    >
                      Contact
                    </ScrollLink>
                  </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
