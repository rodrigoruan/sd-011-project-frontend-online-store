import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      // productsByCategory: [],
    };
    this.getCategories = this.getCategories.bind(this);
    // this.getProductsByCategory = this.getProductsByCategory.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const data = await api.getCategories()
      .then((response) => this.setState({ categories: response }));
    return data;
  }

  // async getProductsByCategory(categoryId) {
  //   const data = await api.getProductsFromCategory(categoryId);
  //   console.log(data);
  //   this.setState({ productsByCategory: data.results });
  // }

  render() {
    const { categories } = this.state;
    const { byCategory } = this.props;
    return (
      <div>
        <h4>
          Categorias:
        </h4>
        { categories
          .map((category) => (
            <button
              type="button"
              key={ category.id }
              data-testid="category"
              onClick={ () => byCategory(category.id) }
            >
              { category.name }
            </button>
          )) }
      </div>
    );
  }
}

Category.propTypes = {
  byCategory: PropTypes.func.isRequired,
};

export default Category;
