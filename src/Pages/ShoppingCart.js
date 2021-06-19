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
    const { arrayCartItens, updateArray } = this.props;
    const addqtd = arrayCartItens.find((idObj) => idObj.id === id);
    if (target.innerText === '+') {
      addqtd.qtd += 1;
      localStorage.setItem('cart', JSON.stringify([...arrayCartItens]));
    }
    if (target.innerText === '-' && addqtd.qtd > 0) {
      addqtd.qtd -= 1;
      localStorage.setItem('cart', JSON.stringify([...arrayCartItens]));
    }
    updateArray(arrayCartItens);
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
            <Link to="/cart">
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ ({ target }) => this.ctrlQtd(id, target) }
              >
                +
              </button>
            </Link>
            <span data-testid="shopping-cart-product-quantity">{ qtd }</span>
            <Link to="/cart">
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ ({ target }) => this.ctrlQtd(id, target) }
              >
                -
              </button>
            </Link>

            <Link to="/cart">
              <button type="button" onClick={ () => this.removeBtn(id) }>X</button>
            </Link>
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
