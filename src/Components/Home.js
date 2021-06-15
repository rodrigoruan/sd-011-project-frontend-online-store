import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchBar: '',
    };
  }

  render() {
    const { searchBar } = this.state;
    return (
      <div>
        <label htmlFor="searchBar" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            value={ searchBar }
            name="searchBar"
          />
        </label>
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Ir para o carrinho
        </Link>
        <Categories />
      </div>
    );
  }
}

export default Home;
