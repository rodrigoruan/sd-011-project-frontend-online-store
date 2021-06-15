import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      api: [],
    };
  }

  componentDidMount() {
    getCategories().then((response) => this.setState({ api: response }));
  }

  render() {
    const { api } = this.state;
    if (!api) return <p>carregando...</p>;
    return (
      <div>
        <select>
          {api.map((item, index) => (
            <option data-testid="category" key={ index }>
              {' '}
              {item.name}
            </option>
          ))}
        </select>
        <input type="text" placeholder="digite aqui" />
        <Link data-testid="shopping-cart-button" to="cart">
          Carrinho
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
