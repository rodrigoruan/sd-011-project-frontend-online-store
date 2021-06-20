import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.ctrlQtd = this.ctrlQtd.bind(this);
    this.removeBtn = this.removeBtn.bind(this);
  }

  ctrlQtd(id, target) {
    const { updateArray } = this.props;
    const getCart = JSON.parse(localStorage.getItem('cart'));
    const addqtd = getCart.find((idObj) => idObj.id === id);
    if (target.innerText === '+') {
      addqtd.qtd += 1;
    }
    if (target.innerText === '-' && addqtd.qtd > 0) {
      addqtd.qtd -= 1;
    }
    updateArray(getCart);
  }

  removeBtn(idRm) {
    const { arrayCartItens, updateArray } = this.props;
    const remove = arrayCartItens.filter((objID) => objID.id !== idRm);
    updateArray(remove);
  }

  render() {
    const getCart = JSON.parse(localStorage.getItem('cart'));
    return (
      <>
        { localStorage.cart ? getCart.map(({ id, title, qtd }, index) => (
          <div key={ id }>
            <p data-testid="shopping-cart-product-name">{ title }</p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ ({ target }) => this.ctrlQtd(id, target) }
            >
              +
            </button>
            <span data-testid="shopping-cart-product-quantity">{ qtd }</span>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ ({ target }) => this.ctrlQtd(id, target) }
            >
              -
            </button>
            <button type="button" onClick={ () => this.removeBtn(id) }>X</button>
          </div>
        )) : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> }
        <button type="button" data-testid="shopping-cart-button">Comprar</button>
      </>
    );
  }
}

ShoppingCart.propTypes = {
  arrayCartItens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
