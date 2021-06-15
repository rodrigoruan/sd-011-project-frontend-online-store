import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import * as api from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      category: '',
      isNotFound: false,
      product: '',
      products: [],
      loading: true,
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
        <label htmlFor="product">
          Digite o nome do produto:
          <input
            type="text"
            name="product"
            data-testid="query-input"
            value={ product }
            onChange={ this.onChangeHandler }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.requestProducts }
        >
          Pesquisar
        </button>
        <SideBar categories={ categories } onChangeHandler={ this.onChangeHandler } />
      </div>
    );
  }
}
