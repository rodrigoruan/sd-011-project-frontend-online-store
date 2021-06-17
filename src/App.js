import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import ShoppingCart from './Pages/ShoppingCart';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/product-detail/:id"
            render={ (props) => <ProductDetail { ...props } /> }
          />
          <Route exact path="/shoppingcart" render={ () => <ShoppingCart /> } />
          <Route exact path="/" render={ () => <Home /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
