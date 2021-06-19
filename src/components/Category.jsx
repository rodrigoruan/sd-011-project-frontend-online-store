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
      .then((categorie) =>
        this.setState({ categories: categorie, loading: false })
      );
  }

  render() {
    const { categories, loading } = this.state;
    const { change, click } = this.props;
    return (
      <form>
        <p>Categorias:</p>
        {loading
          ? null
          : categories.map(({ name, id }, index) => (
              <div>
                <label key={index} htmlFor={id}>
                  <input
                    type="radio"
                    value={id}
                    name="categories"
                    data-testid="category"
                    onChange={change}
                    onClick={click}
                    id={id}
                  />
                  {name}
                </label>
              </div>
            ))}
      </form>
    );
  }
}

Category.propTypes = {
  change: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
};
