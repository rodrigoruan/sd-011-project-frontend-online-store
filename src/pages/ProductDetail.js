import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';
import RatingSection from '../components/RatingSection';

class ProductDetail extends Component {
  render() {
    const {
      location:
        { state:
          { produto, addToCart } } } = this.props;
    const { condition, price, thumbnail, title, id } = produto;
    console.log(produto);
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <h2>{ price }</h2>
        <img src={ thumbnail } alt={ `imagem de ${title}` } />
        <p>{ condition }</p>

        <button
          type="button"
          onClick={ () => {
            const addedCart = [...addToCart, produto];
            localStorage.setItem('addingCart', JSON.stringify(addedCart));
          } }
          data-testid="product-detail-add-to-cart"
        >
          Adicione ao carrinho
        </button>
        <CartButton
          link={ {
            pathname: '/cart',
            state: { cart: addToCart },
          } }
        />

        <RatingSection id={ id } />

      </div>
    );
  }
}

export default ProductDetail;

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      addToCart: PropTypes.arrayOf(PropTypes.object),
      produto: PropTypes.shape({
        condition: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
};
