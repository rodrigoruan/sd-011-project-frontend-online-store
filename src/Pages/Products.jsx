import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotFound from './NotFound';

class Products extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // implementar variável "prodList"
  handleClick() {
    const { prodList } = this.props;
    const cardList = this.loadList();

    productList.push({ prodList });
    localStorage.setItem('cart', JSON.stringify(cardList));
  }

  loadList() {
    const cart = localStorage.getItem('cart');
    return JSON.parse(cart);
  }

  render() {
    const { prodList } = this.props;
    if (prodList.length === 0) return <NotFound />;

    return (
      <div>
        { prodList.map((item) => (
          <div key={ item.id } data-testid="product">
            <h1 data-testid="shopping-cart-product-name">{item.title}</h1>
            <img src={ item.thumbnail } alt={ item.title } />
            <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
            <p>{`R$: ${item.price}`}</p>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ this.handleClick }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  prodList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default Products;
