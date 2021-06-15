import React, { Component } from 'react';

export default class SearchPageHome extends Component {
  render() {
    return (
      <div>
        <label htmlFor="initialMessage">
          <input
            type="text"
            id="initialMessage"
          />
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}