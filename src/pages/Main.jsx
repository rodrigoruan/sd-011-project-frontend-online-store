import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ProductListing from '../components/ProductListing';
import Category from '../components/Category';

class Main extends Component {
  render() {
    return (
      <div>
        <Category />
        <SearchBar />
        <ProductListing />
      </div>
    );
  }
}

export default Main;
