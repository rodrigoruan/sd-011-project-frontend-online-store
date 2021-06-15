import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: null,
      loading: true,
    };
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    api
      .getCategories()
      .then((categorie) => this.setState({ categories: categorie, loading: false }));
  }

  render() {
    const { categories, loading } = this.state;
    const { change } = this.props;
    return (
      <div>
        <p>Categorias:</p>
        {loading
          ? null
          : categories.map(({ name }, index) => (
            <div key={ index }>
              <input
                type="radio"
                value={ name }
                name="categories"
                data-testid="category"
                onChange={ change }
              />
              {name}
            </div>
          ))}
      </div>
    );
  }
}

Category.propTypes = {
  change: PropTypes.func.isRequired,
};
