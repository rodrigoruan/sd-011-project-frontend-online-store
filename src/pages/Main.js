import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import CartButton from '../components/CartButton';
import ProductListing from '../components/ProductListing';
import Category from '../components/Category';
import CardCreator from '../components/CardCreator';
import * as api from '../services/api';
import CartQuantity from '../components/CartQuantity';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      loading: true,
      query: '',
      categories: '',
      addingCart: [],
    };

    this.fetchProductCategory = this.fetchProductCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick({ target }) {
    const { value } = target;
    const { productList, query } = this.state;
    if (productList !== []) {
      this.setState({ loading: true });
      api
        .getProductsFromCategoryAndQuery(value, query)
        .then((data) => this.setState({ productList: data.results, loading: false }));
    }
  }

  async fetchProductCategory() {
    const { query, categories } = this.state;
    api
      .getProductsFromCategoryAndQuery(categories, query)
      .then((data) => this.setState({ productList: data.results, loading: false }));
  }

  render() {
    const { productList, loading, query, addingCart } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <Category change={ this.handleChange } click={ this.handleClick } />
          </Col>
          <Col xs={ 8 }>
            <Row>
              <Col xs={ 8 }>
                <SearchBar
                  click={ this.fetchProductCategory }
                  change={ this.handleChange }
                  value={ query }
                />
              </Col>
              <Col xs={ 3 }>
                <CartButton
                  link={ {
                    pathname: '/cart',
                    state: { cart: addingCart },
                  } }
                />
              </Col>
              <Col xs={ 1 }>
                <CartQuantity />
              </Col>
            </Row>
            {loading && <ProductListing />}
            <Row>
            {loading
              ? null
              : productList.map((product, index) => (
                <Col xs={ 4 } key={ index }>
                  <CardCreator item={ product } onClick={() => {
                        if (localStorage.getItem('addingCart')) {
                          const cart = JSON.parse(localStorage.getItem('addingCart'));
                          const addToCart = [...cart, product];
                          localStorage.setItem('addingCart', JSON.stringify(addToCart));
                          this.setState({ addingCart: cart });
                        } else {
                          const addedCart = [...addingCart, product];
                          localStorage.setItem('addingCart', JSON.stringify(addedCart));
                          this.setState(() => ({
                            addingCart: JSON.parse(localStorage.getItem('addingCart')) || [] }
                          ));
                        }
                      }} to={{ pathname: `/product-detail/${product.id}`,
                      state: { produto: product,
                        addToCart: JSON.parse(localStorage.getItem('addingCart')) || [] } }} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Main;
