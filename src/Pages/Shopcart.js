import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NewItem from '../Components/NewItem';

class Shopcart extends Component {
  constructor(props) {
    super(props);
    const { location: { state } } = this.props;
    this.state = {
      products: state,
      loading: true,
    };
    this.setLoading = this.setLoading.bind(this);
  }

  componentDidMount() {
    this.setLoading();
  }

  setLoading() {
    const { products } = this.state;
    if (products.length === 0) {
      this.setState({
        loading: true,
      });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { products, loading } = this.state;
    return (

      loading ? (
        <header className="header">
          <Link
            to={ { pathname: '/' } }
          >
            <h1 id="text-search-h1" data-testid="home-initial-message">
              G16 Store
            </h1>
          </Link>
          <div data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </div>
        </header>

      ) : (
        <div className="ajuda-deus">
          <header className="header">
            <Link
              to={ { pathname: '/' } }
            >
              <h1 className="logo" data-testid="home-initial-message">
                G16 Store
              </h1>
            </Link>
          </header>
          <div className="card-container">
            {products.map((product, index) => (
              <NewItem newProduct={ product } key={ index } />
            ))}
            <Link to={ { pathname: '/PurchasePage', state: products } }>
              <button data-testid="checkout-products" type="button">
                Finalizar Compra
              </button>
            </Link>
          </div>
        </div>

      ));
  }
}

Shopcart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf().isRequired,
  }).isRequired,
};

export default Shopcart;
