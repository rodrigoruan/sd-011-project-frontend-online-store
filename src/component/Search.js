import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handle = this.handle.bind(this);
  }

  async handle({ target }) {
    const { evSrch, ctgId } = this.props;
    const { type, value } = target;
    const { searchText } = this.state;
    if (type === 'button') {
      const result = await getProductsFromCategoryAndQuery(ctgId, searchText);
      evSrch(result.results);
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
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handle }
        >
          Search
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  evSrch: PropTypes.func.isRequired,
  ctgId: PropTypes.string.isRequired,
};
