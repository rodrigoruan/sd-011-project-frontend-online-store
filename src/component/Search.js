import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handle = this.handle.bind(this);
    console.log(props);
  }

  async handle({ target }) {
    const { type, value } = target;
    const { searchText } = this.state;
    if (type === 'button') {
      await getProductsFromCategoryAndQuery('Imóveis', searchText);
    }
    if (type === 'text') {
      this.setState({
        searchText: value,
      });
    }
  }

  render() {
    return (
      <div data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <input
          data-testid="query-input"
          name="searchText"
          type="text"
          onChange={ this.handle }
        />
        <button type="button" onClick={ this.handle }>Search</button>
      </div>
    );
  }
}
