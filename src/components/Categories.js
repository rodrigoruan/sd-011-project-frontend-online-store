import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentDidMount() {
    this.renderCategories();
  }

  async renderCategories() {
    const data = await api
      .getCategories()
      .then((response) => this.setState({ categories: response }));
    return data;
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="categories">
        <h5>Categorias:</h5>
        <ul>
          {categories.map((category) => (
            <li data-testid="category" key={category.id}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
