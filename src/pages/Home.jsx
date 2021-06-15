import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import * as api from '../services/api';
import SearchBar from '../components/SearchBar';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      category: '',
      isNotFound: false,
      product: '',
      products: [],
      isLoading: true,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.requestCategories = this.requestCategories.bind(this);
    this.requestProducts = this.requestProducts.bind(this);
  }

  componentDidMount() {
    this.requestCategories();
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async requestCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  async requestProducts() {
    const { category, product } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(category, product);
    if (!products) {
      this.setState({
        isNotFound: true,
      });
      return;
    }
    this.setState({
      products,
      isNotFound: false,
    });
  }

  render() {
    const { categories, isNotFound, product } = this.state;
    if (isNotFound) {
      return <div>Nenhum produto foi encontrado</div>;
    }
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <SearchBar
          onChangeHandler={ this.onChangeHandler }
          product={ product }
          requestProducts={ this.requestProducts }
        />
        <SideBar categories={ categories } onChangeHandler={ this.onChangeHandler } />
      </div>
    );
  }
}
