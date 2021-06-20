import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    const { item } = this.props;
    const { produto } = item;
    const { quantidade } = item;
    this.state = {
      produto,
      quantidade,
    };
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  increaseQuantity() {
    const { produto } = this.state;
    let quantidade = parseInt(localStorage.getItem(JSON.stringify(produto)), 10);
    quantidade += 1;
    localStorage.setItem(JSON.stringify(produto), quantidade);
    this.setState({ quantidade });
  }

  decreaseQuantity(event) {
    const { produto, quantidade } = this.state;
    const { removeFromProducts } = this.props;
    if (quantidade > 1) {
      const quantidadeManipulada = quantidade - 1;
      localStorage.setItem(JSON.stringify(produto), quantidadeManipulada);
      this.setState({ quantidade: quantidadeManipulada });
    } else {
      localStorage.removeItem(JSON.stringify(produto));
      event.target.parentNode.parentNode.parentNode.remove();
      removeFromProducts(produto);
    }
  }

  render() {
    const { quantidade } = this.state;
    const { item } = this.props;
    const { produto } = item;
    const { title, price, thumbnail } = produto;
    return (
      <div className="itemCart">
        <h5 data-testid="shopping-cart-product-name">{ title }</h5>
        <p>{ `R$ ${price}` }</p>
        <div>
          <img src={ thumbnail } alt={ title } width="70px" />
          <div>
            <button
              type="button"
              onClick={ this.increaseQuantity }
              data-testid="product-increase-quantity"
            >
              +
            </button>
            <p
              type="text"
              name="quantidade"
              data-testid="shopping-cart-product-quantity"
            >
              { quantidade }
            </p>
            <button
              type="button"
              onClick={ this.decreaseQuantity }
              data-testid="product-decrease-quantity"
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}
CartItem.propTypes = {
  item: PropTypes.shape({
    produto: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      id: PropTypes.string,
    }),
    quantidade: PropTypes.number,
  }).isRequired,
  removeFromProducts: PropTypes.func.isRequired,
};
