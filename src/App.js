import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends React.Component {
  constructor() {
    super();
    const quantity = JSON.parse(localStorage.getItem('quantity'));
    let quantityIcon = 0;
    if (quantity !== null) {
      quantity.forEach((item) => {
        quantityIcon += Object.values(item)[0];
      });
    }
    this.state = {
      productDetails: {},
      quantityIcon,
    };
    this.onClick = this.onClick.bind(this);
    this.updateQuantityIcon = this.updateQuantityIcon.bind(this);
  }

  onClick(value) {
    this.setState({ productDetails: value });
  }

  updateQuantityIcon() {
    const quantity = JSON.parse(localStorage.getItem('quantity'));
    let quantityIcon = 0;
    if (quantity !== null) {
      quantity.forEach((item) => {
        quantityIcon += Object.values(item)[0];
      });
    }
    this.setState({ quantityIcon });
  }

  render() {
    const { productDetails, quantityIcon } = this.state;
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
                quantityIcon={ quantityIcon }
                updateQuantityIcon={ this.updateQuantityIcon }
              />) }
          />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route
            path="/product-details/:id?"
            render={ (props) => (
              <ProductDetails
                { ...props }
                productDetails={ productDetails }
                quantityIcon={ quantityIcon }
                updateQuantityIcon={ this.updateQuantityIcon }
              />) }
          />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </Router>
    );
  }
}

export default App;
