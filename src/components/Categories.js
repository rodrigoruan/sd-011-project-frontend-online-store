import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { listCategories } = this.props;

    return (
      <div>
        <select>
          {listCategories.map((category, index) => (
            <option data-testid="category" key={ index }>
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
};
