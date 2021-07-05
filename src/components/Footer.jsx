import React, { Component } from 'react';
import git from '../images/git.svg';
import linkedin from '../images/in.svg';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <section className="foot">
        <div className="color" />
        <div className="footer">
          <div className="intern-footer">
            <div className="dev">
              <a href="https://github.com/diogotrescastro">
                <img src={ git } alt="GitHub Link" className="git-image" />
              </a>
              <a href="https://www.linkedin.com/in/diogoaugusto/">
                <img src={ linkedin } alt="Linkedin Link" className="linkedin-image" />
              </a>
              <span>
                <b>Diogo</b>
                &nbsp;Augusto
              </span>
            </div>
            <div className="dev">
              <a href="https://github.com/gabrielafeijo">
                <img src={ git } alt="GitHub Link" className="git-image" />
              </a>
              <a href="https://www.linkedin.com/in/gabriela-feijo/">
                <img src={ linkedin } alt="Linkedin Link" className="linkedin-image" />
              </a>
              <span>
                <b>Gabriela</b>
                &nbsp;Feijó
              </span>
            </div>
            <div className="dev">
              <a href="https://github.com/Halysson2">
                <img src={ git } alt="GitHub Link" className="git-image" />
              </a>
              <a href="https://www.linkedin.com/mwlite/in/halysson-sena-0087b9212">
                <img src={ linkedin } alt="Linkedin Link" className="linkedin-image" />
              </a>
              <span>
                <b>Halysson</b>
                &nbsp;Sena
              </span>
            </div>
            <div className="dev">
              <a href="https://github.com/leonardo-pinto">
                <img src={ git } alt="GitHub Link" className="git-image" />
              </a>
              <a href="https://www.linkedin.com/in/leonardo-antonio-pinto/">
                <img src={ linkedin } alt="Linkedin Link" className="linkedin-image" />
              </a>
              <span>
                <b>Leonardo</b>
                &nbsp;Pinto
              </span>
            </div>
            <div className="dev">
              <a href="https://github.com/Sicarruda">
                <img src={ git } alt="GitHub Link" className="git-image" />
              </a>
              <a href="https://www.linkedin.com/in/jessica-arruda-62040a72/">
                <img src={ linkedin } alt="Linkedin Link" className="linkedin-image" />
              </a>
              <span>
                <b>Jéssica</b>
                &nbsp;Arruda
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
