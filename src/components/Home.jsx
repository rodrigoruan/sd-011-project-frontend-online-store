import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import logo from '../images/logo_frontend_store.svg';
import banner from '../images/banner.png';
import './Home.css';

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

    if (categories === []) return <div>Loading...</div>;
    return (
      <div className="home">
        <header className="home-header">
          <div className="logo-header">
            <img src={ logo } alt="Front-End Online Store" className="logo" />
          </div>
          <div className="form-home">
            <form className="search-bar-home form-search">
              {/* Modelo retirado de https://freefrontend.com/css-search-boxes */}
              <input
                type="search"
                data-testid="query-input"
                name="search"
                onChange={ handleChange }
                placeholder="Faça sua pesquisa"
              />
              <i
                className="fa fa-search"
                // type="button"
                // aria-label="Save" // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
                data-testid="query-button"
                onClick={ fetchProducts }
              />
            </form>
          </div>
          <Link
            data-testid="shopping-cart-button"
            to="/cart"
          >
            <div className="cart-home">
              <div className="cart-items">
                <p data-testid="shopping-cart-size">
                  { cartItems.reduce((acc, curr) => (acc + curr.quantity), 0)}
                </p>
              </div>
            </div>
          </Link>

        </header>
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
              ? <div className="div-banner">
                <p data-testid="home-initial-message" className="home-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
                <img src={ banner } alt="" className="banner" />
              </div> // Tentar retornar apenas após não encontrar
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
