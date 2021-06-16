import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Shoppingcart from './components/Shoppingcart';
import './App.css';
// import * as api from './services/api';

class App extends React.Component {
  // api.getCategories().then((categories) => { console.log(categories); });
  // api.getProductsFromCategoryAndQuery('MLB5672').then((categories) => { console.log(categories); });
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/shopping-cart" component={ Shoppingcart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
