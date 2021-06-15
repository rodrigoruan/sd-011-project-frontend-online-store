import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <header>
        <label htmlFor="home-input">
          <input type="text" id="home-input" />
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
