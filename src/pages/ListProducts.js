import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
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
    if (name === 'category') {
      this.setState({ [name]: value }, () => this.getProductsByCategory());
    } else {
      this.setState({ [name]: value });
    }
  }

  async getProductsByCategory(categoryId) {
    /**/
    console.log(categoryId);
    const { search } = this.state;
    // this.setState({ data: [] }, () => {
    //   api.getProductsFromCategoryAndQuery(categoryId, search)
    //     .then(({ results }) => {
    //       this.setState({ data: results });
    //       console.log(results);
    //     });
    // });
    const result = await api.getProductsFromCategoryAndQuery(categoryId, search);
    this.setState({
      data: result.results,
    })
  }

  getProductsByQuery() {
    /**/
    const { search, category } = this.state;
    this.setState({ data: [] }, () => {
      api.getProductsFromCategoryAndQuery(category, search)
        .then(({ results }) => {
          this.setState({ data: results });
          console.log(results);
        });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="flex-dashboard">
        <CategoryList
          handleUserInput={ this.handlerChangeState }
          getProductsFromCategory={ this.getProductsByCategory }
        />
        <div className="main-content">
          <div className="row">
            <label htmlFor="search">
              <input
                data-testid="query-input"
                type="text"
                name="search"
                onChange={ this.handlerChangeState }
              />
            </label>
            <button
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
          <ProductList productsList={ data } />
        </div>
      </div>
    );
  }
}

export default ListProducts;
