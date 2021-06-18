import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Details from './pages/Details';

class App extends React.Component {
  constructor() {
    super();
    this.addState = this.addState.bind(this);

    this.state = {
      cart: [],
      quantity: 0,
    };
  }

  addState(product) {
    const counter = 1;
    const { cart } = this.state;
    this.setState((previouState) => ({
      cart: [...cart, product],
      quantity: previouState.quantity + counter,
    }));
  }

  render() {
    const { cart, quantity } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => <Home addState={ this.addState } /> } />
            <Route
              exact
              path="/carrinho"
              render={ () => (<ShoppingCart
                addState={ this.addState }
                cart={ cart }
                quantity={ quantity }
              />) }
            />
            <Route exact path="/details/:id" component={ Details } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
