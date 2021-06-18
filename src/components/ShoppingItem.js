import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingItem extends Component {
  constructor(props) {
    super(props);
    const { item: { price } } = this.props;
    this.state = {
      counter: 1,
      totalPrice: price,
    };
    this.sumCounter = this.sumCounter.bind(this);
    this.minusCounter = this.minusCounter.bind(this);
  }

  sumCounter() {
    const { item: { price } } = this.props;
    const { counter } = this.state;
    const totalPrice = Math.round((counter + 1) * price * 100) / 100;
    this.setState({
      counter: counter + 1,
      totalPrice,
    });
  }

  minusCounter() {
    const { counter } = this.state;
    if (counter > 1) {
      const { item: { price } } = this.props;
      const totalPrice = Math.round((counter - 1) * price * 100) / 100;
      this.setState({
        counter: counter - 1,
        totalPrice,
      });
    }
  }

  render() {
    const { counter, totalPrice } = this.state;
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
          { totalPrice }
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
