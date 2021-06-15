import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
      </BrowserRouter>
    );
  }
}

export default Main;
