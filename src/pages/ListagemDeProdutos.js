import React, { Component } from 'react';
import { CartButton } from '../components/index';
import ListaCategoria from '../components/ListaCategoria';
import BuscaProduto from '../components/BuscaProduto';

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
