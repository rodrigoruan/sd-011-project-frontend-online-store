import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => {
        this.setState({
          isLoaded: true,
          categories,
        });
      });
  }

  render() {
    const { isLoaded, categories } = this.state;
    if (isLoaded) {
      return (
        <div>
          <label htmlFor="list">
            Categorias
            <ul name="list">
              {categories.map((category) => (
                <li data-testid="category" key={ category.id }>
                  {category.name}
                </li>
              ))}
            </ul>
          </label>
        </div>
      );
    }
  }
}

export default CategoryList;
