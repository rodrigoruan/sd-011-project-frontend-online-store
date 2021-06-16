import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <section className="categories-container home-one-fourth">
        <p>Categorias:</p>
        <ul className="categories-list">
          { categories.map(({ name, id }) => (
            <li
              data-testid="category"
              className="category"
              key={ id }
            >
              { name }
            </li>
          )) }
        </ul>
      </section>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
}.isRequired;
