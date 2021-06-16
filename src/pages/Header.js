import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top expand-lg ">
          <a className="navbar-brand" href="/">
            MercadoDibre
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Carrinho
                </a>
              </li>{' '}
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </header>
    );
  }
}
