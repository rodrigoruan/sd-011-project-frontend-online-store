import React, { Component } from 'react';
import NavHome from './NavHome';

export default class About extends Component {
  render() {
    const loading = false;
    return (
      <div>
        <NavHome loading={ loading } />
        <h1>Sobre nós</h1>
        <p>Esse site foi criado todo com React, e baseado na api do Mercado Livre.</p>
        <p>Foi Feito em grupo, em um projeto da Trybe!</p>
        <p>
          Grupo composto por: Julio Filizzola,
          Luciano Pimenta. Alan Conçalves e Gabriel Carvalho.
          {' '}
        </p>

      </div>
    );
  }
}
