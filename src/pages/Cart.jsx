import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }

  decrement() {
    const { count } = this.state;
    if (count > 1) {
      return this.setState({
        count: count - 1,
      });
    }
  }

  render() {
    const { location: { aboutProps: { itensCarrinho } } } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        { itensCarrinho.map((element) => (
          <div key={ element.id }>
            {/* <img src={ element.thumbnail } alt={ element.title } /> */}
            <h3>{ element.id }</h3>
            <h5 data-testid="shopping-cart-product-name">{ element.title }</h5>
            <span>{ element.price }</span>
            <div>
              <button type="button" onClick={ this.decrement }>-</button>
              <span data-testid="shopping-cart-product-quantity">{ count + 1 }</span>
              <button type="button" onClick={ this.increment }>+</button>
            </div>
          </div>)) }
      </div>
    );
  }
}

export default Cart;

Cart.propTypes = {
  location: PropTypes.shape({
    aboutProps: PropTypes.shape({
      itensCarrinho: PropTypes.arrayOf,
    }),
  }),
}.isRequired;
