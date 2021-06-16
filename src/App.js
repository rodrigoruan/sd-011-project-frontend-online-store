import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/cart" component={ Cart } />
        <Route
          path="/product-detail/:id"
          render={ (props) => (<ProductDetail { ...props } />) }
        />
      </Switch>
    </Router>
  );
}

export default App;
