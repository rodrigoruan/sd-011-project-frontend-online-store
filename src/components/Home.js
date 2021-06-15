import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import Category from './Category';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
    this.getCategory = this.getCategory.bind(this);
  }

  componentDidMount() {
    this.getCategory();
  }

  async getCategory() {
    const returnApiGetCategory = await Api.getCategories();
    this.setState({
      categories: returnApiGetCategory,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <label htmlFor="search-text" data-testid="home-initial-message">
          <input type="text" name="search-text" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <Link data-testid="shopping-cart-button" to="/cartitems">
          Carrinho de compras
        </Link>
        <div>
          {categories.map((category) => (
            <Category key={ category.id } name={ category.name } />
          ))}
        </div>
      </div>
    );
  }
}
