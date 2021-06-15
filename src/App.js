import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={ (props) => <LandingPage { ...props } /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
