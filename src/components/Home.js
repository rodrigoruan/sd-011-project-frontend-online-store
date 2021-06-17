import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CategoryList from './CategoryList';
import ProductSearch from './ProductSearch';
import './css/Section.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      categoryId: '',
      dataApi: [],
      request: false,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  onSearchTextChange(event) {
    const { target } = event;
    this.setState({
      query: target.value,
    });
  }

  fetchProducts = async (id) => {
    const { query, categoryId } = this.state;
    this.setState({ request: true, categoryId: id },
      async () => {
        const dataProducts = await api.getProductsFromCategoryAndQuery(categoryId, query);
        this.setState({
          dataApi: dataProducts.results,
          request: false,
          query: '',
        });
      });
  }

  render() {
    const { dataApi, request, query } = this.state;

    return (
      <div>
        <div>
          <CategoryList fetchProducts={ this.fetchProducts } />
        </div>
        <div className="searchbar">
          <input
            data-testid="query-input"
            type="text"
            onChange={ this.onSearchTextChange }
          />
          <button
            data-testid="query-button"
            type="button"
            placeholder="Pesquisar Items"
            onClick={ () => this.fetchProducts() }
            query={ query }
          >
            Pesquisar
          </button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <ProductSearch products={ dataApi } request={ request } />

        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
      </div>
    );
  }
}
