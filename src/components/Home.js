import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import cart from '../images/cart.png';
import Searchfield from './Searchfield';
import Filteringbycategory from './Filteringbycategory';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      products: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange({ target: { value } }) {
    this.setState({
      search: value,
    });
  }

  async onClick() {
    const { search } = this.state;
    const products = await getProductsFromCategoryAndQuery('$categoryId', `$${search}`);
    const { results } = products;
    this.setState({
      products: results,
      search: '',
    });
  }

  render() {
    const { products, search } = this.state;
    return (
      <div>
        <form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <label htmlFor="search-bar">
            <input
              type="text"
              data-testid="query-input"
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
        <br />
        <div>
          <Link to="/shopping-cart">
            <img
              src={ cart }
              alt="shopping-cart"
              data-testid="shopping-cart-button"
              height="40px"
            />
          </Link>
        </div>
        <Searchfield products={ products } />
        <Filteringbycategory />
      </div>
    );
  }
}

export default Home;
