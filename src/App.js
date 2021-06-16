import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/cart" component={ Cart } />
      </Switch>
    </Router>
  );
}

export default App;
