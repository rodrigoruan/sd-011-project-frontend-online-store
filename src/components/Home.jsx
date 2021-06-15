import React, { Component } from 'react';
import * as fetchAPI from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.fetchProductCategory = this.fetchProductCategory.bind(this);
  }

  componentDidMount() {
    this.fetchProductCategory();
  }

  async fetchProductCategory() {
    const fetchedCategories = await fetchAPI.getCategories();
    console.log(fetchedCategories);
    this.setState({
      categories: fetchedCategories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <h2>Categorias:</h2>
        <ul>
          {categories.map((category) => (
            <li
              data-testid="category"
              key={ category.id }
            >
              {category.name}
            </li>))}
        </ul>
      </div>
    );
  }
}
