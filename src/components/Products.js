import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Products.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCartPlus } from '@fortawesome/free-solid-svg-icons';

class Products extends Component {
  constructor(props) {
    super(props);
    this.addItemCart = this.addItemCart.bind(this);
  }

  async addItemCart() {
    const { product, func, cartQuant } = this.props;
    if (product.cartCount && product.available_quantity > product.cartCount) {
      product.cartCount += 1;
    } else {
      product.cartCount = 1;
    }
    func(product);
    cartQuant();
    this.forceUpdate();
  }

  render() {
    const { title, img, price, product } = this.props;
    const { id, shipping } = product;
    const FIFTY = 50;
    const freeShip = (
      <div data-testid="free-shipping" className="free">
        <p className="p">
          Frete Grátis
        </p>
        <FontAwesomeIcon icon={ faBox } />
      </div>
    );
    console.log(product);
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
            <img className="noneImg" src={ img } alt="produto" />
            <p>
              {'R$'}
              { price ? price.toFixed(2) : '00' }
            </p>
            <p className="title">
              { title.length > FIFTY ? `${title.substr(0, FIFTY)}...` : `${title}` }
            </p>
          </div>
        </Link>
        <div className="bottom">
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ this.addItemCart }
            className="button"
          >
            <div className="cartAdd">
              <FontAwesomeIcon icon={ faCartPlus } />
            </div>
            <p className="p">
              Adicionar
            </p>
          </button>
          { shipping.free_shipping && freeShip}
        </div>
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
  cartQuant: PropTypes.number.isRequired,
};

export default Products;
