import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ShoppingCartButton from './Pages/ShoppingCartButton';
import Form from './Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/">
            <Home />
            <Link data-testid="shopping-cart-button" to="/cart">
              <ShoppingCartButton />
            </Link>
          </Route>
          <Route path="/cart">
            <ShoppingCart />
            <Link to="/">Voltar à Home</Link>
          </Route>
        </Router>
        <Form />
      </div>);
  }
}

export default App;
