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
    this.handleOnChangeCategory = this.handleOnChangeCategory.bind(this);
    this.handleOnChangeQuery = this.handleOnChangeQuery.bind(this);
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

  async handleOnChangeCategory({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    const { search } = this.state;
    const response = await AppServices.getProductsFromCategoryAndQuery(value, search);
    this.setState({
      products: response,
    });
  }

  handleOnChangeQuery({ target }) {
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
                onChange={ this.handleOnChangeCategory }
              />),
            ) }
        </aside>
        <label htmlFor="search">
          <input
            data-testid="query-input"
            id="search"
            type="text"
            name="search"
            onChange={ this.handleOnChangeQuery }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleSearchProducts }
          >
            Buscar
          </button>
        </label>
        <Link to={ { pathname: '/ShoppingCart' } }>
          <button data-testid="shopping-cart-button" type="button">Carrinho</button>
        </Link>
        { products.length < 1
          ? <div>Digite algum termo de pesquisa ou escolha uma categoria.</div>
          : <ProductsCard products={ products } />}
      </div>
    );
  }
}
