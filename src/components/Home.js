import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductLibrary from './ProductLibrary';
import * as api from '../services/api';
import CategoryBar from './CategoryBar';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      productsList: '',
      searchText: '',
      categorySelect: '',
    };

    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleSearchProduct = this.handleSearchProduct.bind(this);
    this.getProductsCategoryAndQuery = this.getProductsCategoryAndQuery.bind(this);
    this.renderProductLibrary = this.renderProductLibrary.bind(this);
    this.handleSearchFromCategoryList = this.handleSearchFromCategoryList.bind(this);
  }

  handleSearchProduct() {
    const { categorySelect, searchText } = this.state;
    console.log(categorySelect, searchText);
    this.getProductsCategoryAndQuery(categorySelect, searchText);
  }

  handleSearchText({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleSearchFromCategoryList(categoryId) {
    this.setState({
      categorySelect: categoryId,
    });
    await this.getProductsCategoryAndQuery(categoryId);
  }

  async getProductsCategoryAndQuery(categoryId, query) {
    const products = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      productsList: products,
    });
  }

  renderProductLibrary() {
    const { productsList } = this.state;
    const parag = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
    if (!productsList) {
      return parag;
    }
    const { results } = productsList;
    return <ProductLibrary productsList={ results } />;
  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <input
          type="text"
          value={ searchText }
          name="searchText"
          onChange={ this.handleSearchText }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ this.handleSearchProduct }
          data-testid="query-button"
        >
          buscar
        </button>
        {this.renderProductLibrary()}
        <CategoryBar onClickCategory={ this.handleSearchFromCategoryList } />
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho!</Link>
      </div>
    );
  }
}

export default Home;
