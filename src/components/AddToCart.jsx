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
    let existingQty = JSON.parse(localStorage.getItem(item.product.id));
    if (existingQty == null) existingQty = 1;
    const existingItem = existingCart.find(
      (currItem) => currItem.product.id === item.product.id,
    );
    if (existingItem === undefined) {
      existingCart.push(item);
    } else { existingQty += 1; }
    localStorage.setItem('items', JSON.stringify(existingCart));
    localStorage.setItem(item.product.id, JSON.stringify(existingQty));
  }

  readLocalStorage() {
    const { item } = this.props;
    console.log(JSON.parse(localStorage.getItem('items')));
    console.log(JSON.parse(localStorage.getItem(item.product.id)));
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
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.readLocalStorage() }
        >
          teste
        </button>
      </div>
    );
  }
}

export default AddToCart;

AddToCart.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
