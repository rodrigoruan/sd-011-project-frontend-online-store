import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cardproduct extends Component {
  render() {
    const { title, img, price, id, categoryId } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ img } width="100px" alt="produto" />
        <p>
          R$
          {' '}
          { price }
        </p>
        <Link
          to={ `/product-detail/${categoryId}/${id}` }
          data-testid="product-detail-link"
        >
          Ver Detalhes
        </Link>
      </div>
    );
  }
}

Cardproduct.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};

export default Cardproduct;
