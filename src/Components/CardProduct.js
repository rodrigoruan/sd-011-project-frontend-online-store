import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// teste

class CardProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };

    this.onClick = this.onClick.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  onClick() {
    const { listProduct } = this.props;
    sessionStorage.setItem('product', JSON.stringify(listProduct));
    this.setRedirect();
  }

  setRedirect() {
    this.setState(() => ({
      redirect: true,
    }));
  }

  render() {
    const { redirect } = this.state;
    const { listProduct } = this.props;
    const { thumbnail, title, price } = listProduct;
    return !redirect ? (
      <div data-testid="product">
        { title }
        <img src={ thumbnail } alt={ title } />
        { price }
        <button
          type="button"
          onClick={ this.onClick }
          data-testid="product-detail-link"
        >
          Detalhes
        </button>
      </div>
    ) : (<Redirect to="/product" />);
  }
}

CardProduct.propTypes = {
  listProduct: PropTypes.shape(PropTypes.arrayOf({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
  })).isRequired,
};

export default CardProduct;
