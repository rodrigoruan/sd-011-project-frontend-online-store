import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { listCategories, changeCategory } = this.props;

    return (
      <div>
        <label htmlFor={ listCategories.id }>
          {listCategories.name}
          <input
            type="radio"
            onClick={ changeCategory }
            data-testid="category"
            name="categoria"
            value={ listCategories.id }
          />
        </label>
      </div>
    );
  }
}

Categories.propTypes = {
  listCategories: PropTypes.arrayOf().isRequired,
  changeCategory: PropTypes.func.isRequired,
};
