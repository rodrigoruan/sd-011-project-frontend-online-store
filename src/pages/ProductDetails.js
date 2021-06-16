import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const { location: { state: { detail } } } = this.props;
    const { title, thumbnail, price, attributes, installments } = detail;

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
