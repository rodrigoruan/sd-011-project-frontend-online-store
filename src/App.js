import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as api from './services/api';
import SearchBar from './components/SearchBar';

function App() {
  api.getCategories().then((categorie) => console.log(categorie));
  api.getProductsFromCategoryAndQuery('MLB5672', 'Biela').then((cat) => console.log(cat));
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
