import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <section className="categories-container">
        <p>Categorias:</p>
        <ul className="categories-list">
          { categories.map((categorie, index) => (
            <li
              data-testid="category"
              className="categorie"
              key={ index }
            >
              { categorie }
            </li>
          )) }
        </ul>
      </section>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.strings),
}.isRequired;
