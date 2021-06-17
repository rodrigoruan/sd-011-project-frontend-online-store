import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { productList } = this.props;

    return (
      <main>
        <h1>Carrinho de Compras</h1>
        {productList.length
          ? (
            <section>
              <ul>
                {productList.map(({ title, id, quantity }) => (
                  <li
                    key={ id }
                  >
                    <span data-testid="shopping-cart-product-name">{ title }</span>
                    <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
                  </li>
                ))}
              </ul>
            </section>)
          : (
            <section data-testid="shopping-cart-empty-message">
              <p>Seu carrinho está vazio</p>
            </section>
          )}
      </main>
    );
  }
}

Cart.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    quantity: PropTypes.number,
  })),
}.isRequired;

export default Cart;
