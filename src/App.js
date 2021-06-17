import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './componentes/Home';
import CartPages from './componentes/cartPages';
import ProductDetails from './componentes/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cartpages" component={ CartPages } />
        <Route path="/product-details/:id" component={ ProductDetails } />
        {/* render={ (props) => <ProductDetails { ...props } /> } */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
