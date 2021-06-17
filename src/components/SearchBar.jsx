import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onInputChangeProps, searchText } = this.props;

    return (
      <header className="header">
        <label htmlFor="home-input">
          <input
            type="text"
            id="home-input"
            data-testid="query-input"
            value={ searchText }
            onChange={ onInputChangeProps }
          />
        </label>
        <h4
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onInputChangeProps: PropTypes.func,
  searchText: PropTypes.string,
}.isRequired;

export default SearchBar;
