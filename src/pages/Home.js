import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartImage from '../images/shoppingCart.jpg';
import * as Api from '../services/api';
import CategoryList from '../components/categoryList';
import SearchBarProducts from '../components/SearchBarProducts';
import AllProducts from '../components/AllProducts';
import Button from '../components/Button';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      loading: true,
      products: [],
      searchValue: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleSearch({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchCategories() {
    const request = await Api.getCategories();
    this.setState({
      categories: request,
      loading: false,
    });
  }

  async fetchProducts(query) {
    const result = await Api.getProductsFromCategoryAndQuery('', query);
    const products = result.results;
    this.setState({
      products,
    });
  }

  render() {
    const { searchValue, products, categories, loading } = this.state;
    return (
      <div>
        <SearchBarProducts value={ searchValue } onChange={ this.handleSearch } />
        <Button onClick={ () => this.fetchProducts(searchValue) } innerText="Buscar" />
        <AllProducts productsList={ products } />
        { !loading && categories
          .map((category, index) => <CategoryList key={ index } category={ category } />)}
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ shoppingCartImage } alt="Cart" />
        </Link>
      </div>
    );
  }
}

export default Home;
