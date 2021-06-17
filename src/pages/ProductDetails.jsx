import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };

    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match: { params: { id } } } = this.props;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}?include_attributes=all`);
    const responseJSON = await response.json();
    this.setState({ product: responseJSON });
  }

  render() {
    const { product: { title, price, thumbnail, attributes } } = this.state;
    console.log(attributes);
    return (
      <section>
        <p data-testid="product-detail-name">{ title }</p>
        <p>{ price }</p>
        <img src={ thumbnail } alt="product" />
        <div>
          {!attributes ? null : attributes.map((spec) => (
            <p key={ spec.id }>
              { spec.name }
              :
              {' '}
              { spec.value_name }
            </p>))}
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default ProductDetails;
