import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { value, onChange, id } = this.props;
    return (
      <div data-testid="category">
        <label htmlFor={ value }>
          <input
            type="radio"
            value={ id }
            name="category"
            onChange={ onChange }
            id={ value }
          />
          { value }
        </label>
      </div>
    );
  }
}

Categories.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
