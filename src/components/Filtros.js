import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Filtros extends Component {
  constructor() {
    super();
    this.setCategories = this.setCategories.bind(this);
    this.state = {
      categories: undefined,
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setCategories(categories);
  }

  setCategories(categories) {
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    if (categories === undefined) {
      return <div> Loading...</div>;
    }
    return (
      <div data-testId="category">
        {categories.map((category) => (
          <label key={ category.name } htmlFor={ category.id }>
            <input
              type="radio"
              id={ category.id }
              name="category"
              value={ category.name }
            />
            { category.name }
          </label>
        ))}
      </div>
    );
  }
}

export default Filtros;
