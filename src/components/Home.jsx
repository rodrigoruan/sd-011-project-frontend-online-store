import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import Product from './Product';
import * as api from '../services/api';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      categories: [],
      searchResult: [],
      voidSearch: false,
      category: '',
      cart: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.queryResult = this.queryResult.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((result) => this.setState({
      categories: result,
    }));
    this.getLocalStorage();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleCategory({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.queryResult();
    });
  }

  getLocalStorage() {
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    if (cartItems === null) {
      cartItems = [];
    }
    const result = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    this.setState({
      cart: result,
    });
  }

  queryResult() {
    const { search, category } = this.state;
    api.getProductsFromCategoryAndQuery(category, search)
      .then(({ results }) => {
        this.setState({
          searchResult: results,
        }, () => {
          const { searchResult } = this.state;
          const bool = searchResult.length === 0;
          this.setState({
            voidSearch: bool,
          });
        });
      });
  }

  render() {
    const { categories, search, searchResult, voidSearch, cart } = this.state;
    return (
      <div className="home-page">
        <div className="category-list">
          {categories.map(({ id, name }) => (
            <Category
              key={ id }
              id={ id }
              name={ name }
              handleChange={ this.handleCategory }
            />
          ))}
        </div>
        <div className="main-page">
          <label htmlFor="search-product" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              name="search"
              onChange={ this.handleChange }
              type="text"
              className="search-product"
              data-testid="query-input"
              value={ search }
            />
          </label>
          <button
            onClick={ this.queryResult }
            type="button"
            data-testid="query-button"
          >
            Pesquisar
          </button>
          <div>
            <Link to="/ShoppingCart" data-testid="shopping-cart-button">
              Carrinho
              <span data-testid="shopping-cart-size">{ cart }</span>
            </Link>
          </div>
          <div>
            {
              voidSearch
                ? <h1>Nenhum produto foi encontrado </h1>
                : searchResult.map((product) => (
                  <Product
                    key={ product.id }
                    product={ product }
                    callback={ this.getLocalStorage }
                  />
                ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
