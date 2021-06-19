import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import '../css/Section.css';

class Section extends Component {
  render() {
    return (
      <div className="first">
        <Route exact path="/" component={ Home } />

        <Route path="/cart" component={ ShoppingCart } />
        <Route
          path="/product/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
      </div>
    );
  }
}

export default Section;
