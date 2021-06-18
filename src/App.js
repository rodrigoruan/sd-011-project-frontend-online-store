import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import Main from './Pages/Main';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itensAdded: [],
      check: false,
    };

    this.addItems = this.addItems.bind(this);
  }

  addItems(obj) {
    const { itensAdded, check } = this.state;
    const { id, title, price, quantity } = obj;

    if(itensAdded.length) {
      itensAdded.some((product) => (
        product.id === id ? this.setState({ check: true }) : this.setState({ check: false })
      ));
    }


    if(!check) {
      this.setState({
        itensAdded: [...itensAdded, obj],
        check: true,
      })
    } else {
      itensAdded.find((product) => id === product.id)
    }
  }

  render() {
    const { itensAdded } = this.state;
    console.log(itensAdded)
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={
                (props) => (
                  <Main
                    { ...props }
                    itensAdded={ itensAdded }
                    addItens={ this.addItems }
                  />)
              }
            />
            <Route
              exact
              path="/product/:id"
              render={
                (props) => (
                  <ProductDetail
                    { ...props }
                    itensAdded={ itensAdded }
                    addItens={ this.addItems }
                  />)
              }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
