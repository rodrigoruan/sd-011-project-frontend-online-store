import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello World</h1>

        <Switch>
          <Route path="/" component={ MainPage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
