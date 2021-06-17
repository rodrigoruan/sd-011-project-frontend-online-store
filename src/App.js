import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route
              exact
              path="/ShoppingCart"
              render={ (props) => (<ShoppingCart { ...props } />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
