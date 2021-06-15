import React from 'react';
import { Link } from 'react-router-dom';
// import ShoppingCart from './ShoppingCart';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/carrinho" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <form>
          <label htmlFor="queryInput" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input id="queryInput" />
          </label>
        </form>
      </div>
    );
  }
}

export default Home;
