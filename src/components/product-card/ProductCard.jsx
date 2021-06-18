import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import * as api from '../../services/api';
import './product-card.css';
import { Link } from 'react-router-dom';
import CartButton from '../../components/cart-button/CartButton'

export default class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      thumbnail: '',
      price: '',
    }
    // this.getProductInfo = this.getProductInfo.bind(this);
  }

  // getProductInfo() {
  //   const { product: { id, title, price, thumbnail } } = this.props;
  //   this.setState(() => {
  //     return {
  //       id, title, price, thumbnail
  //     }
  //   });
  // }

  // componentDidUpdate() {
  //   console.log(this.state)
  // }

  render() {
    const { product } = this.props;
    const { title, price, id, thumbnail } = product;
  
    return (
      <div
        // onClick={ () => this.getProductInfo() }
        data-testid="product"
        id={ id }
        key={ id }
      >
        <img src={ thumbnail } alt={ title } />
        <div className="wrapper">
          <h3>{ title }</h3>
          <p>
            Preço:
            { price }
          </p>
          <Link to={ `/product-details/${id}`}>Ver Detalhes</Link>
          <CartButton prod={product} />
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
