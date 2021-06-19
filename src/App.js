import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import ShoppingCart from './Pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={ Home } />

          <Route
            path="/cart"
            render={ (props) => <ShoppingCart { ...props } /> }
          />

          <Route
            path="/details/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />

        </Router>
      </div>);
  }
}

export default App;
