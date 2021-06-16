import React, { Component } from 'react';
import { BuscaProduto, CartButton, ListaCategoria } from '../components/index';

class ListagemDeProdutos extends Component {
  render() {
    return (
      <div>
        <BuscaProduto />
        <CartButton />
        <ListaCategoria />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ListagemDeProdutos;
