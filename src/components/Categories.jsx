import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { categories, filterCategory, currentCategoryFilter } = this.props;
    return (
      <section className="categories-container home-one-fourth">
        <p>Categorias:</p>
        <ul className="categories-list">
          { categories.map(({ name, id }) => {
            const isSelected = (id === currentCategoryFilter);
            return (
              <li
                className={ `category${isSelected ? ' category--selected' : ''}` }
                key={ id }
              >
                <button
                  data-testid="category"
                  type="button"
                  data-id={ id }
                  onClick={ filterCategory }
                >
                  { name }
                </button>
              </li>
            );
          }) }
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
