import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    console.log(product);
    const { title, thumbnail, price, attributes } = product;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <p>{`Preço: ${price} R$`}</p>
        <img src={ thumbnail } alt={ title } />
        {attributes.map(({ name }, index) => <p key={ index }>{ name }</p>)}
        <br />
        <Link to="/">Voltar</Link>
        <br />
        <Link
          to="/components/Cart"
        >
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        attributes: PropTypes.shape({
          map: PropTypes.func,
        }),
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
