import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class ShoppingCart extends Component {
  subClick = (index, id) => {
    const getLocal = JSON.parse(localStorage.getItem('item'));
    if (getLocal[`${index}`].countP > 1) {
      getLocal[`${index}`].countP -= 1;
      localStorage.setItem('item', JSON.stringify([...getLocal]));
    } else {
      const deleteItem = getLocal.filter((value) => value.id !== id);
      localStorage.setItem('item', JSON.stringify([...deleteItem]));
    }
  }// Rodolfo Rezende da Turma 11 me ajudou a criar a logica dessa função;

  addClick = (index) => {
    const getLocal = JSON.parse(localStorage.getItem('item'));
    if (getLocal[`${index}`].countP < (getLocal[`${index}`].available_quantity)) {
      getLocal[`${index}`].countP += 1;
    }
    localStorage.setItem('item', JSON.stringify([...getLocal]));
  }

  deleteItem({ target }) {
    const { value } = target;
    const getLocal = JSON.parse(localStorage.getItem('item'));
    const deleteItem = getLocal.filter((item) => item.id !== value);
    localStorage.setItem('item', JSON.stringify([...deleteItem]));
  }

  deleteCart() {
    localStorage.clear();
  }

  render() {
    const getLocal = JSON.parse(localStorage.getItem('item'));
    return (

      <div>
        { !localStorage.item
          ? <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
          : (getLocal.map(({ title, thumbnail, price, countP, id }, index) => (
            <div key={ index }>
              <div data-testid="shopping-cart-product-name">
                <img src={ thumbnail } alt={ title } />
                <p>{ title }</p>
                <p>
                  R$
                  {price}
                </p>
              </div>
              <Button
                deleteItem={ this.deleteItem }
                quantity={ countP }
                subClick={ this.subClick }
                addClick={ this.addClick }
                id={ id }
                index={ index }
              />
            </div>
          ))) }
        <Link to="/shoppingCart">
          <button type="button" onClick={ this.deleteCart }>Limpar Carrinho</button>
        </Link>
        <Link to="checkout" data-testid="checkout-products">Checkout</Link>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}
