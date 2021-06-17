import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shopcart from './Pages/Shopcart';
import ProductDetails from './Pages/ProductDetails';
import PurchasePage from './Pages/PurchasePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/shopcart"
            render={ (params) => <Shopcart { ...params } /> }
          />
          <Route
            className="product"
            path="/product"
            render={ (props) => (
              <ProductDetails { ...props } />
            ) }
          />
          <Route path="/PurchasePage" component={ PurchasePage } />
          <Route path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
