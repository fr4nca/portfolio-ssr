import React, { Component } from 'react';
import './About.css';
import NavbarAbout from '../components/Navbar/NavbarAbout';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';

export default class About extends Component {
  state = {
    navHeight: ''
  };

  setNavHeight = h => {
    this.setState({
      navHeight: h
    });
  };

  render() {
    return (
      <>
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
        <NavbarAbout setNavHeight={this.setNavHeight} />
        <div id="about" className="bg-light p-2">
          <div className="section">
            <h2 className="section-heading">About me</h2>
            <hr />
            <p className="me">
              My name is Victor Almeida França, I have a degree in Computer Science and I'm a fullstack web developer. My main stack involves a lot of
              NodeJS, Python and GoLang, and frameworks like React and Vue. I like to play a lot with DevOps, server management and Linux environments, Docker and Kubernetes.
            </p>
            <p className="me">
              I love everything that involves technology, it beeing developing
              applications, studying or even just watching conferences and
              getting to be up to date with what's trending.
            </p>
            <p className="me">
              I have a lot to discover and yet to learn and I'm more than
              excited to gradualy climb my way into being a successful
              professional doing what I love the most.
            </p>
            <hr />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
