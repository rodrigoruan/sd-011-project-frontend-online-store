import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Button from '../Components/ButtonShopCart';
import CategoryList from '../Components/CategoryList';
import ProductList from '../Components/ProductList';
import * as api from '../services/api';

class ListProducts extends Component {
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
      api.getProductsFromCategoryAndQuery(category, search)
        .then(({ results }) => {
          this.setState({ data: results });
        });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="flex-dashboard">
        <CategoryList
          handleUserInput={ this.HandlerState }
        />
        <div className="main-content">
          <div className="row">
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
            <Button />
          </div>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
          <ProductList productsList={ data } />
        </div>
      </div>
    );
  }
}

export default ListProducts;
