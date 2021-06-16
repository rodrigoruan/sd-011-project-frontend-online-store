import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/productDetails';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/productDetails/:id" component={ ProductDetails } />
        </Switch>
      </Router>
    );
  }
}

export default App;
