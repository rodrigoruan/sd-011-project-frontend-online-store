import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import ShopCart from './ShopCart';

export default class Home extends Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Router>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src="./images/cart.svg" alt="Cart" />
          </Link>
          <Switch>
            <Route path="/cart" component={ ShopCart } />
          </Switch>
        </Router>
      </div>
    );
  }
}
