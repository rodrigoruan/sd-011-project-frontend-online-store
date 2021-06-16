import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { listCategories, changeCategory } = this.props;

    return (
      <div>
        <select onChange={ changeCategory }>
          {listCategories.map((category, index) => (
            <option
              data-testid="category"
              key={ index }
              value={ category.id }
            >
              { category.name }
            </option>
          ))}
        </select>
      </div>
    );
  }
}

Categories.propTypes = {
  listCategories: PropTypes.arrayOf().isRequired,
  changeCategory: PropTypes.func.isRequired,
};
