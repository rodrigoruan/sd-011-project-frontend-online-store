import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './img/bars-solid.svg';
import Close from './img/times-solid.svg';
import CartIcon from './img/shopping-cart-solid.svg';
import './css/Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }

  menuToggle = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  }

  render() {
    // Aria-hidden:
    // https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content?hl=pt-br
    const { toggle } = this.state;
    return (
      <header>
        <div className="menu" onClick={ this.menuToggle } aria-hidden="true">
          <img src={ Menu } alt="" width="20" />
        </div>
        <div className="logo">
          <h1><Link to="/">Mercado Livre</Link></h1>
        </div>
        <nav>
          <ul className={ toggle ? 'toggle' : '' }>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/product">Produtos</Link></li>
            <li><Link to="/contact">Contato</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/login">Login / Registro</Link></li>
            <li className="close" onClick={ this.menuToggle } aria-hidden="true">
              <img src={ Close } alt="" width="20" />
            </li>
          </ul>
          <div className="nav-cart">
            <span>0</span>
            <Link to="/cart">
              <img src={ CartIcon } alt="" width="20" />
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
