import React from 'react';
import { CartItem } from '../components';
import data from '../__mocks__/query';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <main>
        <h1>Carrinho de Compras</h1>
          {!productList
          ? (
            <div data-testid="shopping-cart-empty-message">
            <p>Seu carrinho está vazio</p>
            </div>
          ) 
          : (
            <ul>
              {data.results.map(((product) => (<CartItem
                key={ product.id }
                product={ product }
                />)
                ))}
            </ul>
          )
          }
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
