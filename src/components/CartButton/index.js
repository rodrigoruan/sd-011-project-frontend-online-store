import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cartbutton.module.css';

export default class CartButton extends React.Component {
  render() {
    return (
      <span>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <i className="fa fa-shopping-cart" id={ styles.cartIcon }>
            <span />
          </i>
        </Link>
      </span>
    );
  }
}
