import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={ (props) => <LandingPage { ...props } /> } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </Router>
    );
  }
}

export default App;
