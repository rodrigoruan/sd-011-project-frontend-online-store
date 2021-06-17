import React from 'react';

import Cart from './Cart';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };

    this.cartItensStorage = this.cartItensStorage.bind(this);
  }

  componentDidMount() {
    this.cartItensStorage();
    this.totalValue();
  }

  cartItensStorage() {
    let previousList = localStorage.getItem('cartList');
    if (previousList === null) {
      previousList = [];
      return previousList;
    }
    return JSON.parse(previousList);
  }

  totalValue() {
    let values = JSON.parse(localStorage.getItem('cartList'));
    if (values === null) {
      values = 0;
      return values;
    }
    const result = values.reduce((acc, cur) => ({ price: acc.price + cur.price }));
    this.setState({
      total: result.price,
    });
  }

  render() {
    const { total } = this.state;
    const details = this.cartItensStorage();
    return (
      <div>
        { details.length === 0
          ? <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
          : details
            .map((product, index) => <Cart key={ index } product={ product } />) }
        <h4>
          Você possui
          { ` ${details.length} ` }
          itens no carrinho
        </h4>
        <h3>
          Valor total:
          { `R$ ${parseFloat(total).toFixed(2)}` }
        </h3>
      </div>
    );
  }
}

export default ShoppingCart;
