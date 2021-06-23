import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';
import FiltersBar from '../components/FiltersBar';

export default class HomePage extends Component {
  render() {
    // Funções: addToCart, setCategory, selectedProduct,
    //          handleInputChange, handleSearchClick, getCartSize
    // Objetos: products, categories
    const {
      addToCart, getCartSize, products, categories,
      handleInputChange, handleSearchClick,
      setCategory, selectedProduct, loading,
    } = this.props;

    let toRender;

    if (loading) {
      toRender = <h1>Loading...</h1>;
    } else {
      toRender = (<ProductList
        products={ products }
        addToCart={ addToCart }
        selectedProduct={ selectedProduct }
      />);
    }

    const shoppingCartSize = getCartSize();

    return (
      <div>
        <form action="" className="form-search">
          <FiltersBar categories={ categories } setCategory={ setCategory } />
          <label htmlFor="search-input">
            <input
              type="text"
              name="search"
              id="search-input"
              data-testid="query-input"
              onChange={ (e) => handleInputChange(e) }
            />

            <button
              type="button"
              name="button"
              data-testid="query-button"
              onClick={ () => handleSearchClick() }
            >
              Pesquisar
            </button>

            <div className="cart-wrapper">
              <Link
                data-testid="shopping-cart-button"
                to="/cart"
              >
                Carrinho de Compras
              </Link>

              <span
                data-testid="shopping-cart-size"
              >
                { shoppingCartSize }
              </span>
            </div>
          </label>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </form>

        {
          toRender
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  getCartSize: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  selectedProduct: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  products: PropTypes.instanceOf(PropTypes.object).isRequired,
  categories: PropTypes.instanceOf(PropTypes.array).isRequired,
};
