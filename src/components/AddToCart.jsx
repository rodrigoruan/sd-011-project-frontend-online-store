import React from 'react';
import PropTypes from 'prop-types';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const {
      item,
      item: { available_quantity: availableQuantity },
      updateQuantityIcon,
    } = this.props;
    let existingCart = JSON.parse(localStorage.getItem('items'));
    if (existingCart == null) existingCart = [];
    let existingQuantity = JSON.parse(localStorage.getItem('quantity'));
    if (existingQuantity == null) existingQuantity = [];
    let position = 0;
    const existingItem = existingCart.find(
      (currItem, index) => {
        position = index;
        return currItem.id === item.id;
      },
    );
    if (existingItem === undefined && availableQuantity > 0) {
      existingCart.push(item);
      existingQuantity.push({ [item.id]: 1 });
      localStorage.setItem('quantity', JSON.stringify(existingQuantity));
      updateQuantityIcon();
    }
    if (existingItem !== undefined
      && availableQuantity > existingQuantity[position][item.id]) {
      existingQuantity[position][item.id] += 1;
      localStorage.setItem('quantity', JSON.stringify(existingQuantity));
      updateQuantityIcon();
    }
    localStorage.setItem('items', JSON.stringify(existingCart));
  }

  render() {
    const { test } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid={ test }
          onClick={ () => this.addItem() }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default AddToCart;

AddToCart.propTypes = {
  item: PropTypes.shape({
    available_quantity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  test: PropTypes.string.isRequired,
  updateQuantityIcon: PropTypes.func.isRequired,
};
