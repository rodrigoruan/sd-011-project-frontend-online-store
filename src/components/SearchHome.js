import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as AppServices from '../services/api';
import Categories from './Categories';

export default class SearchHome extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.handleCategories();
  }

  async handleCategories() {
    const results = await AppServices.getCategories();
    this.setState({
      categories: results,
      loading: false,
    });
  }

  render() {
    const { categories, loading } = this.state;
    console.log(categories);
    return (
      <div data-testid="home-initial-message">
        { !loading
          && categories.map(
            (category, index) => <Categories value={ category.name } key={ index } />,
          ) }
        <label htmlFor="search">
          <input type="text" name="search" />
        </label>
        <Link to="/ShoppingCart">
          <button data-testid="shopping-cart-button" type="button">Carrinho</button>
        </Link>
        <div>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    );
  }
}
