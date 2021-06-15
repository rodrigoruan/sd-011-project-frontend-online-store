import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } api={ api } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
