import React, { Component } from 'react';
import { CartButton } from '../components/index';
import ListaCategoria from '../components/ListaCategoria';
import BuscaProduto from '../components/BuscaProduto';

class ListagemDeProdutos extends Component {
  constructor() {
    super();
    this.state = {
      countState: 0,
    };
    this.manipulateState = this.manipulateState.bind(this);
  }

  manipulateState(state) {
    this.setState({
      countState: state,
    });
  }

  render() {
    const { countState } = this.state;
    return (
      <div>
        <BuscaProduto />
        <CartButton countState={ countState } />
        <ListaCategoria manipulateState={ this.manipulateState } countState={ countState } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ListagemDeProdutos;
