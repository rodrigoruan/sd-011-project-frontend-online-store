import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cart from './Cart';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
      loading: true,
      cartList: [],
    };
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit() {
    const { product, cartList } = this.state;
    const { title, price, thumbnail } = product;
    const cartProduct = (
      <li>
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </li>
    );
    this.setState({
      loading: false,
      cartList: [...cartList, cartProduct],
    });
  }

  render() {
    const { product, loading } = this.state;
    // console.log(product);
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link
          to={ { pathname: '/components/ProductDetails',
            state: { product } } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
        <br />
        <button
          type="submit"
          data-testid="product-add-to-cart"
          onClick={ this.handlerSubmit }
        >
          Adicionar ao Carrinho
        </button>
        {loading ? (<span>oi</span>) : (<Cart addCart={ product } />)}
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Card;
