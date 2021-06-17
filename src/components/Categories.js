import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { listCategories: { id, name }, changeCategory } = this.props;

    return (
      <div>
        <label htmlFor={ id }>
          {name}
          <input
            type="radio"
            onClick={ changeCategory }
            data-testid="category"
            name="categoria"
            value={ id }
          />
        </label>
      </div>
    );
  }
}

Categories.propTypes = {
  listCategories: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  changeCategory: PropTypes.func.isRequired,
};
