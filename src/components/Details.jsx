import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class Details extends Component {

  render() {
    const { title, price, thumbnail, specifications } = this.props;
    return (
      <div>
        <span data-testid="product-detail-name">{ title, price }</span>
        <div>
          <div>
          { thumbnail }
          </div>
          <div>
            <h3>Especificações técnicas</h3>
            { specifications }
          </div>
        </div>
      </div>
    )
  }
}
Details.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    specifications: PropTypes.array.isRequired,
};

