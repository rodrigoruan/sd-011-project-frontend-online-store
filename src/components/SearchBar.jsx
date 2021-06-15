import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { click, change, value } = this.props;
    return (
      <div>
        <input
          name="query"
          type="text"
          data-testid="query-input"
          onChange={ change }
          value={ value }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ click }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  click: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
