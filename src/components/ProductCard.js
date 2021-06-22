import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

export default class ItemProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
    };
    this.SeeMore = this.SeeMore.bind(this);
  }

  SeeMore = () => {
    this.setState({ shouldRedirect: true });
  };

  render() {
    const num = 10;
    const { item, handleAddToCart } = this.props;
    const { thumbnail, title, price, id, shipping } = item;
    const categoryId = item.category_id;
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect
          to={{
            pathname: `/details/${id}`,
            state: { id, categoryId, title, thumbnail, price },
          }}
        />
      );
    }

    const freeShiping = () => {
      if (shipping.free_shipping) {
        return <div data-testid="free-shipping">FRETE GRATIS</div>;
      }
    };
    return (
      <div data-testid="product" className="content" key={id}>
        {freeShiping()}
        <img src={thumbnail} alt="product thumbnail" />
        <h3>{title}</h3>
        <h6>
          R$
          {parseFloat(price, num).toFixed(2)}
        </h6>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={() => handleAddToCart(item)}
          className="btn btn-success"
        >
          Add to Cart!
        </button>
        <button data-testid="product-detail-link" type="button" onClick={this.SeeMore}>
          Ver Detalhes
        </button>
        {/* <Link
          to={{
            pathname: `/details/${id}`,
            state: { id, categoryId, title, thumbnail, price },
          }}
          data-testid="product-detail-link"
        >
          Ver Detalhes
        </Link> */}
      </div>
    );
  }
}

ItemProduct.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  item: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    category_id: PropTypes.string,
  }).isRequired,
};
