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
    };

    this.getProducts = this.getProducts.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
  }

  async getProducts() {
    const { query, categories } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(categories, query);
    this.setState({ 
      product: products.results,
      loading: false,
    })
  }

  async getCategories() {
    const categories = await api.getCategories();
    this.setState({ 
      categoriesData: categories,
    })
  }

  changeCategory({ target }) {
    this.setState({ 
      categories: target.value,
    })
  }

  filterProducts({ target }) {
    this.setState({ 
      query: target.value,
    })
  }


  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  render() {
    const { categoriesData, product } = this.state;
    return (
      <div>
        <label htmlFor="initialMessage">
          <input
            type="text"
            id="initialMessage"
            onChange={ this.filterProducts }
            name="query"
          />
        </label>
        <button onClick={ this.getProducts }>Pesquisar</button>
        <Link data-testid="shopping-cart-button" to="/shoppingCart">Oi!</Link>
        <Categories listCategories={ categoriesData } changeCategory={ this.changeCategory } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        { product.map((item) => <ProductList products={ item } key={ item.id } /> ) }
      </div>
    );
  }
}
