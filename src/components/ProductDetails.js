import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productObject: null,
      counter: 1,
    };
    this.getProduct = this.getProduct.bind(this);
    this.setItem = this.setItem.bind(this);
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { ProductId } }, category, query } = this.props;
    const products = await getProductsFromCategoryAndQuery(category, query);
    const product = products.results.find((prod) => prod.id === ProductId);
    const { title, id, price, thumbnail, attributes } = product;
    const productObject = {
      title,
      id,
      price,
      thumbnail,
      attributes,
    };
    this.setState({ productObject });
  }

  setItem = () => {
    const { location } = this.props;
    const { state } = location;
    const { title, thumbnail, price, id } = state;
    const { counter } = this.state;
    this.setState((previus) => ({
      counter: previus.counter + 1,
    }));
    const obj = { title, thumbnail, price, id, counter };
    const objJSON = JSON.stringify(obj);
    localStorage.setItem(id, objJSON);
  }

  render() {
    const { productObject } = this.state;
    return (
      <div data-testid="product-detail-name">
        {(productObject === null)
          ? <p>Loading...</p>
          : <p>{ productObject.title }</p>}
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.setItem }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.isRequired,
  category: PropTypes.isRequired,
  query: PropTypes.isRequired,
  location: PropTypes.isRequired,
};

export default ProductDetails;
