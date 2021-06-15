import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as AppServices from '../services/api';
import Categories from './Categories';
import ProductsCard from './ProductsCard';

export default class SearchHome extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: true,
      category: '',
      search: '',
      products: [],
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSearchProducts = this.handleSearchProducts.bind(this);
  }

  componentDidMount() {
    this.handleCategories();
  }

  async handleCategories() {
    const results = await AppServices.getCategories();
    this.setState({
      categories: results,
      loading: false,
    });
  }

  handleOnChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  async handleSearchProducts() {
    const { category, search } = this.state;
    const response = await AppServices.getProductsFromCategoryAndQuery(category, search);
    this.setState({
      products: response,
    });
  }

  render() {
    const { categories, loading, products } = this.state;
    return (
      <div data-testid="home-initial-message">
        <aside>
          { !loading
            && categories.map(
              (category, index) => (<Categories
                value={ category.name }
                id={ category.id }
                key={ index }
                onChange={ this.handleOnChange }
              />),
            ) }
        </aside>
        <label htmlFor="search">
          <input
            data-testid="query-input"
            id="search"
            type="text"
            name="search"
            onChange={ this.handleOnChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleSearchProducts }
          >
            Buscar
          </button>
        </label>
        <Link to="/ShoppingCart">
          <button data-testid="shopping-cart-button" type="button">Carrinho</button>
        </Link>
        { products.length < 1
          ? <div>Digite algum termo de pesquisa ou escolha uma categoria.</div>
          : <ProductsCard products={ products } />}
      </div>
    );
  }
}
