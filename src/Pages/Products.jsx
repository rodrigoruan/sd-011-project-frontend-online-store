import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFound from './NotFound';

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.loadList = this.loadList.bind(this);
  }

  handleClick() {
    const { prodList } = this.props;
    const cardList = this.loadList();

    localStorage.setItem('cart', JSON.stringify(cardList));
  }

  loadList() {
    const cart = localStorage.getItem('cart');
    return JSON.parse(cart);
  }

  render() {
    const { prodList } = this.props;
    if (prodList.length === 0) return <NotFound />;
    // References:  Como enviar um objeto pelo Link -> https://reactrouter.com/web/api/Link

    return (
      <div>
        {prodList.map((item) => (
          <Link
            data-testid="product-detail-link"
            key={ item.id }
            to={ {
              pathname: `/product-detail/${item.id}`,
              state: { item: [item] },
            } }
          >
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
          </Link>
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  prodList: PropTypes.arrayOf(
    PropTypes.array,
    PropTypes.object,
  ).isRequired,
};
