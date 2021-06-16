import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import * as api from '../services/api';

export default class SearchPageHome extends Component {
  constructor() {
    super();

    this.state = {
      categoriesData: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => (
      this.setState({ categoriesData: categories })
    ));
  }

  render() {
    const { categoriesData } = this.state;

    return (
      <div>
        <label htmlFor="initialMessage">
          <input
            type="text"
            id="initialMessage"
          />
        </label>
        <Link data-testid="shopping-cart-button" to="/shoppingCart">Oi!</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories listCategories={ categoriesData } />
      </div>
    );
  }
}
