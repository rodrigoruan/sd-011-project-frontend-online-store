import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Button extends Component {
  render() {
    const { subClick, addClick, quantity, id, index, deleteItem } = this.props;
    return (
      <div>
        <Link to="/ShoppingCart">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => subClick(index, id) }
            value={ id }
          >
            -
          </button>
        </Link>
        <p data-testid="shopping-cart-product-quantity">
          {' '}
          { quantity }
          {' '}
        </p>
        <Link to="/ShoppingCart">
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => addClick(index) }
            value={ id }
          >
            +
          </button>
        </Link>
        <Link to="/ShoppingCart">
          <button
            onClick={ deleteItem }
            type="button"
            value={ id }
          >
            Deletar Item
          </button>
        </Link>
      </div>
    );
  }
}

Button.propTypes = {
  subClick: PropTypes.func.isRequired,
  addClick: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
