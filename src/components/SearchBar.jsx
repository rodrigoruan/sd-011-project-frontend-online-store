import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onInputChangeProps, searchText } = this.props;

    return (
      <header className="header">
        <h4
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <label htmlFor="home-input">
          <input
            className="input-product"
            type="text"
            id="home-input"
            data-testid="query-input"
            value={ searchText }
            onChange={ onInputChangeProps }
          />
        </label>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onInputChangeProps: PropTypes.func,
  searchText: PropTypes.string,
}.isRequired;

export default SearchBar;
