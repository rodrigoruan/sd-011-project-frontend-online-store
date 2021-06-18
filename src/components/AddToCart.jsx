import React from 'react';
import PropTypes from 'prop-types';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const { item } = this.props;
    let existingCart = JSON.parse(localStorage.getItem('items'));
    if (existingCart == null) existingCart = [];
    let existingQuantity = JSON.parse(localStorage.getItem('quantity'));
    if (existingQuantity == null) existingQuantity = [];
    let position = 0;
    const existingItem = existingCart.find(
      (currItem, index) => {
        position = index;
        return currItem.product.id === item.product.id;
      },
    );
    if (existingItem === undefined) {
      existingCart.push(item);
      existingQuantity.push({ [item.product.id]: 1 });
    } else {
      existingQuantity[position][item.product.id] += 1;
    }
    localStorage.setItem('items', JSON.stringify(existingCart));
    localStorage.setItem('quantity', JSON.stringify(existingQuantity));
  }

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
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
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
