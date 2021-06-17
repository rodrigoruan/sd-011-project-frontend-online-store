import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import './App.css';
// import * as api from './services/api';

class App extends Component {
  render() {
    // api.getCategories().then(categories => { console.log(categories) });
    // api.getProductsFromCategoryAndQuery('MLB1055', 'Motorola').then(categories => { console.log(categories) });

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/shoppingcart"
            render={ () => (<ShoppingCart { ...props } />) }
          />
          <Route exact path="/" render={ () => <Home /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
