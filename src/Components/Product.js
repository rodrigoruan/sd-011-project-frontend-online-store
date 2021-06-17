import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Home.module.css';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: 0,
      imagePath: '',
      attributes: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchProductDetails(id);
  }

  async fetchProductDetails(id) {
    const url = `https://api.mercadolibre.com/items/${id}`;
    const fetchDetails = await fetch(url);
    const details = await fetchDetails.json();
    this.setState({
      title: details.title,
      price: details.price,
      imagePath: details.thumbnail,
      attributes: [],
    });
  }

  render() {
    const { title, price, imagePath, attributes } = this.state;
    return (
      <div className={ style.product }>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ imagePath } alt="" />
        <br />
        <span>
          Preço:
          {' '}
          { price }
        </span>
        <div>
          <ul>
            {!attributes && <span />}
            {/* {attributes.map((atribute) => <li key="">{attributes}</li>)} */}
          </ul>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Product;
