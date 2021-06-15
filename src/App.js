import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route>
        <Home path="/" />
      </Route>
    </BrowserRouter>
  );
}

export default App;
