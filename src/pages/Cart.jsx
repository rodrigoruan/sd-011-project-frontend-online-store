import React from 'react';
import { CartItem } from '../components';


class Cart extends React.Component {
  render() {
    const { cartList } = this.props;
    return (
      <div>
        <h1>Carrinho de Compras</h1>
          {!cartList
          ? (
            <div data-testid="shopping-cart-empty-message">
            <p>Seu carrinho está vazio</p>
            </div>
          ) 
          : (
            <ul>
              {cartList.map(((product) => (<CartItem
                key={ product.id }
                product={ product }
                />)
                ))}
            </ul>
          )
          }
      </div>
    );
  }
}
export default Cart;
