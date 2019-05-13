import React, { Component } from "react";
import Link from "next/link";
import "./NavbarAbout.css";

class NavbarAbout extends Component {
  constructor(props) {
    super(props);
    this.navabout = React.createRef();
  }

  state = {
    navHeight: ""
  };

  componentDidMount() {
    this.props.setNavHeight(this.navabout.current.clientHeight);
    this.setState({
      navHeight: this.navabout.current.clientHeight
    });
  }

  render() {
    return (
      <div>
        <nav id="navbarabout" ref={this.navabout}>
          <h1 className="logo">
            <Link href="/">
              <a>Victor França</a>
            </Link>
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
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarAbout;
