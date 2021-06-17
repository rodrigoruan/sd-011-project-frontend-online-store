import React, { Component } from 'react';
import './productDetail.css';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const {
      location:
        { state:
          { item },
        },
    } = this.props;
    return (
      <>
        {item.map((info) => (
          <div key={ info.id }>
            <h1 data-testid="product-detail-name">{info.title}</h1>
            <img src={ info.thumbnail } alt={ info.title } />
            <p>{ info.price }</p>
            { info.attributes.map((attributes) => (
              <p key={ attributes.id }>
                { `${attributes.name}: ${attributes.value_name}` }
              </p>
            ))}
          </div>
        ))}
      </>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default ProductDetail;
