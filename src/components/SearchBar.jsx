import React from 'react';

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

export default SearchBar;
