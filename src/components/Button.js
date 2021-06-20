import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Buttons extends Component {
  render() {
    const { subClick, addClick, quantity, id, index, deleteItem } = this.props;
    return (
      <div className="btCartItem">
        <Link to="/ShoppingCart">
          <Button
            variant="primary"
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => subClick(index, id) }
            value={ id }
          >
            -
          </Button>
        </Link>
        <p data-testid="shopping-cart-product-quantity">
          {' '}
          { quantity }
          {' '}
        </p>
        <Link to="/ShoppingCart">
          <Button
            variant="primary"
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => addClick(index) }
            value={ id }
          >
            +
          </Button>
        </Link>
        <Link to="/ShoppingCart">
          <Button
            variant="danger"
            onClick={ deleteItem }
            type="button"
            value={ id }
          >
            Deletar Item
          </Button>
        </Link>
      </div>
    );
  }
}

Buttons.propTypes = {
  subClick: PropTypes.func.isRequired,
  addClick: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
