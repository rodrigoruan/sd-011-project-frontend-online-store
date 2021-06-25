import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import AvaliationForm from './AvaliationForm';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      allCartItens: [],
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const getStorage = { ...localStorage }; // O spread operator, espalha, distribui todo o objeto, na variavel;
    const itemProduct = Object.values(getStorage)
      .map((item) => JSON.parse(item))
      .filter((product) => product.count);
    this.setState({
      allCartItens: itemProduct,
    });
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title, price, thumbnail, attributes, shipping } = product;
    const { allCartItens } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cartitems">
          Carrinho de comprasㅤ
          <span data-testid="shopping-cart-size">
            {allCartItens.reduce((acc, cur) => acc + cur.count, 0)}
          </span>
        </Link>
        <div>
          <h2 data-testid="product-detail-name">{`${title} - R$${price}`}</h2>
          <img src={ thumbnail } alt={ title } />
          <br />
          {shipping.free_shipping ? (
            <span data-testid="free-shipping">Frete Grátis</span>
          ) : null }
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          <ul>
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                {`${attribute.name} - ${attribute.value_name}`}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/">Voltar</Link>
        <Button
          title={ product.title }
          thumbnail={ product.thumbnail }
          price={ product.price }
          quantity={ product.available_quantity }
          dataTestid="product-detail-add-to-cart"
          funcGetLocalStorage={ this.getLocalStorage }
        />
        <div>
          <AvaliationForm title={ title } />
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.objectOf({
    state: PropTypes.objectOf({
      product: PropTypes.objectOf({
        title: PropTypes.string,
        price: PropTypes.string,
        thumbnail: PropTypes.string,
        attributes: PropTypes.array,
      }),
    }),
  }).isRequired,
};
