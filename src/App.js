import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';
import ProductDetail from './Pages/ProductDetail';
import ShoppingCart from './Pages/ShoppingCart';
import Main from './Pages/Main';

export default class App extends Component {
  constructor() {
    super();
    const getCart = JSON.parse(localStorage.getItem('cart'));
    this.state = {
      mastercartItens: getCart,
      totalQuantity: 0,
      resultTot: [],
    };
    this.addItens = this.addItens.bind(this);
    this.newArray = this.newArray.bind(this);
    this.showQtd = this.showQtd.bind(this);
    this.addQtdprd = this.addQtdprd.bind(this);
  }

  newArray(array) {
    localStorage.setItem('cart', JSON.stringify(array));
    this.setState({ mastercartItens: array });
    this.showQtd();
  }

  addItens(obj) {
    if (!localStorage.cart) {
      localStorage.setItem('cart', JSON.stringify([obj]));
    } else {
      const getCart = JSON.parse(localStorage.getItem('cart'));
      const addqtd = getCart.map((objID) => objID);
      const idArrayItens = getCart.some(({ id }) => id === obj.id);
      if (!idArrayItens) {
        localStorage.setItem('cart', JSON.stringify([...getCart, obj]));
      } else {
        addqtd[0].qtd += 1;
        this.showQtd();
        localStorage.setItem('cart', JSON.stringify([...getCart]));
      }
    }
  }

  showQtd() {
    const result = getProductsFromCategoryAndQuery('PASSTEST202020', '');
    const getCart = JSON.parse(localStorage.getItem('cart'));
    const totalQnt = getCart.reduce((previous, current) => previous + current.qtd, 0);
    this.setState({
      totalQuantity: totalQnt,
      resultTot: result,
    });
  }

  addQtdprd(actualId, product) {
    const getCart = JSON.parse(localStorage.getItem('cart'));
    if (getCart !== null) {
      const addqtd = getCart.find((idObj) => idObj.id === actualId);
      if (addqtd !== undefined) {
        if (addqtd.qtd < addqtd.maxQtd) {
          addqtd.qtd += 1;
          this.newArray(getCart);
        }
      } else {
        const { id, title, price, available_quantity: maxQtd } = product;
        const obj = {
          id,
          title,
          maxQtd,
          qtd: 1,
          value: price,
        };
        this.addItens(obj);
        this.showQtd();
      }
    } else {
      const { id, title, price, available_quantity: maxQtd } = product;
      const obj = {
        id,
        title,
        maxQtd,
        qtd: 1,
        value: price,
      };
      this.addItens(obj);
      this.showQtd();
    }
  }

  render() {
    const { mastercartItens, totalQuantity, resultTot } = this.state;
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
                showQtd={ this.showQtd }
                actualQtd={ totalQuantity }
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
                actualQtd={ totalQuantity }
                showQtd={ this.showQtd }
                addQtdprd={ this.addQtdprd }
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
                actualQtd={ totalQuantity }
                result={ resultTot }
                addQtdprd={ this.addQtdprd }
              />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
