import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailsAddToCartButton from './AddToCartButton';
// import * as api from '../services/api';

export default class Details extends React.Component {
  constructor(props) {
    super(props);

    this.buildTechSpecifications = this.buildTechSpecifications.bind(this);
  }

  buildTechSpecifications(product) {
    return product.attributes.map((attribute) => (
      <ul key={ attribute.id }>
        <li>
          {`${attribute.name}: ${attribute.value_name}`}
        </li>
      </ul>
    ));
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <h1 data-testid="product-detail-name">{product.title}</h1>
        {this.buildTechSpecifications(product)}
        <DetailsAddToCartButton product={ product } />
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};
