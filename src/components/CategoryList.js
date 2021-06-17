import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import Loading from './Loading';
import './css/Section.css';

export default class CategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const data = await getCategories();
    this.setState({ categories: data, loading: false });
  }

  render() {
    const { categories, loading } = this.state;
    const { fetchProducts } = this.props;

    return (
      <section className="category-section">
        <h1>Categorias:</h1>
        { loading ? <Loading />
          : categories.map((category) => (
            <label htmlFor={ category.id } key={ category.id } className="label-radio">
              <input
                data-testid="category"
                type="radio"
                id={ category.id }
                name="category"
                value={ category.id }
                onClick={ ({ target: { value } }) => fetchProducts(value) }
              />
              { category.name }
            </label>

          ))}
      </section>
    );
  }
}

CategoryList.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
};
