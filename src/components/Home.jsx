import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import cartImage from '../images/cart.svg';

export default class Home extends Component {
  render() {
    const {
      handleChange,
      fetchProducts,
      fetchCategories,
      addCart,
      categories,
      productCards,
      cartItems,
    } = this.props;

    // backup

    if (categories === []) return <div>Loading...</div>;
    return (
      <div>
        <header className="home-header">
          <h1>Front-End Online Store</h1>
        </header>
        <nav className="nav-home">
          <Link
            data-testid="shopping-cart-button"
            to="/cart"
          >
            <img src={ cartImage } alt="Cart" style={ { width: '80px' } } />
          </Link>
          <p
            data-testid="shopping-cart-size"
          >
            {cartItems.reduce((acc, curr) => (
              (acc + (curr.quantity))), 0)}
          </p>
        </nav>

        <div className="search-bar-home">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <label htmlFor="search">
            <input
              type="text"
              data-testid="query-input"
              name="search"
              onChange={ handleChange }
            />
          </label>
          <button
            type="button"
            aria-label="Save" // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
            data-testid="query-button"
            onClick={ fetchProducts }
          >
            Enviar
          </button>
        </div>
        <div className="main-container-home">
          <div className="category-buttons-container">
            <h2>Categorias</h2>
            {categories.map((category) => (
              <button
                className="category-buttons"
                type="button"
                data-testid="category"
                key={ category.id }
                value={ category.id }
                name="categoryId"
                onClick={ () => fetchCategories(category.id) }
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="cards-container">
            {!productCards
              ? <p>Nenhum produto foi encontrado</p> // Tentar retornar apenas após não encontrar
              : productCards.map((product) => (
                <ProductCard
                  key={ product.id }
                  product={ product }
                  addCart={ addCart }
                />))}
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addCart: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    map: PropTypes.func,
  }).isRequired,
  cartItems: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    reduce: PropTypes.func,
  }).isRequired,
  productCards: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,

};
