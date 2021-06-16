import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Details extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cartitems">
          Carrinho de compras
        </Link>
        <div>
          <h2>
            { title }
            { price }
          </h2>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          {/* <ul>
            <li> {  } </li>
          </ul> */}
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
};

Details.defaultProps = {
  title: '',
  thumbnail: '',
  price: 0,
};
