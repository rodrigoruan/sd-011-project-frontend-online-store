import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Filtros from './Filtros';
import Input from './Input';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      category: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({ [name]: value }));
  }

  render() {
    const { query, category } = this.state;
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Input value={ query } onChange={ this.handleOnChange } />
        <Filtros onClick={ this.handleOnChange } />
        <Link to="/ShoppingCart">
          <button data-testid="shopping-cart-button" type="button">
            Carrinho de Compras
          </button>
        </Link>
        <ListCards query={ query } category={ category } />
      </div>
    );
  }
}
