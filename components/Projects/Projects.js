import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";
import gameduc from "../../static/img/gameduc.png";
import prototipo from "../../static/img/prototipo.png";
import naoseesqueca from "../../static/img/naoseesqueca.png";
import elasporelas from "../../static/img/elasporelas.png";

const projetos = [
  {
    nome: "Gameduc",
    foto: {
      foto: gameduc,
      w: "824",
      h: "375"
    },
    github: "https://github.com/fr4nca/gameduc",
    live: "http://gameeduc.com.br"
  },
  {
    nome: "Protótipo Gemeduc",
    foto: {
      foto: prototipo,
      w: "824",
      h: "367"
    },
    github: "https://github.com/fr4nca/prototipoGameficacaoCEUB",
    live: "https://ecstatic-liskov-084d66.netlify.com/"
  },
  {
    nome: "Elas por elas",
    foto: {
      foto: elasporelas,
      w: "824",
      h: "347"
    },
    github: "https://github.com/fr4nca/ElasPorElas",
    live: "https://elasporelas.herokuapp.com/"
  },
  {
    nome: "Não se esqueça",
    foto: { foto: naoseesqueca, w: "824", h: "342" },
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
