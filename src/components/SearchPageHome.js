import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchPageHome extends Component {
  render() {
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
      </div>
    );
  }
}
