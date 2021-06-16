import React from 'react';
import ShoppingCart from './ShoppingCart';
import style from './Home.module.css';

class Home extends React.Component {
  render() {
    return (
      <div className={ style.inputContent }>
        <label htmlFor="site-search">
          <input
            type="search"
            id="site-search"
          />
        </label>
        <br />
        <ShoppingCart />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default Home;
