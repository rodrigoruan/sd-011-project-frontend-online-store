import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import './css/Section.css';

class Section extends Component {
  render() {
    return (
      <>
        <section className="first">
          <Route exact path="/" component={ Home } />
        </section>
        <Route path="/cart" component={ ShoppingCart } />
        <Route
          path="/product/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
      </>
    );
  }
}

export default Section;
