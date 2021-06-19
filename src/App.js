import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarrinhoCompras from './components/CarrinhoCompras';
import HomeInitial from './components/HomeInitial';
import ProductDetails from './components/ProductDetails';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const createCart = (product) => {
    const add = cartItems.some((item) => {
      if (item.id === product.id) {
        item.cartCount += 1;
        return true;
      }
      return false;
    });
    if (add === false) {
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/product-details/:id"
          exact
          render={ (props) => <ProductDetails { ...props } createCart={ createCart } /> }
        />
        <Route
          path="/carrinho-compras"
          exact
          render={ (props) => (<CarrinhoCompras
            { ...props }
            cartItems={ cartItems }
          />) }
        />
        <Route
          path="/"
          render={ (props) => (<HomeInitial
            { ...props }
            createCart={ createCart }
          />) }
        />
      </Switch>
    </Router>
  );
}

export default App;
