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
      products.map(({ title, thumbnail, price, id }) => (
        <Link to={`details/${ id }`} data-testid="product-detail-link">
          <div data-testid="product"
            key={ title } >
            <p>{ title }</p>
            <img src={ thumbnail } alt={ title } />
            <p>{price}</p>
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
