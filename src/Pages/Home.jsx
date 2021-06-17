import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import * as api from '../services/api';
import Products from './Products';

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
        })
      ));
  }

  render() {
    const { prodList } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoryList selectListner={ this.selectListner } />
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
          Enviar
        </button>
        <Products prodList={ prodList } />
        <Link data-testid="shopping-cart-button" to="/shoppingcart">Botão</Link>
        {/* <Checkout /> */}
      </div>
    );
  }
}

export default Home;
