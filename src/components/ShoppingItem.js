import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingItem extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
    this.sumCounter = this.sumCounter.bind(this);
    this.minusCounter = this.minusCounter.bind(this);
  }

  getTotalPrice() {
    const { item: { price } } = this.props;
    const { counter } = this.state;
    const totalPrice = Math.round(counter * price * 100) / 100;
    return totalPrice;
  }

  sumCounter() {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  }

  minusCounter() {
    const { counter } = this.state;
    if (counter > 1) {
      this.setState({
        counter: counter - 1,
      });
    }
  }

  render() {
    const { counter } = this.state;
    const { onClick, item: { id, title, thumbnail } } = this.props;
    return (
      <div>
        <button type="button" onClick={ () => onClick(id) }>X</button>
        <img src={ thumbnail } alt={ title } width="40px" />
        <span>{ title }</span>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.minusCounter }
        >
          -
        </button>
        <span>{ counter }</span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.sumCounter }
        >
          +
        </button>
        <span>
          R$
          { this.getTotalPrice() }
        </span>
      </div>
    );
  }
}

export default ShoppingItem;

ShoppingItem.propTypes = ({
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}).isRequired;
