import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';

import ProductList from './ProductList';
import CategoryList from './CategoryList';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: '',
      category: '',
    };

    this.HandlerState = this.HandlerState.bind(this);
    this.RequestApi = this.RequestApi.bind(this);
  }

  HandlerState(event) {
    const { target: { name, value } } = event;
    if (name === 'category') {
      this.setState({ [name]: value }, () => this.RequestApi());
    } else {
      this.setState({ [name]: value });
    }
  }

  RequestApi() {
    const { search, category } = this.state;
    this.setState({ data: [] }, () => {
      Api.getProductsFromCategoryAndQuery(category, search)
        .then(({ results }) => {
          this.setState({ data: results });
        });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="search">
            <input
              data-testid="query-input"
              type="text"
              name="search"
              onChange={ this.HandlerState }
            />
          </label>
          <button
            data-testid="query-button"
            type="submit"
            onClick={ this.RequestApi }
          >
            Pesquisar
          </button>
          <Link
            to="shoppingCart"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
        </div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div>
          <CategoryList
            handleUserInput={ this.HandlerState }
          />
          <ProductList productsList={ data } />
        </div>

      </div>
    );
  }
}

export default MainPage;
