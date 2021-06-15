import React, { Component } from 'react';
import ButtonCart from './ButtonCart';

class Home extends Component {
  render() {
    return (
      <div>
        <ButtonCart />
        <span
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default Home;
