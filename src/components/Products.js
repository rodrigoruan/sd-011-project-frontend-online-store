import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Products.css';
import { Link } from 'react-router-dom';

class Products extends Component {
  constructor(props) {
    super(props);
    this.addItemCart = this.addItemCart.bind(this);
  }

  addItemCart() {
    const { product, func } = this.props;
    product.cartItem = true;
    func(product);
  }

  render() {
    const { title, img, price, product } = this.props;
    const { id } = product;
    return (
      <div className="productArea">
        <Link
          className="detailsLink"
          to={ {
            pathname: `/product-details/${title}`,
            state: {
              productToAdd: product,
              productId: id,
            },
          } }
          data-testid="product-detail-link"
        >
          <div className="product" data-testid="product" aria-hidden="true">
            <div className="img" style={ { backgroundImage: `url(${img})` } } />
            <div className="imgFront" />
            <img src={ img } alt="produto" />
            <p>
              {'R$'}
              { price ? price.toFixed(2) : '00' }
            </p>
            <p className="title">{ title }</p>
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addItemCart }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Products.propTypes = {
  product: PropTypes.objectOf(String).isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  func: PropTypes.func.isRequired,
};

export default Products;
