import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomerRating from '../components/CustomerRating';
import Rating from '../components/Rating';

class ProductDetail extends Component {
  constructor() {
    super();
    this.addRating = this.addRating.bind(this);
  }

  getRatings(id) {
    const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
    let productRatings;
    if (ratings.length > 0) {
      productRatings = ratings.filter((rating) => rating.id === id);
      console.log(productRatings);
    }
    return productRatings;
  }

  addRating(rating) {
    const ratings = JSON.parse(localStorage.getItem('ratings')) || [];
    ratings.push(rating);
    localStorage.setItem('ratings', JSON.stringify(ratings));
    this.forceUpdate();
  }

  render() {
    const { location: { state: { detail } } } = this.props;
    const { title, thumbnail, price, attributes, installments, id } = detail;
    const productRatings = this.getRatings(id);

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
              <li>{`${detail.sold_quantity} unidades vendidas.`}</li>
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
        <CustomerRating addRatingFunction={ this.addRating } productId={ id } />
        {
          productRatings
            ? productRatings
              .map((rating, index) => <Rating key={ index } rating={ rating } />)
            : null
        }
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: {
    state: {
      details: {
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        attributes: {
          name: PropTypes.string,
          value_name: PropTypes.string,
        },
        installment: {
          quantity: PropTypes.number,
        },
      },
    },
  }.isRequired,
};

export default ProductDetail;
