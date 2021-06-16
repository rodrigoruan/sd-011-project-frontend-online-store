import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((result) => this.setState({
      categories: result,
    }));
  }

  render() {
    const { categories } = this.state;
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
          {categories.map(({ id, name }) => (
            <Category key={ id } value={ id } name={ name } />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
