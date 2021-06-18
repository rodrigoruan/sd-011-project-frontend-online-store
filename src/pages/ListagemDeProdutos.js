import React, { Component } from 'react';
import { CartButton } from '../components/index';
import ListaCategoria from '../components/ListaCategoria';
import BuscaProduto from '../components/BuscaProduto';

class ListagemDeProdutos extends Component {
  constructor() {
    super();
    this.state = {
      quantityTotal: 0,
    };
    this.manipulateState = this.manipulateState.bind(this);
  }

  manipulateState(quantityTotal) {
    this.setState({
      quantityTotal,
    });
  }

  render() {
    const { quantityTotal } = this.state;
    return (
      <div>
        <BuscaProduto manipulateState={ this.manipulateState } />
        <CartButton quantityTotal={ quantityTotal } />
        <ListaCategoria manipulateState={ this.manipulateState } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ListagemDeProdutos;
