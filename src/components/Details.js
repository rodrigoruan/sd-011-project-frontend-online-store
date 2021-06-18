import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class Details extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     count: 0,
  //   };

  //   this.getLocalStorage = this.getLocalStorage.bind(this);
  // }

  // componentDidMount() {
  //   this.getLocalStorage();
  // }

  // getLocalStorage() {
  //   const { location } = this.props;
  //   const { state } = location;
  //   const { product } = state;
  //   const { title } = product;
  //   const keyProductName = localStorage.getItem(title);
  //   const changeToObject = JSON.parse(keyProductName);
  //   // const object = changeToObject.find((item) => item.sumCount);
  //   this.setState({
  //     count: changeToObject.sumCount + 1,
  //   });
  //   console.log(changeToObject.sumCount);
  // }

  render() {
    // const { count } = this.state;
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title, price, thumbnail, attributes } = product;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cartitems">
          Carrinho de compras
        </Link>
        <div>
          <h2 data-testid="product-detail-name">{`${title} - R$${price}`}</h2>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          <ul>
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                {`${attribute.name} - ${attribute.value_name}`}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/">Voltar</Link>
        <Button
          title={ product.title }
          thumbnail={ product.thumbnail }
          price={ product.price }
          // count={ count }
        />
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.objectOf({
    state: PropTypes.objectOf({
      product: PropTypes.objectOf({
        title: PropTypes.string,
        price: PropTypes.string,
        thumbnail: PropTypes.string,
        attributes: PropTypes.array,
      }),
    }),
  }).isRequired,
};
