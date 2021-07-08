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
      quantity: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getProductsByCategory = this.getProductsByCategory.bind(this);
    this.cartQuantity = this.cartQuantity.bind(this);
  }

  componentDidMount() {
    this.cartQuantity();
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

  cartQuantity() {
    const localValues = JSON.parse(localStorage.getItem('cartList'));

    if (!localValues) {
      const quantity = 0;
      return quantity;
    }
    const quantity = Object.values(localValues);
    const result = quantity
      .reduce(((acc, cur) => ({
        quantity: acc.quantity + cur.quantity,
      })));

    this.setState({
      quantity: result.quantity,
    });
  }

  render() {
    const { products, search, quantity } = this.state;

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
            <p data-testid="shopping-cart-size">{ quantity }</p>
          </Link>
        </div>
        <div className="container-home">
          <Category byCategory={ this.getProductsByCategory } />
          <Searchfield cartQuantity={ this.cartQuantity } products={ products } />
        </div>
      </div>
    );
  }
}

export default Home;
