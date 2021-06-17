import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarrinhoCompras from './components/CarrinhoCompras';
import HomeInitial from './components/HomeInitial';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/product-details/:id"
          exact
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route path="/carrinho-compras" exact component={ CarrinhoCompras } />
        <Route path="/" component={ HomeInitial } />
      </Switch>
    </Router>
  );
}

export default App;
