import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
      thumbnail: '',
      attributes: [],
    };
    this.idFetch = this.idFetch.bind(this);
  }

  componentDidMount() {
    this.idFetch();
  }

  async idFetch() {
    const { match } = this.props;
    const { id } = match.params;
    const getProduct = await Api.getIdFetch(id);
    const positionBody = getProduct[0].body;
    this.setState({
      title: positionBody.title,
      price: positionBody.price,
      thumbnail: positionBody.thumbnail,
      attributes: positionBody.attributes,
    });
  }

  render() {
    const { title, thumbnail, price, attributes } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cartitems">
          Carrinho de compras
        </Link>
        <div>
          <h2>
            {`${title} - R$${price}`}
          </h2>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          <ul>
            { attributes.map((product) => (
              <li key={ product.id }>
                {`${product.name} - ${product.value_name}`}
              </li>))}
          </ul>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string,
    }),
  }).isRequired,
};
