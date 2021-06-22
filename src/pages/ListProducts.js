import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Components/ButtonShopCart';
import CategoryList from '../Components/CategoryList';
import ProductList from '../Components/ProductList';
import * as api from '../services/api';

class ListProducts extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: '',
      category: '',
    };

    this.handlerChangeState = this.handlerChangeState.bind(this);
    this.getProductsByCategory = this.getProductsByCategory.bind(this);
    this.getProductsByQuery = this.getProductsByQuery.bind(this);
  }

  handlerChangeState(event) {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }

  async getProductsByCategory(categoryId) {
    /**/
    const { search } = this.state;
    const result = await api.getProductsFromCategoryAndQuery(categoryId, search);
    this.setState({
      data: result.results,
    });
  }

  getProductsByQuery() {
    const { search, category } = this.state;
    this.setState({ data: [] }, () => {
      api.getProductsFromCategoryAndQuery(category, search)
        .then(({ results }) => {
          this.setState({ data: results });
        });
    });
  }

  render() {
    const { data } = this.state;
    const { addCartItem, getCart } = this.props;

    return (
      <div className="flex-dashboard">
        <CategoryList
          handleUserInput={ this.handlerChangeState }
          getProductsFromCategory={ this.getProductsByCategory }
        />
        <div />
        <div className="main-content">
          <div className="row">
            <label htmlFor="search">
              <input
                className="inputShoppingCart"
                data-testid="query-input"
                type="text"
                name="search"
                onChange={ this.handlerChangeState }
              />
            </label>
            <button
              className="searchButton"
              data-testid="query-button"
              type="submit"
              onClick={ this.getProductsByQuery }
            >
              Pesquisar
            </button>
            <Button />
          </div>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
          <h2>
            {`${getCart().length} itens no carrinho`}
          </h2>
          <ProductList productsList={ data } addCartItem={ addCartItem } />
        </div>
      </div>
    );
  }
}

ListProducts.propTypes = {
  addCartItem: PropTypes.func,
  getCart: PropTypes.func,
}.isRequired;

export default ListProducts;
