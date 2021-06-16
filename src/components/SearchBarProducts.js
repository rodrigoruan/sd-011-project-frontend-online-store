import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarProducts extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        data-testid="query-input"
        value={ value }
        placeholder="Buscar produto"
        name="searchValue"
        onChange={ onChange }
      />
    );
  }
}

SearchBarProducts.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default SearchBarProducts;
