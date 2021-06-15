import React from 'react'
import { Link, Route } from 'react-router-dom';

class Home extends React.Component {
  render() { 
    return (
      <div>
        <label htmlFor="search-input">
          <input type="text" name="search" id="search-input" />
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <Link data-testid="shopping-cart-button" to="/shopping-cart">Procurar</Link>
        </label>
      </div>
    );
  }
}
 
export default Home;