import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import CategoryList from '../../components/CategoryList';
import * as api from '../../services/api';
import Products from '../../components/Products';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      categoryId: '',
      prodList: [],
    };
    this.inputListner = this.inputListner.bind(this);
    this.requestProducts = this.requestProducts.bind(this);
    this.selectListner = this.selectListner.bind(this);
  }

  inputListner({ target }) {
    this.setState({
      search: target.value,
    });
  }

  selectListner({ target }) {
    this.setState({
      categoryId: target.value,
    },
    async () => this.requestProducts());
  }

  requestProducts() {
    const { categoryId, search } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, search)
      .then(({ results }) => (
        this.setState({
          prodList: results,
          wasSearched: true,
        })
      ));
  }

  render() {
    const { prodList, wasSearched } = this.state;

    return (
      <div>
        <header>
          <div className="header-categories-nav">
            <CategoryList selectListner={ this.selectListner } />
          </div>
          <div className="nav-search-header">
            <div className="nav-search-input">
              <input
                type="text"
                data-testid="query-input"
                placeholder="Buscar produtos, marcas e muito mais"
                onChange={ this.inputListner }
              />
              <button
                type="button"
                data-testid="query-button"
                onClick={ this.requestProducts }
              >
                Buscar
              </button>
            </div>
            <div>
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            </div>
          </div>
          <div className="header-shopping-cart-button">
            <Link
              data-testid="shopping-cart-button"
              to="/shoppingcart"
            >
              <img
                src="/imgs/shopping-cart.png"
                alt="Shopping-cart-button"
                width="25px"
              />
            </Link>
          </div>
        </header>
        {(!wasSearched) ? null : <Products prodList={ prodList } />}
      </div>
    );
  }
}

export default Home;
