import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListCards from './ListCards';
import Filtros from './Filtros';
import Input from './Input';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      category: 'MLB1384',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({ [name]: value }));
  }

  async searchApi() {
    const { query, category } = this.state;
    let products = await getProductsFromCategoryAndQuery(query, category);
    products = products.results.map(({ title, id, price }) => (
      { name: title, key: id, price }
    ));
    return products;
  }

  render() {
    const { query } = this.state;
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
        <ListCards func={ this.searchApi } />
      </div>
    );
  }
}
