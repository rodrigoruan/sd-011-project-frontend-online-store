import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  async getList() {
    const result = await api.getCategories();
    this.setState({
      categories: result,
    });
  }

  render() {
    const { categories } = this.state;
    const { getProductsFromCategory } = this.props;
    return (
      <div className="sidebar-catories">
        <ul>
          {categories.map((category) => (
            <li
              key={ category.id }
            >
              <button
                data-testid="category"
                type="button"
                onClick={ () => getProductsFromCategory(category.id) }
              >
                { category.name }
              </button>
            </li>))}
        </ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  getProductsFromCategory: PropTypes.func.isRequired,
};
