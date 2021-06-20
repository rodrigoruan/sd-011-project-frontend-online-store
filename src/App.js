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
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  addState(product) {
    let newCart = [];
    // const counter = 1;
    const { cart } = this.state;
    const anyProduct = cart.find((item) => item.id === product.id);

    if (anyProduct) {
      newCart = cart.map((item) => {
        if (item.id === anyProduct.id) {
          item.quantity += 1;
          return item;
        }
        return item;
      });
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    this.setState(() => ({
      cart: newCart,
      // quantity: previouState.quantity + counter,
    }));
  }

  increaseQuantity(product) {
    const { cart } = this.state;
    const newArr = cart.map((item) => {
      if (item.id === product.id) {
        item.quantity += 1;
        return item;
      }
      return item;
    });
    this.setState({
      cart: newArr,
    });
  }

  decreaseQuantity(product) {
    const { cart } = this.state;
    const newArr = cart.map((item) => {
      if (item.id === product.id && item.quantity > 0) {
        item.quantity -= 1;
        return item;
      }
      return item;
    });
    this.setState({
      cart: newArr,
    });
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
                decreaseQuantity={ this.decreaseQuantity }
                increaseQuantity={ this.increaseQuantity }
              />) }
            />
            <Route
              exact
              path="/details/:id"
              render={ (props) => (
                <Details
                  { ...props }
                  addState={ this.addState }
                />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
