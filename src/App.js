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
      actualValue: 0,
    };

    this.addItems = this.addItems.bind(this);
    this.remove = this.remove.bind(this);
    this.ShowQuantity = this.remove.bind(this)
  }

  addItems(obj) {
    const { itensAdded } = this.state;
    const { id } = obj;
    const check = itensAdded.some((product) => product.id === id);

    if(!check) {
      this.setState({
        itensAdded: [...itensAdded, obj],
      }) 
    } else {
      itensAdded.find((product) => product.id === id).quantity += 1
   }
  }

  remove(id) {
    const { itensAdded } = this.state;
    const newArray = itensAdded.filter((product) => product.id !== id);
    this.setState({
      itensAdded: newArray
    })
  }

  ShowQuantity() {
    const { itensArray } = this.props;
    const result = itensArray.reduce((prevProduct, currentProduct) => prevProduct + currentProduct.quantity, 0)

    this.setState({
      totalValue: result,
    })
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
                    remove={ this.remove }
                    actualValue={ this.actualValue }
                    ShowQuantity={ this.ShowQuantity }
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
