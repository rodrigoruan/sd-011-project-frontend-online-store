import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingItem from '../components/ShoppingItem';
import query from '../__mocks__/query';

class ShoppingCart extends Component {
  constructor() {
    super();
    const { results } = query;
    this.state = {
      products: '',
    };
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(id) {
    const { products } = this.state;
    const results = products.filter((product) => product.id !== id);
    this.setState({ products: results });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <p>ShoppingCart</p>
        {!products ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (products.map((item) => (<ShoppingItem
          key={ item.id }
          item={ item }
          onClick={ this.removeItem }
        />))
        )}
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default ShoppingCart;
