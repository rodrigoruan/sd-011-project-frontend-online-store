import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from '../components/ProductRating/Rating';
import Cart from '../imgs/Carrinho.png';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

  render() {
    const { title, thumbnail, price, id } = this.state;
    const { handleAddToShopCart } = this.props;
    return (
      <div key={ id }>
        <span data-testid="product-detail-name">{ title }</span>
        <span>
          { price }
        </span>
        <img src={ thumbnail } alt="imagem do produto" />
        <Link
          data-testid="product-detail-link"
          to={ { pathname: '/ShoppingCart',
            state: {
              item: this.state,
            },
          } }
        >

          <Link
            to="/ShoppingCart"
            className="shopping-cart-button"
            data-testid="shopping-cart-button"
          >
            <img
              width="30px"
              src={ Cart }
              alt="imagem do carrinho"
            />
          </Link>

        </Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => handleAddToShopCart(id, title, thumbnail, price) }
        >
          Adicionar ao carrinho
        </button>
        <Rating />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;
