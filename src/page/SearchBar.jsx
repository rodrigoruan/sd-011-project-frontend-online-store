import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { value, onChange, onClick } = this.props;
    return (
      <div>
        <label htmlFor="input">
          <input
            data-testid="query-input"
            type="text"
            value={ value }
            id="input"
            name="searchInput"
            onChange={ onChange }
          />
        </label>

        <button
          type="button"
          data-testid="query-button"
          onClick={ onClick }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
