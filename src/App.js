import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarrinhoCompras from './components/CarrinhoCompras';
import HomeInitial from './components/HomeInitial';
import ProductDetails from './components/ProductDetails';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const createCart = (products) => {
    const cartItem = products.filter((product) => product.cartItem === true);
    setCartItems(cartItem);
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/product-details/:id"
          exact
          render={ (props) => <ProductDetails { ...props } /> }
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
