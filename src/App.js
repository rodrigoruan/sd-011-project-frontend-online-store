import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchHome from './components/SearchHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route>
            <Route exact path="/" render={ () => <SearchHome /> } />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
