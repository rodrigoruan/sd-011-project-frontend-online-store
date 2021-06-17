import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as fetchApi from '../services/api';
import carrinho from '../carrinho.png';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { productTitle } = this.props;
    this.state = {
      title: productTitle,
      thumbnail: '',
      price: '',
      attributes: [],
    };
  }

  componentDidMount() {
    const {
      match: { params: { categoryId, query } },
      productId,
    } = this.props;
    fetchApi.getProductsFromCategoryAndQuery(categoryId, query).then(({ results }) => {
      const productInfo = results.find(({ id }) => id === productId);
      const { thumbnail, price, attributes } = productInfo;
      this.setState({
        thumbnail,
        price,
        attributes,
      });
    });
  }

  render() {
    const { title, thumbnail, price, attributes } = this.state;
    return (
      <div>
        <p className="productDetailsName" data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt="Foto do Produto" />
        <p className="productDetailsPrice">{`Preço: R$${price}`}</p>
        <ul>
          {
            attributes ? attributes.map(({ name, value_name: value }, index) => (
              <li key={ index }>{`${name}: ${value}`}</li>
            )) : <p>Loading...</p>
          }
        </ul>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img src={ carrinho } alt="carrinho" />
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired,
      categoryId: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  productId: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
};

export default ProductDetails;
