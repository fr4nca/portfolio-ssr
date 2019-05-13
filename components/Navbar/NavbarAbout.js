import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import "./NavbarAbout.css";

class NavbarAbout extends Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }

  state = {
    navHeight: ""
  };

  componentDidMount() {
    this.props.setNavHeight(this.nav.current.clientHeight);
    this.setState({
      navHeight: this.nav.current.clientHeight
    });
  }

  render() {
    return (
      <div>
        <nav id="navbarabout" ref={this.nav}>
          <h1 className="logo">
            {this.props.where === "home" ? (
              <ScrollLink
                activeClass="active"
                to="landing"
                spy={true}
                smooth={true}
                duration={750}
              >
                Victor França
              </ScrollLink>
            ) : (
              <Link href="/">Victor França</Link>
            )}
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
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarAbout;
