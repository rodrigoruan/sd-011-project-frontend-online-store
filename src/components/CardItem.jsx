import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardItem extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     load: true,
  //   };
  // }

  render() {
    const { products } = this.props;
    const notFound = 'Nenhum produto foi encontrado';

    // if (load) {
    //   console.log('entrou no if');
    //   this.setState({
    //     load: false,
    //   });
    //   return (<p>teste</p>);
    // }

    return products.length === 0 ? notFound : (
      products.map((product) => (
        <Link
        to={{
          pathname: `/details/${ product.id }`,
          state: {
            product,
          }
        }}
        data-testid="product-detail-link">
          <div data-testid="product"
            key={ product.title } >
            <p>{ product.title }</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{product.price}</p>
          </div>
        </Link>
      ))
    );
  }
}
export default CardItem;

CardItem.propTypes = {
  products: PropTypes.shape({
    map: PropTypes.func.isRequired,
    length: PropTypes.arrayOf().isRequired,
  }).isRequired,
};
