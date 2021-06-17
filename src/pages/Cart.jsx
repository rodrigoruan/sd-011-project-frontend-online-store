import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = ({
      cartList: {},
    });
  }

  addItem() {
    
  }

  removeItem() {
    
  }

  decreasesItem() {
    
  }

  totalItemPrice() {
   
  }

  totalListPrice() {
   
  }

  // Função que monta li que é item do produto
  // Do evento (item clicado) extrai foto, preco 
  elementList(thumbnail, price, title, id) {
    Return (
    <li>
      <span onClick={ this.removeItem } >Remover</span>
      <img alt="Foto produto" src={ thumbnail } />
      <p>{ title} </p>
      <span onClick={ this.decreasesItem }>decrementar</span>
      {/* <p>{ Função que diz quantidade de itens dessa li }</p> */}
      <span onClick={ this.addItem }>Incrementar</span>
      <p>{ this.totalItemPrice() }</p>
    </li> 
  }
  

  render() {
    return (
      <div>
        <Link to="/">Voltar</Link>
        <h2>Carrinho de compras</h2>
        <ul>
          { /*  Colocar condicional de se o carrinho tiver o tamanho = 0 retornar mensagem(data-testid="shopping-cart-empty-message">Seu carrinho está vazio). Se não retornar elementList  */}
        </ul>
        <p> Valor total da compra: R$ { totalPrice }</p>
        <button type="submit">Finalizar compra</button>
      </div>
    );
  }
}
