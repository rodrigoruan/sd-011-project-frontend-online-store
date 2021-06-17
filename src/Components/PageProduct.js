import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PageProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: 0,
      thumbnail: '',
      loading: true,
      quantity: 1,
    };
  }

  componentDidMount() {
    this.catchId();
  }

  addToCart = (title, price, thumbnail, id) => {
    const { quantity } = this.state;

    localStorage.setItem(id, [title, '/n', thumbnail, '/n', price, '/n', quantity]);
  }

  async catchId() {
    const { match } = this.props;
    const { id } = match.params;

    const response = await fetch(`https://api.mercadolibre.com/items?ids=${id}`);
    const json = await response.json();
    const { body: { title, price, thumbnail } } = json[0];
    this.setState({
      id,
      title,
      price,
      thumbnail,
      loading: false,
    });
  }

  renderProduct = () => {
    const { title, price, thumbnail, id } = this.state;

    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          value={ title }
          onClick={ () => this.addToCart(title, price, thumbnail, id) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Ir para o carrinho
        </Link>
        <span>
          { loading ? <p>Loading...</p> : this.renderProduct() }
        </span>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <span>
          { loading ? <p>Loading...</p> : this.renderProduct() }
        </span>
      </div>
    );
  }
}

PageProduct.propTypes = {
  match: PropTypes.arrayOf(Object).isRequired,
};

export default PageProduct;
