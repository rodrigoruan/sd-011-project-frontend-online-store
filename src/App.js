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
    const { id } = obj;

    const alreadyExist = itensAdded.filter((product, index) => ( product.id === id ));
    console.log(alreadyExist)
    if(!alreadyExist.length) {
      this.setState({
        itensAdded: [...itensAdded, obj],
      })
    } else {
      alreadyExist[0].quantity = alreadyExist[0].quantity += 1
    }
  }
  

    // if(!check) {
    //   this.setState({
    //     itensAdded: [...itensAdded, obj],
    //   })
    // } else {
    //   // itensAdded.find((product) => id === product.id)
    // }

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
