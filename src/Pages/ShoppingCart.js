import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.addQtdprd = this.addQtdprd.bind(this);
    this.rmQtd = this.rmQtd.bind(this);
    this.removeBtn = this.removeBtn.bind(this);
  }

  rmQtd(id) {
    const { updateArray } = this.props;
    const getCart = JSON.parse(localStorage.getItem('cart'));
    const addqtd = getCart.find((idObj) => idObj.id === id);
    addqtd.qtd -= 1;
    updateArray(getCart);
  }

  addQtdprd(id) {
    const { updateArray } = this.props;
    const getCart = JSON.parse(localStorage.getItem('cart'));
    const addqtd = getCart.find((idObj) => idObj.id === id);
    if (addqtd.qtd < addqtd.maxQtd) {
      addqtd.qtd += 1;
      updateArray(getCart);
    }
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
        { localStorage.cart ? getCart.map(({ id, title, qtd }) => (
          <div key={ id }>
            <p data-testid="shopping-cart-product-name">{ title }</p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.addQtdprd(id) }
            >
              +
            </button>
            <span data-testid="shopping-cart-product-quantity">{ qtd }</span>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.rmQtd(id) }
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

ShoppingCart.propTypes = {
  updateArray: PropTypes.func.isRequired,
};
