import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ProductListing from '../components/ProductListing';

class Main extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductListing />
      </div>
    );
  }
}

export default Main;
