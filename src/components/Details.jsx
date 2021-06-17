import React from 'react';
import * as api from '../services/api';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
    }
  }

  async getItemsFromCategoryAndQuery(category, inputQuery) {
    const request = await api.getProductsFromCategoryAndQuery(category, inputQuery);
    console.log('AQUI', request)
    this.setState({
      product: request.results,
    });
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const request = api.getProductsFromCategoryAndQuery(id, undefined);
      this.setState({
        product: request.result,
      });
  }
  render() {
    const { product } = this.state
    return (
      console.log('AQUI', product)
      // product.map(({ title, thumbnail, price, id }) => (
      //     <div data-testid="product"
      //       key={ title } >
      //       <p>{ title }</p>
      //       <img src={ thumbnail } alt={ title } />
      //       <p>{price}</p>
      //     </div>
      //   ))
    )
  }
}

export default Details;