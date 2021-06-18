import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Details extends Component {
  render() {
    const { location: { state: { element } } } = this.props;
    const { title, price, thumbnail, attributes } = element;
    return (
      <div>
        <span data-testid="product-detail-name">{`${title}, ${price}`}</span>
        <div>
          <div>
            <img src={ thumbnail } alt={ title } />
          </div>
          <div>
            <h3>Especificações técnicas</h3>
            { attributes.map(({ name, value_name: valueName, id }) => (
              <p key={ id }>
                { name }
                :
                { valueName }
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      element: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
