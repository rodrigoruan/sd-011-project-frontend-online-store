import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './SearchBarProducts.module.css';

class SearchBarProducts extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        className={ style.searchInput }
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
