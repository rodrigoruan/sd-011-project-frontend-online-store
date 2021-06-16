import React from 'react';
import * as fetchApi from '../services/api';
import carrinho from '../carrinho.png';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      productInfo: '',
      gotInfo: false,
    }
  }
  
  componentDidMount() {
    fetchApi.getProductsFromCategoryAndQuery(this.props.match.params.id, '', false).then((result) => {
      this.setState ({
        productInfo: result,
        gotInfo: true,
      })
    })
  }


  render() {
    const  {productInfo: { title, thumbnail, price, attributes }} = this.state;
    return (
      <div>
        <p className="productDetailsName" data-testid="product-detail-name">{title}</p>
        <img src={thumbnail} alt="Foto do Produto" />
        <p className="productDetailsPrice">Preço: R${price}</p>
        <p className="productDetailsTechnicalSpec"></p>
        <ul> {attributes ? attributes.map((attribute) => <li> {attribute.name}: {attribute.value_name} </li>) : this.setState = {gotInfo: false}} </ul>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img src={ carrinho } alt="carrinho" />
        </Link>
      </div>
    );
  }
}

export default ProductDetails;
