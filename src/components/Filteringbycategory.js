import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Filteringbycategory extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
    this.chooseByCategory = this.chooseByCategory.bind(this);
  }

  componentDidMount() {
    this.chooseByCategory();
  }

  async chooseByCategory() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (
          <div key={ category.id } data-testid="category">
            <p>{ category.name }</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Filteringbycategory;
