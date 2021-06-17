import React from 'react';

class Details extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     products: [],
  //   }
  // }

  // // async getItemsFromCategoryAndQuery(category, inputQuery) {
  // //   const request = await api.getProductsFromCategoryAndQuery(category, inputQuery);
  // //   console.log('AQUI', request)
  // //   this.setState({
  // //     product: request.results,
  // //   });
  // // }

  // // componentDidMount() {
  // //   const { match } = this.props;
  // //   const { params } = match;
  // //   const { id } = params;
  // //   const { products } = this.props.location.state
  // //   console.log('NOSSO TESTE', products)
  // //   this.handleState(products)
  // // }

  //    handleState(products) {
  //    this.setState({
  //     products,
  //   });
  // }
  render() {
    const { product: { title, price, thumbnail } } = this.props.location.state;
    return (
      <div
        key={ title }
      >
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
      </div>
    );
  }
}

export default Details;
