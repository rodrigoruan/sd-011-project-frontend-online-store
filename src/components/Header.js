/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top expand-lg">
        <section className="navbar-nav" id="navbarNav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <strong>MercadoDibre</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cart"
              data-testid="shopping-cart-button
                "
              className="nav-link"
            >
              Carrinho

            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/checkout">
              Checkout
            </Link>
          </li>
        </section>
      </nav>
    );
  }
}
