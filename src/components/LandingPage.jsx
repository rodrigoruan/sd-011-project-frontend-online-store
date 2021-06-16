import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import carrinho from '../carrinho.png';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img src={ carrinho } alt="carrinho" />
        </Link>
        <Categories />
      </div>
    );
  }
}

export default LandingPage;
