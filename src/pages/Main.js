import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import CartButton from '../components/CartButton';
import ProductListing from '../components/ProductListing';

class Main extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CartButton />
        <ProductListing />
      </div>
    );
  }
}

export default Main;
