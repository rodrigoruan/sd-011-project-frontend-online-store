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
    existingCart.push(item);
    localStorage.setItem('items', JSON.stringify(existingCart));
  }

  readLocalStorage() {
    console.log(JSON.parse(localStorage.getItem('items')));
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
  item: PropTypes.objectOf().isRequired,
};
