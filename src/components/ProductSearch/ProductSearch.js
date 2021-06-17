import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductSearch.css';

export default class ProductSearch extends Component {
  render() {
    const { handleSubmit, onChange, value } = this.props;

    return (
      <div>
        <input
          data-testid="query-input"
          className="query-input"
          name="searchProduct"
          type="text"
          value={ value }
          onChange={ onChange }
        />
        <button
          type="submit"
          onClick={ handleSubmit }
          data-testid="query-button"
        >
          Buscar
        </button>
      </div>
    );
  }
}

ProductSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
