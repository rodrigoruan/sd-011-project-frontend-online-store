import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { categories, filterCategory, currentCategoryFilter } = this.props;
    return (
      <section className="col-span-1 pr-6">
        <h1 className="text-xl mb-4">Filtrar por categoria</h1>
        <ul className="categories-list">
          { categories.map(({ name, id }) => {
            const isSelected = (id === currentCategoryFilter);
            return (
              <li
                className={ `categoryItem ${isSelected ? ' categorySelected' : ''}` }
                key={ id }
              >
                <button
                  data-testid="category"
                  type="button"
                  data-id={ id }
                  onClick={ filterCategory }
                  className="w-full text-left"
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
  })),
}.isRequired;
