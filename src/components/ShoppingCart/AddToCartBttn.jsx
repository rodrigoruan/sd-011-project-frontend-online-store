import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToCartBttn extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
    this.handleCartButtonClick = this.handleCartButtonClick.bind(this);
  }

  handleCartButtonClick() {
    const { product:
      { id, title, price, thumbnail, currency_id: currencyId,
      } } = this.props;
    this.setState((pState) => ({
      counter: pState.counter + 1,
    }));
    const { counter } = this.state;
    const obj = {
      id,
      title,
      price,
      thumbnail,
      currencyId,
      counter,
    };
    if (localStorage[id]) {
      const saveItem = JSON.parse(localStorage.getItem([id]));
      saveItem.counter += 1;
      localStorage.setItem(id, JSON.stringify(saveItem));
    } else {
      localStorage.setItem(id, JSON.stringify(obj));
    }
  }

  render() {
    const { dataTest } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleCartButtonClick }
          data-testid={ dataTest }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

AddToCartBttn.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    currency_id: PropTypes.string.isRequired,
  }).isRequired,
  dataTest: PropTypes.string.isRequired,
};
