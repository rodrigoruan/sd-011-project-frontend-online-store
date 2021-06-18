import React from 'react';
import PropTypes from 'prop-types';

class CheckoutItem extends React.Component {
  render() {
    const { products } = this.props;
    return (
      Object.values(products)
        .map(({ details, quantity }) => (
          <section key={ details.id }>
            <img src={ details.thumbnail } alt={ details.title } width="40px" />
            <span data-testid="shopping-cart-product-name">{ details.title }</span>
            <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
            <span>
              R$
              { details.price * quantity}
            </span>
          </section>
        ))
    );
  }
}

CheckoutItem.propTypes = ({
  products: PropTypes.arrayOf,
}).isRequired;

export default CheckoutItem;
