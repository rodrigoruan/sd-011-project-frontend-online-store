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
      category: 'MLB1953',
      products: undefined,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.searchApi = this.searchApi.bind(this);
  }

  componentDidMount() {
    this.searchApi();
  }

  handleOnChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({ [name]: value }));
    this.searchApi();
  }

  async searchApi() {
    const { query, category } = this.state;
    let products = await getProductsFromCategoryAndQuery(category, query);
    products = products.results.map(({ title, id, price }) => (
      { name: title, key: id, price }
    ));
    this.setState({ products });
  }

  render() {
    const { query, products } = this.state;
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
        {(products === undefined)
          ? <p>Loading...</p>
          : <ListCards products={ products } />}
      </div>
    );
  }
}
