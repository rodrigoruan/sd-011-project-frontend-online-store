import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../components/ProductItem';

class Cart extends Component {
  constructor(props) {
    super(props);
    const { location: { aboutProps: { itensCarrinho } } } = this.props;
    this.state = {
      itensCarrinho,

    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem({ target: { id } }) {
    const { itensCarrinho } = this.state;
    itensCarrinho.forEach((item) => {
      if (item.id !== id) {
        console.log(id);
        delete item[id];
        this.setState({ itensCarrinho });
      }
    });
  }

  render() {
    const { itensCarrinho } = this.state;

    if (itensCarrinho.length === 0) {
      return <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>;
    }
    return (
      <div>
        {
          itensCarrinho.map((element) => (

            <ProductItem
              key={ element.id }
              cart={ element }
              deleteItem={ this.deleteItem }
            />

          ))
        }
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
