import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetails from '../pages/ProductDetails';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route path="/product-details/:id" component={ ProductDetails } />
      </Switch>
    );
  }
}

export default Routes;
