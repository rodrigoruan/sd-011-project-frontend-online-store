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
    };
    this.handleChange = this.handleChange.bind(this);
    this.queryResult = this.queryResult.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((result) => this.setState({
      categories: result,
    }));
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
    const { categories, search, searchResult, voidSearch } = this.state;
    console.log(voidSearch);
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
            <Link to="/ShoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
          </div>
          <div>
            {
              voidSearch
                ? <h1>Nenhum produto foi encontrado </h1>
                : searchResult.map(({ id, title, price, thumbnail }) => (
                  <Product
                    key={ id }
                    id={ id }
                    title={ title }
                    price={ price }
                    thumbnail={ thumbnail }
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
