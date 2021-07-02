import React, { Component } from 'react';
import * as Api from '../services/api';
import CategoryList from '../components/categoryList';
import SearchBarProducts from '../components/SearchBarProducts';
import AllProducts from '../components/AllProducts';
import Button from '../components/Button';
import ShoppingCartLink from '../components/ShoppingCartLink';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      loading: true,
      products: [],
      searchValue: '',
      category: '',
      cartQuantity: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.updateCartQuantity = this.updateCartQuantity.bind(this);
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
    const result = await Api.getProductsFromCategoryAndQuery(category, searchValue);
    const products = result.results;
    this.setState({
      products,
    });
  }

  updateCartQuantity() {
    const cartProducts = JSON.parse(localStorage.getItem('products')) || [];

    const cartQuantity = cartProducts.reduce((acc, { quantity }) => acc + quantity, 0);

    this.setState({
      cartQuantity,
    });
  }

  render() {
    const { searchValue, products, categories, loading, cartQuantity } = this.state;
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
        <ShoppingCartLink quantity={ cartQuantity } />
        <AllProducts
          productsList={ products }
          updateCartQuantity={ this.updateCartQuantity }
        />
      </div>
    );
  }
}

export default Home;
