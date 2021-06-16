import React from 'react';
import Category from './Category';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            <FaShoppingCart size={ 30 } />
          </Link>
          <input type="text" />
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </header>
        <Category />
      </div>
    );
  }
}

export default Home;
