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
    const id = await Api.getIdFetch(this.props.match.params.id);
    const positionBody = id[0].body;
    // console.log(id[0].body.title)
    this.setState({
      title: positionBody.title,
      price: positionBody.price,
      thumbnail: positionBody.thumbnail,
      attributes: positionBody.attributes,
    });
  }

  render() {
    const { title, thumbnail, price, attributes } = this.state;
    // console.log(this.props.match.params.id);
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cartitems">
          Carrinho de compras
        </Link>
        <div>
          <h2>
            { title }
            -
            R$
            { price }
          </h2>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          <ul>
            { attributes.map((product) => (<li key={ product.id }>
              {' '}
              { product.name }
              {' '}
              -
              {' '}
              { product.value_name }
              {' '}
                                           </li>))}
          </ul>
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
