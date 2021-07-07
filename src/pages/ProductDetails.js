import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Rating from "../components/ProductRating/Rating";
import Cart from "../imgs/Carrinho.png";
import goBackImg from "../imgs/Seta.png";
import CartProductsAmount from "../components/CartProductsAmount/CartProductsAmount";

import "./ProductDetails.css";

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

  render() {
    const { title, thumbnail, price, availableQuantity } = this.state;

    const { handleAddToShopCart, shopCart } = this.props;
    return (
      <div className="product-details-container">
        <header className="product-details-header">
          <Link to="/">
            <img
              width="30px"
              src={goBackImg}
              alt="Voltar para página inicial"
            />
          </Link>
          <div>
            <Link
              to="/ShoppingCart"
              className="shopping-cart-button"
              data-testid="shopping-cart-button"
            >
              <img width="30px" src={Cart} alt="imagem do carrinho" />
            </Link>
            <CartProductsAmount shopCart={shopCart} />
          </div>
        </header>
        <main className="product-details-main">
          <div className="img-container">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="details-content">
            <h2 className="ui header" data-testid="product-detail-name">
              {title}
            </h2>
            <p>{availableQuantity} unidades no estoque </p>
            <p className="price">
              {price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button
              className="ui primary button"
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={() => handleAddToShopCart(this.state)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </main>
        <Rating />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;
