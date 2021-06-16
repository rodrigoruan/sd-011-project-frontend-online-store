import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => {
        this.setState({
          categories,
        });
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="categories">
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

export default CategoryList;
