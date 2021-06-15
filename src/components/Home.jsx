import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const request1 = request();
    console.log(request1);
  }

  async request() {
    const request = await api.getCategories();
    return request;
  }

  render() {
    return (
      <div>
        <label htmlFor="search-product" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input type="text" className="search-product" />
        </label>
        <div>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
        </div>
        <div>
          <Categories />
        </div>
      </div>
    );
  }
}

export default Home;
