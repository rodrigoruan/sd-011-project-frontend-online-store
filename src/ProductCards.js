import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.addtocart = this.addtocart.bind(this);
  }

  addtocart() {
    const { produto } = this.props;
    let getItem = JSON.parse(localStorage.getItem('productList'));
    getItem = [...getItem, produto];
    console.log(getItem);
    localStorage.setItem('productList', JSON.stringify(getItem));
  }

  render() {
    const { produto: { title, thumbnail, price, id } } = this.props;
    return (
      <fragment>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            data: title,
          } }
        >
          <div data-testid="product" className="product">
            <h3>{ title }</h3>
            <img className="product-img" width="100px" src={ thumbnail } alt={ title } />
            <p className="price">
              Preço: R$
              { price }
            </p>
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.addtocart }
        >
          Adicionar ao Carrinho
        </button>
      </fragment>
    );
  }
}

ProductCard.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
