import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shoppingCartImage from '../images/shoppingCart.jpg';

class ProductDetail extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    product.quantity = 1;
    if (!products.some((value) => value.id === product.id)) {
      products.push(product);
    } else {
      const currentIndex = products.map((value) => value.id).indexOf(product.id);
      products[currentIndex].quantity += 1;
    }
    localStorage.setItem('products', JSON.stringify(products));
  }

  render() {
    const { location: { state: { detail } } } = this.props;
    const {
      title,
      thumbnail,
      price,
      attributes,
      installments,
      sold_quantity: soldQuantity,
    } = detail;

    return (
      <div>
        <div>
          <p data-testid="product-detail-name">{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </div>

        {
          installments ? (
            <ul>
              <li>{`${soldQuantity} unidades vendidas.`}</li>
              <li>{`Estoque: ${installments.quantity}`}</li>
            </ul>
          ) : <p>Unidade única</p>
        }

        <div>
          <p>
            Especificações:
          </p>
          <ul>
            {attributes.map((attribute, index) => (
              <li key={ index }>
                {attribute.name}
                :
                {attribute.value_name}
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addToCart(detail) }
        >
          Adicionar ao carrinho
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ shoppingCartImage } alt="Cart" />
        </Link>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      detail: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        attributes: PropTypes.arrayOf(PropTypes.object),
        installments: PropTypes.shape({
          quantity: PropTypes.number,
        }),
        sold_quantity: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default ProductDetail;
