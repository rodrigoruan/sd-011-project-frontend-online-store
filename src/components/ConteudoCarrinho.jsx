import React, { Component } from 'react';
import { ProductCartCard } from './index';

class ConteudoCarrinho extends Component {
  constructor() {
    super();

    this.state = {
      productsSelected: [],
    };

    this.getProductsFromStorage = this.getProductsFromStorage.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  componentDidMount() {
    this.getProductsFromStorage();
  }

  getProductsFromStorage() {
    const productsSelected = JSON.parse(localStorage.getItem('products'));
    
    if(productsSelected !== null ) this.setState({ productsSelected });
    
  }

  removeProduct(product) {
    const { productsSelected } = this.state;
    let quantityTotal = parseInt(localStorage.getItem('quantidade'));
    const productData = productsSelected.find((element) => element.title === product.title);
    const indexOfProduct = productsSelected.indexOf(productData);

    console.log(productsSelected[indexOfProduct].quantity);
    productsSelected.splice(indexOfProduct, 1);
    
    if (productsSelected.length <= 0) {
      this.setState({ productsSelected });
      localStorage.setItem('quantidade', quantityTotal);
      localStorage.removeItem('products');
      localStorage.removeItem('quantidade');
    } else {
      this.setState({ productsSelected });
      localStorage.setItem('products', JSON.stringify(productsSelected));
    } 
  }

  renderProducts() {
    let { productsSelected } = this.state;
    
    productsSelected = productsSelected.reverse();

    if (productsSelected.length !== 0) {
      return productsSelected.map(({ title, price, quantity, id, imgPath, available_quantity: qt }, index) => (
        <ProductCartCard
          key={ id }
          title={ title }
          price={ price }
          quantity={ quantity }
          imgPath={ imgPath }
          index={ index }
          removeProduct={ this.removeProduct }
          available_quantity={ qt }
        />
      ));
    }
    return productsSelected;
  }

  render() {
    const renderCart = this.renderProducts();
    const emptyCart = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    return renderCart.length !== 0 ? renderCart : emptyCart;
  }
}

export default ConteudoCarrinho;
