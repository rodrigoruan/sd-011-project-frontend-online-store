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
            <div className="main-product-info">
              <h1 data-testid="product-detail-name">{info.title}</h1>
              <h1>{ `R$: ${info.price}` }</h1>
            </div>
            <div className="product-details">
              <img className="product-img" src={ info.thumbnail } alt={ info.title } />
              <div>
                { info.attributes.map((attributes) => (
                  <p key={ attributes.id }>
                    { `${attributes.name}: ${attributes.value_name}` }
                  </p>
                ))}
              </div>
            </div>
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
