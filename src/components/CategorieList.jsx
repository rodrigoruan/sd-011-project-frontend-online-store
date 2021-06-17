import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategorieList extends Component {
  render() {
    const { category: { name, id }, onClick } = this.props;
    return (
      <label htmlFor="category">
        <input
          type="radio"
          value={ id }
          id="category"
          onClick={ onClick }
          name="category"
          data-testid="category"
        />
        <li>{name}</li>
      </label>
    );
  }
}

CategorieList.propTypes = {
  onClick: PropTypes.func.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
