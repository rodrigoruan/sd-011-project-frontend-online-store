import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import ShoppingCart from './Pages/ShoppingCart';
import Main from './Pages/Main';

export default class App extends Component {
  constructor() {
    super();
    const getCart = JSON.parse(localStorage.getItem('cart'));
    this.state = {
      mastercartItens: getCart,
    };
    this.addItens = this.addItens.bind(this);
    this.newArray = this.newArray.bind(this);
  }

  newArray(array) {
    localStorage.setItem('cart', JSON.stringify(array));
  }

  addItens(obj) {
    if (!localStorage.cart) {
      localStorage.setItem('cart', JSON.stringify([obj]));
    } else {
      const getCart = JSON.parse(localStorage.getItem('cart'));
      const idArrayItens = getCart.some(({ id }) => id === obj.id);
      const addqtd = getCart.map((objID) => objID.id);
      if (!idArrayItens) {
        localStorage.setItem('cart', JSON.stringify([...getCart, obj]));
      } else {
        addqtd.qtd += 1;
        localStorage.setItem('cart', JSON.stringify([...getCart]));
      }
    }
  }

  render() {
    const { mastercartItens } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (<Main
                { ...props }
                arrayCartItens={ mastercartItens }
                addItens={ this.addItens }
                updateArray={ this.newArray }
              />) }
            />
            <Route
              exact
              path="/product/:id"
              render={ (props) => (<ProductDetail
                { ...props }
                arrayCartItens={ mastercartItens }
                addItens={ this.addItens }
                updateArray={ this.newArray }
              />) }
            />
            <Route
              exact
              path="/cart"
              render={ (props) => (<ShoppingCart
                { ...props }
                arrayCartItens={ mastercartItens }
                addItens={ this.addItens }
                updateArray={ this.newArray }
              />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
