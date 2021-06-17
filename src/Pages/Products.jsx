import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFound from './NotFound';
// ininciando requisito 7
class Products extends Component {
  render() {
    const { prodList } = this.props;
    if (prodList.length === 0) {
      return <NotFound />;
    }
    return (
      <div>
        { prodList.map((item) => (
          // Como enviar um objeto pelo Link -> https://reactrouter.com/web/api/Link
          <Link
            data-testid="product-detail-link"
            key={ item.id }
            to={ {
              pathname: `/product-detail/${item.id}`,
              state: { item: [item] },
            } }
          >
            <div data-testid="product">
              <h1>{item.title}</h1>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{`R$: ${item.price}`}</p>
            </div>
          </Link>
        ))}
      </div>

    );
  }
}

Products.propTypes = {
  prodList: PropTypes.arrayOf(
    PropTypes.array,
    PropTypes.object,
  ).isRequired,
};

export default Products;
