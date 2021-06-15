import React, { Component } from 'react';

class ListProducts extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <input type="text" />
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
    );
  }
}

export default ListProducts;
