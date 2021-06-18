import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EachItem extends Component {
  constructor(props) {
    super(props);
    const { item } = this.props;
    this.state = {
      total: item.counter,
      price: item.price,
    };
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity({ target }) {
    const { name, value } = target;
    const saveItem = JSON.parse(localStorage.getItem([value]));
    const { total } = this.state;

    if (name === 'increase') {
      this.setState({
        total: total + 1,
      });
      saveItem.counter += 1;
      localStorage.setItem(value, JSON.stringify(saveItem));
    } else if (name === 'decrease') {
      this.setState({
        total: total - 1,
      });
      saveItem.counter -= 1;
      localStorage.setItem(value, JSON.stringify(saveItem));
    }
  }

  render() {
    const { item, removeItem } = this.props;
    const { total, price } = this.state;
    return (
      <div className="productCartContainer" key={ item.id }>
        <img src={ item.thumbnail } alt="Product Thumbnail" />
        <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
        <div>
          <button
            type="button"
            value={ item.id }
            name="decrease"
            onClick={ this.changeQuantity }
            data-testid="product-decrease-quantity"
            disabled={ total <= 1 }
          >
            -
          </button>
          <h5 data-testid="shopping-cart-product-quantity">{total}</h5>
          <button
            type="button"
            value={ item.id }
            name="increase"
            onClick={ this.changeQuantity }
            data-testid="product-increase-quantity"
          >
            +
          </button>
          <h5>{price * total}</h5>
          <span>{ item.currencyId }</span>
        </div>
        <button
          type="button"
          onClick={ () => removeItem(item.id) }
        >
          X
        </button>
      </div>
    );
  }
}

EachItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    currencyId: PropTypes.string.isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};
