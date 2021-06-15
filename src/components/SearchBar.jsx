import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onChangeHandler, requestProducts, product } = this.props;
    return (
      <div>
        <label htmlFor="product">
          Digite o nome do produto:
          <input
            type="text"
            name="product"
            data-testid="query-input"
            value={ product }
            onChange={ onChangeHandler }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ requestProducts }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onChangeHandler: PropTypes.func,
  requestProducts: PropTypes.func,
  product: PropTypes.string,
}.isRequired;
