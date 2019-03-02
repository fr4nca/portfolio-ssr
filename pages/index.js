import React, { Fragment, Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";

import "./index.css";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import Repos from "../components/Repos/Repos";

class Index extends Component {
  state = {
    navHeight: ""
  };

  componentDidMount() {
    this.setState({
      mounted: true
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        document.querySelector("#navbar").style.background =
          "rgba(31, 31, 31, 1)";
      } else {
        document.querySelector("#navbar").style.background =
          "rgba(31, 31, 31, 0)";
      }
    });
  }

  setNavHeight = h => {
    this.setState({
      navHeight: h
    });
  };

  render() {
    let content = (
      <Fragment>
        <Landing navHeight={this.state.navHeight} />
        <About />
        <Projects />
        <Repos />
      </Fragment>
    );

    return (
      <Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
          />
          <title>Victor Almeida França</title>
        </Head>
        <Navbar setNavHeight={this.setNavHeight} />
        {content}
        <Footer />
      </Fragment>
    );
  }
}

export default Index;
