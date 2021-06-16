import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListCards from './ListCards';
import Filtros from './Filtros';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Input from './Input';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      category: 'MLB1384',
      products: [],
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({ [name]: value }));
    this.searchApi();
  }

  async searchApi() {
    const { query, category } = this.state;
    console.log(query);
    let products = await getProductsFromCategoryAndQuery(query, category);
    console.log(products);
    products = products.results.map(({ title, id, price }) => (
      { name: title, key: id, price }
    ));
    this.setState(products);
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
