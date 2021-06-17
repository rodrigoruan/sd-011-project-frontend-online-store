import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CardProduct from '../components/CardProduct';
import Categories from './Categories';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: '',
    };
    this.searchProducts = this.searchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      if (name === 'category') {
        this.searchProducts();
      }
    });
  }

  async searchProducts() {
    const { category, query } = this.state;
    const fetchProducts = await getProductsFromCategoryAndQuery(category, query);
    this.setState({
      products: fetchProducts.results,
    });
  }

  render() {
    const { products } = this.state;
    const { addToCart, cart } = this.props;
    return (
      <div className="">
        <div className="search-icons">
          <div className="search-icons">
            <label htmlFor="searchInput">
              <input
                type="text"
                id="searchInput"
                name="query"
                onChange={ this.handleChange }
                data-testid="query-input"
                className="grow"
              />
            </label>

            <button
              type="button"
              data-testid="query-button"
              className="search-button"
              onClick={ this.searchProducts }
              className="material-icons"
            >
              search
            </button>
          </div>
          <div>
            <Link data-testid="shopping-cart-button" to="/shoppingcart">
              <span type="button" className="material-icons">
                shopping_cart
              </span>
            </Link>
            <span data-testid="shopping-cart-size">{cart.length}</span>
          </div>
        </div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Categories handleChange={ this.handleChange } />
        {!products
          ? null
          : products.map((product) => (
            <CardProduct
              key={ product.id }
              product={ product }
              addToCart={ addToCart }
            />))}
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
