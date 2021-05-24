import React, { Component } from 'react';
import './Skills.css';

export default class Skills extends Component {
  render() {
    return (
      <div id='myskills'>
        <div className='section'>
          <ul className='skills-list'>
            <div id='frameworks'>
              <li>
                <i className='fab fa-python fa-2x' />
                Python
              </li>
              <li>
                <i className='fab fa-node-js fa-2x' />
                NodeJS
              </li>
              <li>
                <i className='fas fa-code fa-2x' />
                GoLang
              </li>
              <li>
                <i className='fab fa-docker fa-2x' />
                Docker
              </li>
              <li>
                <i className="fas fa-server fa-2x" />
                Server Management
              </li>
              <li>
                <i className='fab fa-linux fa-2x' />
                Linux
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
