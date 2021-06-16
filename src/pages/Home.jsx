import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import * as api from '../services/api';
import SearchBar from '../components/SearchBar';
import Product from '../components/Product';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      category: '',
      isNotFound: false,
      isUpdated: false,
      product: '',
      productsArray: [],
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.requestCategories = this.requestCategories.bind(this);
    this.requestProducts = this.requestProducts.bind(this);
  }

  componentDidMount() {
    this.requestCategories();
  }

  componentDidUpdate() {
    const { isUpdated } = this.state;
    if (isUpdated) {
      this.requestProducts();
    }
  }

  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
      isUpdated: true,
    });
  }

  async requestCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  async requestProducts() {
    const { category, product } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(category, product);
    const productsArray = products.results;
    if (!products) {
      this.setState({
        isNotFound: true,
        productsArray: [],
        isUpdated: false,
      });
      return;
    }
    this.setState({
      productsArray,
      isNotFound: false,
      isUpdated: false,
    });
  }

  render() {
    const { categories, isNotFound, product, productsArray } = this.state;
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
        <SideBar
          categories={ categories }
          onChangeHandler={ this.onChangeHandler }
        />
        { productsArray.map((element) => (
          <Product
            key={ element.id }
            id={ element.id }
            title={ element.title }
            thumbnail={ element.thumbnail }
            price={ element.price }
          />
        ))}
      </div>
    );
  }
}
