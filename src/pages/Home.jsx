import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: '',
    };

    this.HandlerState = this.HandlerState.bind(this);
    this.RequestApi = this.RequestApi.bind(this);
  }

  HandlerState(event) {
    const { target: { value } } = event;
    this.setState({ search: value });
  }

  RequestApi() {
    const { search } = this.state;
    Api.getProductsFromCategoryAndQuery('', search)
      .then(({ results }) => {
        this.setState({ data: results });
      });
  }

  render() {
    const { data } = this.state;
    return (
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
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>

        <ProductList productsList={ data } />

        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <CategoryList />

      </div>
    );
  }
}

export default Home;
