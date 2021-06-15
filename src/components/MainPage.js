import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './CategoriesList';

class MainPage extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="input-search">
          <input
            name="input-search"
            type="text"
          />
        </label>
        <Link
          data-testid="shopping-cart-button"
          to="/components/Cart"
        >
          Cart
        </Link>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <div>
          <CategoriesList />
        </div>
      </div>
    );
  }
}

export default MainPage;
