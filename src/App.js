import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productDetails: {},
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    this.setState({ productDetails: value });
  }

  render() {
    const { productDetails } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <LandingPage
                { ...props }
                getProductDetails={ this.onClick }
              />) }
          />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route
            path="/productDetails/:id?"
            render={ (props) => (
              <ProductDetails
                { ...props }
                productDetails={ productDetails }
              />) }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
