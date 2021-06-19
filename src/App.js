import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello World</h1>

        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route
            path="/components/ProductDetails"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route path="/components/Cart" render={ () => <Cart /> } />
          <Route path="/components/Checkout" component={ Checkout } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
