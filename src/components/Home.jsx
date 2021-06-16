import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
// import ShoppingCart from './ShoppingCart';

class Home extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Category />
        <div className="search-bar">
          <form>
            <label htmlFor="queryInput" data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
              <input id="queryInput" />
            </label>
          </form>
          <Link to="/carrinho" data-testid="shopping-cart-button">
            Carrinho de compras 🛒
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
