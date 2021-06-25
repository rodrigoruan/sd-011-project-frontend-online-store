import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { onChange, onSubmit, value } = this.props;
    return (
      <>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <form onSubmit={ onSubmit }>
          <input
            placeholder="Digite aqui"
            data-testid="query-input"
            onChange={ onChange }
            value={ value }
          />
          <button type="submit" data-testid="query-button">Buscar</button>
        </form>
      </>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBar;
