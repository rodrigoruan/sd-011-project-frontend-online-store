import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello World</h1>

        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route path="/components/Cart" render={ () => <Cart /> } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
