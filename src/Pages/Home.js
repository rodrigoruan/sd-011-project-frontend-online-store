import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Data from '../services/api';
import RadialButton from '../Components/RadialButton';
import CardProduct from '../Components/CardProduct';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      id: '',
      value: '',
      searchProducts: [],
      searchCategory: [],
      loading: true,
    };
    this.getProducts = this.getProducts.bind(this);
    this.getProductById = this.getProductById.bind(this);
    this.getValue = this.getValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getProductsFromCategory = this.getProductsFromCategory.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      value,
    });
  }

  async getValue({ target: { value } }) {
    this.setState({
      id: value,
      searchProducts: await this.getProductsFromCategory(value),
    });
  }

  async getProducts() {
    const fetchApi = await Data.getCategories();
    this.setState({
      categories: fetchApi,
    });
  }

  async getProductById() {
    const { id, value } = this.state;
    const fetchApi = await Data.getProductsFromCategoryAndQuery(id, value);
    this.setState({
      searchProducts: fetchApi.results,
    });
  }

  async getProductsFromCategory(id) {
    const products = await Data.getProductsFromCategoryAndQuery(id);
    return products.results;
  }

  render() {
    const { categories, searchProducts, searchCategory, loading } = this.state;

    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <label htmlFor="search">
          <input
            data-testid="query-input"
            onChange={ this.handleChange }
            id="search"
            type="text"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.getProductById }
          >
            Search
          </button>
        </label>
        <Link data-testid="shopping-cart-button" to="/shopcart">Carrinho</Link>
        {categories.map((eachCategory) => (
          <RadialButton
            category={ eachCategory }
            onClick={ this.getValue }
            key={ eachCategory.id }
            value={ eachCategory.id }
          />
        ))}
        {searchProducts.map((eachItem) => (
          <CardProduct
            data-testid="product"
            key={ eachItem.id }
            listProduct={ eachItem }
          />
        ))}
        {!loading ? searchCategory.map((eachCategoryItem) => (
          <CardProduct
            data-testid=""
            key={ eachCategoryItem.id }
            listProduct={ eachCategoryItem }
          />
        )) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}
