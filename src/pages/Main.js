import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import CartButton from '../components/CartButton';
import ProductListing from '../components/ProductListing';
import Category from '../components/Category';

class Main extends Component {
  render() {
    return (
      <div>
        <Category />
        <SearchBar />
        <CartButton />
        <ProductListing />
      </div>
    );
  }
}

export default Main;
