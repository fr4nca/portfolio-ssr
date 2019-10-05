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
              My name is Victor Almeida França, currently I'm finishing my
              Computer Science degree and I'm a fullstack WEB developer, mostly
              focusing on the backend side. My main stack involves a lot of
              Javascript, creating RESTfull and GraphQL APIs with Express in
              NodeJS and building frontend applications with React and Angular.
              I have a little bit of experience with Python in WEB development
              too, with Django and using Flask to create powerfull APIs.
            </p>
            <p className="me">
              Regarding my technologies skills, I have experience dealing with
              HTTP requests to create powerfull RESTful and GraphQL APIs,
              relational and non-relational databases (SQL, MongoDB),
              authorization and authentication both in back-end and front-end
              using the latest technologies (JWT, OAuth..), MVC design pattern,
              server-side and client-side rendering, websockets for real-time
              apps such as chats and social-media. Regarding deployment I like
              to use Docker to encapsulate my projects, Google Cloud services
              and Digital Ocean droplets and clusters to host them, and I'm
              currently studying Kubernetes and container orchestration to
              easily scale projects.
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
