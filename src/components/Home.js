import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CategoryList from './CategoryList';
import ProductSearch from './ProductSearch';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      categoryId: '',
      productsFiltered: [],
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  onSearchTextChange(event) {
    const { target } = event;
    this.setState({
      query: target.value,
    });
  }

  async searchProducts() {
    const { query, categoryId } = this.state;
    const allProducts = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      productsFiltered: allProducts.results,
    });
  }

  render() {
    const { productsFiltered } = this.state;

    return (
      <div>
        <div>
          <CategoryList />
        </div>
        <div>
          <input
            data-testid="query-input"
            type="text"
            onChange={ this.onSearchTextChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ () => this.searchProducts() }
          >
            Pesquisar
          </button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <ProductSearch products={ productsFiltered } />

        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
      </div>
    );
  }
}
