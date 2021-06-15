import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <label htmlFor="product">
        Digite o nome do produto:
        <input
          type="text"
          name="product"
          data-testid="query-input"
          value={ product }
          onChange={ this.onChangeHandler }
        />
      </label>
    );
  }
}

export default SearchBar;
