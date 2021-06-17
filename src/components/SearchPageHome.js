import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import * as api from '../services/api';
import ProductList from './ProductList';

export default class SearchPageHome extends Component {
  constructor() {
    super();

    this.state = {
      categoriesData: [],
      product: [],
      loading: true,
      query: '',
      categories: '',
      itemsCart: 0,
    };

    this.getProducts = this.getProducts.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.addItemCart = this.addItemCart.bind(this);
    this.handleListCategories = this.handleListCategories.bind(this);
    this.foundQuantityItemsCart = this.foundQuantityItemsCart.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  async handleListCategories({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    const { query } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(value, query);
    this.setState({
      product: response.results,
      loading: false,
    });
  }

  async getProducts() {
    const { query, categories } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(categories, query);
    this.setState({
      product: products.results,
      loading: false,
    });
  }

  async getCategories() {
    const categories = await api.getCategories();
    this.setState({
      categoriesData: categories,
    });
  }

  changeCategory({ target }) {
    this.setState({
      categories: target.value,
    });
  }

  filterProducts({ target }) {
    this.setState({
      query: target.value,
    });
  }

  addItemCart({ target }) {
    const { product, itemsCart } = this.state;
    product.countP = 1;
    const { value } = target;
    const productForCart = product.find((item) => item.id === value);

    this.setState({
      itemsCart: [...itemsCart, productForCart],
    });
  }

  foundQuantityItemsCart() {
    const getLocal = JSON.parse(localStorage.getItem('item'));
    let sumProduct = 0;
    getLocal.forEach((product) => {
      sumProduct += product.countP;
      return 1;
    });
    this.setState({
      itemsCart: sumProduct,
    });
  }

  render() {
    const { categoriesData, product, loading, itemsCart } = this.state;
    return (
      <div>
        <label htmlFor="initialMessage">
          <input
            data-testid="query-input"
            type="text"
            id="initialMessage"
            onChange={ this.filterProducts }
            name="query"
          />
        </label>
        { categoriesData.map((item) => (<Categories
          listCategories={ item }
          changeCategory={ this.handleListCategories }
          key={ item.name }
        />
        ))}
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.getProducts }
        >
          Pesquisar
        </button>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shoppingCart',
            state: itemsCart,
          } }
        >
          Carrinho(
          <span data-testid="shopping-cart-size">{itemsCart}</span>
          )
        </Link>
        {loading ? (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) : (product.map((item) => (<ProductList
          products={ item }
          key={ item.id }
          addItemCart={ this.addItemCart }
          foundQuantityItemsCart={ this.foundQuantityItemsCart }
        />)))}
      </div>
    );
  }
}
