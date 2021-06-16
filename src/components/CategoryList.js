import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class CategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    const { fetchProducts } = this.props;

    return (
      <aside className="category-id">
        <h1>Categorias:</h1>
        {
          categories.map((category) => (
            <div key={ category.id }>
              <label htmlFor="category">
                <input
                  data-testid="category"
                  type="radio"
                  name="category"
                  value={ category.id }
                  onClick={ ({ target: { value } }) => fetchProducts(value) }
                />
                { category.name }
              </label>
            </div>
          ))
        }
      </aside>
    );
  }
}

CategoryList.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
};
