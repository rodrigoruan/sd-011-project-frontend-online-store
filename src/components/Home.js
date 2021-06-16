import React, { Component } from 'react';
<<<<<<< HEAD:src/Home.js
import ProductLibrary from './ProductLibrary';
import * as api from './services/api';
=======
import { Link } from 'react-router-dom';
import CategoryBar from './CategoryBar';
>>>>>>> 762834a413c7911c1434b69a6dc9030adec1002d:src/components/Home.js

class Home extends Component {
  constructor() {
    super();

    this.state = {
      productsList: [],
      searchText: '',
      categorySelect: '',
    };

    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleSearchProduct = this.handleSearchProduct.bind(this);
    this.getProductsQuery = this.getProductsQuery.bind(this);
    this.getProductsCategoryAndQuery = this.getProductsCategoryAndQuery.bind(this);
    this.renderProductLibrary = this.renderProductLibrary.bind(this);
  }

  handleSearchProduct() {
    const { categorySelect, searchText } = this.state;
    if (categorySelect === '') {
      return this.getProductsQuery(searchText);
    }
    return this.getProductsCategoryAndQuery(categorySelect, searchText);
  }

  handleSearchText({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async getProductsQuery(query) {
    const products = await api.getProductsFromQuery(query);
    const state = this.setState({
      categorySelect: products,
    });
    return state;
  }

  async getProductsCategoryAndQuery(categoryId, query) {
    const products = await api.getProductsFromCategoryAndQuery(categoryId, query);
    const state = this.setState({
      productsList: products,
    });
    return state;
  }

  renderProductLibrary() {
    const { productsList } = this.state;
    const para = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
    if (productsList.length === 0) {
      return para;
    }
    return <ProductLibrary productsList={ productsList } />;
  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
<<<<<<< HEAD:src/Home.js
        <input
          type="text"
          value={ searchText }
          name="searchText"
          onChange={ this.handleSearchText }
        />
        <button
          type="button"
          onClick={ this.handleSearchProduct() }
        >
          buscar
        </button>
        {this.renderProductLibrary()}
=======
        <CategoryBar />
        <input />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho!</Link>
>>>>>>> 762834a413c7911c1434b69a6dc9030adec1002d:src/components/Home.js
      </div>
    );
  }
}

export default Home;
