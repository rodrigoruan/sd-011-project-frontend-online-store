import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesBar from '../CategoriesBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesBar />
      </div>
    );
  }
}

export default Home;
