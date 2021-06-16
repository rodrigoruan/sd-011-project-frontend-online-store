import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Category extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          <input
            type="radio"
            id={ name }
            value={ id }
            name="category"
            data-testid="category"
          />
          { name }
        </label>
      </div>
    );
  }
}

Category.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
