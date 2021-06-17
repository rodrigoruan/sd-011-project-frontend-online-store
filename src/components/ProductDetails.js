import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			product: {},
		}
		this.getProduct = this.getProduct.bind(this);
	}
	
	componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
		const { match } = this.props;
    const request = await getProductsFromCategoryAndQuery('$CATEGORY_ID', `${match.params.id}`);
		const product = await request.results.filter((result) => {
			if (result.title === match.params.id) {
				return result;
			}
		})
		await this.setState({
			product: product[0],
		})
		return product[0];
  }

	render() {
		const { product } = this.state;
		return (
			<div>
				<img src={product.thumbnail} alt="product-image" />
				<p>{product.title}</p>
				<p>{product.price}</p>
				{ product.attributes && product.attributes.map((att) => (
					<div>
						<p>{ att.name } - { att.value_name }</p>
					</div>
				))}
			</div>
		);
	}
}

export default ProductDetails;
