import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { handleState } = this.props;
    return (
      <label htmlFor="busca">
        <input
          name="inputText"
          data-testid="query-input"
          type="text"
          placeholder="Faça sua pesquisa"
          onChange={ handleState }
        />
        <button
          type="button"
          data-testid="query-button"
        >
          Buscar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </label>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = ({
  handleState: PropTypes.func,
}).isRequired;
