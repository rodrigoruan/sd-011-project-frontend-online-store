import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/productDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productId: '',
      productTitle: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { productId, productTitle } = this.state;
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
            path="/productDetails/:categoryId?/:query?"
            render={ (props) => (
              <ProductDetails
                { ...props }
                productId={ productId }
                productTitle={ productTitle }
              />) }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
