import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  render() {
    const { location: { state: { detail } } } = this.props;
    const { title, thumbnail, price, attributes, installments } = detail;

    return (
      <div>
        <div>
          <h1 data-testid="product-detail-name">{title}</h1>
          <img src={ thumbnail } alt={ title } />
          <h2>{`R$ ${price}`}</h2>
        </div>

        {
          installments ? (
            <div>
              <h5>{`${detail.sold_quantity} unidades vendidas.`}</h5>
              <p>
                {`Estoque: ${installments.quantity}`}
              </p>
            </div>
          ) : <p>Unidade única</p>
        }

        <div>
          <h3>Especificações Técnicas:</h3>
          <p>
            {attributes.map((attribute, index) => (
              <p key={ index }>
                {attribute.name}
                :
                {attribute.value_name}
              </p>
            ))}
          </p>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
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
