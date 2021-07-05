import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardItem.css';
import { Link } from 'react-router-dom';
import AddToCartBttn from '../ShoppingCart/AddToCartBttn';

export default class CardItem extends Component {
  render() {
    const { product:
      { id, title, price, thumbnail, currency_id: currencyId, attributes,
      } } = this.props;
    return (
      <div className="CardContainer" data-testid="product">
        <div className="titleContainer">{title}</div>
        <div className="thumbContainer">
          <img src={ thumbnail } alt="Imagem do produto" className="Thumbnail" />
        </div>
        <div className="priceContainer">
          R$
          { price }
        </div>
        <div className="ratingContainer">
          ⭐⭐⭐⭐(
          {
            parseInt(Math.random() * 100, 10)
          }
          )
        </div>
        <div className="addToCartAndDetailsContainer">
          <Link
            className="moreDetails"
            to={ {
              pathname: `/product/${id}`,
              state: {
                name: title,
                image: thumbnail,
                price: { total: price, currency: currencyId },
                spec: attributes,
              },
            } }
            data-testid="product-detail-link"
          >
            <div>Mais detalhes</div>
          </Link>
          <AddToCartBttn
            product={ {
              id,
              title,
              price,
              thumbnail,
              currency_id: currencyId,
            } }
            dataTest="product-add-to-cart"
          />
        </div>
      </div>
    );
  }
}
CardItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    currency_id: PropTypes.string.isRequired,
    attributes: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
};
