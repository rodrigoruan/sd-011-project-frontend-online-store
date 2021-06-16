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
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange({ target }) {
    const { value, name } = target;
    if (name === 'category') {
      this.setState({
        [name]: value,
      }, () => this.fetchProducts());
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  async fetchCategories() {
    const request = await Api.getCategories();
    this.setState({
      categories: request,
      loading: false,
    });
  }

  async fetchProducts() {
    const { category, searchValue } = this.state;
    console.log(category);
    const result = await Api.getProductsFromCategoryAndQuery(category, searchValue);
    const products = result.results;
    this.setState({
      products,
    });
  }

  render() {
    const { searchValue, products, categories, loading } = this.state;
    return (
      <div>
        <SearchBarProducts value={ searchValue } onChange={ this.handleChange } />
        <Button onClick={ this.fetchProducts } innerText="Buscar" />
        { !loading && categories
          .map((category, index) => (
            <CategoryList
              key={ index }
              category={ category }
              changeFunction={ this.handleChange }
            />))}
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ shoppingCartImage } alt="Cart" />
        </Link>
        <AllProducts productsList={ products } />
      </div>
    );
  }
}

export default Home;
