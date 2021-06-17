import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
