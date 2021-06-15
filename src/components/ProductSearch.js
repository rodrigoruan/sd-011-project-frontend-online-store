import React, { Component } from 'react';

class ProductSearch extends Component {
  render() {
    return (
      <>
        <input
          name="searchProduct"
          type="text"
        />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </>
    );
  }
}
export default ProductSearch;
