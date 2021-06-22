import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Category.css';

export default class Category extends Component {
  render() {
    const { id, name, handleChange } = this.props;
    return (
      <div className="categories form-check">
        <label htmlFor={ name } className="form-check-label">
          <input
            type="radio"
            id={ name }
            value={ id }
            className="form-check-input"
            name="category"
            data-testid="category"
            onChange={ handleChange }
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
  handleChange: PropTypes.func.isRequired,
};
