import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        title: '',
        thumbnail: '',
        price: '',
        atributtes: [],
      },
    };
    this.fetchDataFromProduct = this.fetchDataFromProduct.bind(this);
    this.addtocart = this.addtocart.bind(this);
  }

  componentDidMount() {
    this.fetchDataFromProduct();
  }

  async fetchDataFromProduct() {
    const { location: { data }, match: { params: { id } } } = this.props;
    // console.log(this.props.match.params.id)
    // const { categoryId, query } = this.props;
    const productsDetails = await api.getProductsFromCategoryAndQuery('', data);
    // console.log(productsDetails)
    const productDetails = productsDetails.results.find((prod) => prod.id === id);
    // console.log(productDetails)
    this.setState({
      product: {
        title: productDetails.title,
        thumbnail: productDetails.thumbnail,
        price: productDetails.price,
        atributtes: productDetails.atributtes,
      },
    });
  }

  addtocart() {
    const { product } = this.state;
    localStorage.setItem('productInfo', JSON.stringify(product));
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price, atributtes } = product;
    return (
      <div>
        Detalhes do Produto
        <p data-testid="product-detail-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <p>{ atributtes }</p>
        {/* nome do produto, imagem, preço e especificação técnica. */}
        <br />
        <Link data-testid="shopping-cart-button" to="/cart">
          <button type="button">Retorne ao carrinho de compras</button>
        </Link>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.addtocart }
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default ProductDetails;

ProductDetails.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
