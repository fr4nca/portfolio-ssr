import React, { Component } from 'react'
import './Projects.css'

import ProjectItem from './ProjectItem'
import gameduc from '../../static/img/gameduc.png'
import prototipo from '../../static/img/prototipo.png'
import naoseesqueca from '../../static/img/naoseesqueca.png'
import postsocial from '../../static/img/postsocial.png'

const projetos = [
  {
    nome: 'Gameduc',
    foto: gameduc,
    github: 'https://github.com/fr4nca/gameduc',
    live: 'http://gameeduc.com.br',
    desc: 'A platform that helps implement gamification on schools',
    stack: {
      backend:
        'NodeJS with Express, MySQL database hosted in Google Cloud, JWT token authentication',
      frontend: 'React with Redux'
    }
  },
  {
    nome: 'Protótipo Gameduc',
    foto: prototipo,
    github: 'https://github.com/fr4nca/prototipoGameficacaoCEUB',
    live: 'https://ecstatic-liskov-084d66.netlify.com/',
    desc: 'Prototype MVP for the Gameduc full project',
    stack: {
      frontend: 'Built with vanilla HTML, CSS and Javascript'
    }
  },
  {
    nome: 'Não se esqueça',
    foto: naoseesqueca,
    github: 'https://github.com/fr4nca/projetoWeb',
    live: 'https://naoseesqueca.herokuapp.com/',
    desc: '',
    stack: {}
  },
  {
    nome: 'Post Social',
    foto: postsocial,
    github: 'https://github.com/fr4nca/post-social-frontend',
    live: 'https://sharp-torvalds-825267.netlify.com/',
    desc:
      'A social-media like application where users can login to write posts, edit and delete their posts and read posts from other users',
    stack: {
      backend:
        'Python with Flask-RESTful, JWT token authentication with Flask-JWT and MySQL database.',
      frontend: 'VueJS with Vuex'
    }
  }
]

export default class Projects extends Component {
  render() {
    return (
      <div id='projects' className='bg-darker p-2'>
        <h2 className='section-heading'>Projects</h2>
        <div className='project-grid'>
          {projetos.map(projeto => (
            <ProjectItem key={projeto.nome} project={projeto} />
          ))}
        </div>
      </div>
    )
  }
}
