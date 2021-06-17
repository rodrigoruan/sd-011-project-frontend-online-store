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
    };
    this.addItems = this.addItems.bind(this);
  }

  addItems(obj) {
    const { itensAdded } = this.state;
    this.setState({
      itensAdded: [...itensAdded, obj],
    });
  }

  render() {
    const { itensAdded } = this.state;
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
