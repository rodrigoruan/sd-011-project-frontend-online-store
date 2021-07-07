import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: {},
      totalCount: 0,
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  addToCart = (id, productInfo) => {
    this.setState(
      ({ cartItems }) => ({
        cartItems: { ...cartItems, [id]: productInfo },
      }),
      () => {
        this.sumTotalProducts();
        this.setLocalStorage();
      },
    );
  };

  setLocalStorage = () => {
    const { cartItems } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  getLocalStorage = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems) {
      this.setState({ cartItems });
    }
  };

  sumTotalProducts = () => {
    const { cartItems } = this.state;
    const totalCount = Object.values(cartItems).reduce(
      (a, b) => a + b.amount,
      0,
    );
    this.setState({ totalCount });
  };

  freeShipping = (product) => {
    const { shipping } = product;
    const freeShipping = shipping.free_shipping;
    if (freeShipping) return (<div data-testid="free-shipping">Frete Grátis</div>);
  }

  render() {
    const { cartItems, totalCount } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Home
                addToCart={ this.addToCart }
                cartItems={ cartItems }
                totalCount={ totalCount }
                freeShipping={ this.freeShipping }
              />
            ) }
          />
          <Route
            path="/shoppingcart"
            render={ () => (
              <ShoppingCart
                setLocalStorage={ this.setLocalStorage }
                cartItems={ cartItems }
              />
            ) }
          />
          <Route
            path="/checkout"
            render={ () => <Checkout cartItems={ cartItems } /> }
          />
          <Route
            path="/:title"
            render={ (props) => (
              <ProductDetails
                addToCart={ this.addToCart }
                cartItems={ cartItems }
                totalCount={ totalCount }
                freeShipping={ this.freeShipping }
                { ...props }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
