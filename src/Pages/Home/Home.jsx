import React, { Component } from 'react';
import './home.css';
import CategoryList from '../../components/CategoryList';
import * as api from '../../services/api';
import Products from '../../components/Products';
import ShoppingCartBtn from '../../components/ShoppingCartBtn';

class Home extends Component {
  constructor() {
    super();

    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

    if (shoppingCart) {
      this.state = {
        search: '',
        categoryId: '',
        prodList: [],
        shoppingCartItens: shoppingCart.reduce(((acc, curr) => acc + curr.quantity), 0),
      };
    } else {
      this.state = {
        search: '',
        categoryId: '',
        prodList: [],
        shoppingCartItens: 0,
      };
    }

    this.inputListner = this.inputListner.bind(this);
    this.requestProducts = this.requestProducts.bind(this);
    this.selectListner = this.selectListner.bind(this);
    this.sumShoppingCartItens = this.sumShoppingCartItens.bind(this);
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

  sumShoppingCartItens() {
    this.setState((prevState) => ({
      shoppingCartItens: prevState.shoppingCartItens + 1,
    }));
  }

  render() {
    const { prodList, wasSearched, shoppingCartItens } = this.state;

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
            <ShoppingCartBtn shoppingCartItens={ shoppingCartItens } />
          </div>
        </header>
        {(!wasSearched)
          ? null
          : (
            <Products
              prodList={ prodList }
              sumShoppingCartItens={ this.sumShoppingCartItens }
            />)}
      </div>
    );
  }
}

export default Home;
