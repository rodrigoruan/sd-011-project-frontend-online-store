import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Páginas
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
// Componentes
import CategoryFilter from './components/CategoryFilter';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.forceUpdate = this.forceUpdate.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Main
              { ...props }
              forceAppUpdate={ this.forceUpdate }
            />) }
          />
          <Route
            exact
            path="/shoppingcart"
            render={ (props) => (<ShoppingCart
              { ...props }
              forceAppUpdate={ this.forceUpdate }
            />) }
          />
          <Route
            exact
            path="/categoryfilter"
            component={ CategoryFilter }
          />
          <Route
            path="/detalhes/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              forceAppUpdate={ this.forceUpdate }
            />) }
          />
          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
