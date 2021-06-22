import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ListProducts from './pages/ListProducts';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
// import * as api from './services/api';

// function App() {
//   return (

//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" render={ () => <ListProducts /> } />
//         <Route exact path="/shoppingCart" render={ () => <ShopingCart /> } />
//         <Route
//           path="/product/:id"
//           render={ (props) => <ProductDetail { ...props } /> }
//         />
//       </Switch>
//     </BrowserRouter>

//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };

    this.getCartItems = this.getCartItems.bind(this);
    this.addCartItem = this.addCartItem.bind(this);
  }

  getCartItems() {
    const { cart } = this.state;
    return cart;
  }

  addCartItem({ target: { value } }) {
    const obj = JSON.parse(value);
    this.setState((previousState) => ({
      cart: [...previousState.cart, obj],
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ListProducts
              addCartItem={ this.addCartItem }
              getCart={ this.getCartItems }
            />
          </Route>
          <Route path="/shoppingCart">
            <ShoppingCart getCart={ this.getCartItems } />
          </Route>
          <Route
            path="/products/:id"
            render={ (props) => (<ProductDetail
              addCartItem={ this.addCartItem }
              getCart={ this.getCartItems }
              { ...props }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
