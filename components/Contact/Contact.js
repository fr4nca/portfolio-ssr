import React, { Component } from "react";

import "./Contact.css";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div id="contact" className="bg-darker p-2">
        <div className="section">
          <h2 className="section-heading">Contact me</h2>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="8"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-light">
              Email me
            </button>
          </form>
        </div>
      </div>
    );
  }
}
