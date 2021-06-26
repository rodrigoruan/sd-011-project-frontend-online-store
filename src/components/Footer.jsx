import React, { Component } from 'react'
import git from '../images/git.svg'
import linkedin from '../images/in.svg'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <section className="foot">
      <div className="color"></div>
      <div className="footer">
        <div className="intern-footer">
          <div className="dev">
            < a >
              <img src={ git } alt="GitHub Link" className="git-image"/>
            </a>
            < a >
              <img src={ linkedin } alt="Linkedin Link" className="linkedin-image"/>
            </a>
            <span> Nome do Dev</span>
          </div>
          <div className="dev">
            < a >
              <img src={ git } alt="GitHub Link" className="git-image"/>
            </a>
            < a >
              <img src={ linkedin } alt="Linkedin Link" className="linkedin-image"/>
            </a>
            <span> Nome do Dev</span>
          </div>
          <div className="dev">
            < a >
              <img src={ git } alt="GitHub Link" className="git-image"/>
            </a>
            < a >
              <img src={ linkedin } alt="Linkedin Link" className="linkedin-image"/>
            </a>
            <span> Nome do Dev</span>
          </div>
          <div className="dev">
            < a >
              <img src={ git } alt="GitHub Link" className="git-image"/>
            </a>
            < a >
              <img src={ linkedin } alt="Linkedin Link" className="linkedin-image"/>
            </a>
            <span> Nome do Dev</span>
          </div>
          <div className="dev">
            < a >
              <img src={ git } alt="GitHub Link" className="git-image"/>
            </a>
            < a >
              <img src={ linkedin } alt="Linkedin Link" className="linkedin-image"/>
            </a>
            <span> Nome do Dev</span>
          </div>
        </div>
      </div>
      </section>
    )
  }
}
