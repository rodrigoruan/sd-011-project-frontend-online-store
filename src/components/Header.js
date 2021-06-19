/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCart } from '../services/storage';

export default class Header extends Component {
  render() {
    const getAllProducts = () => {
      const cart = getCart();
      console.log(getCart());
      const reducer = (a, b) => a + b.quantity;
      return cart.reduce(reducer, 0);
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top expand-lg">
        <section className="navbar-nav" id="navbarNav">
          <li>
            <button
              className="btn btn-danger"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
                console.log(localStorage);
              }}
            >
              CLEAR
            </button>
          </li>
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
              Carrinho ({getAllProducts()})
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

          <li>
            <button
              className="btn btn-success"
              onClick={() => {
                if (localStorage.length > 0) {
                  return console.log(JSON.parse(localStorage.shoppingCart));
                }
              }}
            >
              LSTORAGE
            </button>
          </li>
        </section>
      </nav>
    );
  }
}
