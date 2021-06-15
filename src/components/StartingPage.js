import React, { Component } from 'react';
import '../Componentscss/StartingPage.css';
import img from '../imgs/lupa.png';

class StartingPage extends Component {
  render() {
    return (
      <div className="Home-css">
        <img className="img" src={ img } alt="logo lupa" />
        <input className="inputs-style" type="text" placeholder="" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default StartingPage;
