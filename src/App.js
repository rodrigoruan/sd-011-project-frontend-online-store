import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarrinhoCompras from './components/CarrinhoCompras';
import HomeInitial from './components/HomeInitial';
import ProductDetails from './components/ProductDetails';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const createCart = (product) => {
    // console.table(product);
    // console.table(cartItems[0]);
    console.log(cartItems.includes(product));
    if (cartItems.includes(product)) {
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const [quant, setQuant] = useState(0);

  const cartQuant = () => {
    const quantArr = cartItems.map((item) => (
      item.cartCount
    ));
    // console.log(quantArr);
    const quantity = quantArr.reduce((acc, curr) => (acc + curr), 0);
    setQuant(quantity);
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
            createCart={ createCart }
          />) }
        />
        <Route
          path="/"
          render={ (props) => (<HomeInitial
            { ...props }
            createCart={ createCart }
            cartQuant={ cartQuant }
            quant={ quant }
          />) }
        />
      </Switch>
    </Router>
  );
}

export default App;
