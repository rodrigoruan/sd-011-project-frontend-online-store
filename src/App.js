import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Category from './components/Category';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } api={ api } />
            <Route exact path="/carrinho" component={ ShoppingCart } />
          </Switch>
        </BrowserRouter>
        <Category />
      </div>
    );
  }
}

export default App;
