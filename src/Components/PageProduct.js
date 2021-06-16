import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: 0,
      thumbnail: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.catchId();
  }

  async catchId() {
    const { match } = this.props;
    const { id } = match.params;
    const response = await fetch(`https://api.mercadolibre.com/items?ids=${id}`);
    const json = await response.json();
    const { body: { title, price, thumbnail } } = json[0];
    this.setState({
      title,
      price,
      thumbnail,
      loading: false,
    });
  }

  renderProduct = () => {
    const { title, price, thumbnail } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
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
