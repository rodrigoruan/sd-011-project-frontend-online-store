import React, { Component } from 'react';
import { getProduct } from '../services/api';

class SearchProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      thumbnail: '',
    };
  }

  componentDidMount() {
    this.catchId();
  }

  async catchId() {
    const { match } = this.props;
    const { id } = match.params;
    const response = await getProduct(id);
    const { body: { title, price, thumbnail } } = response[0];
    this.setState({
      title,
      price,
      thumbnail,
    });
    console.log(response[0].body);
  }

  render() {
    const { title, price, thumbnail } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

export default SearchProduct;
