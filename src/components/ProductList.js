import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  constructor() {
    super();
    this.handlerLocalStore = this.handlerLocalStore.bind(this);
  }

  handlerLocalStore(param) {
    param.countP = 1;
    if (!localStorage.item) {
      localStorage.setItem('item', JSON.stringify([param]));
    } else {
      const getLocal = JSON.parse(localStorage.getItem('item'));
      const getId = getLocal.map((value) => value.id);
      const verify = getId.indexOf(param.id);
      if (verify < 0) {
        localStorage.setItem('item', JSON.stringify([...getLocal, param]));
      } else {
        getLocal[verify].countP += 1;
        localStorage.setItem('item', JSON.stringify([...getLocal]));
      }
    }
  }

  render() {
    const { products: { title, price, thumbnail, id, shipping } } = this.props;
    const { products, foundQuantityItemsCart } = this.props;
    const { free_shipping: freeShipping } = shipping;

    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          {price}
        </p>
        <div>
          Frete:
          { freeShipping
            ? <p data-testid="free-shipping">Frete Gratis</p>
            : <p>A combinar com o vendedor</p> }
        </div>
        <button
          data-testid="product-add-to-cart"
          value={ id }
          onClick={ () => {
            this.handlerLocalStore(products);
            foundQuantityItemsCart();
          } }
          type="button"
        >
          Adicionar ao Carrinho
        </button>
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { detail: products },
          } }
          data-testid="product-detail-link"
        >
          detalhes
        </Link>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  foundQuantityItemsCart: PropTypes.func.isRequired,
};
