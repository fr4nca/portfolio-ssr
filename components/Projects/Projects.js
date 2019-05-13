import React, { Component } from "react";
import "./Projects.css";

import ProjectItem from "./ProjectItem";
import gameduc from "../../static/img/gameduc.png";
import prototipo from "../../static/img/prototipo.png";
import naoseesqueca from "../../static/img/naoseesqueca.png";
import elasporelas from "../../static/img/elasporelas.png";

const projetos = [
  {
    nome: "Gameduc",
    foto: gameduc,
    github: "https://github.com/fr4nca/gameduc",
    live: "http://gameeduc.com.br"
  },
  {
    nome: "Protótipo Gameduc",
    foto: prototipo,
    github: "https://github.com/fr4nca/prototipoGameficacaoCEUB",
    live: "https://ecstatic-liskov-084d66.netlify.com/"
  },
  {
    nome: "Elas por elas",
    foto: elasporelas,
    github: "https://github.com/fr4nca/ElasPorElas",
    live: "https://elasporelas.herokuapp.com/"
  },
  {
    nome: "Não se esqueça",
    foto: naoseesqueca,
    github: "https://github.com/fr4nca/projetoWeb",
    live: "https://naoseesqueca.herokuapp.com/"
  }
];

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="bg-darker p-2">
        <h2 className="section-heading">Projects</h2>
        <div className="project-grid">
          {projetos.map(projeto => (
            <ProjectItem key={projeto.nome} project={projeto} />
          ))}
        </div>
      </div>
    );
  }
}
