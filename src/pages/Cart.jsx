import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    const newItems = itensCarrinho.filter((item) => item.id !== id);
    this.setState({
      itensCarrinho: newItems,
    });
  }

  render() {
    const { itensCarrinho } = this.state;

    console.log(itensCarrinho);

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
        <strong>
          Total: R$
          {itensCarrinho.reduce((acc, curr) => acc + parseFloat(curr.price), 0)}
        </strong>
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">Finalizar compra</button>
        </Link>
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
