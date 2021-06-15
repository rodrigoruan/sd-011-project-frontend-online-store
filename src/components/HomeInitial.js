import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import cart from '../Images/cart.png';
import SearchArea from './SearchArea';
import Filter from './Filter';

class HomeInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      products: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange({ target }) {
    const { value } = target;
    this.setState({
      search: value,
    });
  }

  async onClick() {
    const { search } = this.state;
    const products = await getProductsFromCategoryAndQuery('$CATEGORY_ID', `$${search}`);
    this.setState({
      products: products.results,
      search: '',
    });
  }

  render() {
    const { products, search } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="search-bar">
            <input
              type="text"
              data-testid="query-input"
              placeholder="Search"
              id="search-bar"
              value={ search }
              onChange={ this.onChange }
            />
          </label>
          <button
            data-testid="query-button"
            onClick={ this.onClick }
            type="button"
          >
            Buscar
          </button>
        </form>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <div>
          <Link to="/carrinho-compras">
            <img
              src={ cart }
              alt="carrinho-compras"
              data-testid="shopping-cart-button"
              height="200px"
            />
          </Link>
        </div>
        <SearchArea products={ products } />
        <Filter />
      </div>
    );
  }
}

export default HomeInitial;
