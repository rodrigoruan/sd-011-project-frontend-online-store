import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
              <Link data-testid="shopping-cart-button" to="/cart">Ir ao Carrinho</Link>
            </Route>
            <Route path="/cart">
              <ShoppingCart />
              <Link to="/">Voltar à Home</Link>
            </Route>
          </Switch>
        </Router>
      </div>);
  }
}

export default App;
