import React from 'react';
import PropTypes from 'prop-types';
import ButtonShopCart from '../Components/ButtonShopCart';

class ProductDetail extends React.Component {
  render() {
    const { addCartItem } = this.props;
    const { location } = this.props;
    const { state } = location;
    const { products } = state;
    return (
      <div>
        <div
          data-testid="product-detail-name"
        >
          {products.title}
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ addCartItem }
          value={ JSON.stringify(products) }
        >
          Adicionar
        </button>
        <div>
          <ButtonShopCart />
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.object,
  state: PropTypes.object,
  product: PropTypes.object,
}.isRequired;

export default ProductDetail;

// import React from 'react';
// import PropTypes from 'prop-types';

// class ProductDetail extends React.Component {
//   addCartItem = () => {
//     const { addCartItem } = this.props;
//     const { location } = this.props;
//     const { state } = location;
//     const { products } = state;

//     addCartItem(products);
//   }

//   render() {
//     const { location } = this.props;
//     const { state } = location;
//     const { products } = state;

//     return (
//       <div data-testid="product-detail-name">
//         <h2>{ products.title }</h2>
//         <button
//           type="button"
//           data-testid="product-detail-add-to-cart"
//           value={ JSON.stringify(products) }
//           onClick={ this.addCartItem }
//         >
//           Adicionar no Carrinho
//         </button>
//       </div>
//     );
//   }
// }

// ProductDetail.propTypes = {
//   location: PropTypes.shape({
//     state: PropTypes.shape({
//       products: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
//   addCartItem: PropTypes.func.isRequired,
// };

// export default ProductDetail;
