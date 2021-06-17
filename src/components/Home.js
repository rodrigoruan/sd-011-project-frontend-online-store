import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import Searchfield from './Searchfield';
import Category from './Categories';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      products: [],
      categoryId: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getProductsByCategory = this.getProductsByCategory.bind(this);
  }

  onChange({ target: { value } }) {
    this.setState({
      search: value,
    });
  }

  async onClick() {
    const { search, categoryId } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(categoryId, search);
    const { results } = products;
    this.setState({
      products: results,
      search: '',
    });
  }

  async getProductsByCategory(categoryId) {
    const data = await api.getProductsFromCategoryAndQuery(categoryId, '');
    this.setState({ products: data.results, categoryId });
  }

  render() {
    const { products, search } = this.state;
    return (
      <div>
        <form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <label htmlFor="search-bar">
            <input
              type="text"
              data-testid="query-input"
              id="search-bar"
              value={ search }
              onChange={ this.onChange }
            />
          </label>
          <button
            data-testid="query-button"
            onClick={ this.onClick }
            type="button"
          >
            Buscar
          </button>
        </form>
        <br />
        <div>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            <FaShoppingCart size={ 30 } />
          </Link>
        </div>
        <Category byCategory={ this.getProductsByCategory } />
        <Searchfield products={ products } />
      </div>
    );
  }
}

export default Home;
