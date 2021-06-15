import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
// import * as api from './services/api';

class App extends React.Component {
  // api.getCategories().then((categories) => { console.log(categories); });
  // api.getProductsFromCategoryAndQuery('MLB5672').then((categories) => { console.log(categories); });
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
