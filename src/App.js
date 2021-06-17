import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Details from './components/Details';

class App extends React.Component {
  constructor() {
    super();
    this.addState = this.addState.bind(this);

    this.state = {
      cart: [],
      quantity: 1,
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
    const { cart } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => <Home addState={ this.addState } /> } />
            <Route
              exact
              path="/carrinho"
              render={ () => <ShoppingCart addState={ this.addState } cart={ cart } /> }
            />
            <Route exact path="/details/:id" component={ Details } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
