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

  async handleOnChange({ target }) {
    const { name, value } = target;
    await this.setState(({ [name]: value }));
    this.searchApi();
  }

  async searchApi() {
    this.setState({ products: undefined });
    const { query, category } = this.state;
    try {
      let products = await getProductsFromCategoryAndQuery(category, query);
      products = products.results.map(({ title, id, price, thumbnail, attributes }) => (
        { name: title, id, price, thumbnail, attributes }
      ));
      this.setState({ products });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Input onClick={ this.handleOnChange } />
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
