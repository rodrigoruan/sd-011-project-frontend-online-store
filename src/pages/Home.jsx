import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Categories from '../components/Categories';

class Home extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <main className="home-container">
          <Categories categories={ categories } />
          <p
            className="home-initial-message"
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            <button type="button">carrinho</button>
          </Link>

        </main>
      </div>
    );
  }
}

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.strings),
}.isRequired;

export default Home;
