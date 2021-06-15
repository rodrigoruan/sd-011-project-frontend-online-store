import React, { Component } from 'react';
import * as api from '../services/api';

class Category extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
    }
    this.getCategories = this.getCategories.bind(this);
  }

  async getCategories() {
    const data = await api.getCategories()
    .then(response => this.setState({ categories: response }));
    return data;
  }

  componentDidMount() {
    this.getCategories();
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h4>
          Categorias:
        </h4>
        <ul>{ categories.map((category) => 
          <li key={ category.id } data-testid="category">
            { category.name }
          </li>
        )}</ul>
      </div>
    )
  }
}

export default Category;
