// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { getProductsFromCategoryAndQuery } from '../services/api';

// class SearchProduct extends Component {
//   constructor(props) {
//     super(props);

//     const { searchBar, categoryId } = this.props;

//     this.state = {
//       searchBar,
//       categoryId,
//       products: [],
//     };
//   }

//   componentDidMount() {
//     this.searchProduct();
//   }

//   async searchProduct() {
//     const { searchBar, categoryId } = this.state;
//     const response = await getProductsFromCategoryAndQuery(categoryId, searchBar);
//     const { results } = response;

//     this.setState({
//       products: results,
//     });
//   }

//   render() {
//     const { products } = this.state;
//     if (products.length < 1) return <p>Nenhum produto foi encontrado</p>;
//     return (
//       <div>
//         { products.map(({ title, price, thumbnail, id }) => (
//           <div data-testid="product" key={ id }>
//             <img src={ thumbnail } alt={ title } />
//             <h3>{ title }</h3>
//             <p>{ price }</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default SearchProduct;

// SearchProduct.propTypes = {
//   searchBar: PropTypes.string.isRequired,
// };
