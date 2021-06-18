import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingItem from '../components/ShoppingItem';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: '',
    };
    this.removeItem = this.removeItem.bind(this);
    this.totalPriceCart = this.totalPriceCart.bind(this);
  }

  componentDidMount() {
    this.retrieveCart();
  }

  retrieveCart() {
    const currentCart = localStorage.getItem('shoppingCart');
    if (currentCart) {
      this.setState({ products: JSON.parse(currentCart) });
    }
    return currentCart;
  }

  removeItem(id) {
    const { products } = this.state;
    delete products[id];
    this.setState({ products });
    localStorage.setItem('shoppingCart', JSON.stringify(products));
  }

  totalPriceCart() {
    const { products } = this.state;
    const total = Object.values(products)
      .reduce((acc, { details, quantity }) => acc + (details.price * quantity), 0);
    return total;
  }

  render() {
    const { products } = this.state;
    // const { match: { params: { productsCart } } } = this.props;
    return (
      <div>
        <p>ShoppingCart</p>
        {!products ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (Object.values(products).map(({ details, quantity }) => (<ShoppingItem
          key={ details.id }
          productCart={ details }
          quantity={ quantity }
          onClick={ this.removeItem }
        />))
        )}
        <p>{ this.totalPriceCart() }</p>
        <Link to="/">Voltar</Link>
        <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
      </div>
    );
  }
}

export default ShoppingCart;
