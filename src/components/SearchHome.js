import React, { Component } from 'react';

export default class SearchHome extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="search">
          <input type="text" name="search" />
        </label>
        <div>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    );
  }
}
